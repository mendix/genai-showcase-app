import { c as n } from "./DesignSystemTokens-CB_9gr2a.js";
const i = (e, o) => async (r) => {
  const d = n(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(o, r);
  } catch (t) {
    d.error("Failed to save model document:", t), await e.ui.notifications.show({
      title: "Failed to save model document.",
      message: t.message
    });
  }
};
function s() {
  return {
    type: "",
    name: "",
    displayName: "",
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: a()
  };
}
const a = () => ({
  environment: "",
  deepLinkURL: "",
  key: "",
  keyId: "",
  keyName: "",
  resourceName: ""
}), l = (e) => {
  const o = e.providerFields;
  return {
    ...s(),
    type: e.type,
    provider: e.provider,
    providerFields: {
      ...a(),
      key: o.key
    }
  };
};
export {
  l as a,
  s as b,
  a as c,
  i as u
};
//# sourceMappingURL=modelUtils-C_lHNPsQ.js.map
