import { $ as Z, a as ce, b as D, c as se, d as ue, e as ne, f as fe, r as f, g as le, h as me, i as he, j as ve, k as ge, l as pe, m as be, n as we, o as xe, p as J, q as ye, s as Ce, t as $e, u as U, v as ke, w as s, x as L, y as F, z as Se, A as Ve, G as O, B as je, C as X, D as Me, P as Pe, E as Ee } from "./TextInputWithIcon-Bxcjz2pl.js";
import { c as Ie, C as Ae } from "./CenteredLoadingSpinner-GhVhA5yR.js";
import { i as Le, m as z, c as Te, a as Be, b as De, g as Re, d as He, e as Oe, f as Fe, h as Y, j as Ne, k as _e, u as Ue } from "./index-sT-JpjJl.js";
import { y as qe } from "./ComboBox-D4VTIJ8V.js";
import { I as ee, W as We } from "./Banner-DNPItzP7.js";
import { T as te, h as Qe } from "./toolHandlers-DlGrjZZ3.js";
import { n as Ze, T as q } from "./genAICommonsEntities-Dtcj_rDj.js";
import { m as ze } from "./modelUtils-BSSyMbwV.js";
import { u as Ge, T as Ke, D as W } from "./Table-DhYu8u5D.js";
import { I as ie, T as Je } from "./TextWithIcon-DyBRNAR1.js";
import { r as P } from "./logger-CC_FxqwC.js";
function Xe(e, t, i) {
  let { isDisabled: n = !1, isReadOnly: l = !1, value: r, name: u, form: h, children: m, "aria-label": a, "aria-labelledby": v, validationState: b = "valid", isInvalid: C, onPressStart: x, onPressEnd: y, onPressChange: p, onPress: d, onPressUp: c, onClick: g } = e, S = (M) => {
    M.stopPropagation(), t.setSelected(M.target.checked);
  }, V = m != null, E = a != null || v != null;
  !V && !E && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: R, isPressed: T } = Z({
    onPressStart: x,
    onPressEnd: y,
    onPressChange: p,
    onPress: d,
    onPressUp: c,
    onClick: g,
    isDisabled: n
  }), { pressProps: B, isPressed: I } = Z({
    onPressStart: x,
    onPressEnd: y,
    onPressChange: p,
    onPressUp: c,
    onClick: g,
    onPress(M) {
      var o;
      d == null || d(M), t.toggle(), (o = i.current) === null || o === void 0 || o.focus();
    },
    isDisabled: n || l
  }), { focusableProps: N } = ce(e, i), H = D(R, N), _ = se(e, {
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
      onChange: S,
      disabled: n,
      ...r == null ? {} : {
        value: r
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
  }), { isInvalid: l, validationErrors: r, validationDetails: u } = n.displayValidation, { labelProps: h, inputProps: m, isSelected: a, isPressed: v, isDisabled: b, isReadOnly: C } = Xe({
    ...e,
    isInvalid: l
  }, t, i);
  fe(e, n, i);
  let { isIndeterminate: x, isRequired: y, validationBehavior: p = "aria" } = e;
  f.useEffect(() => {
    i.current && (i.current.indeterminate = !!x);
  });
  let { pressProps: d } = Z({
    isDisabled: b || C,
    onPress() {
      let { [le]: c } = e, { commitValidation: g } = c || n;
      g();
    }
  });
  return {
    labelProps: D(h, d, f.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (c) => c.preventDefault()
    }), [])),
    inputProps: {
      ...m,
      checked: a,
      "aria-required": y && p === "aria" || void 0,
      required: y && p === "native"
    },
    isSelected: a,
    isPressed: v,
    isDisabled: b,
    isReadOnly: C,
    isInvalid: l,
    validationErrors: r,
    validationDetails: u
  };
}
const Ye = /* @__PURE__ */ new WeakMap();
function re(e = {}) {
  let { isReadOnly: t } = e, [i, n] = me(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = f.useState(i);
  function r(m) {
    t || n(m);
  }
  function u() {
    t || n(!i);
  }
  var h;
  return {
    isSelected: i,
    defaultSelected: (h = e.defaultSelected) !== null && h !== void 0 ? h : l,
    setSelected: r,
    toggle: u
  };
}
function et(e, t, i) {
  const n = re({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(c) {
      c ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(c);
    }
  });
  let { name: l, form: r, descriptionId: u, errorMessageId: h, validationBehavior: m } = Ye.get(t);
  var a;
  m = (a = e.validationBehavior) !== null && a !== void 0 ? a : m;
  let { realtimeValidation: v } = ne({
    ...e,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), b = f.useRef(he), C = () => {
    t.setInvalid(e.value, v.isInvalid ? v : b.current);
  };
  f.useEffect(C);
  let x = t.realtimeValidation.isInvalid ? t.realtimeValidation : v, y = m === "native" ? t.displayValidation : x;
  var p;
  let d = oe({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || l,
    form: e.form || r,
    isRequired: (p = e.isRequired) !== null && p !== void 0 ? p : t.isRequired,
    validationBehavior: m,
    [le]: {
      realtimeValidation: x,
      displayValidation: y,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(c) {
        b.current = c, C();
      }
    }
  }, n, i);
  return {
    ...d,
    inputProps: {
      ...d.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? h : null,
        u
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const tt = /* @__PURE__ */ f.createContext(null), it = /* @__PURE__ */ f.forwardRef(function(t, i) {
  let { inputRef: n = null, ...l } = t;
  [t, i] = ve(l, i, ge);
  let { validationBehavior: r } = pe(be) || {};
  var u, h;
  let m = (h = (u = t.validationBehavior) !== null && u !== void 0 ? u : r) !== null && h !== void 0 ? h : "native", a = f.useContext(tt), v = we(f.useMemo(() => xe(n, t.inputRef !== void 0 ? t.inputRef : null), [
    n,
    t.inputRef
  ])), { labelProps: b, inputProps: C, isSelected: x, isDisabled: y, isReadOnly: p, isPressed: d, isInvalid: c } = a ? et({
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
    validationBehavior: m
  }, re(t), v), { isFocused: g, isFocusVisible: S, focusProps: V } = ye(), E = y || p, { hoverProps: R, isHovered: T } = Ce({
    ...t,
    isDisabled: E
  }), B = $e({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: x,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: d,
      isHovered: T,
      isFocused: g,
      isFocusVisible: S,
      isDisabled: y,
      isReadOnly: p,
      isInvalid: c,
      isRequired: t.isRequired || !1
    }
  }), I = se(t, {
    global: !0
  });
  return delete I.id, delete I.onClick, /* @__PURE__ */ U.createElement("label", {
    ...D(I, b, R, B),
    ref: i,
    slot: t.slot || void 0,
    "data-selected": x || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": d || void 0,
    "data-hovered": T || void 0,
    "data-focused": g || void 0,
    "data-focus-visible": S || void 0,
    "data-disabled": y || void 0,
    "data-readonly": p || void 0,
    "data-invalid": c || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ U.createElement(ke, {
    elementType: "span"
  }, /* @__PURE__ */ U.createElement("input", {
    ...D(C, V),
    ref: v
  })), B.children);
}), at = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", st = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var nt = Object.defineProperty, lt = (e, t) => nt(e, "name", { value: t, configurable: !0 });
const ot = lt((e) => s.jsx(L, { light: st, dark: at, ...e }), "EntityIcon"), rt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", dt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var ct = Object.defineProperty, ut = (e, t) => ct(e, "name", { value: t, configurable: !0 });
const ft = ut((e) => s.jsx(L, { light: dt, dark: rt, ...e }), "EntityNonPersistableIcon"), mt = async (e, t, i, n, l, r) => {
  const u = { ...n, [i]: r };
  return (i === "userPrompt" || i === "systemPrompt") && (u.variables = await Te(e, t, u)), l(u), u;
}, ht = async (e, t, i) => {
  const n = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let l;
  if (n.status === "ok" && (l = { ...t, entity: n.selected.module + "." + n.selected.name }), n.status === "none" && (l = { ...t, entity: "" }), l) {
    const r = await Be(e, t.variables, l);
    l = { ...l, variables: r }, i(l);
  }
  return l;
}, vt = async (e, t, i) => {
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
      if (!(await t.app.model.customBlobDocuments.getDocumentsOfType(z)).find(
        (r) => r.moduleName + "." + r.name === i.modelQualifiedName
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
}, gt = async (e, t) => {
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
}, pt = async (e, t, i, n) => {
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
  let r;
  return l && (r = l), r && n(r), r;
}, ae = async (e, t, i, n, l) => {
  const r = l && i.tools ? i.tools.find((h) => h.id === l) : void 0, u = await e.ui.dialogs.showModal(
    {
      title: r ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: r ? encodeURIComponent(JSON.stringify(r)) : "",
        agent: i ? encodeURIComponent(JSON.stringify(i)) : ""
      }
    }
  );
  if (u !== null) {
    const h = u;
    let m;
    l && i.tools ? m = i.tools.map((v) => v.id === l ? h : v) : m = [...i.tools || [], h], m.sort((v, b) => v.name.localeCompare(b.name));
    const a = { ...i, tools: m };
    return n(a), a;
  } else
    return null;
}, bt = async (e, t, i, n) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const r = t.tools.filter((h) => h.id !== n), u = { ...t, tools: r };
  return i(u), u;
}, wt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", xt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var yt = Object.defineProperty, Ct = (e, t) => yt(e, "name", { value: t, configurable: !0 });
const $t = Ct((e) => s.jsx(L, { light: xt, dark: wt, ...e }), "AppSelectorNoVersionIcon"), kt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", St = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Vt = Object.defineProperty, jt = (e, t) => Vt(e, "name", { value: t, configurable: !0 });
const Mt = jt((e) => s.jsx(L, { light: St, dark: kt, ...e }), "EditIcon"), Pt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Et = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var It = Object.defineProperty, At = (e, t) => It(e, "name", { value: t, configurable: !0 });
const Lt = At((e) => s.jsx(L, { light: Et, dark: Pt, ...e }), "PageIcon"), Tt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Bt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Dt = Object.defineProperty, Rt = (e, t) => Dt(e, "name", { value: t, configurable: !0 });
const Ht = Rt((e) => s.jsx(L, { light: Bt, dark: Tt, ...e }), "SyncIcon"), Ot = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Ft = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Nt = Object.defineProperty, _t = (e, t) => Nt(e, "name", { value: t, configurable: !0 });
const Ut = _t((e) => s.jsx(L, { light: Ft, dark: Ot, ...e }), "CheckCheckboxIcon");
var qt = Object.defineProperty, Wt = (e, t) => qt(e, "name", { value: t, configurable: !0 });
const Qt = Wt(({ children: e, ...t }) => s.jsx(zt, { ...t, children: ({ isIndeterminate: i, isSelected: n }) => s.jsxs(s.Fragment, { children: [s.jsxs(de, { $isSelected: n, $isIndeterminate: i, children: [i && s.jsx(Zt, {}), n && !i && s.jsx(Ut, {})] }), e] }) }), "Checkbox"), de = F.div`
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
`, Zt = F.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, zt = F(it)`
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
`, Gt = F(Qt)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Kt = ({
  agent: e,
  studioPro: t,
  componentName: i,
  updateStudioProDocument: n,
  onAgentChange: l,
  toolValidations: r
}) => {
  const [u, h] = f.useState([]), m = f.useMemo(() => e.tools ? e.tools.map((d, c) => ({
    id: d.id ?? String(c),
    enabled: d.enabled,
    name: d.name,
    description: d.description || "",
    tool: d.microflow || ""
  })) : [], [e.tools]), { items: a, sortProps: v } = Ge(m), b = f.useCallback(
    (d) => {
      const c = r.get(d);
      return c === "invalid" ? /* @__PURE__ */ s.jsx(ie, { icon: /* @__PURE__ */ s.jsx(Ve, { title: "Microflow invalid" }) }) : c === "syncing" ? /* @__PURE__ */ s.jsx(ie, { icon: /* @__PURE__ */ s.jsx(Ht, { title: "Validating..." }) }) : null;
    },
    [r]
  ), C = f.useCallback(async () => {
    const d = await ae(t, i, e, n);
    d && l(d);
  }, [t, i, e, n, l]), x = f.useCallback(async () => {
    if (u.length === 0 || !e.tools)
      return;
    const d = u[0], c = await ae(
      t,
      i,
      e,
      n,
      d
    );
    c && l(c);
  }, [t, i, e, n, l, u]), y = f.useCallback(async () => {
    if (u.length === 0 || !e.tools)
      return;
    const d = u[0], c = await bt(t, e, n, d);
    c && l(c);
  }, [e, n, l, u]), p = f.useCallback(
    async (d, c) => {
      if (!e.tools)
        return;
      const g = e.tools.map(
        (V) => (V.id ?? "") === d ? { ...V, enabled: c } : V
      ), S = { ...e, tools: g };
      n(S), l(S);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, n, l]
  );
  return /* @__PURE__ */ s.jsx(O, { label: "Tools", children: /* @__PURE__ */ s.jsx(
    Ke,
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
      data: a.map((d) => [
        b(d.id),
        /* @__PURE__ */ s.jsx(
          Gt,
          {
            "aria-label": "Enabled",
            isSelected: d.enabled,
            onChange: (c) => p(d.id, c)
          }
        ),
        d.name,
        d.description,
        /* @__PURE__ */ s.jsx(Je, { icon: /* @__PURE__ */ s.jsx(Ze, {}), text: d.tool })
      ]),
      rowKey: (d, c) => {
        var g;
        return ((g = a[c]) == null ? void 0 : g.id) ?? String(c);
      },
      rowOpacity: (d) => {
        var c;
        return (c = a[d]) != null && c.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: u,
      onDoubleClick: x,
      onSelectionChange: h,
      ...v,
      toolbarLeft: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          W,
          {
            icon: /* @__PURE__ */ s.jsx(Lt, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: C
          }
        ),
        /* @__PURE__ */ s.jsx(
          W,
          {
            icon: /* @__PURE__ */ s.jsx(Mt, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: x,
            tooltip: "Edit selected tool",
            isDisabled: u.length === 0
          }
        ),
        /* @__PURE__ */ s.jsx(
          W,
          {
            icon: /* @__PURE__ */ s.jsx($t, {}),
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
}, Jt = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  showCreateVariablesInfo: !1,
  missingAttributes: [],
  unusedAttributes: []
}, Xt = ({ loadedAgent: e, studioPro: t, updateStudioProDocument: i }) => {
  const [n, l] = f.useState(!1), [r, u] = f.useState(Jt), [h, m] = f.useState(void 0), [a, v] = f.useState(e), [b, C] = f.useState(!1), [x, y] = f.useState(!1), [p, d] = f.useState(/* @__PURE__ */ new Map()), c = je(), g = f.useRef(null);
  f.useEffect(() => {
    M(e).then((o) => u(o)), H(t, e.entity).then((o) => m(o)), v(e), l(!0);
  }, []), f.useEffect(() => () => {
    g.current && clearTimeout(g.current);
  }, []), f.useEffect(() => {
    n && (async () => {
      const w = await H(t, a.entity);
      m(w);
    })();
  }, [t, a.entity]), f.useEffect(() => {
    n && (async () => {
      if (a.tools && a.tools.length > 0) {
        const w = /* @__PURE__ */ new Map();
        a.tools.forEach((k) => {
          k.microflow && w.set(k.id, "syncing");
        }), d(w);
        const $ = await Promise.all(
          a.tools.map(async (k) => {
            if (k.microflow) {
              const A = await Qe("microflow", k, t, a);
              return {
                id: k.id,
                state: A === !0 ? "valid" : "invalid"
              };
            }
            return { id: k.id, state: "valid" };
          })
        ), j = new Map($.map((k) => [k.id, k.state]));
        d(j);
      }
    })();
  }, [n]);
  const S = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    if (n && a.tools) {
      const o = S.current, w = /* @__PURE__ */ new Map();
      a.tools.forEach(($) => {
        $.microflow && w.set($.id, $.microflow);
      }), d(($) => {
        var k;
        const j = new Map($);
        return (k = a.tools) == null || k.forEach((A) => {
          if (!$.has(A.id))
            j.set(A.id, "valid");
          else {
            const G = o.get(A.id), K = w.get(A.id);
            G !== void 0 && K !== void 0 && G !== K && j.set(A.id, "valid");
          }
        }), j;
      }), S.current = w;
    }
  }, [a.tools, n]), f.useEffect(() => {
    n && (async () => {
      const w = await M(a);
      u(w);
    })();
  }, [t, a]);
  const V = f.useMemo(() => De(a.variables), [a.variables]), E = (o) => (w) => {
    const $ = { ...a, [o]: w };
    v($), g.current && clearTimeout(g.current), g.current = setTimeout(async () => {
      const j = await mt(
        t,
        c,
        o,
        $,
        i,
        w
      );
      v(j);
    }, 300);
  }, R = async () => {
    const o = await ht(t, a, i);
    o && v(o);
  }, T = async () => {
    const o = await vt(t, a, i);
    o && v(o);
  }, B = async () => {
    a.modelQualifiedName && gt(t, a.modelQualifiedName);
  }, I = async () => {
    Ne(t, a.entity);
  }, N = async () => {
    const o = await pt(t, Y, a, i);
    o && v(o);
  }, H = async (o, w) => {
    if (!w)
      return;
    const $ = await Re(o, w);
    if (!$)
      return;
    const j = await He($, o);
    if (j !== void 0)
      return j ? /* @__PURE__ */ s.jsx(ot, {}) : /* @__PURE__ */ s.jsx(ft, {});
  }, _ = f.useMemo(() => {
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
    missingAttributes: await Fe(t, o),
    unusedAttributes: await Oe(t, o)
  });
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(X, { children: [
      /* @__PURE__ */ s.jsx(O, { label: "System prompt", children: /* @__PURE__ */ s.jsx(
        te,
        {
          ariaLabel: "System prompt",
          value: a.systemPrompt,
          onChange: E("systemPrompt"),
          highlightRules: V
        }
      ) }),
      /* @__PURE__ */ s.jsx(O, { label: "User prompt", children: /* @__PURE__ */ s.jsx(
        te,
        {
          ariaLabel: "User prompt",
          value: a.userPrompt || "",
          onChange: E("userPrompt"),
          highlightRules: V,
          validate: () => r.isValidUserPrompt
        }
      ) }),
      /* @__PURE__ */ s.jsx(
        Kt,
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
        q,
        {
          ariaLabel: "Model",
          label: "Model",
          value: a.modelQualifiedName ? a.modelQualifiedName : "",
          icon: a.modelQualifiedName ? ze : void 0,
          buttonCaption: "Select...",
          onClick: T,
          validate: () => r.isValidModel,
          buttonCaptionSecondary: a.modelQualifiedName ? "Show" : void 0,
          onClickSecondary: a.modelQualifiedName ? B : void 0
        }
      ),
      /* @__PURE__ */ s.jsx(
        q,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: _,
          buttonCaption: "Edit",
          onClick: N,
          validate: void 0
        }
      ),
      /* @__PURE__ */ s.jsx(
        qe,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: a.description,
          onChange: E("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ s.jsx(
        q,
        {
          ariaLabel: "Entity",
          label: "Entity",
          value: a.entity,
          icon: h,
          onClick: R,
          buttonCaption: "Select...",
          validate: () => r.isValidEntity,
          buttonCaptionSecondary: a.entity ? "Show" : void 0,
          onClickSecondary: a.entity ? I : void 0
        }
      ),
      r.showCreateVariablesInfo && r.unusedAttributes.length === 0 && !x && /* @__PURE__ */ s.jsx(ee, { onClose: () => y(!0), children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
      r.missingAttributes.length > 0 && /* @__PURE__ */ s.jsxs(We, { children: [
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes cannot be found on the selected entity:" }),
        /* @__PURE__ */ s.jsx("ul", { children: r.missingAttributes.map((o) => /* @__PURE__ */ s.jsx("li", { children: o }, o)) })
      ] }),
      r.unusedAttributes.length > 0 && !b && /* @__PURE__ */ s.jsxs(ee, { onClose: () => C(!0), children: [
        r.showCreateVariablesInfo && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("span", { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
          /* @__PURE__ */ s.jsx("br", {})
        ] }),
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes are found on the selected entity, but are not used in the prompt:" }),
        /* @__PURE__ */ s.jsx("ul", { children: r.unusedAttributes.map((o) => /* @__PURE__ */ s.jsx("li", { children: o }, o)) })
      ] })
    ] }) })
  ] });
}, Yt = _e(), ei = ({ studioPro: e, documentId: t }) => {
  const i = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [l, r] = f.useState(!1), [u, h] = f.useState(Yt);
  return f.useEffect(() => {
    n.getDocumentById(t).then(async (m) => {
      if (m && !("error" in m)) {
        const a = m.document.contents;
        r(!0), h(a);
      } else
        throw new Error((m == null ? void 0 : m.error) || "Document not found");
    }).catch((m) => {
      i.show("error", "Error loading document", "Details: " + (m == null ? void 0 : m.message) || m), r(!0);
    });
  }, []), /* @__PURE__ */ s.jsx(Me, { studioPro: e, children: /* @__PURE__ */ s.jsxs(Pe, { children: [
    !l && /* @__PURE__ */ s.jsx(Ae, {}),
    l && /* @__PURE__ */ s.jsx(Ee, { children: /* @__PURE__ */ s.jsx(
      Xt,
      {
        loadedAgent: u,
        studioPro: e,
        updateStudioProDocument: Ue(e, t)
      }
    ) })
  ] }) });
}, fi = Ie(ei);
export {
  fi as component
};
//# sourceMappingURL=agentEdit.js.map
