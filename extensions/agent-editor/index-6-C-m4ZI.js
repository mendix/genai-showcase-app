import { a as Ce, d as I } from "./jsx-runtime-CWOFuNcx.js";
import { getComponentFramework as Re } from "@mendix/component-framework";
import { k as M } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { m as b } from "./modelIcons-Dn45IrnE.js";
import { m as k } from "./toolIcons-B55yYne7.js";
import { T as Oe, e as he, f as we, i as Ne, j as Ie, g as Me, C as be } from "./toolUtils-3GFu_U6Y.js";
import { g as _ } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { C as ke, a as xe } from "./compatibility-B4OgVO3B.js";
import { a as m, i as p } from "./constantUtils-D0RXxXWn.js";
import { i as T, m as f, h as y, k as g, j as _e, d as Se, e as Be, g as ve } from "./documentInitUtils-CLdpbIQ7.js";
import { M as Le, E as Pe, b as Ge, C } from "./studioPro-D79eumit.js";
function Ue(o) {
  const e = Re(o);
  return {
    network: {
      httpListener: e.getApi("mendix.HttpListenerApi")
    },
    analytics: e.getApi("mendix.AnalyticsApi")
  };
}
const S = "agenteditor/settings.json", qe = "onboardingView", Fe = "Get Started", u = {
  AgentEditor: { id: "agent-editor", caption: "Agent Editor" },
  Onboarding: { id: "agent-editor.onboarding", caption: "Onboarding" },
  Compatibility: { id: "agent-editor.compatibility", caption: "Compatibility" }
}, Ut = {
  CallingTheAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/#calling-the-agent",
  CreateFirstAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/",
  Feedback: "https://forms.office.com/Pages/ResponsePage.aspx?id=zTuuOHmV1E-t2rQuFJXVWr6T473xSWFBjtAtbbq1JPpUNE5NTjRRUkZFWVNKMU1OTU9BTFdJS01NTi4u",
  GenAIConcepts: "https://docs.mendix.com/agents/get-started/",
  MxAcademy: "https://docs.mendix.com/agents/#getting-started",
  MxCloudGenAIPortal: "https://docs.mendix.com/agents/mx-cloud-genai/Navigate-MxGenAI/",
  MxCloudGenAIResourcePacks: "https://docs.mendix.com/agents/mx-cloud-genai/resource-packs/",
  Newsletter: "https://forms.office.com/pages/responsepage.aspx?id=jcfjtDuO2Ea8VlVA2iO6Tch-n5LSBBxDiaKK50UnnwhUQTQ1VEFMTlZBQ0VYVlhZR0ZZWUUzT1NCNC4u&route=shorturl"
};
function ze() {
  return {
    shown: !1,
    version: ""
  };
}
async function Ke(o) {
  try {
    const t = (await o.app.model.modules.getModules()).find((r) => r.name === "AgentEditor");
    if (t?.appStoreVersion)
      return t.appStoreVersion;
  } catch {
  }
  return "2.0.0";
}
function Ve() {
  return {};
}
async function B(o) {
  let e = "";
  try {
    e = await o.app.files.getFile(S) || "";
  } catch {
  }
  const t = e.trim();
  if (t !== "")
    try {
      return JSON.parse(t);
    } catch {
    }
  const r = Ve();
  return await v(o, r), r;
}
async function v(o, e) {
  await o.app.files.putFile(S, JSON.stringify(e, null, 2));
}
function Ye(o, e) {
  return o.onboarding?.shown !== !0 || o.onboarding?.version !== e;
}
async function je(o, e) {
  const t = await B(o), r = {
    ...t,
    onboarding: {
      ...ze(),
      ...t.onboarding,
      ...e
    }
  };
  await v(o, r);
}
async function Xe(o, e) {
  await je(o, { shown: !0, version: e });
}
const qt = 300, A = {
  ConnectionChanged: "ae_connectionChanged",
  GetConnectionState: "ae_getConnectionState",
  SyncSuccessful: "ae_syncSuccessful",
  SyncFailed: "ae_syncFailed"
}, He = {
  PreviewAgentSync: "preview_agent_sync",
  PreviewAgentTest: "preview_agent_test"
}, D = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", Ft = "data:image/png;base64,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", Qe = {
  Chat: "Chat",
  Task: "Task"
}, zt = {
  Agent: "agent",
  User: "user",
  Error: "error"
}, Kt = {
  Disabled: "Disabled",
  Enabled: "Enabled",
  SyncNeeded: "SyncNeeded",
  SyncFailed: "SyncFailed",
  SyncSuccessful: "SyncSuccessful"
}, Vt = {
  Build: "Build",
  Playground: "Playground"
}, L = "AE001", P = "AE002", G = "AE003", U = "AE004", q = "AE005", F = "AE006", z = "AE007", K = "AE008", V = "AE009", Y = "AE010", j = "AE011", X = "AE012", H = "AE013", Q = "AE014", J = "AE015", W = "AE016", Z = "AE017", $ = "AE018", Je = [
  L,
  P,
  G,
  U,
  q,
  F,
  z,
  K,
  V,
  Y,
  j,
  X,
  H,
  Q,
  J,
  W,
  Z,
  $
], R = "AE101", O = "AE102", h = "AE103", w = "AE104", ee = "AE105", te = "AE106", oe = "AE107", ne = "AE108", We = [
  R,
  O,
  h,
  w,
  ee,
  te,
  oe,
  ne
], re = "AE201", ie = "AE202", se = "AE203", ae = "AE204", ce = "AE205", de = "AE206", le = "AE207", ue = "AE208", Ze = [
  re,
  ie,
  se,
  ae,
  ce,
  de,
  le,
  ue
], me = "AE301", pe = "AE302", Ee = "AE303", Ae = "AE304", $e = [
  me,
  pe,
  Ee,
  Ae
], fe = async (o, e) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.attributes.map((n) => n.name);
  const t = await ge(o, e);
  if (!t)
    return e.attributes.map((n) => n.name);
  const r = await fe(o, t);
  return e.attributes.map((n) => n.name).concat(r);
}, et = async (o, e) => {
  if (o.generalization.$Type === "DomainModels$NoGeneralization")
    return o.generalization.persistable;
  const t = await ge(e, o);
  if (t)
    return et(t, e);
}, ye = async (o, e) => {
  const [t, r] = e.split(".");
  return !t || !r ? void 0 : (await o.app.model.domainModels.getDomainModel(t))?.entities.find((i) => i.name === r);
}, ge = (o, e) => {
  const t = e.generalization;
  return ye(o, t.generalization);
}, Yt = async (o, e) => {
  e.qualifiedName && await o.ui.editors.editDocument(
    { sdkType: "DomainModels$DomainModel", qualifiedName: e.qualifiedName.split(".")[0] },
    { id: e.documentId }
  );
}, tt = (o) => ({
  check: async (e) => {
    const t = await ot(o, e), r = nt(e), n = await rt(o, e), i = it(e), s = st(e), a = at(e), l = await ct(o, e), E = await dt(o, e);
    return {
      errors: [
        ...t.errors,
        ...n.errors,
        ...i.errors,
        ...s.errors,
        ...a.errors,
        ...l.errors,
        ...E.errors,
        ...r.errors
      ],
      dependentElementIds: [
        ...t.dependentElementIds,
        ...n.dependentElementIds,
        ...i.dependentElementIds,
        ...a.dependentElementIds,
        ...l.dependentElementIds,
        ...E.dependentElementIds,
        ...r.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: Je
});
async function ot(o, e) {
  const t = [], r = [];
  if (!e.model)
    return t.push({
      elementText: "Model resource",
      errorCode: L,
      errorDescription: "Model resource is required for an agent.",
      severity: "error"
    }), { errors: t, dependentElementIds: r };
  r.push(e.model.documentId);
  const n = await _(o, e.model);
  return n ? n.excluded && t.push({
    elementText: "Model resource",
    errorCode: G,
    errorDescription: `Model ${e.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : t.push({
    elementText: "Model resource",
    errorCode: P,
    errorDescription: `Model ${e.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: t, dependentElementIds: r };
}
const nt = (o) => {
  const e = [];
  return o.model && !o.selectedModel && e.push({
    elementText: "Model version",
    errorCode: $,
    errorDescription: "Model version is required for an agent",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
};
async function rt(o, e) {
  const t = [], r = [];
  if (!e.entity)
    return e.variables.length > 0 && t.push({
      elementText: "Context entity",
      errorCode: q,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: t, dependentElementIds: [] };
  r.push(e.entity.documentId);
  const n = await ye(o, e.entity.qualifiedName);
  if (!n)
    return t.push({
      elementText: "Context entity",
      errorCode: F,
      errorDescription: `Context entity ${e.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error"
    }), { errors: t, dependentElementIds: r };
  const i = await fe(o, n), s = e.variables.filter((a) => !i.includes(a.key)).map((a) => a.key);
  return s.length > 0 && t.push({
    elementText: "Context entity",
    errorCode: z,
    errorDescription: `Variable${s.length > 1 ? "s" : ""} ${s.join(", ")} could not be found in context entity ${e.entity.qualifiedName}.`,
    severity: "warning"
  }), { errors: t, dependentElementIds: r };
}
function it(o) {
  const e = [];
  return o.usageType === Qe.Task && !o.userPrompt && e.push({
    elementText: "User prompt",
    errorCode: U,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function st(o) {
  const e = [];
  return o.usageType || e.push({
    elementText: "Agent type",
    errorCode: Z,
    errorDescription: "Agent type is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function at(o) {
  const e = [];
  if (o.toolChoice !== Oe.Tool)
    return { errors: e, dependentElementIds: [] };
  if (!o.toolChoiceToolName)
    e.push({
      elementText: "Tool choice",
      errorCode: Q,
      errorDescription: "A specific tool must be selected when tool choice is set to 'Tool'.",
      severity: "error"
    });
  else {
    const t = o.tools.find((r) => r.name === o.toolChoiceToolName);
    t ? t.enabled || e.push({
      elementText: "Tool choice",
      errorCode: W,
      errorDescription: `Tool '${o.toolChoiceToolName}' is not active. Please activate it, or select a different tool.`,
      severity: "error"
    }) : e.push({
      elementText: "Tool choice",
      errorCode: J,
      errorDescription: `Tool '${o.toolChoiceToolName}' is not in the agent's tools list. Please update your tool selection or change the tool choice.`,
      severity: "error"
    });
  }
  return { errors: e, dependentElementIds: [] };
}
async function ct(o, e) {
  const t = [], r = [];
  for (const n of e.tools) {
    if (!n.enabled)
      continue;
    r.push(n.document.documentId);
    const i = await he(o, n.toolType, n.document), s = we(n.toolType);
    if (!i)
      t.push({
        elementText: "Tools",
        errorCode: K,
        errorDescription: `${s} ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (i.excluded)
      t.push({
        elementText: "Tools",
        errorCode: V,
        errorDescription: `${s} ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Ne(i)) {
      const { errors: a } = lt(i, n);
      t.push(...a);
    }
  }
  return { errors: t, dependentElementIds: r };
}
async function dt(o, e) {
  const t = [], r = [];
  if (e.knowledgebaseTools)
    for (const n of e.knowledgebaseTools) {
      if (!n.enabled)
        continue;
      r.push(n.document.documentId);
      const i = await _(o, n.document);
      i ? i.excluded && t.push({
        elementText: "Knowledge bases",
        errorCode: H,
        errorDescription: `Knowledge base ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : t.push({
        elementText: "Knowledge bases",
        errorCode: X,
        errorDescription: `Knowledge base ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: t, dependentElementIds: r };
}
function lt(o, e) {
  const t = [];
  return o.microflowReturnType.$Type !== "DataTypes$StringType" && t.push({
    elementText: "Tools",
    errorCode: Y,
    errorDescription: `Microflow ${e.document.qualifiedName} must return a String.`,
    severity: "error"
  }), Ie(o) && t.push({
    elementText: "Tools",
    errorCode: j,
    errorDescription: `Microflow ${e.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
async function ut(o) {
  await o.ui.tabs.open(
    {
      title: ke,
      icon: D
    },
    {
      uiEntrypoint: xe,
      componentName: De
    },
    {
      isSingleton: !0
    }
  );
}
const mt = (o) => ({
  check: async (e) => {
    const t = await pt(o, e), r = await Et(o, e);
    return {
      errors: [...t.errors, ...r.errors],
      dependentElementIds: [...t.dependentElementIds, ...r.dependentElementIds]
    };
  },
  reservedErrorCodes: Ze
});
async function pt(o, e) {
  const t = [], r = [];
  if (!e.endpoint)
    return t.push({
      errorCode: re,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: t, dependentElementIds: r };
  r.push(e.endpoint.documentId);
  const n = await m(o, e.endpoint);
  return n ? n.excluded ? t.push({
    errorCode: ae,
    errorDescription: `The constant ${e.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : p(n) || t.push({
    errorCode: se,
    errorDescription: `The constant ${e.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : t.push({
    errorCode: ie,
    errorDescription: `The constant ${e.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: t, dependentElementIds: r };
}
async function Et(o, e) {
  const t = [], r = [];
  if (!e.authenticationMicroflow)
    return { errors: t, dependentElementIds: r };
  r.push(e.authenticationMicroflow.documentId);
  const n = await Me(
    o,
    e.authenticationMicroflow
  );
  return n ? n.excluded ? (t.push({
    errorCode: ue,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: r }) : (n.objectCollection.objects?.filter((i) => i.$Type === "Microflows$MicroflowParameterObject").length !== 0 && t.push({
    errorCode: le,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== be.HttpHeader) && t.push({
    errorCode: de,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: r }) : (t.push({
    errorCode: ce,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: r });
}
const At = (o) => ({
  check: async (e) => {
    const t = await ft(o, e);
    return {
      errors: [...t.errors],
      dependentElementIds: [...t.dependentElementIds]
    };
  },
  reservedErrorCodes: $e
});
async function ft(o, e) {
  const t = [], r = [], n = e.providerFields;
  if (!n.key)
    return t.push({
      errorCode: me,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: t, dependentElementIds: r };
  r.push(n.key.documentId);
  const i = await m(o, n.key);
  return i ? i.excluded ? t.push({
    errorCode: Ae,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : p(i) || t.push({
    errorCode: Ee,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : t.push({
    errorCode: pe,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: t, dependentElementIds: r };
}
const yt = (o) => ({
  check: async (e) => {
    let t;
    return e.provider === "MxCloudGenAI" ? t = await gt(o, e) : e.provider === "Azure" && (t = await Dt(o, e)), {
      errors: t ? [...t.errors] : [],
      dependentElementIds: t ? [...t.dependentElementIds] : []
    };
  },
  reservedErrorCodes: [...We]
});
async function gt(o, e) {
  const t = [], r = [], n = e.providerFields;
  if (!n.key)
    return t.push({
      errorCode: R,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: t, dependentElementIds: r };
  r.push(n.key.documentId);
  const i = await m(o, n.key);
  return i ? i.excluded ? t.push({
    errorCode: w,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : p(i) || t.push({
    errorCode: h,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : t.push({
    errorCode: O,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: t, dependentElementIds: r };
}
async function Dt(o, e) {
  const t = [], r = [], n = e.providerFields;
  if (!n.key)
    t.push({
      errorCode: R,
      errorDescription: "API key is required for an Azure AI model.",
      severity: "error",
      elementText: "API key"
    });
  else {
    r.push(n.key.documentId);
    const i = await m(o, n.key);
    i ? i.excluded ? t.push({
      errorCode: w,
      errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
      severity: "error",
      elementText: "API key"
    }) : p(i) || t.push({
      errorCode: h,
      errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
      severity: "error",
      elementText: "API key"
    }) : t.push({
      errorCode: O,
      errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error",
      elementText: "API key"
    });
  }
  if (!n.endpoint)
    t.push({
      errorCode: ee,
      errorDescription: "Project endpoint is required for an Azure AI model.",
      severity: "error",
      elementText: "Project endpoint"
    });
  else {
    r.push(n.endpoint.documentId);
    const i = await m(o, n.endpoint);
    i ? i.excluded ? t.push({
      errorCode: ne,
      errorDescription: `The constant ${n.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : p(i) || t.push({
      errorCode: oe,
      errorDescription: `The constant ${n.endpoint.qualifiedName} must be of type string.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : t.push({
      errorCode: te,
      errorDescription: `The constant ${n.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error",
      elementText: "Project endpoint"
    });
  }
  return { errors: t, dependentElementIds: r };
}
async function x(o) {
  await o.ui.tabs.open(
    { title: Fe, icon: D },
    {
      uiEntrypoint: qe,
      componentName: De
    },
    {
      isSingleton: !0
    }
  );
}
async function Tt(o, e) {
  try {
    o.app.projectChanges.addEventListener("elementsRenamed", async ({ elements: t }) => {
      await Ot(o, t), await ht(o, t), await Nt(o, t), await wt(o, t);
    });
  } catch (t) {
    e.error("Failed to set up elementsRenamed event listener", { error: t });
  }
}
function Ct(o, e, t, r, n) {
  o.qualifiedName = e, t.app.model.customBlobDocuments.updateDocumentContent(r, n);
}
function Rt(o, e, t) {
  const r = e.find((i) => i.documentType === Le);
  if (r) {
    const [i, s] = o.qualifiedName.split(".");
    if (r.oldName.qualifiedName === i)
      return `${r.newName.qualifiedName}.${s}`;
  }
  return e.find((i) => i.oldName.qualifiedName !== o.qualifiedName ? !1 : t ? t.includes(i.documentType) : !0)?.newName.qualifiedName;
}
function d(o, e, t, r, n) {
  const i = Rt(t, r, n);
  i && Ct(t, i, o, e.$ID, e.contents);
}
async function Ot(o, e) {
  const t = await o.app.model.customBlobDocuments.getDocumentsOfType(T);
  for (const r of t) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document) {
      if (n.document.contents.model && d(o, n.document, n.document.contents.model, e, [
        f
      ]), n.document.contents.entity && d(o, n.document, n.document.contents.entity, e, [
        Pe
      ]), n.document.contents.tools)
        for (const i of n.document.contents.tools)
          d(o, n.document, i.document, e, [
            Ge,
            y
          ]);
      if (n.document.contents.knowledgebaseTools)
        for (const i of n.document.contents.knowledgebaseTools)
          d(o, n.document, i.document, e, [
            g
          ]);
    }
  }
}
async function ht(o, e) {
  const t = await o.app.model.customBlobDocuments.getDocumentsOfType(f);
  for (const r of t) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const i = n.document.contents.providerFields;
      if (!i.key)
        continue;
      d(o, n.document, i.key, e, [C]);
    }
  }
}
async function wt(o, e) {
  const t = await o.app.model.customBlobDocuments.getDocumentsOfType(g);
  for (const r of t) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const i = n.document.contents.providerFields;
      if (!i.key)
        continue;
      d(o, n.document, i.key, e, [C]);
    }
  }
}
async function Nt(o, e) {
  const t = await o.app.model.customBlobDocuments.getDocumentsOfType(
    y
  );
  for (const r of t) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    "document" in n && n.document && n.document.contents.endpoint && d(o, n.document, n.document.contents.endpoint, e, [
      C
    ]);
  }
}
const De = "extension/agent-editor";
class It {
  async loaded(e) {
    const t = Ce(e);
    try {
      if (await t.app.model.customBlobDocuments.registerDocumentType({
        type: T,
        readableTypeName: "Agent",
        defaultContent: _e(),
        consistencyCheckRegistration: tt(t),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: f,
        readableTypeName: "Model",
        defaultContent: Se(),
        consistencyCheckRegistration: yt(t),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: y,
        readableTypeName: "Consumed MCP service",
        defaultContent: Be(),
        consistencyCheckRegistration: mt(t),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: g,
        readableTypeName: "Knowledge base",
        defaultContent: ve(),
        consistencyCheckRegistration: At(t),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), e.runMode === "ui") {
        const { createStudioProLogger: r } = await import("./logger-gMbuSAUF.js"), { createAnalyticsService: n } = await import("./analytics-nin28nik.js"), i = I(e), s = Ue(e), a = r(i), l = await Ke(i), E = n(s, l, a);
        Tt(i, a), E.registerDocumentCreationListener(i);
        let N = !1;
        i.runtime.controller.addEventListener("connectionChanged", (c) => {
          N = c.isConnected, i.ui.messagePassing.sendMessage({
            type: A.ConnectionChanged,
            isConnected: c.isConnected
          });
        }), i.ui.messagePassing.addMessageHandler(
          async ({ messageId: c, message: Te }) => {
            Te.type === A.GetConnectionState && await i.ui.messagePassing.sendResponse(c, {
              isConnected: N
            });
          }
        ), i.runtime.controller.addEventListener("modelReloaded", async () => {
          try {
            await i.runtime.controller.executePreviewAction(
              He.PreviewAgentSync,
              {}
            ), await i.ui.messagePassing.sendMessage({ type: A.SyncSuccessful });
          } catch {
            await i.ui.messagePassing.sendMessage({ type: A.SyncFailed });
          }
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: T,
          editorKind: "tab",
          editorEntryPoint: "agentEdit",
          iconLight: D,
          iconDark: D
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: f,
          editorKind: "tab",
          editorEntryPoint: "modelEdit",
          iconLight: b,
          iconDark: b
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: y,
          editorKind: "tab",
          editorEntryPoint: "consumedMCPServiceEdit",
          iconLight: k,
          iconDark: k
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: g,
          editorKind: "tab",
          editorEntryPoint: "knowledgebaseEdit",
          iconLight: M,
          iconDark: M
        }), await i.ui.extensionsMenu.add({
          caption: u.AgentEditor.caption,
          menuId: u.AgentEditor.id,
          subMenus: [
            {
              caption: u.Onboarding.caption,
              menuId: u.Onboarding.id,
              action: () => x(i)
            },
            {
              caption: u.Compatibility.caption,
              menuId: u.Compatibility.id,
              action: () => ut(i)
            }
          ]
        });
        try {
          const c = await B(i);
          Ye(c, l) && (await x(i), await Xe(i, l));
        } catch (c) {
          a.error("Failed to initialize onboarding:", c);
        }
      }
    } catch (r) {
      if (e.runMode === "ui") {
        const n = I(e), { createStudioProLogger: i } = await import("./logger-gMbuSAUF.js");
        i(n).error("Error during extension initialization:", r), await n.ui.messageBoxes.show(
          "error",
          `Error during extension initialization: ${r.message}`
        );
      }
      throw r;
    }
  }
}
const jt = new It();
export {
  qt as D,
  zt as M,
  Ut as O,
  He as P,
  A as R,
  Qe as U,
  Vt as V,
  fe as a,
  D as b,
  Ft as c,
  Kt as d,
  De as e,
  jt as f,
  ye as g,
  Yt as h,
  et as i,
  ut as o
};
