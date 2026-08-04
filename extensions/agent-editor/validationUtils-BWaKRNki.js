import { j as n } from "./jsx-runtime-CWOFuNcx.js";
import { H as u, r as c, T as v } from "./PageContainers-1sk3OYaf.js";
import { D as d, a as o, d as x } from "./formelements-CKhf3RUn.js";
import { a as g, i as h, b as p, c as f } from "./constantUtils-D0RXxXWn.js";
const m = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", j = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var C = Object.defineProperty, w = (e, t) => C(e, "name", { value: t, configurable: !0 });
const E = w((e) => n.jsx(u, { light: j, dark: m, ...e }), "ConstantIcon"), B = ({
  onPress: e,
  buttonCaption: t,
  disabled: a
}) => {
  const [i, r] = c.useState(!1), l = async () => {
    if (!(!e || i)) {
      r(!0);
      try {
        await e();
      } finally {
        r(!1);
      }
    }
  };
  return /* @__PURE__ */ n.jsx(d, { children: /* @__PURE__ */ n.jsx(o, { children: /* @__PURE__ */ n.jsx(v, { onPress: l, isDisabled: a || i, children: t }) }) });
}, I = ({ label: e, buttonCaption: t, onPress: a, disabled: i }) => /* @__PURE__ */ n.jsxs(d, { children: [
  /* @__PURE__ */ n.jsx(o, { children: /* @__PURE__ */ n.jsx(x, { children: e }) }),
  /* @__PURE__ */ n.jsx(o, { children: /* @__PURE__ */ n.jsx(B, { onPress: a, buttonCaption: t, disabled: i }) })
] }), s = {
  EmptyValue: "EmptyValue",
  Excluded: "Excluded",
  InvalidContent: "InvalidContent",
  InvalidType: "InvalidType",
  NotFound: "NotFound",
  PrivateValue: "PrivateValue",
  Required: "Required"
}, b = async (e, t) => {
  if (!t)
    return s.Required;
  const a = await g(e, t);
  if (!a)
    return s.NotFound;
  if (a.excluded)
    return s.Excluded;
  if (!h(a))
    return s.InvalidType;
  const i = await p(e, t.qualifiedName);
  if (i?.isPrivate)
    return s.PrivateValue;
  const r = i?.value;
  if (!f(a) && !r)
    return s.EmptyValue;
};
export {
  I as B,
  s as C,
  E as i,
  b as v
};
