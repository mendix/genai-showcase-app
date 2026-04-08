import { x as s, F as p, J as e, U as T, a3 as f, T as i } from "./Icon-Bb5knnP8.js";
import { T as F } from "./TextInputWithIcon-DlV8Xxi1.js";
const D = ({
  label: r,
  ariaLabel: l,
  value: n,
  buttonCaption: x,
  onClick: o,
  buttonCaptionSecondary: t,
  onClickSecondary: h,
  placeholder: d,
  description: a,
  hasMarginTop: c = !1,
  icon: j,
  validate: u
}) => {
  const m = c ? 8 : 0;
  return /* @__PURE__ */ s.jsxs(p, { marginTop: m, children: [
    r && /* @__PURE__ */ s.jsx(e, { children: /* @__PURE__ */ s.jsx(T, { children: r }) }),
    /* @__PURE__ */ s.jsx(e, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(f, { children: [
      /* @__PURE__ */ s.jsx(e, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(
        F,
        {
          ariaLabel: l,
          value: n,
          placeholder: d,
          readOnly: !0,
          icon: j,
          validate: u,
          description: a
        }
      ) }),
      /* @__PURE__ */ s.jsx(i, { onPress: o, children: x }),
      t && /* @__PURE__ */ s.jsx(i, { onPress: h, children: t })
    ] }) })
  ] });
};
export {
  D as T
};
