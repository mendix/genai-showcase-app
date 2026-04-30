import { $ as ft, a as ii, b as ce, c as et, d as li, e as Fn, f as oi, r as R, g as ai, h as si, i as Jl, j as eo, k as to, l as no, m as ro, n as io, o as lo, p as jn, q as oo, s as ui, t as ci, u as di, v as fi, w as xn, x as hi, y as pi, z as Mn, A as be, B as mi, C as ao, D as so, E as uo, F as co, G as fo, H as p, I as Ee, J as gi, K as X, L as U, T as ho, M as po, N as mo, O as xi, P as Oe, Q as go, R as yi, S as xo, U as bi, V as De, W as yo, X as ki, Y as rr, Z as bo, _ as ko, a0 as wo, a1 as Co, a2 as ir, a3 as vo, a4 as So, a5 as To, a6 as Eo } from "./Icon-UiLWY9J1.js";
import { I as $t, T as wi, B as qe, u as Io, c as Ao, C as Po } from "./TextWithIcon-DQRgkfUK.js";
import { R as Lo, g as _t, M as ke, a as Do, U as ue, b as Ro, P as Fo, A as jo, T as ze, m as Mo, k as $o, c as Bo, d as yn, e as zo, i as Oo, f as _o, h as Gt, j as Vo, l as No } from "./index-CcjggGcx.js";
import { g as Ci } from "./customBlobDocumentUtils-Dwvjb_jQ.js";
import { $ as Ho, a as qo, I as bn, S as lr } from "./ComboBox-B1qf7wz3.js";
import { E as $n, I as vi, W as Uo } from "./Banner-87Geup2v.js";
import { h as Wo, T as or } from "./toolHandlers-CdSVG36-.js";
import { T as Xt } from "./TextInputWithButton-DEzJuJjn.js";
import { h as Zo } from "./knowledgebaseToolHandlers-CvlCV-OF.js";
import { u as Si, T as Ti, D as Ye, k as Ko } from "./Table-BliMwPgJ.js";
import { y as Bn } from "./Link-DFGqRVqk.js";
import { n as Go } from "./MicroflowIcon-UqycS1--.js";
function Xo(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: s, "aria-label": u, "aria-labelledby": c, validationState: d = "valid", isInvalid: h, onPressStart: f, onPressEnd: x, onPressChange: b, onPress: v, onPressUp: y, onClick: T } = e, S = (N) => {
    N.stopPropagation(), t.setSelected(N.target.checked);
  }, I = s != null, A = u != null || c != null;
  !I && !A && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: w, isPressed: L } = ft({
    onPressStart: f,
    onPressEnd: x,
    onPressChange: b,
    onPress: v,
    onPressUp: y,
    onClick: T,
    isDisabled: r
  }), { pressProps: F, isPressed: B } = ft({
    onPressStart: f,
    onPressEnd: x,
    onPressChange: b,
    onPressUp: y,
    onClick: T,
    onPress(N) {
      var O;
      v == null || v(N), t.toggle(), (O = n.current) === null || O === void 0 || O.focus();
    },
    isDisabled: r || i
  }), { focusableProps: C } = ii(e, n), $ = ce(w, C), z = et(e, {
    labelable: !0
  });
  return li(n, t.defaultSelected, t.setSelected), {
    labelProps: ce(F, {
      onClick: (N) => N.preventDefault()
    }),
    inputProps: ce(z, {
      "aria-invalid": h || d === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": i || void 0,
      onChange: S,
      disabled: r,
      ...l == null ? {} : {
        value: l
      },
      name: o,
      form: a,
      type: "checkbox",
      ...$
    }),
    isSelected: t.isSelected,
    isPressed: L || B,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: h || d === "invalid"
  };
}
function Ei(e, t, n) {
  let r = Fn({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: s, isSelected: u, isPressed: c, isDisabled: d, isReadOnly: h } = Xo({
    ...e,
    isInvalid: i
  }, t, n);
  oi(e, r, n);
  let { isIndeterminate: f, isRequired: x, validationBehavior: b = "aria" } = e;
  R.useEffect(() => {
    n.current && (n.current.indeterminate = !!f);
  });
  let { pressProps: v } = ft({
    isDisabled: d || h,
    onPress() {
      let { [ai]: y } = e, { commitValidation: T } = y || r;
      T();
    }
  });
  return {
    labelProps: ce(a, v, R.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (y) => y.preventDefault()
    }), [])),
    inputProps: {
      ...s,
      checked: u,
      "aria-required": x && b === "aria" || void 0,
      required: x && b === "native"
    },
    isSelected: u,
    isPressed: c,
    isDisabled: d,
    isReadOnly: h,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
