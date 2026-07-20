import { a as fe, d as C } from "./jsx-runtime-CWOFuNcx.js";
import { b as ye, d as De, o as Te, g as ge, m as h, M as u, r as Re, s as Ce, e as he } from "./modelIcons-YezrRLMt.js";
import { k as O } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { m as w } from "./toolIcons-B55yYne7.js";
import { T as Oe, e as we, f as Ne, i as Ie, j as Me, g as be, C as ke, a as Se } from "./toolUtils-MLHoVQt4.js";
import { g as M } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { C as Be, a as Pe } from "./compatibility-B4OgVO3B.js";
import { a as T, i as g } from "./constantUtils-D0RXxXWn.js";
import { h as D, m as E, g as p, k as A, i as ve, b as _e, d as Le, f as xe } from "./documentInitUtils-Bwe4f_Cu.js";
import { E as Ge, M as N, C as y, b as qe } from "./studioPro-BAnarQ8w.js";
const Nt = 300, m = {
  ConnectionChanged: "ae_connectionChanged",
  GetConnectionState: "ae_getConnectionState",
  SyncSuccessful: "ae_syncSuccessful",
  SyncFailed: "ae_syncFailed"
}, Ue = {
  PreviewAgentSync: "preview_agent_sync",
  PreviewAgentTest: "preview_agent_test"
}, f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", It = "data:image/png;base64,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", ze = {
  Chat: "Chat",
  Task: "Task"
}, Mt = {
  Agent: "agent",
  User: "user",
  Error: "error"
}, bt = {
  Disabled: "Disabled",
  Enabled: "Enabled",
  SyncNeeded: "SyncNeeded",
  SyncFailed: "SyncFailed",
  SyncSuccessful: "SyncSuccessful"
}, kt = {
  Build: "Build",
  Playground: "Playground"
}, b = "AE001", k = "AE002", S = "AE003", B = "AE004", P = "AE005", v = "AE006", _ = "AE007", L = "AE008", x = "AE009", G = "AE010", q = "AE011", U = "AE012", z = "AE013", K = "AE014", F = "AE015", Y = "AE016", V = "AE017", X = "AE018", Ke = [
  b,
  k,
  S,
  B,
  P,
  v,
  _,
  L,
  x,
  G,
  q,
  U,
  z,
  K,
  F,
  Y,
  V,
  X
], H = "AE101", Q = "AE102", j = "AE103", J = "AE104", Fe = [
  H,
  Q,
  j,
  J
], W = "AE201", Z = "AE202", $ = "AE203", ee = "AE204", te = "AE205", oe = "AE206", ne = "AE207", re = "AE208", Ye = [
  W,
  Z,
  $,
  ee,
  te,
  oe,
  ne,
  re
], se = "AE301", ie = "AE302", ae = "AE303", ce = "AE304", Ve = [
  se,
  ie,
  ae,
  ce
], de = async (r, e) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.attributes.map((o) => o.name);
  const t = await ue(r, e);
  if (!t)
    return e.attributes.map((o) => o.name);
  const n = await de(r, t);
  return e.attributes.map((o) => o.name).concat(n);
}, Xe = async (r, e) => {
  if (r.generalization.$Type === "DomainModels$NoGeneralization")
    return r.generalization.persistable;
  const t = await ue(e, r);
  if (t)
    return Xe(t, e);
}, le = async (r, e) => {
  const [t, n] = e.split(".");
  return !t || !n ? void 0 : (await r.app.model.domainModels.getDomainModel(t))?.entities.find((s) => s.name === n);
}, ue = (r, e) => {
  const t = e.generalization;
  return le(r, t.generalization);
}, St = async (r, e) => {
  e.qualifiedName && await r.ui.editors.editDocument(
    { sdkType: "DomainModels$DomainModel", qualifiedName: e.qualifiedName.split(".")[0] },
    { id: e.documentId }
  );
}, He = (r) => ({
  check: async (e) => {
    const t = await Qe(r, e), n = je(e), o = await Je(r, e), s = We(e), i = Ze(e), a = $e(e), d = await et(r, e), l = await tt(r, e);
    return {
      errors: [
        ...t.errors,
        ...o.errors,
        ...s.errors,
        ...i.errors,
        ...a.errors,
        ...d.errors,
        ...l.errors,
        ...n.errors
      ],
      dependentElementIds: [
        ...t.dependentElementIds,
        ...o.dependentElementIds,
        ...s.dependentElementIds,
        ...a.dependentElementIds,
        ...d.dependentElementIds,
        ...l.dependentElementIds,
        ...n.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: Ke
});
async function Qe(r, e) {
  const t = [], n = [];
  if (!e.model)
    return t.push({
      elementText: "Model resource",
      errorCode: b,
      errorDescription: "Model resource is required for an agent.",
      severity: "error"
    }), { errors: t, dependentElementIds: n };
  n.push(e.model.documentId);
  const o = await M(r, e.model);
  return o ? o.excluded && t.push({
    elementText: "Model resource",
    errorCode: S,
    errorDescription: `Model ${e.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : t.push({
    elementText: "Model resource",
    errorCode: k,
    errorDescription: `Model ${e.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: t, dependentElementIds: n };
}
const je = (r) => {
  const e = [];
  return r.model && !r.selectedModel && e.push({
    elementText: "Model version",
    errorCode: X,
    errorDescription: "Model version is required for an agent",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
};
async function Je(r, e) {
  const t = [], n = [];
  if (!e.entity)
    return e.variables.length > 0 && t.push({
      elementText: "Context entity",
      errorCode: P,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: t, dependentElementIds: [] };
  n.push(e.entity.documentId);
  const o = await le(r, e.entity.qualifiedName);
  if (!o)
    return t.push({
      elementText: "Context entity",
      errorCode: v,
      errorDescription: `Context entity ${e.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error"
    }), { errors: t, dependentElementIds: n };
  const s = await de(r, o), i = e.variables.filter((a) => !s.includes(a.key)).map((a) => a.key);
  return i.length > 0 && t.push({
    elementText: "Context entity",
    errorCode: _,
    errorDescription: `Variable${i.length > 1 ? "s" : ""} ${i.join(", ")} could not be found in context entity ${e.entity.qualifiedName}.`,
    severity: "warning"
  }), { errors: t, dependentElementIds: n };
}
function We(r) {
  const e = [];
  return r.usageType === ze.Task && !r.userPrompt && e.push({
    elementText: "User prompt",
    errorCode: B,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function Ze(r) {
  const e = [];
  return r.usageType || e.push({
    elementText: "Agent type",
    errorCode: V,
    errorDescription: "Agent type is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function $e(r) {
  const e = [];
  if (r.toolChoice !== Oe.Tool)
    return { errors: e, dependentElementIds: [] };
  if (!r.toolChoiceToolName)
    e.push({
      elementText: "Tool choice",
      errorCode: K,
      errorDescription: "A specific tool must be selected when tool choice is set to 'Tool'.",
      severity: "error"
    });
  else {
    const t = r.tools.find((n) => n.name === r.toolChoiceToolName);
    t ? t.enabled || e.push({
      elementText: "Tool choice",
      errorCode: Y,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not active. Please activate it, or select a different tool.`,
      severity: "error"
    }) : e.push({
      elementText: "Tool choice",
      errorCode: F,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not in the agent's tools list. Please update your tool selection or change the tool choice.`,
      severity: "error"
    });
  }
  return { errors: e, dependentElementIds: [] };
}
async function et(r, e) {
  const t = [], n = [];
  for (const o of e.tools) {
    if (!o.enabled)
      continue;
    n.push(o.document.documentId);
    const s = await we(r, o.toolType, o.document), i = Ne(o.toolType);
    if (!s)
      t.push({
        elementText: "Tools",
        errorCode: L,
        errorDescription: `${i} ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      t.push({
        elementText: "Tools",
        errorCode: x,
        errorDescription: `${i} ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Ie(s)) {
      const { errors: a } = ot(s, o);
      t.push(...a);
    }
  }
  return { errors: t, dependentElementIds: n };
}
async function tt(r, e) {
  const t = [], n = [];
  if (e.knowledgebaseTools)
    for (const o of e.knowledgebaseTools) {
      if (!o.enabled)
        continue;
      n.push(o.document.documentId);
      const s = await M(r, o.document);
      s ? s.excluded && t.push({
        elementText: "Knowledge bases",
        errorCode: z,
        errorDescription: `Knowledge base ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : t.push({
        elementText: "Knowledge bases",
        errorCode: U,
        errorDescription: `Knowledge base ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: t, dependentElementIds: n };
}
function ot(r, e) {
  const t = [];
  return r.microflowReturnType.$Type !== "DataTypes$StringType" && t.push({
    elementText: "Tools",
    errorCode: G,
    errorDescription: `Microflow ${e.document.qualifiedName} must return a String.`,
    severity: "error"
  }), Me(r) && t.push({
    elementText: "Tools",
    errorCode: q,
    errorDescription: `Microflow ${e.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
async function nt(r) {
  await r.ui.tabs.open(
    {
      title: Be,
      icon: f
    },
    {
      uiEntrypoint: Pe,
      componentName: me
    },
    {
      isSingleton: !0
    }
  );
}
const rt = (r) => ({
  check: async (e) => {
    const t = await st(r, e), n = await it(r, e);
    return {
      errors: [...t.errors, ...n.errors],
      dependentElementIds: [...t.dependentElementIds, ...n.dependentElementIds]
    };
  },
  reservedErrorCodes: Ye
});
async function st(r, e) {
  const t = [], n = [];
  if (!e.endpoint)
    return t.push({
      errorCode: W,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: t, dependentElementIds: n };
  n.push(e.endpoint.documentId);
  const o = await T(r, e.endpoint);
  return o ? o.excluded ? t.push({
    errorCode: ee,
    errorDescription: `The constant ${e.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : g(o) || t.push({
    errorCode: $,
    errorDescription: `The constant ${e.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : t.push({
    errorCode: Z,
    errorDescription: `The constant ${e.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: t, dependentElementIds: n };
}
async function it(r, e) {
  const t = [], n = [];
  if (!e.authenticationMicroflow)
    return { errors: t, dependentElementIds: n };
  n.push(e.authenticationMicroflow.documentId);
  const o = await be(
    r,
    e.authenticationMicroflow
  );
  return o ? o.excluded ? (t.push({
    errorCode: re,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n }) : (o.objectCollection.objects?.filter((s) => s.$Type === "Microflows$MicroflowParameterObject").length !== 0 && t.push({
    errorCode: ne,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (o.microflowReturnType.$Type !== "DataTypes$ListType" || o.microflowReturnType.entity !== ke.HttpHeader) && t.push({
    errorCode: oe,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n }) : (t.push({
    errorCode: te,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n });
}
const at = (r) => ({
  check: async (e) => {
    const t = await ct(r, e);
    return {
      errors: [...t.errors],
      dependentElementIds: [...t.dependentElementIds]
    };
  },
  reservedErrorCodes: Ve
});
async function ct(r, e) {
  const t = [], n = [], o = e.providerFields;
  if (!o.key)
    return t.push({
      errorCode: se,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: t, dependentElementIds: n };
  n.push(o.key.documentId);
  const s = await T(r, o.key);
  return s ? s.excluded ? t.push({
    errorCode: ce,
    errorDescription: `The constant ${o.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : g(s) || t.push({
    errorCode: ae,
    errorDescription: `The constant ${o.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : t.push({
    errorCode: ie,
    errorDescription: `The constant ${o.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: t, dependentElementIds: n };
}
const dt = (r) => ({
  check: async (e) => {
    const t = await lt(r, e);
    return {
      errors: [...t.errors],
      dependentElementIds: [...t.dependentElementIds]
    };
  },
  reservedErrorCodes: Fe
});
async function lt(r, e) {
  const t = [], n = [], o = e.providerFields;
  if (!o.key)
    return t.push({
      errorCode: H,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: t, dependentElementIds: n };
  n.push(o.key.documentId);
  const s = await T(r, o.key);
  return s ? s.excluded ? t.push({
    errorCode: J,
    errorDescription: `The constant ${o.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : g(s) || t.push({
    errorCode: j,
    errorDescription: `The constant ${o.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : t.push({
    errorCode: Q,
    errorDescription: `The constant ${o.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: t, dependentElementIds: n };
}
async function I(r) {
  await r.ui.tabs.open(
    { title: ye, icon: f },
    {
      uiEntrypoint: De,
      componentName: me
    },
    {
      isSingleton: !0
    }
  );
}
class ut {
  studioPro;
  logger;
  constructor(e, t) {
    this.studioPro = e, this.logger = t;
  }
  registerListeners() {
    this.studioPro.app.projectChanges.addEventListener("elementsRenamed", async ({ elements: e }) => {
      try {
        await this.updateAgentDependencies(e), await this.updateModelDependencies(e), await this.updateConsumedMCPServiceDependencies(e), await this.updateKnowledgeBaseDependencies(e);
      } catch (t) {
        this.logger?.error("Failed to handle elementsRenamed event", { error: t });
      }
    });
  }
  /**
   * Updates dependencies in all agent documents (model, entity, and tool references).
   */
  async updateAgentDependencies(e) {
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(D);
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      if ("document" in o && o.document) {
        if (o.document.contents.model && this.checkAndRenameDependency(o.document, o.document.contents.model, e, E), o.document.contents.entity && this.checkAndRenameDependency(
          o.document,
          o.document.contents.entity,
          e,
          Ge
        ), o.document.contents.tools)
          for (const s of o.document.contents.tools) {
            const i = s.toolType === Se.Microflow ? N : p;
            this.checkAndRenameDependency(o.document, s.document, e, i);
          }
        if (o.document.contents.knowledgebaseTools)
          for (const s of o.document.contents.knowledgebaseTools)
            this.checkAndRenameDependency(
              o.document,
              s.document,
              e,
              A
            );
      }
    }
  }
  /**
   * Updates MxCloudGenAI key references in model documents.
   */
  async updateModelDependencies(e) {
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(E);
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      if ("document" in o && o.document && o.document.contents.provider === "MxCloudGenAI") {
        const s = o.document.contents.providerFields;
        if (!s.key)
          continue;
        this.checkAndRenameDependency(o.document, s.key, e, y);
      }
    }
  }
  /**
   * Updates MxCloudGenAI key references in knowledgebase documents.
   */
  async updateKnowledgeBaseDependencies(e) {
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(A);
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      if ("document" in o && o.document && o.document.contents.provider === "MxCloudGenAI") {
        const s = o.document.contents.providerFields;
        if (!s.key)
          continue;
        this.checkAndRenameDependency(o.document, s.key, e, y);
      }
    }
  }
  /**
   * Updates endpoint references in consumed MCP service documents.
   */
  async updateConsumedMCPServiceDependencies(e) {
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(
      p
    );
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      "document" in o && o.document && (o.document.contents.endpoint && this.checkAndRenameDependency(
        o.document,
        o.document.contents.endpoint,
        e,
        y
      ), o.document.contents.authenticationMicroflow && this.checkAndRenameDependency(
        o.document,
        o.document.contents.authenticationMicroflow,
        e,
        N
      ));
    }
  }
  /**
   * Checks if a model document dependency was renamed and updates it if necessary.
   */
  checkAndRenameDependency(e, t, n, o) {
    const s = mt(t, n, o);
    s && this.renameDependency(t, s, e.$ID, e.contents);
  }
  /**
   * Updates a dependency's qualified name and saves the document.
   */
  renameDependency(e, t, n, o) {
    e.qualifiedName = t, this.studioPro.app.model.customBlobDocuments.updateDocumentContent(n, o);
  }
}
function mt(r, e, t) {
  const n = e.find((s) => s.documentType === qe);
  if (n) {
    const [s, i] = r.qualifiedName.split(".");
    if (n.oldName.qualifiedName === s)
      return `${n.newName.qualifiedName}.${i}`;
  }
  return e.find((s) => s.oldName.qualifiedName !== r.qualifiedName ? !1 : t ? s.documentType === t : !0)?.newName.qualifiedName;
}
function Et(r, e) {
  return new ut(r, e);
}
const me = "extension/agent-editor";
class pt {
  async loaded(e) {
    const t = fe(e);
    try {
      if (await t.app.model.customBlobDocuments.registerDocumentType({
        type: D,
        readableTypeName: "Agent",
        defaultContent: ve(),
        consistencyCheckRegistration: He(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: E,
        readableTypeName: "Model",
        defaultContent: _e(),
        consistencyCheckRegistration: dt(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: p,
        readableTypeName: "Consumed MCP service",
        defaultContent: Le(),
        consistencyCheckRegistration: rt(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Knowledge base",
        defaultContent: xe(),
        consistencyCheckRegistration: at(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), e.runMode === "ui") {
        const { createStudioProLogger: n } = await import("./logger-gMbuSAUF.js"), { createAnalyticsService: o } = await import("./analytics-CsjXgNa3.js"), { createDocumentReferenceSyncService: s } = await import("./documentReferenceSync-DQPtU4Jg.js"), i = C(e), a = Te(e), d = n(i), l = await ge(i), Ee = o(a, l, d), pe = s(i, d);
        Et(i, d).registerListeners(), Ee.registerDocumentCreationListener(i), pe.registerListeners();
        let R = !1;
        i.runtime.controller.addEventListener("connectionChanged", (c) => {
          R = c.isConnected, i.ui.messagePassing.sendMessage({
            type: m.ConnectionChanged,
            isConnected: c.isConnected
          });
        }), i.ui.messagePassing.addMessageHandler(
          async ({ messageId: c, message: Ae }) => {
            Ae.type === m.GetConnectionState && await i.ui.messagePassing.sendResponse(c, {
              isConnected: R
            });
          }
        ), i.runtime.controller.addEventListener("modelReloaded", async () => {
          try {
            await i.runtime.controller.executePreviewAction(
              Ue.PreviewAgentSync,
              {}
            ), await i.ui.messagePassing.sendMessage({ type: m.SyncSuccessful });
          } catch {
            await i.ui.messagePassing.sendMessage({ type: m.SyncFailed });
          }
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: D,
          editorKind: "tab",
          editorEntryPoint: "agentEdit",
          iconLight: f,
          iconDark: f
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: E,
          editorKind: "tab",
          editorEntryPoint: "modelEdit",
          iconLight: h,
          iconDark: h
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: p,
          editorKind: "tab",
          editorEntryPoint: "consumedMCPServiceEdit",
          iconLight: w,
          iconDark: w
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: A,
          editorKind: "tab",
          editorEntryPoint: "knowledgebaseEdit",
          iconLight: O,
          iconDark: O
        }), await i.ui.extensionsMenu.add({
          caption: u.AgentEditor.caption,
          menuId: u.AgentEditor.id,
          subMenus: [
            {
              caption: u.Onboarding.caption,
              menuId: u.Onboarding.id,
              action: () => I(i)
            },
            {
              caption: u.Compatibility.caption,
              menuId: u.Compatibility.id,
              action: () => nt(i)
            }
          ]
        });
        try {
          const c = await Re(i);
          Ce(c, l) && (await I(i), await he(i, l));
        } catch (c) {
          d.error("Failed to initialize onboarding:", c);
        }
      }
    } catch (n) {
      if (e.runMode === "ui") {
        const o = C(e), { createStudioProLogger: s } = await import("./logger-gMbuSAUF.js");
        s(o).error("Error during extension initialization:", n), await o.ui.messageBoxes.show(
          "error",
          `Error during extension initialization: ${n.message}`
        );
      }
      throw n;
    }
  }
}
const Bt = new pt();
export {
  Nt as D,
  Mt as M,
  Ue as P,
  m as R,
  ze as U,
  kt as V,
  de as a,
  f as b,
  It as c,
  bt as d,
  me as e,
  Bt as f,
  le as g,
  St as h,
  Xe as i,
  nt as o
};
