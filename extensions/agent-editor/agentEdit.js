import { $ as Ro, a as Fo, b as ue, r as P, c as jo, d as ji, e as _e, f as zt, g as bt, h as Bo, i as zo, j as Ct, k as Bi, l as zi, m as nr, n as Oi, o as _i, p as rr, q as Oo, s as _o, t as Vo, u as No, v as Ho, w as qo, x as Et, y as Uo, z as Vi, A as Ni, B as Hi, C as qi, D as On, E as ir, F as lr, G as Pt, H as de, I as It, J as Ui, K as Wi, L as Wo, M as Ko, N as Zo, O as Go, P as Xo, Q as Ki, R as p, S as Re, T as G, U as X, V as Yo, W as Qo, X as Zi, Y as Jo, Z as ea, _ as ta, a0 as Gi, a1 as Be, a2 as na, a3 as Xi, a4 as ze, a5 as Yi, a6 as ra, a7 as Qi, a8 as ia, a9 as jr, aa as la, ab as oa, ac as aa, ad as sa, ae as ua, af as ca, ag as Ot, ah as da } from "./formelements-DgWWXRMR.js";
import { I as Gt, T as Ji, B as Oe, u as fa, c as ha, C as pa } from "./TextWithIcon-BsB7aLN_.js";
import { g as tn, M as Ae, P as ma, a as ga, U as ve, b as xa, A as ba, T as Ke, m as ya, k as ka, c as wa, d as el, e as _n, f as Ca, V as ot, h as le, R as _t, i as va, j as Sa, l as gn, n as Ta, D as Ea, o as Pa } from "./index-Cosn4mN0.js";
import { m as Ia } from "./useDebounceCallback-CQtp7E8l.js";
import { u as tl, T as nl, D as at, E as Aa, a as Da, S as La } from "./Table-CJG1u8pf.js";
import { g as or } from "./customBlobDocumentUtils-Dwvjb_jQ.js";
import { I as Xt, _ as Vn } from "./ComboBox-tmgYuUfm.js";
import { g as $a } from "./modelUtils-Dzzo6OJV.js";
import { E as Yt, y as ar, S as Ma, I as rl, W as Ra } from "./Banner-Tj4hO43W.js";
import { h as Fa, T as xn } from "./toolHandlers-Cs_LMdFH.js";
import { T as bn } from "./TextInputWithButton-H-kPhdc5.js";
import { h as ja } from "./knowledgebaseToolHandlers-CvlCV-OF.js";
import { n as Ba } from "./MicroflowIcon-D9CNADwL.js";
function il(e, t, n) {
  const { isSelected: r } = t, { isPressed: i, buttonProps: l } = Ro({
    ...e,
    onPress: Fo(t.toggle, e.onPress)
  }, n);
  return {
    isPressed: i,
    isSelected: r,
    isDisabled: e.isDisabled || !1,
    buttonProps: ue(l, {
      "aria-pressed": r
    })
  };
}
function za(e, t) {
  const { "aria-label": n, "aria-labelledby": r, orientation: i = "horizontal" } = e;
  let [l, o] = P.useState(!1);
  jo(() => {
    var m;
    o(!!(t.current && (!((m = t.current.parentElement) === null || m === void 0) && m.closest('[role="toolbar"]'))));
  });
  const { direction: a } = ji(), s = a === "rtl" && i === "horizontal";
  let u = Bo(t);
  const c = (m) => {
    if (zt(m.currentTarget, bt(m))) {
      if (i === "horizontal" && m.key === "ArrowRight" || i === "vertical" && m.key === "ArrowDown")
        s ? u.focusPrevious() : u.focusNext();
      else if (i === "horizontal" && m.key === "ArrowLeft" || i === "vertical" && m.key === "ArrowUp")
        s ? u.focusNext() : u.focusPrevious();
      else if (m.key === "Tab") {
        m.stopPropagation(), d.current = zo(), m.shiftKey ? u.focusFirst() : u.focusLast();
        return;
      } else
        return;
      m.stopPropagation(), m.preventDefault();
    }
  }, d = P.useRef(null), h = (m) => {
    !zt(m.currentTarget, m.relatedTarget) && !d.current && (d.current = bt(m));
  }, f = (m) => {
    if (d.current && !zt(m.currentTarget, m.relatedTarget) && zt(t.current, bt(m))) {
      var y;
      (y = d.current) === null || y === void 0 || y.focus(), d.current = null;
    }
  };
  return {
    toolbarProps: {
      ..._e(e, {
        labelable: !0
      }),
      role: l ? "group" : "toolbar",
      "aria-orientation": i,
      "aria-label": n,
      "aria-labelledby": n == null ? r : void 0,
      onKeyDownCapture: l ? void 0 : c,
      onFocusCapture: l ? void 0 : f,
      onBlurCapture: l ? void 0 : h
    }
  };
}
function Oa(e, t, n) {
  let { isDisabled: r } = e, { toolbarProps: i } = za(e, n);
  return {
    groupProps: {
      ...i,
      role: t.selectionMode === "single" ? "radiogroup" : i.role,
      "aria-disabled": r
    }
  };
}
function _a(e, t, n) {
  let r = {
    isSelected: t.selectedKeys.has(e.id),
    defaultSelected: !1,
    setSelected(s) {
      t.setSelected(e.id, s);
    },
    toggle() {
      t.toggleKey(e.id);
    }
  }, { isPressed: i, isSelected: l, isDisabled: o, buttonProps: a } = il({
    ...e,
    id: void 0,
    isDisabled: e.isDisabled || t.isDisabled
  }, r, n);
  return t.selectionMode === "single" && (a.role = "radio", a["aria-checked"] = r.isSelected, delete a["aria-pressed"]), {
    isPressed: i,
    isSelected: l,
    isDisabled: o,
    buttonProps: a
  };
}
function Va(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: s, "aria-label": u, "aria-labelledby": c, validationState: d = "valid", isInvalid: h, onPressStart: f, onPressEnd: m, onPressChange: y, onPress: w, onPressUp: g, onClick: C } = e, S = (H) => {
    H.stopPropagation(), t.setSelected(bt(H).checked);
  }, A = s != null, I = u != null || c != null;
  !A && !I && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: k, isPressed: B } = Ct({
    onPressStart: f,
    onPressEnd: m,
    onPressChange: y,
    onPress: w,
    onPressUp: g,
    onClick: C,
    isDisabled: r
  }), { pressProps: O, isPressed: N } = Ct({
    onPressStart: f,
    onPressEnd: m,
    onPressChange: y,
    onPressUp: g,
    onClick: C,
    onPress(H) {
      var F;
      w == null || w(H), t.toggle(), (F = n.current) === null || F === void 0 || F.focus();
    },
    isDisabled: r || i
  }), { focusableProps: v } = Bi(e, n), R = ue(k, v), j = _e(e, {
    labelable: !0
  });
  return zi(n, t.defaultSelected, t.setSelected), {
    labelProps: ue(O, {
      onClick: (H) => H.preventDefault()
    }),
    inputProps: ue(j, {
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
      ...R
    }),
    isSelected: t.isSelected,
    isPressed: B || N,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: h || d === "invalid"
  };
}
function ll(e, t, n) {
  let r = nr({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: s, isSelected: u, isPressed: c, isDisabled: d, isReadOnly: h } = Va({
    ...e,
    isInvalid: i
  }, t, n);
  Oi(e, r, n);
  let { isIndeterminate: f, isRequired: m, validationBehavior: y = "aria" } = e;
  P.useEffect(() => {
    n.current && (n.current.indeterminate = !!f);
  });
  let { pressProps: w } = Ct({
    isDisabled: d || h,
    onPress() {
      let { [_i]: g } = e, { commitValidation: C } = g || r;
      C();
    }
  });
  return {
    labelProps: ue(a, w, P.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (g) => g.preventDefault()
    }), [])),
    inputProps: {
      ...s,
      checked: u,
      "aria-required": m && y === "aria" || void 0,
      required: m && y === "native"
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
const Na = /* @__PURE__ */ new WeakMap();
function sr(e = {}) {
  let { isReadOnly: t } = e, [n, r] = rr(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = P.useState(n);
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
function Ha(e) {
  let { selectionMode: t = "single", disallowEmptySelection: n, isDisabled: r = !1 } = e, [i, l] = rr(P.useMemo(() => e.selectedKeys ? new Set(e.selectedKeys) : void 0, [
    e.selectedKeys
  ]), P.useMemo(() => e.defaultSelectedKeys ? new Set(e.defaultSelectedKeys) : /* @__PURE__ */ new Set(), [
    e.defaultSelectedKeys
  ]), e.onSelectionChange);
  return {
    selectionMode: t,
    isDisabled: r,
    selectedKeys: i,
    setSelectedKeys: l,
    toggleKey(o) {
      let a;
      t === "multiple" ? (a = new Set(i), a.has(o) && (!n || a.size > 1) ? a.delete(o) : a.add(o)) : a = new Set(i.has(o) && !n ? [] : [
        o
      ]), l(a);
    },
    setSelected(o, a) {
      a !== i.has(o) && this.toggleKey(o);
    }
  };
}
function qa(e, t, n) {
  const r = sr({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(g) {
      g ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(g);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: s } = Na.get(t);
  var u;
  s = (u = e.validationBehavior) !== null && u !== void 0 ? u : s;
  let { realtimeValidation: c } = nr({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), d = P.useRef(Oo), h = () => {
    t.setInvalid(e.value, c.isInvalid ? c : d.current);
  };
  P.useEffect(h);
  let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : c, m = s === "native" ? t.displayValidation : f;
  var y;
  let w = ll({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (y = e.isRequired) !== null && y !== void 0 ? y : t.isRequired,
    validationBehavior: s,
    [_i]: {
      realtimeValidation: f,
      displayValidation: m,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(g) {
        d.current = g, h();
      }
    }
  }, r, n);
  return {
    ...w,
    inputProps: {
      ...w.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? a : null,
        o
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const ol = /* @__PURE__ */ new WeakMap();
function Ua(e, t, n) {
  let { value: r, children: i, "aria-label": l, "aria-labelledby": o, onPressStart: a, onPressEnd: s, onPressChange: u, onPress: c, onPressUp: d, onClick: h } = e;
  const f = e.isDisabled || t.isDisabled;
  let m = i != null, y = l != null || o != null;
  !m && !y && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let w = t.selectedValue === r, g = (L) => {
    L.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: C, isPressed: S } = Ct({
    onPressStart: a,
    onPressEnd: s,
    onPressChange: u,
    onPress: c,
    onPressUp: d,
    onClick: h,
    isDisabled: f
  }), { pressProps: A, isPressed: I } = Ct({
    onPressStart: a,
    onPressEnd: s,
    onPressChange: u,
    onPressUp: d,
    onClick: h,
    isDisabled: f,
    onPress(L) {
      var K;
      c == null || c(L), t.setSelectedValue(r), (K = n.current) === null || K === void 0 || K.focus();
    }
  }), { focusableProps: k } = Bi(ue(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), B = ue(C, k), O = _e(e, {
    labelable: !0
  }), N = -1;
  t.selectedValue != null ? t.selectedValue === r && (N = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (N = 0), f && (N = void 0);
  let { name: v, form: R, descriptionId: j, errorMessageId: H, validationBehavior: F } = ol.get(t);
  return zi(n, t.defaultSelectedValue, t.setSelectedValue), Oi({
    validationBehavior: F
  }, t, n), {
    labelProps: ue(A, P.useMemo(() => ({
      onClick: (L) => L.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (L) => L.preventDefault()
    }), [])),
    inputProps: ue(O, {
      ...B,
      type: "radio",
      name: v,
      form: R,
      tabIndex: N,
      disabled: f,
      required: t.isRequired && F === "native",
      checked: w,
      value: r,
      onChange: g,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? H : null,
        j
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: f,
    isSelected: w,
    isPressed: S || I
  };
}
function Wa(e, t) {
  let { name: n, form: r, isReadOnly: i, isRequired: l, isDisabled: o, orientation: a = "vertical", validationBehavior: s = "aria" } = e, { direction: u } = ji(), { isInvalid: c, validationErrors: d, validationDetails: h } = t.displayValidation, { labelProps: f, fieldProps: m, descriptionProps: y, errorMessageProps: w } = _o({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || d
  }), g = _e(e, {
    labelable: !0
  }), { focusWithinProps: C } = Vo({
    onBlurWithin(I) {
      var k;
      (k = e.onBlur) === null || k === void 0 || k.call(e, I), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), S = (I) => {
    let k;
    switch (I.key) {
      case "ArrowRight":
        u === "rtl" && a !== "vertical" ? k = "prev" : k = "next";
        break;
      case "ArrowLeft":
        u === "rtl" && a !== "vertical" ? k = "next" : k = "prev";
        break;
      case "ArrowDown":
        k = "next";
        break;
      case "ArrowUp":
        k = "prev";
        break;
      default:
        return;
    }
    I.preventDefault();
    let B = Ho(I.currentTarget, {
      from: bt(I),
      accept: (N) => N instanceof qo(N).HTMLInputElement && N.type === "radio"
    }), O;
    k === "next" ? (O = B.nextNode(), O || (B.currentNode = I.currentTarget, O = B.firstChild())) : (O = B.previousNode(), O || (B.currentNode = I.currentTarget, O = B.lastChild())), O && (O.focus(), t.setSelectedValue(O.value));
  }, A = No(n);
  return ol.set(t, {
    name: A,
    form: r,
    descriptionId: y.id,
    errorMessageId: w.id,
    validationBehavior: s
  }), {
    radioGroupProps: ue(g, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: S,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": l || void 0,
      "aria-disabled": o || void 0,
      "aria-orientation": a,
      ...m,
      ...C
    }),
    labelProps: f,
    descriptionProps: y,
    errorMessageProps: w,
    isInvalid: c,
    validationErrors: d,
    validationDetails: h
  };
}
let Ka = Math.round(Math.random() * 1e10), Za = 0;
function Ga(e) {
  let t = P.useMemo(() => e.name || `radio-group-${Ka}-${++Za}`, [
    e.name
  ]);
  var n;
  let [r, i] = rr(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [l] = P.useState(r), [o, a] = P.useState(null), s = nr({
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
const Xa = /* @__PURE__ */ P.createContext(null), Ya = /* @__PURE__ */ P.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Et(i, n, Uo);
  let { validationBehavior: l } = Vi(Ni) || {};
  var o, a;
  let s = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", u = P.useContext(Xa), c = Hi(P.useMemo(() => qi(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: d, inputProps: h, isSelected: f, isDisabled: m, isReadOnly: y, isPressed: w, isInvalid: g } = u ? qa({
    ...On(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, u, c) : ll({
    ...On(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: s
  }, sr(t), c), { isFocused: C, isFocusVisible: S, focusProps: A } = ir(), I = m || y, { hoverProps: k, isHovered: B } = lr({
    ...t,
    isDisabled: I
  }), O = Pt({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: f,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: w,
      isHovered: B,
      isFocused: C,
      isFocusVisible: S,
      isDisabled: m,
      isReadOnly: y,
      isInvalid: g,
      isRequired: t.isRequired || !1
    }
  }), N = _e(t, {
    global: !0
  });
  return delete N.id, delete N.onClick, /* @__PURE__ */ de.createElement(It.label, {
    ...ue(N, d, k, O),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": f || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": w || void 0,
    "data-hovered": B || void 0,
    "data-focused": C || void 0,
    "data-focus-visible": S || void 0,
    "data-disabled": m || void 0,
    "data-readonly": y || void 0,
    "data-invalid": g || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ de.createElement(Ui, {
    elementType: "span"
  }, /* @__PURE__ */ de.createElement("input", {
    ...ue(h, A),
    ref: c
  })), O.children);
}), Qa = /* @__PURE__ */ P.createContext(null), Ja = /* @__PURE__ */ P.createContext(null), al = /* @__PURE__ */ P.createContext(null), es = /* @__PURE__ */ P.forwardRef(function(t, n) {
  [t, n] = Et(t, n, Qa);
  let { validationBehavior: r } = Vi(Ni) || {};
  var i, l;
  let o = (l = (i = t.validationBehavior) !== null && i !== void 0 ? i : r) !== null && l !== void 0 ? l : "native", a = Ga({
    ...t,
    validationBehavior: o
  }), [s, u] = Wo(!t["aria-label"] && !t["aria-labelledby"]), { radioGroupProps: c, labelProps: d, descriptionProps: h, errorMessageProps: f, ...m } = Wa({
    ...t,
    label: u,
    validationBehavior: o
  }, a), y = Pt({
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
  }), w = _e(t, {
    global: !0
  });
  return /* @__PURE__ */ de.createElement(It.div, {
    ...ue(w, y, c),
    ref: n,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "vertical",
    "data-invalid": a.isInvalid || void 0,
    "data-disabled": a.isDisabled || void 0,
    "data-readonly": a.isReadOnly || void 0,
    "data-required": a.isRequired || void 0
  }, /* @__PURE__ */ de.createElement(Ko, {
    values: [
      [
        al,
        a
      ],
      [
        Zo,
        {
          ...d,
          ref: s,
          elementType: "span"
        }
      ],
      [
        Go,
        {
          slots: {
            description: h,
            errorMessage: f
          }
        }
      ],
      [
        Xo,
        m
      ]
    ]
  }, /* @__PURE__ */ de.createElement(Ki, null, y.children)));
}), ts = /* @__PURE__ */ P.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Et(i, n, Ja);
  let l = de.useContext(al), o = Hi(P.useMemo(() => qi(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: a, inputProps: s, isSelected: u, isDisabled: c, isPressed: d } = Ua({
    ...On(t),
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, l, o), { isFocused: h, isFocusVisible: f, focusProps: m } = ir(), y = c || l.isReadOnly, { hoverProps: w, isHovered: g } = lr({
    ...t,
    isDisabled: y
  }), C = Pt({
    ...t,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: u,
      isPressed: d,
      isHovered: g,
      isFocused: h,
      isFocusVisible: f,
      isDisabled: c,
      isReadOnly: l.isReadOnly,
      isInvalid: l.isInvalid,
      isRequired: l.isRequired
    }
  }), S = _e(t, {
    global: !0
  });
  return delete S.id, delete S.onClick, /* @__PURE__ */ de.createElement(It.label, {
    ...ue(S, a, w, C),
    ref: n,
    "data-selected": u || void 0,
    "data-pressed": d || void 0,
    "data-hovered": g || void 0,
    "data-focused": h || void 0,
    "data-focus-visible": f || void 0,
    "data-disabled": c || void 0,
    "data-readonly": l.isReadOnly || void 0,
    "data-invalid": l.isInvalid || void 0,
    "data-required": l.isRequired || void 0
  }, /* @__PURE__ */ de.createElement(Ui, {
    elementType: "span"
  }, /* @__PURE__ */ de.createElement("input", {
    ...ue(s, m),
    ref: o
  })), /* @__PURE__ */ de.createElement(Wi.Provider, {
    value: {
      isSelected: u
    }
  }, C.children));
}), ns = /* @__PURE__ */ P.createContext({}), sl = /* @__PURE__ */ P.createContext(null), rs = /* @__PURE__ */ P.forwardRef(function(t, n) {
  [t, n] = Et(t, n, ns);
  let r = Ha(t), { groupProps: i } = Oa(t, r, n), l = Pt({
    ...t,
    values: {
      orientation: t.orientation || "horizontal",
      isDisabled: r.isDisabled,
      state: r
    },
    defaultClassName: "react-aria-ToggleButtonGroup"
  }), o = _e(t, {
    global: !0
  });
  return /* @__PURE__ */ de.createElement(It.div, {
    ...ue(o, l, i),
    ref: n,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "horizontal",
    "data-disabled": t.isDisabled || void 0
  }, /* @__PURE__ */ de.createElement(sl.Provider, {
    value: r
  }, /* @__PURE__ */ de.createElement(Ki, null, l.children)));
}), is = /* @__PURE__ */ P.createContext({}), ls = /* @__PURE__ */ P.forwardRef(function(t, n) {
  [t, n] = Et(t, n, is);
  let r = P.useContext(sl), i = sr(r && t.id != null ? {
    isSelected: r.selectedKeys.has(t.id),
    onChange(w) {
      r.setSelected(t.id, w);
    }
  } : t), { buttonProps: l, isPressed: o, isSelected: a, isDisabled: s } = r && t.id != null ? _a({
    ...t,
    id: t.id
  }, r, n) : il({
    ...t,
    id: t.id != null ? String(t.id) : void 0
  }, i, n), { focusProps: u, isFocused: c, isFocusVisible: d } = ir(t), { hoverProps: h, isHovered: f } = lr({
    ...t,
    isDisabled: s
  }), m = Pt({
    ...t,
    id: void 0,
    values: {
      isHovered: f,
      isPressed: o,
      isFocused: c,
      isSelected: i.isSelected,
      isFocusVisible: d,
      isDisabled: s,
      state: i
    },
    defaultClassName: "react-aria-ToggleButton"
  }), y = _e(t, {
    global: !0
  });
  return delete y.id, delete y.onClick, /* @__PURE__ */ de.createElement(It.button, {
    ...ue(y, m, l, u, h),
    ref: n,
    slot: t.slot || void 0,
    "data-focused": c || void 0,
    "data-disabled": s || void 0,
    "data-pressed": o || void 0,
    "data-selected": a || void 0,
    "data-hovered": f || void 0,
    "data-focus-visible": d || void 0
  }, /* @__PURE__ */ de.createElement(Wi.Provider, {
    value: {
      isSelected: a
    }
  }, m.children));
}), os = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", as = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var ss = Object.defineProperty, us = (e, t) => ss(e, "name", { value: t, configurable: !0 });
const cs = us((e) => p.jsx(Re, { light: as, dark: os, ...e }), "EntityIcon"), ds = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", fs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var hs = Object.defineProperty, ps = (e, t) => hs(e, "name", { value: t, configurable: !0 });
const ms = ps((e) => p.jsx(Re, { light: fs, dark: ds, ...e }), "EntityNonPersistableIcon");
var gs = Object.defineProperty, Nn = (e, t) => gs(e, "name", { value: t, configurable: !0 });
const xs = Nn(({ options: e, selectedKey: t, defaultSelectedKey: n, onSelectionChange: r, ...i }) => p.jsx(bs, { selectedKeys: t ? /* @__PURE__ */ new Set([t]) : void 0, defaultSelectedKeys: n ? /* @__PURE__ */ new Set([n]) : void 0, onSelectionChange: Nn((l) => {
  if (r) {
    const o = e.find((a) => l.has(a.key));
    o && r(o);
  }
}, "onSelectionChange"), selectionMode: "single", ...i, children: e.map((l) => p.jsx(ys, { option: l }, l.key)) }), "SegmentedControl"), bs = G(rs)`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    width: max-content;
    max-width: 100%;
`, ys = Nn(({ option: e }) => {
  const t = e.caption ?? e.key, n = p.jsx(ks, { id: e.key, "data-testid": e.key.replace(/\s+/g, "-").toLowerCase(), children: ({ isSelected: r, isHovered: i, isPressed: l }) => e.render ? e.render(r || i || l) : t }, e.key);
  return e.tooltip ? p.jsxs(Yo, { delay: 400, children: [n, p.jsx(Qo, { children: e.tooltip })] }, e.key) : n;
}, "SegmentedControlButton"), Vt = X.borderRadiusSm, yn = "1px", ks = G(ls)`
    display: flex;
    place-items: center;
    padding: ${X.spacing1} ${X.spacing8};

    justify-content: center;

    font-size: ${X.fontSizeMd};
    line-height: ${X.lineHeightMd};

    border-width: ${yn} 0;
    border-style: solid;

    border-color: ${({ theme: e }) => e.colorsBorderPrimary};
    background: ${({ theme: e }) => e.colorsBackgroundDefault};
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};

    cursor: default;
    user-select: none;
    -webkit-user-select: none; // Safari

    white-space: nowrap;

    &:first-child {
        border-radius: ${Vt} 0px 0px ${Vt};
        border-left-width: ${yn};
    }

    &:last-child {
        border-radius: 0px ${Vt} ${Vt} 0px;
        border-right-width: ${yn};
    }

    &:first-child,
    &:last-child {
        // Future implementations should probably simplify this, and create the border-radius in the StyledContainer instead :
        // See https://stackoverflow.com/questions/17202128/rounded-cornes-border-radius-safari-issue
        // and https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

        // Fixes the border-radius problem in Safari
        // https://github.com/google/model-viewer/issues/662#issuecomment-506750593

        transform: translateZ(0);
    }

    &[data-hovered],
    &[data-pressed],
    &[data-selected] {
        background-color: ${({ theme: e }) => e.colorsAccentDefaultBlue};
        border-color: ${({ theme: e }) => e.colorsAccentDefaultBlue};
        color: ${({ theme: e }) => e.colorsTextInverse};
    }
`, ws = [
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
], Cs = [
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
], vs = (e, t) => async (n) => {
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, n);
  } catch (r) {
    await e.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function ul(e, t) {
  const n = /\{\{([^}\s{]+)\}\}/g, r = t.systemPrompt.match(n) || [], i = t.userPrompt && t.usageType === ve.Task ? t.userPrompt.match(n) || [] : [], l = [...r, ...i];
  if (l.length === 0)
    return Promise.resolve([]);
  const o = l.map((c) => c.replace(/\{\{|\}\}/g, "")), a = [...new Set(o)], s = t.variables, u = a.map((c) => s.find((h) => h.key === c) || {
    key: c,
    isAttributeInEntity: !1
  });
  return ur(e, u, t);
}
const Br = (e, t) => e.map((n, r) => ({
  pattern: new RegExp("\\{\\{" + n.key + "\\}\\}", "g"),
  style: {
    ...Ss(r, Zi(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function Ss(e, t) {
  const n = t ? Cs : ws;
  return {
    color: n[e % n.length][1],
    backgroundColor: n[e % n.length][0],
    borderColor: n[e % n.length][1]
  };
}
async function ur(e, t, n) {
  const r = await cl(e, n), i = await dl(n, e);
  return t.map((l) => {
    const o = i.includes(l.key);
    return {
      ...l,
      isAttributeInEntity: r === !1 || o
    };
  });
}
const cl = async (e, t) => t.entity ? await tn(e, t.entity.qualifiedName) !== void 0 : !0, Ts = async (e, t) => t.variables.length === 0 ? [] : !t.entity || !await tn(e, t.entity.qualifiedName) ? [] : t.variables.filter((n) => !n.isAttributeInEntity).map((n) => n.key), dl = async (e, t) => {
  if (!e.entity)
    return [];
  const n = await tn(t, e.entity.qualifiedName);
  return n ? (await ga(t, n)).sort() : [];
}, Es = async (e, t) => (await dl(t, e)).filter((r) => !t.variables.find((i) => i.key === r)), Ps = async (e, t, n, r) => {
  const i = n.reduce((s, u) => (s[u.key] = u.value, s), {}), l = r == null ? void 0 : r.filter((s) => s.type === Ae.Agent || s.type === Ae.User).map((s) => ({
    type: s.type,
    text: s.type === Ae.Agent ? s.response.responseText : s.text
  })), o = {
    documentId: t,
    variables: JSON.stringify(i),
    messages: JSON.stringify(l || [])
  };
  return await e.runtime.controller.executePreviewAction(
    ma.PreviewAgentTest,
    o
  );
}, Is = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", As = "Test action failed. Please check the runtime logs for more details.", Ds = (e, t) => {
  const [n, r] = P.useState(void 0), [i, l] = P.useState(!1), [o, a] = P.useState(!1), [s, u] = P.useState(void 0), c = P.useCallback(
    async (h, f) => {
      l(!0), r(void 0), a(!1), u(void 0);
      try {
        const m = await Ps(e, t, h, f);
        if (m === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in m && m.message === xa) {
          a(!0), u({ name: "Error", message: Is, link: ba });
          return;
        }
        r(m);
      } catch {
        a(!0), u({ name: "Error", message: As });
      } finally {
        l(!1);
      }
    },
    [e, t]
  ), d = P.useCallback(() => {
    r(void 0), l(!1), a(!1), u(void 0);
  }, []);
  return { data: n, isPending: i, isError: o, error: s, execute: c, reset: d };
}, zr = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt" || t === "usageType") && (l.variables = await ul(e, l)), r(l), l;
}, Ls = async (e, t, n) => {
  var l;
  const r = await e.ui.elementSelectors.selectEntity({
    allowNone: !0,
    selectedElementId: (l = t.entity) == null ? void 0 : l.documentId
  });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const o = await ur(e, t.variables, i);
    i = { ...i, variables: o }, n(i);
  }
  return i;
}, $s = async (e, t, n) => {
  var l;
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: ya },
    selectedElementId: (l = t.model) == null ? void 0 : l.documentId
  });
  let i;
  return r.status === "ok" && (i = {
    ...t,
    model: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    },
    selectedModel: void 0
  }), r.status === "none" && (i = { ...t, model: void 0, selectedModel: void 0 }), i && n(i), i;
}, ht = async (e, t, n) => {
  switch (e) {
    case "model": {
      if (!n.model)
        return "Please select a model resource.";
      const r = await or(t, n.model);
      if (!r)
        return "This document is invalid. Make sure to select a document of type Model.";
      if (r.excluded)
        return "The selected model resource is currently excluded from the project. Please include it to use it as agent's model resource.";
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
      if (!await cl(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "usageType":
      if (!n.usageType)
        return "Please select an agent type.";
      break;
    case "userPrompt":
      if (!n.userPrompt && n.usageType === ve.Task)
        return "Please provide a user prompt.";
      break;
    case "toolChoice":
      if (n.toolChoice === Ke.Tool) {
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
}, Or = (e, t) => e.model ? e.selectedModel ? t.length === 0 ? "There are no model versions available in your model resource. Please verify that your Model document is correctly configured." : t.find((n) => {
  var r;
  return n.id === ((r = e.selectedModel) == null ? void 0 : r.id);
}) ? !0 : "The selected model version is not available in your model resource configuration." : "Please select a model version." : !0, Ms = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await or(e, t))
    return await e.ui.messageBoxes.show("error", "Could not find model resource.", "This model resource might have been deleted or renamed. Please update the model resource selection.");
  e.ui.editors.editDocument(t.documentId);
}, Rs = async (e, t, n, r) => {
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
}, _r = async (e, t, n, r, i, l) => {
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
}, Fs = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const l = t.tools.filter((a) => a.id !== r), o = { ...t, tools: l };
  return n(o), o;
}, Vr = async (e, t, n, r, i, l) => {
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
}, js = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to remove this knowledge base from the agent?"
  }) === !1)
    return;
  const o = (t.knowledgebaseTools || []).filter((s) => s.id !== r), a = { ...t, knowledgebaseTools: o };
  return n(a), a;
}, Bs = async (e, t, n) => {
  const r = {
    ...e,
    toolChoice: n ?? void 0,
    // Clear toolChoiceToolName if toolChoice is not "Tool"
    toolChoiceToolName: n === Ke.Tool ? e.toolChoiceToolName : void 0
  };
  return t(r), r;
}, zs = async (e, t, n) => {
  if (e.toolChoice !== Ke.Tool)
    return;
  const r = { ...e, toolChoiceToolName: n ?? void 0 };
  return t(r), r;
};
var Os = Object.defineProperty, _s = (e, t) => Os(e, "name", { value: t, configurable: !0 });
const Vs = _s((e) => p.jsx(Ns, { ...e }), "RadioButton"), Ns = G(ts)`
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
var Hs = Object.defineProperty, qs = (e, t) => Hs(e, "name", { value: t, configurable: !0 });
const Us = qs(({ orientation: e = "horizontal", label: t, description: n, children: r, ...i }) => {
  const { isInvalid: l, validate: o, validationError: a } = Jo({ ...i, value: i.value ?? void 0 });
  return p.jsx(fl, { orientation: e, ...i, isInvalid: l, validate: o, children: p.jsx(ea, { label: t, description: n, realtimeValidationError: a, children: p.jsx(Ws, { children: r }) }) });
}, "RadioButtonGroup"), fl = G(es)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, Ws = G.div`
    display: flex;
    flex-direction: row;
    gap: ${X.spacing8};
    padding: ${X.spacing4} 0;

    ${fl}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`;
function Nr(e, t) {
  const n = P.useRef(/* @__PURE__ */ new Map());
  P.useEffect(() => {
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
          o.set(a.id, { state: "valid" });
        else {
          const s = r.get(a.id), u = i.get(a.id);
          s !== void 0 && u !== void 0 && s !== u && o.set(a.id, { state: "valid" });
        }
      }), o;
    }), n.current = i;
  }, [e, t]);
}
const Ks = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Zs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Gs = Object.defineProperty, Xs = (e, t) => Gs(e, "name", { value: t, configurable: !0 });
const hl = Xs((e) => p.jsx(Re, { light: Zs, dark: Ks, ...e }), "AppSelectorNoVersionIcon"), Ys = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Qs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Js = Object.defineProperty, eu = (e, t) => Js(e, "name", { value: t, configurable: !0 });
const pl = eu((e) => p.jsx(Re, { light: Qs, dark: Ys, ...e }), "EditIcon"), tu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", nu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ru = Object.defineProperty, iu = (e, t) => ru(e, "name", { value: t, configurable: !0 });
const ml = iu((e) => p.jsx(Re, { light: nu, dark: tu, ...e }), "PageIcon"), lu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.4805%208.50488C14.2255%2011.8649%2011.375%2014.5%208%2014.5C5.2252%2014.5%203.47004%2012.7855%202.5%2011.3955V13H1.5V9.5H5V10.5H3.10547C3.8955%2011.75%205.45012%2013.5%208%2013.5V13.5049C10.86%2013.5049%2013.2654%2011.2747%2013.4854%208.42969L14.4805%208.50488ZM8%201.5C10.775%201.5%2012.53%203.21547%2013.5%204.60547V3H14.5V6.49512H11V5.49512H12.8955C12.1055%204.24512%2010.55%202.49512%208%202.49512C5.14001%202.49513%202.73465%204.72532%202.51465%207.57031L1.52051%207.49512C1.77551%204.13512%204.62501%201.50001%208%201.5Z'%20fill='%23579BF9'/%3e%3c/svg%3e", ou = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var au = Object.defineProperty, su = (e, t) => au(e, "name", { value: t, configurable: !0 });
const gl = su((e) => p.jsx(Re, { light: ou, dark: lu, ...e }), "SyncIcon"), uu = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", cu = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var du = Object.defineProperty, fu = (e, t) => du(e, "name", { value: t, configurable: !0 });
const hu = fu((e) => p.jsx(Re, { light: cu, dark: uu, ...e }), "CheckCheckboxIcon");
var pu = Object.defineProperty, mu = (e, t) => pu(e, "name", { value: t, configurable: !0 });
const xl = mu(({ children: e, ...t }) => p.jsx(xu, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => p.jsxs(p.Fragment, { children: [p.jsxs(bl, { $isSelected: r, $isIndeterminate: n, children: [n && p.jsx(gu, {}), r && !n && p.jsx(hu, {})] }), e] }) }), "Checkbox"), bl = G.div`
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
`, gu = G.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, xu = G(Ya)`
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
        ${bl} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${ta}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, bu = G(xl)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, yu = ({
  agent: e,
  agentDocumentId: t,
  studioPro: n,
  componentName: r,
  updateStudioProDocument: i,
  onAgentChange: l,
  knowledgebaseToolValidations: o
}) => {
  const [a, s] = P.useState(void 0), u = P.useMemo(() => (e.knowledgebaseTools || []).map((C, S) => ({
    id: C.id ?? String(S),
    enabled: C.enabled,
    name: C.name,
    description: C.description || "",
    tool: C.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: c, sortProps: d } = tl(u), h = P.useCallback(
    (g) => {
      const C = o.get(g);
      return (C == null ? void 0 : C.state) === "invalid" ? /* @__PURE__ */ p.jsx(Gt, { icon: /* @__PURE__ */ p.jsx(Gi, { title: C.message }) }) : (C == null ? void 0 : C.state) === "syncing" ? /* @__PURE__ */ p.jsx(Gt, { icon: /* @__PURE__ */ p.jsx(gl, { title: "Validating..." }) }) : null;
    },
    [o]
  ), f = P.useCallback(async () => {
    const g = await Vr(
      n,
      r,
      e,
      i,
      t
    );
    g && l(g);
  }, [n, r, e, i, t, l]), m = P.useCallback(async () => {
    const g = e.knowledgebaseTools || [];
    if (!a || g.length === 0)
      return;
    const S = await Vr(
      n,
      r,
      e,
      i,
      t,
      a
    );
    S && l(S);
  }, [n, r, e, i, t, l, a]), y = P.useCallback(async () => {
    const g = e.knowledgebaseTools || [];
    if (!a || g.length === 0)
      return;
    const S = await js(
      n,
      e,
      i,
      a
    );
    S && l(S);
  }, [e, i, l, a]), w = P.useCallback(
    async (g, C) => {
      const S = e.knowledgebaseTools || [];
      if (S.length === 0)
        return;
      const A = S.map(
        (k) => (k.id ?? "") === g ? { ...k, enabled: C } : k
      ), I = { ...e, knowledgebaseTools: A };
      i(I), l(I);
    },
    [e, i, l]
  );
  return /* @__PURE__ */ p.jsx(Be, { label: "Knowledge bases", children: /* @__PURE__ */ p.jsx(
    nl,
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
        { id: "name", caption: "Name", isRowHeader: !0, allowsResizing: !0, allowsSorting: !0 },
        { id: "description", caption: "Description", allowsResizing: !0, allowsSorting: !0 },
        { id: "knowledgebase", caption: "Knowledge base", allowsResizing: !0, allowsSorting: !0 }
      ],
      data: c.map((g) => [
        { cellContent: h(g.id) },
        {
          cellContent: /* @__PURE__ */ p.jsx(
            bu,
            {
              "aria-label": "Enabled",
              isSelected: g.enabled,
              onChange: (C) => w(g.id, C)
            }
          )
        },
        { cellContent: g.name, tooltipText: g.name },
        { cellContent: g.description, tooltipText: g.description },
        {
          cellContent: /* @__PURE__ */ p.jsx(Ji, { icon: ka, text: g.tool }),
          tooltipText: g.tool
        }
      ]),
      rowKey: (g, C) => {
        var S;
        return ((S = c[C]) == null ? void 0 : S.id) ?? String(C);
      },
      rowOpacity: (g) => {
        var C;
        return (C = c[g]) != null && C.enabled ? 1 : 0.5;
      },
      selectionMode: "single",
      selectedKey: a,
      onRowAction: m,
      onSelectionChange: s,
      ...d,
      toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(
          at,
          {
            icon: /* @__PURE__ */ p.jsx(ml, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: f
          }
        ),
        /* @__PURE__ */ p.jsx(
          at,
          {
            icon: /* @__PURE__ */ p.jsx(pl, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: m,
            tooltip: "Edit selected knowledge base",
            isDisabled: !a
          }
        ),
        /* @__PURE__ */ p.jsx(
          at,
          {
            icon: /* @__PURE__ */ p.jsx(hl, {}),
            label: "Delete",
            "aria-label": "Remove selected knowledge base from agent",
            onPress: y,
            tooltip: "Remove selected knowledge base from agent",
            isDisabled: !a
          }
        )
      ] })
    }
  ) });
}, ku = ({
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
), wu = ({
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
), Cu = ({
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
), vu = ({
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
), Su = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ p.jsxs(
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
), Tu = ({
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
), Eu = ({
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
), Pu = ({
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
), Iu = ({
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
), Au = ({
  onSubmit: e,
  disabled: t,
  value: n,
  updateValue: r,
  children: i,
  id: l = "AgentEditorChatInput",
  isLoading: o
}) => {
  const a = P.useCallback(
    async (u) => {
      if (u.key === "Enter") {
        if (u.shiftKey) return;
        u.preventDefault(), await e();
      }
    },
    [e]
  ), s = P.useCallback(
    (u) => {
      r(u.currentTarget.value), u.currentTarget.style.height = "0px", u.currentTarget.style.height = u.currentTarget.scrollHeight + 2 + "px";
    },
    [r]
  );
  return /* @__PURE__ */ p.jsxs(Lu, { children: [
    /* @__PURE__ */ p.jsx(
      Du,
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
    /* @__PURE__ */ p.jsx(Kt, { children: i })
  ] });
}, Du = G(na)`
    min-height: 58px;
    max-height: 106px;
    padding: ${X.spacing8};
`, Kt = G.div`
    border: ${X.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    border-top: 0;
    padding: ${X.spacing4} ${X.spacing8} ${X.spacing8};
    border-radius: 0 0 ${X.borderRadiusXs} ${X.borderRadiusXs};
    margin-top: ${X.spacing0};
    background-color: transparent;
`, Lu = G.form`
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
        &:hover:enabled + ${Kt} {
            border-color: ${({ theme: e }) => e.colorsBorderInputHover};
        }

        &:active:enabled + ${Kt}, &:focus:enabled + ${Kt} {
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
`, $u = ({ onSubmit: e, disabled: t, userPrompt: n, updateUserPrompt: r, isLoading: i }) => /* @__PURE__ */ p.jsx(Mu, { children: /* @__PURE__ */ p.jsx(
  Au,
  {
    onSubmit: e,
    disabled: t,
    value: n,
    updateValue: r,
    isLoading: i,
    children: /* @__PURE__ */ p.jsx(Ru, { children: /* @__PURE__ */ p.jsx(
      Fu,
      {
        icon: /* @__PURE__ */ p.jsx(Eu, {}),
        "aria-label": "Send message",
        isDisabled: n.trim() === "" || t || i,
        onPress: e
      }
    ) })
  }
) }), Mu = G.section`
    flex-basis: 80px;
`, Ru = G.div`
    display: flex;
    justify-content: flex-end;
    gap: ${X.spacing4};
    align-items: center;
`, Fu = G(Xi)`
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
`, ju = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%209.5H10C11.655%209.5%2013%2010.845%2013%2012.5V14.5H3V12.5C3%2010.845%204.345%209.5%206%209.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8.5%201.5H7.5C6.67157%201.5%206%202.17157%206%203V5C6%205.82843%206.67157%206.5%207.5%206.5H8.5C9.32843%206.5%2010%205.82843%2010%205V3C10%202.17157%209.32843%201.5%208.5%201.5Z'%20stroke='%23A4A4A4'%20stroke-linejoin='round'/%3e%3c/svg%3e", Bu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%209.5H10C11.655%209.5%2013%2010.845%2013%2012.5V14.5H3V12.5C3%2010.845%204.345%209.5%206%209.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8.5%201.5H7.5C6.67157%201.5%206%202.17157%206%203V5C6%205.82843%206.67157%206.5%207.5%206.5H8.5C9.32843%206.5%2010%205.82843%2010%205V3C10%202.17157%209.32843%201.5%208.5%201.5Z'%20stroke='%23535965'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var zu = Object.defineProperty, Ou = (e, t) => zu(e, "name", { value: t, configurable: !0 });
const _u = Ou((e) => p.jsx(Re, { light: Bu, dark: ju, ...e }), "UserIcon"), Vu = G.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Hn = ({ name: e, timestamp: t }) => /* @__PURE__ */ p.jsxs(ze, { children: [
  e === "You" ? /* @__PURE__ */ p.jsx(_u, {}) : /* @__PURE__ */ p.jsx(Yi, { src: wa }),
  /* @__PURE__ */ p.jsx(Oe, { children: e }),
  /* @__PURE__ */ p.jsx(Vu, { children: new Date(t).toLocaleString() })
] }), Nu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Hu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var qu = Object.defineProperty, Uu = (e, t) => qu(e, "name", { value: t, configurable: !0 });
const Wu = Uu((e) => p.jsx(Re, { light: Hu, dark: Nu, ...e }), "CheckIcon"), Ku = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13ZM5%205V13H13V5H5ZM9%202V3H3V9H2V3C2%202.45%202.45%202%203%202H9Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Zu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13ZM5%205V13H13V5H5ZM9%202V3H3V9H2V3C2%202.45%202.45%202%203%202H9Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Gu = Object.defineProperty, Xu = (e, t) => Gu(e, "name", { value: t, configurable: !0 });
const Yu = Xu((e) => p.jsx(Re, { light: Zu, dark: Ku, ...e }), "CopyIcon"), yl = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, kn = G.span`
    font-size: 10px;
    color: ${({ theme: e }) => Zi(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, Qu = G(ze)`
    margin-left: auto;
`, Ju = G.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, kl = ({
  totalTokens: e,
  requestTokens: t,
  responseTokens: n,
  duration: r,
  handleCopyClick: i
}) => {
  const [l, o] = P.useState(!1), a = P.useRef(null);
  P.useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const s = () => {
    i(), o(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => o(!1), 1e3);
  };
  return /* @__PURE__ */ p.jsxs(ze, { alignItems: "center", children: [
    /* @__PURE__ */ p.jsxs(ze, { gap: 4, title: "Total tokens", children: [
      /* @__PURE__ */ p.jsx(Pu, {}),
      e && /* @__PURE__ */ p.jsx(kn, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ p.jsx(kn, { title: "(Request tokens / Response tokens)", children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ p.jsxs(ze, { gap: 4, title: "Duration", children: [
      /* @__PURE__ */ p.jsx(Cu, {}),
      r && /* @__PURE__ */ p.jsx(kn, { children: yl(r) })
    ] }),
    /* @__PURE__ */ p.jsxs(Qu, { children: [
      /* @__PURE__ */ p.jsx(Xi, { icon: l ? /* @__PURE__ */ p.jsx(Wu, {}) : /* @__PURE__ */ p.jsx(Yu, {}), onPress: s }),
      l && /* @__PURE__ */ p.jsx(Ju, { children: "Copied to clipboard" })
    ] })
  ] });
}, ec = G.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, tc = G.div`
    padding-bottom: 8px;
`, nc = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = P.useState(n), l = P.useId();
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs(ec, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ p.jsx(ku, {}) : /* @__PURE__ */ p.jsx(wu, {}),
      e
    ] }),
    r && /* @__PURE__ */ p.jsx(tc, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, rc = (e) => "kbDisplayName" in e, ic = (e) => "serverName" in e, lc = G.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, oc = G.div`
    font-size: 16px;
`, wl = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return rc(n) ? (i = /* @__PURE__ */ p.jsx(vu, {}), r = n.displayName) : ic(n) ? (i = /* @__PURE__ */ p.jsx(Su, {}), r = n.toolName) : (i = /* @__PURE__ */ p.jsx(Iu, {}), r = n.displayName), /* @__PURE__ */ p.jsxs(ze, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ p.jsx(oc, { children: i }),
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("div", { children: r }),
        /* @__PURE__ */ p.jsx(lc, { children: yl(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ p.jsx(ze, { marginTop: 8, children: /* @__PURE__ */ p.jsx(nc, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, ac = ra`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, sc = G.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, wn = G.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${ac} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, Cl = () => /* @__PURE__ */ p.jsxs(sc, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ p.jsx(wn, { delay: "0s" }),
  /* @__PURE__ */ p.jsx(wn, { delay: "0.2s" }),
  /* @__PURE__ */ p.jsx(wn, { delay: "0.4s" })
] });
function uc(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const cc = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, dc = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, fc = {};
function Hr(e, t) {
  return (fc.jsx ? dc : cc).test(e);
}
const hc = /[ \t\n\f\r]/g;
function pc(e) {
  return typeof e == "object" ? e.type === "text" ? qr(e.value) : !1 : qr(e);
}
function qr(e) {
  return e.replace(hc, "") === "";
}
class At {
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
At.prototype.normal = {};
At.prototype.property = {};
At.prototype.space = void 0;
function vl(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new At(n, r, t);
}
function qn(e) {
  return e.toLowerCase();
}
class ye {
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
ye.prototype.attribute = "";
ye.prototype.booleanish = !1;
ye.prototype.boolean = !1;
ye.prototype.commaOrSpaceSeparated = !1;
ye.prototype.commaSeparated = !1;
ye.prototype.defined = !1;
ye.prototype.mustUseProperty = !1;
ye.prototype.number = !1;
ye.prototype.overloadedBoolean = !1;
ye.prototype.property = "";
ye.prototype.spaceSeparated = !1;
ye.prototype.space = void 0;
let mc = 0;
const q = et(), oe = et(), Un = et(), D = et(), ee = et(), st = et(), ke = et();
function et() {
  return 2 ** ++mc;
}
const Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: q,
  booleanish: oe,
  commaOrSpaceSeparated: ke,
  commaSeparated: st,
  number: D,
  overloadedBoolean: Un,
  spaceSeparated: ee
}, Symbol.toStringTag, { value: "Module" })), Cn = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Wn)
);
class cr extends ye {
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
    if (super(t, n), Ur(this, "space", i), typeof r == "number")
      for (; ++l < Cn.length; ) {
        const o = Cn[l];
        Ur(this, Cn[l], (r & Wn[o]) === Wn[o]);
      }
  }
}
cr.prototype.defined = !0;
function Ur(e, t, n) {
  n && (e[t] = n);
}
function ct(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new cr(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[qn(r)] = r, n[qn(l.attribute)] = r;
  }
  return new At(t, n, e.space);
}
const Sl = ct({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: oe,
    ariaAutoComplete: null,
    ariaBusy: oe,
    ariaChecked: oe,
    ariaColCount: D,
    ariaColIndex: D,
    ariaColSpan: D,
    ariaControls: ee,
    ariaCurrent: null,
    ariaDescribedBy: ee,
    ariaDetails: null,
    ariaDisabled: oe,
    ariaDropEffect: ee,
    ariaErrorMessage: null,
    ariaExpanded: oe,
    ariaFlowTo: ee,
    ariaGrabbed: oe,
    ariaHasPopup: null,
    ariaHidden: oe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ee,
    ariaLevel: D,
    ariaLive: null,
    ariaModal: oe,
    ariaMultiLine: oe,
    ariaMultiSelectable: oe,
    ariaOrientation: null,
    ariaOwns: ee,
    ariaPlaceholder: null,
    ariaPosInSet: D,
    ariaPressed: oe,
    ariaReadOnly: oe,
    ariaRelevant: null,
    ariaRequired: oe,
    ariaRoleDescription: ee,
    ariaRowCount: D,
    ariaRowIndex: D,
    ariaRowSpan: D,
    ariaSelected: oe,
    ariaSetSize: D,
    ariaSort: null,
    ariaValueMax: D,
    ariaValueMin: D,
    ariaValueNow: D,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Tl(e, t) {
  return t in e ? e[t] : t;
}
function El(e, t) {
  return Tl(e, t.toLowerCase());
}
const gc = ct({
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
    accept: st,
    acceptCharset: ee,
    accessKey: ee,
    action: null,
    allow: null,
    allowFullScreen: q,
    allowPaymentRequest: q,
    allowUserMedia: q,
    alt: null,
    as: null,
    async: q,
    autoCapitalize: null,
    autoComplete: ee,
    autoFocus: q,
    autoPlay: q,
    blocking: ee,
    capture: null,
    charSet: null,
    checked: q,
    cite: null,
    className: ee,
    cols: D,
    colSpan: null,
    content: null,
    contentEditable: oe,
    controls: q,
    controlsList: ee,
    coords: D | st,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: q,
    defer: q,
    dir: null,
    dirName: null,
    disabled: q,
    download: Un,
    draggable: oe,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: q,
    formTarget: null,
    headers: ee,
    height: D,
    hidden: Un,
    high: D,
    href: null,
    hrefLang: null,
    htmlFor: ee,
    httpEquiv: ee,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: q,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: q,
    itemId: null,
    itemProp: ee,
    itemRef: ee,
    itemScope: q,
    itemType: ee,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: q,
    low: D,
    manifest: null,
    max: null,
    maxLength: D,
    media: null,
    method: null,
    min: null,
    minLength: D,
    multiple: q,
    muted: q,
    name: null,
    nonce: null,
    noModule: q,
    noValidate: q,
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
    open: q,
    optimum: D,
    pattern: null,
    ping: ee,
    placeholder: null,
    playsInline: q,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: q,
    referrerPolicy: null,
    rel: ee,
    required: q,
    reversed: q,
    rows: D,
    rowSpan: D,
    sandbox: ee,
    scope: null,
    scoped: q,
    seamless: q,
    selected: q,
    shadowRootClonable: q,
    shadowRootDelegatesFocus: q,
    shadowRootMode: null,
    shape: null,
    size: D,
    sizes: null,
    slot: null,
    span: D,
    spellCheck: oe,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: D,
    step: null,
    style: null,
    tabIndex: D,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: q,
    useMap: null,
    value: oe,
    width: D,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ee,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: D,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: D,
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
    compact: q,
    // Lists. Use CSS to reduce space between items instead
    declare: q,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: D,
    // `<img>` and `<object>`
    leftMargin: D,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: D,
    // `<body>`
    marginWidth: D,
    // `<body>`
    noResize: q,
    // `<frame>`
    noHref: q,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: q,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: q,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: D,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: oe,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: D,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: D,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: q,
    disableRemotePlayback: q,
    prefix: null,
    property: null,
    results: D,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: El
}), xc = ct({
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
    about: ke,
    accentHeight: D,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: D,
    amplitude: D,
    arabicForm: null,
    ascent: D,
    attributeName: null,
    attributeType: null,
    azimuth: D,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: D,
    by: null,
    calcMode: null,
    capHeight: D,
    className: ee,
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
    descent: D,
    diffuseConstant: D,
    direction: null,
    display: null,
    dur: null,
    divisor: D,
    dominantBaseline: null,
    download: q,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: D,
    enableBackground: null,
    end: null,
    event: null,
    exponent: D,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: D,
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
    g1: st,
    g2: st,
    glyphName: st,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: D,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: D,
    horizOriginX: D,
    horizOriginY: D,
    id: null,
    ideographic: D,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: D,
    k: D,
    k1: D,
    k2: D,
    k3: D,
    k4: D,
    kernelMatrix: ke,
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
    limitingConeAngle: D,
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
    mediaSize: D,
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
    overlinePosition: D,
    overlineThickness: D,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: D,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ee,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: D,
    pointsAtY: D,
    pointsAtZ: D,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: ke,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ke,
    rev: ke,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ke,
    requiredFeatures: ke,
    requiredFonts: ke,
    requiredFormats: ke,
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
    specularConstant: D,
    specularExponent: D,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: D,
    strikethroughThickness: D,
    string: null,
    stroke: null,
    strokeDashArray: ke,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: D,
    strokeOpacity: D,
    strokeWidth: null,
    style: null,
    surfaceScale: D,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ke,
    tabIndex: D,
    tableValues: null,
    target: null,
    targetX: D,
    targetY: D,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: ke,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: D,
    underlineThickness: D,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: D,
    values: null,
    vAlphabetic: D,
    vMathematical: D,
    vectorEffect: null,
    vHanging: D,
    vIdeographic: D,
    version: null,
    vertAdvY: D,
    vertOriginX: D,
    vertOriginY: D,
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
    xHeight: D,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Tl
}), Pl = ct({
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
}), Il = ct({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: El
}), Al = ct({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), bc = {
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
}, yc = /[A-Z]/g, Wr = /-[a-z]/g, kc = /^data[-\w.:]+$/i;
function wc(e, t) {
  const n = qn(t);
  let r = t, i = ye;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && kc.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(Wr, vc);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!Wr.test(l)) {
        let o = l.replace(yc, Cc);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = cr;
  }
  return new i(r, t);
}
function Cc(e) {
  return "-" + e.toLowerCase();
}
function vc(e) {
  return e.charAt(1).toUpperCase();
}
const Sc = vl([Sl, gc, Pl, Il, Al], "html"), dr = vl([Sl, xc, Pl, Il, Al], "svg");
function Tc(e) {
  return e.join(" ").trim();
}
var rt = {}, vn, Kr;
function Ec() {
  if (Kr) return vn;
  Kr = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, s = `
`, u = "/", c = "*", d = "", h = "comment", f = "declaration";
  function m(w, g) {
    if (typeof w != "string")
      throw new TypeError("First argument must be a string");
    if (!w) return [];
    g = g || {};
    var C = 1, S = 1;
    function A(F) {
      var L = F.match(t);
      L && (C += L.length);
      var K = F.lastIndexOf(s);
      S = ~K ? F.length - K : S + F.length;
    }
    function I() {
      var F = { line: C, column: S };
      return function(L) {
        return L.position = new k(F), N(), L;
      };
    }
    function k(F) {
      this.start = F, this.end = { line: C, column: S }, this.source = g.source;
    }
    k.prototype.content = w;
    function B(F) {
      var L = new Error(
        g.source + ":" + C + ":" + S + ": " + F
      );
      if (L.reason = F, L.filename = g.source, L.line = C, L.column = S, L.source = w, !g.silent) throw L;
    }
    function O(F) {
      var L = F.exec(w);
      if (L) {
        var K = L[0];
        return A(K), w = w.slice(K.length), L;
      }
    }
    function N() {
      O(n);
    }
    function v(F) {
      var L;
      for (F = F || []; L = R(); )
        L !== !1 && F.push(L);
      return F;
    }
    function R() {
      var F = I();
      if (!(u != w.charAt(0) || c != w.charAt(1))) {
        for (var L = 2; d != w.charAt(L) && (c != w.charAt(L) || u != w.charAt(L + 1)); )
          ++L;
        if (L += 2, d === w.charAt(L - 1))
          return B("End of comment missing");
        var K = w.slice(2, L - 2);
        return S += 2, A(K), w = w.slice(L), S += 2, F({
          type: h,
          comment: K
        });
      }
    }
    function j() {
      var F = I(), L = O(r);
      if (L) {
        if (R(), !O(i)) return B("property missing ':'");
        var K = O(l), ne = F({
          type: f,
          property: y(L[0].replace(e, d)),
          value: K ? y(K[0].replace(e, d)) : d
        });
        return O(o), ne;
      }
    }
    function H() {
      var F = [];
      v(F);
      for (var L; L = j(); )
        L !== !1 && (F.push(L), v(F));
      return F;
    }
    return N(), H();
  }
  function y(w) {
    return w ? w.replace(a, d) : d;
  }
  return vn = m, vn;
}
var Zr;
function Pc() {
  if (Zr) return rt;
  Zr = 1;
  var e = rt && rt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(rt, "__esModule", { value: !0 }), rt.default = n;
  const t = e(Ec());
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
  return rt;
}
var pt = {}, Gr;
function Ic() {
  if (Gr) return pt;
  Gr = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(u) {
    return !u || n.test(u) || e.test(u);
  }, o = function(u, c) {
    return c.toUpperCase();
  }, a = function(u, c) {
    return "".concat(c, "-");
  }, s = function(u, c) {
    return c === void 0 && (c = {}), l(u) ? u : (u = u.toLowerCase(), c.reactCompat ? u = u.replace(i, a) : u = u.replace(r, a), u.replace(t, o));
  };
  return pt.camelCase = s, pt;
}
var mt, Xr;
function Ac() {
  if (Xr) return mt;
  Xr = 1;
  var e = mt && mt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Pc()), n = Ic();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, s) {
      a && s && (o[(0, n.camelCase)(a, l)] = s);
    }), o;
  }
  return r.default = r, mt = r, mt;
}
var Dc = Ac();
const Lc = /* @__PURE__ */ Qi(Dc), Dl = Ll("end"), fr = Ll("start");
function Ll(e) {
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
function $l(e) {
  const t = fr(e), n = Dl(e);
  if (t && n)
    return { start: t, end: n };
}
function yt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Yr(e.position) : "start" in e || "end" in e ? Yr(e) : "line" in e || "column" in e ? Kn(e) : "";
}
function Kn(e) {
  return Qr(e && e.line) + ":" + Qr(e && e.column);
}
function Yr(e) {
  return Kn(e && e.start) + "-" + Kn(e && e.end);
}
function Qr(e) {
  return e && typeof e == "number" ? e : 1;
}
class he extends Error {
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
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = yt(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
he.prototype.file = "";
he.prototype.name = "";
he.prototype.reason = "";
he.prototype.message = "";
he.prototype.stack = "";
he.prototype.column = void 0;
he.prototype.line = void 0;
he.prototype.ancestors = void 0;
he.prototype.cause = void 0;
he.prototype.fatal = void 0;
he.prototype.place = void 0;
he.prototype.ruleId = void 0;
he.prototype.source = void 0;
const hr = {}.hasOwnProperty, $c = /* @__PURE__ */ new Map(), Mc = /[A-Z]/g, Rc = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Fc = /* @__PURE__ */ new Set(["td", "th"]), Ml = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function jc(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = qc(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Hc(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? dr : Sc,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = Rl(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function Rl(e, t, n) {
  if (t.type === "element")
    return Bc(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return zc(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return _c(e, t, n);
  if (t.type === "mdxjsEsm")
    return Oc(e, t);
  if (t.type === "root")
    return Vc(e, t, n);
  if (t.type === "text")
    return Nc(e, t);
}
function Bc(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = dr, e.schema = i), e.ancestors.push(t);
  const l = jl(e, t.tagName, !1), o = Uc(e, t);
  let a = mr(e, t);
  return Rc.has(t.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !pc(s) : !0;
  })), Fl(e, o, l, t), pr(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function zc(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  vt(e, t.position);
}
function Oc(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  vt(e, t.position);
}
function _c(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = dr, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : jl(e, t.name, !0), o = Wc(e, t), a = mr(e, t);
  return Fl(e, o, l, t), pr(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function Vc(e, t, n) {
  const r = {};
  return pr(r, mr(e, t)), e.create(t, e.Fragment, r, n);
}
function Nc(e, t) {
  return t.value;
}
function Fl(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function pr(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Hc(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const u = Array.isArray(o.children) ? n : t;
    return a ? u(l, o, a) : u(l, o);
  }
}
function qc(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), s = fr(r);
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
function Uc(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && hr.call(t.properties, i)) {
      const l = Kc(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && Fc.has(t.tagName) ? r = a : n[o] = a;
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
function Wc(e, t) {
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
        vt(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          vt(e, t.position);
      else
        l = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return n;
}
function mr(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : $c;
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
    const a = Rl(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Kc(e, t, n) {
  const r = wc(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? uc(n) : Tc(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Zc(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Gc(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? bc[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Zc(e, t) {
  try {
    return Lc(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new he("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Ml + "#cannot-parse-style-attribute", i;
  }
}
function jl(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = Hr(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = Hr(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return hr.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  vt(e);
}
function vt(e, t) {
  const n = new he(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Ml + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Gc(e) {
  const t = {};
  let n;
  for (n in e)
    hr.call(e, n) && (t[Xc(n)] = e[n]);
  return t;
}
function Xc(e) {
  let t = e.replace(Mc, Yc);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Yc(e) {
  return "-" + e.toLowerCase();
}
const Sn = {
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
}, Qc = {};
function gr(e, t) {
  const n = Qc, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Bl(e, r, i);
}
function Bl(e, t, n) {
  if (Jc(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Jr(e.children, t, n);
  }
  return Array.isArray(e) ? Jr(e, t, n) : "";
}
function Jr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Bl(e[i], t, n);
  return r.join("");
}
function Jc(e) {
  return !!(e && typeof e == "object");
}
const ei = document.createElement("i");
function xr(e) {
  const t = "&" + e + ";";
  ei.innerHTML = t;
  const n = ei.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function we(e, t, n, r) {
  const i = e.length;
  let l = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4;
}
function Ce(e, t) {
  return e.length > 0 ? (we(e, e.length, 0, t), e) : t;
}
const ti = {}.hasOwnProperty;
function zl(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    ed(t, e[n]);
  return t;
}
function ed(e, t) {
  let n;
  for (n in t) {
    const i = (ti.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        ti.call(i, o) || (i[o] = []);
        const a = l[o];
        td(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function td(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  we(e, 0, 0, r);
}
function Ol(e, t) {
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
function De(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const me = Ze(/[A-Za-z]/), fe = Ze(/[\dA-Za-z]/), nd = Ze(/[#-'*+\--9=?A-Z^-~]/);
function Qt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Zn = Ze(/\d/), rd = Ze(/[\dA-Fa-f]/), id = Ze(/[!-/:-@[-`{-~]/);
function V(e) {
  return e !== null && e < -2;
}
function J(e) {
  return e !== null && (e < 0 || e === 32);
}
function W(e) {
  return e === -2 || e === -1 || e === 32;
}
const nn = Ze(new RegExp("\\p{P}|\\p{S}", "u")), Je = Ze(/\s/);
function Ze(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function dt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let o = "";
    if (l === 37 && fe(e.charCodeAt(n + 1)) && fe(e.charCodeAt(n + 2)))
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
    return W(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return W(s) && l++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const ld = {
  tokenize: od
};
function od(e) {
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
    return V(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const ad = {
  tokenize: sd
}, ni = {
  tokenize: ud
};
function sd(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(S) {
    if (r < n.length) {
      const A = n[r];
      return t.containerState = A[1], e.attempt(A[0].continuation, s, u)(S);
    }
    return u(S);
  }
  function s(S) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && C();
      const A = t.events.length;
      let I = A, k;
      for (; I--; )
        if (t.events[I][0] === "exit" && t.events[I][1].type === "chunkFlow") {
          k = t.events[I][1].end;
          break;
        }
      g(r);
      let B = A;
      for (; B < t.events.length; )
        t.events[B][1].end = {
          ...k
        }, B++;
      return we(t.events, I + 1, 0, t.events.slice(A)), t.events.length = B, u(S);
    }
    return a(S);
  }
  function u(S) {
    if (r === n.length) {
      if (!i)
        return h(S);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(S);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(ni, c, d)(S);
  }
  function c(S) {
    return i && C(), g(r), h(S);
  }
  function d(S) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(S);
  }
  function h(S) {
    return t.containerState = {}, e.attempt(ni, f, m)(S);
  }
  function f(S) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(S);
  }
  function m(S) {
    if (S === null) {
      i && C(), g(0), e.consume(S);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), y(S);
  }
  function y(S) {
    if (S === null) {
      w(e.exit("chunkFlow"), !0), g(0), e.consume(S);
      return;
    }
    return V(S) ? (e.consume(S), w(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(S), y);
  }
  function w(S, A) {
    const I = t.sliceStream(S);
    if (A && I.push(null), S.previous = l, l && (l.next = S), l = S, i.defineSkip(S.start), i.write(I), t.parser.lazy[S.start.line]) {
      let k = i.events.length;
      for (; k--; )
        if (
          // The token starts before the line ending…
          i.events[k][1].start.offset < o && // …and either is not ended yet…
          (!i.events[k][1].end || // …or ends after it.
          i.events[k][1].end.offset > o)
        )
          return;
      const B = t.events.length;
      let O = B, N, v;
      for (; O--; )
        if (t.events[O][0] === "exit" && t.events[O][1].type === "chunkFlow") {
          if (N) {
            v = t.events[O][1].end;
            break;
          }
          N = !0;
        }
      for (g(r), k = B; k < t.events.length; )
        t.events[k][1].end = {
          ...v
        }, k++;
      we(t.events, O + 1, 0, t.events.slice(B)), t.events.length = k;
    }
  }
  function g(S) {
    let A = n.length;
    for (; A-- > S; ) {
      const I = n[A];
      t.containerState = I[1], I[0].exit.call(t, e);
    }
    n.length = S;
  }
  function C() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function ud(e, t, n) {
  return Z(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function ut(e) {
  if (e === null || J(e) || Je(e))
    return 1;
  if (nn(e))
    return 2;
}
function rn(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (t = l(t, n), r.push(l));
  }
  return t;
}
const Gn = {
  name: "attention",
  resolveAll: cd,
  tokenize: dd
};
function cd(e, t) {
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
          ri(d, -s), ri(h, s), o = {
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
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = Ce(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = Ce(u, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), u = Ce(u, rn(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = Ce(u, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = Ce(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, we(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function dd(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = ut(r);
  let l;
  return o;
  function o(s) {
    return l = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === l)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), c = ut(s), d = !c || c === 2 && i || n.includes(s), h = !i || i === 2 && c || n.includes(r);
    return u._open = !!(l === 42 ? d : d && (i || !h)), u._close = !!(l === 42 ? h : h && (c || !d)), t(s);
  }
}
function ri(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const fd = {
  name: "autolink",
  tokenize: hd
};
function hd(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(f) {
    return me(f) ? (e.consume(f), o) : f === 64 ? n(f) : u(f);
  }
  function o(f) {
    return f === 43 || f === 45 || f === 46 || fe(f) ? (r = 1, a(f)) : u(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || fe(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Qt(f) ? n(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), c) : nd(f) ? (e.consume(f), u) : n(f);
  }
  function c(f) {
    return fe(f) ? d(f) : n(f);
  }
  function d(f) {
    return f === 46 ? (e.consume(f), r = 0, c) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(f);
  }
  function h(f) {
    if ((f === 45 || fe(f)) && r++ < 63) {
      const m = f === 45 ? h : d;
      return e.consume(f), m;
    }
    return n(f);
  }
}
const Dt = {
  partial: !0,
  tokenize: pd
};
function pd(e, t, n) {
  return r;
  function r(l) {
    return W(l) ? Z(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || V(l) ? t(l) : n(l);
  }
}
const _l = {
  continuation: {
    tokenize: gd
  },
  exit: xd,
  name: "blockQuote",
  tokenize: md
};
function md(e, t, n) {
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
    return W(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function gd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return W(o) ? Z(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(_l, t, n)(o);
  }
}
function xd(e) {
  e.exit("blockQuote");
}
const Vl = {
  name: "characterEscape",
  tokenize: bd
};
function bd(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return id(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const Nl = {
  name: "characterReference",
  tokenize: yd
};
function yd(e, t, n) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(d) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), s;
  }
  function s(d) {
    return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, o = fe, c(d));
  }
  function u(d) {
    return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = rd, c) : (e.enter("characterReferenceValue"), l = 7, o = Zn, c(d));
  }
  function c(d) {
    if (d === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return o === fe && !xr(r.sliceSerialize(h)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(d) && i++ < l ? (e.consume(d), c) : n(d);
  }
}
const ii = {
  partial: !0,
  tokenize: wd
}, li = {
  concrete: !0,
  name: "codeFenced",
  tokenize: kd
};
function kd(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: I
  };
  let l = 0, o = 0, a;
  return s;
  function s(k) {
    return u(k);
  }
  function u(k) {
    const B = r.events[r.events.length - 1];
    return l = B && B[1].type === "linePrefix" ? B[2].sliceSerialize(B[1], !0).length : 0, a = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(k);
  }
  function c(k) {
    return k === a ? (o++, e.consume(k), c) : o < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), W(k) ? Z(e, d, "whitespace")(k) : d(k));
  }
  function d(k) {
    return k === null || V(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(ii, y, A)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(k));
  }
  function h(k) {
    return k === null || V(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(k)) : W(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Z(e, f, "whitespace")(k)) : k === 96 && k === a ? n(k) : (e.consume(k), h);
  }
  function f(k) {
    return k === null || V(k) ? d(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(k));
  }
  function m(k) {
    return k === null || V(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(k)) : k === 96 && k === a ? n(k) : (e.consume(k), m);
  }
  function y(k) {
    return e.attempt(i, A, w)(k);
  }
  function w(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), g;
  }
  function g(k) {
    return l > 0 && W(k) ? Z(e, C, "linePrefix", l + 1)(k) : C(k);
  }
  function C(k) {
    return k === null || V(k) ? e.check(ii, y, A)(k) : (e.enter("codeFlowValue"), S(k));
  }
  function S(k) {
    return k === null || V(k) ? (e.exit("codeFlowValue"), C(k)) : (e.consume(k), S);
  }
  function A(k) {
    return e.exit("codeFenced"), t(k);
  }
  function I(k, B, O) {
    let N = 0;
    return v;
    function v(L) {
      return k.enter("lineEnding"), k.consume(L), k.exit("lineEnding"), R;
    }
    function R(L) {
      return k.enter("codeFencedFence"), W(L) ? Z(k, j, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : j(L);
    }
    function j(L) {
      return L === a ? (k.enter("codeFencedFenceSequence"), H(L)) : O(L);
    }
    function H(L) {
      return L === a ? (N++, k.consume(L), H) : N >= o ? (k.exit("codeFencedFenceSequence"), W(L) ? Z(k, F, "whitespace")(L) : F(L)) : O(L);
    }
    function F(L) {
      return L === null || V(L) ? (k.exit("codeFencedFence"), B(L)) : O(L);
    }
  }
}
function wd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Tn = {
  name: "codeIndented",
  tokenize: vd
}, Cd = {
  partial: !0,
  tokenize: Sd
};
function vd(e, t, n) {
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
    return u === null ? s(u) : V(u) ? e.attempt(Cd, o, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || V(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Sd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : V(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : Z(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : V(o) ? i(o) : n(o);
  }
}
const Td = {
  name: "codeText",
  previous: Pd,
  resolve: Ed,
  tokenize: Id
};
function Ed(e) {
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
function Pd(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Id(e, t, n) {
  let r = 0, i, l;
  return o;
  function o(d) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(d);
  }
  function a(d) {
    return d === 96 ? (e.consume(d), r++, a) : (e.exit("codeTextSequence"), s(d));
  }
  function s(d) {
    return d === null ? n(d) : d === 32 ? (e.enter("space"), e.consume(d), e.exit("space"), s) : d === 96 ? (l = e.enter("codeTextSequence"), i = 0, c(d)) : V(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(d));
  }
  function u(d) {
    return d === null || d === 32 || d === 96 || V(d) ? (e.exit("codeTextData"), s(d)) : (e.consume(d), u);
  }
  function c(d) {
    return d === 96 ? (e.consume(d), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : (l.type = "codeTextData", u(d));
  }
}
class Ad {
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
    return r && gt(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), gt(this.left, t);
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
    this.setCursor(0), gt(this.right, t.reverse());
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
        gt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        gt(this.left, n.reverse());
      }
  }
}
function gt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Hl(e) {
  const t = {};
  let n = -1, r, i, l, o, a, s, u;
  const c = new Ad(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, l = 0, l < s.length && s[l][1].type === "lineEndingBlank" && (l += 2), l < s.length && s[l][1].type === "content"))
      for (; ++l < s.length && s[l][1].type !== "content"; )
        s[l][1].type === "chunkText" && (s[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Dd(c, n)), n = t[n], u = !0);
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
  return we(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function Dd(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, s = [], u = {};
  let c, d, h = -1, f = n, m = 0, y = 0;
  const w = [y];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    l.push(i), f._tokenizer || (c = r.sliceStream(f), f.next || c.push(null), d && o.defineSkip(f.start), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = f, f = f.next;
  }
  for (f = n; ++h < a.length; )
    // Find a void token that includes a break.
    a[h][0] === "exit" && a[h - 1][0] === "enter" && a[h][1].type === a[h - 1][1].type && a[h][1].start.line !== a[h][1].end.line && (y = h + 1, w.push(y), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (o.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : w.pop(), h = w.length; h--; ) {
    const g = a.slice(w[h], w[h + 1]), C = l.pop();
    s.push([C, C + g.length - 1]), e.splice(C, 2, g);
  }
  for (s.reverse(), h = -1; ++h < s.length; )
    u[m + s[h][0]] = m + s[h][1], m += s[h][1] - s[h][0] - 1;
  return u;
}
const Ld = {
  resolve: Md,
  tokenize: Rd
}, $d = {
  partial: !0,
  tokenize: Fd
};
function Md(e) {
  return Hl(e), e;
}
function Rd(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : V(a) ? e.check($d, o, l)(a) : (e.consume(a), i);
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
function Fd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), Z(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || V(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function ql(e, t, n, r, i, l, o, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(g) {
    return g === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(g), e.exit(l), h) : g === null || g === 32 || g === 41 || Qt(g) ? n(g) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), y(g));
  }
  function h(g) {
    return g === 62 ? (e.enter(l), e.consume(g), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(g));
  }
  function f(g) {
    return g === 62 ? (e.exit("chunkString"), e.exit(a), h(g)) : g === null || g === 60 || V(g) ? n(g) : (e.consume(g), g === 92 ? m : f);
  }
  function m(g) {
    return g === 60 || g === 62 || g === 92 ? (e.consume(g), f) : f(g);
  }
  function y(g) {
    return !c && (g === null || g === 41 || J(g)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(g)) : c < u && g === 40 ? (e.consume(g), c++, y) : g === 41 ? (e.consume(g), c--, y) : g === null || g === 32 || g === 40 || Qt(g) ? n(g) : (e.consume(g), g === 92 ? w : y);
  }
  function w(g) {
    return g === 40 || g === 41 || g === 92 ? (e.consume(g), y) : y(g);
  }
}
function Ul(e, t, n, r, i, l) {
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
    f === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(f) : f === 93 ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : V(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), d(f));
  }
  function d(f) {
    return f === null || f === 91 || f === 93 || V(f) || a++ > 999 ? (e.exit("chunkString"), c(f)) : (e.consume(f), s || (s = !W(f)), f === 92 ? h : d);
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, d) : d(f);
  }
}
function Wl(e, t, n, r, i, l) {
  let o;
  return a;
  function a(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, s) : n(h);
  }
  function s(h) {
    return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(l), u(h));
  }
  function u(h) {
    return h === o ? (e.exit(l), s(o)) : h === null ? n(h) : V(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), Z(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === o || h === null || V(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? d : c);
  }
  function d(h) {
    return h === o || h === 92 ? (e.consume(h), c) : c(h);
  }
}
function kt(e, t) {
  let n;
  return r;
  function r(i) {
    return V(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : W(i) ? Z(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const jd = {
  name: "definition",
  tokenize: zd
}, Bd = {
  partial: !0,
  tokenize: Od
};
function zd(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(f) {
    return e.enter("definition"), o(f);
  }
  function o(f) {
    return Ul.call(
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
    return i = De(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return J(f) ? kt(e, u)(f) : u(f);
  }
  function u(f) {
    return ql(
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
    return e.attempt(Bd, d, d)(f);
  }
  function d(f) {
    return W(f) ? Z(e, h, "whitespace")(f) : h(f);
  }
  function h(f) {
    return f === null || V(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function Od(e, t, n) {
  return r;
  function r(a) {
    return J(a) ? kt(e, i)(a) : n(a);
  }
  function i(a) {
    return Wl(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return W(a) ? Z(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || V(a) ? t(a) : n(a);
  }
}
const _d = {
  name: "hardBreakEscape",
  tokenize: Vd
};
function Vd(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return V(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const Nd = {
  name: "headingAtx",
  resolve: Hd,
  tokenize: qd
};
function Hd(e, t) {
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
  }, we(e, r, n - r + 1, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]])), e;
}
function qd(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), l(c);
  }
  function l(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || J(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), s(c)) : c === null || V(c) ? (e.exit("atxHeading"), t(c)) : W(c) ? Z(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function s(c) {
    return c === 35 ? (e.consume(c), s) : (e.exit("atxHeadingSequence"), a(c));
  }
  function u(c) {
    return c === null || c === 35 || J(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), u);
  }
}
const Ud = [
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
], oi = ["pre", "script", "style", "textarea"], Wd = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Gd,
  tokenize: Xd
}, Kd = {
  partial: !0,
  tokenize: Qd
}, Zd = {
  partial: !0,
  tokenize: Yd
};
function Gd(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Xd(e, t, n) {
  const r = this;
  let i, l, o, a, s;
  return u;
  function u(b) {
    return c(b);
  }
  function c(b) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(b), d;
  }
  function d(b) {
    return b === 33 ? (e.consume(b), h) : b === 47 ? (e.consume(b), l = !0, y) : b === 63 ? (e.consume(b), i = 3, r.interrupt ? t : x) : me(b) ? (e.consume(b), o = String.fromCharCode(b), w) : n(b);
  }
  function h(b) {
    return b === 45 ? (e.consume(b), i = 2, f) : b === 91 ? (e.consume(b), i = 5, a = 0, m) : me(b) ? (e.consume(b), i = 4, r.interrupt ? t : x) : n(b);
  }
  function f(b) {
    return b === 45 ? (e.consume(b), r.interrupt ? t : x) : n(b);
  }
  function m(b) {
    const ce = "CDATA[";
    return b === ce.charCodeAt(a++) ? (e.consume(b), a === ce.length ? r.interrupt ? t : j : m) : n(b);
  }
  function y(b) {
    return me(b) ? (e.consume(b), o = String.fromCharCode(b), w) : n(b);
  }
  function w(b) {
    if (b === null || b === 47 || b === 62 || J(b)) {
      const ce = b === 47, Le = o.toLowerCase();
      return !ce && !l && oi.includes(Le) ? (i = 1, r.interrupt ? t(b) : j(b)) : Ud.includes(o.toLowerCase()) ? (i = 6, ce ? (e.consume(b), g) : r.interrupt ? t(b) : j(b)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(b) : l ? C(b) : S(b));
    }
    return b === 45 || fe(b) ? (e.consume(b), o += String.fromCharCode(b), w) : n(b);
  }
  function g(b) {
    return b === 62 ? (e.consume(b), r.interrupt ? t : j) : n(b);
  }
  function C(b) {
    return W(b) ? (e.consume(b), C) : v(b);
  }
  function S(b) {
    return b === 47 ? (e.consume(b), v) : b === 58 || b === 95 || me(b) ? (e.consume(b), A) : W(b) ? (e.consume(b), S) : v(b);
  }
  function A(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || fe(b) ? (e.consume(b), A) : I(b);
  }
  function I(b) {
    return b === 61 ? (e.consume(b), k) : W(b) ? (e.consume(b), I) : S(b);
  }
  function k(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), s = b, B) : W(b) ? (e.consume(b), k) : O(b);
  }
  function B(b) {
    return b === s ? (e.consume(b), s = null, N) : b === null || V(b) ? n(b) : (e.consume(b), B);
  }
  function O(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || J(b) ? I(b) : (e.consume(b), O);
  }
  function N(b) {
    return b === 47 || b === 62 || W(b) ? S(b) : n(b);
  }
  function v(b) {
    return b === 62 ? (e.consume(b), R) : n(b);
  }
  function R(b) {
    return b === null || V(b) ? j(b) : W(b) ? (e.consume(b), R) : n(b);
  }
  function j(b) {
    return b === 45 && i === 2 ? (e.consume(b), K) : b === 60 && i === 1 ? (e.consume(b), ne) : b === 62 && i === 4 ? (e.consume(b), ge) : b === 63 && i === 3 ? (e.consume(b), x) : b === 93 && i === 5 ? (e.consume(b), Se) : V(b) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Kd, Te, H)(b)) : b === null || V(b) ? (e.exit("htmlFlowData"), H(b)) : (e.consume(b), j);
  }
  function H(b) {
    return e.check(Zd, F, Te)(b);
  }
  function F(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), L;
  }
  function L(b) {
    return b === null || V(b) ? H(b) : (e.enter("htmlFlowData"), j(b));
  }
  function K(b) {
    return b === 45 ? (e.consume(b), x) : j(b);
  }
  function ne(b) {
    return b === 47 ? (e.consume(b), o = "", re) : j(b);
  }
  function re(b) {
    if (b === 62) {
      const ce = o.toLowerCase();
      return oi.includes(ce) ? (e.consume(b), ge) : j(b);
    }
    return me(b) && o.length < 8 ? (e.consume(b), o += String.fromCharCode(b), re) : j(b);
  }
  function Se(b) {
    return b === 93 ? (e.consume(b), x) : j(b);
  }
  function x(b) {
    return b === 62 ? (e.consume(b), ge) : b === 45 && i === 2 ? (e.consume(b), x) : j(b);
  }
  function ge(b) {
    return b === null || V(b) ? (e.exit("htmlFlowData"), Te(b)) : (e.consume(b), ge);
  }
  function Te(b) {
    return e.exit("htmlFlow"), t(b);
  }
}
function Yd(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return V(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function Qd(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Dt, t, n);
  }
}
const Jd = {
  name: "htmlText",
  tokenize: ef
};
function ef(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(x) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(x), s;
  }
  function s(x) {
    return x === 33 ? (e.consume(x), u) : x === 47 ? (e.consume(x), I) : x === 63 ? (e.consume(x), S) : me(x) ? (e.consume(x), O) : n(x);
  }
  function u(x) {
    return x === 45 ? (e.consume(x), c) : x === 91 ? (e.consume(x), l = 0, m) : me(x) ? (e.consume(x), C) : n(x);
  }
  function c(x) {
    return x === 45 ? (e.consume(x), f) : n(x);
  }
  function d(x) {
    return x === null ? n(x) : x === 45 ? (e.consume(x), h) : V(x) ? (o = d, ne(x)) : (e.consume(x), d);
  }
  function h(x) {
    return x === 45 ? (e.consume(x), f) : d(x);
  }
  function f(x) {
    return x === 62 ? K(x) : x === 45 ? h(x) : d(x);
  }
  function m(x) {
    const ge = "CDATA[";
    return x === ge.charCodeAt(l++) ? (e.consume(x), l === ge.length ? y : m) : n(x);
  }
  function y(x) {
    return x === null ? n(x) : x === 93 ? (e.consume(x), w) : V(x) ? (o = y, ne(x)) : (e.consume(x), y);
  }
  function w(x) {
    return x === 93 ? (e.consume(x), g) : y(x);
  }
  function g(x) {
    return x === 62 ? K(x) : x === 93 ? (e.consume(x), g) : y(x);
  }
  function C(x) {
    return x === null || x === 62 ? K(x) : V(x) ? (o = C, ne(x)) : (e.consume(x), C);
  }
  function S(x) {
    return x === null ? n(x) : x === 63 ? (e.consume(x), A) : V(x) ? (o = S, ne(x)) : (e.consume(x), S);
  }
  function A(x) {
    return x === 62 ? K(x) : S(x);
  }
  function I(x) {
    return me(x) ? (e.consume(x), k) : n(x);
  }
  function k(x) {
    return x === 45 || fe(x) ? (e.consume(x), k) : B(x);
  }
  function B(x) {
    return V(x) ? (o = B, ne(x)) : W(x) ? (e.consume(x), B) : K(x);
  }
  function O(x) {
    return x === 45 || fe(x) ? (e.consume(x), O) : x === 47 || x === 62 || J(x) ? N(x) : n(x);
  }
  function N(x) {
    return x === 47 ? (e.consume(x), K) : x === 58 || x === 95 || me(x) ? (e.consume(x), v) : V(x) ? (o = N, ne(x)) : W(x) ? (e.consume(x), N) : K(x);
  }
  function v(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || fe(x) ? (e.consume(x), v) : R(x);
  }
  function R(x) {
    return x === 61 ? (e.consume(x), j) : V(x) ? (o = R, ne(x)) : W(x) ? (e.consume(x), R) : N(x);
  }
  function j(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? n(x) : x === 34 || x === 39 ? (e.consume(x), i = x, H) : V(x) ? (o = j, ne(x)) : W(x) ? (e.consume(x), j) : (e.consume(x), F);
  }
  function H(x) {
    return x === i ? (e.consume(x), i = void 0, L) : x === null ? n(x) : V(x) ? (o = H, ne(x)) : (e.consume(x), H);
  }
  function F(x) {
    return x === null || x === 34 || x === 39 || x === 60 || x === 61 || x === 96 ? n(x) : x === 47 || x === 62 || J(x) ? N(x) : (e.consume(x), F);
  }
  function L(x) {
    return x === 47 || x === 62 || J(x) ? N(x) : n(x);
  }
  function K(x) {
    return x === 62 ? (e.consume(x), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(x);
  }
  function ne(x) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), re;
  }
  function re(x) {
    return W(x) ? Z(e, Se, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : Se(x);
  }
  function Se(x) {
    return e.enter("htmlTextData"), o(x);
  }
}
const br = {
  name: "labelEnd",
  resolveAll: lf,
  resolveTo: of,
  tokenize: af
}, tf = {
  tokenize: sf
}, nf = {
  tokenize: uf
}, rf = {
  tokenize: cf
};
function lf(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && we(e, 0, e.length, n), e;
}
function of(e, t) {
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
  return a = [["enter", s, t], ["enter", u, t]], a = Ce(a, e.slice(l + 1, l + r + 3)), a = Ce(a, [["enter", c, t]]), a = Ce(a, rn(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), a = Ce(a, [["exit", c, t], e[o - 2], e[o - 1], ["exit", u, t]]), a = Ce(a, e.slice(o + 1)), a = Ce(a, [["exit", s, t]]), we(e, l, e.length, a), e;
}
function af(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(h) {
    return l ? l._inactive ? d(h) : (o = r.parser.defined.includes(De(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(h);
  }
  function s(h) {
    return h === 40 ? e.attempt(tf, c, o ? c : d)(h) : h === 91 ? e.attempt(nf, c, o ? u : d)(h) : o ? c(h) : d(h);
  }
  function u(h) {
    return e.attempt(rf, c, d)(h);
  }
  function c(h) {
    return t(h);
  }
  function d(h) {
    return l._balanced = !0, n(h);
  }
}
function sf(e, t, n) {
  return r;
  function r(d) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i;
  }
  function i(d) {
    return J(d) ? kt(e, l)(d) : l(d);
  }
  function l(d) {
    return d === 41 ? c(d) : ql(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d);
  }
  function o(d) {
    return J(d) ? kt(e, s)(d) : c(d);
  }
  function a(d) {
    return n(d);
  }
  function s(d) {
    return d === 34 || d === 39 || d === 40 ? Wl(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : c(d);
  }
  function u(d) {
    return J(d) ? kt(e, c)(d) : c(d);
  }
  function c(d) {
    return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
  }
}
function uf(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Ul.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(De(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function cf(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const df = {
  name: "labelStartImage",
  resolveAll: br.resolveAll,
  tokenize: ff
};
function ff(e, t, n) {
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
const hf = {
  name: "labelStartLink",
  resolveAll: br.resolveAll,
  tokenize: pf
};
function pf(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const En = {
  name: "lineEnding",
  tokenize: mf
};
function mf(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), Z(e, t, "linePrefix");
  }
}
const Zt = {
  name: "thematicBreak",
  tokenize: gf
};
function gf(e, t, n) {
  let r = 0, i;
  return l;
  function l(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || V(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), W(u) ? Z(e, a, "whitespace")(u) : a(u));
  }
}
const be = {
  continuation: {
    tokenize: kf
  },
  exit: Cf,
  name: "list",
  tokenize: yf
}, xf = {
  partial: !0,
  tokenize: vf
}, bf = {
  partial: !0,
  tokenize: wf
};
function yf(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(f) {
    const m = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Zn(f)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Zt, n, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return Zn(f) && ++o < 10 ? (e.consume(f), s) : (!r.interrupt || o < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      Dt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(xf, h, d)
    );
  }
  function c(f) {
    return r.containerState.initialBlankLine = !0, l++, h(f);
  }
  function d(f) {
    return W(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), h) : n(f);
  }
  function h(f) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function kf(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(Dt, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Z(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !W(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(bf, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, Z(e, e.attempt(be, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function wf(e, t, n) {
  const r = this;
  return Z(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function Cf(e) {
  e.exit(this.containerState.type);
}
function vf(e, t, n) {
  const r = this;
  return Z(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !W(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const ai = {
  name: "setextUnderline",
  resolveTo: Sf,
  tokenize: Tf
};
function Sf(e, t) {
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
function Tf(e, t, n) {
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
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), W(u) ? Z(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || V(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Ef = {
  tokenize: Pf
};
function Pf(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    Dt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, Z(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ld, i)), "linePrefix"))
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
const If = {
  resolveAll: Zl()
}, Af = Kl("string"), Df = Kl("text");
function Kl(e) {
  return {
    resolveAll: Zl(e === "text" ? Lf : void 0),
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
function Zl(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function Lf(e, t) {
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
const $f = {
  42: be,
  43: be,
  45: be,
  48: be,
  49: be,
  50: be,
  51: be,
  52: be,
  53: be,
  54: be,
  55: be,
  56: be,
  57: be,
  62: _l
}, Mf = {
  91: jd
}, Rf = {
  [-2]: Tn,
  [-1]: Tn,
  32: Tn
}, Ff = {
  35: Nd,
  42: Zt,
  45: [ai, Zt],
  60: Wd,
  61: ai,
  95: Zt,
  96: li,
  126: li
}, jf = {
  38: Nl,
  92: Vl
}, Bf = {
  [-5]: En,
  [-4]: En,
  [-3]: En,
  33: df,
  38: Nl,
  42: Gn,
  60: [fd, Jd],
  91: hf,
  92: [_d, Vl],
  93: br,
  95: Gn,
  96: Td
}, zf = {
  null: [Gn, If]
}, Of = {
  null: [42, 95]
}, _f = {
  null: []
}, Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Of,
  contentInitial: Mf,
  disable: _f,
  document: $f,
  flow: Ff,
  flowInitial: Rf,
  insideSpan: zf,
  string: jf,
  text: Bf
}, Symbol.toStringTag, { value: "Module" }));
function Nf(e, t, n) {
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
    attempt: B(I),
    check: B(k),
    consume: C,
    enter: S,
    exit: A,
    interrupt: B(k, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: y,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: f,
    write: d
  };
  let c = t.tokenize.call(u, s);
  return t.resolveAll && l.push(t), u;
  function d(R) {
    return o = Ce(o, R), w(), o[o.length - 1] !== null ? [] : (O(t, 0), u.events = rn(l, u.events, u), u.events);
  }
  function h(R, j) {
    return qf(f(R), j);
  }
  function f(R) {
    return Hf(o, R);
  }
  function m() {
    const {
      _bufferIndex: R,
      _index: j,
      line: H,
      column: F,
      offset: L
    } = r;
    return {
      _bufferIndex: R,
      _index: j,
      line: H,
      column: F,
      offset: L
    };
  }
  function y(R) {
    i[R.line] = R.column, v();
  }
  function w() {
    let R;
    for (; r._index < o.length; ) {
      const j = o[r._index];
      if (typeof j == "string")
        for (R = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === R && r._bufferIndex < j.length; )
          g(j.charCodeAt(r._bufferIndex));
      else
        g(j);
    }
  }
  function g(R) {
    c = c(R);
  }
  function C(R) {
    V(R) ? (r.line++, r.column = 1, r.offset += R === -3 ? 2 : 1, v()) : R !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = R;
  }
  function S(R, j) {
    const H = j || {};
    return H.type = R, H.start = m(), u.events.push(["enter", H, u]), a.push(H), H;
  }
  function A(R) {
    const j = a.pop();
    return j.end = m(), u.events.push(["exit", j, u]), j;
  }
  function I(R, j) {
    O(R, j.from);
  }
  function k(R, j) {
    j.restore();
  }
  function B(R, j) {
    return H;
    function H(F, L, K) {
      let ne, re, Se, x;
      return Array.isArray(F) ? (
        /* c8 ignore next 1 */
        Te(F)
      ) : "tokenize" in F ? (
        // Looks like a construct.
        Te([
          /** @type {Construct} */
          F
        ])
      ) : ge(F);
      function ge(ae) {
        return je;
        function je(ie) {
          const Ee = ie !== null && ae[ie], Ne = ie !== null && ae.null, He = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ee) ? Ee : Ee ? [Ee] : [],
            ...Array.isArray(Ne) ? Ne : Ne ? [Ne] : []
          ];
          return Te(He)(ie);
        }
      }
      function Te(ae) {
        return ne = ae, re = 0, ae.length === 0 ? K : b(ae[re]);
      }
      function b(ae) {
        return je;
        function je(ie) {
          return x = N(), Se = ae, ae.partial || (u.currentConstruct = ae), ae.name && u.parser.constructs.disable.null.includes(ae.name) ? Le() : ae.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            j ? Object.assign(Object.create(u), j) : u,
            s,
            ce,
            Le
          )(ie);
        }
      }
      function ce(ae) {
        return R(Se, x), L;
      }
      function Le(ae) {
        return x.restore(), ++re < ne.length ? b(ne[re]) : K;
      }
    }
  }
  function O(R, j) {
    R.resolveAll && !l.includes(R) && l.push(R), R.resolve && we(u.events, j, u.events.length - j, R.resolve(u.events.slice(j), u)), R.resolveTo && (u.events = R.resolveTo(u.events, u));
  }
  function N() {
    const R = m(), j = u.previous, H = u.currentConstruct, F = u.events.length, L = Array.from(a);
    return {
      from: F,
      restore: K
    };
    function K() {
      r = R, u.previous = j, u.currentConstruct = H, u.events.length = F, a = L, v();
    }
  }
  function v() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Hf(e, t) {
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
function qf(e, t) {
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
function Uf(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      zl([Vf, ...(e || {}).extensions || []])
    ),
    content: i(ld),
    defined: [],
    document: i(ad),
    flow: i(Ef),
    lazy: {},
    string: i(Af),
    text: i(Df)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Nf(r, l, a);
    }
  }
}
function Wf(e) {
  for (; !Hl(e); )
    ;
  return e;
}
const si = /[\0\t\n\r]/g;
function Kf() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const s = [];
    let u, c, d, h, f;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), d = 0, t = "", n && (l.charCodeAt(0) === 65279 && d++, n = void 0); d < l.length; ) {
      if (si.lastIndex = d, u = si.exec(l), h = u && u.index !== void 0 ? u.index : l.length, f = l.charCodeAt(h), !u) {
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
const Zf = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Gf(e) {
  return e.replace(Zf, Xf);
}
function Xf(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return Ol(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return xr(n) || e;
}
const Gl = {}.hasOwnProperty;
function Yf(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Qf(n)(Wf(Uf(n).document().write(Kf()(e, t, !0))));
}
function Qf(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(Ft),
      autolinkProtocol: N,
      autolinkEmail: N,
      atxHeading: l(tt),
      blockQuote: l(Ne),
      characterEscape: N,
      characterReference: N,
      codeFenced: l(He),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(He, o),
      codeText: l(sn, o),
      codeTextData: N,
      data: N,
      codeFlowValue: N,
      definition: l(un),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(cn),
      hardBreakEscape: l(Mt),
      hardBreakTrailing: l(Mt),
      htmlFlow: l(Rt, o),
      htmlFlowData: N,
      htmlText: l(Rt, o),
      htmlTextData: N,
      image: l(dn),
      label: o,
      link: l(Ft),
      listItem: l(fn),
      listItemValue: h,
      listOrdered: l(jt, d),
      listUnordered: l(jt),
      paragraph: l(hn),
      reference: b,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(tt),
      strong: l(pn),
      thematicBreak: l(mn)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: I,
      autolink: s(),
      autolinkEmail: Ee,
      autolinkProtocol: ie,
      blockQuote: s(),
      characterEscapeValue: v,
      characterReferenceMarkerHexadecimal: Le,
      characterReferenceMarkerNumeric: Le,
      characterReferenceValue: ae,
      characterReference: je,
      codeFenced: s(w),
      codeFencedFence: y,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: m,
      codeFlowValue: v,
      codeIndented: s(g),
      codeText: s(L),
      codeTextData: v,
      data: v,
      definition: s(),
      definitionDestinationString: A,
      definitionLabelString: C,
      definitionTitleString: S,
      emphasis: s(),
      hardBreakEscape: s(j),
      hardBreakTrailing: s(j),
      htmlFlow: s(H),
      htmlFlowData: v,
      htmlText: s(F),
      htmlTextData: v,
      image: s(ne),
      label: Se,
      labelText: re,
      lineEnding: R,
      link: s(K),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: ce,
      resourceDestinationString: x,
      resourceTitleString: ge,
      resource: Te,
      setextHeading: s(O),
      setextHeadingLineSequence: B,
      setextHeadingText: k,
      strong: s(),
      thematicBreak: s()
    }
  };
  Xl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let $ = {
      type: "root",
      children: []
    };
    const _ = {
      stack: [$],
      tokenStack: [],
      config: t,
      enter: a,
      exit: u,
      buffer: o,
      resume: c,
      data: n
    }, U = [];
    let Y = -1;
    for (; ++Y < T.length; )
      if (T[Y][1].type === "listOrdered" || T[Y][1].type === "listUnordered")
        if (T[Y][0] === "enter")
          U.push(Y);
        else {
          const xe = U.pop();
          Y = i(T, xe, Y);
        }
    for (Y = -1; ++Y < T.length; ) {
      const xe = t[T[Y][0]];
      Gl.call(xe, T[Y][1].type) && xe[T[Y][1].type].call(Object.assign({
        sliceSerialize: T[Y][2].sliceSerialize
      }, _), T[Y][1]);
    }
    if (_.tokenStack.length > 0) {
      const xe = _.tokenStack[_.tokenStack.length - 1];
      (xe[1] || ui).call(_, void 0, xe[0]);
    }
    for ($.position = {
      start: Ue(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Ue(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Y = -1; ++Y < t.transforms.length; )
      $ = t.transforms[Y]($) || $;
    return $;
  }
  function i(T, $, _) {
    let U = $ - 1, Y = -1, xe = !1, $e, Pe, Ge, Xe;
    for (; ++U <= _; ) {
      const pe = T[U];
      switch (pe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          pe[0] === "enter" ? Y++ : Y--, Xe = void 0;
          break;
        }
        case "lineEndingBlank": {
          pe[0] === "enter" && ($e && !Xe && !Y && !Ge && (Ge = U), Xe = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Xe = void 0;
      }
      if (!Y && pe[0] === "enter" && pe[1].type === "listItemPrefix" || Y === -1 && pe[0] === "exit" && (pe[1].type === "listUnordered" || pe[1].type === "listOrdered")) {
        if ($e) {
          let qe = U;
          for (Pe = void 0; qe--; ) {
            const Ie = T[qe];
            if (Ie[1].type === "lineEnding" || Ie[1].type === "lineEndingBlank") {
              if (Ie[0] === "exit") continue;
              Pe && (T[Pe][1].type = "lineEndingBlank", xe = !0), Ie[1].type = "lineEnding", Pe = qe;
            } else if (!(Ie[1].type === "linePrefix" || Ie[1].type === "blockQuotePrefix" || Ie[1].type === "blockQuotePrefixWhitespace" || Ie[1].type === "blockQuoteMarker" || Ie[1].type === "listItemIndent")) break;
          }
          Ge && (!Pe || Ge < Pe) && ($e._spread = !0), $e.end = Object.assign({}, Pe ? T[Pe][1].start : pe[1].end), T.splice(Pe || U, 0, ["exit", $e, pe[2]]), U++, _++;
        }
        if (pe[1].type === "listItemPrefix") {
          const qe = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, pe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          $e = qe, T.splice(U, 0, ["enter", qe, pe[2]]), U++, _++, Ge = void 0, Xe = !0;
        }
      }
    }
    return T[$][1]._spread = xe, _;
  }
  function l(T, $) {
    return _;
    function _(U) {
      a.call(this, T(U), U), $ && $.call(this, U);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(T, $, _) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([$, _ || void 0]), T.position = {
      start: Ue($.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(T) {
    return $;
    function $(_) {
      T && T.call(this, _), u.call(this, _);
    }
  }
  function u(T, $) {
    const _ = this.stack.pop(), U = this.tokenStack.pop();
    if (U)
      U[0].type !== T.type && ($ ? $.call(this, T, U[0]) : (U[1] || ui).call(this, T, U[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + yt({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    _.position.end = Ue(T.end);
  }
  function c() {
    return gr(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(T) {
    if (this.data.expectingFirstListItemValue) {
      const $ = this.stack[this.stack.length - 2];
      $.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.lang = T;
  }
  function m() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.meta = T;
  }
  function y() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function w() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function g() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function C(T) {
    const $ = this.resume(), _ = this.stack[this.stack.length - 1];
    _.label = $, _.identifier = De(this.sliceSerialize(T)).toLowerCase();
  }
  function S() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.title = T;
  }
  function A() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.url = T;
  }
  function I(T) {
    const $ = this.stack[this.stack.length - 1];
    if (!$.depth) {
      const _ = this.sliceSerialize(T).length;
      $.depth = _;
    }
  }
  function k() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function B(T) {
    const $ = this.stack[this.stack.length - 1];
    $.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function O() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function N(T) {
    const _ = this.stack[this.stack.length - 1].children;
    let U = _[_.length - 1];
    (!U || U.type !== "text") && (U = Bt(), U.position = {
      start: Ue(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, _.push(U)), this.stack.push(U);
  }
  function v(T) {
    const $ = this.stack.pop();
    $.value += this.sliceSerialize(T), $.position.end = Ue(T.end);
  }
  function R(T) {
    const $ = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const _ = $.children[$.children.length - 1];
      _.position.end = Ue(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes($.type) && (N.call(this, T), v.call(this, T));
  }
  function j() {
    this.data.atHardBreak = !0;
  }
  function H() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = T;
  }
  function F() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = T;
  }
  function L() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.value = T;
  }
  function K() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const $ = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = $, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function ne() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const $ = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = $, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function re(T) {
    const $ = this.sliceSerialize(T), _ = this.stack[this.stack.length - 2];
    _.label = Gf($), _.identifier = De($).toLowerCase();
  }
  function Se() {
    const T = this.stack[this.stack.length - 1], $ = this.resume(), _ = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, _.type === "link") {
      const U = T.children;
      _.children = U;
    } else
      _.alt = $;
  }
  function x() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.url = T;
  }
  function ge() {
    const T = this.resume(), $ = this.stack[this.stack.length - 1];
    $.title = T;
  }
  function Te() {
    this.data.inReference = void 0;
  }
  function b() {
    this.data.referenceType = "collapsed";
  }
  function ce(T) {
    const $ = this.resume(), _ = this.stack[this.stack.length - 1];
    _.label = $, _.identifier = De(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function Le(T) {
    this.data.characterReferenceType = T.type;
  }
  function ae(T) {
    const $ = this.sliceSerialize(T), _ = this.data.characterReferenceType;
    let U;
    _ ? (U = Ol($, _ === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : U = xr($);
    const Y = this.stack[this.stack.length - 1];
    Y.value += U;
  }
  function je(T) {
    const $ = this.stack.pop();
    $.position.end = Ue(T.end);
  }
  function ie(T) {
    v.call(this, T);
    const $ = this.stack[this.stack.length - 1];
    $.url = this.sliceSerialize(T);
  }
  function Ee(T) {
    v.call(this, T);
    const $ = this.stack[this.stack.length - 1];
    $.url = "mailto:" + this.sliceSerialize(T);
  }
  function Ne() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function He() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function sn() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function un() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function cn() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function tt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Mt() {
    return {
      type: "break"
    };
  }
  function Rt() {
    return {
      type: "html",
      value: ""
    };
  }
  function dn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ft() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function jt(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function fn(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function hn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function pn() {
    return {
      type: "strong",
      children: []
    };
  }
  function Bt() {
    return {
      type: "text",
      value: ""
    };
  }
  function mn() {
    return {
      type: "thematicBreak"
    };
  }
}
function Ue(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Xl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Xl(e, r) : Jf(e, r);
  }
}
function Jf(e, t) {
  let n;
  for (n in t)
    if (Gl.call(t, n))
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
function ui(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + yt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + yt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + yt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function eh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Yf(r, {
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
function th(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function nh(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function rh(e, t) {
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
function ih(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function lh(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function oh(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = dt(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
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
function ah(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function sh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Yl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function uh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Yl(e, t);
  const i = { src: dt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function ch(e, t) {
  const n = { src: dt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function dh(e, t) {
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
function fh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Yl(e, t);
  const i = { href: dt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function hh(e, t) {
  const n = { href: dt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ph(e, t, n) {
  const r = e.all(t), i = n ? mh(n) : Ql(t), l = {}, o = [];
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
function mh(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Ql(n[r]);
  }
  return t;
}
function Ql(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function gh(e, t) {
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
function xh(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function bh(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function yh(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function kh(e, t) {
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
    }, a = fr(t.children[1]), s = Dl(t.children[t.children.length - 1]);
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
function wh(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const d = t.children[s], h = {}, f = o ? o[s] : void 0;
    f && (h.align = f);
    let m = { type: "element", tagName: l, properties: h, children: [] };
    d && (m.children = e.all(d), e.patch(d, m), m = e.applyData(d, m)), u.push(m);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Ch(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ci = 9, di = 32;
function vh(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      fi(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(fi(t.slice(i), i > 0, !1)), l.join("");
}
function fi(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === ci || l === di; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === ci || l === di; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Sh(e, t) {
  const n = { type: "text", value: vh(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Th(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Eh = {
  blockquote: th,
  break: nh,
  code: rh,
  delete: ih,
  emphasis: lh,
  footnoteReference: oh,
  heading: ah,
  html: sh,
  imageReference: uh,
  image: ch,
  inlineCode: dh,
  linkReference: fh,
  link: hh,
  listItem: ph,
  list: gh,
  paragraph: xh,
  // @ts-expect-error: root is different, but hard to type.
  root: bh,
  strong: yh,
  table: kh,
  tableCell: Ch,
  tableRow: wh,
  text: Sh,
  thematicBreak: Th,
  toml: Nt,
  yaml: Nt,
  definition: Nt,
  footnoteDefinition: Nt
};
function Nt() {
}
const Jl = -1, ln = 0, wt = 1, Jt = 2, yr = 3, kr = 4, wr = 5, Cr = 6, eo = 7, to = 8, hi = typeof self == "object" ? self : globalThis, Ph = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case ln:
      case Jl:
        return n(o, i);
      case wt: {
        const a = n([], i);
        for (const s of o)
          a.push(r(s));
        return a;
      }
      case Jt: {
        const a = n({}, i);
        for (const [s, u] of o)
          a[r(s)] = r(u);
        return a;
      }
      case yr:
        return n(new Date(o), i);
      case kr: {
        const { source: a, flags: s } = o;
        return n(new RegExp(a, s), i);
      }
      case wr: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of o)
          a.set(r(s), r(u));
        return a;
      }
      case Cr: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const s of o)
          a.add(r(s));
        return a;
      }
      case eo: {
        const { name: a, message: s } = o;
        return n(new hi[a](s), i);
      }
      case to:
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
    return n(new hi[l](o), i);
  };
  return r;
}, pi = (e) => Ph(/* @__PURE__ */ new Map(), e)(0), it = "", { toString: Ih } = {}, { keys: Ah } = Object, xt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [ln, t];
  const n = Ih.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [wt, it];
    case "Object":
      return [Jt, it];
    case "Date":
      return [yr, it];
    case "RegExp":
      return [kr, it];
    case "Map":
      return [wr, it];
    case "Set":
      return [Cr, it];
    case "DataView":
      return [wt, n];
  }
  return n.includes("Array") ? [wt, n] : n.includes("Error") ? [eo, n] : [Jt, n];
}, Ht = ([e, t]) => e === ln && (t === "function" || t === "symbol"), Dh = (e, t, n, r) => {
  const i = (o, a) => {
    const s = r.push(o) - 1;
    return n.set(a, s), s;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, s] = xt(o);
    switch (a) {
      case ln: {
        let c = o;
        switch (s) {
          case "bigint":
            a = to, c = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            c = null;
            break;
          case "undefined":
            return i([Jl], o);
        }
        return i([a, c], o);
      }
      case wt: {
        if (s) {
          let h = o;
          return s === "DataView" ? h = new Uint8Array(o.buffer) : s === "ArrayBuffer" && (h = new Uint8Array(o)), i([s, [...h]], o);
        }
        const c = [], d = i([a, c], o);
        for (const h of o)
          c.push(l(h));
        return d;
      }
      case Jt: {
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
        for (const h of Ah(o))
          (e || !Ht(xt(o[h]))) && c.push([l(h), l(o[h])]);
        return d;
      }
      case yr:
        return i([a, o.toISOString()], o);
      case kr: {
        const { source: c, flags: d } = o;
        return i([a, { source: c, flags: d }], o);
      }
      case wr: {
        const c = [], d = i([a, c], o);
        for (const [h, f] of o)
          (e || !(Ht(xt(h)) || Ht(xt(f)))) && c.push([l(h), l(f)]);
        return d;
      }
      case Cr: {
        const c = [], d = i([a, c], o);
        for (const h of o)
          (e || !Ht(xt(h))) && c.push(l(h));
        return d;
      }
    }
    const { message: u } = o;
    return i([a, { name: s, message: u }], o);
  };
  return l;
}, mi = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Dh(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, St = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? pi(mi(e, t)) : structuredClone(e)
) : (e, t) => pi(mi(e, t));
function Lh(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function $h(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Mh(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Lh, r = e.options.footnoteBackLabel || $h, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const c = e.all(u), d = String(u.identifier).toUpperCase(), h = dt(d.toLowerCase());
    let f = 0;
    const m = [], y = e.footnoteCounts.get(d);
    for (; y !== void 0 && ++f <= y; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let C = typeof n == "string" ? n : n(s, f);
      typeof C == "string" && (C = { type: "text", value: C }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(s, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(C) ? C : [C]
      });
    }
    const w = c[c.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const C = w.children[w.children.length - 1];
      C && C.type === "text" ? C.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...m);
    } else
      c.push(...m);
    const g = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(c, !0)
    };
    e.patch(u, g), a.push(g);
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
            ...St(o),
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
const on = (
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
      return Bh;
    if (typeof e == "function")
      return an(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Rh(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Fh(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return jh(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Rh(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = on(e[n]);
  return an(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function Fh(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return an(n);
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
function jh(e) {
  return an(t);
  function t(n) {
    return n && n.type === e;
  }
}
function an(e) {
  return t;
  function t(n, r, i) {
    return !!(zh(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Bh() {
  return !0;
}
function zh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const no = [], Oh = !0, Xn = !1, _h = "skip";
function ro(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = on(i), o = r ? -1 : 1;
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
      let f = no, m, y, w;
      if ((!t || l(s, u, c[c.length - 1] || void 0)) && (f = Vh(n(s, c)), f[0] === Xn))
        return f;
      if ("children" in s && s.children) {
        const g = (
          /** @type {UnistParent} */
          s
        );
        if (g.children && f[0] !== _h)
          for (y = (r ? g.children.length : -1) + o, w = c.concat(g); y > -1 && y < g.children.length; ) {
            const C = g.children[y];
            if (m = a(C, y, w)(), m[0] === Xn)
              return m;
            y = typeof m[1] == "number" ? m[1] : y + o;
          }
      }
      return f;
    }
  }
}
function Vh(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Oh, e] : e == null ? no : [e];
}
function vr(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), ro(e, l, a, i);
  function a(s, u) {
    const c = u[u.length - 1], d = c ? c.children.indexOf(s) : void 0;
    return o(s, d, c);
  }
}
const Yn = {}.hasOwnProperty, Nh = {};
function Hh(e, t) {
  const n = t || Nh, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Eh, ...n.handlers }, a = {
    all: u,
    applyData: Uh,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: s,
    options: n,
    patch: qh,
    wrap: Kh
  };
  return vr(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const d = c.type === "definition" ? r : i, h = String(c.identifier).toUpperCase();
      d.has(h) || d.set(h, c);
    }
  }), a;
  function s(c, d) {
    const h = c.type, f = a.handlers[h];
    if (Yn.call(a.handlers, h) && f)
      return f(a, c, d);
    if (a.options.passThrough && a.options.passThrough.includes(h)) {
      if ("children" in c) {
        const { children: y, ...w } = c, g = St(w);
        return g.children = a.all(c), g;
      }
      return St(c);
    }
    return (a.options.unknownHandler || Wh)(a, c, d);
  }
  function u(c) {
    const d = [];
    if ("children" in c) {
      const h = c.children;
      let f = -1;
      for (; ++f < h.length; ) {
        const m = a.one(h[f], c);
        if (m) {
          if (f && h[f - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = gi(m.value)), !Array.isArray(m) && m.type === "element")) {
            const y = m.children[0];
            y && y.type === "text" && (y.value = gi(y.value));
          }
          Array.isArray(m) ? d.push(...m) : d.push(m);
        }
      }
    }
    return d;
  }
}
function qh(e, t) {
  e.position && (t.position = $l(e));
}
function Uh(e, t) {
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
    n.type === "element" && l && Object.assign(n.properties, St(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Wh(e, t) {
  const n = t.data || {}, r = "value" in t && !(Yn.call(n, "hProperties") || Yn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Kh(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function gi(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function xi(e, t) {
  const n = Hh(e, t), r = n.one(e, void 0), i = Mh(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Zh(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      xi(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      xi(n, { file: r, ...e || t })
    );
  };
}
function bi(e) {
  if (e)
    throw e;
}
var Pn, yi;
function Gh() {
  if (yi) return Pn;
  yi = 1;
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
  return Pn = function s() {
    var u, c, d, h, f, m, y = arguments[0], w = 1, g = arguments.length, C = !1;
    for (typeof y == "boolean" && (C = y, y = arguments[1] || {}, w = 2), (y == null || typeof y != "object" && typeof y != "function") && (y = {}); w < g; ++w)
      if (u = arguments[w], u != null)
        for (c in u)
          d = a(y, c), h = a(u, c), y !== h && (C && h && (l(h) || (f = i(h))) ? (f ? (f = !1, m = d && i(d) ? d : []) : m = d && l(d) ? d : {}, o(y, { name: c, newValue: s(C, m, h) })) : typeof h < "u" && o(y, { name: c, newValue: h }));
    return y;
  }, Pn;
}
var Xh = Gh();
const In = /* @__PURE__ */ Qi(Xh);
function Qn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Yh() {
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
      i = u, c ? Qh(c, a)(...u) : o(null, ...u);
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
function Qh(e, t) {
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
const Me = { basename: Jh, dirname: ep, extname: tp, join: np, sep: "/" };
function Jh(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Lt(e);
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
function ep(e) {
  if (Lt(e), e.length === 0)
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
function tp(e) {
  Lt(e);
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
function np(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Lt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : rp(n);
}
function rp(e) {
  Lt(e);
  const t = e.codePointAt(0) === 47;
  let n = ip(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function ip(e, t) {
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
function Lt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const lp = { cwd: op };
function op() {
  return "/";
}
function Jn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function ap(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Jn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return sp(e);
}
function sp(e) {
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
const An = (
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
class io {
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
    t ? Jn(t) ? n = { path: t } : typeof t == "string" || up(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : lp.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < An.length; ) {
      const l = An[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      An.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Me.basename(this.path) : void 0;
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
    Ln(t, "basename"), Dn(t, "basename"), this.path = Me.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Me.dirname(this.path) : void 0;
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
    ki(this.basename, "dirname"), this.path = Me.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Me.extname(this.path) : void 0;
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
    if (Dn(t, "extname"), ki(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Me.join(this.dirname, this.stem + (t || ""));
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
    Jn(t) && (t = ap(t)), Ln(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Me.basename(this.path, this.extname) : void 0;
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
    Ln(t, "stem"), Dn(t, "stem"), this.path = Me.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new he(
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
function Dn(e, t) {
  if (e && e.includes(Me.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Me.sep + "`"
    );
}
function Ln(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function ki(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function up(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const cp = (
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
), dp = {}.hasOwnProperty;
class Sr extends cp {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Yh();
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
      new Sr()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(In(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Rn("data", this.frozen), this.namespace[t] = n, this) : dp.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Rn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = qt(t), r = this.parser || this.Parser;
    return $n("parse", r), r(String(n), n);
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
    return this.freeze(), $n("process", this.parser || this.Parser), Mn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = qt(t), s = (
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
        ), m = r.stringify(f, h);
        pp(m) ? h.value = m : h.result = m, u(
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
    return this.freeze(), $n("processSync", this.parser || this.Parser), Mn("processSync", this.compiler || this.Compiler), this.process(t, i), Ci("processSync", "process", n), r;
    function i(l, o) {
      n = !0, bi(l), r = o;
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
    wi(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const s = qt(n);
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
    return this.run(t, n, l), Ci("runSync", "run", r), i;
    function l(o, a) {
      bi(o), i = a, r = !0;
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
    const r = qt(n), i = this.compiler || this.Compiler;
    return Mn("stringify", i), wi(t), i(t, r);
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
    if (Rn("use", this.frozen), t != null) if (typeof t == "function")
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
      a(u.plugins), u.settings && (i.settings = In(!0, i.settings, u.settings));
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
        let [f, ...m] = c;
        const y = r[h][1];
        Qn(y) && Qn(f) && (f = In(!0, y, f)), r[h] = [u, f, ...m];
      }
    }
  }
}
const fp = new Sr().freeze();
function $n(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Mn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Rn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function wi(e) {
  if (!Qn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ci(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function qt(e) {
  return hp(e) ? e : new io(e);
}
function hp(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function pp(e) {
  return typeof e == "string" || mp(e);
}
function mp(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const gp = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", vi = [], Si = { allowDangerousHtml: !0 }, xp = /^(https?|ircs?|mailto|xmpp)$/i, bp = [
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
function yp(e) {
  const t = kp(e), n = wp(e);
  return Cp(t.runSync(t.parse(n), n), e);
}
function kp(e) {
  const t = e.rehypePlugins || vi, n = e.remarkPlugins || vi, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Si } : Si;
  return fp().use(eh).use(n).use(Zh, r).use(t);
}
function wp(e) {
  const t = e.children || "", n = new io();
  return typeof t == "string" && (n.value = t), n;
}
function Cp(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, s = t.urlTransform || vp;
  for (const c of bp)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + gp + c.id, void 0);
  return vr(e, u), jc(e, {
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
      for (f in Sn)
        if (Object.hasOwn(Sn, f) && Object.hasOwn(c.properties, f)) {
          const m = c.properties[f], y = Sn[f];
          (y === null || y.includes(c.tagName)) && (c.properties[f] = s(String(m || ""), f, c));
        }
    }
    if (c.type === "element") {
      let f = n ? !n.includes(c.tagName) : l ? l.includes(c.tagName) : !1;
      if (!f && r && typeof d == "number" && (f = !r(c, d, h)), f && h && typeof d == "number")
        return a && c.children ? h.children.splice(d, 1, ...c.children) : h.children.splice(d, 1), d;
    }
  }
}
function vp(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    xp.test(e.slice(0, t)) ? e : ""
  );
}
const Ye = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], Ti = {
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
      ...Ye,
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
    dl: [...Ye],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [...Ye, "longDesc", "src"],
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
    ol: [...Ye, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [...Ye],
    table: [...Ye],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...Ye, ["className", "contains-task-list"]],
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
}, We = {}.hasOwnProperty;
function Sp(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...Ti, ...t } : Ti,
    stack: []
  }, i = lo(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function lo(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Tp(e, n);
      case "doctype":
        return Ep(e, n);
      case "element":
        return Pp(e, n);
      case "root":
        return Ip(e, n);
      case "text":
        return Ap(e, n);
    }
  }
}
function Tp(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return $t(l, t), l;
  }
}
function Ep(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return $t(n, t), n;
  }
}
function Pp(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    oo(e, t.children)
  ), i = Dp(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && We.call(e.schema.ancestors, n))) {
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
  return $t(o, t), o;
}
function Ip(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    oo(e, t.children)
  ) };
  return $t(r, t), r;
}
function Ap(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return $t(r, t), r;
}
function oo(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = lo(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function Dp(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && We.call(r, n) ? r[n] : void 0, o = r && We.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), s = {};
  let u;
  for (u in a)
    if (We.call(a, u)) {
      const c = a[u];
      let d = Ei(
        e,
        Pi(l, u),
        u,
        c
      );
      d == null && (d = Ei(e, Pi(o, u), u, c)), d != null && (s[u] = d);
    }
  if (i && We.call(i, n)) {
    const c = i[n];
    for (u in c)
      We.call(c, u) && !We.call(s, u) && (s[u] = c[u]);
  }
  return s;
}
function Ei(e, t, n, r) {
  return t ? Array.isArray(r) ? Lp(e, t, n, r) : ao(e, t, n, r) : void 0;
}
function Lp(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = ao(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function ao(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && $p(e, n, r)) {
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
function $p(e, t, n) {
  const r = e.schema.protocols && We.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
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
function $t(e, t) {
  const n = $l(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = St(t.data)), n && (e.position = n);
}
function Pi(e, t) {
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
function Mp(e) {
  return function(t) {
    return (
      /** @type {Root} */
      Sp(t, e)
    );
  };
}
function Ii(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Rp(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Fp(e, t, n) {
  const i = on((n || {}).ignore || []), l = jp(t);
  let o = -1;
  for (; ++o < l.length; )
    ro(e, "text", a);
  function a(u, c) {
    let d = -1, h;
    for (; ++d < c.length; ) {
      const f = c[d], m = h ? h.children : void 0;
      if (i(
        f,
        m ? m.indexOf(f) : void 0,
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
    let m = 0;
    const w = d.children.indexOf(u);
    let g = !1, C = [];
    h.lastIndex = 0;
    let S = h.exec(u.value);
    for (; S; ) {
      const A = S.index, I = {
        index: S.index,
        input: S.input,
        stack: [...c, u]
      };
      let k = f(...S, I);
      if (typeof k == "string" && (k = k.length > 0 ? { type: "text", value: k } : void 0), k === !1 ? h.lastIndex = A + 1 : (m !== A && C.push({
        type: "text",
        value: u.value.slice(m, A)
      }), Array.isArray(k) ? C.push(...k) : k && C.push(k), m = A + S[0].length, g = !0), !h.global)
        break;
      S = h.exec(u.value);
    }
    return g ? (m < u.value.length && C.push({ type: "text", value: u.value.slice(m) }), d.children.splice(w, 1, ...C)) : C = [u], w + C.length;
  }
}
function jp(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Bp(i[0]), zp(i[1])]);
  }
  return t;
}
function Bp(e) {
  return typeof e == "string" ? new RegExp(Rp(e), "g") : e;
}
function zp(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Fn = "phrasing", jn = ["autolink", "link", "image", "label"];
function Op() {
  return {
    transforms: [Wp],
    enter: {
      literalAutolink: Vp,
      literalAutolinkEmail: Bn,
      literalAutolinkHttp: Bn,
      literalAutolinkWww: Bn
    },
    exit: {
      literalAutolink: Up,
      literalAutolinkEmail: qp,
      literalAutolinkHttp: Np,
      literalAutolinkWww: Hp
    }
  };
}
function _p() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Fn,
        notInConstruct: jn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Fn,
        notInConstruct: jn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Fn,
        notInConstruct: jn
      }
    ]
  };
}
function Vp(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Bn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Np(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Hp(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function qp(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Up(e) {
  this.exit(e);
}
function Wp(e) {
  Fp(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Kp],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Zp]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Kp(e, t, n, r, i) {
  let l = "";
  if (!so(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !Gp(n)))
    return !1;
  const o = Xp(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function Zp(e, t, n, r) {
  return (
    // Not an expected previous character.
    !so(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Gp(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Xp(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Ii(e, "(");
  let l = Ii(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function so(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Je(n) || nn(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
uo.peek = l1;
function Yp() {
  this.buffer();
}
function Qp(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Jp() {
  this.buffer();
}
function e1(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function t1(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = De(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function n1(e) {
  this.exit(e);
}
function r1(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = De(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function i1(e) {
  this.exit(e);
}
function l1() {
  return "[";
}
function uo(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function o1() {
  return {
    enter: {
      gfmFootnoteCallString: Yp,
      gfmFootnoteCall: Qp,
      gfmFootnoteDefinitionLabelString: Jp,
      gfmFootnoteDefinition: e1
    },
    exit: {
      gfmFootnoteCallString: t1,
      gfmFootnoteCall: n1,
      gfmFootnoteDefinitionLabelString: r1,
      gfmFootnoteDefinition: i1
    }
  };
}
function a1(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: uo },
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
        t ? co : s1
      )
    )), u(), s;
  }
}
function s1(e, t, n) {
  return t === 0 ? e : co(e, t, n);
}
function co(e, t, n) {
  return (n ? "" : "    ") + e;
}
const u1 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
fo.peek = p1;
function c1() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: f1 },
    exit: { strikethrough: h1 }
  };
}
function d1() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: u1
      }
    ],
    handlers: { delete: fo }
  };
}
function f1(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function h1(e) {
  this.exit(e);
}
function fo(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function p1() {
  return "~";
}
function m1(e) {
  return e.length;
}
function g1(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || m1, l = [], o = [], a = [], s = [];
  let u = 0, c = -1;
  for (; ++c < e.length; ) {
    const y = [], w = [];
    let g = -1;
    for (e[c].length > u && (u = e[c].length); ++g < e[c].length; ) {
      const C = x1(e[c][g]);
      if (n.alignDelimiters !== !1) {
        const S = i(C);
        w[g] = S, (s[g] === void 0 || S > s[g]) && (s[g] = S);
      }
      y.push(C);
    }
    o[c] = y, a[c] = w;
  }
  let d = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++d < u; )
      l[d] = Ai(r[d]);
  else {
    const y = Ai(r);
    for (; ++d < u; )
      l[d] = y;
  }
  d = -1;
  const h = [], f = [];
  for (; ++d < u; ) {
    const y = l[d];
    let w = "", g = "";
    y === 99 ? (w = ":", g = ":") : y === 108 ? w = ":" : y === 114 && (g = ":");
    let C = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[d] - w.length - g.length
    );
    const S = w + "-".repeat(C) + g;
    n.alignDelimiters !== !1 && (C = w.length + C + g.length, C > s[d] && (s[d] = C), f[d] = C), h[d] = S;
  }
  o.splice(1, 0, h), a.splice(1, 0, f), c = -1;
  const m = [];
  for (; ++c < o.length; ) {
    const y = o[c], w = a[c];
    d = -1;
    const g = [];
    for (; ++d < u; ) {
      const C = y[d] || "";
      let S = "", A = "";
      if (n.alignDelimiters !== !1) {
        const I = s[d] - (w[d] || 0), k = l[d];
        k === 114 ? S = " ".repeat(I) : k === 99 ? I % 2 ? (S = " ".repeat(I / 2 + 0.5), A = " ".repeat(I / 2 - 0.5)) : (S = " ".repeat(I / 2), A = S) : A = " ".repeat(I);
      }
      n.delimiterStart !== !1 && !d && g.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && C === "") && (n.delimiterStart !== !1 || d) && g.push(" "), n.alignDelimiters !== !1 && g.push(S), g.push(C), n.alignDelimiters !== !1 && g.push(A), n.padding !== !1 && g.push(" "), (n.delimiterEnd !== !1 || d !== u - 1) && g.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? g.join("").replace(/ +$/, "") : g.join("")
    );
  }
  return m.join(`
`);
}
function x1(e) {
  return e == null ? "" : String(e);
}
function Ai(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function b1(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    y1
  );
  return i(), o;
}
function y1(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function k1(e, t) {
  return Di(e, t.inConstruct, !0) && !Di(e, t.notInConstruct, !1);
}
function Di(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Li(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && k1(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function w1(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function C1(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function v1(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function S1(e, t, n, r) {
  const i = v1(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (C1(e, n)) {
    const d = n.enter("codeIndented"), h = n.indentLines(l, T1);
    return d(), h;
  }
  const a = n.createTracker(r), s = i.repeat(Math.max(w1(l, i) + 1, 3)), u = n.enter("codeFenced");
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
function T1(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Tr(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function E1(e, t, n, r) {
  const i = Tr(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
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
function P1(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function Tt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function en(e, t, n) {
  const r = ut(e), i = ut(t);
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
ho.peek = I1;
function ho(e, t, n, r) {
  const i = P1(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = en(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = Tt(u) + s.slice(1));
  const d = s.charCodeAt(s.length - 1), h = en(r.after.charCodeAt(0), d, i);
  h.inside && (s = s.slice(0, -1) + Tt(d));
  const f = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: c.outside
  }, a + s + f;
}
function I1(e, t, n) {
  return n.options.emphasis || "*";
}
function A1(e, t) {
  let n = !1;
  return vr(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, Xn;
  }), !!((!e.depth || e.depth < 3) && gr(e) && (t.options.setext || n));
}
function D1(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (A1(e, n)) {
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
  return /^[\t ]/.test(u) && (u = Tt(u.charCodeAt(0)) + u.slice(1)), u = u ? o + " " + u : o, n.options.closeAtx && (u += " " + o), s(), a(), u;
}
po.peek = L1;
function po(e) {
  return e.value || "";
}
function L1() {
  return "<";
}
mo.peek = $1;
function mo(e, t, n, r) {
  const i = Tr(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
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
function $1() {
  return "!";
}
go.peek = M1;
function go(e, t, n, r) {
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
function M1() {
  return "!";
}
xo.peek = R1;
function xo(e, t, n) {
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
function R1() {
  return "`";
}
function bo(e, t) {
  const n = gr(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
yo.peek = F1;
function yo(e, t, n, r) {
  const i = Tr(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, s;
  if (bo(e, n)) {
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
function F1(e, t, n) {
  return bo(e, n) ? "<" : "[";
}
ko.peek = j1;
function ko(e, t, n, r) {
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
function j1() {
  return "[";
}
function Er(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function B1(e) {
  const t = Er(e), n = e.options.bulletOther;
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
function z1(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function wo(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function O1(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? z1(n) : Er(n);
  const a = e.ordered ? o === "." ? ")" : "." : B1(n);
  let s = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const c = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      c && (!c.children || !c.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), wo(n) === o && c
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
function _1(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function V1(e, t, n, r) {
  const i = _1(n);
  let l = n.bulletCurrent || Er(n);
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
function N1(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const H1 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  on([
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
function q1(e, t, n, r) {
  return (e.children.some(function(o) {
    return H1(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function U1(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Co.peek = W1;
function Co(e, t, n, r) {
  const i = U1(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), c = en(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  c.inside && (s = Tt(u) + s.slice(1));
  const d = s.charCodeAt(s.length - 1), h = en(r.after.charCodeAt(0), d, i);
  h.inside && (s = s.slice(0, -1) + Tt(d));
  const f = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: c.outside
  }, a + s + f;
}
function W1(e, t, n) {
  return n.options.strong || "*";
}
function K1(e, t, n, r) {
  return n.safe(e.value, r);
}
function Z1(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function G1(e, t, n) {
  const r = (wo(n) + (n.options.ruleSpaces ? " " : "")).repeat(Z1(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const vo = {
  blockquote: b1,
  break: Li,
  code: S1,
  definition: E1,
  emphasis: ho,
  hardBreak: Li,
  heading: D1,
  html: po,
  image: mo,
  imageReference: go,
  inlineCode: xo,
  link: yo,
  linkReference: ko,
  list: O1,
  listItem: V1,
  paragraph: N1,
  root: q1,
  strong: Co,
  text: K1,
  thematicBreak: G1
};
function X1() {
  return {
    enter: {
      table: Y1,
      tableData: $i,
      tableHeader: $i,
      tableRow: J1
    },
    exit: {
      codeText: em,
      table: Q1,
      tableData: zn,
      tableHeader: zn,
      tableRow: zn
    }
  };
}
function Y1(e) {
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
function Q1(e) {
  this.exit(e), this.data.inTable = void 0;
}
function J1(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function zn(e) {
  this.exit(e);
}
function $i(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function em(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, tm));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function tm(e, t) {
  return t === "|" ? t : e;
}
function nm(e) {
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
  function o(f, m, y, w) {
    return u(c(f, y, w), f.align);
  }
  function a(f, m, y, w) {
    const g = d(f, y, w), C = u([g]);
    return C.slice(0, C.indexOf(`
`));
  }
  function s(f, m, y, w) {
    const g = y.enter("tableCell"), C = y.enter("phrasing"), S = y.containerPhrasing(f, {
      ...w,
      before: l,
      after: l
    });
    return C(), g(), S;
  }
  function u(f, m) {
    return g1(f, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function c(f, m, y) {
    const w = f.children;
    let g = -1;
    const C = [], S = m.enter("table");
    for (; ++g < w.length; )
      C[g] = d(w[g], m, y);
    return S(), C;
  }
  function d(f, m, y) {
    const w = f.children;
    let g = -1;
    const C = [], S = m.enter("tableRow");
    for (; ++g < w.length; )
      C[g] = s(w[g], f, m, y);
    return S(), C;
  }
  function h(f, m, y) {
    let w = vo.inlineCode(f, m, y);
    return y.stack.includes("tableCell") && (w = w.replace(/\|/g, "\\$&")), w;
  }
}
function rm() {
  return {
    exit: {
      taskListCheckValueChecked: Mi,
      taskListCheckValueUnchecked: Mi,
      paragraph: lm
    }
  };
}
function im() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: om }
  };
}
function Mi(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function lm(e) {
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
function om(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let s = vo.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(c) {
    return c + o;
  }
}
function am() {
  return [
    Op(),
    o1(),
    c1(),
    X1(),
    rm()
  ];
}
function sm(e) {
  return {
    extensions: [
      _p(),
      a1(e),
      d1(),
      nm(e),
      im()
    ]
  };
}
const um = {
  tokenize: mm,
  partial: !0
}, So = {
  tokenize: gm,
  partial: !0
}, To = {
  tokenize: xm,
  partial: !0
}, Eo = {
  tokenize: bm,
  partial: !0
}, cm = {
  tokenize: ym,
  partial: !0
}, Po = {
  name: "wwwAutolink",
  tokenize: hm,
  previous: Ao
}, Io = {
  name: "protocolAutolink",
  tokenize: pm,
  previous: Do
}, Ve = {
  name: "emailAutolink",
  tokenize: fm,
  previous: Lo
}, Fe = {};
function dm() {
  return {
    text: Fe
  };
}
let Qe = 48;
for (; Qe < 123; )
  Fe[Qe] = Ve, Qe++, Qe === 58 ? Qe = 65 : Qe === 91 && (Qe = 97);
Fe[43] = Ve;
Fe[45] = Ve;
Fe[46] = Ve;
Fe[95] = Ve;
Fe[72] = [Ve, Io];
Fe[104] = [Ve, Io];
Fe[87] = [Ve, Po];
Fe[119] = [Ve, Po];
function fm(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(d) {
    return !er(d) || !Lo.call(r, r.previous) || Pr(r.events) ? n(d) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(d));
  }
  function a(d) {
    return er(d) ? (e.consume(d), a) : d === 64 ? (e.consume(d), s) : n(d);
  }
  function s(d) {
    return d === 46 ? e.check(cm, c, u)(d) : d === 45 || d === 95 || fe(d) ? (l = !0, e.consume(d), s) : c(d);
  }
  function u(d) {
    return e.consume(d), i = !0, s;
  }
  function c(d) {
    return l && i && me(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(d)) : n(d);
  }
}
function hm(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !Ao.call(r, r.previous) || Pr(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(um, e.attempt(So, e.attempt(To, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function pm(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(d) {
    return (d === 72 || d === 104) && Do.call(r, r.previous) && !Pr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(d), e.consume(d), a) : n(d);
  }
  function a(d) {
    if (me(d) && i.length < 5)
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
    return d === null || Qt(d) || J(d) || Je(d) || nn(d) ? n(d) : e.attempt(So, e.attempt(To, c), n)(d);
  }
  function c(d) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(d);
  }
}
function mm(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function gm(e, t, n) {
  let r, i, l;
  return o;
  function o(u) {
    return u === 46 || u === 95 ? e.check(Eo, s, a)(u) : u === null || J(u) || Je(u) || u !== 45 && nn(u) ? s(u) : (l = !0, e.consume(u), o);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), o;
  }
  function s(u) {
    return i || r || !l ? n(u) : t(u);
  }
}
function xm(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(Eo, t, l)(o) : o === null || J(o) || Je(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function bm(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || J(a) || Je(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || J(a) || Je(a) ? t(a) : r(a);
  }
  function l(a) {
    return me(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : me(a) ? (e.consume(a), o) : n(a);
  }
}
function ym(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return fe(l) ? n(l) : t(l);
  }
}
function Ao(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || J(e);
}
function Do(e) {
  return !me(e);
}
function Lo(e) {
  return !(e === 47 || er(e));
}
function er(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || fe(e);
}
function Pr(e) {
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
const km = {
  tokenize: Im,
  partial: !0
};
function wm() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Tm,
        continuation: {
          tokenize: Em
        },
        exit: Pm
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Sm
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Cm,
        resolveTo: vm
      }
    }
  };
}
function Cm(e, t, n) {
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
    const u = De(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !l.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function vm(e, t) {
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
function Sm(e, t, n) {
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
      d === null || d === 91 || J(d)
    )
      return n(d);
    if (d === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return i.includes(De(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(d), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(d);
    }
    return J(d) || (o = !0), l++, e.consume(d), d === 92 ? c : u;
  }
  function c(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, u) : u(d);
  }
}
function Tm(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l, o = 0, a;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", c) : n(m);
  }
  function c(m) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      m === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || J(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const y = e.exit("gfmFootnoteDefinitionLabelString");
      return l = De(r.sliceSerialize(y)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return J(m) || (a = !0), o++, e.consume(m), m === 92 ? d : c;
  }
  function d(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), o++, c) : c(m);
  }
  function h(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(l) || i.push(l), Z(e, f, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function f(m) {
    return t(m);
  }
}
function Em(e, t, n) {
  return e.check(Dt, t, e.attempt(km, t, n));
}
function Pm(e) {
  e.exit("gfmFootnoteDefinition");
}
function Im(e, t, n) {
  const r = this;
  return Z(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l);
  }
}
function Am(e) {
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
            f && we(h, h.length, 0, rn(f, o.slice(u + 1, s), a)), we(h, h.length, 0, [["exit", d, a], ["enter", o[s][1], a], ["exit", o[s][1], a], ["exit", c, a]]), we(o, u - 1, s - u + 3, h), s = u + h.length - 2;
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
    function h(m) {
      return u === 126 && c[c.length - 1][1].type !== "characterEscape" ? s(m) : (o.enter("strikethroughSequenceTemporary"), f(m));
    }
    function f(m) {
      const y = ut(u);
      if (m === 126)
        return d > 1 ? s(m) : (o.consume(m), d++, f);
      if (d < 2 && !n) return s(m);
      const w = o.exit("strikethroughSequenceTemporary"), g = ut(m);
      return w._open = !g || g === 2 && !!y, w._close = !y || y === 2 && !!g, a(m);
    }
  }
}
class Dm {
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
    Lm(this, t, n, r);
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
function Lm(e, t, n, r) {
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
function $m(e, t) {
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
function Mm() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Rm,
        resolveAll: Fm
      }
    }
  };
}
function Rm(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(v) {
    let R = r.events.length - 1;
    for (; R > -1; ) {
      const F = r.events[R][1].type;
      if (F === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      F === "linePrefix") R--;
      else break;
    }
    const j = R > -1 ? r.events[R][1].type : null, H = j === "tableHead" || j === "tableRow" ? k : s;
    return H === k && r.parser.lazy[r.now().line] ? n(v) : H(v);
  }
  function s(v) {
    return e.enter("tableHead"), e.enter("tableRow"), u(v);
  }
  function u(v) {
    return v === 124 || (o = !0, l += 1), c(v);
  }
  function c(v) {
    return v === null ? n(v) : V(v) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), f) : n(v) : W(v) ? Z(e, c, "whitespace")(v) : (l += 1, o && (o = !1, i += 1), v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), o = !0, c) : (e.enter("data"), d(v)));
  }
  function d(v) {
    return v === null || v === 124 || J(v) ? (e.exit("data"), c(v)) : (e.consume(v), v === 92 ? h : d);
  }
  function h(v) {
    return v === 92 || v === 124 ? (e.consume(v), d) : d(v);
  }
  function f(v) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(v) : (e.enter("tableDelimiterRow"), o = !1, W(v) ? Z(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(v) : m(v));
  }
  function m(v) {
    return v === 45 || v === 58 ? w(v) : v === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), y) : I(v);
  }
  function y(v) {
    return W(v) ? Z(e, w, "whitespace")(v) : w(v);
  }
  function w(v) {
    return v === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), g) : v === 45 ? (l += 1, g(v)) : v === null || V(v) ? A(v) : I(v);
  }
  function g(v) {
    return v === 45 ? (e.enter("tableDelimiterFiller"), C(v)) : I(v);
  }
  function C(v) {
    return v === 45 ? (e.consume(v), C) : v === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), S) : (e.exit("tableDelimiterFiller"), S(v));
  }
  function S(v) {
    return W(v) ? Z(e, A, "whitespace")(v) : A(v);
  }
  function A(v) {
    return v === 124 ? m(v) : v === null || V(v) ? !o || i !== l ? I(v) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(v)) : I(v);
  }
  function I(v) {
    return n(v);
  }
  function k(v) {
    return e.enter("tableRow"), B(v);
  }
  function B(v) {
    return v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), B) : v === null || V(v) ? (e.exit("tableRow"), t(v)) : W(v) ? Z(e, B, "whitespace")(v) : (e.enter("data"), O(v));
  }
  function O(v) {
    return v === null || v === 124 || J(v) ? (e.exit("data"), B(v)) : (e.consume(v), v === 92 ? N : O);
  }
  function N(v) {
    return v === 92 || v === 124 ? (e.consume(v), O) : O(v);
  }
}
function Fm(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, s = 0, u, c, d;
  const h = new Dm();
  for (; ++n < e.length; ) {
    const f = e[n], m = f[1];
    f[0] === "enter" ? m.type === "tableHead" ? (a = !1, s !== 0 && (Ri(h, t, s, u, c), c = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", u, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, c = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", c, t]])), i = m.type === "tableDelimiterRow" ? 2 : c ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], d = Ut(h, t, l, i, void 0, d), l = [0, 0, 0, 0]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], d = Ut(h, t, l, i, void 0, d)), l = o, o = [l[1], n, 0, 0])) : m.type === "tableHead" ? (a = !0, s = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = n, l[1] !== 0 ? (o[0] = o[1], d = Ut(h, t, l, i, n, d)) : o[1] !== 0 && (d = Ut(h, t, o, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (s !== 0 && Ri(h, t, s, u, c), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = $m(t.events, n));
  }
  return e;
}
function Ut(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, lt(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const s = lt(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const u = lt(t.events, n[2]), c = lt(t.events, n[3]), d = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, c)
    };
    if (e.add(n[2], 0, [["enter", d, t]]), r !== 2) {
      const h = t.events[n[2]], f = t.events[n[3]];
      if (h[1].end = Object.assign({}, f[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, y = n[3] - n[2] - 1;
        e.add(m, y, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", d, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, lt(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function Ri(e, t, n, r, i) {
  const l = [], o = lt(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function lt(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const jm = {
  name: "tasklistCheck",
  tokenize: zm
};
function Bm() {
  return {
    text: {
      91: jm
    }
  };
}
function zm(e, t, n) {
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
    return J(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), o) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), o) : n(s);
  }
  function o(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return V(s) ? t(s) : W(s) ? e.check({
      tokenize: Om
    }, t, n)(s) : n(s);
  }
}
function Om(e, t, n) {
  return Z(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function _m(e) {
  return zl([
    dm(),
    wm(),
    Am(e),
    Mm(),
    Bm()
  ]);
}
const Vm = {};
function Nm(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Vm, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(_m(n)), l.push(am()), o.push(sm(n));
}
const Hm = G.div`
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
`, tr = ({ content: e, className: t }) => /* @__PURE__ */ p.jsx(Hm, { className: t, children: /* @__PURE__ */ p.jsx(yp, { remarkPlugins: [Nm], rehypePlugins: [Mp], children: e }) }), $o = async (e) => {
  await navigator.clipboard.writeText(e);
}, qm = G(Be)`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    max-height: calc(100vh - 60px);

    > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }
`, Um = G.div`
    flex-shrink: 0;
    margin-top: 12px;
`, Wm = G.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
`, Wt = G.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 0;
    flex-shrink: 0;

    // all except last child which is the last message or loading indicator
    &:not(:last-child) {
        border-bottom: 1px solid ${(e) => e.theme.colorsBorderPrimary};
    }
`, Km = ({
  studioPro: e,
  isRuntimeConnected: t,
  isDisabled: n,
  executeAction: r,
  isLoading: i,
  response: l,
  agentName: o,
  error: a,
  testVariables: s,
  messages: u,
  setMessages: c
}) => {
  const [d, h] = P.useState(""), f = P.useRef(null);
  P.useEffect(() => {
    f.current && (f.current.scrollTop = f.current.scrollHeight);
  }, [u, i]), P.useEffect(() => {
    i || (l ? c((g) => {
      const C = g[g.length - 1];
      if ((C == null ? void 0 : C.type) === Ae.Agent)
        return g;
      const S = {
        type: Ae.Agent,
        response: l
      };
      return [...g, S];
    }) : a && c((g) => {
      const C = g[g.length - 1];
      return (C == null ? void 0 : C.type) === Ae.Error ? g : [...g, { type: Ae.Error, timestamp: Date.now(), error: a }];
    }));
  }, [l, a, i, c]);
  const m = async () => {
    await e.ui.notifications.show({
      icon: el,
      title: "App is not running",
      message: "Please run the app to use the playground.",
      displayDurationInSeconds: 5
    });
  }, y = async () => {
    if (d.trim()) {
      if (!t) {
        await m();
        return;
      }
      const g = {
        type: Ae.User,
        text: d,
        timestamp: Date.now()
      }, C = [...u, g];
      c(C), h(""), r(s, C);
    }
  }, w = () => /* @__PURE__ */ p.jsxs(Wm, { ref: f, children: [
    u.map((g) => {
      if (g.type === Ae.Error)
        return /* @__PURE__ */ p.jsx(Wt, { children: /* @__PURE__ */ p.jsxs(Yt, { transparent: !0, children: [
          /* @__PURE__ */ p.jsx(Oe, { children: "Test execution failed" }),
          /* @__PURE__ */ p.jsx("div", { children: g.error.message }),
          g.error.link && /* @__PURE__ */ p.jsxs("div", { children: [
            "For more information, please visit",
            " ",
            /* @__PURE__ */ p.jsx(ar, { href: g.error.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
            "."
          ] })
        ] }) }, `error-${g.timestamp}`);
      const C = g.type === Ae.User ? `user-${g.timestamp}` : `agent-${g.response.receivedAt}`;
      return g.type === Ae.User ? /* @__PURE__ */ p.jsxs(Wt, { children: [
        /* @__PURE__ */ p.jsx(Hn, { name: "You", timestamp: g.timestamp }),
        /* @__PURE__ */ p.jsx(tr, { content: g.text })
      ] }, C) : /* @__PURE__ */ p.jsxs(Wt, { children: [
        /* @__PURE__ */ p.jsx(Hn, { name: o, timestamp: g.response.receivedAt }),
        /* @__PURE__ */ p.jsx(tr, { content: g.response.responseText }),
        /* @__PURE__ */ p.jsx(
          kl,
          {
            totalTokens: g.response.totalTokens,
            requestTokens: g.response.requestTokens,
            responseTokens: g.response.responseTokens,
            duration: g.response.durationMilliseconds,
            handleCopyClick: () => $o(g.response.responseText)
          }
        ),
        g.response.tools && g.response.tools.length > 0 && /* @__PURE__ */ p.jsx(wl, { tools: g.response.tools })
      ] }, C);
    }),
    i && /* @__PURE__ */ p.jsx(Wt, { children: /* @__PURE__ */ p.jsx(Cl, {}) })
  ] });
  return /* @__PURE__ */ p.jsxs(qm, { label: "Chat", children: [
    w(),
    /* @__PURE__ */ p.jsx(Um, { children: /* @__PURE__ */ p.jsx(
      $u,
      {
        disabled: n || i,
        onSubmit: y,
        userPrompt: d,
        updateUserPrompt: h,
        isLoading: i
      }
    ) })
  ] });
}, Zm = G.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, Gm = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ p.jsx(Yi, { src: t, alt: o }) : t;
  return /* @__PURE__ */ p.jsx(ia, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ p.jsxs(Zm, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, Xm = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ p.jsxs(ze, { children: [
  e && /* @__PURE__ */ p.jsx(jr, { children: /* @__PURE__ */ p.jsx(la, { children: /* @__PURE__ */ p.jsx(
    oa,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ p.jsx(jr, { fullWidth: !0, children: /* @__PURE__ */ p.jsx(aa, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), Ym = G.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`, Qm = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ p.jsx(Ym, { children: e.map((r, i) => {
  var l, o, a, s;
  return /* @__PURE__ */ p.jsx(
    Xm,
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
}) }) : null, Fi = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], Jm = G(Aa)`
    flex: 1;
`, eg = ({
  studioPro: e,
  isRuntimeConnected: t,
  testVariables: n,
  highlightRules: r,
  isDisabled: i,
  showUnsavedChangesWarning: l,
  showSyncFailedWarning: o,
  showSyncSuccessfulNotification: a,
  executeAction: s,
  usageType: u,
  onNewChat: c,
  onVariableChange: d
}) => {
  const [h, f] = P.useState(Fi[0]), m = async () => {
    await e.ui.notifications.show({
      icon: el,
      title: "App is not running",
      message: "Please run the app to use the playground.",
      displayDurationInSeconds: 5
    });
  }, y = async () => {
    if (!t) {
      await m();
      return;
    }
    s(n);
  };
  return /* @__PURE__ */ p.jsxs(Be, { label: "Playground", children: [
    /* @__PURE__ */ p.jsxs(ze, { children: [
      /* @__PURE__ */ p.jsx(
        Jm,
        {
          defaultValue: h == null ? void 0 : h.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: Fi.map((w) => /* @__PURE__ */ p.jsx(Xt, { id: w.uuid, children: w.name }, w.uuid))
        }
      ),
      /* @__PURE__ */ p.jsx(
        Gm,
        {
          label: u === ve.Chat ? "New chat" : "Test",
          icon: u === ve.Chat ? /* @__PURE__ */ p.jsx(p.Fragment, {}) : /* @__PURE__ */ p.jsx(Tu, {}),
          onPress: u === ve.Chat ? c : y,
          variant: "primary",
          isDisabled: i,
          alt: u === ve.Chat ? "New chat icon" : "Run test icon"
        }
      )
    ] }),
    l && /* @__PURE__ */ p.jsxs(Yt, { children: [
      /* @__PURE__ */ p.jsx(Oe, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ p.jsx("div", { children: "To test your agent, restart the application to apply the latest changes." })
    ] }),
    o && /* @__PURE__ */ p.jsxs(Yt, { children: [
      /* @__PURE__ */ p.jsx(Oe, { children: "Fast reload sync failed" }),
      /* @__PURE__ */ p.jsx("div", { children: "Check the runtime logs for more details and restart the application to continue testing." })
    ] }),
    a && /* @__PURE__ */ p.jsxs(Ma, { children: [
      /* @__PURE__ */ p.jsx(Oe, { children: "Agent synced successfully" }),
      /* @__PURE__ */ p.jsx("div", { children: "You can now test your agent with the latest changes." })
    ] }),
    n.length > 0 && /* @__PURE__ */ p.jsx(
      Qm,
      {
        variables: n,
        highlightRules: r,
        onVariableChange: d
      }
    )
  ] });
}, tg = () => /* @__PURE__ */ p.jsxs(rl, { children: [
  /* @__PURE__ */ p.jsx(Oe, { children: "Test your agent" }),
  /* @__PURE__ */ p.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), ng = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && $o(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ p.jsxs(Yt, { transparent: !0, children: [
    /* @__PURE__ */ p.jsx(Oe, { children: "Test execution failed" }),
    /* @__PURE__ */ p.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ p.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ p.jsx(ar, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ p.jsx(Cl, {}) : t ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Hn, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ p.jsx(tr, { content: t.responseText }),
    /* @__PURE__ */ p.jsx(
      kl,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ p.jsx(wl, { tools: t.tools })
  ] }) : /* @__PURE__ */ p.jsx(tg, {});
  return /* @__PURE__ */ p.jsx(Be, { label: "Output", children: o() });
}, rg = [
  { key: Ke.Auto, caption: "Auto" },
  { key: Ke.None, caption: "None" },
  { key: Ke.Any, caption: "Any" },
  { key: Ke.Tool, caption: "Tool" }
], ig = ({
  agent: e,
  validationInfo: t,
  onToolChoiceChange: n,
  onToolChoiceToolChange: r
}) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx(
    Vn,
    {
      "aria-label": "Tool choice",
      label: "Tool choice",
      value: e.toolChoice ?? null,
      validate: void 0,
      onChange: n,
      description: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        "Control the behavior of the agent regarding tools used.",
        " ",
        /* @__PURE__ */ p.jsx(
          ar,
          {
            href: "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Read more."
          }
        )
      ] }),
      children: rg.map((i) => /* @__PURE__ */ p.jsx(Xt, { id: i.key, children: i.caption }, i.key))
    }
  ),
  e.toolChoice === Ke.Tool && /* @__PURE__ */ p.jsx(
    Vn,
    {
      "aria-label": "Tool choice tool",
      label: "Tool",
      value: e.toolChoiceToolName ?? null,
      validate: () => t.isValidToolChoice,
      onChange: r,
      description: "Only microflows can be selected as tool choice.",
      children: e.tools.filter((i) => i.toolType === _n.Microflow).map((i) => /* @__PURE__ */ p.jsx(Xt, { id: i.name, children: i.name }, i.name))
    }
  )
] }), lg = G(xl)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, og = ({
  agent: e,
  agentDocumentId: t,
  studioPro: n,
  componentName: r,
  updateStudioProDocument: i,
  onAgentChange: l,
  toolValidations: o,
  agentValidationInfo: a
}) => {
  const [s, u] = P.useState(void 0), c = P.useMemo(() => e.tools ? e.tools.map((A, I) => ({
    id: A.id ?? String(I),
    enabled: A.enabled,
    name: A.toolType === _n.Microflow ? A.name : A.document.qualifiedName.split(".")[1],
    description: A.description || "",
    tooltype: A.toolType,
    tool: A.document.qualifiedName || ""
  })) : [], [e.tools]), { items: d, sortProps: h } = tl(c), f = P.useCallback(
    (A) => {
      const I = o.get(A);
      return (I == null ? void 0 : I.state) === "invalid" ? /* @__PURE__ */ p.jsx(Gt, { icon: /* @__PURE__ */ p.jsx(Gi, { title: I.message }) }) : (I == null ? void 0 : I.state) === "syncing" ? /* @__PURE__ */ p.jsx(Gt, { icon: /* @__PURE__ */ p.jsx(gl, { title: "Validating..." }) }) : null;
    },
    [o]
  ), m = P.useCallback(async () => {
    const A = await _r(
      n,
      r,
      e,
      i,
      t
    );
    A && l(A);
  }, [n, r, e, i, t, l]), y = P.useCallback(async () => {
    if (!s || !e.tools)
      return;
    const I = await _r(
      n,
      r,
      e,
      i,
      t,
      s
    );
    I && l(I);
  }, [n, r, e, i, t, l, s]), w = P.useCallback(async () => {
    if (!s || !e.tools)
      return;
    const I = await Fs(n, e, i, s);
    I && l(I);
  }, [e, i, l, s]), g = P.useCallback(
    async (A, I) => {
      if (!e.tools)
        return;
      const k = e.tools.map(
        (O) => (O.id ?? "") === A ? { ...O, enabled: I } : O
      ), B = { ...e, tools: k };
      i(B), l(B);
    },
    [e, i, l]
  ), C = (A) => {
    Bs(e, i, A).then((I) => {
      I && l(I);
    });
  }, S = (A) => {
    zs(e, i, A).then(
      (I) => {
        I && l(I);
      }
    );
  };
  return /* @__PURE__ */ p.jsxs(Be, { label: "Tools", children: [
    /* @__PURE__ */ p.jsx(
      ig,
      {
        agent: e,
        validationInfo: a,
        onToolChoiceChange: C,
        onToolChoiceToolChange: S
      }
    ),
    /* @__PURE__ */ p.jsx(
      nl,
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
          { id: "name", caption: "Name", isRowHeader: !0, allowsResizing: !0, allowsSorting: !0 },
          { id: "description", caption: "Description", allowsResizing: !0, allowsSorting: !0 },
          { id: "tool", caption: "Tool", allowsResizing: !0, allowsSorting: !0 }
        ],
        data: d.map((A) => [
          { cellContent: f(A.id) },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              lg,
              {
                "aria-label": "Enabled",
                isSelected: A.enabled,
                onChange: (I) => g(A.id, I)
              }
            )
          },
          { cellContent: A.name, tooltipText: A.name },
          { cellContent: A.description, tooltipText: A.description },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              Ji,
              {
                icon: A.tooltype === _n.Microflow ? /* @__PURE__ */ p.jsx(Ba, {}) : Ca,
                text: A.tool
              }
            ),
            tooltipText: A.tool
          }
        ]),
        rowKey: (A, I) => {
          var k;
          return ((k = d[I]) == null ? void 0 : k.id) ?? String(I);
        },
        rowOpacity: (A) => {
          var I;
          return (I = d[A]) != null && I.enabled ? 1 : 0.5;
        },
        selectionMode: "single",
        selectedKey: s,
        onRowAction: y,
        onSelectionChange: u,
        ...h,
        toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            at,
            {
              icon: /* @__PURE__ */ p.jsx(ml, {}),
              label: "New",
              "aria-label": "Add new tool",
              tooltip: "Add new tool",
              onPress: m
            }
          ),
          /* @__PURE__ */ p.jsx(
            at,
            {
              icon: /* @__PURE__ */ p.jsx(pl, {}),
              label: "Edit",
              "aria-label": "Edit selected tool",
              onPress: y,
              tooltip: "Edit selected tool",
              isDisabled: !s
            }
          ),
          /* @__PURE__ */ p.jsx(
            at,
            {
              icon: /* @__PURE__ */ p.jsx(hl, {}),
              label: "Delete",
              "aria-label": "Delete selected tool",
              onPress: w,
              tooltip: "Delete selected tool",
              isDisabled: !s
            }
          )
        ] })
      }
    )
  ] });
}, ag = [
  { key: ot.Build, caption: "Build" },
  { key: ot.Playground, caption: "Playground" }
], sg = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUsageType: !0,
  isValidUserPrompt: !0,
  isValidToolChoice: !0,
  missingAttributes: [],
  unusedAttributes: []
}, ug = [
  { caption: "Task", value: ve.Task },
  { caption: "Chat", value: ve.Chat }
], cg = ({
  agentDocument: { name: e, contents: t, $ID: n },
  studioPro: r
}) => {
  var Ir, Ar, Dr, Lr, $r;
  const [i, l] = P.useState(sg), [o, a] = P.useState(e), [s, u] = P.useState(void 0), [c, d] = P.useState(t), [h, f] = P.useState(!1), [m, y] = P.useState(ot.Build), [w, g] = P.useState(le.Disabled), [C, S] = P.useState([]), [A, I] = P.useState(
    t.variables.map((E) => ({ ...E, value: "" }))
  ), k = w !== le.Disabled, B = (E) => {
    g((z) => z === le.Disabled && E !== le.Enabled ? z : E);
  }, [O, N] = P.useState(/* @__PURE__ */ new Map()), [v, R] = P.useState(
    /* @__PURE__ */ new Map()
  ), [j, H] = P.useState(!0), F = sa(), [L, K] = P.useState([]), ne = P.useRef(0), re = P.useCallback(
    async (E) => {
      ne.current++, await vs(r, n)(E);
    },
    [r, n]
  ), Se = [
    n,
    (Ir = c.model) == null ? void 0 : Ir.documentId,
    ...c.tools.map((E) => E.document.documentId),
    ...(c.knowledgebaseTools || []).map((E) => E.document.documentId)
  ].filter((E) => !!E), x = c.entity ? [(Lr = (Dr = (Ar = c.entity) == null ? void 0 : Ar.qualifiedName) == null ? void 0 : Dr.split(".")) == null ? void 0 : Lr[0]] : void 0, {
    data: ge,
    isError: Te,
    error: b,
    isPending: ce,
    execute: Le,
    reset: ae
  } = Ds(r, n);
  P.useEffect(() => {
    (async () => {
      var M;
      const z = await Bt(r, (M = c.entity) == null ? void 0 : M.qualifiedName);
      u(z);
    })();
  }, [r, ($r = c.entity) == null ? void 0 : $r.qualifiedName]);
  const je = P.useCallback(async () => {
    const E = [];
    if (c.tools && c.tools.length > 0) {
      const z = /* @__PURE__ */ new Map();
      c.tools.forEach((M) => {
        z.set(M.id, { state: "syncing" });
      }), N(z), E.push(
        Promise.all(
          c.tools.map(async (M) => {
            const Q = await Fa("document", M, c, r);
            return {
              id: M.id,
              validation: Q === !0 ? { state: "valid" } : { state: "invalid", message: Q }
            };
          })
        ).then((M) => {
          const Q = new Map(M.map((te) => [te.id, te.validation]));
          N(Q);
        })
      );
    }
    if (c.knowledgebaseTools && c.knowledgebaseTools.length > 0) {
      const z = /* @__PURE__ */ new Map();
      c.knowledgebaseTools.forEach((M) => {
        z.set(M.id, { state: "syncing" });
      }), R(z), E.push(
        Promise.all(
          c.knowledgebaseTools.map(async (M) => {
            const Q = await ja(
              "document",
              M,
              c,
              r
            );
            return {
              id: M.id,
              validation: Q === !0 ? { state: "valid" } : { state: "invalid", message: Q }
            };
          })
        ).then((M) => {
          const Q = new Map(M.map((te) => [te.id, te.validation]));
          R(Q);
        })
      );
    }
    await Promise.all(E);
  }, [c, r]), ie = P.useCallback(
    async (E) => ({
      isValidModel: await ht("model", r, E),
      isValidEntity: await ht("entity", r, E),
      isValidUsageType: await ht("usageType", r, E),
      isValidUserPrompt: await ht("userPrompt", r, E),
      missingAttributes: await Ts(r, E),
      unusedAttributes: await Es(r, E),
      isValidToolChoice: await ht("toolChoice", r, E)
    }),
    [r]
  ), Ee = P.useCallback(
    async (E) => {
      let z = [];
      if (E.model) {
        const Q = await or(r, E.model);
        if (Q) {
          const te = await $a(r, Q.contents);
          z = typeof te == "string" ? [] : te;
        }
      }
      K(z);
      const M = Or(E, z);
      H(M);
    },
    [r]
  );
  P.useEffect(() => {
    (async () => {
      const z = await ul(r, t), M = await ie({ ...t, variables: z });
      Ee(t), l(M), je();
    })();
  }, []);
  const Ne = P.useCallback(
    async (E) => {
      var ft, Mr, Rr, Fr;
      if (E.some((se) => se === n))
        if (ne.current > 0)
          ne.current--;
        else {
          const se = await r.app.model.customBlobDocuments.getDocumentById(n);
          if (se && !("error" in se)) {
            const nt = se.document.contents;
            d(nt), a(se.document.name), ie(nt).then((Mo) => l(Mo));
          }
        }
      const z = [
        ...c.tools.map((se) => se.document.documentId),
        ...((ft = c.knowledgebaseTools) == null ? void 0 : ft.map((se) => se.document.documentId)) || []
      ], M = E.includes("domainModel"), Q = E.includes(((Mr = c.model) == null ? void 0 : Mr.documentId) || "") || M, te = E.some((se) => z.includes(se));
      Q && !M && ie(c).then((se) => l(se)), M && (Bt(r, (Rr = c.entity) == null ? void 0 : Rr.qualifiedName).then((se) => u(se)), ur(r, c.variables, c).then((se) => {
        d((nt) => ({ ...nt, variables: se })), ie({ ...c, variables: se }).then((nt) => l(nt));
      })), te && je(), E.includes(((Fr = c.model) == null ? void 0 : Fr.documentId) || "") && Ee(c), B(le.SyncNeeded);
    },
    [c, n, r, ie, je, Ee]
  );
  fa({
    studioPro: r,
    dependentIds: Se,
    onDependentDocumentsChanged: Ne,
    watchProjectSettings: !0,
    watchDomainModelModules: x
  }), Nr(c.tools, N), Nr(c.knowledgebaseTools, R), P.useEffect(() => {
    let E = !1, z, M;
    const Q = { type: _t.GetConnectionState };
    return r.ui.messagePassing.sendMessage(
      Q,
      async (te) => {
        B(te.isConnected ? le.Enabled : le.Disabled);
      }
    ), r.ui.messagePassing.addMessageHandler(async ({ message: te }) => {
      te.type === _t.ConnectionChanged ? B(te.isConnected ? le.Enabled : le.Disabled) : te.type === _t.SyncSuccessful ? (M && clearTimeout(M), B(le.SyncSuccessful), M = setTimeout(
        () => g(
          (ft) => ft === le.SyncSuccessful ? le.Enabled : ft
        ),
        5e3
      )) : te.type === _t.SyncFailed && B(le.SyncFailed);
    }).then((te) => {
      E ? r.ui.messagePassing.removeMessageHandler(te) : z = te;
    }), () => {
      E = !0, z && r.ui.messagePassing.removeMessageHandler(z), M && clearTimeout(M);
    };
  }, []);
  const He = P.useMemo(() => Br(c.variables, F), [c.variables, F]);
  P.useEffect(() => {
    I((E) => {
      const z = new Map(E.map((M) => [M.key, M.value]));
      return c.variables.map((M) => ({
        ...M,
        value: z.has(M.key) ? z.get(M.key) : ""
      }));
    });
  }, [c.variables]);
  const sn = P.useCallback((E, z) => {
    I((M) => {
      const Q = [...M];
      return Q[E] = { ...Q[E], value: z }, Q;
    });
  }, []), un = P.useCallback(
    async (E, z, M) => {
      const Q = await zr(
        r,
        E,
        z,
        re,
        M
      );
      d((te) => ({ ...te, variables: Q.variables })), ie(Q).then((te) => l(te));
    },
    [r, re, ie]
  ), cn = Ia(un, Ea), tt = (E) => (z) => {
    const M = { ...c, [E]: z };
    d(M), cn(E, M, z);
  }, Mt = async (E) => {
    const z = await zr(
      r,
      "usageType",
      c,
      re,
      E
    );
    d(z), ie(z).then((M) => l(M)), ae();
  }, Rt = async () => {
    const E = await Ls(r, c, re);
    E && (d(E), ie(E).then((z) => l(z)));
  }, dn = async () => {
    const E = await $s(r, c, re);
    E && (d(E), ie(E).then((z) => l(z)), Ee(E));
  }, Ft = (E) => {
    const z = { ...c, selectedModel: L.find((Q) => Q.id === E) }, M = Or(z, L);
    d(z), H(M), re(z);
  }, jt = async () => {
    c.model && Ms(r, c.model);
  }, fn = async () => {
    c.entity && Ta(r, c.entity.qualifiedName);
  }, hn = async () => {
    const E = await Rs(
      r,
      gn,
      re,
      n
    );
    E && d(E);
  }, pn = P.useCallback(
    (E) => {
      d(E), ie(E).then((z) => l(z));
    },
    [ie]
  ), Bt = async (E, z) => {
    if (!z)
      return;
    const M = await tn(E, z);
    if (!M)
      return;
    const Q = await va(M, E);
    if (Q !== void 0)
      return Q ? /* @__PURE__ */ p.jsx(cs, {}) : /* @__PURE__ */ p.jsx(ms, {});
  }, mn = P.useMemo(() => {
    let E = "";
    return c.maxTokens !== void 0 && (E += "Max tokens: " + c.maxTokens.toLocaleString(navigator.language)), c.temperature !== void 0 && (E.length > 0 && (E += ", "), E += "Temperature: " + c.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), c.topP !== void 0 && (E.length > 0 && (E += ", "), E += "Top P: " + c.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), E;
  }, [c.temperature, c.maxTokens, c.topP]), T = () => {
    var E, z;
    return /* @__PURE__ */ p.jsxs(Be, { label: "General", children: [
      /* @__PURE__ */ p.jsx(
        Us,
        {
          label: "Agent type",
          "aria-label": "Agent type",
          value: c.usageType,
          validate: () => i.isValidUsageType,
          compactControl: !0,
          onChange: Mt,
          children: ug.map((M) => /* @__PURE__ */ p.jsx(Vs, { value: M.value, children: M.caption }, M.value))
        }
      ),
      /* @__PURE__ */ p.jsx(
        xn,
        {
          label: "Documentation",
          ariaLabel: "Documentation",
          value: c.description,
          onChange: tt("description"),
          defaultHeightRows: 1
        }
      ),
      /* @__PURE__ */ p.jsx(
        bn,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((E = c.entity) == null ? void 0 : E.qualifiedName) || "",
          icon: s,
          onClick: Rt,
          buttonCaption: "Select...",
          validate: () => i.isValidEntity,
          buttonCaptionSecondary: c.entity ? "Show" : void 0,
          onClickSecondary: c.entity ? fn : void 0
        }
      ),
      c.entity && i.missingAttributes.length > 0 && /* @__PURE__ */ p.jsxs(Ra, { children: [
        /* @__PURE__ */ p.jsx(Oe, { children: `The following attributes cannot be found in ${c.entity.qualifiedName}:` }),
        /* @__PURE__ */ p.jsx("div", { children: i.missingAttributes.map((M) => `{{${M}}}`).join(", ") })
      ] }),
      c.entity && i.unusedAttributes.length > 0 && !h && /* @__PURE__ */ p.jsxs(rl, { onClose: () => f(!0), children: [
        /* @__PURE__ */ p.jsx(Oe, { children: `The following attributes are found in ${(z = c.entity) == null ? void 0 : z.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ p.jsx("div", { children: i.unusedAttributes.map((M) => `{{${M}}}`).join(", ") })
      ] })
    ] });
  }, $ = () => {
    var E, z;
    return /* @__PURE__ */ p.jsxs(Be, { label: "Model", children: [
      /* @__PURE__ */ p.jsx(
        bn,
        {
          ariaLabel: "Resource",
          label: "Resource",
          value: ((E = c.model) == null ? void 0 : E.qualifiedName) || "",
          icon: c.model ? Sa : void 0,
          buttonCaption: "Select...",
          onClick: dn,
          validate: () => i.isValidModel,
          buttonCaptionSecondary: c.model ? "Show" : void 0,
          onClickSecondary: c.model ? jt : void 0
        }
      ),
      /* @__PURE__ */ p.jsx(
        Vn,
        {
          "aria-label": "Version",
          label: "Version",
          allowsEmptyCollection: !0,
          isDisabled: !c.model,
          value: ((z = c.selectedModel) == null ? void 0 : z.id) || "",
          validate: () => j,
          onChange: Ft,
          children: [...L, c.selectedModel && L.length === 0 ? c.selectedModel : void 0].filter((M) => !!M).map((M) => /* @__PURE__ */ p.jsx(Xt, { id: M.id, children: M.name }, M.id))
        }
      ),
      /* @__PURE__ */ p.jsx(
        bn,
        {
          ariaLabel: "Settings",
          label: "Settings",
          value: mn,
          buttonCaption: "Edit",
          onClick: hn,
          validate: void 0
        }
      )
    ] });
  }, _ = m === ot.Playground, U = (E) => _ ? A.reduce(
    (z, M) => z.replaceAll(`{{${M.key}}}`, M.value ? `{{${M.value}}}` : `{{${M.key}}}`),
    E
  ) : E, Y = P.useMemo(() => {
    if (_)
      return Br(
        A.map((E) => ({ ...E, key: E.value || E.key })),
        F
      );
  }, [_, A, F]), xe = () => /* @__PURE__ */ p.jsx(Be, { label: "System prompt", children: /* @__PURE__ */ p.jsx(
    xn,
    {
      ariaLabel: "System prompt",
      value: U(c.systemPrompt),
      onChange: tt("systemPrompt"),
      highlightRules: _ ? Y : He,
      readOnly: _,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), $e = () => /* @__PURE__ */ p.jsx(Be, { label: "User prompt", children: /* @__PURE__ */ p.jsx(
    xn,
    {
      ariaLabel: "User prompt",
      value: U(c.userPrompt || ""),
      onChange: tt("userPrompt"),
      highlightRules: _ ? Y : He,
      readOnly: _,
      validate: _ ? void 0 : () => i.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), Pe = () => /* @__PURE__ */ p.jsx(
    og,
    {
      agent: c,
      agentDocumentId: n,
      studioPro: r,
      componentName: gn,
      updateStudioProDocument: re,
      onAgentChange: pn,
      toolValidations: O,
      agentValidationInfo: i
    }
  ), Ge = () => S([]), Xe = () => /* @__PURE__ */ p.jsx(
    eg,
    {
      studioPro: r,
      isRuntimeConnected: k,
      testVariables: A,
      highlightRules: He,
      executeAction: Le,
      isDisabled: ce || w === le.SyncNeeded || w === le.SyncFailed,
      showUnsavedChangesWarning: w === le.SyncNeeded,
      showSyncFailedWarning: w === le.SyncFailed,
      showSyncSuccessfulNotification: w === le.SyncSuccessful,
      usageType: c.usageType,
      onNewChat: Ge,
      onVariableChange: sn
    }
  ), pe = () => /* @__PURE__ */ p.jsx(
    yu,
    {
      agent: c,
      agentDocumentId: n,
      studioPro: r,
      componentName: gn,
      updateStudioProDocument: re,
      onAgentChange: d,
      knowledgebaseToolValidations: v
    }
  ), qe = () => /* @__PURE__ */ p.jsx(
    ng,
    {
      agentName: o,
      response: ge,
      isLoading: ce,
      isError: Te,
      error: b
    }
  ), Ie = () => /* @__PURE__ */ p.jsx(
    Km,
    {
      studioPro: r,
      isRuntimeConnected: k,
      isDisabled: ce || w === le.SyncNeeded || w === le.SyncFailed,
      executeAction: Le,
      isLoading: ce,
      response: ge,
      agentName: o,
      error: b,
      testVariables: A,
      messages: C,
      setMessages: S
    }
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Da, { children: /* @__PURE__ */ p.jsx(La, { children: /* @__PURE__ */ p.jsx(
      xs,
      {
        options: ag,
        selectedKey: m,
        onSelectionChange: (E) => y(E.key)
      }
    ) }) }),
    /* @__PURE__ */ p.jsx(ua, { children: /* @__PURE__ */ p.jsxs(ca, { children: [
      m === ot.Build && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs(Ot, { children: [
          T(),
          $(),
          xe(),
          c.usageType === ve.Task && $e()
        ] }),
        /* @__PURE__ */ p.jsxs(Ot, { children: [
          Pe(),
          pe()
        ] })
      ] }),
      m === ot.Playground && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsxs(Ot, { children: [
          Xe(),
          xe(),
          c.usageType === ve.Task && $e()
        ] }),
        /* @__PURE__ */ p.jsxs(Ot, { children: [
          c.usageType === ve.Task && qe(),
          c.usageType === ve.Chat && Ie()
        ] })
      ] })
    ] }) })
  ] });
}, dg = Pa(), fg = ({ studioPro: e, documentId: t }) => {
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = P.useState(!1), [o, a] = P.useState(dg);
  return P.useEffect(() => {
    r.getDocumentById(t).then(async (s) => {
      if (s && !("error" in s))
        l(!0), a(s.document);
      else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await n.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s), l(!0);
    });
  }, []), /* @__PURE__ */ p.jsxs(da, { studioPro: e, children: [
    !i && /* @__PURE__ */ p.jsx(pa, {}),
    i && /* @__PURE__ */ p.jsx(cg, { agentDocument: o, studioPro: e })
  ] });
}, Eg = ha(fg);
export {
  fg as App,
  Eg as component
};
