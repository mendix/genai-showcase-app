import { r as a, q as $, I as r, H as u, aU as f, M as b, j as t, aV as h, N as p } from "./componentLoader-DyfefHgs.js";
const x = /* @__PURE__ */ a.createContext(null);
function j(e) {
  let o = a.useRef({});
  return /* @__PURE__ */ $.createElement(x.Provider, {
    value: o
  }, e.children);
}
const k = /* @__PURE__ */ a.createContext({
  isSelected: !1
});
var m = Object.defineProperty, g = (e, o) => m(e, "name", { value: o, configurable: !0 });
function v({ label: e, description: o, rows: n, cols: d, ...c }) {
  const { isInvalid: l, validationError: s, validate: i } = b(c);
  return t.jsx(h, { ...c, isInvalid: l, validate: i, children: t.jsx(p, { label: e, description: o, realtimeValidationError: s, children: t.jsx(I, { rows: n, cols: d }) }) });
}
g(v, "TextArea");
const I = u(f)`
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border: ${r.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    padding: ${r.spacing4};
    border-radius: ${r.borderRadiusXs};

    font-weight: ${r.fontWeightRegular};
    font-size: ${r.fontSizeMd};
    line-height: ${r.lineHeightMd};

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
  k as $,
  j as a,
  I as b,
  v as y
};
