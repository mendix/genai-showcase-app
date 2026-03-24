import { y as T, r as p, w as i, F as P, H as D, S as k } from "./Icon-CjmU6z_u.js";
import { y as A, g as E, C as j } from "./MicroflowIcon-RtiK_mVp.js";
import { T as y } from "./index-98pkSbGS.js";
const I = async (e, t) => {
  const r = await e.app.model.customBlobDocuments.getDocumentById(t);
  if (r !== void 0 && "document" in r)
    return r.document;
}, _ = async (e, t) => {
  if (!await I(e, t.documentId))
    return await e.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await e.ui.editors.editDocument(t.documentId);
}, q = T.div`
    position: relative;
    width: 100%;
`, R = T(A)`
    width: 100%;

    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: auto;
        padding: 3px 4px;
    }
`, z = ({
  ariaLabel: e,
  value: t,
  onChange: r,
  description: o,
  readOnly: n = !1,
  rows: u = 1,
  validate: c,
  className: g
}) => {
  const f = p.useRef(null), h = (m) => {
    m.style.height = "auto", m.style.height = m.scrollHeight + 2 + "px";
  }, v = (m) => {
    r && r(m);
  };
  return p.useEffect(() => {
    var b;
    const m = (b = f.current) == null ? void 0 : b.querySelector("textarea");
    m && h(m);
  }, [t]), /* @__PURE__ */ i.jsx(q, { ref: f, className: g, children: /* @__PURE__ */ i.jsx(
    R,
    {
      value: t,
      onChange: v,
      description: o,
      isReadOnly: n,
      "aria-label": e,
      rows: u,
      validate: c
    }
  ) });
}, B = T(z).withConfig({
  shouldForwardProp: (e) => !["hasHighlighting"].includes(e)
})`
    width: 100%;
    resize: vertical;
    & textarea {
        ${({ hasHighlighting: e }) => e ? `
      line-height: 155%;
      min-height: calc(1.55em * 5 + 8px);
      background-color: transparent;
      color: transparent;
      caret-color: black;
      
      &::selection {
        background-color: rgba(0, 123, 255, 0.3) !important;
      }
    ` : ""}
        position: relative;
        z-index: 1;
    }
`, O = T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 3px;
    width: 100%;
    padding: 4px;
    pointer-events: none;
    font-family: inherit;
    font-size: inherit;
    line-height: 155%;
    margin: inherit;
    border: 1px solid transparent;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow: visible;
    z-index: 0;
    transform: translateY(var(--scroll-offset, 0px));
