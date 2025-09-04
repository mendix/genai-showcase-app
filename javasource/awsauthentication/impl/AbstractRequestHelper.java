package awsauthentication.impl;

import java.net.InetAddress;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.UnknownHostException;
import java.time.Duration;

import com.mendix.core.CoreException;

import awsauthentication.proxies.AbstractHttpConfig;
import awsauthentication.proxies.AbstractRequest;
import awsauthentication.proxies.AbstractRetryPolicy;
import awsauthentication.proxies.ApacheHttpConfig;
import awsauthentication.proxies.BasicClientConfig;
import awsauthentication.proxies.ENUM_Boolean;
import awsauthentication.proxies.NoRetryPolicy;
import awsauthentication.proxies.NumberRetryPolicy;
import awsauthentication.proxies.SdkClientConfig;
import awsauthentication.proxies.UrlHttpConfig;
import software.amazon.awssdk.core.client.config.ClientOverrideConfiguration;
import software.amazon.awssdk.core.retry.RetryPolicy;
import software.amazon.awssdk.http.SdkHttpClient;
import software.amazon.awssdk.http.apache.ApacheHttpClient;
import software.amazon.awssdk.http.urlconnection.UrlConnectionHttpClient;

public class AbstractRequestHelper {
	@SuppressWarnings("unused")
	private static final MxLogger LOGGER = new MxLogger(AbstractRequestHelper.class);

	public static URI getEndpointOverride(final AbstractRequest request) throws CoreException, URISyntaxException {
		if (request == null) {
			return null;
		}
		if (request.getAbstractRequest_BasicClientConfig() == null) {
			return null;
		}
		if (request.getAbstractRequest_BasicClientConfig().getEndpointUrl() == null) {
			return null;
		}
		if (request.getAbstractRequest_BasicClientConfig().getEndpointUrl().isBlank()) {
			return null;
		}
		return new URI(request.getAbstractRequest_BasicClientConfig().getEndpointUrl());
	}
	
	/**
	 * sets all clientOverrideConfigurations based on those set in the abstractRequest
	 * @param abstractRequest the request entity provided with the call to the java action
	 * @return a ClientOverrideConfiguration with all values set based on the AbstractRequest
	 * @throws CoreException
	 */
	public static ClientOverrideConfiguration getClientOverrideConfiguration(final AbstractRequest abstractRequest) throws CoreException {
		return getClientOverrideConfiguration(abstractRequest, HEADER_VALUE);
	}	
	
	public static ClientOverrideConfiguration getClientOverrideConfiguration(final AbstractRequest abstractRequest, final String awsHeaderValue) throws CoreException {
		ClientOverrideConfiguration.Builder clientOverrideConfigBuilder = ClientOverrideConfiguration.builder();
		
		if (awsHeaderValue != null && !awsHeaderValue.isBlank()) {
			clientOverrideConfigBuilder.putHeader(USER_AGENT, awsHeaderValue);
			LOGGER.trace("header on client set:", awsHeaderValue);
		} 
		else { 
			clientOverrideConfigBuilder.putHeader(USER_AGENT, HEADER_VALUE);
			LOGGER.trace("header on client set:", HEADER_VALUE);
		}
		
		// check if both the request and the basicClientConfig are not null to prevent nullpointer exceptions. 
		if (abstractRequest == null ) {
			return clientOverrideConfigBuilder.build();
		}
		if (abstractRequest.getAbstractRequest_BasicClientConfig() == null) {
			return clientOverrideConfigBuilder.build();
		}
		
		BasicClientConfig basicClientConfig = abstractRequest.getAbstractRequest_BasicClientConfig();
		setClientOverrideValues(clientOverrideConfigBuilder, basicClientConfig);
		
		
		return clientOverrideConfigBuilder.build();
	}

	/**
	 * Set the values of the AbstractHttpConfig on the SdkClientBuilder. The type of the SdkClientBuilder will depend on the specialization of the AbstractHttpConfig entity.
	 * If the AbstractHttpConfig entity is not found, or if the request is empty, a default ApacheHttpClient is returned
	 * 
	 * @param abstractRequest the request object that is a part of all calls. 
	 * @return SdkHttpClient If no AbstractHttpClient is found, an ApacheHttpClient with default settings is returned. If the request is null, a default ApacheHttpClient is returned
	 * @throws UnknownHostException
	 * @throws CoreException
	 */
	
	public static SdkHttpClient getSdkHttpClient(final AbstractRequest abstractRequest) throws UnknownHostException, CoreException {
		if (abstractRequest == null) {
			LOGGER.debug("no AbstractRequest: default ApacheHttpClient");
			return ApacheHttpClient.builder().build();
		}
		BasicClientConfig basicConfig = abstractRequest.getAbstractRequest_BasicClientConfig();
		if (basicConfig == null) {
			LOGGER.debug("no BasicClientConfig: default ApacheHttpClient");
			return ApacheHttpClient.builder().build();
		}
		
		switch (basicConfig.getMendixObject().getType()) {
		case SdkClientConfig.entityName: {
			return createSdkHttpClientFromSdkClientConfig(basicConfig);
		}
		default:
			LOGGER.debug("unknown BasicClientConfig: default ApacheHttpClient");
			return ApacheHttpClient.builder().build();
		}
	}

