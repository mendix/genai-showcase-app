import { y as h, r as c, w as s, J as C, K as A, S as $ } from "./Icon-DjcrVRZV.js";
import { y as E } from "./MicroflowIcon-DiZtEKnf.js";
import { T as w, w as R, x as q } from "./index-Chq3mA2y.js";
const W = h.div`
    position: relative;
    width: 100%;
`, P = h(E)`
    width: 100%;

    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: auto;
        padding: 3px 4px;
    }
`, M = ({
  ariaLabel: o,
  value: e,
  onChange: t,
  description: p,
  readOnly: f = !1,
  rows: d = 1,
  validate: x,
  className: T
}) => {
  const u = c.useRef(null), m = (l) => {
    l.style.height = "auto", l.style.height = l.scrollHeight + 2 + "px";
  }, v = (l) => {
    t && t(l);
  };
  return c.useEffect(() => {
    var g;
    const l = (g = u.current) == null ? void 0 : g.querySelector("textarea");
    l && m(l);
  }, [e]), /* @__PURE__ */ s.jsx(W, { ref: u, className: T, children: /* @__PURE__ */ s.jsx(
    P,
    {
      value: e,
      onChange: v,
      description: p,
      isReadOnly: f,
      "aria-label": o,
      rows: d,
      validate: x
    }
  ) });
}, D = h(M).withConfig({
  shouldForwardProp: (o) => !["hasHighlighting"].includes(o)
})`
    width: 100%;
    resize: vertical;
    & textarea {
        ${({ hasHighlighting: o }) => o ? `
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
`, F = h.div`
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
`, H = h.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`, I = h.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, _ = ({
  label: o,
  ariaLabel: e,
  value: t,
  onChange: p,
  readOnly: f = !1,
  defaultHeightRows: d,
  highlightRules: x,
  validate: T
}) => {
  const u = c.useRef(null), m = c.useRef(null), [v, l] = c.useState(0), g = d || 5, j = x && x.length > 0, z = () => {
    if (!j) return null;
    const r = [];
    x.forEach((a, y) => {
      Array.from(t.matchAll(a.pattern)).forEach((b) => {
        b.index !== void 0 && r.push({
          start: b.index,
          end: b.index + b[0].length,
          text: b[0],
          style: a.style,
          ruleIndex: y
        });
      });
    }), r.sort((a, y) => a.start - y.start);
    const i = [];
    let n = 0;
    return r.forEach((a, y) => {
      a.start > n && i.push(
        /* @__PURE__ */ s.jsx("span", { children: t.slice(n, a.start) }, `text-${n}-${a.start}`)
      ), a.start >= n && (i.push(
        /* @__PURE__ */ s.jsx("span", { style: a.style, children: a.text }, `placeholder-${a.ruleIndex}-${y}`)
      ), n = a.end);
    }), n < t.length && i.push(/* @__PURE__ */ s.jsx("span", { children: t.slice(n) }, `text-${n}-end`)), i;
  }, S = c.useCallback(() => {
    var i;
    const r = (i = u.current) == null ? void 0 : i.querySelector("textarea");
    if (r) {
      const n = r.offsetWidth - r.clientWidth;
      l(n);
    }
  }, []), k = c.useCallback(() => {
    var i;
    const r = (i = u.current) == null ? void 0 : i.querySelector("textarea");
    if (r && m.current) {
      const n = r.scrollTop;
      m.current.style.setProperty("--scroll-offset", `-${n}px`);
    }
  }, []);
  return c.useEffect(() => {
    var i;
    const r = (i = u.current) == null ? void 0 : i.querySelector("textarea");
    if (r) {
      S();
      const n = new ResizeObserver(S);
      return n.observe(r), r.addEventListener("scroll", k), () => {
        n.disconnect(), r.removeEventListener("scroll", k);
      };
    }
  }, [k, S]), /* @__PURE__ */ s.jsxs(C, { children: [
    o && /* @__PURE__ */ s.jsx(A, { children: /* @__PURE__ */ s.jsx($, { children: o }) }),
    /* @__PURE__ */ s.jsx(A, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(H, { ref: u, children: [
      j && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(I, {}),
        /* @__PURE__ */ s.jsx(F, { ref: m, style: { paddingRight: `${2 + v}px` }, children: z() })
      ] }),
      /* @__PURE__ */ s.jsx(
        D,
        {
          ariaLabel: e,
          value: t,
          readOnly: f,
          onChange: p,
          rows: g,
          hasHighlighting: j,
          validate: T
        }
      )
    ] }) })
  ] });
}, B = async (o, e, t, p) => {
  const f = t.tools;
  switch (o) {
    case "name":
      if (!e.toolType || e.toolType === w.MCP)
        break;
      if (!e.name || e.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (f && f.some((d) => d.name === e.name && d.id !== e.id))
        return "Tool name must be unique.";
      break;
    case "description": {
      if (!e.toolType || e.toolType === w.MCP)
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
      if (e.toolType === w.Microflow)
        return await R(e, p);
      if (e.toolType === w.MCP)
        return await q(e, p, t);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, G = async (o, e) => {
  const t = await o.ui.elementSelectors.selectDocument({
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
  _ as T,
  G as a,
  B as h
};
//# sourceMappingURL=toolHandlers-n0RnLoyo.js.map
