import { z as v, r as l, w as a, D as E, C as j, V as $, F as q } from "./Icon-B83cP35T.js";
import { T as h, A as W, B as D } from "./index-CiUZK5eE.js";
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
`, R = v.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, N = ({
  label: o,
  ariaLabel: e,
  value: n,
  onChange: u,
  placeholder: f,
  readOnly: p = !1,
  defaultHeightRows: g,
  highlightRules: m,
  validate: S
}) => {
  const x = l.useRef(null), y = l.useRef(null), [k, A] = l.useState(0), C = g || 5, T = m && m.length > 0, z = () => {
    if (!T) return null;
    const t = [];
    m.forEach((i, c) => {
      Array.from(n.matchAll(i.pattern)).forEach((d) => {
        d.index !== void 0 && t.push({
          start: d.index,
          end: d.index + d[0].length,
          text: d[0],
          style: i.style,
          ruleIndex: c
        });
      });
    }), t.sort((i, c) => i.start - c.start);
    const s = [];
    let r = 0;
    return t.forEach((i, c) => {
      i.start > r && s.push(
        /* @__PURE__ */ a.jsx("span", { children: n.slice(r, i.start) }, `text-${r}-${i.start}`)
      ), i.start >= r && (s.push(
        /* @__PURE__ */ a.jsx("span", { style: i.style, children: i.text }, `placeholder-${i.ruleIndex}-${c}`)
      ), r = i.end);
    }), r < n.length && s.push(/* @__PURE__ */ a.jsx("span", { children: n.slice(r) }, `text-${r}-end`)), s;
  }, b = l.useCallback(() => {
    var s;
    const t = (s = x.current) == null ? void 0 : s.querySelector("textarea");
    if (t) {
      const r = t.offsetWidth - t.clientWidth;
      A(r);
    }
  }, []), w = l.useCallback(() => {
    var s;
    const t = (s = x.current) == null ? void 0 : s.querySelector("textarea");
    if (t && y.current) {
      const r = t.scrollTop;
      y.current.style.setProperty("--scroll-offset", `-${r}px`);
    }
  }, []);
  return l.useEffect(() => {
    var s;
    const t = (s = x.current) == null ? void 0 : s.querySelector("textarea");
    if (t) {
      b();
      const r = new ResizeObserver(b);
      return r.observe(t), t.addEventListener("scroll", w), () => {
        r.disconnect(), t.removeEventListener("scroll", w);
      };
    }
  }, [w, b]), /* @__PURE__ */ a.jsxs(E, { children: [
    o && /* @__PURE__ */ a.jsx(j, { children: /* @__PURE__ */ a.jsx($, { children: o }) }),
    /* @__PURE__ */ a.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(P, { ref: x, children: [
      T && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(R, {}),
        /* @__PURE__ */ a.jsx(M, { ref: y, style: { paddingRight: `${2 + k}px` }, children: z() })
      ] }),
      /* @__PURE__ */ a.jsx(
        q,
        {
          ariaLabel: e,
          value: n,
          readOnly: p,
          placeholder: f,
          onChange: u,
          rows: C,
          hasHighlighting: T,
          validate: S
        }
      )
    ] }) })
  ] });
}, O = async (o, e, n, u) => {
  const f = n.tools;
  switch (o) {
    case "name":
      if (!e.toolType || e.toolType === h.MCP)
        break;
      if (!e.name || e.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (f && f.some((p) => p.name === e.name && p.id !== e.id))
        return "Tool name must be unique.";
      break;
    case "description": {
      if (!e.toolType || e.toolType === h.MCP)
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
      if (e.toolType === h.Microflow)
        return await W(e, u);
      if (e.toolType === h.MCP)
        return await D(e, u, n);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, B = async (o, e) => {
  const n = await o.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: e }
  });
  if (n.status === "ok")
    return {
      qualifiedName: n.selected.module + "." + n.selected.name,
      documentId: n.selected.id
    };
  if (n.status === "none")
    return {
      qualifiedName: "",
      documentId: ""
    };
};
export {
  N as T,
  B as a,
  O as h
};
//# sourceMappingURL=toolHandlers-CeY3sqjF.js.map
