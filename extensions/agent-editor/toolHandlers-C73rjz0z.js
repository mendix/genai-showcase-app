import { y as T, r as p, w as i, F as P, H as $, S as A } from "./Icon-DL4Zg1xv.js";
import { y as E, g as k, C as j } from "./genAICommonsEntities-B71R1rm7.js";
import { T as y, p as I } from "./index-CQcFpK0H.js";
const S = async (e, t, r) => (await e.app.model.customBlobDocuments.getDocumentsOfType(r)).matchingDocumentsInfo.find((o) => o.moduleName + "." + o.name === t), Z = async (e, t, r) => {
  if (!await S(e, t.qualifiedName, r))
    return await e.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await e.ui.editors.editDocument(t.documentId);
}, N = T.div`
    position: relative;
    width: 100%;
`, R = T(E)`
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
  description: l,
  readOnly: o = !1,
  rows: n = 1,
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
  }, [t]), /* @__PURE__ */ i.jsx(N, { ref: f, className: g, children: /* @__PURE__ */ i.jsx(
    R,
    {
      value: t,
      onChange: v,
      description: l,
      isReadOnly: o,
      "aria-label": e,
      rows: n,
      validate: c
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
  value: r,
  onChange: l,
  readOnly: o = !1,
  defaultHeightRows: n,
  highlightRules: c,
  validate: g
}) => {
  const f = p.useRef(null), h = p.useRef(null), [v, m] = p.useState(0), b = n || 5, C = c && c.length > 0, q = () => {
    if (!C) return null;
    const s = [];
    c.forEach((u, x) => {
      Array.from(r.matchAll(u.pattern)).forEach((w) => {
        w.index !== void 0 && s.push({
          start: w.index,
          end: w.index + w[0].length,
          text: w[0],
          style: u.style,
          ruleIndex: x
        });
      });
    }), s.sort((u, x) => u.start - x.start);
    const d = [];
    let a = 0;
    return s.forEach((u, x) => {
      u.start > a && d.push(
        /* @__PURE__ */ i.jsx("span", { children: r.slice(a, u.start) }, `text-${a}-${u.start}`)
      ), u.start >= a && (d.push(
        /* @__PURE__ */ i.jsx("span", { style: u.style, children: u.text }, `placeholder-${u.ruleIndex}-${x}`)
      ), a = u.end);
    }), a < r.length && d.push(/* @__PURE__ */ i.jsx("span", { children: r.slice(a) }, `text-${a}-end`)), d;
  }, D = p.useCallback(() => {
    var d;
    const s = (d = f.current) == null ? void 0 : d.querySelector("textarea");
    if (s) {
      const a = s.offsetWidth - s.clientWidth;
      m(a);
    }
  }, []), M = p.useCallback(() => {
    var d;
    const s = (d = f.current) == null ? void 0 : d.querySelector("textarea");
    if (s && h.current) {
      const a = s.scrollTop;
      h.current.style.setProperty("--scroll-offset", `-${a}px`);
    }
  }, []);
  return p.useEffect(() => {
    var d;
    const s = (d = f.current) == null ? void 0 : d.querySelector("textarea");
    if (s) {
      D();
      const a = new ResizeObserver(D);
      return a.observe(s), s.addEventListener("scroll", M), () => {
        a.disconnect(), s.removeEventListener("scroll", M);
      };
    }
  }, [M, D]), /* @__PURE__ */ i.jsxs(P, { children: [
    e && /* @__PURE__ */ i.jsx($, { children: /* @__PURE__ */ i.jsx(A, { children: e }) }),
    /* @__PURE__ */ i.jsx($, { fullWidth: !0, children: /* @__PURE__ */ i.jsxs(W, { ref: f, children: [
      C && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        /* @__PURE__ */ i.jsx(F, {}),
        /* @__PURE__ */ i.jsx(B, { ref: h, style: { paddingRight: `${2 + v}px` }, children: q() })
      ] }),
      /* @__PURE__ */ i.jsx(
        O,
        {
          ariaLabel: t,
          value: r,
          readOnly: o,
          onChange: l,
          rows: b,
          hasHighlighting: C,
          validate: g
        }
      )
    ] }) })
  ] });
};
function Y(e) {
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
const H = async (e, t, r) => {
  if (e.toolType !== y.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const l = r.tools;
  return !e.document || !e.document.qualifiedName ? "Consumed MCP service must be selected for MCP tool." : await S(
    t,
    e.document.qualifiedName,
    I
  ) ? l && l.some(
    (n) => {
      var c;
      return n.toolType === y.MCP && n.document.documentId === ((c = e.document) == null ? void 0 : c.documentId) && n.id !== e.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, L = async (e, t) => {
  if (e.toolType !== y.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  const r = [
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
  const o = await k(
    t,
    e.document.qualifiedName
  );
  if (o === null)
    return "Selected microflow does not exist.";
  if (o.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (o.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const n = o.objectCollection.objects;
  if (n) {
    for (const c of n)
      if (c.$Type === "Microflows$MicroflowParameterObject") {
        if (r.includes(c.variableType.$Type))
          continue;
        if (c.variableType.$Type === "DataTypes$ObjectType" && l.includes(c.variableType.entity))
          continue;
        return `Tool microflow parameter "${c.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
  return !0;
}, J = async (e, t, r, l) => {
  const o = r.tools;
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
      if (o && o.some((n) => n.name === t.name && n.id !== t.id))
        return "Tool name must be unique.";
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
        return await L(t, l);
      if (t.toolType === y.MCP)
        return await H(t, l, r);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, K = async (e, t) => {
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
  _ as T,
  Z as a,
  K as b,
  Y as c,
  S as g,
  J as h
};
//# sourceMappingURL=toolHandlers-C73rjz0z.js.map
