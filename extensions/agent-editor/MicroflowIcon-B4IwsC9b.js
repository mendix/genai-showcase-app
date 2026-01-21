import { ad as w, r as x, ae as e, aC as T, aD as m, aE as W, aM as S, aG as A, ag as $ } from "./TextInputWithIcon-B3kv_B9i.js";
import { T as E } from "./ComboBox-DOXi1OXZ.js";
const V = async (t, a) => {
  const n = await B(t, a);
  if (!n)
    return await t.ui.messageBoxes.show(
      "error",
      "Could not find microflow.",
      "This microflow might have been deleted or renamed. Please update the tool microflow selection."
    );
  await t.ui.editors.editDocument(n.$ID);
}, B = async (t, a) => {
  if (!a)
    return null;
  const [n, c] = a.split(".");
  if (!n || !c)
    return null;
  const d = await t.app.model.microflows.loadAll((l) => l.moduleName === n && l.name === c);
  return d.length === 0 ? null : d[0];
}, D = w(E).withConfig({
  shouldForwardProp: (t) => !["hasHighlighting"].includes(t)
})`
  width: 100%;
  resize: vertical;
  & textarea {
    ${({ hasHighlighting: t }) => t ? `
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
`, L = w.div`
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
`, z = w.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`, I = w.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: -1;
  border: 1px solid transparent;
`, G = ({
  label: t,
  ariaLabel: a,
  value: n,
  onChange: c,
  readOnly: d = !1,
  defaultHeightRows: l,
  highlightRules: f,
  validate: v
}) => {
  const h = x.useRef(null), u = x.useRef(null), [b, j] = x.useState(0), F = l || 5, y = f && f.length > 0, M = () => {
    if (!y) return null;
    const r = [];
    f.forEach((i, p) => {
      Array.from(n.matchAll(i.pattern)).forEach((g) => {
        g.index !== void 0 && r.push({
          start: g.index,
          end: g.index + g[0].length,
          text: g[0],
          style: i.style,
          ruleIndex: p
        });
      });
    }), r.sort((i, p) => i.start - p.start);
    const o = [];
    let s = 0;
    return r.forEach((i, p) => {
      i.start > s && o.push(
        /* @__PURE__ */ e.jsx("span", { children: n.slice(s, i.start) }, `text-${s}-${i.start}`)
      ), i.start >= s && (o.push(
        /* @__PURE__ */ e.jsx("span", { style: i.style, children: i.text }, `placeholder-${i.ruleIndex}-${p}`)
      ), s = i.end);
    }), s < n.length && o.push(
      /* @__PURE__ */ e.jsx("span", { children: n.slice(s) }, `text-${s}-end`)
    ), o;
  }, C = x.useCallback(() => {
    var o;
    const r = (o = h.current) == null ? void 0 : o.querySelector("textarea");
    if (r) {
      const s = r.offsetWidth - r.clientWidth;
      j(s);
    }
  }, []), k = x.useCallback(() => {
    var o;
    const r = (o = h.current) == null ? void 0 : o.querySelector("textarea");
    if (r && u.current) {
      const s = r.scrollTop;
      u.current.style.setProperty("--scroll-offset", `-${s}px`);
    }
  }, []);
  return x.useEffect(() => {
    var o;
    const r = (o = h.current) == null ? void 0 : o.querySelector("textarea");
    if (r) {
      C();
      const s = new ResizeObserver(C);
      return s.observe(r), r.addEventListener("scroll", k), () => {
        s.disconnect(), r.removeEventListener("scroll", k);
      };
    }
  }, [k, C]), /* @__PURE__ */ e.jsxs(T, { children: [
    t && /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(W, { children: t }) }),
    /* @__PURE__ */ e.jsx(m, { fullWidth: !0, children: /* @__PURE__ */ e.jsxs(z, { ref: h, children: [
      y && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(I, {}),
        /* @__PURE__ */ e.jsx(
          L,
          {
            ref: u,
            style: { paddingRight: `${2 + b}px` },
            children: M()
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(
        D,
        {
          ariaLabel: a,
          value: n,
          readOnly: d,
          onChange: c,
          rows: F,
          hasHighlighting: y,
          validate: v
        }
      )
    ] }) })
  ] });
}, Y = ({
  label: t,
  ariaLabel: a,
  value: n,
  buttonCaption: c,
  onClick: d,
  buttonCaptionSecondary: l,
  onClickSecondary: f,
  placeholder: v,
  hasMarginTop: h = !1,
  icon: u,
  validate: b
}) => {
  const j = h ? 8 : 0;
  return /* @__PURE__ */ e.jsxs(T, { marginTop: j, children: [
    t && /* @__PURE__ */ e.jsx(m, { children: /* @__PURE__ */ e.jsx(W, { children: t }) }),
    /* @__PURE__ */ e.jsx(m, { fullWidth: !0, children: /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(m, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        S,
        {
          ariaLabel: a,
          value: n,
          placeholder: v,
          readOnly: !0,
          icon: u,
          validate: b
        }
      ) }),
      /* @__PURE__ */ e.jsx(
        A,
        {
          onPress: d,
          children: c
        }
      ),
      l && /* @__PURE__ */ e.jsx(
        A,
        {
          onPress: f,
          children: l
        }
      )
    ] }) })
  ] });
}, P = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", H = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var O = Object.defineProperty, R = (t, a) => O(t, "name", { value: a, configurable: !0 });
const J = R((t) => e.jsx($, { light: H, dark: P, ...t }), "MicroflowIcon");
export {
  G as T,
  Y as a,
  B as g,
  V as h,
  J as n
};
//# sourceMappingURL=MicroflowIcon-B4IwsC9b.js.map
