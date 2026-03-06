import { y as u, w as r, r as h, J as x, K as l, T as b, S as j } from "./Icon-k-qLBgpy.js";
import { S as m, I as p } from "./ComboBox-By8VZPxS.js";
import { T as f } from "./TextWithIcon-BTC4ByiA.js";
const g = u.div`
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
  isDisabled: a = !1,
  label: i,
  options: n,
  onSelectionChange: t,
  selectedKey: o,
  validate: d
}) => {
  const c = n.find((s) => s.key === o);
  return /* @__PURE__ */ r.jsx(g, { iconurl: c == null ? void 0 : c.icon, children: /* @__PURE__ */ r.jsx(
    m,
    {
      "aria-label": e,
      isDisabled: a,
      label: i,
      selectedKey: o,
      onSelectionChange: t,
      validate: d,
      children: n.map((s) => /* @__PURE__ */ r.jsx(p, { id: s.key, textValue: s.caption, children: /* @__PURE__ */ r.jsx(f, { text: s.caption, icon: s.icon }) }, s.key))
    }
  ) });
}, y = ({
  onPress: e,
  buttonCaption: a,
  disabled: i
}) => {
  const [n, t] = h.useState(!1), o = async () => {
    if (!(!e || n)) {
      t(!0);
      try {
        await e();
      } finally {
        t(!1);
      }
    }
  };
  return /* @__PURE__ */ r.jsx(x, { children: /* @__PURE__ */ r.jsx(l, { children: /* @__PURE__ */ r.jsx(b, { onPress: o, isDisabled: i || n, children: a }) }) });
}, C = ({ label: e, buttonCaption: a, onPress: i, disabled: n }) => /* @__PURE__ */ r.jsxs(x, { children: [
  /* @__PURE__ */ r.jsx(l, { children: /* @__PURE__ */ r.jsx(j, { children: e }) }),
  /* @__PURE__ */ r.jsx(l, { children: /* @__PURE__ */ r.jsx(y, { onPress: i, buttonCaption: a, disabled: n }) })
] });
export {
  C as B,
  S as C
};
//# sourceMappingURL=ButtonWithLabel-Axp91EAt.js.map
