import { d as le, c as b, s as ue } from "./DesignSystemTokens-BZrmEyPo.js";
import { i as D, j as g, d as me, m as w } from "./modelUtils-B5ix1w9q.js";
import { b as Ae } from "./knowledgebaseUtils-DFj6m72n.js";
const T = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", R = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADxElEQVRYCcVXb24SQRR/j0WDFhOa9AD0BvUEricotv1AqwnbRIyf7PYEhRMI34zVdPulNLFt1hO4N6A3KN/VSCKtJLL7fG9gENalzGKMk8DMvHl/fm/mN28A4D83/Jv4K3s9Evs8/lzuNJa7i/jKLGIkNivud1vb9iC7psdp+4UBIGBlHIzwYDxOOVgIwMqr6wMicABItl0+tshSxlbqxhwoulToQW8NhtnaI+t9dtBlMEcy57FHSMdfGg8CtW7wZQxAE27ok7qEuP+1kfdkvuL2XCCQHSjIXNqXZt7I90JHILmy93EwiqxvfBzDyCm/jVBqn8J8BHKIMhWREVlOBqhAGDWUDkLA0noe8pedBgo35rZUALQ3BlIbcYGDSOZYAKQ6n31N65j2CwEQ58yJT9zZMmYn3udmflfGaduCHOAwnLEOJszX47T9wgAGMLjUwdJcO22je9695La5/aICQi5iMjG57kRW/fT0TSdZe1q69eylDWG0zuR0lD1g7bz1NnGXbgFQvWK3xWnXcEkIzbuRFcTBlEpuIbvUcyjCdbaxY3bd89bhckymptkk4UhWlD6D8DAicnn0iBm/hlz1fmIImztVDzOWyoqiaA+gZ3PwgrJFLs8Ex0jkc8ESsg7lanH66zYASvPDyaGctSOTjXLVYUAVkgz5LaAwVHJZk7vA2xkQYDO8uR/4fqMr0s3tqnQzmzEJZYsvTg+9s9bh45CsVc6urr3KOPyxtCxrfNZ+LtefmbG20b0xAOvedZuzaW/sVJ0cW5+dvqtpJ3q89fS5yzqf+Ijaem1ebwRgq/zcVuUGQHEg0SlnzRx4zWu2nEW5/LKYqBcTGgHgDAPe2lV+dnf5pBvxGyA+fXVFoyYDfRLeLK0m6cRiq+lcEk4aCQcm5/Hxeeu9G5fNmxvtgDiR4mKyrUJWLmKleYH1uhGAEp8nXzkh15WQLAmI6Mgak/Ub14ujUskxuglGACDX77JTVXQYud3vyzzWRAdhjT/dDGCQy+WMABhxwPc8CehwlrUsDIq+r+ZTCESHb8uTQT9/eT4qQlMKMyazAQzLKZ9ntR2r/50ZvqQ2BLIWexdYgh2RJ7WZACiCfUT5vT9R/7dfcG2njxcnf94GCWrdu7FZn9+Fa3kXhvE4EYp+V804iJFWXPx7LvXfyuA6P0ilsRTl/wD68h6ITGrD6Okdnzs7DvhHY12ORL8LY/uJwVwAWldYnoHQHj9GemGiV0GBPg5+5L3bgk6YSNFM3wSMhaHLua/zT7MCRtTMQtYzrX7pI/5Di1/I2IUPUzivHAAAAABJRU5ErkJggg==", h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADR0lEQVRYCeVW23HaQBS9Kx6TT9wBHYT8xdgfogO7AkMDoFRgXIGFXYBxBXYqMJlJ4DN0EHVgfg1ob87VSvYKJIHMjD+SnYF9ac85ui8t0f/e1KEG8Fxu0DI8MziVuT9V8zKY7xYgxLyiS2bt2YSK1KOqq2/+RAX2et74XQIMOT8xcwvACyJ9T+QsAHbBRE2sBU7d+QIR2Ctu1eLt7V2bXCk1VzXV8SeVhGg4aOsHJj7Ty8gyw22E9IqTnhbPssnVon/Mg8EJX8tp5YQjgxJZpxgQu3sLyCVv8yUp7SMWziK2dTUwrOozzjTlnJln/+8lwPvKTV4Zn7+ZHW8u5KSHgF44FJ5HFE7oRj1iAW74g9/z4CS8EzHxeqrbGYQRuaOfJLhyyAMh96f1uddetjRVnsDQAHBACpnAEP8WmIiXdHYUBuEG+QQBdy6Rbb25RLsEYWCTwypXo2ltmLxqv73C2LmEFe+w1knWpc+1gE2Ot7i/mVW7cmCbXAXeKbta6wdsw9/66gbkke9DcqlCEyM6fJZ9CD6y0zMzBsqQ90/4AuSR2V/JJWaW+rcOIeoFItAU8UR6Wq9bUR//bbkgj3zQDu+YdBfnYrOrQMiJ9dhgxW8u5HHMiOX8mXo0+8oQV5MsMaspAbnkyHGkWRdHMsmZw2+3s7qfd17cBvESxOKOwFCb/5QA+kQLXsKPls+99rqrTb3PJifugXxcRJ6kKoK4Z5PLOCUgDo4j+yFWDszM5Di6J9Fumx0lt3c7re5FjlSNssXGlnFmEKYeQh7L3P9Zm3htlNfY5yXIpU50pE6kcOPJbgFSTNC805VLdQqUonEpcqkTOeSCm3KBLGw2fHJ/YM1lrlyjaHRGvyqRH1M+Jz26mdU8OZtVJzYx7Tkwi5sUlOQ7gCcDXDjmSOpGfBdoJLkvKGXJ5cxOAfKQiNAvoY/afiHzuC2QfleSfjI3dYK6GL5mi6zvansJSECi8iqVTPOC6rUgKanvJRfcUgISIXZ/CLng7M4Cm21jLLcgpvJmt2EOEoDy6gqYKVLpEmuTFI0PEkBM3wVcayf3xlNELnsHx0D/eD2Os6NU9CfCDrMAUKKLCj5eGDbx7W8lwB/ey5Xsw0n/CcK/yjtfsJ29X28AAAAASUVORK5CYII=", O = "AE001", I = "AE002", M = "AE003", v = "AE004", B = "AE005", k = "AE006", x = "AE007", _ = "AE008", N = "AE009", F = "AE010", L = "AE011", S = "AE012", K = "AE013", pe = [
  O,
  I,
  M,
  v,
  B,
  k,
  x,
  _,
  N,
  F,
  L,
  S,
  K
], U = "AE101", q = "AE102", P = "AE103", G = "AE104", Ee = [
  U,
  q,
  P,
  G
], V = "AE201", z = "AE202", Y = "AE203", Q = "AE204", H = "AE205", j = "AE206", X = "AE207", J = "AE208", fe = [
  V,
  z,
  Y,
  Q,
  H,
  j,
  X,
  J
], W = "AE301", $ = "AE302", Z = "AE303", ee = "AE304", ye = [
  W,
  $,
  Z,
  ee
], l = async (o, t) => {
  try {
    const e = await o.app.model.customBlobDocuments.getDocumentById(t.documentId);
    return e !== void 0 && "document" in e && e.document.name === t.qualifiedName.split(".").slice(-1)[0] ? e.document : void 0;
  } catch {
    return;
  }
}, rt = async (o, t) => {
  if (!await l(o, t))
    return await o.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await o.ui.editors.editDocument(t.documentId);
}, te = async (o, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((n) => n.name);
  const e = await oe(o, t);
  if (!e)
    return t.attributes.map((n) => n.name);
  const r = await te(o, e);
  return t.attributes.map((n) => n.name).concat(r);
}, Ce = async (o, t) => {
  if (o.generalization.$Type === "DomainModels$NoGeneralization")
    return o.generalization.persistable;
  const e = await oe(t, o);
  if (e)
    return Ce(e, t);
}, d = async (o, t) => {
  const [e, r] = t.split(".");
  if (!e || !r)
    return;
  const n = await o.app.model.domainModels.getDomainModel(e);
  return n == null ? void 0 : n.getEntity(r);
}, oe = (o, t) => {
  const e = t.generalization;
  return d(o, e.generalization);
}, st = async (o, t) => {
  var r;
  if (!t)
    return;
  const e = (r = await d(o, t)) == null ? void 0 : r.getContainer();
  if (!e) {
    const n = "Could not find entity: " + t;
    return await o.ui.messageBoxes.show("error", n, "This entity might have been deleted or renamed. Please update the context entity selection.");
  }
  await o.ui.editors.editDocument(e.$ID);
}, p = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, a = {
  Microflow: "Microflow",
  MCP: "MCP"
}, De = ["v2025_03_26", "v2024_11_05"], ge = De[0], it = async (o, t) => {
  const e = await m(o, t);
  if (!e)
    return await o.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await o.ui.editors.editDocument(e.$ID);
}, m = async (o, t) => {
  if (t.documentId)
    try {
      const e = await o.app.model.microflows.loadAll((r) => r.$ID === t.documentId);
      return e[0] && e[0].name === t.qualifiedName.split(".").slice(-1)[0] ? e[0] : void 0;
    } catch {
      return;
    }
};
function we(o) {
  return {
    id: crypto.randomUUID(),
    name: o || "",
    description: "",
    enabled: !0,
    toolType: "",
    document: {
      documentId: "",
      qualifiedName: ""
    }
  };
}
function at(o) {
  return {
    ...we(o),
    collectionIdentifier: ""
  };
}
const ct = async (o, t, e) => {
  if (o.toolType !== a.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const r = e.tools;
  if (!o.document || !o.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const n = await l(t, o.document);
  return n ? n.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : r && r.some(
    (s) => {
      var i;
      return s.toolType === a.MCP && s.document.documentId === ((i = o.document) == null ? void 0 : i.documentId) && s.id !== o.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, dt = async (o, t) => {
  if (o.toolType !== a.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!o.document || !o.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const e = await m(t, o.document);
  if (!e)
    return "Selected microflow does not exist.";
  if (e.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (e.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const r = ne(e);
  return r || !0;
}, ne = (o) => {
  const t = [p.Request, p.Tool], e = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], r = o.objectCollection.objects;
  if (r) {
    for (const n of r)
      if (n.$Type === "Microflows$MicroflowParameterObject") {
        if (e.includes(n.variableType.$Type))
          continue;
        if (n.variableType.$Type === "DataTypes$ObjectType" && t.includes(n.variableType.entity))
          continue;
        return `Tool microflow parameter "${n.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
}, Te = async (o, t, e) => {
  let r;
  return t === a.MCP ? r = await l(o, e) : t === a.Microflow && (r = await m(o, e)), r;
}, Re = (o) => {
  switch (o) {
    case a.Microflow:
      return "Microflow";
    case a.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, he = (o) => "microflowActionInfo" in o, be = (o) => ({
  check: async (t) => {
    const e = await Oe(o, t), r = await Ie(o, t), n = Me(t), s = await ve(o, t), i = await Be(o, t);
    return {
      errors: [
        ...e.errors,
        ...r.errors,
        ...n.errors,
        ...s.errors,
        ...i.errors
      ],
      dependentElementIds: [
        ...e.dependentElementIds,
        ...r.dependentElementIds,
        ...n.dependentElementIds,
        ...s.dependentElementIds,
        ...i.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: pe
});
async function Oe(o, t) {
  const e = [], r = [];
  if (!t.model)
    return e.push({
      elementText: "Model",
      errorCode: O,
      errorDescription: "Model is required for an agent.",
      severity: "error"
    }), { errors: e, dependentElementIds: r };
  r.push(t.model.documentId);
  const n = await l(o, t.model);
  return n ? n.excluded && e.push({
    elementText: "Model",
    errorCode: M,
    errorDescription: `Model ${t.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : e.push({
    elementText: "Model",
    errorCode: I,
    errorDescription: `Model ${t.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: r };
}
async function Ie(o, t) {
  const e = [], r = [];
  if (!t.entity)
    return t.variables.length > 0 && e.push({
      elementText: "Context entity",
      errorCode: B,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: e, dependentElementIds: [] };
  r.push(t.entity.documentId);
  const n = await d(o, t.entity.qualifiedName), s = t.variables.filter((i) => !i.isAttributeInEntity).map((i) => i.key);
  return n ? s.length > 0 && e.push({
    elementText: "Context entity",
    errorCode: x,
    errorDescription: `Variable${s.length > 1 ? "s" : ""} ${s.join(", ")} could not be found in context entity ${t.entity.qualifiedName}.`,
    severity: "warning"
  }) : e.push({
    elementText: "Context entity",
    errorCode: k,
    errorDescription: `Context entity ${t.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: r };
}
function Me(o) {
  const t = [];
  return o.userPrompt || t.push({
    elementText: "User prompt",
    errorCode: v,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
async function ve(o, t) {
  const e = [], r = [];
  for (const n of t.tools) {
    if (!n.enabled)
      continue;
    r.push(n.document.documentId);
    const s = await Te(o, n.toolType, n.document), i = Re(n.toolType);
    if (!s)
      e.push({
        elementText: "Tools",
        errorCode: _,
        errorDescription: `${i} ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      e.push({
        elementText: "Tools",
        errorCode: N,
        errorDescription: `${i} ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (he(s)) {
      const { errors: A } = ke(s, n);
      e.push(...A);
    }
  }
  return { errors: e, dependentElementIds: r };
}
async function Be(o, t) {
  const e = [], r = [];
  if (t.knowledgebaseTools)
    for (const n of t.knowledgebaseTools) {
      if (!n.enabled)
        continue;
      r.push(n.document.documentId);
      const s = await l(o, n.document);
      s ? s.excluded && e.push({
        elementText: "Knowledge bases",
        errorCode: K,
        errorDescription: `Knowledge base ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : e.push({
        elementText: "Knowledge bases",
        errorCode: S,
        errorDescription: `Knowledge base ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: e, dependentElementIds: r };
}
function ke(o, t) {
  const e = [];
  return o.microflowReturnType.$Type !== "DataTypes$StringType" && e.push({
    elementText: "Tools",
    errorCode: F,
    errorDescription: `Microflow ${t.document.qualifiedName} must return a String.`,
    severity: "error"
  }), ne(o) && e.push({
    elementText: "Tools",
    errorCode: L,
    errorDescription: `Microflow ${t.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
const xe = (o) => ({
  check: async (t) => {
    const e = await _e(o, t), r = await Ne(o, t);
    return {
      errors: [...e.errors, ...r.errors],
      dependentElementIds: [...e.dependentElementIds, ...r.dependentElementIds]
    };
  },
  reservedErrorCodes: fe
});
async function _e(o, t) {
  const e = [], r = [];
  if (!t.endpoint)
    return e.push({
      errorCode: V,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: e, dependentElementIds: r };
  r.push(t.endpoint.documentId);
  const n = await D(o, t.endpoint);
  return n ? n.excluded ? e.push({
    errorCode: Q,
    errorDescription: `The constant ${t.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : g(n) || e.push({
    errorCode: Y,
    errorDescription: `The constant ${t.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : e.push({
    errorCode: z,
    errorDescription: `The constant ${t.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: e, dependentElementIds: r };
}
async function Ne(o, t) {
  var s;
  const e = [], r = [];
  if (!t.authenticationMicroflow)
    return { errors: e, dependentElementIds: r };
  r.push(t.authenticationMicroflow.documentId);
  const n = await m(
    o,
    t.authenticationMicroflow
  );
  return n ? n.excluded ? (e.push({
    errorCode: J,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r }) : (((s = n.objectCollection.objects) == null ? void 0 : s.filter((i) => i.$Type === "Microflows$MicroflowParameterObject").length) !== 0 && e.push({
    errorCode: X,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== p.HttpHeader) && e.push({
    errorCode: j,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r }) : (e.push({
    errorCode: H,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r });
}
const Fe = (o) => ({
  check: async (t) => {
    const e = await Le(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: ye
});
async function Le(o, t) {
  const e = [], r = [], n = t.providerFields;
  if (!n.key)
    return e.push({
      errorCode: W,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: e, dependentElementIds: r };
  r.push(n.key.documentId);
  const s = await D(o, n.key);
  return s ? s.excluded ? e.push({
    errorCode: ee,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : g(s) || e.push({
    errorCode: Z,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : e.push({
    errorCode: $,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: e, dependentElementIds: r };
}
const Se = (o) => ({
  check: async (t) => {
    const e = await Ke(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: Ee
});
async function Ke(o, t) {
  const e = [], r = [], n = t.providerFields;
  if (!n.key)
    return e.push({
      errorCode: U,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: e, dependentElementIds: r };
  r.push(n.key.documentId);
  const s = await D(o, n.key);
  return s ? s.excluded ? e.push({
    errorCode: G,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : g(s) || e.push({
    errorCode: P,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : e.push({
    errorCode: q,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: e, dependentElementIds: r };
}
const Ue = [
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
], qe = [
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
function Pe() {
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
const lt = (o, t) => async (e) => {
  try {
    await o.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (r) {
    await o.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function ut(o, t, e) {
  const r = e.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], n = e.userPrompt ? e.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], s = t === le, i = [...r, ...n];
  if (i.length === 0)
    return Promise.resolve([]);
  const A = i.map((u) => u.replace(/\{\{|\}\}/g, "")), se = [...new Set(A)], ie = e.variables, ae = se.map((u) => ie.find((de) => de.key === u) || {
    key: u,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), ce = Ge(ae, s);
  return Ve(o, ce, e);
}
const mt = (o) => o.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function Ge(o, t) {
  const e = t ? qe : Ue;
  return o.map((r, n) => ({
    ...r,
    backgroundColor: e[n % e.length][0],
    borderColor: e[n % e.length][1]
  }));
}
async function Ve(o, t, e) {
  const r = await ze(o, e), n = await re(e, o);
  return t.map((s) => {
    const i = n.includes(s.key);
    return {
      ...s,
      isAttributeInEntity: r === !1 || i
    };
  });
}
const ze = async (o, t) => t.entity ? await d(o, t.entity.qualifiedName) !== void 0 : !0, At = async (o, t) => t.variables.length === 0 ? [] : !t.entity || !await d(o, t.entity.qualifiedName) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), re = async (o, t) => {
  if (!o.entity)
    return [];
  const e = await d(t, o.entity.qualifiedName);
  return e ? (await te(t, e)).sort() : [];
}, pt = async (o, t) => (await re(t, o)).filter((r) => !t.variables.find((n) => n.key === r));
function Ye() {
  return {
    protocolVersion: ge
  };
}
const Et = (o, t) => async (e) => {
  const r = b(o);
  try {
    await o.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (n) {
    r.error("Failed to save consumed MCP service document:", n), await o.ui.notifications.show({
      title: "Failed to save consumed MCP service document.",
      message: n.message
    });
  }
};
async function Qe(o, t) {
  try {
    o.app.projectChanges.addEventListener("elementsRenamed", async ({ elements: e }) => {
      await Xe(o, e), await Je(o, e), await $e(o, e), await We(o, e);
    });
  } catch (e) {
    t.error("Failed to set up elementsRenamed event listener", { error: e });
  }
}
function He(o, t, e, r, n) {
  o.qualifiedName = t, e.app.model.customBlobDocuments.updateDocumentContent(r, n);
}
function je(o, t) {
  var e;
  return (e = t.find((r) => r.oldName.qualifiedName === o.qualifiedName)) == null ? void 0 : e.newName.qualifiedName;
}
function c(o, t, e, r) {
  const n = je(e, r);
  n && He(
    e,
    n,
    o,
    t.$ID,
    t.contents
  );
}
async function Xe(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(E);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && (n.document.contents.model && c(o, n.document, n.document.contents.model, t), n.document.contents.entity && c(o, n.document, n.document.contents.entity, t), n.document.contents.tools))
      for (const s of n.document.contents.tools)
        c(o, n.document, s.document, t);
  }
}
async function Je(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(f);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const s = n.document.contents.providerFields;
      if (!s.key)
        continue;
      c(o, n.document, s.key, t);
    }
  }
}
async function We(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(C);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const s = n.document.contents.providerFields;
      if (!s.key)
        continue;
      c(o, n.document, s.key, t);
    }
  }
}
async function $e(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(
    y
  );
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    "document" in n && n.document && n.document.contents.endpoint && c(o, n.document, n.document.contents.endpoint, t);
  }
}
const ft = "extension/agent-editor", E = "agenteditor.agent", f = "agenteditor.model", y = "agenteditor.consumedMCPService", C = "agenteditor.knowledgebase";
class Ze {
  async loaded(t) {
    const e = ue(t), r = b(e);
    try {
      Qe(e, r), await e.app.model.customBlobDocuments.registerDocumentType({
        type: E,
        readableTypeName: "Agent",
        defaultContent: Pe(),
        consistencyCheckRegistration: be(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: E,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: T,
        iconDark: T
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: f,
        readableTypeName: "Model",
        defaultContent: me(),
        consistencyCheckRegistration: Se(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: f,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: w,
        iconDark: w
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: y,
        readableTypeName: "Consumed MCP service",
        defaultContent: Ye(),
        consistencyCheckRegistration: xe(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: y,
        editorKind: "tab",
        editorEntryPoint: "consumedMCPServiceEdit",
        iconLight: h,
        iconDark: h
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: C,
        readableTypeName: "Knowledge base",
        defaultContent: Ae(),
        consistencyCheckRegistration: Fe(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: C,
        editorKind: "tab",
        editorEntryPoint: "knowledgebaseEdit",
        iconLight: R,
        iconDark: R
      });
    } catch (n) {
      throw r.error("Error during extension initialization:", n), await e.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${n.message}`
      ), n;
    }
  }
}
const yt = new Ze();
export {
  ct as A,
  E as B,
  p as C,
  yt as D,
  De as M,
  a as T,
  Ve as a,
  h as b,
  ut as c,
  mt as d,
  d as e,
  Ce as f,
  l as g,
  pt as h,
  ze as i,
  At as j,
  R as k,
  ft as l,
  f as m,
  st as n,
  Pe as o,
  m as p,
  it as q,
  Ye as r,
  Et as s,
  we as t,
  lt as u,
  rt as v,
  y as w,
  at as x,
  C as y,
  dt as z
};
//# sourceMappingURL=index-5iDpKHlL.js.map
