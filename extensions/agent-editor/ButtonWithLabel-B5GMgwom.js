import { y as p, w as r, x as v, r as m, F as x, H as c, T as w, S as y } from "./Icon-CjmU6z_u.js";
import { S as C, I as j } from "./ComboBox-BcDF6tWV.js";
import { T as k } from "./TextWithIcon-D6dQcKBr.js";
const B = p.div`
    & [role="combobox"] {
        ${(t) => t.iconurl && `
            background-image: url(${t.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, $ = ({
  ariaLabel: t,
  isDisabled: e = !1,
  label: n,
  options: a,
  onSelectionChange: s,
  selectedKey: l,
  validate: h
}) => {
  const u = a.find((o) => o.key === l);
  return /* @__PURE__ */ r.jsx(B, { iconurl: u == null ? void 0 : u.icon, children: /* @__PURE__ */ r.jsx(
    C,
    {
      "aria-label": t,
      isDisabled: e,
      label: n,
      selectedKey: l,
      onSelectionChange: s,
      validate: h,
      children: a.map((o) => /* @__PURE__ */ r.jsx(j, { id: o.key, textValue: o.caption, children: /* @__PURE__ */ r.jsx(k, { text: o.caption, icon: o.icon }) }, o.key))
    }
  ) });
}, F = async (t, e) => {
  const n = await d(t, e.documentId);
  if (!n)
    return await t.ui.messageBoxes.show("error", "Could not find constant.", "This constant might have been deleted or renamed. Please update the tool constant selection.");
  await t.ui.editors.editDocument(n.$ID);
}, g = (t) => {
  if (t)
    return t.defaultValue;
}, f = async (t, e) => (await t.runtime.configuration.getConstants()).find((s) => s.constantName === e), R = async (t, e) => {
  if (!e)
    return;
  const n = await f(t, e.qualifiedName), a = await d(t, e.documentId), s = g(a);
  if (!n)
    return s;
  if (n.status !== "private")
    return n.value;
}, V = (t) => {
  var e;
  return ((e = t == null ? void 0 : t.type) == null ? void 0 : e.$Type) === "DataTypes$StringType";
}, d = async (t, e) => {
  if (e)
    return await t.app.model.constants.load("Constants$Constant", e) || void 0;
}, b = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var I = Object.defineProperty, E = (t, e) => I(t, "name", { value: e, configurable: !0 });
const q = E((t) => r.jsx(v, { light: D, dark: b, ...t }), "ConstantIcon"), i = {
  EmptyValue: "EmptyValue",
  Excluded: "Excluded",
  InvalidType: "InvalidType",
  NotFound: "NotFound",
  PrivateValue: "PrivateValue",
  Required: "Required"
}, L = async (t, e) => {
  if (!e)
    return i.Required;
  const n = await d(t, e.documentId);
  if (!n)
    return i.NotFound;
  if (n.excluded)
    return i.Excluded;
  if (!V(n))
    return i.InvalidType;
  const a = await f(t, e.qualifiedName);
  if ((a == null ? void 0 : a.status) === "private")
    return i.PrivateValue;
  const s = a == null ? void 0 : a.value;
  if (!g(n) && !s)
    return i.EmptyValue;
}, S = ({
  onPress: t,
  buttonCaption: e,
  disabled: n
}) => {
  const [a, s] = m.useState(!1), l = async () => {
    if (!(!t || a)) {
      s(!0);
      try {
        await t();
      } finally {
        s(!1);
      }
    }
  };
  return /* @__PURE__ */ r.jsx(x, { children: /* @__PURE__ */ r.jsx(c, { children: /* @__PURE__ */ r.jsx(w, { onPress: l, isDisabled: n || a, children: e }) }) });
}, W = ({ label: t, buttonCaption: e, onPress: n, disabled: a }) => /* @__PURE__ */ r.jsxs(x, { children: [
  /* @__PURE__ */ r.jsx(c, { children: /* @__PURE__ */ r.jsx(y, { children: t }) }),
  /* @__PURE__ */ r.jsx(c, { children: /* @__PURE__ */ r.jsx(S, { onPress: n, buttonCaption: e, disabled: a }) })
] });
export {
  W as B,
  i as C,
  $ as a,
  R as g,
  F as h,
  q as i,
  L as v
};
//# sourceMappingURL=ButtonWithLabel-B5GMgwom.js.map
