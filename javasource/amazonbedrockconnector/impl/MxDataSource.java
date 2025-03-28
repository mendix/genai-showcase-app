package amazonbedrockconnector.impl;

import java.util.Date;

import com.mendix.systemwideinterfaces.core.IContext;
import amazonbedrockconnector.proxies.ConfluenceDataSourceConfiguration;
import amazonbedrockconnector.proxies.ConfluenceSourceConfiguration;
import amazonbedrockconnector.proxies.DataSource;
import amazonbedrockconnector.proxies.DataSourceConfiguration;
import amazonbedrockconnector.proxies.ENUM_ConfluenceAuthType;
import amazonbedrockconnector.proxies.ENUM_ConfluenceHostType;
import amazonbedrockconnector.proxies.ENUM_DataSourceStatus;
import amazonbedrockconnector.proxies.ENUM_DataSourceType;
import amazonbedrockconnector.proxies.ENUM_SharePointAuthType;
import amazonbedrockconnector.proxies.ENUM_SharePointHostType;
import amazonbedrockconnector.proxies.S3DataSourceConfiguration;
import amazonbedrockconnector.proxies.SharePointDataSourceConfiguration;
import amazonbedrockconnector.proxies.SharePointSourceConfiguration;
import amazonbedrockconnector.proxies.Site;

public class MxDataSource {
	
	private static final MxLogger LOGGER = new MxLogger(MxDataSource.class);
	
	public static void getMxDataSource(DataSource mxDataSource, software.amazon.awssdk.services.bedrockagent.model.DataSource awsDataSource, IContext mxContext ) {
		
		mxDataSource.setCreatedAt(Date.from(awsDataSource.createdAt()));
		mxDataSource.setDataSourceId(awsDataSource.dataSourceId());
		mxDataSource.setKnowledgeBaseId(awsDataSource.knowledgeBaseId());
		mxDataSource.setName(awsDataSource.name());
		mxDataSource.setStatus(getMxDataSourceStatus(awsDataSource.status()));
		mxDataSource.setUpdatedAt(Date.from(awsDataSource.updatedAt()));
		mxDataSource.setDescription(awsDataSource.description());
		
		DataSourceConfiguration mxDataSourceConfiguration = new DataSourceConfiguration(mxContext);
		mxDataSource.setDataSourceConfiguration_DataSource(mxDataSourceConfiguration);
		
		switch (awsDataSource.dataSourceConfiguration().type()) {
		case CONFLUENCE:
			mxDataSourceConfiguration.setDataSourceType(ENUM_DataSourceType.CONFLUENCE);
			createMxConfluenceDataSourceConfiguration(mxDataSourceConfiguration, awsDataSource.dataSourceConfiguration(), mxContext);
			break;
		case S3:
			mxDataSourceConfiguration.setDataSourceType(ENUM_DataSourceType.S3);
			createMxS3DataSourceConfiguration(mxDataSourceConfiguration, awsDataSource.dataSourceConfiguration(), mxContext);
			break;
		case SHAREPOINT:
			mxDataSourceConfiguration.setDataSourceType(ENUM_DataSourceType.SHAREPOINT);
			createMxSharePointDataSourceConfiguration(mxDataSourceConfiguration, awsDataSource.dataSourceConfiguration(), mxContext);
			break;
		case SALESFORCE:
			mxDataSourceConfiguration.setDataSourceType(ENUM_DataSourceType.SALESFORCE);
			LOGGER.warn("The DataSource type 'SALESFORCE' is currently not supported.");
			break;
		case WEB:
			mxDataSourceConfiguration.setDataSourceType(ENUM_DataSourceType.WEB);
			LOGGER.warn("The DataSource type 'WEB' is currently not supported.");
			break;

		default:
			mxDataSourceConfiguration.setDataSourceType(ENUM_DataSourceType.UNKNOWN_TO_SDK_VERSION);
			LOGGER.warn("The DataSource type is currently not supported.");
			break;
		}
	}
	
	private static void createMxConfluenceDataSourceConfiguration(DataSourceConfiguration mxDataSourceConfiguration,software.amazon.awssdk.services.bedrockagent.model.DataSourceConfiguration awsDataSourceConfiguration, IContext mxContext) {
		
		ConfluenceDataSourceConfiguration mxConfluenceDataSourceConfiguration = new ConfluenceDataSourceConfiguration(mxContext);
		mxDataSourceConfiguration.setConfluenceDataSourceConfiguration_DataSourceConfiguration(mxConfluenceDataSourceConfiguration);
		
		ConfluenceSourceConfiguration mxConfluenceSourceConfiguration = new ConfluenceSourceConfiguration(mxContext);
		software.amazon.awssdk.services.bedrockagent.model.ConfluenceSourceConfiguration awsConfluenceSourceConfiguration = awsDataSourceConfiguration.confluenceConfiguration().sourceConfiguration();		
		mxConfluenceSourceConfiguration.setAuthType(getConfluenceAuthType(awsConfluenceSourceConfiguration.authType()));
		mxConfluenceSourceConfiguration.setCredentialsSecretARN(awsConfluenceSourceConfiguration.credentialsSecretArn());
		mxConfluenceSourceConfiguration.setHostType(getConfluenceHostType(awsConfluenceSourceConfiguration.hostType()));
		mxConfluenceSourceConfiguration.setHostURL(awsConfluenceSourceConfiguration.hostUrl());
		mxConfluenceSourceConfiguration.setConfluenceSourceConfiguration_ConfluenceDataSourceConfiguration(mxConfluenceDataSourceConfiguration);
	}
	
