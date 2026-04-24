import { L as g, I as n, J as h, r as p, R as u, W as c, U as v, a7 as f } from "./Icon-DMu3278C.js";
import { S as m, I as j } from "./ComboBox-BfwSOBFk.js";
import { T as k } from "./TextWithIcon-DpacnK2w.js";
import { B, D as y, E as w, F as C } from "./index-YObaGbux.js";
const b = g.div`
    & [role="combobox"] {
        ${(e) => e.iconurl && `
            background-image: url(${e.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, N = ({
  ariaLabel: e,
  isDisabled: a = !1,
  label: r,
  options: t,
  onSelectionChange: o,
  selectedKey: l,
  validate: x
}) => {
  const d = t.find((i) => i.key === l);
  return /* @__PURE__ */ n.jsx(b, { iconurl: d == null ? void 0 : d.icon, children: /* @__PURE__ */ n.jsx(
    m,
    {
      "aria-label": e,
      isDisabled: a,
      label: r,
      selectedKey: l,
      onSelectionChange: o,
      validate: x,
      children: t.map((i) => /* @__PURE__ */ n.jsx(j, { id: i.key, textValue: i.caption, children: /* @__PURE__ */ n.jsx(k, { text: i.caption, icon: i.icon }) }, i.key))
    }
  ) });
}, s = {
  EmptyValue: "EmptyValue",
  Excluded: "Excluded",
  InvalidContent: "InvalidContent",
  InvalidType: "InvalidType",
  NotFound: "NotFound",
  PrivateValue: "PrivateValue",
  Required: "Required"
}, P = async (e, a) => {
  if (!a)
    return s.Required;
  const r = await B(e, a);
  if (!r)
    return s.NotFound;
  if (r.excluded)
    return s.Excluded;
  if (!y(r))
    return s.InvalidType;
  const t = await w(e, a.qualifiedName);
  if (t != null && t.isPrivate)
    return s.PrivateValue;
  const o = t == null ? void 0 : t.value;
  if (!C(r) && !o)
    return s.EmptyValue;
}, D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, E = (e, a) => I(e, "name", { value: a, configurable: !0 });
const W = E((e) => n.jsx(h, { light: V, dark: D, ...e }), "ConstantIcon"), R = ({
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
  return /* @__PURE__ */ n.jsx(u, { children: /* @__PURE__ */ n.jsx(c, { children: /* @__PURE__ */ n.jsx(v, { onPress: l, isDisabled: r || t, children: a }) }) });
}, q = ({ label: e, buttonCaption: a, onPress: r, disabled: t }) => /* @__PURE__ */ n.jsxs(u, { children: [
  /* @__PURE__ */ n.jsx(c, { children: /* @__PURE__ */ n.jsx(f, { children: e }) }),
  /* @__PURE__ */ n.jsx(c, { children: /* @__PURE__ */ n.jsx(R, { onPress: r, buttonCaption: a, disabled: t }) })
] });
export {
  q as B,
  s as C,
  N as a,
  W as i,
  P as v
};
//# sourceMappingURL=ButtonWithLabel-BOPXLTPZ.js.map
