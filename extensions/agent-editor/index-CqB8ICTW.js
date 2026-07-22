import { a as Re, d as N } from "./jsx-runtime-CWOFuNcx.js";
import { d as he, e as ge, o as Oe, g as we, f as I, M as u, r as Ne, s as Ie, h as Me } from "./modelIcons-CLqRGrLL.js";
import { k as M } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { m as k } from "./toolIcons-B55yYne7.js";
import { E as ke, M as b, C as T, b as be } from "./studioPro-BAnarQ8w.js";
import { a as _e, T as Pe, e as ve, f as Se, i as Be, j as xe, g as Le, C as qe } from "./toolUtils-MLHoVQt4.js";
import { i as C, m as A, h as f, k as D, j as Ge, d as Ue, e as ze, g as Fe } from "./documentInitUtils-CvQbsMH5.js";
import { g as v } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { C as Ke, a as Ye } from "./compatibility-B4OgVO3B.js";
import { a as m, i as E } from "./constantUtils-D0RXxXWn.js";
import { P as _ } from "./model-CWYqe9DA.js";
const vt = 300, p = {
  ConnectionChanged: "ae_connectionChanged",
  GetConnectionState: "ae_getConnectionState",
  SyncSuccessful: "ae_syncSuccessful",
  SyncFailed: "ae_syncFailed"
}, Ve = {
  PreviewAgentSync: "preview_agent_sync",
  PreviewAgentTest: "preview_agent_test"
}, y = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", St = "data:image/png;base64,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";
class Xe {
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
          ke
        ), o.document.contents.tools)
          for (const s of o.document.contents.tools) {
            const i = s.toolType === _e.Microflow ? b : f;
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
    const s = je(t, n, o);
    s && this.renameDependency(t, s, e.$ID, e.contents);
  }
  /**
   * Updates a dependency's qualified name and saves the document.
   */
  renameDependency(e, t, n, o) {
    e.qualifiedName = t, this.studioPro.app.model.customBlobDocuments.updateDocumentContent(n, o);
  }
}
function je(r, e, t) {
  const n = e.find((s) => s.documentType === be);
  if (n) {
    const [s, i] = r.qualifiedName.split(".");
    if (n.oldName.qualifiedName === s)
      return `${n.newName.qualifiedName}.${i}`;
  }
  return e.find((s) => s.oldName.qualifiedName !== r.qualifiedName ? !1 : t ? s.documentType === t : !0)?.newName.qualifiedName;
}
function He(r, e) {
  return new Xe(r, e);
}
const Qe = {
  Chat: "Chat",
  Task: "Task"
}, Bt = {
  Agent: "agent",
  User: "user",
  Error: "error"
}, xt = {
  Disabled: "Disabled",
  Enabled: "Enabled",
  SyncNeeded: "SyncNeeded",
  SyncFailed: "SyncFailed",
  SyncSuccessful: "SyncSuccessful"
}, Lt = {
  Build: "Build",
  Playground: "Playground"
}, S = "AE001", B = "AE002", x = "AE003", L = "AE004", q = "AE005", G = "AE006", U = "AE007", z = "AE008", F = "AE009", K = "AE010", Y = "AE011", V = "AE012", X = "AE013", j = "AE014", H = "AE015", Q = "AE016", J = "AE017", W = "AE018", Je = [
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
  J,
  W
], R = "AE101", h = "AE102", g = "AE103", O = "AE104", Z = "AE105", $ = "AE106", ee = "AE107", te = "AE108", We = [
  R,
  h,
  g,
  O,
  Z,
  $,
  ee,
  te
], oe = "AE201", ne = "AE202", re = "AE203", se = "AE204", ie = "AE205", ae = "AE206", ce = "AE207", de = "AE208", Ze = [
  oe,
  ne,
  re,
  se,
  ie,
  ae,
  ce,
  de
], le = "AE301", ue = "AE302", me = "AE303", Ee = "AE304", $e = [
  le,
  ue,
  me,
  Ee
], pe = async (r, e) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.attributes.map((o) => o.name);
  const t = await fe(r, e);
  if (!t)
    return e.attributes.map((o) => o.name);
  const n = await pe(r, t);
  return e.attributes.map((o) => o.name).concat(n);
}, et = async (r, e) => {
  if (r.generalization.$Type === "DomainModels$NoGeneralization")
    return r.generalization.persistable;
  const t = await fe(e, r);
  if (t)
    return et(t, e);
}, Ae = async (r, e) => {
  const [t, n] = e.split(".");
  return !t || !n ? void 0 : (await r.app.model.domainModels.getDomainModel(t))?.entities.find((s) => s.name === n);
}, fe = (r, e) => {
  const t = e.generalization;
  return Ae(r, t.generalization);
}, qt = async (r, e) => {
  e.qualifiedName && await r.ui.editors.editDocument(
    { sdkType: "DomainModels$DomainModel", qualifiedName: e.qualifiedName.split(".")[0] },
    { id: e.documentId }
  );
}, tt = (r) => ({
  check: async (e) => {
    const t = await ot(r, e), n = nt(e), o = await rt(r, e), s = st(e), i = it(e), a = at(e), d = await ct(r, e), l = await dt(r, e);
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
  reservedErrorCodes: Je
});
async function ot(r, e) {
  const t = [], n = [];
  if (!e.model)
    return t.push({
      elementText: "Model resource",
      errorCode: S,
      errorDescription: "Model resource is required for an agent.",
      severity: "error"
    }), { errors: t, dependentElementIds: n };
  n.push(e.model.documentId);
  const o = await v(r, e.model);
  return o ? o.excluded && t.push({
    elementText: "Model resource",
    errorCode: x,
    errorDescription: `Model ${e.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : t.push({
    elementText: "Model resource",
    errorCode: B,
    errorDescription: `Model ${e.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: t, dependentElementIds: n };
}
const nt = (r) => {
  const e = [];
  return r.model && !r.selectedModel && e.push({
    elementText: "Model version",
    errorCode: W,
    errorDescription: "Model version is required for an agent",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
};
async function rt(r, e) {
  const t = [], n = [];
  if (!e.entity)
    return e.variables.length > 0 && t.push({
      elementText: "Context entity",
      errorCode: q,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: t, dependentElementIds: [] };
  n.push(e.entity.documentId);
  const o = await Ae(r, e.entity.qualifiedName);
  if (!o)
    return t.push({
      elementText: "Context entity",
      errorCode: G,
      errorDescription: `Context entity ${e.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error"
    }), { errors: t, dependentElementIds: n };
  const s = await pe(r, o), i = e.variables.filter((a) => !s.includes(a.key)).map((a) => a.key);
  return i.length > 0 && t.push({
    elementText: "Context entity",
    errorCode: U,
    errorDescription: `Variable${i.length > 1 ? "s" : ""} ${i.join(", ")} could not be found in context entity ${e.entity.qualifiedName}.`,
    severity: "warning"
  }), { errors: t, dependentElementIds: n };
}
function st(r) {
  const e = [];
  return r.usageType === Qe.Task && !r.userPrompt && e.push({
    elementText: "User prompt",
    errorCode: L,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function it(r) {
  const e = [];
  return r.usageType || e.push({
    elementText: "Agent type",
    errorCode: J,
    errorDescription: "Agent type is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function at(r) {
  const e = [];
  if (r.toolChoice !== Pe.Tool)
    return { errors: e, dependentElementIds: [] };
  if (!r.toolChoiceToolName)
    e.push({
      elementText: "Tool choice",
      errorCode: j,
      errorDescription: "A specific tool must be selected when tool choice is set to 'Tool'.",
      severity: "error"
    });
  else {
    const t = r.tools.find((n) => n.name === r.toolChoiceToolName);
    t ? t.enabled || e.push({
      elementText: "Tool choice",
      errorCode: Q,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not active. Please activate it, or select a different tool.`,
      severity: "error"
    }) : e.push({
      elementText: "Tool choice",
      errorCode: H,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not in the agent's tools list. Please update your tool selection or change the tool choice.`,
      severity: "error"
    });
  }
  return { errors: e, dependentElementIds: [] };
}
async function ct(r, e) {
  const t = [], n = [];
  for (const o of e.tools) {
    if (!o.enabled)
      continue;
    n.push(o.document.documentId);
    const s = await ve(r, o.toolType, o.document), i = Se(o.toolType);
    if (!s)
      t.push({
        elementText: "Tools",
        errorCode: z,
        errorDescription: `${i} ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      t.push({
        elementText: "Tools",
        errorCode: F,
        errorDescription: `${i} ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Be(s)) {
      const { errors: a } = lt(s, o);
      t.push(...a);
    }
  }
  return { errors: t, dependentElementIds: n };
}
async function dt(r, e) {
  const t = [], n = [];
  if (e.knowledgebaseTools)
    for (const o of e.knowledgebaseTools) {
      if (!o.enabled)
        continue;
      n.push(o.document.documentId);
      const s = await v(r, o.document);
      s ? s.excluded && t.push({
        elementText: "Knowledge bases",
        errorCode: X,
        errorDescription: `Knowledge base ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : t.push({
        elementText: "Knowledge bases",
        errorCode: V,
        errorDescription: `Knowledge base ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: t, dependentElementIds: n };
}
function lt(r, e) {
  const t = [];
  return r.microflowReturnType.$Type !== "DataTypes$StringType" && t.push({
    elementText: "Tools",
    errorCode: K,
    errorDescription: `Microflow ${e.document.qualifiedName} must return a String.`,
    severity: "error"
  }), xe(r) && t.push({
    elementText: "Tools",
    errorCode: Y,
    errorDescription: `Microflow ${e.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
async function ut(r) {
  await r.ui.tabs.open(
    {
      title: Ke,
      icon: y
    },
    {
      uiEntrypoint: Ye,
      componentName: De
    },
    {
      isSingleton: !0
    }
  );
}
const mt = (r) => ({
  check: async (e) => {
    const t = await Et(r, e), n = await pt(r, e);
    return {
      errors: [...t.errors, ...n.errors],
      dependentElementIds: [...t.dependentElementIds, ...n.dependentElementIds]
    };
  },
  reservedErrorCodes: Ze
});
async function Et(r, e) {
  const t = [], n = [];
  if (!e.endpoint)
    return t.push({
      errorCode: oe,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: t, dependentElementIds: n };
  n.push(e.endpoint.documentId);
  const o = await m(r, e.endpoint);
  return o ? o.excluded ? t.push({
    errorCode: se,
    errorDescription: `The constant ${e.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : E(o) || t.push({
    errorCode: re,
    errorDescription: `The constant ${e.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : t.push({
    errorCode: ne,
    errorDescription: `The constant ${e.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: t, dependentElementIds: n };
}
async function pt(r, e) {
  const t = [], n = [];
  if (!e.authenticationMicroflow)
    return { errors: t, dependentElementIds: n };
  n.push(e.authenticationMicroflow.documentId);
  const o = await Le(
    r,
    e.authenticationMicroflow
  );
  return o ? o.excluded ? (t.push({
    errorCode: de,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n }) : (o.objectCollection.objects?.filter((s) => s.$Type === "Microflows$MicroflowParameterObject").length !== 0 && t.push({
    errorCode: ce,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (o.microflowReturnType.$Type !== "DataTypes$ListType" || o.microflowReturnType.entity !== qe.HttpHeader) && t.push({
    errorCode: ae,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n }) : (t.push({
    errorCode: ie,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: t, dependentElementIds: n });
}
const At = (r) => ({
  check: async (e) => {
    const t = await ft(r, e);
    return {
      errors: [...t.errors],
      dependentElementIds: [...t.dependentElementIds]
    };
  },
  reservedErrorCodes: $e
});
async function ft(r, e) {
  const t = [], n = [], o = e.providerFields;
  if (!o.key)
    return t.push({
      errorCode: le,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: t, dependentElementIds: n };
  n.push(o.key.documentId);
  const s = await m(r, o.key);
  return s ? s.excluded ? t.push({
    errorCode: Ee,
    errorDescription: `The constant ${o.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : E(s) || t.push({
    errorCode: me,
    errorDescription: `The constant ${o.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : t.push({
    errorCode: ue,
    errorDescription: `The constant ${o.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: t, dependentElementIds: n };
}
const Dt = (r) => ({
  check: async (e) => {
    let t;
    return e.provider === _.MxCloudGenAI ? t = await yt(r, e) : e.provider === _.Azure && (t = await Tt(r, e)), {
      errors: t ? [...t.errors] : [],
      dependentElementIds: t ? [...t.dependentElementIds] : []
    };
  },
  reservedErrorCodes: [...We]
});
async function yt(r, e) {
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
async function Tt(r, e) {
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
      errorCode: Z,
      errorDescription: "Project endpoint is required for an Azure AI model.",
      severity: "error",
      elementText: "Project endpoint"
    });
  else {
    n.push(o.endpoint.documentId);
    const s = await m(r, o.endpoint);
    s ? s.excluded ? t.push({
      errorCode: te,
      errorDescription: `The constant ${o.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : E(s) || t.push({
      errorCode: ee,
      errorDescription: `The constant ${o.endpoint.qualifiedName} must be of type string.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : t.push({
      errorCode: $,
      errorDescription: `The constant ${o.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error",
      elementText: "Project endpoint"
    });
  }
  return { errors: t, dependentElementIds: n };
}
async function P(r) {
  await r.ui.tabs.open(
    { title: he, icon: y },
    {
      uiEntrypoint: ge,
      componentName: De
    },
    {
      isSingleton: !0
    }
  );
}
const De = "extension/agent-editor";
class Ct {
  async loaded(e) {
    const t = Re(e);
    try {
      if (await t.app.model.customBlobDocuments.registerDocumentType({
        type: C,
        readableTypeName: "Agent",
        defaultContent: Ge(),
        consistencyCheckRegistration: tt(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Model",
        defaultContent: Ue(),
        consistencyCheckRegistration: Dt(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: f,
        readableTypeName: "Consumed MCP service",
        defaultContent: ze(),
        consistencyCheckRegistration: mt(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: D,
        readableTypeName: "Knowledge base",
        defaultContent: Fe(),
        consistencyCheckRegistration: At(t),
        serializationCallback: async (n) => JSON.stringify(n, null, 2)
      }), e.runMode === "ui") {
        const { createStudioProLogger: n } = await import("./logger-gMbuSAUF.js"), { createAnalyticsService: o } = await import("./analytics-VEPp27kp.js"), { createDocumentReferenceSyncService: s } = await import("./documentReferenceSync-CFWcVZTf.js"), i = N(e), a = Oe(e), d = n(i), l = await we(i), ye = o(a, l, d), Te = s(i, d);
        He(i, d).registerListeners(), ye.registerDocumentCreationListener(i), Te.registerListeners();
        let w = !1;
        i.runtime.controller.addEventListener("connectionChanged", (c) => {
          w = c.isConnected, i.ui.messagePassing.sendMessage({
            type: p.ConnectionChanged,
            isConnected: c.isConnected
          });
        }), i.ui.messagePassing.addMessageHandler(
          async ({ messageId: c, message: Ce }) => {
            Ce.type === p.GetConnectionState && await i.ui.messagePassing.sendResponse(c, {
              isConnected: w
            });
          }
        ), i.runtime.controller.addEventListener("modelReloaded", async () => {
          try {
            await i.runtime.controller.executePreviewAction(
              Ve.PreviewAgentSync,
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
              action: () => P(i)
            },
            {
              caption: u.Compatibility.caption,
              menuId: u.Compatibility.id,
              action: () => ut(i)
            }
          ]
        });
        try {
          const c = await Ne(i);
          Ie(c, l) && (await P(i), await Me(i, l));
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
const Gt = new Ct();
export {
  vt as D,
  Bt as M,
  Ve as P,
  p as R,
  Qe as U,
  Lt as V,
  pe as a,
  y as b,
  St as c,
  xt as d,
  De as e,
  Gt as f,
  Ae as g,
  qt as h,
  et as i,
  ut as o
};
