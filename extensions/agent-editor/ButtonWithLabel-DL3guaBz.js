import { T as g, R as t, S as p, r as h, a4 as u, a9 as d, a8 as v, ai as f } from "./formelements-xoDBPsLY.js";
import { _ as m, I as j } from "./ComboBox-CdZpypF8.js";
import { T as C } from "./TextWithIcon-BnQ_W6GL.js";
import { E as k, F as B, G as y, H as w } from "./index-CZgjY607.js";
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
`, S = ({
  ariaLabel: e,
  isDisabled: n = !1,
  label: a,
  options: i,
  onSelectionChange: o,
  selectedKey: l,
  validate: c
}) => {
  const x = i.find((r) => r.key === l);
  return /* @__PURE__ */ t.jsx(b, { iconurl: x?.icon, children: /* @__PURE__ */ t.jsx(
    m,
    {
      "aria-label": e,
      isDisabled: n,
      label: a,
      value: l,
      onChange: o,
      validate: c,
      children: i.map((r) => /* @__PURE__ */ t.jsx(j, { id: r.key, textValue: r.caption, children: /* @__PURE__ */ t.jsx(C, { text: r.caption, icon: r.icon }) }, r.key))
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
}, N = async (e, n) => {
  if (!n)
    return s.Required;
  const a = await k(e, n);
  if (!a)
    return s.NotFound;
  if (a.excluded)
    return s.Excluded;
  if (!B(a))
    return s.InvalidType;
  const i = await y(e, n.qualifiedName);
  if (i?.isPrivate)
    return s.PrivateValue;
  const o = i?.value;
  if (!w(a) && !o)
    return s.EmptyValue;
}, V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, E = (e, n) => I(e, "name", { value: n, configurable: !0 });
const q = E((e) => t.jsx(p, { light: D, dark: V, ...e }), "ConstantIcon"), R = ({
  onPress: e,
  buttonCaption: n,
  disabled: a
}) => {
  const [i, o] = h.useState(!1), l = async () => {
    if (!(!e || i)) {
      o(!0);
      try {
        await e();
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsx(u, { children: /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(v, { onPress: l, isDisabled: a || i, children: n }) }) });
}, L = ({ label: e, buttonCaption: n, onPress: a, disabled: i }) => /* @__PURE__ */ t.jsxs(u, { children: [
  /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(f, { children: e }) }),
  /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(R, { onPress: a, buttonCaption: n, disabled: i }) })
] });
export {
  L as B,
  s as C,
  S as a,
  q as i,
  N as v
};
