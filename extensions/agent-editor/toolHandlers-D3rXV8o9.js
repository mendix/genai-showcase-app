import { j as n } from "./jsx-runtime-CWOFuNcx.js";
import { S as v, r as d } from "./PageContainers-B4e_cfEm.js";
import { D as $, a as j, d as z, c as W } from "./formelements-97vqGDJl.js";
import { a as x, v as q, d as D } from "./toolUtils-3GFu_U6Y.js";
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
`, R = v.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, H = ({
  label: c,
  ariaLabel: e,
  value: s,
  onChange: o,
  placeholder: p,
  readOnly: m = !1,
  defaultHeightRows: l,
  highlightRules: y,
  validate: S
}) => {
  const h = d.useRef(null), T = d.useRef(null), [k, A] = d.useState(0), E = l || 5, b = y && y.length > 0, C = () => {
    if (!b) return null;
    const t = [];
    y.forEach((r, f) => {
      Array.from(s.matchAll(r.pattern)).forEach((u) => {
        u.index !== void 0 && t.push({
          start: u.index,
          end: u.index + u[0].length,
          text: u[0],
          style: r.style,
          ruleIndex: f
        });
      });
    }), t.sort((r, f) => r.start - f.start);
    const a = [];
    let i = 0;
    return t.forEach((r, f) => {
      r.start > i && a.push(
        /* @__PURE__ */ n.jsx("span", { children: s.slice(i, r.start) }, `text-${i}-${r.start}`)
      ), r.start >= i && (a.push(
        /* @__PURE__ */ n.jsx("span", { style: r.style, children: r.text }, `placeholder-${r.ruleIndex}-${f}`)
      ), i = r.end);
    }), i < s.length && a.push(/* @__PURE__ */ n.jsx("span", { children: s.slice(i) }, `text-${i}-end`)), a;
  }, w = d.useCallback(() => {
    const t = h.current?.querySelector("textarea");
    if (t) {
      const a = t.offsetWidth - t.clientWidth;
      A(a);
    }
  }, []), g = d.useCallback(() => {
    const t = h.current?.querySelector("textarea");
    if (t && T.current) {
      const a = t.scrollTop;
      T.current.style.setProperty("--scroll-offset", `-${a}px`);
    }
  }, []);
  return d.useEffect(() => {
    const t = h.current?.querySelector("textarea");
    if (t) {
      w();
      const a = new ResizeObserver(w);
      return a.observe(t), t.addEventListener("scroll", g), () => {
        a.disconnect(), t.removeEventListener("scroll", g);
      };
    }
  }, [g, w]), /* @__PURE__ */ n.jsxs($, { children: [
    c && /* @__PURE__ */ n.jsx(j, { children: /* @__PURE__ */ n.jsx(z, { children: c }) }),
    /* @__PURE__ */ n.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ n.jsxs(P, { ref: h, children: [
      b && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(R, {}),
        /* @__PURE__ */ n.jsx(M, { ref: T, style: { paddingRight: `${2 + k}px` }, children: C() })
      ] }),
      /* @__PURE__ */ n.jsx(
        W,
        {
          ariaLabel: e,
          value: s,
          readOnly: m,
          placeholder: p,
          onChange: o,
          rows: E,
          hasHighlighting: b,
          validate: S
        }
      )
    ] }) })
  ] });
}, K = async (c, e, s, o) => {
  const p = s.tools, m = s.knowledgebaseTools;
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
      if (m && m.some((l) => l.name === e.name))
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
        return await q(e, o);
      if (e.toolType === x.MCP)
        return await D(e, o, s);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, Z = async (c, e, s) => {
  const o = await c.ui.elementSelectors.selectDocument({
    allowNone: !0,
    selectedElementId: e || void 0,
    query: { elementType: s }
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
  H as T,
  Z as a,
  K as h
};
