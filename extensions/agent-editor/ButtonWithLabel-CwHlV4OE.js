import { T as g, R as a, S as h, r as v, a4 as u, a9 as c, a8 as p, ai as f } from "./formelements-DgWWXRMR.js";
import { _ as m, I as j } from "./ComboBox-tmgYuUfm.js";
import { T as k } from "./TextWithIcon-BsB7aLN_.js";
import { E as B, F as y, G as C, H as w } from "./index-Cosn4mN0.js";
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
  isDisabled: n = !1,
  label: r,
  options: t,
  onSelectionChange: o,
  selectedKey: l,
  validate: x
}) => {
  const d = t.find((i) => i.key === l);
  return /* @__PURE__ */ a.jsx(b, { iconurl: d == null ? void 0 : d.icon, children: /* @__PURE__ */ a.jsx(
    m,
    {
      "aria-label": e,
      isDisabled: n,
      label: r,
      value: l,
      onChange: o,
      validate: x,
      children: t.map((i) => /* @__PURE__ */ a.jsx(j, { id: i.key, textValue: i.caption, children: /* @__PURE__ */ a.jsx(k, { text: i.caption, icon: i.icon }) }, i.key))
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
}, q = async (e, n) => {
  if (!n)
    return s.Required;
  const r = await B(e, n);
  if (!r)
    return s.NotFound;
  if (r.excluded)
    return s.Excluded;
  if (!y(r))
    return s.InvalidType;
  const t = await C(e, n.qualifiedName);
  if (t != null && t.isPrivate)
    return s.PrivateValue;
  const o = t == null ? void 0 : t.value;
  if (!w(r) && !o)
    return s.EmptyValue;
}, V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, E = (e, n) => I(e, "name", { value: n, configurable: !0 });
const L = E((e) => a.jsx(h, { light: D, dark: V, ...e }), "ConstantIcon"), R = ({
  onPress: e,
  buttonCaption: n,
  disabled: r
}) => {
  const [t, o] = v.useState(!1), l = async () => {
    if (!(!e || t)) {
      o(!0);
      try {
        await e();
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ a.jsx(u, { children: /* @__PURE__ */ a.jsx(c, { children: /* @__PURE__ */ a.jsx(p, { onPress: l, isDisabled: r || t, children: n }) }) });
}, W = ({ label: e, buttonCaption: n, onPress: r, disabled: t }) => /* @__PURE__ */ a.jsxs(u, { children: [
  /* @__PURE__ */ a.jsx(c, { children: /* @__PURE__ */ a.jsx(f, { children: e }) }),
  /* @__PURE__ */ a.jsx(c, { children: /* @__PURE__ */ a.jsx(R, { onPress: r, buttonCaption: n, disabled: t }) })
] });
export {
  W as B,
  s as C,
  N as a,
  L as i,
  q as v
};
