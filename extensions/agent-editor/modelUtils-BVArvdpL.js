function o() {
  return {
    modelDocumentUUID: crypto.randomUUID(),
    modelType: "",
    modelName: "",
    modelDisplayName: "",
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
  o as c
};
//# sourceMappingURL=modelUtils-BVArvdpL.js.map
