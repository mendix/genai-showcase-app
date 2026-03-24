import { y as g, w as n, x as p, r as h, J as u, K as d, T as v, S as f } from "./Icon-DjcrVRZV.js";
import { S as m, I as j } from "./ComboBox-B8hY_AzW.js";
import { T as k } from "./TextWithIcon-BR0LcMCK.js";
import { f as y, i as B, j as w, k as b } from "./modelUtils-Bx_f070p.js";
const D = g.div`
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
  onSelectionChange: i,
  selectedKey: s,
  validate: x
}) => {
  const c = t.find((o) => o.key === s);
  return /* @__PURE__ */ n.jsx(D, { iconurl: c == null ? void 0 : c.icon, children: /* @__PURE__ */ n.jsx(
    m,
    {
      "aria-label": e,
      isDisabled: a,
      label: r,
      selectedKey: s,
      onSelectionChange: i,
      validate: x,
      children: t.map((o) => /* @__PURE__ */ n.jsx(j, { id: o.key, textValue: o.caption, children: /* @__PURE__ */ n.jsx(k, { text: o.caption, icon: o.icon }) }, o.key))
    }
  ) });
}, C = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, S = (e, a) => I(e, "name", { value: a, configurable: !0 });
const W = S((e) => n.jsx(p, { light: V, dark: C, ...e }), "ConstantIcon"), l = {
  Required: "Required",
  NotFound: "NotFound",
  InvalidType: "InvalidType",
  EmptyValue: "EmptyValue",
  PrivateValue: "PrivateValue"
}, q = async (e, a) => {
  if (!a)
    return l.Required;
  const r = await y(e, a);
  if (!r)
    return l.NotFound;
  if (!B(r))
    return l.InvalidType;
  const t = await w(e, a);
  if ((t == null ? void 0 : t.status) === "private")
    return l.PrivateValue;
  const i = t == null ? void 0 : t.value;
  if (!b(r) && !i)
    return l.EmptyValue;
}, E = ({
  onPress: e,
  buttonCaption: a,
  disabled: r
}) => {
  const [t, i] = h.useState(!1), s = async () => {
    if (!(!e || t)) {
      i(!0);
      try {
        await e();
      } finally {
        i(!1);
      }
    }
  };
  return /* @__PURE__ */ n.jsx(u, { children: /* @__PURE__ */ n.jsx(d, { children: /* @__PURE__ */ n.jsx(v, { onPress: s, isDisabled: r || t, children: a }) }) });
}, N = ({ label: e, buttonCaption: a, onPress: r, disabled: t }) => /* @__PURE__ */ n.jsxs(u, { children: [
  /* @__PURE__ */ n.jsx(d, { children: /* @__PURE__ */ n.jsx(f, { children: e }) }),
  /* @__PURE__ */ n.jsx(d, { children: /* @__PURE__ */ n.jsx(E, { onPress: r, buttonCaption: a, disabled: t }) })
] });
export {
  N as B,
  l as C,
  P as a,
  W as i,
  q as v
};
//# sourceMappingURL=ButtonWithLabel-DExfpPWr.js.map
