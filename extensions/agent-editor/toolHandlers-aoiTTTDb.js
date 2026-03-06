import { y as h, r as p, w as l, J as P, K as v, S as k } from "./Icon-k-qLBgpy.js";
import { T as A } from "./TextAreaAutogrow-rpVIRGA1.js";
import { g as E, C } from "./genAICommonsEntities-CrtcTnt0.js";
import { T as m, p as N } from "./index-TCgliIVb.js";
const M = async (e, t, r) => (await e.app.model.customBlobDocuments.getDocumentsOfType(r)).find((s) => s.moduleName + "." + s.name === t), U = async (e, t, r) => {
  if (!await M(e, t.qualifiedName, r))
    return await e.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await e.ui.editors.editDocument(t.documentId);
}, I = h(A).withConfig({
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
`, R = h.div`
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
`, z = h.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`, O = h.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, V = ({
  label: e,
  ariaLabel: t,
  value: r,
  onChange: u,
  readOnly: s = !1,
  defaultHeightRows: a,
  highlightRules: d,
  validate: D
}) => {
  const T = p.useRef(null), w = p.useRef(null), [$, j] = p.useState(0), S = a || 5, x = d && d.length > 0, q = () => {
    if (!x) return null;
    const o = [];
    d.forEach((c, f) => {
      Array.from(r.matchAll(c.pattern)).forEach((y) => {
        y.index !== void 0 && o.push({
          start: y.index,
          end: y.index + y[0].length,
          text: y[0],
          style: c.style,
          ruleIndex: f
        });
      });
    }), o.sort((c, f) => c.start - f.start);
    const i = [];
    let n = 0;
    return o.forEach((c, f) => {
      c.start > n && i.push(
        /* @__PURE__ */ l.jsx("span", { children: r.slice(n, c.start) }, `text-${n}-${c.start}`)
      ), c.start >= n && (i.push(
        /* @__PURE__ */ l.jsx("span", { style: c.style, children: c.text }, `placeholder-${c.ruleIndex}-${f}`)
      ), n = c.end);
    }), n < r.length && i.push(/* @__PURE__ */ l.jsx("span", { children: r.slice(n) }, `text-${n}-end`)), i;
  }, b = p.useCallback(() => {
    var i;
    const o = (i = T.current) == null ? void 0 : i.querySelector("textarea");
    if (o) {
      const n = o.offsetWidth - o.clientWidth;
      j(n);
    }
  }, []), g = p.useCallback(() => {
    var i;
    const o = (i = T.current) == null ? void 0 : i.querySelector("textarea");
    if (o && w.current) {
      const n = o.scrollTop;
      w.current.style.setProperty("--scroll-offset", `-${n}px`);
    }
  }, []);
  return p.useEffect(() => {
    var i;
    const o = (i = T.current) == null ? void 0 : i.querySelector("textarea");
    if (o) {
      b();
      const n = new ResizeObserver(b);
      return n.observe(o), o.addEventListener("scroll", g), () => {
        n.disconnect(), o.removeEventListener("scroll", g);
      };
    }
  }, [g, b]), /* @__PURE__ */ l.jsxs(P, { children: [
    e && /* @__PURE__ */ l.jsx(v, { children: /* @__PURE__ */ l.jsx(k, { children: e }) }),
    /* @__PURE__ */ l.jsx(v, { fullWidth: !0, children: /* @__PURE__ */ l.jsxs(z, { ref: T, children: [
      x && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(O, {}),
        /* @__PURE__ */ l.jsx(R, { ref: w, style: { paddingRight: `${2 + $}px` }, children: q() })
      ] }),
      /* @__PURE__ */ l.jsx(
        I,
        {
          ariaLabel: t,
          value: r,
          readOnly: s,
          onChange: u,
          rows: S,
          hasHighlighting: x,
          validate: D
        }
      )
    ] }) })
  ] });
};
function Z(e) {
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
const B = async (e, t, r) => {
  if (e.toolType !== m.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const u = r.tools;
  return !e.document || !e.document.qualifiedName ? "Consumed MCP service must be selected for MCP tool." : await M(
    t,
    e.document.qualifiedName,
    N
  ) ? u && u.some(
    (a) => {
      var d;
      return a.toolType === m.MCP && a.document.documentId === ((d = e.document) == null ? void 0 : d.documentId) && a.id !== e.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, W = async (e, t) => {
  if (e.toolType !== m.Microflow)
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
  ], u = [C.Request, C.Tool];
  if (!e.document || !e.document.qualifiedName || e.document.qualifiedName.trim() === "")
    return "Microflow must be selected for Microflow tool.";
  const s = await E(
    t,
    e.document.qualifiedName
  );
  if (s === null)
    return "Selected microflow does not exist.";
  if (s.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (s.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const a = s.objectCollection.objects;
  if (a) {
    for (const d of a)
      if (d.$Type === "Microflows$MicroflowParameterObject") {
        if (r.includes(d.variableType.$Type))
          continue;
        if (d.variableType.$Type === "DataTypes$ObjectType" && u.includes(d.variableType.entity))
          continue;
        return `Tool microflow parameter "${d.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
  return !0;
}, _ = async (e, t, r, u) => {
  const s = r.tools;
  switch (e) {
    case "name":
      if (!t.toolType || t.toolType === m.MCP)
        break;
      if (!t.name || t.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(t.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (t.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (s && s.some((a) => a.name === t.name && a.id !== t.id))
        return "Tool name must be unique.";
      break;
    case "description": {
      if (!t.toolType || t.toolType === m.MCP)
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
      if (t.toolType === m.Microflow)
        return await W(t, u);
      if (t.toolType === m.MCP)
        return await B(t, u, r);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, J = async (e, t) => {
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
  V as T,
  U as a,
  J as b,
  Z as c,
  M as g,
  _ as h
};
//# sourceMappingURL=toolHandlers-aoiTTTDb.js.map
