import { $ as G, a as fe, b as R, c as oe, d as he, e as re, f as ve, r as m, g as de, h as ge, i as pe, j as be, k as xe, l as we, m as ye, n as Ce, o as $e, p as Y, q as ke, s as Se, t as Ve, u as U, v as je, w as n, x as L, y as F, z as Me, A as Pe, G as q, B as Ie, C as ee, D as Ee, P as Ae, E as Le } from "./Icon-DjcrVRZV.js";
import { c as Te, C as Be } from "./CenteredLoadingSpinner-C-2fDE-r.js";
import { i as De, g as Re, m as K, c as He, a as Oe, T as te, b as qe, d as Fe, e as Ne, f as _e, h as Ue, j as We, k as ie, l as Ze, n as ze, u as Ge } from "./index-Chq3mA2y.js";
import { n as Ke, y as Je } from "./MicroflowIcon-DiZtEKnf.js";
import { m as Xe } from "./modelUtils-Bx_f070p.js";
import { I as ae, W as Qe } from "./Banner-vrS186Bj.js";
import { T as se, h as Ye } from "./toolHandlers-n0RnLoyo.js";
import { T as W } from "./TextInputWithButton-DS64HwKN.js";
import { u as et, T as tt, D as Z } from "./Table-CAHeG_cf.js";
import { I as ne, T as it } from "./TextWithIcon-BR0LcMCK.js";
import { r as P } from "./DesignSystemTokens-CB_9gr2a.js";
function at(e, t, i) {
  let { isDisabled: a = !1, isReadOnly: l = !1, value: d, name: u, form: h, children: f, "aria-label": s, "aria-labelledby": v, validationState: x = "valid", isInvalid: $, onPressStart: y, onPressEnd: C, onPressChange: b, onPress: o, onPressUp: c, onClick: p } = e, k = (M) => {
    M.stopPropagation(), t.setSelected(M.target.checked);
  }, S = f != null, I = s != null || v != null;
  !S && !I && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: H, isPressed: T } = G({
    onPressStart: y,
    onPressEnd: C,
    onPressChange: b,
    onPress: o,
    onPressUp: c,
    onClick: p,
    isDisabled: a
  }), { pressProps: B, isPressed: E } = G({
    onPressStart: y,
    onPressEnd: C,
    onPressChange: b,
    onPressUp: c,
    onClick: p,
    onPress(M) {
      var D;
      o == null || o(M), t.toggle(), (D = i.current) === null || D === void 0 || D.focus();
    },
    isDisabled: a || l
  }), { focusableProps: N } = fe(e, i), O = R(H, N), _ = oe(e, {
    labelable: !0
  });
  return he(i, t.defaultSelected, t.setSelected), {
    labelProps: R(B, {
      onClick: (M) => M.preventDefault()
    }),
    inputProps: R(_, {
      "aria-invalid": $ || x === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": l || void 0,
      onChange: k,
      disabled: a,
      ...d == null ? {} : {
        value: d
      },
      name: u,
      form: h,
      type: "checkbox",
      ...O
    }),
    isSelected: t.isSelected,
    isPressed: T || E,
    isDisabled: a,
    isReadOnly: l,
    isInvalid: $ || x === "invalid"
  };
}
function ce(e, t, i) {
  let a = re({
    ...e,
    value: t.isSelected
  }), { isInvalid: l, validationErrors: d, validationDetails: u } = a.displayValidation, { labelProps: h, inputProps: f, isSelected: s, isPressed: v, isDisabled: x, isReadOnly: $ } = at({
    ...e,
    isInvalid: l
  }, t, i);
  ve(e, a, i);
  let { isIndeterminate: y, isRequired: C, validationBehavior: b = "aria" } = e;
  m.useEffect(() => {
    i.current && (i.current.indeterminate = !!y);
  });
  let { pressProps: o } = G({
    isDisabled: x || $,
    onPress() {
      let { [de]: c } = e, { commitValidation: p } = c || a;
      p();
    }
  });
  return {
    labelProps: R(h, o, m.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (c) => c.preventDefault()
    }), [])),
    inputProps: {
      ...f,
      checked: s,
      "aria-required": C && b === "aria" || void 0,
      required: C && b === "native"
    },
    isSelected: s,
    isPressed: v,
    isDisabled: x,
    isReadOnly: $,
    isInvalid: l,
    validationErrors: d,
    validationDetails: u
  };
}
const st = /* @__PURE__ */ new WeakMap();
function ue(e = {}) {
  let { isReadOnly: t } = e, [i, a] = ge(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = m.useState(i);
  function d(f) {
    t || a(f);
  }
  function u() {
    t || a(!i);
  }
  var h;
  return {
    isSelected: i,
    defaultSelected: (h = e.defaultSelected) !== null && h !== void 0 ? h : l,
    setSelected: d,
    toggle: u
  };
}
function nt(e, t, i) {
  const a = ue({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(c) {
      c ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(c);
    }
  });
  let { name: l, form: d, descriptionId: u, errorMessageId: h, validationBehavior: f } = st.get(t);
  var s;
  f = (s = e.validationBehavior) !== null && s !== void 0 ? s : f;
  let { realtimeValidation: v } = re({
    ...e,
    value: a.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), x = m.useRef(pe), $ = () => {
    t.setInvalid(e.value, v.isInvalid ? v : x.current);
  };
  m.useEffect($);
  let y = t.realtimeValidation.isInvalid ? t.realtimeValidation : v, C = f === "native" ? t.displayValidation : y;
  var b;
  let o = ce({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || l,
    form: e.form || d,
    isRequired: (b = e.isRequired) !== null && b !== void 0 ? b : t.isRequired,
    validationBehavior: f,
    [de]: {
      realtimeValidation: y,
      displayValidation: C,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(c) {
        x.current = c, $();
      }
    }
  }, a, i);
  return {
    ...o,
    inputProps: {
      ...o.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? h : null,
        u
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const lt = /* @__PURE__ */ m.createContext(null), ot = /* @__PURE__ */ m.forwardRef(function(t, i) {
  let { inputRef: a = null, ...l } = t;
  [t, i] = be(l, i, xe);
  let { validationBehavior: d } = we(ye) || {};
  var u, h;
  let f = (h = (u = t.validationBehavior) !== null && u !== void 0 ? u : d) !== null && h !== void 0 ? h : "native", s = m.useContext(lt), v = Ce(m.useMemo(() => $e(a, t.inputRef !== void 0 ? t.inputRef : null), [
    a,
    t.inputRef
  ])), { labelProps: x, inputProps: $, isSelected: y, isDisabled: C, isReadOnly: b, isPressed: o, isInvalid: c } = s ? nt({
    ...Y(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, v) : ce({
    ...Y(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: f
  }, ue(t), v), { isFocused: p, isFocusVisible: k, focusProps: S } = ke(), I = C || b, { hoverProps: H, isHovered: T } = Se({
    ...t,
    isDisabled: I
  }), B = Ve({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: y,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: o,
      isHovered: T,
      isFocused: p,
      isFocusVisible: k,
      isDisabled: C,
      isReadOnly: b,
      isInvalid: c,
      isRequired: t.isRequired || !1
    }
  }), E = oe(t, {
    global: !0
  });
  return delete E.id, delete E.onClick, /* @__PURE__ */ U.createElement("label", {
    ...R(E, x, H, B),
    ref: i,
    slot: t.slot || void 0,
    "data-selected": y || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": o || void 0,
    "data-hovered": T || void 0,
    "data-focused": p || void 0,
    "data-focus-visible": k || void 0,
    "data-disabled": C || void 0,
    "data-readonly": b || void 0,
    "data-invalid": c || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ U.createElement(je, {
    elementType: "span"
  }, /* @__PURE__ */ U.createElement("input", {
    ...R($, S),
    ref: v
  })), B.children);
}), rt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", dt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var ct = Object.defineProperty, ut = (e, t) => ct(e, "name", { value: t, configurable: !0 });
const mt = ut((e) => n.jsx(L, { light: dt, dark: rt, ...e }), "EntityIcon"), ft = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", ht = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var vt = Object.defineProperty, gt = (e, t) => vt(e, "name", { value: t, configurable: !0 });
const pt = gt((e) => n.jsx(L, { light: ht, dark: ft, ...e }), "EntityNonPersistableIcon"), bt = async (e, t, i, a, l, d) => {
  const u = { ...a, [i]: d };
  return (i === "userPrompt" || i === "systemPrompt") && (u.variables = await He(e, t, u)), l(u), u;
}, xt = async (e, t, i) => {
  const a = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let l;
  if (a.status === "ok" && (l = {
    ...t,
    entity: {
      documentId: a.selected.id,
      qualifiedName: a.selected.module + "." + a.selected.name
    }
  }), a.status === "none" && (l = { ...t, entity: void 0 }), l) {
    const d = await Oe(e, t.variables, l);
    l = { ...l, variables: d }, i(l);
  }
  return l;
}, wt = async (e, t, i) => {
  const a = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: K }
  });
  let l;
  return a.status === "ok" && (l = {
    ...t,
    model: {
      documentId: a.selected.id,
      qualifiedName: a.selected.module + "." + a.selected.name
    }
  }), a.status === "none" && (l = { ...t, model: void 0 }), l && i(l), l;
}, z = async (e, t, i) => {
  switch (e) {
    case "model": {
      if (!i.model)
        return "Please select a model.";
      if (!await Re(
        t,
        i.model.qualifiedName,
        K
      ))
        return "This document is invalid. Make sure to select a document of type Model.";
      break;
    }
    case "entity": {
      if (!i.entity) {
        if (i.variables.length > 0)
          return "Please select an entity.";
        break;
      }
      const [a, l] = i.entity.qualifiedName.split(".");
      if (i.entity && (!a || !l))
        return "The selected entity is not valid.";
      if (!await De(t, i))
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
}, yt = async (e, t) => {
  if (!t)
    return;
  const i = (await e.app.model.customBlobDocuments.getDocumentsOfType(K)).find(
    (a) => a.moduleName + "." + a.name === t
  );
  if (!i)
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(i.id);
}, Ct = async (e, t, i, a) => {
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
  return l && (d = l), d && a(d), d;
}, le = async (e, t, i, a, l) => {
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
    l && i.tools ? f = i.tools.map((v) => v.id === l ? h : v) : f = [...i.tools || [], h], f.sort((v, x) => v.name.localeCompare(x.name));
    const s = { ...i, tools: f };
    return a(s), s;
  } else
    return null;
}, $t = async (e, t, i, a) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const d = t.tools.filter((h) => h.id !== a), u = { ...t, tools: d };
  return i(u), u;
}, kt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", St = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Vt = Object.defineProperty, jt = (e, t) => Vt(e, "name", { value: t, configurable: !0 });
const Mt = jt((e) => n.jsx(L, { light: St, dark: kt, ...e }), "AppSelectorNoVersionIcon"), Pt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", It = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Et = Object.defineProperty, At = (e, t) => Et(e, "name", { value: t, configurable: !0 });
const Lt = At((e) => n.jsx(L, { light: It, dark: Pt, ...e }), "EditIcon"), Tt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Bt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Dt = Object.defineProperty, Rt = (e, t) => Dt(e, "name", { value: t, configurable: !0 });
const Ht = Rt((e) => n.jsx(L, { light: Bt, dark: Tt, ...e }), "PageIcon"), Ot = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", qt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Ft = Object.defineProperty, Nt = (e, t) => Ft(e, "name", { value: t, configurable: !0 });
const _t = Nt((e) => n.jsx(L, { light: qt, dark: Ot, ...e }), "SyncIcon"), Ut = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Wt = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Zt = Object.defineProperty, zt = (e, t) => Zt(e, "name", { value: t, configurable: !0 });
const Gt = zt((e) => n.jsx(L, { light: Wt, dark: Ut, ...e }), "CheckCheckboxIcon");
var Kt = Object.defineProperty, Jt = (e, t) => Kt(e, "name", { value: t, configurable: !0 });
const Xt = Jt(({ children: e, ...t }) => n.jsx(Yt, { ...t, children: ({ isIndeterminate: i, isSelected: a }) => n.jsxs(n.Fragment, { children: [n.jsxs(me, { $isSelected: a, $isIndeterminate: i, children: [i && n.jsx(Qt, {}), a && !i && n.jsx(Gt, {})] }), e] }) }), "Checkbox"), me = F.div`
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
`, Qt = F.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, Yt = F(ot)`
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
        ${me} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${Me}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, ei = F(Xt)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, ti = ({
  agent: e,
  studioPro: t,
  componentName: i,
  updateStudioProDocument: a,
  onAgentChange: l,
  toolValidations: d
}) => {
  const [u, h] = m.useState([]), f = m.useMemo(() => e.tools ? e.tools.map((o, c) => ({
    id: o.id ?? String(c),
    enabled: o.enabled,
    name: o.toolType === te.Microflow ? o.name : o.document.qualifiedName.split(".")[1],
    description: o.description || "",
    tooltype: o.toolType,
    tool: o.document.qualifiedName || ""
  })) : [], [e.tools]), { items: s, sortProps: v } = et(f), x = m.useCallback(
    (o) => {
      const c = d.get(o);
      return c === "invalid" ? /* @__PURE__ */ n.jsx(ne, { icon: /* @__PURE__ */ n.jsx(Pe, { title: "Tool invalid" }) }) : c === "syncing" ? /* @__PURE__ */ n.jsx(ne, { icon: /* @__PURE__ */ n.jsx(_t, { title: "Validating..." }) }) : null;
    },
    [d]
  ), $ = m.useCallback(async () => {
    const o = await le(t, i, e, a);
    o && l(o);
  }, [t, i, e, a, l]), y = m.useCallback(async () => {
    if (u.length === 0 || !e.tools)
      return;
    const o = u[0], c = await le(
      t,
      i,
      e,
      a,
      o
    );
    c && l(c);
  }, [t, i, e, a, l, u]), C = m.useCallback(async () => {
    if (u.length === 0 || !e.tools)
      return;
    const o = u[0], c = await $t(t, e, a, o);
    c && l(c);
  }, [e, a, l, u]), b = m.useCallback(
    async (o, c) => {
      if (!e.tools)
        return;
      const p = e.tools.map(
        (S) => (S.id ?? "") === o ? { ...S, enabled: c } : S
      ), k = { ...e, tools: p };
      a(k), l(k);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, a, l]
  );
  return /* @__PURE__ */ n.jsx(q, { label: "Tools", children: /* @__PURE__ */ n.jsx(
    tt,
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
      data: s.map((o) => [
        x(o.id),
        /* @__PURE__ */ n.jsx(
          ei,
          {
            "aria-label": "Enabled",
            isSelected: o.enabled,
            onChange: (c) => b(o.id, c)
          }
        ),
        o.name,
        o.description,
        /* @__PURE__ */ n.jsx(
          it,
          {
            icon: o.tooltype === te.Microflow ? /* @__PURE__ */ n.jsx(Ke, {}) : qe,
            text: o.tool
          }
        )
      ]),
      rowKey: (o, c) => {
        var p;
        return ((p = s[c]) == null ? void 0 : p.id) ?? String(c);
      },
      rowOpacity: (o) => {
        var c;
        return (c = s[o]) != null && c.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: u,
      onDoubleClick: y,
      onSelectionChange: h,
      ...v,
      toolbarLeft: /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(
          Z,
          {
            icon: /* @__PURE__ */ n.jsx(Ht, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: $
          }
        ),
        /* @__PURE__ */ n.jsx(
          Z,
          {
            icon: /* @__PURE__ */ n.jsx(Lt, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: y,
            tooltip: "Edit selected tool",
            isDisabled: u.length === 0
          }
        ),
        /* @__PURE__ */ n.jsx(
          Z,
          {
            icon: /* @__PURE__ */ n.jsx(Mt, {}),
            label: "Delete",
            "aria-label": "Delete selected tool",
            onPress: C,
            tooltip: "Delete selected tool",
            isDisabled: u.length === 0
          }
        )
      ] })
    }
  ) });
}, ii = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  showCreateVariablesInfo: !1,
  missingAttributes: [],
  unusedAttributes: []
}, ai = ({ loadedAgent: e, studioPro: t, updateStudioProDocument: i }) => {
  var D, J;
  const [a, l] = m.useState(!1), [d, u] = m.useState(ii), [h, f] = m.useState(void 0), [s, v] = m.useState(e), [x, $] = m.useState(!1), [y, C] = m.useState(!1), [b, o] = m.useState(/* @__PURE__ */ new Map()), c = Ie(), p = m.useRef(null);
  m.useEffect(() => {
    var r;
    M(e).then((g) => u(g)), O(t, (r = e.entity) == null ? void 0 : r.qualifiedName).then((g) => f(g)), v(e), l(!0);
  }, []), m.useEffect(() => () => {
    p.current && clearTimeout(p.current);
  }, []), m.useEffect(() => {
    a && (async () => {
      var w;
      const g = await O(t, (w = s.entity) == null ? void 0 : w.qualifiedName);
      f(g);
    })();
  }, [t, s.entity]), m.useEffect(() => {
    a && (async () => {
      if (s.tools && s.tools.length > 0) {
        const g = /* @__PURE__ */ new Map();
        s.tools.forEach((j) => {
          g.set(j.id, "syncing");
        }), o(g);
        const w = await Promise.all(
          s.tools.map(async (j) => {
            const A = await Ye("document", j, s, t);
            return {
              id: j.id,
              state: A === !0 ? "valid" : "invalid"
            };
          })
        ), V = new Map(w.map((j) => [j.id, j.state]));
        o(V);
      }
    })();
  }, [a]);
  const k = m.useRef(/* @__PURE__ */ new Map());
  m.useEffect(() => {
    if (a && s.tools) {
      const r = k.current, g = /* @__PURE__ */ new Map();
      s.tools.forEach((w) => {
        g.set(w.id, w.document.qualifiedName);
      }), o((w) => {
        var j;
        const V = new Map(w);
        return (j = s.tools) == null || j.forEach((A) => {
          if (!w.has(A.id))
            V.set(A.id, "valid");
          else {
            const X = r.get(A.id), Q = g.get(A.id);
            X !== void 0 && Q !== void 0 && X !== Q && V.set(A.id, "valid");
          }
        }), V;
      }), k.current = g;
    }
  }, [s.tools, a]), m.useEffect(() => {
    a && (async () => {
      const g = await M(s);
      u(g);
    })();
  }, [t, s]);
  const S = m.useMemo(() => Fe(s.variables), [s.variables]), I = (r) => (g) => {
    const w = { ...s, [r]: g };
    v(w), p.current && clearTimeout(p.current), p.current = setTimeout(async () => {
      const V = await bt(
        t,
        c,
        r,
        w,
        i,
        g
      );
      v(V);
    }, 300);
  }, H = async () => {
    const r = await xt(t, s, i);
    r && v(r);
  }, T = async () => {
    const r = await wt(t, s, i);
    r && v(r);
  }, B = async () => {
    s.model && yt(t, s.model.qualifiedName);
  }, E = async () => {
    s.entity && Ze(t, s.entity.qualifiedName);
  }, N = async () => {
    const r = await Ct(t, ie, s, i);
    r && v(r);
  }, O = async (r, g) => {
    if (!g)
      return;
    const w = await Ne(r, g);
    if (!w)
      return;
    const V = await _e(w, r);
    if (V !== void 0)
      return V ? /* @__PURE__ */ n.jsx(mt, {}) : /* @__PURE__ */ n.jsx(pt, {});
  }, _ = m.useMemo(() => {
    let r = "";
    return s.maxTokens !== void 0 && (r += "Max tokens: " + s.maxTokens.toLocaleString(navigator.language)), s.temperature !== void 0 && (r.length > 0 && (r += ", "), r += "Temperature: " + s.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), s.topP !== void 0 && (r.length > 0 && (r += ", "), r += "Top P: " + s.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), r;
  }, [s.temperature, s.maxTokens, s.topP]), M = async (r) => ({
    isValidModel: await z("model", t, r),
    isValidEntity: await z("entity", t, r),
    isValidUserPrompt: await z("userPrompt", t, r),
    showCreateVariablesInfo: r.variables.length === 0,
    missingAttributes: await We(t, r),
    unusedAttributes: await Ue(t, r)
  });
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(ee, { children: [
      /* @__PURE__ */ n.jsx(q, { label: "System prompt", children: /* @__PURE__ */ n.jsx(
        se,
        {
          ariaLabel: "System prompt",
          value: s.systemPrompt,
          onChange: I("systemPrompt"),
          highlightRules: S
        }
      ) }),
      /* @__PURE__ */ n.jsx(q, { label: "User prompt", children: /* @__PURE__ */ n.jsx(
        se,
        {
          ariaLabel: "User prompt",
          value: s.userPrompt || "",
          onChange: I("userPrompt"),
          highlightRules: S,
          validate: () => d.isValidUserPrompt
        }
      ) }),
      /* @__PURE__ */ n.jsx(
        ti,
        {
          agent: s,
          studioPro: t,
          componentName: ie,
          updateStudioProDocument: i,
          onAgentChange: v,
          toolValidations: b
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(ee, { children: /* @__PURE__ */ n.jsxs(q, { label: "General", children: [
      /* @__PURE__ */ n.jsx(
        W,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((D = s.model) == null ? void 0 : D.qualifiedName) || "",
          icon: s.model ? Xe : void 0,
          buttonCaption: "Select...",
          onClick: T,
          validate: () => d.isValidModel,
          buttonCaptionSecondary: s.model ? "Show" : void 0,
          onClickSecondary: s.model ? B : void 0
        }
      ),
      /* @__PURE__ */ n.jsx(
        W,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: _,
          buttonCaption: "Edit",
          onClick: N,
          validate: void 0
        }
      ),
      /* @__PURE__ */ n.jsx(
        Je,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: s.description,
          onChange: I("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ n.jsx(
        W,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((J = s.entity) == null ? void 0 : J.qualifiedName) || "",
          icon: h,
          onClick: H,
          buttonCaption: "Select...",
          validate: () => d.isValidEntity,
          buttonCaptionSecondary: s.entity ? "Show" : void 0,
          onClickSecondary: s.entity ? E : void 0
        }
      ),
      d.showCreateVariablesInfo && d.unusedAttributes.length === 0 && !y && /* @__PURE__ */ n.jsx(ae, { onClose: () => C(!0), children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
      d.missingAttributes.length > 0 && /* @__PURE__ */ n.jsxs(Qe, { children: [
        /* @__PURE__ */ n.jsx("span", { children: "The following attributes cannot be found on the selected entity:" }),
        /* @__PURE__ */ n.jsx("ul", { children: d.missingAttributes.map((r) => /* @__PURE__ */ n.jsx("li", { children: r }, r)) })
      ] }),
      d.unusedAttributes.length > 0 && !x && /* @__PURE__ */ n.jsxs(ae, { onClose: () => $(!0), children: [
        d.showCreateVariablesInfo && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("span", { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
          /* @__PURE__ */ n.jsx("br", {})
        ] }),
        /* @__PURE__ */ n.jsx("span", { children: "The following attributes are found on the selected entity, but are not used in the prompt:" }),
        /* @__PURE__ */ n.jsx("ul", { children: d.unusedAttributes.map((r) => /* @__PURE__ */ n.jsx("li", { children: r }, r)) })
      ] })
    ] }) })
  ] });
}, si = ze(), ni = ({ studioPro: e, documentId: t }) => {
  const i = e.ui.messageBoxes, a = e.app.model.customBlobDocuments, [l, d] = m.useState(!1), [u, h] = m.useState(si);
  return m.useEffect(() => {
    a.getDocumentById(t).then(async (f) => {
      if (f && !("error" in f)) {
        const s = f.document.contents;
        d(!0), h(s);
      } else
        throw new Error((f == null ? void 0 : f.error) || "Document not found");
    }).catch(async (f) => {
      await i.show("error", "Error loading document", "Details: " + (f == null ? void 0 : f.message) || f), d(!0);
    });
  }, []), /* @__PURE__ */ n.jsx(Ee, { studioPro: e, children: /* @__PURE__ */ n.jsxs(Ae, { children: [
    !l && /* @__PURE__ */ n.jsx(Be, {}),
    l && /* @__PURE__ */ n.jsx(Le, { children: /* @__PURE__ */ n.jsx(
      ai,
      {
        loadedAgent: u,
        studioPro: e,
        updateStudioProDocument: Ge(e, t)
      }
    ) })
  ] }) });
}, pi = Te(ni);
export {
  pi as component
};
//# sourceMappingURL=agentEdit.js.map
