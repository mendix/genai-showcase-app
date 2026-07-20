import { j as t } from "./jsx-runtime-CWOFuNcx.js";
import { T as i, S as o, X as $, al as m, Y as v, am as w, an as y, r as h, ao as I } from "./PageContainers-BqHFWUr4.js";
var j = Object.defineProperty, S = (e, a) => j(e, "name", { value: a, configurable: !0 });
function f({ label: e, description: a, rows: s, cols: n, ...l }) {
  const { isInvalid: d, validationError: c, validate: p } = $(l);
  return t.jsx(m, { ...l, isInvalid: d, validate: p, children: t.jsx(v, { label: e, description: a, realtimeValidationError: c, children: t.jsx(w, { children: ({ inputRef: x }) => t.jsx(k, { rows: s, cols: n, ref: x }) }) }) });
}
S(f, "TextArea");
const k = o(y)`
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border: ${i.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    padding: ${i.spacing4};
    border-radius: ${i.borderRadiusXs};

    font-weight: ${i.fontWeightRegular};
    font-size: ${i.fontSizeMd};
    line-height: ${i.lineHeightMd};

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
`, R = o.div`
    position: relative;
    width: 100%;
`, B = o(f)`
    width: 100%;

    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: auto;
        padding: 3px 4px;
    }
`, A = ({
  ariaLabel: e,
  value: a,
  placeholder: s,
  onChange: n,
  description: l,
  readOnly: d = !1,
  rows: c = 1,
  validate: p,
  className: x
}) => {
  const u = h.useRef(null), g = (r) => {
    r.style.height = "auto", r.style.height = r.scrollHeight + 2 + "px";
  }, b = (r) => {
    n && n(r);
  };
  return h.useEffect(() => {
    const r = u.current?.querySelector("textarea");
    r && g(r);
  }, [a]), /* @__PURE__ */ t.jsx(R, { ref: u, className: x, children: /* @__PURE__ */ t.jsx(
    B,
    {
      value: a,
      placeholder: s,
      onChange: b,
      description: l,
      isReadOnly: d,
      "aria-label": e,
      rows: c,
      validate: p
    }
  ) });
}, F = o.label`
    padding-top: 2px;
    width: 136px;
`, E = o.label`
    color: ${({ bordercolor: e }) => e};
    border: 1px solid ${({ bordercolor: e }) => e};
    background-color: ${({ backgroundcolor: e }) => e};
    border-radius: 2px;
    padding: 0px 2px 1px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
`, C = o(I)`
    width: 100%;

    & input {
        padding-left: ${(e) => e.hasIcon ? "24px" : void 0};
    }
`, P = (e) => /* @__PURE__ */ t.jsx(h.Suspense, { fallback: /* @__PURE__ */ t.jsx("div", { style: { height: "16px" } }), children: /* @__PURE__ */ t.jsx(C, { ...e }) }), W = o(A).withConfig({
  shouldForwardProp: (e) => !["hasHighlighting"].includes(e)
})`
    width: 100%;
    resize: vertical;
    & textarea {
        ${({ hasHighlighting: e }) => e ? `
      line-height: 155%;
      min-height: calc(1.55em * 5 + 8px);
      background-color: transparent;
      color: transparent;
      caret-color: black;
      
      &::selection {
        background-color: rgba(0, 123, 255, 0.3) !important;
      }
    ` : ""}
        position: relative;
        z-index: 1;
    }
`, z = o.div.withConfig({
  shouldForwardProp: (e) => !["gap", "marginTop", "marginBottom", "alignItems", "justifyContent"].includes(e)
})`
    ${({ marginTop: e }) => e ? "margin-top: " + e + "px" : ""};
    ${({ marginBottom: e }) => e ? "margin-bottom: " + e + "px" : ""};
    display: flex;
    flex-direction: row;
    gap: ${({ gap: e = 8 }) => `${e}px`};
    align-items: ${({ alignItems: e = "normal" }) => e};
    justify-content: ${({ justifyContent: e = "flex-start" }) => e};
`, H = o(z)`
    align-items: flex-start;
`, L = o.div.withConfig({
  shouldForwardProp: (e) => e !== "fullWidth"
})`
    display: flex;
    flex-direction: column;
    ${({ fullWidth: e }) => e ? "flex: 1 1 100%;" : ""}
    width: ${({ fullWidth: e }) => e ? "0%" : "auto"};
`, M = o.div`
    width: 136px;
    padding-top: 4px;
`, O = o.div`
    position: absolute;
    left: 4px;
    top: 4px;
    display: flex;
    align-items: center;
    pointer-events: none;
    z-index: 1;
`;
export {
  f as C,
  z as D,
  O as I,
  M as L,
  E as S,
  L as a,
  k as b,
  W as c,
  F as d,
  H as e,
  P as f
};
