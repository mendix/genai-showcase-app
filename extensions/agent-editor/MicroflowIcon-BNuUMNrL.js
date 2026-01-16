import { ag as u, r as l, j as t, aA as T, aB as g, aC as W, aK as S, aE as A, p as $ } from "./TextInputWithIcon-mWdTJJox.js";
import { T as L } from "./ComboBox-Dy-mCv3q.js";
const z = u(L).withConfig({
  shouldForwardProp: (s) => !["hasHighlighting"].includes(s)
})`
  width: 100%;
  resize: vertical;
  & textarea {
    ${({ hasHighlighting: s }) => s ? `
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
`, B = u.div`
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
`, P = u.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`, H = u.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: -1;
  border: 1px solid transparent;
`, V = ({
  label: s,
  ariaLabel: c,
  value: o,
  onChange: m,
  readOnly: v = !1,
  defaultHeightRows: d,
  highlightRules: h,
  validate: w
}) => {
  const a = l.useRef(null), x = l.useRef(null), [j, b] = l.useState(0), F = d || 5, C = h && h.length > 0, E = () => {
    if (!C) return null;
    const e = [];
    h.forEach((i, p) => {
      Array.from(o.matchAll(i.pattern)).forEach((f) => {
        f.index !== void 0 && e.push({
          start: f.index,
          end: f.index + f[0].length,
          text: f[0],
          style: i.style,
          ruleIndex: p
        });
      });
    }), e.sort((i, p) => i.start - p.start);
    const n = [];
    let r = 0;
    return e.forEach((i, p) => {
      i.start > r && n.push(
        /* @__PURE__ */ t.jsx("span", { children: o.slice(r, i.start) }, `text-${r}-${i.start}`)
      ), i.start >= r && (n.push(
        /* @__PURE__ */ t.jsx("span", { style: i.style, children: i.text }, `placeholder-${i.ruleIndex}-${p}`)
      ), r = i.end);
    }), r < o.length && n.push(
      /* @__PURE__ */ t.jsx("span", { children: o.slice(r) }, `text-${r}-end`)
    ), n;
  }, k = l.useCallback(() => {
    var n;
    const e = (n = a.current) == null ? void 0 : n.querySelector("textarea");
    if (e) {
      const r = e.offsetWidth - e.clientWidth;
      b(r);
    }
  }, []), y = l.useCallback(() => {
    var n;
    const e = (n = a.current) == null ? void 0 : n.querySelector("textarea");
    if (e && x.current) {
      const r = e.scrollTop;
      x.current.style.setProperty("--scroll-offset", `-${r}px`);
    }
  }, []);
  return l.useEffect(() => {
    var n;
    const e = (n = a.current) == null ? void 0 : n.querySelector("textarea");
    if (e) {
      k();
      const r = new ResizeObserver(k);
      return r.observe(e), e.addEventListener("scroll", y), () => {
        r.disconnect(), e.removeEventListener("scroll", y);
      };
    }
  }, [y, k]), /* @__PURE__ */ t.jsxs(T, { children: [
    s && /* @__PURE__ */ t.jsx(g, { children: /* @__PURE__ */ t.jsx(W, { children: s }) }),
    /* @__PURE__ */ t.jsx(g, { fullWidth: !0, children: /* @__PURE__ */ t.jsxs(P, { ref: a, children: [
      C && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(H, {}),
        /* @__PURE__ */ t.jsx(
          B,
          {
            ref: x,
            style: { paddingRight: `${2 + j}px` },
            children: E()
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(
        z,
        {
          ariaLabel: c,
          value: o,
          readOnly: v,
          onChange: m,
          rows: F,
          hasHighlighting: C,
          validate: w
        }
      )
    ] }) })
  ] });
}, K = ({
  label: s,
  ariaLabel: c,
  value: o,
  buttonCaption: m,
  onClick: v,
  buttonCaptionSecondary: d,
  onClickSecondary: h,
  placeholder: w,
  hasMarginTop: a = !1,
  icon: x,
  validate: j
}) => {
  const b = a ? 8 : 0;
  return /* @__PURE__ */ t.jsxs(T, { marginTop: b, children: [
    s && /* @__PURE__ */ t.jsx(g, { children: /* @__PURE__ */ t.jsx(W, { children: s }) }),
    /* @__PURE__ */ t.jsx(g, { fullWidth: !0, children: /* @__PURE__ */ t.jsxs(T, { children: [
      /* @__PURE__ */ t.jsx(g, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
        S,
        {
          ariaLabel: c,
          value: o,
          placeholder: w,
          readOnly: !0,
          icon: x,
          validate: j
        }
      ) }),
      /* @__PURE__ */ t.jsx(
        A,
        {
          onPress: v,
          children: m
        }
      ),
      d && /* @__PURE__ */ t.jsx(
        A,
        {
          onPress: h,
          children: d
        }
      )
    ] }) })
  ] });
}, I = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", M = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var O = Object.defineProperty, R = (s, c) => O(s, "name", { value: c, configurable: !0 });
const Y = R((s) => t.jsx($, { light: M, dark: I, ...s }), "MicroflowIcon");
export {
  V as T,
  K as a,
  Y as n
};
//# sourceMappingURL=MicroflowIcon-BNuUMNrL.js.map
