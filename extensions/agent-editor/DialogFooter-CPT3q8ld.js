import { r as c, T as a, U as i, R as r, bp as u, bS as g, bT as f, S as x, bU as h, a8 as n } from "./formelements-xoDBPsLY.js";
function O(e, t) {
  c.useEffect(() => {
    const o = new AbortController();
    return document.addEventListener(
      "keydown",
      (s) => {
        s.key === "Escape" ? e() : s.key === "Enter" && (s.ctrlKey || s.metaKey) && t();
      },
      { signal: o.signal }
    ), () => o.abort();
  }, [e, t]);
}
var m = Object.defineProperty, l = (e, t) => m(e, "name", { value: t, configurable: !0 });
const b = l(({ children: e, ...t }) => r.jsx(u, { children: r.jsx(C, { children: r.jsx(k, { ...t, children: e }) }) }), "ButtonFooter"), C = l(({ children: e }) => {
  const t = g(), o = c.useCallback((s) => {
    s.key === "ArrowLeft" && t?.focusPrevious({ wrap: !0 }), s.key === "ArrowRight" && t?.focusNext({ wrap: !0 });
  }, [t]);
  return r.jsx(v, { role: "presentation", onKeyDownCapture: o, children: e });
}, "ButtonFocusWrapper"), w = a.div`
    flex-grow: 1;
`, v = a.div`
    display: contents;
`, k = a(f)`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${i.spacing4};
    padding: ${i.spacing8};
`, j = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23579BF9'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e", y = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23146FF4'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";
var $ = Object.defineProperty, F = (e, t) => $(e, "name", { value: t, configurable: !0 });
const P = F((e) => r.jsx(x, { light: y, dark: j, ...e }), "HelpIcon");
var B = Object.defineProperty, M = (e, t) => B(e, "name", { value: t, configurable: !0 });
const D = M(({ onPress: e }) => r.jsx(L, { showLabel: !1, onPress: e, children: r.jsx(P, {}) }), "HelpButton"), L = a(n)`
    ${h};
`, E = a(b)`
    margin-top: auto;
    padding: 16px 0 0 0;
    background-color: transparent;
`, S = ({
  onOk: e,
  onCancel: t,
  onHelp: o,
  okLabel: s = "OK",
  cancelLabel: d = "Cancel",
  showHelp: p = !0
}) => /* @__PURE__ */ r.jsxs(E, { children: [
  p && /* @__PURE__ */ r.jsx(D, { onPress: o }),
  /* @__PURE__ */ r.jsx(w, {}),
  /* @__PURE__ */ r.jsx(n, { variant: "primary", onPress: e, children: s }),
  /* @__PURE__ */ r.jsx(n, { onPress: t, children: d })
] });
export {
  S as D,
  O as u
};
