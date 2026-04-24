import { I as s, R as p, W as e, a7 as T, ah as f, U as i } from "./Icon-CE3sId-v.js";
import { T as W } from "./TextInputWithIcon-fuXjTLwe.js";
const v = ({
  label: r,
  ariaLabel: l,
  value: n,
  buttonCaption: x,
  onClick: h,
  buttonCaptionSecondary: t,
  onClickSecondary: o,
  placeholder: a,
  description: d,
  hasMarginTop: c = !1,
  icon: j,
  validate: u
}) => {
  const m = c ? 8 : 0;
  return /* @__PURE__ */ s.jsxs(p, { marginTop: m, children: [
    r && /* @__PURE__ */ s.jsx(e, { children: /* @__PURE__ */ s.jsx(T, { children: r }) }),
    /* @__PURE__ */ s.jsx(e, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(f, { children: [
      /* @__PURE__ */ s.jsx(e, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(
        W,
        {
          ariaLabel: l,
          value: n,
          placeholder: a,
          readOnly: !0,
          icon: j,
          validate: u,
          description: d
        }
      ) }),
      /* @__PURE__ */ s.jsx(i, { onPress: h, children: x }),
      t && /* @__PURE__ */ s.jsx(i, { onPress: o, children: t })
    ] }) })
  ] });
};
export {
  v as T
};
