import { ay as c, d as l, aI as w, aA as k, j as r, aJ as j, aB as B, p as u, aK as a, b as y, aE as m, aL as C, aM as A } from "./TextInputWithIcon-BpSHc-Lp.js";
var D = Object.defineProperty, M = (e, t) => D(e, "name", { value: t, configurable: !0 });
function I({ label: e, description: t, rows: o, cols: n, ...s }) {
  const { isInvalid: i, validationError: g, validate: b } = k(s);
  return r.jsx(j, { ...s, isInvalid: i, validate: b, children: r.jsx(B, { label: e, description: t, realtimeValidationError: g, children: r.jsx(L, { rows: o, cols: n }) }) });
}
M(I, "TextArea");
const L = l(w)`
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border: ${c.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    padding: ${c.spacing4};
    border-radius: ${c.borderRadiusXs};

    font-weight: ${c.fontWeightRegular};
    font-size: ${c.fontSizeMd};
    line-height: ${c.lineHeightMd};

    resize: none;
    outline: none;

    flex: 1;

    &:read-only {
        background-color: ${(e) => e.theme.colorsBackgroundInputReadOnly};
    }

    &:where(:not(:read-only)) {
        &[data-hovered] {
            border-color: ${(e) => e.theme.colorsBorderInputHover};
        }

        &[data-focused] {
            border-color: ${(e) => e.theme.colorsBorderActive};
        }
    }

    &[data-invalid] {
        border-color: ${({ theme: e }) => e.colorsAccentDefaultRed};
    }

    &::selection {
        background-color: ${({ theme: e }) => e.colorsBackgroundInputTextSelection};
    }
`, P = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", O = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var S = Object.defineProperty, E = (e, t) => S(e, "name", { value: t, configurable: !0 });
const p = E((e) => r.jsx(u, { light: O, dark: P, ...e }), "CloseIcon");
var R = Object.defineProperty, h = (e, t) => R(e, "name", { value: t, configurable: !0 });
function v(e) {
  throw new Error("Unexpected object", e);
}
h(v, "assertNever");
function F(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
h(F, "clamp");
function T(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
h(T, "getIconSrc");
var W = Object.defineProperty, Z = (e, t) => W(e, "name", { value: t, configurable: !0 });
function x(e) {
  switch (e) {
    case "warning":
      return a`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestOrange};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultOrange};
            `;
    case "info":
      return a`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestBlue};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultBlue};
            `;
    case "success":
      return a`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGreen};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGreen};
            `;
    case "danger":
      return a`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestRed};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
            `;
    case "neutral":
      return a`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGrey};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGrey};
            `;
    default:
      v(e);
  }
}
Z(x, "getAlertStyleByType");
const f = l.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: stretch;

    min-height: 28px;
    height: fit-content;

    padding: 0 8px;

    ${({ $showBorder: e }) => e && a`
            border-width: 1px 0;
            border-style: solid;
        `}

    ${({ $type: e }) => x(e)}
`, $ = l.div`
    padding: ${c.spacing4} ${c.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var G = Object.defineProperty, H = (e, t) => G(e, "name", { value: t, configurable: !0 });
const z = H(({ type: e = "neutral", icon: t, children: o, button: n, onClose: s }) => r.jsxs(f, { $type: e, $showBorder: !0, role: "alert", children: [t, r.jsx($, { children: o }), n ? r.jsx(y, { onPress: n.onClick, children: n.caption }) : null, s ? r.jsx(m, { icon: r.jsx(p, {}), onPress: s }) : null] }), "Alert");
var V = Object.defineProperty, J = (e, t) => V(e, "name", { value: t, configurable: !0 });
J(({ type: e = "neutral", icon: t, children: o, onClose: n }) => r.jsxs(f, { $type: e, role: "alert", children: [t, r.jsx($, { children: o }), n ? r.jsx(m, { icon: r.jsx(p, {}), onPress: n }) : null] }), "InlineAlert");
const K = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", N = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var U = Object.defineProperty, X = (e, t) => U(e, "name", { value: t, configurable: !0 });
const q = X((e) => r.jsx(u, { light: N, dark: K, ...e }), "WarningIcon"), Q = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%235BDB5B'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%235BDB5B'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Y = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%230D990D'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%230D990D'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var _ = Object.defineProperty, ee = (e, t) => _(e, "name", { value: t, configurable: !0 });
const te = ee((e) => r.jsx(u, { light: Y, dark: Q, ...e }), "CheckmarkIcon"), re = l.div`
    [role="alert"] {
        align-items: start;
        & > img {
            margin-top: 5px;
        }
    }
`, d = ({
  children: e,
  type: t,
  icon: o,
  onClose: n,
  buttonCaption: s,
  buttonClick: i
}) => {
  const g = s && i;
  return /* @__PURE__ */ r.jsx(re, { children: /* @__PURE__ */ r.jsx(
    z,
    {
      type: t,
      icon: o,
      onClose: n,
      button: g ? { caption: s, onClick: i } : void 0,
      children: e
    }
  ) });
}, ne = (e) => /* @__PURE__ */ r.jsx(d, { ...e, type: "info", icon: /* @__PURE__ */ r.jsx(A, {}) }), se = (e) => /* @__PURE__ */ r.jsx(d, { ...e, type: "warning", icon: /* @__PURE__ */ r.jsx(q, {}) }), ce = (e) => /* @__PURE__ */ r.jsx(d, { ...e, type: "danger", icon: /* @__PURE__ */ r.jsx(C, {}) }), ae = (e) => /* @__PURE__ */ r.jsx(d, { ...e, type: "success", icon: /* @__PURE__ */ r.jsx(te, {}) });
export {
  ce as E,
  ne as I,
  ae as S,
  se as W,
  I as y
};
//# sourceMappingURL=Banner-B8h5d_oN.js.map
