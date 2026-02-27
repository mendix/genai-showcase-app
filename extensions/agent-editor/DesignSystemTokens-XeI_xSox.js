import { getComponentFramework as l } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as t } from "@mendix/model-access-sdk";
function i(e) {
  const o = l(e);
  return {
    ui: {
      messageBoxes: o.getApi("mendix.MessageBoxApi"),
      tabs: o.getApi("mendix.TabApi"),
      panes: o.getApi("mendix.DockablePaneApi"),
      extensionsMenu: o.getApi("mendix.ExtensionsMenuApi"),
      preferences: o.getApi("mendix.PreferencesApi"),
      dialogs: o.getApi("mendix.DialogApi"),
      notifications: o.getApi("mendix.NotificationApi"),
      editors: o.getApi("mendix.EditorApi"),
      elementSelectors: o.getApi("mendix.ElementSelectorApi"),
      versionControl: o.getApi("mendix.VersionControlApi"),
      appExplorer: o.getApi("mendix.AppExplorerApi"),
      documents: o.getApi("mendix.DocumentEditorApi"),
      messagePassing: o.getApi("mendix.MessagePassingApi")
    },
    app: {
      files: o.getApi("mendix.AppFilesApi"),
      model: {
        domainModels: t(
          "mendix.DomainModelApi",
          "DomainModels$DomainModel",
          e
        ),
        pages: t(
          "mendix.PageApi",
          "Pages$Page",
          e
        ),
        constants: t(
          "mendix.ConstantApi",
          "Constants$Constant",
          e
        ),
        enumerations: t(
          "mendix.EnumerationApi",
          "Enumerations$Enumeration",
          e
        ),
        snippets: t(
          "mendix.SnippetApi",
          "Pages$Snippet",
          e
        ),
        buildingBlocks: t(
          "mendix.BuildingBlockApi",
          "Pages$BuildingBlock",
          e
        ),
        projects: o.getApi("mendix.ProjectApi"),
        moduleSettings: t(
          "mendix.ModuleSettingsApi",
          "Projects$ModuleSettings",
          e
        ),
        microflows: t(
          "mendix.MicroflowModelApi",
          "Microflows$Microflow",
          e
        ),
        customBlobDocuments: o.getApi("mendix.CustomBlobDocumentApi"),
        importMappings: t(
          "mendix.ImportMappingModelApi",
          "ImportMappings$ImportMapping",
          e
        ),
        exportMappings: t(
          "mendix.ExportMappingModelApi",
          "ExportMappings$ExportMapping",
          e
        ),
        jsonStructures: t(
          "mendix.JsonStructureModelApi",
          "JsonStructures$JsonStructure",
          e
        ),
        messageDefinitions: t(
          "mendix.MessageDefinitionModelApi",
          "MessageDefinitions$MessageDefinitionCollection",
          e
        ),
        xmlSchemas: t(
          "mendix.XmlSchemaModelApi",
          "XmlSchemas$XmlSchema",
          e
        ),
        workflows: t(
          "mendix.WorkflowApi",
          "Workflows$Workflow",
          e
        )
      }
    },
    network: {
      httpProxy: o.getApi("mendix.HttpProxyApi")
    }
  };
}
var c = Object.defineProperty, u = (e, o) => c(e, "name", { value: o, configurable: !0 });
const r = { get borderRadiusFull() {
  return "9999px";
}, get borderRadiusXs() {
  return "2px";
}, get borderWidthLg() {
  return "2px";
}, get borderWidthMd() {
  return "1px";
}, get colorsDarkBrandAlphaBlue52() {
  return "#3a65e533";
}, get colorsDarkBrandAlphaBlue54() {
  return "#3a65e566";
}, get colorsDarkBrandAlphaBlue75() {
  return "#146ff480";
}, get colorsDarkBrandAlphaGrey0() {
  return "#ffffff00";
}, get colorsDarkBrandAlphaGrey35() {
  return "#3e3e3e80";
}, get colorsDarkBrandAlphaGrey45() {
  return "#4f4f4f80";
}, get colorsDarkBrandAlphaGrey75() {
  return "#a4a4a480";
}, get colorsDarkBrandAlphaGrey95() {
  return "#dedede80";
}, get colorsDarkBrandBlue4() {
  return "#344bceff";
}, get colorsDarkBrandBlue5() {
  return "#3a65e5ff";
}, get colorsDarkBrandBlue6() {
  return "#4481f2ff";
}, get colorsDarkBrandBlue7() {
  return "#579bf9ff";
}, get colorsDarkBrandBlue8() {
  return "#6db1feff";
}, get colorsDarkBrandBlue9() {
  return "#8ac4ffff";
}, get colorsDarkBrandGreen4() {
  return "#289d28ff";
}, get colorsDarkBrandGreen5() {
  return "#34b634ff";
}, get colorsDarkBrandGreen7() {
  return "#5bdb5bff";
}, get colorsDarkBrandGrey0() {
  return "#171717ff";
}, get colorsDarkBrandGrey1() {
  return "#252525ff";
}, get colorsDarkBrandGrey10() {
  return "#ffffffff";
}, get colorsDarkBrandGrey2() {
  return "#313131ff";
}, get colorsDarkBrandGrey3() {
  return "#3e3e3eff";
}, get colorsDarkBrandGrey4() {
  return "#4f4f4fff";
}, get colorsDarkBrandGrey5() {
  return "#646464ff";
}, get colorsDarkBrandGrey6() {
  return "#848484ff";
}, get colorsDarkBrandGrey7() {
  return "#a4a4a4ff";
}, get colorsDarkBrandGrey8() {
  return "#c5c5c5ff";
}, get colorsDarkBrandGrey9() {
  return "#dededeff";
}, get colorsDarkBrandMergedColorsBlue52Solid() {
  return "#333b55ff";
}, get colorsDarkBrandMergedColorsGreen52Solid() {
  return "#324c32ff";
}, get colorsDarkBrandMergedColorsGrey52Solid() {
  return "#3b3b3bff";
}, get colorsDarkBrandMergedColorsOrange52Solid() {
  return "#533e33ff";
}, get colorsDarkBrandMergedColorsPurple52Solid() {
  return "#3a3453ff";
}, get colorsDarkBrandMergedColorsRed52Solid() {
  return "#523233ff";
}, get colorsDarkBrandMergedColorsYellow52Solid() {
  return "#554a33ff";
}, get colorsDarkBrandOrange4() {
  return "#c05c2eff";
}, get colorsDarkBrandOrange7() {
  return "#f69558ff";
}, get colorsDarkBrandPurple4() {
  return "#5131c5ff";
}, get colorsDarkBrandPurple5() {
  return "#603edcff";
}, get colorsDarkBrandPurple7() {
  return "#8568f8ff";
}, get colorsDarkBrandPurple9() {
  return "#afa1ffff";
}, get colorsDarkBrandRed4() {
  return "#ba2b37ff";
}, get colorsDarkBrandRed7() {
  return "#f25c5cff";
}, get colorsDarkBrandRed8() {
  return "#fe7777ff";
}, get colorsDarkBrandYellow4() {
  return "#c7912eff";
}, get colorsDarkBrandYellow5() {
  return "#e3ae3bff";
}, get colorsDarkBrandYellow7() {
  return "#fbcf55ff";
}, get colorsLightBrandAlphaBlue52() {
  return "#47a9ff33";
}, get colorsLightBrandAlphaBlue54() {
  return "#47a9ff66";
}, get colorsLightBrandAlphaBlue75() {
  return "#146ff480";
}, get colorsLightBrandAlphaGrey0() {
  return "#0a132400";
}, get colorsLightBrandAlphaGrey45() {
  return "#d9dbdd80";
}, get colorsLightBrandAlphaGrey65() {
  return "#9ea2a980";
}, get colorsLightBrandAlphaGrey75() {
  return "#6b707b80";
}, get colorsLightBrandAlphaGrey95() {
  return "#2f364680";
}, get colorsLightBrandBlue1() {
  return "#dceefeff";
}, get colorsLightBrandBlue2() {
  return "#c2e2ffff";
}, get colorsLightBrandBlue4() {
  return "#6ebdffff";
}, get colorsLightBrandBlue5() {
  return "#47a9ffff";
}, get colorsLightBrandBlue7() {
  return "#146ff4ff";
}, get colorsLightBrandBlue8() {
  return "#064ae4ff";
}, get colorsLightBrandBlue9() {
  return "#0123c6ff";
}, get colorsLightBrandGreen2() {
  return "#b8f3b8ff";
}, get colorsLightBrandGreen5() {
  return "#4fd84fff";
}, get colorsLightBrandGreen8() {
  return "#0d990dff";
}, get colorsLightBrandGreen9() {
  return "#0a7d0aff";
}, get colorsLightBrandGrey0() {
  return "#ffffffff";
}, get colorsLightBrandGrey1() {
  return "#f7f7f7ff";
}, get colorsLightBrandGrey10() {
  return "#0a1324ff";
}, get colorsLightBrandGrey2() {
  return "#f2f2f3ff";
}, get colorsLightBrandGrey3() {
  return "#e7e7e9ff";
}, get colorsLightBrandGrey4() {
  return "#d9dbddff";
}, get colorsLightBrandGrey5() {
  return "#c1c3c8ff";
}, get colorsLightBrandGrey6() {
  return "#9ea2a9ff";
}, get colorsLightBrandGrey7() {
  return "#6b707bff";
}, get colorsLightBrandGrey8() {
  return "#535965ff";
}, get colorsLightBrandGrey9() {
  return "#2f3646ff";
}, get colorsLightBrandOrange10() {
  return "#7d1401ff";
}, get colorsLightBrandOrange2() {
  return "#ffd6b7ff";
}, get colorsLightBrandOrange4() {
  return "#fea166ff";
}, get colorsLightBrandOrange7() {
  return "#db5f12ff";
}, get colorsLightBrandPurple2() {
  return "#cdc4ffff";
}, get colorsLightBrandPurple4() {
  return "#9c81feff";
}, get colorsLightBrandPurple6() {
  return "#6e3afdff";
}, get colorsLightBrandRed2() {
  return "#fec3c3ff";
}, get colorsLightBrandRed4() {
  return "#fd7072ff";
}, get colorsLightBrandRed7() {
  return "#d31e23ff";
}, get colorsLightBrandYellow2() {
  return "#ffe9acff";
}, get colorsLightBrandYellow5() {
  return "#fcc73aff";
}, get colorsLightBrandYellow8() {
  return "#c97800ff";
}, get colorsLightBrandYellow9() {
  return "#a05700ff";
}, get fontSizeMd() {
  return "12px";
}, get fontWeightRegular() {
  return "Regular";
}, get lineHeightMd() {
  return "16px";
}, get size0() {
  return "0px";
}, get size12() {
  return "12px";
}, get size16() {
  return "16px";
}, get size24() {
  return "24px";
}, get size4() {
  return "4px";
}, get spacing0() {
  return "0px";
}, get spacing16() {
  return "16px";
}, get spacing2() {
  return "2px";
}, get spacing20() {
  return "20px";
}, get spacing4() {
  return "4px";
}, get spacing8() {
  return "8px";
} };
let s;
const k = { name: "light", get devTokens() {
  return s ?? (s = new n(this));
}, get colorsAccentBlack() {
  return r.colorsLightBrandGrey10;
}, get colorsAccentDefaultBlue() {
  return r.colorsLightBrandBlue7;
}, get colorsAccentDefaultGreen() {
  return r.colorsLightBrandGreen8;
}, get colorsAccentDefaultGrey() {
  return r.colorsLightBrandGrey8;
}, get colorsAccentDefaultOrange() {
  return r.colorsLightBrandOrange7;
}, get colorsAccentDefaultPurple() {
  return r.colorsLightBrandPurple6;
}, get colorsAccentDefaultRed() {
  return r.colorsLightBrandRed7;
}, get colorsAccentDefaultYellow() {
  return r.colorsLightBrandYellow8;
}, get colorsAccentInverse() {
  return r.colorsLightBrandGrey0;
}, get colorsAccentMxdockBlue() {
  return r.colorsDarkBrandBlue7;
}, get colorsAccentMxdockGreen() {
  return r.colorsDarkBrandGreen7;
}, get colorsAccentMxdockGrey() {
  return r.colorsDarkBrandGrey7;
}, get colorsAccentMxdockRed() {
  return r.colorsDarkBrandRed7;
}, get colorsAccentMxdockWhite() {
  return r.colorsLightBrandGrey0;
}, get colorsAccentSubtlerBlue() {
  return r.colorsLightBrandBlue5;
}, get colorsAccentSubtlerGreen() {
  return r.colorsLightBrandGreen5;
}, get colorsAccentSubtlerGrey() {
  return r.colorsLightBrandGrey5;
}, get colorsAccentSubtlerOrange() {
  return r.colorsLightBrandOrange4;
}, get colorsAccentSubtlerPurple() {
  return r.colorsLightBrandPurple4;
}, get colorsAccentSubtlerRed() {
  return r.colorsLightBrandRed4;
}, get colorsAccentSubtlerYellow() {
  return r.colorsLightBrandYellow5;
}, get colorsAccentSubtlestBlue() {
  return r.colorsLightBrandBlue2;
}, get colorsAccentSubtlestGreen() {
  return r.colorsLightBrandGreen2;
}, get colorsAccentSubtlestGrey() {
  return r.colorsLightBrandGrey2;
}, get colorsAccentSubtlestOrange() {
  return r.colorsLightBrandOrange2;
}, get colorsAccentSubtlestPurple() {
  return r.colorsLightBrandPurple2;
}, get colorsAccentSubtlestRed() {
  return r.colorsLightBrandRed2;
}, get colorsAccentSubtlestYellow() {
  return r.colorsLightBrandYellow2;
}, get colorsAccentWhite() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundOutline() {
  return r.colorsLightBrandAlphaGrey0;
}, get colorsBackgroundActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundBrandingAppIconPrimary() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundBrandingAppIconSecondary() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundBrandingSplashScreenBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundButtonCloseButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundButtonCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundButtonCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundButtonIdeButtonDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundButtonIdeButtonHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundButtonIdeButtonPressed() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundButtonMinMaxButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundButtonMinMaxButtonHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundButtonMinMaxButtonPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundButtonNotificationButtonCloseButtonHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundButtonNotificationButtonCloseButtonPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundButtonNotificationButtonPrimaryDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundButtonNotificationButtonPrimaryHover() {
  return r.colorsDarkBrandBlue6;
}, get colorsBackgroundButtonNotificationButtonPrimaryPressed() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundButtonNotificationButtonSecondaryDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonNotificationButtonSecondaryHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundButtonNotificationButtonSecondaryPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonPrimaryButtonDefault() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundButtonPrimaryButtonHover() {
  return r.colorsLightBrandBlue8;
}, get colorsBackgroundButtonPrimaryButtonPressed() {
  return r.colorsLightBrandBlue9;
}, get colorsBackgroundButtonSecondaryButtonHover() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundButtonSecondaryButtonPressed() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundCanvasBase() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundCodeEditorTextSelection() {
  return r.colorsLightBrandAlphaBlue52;
}, get colorsBackgroundDark() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundDesignPropertiesSpacingDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundDesignPropertiesSpacingHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundDesignPropertiesSpacingLockLocked() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundDesignPropertiesSpacingLockUnlock() {
  return r.colorsLightBrandGrey6;
}, get colorsBackgroundDesignPropertiesSpacingSelected() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundDesignPropertiesToggleDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundDesignPropertiesToggleHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundDesignPropertiesToggleSelected() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundDomainModelAttributeDiffAdded() {
  return r.colorsLightBrandGreen2;
}, get colorsBackgroundDomainModelAttributeDiffChanged() {
  return r.colorsLightBrandYellow2;
}, get colorsBackgroundDomainModelAttributeDiffDeleted() {
  return r.colorsLightBrandRed2;
}, get colorsBackgroundDomainModelAttributeSource() {
  return r.colorsLightBrandBlue1;
}, get colorsBackgroundDomainModelEntityBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundDomainModelEntityHeaderExternal() {
  return r.colorsLightBrandPurple2;
}, get colorsBackgroundDomainModelEntityHeaderMapping() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundDomainModelEntityHeaderNonPersistable() {
  return r.colorsLightBrandYellow2;
}, get colorsBackgroundDomainModelEntityHeaderPersistable() {
  return r.colorsLightBrandBlue2;
}, get colorsBackgroundDomainModelEntityHeaderView() {
  return r.colorsLightBrandGreen2;
}, get colorsBackgroundDomainModelEntitySidebarExternal() {
  return r.colorsLightBrandPurple4;
}, get colorsBackgroundDomainModelEntitySidebarMapping() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundDomainModelEntitySidebarNonPersistable() {
  return r.colorsLightBrandYellow5;
}, get colorsBackgroundDomainModelEntitySidebarPersistable() {
  return r.colorsLightBrandBlue5;
}, get colorsBackgroundDomainModelEntitySidebarView() {
  return r.colorsLightBrandGreen5;
}, get colorsBackgroundImagePreview() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundInputActionHover() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundInputBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundInputReadOnly() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundInputTextSelection() {
  return r.colorsLightBrandBlue4;
}, get colorsBackgroundInverse() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundLoadingBarBar() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundLoadingBarFill() {
  return r.colorsLightBrandGreen8;
}, get colorsBackgroundMenuItemDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundMenuItemHover() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundMenuItemPressed() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundMicroflowAnchorDefault() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundMicroflowAnchorHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundMicroflowErrorHandle() {
  return this.colorsAccentDefaultYellow;
}, get colorsBackgroundMicroflowHandleDefault() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundMicroflowHandleHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundMicroflowSelection() {
  return r.colorsLightBrandAlphaBlue52;
}, get colorsBackgroundMxchatMessageAiDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundMxchatMessageUserDefault() {
  return r.colorsLightBrandAlphaBlue54;
}, get colorsBackgroundMxdockBase() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockCloseButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundMxdockCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundMxdockMenuDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockMenuHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundMxdockMenuPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundMxdockMinMaxButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockMinMaxButtonHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundMxdockMinMaxButtonPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundMxdockRunViewButtonDefault() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundMxdockRunViewButtonHover() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundMxdockRunViewButtonPressed() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundMyappsContent() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundMyappsMenuButtonHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundMyappsMenuButtonPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundMyappsPrimaryButtonDefault() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundMyappsPrimaryButtonHover() {
  return r.colorsLightBrandBlue8;
}, get colorsBackgroundMyappsPrimaryButtonPressed() {
  return r.colorsLightBrandBlue9;
}, get colorsBackgroundMyappsSecondaryButtonHover() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundMyappsSecondaryButtonPressed() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundMyappsSidebar() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundPaneBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundPaneHeader() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundPaneRow() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundScrollbarArrowDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundScrollbarArrowHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundScrollbarArrowPressed() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundScrollbarThumbDefault() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundScrollbarThumbHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundScrollbarThumbPressed() {
  return r.colorsLightBrandGrey6;
}, get colorsBackgroundScrollbarTrack() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbDefault() {
  return r.colorsLightBrandAlphaGrey65;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbHover() {
  return r.colorsLightBrandAlphaGrey75;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackDefault() {
  return r.colorsLightBrandAlphaGrey0;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackHover() {
  return r.colorsLightBrandAlphaGrey45;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbDefault() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundScrollbarWebScrollbarPaneTrackDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundStepperDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundStepperHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundStepperPressed() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundSwitchOffDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundSwitchOffHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundSwitchOnDefault() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundSwitchThumb() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTabDockBase() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTabDockDropdownHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundTabDockDropdownPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTabDockItemCloseButtonHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundTabDockItemCloseButtonPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTabDockItemSelected() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTabDockItemUnselected() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTabMenuSelected() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTabMenuUnselected() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundTableBase() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTableCellPrimary() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTableCellSecondary() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTableHeaderDefault() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTableHeaderHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundTableHeaderPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTableLayout() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowAnnotationButton() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundWorkflowEmptyOutcome() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowGeneralActivity() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowJumpCounter() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowNonGeneralActivity() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundWorkflowStartEnd() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderAssistbotBulbDefault() {
  return r.colorsLightBrandAlphaBlue75;
}, get colorsBorderButtonsDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderButtonsGhostButtonHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderButtonsNotificationSecondary() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderButtonsToolbarActionButtonActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderButtonsToolbarActionButtonHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderButtonsToolbarActionButtonSelected() {
  return r.colorsLightBrandGrey8;
}, get colorsBorderDivider() {
  return r.colorsLightBrandGrey4;
}, get colorsBorderDomainModelActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderDomainModelDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderDomainModelDiffAdded() {
  return r.colorsLightBrandGreen5;
}, get colorsBorderDomainModelDiffDeleted() {
  return r.colorsLightBrandRed4;
}, get colorsBorderDomainModelHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBorderFocus() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderInputActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderInputDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderInputHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBorderKeyboardFocus() {
  return r.colorsLightBrandGrey6;
}, get colorsBorderLoadingBar() {
  return r.colorsLightBrandGrey4;
}, get colorsBorderModal() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderMxchatMessageAiDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBorderMxdockMenuDivider() {
  return r.colorsLightBrandGrey8;
}, get colorsBorderPane() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderPrimary() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderSecondary() {
  return r.colorsLightBrandGrey4;
}, get colorsBorderSelected() {
  return r.colorsLightBrandGrey8;
}, get colorsBorderSelectorHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderSelectorSelected() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderSelectorUnselected() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderTreeViewNestingLine() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderWebScrollbarCanvasThumbDefault() {
  return r.colorsLightBrandAlphaGrey75;
}, get colorsBorderWebScrollbarThumbPaneDefault() {
  return r.colorsLightBrandGrey6;
}, get colorsBorderWorkflowActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderWorkflowDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderWorkflowHover() {
  return r.colorsLightBrandGrey7;
}, get colorsTextToggle() {
  return r.colorsLightBrandGrey10;
}, get colorsTextActive() {
  return r.colorsLightBrandBlue7;
}, get colorsTextButtonsIdeDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsTextButtonsNotificationDefault() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextButtonsPrimary() {
  return r.colorsLightBrandGrey0;
}, get colorsTextButtonsSecondary() {
  return r.colorsLightBrandGrey10;
}, get colorsTextCodeErrors() {
  return r.colorsLightBrandRed7;
}, get colorsTextCodeFunctions() {
  return r.colorsLightBrandGreen9;
}, get colorsTextCodeIdentifiers() {
  return r.colorsLightBrandBlue7;
}, get colorsTextCodeKeywords() {
  return r.colorsLightBrandBlue9;
}, get colorsTextCodeOperators() {
  return r.colorsLightBrandGrey9;
}, get colorsTextCodeRuntimeTokens() {
  return r.colorsLightBrandPurple6;
}, get colorsTextCodeStringAndNumberLiterals() {
  return r.colorsLightBrandOrange10;
}, get colorsTextCodeVariables() {
  return r.colorsLightBrandYellow9;
}, get colorsTextInfo() {
  return r.colorsLightBrandBlue7;
}, get colorsTextInverse() {
  return r.colorsLightBrandGrey0;
}, get colorsTextLink() {
  return r.colorsLightBrandBlue7;
}, get colorsTextModalHeader() {
  return r.colorsLightBrandGrey0;
}, get colorsTextMxdockLink() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextMxdockMenu() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextMxdockPrimary() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextMxdockSecondary() {
  return r.colorsDarkBrandGrey7;
}, get colorsTextPrimaryDefault() {
  return r.colorsLightBrandGrey9;
}, get colorsTextPrimaryDisabled() {
  return r.colorsLightBrandAlphaGrey95;
}, get colorsTextSecondaryDefault() {
  return r.colorsLightBrandGrey7;
}, get colorsTextSecondaryDisabled() {
  return r.colorsLightBrandAlphaGrey75;
} };
let d;
const D = { name: "dark", get devTokens() {
  return d ?? (d = new n(this));
}, get colorsAccentBlack() {
  return r.colorsDarkBrandGrey0;
}, get colorsAccentDefaultBlue() {
  return r.colorsDarkBrandBlue7;
}, get colorsAccentDefaultGreen() {
  return r.colorsDarkBrandGreen7;
}, get colorsAccentDefaultGrey() {
  return r.colorsDarkBrandGrey7;
}, get colorsAccentDefaultOrange() {
  return r.colorsDarkBrandOrange7;
}, get colorsAccentDefaultPurple() {
  return r.colorsDarkBrandPurple7;
}, get colorsAccentDefaultRed() {
  return r.colorsDarkBrandRed7;
}, get colorsAccentDefaultYellow() {
  return r.colorsDarkBrandYellow7;
}, get colorsAccentInverse() {
  return r.colorsDarkBrandGrey1;
}, get colorsAccentMxdockBlue() {
  return r.colorsDarkBrandBlue7;
}, get colorsAccentMxdockGreen() {
  return r.colorsDarkBrandGreen7;
}, get colorsAccentMxdockGrey() {
  return r.colorsDarkBrandGrey7;
}, get colorsAccentMxdockRed() {
  return r.colorsDarkBrandRed7;
}, get colorsAccentMxdockWhite() {
  return r.colorsDarkBrandGrey10;
}, get colorsAccentSubtlerBlue() {
  return r.colorsDarkBrandBlue4;
}, get colorsAccentSubtlerGreen() {
  return r.colorsDarkBrandGreen4;
}, get colorsAccentSubtlerGrey() {
  return r.colorsDarkBrandGrey5;
}, get colorsAccentSubtlerOrange() {
  return r.colorsDarkBrandOrange4;
}, get colorsAccentSubtlerPurple() {
  return r.colorsDarkBrandPurple4;
}, get colorsAccentSubtlerRed() {
  return r.colorsDarkBrandRed4;
}, get colorsAccentSubtlerYellow() {
  return r.colorsDarkBrandYellow4;
}, get colorsAccentSubtlestBlue() {
  return r.colorsDarkBrandMergedColorsBlue52Solid;
}, get colorsAccentSubtlestGreen() {
  return r.colorsDarkBrandMergedColorsGreen52Solid;
}, get colorsAccentSubtlestGrey() {
  return r.colorsDarkBrandMergedColorsGrey52Solid;
}, get colorsAccentSubtlestOrange() {
  return r.colorsDarkBrandMergedColorsOrange52Solid;
}, get colorsAccentSubtlestPurple() {
  return r.colorsDarkBrandMergedColorsPurple52Solid;
}, get colorsAccentSubtlestRed() {
  return r.colorsDarkBrandMergedColorsRed52Solid;
}, get colorsAccentSubtlestYellow() {
  return r.colorsDarkBrandMergedColorsYellow52Solid;
}, get colorsAccentWhite() {
  return r.colorsDarkBrandGrey10;
}, get colorsBackgroundOutline() {
  return r.colorsDarkBrandAlphaGrey0;
}, get colorsBackgroundActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundBrandingAppIconPrimary() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundBrandingAppIconSecondary() {
  return r.colorsDarkBrandGrey10;
}, get colorsBackgroundBrandingSplashScreenBase() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonCloseButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundButtonCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundButtonIdeButtonDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundButtonIdeButtonHover() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundButtonIdeButtonPressed() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundButtonMinMaxButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonMinMaxButtonHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundButtonMinMaxButtonPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonNotificationButtonCloseButtonHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonNotificationButtonCloseButtonPressed() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundButtonNotificationButtonPrimaryDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundButtonNotificationButtonPrimaryHover() {
  return r.colorsDarkBrandBlue6;
}, get colorsBackgroundButtonNotificationButtonPrimaryPressed() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundButtonNotificationButtonSecondaryDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonNotificationButtonSecondaryHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundButtonNotificationButtonSecondaryPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonPrimaryButtonDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundButtonPrimaryButtonHover() {
  return r.colorsDarkBrandBlue8;
}, get colorsBackgroundButtonPrimaryButtonPressed() {
  return r.colorsDarkBrandBlue9;
}, get colorsBackgroundButtonSecondaryButtonHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundButtonSecondaryButtonPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundCanvasBase() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundCodeEditorTextSelection() {
  return r.colorsDarkBrandAlphaBlue52;
}, get colorsBackgroundDark() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundDesignPropertiesSpacingDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundDesignPropertiesSpacingHover() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundDesignPropertiesSpacingLockLocked() {
  return r.colorsDarkBrandGrey8;
}, get colorsBackgroundDesignPropertiesSpacingLockUnlock() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundDesignPropertiesSpacingSelected() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundDesignPropertiesToggleDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundDesignPropertiesToggleHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundDesignPropertiesToggleSelected() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundDomainModelAttributeDiffAdded() {
  return r.colorsDarkBrandMergedColorsGreen52Solid;
}, get colorsBackgroundDomainModelAttributeDiffChanged() {
  return r.colorsDarkBrandMergedColorsYellow52Solid;
}, get colorsBackgroundDomainModelAttributeDiffDeleted() {
  return r.colorsDarkBrandMergedColorsRed52Solid;
}, get colorsBackgroundDomainModelAttributeSource() {
  return "#2b2f3fff";
}, get colorsBackgroundDomainModelEntityBase() {
  return "#1e1e1eff";
}, get colorsBackgroundDomainModelEntityHeaderExternal() {
  return r.colorsDarkBrandMergedColorsPurple52Solid;
}, get colorsBackgroundDomainModelEntityHeaderMapping() {
  return r.colorsDarkBrandMergedColorsGrey52Solid;
}, get colorsBackgroundDomainModelEntityHeaderNonPersistable() {
  return r.colorsDarkBrandMergedColorsYellow52Solid;
}, get colorsBackgroundDomainModelEntityHeaderPersistable() {
  return r.colorsDarkBrandMergedColorsBlue52Solid;
}, get colorsBackgroundDomainModelEntityHeaderView() {
  return r.colorsDarkBrandMergedColorsGreen52Solid;
}, get colorsBackgroundDomainModelEntitySidebarExternal() {
  return r.colorsDarkBrandPurple5;
}, get colorsBackgroundDomainModelEntitySidebarMapping() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundDomainModelEntitySidebarNonPersistable() {
  return r.colorsDarkBrandYellow5;
}, get colorsBackgroundDomainModelEntitySidebarPersistable() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundDomainModelEntitySidebarView() {
  return r.colorsDarkBrandGreen5;
}, get colorsBackgroundImagePreview() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundInputActionHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundInputBase() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundInputReadOnly() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundInputTextSelection() {
  return r.colorsDarkBrandBlue4;
}, get colorsBackgroundInverse() {
  return r.colorsDarkBrandGrey9;
}, get colorsBackgroundLoadingBarBar() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundLoadingBarFill() {
  return r.colorsDarkBrandGreen7;
}, get colorsBackgroundMenuItemDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMenuItemHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundMenuItemPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundMicroflowAnchorDefault() {
  return r.colorsDarkBrandGrey9;
}, get colorsBackgroundMicroflowAnchorHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundMicroflowErrorHandle() {
  return this.colorsAccentDefaultYellow;
}, get colorsBackgroundMicroflowHandleDefault() {
  return r.colorsDarkBrandGrey9;
}, get colorsBackgroundMicroflowHandleHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundMicroflowSelection() {
  return r.colorsDarkBrandAlphaBlue52;
}, get colorsBackgroundMxchatMessageAiDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxchatMessageUserDefault() {
  return r.colorsDarkBrandAlphaBlue54;
}, get colorsBackgroundMxdockBase() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockCloseButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundMxdockCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundMxdockMenuDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockMenuHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundMxdockMenuPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxdockMinMaxButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockMinMaxButtonHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundMxdockMinMaxButtonPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxdockRunViewButtonDefault() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundMxdockRunViewButtonHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxdockRunViewButtonPressed() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundMyappsContent() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMyappsMenuButtonHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundMyappsMenuButtonPressed() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundMyappsPrimaryButtonDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundMyappsPrimaryButtonHover() {
  return r.colorsDarkBrandBlue6;
}, get colorsBackgroundMyappsPrimaryButtonPressed() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundMyappsSecondaryButtonHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundMyappsSecondaryButtonPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundMyappsSidebar() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundPaneBase() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundPaneHeader() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundPaneRow() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundScrollbarArrowDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundScrollbarArrowHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundScrollbarArrowPressed() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundScrollbarThumbDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundScrollbarThumbHover() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundScrollbarThumbPressed() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundScrollbarTrack() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbDefault() {
  return r.colorsDarkBrandAlphaGrey35;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbHover() {
  return r.colorsDarkBrandAlphaGrey45;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackDefault() {
  return r.colorsDarkBrandAlphaGrey0;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackHover() {
  return r.colorsDarkBrandAlphaGrey45;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundScrollbarWebScrollbarPaneTrackDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundStepperDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundStepperHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundStepperPressed() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundSwitchOffDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundSwitchOffHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundSwitchOnDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundSwitchThumb() {
  return r.colorsDarkBrandGrey10;
}, get colorsBackgroundTabDockBase() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTabDockDropdownHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTabDockDropdownPressed() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTabDockItemCloseButtonHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTabDockItemCloseButtonPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundTabDockItemSelected() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTabDockItemUnselected() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTabMenuSelected() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTabMenuUnselected() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTableBase() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTableCellPrimary() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTableCellSecondary() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTableHeaderDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTableHeaderHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTableHeaderPressed() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTableLayout() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowAnnotationButton() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundWorkflowEmptyOutcome() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowGeneralActivity() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowJumpCounter() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowNonGeneralActivity() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundWorkflowStartEnd() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderAssistbotBulbDefault() {
  return r.colorsDarkBrandAlphaBlue75;
}, get colorsBorderButtonsDefault() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderButtonsGhostButtonHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderButtonsNotificationSecondary() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderButtonsToolbarActionButtonActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderButtonsToolbarActionButtonHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderButtonsToolbarActionButtonSelected() {
  return r.colorsDarkBrandGrey7;
}, get colorsBorderDivider() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderDomainModelActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderDomainModelDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderDomainModelDiffAdded() {
  return r.colorsDarkBrandGreen4;
}, get colorsBorderDomainModelDiffDeleted() {
  return r.colorsDarkBrandRed4;
}, get colorsBorderDomainModelHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderFocus() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderInputActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderInputDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderInputHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderKeyboardFocus() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderLoadingBar() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderModal() {
  return r.colorsDarkBrandGrey0;
}, get colorsBorderMxchatMessageAiDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderMxdockMenuDivider() {
  return r.colorsDarkBrandGrey3;
}, get colorsBorderPane() {
  return r.colorsDarkBrandGrey0;
}, get colorsBorderPrimary() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderSecondary() {
  return r.colorsDarkBrandGrey1;
}, get colorsBorderSelected() {
  return r.colorsDarkBrandGrey7;
}, get colorsBorderSelectorHover() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderSelectorSelected() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderSelectorUnselected() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderTreeViewNestingLine() {
  return r.colorsDarkBrandGrey5;
}, get colorsBorderWebScrollbarCanvasThumbDefault() {
  return r.colorsDarkBrandAlphaGrey75;
}, get colorsBorderWebScrollbarThumbPaneDefault() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderWorkflowActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderWorkflowDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderWorkflowHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsTextToggle() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextButtonsIdeDefault() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextButtonsNotificationDefault() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextButtonsPrimary() {
  return r.colorsDarkBrandGrey0;
}, get colorsTextButtonsSecondary() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextCodeErrors() {
  return r.colorsDarkBrandRed8;
}, get colorsTextCodeFunctions() {
  return r.colorsDarkBrandGreen7;
}, get colorsTextCodeIdentifiers() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextCodeKeywords() {
  return r.colorsDarkBrandBlue9;
}, get colorsTextCodeOperators() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextCodeRuntimeTokens() {
  return r.colorsDarkBrandPurple9;
}, get colorsTextCodeStringAndNumberLiterals() {
  return r.colorsDarkBrandOrange7;
}, get colorsTextCodeVariables() {
  return r.colorsDarkBrandYellow7;
}, get colorsTextInfo() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextInverse() {
  return r.colorsDarkBrandGrey1;
}, get colorsTextLink() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextModalHeader() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextMxdockLink() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextMxdockMenu() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextMxdockPrimary() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextMxdockSecondary() {
  return r.colorsDarkBrandGrey7;
}, get colorsTextPrimaryDefault() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextPrimaryDisabled() {
  return r.colorsDarkBrandAlphaGrey95;
}, get colorsTextSecondaryDefault() {
  return r.colorsDarkBrandGrey7;
}, get colorsTextSecondaryDisabled() {
  return r.colorsDarkBrandAlphaGrey75;
} }, a = class a {
  constructor(o) {
    this.theme = o;
  }
  get buttonNeutralDefaultBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonDefault;
  }
  get buttonNeutralDefaultBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralDefaultLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralDisabledBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonDefault;
  }
  get buttonNeutralDisabledBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralDisabledLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralFocusedBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonDefault;
  }
  get buttonNeutralFocusedBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralFocusedFocusringBorderColor() {
    return this.theme.colorsBorderKeyboardFocus;
  }
  get buttonNeutralFocusedLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralHoverBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonHover;
  }
  get buttonNeutralHoverBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralHoverLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralPressedBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonPressed;
  }
  get buttonNeutralPressedBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralPressedLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonPrimaryDefaultBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonDefault;
  }
  get buttonPrimaryDefaultBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonDefault;
  }
  get buttonPrimaryDefaultLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryDisabledBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonDefault;
  }
  get buttonPrimaryDisabledBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonDefault;
  }
  get buttonPrimaryDisabledLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryFocusedBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonDefault;
  }
  get buttonPrimaryFocusedBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonDefault;
  }
  get buttonPrimaryFocusedFocusringBorderColor() {
    return this.theme.colorsAccentInverse;
  }
  get buttonPrimaryFocusedLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryHoverBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonHover;
  }
  get buttonPrimaryHoverBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonHover;
  }
  get buttonPrimaryHoverLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryPressedBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonPressed;
  }
  get buttonPrimaryPressedBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonPressed;
  }
  get buttonPrimaryPressedLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get draggableDividerHorizontalDefaultDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get draggableDividerHorizontalFocusBorderColor() {
    return this.theme.colorsBorderKeyboardFocus;
  }
  get draggableDividerHorizontalFocusDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get draggableDividerVerticalDefaultDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get draggableDividerVerticalFocusBorderColor() {
    return this.theme.colorsBorderKeyboardFocus;
  }
  get draggableDividerVerticalFocusDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get linkLabelTextColor() {
    return this.theme.colorsTextLink;
  }
  get switchOffDefaultThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOffDefaultTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffDefaultTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffDisabledThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOffDisabledTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffDisabledTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffHoverThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOffHoverTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOffHover;
  }
  get switchOffHoverTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOffHover;
  }
  get switchOnDefaultThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOnDefaultTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnDefaultTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnDisabledThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOnDisabledTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnDisabledTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnHoverThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOnHoverTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnHoverTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
};
u(a, "DevTokens");
let n = a;
export {
  k as c,
  D as d,
  r,
  i as t
};
//# sourceMappingURL=DesignSystemTokens-XeI_xSox.js.map
