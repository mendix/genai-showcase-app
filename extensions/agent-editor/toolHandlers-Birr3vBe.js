import { y as T, r as p, w as c, F as I, H as $, S as P } from "./Icon-DL4Zg1xv.js";
import { y as k, g as A, C as j } from "./genAICommonsEntities-B71R1rm7.js";
import { T as y, p as E } from "./index-CQcFpK0H.js";
const S = async (e, t, o) => (await e.app.model.customBlobDocuments.getDocumentsOfType(o)).matchingDocumentsInfo.find((n) => n.moduleName + "." + n.name === t), Z = async (e, t, o) => {
  if (!await S(e, t.qualifiedName, o))
    return await e.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await e.ui.editors.editDocument(t.documentId);
}, N = T.div`
    position: relative;
    width: 100%;
`, R = T(k)`
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
  onChange: o,
  description: l,
  readOnly: n = !1,
  rows: s = 1,
  validate: r,
  className: g
}) => {
  const f = p.useRef(null), h = (m) => {
    m.style.height = "auto", m.style.height = m.scrollHeight + 2 + "px";
  }, v = (m) => {
    o && o(m);
  };
  return p.useEffect(() => {
    var b;
    const m = (b = f.current) == null ? void 0 : b.querySelector("textarea");
    m && h(m);
  }, [t]), /* @__PURE__ */ c.jsx(N, { ref: f, className: g, children: /* @__PURE__ */ c.jsx(
    R,
    {
      value: t,
      onChange: v,
      description: l,
      isReadOnly: n,
      "aria-label": e,
      rows: s,
      validate: r
    }
  ) });
}, O = T(z).withConfig({
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
`, B = T.div`
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
`, _ = ({
  label: e,
  ariaLabel: t,
  value: o,
  onChange: l,
  readOnly: n = !1,
  defaultHeightRows: s,
  highlightRules: r,
  validate: g
}) => {
  const f = p.useRef(null), h = p.useRef(null), [v, m] = p.useState(0), b = s || 5, C = r && r.length > 0, q = () => {
    if (!C) return null;
    const a = [];
    r.forEach((u, x) => {
      Array.from(o.matchAll(u.pattern)).forEach((w) => {
        w.index !== void 0 && a.push({
          start: w.index,
          end: w.index + w[0].length,
          text: w[0],
          style: u.style,
          ruleIndex: x
        });
      });
    }), a.sort((u, x) => u.start - x.start);
    const d = [];
    let i = 0;
    return a.forEach((u, x) => {
      u.start > i && d.push(
        /* @__PURE__ */ c.jsx("span", { children: o.slice(i, u.start) }, `text-${i}-${u.start}`)
      ), u.start >= i && (d.push(
        /* @__PURE__ */ c.jsx("span", { style: u.style, children: u.text }, `placeholder-${u.ruleIndex}-${x}`)
      ), i = u.end);
    }), i < o.length && d.push(/* @__PURE__ */ c.jsx("span", { children: o.slice(i) }, `text-${i}-end`)), d;
  }, D = p.useCallback(() => {
    var d;
    const a = (d = f.current) == null ? void 0 : d.querySelector("textarea");
    if (a) {
      const i = a.offsetWidth - a.clientWidth;
      m(i);
    }
  }, []), M = p.useCallback(() => {
    var d;
    const a = (d = f.current) == null ? void 0 : d.querySelector("textarea");
    if (a && h.current) {
      const i = a.scrollTop;
      h.current.style.setProperty("--scroll-offset", `-${i}px`);
    }
  }, []);
  return p.useEffect(() => {
    var d;
    const a = (d = f.current) == null ? void 0 : d.querySelector("textarea");
    if (a) {
      D();
      const i = new ResizeObserver(D);
      return i.observe(a), a.addEventListener("scroll", M), () => {
        i.disconnect(), a.removeEventListener("scroll", M);
      };
    }
  }, [M, D]), /* @__PURE__ */ c.jsxs(I, { children: [
    e && /* @__PURE__ */ c.jsx($, { children: /* @__PURE__ */ c.jsx(P, { children: e }) }),
    /* @__PURE__ */ c.jsx($, { fullWidth: !0, children: /* @__PURE__ */ c.jsxs(W, { ref: f, children: [
      C && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(F, {}),
        /* @__PURE__ */ c.jsx(B, { ref: h, style: { paddingRight: `${2 + v}px` }, children: q() })
      ] }),
      /* @__PURE__ */ c.jsx(
        O,
        {
          ariaLabel: t,
          value: o,
          readOnly: n,
          onChange: l,
          rows: b,
          hasHighlighting: C,
          validate: g
        }
      )
    ] }) })
  ] });
};
function H(e) {
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
function Y(e) {
  return {
    ...H(e),
    collectionIdentifier: "",
    maxResults: 5,
    minSimilarity: 0.5
  };
}
const L = async (e, t, o) => {
  if (e.toolType !== y.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const l = o.tools;
  return !e.document || !e.document.qualifiedName ? "Consumed MCP service must be selected for MCP tool." : await S(
    t,
    e.document.qualifiedName,
    E
  ) ? l && l.some(
    (s) => {
      var r;
      return s.toolType === y.MCP && s.document.documentId === ((r = e.document) == null ? void 0 : r.documentId) && s.id !== e.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, G = async (e, t) => {
  if (e.toolType !== y.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  const o = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], l = [j.Request, j.Tool];
  if (!e.document || !e.document.qualifiedName || e.document.qualifiedName.trim() === "")
    return "Microflow must be selected for Microflow tool.";
  const n = await A(
    t,
    e.document.qualifiedName
  );
  if (n === null)
    return "Selected microflow does not exist.";
  if (n.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (n.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const s = n.objectCollection.objects;
  if (s) {
    for (const r of s)
      if (r.$Type === "Microflows$MicroflowParameterObject") {
        if (o.includes(r.variableType.$Type))
          continue;
        if (r.variableType.$Type === "DataTypes$ObjectType" && l.includes(r.variableType.entity))
          continue;
        return `Tool microflow parameter "${r.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
  return !0;
}, J = async (e, t, o, l) => {
  const n = o.tools, s = o.knowledgebaseTools;
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
      if (n && n.some((r) => r.name === t.name && r.id !== t.id))
        return "Tool name must be unique.";
      if (s && s.some((r) => r.name === t.name))
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
        return await G(t, l);
      if (t.toolType === y.MCP)
        return await L(t, l, o);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, X = async (e, t) => {
  const o = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: t }
  });
  if (o.status === "ok")
    return {
      qualifiedName: o.selected.module + "." + o.selected.name,
      documentId: o.selected.id
    };
  if (o.status === "none")
    return {
      qualifiedName: "",
      documentId: ""
    };
};
export {
  _ as T,
  Z as a,
  X as b,
  H as c,
  Y as d,
  S as g,
  J as h
};
//# sourceMappingURL=toolHandlers-Birr3vBe.js.map
