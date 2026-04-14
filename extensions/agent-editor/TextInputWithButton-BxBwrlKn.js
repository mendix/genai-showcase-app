import { I as s, R as p, V as e, a6 as T, ag as f, U as i } from "./Icon-Y0B9OBpL.js";
import { T as I } from "./TextInputWithIcon-B7bgvT4j.js";
const g = ({
  label: r,
  ariaLabel: l,
  value: n,
  buttonCaption: x,
  onClick: o,
  buttonCaptionSecondary: t,
  onClickSecondary: a,
  placeholder: h,
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
        I,
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
      /* @__PURE__ */ s.jsx(i, { onPress: o, children: x }),
      t && /* @__PURE__ */ s.jsx(i, { onPress: a, children: t })
    ] }) })
  ] });
};
export {
  g as T
};
