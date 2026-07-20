import { j as t } from "./jsx-runtime-CWOFuNcx.js";
import { _ as p, I as g } from "./ComboBox-DPKa68oX.js";
import { S as h, R as m, r as v, a4 as f } from "./PageContainers-BvK5usmz.js";
import { T as j } from "./TextWithIcon-C7mb5Wl2.js";
import { a as C, i as k, b as B, c as y } from "./constantUtils-D0RXxXWn.js";
import { D as c, a as d, d as b } from "./formelements-Daexkze0.js";
const w = h.div`
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
  label: a,
  options: r,
  onSelectionChange: o,
  selectedKey: l,
  validate: u
}) => {
  const x = r.find((i) => i.key === l);
  return /* @__PURE__ */ t.jsx(w, { iconurl: x?.icon, children: /* @__PURE__ */ t.jsx(
    p,
    {
      "aria-label": e,
      isDisabled: n,
      label: a,
      value: l,
      onChange: o,
      validate: u,
      children: r.map((i) => /* @__PURE__ */ t.jsx(g, { id: i.key, textValue: i.caption, children: /* @__PURE__ */ t.jsx(j, { text: i.caption, icon: i.icon }) }, i.key))
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
}, L = async (e, n) => {
  if (!n)
    return s.Required;
  const a = await C(e, n);
  if (!a)
    return s.NotFound;
  if (a.excluded)
    return s.Excluded;
  if (!k(a))
    return s.InvalidType;
  const r = await B(e, n.qualifiedName);
  if (r?.isPrivate)
    return s.PrivateValue;
  const o = r?.value;
  if (!y(a) && !o)
    return s.EmptyValue;
}, D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", V = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, E = (e, n) => I(e, "name", { value: n, configurable: !0 });
const W = E((e) => t.jsx(m, { light: V, dark: D, ...e }), "ConstantIcon"), R = ({
  onPress: e,
  buttonCaption: n,
  disabled: a
}) => {
  const [r, o] = v.useState(!1), l = async () => {
    if (!(!e || r)) {
      o(!0);
      try {
        await e();
      } finally {
        o(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsx(c, { children: /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(f, { onPress: l, isDisabled: a || r, children: n }) }) });
}, $ = ({ label: e, buttonCaption: n, onPress: a, disabled: r }) => /* @__PURE__ */ t.jsxs(c, { children: [
  /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(b, { children: e }) }),
  /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(R, { onPress: a, buttonCaption: n, disabled: r }) })
] });
export {
  $ as B,
  s as C,
  q as a,
  W as i,
  L as v
};
