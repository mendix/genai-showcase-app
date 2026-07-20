import { g as l } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { M as d } from "./studioPro-BAnarQ8w.js";
const a = {
  Microflow: "Microflow",
  MCP: "MCP"
}, y = {
  Auto: "Auto",
  None: "None",
  Tool: "Tool",
  Any: "Any"
}, c = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, p = async (e, t) => {
  const o = await s(e, t);
  if (!o)
    return await e.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await e.ui.editors.editDocument({ id: o.$ID });
}, s = async (e, t) => {
  if (t.documentId)
    try {
      const o = await e.app.model.microflows.load(
        d,
        t.documentId
      );
      return o && o.name === t.qualifiedName.split(".")[1] ? o : void 0;
    } catch {
      return;
    }
};
function u(e) {
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
function w(e) {
  return {
    ...u(e),
    collectionIdentifier: ""
  };
}
const M = async (e, t, o) => {
  if (e.toolType !== a.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const r = o.tools;
  if (!e.document || !e.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const n = await l(t, e.document);
  return n ? n.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : r && r.some(
    (i) => i.toolType === a.MCP && i.document.documentId === e.document?.documentId && i.id !== e.id
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, C = async (e, t) => {
  if (e.toolType !== a.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!e.document || !e.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const o = await s(t, e.document);
  if (!o)
    return "Selected microflow does not exist.";
  if (o.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (o.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const r = m(o);
  return r || !0;
}, m = (e) => {
  const t = [c.Request, c.Tool], o = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], r = e.objectCollection.objects;
  if (r) {
    for (const n of r)
      if (n.$Type === "Microflows$MicroflowParameterObject") {
        if (o.includes(n.variableType.$Type))
          continue;
        if (n.variableType.$Type === "DataTypes$ObjectType" && t.includes(n.variableType.entity))
          continue;
        return `Tool microflow parameter "${n.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
}, b = async (e, t, o) => {
  let r;
  return t === a.MCP ? r = await l(e, o) : t === a.Microflow && (r = await s(e, o)), r;
}, v = (e) => {
  switch (e) {
    case a.Microflow:
      return "Microflow";
    case a.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, I = (e) => "microflowActionInfo" in e;
export {
  c as C,
  y as T,
  a,
  w as b,
  u as c,
  M as d,
  b as e,
  v as f,
  s as g,
  p as h,
  I as i,
  m as j,
  C as v
};
