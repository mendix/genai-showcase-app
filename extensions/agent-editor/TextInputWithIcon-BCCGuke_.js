import { L as l, H as t, ai as x, R as d, aj as j } from "./Icon-UiLWY9J1.js";
const I = l.div`
    position: relative;
    width: 100%;
`, u = ({
  ariaLabel: a,
  value: e,
  onChange: r,
  placeholder: n,
  readOnly: i = !1,
  icon: s,
  validate: p,
  description: o
}) => /* @__PURE__ */ t.jsxs(I, { children: [
  s && /* @__PURE__ */ t.jsx(x, { children: typeof s == "string" ? /* @__PURE__ */ t.jsx(d, { src: s }) : s }),
  /* @__PURE__ */ t.jsx(
    j,
    {
      value: e,
      placeholder: n,
      isReadOnly: i,
      onChange: r,
      "aria-label": a,
      hasIcon: !!s,
      validate: p,
      description: o
    }
  )
] });
export {
  u as T
};
