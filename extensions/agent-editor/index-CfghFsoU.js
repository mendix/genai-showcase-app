import { getComponentFramework as o } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as n } from "@mendix/model-access-sdk";
function t(i) {
  const e = o(i);
  return {
    app: {
      files: e.getApi("mendix.AppFilesApi"),
      model: {
        domainModels: n(
          "mendix.DomainModelApi",
          "DomainModels$DomainModel",
          i
        ),
        pages: n(
          "mendix.PageApi",
          "Pages$Page",
          i
        ),
        constants: n(
          "mendix.ConstantApi",
          "Constants$Constant",
          i
        ),
        enumerations: n(
          "mendix.EnumerationApi",
          "Enumerations$Enumeration",
          i
        ),
        snippets: n(
          "mendix.SnippetApi",
          "Pages$Snippet",
          i
        ),
        buildingBlocks: n(
          "mendix.BuildingBlockApi",
          "Pages$BuildingBlock",
          i
        ),
        projects: e.getApi("mendix.ProjectApi"),
        modules: e.getApi("mendix.ModuleApi"),
        moduleSettings: n(
          "mendix.ModuleSettingsApi",
          "Projects$ModuleSettings",
          i
        ),
        microflows: n(
          "mendix.MicroflowModelApi",
          "Microflows$Microflow",
          i
        ),
        customBlobDocuments: e.getApi("mendix.CustomBlobDocumentApi"),
        importMappings: n(
          "mendix.ImportMappingModelApi",
          "ImportMappings$ImportMapping",
          i
        ),
        exportMappings: n(
          "mendix.ExportMappingModelApi",
          "ExportMappings$ExportMapping",
          i
        ),
        jsonStructures: n(
          "mendix.JsonStructureModelApi",
          "JsonStructures$JsonStructure",
          i
        ),
        messageDefinitions: n(
          "mendix.MessageDefinitionModelApi",
          "MessageDefinitions$MessageDefinitionCollection",
          i
        ),
        xmlSchemas: n(
          "mendix.XmlSchemaModelApi",
          "XmlSchemas$XmlSchema",
          i
        ),
        workflows: n(
          "mendix.WorkflowApi",
          "Workflows$Workflow",
          i
        )
      }
    }
  };
}
function m(i) {
  if (i.runMode !== "ui")
    throw new Error("getStudioProApi can only be used in UI mode, please use getHeadlessStudioProApi instead");
  const e = o(i);
  return {
    app: {
      ...t(i).app,
      projectChanges: e.getApi("mendix.ProjectChangesApi")
    },
    ui: {
      messageBoxes: e.getApi("mendix.MessageBoxApi"),
      tabs: e.getApi("mendix.TabApi"),
      panes: e.getApi("mendix.DockablePaneApi"),
      extensionsMenu: e.getApi("mendix.ExtensionsMenuApi"),
      preferences: e.getApi("mendix.PreferencesApi"),
      dialogs: e.getApi("mendix.DialogApi"),
      notifications: e.getApi("mendix.NotificationApi"),
      editors: e.getApi("mendix.EditorApi"),
      elementSelectors: e.getApi("mendix.ElementSelectorApi"),
      versionControl: e.getApi("mendix.VersionControlApi"),
      appExplorer: e.getApi("mendix.AppExplorerApi"),
      documents: e.getApi("mendix.DocumentEditorApi"),
      messagePassing: e.getApi("mendix.MessagePassingApi")
    },
    network: {
      httpProxy: e.getApi("mendix.HttpProxyApi")
    },
    runtime: {
      controller: e.getApi("mendix.RuntimeControllerApi"),
      configuration: e.getApi("mendix.RuntimeConfigurationApi")
    }
  };
}
export {
  t as p,
  m as r
};
//# sourceMappingURL=index-CfghFsoU.js.map
