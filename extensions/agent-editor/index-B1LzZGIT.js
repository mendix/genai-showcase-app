import { getComponentFramework as o } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as n } from "@mendix/model-access-sdk";
function m(i) {
  const e = o(i);
  return {
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
    app: {
      commands: e.getApi("mendix.CommandRegistrationApi"),
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
        customBlobDocuments: e.getApi("mendix.CustomBlobDocumentApi")
      }
    },
    network: {
      httpProxy: e.getApi("mendix.HttpProxyApi")
    }
  };
}
export {
  m
};
