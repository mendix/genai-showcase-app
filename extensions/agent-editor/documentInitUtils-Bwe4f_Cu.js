const e = ["v2025_03_26", "v2024_11_05"], n = e[0];
function a() {
  return {
    $ID: "",
    name: "",
    excluded: !1,
    documentType: s,
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
function d() {
  return {
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
  resourceName: ""
});
function c() {
  return {
    protocolVersion: n
  };
}
function i() {
  return {
    name: "",
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: r()
  };
}
const r = () => ({
  environment: "",
  deepLinkURL: "",
  keyId: "",
  keyName: "",
  modelDisplayName: "",
  modelName: ""
}), s = "agenteditor.agent", u = "agenteditor.model", l = "agenteditor.consumedMCPService", m = "agenteditor.knowledgebase";
export {
  e as M,
  t as a,
  d as b,
  a as c,
  c as d,
  r as e,
  i as f,
  l as g,
  s as h,
  o as i,
  m as k,
  u as m
};
