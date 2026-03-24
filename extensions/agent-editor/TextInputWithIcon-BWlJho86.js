import { y as l, w as t, a0 as x, U as d, a1 as I } from "./Icon-CjmU6z_u.js";
const h = l.div`
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
  s && /* @__PURE__ */ t.jsx(x, { children: typeof s == "string" ? /* @__PURE__ */ t.jsx(d, { src: s }) : s }),
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
//# sourceMappingURL=TextInputWithIcon-BWlJho86.js.map
