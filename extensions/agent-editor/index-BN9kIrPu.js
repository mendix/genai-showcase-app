import { a as Ne, d as _ } from "./jsx-runtime-CWOFuNcx.js";
import { a as Me, b as ke, o as be, g as _e, M as u, r as Pe, s as xe, m as Se } from "./settings-Bgs47ll9.js";
import { k as P } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { n as g, m as D, k as y, l as C, K as L, o as ve, e as Be, f as Le, h as Ge, a as x } from "./documentInitUtils-DoIciLyT.js";
import { m as S } from "./toolIcons-B55yYne7.js";
import { E as qe, M as v, C as p, b as Ue } from "./studioPro-BAnarQ8w.js";
import { b as ze, T as Fe, f as Ke, i as Ye, j as Ve, k as Xe, g as je, C as He } from "./toolUtils-6Ez2eFCF.js";
import { M as m } from "./model-BfOPpq4a.js";
import { g as G } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { C as Qe, a as Je, i as O } from "./compatibilityUtils-R3Pg1ddN.js";
import { a as E, i as A } from "./constantUtils-D0RXxXWn.js";
const qt = 300, f = {
  ConnectionChanged: "ae_connectionChanged",
  GetConnectionState: "ae_getConnectionState",
  SyncSuccessful: "ae_syncSuccessful",
  SyncFailed: "ae_syncFailed"
}, We = {
  PreviewAgentSync: "preview_agent_sync",
  PreviewAgentTest: "preview_agent_test"
}, T = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", Ut = "data:image/png;base64,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";
class Ze {
  studioPro;
  logger;
  constructor(e, n) {
    this.studioPro = e, this.logger = n;
  }
  registerListeners() {
    this.studioPro.app.projectChanges.addEventListener("elementsRenamed", async ({ elements: e }) => {
      try {
        await this.updateAgentDependencies(e), await this.updateModelDependencies(e), await this.updateConsumedMCPServiceDependencies(e), await this.updateKnowledgeBaseDependencies(e);
      } catch (n) {
        this.logger?.error("Failed to handle elementsRenamed event", { error: n });
      }
    });
  }
  /**
   * Updates dependencies in all agent documents (model, entity, and tool references).
   */
  async updateAgentDependencies(e) {
    const n = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(g);
    for (const t of n) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(t.id);
      if ("document" in o && o.document) {
        if (o.document.contents.model && this.checkAndRenameDependency(o.document, o.document.contents.model, e, D), o.document.contents.entity && this.checkAndRenameDependency(
          o.document,
          o.document.contents.entity,
          e,
          qe
        ), o.document.contents.tools)
          for (const i of o.document.contents.tools) {
            const s = i.toolType === ze.Microflow ? v : y;
            this.checkAndRenameDependency(o.document, i.document, e, s);
          }
        if (o.document.contents.knowledgebaseTools)
          for (const i of o.document.contents.knowledgebaseTools)
            this.checkAndRenameDependency(
              o.document,
              i.document,
              e,
              C
            );
      }
    }
  }
  /**
   * Updates references in model documents.
   */
  async updateModelDependencies(e) {
    const n = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(D);
    for (const t of n) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(t.id);
      if ("document" in o && o.document) {
        if (o.document.contents.provider === m.MxCloudGenAI) {
          const i = o.document.contents.providerFields;
          i.key && this.checkAndRenameDependency(o.document, i.key, e, p);
        }
        if (o.document.contents.provider === m.Azure) {
          const i = o.document.contents.providerFields;
          i.key && this.checkAndRenameDependency(o.document, i.key, e, p), i.endpoint && this.checkAndRenameDependency(
            o.document,
            i.endpoint,
            e,
            p
          );
        }
      }
    }
  }
  /**
   * Updates references in knowledgebase documents.
   */
  async updateKnowledgeBaseDependencies(e) {
    const n = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(C);
    for (const t of n) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(t.id);
      if ("document" in o && o.document && o.document.contents.provider === L.MxCloudGenAI) {
        const i = o.document.contents.providerFields;
        if (!i.key)
          continue;
        this.checkAndRenameDependency(o.document, i.key, e, p);
      }
    }
  }
  /**
   * Updates endpoint references in consumed MCP service documents.
   */
  async updateConsumedMCPServiceDependencies(e) {
    const n = await this.studioPro.app.model.customBlobDocuments.getDocumentsOfType(
      y
    );
    for (const t of n) {
      const o = await this.studioPro.app.model.customBlobDocuments.getDocumentById(t.id);
      "document" in o && o.document && (o.document.contents.endpoint && this.checkAndRenameDependency(
        o.document,
        o.document.contents.endpoint,
        e,
        p
      ), o.document.contents.authenticationMicroflow && this.checkAndRenameDependency(
        o.document,
        o.document.contents.authenticationMicroflow,
        e,
        v
      ));
    }
  }
  /**
   * Checks if a model document dependency was renamed and updates it if necessary.
   */
  checkAndRenameDependency(e, n, t, o) {
    const i = $e(n, t, o);
    i && this.renameDependency(n, i, e.$ID, e.contents);
  }
  /**
   * Updates a dependency's qualified name and saves the document.
   */
  renameDependency(e, n, t, o) {
    e.qualifiedName = n, this.studioPro.app.model.customBlobDocuments.updateDocumentContent(t, o);
  }
}
function $e(r, e, n) {
  const t = e.find((i) => i.documentType === Ue);
  if (t) {
    const [i, s] = r.qualifiedName.split(".");
    if (t.oldName.qualifiedName === i)
      return `${t.newName.qualifiedName}.${s}`;
  }
  return e.find((i) => i.oldName.qualifiedName !== r.qualifiedName ? !1 : n ? i.documentType === n : !0)?.newName.qualifiedName;
}
function et(r, e) {
  return new Ze(r, e);
}
const tt = {
  Chat: "Chat",
  Task: "Task"
}, zt = {
  Agent: "agent",
  User: "user",
  Error: "error"
}, Ft = {
  Disabled: "Disabled",
  Enabled: "Enabled",
  SyncNeeded: "SyncNeeded",
  SyncFailed: "SyncFailed",
  SyncSuccessful: "SyncSuccessful"
}, Kt = {
  Build: "Build",
  Playground: "Playground"
}, q = "AE001", U = "AE002", z = "AE003", F = "AE004", K = "AE005", Y = "AE006", V = "AE007", X = "AE008", j = "AE009", H = "AE010", Q = "AE011", J = "AE012", W = "AE013", Z = "AE014", $ = "AE015", ee = "AE016", te = "AE017", oe = "AE018", ot = [
  q,
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
  W,
  Z,
  $,
  ee,
  te,
  oe
], h = "AE101", I = "AE102", w = "AE103", N = "AE104", ne = "AE105", re = "AE106", se = "AE107", ie = "AE108", M = "AE109", nt = [
  h,
  I,
  w,
  N,
  ne,
  re,
  se,
  ie,
  M
], ae = "AE201", ce = "AE202", de = "AE203", le = "AE204", ue = "AE205", me = "AE206", pe = "AE207", Ee = "AE208", rt = [
  ae,
  ce,
  de,
  le,
  ue,
  me,
  pe,
  Ee
], Ae = "AE301", fe = "AE302", De = "AE303", ye = "AE304", Ce = "AE305", st = [
  Ae,
  fe,
  De,
  ye,
  Ce
], Te = async (r, e) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.attributes.map((o) => o.name);
  const n = await ge(r, e);
  if (!n)
    return e.attributes.map((o) => o.name);
  const t = await Te(r, n);
  return e.attributes.map((o) => o.name).concat(t);
}, it = async (r, e) => {
  if (r.generalization.$Type === "DomainModels$NoGeneralization")
    return r.generalization.persistable;
  const n = await ge(e, r);
  if (n)
    return it(n, e);
}, Re = async (r, e) => {
  const [n, t] = e.split(".");
  return !n || !t ? void 0 : (await r.app.model.domainModels.getDomainModel(n))?.entities.find((i) => i.name === t);
}, ge = (r, e) => {
  const n = e.generalization;
  return Re(r, n.generalization);
}, Yt = async (r, e) => {
  e.qualifiedName && await r.ui.editors.editDocument(
    { sdkType: "DomainModels$DomainModel", qualifiedName: e.qualifiedName.split(".")[0] },
    { id: e.documentId }
  );
}, at = (r) => ({
  check: async (e) => {
    const n = await ct(r, e), t = await lt(r, e), o = ut(e), i = mt(e), s = pt(e), a = await Et(r, e), l = await At(r, e);
    return {
      errors: [
        ...n.errors,
        ...t.errors,
        ...o.errors,
        ...i.errors,
        ...s.errors,
        ...a.errors,
        ...l.errors
      ],
      dependentElementIds: [
        ...n.dependentElementIds,
        ...t.dependentElementIds,
        ...o.dependentElementIds,
        ...s.dependentElementIds,
        ...a.dependentElementIds,
        ...l.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: ot
});
async function ct(r, e) {
  const n = [], t = [];
  if (!e.model)
    return n.push({
      elementText: "Model resource",
      errorCode: q,
      errorDescription: "Model resource is required for an agent.",
      severity: "error"
    }), { errors: n, dependentElementIds: t };
  t.push(e.model.documentId);
  const o = await G(r, e.model);
  o ? o.excluded && n.push({
    elementText: "Model resource",
    errorCode: z,
    errorDescription: `Model ${e.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : n.push({
    elementText: "Model resource",
    errorCode: U,
    errorDescription: `Model ${e.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  });
  const i = dt(e, o?.contents?.provider);
  return {
    errors: [...n, ...i.errors],
    dependentElementIds: [...t, ...i.dependentElementIds]
  };
}
const dt = (r, e) => {
  const n = [];
  let t;
  switch (e) {
    case m.Azure:
      t = "Model deployment";
      break;
    case m.MxCloudGenAI:
      t = "Model version";
      break;
  }
  return r.model && !r.selectedModel && t && n.push({
    elementText: t,
    errorCode: oe,
    errorDescription: `${t} is required for an agent`,
    severity: "error"
  }), { errors: n, dependentElementIds: [] };
};
async function lt(r, e) {
  const n = [], t = [];
  if (!e.entity)
    return e.variables.length > 0 && n.push({
      elementText: "Context entity",
      errorCode: K,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: n, dependentElementIds: [] };
  t.push(e.entity.documentId);
  const o = await Re(r, e.entity.qualifiedName);
  if (!o)
    return n.push({
      elementText: "Context entity",
      errorCode: Y,
      errorDescription: `Context entity ${e.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error"
    }), { errors: n, dependentElementIds: t };
  const i = await Te(r, o), s = e.variables.filter((a) => !i.includes(a.key)).map((a) => a.key);
  return s.length > 0 && n.push({
    elementText: "Context entity",
    errorCode: V,
    errorDescription: `Variable${s.length > 1 ? "s" : ""} ${s.join(", ")} could not be found in context entity ${e.entity.qualifiedName}.`,
    severity: "warning"
  }), { errors: n, dependentElementIds: t };
}
function ut(r) {
  const e = [];
  return r.usageType === tt.Task && !r.userPrompt && e.push({
    elementText: "User prompt",
    errorCode: F,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function mt(r) {
  const e = [];
  return r.usageType || e.push({
    elementText: "Agent type",
    errorCode: te,
    errorDescription: "Agent type is required for an agent.",
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
function pt(r) {
  const e = [];
  if (r.toolChoice !== Fe.Tool)
    return { errors: e, dependentElementIds: [] };
  if (!r.toolChoiceToolName)
    e.push({
      elementText: "Tool choice",
      errorCode: Z,
      errorDescription: "A specific tool must be selected when tool choice is set to 'Tool'.",
      severity: "error"
    });
  else {
    const n = r.tools.find((t) => t.name === r.toolChoiceToolName);
    n ? n.enabled || e.push({
      elementText: "Tool choice",
      errorCode: ee,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not active. Please activate it, or select a different tool.`,
      severity: "error"
    }) : e.push({
      elementText: "Tool choice",
      errorCode: $,
      errorDescription: `Tool '${r.toolChoiceToolName}' is not in the agent's tools list. Please update your tool selection or change the tool choice.`,
      severity: "error"
    });
  }
  return { errors: e, dependentElementIds: [] };
}
async function Et(r, e) {
  const n = [], t = [];
  for (const o of e.tools) {
    if (!o.enabled)
      continue;
    t.push(o.document.documentId);
    const i = await Ke(r, o.toolType, o.document), s = Ye(o.toolType);
    if (!i)
      n.push({
        elementText: "Tools",
        errorCode: X,
        errorDescription: `${s} ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (i.excluded)
      n.push({
        elementText: "Tools",
        errorCode: j,
        errorDescription: `${s} ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Ve(i)) {
      const { errors: a } = ft(i, o);
      n.push(...a);
    }
  }
  return { errors: n, dependentElementIds: t };
}
async function At(r, e) {
  const n = [], t = [];
  if (e.knowledgebaseTools)
    for (const o of e.knowledgebaseTools) {
      if (!o.enabled)
        continue;
      t.push(o.document.documentId);
      const i = await G(r, o.document);
      i ? i.excluded && n.push({
        elementText: "Knowledge bases",
        errorCode: W,
        errorDescription: `Knowledge base ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : n.push({
        elementText: "Knowledge bases",
        errorCode: J,
        errorDescription: `Knowledge base ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: n, dependentElementIds: t };
}
function ft(r, e) {
  const n = [];
  return r.microflowReturnType.$Type !== "DataTypes$StringType" && n.push({
    elementText: "Tools",
    errorCode: H,
    errorDescription: `Microflow ${e.document.qualifiedName} must return a String.`,
    severity: "error"
  }), Xe(r) && n.push({
    elementText: "Tools",
    errorCode: Q,
    errorDescription: `Microflow ${e.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: n, dependentElementIds: [] };
}
async function Dt(r) {
  await r.ui.tabs.open(
    {
      title: Qe,
      icon: T
    },
    {
      uiEntrypoint: Je,
      componentName: Oe
    },
    {
      isSingleton: !0
    }
  );
}
const yt = (r) => ({
  check: async (e) => {
    const n = await Ct(r, e), t = await Tt(r, e);
    return {
      errors: [...n.errors, ...t.errors],
      dependentElementIds: [...n.dependentElementIds, ...t.dependentElementIds]
    };
  },
  reservedErrorCodes: rt
});
async function Ct(r, e) {
  const n = [], t = [];
  if (!e.endpoint)
    return n.push({
      errorCode: ae,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: n, dependentElementIds: t };
  t.push(e.endpoint.documentId);
  const o = await E(r, e.endpoint);
  return o ? o.excluded ? n.push({
    errorCode: le,
    errorDescription: `The constant ${e.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : A(o) || n.push({
    errorCode: de,
    errorDescription: `The constant ${e.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : n.push({
    errorCode: ce,
    errorDescription: `The constant ${e.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: n, dependentElementIds: t };
}
async function Tt(r, e) {
  const n = [], t = [];
  if (!e.authenticationMicroflow)
    return { errors: n, dependentElementIds: t };
  t.push(e.authenticationMicroflow.documentId);
  const o = await je(
    r,
    e.authenticationMicroflow
  );
  return o ? o.excluded ? (n.push({
    errorCode: Ee,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: n, dependentElementIds: t }) : (o.objectCollection.objects?.filter((i) => i.$Type === "Microflows$MicroflowParameterObject").length !== 0 && n.push({
    errorCode: pe,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (o.microflowReturnType.$Type !== "DataTypes$ListType" || o.microflowReturnType.entity !== He.HttpHeader) && n.push({
    errorCode: me,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: n, dependentElementIds: t }) : (n.push({
    errorCode: ue,
    errorDescription: `Microflow ${e.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: n, dependentElementIds: t });
}
const d = {
  OpenAI: "OpenAIConnector",
  MxGenAI: "MxGenAIConnector"
}, k = {
  [d.OpenAI]: {
    name: "OpenAI Connector",
    appStorePackageIdString: "220472"
  },
  [d.MxGenAI]: {
    name: "Mendix Cloud GenAI Connector",
    appStorePackageIdString: "239449"
  }
}, Rt = (r) => ({
  check: async (e) => {
    const n = await r.app.model.modules.getModules();
    let t = { errors: [], dependentElementIds: [] };
    return e.provider === L.MxCloudGenAI && (t = await gt(r, e, n)), t;
  },
  reservedErrorCodes: st
});
async function gt(r, e, n) {
  const t = [], o = [];
  if (!O(
    n,
    k[d.MxGenAI].appStorePackageIdString,
    d.MxGenAI
  ))
    return t.push({
      errorCode: Ce,
      errorDescription: "MxGenAIConnector module is required but not installed.",
      severity: "error",
      elementText: "MxGenAIConnector"
    }), { errors: t, dependentElementIds: o };
  const s = e.providerFields;
  if (!s.key)
    return t.push({
      errorCode: Ae,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: t, dependentElementIds: o };
  o.push(s.key.documentId);
  const a = await E(r, s.key);
  return a ? a.excluded ? t.push({
    errorCode: ye,
    errorDescription: `The constant ${s.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : A(a) || t.push({
    errorCode: De,
    errorDescription: `The constant ${s.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : t.push({
    errorCode: fe,
    errorDescription: `The constant ${s.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: t, dependentElementIds: o };
}
const Ot = (r) => ({
  check: async (e) => {
    const n = await r.app.model.modules.getModules();
    let t = { errors: [], dependentElementIds: [] };
    return e.provider === m.MxCloudGenAI ? t = await ht(r, e, n) : e.provider === m.Azure && (t = await It(r, e, n)), t;
  },
  reservedErrorCodes: [...nt]
});
async function ht(r, e, n) {
  const t = [], o = [];
  if (!O(
    n,
    k[d.MxGenAI].appStorePackageIdString,
    d.MxGenAI
  ))
    return t.push({
      errorCode: M,
      errorDescription: "MxGenAIConnector module is required but not installed.",
      severity: "error",
      elementText: "MxGenAIConnector"
    }), { errors: t, dependentElementIds: o };
  const s = e.providerFields;
  if (!s.key)
    return t.push({
      errorCode: h,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: t, dependentElementIds: o };
  o.push(s.key.documentId);
  const a = await E(r, s.key);
  return a ? a.excluded ? t.push({
    errorCode: N,
    errorDescription: `The constant ${s.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : A(a) || t.push({
    errorCode: w,
    errorDescription: `The constant ${s.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : t.push({
    errorCode: I,
    errorDescription: `The constant ${s.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: t, dependentElementIds: o };
}
async function It(r, e, n) {
  const t = [], o = [];
  if (!O(
    n,
    k[d.OpenAI].appStorePackageIdString,
    d.OpenAI
  ))
    return t.push({
      errorCode: M,
      errorDescription: "OpenAIConnector module is required but not installed.",
      severity: "error",
      elementText: "OpenAIConnector"
    }), { errors: t, dependentElementIds: o };
  const s = e.providerFields;
  if (!s.key)
    t.push({
      errorCode: h,
      errorDescription: "API key is required for an Azure AI model.",
      severity: "error",
      elementText: "API key"
    });
  else {
    o.push(s.key.documentId);
    const a = await E(r, s.key);
    a ? a.excluded ? t.push({
      errorCode: N,
      errorDescription: `The constant ${s.key.qualifiedName} is excluded from the project and cannot be used.`,
      severity: "error",
      elementText: "API key"
    }) : A(a) || t.push({
      errorCode: w,
      errorDescription: `The constant ${s.key.qualifiedName} must be of type string.`,
      severity: "error",
      elementText: "API key"
    }) : t.push({
      errorCode: I,
      errorDescription: `The constant ${s.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error",
      elementText: "API key"
    });
  }
  if (!s.endpoint)
    t.push({
      errorCode: ne,
      errorDescription: "Project endpoint is required for an Azure AI model.",
      severity: "error",
      elementText: "Project endpoint"
    });
  else {
    o.push(s.endpoint.documentId);
    const a = await E(r, s.endpoint);
    a ? a.excluded ? t.push({
      errorCode: ie,
      errorDescription: `The constant ${s.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : A(a) || t.push({
      errorCode: se,
      errorDescription: `The constant ${s.endpoint.qualifiedName} must be of type string.`,
      severity: "error",
      elementText: "Project endpoint"
    }) : t.push({
      errorCode: re,
      errorDescription: `The constant ${s.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error",
      elementText: "Project endpoint"
    });
  }
  return { errors: t, dependentElementIds: o };
}
async function B(r) {
  await r.ui.tabs.open(
    { title: Me, icon: T },
    {
      uiEntrypoint: ke,
      componentName: Oe
    },
    {
      isSingleton: !0
    }
  );
}
const Oe = "extension/agent-editor";
class wt {
  async loaded(e) {
    const n = Ne(e);
    try {
      if (await n.app.model.customBlobDocuments.registerDocumentType({
        type: g,
        readableTypeName: "Agent",
        defaultContent: ve(),
        consistencyCheckRegistration: at(n),
        serializationCallback: async (t) => JSON.stringify(t, null, 2)
      }), await n.app.model.customBlobDocuments.registerDocumentType({
        type: D,
        readableTypeName: "Model",
        defaultContent: Be(),
        consistencyCheckRegistration: Ot(n),
        serializationCallback: async (t) => JSON.stringify(t, null, 2)
      }), await n.app.model.customBlobDocuments.registerDocumentType({
        type: y,
        readableTypeName: "Consumed MCP service",
        defaultContent: Le(),
        consistencyCheckRegistration: yt(n),
        serializationCallback: async (t) => JSON.stringify(t, null, 2)
      }), await n.app.model.customBlobDocuments.registerDocumentType({
        type: C,
        readableTypeName: "Knowledge base",
        defaultContent: Ge(),
        consistencyCheckRegistration: Rt(n),
        serializationCallback: async (t) => JSON.stringify(t, null, 2)
      }), e.runMode === "ui") {
        const { createStudioProLogger: t } = await import("./logger-gMbuSAUF.js"), { createAnalyticsService: o } = await import("./analytics-Bu9vEdQD.js"), { createDocumentReferenceSyncService: i } = await import("./documentReferenceSync-DrCzItp0.js"), s = _(e), a = be(e), l = t(s), R = await _e(s), he = o(a, R, l), Ie = i(s, l);
        et(s, l).registerListeners(), he.registerDocumentCreationListener(s), Ie.registerListeners();
        let b = !1;
        s.runtime.controller.addEventListener("connectionChanged", (c) => {
          b = c.isConnected, s.ui.messagePassing.sendMessage({
            type: f.ConnectionChanged,
            isConnected: c.isConnected
          });
        }), s.ui.messagePassing.addMessageHandler(
          async ({ messageId: c, message: we }) => {
            we.type === f.GetConnectionState && await s.ui.messagePassing.sendResponse(c, {
              isConnected: b
            });
          }
        ), s.runtime.controller.addEventListener("modelReloaded", async () => {
          try {
            await s.runtime.controller.executePreviewAction(
              We.PreviewAgentSync,
              {}
            ), await s.ui.messagePassing.sendMessage({ type: f.SyncSuccessful });
          } catch {
            await s.ui.messagePassing.sendMessage({ type: f.SyncFailed });
          }
        }), await s.ui.editors.registerEditorForCustomDocument({
          documentType: g,
          editorKind: "tab",
          editorEntryPoint: "agentEdit",
          iconLight: T,
          iconDark: T
        }), await s.ui.editors.registerEditorForCustomDocument({
          documentType: D,
          editorKind: "tab",
          editorEntryPoint: "modelEdit",
          iconLight: x,
          iconDark: x
        }), await s.ui.editors.registerEditorForCustomDocument({
          documentType: y,
          editorKind: "tab",
          editorEntryPoint: "consumedMCPServiceEdit",
          iconLight: S,
          iconDark: S
        }), await s.ui.editors.registerEditorForCustomDocument({
          documentType: C,
          editorKind: "tab",
          editorEntryPoint: "knowledgebaseEdit",
          iconLight: P,
          iconDark: P
        }), await s.ui.extensionsMenu.add({
          caption: u.AgentEditor.caption,
          menuId: u.AgentEditor.id,
          subMenus: [
            {
              caption: u.Onboarding.caption,
              menuId: u.Onboarding.id,
              action: () => B(s)
            },
            {
              caption: u.Compatibility.caption,
              menuId: u.Compatibility.id,
              action: () => Dt(s)
            }
          ]
        });
        try {
          const c = await Pe(s);
          xe(c, R) && (await B(s), await Se(s, R));
        } catch (c) {
          l.error("Failed to initialize onboarding:", c);
        }
      }
    } catch (t) {
      if (e.runMode === "ui") {
        const o = _(e), { createStudioProLogger: i } = await import("./logger-gMbuSAUF.js");
        i(o).error("Error during extension initialization:", t), await o.ui.messageBoxes.show(
          "error",
          `Error during extension initialization: ${t.message}`
        );
      }
      throw t;
    }
  }
}
const Vt = new wt();
export {
  qt as D,
  zt as M,
  We as P,
  f as R,
  tt as U,
  Kt as V,
  Te as a,
  T as b,
  Ut as c,
  Ft as d,
  Oe as e,
  Vt as f,
  Re as g,
  Yt as h,
  it as i,
  Dt as o
};