const Yo = /* @__PURE__ */ new WeakMap();
function Ii(e = {}) {
  let { isReadOnly: t } = e, [n, r] = si(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = R.useState(n);
  function l(s) {
    t || r(s);
  }
  function o() {
    t || r(!n);
  }
  var a;
  return {
    isSelected: n,
    defaultSelected: (a = e.defaultSelected) !== null && a !== void 0 ? a : i,
    setSelected: l,
    toggle: o
  };
}
function Qo(e, t, n) {
  const r = Ii({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(y) {
      y ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(y);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: s } = Yo.get(t);
  var u;
  s = (u = e.validationBehavior) !== null && u !== void 0 ? u : s;
  let { realtimeValidation: c } = Fn({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), d = R.useRef(Jl), h = () => {
    t.setInvalid(e.value, c.isInvalid ? c : d.current);
  };
  R.useEffect(h);
  let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : c, x = s === "native" ? t.displayValidation : f;
  var b;
  let v = Ei({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (b = e.isRequired) !== null && b !== void 0 ? b : t.isRequired,
    validationBehavior: s,
    [ai]: {
      realtimeValidation: f,
      displayValidation: x,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(y) {
        d.current = y, h();
      }
    }
  }, r, n);
  return {
    ...v,
    inputProps: {
      ...v.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? a : null,
        o
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const Ai = /* @__PURE__ */ new WeakMap();
function Jo(e, t, n) {
  let { value: r, children: i, "aria-label": l, "aria-labelledby": o, onPressStart: a, onPressEnd: s, onPressChange: u, onPress: c, onPressUp: d, onClick: h } = e;
  const f = e.isDisabled || t.isDisabled;
  let x = i != null, b = l != null || o != null;
  !x && !b && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let v = t.selectedValue === r, y = (D) => {
    D.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: T, isPressed: S } = ft({
    onPressStart: a,
    onPressEnd: s,
    onPressChange: u,
    onPress: c,
    onPressUp: d,
    onClick: h,
    isDisabled: f
  }), { pressProps: I, isPressed: A } = ft({
    onPressStart: a,
    onPressEnd: s,
    onPressChange: u,
    onPressUp: d,
    onClick: h,
    isDisabled: f,
    onPress(D) {
      var W;
      c == null || c(D), t.setSelectedValue(r), (W = n.current) === null || W === void 0 || W.focus();
    }
  }), { focusableProps: w } = ii(ce(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), L = ce(T, w), F = et(e, {
    labelable: !0
  }), B = -1;
  t.selectedValue != null ? t.selectedValue === r && (B = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (B = 0), f && (B = void 0);
  let { name: C, form: $, descriptionId: z, errorMessageId: N, validationBehavior: O } = Ai.get(t);
  return li(n, t.defaultSelectedValue, t.setSelectedValue), oi({
    validationBehavior: O
  }, t, n), {
    labelProps: ce(I, R.useMemo(() => ({
      onClick: (D) => D.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (D) => D.preventDefault()
    }), [])),
    inputProps: ce(F, {
      ...L,
      type: "radio",
      name: C,
      form: $,
      tabIndex: B,
      disabled: f,
      required: t.isRequired && O === "native",
      checked: v,
      value: r,
      onChange: y,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? N : null,
        z
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: f,
    isSelected: v,
    isPressed: S || A
  };
}
function ea(e, t) {
  let { name: n, form: r, isReadOnly: i, isRequired: l, isDisabled: o, orientation: a = "vertical", validationBehavior: s = "aria" } = e, { direction: u } = eo(), { isInvalid: c, validationErrors: d, validationDetails: h } = t.displayValidation, { labelProps: f, fieldProps: x, descriptionProps: b, errorMessageProps: v } = to({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || d
  }), y = et(e, {
    labelable: !0
  }), { focusWithinProps: T } = no({
    onBlurWithin(A) {
      var w;
      (w = e.onBlur) === null || w === void 0 || w.call(e, A), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), S = (A) => {
    let w;
    switch (A.key) {
      case "ArrowRight":
        u === "rtl" && a !== "vertical" ? w = "prev" : w = "next";
        break;
      case "ArrowLeft":
        u === "rtl" && a !== "vertical" ? w = "next" : w = "prev";
        break;
      case "ArrowDown":
        w = "next";
        break;
      case "ArrowUp":
        w = "prev";
        break;
      default:
        return;
    }
    A.preventDefault();
    let L = io(A.currentTarget, {
      from: A.target,
      accept: (B) => B instanceof lo(B).HTMLInputElement && B.type === "radio"
    }), F;
    w === "next" ? (F = L.nextNode(), F || (L.currentNode = A.currentTarget, F = L.firstChild())) : (F = L.previousNode(), F || (L.currentNode = A.currentTarget, F = L.lastChild())), F && (F.focus(), t.setSelectedValue(F.value));
  }, I = ro(n);
  return Ai.set(t, {
    name: I,
    form: r,
    descriptionId: b.id,
    errorMessageId: v.id,
    validationBehavior: s
  }), {
    radioGroupProps: ce(y, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: S,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": l || void 0,
      "aria-disabled": o || void 0,
      "aria-orientation": a,
      ...x,
      ...T
    }),
    labelProps: f,
    descriptionProps: b,
    errorMessageProps: v,
    isInvalid: c,
    validationErrors: d,
    validationDetails: h
  };
}
let ta = Math.round(Math.random() * 1e10), na = 0;
function ra(e) {
  let t = R.useMemo(() => e.name || `radio-group-${ta}-${++na}`, [
    e.name
  ]);
  var n;
  let [r, i] = si(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [l] = R.useState(r), [o, a] = R.useState(null), s = Fn({
    ...e,
    value: r
  }), u = (h) => {
    !e.isReadOnly && !e.isDisabled && (i(h), s.commitValidation());
  }, c = s.displayValidation.isInvalid;
  var d;
  return {
    ...s,
    name: t,
    selectedValue: r,
    defaultSelectedValue: e.value !== void 0 ? l : (d = e.defaultValue) !== null && d !== void 0 ? d : null,
    setSelectedValue: u,
    lastFocusedValue: o,
    setLastFocusedValue: a,
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isRequired: e.isRequired || !1,
    validationState: e.validationState || (c ? "invalid" : null),
    isInvalid: c
  };
}
const ia = /* @__PURE__ */ R.createContext(null), la = /* @__PURE__ */ R.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = jn(i, n, oo);
  let { validationBehavior: l } = ui(ci) || {};
  var o, a;
  let s = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", u = R.useContext(ia), c = di(R.useMemo(() => fi(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: d, inputProps: h, isSelected: f, isDisabled: x, isReadOnly: b, isPressed: v, isInvalid: y } = u ? Qo({
    ...xn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, u, c) : Ei({
    ...xn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: s
  }, Ii(t), c), { isFocused: T, isFocusVisible: S, focusProps: I } = hi(), A = x || b, { hoverProps: w, isHovered: L } = pi({
    ...t,
    isDisabled: A
  }), F = Mn({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: f,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: v,
      isHovered: L,
      isFocused: T,
      isFocusVisible: S,
      isDisabled: x,
      isReadOnly: b,
      isInvalid: y,
      isRequired: t.isRequired || !1
    }
  }), B = et(t, {
    global: !0
  });
  return delete B.id, delete B.onClick, /* @__PURE__ */ be.createElement("label", {
    ...ce(B, d, w, F),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": f || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": v || void 0,
    "data-hovered": L || void 0,
    "data-focused": T || void 0,
    "data-focus-visible": S || void 0,
    "data-disabled": x || void 0,
    "data-readonly": b || void 0,
    "data-invalid": y || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ be.createElement(mi, {
    elementType: "span"
  }, /* @__PURE__ */ be.createElement("input", {
    ...ce(h, I),
    ref: c
  })), F.children);
}), oa = /* @__PURE__ */ R.createContext(null), aa = /* @__PURE__ */ R.createContext(null), Pi = /* @__PURE__ */ R.createContext(null), sa = /* @__PURE__ */ R.forwardRef(function(t, n) {
  [t, n] = jn(t, n, oa);
  let { validationBehavior: r } = ui(ci) || {};
  var i, l;
  let o = (l = (i = t.validationBehavior) !== null && i !== void 0 ? i : r) !== null && l !== void 0 ? l : "native", a = ra({
    ...t,
    validationBehavior: o
  }), [s, u] = ao(!t["aria-label"] && !t["aria-labelledby"]), { radioGroupProps: c, labelProps: d, descriptionProps: h, errorMessageProps: f, ...x } = ea({
    ...t,
    label: u,
    validationBehavior: o
  }, a), b = Mn({
    ...t,
    values: {
      orientation: t.orientation || "vertical",
      isDisabled: a.isDisabled,
      isReadOnly: a.isReadOnly,
      isRequired: a.isRequired,
      isInvalid: a.isInvalid,
      state: a
    },
    defaultClassName: "react-aria-RadioGroup"
  }), v = et(t, {
    global: !0
  });
  return /* @__PURE__ */ be.createElement("div", {
    ...ce(v, b, c),
    ref: n,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "vertical",
    "data-invalid": a.isInvalid || void 0,
    "data-disabled": a.isDisabled || void 0,
    "data-readonly": a.isReadOnly || void 0,
    "data-required": a.isRequired || void 0
  }, /* @__PURE__ */ be.createElement(so, {
    values: [
      [
        Pi,
        a
      ],
      [
        uo,
        {
          ...d,
          ref: s,
          elementType: "span"
        }
      ],
      [
        co,
        {
          slots: {
            description: h,
            errorMessage: f
          }
        }
      ],
      [
        fo,
        x
      ]
    ]
  }, /* @__PURE__ */ be.createElement(qo, null, b.children)));
}), ua = /* @__PURE__ */ R.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = jn(i, n, aa);
  let l = be.useContext(Pi), o = di(R.useMemo(() => fi(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: a, inputProps: s, isSelected: u, isDisabled: c, isPressed: d } = Jo({
    ...xn(t),
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, l, o), { isFocused: h, isFocusVisible: f, focusProps: x } = hi(), b = c || l.isReadOnly, { hoverProps: v, isHovered: y } = pi({
    ...t,
    isDisabled: b
  }), T = Mn({
    ...t,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: u,
      isPressed: d,
      isHovered: y,
      isFocused: h,
      isFocusVisible: f,
      isDisabled: c,
      isReadOnly: l.isReadOnly,
      isInvalid: l.isInvalid,
      isRequired: l.isRequired
    }
  }), S = et(t, {
    global: !0
  });
  return delete S.id, delete S.onClick, /* @__PURE__ */ be.createElement("label", {
    ...ce(S, a, v, T),
    ref: n,
    "data-selected": u || void 0,
    "data-pressed": d || void 0,
    "data-hovered": y || void 0,
    "data-focused": h || void 0,
    "data-focus-visible": f || void 0,
    "data-disabled": c || void 0,
    "data-readonly": l.isReadOnly || void 0,
    "data-invalid": l.isInvalid || void 0,
    "data-required": l.isRequired || void 0
  }, /* @__PURE__ */ be.createElement(mi, {
    elementType: "span"
  }, /* @__PURE__ */ be.createElement("input", {
    ...ce(s, x),
    ref: o
  })), /* @__PURE__ */ be.createElement(Ho.Provider, {
    value: {
      isSelected: u
    }
  }, T.children));
}), ca = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", da = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var fa = Object.defineProperty, ha = (e, t) => fa(e, "name", { value: t, configurable: !0 });
const pa = ha((e) => p.jsx(Ee, { light: da, dark: ca, ...e }), "EntityIcon"), ma = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", ga = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var xa = Object.defineProperty, ya = (e, t) => xa(e, "name", { value: t, configurable: !0 });
const ba = ya((e) => p.jsx(Ee, { light: ga, dark: ma, ...e }), "EntityNonPersistableIcon"), ka = [
  ["#DCEEFE", "#0123C6"],
  // Blue
  ["#E2E0FC", "#4701D4"],
  // Purple
  ["#F7E0FF", "#780194"],
  // Violet
  ["#FFE5E9", "#9E051B"],
  // Red
  ["#FFEBDC", "#7D1401"],
  // Orange
  ["#FFF2CF", "#803600"],
  // Yellow
  ["#E1FAE1", "#076407"],
  // Green
  ["#0123C6", "#DCEEFE"],
  // Dark Blue
  ["#4701D4", "#E2E0FC"],
  // Dark Purple
  ["#780194", "#F7E0FF"],
  // Dark Violet
  ["#9E051B", "#FFE5E9"],
  // Dark Red
  ["#7D1401", "#FFEBDC"],
  // Dark Orange
  ["#803600", "#FFF2CF"],
  // Dark Yellow
  ["#076407", "#E1FAE1"]
  // Dark Green
], wa = [
  ["#101374", "#8AC4FF"],
  // Dark Blue
  ["#2A0B66", "#9782FF"],
  // Dark Purple
  ["#4B1352", "#E599FF"],
  // Dark Violet
  ["#5C1028", "#FF9B99"],
  // Dark Red
  ["#5C2315", "#FFD5BB"],
  // Dark Orange
  ["#5C2E14", "#FFEEBA"],
  // Dark Yellow
  ["#124112", "#C0FAC0"],
  // Dark Green
  ["#8AC4FF", "#101374"],
  // Blue
  ["#9782FF", "#2A0B66"],
  // Purple
  ["#E599FF", "#4B1352"],
  // Violet
  ["#FF9B99", "#5C1028"],
  // Red
  ["#FFD5BB", "#5C2315"],
  // Orange
  ["#FFEEBA", "#5C2E14"],
  // Yellow
  ["#C0FAC0", "#124112"]
  // Green
], Ca = (e, t) => async (n) => {
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, n);
  } catch (r) {
    await e.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function va(e, t) {
  const n = /\{\{([^}\s{]+)\}\}/g, r = t.systemPrompt.match(n) || [], i = t.userPrompt && t.usageType === ue.Task ? t.userPrompt.match(n) || [] : [], l = [...r, ...i];
  if (l.length === 0)
    return Promise.resolve([]);
  const o = l.map((c) => c.replace(/\{\{|\}\}/g, "")), a = [...new Set(o)], s = t.variables, u = a.map((c) => s.find((h) => h.key === c) || {
    key: c,
    isAttributeInEntity: !1
  });
  return zn(e, u, t);
}
const Sa = (e, t) => e.map((n, r) => ({
  pattern: new RegExp("\\{\\{" + n.key + "\\}\\}", "g"),
  style: {
    ...Ta(r, gi(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function Ta(e, t) {
  const n = t ? wa : ka;
  return {
    color: n[e % n.length][1],
    backgroundColor: n[e % n.length][0],
    borderColor: n[e % n.length][1]
  };
}
async function zn(e, t, n) {
  const r = await Li(e, n), i = await Di(n, e);
  return t.map((l) => {
    const o = i.includes(l.key);
    return {
      ...l,
      isAttributeInEntity: r === !1 || o
    };
  });
}
const Li = async (e, t) => t.entity ? await _t(e, t.entity.qualifiedName) !== void 0 : !0, Ea = async (e, t) => t.variables.length === 0 ? [] : !t.entity || !await _t(e, t.entity.qualifiedName) ? [] : t.variables.filter((n) => !n.isAttributeInEntity).map((n) => n.key), Di = async (e, t) => {
  if (!e.entity)
    return [];
  const n = await _t(t, e.entity.qualifiedName);
  return n ? (await Do(t, n)).sort() : [];
}, Ia = async (e, t) => (await Di(t, e)).filter((r) => !t.variables.find((i) => i.key === r)), Aa = async (e, t, n, r) => {
  const i = n.reduce((s, u) => (s[u.key] = u.value, s), {}), l = r == null ? void 0 : r.filter((s) => s.type === ke.Agent || s.type === ke.User).map((s) => ({
    type: s.type,
    text: s.type === ke.Agent ? s.response.responseText : s.text
  })), o = {
    documentId: t,
    variables: JSON.stringify(i),
    messages: JSON.stringify(l || [])
  };
  return await e.runtime.controller.executePreviewAction(
    "preview_agent_test",
    o
  );
}, Pa = async (e) => {
  try {
    const t = await e.runtime.controller.executePreviewAction("preview_runtime_test", {});
    return !(typeof t == "object" && t !== null && "error" in t && t.error === Lo);
  } catch {
    return !0;
  }
}, La = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", Da = "Test action failed. Please check the runtime logs for more details.", Ra = (e, t, n) => {
  const [r, i] = R.useState(void 0), [l, o] = R.useState(!1), [a, s] = R.useState(!1), [u, c] = R.useState(void 0), d = R.useCallback(
    async (f, x) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: Ro,
          title: "App is not running",
          message: "Please run the app to use the playground.",
          displayDurationInSeconds: 5
        });
        return;
      }
      o(!0), i(void 0), s(!1), c(void 0);
      try {
        const b = await Aa(e, t, f, x);
        if (b === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in b && b.message === Fo) {
          s(!0), c({ name: "Error", message: La, link: jo });
          return;
        }
        i(b);
      } catch {
        s(!0), c({ name: "Error", message: Da });
      } finally {
        o(!1);
      }
    },
    [e, n, t]
  ), h = R.useCallback(() => {
    i(void 0), o(!1), s(!1), c(void 0);
  }, []);
  return { data: r, isPending: l, isError: a, error: u, execute: d, reset: h };
}, ar = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt" || t === "usageType") && (l.variables = await va(e, l)), r(l), l;
}, Fa = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const l = await zn(e, t.variables, i);
    i = { ...i, variables: l }, n(i);
  }
  return i;
}, ja = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Mo }
  });
  let i;
  return r.status === "ok" && (i = {
    ...t,
    model: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, model: void 0 }), i && n(i), i;
}, it = async (e, t, n) => {
  switch (e) {
    case "model": {
      if (!n.model)
        return "Please select a model.";
      const r = await Ci(t, n.model);
      if (!r)
        return "This document is invalid. Make sure to select a document of type Model.";
      if (r.excluded)
        return "The selected model is currently excluded from the project. Please include it to use it as agent's model.";
      break;
    }
    case "entity": {
      if (!n.entity) {
        if (n.variables.length > 0)
          return "Please select an entity.";
        break;
      }
      const [r, i] = n.entity.qualifiedName.split(".");
      if (!r || !i)
        return "The selected entity is not valid.";
      if (!await Li(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "usageType":
      if (!n.usageType)
        return "Please select an agent type.";
      break;
    case "userPrompt":
      if (!n.userPrompt && n.usageType === ue.Task)
        return "Please provide a user prompt.";
      break;
    case "toolChoice":
      if (n.toolChoice === ze.Tool) {
        if (!n.toolChoiceToolName)
          return "Please select a tool to use as tool choice.";
        const r = n.tools.find((i) => i.name === n.toolChoiceToolName);
        if (!r)
          return "The selected tool is not in the tools list. Please update your tool selection or change the tool choice.";
        if (!r.enabled)
          return "The selected tool is not active. Please activate it, or select a different tool.";
      }
      break;
    default:
      return !0;
  }
  return !0;
}, Ma = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await Ci(e, t))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, $a = async (e, t, n, r) => {
  const i = await e.ui.dialogs.showModal(
    {
      title: "Model settings",
      contentSize: { height: 400, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "modelSettingsEdit",
      queryParams: {
        agentDocumentId: r
      }
    }
  );
  let l;
  return i && (l = i), l && n(l), l;
}, sr = async (e, t, n, r, i, l) => {
  const o = l && n.tools ? n.tools.find((s) => s.id === l) : void 0, a = await e.ui.dialogs.showModal(
    {
      title: o ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "toolEdit",
      queryParams: {
        toolId: l || "",
        agentDocumentId: i
      }
    }
  );
  if (a !== null) {
    const s = a;
    let u;
    const c = { ...n };
    return l && n.tools ? (u = n.tools.map((d) => d.id === l ? s : d), n.toolChoiceToolName && n.toolChoiceToolName === (o == null ? void 0 : o.name) && s.name !== (o == null ? void 0 : o.name) && (c.toolChoiceToolName = s.name)) : u = [...n.tools || [], s], u.sort((d, h) => d.name.localeCompare(h.name)), c.tools = u, r(c), c;
  } else
    return null;
}, Ba = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const l = t.tools.filter((a) => a.id !== r), o = { ...t, tools: l };
  return n(o), o;
}, ur = async (e, t, n, r, i, l) => {
  const o = n.knowledgebaseTools || [], a = l ? o.find((u) => u.id === l) : void 0, s = await e.ui.dialogs.showModal(
    {
      title: a ? "Edit knowledge base" : "Add knowledge base",
      contentSize: { height: 541, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "knowledgebaseToolEdit",
      queryParams: {
        toolId: l || "",
        agentDocumentId: i
      }
    }
  );
  if (s !== null) {
    const u = s;
    let c;
    l ? c = o.map((h) => h.id === l ? u : h) : c = [...o, u], c.sort((h, f) => h.name.localeCompare(f.name));
    const d = { ...n, knowledgebaseTools: c };
    return r(d), d;
  }
  return null;
}, za = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to remove this knowledge base from the agent?"
  }) === !1)
    return;
  const o = (t.knowledgebaseTools || []).filter((s) => s.id !== r), a = { ...t, knowledgebaseTools: o };
  return n(a), a;
}, Oa = async (e, t, n) => {
  const r = {
    ...e,
    toolChoice: n ?? void 0,
    // Clear toolChoiceToolName if toolChoice is not "Tool"
    toolChoiceToolName: n === ze.Tool ? e.toolChoiceToolName : void 0
  };
  return t(r), r;
}, _a = async (e, t, n) => {
  if (e.toolChoice !== ze.Tool)
    return;
  const r = { ...e, toolChoiceToolName: n ?? void 0 };
  return t(r), r;
};
var Va = Object.defineProperty, Na = (e, t) => Va(e, "name", { value: t, configurable: !0 });
const Ha = Na((e) => p.jsx(qa, { ...e }), "RadioButton"), qa = U(ua)`
    display: flex;
    align-items: center;
    gap: ${X.spacing4};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    cursor: pointer;

    &[data-disabled] {
        opacity: 50%;
        cursor: default;
    }

    &::before {
        content: "";
        display: block;
        box-sizing: border-box;
        height: 14px;
        width: 14px;
        padding: 3px;
        border: ${X.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorUnselected};
        margin: ${X.spacing1};
        border-radius: 50%;
        background-clip: content-box;
    }

    &[data-selected]::before {
        background-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
    }

    &[data-selected]::before,
    &[data-hovered]::before,
    &[data-focused]::before,
    &[data-focus-visible]::before {
        border: ${X.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorSelected};
    }
`;
var Ua = Object.defineProperty, Wa = (e, t) => Ua(e, "name", { value: t, configurable: !0 });
const Za = Wa(({ orientation: e = "horizontal", label: t, description: n, children: r, ...i }) => {
  const { isInvalid: l, validate: o, validationError: a } = ho(i);
  return p.jsx(Ri, { orientation: e, ...i, isInvalid: l, validate: o, children: p.jsx(po, { label: t, description: n, realtimeValidationError: a, children: p.jsx(Ka, { children: r }) }) });
}, "RadioButtonGroup"), Ri = U(sa)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, Ka = U.div`
    display: flex;
    flex-direction: row;
    gap: ${X.spacing8};
    padding: ${X.spacing4} 0;

    ${Ri}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`;
function cr(e, t) {
  const n = R.useRef(/* @__PURE__ */ new Map());
  R.useEffect(() => {
    if (!e) return;
    const r = n.current, i = new Map(e.map((l) => [l.id, l.document.qualifiedName]));
    if (r.size === 0) {
      n.current = i;
      return;
    }
    t((l) => {
      const o = new Map(l);
      return e.forEach((a) => {
        if (!l.has(a.id))
          o.set(a.id, "valid");
        else {
          const s = r.get(a.id), u = i.get(a.id);
          s !== void 0 && u !== void 0 && s !== u && o.set(a.id, "valid");
        }
      }), o;
    }), n.current = i;
  }, [e, t]);
}
const Ga = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Xa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ya = Object.defineProperty, Qa = (e, t) => Ya(e, "name", { value: t, configurable: !0 });
const Fi = Qa((e) => p.jsx(Ee, { light: Xa, dark: Ga, ...e }), "AppSelectorNoVersionIcon"), Ja = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", es = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ts = Object.defineProperty, ns = (e, t) => ts(e, "name", { value: t, configurable: !0 });
const ji = ns((e) => p.jsx(Ee, { light: es, dark: Ja, ...e }), "EditIcon"), rs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", is = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ls = Object.defineProperty, os = (e, t) => ls(e, "name", { value: t, configurable: !0 });
const Mi = os((e) => p.jsx(Ee, { light: is, dark: rs, ...e }), "PageIcon"), as = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", ss = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var us = Object.defineProperty, cs = (e, t) => us(e, "name", { value: t, configurable: !0 });
const $i = cs((e) => p.jsx(Ee, { light: ss, dark: as, ...e }), "SyncIcon"), ds = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", fs = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var hs = Object.defineProperty, ps = (e, t) => hs(e, "name", { value: t, configurable: !0 });
const ms = ps((e) => p.jsx(Ee, { light: fs, dark: ds, ...e }), "CheckCheckboxIcon");
var gs = Object.defineProperty, xs = (e, t) => gs(e, "name", { value: t, configurable: !0 });
const Bi = xs(({ children: e, ...t }) => p.jsx(bs, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => p.jsxs(p.Fragment, { children: [p.jsxs(zi, { $isSelected: r, $isIndeterminate: n, children: [n && p.jsx(ys, {}), r && !n && p.jsx(ms, {})] }), e] }) }), "Checkbox"), zi = U.div`
    width: ${X.size12};
    height: ${X.size12};
    margin: ${X.spacing2};
    border-radius: ${X.borderRadiusXs};
    border: ${X.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: n }) => t && !n ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, ys = U.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, bs = U(la)`
    cursor: pointer;
    display: flex;
    height: ${X.size16};
    gap: ${X.spacing4};
    line-height: ${X.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${zi} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${mo}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, ks = U(Bi)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, ws = ({
  agent: e,
  agentDocumentId: t,
  studioPro: n,
  componentName: r,
  updateStudioProDocument: i,
  onAgentChange: l,
  knowledgebaseToolValidations: o
}) => {
  const [a, s] = R.useState([]), u = R.useMemo(() => (e.knowledgebaseTools || []).map((T, S) => ({
    id: T.id ?? String(S),
    enabled: T.enabled,
    name: T.name,
    description: T.description || "",
    tool: T.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: c, sortProps: d } = Si(u), h = R.useCallback(
    (y) => {
      const T = o.get(y);
      return T === "invalid" ? /* @__PURE__ */ p.jsx($t, { icon: /* @__PURE__ */ p.jsx(xi, { title: "Tool invalid" }) }) : T === "syncing" ? /* @__PURE__ */ p.jsx($t, { icon: /* @__PURE__ */ p.jsx($i, { title: "Validating..." }) }) : null;
    },
    [o]
  ), f = R.useCallback(async () => {
    const y = await ur(
      n,
      r,
      e,
      i,
      t
    );
    y && l(y);
  }, [n, r, e, i, t, l]), x = R.useCallback(async () => {
    const y = e.knowledgebaseTools || [];
    if (a.length === 0 || y.length === 0)
      return;
    const T = a[0], S = await ur(
      n,
      r,
      e,
      i,
      t,
      T
    );
    S && l(S);
  }, [n, r, e, i, t, l, a]), b = R.useCallback(async () => {
    const y = e.knowledgebaseTools || [];
    if (a.length === 0 || y.length === 0)
      return;
    const T = a[0], S = await za(
      n,
      e,
      i,
      T
    );
    S && l(S);
  }, [e, i, l, a]), v = R.useCallback(
    async (y, T) => {
      const S = e.knowledgebaseTools || [];
      if (S.length === 0)
        return;
      const I = S.map(
        (w) => (w.id ?? "") === y ? { ...w, enabled: T } : w
      ), A = { ...e, knowledgebaseTools: I };
      i(A), l(A);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, i, l]
  );
  return /* @__PURE__ */ p.jsx(Oe, { label: "Knowledge bases", children: /* @__PURE__ */ p.jsx(
    Ti,
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
      data: c.map((y) => [
        { cellContent: h(y.id) },
        {
          cellContent: /* @__PURE__ */ p.jsx(
            ks,
            {
              "aria-label": "Enabled",
              isSelected: y.enabled,
              onChange: (T) => v(y.id, T)
            }
          )
        },
        { cellContent: y.name, tooltipText: y.name },
        { cellContent: y.description, tooltipText: y.description },
        {
          cellContent: /* @__PURE__ */ p.jsx(wi, { icon: $o, text: y.tool }),
          tooltipText: y.tool
        }
      ]),
      rowKey: (y, T) => {
        var S;
        return ((S = c[T]) == null ? void 0 : S.id) ?? String(T);
      },
      rowOpacity: (y) => {
        var T;
        return (T = c[y]) != null && T.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: a,
      onDoubleClick: x,
      onSelectionChange: s,
      ...d,
      toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ p.jsx(Mi, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: f
          }
        ),
        /* @__PURE__ */ p.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ p.jsx(ji, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: x,
            tooltip: "Edit selected knowledge base",
            isDisabled: a.length === 0
          }
        ),
        /* @__PURE__ */ p.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ p.jsx(Fi, {}),
            label: "Delete",
            "aria-label": "Remove selected knowledge base from agent",
            onPress: b,
            tooltip: "Remove selected knowledge base from agent",
            isDisabled: a.length === 0
          }
        )
      ] })
    }
  ) });
}, Cs = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ p.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: /* @__PURE__ */ p.jsx("path", { d: "M6 9l6 6 6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  }
), vs = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ p.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: /* @__PURE__ */ p.jsx("path", { d: "M9 6l6 6-6 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  }
), Ss = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: i,
    children: [
      /* @__PURE__ */ p.jsx("path", { d: "M15 16.57V8H17V15.43L21.51 18.14L20.49 19.86L15 16.57Z", fill: n }),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2 16C2 8.28 8.28 2 16 2C23.72 2 30 8.28 30 16C30 23.72 23.72 30 16 30C8.28 30 2 23.72 2 16ZM4 16C4 22.62 9.38 28 16 28C22.62 28 28 22.62 28 16C28 9.38 22.62 4 16 4C9.38 4 4 9.38 4 16Z",
          fill: n
        }
      )
    ]
  }
), Ts = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: [
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 7.50517V12.9988C4 12.9988 4.00012 13.0002 4.00089 13.0024C4.00189 13.0052 4.00358 13.0085 4.00578 13.0114L4.00827 13.0143L4.03042 13.0197L7.5 14.2844V8.84301L4 7.50517ZM8.5 8.84301V14.2844L11.9696 13.0197L11.9917 13.0143L11.9942 13.0114C11.9964 13.0085 11.9981 13.0052 11.9991 13.0024C11.9999 13.0002 12 12.9988 12 12.9988V7.50517L8.5 8.84301ZM8 7.96356L4.2628 6.53506L4.23081 6.52744C3.60002 6.37725 3 6.85752 3 7.49884V12.9988C3 13.4369 3.29207 13.8526 3.73507 13.9764L8 15.531L12.2649 13.9764C12.7079 13.8526 13 13.4369 13 12.9988V7.49884C13 6.85752 12.4 6.37725 11.7692 6.52744L11.7372 6.53506L8 7.96356Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.1785 9.81916L9.67852 10.3925L9.32148 9.45844L10.8215 8.88508L11.1785 9.81916ZM4.82149 9.81917L5.17853 8.88509L6.67853 9.45844L6.32149 10.3925L4.82149 9.81917Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.1785 12.1671L9.67851 12.7404L9.32147 11.8063L10.8215 11.233L11.1785 12.1671ZM4.82148 12.1671L5.17852 11.233L6.67852 11.8063L6.32148 12.7404L4.82148 12.1671Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 4C9.067 4 7.5 2.433 7.5 0.5H8.5C8.5 1.88071 9.61929 3 11 3V4Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.5 0.5C8.5 2.433 6.933 4 5 4V3C6.38071 3 7.5 1.88071 7.5 0.5H8.5Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 3C6.933 3 8.5 4.567 8.5 6.5H7.5C7.5 5.11929 6.38071 4 5 4V3Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M7.5 6.5C7.5 4.567 9.067 3 11 3V4C9.61929 4 8.5 5.11929 8.5 6.5H7.5Z",
          fill: "#146FF4"
        }
      )
    ]
  }
), Es = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: [
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.0733 3.95252C14.6707 3.56066 14.131 3.3414 13.5691 3.3414C13.0073 3.3414 12.4676 3.56066 12.065 3.95252L4.04331 11.8192C3.90907 11.9497 3.72926 12.0227 3.54206 12.0227C3.35486 12.0227 3.17504 11.9497 3.04081 11.8192C2.97509 11.7553 2.92285 11.6788 2.88718 11.5944C2.85151 11.5099 2.83313 11.4192 2.83313 11.3275C2.83313 11.2358 2.85151 11.1451 2.88718 11.0607C2.92285 10.9762 2.97509 10.8998 3.04081 10.8359L11.0625 2.96919C11.7335 2.31618 12.6328 1.95081 13.5691 1.95081C14.5055 1.95081 15.4048 2.31618 16.0758 2.96919C16.4641 3.34678 16.7574 3.81094 16.9318 4.32368C17.1062 4.83643 17.1567 5.38318 17.0791 5.91919C17.6223 5.84194 18.1759 5.89043 18.6973 6.06092C19.2187 6.2314 19.6941 6.51934 20.0866 6.90252L20.1283 6.94419C20.4569 7.26376 20.7181 7.64596 20.8965 8.0682C21.0748 8.49044 21.1667 8.94416 21.1667 9.40252C21.1667 9.86089 21.0748 10.3146 20.8965 10.7368C20.7181 11.1591 20.4569 11.5413 20.1283 11.8609L12.8733 18.975C12.8514 18.9963 12.834 19.0218 12.8221 19.0499C12.8102 19.078 12.8041 19.1082 12.8041 19.1388C12.8041 19.1693 12.8102 19.1995 12.8221 19.2277C12.834 19.2558 12.8514 19.2812 12.8733 19.3025L14.3633 20.7642C14.429 20.8281 14.4813 20.9045 14.5169 20.989C14.5526 21.0734 14.571 21.1642 14.571 21.2559C14.571 21.3475 14.5526 21.4383 14.5169 21.5227C14.4813 21.6072 14.429 21.6836 14.3633 21.7475C14.2291 21.878 14.0493 21.951 13.8621 21.951C13.6749 21.951 13.495 21.878 13.3608 21.7475L11.8708 20.2867C11.7173 20.1376 11.5953 19.9592 11.512 19.7621C11.4287 19.565 11.3858 19.3532 11.3858 19.1392C11.3858 18.9252 11.4287 18.7134 11.512 18.5163C11.5953 18.3192 11.7173 18.1408 11.8708 17.9917L19.1258 10.8767C19.3229 10.6849 19.4795 10.4556 19.5864 10.2022C19.6934 9.94888 19.7485 9.67668 19.7485 9.40169C19.7485 9.1267 19.6934 8.8545 19.5864 8.60117C19.4795 8.34783 19.3229 8.11849 19.1258 7.92669L19.0841 7.88586C18.6819 7.4944 18.143 7.27516 17.5817 7.27469C17.0205 7.27423 16.4812 7.49257 16.0783 7.88336L10.1016 13.745L10.1 13.7467L10.0183 13.8275C9.88404 13.9582 9.70404 14.0314 9.51664 14.0314C9.32925 14.0314 9.14925 13.9582 9.01498 13.8275C8.94926 13.7636 8.89702 13.6872 8.86135 13.6027C8.82568 13.5183 8.8073 13.4275 8.8073 13.3359C8.8073 13.2442 8.82568 13.1534 8.86135 13.069C8.89702 12.9845 8.94926 12.9081 9.01498 12.8442L15.0758 6.90002C15.2723 6.7081 15.4284 6.47878 15.5349 6.22558C15.6414 5.97238 15.6962 5.70043 15.696 5.42575C15.6957 5.15106 15.6405 4.8792 15.5336 4.62618C15.4266 4.37317 15.2701 4.14412 15.0733 3.95252Z",
          fill: "#845EFF"
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M14.0708 5.91914C14.1365 5.85522 14.1887 5.77878 14.2244 5.69433C14.2601 5.60989 14.2785 5.51914 14.2785 5.42747C14.2785 5.3358 14.2601 5.24505 14.2244 5.16061C14.1887 5.07616 14.1365 4.99972 14.0708 4.9358C13.9365 4.80508 13.7565 4.73193 13.5691 4.73193C13.3817 4.73193 13.2017 4.80508 13.0675 4.9358L7.13495 10.7541C6.80636 11.0737 6.54516 11.4559 6.36681 11.8781C6.18845 12.3004 6.09656 12.7541 6.09656 13.2125C6.09656 13.6708 6.18845 14.1246 6.36681 14.5468C6.54516 14.969 6.80636 15.3512 7.13495 15.6708C7.80607 16.3236 8.70538 16.6889 9.64162 16.6889C10.5779 16.6889 11.4772 16.3236 12.1483 15.6708L18.0816 9.85247C18.1473 9.78856 18.1996 9.71212 18.2352 9.62767C18.2709 9.54322 18.2893 9.45248 18.2893 9.3608C18.2893 9.26913 18.2709 9.17839 18.2352 9.09394C18.1996 9.00949 18.1473 8.93305 18.0816 8.86914C17.9473 8.73841 17.7674 8.66527 17.58 8.66527C17.3926 8.66527 17.2126 8.73841 17.0783 8.86914L11.1458 14.6875C10.7431 15.0793 10.2035 15.2986 9.64162 15.2986C9.07977 15.2986 8.5401 15.0793 8.13745 14.6875C7.9404 14.4957 7.78377 14.2663 7.67683 14.013C7.56988 13.7597 7.51478 13.4875 7.51478 13.2125C7.51478 12.9375 7.56988 12.6653 7.67683 12.4119C7.78377 12.1586 7.9404 11.9293 8.13745 11.7375L14.0708 5.91914Z",
          fill: "#845EFF"
        }
      )
    ]
  }
), Is = ({
  width: e = "1em",
  height: t = "1em",
  stroke: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ p.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: i,
    children: /* @__PURE__ */ p.jsx(
      "path",
      {
        d: "M3.5 13.05V2.95001C3.5 2.60501 3.85 2.39001 4.125 2.56001L12.29 7.61001C12.57 7.78501 12.57 8.21501 12.29 8.38501L4.125 13.44C3.845 13.615 3.5 13.395 3.5 13.05Z",
        stroke: n,
        strokeMiterlimit: "10"
      }
    )
  }
), As = ({
  width: e = "8",
  height: t = "12",
  fill: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ p.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: i,
    children: /* @__PURE__ */ p.jsx("path", { d: "M0 3.85L0.71 4.56L3.355 1.91V11.705H4.355V1.91L7 4.56L7.71 3.85L3.855 0L0 3.85Z", fill: n })
  }
), Ps = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: i,
    children: [
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.7559 10.083L19.5957 12H21.2598V14H19.4297L19.0957 18H20.7598V20H18.9297L18.7559 22.083L16.7637 21.917L16.9238 20H14.4297L14.2559 22.083L12.2637 21.917L12.4238 20H10.7598V18H12.5898L12.9238 14H11.2598V12H13.0898L13.2637 9.91699L15.2559 10.083L15.0957 12H17.5898L17.7637 9.91699L19.7559 10.083ZM14.5957 18H17.0898L17.4238 14H14.9297L14.5957 18Z",
          fill: n
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M30 11.9141L29.707 12.207L29.4648 12.4502C28.529 13.386 28 14.6713 28 16C28 17.3287 28.529 18.614 29.4648 19.5498L29.707 19.793L30 20.0859V26H2V20.0859L2.29297 19.793L2.53516 19.5498L2.70605 19.3711C3.5354 18.4538 4 17.2458 4 16C4 14.7542 3.5354 13.5462 2.70605 12.6289L2.53516 12.4502L2.29297 12.207L2 11.9141V6H30V11.9141ZM4 11.0869C5.28288 12.3967 6 14.17 6 16C6 17.8298 5.28257 19.6023 4 20.9121V24H28V20.9121C26.7174 19.6023 26 17.8298 26 16C26 14.17 26.7171 12.3967 28 11.0869V8H4V11.0869Z",
          fill: n
        }
      )
    ]
  }
), Ls = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "#146FF4",
  className: r,
  style: i
}) => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: i,
    children: [
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.99 11.3025L20.5499 16.005L12.99 20.7074V11.3025ZM13.1594 9.09996C12.1658 8.73983 10.99 9.42704 10.99 10.6V21.4C10.99 22.7094 12.4421 23.4114 13.481 22.7574L22.2952 17.2747L22.3021 17.2703C23.2226 16.6764 23.2226 15.3335 22.3021 14.7397L22.2952 14.7352L13.2356 9.09996H13.1594Z",
          fill: n
        }
      ),
      /* @__PURE__ */ p.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4ZM2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30C8.26801 30 2 23.732 2 16Z",
          fill: n
        }
      )
    ]
  }
), Ds = U.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, Rs = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ p.jsx(yi, { src: t, alt: o }) : t;
  return /* @__PURE__ */ p.jsx(go, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ p.jsxs(Ds, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, dr = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], Fs = ({
  onSubmit: e,
  disabled: t,
  value: n,
  updateValue: r,
  children: i,
  id: l = "AgentEditorChatInput",
  isLoading: o
}) => {
  const a = R.useCallback(
    async (u) => {
      if (u.key === "Enter") {
        if (u.shiftKey) return;
        u.preventDefault(), await e();
      }
    },
    [e]
  ), s = R.useCallback(
    (u) => {
      r(u.currentTarget.value), u.currentTarget.style.height = "0px", u.currentTarget.style.height = u.currentTarget.scrollHeight + 2 + "px";
    },
    [r]
  );
  return /* @__PURE__ */ p.jsxs(Ms, { children: [
    /* @__PURE__ */ p.jsx(
      js,
      {
        id: l,
        value: n,
        onKeyDown: a,
        onChange: s,
        placeholder: t && !o ? "Save your changes and run the app to enable chat" : "How can I help you?",
        disabled: t || o,
        tabIndex: 1,
        onDragOver: (u) => u.preventDefault(),
        onDrop: (u) => u.preventDefault()
      }
    ),
    /* @__PURE__ */ p.jsx(jt, { children: i })
  ] });
}, js = U(xo)`
    min-height: 58px;
    max-height: 106px;
    padding: ${X.spacing8};
`, jt = U.div`
    border: ${X.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    border-top: 0;
    padding: ${X.spacing4} ${X.spacing8} ${X.spacing8};
    border-radius: 0 0 ${X.borderRadiusXs} ${X.borderRadiusXs};
    margin-top: ${X.spacing0};
    background-color: transparent;
`, Ms = U.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border-radius: ${X.borderRadiusXs};

    textarea {
        background-color: transparent;
        border-bottom: 0;
        border-radius: ${X.borderRadiusXs} ${X.borderRadiusXs} 0 0;

        // Make sure the fake inside area (where the buttons are) of the textarea gets the same hover/active styling
        &:hover:enabled + ${jt} {
            border-color: ${({ theme: e }) => e.colorsBorderInputHover};
        }

        &:active:enabled + ${jt}, &:focus:enabled + ${jt} {
            border-color: ${({ theme: e }) => e.colorsBorderActive};
        }

        // Make sure the form background changes when disabled
        &:disabled {
            background-color: transparent;
        }
    }

    &:has(textarea:disabled) {
        background-color: ${({ theme: e }) => e.colorsBackgroundDefault};
        opacity: 0.6;
    }
`, $s = ({ onSubmit: e, disabled: t, userPrompt: n, updateUserPrompt: r, isLoading: i }) => /* @__PURE__ */ p.jsx(Bs, { children: /* @__PURE__ */ p.jsx(
  Fs,
  {
    onSubmit: e,
    disabled: t,
    value: n,
    updateValue: r,
    isLoading: i,
    children: /* @__PURE__ */ p.jsx(zs, { children: /* @__PURE__ */ p.jsx(
      Os,
      {
        icon: /* @__PURE__ */ p.jsx(As, {}),
        "aria-label": "Send message",
        isDisabled: n.trim() === "" || t || i,
        onPress: e
      }
    ) })
  }
) }), Bs = U.section`
    flex-basis: 80px;
`, zs = U.div`
    display: flex;
    justify-content: flex-end;
    gap: ${X.spacing4};
    align-items: center;
`, Os = U(bi)`
    background-color: ${({ theme: e }) => e.colorsBackgroundButtonPrimaryButtonDefault};
    color: ${({ theme: e }) => e.colorsAccentWhite};
    border-radius: 4px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
        background-color: ${({ theme: e }) => e.colorsBackgroundButtonPrimaryButtonHover};
    }

    &:active:not(:disabled) {
        background-color: ${({ theme: e }) => e.colorsBackgroundButtonPrimaryButtonHover};
    }

    &:disabled {
        opacity: 0.5;
    }
