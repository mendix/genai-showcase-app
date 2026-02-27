import { ad as s, ae as t, a8 as p, bc as x, r as g, bd as u, ag as h, be as f, aG as n } from "./TextInputWithIcon-D0NqO6mp.js";
import { r as i } from "./DesignSystemTokens-XeI_xSox.js";
var m = Object.defineProperty, c = (r, e) => m(r, "name", { value: e, configurable: !0 });
const C = c(({ children: r, ...e }) => t.jsx(p, { children: t.jsx(v, { children: t.jsx(j, { ...e, children: r }) }) }), "ButtonFooter"), v = c(({ children: r }) => {
  const e = x(), o = g.useCallback((a) => {
    a.key === "ArrowLeft" && (e == null || e.focusPrevious({ wrap: !0 })), a.key === "ArrowRight" && (e == null || e.focusNext({ wrap: !0 }));
  }, [e]);
  return t.jsx(w, { role: "presentation", onKeyDownCapture: o, children: r });
}, "ButtonFocusWrapper"), b = s.div`
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
var F = Object.defineProperty, y = (r, e) => F(r, "name", { value: e, configurable: !0 });
const P = y((r) => t.jsx(h, { light: k, dark: $, ...r }), "HelpIcon");
var B = Object.defineProperty, M = (r, e) => B(r, "name", { value: e, configurable: !0 });
const D = M(({ onPress: r }) => t.jsx(L, { showLabel: !1, onPress: r, children: t.jsx(P, {}) }), "HelpButton"), L = s(n)`
    ${f};
`, O = s(C)`
    margin-top: auto;
    padding: 16px 0 0 0;
    background-color: transparent;
`, E = ({
  onOk: r,
  onCancel: e,
  onHelp: o,
  okLabel: a = "OK",
  cancelLabel: l = "Cancel",
  showHelp: d = !0
}) => /* @__PURE__ */ t.jsxs(O, { children: [
  d && /* @__PURE__ */ t.jsx(D, { onPress: o }),
  /* @__PURE__ */ t.jsx(b, {}),
  /* @__PURE__ */ t.jsx(n, { variant: "primary", onPress: r, children: a }),
  /* @__PURE__ */ t.jsx(n, { onPress: e, children: l })
] });
export {
  E as D
};
//# sourceMappingURL=DialogFooter-DVT1GN9E.js.map
