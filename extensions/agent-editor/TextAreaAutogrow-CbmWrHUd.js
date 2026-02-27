import { z as n, r as s, w as i } from "./TextInputWithIcon-Cj_bxptw.js";
import { y as g } from "./ComboBox-WmIrwMRX.js";
const w = n.div`
    position: relative;
    width: 100%;
`, y = n(g)`
    width: 100%;

    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: auto;
        padding: 3px 4px;
    }
`, j = ({
  ariaLabel: p,
  value: e,
  onChange: r,
  description: x,
  readOnly: c = !1,
  rows: l = 1,
  validate: h,
  className: f
}) => {
  const a = s.useRef(null), u = (t) => {
    t.style.height = "auto", t.style.height = t.scrollHeight + 2 + "px";
  }, d = (t) => {
    r && r(t);
  };
  return s.useEffect(() => {
    var o;
    const t = (o = a.current) == null ? void 0 : o.querySelector("textarea");
    t && u(t);
  }, [e]), /* @__PURE__ */ i.jsx(w, { ref: a, className: f, children: /* @__PURE__ */ i.jsx(
    y,
    {
      value: e,
      onChange: d,
      description: x,
      isReadOnly: c,
      "aria-label": p,
      rows: l,
      validate: h
    }
  ) });
};
export {
  j as T
};
//# sourceMappingURL=TextAreaAutogrow-CbmWrHUd.js.map
