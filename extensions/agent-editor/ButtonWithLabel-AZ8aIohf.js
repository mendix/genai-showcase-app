import { y as f, w as s, x as p, r as x, F as h, H as l, T as v, S as w } from "./Icon-DL4Zg1xv.js";
import { S as y, I as j } from "./ComboBox-Bwx3kM_a.js";
import { T as k } from "./TextWithIcon-CXVpI2JS.js";
const C = f.div`
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
  isDisabled: t = !1,
  label: n,
  options: r,
  onSelectionChange: a,
  selectedKey: o,
  validate: d
}) => {
  const c = r.find((i) => i.key === o);
  return /* @__PURE__ */ s.jsx(C, { iconurl: c == null ? void 0 : c.icon, children: /* @__PURE__ */ s.jsx(
    y,
    {
      "aria-label": e,
      isDisabled: t,
      label: n,
      selectedKey: o,
      onSelectionChange: a,
      validate: d,
      children: r.map((i) => /* @__PURE__ */ s.jsx(j, { id: i.key, textValue: i.caption, children: /* @__PURE__ */ s.jsx(k, { text: i.caption, icon: i.icon }) }, i.key))
    }
  ) });
}, T = async (e, t) => {
  const n = await u(e, t);
  if (!n)
    return await e.ui.messageBoxes.show("error", "Could not find constant.", "This constant might have been deleted or renamed. Please update the tool constant selection.");
  await e.ui.editors.editDocument(n.$ID);
}, m = (e) => {
  if (e)
    return e.defaultValue;
}, g = async (e, t) => (await e.runtime.configuration.getConstants()).find((a) => a.constantName === t), W = async (e, t) => {
  const n = await g(e, t), r = await u(e, t), a = m(r);
  if (!n)
    return a;
  if (n.status !== "private")
    return n.value;
}, D = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.type) == null ? void 0 : t.$Type) === "DataTypes$StringType";
}, u = async (e, t) => {
  const [n, r] = t.split(".");
  if (!n || !r)
    return;
  const a = await e.app.model.constants.loadAll(
    (o) => o.moduleName === n && o.name === r
  );
  return a == null ? void 0 : a[0];
}, b = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", B = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var S = Object.defineProperty, V = (e, t) => S(e, "name", { value: t, configurable: !0 });
const F = V((e) => s.jsx(p, { light: B, dark: b, ...e }), "ConstantIcon"), H = (e) => async (t, n) => {
  if (!n)
    return `${e} is required.`;
  const r = await u(t, n);
  if (!r)
    return "Selected constant not found. It might have been deleted or renamed. Please update the constant selection.";
  if (!D(r))
    return "Selected constant must be of type string.";
  const a = await g(t, n);
  if ((a == null ? void 0 : a.status) === "private")
    return "Selected constant has a private runtime value, which is currently not supported. Use a public runtime value or remove the constant from the local runtime configuration.";
  const o = a == null ? void 0 : a.value;
  if (!m(r) && !o)
    return "No value was found for the selected constant. Please set it as part of your local runtime configuration, or set a default value in the constant document.";
}, M = ({
  onPress: e,
  buttonCaption: t,
  disabled: n
}) => {
  const [r, a] = x.useState(!1), o = async () => {
    if (!(!e || r)) {
      a(!0);
      try {
        await e();
      } finally {
        a(!1);
      }
    }
  };
  return /* @__PURE__ */ s.jsx(h, { children: /* @__PURE__ */ s.jsx(l, { children: /* @__PURE__ */ s.jsx(v, { onPress: o, isDisabled: n || r, children: t }) }) });
}, R = ({ label: e, buttonCaption: t, onPress: n, disabled: r }) => /* @__PURE__ */ s.jsxs(h, { children: [
  /* @__PURE__ */ s.jsx(l, { children: /* @__PURE__ */ s.jsx(w, { children: e }) }),
  /* @__PURE__ */ s.jsx(l, { children: /* @__PURE__ */ s.jsx(M, { onPress: n, buttonCaption: t, disabled: r }) })
] });
export {
  R as B,
  N as C,
  W as g,
  T as h,
  F as i,
  H as v
};
//# sourceMappingURL=ButtonWithLabel-AZ8aIohf.js.map
