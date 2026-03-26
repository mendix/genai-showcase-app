import { c as n } from "./DesignSystemTokens-CB_9gr2a.js";
const i = (e, o) => async (a) => {
  const d = n(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(o, a);
  } catch (r) {
    d.error("Failed to save knowledge base document:", r), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: r.message
    });
  }
};
function s() {
  return {
    name: "",
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: t()
  };
}
const t = () => ({
  environment: "",
  deepLinkURL: "",
  keyId: "",
  keyName: "",
  modelDisplayName: "",
  modelName: ""
}), c = (e) => {
  const o = e.providerFields;
  return {
    ...s(),
    provider: e.provider,
    providerFields: {
      ...t(),
      key: o.key
    }
  };
};
export {
  c as a,
  s as b,
  t as c,
  i as u
};
//# sourceMappingURL=knowledgebaseUtils-DXEyo-Fd.js.map
