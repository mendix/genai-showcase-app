import { j as s } from "./jsx-runtime-CWOFuNcx.js";
import { a4 as i } from "./PageContainers-B4e_cfEm.js";
import { D as p, a as r, d as f, e as T } from "./formelements-97vqGDJl.js";
import { T as D } from "./TextInputWithIcon-BHELhAcB.js";
const P = ({
  label: e,
  ariaLabel: l,
  value: n,
  buttonCaption: o,
  onClick: x,
  buttonCaptionSecondary: t,
  onClickSecondary: a,
  placeholder: d,
  description: h,
  hasMarginTop: j = !1,
  icon: m,
  validate: c
}) => {
  const u = j ? 8 : 0;
  return /* @__PURE__ */ s.jsxs(p, { marginTop: u, children: [
    e && /* @__PURE__ */ s.jsx(r, { children: /* @__PURE__ */ s.jsx(f, { children: e }) }),
    /* @__PURE__ */ s.jsx(r, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(T, { children: [
      /* @__PURE__ */ s.jsx(r, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(
        D,
        {
          ariaLabel: l,
          value: n,
          placeholder: d,
          readOnly: !0,
          icon: m,
          validate: c,
          description: h
        }
      ) }),
      /* @__PURE__ */ s.jsx(i, { onPress: x, children: o }),
      t && /* @__PURE__ */ s.jsx(i, { onPress: a, children: t })
    ] }) })
  ] });
};
export {
  P as T
};
