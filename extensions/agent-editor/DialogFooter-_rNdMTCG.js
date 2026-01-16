import { ag as s, af as i, j as r, aa as p, ba as x, r as g, bb as u, p as h, bc as f, aE as n } from "./TextInputWithIcon-mWdTJJox.js";
var m = Object.defineProperty, c = (t, e) => m(t, "name", { value: e, configurable: !0 });
const C = c(({ children: t, ...e }) => r.jsx(p, { children: r.jsx(b, { children: r.jsx(j, { ...e, children: t }) }) }), "ButtonFooter"), b = c(({ children: t }) => {
  const e = x(), o = g.useCallback((a) => {
    a.key === "ArrowLeft" && (e == null || e.focusPrevious({ wrap: !0 })), a.key === "ArrowRight" && (e == null || e.focusNext({ wrap: !0 }));
  }, [e]);
  return r.jsx(w, { role: "presentation", onKeyDownCapture: o, children: t });
}, "ButtonFocusWrapper"), v = s.div`
    flex-grow: 1;
`, w = s.div`
    display: contents;
`, j = s(u)`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${i.spacing4};
    padding: ${i.spacing8};
`, $ = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23579BF9'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e", k = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23146FF4'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";
var F = Object.defineProperty, y = (t, e) => F(t, "name", { value: e, configurable: !0 });
const P = y((t) => r.jsx(h, { light: k, dark: $, ...t }), "HelpIcon");
var B = Object.defineProperty, M = (t, e) => B(t, "name", { value: e, configurable: !0 });
const D = M(({ onPress: t }) => r.jsx(L, { showLabel: !1, onPress: t, children: r.jsx(P, {}) }), "HelpButton"), L = s(n)`
    ${f};
`, O = s(C)`
    margin-top: auto;
    background-color: transparent;
    padding: 0px;
`, E = ({
  onOk: t,
  onCancel: e,
  onHelp: o,
  okLabel: a = "OK",
  cancelLabel: l = "Cancel",
  showHelp: d = !0
}) => /* @__PURE__ */ r.jsxs(O, { children: [
  d && /* @__PURE__ */ r.jsx(D, { onPress: o }),
  /* @__PURE__ */ r.jsx(v, {}),
  /* @__PURE__ */ r.jsx(n, { variant: "primary", onPress: t, children: a }),
  /* @__PURE__ */ r.jsx(n, { onPress: e, children: l })
] });
export {
  E as D
};
//# sourceMappingURL=DialogFooter-_rNdMTCG.js.map
