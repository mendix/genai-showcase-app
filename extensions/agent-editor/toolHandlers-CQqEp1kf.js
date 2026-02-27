import { y as T, r as m, w as l, J as q, K as g, S as k } from "./TextInputWithIcon-Bxcjz2pl.js";
import { T as A } from "./TextAreaAutogrow-uWcxhEjx.js";
import { g as N, C as v } from "./genAICommonsEntities-Dtcj_rDj.js";
import { l as P } from "./index-DMt7dhDX.js";
const C = async (e, t, r) => (await e.app.model.customBlobDocuments.getDocumentsOfType(r)).find((s) => s.moduleName + "." + s.name === t), Q = async (e, t, r) => {
  if (!await C(e, t.qualifiedName, r))
    return await e.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await e.ui.editors.editDocument(t.documentId);
}, E = T(A).withConfig({
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
`, I = T.div`
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
`, R = T.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`, z = T.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, U = ({
  label: e,
  ariaLabel: t,
  value: r,
  onChange: u,
  readOnly: s = !1,
  defaultHeightRows: i,
  highlightRules: d,
  validate: D
}) => {
  const y = m.useRef(null), h = m.useRef(null), [$, M] = m.useState(0), j = i || 5, x = d && d.length > 0, S = () => {
    if (!x) return null;
    const n = [];
    d.forEach((c, p) => {
      Array.from(r.matchAll(c.pattern)).forEach((f) => {
        f.index !== void 0 && n.push({
          start: f.index,
          end: f.index + f[0].length,
          text: f[0],
          style: c.style,
          ruleIndex: p
        });
      });
    }), n.sort((c, p) => c.start - p.start);
    const a = [];
    let o = 0;
    return n.forEach((c, p) => {
      c.start > o && a.push(
        /* @__PURE__ */ l.jsx("span", { children: r.slice(o, c.start) }, `text-${o}-${c.start}`)
      ), c.start >= o && (a.push(
        /* @__PURE__ */ l.jsx("span", { style: c.style, children: c.text }, `placeholder-${c.ruleIndex}-${p}`)
      ), o = c.end);
    }), o < r.length && a.push(/* @__PURE__ */ l.jsx("span", { children: r.slice(o) }, `text-${o}-end`)), a;
  }, b = m.useCallback(() => {
    var a;
    const n = (a = y.current) == null ? void 0 : a.querySelector("textarea");
    if (n) {
      const o = n.offsetWidth - n.clientWidth;
      M(o);
    }
  }, []), w = m.useCallback(() => {
    var a;
    const n = (a = y.current) == null ? void 0 : a.querySelector("textarea");
    if (n && h.current) {
      const o = n.scrollTop;
      h.current.style.setProperty("--scroll-offset", `-${o}px`);
    }
  }, []);
  return m.useEffect(() => {
    var a;
    const n = (a = y.current) == null ? void 0 : a.querySelector("textarea");
    if (n) {
      b();
      const o = new ResizeObserver(b);
      return o.observe(n), n.addEventListener("scroll", w), () => {
        o.disconnect(), n.removeEventListener("scroll", w);
      };
    }
  }, [w, b]), /* @__PURE__ */ l.jsxs(q, { children: [
    e && /* @__PURE__ */ l.jsx(g, { children: /* @__PURE__ */ l.jsx(k, { children: e }) }),
    /* @__PURE__ */ l.jsx(g, { fullWidth: !0, children: /* @__PURE__ */ l.jsxs(R, { ref: y, children: [
      x && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(z, {}),
        /* @__PURE__ */ l.jsx(I, { ref: h, style: { paddingRight: `${2 + $}px` }, children: S() })
      ] }),
      /* @__PURE__ */ l.jsx(
        E,
        {
          ariaLabel: t,
          value: r,
          readOnly: s,
          onChange: u,
          rows: j,
          hasHighlighting: x,
          validate: D
        }
      )
    ] }) })
  ] });
};
function V(e) {
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
const O = async (e, t, r) => {
  if (e.toolType !== "MCP")
    return !0;
  const u = r.tools;
  return !e.document || !e.document.qualifiedName ? "Consumed MCP service must be selected for MCP tool." : await C(
    t,
    e.document.qualifiedName,
    P
  ) ? u && u.some(
    (i) => {
      var d;
      return i.toolType === "MCP" && i.document.documentId === ((d = e.document) == null ? void 0 : d.documentId) && i.id !== e.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, B = async (e, t) => {
  if (e.toolType !== "Microflow")
    return !0;
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
  ], u = [v.Request, v.Tool];
  if (e.toolType === "Microflow" && (!e.document || !e.document.qualifiedName || e.document.qualifiedName.trim() === ""))
    return "Microflow must be selected for Microflow tool.";
  const s = await N(
    t,
    e.document.qualifiedName || ""
  );
  if (s === null)
    return "Selected microflow does not exist.";
  if (s.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (s.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const i = s.objectCollection.objects;
  if (i) {
    for (const d of i)
      if (d.$Type === "Microflows$MicroflowParameterObject") {
        if (r.includes(d.variableType.$Type))
          continue;
        if (d.variableType.$Type === "DataTypes$ObjectType" && u.includes(d.variableType.entity))
          continue;
        return `Tool microflow parameter "${d.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
  return !0;
}, Z = async (e, t, r, u) => {
  const s = r.tools;
  switch (e) {
    case "name":
      if (!t.toolType || t.toolType === "MCP")
        break;
      if (!t.name || t.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (t.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (s && s.some((i) => i.name === t.name && i.id !== t.id))
        return "Tool name must be unique.";
      break;
    case "description": {
      if (!t.toolType || t.toolType === "MCP")
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
      if (t.toolType === "Microflow")
        return await B(t, u);
      if (t.toolType === "MCP")
        return await O(t, u, r);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, _ = async (e, t) => {
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
  U as T,
  Q as a,
  _ as b,
  V as c,
  C as g,
  Z as h
};
//# sourceMappingURL=toolHandlers-CQqEp1kf.js.map
