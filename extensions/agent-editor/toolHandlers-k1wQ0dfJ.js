import { z as x, r as u, w as s, J as k, K as $, S as E } from "./TextInputWithIcon-DV8OPSOf.js";
import { T as C } from "./TextAreaAutogrow-MauOAUQG.js";
import { g as z, C as v } from "./genAICommonsEntities-Bca23qfT.js";
const R = x(C).withConfig({
  shouldForwardProp: (a) => !["hasHighlighting"].includes(a)
})`
    width: 100%;
    resize: vertical;
    & textarea {
        ${({ hasHighlighting: a }) => a ? `
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
`, M = x.div`
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
`, O = x.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`, q = x.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: -1;
    border: 1px solid transparent;
`, L = ({
  label: a,
  ariaLabel: e,
  value: i,
  onChange: f,
  readOnly: c = !1,
  defaultHeightRows: d,
  highlightRules: m,
  validate: y
}) => {
  const p = u.useRef(null), l = u.useRef(null), [j, D] = u.useState(0), S = d || 5, b = m && m.length > 0, A = () => {
    if (!b) return null;
    const t = [];
    m.forEach((o, T) => {
      Array.from(i.matchAll(o.pattern)).forEach((h) => {
        h.index !== void 0 && t.push({
          start: h.index,
          end: h.index + h[0].length,
          text: h[0],
          style: o.style,
          ruleIndex: T
        });
      });
    }), t.sort((o, T) => o.start - T.start);
    const n = [];
    let r = 0;
    return t.forEach((o, T) => {
      o.start > r && n.push(
        /* @__PURE__ */ s.jsx("span", { children: i.slice(r, o.start) }, `text-${r}-${o.start}`)
      ), o.start >= r && (n.push(
        /* @__PURE__ */ s.jsx("span", { style: o.style, children: o.text }, `placeholder-${o.ruleIndex}-${T}`)
      ), r = o.end);
    }), r < i.length && n.push(/* @__PURE__ */ s.jsx("span", { children: i.slice(r) }, `text-${r}-end`)), n;
  }, w = u.useCallback(() => {
    var n;
    const t = (n = p.current) == null ? void 0 : n.querySelector("textarea");
    if (t) {
      const r = t.offsetWidth - t.clientWidth;
      D(r);
    }
  }, []), g = u.useCallback(() => {
    var n;
    const t = (n = p.current) == null ? void 0 : n.querySelector("textarea");
    if (t && l.current) {
      const r = t.scrollTop;
      l.current.style.setProperty("--scroll-offset", `-${r}px`);
    }
  }, []);
  return u.useEffect(() => {
    var n;
    const t = (n = p.current) == null ? void 0 : n.querySelector("textarea");
    if (t) {
      w();
      const r = new ResizeObserver(w);
      return r.observe(t), t.addEventListener("scroll", g), () => {
        r.disconnect(), t.removeEventListener("scroll", g);
      };
    }
  }, [g, w]), /* @__PURE__ */ s.jsxs(k, { children: [
    a && /* @__PURE__ */ s.jsx($, { children: /* @__PURE__ */ s.jsx(E, { children: a }) }),
    /* @__PURE__ */ s.jsx($, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(O, { ref: p, children: [
      b && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(q, {}),
        /* @__PURE__ */ s.jsx(M, { ref: l, style: { paddingRight: `${2 + j}px` }, children: A() })
      ] }),
      /* @__PURE__ */ s.jsx(
        R,
        {
          ariaLabel: e,
          value: i,
          readOnly: c,
          onChange: f,
          rows: S,
          hasHighlighting: b,
          validate: y
        }
      )
    ] }) })
  ] });
}, B = async (a, e, i, f) => {
  const c = await a.ui.elementSelectors.selectDocument({
    query: { elementType: f }
  });
  return c.status === "ok" ? {
    ...e,
    [i]: c.selected.module + "." + c.selected.name
  } : null;
}, H = async (a, e, i, f) => {
  const c = f.tools;
  switch (a) {
    case "name":
      if (!e.name || e.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (c && c.some((d) => d.name === e.name && d.id !== e.id))
        return "Tool name must be unique.";
      break;
    case "description": {
      if (!e.description || e.description.trim() === "")
        return "Tool description cannot be empty.";
      if (e.description.length > 4096)
        return "Tool description cannot exceed 4096 characters.";
      break;
    }
    case "microflow": {
      const d = [
        "DataTypes$StringType",
        "DataTypes$BooleanType",
        "DataTypes$IntegerType",
        "DataTypes$DecimalType",
        "DataTypes$FloatType",
        "DataTypes$DateTimeType",
        "DataTypes$VoidType",
        "DataTypes$EmptyType",
        "DataTypes$EnumerationType"
      ], m = [v.Request, v.Tool];
      if (e.toolType === "Microflow" && (!e.microflow || e.microflow.trim() === ""))
        return "Microflow must be selected for Microflow tool.";
      const y = await z(
        i,
        e.microflow || ""
      );
      if (y === null)
        return "Selected microflow does not exist.";
      if (y.microflowReturnType.$Type !== "DataTypes$StringType")
        return "Tool microflow must return a String.";
      const p = y.objectCollection.objects;
      if (p) {
        for (const l of p)
          if (l.$Type === "Microflows$MicroflowParameterObject") {
            if (d.includes(l.variableType.$Type))
              continue;
            if (l.variableType.$Type === "DataTypes$ObjectType" && m.includes(l.variableType.entity))
              continue;
            return `Tool microflow parameter "${l.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
          }
      }
      break;
    }
    case "toolType": {
      if (!e.toolType)
        return "Tool type cannot be empty.";
      break;
    }
    default:
      return !0;
  }
  return !0;
};
export {
  L as T,
  B as a,
  H as h
};
//# sourceMappingURL=toolHandlers-k1wQ0dfJ.js.map
