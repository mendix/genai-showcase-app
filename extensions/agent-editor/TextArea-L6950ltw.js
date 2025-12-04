import { j as r, p as d, r as u, q as k, aS as s, H as g, G as a, M as j, aP as p, aT as B, aU as y, aV as C, T as A, aW as D, I as M } from "./componentLoader-l-cCI7h-.js";
const I = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", P = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var S = Object.defineProperty, L = (e, t) => S(e, "name", { value: t, configurable: !0 });
const f = L((e) => r.jsx(d, { light: P, dark: I, ...e }), "CloseIcon"), O = /* @__PURE__ */ u.createContext(null);
function ce(e) {
  let t = u.useRef({});
  return /* @__PURE__ */ k.createElement(O.Provider, {
    value: t
  }, e.children);
}
const ae = /* @__PURE__ */ u.createContext({
  isSelected: !1
});
var E = Object.defineProperty, h = (e, t) => E(e, "name", { value: t, configurable: !0 });
function $(e) {
  throw new Error("Unexpected object", e);
}
h($, "assertNever");
function R(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
h(R, "clamp");
function T(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
h(T, "getIconSrc");
var F = Object.defineProperty, Z = (e, t) => F(e, "name", { value: t, configurable: !0 });
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
      $(e);
  }
}
Z(v, "getAlertStyleByType");
const x = g.div`
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
`, b = g.div`
    padding: ${a.spacing4} ${a.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var G = Object.defineProperty, H = (e, t) => G(e, "name", { value: t, configurable: !0 });
const V = H(({ type: e = "neutral", icon: t, children: o, button: n, onClose: c }) => r.jsxs(x, { $type: e, $showBorder: !0, role: "alert", children: [t, r.jsx(b, { children: o }), n ? r.jsx(j, { onPress: n.onClick, children: n.caption }) : null, c ? r.jsx(p, { icon: r.jsx(f, {}), onPress: c }) : null] }), "Alert");
var W = Object.defineProperty, z = (e, t) => W(e, "name", { value: t, configurable: !0 });
z(({ type: e = "neutral", icon: t, children: o, onClose: n }) => r.jsxs(x, { $type: e, role: "alert", children: [t, r.jsx(b, { children: o }), n ? r.jsx(p, { icon: r.jsx(f, {}), onPress: n }) : null] }), "InlineAlert");
const U = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", q = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var N = Object.defineProperty, X = (e, t) => N(e, "name", { value: t, configurable: !0 });
X((e) => r.jsx(d, { light: q, dark: U, ...e }), "WarningIcon");
const J = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%235BDB5B'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%235BDB5B'%20stroke-miterlimit='10'/%3e%3c/svg%3e", K = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%230D990D'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%230D990D'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Q = Object.defineProperty, Y = (e, t) => Q(e, "name", { value: t, configurable: !0 });
const _ = Y((e) => r.jsx(d, { light: K, dark: J, ...e }), "CheckmarkIcon"), m = ({
  children: e,
  type: t,
  icon: o,
  onClose: n,
  buttonCaption: c,
  buttonClick: l
}) => {
  const i = c && l;
  return /* @__PURE__ */ r.jsx(
    V,
    {
      type: t,
      icon: o,
      onClose: n,
      button: i ? { caption: c, onClick: l } : void 0,
      children: e
    }
  );
}, se = (e) => /* @__PURE__ */ r.jsx(m, { ...e, type: "info", icon: /* @__PURE__ */ r.jsx(B, {}) }), le = (e) => /* @__PURE__ */ r.jsx(m, { ...e, type: "danger", icon: /* @__PURE__ */ r.jsx(y, {}) }), ie = (e) => /* @__PURE__ */ r.jsx(m, { ...e, type: "success", icon: /* @__PURE__ */ r.jsx(_, {}) });
var ee = Object.defineProperty, te = (e, t) => ee(e, "name", { value: t, configurable: !0 });
function re({ label: e, description: t, rows: o, cols: n, ...c }) {
  const { isInvalid: l, validationError: i, validate: w } = A(c);
  return r.jsx(D, { ...c, isInvalid: l, validate: w, children: r.jsx(M, { label: e, description: t, realtimeValidationError: i, children: r.jsx(oe, { rows: o, cols: n }) }) });
}
te(re, "TextArea");
const oe = g(C)`
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border: ${a.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    padding: ${a.spacing4};
    border-radius: ${a.borderRadiusXs};

    font-weight: ${a.fontWeightRegular};
    font-size: ${a.fontSizeMd};
    line-height: ${a.lineHeightMd};

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
  ae as $,
  le as E,
  se as I,
  ie as S,
  ce as a,
  oe as b,
  re as y
};
//# sourceMappingURL=TextArea-L6950ltw.js.map
