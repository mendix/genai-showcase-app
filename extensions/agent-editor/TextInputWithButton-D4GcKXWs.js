import { w as s, D as p, H as e, Q as T, a1 as f, T as i } from "./Icon-DQcqUu4m.js";
import { T as D } from "./TextInputWithIcon-DLQV_-sh.js";
const w = ({
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
        D,
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
  w as T
};
