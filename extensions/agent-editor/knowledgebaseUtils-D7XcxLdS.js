import { c as d } from "./userPreferences-BV8i5uIO.js";
const m = (e, r) => async (t) => {
  const n = d(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (o) {
    n.error("Failed to save knowledge base document:", o), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: o.message
    });
  }
};
function u() {
  return {
    name: "",
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: i()
  };
}
const i = () => ({
  environment: "",
  deepLinkURL: "",
  keyId: "",
  keyName: "",
  modelDisplayName: "",
  modelName: ""
}), f = (e) => {
  const r = e.providerFields;
  return {
    ...u(),
    provider: e.provider,
    providerFields: {
      ...i(),
      key: r.key
    }
  };
}, a = (e, r) => {
  if (e === r) return !0;
  if (e == null || r === null || r === void 0 || typeof e != "object" || typeof r != "object" || Array.isArray(e) !== Array.isArray(r)) return !1;
  if (Array.isArray(e) && Array.isArray(r))
    return e.length !== r.length ? !1 : e.every((s, c) => a(s, r[c]));
  const t = e, n = r, o = Object.keys(t), l = Object.keys(n);
  return o.length !== l.length ? !1 : o.every((s) => a(t[s], n[s]));
};
export {
  f as a,
  u as b,
  i as c,
  a as i,
  m as u
};
//# sourceMappingURL=knowledgebaseUtils-D7XcxLdS.js.map