	private static SdkHttpClient createSdkHttpClientFromSdkClientConfig(final BasicClientConfig basicConfig)
			throws CoreException, UnknownHostException {
		AbstractHttpConfig httpConfig = ((SdkClientConfig)basicConfig).getSdkClientConfig_AbstractHttpConfig();
		if (httpConfig == null) {
			LOGGER.debug("no AbstractHttpConfig: default ApacheHttpClient");
			return ApacheHttpClient.builder().build();
		}
		switch (httpConfig.getMendixObject().getType()){
		case ApacheHttpConfig.entityName: {
			ApacheHttpConfig apacheHttpConfig = (ApacheHttpConfig)httpConfig;
			LOGGER.debug("ApacheHttpConfig found");
			return getApacheHttpClient(apacheHttpConfig);
		}
		case UrlHttpConfig.entityName: {
			LOGGER.debug("UrlHttpConfig found");
			UrlHttpConfig urlHttpConfig = (UrlHttpConfig)httpConfig;
			return getUrlHttpClient(urlHttpConfig);
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + httpConfig.getMendixObject().getType() + ". Use a specialization of this entity.");
		}
	}
	
	private static void setClientOverrideValues(final ClientOverrideConfiguration.Builder clientOverrideConfigBuilder,
			final BasicClientConfig basicClientConfig) throws CoreException {
		if (basicClientConfig.getApiTimeOutInMs() != null) {
			clientOverrideConfigBuilder.apiCallTimeout(Duration.ofMillis(basicClientConfig.getApiTimeOutInMs()));
		}
		if (basicClientConfig.getMendixObject().getType().equals(SdkClientConfig.entityName)) {
			SdkClientConfig sdkClientConfig = (SdkClientConfig)basicClientConfig;
			setSdkClientOverrideValues(clientOverrideConfigBuilder, sdkClientConfig);
		}
	}

	private static void setSdkClientOverrideValues(final ClientOverrideConfiguration.Builder clientOverrideConfigBuilder,
			final SdkClientConfig sdkClientConfig) throws CoreException {
		if (sdkClientConfig.getApiAttemptTimeOutInMs() != null) {
			clientOverrideConfigBuilder.apiCallAttemptTimeout(Duration.ofMillis(sdkClientConfig.getApiAttemptTimeOutInMs()));
		}
		
		if (sdkClientConfig.getSdkClientConfig_AbstractRetryPolicy() != null) {
			RetryPolicy retryPolicy = getRetryPolicy(sdkClientConfig.getSdkClientConfig_AbstractRetryPolicy());
			clientOverrideConfigBuilder.retryPolicy(retryPolicy);
		}
	}
	
	private static RetryPolicy getRetryPolicy(final AbstractRetryPolicy abstractRetryPolicy) {
		switch (abstractRetryPolicy.getMendixObject().getType()) {
		case NoRetryPolicy.entityName: {
			LOGGER.debug("set NoRetryPolicy");
			return RetryPolicy.none();
		}
		case NumberRetryPolicy.entityName: {
			NumberRetryPolicy numRetryPolicy = (NumberRetryPolicy)abstractRetryPolicy;
			RetryPolicy retryPolicy = RetryPolicy.builder().numRetries(numRetryPolicy.getMaxNumberOfRetries()).build();
			LOGGER.debug("set NumberRetryPolicy: " + numRetryPolicy.getMaxNumberOfRetries());
			return retryPolicy;
		}
		default:
			throw new IllegalArgumentException("Unexpected value: " + abstractRetryPolicy.getMendixObject().getType() + ". Use a specialization of this entity.");
		}
	}

