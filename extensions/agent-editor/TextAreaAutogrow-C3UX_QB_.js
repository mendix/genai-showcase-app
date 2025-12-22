import { ax as t, d as u, aH as b, az as v, j as a, aI as m, aA as y, r as p } from "./TextInputWithIcon-elAaw22_.js";
var w = Object.defineProperty, I = (e, o) => w(e, "name", { value: o, configurable: !0 });
function x({ label: e, description: o, rows: n, cols: c, ...i }) {
  const { isInvalid: s, validationError: d, validate: l } = v(i);
  return a.jsx(m, { ...i, isInvalid: s, validate: l, children: a.jsx(y, { label: e, description: o, realtimeValidationError: d, children: a.jsx(j, { rows: n, cols: c }) }) });
}
I(x, "TextArea");
const j = u(b)`
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border: ${t.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    padding: ${t.spacing4};
    border-radius: ${t.borderRadiusXs};

    font-weight: ${t.fontWeightRegular};
    font-size: ${t.fontSizeMd};
    line-height: ${t.lineHeightMd};

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
`, R = u.div`
    position: relative;
    width: 100%;
`, A = u(x)`
    width: 100%;
    
    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: auto;
        padding: 3px 4px;
    }
`, T = ({
  ariaLabel: e,
  value: o,
  onChange: n,
  description: c,
  readOnly: i = !1,
  rows: s = 1,
  validate: d,
  className: l
}) => {
  const h = p.useRef(null), g = (r) => {
    r.style.height = "auto", r.style.height = r.scrollHeight + 2 + "px";
  }, $ = (r) => {
    n && n(r);
  };
  return p.useEffect(() => {
    var f;
    const r = (f = h.current) == null ? void 0 : f.querySelector("textarea");
    r && g(r);
  }, [o]), /* @__PURE__ */ a.jsx(R, { ref: h, className: l, children: /* @__PURE__ */ a.jsx(
    A,
    {
      value: o,
      onChange: $,
      description: c,
      isReadOnly: i,
      "aria-label": e,
      rows: s,
      validate: d
    }
  ) });
};
export {
  T,
  x as y
};
//# sourceMappingURL=TextAreaAutogrow-C3UX_QB_.js.map
