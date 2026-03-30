import { $ as Q, a as Ve, b as H, c as ce, d as je, e as ue, f as Ee, r as u, g as fe, h as Me, i as Ie, j as Le, k as Ae, l as Pe, m as Be, n as Re, o as De, p as se, q as He, s as Oe, t as qe, u as Z, v as Fe, w as a, x as B, y as _, z as Ne, A as me, G as N, B as _e, C as ae, D as Ke, P as Ue, E as We } from "./Icon-DlQJfq7F.js";
import { I as K, T as he, c as ze, C as Ze } from "./TextWithIcon-sxhIisHZ.js";
import { i as Je, g as ge, c as Ge, m as Xe, a as Qe, k as Ye, T as ne, b as et, d as tt, e as it, f as st, h as at, j as nt, l as J, n as ot, o as lt, u as dt } from "./index-8TehL4sX.js";
import { n as rt, y as ct } from "./MicroflowIcon-kvKEq0tY.js";
import { m as ut } from "./modelUtils-BmVykd1T.js";
import { I as oe, W as ft } from "./Banner-BKPTdROG.js";
import { T as le, h as mt } from "./toolHandlers-k8YmGzVo.js";
import { T as G } from "./TextInputWithButton-DdFsQTz_.js";
import { h as ht } from "./knowledgebaseToolHandlers-BmSsf6rK.js";
import { r as L } from "./DesignSystemTokens-BZrmEyPo.js";
import { u as be, T as ve, D as O } from "./Table-8NxjvFfk.js";
function gt(e, t, n) {
  let { isDisabled: s = !1, isReadOnly: l = !1, value: c, name: r, form: h, children: g, "aria-label": i, "aria-labelledby": f, validationState: v = "valid", isInvalid: y, onPressStart: k, onPressEnd: $, onPressChange: C, onPress: o, onPressUp: d, onClick: b } = e, j = (I) => {
    I.stopPropagation(), t.setSelected(I.target.checked);
  }, S = g != null, E = i != null || f != null;
  !S && !E && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: R, isPressed: A } = Q({
    onPressStart: k,
    onPressEnd: $,
    onPressChange: C,
    onPress: o,
    onPressUp: d,
    onClick: b,
    isDisabled: s
  }), { pressProps: M, isPressed: P } = Q({
    onPressStart: k,
    onPressEnd: $,
    onPressChange: C,
    onPressUp: d,
    onClick: b,
    onPress(I) {
      var D;
      o == null || o(I), t.toggle(), (D = n.current) === null || D === void 0 || D.focus();
    },
    isDisabled: s || l
  }), { focusableProps: U } = Ve(e, n), W = H(R, U), z = ce(e, {
    labelable: !0
  });
  return je(n, t.defaultSelected, t.setSelected), {
    labelProps: H(M, {
      onClick: (I) => I.preventDefault()
    }),
    inputProps: H(z, {
      "aria-invalid": y || v === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": l || void 0,
      onChange: j,
      disabled: s,
      ...c == null ? {} : {
        value: c
      },
      name: r,
      form: h,
      type: "checkbox",
      ...W
    }),
    isSelected: t.isSelected,
    isPressed: A || P,
    isDisabled: s,
    isReadOnly: l,
    isInvalid: y || v === "invalid"
  };
}
function pe(e, t, n) {
  let s = ue({
    ...e,
    value: t.isSelected
  }), { isInvalid: l, validationErrors: c, validationDetails: r } = s.displayValidation, { labelProps: h, inputProps: g, isSelected: i, isPressed: f, isDisabled: v, isReadOnly: y } = gt({
    ...e,
    isInvalid: l
  }, t, n);
  Ee(e, s, n);
  let { isIndeterminate: k, isRequired: $, validationBehavior: C = "aria" } = e;
  u.useEffect(() => {
    n.current && (n.current.indeterminate = !!k);
  });
  let { pressProps: o } = Q({
    isDisabled: v || y,
    onPress() {
      let { [fe]: d } = e, { commitValidation: b } = d || s;
      b();
    }
  });
  return {
    labelProps: H(h, o, u.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (d) => d.preventDefault()
    }), [])),
    inputProps: {
      ...g,
      checked: i,
      "aria-required": $ && C === "aria" || void 0,
      required: $ && C === "native"
    },
    isSelected: i,
    isPressed: f,
    isDisabled: v,
    isReadOnly: y,
    isInvalid: l,
    validationErrors: c,
    validationDetails: r
  };
}
const bt = /* @__PURE__ */ new WeakMap();
function we(e = {}) {
  let { isReadOnly: t } = e, [n, s] = Me(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = u.useState(n);
  function c(g) {
    t || s(g);
  }
  function r() {
    t || s(!n);
  }
  var h;
  return {
    isSelected: n,
    defaultSelected: (h = e.defaultSelected) !== null && h !== void 0 ? h : l,
    setSelected: c,
    toggle: r
  };
}
function vt(e, t, n) {
  const s = we({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(d) {
      d ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(d);
    }
  });
  let { name: l, form: c, descriptionId: r, errorMessageId: h, validationBehavior: g } = bt.get(t);
  var i;
  g = (i = e.validationBehavior) !== null && i !== void 0 ? i : g;
  let { realtimeValidation: f } = ue({
    ...e,
    value: s.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), v = u.useRef(Ie), y = () => {
    t.setInvalid(e.value, f.isInvalid ? f : v.current);
  };
  u.useEffect(y);
  let k = t.realtimeValidation.isInvalid ? t.realtimeValidation : f, $ = g === "native" ? t.displayValidation : k;
  var C;
  let o = pe({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || l,
    form: e.form || c,
    isRequired: (C = e.isRequired) !== null && C !== void 0 ? C : t.isRequired,
    validationBehavior: g,
    [fe]: {
      realtimeValidation: k,
      displayValidation: $,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(d) {
        v.current = d, y();
      }
    }
  }, s, n);
  return {
    ...o,
    inputProps: {
      ...o.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? h : null,
        r
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const pt = /* @__PURE__ */ u.createContext(null), wt = /* @__PURE__ */ u.forwardRef(function(t, n) {
  let { inputRef: s = null, ...l } = t;
  [t, n] = Le(l, n, Ae);
  let { validationBehavior: c } = Pe(Be) || {};
  var r, h;
  let g = (h = (r = t.validationBehavior) !== null && r !== void 0 ? r : c) !== null && h !== void 0 ? h : "native", i = u.useContext(pt), f = Re(u.useMemo(() => De(s, t.inputRef !== void 0 ? t.inputRef : null), [
    s,
    t.inputRef
  ])), { labelProps: v, inputProps: y, isSelected: k, isDisabled: $, isReadOnly: C, isPressed: o, isInvalid: d } = i ? vt({
    ...se(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, i, f) : pe({
    ...se(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: g
  }, we(t), f), { isFocused: b, isFocusVisible: j, focusProps: S } = He(), E = $ || C, { hoverProps: R, isHovered: A } = Oe({
    ...t,
    isDisabled: E
  }), M = qe({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: k,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: o,
      isHovered: A,
      isFocused: b,
      isFocusVisible: j,
      isDisabled: $,
      isReadOnly: C,
      isInvalid: d,
      isRequired: t.isRequired || !1
    }
  }), P = ce(t, {
    global: !0
  });
  return delete P.id, delete P.onClick, /* @__PURE__ */ Z.createElement("label", {
    ...H(P, v, R, M),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": k || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": o || void 0,
    "data-hovered": A || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": j || void 0,
    "data-disabled": $ || void 0,
    "data-readonly": C || void 0,
    "data-invalid": d || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Z.createElement(Fe, {
    elementType: "span"
  }, /* @__PURE__ */ Z.createElement("input", {
    ...H(y, S),
    ref: f
  })), M.children);
}), xt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", yt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Ct = Object.defineProperty, kt = (e, t) => Ct(e, "name", { value: t, configurable: !0 });
const $t = kt((e) => a.jsx(B, { light: yt, dark: xt, ...e }), "EntityIcon"), Tt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", St = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Vt = Object.defineProperty, jt = (e, t) => Vt(e, "name", { value: t, configurable: !0 });
const Et = jt((e) => a.jsx(B, { light: St, dark: Tt, ...e }), "EntityNonPersistableIcon"), Mt = async (e, t, n, s, l, c) => {
  const r = { ...s, [n]: c };
  return (n === "userPrompt" || n === "systemPrompt") && (r.variables = await Ge(e, t, r)), l(r), r;
}, It = async (e, t, n) => {
  const s = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let l;
  if (s.status === "ok" && (l = {
    ...t,
    entity: {
      documentId: s.selected.id,
      qualifiedName: s.selected.module + "." + s.selected.name
    }
  }), s.status === "none" && (l = { ...t, entity: void 0 }), l) {
    const c = await Qe(e, t.variables, l);
    l = { ...l, variables: c }, n(l);
  }
  return l;
}, Lt = async (e, t, n) => {
  const s = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Xe }
  });
  let l;
  return s.status === "ok" && (l = {
    ...t,
    model: {
      documentId: s.selected.id,
      qualifiedName: s.selected.module + "." + s.selected.name
    }
  }), s.status === "none" && (l = { ...t, model: void 0 }), l && n(l), l;
}, X = async (e, t, n) => {
  switch (e) {
    case "model": {
      if (!n.model)
        return "Please select a model.";
      const s = await ge(t, n.model);
      if (!s)
        return "This document is invalid. Make sure to select a document of type Model.";
      if (s.excluded)
        return "The selected model is currently excluded from the project. Please include it to use it as agent's model.";
      break;
    }
    case "entity": {
      if (!n.entity) {
        if (n.variables.length > 0)
          return "Please select an entity.";
        break;
      }
      const [s, l] = n.entity.qualifiedName.split(".");
      if (!s || !l)
        return "The selected entity is not valid.";
      if (!await Je(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "userPrompt":
      if (!n.userPrompt)
        return "Please provide a user prompt.";
      break;
    default:
      return !0;
  }
  return !0;
}, At = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await ge(e, t))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, Pt = async (e, t, n, s) => {
  const l = await e.ui.dialogs.showModal(
    {
      title: "Model settings",
      contentSize: { height: 400, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "modelSettingsEdit",
      queryParams: {
        agent: encodeURIComponent(JSON.stringify(n))
      }
    }
  );
  let c;
  return l && (c = l), c && s(c), c;
}, de = async (e, t, n, s, l) => {
  const c = l && n.tools ? n.tools.find((h) => h.id === l) : void 0, r = await e.ui.dialogs.showModal(
    {
      title: c ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: c ? encodeURIComponent(JSON.stringify(c)) : "",
        agent: n ? encodeURIComponent(JSON.stringify(n)) : ""
      }
    }
  );
  if (r !== null) {
    const h = r;
    let g;
    l && n.tools ? g = n.tools.map((f) => f.id === l ? h : f) : g = [...n.tools || [], h], g.sort((f, v) => f.name.localeCompare(v.name));
    const i = { ...n, tools: g };
    return s(i), i;
  } else
    return null;
}, Bt = async (e, t, n, s) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const c = t.tools.filter((h) => h.id !== s), r = { ...t, tools: c };
  return n(r), r;
}, re = async (e, t, n, s, l) => {
  const c = n.knowledgebaseTools || [], r = l ? c.find((g) => g.id === l) : void 0, h = await e.ui.dialogs.showModal(
    {
      title: r ? "Edit knowledge base" : "Add knowledge base",
      contentSize: { height: 541, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "knowledgebaseToolEdit",
      queryParams: {
        tool: r ? encodeURIComponent(JSON.stringify(r)) : "",
        agent: n ? encodeURIComponent(JSON.stringify(n)) : ""
      }
    }
  );
  if (h !== null) {
    const g = h;
    let i;
    l ? i = c.map((v) => v.id === l ? g : v) : i = [...c, g], i.sort((v, y) => v.name.localeCompare(y.name));
    const f = { ...n, knowledgebaseTools: i };
    return s(f), f;
  }
  return null;
}, Rt = async (e, t, n, s) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this knowledge base?"
  }) === !1)
    return;
  const r = (t.knowledgebaseTools || []).filter((g) => g.id !== s), h = { ...t, knowledgebaseTools: r };
  return n(h), h;
}, Dt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ht = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ot = Object.defineProperty, qt = (e, t) => Ot(e, "name", { value: t, configurable: !0 });
const xe = qt((e) => a.jsx(B, { light: Ht, dark: Dt, ...e }), "AppSelectorNoVersionIcon"), Ft = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Nt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var _t = Object.defineProperty, Kt = (e, t) => _t(e, "name", { value: t, configurable: !0 });
const ye = Kt((e) => a.jsx(B, { light: Nt, dark: Ft, ...e }), "EditIcon"), Ut = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Wt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var zt = Object.defineProperty, Zt = (e, t) => zt(e, "name", { value: t, configurable: !0 });
const Ce = Zt((e) => a.jsx(B, { light: Wt, dark: Ut, ...e }), "PageIcon"), Jt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Gt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Xt = Object.defineProperty, Qt = (e, t) => Xt(e, "name", { value: t, configurable: !0 });
const ke = Qt((e) => a.jsx(B, { light: Gt, dark: Jt, ...e }), "SyncIcon"), Yt = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ei = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var ti = Object.defineProperty, ii = (e, t) => ti(e, "name", { value: t, configurable: !0 });
const si = ii((e) => a.jsx(B, { light: ei, dark: Yt, ...e }), "CheckCheckboxIcon");
var ai = Object.defineProperty, ni = (e, t) => ai(e, "name", { value: t, configurable: !0 });
const $e = ni(({ children: e, ...t }) => a.jsx(li, { ...t, children: ({ isIndeterminate: n, isSelected: s }) => a.jsxs(a.Fragment, { children: [a.jsxs(Te, { $isSelected: s, $isIndeterminate: n, children: [n && a.jsx(oi, {}), s && !n && a.jsx(si, {})] }), e] }) }), "Checkbox"), Te = _.div`
    width: ${L.size12};
    height: ${L.size12};
    margin: ${L.spacing2};
    border-radius: ${L.borderRadiusXs};
    border: ${L.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: n }) => t && !n ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, oi = _.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, li = _(wt)`
    cursor: pointer;
    display: flex;
    height: ${L.size16};
    gap: ${L.spacing4};
    line-height: ${L.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${Te} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${Ne}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, di = _($e)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, ri = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: s,
  onAgentChange: l,
  knowledgebaseToolValidations: c
}) => {
  const [r, h] = u.useState([]), g = u.useMemo(() => (e.knowledgebaseTools || []).map((d, b) => ({
    id: d.id ?? String(b),
    enabled: d.enabled,
    name: d.name,
    description: d.description || "",
    tool: d.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: i, sortProps: f } = be(g), v = u.useCallback(
    (o) => {
      const d = c.get(o);
      return d === "invalid" ? /* @__PURE__ */ a.jsx(K, { icon: /* @__PURE__ */ a.jsx(me, { title: "Tool invalid" }) }) : d === "syncing" ? /* @__PURE__ */ a.jsx(K, { icon: /* @__PURE__ */ a.jsx(ke, { title: "Validating..." }) }) : null;
    },
    [c]
  ), y = u.useCallback(async () => {
    const o = await re(
      t,
      n,
      e,
      s
    );
    o && l(o);
  }, [t, n, e, s, l]), k = u.useCallback(async () => {
    const o = e.knowledgebaseTools || [];
    if (r.length === 0 || o.length === 0)
      return;
    const d = r[0], b = await re(
      t,
      n,
      e,
      s,
      d
    );
    b && l(b);
  }, [t, n, e, s, l, r]), $ = u.useCallback(async () => {
    const o = e.knowledgebaseTools || [];
    if (r.length === 0 || o.length === 0)
      return;
    const d = r[0], b = await Rt(
      t,
      e,
      s,
      d
    );
    b && l(b);
  }, [e, s, l, r]), C = u.useCallback(
    async (o, d) => {
      const b = e.knowledgebaseTools || [];
      if (b.length === 0)
        return;
      const j = b.map(
        (E) => (E.id ?? "") === o ? { ...E, enabled: d } : E
      ), S = { ...e, knowledgebaseTools: j };
      s(S), l(S);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, s, l]
  );
  return /* @__PURE__ */ a.jsx(N, { label: "Knowledge bases", children: /* @__PURE__ */ a.jsx(
    ve,
    {
      ariaLabel: "Knowledge base tools table",
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
        { id: "knowledgebase", caption: "Knowledge base", resizable: !0, allowsSorting: !0 }
      ],
      data: i.map((o) => [
        { cellContent: v(o.id) },
        {
          cellContent: /* @__PURE__ */ a.jsx(
            di,
            {
              "aria-label": "Enabled",
              isSelected: o.enabled,
              onChange: (d) => C(o.id, d)
            }
          )
        },
        { cellContent: o.name, tooltipText: o.name },
        { cellContent: o.description, tooltipText: o.description },
        {
          cellContent: /* @__PURE__ */ a.jsx(he, { icon: Ye, text: o.tool }),
          tooltipText: o.tool
        }
      ]),
      rowKey: (o, d) => {
        var b;
        return ((b = i[d]) == null ? void 0 : b.id) ?? String(d);
      },
      rowOpacity: (o) => {
        var d;
        return (d = i[o]) != null && d.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: r,
      onDoubleClick: k,
      onSelectionChange: h,
      ...f,
      toolbarLeft: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          O,
          {
            icon: /* @__PURE__ */ a.jsx(Ce, {}),
            label: "New",
            "aria-label": "Add new knowledge base tool",
            tooltip: "Add new knowledge base tool",
            onPress: y
          }
        ),
        /* @__PURE__ */ a.jsx(
          O,
          {
            icon: /* @__PURE__ */ a.jsx(ye, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base tool",
            onPress: k,
            tooltip: "Edit selected knowledge base tool",
            isDisabled: r.length === 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          O,
          {
            icon: /* @__PURE__ */ a.jsx(xe, {}),
            label: "Delete",
            "aria-label": "Delete selected knowledge base tool",
            onPress: $,
            tooltip: "Delete selected knowledge base tool",
            isDisabled: r.length === 0
          }
        )
      ] })
    }
  ) });
}, ci = _($e)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, ui = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: s,
  onAgentChange: l,
  toolValidations: c
}) => {
  const [r, h] = u.useState([]), g = u.useMemo(() => e.tools ? e.tools.map((o, d) => ({
    id: o.id ?? String(d),
    enabled: o.enabled,
    name: o.toolType === ne.Microflow ? o.name : o.document.qualifiedName.split(".")[1],
    description: o.description || "",
    tooltype: o.toolType,
    tool: o.document.qualifiedName || ""
  })) : [], [e.tools]), { items: i, sortProps: f } = be(g), v = u.useCallback(
    (o) => {
      const d = c.get(o);
      return d === "invalid" ? /* @__PURE__ */ a.jsx(K, { icon: /* @__PURE__ */ a.jsx(me, { title: "Tool invalid" }) }) : d === "syncing" ? /* @__PURE__ */ a.jsx(K, { icon: /* @__PURE__ */ a.jsx(ke, { title: "Validating..." }) }) : null;
    },
    [c]
  ), y = u.useCallback(async () => {
    const o = await de(t, n, e, s);
    o && l(o);
  }, [t, n, e, s, l]), k = u.useCallback(async () => {
    if (r.length === 0 || !e.tools)
      return;
    const o = r[0], d = await de(
      t,
      n,
      e,
      s,
      o
    );
    d && l(d);
  }, [t, n, e, s, l, r]), $ = u.useCallback(async () => {
    if (r.length === 0 || !e.tools)
      return;
    const o = r[0], d = await Bt(t, e, s, o);
    d && l(d);
  }, [e, s, l, r]), C = u.useCallback(
    async (o, d) => {
      if (!e.tools)
        return;
      const b = e.tools.map(
        (S) => (S.id ?? "") === o ? { ...S, enabled: d } : S
      ), j = { ...e, tools: b };
      s(j), l(j);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, s, l]
  );
  return /* @__PURE__ */ a.jsx(N, { label: "Tools", children: /* @__PURE__ */ a.jsx(
    ve,
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
      data: i.map((o) => [
        { cellContent: v(o.id) },
        {
          cellContent: /* @__PURE__ */ a.jsx(
            ci,
            {
              "aria-label": "Enabled",
              isSelected: o.enabled,
              onChange: (d) => C(o.id, d)
            }
          )
        },
        { cellContent: o.name, tooltipText: o.name },
        { cellContent: o.description, tooltipText: o.description },
        {
          cellContent: /* @__PURE__ */ a.jsx(
            he,
            {
              icon: o.tooltype === ne.Microflow ? /* @__PURE__ */ a.jsx(rt, {}) : et,
              text: o.tool
            }
          ),
          tooltipText: o.tool
        }
      ]),
      rowKey: (o, d) => {
        var b;
        return ((b = i[d]) == null ? void 0 : b.id) ?? String(d);
      },
      rowOpacity: (o) => {
        var d;
        return (d = i[o]) != null && d.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: r,
      onDoubleClick: k,
      onSelectionChange: h,
      ...f,
      toolbarLeft: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(
          O,
          {
            icon: /* @__PURE__ */ a.jsx(Ce, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: y
          }
        ),
        /* @__PURE__ */ a.jsx(
          O,
          {
            icon: /* @__PURE__ */ a.jsx(ye, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: k,
            tooltip: "Edit selected tool",
            isDisabled: r.length === 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          O,
          {
            icon: /* @__PURE__ */ a.jsx(xe, {}),
            label: "Delete",
            "aria-label": "Delete selected tool",
            onPress: $,
            tooltip: "Delete selected tool",
            isDisabled: r.length === 0
          }
        )
      ] })
    }
  ) });
}, fi = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  showCreateVariablesInfo: !1,
  missingAttributes: [],
  unusedAttributes: []
}, mi = ({ loadedAgent: e, studioPro: t, updateStudioProDocument: n }) => {
  var ee, te, ie;
  const [s, l] = u.useState(!1), [c, r] = u.useState(fi), [h, g] = u.useState(void 0), [i, f] = u.useState(e), [v, y] = u.useState(!1), [k, $] = u.useState(!1), [C, o] = u.useState(/* @__PURE__ */ new Map()), [d, b] = u.useState(
    /* @__PURE__ */ new Map()
  ), j = _e(), S = u.useRef(null);
  u.useEffect(() => {
    var m;
    Y(e).then((x) => r(x)), D(t, (m = e.entity) == null ? void 0 : m.qualifiedName).then((x) => g(x)), f(e), l(!0);
  }, []), u.useEffect(() => {
    s && f(e);
  }, [e]), u.useEffect(() => () => {
    S.current && clearTimeout(S.current);
  }, []), u.useEffect(() => {
    s && (async () => {
      var p;
      const x = await D(t, (p = i.entity) == null ? void 0 : p.qualifiedName);
      g(x);
    })();
  }, [t, (ee = i.entity) == null ? void 0 : ee.qualifiedName]), u.useEffect(() => {
    s && (async () => {
      const x = [];
      if (i.tools && i.tools.length > 0) {
        const p = /* @__PURE__ */ new Map();
        i.tools.forEach((w) => {
          p.set(w.id, "syncing");
        }), o(p), x.push(
          Promise.all(
            i.tools.map(async (w) => {
              const V = await mt("document", w, i, t);
              return {
                id: w.id,
                state: V === !0 ? "valid" : "invalid"
              };
            })
          ).then((w) => {
            const V = new Map(w.map((T) => [T.id, T.state]));
            o(V);
          })
        );
      }
      if (i.knowledgebaseTools && i.knowledgebaseTools.length > 0) {
        const p = /* @__PURE__ */ new Map();
        i.knowledgebaseTools.forEach((w) => {
          p.set(w.id, "syncing");
        }), b(p), x.push(
          Promise.all(
            i.knowledgebaseTools.map(async (w) => {
              const V = await ht(
                "document",
                w,
                i,
                t
              );
              return {
                id: w.id,
                state: V === !0 ? "valid" : "invalid"
              };
            })
          ).then((w) => {
            const V = new Map(w.map((T) => [T.id, T.state]));
            b(V);
          })
        );
      }
      await Promise.all(x);
    })();
  }, [s]);
  const E = u.useRef(/* @__PURE__ */ new Map()), R = u.useRef(/* @__PURE__ */ new Map());
  u.useEffect(() => {
    if (s && i.tools) {
      const m = E.current, x = /* @__PURE__ */ new Map();
      i.tools.forEach((p) => {
        x.set(p.id, p.document.qualifiedName);
      }), o((p) => {
        var V;
        const w = new Map(p);
        return (V = i.tools) == null || V.forEach((T) => {
          if (!p.has(T.id))
            w.set(T.id, "valid");
          else {
            const q = m.get(T.id), F = x.get(T.id);
            q !== void 0 && F !== void 0 && q !== F && w.set(T.id, "valid");
          }
        }), w;
      }), E.current = x;
    }
  }, [i.tools, s]), u.useEffect(() => {
    if (s && i.knowledgebaseTools) {
      const m = R.current, x = /* @__PURE__ */ new Map();
      i.knowledgebaseTools.forEach((p) => {
        x.set(p.id, p.document.qualifiedName);
      }), b((p) => {
        var V;
        const w = new Map(p);
        return (V = i.knowledgebaseTools) == null || V.forEach((T) => {
          if (!p.has(T.id))
            w.set(T.id, "valid");
          else {
            const q = m.get(T.id), F = x.get(T.id);
            q !== void 0 && F !== void 0 && q !== F && w.set(T.id, "valid");
          }
        }), w;
      }), R.current = x;
    }
  }, [i.knowledgebaseTools, s]), u.useEffect(() => {
    s && (async () => {
      const x = await Y(i);
      r(x);
    })();
  }, [t, i]);
  const A = u.useMemo(() => tt(i.variables), [i.variables]), M = (m) => (x) => {
    const p = { ...i, [m]: x };
    f(p), S.current && clearTimeout(S.current), S.current = setTimeout(async () => {
      const w = await Mt(
        t,
        j,
        m,
        p,
        n,
        x
      );
      f(w);
    }, 300);
  }, P = async () => {
    const m = await It(t, i, n);
    m && f(m);
  }, U = async () => {
    const m = await Lt(t, i, n);
    m && f(m);
  }, W = async () => {
    i.model && At(t, i.model);
  }, z = async () => {
    i.entity && ot(t, i.entity.qualifiedName);
  }, I = async () => {
    const m = await Pt(t, J, i, n);
    m && f(m);
  }, D = async (m, x) => {
    if (!x)
      return;
    const p = await it(m, x);
    if (!p)
      return;
    const w = await st(p, m);
    if (w !== void 0)
      return w ? /* @__PURE__ */ a.jsx($t, {}) : /* @__PURE__ */ a.jsx(Et, {});
  }, Se = u.useMemo(() => {
    let m = "";
    return i.maxTokens !== void 0 && (m += "Max tokens: " + i.maxTokens.toLocaleString(navigator.language)), i.temperature !== void 0 && (m.length > 0 && (m += ", "), m += "Temperature: " + i.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), i.topP !== void 0 && (m.length > 0 && (m += ", "), m += "Top P: " + i.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), m;
  }, [i.temperature, i.maxTokens, i.topP]), Y = async (m) => ({
    isValidModel: await X("model", t, m),
    isValidEntity: await X("entity", t, m),
    isValidUserPrompt: await X("userPrompt", t, m),
    showCreateVariablesInfo: m.variables.length === 0,
    missingAttributes: await nt(t, m),
    unusedAttributes: await at(t, m)
  });
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(ae, { children: [
      /* @__PURE__ */ a.jsx(N, { label: "System prompt", children: /* @__PURE__ */ a.jsx(
        le,
        {
          ariaLabel: "System prompt",
          value: i.systemPrompt,
          onChange: M("systemPrompt"),
          highlightRules: A
        }
      ) }),
      /* @__PURE__ */ a.jsx(N, { label: "User prompt", children: /* @__PURE__ */ a.jsx(
        le,
        {
          ariaLabel: "User prompt",
          value: i.userPrompt || "",
          onChange: M("userPrompt"),
          highlightRules: A,
          validate: () => c.isValidUserPrompt
        }
      ) }),
      /* @__PURE__ */ a.jsx(
        ui,
        {
          agent: i,
          studioPro: t,
          componentName: J,
          updateStudioProDocument: n,
          onAgentChange: f,
          toolValidations: C
        }
      ),
      /* @__PURE__ */ a.jsx(
        ri,
        {
          agent: i,
          studioPro: t,
          componentName: J,
          updateStudioProDocument: n,
          onAgentChange: f,
          knowledgebaseToolValidations: d
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(ae, { children: /* @__PURE__ */ a.jsxs(N, { label: "General", children: [
      /* @__PURE__ */ a.jsx(
        G,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((te = i.model) == null ? void 0 : te.qualifiedName) || "",
          icon: i.model ? ut : void 0,
          buttonCaption: "Select...",
          onClick: U,
          validate: () => c.isValidModel,
          buttonCaptionSecondary: i.model ? "Show" : void 0,
          onClickSecondary: i.model ? W : void 0
        }
      ),
      /* @__PURE__ */ a.jsx(
        G,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: Se,
          buttonCaption: "Edit",
          onClick: I,
          validate: void 0
        }
      ),
      /* @__PURE__ */ a.jsx(
        ct,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: i.description,
          onChange: M("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ a.jsx(
        G,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((ie = i.entity) == null ? void 0 : ie.qualifiedName) || "",
          icon: h,
          onClick: P,
          buttonCaption: "Select...",
          validate: () => c.isValidEntity,
          buttonCaptionSecondary: i.entity ? "Show" : void 0,
          onClickSecondary: i.entity ? z : void 0
        }
      ),
      c.showCreateVariablesInfo && c.unusedAttributes.length === 0 && !k && /* @__PURE__ */ a.jsx(oe, { onClose: () => $(!0), children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
      c.missingAttributes.length > 0 && /* @__PURE__ */ a.jsxs(ft, { children: [
        /* @__PURE__ */ a.jsx("span", { children: "The following attributes cannot be found on the selected entity:" }),
        /* @__PURE__ */ a.jsx("ul", { children: c.missingAttributes.map((m) => /* @__PURE__ */ a.jsx("li", { children: m }, m)) })
      ] }),
      c.unusedAttributes.length > 0 && !v && /* @__PURE__ */ a.jsxs(oe, { onClose: () => y(!0), children: [
        c.showCreateVariablesInfo && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx("span", { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
          /* @__PURE__ */ a.jsx("br", {})
        ] }),
        /* @__PURE__ */ a.jsx("span", { children: "The following attributes are found on the selected entity, but are not used in the prompt:" }),
        /* @__PURE__ */ a.jsx("ul", { children: c.unusedAttributes.map((m) => /* @__PURE__ */ a.jsx("li", { children: m }, m)) })
      ] })
    ] }) })
  ] });
}, hi = lt(), gi = ({ studioPro: e, documentId: t }) => {
  const n = e.ui.messageBoxes, s = e.app.model.customBlobDocuments, [l, c] = u.useState(!1), [r, h] = u.useState(hi), [g, i] = u.useState(0);
  return u.useEffect(() => {
    const f = (v) => {
      v.documents.some((y) => y.documentId === t) && i((y) => y + 1);
    };
    return s.addEventListener("documentsChanged", f), () => {
      s.removeEventListener("documentsChanged", f);
    };
  }, []), u.useEffect(() => {
    s.getDocumentById(t).then(async (f) => {
      if (f && !("error" in f)) {
        const v = f.document.contents;
        c(!0), h(v);
      } else
        throw new Error((f == null ? void 0 : f.error) || "Document not found");
    }).catch(async (f) => {
      await n.show("error", "Error loading document", "Details: " + (f == null ? void 0 : f.message) || f), c(!0);
    });
  }, [g]), /* @__PURE__ */ a.jsx(Ke, { studioPro: e, children: /* @__PURE__ */ a.jsxs(Ue, { children: [
    !l && /* @__PURE__ */ a.jsx(Ze, {}),
    l && /* @__PURE__ */ a.jsx(We, { children: /* @__PURE__ */ a.jsx(
      mi,
      {
        loadedAgent: r,
        studioPro: e,
        updateStudioProDocument: dt(e, t)
      }
    ) })
  ] }) });
}, Vi = ze(gi);
export {
  Vi as component
};
//# sourceMappingURL=agentEdit.js.map