`, _s = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%209.5H10C11.655%209.5%2013%2010.845%2013%2012.5V14.5H3V12.5C3%2010.845%204.345%209.5%206%209.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8.5%201.5H7.5C6.67157%201.5%206%202.17157%206%203V5C6%205.82843%206.67157%206.5%207.5%206.5H8.5C9.32843%206.5%2010%205.82843%2010%205V3C10%202.17157%209.32843%201.5%208.5%201.5Z'%20stroke='%23A4A4A4'%20stroke-linejoin='round'/%3e%3c/svg%3e", Vs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%209.5H10C11.655%209.5%2013%2010.845%2013%2012.5V14.5H3V12.5C3%2010.845%204.345%209.5%206%209.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8.5%201.5H7.5C6.67157%201.5%206%202.17157%206%203V5C6%205.82843%206.67157%206.5%207.5%206.5H8.5C9.32843%206.5%2010%205.82843%2010%205V3C10%202.17157%209.32843%201.5%208.5%201.5Z'%20stroke='%23535965'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Ns = Object.defineProperty, Hs = (e, t) => Ns(e, "name", { value: t, configurable: !0 });
const qs = Hs((e) => p.jsx(Ee, { light: Vs, dark: _s, ...e }), "UserIcon"), Us = U.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, kn = ({ name: e, timestamp: t }) => /* @__PURE__ */ p.jsxs(De, { children: [
  e === "You" ? /* @__PURE__ */ p.jsx(qs, {}) : /* @__PURE__ */ p.jsx(yi, { src: Bo }),
  /* @__PURE__ */ p.jsx(qe, { children: e }),
  /* @__PURE__ */ p.jsx(Us, { children: new Date(t).toLocaleString() })
] }), Ws = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Zs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ks = Object.defineProperty, Gs = (e, t) => Ks(e, "name", { value: t, configurable: !0 });
const Xs = Gs((e) => p.jsx(Ee, { light: Zs, dark: Ws, ...e }), "CheckIcon"), Ys = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Qs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Js = Object.defineProperty, eu = (e, t) => Js(e, "name", { value: t, configurable: !0 });
const tu = eu((e) => p.jsx(Ee, { light: Qs, dark: Ys, ...e }), "CopyIcon"), Oi = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, Yt = U.span`
    font-size: 10px;
    color: ${({ theme: e }) => gi(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, nu = U(De)`
    margin-left: auto;
`, ru = U.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, _i = ({
  totalTokens: e,
  requestTokens: t,
  responseTokens: n,
  duration: r,
  handleCopyClick: i
}) => {
  const [l, o] = R.useState(!1), a = R.useRef(null);
  R.useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const s = () => {
    i(), o(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => o(!1), 1e3);
  };
  return /* @__PURE__ */ p.jsxs(De, { alignItems: "center", children: [
    /* @__PURE__ */ p.jsxs(De, { gap: 4, title: "Total tokens", children: [
      /* @__PURE__ */ p.jsx(Ps, {}),
      e && /* @__PURE__ */ p.jsx(Yt, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ p.jsx(Yt, { title: "(Request tokens / Response tokens)", children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ p.jsxs(De, { gap: 4, title: "Duration", children: [
      /* @__PURE__ */ p.jsx(Ss, {}),
      r && /* @__PURE__ */ p.jsx(Yt, { children: Oi(r) })
    ] }),
    /* @__PURE__ */ p.jsxs(nu, { children: [
      /* @__PURE__ */ p.jsx(bi, { icon: l ? /* @__PURE__ */ p.jsx(Xs, {}) : /* @__PURE__ */ p.jsx(tu, {}), onPress: s }),
      l && /* @__PURE__ */ p.jsx(ru, { children: "Copied to clipboard" })
    ] })
  ] });
}, iu = U.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, lu = U.div`
    padding-bottom: 8px;
`, ou = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = R.useState(n), l = R.useId();
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs(iu, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ p.jsx(Cs, {}) : /* @__PURE__ */ p.jsx(vs, {}),
      e
    ] }),
    r && /* @__PURE__ */ p.jsx(lu, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, au = (e) => "kbDisplayName" in e, su = (e) => "serverName" in e, uu = U.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, cu = U.div`
    font-size: 16px;
`, Vi = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return au(n) ? (i = /* @__PURE__ */ p.jsx(Ts, {}), r = n.displayName) : su(n) ? (i = /* @__PURE__ */ p.jsx(Es, {}), r = n.toolName) : (i = /* @__PURE__ */ p.jsx(Ls, {}), r = n.displayName), /* @__PURE__ */ p.jsxs(De, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ p.jsx(cu, { children: i }),
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("div", { children: r }),
        /* @__PURE__ */ p.jsx(uu, { children: Oi(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ p.jsx(De, { marginTop: 8, children: /* @__PURE__ */ p.jsx(ou, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, du = yo`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, fu = U.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, Qt = U.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${du} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, Ni = () => /* @__PURE__ */ p.jsxs(fu, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ p.jsx(Qt, { delay: "0s" }),
  /* @__PURE__ */ p.jsx(Qt, { delay: "0.2s" }),
  /* @__PURE__ */ p.jsx(Qt, { delay: "0.4s" })
] });
function hu(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const pu = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, mu = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, gu = {};
function fr(e, t) {
  return (gu.jsx ? mu : pu).test(e);
}
const xu = /[ \t\n\f\r]/g;
function yu(e) {
  return typeof e == "object" ? e.type === "text" ? hr(e.value) : !1 : hr(e);
}
function hr(e) {
  return e.replace(xu, "") === "";
}
class gt {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
gt.prototype.normal = {};
gt.prototype.property = {};
gt.prototype.space = void 0;
function Hi(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new gt(n, r, t);
}
function wn(e) {
  return e.toLowerCase();
}
class de {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
de.prototype.attribute = "";
de.prototype.booleanish = !1;
de.prototype.boolean = !1;
de.prototype.commaOrSpaceSeparated = !1;
de.prototype.commaSeparated = !1;
de.prototype.defined = !1;
de.prototype.mustUseProperty = !1;
de.prototype.number = !1;
de.prototype.overloadedBoolean = !1;
de.prototype.property = "";
de.prototype.spaceSeparated = !1;
de.prototype.space = void 0;
let bu = 0;
const H = We(), ee = We(), Cn = We(), P = We(), G = We(), Qe = We(), pe = We();
function We() {
  return 2 ** ++bu;
}
const vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: H,
  booleanish: ee,
  commaOrSpaceSeparated: pe,
  commaSeparated: Qe,
  number: P,
  overloadedBoolean: Cn,
  spaceSeparated: G
}, Symbol.toStringTag, { value: "Module" })), Jt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(vn)
);
class On extends de {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let l = -1;
    if (super(t, n), pr(this, "space", i), typeof r == "number")
      for (; ++l < Jt.length; ) {
        const o = Jt[l];
        pr(this, Jt[l], (r & vn[o]) === vn[o]);
      }
  }
}
On.prototype.defined = !0;
function pr(e, t, n) {
  n && (e[t] = n);
}
function tt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new On(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[wn(r)] = r, n[wn(l.attribute)] = r;
  }
  return new gt(t, n, e.space);
}
const qi = tt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ee,
    ariaAutoComplete: null,
    ariaBusy: ee,
    ariaChecked: ee,
    ariaColCount: P,
    ariaColIndex: P,
    ariaColSpan: P,
    ariaControls: G,
    ariaCurrent: null,
    ariaDescribedBy: G,
    ariaDetails: null,
    ariaDisabled: ee,
    ariaDropEffect: G,
    ariaErrorMessage: null,
    ariaExpanded: ee,
    ariaFlowTo: G,
    ariaGrabbed: ee,
    ariaHasPopup: null,
    ariaHidden: ee,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: G,
    ariaLevel: P,
    ariaLive: null,
    ariaModal: ee,
    ariaMultiLine: ee,
    ariaMultiSelectable: ee,
    ariaOrientation: null,
    ariaOwns: G,
    ariaPlaceholder: null,
    ariaPosInSet: P,
    ariaPressed: ee,
    ariaReadOnly: ee,
    ariaRelevant: null,
    ariaRequired: ee,
    ariaRoleDescription: G,
    ariaRowCount: P,
    ariaRowIndex: P,
    ariaRowSpan: P,
    ariaSelected: ee,
    ariaSetSize: P,
    ariaSort: null,
    ariaValueMax: P,
    ariaValueMin: P,
    ariaValueNow: P,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Ui(e, t) {
  return t in e ? e[t] : t;
}
function Wi(e, t) {
  return Ui(e, t.toLowerCase());
}
const ku = tt({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Qe,
    acceptCharset: G,
    accessKey: G,
    action: null,
    allow: null,
    allowFullScreen: H,
    allowPaymentRequest: H,
    allowUserMedia: H,
    alt: null,
    as: null,
    async: H,
    autoCapitalize: null,
    autoComplete: G,
    autoFocus: H,
    autoPlay: H,
    blocking: G,
    capture: null,
    charSet: null,
    checked: H,
    cite: null,
    className: G,
    cols: P,
    colSpan: null,
    content: null,
    contentEditable: ee,
    controls: H,
    controlsList: G,
    coords: P | Qe,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: H,
    defer: H,
    dir: null,
    dirName: null,
    disabled: H,
    download: Cn,
    draggable: ee,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: H,
    formTarget: null,
    headers: G,
    height: P,
    hidden: Cn,
    high: P,
    href: null,
    hrefLang: null,
    htmlFor: G,
    httpEquiv: G,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: H,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: H,
    itemId: null,
    itemProp: G,
    itemRef: G,
    itemScope: H,
    itemType: G,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: H,
    low: P,
    manifest: null,
    max: null,
    maxLength: P,
    media: null,
    method: null,
    min: null,
    minLength: P,
    multiple: H,
    muted: H,
    name: null,
    nonce: null,
    noModule: H,
    noValidate: H,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: H,
    optimum: P,
    pattern: null,
    ping: G,
    placeholder: null,
    playsInline: H,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: H,
    referrerPolicy: null,
    rel: G,
    required: H,
    reversed: H,
    rows: P,
    rowSpan: P,
    sandbox: G,
    scope: null,
    scoped: H,
    seamless: H,
    selected: H,
    shadowRootClonable: H,
    shadowRootDelegatesFocus: H,
    shadowRootMode: null,
    shape: null,
    size: P,
    sizes: null,
    slot: null,
    span: P,
    spellCheck: ee,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: P,
    step: null,
    style: null,
    tabIndex: P,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: H,
    useMap: null,
    value: ee,
    width: P,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: G,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: P,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: P,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: H,
    // Lists. Use CSS to reduce space between items instead
    declare: H,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: P,
    // `<img>` and `<object>`
    leftMargin: P,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: P,
    // `<body>`
    marginWidth: P,
    // `<body>`
    noResize: H,
    // `<frame>`
    noHref: H,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: H,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: H,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: P,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ee,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: P,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: P,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: H,
    disableRemotePlayback: H,
    prefix: null,
    property: null,
    results: P,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Wi
}), wu = tt({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: pe,
    accentHeight: P,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: P,
    amplitude: P,
    arabicForm: null,
    ascent: P,
    attributeName: null,
    attributeType: null,
    azimuth: P,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: P,
    by: null,
    calcMode: null,
    capHeight: P,
    className: G,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: P,
    diffuseConstant: P,
    direction: null,
    display: null,
    dur: null,
    divisor: P,
    dominantBaseline: null,
    download: H,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: P,
    enableBackground: null,
    end: null,
    event: null,
    exponent: P,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: P,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Qe,
    g2: Qe,
    glyphName: Qe,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: P,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: P,
    horizOriginX: P,
    horizOriginY: P,
    id: null,
    ideographic: P,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: P,
    k: P,
    k1: P,
    k2: P,
    k3: P,
    k4: P,
    kernelMatrix: pe,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: P,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: P,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: P,
    overlineThickness: P,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: P,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: G,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: P,
    pointsAtY: P,
    pointsAtZ: P,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: pe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: pe,
    rev: pe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: pe,
    requiredFeatures: pe,
    requiredFonts: pe,
    requiredFormats: pe,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: P,
    specularExponent: P,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: P,
    strikethroughThickness: P,
    string: null,
    stroke: null,
    strokeDashArray: pe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: P,
    strokeOpacity: P,
    strokeWidth: null,
    style: null,
    surfaceScale: P,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: pe,
    tabIndex: P,
    tableValues: null,
    target: null,
    targetX: P,
    targetY: P,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: pe,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: P,
    underlineThickness: P,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: P,
    values: null,
    vAlphabetic: P,
    vMathematical: P,
    vectorEffect: null,
    vHanging: P,
    vIdeographic: P,
    version: null,
    vertAdvY: P,
    vertOriginX: P,
    vertOriginY: P,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: P,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Ui
}), Zi = tt({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), Ki = tt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Wi
}), Gi = tt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Cu = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, vu = /[A-Z]/g, mr = /-[a-z]/g, Su = /^data[-\w.:]+$/i;
function Tu(e, t) {
  const n = wn(t);
  let r = t, i = de;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Su.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(mr, Iu);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!mr.test(l)) {
        let o = l.replace(vu, Eu);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = On;
  }
  return new i(r, t);
}
function Eu(e) {
  return "-" + e.toLowerCase();
}
function Iu(e) {
  return e.charAt(1).toUpperCase();
}
const Au = Hi([qi, ku, Zi, Ki, Gi], "html"), _n = Hi([qi, wu, Zi, Ki, Gi], "svg");
function Pu(e) {
  return e.join(" ").trim();
}
var Ke = {}, en, gr;
function Lu() {
  if (gr) return en;
  gr = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, s = `
`, u = "/", c = "*", d = "", h = "comment", f = "declaration";
  function x(v, y) {
    if (typeof v != "string")
      throw new TypeError("First argument must be a string");
    if (!v) return [];
    y = y || {};
    var T = 1, S = 1;
    function I(O) {
      var D = O.match(t);
      D && (T += D.length);
      var W = O.lastIndexOf(s);
      S = ~W ? O.length - W : S + O.length;
    }
    function A() {
      var O = { line: T, column: S };
      return function(D) {
        return D.position = new w(O), B(), D;
      };
    }
    function w(O) {
      this.start = O, this.end = { line: T, column: S }, this.source = y.source;
    }
    w.prototype.content = v;
    function L(O) {
      var D = new Error(
        y.source + ":" + T + ":" + S + ": " + O
      );
      if (D.reason = O, D.filename = y.source, D.line = T, D.column = S, D.source = v, !y.silent) throw D;
    }
    function F(O) {
      var D = O.exec(v);
      if (D) {
        var W = D[0];
        return I(W), v = v.slice(W.length), D;
      }
    }
    function B() {
      F(n);
    }
    function C(O) {
      var D;
      for (O = O || []; D = $(); )
        D !== !1 && O.push(D);
      return O;
    }
    function $() {
      var O = A();
      if (!(u != v.charAt(0) || c != v.charAt(1))) {
        for (var D = 2; d != v.charAt(D) && (c != v.charAt(D) || u != v.charAt(D + 1)); )
          ++D;
        if (D += 2, d === v.charAt(D - 1))
          return L("End of comment missing");
        var W = v.slice(2, D - 2);
        return S += 2, I(W), v = v.slice(D), S += 2, O({
          type: h,
          comment: W
        });
      }
    }
    function z() {
      var O = A(), D = F(r);
      if (D) {
        if ($(), !F(i)) return L("property missing ':'");
        var W = F(l), Y = O({
          type: f,
          property: b(D[0].replace(e, d)),
          value: W ? b(W[0].replace(e, d)) : d
        });
        return F(o), Y;
      }
    }
    function N() {
      var O = [];
      C(O);
      for (var D; D = z(); )
        D !== !1 && (O.push(D), C(O));
      return O;
    }
    return B(), N();
  }
  function b(v) {
    return v ? v.replace(a, d) : d;
  }
  return en = x, en;
}
var xr;
function Du() {
  if (xr) return Ke;
  xr = 1;
  var e = Ke && Ke.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.default = n;
  const t = e(Lu());
  function n(r, i) {
    let l = null;
    if (!r || typeof r != "string")
      return l;
    const o = (0, t.default)(r), a = typeof i == "function";
    return o.forEach((s) => {
      if (s.type !== "declaration")
        return;
      const { property: u, value: c } = s;
      a ? i(u, c, s) : c && (l = l || {}, l[u] = c);
    }), l;
  }
  return Ke;
}
var lt = {}, yr;
function Ru() {
  if (yr) return lt;
  yr = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(u) {
    return !u || n.test(u) || e.test(u);
  }, o = function(u, c) {
    return c.toUpperCase();
  }, a = function(u, c) {
    return "".concat(c, "-");
  }, s = function(u, c) {
    return c === void 0 && (c = {}), l(u) ? u : (u = u.toLowerCase(), c.reactCompat ? u = u.replace(i, a) : u = u.replace(r, a), u.replace(t, o));
  };
  return lt.camelCase = s, lt;
}
var ot, br;
function Fu() {
  if (br) return ot;
  br = 1;
  var e = ot && ot.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Du()), n = Ru();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, s) {
      a && s && (o[(0, n.camelCase)(a, l)] = s);
    }), o;
  }
  return r.default = r, ot = r, ot;
}
var ju = Fu();
const Mu = /* @__PURE__ */ ki(ju), Xi = Yi("end"), Vn = Yi("start");
function Yi(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function Qi(e) {
  const t = Vn(e), n = Xi(e);
  if (t && n)
    return { start: t, end: n };
}
function ut(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? kr(e.position) : "start" in e || "end" in e ? kr(e) : "line" in e || "column" in e ? Sn(e) : "";
}
function Sn(e) {
  return wr(e && e.line) + ":" + wr(e && e.column);
}
function kr(e) {
  return Sn(e && e.start) + "-" + Sn(e && e.end);
}
function wr(e) {
  return e && typeof e == "number" ? e : 1;
}
class ie extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", l = {}, o = !1;
    if (n && ("line" in n && "column" in n ? l = { place: n } : "start" in n && "end" in n ? l = { place: n } : "type" in n ? l = {
      ancestors: [n],
      place: n.position
    } : l = { ...n }), typeof t == "string" ? i = t : !l.cause && t && (o = !0, i = t.message, l.cause = t), !l.ruleId && !l.source && typeof r == "string") {
      const s = r.indexOf(":");
      s === -1 ? l.ruleId = r : (l.source = r.slice(0, s), l.ruleId = r.slice(s + 1));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const s = l.ancestors[l.ancestors.length - 1];
      s && (l.place = s.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = ut(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
ie.prototype.file = "";
ie.prototype.name = "";
ie.prototype.reason = "";
ie.prototype.message = "";
ie.prototype.stack = "";
ie.prototype.column = void 0;
ie.prototype.line = void 0;
ie.prototype.ancestors = void 0;
ie.prototype.cause = void 0;
ie.prototype.fatal = void 0;
ie.prototype.place = void 0;
ie.prototype.ruleId = void 0;
ie.prototype.source = void 0;
const Nn = {}.hasOwnProperty, $u = /* @__PURE__ */ new Map(), Bu = /[A-Z]/g, zu = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ou = /* @__PURE__ */ new Set(["td", "th"]), Ji = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function _u(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Ku(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Zu(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? _n : Au,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = el(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function el(e, t, n) {
  if (t.type === "element")
    return Vu(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Nu(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return qu(e, t, n);
  if (t.type === "mdxjsEsm")
    return Hu(e, t);
  if (t.type === "root")
    return Uu(e, t, n);
  if (t.type === "text")
    return Wu(e, t);
}
function Vu(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = _n, e.schema = i), e.ancestors.push(t);
  const l = nl(e, t.tagName, !1), o = Gu(e, t);
  let a = qn(e, t);
  return zu.has(t.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !yu(s) : !0;
  })), tl(e, o, l, t), Hn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function Nu(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  ht(e, t.position);
}
function Hu(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  ht(e, t.position);
}
function qu(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = _n, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : nl(e, t.name, !0), o = Xu(e, t), a = qn(e, t);
  return tl(e, o, l, t), Hn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function Uu(e, t, n) {
  const r = {};
  return Hn(r, qn(e, t)), e.create(t, e.Fragment, r, n);
}
function Wu(e, t) {
  return t.value;
}
function tl(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Hn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Zu(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const u = Array.isArray(o.children) ? n : t;
    return a ? u(l, o, a) : u(l, o);
  }
}
function Ku(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), s = Vn(r);
    return t(
      i,
      l,
      o,
      a,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      },
      void 0
    );
  }
}
function Gu(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Nn.call(t.properties, i)) {
      const l = Yu(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && Ou.has(t.tagName) ? r = a : n[o] = a;
      }
    }
  if (r) {
    const l = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Xu(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const l = r.data.estree.body[0];
        l.type;
        const o = l.expression;
        o.type;
        const a = o.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        ht(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          ht(e, t.position);
      else
        l = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return n;
}
function qn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : $u;
  for (; ++r < t.children.length; ) {
    const l = t.children[r];
    let o;
    if (e.passKeys) {
      const s = l.type === "element" ? l.tagName : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement" ? l.name : void 0;
      if (s) {
        const u = i.get(s) || 0;
        o = s + "-" + u, i.set(s, u + 1);
      }
    }
    const a = el(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Yu(e, t, n) {
  const r = Tu(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? hu(n) : Pu(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Qu(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Ju(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Cu[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Qu(e, t) {
  try {
    return Mu(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new ie("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Ji + "#cannot-parse-style-attribute", i;
  }
}
function nl(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = fr(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: a,
        computed: !!(l && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = o;
  } else
    r = fr(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Nn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  ht(e);
}
function ht(e, t) {
  const n = new ie(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Ji + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ju(e) {
  const t = {};
  let n;
  for (n in e)
    Nn.call(e, n) && (t[ec(n)] = e[n]);
  return t;
}
function ec(e) {
  let t = e.replace(Bu, tc);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function tc(e) {
  return "-" + e.toLowerCase();
}
const tn = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, nc = {};
function Un(e, t) {
  const n = nc, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return rl(e, r, i);
}
function rl(e, t, n) {
  if (rc(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Cr(e.children, t, n);
  }
  return Array.isArray(e) ? Cr(e, t, n) : "";
}
function Cr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = rl(e[i], t, n);
  return r.join("");
}
function rc(e) {
  return !!(e && typeof e == "object");
}
const vr = document.createElement("i");
function Wn(e) {
  const t = "&" + e + ";";
  vr.innerHTML = t;
  const n = vr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function me(e, t, n, r) {
  const i = e.length;
  let l = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4;
}
function ye(e, t) {
  return e.length > 0 ? (me(e, e.length, 0, t), e) : t;
}
const Sr = {}.hasOwnProperty;
function il(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    ic(t, e[n]);
  return t;
}
function ic(e, t) {
  let n;
  for (n in t) {
    const i = (Sr.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        Sr.call(i, o) || (i[o] = []);
        const a = l[o];
        lc(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function lc(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  me(e, 0, 0, r);
}
function ll(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function we(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const oe = _e(/[A-Za-z]/), re = _e(/[\dA-Za-z]/), oc = _e(/[#-'*+\--9=?A-Z^-~]/);
function Bt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Tn = _e(/\d/), ac = _e(/[\dA-Fa-f]/), sc = _e(/[!-/:-@[-`{-~]/);
function _(e) {
  return e !== null && e < -2;
}
function K(e) {
  return e !== null && (e < 0 || e === 32);
}
function q(e) {
  return e === -2 || e === -1 || e === 32;
}
const Vt = _e(new RegExp("\\p{P}|\\p{S}", "u")), Ue = _e(/\s/);
function _e(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function nt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let o = "";
    if (l === 37 && re(e.charCodeAt(n + 1)) && re(e.charCodeAt(n + 2)))
      i = 2;
    else if (l < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
    else if (l > 55295 && l < 57344) {
      const a = e.charCodeAt(n + 1);
      l < 56320 && a > 56319 && a < 57344 ? (o = String.fromCharCode(l, a), i = 1) : o = "�";
    } else
      o = String.fromCharCode(l);
    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function Z(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(s) {
    return q(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return q(s) && l++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const uc = {
  tokenize: cc
};
function cc(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), Z(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const s = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = s), n = s, o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return _(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const dc = {
  tokenize: fc
}, Tr = {
  tokenize: hc
};
function fc(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(S) {
    if (r < n.length) {
      const I = n[r];
      return t.containerState = I[1], e.attempt(I[0].continuation, s, u)(S);
    }
    return u(S);
  }
  function s(S) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && T();
      const I = t.events.length;
      let A = I, w;
      for (; A--; )
        if (t.events[A][0] === "exit" && t.events[A][1].type === "chunkFlow") {
          w = t.events[A][1].end;
          break;
        }
      y(r);
      let L = I;
      for (; L < t.events.length; )
        t.events[L][1].end = {
          ...w
        }, L++;
      return me(t.events, A + 1, 0, t.events.slice(I)), t.events.length = L, u(S);
    }
    return a(S);
  }
  function u(S) {
    if (r === n.length) {
      if (!i)
        return h(S);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return x(S);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Tr, c, d)(S);
  }
  function c(S) {
    return i && T(), y(r), h(S);
  }
  function d(S) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, x(S);
  }
  function h(S) {
    return t.containerState = {}, e.attempt(Tr, f, x)(S);
  }
  function f(S) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(S);
  }
  function x(S) {
    if (S === null) {
      i && T(), y(0), e.consume(S);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), b(S);
  }
  function b(S) {
    if (S === null) {
      v(e.exit("chunkFlow"), !0), y(0), e.consume(S);
      return;
    }
    return _(S) ? (e.consume(S), v(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(S), b);
  }
  function v(S, I) {
    const A = t.sliceStream(S);
    if (I && A.push(null), S.previous = l, l && (l.next = S), l = S, i.defineSkip(S.start), i.write(A), t.parser.lazy[S.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const L = t.events.length;
      let F = L, B, C;
      for (; F--; )
        if (t.events[F][0] === "exit" && t.events[F][1].type === "chunkFlow") {
          if (B) {
            C = t.events[F][1].end;
            break;
          }
          B = !0;
        }
      for (y(r), w = L; w < t.events.length; )
        t.events[w][1].end = {
          ...C
        }, w++;
      me(t.events, F + 1, 0, t.events.slice(L)), t.events.length = w;
    }
  }
  function y(S) {
    let I = n.length;
    for (; I-- > S; ) {
      const A = n[I];
      t.containerState = A[1], A[0].exit.call(t, e);
    }
    n.length = S;
  }
  function T() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function hc(e, t, n) {
  return Z(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Je(e) {
  if (e === null || K(e) || Ue(e))
    return 1;
  if (Vt(e))
    return 2;
}
function Nt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (t = l(t, n), r.push(l));
  }
  return t;
}
const En = {
  name: "attention",
  resolveAll: pc,
  tokenize: mc
};
function pc(e, t) {
  let n = -1, r, i, l, o, a, s, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const d = {
            ...e[r][1].end
          }, h = {
            ...e[n][1].start
          };
          Er(d, -s), Er(h, s), o = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: d,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: h
          }, l = {
            type: s > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: s > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[n][1].start = {
            ...a.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = ye(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = ye(u, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), u = ye(u, Nt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = ye(u, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = ye(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, me(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function mc(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Je(r);
  let l;
  return o;
  function o(s) {
    return l = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === l)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = Je(s), d = !c || c === 2 && i || n.includes(s), h = !i || i === 2 && c || n.includes(r);
    return u._open = !!(l === 42 ? d : d && (i || !h)), u._close = !!(l === 42 ? h : h && (c || !d)), t(s);
  }
}
function Er(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const gc = {
  name: "autolink",
  tokenize: xc
};
function xc(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(f) {
    return oe(f) ? (e.consume(f), o) : f === 64 ? n(f) : u(f);
  }
  function o(f) {
    return f === 43 || f === 45 || f === 46 || re(f) ? (r = 1, a(f)) : u(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || re(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Bt(f) ? n(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), c) : oc(f) ? (e.consume(f), u) : n(f);
  }
  function c(f) {
    return re(f) ? d(f) : n(f);
  }
  function d(f) {
    return f === 46 ? (e.consume(f), r = 0, c) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(f);
  }
  function h(f) {
    if ((f === 45 || re(f)) && r++ < 63) {
      const x = f === 45 ? h : d;
      return e.consume(f), x;
    }
    return n(f);
  }
}
const xt = {
  partial: !0,
  tokenize: yc
};
function yc(e, t, n) {
  return r;
  function r(l) {
    return q(l) ? Z(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || _(l) ? t(l) : n(l);
  }
}
const ol = {
  continuation: {
    tokenize: kc
  },
  exit: wc,
  name: "blockQuote",
  tokenize: bc
};
function bc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), l;
    }
    return n(o);
  }
  function l(o) {
    return q(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function kc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return q(o) ? Z(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(ol, t, n)(o);
  }
}
function wc(e) {
  e.exit("blockQuote");
}
const al = {
  name: "characterEscape",
  tokenize: Cc
};
function Cc(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return sc(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const sl = {
  name: "characterReference",
  tokenize: vc
};
function vc(e, t, n) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(d) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), s;
  }
  function s(d) {
    return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, o = re, c(d));
  }
  function u(d) {
    return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = ac, c) : (e.enter("characterReferenceValue"), l = 7, o = Tn, c(d));
  }
  function c(d) {
    if (d === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return o === re && !Wn(r.sliceSerialize(h)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(d) && i++ < l ? (e.consume(d), c) : n(d);
  }
}
const Ir = {
  partial: !0,
  tokenize: Tc
}, Ar = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Sc
};
function Sc(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: A
  };
  let l = 0, o = 0, a;
  return s;
  function s(w) {
    return u(w);
  }
  function u(w) {
    const L = r.events[r.events.length - 1];
    return l = L && L[1].type === "linePrefix" ? L[2].sliceSerialize(L[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(w);
  }
  function c(w) {
    return w === a ? (o++, e.consume(w), c) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), q(w) ? Z(e, d, "whitespace")(w) : d(w));
  }
  function d(w) {
    return w === null || _(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(Ir, b, I)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(w));
  }
  function h(w) {
    return w === null || _(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(w)) : q(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Z(e, f, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), h);
  }
  function f(w) {
    return w === null || _(w) ? d(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), x(w));
  }
  function x(w) {
    return w === null || _(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(w)) : w === 96 && w === a ? n(w) : (e.consume(w), x);
  }
  function b(w) {
    return e.attempt(i, I, v)(w);
  }
  function v(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), y;
  }
  function y(w) {
    return l > 0 && q(w) ? Z(e, T, "linePrefix", l + 1)(w) : T(w);
  }
  function T(w) {
    return w === null || _(w) ? e.check(Ir, b, I)(w) : (e.enter("codeFlowValue"), S(w));
  }
  function S(w) {
    return w === null || _(w) ? (e.exit("codeFlowValue"), T(w)) : (e.consume(w), S);
  }
  function I(w) {
    return e.exit("codeFenced"), t(w);
  }
  function A(w, L, F) {
    let B = 0;
    return C;
    function C(D) {
      return w.enter("lineEnding"), w.consume(D), w.exit("lineEnding"), $;
    }
    function $(D) {
      return w.enter("codeFencedFence"), q(D) ? Z(w, z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(D) : z(D);
    }
    function z(D) {
      return D === a ? (w.enter("codeFencedFenceSequence"), N(D)) : F(D);
    }
    function N(D) {
      return D === a ? (B++, w.consume(D), N) : B >= o ? (w.exit("codeFencedFenceSequence"), q(D) ? Z(w, O, "whitespace")(D) : O(D)) : F(D);
    }
    function O(D) {
      return D === null || _(D) ? (w.exit("codeFencedFence"), L(D)) : F(D);
    }
  }
}
function Tc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const nn = {
  name: "codeIndented",
  tokenize: Ic
}, Ec = {
  partial: !0,
  tokenize: Ac
};
function Ic(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), Z(e, l, "linePrefix", 5)(u);
  }
  function l(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(u) : n(u);
  }
  function o(u) {
    return u === null ? s(u) : _(u) ? e.attempt(Ec, o, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || _(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Ac(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : _(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : Z(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : _(o) ? i(o) : n(o);
  }
}
const Pc = {
  name: "codeText",
  previous: Dc,
  resolve: Lc,
  tokenize: Rc
};
function Lc(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Dc(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Rc(e, t, n) {
  let r = 0, i, l;
  return o;
  function o(d) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(d);
  }
  function a(d) {
    return d === 96 ? (e.consume(d), r++, a) : (e.exit("codeTextSequence"), s(d));
  }
  function s(d) {
    return d === null ? n(d) : d === 32 ? (e.enter("space"), e.consume(d), e.exit("space"), s) : d === 96 ? (l = e.enter("codeTextSequence"), i = 0, c(d)) : _(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(d));
  }
  function u(d) {
    return d === null || d === 32 || d === 96 || _(d) ? (e.exit("codeTextData"), s(d)) : (e.consume(d), u);
  }
  function c(d) {
    return d === 96 ? (e.consume(d), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : (l.type = "codeTextData", u(d));
  }
}
class Fc {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && at(this.left, r), l.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), at(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), at(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        at(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        at(this.left, n.reverse());
      }
  }
}
function at(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function ul(e) {
  const t = {};
  let n = -1, r, i, l, o, a, s, u;
  const c = new Fc(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, l = 0, l < s.length && s[l][1].type === "lineEndingBlank" && (l += 2), l < s.length && s[l][1].type === "content"))
      for (; ++l < s.length && s[l][1].type !== "content"; )
        s[l][1].type === "chunkText" && (s[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, jc(c, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (l = n, i = void 0; l--; )
        if (o = c.get(l), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = l);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, a = c.slice(i, n), a.unshift(r), c.splice(i, n - i + 1, a));
    }
  }
  return me(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function jc(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, s = [], u = {};
  let c, d, h = -1, f = n, x = 0, b = 0;
  const v = [b];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    l.push(i), f._tokenizer || (c = r.sliceStream(f), f.next || c.push(null), d && o.defineSkip(f.start), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = f, f = f.next;
  }
  for (f = n; ++h < a.length; )
    // Find a void token that includes a break.
    a[h][0] === "exit" && a[h - 1][0] === "enter" && a[h][1].type === a[h - 1][1].type && a[h][1].start.line !== a[h][1].end.line && (b = h + 1, v.push(b), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (o.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : v.pop(), h = v.length; h--; ) {
    const y = a.slice(v[h], v[h + 1]), T = l.pop();
    s.push([T, T + y.length - 1]), e.splice(T, 2, y);
  }
  for (s.reverse(), h = -1; ++h < s.length; )
    u[x + s[h][0]] = x + s[h][1], x += s[h][1] - s[h][0] - 1;
  return u;
}
const Mc = {
  resolve: Bc,
  tokenize: zc
}, $c = {
  partial: !0,
  tokenize: Oc
};
function Bc(e) {
  return ul(e), e;
}
function zc(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : _(a) ? e.check($c, o, l)(a) : (e.consume(a), i);
  }
  function l(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function o(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Oc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), Z(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || _(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function cl(e, t, n, r, i, l, o, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), h) : y === null || y === 32 || y === 41 || Bt(y) ? n(y) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), b(y));
  }
  function h(y) {
    return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(y));
  }
  function f(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), h(y)) : y === null || y === 60 || _(y) ? n(y) : (e.consume(y), y === 92 ? x : f);
  }
  function x(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), f) : f(y);
  }
  function b(y) {
    return !c && (y === null || y === 41 || K(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(y)) : c < u && y === 40 ? (e.consume(y), c++, b) : y === 41 ? (e.consume(y), c--, b) : y === null || y === 32 || y === 40 || Bt(y) ? n(y) : (e.consume(y), y === 92 ? v : b);
  }
  function v(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), b) : b(y);
  }
}
function dl(e, t, n, r, i, l) {
  const o = this;
  let a = 0, s;
  return u;
  function u(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(l), c;
  }
  function c(f) {
    return a > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(f) : f === 93 ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : _(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), d(f));
  }
  function d(f) {
    return f === null || f === 91 || f === 93 || _(f) || a++ > 999 ? (e.exit("chunkString"), c(f)) : (e.consume(f), s || (s = !q(f)), f === 92 ? h : d);
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, d) : d(f);
  }
}
function fl(e, t, n, r, i, l) {
  let o;
  return a;
  function a(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, s) : n(h);
  }
  function s(h) {
    return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(l), u(h));
  }
  function u(h) {
    return h === o ? (e.exit(l), s(o)) : h === null ? n(h) : _(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), Z(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === o || h === null || _(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? d : c);
  }
  function d(h) {
    return h === o || h === 92 ? (e.consume(h), c) : c(h);
  }
}
function ct(e, t) {
  let n;
  return r;
  function r(i) {
    return _(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? Z(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const _c = {
  name: "definition",
  tokenize: Nc
}, Vc = {
  partial: !0,
  tokenize: Hc
};
function Nc(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(f) {
    return e.enter("definition"), o(f);
  }
  function o(f) {
    return dl.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(f);
  }
  function a(f) {
    return i = we(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return K(f) ? ct(e, u)(f) : u(f);
  }
  function u(f) {
    return cl(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function c(f) {
    return e.attempt(Vc, d, d)(f);
  }
  function d(f) {
    return q(f) ? Z(e, h, "whitespace")(f) : h(f);
  }
  function h(f) {
    return f === null || _(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function Hc(e, t, n) {
  return r;
  function r(a) {
    return K(a) ? ct(e, i)(a) : n(a);
  }
  function i(a) {
    return fl(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return q(a) ? Z(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || _(a) ? t(a) : n(a);
  }
}
const qc = {
  name: "hardBreakEscape",
  tokenize: Uc
};
function Uc(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return _(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const Wc = {
  name: "headingAtx",
  resolve: Zc,
  tokenize: Kc
};
function Zc(e, t) {
  let n = e.length - 2, r = 3, i, l;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, l = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, me(e, r, n - r + 1, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]])), e;
}
function Kc(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), l(c);
  }
  function l(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || K(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || _(c) ? (e.exit("atxHeading"), t(c)) : q(c) ? Z(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || K(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const Gc = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Pr = ["pre", "script", "style", "textarea"], Xc = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Jc,
  tokenize: ed
}, Yc = {
  partial: !0,
  tokenize: nd
}, Qc = {
  partial: !0,
  tokenize: td
};
function Jc(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function ed(e, t, n) {
  const r = this;
  let i, l, o, a, s;
  return u;
  function u(g) {
    return c(g);
  }
  function c(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), d;
  }
  function d(g) {
    return g === 33 ? (e.consume(g), h) : g === 47 ? (e.consume(g), l = !0, b) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : m) : oe(g) ? (e.consume(g), o = String.fromCharCode(g), v) : n(g);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, a = 0, x) : oe(g) ? (e.consume(g), i = 4, r.interrupt ? t : m) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : m) : n(g);
  }
  function x(g) {
    const he = "CDATA[";
    return g === he.charCodeAt(a++) ? (e.consume(g), a === he.length ? r.interrupt ? t : z : x) : n(g);
  }
  function b(g) {
    return oe(g) ? (e.consume(g), o = String.fromCharCode(g), v) : n(g);
  }
  function v(g) {
    if (g === null || g === 47 || g === 62 || K(g)) {
      const he = g === 47, Ae = o.toLowerCase();
      return !he && !l && Pr.includes(Ae) ? (i = 1, r.interrupt ? t(g) : z(g)) : Gc.includes(o.toLowerCase()) ? (i = 6, he ? (e.consume(g), y) : r.interrupt ? t(g) : z(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : l ? T(g) : S(g));
    }
    return g === 45 || re(g) ? (e.consume(g), o += String.fromCharCode(g), v) : n(g);
  }
  function y(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : z) : n(g);
  }
  function T(g) {
    return q(g) ? (e.consume(g), T) : C(g);
  }
  function S(g) {
    return g === 47 ? (e.consume(g), C) : g === 58 || g === 95 || oe(g) ? (e.consume(g), I) : q(g) ? (e.consume(g), S) : C(g);
  }
  function I(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || re(g) ? (e.consume(g), I) : A(g);
  }
  function A(g) {
    return g === 61 ? (e.consume(g), w) : q(g) ? (e.consume(g), A) : S(g);
  }
  function w(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), s = g, L) : q(g) ? (e.consume(g), w) : F(g);
  }
  function L(g) {
    return g === s ? (e.consume(g), s = null, B) : g === null || _(g) ? n(g) : (e.consume(g), L);
  }
  function F(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || K(g) ? A(g) : (e.consume(g), F);
  }
  function B(g) {
    return g === 47 || g === 62 || q(g) ? S(g) : n(g);
  }
  function C(g) {
    return g === 62 ? (e.consume(g), $) : n(g);
  }
  function $(g) {
    return g === null || _(g) ? z(g) : q(g) ? (e.consume(g), $) : n(g);
  }
  function z(g) {
    return g === 45 && i === 2 ? (e.consume(g), W) : g === 60 && i === 1 ? (e.consume(g), Y) : g === 62 && i === 4 ? (e.consume(g), le) : g === 63 && i === 3 ? (e.consume(g), m) : g === 93 && i === 5 ? (e.consume(g), ge) : _(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Yc, fe, N)(g)) : g === null || _(g) ? (e.exit("htmlFlowData"), N(g)) : (e.consume(g), z);
  }
  function N(g) {
    return e.check(Qc, O, fe)(g);
  }
  function O(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), D;
  }
  function D(g) {
    return g === null || _(g) ? N(g) : (e.enter("htmlFlowData"), z(g));
  }
  function W(g) {
    return g === 45 ? (e.consume(g), m) : z(g);
  }
  function Y(g) {
    return g === 47 ? (e.consume(g), o = "", ae) : z(g);
  }
  function ae(g) {
    if (g === 62) {
      const he = o.toLowerCase();
      return Pr.includes(he) ? (e.consume(g), le) : z(g);
    }
    return oe(g) && o.length < 8 ? (e.consume(g), o += String.fromCharCode(g), ae) : z(g);
  }
  function ge(g) {
    return g === 93 ? (e.consume(g), m) : z(g);
  }
  function m(g) {
    return g === 62 ? (e.consume(g), le) : g === 45 && i === 2 ? (e.consume(g), m) : z(g);
  }
  function le(g) {
    return g === null || _(g) ? (e.exit("htmlFlowData"), fe(g)) : (e.consume(g), le);
  }
  function fe(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function td(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return _(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function nd(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(xt, t, n);
  }
}
const rd = {
  name: "htmlText",
  tokenize: id
};
function id(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), s;
  }
  function s(m) {
    return m === 33 ? (e.consume(m), u) : m === 47 ? (e.consume(m), A) : m === 63 ? (e.consume(m), S) : oe(m) ? (e.consume(m), F) : n(m);
  }
  function u(m) {
    return m === 45 ? (e.consume(m), c) : m === 91 ? (e.consume(m), l = 0, x) : oe(m) ? (e.consume(m), T) : n(m);
  }
  function c(m) {
    return m === 45 ? (e.consume(m), f) : n(m);
  }
  function d(m) {
    return m === null ? n(m) : m === 45 ? (e.consume(m), h) : _(m) ? (o = d, Y(m)) : (e.consume(m), d);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), f) : d(m);
  }
  function f(m) {
    return m === 62 ? W(m) : m === 45 ? h(m) : d(m);
  }
  function x(m) {
    const le = "CDATA[";
    return m === le.charCodeAt(l++) ? (e.consume(m), l === le.length ? b : x) : n(m);
  }
  function b(m) {
    return m === null ? n(m) : m === 93 ? (e.consume(m), v) : _(m) ? (o = b, Y(m)) : (e.consume(m), b);
  }
  function v(m) {
    return m === 93 ? (e.consume(m), y) : b(m);
  }
  function y(m) {
    return m === 62 ? W(m) : m === 93 ? (e.consume(m), y) : b(m);
  }
  function T(m) {
    return m === null || m === 62 ? W(m) : _(m) ? (o = T, Y(m)) : (e.consume(m), T);
  }
  function S(m) {
    return m === null ? n(m) : m === 63 ? (e.consume(m), I) : _(m) ? (o = S, Y(m)) : (e.consume(m), S);
  }
  function I(m) {
    return m === 62 ? W(m) : S(m);
  }
  function A(m) {
    return oe(m) ? (e.consume(m), w) : n(m);
  }
  function w(m) {
    return m === 45 || re(m) ? (e.consume(m), w) : L(m);
  }
  function L(m) {
    return _(m) ? (o = L, Y(m)) : q(m) ? (e.consume(m), L) : W(m);
  }
  function F(m) {
    return m === 45 || re(m) ? (e.consume(m), F) : m === 47 || m === 62 || K(m) ? B(m) : n(m);
  }
  function B(m) {
    return m === 47 ? (e.consume(m), W) : m === 58 || m === 95 || oe(m) ? (e.consume(m), C) : _(m) ? (o = B, Y(m)) : q(m) ? (e.consume(m), B) : W(m);
  }
  function C(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || re(m) ? (e.consume(m), C) : $(m);
  }
  function $(m) {
    return m === 61 ? (e.consume(m), z) : _(m) ? (o = $, Y(m)) : q(m) ? (e.consume(m), $) : B(m);
  }
  function z(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), i = m, N) : _(m) ? (o = z, Y(m)) : q(m) ? (e.consume(m), z) : (e.consume(m), O);
  }
  function N(m) {
    return m === i ? (e.consume(m), i = void 0, D) : m === null ? n(m) : _(m) ? (o = N, Y(m)) : (e.consume(m), N);
  }
  function O(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? n(m) : m === 47 || m === 62 || K(m) ? B(m) : (e.consume(m), O);
  }
  function D(m) {
    return m === 47 || m === 62 || K(m) ? B(m) : n(m);
  }
  function W(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(m);
  }
  function Y(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), ae;
  }
  function ae(m) {
    return q(m) ? Z(e, ge, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : ge(m);
  }
  function ge(m) {
    return e.enter("htmlTextData"), o(m);
  }
}
const Zn = {
  name: "labelEnd",
  resolveAll: sd,
  resolveTo: ud,
  tokenize: cd
}, ld = {
  tokenize: dd
}, od = {
  tokenize: fd
}, ad = {
  tokenize: hd
};
function sd(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && me(e, 0, e.length, n), e;
}
function ud(e, t) {
  let n = e.length, r = 0, i, l, o, a;
  for (; n--; )
    if (i = e[n][1], l) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const s = {
    type: e[l][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[l + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return a = [["enter", s, t], ["enter", u, t]], a = ye(a, e.slice(l + 1, l + r + 3)), a = ye(a, [["enter", c, t]]), a = ye(a, Nt(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), a = ye(a, [["exit", c, t], e[o - 2], e[o - 1], ["exit", u, t]]), a = ye(a, e.slice(o + 1)), a = ye(a, [["exit", s, t]]), me(e, l, e.length, a), e;
}
function cd(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(h) {
    return l ? l._inactive ? d(h) : (o = r.parser.defined.includes(we(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(h);
  }
  function s(h) {
    return h === 40 ? e.attempt(ld, c, o ? c : d)(h) : h === 91 ? e.attempt(od, c, o ? u : d)(h) : o ? c(h) : d(h);
  }
  function u(h) {
    return e.attempt(ad, c, d)(h);
  }
  function c(h) {
    return t(h);
  }
  function d(h) {
    return l._balanced = !0, n(h);
  }
}
function dd(e, t, n) {
  return r;
  function r(d) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i;
  }
  function i(d) {
    return K(d) ? ct(e, l)(d) : l(d);
  }
  function l(d) {
    return d === 41 ? c(d) : cl(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d);
  }
  function o(d) {
    return K(d) ? ct(e, s)(d) : c(d);
  }
  function a(d) {
    return n(d);
  }
  function s(d) {
    return d === 34 || d === 39 || d === 40 ? fl(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : c(d);
  }
  function u(d) {
    return K(d) ? ct(e, c)(d) : c(d);
  }
  function c(d) {
    return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
  }
}
function fd(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return dl.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(we(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function hd(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const pd = {
  name: "labelStartImage",
  resolveAll: Zn.resolveAll,
  tokenize: md
};
function md(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), l;
  }
  function l(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), o) : n(a);
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const gd = {
  name: "labelStartLink",
  resolveAll: Zn.resolveAll,
  tokenize: xd
};
function xd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const rn = {
  name: "lineEnding",
  tokenize: yd
};
function yd(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), Z(e, t, "linePrefix");
  }
}
const Mt = {
  name: "thematicBreak",
  tokenize: bd
};
function bd(e, t, n) {
  let r = 0, i;
  return l;
  function l(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || _(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), q(u) ? Z(e, a, "whitespace")(u) : a(u));
  }
}
const se = {
  continuation: {
    tokenize: vd
  },
  exit: Td,
  name: "list",
  tokenize: Cd
}, kd = {
  partial: !0,
  tokenize: Ed
}, wd = {
  partial: !0,
  tokenize: Sd
};
function Cd(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(f) {
    const x = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (x === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Tn(f)) {
      if (r.containerState.type || (r.containerState.type = x, e.enter(x, {
        _container: !0
      })), x === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Mt, n, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return Tn(f) && ++o < 10 ? (e.consume(f), s) : (!r.interrupt || o < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      xt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(kd, h, d)
    );
  }
  function c(f) {
    return r.containerState.initialBlankLine = !0, l++, h(f);
  }
  function d(f) {
    return q(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), h) : n(f);
  }
  function h(f) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function vd(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(xt, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Z(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(wd, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, Z(e, e.attempt(se, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Sd(e, t, n) {
  const r = this;
  return Z(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function Td(e) {
  e.exit(this.containerState.type);
}
function Ed(e, t, n) {
  const r = this;
  return Z(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !q(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const Lr = {
  name: "setextUnderline",
  resolveTo: Id,
  tokenize: Ad
};
function Id(e, t) {
  let n = e.length, r, i, l;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !l && e[n][1].type === "definition" && (l = n);
  const o = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", o, t]), e.splice(l + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[l][1].end
  }) : e[r][1] = o, e.push(["exit", o, t]), e;
}
function Ad(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(u) {
    let c = r.events.length, d;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        d = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || d) ? (e.enter("setextHeadingLine"), i = u, o(u)) : n(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), q(u) ? Z(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || _(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Pd = {
  tokenize: Ld
};
function Ld(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    xt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, Z(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Mc, i)), "linePrefix"))
  );
  return n;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Dd = {
  resolveAll: pl()
}, Rd = hl("string"), Fd = hl("text");
function hl(e) {
  return {
    resolveAll: pl(e === "text" ? jd : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], l = n.attempt(i, o, a);
    return o;
    function o(c) {
      return u(c) ? l(c) : a(c);
    }
    function a(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), s;
    }
    function s(c) {
      return u(c) ? (n.exit("data"), l(c)) : (n.consume(c), s);
    }
    function u(c) {
      if (c === null)
        return !0;
      const d = i[c];
      let h = -1;
      if (d)
        for (; ++h < d.length; ) {
          const f = d[h];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function pl(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function jd(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let l = i.length, o = -1, a = 0, s;
      for (; l--; ) {
        const u = i[l];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; )
            a++, o--;
          if (o) break;
          o = -1;
        } else if (u === -2)
          s = !0, a++;
        else if (u !== -1) {
          l++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const u = {
          type: n === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: l ? o : r.start._bufferIndex + o,
            _index: r.start._index + l,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Md = {
  42: se,
  43: se,
  45: se,
  48: se,
  49: se,
  50: se,
  51: se,
  52: se,
  53: se,
  54: se,
  55: se,
  56: se,
  57: se,
  62: ol
}, $d = {
  91: _c
}, Bd = {
  [-2]: nn,
  [-1]: nn,
  32: nn
}, zd = {
  35: Wc,
  42: Mt,
  45: [Lr, Mt],
  60: Xc,
  61: Lr,
  95: Mt,
  96: Ar,
  126: Ar
}, Od = {
  38: sl,
  92: al
}, _d = {
  [-5]: rn,
  [-4]: rn,
  [-3]: rn,
  33: pd,
  38: sl,
  42: En,
  60: [gc, rd],
  91: gd,
  92: [qc, al],
  93: Zn,
  95: En,
  96: Pc
}, Vd = {
  null: [En, Dd]
}, Nd = {
  null: [42, 95]
}, Hd = {
  null: []
}, qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Nd,
  contentInitial: $d,
  disable: Hd,
  document: Md,
  flow: zd,
  flowInitial: Bd,
  insideSpan: Vd,
  string: Od,
  text: _d
}, Symbol.toStringTag, { value: "Module" }));
function Ud(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, l = [];
  let o = [], a = [];
  const s = {
    attempt: L(A),
    check: L(w),
    consume: T,
    enter: S,
    exit: I,
    interrupt: L(w, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: b,
    events: [],
    now: x,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: f,
    write: d
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && l.push(t), u;
  function d($) {
    return o = ye(o, $), v(), o[o.length - 1] !== null ? [] : (F(t, 0), u.events = Nt(l, u.events, u), u.events);
  }
  function h($, z) {
    return Zd(f($), z);
  }
  function f($) {
    return Wd(o, $);
  }
  function x() {
    const {
      _bufferIndex: $,
      _index: z,
      line: N,
      column: O,
      offset: D
    } = r;
    return {
      _bufferIndex: $,
      _index: z,
      line: N,
      column: O,
      offset: D
    };
  }
  function b($) {
    i[$.line] = $.column, C();
  }
  function v() {
    let $;
    for (; r._index < o.length; ) {
      const z = o[r._index];
      if (typeof z == "string")
        for ($ = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === $ && r._bufferIndex < z.length; )
          y(z.charCodeAt(r._bufferIndex));
      else
        y(z);
    }
  }
  function y($) {
    c = c($);
  }
  function T($) {
    _($) ? (r.line++, r.column = 1, r.offset += $ === -3 ? 2 : 1, C()) : $ !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = $;
  }
  function S($, z) {
    const N = z || {};
    return N.type = $, N.start = x(), u.events.push(["enter", N, u]), a.push(N), N;
  }
  function I($) {
    const z = a.pop();
    return z.end = x(), u.events.push(["exit", z, u]), z;
  }
  function A($, z) {
    F($, z.from);
  }
  function w($, z) {
    z.restore();
  }
  function L($, z) {
    return N;
    function N(O, D, W) {
      let Y, ae, ge, m;
      return Array.isArray(O) ? (
        /* c8 ignore next 1 */
        fe(O)
      ) : "tokenize" in O ? (
        // Looks like a construct.
        fe([
          /** @type {Construct} */
          O
        ])
      ) : le(O);
      function le(te) {
        return Ve;
        function Ve(Ce) {
          const Fe = Ce !== null && te[Ce], Pe = Ce !== null && te.null, Ze = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Fe) ? Fe : Fe ? [Fe] : [],
            ...Array.isArray(Pe) ? Pe : Pe ? [Pe] : []
          ];
          return fe(Ze)(Ce);
        }
      }
      function fe(te) {
        return Y = te, ae = 0, te.length === 0 ? W : g(te[ae]);
      }
      function g(te) {
        return Ve;
        function Ve(Ce) {
          return m = B(), ge = te, te.partial || (u.currentConstruct = te), te.name && u.parser.constructs.disable.null.includes(te.name) ? Ae() : te.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(u), z) : u,
            s,
            he,
            Ae
          )(Ce);
        }
      }
      function he(te) {
        return $(ge, m), D;
      }
      function Ae(te) {
        return m.restore(), ++ae < Y.length ? g(Y[ae]) : W;
      }
    }
  }
  function F($, z) {
    $.resolveAll && !l.includes($) && l.push($), $.resolve && me(u.events, z, u.events.length - z, $.resolve(u.events.slice(z), u)), $.resolveTo && (u.events = $.resolveTo(u.events, u));
  }
  function B() {
    const $ = x(), z = u.previous, N = u.currentConstruct, O = u.events.length, D = Array.from(a);
    return {
      from: O,
      restore: W
    };
    function W() {
      r = $, u.previous = z, u.currentConstruct = N, u.events.length = O, a = D, C();
    }
  }
  function C() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Wd(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, l = t.end._bufferIndex;
  let o;
  if (n === i)
    o = [e[n].slice(r, l)];
  else {
    if (o = e.slice(n, i), r > -1) {
      const a = o[0];
      typeof a == "string" ? o[0] = a.slice(r) : o.shift();
    }
    l > 0 && o.push(e[i].slice(0, l));
  }
  return o;
}
function Zd(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const l = e[n];
    let o;
    if (typeof l == "string")
      o = l;
    else switch (l) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(l);
    }
    i = l === -2, r.push(o);
  }
  return r.join("");
}
function Kd(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      il([qd, ...(e || {}).extensions || []])
    ),
    content: i(uc),
    defined: [],
    document: i(dc),
    flow: i(Pd),
    lazy: {},
    string: i(Rd),
    text: i(Fd)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Ud(r, l, a);
    }
  }
}
function Gd(e) {
  for (; !ul(e); )
    ;
  return e;
}
const Dr = /[\0\t\n\r]/g;
function Xd() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const s = [];
    let u, c, d, h, f;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), d = 0, t = "", n && (l.charCodeAt(0) === 65279 && d++, n = void 0); d < l.length; ) {
      if (Dr.lastIndex = d, u = Dr.exec(l), h = u && u.index !== void 0 ? u.index : l.length, f = l.charCodeAt(h), !u) {
        t = l.slice(d);
        break;
      }
      if (f === 10 && d === h && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), d < h && (s.push(l.slice(d, h)), e += h - d), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      d = h + 1;
    }
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const Yd = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Qd(e) {
  return e.replace(Yd, Jd);
}
function Jd(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return ll(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Wn(n) || e;
}
const ml = {}.hasOwnProperty;
function ef(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), tf(n)(Gd(Kd(n).document().write(Xd()(e, t, !0))));
}
function tf(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(vt),
      autolinkProtocol: B,
      autolinkEmail: B,
      atxHeading: l(kt),
      blockQuote: l(Pe),
      characterEscape: B,
      characterReference: B,
      codeFenced: l(Ze),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Ze, o),
      codeText: l(ve, o),
      codeTextData: B,
      data: B,
      codeFlowValue: B,
      definition: l(Wt),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(Zt),
      hardBreakEscape: l(wt),
      hardBreakTrailing: l(wt),
      htmlFlow: l(Ct, o),
      htmlFlowData: B,
      htmlText: l(Ct, o),
      htmlTextData: B,
      image: l(Kt),
      label: o,
      link: l(vt),
      listItem: l(St),
      listItemValue: h,
      listOrdered: l(rt, d),
      listUnordered: l(rt),
      paragraph: l(Tt),
      reference: g,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(kt),
      strong: l(Et),
      thematicBreak: l(At)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: A,
      autolink: s(),
      autolinkEmail: Fe,
      autolinkProtocol: Ce,
      blockQuote: s(),
      characterEscapeValue: C,
      characterReferenceMarkerHexadecimal: Ae,
      characterReferenceMarkerNumeric: Ae,
      characterReferenceValue: te,
      characterReference: Ve,
      codeFenced: s(v),
      codeFencedFence: b,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: x,
      codeFlowValue: C,
      codeIndented: s(y),
      codeText: s(D),
      codeTextData: C,
      data: C,
      definition: s(),
      definitionDestinationString: I,
      definitionLabelString: T,
      definitionTitleString: S,
      emphasis: s(),
      hardBreakEscape: s(z),
      hardBreakTrailing: s(z),
      htmlFlow: s(N),
      htmlFlowData: C,
      htmlText: s(O),
      htmlTextData: C,
      image: s(Y),
      label: ge,
      labelText: ae,
      lineEnding: $,
      link: s(W),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: he,
      resourceDestinationString: m,
      resourceTitleString: le,
      resource: fe,
      setextHeading: s(F),
      setextHeadingLineSequence: L,
      setextHeadingText: w,
      strong: s(),
      thematicBreak: s()
    }
  };
  gl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(E) {
    let k = {
      type: "root",
      children: []
    };
    const j = {
      stack: [k],
      tokenStack: [],
      config: t,
      enter: a,
      exit: u,
      buffer: o,
      resume: c,
      data: n
    }, M = [];
    let V = -1;
    for (; ++V < E.length; )
      if (E[V][1].type === "listOrdered" || E[V][1].type === "listUnordered")
        if (E[V][0] === "enter")
          M.push(V);
        else {
          const J = M.pop();
          V = i(E, J, V);
        }
    for (V = -1; ++V < E.length; ) {
      const J = t[E[V][0]];
      ml.call(J, E[V][1].type) && J[E[V][1].type].call(Object.assign({
        sliceSerialize: E[V][2].sliceSerialize
      }, j), E[V][1]);
    }
    if (j.tokenStack.length > 0) {
      const J = j.tokenStack[j.tokenStack.length - 1];
      (J[1] || Rr).call(j, void 0, J[0]);
    }
    for (k.position = {
      start: $e(E.length > 0 ? E[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: $e(E.length > 0 ? E[E.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, V = -1; ++V < t.transforms.length; )
      k = t.transforms[V](k) || k;
    return k;
  }
  function i(E, k, j) {
    let M = k - 1, V = -1, J = !1, Se, xe, je, Q;
    for (; ++M <= j; ) {
      const ne = E[M];
      switch (ne[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ne[0] === "enter" ? V++ : V--, Q = void 0;
          break;
        }
        case "lineEndingBlank": {
          ne[0] === "enter" && (Se && !Q && !V && !je && (je = M), Q = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Q = void 0;
      }
      if (!V && ne[0] === "enter" && ne[1].type === "listItemPrefix" || V === -1 && ne[0] === "exit" && (ne[1].type === "listUnordered" || ne[1].type === "listOrdered")) {
        if (Se) {
          let Me = M;
          for (xe = void 0; Me--; ) {
            const Le = E[Me];
            if (Le[1].type === "lineEnding" || Le[1].type === "lineEndingBlank") {
              if (Le[0] === "exit") continue;
              xe && (E[xe][1].type = "lineEndingBlank", J = !0), Le[1].type = "lineEnding", xe = Me;
            } else if (!(Le[1].type === "linePrefix" || Le[1].type === "blockQuotePrefix" || Le[1].type === "blockQuotePrefixWhitespace" || Le[1].type === "blockQuoteMarker" || Le[1].type === "listItemIndent")) break;
          }
          je && (!xe || je < xe) && (Se._spread = !0), Se.end = Object.assign({}, xe ? E[xe][1].start : ne[1].end), E.splice(xe || M, 0, ["exit", Se, ne[2]]), M++, j++;
        }
        if (ne[1].type === "listItemPrefix") {
          const Me = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ne[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Se = Me, E.splice(M, 0, ["enter", Me, ne[2]]), M++, j++, je = void 0, Q = !0;
        }
      }
    }
    return E[k][1]._spread = J, j;
  }
  function l(E, k) {
    return j;
    function j(M) {
      a.call(this, E(M), M), k && k.call(this, M);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(E, k, j) {
    this.stack[this.stack.length - 1].children.push(E), this.stack.push(E), this.tokenStack.push([k, j || void 0]), E.position = {
      start: $e(k.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(E) {
    return k;
    function k(j) {
      E && E.call(this, j), u.call(this, j);
    }
  }
  function u(E, k) {
    const j = this.stack.pop(), M = this.tokenStack.pop();
    if (M)
      M[0].type !== E.type && (k ? k.call(this, E, M[0]) : (M[1] || Rr).call(this, E, M[0]));
    else throw new Error("Cannot close `" + E.type + "` (" + ut({
      start: E.start,
      end: E.end
    }) + "): it’s not open");
    j.position.end = $e(E.end);
  }
  function c() {
    return Un(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(E) {
    if (this.data.expectingFirstListItemValue) {
      const k = this.stack[this.stack.length - 2];
      k.start = Number.parseInt(this.sliceSerialize(E), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.lang = E;
  }
  function x() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.meta = E;
  }
  function b() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function v() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.value = E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function y() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.value = E.replace(/(\r?\n|\r)$/g, "");
  }
  function T(E) {
    const k = this.resume(), j = this.stack[this.stack.length - 1];
    j.label = k, j.identifier = we(this.sliceSerialize(E)).toLowerCase();
  }
  function S() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.title = E;
  }
  function I() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.url = E;
  }
  function A(E) {
    const k = this.stack[this.stack.length - 1];
    if (!k.depth) {
      const j = this.sliceSerialize(E).length;
      k.depth = j;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function L(E) {
    const k = this.stack[this.stack.length - 1];
    k.depth = this.sliceSerialize(E).codePointAt(0) === 61 ? 1 : 2;
  }
  function F() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function B(E) {
    const j = this.stack[this.stack.length - 1].children;
    let M = j[j.length - 1];
    (!M || M.type !== "text") && (M = It(), M.position = {
      start: $e(E.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, j.push(M)), this.stack.push(M);
  }
  function C(E) {
    const k = this.stack.pop();
    k.value += this.sliceSerialize(E), k.position.end = $e(E.end);
  }
  function $(E) {
    const k = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const j = k.children[k.children.length - 1];
      j.position.end = $e(E.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(k.type) && (B.call(this, E), C.call(this, E));
  }
  function z() {
    this.data.atHardBreak = !0;
  }
  function N() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.value = E;
  }
  function O() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.value = E;
  }
  function D() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.value = E;
  }
  function W() {
    const E = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const k = this.data.referenceType || "shortcut";
      E.type += "Reference", E.referenceType = k, delete E.url, delete E.title;
    } else
      delete E.identifier, delete E.label;
    this.data.referenceType = void 0;
  }
  function Y() {
    const E = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const k = this.data.referenceType || "shortcut";
      E.type += "Reference", E.referenceType = k, delete E.url, delete E.title;
    } else
      delete E.identifier, delete E.label;
    this.data.referenceType = void 0;
  }
  function ae(E) {
    const k = this.sliceSerialize(E), j = this.stack[this.stack.length - 2];
    j.label = Qd(k), j.identifier = we(k).toLowerCase();
  }
  function ge() {
    const E = this.stack[this.stack.length - 1], k = this.resume(), j = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, j.type === "link") {
      const M = E.children;
      j.children = M;
    } else
      j.alt = k;
  }
  function m() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.url = E;
  }
  function le() {
    const E = this.resume(), k = this.stack[this.stack.length - 1];
    k.title = E;
  }
  function fe() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function he(E) {
    const k = this.resume(), j = this.stack[this.stack.length - 1];
    j.label = k, j.identifier = we(this.sliceSerialize(E)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ae(E) {
    this.data.characterReferenceType = E.type;
  }
  function te(E) {
    const k = this.sliceSerialize(E), j = this.data.characterReferenceType;
    let M;
    j ? (M = ll(k, j === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : M = Wn(k);
    const V = this.stack[this.stack.length - 1];
    V.value += M;
  }
  function Ve(E) {
    const k = this.stack.pop();
    k.position.end = $e(E.end);
  }
  function Ce(E) {
    C.call(this, E);
    const k = this.stack[this.stack.length - 1];
    k.url = this.sliceSerialize(E);
  }
  function Fe(E) {
    C.call(this, E);
    const k = this.stack[this.stack.length - 1];
    k.url = "mailto:" + this.sliceSerialize(E);
  }
  function Pe() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Ze() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ve() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Wt() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Zt() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function kt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function wt() {
    return {
      type: "break"
    };
  }
  function Ct() {
    return {
      type: "html",
      value: ""
    };
  }
  function Kt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function vt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function rt(E) {
    return {
      type: "list",
      ordered: E.type === "listOrdered",
      start: null,
      spread: E._spread,
      children: []
    };
  }
  function St(E) {
    return {
      type: "listItem",
      spread: E._spread,
      checked: null,
      children: []
    };
  }
  function Tt() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Et() {
    return {
      type: "strong",
      children: []
    };
  }
  function It() {
    return {
      type: "text",
      value: ""
    };
  }
  function At() {
    return {
      type: "thematicBreak"
    };
  }
}
function $e(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function gl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? gl(e, r) : nf(e, r);
  }
}
function nf(e, t) {
  let n;
  for (n in t)
    if (ml.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Rr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + ut({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + ut({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + ut({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function rf(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return ef(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function lf(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function of(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function af(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let l = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (l.data = { meta: t.meta }), e.patch(t, l), l = e.applyData(t, l), l = { type: "element", tagName: "pre", properties: {}, children: [l] }, e.patch(t, l), l;
}
function sf(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function uf(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function cf(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = nt(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
  let o, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = l + 1, a += 1, e.footnoteCounts.set(r, a);
  const s = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, s);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [s]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function df(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ff(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function xl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function hf(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return xl(e, t);
  const i = { src: nt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function pf(e, t) {
  const n = { src: nt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function mf(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function gf(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return xl(e, t);
  const i = { href: nt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function xf(e, t) {
  const n = { href: nt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function yf(e, t, n) {
  const r = e.all(t), i = n ? bf(n) : yl(t), l = {}, o = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let d;
    c && c.type === "element" && c.tagName === "p" ? d = c : (d = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(d)), d.children.length > 0 && d.children.unshift({ type: "text", value: " " }), d.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), l.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (i || a !== 0 || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c);
  }
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(t, u), e.applyData(t, u);
}
function bf(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = yl(n[r]);
  }
  return t;
}
function yl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function kf(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const l = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function wf(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Cf(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function vf(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Sf(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = Vn(t.children[1]), s = Xi(t.children[t.children.length - 1]);
    a && s && (o.position = { start: a, end: s }), i.push(o);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Tf(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const d = t.children[s], h = {}, f = o ? o[s] : void 0;
    f && (h.align = f);
    let x = { type: "element", tagName: l, properties: h, children: [] };
    d && (x.children = e.all(d), e.patch(d, x), x = e.applyData(d, x)), u.push(x);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Ef(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Fr = 9, jr = 32;
function If(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      Mr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(Mr(t.slice(i), i > 0, !1)), l.join("");
}
function Mr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Fr || l === jr; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Fr || l === jr; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Af(e, t) {
  const n = { type: "text", value: If(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Pf(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Lf = {
  blockquote: lf,
  break: of,
  code: af,
  delete: sf,
  emphasis: uf,
  footnoteReference: cf,
  heading: df,
  html: ff,
  imageReference: hf,
  image: pf,
  inlineCode: mf,
  linkReference: gf,
  link: xf,
  listItem: yf,
  list: kf,
  paragraph: wf,
  // @ts-expect-error: root is different, but hard to type.
  root: Cf,
  strong: vf,
  table: Sf,
  tableCell: Ef,
  tableRow: Tf,
  text: Af,
  thematicBreak: Pf,
  toml: Pt,
  yaml: Pt,
  definition: Pt,
  footnoteDefinition: Pt
};
function Pt() {
}
const bl = -1, Ht = 0, dt = 1, zt = 2, Kn = 3, Gn = 4, Xn = 5, Yn = 6, kl = 7, wl = 8, $r = typeof self == "object" ? self : globalThis, Df = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case Ht:
      case bl:
        return n(o, i);
      case dt: {
        const a = n([], i);
        for (const s of o)
          a.push(r(s));
        return a;
      }
      case zt: {
        const a = n({}, i);
        for (const [s, u] of o)
          a[r(s)] = r(u);
        return a;
      }
      case Kn:
        return n(new Date(o), i);
      case Gn: {
        const { source: a, flags: s } = o;
        return n(new RegExp(a, s), i);
      }
      case Xn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of o)
          a.set(r(s), r(u));
        return a;
      }
      case Yn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const s of o)
          a.add(r(s));
        return a;
      }
      case kl: {
        const { name: a, message: s } = o;
        return n(new $r[a](s), i);
      }
      case wl:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: a } = new Uint8Array(o);
        return n(new DataView(a), o);
      }
    }
    return n(new $r[l](o), i);
  };
  return r;
}, Br = (e) => Df(/* @__PURE__ */ new Map(), e)(0), Ge = "", { toString: Rf } = {}, { keys: Ff } = Object, st = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Ht, t];
  const n = Rf.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [dt, Ge];
    case "Object":
      return [zt, Ge];
    case "Date":
      return [Kn, Ge];
    case "RegExp":
      return [Gn, Ge];
    case "Map":
      return [Xn, Ge];
    case "Set":
      return [Yn, Ge];
    case "DataView":
      return [dt, n];
  }
  return n.includes("Array") ? [dt, n] : n.includes("Error") ? [kl, n] : [zt, n];
}, Lt = ([e, t]) => e === Ht && (t === "function" || t === "symbol"), jf = (e, t, n, r) => {
  const i = (o, a) => {
    const s = r.push(o) - 1;
    return n.set(a, s), s;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, s] = st(o);
    switch (a) {
      case Ht: {
        let c = o;
        switch (s) {
          case "bigint":
            a = wl, c = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            c = null;
            break;
          case "undefined":
            return i([bl], o);
        }
        return i([a, c], o);
      }
      case dt: {
        if (s) {
          let h = o;
          return s === "DataView" ? h = new Uint8Array(o.buffer) : s === "ArrayBuffer" && (h = new Uint8Array(o)), i([s, [...h]], o);
        }
        const c = [], d = i([a, c], o);
        for (const h of o)
          c.push(l(h));
        return d;
      }
      case zt: {
        if (s)
          switch (s) {
            case "BigInt":
              return i([s, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([s, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return l(o.toJSON());
        const c = [], d = i([a, c], o);
        for (const h of Ff(o))
          (e || !Lt(st(o[h]))) && c.push([l(h), l(o[h])]);
        return d;
      }
      case Kn:
        return i([a, o.toISOString()], o);
      case Gn: {
        const { source: c, flags: d } = o;
        return i([a, { source: c, flags: d }], o);
      }
      case Xn: {
        const c = [], d = i([a, c], o);
        for (const [h, f] of o)
          (e || !(Lt(st(h)) || Lt(st(f)))) && c.push([l(h), l(f)]);
        return d;
      }
      case Yn: {
        const c = [], d = i([a, c], o);
        for (const h of o)
          (e || !Lt(st(h))) && c.push(l(h));
        return d;
      }
    }
    const { message: u } = o;
    return i([a, { name: s, message: u }], o);
  };
  return l;
}, zr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return jf(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, pt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Br(zr(e, t)) : structuredClone(e)
) : (e, t) => Br(zr(e, t));
function Mf(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function $f(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Bf(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Mf, r = e.options.footnoteBackLabel || $f, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const c = e.all(u), d = String(u.identifier).toUpperCase(), h = nt(d.toLowerCase());
    let f = 0;
    const x = [], b = e.footnoteCounts.get(d);
    for (; b !== void 0 && ++f <= b; ) {
      x.length > 0 && x.push({ type: "text", value: " " });
      let T = typeof n == "string" ? n : n(s, f);
      typeof T == "string" && (T = { type: "text", value: T }), x.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(T) ? T : [T]
      });
    }
    const v = c[c.length - 1];
    if (v && v.type === "element" && v.tagName === "p") {
      const T = v.children[v.children.length - 1];
      T && T.type === "text" ? T.value += " " : v.children.push({ type: "text", value: " " }), v.children.push(...x);
    } else
      c.push(...x);
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(c, !0)
    };
    e.patch(u, y), a.push(y);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: l,
          properties: {
            ...pt(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const qt = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Vf;
    if (typeof e == "function")
      return Ut(e);
    if (typeof e == "object")
      return Array.isArray(e) ? zf(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Of(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return _f(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function zf(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = qt(e[n]);
  return Ut(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function Of(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ut(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let l;
    for (l in e)
      if (i[l] !== t[l]) return !1;
    return !0;
  }
}
function _f(e) {
  return Ut(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ut(e) {
  return t;
  function t(n, r, i) {
    return !!(Nf(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Vf() {
  return !0;
}
function Nf(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Cl = [], Hf = !0, In = !1, qf = "skip";
function vl(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = qt(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, u, c) {
    const d = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
    );
    if (typeof d.type == "string") {
      const f = (
        // `hast`
        typeof d.tagName == "string" ? d.tagName : (
          // `xast`
          typeof d.name == "string" ? d.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let f = Cl, x, b, v;
      if ((!t || l(s, u, c[c.length - 1] || void 0)) && (f = Uf(n(s, c)), f[0] === In))
        return f;
      if ("children" in s && s.children) {
        const y = (
          /** @type {UnistParent} */
          s
        );
        if (y.children && f[0] !== qf)
          for (b = (r ? y.children.length : -1) + o, v = c.concat(y); b > -1 && b < y.children.length; ) {
            const T = y.children[b];
            if (x = a(T, b, v)(), x[0] === In)
              return x;
            b = typeof x[1] == "number" ? x[1] : b + o;
          }
      }
      return f;
    }
  }
}
function Uf(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Hf, e] : e == null ? Cl : [e];
}
function Qn(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), vl(e, l, a, i);
  function a(s, u) {
    const c = u[u.length - 1], d = c ? c.children.indexOf(s) : void 0;
    return o(s, d, c);
  }
}
const An = {}.hasOwnProperty, Wf = {};
function Zf(e, t) {
  const n = t || Wf, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Lf, ...n.handlers }, a = {
    all: u,
    applyData: Gf,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: s,
    options: n,
    patch: Kf,
    wrap: Yf
  };
  return Qn(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const d = c.type === "definition" ? r : i, h = String(c.identifier).toUpperCase();
      d.has(h) || d.set(h, c);
    }
  }), a;
  function s(c, d) {
    const h = c.type, f = a.handlers[h];
    if (An.call(a.handlers, h) && f)
      return f(a, c, d);
    if (a.options.passThrough && a.options.passThrough.includes(h)) {
      if ("children" in c) {
        const { children: b, ...v } = c, y = pt(v);
        return y.children = a.all(c), y;
      }
      return pt(c);
    }
    return (a.options.unknownHandler || Xf)(a, c, d);
  }
  function u(c) {
    const d = [];
    if ("children" in c) {
      const h = c.children;
      let f = -1;
      for (; ++f < h.length; ) {
        const x = a.one(h[f], c);
        if (x) {
          if (f && h[f - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = Or(x.value)), !Array.isArray(x) && x.type === "element")) {
            const b = x.children[0];
            b && b.type === "text" && (b.value = Or(b.value));
          }
          Array.isArray(x) ? d.push(...x) : d.push(x);
        }
      }
    }
    return d;
  }
}
function Kf(e, t) {
  e.position && (t.position = Qi(e));
}
function Gf(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, l = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && l && Object.assign(n.properties, pt(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Xf(e, t) {
  const n = t.data || {}, r = "value" in t && !(An.call(n, "hProperties") || An.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Yf(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Or(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function _r(e, t) {
  const n = Zf(e, t), r = n.one(e, void 0), i = Bf(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Qf(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      _r(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      _r(n, { file: r, ...e || t })
    );
  };
}
function Vr(e) {
  if (e)
    throw e;
}
var ln, Nr;
function Jf() {
  if (Nr) return ln;
  Nr = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(u) {
    return typeof Array.isArray == "function" ? Array.isArray(u) : t.call(u) === "[object Array]";
  }, l = function(u) {
    if (!u || t.call(u) !== "[object Object]")
      return !1;
    var c = e.call(u, "constructor"), d = u.constructor && u.constructor.prototype && e.call(u.constructor.prototype, "isPrototypeOf");
    if (u.constructor && !c && !d)
      return !1;
    var h;
    for (h in u)
      ;
    return typeof h > "u" || e.call(u, h);
  }, o = function(u, c) {
    n && c.name === "__proto__" ? n(u, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : u[c.name] = c.newValue;
  }, a = function(u, c) {
    if (c === "__proto__")
      if (e.call(u, c)) {
        if (r)
          return r(u, c).value;
      } else return;
    return u[c];
  };
  return ln = function s() {
    var u, c, d, h, f, x, b = arguments[0], v = 1, y = arguments.length, T = !1;
    for (typeof b == "boolean" && (T = b, b = arguments[1] || {}, v = 2), (b == null || typeof b != "object" && typeof b != "function") && (b = {}); v < y; ++v)
      if (u = arguments[v], u != null)
        for (c in u)
          d = a(b, c), h = a(u, c), b !== h && (T && h && (l(h) || (f = i(h))) ? (f ? (f = !1, x = d && i(d) ? d : []) : x = d && l(d) ? d : {}, o(b, { name: c, newValue: s(T, x, h) })) : typeof h < "u" && o(b, { name: c, newValue: h }));
    return b;
  }, ln;
}
var eh = Jf();
const on = /* @__PURE__ */ ki(eh);
function Pn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function th() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(s, ...u) {
      const c = e[++l];
      let d = -1;
      if (s) {
        o(s);
        return;
      }
      for (; ++d < i.length; )
        (u[d] === null || u[d] === void 0) && (u[d] = i[d]);
      i = u, c ? nh(c, a)(...u) : o(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function nh(e, t) {
  let n;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let s;
    a && o.push(i);
    try {
      s = e.apply(this, o);
    } catch (u) {
      const c = (
        /** @type {Error} */
        u
      );
      if (a && n)
        throw c;
      return i(c);
    }
    a || (s && s.then && typeof s.then == "function" ? s.then(l, i) : s instanceof Error ? i(s) : l(s));
  }
  function i(o, ...a) {
    n || (n = !0, t(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const Te = { basename: rh, dirname: ih, extname: lh, join: oh, sep: "/" };
function rh(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  yt(e);
  let n = 0, r = -1, i = e.length, l;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (l) {
          n = i + 1;
          break;
        }
      } else r < 0 && (l = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let o = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (l) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (l = !0, o = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = o));
  return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function ih(e) {
  if (yt(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function lh(e) {
  yt(e);
  let t = e.length, n = -1, r = 0, i = -1, l = 0, o;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = t + 1), a === 46 ? i < 0 ? i = t : l !== 1 && (l = 1) : i > -1 && (l = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  l === 0 || // The (right-most) trimmed path component is exactly `..`.
  l === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function oh(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    yt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : ah(n);
}
function ah(e) {
  yt(e);
  const t = e.codePointAt(0) === 47;
  let n = sh(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function sh(e, t) {
  let n = "", r = 0, i = -1, l = 0, o = -1, a, s;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      a = e.codePointAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || l === 1)) if (i !== o - 1 && l === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (s = n.lastIndexOf("/"), s !== n.length - 1) {
              s < 0 ? (n = "", r = 0) : (n = n.slice(0, s), r = n.length - 1 - n.lastIndexOf("/")), i = o, l = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = o, l = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
      i = o, l = 0;
    } else a === 46 && l > -1 ? l++ : l = -1;
  }
  return n;
}
function yt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const uh = { cwd: ch };
function ch() {
  return "/";
}
function Ln(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function dh(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Ln(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return fh(e);
}
function fh(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const an = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Sl {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? Ln(t) ? n = { path: t } : typeof t == "string" || hh(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : uh.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < an.length; ) {
      const l = an[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      an.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Te.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    un(t, "basename"), sn(t, "basename"), this.path = Te.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Te.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Hr(this.basename, "dirname"), this.path = Te.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Te.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (sn(t, "extname"), Hr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Te.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Ln(t) && (t = dh(t)), un(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Te.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    un(t, "stem"), sn(t, "stem"), this.path = Te.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new ie(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function sn(e, t) {
  if (e && e.includes(Te.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Te.sep + "`"
    );
}
function un(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Hr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function hh(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const ph = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], l = function() {
      return i.apply(l, arguments);
    };
    return Object.setPrototypeOf(l, r), l;
  }
), mh = {}.hasOwnProperty;
class Jn extends ph {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = th();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Jn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(on(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (fn("data", this.frozen), this.namespace[t] = n, this) : mh.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (fn("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Dt(t), r = this.parser || this.Parser;
    return cn("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), cn("process", this.parser || this.Parser), dn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = Dt(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(s, a, function(c, d, h) {
        if (c || !d || !h)
          return u(c);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          d
        ), x = r.stringify(f, h);
        yh(x) ? h.value = x : h.result = x, u(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function u(c, d) {
        c || !d ? o(c) : l ? l(d) : n(void 0, d);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), cn("processSync", this.parser || this.Parser), dn("processSync", this.compiler || this.Compiler), this.process(t, i), Ur("processSync", "process", n), r;
    function i(l, o) {
      n = !0, Vr(l), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    qr(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const s = Dt(n);
      i.run(t, s, u);
      function u(c, d, h) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          d || t
        );
        c ? a(c) : o ? o(f) : r(void 0, f, h);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, l), Ur("runSync", "run", r), i;
    function l(o, a) {
      Vr(o), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Dt(n), i = this.compiler || this.Compiler;
    return dn("stringify", i), qr(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (fn("use", this.frozen), t != null) if (typeof t == "function")
      s(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function l(u) {
      if (typeof u == "function")
        s(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [c, ...d] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(c, d);
        } else
          o(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(u.plugins), u.settings && (i.settings = on(!0, i.settings, u.settings));
    }
    function a(u) {
      let c = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++c < u.length; ) {
          const d = u[c];
          l(d);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, c) {
      let d = -1, h = -1;
      for (; ++d < r.length; )
        if (r[d][0] === u) {
          h = d;
          break;
        }
      if (h === -1)
        r.push([u, ...c]);
      else if (c.length > 0) {
        let [f, ...x] = c;
        const b = r[h][1];
        Pn(b) && Pn(f) && (f = on(!0, b, f)), r[h] = [u, f, ...x];
      }
    }
  }
}
const gh = new Jn().freeze();
function cn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function dn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function fn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function qr(e) {
  if (!Pn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ur(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Dt(e) {
  return xh(e) ? e : new Sl(e);
}
function xh(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function yh(e) {
  return typeof e == "string" || bh(e);
}
function bh(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const kh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Wr = [], Zr = { allowDangerousHtml: !0 }, wh = /^(https?|ircs?|mailto|xmpp)$/i, Ch = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function vh(e) {
  const t = Sh(e), n = Th(e);
  return Eh(t.runSync(t.parse(n), n), e);
}
function Sh(e) {
  const t = e.rehypePlugins || Wr, n = e.remarkPlugins || Wr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Zr } : Zr;
  return gh().use(rf).use(n).use(Qf, r).use(t);
}
function Th(e) {
  const t = e.children || "", n = new Sl();
  return typeof t == "string" && (n.value = t), n;
}
function Eh(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, s = t.urlTransform || Ih;
  for (const c of Ch)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + kh + c.id, void 0);
  return Qn(e, u), _u(e, {
    Fragment: p.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: p.jsx,
    jsxs: p.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(c, d, h) {
    if (c.type === "raw" && h && typeof d == "number")
      return o ? h.children.splice(d, 1) : h.children[d] = { type: "text", value: c.value }, d;
    if (c.type === "element") {
      let f;
      for (f in tn)
        if (Object.hasOwn(tn, f) && Object.hasOwn(c.properties, f)) {
          const x = c.properties[f], b = tn[f];
          (b === null || b.includes(c.tagName)) && (c.properties[f] = s(String(x || ""), f, c));
        }
    }
    if (c.type === "element") {
      let f = n ? !n.includes(c.tagName) : l ? l.includes(c.tagName) : !1;
      if (!f && r && typeof d == "number" && (f = !r(c, d, h)), f && h && typeof d == "number")
        return a && c.children ? h.children.splice(d, 1, ...c.children) : h.children.splice(d, 1), d;
    }
  }
}
function Ih(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    wh.test(e.slice(0, t)) ? e : ""
  );
}
const Ne = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], Kr = {
  ancestors: {
    tbody: ["table"],
    td: ["table"],
    th: ["table"],
    thead: ["table"],
    tfoot: ["table"],
    tr: ["table"]
  },
  attributes: {
    a: [
      ...Ne,
      // Note: these 3 are used by GFM footnotes, they do work on all links.
      "dataFootnoteBackref",
      "dataFootnoteRef",
      ["className", "data-footnote-backref"],
      "href"
    ],
    blockquote: ["cite"],
    // Note: this class is not normally allowed by GH, when manually writing
    // `code` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    code: [["className", /^language-./]],
    del: ["cite"],
    div: ["itemScope", "itemType"],
    dl: [...Ne],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [...Ne, "longDesc", "src"],
    // Note: `input` is not normally allowed by GH, when manually writing
    // it in markdown, they add it from tasklists some other way.
    // We can’t do that, so we have to allow it.
    input: [
      ["disabled", !0],
      ["type", "checkbox"]
    ],
    ins: ["cite"],
    // Note: this class is not normally allowed by GH, when manually writing
    // `li` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    li: [["className", "task-list-item"]],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ol: [...Ne, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [...Ne],
    table: [...Ne],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...Ne, ["className", "contains-task-list"]],
    "*": [
      "abbr",
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "align",
      "alt",
      "axis",
      "border",
      "cellPadding",
      "cellSpacing",
      "char",
      "charOff",
      "charSet",
      "checked",
      "clear",
      "colSpan",
      "color",
      "cols",
      "compact",
      "coords",
      "dateTime",
      "dir",
      // Note: `disabled` is technically allowed on all elements by GH.
      // But it is useless on everything except `input`.
      // Because `input`s are normally not allowed, but we allow them for
      // checkboxes due to tasklists, we allow `disabled` only there.
      "encType",
      "frame",
      "hSpace",
      "headers",
      "height",
      "hrefLang",
      "htmlFor",
      "id",
      "isMap",
      "itemProp",
      "label",
      "lang",
      "maxLength",
      "media",
      "method",
      "multiple",
      "name",
      "noHref",
      "noShade",
      "noWrap",
      "open",
      "prompt",
      "readOnly",
      "rev",
      "rowSpan",
      "rows",
      "rules",
      "scope",
      "selected",
      "shape",
      "size",
      "span",
      "start",
      "summary",
      "tabIndex",
      "title",
      "useMap",
      "vAlign",
      "value",
      "width"
    ]
  },
  clobber: ["ariaDescribedBy", "ariaLabelledBy", "id", "name"],
  clobberPrefix: "user-content-",
  protocols: {
    cite: ["http", "https"],
    href: ["http", "https", "irc", "ircs", "mailto", "xmpp"],
    longDesc: ["http", "https"],
    src: ["http", "https"]
  },
  required: {
    input: { disabled: !0, type: "checkbox" }
  },
  strip: ["script"],
  tagNames: [
    "a",
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "del",
    "details",
    "div",
    "dl",
    "dt",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    // Note: `input` is not normally allowed by GH, when manually writing
    // it in markdown, they add it from tasklists some other way.
    // We can’t do that, so we have to allow it.
    "input",
    "ins",
    "kbd",
    "li",
    "ol",
    "p",
    "picture",
    "pre",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "section",
    "source",
    "span",
    "strike",
    "strong",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "tt",
    "ul",
    "var"
  ]
}, Be = {}.hasOwnProperty;
function Ah(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...Kr, ...t } : Kr,
    stack: []
  }, i = Tl(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function Tl(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Ph(e, n);
      case "doctype":
        return Lh(e, n);
      case "element":
        return Dh(e, n);
      case "root":
        return Rh(e, n);
      case "text":
        return Fh(e, n);
    }
  }
}
function Ph(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return bt(l, t), l;
  }
}
function Lh(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return bt(n, t), n;
  }
}
function Dh(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    El(e, t.children)
  ), i = jh(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && Be.call(e.schema.ancestors, n))) {
    const a = e.schema.ancestors[n];
    let s = -1;
    for (l = !1; ++s < a.length; )
      e.stack.includes(a[s]) && (l = !0);
  }
  if (!l)
    return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
  const o = {
    type: "element",
    tagName: n,
    properties: i,
    children: r
  };
  return bt(o, t), o;
}
function Rh(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    El(e, t.children)
  ) };
  return bt(r, t), r;
}
function Fh(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return bt(r, t), r;
}
function El(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = Tl(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function jh(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && Be.call(r, n) ? r[n] : void 0, o = r && Be.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), s = {};
  let u;
  for (u in a)
    if (Be.call(a, u)) {
      const c = a[u];
      let d = Gr(
        e,
        Xr(l, u),
        u,
        c
      );
      d == null && (d = Gr(e, Xr(o, u), u, c)), d != null && (s[u] = d);
    }
  if (i && Be.call(i, n)) {
    const c = i[n];
    for (u in c)
      Be.call(c, u) && !Be.call(s, u) && (s[u] = c[u]);
  }
  return s;
}
function Gr(e, t, n, r) {
  return t ? Array.isArray(r) ? Mh(e, t, n, r) : Il(e, t, n, r) : void 0;
}
function Mh(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = Il(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function Il(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && $h(e, n, r)) {
    if (typeof t == "object" && t.length > 1) {
      let i = !1, l = 0;
      for (; ++l < t.length; ) {
        const o = t[l];
        if (o && typeof o == "object" && "flags" in o) {
          if (o.test(String(r))) {
            i = !0;
            break;
          }
        } else if (o === r) {
          i = !0;
          break;
        }
      }
      if (!i) return;
    }
    return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(n) ? e.schema.clobberPrefix + r : r;
  }
}
function $h(e, t, n) {
  const r = e.schema.protocols && Be.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
  if (!r || r.length === 0)
    return !0;
  const i = String(n), l = i.indexOf(":"), o = i.indexOf("?"), a = i.indexOf("#"), s = i.indexOf("/");
  if (l < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  s > -1 && l > s || o > -1 && l > o || a > -1 && l > a)
    return !0;
  let u = -1;
  for (; ++u < r.length; ) {
    const c = r[u];
    if (l === c.length && i.slice(0, c.length) === c)
      return !0;
  }
  return !1;
}
function bt(e, t) {
  const n = Qi(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = pt(t.data)), n && (e.position = n);
}
function Xr(e, t) {
  let n, r = -1;
  if (e)
    for (; ++r < e.length; ) {
      const i = e[r], l = typeof i == "string" ? i : i[0];
      if (l === t)
        return i;
      l === "data*" && (n = i);
    }
  if (t.length > 4 && t.slice(0, 4).toLowerCase() === "data")
    return n;
}
function Bh(e) {
  return function(t) {
    return (
      /** @type {Root} */
      Ah(t, e)
    );
  };
}
function Yr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function zh(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Oh(e, t, n) {
  const i = qt((n || {}).ignore || []), l = _h(t);
  let o = -1;
  for (; ++o < l.length; )
    vl(e, "text", a);
  function a(u, c) {
    let d = -1, h;
    for (; ++d < c.length; ) {
      const f = c[d], x = h ? h.children : void 0;
      if (i(
        f,
        x ? x.indexOf(f) : void 0,
        h
      ))
        return;
      h = f;
    }
    if (h)
      return s(u, c);
  }
  function s(u, c) {
    const d = c[c.length - 1], h = l[o][0], f = l[o][1];
    let x = 0;
    const v = d.children.indexOf(u);
    let y = !1, T = [];
    h.lastIndex = 0;
    let S = h.exec(u.value);
    for (; S; ) {
      const I = S.index, A = {
        index: S.index,
        input: S.input,
        stack: [...c, u]
      };
      let w = f(...S, A);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? h.lastIndex = I + 1 : (x !== I && T.push({
        type: "text",
        value: u.value.slice(x, I)
      }), Array.isArray(w) ? T.push(...w) : w && T.push(w), x = I + S[0].length, y = !0), !h.global)
        break;
      S = h.exec(u.value);
    }
    return y ? (x < u.value.length && T.push({ type: "text", value: u.value.slice(x) }), d.children.splice(v, 1, ...T)) : T = [u], v + T.length;
  }
}
function _h(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Vh(i[0]), Nh(i[1])]);
  }
  return t;
}
function Vh(e) {
  return typeof e == "string" ? new RegExp(zh(e), "g") : e;
}
function Nh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const hn = "phrasing", pn = ["autolink", "link", "image", "label"];
function Hh() {
  return {
    transforms: [Xh],
    enter: {
      literalAutolink: Uh,
      literalAutolinkEmail: mn,
      literalAutolinkHttp: mn,
      literalAutolinkWww: mn
    },
    exit: {
      literalAutolink: Gh,
      literalAutolinkEmail: Kh,
      literalAutolinkHttp: Wh,
      literalAutolinkWww: Zh
    }
  };
}
function qh() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: hn,
        notInConstruct: pn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: hn,
        notInConstruct: pn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: hn,
        notInConstruct: pn
      }
    ]
  };
}
function Uh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function mn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Wh(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Zh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Kh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Gh(e) {
  this.exit(e);
}
function Xh(e) {
  Oh(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Yh],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Qh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Yh(e, t, n, r, i) {
  let l = "";
  if (!Al(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !Jh(n)))
    return !1;
  const o = ep(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function Qh(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Al(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Jh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function ep(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Yr(e, "(");
  let l = Yr(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function Al(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ue(n) || Vt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Pl.peek = up;
function tp() {
  this.buffer();
}
function np(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function rp() {
  this.buffer();
}
function ip(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function lp(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = we(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function op(e) {
  this.exit(e);
}
function ap(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = we(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function sp(e) {
  this.exit(e);
}
function up() {
  return "[";
}
function Pl(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function cp() {
  return {
    enter: {
      gfmFootnoteCallString: tp,
      gfmFootnoteCall: np,
      gfmFootnoteDefinitionLabelString: rp,
      gfmFootnoteDefinition: ip
    },
    exit: {
      gfmFootnoteCallString: lp,
      gfmFootnoteCall: op,
      gfmFootnoteDefinitionLabelString: ap,
      gfmFootnoteDefinition: sp
    }
  };
}
function dp(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Pl },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, l, o) {
    const a = l.createTracker(o);
    let s = a.move("[^");
    const u = l.enter("footnoteDefinition"), c = l.enter("label");
    return s += a.move(
      l.safe(l.associationId(r), { before: s, after: "]" })
    ), c(), s += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), s += a.move(
      (t ? `
` : " ") + l.indentLines(
        l.containerFlow(r, a.current()),
        t ? Ll : fp
      )
    )), u(), s;
  }
}
function fp(e, t, n) {
  return t === 0 ? e : Ll(e, t, n);
}
function Ll(e, t, n) {
  return (n ? "" : "    ") + e;
}
const hp = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Dl.peek = yp;
function pp() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: gp },
    exit: { strikethrough: xp }
  };
}
function mp() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: hp
      }
    ],
    handlers: { delete: Dl }
  };
}
function gp(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function xp(e) {
  this.exit(e);
}
function Dl(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function yp() {
  return "~";
}
function bp(e) {
  return e.length;
}
function kp(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || bp, l = [], o = [], a = [], s = [];
  let u = 0, c = -1;
  for (; ++c < e.length; ) {
    const b = [], v = [];
    let y = -1;
    for (e[c].length > u && (u = e[c].length); ++y < e[c].length; ) {
      const T = wp(e[c][y]);
      if (n.alignDelimiters !== !1) {
        const S = i(T);
        v[y] = S, (s[y] === void 0 || S > s[y]) && (s[y] = S);
      }
      b.push(T);
    }
    o[c] = b, a[c] = v;
  }
  let d = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++d < u; )
      l[d] = Qr(r[d]);
  else {
    const b = Qr(r);
    for (; ++d < u; )
      l[d] = b;
  }
  d = -1;
  const h = [], f = [];
  for (; ++d < u; ) {
    const b = l[d];
    let v = "", y = "";
    b === 99 ? (v = ":", y = ":") : b === 108 ? v = ":" : b === 114 && (y = ":");
    let T = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[d] - v.length - y.length
    );
    const S = v + "-".repeat(T) + y;
    n.alignDelimiters !== !1 && (T = v.length + T + y.length, T > s[d] && (s[d] = T), f[d] = T), h[d] = S;
  }
  o.splice(1, 0, h), a.splice(1, 0, f), c = -1;
  const x = [];
  for (; ++c < o.length; ) {
    const b = o[c], v = a[c];
    d = -1;
    const y = [];
    for (; ++d < u; ) {
      const T = b[d] || "";
      let S = "", I = "";
      if (n.alignDelimiters !== !1) {
        const A = s[d] - (v[d] || 0), w = l[d];
        w === 114 ? S = " ".repeat(A) : w === 99 ? A % 2 ? (S = " ".repeat(A / 2 + 0.5), I = " ".repeat(A / 2 - 0.5)) : (S = " ".repeat(A / 2), I = S) : I = " ".repeat(A);
      }
      n.delimiterStart !== !1 && !d && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && T === "") && (n.delimiterStart !== !1 || d) && y.push(" "), n.alignDelimiters !== !1 && y.push(S), y.push(T), n.alignDelimiters !== !1 && y.push(I), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || d !== u - 1) && y.push("|");
    }
    x.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return x.join(`
`);
}
function wp(e) {
  return e == null ? "" : String(e);
}
function Qr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Cp(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    vp
  );
  return i(), o;
}
function vp(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Sp(e, t) {
  return Jr(e, t.inConstruct, !0) && !Jr(e, t.notInConstruct, !1);
}
function Jr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function ei(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Sp(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Tp(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function Ep(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Ip(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Ap(e, t, n, r) {
  const i = Ip(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (Ep(e, n)) {
    const d = n.enter("codeIndented"), h = n.indentLines(l, Pp);
    return d(), h;
  }
  const a = n.createTracker(r), s = i.repeat(Math.max(Tp(l, i) + 1, 3)), u = n.enter("codeFenced");
  let c = a.move(s);
  if (e.lang) {
    const d = n.enter(`codeFencedLang${o}`);
    c += a.move(
      n.safe(e.lang, {
        before: c,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), d();
  }
  if (e.lang && e.meta) {
    const d = n.enter(`codeFencedMeta${o}`);
    c += a.move(" "), c += a.move(
      n.safe(e.meta, {
        before: c,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), d();
  }
  return c += a.move(`
`), l && (c += a.move(l + `
`)), c += a.move(s), u(), c;
}
function Pp(e, t, n) {
  return (n ? "" : "    ") + e;
}
function er(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Lp(e, t, n, r) {
  const i = er(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("[");
  return u += s.move(
    n.safe(n.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })
  ), u += s.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    })
  )), a(), e.title && (a = n.enter(`title${l}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), o(), u;
}
function Dp(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function mt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Ot(e, t, n) {
  const r = Je(e), i = Je(t);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
Rl.peek = Rp;
function Rl(e, t, n, r) {
  const i = Dp(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = Ot(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = mt(u) + s.slice(1));
  const d = s.charCodeAt(s.length - 1), h = Ot(r.after.charCodeAt(0), d, i);
  h.inside && (s = s.slice(0, -1) + mt(d));
  const f = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: c.outside
  }, a + s + f;
}
function Rp(e, t, n) {
  return n.options.emphasis || "*";
}
function Fp(e, t) {
  let n = !1;
  return Qn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, In;
  }), !!((!e.depth || e.depth < 3) && Un(e) && (t.options.setext || n));
}
function jp(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (Fp(e, n)) {
    const c = n.enter("headingSetext"), d = n.enter("phrasing"), h = n.containerPhrasing(e, {
      ...l.current(),
      before: `
`,
      after: `
`
    });
    return d(), c(), h + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      h.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1)
    );
  }
  const o = "#".repeat(i), a = n.enter("headingAtx"), s = n.enter("phrasing");
  l.move(o + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...l.current()
  });
  return /^[\t ]/.test(u) && (u = mt(u.charCodeAt(0)) + u.slice(1)), u = u ? o + " " + u : o, n.options.closeAtx && (u += " " + o), s(), a(), u;
}
Fl.peek = Mp;
function Fl(e) {
  return e.value || "";
}
function Mp() {
  return "<";
}
jl.peek = $p;
function jl(e, t, n, r) {
  const i = er(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
  let a = n.enter("label");
  const s = n.createTracker(r);
  let u = s.move("![");
  return u += s.move(
    n.safe(e.alt, { before: u, after: "]", ...s.current() })
  ), u += s.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), u += s.move("<"), u += s.move(
    n.safe(e.url, { before: u, after: ">", ...s.current() })
  ), u += s.move(">")) : (a = n.enter("destinationRaw"), u += s.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    })
  )), a(), e.title && (a = n.enter(`title${l}`), u += s.move(" " + i), u += s.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })
  ), u += s.move(i), a()), u += s.move(")"), o(), u;
}
function $p() {
  return "!";
}
Ml.peek = Bp;
function Ml(e, t, n, r) {
  const i = e.referenceType, l = n.enter("imageReference");
  let o = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("![");
  const u = n.safe(e.alt, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), o();
  const c = n.stack;
  n.stack = [], o = n.enter("reference");
  const d = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = c, l(), i === "full" || !u || u !== d ? s += a.move(d + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Bp() {
  return "!";
}
$l.peek = zp;
function $l(e, t, n) {
  let r = e.value || "", i = "`", l = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++l < n.unsafe.length; ) {
    const o = n.unsafe[l], a = n.compilePattern(o);
    let s;
    if (o.atBreak)
      for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
  }
  return i + r + i;
}
function zp() {
  return "`";
}
function Bl(e, t) {
  const n = Un(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
zl.peek = Op;
function zl(e, t, n, r) {
  const i = er(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, s;
  if (Bl(e, n)) {
    const c = n.stack;
    n.stack = [], a = n.enter("autolink");
    let d = o.move("<");
    return d += o.move(
      n.containerPhrasing(e, {
        before: d,
        after: ">",
        ...o.current()
      })
    ), d += o.move(">"), a(), n.stack = c, d;
  }
  a = n.enter("link"), s = n.enter("label");
  let u = o.move("[");
  return u += o.move(
    n.containerPhrasing(e, {
      before: u,
      after: "](",
      ...o.current()
    })
  ), u += o.move("]("), s(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), u += o.move("<"), u += o.move(
    n.safe(e.url, { before: u, after: ">", ...o.current() })
  ), u += o.move(">")) : (s = n.enter("destinationRaw"), u += o.move(
    n.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...o.current()
    })
  )), s(), e.title && (s = n.enter(`title${l}`), u += o.move(" " + i), u += o.move(
    n.safe(e.title, {
      before: u,
      after: i,
      ...o.current()
    })
  ), u += o.move(i), s()), u += o.move(")"), a(), u;
}
function Op(e, t, n) {
  return Bl(e, n) ? "<" : "[";
}
Ol.peek = _p;
function Ol(e, t, n, r) {
  const i = e.referenceType, l = n.enter("linkReference");
  let o = n.enter("label");
  const a = n.createTracker(r);
  let s = a.move("[");
  const u = n.containerPhrasing(e, {
    before: s,
    after: "]",
    ...a.current()
  });
  s += a.move(u + "]["), o();
  const c = n.stack;
  n.stack = [], o = n.enter("reference");
  const d = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = c, l(), i === "full" || !u || u !== d ? s += a.move(d + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function _p() {
  return "[";
}
function tr(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Vp(e) {
  const t = tr(e), n = e.options.bulletOther;
  if (!n)
    return t === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === t)
    throw new Error(
      "Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function Np(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function _l(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Hp(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? Np(n) : tr(n);
  const a = e.ordered ? o === "." ? ")" : "." : Vp(n);
  let s = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), _l(n) === o && c
    ) {
      let d = -1;
      for (; ++d < e.children.length; ) {
        const h = e.children[d];
        if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
          s = !0;
          break;
        }
      }
    }
  }
  s && (o = a), n.bulletCurrent = o;
  const u = n.containerFlow(e, r);
  return n.bulletLastUsed = o, n.bulletCurrent = l, i(), u;
}
function qp(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Up(e, t, n, r) {
  const i = qp(n);
  let l = n.bulletCurrent || tr(n);
  t && t.type === "list" && t.ordered && (l = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + l);
  let o = l.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const a = n.createTracker(r);
  a.move(l + " ".repeat(o - l.length)), a.shift(o);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, a.current()),
    c
  );
  return s(), u;
  function c(d, h, f) {
    return h ? (f ? "" : " ".repeat(o)) + d : (f ? l : l + " ".repeat(o - l.length)) + d;
  }
}
function Wp(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const Zp = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  qt([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function Kp(e, t, n, r) {
  return (e.children.some(function(o) {
    return Zp(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Gp(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Vl.peek = Xp;
function Vl(e, t, n, r) {
  const i = Gp(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = Ot(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = mt(u) + s.slice(1));
  const d = s.charCodeAt(s.length - 1), h = Ot(r.after.charCodeAt(0), d, i);
  h.inside && (s = s.slice(0, -1) + mt(d));
  const f = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: c.outside
  }, a + s + f;
}
function Xp(e, t, n) {
  return n.options.strong || "*";
}
function Yp(e, t, n, r) {
  return n.safe(e.value, r);
}
function Qp(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Jp(e, t, n) {
  const r = (_l(n) + (n.options.ruleSpaces ? " " : "")).repeat(Qp(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Nl = {
  blockquote: Cp,
  break: ei,
  code: Ap,
  definition: Lp,
  emphasis: Rl,
  hardBreak: ei,
  heading: jp,
  html: Fl,
  image: jl,
  imageReference: Ml,
  inlineCode: $l,
  link: zl,
  linkReference: Ol,
  list: Hp,
  listItem: Up,
  paragraph: Wp,
  root: Kp,
  strong: Vl,
  text: Yp,
  thematicBreak: Jp
};
function e1() {
  return {
    enter: {
      table: t1,
      tableData: ti,
      tableHeader: ti,
      tableRow: r1
    },
    exit: {
      codeText: i1,
      table: n1,
      tableData: gn,
      tableHeader: gn,
      tableRow: gn
    }
  };
}
function t1(e) {
  const t = e._align;
  this.enter(
    {
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    e
  ), this.data.inTable = !0;
}
function n1(e) {
  this.exit(e), this.data.inTable = void 0;
}
function r1(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function gn(e) {
  this.exit(e);
}
function ti(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function i1(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, l1));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function l1(e, t) {
  return t === "|" ? t : e;
}
function o1(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, l = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: h,
      table: o,
      tableCell: s,
      tableRow: a
    }
  };
  function o(f, x, b, v) {
    return u(c(f, b, v), f.align);
  }
  function a(f, x, b, v) {
    const y = d(f, b, v), T = u([y]);
    return T.slice(0, T.indexOf(`
`));
  }
  function s(f, x, b, v) {
    const y = b.enter("tableCell"), T = b.enter("phrasing"), S = b.containerPhrasing(f, {
      ...v,
      before: l,
      after: l
    });
    return T(), y(), S;
  }
  function u(f, x) {
    return kp(f, {
      align: x,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function c(f, x, b) {
    const v = f.children;
    let y = -1;
    const T = [], S = x.enter("table");
    for (; ++y < v.length; )
      T[y] = d(v[y], x, b);
    return S(), T;
  }
  function d(f, x, b) {
    const v = f.children;
    let y = -1;
    const T = [], S = x.enter("tableRow");
    for (; ++y < v.length; )
      T[y] = s(v[y], f, x, b);
    return S(), T;
  }
  function h(f, x, b) {
    let v = Nl.inlineCode(f, x, b);
    return b.stack.includes("tableCell") && (v = v.replace(/\|/g, "\\$&")), v;
  }
}
function a1() {
  return {
    exit: {
      taskListCheckValueChecked: ni,
      taskListCheckValueUnchecked: ni,
      paragraph: u1
    }
  };
}
function s1() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: c1 }
  };
}
function ni(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function u1(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let l = -1, o;
      for (; ++l < i.length; ) {
        const a = i[l];
        if (a.type === "paragraph") {
          o = a;
          break;
        }
      }
      o === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function c1(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let s = Nl.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + o;
  }
}
function d1() {
  return [
    Hh(),
    cp(),
    pp(),
    e1(),
    a1()
  ];
}
function f1(e) {
  return {
    extensions: [
      qh(),
      dp(e),
      mp(),
      o1(e),
      s1()
    ]
  };
}
const h1 = {
  tokenize: b1,
  partial: !0
}, Hl = {
  tokenize: k1,
  partial: !0
}, ql = {
  tokenize: w1,
  partial: !0
}, Ul = {
  tokenize: C1,
  partial: !0
}, p1 = {
  tokenize: v1,
  partial: !0
}, Wl = {
  name: "wwwAutolink",
  tokenize: x1,
  previous: Kl
}, Zl = {
  name: "protocolAutolink",
  tokenize: y1,
  previous: Gl
}, Re = {
  name: "emailAutolink",
  tokenize: g1,
  previous: Xl
}, Ie = {};
function m1() {
  return {
    text: Ie
  };
}
let He = 48;
for (; He < 123; )
  Ie[He] = Re, He++, He === 58 ? He = 65 : He === 91 && (He = 97);
Ie[43] = Re;
Ie[45] = Re;
Ie[46] = Re;
Ie[95] = Re;
Ie[72] = [Re, Zl];
Ie[104] = [Re, Zl];
Ie[87] = [Re, Wl];
Ie[119] = [Re, Wl];
function g1(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(d) {
    return !Dn(d) || !Xl.call(r, r.previous) || nr(r.events) ? n(d) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(d));
  }
  function a(d) {
    return Dn(d) ? (e.consume(d), a) : d === 64 ? (e.consume(d), s) : n(d);
  }
  function s(d) {
    return d === 46 ? e.check(p1, c, u)(d) : d === 45 || d === 95 || re(d) ? (l = !0, e.consume(d), s) : c(d);
  }
  function u(d) {
    return e.consume(d), i = !0, s;
  }
  function c(d) {
    return l && i && oe(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(d)) : n(d);
  }
}
function x1(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !Kl.call(r, r.previous) || nr(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(h1, e.attempt(Hl, e.attempt(ql, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function y1(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(d) {
    return (d === 72 || d === 104) && Gl.call(r, r.previous) && !nr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(d), e.consume(d), a) : n(d);
  }
  function a(d) {
    if (oe(d) && i.length < 5)
      return i += String.fromCodePoint(d), e.consume(d), a;
    if (d === 58) {
      const h = i.toLowerCase();
      if (h === "http" || h === "https")
        return e.consume(d), s;
    }
    return n(d);
  }
  function s(d) {
    return d === 47 ? (e.consume(d), l ? u : (l = !0, s)) : n(d);
  }
  function u(d) {
    return d === null || Bt(d) || K(d) || Ue(d) || Vt(d) ? n(d) : e.attempt(Hl, e.attempt(ql, c), n)(d);
  }
  function c(d) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(d);
  }
}
function b1(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function k1(e, t, n) {
  let r, i, l;
  return o;
  function o(u) {
    return u === 46 || u === 95 ? e.check(Ul, s, a)(u) : u === null || K(u) || Ue(u) || u !== 45 && Vt(u) ? s(u) : (l = !0, e.consume(u), o);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), o;
  }
  function s(u) {
    return i || r || !l ? n(u) : t(u);
  }
}
function w1(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(Ul, t, l)(o) : o === null || K(o) || Ue(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function C1(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || K(a) || Ue(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || K(a) || Ue(a) ? t(a) : r(a);
  }
  function l(a) {
    return oe(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : oe(a) ? (e.consume(a), o) : n(a);
  }
}
function v1(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return re(l) ? n(l) : t(l);
  }
}
function Kl(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || K(e);
}
function Gl(e) {
  return !oe(e);
}
function Xl(e) {
  return !(e === 47 || Dn(e));
}
function Dn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || re(e);
}
function nr(e) {
  let t = e.length, n = !1;
  for (; t--; ) {
    const r = e[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const S1 = {
  tokenize: R1,
  partial: !0
};
function T1() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: P1,
        continuation: {
          tokenize: L1
        },
        exit: D1
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: A1
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: E1,
        resolveTo: I1
      }
    }
  };
}
function E1(e, t, n) {
  const r = this;
  let i = r.events.length;
  const l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o;
  for (; i--; ) {
    const s = r.events[i][1];
    if (s.type === "labelImage") {
      o = s;
      break;
    }
    if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link")
      break;
  }
  return a;
  function a(s) {
    if (!o || !o._balanced)
      return n(s);
    const u = we(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !l.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function I1(e, t) {
  let n = e.length;
  for (; n--; )
    if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
  e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, e[n + 3][1].start),
    end: Object.assign({}, e[e.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, e[n + 3][1].end),
    end: Object.assign({}, e[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const l = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, o = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, l.start),
    end: Object.assign({}, l.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    e[n + 1],
    e[n + 2],
    ["enter", r, t],
    // The `[`
    e[n + 3],
    e[n + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", l, t],
    ["enter", o, t],
    ["exit", o, t],
    ["exit", l, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function A1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l = 0, o;
  return a;
  function a(d) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(d), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(d) {
    return d !== 94 ? n(d) : (e.enter("gfmFootnoteCallMarker"), e.consume(d), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(d) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      d === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      d === null || d === 91 || K(d)
    )
      return n(d);
    if (d === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return i.includes(we(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(d), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(d);
    }
    return K(d) || (o = !0), l++, e.consume(d), d === 92 ? c : u;
  }
  function c(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, u) : u(d);
  }
}
function P1(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l, o = 0, a;
  return s;
  function s(x) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(x), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(x) {
    return x === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(x), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(x);
  }
  function c(x) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      x === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      x === null || x === 91 || K(x)
    )
      return n(x);
    if (x === 93) {
      e.exit("chunkString");
      const b = e.exit("gfmFootnoteDefinitionLabelString");
      return l = we(r.sliceSerialize(b)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(x), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return K(x) || (a = !0), o++, e.consume(x), x === 92 ? d : c;
  }
  function d(x) {
    return x === 91 || x === 92 || x === 93 ? (e.consume(x), o++, c) : c(x);
  }
  function h(x) {
    return x === 58 ? (e.enter("definitionMarker"), e.consume(x), e.exit("definitionMarker"), i.includes(l) || i.push(l), Z(e, f, "gfmFootnoteDefinitionWhitespace")) : n(x);
  }
  function f(x) {
    return t(x);
  }
}
function L1(e, t, n) {
  return e.check(xt, t, e.attempt(S1, t, n));
}
function D1(e) {
  e.exit("gfmFootnoteDefinition");
}
function R1(e, t, n) {
  const r = this;
  return Z(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l);
  }
}
function F1(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: l,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(o, a) {
    let s = -1;
    for (; ++s < o.length; )
      if (o[s][0] === "enter" && o[s][1].type === "strikethroughSequenceTemporary" && o[s][1]._close) {
        let u = s;
        for (; u--; )
          if (o[u][0] === "exit" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._open && // If the sizes are the same:
          o[s][1].end.offset - o[s][1].start.offset === o[u][1].end.offset - o[u][1].start.offset) {
            o[s][1].type = "strikethroughSequence", o[u][1].type = "strikethroughSequence";
            const c = {
              type: "strikethrough",
              start: Object.assign({}, o[u][1].start),
              end: Object.assign({}, o[s][1].end)
            }, d = {
              type: "strikethroughText",
              start: Object.assign({}, o[u][1].end),
              end: Object.assign({}, o[s][1].start)
            }, h = [["enter", c, a], ["enter", o[u][1], a], ["exit", o[u][1], a], ["enter", d, a]], f = a.parser.constructs.insideSpan.null;
            f && me(h, h.length, 0, Nt(f, o.slice(u + 1, s), a)), me(h, h.length, 0, [["exit", d, a], ["enter", o[s][1], a], ["exit", o[s][1], a], ["exit", c, a]]), me(o, u - 1, s - u + 3, h), s = u + h.length - 2;
            break;
          }
      }
    for (s = -1; ++s < o.length; )
      o[s][1].type === "strikethroughSequenceTemporary" && (o[s][1].type = "data");
    return o;
  }
  function l(o, a, s) {
    const u = this.previous, c = this.events;
    let d = 0;
    return h;
    function h(x) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(x) : (o.enter("strikethroughSequenceTemporary"), f(x));
    }
    function f(x) {
      const b = Je(u);
      if (x === 126)
        return d > 1 ? s(x) : (o.consume(x), d++, f);
      if (d < 2 && !n) return s(x);
      const v = o.exit("strikethroughSequenceTemporary"), y = Je(x);
      return v._open = !y || y === 2 && !!b, v._close = !b || b === 2 && !!y, a(x);
    }
  }
}
class j1 {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(t, n, r) {
    M1(this, t, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(t) {
    if (this.map.sort(function(l, o) {
      return l[0] - o[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const l of i)
        t.push(l);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function M1(e, t, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < e.map.length; ) {
      if (e.map[i][0] === t) {
        e.map[i][1] += n, e.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e.map.push([t, n, r]);
  }
}
function $1(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const l = r.length - 1;
          r[l] = r[l] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function B1() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: z1,
        resolveAll: O1
      }
    }
  };
}
function z1(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(C) {
    let $ = r.events.length - 1;
    for (; $ > -1; ) {
      const O = r.events[$][1].type;
      if (O === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      O === "linePrefix") $--;
      else break;
    }
    const z = $ > -1 ? r.events[$][1].type : null, N = z === "tableHead" || z === "tableRow" ? w : s;
    return N === w && r.parser.lazy[r.now().line] ? n(C) : N(C);
  }
  function s(C) {
    return e.enter("tableHead"), e.enter("tableRow"), u(C);
  }
  function u(C) {
    return C === 124 || (o = !0, l += 1), c(C);
  }
  function c(C) {
    return C === null ? n(C) : _(C) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), f) : n(C) : q(C) ? Z(e, c, "whitespace")(C) : (l += 1, o && (o = !1, i += 1), C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), o = !0, c) : (e.enter("data"), d(C)));
  }
  function d(C) {
    return C === null || C === 124 || K(C) ? (e.exit("data"), c(C)) : (e.consume(C), C === 92 ? h : d);
  }
  function h(C) {
    return C === 92 || C === 124 ? (e.consume(C), d) : d(C);
  }
  function f(C) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(C) : (e.enter("tableDelimiterRow"), o = !1, q(C) ? Z(e, x, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : x(C));
  }
  function x(C) {
    return C === 45 || C === 58 ? v(C) : C === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), b) : A(C);
  }
  function b(C) {
    return q(C) ? Z(e, v, "whitespace")(C) : v(C);
  }
  function v(C) {
    return C === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), y) : C === 45 ? (l += 1, y(C)) : C === null || _(C) ? I(C) : A(C);
  }
  function y(C) {
    return C === 45 ? (e.enter("tableDelimiterFiller"), T(C)) : A(C);
  }
  function T(C) {
    return C === 45 ? (e.consume(C), T) : C === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), S) : (e.exit("tableDelimiterFiller"), S(C));
  }
  function S(C) {
    return q(C) ? Z(e, I, "whitespace")(C) : I(C);
  }
  function I(C) {
    return C === 124 ? x(C) : C === null || _(C) ? !o || i !== l ? A(C) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(C)) : A(C);
  }
  function A(C) {
    return n(C);
  }
  function w(C) {
    return e.enter("tableRow"), L(C);
  }
  function L(C) {
    return C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), L) : C === null || _(C) ? (e.exit("tableRow"), t(C)) : q(C) ? Z(e, L, "whitespace")(C) : (e.enter("data"), F(C));
  }
  function F(C) {
    return C === null || C === 124 || K(C) ? (e.exit("data"), L(C)) : (e.consume(C), C === 92 ? B : F);
  }
  function B(C) {
    return C === 92 || C === 124 ? (e.consume(C), F) : F(C);
  }
}
function O1(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, s = 0, u, c, d;
  const h = new j1();
  for (; ++n < e.length; ) {
    const f = e[n], x = f[1];
    f[0] === "enter" ? x.type === "tableHead" ? (a = !1, s !== 0 && (ri(h, t, s, u, c), c = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, x.start),
      // Note: correct end is set later.
      end: Object.assign({}, x.end)
    }, h.add(n, 0, [["enter", u, t]])) : x.type === "tableRow" || x.type === "tableDelimiterRow" ? (r = !0, d = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, c = {
      type: "tableBody",
      start: Object.assign({}, x.start),
      // Note: correct end is set later.
      end: Object.assign({}, x.end)
    }, h.add(n, 0, [["enter", c, t]])), i = x.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (x.type === "data" || x.type === "tableDelimiterMarker" || x.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], d = Rt(h, t, l, i, void 0, d), l = [0, 0, 0, 0]), o[2] = n)) : x.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], d = Rt(h, t, l, i, void 0, d)), l = o, o = [l[1], n, 0, 0])) : x.type === "tableHead" ? (a = !0, s = n) : x.type === "tableRow" || x.type === "tableDelimiterRow" ? (s = n, l[1] !== 0 ? (o[0] = o[1], d = Rt(h, t, l, i, n, d)) : o[1] !== 0 && (d = Rt(h, t, o, i, n, d)), i = 0) : i && (x.type === "data" || x.type === "tableDelimiterMarker" || x.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (s !== 0 && ri(h, t, s, u, c), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = $1(t.events, n));
  }
  return e;
}
function Rt(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, Xe(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const s = Xe(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const u = Xe(t.events, n[2]), c = Xe(t.events, n[3]), d = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, c)
    };
    if (e.add(n[2], 0, [["enter", d, t]]), r !== 2) {
      const h = t.events[n[2]], f = t.events[n[3]];
      if (h[1].end = Object.assign({}, f[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const x = n[2] + 1, b = n[3] - n[2] - 1;
        e.add(x, b, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", d, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, Xe(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function ri(e, t, n, r, i) {
  const l = [], o = Xe(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function Xe(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const _1 = {
  name: "tasklistCheck",
  tokenize: N1
};
function V1() {
  return {
    text: {
      91: _1
    }
  };
}
function N1(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), l)
    );
  }
  function l(s) {
    return K(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), o) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), o) : n(s);
  }
  function o(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return _(s) ? t(s) : q(s) ? e.check({
      tokenize: H1
    }, t, n)(s) : n(s);
  }
}
function H1(e, t, n) {
  return Z(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function q1(e) {
  return il([
    m1(),
    T1(),
    F1(e),
    B1(),
    V1()
  ]);
}
const U1 = {};
function W1(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || U1, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(q1(n)), l.push(d1()), o.push(f1(n));
}
const Z1 = U.div`
    word-break: break-word;
    overflow-wrap: break-word;
    min-width: 0;

    p {
        margin: 0.5em 0;
    }

    pre {
        background-color: ${({ theme: e }) => e.colorsBackgroundTableHeaderDefault};
        border: 1px solid ${({ theme: e }) => e.colorsBorderSecondary};
        border-radius: 4px;
        padding: 12px;
        overflow-x: auto;
        margin: 0.5em 0;

        code {
            background: none;
            padding: 0;
            border: none;
            font-size: 0.85em;
        }
    }

    code {
        background-color: ${({ theme: e }) => e.colorsBackgroundTableHeaderDefault};
        border-radius: 3px;
        padding: 2px 4px;
        font-size: 0.85em;
        font-family: monospace;
    }

    table {
        border-collapse: collapse;
        width: 100%;
        margin: 0.5em 0;
        overflow-x: auto;
        display: block;
    }

    th,
    td {
        border: 1px solid ${({ theme: e }) => e.colorsBorderSecondary};
        padding: 6px 12px;
        text-align: left;
    }

    th {
        background-color: ${({ theme: e }) => e.colorsBackgroundDefault};
    }

    ul,
    ol {
        padding-left: 1.5em;
    }

    blockquote {
        border-left: 3px solid ${({ theme: e }) => e.colorsBorderSecondary};
        margin: 0.5em 0;
        padding-left: 12px;
        color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    }

    a {
        color: ${({ theme: e }) => e.colorsTextLink};
    }
`, Rn = ({ content: e, className: t }) => /* @__PURE__ */ p.jsx(Z1, { className: t, children: /* @__PURE__ */ p.jsx(vh, { remarkPlugins: [W1], rehypePlugins: [Bh], children: e }) }), K1 = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ p.jsxs(De, { children: [
  e && /* @__PURE__ */ p.jsx(rr, { children: /* @__PURE__ */ p.jsx(bo, { children: /* @__PURE__ */ p.jsx(
    ko,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ p.jsx(rr, { fullWidth: !0, children: /* @__PURE__ */ p.jsx(wo, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), G1 = U.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`, Yl = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ p.jsx(G1, { children: e.map((r, i) => {
  var l, o, a, s;
  return /* @__PURE__ */ p.jsx(
    K1,
    {
      label: r.key,
      ariaLabel: "variable-" + r.key,
      value: r.value,
      onChange: (u) => n(i, u),
      badgeBackgroundColor: ((o = (l = t[i]) == null ? void 0 : l.style) == null ? void 0 : o.backgroundColor) || "initial",
      badgeBorderColor: ((s = (a = t[i]) == null ? void 0 : a.style) == null ? void 0 : s.borderColor) || "initial"
    },
    `${r.key}-${i}`
  );
}) }) : null, Ql = async (e) => {
  await navigator.clipboard.writeText(e);
}, X1 = U.div`
    display: flex;
    flex-direction: column;
    height: round(calc(100% - 1px), 2px);
    min-height: 0;
    overflow: hidden;
`, Y1 = U.div`
    flex-shrink: 0;
    margin-bottom: 8px;
`, Q1 = U.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 8px;
`, Ft = U.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 0;
    flex-shrink: 0;

    // all except last child which is the last message or loading indicator
    &:not(:last-child) {
        border-bottom: 1px solid ${(e) => e.theme.colorsBorderPrimary};
    }
`, J1 = U.div`
    flex-shrink: 0;
    margin-top: 12px;
`, em = ({
  agentName: e,
  isLoading: t,
  isDisabled: n,
  onChatSubmit: r,
  testVariables: i,
  onVariableChange: l,
  highlightRules: o,
  messages: a = []
}) => {
  const [s, u] = R.useState(""), c = R.useRef(null);
  R.useEffect(() => {
    c.current && (c.current.scrollTop = c.current.scrollHeight);
  }, [a, t]);
  const d = () => {
    s.trim() && (r(s), u(""));
  }, h = () => /* @__PURE__ */ p.jsxs(Q1, { ref: c, children: [
    a.map((f, x) => {
      if (f.type === ke.Error)
        return /* @__PURE__ */ p.jsx(Ft, { children: /* @__PURE__ */ p.jsxs($n, { transparent: !0, children: [
          /* @__PURE__ */ p.jsx(qe, { children: "Test execution failed" }),
          /* @__PURE__ */ p.jsx("div", { children: f.error.message }),
          f.error.link && /* @__PURE__ */ p.jsxs("div", { children: [
            "For more information, please visit",
            " ",
            /* @__PURE__ */ p.jsx(Bn, { href: f.error.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
            "."
          ] })
        ] }) }, `error-${x}`);
      const b = f.type === ke.User ? `user-${f.timestamp}` : `agent-${f.response.receivedAt}`;
      return f.type === ke.User ? /* @__PURE__ */ p.jsxs(Ft, { children: [
        /* @__PURE__ */ p.jsx(kn, { name: "You", timestamp: f.timestamp }),
        /* @__PURE__ */ p.jsx(Rn, { content: f.text })
      ] }, b) : /* @__PURE__ */ p.jsxs(Ft, { children: [
        /* @__PURE__ */ p.jsx(kn, { name: e, timestamp: f.response.receivedAt }),
        /* @__PURE__ */ p.jsx(Rn, { content: f.response.responseText }),
        /* @__PURE__ */ p.jsx(
          _i,
          {
            totalTokens: f.response.totalTokens,
            requestTokens: f.response.requestTokens,
            responseTokens: f.response.responseTokens,
            duration: f.response.durationMilliseconds,
            handleCopyClick: () => Ql(f.response.responseText)
          }
        ),
        f.response.tools && f.response.tools.length > 0 && /* @__PURE__ */ p.jsx(Vi, { tools: f.response.tools })
      ] }, b);
    }),
    t && /* @__PURE__ */ p.jsx(p.Fragment, { children: /* @__PURE__ */ p.jsx(Ft, { children: /* @__PURE__ */ p.jsx(Ni, {}) }) })
  ] });
  return /* @__PURE__ */ p.jsxs(X1, { children: [
    /* @__PURE__ */ p.jsx(Y1, { children: i.length > 0 && /* @__PURE__ */ p.jsx(
      Yl,
      {
        variables: i,
        highlightRules: o,
        onVariableChange: l
      }
    ) }),
    h(),
    /* @__PURE__ */ p.jsx(J1, { children: /* @__PURE__ */ p.jsx(
      $s,
      {
        disabled: n || t,
        onSubmit: d,
        userPrompt: s,
        updateUserPrompt: u,
        isLoading: t
      }
    ) })
  ] });
}, tm = U.div`
    display: flex;
    flex-direction: column;
`, nm = ({ testVariables: e, onVariableChange: t, highlightRules: n }) => e.length === 0 ? null : /* @__PURE__ */ p.jsx(tm, { children: /* @__PURE__ */ p.jsx(
  Yl,
  {
    variables: e,
    highlightRules: n,
    onVariableChange: t
  }
) }), rm = U(Ko)`
    flex: 1;
`, im = U(Oe)`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    max-height: calc(100vh - 32px);

    > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }
`, lm = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  executeAction: i,
  usageType: l,
  isLoading: o = !1,
  response: a,
  agentName: s,
  error: u
}) => {
  const [c, d] = R.useState(dr[0]), [h, f] = R.useState(
    e.map((L) => ({
      ...L,
      value: ""
    }))
  ), [x, b] = R.useState([]);
  R.useEffect(() => {
    b([]);
  }, [l]), R.useEffect(() => {
    l === ue.Chat && !o && (a ? b((L) => {
      const F = L[L.length - 1];
      if ((F == null ? void 0 : F.type) === ke.Agent)
        return L;
      const B = {
        type: ke.Agent,
        response: a
      };
      return [...L, B];
    }) : u && b((L) => {
      const F = L[L.length - 1];
      return (F == null ? void 0 : F.type) === ke.Error ? L : [...L, { type: ke.Error, error: u }];
    }));
  }, [a, u, o]), R.useEffect(() => {
    f((L) => {
      const F = new Map(L.map((B) => [B.key, B.value]));
      return e.map((B) => F.has(B.key) ? { ...B, value: F.get(B.key) } : {
        ...B,
        value: ""
      });
    });
  }, [e]);
  const v = () => i(h), y = (L) => {
    const F = {
      type: ke.User,
      text: L,
      timestamp: Date.now()
    }, B = [...x, F];
    b(B), i(h, B);
  }, T = (L, F) => {
    f((B) => {
      const C = [...B];
      return C[L] = { ...C[L], value: F }, C;
    });
  }, S = () => {
    b([]);
  }, I = l === ue.Chat ? im : Oe, A = () => /* @__PURE__ */ p.jsx(
    em,
    {
      agentName: s,
      isLoading: o,
      isDisabled: n,
      onChatSubmit: y,
      testVariables: h,
      onVariableChange: T,
      highlightRules: t,
      messages: x
    }
  ), w = () => /* @__PURE__ */ p.jsx(
    nm,
    {
      testVariables: h,
      onVariableChange: T,
      highlightRules: t
    }
  );
  return /* @__PURE__ */ p.jsxs(I, { label: "Playground", children: [
    /* @__PURE__ */ p.jsxs(De, { children: [
      /* @__PURE__ */ p.jsx(
        rm,
        {
          defaultValue: c == null ? void 0 : c.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: dr.map((L) => /* @__PURE__ */ p.jsx(bn, { id: L.uuid, children: L.name }, L.uuid))
        }
      ),
      /* @__PURE__ */ p.jsx(
        Rs,
        {
          label: l === ue.Chat ? "New chat" : "Test",
          icon: l === ue.Chat ? /* @__PURE__ */ p.jsx(p.Fragment, {}) : /* @__PURE__ */ p.jsx(Is, {}),
          onPress: l === ue.Chat ? S : v,
          variant: "primary",
          isDisabled: n,
          alt: l === ue.Chat ? "New chat icon" : "Run test icon"
        }
      )
    ] }),
    r && /* @__PURE__ */ p.jsxs($n, { children: [
      /* @__PURE__ */ p.jsx(qe, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ p.jsx("div", { children: "To test your agent, restart the application to apply the latest changes." })
    ] }),
    l === ue.Task && w(),
    l === ue.Chat && A()
  ] });
}, om = () => /* @__PURE__ */ p.jsxs(vi, { children: [
  /* @__PURE__ */ p.jsx(qe, { children: "Test your agent" }),
  /* @__PURE__ */ p.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), am = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && Ql(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ p.jsxs($n, { transparent: !0, children: [
    /* @__PURE__ */ p.jsx(qe, { children: "Test execution failed" }),
    /* @__PURE__ */ p.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ p.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ p.jsx(Bn, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ p.jsx(Ni, {}) : t ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(kn, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ p.jsx(Rn, { content: t.responseText }),
    /* @__PURE__ */ p.jsx(
      _i,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ p.jsx(Vi, { tools: t.tools })
  ] }) : /* @__PURE__ */ p.jsx(om, {});
  return /* @__PURE__ */ p.jsx(Oe, { label: "Output", children: o() });
}, sm = [
  { key: ze.Auto, caption: "Auto" },
  { key: ze.None, caption: "None" },
  { key: ze.Any, caption: "Any" },
  { key: ze.Tool, caption: "Tool" }
], um = ({
  agent: e,
  validationInfo: t,
  onToolChoiceChange: n,
  onToolChoiceToolChange: r
}) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx(
    lr,
    {
      "aria-label": "Tool choice",
      label: "Tool choice",
      selectedKey: e.toolChoice ?? null,
      validate: void 0,
      onSelectionChange: n,
      description: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        "Control the behavior of the agent regarding tools used.",
        " ",
        /* @__PURE__ */ p.jsx(
          Bn,
          {
            href: "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Read more."
          }
        )
      ] }),
      children: sm.map((i) => /* @__PURE__ */ p.jsx(bn, { id: i.key, children: i.caption }, i.key))
    }
  ),
  e.toolChoice === ze.Tool && /* @__PURE__ */ p.jsx(
    lr,
    {
      "aria-label": "Tool choice tool",
      label: "Tool",
      selectedKey: e.toolChoiceToolName ?? null,
      validate: () => t.isValidToolChoice,
      onSelectionChange: r,
      description: "Only microflows can be selected as tool choice.",
      children: e.tools.filter((i) => i.toolType === yn.Microflow).map((i) => /* @__PURE__ */ p.jsx(bn, { id: i.name, children: i.name }, i.name))
    }
  )
] }), cm = U(Bi)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, dm = ({
  agent: e,
  agentDocumentId: t,
  studioPro: n,
  componentName: r,
  updateStudioProDocument: i,
  onAgentChange: l,
  toolValidations: o,
  agentValidationInfo: a
}) => {
  const [s, u] = R.useState([]), c = R.useMemo(() => e.tools ? e.tools.map((I, A) => ({
    id: I.id ?? String(A),
    enabled: I.enabled,
    name: I.toolType === yn.Microflow ? I.name : I.document.qualifiedName.split(".")[1],
    description: I.description || "",
    tooltype: I.toolType,
    tool: I.document.qualifiedName || ""
  })) : [], [e.tools]), { items: d, sortProps: h } = Si(c), f = R.useCallback(
    (I) => {
      const A = o.get(I);
      return A === "invalid" ? /* @__PURE__ */ p.jsx($t, { icon: /* @__PURE__ */ p.jsx(xi, { title: "Tool invalid" }) }) : A === "syncing" ? /* @__PURE__ */ p.jsx($t, { icon: /* @__PURE__ */ p.jsx($i, { title: "Validating..." }) }) : null;
    },
    [o]
  ), x = R.useCallback(async () => {
    const I = await sr(
      n,
      r,
      e,
      i,
      t
    );
    I && l(I);
  }, [n, r, e, i, t, l]), b = R.useCallback(async () => {
    if (s.length === 0 || !e.tools)
      return;
    const I = s[0], A = await sr(
      n,
      r,
      e,
      i,
      t,
      I
    );
    A && l(A);
  }, [n, r, e, i, t, l, s]), v = R.useCallback(async () => {
    if (s.length === 0 || !e.tools)
      return;
    const I = s[0], A = await Ba(n, e, i, I);
    A && l(A);
  }, [e, i, l, s]), y = R.useCallback(
    async (I, A) => {
      if (!e.tools)
        return;
      const w = e.tools.map(
        (F) => (F.id ?? "") === I ? { ...F, enabled: A } : F
      ), L = { ...e, tools: w };
      i(L), l(L);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, i, l]
  ), T = async (I) => {
    const A = await Oa(e, i, I);
    A && l(A);
  }, S = async (I) => {
    const A = await _a(
      e,
      i,
      I
    );
    A && l(A);
  };
  return /* @__PURE__ */ p.jsxs(Oe, { label: "Tools", children: [
    /* @__PURE__ */ p.jsx(
      um,
      {
        agent: e,
        validationInfo: a,
        onToolChoiceChange: T,
        onToolChoiceToolChange: S
      }
    ),
    /* @__PURE__ */ p.jsx(
      Ti,
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
        data: d.map((I) => [
          { cellContent: f(I.id) },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              cm,
              {
                "aria-label": "Enabled",
                isSelected: I.enabled,
                onChange: (A) => y(I.id, A)
              }
            )
          },
          { cellContent: I.name, tooltipText: I.name },
          { cellContent: I.description, tooltipText: I.description },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              wi,
              {
                icon: I.tooltype === yn.Microflow ? /* @__PURE__ */ p.jsx(Go, {}) : zo,
                text: I.tool
              }
            ),
            tooltipText: I.tool
          }
        ]),
        rowKey: (I, A) => {
          var w;
          return ((w = d[A]) == null ? void 0 : w.id) ?? String(A);
        },
        rowOpacity: (I) => {
          var A;
          return (A = d[I]) != null && A.enabled ? 1 : 0.5;
        },
        selectionType: "row",
        selectionMode: "single",
        selectedKeys: s,
        onDoubleClick: b,
        onSelectionChange: u,
        ...h,
        toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            Ye,
            {
              icon: /* @__PURE__ */ p.jsx(Mi, {}),
              label: "New",
              "aria-label": "Add new tool",
              tooltip: "Add new tool",
              onPress: x
            }
          ),
          /* @__PURE__ */ p.jsx(
            Ye,
            {
              icon: /* @__PURE__ */ p.jsx(ji, {}),
              label: "Edit",
              "aria-label": "Edit selected tool",
              onPress: b,
              tooltip: "Edit selected tool",
              isDisabled: s.length === 0
            }
          ),
          /* @__PURE__ */ p.jsx(
            Ye,
            {
              icon: /* @__PURE__ */ p.jsx(Fi, {}),
              label: "Delete",
              "aria-label": "Delete selected tool",
              onPress: v,
              tooltip: "Delete selected tool",
              isDisabled: s.length === 0
            }
          )
        ] })
      }
    )
  ] });
}, fm = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUsageType: !0,
  isValidUserPrompt: !0,
  isValidToolChoice: !0,
  missingAttributes: [],
  unusedAttributes: []
}, hm = [
  { caption: "Task", value: ue.Task },
  { caption: "Chat", value: ue.Chat }
], pm = ({
  agentDocument: { name: e, contents: t, $ID: n },
  studioPro: r
}) => {
  var rt, St, Tt, Et, It, At, E;
  const [i, l] = R.useState(fm), [o, a] = R.useState(e), [s, u] = R.useState(void 0), [c, d] = R.useState(t), [h, f] = R.useState(!1), [x, b] = R.useState(!1), [v, y] = R.useState(!1), [T, S] = R.useState(/* @__PURE__ */ new Map()), [I, A] = R.useState(
    /* @__PURE__ */ new Map()
  ), w = Co(), L = R.useRef(0), F = R.useCallback(
    async (k) => {
      L.current++, await Ca(r, n)(k);
    },
    [r, n]
  ), B = [
    n,
    (rt = c.model) == null ? void 0 : rt.documentId,
    ...c.tools.map((k) => k.document.documentId),
    ...(c.knowledgebaseTools || []).map((k) => k.document.documentId)
  ].filter((k) => !!k), C = c.entity ? [(Et = (Tt = (St = c.entity) == null ? void 0 : St.qualifiedName) == null ? void 0 : Tt.split(".")) == null ? void 0 : Et[0]] : void 0, {
    data: $,
    isError: z,
    error: N,
    isPending: O,
    execute: D,
    reset: W
  } = Ra(r, n, v), Y = R.useRef(null), ae = R.useRef({});
  R.useEffect(() => () => {
    Y.current && clearTimeout(Y.current);
  }, []), R.useEffect(() => {
    (async () => {
      var M;
      const j = await Pe(r, (M = c.entity) == null ? void 0 : M.qualifiedName);
      u(j);
    })();
  }, [r, (It = c.entity) == null ? void 0 : It.qualifiedName]);
  const ge = async () => {
    const k = [];
    if (c.tools && c.tools.length > 0) {
      const j = /* @__PURE__ */ new Map();
      c.tools.forEach((M) => {
        j.set(M.id, "syncing");
      }), S(j), k.push(
        Promise.all(
          c.tools.map(async (M) => {
            const V = await Wo("document", M, c, r);
            return {
              id: M.id,
              state: V === !0 ? "valid" : "invalid"
            };
          })
        ).then((M) => {
          const V = new Map(M.map((J) => [J.id, J.state]));
          S(V);
        })
      );
    }
    if (c.knowledgebaseTools && c.knowledgebaseTools.length > 0) {
      const j = /* @__PURE__ */ new Map();
      c.knowledgebaseTools.forEach((M) => {
        j.set(M.id, "syncing");
      }), A(j), k.push(
        Promise.all(
          c.knowledgebaseTools.map(async (M) => {
            const V = await Zo(
              "document",
              M,
              c,
              r
            );
            return {
              id: M.id,
              state: V === !0 ? "valid" : "invalid"
            };
          })
        ).then((M) => {
          const V = new Map(M.map((J) => [J.id, J.state]));
          A(V);
        })
      );
    }
    await Promise.all(k);
  };
  R.useEffect(() => {
    Pa(r).then((k) => {
      y(k);
    }), ge(), ve(t).then((k) => l(k));
  }, []);
  const m = R.useCallback(
    async (k) => {
      var Se, xe, je;
      if (k.some((Q) => Q === n))
        if (L.current > 0)
          L.current--;
        else {
          const Q = await r.app.model.customBlobDocuments.getDocumentById(n);
          if (Q && !("error" in Q)) {
            const ne = Q.document.contents;
            d(ne), a(Q.document.name), ve(ne).then((Me) => l(Me));
          }
        }
      const j = [
        ...c.tools.map((Q) => Q.document.documentId),
        ...((Se = c.knowledgebaseTools) == null ? void 0 : Se.map((Q) => Q.document.documentId)) || []
      ], M = k.includes("domainModel"), V = k.includes(((xe = c.model) == null ? void 0 : xe.documentId) || "") || M, J = k.some((Q) => j.includes(Q));
      V && ve(c).then((Q) => l(Q)), M && (Pe(r, (je = c.entity) == null ? void 0 : je.qualifiedName).then((Q) => u(Q)), zn(r, c.variables, c).then((Q) => {
        d((ne) => ({ ...ne, variables: Q }));
      })), J && ge(), b(!0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, (At = c.model) == null ? void 0 : At.documentId, c.tools, c.knowledgebaseTools, (E = c.entity) == null ? void 0 : E.qualifiedName]
  );
  Io({
    studioPro: r,
    dependentIds: B,
    onDependentDocumentsChanged: m,
    watchProjectSettings: !0,
    watchDomainModelModules: C
  }), cr(c.tools, S), cr(c.knowledgebaseTools, A), R.useEffect(() => {
    const k = (j) => {
      y(j.isConnected), b(!1);
    };
    return r.runtime.controller.addEventListener("connectionChanged", k), () => {
      r.runtime.controller.removeEventListener("connectionChanged", k);
    };
  }, []);
  const le = R.useMemo(() => Sa(c.variables, w), [c.variables, w]), fe = (k) => (j) => {
    const M = { ...c, [k]: j };
    ae.current[k] = j, d(M), Y.current && clearTimeout(Y.current), Y.current = setTimeout(async () => {
      const V = await ar(
        r,
        k,
        M,
        F,
        j
      );
      ae.current[k] === j && (d((J) => ({ ...J, variables: V.variables })), ve(V).then((J) => l(J)));
    }, 300);
  }, g = async (k) => {
    const j = await ar(
      r,
      "usageType",
      c,
      F,
      k
    );
    d(j), ve(j).then((M) => l(M)), W();
  }, he = async () => {
    const k = await Fa(r, c, F);
    k && (d(k), ve(k).then((j) => l(j)));
  }, Ae = async () => {
    const k = await ja(r, c, F);
    k && (d(k), ve(k).then((j) => l(j)));
  }, te = async () => {
    c.model && Ma(r, c.model);
  }, Ve = async () => {
    c.entity && Vo(r, c.entity.qualifiedName);
  }, Ce = async () => {
    const k = await $a(
      r,
      Gt,
      F,
      n
    );
    k && d(k);
  }, Fe = (k) => {
    d(k), ve(k).then((j) => l(j));
  }, Pe = async (k, j) => {
    if (!j)
      return;
    const M = await _t(k, j);
    if (!M)
      return;
    const V = await Oo(M, k);
    if (V !== void 0)
      return V ? /* @__PURE__ */ p.jsx(pa, {}) : /* @__PURE__ */ p.jsx(ba, {});
  }, Ze = R.useMemo(() => {
    let k = "";
    return c.maxTokens !== void 0 && (k += "Max tokens: " + c.maxTokens.toLocaleString(navigator.language)), c.temperature !== void 0 && (k.length > 0 && (k += ", "), k += "Temperature: " + c.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), c.topP !== void 0 && (k.length > 0 && (k += ", "), k += "Top P: " + c.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), k;
  }, [c.temperature, c.maxTokens, c.topP]), ve = async (k) => ({
    isValidModel: await it("model", r, k),
    isValidEntity: await it("entity", r, k),
    isValidUsageType: await it("usageType", r, k),
    isValidUserPrompt: await it("userPrompt", r, k),
    missingAttributes: await Ea(r, k),
    unusedAttributes: await Ia(r, k),
    isValidToolChoice: await it("toolChoice", r, k)
  }), Wt = () => {
    var k, j, M;
    return /* @__PURE__ */ p.jsxs(Oe, { label: "General", children: [
      /* @__PURE__ */ p.jsx(
        Za,
        {
          label: "Agent type",
          "aria-label": "Agent type",
          value: c.usageType,
          validate: () => i.isValidUsageType,
          compactControl: !0,
          onChange: g,
          children: hm.map((V) => /* @__PURE__ */ p.jsx(Ha, { value: V.value, children: V.caption }, V.value))
        }
      ),
      /* @__PURE__ */ p.jsx(
        Xt,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((k = c.model) == null ? void 0 : k.qualifiedName) || "",
          icon: c.model ? _o : void 0,
          buttonCaption: "Select...",
          onClick: Ae,
          validate: () => i.isValidModel,
          buttonCaptionSecondary: c.model ? "Show" : void 0,
          onClickSecondary: c.model ? te : void 0
        }
      ),
      /* @__PURE__ */ p.jsx(
        Xt,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: Ze,
          buttonCaption: "Edit",
          onClick: Ce,
          validate: void 0
        }
      ),
      /* @__PURE__ */ p.jsx(
        vo,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: c.description,
          onChange: fe("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ p.jsx(
        Xt,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((j = c.entity) == null ? void 0 : j.qualifiedName) || "",
          icon: s,
          onClick: he,
          buttonCaption: "Select...",
          validate: () => i.isValidEntity,
          buttonCaptionSecondary: c.entity ? "Show" : void 0,
          onClickSecondary: c.entity ? Ve : void 0
        }
      ),
      c.entity && i.missingAttributes.length > 0 && /* @__PURE__ */ p.jsxs(Uo, { children: [
        /* @__PURE__ */ p.jsx(qe, { children: `The following attributes cannot be found in ${c.entity.qualifiedName}:` }),
        /* @__PURE__ */ p.jsx("div", { children: i.missingAttributes.map((V) => `{{${V}}}`).join(", ") })
      ] }),
      c.entity && i.unusedAttributes.length > 0 && !h && /* @__PURE__ */ p.jsxs(vi, { onClose: () => f(!0), children: [
        /* @__PURE__ */ p.jsx(qe, { children: `The following attributes are found in ${(M = c.entity) == null ? void 0 : M.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ p.jsx("div", { children: i.unusedAttributes.map((V) => `{{${V}}}`).join(", ") })
      ] })
    ] });
  }, Zt = () => /* @__PURE__ */ p.jsx(Oe, { label: "System prompt", children: /* @__PURE__ */ p.jsx(
    or,
    {
      ariaLabel: "System prompt",
      value: c.systemPrompt,
      onChange: fe("systemPrompt"),
      highlightRules: le,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), kt = () => /* @__PURE__ */ p.jsx(Oe, { label: "User prompt", children: /* @__PURE__ */ p.jsx(
    or,
    {
      ariaLabel: "User prompt",
      value: c.userPrompt || "",
      onChange: fe("userPrompt"),
      highlightRules: le,
      validate: () => i.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), wt = () => /* @__PURE__ */ p.jsx(
    dm,
    {
      agent: c,
      agentDocumentId: n,
      studioPro: r,
      componentName: Gt,
      updateStudioProDocument: F,
      onAgentChange: Fe,
      toolValidations: T,
      agentValidationInfo: i
    }
  ), Ct = () => /* @__PURE__ */ p.jsx(
    lm,
    {
      variables: c.variables,
      highlightRules: le,
      executeAction: D,
      isDisabled: O || x && v,
      showUnsavedChangesWarning: x && v,
      usageType: c.usageType,
      isLoading: O,
      response: $,
      agentName: o,
      error: N
    }
  ), Kt = () => /* @__PURE__ */ p.jsx(
    ws,
    {
      agent: c,
      agentDocumentId: n,
      studioPro: r,
      componentName: Gt,
      updateStudioProDocument: F,
      onAgentChange: d,
      knowledgebaseToolValidations: I
    }
  ), vt = () => /* @__PURE__ */ p.jsx(
    am,
    {
      agentName: o,
      response: $,
      isLoading: O,
      isError: z,
      error: N
    }
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(ir, { children: [
      Wt(),
      Zt(),
      c.usageType === ue.Task && kt(),
      wt(),
      Kt()
    ] }),
    /* @__PURE__ */ p.jsxs(ir, { children: [
      Ct(),
      c.usageType === ue.Task && vt()
    ] })
  ] });
}, mm = No(), gm = ({ studioPro: e, documentId: t }) => {
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = R.useState(!1), [o, a] = R.useState(mm);
  return R.useEffect(() => {
    r.getDocumentById(t).then(async (s) => {
      if (s && !("error" in s))
        l(!0), a(s.document);
      else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await n.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s), l(!0);
    });
  }, []), /* @__PURE__ */ p.jsx(So, { studioPro: e, children: /* @__PURE__ */ p.jsxs(To, { children: [
    !i && /* @__PURE__ */ p.jsx(Po, {}),
    i && /* @__PURE__ */ p.jsx(Eo, { children: /* @__PURE__ */ p.jsx(pm, { agentDocument: o, studioPro: e }) })
  ] }) });
}, Pm = Ao(gm);
export {
  gm as App,
  Pm as component
};