`, W = T.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`, F = T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, Y = ({
  label: e,
  ariaLabel: t,
  value: r,
  onChange: o,
  readOnly: n = !1,
  defaultHeightRows: u,
  highlightRules: c,
  validate: g
}) => {
  const f = p.useRef(null), h = p.useRef(null), [v, m] = p.useState(0), b = u || 5, C = c && c.length > 0, S = () => {
    if (!C) return null;
    const s = [];
    c.forEach((d, x) => {
      Array.from(r.matchAll(d.pattern)).forEach((w) => {
        w.index !== void 0 && s.push({
          start: w.index,
          end: w.index + w[0].length,
          text: w[0],
          style: d.style,
          ruleIndex: x
        });
      });
    }), s.sort((d, x) => d.start - x.start);
    const l = [];
    let a = 0;
    return s.forEach((d, x) => {
      d.start > a && l.push(
        /* @__PURE__ */ i.jsx("span", { children: r.slice(a, d.start) }, `text-${a}-${d.start}`)
      ), d.start >= a && (l.push(
        /* @__PURE__ */ i.jsx("span", { style: d.style, children: d.text }, `placeholder-${d.ruleIndex}-${x}`)
      ), a = d.end);
    }), a < r.length && l.push(/* @__PURE__ */ i.jsx("span", { children: r.slice(a) }, `text-${a}-end`)), l;
  }, M = p.useCallback(() => {
    var l;
    const s = (l = f.current) == null ? void 0 : l.querySelector("textarea");
    if (s) {
      const a = s.offsetWidth - s.clientWidth;
      m(a);
    }
  }, []), $ = p.useCallback(() => {
    var l;
    const s = (l = f.current) == null ? void 0 : l.querySelector("textarea");
    if (s && h.current) {
      const a = s.scrollTop;
      h.current.style.setProperty("--scroll-offset", `-${a}px`);
    }
  }, []);
  return p.useEffect(() => {
    var l;
    const s = (l = f.current) == null ? void 0 : l.querySelector("textarea");
    if (s) {
      M();
      const a = new ResizeObserver(M);
      return a.observe(s), s.addEventListener("scroll", $), () => {
        a.disconnect(), s.removeEventListener("scroll", $);
      };
    }
  }, [$, M]), /* @__PURE__ */ i.jsxs(P, { children: [
    e && /* @__PURE__ */ i.jsx(D, { children: /* @__PURE__ */ i.jsx(k, { children: e }) }),
    /* @__PURE__ */ i.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ i.jsxs(W, { ref: f, children: [
      C && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(F, {}),
        /* @__PURE__ */ i.jsx(O, { ref: h, style: { paddingRight: `${2 + v}px` }, children: S() })
      ] }),
      /* @__PURE__ */ i.jsx(
        B,
        {
          ariaLabel: t,
          value: r,
          readOnly: n,
          onChange: o,
          rows: b,
          hasHighlighting: C,
          validate: g
        }
      )
    ] }) })
  ] });
};
function N(e) {
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
function J(e) {
  return {
    ...N(e),
    collectionIdentifier: ""
  };
}
const H = async (e, t, r) => {
  if (e.toolType !== y.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const o = r.tools;
  if (!e.document || !e.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const n = await I(t, e.document.documentId);
  return n ? n.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : o && o.some(
    (u) => {
      var c;
      return u.toolType === y.MCP && u.document.documentId === ((c = e.document) == null ? void 0 : c.documentId) && u.id !== e.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, L = async (e, t) => {
  if (e.toolType !== y.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!e.document || !e.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const r = await E(t, e.document.documentId);
  if (r === null)
    return "Selected microflow does not exist.";
  if (r.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (r.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const o = G(r);
  return o || !0;
}, G = (e) => {
  const t = [j.Request, j.Tool], r = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], o = e.objectCollection.objects;
  if (o) {
    for (const n of o)
      if (n.$Type === "Microflows$MicroflowParameterObject") {
        if (r.includes(n.variableType.$Type))
          continue;
        if (n.variableType.$Type === "DataTypes$ObjectType" && t.includes(n.variableType.entity))
          continue;
        return `Tool microflow parameter "${n.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
}, Q = async (e, t, r, o) => {
  const n = r.tools, u = r.knowledgebaseTools;
  switch (e) {
    case "name":
      if (!t.toolType || t.toolType === y.MCP)
        break;
      if (!t.name || t.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (t.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (n && n.some((c) => c.name === t.name && c.id !== t.id))
        return "Tool name must be unique.";
      if (u && u.some((c) => c.name === t.name))
        return "This name must be unique. It is already used for a Knowledge base for this agent, please choose a different name.";
      break;
    case "description": {
      if (!t.toolType || t.toolType === y.MCP)
        break;
      if (!t.description || t.description.trim() === "")
        return "Tool description cannot be empty.";
      if (t.description.length > 4096)
        return "Tool description cannot exceed 4096 characters.";
      break;
    }
    case "toolType": {
      if (!t.toolType)
        return "Tool type cannot be empty.";
      break;
    }
    case "document": {
      if (t.toolType === y.Microflow)
        return await L(t, o);
      if (t.toolType === y.MCP)
        return await H(t, o, r);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, X = async (e, t) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: t }
  });
  if (r.status === "ok")
    return {
      qualifiedName: r.selected.module + "." + r.selected.name,
      documentId: r.selected.id
    };
  if (r.status === "none")
    return {
      qualifiedName: "",
      documentId: ""
    };
};
export {
  Y as T,
  _ as a,
  X as b,
  N as c,
  J as d,
  I as g,
  Q as h
};
//# sourceMappingURL=toolHandlers-Dh0W5--3.js.map
