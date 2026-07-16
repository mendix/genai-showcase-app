import { a as Ce, d as N } from "./jsx-runtime-CWOFuNcx.js";
import { d as Re, e as he, o as ge, g as Oe, f as I, M as u, r as we, s as Ne, h as Ie } from "./modelIcons-DAQ1b1a0.js";
import { k as M } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { m as k } from "./toolIcons-B55yYne7.js";
import { E as Me, M as b, C as T, b as ke } from "./studioPro-BAnarQ8w.js";
import { a as be, T as _e, e as Pe, f as ve, i as Se, j as Be, g as xe, C as Le } from "./toolUtils-MLHoVQt4.js";
import { i as C, m as A, h as f, k as D, j as qe, d as Ge, e as Ue, g as ze } from "./documentInitUtils-CvQbsMH5.js";
import { g as P } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { C as Fe, a as Ke } from "./compatibility-B4OgVO3B.js";
import { a as m, i as E } from "./constantUtils-D0RXxXWn.js";
const _t = 300, p = {
  ConnectionChanged: "ae_connectionChanged",
  GetConnectionState: "ae_getConnectionState",
  SyncSuccessful: "ae_syncSuccessful",
  SyncFailed: "ae_syncFailed"
}, Ye = {
  PreviewAgentSync: "preview_agent_sync",
  PreviewAgentTest: "preview_agent_test"
}, y = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", Pt = "data:image/png;base64,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";
class Ve {
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
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(C);
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      if ("document" in o && o.document) {
        if (o.document.contents.model && this.checkAndRenameDependency(o.document, o.document.contents.model, e, A), o.document.contents.entity && this.checkAndRenameDependency(
          o.document,
          o.document.contents.entity,
          e,
          Me
        ), o.document.contents.tools)
          for (const s of o.document.contents.tools) {
            const i = s.toolType === be.Microflow ? b : f;
            this.checkAndRenameDependency(o.document, s.document, e, i);
          }
        if (o.document.contents.knowledgebaseTools)
          for (const s of o.document.contents.knowledgebaseTools)
            this.checkAndRenameDependency(
              o.document,
              s.document,
              e,
              D
            );
      }
    }
  }
  /**
   * Updates MxCloudGenAI key references in model documents.
   */
  async updateModelDependencies(e) {
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(A);
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      if ("document" in o && o.document && o.document.contents.provider === "MxCloudGenAI") {
        const s = o.document.contents.providerFields;
        if (!s.key)
          continue;
        this.checkAndRenameDependency(o.document, s.key, e, T);
      }
    }
  }
  /**
   * Updates MxCloudGenAI key references in knowledgebase documents.
   */
  async updateKnowledgeBaseDependencies(e) {
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(D);
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      if ("document" in o && o.document && o.document.contents.provider === "MxCloudGenAI") {
        const s = o.document.contents.providerFields;
        if (!s.key)
          continue;
        this.checkAndRenameDependency(o.document, s.key, e, T);
      }
    }
  }
  /**
   * Updates endpoint references in consumed MCP service documents.
   */
  async updateConsumedMCPServiceDependencies(e) {
    const t = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(
      f
    );
    for (const n of t) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(n.id);
      "document" in o && o.document && (o.document.contents.endpoint && this.checkAndRenameDependency(
        o.document,
        o.document.contents.endpoint,
        e,
        T
      ), o.document.contents.authenticationMicroflow && this.checkAndRenameDependency(
        o.document,
        o.document.contents.authenticationMicroflow,
        e,
        b
      ));
    }
  }
  /**
   * Checks if a model document dependency was renamed and updates it if necessary.
   */
  checkAndRenameDependency(e, t, n, o) {
    const s = Xe(t, n, o);
    s && this.renameDependency(t, s, e.$ID, e.contents);
  }
  /**
   * Updates a dependency's qualified name and saves the document.
   */
  renameDependency(e, t, n, o) {
    e.qualifiedName = t, this.studioPro.app.model.customBlobDocuments.updateDocumentContent(n, o);
  }
}
function Xe(r, e, t) {
  const n = e.find((s) => s.documentType === ke);
  if (n) {
    const [s, i] = r.qualifiedName.split(".");
    if (n.oldName.qualifiedName === s)
      return `${n.newName.qualifiedName}.${i}`;
  }
  return e.find((s) => s.oldName.qualifiedName !== r.qualifiedName ? !1 : t ? s.documentType === t : !0)?.newName.qualifiedName;
}
function je(r, e) {
  return new Ve(r, e);
}
const He = {
  Chat: "Chat",
  Task: "Task"
}, vt = {
  Agent: "agent",
  User: "user",
  Error: "error"
}, St = {
  Disabled: "Disabled",
  Enabled: "Enabled",
  SyncNeeded: "SyncNeeded",
  SyncFailed: "SyncFailed",
  SyncSuccessful: "SyncSuccessful"
}, Bt = {
  Build: "Build",
  Playground: "Playground"
}, v = "AE001", S = "AE002", B = "AE003", x = "AE004", L = "AE005", q = "AE006", G = "AE007", U = "AE008", z = "AE009", F = "AE010", K = "AE011", Y = "AE012", V = "AE013", X = "AE014", j = "AE015", H = "AE016", Q = "AE017", J = "AE018", Qe = [
  v,
  S,
  B,
  x,
  L,
  q,
  G,
  U,
  z,
  F,
  K,
  Y,
  V,
  X,
  j,
  H,
  Q,
  J
], R = "AE101", h = "AE102", g = "AE103", O = "AE104", W = "AE105", Z = "AE106", $ = "AE107", ee = "AE108", Je = [
  R,
  h,
  g,
  O,
  W,
  Z,
  $,
  ee
], te = "AE201", oe = "AE202", ne = "AE203", re = "AE204", se = "AE205", ie = "AE206", ae = "AE207", ce = "AE208", We = [
  te,
  oe,
  ne,
  re,
  se,
  ie,
  ae,
  ce
], de = "AE301", le = "AE302", ue = "AE303", me = "AE304", Ze = [
  de,
  le,
  ue,
  me
], Ee = async (r, e) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.attributes.map((o) => o.name);
  const t = await Ae(r, e);
  if (!t)
    return e.attributes.map((o) => o.name);
  const n = await Ee(r, t);
  return e.attributes.map((o) => o.name).concat(n);
}, $e = async (r, e) => {
  if (r.generalization.$Type === "DomainModels$NoGeneralization")
    return r.generalization.persistable;
  const t = await Ae(e, r);
  if (t)
    return $e(t, e);
}, pe = async (r, e) => {
  const [t, n] = e.split(".");
  return !t || !n ? void 0 : (await r.app.model.domainModels.getDomainModel(t))?.entities.find((s) => s.name === n);
}, Ae = (r, e) => {
  const t = e.generalization;
  return pe(r, t.generalization);
}, xt = async (r, e) => {
  e.qualifiedName && await r.ui.editors.editDocument(
    { sdkType: "DomainModels$DomainModel", qualifiedName: e.qualifiedName.split(".")[0] },
    { id: e.documentId }
  );
}, et = (r) => ({
  check: async (e) => {
    const t = await tt(r, e), n = ot(e), o = await nt(r, e), s = rt(e), i = st(e), a = it(e), d = await at(r, e), l = await ct(r, e);
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
  reservedErrorCodes: Qe
});
async function tt(r, e) {
  const t = [], n = [];
  if (!e.model)
    return t.push({
      elementText: "Model resource",
      errorCode: v,
      errorDescription: "Model resource is required for an agent.",
      severity: "error"
    }), { errors: t, dependentElementIds: n };
  n.push(e.model.documentId);
  const o = await P(r, e.model);
  return o ? o.excluded && t.push({
    elementText: "Model resource",
    errorCode: B,
    errorDescription: `Model ${e.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : t.push({
    elementText: "Model resource",
    errorCode: S,
    errorDescription: `Model ${e.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: t, dependentElementIds: n };
}
const ot = (r) => {
  const e = [];
  return r.model && !r.selectedModel && e.push({
    elementText: "Model version",
    errorCode: J,
    errorDescription: "Model version is required for an agent",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
};
async function nt(r, e) {
  const t = [], n = [];
  if (!e.entity)
    return e.variables.length > 0 && t.push({
      elementText: "Context entity",
      errorCode: L,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: t, dependentElementIds: [] };
  n.push(e.entity.documentId);
  const o = await pe(r, e.entity.qualifiedName);
  if (!o)
    return t.push({
      elementText: "Context entity",
      errorCode: q,
      errorDescription: `Context entity ${e.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error"
    }), { errors: t, dependentElementIds: n };
  const s = await Ee(r, o), i = e.variables.filter((a) => !s.includes(a.key)).map((a) => a.key);
  return i.length > 0 && t.push({
    elementText: "Context entity",
    errorCode: G,
    errorDescription: `Variable${i.length > 1 ? "s" : ""} ${i.join(", ")} could not be found in context entity ${e.entity.qualifiedName}.`,
    severity: "warning"
  }), { errors: t, dependentElementIds: n };
}
function rt(r) {
  const e = [];
  return r.usageType === He.Task && !r.userPrompt && e.push({
    elementText: "User prompt",
    errorCode: x,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function st(r) {
  const e = [];
  return r.usageType || e.push({
    elementText: "Agent type",
    errorCode: Q,
    errorDescription: "Agent type is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function it(r) {
  const e = [];
  if (r.toolChoice !== _e.Tool)
    return { errors: e, dependentElementIds: [] };
  if (!r.toolChoiceToolName)
    e.push({
      elementText: "Tool choice",
      errorCode: X,
      errorDescription: "A specific tool must be selected when tool choice is set to 'Tool'.",
      severity: "error"
    });
  else {
    const t = r.tools.find((n) => n.name === r.toolChoiceToolName);
    t ? t.enabled || e.push({
      elementText: "Tool choice",
      errorCode: H,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not active. Please activate it, or select a different tool.`,
      severity: "error"
    }) : e.push({
      elementText: "Tool choice",
      errorCode: j,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not in the agent's tools list. Please update your tool selection or change the tool choice.`,
      severity: "error"
    });
  }
  return { errors: e, dependentElementIds: [] };
}
async function at(r, e) {
  const t = [], n = [];
  for (const o of e.tools) {
    if (!o.enabled)
      continue;
    n.push(o.document.documentId);
    const s = await Pe(r, o.toolType, o.document), i = ve(o.toolType);
    if (!s)
      t.push({
        elementText: "Tools",
        errorCode: U,
        errorDescription: `${i} ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      t.push({
        elementText: "Tools",
        errorCode: z,
        errorDescription: `${i} ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Se(s)) {
      const { errors: a } = dt(s, o);
      t.push(...a);
    }
  }
  return { errors: t, dependentElementIds: n };
}
async function ct(r, e) {
  const t = [], n = [];
  if (e.knowledgebaseTools)
    for (const o of e.knowledgebaseTools) {
      if (!o.enabled)
        continue;
      n.push(o.document.documentId);
      const s = await P(r, o.document);
      s ? s.excluded && t.push({
        elementText: "Knowledge bases",
        errorCode: V,
        errorDescription: `Knowledge base ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : t.push({
        elementText: "Knowledge bases",
        errorCode: Y,
        errorDescription: `Knowledge base ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: t, dependentElementIds: n };
}
function dt(r, e) {
  const t = [];
  return r.microflowReturnType.$Type !== "DataTypes$StringType" && t.push({
    elementText: "Tools",
    errorCode: F,
    errorDescription: `Microflow ${e.document.qualifiedName} must return a String.`,
    severity: "error"
  }), Be(r) && t.push({
    elementText: "Tools",
    errorCode: K,
    errorDescription: `Microflow ${e.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
async function lt(r) {
  await r.ui.tabs.open(
    {
      title: Fe,
      icon: y
    },
    {
      uiEntrypoint: Ke,
      componentName: fe
    },
    {
      isSingleton: !0
    }
  );
}
const ut = (r) => ({
  check: async (e) => {
    const t = await mt(r, e), n = await Et(r, e);
    return {
      errors: [...t.errors, ...n.errors],
      dependentElementIds: [...t.dependentElementIds, ...n.dependentElementIds]
    };
  },
  reservedErrorCodes: We
});
async function mt(r, e) {
  const t = [], n = [];
  if (!e.endpoint)
    return t.push({
      errorCode: te,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: t, dependentElementIds: n };
  n.push(e.endpoint.documentId);
  const o = await m(r, e.endpoint);
  return o ? o.excluded ? t.push({
    errorCode: re,
    errorDescription: `The constant ${e.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : E(o) || t.push({
    errorCode: ne,
    errorDescription: `The constant ${e.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : t.push({
    errorCode: oe,
    errorDescription: `The constant ${e.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: t, dependentElementIds: n };
}
async function Et(r, e) {
  const t = [], n = [];
  if (!e.authenticationMicroflow)
    return { errors: t, dependentElementIds: n };
  n.push(e.authenticationMicroflow.documentId);
  const o = await xe(
    r,
    e.authenticationMicroflow
  );
  return o ? o.excluded ? (t.push({
    errorCode: ce,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n }) : (o.objectCollection.objects?.filter((s) => s.$Type === "Microflows$MicroflowParameterObject").length !== 0 && t.push({
    errorCode: ae,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (o.microflowReturnType.$Type !== "DataTypes$ListType" || o.microflowReturnType.entity !== Le.HttpHeader) && t.push({
    errorCode: ie,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n }) : (t.push({
    errorCode: se,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n });
}
const pt = (r) => ({
  check: async (e) => {
    const t = await At(r, e);
    return {
      errors: [...t.errors],
      dependentElementIds: [...t.dependentElementIds]
    };
  },
  reservedErrorCodes: Ze
});
async function At(r, e) {
  const t = [], n = [], o = e.providerFields;
  if (!o.key)
    return t.push({
      errorCode: de,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: t, dependentElementIds: n };
  n.push(o.key.documentId);
  const s = await m(r, o.key);
  return s ? s.excluded ? t.push({
    errorCode: me,
    errorDescription: `The constant ${o.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : E(s) || t.push({
    errorCode: ue,
    errorDescription: `The constant ${o.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : t.push({
    errorCode: le,
    errorDescription: `The constant ${o.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: t, dependentElementIds: n };
}
const ft = (r) => ({
  check: async (e) => {
    let t;
    return e.provider === "MxCloudGenAI" ? t = await Dt(r, e) : e.provider === "Azure" && (t = await yt(r, e)), {
      errors: t ? [...t.errors] : [],
      dependentElementIds: t ? [...t.dependentElementIds] : []
    };
  },
  reservedErrorCodes: [...Je]
});
async function Dt(r, e) {
  const t = [], n = [], o = e.providerFields;
  if (!o.key)
    return t.push({
      errorCode: R,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: t, dependentElementIds: n };
  n.push(o.key.documentId);
  const s = await m(r, o.key);
  return s ? s.excluded ? t.push({
    errorCode: O,
    errorDescription: `The constant ${o.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : E(s) || t.push({
    errorCode: g,
    errorDescription: `The constant ${o.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : t.push({
    errorCode: h,
    errorDescription: `The constant ${o.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: t, dependentElementIds: n };
}
async function yt(r, e) {
  const t = [], n = [], o = e.providerFields;
  if (!o.key)
    t.push({
      errorCode: R,
      errorDescription: "API key is required for an Azure AI model.",
      severity: "error",
      elementText: "API key"
    });
  else {
    n.push(o.key.documentId);
    const s = await m(r, o.key);
    s ? s.excluded ? t.push({
      errorCode: O,
      errorDescription: `The constant ${o.key.qualifiedName} is excluded from the project and cannot be used.`,
      severity: "error",
      elementText: "API key"
    }) : E(s) || t.push({
      errorCode: g,
      errorDescription: `The constant ${o.key.qualifiedName} must be of type string.`,
      severity: "error",
      elementText: "API key"
    }) : t.push({
      errorCode: h,
      errorDescription: `The constant ${o.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error",
      elementText: "API key"
    });
  }
  if (!o.endpoint)
    t.push({
      errorCode: W,
      errorDescription: "Project endpoint is required for an Azure AI model.",
      severity: "error",
      elementText: "Project endpoint"
    });
  else {
    n.push(o.endpoint.documentId);
    const s = await m(r, o.endpoint);
    s ? s.excluded ? t.push({
      errorCode: ee,
      errorDescription: `The constant ${o.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : E(s) || t.push({
      errorCode: $,
      errorDescription: `The constant ${o.endpoint.qualifiedName} must be of type string.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : t.push({
      errorCode: Z,
      errorDescription: `The constant ${o.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error",
      elementText: "Project endpoint"
    });
  }
  return { errors: t, dependentElementIds: n };
}
async function _(r) {
  await r.ui.tabs.open(
    { title: Re, icon: y },
    {
      uiEntrypoint: he,
      componentName: fe
    },
    {
      isSingleton: !0
    }
  );
}
const fe = "extension/agent-editor";
class Tt {
  async loaded(e) {
    const t = Ce(e);
    try {
      if (await t.app.model.customBlobDocuments.registerDocumentType({
        type: C,
        readableTypeName: "Agent",
        defaultContent: qe(),
        consistencyCheckRegistration: et(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Model",
        defaultContent: Ge(),
        consistencyCheckRegistration: ft(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: f,
        readableTypeName: "Consumed MCP service",
        defaultContent: Ue(),
        consistencyCheckRegistration: ut(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: D,
        readableTypeName: "Knowledge base",
        defaultContent: ze(),
        consistencyCheckRegistration: pt(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), e.runMode === "ui") {
        const { createStudioProLogger: n } = await import("./logger-gMbuSAUF.js"), { createAnalyticsService: o } = await import("./analytics-DSd6ibhT.js"), { createDocumentReferenceSyncService: s } = await import("./documentReferenceSync-BGGYXXAz.js"), i = N(e), a = ge(e), d = n(i), l = await Oe(i), De = o(a, l, d), ye = s(i, d);
        je(i, d).registerListeners(), De.registerDocumentCreationListener(i), ye.registerListeners();
        let w = !1;
        i.runtime.controller.addEventListener("connectionChanged", (c) => {
          w = c.isConnected, i.ui.messagePassing.sendMessage({
            type: p.ConnectionChanged,
            isConnected: c.isConnected
          });
        }), i.ui.messagePassing.addMessageHandler(
          async ({ messageId: c, message: Te }) => {
            Te.type === p.GetConnectionState && await i.ui.messagePassing.sendResponse(c, {
              isConnected: w
            });
          }
        ), i.runtime.controller.addEventListener("modelReloaded", async () => {
          try {
            await i.runtime.controller.executePreviewAction(
              Ye.PreviewAgentSync,
              {}
            ), await i.ui.messagePassing.sendMessage({ type: p.SyncSuccessful });
          } catch {
            await i.ui.messagePassing.sendMessage({ type: p.SyncFailed });
          }
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: C,
          editorKind: "tab",
          editorEntryPoint: "agentEdit",
          iconLight: y,
          iconDark: y
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: A,
          editorKind: "tab",
          editorEntryPoint: "modelEdit",
          iconLight: I,
          iconDark: I
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: f,
          editorKind: "tab",
          editorEntryPoint: "consumedMCPServiceEdit",
          iconLight: k,
          iconDark: k
        }), await i.ui.editors.registerEditorForCustomDocument({
          documentType: D,
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
              action: () => _(i)
            },
            {
              caption: u.Compatibility.caption,
              menuId: u.Compatibility.id,
              action: () => lt(i)
            }
          ]
        });
        try {
          const c = await we(i);
          Ne(c, l) && (await _(i), await Ie(i, l));
        } catch (c) {
          d.error("Failed to initialize onboarding:", c);
        }
      }
    } catch (n) {
      if (e.runMode === "ui") {
        const o = N(e), { createStudioProLogger: s } = await import("./logger-gMbuSAUF.js");
        s(o).error("Error during extension initialization:", n), await o.ui.messageBoxes.show(
          "error",
          `Error during extension initialization: ${n.message}`
        );
      }
      throw n;
    }
  }
}
const Lt = new Tt();
export {
  _t as D,
  vt as M,
  Ye as P,
  p as R,
  He as U,
  Bt as V,
  Ee as a,
  y as b,
  Pt as c,
  St as d,
  fe as e,
  Lt as f,
  pe as g,
  xt as h,
  $e as i,
  lt as o
};
