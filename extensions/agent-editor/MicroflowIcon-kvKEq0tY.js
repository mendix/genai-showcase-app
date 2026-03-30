import { y as d, W as h, w as t, X as m, Y as g, Z as u, x as p } from "./Icon-DlQJfq7F.js";
import { r as o } from "./DesignSystemTokens-BZrmEyPo.js";
var v = Object.defineProperty, f = (e, r) => v(e, "name", { value: r, configurable: !0 });
function $({ label: e, description: r, rows: a, cols: c, ...i }) {
  const { isInvalid: n, validationError: s, validate: l } = h(i);
  return t.jsx(m, { ...i, isInvalid: n, validate: l, children: t.jsx(g, { label: e, description: r, realtimeValidationError: s, children: t.jsx(x, { rows: a, cols: c }) }) });
}
f($, "TextArea");
const x = d(u)`
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
`, b = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", w = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var k = Object.defineProperty, C = (e, r) => k(e, "name", { value: r, configurable: !0 });
const I = C((e) => t.jsx(p, { light: w, dark: b, ...e }), "MicroflowIcon");
export {
  I as n,
  $ as y
};
//# sourceMappingURL=MicroflowIcon-kvKEq0tY.js.map
