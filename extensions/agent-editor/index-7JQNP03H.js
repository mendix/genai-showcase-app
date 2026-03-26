import { d as ce, c as O, s as de } from "./DesignSystemTokens-CB_9gr2a.js";
import { f as E, i as p, d as y, m as f } from "./modelUtils-BbV2htFf.js";
const C = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", D = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADxElEQVRYCcVXb24SQRR/j0WDFhOa9AD0BvUEricotv1AqwnbRIyf7PYEhRMI34zVdPulNLFt1hO4N6A3KN/VSCKtJLL7fG9gENalzGKMk8DMvHl/fm/mN28A4D83/Jv4K3s9Evs8/lzuNJa7i/jKLGIkNivud1vb9iC7psdp+4UBIGBlHIzwYDxOOVgIwMqr6wMicABItl0+tshSxlbqxhwoulToQW8NhtnaI+t9dtBlMEcy57FHSMdfGg8CtW7wZQxAE27ok7qEuP+1kfdkvuL2XCCQHSjIXNqXZt7I90JHILmy93EwiqxvfBzDyCm/jVBqn8J8BHKIMhWREVlOBqhAGDWUDkLA0noe8pedBgo35rZUALQ3BlIbcYGDSOZYAKQ6n31N65j2CwEQ58yJT9zZMmYn3udmflfGaduCHOAwnLEOJszX47T9wgAGMLjUwdJcO22je9695La5/aICQi5iMjG57kRW/fT0TSdZe1q69eylDWG0zuR0lD1g7bz1NnGXbgFQvWK3xWnXcEkIzbuRFcTBlEpuIbvUcyjCdbaxY3bd89bhckymptkk4UhWlD6D8DAicnn0iBm/hlz1fmIImztVDzOWyoqiaA+gZ3PwgrJFLs8Ex0jkc8ESsg7lanH66zYASvPDyaGctSOTjXLVYUAVkgz5LaAwVHJZk7vA2xkQYDO8uR/4fqMr0s3tqnQzmzEJZYsvTg+9s9bh45CsVc6urr3KOPyxtCxrfNZ+LtefmbG20b0xAOvedZuzaW/sVJ0cW5+dvqtpJ3q89fS5yzqf+Ijaem1ebwRgq/zcVuUGQHEg0SlnzRx4zWu2nEW5/LKYqBcTGgHgDAPe2lV+dnf5pBvxGyA+fXVFoyYDfRLeLK0m6cRiq+lcEk4aCQcm5/Hxeeu9G5fNmxvtgDiR4mKyrUJWLmKleYH1uhGAEp8nXzkh15WQLAmI6Mgak/Ub14ujUskxuglGACDX77JTVXQYud3vyzzWRAdhjT/dDGCQy+WMABhxwPc8CehwlrUsDIq+r+ZTCESHb8uTQT9/eT4qQlMKMyazAQzLKZ9ntR2r/50ZvqQ2BLIWexdYgh2RJ7WZACiCfUT5vT9R/7dfcG2njxcnf94GCWrdu7FZn9+Fa3kXhvE4EYp+V804iJFWXPx7LvXfyuA6P0ilsRTl/wD68h6ITGrD6Okdnzs7DvhHY12ORL8LY/uJwVwAWldYnoHQHj9GemGiV0GBPg5+5L3bgk6YSNFM3wSMhaHLua/zT7MCRtTMQtYzrX7pI/5Di1/I2IUPUzivHAAAAABJRU5ErkJggg==", T = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADR0lEQVRYCeVW23HaQBS9Kx6TT9wBHYT8xdgfogO7AkMDoFRgXIGFXYBxBXYqMJlJ4DN0EHVgfg1ob87VSvYKJIHMjD+SnYF9ac85ui8t0f/e1KEG8Fxu0DI8MziVuT9V8zKY7xYgxLyiS2bt2YSK1KOqq2/+RAX2et74XQIMOT8xcwvACyJ9T+QsAHbBRE2sBU7d+QIR2Ctu1eLt7V2bXCk1VzXV8SeVhGg4aOsHJj7Ty8gyw22E9IqTnhbPssnVon/Mg8EJX8tp5YQjgxJZpxgQu3sLyCVv8yUp7SMWziK2dTUwrOozzjTlnJln/+8lwPvKTV4Zn7+ZHW8u5KSHgF44FJ5HFE7oRj1iAW74g9/z4CS8EzHxeqrbGYQRuaOfJLhyyAMh96f1uddetjRVnsDQAHBACpnAEP8WmIiXdHYUBuEG+QQBdy6Rbb25RLsEYWCTwypXo2ltmLxqv73C2LmEFe+w1knWpc+1gE2Ot7i/mVW7cmCbXAXeKbta6wdsw9/66gbkke9DcqlCEyM6fJZ9CD6y0zMzBsqQ90/4AuSR2V/JJWaW+rcOIeoFItAU8UR6Wq9bUR//bbkgj3zQDu+YdBfnYrOrQMiJ9dhgxW8u5HHMiOX8mXo0+8oQV5MsMaspAbnkyHGkWRdHMsmZw2+3s7qfd17cBvESxOKOwFCb/5QA+kQLXsKPls+99rqrTb3PJifugXxcRJ6kKoK4Z5PLOCUgDo4j+yFWDszM5Di6J9Fumx0lt3c7re5FjlSNssXGlnFmEKYeQh7L3P9Zm3htlNfY5yXIpU50pE6kcOPJbgFSTNC805VLdQqUonEpcqkTOeSCm3KBLGw2fHJ/YM1lrlyjaHRGvyqRH1M+Jz26mdU8OZtVJzYx7Tkwi5sUlOQ7gCcDXDjmSOpGfBdoJLkvKGXJ5cxOAfKQiNAvoY/afiHzuC2QfleSfjI3dYK6GL5mi6zvansJSECi8iqVTPOC6rUgKanvJRfcUgISIXZ/CLng7M4Cm21jLLcgpvJmt2EOEoDy6gqYKVLpEmuTFI0PEkBM3wVcayf3xlNELnsHx0D/eD2Os6NU9CfCDrMAUKKLCj5eGDbx7W8lwB/ey5Xsw0n/CcK/yjtfsJ29X28AAAAASUVORK5CYII=", I = "AE001", b = "AE002", M = "AE003", v = "AE004", x = "AE005", _ = "AE006", B = "AE007", k = "AE008", F = "AE009", N = "AE010", L = "AE011", le = [
  I,
  b,
  M,
  v,
  x,
  _,
  B,
  k,
  F,
  N,
  L
], P = "AE101", S = "AE102", U = "AE103", K = "AE104", ue = [
  P,
  S,
  U,
  K
], V = "AE201", q = "AE202", G = "AE203", z = "AE204", Y = "AE205", Q = "AE206", H = "AE207", X = "AE208", Ae = [
  V,
  q,
  G,
  z,
  Y,
  Q,
  H,
  X
], j = "AE301", J = "AE302", W = "AE303", $ = "AE304", me = [
  j,
  J,
  W,
  $
], l = async (o, t) => {
  const e = await o.app.model.customBlobDocuments.getDocumentById(t);
  if (e !== void 0 && "document" in e)
    return e.document;
}, Ye = async (o, t) => {
  if (!await l(o, t.documentId))
    return await o.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await o.ui.editors.editDocument(t.documentId);
}, Z = async (o, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((r) => r.name);
  const e = await ee(o, t);
  if (!e)
    return t.attributes.map((r) => r.name);
  const n = await Z(o, e);
  return t.attributes.map((r) => r.name).concat(n);
}, Ee = async (o, t) => {
  if (o.generalization.$Type === "DomainModels$NoGeneralization")
    return o.generalization.persistable;
  const e = await ee(t, o);
  if (e)
    return Ee(e, t);
}, c = async (o, t) => {
  const [e, n] = t.split(".");
  if (!e || !n)
    return;
  const r = await o.app.model.domainModels.getDomainModel(e);
  return r == null ? void 0 : r.getEntity(n);
}, ee = (o, t) => {
  const e = t.generalization;
  return c(o, e.generalization);
}, Qe = async (o, t) => {
  var n;
  if (!t)
    return;
  const e = (n = await c(o, t)) == null ? void 0 : n.getContainer();
  if (!e) {
    const r = "Could not find entity: " + t;
    return await o.ui.messageBoxes.show("error", r, "This entity might have been deleted or renamed. Please update the context entity selection.");
  }
  await o.ui.editors.editDocument(e.$ID);
}, m = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, a = {
  Microflow: "Microflow",
  MCP: "MCP"
}, pe = ["v2025_03_26", "v2024_11_05"], ye = pe[0], He = async (o, t) => {
  const e = await u(o, t.documentId);
  if (!e)
    return await o.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await o.ui.editors.editDocument(e.$ID);
}, u = async (o, t) => {
  if (!t)
    return null;
  try {
    return await o.app.model.microflows.load(
      "Microflows$Microflow",
      t
    );
  } catch {
    return null;
  }
};
function fe(o) {
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
function Xe(o) {
  return {
    ...fe(o),
    collectionIdentifier: ""
  };
}
const je = async (o, t, e) => {
  if (o.toolType !== a.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const n = e.tools;
  if (!o.document || !o.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const r = await l(t, o.document.documentId);
  return r ? r.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : n && n.some(
    (s) => {
      var i;
      return s.toolType === a.MCP && s.document.documentId === ((i = o.document) == null ? void 0 : i.documentId) && s.id !== o.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, Je = async (o, t) => {
  if (o.toolType !== a.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!o.document || !o.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const e = await u(t, o.document.documentId);
  if (e === null)
    return "Selected microflow does not exist.";
  if (e.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (e.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const n = te(e);
  return n || !0;
}, te = (o) => {
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
  ], n = o.objectCollection.objects;
  if (n) {
    for (const r of n)
      if (r.$Type === "Microflows$MicroflowParameterObject") {
        if (e.includes(r.variableType.$Type))
          continue;
        if (r.variableType.$Type === "DataTypes$ObjectType" && t.includes(r.variableType.entity))
          continue;
        return `Tool microflow parameter "${r.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
}, Ce = async (o, t, e) => {
  let n;
  return t === a.MCP ? n = await l(o, e) : t === a.Microflow && (n = await u(o, e) || void 0), n;
}, De = (o) => {
  switch (o) {
    case a.Microflow:
      return "Microflow";
    case a.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, Te = (o) => "microflowActionInfo" in o, Re = (o) => ({
  check: async (t) => {
    const e = await ge(o, t), n = await we(o, t), r = he(t), s = await Oe(o, t);
    return {
      errors: [...e.errors, ...n.errors, ...r.errors, ...s.errors],
      dependentElementIds: [
        ...e.dependentElementIds,
        ...n.dependentElementIds,
        ...r.dependentElementIds,
        ...s.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: le
});
async function ge(o, t) {
  const e = [], n = [];
  if (!t.model)
    return e.push({
      elementText: "Model",
      errorCode: I,
      errorDescription: "Model is required for an agent.",
      severity: "error"
    }), { errors: e, dependentElementIds: n };
  n.push(t.model.documentId);
  const r = await l(o, t.model.documentId);
  return r ? r.excluded && e.push({
    elementText: "Model",
    errorCode: M,
    errorDescription: `Model ${t.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : e.push({
    elementText: "Model",
    errorCode: b,
    errorDescription: `Model ${t.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: n };
}
async function we(o, t) {
  const e = [], n = [];
  if (!t.entity)
    return t.variables.length > 0 && e.push({
      elementText: "Context entity",
      errorCode: x,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: e, dependentElementIds: [] };
  n.push(t.entity.documentId);
  const r = await c(o, t.entity.qualifiedName), s = t.variables.filter((i) => !i.isAttributeInEntity).map((i) => i.key);
  return r ? s.length > 0 && e.push({
    elementText: "Context entity",
    errorCode: B,
    errorDescription: `Variable${s.length > 1 ? "s" : ""} ${s.join(", ")} could not be found in context entity ${t.entity.qualifiedName}.`,
    severity: "warning"
  }) : e.push({
    elementText: "Context entity",
    errorCode: _,
    errorDescription: `Context entity ${t.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: n };
}
function he(o) {
  const t = [];
  return o.userPrompt || t.push({
    elementText: "User prompt",
    errorCode: v,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
async function Oe(o, t) {
  const e = [], n = [];
  for (const r of t.tools) {
    if (!r.enabled)
      continue;
    n.push(r.document.documentId);
    const s = await Ce(o, r.toolType, r.document.documentId), i = De(r.toolType);
    if (!s)
      e.push({
        elementText: "Tools",
        errorCode: k,
        errorDescription: `${i} ${r.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      e.push({
        elementText: "Tools",
        errorCode: F,
        errorDescription: `${i} ${r.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Te(s)) {
      const { errors: A } = Ie(s, r);
      e.push(...A);
    }
  }
  return { errors: e, dependentElementIds: n };
}
function Ie(o, t) {
  const e = [];
  return o.microflowReturnType.$Type !== "DataTypes$StringType" && e.push({
    elementText: "Tools",
    errorCode: N,
    errorDescription: `Microflow ${t.document.qualifiedName} must return a String.`,
    severity: "error"
  }), te(o) && e.push({
    elementText: "Tools",
    errorCode: L,
    errorDescription: `Microflow ${t.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
const be = (o) => ({
  check: async (t) => {
    const e = await Me(o, t), n = await ve(o, t);
    return {
      errors: [...e.errors, ...n.errors],
      dependentElementIds: [...e.dependentElementIds, ...n.dependentElementIds]
    };
  },
  reservedErrorCodes: Ae
});
async function Me(o, t) {
  const e = [], n = [];
  if (!t.endpoint)
    return e.push({
      errorCode: V,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: e, dependentElementIds: n };
  n.push(t.endpoint.documentId);
  const r = await E(o, t.endpoint.documentId);
  return r ? r.excluded ? e.push({
    errorCode: z,
    errorDescription: `The constant ${t.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : p(r) || e.push({
    errorCode: G,
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
async function ve(o, t) {
  var s;
  const e = [], n = [];
  if (!t.authenticationMicroflow)
    return { errors: e, dependentElementIds: n };
  n.push(t.authenticationMicroflow.documentId);
  const r = await u(
    o,
    t.authenticationMicroflow.documentId
  );
  return r ? r.excluded ? (e.push({
    errorCode: X,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: n }) : (((s = r.objectCollection.objects) == null ? void 0 : s.filter((i) => i.$Type === "Microflows$MicroflowParameterObject").length) !== 0 && e.push({
    errorCode: H,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (r.microflowReturnType.$Type !== "DataTypes$ListType" || r.microflowReturnType.entity !== m.HttpHeader) && e.push({
    errorCode: Q,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: n }) : (e.push({
    errorCode: Y,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: n });
}
const xe = (o) => ({
  check: async (t) => {
    const e = await _e(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: me
});
async function _e(o, t) {
  const e = [], n = [], r = t.providerFields;
  if (!r.key)
    return e.push({
      errorCode: j,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: e, dependentElementIds: n };
  n.push(r.key.documentId);
  const s = await E(o, r.key.documentId);
  return s ? s.excluded ? e.push({
    errorCode: $,
    errorDescription: `The constant ${r.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : p(s) || e.push({
    errorCode: W,
    errorDescription: `The constant ${r.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : e.push({
    errorCode: J,
    errorDescription: `The constant ${r.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: e, dependentElementIds: n };
}
const Be = (o) => ({
  check: async (t) => {
    const e = await ke(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: ue
});
async function ke(o, t) {
  const e = [], n = [], r = t.providerFields;
  if (!r.key)
    return e.push({
      errorCode: P,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: e, dependentElementIds: n };
  n.push(r.key.documentId);
  const s = await E(o, r.key.documentId);
  return s ? s.excluded ? e.push({
    errorCode: K,
    errorDescription: `The constant ${r.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : p(s) || e.push({
    errorCode: U,
    errorDescription: `The constant ${r.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : e.push({
    errorCode: S,
    errorDescription: `The constant ${r.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: e, dependentElementIds: n };
}
const Fe = [
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
], Ne = [
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
function Le() {
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
const We = (o, t) => async (e) => {
  try {
    await o.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (n) {
    await o.ui.notifications.show({
      title: "Failed to save document",
      message: n.message
    });
  }
};
async function $e(o, t, e) {
  const n = e.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], r = e.userPrompt ? e.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], s = t === ce, i = [...n, ...r];
  if (i.length === 0)
    return Promise.resolve([]);
  const A = i.map((d) => d.replace(/\{\{|\}\}/g, "")), re = [...new Set(A)], ne = e.variables, se = re.map((d) => ne.find((ae) => ae.key === d) || {
    key: d,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), ie = Pe(se, s);
  return Se(o, ie, e);
}
const Ze = (o) => o.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function Pe(o, t) {
  const e = t ? Ne : Fe;
  return o.map((n, r) => ({
    ...n,
    backgroundColor: e[r % e.length][0],
    borderColor: e[r % e.length][1]
  }));
}
async function Se(o, t, e) {
  const n = await Ue(o, e), r = await oe(e, o);
  return t.map((s) => {
    const i = r.includes(s.key);
    return {
      ...s,
      isAttributeInEntity: n === !1 || i
    };
  });
}
const Ue = async (o, t) => t.entity ? await c(o, t.entity.qualifiedName) !== void 0 : !0, et = async (o, t) => t.variables.length === 0 ? [] : !t.entity || !await c(o, t.entity.qualifiedName) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), oe = async (o, t) => {
  if (!o.entity)
    return [];
  const e = await c(t, o.entity.qualifiedName);
  return e ? (await Z(t, e)).sort() : [];
}, tt = async (o, t) => (await oe(t, o)).filter((n) => !t.variables.find((r) => r.key === n));
function Ke() {
  return {
    protocolVersion: ye
  };
}
const ot = (o, t) => async (e) => {
  const n = O(o);
  try {
    await o.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (r) {
    n.error("Failed to save consumed MCP service document:", r), await o.ui.notifications.show({
      title: "Failed to save consumed MCP service document.",
      message: r.message
    });
  }
}, rt = "extension/agent-editor", R = "agenteditor.agent", g = "agenteditor.model", w = "agenteditor.consumedMCPService", h = "agenteditor.knowledgebase";
class Ve {
  async loaded(t) {
    const e = de(t), n = O(e);
    try {
      await e.app.model.customBlobDocuments.registerDocumentType({
        type: R,
        readableTypeName: "Agent",
        defaultContent: Le(),
        consistencyCheckRegistration: Re(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: R,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: C,
        iconDark: C
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: g,
        readableTypeName: "Model",
        defaultContent: y(),
        consistencyCheckRegistration: Be(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: g,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: f,
        iconDark: f
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: w,
        readableTypeName: "Consumed MCP service",
        defaultContent: Ke(),
        consistencyCheckRegistration: be(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: w,
        editorKind: "tab",
        editorEntryPoint: "consumedMCPServiceEdit",
        iconLight: T,
        iconDark: T
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: h,
        readableTypeName: "Knowledge base",
        defaultContent: y(),
        consistencyCheckRegistration: xe(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: h,
        editorKind: "tab",
        editorEntryPoint: "knowledgebaseEdit",
        iconLight: D,
        iconDark: D
      });
    } catch (r) {
      throw n.error("Error during extension initialization:", r), await e.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${r.message}`
      ), r;
    }
  }
}
const nt = new Ve();
export {
  je as A,
  nt as B,
  m as C,
  pe as M,
  a as T,
  Se as a,
  T as b,
  $e as c,
  Ze as d,
  c as e,
  Ee as f,
  l as g,
  tt as h,
  Ue as i,
  et as j,
  D as k,
  rt as l,
  g as m,
  Qe as n,
  Le as o,
  u as p,
  He as q,
  Ke as r,
  ot as s,
  fe as t,
  We as u,
  Ye as v,
  w,
  Xe as x,
  h as y,
  Je as z
};
//# sourceMappingURL=index-7JQNP03H.js.map
