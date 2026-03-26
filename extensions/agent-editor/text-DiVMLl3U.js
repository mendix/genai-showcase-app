import { y as u, w as n, x as h, r as p, F as x, H as c, T as f, S as v } from "./Icon-DlQJfq7F.js";
import { S as m, I as j } from "./ComboBox-Dckpz5IF.js";
import { T as k } from "./TextWithIcon-sxhIisHZ.js";
import { f as B, i as w, j as y, k as b } from "./modelUtils-whA8-BBg.js";
const C = u.div`
    & [role="combobox"] {
        ${(e) => e.iconurl && `
            background-image: url(${e.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, P = ({
  ariaLabel: e,
  isDisabled: a = !1,
  label: r,
  options: t,
  onSelectionChange: o,
  selectedKey: l,
  validate: g
}) => {
  const d = t.find((i) => i.key === l);
  return /* @__PURE__ */ n.jsx(C, { iconurl: d == null ? void 0 : d.icon, children: /* @__PURE__ */ n.jsx(
    m,
    {
      "aria-label": e,
      isDisabled: a,
      label: r,
      selectedKey: l,
      onSelectionChange: o,
      validate: g,
      children: t.map((i) => /* @__PURE__ */ n.jsx(j, { id: i.key, textValue: i.caption, children: /* @__PURE__ */ n.jsx(k, { text: i.caption, icon: i.icon }) }, i.key))
    }
  ) });
}, V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, E = (e, a) => I(e, "name", { value: a, configurable: !0 });
const q = E((e) => n.jsx(h, { light: D, dark: V, ...e }), "ConstantIcon"), s = {
  EmptyValue: "EmptyValue",
  Excluded: "Excluded",
  InvalidType: "InvalidType",
  NotFound: "NotFound",
  PrivateValue: "PrivateValue",
  Required: "Required"
}, L = async (e, a) => {
  if (!a)
    return s.Required;
  const r = await B(e, a.documentId);
  if (!r)
    return s.NotFound;
  if (r.excluded)
    return s.Excluded;
  if (!w(r))
    return s.InvalidType;
  const t = await y(e, a.qualifiedName);
  if (t != null && t.isPrivate)
    return s.PrivateValue;
  const o = t == null ? void 0 : t.value;
  if (!b(r) && !o)
    return s.EmptyValue;
}, S = ({
  onPress: e,
  buttonCaption: a,
  disabled: r
}) => {
  const [t, o] = p.useState(!1), l = async () => {
    if (!(!e || t)) {
      o(!0);
      try {
        await e();
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ n.jsx(x, { children: /* @__PURE__ */ n.jsx(c, { children: /* @__PURE__ */ n.jsx(f, { onPress: l, isDisabled: r || t, children: a }) }) });
}, T = ({ label: e, buttonCaption: a, onPress: r, disabled: t }) => /* @__PURE__ */ n.jsxs(x, { children: [
  /* @__PURE__ */ n.jsx(c, { children: /* @__PURE__ */ n.jsx(v, { children: e }) }),
  /* @__PURE__ */ n.jsx(c, { children: /* @__PURE__ */ n.jsx(S, { onPress: r, buttonCaption: a, disabled: t }) })
] }), W = u.div`
    font-weight: 600;
`;
export {
  W as B,
  s as C,
  T as a,
  P as b,
  q as i,
  L as v
};
//# sourceMappingURL=text-DiVMLl3U.js.map
