import { y as g, w as a, x as p, r as h, F as u, H as c, T as f, S as v } from "./Icon-CjmU6z_u.js";
import { S as m, I as j } from "./ComboBox-BcDF6tWV.js";
import { T as k } from "./TextWithIcon-D6dQcKBr.js";
import { f as y, i as B, j as w, k as b } from "./modelUtils-BbV2htFf.js";
const C = g.div`
    & [role="combobox"] {
        ${(e) => e.iconurl && `
            background-image: url(${e.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, q = ({
  ariaLabel: e,
  isDisabled: n = !1,
  label: r,
  options: t,
  onSelectionChange: o,
  selectedKey: l,
  validate: x
}) => {
  const d = t.find((i) => i.key === l);
  return /* @__PURE__ */ a.jsx(C, { iconurl: d == null ? void 0 : d.icon, children: /* @__PURE__ */ a.jsx(
    m,
    {
      "aria-label": e,
      isDisabled: n,
      label: r,
      selectedKey: l,
      onSelectionChange: o,
      validate: x,
      children: t.map((i) => /* @__PURE__ */ a.jsx(j, { id: i.key, textValue: i.caption, children: /* @__PURE__ */ a.jsx(k, { text: i.caption, icon: i.icon }) }, i.key))
    }
  ) });
}, V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, E = (e, n) => I(e, "name", { value: n, configurable: !0 });
const L = E((e) => a.jsx(p, { light: D, dark: V, ...e }), "ConstantIcon"), s = {
  EmptyValue: "EmptyValue",
  Excluded: "Excluded",
  InvalidType: "InvalidType",
  NotFound: "NotFound",
  PrivateValue: "PrivateValue",
  Required: "Required"
}, P = async (e, n) => {
  if (!n)
    return s.Required;
  const r = await y(e, n.documentId);
  if (!r)
    return s.NotFound;
  if (r.excluded)
    return s.Excluded;
  if (!B(r))
    return s.InvalidType;
  const t = await w(e, n.qualifiedName);
  if ((t == null ? void 0 : t.status) === "private")
    return s.PrivateValue;
  const o = t == null ? void 0 : t.value;
  if (!b(r) && !o)
    return s.EmptyValue;
}, S = ({
  onPress: e,
  buttonCaption: n,
  disabled: r
}) => {
  const [t, o] = h.useState(!1), l = async () => {
    if (!(!e || t)) {
      o(!0);
      try {
        await e();
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ a.jsx(u, { children: /* @__PURE__ */ a.jsx(c, { children: /* @__PURE__ */ a.jsx(f, { onPress: l, isDisabled: r || t, children: n }) }) });
}, W = ({ label: e, buttonCaption: n, onPress: r, disabled: t }) => /* @__PURE__ */ a.jsxs(u, { children: [
  /* @__PURE__ */ a.jsx(c, { children: /* @__PURE__ */ a.jsx(v, { children: e }) }),
  /* @__PURE__ */ a.jsx(c, { children: /* @__PURE__ */ a.jsx(S, { onPress: r, buttonCaption: n, disabled: t }) })
] });
export {
  W as B,
  s as C,
  q as a,
  L as i,
  P as v
};
//# sourceMappingURL=ButtonWithLabel-Bz8wvX1f.js.map
