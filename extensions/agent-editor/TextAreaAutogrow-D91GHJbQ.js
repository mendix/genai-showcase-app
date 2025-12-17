import { ay as c, d, aI as D, aA as M, j as r, aJ as I, aB as L, p as h, aK as l, b as P, aE as $, aL as S, r as f } from "./TextInputWithIcon-el7gQ0vO.js";
var O = Object.defineProperty, R = (e, t) => O(e, "name", { value: t, configurable: !0 });
function w({ label: e, description: t, rows: o, cols: n, ...a }) {
  const { isInvalid: i, validationError: g, validate: u } = M(a);
  return r.jsx(I, { ...a, isInvalid: i, validate: u, children: r.jsx(L, { label: e, description: t, realtimeValidationError: g, children: r.jsx(T, { rows: o, cols: n }) }) });
}
R(w, "TextArea");
const T = d(D)`
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
`, E = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", W = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var F = Object.defineProperty, Z = (e, t) => F(e, "name", { value: t, configurable: !0 });
const b = Z((e) => r.jsx(h, { light: W, dark: E, ...e }), "CloseIcon");
var G = Object.defineProperty, p = (e, t) => G(e, "name", { value: t, configurable: !0 });
function k(e) {
  throw new Error("Unexpected object", e);
}
p(k, "assertNever");
function H(e, t, o) {
  return e < t ? t : e > o ? o : e;
}
p(H, "clamp");
function z(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
p(z, "getIconSrc");
var V = Object.defineProperty, q = (e, t) => V(e, "name", { value: t, configurable: !0 });
function y(e) {
  switch (e) {
    case "warning":
      return l`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestOrange};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultOrange};
            `;
    case "info":
      return l`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestBlue};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultBlue};
            `;
    case "success":
      return l`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGreen};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGreen};
            `;
    case "danger":
      return l`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestRed};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
            `;
    case "neutral":
      return l`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGrey};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGrey};
            `;
    default:
      k(e);
  }
}
q(y, "getAlertStyleByType");
const j = d.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: stretch;

    min-height: 28px;
    height: fit-content;

    padding: 0 8px;

    ${({ $showBorder: e }) => e && l`
            border-width: 1px 0;
            border-style: solid;
        `}

    ${({ $type: e }) => y(e)}
`, B = d.div`
    padding: ${c.spacing4} ${c.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var J = Object.defineProperty, K = (e, t) => J(e, "name", { value: t, configurable: !0 });
const N = K(({ type: e = "neutral", icon: t, children: o, button: n, onClose: a }) => r.jsxs(j, { $type: e, $showBorder: !0, role: "alert", children: [t, r.jsx(B, { children: o }), n ? r.jsx(P, { onPress: n.onClick, children: n.caption }) : null, a ? r.jsx($, { icon: r.jsx(b, {}), onPress: a }) : null] }), "Alert");
var U = Object.defineProperty, X = (e, t) => U(e, "name", { value: t, configurable: !0 });
X(({ type: e = "neutral", icon: t, children: o, onClose: n }) => r.jsxs(j, { $type: e, role: "alert", children: [t, r.jsx(B, { children: o }), n ? r.jsx($, { icon: r.jsx(b, {}), onPress: n }) : null] }), "InlineAlert");
const Q = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Y = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var _ = Object.defineProperty, ee = (e, t) => _(e, "name", { value: t, configurable: !0 });
const te = ee((e) => r.jsx(h, { light: Y, dark: Q, ...e }), "WarningIcon"), re = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%235BDB5B'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%235BDB5B'%20stroke-miterlimit='10'/%3e%3c/svg%3e", oe = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%230D990D'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%230D990D'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ne = Object.defineProperty, ae = (e, t) => ne(e, "name", { value: t, configurable: !0 });
const se = ae((e) => r.jsx(h, { light: oe, dark: re, ...e }), "CheckmarkIcon"), ce = d.div`
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
`, m = ({
  children: e,
  type: t,
  icon: o,
  onClose: n,
  buttonCaption: a,
  buttonClick: i
}) => {
  const g = a && i;
  return /* @__PURE__ */ r.jsx(ce, { children: /* @__PURE__ */ r.jsx(
    N,
    {
      type: t,
      icon: o,
      onClose: n,
      button: g ? { caption: a, onClick: i } : void 0,
      children: e
    }
  ) });
}, ge = (e) => /* @__PURE__ */ r.jsx(m, { ...e, type: "info", icon: /* @__PURE__ */ r.jsx(S, {}) }), ue = (e) => /* @__PURE__ */ r.jsx(m, { ...e, type: "warning", icon: /* @__PURE__ */ r.jsx(te, {}) }), he = (e) => /* @__PURE__ */ r.jsx(m, { ...e, type: "success", icon: /* @__PURE__ */ r.jsx(se, {}) }), ie = d.div`
    position: relative;
    width: 100%;
`, le = d(w)`
    width: 100%;
    
    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: auto;
        padding: 3px 4px;
    }
`, pe = ({
  ariaLabel: e,
  value: t,
  onChange: o,
  description: n,
  readOnly: a = !1,
  rows: i = 1,
  validate: g,
  className: u
}) => {
  const x = f.useRef(null), A = (s) => {
    s.style.height = "auto", s.style.height = s.scrollHeight + 2 + "px";
  }, C = (s) => {
    o && o(s);
  };
  return f.useEffect(() => {
    var v;
    const s = (v = x.current) == null ? void 0 : v.querySelector("textarea");
    s && A(s);
  }, [t]), /* @__PURE__ */ r.jsx(ie, { ref: x, className: u, children: /* @__PURE__ */ r.jsx(
    le,
    {
      value: t,
      onChange: C,
      description: n,
      isReadOnly: a,
      "aria-label": e,
      rows: i,
      validate: g
    }
  ) });
};
export {
  ge as I,
  he as S,
  pe as T,
  ue as W,
  w as y
};
//# sourceMappingURL=TextAreaAutogrow-D91GHJbQ.js.map
