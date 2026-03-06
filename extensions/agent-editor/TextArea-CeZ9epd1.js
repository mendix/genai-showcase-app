import { y as s, X as u, w as t, Y as $, Z as f, _ as h } from "./Icon-k-qLBgpy.js";
import { r as o } from "./logger-CtgTiWhk.js";
var b = Object.defineProperty, m = (e, r) => b(e, "name", { value: r, configurable: !0 });
function p({ label: e, description: r, rows: d, cols: n, ...a }) {
  const { isInvalid: c, validationError: i, validate: l } = u(a);
  return t.jsx($, { ...a, isInvalid: c, validate: l, children: t.jsx(f, { label: e, description: r, realtimeValidationError: i, children: t.jsx(g, { rows: d, cols: n }) }) });
}
m(p, "TextArea");
const g = s(h)`
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border: ${o.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    padding: ${o.spacing4};
    border-radius: ${o.borderRadiusXs};

    font-weight: ${o.fontWeightRegular};
    font-size: ${o.fontSizeMd};
    line-height: ${o.lineHeightMd};

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
  p as y
};
//# sourceMappingURL=TextArea-CeZ9epd1.js.map
