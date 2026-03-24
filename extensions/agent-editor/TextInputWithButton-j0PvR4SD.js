import { D as s, N as p, O as e, S as T, a5 as f, X as i } from "./Icon-Cg7sFTxA.js";
import { T as D } from "./TextInputWithIcon-Dcr1cCAL.js";
const F = ({
  label: r,
  ariaLabel: l,
  value: n,
  buttonCaption: x,
  onClick: o,
  buttonCaptionSecondary: t,
  onClickSecondary: h,
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
        D,
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
      /* @__PURE__ */ s.jsx(i, { onPress: o, children: x }),
      t && /* @__PURE__ */ s.jsx(i, { onPress: h, children: t })
    ] }) })
  ] });
};
export {
  F as T
};
//# sourceMappingURL=TextInputWithButton-j0PvR4SD.js.map
