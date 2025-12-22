import { j as r, p as i, aO as s, d as a, ax as p, b as k, aD as h, aP as $ } from "./TextInputWithIcon-elAaw22_.js";
const b = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", j = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var B = Object.defineProperty, C = (e, t) => B(e, "name", { value: t, configurable: !0 });
const m = C((e) => r.jsx(i, { light: j, dark: b, ...e }), "CloseIcon");
var y = Object.defineProperty, l = (e, t) => y(e, "name", { value: t, configurable: !0 });
function u(e) {
  throw new Error("Unexpected object", e);
}
l(u, "assertNever");
function A(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
l(A, "clamp");
function D(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
l(D, "getIconSrc");
var M = Object.defineProperty, L = (e, t) => M(e, "name", { value: t, configurable: !0 });
function v(e) {
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
      u(e);
  }
}
L(v, "getAlertStyleByType");
const x = a.div`
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

    ${({ $type: e }) => v(e)}
`, w = a.div`
    padding: ${p.spacing4} ${p.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var P = Object.defineProperty, O = (e, t) => P(e, "name", { value: t, configurable: !0 });
const S = O(({ type: e = "neutral", icon: t, children: o, button: n, onClose: c }) => r.jsxs(x, { $type: e, $showBorder: !0, role: "alert", children: [t, r.jsx(w, { children: o }), n ? r.jsx(k, { onPress: n.onClick, children: n.caption }) : null, c ? r.jsx(h, { icon: r.jsx(m, {}), onPress: c }) : null] }), "Alert");
var I = Object.defineProperty, F = (e, t) => I(e, "name", { value: t, configurable: !0 });
F(({ type: e = "neutral", icon: t, children: o, onClose: n }) => r.jsxs(x, { $type: e, role: "alert", children: [t, r.jsx(w, { children: o }), n ? r.jsx(h, { icon: r.jsx(m, {}), onPress: n }) : null] }), "InlineAlert");
const Z = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", G = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var W = Object.defineProperty, E = (e, t) => W(e, "name", { value: t, configurable: !0 });
const R = E((e) => r.jsx(i, { light: G, dark: Z, ...e }), "WarningIcon"), H = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%235BDB5B'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%235BDB5B'%20stroke-miterlimit='10'/%3e%3c/svg%3e", T = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%230D990D'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%230D990D'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var V = Object.defineProperty, N = (e, t) => V(e, "name", { value: t, configurable: !0 });
const U = N((e) => r.jsx(i, { light: T, dark: H, ...e }), "CheckmarkIcon"), q = a.div`
    [role="alert"] {
        align-items: start;
        & > img {
            margin-top: 5px;
        }
        ul {
            margin: 6px 0px;
            padding: 0px 0px 0px 18px;
        }
    }
`, d = ({
  children: e,
  type: t,
  icon: o,
  onClose: n,
  buttonCaption: c,
  buttonClick: g
}) => {
  const f = c && g;
  return /* @__PURE__ */ r.jsx(q, { children: /* @__PURE__ */ r.jsx(
    S,
    {
      type: t,
      icon: o,
      onClose: n,
      button: f ? { caption: c, onClick: g } : void 0,
      children: e
    }
  ) });
}, J = (e) => /* @__PURE__ */ r.jsx(d, { ...e, type: "info", icon: /* @__PURE__ */ r.jsx($, {}) }), K = (e) => /* @__PURE__ */ r.jsx(d, { ...e, type: "warning", icon: /* @__PURE__ */ r.jsx(R, {}) }), Q = (e) => /* @__PURE__ */ r.jsx(d, { ...e, type: "success", icon: /* @__PURE__ */ r.jsx(U, {}) });
export {
  J as I,
  Q as S,
  K as W
};
//# sourceMappingURL=Banner-DNWL7edh.js.map
