import { w as r, x as c, az as s, z as i, y as g, T as w, aL as p, aM as f } from "./TextInputWithIcon-BrxzJg1N.js";
const k = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", b = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var $ = Object.defineProperty, j = (e, t) => $(e, "name", { value: t, configurable: !0 });
const h = j((e) => r.jsx(c, { light: b, dark: k, ...e }), "CloseIcon");
var C = Object.defineProperty, a = (e, t) => C(e, "name", { value: t, configurable: !0 });
function m(e) {
  throw new Error("Unexpected object", e);
}
a(m, "assertNever");
function y(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
a(y, "clamp");
function B(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
a(B, "getIconSrc");
var A = Object.defineProperty, M = (e, t) => A(e, "name", { value: t, configurable: !0 });
function u(e) {
  switch (e) {
    case "warning":
      return s`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestOrange};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultOrange};
            `;
    case "info":
      return s`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestBlue};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultBlue};
            `;
    case "success":
      return s`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGreen};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGreen};
            `;
    case "danger":
      return s`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestRed};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
            `;
    case "neutral":
      return s`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGrey};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGrey};
            `;
    default:
      m(e);
  }
}
M(u, "getAlertStyleByType");
const x = i.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: stretch;

    min-height: 28px;
    height: fit-content;

    padding: 0 8px;

    ${({ $showBorder: e }) => e && s`
            border-width: 1px 0;
            border-style: solid;
        `}

    ${({ $type: e }) => u(e)}
`, v = i.div`
    padding: ${g.spacing4} ${g.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var D = Object.defineProperty, L = (e, t) => D(e, "name", { value: t, configurable: !0 });
L(({ type: e = "neutral", icon: t, children: o, button: n, onClose: d }) => r.jsxs(x, { $type: e, $showBorder: !0, role: "alert", children: [t, r.jsx(v, { children: o }), n ? r.jsx(w, { onPress: n.onClick, children: n.caption }) : null, d ? r.jsx(p, { icon: r.jsx(h, {}), onPress: d }) : null] }), "Alert");
var P = Object.defineProperty, O = (e, t) => P(e, "name", { value: t, configurable: !0 });
const S = O(({ type: e = "neutral", icon: t, children: o, onClose: n }) => r.jsxs(x, { $type: e, role: "alert", children: [t, r.jsx(v, { children: o }), n ? r.jsx(p, { icon: r.jsx(h, {}), onPress: n }) : null] }), "InlineAlert"), I = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", F = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Z = Object.defineProperty, G = (e, t) => Z(e, "name", { value: t, configurable: !0 });
const W = G((e) => r.jsx(c, { light: F, dark: I, ...e }), "WarningIcon"), E = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%235BDB5B'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%235BDB5B'%20stroke-miterlimit='10'/%3e%3c/svg%3e", R = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%230D990D'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%230D990D'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var z = Object.defineProperty, H = (e, t) => z(e, "name", { value: t, configurable: !0 });
const T = H((e) => r.jsx(c, { light: R, dark: E, ...e }), "CheckmarkIcon"), V = i.div`
    [role="alert"] {
        align-items: start;
        padding: 8px 8px;
        & > button {
            padding: 0px;
        }
        & > div {
            padding: 0px;
        }
        ul {
            margin-block-start: 8px;
            margin-block-end: 0px;
            padding: 0px 0px 0px 18px;
        }
    }
`, l = ({ children: e, type: t, icon: o, onClose: n }) => /* @__PURE__ */ r.jsx(V, { children: /* @__PURE__ */ r.jsx(S, { type: t, icon: o, onClose: n, children: e }) }), U = (e) => /* @__PURE__ */ r.jsx(l, { ...e, type: "info", icon: /* @__PURE__ */ r.jsx(f, {}) }), q = (e) => /* @__PURE__ */ r.jsx(l, { ...e, type: "warning", icon: /* @__PURE__ */ r.jsx(W, {}) }), J = (e) => /* @__PURE__ */ r.jsx(l, { ...e, type: "success", icon: /* @__PURE__ */ r.jsx(T, {}) });
export {
  U as I,
  J as S,
  q as W
};
//# sourceMappingURL=Banner-q-F4Onip.js.map
