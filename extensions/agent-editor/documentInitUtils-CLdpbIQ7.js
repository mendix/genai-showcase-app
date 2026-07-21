const e = ["v2025_03_26", "v2024_11_05"], n = e[0];
function s() {
  return {
    $ID: "",
    name: "",
    excluded: !1,
    documentType: r,
    contents: o()
  };
}
function o() {
  return {
    description: "",
    systemPrompt: "",
    userPrompt: "",
    usageType: "Task",
    variables: [],
    tools: [],
    knowledgebaseTools: []
  };
}
function a() {
  return {
    provider: void 0,
    // Do not preselect
    importMicroflow: "",
    providerFields: {}
  };
}
const d = () => ({}), c = () => ({
  environment: "",
  deepLinkURL: "",
  keyId: "",
  keyName: "",
  resourceName: ""
});
function i() {
  return {
    protocolVersion: n
  };
}
function u() {
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
}), r = "agenteditor.agent", l = "agenteditor.model", m = "agenteditor.consumedMCPService", p = "agenteditor.knowledgebase";
export {
  e as M,
  c as a,
  d as b,
  s as c,
  a as d,
  i as e,
  t as f,
  u as g,
  m as h,
  r as i,
  o as j,
  p as k,
  l as m
};
