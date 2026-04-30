import { L as v, r as c, I as o, R as W, W as j, a7 as $, Z as z } from "./Icon-CDCe1x8d.js";
import { e as x, O as R, Q as q } from "./index-YObaGbux.js";
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
    z-index: 0;
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
`, F = ({
  label: l,
  ariaLabel: e,
  value: t,
  onChange: u,
  placeholder: p,
  readOnly: h = !1,
  defaultHeightRows: i,
  highlightRules: y,
  validate: k
}) => {
  const m = c.useRef(null), T = c.useRef(null), [S, A] = c.useState(0), C = i || 5, b = y && y.length > 0, E = () => {
    if (!b) return null;
    const r = [];
    y.forEach((a, d) => {
      Array.from(t.matchAll(a.pattern)).forEach((f) => {
        f.index !== void 0 && r.push({
          start: f.index,
          end: f.index + f[0].length,
          text: f[0],
          style: a.style,
          ruleIndex: d
        });
      });
    }), r.sort((a, d) => a.start - d.start);
    const s = [];
    let n = 0;
    return r.forEach((a, d) => {
      a.start > n && s.push(
        /* @__PURE__ */ o.jsx("span", { children: t.slice(n, a.start) }, `text-${n}-${a.start}`)
      ), a.start >= n && (s.push(
        /* @__PURE__ */ o.jsx("span", { style: a.style, children: a.text }, `placeholder-${a.ruleIndex}-${d}`)
      ), n = a.end);
    }), n < t.length && s.push(/* @__PURE__ */ o.jsx("span", { children: t.slice(n) }, `text-${n}-end`)), s;
  }, w = c.useCallback(() => {
    var s;
    const r = (s = m.current) == null ? void 0 : s.querySelector("textarea");
    if (r) {
      const n = r.offsetWidth - r.clientWidth;
      A(n);
    }
  }, []), g = c.useCallback(() => {
    var s;
    const r = (s = m.current) == null ? void 0 : s.querySelector("textarea");
    if (r && T.current) {
      const n = r.scrollTop;
      T.current.style.setProperty("--scroll-offset", `-${n}px`);
    }
  }, []);
  return c.useEffect(() => {
    var s;
    const r = (s = m.current) == null ? void 0 : s.querySelector("textarea");
    if (r) {
      w();
      const n = new ResizeObserver(w);
      return n.observe(r), r.addEventListener("scroll", g), () => {
        n.disconnect(), r.removeEventListener("scroll", g);
      };
    }
  }, [g, w]), /* @__PURE__ */ o.jsxs(W, { children: [
    l && /* @__PURE__ */ o.jsx(j, { children: /* @__PURE__ */ o.jsx($, { children: l }) }),
    /* @__PURE__ */ o.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ o.jsxs(P, { ref: m, children: [
      b && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(D, {}),
        /* @__PURE__ */ o.jsx(M, { ref: T, style: { paddingRight: `${2 + S}px` }, children: E() })
      ] }),
      /* @__PURE__ */ o.jsx(
        z,
        {
          ariaLabel: e,
          value: t,
          readOnly: h,
          placeholder: p,
          onChange: u,
          rows: C,
          hasHighlighting: b,
          validate: k
        }
      )
    ] }) })
  ] });
}, N = async (l, e, t, u) => {
  const p = t.tools, h = t.knowledgebaseTools;
  switch (l) {
    case "name":
      if (!e.toolType || e.toolType === x.MCP)
        break;
      if (!e.name || e.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (p && p.some((i) => i.name === e.name && i.id !== e.id))
        return "This name is already used for another tool for this agent, please choose a different name.";
      if (h && h.some((i) => i.name === e.name))
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
        return await R(e, u);
      if (e.toolType === x.MCP)
        return await q(e, u, t);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, Z = async (l, e) => {
  const t = await l.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: e }
  });
  if (t.status === "ok")
    return {
      qualifiedName: t.selected.module + "." + t.selected.name,
      documentId: t.selected.id
    };
  if (t.status === "none")
    return {
      qualifiedName: "",
      documentId: ""
    };
};
export {
  F as T,
  Z as a,
  N as h
};
//# sourceMappingURL=toolHandlers-B0Z5oBO2.js.map
