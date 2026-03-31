import { i as $, c as T, s as ee } from "./userPreferences-BV8i5uIO.js";
import { f as w, i as R, d as te, m as p } from "./modelUtils-DbaOd0FB.js";
const f = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", Fe = "data:image/png;base64,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", y = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADR0lEQVRYCeVW23HaQBS9Kx6TT9wBHYT8xdgfogO7AkMDoFRgXIGFXYBxBXYqMJlJ4DN0EHVgfg1ob87VSvYKJIHMjD+SnYF9ac85ui8t0f/e1KEG8Fxu0DI8MziVuT9V8zKY7xYgxLyiS2bt2YSK1KOqq2/+RAX2et74XQIMOT8xcwvACyJ9T+QsAHbBRE2sBU7d+QIR2Ctu1eLt7V2bXCk1VzXV8SeVhGg4aOsHJj7Ty8gyw22E9IqTnhbPssnVon/Mg8EJX8tp5YQjgxJZpxgQu3sLyCVv8yUp7SMWziK2dTUwrOozzjTlnJln/+8lwPvKTV4Zn7+ZHW8u5KSHgF44FJ5HFE7oRj1iAW74g9/z4CS8EzHxeqrbGYQRuaOfJLhyyAMh96f1uddetjRVnsDQAHBACpnAEP8WmIiXdHYUBuEG+QQBdy6Rbb25RLsEYWCTwypXo2ltmLxqv73C2LmEFe+w1knWpc+1gE2Ot7i/mVW7cmCbXAXeKbta6wdsw9/66gbkke9DcqlCEyM6fJZ9CD6y0zMzBsqQ90/4AuSR2V/JJWaW+rcOIeoFItAU8UR6Wq9bUR//bbkgj3zQDu+YdBfnYrOrQMiJ9dhgxW8u5HHMiOX8mXo0+8oQV5MsMaspAbnkyHGkWRdHMsmZw2+3s7qfd17cBvESxOKOwFCb/5QA+kQLXsKPls+99rqrTb3PJifugXxcRJ6kKoK4Z5PLOCUgDo4j+yFWDszM5Di6J9Fumx0lt3c7re5FjlSNssXGlnFmEKYeQh7L3P9Zm3htlNfY5yXIpU50pE6kcOPJbgFSTNC805VLdQqUonEpcqkTOeSCm3KBLGw2fHJ/YM1lrlyjaHRGvyqRH1M+Jz26mdU8OZtVJzYx7Tkwi5sUlOQ7gCcDXDjmSOpGfBdoJLkvKGXJ5cxOAfKQiNAvoY/afiHzuC2QfleSfjI3dYK6GL5mi6zvansJSECi8iqVTPOC6rUgKanvJRfcUgISIXZ/CLng7M4Cm21jLLcgpvJmt2EOEoDy6gqYKVLpEmuTFI0PEkBM3wVcayf3xlNELnsHx0D/eD2Os6NU9CfCDrMAUKKLCj5eGDbx7W8lwB/ey5Xsw0n/CcK/yjtfsJ29X28AAAAASUVORK5CYII=", g = "AE001", h = "AE002", O = "AE003", M = "AE004", I = "AE005", b = "AE006", B = "AE007", N = "AE008", x = "AE009", v = "AE010", F = "AE011", re = [
  g,
  h,
  O,
  M,
  I,
  b,
  B,
  N,
  x,
  v,
  F
], P = "AE101", S = "AE102", L = "AE103", k = "AE104", oe = [
  P,
  S,
  L,
  k
], G = "AE201", q = "AE202", U = "AE203", V = "AE204", z = "AE205", X = "AE206", H = "AE207", Y = "AE208", ne = [
  G,
  q,
  U,
  V,
  z,
  X,
  H,
  Y
], u = async (r, t) => {
  const e = await r.app.model.customBlobDocuments.getDocumentById(t);
  if (e !== void 0 && "document" in e)
    return e.document;
}, Pe = async (r, t) => {
  if (!await u(r, t.documentId))
    return await r.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await r.ui.editors.editDocument(t.documentId);
}, J = async (r, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((o) => o.name);
  const e = await K(r, t);
  if (!e)
    return t.attributes.map((o) => o.name);
  const n = await J(r, e);
  return t.attributes.map((o) => o.name).concat(n);
}, se = async (r, t) => {
  if (r.generalization.$Type === "DomainModels$NoGeneralization")
    return r.generalization.persistable;
  const e = await K(t, r);
  if (e)
    return se(e, t);
}, d = async (r, t) => {
  const [e, n] = t.split(".");
  if (!e || !n)
    return;
  const o = await r.app.model.domainModels.getDomainModel(e);
  return o == null ? void 0 : o.getEntity(n);
}, K = (r, t) => {
  const e = t.generalization;
  return d(r, e.generalization);
}, Se = async (r, t) => {
  var n;
  if (!t)
    return;
  const e = (n = await d(r, t)) == null ? void 0 : n.getContainer();
  if (!e) {
    const o = "Could not find entity: " + t;
    return await r.ui.messageBoxes.show("error", o, "This entity might have been deleted or renamed. Please update the context entity selection.");
  }
  await r.ui.editors.editDocument(e.$ID);
}, m = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, a = {
  Microflow: "Microflow",
  MCP: "MCP"
}, ie = ["v2025_03_26", "v2024_11_05"], ae = ie[0], Le = async (r, t) => {
  const e = await A(r, t.documentId);
  if (!e)
    return await r.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await r.ui.editors.editDocument(e.$ID);
}, A = async (r, t) => {
  if (!t)
    return null;
  try {
    return (await r.app.model.microflows.loadAll((n) => n.$ID === t))[0] ?? null;
  } catch {
    return null;
  }
};
function ke(r) {
  return {
    id: crypto.randomUUID(),
    name: r || "",
    description: "",
    enabled: !0,
    toolType: "",
    document: {
      documentId: "",
      qualifiedName: ""
    }
  };
}
const Ge = async (r, t, e) => {
  if (r.toolType !== a.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const n = e.tools;
  if (!r.document || !r.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const o = await u(t, r.document.documentId);
  return o ? o.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : n && n.some(
    (s) => {
      var i;
      return s.toolType === a.MCP && s.document.documentId === ((i = r.document) == null ? void 0 : i.documentId) && s.id !== r.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, qe = async (r, t) => {
  if (r.toolType !== a.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!r.document || !r.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const e = await A(t, r.document.documentId);
  if (e === null)
    return "Selected microflow does not exist.";
  if (e.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (e.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const n = Q(e);
  return n || !0;
}, Q = (r) => {
  const t = [m.Request, m.Tool], e = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], n = r.objectCollection.objects;
  if (n) {
    for (const o of n)
      if (o.$Type === "Microflows$MicroflowParameterObject") {
        if (e.includes(o.variableType.$Type))
          continue;
        if (o.variableType.$Type === "DataTypes$ObjectType" && t.includes(o.variableType.entity))
          continue;
        return `Tool microflow parameter "${o.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
}, ce = async (r, t, e) => {
  let n;
  return t === a.MCP ? n = await u(r, e) : t === a.Microflow && (n = await A(r, e) || void 0), n;
}, de = (r) => {
  switch (r) {
    case a.Microflow:
      return "Microflow";
    case a.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, le = (r) => "microflowActionInfo" in r, ue = (r) => ({
  check: async (t) => {
    const e = await Ae(r, t), n = await me(r, t), o = Ee(t), s = await pe(r, t);
    return {
      errors: [...e.errors, ...n.errors, ...o.errors, ...s.errors],
      dependentElementIds: [
        ...e.dependentElementIds,
        ...n.dependentElementIds,
        ...o.dependentElementIds,
        ...s.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: re
});
async function Ae(r, t) {
  const e = [], n = [];
  if (!t.model)
    return e.push({
      elementText: "Model",
      errorCode: g,
      errorDescription: "Model is required for an agent.",
      severity: "error"
    }), { errors: e, dependentElementIds: n };
  n.push(t.model.documentId);
  const o = await u(r, t.model.documentId);
  return o ? o.excluded && e.push({
    elementText: "Model",
    errorCode: O,
    errorDescription: `Model ${t.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : e.push({
    elementText: "Model",
    errorCode: h,
    errorDescription: `Model ${t.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: n };
}
async function me(r, t) {
  const e = [], n = [];
  if (!t.entity)
    return t.variables.length > 0 && e.push({
      elementText: "Context entity",
      errorCode: I,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: e, dependentElementIds: [] };
  n.push(t.entity.documentId);
  const o = await d(r, t.entity.qualifiedName), s = t.variables.filter((i) => !i.isAttributeInEntity).map((i) => i.key);
  return o ? s.length > 0 && e.push({
    elementText: "Context entity",
    errorCode: B,
    errorDescription: `Variable${s.length > 1 ? "s" : ""} ${s.join(", ")} could not be found in context entity ${t.entity.qualifiedName}.`,
    severity: "warning"
  }) : e.push({
    elementText: "Context entity",
    errorCode: b,
    errorDescription: `Context entity ${t.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: n };
}
function Ee(r) {
  const t = [];
  return r.userPrompt || t.push({
    elementText: "User prompt",
    errorCode: M,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
async function pe(r, t) {
  const e = [], n = [];
  for (const o of t.tools) {
    if (!o.enabled)
      continue;
    n.push(o.document.documentId);
    const s = await ce(r, o.toolType, o.document.documentId), i = de(o.toolType);
    if (!s)
      e.push({
        elementText: "Tools",
        errorCode: N,
        errorDescription: `${i} ${o.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      e.push({
        elementText: "Tools",
        errorCode: x,
        errorDescription: `${i} ${o.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (le(s)) {
      const { errors: c } = fe(s, o);
      e.push(...c);
    }
  }
  return { errors: e, dependentElementIds: n };
}
function fe(r, t) {
  const e = [];
  return r.microflowReturnType.$Type !== "DataTypes$StringType" && e.push({
    elementText: "Tools",
    errorCode: v,
    errorDescription: `Microflow ${t.document.qualifiedName} must return a String.`,
    severity: "error"
  }), Q(r) && e.push({
    elementText: "Tools",
    errorCode: F,
    errorDescription: `Microflow ${t.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
const ye = (r) => ({
  check: async (t) => {
    const e = await Ce(r, t), n = await De(r, t);
    return {
      errors: [...e.errors, ...n.errors],
      dependentElementIds: [...e.dependentElementIds, ...n.dependentElementIds]
    };
  },
  reservedErrorCodes: ne
});
async function Ce(r, t) {
  const e = [], n = [];
  if (!t.endpoint)
    return e.push({
      errorCode: G,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: e, dependentElementIds: n };
  n.push(t.endpoint.documentId);
  const o = await w(r, t.endpoint.documentId);
  return o ? o.excluded ? e.push({
    errorCode: V,
    errorDescription: `The constant ${t.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : R(o) || e.push({
    errorCode: U,
    errorDescription: `The constant ${t.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : e.push({
    errorCode: q,
    errorDescription: `The constant ${t.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: e, dependentElementIds: n };
}
async function De(r, t) {
  var s;
  const e = [], n = [];
  if (!t.authenticationMicroflow)
    return { errors: e, dependentElementIds: n };
  n.push(t.authenticationMicroflow.documentId);
  const o = await A(
    r,
    t.authenticationMicroflow.documentId
  );
  return o ? o.excluded ? (e.push({
    errorCode: Y,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: n }) : (((s = o.objectCollection.objects) == null ? void 0 : s.filter((i) => i.$Type === "Microflows$MicroflowParameterObject").length) !== 0 && e.push({
    errorCode: H,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (o.microflowReturnType.$Type !== "DataTypes$ListType" || o.microflowReturnType.entity !== m.HttpHeader) && e.push({
    errorCode: X,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: n }) : (e.push({
    errorCode: z,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: n });
}
const Te = (r) => ({
  check: async (t) => {
    const e = await we(r, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: oe
});
async function we(r, t) {
  const e = [], n = [], o = t.providerFields;
  if (!o.key)
    return e.push({
      errorCode: P,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: e, dependentElementIds: n };
  n.push(o.key.documentId);
  const s = await w(r, o.key.documentId);
  return s ? s.excluded ? e.push({
    errorCode: k,
    errorDescription: `The constant ${o.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : R(s) || e.push({
    errorCode: L,
    errorDescription: `The constant ${o.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : e.push({
    errorCode: S,
    errorDescription: `The constant ${o.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: e, dependentElementIds: n };
}
const Re = "Runtime is not connected", Ue = "Settings$ProjectSettings", Ve = "DomainModels$DomainModel", ge = [
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
], he = [
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
];
function j() {
  return {
    description: "",
    systemPrompt: "",
    userPrompt: "",
    usageType: "Task",
    variables: [],
    tools: []
  };
}
function ze() {
  return {
    $ID: "",
    name: "",
    excluded: !1,
    documentType: E,
    contents: j()
  };
}
const Xe = (r, t) => async (e) => {
  try {
    await r.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (n) {
    await r.ui.notifications.show({
      title: "Failed to save document",
      message: n.message
    });
  }
};
async function He(r, t) {
  const e = t.systemPrompt.match(/\{\{([^}\s{]+)\}\}/g) || [], n = t.userPrompt ? t.userPrompt.match(/\{\{([^}\s{]+)\}\}/g) || [] : [], o = [...e, ...n];
  if (o.length === 0)
    return Promise.resolve([]);
  const s = o.map((l) => l.replace(/\{\{|\}\}/g, "")), i = [...new Set(s)], c = t.variables, W = i.map((l) => c.find((Z) => Z.key === l) || {
    key: l,
    isAttributeInEntity: !1
  });
  return Me(r, W, t);
}
const Ye = (r, t) => r.map((e, n) => ({
  pattern: new RegExp("\\{\\{" + e.key + "\\}\\}", "g"),
  style: {
    ...Oe(n, $(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function Oe(r, t) {
  const e = t ? he : ge;
  return {
    color: e[r % e.length][1],
    backgroundColor: e[r % e.length][0],
    borderColor: e[r % e.length][1]
  };
}
async function Me(r, t, e) {
  const n = await Ie(r, e), o = await _(e, r);
  return t.map((s) => {
    const i = o.includes(s.key);
    return {
      ...s,
      isAttributeInEntity: n === !1 || i
    };
  });
}
const Ie = async (r, t) => t.entity ? await d(r, t.entity.qualifiedName) !== void 0 : !0, Je = async (r, t) => t.variables.length === 0 ? [] : !t.entity || !await d(r, t.entity.qualifiedName) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), _ = async (r, t) => {
  if (!r.entity)
    return [];
  const e = await d(t, r.entity.qualifiedName);
  return e ? (await J(t, e)).sort() : [];
}, Ke = async (r, t) => (await _(t, r)).filter((n) => !t.variables.find((o) => o.key === n)), Qe = async (r, t, e) => {
  const n = e.reduce((i, c) => (i[c.key] = c.value, i), {}), o = {
    documentId: t,
    variables: JSON.stringify(n)
  };
  return await r.runtime.controller.executePreviewAction(
    "preview_agent_test",
    o
  );
}, je = async (r) => {
  try {
    const t = await r.runtime.controller.executePreviewAction("preview_runtime_test", {});
    return !(typeof t == "object" && t !== null && "error" in t && t.error === Re);
  } catch {
    return !0;
  }
};
function be() {
  return {
    protocolVersion: ae
  };
}
const _e = (r, t) => async (e) => {
  const n = T(r);
  try {
    await r.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (o) {
    n.error("Failed to save consumed MCP service document:", o), await r.ui.notifications.show({
      title: "Failed to save consumed MCP service document.",
      message: o.message
    });
  }
}, We = "extension/agent-editor", E = "agenteditor.agent", C = "agenteditor.model", D = "agenteditor.consumedMCPService";
class Be {
  async loaded(t) {
    const e = ee(t), n = T(e);
    try {
      await e.app.model.customBlobDocuments.registerDocumentType({
        type: E,
        readableTypeName: "Agent",
        defaultContent: j(),
        consistencyCheckRegistration: ue(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: E,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: f,
        iconDark: f
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: C,
        readableTypeName: "Model",
        defaultContent: te(),
        consistencyCheckRegistration: Te(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: C,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: p,
        iconDark: p
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: D,
        readableTypeName: "Consumed MCP service",
        defaultContent: be(),
        consistencyCheckRegistration: ye(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: D,
        editorKind: "tab",
        editorEntryPoint: "consumedMCPServiceEdit",
        iconLight: y,
        iconDark: y
      });
    } catch (o) {
      throw n.error("Error during extension initialization:", o), await e.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${o.message}`
      ), o;
    }
  }
}
const Ze = new Be();
export {
  qe as A,
  Ge as B,
  m as C,
  Ve as D,
  E,
  Ze as F,
  ie as M,
  Ue as P,
  a as T,
  Fe as a,
  Me as b,
  He as c,
  f as d,
  Qe as e,
  y as f,
  u as g,
  Ye as h,
  Ie as i,
  d as j,
  se as k,
  Ke as l,
  C as m,
  Je as n,
  We as o,
  Se as p,
  ze as q,
  A as r,
  Le as s,
  je as t,
  Xe as u,
  be as v,
  _e as w,
  ke as x,
  Pe as y,
  D as z
};
//# sourceMappingURL=index-CiUZK5eE.js.map
