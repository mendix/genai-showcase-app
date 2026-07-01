import { T as l, R as t, ar as x, a5 as d, as as I } from "./formelements-DgWWXRMR.js";
const h = l.div`
    position: relative;
    width: 100%;
`, u = ({
  ariaLabel: a,
  value: r,
  onChange: e,
  placeholder: n,
  readOnly: i = !1,
  icon: s,
  validate: p,
  description: o
}) => /* @__PURE__ */ t.jsxs(h, { children: [
  s && /* @__PURE__ */ t.jsx(x, { children: typeof s == "string" ? /* @__PURE__ */ t.jsx(d, { src: s }) : s }),
  /* @__PURE__ */ t.jsx(
    I,
    {
      value: r,
      placeholder: n,
      isReadOnly: i,
      onChange: e,
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
