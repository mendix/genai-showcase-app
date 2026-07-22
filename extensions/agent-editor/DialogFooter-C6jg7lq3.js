import { r as c, S as a, T as i, af as u, ag as g, ah as f, R as x, ai as h, a4 as n } from "./PageContainers-CRZszOq7.js";
import { j as r } from "./jsx-runtime-CWOFuNcx.js";
function Z(e, t) {
  c.useEffect(() => {
    const s = new AbortController();
    return document.addEventListener(
      "keydown",
      (o) => {
        o.key === "Escape" ? e() : o.key === "Enter" && (o.ctrlKey || o.metaKey) && t();
      },
      { signal: s.signal }
    ), () => s.abort();
  }, [e, t]);
}
var m = Object.defineProperty, l = (e, t) => m(e, "name", { value: t, configurable: !0 });
const C = l(({ children: e, ...t }) => r.jsx(u, { children: r.jsx(w, { children: r.jsx(j, { ...t, children: e }) }) }), "ButtonFooter"), w = l(({ children: e }) => {
  const t = g(), s = c.useCallback((o) => {
    o.key === "ArrowLeft" && t?.focusPrevious({ wrap: !0 }), o.key === "ArrowRight" && t?.focusNext({ wrap: !0 });
  }, [t]);
  return r.jsx(v, { role: "presentation", onKeyDownCapture: s, children: e });
}, "ButtonFocusWrapper"), b = a.div`
    flex-grow: 1;
`, v = a.div`
    display: contents;
`, j = a(f)`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${i.spacing4};
    padding: ${i.spacing8};
`, k = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23579BF9'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e", y = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23146FF4'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";
var $ = Object.defineProperty, F = (e, t) => $(e, "name", { value: t, configurable: !0 });
const P = F((e) => r.jsx(x, { light: y, dark: k, ...e }), "HelpIcon");
var B = Object.defineProperty, M = (e, t) => B(e, "name", { value: t, configurable: !0 });
const D = M(({ onPress: e }) => r.jsx(L, { showLabel: !1, onPress: e, children: r.jsx(P, {}) }), "HelpButton"), L = a(n)`
    ${h};
`, E = a(C)`
    margin-top: auto;
    padding: 16px 0 0 0;
    background-color: transparent;
`, A = ({
  onOk: e,
  onCancel: t,
  onHelp: s,
  okLabel: o = "OK",
  cancelLabel: d = "Cancel",
  showHelp: p = !0
}) => /* @__PURE__ */ r.jsxs(E, { children: [
  p && /* @__PURE__ */ r.jsx(D, { onPress: s }),
  /* @__PURE__ */ r.jsx(b, {}),
  /* @__PURE__ */ r.jsx(n, { variant: "primary", onPress: e, children: o }),
  /* @__PURE__ */ r.jsx(n, { onPress: t, children: d })
] });
export {
  A as D,
  Z as u
};
