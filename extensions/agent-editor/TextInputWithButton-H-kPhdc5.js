import { R as s, a4 as p, a9 as e, ai as f, aq as T, a8 as i } from "./formelements-DgWWXRMR.js";
import { T as R } from "./TextInputWithIcon-XI8CupIZ.js";
const D = ({
  label: r,
  ariaLabel: l,
  value: n,
  buttonCaption: x,
  onClick: a,
  buttonCaptionSecondary: t,
  onClickSecondary: o,
  placeholder: h,
  description: d,
  hasMarginTop: c = !1,
  icon: j,
  validate: u
}) => {
  const m = c ? 8 : 0;
  return /* @__PURE__ */ s.jsxs(p, { marginTop: m, children: [
    r && /* @__PURE__ */ s.jsx(e, { children: /* @__PURE__ */ s.jsx(f, { children: r }) }),
    /* @__PURE__ */ s.jsx(e, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(T, { children: [
      /* @__PURE__ */ s.jsx(e, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(
        R,
        {
          ariaLabel: l,
          value: n,
          placeholder: h,
          readOnly: !0,
          icon: j,
          validate: u,
          description: d
        }
      ) }),
      /* @__PURE__ */ s.jsx(i, { onPress: a, children: x }),
      t && /* @__PURE__ */ s.jsx(i, { onPress: o, children: t })
    ] }) })
  ] });
};
export {
  D as T
};
