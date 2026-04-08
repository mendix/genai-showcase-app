import { A as x, x as t, a4 as l, H as d, a5 as I } from "./Icon-Bb5knnP8.js";
const h = x.div`
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
}) => /* @__PURE__ */ t.jsxs(h, { children: [
  s && /* @__PURE__ */ t.jsx(l, { children: typeof s == "string" ? /* @__PURE__ */ t.jsx(d, { src: s }) : s }),
  /* @__PURE__ */ t.jsx(
    I,
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
