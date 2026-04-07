import { i as Ee, c as b, a as fe } from "./userPreferences-CMksV11G.js";
import { j as T, k as w, R as pe, M as ye, C as f, E as Ce, o as De, p as R, d as Te, m as g } from "./modelUtils-Cwt4V4f0.js";
import { b as we } from "./knowledgebaseUtils-Daq9GrrE.js";
const O = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", At = "data:image/png;base64,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", h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADxElEQVRYCcVXb24SQRR/j0WDFhOa9AD0BvUEricotv1AqwnbRIyf7PYEhRMI34zVdPulNLFt1hO4N6A3KN/VSCKtJLL7fG9gENalzGKMk8DMvHl/fm/mN28A4D83/Jv4K3s9Evs8/lzuNJa7i/jKLGIkNivud1vb9iC7psdp+4UBIGBlHIzwYDxOOVgIwMqr6wMicABItl0+tshSxlbqxhwoulToQW8NhtnaI+t9dtBlMEcy57FHSMdfGg8CtW7wZQxAE27ok7qEuP+1kfdkvuL2XCCQHSjIXNqXZt7I90JHILmy93EwiqxvfBzDyCm/jVBqn8J8BHKIMhWREVlOBqhAGDWUDkLA0noe8pedBgo35rZUALQ3BlIbcYGDSOZYAKQ6n31N65j2CwEQ58yJT9zZMmYn3udmflfGaduCHOAwnLEOJszX47T9wgAGMLjUwdJcO22je9695La5/aICQi5iMjG57kRW/fT0TSdZe1q69eylDWG0zuR0lD1g7bz1NnGXbgFQvWK3xWnXcEkIzbuRFcTBlEpuIbvUcyjCdbaxY3bd89bhckymptkk4UhWlD6D8DAicnn0iBm/hlz1fmIImztVDzOWyoqiaA+gZ3PwgrJFLs8Ex0jkc8ESsg7lanH66zYASvPDyaGctSOTjXLVYUAVkgz5LaAwVHJZk7vA2xkQYDO8uR/4fqMr0s3tqnQzmzEJZYsvTg+9s9bh45CsVc6urr3KOPyxtCxrfNZ+LtefmbG20b0xAOvedZuzaW/sVJ0cW5+dvqtpJ3q89fS5yzqf+Ijaem1ebwRgq/zcVuUGQHEg0SlnzRx4zWu2nEW5/LKYqBcTGgHgDAPe2lV+dnf5pBvxGyA+fXVFoyYDfRLeLK0m6cRiq+lcEk4aCQcm5/Hxeeu9G5fNmxvtgDiR4mKyrUJWLmKleYH1uhGAEp8nXzkh15WQLAmI6Mgak/Ub14ujUskxuglGACDX77JTVXQYud3vyzzWRAdhjT/dDGCQy+WMABhxwPc8CehwlrUsDIq+r+ZTCESHb8uTQT9/eT4qQlMKMyazAQzLKZ9ntR2r/50ZvqQ2BLIWexdYgh2RJ7WZACiCfUT5vT9R/7dfcG2njxcnf94GCWrdu7FZn9+Fa3kXhvE4EYp+V804iJFWXPx7LvXfyuA6P0ilsRTl/wD68h6ITGrD6Okdnzs7DvhHY12ORL8LY/uJwVwAWldYnoHQHj9GemGiV0GBPg5+5L3bgk6YSNFM3wSMhaHLua/zT7MCRtTMQtYzrX7pI/5Di1/I2IUPUzivHAAAAABJRU5ErkJggg==", I = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADR0lEQVRYCeVW23HaQBS9Kx6TT9wBHYT8xdgfogO7AkMDoFRgXIGFXYBxBXYqMJlJ4DN0EHVgfg1ob87VSvYKJIHMjD+SnYF9ac85ui8t0f/e1KEG8Fxu0DI8MziVuT9V8zKY7xYgxLyiS2bt2YSK1KOqq2/+RAX2et74XQIMOT8xcwvACyJ9T+QsAHbBRE2sBU7d+QIR2Ctu1eLt7V2bXCk1VzXV8SeVhGg4aOsHJj7Ty8gyw22E9IqTnhbPssnVon/Mg8EJX8tp5YQjgxJZpxgQu3sLyCVv8yUp7SMWziK2dTUwrOozzjTlnJln/+8lwPvKTV4Zn7+ZHW8u5KSHgF44FJ5HFE7oRj1iAW74g9/z4CS8EzHxeqrbGYQRuaOfJLhyyAMh96f1uddetjRVnsDQAHBACpnAEP8WmIiXdHYUBuEG+QQBdy6Rbb25RLsEYWCTwypXo2ltmLxqv73C2LmEFe+w1knWpc+1gE2Ot7i/mVW7cmCbXAXeKbta6wdsw9/66gbkke9DcqlCEyM6fJZ9CD6y0zMzBsqQ90/4AuSR2V/JJWaW+rcOIeoFItAU8UR6Wq9bUR//bbkgj3zQDu+YdBfnYrOrQMiJ9dhgxW8u5HHMiOX8mXo0+8oQV5MsMaspAbnkyHGkWRdHMsmZw2+3s7qfd17cBvESxOKOwFCb/5QA+kQLXsKPls+99rqrTb3PJifugXxcRJ6kKoK4Z5PLOCUgDo4j+yFWDszM5Di6J9Fumx0lt3c7re5FjlSNssXGlnFmEKYeQh7L3P9Zm3htlNfY5yXIpU50pE6kcOPJbgFSTNC805VLdQqUonEpcqkTOeSCm3KBLGw2fHJ/YM1lrlyjaHRGvyqRH1M+Jz26mdU8OZtVJzYx7Tkwi5sUlOQ7gCcDXDjmSOpGfBdoJLkvKGXJ5cxOAfKQiNAvoY/afiHzuC2QfleSfjI3dYK6GL5mi6zvansJSECi8iqVTPOC6rUgKanvJRfcUgISIXZ/CLng7M4Cm21jLLcgpvJmt2EOEoDy6gqYKVLpEmuTFI0PEkBM3wVcayf3xlNELnsHx0D/eD2Os6NU9CfCDrMAUKKLCj5eGDbx7W8lwB/ey5Xsw0n/CcK/yjtfsJ29X28AAAAASUVORK5CYII=", M = "AE001", N = "AE002", B = "AE003", v = "AE004", k = "AE005", x = "AE006", L = "AE007", F = "AE008", S = "AE009", G = "AE010", q = "AE011", P = "AE012", U = "AE013", K = "AE014", z = "AE015", _ = "AE016", Re = [
  M,
  N,
  B,
  v,
  k,
  x,
  L,
  F,
  S,
  G,
  q,
  P,
  U,
  K,
  z,
  _
], V = "AE101", Y = "AE102", Q = "AE103", H = "AE104", ge = [
  V,
  Y,
  Q,
  H
], X = "AE201", J = "AE202", j = "AE203", W = "AE204", Z = "AE205", $ = "AE206", ee = "AE207", te = "AE208", Oe = [
  X,
  J,
  j,
  W,
  Z,
  $,
  ee,
  te
], oe = "AE301", ne = "AE302", re = "AE303", se = "AE304", he = [
  oe,
  ne,
  re,
  se
], u = async (o, t) => {
  try {
    const e = await o.app.model.customBlobDocuments.getDocumentById(t.documentId);
    return e !== void 0 && "document" in e && e.document.name === t.qualifiedName.split(".")[1] ? e.document : void 0;
  } catch {
    return;
  }
}, mt = async (o, t) => {
  if (!await u(o, t))
    return await o.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await o.ui.editors.editDocument(t.documentId);
}, ie = async (o, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((n) => n.name);
  const e = await ae(o, t);
  if (!e)
    return t.attributes.map((n) => n.name);
  const r = await ie(o, e);
  return t.attributes.map((n) => n.name).concat(r);
}, Ie = async (o, t) => {
  if (o.generalization.$Type === "DomainModels$NoGeneralization")
    return o.generalization.persistable;
  const e = await ae(t, o);
  if (e)
    return Ie(e, t);
}, l = async (o, t) => {
  const [e, r] = t.split(".");
  if (!e || !r)
    return;
  const n = await o.app.model.domainModels.getDomainModel(e);
  return n == null ? void 0 : n.getEntity(r);
}, ae = (o, t) => {
  const e = t.generalization;
  return l(o, e.generalization);
}, Et = async (o, t) => {
  var r;
  if (!t)
    return;
  const e = (r = await l(o, t)) == null ? void 0 : r.getContainer();
  if (!e) {
    const n = "Could not find entity: " + t;
    return await o.ui.messageBoxes.show("error", n, "This entity might have been deleted or renamed. Please update the context entity selection.");
  }
  await o.ui.editors.editDocument(e.$ID);
}, p = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, d = {
  Microflow: "Microflow",
  MCP: "MCP"
}, ft = {
  Auto: "Auto",
  None: "None",
  Tool: "Tool",
  Any: "Any"
}, pt = async (o, t) => {
  const e = await E(o, t);
  if (!e)
    return await o.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await o.ui.editors.editDocument(e.$ID);
}, E = async (o, t) => {
  if (t.documentId)
    try {
      const e = await o.app.model.microflows.loadAll((r) => r.$ID === t.documentId);
      return e[0] && e[0].name === t.qualifiedName.split(".")[1] ? e[0] : void 0;
    } catch {
      return;
    }
};
function be(o) {
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
function yt(o) {
  return {
    ...be(o),
    collectionIdentifier: ""
  };
}
const Ct = async (o, t, e) => {
  if (o.toolType !== d.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const r = e.tools;
  if (!o.document || !o.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const n = await u(t, o.document);
  return n ? n.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : r && r.some(
    (s) => {
      var i;
      return s.toolType === d.MCP && s.document.documentId === ((i = o.document) == null ? void 0 : i.documentId) && s.id !== o.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, Dt = async (o, t) => {
  if (o.toolType !== d.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!o.document || !o.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const e = await E(t, o.document);
  if (!e)
    return "Selected microflow does not exist.";
  if (e.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (e.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const r = ce(e);
  return r || !0;
}, ce = (o) => {
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
}, Me = async (o, t, e) => {
  let r;
  return t === d.MCP ? r = await u(o, e) : t === d.Microflow && (r = await E(o, e)), r;
}, Ne = (o) => {
  switch (o) {
    case d.Microflow:
      return "Microflow";
    case d.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, Be = (o) => "microflowActionInfo" in o, ve = (o) => ({
  check: async (t) => {
    const e = await ke(o, t), r = await xe(o, t), n = Le(t), s = Fe(t), i = await Se(o, t), a = await Ge(o, t);
    return {
      errors: [
        ...e.errors,
        ...r.errors,
        ...n.errors,
        ...s.errors,
        ...i.errors,
        ...a.errors
      ],
      dependentElementIds: [
        ...e.dependentElementIds,
        ...r.dependentElementIds,
        ...n.dependentElementIds,
        ...s.dependentElementIds,
        ...i.dependentElementIds,
        ...a.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: Re
});
async function ke(o, t) {
  const e = [], r = [];
  if (!t.model)
    return e.push({
      elementText: "Model",
      errorCode: M,
      errorDescription: "Model is required for an agent.",
      severity: "error"
    }), { errors: e, dependentElementIds: r };
  r.push(t.model.documentId);
  const n = await u(o, t.model);
  return n ? n.excluded && e.push({
    elementText: "Model",
    errorCode: B,
    errorDescription: `Model ${t.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : e.push({
    elementText: "Model",
    errorCode: N,
    errorDescription: `Model ${t.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: r };
}
async function xe(o, t) {
  const e = [], r = [];
  if (!t.entity)
    return t.variables.length > 0 && e.push({
      elementText: "Context entity",
      errorCode: k,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: e, dependentElementIds: [] };
  r.push(t.entity.documentId);
  const n = await l(o, t.entity.qualifiedName), s = t.variables.filter((i) => !i.isAttributeInEntity).map((i) => i.key);
  return n ? s.length > 0 && e.push({
    elementText: "Context entity",
    errorCode: L,
    errorDescription: `Variable${s.length > 1 ? "s" : ""} ${s.join(", ")} could not be found in context entity ${t.entity.qualifiedName}.`,
    severity: "warning"
  }) : e.push({
    elementText: "Context entity",
    errorCode: x,
    errorDescription: `Context entity ${t.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: r };
}
function Le(o) {
  const t = [];
  return o.userPrompt || t.push({
    elementText: "User prompt",
    errorCode: v,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
function Fe(o) {
  const t = [];
  if (o.toolChoice === "Tool")
    if (!o.toolChoiceToolName)
      t.push({
        elementText: "Tool choice",
        errorCode: K,
        errorDescription: "A specific tool must be selected when tool choice is set to 'Tool'.",
        severity: "error"
      });
    else {
      const e = o.tools.find((r) => r.name === o.toolChoiceToolName);
      e ? e.enabled || t.push({
        elementText: "Tool choice",
        errorCode: _,
        errorDescription: `Tool '${o.toolChoiceToolName}' is not active. Please activate it, or select a different tool.`,
        severity: "error"
      }) : t.push({
        elementText: "Tool choice",
        errorCode: z,
        errorDescription: `Tool '${o.toolChoiceToolName}' is not in the agent's tools list. Please update your tool selection or change the tool choice.`,
        severity: "error"
      });
    }
  return { errors: t, dependentElementIds: [] };
}
async function Se(o, t) {
  const e = [], r = [];
  for (const n of t.tools) {
    if (!n.enabled)
      continue;
    r.push(n.document.documentId);
    const s = await Me(o, n.toolType, n.document), i = Ne(n.toolType);
    if (!s)
      e.push({
        elementText: "Tools",
        errorCode: F,
        errorDescription: `${i} ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      e.push({
        elementText: "Tools",
        errorCode: S,
        errorDescription: `${i} ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Be(s)) {
      const { errors: a } = qe(s, n);
      e.push(...a);
    }
  }
  return { errors: e, dependentElementIds: r };
}
async function Ge(o, t) {
  const e = [], r = [];
  if (t.knowledgebaseTools)
    for (const n of t.knowledgebaseTools) {
      if (!n.enabled)
        continue;
      r.push(n.document.documentId);
      const s = await u(o, n.document);
      s ? s.excluded && e.push({
        elementText: "Knowledge bases",
        errorCode: U,
        errorDescription: `Knowledge base ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : e.push({
        elementText: "Knowledge bases",
        errorCode: P,
        errorDescription: `Knowledge base ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: e, dependentElementIds: r };
}
function qe(o, t) {
  const e = [];
  return o.microflowReturnType.$Type !== "DataTypes$StringType" && e.push({
    elementText: "Tools",
    errorCode: G,
    errorDescription: `Microflow ${t.document.qualifiedName} must return a String.`,
    severity: "error"
  }), ce(o) && e.push({
    elementText: "Tools",
    errorCode: q,
    errorDescription: `Microflow ${t.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
const Pe = (o) => ({
  check: async (t) => {
    const e = await Ue(o, t), r = await Ke(o, t);
    return {
      errors: [...e.errors, ...r.errors],
      dependentElementIds: [...e.dependentElementIds, ...r.dependentElementIds]
    };
  },
  reservedErrorCodes: Oe
});
async function Ue(o, t) {
  const e = [], r = [];
  if (!t.endpoint)
    return e.push({
      errorCode: X,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: e, dependentElementIds: r };
  r.push(t.endpoint.documentId);
  const n = await T(o, t.endpoint);
  return n ? n.excluded ? e.push({
    errorCode: W,
    errorDescription: `The constant ${t.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : w(n) || e.push({
    errorCode: j,
    errorDescription: `The constant ${t.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : e.push({
    errorCode: J,
    errorDescription: `The constant ${t.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: e, dependentElementIds: r };
}
async function Ke(o, t) {
  var s;
  const e = [], r = [];
  if (!t.authenticationMicroflow)
    return { errors: e, dependentElementIds: r };
  r.push(t.authenticationMicroflow.documentId);
  const n = await E(
    o,
    t.authenticationMicroflow
  );
  return n ? n.excluded ? (e.push({
    errorCode: te,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r }) : (((s = n.objectCollection.objects) == null ? void 0 : s.filter((i) => i.$Type === "Microflows$MicroflowParameterObject").length) !== 0 && e.push({
    errorCode: ee,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== p.HttpHeader) && e.push({
    errorCode: $,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r }) : (e.push({
    errorCode: Z,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r });
}
const ze = (o) => ({
  check: async (t) => {
    const e = await _e(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: he
});
async function _e(o, t) {
  const e = [], r = [], n = t.providerFields;
  if (!n.key)
    return e.push({
      errorCode: oe,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: e, dependentElementIds: r };
  r.push(n.key.documentId);
  const s = await T(o, n.key);
  return s ? s.excluded ? e.push({
    errorCode: se,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : w(s) || e.push({
    errorCode: re,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : e.push({
    errorCode: ne,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: e, dependentElementIds: r };
}
const Ve = (o) => ({
  check: async (t) => {
    const e = await Ye(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: ge
});
async function Ye(o, t) {
  const e = [], r = [], n = t.providerFields;
  if (!n.key)
    return e.push({
      errorCode: V,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: e, dependentElementIds: r };
  r.push(n.key.documentId);
  const s = await T(o, n.key);
  return s ? s.excluded ? e.push({
    errorCode: H,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : w(s) || e.push({
    errorCode: Q,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : e.push({
    errorCode: Y,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: e, dependentElementIds: r };
}
const Qe = [
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
], He = [
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
function de() {
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
function Tt() {
  return {
    $ID: "",
    name: "",
    excluded: !1,
    documentType: m,
    contents: de()
  };
}
const wt = (o, t) => async (e) => {
  try {
    await o.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (r) {
    await o.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function Rt(o, t) {
  const e = /\{\{([^}\s{]+)\}\}/g, r = t.systemPrompt.match(e) || [], n = t.userPrompt ? t.userPrompt.match(e) || [] : [], s = [...r, ...n];
  if (s.length === 0)
    return Promise.resolve([]);
  const i = s.map((A) => A.replace(/\{\{|\}\}/g, "")), a = [...new Set(i)], ue = t.variables, Ae = a.map((A) => ue.find((me) => me.key === A) || {
    key: A,
    isAttributeInEntity: !1
  });
  return Je(o, Ae, t);
}
const gt = (o, t) => o.map((e, r) => ({
  pattern: new RegExp("\\{\\{" + e.key + "\\}\\}", "g"),
  style: {
    ...Xe(r, Ee(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function Xe(o, t) {
  const e = t ? He : Qe;
  return {
    color: e[o % e.length][1],
    backgroundColor: e[o % e.length][0],
    borderColor: e[o % e.length][1]
  };
}
async function Je(o, t, e) {
  const r = await je(o, e), n = await le(e, o);
  return t.map((s) => {
    const i = n.includes(s.key);
    return {
      ...s,
      isAttributeInEntity: r === !1 || i
    };
  });
}
const je = async (o, t) => t.entity ? await l(o, t.entity.qualifiedName) !== void 0 : !0, Ot = async (o, t) => t.variables.length === 0 ? [] : !t.entity || !await l(o, t.entity.qualifiedName) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), le = async (o, t) => {
  if (!o.entity)
    return [];
  const e = await l(t, o.entity.qualifiedName);
  return e ? (await ie(t, e)).sort() : [];
}, ht = async (o, t) => (await le(t, o)).filter((r) => !t.variables.find((n) => n.key === r)), It = async (o, t, e) => {
  const r = e.reduce((i, a) => (i[a.key] = a.value, i), {}), n = {
    documentId: t,
    variables: JSON.stringify(r)
  };
  return await o.runtime.controller.executePreviewAction(
    "preview_agent_test",
    n
  );
}, bt = async (o) => {
  try {
    const t = await o.runtime.controller.executePreviewAction("preview_runtime_test", {});
    return !(typeof t == "object" && t !== null && "error" in t && t.error === pe);
  } catch {
    return !0;
  }
}, We = ["v2025_03_26", "v2024_11_05"], Ze = We[0];
function $e() {
  return {
    protocolVersion: Ze
  };
}
const Mt = (o, t) => async (e) => {
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
async function et(o, t) {
  try {
    o.app.projectChanges.addEventListener("elementsRenamed", async ({ elements: e }) => {
      await nt(o, e), await rt(o, e), await it(o, e), await st(o, e);
    });
  } catch (e) {
    t.error("Failed to set up elementsRenamed event listener", { error: e });
  }
}
function tt(o, t, e, r, n) {
  o.qualifiedName = t, e.app.model.customBlobDocuments.updateDocumentContent(r, n);
}
function ot(o, t, e) {
  const r = t.find((s) => s.documentType === ye);
  if (r) {
    const [s, i] = o.qualifiedName.split(".");
    if (r.oldName.qualifiedName === s)
      return `${r.newName.qualifiedName}.${i}`;
  }
  const n = t.find((s) => s.oldName.qualifiedName !== o.qualifiedName ? !1 : e ? e.includes(s.documentType) : !0);
  return n == null ? void 0 : n.newName.qualifiedName;
}
function c(o, t, e, r, n) {
  const s = ot(e, r, n);
  s && tt(e, s, o, t.$ID, t.contents);
}
async function nt(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(m);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document) {
      if (n.document.contents.model && c(o, n.document, n.document.contents.model, t, [
        f
      ]), n.document.contents.entity && c(o, n.document, n.document.contents.entity, t, [
        Ce
      ]), n.document.contents.tools)
        for (const s of n.document.contents.tools)
          c(o, n.document, s.document, t, [
            De,
            f
          ]);
      if (n.document.contents.knowledgebaseTools)
        for (const s of n.document.contents.knowledgebaseTools)
          c(o, n.document, s.document, t, [
            f
          ]);
    }
  }
}
async function rt(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(y);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const s = n.document.contents.providerFields;
      if (!s.key)
        continue;
      c(o, n.document, s.key, t, [R]);
    }
  }
}
async function st(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(D);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const s = n.document.contents.providerFields;
      if (!s.key)
        continue;
      c(o, n.document, s.key, t, [R]);
    }
  }
}
async function it(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(
    C
  );
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    "document" in n && n.document && n.document.contents.endpoint && c(o, n.document, n.document.contents.endpoint, t, [
      R
    ]);
  }
}
const Nt = "extension/agent-editor", m = "agenteditor.agent", y = "agenteditor.model", C = "agenteditor.consumedMCPService", D = "agenteditor.knowledgebase";
class at {
  async loaded(t) {
    const e = fe(t), r = b(e);
    try {
      et(e, r), await e.app.model.customBlobDocuments.registerDocumentType({
        type: m,
        readableTypeName: "Agent",
        defaultContent: de(),
        consistencyCheckRegistration: ve(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: m,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: O,
        iconDark: O
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: y,
        readableTypeName: "Model",
        defaultContent: Te(),
        consistencyCheckRegistration: Ve(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: y,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: g,
        iconDark: g
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: C,
        readableTypeName: "Consumed MCP service",
        defaultContent: $e(),
        consistencyCheckRegistration: Pe(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: C,
        editorKind: "tab",
        editorEntryPoint: "consumedMCPServiceEdit",
        iconLight: I,
        iconDark: I
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: D,
        readableTypeName: "Knowledge base",
        defaultContent: we(),
        consistencyCheckRegistration: ze(e)
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: D,
        editorKind: "tab",
        editorEntryPoint: "knowledgebaseEdit",
        iconLight: h,
        iconDark: h
      });
    } catch (n) {
      throw r.error("Error during extension initialization:", n), await e.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${n.message}`
      ), n;
    }
  }
}
const Bt = new at();
export {
  mt as A,
  C as B,
  p as C,
  yt as D,
  D as E,
  Dt as F,
  Ct as G,
  m as H,
  Bt as I,
  We as M,
  ft as T,
  At as a,
  Je as b,
  Rt as c,
  O as d,
  It as e,
  d as f,
  u as g,
  I as h,
  je as i,
  gt as j,
  h as k,
  l,
  y as m,
  Ie as n,
  ht as o,
  Ot as p,
  Nt as q,
  Et as r,
  Tt as s,
  bt as t,
  wt as u,
  E as v,
  pt as w,
  $e as x,
  Mt as y,
  be as z
};
