import { ad as t, ae as s, ap as n } from "./TextInputWithIcon-B3kv_B9i.js";
const a = t.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, i = ({ icon: e }) => /* @__PURE__ */ s.jsx(a, { children: typeof e == "string" ? /* @__PURE__ */ s.jsx(n, { src: e }) : e }), p = t.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, o = t.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, x = ({ icon: e, text: r }) => /* @__PURE__ */ s.jsxs(p, { children: [
  e && /* @__PURE__ */ s.jsx(i, { icon: e }),
  /* @__PURE__ */ s.jsx(o, { children: r })
] });
export {
  i as I,
  x as T
};
//# sourceMappingURL=TextWithIcon-P8z9vjya.js.map