	private static SdkHttpClient getApacheHttpClient(final ApacheHttpConfig apacheHttpConfig) throws UnknownHostException {
				
		ApacheHttpClient.Builder clientBuilder = ApacheHttpClient.builder();
		
		if (apacheHttpConfig.getConnectionAcquisitionTimeOutInMs() != null) {
			clientBuilder.connectionAcquisitionTimeout(Duration.ofMillis(apacheHttpConfig.getConnectionAcquisitionTimeOutInMs()));
			LOGGER.trace("connectionAcquisitionTimeout set on apacheHttpConfig: " +  apacheHttpConfig.getConnectionAcquisitionTimeOutInMs() + "ms");
		}
		
		if (apacheHttpConfig.getConnectionMaxIdleTimeInMs() != null) {
			clientBuilder.connectionMaxIdleTime(Duration.ofMillis(apacheHttpConfig.getConnectionMaxIdleTimeInMs()));
			LOGGER.trace("connectionMaxIdleTime set on apacheHttpConfig: " +  apacheHttpConfig.getConnectionMaxIdleTimeInMs() + "ms");
		}
		
		if (apacheHttpConfig.getConnectionTimeOutInMs() != null) {
			clientBuilder.connectionTimeout(Duration.ofMillis(apacheHttpConfig.getConnectionTimeOutInMs()));
			LOGGER.trace("getConnectionTimeOutInMs set on apacheHttpConfig: " +  apacheHttpConfig.getConnectionTimeOutInMs() + "ms");
		}
		
		if (apacheHttpConfig.getConnectionTimeToLiveInMs() != null ) {
			clientBuilder.connectionTimeToLive(Duration.ofMillis(apacheHttpConfig.getConnectionTimeToLiveInMs()));
			LOGGER.trace("connectionTimeToLive set on apacheHttpConfig: " +  apacheHttpConfig.getConnectionTimeToLiveInMs() + "ms");
		}
		
		if (apacheHttpConfig.getSocketTimeOutInMs() != null) {
			clientBuilder.socketTimeout(Duration.ofMillis(apacheHttpConfig.getSocketTimeOutInMs()));
			LOGGER.trace("socketTimeout set on apacheHttpConfig: " +  apacheHttpConfig.getSocketTimeOutInMs() + "ms");
		}
		
		if (apacheHttpConfig.getLocalAddress() != null && !apacheHttpConfig.getLocalAddress().isBlank()) {
			InetAddress inetAddress = InetAddress.getByName(apacheHttpConfig.getLocalAddress());
			clientBuilder.localAddress(inetAddress);
			LOGGER.trace("localAddress set on apacheHttpConfig: ", inetAddress, "ms");
		}
		
		if (apacheHttpConfig.getMaxConnections() != null) {
			clientBuilder.maxConnections(apacheHttpConfig.getMaxConnections());
			LOGGER.trace("maxConnections set on apacheHttpConfig: " +  apacheHttpConfig.getMaxConnections());
		}
		
		// the following values use a boolean enum. If the boolean enum is set to null, the system default value of the apache http client will be used.
		//Therefore, these values are not set in the case of an empty/null value
		Boolean expectContinueEnabled = convertBooleanEnum(apacheHttpConfig.getExpectContinueEnabled());
		if (expectContinueEnabled != null) {
			clientBuilder.expectContinueEnabled(expectContinueEnabled);
			LOGGER.trace("expectContinueEnabled set on apacheHttpConfig: " +  expectContinueEnabled);
		}
		Boolean tcpKeepAlive = convertBooleanEnum(apacheHttpConfig.getTcpKeepAlive());
		if (tcpKeepAlive != null) {
			clientBuilder.tcpKeepAlive(tcpKeepAlive);
			LOGGER.trace("tcpKeepAlive set on apacheHttpConfig: " +  tcpKeepAlive);
		}
		Boolean useIdleConnectionReaper = convertBooleanEnum(apacheHttpConfig.getUseIdleConnectionReaper());
		if (useIdleConnectionReaper != null) {
			clientBuilder.useIdleConnectionReaper(useIdleConnectionReaper);
			LOGGER.trace("useIdleConnectionReaper set on apacheHttpConfig: " +  useIdleConnectionReaper);
		}
		LOGGER.debug("return ApacheHttpClient");
		return clientBuilder.build();
	}
	
	private static SdkHttpClient getUrlHttpClient(final UrlHttpConfig urlHttpConfig) {
		UrlConnectionHttpClient.Builder clientBuilder = UrlConnectionHttpClient.builder();
		if (urlHttpConfig.getConnectionTimeOutInMs() != null) {
			clientBuilder.connectionTimeout(Duration.ofMillis(urlHttpConfig.getConnectionTimeOutInMs()));
			LOGGER.trace("connectionTimeout set on urlHttpConfig: " +  urlHttpConfig.getConnectionTimeOutInMs() + "ms");
		}
		if (urlHttpConfig.getSocketTimeOutInMs() != null) {
			clientBuilder.socketTimeout(Duration.ofMillis(urlHttpConfig.getSocketTimeOutInMs()));
			LOGGER.trace("socketTimeout set on urlHttpConfig: " +  urlHttpConfig.getSocketTimeOutInMs() + "ms");
		}
		LOGGER.debug("return UrlConnectionHttpClient");
		return clientBuilder.build();
	}
	
	private static Boolean convertBooleanEnum(final ENUM_Boolean enum_Boolean) {
		if (enum_Boolean == null) {
			return null;
		}
		
		switch (enum_Boolean){
		case _True: {
			return Boolean.TRUE;
		}
		case _False: {
			return Boolean.FALSE;
		}
		default:
			return null;
		}
		
	}
	private static final String HEADER_VALUE = "Mendix-Community-Supported-Connector";
	private static final String USER_AGENT = "User-Agent";

}