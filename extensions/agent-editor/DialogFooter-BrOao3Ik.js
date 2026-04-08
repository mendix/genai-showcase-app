import { r as c, y as a, w as t, aJ as u, bj as f, bk as g, x, bl as m, T as n } from "./Icon-DQcqUu4m.js";
import { r as i } from "./userPreferences-CMksV11G.js";
function Z(r, e) {
  c.useEffect(() => {
    const o = new AbortController();
    return document.addEventListener(
      "keydown",
      (s) => {
        s.key === "Escape" ? r() : s.key === "Enter" && (s.ctrlKey || s.metaKey) && e();
      },
      { signal: o.signal }
    ), () => o.abort();
  }, [r, e]);
}
var h = Object.defineProperty, l = (r, e) => h(r, "name", { value: e, configurable: !0 });
const C = l(({ children: r, ...e }) => t.jsx(u, { children: t.jsx(b, { children: t.jsx(k, { ...e, children: r }) }) }), "ButtonFooter"), b = l(({ children: r }) => {
  const e = f(), o = c.useCallback((s) => {
    s.key === "ArrowLeft" && (e == null || e.focusPrevious({ wrap: !0 })), s.key === "ArrowRight" && (e == null || e.focusNext({ wrap: !0 }));
  }, [e]);
  return t.jsx(v, { role: "presentation", onKeyDownCapture: o, children: r });
}, "ButtonFocusWrapper"), w = a.div`
    flex-grow: 1;
`, v = a.div`
    display: contents;
`, k = a(g)`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${i.spacing4};
    padding: ${i.spacing8};
`, j = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23579BF9'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e", y = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23146FF4'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";
var $ = Object.defineProperty, F = (r, e) => $(r, "name", { value: e, configurable: !0 });
const P = F((r) => t.jsx(x, { light: y, dark: j, ...r }), "HelpIcon");
var B = Object.defineProperty, M = (r, e) => B(r, "name", { value: e, configurable: !0 });
const D = M(({ onPress: r }) => t.jsx(L, { showLabel: !1, onPress: r, children: t.jsx(P, {}) }), "HelpButton"), L = a(n)`
    ${m};
`, E = a(C)`
    margin-top: auto;
    padding: 16px 0 0 0;
    background-color: transparent;
`, A = ({
  onOk: r,
  onCancel: e,
  onHelp: o,
  okLabel: s = "OK",
  cancelLabel: d = "Cancel",
  showHelp: p = !0
}) => /* @__PURE__ */ t.jsxs(E, { children: [
  p && /* @__PURE__ */ t.jsx(D, { onPress: o }),
  /* @__PURE__ */ t.jsx(w, {}),
  /* @__PURE__ */ t.jsx(n, { variant: "primary", onPress: r, children: s }),
  /* @__PURE__ */ t.jsx(n, { onPress: e, children: d })
] });
export {
  A as D,
  Z as u
};
