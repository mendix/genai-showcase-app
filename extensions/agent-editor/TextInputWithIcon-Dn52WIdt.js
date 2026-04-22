import { L as l, I as t, ai as x, S as d, aj as I } from "./Icon-DNloPpRI.js";
const j = l.div`
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
}) => /* @__PURE__ */ t.jsxs(j, { children: [
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
