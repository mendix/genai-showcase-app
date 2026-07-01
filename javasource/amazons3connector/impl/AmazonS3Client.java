package amazons3connector.impl;

import java.util.concurrent.ExecutorService;

import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.MendixRuntimeException;

import amazons3connector.proxies.AbstractS3Request;
import amazons3connector.proxies.ENUM_AWS_CommitmentPolicy;
import awsauthentication.impl.AWSAsyncBuilderConfigurator;
import awsauthentication.impl.AWSBuilderConfigurator;
import awsauthentication.impl.AuthCredentialsProvider;
import awsauthentication.impl.Utils;
import awsauthentication.proxies.Credentials;
import awsauthentication.proxies.ENUM_Region;
import software.amazon.awssdk.auth.credentials.AwsCredentialsProvider;
import software.amazon.awssdk.services.kms.KmsClient;
import software.amazon.awssdk.services.kms.KmsClientBuilder;
import software.amazon.awssdk.services.s3.S3AsyncClient;
import software.amazon.awssdk.services.s3.S3AsyncClientBuilder;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.S3ClientBuilder;
import software.amazon.awssdk.services.s3.S3Configuration;
import software.amazon.encryption.s3.CommitmentPolicy;
import software.amazon.encryption.s3.S3AsyncEncryptionClient;
import software.amazon.encryption.s3.algorithms.AlgorithmSuite;
import software.amazon.encryption.s3.materials.KmsKeyring;

public class AmazonS3Client {
	private static final MxLogger LOGGER = new MxLogger(AmazonS3Client.class);

	private static final String AWS_HEADER_VALUE = "Mendix-S3-5.2.0";
	
	public static S3Client getS3Client(Credentials credentials, ENUM_Region region, AbstractS3Request request) throws CoreException {	
		try {
			var configurator = new AWSBuilderConfigurator<S3ClientBuilder, S3Client>(S3Client.builder());
			configurator.setAbstractRequest(request)
				.setCredentials(credentials)
				.setRegion(region)
				.setAwsHeaderValue(AWS_HEADER_VALUE);			
			S3ClientBuilder clientBuilder = configurator.configure();
			
			if (request.getAbstractS3Request_S3Configuration() != null) {
				clientBuilder.serviceConfiguration(createS3Configuration(request.getAbstractS3Request_S3Configuration()));
			}
			
			return clientBuilder.build();
		} catch (Exception e) {
			LOGGER.error("Failed to create S3 client " + e.getMessage());
			throw new MendixRuntimeException(e);
		}
	}
	
	public static S3AsyncClient getS3AsyncClient(Credentials credentials, ENUM_Region region, AbstractS3Request request) throws CoreException {
		try {	
			var configurator = new AWSAsyncBuilderConfigurator<S3AsyncClientBuilder, S3AsyncClient>(S3AsyncClient.builder());
			configurator.setAbstractRequest(request)
				.setCredentials(credentials)
				.setRegion(region)
				.setAwsHeaderValue(AWS_HEADER_VALUE);

			S3AsyncClientBuilder asyncBuilder = configurator.configure();

			if (request.getAbstractS3Request_S3Configuration() != null) {
				asyncBuilder.serviceConfiguration(createS3Configuration(request.getAbstractS3Request_S3Configuration()));
			}

			return asyncBuilder.build();
		} catch (Exception e) {
			LOGGER.error("Failed to create S3 Async client " + e.getMessage());
			throw new MendixRuntimeException(e);
		}
	}
	
	private static S3Configuration createS3Configuration(amazons3connector.proxies.S3Configuration mxS3Configuration) {
		S3Configuration awsS3Configuration = S3Configuration.builder()
			.pathStyleAccessEnabled(mxS3Configuration.getPathStyleAccessEnabled())
			.build();
		
		return awsS3Configuration;
	}
	
	public static S3AsyncEncryptionClient createEncryptedClient(Credentials kmsCredentials, ENUM_Region kmsRegion, String KMSKeyID, S3AsyncClient wrappedS3Client, ENUM_AWS_CommitmentPolicy mxPolicy, AbstractS3Request request) throws CoreException {
		KmsClient kmsClient = getKmsClient(kmsCredentials, kmsRegion, request);

		KmsKeyring keyring =
			KmsKeyring.builder()
				.wrappingKeyId(KMSKeyID)
				.kmsClient(kmsClient)
				.build();

		CommitmentPolicy awsPolicy = getAmazonCommitmentPolicy(mxPolicy);
		
		
		S3AsyncEncryptionClient client;
		
		if (awsPolicy.equals(CommitmentPolicy.FORBID_ENCRYPT_ALLOW_DECRYPT)) {
			//keep backwards compatibility (with existing encrypted data)			
			client = S3AsyncEncryptionClient.builderV4()
			.commitmentPolicy(awsPolicy)
			.wrappedClient(wrappedS3Client)
			.encryptionAlgorithm(AlgorithmSuite.ALG_AES_256_GCM_IV12_TAG16_NO_KDF)
			.keyring(keyring)
			.build();
			LOGGER.debug("Outdated V3 client side encryption algorithm");
		}
		else {
			client = S3AsyncEncryptionClient.builderV4()
					.commitmentPolicy(awsPolicy)
					.wrappedClient(wrappedS3Client)
					.keyring(keyring)
					.build();
			LOGGER.debug("New V4 client side encryption algorithm");
		}		
		
		return client;
	}
	
	private static KmsClient getKmsClient(Credentials kmsCredentials, ENUM_Region kmsRegion, AbstractS3Request request) {
		try {
			var configurator = new AWSBuilderConfigurator<KmsClientBuilder, KmsClient>(KmsClient.builder());
			configurator.setAbstractRequest(request)
				.setCredentials(kmsCredentials)
				.setRegion(kmsRegion)
				.setAwsHeaderValue(AWS_HEADER_VALUE);			
			KmsClientBuilder clientBuilder = configurator.configure();
						
			return clientBuilder.build();
		} catch (Exception e) {
			LOGGER.error("Exception in Java Code, Failed to create KMS client " + e.getMessage());
			throw new MendixRuntimeException(e);
		}
		
	}
	
	
	private static CommitmentPolicy getAmazonCommitmentPolicy(final ENUM_AWS_CommitmentPolicy mxPolicy) {
		try {
			return CommitmentPolicy.valueOf(mxPolicy.name());
		}
		catch(IllegalArgumentException e) {
			LOGGER.error("Invalid CommitmentPolicy:" + mxPolicy.name());
			throw e;
		}
	}

	

}