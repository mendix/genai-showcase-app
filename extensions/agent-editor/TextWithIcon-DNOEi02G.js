import { j as s } from "./jsx-runtime-CWOFuNcx.js";
import { a4 as l, S as n, a1 as u } from "./PageContainers-BqHFWUr4.js";
import { D as g, a as t, d as v, e as I } from "./formelements-DRgD5gZX.js";
import { T } from "./TextInputWithIcon-Cm7gZoVm.js";
const k = ({
  label: e,
  ariaLabel: r,
  value: a,
  buttonCaption: o,
  onClick: x,
  buttonCaptionSecondary: i,
  onClickSecondary: c,
  placeholder: d,
  description: p,
  hasMarginTop: h = !1,
  icon: j,
  validate: f
}) => {
  const m = h ? 8 : 0;
  return /* @__PURE__ */ s.jsxs(g, { marginTop: m, children: [
    e && /* @__PURE__ */ s.jsx(t, { children: /* @__PURE__ */ s.jsx(v, { children: e }) }),
    /* @__PURE__ */ s.jsx(t, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(I, { children: [
      /* @__PURE__ */ s.jsx(t, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(
        T,
        {
          ariaLabel: r,
          value: a,
          placeholder: d,
          readOnly: !0,
          icon: j,
          validate: f,
          description: p
        }
      ) }),
      /* @__PURE__ */ s.jsx(l, { onPress: x, children: o }),
      i && /* @__PURE__ */ s.jsx(l, { onPress: c, children: i })
    ] }) })
  ] });
}, W = n.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, w = ({ icon: e }) => /* @__PURE__ */ s.jsx(W, { children: typeof e == "string" ? /* @__PURE__ */ s.jsx(u, { src: e }) : e }), y = n.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, D = n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, A = ({ icon: e, text: r }) => /* @__PURE__ */ s.jsxs(y, { children: [
  e && /* @__PURE__ */ s.jsx(w, { icon: e }),
  /* @__PURE__ */ s.jsx(D, { children: r })
] });
export {
  w as I,
  A as T,
  k as a
};
