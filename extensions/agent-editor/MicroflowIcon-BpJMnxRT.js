import { y as d, W as m, w as n, X as u, Y as h, Z as g, x as f } from "./Icon-DL4Zg1xv.js";
import { r as a } from "./DesignSystemTokens-CB_9gr2a.js";
var w = Object.defineProperty, p = (e, o) => w(e, "name", { value: o, configurable: !0 });
function v({ label: e, description: o, rows: r, cols: i, ...t }) {
  const { isInvalid: s, validationError: l, validate: c } = m(t);
  return n.jsx(u, { ...t, isInvalid: s, validate: c, children: n.jsx(h, { label: e, description: o, realtimeValidationError: l, children: n.jsx($, { rows: r, cols: i }) }) });
}
p(v, "TextArea");
const $ = d(g)`
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
`, I = async (e, o) => {
  const r = await x(e, o);
  if (!r)
    return await e.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await e.ui.editors.editDocument(r.$ID);
}, x = async (e, o) => {
  if (!o)
    return null;
  const [r, i] = o.split(".");
  if (!r || !i)
    return null;
  const t = await e.app.model.microflows.loadAll(
    (s) => s.moduleName === r && s.name === i
  );
  return t.length === 0 ? null : t[0];
}, D = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, b = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", C = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var k = Object.defineProperty, B = (e, o) => k(e, "name", { value: o, configurable: !0 });
const H = B((e) => n.jsx(f, { light: C, dark: b, ...e }), "MicroflowIcon");
export {
  D as C,
  x as g,
  I as h,
  H as n,
  v as y
};
//# sourceMappingURL=MicroflowIcon-BpJMnxRT.js.map
