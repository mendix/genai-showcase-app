import { $ as Z, a as ce, b as D, c as se, d as ue, e as ne, f as me, r as m, g as le, h as fe, i as he, j as ve, k as ge, l as pe, m as be, n as xe, o as we, p as J, q as ye, s as Ce, t as $e, u as q, v as ke, w as s, x as L, y as N, z as Se, A as Ve, G as O, B as je, C as X, D as Me, P as Pe, E as Ee } from "./TextInputWithIcon-Bxcjz2pl.js";
import { c as Ie, C as Ae } from "./CenteredLoadingSpinner-GhVhA5yR.js";
import { i as Le, m as z, c as Te, a as Be, b as De, g as Re, d as He, e as Oe, f as Ne, h as Y, j as Fe, k as _e, u as qe } from "./index-DMt7dhDX.js";
import { y as Ue } from "./ComboBox-D4VTIJ8V.js";
import { g as We, T as ee, h as Qe } from "./toolHandlers-CQqEp1kf.js";
import { I as te, W as Ze } from "./Banner-DNPItzP7.js";
import { n as ze, T as U } from "./genAICommonsEntities-Dtcj_rDj.js";
import { m as Ge } from "./modelUtils-CXZ28X2L.js";
import { u as Ke, T as Je, D as W } from "./Table-DhYu8u5D.js";
import { I as ie, T as Xe } from "./TextWithIcon-DyBRNAR1.js";
import { r as P } from "./logger-CC_FxqwC.js";
import { m as Ye } from "./consumedMCPServiceUtils-BaykyGe_.js";
function et(e, t, i) {
  let { isDisabled: n = !1, isReadOnly: l = !1, value: d, name: u, form: h, children: f, "aria-label": a, "aria-labelledby": v, validationState: b = "valid", isInvalid: C, onPressStart: w, onPressEnd: y, onPressChange: p, onPress: r, onPressUp: c, onClick: g } = e, k = (M) => {
    M.stopPropagation(), t.setSelected(M.target.checked);
  }, S = f != null, E = a != null || v != null;
  !S && !E && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: R, isPressed: T } = Z({
    onPressStart: w,
    onPressEnd: y,
    onPressChange: p,
    onPress: r,
    onPressUp: c,
    onClick: g,
    isDisabled: n
  }), { pressProps: B, isPressed: I } = Z({
    onPressStart: w,
    onPressEnd: y,
    onPressChange: p,
    onPressUp: c,
    onClick: g,
    onPress(M) {
      var o;
      r == null || r(M), t.toggle(), (o = i.current) === null || o === void 0 || o.focus();
    },
    isDisabled: n || l
  }), { focusableProps: F } = ce(e, i), H = D(R, F), _ = se(e, {
    labelable: !0
  });
  return ue(i, t.defaultSelected, t.setSelected), {
    labelProps: D(B, {
      onClick: (M) => M.preventDefault()
    }),
    inputProps: D(_, {
      "aria-invalid": C || b === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": l || void 0,
      onChange: k,
      disabled: n,
      ...d == null ? {} : {
        value: d
      },
      name: u,
      form: h,
      type: "checkbox",
      ...H
    }),
    isSelected: t.isSelected,
    isPressed: T || I,
    isDisabled: n,
    isReadOnly: l,
    isInvalid: C || b === "invalid"
  };
}
function oe(e, t, i) {
  let n = ne({
    ...e,
    value: t.isSelected
  }), { isInvalid: l, validationErrors: d, validationDetails: u } = n.displayValidation, { labelProps: h, inputProps: f, isSelected: a, isPressed: v, isDisabled: b, isReadOnly: C } = et({
    ...e,
    isInvalid: l
  }, t, i);
  me(e, n, i);
  let { isIndeterminate: w, isRequired: y, validationBehavior: p = "aria" } = e;
  m.useEffect(() => {
    i.current && (i.current.indeterminate = !!w);
  });
  let { pressProps: r } = Z({
    isDisabled: b || C,
    onPress() {
      let { [le]: c } = e, { commitValidation: g } = c || n;
      g();
    }
  });
  return {
    labelProps: D(h, r, m.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (c) => c.preventDefault()
    }), [])),
    inputProps: {
      ...f,
      checked: a,
      "aria-required": y && p === "aria" || void 0,
      required: y && p === "native"
    },
    isSelected: a,
    isPressed: v,
    isDisabled: b,
    isReadOnly: C,
    isInvalid: l,
    validationErrors: d,
    validationDetails: u
  };
}
const tt = /* @__PURE__ */ new WeakMap();
function re(e = {}) {
  let { isReadOnly: t } = e, [i, n] = fe(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = m.useState(i);
  function d(f) {
    t || n(f);
  }
  function u() {
    t || n(!i);
  }
  var h;
  return {
    isSelected: i,
    defaultSelected: (h = e.defaultSelected) !== null && h !== void 0 ? h : l,
    setSelected: d,
    toggle: u
  };
}
function it(e, t, i) {
  const n = re({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(c) {
      c ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(c);
    }
  });
  let { name: l, form: d, descriptionId: u, errorMessageId: h, validationBehavior: f } = tt.get(t);
  var a;
  f = (a = e.validationBehavior) !== null && a !== void 0 ? a : f;
  let { realtimeValidation: v } = ne({
    ...e,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), b = m.useRef(he), C = () => {
    t.setInvalid(e.value, v.isInvalid ? v : b.current);
  };
  m.useEffect(C);
  let w = t.realtimeValidation.isInvalid ? t.realtimeValidation : v, y = f === "native" ? t.displayValidation : w;
  var p;
  let r = oe({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || l,
    form: e.form || d,
    isRequired: (p = e.isRequired) !== null && p !== void 0 ? p : t.isRequired,
    validationBehavior: f,
    [le]: {
      realtimeValidation: w,
      displayValidation: y,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(c) {
        b.current = c, C();
      }
    }
  }, n, i);
  return {
    ...r,
    inputProps: {
      ...r.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? h : null,
        u
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const at = /* @__PURE__ */ m.createContext(null), st = /* @__PURE__ */ m.forwardRef(function(t, i) {
  let { inputRef: n = null, ...l } = t;
  [t, i] = ve(l, i, ge);
  let { validationBehavior: d } = pe(be) || {};
  var u, h;
  let f = (h = (u = t.validationBehavior) !== null && u !== void 0 ? u : d) !== null && h !== void 0 ? h : "native", a = m.useContext(at), v = xe(m.useMemo(() => we(n, t.inputRef !== void 0 ? t.inputRef : null), [
    n,
    t.inputRef
  ])), { labelProps: b, inputProps: C, isSelected: w, isDisabled: y, isReadOnly: p, isPressed: r, isInvalid: c } = a ? it({
    ...J(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, a, v) : oe({
    ...J(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: f
  }, re(t), v), { isFocused: g, isFocusVisible: k, focusProps: S } = ye(), E = y || p, { hoverProps: R, isHovered: T } = Ce({
    ...t,
    isDisabled: E
  }), B = $e({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: w,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: r,
      isHovered: T,
      isFocused: g,
      isFocusVisible: k,
      isDisabled: y,
      isReadOnly: p,
      isInvalid: c,
      isRequired: t.isRequired || !1
    }
  }), I = se(t, {
    global: !0
  });
  return delete I.id, delete I.onClick, /* @__PURE__ */ q.createElement("label", {
    ...D(I, b, R, B),
    ref: i,
    slot: t.slot || void 0,
    "data-selected": w || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": r || void 0,
    "data-hovered": T || void 0,
    "data-focused": g || void 0,
    "data-focus-visible": k || void 0,
    "data-disabled": y || void 0,
    "data-readonly": p || void 0,
    "data-invalid": c || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ q.createElement(ke, {
    elementType: "span"
  }, /* @__PURE__ */ q.createElement("input", {
    ...D(C, S),
    ref: v
  })), B.children);
}), nt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", lt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var ot = Object.defineProperty, rt = (e, t) => ot(e, "name", { value: t, configurable: !0 });
const dt = rt((e) => s.jsx(L, { light: lt, dark: nt, ...e }), "EntityIcon"), ct = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", ut = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var mt = Object.defineProperty, ft = (e, t) => mt(e, "name", { value: t, configurable: !0 });
const ht = ft((e) => s.jsx(L, { light: ut, dark: ct, ...e }), "EntityNonPersistableIcon"), vt = async (e, t, i, n, l, d) => {
  const u = { ...n, [i]: d };
  return (i === "userPrompt" || i === "systemPrompt") && (u.variables = await Te(e, t, u)), l(u), u;
}, gt = async (e, t, i) => {
  const n = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let l;
  if (n.status === "ok" && (l = { ...t, entity: n.selected.module + "." + n.selected.name }), n.status === "none" && (l = { ...t, entity: "" }), l) {
    const d = await Be(e, t.variables, l);
    l = { ...l, variables: d }, i(l);
  }
  return l;
}, pt = async (e, t, i) => {
  const n = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: z }
  });
  let l;
  return n.status === "ok" && (l = {
    ...t,
    modelQualifiedName: n.selected.module + "." + n.selected.name
  }), n.status === "none" && (l = { ...t, modelQualifiedName: void 0 }), l && i(l), l;
}, Q = async (e, t, i) => {
  switch (e) {
    case "modelQualifiedName": {
      if (!i.modelQualifiedName)
        return "Please select a model.";
      if (!await We(
        t,
        i.modelQualifiedName,
        z
      ))
        return "This document is invalid. Make sure to select a document of type Model.";
      break;
    }
    case "entity": {
      if (i.variables.length > 0 && !i.entity)
        return "Please select an entity.";
      const [n, l] = i.entity.split(".");
      if (i.entity && (!n || !l))
        return "The selected entity is not valid.";
      if (!await Le(t, i))
        return "Entity no longer exists.";
      break;
    }
    case "userPrompt":
      if (!i.userPrompt)
        return "Please provide a user prompt.";
      break;
    default:
      return !0;
  }
  return !0;
}, bt = async (e, t) => {
  if (!t)
    return;
  const i = (await e.app.model.customBlobDocuments.getDocumentsOfType(z)).find(
    (n) => n.moduleName + "." + n.name === t
  );
  if (!i) {
    e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
    return;
  }
  e.ui.editors.editDocument(i.id);
}, xt = async (e, t, i, n) => {
  const l = await e.ui.dialogs.showModal(
    {
      title: "Model settings",
      contentSize: { height: 400, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "modelSettingsEdit",
      queryParams: {
        agent: encodeURIComponent(JSON.stringify(i))
      }
    }
  );
  let d;
  return l && (d = l), d && n(d), d;
}, ae = async (e, t, i, n, l) => {
  const d = l && i.tools ? i.tools.find((h) => h.id === l) : void 0, u = await e.ui.dialogs.showModal(
    {
      title: d ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: d ? encodeURIComponent(JSON.stringify(d)) : "",
        agent: i ? encodeURIComponent(JSON.stringify(i)) : ""
      }
    }
  );
  if (u !== null) {
    const h = u;
    let f;
    l && i.tools ? f = i.tools.map((v) => v.id === l ? h : v) : f = [...i.tools || [], h], f.sort((v, b) => v.name.localeCompare(b.name));
    const a = { ...i, tools: f };
    return n(a), a;
  } else
    return null;
}, wt = async (e, t, i, n) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const d = t.tools.filter((h) => h.id !== n), u = { ...t, tools: d };
  return i(u), u;
}, yt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ct = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var $t = Object.defineProperty, kt = (e, t) => $t(e, "name", { value: t, configurable: !0 });
const St = kt((e) => s.jsx(L, { light: Ct, dark: yt, ...e }), "AppSelectorNoVersionIcon"), Vt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", jt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Mt = Object.defineProperty, Pt = (e, t) => Mt(e, "name", { value: t, configurable: !0 });
const Et = Pt((e) => s.jsx(L, { light: jt, dark: Vt, ...e }), "EditIcon"), It = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", At = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Lt = Object.defineProperty, Tt = (e, t) => Lt(e, "name", { value: t, configurable: !0 });
const Bt = Tt((e) => s.jsx(L, { light: At, dark: It, ...e }), "PageIcon"), Dt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Rt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Ht = Object.defineProperty, Ot = (e, t) => Ht(e, "name", { value: t, configurable: !0 });
const Nt = Ot((e) => s.jsx(L, { light: Rt, dark: Dt, ...e }), "SyncIcon"), Ft = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", _t = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var qt = Object.defineProperty, Ut = (e, t) => qt(e, "name", { value: t, configurable: !0 });
const Wt = Ut((e) => s.jsx(L, { light: _t, dark: Ft, ...e }), "CheckCheckboxIcon");
var Qt = Object.defineProperty, Zt = (e, t) => Qt(e, "name", { value: t, configurable: !0 });
const zt = Zt(({ children: e, ...t }) => s.jsx(Kt, { ...t, children: ({ isIndeterminate: i, isSelected: n }) => s.jsxs(s.Fragment, { children: [s.jsxs(de, { $isSelected: n, $isIndeterminate: i, children: [i && s.jsx(Gt, {}), n && !i && s.jsx(Wt, {})] }), e] }) }), "Checkbox"), de = N.div`
    width: ${P.size12};
    height: ${P.size12};
    margin: ${P.spacing2};
    border-radius: ${P.borderRadiusXs};
    border: ${P.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: i }) => t && !i ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, Gt = N.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, Kt = N(st)`
    cursor: pointer;
    display: flex;
    height: ${P.size16};
    gap: ${P.spacing4};
    line-height: ${P.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${de} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${Se}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, Jt = N(zt)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Xt = ({
  agent: e,
  studioPro: t,
  componentName: i,
  updateStudioProDocument: n,
  onAgentChange: l,
  toolValidations: d
}) => {
  const [u, h] = m.useState([]), f = m.useMemo(() => e.tools ? e.tools.map((r, c) => ({
    id: r.id ?? String(c),
    enabled: r.enabled,
    name: r.toolType === "Microflow" ? r.name : r.document.qualifiedName.split(".")[1],
    description: r.description || "",
    tooltype: r.toolType,
    tool: r.document.qualifiedName || ""
  })) : [], [e.tools]), { items: a, sortProps: v } = Ke(f), b = m.useCallback(
    (r) => {
      const c = d.get(r);
      return c === "invalid" ? /* @__PURE__ */ s.jsx(ie, { icon: /* @__PURE__ */ s.jsx(Ve, { title: "Tool invalid" }) }) : c === "syncing" ? /* @__PURE__ */ s.jsx(ie, { icon: /* @__PURE__ */ s.jsx(Nt, { title: "Validating..." }) }) : null;
    },
    [d]
  ), C = m.useCallback(async () => {
    const r = await ae(t, i, e, n);
    r && l(r);
  }, [t, i, e, n, l]), w = m.useCallback(async () => {
    if (u.length === 0 || !e.tools)
      return;
    const r = u[0], c = await ae(
      t,
      i,
      e,
      n,
      r
    );
    c && l(c);
  }, [t, i, e, n, l, u]), y = m.useCallback(async () => {
    if (u.length === 0 || !e.tools)
      return;
    const r = u[0], c = await wt(t, e, n, r);
    c && l(c);
  }, [e, n, l, u]), p = m.useCallback(
    async (r, c) => {
      if (!e.tools)
        return;
      const g = e.tools.map(
        (S) => (S.id ?? "") === r ? { ...S, enabled: c } : S
      ), k = { ...e, tools: g };
      n(k), l(k);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, n, l]
  );
  return /* @__PURE__ */ s.jsx(O, { label: "Tools", children: /* @__PURE__ */ s.jsx(
    Je,
    {
      ariaLabel: "Tools table",
      columns: [
        { id: "validation", minWidth: 24, defaultWidth: 24, maxWidth: 24 },
        {
          id: "enabled",
          caption: "Active",
          isControl: !0,
          minWidth: 63,
          defaultWidth: 63,
          maxWidth: 63,
          allowsSorting: !0,
          alignContents: "center"
        },
        { id: "name", caption: "Name", isRowHeader: !0, resizable: !0, allowsSorting: !0 },
        { id: "description", caption: "Description", resizable: !0, allowsSorting: !0 },
        { id: "tool", caption: "Tool", resizable: !0, allowsSorting: !0 }
      ],
      data: a.map((r) => [
        b(r.id),
        /* @__PURE__ */ s.jsx(
          Jt,
          {
            "aria-label": "Enabled",
            isSelected: r.enabled,
            onChange: (c) => p(r.id, c)
          }
        ),
        r.name,
        r.description,
        /* @__PURE__ */ s.jsx(
          Xe,
          {
            icon: r.tooltype === "Microflow" ? /* @__PURE__ */ s.jsx(ze, {}) : Ye,
            text: r.tool
          }
        )
      ]),
      rowKey: (r, c) => {
        var g;
        return ((g = a[c]) == null ? void 0 : g.id) ?? String(c);
      },
      rowOpacity: (r) => {
        var c;
        return (c = a[r]) != null && c.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: u,
      onDoubleClick: w,
      onSelectionChange: h,
      ...v,
      toolbarLeft: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          W,
          {
            icon: /* @__PURE__ */ s.jsx(Bt, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: C
          }
        ),
        /* @__PURE__ */ s.jsx(
          W,
          {
            icon: /* @__PURE__ */ s.jsx(Et, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: w,
            tooltip: "Edit selected tool",
            isDisabled: u.length === 0
          }
        ),
        /* @__PURE__ */ s.jsx(
          W,
          {
            icon: /* @__PURE__ */ s.jsx(St, {}),
            label: "Delete",
            "aria-label": "Delete selected tool",
            onPress: y,
            tooltip: "Delete selected tool",
            isDisabled: u.length === 0
          }
        )
      ] })
    }
  ) });
}, Yt = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  showCreateVariablesInfo: !1,
  missingAttributes: [],
  unusedAttributes: []
}, ei = ({ loadedAgent: e, studioPro: t, updateStudioProDocument: i }) => {
  const [n, l] = m.useState(!1), [d, u] = m.useState(Yt), [h, f] = m.useState(void 0), [a, v] = m.useState(e), [b, C] = m.useState(!1), [w, y] = m.useState(!1), [p, r] = m.useState(/* @__PURE__ */ new Map()), c = je(), g = m.useRef(null);
  m.useEffect(() => {
    M(e).then((o) => u(o)), H(t, e.entity).then((o) => f(o)), v(e), l(!0);
  }, []), m.useEffect(() => () => {
    g.current && clearTimeout(g.current);
  }, []), m.useEffect(() => {
    n && (async () => {
      const x = await H(t, a.entity);
      f(x);
    })();
  }, [t, a.entity]), m.useEffect(() => {
    n && (async () => {
      if (a.tools && a.tools.length > 0) {
        const x = /* @__PURE__ */ new Map();
        a.tools.forEach((j) => {
          x.set(j.id, "syncing");
        }), r(x);
        const $ = await Promise.all(
          a.tools.map(async (j) => {
            const A = await Qe("document", j, a, t);
            return {
              id: j.id,
              state: A === !0 ? "valid" : "invalid"
            };
          })
        ), V = new Map($.map((j) => [j.id, j.state]));
        r(V);
      }
    })();
  }, [n]);
  const k = m.useRef(/* @__PURE__ */ new Map());
  m.useEffect(() => {
    if (n && a.tools) {
      const o = k.current, x = /* @__PURE__ */ new Map();
      a.tools.forEach(($) => {
        x.set($.id, $.document.qualifiedName);
      }), r(($) => {
        var j;
        const V = new Map($);
        return (j = a.tools) == null || j.forEach((A) => {
          if (!$.has(A.id))
            V.set(A.id, "valid");
          else {
            const G = o.get(A.id), K = x.get(A.id);
            G !== void 0 && K !== void 0 && G !== K && V.set(A.id, "valid");
          }
        }), V;
      }), k.current = x;
    }
  }, [a.tools, n]), m.useEffect(() => {
    n && (async () => {
      const x = await M(a);
      u(x);
    })();
  }, [t, a]);
  const S = m.useMemo(() => De(a.variables), [a.variables]), E = (o) => (x) => {
    const $ = { ...a, [o]: x };
    v($), g.current && clearTimeout(g.current), g.current = setTimeout(async () => {
      const V = await vt(
        t,
        c,
        o,
        $,
        i,
        x
      );
      v(V);
    }, 300);
  }, R = async () => {
    const o = await gt(t, a, i);
    o && v(o);
  }, T = async () => {
    const o = await pt(t, a, i);
    o && v(o);
  }, B = async () => {
    a.modelQualifiedName && bt(t, a.modelQualifiedName);
  }, I = async () => {
    Fe(t, a.entity);
  }, F = async () => {
    const o = await xt(t, Y, a, i);
    o && v(o);
  }, H = async (o, x) => {
    if (!x)
      return;
    const $ = await Re(o, x);
    if (!$)
      return;
    const V = await He($, o);
    if (V !== void 0)
      return V ? /* @__PURE__ */ s.jsx(dt, {}) : /* @__PURE__ */ s.jsx(ht, {});
  }, _ = m.useMemo(() => {
    let o = "";
    return a.maxTokens !== void 0 && (o += "Max tokens: " + a.maxTokens.toLocaleString(navigator.language)), a.temperature !== void 0 && (o.length > 0 && (o += ", "), o += "Temperature: " + a.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), a.topP !== void 0 && (o.length > 0 && (o += ", "), o += "Top P: " + a.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), o;
  }, [a.temperature, a.maxTokens, a.topP]), M = async (o) => ({
    isValidModel: await Q("modelQualifiedName", t, o),
    isValidEntity: await Q("entity", t, o),
    isValidUserPrompt: await Q("userPrompt", t, o),
    showCreateVariablesInfo: o.variables.length === 0,
    missingAttributes: await Ne(t, o),
    unusedAttributes: await Oe(t, o)
  });
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(X, { children: [
      /* @__PURE__ */ s.jsx(O, { label: "System prompt", children: /* @__PURE__ */ s.jsx(
        ee,
        {
          ariaLabel: "System prompt",
          value: a.systemPrompt,
          onChange: E("systemPrompt"),
          highlightRules: S
        }
      ) }),
      /* @__PURE__ */ s.jsx(O, { label: "User prompt", children: /* @__PURE__ */ s.jsx(
        ee,
        {
          ariaLabel: "User prompt",
          value: a.userPrompt || "",
          onChange: E("userPrompt"),
          highlightRules: S,
          validate: () => d.isValidUserPrompt
        }
      ) }),
      /* @__PURE__ */ s.jsx(
        Xt,
        {
          agent: a,
          studioPro: t,
          componentName: Y,
          updateStudioProDocument: i,
          onAgentChange: v,
          toolValidations: p
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(X, { children: /* @__PURE__ */ s.jsxs(O, { label: "General", children: [
      /* @__PURE__ */ s.jsx(
        U,
        {
          ariaLabel: "Model",
          label: "Model",
          value: a.modelQualifiedName ? a.modelQualifiedName : "",
          icon: a.modelQualifiedName ? Ge : void 0,
          buttonCaption: "Select...",
          onClick: T,
          validate: () => d.isValidModel,
          buttonCaptionSecondary: a.modelQualifiedName ? "Show" : void 0,
          onClickSecondary: a.modelQualifiedName ? B : void 0
        }
      ),
      /* @__PURE__ */ s.jsx(
        U,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: _,
          buttonCaption: "Edit",
          onClick: F,
          validate: void 0
        }
      ),
      /* @__PURE__ */ s.jsx(
        Ue,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: a.description,
          onChange: E("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ s.jsx(
        U,
        {
          ariaLabel: "Entity",
          label: "Entity",
          value: a.entity,
          icon: h,
          onClick: R,
          buttonCaption: "Select...",
          validate: () => d.isValidEntity,
          buttonCaptionSecondary: a.entity ? "Show" : void 0,
          onClickSecondary: a.entity ? I : void 0
        }
      ),
      d.showCreateVariablesInfo && d.unusedAttributes.length === 0 && !w && /* @__PURE__ */ s.jsx(te, { onClose: () => y(!0), children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
      d.missingAttributes.length > 0 && /* @__PURE__ */ s.jsxs(Ze, { children: [
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes cannot be found on the selected entity:" }),
        /* @__PURE__ */ s.jsx("ul", { children: d.missingAttributes.map((o) => /* @__PURE__ */ s.jsx("li", { children: o }, o)) })
      ] }),
      d.unusedAttributes.length > 0 && !b && /* @__PURE__ */ s.jsxs(te, { onClose: () => C(!0), children: [
        d.showCreateVariablesInfo && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("span", { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
          /* @__PURE__ */ s.jsx("br", {})
        ] }),
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes are found on the selected entity, but are not used in the prompt:" }),
        /* @__PURE__ */ s.jsx("ul", { children: d.unusedAttributes.map((o) => /* @__PURE__ */ s.jsx("li", { children: o }, o)) })
      ] })
    ] }) })
  ] });
}, ti = _e(), ii = ({ studioPro: e, documentId: t }) => {
  const i = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [l, d] = m.useState(!1), [u, h] = m.useState(ti);
  return m.useEffect(() => {
    n.getDocumentById(t).then(async (f) => {
      if (f && !("error" in f)) {
        const a = f.document.contents;
        d(!0), h(a);
      } else
        throw new Error((f == null ? void 0 : f.error) || "Document not found");
    }).catch((f) => {
      i.show("error", "Error loading document", "Details: " + (f == null ? void 0 : f.message) || f), d(!0);
    });
  }, []), /* @__PURE__ */ s.jsx(Me, { studioPro: e, children: /* @__PURE__ */ s.jsxs(Pe, { children: [
    !l && /* @__PURE__ */ s.jsx(Ae, {}),
    l && /* @__PURE__ */ s.jsx(Ee, { children: /* @__PURE__ */ s.jsx(
      ei,
      {
        loadedAgent: u,
        studioPro: e,
        updateStudioProDocument: qe(e, t)
      }
    ) })
  ] }) });
}, vi = Ie(ii);
export {
  vi as component
};
//# sourceMappingURL=agentEdit.js.map
