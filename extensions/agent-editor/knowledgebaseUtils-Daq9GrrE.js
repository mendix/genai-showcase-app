import { c as s } from "./userPreferences-CMksV11G.js";
const i = (e, o) => async (a) => {
  const n = s(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(o, a);
  } catch (r) {
    n.error("Failed to save knowledge base document:", r), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: r.message
    });
  }
};
function d() {
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
    ...d(),
    provider: e.provider,
    providerFields: {
      ...t(),
      key: o.key
    }
  };
};
export {
  c as a,
  d as b,
  t as c,
  i as u
};
//# sourceMappingURL=knowledgebaseUtils-Daq9GrrE.js.map
