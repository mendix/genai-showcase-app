import { j as s } from "./jsx-runtime-CWOFuNcx.js";
import { g as u } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { M as m } from "./studioPro-BAnarQ8w.js";
const f = ({ width: e = 16, height: r = 16, className: o, style: i, stroke: t = "#535965" }) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: r,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: i,
    stroke: t,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8 10.5C9.10457 10.5 10 9.60457 10 8.5C10 7.39543 9.10457 6.5 8 6.5C6.89543 6.5 6 7.39543 6 8.5C6 9.60457 6.89543 10.5 8 10.5Z",
          stroke: t,
          strokeMiterlimit: "10"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14.5 8.5C14.5 8.5 11.59 13 8 13C4.41 13 1.5 8.5 1.5 8.5C1.5 8.5 4.41 4 8 4C11.59 4 14.5 8.5 14.5 8.5Z",
          stroke: t,
          strokeMiterlimit: "10"
        }
      )
    ]
  }
), p = ({
  width: e = 16,
  height: r = 16,
  className: o,
  style: i,
  stroke: t = "#535965"
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: r,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: i,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M14.5 8C14.5 8 11.59 12.5 8 12.5C4.41 12.5 1.5 8 1.5 8C1.5 8 4.41 3.5 8 3.5C11.59 3.5 14.5 8 14.5 8Z",
          stroke: t,
          strokeMiterlimit: "10"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
          stroke: t,
          strokeMiterlimit: "10"
        }
      ),
      /* @__PURE__ */ s.jsx("line", { x1: "1.5", y1: "14.5", x2: "14.5", y2: "1.5", stroke: t, strokeMiterlimit: "10" })
    ]
  }
), w = ({
  width: e = 16,
  height: r = 16,
  className: o,
  style: i,
  stroke: t = "#535965"
}) => /* @__PURE__ */ s.jsxs(
  "svg",
  {
    width: e,
    height: r,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: i,
    stroke: t,
    children: [
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M6 9.5H10C11.655 9.5 13 10.845 13 12.5V14.5H3V12.5C3 10.845 4.345 9.5 6 9.5Z",
          stroke: t,
          strokeMiterlimit: "10"
        }
      ),
      /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M8.5 1.5H7.5C6.67157 1.5 6 2.17157 6 3V5C6 5.82843 6.67157 6.5 7.5 6.5H8.5C9.32843 6.5 10 5.82843 10 5V3C10 2.17157 9.32843 1.5 8.5 1.5Z",
          stroke: t,
          strokeLinejoin: "round"
        }
      )
    ]
  }
), n = {
  Microflow: "Microflow",
  MCP: "MCP"
}, h = {
  Auto: "Auto",
  None: "None",
  Tool: "Tool",
  Any: "Any"
}, a = {
  HiddenForUser: "HiddenForUser",
  VisibleForUser: "VisibleForUser",
  UserConfirmationRequired: "UserConfirmationRequired"
}, x = {
  [a.HiddenForUser]: {
    caption: "Hidden for user",
    icon: p
  },
  [a.VisibleForUser]: {
    caption: "Visible for user",
    icon: f
  },
  [a.UserConfirmationRequired]: {
    caption: "User confirmation required",
    icon: w
  }
}, d = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, b = async (e, r) => {
  const o = await l(e, r);
  if (!o)
    return await e.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await e.ui.editors.editDocument({ id: o.$ID });
}, l = async (e, r) => {
  if (r.documentId)
    try {
      const o = await e.app.model.microflows.load(
        m,
        r.documentId
      );
      return o && o.name === r.qualifiedName.split(".")[1] ? o : void 0;
    } catch {
      return;
    }
};
function y(e) {
  return {
    id: crypto.randomUUID(),
    name: e || "",
    description: "",
    enabled: !0,
    toolType: "",
    document: {
      documentId: "",
      qualifiedName: ""
    },
    userAccessApproval: a.HiddenForUser
  };
}
function g(e) {
  return {
    ...y(e),
    collectionIdentifier: "",
    isVisible: !1
  };
}
const j = async (e, r, o) => {
  if (e.toolType !== n.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const i = o.tools;
  if (!e.document || !e.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const t = await u(r, e.document);
  return t ? t.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : i && i.some(
    (c) => c.toolType === n.MCP && c.document.documentId === e.document?.documentId && c.id !== e.id
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, I = async (e, r) => {
  if (e.toolType !== n.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!e.document || !e.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const o = await l(r, e.document);
  if (!o)
    return "Selected microflow does not exist.";
  if (o.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (o.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const i = T(o);
  return i || !0;
}, T = (e) => {
  const r = [d.Request, d.Tool], o = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], i = e.objectCollection.objects;
  if (i) {
    for (const t of i)
      if (t.$Type === "Microflows$MicroflowParameterObject") {
        if (o.includes(t.variableType.$Type))
          continue;
        if (t.variableType.$Type === "DataTypes$ObjectType" && r.includes(t.variableType.entity))
          continue;
        return `Tool microflow parameter "${t.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
}, P = async (e, r, o) => {
  let i;
  return r === n.MCP ? i = await u(e, o) : r === n.Microflow && (i = await l(e, o)), i;
}, U = (e) => {
  switch (e) {
    case n.Microflow:
      return "Microflow";
    case n.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, $ = (e) => "microflowActionInfo" in e;
export {
  d as C,
  h as T,
  x as U,
  a,
  n as b,
  y as c,
  g as d,
  j as e,
  P as f,
  l as g,
  b as h,
  U as i,
  $ as j,
  T as k,
  I as v
};
