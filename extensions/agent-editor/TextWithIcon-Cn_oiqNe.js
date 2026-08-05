import { j as s } from "./jsx-runtime-CWOFuNcx.js";
import { T as l, I as n, Q as u } from "./PageContainers-1sk3OYaf.js";
import { D as I, a as t, d as T, e as g } from "./formelements-CKhf3RUn.js";
import { T as v } from "./TextInputWithIcon-CAF7kWDV.js";
const k = ({
  label: e,
  ariaLabel: r,
  value: o,
  buttonCaption: x,
  onClick: a,
  buttonCaptionSecondary: i,
  onClickSecondary: c,
  placeholder: d,
  description: p,
  hasMarginTop: h = !1,
  icon: j,
  validate: f
}) => {
  const m = h ? 8 : 0;
  return /* @__PURE__ */ s.jsxs(I, { marginTop: m, children: [
    e && /* @__PURE__ */ s.jsx(t, { children: /* @__PURE__ */ s.jsx(T, { children: e }) }),
    /* @__PURE__ */ s.jsx(t, { fullWidth: !0, children: /* @__PURE__ */ s.jsxs(g, { children: [
      /* @__PURE__ */ s.jsx(t, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(
        v,
        {
          ariaLabel: r,
          value: o,
          placeholder: d,
          readOnly: !0,
          icon: j,
          validate: f,
          description: p
        }
      ) }),
      /* @__PURE__ */ s.jsx(l, { onPress: a, children: x }),
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
