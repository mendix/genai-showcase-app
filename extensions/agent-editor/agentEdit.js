import { $ as yt, a as Xr, b as de, c as tt, d as Yr, e as An, f as Qr, r as D, g as Jr, h as ei, i as Nl, j as Hl, k as ql, l as Ul, m as Wl, n as Zl, o as Kl, p as Pn, q as Gl, s as ti, t as ni, u as ri, v as ii, w as pn, x as li, y as oi, z as Ln, A as ve, B as ai, C as Xl, D as Yl, E as Ql, F as Jl, G as eo, H as si, I as x, J as Re, K as ce, L as J, M as to, N as ui, O as He, P as no, Q as ci, R as De, S as di, T as ro, U as io, V as Xn, W as lo, X as oo, Y as ao, Z as so, _ as uo, a0 as co, a1 as Yn, a2 as fo, a3 as ho, a4 as po, a5 as mo } from "./Icon-Y0B9OBpL.js";
import { I as Rt, T as fi, B as Je, u as hi, c as go, C as xo } from "./TextWithIcon-MuzTGl80.js";
import { R as yo, g as zt, a as bo, b as ko, P as wo, A as Co, T as Oe, U as Ft, c as pi, m as vo, k as So, d as Eo, e as mn, f as To, i as Io, h as Ao, j as Wt, l as Po, n as Lo } from "./index-YObaGbux.js";
import { I as mi, W as gi, E as Do } from "./Banner-R-XjJFkn.js";
import { h as Ro, T as Qn } from "./toolHandlers-CyoTDOk1.js";
import { T as Zt } from "./TextInputWithButton-BxBwrlKn.js";
import { h as Fo } from "./knowledgebaseToolHandlers-Dao-XtKI.js";
import { u as xi, T as yi, D as Ye, k as Mo } from "./Table-HvwQoqjo.js";
import { y as bi } from "./Link-D_ME2n3j.js";
import { $ as jo, a as $o, I as gn, S as Jn } from "./ComboBox-CjX_jlRw.js";
import { n as zo } from "./MicroflowIcon-BOsU1_pn.js";
function Oo(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: u, "aria-label": s, "aria-labelledby": d, validationState: c = "valid", isInvalid: h, onPressStart: f, onPressEnd: p, onPressChange: v, onPress: b, onPressUp: y, onClick: E } = e, k = (V) => {
    V.stopPropagation(), t.setSelected(V.target.checked);
  }, P = u != null, T = s != null || d != null;
  !P && !T && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: w, isPressed: $ } = yt({
    onPressStart: f,
    onPressEnd: p,
    onPressChange: v,
    onPress: b,
    onPressUp: y,
    onClick: E,
    isDisabled: r
  }), { pressProps: B, isPressed: _ } = yt({
    onPressStart: f,
    onPressEnd: p,
    onPressChange: v,
    onPressUp: y,
    onClick: E,
    onPress(V) {
      var M;
      b == null || b(V), t.toggle(), (M = n.current) === null || M === void 0 || M.focus();
    },
    isDisabled: r || i
  }), { focusableProps: C } = Xr(e, n), R = de(w, C), F = tt(e, {
    labelable: !0
  });
  return Yr(n, t.defaultSelected, t.setSelected), {
    labelProps: de(B, {
      onClick: (V) => V.preventDefault()
    }),
    inputProps: de(F, {
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
    isPressed: $ || _,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: h || c === "invalid"
  };
}
function ki(e, t, n) {
  let r = An({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: u, isSelected: s, isPressed: d, isDisabled: c, isReadOnly: h } = Oo({
    ...e,
    isInvalid: i
  }, t, n);
  Qr(e, r, n);
  let { isIndeterminate: f, isRequired: p, validationBehavior: v = "aria" } = e;
  D.useEffect(() => {
    n.current && (n.current.indeterminate = !!f);
  });
  let { pressProps: b } = yt({
    isDisabled: c || h,
    onPress() {
      let { [Jr]: y } = e, { commitValidation: E } = y || r;
      E();
    }
  });
  return {
    labelProps: de(a, b, D.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (y) => y.preventDefault()
    }), [])),
    inputProps: {
      ...u,
      checked: s,
      "aria-required": p && v === "aria" || void 0,
      required: p && v === "native"
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
const Bo = /* @__PURE__ */ new WeakMap();
function wi(e = {}) {
  let { isReadOnly: t } = e, [n, r] = ei(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = D.useState(n);
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
function _o(e, t, n) {
  const r = wi({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(y) {
      y ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(y);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: u } = Bo.get(t);
  var s;
  u = (s = e.validationBehavior) !== null && s !== void 0 ? s : u;
  let { realtimeValidation: d } = An({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = D.useRef(Nl), h = () => {
    t.setInvalid(e.value, d.isInvalid ? d : c.current);
  };
  D.useEffect(h);
  let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : d, p = u === "native" ? t.displayValidation : f;
  var v;
  let b = ki({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (v = e.isRequired) !== null && v !== void 0 ? v : t.isRequired,
    validationBehavior: u,
    [Jr]: {
      realtimeValidation: f,
      displayValidation: p,
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
const Ci = /* @__PURE__ */ new WeakMap();
function Vo(e, t, n) {
  let { value: r, children: i, "aria-label": l, "aria-labelledby": o, onPressStart: a, onPressEnd: u, onPressChange: s, onPress: d, onPressUp: c, onClick: h } = e;
  const f = e.isDisabled || t.isDisabled;
  let p = i != null, v = l != null || o != null;
  !p && !v && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let b = t.selectedValue === r, y = (L) => {
    L.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: E, isPressed: k } = yt({
    onPressStart: a,
    onPressEnd: u,
    onPressChange: s,
    onPress: d,
    onPressUp: c,
    onClick: h,
    isDisabled: f
  }), { pressProps: P, isPressed: T } = yt({
    onPressStart: a,
    onPressEnd: u,
    onPressChange: s,
    onPressUp: c,
    onClick: h,
    isDisabled: f,
    onPress(L) {
      var U;
      d == null || d(L), t.setSelectedValue(r), (U = n.current) === null || U === void 0 || U.focus();
    }
  }), { focusableProps: w } = Xr(de(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), $ = de(E, w), B = tt(e, {
    labelable: !0
  }), _ = -1;
  t.selectedValue != null ? t.selectedValue === r && (_ = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (_ = 0), f && (_ = void 0);
  let { name: C, form: R, descriptionId: F, errorMessageId: V, validationBehavior: M } = Ci.get(t);
  return Yr(n, t.defaultSelectedValue, t.setSelectedValue), Qr({
    validationBehavior: M
  }, t, n), {
    labelProps: de(P, D.useMemo(() => ({
      onClick: (L) => L.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (L) => L.preventDefault()
    }), [])),
    inputProps: de(B, {
      ...$,
      type: "radio",
      name: C,
      form: R,
      tabIndex: _,
      disabled: f,
      required: t.isRequired && M === "native",
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
function No(e, t) {
  let { name: n, form: r, isReadOnly: i, isRequired: l, isDisabled: o, orientation: a = "vertical", validationBehavior: u = "aria" } = e, { direction: s } = Hl(), { isInvalid: d, validationErrors: c, validationDetails: h } = t.displayValidation, { labelProps: f, fieldProps: p, descriptionProps: v, errorMessageProps: b } = ql({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || c
  }), y = tt(e, {
    labelable: !0
  }), { focusWithinProps: E } = Ul({
    onBlurWithin(T) {
      var w;
      (w = e.onBlur) === null || w === void 0 || w.call(e, T), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), k = (T) => {
    let w;
    switch (T.key) {
      case "ArrowRight":
        s === "rtl" && a !== "vertical" ? w = "prev" : w = "next";
        break;
      case "ArrowLeft":
        s === "rtl" && a !== "vertical" ? w = "next" : w = "prev";
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
    T.preventDefault();
    let $ = Zl(T.currentTarget, {
      from: T.target,
      accept: (_) => _ instanceof Kl(_).HTMLInputElement && _.type === "radio"
    }), B;
    w === "next" ? (B = $.nextNode(), B || ($.currentNode = T.currentTarget, B = $.firstChild())) : (B = $.previousNode(), B || ($.currentNode = T.currentTarget, B = $.lastChild())), B && (B.focus(), t.setSelectedValue(B.value));
  }, P = Wl(n);
  return Ci.set(t, {
    name: P,
    form: r,
    descriptionId: v.id,
    errorMessageId: b.id,
    validationBehavior: u
  }), {
    radioGroupProps: de(y, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: k,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": l || void 0,
      "aria-disabled": o || void 0,
      "aria-orientation": a,
      ...p,
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
let Ho = Math.round(Math.random() * 1e10), qo = 0;
function Uo(e) {
  let t = D.useMemo(() => e.name || `radio-group-${Ho}-${++qo}`, [
    e.name
  ]);
  var n;
  let [r, i] = ei(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [l] = D.useState(r), [o, a] = D.useState(null), u = An({
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
const Wo = /* @__PURE__ */ D.createContext(null), Zo = /* @__PURE__ */ D.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Pn(i, n, Gl);
  let { validationBehavior: l } = ti(ni) || {};
  var o, a;
  let u = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", s = D.useContext(Wo), d = ri(D.useMemo(() => ii(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: c, inputProps: h, isSelected: f, isDisabled: p, isReadOnly: v, isPressed: b, isInvalid: y } = s ? _o({
    ...pn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, d) : ki({
    ...pn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: u
  }, wi(t), d), { isFocused: E, isFocusVisible: k, focusProps: P } = li(), T = p || v, { hoverProps: w, isHovered: $ } = oi({
    ...t,
    isDisabled: T
  }), B = Ln({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: f,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: b,
      isHovered: $,
      isFocused: E,
      isFocusVisible: k,
      isDisabled: p,
      isReadOnly: v,
      isInvalid: y,
      isRequired: t.isRequired || !1
    }
  }), _ = tt(t, {
    global: !0
  });
  return delete _.id, delete _.onClick, /* @__PURE__ */ ve.createElement("label", {
    ...de(_, c, w, B),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": f || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": b || void 0,
    "data-hovered": $ || void 0,
    "data-focused": E || void 0,
    "data-focus-visible": k || void 0,
    "data-disabled": p || void 0,
    "data-readonly": v || void 0,
    "data-invalid": y || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ ve.createElement(ai, {
    elementType: "span"
  }, /* @__PURE__ */ ve.createElement("input", {
    ...de(h, P),
    ref: d
  })), B.children);
}), Ko = /* @__PURE__ */ D.createContext(null), Go = /* @__PURE__ */ D.createContext(null), vi = /* @__PURE__ */ D.createContext(null), Xo = /* @__PURE__ */ D.forwardRef(function(t, n) {
  [t, n] = Pn(t, n, Ko);
  let { validationBehavior: r } = ti(ni) || {};
  var i, l;
  let o = (l = (i = t.validationBehavior) !== null && i !== void 0 ? i : r) !== null && l !== void 0 ? l : "native", a = Uo({
    ...t,
    validationBehavior: o
  }), [u, s] = Xl(!t["aria-label"] && !t["aria-labelledby"]), { radioGroupProps: d, labelProps: c, descriptionProps: h, errorMessageProps: f, ...p } = No({
    ...t,
    label: s,
    validationBehavior: o
  }, a), v = Ln({
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
  }), b = tt(t, {
    global: !0
  });
  return /* @__PURE__ */ ve.createElement("div", {
    ...de(b, v, d),
    ref: n,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "vertical",
    "data-invalid": a.isInvalid || void 0,
    "data-disabled": a.isDisabled || void 0,
    "data-readonly": a.isReadOnly || void 0,
    "data-required": a.isRequired || void 0
  }, /* @__PURE__ */ ve.createElement(Yl, {
    values: [
      [
        vi,
        a
      ],
      [
        Ql,
        {
          ...c,
          ref: u,
          elementType: "span"
        }
      ],
      [
        Jl,
        {
          slots: {
            description: h,
            errorMessage: f
          }
        }
      ],
      [
        eo,
        p
      ]
    ]
  }, /* @__PURE__ */ ve.createElement($o, null, v.children)));
}), Yo = /* @__PURE__ */ D.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Pn(i, n, Go);
  let l = ve.useContext(vi), o = ri(D.useMemo(() => ii(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: a, inputProps: u, isSelected: s, isDisabled: d, isPressed: c } = Vo({
    ...pn(t),
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, l, o), { isFocused: h, isFocusVisible: f, focusProps: p } = li(), v = d || l.isReadOnly, { hoverProps: b, isHovered: y } = oi({
    ...t,
    isDisabled: v
  }), E = Ln({
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
  }), k = tt(t, {
    global: !0
  });
  return delete k.id, delete k.onClick, /* @__PURE__ */ ve.createElement("label", {
    ...de(k, a, b, E),
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
  }, /* @__PURE__ */ ve.createElement(ai, {
    elementType: "span"
  }, /* @__PURE__ */ ve.createElement("input", {
    ...de(u, p),
    ref: o
  })), /* @__PURE__ */ ve.createElement(jo.Provider, {
    value: {
      isSelected: s
    }
  }, E.children));
}), Qo = [
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
], Jo = [
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
], ea = (e, t) => async (n) => {
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, n);
  } catch (r) {
    await e.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function ta(e, t) {
  const n = /\{\{([^}\s{]+)\}\}/g, r = t.systemPrompt.match(n) || [], i = t.userPrompt ? t.userPrompt.match(n) || [] : [], l = [...r, ...i];
  if (l.length === 0)
    return Promise.resolve([]);
  const o = l.map((d) => d.replace(/\{\{|\}\}/g, "")), a = [...new Set(o)], u = t.variables, s = a.map((d) => u.find((h) => h.key === d) || {
    key: d,
    isAttributeInEntity: !1
  });
  return Dn(e, s, t);
}
const na = (e, t) => e.map((n, r) => ({
  pattern: new RegExp("\\{\\{" + n.key + "\\}\\}", "g"),
  style: {
    ...ra(r, si(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function ra(e, t) {
  const n = t ? Jo : Qo;
  return {
    color: n[e % n.length][1],
    backgroundColor: n[e % n.length][0],
    borderColor: n[e % n.length][1]
  };
}
async function Dn(e, t, n) {
  const r = await Si(e, n), i = await Ei(n, e);
  return t.map((l) => {
    const o = i.includes(l.key);
    return {
      ...l,
      isAttributeInEntity: r === !1 || o
    };
  });
}
const Si = async (e, t) => t.entity ? await zt(e, t.entity.qualifiedName) !== void 0 : !0, ia = async (e, t) => t.variables.length === 0 ? [] : !t.entity || !await zt(e, t.entity.qualifiedName) ? [] : t.variables.filter((n) => !n.isAttributeInEntity).map((n) => n.key), Ei = async (e, t) => {
  if (!e.entity)
    return [];
  const n = await zt(t, e.entity.qualifiedName);
  return n ? (await bo(t, n)).sort() : [];
}, la = async (e, t) => (await Ei(t, e)).filter((r) => !t.variables.find((i) => i.key === r)), oa = async (e, t, n) => {
  const r = n.reduce((o, a) => (o[a.key] = a.value, o), {}), i = {
    documentId: t,
    variables: JSON.stringify(r)
  };
  return await e.runtime.controller.executePreviewAction(
    "preview_agent_test",
    i
  );
}, aa = async (e) => {
  try {
    const t = await e.runtime.controller.executePreviewAction("preview_runtime_test", {});
    return !(typeof t == "object" && t !== null && "error" in t && t.error === yo);
  } catch {
    return !0;
  }
}, sa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", ua = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var ca = Object.defineProperty, da = (e, t) => ca(e, "name", { value: t, configurable: !0 });
const fa = da((e) => x.jsx(Re, { light: ua, dark: sa, ...e }), "EntityIcon"), ha = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", pa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var ma = Object.defineProperty, ga = (e, t) => ma(e, "name", { value: t, configurable: !0 });
const xa = ga((e) => x.jsx(Re, { light: pa, dark: ha, ...e }), "EntityNonPersistableIcon"), ya = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", ba = "Test action failed. Please check the runtime logs for more details.", ka = (e, t, n) => {
  const [r, i] = D.useState(void 0), [l, o] = D.useState(!1), [a, u] = D.useState(!1), [s, d] = D.useState(void 0), c = D.useCallback(
    async (h) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: ko,
          title: "App is not running",
          message: "Please run the app to use the playground.",
          displayDurationInSeconds: 5
        });
        return;
      }
      o(!0), i(void 0), u(!1), d(void 0);
      try {
        const f = await oa(e, t, h);
        if (f === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in f && f.message === wo) {
          u(!0), d({ name: "Error", message: ya, link: Co });
          return;
        }
        i(f);
      } catch {
        u(!0), d({ name: "Error", message: ba });
      } finally {
        o(!1);
      }
    },
    [e, n, t]
  );
  return { data: r, isPending: l, isError: a, error: s, execute: c };
}, er = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt") && (l.variables = await ta(e, l)), r(l), l;
}, wa = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const l = await Dn(e, t.variables, i);
    i = { ...i, variables: l }, n(i);
  }
  return i;
}, Ca = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: vo }
  });
  let i;
  return r.status === "ok" && (i = {
    ...t,
    model: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, model: void 0 }), i && n(i), i;
}, ct = async (e, t, n) => {
  switch (e) {
    case "model": {
      if (!n.model)
        return "Please select a model.";
      const r = await pi(t, n.model);
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
      if (!await Si(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "usageType":
      if (!n.usageType)
        return "Please select an agent type.";
      break;
    case "userPrompt":
      if (!n.userPrompt && n.usageType === Ft.Task)
        return "Please provide a user prompt.";
      break;
    case "toolChoice":
      if (n.toolChoice === Oe.Tool) {
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
}, va = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await pi(e, t))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, Sa = async (e, t, n, r) => {
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
}, tr = async (e, t, n, r, i) => {
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
}, Ea = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const l = t.tools.filter((a) => a.id !== r), o = { ...t, tools: l };
  return n(o), o;
}, nr = async (e, t, n, r, i) => {
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
}, Ta = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to remove this knowledge base from the agent?"
  }) === !1)
    return;
  const o = (t.knowledgebaseTools || []).filter((u) => u.id !== r), a = { ...t, knowledgebaseTools: o };
  return n(a), a;
}, Ia = async (e, t, n) => {
  const r = {
    ...e,
    toolChoice: n ?? void 0,
    // Clear toolChoiceToolName if toolChoice is not "Tool"
    toolChoiceToolName: n === Oe.Tool ? e.toolChoiceToolName : void 0
  };
  return t(r), r;
}, Aa = async (e, t, n) => {
  if (e.toolChoice !== Oe.Tool)
    return;
  const r = { ...e, toolChoiceToolName: n ?? void 0 };
  return t(r), r;
}, Pa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", La = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Da = Object.defineProperty, Ra = (e, t) => Da(e, "name", { value: t, configurable: !0 });
const Ti = Ra((e) => x.jsx(Re, { light: La, dark: Pa, ...e }), "AppSelectorNoVersionIcon"), Fa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ma = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ja = Object.defineProperty, $a = (e, t) => ja(e, "name", { value: t, configurable: !0 });
const Ii = $a((e) => x.jsx(Re, { light: Ma, dark: Fa, ...e }), "EditIcon"), za = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Oa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ba = Object.defineProperty, _a = (e, t) => Ba(e, "name", { value: t, configurable: !0 });
const Ai = _a((e) => x.jsx(Re, { light: Oa, dark: za, ...e }), "PageIcon"), Va = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Na = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Ha = Object.defineProperty, qa = (e, t) => Ha(e, "name", { value: t, configurable: !0 });
const Pi = qa((e) => x.jsx(Re, { light: Na, dark: Va, ...e }), "SyncIcon"), Ua = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Wa = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Za = Object.defineProperty, Ka = (e, t) => Za(e, "name", { value: t, configurable: !0 });
const Ga = Ka((e) => x.jsx(Re, { light: Wa, dark: Ua, ...e }), "CheckCheckboxIcon");
var Xa = Object.defineProperty, Ya = (e, t) => Xa(e, "name", { value: t, configurable: !0 });
const Li = Ya(({ children: e, ...t }) => x.jsx(Ja, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => x.jsxs(x.Fragment, { children: [x.jsxs(Di, { $isSelected: r, $isIndeterminate: n, children: [n && x.jsx(Qa, {}), r && !n && x.jsx(Ga, {})] }), e] }) }), "Checkbox"), Di = J.div`
    width: ${ce.size12};
    height: ${ce.size12};
    margin: ${ce.spacing2};
    border-radius: ${ce.borderRadiusXs};
    border: ${ce.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: n }) => t && !n ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, Qa = J.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, Ja = J(Zo)`
    cursor: pointer;
    display: flex;
    height: ${ce.size16};
    gap: ${ce.spacing4};
    line-height: ${ce.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${Di} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${to}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, es = J(Li)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, ts = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  knowledgebaseToolValidations: l
}) => {
  const [o, a] = D.useState([]), u = D.useMemo(() => (e.knowledgebaseTools || []).map((y, E) => ({
    id: y.id ?? String(E),
    enabled: y.enabled,
    name: y.name,
    description: y.description || "",
    tool: y.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: s, sortProps: d } = xi(u), c = D.useCallback(
    (b) => {
      const y = l.get(b);
      return y === "invalid" ? /* @__PURE__ */ x.jsx(Rt, { icon: /* @__PURE__ */ x.jsx(ui, { title: "Tool invalid" }) }) : y === "syncing" ? /* @__PURE__ */ x.jsx(Rt, { icon: /* @__PURE__ */ x.jsx(Pi, { title: "Validating..." }) }) : null;
    },
    [l]
  ), h = D.useCallback(async () => {
    const b = await nr(
      t,
      n,
      e,
      r
    );
    b && i(b);
  }, [t, n, e, r, i]), f = D.useCallback(async () => {
    const b = e.knowledgebaseTools || [];
    if (o.length === 0 || b.length === 0)
      return;
    const y = o[0], E = await nr(
      t,
      n,
      e,
      r,
      y
    );
    E && i(E);
  }, [t, n, e, r, i, o]), p = D.useCallback(async () => {
    const b = e.knowledgebaseTools || [];
    if (o.length === 0 || b.length === 0)
      return;
    const y = o[0], E = await Ta(
      t,
      e,
      r,
      y
    );
    E && i(E);
  }, [e, r, i, o]), v = D.useCallback(
    async (b, y) => {
      const E = e.knowledgebaseTools || [];
      if (E.length === 0)
        return;
      const k = E.map(
        (T) => (T.id ?? "") === b ? { ...T, enabled: y } : T
      ), P = { ...e, knowledgebaseTools: k };
      r(P), i(P);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, r, i]
  );
  return /* @__PURE__ */ x.jsx(He, { label: "Knowledge bases", children: /* @__PURE__ */ x.jsx(
    yi,
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
          cellContent: /* @__PURE__ */ x.jsx(
            es,
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
          cellContent: /* @__PURE__ */ x.jsx(fi, { icon: So, text: b.tool }),
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
      toolbarLeft: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ x.jsx(Ai, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: h
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ x.jsx(Ii, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: f,
            tooltip: "Edit selected knowledge base",
            isDisabled: o.length === 0
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ x.jsx(Ti, {}),
            label: "Delete",
            "aria-label": "Remove selected knowledge base from agent",
            onPress: p,
            tooltip: "Remove selected knowledge base from agent",
            isDisabled: o.length === 0
          }
        )
      ] })
    }
  ) });
}, ns = no`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, rs = J.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, Kt = J.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${ns} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, is = () => /* @__PURE__ */ x.jsxs(rs, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ x.jsx(Kt, { delay: "0s" }),
  /* @__PURE__ */ x.jsx(Kt, { delay: "0.2s" }),
  /* @__PURE__ */ x.jsx(Kt, { delay: "0.4s" })
] });
function ls(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const os = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, as = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ss = {};
function rr(e, t) {
  return (ss.jsx ? as : os).test(e);
}
const us = /[ \t\n\f\r]/g;
function cs(e) {
  return typeof e == "object" ? e.type === "text" ? ir(e.value) : !1 : ir(e);
}
function ir(e) {
  return e.replace(us, "") === "";
}
class Ct {
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
Ct.prototype.normal = {};
Ct.prototype.property = {};
Ct.prototype.space = void 0;
function Ri(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new Ct(n, r, t);
}
function xn(e) {
  return e.toLowerCase();
}
class fe {
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
fe.prototype.attribute = "";
fe.prototype.booleanish = !1;
fe.prototype.boolean = !1;
fe.prototype.commaOrSpaceSeparated = !1;
fe.prototype.commaSeparated = !1;
fe.prototype.defined = !1;
fe.prototype.mustUseProperty = !1;
fe.prototype.number = !1;
fe.prototype.overloadedBoolean = !1;
fe.prototype.property = "";
fe.prototype.spaceSeparated = !1;
fe.prototype.space = void 0;
let ds = 0;
const H = Ue(), te = Ue(), yn = Ue(), I = Ue(), Q = Ue(), Qe = Ue(), xe = Ue();
function Ue() {
  return 2 ** ++ds;
}
const bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: H,
  booleanish: te,
  commaOrSpaceSeparated: xe,
  commaSeparated: Qe,
  number: I,
  overloadedBoolean: yn,
  spaceSeparated: Q
}, Symbol.toStringTag, { value: "Module" })), Gt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(bn)
);
class Rn extends fe {
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
    if (super(t, n), lr(this, "space", i), typeof r == "number")
      for (; ++l < Gt.length; ) {
        const o = Gt[l];
        lr(this, Gt[l], (r & bn[o]) === bn[o]);
      }
  }
}
Rn.prototype.defined = !0;
function lr(e, t, n) {
  n && (e[t] = n);
}
function nt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new Rn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[xn(r)] = r, n[xn(l.attribute)] = r;
  }
  return new Ct(t, n, e.space);
}
const Fi = nt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: te,
    ariaAutoComplete: null,
    ariaBusy: te,
    ariaChecked: te,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: Q,
    ariaCurrent: null,
    ariaDescribedBy: Q,
    ariaDetails: null,
    ariaDisabled: te,
    ariaDropEffect: Q,
    ariaErrorMessage: null,
    ariaExpanded: te,
    ariaFlowTo: Q,
    ariaGrabbed: te,
    ariaHasPopup: null,
    ariaHidden: te,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Q,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: te,
    ariaMultiLine: te,
    ariaMultiSelectable: te,
    ariaOrientation: null,
    ariaOwns: Q,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: te,
    ariaReadOnly: te,
    ariaRelevant: null,
    ariaRequired: te,
    ariaRoleDescription: Q,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: te,
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
function Mi(e, t) {
  return t in e ? e[t] : t;
}
function ji(e, t) {
  return Mi(e, t.toLowerCase());
}
const fs = nt({
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
    acceptCharset: Q,
    accessKey: Q,
    action: null,
    allow: null,
    allowFullScreen: H,
    allowPaymentRequest: H,
    allowUserMedia: H,
    alt: null,
    as: null,
    async: H,
    autoCapitalize: null,
    autoComplete: Q,
    autoFocus: H,
    autoPlay: H,
    blocking: Q,
    capture: null,
    charSet: null,
    checked: H,
    cite: null,
    className: Q,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: te,
    controls: H,
    controlsList: Q,
    coords: I | Qe,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: H,
    defer: H,
    dir: null,
    dirName: null,
    disabled: H,
    download: yn,
    draggable: te,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: H,
    formTarget: null,
    headers: Q,
    height: I,
    hidden: yn,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: Q,
    httpEquiv: Q,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: H,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: H,
    itemId: null,
    itemProp: Q,
    itemRef: Q,
    itemScope: H,
    itemType: Q,
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
    ping: Q,
    placeholder: null,
    playsInline: H,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: H,
    referrerPolicy: null,
    rel: Q,
    required: H,
    reversed: H,
    rows: I,
    rowSpan: I,
    sandbox: Q,
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
    spellCheck: te,
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
    value: te,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Q,
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
    scrolling: te,
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
  transform: ji
}), hs = nt({
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
    about: xe,
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
    className: Q,
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
    g1: Qe,
    g2: Qe,
    glyphName: Qe,
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
    kernelMatrix: xe,
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
    ping: Q,
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
    property: xe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: xe,
    rev: xe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: xe,
    requiredFeatures: xe,
    requiredFonts: xe,
    requiredFormats: xe,
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
    strokeDashArray: xe,
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
    systemLanguage: xe,
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
    typeOf: xe,
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
  transform: Mi
}), $i = nt({
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
}), zi = nt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ji
}), Oi = nt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), ps = {
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
}, ms = /[A-Z]/g, or = /-[a-z]/g, gs = /^data[-\w.:]+$/i;
function xs(e, t) {
  const n = xn(t);
  let r = t, i = fe;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && gs.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(or, bs);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!or.test(l)) {
        let o = l.replace(ms, ys);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = Rn;
  }
  return new i(r, t);
}
function ys(e) {
  return "-" + e.toLowerCase();
}
function bs(e) {
  return e.charAt(1).toUpperCase();
}
const ks = Ri([Fi, fs, $i, zi, Oi], "html"), Fn = Ri([Fi, hs, $i, zi, Oi], "svg");
function ws(e) {
  return e.join(" ").trim();
}
var Ke = {}, Xt, ar;
function Cs() {
  if (ar) return Xt;
  ar = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", d = "*", c = "", h = "comment", f = "declaration";
  function p(b, y) {
    if (typeof b != "string")
      throw new TypeError("First argument must be a string");
    if (!b) return [];
    y = y || {};
    var E = 1, k = 1;
    function P(M) {
      var L = M.match(t);
      L && (E += L.length);
      var U = M.lastIndexOf(u);
      k = ~U ? M.length - U : k + M.length;
    }
    function T() {
      var M = { line: E, column: k };
      return function(L) {
        return L.position = new w(M), _(), L;
      };
    }
    function w(M) {
      this.start = M, this.end = { line: E, column: k }, this.source = y.source;
    }
    w.prototype.content = b;
    function $(M) {
      var L = new Error(
        y.source + ":" + E + ":" + k + ": " + M
      );
      if (L.reason = M, L.filename = y.source, L.line = E, L.column = k, L.source = b, !y.silent) throw L;
    }
    function B(M) {
      var L = M.exec(b);
      if (L) {
        var U = L[0];
        return P(U), b = b.slice(U.length), L;
      }
    }
    function _() {
      B(n);
    }
    function C(M) {
      var L;
      for (M = M || []; L = R(); )
        L !== !1 && M.push(L);
      return M;
    }
    function R() {
      var M = T();
      if (!(s != b.charAt(0) || d != b.charAt(1))) {
        for (var L = 2; c != b.charAt(L) && (d != b.charAt(L) || s != b.charAt(L + 1)); )
          ++L;
        if (L += 2, c === b.charAt(L - 1))
          return $("End of comment missing");
        var U = b.slice(2, L - 2);
        return k += 2, P(U), b = b.slice(L), k += 2, M({
          type: h,
          comment: U
        });
      }
    }
    function F() {
      var M = T(), L = B(r);
      if (L) {
        if (R(), !B(i)) return $("property missing ':'");
        var U = B(l), ee = M({
          type: f,
          property: v(L[0].replace(e, c)),
          value: U ? v(U[0].replace(e, c)) : c
        });
        return B(o), ee;
      }
    }
    function V() {
      var M = [];
      C(M);
      for (var L; L = F(); )
        L !== !1 && (M.push(L), C(M));
      return M;
    }
    return _(), V();
  }
  function v(b) {
    return b ? b.replace(a, c) : c;
  }
  return Xt = p, Xt;
}
var sr;
function vs() {
  if (sr) return Ke;
  sr = 1;
  var e = Ke && Ke.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.default = n;
  const t = e(Cs());
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
  return Ke;
}
var dt = {}, ur;
function Ss() {
  if (ur) return dt;
  ur = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(s) {
    return !s || n.test(s) || e.test(s);
  }, o = function(s, d) {
    return d.toUpperCase();
  }, a = function(s, d) {
    return "".concat(d, "-");
  }, u = function(s, d) {
    return d === void 0 && (d = {}), l(s) ? s : (s = s.toLowerCase(), d.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, o));
  };
  return dt.camelCase = u, dt;
}
var ft, cr;
function Es() {
  if (cr) return ft;
  cr = 1;
  var e = ft && ft.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(vs()), n = Ss();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (o[(0, n.camelCase)(a, l)] = u);
    }), o;
  }
  return r.default = r, ft = r, ft;
}
var Ts = Es();
const Is = /* @__PURE__ */ ci(Ts), Bi = _i("end"), Mn = _i("start");
function _i(e) {
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
function Vi(e) {
  const t = Mn(e), n = Bi(e);
  if (t && n)
    return { start: t, end: n };
}
function mt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? dr(e.position) : "start" in e || "end" in e ? dr(e) : "line" in e || "column" in e ? kn(e) : "";
}
function kn(e) {
  return fr(e && e.line) + ":" + fr(e && e.column);
}
function dr(e) {
  return kn(e && e.start) + "-" + kn(e && e.end);
}
function fr(e) {
  return e && typeof e == "number" ? e : 1;
}
class le extends Error {
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
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = mt(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
le.prototype.file = "";
le.prototype.name = "";
le.prototype.reason = "";
le.prototype.message = "";
le.prototype.stack = "";
le.prototype.column = void 0;
le.prototype.line = void 0;
le.prototype.ancestors = void 0;
le.prototype.cause = void 0;
le.prototype.fatal = void 0;
le.prototype.place = void 0;
le.prototype.ruleId = void 0;
le.prototype.source = void 0;
const jn = {}.hasOwnProperty, As = /* @__PURE__ */ new Map(), Ps = /[A-Z]/g, Ls = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ds = /* @__PURE__ */ new Set(["td", "th"]), Ni = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Rs(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = _s(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Bs(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? Fn : ks,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = Hi(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function Hi(e, t, n) {
  if (t.type === "element")
    return Fs(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Ms(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return $s(e, t, n);
  if (t.type === "mdxjsEsm")
    return js(e, t);
  if (t.type === "root")
    return zs(e, t, n);
  if (t.type === "text")
    return Os(e, t);
}
function Fs(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Fn, e.schema = i), e.ancestors.push(t);
  const l = Ui(e, t.tagName, !1), o = Vs(e, t);
  let a = zn(e, t);
  return Ls.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !cs(u) : !0;
  })), qi(e, o, l, t), $n(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function Ms(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  bt(e, t.position);
}
function js(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  bt(e, t.position);
}
function $s(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Fn, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : Ui(e, t.name, !0), o = Ns(e, t), a = zn(e, t);
  return qi(e, o, l, t), $n(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function zs(e, t, n) {
  const r = {};
  return $n(r, zn(e, t)), e.create(t, e.Fragment, r, n);
}
function Os(e, t) {
  return t.value;
}
function qi(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function $n(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Bs(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const s = Array.isArray(o.children) ? n : t;
    return a ? s(l, o, a) : s(l, o);
  }
}
function _s(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), u = Mn(r);
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
function Vs(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && jn.call(t.properties, i)) {
      const l = Hs(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && Ds.has(t.tagName) ? r = a : n[o] = a;
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
function Ns(e, t) {
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
        bt(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          bt(e, t.position);
      else
        l = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return n;
}
function zn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : As;
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
    const a = Hi(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Hs(e, t, n) {
  const r = xs(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? ls(n) : ws(n)), r.property === "style") {
      let i = typeof n == "object" ? n : qs(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Us(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? ps[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function qs(e, t) {
  try {
    return Is(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new le("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Ni + "#cannot-parse-style-attribute", i;
  }
}
function Ui(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = rr(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = rr(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return jn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  bt(e);
}
function bt(e, t) {
  const n = new le(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Ni + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Us(e) {
  const t = {};
  let n;
  for (n in e)
    jn.call(e, n) && (t[Ws(n)] = e[n]);
  return t;
}
function Ws(e) {
  let t = e.replace(Ps, Zs);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Zs(e) {
  return "-" + e.toLowerCase();
}
const Yt = {
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
}, Ks = {};
function On(e, t) {
  const n = Ks, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Wi(e, r, i);
}
function Wi(e, t, n) {
  if (Gs(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return hr(e.children, t, n);
  }
  return Array.isArray(e) ? hr(e, t, n) : "";
}
function hr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Wi(e[i], t, n);
  return r.join("");
}
function Gs(e) {
  return !!(e && typeof e == "object");
}
const pr = document.createElement("i");
function Bn(e) {
  const t = "&" + e + ";";
  pr.innerHTML = t;
  const n = pr.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function ye(e, t, n, r) {
  const i = e.length;
  let l = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4;
}
function be(e, t) {
  return e.length > 0 ? (ye(e, e.length, 0, t), e) : t;
}
const mr = {}.hasOwnProperty;
function Zi(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Xs(t, e[n]);
  return t;
}
function Xs(e, t) {
  let n;
  for (n in t) {
    const i = (mr.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        mr.call(i, o) || (i[o] = []);
        const a = l[o];
        Ys(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Ys(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  ye(e, 0, 0, r);
}
function Ki(e, t) {
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
function Se(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const se = Be(/[A-Za-z]/), ie = Be(/[\dA-Za-z]/), Qs = Be(/[#-'*+\--9=?A-Z^-~]/);
function Mt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const wn = Be(/\d/), Js = Be(/[\dA-Fa-f]/), eu = Be(/[!-/:-@[-`{-~]/);
function O(e) {
  return e !== null && e < -2;
}
function Y(e) {
  return e !== null && (e < 0 || e === 32);
}
function q(e) {
  return e === -2 || e === -1 || e === 32;
}
const Ot = Be(new RegExp("\\p{P}|\\p{S}", "u")), qe = Be(/\s/);
function Be(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function rt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const l = e.charCodeAt(n);
    let o = "";
    if (l === 37 && ie(e.charCodeAt(n + 1)) && ie(e.charCodeAt(n + 2)))
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
function G(e, t, n, r) {
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
const tu = {
  tokenize: nu
};
function nu(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), G(e, t, "linePrefix");
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
    return O(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const ru = {
  tokenize: iu
}, gr = {
  tokenize: lu
};
function iu(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(k) {
    if (r < n.length) {
      const P = n[r];
      return t.containerState = P[1], e.attempt(P[0].continuation, u, s)(k);
    }
    return s(k);
  }
  function u(k) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && E();
      const P = t.events.length;
      let T = P, w;
      for (; T--; )
        if (t.events[T][0] === "exit" && t.events[T][1].type === "chunkFlow") {
          w = t.events[T][1].end;
          break;
        }
      y(r);
      let $ = P;
      for (; $ < t.events.length; )
        t.events[$][1].end = {
          ...w
        }, $++;
      return ye(t.events, T + 1, 0, t.events.slice(P)), t.events.length = $, s(k);
    }
    return a(k);
  }
  function s(k) {
    if (r === n.length) {
      if (!i)
        return h(k);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return p(k);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(gr, d, c)(k);
  }
  function d(k) {
    return i && E(), y(r), h(k);
  }
  function c(k) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, p(k);
  }
  function h(k) {
    return t.containerState = {}, e.attempt(gr, f, p)(k);
  }
  function f(k) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(k);
  }
  function p(k) {
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
    return O(k) ? (e.consume(k), b(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(k), v);
  }
  function b(k, P) {
    const T = t.sliceStream(k);
    if (P && T.push(null), k.previous = l, l && (l.next = k), l = k, i.defineSkip(k.start), i.write(T), t.parser.lazy[k.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const $ = t.events.length;
      let B = $, _, C;
      for (; B--; )
        if (t.events[B][0] === "exit" && t.events[B][1].type === "chunkFlow") {
          if (_) {
            C = t.events[B][1].end;
            break;
          }
          _ = !0;
        }
      for (y(r), w = $; w < t.events.length; )
        t.events[w][1].end = {
          ...C
        }, w++;
      ye(t.events, B + 1, 0, t.events.slice($)), t.events.length = w;
    }
  }
  function y(k) {
    let P = n.length;
    for (; P-- > k; ) {
      const T = n[P];
      t.containerState = T[1], T[0].exit.call(t, e);
    }
    n.length = k;
  }
  function E() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function lu(e, t, n) {
  return G(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function et(e) {
  if (e === null || Y(e) || qe(e))
    return 1;
  if (Ot(e))
    return 2;
}
function Bt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (t = l(t, n), r.push(l));
  }
  return t;
}
const Cn = {
  name: "attention",
  resolveAll: ou,
  tokenize: au
};
function ou(e, t) {
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
          xr(c, -u), xr(h, u), o = {
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
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = be(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = be(s, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), s = be(s, Bt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = be(s, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (d = 2, s = be(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : d = 0, ye(e, r - 1, n - r + 3, s), n = r + s.length - d - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function au(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = et(r);
  let l;
  return o;
  function o(u) {
    return l = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === l)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), d = et(u), c = !d || d === 2 && i || n.includes(u), h = !i || i === 2 && d || n.includes(r);
    return s._open = !!(l === 42 ? c : c && (i || !h)), s._close = !!(l === 42 ? h : h && (d || !c)), t(u);
  }
}
function xr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const su = {
  name: "autolink",
  tokenize: uu
};
function uu(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(f) {
    return se(f) ? (e.consume(f), o) : f === 64 ? n(f) : s(f);
  }
  function o(f) {
    return f === 43 || f === 45 || f === 46 || ie(f) ? (r = 1, a(f)) : s(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, u) : (f === 43 || f === 45 || f === 46 || ie(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, s(f));
  }
  function u(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || Mt(f) ? n(f) : (e.consume(f), u);
  }
  function s(f) {
    return f === 64 ? (e.consume(f), d) : Qs(f) ? (e.consume(f), s) : n(f);
  }
  function d(f) {
    return ie(f) ? c(f) : n(f);
  }
  function c(f) {
    return f === 46 ? (e.consume(f), r = 0, d) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(f);
  }
  function h(f) {
    if ((f === 45 || ie(f)) && r++ < 63) {
      const p = f === 45 ? h : c;
      return e.consume(f), p;
    }
    return n(f);
  }
}
const vt = {
  partial: !0,
  tokenize: cu
};
function cu(e, t, n) {
  return r;
  function r(l) {
    return q(l) ? G(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || O(l) ? t(l) : n(l);
  }
}
const Gi = {
  continuation: {
    tokenize: fu
  },
  exit: hu,
  name: "blockQuote",
  tokenize: du
};
function du(e, t, n) {
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
function fu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return q(o) ? G(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(Gi, t, n)(o);
  }
}
function hu(e) {
  e.exit("blockQuote");
}
const Xi = {
  name: "characterEscape",
  tokenize: pu
};
function pu(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return eu(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const Yi = {
  name: "characterReference",
  tokenize: mu
};
function mu(e, t, n) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), u;
  }
  function u(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), l = 31, o = ie, d(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = Js, d) : (e.enter("characterReferenceValue"), l = 7, o = wn, d(c));
  }
  function d(c) {
    if (c === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return o === ie && !Bn(r.sliceSerialize(h)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(c) && i++ < l ? (e.consume(c), d) : n(c);
  }
}
const yr = {
  partial: !0,
  tokenize: xu
}, br = {
  concrete: !0,
  name: "codeFenced",
  tokenize: gu
};
function gu(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: T
  };
  let l = 0, o = 0, a;
  return u;
  function u(w) {
    return s(w);
  }
  function s(w) {
    const $ = r.events[r.events.length - 1];
    return l = $ && $[1].type === "linePrefix" ? $[2].sliceSerialize($[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(w);
  }
  function d(w) {
    return w === a ? (o++, e.consume(w), d) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), q(w) ? G(e, c, "whitespace")(w) : c(w));
  }
  function c(w) {
    return w === null || O(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(yr, v, P)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(w));
  }
  function h(w) {
    return w === null || O(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(w)) : q(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), G(e, f, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), h);
  }
  function f(w) {
    return w === null || O(w) ? c(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || O(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(w)) : w === 96 && w === a ? n(w) : (e.consume(w), p);
  }
  function v(w) {
    return e.attempt(i, P, b)(w);
  }
  function b(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), y;
  }
  function y(w) {
    return l > 0 && q(w) ? G(e, E, "linePrefix", l + 1)(w) : E(w);
  }
  function E(w) {
    return w === null || O(w) ? e.check(yr, v, P)(w) : (e.enter("codeFlowValue"), k(w));
  }
  function k(w) {
    return w === null || O(w) ? (e.exit("codeFlowValue"), E(w)) : (e.consume(w), k);
  }
  function P(w) {
    return e.exit("codeFenced"), t(w);
  }
  function T(w, $, B) {
    let _ = 0;
    return C;
    function C(L) {
      return w.enter("lineEnding"), w.consume(L), w.exit("lineEnding"), R;
    }
    function R(L) {
      return w.enter("codeFencedFence"), q(L) ? G(w, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : F(L);
    }
    function F(L) {
      return L === a ? (w.enter("codeFencedFenceSequence"), V(L)) : B(L);
    }
    function V(L) {
      return L === a ? (_++, w.consume(L), V) : _ >= o ? (w.exit("codeFencedFenceSequence"), q(L) ? G(w, M, "whitespace")(L) : M(L)) : B(L);
    }
    function M(L) {
      return L === null || O(L) ? (w.exit("codeFencedFence"), $(L)) : B(L);
    }
  }
}
function xu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Qt = {
  name: "codeIndented",
  tokenize: bu
}, yu = {
  partial: !0,
  tokenize: ku
};
function bu(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), G(e, l, "linePrefix", 5)(s);
  }
  function l(s) {
    const d = r.events[r.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? o(s) : n(s);
  }
  function o(s) {
    return s === null ? u(s) : O(s) ? e.attempt(yu, o, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || O(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function ku(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : O(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : G(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : O(o) ? i(o) : n(o);
  }
}
const wu = {
  name: "codeText",
  previous: vu,
  resolve: Cu,
  tokenize: Su
};
function Cu(e) {
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
function vu(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Su(e, t, n) {
  let r = 0, i, l;
  return o;
  function o(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), u(c));
  }
  function u(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), u) : c === 96 ? (l = e.enter("codeTextSequence"), i = 0, d(c)) : O(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || O(c) ? (e.exit("codeTextData"), u(c)) : (e.consume(c), s);
  }
  function d(c) {
    return c === 96 ? (e.consume(c), i++, d) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (l.type = "codeTextData", s(c));
  }
}
class Eu {
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
    return r && ht(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), ht(this.left, t);
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
    this.setCursor(0), ht(this.right, t.reverse());
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
        ht(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        ht(this.left, n.reverse());
      }
  }
}
function ht(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Qi(e) {
  const t = {};
  let n = -1, r, i, l, o, a, u, s;
  const d = new Eu(e);
  for (; ++n < d.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = d.get(n), n && r[1].type === "chunkFlow" && d.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, l = 0, l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2), l < u.length && u[l][1].type === "content"))
      for (; ++l < u.length && u[l][1].type !== "content"; )
        u[l][1].type === "chunkText" && (u[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Tu(d, n)), n = t[n], s = !0);
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
  return ye(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !s;
}
function Tu(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, u = [], s = {};
  let d, c, h = -1, f = n, p = 0, v = 0;
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
    s[p + u[h][0]] = p + u[h][1], p += u[h][1] - u[h][0] - 1;
  return s;
}
const Iu = {
  resolve: Pu,
  tokenize: Lu
}, Au = {
  partial: !0,
  tokenize: Du
};
function Pu(e) {
  return Qi(e), e;
}
function Lu(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : O(a) ? e.check(Au, o, l)(a) : (e.consume(a), i);
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
function Du(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), G(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || O(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function Ji(e, t, n, r, i, l, o, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let d = 0;
  return c;
  function c(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), h) : y === null || y === 32 || y === 41 || Mt(y) ? n(y) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(y));
  }
  function h(y) {
    return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(y));
  }
  function f(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), h(y)) : y === null || y === 60 || O(y) ? n(y) : (e.consume(y), y === 92 ? p : f);
  }
  function p(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), f) : f(y);
  }
  function v(y) {
    return !d && (y === null || y === 41 || Y(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(y)) : d < s && y === 40 ? (e.consume(y), d++, v) : y === 41 ? (e.consume(y), d--, v) : y === null || y === 32 || y === 40 || Mt(y) ? n(y) : (e.consume(y), y === 92 ? b : v);
  }
  function b(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), v) : v(y);
  }
}
function el(e, t, n, r, i, l) {
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
    f === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(f) : f === 93 ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : O(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), d) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || O(f) || a++ > 999 ? (e.exit("chunkString"), d(f)) : (e.consume(f), u || (u = !q(f)), f === 92 ? h : c);
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
  }
}
function tl(e, t, n, r, i, l) {
  let o;
  return a;
  function a(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, u) : n(h);
  }
  function u(h) {
    return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(l), s(h));
  }
  function s(h) {
    return h === o ? (e.exit(l), u(o)) : h === null ? n(h) : O(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), G(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), d(h));
  }
  function d(h) {
    return h === o || h === null || O(h) ? (e.exit("chunkString"), s(h)) : (e.consume(h), h === 92 ? c : d);
  }
  function c(h) {
    return h === o || h === 92 ? (e.consume(h), d) : d(h);
  }
}
function gt(e, t) {
  let n;
  return r;
  function r(i) {
    return O(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? G(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Ru = {
  name: "definition",
  tokenize: Mu
}, Fu = {
  partial: !0,
  tokenize: ju
};
function Mu(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(f) {
    return e.enter("definition"), o(f);
  }
  function o(f) {
    return el.call(
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
    return i = Se(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), u) : n(f);
  }
  function u(f) {
    return Y(f) ? gt(e, s)(f) : s(f);
  }
  function s(f) {
    return Ji(
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
    return e.attempt(Fu, c, c)(f);
  }
  function c(f) {
    return q(f) ? G(e, h, "whitespace")(f) : h(f);
  }
  function h(f) {
    return f === null || O(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function ju(e, t, n) {
  return r;
  function r(a) {
    return Y(a) ? gt(e, i)(a) : n(a);
  }
  function i(a) {
    return tl(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return q(a) ? G(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || O(a) ? t(a) : n(a);
  }
}
const $u = {
  name: "hardBreakEscape",
  tokenize: zu
};
function zu(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return O(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const Ou = {
  name: "headingAtx",
  resolve: Bu,
  tokenize: _u
};
function Bu(e, t) {
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
  }, ye(e, r, n - r + 1, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]])), e;
}
function _u(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("atxHeading"), l(d);
  }
  function l(d) {
    return e.enter("atxHeadingSequence"), o(d);
  }
  function o(d) {
    return d === 35 && r++ < 6 ? (e.consume(d), o) : d === null || Y(d) ? (e.exit("atxHeadingSequence"), a(d)) : n(d);
  }
  function a(d) {
    return d === 35 ? (e.enter("atxHeadingSequence"), u(d)) : d === null || O(d) ? (e.exit("atxHeading"), t(d)) : q(d) ? G(e, a, "whitespace")(d) : (e.enter("atxHeadingText"), s(d));
  }
  function u(d) {
    return d === 35 ? (e.consume(d), u) : (e.exit("atxHeadingSequence"), a(d));
  }
  function s(d) {
    return d === null || d === 35 || Y(d) ? (e.exit("atxHeadingText"), a(d)) : (e.consume(d), s);
  }
}
const Vu = [
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
], kr = ["pre", "script", "style", "textarea"], Nu = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Uu,
  tokenize: Wu
}, Hu = {
  partial: !0,
  tokenize: Ku
}, qu = {
  partial: !0,
  tokenize: Zu
};
function Uu(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Wu(e, t, n) {
  const r = this;
  let i, l, o, a, u;
  return s;
  function s(g) {
    return d(g);
  }
  function d(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (e.consume(g), h) : g === 47 ? (e.consume(g), l = !0, v) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : m) : se(g) ? (e.consume(g), o = String.fromCharCode(g), b) : n(g);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), i = 2, f) : g === 91 ? (e.consume(g), i = 5, a = 0, p) : se(g) ? (e.consume(g), i = 4, r.interrupt ? t : m) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : m) : n(g);
  }
  function p(g) {
    const me = "CDATA[";
    return g === me.charCodeAt(a++) ? (e.consume(g), a === me.length ? r.interrupt ? t : F : p) : n(g);
  }
  function v(g) {
    return se(g) ? (e.consume(g), o = String.fromCharCode(g), b) : n(g);
  }
  function b(g) {
    if (g === null || g === 47 || g === 62 || Y(g)) {
      const me = g === 47, we = o.toLowerCase();
      return !me && !l && kr.includes(we) ? (i = 1, r.interrupt ? t(g) : F(g)) : Vu.includes(o.toLowerCase()) ? (i = 6, me ? (e.consume(g), y) : r.interrupt ? t(g) : F(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : l ? E(g) : k(g));
    }
    return g === 45 || ie(g) ? (e.consume(g), o += String.fromCharCode(g), b) : n(g);
  }
  function y(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : F) : n(g);
  }
  function E(g) {
    return q(g) ? (e.consume(g), E) : C(g);
  }
  function k(g) {
    return g === 47 ? (e.consume(g), C) : g === 58 || g === 95 || se(g) ? (e.consume(g), P) : q(g) ? (e.consume(g), k) : C(g);
  }
  function P(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || ie(g) ? (e.consume(g), P) : T(g);
  }
  function T(g) {
    return g === 61 ? (e.consume(g), w) : q(g) ? (e.consume(g), T) : k(g);
  }
  function w(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), u = g, $) : q(g) ? (e.consume(g), w) : B(g);
  }
  function $(g) {
    return g === u ? (e.consume(g), u = null, _) : g === null || O(g) ? n(g) : (e.consume(g), $);
  }
  function B(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || Y(g) ? T(g) : (e.consume(g), B);
  }
  function _(g) {
    return g === 47 || g === 62 || q(g) ? k(g) : n(g);
  }
  function C(g) {
    return g === 62 ? (e.consume(g), R) : n(g);
  }
  function R(g) {
    return g === null || O(g) ? F(g) : q(g) ? (e.consume(g), R) : n(g);
  }
  function F(g) {
    return g === 45 && i === 2 ? (e.consume(g), U) : g === 60 && i === 1 ? (e.consume(g), ee) : g === 62 && i === 4 ? (e.consume(g), pe) : g === 63 && i === 3 ? (e.consume(g), m) : g === 93 && i === 5 ? (e.consume(g), he) : O(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Hu, ke, V)(g)) : g === null || O(g) ? (e.exit("htmlFlowData"), V(g)) : (e.consume(g), F);
  }
  function V(g) {
    return e.check(qu, M, ke)(g);
  }
  function M(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), L;
  }
  function L(g) {
    return g === null || O(g) ? V(g) : (e.enter("htmlFlowData"), F(g));
  }
  function U(g) {
    return g === 45 ? (e.consume(g), m) : F(g);
  }
  function ee(g) {
    return g === 47 ? (e.consume(g), o = "", oe) : F(g);
  }
  function oe(g) {
    if (g === 62) {
      const me = o.toLowerCase();
      return kr.includes(me) ? (e.consume(g), pe) : F(g);
    }
    return se(g) && o.length < 8 ? (e.consume(g), o += String.fromCharCode(g), oe) : F(g);
  }
  function he(g) {
    return g === 93 ? (e.consume(g), m) : F(g);
  }
  function m(g) {
    return g === 62 ? (e.consume(g), pe) : g === 45 && i === 2 ? (e.consume(g), m) : F(g);
  }
  function pe(g) {
    return g === null || O(g) ? (e.exit("htmlFlowData"), ke(g)) : (e.consume(g), pe);
  }
  function ke(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function Zu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return O(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function Ku(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(vt, t, n);
  }
}
const Gu = {
  name: "htmlText",
  tokenize: Xu
};
function Xu(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), u;
  }
  function u(m) {
    return m === 33 ? (e.consume(m), s) : m === 47 ? (e.consume(m), T) : m === 63 ? (e.consume(m), k) : se(m) ? (e.consume(m), B) : n(m);
  }
  function s(m) {
    return m === 45 ? (e.consume(m), d) : m === 91 ? (e.consume(m), l = 0, p) : se(m) ? (e.consume(m), E) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), f) : n(m);
  }
  function c(m) {
    return m === null ? n(m) : m === 45 ? (e.consume(m), h) : O(m) ? (o = c, ee(m)) : (e.consume(m), c);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), f) : c(m);
  }
  function f(m) {
    return m === 62 ? U(m) : m === 45 ? h(m) : c(m);
  }
  function p(m) {
    const pe = "CDATA[";
    return m === pe.charCodeAt(l++) ? (e.consume(m), l === pe.length ? v : p) : n(m);
  }
  function v(m) {
    return m === null ? n(m) : m === 93 ? (e.consume(m), b) : O(m) ? (o = v, ee(m)) : (e.consume(m), v);
  }
  function b(m) {
    return m === 93 ? (e.consume(m), y) : v(m);
  }
  function y(m) {
    return m === 62 ? U(m) : m === 93 ? (e.consume(m), y) : v(m);
  }
  function E(m) {
    return m === null || m === 62 ? U(m) : O(m) ? (o = E, ee(m)) : (e.consume(m), E);
  }
  function k(m) {
    return m === null ? n(m) : m === 63 ? (e.consume(m), P) : O(m) ? (o = k, ee(m)) : (e.consume(m), k);
  }
  function P(m) {
    return m === 62 ? U(m) : k(m);
  }
  function T(m) {
    return se(m) ? (e.consume(m), w) : n(m);
  }
  function w(m) {
    return m === 45 || ie(m) ? (e.consume(m), w) : $(m);
  }
  function $(m) {
    return O(m) ? (o = $, ee(m)) : q(m) ? (e.consume(m), $) : U(m);
  }
  function B(m) {
    return m === 45 || ie(m) ? (e.consume(m), B) : m === 47 || m === 62 || Y(m) ? _(m) : n(m);
  }
  function _(m) {
    return m === 47 ? (e.consume(m), U) : m === 58 || m === 95 || se(m) ? (e.consume(m), C) : O(m) ? (o = _, ee(m)) : q(m) ? (e.consume(m), _) : U(m);
  }
  function C(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || ie(m) ? (e.consume(m), C) : R(m);
  }
  function R(m) {
    return m === 61 ? (e.consume(m), F) : O(m) ? (o = R, ee(m)) : q(m) ? (e.consume(m), R) : _(m);
  }
  function F(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), i = m, V) : O(m) ? (o = F, ee(m)) : q(m) ? (e.consume(m), F) : (e.consume(m), M);
  }
  function V(m) {
    return m === i ? (e.consume(m), i = void 0, L) : m === null ? n(m) : O(m) ? (o = V, ee(m)) : (e.consume(m), V);
  }
  function M(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? n(m) : m === 47 || m === 62 || Y(m) ? _(m) : (e.consume(m), M);
  }
  function L(m) {
    return m === 47 || m === 62 || Y(m) ? _(m) : n(m);
  }
  function U(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(m);
  }
  function ee(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), oe;
  }
  function oe(m) {
    return q(m) ? G(e, he, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : he(m);
  }
  function he(m) {
    return e.enter("htmlTextData"), o(m);
  }
}
const _n = {
  name: "labelEnd",
  resolveAll: ec,
  resolveTo: tc,
  tokenize: nc
}, Yu = {
  tokenize: rc
}, Qu = {
  tokenize: ic
}, Ju = {
  tokenize: lc
};
function ec(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && ye(e, 0, e.length, n), e;
}
function tc(e, t) {
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
  return a = [["enter", u, t], ["enter", s, t]], a = be(a, e.slice(l + 1, l + r + 3)), a = be(a, [["enter", d, t]]), a = be(a, Bt(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), a = be(a, [["exit", d, t], e[o - 2], e[o - 1], ["exit", s, t]]), a = be(a, e.slice(o + 1)), a = be(a, [["exit", u, t]]), ye(e, l, e.length, a), e;
}
function nc(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(h) {
    return l ? l._inactive ? c(h) : (o = r.parser.defined.includes(Se(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(h);
  }
  function u(h) {
    return h === 40 ? e.attempt(Yu, d, o ? d : c)(h) : h === 91 ? e.attempt(Qu, d, o ? s : c)(h) : o ? d(h) : c(h);
  }
  function s(h) {
    return e.attempt(Ju, d, c)(h);
  }
  function d(h) {
    return t(h);
  }
  function c(h) {
    return l._balanced = !0, n(h);
  }
}
function rc(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Y(c) ? gt(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41 ? d(c) : Ji(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function o(c) {
    return Y(c) ? gt(e, u)(c) : d(c);
  }
  function a(c) {
    return n(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? tl(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : d(c);
  }
  function s(c) {
    return Y(c) ? gt(e, d)(c) : d(c);
  }
  function d(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function ic(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return el.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(Se(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function lc(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const oc = {
  name: "labelStartImage",
  resolveAll: _n.resolveAll,
  tokenize: ac
};
function ac(e, t, n) {
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
const sc = {
  name: "labelStartLink",
  resolveAll: _n.resolveAll,
  tokenize: uc
};
function uc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Jt = {
  name: "lineEnding",
  tokenize: cc
};
function cc(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), G(e, t, "linePrefix");
  }
}
const Dt = {
  name: "thematicBreak",
  tokenize: dc
};
function dc(e, t, n) {
  let r = 0, i;
  return l;
  function l(s) {
    return e.enter("thematicBreak"), o(s);
  }
  function o(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || O(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), q(s) ? G(e, a, "whitespace")(s) : a(s));
  }
}
const ue = {
  continuation: {
    tokenize: mc
  },
  exit: xc,
  name: "list",
  tokenize: pc
}, fc = {
  partial: !0,
  tokenize: yc
}, hc = {
  partial: !0,
  tokenize: gc
};
function pc(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(f) {
    const p = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (p === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : wn(f)) {
      if (r.containerState.type || (r.containerState.type = p, e.enter(p, {
        _container: !0
      })), p === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Dt, n, s)(f) : s(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(f);
    }
    return n(f);
  }
  function u(f) {
    return wn(f) && ++o < 10 ? (e.consume(f), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), s(f)) : n(f);
  }
  function s(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      vt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : d,
      e.attempt(fc, h, c)
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
function mc(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(vt, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, G(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(hc, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, G(e, e.attempt(ue, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function gc(e, t, n) {
  const r = this;
  return G(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function xc(e) {
  e.exit(this.containerState.type);
}
function yc(e, t, n) {
  const r = this;
  return G(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !q(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const wr = {
  name: "setextUnderline",
  resolveTo: bc,
  tokenize: kc
};
function bc(e, t) {
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
function kc(e, t, n) {
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
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), q(s) ? G(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || O(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const wc = {
  tokenize: Cc
};
function Cc(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    vt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, G(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Iu, i)), "linePrefix"))
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
const vc = {
  resolveAll: rl()
}, Sc = nl("string"), Ec = nl("text");
function nl(e) {
  return {
    resolveAll: rl(e === "text" ? Tc : void 0),
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
function rl(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function Tc(e, t) {
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
const Ic = {
  42: ue,
  43: ue,
  45: ue,
  48: ue,
  49: ue,
  50: ue,
  51: ue,
  52: ue,
  53: ue,
  54: ue,
  55: ue,
  56: ue,
  57: ue,
  62: Gi
}, Ac = {
  91: Ru
}, Pc = {
  [-2]: Qt,
  [-1]: Qt,
  32: Qt
}, Lc = {
  35: Ou,
  42: Dt,
  45: [wr, Dt],
  60: Nu,
  61: wr,
  95: Dt,
  96: br,
  126: br
}, Dc = {
  38: Yi,
  92: Xi
}, Rc = {
  [-5]: Jt,
  [-4]: Jt,
  [-3]: Jt,
  33: oc,
  38: Yi,
  42: Cn,
  60: [su, Gu],
  91: sc,
  92: [$u, Xi],
  93: _n,
  95: Cn,
  96: wu
}, Fc = {
  null: [Cn, vc]
}, Mc = {
  null: [42, 95]
}, jc = {
  null: []
}, $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Mc,
  contentInitial: Ac,
  disable: jc,
  document: Ic,
  flow: Lc,
  flowInitial: Pc,
  insideSpan: Fc,
  string: Dc,
  text: Rc
}, Symbol.toStringTag, { value: "Module" }));
function zc(e, t, n) {
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
    attempt: $(T),
    check: $(w),
    consume: E,
    enter: k,
    exit: P,
    interrupt: $(w, {
      interrupt: !0
    })
  }, s = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: p,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: f,
    write: c
  };
  let d = t.tokenize.call(s, u);
  return t.resolveAll && l.push(t), s;
  function c(R) {
    return o = be(o, R), b(), o[o.length - 1] !== null ? [] : (B(t, 0), s.events = Bt(l, s.events, s), s.events);
  }
  function h(R, F) {
    return Bc(f(R), F);
  }
  function f(R) {
    return Oc(o, R);
  }
  function p() {
    const {
      _bufferIndex: R,
      _index: F,
      line: V,
      column: M,
      offset: L
    } = r;
    return {
      _bufferIndex: R,
      _index: F,
      line: V,
      column: M,
      offset: L
    };
  }
  function v(R) {
    i[R.line] = R.column, C();
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
    O(R) ? (r.line++, r.column = 1, r.offset += R === -3 ? 2 : 1, C()) : R !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = R;
  }
  function k(R, F) {
    const V = F || {};
    return V.type = R, V.start = p(), s.events.push(["enter", V, s]), a.push(V), V;
  }
  function P(R) {
    const F = a.pop();
    return F.end = p(), s.events.push(["exit", F, s]), F;
  }
  function T(R, F) {
    B(R, F.from);
  }
  function w(R, F) {
    F.restore();
  }
  function $(R, F) {
    return V;
    function V(M, L, U) {
      let ee, oe, he, m;
      return Array.isArray(M) ? (
        /* c8 ignore next 1 */
        ke(M)
      ) : "tokenize" in M ? (
        // Looks like a construct.
        ke([
          /** @type {Construct} */
          M
        ])
      ) : pe(M);
      function pe(ne) {
        return Ae;
        function Ae(Ee) {
          const Me = Ee !== null && ne[Ee], je = Ee !== null && ne.null, We = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Me) ? Me : Me ? [Me] : [],
            ...Array.isArray(je) ? je : je ? [je] : []
          ];
          return ke(We)(Ee);
        }
      }
      function ke(ne) {
        return ee = ne, oe = 0, ne.length === 0 ? U : g(ne[oe]);
      }
      function g(ne) {
        return Ae;
        function Ae(Ee) {
          return m = _(), he = ne, ne.partial || (s.currentConstruct = ne), ne.name && s.parser.constructs.disable.null.includes(ne.name) ? we() : ne.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            F ? Object.assign(Object.create(s), F) : s,
            u,
            me,
            we
          )(Ee);
        }
      }
      function me(ne) {
        return R(he, m), L;
      }
      function we(ne) {
        return m.restore(), ++oe < ee.length ? g(ee[oe]) : U;
      }
    }
  }
  function B(R, F) {
    R.resolveAll && !l.includes(R) && l.push(R), R.resolve && ye(s.events, F, s.events.length - F, R.resolve(s.events.slice(F), s)), R.resolveTo && (s.events = R.resolveTo(s.events, s));
  }
  function _() {
    const R = p(), F = s.previous, V = s.currentConstruct, M = s.events.length, L = Array.from(a);
    return {
      from: M,
      restore: U
    };
    function U() {
      r = R, s.previous = F, s.currentConstruct = V, s.events.length = M, a = L, C();
    }
  }
  function C() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Oc(e, t) {
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
function Bc(e, t) {
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
function _c(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Zi([$c, ...(e || {}).extensions || []])
    ),
    content: i(tu),
    defined: [],
    document: i(ru),
    flow: i(wc),
    lazy: {},
    string: i(Sc),
    text: i(Ec)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return zc(r, l, a);
    }
  }
}
function Vc(e) {
  for (; !Qi(e); )
    ;
  return e;
}
const Cr = /[\0\t\n\r]/g;
function Nc() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const u = [];
    let s, d, c, h, f;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), c = 0, t = "", n && (l.charCodeAt(0) === 65279 && c++, n = void 0); c < l.length; ) {
      if (Cr.lastIndex = c, s = Cr.exec(l), h = s && s.index !== void 0 ? s.index : l.length, f = l.charCodeAt(h), !s) {
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
const Hc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function qc(e) {
  return e.replace(Hc, Uc);
}
function Uc(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return Ki(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Bn(n) || e;
}
const il = {}.hasOwnProperty;
function Wc(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Zc(n)(Vc(_c(n).document().write(Nc()(e, t, !0))));
}
function Zc(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(at),
      autolinkProtocol: _,
      autolinkEmail: _,
      atxHeading: l(it),
      blockQuote: l(je),
      characterEscape: _,
      characterReference: _,
      codeFenced: l(We),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(We, o),
      codeText: l(Ht, o),
      codeTextData: _,
      data: _,
      codeFlowValue: _,
      definition: l(qt),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(Ut),
      hardBreakEscape: l(lt),
      hardBreakTrailing: l(lt),
      htmlFlow: l(ot, o),
      htmlFlowData: _,
      htmlText: l(ot, o),
      htmlTextData: _,
      image: l(Tt),
      label: o,
      link: l(at),
      listItem: l(Z),
      listItemValue: h,
      listOrdered: l(j, c),
      listUnordered: l(j),
      paragraph: l(N),
      reference: g,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(it),
      strong: l(K),
      thematicBreak: l(re)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: T,
      autolink: u(),
      autolinkEmail: Me,
      autolinkProtocol: Ee,
      blockQuote: u(),
      characterEscapeValue: C,
      characterReferenceMarkerHexadecimal: we,
      characterReferenceMarkerNumeric: we,
      characterReferenceValue: ne,
      characterReference: Ae,
      codeFenced: u(b),
      codeFencedFence: v,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: p,
      codeFlowValue: C,
      codeIndented: u(y),
      codeText: u(L),
      codeTextData: C,
      data: C,
      definition: u(),
      definitionDestinationString: P,
      definitionLabelString: E,
      definitionTitleString: k,
      emphasis: u(),
      hardBreakEscape: u(F),
      hardBreakTrailing: u(F),
      htmlFlow: u(V),
      htmlFlowData: C,
      htmlText: u(M),
      htmlTextData: C,
      image: u(ee),
      label: he,
      labelText: oe,
      lineEnding: R,
      link: u(U),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: me,
      resourceDestinationString: m,
      resourceTitleString: pe,
      resource: ke,
      setextHeading: u(B),
      setextHeadingLineSequence: $,
      setextHeadingText: w,
      strong: u(),
      thematicBreak: u()
    }
  };
  ll(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(S) {
    let A = {
      type: "root",
      children: []
    };
    const z = {
      stack: [A],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: o,
      resume: d,
      data: n
    }, W = [];
    let X = -1;
    for (; ++X < S.length; )
      if (S[X][1].type === "listOrdered" || S[X][1].type === "listUnordered")
        if (S[X][0] === "enter")
          W.push(X);
        else {
          const Ce = W.pop();
          X = i(S, Ce, X);
        }
    for (X = -1; ++X < S.length; ) {
      const Ce = t[S[X][0]];
      il.call(Ce, S[X][1].type) && Ce[S[X][1].type].call(Object.assign({
        sliceSerialize: S[X][2].sliceSerialize
      }, z), S[X][1]);
    }
    if (z.tokenStack.length > 0) {
      const Ce = z.tokenStack[z.tokenStack.length - 1];
      (Ce[1] || vr).call(z, void 0, Ce[0]);
    }
    for (A.position = {
      start: $e(S.length > 0 ? S[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: $e(S.length > 0 ? S[S.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, X = -1; ++X < t.transforms.length; )
      A = t.transforms[X](A) || A;
    return A;
  }
  function i(S, A, z) {
    let W = A - 1, X = -1, Ce = !1, _e, Pe, st, ut;
    for (; ++W <= z; ) {
      const ge = S[W];
      switch (ge[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ge[0] === "enter" ? X++ : X--, ut = void 0;
          break;
        }
        case "lineEndingBlank": {
          ge[0] === "enter" && (_e && !ut && !X && !st && (st = W), ut = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ut = void 0;
      }
      if (!X && ge[0] === "enter" && ge[1].type === "listItemPrefix" || X === -1 && ge[0] === "exit" && (ge[1].type === "listUnordered" || ge[1].type === "listOrdered")) {
        if (_e) {
          let Ze = W;
          for (Pe = void 0; Ze--; ) {
            const Le = S[Ze];
            if (Le[1].type === "lineEnding" || Le[1].type === "lineEndingBlank") {
              if (Le[0] === "exit") continue;
              Pe && (S[Pe][1].type = "lineEndingBlank", Ce = !0), Le[1].type = "lineEnding", Pe = Ze;
            } else if (!(Le[1].type === "linePrefix" || Le[1].type === "blockQuotePrefix" || Le[1].type === "blockQuotePrefixWhitespace" || Le[1].type === "blockQuoteMarker" || Le[1].type === "listItemIndent")) break;
          }
          st && (!Pe || st < Pe) && (_e._spread = !0), _e.end = Object.assign({}, Pe ? S[Pe][1].start : ge[1].end), S.splice(Pe || W, 0, ["exit", _e, ge[2]]), W++, z++;
        }
        if (ge[1].type === "listItemPrefix") {
          const Ze = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ge[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          _e = Ze, S.splice(W, 0, ["enter", Ze, ge[2]]), W++, z++, st = void 0, ut = !0;
        }
      }
    }
    return S[A][1]._spread = Ce, z;
  }
  function l(S, A) {
    return z;
    function z(W) {
      a.call(this, S(W), W), A && A.call(this, W);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(S, A, z) {
    this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([A, z || void 0]), S.position = {
      start: $e(A.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(S) {
    return A;
    function A(z) {
      S && S.call(this, z), s.call(this, z);
    }
  }
  function s(S, A) {
    const z = this.stack.pop(), W = this.tokenStack.pop();
    if (W)
      W[0].type !== S.type && (A ? A.call(this, S, W[0]) : (W[1] || vr).call(this, S, W[0]));
    else throw new Error("Cannot close `" + S.type + "` (" + mt({
      start: S.start,
      end: S.end
    }) + "): it’s not open");
    z.position.end = $e(S.end);
  }
  function d() {
    return On(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(S) {
    if (this.data.expectingFirstListItemValue) {
      const A = this.stack[this.stack.length - 2];
      A.start = Number.parseInt(this.sliceSerialize(S), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function f() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.lang = S;
  }
  function p() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.meta = S;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function b() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function y() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function E(S) {
    const A = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = A, z.identifier = Se(this.sliceSerialize(S)).toLowerCase();
  }
  function k() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.title = S;
  }
  function P() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.url = S;
  }
  function T(S) {
    const A = this.stack[this.stack.length - 1];
    if (!A.depth) {
      const z = this.sliceSerialize(S).length;
      A.depth = z;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function $(S) {
    const A = this.stack[this.stack.length - 1];
    A.depth = this.sliceSerialize(S).codePointAt(0) === 61 ? 1 : 2;
  }
  function B() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function _(S) {
    const z = this.stack[this.stack.length - 1].children;
    let W = z[z.length - 1];
    (!W || W.type !== "text") && (W = ae(), W.position = {
      start: $e(S.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(W)), this.stack.push(W);
  }
  function C(S) {
    const A = this.stack.pop();
    A.value += this.sliceSerialize(S), A.position.end = $e(S.end);
  }
  function R(S) {
    const A = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = A.children[A.children.length - 1];
      z.position.end = $e(S.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(A.type) && (_.call(this, S), C.call(this, S));
  }
  function F() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = S;
  }
  function M() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = S;
  }
  function L() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = S;
  }
  function U() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = A, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function ee() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = A, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function oe(S) {
    const A = this.sliceSerialize(S), z = this.stack[this.stack.length - 2];
    z.label = qc(A), z.identifier = Se(A).toLowerCase();
  }
  function he() {
    const S = this.stack[this.stack.length - 1], A = this.resume(), z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, z.type === "link") {
      const W = S.children;
      z.children = W;
    } else
      z.alt = A;
  }
  function m() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.url = S;
  }
  function pe() {
    const S = this.resume(), A = this.stack[this.stack.length - 1];
    A.title = S;
  }
  function ke() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function me(S) {
    const A = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = A, z.identifier = Se(this.sliceSerialize(S)).toLowerCase(), this.data.referenceType = "full";
  }
  function we(S) {
    this.data.characterReferenceType = S.type;
  }
  function ne(S) {
    const A = this.sliceSerialize(S), z = this.data.characterReferenceType;
    let W;
    z ? (W = Ki(A, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : W = Bn(A);
    const X = this.stack[this.stack.length - 1];
    X.value += W;
  }
  function Ae(S) {
    const A = this.stack.pop();
    A.position.end = $e(S.end);
  }
  function Ee(S) {
    C.call(this, S);
    const A = this.stack[this.stack.length - 1];
    A.url = this.sliceSerialize(S);
  }
  function Me(S) {
    C.call(this, S);
    const A = this.stack[this.stack.length - 1];
    A.url = "mailto:" + this.sliceSerialize(S);
  }
  function je() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function We() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Ht() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function qt() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ut() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function it() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function lt() {
    return {
      type: "break"
    };
  }
  function ot() {
    return {
      type: "html",
      value: ""
    };
  }
  function Tt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function at() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function j(S) {
    return {
      type: "list",
      ordered: S.type === "listOrdered",
      start: null,
      spread: S._spread,
      children: []
    };
  }
  function Z(S) {
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
  function K() {
    return {
      type: "strong",
      children: []
    };
  }
  function ae() {
    return {
      type: "text",
      value: ""
    };
  }
  function re() {
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
function ll(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? ll(e, r) : Kc(e, r);
  }
}
function Kc(e, t) {
  let n;
  for (n in t)
    if (il.call(t, n))
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
function vr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + mt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + mt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + mt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Gc(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Wc(r, {
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
function Xc(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Yc(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Qc(e, t) {
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
function Jc(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ed(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function td(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = rt(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
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
function nd(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function rd(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function ol(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function id(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ol(e, t);
  const i = { src: rt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function ld(e, t) {
  const n = { src: rt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function od(e, t) {
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
function ad(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ol(e, t);
  const i = { href: rt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function sd(e, t) {
  const n = { href: rt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ud(e, t, n) {
  const r = e.all(t), i = n ? cd(n) : al(t), l = {}, o = [];
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
function cd(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = al(n[r]);
  }
  return t;
}
function al(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function dd(e, t) {
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
function fd(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function hd(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function pd(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function md(e, t) {
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
    }, a = Mn(t.children[1]), u = Bi(t.children[t.children.length - 1]);
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
function gd(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const c = t.children[u], h = {}, f = o ? o[u] : void 0;
    f && (h.align = f);
    let p = { type: "element", tagName: l, properties: h, children: [] };
    c && (p.children = e.all(c), e.patch(c, p), p = e.applyData(c, p)), s.push(p);
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, d), e.applyData(t, d);
}
function xd(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Sr = 9, Er = 32;
function yd(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      Tr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(Tr(t.slice(i), i > 0, !1)), l.join("");
}
function Tr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Sr || l === Er; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Sr || l === Er; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function bd(e, t) {
  const n = { type: "text", value: yd(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function kd(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const wd = {
  blockquote: Xc,
  break: Yc,
  code: Qc,
  delete: Jc,
  emphasis: ed,
  footnoteReference: td,
  heading: nd,
  html: rd,
  imageReference: id,
  image: ld,
  inlineCode: od,
  linkReference: ad,
  link: sd,
  listItem: ud,
  list: dd,
  paragraph: fd,
  // @ts-expect-error: root is different, but hard to type.
  root: hd,
  strong: pd,
  table: md,
  tableCell: xd,
  tableRow: gd,
  text: bd,
  thematicBreak: kd,
  toml: It,
  yaml: It,
  definition: It,
  footnoteDefinition: It
};
function It() {
}
const sl = -1, _t = 0, xt = 1, jt = 2, Vn = 3, Nn = 4, Hn = 5, qn = 6, ul = 7, cl = 8, Ir = typeof self == "object" ? self : globalThis, Cd = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case _t:
      case sl:
        return n(o, i);
      case xt: {
        const a = n([], i);
        for (const u of o)
          a.push(r(u));
        return a;
      }
      case jt: {
        const a = n({}, i);
        for (const [u, s] of o)
          a[r(u)] = r(s);
        return a;
      }
      case Vn:
        return n(new Date(o), i);
      case Nn: {
        const { source: a, flags: u } = o;
        return n(new RegExp(a, u), i);
      }
      case Hn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of o)
          a.set(r(u), r(s));
        return a;
      }
      case qn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          a.add(r(u));
        return a;
      }
      case ul: {
        const { name: a, message: u } = o;
        return n(new Ir[a](u), i);
      }
      case cl:
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
    return n(new Ir[l](o), i);
  };
  return r;
}, Ar = (e) => Cd(/* @__PURE__ */ new Map(), e)(0), Ge = "", { toString: vd } = {}, { keys: Sd } = Object, pt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [_t, t];
  const n = vd.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [xt, Ge];
    case "Object":
      return [jt, Ge];
    case "Date":
      return [Vn, Ge];
    case "RegExp":
      return [Nn, Ge];
    case "Map":
      return [Hn, Ge];
    case "Set":
      return [qn, Ge];
    case "DataView":
      return [xt, n];
  }
  return n.includes("Array") ? [xt, n] : n.includes("Error") ? [ul, n] : [jt, n];
}, At = ([e, t]) => e === _t && (t === "function" || t === "symbol"), Ed = (e, t, n, r) => {
  const i = (o, a) => {
    const u = r.push(o) - 1;
    return n.set(a, u), u;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, u] = pt(o);
    switch (a) {
      case _t: {
        let d = o;
        switch (u) {
          case "bigint":
            a = cl, d = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            d = null;
            break;
          case "undefined":
            return i([sl], o);
        }
        return i([a, d], o);
      }
      case xt: {
        if (u) {
          let h = o;
          return u === "DataView" ? h = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (h = new Uint8Array(o)), i([u, [...h]], o);
        }
        const d = [], c = i([a, d], o);
        for (const h of o)
          d.push(l(h));
        return c;
      }
      case jt: {
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
        for (const h of Sd(o))
          (e || !At(pt(o[h]))) && d.push([l(h), l(o[h])]);
        return c;
      }
      case Vn:
        return i([a, o.toISOString()], o);
      case Nn: {
        const { source: d, flags: c } = o;
        return i([a, { source: d, flags: c }], o);
      }
      case Hn: {
        const d = [], c = i([a, d], o);
        for (const [h, f] of o)
          (e || !(At(pt(h)) || At(pt(f)))) && d.push([l(h), l(f)]);
        return c;
      }
      case qn: {
        const d = [], c = i([a, d], o);
        for (const h of o)
          (e || !At(pt(h))) && d.push(l(h));
        return c;
      }
    }
    const { message: s } = o;
    return i([a, { name: u, message: s }], o);
  };
  return l;
}, Pr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Ed(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, kt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Ar(Pr(e, t)) : structuredClone(e)
) : (e, t) => Ar(Pr(e, t));
function Td(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Id(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Ad(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Td, r = e.options.footnoteBackLabel || Id, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const d = e.all(s), c = String(s.identifier).toUpperCase(), h = rt(c.toLowerCase());
    let f = 0;
    const p = [], v = e.footnoteCounts.get(c);
    for (; v !== void 0 && ++f <= v; ) {
      p.length > 0 && p.push({ type: "text", value: " " });
      let E = typeof n == "string" ? n : n(u, f);
      typeof E == "string" && (E = { type: "text", value: E }), p.push({
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
      E && E.type === "text" ? E.value += " " : b.children.push({ type: "text", value: " " }), b.children.push(...p);
    } else
      d.push(...p);
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
            ...kt(o),
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
const Vt = (
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
      return Rd;
    if (typeof e == "function")
      return Nt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Pd(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Ld(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Dd(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Pd(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Vt(e[n]);
  return Nt(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function Ld(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Nt(n);
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
function Dd(e) {
  return Nt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Nt(e) {
  return t;
  function t(n, r, i) {
    return !!(Fd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Rd() {
  return !0;
}
function Fd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const dl = [], Md = !0, vn = !1, jd = "skip";
function fl(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = Vt(i), o = r ? -1 : 1;
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
      let f = dl, p, v, b;
      if ((!t || l(u, s, d[d.length - 1] || void 0)) && (f = $d(n(u, d)), f[0] === vn))
        return f;
      if ("children" in u && u.children) {
        const y = (
          /** @type {UnistParent} */
          u
        );
        if (y.children && f[0] !== jd)
          for (v = (r ? y.children.length : -1) + o, b = d.concat(y); v > -1 && v < y.children.length; ) {
            const E = y.children[v];
            if (p = a(E, v, b)(), p[0] === vn)
              return p;
            v = typeof p[1] == "number" ? p[1] : v + o;
          }
      }
      return f;
    }
  }
}
function $d(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Md, e] : e == null ? dl : [e];
}
function Un(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), fl(e, l, a, i);
  function a(u, s) {
    const d = s[s.length - 1], c = d ? d.children.indexOf(u) : void 0;
    return o(u, c, d);
  }
}
const Sn = {}.hasOwnProperty, zd = {};
function Od(e, t) {
  const n = t || zd, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...wd, ...n.handlers }, a = {
    all: s,
    applyData: _d,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: n,
    patch: Bd,
    wrap: Nd
  };
  return Un(e, function(d) {
    if (d.type === "definition" || d.type === "footnoteDefinition") {
      const c = d.type === "definition" ? r : i, h = String(d.identifier).toUpperCase();
      c.has(h) || c.set(h, d);
    }
  }), a;
  function u(d, c) {
    const h = d.type, f = a.handlers[h];
    if (Sn.call(a.handlers, h) && f)
      return f(a, d, c);
    if (a.options.passThrough && a.options.passThrough.includes(h)) {
      if ("children" in d) {
        const { children: v, ...b } = d, y = kt(b);
        return y.children = a.all(d), y;
      }
      return kt(d);
    }
    return (a.options.unknownHandler || Vd)(a, d, c);
  }
  function s(d) {
    const c = [];
    if ("children" in d) {
      const h = d.children;
      let f = -1;
      for (; ++f < h.length; ) {
        const p = a.one(h[f], d);
        if (p) {
          if (f && h[f - 1].type === "break" && (!Array.isArray(p) && p.type === "text" && (p.value = Lr(p.value)), !Array.isArray(p) && p.type === "element")) {
            const v = p.children[0];
            v && v.type === "text" && (v.value = Lr(v.value));
          }
          Array.isArray(p) ? c.push(...p) : c.push(p);
        }
      }
    }
    return c;
  }
}
function Bd(e, t) {
  e.position && (t.position = Vi(e));
}
function _d(e, t) {
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
    n.type === "element" && l && Object.assign(n.properties, kt(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Vd(e, t) {
  const n = t.data || {}, r = "value" in t && !(Sn.call(n, "hProperties") || Sn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Nd(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Lr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Dr(e, t) {
  const n = Od(e, t), r = n.one(e, void 0), i = Ad(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Hd(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Dr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Dr(n, { file: r, ...e || t })
    );
  };
}
function Rr(e) {
  if (e)
    throw e;
}
var en, Fr;
function qd() {
  if (Fr) return en;
  Fr = 1;
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
  return en = function u() {
    var s, d, c, h, f, p, v = arguments[0], b = 1, y = arguments.length, E = !1;
    for (typeof v == "boolean" && (E = v, v = arguments[1] || {}, b = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); b < y; ++b)
      if (s = arguments[b], s != null)
        for (d in s)
          c = a(v, d), h = a(s, d), v !== h && (E && h && (l(h) || (f = i(h))) ? (f ? (f = !1, p = c && i(c) ? c : []) : p = c && l(c) ? c : {}, o(v, { name: d, newValue: u(E, p, h) })) : typeof h < "u" && o(v, { name: d, newValue: h }));
    return v;
  }, en;
}
var Ud = qd();
const tn = /* @__PURE__ */ ci(Ud);
function En(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Wd() {
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
      i = s, d ? Zd(d, a)(...s) : o(null, ...s);
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
function Zd(e, t) {
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
const Te = { basename: Kd, dirname: Gd, extname: Xd, join: Yd, sep: "/" };
function Kd(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  St(e);
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
function Gd(e) {
  if (St(e), e.length === 0)
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
function Xd(e) {
  St(e);
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
function Yd(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    St(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Qd(n);
}
function Qd(e) {
  St(e);
  const t = e.codePointAt(0) === 47;
  let n = Jd(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Jd(e, t) {
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
function St(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const ef = { cwd: tf };
function tf() {
  return "/";
}
function Tn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function nf(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Tn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return rf(e);
}
function rf(e) {
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
const nn = (
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
class hl {
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
    t ? Tn(t) ? n = { path: t } : typeof t == "string" || lf(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : ef.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < nn.length; ) {
      const l = nn[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      nn.includes(i) || (this[i] = n[i]);
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
    ln(t, "basename"), rn(t, "basename"), this.path = Te.join(this.dirname || "", t);
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
    Mr(this.basename, "dirname"), this.path = Te.join(t || "", this.basename);
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
    if (rn(t, "extname"), Mr(this.dirname, "extname"), t) {
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
    Tn(t) && (t = nf(t)), ln(t, "path"), this.path !== t && this.history.push(t);
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
    ln(t, "stem"), rn(t, "stem"), this.path = Te.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new le(
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
function rn(e, t) {
  if (e && e.includes(Te.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Te.sep + "`"
    );
}
function ln(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Mr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function lf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const of = (
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
), af = {}.hasOwnProperty;
class Wn extends of {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Wd();
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
      new Wn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(tn(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (sn("data", this.frozen), this.namespace[t] = n, this) : af.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (sn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Pt(t), r = this.parser || this.Parser;
    return on("parse", r), r(String(n), n);
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
    return this.freeze(), on("process", this.parser || this.Parser), an("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = Pt(t), u = (
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
        ), p = r.stringify(f, h);
        cf(p) ? h.value = p : h.result = p, s(
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
    return this.freeze(), on("processSync", this.parser || this.Parser), an("processSync", this.compiler || this.Compiler), this.process(t, i), $r("processSync", "process", n), r;
    function i(l, o) {
      n = !0, Rr(l), r = o;
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
    jr(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const u = Pt(n);
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
    return this.run(t, n, l), $r("runSync", "run", r), i;
    function l(o, a) {
      Rr(o), i = a, r = !0;
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
    const r = Pt(n), i = this.compiler || this.Compiler;
    return an("stringify", i), jr(t), i(t, r);
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
    if (sn("use", this.frozen), t != null) if (typeof t == "function")
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
      a(s.plugins), s.settings && (i.settings = tn(!0, i.settings, s.settings));
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
        let [f, ...p] = d;
        const v = r[h][1];
        En(v) && En(f) && (f = tn(!0, v, f)), r[h] = [s, f, ...p];
      }
    }
  }
}
const sf = new Wn().freeze();
function on(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function an(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function sn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function jr(e) {
  if (!En(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function $r(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Pt(e) {
  return uf(e) ? e : new hl(e);
}
function uf(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function cf(e) {
  return typeof e == "string" || df(e);
}
function df(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const ff = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", zr = [], Or = { allowDangerousHtml: !0 }, hf = /^(https?|ircs?|mailto|xmpp)$/i, pf = [
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
function mf(e) {
  const t = gf(e), n = xf(e);
  return yf(t.runSync(t.parse(n), n), e);
}
function gf(e) {
  const t = e.rehypePlugins || zr, n = e.remarkPlugins || zr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Or } : Or;
  return sf().use(Gc).use(n).use(Hd, r).use(t);
}
function xf(e) {
  const t = e.children || "", n = new hl();
  return typeof t == "string" && (n.value = t), n;
}
function yf(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || bf;
  for (const d of pf)
    Object.hasOwn(t, d.from) && ("" + d.from + (d.to ? "use `" + d.to + "` instead" : "remove it") + ff + d.id, void 0);
  return Un(e, s), Rs(e, {
    Fragment: x.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: x.jsx,
    jsxs: x.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function s(d, c, h) {
    if (d.type === "raw" && h && typeof c == "number")
      return o ? h.children.splice(c, 1) : h.children[c] = { type: "text", value: d.value }, c;
    if (d.type === "element") {
      let f;
      for (f in Yt)
        if (Object.hasOwn(Yt, f) && Object.hasOwn(d.properties, f)) {
          const p = d.properties[f], v = Yt[f];
          (v === null || v.includes(d.tagName)) && (d.properties[f] = u(String(p || ""), f, d));
        }
    }
    if (d.type === "element") {
      let f = n ? !n.includes(d.tagName) : l ? l.includes(d.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(d, c, h)), f && h && typeof c == "number")
        return a && d.children ? h.children.splice(c, 1, ...d.children) : h.children.splice(c, 1), c;
    }
  }
}
function bf(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    hf.test(e.slice(0, t)) ? e : ""
  );
}
const Ve = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], Br = {
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
      ...Ve,
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
    dl: [...Ve],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [...Ve, "longDesc", "src"],
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
    ol: [...Ve, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [...Ve],
    table: [...Ve],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...Ve, ["className", "contains-task-list"]],
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
}, ze = {}.hasOwnProperty;
function kf(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...Br, ...t } : Br,
    stack: []
  }, i = pl(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function pl(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return wf(e, n);
      case "doctype":
        return Cf(e, n);
      case "element":
        return vf(e, n);
      case "root":
        return Sf(e, n);
      case "text":
        return Ef(e, n);
    }
  }
}
function wf(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return Et(l, t), l;
  }
}
function Cf(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return Et(n, t), n;
  }
}
function vf(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    ml(e, t.children)
  ), i = Tf(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && ze.call(e.schema.ancestors, n))) {
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
  return Et(o, t), o;
}
function Sf(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    ml(e, t.children)
  ) };
  return Et(r, t), r;
}
function Ef(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return Et(r, t), r;
}
function ml(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = pl(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function Tf(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && ze.call(r, n) ? r[n] : void 0, o = r && ze.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), u = {};
  let s;
  for (s in a)
    if (ze.call(a, s)) {
      const d = a[s];
      let c = _r(
        e,
        Vr(l, s),
        s,
        d
      );
      c == null && (c = _r(e, Vr(o, s), s, d)), c != null && (u[s] = c);
    }
  if (i && ze.call(i, n)) {
    const d = i[n];
    for (s in d)
      ze.call(d, s) && !ze.call(u, s) && (u[s] = d[s]);
  }
  return u;
}
function _r(e, t, n, r) {
  return t ? Array.isArray(r) ? If(e, t, n, r) : gl(e, t, n, r) : void 0;
}
function If(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = gl(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function gl(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && Af(e, n, r)) {
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
function Af(e, t, n) {
  const r = e.schema.protocols && ze.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
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
function Et(e, t) {
  const n = Vi(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = kt(t.data)), n && (e.position = n);
}
function Vr(e, t) {
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
function Pf(e) {
  return function(t) {
    return (
      /** @type {Root} */
      kf(t, e)
    );
  };
}
function Nr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Lf(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Df(e, t, n) {
  const i = Vt((n || {}).ignore || []), l = Rf(t);
  let o = -1;
  for (; ++o < l.length; )
    fl(e, "text", a);
  function a(s, d) {
    let c = -1, h;
    for (; ++c < d.length; ) {
      const f = d[c], p = h ? h.children : void 0;
      if (i(
        f,
        p ? p.indexOf(f) : void 0,
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
    let p = 0;
    const b = c.children.indexOf(s);
    let y = !1, E = [];
    h.lastIndex = 0;
    let k = h.exec(s.value);
    for (; k; ) {
      const P = k.index, T = {
        index: k.index,
        input: k.input,
        stack: [...d, s]
      };
      let w = f(...k, T);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? h.lastIndex = P + 1 : (p !== P && E.push({
        type: "text",
        value: s.value.slice(p, P)
      }), Array.isArray(w) ? E.push(...w) : w && E.push(w), p = P + k[0].length, y = !0), !h.global)
        break;
      k = h.exec(s.value);
    }
    return y ? (p < s.value.length && E.push({ type: "text", value: s.value.slice(p) }), c.children.splice(b, 1, ...E)) : E = [s], b + E.length;
  }
}
function Rf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Ff(i[0]), Mf(i[1])]);
  }
  return t;
}
function Ff(e) {
  return typeof e == "string" ? new RegExp(Lf(e), "g") : e;
}
function Mf(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const un = "phrasing", cn = ["autolink", "link", "image", "label"];
function jf() {
  return {
    transforms: [Nf],
    enter: {
      literalAutolink: zf,
      literalAutolinkEmail: dn,
      literalAutolinkHttp: dn,
      literalAutolinkWww: dn
    },
    exit: {
      literalAutolink: Vf,
      literalAutolinkEmail: _f,
      literalAutolinkHttp: Of,
      literalAutolinkWww: Bf
    }
  };
}
function $f() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: un,
        notInConstruct: cn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: un,
        notInConstruct: cn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: un,
        notInConstruct: cn
      }
    ]
  };
}
function zf(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function dn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Of(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Bf(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function _f(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Vf(e) {
  this.exit(e);
}
function Nf(e) {
  Df(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Hf],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), qf]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Hf(e, t, n, r, i) {
  let l = "";
  if (!xl(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !Uf(n)))
    return !1;
  const o = Wf(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function qf(e, t, n, r) {
  return (
    // Not an expected previous character.
    !xl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Uf(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Wf(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Nr(e, "(");
  let l = Nr(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function xl(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || qe(n) || Ot(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
yl.peek = th;
function Zf() {
  this.buffer();
}
function Kf(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function Gf() {
  this.buffer();
}
function Xf(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Yf(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Se(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Qf(e) {
  this.exit(e);
}
function Jf(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Se(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function eh(e) {
  this.exit(e);
}
function th() {
  return "[";
}
function yl(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function nh() {
  return {
    enter: {
      gfmFootnoteCallString: Zf,
      gfmFootnoteCall: Kf,
      gfmFootnoteDefinitionLabelString: Gf,
      gfmFootnoteDefinition: Xf
    },
    exit: {
      gfmFootnoteCallString: Yf,
      gfmFootnoteCall: Qf,
      gfmFootnoteDefinitionLabelString: Jf,
      gfmFootnoteDefinition: eh
    }
  };
}
function rh(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: yl },
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
        t ? bl : ih
      )
    )), s(), u;
  }
}
function ih(e, t, n) {
  return t === 0 ? e : bl(e, t, n);
}
function bl(e, t, n) {
  return (n ? "" : "    ") + e;
}
const lh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
kl.peek = ch;
function oh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: sh },
    exit: { strikethrough: uh }
  };
}
function ah() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: lh
      }
    ],
    handlers: { delete: kl }
  };
}
function sh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function uh(e) {
  this.exit(e);
}
function kl(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function ch() {
  return "~";
}
function dh(e) {
  return e.length;
}
function fh(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || dh, l = [], o = [], a = [], u = [];
  let s = 0, d = -1;
  for (; ++d < e.length; ) {
    const v = [], b = [];
    let y = -1;
    for (e[d].length > s && (s = e[d].length); ++y < e[d].length; ) {
      const E = hh(e[d][y]);
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
      l[c] = Hr(r[c]);
  else {
    const v = Hr(r);
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
  const p = [];
  for (; ++d < o.length; ) {
    const v = o[d], b = a[d];
    c = -1;
    const y = [];
    for (; ++c < s; ) {
      const E = v[c] || "";
      let k = "", P = "";
      if (n.alignDelimiters !== !1) {
        const T = u[c] - (b[c] || 0), w = l[c];
        w === 114 ? k = " ".repeat(T) : w === 99 ? T % 2 ? (k = " ".repeat(T / 2 + 0.5), P = " ".repeat(T / 2 - 0.5)) : (k = " ".repeat(T / 2), P = k) : P = " ".repeat(T);
      }
      n.delimiterStart !== !1 && !c && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && E === "") && (n.delimiterStart !== !1 || c) && y.push(" "), n.alignDelimiters !== !1 && y.push(k), y.push(E), n.alignDelimiters !== !1 && y.push(P), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && y.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return p.join(`
`);
}
function hh(e) {
  return e == null ? "" : String(e);
}
function Hr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function ph(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    mh
  );
  return i(), o;
}
function mh(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function gh(e, t) {
  return qr(e, t.inConstruct, !0) && !qr(e, t.notInConstruct, !1);
}
function qr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Ur(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && gh(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function xh(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function yh(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function bh(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function kh(e, t, n, r) {
  const i = bh(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (yh(e, n)) {
    const c = n.enter("codeIndented"), h = n.indentLines(l, wh);
    return c(), h;
  }
  const a = n.createTracker(r), u = i.repeat(Math.max(xh(l, i) + 1, 3)), s = n.enter("codeFenced");
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
function wh(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Zn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Ch(e, t, n, r) {
  const i = Zn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
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
function vh(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function wt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function $t(e, t, n) {
  const r = et(e), i = et(t);
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
wl.peek = Sh;
function wl(e, t, n, r) {
  const i = vh(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), d = $t(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  d.inside && (u = wt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), h = $t(r.after.charCodeAt(0), c, i);
  h.inside && (u = u.slice(0, -1) + wt(c));
  const f = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + u + f;
}
function Sh(e, t, n) {
  return n.options.emphasis || "*";
}
function Eh(e, t) {
  let n = !1;
  return Un(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, vn;
  }), !!((!e.depth || e.depth < 3) && On(e) && (t.options.setext || n));
}
function Th(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (Eh(e, n)) {
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
  return /^[\t ]/.test(s) && (s = wt(s.charCodeAt(0)) + s.slice(1)), s = s ? o + " " + s : o, n.options.closeAtx && (s += " " + o), u(), a(), s;
}
Cl.peek = Ih;
function Cl(e) {
  return e.value || "";
}
function Ih() {
  return "<";
}
vl.peek = Ah;
function vl(e, t, n, r) {
  const i = Zn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
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
function Ah() {
  return "!";
}
Sl.peek = Ph;
function Sl(e, t, n, r) {
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
function Ph() {
  return "!";
}
El.peek = Lh;
function El(e, t, n) {
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
function Lh() {
  return "`";
}
function Tl(e, t) {
  const n = On(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Il.peek = Dh;
function Il(e, t, n, r) {
  const i = Zn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, u;
  if (Tl(e, n)) {
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
function Dh(e, t, n) {
  return Tl(e, n) ? "<" : "[";
}
Al.peek = Rh;
function Al(e, t, n, r) {
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
function Rh() {
  return "[";
}
function Kn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Fh(e) {
  const t = Kn(e), n = e.options.bulletOther;
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
function Mh(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Pl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function jh(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? Mh(n) : Kn(n);
  const a = e.ordered ? o === "." ? ")" : "." : Fh(n);
  let u = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (u = !0), Pl(n) === o && d
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
function $h(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function zh(e, t, n, r) {
  const i = $h(n);
  let l = n.bulletCurrent || Kn(n);
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
function Oh(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const Bh = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Vt([
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
function _h(e, t, n, r) {
  return (e.children.some(function(o) {
    return Bh(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Vh(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Ll.peek = Nh;
function Ll(e, t, n, r) {
  const i = Vh(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), d = $t(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  d.inside && (u = wt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), h = $t(r.after.charCodeAt(0), c, i);
  h.inside && (u = u.slice(0, -1) + wt(c));
  const f = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + u + f;
}
function Nh(e, t, n) {
  return n.options.strong || "*";
}
function Hh(e, t, n, r) {
  return n.safe(e.value, r);
}
function qh(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Uh(e, t, n) {
  const r = (Pl(n) + (n.options.ruleSpaces ? " " : "")).repeat(qh(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Dl = {
  blockquote: ph,
  break: Ur,
  code: kh,
  definition: Ch,
  emphasis: wl,
  hardBreak: Ur,
  heading: Th,
  html: Cl,
  image: vl,
  imageReference: Sl,
  inlineCode: El,
  link: Il,
  linkReference: Al,
  list: jh,
  listItem: zh,
  paragraph: Oh,
  root: _h,
  strong: Ll,
  text: Hh,
  thematicBreak: Uh
};
function Wh() {
  return {
    enter: {
      table: Zh,
      tableData: Wr,
      tableHeader: Wr,
      tableRow: Gh
    },
    exit: {
      codeText: Xh,
      table: Kh,
      tableData: fn,
      tableHeader: fn,
      tableRow: fn
    }
  };
}
function Zh(e) {
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
function Kh(e) {
  this.exit(e), this.data.inTable = void 0;
}
function Gh(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function fn(e) {
  this.exit(e);
}
function Wr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Xh(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, Yh));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function Yh(e, t) {
  return t === "|" ? t : e;
}
function Qh(e) {
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
  function o(f, p, v, b) {
    return s(d(f, v, b), f.align);
  }
  function a(f, p, v, b) {
    const y = c(f, v, b), E = s([y]);
    return E.slice(0, E.indexOf(`
`));
  }
  function u(f, p, v, b) {
    const y = v.enter("tableCell"), E = v.enter("phrasing"), k = v.containerPhrasing(f, {
      ...b,
      before: l,
      after: l
    });
    return E(), y(), k;
  }
  function s(f, p) {
    return fh(f, {
      align: p,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function d(f, p, v) {
    const b = f.children;
    let y = -1;
    const E = [], k = p.enter("table");
    for (; ++y < b.length; )
      E[y] = c(b[y], p, v);
    return k(), E;
  }
  function c(f, p, v) {
    const b = f.children;
    let y = -1;
    const E = [], k = p.enter("tableRow");
    for (; ++y < b.length; )
      E[y] = u(b[y], f, p, v);
    return k(), E;
  }
  function h(f, p, v) {
    let b = Dl.inlineCode(f, p, v);
    return v.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function Jh() {
  return {
    exit: {
      taskListCheckValueChecked: Zr,
      taskListCheckValueUnchecked: Zr,
      paragraph: tp
    }
  };
}
function ep() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: np }
  };
}
function Zr(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function tp(e) {
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
function np(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let u = Dl.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(d) {
    return d + o;
  }
}
function rp() {
  return [
    jf(),
    nh(),
    oh(),
    Wh(),
    Jh()
  ];
}
function ip(e) {
  return {
    extensions: [
      $f(),
      rh(e),
      ah(),
      Qh(e),
      ep()
    ]
  };
}
const lp = {
  tokenize: dp,
  partial: !0
}, Rl = {
  tokenize: fp,
  partial: !0
}, Fl = {
  tokenize: hp,
  partial: !0
}, Ml = {
  tokenize: pp,
  partial: !0
}, op = {
  tokenize: mp,
  partial: !0
}, jl = {
  name: "wwwAutolink",
  tokenize: up,
  previous: zl
}, $l = {
  name: "protocolAutolink",
  tokenize: cp,
  previous: Ol
}, Fe = {
  name: "emailAutolink",
  tokenize: sp,
  previous: Bl
}, Ie = {};
function ap() {
  return {
    text: Ie
  };
}
let Ne = 48;
for (; Ne < 123; )
  Ie[Ne] = Fe, Ne++, Ne === 58 ? Ne = 65 : Ne === 91 && (Ne = 97);
Ie[43] = Fe;
Ie[45] = Fe;
Ie[46] = Fe;
Ie[95] = Fe;
Ie[72] = [Fe, $l];
Ie[104] = [Fe, $l];
Ie[87] = [Fe, jl];
Ie[119] = [Fe, jl];
function sp(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(c) {
    return !In(c) || !Bl.call(r, r.previous) || Gn(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return In(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), u) : n(c);
  }
  function u(c) {
    return c === 46 ? e.check(op, d, s)(c) : c === 45 || c === 95 || ie(c) ? (l = !0, e.consume(c), u) : d(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function d(c) {
    return l && i && se(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function up(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !zl.call(r, r.previous) || Gn(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(lp, e.attempt(Rl, e.attempt(Fl, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function cp(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(c) {
    return (c === 72 || c === 104) && Ol.call(r, r.previous) && !Gn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (se(c) && i.length < 5)
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
    return c === null || Mt(c) || Y(c) || qe(c) || Ot(c) ? n(c) : e.attempt(Rl, e.attempt(Fl, d), n)(c);
  }
  function d(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function dp(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function fp(e, t, n) {
  let r, i, l;
  return o;
  function o(s) {
    return s === 46 || s === 95 ? e.check(Ml, u, a)(s) : s === null || Y(s) || qe(s) || s !== 45 && Ot(s) ? u(s) : (l = !0, e.consume(s), o);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), o;
  }
  function u(s) {
    return i || r || !l ? n(s) : t(s);
  }
}
function hp(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(Ml, t, l)(o) : o === null || Y(o) || qe(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function pp(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Y(a) || qe(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Y(a) || qe(a) ? t(a) : r(a);
  }
  function l(a) {
    return se(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : se(a) ? (e.consume(a), o) : n(a);
  }
}
function mp(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return ie(l) ? n(l) : t(l);
  }
}
function zl(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Y(e);
}
function Ol(e) {
  return !se(e);
}
function Bl(e) {
  return !(e === 47 || In(e));
}
function In(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ie(e);
}
function Gn(e) {
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
const gp = {
  tokenize: Sp,
  partial: !0
};
function xp() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: wp,
        continuation: {
          tokenize: Cp
        },
        exit: vp
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: kp
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: yp,
        resolveTo: bp
      }
    }
  };
}
function yp(e, t, n) {
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
    const s = Se(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return s.codePointAt(0) !== 94 || !l.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u));
  }
}
function bp(e, t) {
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
function kp(e, t, n) {
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
      c === null || c === 91 || Y(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const h = e.exit("gfmFootnoteCallString");
      return i.includes(Se(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Y(c) || (o = !0), l++, e.consume(c), c === 92 ? d : s;
  }
  function d(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, s) : s(c);
  }
}
function wp(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l, o = 0, a;
  return u;
  function u(p) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(p) {
    return p === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", d) : n(p);
  }
  function d(p) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      p === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || Y(p)
    )
      return n(p);
    if (p === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return l = Se(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(p), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return Y(p) || (a = !0), o++, e.consume(p), p === 92 ? c : d;
  }
  function c(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), o++, d) : d(p);
  }
  function h(p) {
    return p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), i.includes(l) || i.push(l), G(e, f, "gfmFootnoteDefinitionWhitespace")) : n(p);
  }
  function f(p) {
    return t(p);
  }
}
function Cp(e, t, n) {
  return e.check(vt, t, e.attempt(gp, t, n));
}
function vp(e) {
  e.exit("gfmFootnoteDefinition");
}
function Sp(e, t, n) {
  const r = this;
  return G(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l);
  }
}
function Ep(e) {
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
            f && ye(h, h.length, 0, Bt(f, o.slice(s + 1, u), a)), ye(h, h.length, 0, [["exit", c, a], ["enter", o[u][1], a], ["exit", o[u][1], a], ["exit", d, a]]), ye(o, s - 1, u - s + 3, h), u = s + h.length - 2;
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
    function h(p) {
      return s === 126 && d[d.length - 1][1].type !== "characterEscape" ? u(p) : (o.enter("strikethroughSequenceTemporary"), f(p));
    }
    function f(p) {
      const v = et(s);
      if (p === 126)
        return c > 1 ? u(p) : (o.consume(p), c++, f);
      if (c < 2 && !n) return u(p);
      const b = o.exit("strikethroughSequenceTemporary"), y = et(p);
      return b._open = !y || y === 2 && !!v, b._close = !v || v === 2 && !!y, a(p);
    }
  }
}
class Tp {
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
    Ip(this, t, n, r);
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
function Ip(e, t, n, r) {
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
function Ap(e, t) {
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
function Pp() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Lp,
        resolveAll: Dp
      }
    }
  };
}
function Lp(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(C) {
    let R = r.events.length - 1;
    for (; R > -1; ) {
      const M = r.events[R][1].type;
      if (M === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      M === "linePrefix") R--;
      else break;
    }
    const F = R > -1 ? r.events[R][1].type : null, V = F === "tableHead" || F === "tableRow" ? w : u;
    return V === w && r.parser.lazy[r.now().line] ? n(C) : V(C);
  }
  function u(C) {
    return e.enter("tableHead"), e.enter("tableRow"), s(C);
  }
  function s(C) {
    return C === 124 || (o = !0, l += 1), d(C);
  }
  function d(C) {
    return C === null ? n(C) : O(C) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), f) : n(C) : q(C) ? G(e, d, "whitespace")(C) : (l += 1, o && (o = !1, i += 1), C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), o = !0, d) : (e.enter("data"), c(C)));
  }
  function c(C) {
    return C === null || C === 124 || Y(C) ? (e.exit("data"), d(C)) : (e.consume(C), C === 92 ? h : c);
  }
  function h(C) {
    return C === 92 || C === 124 ? (e.consume(C), c) : c(C);
  }
  function f(C) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(C) : (e.enter("tableDelimiterRow"), o = !1, q(C) ? G(e, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : p(C));
  }
  function p(C) {
    return C === 45 || C === 58 ? b(C) : C === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), v) : T(C);
  }
  function v(C) {
    return q(C) ? G(e, b, "whitespace")(C) : b(C);
  }
  function b(C) {
    return C === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), y) : C === 45 ? (l += 1, y(C)) : C === null || O(C) ? P(C) : T(C);
  }
  function y(C) {
    return C === 45 ? (e.enter("tableDelimiterFiller"), E(C)) : T(C);
  }
  function E(C) {
    return C === 45 ? (e.consume(C), E) : C === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(C), e.exit("tableDelimiterMarker"), k) : (e.exit("tableDelimiterFiller"), k(C));
  }
  function k(C) {
    return q(C) ? G(e, P, "whitespace")(C) : P(C);
  }
  function P(C) {
    return C === 124 ? p(C) : C === null || O(C) ? !o || i !== l ? T(C) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(C)) : T(C);
  }
  function T(C) {
    return n(C);
  }
  function w(C) {
    return e.enter("tableRow"), $(C);
  }
  function $(C) {
    return C === 124 ? (e.enter("tableCellDivider"), e.consume(C), e.exit("tableCellDivider"), $) : C === null || O(C) ? (e.exit("tableRow"), t(C)) : q(C) ? G(e, $, "whitespace")(C) : (e.enter("data"), B(C));
  }
  function B(C) {
    return C === null || C === 124 || Y(C) ? (e.exit("data"), $(C)) : (e.consume(C), C === 92 ? _ : B);
  }
  function _(C) {
    return C === 92 || C === 124 ? (e.consume(C), B) : B(C);
  }
}
function Dp(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, u = 0, s, d, c;
  const h = new Tp();
  for (; ++n < e.length; ) {
    const f = e[n], p = f[1];
    f[0] === "enter" ? p.type === "tableHead" ? (a = !1, u !== 0 && (Kr(h, t, u, s, d), d = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, h.add(n, 0, [["enter", s, t]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, c = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, d = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, h.add(n, 0, [["enter", d, t]])), i = p.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], c = Lt(h, t, l, i, void 0, c), l = [0, 0, 0, 0]), o[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], c = Lt(h, t, l, i, void 0, c)), l = o, o = [l[1], n, 0, 0])) : p.type === "tableHead" ? (a = !0, u = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (u = n, l[1] !== 0 ? (o[0] = o[1], c = Lt(h, t, l, i, n, c)) : o[1] !== 0 && (c = Lt(h, t, o, i, n, c)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (u !== 0 && Kr(h, t, u, s, d), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = Ap(t.events, n));
  }
  return e;
}
function Lt(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, Xe(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const u = Xe(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const s = Xe(t.events, n[2]), d = Xe(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, d)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const h = t.events[n[2]], f = t.events[n[3]];
      if (h[1].end = Object.assign({}, f[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const p = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(p, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, Xe(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function Kr(e, t, n, r, i) {
  const l = [], o = Xe(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function Xe(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Rp = {
  name: "tasklistCheck",
  tokenize: Mp
};
function Fp() {
  return {
    text: {
      91: Rp
    }
  };
}
function Mp(e, t, n) {
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
    return Y(u) ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), o) : u === 88 || u === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), o) : n(u);
  }
  function o(u) {
    return u === 93 ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(u);
  }
  function a(u) {
    return O(u) ? t(u) : q(u) ? e.check({
      tokenize: jp
    }, t, n)(u) : n(u);
  }
}
function jp(e, t, n) {
  return G(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function $p(e) {
  return Zi([
    ap(),
    xp(),
    Ep(e),
    Pp(),
    Fp()
  ]);
}
const zp = {};
function Op(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || zp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push($p(n)), l.push(rp()), o.push(ip(n));
}
const Bp = J.div`
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
`, _p = ({ content: e, className: t }) => /* @__PURE__ */ x.jsx(Bp, { className: t, children: /* @__PURE__ */ x.jsx(mf, { remarkPlugins: [Op], rehypePlugins: [Pf], children: e }) }), Vp = J.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Np = ({ name: e, timestamp: t }) => /* @__PURE__ */ x.jsxs(De, { children: [
  /* @__PURE__ */ x.jsx(di, { src: Eo }),
  /* @__PURE__ */ x.jsx(Je, { children: e }),
  /* @__PURE__ */ x.jsx(Vp, { children: new Date(t).toLocaleString() })
] }), Hp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", qp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Up = Object.defineProperty, Wp = (e, t) => Up(e, "name", { value: t, configurable: !0 });
const Zp = Wp((e) => x.jsx(Re, { light: qp, dark: Hp, ...e }), "CheckIcon"), Kp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Gp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Xp = Object.defineProperty, Yp = (e, t) => Xp(e, "name", { value: t, configurable: !0 });
const Qp = Yp((e) => x.jsx(Re, { light: Gp, dark: Kp, ...e }), "CopyIcon"), Jp = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ x.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: /* @__PURE__ */ x.jsx("path", { d: "M6 9l6 6 6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  }
), e1 = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ x.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: /* @__PURE__ */ x.jsx("path", { d: "M9 6l6 6-6 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  }
), t1 = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ x.jsxs(
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
      /* @__PURE__ */ x.jsx("path", { d: "M15 16.57V8H17V15.43L21.51 18.14L20.49 19.86L15 16.57Z", fill: n }),
      /* @__PURE__ */ x.jsx(
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
), n1 = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ x.jsxs(
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
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 7.50517V12.9988C4 12.9988 4.00012 13.0002 4.00089 13.0024C4.00189 13.0052 4.00358 13.0085 4.00578 13.0114L4.00827 13.0143L4.03042 13.0197L7.5 14.2844V8.84301L4 7.50517ZM8.5 8.84301V14.2844L11.9696 13.0197L11.9917 13.0143L11.9942 13.0114C11.9964 13.0085 11.9981 13.0052 11.9991 13.0024C11.9999 13.0002 12 12.9988 12 12.9988V7.50517L8.5 8.84301ZM8 7.96356L4.2628 6.53506L4.23081 6.52744C3.60002 6.37725 3 6.85752 3 7.49884V12.9988C3 13.4369 3.29207 13.8526 3.73507 13.9764L8 15.531L12.2649 13.9764C12.7079 13.8526 13 13.4369 13 12.9988V7.49884C13 6.85752 12.4 6.37725 11.7692 6.52744L11.7372 6.53506L8 7.96356Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.1785 9.81916L9.67852 10.3925L9.32148 9.45844L10.8215 8.88508L11.1785 9.81916ZM4.82149 9.81917L5.17853 8.88509L6.67853 9.45844L6.32149 10.3925L4.82149 9.81917Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.1785 12.1671L9.67851 12.7404L9.32147 11.8063L10.8215 11.233L11.1785 12.1671ZM4.82148 12.1671L5.17852 11.233L6.67852 11.8063L6.32148 12.7404L4.82148 12.1671Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 4C9.067 4 7.5 2.433 7.5 0.5H8.5C8.5 1.88071 9.61929 3 11 3V4Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.5 0.5C8.5 2.433 6.933 4 5 4V3C6.38071 3 7.5 1.88071 7.5 0.5H8.5Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 3C6.933 3 8.5 4.567 8.5 6.5H7.5C7.5 5.11929 6.38071 4 5 4V3Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ x.jsx(
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
), r1 = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ x.jsxs(
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
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.0733 3.95252C14.6707 3.56066 14.131 3.3414 13.5691 3.3414C13.0073 3.3414 12.4676 3.56066 12.065 3.95252L4.04331 11.8192C3.90907 11.9497 3.72926 12.0227 3.54206 12.0227C3.35486 12.0227 3.17504 11.9497 3.04081 11.8192C2.97509 11.7553 2.92285 11.6788 2.88718 11.5944C2.85151 11.5099 2.83313 11.4192 2.83313 11.3275C2.83313 11.2358 2.85151 11.1451 2.88718 11.0607C2.92285 10.9762 2.97509 10.8998 3.04081 10.8359L11.0625 2.96919C11.7335 2.31618 12.6328 1.95081 13.5691 1.95081C14.5055 1.95081 15.4048 2.31618 16.0758 2.96919C16.4641 3.34678 16.7574 3.81094 16.9318 4.32368C17.1062 4.83643 17.1567 5.38318 17.0791 5.91919C17.6223 5.84194 18.1759 5.89043 18.6973 6.06092C19.2187 6.2314 19.6941 6.51934 20.0866 6.90252L20.1283 6.94419C20.4569 7.26376 20.7181 7.64596 20.8965 8.0682C21.0748 8.49044 21.1667 8.94416 21.1667 9.40252C21.1667 9.86089 21.0748 10.3146 20.8965 10.7368C20.7181 11.1591 20.4569 11.5413 20.1283 11.8609L12.8733 18.975C12.8514 18.9963 12.834 19.0218 12.8221 19.0499C12.8102 19.078 12.8041 19.1082 12.8041 19.1388C12.8041 19.1693 12.8102 19.1995 12.8221 19.2277C12.834 19.2558 12.8514 19.2812 12.8733 19.3025L14.3633 20.7642C14.429 20.8281 14.4813 20.9045 14.5169 20.989C14.5526 21.0734 14.571 21.1642 14.571 21.2559C14.571 21.3475 14.5526 21.4383 14.5169 21.5227C14.4813 21.6072 14.429 21.6836 14.3633 21.7475C14.2291 21.878 14.0493 21.951 13.8621 21.951C13.6749 21.951 13.495 21.878 13.3608 21.7475L11.8708 20.2867C11.7173 20.1376 11.5953 19.9592 11.512 19.7621C11.4287 19.565 11.3858 19.3532 11.3858 19.1392C11.3858 18.9252 11.4287 18.7134 11.512 18.5163C11.5953 18.3192 11.7173 18.1408 11.8708 17.9917L19.1258 10.8767C19.3229 10.6849 19.4795 10.4556 19.5864 10.2022C19.6934 9.94888 19.7485 9.67668 19.7485 9.40169C19.7485 9.1267 19.6934 8.8545 19.5864 8.60117C19.4795 8.34783 19.3229 8.11849 19.1258 7.92669L19.0841 7.88586C18.6819 7.4944 18.143 7.27516 17.5817 7.27469C17.0205 7.27423 16.4812 7.49257 16.0783 7.88336L10.1016 13.745L10.1 13.7467L10.0183 13.8275C9.88404 13.9582 9.70404 14.0314 9.51664 14.0314C9.32925 14.0314 9.14925 13.9582 9.01498 13.8275C8.94926 13.7636 8.89702 13.6872 8.86135 13.6027C8.82568 13.5183 8.8073 13.4275 8.8073 13.3359C8.8073 13.2442 8.82568 13.1534 8.86135 13.069C8.89702 12.9845 8.94926 12.9081 9.01498 12.8442L15.0758 6.90002C15.2723 6.7081 15.4284 6.47878 15.5349 6.22558C15.6414 5.97238 15.6962 5.70043 15.696 5.42575C15.6957 5.15106 15.6405 4.8792 15.5336 4.62618C15.4266 4.37317 15.2701 4.14412 15.0733 3.95252Z",
          fill: "#845EFF"
        }
      ),
      /* @__PURE__ */ x.jsx(
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
), i1 = ({
  width: e = "1em",
  height: t = "1em",
  stroke: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ x.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: i,
    children: /* @__PURE__ */ x.jsx(
      "path",
      {
        d: "M3.5 13.05V2.95001C3.5 2.60501 3.85 2.39001 4.125 2.56001L12.29 7.61001C12.57 7.78501 12.57 8.21501 12.29 8.38501L4.125 13.44C3.845 13.615 3.5 13.395 3.5 13.05Z",
        stroke: n,
        strokeMiterlimit: "10"
      }
    )
  }
), l1 = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ x.jsxs(
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
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.7559 10.083L19.5957 12H21.2598V14H19.4297L19.0957 18H20.7598V20H18.9297L18.7559 22.083L16.7637 21.917L16.9238 20H14.4297L14.2559 22.083L12.2637 21.917L12.4238 20H10.7598V18H12.5898L12.9238 14H11.2598V12H13.0898L13.2637 9.91699L15.2559 10.083L15.0957 12H17.5898L17.7637 9.91699L19.7559 10.083ZM14.5957 18H17.0898L17.4238 14H14.9297L14.5957 18Z",
          fill: n
        }
      ),
      /* @__PURE__ */ x.jsx(
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
), o1 = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "#146FF4",
  className: r,
  style: i
}) => /* @__PURE__ */ x.jsxs(
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
      /* @__PURE__ */ x.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.99 11.3025L20.5499 16.005L12.99 20.7074V11.3025ZM13.1594 9.09996C12.1658 8.73983 10.99 9.42704 10.99 10.6V21.4C10.99 22.7094 12.4421 23.4114 13.481 22.7574L22.2952 17.2747L22.3021 17.2703C23.2226 16.6764 23.2226 15.3335 22.3021 14.7397L22.2952 14.7352L13.2356 9.09996H13.1594Z",
          fill: n
        }
      ),
      /* @__PURE__ */ x.jsx(
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
), _l = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, hn = J.span`
    font-size: 10px;
    color: ${({ theme: e }) => si(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, a1 = J(De)`
    margin-left: auto;
`, s1 = J.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, u1 = ({
  totalTokens: e,
  requestTokens: t,
  responseTokens: n,
  duration: r,
  handleCopyClick: i
}) => {
  const [l, o] = D.useState(!1), a = D.useRef(null);
  D.useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const u = () => {
    i(), o(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => o(!1), 1e3);
  };
  return /* @__PURE__ */ x.jsxs(De, { alignItems: "center", children: [
    /* @__PURE__ */ x.jsxs(De, { gap: 4, title: "Total tokens", children: [
      /* @__PURE__ */ x.jsx(l1, {}),
      e && /* @__PURE__ */ x.jsx(hn, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ x.jsx(hn, { title: "(Request tokens / Response tokens)", children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ x.jsxs(De, { gap: 4, title: "Duration", children: [
      /* @__PURE__ */ x.jsx(t1, {}),
      r && /* @__PURE__ */ x.jsx(hn, { children: _l(r) })
    ] }),
    /* @__PURE__ */ x.jsxs(a1, { children: [
      /* @__PURE__ */ x.jsx(ro, { icon: l ? /* @__PURE__ */ x.jsx(Zp, {}) : /* @__PURE__ */ x.jsx(Qp, {}), onPress: u }),
      l && /* @__PURE__ */ x.jsx(s1, { children: "Copied to clipboard" })
    ] })
  ] });
}, c1 = () => /* @__PURE__ */ x.jsxs(mi, { children: [
  /* @__PURE__ */ x.jsx(Je, { children: "Test your agent" }),
  /* @__PURE__ */ x.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), d1 = J.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, f1 = J.div`
    padding-bottom: 8px;
`, h1 = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = D.useState(n), l = D.useId();
  return /* @__PURE__ */ x.jsxs("div", { children: [
    /* @__PURE__ */ x.jsxs(d1, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ x.jsx(Jp, {}) : /* @__PURE__ */ x.jsx(e1, {}),
      e
    ] }),
    r && /* @__PURE__ */ x.jsx(f1, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, p1 = (e) => "kbDisplayName" in e, m1 = (e) => "serverName" in e, g1 = J.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, x1 = J.div`
    font-size: 16px;
`, y1 = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return p1(n) ? (i = /* @__PURE__ */ x.jsx(n1, {}), r = n.displayName) : m1(n) ? (i = /* @__PURE__ */ x.jsx(r1, {}), r = n.toolName) : (i = /* @__PURE__ */ x.jsx(o1, {}), r = n.displayName), /* @__PURE__ */ x.jsxs(De, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ x.jsx(x1, { children: i }),
      /* @__PURE__ */ x.jsxs("div", { children: [
        /* @__PURE__ */ x.jsx("div", { children: r }),
        /* @__PURE__ */ x.jsx(g1, { children: _l(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ x.jsx(De, { marginTop: 8, children: /* @__PURE__ */ x.jsx(h1, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, b1 = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && navigator.clipboard.writeText(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ x.jsxs(gi, { children: [
    /* @__PURE__ */ x.jsx(Je, { children: "Test execution failed" }),
    /* @__PURE__ */ x.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ x.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ x.jsx(bi, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ x.jsx(is, {}) : t ? /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(Np, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ x.jsx(_p, { content: t.responseText }),
    /* @__PURE__ */ x.jsx(
      u1,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ x.jsx(y1, { tools: t.tools })
  ] }) : /* @__PURE__ */ x.jsx(c1, {});
  return /* @__PURE__ */ x.jsx(He, { label: "Output", children: o() });
}, Gr = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], k1 = J.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, w1 = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ x.jsx(di, { src: t, alt: o }) : t;
  return /* @__PURE__ */ x.jsx(io, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ x.jsxs(k1, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, C1 = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ x.jsxs(De, { children: [
  e && /* @__PURE__ */ x.jsx(Xn, { children: /* @__PURE__ */ x.jsx(lo, { children: /* @__PURE__ */ x.jsx(
    oo,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ x.jsx(Xn, { fullWidth: !0, children: /* @__PURE__ */ x.jsx(ao, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), v1 = J.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, S1 = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ x.jsx(v1, { children: e.map((r, i) => {
  var l, o, a, u;
  return /* @__PURE__ */ x.jsx(
    C1,
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
}) }) : null, E1 = J(Mo)`
    flex: 1;
`, T1 = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  triggerTestAction: i
}) => {
  const [l, o] = D.useState(Gr[0]), [a, u] = D.useState(
    e.map((c) => ({
      ...c,
      value: ""
    }))
  );
  D.useEffect(() => {
    u((c) => {
      const h = new Map(c.map((f) => [f.key, f.value]));
      return e.map((f) => h.has(f.key) ? { ...f, value: h.get(f.key) } : {
        ...f,
        value: ""
      });
    });
  }, [e]);
  const s = () => i(a), d = (c, h) => {
    u((f) => {
      const p = [...f];
      return p[c] = { ...p[c], value: h }, p;
    });
  };
  return /* @__PURE__ */ x.jsxs(He, { label: "Playground", children: [
    r && /* @__PURE__ */ x.jsxs(Do, { children: [
      /* @__PURE__ */ x.jsx(Je, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ x.jsx("div", { children: "To test your agent, restart the application to apply the latest changes." })
    ] }),
    /* @__PURE__ */ x.jsxs(De, { children: [
      /* @__PURE__ */ x.jsx(
        E1,
        {
          defaultValue: l == null ? void 0 : l.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: Gr.map((c) => /* @__PURE__ */ x.jsx(gn, { id: c.uuid, children: c.name }, c.uuid))
        }
      ),
      /* @__PURE__ */ x.jsx(
        w1,
        {
          label: "Test",
          icon: /* @__PURE__ */ x.jsx(i1, {}),
          onPress: s,
          variant: "primary",
          isDisabled: n,
          alt: "run test icon"
        }
      )
    ] }),
    a.length > 0 && /* @__PURE__ */ x.jsx(
      S1,
      {
        variables: a,
        highlightRules: t,
        onVariableChange: d
      }
    )
  ] });
}, I1 = [
  { key: Oe.Auto, caption: "Auto" },
  { key: Oe.None, caption: "None" },
  { key: Oe.Any, caption: "Any" },
  { key: Oe.Tool, caption: "Tool" }
], A1 = ({
  agent: e,
  validationInfo: t,
  onToolChoiceChange: n,
  onToolChoiceToolChange: r
}) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
  /* @__PURE__ */ x.jsx(
    Jn,
    {
      "aria-label": "Tool choice",
      label: "Tool choice",
      selectedKey: e.toolChoice ?? null,
      validate: void 0,
      onSelectionChange: n,
      description: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        "Control the behavior of the agent regarding tools used.",
        " ",
        /* @__PURE__ */ x.jsx(
          bi,
          {
            href: "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Read more."
          }
        )
      ] }),
      children: I1.map((i) => /* @__PURE__ */ x.jsx(gn, { id: i.key, children: i.caption }, i.key))
    }
  ),
  e.toolChoice === Oe.Tool && /* @__PURE__ */ x.jsx(
    Jn,
    {
      "aria-label": "Tool choice tool",
      label: "Tool",
      selectedKey: e.toolChoiceToolName ?? null,
      validate: () => t.isValidToolChoice,
      onSelectionChange: r,
      description: "Only microflows can be selected as tool choice.",
      children: e.tools.filter((i) => i.toolType === mn.Microflow).map((i) => /* @__PURE__ */ x.jsx(gn, { id: i.name, children: i.name }, i.name))
    }
  )
] }), P1 = J(Li)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, L1 = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  toolValidations: l,
  agentValidationInfo: o
}) => {
  const [a, u] = D.useState([]), s = D.useMemo(() => e.tools ? e.tools.map((k, P) => ({
    id: k.id ?? String(P),
    enabled: k.enabled,
    name: k.toolType === mn.Microflow ? k.name : k.document.qualifiedName.split(".")[1],
    description: k.description || "",
    tooltype: k.toolType,
    tool: k.document.qualifiedName || ""
  })) : [], [e.tools]), { items: d, sortProps: c } = xi(s), h = D.useCallback(
    (k) => {
      const P = l.get(k);
      return P === "invalid" ? /* @__PURE__ */ x.jsx(Rt, { icon: /* @__PURE__ */ x.jsx(ui, { title: "Tool invalid" }) }) : P === "syncing" ? /* @__PURE__ */ x.jsx(Rt, { icon: /* @__PURE__ */ x.jsx(Pi, { title: "Validating..." }) }) : null;
    },
    [l]
  ), f = D.useCallback(async () => {
    const k = await tr(t, n, e, r);
    k && i(k);
  }, [t, n, e, r, i]), p = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const k = a[0], P = await tr(
      t,
      n,
      e,
      r,
      k
    );
    P && i(P);
  }, [t, n, e, r, i, a]), v = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const k = a[0], P = await Ea(t, e, r, k);
    P && i(P);
  }, [e, r, i, a]), b = D.useCallback(
    async (k, P) => {
      if (!e.tools)
        return;
      const T = e.tools.map(
        ($) => ($.id ?? "") === k ? { ...$, enabled: P } : $
      ), w = { ...e, tools: T };
      r(w), i(w);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, r, i]
  ), y = async (k) => {
    const P = await Ia(e, r, k);
    P && i(P);
  }, E = async (k) => {
    const P = await Aa(
      e,
      r,
      k
    );
    P && i(P);
  };
  return /* @__PURE__ */ x.jsxs(He, { label: "Tools", children: [
    /* @__PURE__ */ x.jsx(
      A1,
      {
        agent: e,
        validationInfo: o,
        onToolChoiceChange: y,
        onToolChoiceToolChange: E
      }
    ),
    /* @__PURE__ */ x.jsx(
      yi,
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
            cellContent: /* @__PURE__ */ x.jsx(
              P1,
              {
                "aria-label": "Enabled",
                isSelected: k.enabled,
                onChange: (P) => b(k.id, P)
              }
            )
          },
          { cellContent: k.name, tooltipText: k.name },
          { cellContent: k.description, tooltipText: k.description },
          {
            cellContent: /* @__PURE__ */ x.jsx(
              fi,
              {
                icon: k.tooltype === mn.Microflow ? /* @__PURE__ */ x.jsx(zo, {}) : To,
                text: k.tool
              }
            ),
            tooltipText: k.tool
          }
        ]),
        rowKey: (k, P) => {
          var T;
          return ((T = d[P]) == null ? void 0 : T.id) ?? String(P);
        },
        rowOpacity: (k) => {
          var P;
          return (P = d[k]) != null && P.enabled ? 1 : 0.5;
        },
        selectionType: "row",
        selectionMode: "single",
        selectedKeys: a,
        onDoubleClick: p,
        onSelectionChange: u,
        ...c,
        toolbarLeft: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(
            Ye,
            {
              icon: /* @__PURE__ */ x.jsx(Ai, {}),
              label: "New",
              "aria-label": "Add new tool",
              tooltip: "Add new tool",
              onPress: f
            }
          ),
          /* @__PURE__ */ x.jsx(
            Ye,
            {
              icon: /* @__PURE__ */ x.jsx(Ii, {}),
              label: "Edit",
              "aria-label": "Edit selected tool",
              onPress: p,
              tooltip: "Edit selected tool",
              isDisabled: a.length === 0
            }
          ),
          /* @__PURE__ */ x.jsx(
            Ye,
            {
              icon: /* @__PURE__ */ x.jsx(Ti, {}),
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
var D1 = Object.defineProperty, R1 = (e, t) => D1(e, "name", { value: t, configurable: !0 });
const F1 = R1((e) => x.jsx(M1, { ...e }), "RadioButton"), M1 = J(Yo)`
    display: flex;
    align-items: center;
    gap: ${ce.spacing4};
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
        border: ${ce.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorUnselected};
        margin: ${ce.spacing1};
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
        border: ${ce.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorSelected};
    }
`;
var j1 = Object.defineProperty, $1 = (e, t) => j1(e, "name", { value: t, configurable: !0 });
const z1 = $1(({ orientation: e = "horizontal", label: t, description: n, children: r, ...i }) => {
  const { isInvalid: l, validate: o, validationError: a } = so(i);
  return x.jsx(Vl, { orientation: e, ...i, isInvalid: l, validate: o, children: x.jsx(uo, { label: t, description: n, realtimeValidationError: a, children: x.jsx(O1, { children: r }) }) });
}, "RadioButtonGroup"), Vl = J(Xo)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, O1 = J.div`
    display: flex;
    flex-direction: row;
    gap: ${ce.spacing8};
    padding: ${ce.spacing4} 0;

    ${Vl}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`, B1 = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUsageType: !0,
  isValidUserPrompt: !0,
  isValidToolChoice: !0,
  missingAttributes: [],
  unusedAttributes: []
}, _1 = [
  { caption: "Task", value: Ft.Task },
  { caption: "Chat", value: Ft.Chat }
], V1 = ({
  agentDocument: { name: e, contents: t, $ID: n },
  isRuntimeConnected: r,
  showUnsavedChangesWarning: i,
  studioPro: l,
  updateStudioProDocument: o
}) => {
  var it, lt, ot, Tt, at;
  const [a, u] = D.useState(!1), [s, d] = D.useState(B1), [c, h] = D.useState(void 0), [f, p] = D.useState(t), [v, b] = D.useState(!1), [y, E] = D.useState(/* @__PURE__ */ new Map()), [k, P] = D.useState(
    /* @__PURE__ */ new Map()
  ), T = co(), w = [
    (it = f.model) == null ? void 0 : it.documentId,
    ...f.tools.map((j) => j.document.documentId),
    ...(f.knowledgebaseTools || []).map((j) => j.document.documentId)
  ].filter((j) => !!j), $ = f.entity ? [(Tt = (ot = (lt = f.entity) == null ? void 0 : lt.qualifiedName) == null ? void 0 : ot.split(".")) == null ? void 0 : Tt[0]] : void 0, {
    data: B,
    isError: _,
    error: C,
    isPending: R,
    execute: F
  } = ka(l, n, r), V = D.useRef(null);
  D.useEffect(() => {
    var j;
    Ae(t).then((Z) => d(Z)), we(l, (j = t.entity) == null ? void 0 : j.qualifiedName).then((Z) => h(Z)), p(t), u(!0);
  }, []), D.useEffect(() => {
    a && p(t);
  }, [t]), D.useEffect(() => () => {
    V.current && clearTimeout(V.current);
  }, []), D.useEffect(() => {
    a && (async () => {
      var N;
      const Z = await we(l, (N = f.entity) == null ? void 0 : N.qualifiedName);
      h(Z);
    })();
  }, [l, (at = f.entity) == null ? void 0 : at.qualifiedName]);
  const M = async () => {
    const j = [];
    if (f.tools && f.tools.length > 0) {
      const Z = /* @__PURE__ */ new Map();
      f.tools.forEach((N) => {
        Z.set(N.id, "syncing");
      }), E(Z), j.push(
        Promise.all(
          f.tools.map(async (N) => {
            const K = await Ro("document", N, f, l);
            return {
              id: N.id,
              state: K === !0 ? "valid" : "invalid"
            };
          })
        ).then((N) => {
          const K = new Map(N.map((ae) => [ae.id, ae.state]));
          E(K);
        })
      );
    }
    if (f.knowledgebaseTools && f.knowledgebaseTools.length > 0) {
      const Z = /* @__PURE__ */ new Map();
      f.knowledgebaseTools.forEach((N) => {
        Z.set(N.id, "syncing");
      }), P(Z), j.push(
        Promise.all(
          f.knowledgebaseTools.map(async (N) => {
            const K = await Fo(
              "document",
              N,
              f,
              l
            );
            return {
              id: N.id,
              state: K === !0 ? "valid" : "invalid"
            };
          })
        ).then((N) => {
          const K = new Map(N.map((ae) => [ae.id, ae.state]));
          P(K);
        })
      );
    }
    await Promise.all(j);
  };
  D.useEffect(() => {
    a && M();
  }, [a]);
  const L = D.useRef(/* @__PURE__ */ new Map()), U = D.useRef(/* @__PURE__ */ new Map());
  D.useEffect(() => {
    if (a && f.tools) {
      const j = L.current, Z = /* @__PURE__ */ new Map();
      f.tools.forEach((N) => {
        Z.set(N.id, N.document.qualifiedName);
      }), E((N) => {
        var ae;
        const K = new Map(N);
        return (ae = f.tools) == null || ae.forEach((re) => {
          if (!N.has(re.id))
            K.set(re.id, "valid");
          else {
            const S = j.get(re.id), A = Z.get(re.id);
            S !== void 0 && A !== void 0 && S !== A && K.set(re.id, "valid");
          }
        }), K;
      }), L.current = Z;
    }
  }, [f.tools, a]), D.useEffect(() => {
    if (a && f.knowledgebaseTools) {
      const j = U.current, Z = /* @__PURE__ */ new Map();
      f.knowledgebaseTools.forEach((N) => {
        Z.set(N.id, N.document.qualifiedName);
      }), P((N) => {
        var ae;
        const K = new Map(N);
        return (ae = f.knowledgebaseTools) == null || ae.forEach((re) => {
          if (!N.has(re.id))
            K.set(re.id, "valid");
          else {
            const S = j.get(re.id), A = Z.get(re.id);
            S !== void 0 && A !== void 0 && S !== A && K.set(re.id, "valid");
          }
        }), K;
      }), U.current = Z;
    }
  }, [f.knowledgebaseTools, a]), D.useEffect(() => {
    a && (async () => {
      const Z = await Ae(f);
      d(Z);
    })();
  }, [l, f]), hi({
    studioPro: l,
    dependentIds: w,
    onDependentDocumentsChanged: (j) => {
      var re, S, A;
      const Z = [
        ...f.tools.map((z) => z.document.documentId),
        ...((re = f.knowledgebaseTools) == null ? void 0 : re.map((z) => z.document.documentId)) || []
      ], N = j.includes("domainModel"), K = j.includes(((S = f.model) == null ? void 0 : S.documentId) || "") || N, ae = j.some((z) => Z.includes(z));
      K && Ae(f).then((z) => d(z)), N && (we(l, (A = f.entity) == null ? void 0 : A.qualifiedName).then((z) => h(z)), Dn(l, f.variables, f).then((z) => {
        p({ ...f, variables: z });
      })), ae && M();
    },
    watchDomainModelModules: $
  });
  const oe = D.useMemo(() => na(f.variables, T), [f.variables, T]), he = (j) => (Z) => {
    const N = { ...f, [j]: Z };
    p(N), V.current && clearTimeout(V.current), V.current = setTimeout(async () => {
      const K = await er(
        l,
        j,
        N,
        o,
        Z
      );
      p(K);
    }, 300);
  }, m = async () => {
    const j = await wa(l, f, o);
    j && p(j);
  }, pe = async () => {
    const j = await Ca(l, f, o);
    j && p(j);
  }, ke = async () => {
    f.model && va(l, f.model);
  }, g = async () => {
    f.entity && Po(l, f.entity.qualifiedName);
  }, me = async () => {
    const j = await Sa(l, Wt, f, o);
    j && p(j);
  }, we = async (j, Z) => {
    if (!Z)
      return;
    const N = await zt(j, Z);
    if (!N)
      return;
    const K = await Io(N, j);
    if (K !== void 0)
      return K ? /* @__PURE__ */ x.jsx(fa, {}) : /* @__PURE__ */ x.jsx(xa, {});
  }, ne = D.useMemo(() => {
    let j = "";
    return f.maxTokens !== void 0 && (j += "Max tokens: " + f.maxTokens.toLocaleString(navigator.language)), f.temperature !== void 0 && (j.length > 0 && (j += ", "), j += "Temperature: " + f.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), f.topP !== void 0 && (j.length > 0 && (j += ", "), j += "Top P: " + f.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), j;
  }, [f.temperature, f.maxTokens, f.topP]), Ae = async (j) => ({
    isValidModel: await ct("model", l, j),
    isValidEntity: await ct("entity", l, j),
    isValidUsageType: await ct("usageType", l, j),
    isValidUserPrompt: await ct("userPrompt", l, j),
    missingAttributes: await ia(l, j),
    unusedAttributes: await la(l, j),
    isValidToolChoice: await ct("toolChoice", l, j)
  }), Ee = () => {
    var j, Z, N;
    return /* @__PURE__ */ x.jsxs(He, { label: "General", children: [
      /* @__PURE__ */ x.jsx(
        z1,
        {
          label: "Agent type",
          "aria-label": "Agent type",
          value: f.usageType,
          validate: () => s.isValidUsageType,
          compactControl: !0,
          onChange: (K) => er(l, "usageType", f, o, K),
          children: _1.map((K) => /* @__PURE__ */ x.jsx(F1, { value: K.value, children: K.caption }, K.value))
        }
      ),
      /* @__PURE__ */ x.jsx(
        Zt,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((j = f.model) == null ? void 0 : j.qualifiedName) || "",
          icon: f.model ? Ao : void 0,
          buttonCaption: "Select...",
          onClick: pe,
          validate: () => s.isValidModel,
          buttonCaptionSecondary: f.model ? "Show" : void 0,
          onClickSecondary: f.model ? ke : void 0
        }
      ),
      /* @__PURE__ */ x.jsx(
        Zt,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: ne,
          buttonCaption: "Edit",
          onClick: me,
          validate: void 0
        }
      ),
      /* @__PURE__ */ x.jsx(
        fo,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: f.description,
          onChange: he("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ x.jsx(
        Zt,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((Z = f.entity) == null ? void 0 : Z.qualifiedName) || "",
          icon: c,
          onClick: m,
          buttonCaption: "Select...",
          validate: () => s.isValidEntity,
          buttonCaptionSecondary: f.entity ? "Show" : void 0,
          onClickSecondary: f.entity ? g : void 0
        }
      ),
      f.entity && s.missingAttributes.length > 0 && /* @__PURE__ */ x.jsxs(gi, { children: [
        /* @__PURE__ */ x.jsx(Je, { children: `The following attributes cannot be found in ${f.entity.qualifiedName}:` }),
        /* @__PURE__ */ x.jsx("div", { children: s.missingAttributes.map((K) => `{{${K}}}`).join(", ") })
      ] }),
      f.entity && s.unusedAttributes.length > 0 && !v && /* @__PURE__ */ x.jsxs(mi, { onClose: () => b(!0), children: [
        /* @__PURE__ */ x.jsx(Je, { children: `The following attributes are found in ${(N = f.entity) == null ? void 0 : N.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ x.jsx("div", { children: s.unusedAttributes.map((K) => `{{${K}}}`).join(", ") })
      ] })
    ] });
  }, Me = () => /* @__PURE__ */ x.jsx(He, { label: "System prompt", children: /* @__PURE__ */ x.jsx(
    Qn,
    {
      ariaLabel: "System prompt",
      value: f.systemPrompt,
      onChange: he("systemPrompt"),
      highlightRules: oe,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), je = () => /* @__PURE__ */ x.jsx(He, { label: "User prompt", children: /* @__PURE__ */ x.jsx(
    Qn,
    {
      ariaLabel: "User prompt",
      value: f.userPrompt || "",
      onChange: he("userPrompt"),
      highlightRules: oe,
      validate: () => s.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), We = () => /* @__PURE__ */ x.jsx(
    L1,
    {
      agent: f,
      studioPro: l,
      componentName: Wt,
      updateStudioProDocument: o,
      onAgentChange: p,
      toolValidations: y,
      agentValidationInfo: s
    }
  ), Ht = () => /* @__PURE__ */ x.jsx(
    T1,
    {
      variables: f.variables,
      highlightRules: oe,
      triggerTestAction: F,
      isDisabled: R || i,
      showUnsavedChangesWarning: i
    }
  ), qt = () => /* @__PURE__ */ x.jsx(
    ts,
    {
      agent: f,
      studioPro: l,
      componentName: Wt,
      updateStudioProDocument: o,
      onAgentChange: p,
      knowledgebaseToolValidations: k
    }
  ), Ut = () => /* @__PURE__ */ x.jsx(
    b1,
    {
      agentName: e,
      response: B,
      isLoading: R,
      isError: _,
      error: C
    }
  );
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(Yn, { children: [
      Ee(),
      Me(),
      f.usageType === Ft.Task && je(),
      We(),
      qt()
    ] }),
    /* @__PURE__ */ x.jsxs(Yn, { children: [
      Ht(),
      Ut()
    ] })
  ] });
}, N1 = Lo(), H1 = ({ studioPro: e, documentId: t }) => {
  var y, E, k, P;
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = D.useState(!1), [o, a] = D.useState(N1), [u, s] = D.useState(0), [d, c] = D.useState(!1), [h, f] = D.useState(!1), p = [
    t,
    (y = o.contents.model) == null ? void 0 : y.documentId,
    ...o.contents.tools.map((T) => T.document.documentId),
    ...(o.contents.knowledgebaseTools || []).map((T) => T.document.documentId)
  ].filter((T) => !!T), v = o.contents.entity ? [(P = (k = (E = o.contents.entity) == null ? void 0 : E.qualifiedName) == null ? void 0 : k.split(".")) == null ? void 0 : P[0]] : void 0;
  D.useEffect(() => {
    r.getDocumentById(t).then(async (T) => {
      if (T && !("error" in T))
        l(!0), a(T.document);
      else
        throw new Error((T == null ? void 0 : T.error) || "Document not found");
    }).catch(async (T) => {
      await n.show("error", "Error loading document", "Details: " + (T == null ? void 0 : T.message) || T), l(!0);
    });
  }, [u]);
  const b = D.useCallback(
    (T) => {
      T.some((w) => w === t) && s((w) => w + 1), f(!0);
    },
    [t]
  );
  return hi({
    studioPro: e,
    dependentIds: p,
    onDependentDocumentsChanged: b,
    watchProjectSettings: !0,
    watchDomainModelModules: v
  }), D.useEffect(() => {
    const T = (w) => {
      c(w.isConnected), f(!1);
    };
    return e.runtime.controller.addEventListener("connectionChanged", T), () => {
      e.runtime.controller.removeEventListener("connectionChanged", T);
    };
  }, []), D.useEffect(() => {
    aa(e).then((T) => {
      c(T);
    });
  }, [e]), /* @__PURE__ */ x.jsx(ho, { studioPro: e, children: /* @__PURE__ */ x.jsxs(po, { children: [
    !i && /* @__PURE__ */ x.jsx(xo, {}),
    i && /* @__PURE__ */ x.jsx(mo, { children: /* @__PURE__ */ x.jsx(
      V1,
      {
        agentDocument: o,
        isRuntimeConnected: d,
        showUnsavedChangesWarning: h && d,
        studioPro: e,
        updateStudioProDocument: ea(e, t)
      }
    ) })
  ] }) });
}, tm = go(H1);
export {
  H1 as App,
  tm as component
};
