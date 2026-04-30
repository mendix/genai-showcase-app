import { r as c, L as a, K as i, I as r, aQ as u, bn as g, bo as f, J as x, bp as h, U as n } from "./Icon-DMu3278C.js";
function O(t, e) {
  c.useEffect(() => {
    const o = new AbortController();
    return document.addEventListener(
      "keydown",
      (s) => {
        s.key === "Escape" ? t() : s.key === "Enter" && (s.ctrlKey || s.metaKey) && e();
      },
      { signal: o.signal }
    ), () => o.abort();
  }, [t, e]);
}
var m = Object.defineProperty, l = (t, e) => m(t, "name", { value: e, configurable: !0 });
const C = l(({ children: t, ...e }) => r.jsx(u, { children: r.jsx(b, { children: r.jsx(k, { ...e, children: t }) }) }), "ButtonFooter"), b = l(({ children: t }) => {
  const e = g(), o = c.useCallback((s) => {
    s.key === "ArrowLeft" && (e == null || e.focusPrevious({ wrap: !0 })), s.key === "ArrowRight" && (e == null || e.focusNext({ wrap: !0 }));
  }, [e]);
  return r.jsx(v, { role: "presentation", onKeyDownCapture: o, children: t });
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
var $ = Object.defineProperty, F = (t, e) => $(t, "name", { value: e, configurable: !0 });
const P = F((t) => r.jsx(x, { light: y, dark: j, ...t }), "HelpIcon");
var B = Object.defineProperty, L = (t, e) => B(t, "name", { value: e, configurable: !0 });
const M = L(({ onPress: t }) => r.jsx(D, { showLabel: !1, onPress: t, children: r.jsx(P, {}) }), "HelpButton"), D = a(n)`
    ${h};
`, K = a(C)`
    margin-top: auto;
    padding: 16px 0 0 0;
    background-color: transparent;
`, Z = ({
  onOk: t,
  onCancel: e,
  onHelp: o,
  okLabel: s = "OK",
  cancelLabel: d = "Cancel",
  showHelp: p = !0
}) => /* @__PURE__ */ r.jsxs(K, { children: [
  p && /* @__PURE__ */ r.jsx(M, { onPress: o }),
  /* @__PURE__ */ r.jsx(w, {}),
  /* @__PURE__ */ r.jsx(n, { variant: "primary", onPress: t, children: s }),
  /* @__PURE__ */ r.jsx(n, { onPress: e, children: d })
] });
export {
  Z as D,
  O as u
};
//# sourceMappingURL=DialogFooter-COjrWbXN.js.map
