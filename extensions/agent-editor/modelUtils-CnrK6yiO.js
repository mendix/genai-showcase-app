function r() {
  return {
    modelDocumentUUID: crypto.randomUUID(),
    type: "",
    name: "",
    displayName: "",
    provider: "MxCloudGenAI",
    // Preselct MxCloudGenAI as default provider
    providerFields: e()
  };
}
const e = () => ({
  environment: "",
  deepLinkURL: "",
  key: "",
  keyImportHelper: "",
  keyId: "",
  keyName: "",
  resourceName: ""
});
export {
  e as a,
  r as c
};
//# sourceMappingURL=modelUtils-CnrK6yiO.js.map
