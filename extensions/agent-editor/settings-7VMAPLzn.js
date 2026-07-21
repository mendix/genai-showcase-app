import { getComponentFramework as s } from "@mendix/component-framework";
function u(t) {
  const e = s(t);
  return {
    network: {
      httpListener: e.getApi("mendix.HttpListenerApi")
    },
    analytics: e.getApi("mendix.AnalyticsApi")
  };
}
const a = "agenteditor/settings.json", m = "onboardingView", l = "Get Started", h = {
  AgentEditor: { id: "agent-editor", caption: "Agent Editor" },
  Onboarding: { id: "agent-editor.onboarding", caption: "Onboarding" },
  Compatibility: { id: "agent-editor.compatibility", caption: "Compatibility" }
}, f = {
  CallingTheAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/#calling-the-agent",
  CreateFirstAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/",
  Feedback: "https://forms.office.com/Pages/ResponsePage.aspx?id=zTuuOHmV1E-t2rQuFJXVWr6T473xSWFBjtAtbbq1JPpUNE5NTjRRUkZFWVNKMU1OTU9BTFdJS01NTi4u",
  GenAIConcepts: "https://docs.mendix.com/agents/get-started/",
  MxAcademy: "https://docs.mendix.com/agents/#getting-started",
  MxCloudGenAIPortal: "https://docs.mendix.com/agents/mx-cloud-genai/Navigate-MxGenAI/",
  MxCloudGenAIResourcePacks: "https://docs.mendix.com/agents/mx-cloud-genai/resource-packs/",
  Newsletter: "https://forms.office.com/pages/responsepage.aspx?id=jcfjtDuO2Ea8VlVA2iO6Tch-n5LSBBxDiaKK50UnnwhUQTQ1VEFMTlZBQ0VYVlhZR0ZZWUUzT1NCNC4u&route=shorturl"
};
function r() {
  return {
    shown: !1,
    version: ""
  };
}
async function A(t) {
  try {
    const n = (await t.app.model.modules.getModules()).find((o) => o.name === "AgentEditor");
    if (n?.appStoreVersion)
      return n.appStoreVersion;
  } catch {
  }
  return "2.1.0";
}
function c() {
  return {};
}
async function d(t) {
  let e = "";
  try {
    e = await t.app.files.getFile(a) || "";
  } catch {
  }
  const n = e.trim();
  if (n !== "")
    try {
      return JSON.parse(n);
    } catch {
    }
  const o = c();
  return await i(t, o), o;
}
async function i(t, e) {
  await t.app.files.putFile(a, JSON.stringify(e, null, 2));
}
function w(t, e) {
  return t.onboarding?.shown !== !0 || t.onboarding?.version !== e;
}
async function g(t, e) {
  const n = await d(t), o = {
    ...n,
    onboarding: {
      ...r(),
      ...n.onboarding,
      ...e
    }
  };
  await i(t, o);
}
async function N(t, e) {
  await g(t, { shown: !0, version: e });
}
export {
  h as M,
  f as O,
  l as a,
  m as b,
  A as g,
  N as m,
  u as o,
  d as r,
  w as s
};
