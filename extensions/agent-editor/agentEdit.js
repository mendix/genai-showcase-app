import { $ as Q, a as Ve, b as H, c as ce, d as je, e as ue, f as Me, r as f, g as fe, h as Ee, i as Ie, j as Ae, k as Le, l as Pe, m as Be, n as Re, o as De, p as se, q as He, s as Oe, t as qe, u as Z, v as Fe, w as s, x as B, y as _, z as Ne, A as me, G as N, B as _e, C as ae, D as Ke, P as Ue, E as We } from "./Icon-DlQJfq7F.js";
import { I as K, T as he, c as ze, C as Ze } from "./TextWithIcon-sxhIisHZ.js";
import { i as Je, g as be, c as Ge, m as Xe, a as Qe, k as Ye, T as ne, b as et, d as tt, e as it, f as st, h as at, j as nt, l as J, n as ot, o as lt, u as dt } from "./index-DO-n49Lf.js";
import { n as rt, y as ct } from "./MicroflowIcon-kvKEq0tY.js";
import { m as ut } from "./modelUtils-whA8-BBg.js";
import { I as oe, W as ft } from "./Banner-BKPTdROG.js";
import { T as le, h as mt } from "./toolHandlers-D5r8oDlK.js";
import { T as G } from "./TextInputWithButton-DdFsQTz_.js";
import { h as ht } from "./knowledgebaseToolHandlers-BGK4DWaD.js";
import { r as A } from "./DesignSystemTokens-BZrmEyPo.js";
import { u as ge, T as ve, D as O } from "./Table-CfPTytSG.js";
function bt(e, t, a) {
  let { isDisabled: n = !1, isReadOnly: o = !1, value: c, name: r, form: h, children: m, "aria-label": i, "aria-labelledby": b, validationState: x = "valid", isInvalid: k, onPressStart: C, onPressEnd: $, onPressChange: y, onPress: l, onPressUp: d, onClick: g } = e, j = (I) => {
    I.stopPropagation(), t.setSelected(I.target.checked);
  }, S = m != null, M = i != null || b != null;
  !S && !M && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: R, isPressed: L } = Q({
    onPressStart: C,
    onPressEnd: $,
    onPressChange: y,
    onPress: l,
    onPressUp: d,
    onClick: g,
    isDisabled: n
  }), { pressProps: E, isPressed: P } = Q({
    onPressStart: C,
    onPressEnd: $,
    onPressChange: y,
    onPressUp: d,
    onClick: g,
    onPress(I) {
      var D;
      l == null || l(I), t.toggle(), (D = a.current) === null || D === void 0 || D.focus();
    },
    isDisabled: n || o
  }), { focusableProps: U } = Ve(e, a), W = H(R, U), z = ce(e, {
    labelable: !0
  });
  return je(a, t.defaultSelected, t.setSelected), {
    labelProps: H(E, {
      onClick: (I) => I.preventDefault()
    }),
    inputProps: H(z, {
      "aria-invalid": k || x === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": o || void 0,
      onChange: j,
      disabled: n,
      ...c == null ? {} : {
        value: c
      },
      name: r,
      form: h,
      type: "checkbox",
      ...W
    }),
    isSelected: t.isSelected,
    isPressed: L || P,
    isDisabled: n,
    isReadOnly: o,
    isInvalid: k || x === "invalid"
  };
}
function pe(e, t, a) {
  let n = ue({
    ...e,
    value: t.isSelected
  }), { isInvalid: o, validationErrors: c, validationDetails: r } = n.displayValidation, { labelProps: h, inputProps: m, isSelected: i, isPressed: b, isDisabled: x, isReadOnly: k } = bt({
    ...e,
    isInvalid: o
  }, t, a);
  Me(e, n, a);
  let { isIndeterminate: C, isRequired: $, validationBehavior: y = "aria" } = e;
  f.useEffect(() => {
    a.current && (a.current.indeterminate = !!C);
  });
  let { pressProps: l } = Q({
    isDisabled: x || k,
    onPress() {
      let { [fe]: d } = e, { commitValidation: g } = d || n;
      g();
    }
  });
  return {
    labelProps: H(h, l, f.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (d) => d.preventDefault()
    }), [])),
    inputProps: {
      ...m,
      checked: i,
      "aria-required": $ && y === "aria" || void 0,
      required: $ && y === "native"
    },
    isSelected: i,
    isPressed: b,
    isDisabled: x,
    isReadOnly: k,
    isInvalid: o,
    validationErrors: c,
    validationDetails: r
  };
}
const gt = /* @__PURE__ */ new WeakMap();
function we(e = {}) {
  let { isReadOnly: t } = e, [a, n] = Ee(e.isSelected, e.defaultSelected || !1, e.onChange), [o] = f.useState(a);
  function c(m) {
    t || n(m);
  }
  function r() {
    t || n(!a);
  }
  var h;
  return {
    isSelected: a,
    defaultSelected: (h = e.defaultSelected) !== null && h !== void 0 ? h : o,
    setSelected: c,
    toggle: r
  };
}
function vt(e, t, a) {
  const n = we({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(d) {
      d ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(d);
    }
  });
  let { name: o, form: c, descriptionId: r, errorMessageId: h, validationBehavior: m } = gt.get(t);
  var i;
  m = (i = e.validationBehavior) !== null && i !== void 0 ? i : m;
  let { realtimeValidation: b } = ue({
    ...e,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), x = f.useRef(Ie), k = () => {
    t.setInvalid(e.value, b.isInvalid ? b : x.current);
  };
  f.useEffect(k);
  let C = t.realtimeValidation.isInvalid ? t.realtimeValidation : b, $ = m === "native" ? t.displayValidation : C;
  var y;
  let l = pe({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || o,
    form: e.form || c,
    isRequired: (y = e.isRequired) !== null && y !== void 0 ? y : t.isRequired,
    validationBehavior: m,
    [fe]: {
      realtimeValidation: C,
      displayValidation: $,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(d) {
        x.current = d, k();
      }
    }
  }, n, a);
  return {
    ...l,
    inputProps: {
      ...l.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? h : null,
        r
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const pt = /* @__PURE__ */ f.createContext(null), wt = /* @__PURE__ */ f.forwardRef(function(t, a) {
  let { inputRef: n = null, ...o } = t;
  [t, a] = Ae(o, a, Le);
  let { validationBehavior: c } = Pe(Be) || {};
  var r, h;
  let m = (h = (r = t.validationBehavior) !== null && r !== void 0 ? r : c) !== null && h !== void 0 ? h : "native", i = f.useContext(pt), b = Re(f.useMemo(() => De(n, t.inputRef !== void 0 ? t.inputRef : null), [
    n,
    t.inputRef
  ])), { labelProps: x, inputProps: k, isSelected: C, isDisabled: $, isReadOnly: y, isPressed: l, isInvalid: d } = i ? vt({
    ...se(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, i, b) : pe({
    ...se(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: m
  }, we(t), b), { isFocused: g, isFocusVisible: j, focusProps: S } = He(), M = $ || y, { hoverProps: R, isHovered: L } = Oe({
    ...t,
    isDisabled: M
  }), E = qe({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: C,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: l,
      isHovered: L,
      isFocused: g,
      isFocusVisible: j,
      isDisabled: $,
      isReadOnly: y,
      isInvalid: d,
      isRequired: t.isRequired || !1
    }
  }), P = ce(t, {
    global: !0
  });
  return delete P.id, delete P.onClick, /* @__PURE__ */ Z.createElement("label", {
    ...H(P, x, R, E),
    ref: a,
    slot: t.slot || void 0,
    "data-selected": C || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": l || void 0,
    "data-hovered": L || void 0,
    "data-focused": g || void 0,
    "data-focus-visible": j || void 0,
    "data-disabled": $ || void 0,
    "data-readonly": y || void 0,
    "data-invalid": d || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Z.createElement(Fe, {
    elementType: "span"
  }, /* @__PURE__ */ Z.createElement("input", {
    ...H(k, S),
    ref: b
  })), E.children);
}), xt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", yt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var kt = Object.defineProperty, Ct = (e, t) => kt(e, "name", { value: t, configurable: !0 });
const $t = Ct((e) => s.jsx(B, { light: yt, dark: xt, ...e }), "EntityIcon"), Tt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", St = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Vt = Object.defineProperty, jt = (e, t) => Vt(e, "name", { value: t, configurable: !0 });
const Mt = jt((e) => s.jsx(B, { light: St, dark: Tt, ...e }), "EntityNonPersistableIcon"), Et = async (e, t, a, n, o, c) => {
  const r = { ...n, [a]: c };
  return (a === "userPrompt" || a === "systemPrompt") && (r.variables = await Ge(e, t, r)), o(r), r;
}, It = async (e, t, a) => {
  const n = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let o;
  if (n.status === "ok" && (o = {
    ...t,
    entity: {
      documentId: n.selected.id,
      qualifiedName: n.selected.module + "." + n.selected.name
    }
  }), n.status === "none" && (o = { ...t, entity: void 0 }), o) {
    const c = await Qe(e, t.variables, o);
    o = { ...o, variables: c }, a(o);
  }
  return o;
}, At = async (e, t, a) => {
  const n = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Xe }
  });
  let o;
  return n.status === "ok" && (o = {
    ...t,
    model: {
      documentId: n.selected.id,
      qualifiedName: n.selected.module + "." + n.selected.name
    }
  }), n.status === "none" && (o = { ...t, model: void 0 }), o && a(o), o;
}, X = async (e, t, a) => {
  switch (e) {
    case "model": {
      if (!a.model)
        return "Please select a model.";
      const n = await be(t, a.model.documentId);
      if (!n)
        return "This document is invalid. Make sure to select a document of type Model.";
      if (n.excluded)
        return "The selected model is currently excluded from the project. Please include it to use it as agent's model.";
      break;
    }
    case "entity": {
      if (!a.entity) {
        if (a.variables.length > 0)
          return "Please select an entity.";
        break;
      }
      const [n, o] = a.entity.qualifiedName.split(".");
      if (!n || !o)
        return "The selected entity is not valid.";
      if (!await Je(t, a))
        return "Entity no longer exists.";
      break;
    }
    case "userPrompt":
      if (!a.userPrompt)
        return "Please provide a user prompt.";
      break;
    default:
      return !0;
  }
  return !0;
}, Lt = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await be(e, t.documentId))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, Pt = async (e, t, a, n) => {
  const o = await e.ui.dialogs.showModal(
    {
      title: "Model settings",
      contentSize: { height: 400, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "modelSettingsEdit",
      queryParams: {
        agent: encodeURIComponent(JSON.stringify(a))
      }
    }
  );
  let c;
  return o && (c = o), c && n(c), c;
}, de = async (e, t, a, n, o) => {
  const c = o && a.tools ? a.tools.find((h) => h.id === o) : void 0, r = await e.ui.dialogs.showModal(
    {
      title: c ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: c ? encodeURIComponent(JSON.stringify(c)) : "",
        agent: a ? encodeURIComponent(JSON.stringify(a)) : ""
      }
    }
  );
  if (r !== null) {
    const h = r;
    let m;
    o && a.tools ? m = a.tools.map((b) => b.id === o ? h : b) : m = [...a.tools || [], h], m.sort((b, x) => b.name.localeCompare(x.name));
    const i = { ...a, tools: m };
    return n(i), i;
  } else
    return null;
}, Bt = async (e, t, a, n) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const c = t.tools.filter((h) => h.id !== n), r = { ...t, tools: c };
  return a(r), r;
}, re = async (e, t, a, n, o) => {
  const c = a.knowledgebaseTools || [], r = o ? c.find((m) => m.id === o) : void 0, h = await e.ui.dialogs.showModal(
    {
      title: r ? "Edit knowledge base" : "Add knowledge base",
      contentSize: { height: 505, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "knowledgebaseToolEdit",
      queryParams: {
        tool: r ? encodeURIComponent(JSON.stringify(r)) : "",
        agent: a ? encodeURIComponent(JSON.stringify(a)) : ""
      }
    }
  );
  if (h !== null) {
    const m = h;
    let i;
    o ? i = c.map((x) => x.id === o ? m : x) : i = [...c, m], i.sort((x, k) => x.name.localeCompare(k.name));
    const b = { ...a, knowledgebaseTools: i };
    return n(b), b;
  }
  return null;
}, Rt = async (e, t, a, n) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this knowledge base?"
  }) === !1)
    return;
  const r = (t.knowledgebaseTools || []).filter((m) => m.id !== n), h = { ...t, knowledgebaseTools: r };
  return a(h), h;
}, Dt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ht = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ot = Object.defineProperty, qt = (e, t) => Ot(e, "name", { value: t, configurable: !0 });
const xe = qt((e) => s.jsx(B, { light: Ht, dark: Dt, ...e }), "AppSelectorNoVersionIcon"), Ft = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Nt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var _t = Object.defineProperty, Kt = (e, t) => _t(e, "name", { value: t, configurable: !0 });
const ye = Kt((e) => s.jsx(B, { light: Nt, dark: Ft, ...e }), "EditIcon"), Ut = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Wt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var zt = Object.defineProperty, Zt = (e, t) => zt(e, "name", { value: t, configurable: !0 });
const ke = Zt((e) => s.jsx(B, { light: Wt, dark: Ut, ...e }), "PageIcon"), Jt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Gt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Xt = Object.defineProperty, Qt = (e, t) => Xt(e, "name", { value: t, configurable: !0 });
const Ce = Qt((e) => s.jsx(B, { light: Gt, dark: Jt, ...e }), "SyncIcon"), Yt = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ei = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var ti = Object.defineProperty, ii = (e, t) => ti(e, "name", { value: t, configurable: !0 });
const si = ii((e) => s.jsx(B, { light: ei, dark: Yt, ...e }), "CheckCheckboxIcon");
var ai = Object.defineProperty, ni = (e, t) => ai(e, "name", { value: t, configurable: !0 });
const $e = ni(({ children: e, ...t }) => s.jsx(li, { ...t, children: ({ isIndeterminate: a, isSelected: n }) => s.jsxs(s.Fragment, { children: [s.jsxs(Te, { $isSelected: n, $isIndeterminate: a, children: [a && s.jsx(oi, {}), n && !a && s.jsx(si, {})] }), e] }) }), "Checkbox"), Te = _.div`
    width: ${A.size12};
    height: ${A.size12};
    margin: ${A.spacing2};
    border-radius: ${A.borderRadiusXs};
    border: ${A.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: a }) => t && !a ? e.colorsBorderSelectorSelected : "transparent"};
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
    height: ${A.size16};
    gap: ${A.spacing4};
    line-height: ${A.lineHeightMd};

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
  componentName: a,
  updateStudioProDocument: n,
  onAgentChange: o,
  knowledgebaseToolValidations: c
}) => {
  const [r, h] = f.useState([]), m = f.useMemo(() => (e.knowledgebaseTools || []).map((d, g) => ({
    id: d.id ?? String(g),
    enabled: d.enabled,
    name: d.name,
    description: d.description || "",
    tool: d.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: i, sortProps: b } = ge(m), x = f.useCallback(
    (l) => {
      const d = c.get(l);
      return d === "invalid" ? /* @__PURE__ */ s.jsx(K, { icon: /* @__PURE__ */ s.jsx(me, { title: "Tool invalid" }) }) : d === "syncing" ? /* @__PURE__ */ s.jsx(K, { icon: /* @__PURE__ */ s.jsx(Ce, { title: "Validating..." }) }) : null;
    },
    [c]
  ), k = f.useCallback(async () => {
    const l = await re(
      t,
      a,
      e,
      n
    );
    l && o(l);
  }, [t, a, e, n, o]), C = f.useCallback(async () => {
    const l = e.knowledgebaseTools || [];
    if (r.length === 0 || l.length === 0)
      return;
    const d = r[0], g = await re(
      t,
      a,
      e,
      n,
      d
    );
    g && o(g);
  }, [t, a, e, n, o, r]), $ = f.useCallback(async () => {
    const l = e.knowledgebaseTools || [];
    if (r.length === 0 || l.length === 0)
      return;
    const d = r[0], g = await Rt(
      t,
      e,
      n,
      d
    );
    g && o(g);
  }, [e, n, o, r]), y = f.useCallback(
    async (l, d) => {
      const g = e.knowledgebaseTools || [];
      if (g.length === 0)
        return;
      const j = g.map(
        (M) => (M.id ?? "") === l ? { ...M, enabled: d } : M
      ), S = { ...e, knowledgebaseTools: j };
      n(S), o(S);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, n, o]
  );
  return /* @__PURE__ */ s.jsx(N, { label: "Knowledge bases", children: /* @__PURE__ */ s.jsx(
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
      data: i.map((l) => [
        x(l.id),
        /* @__PURE__ */ s.jsx(
          di,
          {
            "aria-label": "Enabled",
            isSelected: l.enabled,
            onChange: (d) => y(l.id, d)
          }
        ),
        l.name,
        l.description,
        /* @__PURE__ */ s.jsx(he, { icon: Ye, text: l.tool })
      ]),
      rowKey: (l, d) => {
        var g;
        return ((g = i[d]) == null ? void 0 : g.id) ?? String(d);
      },
      rowOpacity: (l) => {
        var d;
        return (d = i[l]) != null && d.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: r,
      onDoubleClick: C,
      onSelectionChange: h,
      ...b,
      toolbarLeft: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          O,
          {
            icon: /* @__PURE__ */ s.jsx(ke, {}),
            label: "New",
            "aria-label": "Add new knowledge base tool",
            tooltip: "Add new knowledge base tool",
            onPress: k
          }
        ),
        /* @__PURE__ */ s.jsx(
          O,
          {
            icon: /* @__PURE__ */ s.jsx(ye, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base tool",
            onPress: C,
            tooltip: "Edit selected knowledge base tool",
            isDisabled: r.length === 0
          }
        ),
        /* @__PURE__ */ s.jsx(
          O,
          {
            icon: /* @__PURE__ */ s.jsx(xe, {}),
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
  componentName: a,
  updateStudioProDocument: n,
  onAgentChange: o,
  toolValidations: c
}) => {
  const [r, h] = f.useState([]), m = f.useMemo(() => e.tools ? e.tools.map((l, d) => ({
    id: l.id ?? String(d),
    enabled: l.enabled,
    name: l.toolType === ne.Microflow ? l.name : l.document.qualifiedName.split(".")[1],
    description: l.description || "",
    tooltype: l.toolType,
    tool: l.document.qualifiedName || ""
  })) : [], [e.tools]), { items: i, sortProps: b } = ge(m), x = f.useCallback(
    (l) => {
      const d = c.get(l);
      return d === "invalid" ? /* @__PURE__ */ s.jsx(K, { icon: /* @__PURE__ */ s.jsx(me, { title: "Tool invalid" }) }) : d === "syncing" ? /* @__PURE__ */ s.jsx(K, { icon: /* @__PURE__ */ s.jsx(Ce, { title: "Validating..." }) }) : null;
    },
    [c]
  ), k = f.useCallback(async () => {
    const l = await de(t, a, e, n);
    l && o(l);
  }, [t, a, e, n, o]), C = f.useCallback(async () => {
    if (r.length === 0 || !e.tools)
      return;
    const l = r[0], d = await de(
      t,
      a,
      e,
      n,
      l
    );
    d && o(d);
  }, [t, a, e, n, o, r]), $ = f.useCallback(async () => {
    if (r.length === 0 || !e.tools)
      return;
    const l = r[0], d = await Bt(t, e, n, l);
    d && o(d);
  }, [e, n, o, r]), y = f.useCallback(
    async (l, d) => {
      if (!e.tools)
        return;
      const g = e.tools.map(
        (S) => (S.id ?? "") === l ? { ...S, enabled: d } : S
      ), j = { ...e, tools: g };
      n(j), o(j);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, n, o]
  );
  return /* @__PURE__ */ s.jsx(N, { label: "Tools", children: /* @__PURE__ */ s.jsx(
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
      data: i.map((l) => [
        x(l.id),
        /* @__PURE__ */ s.jsx(
          ci,
          {
            "aria-label": "Enabled",
            isSelected: l.enabled,
            onChange: (d) => y(l.id, d)
          }
        ),
        l.name,
        l.description,
        /* @__PURE__ */ s.jsx(
          he,
          {
            icon: l.tooltype === ne.Microflow ? /* @__PURE__ */ s.jsx(rt, {}) : et,
            text: l.tool
          }
        )
      ]),
      rowKey: (l, d) => {
        var g;
        return ((g = i[d]) == null ? void 0 : g.id) ?? String(d);
      },
      rowOpacity: (l) => {
        var d;
        return (d = i[l]) != null && d.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: r,
      onDoubleClick: C,
      onSelectionChange: h,
      ...b,
      toolbarLeft: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
        /* @__PURE__ */ s.jsx(
          O,
          {
            icon: /* @__PURE__ */ s.jsx(ke, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: k
          }
        ),
        /* @__PURE__ */ s.jsx(
          O,
          {
            icon: /* @__PURE__ */ s.jsx(ye, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: C,
            tooltip: "Edit selected tool",
            isDisabled: r.length === 0
          }
        ),
        /* @__PURE__ */ s.jsx(
          O,
          {
            icon: /* @__PURE__ */ s.jsx(xe, {}),
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
}, mi = ({ loadedAgent: e, studioPro: t, updateStudioProDocument: a }) => {
  var ee, te, ie;
  const [n, o] = f.useState(!1), [c, r] = f.useState(fi), [h, m] = f.useState(void 0), [i, b] = f.useState(e), [x, k] = f.useState(!1), [C, $] = f.useState(!1), [y, l] = f.useState(/* @__PURE__ */ new Map()), [d, g] = f.useState(
    /* @__PURE__ */ new Map()
  ), j = _e(), S = f.useRef(null);
  f.useEffect(() => {
    var u;
    Y(e).then((w) => r(w)), D(t, (u = e.entity) == null ? void 0 : u.qualifiedName).then((w) => m(w)), b(e), o(!0);
  }, []), f.useEffect(() => () => {
    S.current && clearTimeout(S.current);
  }, []), f.useEffect(() => {
    n && (async () => {
      var v;
      const w = await D(t, (v = i.entity) == null ? void 0 : v.qualifiedName);
      m(w);
    })();
  }, [t, (ee = i.entity) == null ? void 0 : ee.qualifiedName]), f.useEffect(() => {
    n && (async () => {
      const w = [];
      if (i.tools && i.tools.length > 0) {
        const v = /* @__PURE__ */ new Map();
        i.tools.forEach((p) => {
          v.set(p.id, "syncing");
        }), l(v), w.push(
          Promise.all(
            i.tools.map(async (p) => {
              const V = await mt("document", p, i, t);
              return {
                id: p.id,
                state: V === !0 ? "valid" : "invalid"
              };
            })
          ).then((p) => {
            const V = new Map(p.map((T) => [T.id, T.state]));
            l(V);
          })
        );
      }
      if (i.knowledgebaseTools && i.knowledgebaseTools.length > 0) {
        const v = /* @__PURE__ */ new Map();
        i.knowledgebaseTools.forEach((p) => {
          v.set(p.id, "syncing");
        }), g(v), w.push(
          Promise.all(
            i.knowledgebaseTools.map(async (p) => {
              const V = await ht(
                "document",
                p,
                i,
                t
              );
              return {
                id: p.id,
                state: V === !0 ? "valid" : "invalid"
              };
            })
          ).then((p) => {
            const V = new Map(p.map((T) => [T.id, T.state]));
            g(V);
          })
        );
      }
      await Promise.all(w);
    })();
  }, [n]);
  const M = f.useRef(/* @__PURE__ */ new Map()), R = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    if (n && i.tools) {
      const u = M.current, w = /* @__PURE__ */ new Map();
      i.tools.forEach((v) => {
        w.set(v.id, v.document.qualifiedName);
      }), l((v) => {
        var V;
        const p = new Map(v);
        return (V = i.tools) == null || V.forEach((T) => {
          if (!v.has(T.id))
            p.set(T.id, "valid");
          else {
            const q = u.get(T.id), F = w.get(T.id);
            q !== void 0 && F !== void 0 && q !== F && p.set(T.id, "valid");
          }
        }), p;
      }), M.current = w;
    }
  }, [i.tools, n]), f.useEffect(() => {
    if (n && i.knowledgebaseTools) {
      const u = R.current, w = /* @__PURE__ */ new Map();
      i.knowledgebaseTools.forEach((v) => {
        w.set(v.id, v.document.qualifiedName);
      }), g((v) => {
        var V;
        const p = new Map(v);
        return (V = i.knowledgebaseTools) == null || V.forEach((T) => {
          if (!v.has(T.id))
            p.set(T.id, "valid");
          else {
            const q = u.get(T.id), F = w.get(T.id);
            q !== void 0 && F !== void 0 && q !== F && p.set(T.id, "valid");
          }
        }), p;
      }), R.current = w;
    }
  }, [i.knowledgebaseTools, n]), f.useEffect(() => {
    n && (async () => {
      const w = await Y(i);
      r(w);
    })();
  }, [t, i]);
  const L = f.useMemo(() => tt(i.variables), [i.variables]), E = (u) => (w) => {
    const v = { ...i, [u]: w };
    b(v), S.current && clearTimeout(S.current), S.current = setTimeout(async () => {
      const p = await Et(
        t,
        j,
        u,
        v,
        a,
        w
      );
      b(p);
    }, 300);
  }, P = async () => {
    const u = await It(t, i, a);
    u && b(u);
  }, U = async () => {
    const u = await At(t, i, a);
    u && b(u);
  }, W = async () => {
    i.model && Lt(t, i.model);
  }, z = async () => {
    i.entity && ot(t, i.entity.qualifiedName);
  }, I = async () => {
    const u = await Pt(t, J, i, a);
    u && b(u);
  }, D = async (u, w) => {
    if (!w)
      return;
    const v = await it(u, w);
    if (!v)
      return;
    const p = await st(v, u);
    if (p !== void 0)
      return p ? /* @__PURE__ */ s.jsx($t, {}) : /* @__PURE__ */ s.jsx(Mt, {});
  }, Se = f.useMemo(() => {
    let u = "";
    return i.maxTokens !== void 0 && (u += "Max tokens: " + i.maxTokens.toLocaleString(navigator.language)), i.temperature !== void 0 && (u.length > 0 && (u += ", "), u += "Temperature: " + i.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), i.topP !== void 0 && (u.length > 0 && (u += ", "), u += "Top P: " + i.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), u;
  }, [i.temperature, i.maxTokens, i.topP]), Y = async (u) => ({
    isValidModel: await X("model", t, u),
    isValidEntity: await X("entity", t, u),
    isValidUserPrompt: await X("userPrompt", t, u),
    showCreateVariablesInfo: u.variables.length === 0,
    missingAttributes: await nt(t, u),
    unusedAttributes: await at(t, u)
  });
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(ae, { children: [
      /* @__PURE__ */ s.jsx(N, { label: "System prompt", children: /* @__PURE__ */ s.jsx(
        le,
        {
          ariaLabel: "System prompt",
          value: i.systemPrompt,
          onChange: E("systemPrompt"),
          highlightRules: L
        }
      ) }),
      /* @__PURE__ */ s.jsx(N, { label: "User prompt", children: /* @__PURE__ */ s.jsx(
        le,
        {
          ariaLabel: "User prompt",
          value: i.userPrompt || "",
          onChange: E("userPrompt"),
          highlightRules: L,
          validate: () => c.isValidUserPrompt
        }
      ) }),
      /* @__PURE__ */ s.jsx(
        ui,
        {
          agent: i,
          studioPro: t,
          componentName: J,
          updateStudioProDocument: a,
          onAgentChange: b,
          toolValidations: y
        }
      ),
      /* @__PURE__ */ s.jsx(
        ri,
        {
          agent: i,
          studioPro: t,
          componentName: J,
          updateStudioProDocument: a,
          onAgentChange: b,
          knowledgebaseToolValidations: d
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(ae, { children: /* @__PURE__ */ s.jsxs(N, { label: "General", children: [
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
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
      /* @__PURE__ */ s.jsx(
        ct,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: i.description,
          onChange: E("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ s.jsx(
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
      c.showCreateVariablesInfo && c.unusedAttributes.length === 0 && !C && /* @__PURE__ */ s.jsx(oe, { onClose: () => $(!0), children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
      c.missingAttributes.length > 0 && /* @__PURE__ */ s.jsxs(ft, { children: [
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes cannot be found on the selected entity:" }),
        /* @__PURE__ */ s.jsx("ul", { children: c.missingAttributes.map((u) => /* @__PURE__ */ s.jsx("li", { children: u }, u)) })
      ] }),
      c.unusedAttributes.length > 0 && !x && /* @__PURE__ */ s.jsxs(oe, { onClose: () => k(!0), children: [
        c.showCreateVariablesInfo && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("span", { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
          /* @__PURE__ */ s.jsx("br", {})
        ] }),
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes are found on the selected entity, but are not used in the prompt:" }),
        /* @__PURE__ */ s.jsx("ul", { children: c.unusedAttributes.map((u) => /* @__PURE__ */ s.jsx("li", { children: u }, u)) })
      ] })
    ] }) })
  ] });
}, hi = lt(), bi = ({ studioPro: e, documentId: t }) => {
  const a = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [o, c] = f.useState(!1), [r, h] = f.useState(hi);
  return f.useEffect(() => {
    n.getDocumentById(t).then(async (m) => {
      if (m && !("error" in m)) {
        const i = m.document.contents;
        c(!0), h(i);
      } else
        throw new Error((m == null ? void 0 : m.error) || "Document not found");
    }).catch(async (m) => {
      await a.show("error", "Error loading document", "Details: " + (m == null ? void 0 : m.message) || m), c(!0);
    });
  }, []), /* @__PURE__ */ s.jsx(Ke, { studioPro: e, children: /* @__PURE__ */ s.jsxs(Ue, { children: [
    !o && /* @__PURE__ */ s.jsx(Ze, {}),
    o && /* @__PURE__ */ s.jsx(We, { children: /* @__PURE__ */ s.jsx(
      mi,
      {
        loadedAgent: r,
        studioPro: e,
        updateStudioProDocument: dt(e, t)
      }
    ) })
  ] }) });
}, Vi = ze(bi);
export {
  Vi as component
};
//# sourceMappingURL=agentEdit.js.map
