import { j as s } from "./jsx-runtime-CWOFuNcx.js";
import { I as l, Q as x } from "./PageContainers-1sk3OYaf.js";
import { I, f as m } from "./formelements-CKhf3RUn.js";
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
  t && /* @__PURE__ */ s.jsx(I, { children: typeof t == "string" ? /* @__PURE__ */ s.jsx(x, { src: t }) : t }),
  /* @__PURE__ */ s.jsx(
    m,
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
