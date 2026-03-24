import { d as V, c as w, s as K } from "./DesignSystemTokens-CB_9gr2a.js";
import { f as G, i as Q, d as z, m as E } from "./modelUtils-Bx_f070p.js";
const f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", C = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADR0lEQVRYCeVW23HaQBS9Kx6TT9wBHYT8xdgfogO7AkMDoFRgXIGFXYBxBXYqMJlJ4DN0EHVgfg1ob87VSvYKJIHMjD+SnYF9ac85ui8t0f/e1KEG8Fxu0DI8MziVuT9V8zKY7xYgxLyiS2bt2YSK1KOqq2/+RAX2et74XQIMOT8xcwvACyJ9T+QsAHbBRE2sBU7d+QIR2Ctu1eLt7V2bXCk1VzXV8SeVhGg4aOsHJj7Ty8gyw22E9IqTnhbPssnVon/Mg8EJX8tp5YQjgxJZpxgQu3sLyCVv8yUp7SMWziK2dTUwrOozzjTlnJln/+8lwPvKTV4Zn7+ZHW8u5KSHgF44FJ5HFE7oRj1iAW74g9/z4CS8EzHxeqrbGYQRuaOfJLhyyAMh96f1uddetjRVnsDQAHBACpnAEP8WmIiXdHYUBuEG+QQBdy6Rbb25RLsEYWCTwypXo2ltmLxqv73C2LmEFe+w1knWpc+1gE2Ot7i/mVW7cmCbXAXeKbta6wdsw9/66gbkke9DcqlCEyM6fJZ9CD6y0zMzBsqQ90/4AuSR2V/JJWaW+rcOIeoFItAU8UR6Wq9bUR//bbkgj3zQDu+YdBfnYrOrQMiJ9dhgxW8u5HHMiOX8mXo0+8oQV5MsMaspAbnkyHGkWRdHMsmZw2+3s7qfd17cBvESxOKOwFCb/5QA+kQLXsKPls+99rqrTb3PJifugXxcRJ6kKoK4Z5PLOCUgDo4j+yFWDszM5Di6J9Fumx0lt3c7re5FjlSNssXGlnFmEKYeQh7L3P9Zm3htlNfY5yXIpU50pE6kcOPJbgFSTNC805VLdQqUonEpcqkTOeSCm3KBLGw2fHJ/YM1lrlyjaHRGvyqRH1M+Jz26mdU8OZtVJzYx7Tkwi5sUlOQ7gCcDXDjmSOpGfBdoJLkvKGXJ5cxOAfKQiNAvoY/afiHzuC2QfleSfjI3dYK6GL5mi6zvansJSECi8iqVTPOC6rUgKanvJRfcUgISIXZ/CLng7M4Cm21jLLcgpvJmt2EOEoDy6gqYKVLpEmuTFI0PEkBM3wVcayf3xlNELnsHx0D/eD2Os6NU9CfCDrMAUKKLCj5eGDbx7W8lwB/ey5Xsw0n/CcK/yjtfsJ29X28AAAAASUVORK5CYII=", D = "AE001", R = "AE002", b = "AE003", M = "AE004", O = "AE005", h = "AE006", F = "AE007", I = "AE008", Y = [
  R,
  D,
  b,
  M,
  O,
  h,
  F,
  I
], B = "AE101", v = "AE102", N = "AE103", X = [
  B,
  v,
  N
], A = async (e, o, t) => (await e.app.model.customBlobDocuments.getDocumentsOfType(t)).matchingDocumentsInfo.find((r) => r.moduleName + "." + r.name === o), ge = async (e, o, t) => {
  if (!await A(e, o.qualifiedName, t))
    return await e.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await e.ui.editors.editDocument(o.documentId);
}, g = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, a = {
  Microflow: "Microflow",
  MCP: "MCP"
}, J = ["v2025_03_26", "v2024_11_05"], H = J[0], Te = async (e, o) => {
  const t = await y(e, o);
  if (!t)
    return await e.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await e.ui.editors.editDocument(t.$ID);
}, y = async (e, o) => {
  if (!o)
    return null;
  const [t, n] = o.split(".");
  if (!t || !n)
    return null;
  const r = await e.app.model.microflows.loadAll(
    (s) => s.moduleName === t && s.name === n
  );
  return r.length === 0 ? null : r[0];
};
function we(e) {
  return {
    id: crypto.randomUUID(),
    name: e || "",
    description: "",
    enabled: !0,
    toolType: "",
    document: {
      documentId: "",
      qualifiedName: ""
    }
  };
}
const De = async (e, o, t) => {
  if (e.toolType !== a.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const n = t.tools;
  return !e.document || !e.document.qualifiedName ? "Consumed MCP service must be selected for MCP tool." : await A(
    o,
    e.document.qualifiedName,
    m
  ) ? n && n.some(
    (s) => {
      var i;
      return s.toolType === a.MCP && s.document.documentId === ((i = e.document) == null ? void 0 : i.documentId) && s.id !== e.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, Re = async (e, o) => {
  if (e.toolType !== a.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  const t = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], n = [g.Request, g.Tool];
  if (!e.document || !e.document.qualifiedName || e.document.qualifiedName.trim() === "")
    return "Microflow must be selected for Microflow tool.";
  const r = await y(
    o,
    e.document.qualifiedName
  );
  if (r === null)
    return "Selected microflow does not exist.";
  if (r.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (r.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const s = r.objectCollection.objects;
  if (s) {
    for (const i of s)
      if (i.$Type === "Microflows$MicroflowParameterObject") {
        if (t.includes(i.variableType.$Type))
          continue;
        if (i.variableType.$Type === "DataTypes$ObjectType" && n.includes(i.variableType.entity))
          continue;
        return `Tool microflow parameter "${i.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
  return !0;
}, j = async (e, o, t) => {
  let n;
  return o === a.MCP ? n = await A(
    e,
    t,
    m
  ) : o === a.Microflow && (n = await y(e, t) || void 0), n;
}, $ = (e) => {
  switch (e) {
    case a.Microflow:
      return "Microflow";
    case a.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, W = (e) => {
  if (e)
    return x(e) ? e.$ID : e.id;
}, x = (e) => "$ID" in e, Z = (e) => ({
  check: async (o) => {
    const t = await ee(e, o), n = await te(e, o), r = oe(o), s = await re(e, o);
    return {
      errors: [...t.errors, ...n.errors, ...r.errors, ...s.errors],
      dependentElementIds: [
        ...t.dependentElementIds,
        ...n.dependentElementIds,
        ...r.dependentElementIds,
        ...s.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: Y
});
async function ee(e, o) {
  const t = [], n = [];
  if (!o.model)
    return t.push({
      elementText: "Model",
      errorCode: D,
      errorDescription: "Model is required for an agent.",
      severity: "error"
    }), { errors: t, dependentElementIds: n };
  n.push(o.model.documentId);
  const r = await A(
    e,
    o.model.qualifiedName,
    p
  );
  return (!r || r.id !== o.model.documentId) && t.push({
    elementText: "Model",
    errorCode: R,
    errorDescription: `Model ${o.model.qualifiedName} could not be found.`,
    severity: "error"
  }), { errors: t, dependentElementIds: n };
}
async function te(e, o) {
  const t = [], n = [];
  if (!o.entity)
    return o.variables.length > 0 && t.push({
      elementText: "Context entity",
      errorCode: M,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: t, dependentElementIds: [] };
  n.push(o.entity.documentId);
  const [r, s] = o.entity.qualifiedName.split("."), i = await e.app.model.domainModels.getDomainModel(r);
  return (i == null ? void 0 : i.entities.find((c) => c.name === s)) || t.push({
    elementText: "Context entity",
    errorCode: O,
    errorDescription: `Context entity ${o.entity.qualifiedName} could not be found.`,
    severity: "error"
  }), { errors: t, dependentElementIds: n };
}
function oe(e) {
  const o = [];
  return e.userPrompt || o.push({
    elementText: "User prompt",
    errorCode: b,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: o, dependentElementIds: [] };
}
async function re(e, o) {
  const t = [], n = [];
  for (const r of o.tools) {
    n.push(r.document.documentId);
    const s = await j(e, r.toolType, r.document.qualifiedName), i = $(r.toolType), d = W(s);
    if (!s || d !== r.document.documentId)
      t.push({
        elementText: "Tools",
        errorCode: h,
        errorDescription: `${i} ${r.document.qualifiedName} could not be found.`,
        severity: "error"
      });
    else if (x(s)) {
      const { errors: c } = ne(s, r);
      t.push(...c);
    }
  }
  return { errors: t, dependentElementIds: n };
}
function ne(e, o) {
  const t = [];
  return e.excluded ? t.push({
    elementText: "Tools",
    errorCode: I,
    errorDescription: `Microflow ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : e.microflowReturnType.$Type !== "DataTypes$StringType" && t.push({
    elementText: "Tools",
    errorCode: F,
    errorDescription: `Microflow ${o.document.qualifiedName} must return a String.`,
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
const se = (e) => ({
  check: async (o) => {
    const t = await ie(e, o);
    return {
      errors: [...t.errors],
      dependentElementIds: [...t.dependentElementIds]
    };
  },
  reservedErrorCodes: X
});
async function ie(e, o) {
  const t = [], n = [], r = o.providerFields;
  if (!r.key)
    return t.push({
      errorCode: B,
      errorDescription: "Key is required for a Mendix Cloud provided model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: t, dependentElementIds: n };
  n.push(r.key.documentId);
  const s = await G(e, r.key.qualifiedName);
  return !s || s.$ID !== r.key.documentId ? t.push({
    errorCode: v,
    errorDescription: `The constant ${r.key.qualifiedName} could not be found.`,
    severity: "error",
    elementText: "Model key"
  }) : Q(s) || t.push({
    errorCode: N,
    errorDescription: `The constant ${r.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: t, dependentElementIds: n };
}
const ae = [
  ["#DCEEFE", "#0123C6"],
  // Blue
  ["#E2E0FC", "#4701D4"],
  // Purple
  ["#F7E0FF", "#780194"],
  // Violet
  ["#FFE5E9", "#9E051B"],
  // Red
  ["#FFEBDC", "#7D1401"],
  // Orange
  ["#FFF2CF", "#803600"],
  // Yellow
  ["#E1FAE1", "#076407"],
  // Green
  ["#0123C6", "#DCEEFE"],
  // Dark Blue
  ["#4701D4", "#E2E0FC"],
  // Dark Purple
  ["#780194", "#F7E0FF"],
  // Dark Violet
  ["#9E051B", "#FFE5E9"],
  // Dark Red
  ["#7D1401", "#FFEBDC"],
  // Dark Orange
  ["#803600", "#FFF2CF"],
  // Dark Yellow
  ["#076407", "#E1FAE1"]
  // Dark Green
], ce = [
  ["#101374", "#8AC4FF"],
  // Dark Blue
  ["#2A0B66", "#9782FF"],
  // Dark Purple
  ["#4B1352", "#E599FF"],
  // Dark Violet
  ["#5C1028", "#FF9B99"],
  // Dark Red
  ["#5C2315", "#FFD5BB"],
  // Dark Orange
  ["#5C2E14", "#FFEEBA"],
  // Dark Yellow
  ["#124112", "#C0FAC0"],
  // Dark Green
  ["#8AC4FF", "#101374"],
  // Blue
  ["#9782FF", "#2A0B66"],
  // Purple
  ["#E599FF", "#4B1352"],
  // Violet
  ["#FF9B99", "#5C1028"],
  // Red
  ["#FFD5BB", "#5C2315"],
  // Orange
  ["#FFEEBA", "#5C2E14"],
  // Yellow
  ["#C0FAC0", "#124112"]
  // Green
], k = async (e, o) => {
  if (o.generalization.$Type === "DomainModels$NoGeneralization")
    return o.attributes.map((r) => r.name);
  const t = await P(e, o);
  if (!t)
    return o.attributes.map((r) => r.name);
  const n = await k(e, t);
  return o.attributes.map((r) => r.name).concat(n);
}, le = async (e, o) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.generalization.persistable;
  const t = await P(o, e);
  if (t)
    return le(t, o);
}, l = async (e, o) => {
  const [t, n] = o.split(".");
  if (!t || !n)
    return;
  const r = await e.app.model.domainModels.getDomainModel(t);
  return r == null ? void 0 : r.getEntity(n);
}, P = (e, o) => {
  const t = o.generalization;
  return l(e, t.generalization);
}, be = async (e, o) => {
  var n;
  if (!o)
    return;
  const t = (n = await l(e, o)) == null ? void 0 : n.getContainer();
  if (!t) {
    const r = "Could not find entity: " + o;
    return await e.ui.messageBoxes.show("error", r, "This entity might have been deleted or renamed. Please update the context entity selection.");
  }
  await e.ui.editors.editDocument(t.$ID);
};
function de() {
  return {
    description: "",
    systemPrompt: "",
    userPrompt: "",
    usageType: "Task",
    variables: [],
    tools: []
  };
}
const Me = (e, o) => async (t) => {
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(o, t);
  } catch (n) {
    await e.ui.notifications.show({
      title: "Failed to save document",
      message: n.message
    });
  }
};
async function Oe(e, o, t) {
  const n = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], r = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], s = o === V, i = [...n, ...r];
  if (i.length === 0)
    return Promise.resolve([]);
  const d = i.map((u) => u.replace(/\{\{|\}\}/g, "")), c = [...new Set(d)], L = t.variables, _ = c.map((u) => L.find((U) => U.key === u) || {
    key: u,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), q = ue(_, s);
  return me(e, q, t);
}
const he = (e) => e.map((o) => ({
  pattern: new RegExp("\\{\\{" + o.key + "\\}\\}", "g"),
  style: {
    color: o.borderColor,
    backgroundColor: o.backgroundColor,
    border: `1px solid ${o.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function ue(e, o) {
  const t = o ? ce : ae;
  return e.map((n, r) => ({
    ...n,
    backgroundColor: t[r % t.length][0],
    borderColor: t[r % t.length][1]
  }));
}
async function me(e, o, t) {
  const n = await Ae(e, t), r = await S(t, e);
  return o.map((s) => {
    const i = r.includes(s.key);
    return {
      ...s,
      isAttributeInEntity: n === !1 || i
    };
  });
}
const Ae = async (e, o) => o.entity ? await l(e, o.entity.qualifiedName) !== void 0 : !0, Fe = async (e, o) => o.variables.length === 0 ? [] : !o.entity || !await l(e, o.entity.qualifiedName) ? [] : o.variables.filter((t) => !t.isAttributeInEntity).map((t) => t.key), S = async (e, o) => {
  if (!e.entity)
    return [];
  const t = await l(o, e.entity.qualifiedName);
  return t ? (await k(o, t)).sort() : [];
}, Ie = async (e, o) => (await S(o, e)).filter((n) => !o.variables.find((r) => r.key === n));
function pe() {
  return {
    endpoint: "",
    protocolVersion: H
  };
}
const Be = (e, o) => async (t) => {
  const n = w(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(o, t);
  } catch (r) {
    n.error("Failed to save consumed MCP service document:", r), await e.ui.notifications.show({
      title: "Failed to save consumed MCP service document.",
      message: r.message
    });
  }
}, ve = "extension/agent-editor", T = "agenteditor.agent", p = "agenteditor.model", m = "agenteditor.consumedMCPService";
class ye {
  async loaded(o) {
    const t = K(o), n = w(t);
    try {
      await t.app.model.customBlobDocuments.registerDocumentType({
        type: T,
        readableTypeName: "Agent",
        defaultContent: de(),
        consistencyCheckRegistration: Z(t)
      }), await t.ui.editors.registerEditorForCustomDocument({
        documentType: T,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: f,
        iconDark: f
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: p,
        readableTypeName: "Model",
        defaultContent: z(),
        consistencyCheckRegistration: se(t)
      }), await t.ui.editors.registerEditorForCustomDocument({
        documentType: p,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: E,
        iconDark: E
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: m,
        readableTypeName: "Consumed MCP service",
        defaultContent: pe()
      }), await t.ui.editors.registerEditorForCustomDocument({
        documentType: m,
        editorKind: "tab",
        editorEntryPoint: "consumedMCPServiceEdit",
        iconLight: C,
        iconDark: C
      });
    } catch (r) {
      throw n.error("Error during extension initialization:", r), await t.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${r.message}`
      ), r;
    }
  }
}
const Ne = new ye();
export {
  g as C,
  J as M,
  a as T,
  me as a,
  C as b,
  Oe as c,
  he as d,
  l as e,
  le as f,
  A as g,
  Ie as h,
  Ae as i,
  Fe as j,
  ve as k,
  be as l,
  p as m,
  de as n,
  y as o,
  Te as p,
  pe as q,
  Be as r,
  we as s,
  ge as t,
  Me as u,
  m as v,
  Re as w,
  De as x,
  Ne as y
};
//# sourceMappingURL=index-Dj3Ehq9a.js.map
