import { $ as bt, a as ri, b as fe, c as nt, d as ii, e as jn, f as li, r as L, g as oi, h as ai, i as Jl, j as eo, k as to, l as no, m as ro, n as io, o as lo, p as Fn, q as oo, s as si, t as ui, u as ci, v as di, w as xn, x as fi, y as hi, z as Mn, A as Se, B as pi, C as ao, D as so, E as uo, F as co, G as fo, H as mi, I as p, J as Ae, K as ee, L as U, M as ho, N as gi, O as _e, P as po, Q as xi, R as je, S as yi, T as bi, U as mo, V as go, W as rr, X as xo, Y as yo, Z as bo, _ as ko, a0 as wo, a1 as Co, a2 as ir, a3 as vo, a4 as So, a5 as Eo, a6 as To } from "./Icon-DMu3278C.js";
import { I as Mt, T as ki, B as Ue, u as wi, c as Io, C as Ao } from "./TextWithIcon-DpacnK2w.js";
import { R as Po, g as zt, a as Lo, U as le, b as Do, P as Ro, A as jo, T as ze, c as Ci, m as Fo, k as Mo, d as $o, e as yn, f as Bo, i as Oo, h as zo, j as Kt, l as _o, n as Vo } from "./index-YObaGbux.js";
import { I as vi, W as $n, E as No } from "./Banner-Dxu8bG4H.js";
import { h as Ho, T as lr } from "./toolHandlers-3RRB71-Z.js";
import { T as Gt } from "./TextInputWithButton-BDeCrCh9.js";
import { h as qo } from "./knowledgebaseToolHandlers-Dao-XtKI.js";
import { u as Si, T as Ei, D as Je, k as Uo } from "./Table-lnKG6U_B.js";
import { y as Bn } from "./Link-DlgH44DF.js";
import { $ as Wo, a as Zo, I as bn, S as or } from "./ComboBox-BfwSOBFk.js";
import { n as Ko } from "./MicroflowIcon-DrYfg-0b.js";
function Go(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: u, "aria-label": s, "aria-labelledby": d, validationState: c = "valid", isInvalid: h, onPressStart: f, onPressEnd: m, onPressChange: v, onPress: b, onPressUp: y, onClick: E } = e, k = (V) => {
    V.stopPropagation(), t.setSelected(V.target.checked);
  }, A = u != null, T = s != null || d != null;
  !A && !T && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: C, isPressed: O } = bt({
    onPressStart: f,
    onPressEnd: m,
    onPressChange: v,
    onPress: b,
    onPressUp: y,
    onClick: E,
    isDisabled: r
  }), { pressProps: j, isPressed: M } = bt({
    onPressStart: f,
    onPressEnd: m,
    onPressChange: v,
    onPressUp: y,
    onClick: E,
    onPress(V) {
      var $;
      b == null || b(V), t.toggle(), ($ = n.current) === null || $ === void 0 || $.focus();
    },
    isDisabled: r || i
  }), { focusableProps: w } = ri(e, n), R = fe(C, w), F = nt(e, {
    labelable: !0
  });
  return ii(n, t.defaultSelected, t.setSelected), {
    labelProps: fe(j, {
      onClick: (V) => V.preventDefault()
    }),
    inputProps: fe(F, {
      "aria-invalid": h || c === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": i || void 0,
      onChange: k,
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
    isPressed: O || M,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: h || c === "invalid"
  };
}
function Ti(e, t, n) {
  let r = jn({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: u, isSelected: s, isPressed: d, isDisabled: c, isReadOnly: h } = Go({
    ...e,
    isInvalid: i
  }, t, n);
  li(e, r, n);
  let { isIndeterminate: f, isRequired: m, validationBehavior: v = "aria" } = e;
  L.useEffect(() => {
    n.current && (n.current.indeterminate = !!f);
  });
  let { pressProps: b } = bt({
    isDisabled: c || h,
    onPress() {
      let { [oi]: y } = e, { commitValidation: E } = y || r;
      E();
    }
  });
  return {
    labelProps: fe(a, b, L.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (y) => y.preventDefault()
    }), [])),
    inputProps: {
      ...u,
      checked: s,
      "aria-required": m && v === "aria" || void 0,
      required: m && v === "native"
    },
    isSelected: s,
    isPressed: d,
    isDisabled: c,
    isReadOnly: h,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
const Xo = /* @__PURE__ */ new WeakMap();
function Ii(e = {}) {
  let { isReadOnly: t } = e, [n, r] = ai(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = L.useState(n);
  function l(u) {
    t || r(u);
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
function Yo(e, t, n) {
  const r = Ii({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(y) {
      y ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(y);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: u } = Xo.get(t);
  var s;
  u = (s = e.validationBehavior) !== null && s !== void 0 ? s : u;
  let { realtimeValidation: d } = jn({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = L.useRef(Jl), h = () => {
    t.setInvalid(e.value, d.isInvalid ? d : c.current);
  };
  L.useEffect(h);
  let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : d, m = u === "native" ? t.displayValidation : f;
  var v;
  let b = Ti({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (v = e.isRequired) !== null && v !== void 0 ? v : t.isRequired,
    validationBehavior: u,
    [oi]: {
      realtimeValidation: f,
      displayValidation: m,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(y) {
        c.current = y, h();
      }
    }
  }, r, n);
  return {
    ...b,
    inputProps: {
      ...b.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? a : null,
        o
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const Ai = /* @__PURE__ */ new WeakMap();
function Qo(e, t, n) {
  let { value: r, children: i, "aria-label": l, "aria-labelledby": o, onPressStart: a, onPressEnd: u, onPressChange: s, onPress: d, onPressUp: c, onClick: h } = e;
  const f = e.isDisabled || t.isDisabled;
  let m = i != null, v = l != null || o != null;
  !m && !v && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let b = t.selectedValue === r, y = (D) => {
    D.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: E, isPressed: k } = bt({
    onPressStart: a,
    onPressEnd: u,
    onPressChange: s,
    onPress: d,
    onPressUp: c,
    onClick: h,
    isDisabled: f
  }), { pressProps: A, isPressed: T } = bt({
    onPressStart: a,
    onPressEnd: u,
    onPressChange: s,
    onPressUp: c,
    onClick: h,
    isDisabled: f,
    onPress(D) {
      var W;
      d == null || d(D), t.setSelectedValue(r), (W = n.current) === null || W === void 0 || W.focus();
    }
  }), { focusableProps: C } = ri(fe(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), O = fe(E, C), j = nt(e, {
    labelable: !0
  }), M = -1;
  t.selectedValue != null ? t.selectedValue === r && (M = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (M = 0), f && (M = void 0);
  let { name: w, form: R, descriptionId: F, errorMessageId: V, validationBehavior: $ } = Ai.get(t);
  return ii(n, t.defaultSelectedValue, t.setSelectedValue), li({
    validationBehavior: $
  }, t, n), {
    labelProps: fe(A, L.useMemo(() => ({
      onClick: (D) => D.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (D) => D.preventDefault()
    }), [])),
    inputProps: fe(j, {
      ...O,
      type: "radio",
      name: w,
      form: R,
      tabIndex: M,
      disabled: f,
      required: t.isRequired && $ === "native",
      checked: b,
      value: r,
      onChange: y,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? V : null,
        F
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: f,
    isSelected: b,
    isPressed: k || T
  };
}
function Jo(e, t) {
  let { name: n, form: r, isReadOnly: i, isRequired: l, isDisabled: o, orientation: a = "vertical", validationBehavior: u = "aria" } = e, { direction: s } = eo(), { isInvalid: d, validationErrors: c, validationDetails: h } = t.displayValidation, { labelProps: f, fieldProps: m, descriptionProps: v, errorMessageProps: b } = to({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || c
  }), y = nt(e, {
    labelable: !0
  }), { focusWithinProps: E } = no({
    onBlurWithin(T) {
      var C;
      (C = e.onBlur) === null || C === void 0 || C.call(e, T), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), k = (T) => {
    let C;
    switch (T.key) {
      case "ArrowRight":
        s === "rtl" && a !== "vertical" ? C = "prev" : C = "next";
        break;
      case "ArrowLeft":
        s === "rtl" && a !== "vertical" ? C = "next" : C = "prev";
        break;
      case "ArrowDown":
        C = "next";
        break;
      case "ArrowUp":
        C = "prev";
        break;
      default:
        return;
    }
    T.preventDefault();
    let O = io(T.currentTarget, {
      from: T.target,
      accept: (M) => M instanceof lo(M).HTMLInputElement && M.type === "radio"
    }), j;
    C === "next" ? (j = O.nextNode(), j || (O.currentNode = T.currentTarget, j = O.firstChild())) : (j = O.previousNode(), j || (O.currentNode = T.currentTarget, j = O.lastChild())), j && (j.focus(), t.setSelectedValue(j.value));
  }, A = ro(n);
  return Ai.set(t, {
    name: A,
    form: r,
    descriptionId: v.id,
    errorMessageId: b.id,
    validationBehavior: u
  }), {
    radioGroupProps: fe(y, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: k,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": l || void 0,
      "aria-disabled": o || void 0,
      "aria-orientation": a,
      ...m,
      ...E
    }),
    labelProps: f,
    descriptionProps: v,
    errorMessageProps: b,
    isInvalid: d,
    validationErrors: c,
    validationDetails: h
  };
}
let ea = Math.round(Math.random() * 1e10), ta = 0;
function na(e) {
  let t = L.useMemo(() => e.name || `radio-group-${ea}-${++ta}`, [
    e.name
  ]);
  var n;
  let [r, i] = ai(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [l] = L.useState(r), [o, a] = L.useState(null), u = jn({
    ...e,
    value: r
  }), s = (h) => {
    !e.isReadOnly && !e.isDisabled && (i(h), u.commitValidation());
  }, d = u.displayValidation.isInvalid;
  var c;
  return {
    ...u,
    name: t,
    selectedValue: r,
    defaultSelectedValue: e.value !== void 0 ? l : (c = e.defaultValue) !== null && c !== void 0 ? c : null,
    setSelectedValue: s,
    lastFocusedValue: o,
    setLastFocusedValue: a,
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isRequired: e.isRequired || !1,
    validationState: e.validationState || (d ? "invalid" : null),
    isInvalid: d
  };
}
const ra = /* @__PURE__ */ L.createContext(null), ia = /* @__PURE__ */ L.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Fn(i, n, oo);
  let { validationBehavior: l } = si(ui) || {};
  var o, a;
  let u = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", s = L.useContext(ra), d = ci(L.useMemo(() => di(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: c, inputProps: h, isSelected: f, isDisabled: m, isReadOnly: v, isPressed: b, isInvalid: y } = s ? Yo({
    ...xn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, d) : Ti({
    ...xn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: u
  }, Ii(t), d), { isFocused: E, isFocusVisible: k, focusProps: A } = fi(), T = m || v, { hoverProps: C, isHovered: O } = hi({
    ...t,
    isDisabled: T
  }), j = Mn({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: f,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: b,
      isHovered: O,
      isFocused: E,
      isFocusVisible: k,
      isDisabled: m,
      isReadOnly: v,
      isInvalid: y,
      isRequired: t.isRequired || !1
    }
  }), M = nt(t, {
    global: !0
  });
  return delete M.id, delete M.onClick, /* @__PURE__ */ Se.createElement("label", {
    ...fe(M, c, C, j),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": f || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": b || void 0,
    "data-hovered": O || void 0,
    "data-focused": E || void 0,
    "data-focus-visible": k || void 0,
    "data-disabled": m || void 0,
    "data-readonly": v || void 0,
    "data-invalid": y || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Se.createElement(pi, {
    elementType: "span"
  }, /* @__PURE__ */ Se.createElement("input", {
    ...fe(h, A),
    ref: d
  })), j.children);
}), la = /* @__PURE__ */ L.createContext(null), oa = /* @__PURE__ */ L.createContext(null), Pi = /* @__PURE__ */ L.createContext(null), aa = /* @__PURE__ */ L.forwardRef(function(t, n) {
  [t, n] = Fn(t, n, la);
  let { validationBehavior: r } = si(ui) || {};
  var i, l;
  let o = (l = (i = t.validationBehavior) !== null && i !== void 0 ? i : r) !== null && l !== void 0 ? l : "native", a = na({
    ...t,
    validationBehavior: o
  }), [u, s] = ao(!t["aria-label"] && !t["aria-labelledby"]), { radioGroupProps: d, labelProps: c, descriptionProps: h, errorMessageProps: f, ...m } = Jo({
    ...t,
    label: s,
    validationBehavior: o
  }, a), v = Mn({
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
  }), b = nt(t, {
    global: !0
  });
  return /* @__PURE__ */ Se.createElement("div", {
    ...fe(b, v, d),
    ref: n,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "vertical",
    "data-invalid": a.isInvalid || void 0,
    "data-disabled": a.isDisabled || void 0,
    "data-readonly": a.isReadOnly || void 0,
    "data-required": a.isRequired || void 0
  }, /* @__PURE__ */ Se.createElement(so, {
    values: [
      [
        Pi,
        a
      ],
      [
        uo,
        {
          ...c,
          ref: u,
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
        m
      ]
    ]
  }, /* @__PURE__ */ Se.createElement(Zo, null, v.children)));
}), sa = /* @__PURE__ */ L.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Fn(i, n, oa);
  let l = Se.useContext(Pi), o = ci(L.useMemo(() => di(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: a, inputProps: u, isSelected: s, isDisabled: d, isPressed: c } = Qo({
    ...xn(t),
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, l, o), { isFocused: h, isFocusVisible: f, focusProps: m } = fi(), v = d || l.isReadOnly, { hoverProps: b, isHovered: y } = hi({
    ...t,
    isDisabled: v
  }), E = Mn({
    ...t,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: s,
      isPressed: c,
      isHovered: y,
      isFocused: h,
      isFocusVisible: f,
      isDisabled: d,
      isReadOnly: l.isReadOnly,
      isInvalid: l.isInvalid,
      isRequired: l.isRequired
    }
  }), k = nt(t, {
    global: !0
  });
  return delete k.id, delete k.onClick, /* @__PURE__ */ Se.createElement("label", {
    ...fe(k, a, b, E),
    ref: n,
    "data-selected": s || void 0,
    "data-pressed": c || void 0,
    "data-hovered": y || void 0,
    "data-focused": h || void 0,
    "data-focus-visible": f || void 0,
    "data-disabled": d || void 0,
    "data-readonly": l.isReadOnly || void 0,
    "data-invalid": l.isInvalid || void 0,
    "data-required": l.isRequired || void 0
  }, /* @__PURE__ */ Se.createElement(pi, {
    elementType: "span"
  }, /* @__PURE__ */ Se.createElement("input", {
    ...fe(u, m),
    ref: o
  })), /* @__PURE__ */ Se.createElement(Wo.Provider, {
    value: {
      isSelected: s
    }
  }, E.children));
}), ua = [
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
], ca = [
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
], da = (e, t) => async (n) => {
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, n);
  } catch (r) {
    await e.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function fa(e, t) {
  const n = /\{\{([^}\s{]+)\}\}/g, r = t.systemPrompt.match(n) || [], i = t.userPrompt && t.usageType === le.Task ? t.userPrompt.match(n) || [] : [], l = [...r, ...i];
  if (l.length === 0)
    return Promise.resolve([]);
  const o = l.map((d) => d.replace(/\{\{|\}\}/g, "")), a = [...new Set(o)], u = t.variables, s = a.map((d) => u.find((h) => h.key === d) || {
    key: d,
    isAttributeInEntity: !1
  });
  return On(e, s, t);
}
const ha = (e, t) => e.map((n, r) => ({
  pattern: new RegExp("\\{\\{" + n.key + "\\}\\}", "g"),
  style: {
    ...pa(r, mi(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function pa(e, t) {
  const n = t ? ca : ua;
  return {
    color: n[e % n.length][1],
    backgroundColor: n[e % n.length][0],
    borderColor: n[e % n.length][1]
  };
}
async function On(e, t, n) {
  const r = await Li(e, n), i = await Di(n, e);
  return t.map((l) => {
    const o = i.includes(l.key);
    return {
      ...l,
      isAttributeInEntity: r === !1 || o
    };
  });
}
const Li = async (e, t) => t.entity ? await zt(e, t.entity.qualifiedName) !== void 0 : !0, ma = async (e, t) => t.variables.length === 0 ? [] : !t.entity || !await zt(e, t.entity.qualifiedName) ? [] : t.variables.filter((n) => !n.isAttributeInEntity).map((n) => n.key), Di = async (e, t) => {
  if (!e.entity)
    return [];
  const n = await zt(t, e.entity.qualifiedName);
  return n ? (await Lo(t, n)).sort() : [];
}, ga = async (e, t) => (await Di(t, e)).filter((r) => !t.variables.find((i) => i.key === r)), xa = async (e, t, n, r) => {
  const i = n.reduce((u, s) => (u[s.key] = s.value, u), {}), l = r == null ? void 0 : r.map((u) => u.type === "agent" ? {
    type: "agent",
    text: u.response.responseText
  } : {
    type: "user",
    text: u.text
  }), o = {
    documentId: t,
    variables: JSON.stringify(i),
    messages: JSON.stringify(l || [])
  };
  return await e.runtime.controller.executePreviewAction(
    "preview_agent_test",
    o
  );
}, ya = async (e) => {
  try {
    const t = await e.runtime.controller.executePreviewAction("preview_runtime_test", {});
    return !(typeof t == "object" && t !== null && "error" in t && t.error === Po);
  } catch {
    return !0;
  }
}, ba = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", ka = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var wa = Object.defineProperty, Ca = (e, t) => wa(e, "name", { value: t, configurable: !0 });
const va = Ca((e) => p.jsx(Ae, { light: ka, dark: ba, ...e }), "EntityIcon"), Sa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ea = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Ta = Object.defineProperty, Ia = (e, t) => Ta(e, "name", { value: t, configurable: !0 });
const Aa = Ia((e) => p.jsx(Ae, { light: Ea, dark: Sa, ...e }), "EntityNonPersistableIcon"), Pa = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", La = "Test action failed. Please check the runtime logs for more details.", Da = (e, t, n) => {
  const [r, i] = L.useState(void 0), [l, o] = L.useState(!1), [a, u] = L.useState(!1), [s, d] = L.useState(void 0), c = L.useCallback(
    async (h, f) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: Do,
          title: "App is not running",
          message: "Please run the app to use the playground.",
          displayDurationInSeconds: 5
        });
        return;
      }
      o(!0), i(void 0), u(!1), d(void 0);
      try {
        const m = await xa(e, t, h, f);
        if (m === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in m && m.message === Ro) {
          u(!0), d({ name: "Error", message: Pa, link: jo });
          return;
        }
        i(m);
      } catch {
        u(!0), d({ name: "Error", message: La });
      } finally {
        o(!1);
      }
    },
    [e, n, t]
  );
  return { data: r, isPending: l, isError: a, error: s, execute: c };
}, ar = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt" || t === "usageType") && (l.variables = await fa(e, l)), r(l), l;
}, Ra = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const l = await On(e, t.variables, i);
    i = { ...i, variables: l }, n(i);
  }
  return i;
}, ja = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Fo }
  });
  let i;
  return r.status === "ok" && (i = {
    ...t,
    model: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, model: void 0 }), i && n(i), i;
}, dt = async (e, t, n) => {
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
      if (!n.userPrompt && n.usageType === le.Task)
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
}, Fa = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await Ci(e, t))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, Ma = async (e, t, n, r) => {
  const i = await e.ui.dialogs.showModal(
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
  let l;
  return i && (l = i), l && r(l), l;
}, sr = async (e, t, n, r, i) => {
  const l = i && n.tools ? n.tools.find((a) => a.id === i) : void 0, o = await e.ui.dialogs.showModal(
    {
      title: l ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: l ? encodeURIComponent(JSON.stringify(l)) : "",
        agent: n ? encodeURIComponent(JSON.stringify(n)) : ""
      }
    }
  );
  if (o !== null) {
    const a = o;
    let u;
    const s = { ...n };
    return i && n.tools ? (u = n.tools.map((d) => d.id === i ? a : d), n.toolChoiceToolName && n.toolChoiceToolName === (l == null ? void 0 : l.name) && a.name !== (l == null ? void 0 : l.name) && (s.toolChoiceToolName = a.name)) : u = [...n.tools || [], a], u.sort((d, c) => d.name.localeCompare(c.name)), s.tools = u, r(s), s;
  } else
    return null;
}, $a = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const l = t.tools.filter((a) => a.id !== r), o = { ...t, tools: l };
  return n(o), o;
}, ur = async (e, t, n, r, i) => {
  const l = n.knowledgebaseTools || [], o = i ? l.find((u) => u.id === i) : void 0, a = await e.ui.dialogs.showModal(
    {
      title: o ? "Edit knowledge base" : "Add knowledge base",
      contentSize: { height: 541, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "knowledgebaseToolEdit",
      queryParams: {
        tool: o ? encodeURIComponent(JSON.stringify(o)) : "",
        agent: n ? encodeURIComponent(JSON.stringify(n)) : ""
      }
    }
  );
  if (a !== null) {
    const u = a;
    let s;
    i ? s = l.map((c) => c.id === i ? u : c) : s = [...l, u], s.sort((c, h) => c.name.localeCompare(h.name));
    const d = { ...n, knowledgebaseTools: s };
    return r(d), d;
  }
  return null;
}, Ba = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to remove this knowledge base from the agent?"
  }) === !1)
    return;
  const o = (t.knowledgebaseTools || []).filter((u) => u.id !== r), a = { ...t, knowledgebaseTools: o };
  return n(a), a;
}, Oa = async (e, t, n) => {
  const r = {
    ...e,
    toolChoice: n ?? void 0,
    // Clear toolChoiceToolName if toolChoice is not "Tool"
    toolChoiceToolName: n === ze.Tool ? e.toolChoiceToolName : void 0
  };
  return t(r), r;
}, za = async (e, t, n) => {
  if (e.toolChoice !== ze.Tool)
    return;
  const r = { ...e, toolChoiceToolName: n ?? void 0 };
  return t(r), r;
}, _a = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Va = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Na = Object.defineProperty, Ha = (e, t) => Na(e, "name", { value: t, configurable: !0 });
const Ri = Ha((e) => p.jsx(Ae, { light: Va, dark: _a, ...e }), "AppSelectorNoVersionIcon"), qa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ua = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Wa = Object.defineProperty, Za = (e, t) => Wa(e, "name", { value: t, configurable: !0 });
const ji = Za((e) => p.jsx(Ae, { light: Ua, dark: qa, ...e }), "EditIcon"), Ka = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ga = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Xa = Object.defineProperty, Ya = (e, t) => Xa(e, "name", { value: t, configurable: !0 });
const Fi = Ya((e) => p.jsx(Ae, { light: Ga, dark: Ka, ...e }), "PageIcon"), Qa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Ja = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var es = Object.defineProperty, ts = (e, t) => es(e, "name", { value: t, configurable: !0 });
const Mi = ts((e) => p.jsx(Ae, { light: Ja, dark: Qa, ...e }), "SyncIcon"), ns = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", rs = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var is = Object.defineProperty, ls = (e, t) => is(e, "name", { value: t, configurable: !0 });
const os = ls((e) => p.jsx(Ae, { light: rs, dark: ns, ...e }), "CheckCheckboxIcon");
var as = Object.defineProperty, ss = (e, t) => as(e, "name", { value: t, configurable: !0 });
const $i = ss(({ children: e, ...t }) => p.jsx(cs, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => p.jsxs(p.Fragment, { children: [p.jsxs(Bi, { $isSelected: r, $isIndeterminate: n, children: [n && p.jsx(us, {}), r && !n && p.jsx(os, {})] }), e] }) }), "Checkbox"), Bi = U.div`
    width: ${ee.size12};
    height: ${ee.size12};
    margin: ${ee.spacing2};
    border-radius: ${ee.borderRadiusXs};
    border: ${ee.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: n }) => t && !n ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, us = U.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, cs = U(ia)`
    cursor: pointer;
    display: flex;
    height: ${ee.size16};
    gap: ${ee.spacing4};
    line-height: ${ee.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${Bi} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${ho}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, ds = U($i)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, fs = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  knowledgebaseToolValidations: l
}) => {
  const [o, a] = L.useState([]), u = L.useMemo(() => (e.knowledgebaseTools || []).map((y, E) => ({
    id: y.id ?? String(E),
    enabled: y.enabled,
    name: y.name,
    description: y.description || "",
    tool: y.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: s, sortProps: d } = Si(u), c = L.useCallback(
    (b) => {
      const y = l.get(b);
      return y === "invalid" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(gi, { title: "Tool invalid" }) }) : y === "syncing" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(Mi, { title: "Validating..." }) }) : null;
    },
    [l]
  ), h = L.useCallback(async () => {
    const b = await ur(
      t,
      n,
      e,
      r
    );
    b && i(b);
  }, [t, n, e, r, i]), f = L.useCallback(async () => {
    const b = e.knowledgebaseTools || [];
    if (o.length === 0 || b.length === 0)
      return;
    const y = o[0], E = await ur(
      t,
      n,
      e,
      r,
      y
    );
    E && i(E);
  }, [t, n, e, r, i, o]), m = L.useCallback(async () => {
    const b = e.knowledgebaseTools || [];
    if (o.length === 0 || b.length === 0)
      return;
    const y = o[0], E = await Ba(
      t,
      e,
      r,
      y
    );
    E && i(E);
  }, [e, r, i, o]), v = L.useCallback(
    async (b, y) => {
      const E = e.knowledgebaseTools || [];
      if (E.length === 0)
        return;
      const k = E.map(
        (T) => (T.id ?? "") === b ? { ...T, enabled: y } : T
      ), A = { ...e, knowledgebaseTools: k };
      r(A), i(A);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, r, i]
  );
  return /* @__PURE__ */ p.jsx(_e, { label: "Knowledge bases", children: /* @__PURE__ */ p.jsx(
    Ei,
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
      data: s.map((b) => [
        { cellContent: c(b.id) },
        {
          cellContent: /* @__PURE__ */ p.jsx(
            ds,
            {
              "aria-label": "Enabled",
              isSelected: b.enabled,
              onChange: (y) => v(b.id, y)
            }
          )
        },
        { cellContent: b.name, tooltipText: b.name },
        { cellContent: b.description, tooltipText: b.description },
        {
          cellContent: /* @__PURE__ */ p.jsx(ki, { icon: Mo, text: b.tool }),
          tooltipText: b.tool
        }
      ]),
      rowKey: (b, y) => {
        var E;
        return ((E = s[y]) == null ? void 0 : E.id) ?? String(y);
      },
      rowOpacity: (b) => {
        var y;
        return (y = s[b]) != null && y.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: o,
      onDoubleClick: f,
      onSelectionChange: a,
      ...d,
      toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(
          Je,
          {
            icon: /* @__PURE__ */ p.jsx(Fi, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: h
          }
        ),
        /* @__PURE__ */ p.jsx(
          Je,
          {
            icon: /* @__PURE__ */ p.jsx(ji, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: f,
            tooltip: "Edit selected knowledge base",
            isDisabled: o.length === 0
          }
        ),
        /* @__PURE__ */ p.jsx(
          Je,
          {
            icon: /* @__PURE__ */ p.jsx(Ri, {}),
            label: "Delete",
            "aria-label": "Remove selected knowledge base from agent",
            onPress: m,
            tooltip: "Remove selected knowledge base from agent",
            isDisabled: o.length === 0
          }
        )
      ] })
    }
  ) });
}, hs = po`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, ps = U.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, Xt = U.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${hs} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, Oi = () => /* @__PURE__ */ p.jsxs(ps, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ p.jsx(Xt, { delay: "0s" }),
  /* @__PURE__ */ p.jsx(Xt, { delay: "0.2s" }),
  /* @__PURE__ */ p.jsx(Xt, { delay: "0.4s" })
] });
function ms(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const gs = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, xs = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ys = {};
function cr(e, t) {
  return (ys.jsx ? xs : gs).test(e);
}
const bs = /[ \t\n\f\r]/g;
function ks(e) {
  return typeof e == "object" ? e.type === "text" ? dr(e.value) : !1 : dr(e);
}
function dr(e) {
  return e.replace(bs, "") === "";
}
class vt {
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
vt.prototype.normal = {};
vt.prototype.property = {};
vt.prototype.space = void 0;
function zi(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new vt(n, r, t);
}
function kn(e) {
  return e.toLowerCase();
}
class he {
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
he.prototype.attribute = "";
he.prototype.booleanish = !1;
he.prototype.boolean = !1;
he.prototype.commaOrSpaceSeparated = !1;
he.prototype.commaSeparated = !1;
he.prototype.defined = !1;
he.prototype.mustUseProperty = !1;
he.prototype.number = !1;
he.prototype.overloadedBoolean = !1;
he.prototype.property = "";
he.prototype.spaceSeparated = !1;
he.prototype.space = void 0;
let ws = 0;
const H = Ze(), ne = Ze(), wn = Ze(), I = Ze(), J = Ze(), et = Ze(), ye = Ze();
function Ze() {
  return 2 ** ++ws;
}
const Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: H,
  booleanish: ne,
  commaOrSpaceSeparated: ye,
  commaSeparated: et,
  number: I,
  overloadedBoolean: wn,
  spaceSeparated: J
}, Symbol.toStringTag, { value: "Module" })), Yt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Cn)
);
class zn extends he {
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
    if (super(t, n), fr(this, "space", i), typeof r == "number")
      for (; ++l < Yt.length; ) {
        const o = Yt[l];
        fr(this, Yt[l], (r & Cn[o]) === Cn[o]);
      }
  }
}
zn.prototype.defined = !0;
function fr(e, t, n) {
  n && (e[t] = n);
}
function rt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new zn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[kn(r)] = r, n[kn(l.attribute)] = r;
  }
  return new vt(t, n, e.space);
}
const _i = rt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ne,
    ariaAutoComplete: null,
    ariaBusy: ne,
    ariaChecked: ne,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: J,
    ariaCurrent: null,
    ariaDescribedBy: J,
    ariaDetails: null,
    ariaDisabled: ne,
    ariaDropEffect: J,
    ariaErrorMessage: null,
    ariaExpanded: ne,
    ariaFlowTo: J,
    ariaGrabbed: ne,
    ariaHasPopup: null,
    ariaHidden: ne,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: J,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: ne,
    ariaMultiLine: ne,
    ariaMultiSelectable: ne,
    ariaOrientation: null,
    ariaOwns: J,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: ne,
    ariaReadOnly: ne,
    ariaRelevant: null,
    ariaRequired: ne,
    ariaRoleDescription: J,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: ne,
    ariaSetSize: I,
    ariaSort: null,
    ariaValueMax: I,
    ariaValueMin: I,
    ariaValueNow: I,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Vi(e, t) {
  return t in e ? e[t] : t;
}
function Ni(e, t) {
  return Vi(e, t.toLowerCase());
}
const Cs = rt({
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
    accept: et,
    acceptCharset: J,
    accessKey: J,
    action: null,
    allow: null,
    allowFullScreen: H,
    allowPaymentRequest: H,
    allowUserMedia: H,
    alt: null,
    as: null,
    async: H,
    autoCapitalize: null,
    autoComplete: J,
    autoFocus: H,
    autoPlay: H,
    blocking: J,
    capture: null,
    charSet: null,
    checked: H,
    cite: null,
    className: J,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: ne,
    controls: H,
    controlsList: J,
    coords: I | et,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: H,
    defer: H,
    dir: null,
    dirName: null,
    disabled: H,
    download: wn,
    draggable: ne,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: H,
    formTarget: null,
    headers: J,
    height: I,
    hidden: wn,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: J,
    httpEquiv: J,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: H,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: H,
    itemId: null,
    itemProp: J,
    itemRef: J,
    itemScope: H,
    itemType: J,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: H,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
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
    optimum: I,
    pattern: null,
    ping: J,
    placeholder: null,
    playsInline: H,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: H,
    referrerPolicy: null,
    rel: J,
    required: H,
    reversed: H,
    rows: I,
    rowSpan: I,
    sandbox: J,
    scope: null,
    scoped: H,
    seamless: H,
    selected: H,
    shadowRootClonable: H,
    shadowRootDelegatesFocus: H,
    shadowRootMode: null,
    shape: null,
    size: I,
    sizes: null,
    slot: null,
    span: I,
    spellCheck: ne,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: I,
    step: null,
    style: null,
    tabIndex: I,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: H,
    useMap: null,
    value: ne,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: J,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: I,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: I,
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
    hSpace: I,
    // `<img>` and `<object>`
    leftMargin: I,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: I,
    // `<body>`
    marginWidth: I,
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
    rightMargin: I,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ne,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: I,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: I,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: H,
    disableRemotePlayback: H,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Ni
}), vs = rt({
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
    about: ye,
    accentHeight: I,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: I,
    amplitude: I,
    arabicForm: null,
    ascent: I,
    attributeName: null,
    attributeType: null,
    azimuth: I,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: I,
    by: null,
    calcMode: null,
    capHeight: I,
    className: J,
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
    descent: I,
    diffuseConstant: I,
    direction: null,
    display: null,
    dur: null,
    divisor: I,
    dominantBaseline: null,
    download: H,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: I,
    enableBackground: null,
    end: null,
    event: null,
    exponent: I,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: I,
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
    g1: et,
    g2: et,
    glyphName: et,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: I,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: I,
    horizOriginX: I,
    horizOriginY: I,
    id: null,
    ideographic: I,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: I,
    k: I,
    k1: I,
    k2: I,
    k3: I,
    k4: I,
    kernelMatrix: ye,
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
    limitingConeAngle: I,
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
    mediaSize: I,
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
    overlinePosition: I,
    overlineThickness: I,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: I,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: J,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: I,
    pointsAtY: I,
    pointsAtZ: I,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: ye,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ye,
    rev: ye,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ye,
    requiredFeatures: ye,
    requiredFonts: ye,
    requiredFormats: ye,
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
    specularConstant: I,
    specularExponent: I,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: I,
    strikethroughThickness: I,
    string: null,
    stroke: null,
    strokeDashArray: ye,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: I,
    strokeOpacity: I,
    strokeWidth: null,
    style: null,
    surfaceScale: I,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ye,
    tabIndex: I,
    tableValues: null,
    target: null,
    targetX: I,
    targetY: I,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: ye,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: I,
    underlineThickness: I,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: I,
    values: null,
    vAlphabetic: I,
    vMathematical: I,
    vectorEffect: null,
    vHanging: I,
    vIdeographic: I,
    version: null,
    vertAdvY: I,
    vertOriginX: I,
    vertOriginY: I,
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
    xHeight: I,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Vi
}), Hi = rt({
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
}), qi = rt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Ni
}), Ui = rt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Ss = {
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
}, Es = /[A-Z]/g, hr = /-[a-z]/g, Ts = /^data[-\w.:]+$/i;
function Is(e, t) {
  const n = kn(t);
  let r = t, i = he;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ts.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(hr, Ps);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!hr.test(l)) {
        let o = l.replace(Es, As);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = zn;
  }
  return new i(r, t);
}
function As(e) {
  return "-" + e.toLowerCase();
}
function Ps(e) {
  return e.charAt(1).toUpperCase();
}
const Ls = zi([_i, Cs, Hi, qi, Ui], "html"), _n = zi([_i, vs, Hi, qi, Ui], "svg");
function Ds(e) {
  return e.join(" ").trim();
}
var Xe = {}, Qt, pr;
function Rs() {
  if (pr) return Qt;
  pr = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", d = "*", c = "", h = "comment", f = "declaration";
  function m(b, y) {
    if (typeof b != "string")
      throw new TypeError("First argument must be a string");
    if (!b) return [];
    y = y || {};
    var E = 1, k = 1;
    function A($) {
      var D = $.match(t);
      D && (E += D.length);
      var W = $.lastIndexOf(u);
      k = ~W ? $.length - W : k + $.length;
    }
    function T() {
      var $ = { line: E, column: k };
      return function(D) {
        return D.position = new C($), M(), D;
      };
    }
    function C($) {
      this.start = $, this.end = { line: E, column: k }, this.source = y.source;
    }
    C.prototype.content = b;
    function O($) {
      var D = new Error(
        y.source + ":" + E + ":" + k + ": " + $
      );
      if (D.reason = $, D.filename = y.source, D.line = E, D.column = k, D.source = b, !y.silent) throw D;
    }
    function j($) {
      var D = $.exec(b);
      if (D) {
        var W = D[0];
        return A(W), b = b.slice(W.length), D;
      }
    }
    function M() {
      j(n);
    }
    function w($) {
      var D;
      for ($ = $ || []; D = R(); )
        D !== !1 && $.push(D);
      return $;
    }
    function R() {
      var $ = T();
      if (!(s != b.charAt(0) || d != b.charAt(1))) {
        for (var D = 2; c != b.charAt(D) && (d != b.charAt(D) || s != b.charAt(D + 1)); )
          ++D;
        if (D += 2, c === b.charAt(D - 1))
          return O("End of comment missing");
        var W = b.slice(2, D - 2);
        return k += 2, A(W), b = b.slice(D), k += 2, $({
          type: h,
          comment: W
        });
      }
    }
    function F() {
      var $ = T(), D = j(r);
      if (D) {
        if (R(), !j(i)) return O("property missing ':'");
        var W = j(l), te = $({
          type: f,
          property: v(D[0].replace(e, c)),
          value: W ? v(W[0].replace(e, c)) : c
        });
        return j(o), te;
      }
    }
    function V() {
      var $ = [];
      w($);
      for (var D; D = F(); )
        D !== !1 && ($.push(D), w($));
      return $;
    }
    return M(), V();
  }
  function v(b) {
    return b ? b.replace(a, c) : c;
  }
  return Qt = m, Qt;
}
var mr;
function js() {
  if (mr) return Xe;
  mr = 1;
  var e = Xe && Xe.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.default = n;
  const t = e(Rs());
  function n(r, i) {
    let l = null;
    if (!r || typeof r != "string")
      return l;
    const o = (0, t.default)(r), a = typeof i == "function";
    return o.forEach((u) => {
      if (u.type !== "declaration")
        return;
      const { property: s, value: d } = u;
      a ? i(s, d, u) : d && (l = l || {}, l[s] = d);
    }), l;
  }
  return Xe;
}
var ft = {}, gr;
function Fs() {
  if (gr) return ft;
  gr = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(s) {
    return !s || n.test(s) || e.test(s);
  }, o = function(s, d) {
    return d.toUpperCase();
  }, a = function(s, d) {
    return "".concat(d, "-");
  }, u = function(s, d) {
    return d === void 0 && (d = {}), l(s) ? s : (s = s.toLowerCase(), d.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, o));
  };
  return ft.camelCase = u, ft;
}
var ht, xr;
function Ms() {
  if (xr) return ht;
  xr = 1;
  var e = ht && ht.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(js()), n = Fs();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (o[(0, n.camelCase)(a, l)] = u);
    }), o;
  }
  return r.default = r, ht = r, ht;
}
var $s = Ms();
const Bs = /* @__PURE__ */ xi($s), Wi = Zi("end"), Vn = Zi("start");
function Zi(e) {
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
function Ki(e) {
  const t = Vn(e), n = Wi(e);
  if (t && n)
    return { start: t, end: n };
}
function gt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? yr(e.position) : "start" in e || "end" in e ? yr(e) : "line" in e || "column" in e ? vn(e) : "";
}
function vn(e) {
  return br(e && e.line) + ":" + br(e && e.column);
}
function yr(e) {
  return vn(e && e.start) + "-" + vn(e && e.end);
}
function br(e) {
  return e && typeof e == "number" ? e : 1;
}
class ae extends Error {
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
      const u = r.indexOf(":");
      u === -1 ? l.ruleId = r : (l.source = r.slice(0, u), l.ruleId = r.slice(u + 1));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const u = l.ancestors[l.ancestors.length - 1];
      u && (l.place = u.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = gt(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
ae.prototype.file = "";
ae.prototype.name = "";
ae.prototype.reason = "";
ae.prototype.message = "";
ae.prototype.stack = "";
ae.prototype.column = void 0;
ae.prototype.line = void 0;
ae.prototype.ancestors = void 0;
ae.prototype.cause = void 0;
ae.prototype.fatal = void 0;
ae.prototype.place = void 0;
ae.prototype.ruleId = void 0;
ae.prototype.source = void 0;
const Nn = {}.hasOwnProperty, Os = /* @__PURE__ */ new Map(), zs = /[A-Z]/g, _s = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Vs = /* @__PURE__ */ new Set(["td", "th"]), Gi = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Ns(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Xs(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Gs(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? _n : Ls,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = Xi(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function Xi(e, t, n) {
  if (t.type === "element")
    return Hs(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return qs(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Ws(e, t, n);
  if (t.type === "mdxjsEsm")
    return Us(e, t);
  if (t.type === "root")
    return Zs(e, t, n);
  if (t.type === "text")
    return Ks(e, t);
}
function Hs(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = _n, e.schema = i), e.ancestors.push(t);
  const l = Qi(e, t.tagName, !1), o = Ys(e, t);
  let a = qn(e, t);
  return _s.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !ks(u) : !0;
  })), Yi(e, o, l, t), Hn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function qs(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  kt(e, t.position);
}
function Us(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  kt(e, t.position);
}
function Ws(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = _n, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : Qi(e, t.name, !0), o = Qs(e, t), a = qn(e, t);
  return Yi(e, o, l, t), Hn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function Zs(e, t, n) {
  const r = {};
  return Hn(r, qn(e, t)), e.create(t, e.Fragment, r, n);
}
function Ks(e, t) {
  return t.value;
}
function Yi(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Hn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Gs(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const s = Array.isArray(o.children) ? n : t;
    return a ? s(l, o, a) : s(l, o);
  }
}
function Xs(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), u = Vn(r);
    return t(
      i,
      l,
      o,
      a,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function Ys(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Nn.call(t.properties, i)) {
      const l = Js(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && Vs.has(t.tagName) ? r = a : n[o] = a;
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
function Qs(e, t) {
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
        kt(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          kt(e, t.position);
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
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Os;
  for (; ++r < t.children.length; ) {
    const l = t.children[r];
    let o;
    if (e.passKeys) {
      const u = l.type === "element" ? l.tagName : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement" ? l.name : void 0;
      if (u) {
        const s = i.get(u) || 0;
        o = u + "-" + s, i.set(u, s + 1);
      }
    }
    const a = Xi(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Js(e, t, n) {
  const r = Is(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? ms(n) : Ds(n)), r.property === "style") {
      let i = typeof n == "object" ? n : eu(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = tu(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Ss[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function eu(e, t) {
  try {
    return Bs(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new ae("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Gi + "#cannot-parse-style-attribute", i;
  }
}
function Qi(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = cr(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = cr(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Nn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  kt(e);
}
function kt(e, t) {
  const n = new ae(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Gi + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function tu(e) {
  const t = {};
  let n;
  for (n in e)
    Nn.call(e, n) && (t[nu(n)] = e[n]);
  return t;
}
function nu(e) {
  let t = e.replace(zs, ru);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function ru(e) {
  return "-" + e.toLowerCase();
}
const Jt = {
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
}, iu = {};
function Un(e, t) {
  const n = iu, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ji(e, r, i);
}
function Ji(e, t, n) {
  if (lu(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return kr(e.children, t, n);
  }
  return Array.isArray(e) ? kr(e, t, n) : "";
}
function kr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ji(e[i], t, n);
  return r.join("");
}
function lu(e) {
  return !!(e && typeof e == "object");
}
const wr = document.createElement("i");
function Wn(e) {
  const t = "&" + e + ";";
  wr.innerHTML = t;
  const n = wr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function be(e, t, n, r) {
  const i = e.length;
  let l = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4;
}
function ke(e, t) {
  return e.length > 0 ? (be(e, e.length, 0, t), e) : t;
}
const Cr = {}.hasOwnProperty;
function el(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    ou(t, e[n]);
  return t;
}
function ou(e, t) {
  let n;
  for (n in t) {
    const i = (Cr.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        Cr.call(i, o) || (i[o] = []);
        const a = l[o];
        au(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function au(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  be(e, 0, 0, r);
}
function tl(e, t) {
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
function Ee(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ce = Ve(/[A-Za-z]/), oe = Ve(/[\dA-Za-z]/), su = Ve(/[#-'*+\--9=?A-Z^-~]/);
function $t(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Sn = Ve(/\d/), uu = Ve(/[\dA-Fa-f]/), cu = Ve(/[!-/:-@[-`{-~]/);
function _(e) {
  return e !== null && e < -2;
}
function Q(e) {
  return e !== null && (e < 0 || e === 32);
}
function q(e) {
  return e === -2 || e === -1 || e === 32;
}
const _t = Ve(new RegExp("\\p{P}|\\p{S}", "u")), We = Ve(/\s/);
function Ve(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function it(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let o = "";
    if (l === 37 && oe(e.charCodeAt(n + 1)) && oe(e.charCodeAt(n + 2)))
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
function X(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(u) {
    return q(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return q(u) && l++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const du = {
  tokenize: fu
};
function fu(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), X(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), l(a);
  }
  function l(a) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, o(a);
  }
  function o(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return _(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const hu = {
  tokenize: pu
}, vr = {
  tokenize: mu
};
function pu(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(k) {
    if (r < n.length) {
      const A = n[r];
      return t.containerState = A[1], e.attempt(A[0].continuation, u, s)(k);
    }
    return s(k);
  }
  function u(k) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && E();
      const A = t.events.length;
      let T = A, C;
      for (; T--; )
        if (t.events[T][0] === "exit" && t.events[T][1].type === "chunkFlow") {
          C = t.events[T][1].end;
          break;
        }
      y(r);
      let O = A;
      for (; O < t.events.length; )
        t.events[O][1].end = {
          ...C
        }, O++;
      return be(t.events, T + 1, 0, t.events.slice(A)), t.events.length = O, s(k);
    }
    return a(k);
  }
  function s(k) {
    if (r === n.length) {
      if (!i)
        return h(k);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(k);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(vr, d, c)(k);
  }
  function d(k) {
    return i && E(), y(r), h(k);
  }
  function c(k) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(k);
  }
  function h(k) {
    return t.containerState = {}, e.attempt(vr, f, m)(k);
  }
  function f(k) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(k);
  }
  function m(k) {
    if (k === null) {
      i && E(), y(0), e.consume(k);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), v(k);
  }
  function v(k) {
    if (k === null) {
      b(e.exit("chunkFlow"), !0), y(0), e.consume(k);
      return;
    }
    return _(k) ? (e.consume(k), b(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(k), v);
  }
  function b(k, A) {
    const T = t.sliceStream(k);
    if (A && T.push(null), k.previous = l, l && (l.next = k), l = k, i.defineSkip(k.start), i.write(T), t.parser.lazy[k.start.line]) {
      let C = i.events.length;
      for (; C--; )
        if (
          // The token starts before the line ending…
          i.events[C][1].start.offset < o && // …and either is not ended yet…
          (!i.events[C][1].end || // …or ends after it.
          i.events[C][1].end.offset > o)
        )
          return;
      const O = t.events.length;
      let j = O, M, w;
      for (; j--; )
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          if (M) {
            w = t.events[j][1].end;
            break;
          }
          M = !0;
        }
      for (y(r), C = O; C < t.events.length; )
        t.events[C][1].end = {
          ...w
        }, C++;
      be(t.events, j + 1, 0, t.events.slice(O)), t.events.length = C;
    }
  }
  function y(k) {
    let A = n.length;
    for (; A-- > k; ) {
      const T = n[A];
      t.containerState = T[1], T[0].exit.call(t, e);
    }
    n.length = k;
  }
  function E() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function mu(e, t, n) {
  return X(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function tt(e) {
  if (e === null || Q(e) || We(e))
    return 1;
  if (_t(e))
    return 2;
}
function Vt(e, t, n) {
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
  resolveAll: gu,
  tokenize: xu
};
function gu(e, t) {
  let n = -1, r, i, l, o, a, u, s, d;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, h = {
            ...e[n][1].start
          };
          Sr(c, -u), Sr(h, u), o = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...e[r][1].end
            }
          }, a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: h
          }, l = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
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
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = ke(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = ke(s, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), s = ke(s, Vt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = ke(s, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (d = 2, s = ke(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : d = 0, be(e, r - 1, n - r + 3, s), n = r + s.length - d - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function xu(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = tt(r);
  let l;
  return o;
  function o(u) {
    return l = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === l)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), d = tt(u), c = !d || d === 2 && i || n.includes(u), h = !i || i === 2 && d || n.includes(r);
    return s._open = !!(l === 42 ? c : c && (i || !h)), s._close = !!(l === 42 ? h : h && (d || !c)), t(u);
  }
}
function Sr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const yu = {
  name: "autolink",
  tokenize: bu
};
function bu(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(f) {
    return ce(f) ? (e.consume(f), o) : f === 64 ? n(f) : s(f);
  }
  function o(f) {
    return f === 43 || f === 45 || f === 46 || oe(f) ? (r = 1, a(f)) : s(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, u) : (f === 43 || f === 45 || f === 46 || oe(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, s(f));
  }
  function u(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || $t(f) ? n(f) : (e.consume(f), u);
  }
  function s(f) {
    return f === 64 ? (e.consume(f), d) : su(f) ? (e.consume(f), s) : n(f);
  }
  function d(f) {
    return oe(f) ? c(f) : n(f);
  }
  function c(f) {
    return f === 46 ? (e.consume(f), r = 0, d) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(f);
  }
  function h(f) {
    if ((f === 45 || oe(f)) && r++ < 63) {
      const m = f === 45 ? h : c;
      return e.consume(f), m;
    }
    return n(f);
  }
}
const St = {
  partial: !0,
  tokenize: ku
};
function ku(e, t, n) {
  return r;
  function r(l) {
    return q(l) ? X(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || _(l) ? t(l) : n(l);
  }
}
const nl = {
  continuation: {
    tokenize: Cu
  },
  exit: vu,
  name: "blockQuote",
  tokenize: wu
};
function wu(e, t, n) {
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
function Cu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return q(o) ? X(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(nl, t, n)(o);
  }
}
function vu(e) {
  e.exit("blockQuote");
}
const rl = {
  name: "characterEscape",
  tokenize: Su
};
function Su(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return cu(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const il = {
  name: "characterReference",
  tokenize: Eu
};
function Eu(e, t, n) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), u;
  }
  function u(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), l = 31, o = oe, d(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = uu, d) : (e.enter("characterReferenceValue"), l = 7, o = Sn, d(c));
  }
  function d(c) {
    if (c === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return o === oe && !Wn(r.sliceSerialize(h)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(c) && i++ < l ? (e.consume(c), d) : n(c);
  }
}
const Er = {
  partial: !0,
  tokenize: Iu
}, Tr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Tu
};
function Tu(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: T
  };
  let l = 0, o = 0, a;
  return u;
  function u(C) {
    return s(C);
  }
  function s(C) {
    const O = r.events[r.events.length - 1];
    return l = O && O[1].type === "linePrefix" ? O[2].sliceSerialize(O[1], !0).length : 0, a = C, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(C);
  }
  function d(C) {
    return C === a ? (o++, e.consume(C), d) : o < 3 ? n(C) : (e.exit("codeFencedFenceSequence"), q(C) ? X(e, c, "whitespace")(C) : c(C));
  }
  function c(C) {
    return C === null || _(C) ? (e.exit("codeFencedFence"), r.interrupt ? t(C) : e.check(Er, v, A)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(C));
  }
  function h(C) {
    return C === null || _(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(C)) : q(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), X(e, f, "whitespace")(C)) : C === 96 && C === a ? n(C) : (e.consume(C), h);
  }
  function f(C) {
    return C === null || _(C) ? c(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(C));
  }
  function m(C) {
    return C === null || _(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(C)) : C === 96 && C === a ? n(C) : (e.consume(C), m);
  }
  function v(C) {
    return e.attempt(i, A, b)(C);
  }
  function b(C) {
    return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), y;
  }
  function y(C) {
    return l > 0 && q(C) ? X(e, E, "linePrefix", l + 1)(C) : E(C);
  }
  function E(C) {
    return C === null || _(C) ? e.check(Er, v, A)(C) : (e.enter("codeFlowValue"), k(C));
  }
  function k(C) {
    return C === null || _(C) ? (e.exit("codeFlowValue"), E(C)) : (e.consume(C), k);
  }
  function A(C) {
    return e.exit("codeFenced"), t(C);
  }
  function T(C, O, j) {
    let M = 0;
    return w;
    function w(D) {
      return C.enter("lineEnding"), C.consume(D), C.exit("lineEnding"), R;
    }
    function R(D) {
      return C.enter("codeFencedFence"), q(D) ? X(C, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(D) : F(D);
    }
    function F(D) {
      return D === a ? (C.enter("codeFencedFenceSequence"), V(D)) : j(D);
    }
    function V(D) {
      return D === a ? (M++, C.consume(D), V) : M >= o ? (C.exit("codeFencedFenceSequence"), q(D) ? X(C, $, "whitespace")(D) : $(D)) : j(D);
    }
    function $(D) {
      return D === null || _(D) ? (C.exit("codeFencedFence"), O(D)) : j(D);
    }
  }
}
function Iu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const en = {
  name: "codeIndented",
  tokenize: Pu
}, Au = {
  partial: !0,
  tokenize: Lu
};
function Pu(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), X(e, l, "linePrefix", 5)(s);
  }
  function l(s) {
    const d = r.events[r.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? o(s) : n(s);
  }
  function o(s) {
    return s === null ? u(s) : _(s) ? e.attempt(Au, o, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || _(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Lu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : _(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : X(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : _(o) ? i(o) : n(o);
  }
}
const Du = {
  name: "codeText",
  previous: ju,
  resolve: Ru,
  tokenize: Fu
};
function Ru(e) {
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
function ju(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Fu(e, t, n) {
  let r = 0, i, l;
  return o;
  function o(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), u(c));
  }
  function u(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), u) : c === 96 ? (l = e.enter("codeTextSequence"), i = 0, d(c)) : _(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || _(c) ? (e.exit("codeTextData"), u(c)) : (e.consume(c), s);
  }
  function d(c) {
    return c === 96 ? (e.consume(c), i++, d) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (l.type = "codeTextData", s(c));
  }
}
class Mu {
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
    return r && pt(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), pt(this.left, t);
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
    this.setCursor(0), pt(this.right, t.reverse());
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
        pt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        pt(this.left, n.reverse());
      }
  }
}
function pt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function ll(e) {
  const t = {};
  let n = -1, r, i, l, o, a, u, s;
  const d = new Mu(e);
  for (; ++n < d.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = d.get(n), n && r[1].type === "chunkFlow" && d.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, l = 0, l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2), l < u.length && u[l][1].type === "content"))
      for (; ++l < u.length && u[l][1].type !== "content"; )
        u[l][1].type === "chunkText" && (u[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, $u(d, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (l = n, i = void 0; l--; )
        if (o = d.get(l), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (d.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = l);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...d.get(i)[1].start
      }, a = d.slice(i, n), a.unshift(r), d.splice(i, n - i + 1, a));
    }
  }
  return be(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !s;
}
function $u(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, u = [], s = {};
  let d, c, h = -1, f = n, m = 0, v = 0;
  const b = [v];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    l.push(i), f._tokenizer || (d = r.sliceStream(f), f.next || d.push(null), c && o.defineSkip(f.start), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(d), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = n; ++h < a.length; )
    // Find a void token that includes a break.
    a[h][0] === "exit" && a[h - 1][0] === "enter" && a[h][1].type === a[h - 1][1].type && a[h][1].start.line !== a[h][1].end.line && (v = h + 1, b.push(v), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (o.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : b.pop(), h = b.length; h--; ) {
    const y = a.slice(b[h], b[h + 1]), E = l.pop();
    u.push([E, E + y.length - 1]), e.splice(E, 2, y);
  }
  for (u.reverse(), h = -1; ++h < u.length; )
    s[m + u[h][0]] = m + u[h][1], m += u[h][1] - u[h][0] - 1;
  return s;
}
const Bu = {
  resolve: zu,
  tokenize: _u
}, Ou = {
  partial: !0,
  tokenize: Vu
};
function zu(e) {
  return ll(e), e;
}
function _u(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : _(a) ? e.check(Ou, o, l)(a) : (e.consume(a), i);
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
function Vu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), X(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || _(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function ol(e, t, n, r, i, l, o, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let d = 0;
  return c;
  function c(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), h) : y === null || y === 32 || y === 41 || $t(y) ? n(y) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(y));
  }
  function h(y) {
    return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(y));
  }
  function f(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), h(y)) : y === null || y === 60 || _(y) ? n(y) : (e.consume(y), y === 92 ? m : f);
  }
  function m(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), f) : f(y);
  }
  function v(y) {
    return !d && (y === null || y === 41 || Q(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(y)) : d < s && y === 40 ? (e.consume(y), d++, v) : y === 41 ? (e.consume(y), d--, v) : y === null || y === 32 || y === 40 || $t(y) ? n(y) : (e.consume(y), y === 92 ? b : v);
  }
  function b(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), v) : v(y);
  }
}
function al(e, t, n, r, i, l) {
  const o = this;
  let a = 0, u;
  return s;
  function s(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(l), d;
  }
  function d(f) {
    return a > 999 || f === null || f === 91 || f === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(f) : f === 93 ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : _(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), d) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || _(f) || a++ > 999 ? (e.exit("chunkString"), d(f)) : (e.consume(f), u || (u = !q(f)), f === 92 ? h : c);
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
  }
}
function sl(e, t, n, r, i, l) {
  let o;
  return a;
  function a(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, u) : n(h);
  }
  function u(h) {
    return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(l), s(h));
  }
  function s(h) {
    return h === o ? (e.exit(l), u(o)) : h === null ? n(h) : _(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), X(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), d(h));
  }
  function d(h) {
    return h === o || h === null || _(h) ? (e.exit("chunkString"), s(h)) : (e.consume(h), h === 92 ? c : d);
  }
  function c(h) {
    return h === o || h === 92 ? (e.consume(h), d) : d(h);
  }
}
function xt(e, t) {
  let n;
  return r;
  function r(i) {
    return _(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? X(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Nu = {
  name: "definition",
  tokenize: qu
}, Hu = {
  partial: !0,
  tokenize: Uu
};
function qu(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(f) {
    return e.enter("definition"), o(f);
  }
  function o(f) {
    return al.call(
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
    return i = Ee(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), u) : n(f);
  }
  function u(f) {
    return Q(f) ? xt(e, s)(f) : s(f);
  }
  function s(f) {
    return ol(
      e,
      d,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(f);
  }
  function d(f) {
    return e.attempt(Hu, c, c)(f);
  }
  function c(f) {
    return q(f) ? X(e, h, "whitespace")(f) : h(f);
  }
  function h(f) {
    return f === null || _(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function Uu(e, t, n) {
  return r;
  function r(a) {
    return Q(a) ? xt(e, i)(a) : n(a);
  }
  function i(a) {
    return sl(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return q(a) ? X(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || _(a) ? t(a) : n(a);
  }
}
const Wu = {
  name: "hardBreakEscape",
  tokenize: Zu
};
function Zu(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return _(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const Ku = {
  name: "headingAtx",
  resolve: Gu,
  tokenize: Xu
};
function Gu(e, t) {
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
  }, be(e, r, n - r + 1, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]])), e;
}
function Xu(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("atxHeading"), l(d);
  }
  function l(d) {
    return e.enter("atxHeadingSequence"), o(d);
  }
  function o(d) {
    return d === 35 && r++ < 6 ? (e.consume(d), o) : d === null || Q(d) ? (e.exit("atxHeadingSequence"), a(d)) : n(d);
  }
  function a(d) {
    return d === 35 ? (e.enter("atxHeadingSequence"), u(d)) : d === null || _(d) ? (e.exit("atxHeading"), t(d)) : q(d) ? X(e, a, "whitespace")(d) : (e.enter("atxHeadingText"), s(d));
  }
  function u(d) {
    return d === 35 ? (e.consume(d), u) : (e.exit("atxHeadingSequence"), a(d));
  }
  function s(d) {
    return d === null || d === 35 || Q(d) ? (e.exit("atxHeadingText"), a(d)) : (e.consume(d), s);
  }
}
const Yu = [
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
], Ir = ["pre", "script", "style", "textarea"], Qu = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: tc,
  tokenize: nc
}, Ju = {
  partial: !0,
  tokenize: ic
}, ec = {
  partial: !0,
  tokenize: rc
};
function tc(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function nc(e, t, n) {
  const r = this;
  let i, l, o, a, u;
  return s;
  function s(x) {
    return d(x);
  }
  function d(x) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(x), c;
  }
  function c(x) {
    return x === 33 ? (e.consume(x), h) : x === 47 ? (e.consume(x), l = !0, v) : x === 63 ? (e.consume(x), i = 3, r.interrupt ? t : g) : ce(x) ? (e.consume(x), o = String.fromCharCode(x), b) : n(x);
  }
  function h(x) {
    return x === 45 ? (e.consume(x), i = 2, f) : x === 91 ? (e.consume(x), i = 5, a = 0, m) : ce(x) ? (e.consume(x), i = 4, r.interrupt ? t : g) : n(x);
  }
  function f(x) {
    return x === 45 ? (e.consume(x), r.interrupt ? t : g) : n(x);
  }
  function m(x) {
    const ge = "CDATA[";
    return x === ge.charCodeAt(a++) ? (e.consume(x), a === ge.length ? r.interrupt ? t : F : m) : n(x);
  }
  function v(x) {
    return ce(x) ? (e.consume(x), o = String.fromCharCode(x), b) : n(x);
  }
  function b(x) {
    if (x === null || x === 47 || x === 62 || Q(x)) {
      const ge = x === 47, Ce = o.toLowerCase();
      return !ge && !l && Ir.includes(Ce) ? (i = 1, r.interrupt ? t(x) : F(x)) : Yu.includes(o.toLowerCase()) ? (i = 6, ge ? (e.consume(x), y) : r.interrupt ? t(x) : F(x)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(x) : l ? E(x) : k(x));
    }
    return x === 45 || oe(x) ? (e.consume(x), o += String.fromCharCode(x), b) : n(x);
  }
  function y(x) {
    return x === 62 ? (e.consume(x), r.interrupt ? t : F) : n(x);
  }
  function E(x) {
    return q(x) ? (e.consume(x), E) : w(x);
  }
  function k(x) {
    return x === 47 ? (e.consume(x), w) : x === 58 || x === 95 || ce(x) ? (e.consume(x), A) : q(x) ? (e.consume(x), k) : w(x);
  }
  function A(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || oe(x) ? (e.consume(x), A) : T(x);
  }
  function T(x) {
    return x === 61 ? (e.consume(x), C) : q(x) ? (e.consume(x), T) : k(x);
  }
  function C(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? n(x) : x === 34 || x === 39 ? (e.consume(x), u = x, O) : q(x) ? (e.consume(x), C) : j(x);
  }
  function O(x) {
    return x === u ? (e.consume(x), u = null, M) : x === null || _(x) ? n(x) : (e.consume(x), O);
  }
  function j(x) {
    return x === null || x === 34 || x === 39 || x === 47 || x === 60 || x === 61 || x === 62 || x === 96 || Q(x) ? T(x) : (e.consume(x), j);
  }
  function M(x) {
    return x === 47 || x === 62 || q(x) ? k(x) : n(x);
  }
  function w(x) {
    return x === 62 ? (e.consume(x), R) : n(x);
  }
  function R(x) {
    return x === null || _(x) ? F(x) : q(x) ? (e.consume(x), R) : n(x);
  }
  function F(x) {
    return x === 45 && i === 2 ? (e.consume(x), W) : x === 60 && i === 1 ? (e.consume(x), te) : x === 62 && i === 4 ? (e.consume(x), me) : x === 63 && i === 3 ? (e.consume(x), g) : x === 93 && i === 5 ? (e.consume(x), pe) : _(x) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Ju, we, V)(x)) : x === null || _(x) ? (e.exit("htmlFlowData"), V(x)) : (e.consume(x), F);
  }
  function V(x) {
    return e.check(ec, $, we)(x);
  }
  function $(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), D;
  }
  function D(x) {
    return x === null || _(x) ? V(x) : (e.enter("htmlFlowData"), F(x));
  }
  function W(x) {
    return x === 45 ? (e.consume(x), g) : F(x);
  }
  function te(x) {
    return x === 47 ? (e.consume(x), o = "", se) : F(x);
  }
  function se(x) {
    if (x === 62) {
      const ge = o.toLowerCase();
      return Ir.includes(ge) ? (e.consume(x), me) : F(x);
    }
    return ce(x) && o.length < 8 ? (e.consume(x), o += String.fromCharCode(x), se) : F(x);
  }
  function pe(x) {
    return x === 93 ? (e.consume(x), g) : F(x);
  }
  function g(x) {
    return x === 62 ? (e.consume(x), me) : x === 45 && i === 2 ? (e.consume(x), g) : F(x);
  }
  function me(x) {
    return x === null || _(x) ? (e.exit("htmlFlowData"), we(x)) : (e.consume(x), me);
  }
  function we(x) {
    return e.exit("htmlFlow"), t(x);
  }
}
function rc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return _(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function ic(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(St, t, n);
  }
}
const lc = {
  name: "htmlText",
  tokenize: oc
};
function oc(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), u;
  }
  function u(g) {
    return g === 33 ? (e.consume(g), s) : g === 47 ? (e.consume(g), T) : g === 63 ? (e.consume(g), k) : ce(g) ? (e.consume(g), j) : n(g);
  }
  function s(g) {
    return g === 45 ? (e.consume(g), d) : g === 91 ? (e.consume(g), l = 0, m) : ce(g) ? (e.consume(g), E) : n(g);
  }
  function d(g) {
    return g === 45 ? (e.consume(g), f) : n(g);
  }
  function c(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), h) : _(g) ? (o = c, te(g)) : (e.consume(g), c);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), f) : c(g);
  }
  function f(g) {
    return g === 62 ? W(g) : g === 45 ? h(g) : c(g);
  }
  function m(g) {
    const me = "CDATA[";
    return g === me.charCodeAt(l++) ? (e.consume(g), l === me.length ? v : m) : n(g);
  }
  function v(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), b) : _(g) ? (o = v, te(g)) : (e.consume(g), v);
  }
  function b(g) {
    return g === 93 ? (e.consume(g), y) : v(g);
  }
  function y(g) {
    return g === 62 ? W(g) : g === 93 ? (e.consume(g), y) : v(g);
  }
  function E(g) {
    return g === null || g === 62 ? W(g) : _(g) ? (o = E, te(g)) : (e.consume(g), E);
  }
  function k(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), A) : _(g) ? (o = k, te(g)) : (e.consume(g), k);
  }
  function A(g) {
    return g === 62 ? W(g) : k(g);
  }
  function T(g) {
    return ce(g) ? (e.consume(g), C) : n(g);
  }
  function C(g) {
    return g === 45 || oe(g) ? (e.consume(g), C) : O(g);
  }
  function O(g) {
    return _(g) ? (o = O, te(g)) : q(g) ? (e.consume(g), O) : W(g);
  }
  function j(g) {
    return g === 45 || oe(g) ? (e.consume(g), j) : g === 47 || g === 62 || Q(g) ? M(g) : n(g);
  }
  function M(g) {
    return g === 47 ? (e.consume(g), W) : g === 58 || g === 95 || ce(g) ? (e.consume(g), w) : _(g) ? (o = M, te(g)) : q(g) ? (e.consume(g), M) : W(g);
  }
  function w(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || oe(g) ? (e.consume(g), w) : R(g);
  }
  function R(g) {
    return g === 61 ? (e.consume(g), F) : _(g) ? (o = R, te(g)) : q(g) ? (e.consume(g), R) : M(g);
  }
  function F(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), i = g, V) : _(g) ? (o = F, te(g)) : q(g) ? (e.consume(g), F) : (e.consume(g), $);
  }
  function V(g) {
    return g === i ? (e.consume(g), i = void 0, D) : g === null ? n(g) : _(g) ? (o = V, te(g)) : (e.consume(g), V);
  }
  function $(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || Q(g) ? M(g) : (e.consume(g), $);
  }
  function D(g) {
    return g === 47 || g === 62 || Q(g) ? M(g) : n(g);
  }
  function W(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function te(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), se;
  }
  function se(g) {
    return q(g) ? X(e, pe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : pe(g);
  }
  function pe(g) {
    return e.enter("htmlTextData"), o(g);
  }
}
const Zn = {
  name: "labelEnd",
  resolveAll: cc,
  resolveTo: dc,
  tokenize: fc
}, ac = {
  tokenize: hc
}, sc = {
  tokenize: pc
}, uc = {
  tokenize: mc
};
function cc(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && be(e, 0, e.length, n), e;
}
function dc(e, t) {
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
  const u = {
    type: e[l][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, s = {
    type: "label",
    start: {
      ...e[l][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, d = {
    type: "labelText",
    start: {
      ...e[l + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return a = [["enter", u, t], ["enter", s, t]], a = ke(a, e.slice(l + 1, l + r + 3)), a = ke(a, [["enter", d, t]]), a = ke(a, Vt(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), a = ke(a, [["exit", d, t], e[o - 2], e[o - 1], ["exit", s, t]]), a = ke(a, e.slice(o + 1)), a = ke(a, [["exit", u, t]]), be(e, l, e.length, a), e;
}
function fc(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(h) {
    return l ? l._inactive ? c(h) : (o = r.parser.defined.includes(Ee(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(h);
  }
  function u(h) {
    return h === 40 ? e.attempt(ac, d, o ? d : c)(h) : h === 91 ? e.attempt(sc, d, o ? s : c)(h) : o ? d(h) : c(h);
  }
  function s(h) {
    return e.attempt(uc, d, c)(h);
  }
  function d(h) {
    return t(h);
  }
  function c(h) {
    return l._balanced = !0, n(h);
  }
}
function hc(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Q(c) ? xt(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41 ? d(c) : ol(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function o(c) {
    return Q(c) ? xt(e, u)(c) : d(c);
  }
  function a(c) {
    return n(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? sl(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : d(c);
  }
  function s(c) {
    return Q(c) ? xt(e, d)(c) : d(c);
  }
  function d(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function pc(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return al.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(Ee(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function mc(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const gc = {
  name: "labelStartImage",
  resolveAll: Zn.resolveAll,
  tokenize: xc
};
function xc(e, t, n) {
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
const yc = {
  name: "labelStartLink",
  resolveAll: Zn.resolveAll,
  tokenize: bc
};
function bc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const tn = {
  name: "lineEnding",
  tokenize: kc
};
function kc(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), X(e, t, "linePrefix");
  }
}
const jt = {
  name: "thematicBreak",
  tokenize: wc
};
function wc(e, t, n) {
  let r = 0, i;
  return l;
  function l(s) {
    return e.enter("thematicBreak"), o(s);
  }
  function o(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || _(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), q(s) ? X(e, a, "whitespace")(s) : a(s));
  }
}
const de = {
  continuation: {
    tokenize: Ec
  },
  exit: Ic,
  name: "list",
  tokenize: Sc
}, Cc = {
  partial: !0,
  tokenize: Ac
}, vc = {
  partial: !0,
  tokenize: Tc
};
function Sc(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(f) {
    const m = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Sn(f)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(jt, n, s)(f) : s(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(f);
    }
    return n(f);
  }
  function u(f) {
    return Sn(f) && ++o < 10 ? (e.consume(f), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), s(f)) : n(f);
  }
  function s(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      St,
      // Can’t be empty when interrupting.
      r.interrupt ? n : d,
      e.attempt(Cc, h, c)
    );
  }
  function d(f) {
    return r.containerState.initialBlankLine = !0, l++, h(f);
  }
  function c(f) {
    return q(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), h) : n(f);
  }
  function h(f) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(f);
  }
}
function Ec(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(St, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, X(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(vc, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, X(e, e.attempt(de, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Tc(e, t, n) {
  const r = this;
  return X(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function Ic(e) {
  e.exit(this.containerState.type);
}
function Ac(e, t, n) {
  const r = this;
  return X(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !q(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const Ar = {
  name: "setextUnderline",
  resolveTo: Pc,
  tokenize: Lc
};
function Pc(e, t) {
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
function Lc(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(s) {
    let d = r.events.length, c;
    for (; d--; )
      if (r.events[d][1].type !== "lineEnding" && r.events[d][1].type !== "linePrefix" && r.events[d][1].type !== "content") {
        c = r.events[d][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = s, o(s)) : n(s);
  }
  function o(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), q(s) ? X(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || _(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Dc = {
  tokenize: Rc
};
function Rc(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    St,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, X(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Bu, i)), "linePrefix"))
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
const jc = {
  resolveAll: cl()
}, Fc = ul("string"), Mc = ul("text");
function ul(e) {
  return {
    resolveAll: cl(e === "text" ? $c : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], l = n.attempt(i, o, a);
    return o;
    function o(d) {
      return s(d) ? l(d) : a(d);
    }
    function a(d) {
      if (d === null) {
        n.consume(d);
        return;
      }
      return n.enter("data"), n.consume(d), u;
    }
    function u(d) {
      return s(d) ? (n.exit("data"), l(d)) : (n.consume(d), u);
    }
    function s(d) {
      if (d === null)
        return !0;
      const c = i[d];
      let h = -1;
      if (c)
        for (; ++h < c.length; ) {
          const f = c[h];
          if (!f.previous || f.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function cl(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function $c(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let l = i.length, o = -1, a = 0, u;
      for (; l--; ) {
        const s = i[l];
        if (typeof s == "string") {
          for (o = s.length; s.charCodeAt(o - 1) === 32; )
            a++, o--;
          if (o) break;
          o = -1;
        } else if (s === -2)
          u = !0, a++;
        else if (s !== -1) {
          l++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const s = {
          type: n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
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
          ...s.start
        }, r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), n += 2);
      }
      n++;
    }
  return e;
}
const Bc = {
  42: de,
  43: de,
  45: de,
  48: de,
  49: de,
  50: de,
  51: de,
  52: de,
  53: de,
  54: de,
  55: de,
  56: de,
  57: de,
  62: nl
}, Oc = {
  91: Nu
}, zc = {
  [-2]: en,
  [-1]: en,
  32: en
}, _c = {
  35: Ku,
  42: jt,
  45: [Ar, jt],
  60: Qu,
  61: Ar,
  95: jt,
  96: Tr,
  126: Tr
}, Vc = {
  38: il,
  92: rl
}, Nc = {
  [-5]: tn,
  [-4]: tn,
  [-3]: tn,
  33: gc,
  38: il,
  42: En,
  60: [yu, lc],
  91: yc,
  92: [Wu, rl],
  93: Zn,
  95: En,
  96: Du
}, Hc = {
  null: [En, jc]
}, qc = {
  null: [42, 95]
}, Uc = {
  null: []
}, Wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: qc,
  contentInitial: Oc,
  disable: Uc,
  document: Bc,
  flow: _c,
  flowInitial: zc,
  insideSpan: Hc,
  string: Vc,
  text: Nc
}, Symbol.toStringTag, { value: "Module" }));
function Zc(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, l = [];
  let o = [], a = [];
  const u = {
    attempt: O(T),
    check: O(C),
    consume: E,
    enter: k,
    exit: A,
    interrupt: O(C, {
      interrupt: !0
    })
  }, s = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: f,
    write: c
  };
  let d = t.tokenize.call(s, u);
  return t.resolveAll && l.push(t), s;
  function c(R) {
    return o = ke(o, R), b(), o[o.length - 1] !== null ? [] : (j(t, 0), s.events = Vt(l, s.events, s), s.events);
  }
  function h(R, F) {
    return Gc(f(R), F);
  }
  function f(R) {
    return Kc(o, R);
  }
  function m() {
    const {
      _bufferIndex: R,
      _index: F,
      line: V,
      column: $,
      offset: D
    } = r;
    return {
      _bufferIndex: R,
      _index: F,
      line: V,
      column: $,
      offset: D
    };
  }
  function v(R) {
    i[R.line] = R.column, w();
  }
  function b() {
    let R;
    for (; r._index < o.length; ) {
      const F = o[r._index];
      if (typeof F == "string")
        for (R = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === R && r._bufferIndex < F.length; )
          y(F.charCodeAt(r._bufferIndex));
      else
        y(F);
    }
  }
  function y(R) {
    d = d(R);
  }
  function E(R) {
    _(R) ? (r.line++, r.column = 1, r.offset += R === -3 ? 2 : 1, w()) : R !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = R;
  }
  function k(R, F) {
    const V = F || {};
    return V.type = R, V.start = m(), s.events.push(["enter", V, s]), a.push(V), V;
  }
  function A(R) {
    const F = a.pop();
    return F.end = m(), s.events.push(["exit", F, s]), F;
  }
  function T(R, F) {
    j(R, F.from);
  }
  function C(R, F) {
    F.restore();
  }
  function O(R, F) {
    return V;
    function V($, D, W) {
      let te, se, pe, g;
      return Array.isArray($) ? (
        /* c8 ignore next 1 */
        we($)
      ) : "tokenize" in $ ? (
        // Looks like a construct.
        we([
          /** @type {Construct} */
          $
        ])
      ) : me($);
      function me(re) {
        return Le;
        function Le(Te) {
          const Me = Te !== null && re[Te], $e = Te !== null && re.null, Ke = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Me) ? Me : Me ? [Me] : [],
            ...Array.isArray($e) ? $e : $e ? [$e] : []
          ];
          return we(Ke)(Te);
        }
      }
      function we(re) {
        return te = re, se = 0, re.length === 0 ? W : x(re[se]);
      }
      function x(re) {
        return Le;
        function Le(Te) {
          return g = M(), pe = re, re.partial || (s.currentConstruct = re), re.name && s.parser.constructs.disable.null.includes(re.name) ? Ce() : re.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            F ? Object.assign(Object.create(s), F) : s,
            u,
            ge,
            Ce
          )(Te);
        }
      }
      function ge(re) {
        return R(pe, g), D;
      }
      function Ce(re) {
        return g.restore(), ++se < te.length ? x(te[se]) : W;
      }
    }
  }
  function j(R, F) {
    R.resolveAll && !l.includes(R) && l.push(R), R.resolve && be(s.events, F, s.events.length - F, R.resolve(s.events.slice(F), s)), R.resolveTo && (s.events = R.resolveTo(s.events, s));
  }
  function M() {
    const R = m(), F = s.previous, V = s.currentConstruct, $ = s.events.length, D = Array.from(a);
    return {
      from: $,
      restore: W
    };
    function W() {
      r = R, s.previous = F, s.currentConstruct = V, s.events.length = $, a = D, w();
    }
  }
  function w() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Kc(e, t) {
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
function Gc(e, t) {
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
function Xc(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      el([Wc, ...(e || {}).extensions || []])
    ),
    content: i(du),
    defined: [],
    document: i(hu),
    flow: i(Dc),
    lazy: {},
    string: i(Fc),
    text: i(Mc)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Zc(r, l, a);
    }
  }
}
function Yc(e) {
  for (; !ll(e); )
    ;
  return e;
}
const Pr = /[\0\t\n\r]/g;
function Qc() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const u = [];
    let s, d, c, h, f;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), c = 0, t = "", n && (l.charCodeAt(0) === 65279 && c++, n = void 0); c < l.length; ) {
      if (Pr.lastIndex = c, s = Pr.exec(l), h = s && s.index !== void 0 ? s.index : l.length, f = l.charCodeAt(h), !s) {
        t = l.slice(c);
        break;
      }
      if (f === 10 && c === h && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), c < h && (u.push(l.slice(c, h)), e += h - c), f) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (d = Math.ceil(e / 4) * 4, u.push(-2); e++ < d; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = h + 1;
    }
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const Jc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ed(e) {
  return e.replace(Jc, td);
}
function td(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return tl(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Wn(n) || e;
}
const dl = {}.hasOwnProperty;
function nd(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), rd(n)(Yc(Xc(n).document().write(Qc()(e, t, !0))));
}
function rd(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(st),
      autolinkProtocol: M,
      autolinkEmail: M,
      atxHeading: l(lt),
      blockQuote: l($e),
      characterEscape: M,
      characterReference: M,
      codeFenced: l(Ke),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Ke, o),
      codeText: l(Ut, o),
      codeTextData: M,
      data: M,
      codeFlowValue: M,
      definition: l(Wt),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(Zt),
      hardBreakEscape: l(ot),
      hardBreakTrailing: l(ot),
      htmlFlow: l(at, o),
      htmlFlowData: M,
      htmlText: l(at, o),
      htmlTextData: M,
      image: l(It),
      label: o,
      link: l(st),
      listItem: l(K),
      listItemValue: h,
      listOrdered: l(B, c),
      listUnordered: l(B),
      paragraph: l(N),
      reference: x,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(lt),
      strong: l(G),
      thematicBreak: l(ie)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: T,
      autolink: u(),
      autolinkEmail: Me,
      autolinkProtocol: Te,
      blockQuote: u(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: Ce,
      characterReferenceMarkerNumeric: Ce,
      characterReferenceValue: re,
      characterReference: Le,
      codeFenced: u(b),
      codeFencedFence: v,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: m,
      codeFlowValue: w,
      codeIndented: u(y),
      codeText: u(D),
      codeTextData: w,
      data: w,
      definition: u(),
      definitionDestinationString: A,
      definitionLabelString: E,
      definitionTitleString: k,
      emphasis: u(),
      hardBreakEscape: u(F),
      hardBreakTrailing: u(F),
      htmlFlow: u(V),
      htmlFlowData: w,
      htmlText: u($),
      htmlTextData: w,
      image: u(te),
      label: pe,
      labelText: se,
      lineEnding: R,
      link: u(W),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: ge,
      resourceDestinationString: g,
      resourceTitleString: me,
      resource: we,
      setextHeading: u(j),
      setextHeadingLineSequence: O,
      setextHeadingText: C,
      strong: u(),
      thematicBreak: u()
    }
  };
  fl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(S) {
    let P = {
      type: "root",
      children: []
    };
    const z = {
      stack: [P],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: o,
      resume: d,
      data: n
    }, Z = [];
    let Y = -1;
    for (; ++Y < S.length; )
      if (S[Y][1].type === "listOrdered" || S[Y][1].type === "listUnordered")
        if (S[Y][0] === "enter")
          Z.push(Y);
        else {
          const ve = Z.pop();
          Y = i(S, ve, Y);
        }
    for (Y = -1; ++Y < S.length; ) {
      const ve = t[S[Y][0]];
      dl.call(ve, S[Y][1].type) && ve[S[Y][1].type].call(Object.assign({
        sliceSerialize: S[Y][2].sliceSerialize
      }, z), S[Y][1]);
    }
    if (z.tokenStack.length > 0) {
      const ve = z.tokenStack[z.tokenStack.length - 1];
      (ve[1] || Lr).call(z, void 0, ve[0]);
    }
    for (P.position = {
      start: Be(S.length > 0 ? S[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Be(S.length > 0 ? S[S.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Y = -1; ++Y < t.transforms.length; )
      P = t.transforms[Y](P) || P;
    return P;
  }
  function i(S, P, z) {
    let Z = P - 1, Y = -1, ve = !1, Ne, De, ut, ct;
    for (; ++Z <= z; ) {
      const xe = S[Z];
      switch (xe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          xe[0] === "enter" ? Y++ : Y--, ct = void 0;
          break;
        }
        case "lineEndingBlank": {
          xe[0] === "enter" && (Ne && !ct && !Y && !ut && (ut = Z), ct = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ct = void 0;
      }
      if (!Y && xe[0] === "enter" && xe[1].type === "listItemPrefix" || Y === -1 && xe[0] === "exit" && (xe[1].type === "listUnordered" || xe[1].type === "listOrdered")) {
        if (Ne) {
          let Ge = Z;
          for (De = void 0; Ge--; ) {
            const Re = S[Ge];
            if (Re[1].type === "lineEnding" || Re[1].type === "lineEndingBlank") {
              if (Re[0] === "exit") continue;
              De && (S[De][1].type = "lineEndingBlank", ve = !0), Re[1].type = "lineEnding", De = Ge;
            } else if (!(Re[1].type === "linePrefix" || Re[1].type === "blockQuotePrefix" || Re[1].type === "blockQuotePrefixWhitespace" || Re[1].type === "blockQuoteMarker" || Re[1].type === "listItemIndent")) break;
          }
          ut && (!De || ut < De) && (Ne._spread = !0), Ne.end = Object.assign({}, De ? S[De][1].start : xe[1].end), S.splice(De || Z, 0, ["exit", Ne, xe[2]]), Z++, z++;
        }
        if (xe[1].type === "listItemPrefix") {
          const Ge = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, xe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Ne = Ge, S.splice(Z, 0, ["enter", Ge, xe[2]]), Z++, z++, ut = void 0, ct = !0;
        }
      }
    }
    return S[P][1]._spread = ve, z;
  }
  function l(S, P) {
    return z;
    function z(Z) {
      a.call(this, S(Z), Z), P && P.call(this, Z);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(S, P, z) {
    this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([P, z || void 0]), S.position = {
      start: Be(P.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(S) {
    return P;
    function P(z) {
      S && S.call(this, z), s.call(this, z);
    }
  }
  function s(S, P) {
    const z = this.stack.pop(), Z = this.tokenStack.pop();
    if (Z)
      Z[0].type !== S.type && (P ? P.call(this, S, Z[0]) : (Z[1] || Lr).call(this, S, Z[0]));
    else throw new Error("Cannot close `" + S.type + "` (" + gt({
      start: S.start,
      end: S.end
    }) + "): it’s not open");
    z.position.end = Be(S.end);
  }
  function d() {
    return Un(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(S) {
    if (this.data.expectingFirstListItemValue) {
      const P = this.stack[this.stack.length - 2];
      P.start = Number.parseInt(this.sliceSerialize(S), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.lang = S;
  }
  function m() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.meta = S;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function b() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function y() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function E(S) {
    const P = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = P, z.identifier = Ee(this.sliceSerialize(S)).toLowerCase();
  }
  function k() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.title = S;
  }
  function A() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.url = S;
  }
  function T(S) {
    const P = this.stack[this.stack.length - 1];
    if (!P.depth) {
      const z = this.sliceSerialize(S).length;
      P.depth = z;
    }
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function O(S) {
    const P = this.stack[this.stack.length - 1];
    P.depth = this.sliceSerialize(S).codePointAt(0) === 61 ? 1 : 2;
  }
  function j() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function M(S) {
    const z = this.stack[this.stack.length - 1].children;
    let Z = z[z.length - 1];
    (!Z || Z.type !== "text") && (Z = ue(), Z.position = {
      start: Be(S.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(Z)), this.stack.push(Z);
  }
  function w(S) {
    const P = this.stack.pop();
    P.value += this.sliceSerialize(S), P.position.end = Be(S.end);
  }
  function R(S) {
    const P = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = P.children[P.children.length - 1];
      z.position.end = Be(S.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(P.type) && (M.call(this, S), w.call(this, S));
  }
  function F() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S;
  }
  function $() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S;
  }
  function D() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S;
  }
  function W() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const P = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = P, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function te() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const P = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = P, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function se(S) {
    const P = this.sliceSerialize(S), z = this.stack[this.stack.length - 2];
    z.label = ed(P), z.identifier = Ee(P).toLowerCase();
  }
  function pe() {
    const S = this.stack[this.stack.length - 1], P = this.resume(), z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, z.type === "link") {
      const Z = S.children;
      z.children = Z;
    } else
      z.alt = P;
  }
  function g() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.url = S;
  }
  function me() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.title = S;
  }
  function we() {
    this.data.inReference = void 0;
  }
  function x() {
    this.data.referenceType = "collapsed";
  }
  function ge(S) {
    const P = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = P, z.identifier = Ee(this.sliceSerialize(S)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ce(S) {
    this.data.characterReferenceType = S.type;
  }
  function re(S) {
    const P = this.sliceSerialize(S), z = this.data.characterReferenceType;
    let Z;
    z ? (Z = tl(P, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Z = Wn(P);
    const Y = this.stack[this.stack.length - 1];
    Y.value += Z;
  }
  function Le(S) {
    const P = this.stack.pop();
    P.position.end = Be(S.end);
  }
  function Te(S) {
    w.call(this, S);
    const P = this.stack[this.stack.length - 1];
    P.url = this.sliceSerialize(S);
  }
  function Me(S) {
    w.call(this, S);
    const P = this.stack[this.stack.length - 1];
    P.url = "mailto:" + this.sliceSerialize(S);
  }
  function $e() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Ke() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Ut() {
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
  function lt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function ot() {
    return {
      type: "break"
    };
  }
  function at() {
    return {
      type: "html",
      value: ""
    };
  }
  function It() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function st() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function B(S) {
    return {
      type: "list",
      ordered: S.type === "listOrdered",
      start: null,
      spread: S._spread,
      children: []
    };
  }
  function K(S) {
    return {
      type: "listItem",
      spread: S._spread,
      checked: null,
      children: []
    };
  }
  function N() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function G() {
    return {
      type: "strong",
      children: []
    };
  }
  function ue() {
    return {
      type: "text",
      value: ""
    };
  }
  function ie() {
    return {
      type: "thematicBreak"
    };
  }
}
function Be(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function fl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? fl(e, r) : id(e, r);
  }
}
function id(e, t) {
  let n;
  for (n in t)
    if (dl.call(t, n))
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
function Lr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + gt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + gt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + gt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function ld(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return nd(r, {
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
function od(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ad(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function sd(e, t) {
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
function ud(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function cd(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function dd(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = it(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
  let o, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = l + 1, a += 1, e.footnoteCounts.set(r, a);
  const u = {
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
  e.patch(t, u);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u]
  };
  return e.patch(t, s), e.applyData(t, s);
}
function fd(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function hd(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function hl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function pd(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return hl(e, t);
  const i = { src: it(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function md(e, t) {
  const n = { src: it(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function gd(e, t) {
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
function xd(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return hl(e, t);
  const i = { href: it(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function yd(e, t) {
  const n = { href: it(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function bd(e, t, n) {
  const r = e.all(t), i = n ? kd(n) : pl(t), l = {}, o = [];
  if (typeof t.checked == "boolean") {
    const d = r[0];
    let c;
    d && d.type === "element" && d.tagName === "p" ? c = d : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), l.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const d = r[a];
    (i || a !== 0 || d.type !== "element" || d.tagName !== "p") && o.push({ type: "text", value: `
` }), d.type === "element" && d.tagName === "p" && !i ? o.push(...d.children) : o.push(d);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && o.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(t, s), e.applyData(t, s);
}
function kd(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = pl(n[r]);
  }
  return t;
}
function pl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function wd(e, t) {
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
function Cd(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function vd(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Sd(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ed(e, t) {
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
    }, a = Vn(t.children[1]), u = Wi(t.children[t.children.length - 1]);
    a && u && (o.position = { start: a, end: u }), i.push(o);
  }
  const l = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Td(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const c = t.children[u], h = {}, f = o ? o[u] : void 0;
    f && (h.align = f);
    let m = { type: "element", tagName: l, properties: h, children: [] };
    c && (m.children = e.all(c), e.patch(c, m), m = e.applyData(c, m)), s.push(m);
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, d), e.applyData(t, d);
}
function Id(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Dr = 9, Rr = 32;
function Ad(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      jr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(jr(t.slice(i), i > 0, !1)), l.join("");
}
function jr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Dr || l === Rr; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Dr || l === Rr; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Pd(e, t) {
  const n = { type: "text", value: Ad(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Ld(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Dd = {
  blockquote: od,
  break: ad,
  code: sd,
  delete: ud,
  emphasis: cd,
  footnoteReference: dd,
  heading: fd,
  html: hd,
  imageReference: pd,
  image: md,
  inlineCode: gd,
  linkReference: xd,
  link: yd,
  listItem: bd,
  list: wd,
  paragraph: Cd,
  // @ts-expect-error: root is different, but hard to type.
  root: vd,
  strong: Sd,
  table: Ed,
  tableCell: Id,
  tableRow: Td,
  text: Pd,
  thematicBreak: Ld,
  toml: At,
  yaml: At,
  definition: At,
  footnoteDefinition: At
};
function At() {
}
const ml = -1, Nt = 0, yt = 1, Bt = 2, Kn = 3, Gn = 4, Xn = 5, Yn = 6, gl = 7, xl = 8, Fr = typeof self == "object" ? self : globalThis, Rd = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case Nt:
      case ml:
        return n(o, i);
      case yt: {
        const a = n([], i);
        for (const u of o)
          a.push(r(u));
        return a;
      }
      case Bt: {
        const a = n({}, i);
        for (const [u, s] of o)
          a[r(u)] = r(s);
        return a;
      }
      case Kn:
        return n(new Date(o), i);
      case Gn: {
        const { source: a, flags: u } = o;
        return n(new RegExp(a, u), i);
      }
      case Xn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of o)
          a.set(r(u), r(s));
        return a;
      }
      case Yn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          a.add(r(u));
        return a;
      }
      case gl: {
        const { name: a, message: u } = o;
        return n(new Fr[a](u), i);
      }
      case xl:
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
    return n(new Fr[l](o), i);
  };
  return r;
}, Mr = (e) => Rd(/* @__PURE__ */ new Map(), e)(0), Ye = "", { toString: jd } = {}, { keys: Fd } = Object, mt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Nt, t];
  const n = jd.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [yt, Ye];
    case "Object":
      return [Bt, Ye];
    case "Date":
      return [Kn, Ye];
    case "RegExp":
      return [Gn, Ye];
    case "Map":
      return [Xn, Ye];
    case "Set":
      return [Yn, Ye];
    case "DataView":
      return [yt, n];
  }
  return n.includes("Array") ? [yt, n] : n.includes("Error") ? [gl, n] : [Bt, n];
}, Pt = ([e, t]) => e === Nt && (t === "function" || t === "symbol"), Md = (e, t, n, r) => {
  const i = (o, a) => {
    const u = r.push(o) - 1;
    return n.set(a, u), u;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, u] = mt(o);
    switch (a) {
      case Nt: {
        let d = o;
        switch (u) {
          case "bigint":
            a = xl, d = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            d = null;
            break;
          case "undefined":
            return i([ml], o);
        }
        return i([a, d], o);
      }
      case yt: {
        if (u) {
          let h = o;
          return u === "DataView" ? h = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (h = new Uint8Array(o)), i([u, [...h]], o);
        }
        const d = [], c = i([a, d], o);
        for (const h of o)
          d.push(l(h));
        return c;
      }
      case Bt: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return l(o.toJSON());
        const d = [], c = i([a, d], o);
        for (const h of Fd(o))
          (e || !Pt(mt(o[h]))) && d.push([l(h), l(o[h])]);
        return c;
      }
      case Kn:
        return i([a, o.toISOString()], o);
      case Gn: {
        const { source: d, flags: c } = o;
        return i([a, { source: d, flags: c }], o);
      }
      case Xn: {
        const d = [], c = i([a, d], o);
        for (const [h, f] of o)
          (e || !(Pt(mt(h)) || Pt(mt(f)))) && d.push([l(h), l(f)]);
        return c;
      }
      case Yn: {
        const d = [], c = i([a, d], o);
        for (const h of o)
          (e || !Pt(mt(h))) && d.push(l(h));
        return c;
      }
    }
    const { message: s } = o;
    return i([a, { name: u, message: s }], o);
  };
  return l;
}, $r = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Md(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, wt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Mr($r(e, t)) : structuredClone(e)
) : (e, t) => Mr($r(e, t));
function $d(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Bd(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Od(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || $d, r = e.options.footnoteBackLabel || Bd, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const d = e.all(s), c = String(s.identifier).toUpperCase(), h = it(c.toLowerCase());
    let f = 0;
    const m = [], v = e.footnoteCounts.get(c);
    for (; v !== void 0 && ++f <= v; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let E = typeof n == "string" ? n : n(u, f);
      typeof E == "string" && (E = { type: "text", value: E }), m.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (f > 1 ? "-" + f : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, f),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(E) ? E : [E]
      });
    }
    const b = d[d.length - 1];
    if (b && b.type === "element" && b.tagName === "p") {
      const E = b.children[b.children.length - 1];
      E && E.type === "text" ? E.value += " " : b.children.push({ type: "text", value: " " }), b.children.push(...m);
    } else
      d.push(...m);
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(d, !0)
    };
    e.patch(s, y), a.push(y);
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
            ...wt(o),
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
const Ht = (
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
      return Nd;
    if (typeof e == "function")
      return qt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? zd(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        _d(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Vd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function zd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Ht(e[n]);
  return qt(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function _d(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return qt(n);
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
function Vd(e) {
  return qt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function qt(e) {
  return t;
  function t(n, r, i) {
    return !!(Hd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Nd() {
  return !0;
}
function Hd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const yl = [], qd = !0, Tn = !1, Ud = "skip";
function bl(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = Ht(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, d) {
    const c = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof c.type == "string") {
      const f = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (u.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let f = yl, m, v, b;
      if ((!t || l(u, s, d[d.length - 1] || void 0)) && (f = Wd(n(u, d)), f[0] === Tn))
        return f;
      if ("children" in u && u.children) {
        const y = (
          /** @type {UnistParent} */
          u
        );
        if (y.children && f[0] !== Ud)
          for (v = (r ? y.children.length : -1) + o, b = d.concat(y); v > -1 && v < y.children.length; ) {
            const E = y.children[v];
            if (m = a(E, v, b)(), m[0] === Tn)
              return m;
            v = typeof m[1] == "number" ? m[1] : v + o;
          }
      }
      return f;
    }
  }
}
function Wd(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [qd, e] : e == null ? yl : [e];
}
function Qn(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), bl(e, l, a, i);
  function a(u, s) {
    const d = s[s.length - 1], c = d ? d.children.indexOf(u) : void 0;
    return o(u, c, d);
  }
}
const In = {}.hasOwnProperty, Zd = {};
function Kd(e, t) {
  const n = t || Zd, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Dd, ...n.handlers }, a = {
    all: s,
    applyData: Xd,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: n,
    patch: Gd,
    wrap: Qd
  };
  return Qn(e, function(d) {
    if (d.type === "definition" || d.type === "footnoteDefinition") {
      const c = d.type === "definition" ? r : i, h = String(d.identifier).toUpperCase();
      c.has(h) || c.set(h, d);
    }
  }), a;
  function u(d, c) {
    const h = d.type, f = a.handlers[h];
    if (In.call(a.handlers, h) && f)
      return f(a, d, c);
    if (a.options.passThrough && a.options.passThrough.includes(h)) {
      if ("children" in d) {
        const { children: v, ...b } = d, y = wt(b);
        return y.children = a.all(d), y;
      }
      return wt(d);
    }
    return (a.options.unknownHandler || Yd)(a, d, c);
  }
  function s(d) {
    const c = [];
    if ("children" in d) {
      const h = d.children;
      let f = -1;
      for (; ++f < h.length; ) {
        const m = a.one(h[f], d);
        if (m) {
          if (f && h[f - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = Br(m.value)), !Array.isArray(m) && m.type === "element")) {
            const v = m.children[0];
            v && v.type === "text" && (v.value = Br(v.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function Gd(e, t) {
  e.position && (t.position = Ki(e));
}
function Xd(e, t) {
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
    n.type === "element" && l && Object.assign(n.properties, wt(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Yd(e, t) {
  const n = t.data || {}, r = "value" in t && !(In.call(n, "hProperties") || In.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Qd(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Br(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Or(e, t) {
  const n = Kd(e, t), r = n.one(e, void 0), i = Od(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Jd(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Or(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Or(n, { file: r, ...e || t })
    );
  };
}
function zr(e) {
  if (e)
    throw e;
}
var nn, _r;
function ef() {
  if (_r) return nn;
  _r = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, l = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var d = e.call(s, "constructor"), c = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !d && !c)
      return !1;
    var h;
    for (h in s)
      ;
    return typeof h > "u" || e.call(s, h);
  }, o = function(s, d) {
    n && d.name === "__proto__" ? n(s, d.name, {
      enumerable: !0,
      configurable: !0,
      value: d.newValue,
      writable: !0
    }) : s[d.name] = d.newValue;
  }, a = function(s, d) {
    if (d === "__proto__")
      if (e.call(s, d)) {
        if (r)
          return r(s, d).value;
      } else return;
    return s[d];
  };
  return nn = function u() {
    var s, d, c, h, f, m, v = arguments[0], b = 1, y = arguments.length, E = !1;
    for (typeof v == "boolean" && (E = v, v = arguments[1] || {}, b = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); b < y; ++b)
      if (s = arguments[b], s != null)
        for (d in s)
          c = a(v, d), h = a(s, d), v !== h && (E && h && (l(h) || (f = i(h))) ? (f ? (f = !1, m = c && i(c) ? c : []) : m = c && l(c) ? c : {}, o(v, { name: d, newValue: u(E, m, h) })) : typeof h < "u" && o(v, { name: d, newValue: h }));
    return v;
  }, nn;
}
var tf = ef();
const rn = /* @__PURE__ */ xi(tf);
function An(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function nf() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(u, ...s) {
      const d = e[++l];
      let c = -1;
      if (u) {
        o(u);
        return;
      }
      for (; ++c < i.length; )
        (s[c] === null || s[c] === void 0) && (s[c] = i[c]);
      i = s, d ? rf(d, a)(...s) : o(null, ...s);
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
function rf(e, t) {
  let n;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let u;
    a && o.push(i);
    try {
      u = e.apply(this, o);
    } catch (s) {
      const d = (
        /** @type {Error} */
        s
      );
      if (a && n)
        throw d;
      return i(d);
    }
    a || (u && u.then && typeof u.then == "function" ? u.then(l, i) : u instanceof Error ? i(u) : l(u));
  }
  function i(o, ...a) {
    n || (n = !0, t(o, ...a));
  }
  function l(o) {
    i(null, o);
  }
}
const Ie = { basename: lf, dirname: of, extname: af, join: sf, sep: "/" };
function lf(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Et(e);
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
function of(e) {
  if (Et(e), e.length === 0)
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
function af(e) {
  Et(e);
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
function sf(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Et(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : uf(n);
}
function uf(e) {
  Et(e);
  const t = e.codePointAt(0) === 47;
  let n = cf(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function cf(e, t) {
  let n = "", r = 0, i = -1, l = 0, o = -1, a, u;
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
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = o, l = 0;
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
function Et(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const df = { cwd: ff };
function ff() {
  return "/";
}
function Pn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function hf(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Pn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return pf(e);
}
function pf(e) {
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
const ln = (
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
class kl {
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
    t ? Pn(t) ? n = { path: t } : typeof t == "string" || mf(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : df.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < ln.length; ) {
      const l = ln[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      ln.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ie.basename(this.path) : void 0;
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
    an(t, "basename"), on(t, "basename"), this.path = Ie.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ie.dirname(this.path) : void 0;
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
    Vr(this.basename, "dirname"), this.path = Ie.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ie.extname(this.path) : void 0;
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
    if (on(t, "extname"), Vr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ie.join(this.dirname, this.stem + (t || ""));
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
    Pn(t) && (t = hf(t)), an(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ie.basename(this.path, this.extname) : void 0;
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
    an(t, "stem"), on(t, "stem"), this.path = Ie.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new ae(
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
function on(e, t) {
  if (e && e.includes(Ie.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ie.sep + "`"
    );
}
function an(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Vr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function mf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const gf = (
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
), xf = {}.hasOwnProperty;
class Jn extends gf {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = nf();
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
    return t.data(rn(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (cn("data", this.frozen), this.namespace[t] = n, this) : xf.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (cn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Lt(t), r = this.parser || this.Parser;
    return sn("parse", r), r(String(n), n);
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
    return this.freeze(), sn("process", this.parser || this.Parser), un("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = Lt(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(d, c, h) {
        if (d || !c || !h)
          return s(d);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), m = r.stringify(f, h);
        kf(m) ? h.value = m : h.result = m, s(
          d,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function s(d, c) {
        d || !c ? o(d) : l ? l(c) : n(void 0, c);
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
    return this.freeze(), sn("processSync", this.parser || this.Parser), un("processSync", this.compiler || this.Compiler), this.process(t, i), Hr("processSync", "process", n), r;
    function i(l, o) {
      n = !0, zr(l), r = o;
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
    Nr(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const u = Lt(n);
      i.run(t, u, s);
      function s(d, c, h) {
        const f = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        d ? a(d) : o ? o(f) : r(void 0, f, h);
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
    return this.run(t, n, l), Hr("runSync", "run", r), i;
    function l(o, a) {
      zr(o), i = a, r = !0;
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
    const r = Lt(n), i = this.compiler || this.Compiler;
    return un("stringify", i), Nr(t), i(t, r);
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
    if (cn("use", this.frozen), t != null) if (typeof t == "function")
      u(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function l(s) {
      if (typeof s == "function")
        u(s, []);
      else if (typeof s == "object")
        if (Array.isArray(s)) {
          const [d, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            s
          );
          u(d, c);
        } else
          o(s);
      else
        throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function o(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(s.plugins), s.settings && (i.settings = rn(!0, i.settings, s.settings));
    }
    function a(s) {
      let d = -1;
      if (s != null) if (Array.isArray(s))
        for (; ++d < s.length; ) {
          const c = s[d];
          l(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function u(s, d) {
      let c = -1, h = -1;
      for (; ++c < r.length; )
        if (r[c][0] === s) {
          h = c;
          break;
        }
      if (h === -1)
        r.push([s, ...d]);
      else if (d.length > 0) {
        let [f, ...m] = d;
        const v = r[h][1];
        An(v) && An(f) && (f = rn(!0, v, f)), r[h] = [s, f, ...m];
      }
    }
  }
}
const yf = new Jn().freeze();
function sn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function un(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function cn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Nr(e) {
  if (!An(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Hr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Lt(e) {
  return bf(e) ? e : new kl(e);
}
function bf(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function kf(e) {
  return typeof e == "string" || wf(e);
}
function wf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Cf = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", qr = [], Ur = { allowDangerousHtml: !0 }, vf = /^(https?|ircs?|mailto|xmpp)$/i, Sf = [
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
function Ef(e) {
  const t = Tf(e), n = If(e);
  return Af(t.runSync(t.parse(n), n), e);
}
function Tf(e) {
  const t = e.rehypePlugins || qr, n = e.remarkPlugins || qr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Ur } : Ur;
  return yf().use(ld).use(n).use(Jd, r).use(t);
}
function If(e) {
  const t = e.children || "", n = new kl();
  return typeof t == "string" && (n.value = t), n;
}
function Af(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || Pf;
  for (const d of Sf)
    Object.hasOwn(t, d.from) && ("" + d.from + (d.to ? "use `" + d.to + "` instead" : "remove it") + Cf + d.id, void 0);
  return Qn(e, s), Ns(e, {
    Fragment: p.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: p.jsx,
    jsxs: p.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function s(d, c, h) {
    if (d.type === "raw" && h && typeof c == "number")
      return o ? h.children.splice(c, 1) : h.children[c] = { type: "text", value: d.value }, c;
    if (d.type === "element") {
      let f;
      for (f in Jt)
        if (Object.hasOwn(Jt, f) && Object.hasOwn(d.properties, f)) {
          const m = d.properties[f], v = Jt[f];
          (v === null || v.includes(d.tagName)) && (d.properties[f] = u(String(m || ""), f, d));
        }
    }
    if (d.type === "element") {
      let f = n ? !n.includes(d.tagName) : l ? l.includes(d.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(d, c, h)), f && h && typeof c == "number")
        return a && d.children ? h.children.splice(c, 1, ...d.children) : h.children.splice(c, 1), c;
    }
  }
}
function Pf(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    vf.test(e.slice(0, t)) ? e : ""
  );
}
const He = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], Wr = {
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
      ...He,
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
    dl: [...He],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [...He, "longDesc", "src"],
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
    ol: [...He, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [...He],
    table: [...He],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...He, ["className", "contains-task-list"]],
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
}, Oe = {}.hasOwnProperty;
function Lf(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...Wr, ...t } : Wr,
    stack: []
  }, i = wl(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function wl(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Df(e, n);
      case "doctype":
        return Rf(e, n);
      case "element":
        return jf(e, n);
      case "root":
        return Ff(e, n);
      case "text":
        return Mf(e, n);
    }
  }
}
function Df(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return Tt(l, t), l;
  }
}
function Rf(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return Tt(n, t), n;
  }
}
function jf(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    Cl(e, t.children)
  ), i = $f(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && Oe.call(e.schema.ancestors, n))) {
    const a = e.schema.ancestors[n];
    let u = -1;
    for (l = !1; ++u < a.length; )
      e.stack.includes(a[u]) && (l = !0);
  }
  if (!l)
    return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
  const o = {
    type: "element",
    tagName: n,
    properties: i,
    children: r
  };
  return Tt(o, t), o;
}
function Ff(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    Cl(e, t.children)
  ) };
  return Tt(r, t), r;
}
function Mf(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return Tt(r, t), r;
}
function Cl(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = wl(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function $f(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && Oe.call(r, n) ? r[n] : void 0, o = r && Oe.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), u = {};
  let s;
  for (s in a)
    if (Oe.call(a, s)) {
      const d = a[s];
      let c = Zr(
        e,
        Kr(l, s),
        s,
        d
      );
      c == null && (c = Zr(e, Kr(o, s), s, d)), c != null && (u[s] = c);
    }
  if (i && Oe.call(i, n)) {
    const d = i[n];
    for (s in d)
      Oe.call(d, s) && !Oe.call(u, s) && (u[s] = d[s]);
  }
  return u;
}
function Zr(e, t, n, r) {
  return t ? Array.isArray(r) ? Bf(e, t, n, r) : vl(e, t, n, r) : void 0;
}
function Bf(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = vl(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function vl(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && Of(e, n, r)) {
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
function Of(e, t, n) {
  const r = e.schema.protocols && Oe.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
  if (!r || r.length === 0)
    return !0;
  const i = String(n), l = i.indexOf(":"), o = i.indexOf("?"), a = i.indexOf("#"), u = i.indexOf("/");
  if (l < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  u > -1 && l > u || o > -1 && l > o || a > -1 && l > a)
    return !0;
  let s = -1;
  for (; ++s < r.length; ) {
    const d = r[s];
    if (l === d.length && i.slice(0, d.length) === d)
      return !0;
  }
  return !1;
}
function Tt(e, t) {
  const n = Ki(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = wt(t.data)), n && (e.position = n);
}
function Kr(e, t) {
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
function zf(e) {
  return function(t) {
    return (
      /** @type {Root} */
      Lf(t, e)
    );
  };
}
function Gr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function _f(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Vf(e, t, n) {
  const i = Ht((n || {}).ignore || []), l = Nf(t);
  let o = -1;
  for (; ++o < l.length; )
    bl(e, "text", a);
  function a(s, d) {
    let c = -1, h;
    for (; ++c < d.length; ) {
      const f = d[c], m = h ? h.children : void 0;
      if (i(
        f,
        m ? m.indexOf(f) : void 0,
        h
      ))
        return;
      h = f;
    }
    if (h)
      return u(s, d);
  }
  function u(s, d) {
    const c = d[d.length - 1], h = l[o][0], f = l[o][1];
    let m = 0;
    const b = c.children.indexOf(s);
    let y = !1, E = [];
    h.lastIndex = 0;
    let k = h.exec(s.value);
    for (; k; ) {
      const A = k.index, T = {
        index: k.index,
        input: k.input,
        stack: [...d, s]
      };
      let C = f(...k, T);
      if (typeof C == "string" && (C = C.length > 0 ? { type: "text", value: C } : void 0), C === !1 ? h.lastIndex = A + 1 : (m !== A && E.push({
        type: "text",
        value: s.value.slice(m, A)
      }), Array.isArray(C) ? E.push(...C) : C && E.push(C), m = A + k[0].length, y = !0), !h.global)
        break;
      k = h.exec(s.value);
    }
    return y ? (m < s.value.length && E.push({ type: "text", value: s.value.slice(m) }), c.children.splice(b, 1, ...E)) : E = [s], b + E.length;
  }
}
function Nf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Hf(i[0]), qf(i[1])]);
  }
  return t;
}
function Hf(e) {
  return typeof e == "string" ? new RegExp(_f(e), "g") : e;
}
function qf(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const dn = "phrasing", fn = ["autolink", "link", "image", "label"];
function Uf() {
  return {
    transforms: [Qf],
    enter: {
      literalAutolink: Zf,
      literalAutolinkEmail: hn,
      literalAutolinkHttp: hn,
      literalAutolinkWww: hn
    },
    exit: {
      literalAutolink: Yf,
      literalAutolinkEmail: Xf,
      literalAutolinkHttp: Kf,
      literalAutolinkWww: Gf
    }
  };
}
function Wf() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: dn,
        notInConstruct: fn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: dn,
        notInConstruct: fn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: dn,
        notInConstruct: fn
      }
    ]
  };
}
function Zf(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function hn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Kf(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Gf(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Xf(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Yf(e) {
  this.exit(e);
}
function Qf(e) {
  Vf(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Jf],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), eh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Jf(e, t, n, r, i) {
  let l = "";
  if (!Sl(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !th(n)))
    return !1;
  const o = nh(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function eh(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Sl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function th(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function nh(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Gr(e, "(");
  let l = Gr(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function Sl(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || We(n) || _t(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
El.peek = dh;
function rh() {
  this.buffer();
}
function ih(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function lh() {
  this.buffer();
}
function oh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function ah(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ee(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function sh(e) {
  this.exit(e);
}
function uh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Ee(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function ch(e) {
  this.exit(e);
}
function dh() {
  return "[";
}
function El(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function fh() {
  return {
    enter: {
      gfmFootnoteCallString: rh,
      gfmFootnoteCall: ih,
      gfmFootnoteDefinitionLabelString: lh,
      gfmFootnoteDefinition: oh
    },
    exit: {
      gfmFootnoteCallString: ah,
      gfmFootnoteCall: sh,
      gfmFootnoteDefinitionLabelString: uh,
      gfmFootnoteDefinition: ch
    }
  };
}
function hh(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: El },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, l, o) {
    const a = l.createTracker(o);
    let u = a.move("[^");
    const s = l.enter("footnoteDefinition"), d = l.enter("label");
    return u += a.move(
      l.safe(l.associationId(r), { before: u, after: "]" })
    ), d(), u += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), u += a.move(
      (t ? `
` : " ") + l.indentLines(
        l.containerFlow(r, a.current()),
        t ? Tl : ph
      )
    )), s(), u;
  }
}
function ph(e, t, n) {
  return t === 0 ? e : Tl(e, t, n);
}
function Tl(e, t, n) {
  return (n ? "" : "    ") + e;
}
const mh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Il.peek = kh;
function gh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: yh },
    exit: { strikethrough: bh }
  };
}
function xh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: mh
      }
    ],
    handlers: { delete: Il }
  };
}
function yh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function bh(e) {
  this.exit(e);
}
function Il(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function kh() {
  return "~";
}
function wh(e) {
  return e.length;
}
function Ch(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || wh, l = [], o = [], a = [], u = [];
  let s = 0, d = -1;
  for (; ++d < e.length; ) {
    const v = [], b = [];
    let y = -1;
    for (e[d].length > s && (s = e[d].length); ++y < e[d].length; ) {
      const E = vh(e[d][y]);
      if (n.alignDelimiters !== !1) {
        const k = i(E);
        b[y] = k, (u[y] === void 0 || k > u[y]) && (u[y] = k);
      }
      v.push(E);
    }
    o[d] = v, a[d] = b;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < s; )
      l[c] = Xr(r[c]);
  else {
    const v = Xr(r);
    for (; ++c < s; )
      l[c] = v;
  }
  c = -1;
  const h = [], f = [];
  for (; ++c < s; ) {
    const v = l[c];
    let b = "", y = "";
    v === 99 ? (b = ":", y = ":") : v === 108 ? b = ":" : v === 114 && (y = ":");
    let E = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      u[c] - b.length - y.length
    );
    const k = b + "-".repeat(E) + y;
    n.alignDelimiters !== !1 && (E = b.length + E + y.length, E > u[c] && (u[c] = E), f[c] = E), h[c] = k;
  }
  o.splice(1, 0, h), a.splice(1, 0, f), d = -1;
  const m = [];
  for (; ++d < o.length; ) {
    const v = o[d], b = a[d];
    c = -1;
    const y = [];
    for (; ++c < s; ) {
      const E = v[c] || "";
      let k = "", A = "";
      if (n.alignDelimiters !== !1) {
        const T = u[c] - (b[c] || 0), C = l[c];
        C === 114 ? k = " ".repeat(T) : C === 99 ? T % 2 ? (k = " ".repeat(T / 2 + 0.5), A = " ".repeat(T / 2 - 0.5)) : (k = " ".repeat(T / 2), A = k) : A = " ".repeat(T);
      }
      n.delimiterStart !== !1 && !c && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && E === "") && (n.delimiterStart !== !1 || c) && y.push(" "), n.alignDelimiters !== !1 && y.push(k), y.push(E), n.alignDelimiters !== !1 && y.push(A), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && y.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return m.join(`
`);
}
function vh(e) {
  return e == null ? "" : String(e);
}
function Xr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Sh(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    Eh
  );
  return i(), o;
}
function Eh(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Th(e, t) {
  return Yr(e, t.inConstruct, !0) && !Yr(e, t.notInConstruct, !1);
}
function Yr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Qr(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Th(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Ih(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function Ah(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Ph(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Lh(e, t, n, r) {
  const i = Ph(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (Ah(e, n)) {
    const c = n.enter("codeIndented"), h = n.indentLines(l, Dh);
    return c(), h;
  }
  const a = n.createTracker(r), u = i.repeat(Math.max(Ih(l, i) + 1, 3)), s = n.enter("codeFenced");
  let d = a.move(u);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${o}`);
    d += a.move(
      n.safe(e.lang, {
        before: d,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${o}`);
    d += a.move(" "), d += a.move(
      n.safe(e.meta, {
        before: d,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  return d += a.move(`
`), l && (d += a.move(l + `
`)), d += a.move(u), s(), d;
}
function Dh(e, t, n) {
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
function Rh(e, t, n, r) {
  const i = er(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
  let a = n.enter("label");
  const u = n.createTracker(r);
  let s = u.move("[");
  return s += u.move(
    n.safe(n.associationId(e), {
      before: s,
      after: "]",
      ...u.current()
    })
  ), s += u.move("]: "), a(), // If there’s no url, or…
  !e.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), s += u.move("<"), s += u.move(
    n.safe(e.url, { before: s, after: ">", ...u.current() })
  ), s += u.move(">")) : (a = n.enter("destinationRaw"), s += u.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : `
`,
      ...u.current()
    })
  )), a(), e.title && (a = n.enter(`title${l}`), s += u.move(" " + i), s += u.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), o(), s;
}
function jh(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function Ct(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Ot(e, t, n) {
  const r = tt(e), i = tt(t);
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
Al.peek = Fh;
function Al(e, t, n, r) {
  const i = jh(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), d = Ot(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  d.inside && (u = Ct(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), h = Ot(r.after.charCodeAt(0), c, i);
  h.inside && (u = u.slice(0, -1) + Ct(c));
  const f = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + u + f;
}
function Fh(e, t, n) {
  return n.options.emphasis || "*";
}
function Mh(e, t) {
  let n = !1;
  return Qn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, Tn;
  }), !!((!e.depth || e.depth < 3) && Un(e) && (t.options.setext || n));
}
function $h(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (Mh(e, n)) {
    const d = n.enter("headingSetext"), c = n.enter("phrasing"), h = n.containerPhrasing(e, {
      ...l.current(),
      before: `
`,
      after: `
`
    });
    return c(), d(), h + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      h.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1)
    );
  }
  const o = "#".repeat(i), a = n.enter("headingAtx"), u = n.enter("phrasing");
  l.move(o + " ");
  let s = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...l.current()
  });
  return /^[\t ]/.test(s) && (s = Ct(s.charCodeAt(0)) + s.slice(1)), s = s ? o + " " + s : o, n.options.closeAtx && (s += " " + o), u(), a(), s;
}
Pl.peek = Bh;
function Pl(e) {
  return e.value || "";
}
function Bh() {
  return "<";
}
Ll.peek = Oh;
function Ll(e, t, n, r) {
  const i = er(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
  let a = n.enter("label");
  const u = n.createTracker(r);
  let s = u.move("![");
  return s += u.move(
    n.safe(e.alt, { before: s, after: "]", ...u.current() })
  ), s += u.move("]("), a(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), s += u.move("<"), s += u.move(
    n.safe(e.url, { before: s, after: ">", ...u.current() })
  ), s += u.move(">")) : (a = n.enter("destinationRaw"), s += u.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...u.current()
    })
  )), a(), e.title && (a = n.enter(`title${l}`), s += u.move(" " + i), s += u.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), s += u.move(")"), o(), s;
}
function Oh() {
  return "!";
}
Dl.peek = zh;
function Dl(e, t, n, r) {
  const i = e.referenceType, l = n.enter("imageReference");
  let o = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("![");
  const s = n.safe(e.alt, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), o();
  const d = n.stack;
  n.stack = [], o = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = d, l(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function zh() {
  return "!";
}
Rl.peek = _h;
function Rl(e, t, n) {
  let r = e.value || "", i = "`", l = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++l < n.unsafe.length; ) {
    const o = n.unsafe[l], a = n.compilePattern(o);
    let u;
    if (o.atBreak)
      for (; u = a.exec(r); ) {
        let s = u.index;
        r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(u.index + 1);
      }
  }
  return i + r + i;
}
function _h() {
  return "`";
}
function jl(e, t) {
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
Fl.peek = Vh;
function Fl(e, t, n, r) {
  const i = er(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, u;
  if (jl(e, n)) {
    const d = n.stack;
    n.stack = [], a = n.enter("autolink");
    let c = o.move("<");
    return c += o.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...o.current()
      })
    ), c += o.move(">"), a(), n.stack = d, c;
  }
  a = n.enter("link"), u = n.enter("label");
  let s = o.move("[");
  return s += o.move(
    n.containerPhrasing(e, {
      before: s,
      after: "](",
      ...o.current()
    })
  ), s += o.move("]("), u(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (u = n.enter("destinationLiteral"), s += o.move("<"), s += o.move(
    n.safe(e.url, { before: s, after: ">", ...o.current() })
  ), s += o.move(">")) : (u = n.enter("destinationRaw"), s += o.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...o.current()
    })
  )), u(), e.title && (u = n.enter(`title${l}`), s += o.move(" " + i), s += o.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...o.current()
    })
  ), s += o.move(i), u()), s += o.move(")"), a(), s;
}
function Vh(e, t, n) {
  return jl(e, n) ? "<" : "[";
}
Ml.peek = Nh;
function Ml(e, t, n, r) {
  const i = e.referenceType, l = n.enter("linkReference");
  let o = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("[");
  const s = n.containerPhrasing(e, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), o();
  const d = n.stack;
  n.stack = [], o = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = d, l(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function Nh() {
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
function Hh(e) {
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
function qh(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function $l(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Uh(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? qh(n) : tr(n);
  const a = e.ordered ? o === "." ? ")" : "." : Hh(n);
  let u = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (u = !0), $l(n) === o && d
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const h = e.children[c];
        if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
          u = !0;
          break;
        }
      }
    }
  }
  u && (o = a), n.bulletCurrent = o;
  const s = n.containerFlow(e, r);
  return n.bulletLastUsed = o, n.bulletCurrent = l, i(), s;
}
function Wh(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Zh(e, t, n, r) {
  const i = Wh(n);
  let l = n.bulletCurrent || tr(n);
  t && t.type === "list" && t.ordered && (l = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + l);
  let o = l.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const a = n.createTracker(r);
  a.move(l + " ".repeat(o - l.length)), a.shift(o);
  const u = n.enter("listItem"), s = n.indentLines(
    n.containerFlow(e, a.current()),
    d
  );
  return u(), s;
  function d(c, h, f) {
    return h ? (f ? "" : " ".repeat(o)) + c : (f ? l : l + " ".repeat(o - l.length)) + c;
  }
}
function Kh(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const Gh = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Ht([
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
function Xh(e, t, n, r) {
  return (e.children.some(function(o) {
    return Gh(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Yh(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Bl.peek = Qh;
function Bl(e, t, n, r) {
  const i = Yh(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), d = Ot(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  d.inside && (u = Ct(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), h = Ot(r.after.charCodeAt(0), c, i);
  h.inside && (u = u.slice(0, -1) + Ct(c));
  const f = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + u + f;
}
function Qh(e, t, n) {
  return n.options.strong || "*";
}
function Jh(e, t, n, r) {
  return n.safe(e.value, r);
}
function ep(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function tp(e, t, n) {
  const r = ($l(n) + (n.options.ruleSpaces ? " " : "")).repeat(ep(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ol = {
  blockquote: Sh,
  break: Qr,
  code: Lh,
  definition: Rh,
  emphasis: Al,
  hardBreak: Qr,
  heading: $h,
  html: Pl,
  image: Ll,
  imageReference: Dl,
  inlineCode: Rl,
  link: Fl,
  linkReference: Ml,
  list: Uh,
  listItem: Zh,
  paragraph: Kh,
  root: Xh,
  strong: Bl,
  text: Jh,
  thematicBreak: tp
};
function np() {
  return {
    enter: {
      table: rp,
      tableData: Jr,
      tableHeader: Jr,
      tableRow: lp
    },
    exit: {
      codeText: op,
      table: ip,
      tableData: pn,
      tableHeader: pn,
      tableRow: pn
    }
  };
}
function rp(e) {
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
function ip(e) {
  this.exit(e), this.data.inTable = void 0;
}
function lp(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function pn(e) {
  this.exit(e);
}
function Jr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function op(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, ap));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function ap(e, t) {
  return t === "|" ? t : e;
}
function sp(e) {
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
      tableCell: u,
      tableRow: a
    }
  };
  function o(f, m, v, b) {
    return s(d(f, v, b), f.align);
  }
  function a(f, m, v, b) {
    const y = c(f, v, b), E = s([y]);
    return E.slice(0, E.indexOf(`
`));
  }
  function u(f, m, v, b) {
    const y = v.enter("tableCell"), E = v.enter("phrasing"), k = v.containerPhrasing(f, {
      ...b,
      before: l,
      after: l
    });
    return E(), y(), k;
  }
  function s(f, m) {
    return Ch(f, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function d(f, m, v) {
    const b = f.children;
    let y = -1;
    const E = [], k = m.enter("table");
    for (; ++y < b.length; )
      E[y] = c(b[y], m, v);
    return k(), E;
  }
  function c(f, m, v) {
    const b = f.children;
    let y = -1;
    const E = [], k = m.enter("tableRow");
    for (; ++y < b.length; )
      E[y] = u(b[y], f, m, v);
    return k(), E;
  }
  function h(f, m, v) {
    let b = Ol.inlineCode(f, m, v);
    return v.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function up() {
  return {
    exit: {
      taskListCheckValueChecked: ei,
      taskListCheckValueUnchecked: ei,
      paragraph: dp
    }
  };
}
function cp() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: fp }
  };
}
function ei(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function dp(e) {
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
function fp(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let u = Ol.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(d) {
    return d + o;
  }
}
function hp() {
  return [
    Uf(),
    fh(),
    gh(),
    np(),
    up()
  ];
}
function pp(e) {
  return {
    extensions: [
      Wf(),
      hh(e),
      xh(),
      sp(e),
      cp()
    ]
  };
}
const mp = {
  tokenize: wp,
  partial: !0
}, zl = {
  tokenize: Cp,
  partial: !0
}, _l = {
  tokenize: vp,
  partial: !0
}, Vl = {
  tokenize: Sp,
  partial: !0
}, gp = {
  tokenize: Ep,
  partial: !0
}, Nl = {
  name: "wwwAutolink",
  tokenize: bp,
  previous: ql
}, Hl = {
  name: "protocolAutolink",
  tokenize: kp,
  previous: Ul
}, Fe = {
  name: "emailAutolink",
  tokenize: yp,
  previous: Wl
}, Pe = {};
function xp() {
  return {
    text: Pe
  };
}
let qe = 48;
for (; qe < 123; )
  Pe[qe] = Fe, qe++, qe === 58 ? qe = 65 : qe === 91 && (qe = 97);
Pe[43] = Fe;
Pe[45] = Fe;
Pe[46] = Fe;
Pe[95] = Fe;
Pe[72] = [Fe, Hl];
Pe[104] = [Fe, Hl];
Pe[87] = [Fe, Nl];
Pe[119] = [Fe, Nl];
function yp(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(c) {
    return !Ln(c) || !Wl.call(r, r.previous) || nr(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return Ln(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), u) : n(c);
  }
  function u(c) {
    return c === 46 ? e.check(gp, d, s)(c) : c === 45 || c === 95 || oe(c) ? (l = !0, e.consume(c), u) : d(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function d(c) {
    return l && i && ce(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function bp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !ql.call(r, r.previous) || nr(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(mp, e.attempt(zl, e.attempt(_l, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function kp(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(c) {
    return (c === 72 || c === 104) && Ul.call(r, r.previous) && !nr(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (ce(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const h = i.toLowerCase();
      if (h === "http" || h === "https")
        return e.consume(c), u;
    }
    return n(c);
  }
  function u(c) {
    return c === 47 ? (e.consume(c), l ? s : (l = !0, u)) : n(c);
  }
  function s(c) {
    return c === null || $t(c) || Q(c) || We(c) || _t(c) ? n(c) : e.attempt(zl, e.attempt(_l, d), n)(c);
  }
  function d(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function wp(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function Cp(e, t, n) {
  let r, i, l;
  return o;
  function o(s) {
    return s === 46 || s === 95 ? e.check(Vl, u, a)(s) : s === null || Q(s) || We(s) || s !== 45 && _t(s) ? u(s) : (l = !0, e.consume(s), o);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), o;
  }
  function u(s) {
    return i || r || !l ? n(s) : t(s);
  }
}
function vp(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(Vl, t, l)(o) : o === null || Q(o) || We(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function Sp(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Q(a) || We(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Q(a) || We(a) ? t(a) : r(a);
  }
  function l(a) {
    return ce(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : ce(a) ? (e.consume(a), o) : n(a);
  }
}
function Ep(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return oe(l) ? n(l) : t(l);
  }
}
function ql(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Q(e);
}
function Ul(e) {
  return !ce(e);
}
function Wl(e) {
  return !(e === 47 || Ln(e));
}
function Ln(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || oe(e);
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
const Tp = {
  tokenize: Fp,
  partial: !0
};
function Ip() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Dp,
        continuation: {
          tokenize: Rp
        },
        exit: jp
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Lp
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Ap,
        resolveTo: Pp
      }
    }
  };
}
function Ap(e, t, n) {
  const r = this;
  let i = r.events.length;
  const l = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o;
  for (; i--; ) {
    const u = r.events[i][1];
    if (u.type === "labelImage") {
      o = u;
      break;
    }
    if (u.type === "gfmFootnoteCall" || u.type === "labelLink" || u.type === "label" || u.type === "image" || u.type === "link")
      break;
  }
  return a;
  function a(u) {
    if (!o || !o._balanced)
      return n(u);
    const s = Ee(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return s.codePointAt(0) !== 94 || !l.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u));
  }
}
function Pp(e, t) {
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
function Lp(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l = 0, o;
  return a;
  function a(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), u;
  }
  function u(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", s);
  }
  function s(c) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      c === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || Q(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return i.includes(Ee(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Q(c) || (o = !0), l++, e.consume(c), c === 92 ? d : s;
  }
  function d(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, s) : s(c);
  }
}
function Dp(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l, o = 0, a;
  return u;
  function u(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(m) {
    return m === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : n(m);
  }
  function d(m) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      m === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      m === null || m === 91 || Q(m)
    )
      return n(m);
    if (m === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return l = Ee(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return Q(m) || (a = !0), o++, e.consume(m), m === 92 ? c : d;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), o++, d) : d(m);
  }
  function h(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(l) || i.push(l), X(e, f, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function f(m) {
    return t(m);
  }
}
function Rp(e, t, n) {
  return e.check(St, t, e.attempt(Tp, t, n));
}
function jp(e) {
  e.exit("gfmFootnoteDefinition");
}
function Fp(e, t, n) {
  const r = this;
  return X(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l);
  }
}
function Mp(e) {
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
    let u = -1;
    for (; ++u < o.length; )
      if (o[u][0] === "enter" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._close) {
        let s = u;
        for (; s--; )
          if (o[s][0] === "exit" && o[s][1].type === "strikethroughSequenceTemporary" && o[s][1]._open && // If the sizes are the same:
          o[u][1].end.offset - o[u][1].start.offset === o[s][1].end.offset - o[s][1].start.offset) {
            o[u][1].type = "strikethroughSequence", o[s][1].type = "strikethroughSequence";
            const d = {
              type: "strikethrough",
              start: Object.assign({}, o[s][1].start),
              end: Object.assign({}, o[u][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, o[s][1].end),
              end: Object.assign({}, o[u][1].start)
            }, h = [["enter", d, a], ["enter", o[s][1], a], ["exit", o[s][1], a], ["enter", c, a]], f = a.parser.constructs.insideSpan.null;
            f && be(h, h.length, 0, Vt(f, o.slice(s + 1, u), a)), be(h, h.length, 0, [["exit", c, a], ["enter", o[u][1], a], ["exit", o[u][1], a], ["exit", d, a]]), be(o, s - 1, u - s + 3, h), u = s + h.length - 2;
            break;
          }
      }
    for (u = -1; ++u < o.length; )
      o[u][1].type === "strikethroughSequenceTemporary" && (o[u][1].type = "data");
    return o;
  }
  function l(o, a, u) {
    const s = this.previous, d = this.events;
    let c = 0;
    return h;
    function h(m) {
      return s === 126 && d[d.length - 1][1].type !== "characterEscape" ? u(m) : (o.enter("strikethroughSequenceTemporary"), f(m));
    }
    function f(m) {
      const v = tt(s);
      if (m === 126)
        return c > 1 ? u(m) : (o.consume(m), c++, f);
      if (c < 2 && !n) return u(m);
      const b = o.exit("strikethroughSequenceTemporary"), y = tt(m);
      return b._open = !y || y === 2 && !!v, b._close = !v || v === 2 && !!y, a(m);
    }
  }
}
class $p {
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
    Bp(this, t, n, r);
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
function Bp(e, t, n, r) {
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
function Op(e, t) {
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
function zp() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: _p,
        resolveAll: Vp
      }
    }
  };
}
function _p(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(w) {
    let R = r.events.length - 1;
    for (; R > -1; ) {
      const $ = r.events[R][1].type;
      if ($ === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      $ === "linePrefix") R--;
      else break;
    }
    const F = R > -1 ? r.events[R][1].type : null, V = F === "tableHead" || F === "tableRow" ? C : u;
    return V === C && r.parser.lazy[r.now().line] ? n(w) : V(w);
  }
  function u(w) {
    return e.enter("tableHead"), e.enter("tableRow"), s(w);
  }
  function s(w) {
    return w === 124 || (o = !0, l += 1), d(w);
  }
  function d(w) {
    return w === null ? n(w) : _(w) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), f) : n(w) : q(w) ? X(e, d, "whitespace")(w) : (l += 1, o && (o = !1, i += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), o = !0, d) : (e.enter("data"), c(w)));
  }
  function c(w) {
    return w === null || w === 124 || Q(w) ? (e.exit("data"), d(w)) : (e.consume(w), w === 92 ? h : c);
  }
  function h(w) {
    return w === 92 || w === 124 ? (e.consume(w), c) : c(w);
  }
  function f(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), o = !1, q(w) ? X(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : m(w));
  }
  function m(w) {
    return w === 45 || w === 58 ? b(w) : w === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), v) : T(w);
  }
  function v(w) {
    return q(w) ? X(e, b, "whitespace")(w) : b(w);
  }
  function b(w) {
    return w === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), y) : w === 45 ? (l += 1, y(w)) : w === null || _(w) ? A(w) : T(w);
  }
  function y(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), E(w)) : T(w);
  }
  function E(w) {
    return w === 45 ? (e.consume(w), E) : w === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), k) : (e.exit("tableDelimiterFiller"), k(w));
  }
  function k(w) {
    return q(w) ? X(e, A, "whitespace")(w) : A(w);
  }
  function A(w) {
    return w === 124 ? m(w) : w === null || _(w) ? !o || i !== l ? T(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : T(w);
  }
  function T(w) {
    return n(w);
  }
  function C(w) {
    return e.enter("tableRow"), O(w);
  }
  function O(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), O) : w === null || _(w) ? (e.exit("tableRow"), t(w)) : q(w) ? X(e, O, "whitespace")(w) : (e.enter("data"), j(w));
  }
  function j(w) {
    return w === null || w === 124 || Q(w) ? (e.exit("data"), O(w)) : (e.consume(w), w === 92 ? M : j);
  }
  function M(w) {
    return w === 92 || w === 124 ? (e.consume(w), j) : j(w);
  }
}
function Vp(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, u = 0, s, d, c;
  const h = new $p();
  for (; ++n < e.length; ) {
    const f = e[n], m = f[1];
    f[0] === "enter" ? m.type === "tableHead" ? (a = !1, u !== 0 && (ti(h, t, u, s, d), d = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", s, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, d = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", d, t]])), i = m.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], c = Dt(h, t, l, i, void 0, c), l = [0, 0, 0, 0]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], c = Dt(h, t, l, i, void 0, c)), l = o, o = [l[1], n, 0, 0])) : m.type === "tableHead" ? (a = !0, u = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (u = n, l[1] !== 0 ? (o[0] = o[1], c = Dt(h, t, l, i, n, c)) : o[1] !== 0 && (c = Dt(h, t, o, i, n, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (u !== 0 && ti(h, t, u, s, d), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = Op(t.events, n));
  }
  return e;
}
function Dt(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, Qe(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const u = Qe(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const s = Qe(t.events, n[2]), d = Qe(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, d)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const h = t.events[n[2]], f = t.events[n[3]];
      if (h[1].end = Object.assign({}, f[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(m, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, Qe(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function ti(e, t, n, r, i) {
  const l = [], o = Qe(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function Qe(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Np = {
  name: "tasklistCheck",
  tokenize: qp
};
function Hp() {
  return {
    text: {
      91: Np
    }
  };
}
function qp(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(u) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), l)
    );
  }
  function l(u) {
    return Q(u) ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), o) : u === 88 || u === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), o) : n(u);
  }
  function o(u) {
    return u === 93 ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(u);
  }
  function a(u) {
    return _(u) ? t(u) : q(u) ? e.check({
      tokenize: Up
    }, t, n)(u) : n(u);
  }
}
function Up(e, t, n) {
  return X(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Wp(e) {
  return el([
    xp(),
    Ip(),
    Mp(e),
    zp(),
    Hp()
  ]);
}
const Zp = {};
function Kp(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Zp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Wp(n)), l.push(hp()), o.push(pp(n));
}
const Gp = U.div`
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
`, Dn = ({ content: e, className: t }) => /* @__PURE__ */ p.jsx(Gp, { className: t, children: /* @__PURE__ */ p.jsx(Ef, { remarkPlugins: [Kp], rehypePlugins: [zf], children: e }) }), Xp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%209.5H10C11.655%209.5%2013%2010.845%2013%2012.5V14.5H3V12.5C3%2010.845%204.345%209.5%206%209.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8.5%201.5H7.5C6.67157%201.5%206%202.17157%206%203V5C6%205.82843%206.67157%206.5%207.5%206.5H8.5C9.32843%206.5%2010%205.82843%2010%205V3C10%202.17157%209.32843%201.5%208.5%201.5Z'%20stroke='%23A4A4A4'%20stroke-linejoin='round'/%3e%3c/svg%3e", Yp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%209.5H10C11.655%209.5%2013%2010.845%2013%2012.5V14.5H3V12.5C3%2010.845%204.345%209.5%206%209.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8.5%201.5H7.5C6.67157%201.5%206%202.17157%206%203V5C6%205.82843%206.67157%206.5%207.5%206.5H8.5C9.32843%206.5%2010%205.82843%2010%205V3C10%202.17157%209.32843%201.5%208.5%201.5Z'%20stroke='%23535965'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Qp = Object.defineProperty, Jp = (e, t) => Qp(e, "name", { value: t, configurable: !0 });
const e1 = Jp((e) => p.jsx(Ae, { light: Yp, dark: Xp, ...e }), "UserIcon"), t1 = U.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Rn = ({ name: e, timestamp: t }) => /* @__PURE__ */ p.jsxs(je, { children: [
  e === "You" ? /* @__PURE__ */ p.jsx(e1, {}) : /* @__PURE__ */ p.jsx(yi, { src: $o }),
  /* @__PURE__ */ p.jsx(Ue, { children: e }),
  /* @__PURE__ */ p.jsx(t1, { children: new Date(t).toLocaleString() })
] }), n1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", r1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var i1 = Object.defineProperty, l1 = (e, t) => i1(e, "name", { value: t, configurable: !0 });
const o1 = l1((e) => p.jsx(Ae, { light: r1, dark: n1, ...e }), "CheckIcon"), a1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", s1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var u1 = Object.defineProperty, c1 = (e, t) => u1(e, "name", { value: t, configurable: !0 });
const d1 = c1((e) => p.jsx(Ae, { light: s1, dark: a1, ...e }), "CopyIcon"), f1 = ({
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
), h1 = ({
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
), p1 = ({
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
), m1 = ({
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
), g1 = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ p.jsxs(
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
), x1 = ({
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
), y1 = ({
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
), b1 = ({
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
), k1 = ({
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
), Zl = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, mn = U.span`
    font-size: 10px;
    color: ${({ theme: e }) => mi(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, w1 = U(je)`
    margin-left: auto;
`, C1 = U.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Kl = ({
  totalTokens: e,
  requestTokens: t,
  responseTokens: n,
  duration: r,
  handleCopyClick: i
}) => {
  const [l, o] = L.useState(!1), a = L.useRef(null);
  L.useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const u = () => {
    i(), o(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => o(!1), 1e3);
  };
  return /* @__PURE__ */ p.jsxs(je, { alignItems: "center", children: [
    /* @__PURE__ */ p.jsxs(je, { gap: 4, title: "Total tokens", children: [
      /* @__PURE__ */ p.jsx(b1, {}),
      e && /* @__PURE__ */ p.jsx(mn, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ p.jsx(mn, { title: "(Request tokens / Response tokens)", children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ p.jsxs(je, { gap: 4, title: "Duration", children: [
      /* @__PURE__ */ p.jsx(p1, {}),
      r && /* @__PURE__ */ p.jsx(mn, { children: Zl(r) })
    ] }),
    /* @__PURE__ */ p.jsxs(w1, { children: [
      /* @__PURE__ */ p.jsx(bi, { icon: l ? /* @__PURE__ */ p.jsx(o1, {}) : /* @__PURE__ */ p.jsx(d1, {}), onPress: u }),
      l && /* @__PURE__ */ p.jsx(C1, { children: "Copied to clipboard" })
    ] })
  ] });
}, v1 = () => /* @__PURE__ */ p.jsxs(vi, { children: [
  /* @__PURE__ */ p.jsx(Ue, { children: "Test your agent" }),
  /* @__PURE__ */ p.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), S1 = U.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, E1 = U.div`
    padding-bottom: 8px;
`, T1 = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = L.useState(n), l = L.useId();
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs(S1, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ p.jsx(f1, {}) : /* @__PURE__ */ p.jsx(h1, {}),
      e
    ] }),
    r && /* @__PURE__ */ p.jsx(E1, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, I1 = (e) => "kbDisplayName" in e, A1 = (e) => "serverName" in e, P1 = U.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, L1 = U.div`
    font-size: 16px;
`, Gl = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return I1(n) ? (i = /* @__PURE__ */ p.jsx(m1, {}), r = n.displayName) : A1(n) ? (i = /* @__PURE__ */ p.jsx(g1, {}), r = n.toolName) : (i = /* @__PURE__ */ p.jsx(k1, {}), r = n.displayName), /* @__PURE__ */ p.jsxs(je, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ p.jsx(L1, { children: i }),
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("div", { children: r }),
        /* @__PURE__ */ p.jsx(P1, { children: Zl(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ p.jsx(je, { marginTop: 8, children: /* @__PURE__ */ p.jsx(T1, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, Xl = async (e) => {
  await navigator.clipboard.writeText(e);
}, D1 = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && Xl(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ p.jsxs($n, { children: [
    /* @__PURE__ */ p.jsx(Ue, { children: "Test execution failed" }),
    /* @__PURE__ */ p.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ p.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ p.jsx(Bn, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ p.jsx(Oi, {}) : t ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Rn, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ p.jsx(Dn, { content: t.responseText }),
    /* @__PURE__ */ p.jsx(
      Kl,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ p.jsx(Gl, { tools: t.tools })
  ] }) : /* @__PURE__ */ p.jsx(v1, {});
  return /* @__PURE__ */ p.jsx(_e, { label: "Output", children: o() });
}, ni = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], R1 = U.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, j1 = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ p.jsx(yi, { src: t, alt: o }) : t;
  return /* @__PURE__ */ p.jsx(mo, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ p.jsxs(R1, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, F1 = ({
  onSubmit: e,
  disabled: t,
  value: n,
  updateValue: r,
  children: i,
  id: l = "AgentEditorChatInput",
  isLoading: o
}) => {
  const a = L.useCallback(
    async (s) => {
      if (s.key === "Enter") {
        if (s.shiftKey) return;
        s.preventDefault(), await e();
      }
    },
    [e]
  ), u = L.useCallback(
    (s) => {
      r(s.currentTarget.value), s.currentTarget.style.height = "0px", s.currentTarget.style.height = s.currentTarget.scrollHeight + 2 + "px";
    },
    [r]
  );
  return /* @__PURE__ */ p.jsxs($1, { children: [
    /* @__PURE__ */ p.jsx(
      M1,
      {
        id: l,
        value: n,
        required: !0,
        onKeyDown: a,
        onChange: u,
        placeholder: t && !o ? "Save your changes and run the app to enable chat" : "What can I help you with?",
        disabled: t || o,
        tabIndex: 1,
        title: "",
        onDragOver: (s) => s.preventDefault(),
        onDrop: (s) => s.preventDefault()
      }
    ),
    /* @__PURE__ */ p.jsx(Ft, { children: i })
  ] });
}, M1 = U(go)`
    min-height: 58px;
    max-height: 106px;
    padding: ${ee.spacing8};
`, Ft = U.div`
    border: ${ee.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    border-top: 0;
    padding: ${ee.spacing4} ${ee.spacing8} ${ee.spacing8};
    border-radius: 0 0 ${ee.borderRadiusXs} ${ee.borderRadiusXs};
    margin-top: ${ee.spacing0};
    background-color: transparent;
`, $1 = U.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
    border-radius: ${ee.borderRadiusXs};

    textarea {
        background-color: transparent;
        border-bottom: 0;
        border-radius: ${ee.borderRadiusXs} ${ee.borderRadiusXs} 0 0;

        // Make sure the fake inside area (where the buttons are) of the textarea gets the same hover/active styling
        &:hover:enabled + ${Ft} {
            border-color: ${({ theme: e }) => e.colorsBorderInputHover};
        }

        &:active:enabled + ${Ft}, &:focus:enabled + ${Ft} {
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
`, B1 = ({ onSubmit: e, disabled: t, userPrompt: n, updateUserPrompt: r, isLoading: i }) => /* @__PURE__ */ p.jsx(O1, { children: /* @__PURE__ */ p.jsx(
  F1,
  {
    onSubmit: e,
    disabled: t,
    value: n,
    updateValue: r,
    isLoading: i,
    children: /* @__PURE__ */ p.jsx(z1, { children: /* @__PURE__ */ p.jsx(
      _1,
      {
        icon: /* @__PURE__ */ p.jsx(y1, {}),
        "aria-label": "Send message",
        isDisabled: n.trim() === "" || t || i,
        onPress: e
      }
    ) })
  }
) }), O1 = U.section`
    flex-basis: 80px;
`, z1 = U.div`
    display: flex;
    justify-content: flex-end;
    gap: ${ee.spacing4};
    align-items: center;
`, _1 = U(bi)`
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
`, V1 = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ p.jsxs(je, { children: [
  e && /* @__PURE__ */ p.jsx(rr, { children: /* @__PURE__ */ p.jsx(xo, { children: /* @__PURE__ */ p.jsx(
    yo,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ p.jsx(rr, { fullWidth: !0, children: /* @__PURE__ */ p.jsx(bo, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), N1 = U.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`, Yl = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ p.jsx(N1, { children: e.map((r, i) => {
  var l, o, a, u;
  return /* @__PURE__ */ p.jsx(
    V1,
    {
      label: r.key,
      ariaLabel: "variable-" + r.key,
      value: r.value,
      onChange: (s) => n(i, s),
      badgeBackgroundColor: ((o = (l = t[i]) == null ? void 0 : l.style) == null ? void 0 : o.backgroundColor) || "initial",
      badgeBorderColor: ((u = (a = t[i]) == null ? void 0 : a.style) == null ? void 0 : u.borderColor) || "initial"
    },
    `${r.key}-${i}`
  );
}) }) : null, H1 = U.div`
    display: flex;
    flex-direction: column;
    height: round(calc(100% - 1px), 2px);
    min-height: 0;
    overflow: hidden;
`, q1 = U.div`
    flex-shrink: 0;
    margin-bottom: 8px;
`, U1 = U.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 8px;
`, gn = U.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 0;
    flex-shrink: 0;
`, W1 = U.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px 0;
    flex-shrink: 0;
`, Rt = U.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme: e }) => e.colorsBorderPrimary};
    margin: 4px 0;
    flex-shrink: 0;
`, Z1 = U.div`
    flex-shrink: 0;
    margin-top: 12px;
`, K1 = ({
  agentName: e,
  isLoading: t,
  isDisabled: n,
  onChatSubmit: r,
  testVariables: i,
  onVariableChange: l,
  highlightRules: o,
  messages: a = [],
  isError: u = !1,
  error: s
}) => {
  const [d, c] = L.useState(""), h = L.useRef(null), f = L.useRef(null);
  L.useEffect(() => {
    f.current && (f.current.scrollTop = f.current.scrollHeight);
  }, [a, t]);
  const m = () => {
    d.trim() && (r(d), c(""));
  }, v = () => /* @__PURE__ */ p.jsxs(U1, { ref: f, children: [
    a.map((b, y) => {
      const E = y === a.length - 1, k = b.type === "user" ? `user-${b.timestamp}` : `agent-${b.response.receivedAt}`;
      return b.type === "user" ? /* @__PURE__ */ p.jsxs(L.Fragment, { children: [
        /* @__PURE__ */ p.jsxs(W1, { children: [
          /* @__PURE__ */ p.jsx(Rn, { name: "You", timestamp: b.timestamp }),
          /* @__PURE__ */ p.jsx(Dn, { content: b.text })
        ] }),
        !E && /* @__PURE__ */ p.jsx(Rt, {})
      ] }, k) : /* @__PURE__ */ p.jsxs(L.Fragment, { children: [
        /* @__PURE__ */ p.jsxs(gn, { children: [
          /* @__PURE__ */ p.jsx(Rn, { name: e, timestamp: b.response.receivedAt }),
          /* @__PURE__ */ p.jsx(Dn, { content: b.response.responseText }),
          /* @__PURE__ */ p.jsx(
            Kl,
            {
              totalTokens: b.response.totalTokens,
              requestTokens: b.response.requestTokens,
              responseTokens: b.response.responseTokens,
              duration: b.response.durationMilliseconds,
              handleCopyClick: () => Xl(b.response.responseText)
            }
          ),
          b.response.tools && b.response.tools.length > 0 && /* @__PURE__ */ p.jsx(Gl, { tools: b.response.tools })
        ] }),
        !E && /* @__PURE__ */ p.jsx(Rt, {})
      ] }, k);
    }),
    u && s && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      a.length > 0 && /* @__PURE__ */ p.jsx(Rt, {}),
      /* @__PURE__ */ p.jsx(gn, { children: /* @__PURE__ */ p.jsxs($n, { children: [
        /* @__PURE__ */ p.jsx(Ue, { children: "Test execution failed" }),
        /* @__PURE__ */ p.jsx("div", { children: s.message }),
        s.link && /* @__PURE__ */ p.jsxs("div", { children: [
          "For more information, please visit",
          " ",
          /* @__PURE__ */ p.jsx(Bn, { href: s.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
          "."
        ] })
      ] }) })
    ] }),
    t && /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
      a.length > 0 && /* @__PURE__ */ p.jsx(Rt, {}),
      /* @__PURE__ */ p.jsx(gn, { children: /* @__PURE__ */ p.jsx(Oi, {}) })
    ] }),
    /* @__PURE__ */ p.jsx("div", { ref: h })
  ] });
  return /* @__PURE__ */ p.jsxs(H1, { children: [
    /* @__PURE__ */ p.jsx(q1, { children: i.length > 0 && /* @__PURE__ */ p.jsx(
      Yl,
      {
        variables: i,
        highlightRules: o,
        onVariableChange: l
      }
    ) }),
    v(),
    /* @__PURE__ */ p.jsx(Z1, { children: /* @__PURE__ */ p.jsx(
      B1,
      {
        disabled: n || t,
        onSubmit: m,
        userPrompt: d,
        updateUserPrompt: c,
        isLoading: t
      }
    ) })
  ] });
}, G1 = U.div`
    display: flex;
    flex-direction: column;
`, X1 = ({ testVariables: e, onVariableChange: t, highlightRules: n }) => e.length === 0 ? null : /* @__PURE__ */ p.jsx(G1, { children: /* @__PURE__ */ p.jsx(
  Yl,
  {
    variables: e,
    highlightRules: n,
    onVariableChange: t
  }
) }), Y1 = U(Uo)`
    flex: 1;
`, Q1 = U(_e)`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    overflow: hidden;
    max-height: calc(100vh - 30px);

    > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }
`, J1 = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  executeAction: i,
  usageType: l,
  isLoading: o = !1,
  response: a,
  agentName: u,
  isError: s = !1,
  error: d
}) => {
  const [c, h] = L.useState(ni[0]), [f, m] = L.useState(
    e.map((j) => ({
      ...j,
      value: ""
    }))
  ), [v, b] = L.useState([]);
  L.useEffect(() => {
    b([]);
  }, [l]), L.useEffect(() => {
    a && l === le.Chat && !o && b((j) => {
      const M = j[j.length - 1];
      if ((M == null ? void 0 : M.type) === "agent")
        return j;
      const w = {
        type: "agent",
        response: a
      };
      return [...j, w];
    });
  }, [a, o]), L.useEffect(() => {
    m((j) => {
      const M = new Map(j.map((w) => [w.key, w.value]));
      return e.map((w) => M.has(w.key) ? { ...w, value: M.get(w.key) } : {
        ...w,
        value: ""
      });
    });
  }, [e]);
  const y = () => i(f), E = (j) => {
    const M = {
      type: "user",
      text: j,
      timestamp: Date.now()
    }, w = [...v, M];
    b(w), i(f, w);
  }, k = (j, M) => {
    m((w) => {
      const R = [...w];
      return R[j] = { ...R[j], value: M }, R;
    });
  }, A = () => {
    b([]);
  }, T = l === le.Chat ? Q1 : _e, C = () => l !== le.Chat ? null : /* @__PURE__ */ p.jsx(
    K1,
    {
      agentName: u,
      isLoading: o,
      isDisabled: n,
      onChatSubmit: E,
      testVariables: f,
      onVariableChange: k,
      highlightRules: t,
      messages: v,
      isError: s,
      error: d
    }
  ), O = () => l !== le.Task ? null : /* @__PURE__ */ p.jsx(
    X1,
    {
      testVariables: f,
      onVariableChange: k,
      highlightRules: t
    }
  );
  return /* @__PURE__ */ p.jsxs(T, { label: "Playground", children: [
    r && /* @__PURE__ */ p.jsxs(No, { children: [
      /* @__PURE__ */ p.jsx(Ue, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ p.jsx("div", { children: "To test your agent, restart the application to apply the latest changes." })
    ] }),
    /* @__PURE__ */ p.jsxs(je, { children: [
      /* @__PURE__ */ p.jsx(
        Y1,
        {
          defaultValue: c == null ? void 0 : c.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: ni.map((j) => /* @__PURE__ */ p.jsx(bn, { id: j.uuid, children: j.name }, j.uuid))
        }
      ),
      /* @__PURE__ */ p.jsx(
        j1,
        {
          label: l === le.Chat ? "New chat" : "Test",
          icon: l === le.Chat ? /* @__PURE__ */ p.jsx(p.Fragment, {}) : /* @__PURE__ */ p.jsx(x1, {}),
          onPress: l === le.Chat ? A : y,
          variant: "primary",
          isDisabled: n,
          alt: l === le.Chat ? "New chat icon" : "Run test icon"
        }
      )
    ] }),
    l === le.Task && O(),
    l === le.Chat && C()
  ] });
}, em = [
  { key: ze.Auto, caption: "Auto" },
  { key: ze.None, caption: "None" },
  { key: ze.Any, caption: "Any" },
  { key: ze.Tool, caption: "Tool" }
], tm = ({
  agent: e,
  validationInfo: t,
  onToolChoiceChange: n,
  onToolChoiceToolChange: r
}) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx(
    or,
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
      children: em.map((i) => /* @__PURE__ */ p.jsx(bn, { id: i.key, children: i.caption }, i.key))
    }
  ),
  e.toolChoice === ze.Tool && /* @__PURE__ */ p.jsx(
    or,
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
] }), nm = U($i)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, rm = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  toolValidations: l,
  agentValidationInfo: o
}) => {
  const [a, u] = L.useState([]), s = L.useMemo(() => e.tools ? e.tools.map((k, A) => ({
    id: k.id ?? String(A),
    enabled: k.enabled,
    name: k.toolType === yn.Microflow ? k.name : k.document.qualifiedName.split(".")[1],
    description: k.description || "",
    tooltype: k.toolType,
    tool: k.document.qualifiedName || ""
  })) : [], [e.tools]), { items: d, sortProps: c } = Si(s), h = L.useCallback(
    (k) => {
      const A = l.get(k);
      return A === "invalid" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(gi, { title: "Tool invalid" }) }) : A === "syncing" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(Mi, { title: "Validating..." }) }) : null;
    },
    [l]
  ), f = L.useCallback(async () => {
    const k = await sr(t, n, e, r);
    k && i(k);
  }, [t, n, e, r, i]), m = L.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const k = a[0], A = await sr(
      t,
      n,
      e,
      r,
      k
    );
    A && i(A);
  }, [t, n, e, r, i, a]), v = L.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const k = a[0], A = await $a(t, e, r, k);
    A && i(A);
  }, [e, r, i, a]), b = L.useCallback(
    async (k, A) => {
      if (!e.tools)
        return;
      const T = e.tools.map(
        (O) => (O.id ?? "") === k ? { ...O, enabled: A } : O
      ), C = { ...e, tools: T };
      r(C), i(C);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, r, i]
  ), y = async (k) => {
    const A = await Oa(e, r, k);
    A && i(A);
  }, E = async (k) => {
    const A = await za(
      e,
      r,
      k
    );
    A && i(A);
  };
  return /* @__PURE__ */ p.jsxs(_e, { label: "Tools", children: [
    /* @__PURE__ */ p.jsx(
      tm,
      {
        agent: e,
        validationInfo: o,
        onToolChoiceChange: y,
        onToolChoiceToolChange: E
      }
    ),
    /* @__PURE__ */ p.jsx(
      Ei,
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
        data: d.map((k) => [
          { cellContent: h(k.id) },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              nm,
              {
                "aria-label": "Enabled",
                isSelected: k.enabled,
                onChange: (A) => b(k.id, A)
              }
            )
          },
          { cellContent: k.name, tooltipText: k.name },
          { cellContent: k.description, tooltipText: k.description },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              ki,
              {
                icon: k.tooltype === yn.Microflow ? /* @__PURE__ */ p.jsx(Ko, {}) : Bo,
                text: k.tool
              }
            ),
            tooltipText: k.tool
          }
        ]),
        rowKey: (k, A) => {
          var T;
          return ((T = d[A]) == null ? void 0 : T.id) ?? String(A);
        },
        rowOpacity: (k) => {
          var A;
          return (A = d[k]) != null && A.enabled ? 1 : 0.5;
        },
        selectionType: "row",
        selectionMode: "single",
        selectedKeys: a,
        onDoubleClick: m,
        onSelectionChange: u,
        ...c,
        toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            Je,
            {
              icon: /* @__PURE__ */ p.jsx(Fi, {}),
              label: "New",
              "aria-label": "Add new tool",
              tooltip: "Add new tool",
              onPress: f
            }
          ),
          /* @__PURE__ */ p.jsx(
            Je,
            {
              icon: /* @__PURE__ */ p.jsx(ji, {}),
              label: "Edit",
              "aria-label": "Edit selected tool",
              onPress: m,
              tooltip: "Edit selected tool",
              isDisabled: a.length === 0
            }
          ),
          /* @__PURE__ */ p.jsx(
            Je,
            {
              icon: /* @__PURE__ */ p.jsx(Ri, {}),
              label: "Delete",
              "aria-label": "Delete selected tool",
              onPress: v,
              tooltip: "Delete selected tool",
              isDisabled: a.length === 0
            }
          )
        ] })
      }
    )
  ] });
};
var im = Object.defineProperty, lm = (e, t) => im(e, "name", { value: t, configurable: !0 });
const om = lm((e) => p.jsx(am, { ...e }), "RadioButton"), am = U(sa)`
    display: flex;
    align-items: center;
    gap: ${ee.spacing4};
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
        border: ${ee.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorUnselected};
        margin: ${ee.spacing1};
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
        border: ${ee.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorSelected};
    }
`;
var sm = Object.defineProperty, um = (e, t) => sm(e, "name", { value: t, configurable: !0 });
const cm = um(({ orientation: e = "horizontal", label: t, description: n, children: r, ...i }) => {
  const { isInvalid: l, validate: o, validationError: a } = ko(i);
  return p.jsx(Ql, { orientation: e, ...i, isInvalid: l, validate: o, children: p.jsx(wo, { label: t, description: n, realtimeValidationError: a, children: p.jsx(dm, { children: r }) }) });
}, "RadioButtonGroup"), Ql = U(aa)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, dm = U.div`
    display: flex;
    flex-direction: row;
    gap: ${ee.spacing8};
    padding: ${ee.spacing4} 0;

    ${Ql}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`, fm = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUsageType: !0,
  isValidUserPrompt: !0,
  isValidToolChoice: !0,
  missingAttributes: [],
  unusedAttributes: []
}, hm = [
  { caption: "Task", value: le.Task },
  { caption: "Chat", value: le.Chat }
], pm = ({
  agentDocument: { name: e, contents: t, $ID: n },
  isRuntimeConnected: r,
  showUnsavedChangesWarning: i,
  studioPro: l,
  updateStudioProDocument: o
}) => {
  var lt, ot, at, It, st;
  const [a, u] = L.useState(!1), [s, d] = L.useState(fm), [c, h] = L.useState(void 0), [f, m] = L.useState(t), [v, b] = L.useState(!1), [y, E] = L.useState(/* @__PURE__ */ new Map()), [k, A] = L.useState(
    /* @__PURE__ */ new Map()
  ), T = Co(), C = [
    (lt = f.model) == null ? void 0 : lt.documentId,
    ...f.tools.map((B) => B.document.documentId),
    ...(f.knowledgebaseTools || []).map((B) => B.document.documentId)
  ].filter((B) => !!B), O = f.entity ? [(It = (at = (ot = f.entity) == null ? void 0 : ot.qualifiedName) == null ? void 0 : at.split(".")) == null ? void 0 : It[0]] : void 0, {
    data: j,
    isError: M,
    error: w,
    isPending: R,
    execute: F
  } = Da(l, n, r), V = L.useRef(null);
  L.useEffect(() => {
    var B;
    Le(t).then((K) => d(K)), Ce(l, (B = t.entity) == null ? void 0 : B.qualifiedName).then((K) => h(K)), m(t), u(!0);
  }, []), L.useEffect(() => {
    a && m(t);
  }, [t]), L.useEffect(() => () => {
    V.current && clearTimeout(V.current);
  }, []), L.useEffect(() => {
    a && (async () => {
      var N;
      const K = await Ce(l, (N = f.entity) == null ? void 0 : N.qualifiedName);
      h(K);
    })();
  }, [l, (st = f.entity) == null ? void 0 : st.qualifiedName]);
  const $ = async () => {
    const B = [];
    if (f.tools && f.tools.length > 0) {
      const K = /* @__PURE__ */ new Map();
      f.tools.forEach((N) => {
        K.set(N.id, "syncing");
      }), E(K), B.push(
        Promise.all(
          f.tools.map(async (N) => {
            const G = await Ho("document", N, f, l);
            return {
              id: N.id,
              state: G === !0 ? "valid" : "invalid"
            };
          })
        ).then((N) => {
          const G = new Map(N.map((ue) => [ue.id, ue.state]));
          E(G);
        })
      );
    }
    if (f.knowledgebaseTools && f.knowledgebaseTools.length > 0) {
      const K = /* @__PURE__ */ new Map();
      f.knowledgebaseTools.forEach((N) => {
        K.set(N.id, "syncing");
      }), A(K), B.push(
        Promise.all(
          f.knowledgebaseTools.map(async (N) => {
            const G = await qo(
              "document",
              N,
              f,
              l
            );
            return {
              id: N.id,
              state: G === !0 ? "valid" : "invalid"
            };
          })
        ).then((N) => {
          const G = new Map(N.map((ue) => [ue.id, ue.state]));
          A(G);
        })
      );
    }
    await Promise.all(B);
  };
  L.useEffect(() => {
    a && $();
  }, [a]);
  const D = L.useRef(/* @__PURE__ */ new Map()), W = L.useRef(/* @__PURE__ */ new Map());
  L.useEffect(() => {
    if (a && f.tools) {
      const B = D.current, K = /* @__PURE__ */ new Map();
      f.tools.forEach((N) => {
        K.set(N.id, N.document.qualifiedName);
      }), E((N) => {
        var ue;
        const G = new Map(N);
        return (ue = f.tools) == null || ue.forEach((ie) => {
          if (!N.has(ie.id))
            G.set(ie.id, "valid");
          else {
            const S = B.get(ie.id), P = K.get(ie.id);
            S !== void 0 && P !== void 0 && S !== P && G.set(ie.id, "valid");
          }
        }), G;
      }), D.current = K;
    }
  }, [f.tools, a]), L.useEffect(() => {
    if (a && f.knowledgebaseTools) {
      const B = W.current, K = /* @__PURE__ */ new Map();
      f.knowledgebaseTools.forEach((N) => {
        K.set(N.id, N.document.qualifiedName);
      }), A((N) => {
        var ue;
        const G = new Map(N);
        return (ue = f.knowledgebaseTools) == null || ue.forEach((ie) => {
          if (!N.has(ie.id))
            G.set(ie.id, "valid");
          else {
            const S = B.get(ie.id), P = K.get(ie.id);
            S !== void 0 && P !== void 0 && S !== P && G.set(ie.id, "valid");
          }
        }), G;
      }), W.current = K;
    }
  }, [f.knowledgebaseTools, a]), L.useEffect(() => {
    a && (async () => {
      const K = await Le(f);
      d(K);
    })();
  }, [l, f]), wi({
    studioPro: l,
    dependentIds: C,
    onDependentDocumentsChanged: (B) => {
      var ie, S, P;
      const K = [
        ...f.tools.map((z) => z.document.documentId),
        ...((ie = f.knowledgebaseTools) == null ? void 0 : ie.map((z) => z.document.documentId)) || []
      ], N = B.includes("domainModel"), G = B.includes(((S = f.model) == null ? void 0 : S.documentId) || "") || N, ue = B.some((z) => K.includes(z));
      G && Le(f).then((z) => d(z)), N && (Ce(l, (P = f.entity) == null ? void 0 : P.qualifiedName).then((z) => h(z)), On(l, f.variables, f).then((z) => {
        m({ ...f, variables: z });
      })), ue && $();
    },
    watchDomainModelModules: O
  });
  const se = L.useMemo(() => ha(f.variables, T), [f.variables, T]), pe = (B) => (K) => {
    const N = { ...f, [B]: K };
    m(N), V.current && clearTimeout(V.current), V.current = setTimeout(async () => {
      const G = await ar(
        l,
        B,
        N,
        o,
        K
      );
      m(G);
    }, 300);
  }, g = async () => {
    const B = await Ra(l, f, o);
    B && m(B);
  }, me = async () => {
    const B = await ja(l, f, o);
    B && m(B);
  }, we = async () => {
    f.model && Fa(l, f.model);
  }, x = async () => {
    f.entity && _o(l, f.entity.qualifiedName);
  }, ge = async () => {
    const B = await Ma(l, Kt, f, o);
    B && m(B);
  }, Ce = async (B, K) => {
    if (!K)
      return;
    const N = await zt(B, K);
    if (!N)
      return;
    const G = await Oo(N, B);
    if (G !== void 0)
      return G ? /* @__PURE__ */ p.jsx(va, {}) : /* @__PURE__ */ p.jsx(Aa, {});
  }, re = L.useMemo(() => {
    let B = "";
    return f.maxTokens !== void 0 && (B += "Max tokens: " + f.maxTokens.toLocaleString(navigator.language)), f.temperature !== void 0 && (B.length > 0 && (B += ", "), B += "Temperature: " + f.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), f.topP !== void 0 && (B.length > 0 && (B += ", "), B += "Top P: " + f.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), B;
  }, [f.temperature, f.maxTokens, f.topP]), Le = async (B) => ({
    isValidModel: await dt("model", l, B),
    isValidEntity: await dt("entity", l, B),
    isValidUsageType: await dt("usageType", l, B),
    isValidUserPrompt: await dt("userPrompt", l, B),
    missingAttributes: await ma(l, B),
    unusedAttributes: await ga(l, B),
    isValidToolChoice: await dt("toolChoice", l, B)
  }), Te = () => {
    var B, K, N;
    return /* @__PURE__ */ p.jsxs(_e, { label: "General", children: [
      /* @__PURE__ */ p.jsx(
        cm,
        {
          label: "Agent type",
          "aria-label": "Agent type",
          value: f.usageType,
          validate: () => s.isValidUsageType,
          compactControl: !0,
          onChange: (G) => ar(l, "usageType", f, o, G),
          children: hm.map((G) => /* @__PURE__ */ p.jsx(om, { value: G.value, children: G.caption }, G.value))
        }
      ),
      /* @__PURE__ */ p.jsx(
        Gt,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((B = f.model) == null ? void 0 : B.qualifiedName) || "",
          icon: f.model ? zo : void 0,
          buttonCaption: "Select...",
          onClick: me,
          validate: () => s.isValidModel,
          buttonCaptionSecondary: f.model ? "Show" : void 0,
          onClickSecondary: f.model ? we : void 0
        }
      ),
      /* @__PURE__ */ p.jsx(
        Gt,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: re,
          buttonCaption: "Edit",
          onClick: ge,
          validate: void 0
        }
      ),
      /* @__PURE__ */ p.jsx(
        vo,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: f.description,
          onChange: pe("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ p.jsx(
        Gt,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((K = f.entity) == null ? void 0 : K.qualifiedName) || "",
          icon: c,
          onClick: g,
          buttonCaption: "Select...",
          validate: () => s.isValidEntity,
          buttonCaptionSecondary: f.entity ? "Show" : void 0,
          onClickSecondary: f.entity ? x : void 0
        }
      ),
      f.entity && s.missingAttributes.length > 0 && /* @__PURE__ */ p.jsxs($n, { children: [
        /* @__PURE__ */ p.jsx(Ue, { children: `The following attributes cannot be found in ${f.entity.qualifiedName}:` }),
        /* @__PURE__ */ p.jsx("div", { children: s.missingAttributes.map((G) => `{{${G}}}`).join(", ") })
      ] }),
      f.entity && s.unusedAttributes.length > 0 && !v && /* @__PURE__ */ p.jsxs(vi, { onClose: () => b(!0), children: [
        /* @__PURE__ */ p.jsx(Ue, { children: `The following attributes are found in ${(N = f.entity) == null ? void 0 : N.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ p.jsx("div", { children: s.unusedAttributes.map((G) => `{{${G}}}`).join(", ") })
      ] })
    ] });
  }, Me = () => /* @__PURE__ */ p.jsx(_e, { label: "System prompt", children: /* @__PURE__ */ p.jsx(
    lr,
    {
      ariaLabel: "System prompt",
      value: f.systemPrompt,
      onChange: pe("systemPrompt"),
      highlightRules: se,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), $e = () => /* @__PURE__ */ p.jsx(_e, { label: "User prompt", children: /* @__PURE__ */ p.jsx(
    lr,
    {
      ariaLabel: "User prompt",
      value: f.userPrompt || "",
      onChange: pe("userPrompt"),
      highlightRules: se,
      validate: () => s.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), Ke = () => /* @__PURE__ */ p.jsx(
    rm,
    {
      agent: f,
      studioPro: l,
      componentName: Kt,
      updateStudioProDocument: o,
      onAgentChange: m,
      toolValidations: y,
      agentValidationInfo: s
    }
  ), Ut = () => /* @__PURE__ */ p.jsx(
    J1,
    {
      variables: f.variables,
      highlightRules: se,
      executeAction: F,
      isDisabled: R || i,
      showUnsavedChangesWarning: i,
      usageType: f.usageType,
      isLoading: R,
      response: j,
      agentName: e,
      isError: M,
      error: w
    }
  ), Wt = () => /* @__PURE__ */ p.jsx(
    fs,
    {
      agent: f,
      studioPro: l,
      componentName: Kt,
      updateStudioProDocument: o,
      onAgentChange: m,
      knowledgebaseToolValidations: k
    }
  ), Zt = () => /* @__PURE__ */ p.jsx(
    D1,
    {
      agentName: e,
      response: j,
      isLoading: R,
      isError: M,
      error: w
    }
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(ir, { children: [
      Te(),
      Me(),
      f.usageType === le.Task && $e(),
      Ke(),
      Wt()
    ] }),
    /* @__PURE__ */ p.jsxs(ir, { children: [
      Ut(),
      f.usageType === le.Task && Zt()
    ] })
  ] });
}, mm = Vo(), gm = ({ studioPro: e, documentId: t }) => {
  var y, E, k, A;
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = L.useState(!1), [o, a] = L.useState(mm), [u, s] = L.useState(0), [d, c] = L.useState(!1), [h, f] = L.useState(!1), m = [
    t,
    (y = o.contents.model) == null ? void 0 : y.documentId,
    ...o.contents.tools.map((T) => T.document.documentId),
    ...(o.contents.knowledgebaseTools || []).map((T) => T.document.documentId)
  ].filter((T) => !!T), v = o.contents.entity ? [(A = (k = (E = o.contents.entity) == null ? void 0 : E.qualifiedName) == null ? void 0 : k.split(".")) == null ? void 0 : A[0]] : void 0;
  L.useEffect(() => {
    r.getDocumentById(t).then(async (T) => {
      if (T && !("error" in T))
        l(!0), a(T.document);
      else
        throw new Error((T == null ? void 0 : T.error) || "Document not found");
    }).catch(async (T) => {
      await n.show("error", "Error loading document", "Details: " + (T == null ? void 0 : T.message) || T), l(!0);
    });
  }, [u]);
  const b = L.useCallback(
    (T) => {
      T.some((C) => C === t) && s((C) => C + 1), f(!0);
    },
    [t]
  );
  return wi({
    studioPro: e,
    dependentIds: m,
    onDependentDocumentsChanged: b,
    watchProjectSettings: !0,
    watchDomainModelModules: v
  }), L.useEffect(() => {
    const T = (C) => {
      c(C.isConnected), f(!1);
    };
    return e.runtime.controller.addEventListener("connectionChanged", T), () => {
      e.runtime.controller.removeEventListener("connectionChanged", T);
    };
  }, []), L.useEffect(() => {
    ya(e).then((T) => {
      c(T);
    });
  }, [e]), /* @__PURE__ */ p.jsx(So, { studioPro: e, children: /* @__PURE__ */ p.jsxs(Eo, { children: [
    !i && /* @__PURE__ */ p.jsx(Ao, {}),
    i && /* @__PURE__ */ p.jsx(To, { children: /* @__PURE__ */ p.jsx(
      pm,
      {
        agentDocument: o,
        isRuntimeConnected: d,
        showUnsavedChangesWarning: h && d,
        studioPro: e,
        updateStudioProDocument: da(e, t)
      }
    ) })
  ] }) });
}, Am = Io(gm);
export {
  gm as App,
  Am as component
};
//# sourceMappingURL=agentEdit.js.map
