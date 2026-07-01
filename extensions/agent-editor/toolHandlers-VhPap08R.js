import { T as v, r as d, R as a, a4 as W, a9 as j, ai as $, ac as z } from "./formelements-DgWWXRMR.js";
import { e as x, S as R, W as q } from "./index-ClN9e0Gp.js";
const M = v.div`
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
    z-index: 2;
    transform: translateY(var(--scroll-offset, 0px));
`, P = v.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`, D = v.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, N = ({
  label: c,
  ariaLabel: e,
  value: o,
  onChange: i,
  placeholder: p,
  readOnly: h = !1,
  defaultHeightRows: l,
  highlightRules: y,
  validate: S
}) => {
  const m = d.useRef(null), T = d.useRef(null), [k, A] = d.useState(0), E = l || 5, b = y && y.length > 0, C = () => {
    if (!b) return null;
    const t = [];
    y.forEach((s, f) => {
      Array.from(o.matchAll(s.pattern)).forEach((u) => {
        u.index !== void 0 && t.push({
          start: u.index,
          end: u.index + u[0].length,
          text: u[0],
          style: s.style,
          ruleIndex: f
        });
      });
    }), t.sort((s, f) => s.start - f.start);
    const n = [];
    let r = 0;
    return t.forEach((s, f) => {
      s.start > r && n.push(
        /* @__PURE__ */ a.jsx("span", { children: o.slice(r, s.start) }, `text-${r}-${s.start}`)
      ), s.start >= r && (n.push(
        /* @__PURE__ */ a.jsx("span", { style: s.style, children: s.text }, `placeholder-${s.ruleIndex}-${f}`)
      ), r = s.end);
    }), r < o.length && n.push(/* @__PURE__ */ a.jsx("span", { children: o.slice(r) }, `text-${r}-end`)), n;
  }, w = d.useCallback(() => {
    var n;
    const t = (n = m.current) == null ? void 0 : n.querySelector("textarea");
    if (t) {
      const r = t.offsetWidth - t.clientWidth;
      A(r);
    }
  }, []), g = d.useCallback(() => {
    var n;
    const t = (n = m.current) == null ? void 0 : n.querySelector("textarea");
    if (t && T.current) {
      const r = t.scrollTop;
      T.current.style.setProperty("--scroll-offset", `-${r}px`);
    }
  }, []);
  return d.useEffect(() => {
    var n;
    const t = (n = m.current) == null ? void 0 : n.querySelector("textarea");
    if (t) {
      w();
      const r = new ResizeObserver(w);
      return r.observe(t), t.addEventListener("scroll", g), () => {
        r.disconnect(), t.removeEventListener("scroll", g);
      };
    }
  }, [g, w]), /* @__PURE__ */ a.jsxs(W, { children: [
    c && /* @__PURE__ */ a.jsx(j, { children: /* @__PURE__ */ a.jsx($, { children: c }) }),
    /* @__PURE__ */ a.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(P, { ref: m, children: [
      b && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(D, {}),
        /* @__PURE__ */ a.jsx(M, { ref: T, style: { paddingRight: `${2 + k}px` }, children: C() })
      ] }),
      /* @__PURE__ */ a.jsx(
        z,
        {
          ariaLabel: e,
          value: o,
          readOnly: h,
          placeholder: p,
          onChange: i,
          rows: E,
          hasHighlighting: b,
          validate: S
        }
      )
    ] }) })
  ] });
}, O = async (c, e, o, i) => {
  const p = o.tools, h = o.knowledgebaseTools;
  switch (c) {
    case "name":
      if (!e.toolType || e.toolType === x.MCP)
        break;
      if (!e.name || e.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (p && p.some((l) => l.name === e.name && l.id !== e.id))
        return "This name is already used for another tool for this agent, please choose a different name.";
      if (h && h.some((l) => l.name === e.name))
        return "This name is already used for a Knowledge base for this agent, please choose a different name.";
      break;
    case "description": {
      if (!e.toolType || e.toolType === x.MCP)
        break;
      if (!e.description || e.description.trim() === "")
        return "Tool description cannot be empty.";
      if (e.description.length > 4096)
        return "Tool description cannot exceed 4096 characters.";
      break;
    }
    case "toolType": {
      if (!e.toolType)
        return "Tool type cannot be empty.";
      break;
    }
    case "document": {
      if (e.toolType === x.Microflow)
        return await R(e, i);
      if (e.toolType === x.MCP)
        return await q(e, i, o);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, H = async (c, e, o) => {
  const i = await c.ui.elementSelectors.selectDocument({
    allowNone: !0,
    selectedElementId: e || void 0,
    query: { elementType: o }
  });
  if (i.status === "ok")
    return {
      qualifiedName: i.selected.module + "." + i.selected.name,
      documentId: i.selected.id
    };
  if (i.status === "none")
    return {
      qualifiedName: "",
      documentId: ""
    };
};
export {
  N as T,
  H as a,
  O as h
};
