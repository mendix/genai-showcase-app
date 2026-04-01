import { z as t, w as s, B as r } from "./Icon-B4HLWuEl.js";
const x = t.div`
    font-weight: 600;
`, i = t.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, o = ({ icon: e }) => /* @__PURE__ */ s.jsx(i, { children: typeof e == "string" ? /* @__PURE__ */ s.jsx(r, { src: e }) : e }), a = t.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, l = t.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, c = ({ icon: e, text: n }) => /* @__PURE__ */ s.jsxs(a, { children: [
  e && /* @__PURE__ */ s.jsx(o, { icon: e }),
  /* @__PURE__ */ s.jsx(l, { children: n })
] });
export {
  x as B,
  o as I,
  c as T
};
//# sourceMappingURL=TextWithIcon-BAbfKU6H.js.map
