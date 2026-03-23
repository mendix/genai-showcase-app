import { $ as X, a as Te, b as H, c as re, d as Ve, e as ce, f as je, r as f, g as ue, h as Me, i as Ee, j as Ie, k as Ae, l as Le, m as Pe, n as Be, o as Re, p as te, q as De, s as He, t as Oe, u as Z, v as Ne, w as s, x as B, y as _, z as Fe, A as fe, G as q, B as qe, C as ie, D as _e, P as We, E as Ue } from "./Icon-DL4Zg1xv.js";
import { I as W, T as me, c as ze, C as Qe } from "./TextWithIcon-CXVpI2JS.js";
import { i as Ze, m as Y, c as Ke, a as Je, T as ae, b as Ge, d as Xe, g as Ye, e as et, f as tt, h as it, j as K, k as at, l as st, u as nt } from "./index-CQcFpK0H.js";
import { n as he, y as lt } from "./MicroflowIcon-BpJMnxRT.js";
import { g as ot, T as se, h as dt } from "./toolHandlers-Boy31O5Y.js";
import { m as rt } from "./modelUtils-IL_KjN2R.js";
import { I as ne, W as ct } from "./Banner-Dsp9MSVG.js";
import { T as J } from "./TextInputWithButton-E-wZEDvQ.js";
import { h as ut } from "./knowledgebaseToolHandlers-CAdoxUrB.js";
import { r as A } from "./DesignSystemTokens-CB_9gr2a.js";
import { u as be, T as ge, D as O } from "./Table-BdZeaadb.js";
function ft(t, e, i) {
  let { isDisabled: n = !1, isReadOnly: l = !1, value: c, name: r, form: h, children: m, "aria-label": a, "aria-labelledby": b, validationState: p = "valid", isInvalid: k, onPressStart: C, onPressEnd: $, onPressChange: x, onPress: o, onPressUp: d, onClick: g } = t, j = (I) => {
    I.stopPropagation(), e.setSelected(I.target.checked);
  }, T = m != null, M = a != null || b != null;
  !T && !M && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: R, isPressed: L } = X({
    onPressStart: C,
    onPressEnd: $,
    onPressChange: x,
    onPress: o,
    onPressUp: d,
    onClick: g,
    isDisabled: n
  }), { pressProps: E, isPressed: P } = X({
    onPressStart: C,
    onPressEnd: $,
    onPressChange: x,
    onPressUp: d,
    onClick: g,
    onPress(I) {
      var D;
      o == null || o(I), e.toggle(), (D = i.current) === null || D === void 0 || D.focus();
    },
    isDisabled: n || l
  }), { focusableProps: U } = Te(t, i), z = H(R, U), Q = re(t, {
    labelable: !0
  });
  return Ve(i, e.defaultSelected, e.setSelected), {
    labelProps: H(E, {
      onClick: (I) => I.preventDefault()
    }),
    inputProps: H(Q, {
      "aria-invalid": k || p === "invalid" || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-controls": t["aria-controls"],
      "aria-readonly": l || void 0,
      onChange: j,
      disabled: n,
      ...c == null ? {} : {
        value: c
      },
      name: r,
      form: h,
      type: "checkbox",
      ...z
    }),
    isSelected: e.isSelected,
    isPressed: L || P,
    isDisabled: n,
    isReadOnly: l,
    isInvalid: k || p === "invalid"
  };
}
function ve(t, e, i) {
  let n = ce({
    ...t,
    value: e.isSelected
  }), { isInvalid: l, validationErrors: c, validationDetails: r } = n.displayValidation, { labelProps: h, inputProps: m, isSelected: a, isPressed: b, isDisabled: p, isReadOnly: k } = ft({
    ...t,
    isInvalid: l
  }, e, i);
  je(t, n, i);
  let { isIndeterminate: C, isRequired: $, validationBehavior: x = "aria" } = t;
  f.useEffect(() => {
    i.current && (i.current.indeterminate = !!C);
  });
  let { pressProps: o } = X({
    isDisabled: p || k,
    onPress() {
      let { [ue]: d } = t, { commitValidation: g } = d || n;
      g();
    }
  });
  return {
    labelProps: H(h, o, f.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (d) => d.preventDefault()
    }), [])),
    inputProps: {
      ...m,
      checked: a,
      "aria-required": $ && x === "aria" || void 0,
      required: $ && x === "native"
    },
    isSelected: a,
    isPressed: b,
    isDisabled: p,
    isReadOnly: k,
    isInvalid: l,
    validationErrors: c,
    validationDetails: r
  };
}
const mt = /* @__PURE__ */ new WeakMap();
function pe(t = {}) {
  let { isReadOnly: e } = t, [i, n] = Me(t.isSelected, t.defaultSelected || !1, t.onChange), [l] = f.useState(i);
  function c(m) {
    e || n(m);
  }
  function r() {
    e || n(!i);
  }
  var h;
  return {
    isSelected: i,
    defaultSelected: (h = t.defaultSelected) !== null && h !== void 0 ? h : l,
    setSelected: c,
    toggle: r
  };
}
function ht(t, e, i) {
  const n = pe({
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isSelected: e.isSelected(t.value),
    defaultSelected: e.defaultValue.includes(t.value),
    onChange(d) {
      d ? e.addValue(t.value) : e.removeValue(t.value), t.onChange && t.onChange(d);
    }
  });
  let { name: l, form: c, descriptionId: r, errorMessageId: h, validationBehavior: m } = mt.get(e);
  var a;
  m = (a = t.validationBehavior) !== null && a !== void 0 ? a : m;
  let { realtimeValidation: b } = ce({
    ...t,
    value: n.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), p = f.useRef(Ee), k = () => {
    e.setInvalid(t.value, b.isInvalid ? b : p.current);
  };
  f.useEffect(k);
  let C = e.realtimeValidation.isInvalid ? e.realtimeValidation : b, $ = m === "native" ? e.displayValidation : C;
  var x;
  let o = ve({
    ...t,
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isDisabled: t.isDisabled || e.isDisabled,
    name: t.name || l,
    form: t.form || c,
    isRequired: (x = t.isRequired) !== null && x !== void 0 ? x : e.isRequired,
    validationBehavior: m,
    [ue]: {
      realtimeValidation: C,
      displayValidation: $,
      resetValidation: e.resetValidation,
      commitValidation: e.commitValidation,
      updateValidation(d) {
        p.current = d, k();
      }
    }
  }, n, i);
  return {
    ...o,
    inputProps: {
      ...o.inputProps,
      "aria-describedby": [
        t["aria-describedby"],
        e.isInvalid ? h : null,
        r
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const bt = /* @__PURE__ */ f.createContext(null), gt = /* @__PURE__ */ f.forwardRef(function(e, i) {
  let { inputRef: n = null, ...l } = e;
  [e, i] = Ie(l, i, Ae);
  let { validationBehavior: c } = Le(Pe) || {};
  var r, h;
  let m = (h = (r = e.validationBehavior) !== null && r !== void 0 ? r : c) !== null && h !== void 0 ? h : "native", a = f.useContext(bt), b = Be(f.useMemo(() => Re(n, e.inputRef !== void 0 ? e.inputRef : null), [
    n,
    e.inputRef
  ])), { labelProps: p, inputProps: k, isSelected: C, isDisabled: $, isReadOnly: x, isPressed: o, isInvalid: d } = a ? ht({
    ...te(e),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, a, b) : ve({
    ...te(e),
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: m
  }, pe(e), b), { isFocused: g, isFocusVisible: j, focusProps: T } = De(), M = $ || x, { hoverProps: R, isHovered: L } = He({
    ...e,
    isDisabled: M
  }), E = Oe({
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: C,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: o,
      isHovered: L,
      isFocused: g,
      isFocusVisible: j,
      isDisabled: $,
      isReadOnly: x,
      isInvalid: d,
      isRequired: e.isRequired || !1
    }
  }), P = re(e, {
    global: !0
  });
  return delete P.id, delete P.onClick, /* @__PURE__ */ Z.createElement("label", {
    ...H(P, p, R, E),
    ref: i,
    slot: e.slot || void 0,
    "data-selected": C || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": o || void 0,
    "data-hovered": L || void 0,
    "data-focused": g || void 0,
    "data-focus-visible": j || void 0,
    "data-disabled": $ || void 0,
    "data-readonly": x || void 0,
    "data-invalid": d || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ Z.createElement(Ne, {
    elementType: "span"
  }, /* @__PURE__ */ Z.createElement("input", {
    ...H(k, T),
    ref: b
  })), E.children);
}), vt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", pt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var wt = Object.defineProperty, yt = (t, e) => wt(t, "name", { value: e, configurable: !0 });
const xt = yt((t) => s.jsx(B, { light: pt, dark: vt, ...t }), "EntityIcon"), kt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ct = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var $t = Object.defineProperty, St = (t, e) => $t(t, "name", { value: e, configurable: !0 });
const Tt = St((t) => s.jsx(B, { light: Ct, dark: kt, ...t }), "EntityNonPersistableIcon"), Vt = async (t, e, i, n, l, c) => {
  const r = { ...n, [i]: c };
  return (i === "userPrompt" || i === "systemPrompt") && (r.variables = await Ke(t, e, r)), l(r), r;
}, jt = async (t, e, i) => {
  const n = await t.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let l;
  if (n.status === "ok" && (l = { ...e, entity: n.selected.module + "." + n.selected.name }), n.status === "none" && (l = { ...e, entity: "" }), l) {
    const c = await Je(t, e.variables, l);
    l = { ...l, variables: c }, i(l);
  }
  return l;
}, Mt = async (t, e, i) => {
  const n = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Y }
  });
  let l;
  return n.status === "ok" && (l = {
    ...e,
    modelQualifiedName: n.selected.module + "." + n.selected.name
  }), n.status === "none" && (l = { ...e, modelQualifiedName: void 0 }), l && i(l), l;
}, G = async (t, e, i) => {
  switch (t) {
    case "modelQualifiedName": {
      if (!i.modelQualifiedName)
        return "Please select a model.";
      if (!await ot(
        e,
        i.modelQualifiedName,
        Y
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
      if (!await Ze(e, i))
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
}, Et = async (t, e) => {
  if (!e)
    return;
  const i = (await t.app.model.customBlobDocuments.getDocumentsOfType(Y)).find(
    (n) => n.moduleName + "." + n.name === e
  );
  if (!i)
    return await t.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  t.ui.editors.editDocument(i.id);
}, It = async (t, e, i, n) => {
  const l = await t.ui.dialogs.showModal(
    {
      title: "Model settings",
      contentSize: { height: 400, width: 600 }
    },
    {
      componentName: e,
      uiEntrypoint: "modelSettingsEdit",
      queryParams: {
        agent: encodeURIComponent(JSON.stringify(i))
      }
    }
  );
  let c;
  return l && (c = l), c && n(c), c;
}, le = async (t, e, i, n, l) => {
  const c = l && i.tools ? i.tools.find((h) => h.id === l) : void 0, r = await t.ui.dialogs.showModal(
    {
      title: c ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: e,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: c ? encodeURIComponent(JSON.stringify(c)) : "",
        agent: i ? encodeURIComponent(JSON.stringify(i)) : ""
      }
    }
  );
  if (r !== null) {
    const h = r;
    let m;
    l && i.tools ? m = i.tools.map((b) => b.id === l ? h : b) : m = [...i.tools || [], h], m.sort((b, p) => b.name.localeCompare(p.name));
    const a = { ...i, tools: m };
    return n(a), a;
  } else
    return null;
}, At = async (t, e, i, n) => {
  if (await t.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const c = e.tools.filter((h) => h.id !== n), r = { ...e, tools: c };
  return i(r), r;
}, oe = (t, e) => {
  const i = t;
  return {
    ...t,
    collectionIdentifier: i.collectionIdentifier ?? (e == null ? void 0 : e.collectionIdentifier) ?? "",
    maxResults: i.maxResults ?? (e == null ? void 0 : e.maxResults) ?? 5,
    minSimilarity: i.minSimilarity ?? (e == null ? void 0 : e.minSimilarity) ?? 0.5
  };
}, de = async (t, e, i, n, l) => {
  const c = i.knowledgebaseTools || [], r = l ? c.find((m) => m.id === l) : void 0, h = await t.ui.dialogs.showModal(
    {
      title: r ? "Edit knowledge base tool" : "Add knowledge base tool",
      contentSize: { height: 425, width: 600 }
    },
    {
      componentName: e,
      uiEntrypoint: "knowledgebaseToolEdit",
      queryParams: {
        tool: r ? encodeURIComponent(JSON.stringify(r)) : "",
        // Reuse tool dialog validation by providing the KB tools as the dialog agent tools.
        agent: i ? encodeURIComponent(JSON.stringify({ ...i, knowledgebaseTools: c })) : ""
      }
    }
  );
  if (h !== null) {
    const m = h;
    let a;
    l ? a = c.map(
      (p) => p.id === l ? oe(m, p) : p
    ) : a = [...c, oe(m)], a.sort((p, k) => p.name.localeCompare(k.name));
    const b = { ...i, knowledgebaseTools: a };
    return n(b), b;
  }
  return null;
}, Lt = async (t, e, i, n) => {
  if (await t.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this knowledge base tool?"
  }) === !1)
    return;
  const r = (e.knowledgebaseTools || []).filter((m) => m.id !== n), h = { ...e, knowledgebaseTools: r };
  return i(h), h;
}, Pt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Bt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Rt = Object.defineProperty, Dt = (t, e) => Rt(t, "name", { value: e, configurable: !0 });
const we = Dt((t) => s.jsx(B, { light: Bt, dark: Pt, ...t }), "AppSelectorNoVersionIcon"), Ht = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ot = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Nt = Object.defineProperty, Ft = (t, e) => Nt(t, "name", { value: e, configurable: !0 });
const ye = Ft((t) => s.jsx(B, { light: Ot, dark: Ht, ...t }), "EditIcon"), qt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", _t = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Wt = Object.defineProperty, Ut = (t, e) => Wt(t, "name", { value: e, configurable: !0 });
const xe = Ut((t) => s.jsx(B, { light: _t, dark: qt, ...t }), "PageIcon"), zt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Qt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Zt = Object.defineProperty, Kt = (t, e) => Zt(t, "name", { value: e, configurable: !0 });
const ke = Kt((t) => s.jsx(B, { light: Qt, dark: zt, ...t }), "SyncIcon"), Jt = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Gt = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Xt = Object.defineProperty, Yt = (t, e) => Xt(t, "name", { value: e, configurable: !0 });
const ei = Yt((t) => s.jsx(B, { light: Gt, dark: Jt, ...t }), "CheckCheckboxIcon");
var ti = Object.defineProperty, ii = (t, e) => ti(t, "name", { value: e, configurable: !0 });
const Ce = ii(({ children: t, ...e }) => s.jsx(si, { ...e, children: ({ isIndeterminate: i, isSelected: n }) => s.jsxs(s.Fragment, { children: [s.jsxs($e, { $isSelected: n, $isIndeterminate: i, children: [i && s.jsx(ai, {}), n && !i && s.jsx(ei, {})] }), t] }) }), "Checkbox"), $e = _.div`
    width: ${A.size12};
    height: ${A.size12};
    margin: ${A.spacing2};
    border-radius: ${A.borderRadiusXs};
    border: ${A.borderWidthMd} solid
        ${({ theme: t, $isSelected: e }) => e ? t.colorsBorderSelectorSelected : t.colorsBorderSelectorUnselected};
    background-color: ${({ theme: t, $isSelected: e, $isIndeterminate: i }) => e && !i ? t.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, ai = _.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: t }) => t.colorsBorderSelectorSelected};
`, si = _(gt)`
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
        ${$e} {
            border-color: ${({ theme: t }) => t.colorsBorderSelectorSelected};
        }
    }

    ${Fe}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, ni = _(Ce)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, li = ({
  agent: t,
  studioPro: e,
  componentName: i,
  updateStudioProDocument: n,
  onAgentChange: l,
  knowledgebaseToolValidations: c
}) => {
  const [r, h] = f.useState([]), m = f.useMemo(() => (t.knowledgebaseTools || []).map((d, g) => ({
    id: d.id ?? String(g),
    enabled: d.enabled,
    name: d.name,
    description: d.description || "",
    tool: d.document.qualifiedName || ""
  })), [t.knowledgebaseTools]), { items: a, sortProps: b } = be(m), p = f.useCallback(
    (o) => {
      const d = c.get(o);
      return d === "invalid" ? /* @__PURE__ */ s.jsx(W, { icon: /* @__PURE__ */ s.jsx(fe, { title: "Tool invalid" }) }) : d === "syncing" ? /* @__PURE__ */ s.jsx(W, { icon: /* @__PURE__ */ s.jsx(ke, { title: "Validating..." }) }) : null;
    },
    [c]
  ), k = f.useCallback(async () => {
    const o = await de(
      e,
      i,
      t,
      n
    );
    o && l(o);
  }, [e, i, t, n, l]), C = f.useCallback(async () => {
    const o = t.knowledgebaseTools || [];
    if (r.length === 0 || o.length === 0)
      return;
    const d = r[0], g = await de(
      e,
      i,
      t,
      n,
      d
    );
    g && l(g);
  }, [e, i, t, n, l, r]), $ = f.useCallback(async () => {
    const o = t.knowledgebaseTools || [];
    if (r.length === 0 || o.length === 0)
      return;
    const d = r[0], g = await Lt(
      e,
      t,
      n,
      d
    );
    g && l(g);
  }, [t, n, l, r]), x = f.useCallback(
    async (o, d) => {
      const g = t.knowledgebaseTools || [];
      if (g.length === 0)
        return;
      const j = g.map(
        (M) => (M.id ?? "") === o ? { ...M, enabled: d } : M
      ), T = { ...t, knowledgebaseTools: j };
      n(T), l(T);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.knowledgebaseTools, n, l]
  );
  return /* @__PURE__ */ s.jsx(q, { label: "Knowledge base tools", children: /* @__PURE__ */ s.jsx(
    ge,
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
      data: a.map((o) => [
        p(o.id),
        /* @__PURE__ */ s.jsx(
          ni,
          {
            "aria-label": "Enabled",
            isSelected: o.enabled,
            onChange: (d) => x(o.id, d)
          }
        ),
        o.name,
        o.description,
        /* @__PURE__ */ s.jsx(me, { icon: /* @__PURE__ */ s.jsx(he, {}), text: o.tool })
      ]),
      rowKey: (o, d) => {
        var g;
        return ((g = a[d]) == null ? void 0 : g.id) ?? String(d);
      },
      rowOpacity: (o) => {
        var d;
        return (d = a[o]) != null && d.enabled ? 1 : 0.5;
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
            icon: /* @__PURE__ */ s.jsx(xe, {}),
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
            icon: /* @__PURE__ */ s.jsx(we, {}),
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
}, oi = _(Ce)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, di = ({
  agent: t,
  studioPro: e,
  componentName: i,
  updateStudioProDocument: n,
  onAgentChange: l,
  toolValidations: c
}) => {
  const [r, h] = f.useState([]), m = f.useMemo(() => t.tools ? t.tools.map((o, d) => ({
    id: o.id ?? String(d),
    enabled: o.enabled,
    name: o.toolType === ae.Microflow ? o.name : o.document.qualifiedName.split(".")[1],
    description: o.description || "",
    tooltype: o.toolType,
    tool: o.document.qualifiedName || ""
  })) : [], [t.tools]), { items: a, sortProps: b } = be(m), p = f.useCallback(
    (o) => {
      const d = c.get(o);
      return d === "invalid" ? /* @__PURE__ */ s.jsx(W, { icon: /* @__PURE__ */ s.jsx(fe, { title: "Tool invalid" }) }) : d === "syncing" ? /* @__PURE__ */ s.jsx(W, { icon: /* @__PURE__ */ s.jsx(ke, { title: "Validating..." }) }) : null;
    },
    [c]
  ), k = f.useCallback(async () => {
    const o = await le(e, i, t, n);
    o && l(o);
  }, [e, i, t, n, l]), C = f.useCallback(async () => {
    if (r.length === 0 || !t.tools)
      return;
    const o = r[0], d = await le(
      e,
      i,
      t,
      n,
      o
    );
    d && l(d);
  }, [e, i, t, n, l, r]), $ = f.useCallback(async () => {
    if (r.length === 0 || !t.tools)
      return;
    const o = r[0], d = await At(e, t, n, o);
    d && l(d);
  }, [t, n, l, r]), x = f.useCallback(
    async (o, d) => {
      if (!t.tools)
        return;
      const g = t.tools.map(
        (T) => (T.id ?? "") === o ? { ...T, enabled: d } : T
      ), j = { ...t, tools: g };
      n(j), l(j);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.tools, n, l]
  );
  return /* @__PURE__ */ s.jsx(q, { label: "Tools", children: /* @__PURE__ */ s.jsx(
    ge,
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
      data: a.map((o) => [
        p(o.id),
        /* @__PURE__ */ s.jsx(
          oi,
          {
            "aria-label": "Enabled",
            isSelected: o.enabled,
            onChange: (d) => x(o.id, d)
          }
        ),
        o.name,
        o.description,
        /* @__PURE__ */ s.jsx(
          me,
          {
            icon: o.tooltype === ae.Microflow ? /* @__PURE__ */ s.jsx(he, {}) : Ge,
            text: o.tool
          }
        )
      ]),
      rowKey: (o, d) => {
        var g;
        return ((g = a[d]) == null ? void 0 : g.id) ?? String(d);
      },
      rowOpacity: (o) => {
        var d;
        return (d = a[o]) != null && d.enabled ? 1 : 0.5;
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
            icon: /* @__PURE__ */ s.jsx(xe, {}),
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
            icon: /* @__PURE__ */ s.jsx(we, {}),
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
}, ri = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  showCreateVariablesInfo: !1,
  missingAttributes: [],
  unusedAttributes: []
}, ci = ({ loadedAgent: t, studioPro: e, updateStudioProDocument: i }) => {
  const [n, l] = f.useState(!1), [c, r] = f.useState(ri), [h, m] = f.useState(void 0), [a, b] = f.useState(t), [p, k] = f.useState(!1), [C, $] = f.useState(!1), [x, o] = f.useState(/* @__PURE__ */ new Map()), [d, g] = f.useState(
    /* @__PURE__ */ new Map()
  ), j = qe(), T = f.useRef(null);
  f.useEffect(() => {
    ee(t).then((u) => r(u)), D(e, t.entity).then((u) => m(u)), b(t), l(!0);
  }, []), f.useEffect(() => () => {
    T.current && clearTimeout(T.current);
  }, []), f.useEffect(() => {
    n && (async () => {
      const y = await D(e, a.entity);
      m(y);
    })();
  }, [e, a.entity]), f.useEffect(() => {
    n && (async () => {
      const y = [];
      if (a.tools && a.tools.length > 0) {
        const w = /* @__PURE__ */ new Map();
        a.tools.forEach((v) => {
          w.set(v.id, "syncing");
        }), o(w), y.push(
          Promise.all(
            a.tools.map(async (v) => {
              const V = await dt("document", v, a, e);
              return {
                id: v.id,
                state: V === !0 ? "valid" : "invalid"
              };
            })
          ).then((v) => {
            const V = new Map(v.map((S) => [S.id, S.state]));
            o(V);
          })
        );
      }
      if (a.knowledgebaseTools && a.knowledgebaseTools.length > 0) {
        const w = /* @__PURE__ */ new Map();
        a.knowledgebaseTools.forEach((v) => {
          w.set(v.id, "syncing");
        }), g(w), y.push(
          Promise.all(
            a.knowledgebaseTools.map(async (v) => {
              const V = await ut(
                "document",
                v,
                a,
                e
              );
              return {
                id: v.id,
                state: V === !0 ? "valid" : "invalid"
              };
            })
          ).then((v) => {
            const V = new Map(v.map((S) => [S.id, S.state]));
            g(V);
          })
        );
      }
      await Promise.all(y);
    })();
  }, [n]);
  const M = f.useRef(/* @__PURE__ */ new Map()), R = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    if (n && a.tools) {
      const u = M.current, y = /* @__PURE__ */ new Map();
      a.tools.forEach((w) => {
        y.set(w.id, w.document.qualifiedName);
      }), o((w) => {
        var V;
        const v = new Map(w);
        return (V = a.tools) == null || V.forEach((S) => {
          if (!w.has(S.id))
            v.set(S.id, "valid");
          else {
            const N = u.get(S.id), F = y.get(S.id);
            N !== void 0 && F !== void 0 && N !== F && v.set(S.id, "valid");
          }
        }), v;
      }), M.current = y;
    }
  }, [a.tools, n]), f.useEffect(() => {
    if (n && a.knowledgebaseTools) {
      const u = R.current, y = /* @__PURE__ */ new Map();
      a.knowledgebaseTools.forEach((w) => {
        y.set(w.id, w.document.qualifiedName);
      }), g((w) => {
        var V;
        const v = new Map(w);
        return (V = a.knowledgebaseTools) == null || V.forEach((S) => {
          if (!w.has(S.id))
            v.set(S.id, "valid");
          else {
            const N = u.get(S.id), F = y.get(S.id);
            N !== void 0 && F !== void 0 && N !== F && v.set(S.id, "valid");
          }
        }), v;
      }), R.current = y;
    }
  }, [a.knowledgebaseTools, n]), f.useEffect(() => {
    n && (async () => {
      const y = await ee(a);
      r(y);
    })();
  }, [e, a]);
  const L = f.useMemo(() => Xe(a.variables), [a.variables]), E = (u) => (y) => {
    const w = { ...a, [u]: y };
    b(w), T.current && clearTimeout(T.current), T.current = setTimeout(async () => {
      const v = await Vt(
        e,
        j,
        u,
        w,
        i,
        y
      );
      b(v);
    }, 300);
  }, P = async () => {
    const u = await jt(e, a, i);
    u && b(u);
  }, U = async () => {
    const u = await Mt(e, a, i);
    u && b(u);
  }, z = async () => {
    a.modelQualifiedName && Et(e, a.modelQualifiedName);
  }, Q = async () => {
    at(e, a.entity);
  }, I = async () => {
    const u = await It(e, K, a, i);
    u && b(u);
  }, D = async (u, y) => {
    if (!y)
      return;
    const w = await Ye(u, y);
    if (!w)
      return;
    const v = await et(w, u);
    if (v !== void 0)
      return v ? /* @__PURE__ */ s.jsx(xt, {}) : /* @__PURE__ */ s.jsx(Tt, {});
  }, Se = f.useMemo(() => {
    let u = "";
    return a.maxTokens !== void 0 && (u += "Max tokens: " + a.maxTokens.toLocaleString(navigator.language)), a.temperature !== void 0 && (u.length > 0 && (u += ", "), u += "Temperature: " + a.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), a.topP !== void 0 && (u.length > 0 && (u += ", "), u += "Top P: " + a.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), u;
  }, [a.temperature, a.maxTokens, a.topP]), ee = async (u) => ({
    isValidModel: await G("modelQualifiedName", e, u),
    isValidEntity: await G("entity", e, u),
    isValidUserPrompt: await G("userPrompt", e, u),
    showCreateVariablesInfo: u.variables.length === 0,
    missingAttributes: await it(e, u),
    unusedAttributes: await tt(e, u)
  });
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(ie, { children: [
      /* @__PURE__ */ s.jsx(q, { label: "System prompt", children: /* @__PURE__ */ s.jsx(
        se,
        {
          ariaLabel: "System prompt",
          value: a.systemPrompt,
          onChange: E("systemPrompt"),
          highlightRules: L
        }
      ) }),
      /* @__PURE__ */ s.jsx(q, { label: "User prompt", children: /* @__PURE__ */ s.jsx(
        se,
        {
          ariaLabel: "User prompt",
          value: a.userPrompt || "",
          onChange: E("userPrompt"),
          highlightRules: L,
          validate: () => c.isValidUserPrompt
        }
      ) }),
      /* @__PURE__ */ s.jsx(
        di,
        {
          agent: a,
          studioPro: e,
          componentName: K,
          updateStudioProDocument: i,
          onAgentChange: b,
          toolValidations: x
        }
      ),
      /* @__PURE__ */ s.jsx(
        li,
        {
          agent: a,
          studioPro: e,
          componentName: K,
          updateStudioProDocument: i,
          onAgentChange: b,
          knowledgebaseToolValidations: d
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(ie, { children: /* @__PURE__ */ s.jsxs(q, { label: "General", children: [
      /* @__PURE__ */ s.jsx(
        J,
        {
          ariaLabel: "Model",
          label: "Model",
          value: a.modelQualifiedName ? a.modelQualifiedName : "",
          icon: a.modelQualifiedName ? rt : void 0,
          buttonCaption: "Select...",
          onClick: U,
          validate: () => c.isValidModel,
          buttonCaptionSecondary: a.modelQualifiedName ? "Show" : void 0,
          onClickSecondary: a.modelQualifiedName ? z : void 0
        }
      ),
      /* @__PURE__ */ s.jsx(
        J,
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
        lt,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: a.description,
          onChange: E("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ s.jsx(
        J,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: a.entity,
          icon: h,
          onClick: P,
          buttonCaption: "Select...",
          validate: () => c.isValidEntity,
          buttonCaptionSecondary: a.entity ? "Show" : void 0,
          onClickSecondary: a.entity ? Q : void 0
        }
      ),
      c.showCreateVariablesInfo && c.unusedAttributes.length === 0 && !C && /* @__PURE__ */ s.jsx(ne, { onClose: () => $(!0), children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
      c.missingAttributes.length > 0 && /* @__PURE__ */ s.jsxs(ct, { children: [
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes cannot be found on the selected entity:" }),
        /* @__PURE__ */ s.jsx("ul", { children: c.missingAttributes.map((u) => /* @__PURE__ */ s.jsx("li", { children: u }, u)) })
      ] }),
      c.unusedAttributes.length > 0 && !p && /* @__PURE__ */ s.jsxs(ne, { onClose: () => k(!0), children: [
        c.showCreateVariablesInfo && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
          /* @__PURE__ */ s.jsx("span", { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
          /* @__PURE__ */ s.jsx("br", {})
        ] }),
        /* @__PURE__ */ s.jsx("span", { children: "The following attributes are found on the selected entity, but are not used in the prompt:" }),
        /* @__PURE__ */ s.jsx("ul", { children: c.unusedAttributes.map((u) => /* @__PURE__ */ s.jsx("li", { children: u }, u)) })
      ] })
    ] }) })
  ] });
}, ui = st(), fi = ({ studioPro: t, documentId: e }) => {
  const i = t.ui.messageBoxes, n = t.app.model.customBlobDocuments, [l, c] = f.useState(!1), [r, h] = f.useState(ui);
  return f.useEffect(() => {
    n.getDocumentById(e).then(async (m) => {
      if (m && !("error" in m)) {
        const a = m.document.contents;
        c(!0), h(a);
      } else
        throw new Error((m == null ? void 0 : m.error) || "Document not found");
    }).catch(async (m) => {
      await i.show("error", "Error loading document", "Details: " + (m == null ? void 0 : m.message) || m), c(!0);
    });
  }, []), /* @__PURE__ */ s.jsx(_e, { studioPro: t, children: /* @__PURE__ */ s.jsxs(We, { children: [
    !l && /* @__PURE__ */ s.jsx(Qe, {}),
    l && /* @__PURE__ */ s.jsx(Ue, { children: /* @__PURE__ */ s.jsx(
      ci,
      {
        loadedAgent: r,
        studioPro: t,
        updateStudioProDocument: nt(t, e)
      }
    ) })
  ] }) });
}, $i = ze(fi);
export {
  $i as component
};
//# sourceMappingURL=agentEdit.js.map
