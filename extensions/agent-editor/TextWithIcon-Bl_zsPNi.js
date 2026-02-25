import { ad as t, ae as s, ao as n } from "./TextInputWithIcon-D0NqO6mp.js";
const a = t.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, i = ({ icon: e }) => /* @__PURE__ */ s.jsx(a, { children: typeof e == "string" ? /* @__PURE__ */ s.jsx(n, { src: e }) : e }), o = t.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, p = t.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, x = ({ icon: e, text: r }) => /* @__PURE__ */ s.jsxs(o, { children: [
  e && /* @__PURE__ */ s.jsx(i, { icon: e }),
  /* @__PURE__ */ s.jsx(p, { children: r })
] });
export {
  i as I,
  x as T
};
//# sourceMappingURL=TextWithIcon-Bl_zsPNi.js.map
