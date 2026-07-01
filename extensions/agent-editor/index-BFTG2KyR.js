import { getComponentFramework as t } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as a } from "@mendix/model-access-sdk";
function p(n) {
  const i = t(n);
  function e(o, s) {
    return a(o, s, n);
  }
  return {
    app: {
      files: i.getApi("mendix.AppFilesApi"),
      model: {
        domainModels: e(
          "mendix.DomainModelApi",
          "DomainModels$DomainModel"
        ),
        pages: e("mendix.PageApi", "Pages$Page"),
        constants: e(
          "mendix.ConstantApi",
          "Constants$Constant"
        ),
        enumerations: e(
          "mendix.EnumerationApi",
          "Enumerations$Enumeration"
        ),
        snippets: e(
          "mendix.SnippetApi",
          "Pages$Snippet"
        ),
        buildingBlocks: e(
          "mendix.BuildingBlockApi",
          "Pages$BuildingBlock"
        ),
        projects: i.getApi("mendix.ProjectApi"),
        modules: i.getApi("mendix.ModuleApi"),
        moduleSettings: e(
          "mendix.ModuleSettingsApi",
          "Projects$ModuleSettings"
        ),
        microflows: e(
          "mendix.MicroflowModelApi",
          "Microflows$Microflow"
        ),
        customBlobDocuments: i.getApi("mendix.CustomBlobDocumentApi"),
        importMappings: e(
          "mendix.ImportMappingModelApi",
          "ImportMappings$ImportMapping"
        ),
        exportMappings: e(
          "mendix.ExportMappingModelApi",
          "ExportMappings$ExportMapping"
        ),
        jsonStructures: e(
          "mendix.JsonStructureModelApi",
          "JsonStructures$JsonStructure"
        ),
        messageDefinitions: e(
          "mendix.MessageDefinitionModelApi",
          "MessageDefinitions$MessageDefinitionCollection"
        ),
        xmlSchemas: e(
          "mendix.XmlSchemaModelApi",
          "XmlSchemas$XmlSchema"
        ),
        workflows: e(
          "mendix.WorkflowApi",
          "Workflows$Workflow"
        ),
        imageCollections: e(
          "mendix.ImageCollectionApi",
          "Images$ImageCollection"
        ),
        regularExpressions: e(
          "mendix.RegularExpressionApi",
          "RegularExpressions$RegularExpression"
        ),
        moduleSecurity: e(
          "mendix.ModuleSecurityApi",
          "Security$ModuleSecurity"
        ),
        viewEntitySourceDocuments: e(
          "mendix.ViewEntitySourceDocumentApi",
          "DomainModels$ViewEntitySourceDocument"
        ),
        layouts: e("mendix.LayoutApi", "Pages$Layout"),
        pageTemplates: e(
          "mendix.PageTemplateApi",
          "Pages$PageTemplate"
        ),
        customIconCollections: e(
          "mendix.CustomIconCollectionApi",
          "CustomIcons$CustomIconCollection"
        ),
        dataSets: e(
          "mendix.DataSetApi",
          "DataSets$DataSet"
        ),
        documentTemplates: e(
          "mendix.DocumentTemplateApi",
          "DocumentTemplates$DocumentTemplate"
        ),
        menuDocuments: e(
          "mendix.MenuDocumentApi",
          "Menus$MenuDocument"
        ),
        nanoflows: e(
          "mendix.NanoflowApi",
          "Microflows$Nanoflow"
        ),
        rules: e("mendix.RuleApi", "Microflows$Rule"),
        mlMappingDocuments: e(
          "mendix.MLMappingDocumentApi",
          "MLMappings$MLMappingDocument"
        ),
        queues: e("mendix.QueueApi", "Queues$Queue"),
        dataTransformers: e(
          "mendix.DataTransformerApi",
          "DataTransformers$DataTransformer"
        ),
        messageDefinitions2: e(
          "mendix.MessageDefinition2Api",
          "MessageDefinitions$MessageDefinition2"
        ),
        publishedODataServices2: e(
          "mendix.PublishedODataService2Api",
          "ODataPublish$PublishedODataService2"
        ),
        consumedODataServices: e(
          "mendix.ConsumedODataServiceApi",
          "Rest$ConsumedODataService"
        ),
        consumedRestServices: e(
          "mendix.ConsumedRestServiceApi",
          "Rest$ConsumedRestService"
        ),
        publishedRestServices: e(
          "mendix.PublishedRestServiceApi",
          "Rest$PublishedRestService"
        ),
        importedWebServices: e(
          "mendix.ImportedWebServiceApi",
          "WebServices$ImportedWebService"
        ),
        publishedWebServices: e(
          "mendix.PublishedWebServiceApi",
          "WebServices$PublishedWebService"
        ),
        scheduledEvents: e(
          "mendix.ScheduledEventApi",
          "ScheduledEvents$ScheduledEvent"
        ),
        javaActions: e(
          "mendix.JavaActionApi",
          "JavaActions$JavaAction"
        ),
        javaScriptActions: e(
          "mendix.JavaScriptActionApi",
          "JavaScriptActions$JavaScriptAction"
        ),
        authentications: e(
          "mendix.AuthenticationApi",
          "Authentication$Authentication"
        ),
        connectors: e(
          "mendix.ConnectorApi",
          "ConnectorKit$Connector"
        ),
        connectorTypes: e(
          "mendix.ConnectorTypeApi",
          "ConnectorKit$ConnectorType"
        ),
        databaseConnections: e(
          "mendix.DatabaseConnectionApi",
          "DatabaseConnector$DatabaseConnection"
        ),
        excelDataImporterTemplates: e(
          "mendix.ExcelDataImporterTemplateApi",
          "ExcelDataImporter$Template"
        ),
        businessEventServices: e(
          "mendix.BusinessEventServiceApi",
          "BusinessEvents$BusinessEventService"
        ),
        entityChangeDataCaptureServices: e(
          "mendix.EntityChangeDataCaptureServiceApi",
          "ChangeDataCapture$EntityChangeDataCaptureService"
        )
      }
    }
  };
}
function c(n) {
  if (n.runMode !== "ui")
    throw new Error("getStudioProApi can only be used in UI mode, please use getHeadlessStudioProApi instead");
  const i = t(n);
  return {
    app: {
      ...p(n).app,
      projectChanges: i.getApi("mendix.ProjectChangesApi")
    },
    ui: {
      messageBoxes: i.getApi("mendix.MessageBoxApi"),
      tabs: i.getApi("mendix.TabApi"),
      panes: i.getApi("mendix.DockablePaneApi"),
      extensionsMenu: i.getApi("mendix.ExtensionsMenuApi"),
      preferences: i.getApi("mendix.PreferencesApi"),
      dialogs: i.getApi("mendix.DialogApi"),
      notifications: i.getApi("mendix.NotificationApi"),
      editors: i.getApi("mendix.EditorApi"),
      elementSelectors: i.getApi("mendix.ElementSelectorApi"),
      versionControl: i.getApi("mendix.VersionControlApi"),
      appExplorer: i.getApi("mendix.AppExplorerApi"),
      documents: i.getApi("mendix.DocumentEditorApi"),
      messagePassing: i.getApi("mendix.MessagePassingApi")
    },
    network: {
      httpProxy: i.getApi("mendix.HttpProxyApi")
    },
    runtime: {
      controller: i.getApi("mendix.RuntimeControllerApi"),
      configuration: i.getApi("mendix.RuntimeConfigurationApi")
    }
  };
}
try {
  await import("@mendix/model-registry");
} catch {
  globalThis.console?.warn("@mendix/model-registry is not available");
}
export {
  c,
  p
};
