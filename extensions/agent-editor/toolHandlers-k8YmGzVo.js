import { y as x, r as d, w as s, F as C, H as A, S as $ } from "./Icon-DlQJfq7F.js";
import { y as q } from "./MicroflowIcon-kvKEq0tY.js";
import { T, z as E, A as R } from "./index-8TehL4sX.js";
const W = x.div`
    position: relative;
    width: 100%;
`, P = x(q)`
    width: 100%;

    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: auto;
        padding: 3px 4px;
    }
`, M = ({
  ariaLabel: i,
  value: e,
  onChange: t,
  description: f,
  readOnly: h = !1,
  rows: u = 1,
  validate: l,
  className: w
}) => {
  const p = d.useRef(null), m = (c) => {
    c.style.height = "auto", c.style.height = c.scrollHeight + 2 + "px";
  }, v = (c) => {
    t && t(c);
  };
  return d.useEffect(() => {
    var g;
    const c = (g = p.current) == null ? void 0 : g.querySelector("textarea");
    c && m(c);
  }, [e]), /* @__PURE__ */ s.jsx(W, { ref: p, className: w, children: /* @__PURE__ */ s.jsx(
    P,
    {
      value: e,
      onChange: v,
      description: f,
      isReadOnly: h,
      "aria-label": i,
      rows: u,
      validate: l
    }
  ) });
}, D = x(M).withConfig({
  shouldForwardProp: (i) => !["hasHighlighting"].includes(i)
})`
    width: 100%;
    resize: vertical;
    & textarea {
        ${({ hasHighlighting: i }) => i ? `
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
`, F = x.div`
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
`, H = x.div`
    position: relative;
    width: 100%;
    overflow: hidden;
`, I = x.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    border: 1px solid transparent;
`, Z = ({
  label: i,
  ariaLabel: e,
  value: t,
  onChange: f,
  readOnly: h = !1,
  defaultHeightRows: u,
  highlightRules: l,
  validate: w
}) => {
  const p = d.useRef(null), m = d.useRef(null), [v, c] = d.useState(0), g = u || 5, j = l && l.length > 0, z = () => {
    if (!j) return null;
    const r = [];
    l.forEach((o, y) => {
      Array.from(t.matchAll(o.pattern)).forEach((b) => {
        b.index !== void 0 && r.push({
          start: b.index,
          end: b.index + b[0].length,
          text: b[0],
          style: o.style,
          ruleIndex: y
        });
      });
    }), r.sort((o, y) => o.start - y.start);
    const a = [];
    let n = 0;
    return r.forEach((o, y) => {
      o.start > n && a.push(
        /* @__PURE__ */ s.jsx("span", { children: t.slice(n, o.start) }, `text-${n}-${o.start}`)
      ), o.start >= n && (a.push(
        /* @__PURE__ */ s.jsx("span", { style: o.style, children: o.text }, `placeholder-${o.ruleIndex}-${y}`)
      ), n = o.end);
    }), n < t.length && a.push(/* @__PURE__ */ s.jsx("span", { children: t.slice(n) }, `text-${n}-end`)), a;
  }, k = d.useCallback(() => {
    var a;
    const r = (a = p.current) == null ? void 0 : a.querySelector("textarea");
    if (r) {
      const n = r.offsetWidth - r.clientWidth;
      c(n);
    }
  }, []), S = d.useCallback(() => {
    var a;
    const r = (a = p.current) == null ? void 0 : a.querySelector("textarea");
    if (r && m.current) {
      const n = r.scrollTop;
      m.current.style.setProperty("--scroll-offset", `-${n}px`);
    }
  }, []);
  return d.useEffect(() => {
    var a;
    const r = (a = p.current) == null ? void 0 : a.querySelector("textarea");
    if (r) {
      k();
      const n = new ResizeObserver(k);
      return n.observe(r), r.addEventListener("scroll", S), () => {
        n.disconnect(), r.removeEventListener("scroll", S);
      };
    }
  }, [S, k]), /* @__PURE__ */ s.jsxs(C, { children: [
    i && /* @__PURE__ */ s.jsx(A, { children: /* @__PURE__ */ s.jsx($, { children: i }) }),
    /* @__PURE__ */ s.jsx(A, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(H, { ref: p, children: [
      j && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(I, {}),
        /* @__PURE__ */ s.jsx(F, { ref: m, style: { paddingRight: `${2 + v}px` }, children: z() })
      ] }),
      /* @__PURE__ */ s.jsx(
        D,
        {
          ariaLabel: e,
          value: t,
          readOnly: h,
          onChange: f,
          rows: g,
          hasHighlighting: j,
          validate: w
        }
      )
    ] }) })
  ] });
}, _ = async (i, e, t, f) => {
  const h = t.tools, u = t.knowledgebaseTools;
  switch (i) {
    case "name":
      if (!e.toolType || e.toolType === T.MCP)
        break;
      if (!e.name || e.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (h && h.some((l) => l.name === e.name && l.id !== e.id))
        return "Tool name must be unique.";
      if (u && u.some((l) => l.name === e.name))
        return "This name must be unique. It is already used for a Knowledge base for this agent, please choose a different name.";
      break;
    case "description": {
      if (!e.toolType || e.toolType === T.MCP)
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
      if (e.toolType === T.Microflow)
        return await E(e, f);
      if (e.toolType === T.MCP)
        return await R(e, f, t);
      break;
    }
    default:
      return !0;
  }
  return !0;
}, B = async (i, e) => {
  const t = await i.ui.elementSelectors.selectDocument({
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
  Z as T,
  B as a,
  _ as h
};
//# sourceMappingURL=toolHandlers-k8YmGzVo.js.map
