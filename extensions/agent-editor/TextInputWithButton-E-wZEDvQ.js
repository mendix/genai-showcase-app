import { w as s, F as p, H as e, S as T, _ as f, T as i } from "./Icon-DL4Zg1xv.js";
import { T as F } from "./TextInputWithIcon-6LmZWe1_.js";
const w = ({
  label: r,
  ariaLabel: l,
  value: n,
  buttonCaption: x,
  onClick: o,
  buttonCaptionSecondary: t,
  onClickSecondary: h,
  placeholder: d,
  description: c,
  hasMarginTop: j = !1,
  icon: u,
  validate: a
}) => {
  const m = j ? 8 : 0;
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
          icon: u,
          validate: a,
          description: c
        }
      ) }),
      /* @__PURE__ */ s.jsx(i, { onPress: o, children: x }),
      t && /* @__PURE__ */ s.jsx(i, { onPress: h, children: t })
    ] }) })
  ] });
};
export {
  w as T
};
//# sourceMappingURL=TextInputWithButton-E-wZEDvQ.js.map