	private static void createMxS3DataSourceConfiguration(DataSourceConfiguration mxDataSourceConfiguration,software.amazon.awssdk.services.bedrockagent.model.DataSourceConfiguration awsDataSourceConfiguration, IContext mxContext) {
		
		S3DataSourceConfiguration mxS3DataSourceConfiguration = new S3DataSourceConfiguration(mxContext);
		
		mxS3DataSourceConfiguration.setBucketARN(awsDataSourceConfiguration.s3Configuration().bucketArn());
		mxS3DataSourceConfiguration.setBucketOwnerAccountId(awsDataSourceConfiguration.s3Configuration().bucketOwnerAccountId());
		mxS3DataSourceConfiguration.setS3DataSourceConfiguration_DataSourceConfiguration(mxDataSourceConfiguration);
		
	}
	
	private static void createMxSharePointDataSourceConfiguration(DataSourceConfiguration mxDataSourceConfiguration,software.amazon.awssdk.services.bedrockagent.model.DataSourceConfiguration awsDataSourceConfiguration, IContext mxContext) {
		
		SharePointDataSourceConfiguration mxSharePointDataSourceConfiguration = new SharePointDataSourceConfiguration(mxContext);
		mxDataSourceConfiguration.setSharePointDataSourceConfiguration_DataSourceConfiguration(mxSharePointDataSourceConfiguration);
		
		SharePointSourceConfiguration mxSharePointSourceConfiguration = new SharePointSourceConfiguration(mxContext);
		software.amazon.awssdk.services.bedrockagent.model.SharePointSourceConfiguration awsSharePointSourceConfiguration = awsDataSourceConfiguration.sharePointConfiguration().sourceConfiguration();		
		mxSharePointSourceConfiguration.setAuthType(getSharePointAuthType(awsSharePointSourceConfiguration.authType()));
		mxSharePointSourceConfiguration.setCredentialsSecretArn(awsSharePointSourceConfiguration.credentialsSecretArn());
		mxSharePointSourceConfiguration.setDomain(awsSharePointSourceConfiguration.domain());
		mxSharePointSourceConfiguration.setHostType(getSharePointHostType(awsSharePointSourceConfiguration.hostType()));
		mxSharePointSourceConfiguration.setTenantId(awsSharePointSourceConfiguration.tenantId());
		mxSharePointSourceConfiguration.setSharePointSourceConfiguration_SharePointDataSourceConfiguration(mxSharePointDataSourceConfiguration);
		awsSharePointSourceConfiguration.siteUrls().forEach(awsSiteUrl -> createMxSite(awsSiteUrl, mxSharePointSourceConfiguration, mxContext));
	}
	
	private static void createMxSite(String awsSiteUrl,SharePointSourceConfiguration mxSharePointSourceConfiguration, IContext mxContext) {
		
		Site mxSite = new Site(mxContext);
		mxSite.setSiteURL(awsSiteUrl);
		mxSite.setSite_SharePointSourceConfiguration(mxSharePointSourceConfiguration);
	
		
	}
	
	public static ENUM_DataSourceStatus getMxDataSourceStatus(software.amazon.awssdk.services.bedrockagent.model.DataSourceStatus awsStatus) {
		
		switch (awsStatus) {
		
		case AVAILABLE : 
			return ENUM_DataSourceStatus.AVAILABLE;
			
		case DELETING:
			return ENUM_DataSourceStatus.DELETING;
		
		case DELETE_UNSUCCESSFUL:
			return ENUM_DataSourceStatus.DELETING;
		
		default:
			return ENUM_DataSourceStatus.UNKNOWN_TO_SDK_VERSION;
		}
		
	}
	
	private static ENUM_ConfluenceAuthType getConfluenceAuthType(software.amazon.awssdk.services.bedrockagent.model.ConfluenceAuthType awsConfluenceAuthType) {
		
		switch (awsConfluenceAuthType) {
		
		case BASIC : 
			return ENUM_ConfluenceAuthType.BASIC;
			
		case OAUTH2_CLIENT_CREDENTIALS:
			return ENUM_ConfluenceAuthType.OAUTH2_CLIENT_CREDENTIALS;
		
		default:
			return ENUM_ConfluenceAuthType.UNKNOWN_TO_SDK_VERSION;
		}
		
	}
	
	private static ENUM_ConfluenceHostType getConfluenceHostType(software.amazon.awssdk.services.bedrockagent.model.ConfluenceHostType awsConfluenceHostType) {
		
		switch (awsConfluenceHostType) {
		
		case SAAS: 
			return ENUM_ConfluenceHostType.SAAS;
		
		default:
			return ENUM_ConfluenceHostType.UNKNOWN_TO_SDK_VERSION;
		}
		
	}
	
	private static ENUM_SharePointAuthType getSharePointAuthType(software.amazon.awssdk.services.bedrockagent.model.SharePointAuthType awsSharePointAuthType) {
		
		switch (awsSharePointAuthType) {
		
		case OAUTH2_CLIENT_CREDENTIALS:
			return ENUM_SharePointAuthType.OAUTH2_CLIENT_CREDENTIALS;
		
		default:
			return ENUM_SharePointAuthType.UNKNOWN_TO_SDK_VERSION;
		}
		
	}
	
	private static ENUM_SharePointHostType getSharePointHostType(software.amazon.awssdk.services.bedrockagent.model.SharePointHostType awsSharePointHostType) {
		
		switch (awsSharePointHostType) {
		
		case ONLINE:
			return ENUM_SharePointHostType.ONLINE;
		
		default:
			return ENUM_SharePointHostType.UNKNOWN_TO_SDK_VERSION;
		}
		
	}

}

