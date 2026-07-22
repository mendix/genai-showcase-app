import { j as s } from "./jsx-runtime-CWOFuNcx.js";
import { S as l, a1 as x } from "./PageContainers-BK4-uZdZ.js";
import { I as m, f as I } from "./formelements-Dsgsan70.js";
const d = l.div`
    position: relative;
    width: 100%;
`, u = ({
  ariaLabel: r,
  value: a,
  onChange: e,
  placeholder: i,
  readOnly: n = !1,
  icon: t,
  validate: o,
  description: p
}) => /* @__PURE__ */ s.jsxs(d, { children: [
  t && /* @__PURE__ */ s.jsx(m, { children: typeof t == "string" ? /* @__PURE__ */ s.jsx(x, { src: t }) : t }),
  /* @__PURE__ */ s.jsx(
    I,
    {
      value: a,
      placeholder: i,
      isReadOnly: n,
      onChange: e,
      "aria-label": r,
      hasIcon: !!t,
      validate: o,
      description: p
    }
  )
] });
export {
  u as T
};
