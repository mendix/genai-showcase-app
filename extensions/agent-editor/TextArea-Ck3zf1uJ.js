import { j as r, p as d, aM as a, d as u, aC as s, b as w, aI as m, aN as k, aO as j, aP as B, aE as y, aQ as C, aF as A } from "./TextInputLabeled-Cg3_KcfK.js";
const D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", M = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var I = Object.defineProperty, P = (e, t) => I(e, "name", { value: t, configurable: !0 });
const p = P((e) => r.jsx(d, { light: M, dark: D, ...e }), "CloseIcon");
var L = Object.defineProperty, g = (e, t) => L(e, "name", { value: t, configurable: !0 });
function v(e) {
  throw new Error("Unexpected object", e);
}
g(v, "assertNever");
function O(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
g(O, "clamp");
function S(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
g(S, "getIconSrc");
var E = Object.defineProperty, F = (e, t) => E(e, "name", { value: t, configurable: !0 });
function f(e) {
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
F(f, "getAlertStyleByType");
const $ = u.div`
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

    ${({ $type: e }) => f(e)}
`, x = u.div`
    padding: ${s.spacing4} ${s.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var R = Object.defineProperty, T = (e, t) => R(e, "name", { value: t, configurable: !0 });
const Z = T(({ type: e = "neutral", icon: t, children: o, button: n, onClose: c }) => r.jsxs($, { $type: e, $showBorder: !0, role: "alert", children: [t, r.jsx(x, { children: o }), n ? r.jsx(w, { onPress: n.onClick, children: n.caption }) : null, c ? r.jsx(m, { icon: r.jsx(p, {}), onPress: c }) : null] }), "Alert");
var G = Object.defineProperty, H = (e, t) => G(e, "name", { value: t, configurable: !0 });
H(({ type: e = "neutral", icon: t, children: o, onClose: n }) => r.jsxs($, { $type: e, role: "alert", children: [t, r.jsx(x, { children: o }), n ? r.jsx(m, { icon: r.jsx(p, {}), onPress: n }) : null] }), "InlineAlert");
const z = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var W = Object.defineProperty, N = (e, t) => W(e, "name", { value: t, configurable: !0 });
N((e) => r.jsx(d, { light: V, dark: z, ...e }), "WarningIcon");
const Q = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%235BDB5B'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%235BDB5B'%20stroke-miterlimit='10'/%3e%3c/svg%3e", U = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%230D990D'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%230D990D'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var X = Object.defineProperty, q = (e, t) => X(e, "name", { value: t, configurable: !0 });
const J = q((e) => r.jsx(d, { light: U, dark: Q, ...e }), "CheckmarkIcon"), h = ({
  children: e,
  type: t,
  icon: o,
  onClose: n,
  buttonCaption: c,
  buttonClick: i
}) => {
  const l = c && i;
  return /* @__PURE__ */ r.jsx(
    Z,
    {
      type: t,
      icon: o,
      onClose: n,
      button: l ? { caption: c, onClick: i } : void 0,
      children: e
    }
  );
}, re = (e) => /* @__PURE__ */ r.jsx(h, { ...e, type: "info", icon: /* @__PURE__ */ r.jsx(k, {}) }), oe = (e) => /* @__PURE__ */ r.jsx(h, { ...e, type: "danger", icon: /* @__PURE__ */ r.jsx(j, {}) }), ne = (e) => /* @__PURE__ */ r.jsx(h, { ...e, type: "success", icon: /* @__PURE__ */ r.jsx(J, {}) });
var K = Object.defineProperty, Y = (e, t) => K(e, "name", { value: t, configurable: !0 });
function _({ label: e, description: t, rows: o, cols: n, ...c }) {
  const { isInvalid: i, validationError: l, validate: b } = y(c);
  return r.jsx(C, { ...c, isInvalid: i, validate: b, children: r.jsx(A, { label: e, description: t, realtimeValidationError: l, children: r.jsx(ee, { rows: o, cols: n }) }) });
}
Y(_, "TextArea");
const ee = u(B)`
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border: ${s.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    padding: ${s.spacing4};
    border-radius: ${s.borderRadiusXs};

    font-weight: ${s.fontWeightRegular};
    font-size: ${s.fontSizeMd};
    line-height: ${s.lineHeightMd};

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
`;
export {
  ee as $,
  oe as E,
  re as I,
  ne as S,
  _ as y
};
//# sourceMappingURL=TextArea-Ck3zf1uJ.js.map
