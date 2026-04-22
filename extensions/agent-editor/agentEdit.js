import { $ as bt, a as Jr, b as de, c as nt, d as ei, e as Ln, f as ti, r as D, g as ni, h as ri, i as Ql, j as Jl, k as eo, l as to, m as no, n as ro, o as io, p as Dn, q as lo, s as ii, t as li, u as oi, v as ai, w as mn, x as si, y as ui, z as Rn, A as Se, B as ci, C as oo, D as ao, E as so, F as uo, G as co, H as di, I as p, J as Ae, K as ee, L as X, M as fo, N as fi, O as qe, P as ho, Q as hi, R as Fe, S as pi, T as mi, U as po, V as Qn, W as mo, X as go, Y as xo, Z as yo, _ as bo, a0 as ko, a1 as wo, a2 as Jn, a3 as Co, a4 as vo, a5 as So, a6 as To } from "./Icon-BL-ju1Kw.js";
import { I as Mt, T as gi, B as et, u as xi, c as Eo, C as Io } from "./TextWithIcon-CscNPnWD.js";
import { R as Ao, g as Ot, a as Po, U as ye, b as Lo, P as Do, A as Ro, T as ze, c as yi, m as Fo, k as Mo, d as $o, e as gn, f as jo, i as Bo, h as Oo, j as Zt, l as zo, n as _o } from "./index-YObaGbux.js";
import { I as bi, W as ki, E as Vo } from "./Banner-BR20NG1M.js";
import { h as No, T as er } from "./toolHandlers-DZ_d2dnE.js";
import { T as Kt } from "./TextInputWithButton-rtLJh6Gm.js";
import { h as Ho } from "./knowledgebaseToolHandlers-Dao-XtKI.js";
import { u as wi, T as Ci, D as Qe, k as qo } from "./Table-DU5FBYXs.js";
import { y as vi } from "./Link-Q0LFjAlq.js";
import { $ as Uo, a as Wo, I as xn, S as tr } from "./ComboBox-DwPuWiWO.js";
import { n as Zo } from "./MicroflowIcon-BrRRUbJv.js";
function Ko(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: s, "aria-label": u, "aria-labelledby": d, validationState: c = "valid", isInvalid: h, onPressStart: f, onPressEnd: m, onPressChange: C, onPress: k, onPressUp: y, onClick: T } = e, w = (V) => {
    V.stopPropagation(), t.setSelected(V.target.checked);
  }, A = s != null, E = u != null || d != null;
  !A && !E && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: b, isPressed: R } = bt({
    onPressStart: f,
    onPressEnd: m,
    onPressChange: C,
    onPress: k,
    onPressUp: y,
    onClick: T,
    isDisabled: r
  }), { pressProps: B, isPressed: _ } = bt({
    onPressStart: f,
    onPressEnd: m,
    onPressChange: C,
    onPressUp: y,
    onClick: T,
    onPress(V) {
      var $;
      k == null || k(V), t.toggle(), ($ = n.current) === null || $ === void 0 || $.focus();
    },
    isDisabled: r || i
  }), { focusableProps: v } = Jr(e, n), F = de(b, v), M = nt(e, {
    labelable: !0
  });
  return ei(n, t.defaultSelected, t.setSelected), {
    labelProps: de(B, {
      onClick: (V) => V.preventDefault()
    }),
    inputProps: de(M, {
      "aria-invalid": h || c === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": i || void 0,
      onChange: w,
      disabled: r,
      ...l == null ? {} : {
        value: l
      },
      name: o,
      form: a,
      type: "checkbox",
      ...F
    }),
    isSelected: t.isSelected,
    isPressed: R || _,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: h || c === "invalid"
  };
}
function Si(e, t, n) {
  let r = Ln({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: s, isSelected: u, isPressed: d, isDisabled: c, isReadOnly: h } = Ko({
    ...e,
    isInvalid: i
  }, t, n);
  ti(e, r, n);
  let { isIndeterminate: f, isRequired: m, validationBehavior: C = "aria" } = e;
  D.useEffect(() => {
    n.current && (n.current.indeterminate = !!f);
  });
  let { pressProps: k } = bt({
    isDisabled: c || h,
    onPress() {
      let { [ni]: y } = e, { commitValidation: T } = y || r;
      T();
    }
  });
  return {
    labelProps: de(a, k, D.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (y) => y.preventDefault()
    }), [])),
    inputProps: {
      ...s,
      checked: u,
      "aria-required": m && C === "aria" || void 0,
      required: m && C === "native"
    },
    isSelected: u,
    isPressed: d,
    isDisabled: c,
    isReadOnly: h,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
const Go = /* @__PURE__ */ new WeakMap();
function Ti(e = {}) {
  let { isReadOnly: t } = e, [n, r] = ri(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = D.useState(n);
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
function Xo(e, t, n) {
  const r = Ti({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(y) {
      y ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(y);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: s } = Go.get(t);
  var u;
  s = (u = e.validationBehavior) !== null && u !== void 0 ? u : s;
  let { realtimeValidation: d } = Ln({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = D.useRef(Ql), h = () => {
    t.setInvalid(e.value, d.isInvalid ? d : c.current);
  };
  D.useEffect(h);
  let f = t.realtimeValidation.isInvalid ? t.realtimeValidation : d, m = s === "native" ? t.displayValidation : f;
  var C;
  let k = Si({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (C = e.isRequired) !== null && C !== void 0 ? C : t.isRequired,
    validationBehavior: s,
    [ni]: {
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
    ...k,
    inputProps: {
      ...k.inputProps,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? a : null,
        o
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const Ei = /* @__PURE__ */ new WeakMap();
function Yo(e, t, n) {
  let { value: r, children: i, "aria-label": l, "aria-labelledby": o, onPressStart: a, onPressEnd: s, onPressChange: u, onPress: d, onPressUp: c, onClick: h } = e;
  const f = e.isDisabled || t.isDisabled;
  let m = i != null, C = l != null || o != null;
  !m && !C && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let k = t.selectedValue === r, y = (L) => {
    L.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: T, isPressed: w } = bt({
    onPressStart: a,
    onPressEnd: s,
    onPressChange: u,
    onPress: d,
    onPressUp: c,
    onClick: h,
    isDisabled: f
  }), { pressProps: A, isPressed: E } = bt({
    onPressStart: a,
    onPressEnd: s,
    onPressChange: u,
    onPressUp: c,
    onClick: h,
    isDisabled: f,
    onPress(L) {
      var U;
      d == null || d(L), t.setSelectedValue(r), (U = n.current) === null || U === void 0 || U.focus();
    }
  }), { focusableProps: b } = Jr(de(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), R = de(T, b), B = nt(e, {
    labelable: !0
  }), _ = -1;
  t.selectedValue != null ? t.selectedValue === r && (_ = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (_ = 0), f && (_ = void 0);
  let { name: v, form: F, descriptionId: M, errorMessageId: V, validationBehavior: $ } = Ei.get(t);
  return ei(n, t.defaultSelectedValue, t.setSelectedValue), ti({
    validationBehavior: $
  }, t, n), {
    labelProps: de(A, D.useMemo(() => ({
      onClick: (L) => L.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (L) => L.preventDefault()
    }), [])),
    inputProps: de(B, {
      ...R,
      type: "radio",
      name: v,
      form: F,
      tabIndex: _,
      disabled: f,
      required: t.isRequired && $ === "native",
      checked: k,
      value: r,
      onChange: y,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? V : null,
        M
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: f,
    isSelected: k,
    isPressed: w || E
  };
}
function Qo(e, t) {
  let { name: n, form: r, isReadOnly: i, isRequired: l, isDisabled: o, orientation: a = "vertical", validationBehavior: s = "aria" } = e, { direction: u } = Jl(), { isInvalid: d, validationErrors: c, validationDetails: h } = t.displayValidation, { labelProps: f, fieldProps: m, descriptionProps: C, errorMessageProps: k } = eo({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || c
  }), y = nt(e, {
    labelable: !0
  }), { focusWithinProps: T } = to({
    onBlurWithin(E) {
      var b;
      (b = e.onBlur) === null || b === void 0 || b.call(e, E), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), w = (E) => {
    let b;
    switch (E.key) {
      case "ArrowRight":
        u === "rtl" && a !== "vertical" ? b = "prev" : b = "next";
        break;
      case "ArrowLeft":
        u === "rtl" && a !== "vertical" ? b = "next" : b = "prev";
        break;
      case "ArrowDown":
        b = "next";
        break;
      case "ArrowUp":
        b = "prev";
        break;
      default:
        return;
    }
    E.preventDefault();
    let R = ro(E.currentTarget, {
      from: E.target,
      accept: (_) => _ instanceof io(_).HTMLInputElement && _.type === "radio"
    }), B;
    b === "next" ? (B = R.nextNode(), B || (R.currentNode = E.currentTarget, B = R.firstChild())) : (B = R.previousNode(), B || (R.currentNode = E.currentTarget, B = R.lastChild())), B && (B.focus(), t.setSelectedValue(B.value));
  }, A = no(n);
  return Ei.set(t, {
    name: A,
    form: r,
    descriptionId: C.id,
    errorMessageId: k.id,
    validationBehavior: s
  }), {
    radioGroupProps: de(y, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: w,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": l || void 0,
      "aria-disabled": o || void 0,
      "aria-orientation": a,
      ...m,
      ...T
    }),
    labelProps: f,
    descriptionProps: C,
    errorMessageProps: k,
    isInvalid: d,
    validationErrors: c,
    validationDetails: h
  };
}
let Jo = Math.round(Math.random() * 1e10), ea = 0;
function ta(e) {
  let t = D.useMemo(() => e.name || `radio-group-${Jo}-${++ea}`, [
    e.name
  ]);
  var n;
  let [r, i] = ri(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [l] = D.useState(r), [o, a] = D.useState(null), s = Ln({
    ...e,
    value: r
  }), u = (h) => {
    !e.isReadOnly && !e.isDisabled && (i(h), s.commitValidation());
  }, d = s.displayValidation.isInvalid;
  var c;
  return {
    ...s,
    name: t,
    selectedValue: r,
    defaultSelectedValue: e.value !== void 0 ? l : (c = e.defaultValue) !== null && c !== void 0 ? c : null,
    setSelectedValue: u,
    lastFocusedValue: o,
    setLastFocusedValue: a,
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isRequired: e.isRequired || !1,
    validationState: e.validationState || (d ? "invalid" : null),
    isInvalid: d
  };
}
const na = /* @__PURE__ */ D.createContext(null), ra = /* @__PURE__ */ D.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Dn(i, n, lo);
  let { validationBehavior: l } = ii(li) || {};
  var o, a;
  let s = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", u = D.useContext(na), d = oi(D.useMemo(() => ai(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: c, inputProps: h, isSelected: f, isDisabled: m, isReadOnly: C, isPressed: k, isInvalid: y } = u ? Xo({
    ...mn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, u, d) : Si({
    ...mn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: s
  }, Ti(t), d), { isFocused: T, isFocusVisible: w, focusProps: A } = si(), E = m || C, { hoverProps: b, isHovered: R } = ui({
    ...t,
    isDisabled: E
  }), B = Rn({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: f,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: k,
      isHovered: R,
      isFocused: T,
      isFocusVisible: w,
      isDisabled: m,
      isReadOnly: C,
      isInvalid: y,
      isRequired: t.isRequired || !1
    }
  }), _ = nt(t, {
    global: !0
  });
  return delete _.id, delete _.onClick, /* @__PURE__ */ Se.createElement("label", {
    ...de(_, c, b, B),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": f || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": k || void 0,
    "data-hovered": R || void 0,
    "data-focused": T || void 0,
    "data-focus-visible": w || void 0,
    "data-disabled": m || void 0,
    "data-readonly": C || void 0,
    "data-invalid": y || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Se.createElement(ci, {
    elementType: "span"
  }, /* @__PURE__ */ Se.createElement("input", {
    ...de(h, A),
    ref: d
  })), B.children);
}), ia = /* @__PURE__ */ D.createContext(null), la = /* @__PURE__ */ D.createContext(null), Ii = /* @__PURE__ */ D.createContext(null), oa = /* @__PURE__ */ D.forwardRef(function(t, n) {
  [t, n] = Dn(t, n, ia);
  let { validationBehavior: r } = ii(li) || {};
  var i, l;
  let o = (l = (i = t.validationBehavior) !== null && i !== void 0 ? i : r) !== null && l !== void 0 ? l : "native", a = ta({
    ...t,
    validationBehavior: o
  }), [s, u] = oo(!t["aria-label"] && !t["aria-labelledby"]), { radioGroupProps: d, labelProps: c, descriptionProps: h, errorMessageProps: f, ...m } = Qo({
    ...t,
    label: u,
    validationBehavior: o
  }, a), C = Rn({
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
  }), k = nt(t, {
    global: !0
  });
  return /* @__PURE__ */ Se.createElement("div", {
    ...de(k, C, d),
    ref: n,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "vertical",
    "data-invalid": a.isInvalid || void 0,
    "data-disabled": a.isDisabled || void 0,
    "data-readonly": a.isReadOnly || void 0,
    "data-required": a.isRequired || void 0
  }, /* @__PURE__ */ Se.createElement(ao, {
    values: [
      [
        Ii,
        a
      ],
      [
        so,
        {
          ...c,
          ref: s,
          elementType: "span"
        }
      ],
      [
        uo,
        {
          slots: {
            description: h,
            errorMessage: f
          }
        }
      ],
      [
        co,
        m
      ]
    ]
  }, /* @__PURE__ */ Se.createElement(Wo, null, C.children)));
}), aa = /* @__PURE__ */ D.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Dn(i, n, la);
  let l = Se.useContext(Ii), o = oi(D.useMemo(() => ai(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: a, inputProps: s, isSelected: u, isDisabled: d, isPressed: c } = Yo({
    ...mn(t),
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, l, o), { isFocused: h, isFocusVisible: f, focusProps: m } = si(), C = d || l.isReadOnly, { hoverProps: k, isHovered: y } = ui({
    ...t,
    isDisabled: C
  }), T = Rn({
    ...t,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: u,
      isPressed: c,
      isHovered: y,
      isFocused: h,
      isFocusVisible: f,
      isDisabled: d,
      isReadOnly: l.isReadOnly,
      isInvalid: l.isInvalid,
      isRequired: l.isRequired
    }
  }), w = nt(t, {
    global: !0
  });
  return delete w.id, delete w.onClick, /* @__PURE__ */ Se.createElement("label", {
    ...de(w, a, k, T),
    ref: n,
    "data-selected": u || void 0,
    "data-pressed": c || void 0,
    "data-hovered": y || void 0,
    "data-focused": h || void 0,
    "data-focus-visible": f || void 0,
    "data-disabled": d || void 0,
    "data-readonly": l.isReadOnly || void 0,
    "data-invalid": l.isInvalid || void 0,
    "data-required": l.isRequired || void 0
  }, /* @__PURE__ */ Se.createElement(ci, {
    elementType: "span"
  }, /* @__PURE__ */ Se.createElement("input", {
    ...de(s, m),
    ref: o
  })), /* @__PURE__ */ Se.createElement(Uo.Provider, {
    value: {
      isSelected: u
    }
  }, T.children));
}), sa = [
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
], ua = [
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
], ca = (e, t) => async (n) => {
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, n);
  } catch (r) {
    await e.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function da(e, t) {
  const n = /\{\{([^}\s{]+)\}\}/g, r = t.systemPrompt.match(n) || [], i = t.userPrompt && t.usageType === ye.Task ? t.userPrompt.match(n) || [] : [], l = [...r, ...i];
  if (l.length === 0)
    return Promise.resolve([]);
  const o = l.map((d) => d.replace(/\{\{|\}\}/g, "")), a = [...new Set(o)], s = t.variables, u = a.map((d) => s.find((h) => h.key === d) || {
    key: d,
    isAttributeInEntity: !1
  });
  return Fn(e, u, t);
}
const fa = (e, t) => e.map((n, r) => ({
  pattern: new RegExp("\\{\\{" + n.key + "\\}\\}", "g"),
  style: {
    ...ha(r, di(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function ha(e, t) {
  const n = t ? ua : sa;
  return {
    color: n[e % n.length][1],
    backgroundColor: n[e % n.length][0],
    borderColor: n[e % n.length][1]
  };
}
async function Fn(e, t, n) {
  const r = await Ai(e, n), i = await Pi(n, e);
  return t.map((l) => {
    const o = i.includes(l.key);
    return {
      ...l,
      isAttributeInEntity: r === !1 || o
    };
  });
}
const Ai = async (e, t) => t.entity ? await Ot(e, t.entity.qualifiedName) !== void 0 : !0, pa = async (e, t) => t.variables.length === 0 ? [] : !t.entity || !await Ot(e, t.entity.qualifiedName) ? [] : t.variables.filter((n) => !n.isAttributeInEntity).map((n) => n.key), Pi = async (e, t) => {
  if (!e.entity)
    return [];
  const n = await Ot(t, e.entity.qualifiedName);
  return n ? (await Po(t, n)).sort() : [];
}, ma = async (e, t) => (await Pi(t, e)).filter((r) => !t.variables.find((i) => i.key === r)), ga = async (e, t, n, r) => {
  const i = n.reduce((a, s) => (a[s.key] = s.value, a), {}), l = {
    documentId: t,
    variables: JSON.stringify(i),
    messages: JSON.stringify(r || [])
  };
  return await e.runtime.controller.executePreviewAction(
    "preview_agent_test",
    l
  );
}, xa = async (e) => {
  try {
    const t = await e.runtime.controller.executePreviewAction("preview_runtime_test", {});
    return !(typeof t == "object" && t !== null && "error" in t && t.error === Ao);
  } catch {
    return !0;
  }
}, ya = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", ba = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var ka = Object.defineProperty, wa = (e, t) => ka(e, "name", { value: t, configurable: !0 });
const Ca = wa((e) => p.jsx(Ae, { light: ba, dark: ya, ...e }), "EntityIcon"), va = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", Sa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Ta = Object.defineProperty, Ea = (e, t) => Ta(e, "name", { value: t, configurable: !0 });
const Ia = Ea((e) => p.jsx(Ae, { light: Sa, dark: va, ...e }), "EntityNonPersistableIcon"), Aa = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", Pa = "Test action failed. Please check the runtime logs for more details.", La = (e, t, n) => {
  const [r, i] = D.useState(void 0), [l, o] = D.useState(!1), [a, s] = D.useState(!1), [u, d] = D.useState(void 0), c = D.useCallback(
    async (h, f) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: Lo,
          title: "App is not running",
          message: "Please run the app to use the playground.",
          displayDurationInSeconds: 5
        });
        return;
      }
      o(!0), i(void 0), s(!1), d(void 0);
      try {
        const m = await ga(e, t, h, f);
        if (m === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in m && m.message === Do) {
          s(!0), d({ name: "Error", message: Aa, link: Ro });
          return;
        }
        i(m);
      } catch {
        s(!0), d({ name: "Error", message: Pa });
      } finally {
        o(!1);
      }
    },
    [e, n, t]
  );
  return { data: r, isPending: l, isError: a, error: u, execute: c };
}, nr = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt" || t === "usageType") && (l.variables = await da(e, l)), r(l), l;
}, Da = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const l = await Fn(e, t.variables, i);
    i = { ...i, variables: l }, n(i);
  }
  return i;
}, Ra = async (e, t, n) => {
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
      const r = await yi(t, n.model);
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
      if (!await Ai(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "usageType":
      if (!n.usageType)
        return "Please select an agent type.";
      break;
    case "userPrompt":
      if (!n.userPrompt && n.usageType === ye.Task)
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
  if (!await yi(e, t))
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
}, rr = async (e, t, n, r, i) => {
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
    let s;
    const u = { ...n };
    return i && n.tools ? (s = n.tools.map((d) => d.id === i ? a : d), n.toolChoiceToolName && n.toolChoiceToolName === (l == null ? void 0 : l.name) && a.name !== (l == null ? void 0 : l.name) && (u.toolChoiceToolName = a.name)) : s = [...n.tools || [], a], s.sort((d, c) => d.name.localeCompare(c.name)), u.tools = s, r(u), u;
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
}, ir = async (e, t, n, r, i) => {
  const l = n.knowledgebaseTools || [], o = i ? l.find((s) => s.id === i) : void 0, a = await e.ui.dialogs.showModal(
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
    const s = a;
    let u;
    i ? u = l.map((c) => c.id === i ? s : c) : u = [...l, s], u.sort((c, h) => c.name.localeCompare(h.name));
    const d = { ...n, knowledgebaseTools: u };
    return r(d), d;
  }
  return null;
}, ja = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to remove this knowledge base from the agent?"
  }) === !1)
    return;
  const o = (t.knowledgebaseTools || []).filter((s) => s.id !== r), a = { ...t, knowledgebaseTools: o };
  return n(a), a;
}, Ba = async (e, t, n) => {
  const r = {
    ...e,
    toolChoice: n ?? void 0,
    // Clear toolChoiceToolName if toolChoice is not "Tool"
    toolChoiceToolName: n === ze.Tool ? e.toolChoiceToolName : void 0
  };
  return t(r), r;
}, Oa = async (e, t, n) => {
  if (e.toolChoice !== ze.Tool)
    return;
  const r = { ...e, toolChoiceToolName: n ?? void 0 };
  return t(r), r;
}, za = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", _a = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Va = Object.defineProperty, Na = (e, t) => Va(e, "name", { value: t, configurable: !0 });
const Li = Na((e) => p.jsx(Ae, { light: _a, dark: za, ...e }), "AppSelectorNoVersionIcon"), Ha = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", qa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ua = Object.defineProperty, Wa = (e, t) => Ua(e, "name", { value: t, configurable: !0 });
const Di = Wa((e) => p.jsx(Ae, { light: qa, dark: Ha, ...e }), "EditIcon"), Za = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ka = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ga = Object.defineProperty, Xa = (e, t) => Ga(e, "name", { value: t, configurable: !0 });
const Ri = Xa((e) => p.jsx(Ae, { light: Ka, dark: Za, ...e }), "PageIcon"), Ya = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Qa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Ja = Object.defineProperty, es = (e, t) => Ja(e, "name", { value: t, configurable: !0 });
const Fi = es((e) => p.jsx(Ae, { light: Qa, dark: Ya, ...e }), "SyncIcon"), ts = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ns = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var rs = Object.defineProperty, is = (e, t) => rs(e, "name", { value: t, configurable: !0 });
const ls = is((e) => p.jsx(Ae, { light: ns, dark: ts, ...e }), "CheckCheckboxIcon");
var os = Object.defineProperty, as = (e, t) => os(e, "name", { value: t, configurable: !0 });
const Mi = as(({ children: e, ...t }) => p.jsx(us, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => p.jsxs(p.Fragment, { children: [p.jsxs($i, { $isSelected: r, $isIndeterminate: n, children: [n && p.jsx(ss, {}), r && !n && p.jsx(ls, {})] }), e] }) }), "Checkbox"), $i = X.div`
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
`, ss = X.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, us = X(ra)`
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
        ${$i} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${fo}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, cs = X(Mi)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, ds = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  knowledgebaseToolValidations: l
}) => {
  const [o, a] = D.useState([]), s = D.useMemo(() => (e.knowledgebaseTools || []).map((y, T) => ({
    id: y.id ?? String(T),
    enabled: y.enabled,
    name: y.name,
    description: y.description || "",
    tool: y.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: u, sortProps: d } = wi(s), c = D.useCallback(
    (k) => {
      const y = l.get(k);
      return y === "invalid" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(fi, { title: "Tool invalid" }) }) : y === "syncing" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(Fi, { title: "Validating..." }) }) : null;
    },
    [l]
  ), h = D.useCallback(async () => {
    const k = await ir(
      t,
      n,
      e,
      r
    );
    k && i(k);
  }, [t, n, e, r, i]), f = D.useCallback(async () => {
    const k = e.knowledgebaseTools || [];
    if (o.length === 0 || k.length === 0)
      return;
    const y = o[0], T = await ir(
      t,
      n,
      e,
      r,
      y
    );
    T && i(T);
  }, [t, n, e, r, i, o]), m = D.useCallback(async () => {
    const k = e.knowledgebaseTools || [];
    if (o.length === 0 || k.length === 0)
      return;
    const y = o[0], T = await ja(
      t,
      e,
      r,
      y
    );
    T && i(T);
  }, [e, r, i, o]), C = D.useCallback(
    async (k, y) => {
      const T = e.knowledgebaseTools || [];
      if (T.length === 0)
        return;
      const w = T.map(
        (E) => (E.id ?? "") === k ? { ...E, enabled: y } : E
      ), A = { ...e, knowledgebaseTools: w };
      r(A), i(A);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, r, i]
  );
  return /* @__PURE__ */ p.jsx(qe, { label: "Knowledge bases", children: /* @__PURE__ */ p.jsx(
    Ci,
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
      data: u.map((k) => [
        { cellContent: c(k.id) },
        {
          cellContent: /* @__PURE__ */ p.jsx(
            cs,
            {
              "aria-label": "Enabled",
              isSelected: k.enabled,
              onChange: (y) => C(k.id, y)
            }
          )
        },
        { cellContent: k.name, tooltipText: k.name },
        { cellContent: k.description, tooltipText: k.description },
        {
          cellContent: /* @__PURE__ */ p.jsx(gi, { icon: Mo, text: k.tool }),
          tooltipText: k.tool
        }
      ]),
      rowKey: (k, y) => {
        var T;
        return ((T = u[y]) == null ? void 0 : T.id) ?? String(y);
      },
      rowOpacity: (k) => {
        var y;
        return (y = u[k]) != null && y.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: o,
      onDoubleClick: f,
      onSelectionChange: a,
      ...d,
      toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
        /* @__PURE__ */ p.jsx(
          Qe,
          {
            icon: /* @__PURE__ */ p.jsx(Ri, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: h
          }
        ),
        /* @__PURE__ */ p.jsx(
          Qe,
          {
            icon: /* @__PURE__ */ p.jsx(Di, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: f,
            tooltip: "Edit selected knowledge base",
            isDisabled: o.length === 0
          }
        ),
        /* @__PURE__ */ p.jsx(
          Qe,
          {
            icon: /* @__PURE__ */ p.jsx(Li, {}),
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
}, fs = ho`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, hs = X.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, Gt = X.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${fs} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, ji = () => /* @__PURE__ */ p.jsxs(hs, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ p.jsx(Gt, { delay: "0s" }),
  /* @__PURE__ */ p.jsx(Gt, { delay: "0.2s" }),
  /* @__PURE__ */ p.jsx(Gt, { delay: "0.4s" })
] });
function ps(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const ms = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, gs = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, xs = {};
function lr(e, t) {
  return (xs.jsx ? gs : ms).test(e);
}
const ys = /[ \t\n\f\r]/g;
function bs(e) {
  return typeof e == "object" ? e.type === "text" ? or(e.value) : !1 : or(e);
}
function or(e) {
  return e.replace(ys, "") === "";
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
function Bi(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new vt(n, r, t);
}
function yn(e) {
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
let ks = 0;
const H = We(), ne = We(), bn = We(), I = We(), J = We(), Je = We(), xe = We();
function We() {
  return 2 ** ++ks;
}
const kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: H,
  booleanish: ne,
  commaOrSpaceSeparated: xe,
  commaSeparated: Je,
  number: I,
  overloadedBoolean: bn,
  spaceSeparated: J
}, Symbol.toStringTag, { value: "Module" })), Xt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(kn)
);
class Mn extends fe {
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
    if (super(t, n), ar(this, "space", i), typeof r == "number")
      for (; ++l < Xt.length; ) {
        const o = Xt[l];
        ar(this, Xt[l], (r & kn[o]) === kn[o]);
      }
  }
}
Mn.prototype.defined = !0;
function ar(e, t, n) {
  n && (e[t] = n);
}
function rt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new Mn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[yn(r)] = r, n[yn(l.attribute)] = r;
  }
  return new vt(t, n, e.space);
}
const Oi = rt({
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
function zi(e, t) {
  return t in e ? e[t] : t;
}
function _i(e, t) {
  return zi(e, t.toLowerCase());
}
const ws = rt({
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
    accept: Je,
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
    coords: I | Je,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: H,
    defer: H,
    dir: null,
    dirName: null,
    disabled: H,
    download: bn,
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
    hidden: bn,
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
  transform: _i
}), Cs = rt({
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
    g1: Je,
    g2: Je,
    glyphName: Je,
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
  transform: zi
}), Vi = rt({
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
}), Ni = rt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: _i
}), Hi = rt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), vs = {
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
}, Ss = /[A-Z]/g, sr = /-[a-z]/g, Ts = /^data[-\w.:]+$/i;
function Es(e, t) {
  const n = yn(t);
  let r = t, i = fe;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ts.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(sr, As);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!sr.test(l)) {
        let o = l.replace(Ss, Is);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = Mn;
  }
  return new i(r, t);
}
function Is(e) {
  return "-" + e.toLowerCase();
}
function As(e) {
  return e.charAt(1).toUpperCase();
}
const Ps = Bi([Oi, ws, Vi, Ni, Hi], "html"), $n = Bi([Oi, Cs, Vi, Ni, Hi], "svg");
function Ls(e) {
  return e.join(" ").trim();
}
var Ge = {}, Yt, ur;
function Ds() {
  if (ur) return Yt;
  ur = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, s = `
`, u = "/", d = "*", c = "", h = "comment", f = "declaration";
  function m(k, y) {
    if (typeof k != "string")
      throw new TypeError("First argument must be a string");
    if (!k) return [];
    y = y || {};
    var T = 1, w = 1;
    function A($) {
      var L = $.match(t);
      L && (T += L.length);
      var U = $.lastIndexOf(s);
      w = ~U ? $.length - U : w + $.length;
    }
    function E() {
      var $ = { line: T, column: w };
      return function(L) {
        return L.position = new b($), _(), L;
      };
    }
    function b($) {
      this.start = $, this.end = { line: T, column: w }, this.source = y.source;
    }
    b.prototype.content = k;
    function R($) {
      var L = new Error(
        y.source + ":" + T + ":" + w + ": " + $
      );
      if (L.reason = $, L.filename = y.source, L.line = T, L.column = w, L.source = k, !y.silent) throw L;
    }
    function B($) {
      var L = $.exec(k);
      if (L) {
        var U = L[0];
        return A(U), k = k.slice(U.length), L;
      }
    }
    function _() {
      B(n);
    }
    function v($) {
      var L;
      for ($ = $ || []; L = F(); )
        L !== !1 && $.push(L);
      return $;
    }
    function F() {
      var $ = E();
      if (!(u != k.charAt(0) || d != k.charAt(1))) {
        for (var L = 2; c != k.charAt(L) && (d != k.charAt(L) || u != k.charAt(L + 1)); )
          ++L;
        if (L += 2, c === k.charAt(L - 1))
          return R("End of comment missing");
        var U = k.slice(2, L - 2);
        return w += 2, A(U), k = k.slice(L), w += 2, $({
          type: h,
          comment: U
        });
      }
    }
    function M() {
      var $ = E(), L = B(r);
      if (L) {
        if (F(), !B(i)) return R("property missing ':'");
        var U = B(l), te = $({
          type: f,
          property: C(L[0].replace(e, c)),
          value: U ? C(U[0].replace(e, c)) : c
        });
        return B(o), te;
      }
    }
    function V() {
      var $ = [];
      v($);
      for (var L; L = M(); )
        L !== !1 && ($.push(L), v($));
      return $;
    }
    return _(), V();
  }
  function C(k) {
    return k ? k.replace(a, c) : c;
  }
  return Yt = m, Yt;
}
var cr;
function Rs() {
  if (cr) return Ge;
  cr = 1;
  var e = Ge && Ge.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.default = n;
  const t = e(Ds());
  function n(r, i) {
    let l = null;
    if (!r || typeof r != "string")
      return l;
    const o = (0, t.default)(r), a = typeof i == "function";
    return o.forEach((s) => {
      if (s.type !== "declaration")
        return;
      const { property: u, value: d } = s;
      a ? i(u, d, s) : d && (l = l || {}, l[u] = d);
    }), l;
  }
  return Ge;
}
var ft = {}, dr;
function Fs() {
  if (dr) return ft;
  dr = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(u) {
    return !u || n.test(u) || e.test(u);
  }, o = function(u, d) {
    return d.toUpperCase();
  }, a = function(u, d) {
    return "".concat(d, "-");
  }, s = function(u, d) {
    return d === void 0 && (d = {}), l(u) ? u : (u = u.toLowerCase(), d.reactCompat ? u = u.replace(i, a) : u = u.replace(r, a), u.replace(t, o));
  };
  return ft.camelCase = s, ft;
}
var ht, fr;
function Ms() {
  if (fr) return ht;
  fr = 1;
  var e = ht && ht.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Rs()), n = Fs();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, s) {
      a && s && (o[(0, n.camelCase)(a, l)] = s);
    }), o;
  }
  return r.default = r, ht = r, ht;
}
var $s = Ms();
const js = /* @__PURE__ */ hi($s), qi = Ui("end"), jn = Ui("start");
function Ui(e) {
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
function Wi(e) {
  const t = jn(e), n = qi(e);
  if (t && n)
    return { start: t, end: n };
}
function gt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? hr(e.position) : "start" in e || "end" in e ? hr(e) : "line" in e || "column" in e ? wn(e) : "";
}
function wn(e) {
  return pr(e && e.line) + ":" + pr(e && e.column);
}
function hr(e) {
  return wn(e && e.start) + "-" + wn(e && e.end);
}
function pr(e) {
  return e && typeof e == "number" ? e : 1;
}
class oe extends Error {
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
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = gt(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
oe.prototype.file = "";
oe.prototype.name = "";
oe.prototype.reason = "";
oe.prototype.message = "";
oe.prototype.stack = "";
oe.prototype.column = void 0;
oe.prototype.line = void 0;
oe.prototype.ancestors = void 0;
oe.prototype.cause = void 0;
oe.prototype.fatal = void 0;
oe.prototype.place = void 0;
oe.prototype.ruleId = void 0;
oe.prototype.source = void 0;
const Bn = {}.hasOwnProperty, Bs = /* @__PURE__ */ new Map(), Os = /[A-Z]/g, zs = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), _s = /* @__PURE__ */ new Set(["td", "th"]), Zi = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Vs(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Gs(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Ks(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? $n : Ps,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = Ki(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function Ki(e, t, n) {
  if (t.type === "element")
    return Ns(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Hs(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return Us(e, t, n);
  if (t.type === "mdxjsEsm")
    return qs(e, t);
  if (t.type === "root")
    return Ws(e, t, n);
  if (t.type === "text")
    return Zs(e, t);
}
function Ns(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = $n, e.schema = i), e.ancestors.push(t);
  const l = Xi(e, t.tagName, !1), o = Xs(e, t);
  let a = zn(e, t);
  return zs.has(t.tagName) && (a = a.filter(function(s) {
    return typeof s == "string" ? !bs(s) : !0;
  })), Gi(e, o, l, t), On(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function Hs(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  kt(e, t.position);
}
function qs(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  kt(e, t.position);
}
function Us(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = $n, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : Xi(e, t.name, !0), o = Ys(e, t), a = zn(e, t);
  return Gi(e, o, l, t), On(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function Ws(e, t, n) {
  const r = {};
  return On(r, zn(e, t)), e.create(t, e.Fragment, r, n);
}
function Zs(e, t) {
  return t.value;
}
function Gi(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function On(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function Ks(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const u = Array.isArray(o.children) ? n : t;
    return a ? u(l, o, a) : u(l, o);
  }
}
function Gs(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), s = jn(r);
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
function Xs(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Bn.call(t.properties, i)) {
      const l = Qs(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && _s.has(t.tagName) ? r = a : n[o] = a;
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
function Ys(e, t) {
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
function zn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Bs;
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
    const a = Ki(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Qs(e, t, n) {
  const r = Es(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? ps(n) : Ls(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Js(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = eu(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? vs[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Js(e, t) {
  try {
    return js(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new oe("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Zi + "#cannot-parse-style-attribute", i;
  }
}
function Xi(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = lr(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = lr(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Bn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  kt(e);
}
function kt(e, t) {
  const n = new oe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Zi + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function eu(e) {
  const t = {};
  let n;
  for (n in e)
    Bn.call(e, n) && (t[tu(n)] = e[n]);
  return t;
}
function tu(e) {
  let t = e.replace(Os, nu);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function nu(e) {
  return "-" + e.toLowerCase();
}
const Qt = {
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
}, ru = {};
function _n(e, t) {
  const n = ru, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Yi(e, r, i);
}
function Yi(e, t, n) {
  if (iu(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return mr(e.children, t, n);
  }
  return Array.isArray(e) ? mr(e, t, n) : "";
}
function mr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Yi(e[i], t, n);
  return r.join("");
}
function iu(e) {
  return !!(e && typeof e == "object");
}
const gr = document.createElement("i");
function Vn(e) {
  const t = "&" + e + ";";
  gr.innerHTML = t;
  const n = gr.textContent;
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
const xr = {}.hasOwnProperty;
function Qi(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    lu(t, e[n]);
  return t;
}
function lu(e, t) {
  let n;
  for (n in t) {
    const i = (xr.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        xr.call(i, o) || (i[o] = []);
        const a = l[o];
        ou(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function ou(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  be(e, 0, 0, r);
}
function Ji(e, t) {
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
function Te(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ue = _e(/[A-Za-z]/), le = _e(/[\dA-Za-z]/), au = _e(/[#-'*+\--9=?A-Z^-~]/);
function $t(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Cn = _e(/\d/), su = _e(/[\dA-Fa-f]/), uu = _e(/[!-/:-@[-`{-~]/);
function z(e) {
  return e !== null && e < -2;
}
function Q(e) {
  return e !== null && (e < 0 || e === 32);
}
function q(e) {
  return e === -2 || e === -1 || e === 32;
}
const zt = _e(new RegExp("\\p{P}|\\p{S}", "u")), Ue = _e(/\s/);
function _e(e) {
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
    if (l === 37 && le(e.charCodeAt(n + 1)) && le(e.charCodeAt(n + 2)))
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
  function o(s) {
    return q(s) ? (e.enter(n), a(s)) : t(s);
  }
  function a(s) {
    return q(s) && l++ < i ? (e.consume(s), a) : (e.exit(n), t(s));
  }
}
const cu = {
  tokenize: du
};
function du(e) {
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
    return z(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const fu = {
  tokenize: hu
}, yr = {
  tokenize: pu
};
function hu(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(w) {
    if (r < n.length) {
      const A = n[r];
      return t.containerState = A[1], e.attempt(A[0].continuation, s, u)(w);
    }
    return u(w);
  }
  function s(w) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && T();
      const A = t.events.length;
      let E = A, b;
      for (; E--; )
        if (t.events[E][0] === "exit" && t.events[E][1].type === "chunkFlow") {
          b = t.events[E][1].end;
          break;
        }
      y(r);
      let R = A;
      for (; R < t.events.length; )
        t.events[R][1].end = {
          ...b
        }, R++;
      return be(t.events, E + 1, 0, t.events.slice(A)), t.events.length = R, u(w);
    }
    return a(w);
  }
  function u(w) {
    if (r === n.length) {
      if (!i)
        return h(w);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return m(w);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(yr, d, c)(w);
  }
  function d(w) {
    return i && T(), y(r), h(w);
  }
  function c(w) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(w);
  }
  function h(w) {
    return t.containerState = {}, e.attempt(yr, f, m)(w);
  }
  function f(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(w);
  }
  function m(w) {
    if (w === null) {
      i && T(), y(0), e.consume(w);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), C(w);
  }
  function C(w) {
    if (w === null) {
      k(e.exit("chunkFlow"), !0), y(0), e.consume(w);
      return;
    }
    return z(w) ? (e.consume(w), k(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(w), C);
  }
  function k(w, A) {
    const E = t.sliceStream(w);
    if (A && E.push(null), w.previous = l, l && (l.next = w), l = w, i.defineSkip(w.start), i.write(E), t.parser.lazy[w.start.line]) {
      let b = i.events.length;
      for (; b--; )
        if (
          // The token starts before the line ending…
          i.events[b][1].start.offset < o && // …and either is not ended yet…
          (!i.events[b][1].end || // …or ends after it.
          i.events[b][1].end.offset > o)
        )
          return;
      const R = t.events.length;
      let B = R, _, v;
      for (; B--; )
        if (t.events[B][0] === "exit" && t.events[B][1].type === "chunkFlow") {
          if (_) {
            v = t.events[B][1].end;
            break;
          }
          _ = !0;
        }
      for (y(r), b = R; b < t.events.length; )
        t.events[b][1].end = {
          ...v
        }, b++;
      be(t.events, B + 1, 0, t.events.slice(R)), t.events.length = b;
    }
  }
  function y(w) {
    let A = n.length;
    for (; A-- > w; ) {
      const E = n[A];
      t.containerState = E[1], E[0].exit.call(t, e);
    }
    n.length = w;
  }
  function T() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function pu(e, t, n) {
  return G(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function tt(e) {
  if (e === null || Q(e) || Ue(e))
    return 1;
  if (zt(e))
    return 2;
}
function _t(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (t = l(t, n), r.push(l));
  }
  return t;
}
const vn = {
  name: "attention",
  resolveAll: mu,
  tokenize: gu
};
function mu(e, t) {
  let n = -1, r, i, l, o, a, s, u, d;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...e[r][1].end
          }, h = {
            ...e[n][1].start
          };
          br(c, -s), br(h, s), o = {
            type: s > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
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
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = ke(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = ke(u, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), u = ke(u, _t(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = ke(u, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (d = 2, u = ke(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : d = 0, be(e, r - 1, n - r + 3, u), n = r + u.length - d - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function gu(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = tt(r);
  let l;
  return o;
  function o(s) {
    return l = s, e.enter("attentionSequence"), a(s);
  }
  function a(s) {
    if (s === l)
      return e.consume(s), a;
    const u = e.exit("attentionSequence"), d = tt(s), c = !d || d === 2 && i || n.includes(s), h = !i || i === 2 && d || n.includes(r);
    return u._open = !!(l === 42 ? c : c && (i || !h)), u._close = !!(l === 42 ? h : h && (d || !c)), t(s);
  }
}
function br(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const xu = {
  name: "autolink",
  tokenize: yu
};
function yu(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(f) {
    return ue(f) ? (e.consume(f), o) : f === 64 ? n(f) : u(f);
  }
  function o(f) {
    return f === 43 || f === 45 || f === 46 || le(f) ? (r = 1, a(f)) : u(f);
  }
  function a(f) {
    return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || le(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
  }
  function s(f) {
    return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : f === null || f === 32 || f === 60 || $t(f) ? n(f) : (e.consume(f), s);
  }
  function u(f) {
    return f === 64 ? (e.consume(f), d) : au(f) ? (e.consume(f), u) : n(f);
  }
  function d(f) {
    return le(f) ? c(f) : n(f);
  }
  function c(f) {
    return f === 46 ? (e.consume(f), r = 0, d) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(f);
  }
  function h(f) {
    if ((f === 45 || le(f)) && r++ < 63) {
      const m = f === 45 ? h : c;
      return e.consume(f), m;
    }
    return n(f);
  }
}
const St = {
  partial: !0,
  tokenize: bu
};
function bu(e, t, n) {
  return r;
  function r(l) {
    return q(l) ? G(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || z(l) ? t(l) : n(l);
  }
}
const el = {
  continuation: {
    tokenize: wu
  },
  exit: Cu,
  name: "blockQuote",
  tokenize: ku
};
function ku(e, t, n) {
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
function wu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return q(o) ? G(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(el, t, n)(o);
  }
}
function Cu(e) {
  e.exit("blockQuote");
}
const tl = {
  name: "characterEscape",
  tokenize: vu
};
function vu(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return uu(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const nl = {
  name: "characterReference",
  tokenize: Su
};
function Su(e, t, n) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
  }
  function s(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, o = le, d(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = su, d) : (e.enter("characterReferenceValue"), l = 7, o = Cn, d(c));
  }
  function d(c) {
    if (c === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return o === le && !Vn(r.sliceSerialize(h)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(c) && i++ < l ? (e.consume(c), d) : n(c);
  }
}
const kr = {
  partial: !0,
  tokenize: Eu
}, wr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Tu
};
function Tu(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: E
  };
  let l = 0, o = 0, a;
  return s;
  function s(b) {
    return u(b);
  }
  function u(b) {
    const R = r.events[r.events.length - 1];
    return l = R && R[1].type === "linePrefix" ? R[2].sliceSerialize(R[1], !0).length : 0, a = b, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), d(b);
  }
  function d(b) {
    return b === a ? (o++, e.consume(b), d) : o < 3 ? n(b) : (e.exit("codeFencedFenceSequence"), q(b) ? G(e, c, "whitespace")(b) : c(b));
  }
  function c(b) {
    return b === null || z(b) ? (e.exit("codeFencedFence"), r.interrupt ? t(b) : e.check(kr, C, A)(b)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(b));
  }
  function h(b) {
    return b === null || z(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(b)) : q(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), G(e, f, "whitespace")(b)) : b === 96 && b === a ? n(b) : (e.consume(b), h);
  }
  function f(b) {
    return b === null || z(b) ? c(b) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), m(b));
  }
  function m(b) {
    return b === null || z(b) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(b)) : b === 96 && b === a ? n(b) : (e.consume(b), m);
  }
  function C(b) {
    return e.attempt(i, A, k)(b);
  }
  function k(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), y;
  }
  function y(b) {
    return l > 0 && q(b) ? G(e, T, "linePrefix", l + 1)(b) : T(b);
  }
  function T(b) {
    return b === null || z(b) ? e.check(kr, C, A)(b) : (e.enter("codeFlowValue"), w(b));
  }
  function w(b) {
    return b === null || z(b) ? (e.exit("codeFlowValue"), T(b)) : (e.consume(b), w);
  }
  function A(b) {
    return e.exit("codeFenced"), t(b);
  }
  function E(b, R, B) {
    let _ = 0;
    return v;
    function v(L) {
      return b.enter("lineEnding"), b.consume(L), b.exit("lineEnding"), F;
    }
    function F(L) {
      return b.enter("codeFencedFence"), q(L) ? G(b, M, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : M(L);
    }
    function M(L) {
      return L === a ? (b.enter("codeFencedFenceSequence"), V(L)) : B(L);
    }
    function V(L) {
      return L === a ? (_++, b.consume(L), V) : _ >= o ? (b.exit("codeFencedFenceSequence"), q(L) ? G(b, $, "whitespace")(L) : $(L)) : B(L);
    }
    function $(L) {
      return L === null || z(L) ? (b.exit("codeFencedFence"), R(L)) : B(L);
    }
  }
}
function Eu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Jt = {
  name: "codeIndented",
  tokenize: Au
}, Iu = {
  partial: !0,
  tokenize: Pu
};
function Au(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), G(e, l, "linePrefix", 5)(u);
  }
  function l(u) {
    const d = r.events[r.events.length - 1];
    return d && d[1].type === "linePrefix" && d[2].sliceSerialize(d[1], !0).length >= 4 ? o(u) : n(u);
  }
  function o(u) {
    return u === null ? s(u) : z(u) ? e.attempt(Iu, o, s)(u) : (e.enter("codeFlowValue"), a(u));
  }
  function a(u) {
    return u === null || z(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), a);
  }
  function s(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function Pu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : z(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : G(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : z(o) ? i(o) : n(o);
  }
}
const Lu = {
  name: "codeText",
  previous: Ru,
  resolve: Du,
  tokenize: Fu
};
function Du(e) {
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
function Ru(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Fu(e, t, n) {
  let r = 0, i, l;
  return o;
  function o(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), s(c));
  }
  function s(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (l = e.enter("codeTextSequence"), i = 0, d(c)) : z(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || z(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
  }
  function d(c) {
    return c === 96 ? (e.consume(c), i++, d) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (l.type = "codeTextData", u(c));
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
function rl(e) {
  const t = {};
  let n = -1, r, i, l, o, a, s, u;
  const d = new Mu(e);
  for (; ++n < d.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = d.get(n), n && r[1].type === "chunkFlow" && d.get(n - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, l = 0, l < s.length && s[l][1].type === "lineEndingBlank" && (l += 2), l < s.length && s[l][1].type === "content"))
      for (; ++l < s.length && s[l][1].type !== "content"; )
        s[l][1].type === "chunkText" && (s[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, $u(d, n)), n = t[n], u = !0);
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
  return be(e, 0, Number.POSITIVE_INFINITY, d.slice(0)), !u;
}
function $u(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, s = [], u = {};
  let d, c, h = -1, f = n, m = 0, C = 0;
  const k = [C];
  for (; f; ) {
    for (; e.get(++i)[1] !== f; )
      ;
    l.push(i), f._tokenizer || (d = r.sliceStream(f), f.next || d.push(null), c && o.defineSkip(f.start), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(d), f._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
  }
  for (f = n; ++h < a.length; )
    // Find a void token that includes a break.
    a[h][0] === "exit" && a[h - 1][0] === "enter" && a[h][1].type === a[h - 1][1].type && a[h][1].start.line !== a[h][1].end.line && (C = h + 1, k.push(C), f._tokenizer = void 0, f.previous = void 0, f = f.next);
  for (o.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : k.pop(), h = k.length; h--; ) {
    const y = a.slice(k[h], k[h + 1]), T = l.pop();
    s.push([T, T + y.length - 1]), e.splice(T, 2, y);
  }
  for (s.reverse(), h = -1; ++h < s.length; )
    u[m + s[h][0]] = m + s[h][1], m += s[h][1] - s[h][0] - 1;
  return u;
}
const ju = {
  resolve: Ou,
  tokenize: zu
}, Bu = {
  partial: !0,
  tokenize: _u
};
function Ou(e) {
  return rl(e), e;
}
function zu(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : z(a) ? e.check(Bu, o, l)(a) : (e.consume(a), i);
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
function _u(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), G(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || z(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function il(e, t, n, r, i, l, o, a, s) {
  const u = s || Number.POSITIVE_INFINITY;
  let d = 0;
  return c;
  function c(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), h) : y === null || y === 32 || y === 41 || $t(y) ? n(y) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), C(y));
  }
  function h(y) {
    return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), f(y));
  }
  function f(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), h(y)) : y === null || y === 60 || z(y) ? n(y) : (e.consume(y), y === 92 ? m : f);
  }
  function m(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), f) : f(y);
  }
  function C(y) {
    return !d && (y === null || y === 41 || Q(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(y)) : d < u && y === 40 ? (e.consume(y), d++, C) : y === 41 ? (e.consume(y), d--, C) : y === null || y === 32 || y === 40 || $t(y) ? n(y) : (e.consume(y), y === 92 ? k : C);
  }
  function k(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), C) : C(y);
  }
}
function ll(e, t, n, r, i, l) {
  const o = this;
  let a = 0, s;
  return u;
  function u(f) {
    return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(l), d;
  }
  function d(f) {
    return a > 999 || f === null || f === 91 || f === 93 && !s || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    f === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(f) : f === 93 ? (e.exit(l), e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : z(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), d) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === null || f === 91 || f === 93 || z(f) || a++ > 999 ? (e.exit("chunkString"), d(f)) : (e.consume(f), s || (s = !q(f)), f === 92 ? h : c);
  }
  function h(f) {
    return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
  }
}
function ol(e, t, n, r, i, l) {
  let o;
  return a;
  function a(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, s) : n(h);
  }
  function s(h) {
    return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(l), u(h));
  }
  function u(h) {
    return h === o ? (e.exit(l), s(o)) : h === null ? n(h) : z(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), G(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), d(h));
  }
  function d(h) {
    return h === o || h === null || z(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? c : d);
  }
  function c(h) {
    return h === o || h === 92 ? (e.consume(h), d) : d(h);
  }
}
function xt(e, t) {
  let n;
  return r;
  function r(i) {
    return z(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? G(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Vu = {
  name: "definition",
  tokenize: Hu
}, Nu = {
  partial: !0,
  tokenize: qu
};
function Hu(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(f) {
    return e.enter("definition"), o(f);
  }
  function o(f) {
    return ll.call(
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
    return i = Te(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : n(f);
  }
  function s(f) {
    return Q(f) ? xt(e, u)(f) : u(f);
  }
  function u(f) {
    return il(
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
    return e.attempt(Nu, c, c)(f);
  }
  function c(f) {
    return q(f) ? G(e, h, "whitespace")(f) : h(f);
  }
  function h(f) {
    return f === null || z(f) ? (e.exit("definition"), r.parser.defined.push(i), t(f)) : n(f);
  }
}
function qu(e, t, n) {
  return r;
  function r(a) {
    return Q(a) ? xt(e, i)(a) : n(a);
  }
  function i(a) {
    return ol(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return q(a) ? G(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || z(a) ? t(a) : n(a);
  }
}
const Uu = {
  name: "hardBreakEscape",
  tokenize: Wu
};
function Wu(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return z(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const Zu = {
  name: "headingAtx",
  resolve: Ku,
  tokenize: Gu
};
function Ku(e, t) {
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
function Gu(e, t, n) {
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
    return d === 35 ? (e.enter("atxHeadingSequence"), s(d)) : d === null || z(d) ? (e.exit("atxHeading"), t(d)) : q(d) ? G(e, a, "whitespace")(d) : (e.enter("atxHeadingText"), u(d));
  }
  function s(d) {
    return d === 35 ? (e.consume(d), s) : (e.exit("atxHeadingSequence"), a(d));
  }
  function u(d) {
    return d === null || d === 35 || Q(d) ? (e.exit("atxHeadingText"), a(d)) : (e.consume(d), u);
  }
}
const Xu = [
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
], Cr = ["pre", "script", "style", "textarea"], Yu = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: ec,
  tokenize: tc
}, Qu = {
  partial: !0,
  tokenize: rc
}, Ju = {
  partial: !0,
  tokenize: nc
};
function ec(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function tc(e, t, n) {
  const r = this;
  let i, l, o, a, s;
  return u;
  function u(x) {
    return d(x);
  }
  function d(x) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(x), c;
  }
  function c(x) {
    return x === 33 ? (e.consume(x), h) : x === 47 ? (e.consume(x), l = !0, C) : x === 63 ? (e.consume(x), i = 3, r.interrupt ? t : g) : ue(x) ? (e.consume(x), o = String.fromCharCode(x), k) : n(x);
  }
  function h(x) {
    return x === 45 ? (e.consume(x), i = 2, f) : x === 91 ? (e.consume(x), i = 5, a = 0, m) : ue(x) ? (e.consume(x), i = 4, r.interrupt ? t : g) : n(x);
  }
  function f(x) {
    return x === 45 ? (e.consume(x), r.interrupt ? t : g) : n(x);
  }
  function m(x) {
    const me = "CDATA[";
    return x === me.charCodeAt(a++) ? (e.consume(x), a === me.length ? r.interrupt ? t : M : m) : n(x);
  }
  function C(x) {
    return ue(x) ? (e.consume(x), o = String.fromCharCode(x), k) : n(x);
  }
  function k(x) {
    if (x === null || x === 47 || x === 62 || Q(x)) {
      const me = x === 47, Ce = o.toLowerCase();
      return !me && !l && Cr.includes(Ce) ? (i = 1, r.interrupt ? t(x) : M(x)) : Xu.includes(o.toLowerCase()) ? (i = 6, me ? (e.consume(x), y) : r.interrupt ? t(x) : M(x)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(x) : l ? T(x) : w(x));
    }
    return x === 45 || le(x) ? (e.consume(x), o += String.fromCharCode(x), k) : n(x);
  }
  function y(x) {
    return x === 62 ? (e.consume(x), r.interrupt ? t : M) : n(x);
  }
  function T(x) {
    return q(x) ? (e.consume(x), T) : v(x);
  }
  function w(x) {
    return x === 47 ? (e.consume(x), v) : x === 58 || x === 95 || ue(x) ? (e.consume(x), A) : q(x) ? (e.consume(x), w) : v(x);
  }
  function A(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || le(x) ? (e.consume(x), A) : E(x);
  }
  function E(x) {
    return x === 61 ? (e.consume(x), b) : q(x) ? (e.consume(x), E) : w(x);
  }
  function b(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? n(x) : x === 34 || x === 39 ? (e.consume(x), s = x, R) : q(x) ? (e.consume(x), b) : B(x);
  }
  function R(x) {
    return x === s ? (e.consume(x), s = null, _) : x === null || z(x) ? n(x) : (e.consume(x), R);
  }
  function B(x) {
    return x === null || x === 34 || x === 39 || x === 47 || x === 60 || x === 61 || x === 62 || x === 96 || Q(x) ? E(x) : (e.consume(x), B);
  }
  function _(x) {
    return x === 47 || x === 62 || q(x) ? w(x) : n(x);
  }
  function v(x) {
    return x === 62 ? (e.consume(x), F) : n(x);
  }
  function F(x) {
    return x === null || z(x) ? M(x) : q(x) ? (e.consume(x), F) : n(x);
  }
  function M(x) {
    return x === 45 && i === 2 ? (e.consume(x), U) : x === 60 && i === 1 ? (e.consume(x), te) : x === 62 && i === 4 ? (e.consume(x), pe) : x === 63 && i === 3 ? (e.consume(x), g) : x === 93 && i === 5 ? (e.consume(x), he) : z(x) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Qu, we, V)(x)) : x === null || z(x) ? (e.exit("htmlFlowData"), V(x)) : (e.consume(x), M);
  }
  function V(x) {
    return e.check(Ju, $, we)(x);
  }
  function $(x) {
    return e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), L;
  }
  function L(x) {
    return x === null || z(x) ? V(x) : (e.enter("htmlFlowData"), M(x));
  }
  function U(x) {
    return x === 45 ? (e.consume(x), g) : M(x);
  }
  function te(x) {
    return x === 47 ? (e.consume(x), o = "", ae) : M(x);
  }
  function ae(x) {
    if (x === 62) {
      const me = o.toLowerCase();
      return Cr.includes(me) ? (e.consume(x), pe) : M(x);
    }
    return ue(x) && o.length < 8 ? (e.consume(x), o += String.fromCharCode(x), ae) : M(x);
  }
  function he(x) {
    return x === 93 ? (e.consume(x), g) : M(x);
  }
  function g(x) {
    return x === 62 ? (e.consume(x), pe) : x === 45 && i === 2 ? (e.consume(x), g) : M(x);
  }
  function pe(x) {
    return x === null || z(x) ? (e.exit("htmlFlowData"), we(x)) : (e.consume(x), pe);
  }
  function we(x) {
    return e.exit("htmlFlow"), t(x);
  }
}
function nc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return z(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function rc(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(St, t, n);
  }
}
const ic = {
  name: "htmlText",
  tokenize: lc
};
function lc(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(g) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(g), s;
  }
  function s(g) {
    return g === 33 ? (e.consume(g), u) : g === 47 ? (e.consume(g), E) : g === 63 ? (e.consume(g), w) : ue(g) ? (e.consume(g), B) : n(g);
  }
  function u(g) {
    return g === 45 ? (e.consume(g), d) : g === 91 ? (e.consume(g), l = 0, m) : ue(g) ? (e.consume(g), T) : n(g);
  }
  function d(g) {
    return g === 45 ? (e.consume(g), f) : n(g);
  }
  function c(g) {
    return g === null ? n(g) : g === 45 ? (e.consume(g), h) : z(g) ? (o = c, te(g)) : (e.consume(g), c);
  }
  function h(g) {
    return g === 45 ? (e.consume(g), f) : c(g);
  }
  function f(g) {
    return g === 62 ? U(g) : g === 45 ? h(g) : c(g);
  }
  function m(g) {
    const pe = "CDATA[";
    return g === pe.charCodeAt(l++) ? (e.consume(g), l === pe.length ? C : m) : n(g);
  }
  function C(g) {
    return g === null ? n(g) : g === 93 ? (e.consume(g), k) : z(g) ? (o = C, te(g)) : (e.consume(g), C);
  }
  function k(g) {
    return g === 93 ? (e.consume(g), y) : C(g);
  }
  function y(g) {
    return g === 62 ? U(g) : g === 93 ? (e.consume(g), y) : C(g);
  }
  function T(g) {
    return g === null || g === 62 ? U(g) : z(g) ? (o = T, te(g)) : (e.consume(g), T);
  }
  function w(g) {
    return g === null ? n(g) : g === 63 ? (e.consume(g), A) : z(g) ? (o = w, te(g)) : (e.consume(g), w);
  }
  function A(g) {
    return g === 62 ? U(g) : w(g);
  }
  function E(g) {
    return ue(g) ? (e.consume(g), b) : n(g);
  }
  function b(g) {
    return g === 45 || le(g) ? (e.consume(g), b) : R(g);
  }
  function R(g) {
    return z(g) ? (o = R, te(g)) : q(g) ? (e.consume(g), R) : U(g);
  }
  function B(g) {
    return g === 45 || le(g) ? (e.consume(g), B) : g === 47 || g === 62 || Q(g) ? _(g) : n(g);
  }
  function _(g) {
    return g === 47 ? (e.consume(g), U) : g === 58 || g === 95 || ue(g) ? (e.consume(g), v) : z(g) ? (o = _, te(g)) : q(g) ? (e.consume(g), _) : U(g);
  }
  function v(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || le(g) ? (e.consume(g), v) : F(g);
  }
  function F(g) {
    return g === 61 ? (e.consume(g), M) : z(g) ? (o = F, te(g)) : q(g) ? (e.consume(g), F) : _(g);
  }
  function M(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), i = g, V) : z(g) ? (o = M, te(g)) : q(g) ? (e.consume(g), M) : (e.consume(g), $);
  }
  function V(g) {
    return g === i ? (e.consume(g), i = void 0, L) : g === null ? n(g) : z(g) ? (o = V, te(g)) : (e.consume(g), V);
  }
  function $(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || Q(g) ? _(g) : (e.consume(g), $);
  }
  function L(g) {
    return g === 47 || g === 62 || Q(g) ? _(g) : n(g);
  }
  function U(g) {
    return g === 62 ? (e.consume(g), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(g);
  }
  function te(g) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), ae;
  }
  function ae(g) {
    return q(g) ? G(e, he, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : he(g);
  }
  function he(g) {
    return e.enter("htmlTextData"), o(g);
  }
}
const Nn = {
  name: "labelEnd",
  resolveAll: uc,
  resolveTo: cc,
  tokenize: dc
}, oc = {
  tokenize: fc
}, ac = {
  tokenize: hc
}, sc = {
  tokenize: pc
};
function uc(e) {
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
function cc(e, t) {
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
  }, d = {
    type: "labelText",
    start: {
      ...e[l + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return a = [["enter", s, t], ["enter", u, t]], a = ke(a, e.slice(l + 1, l + r + 3)), a = ke(a, [["enter", d, t]]), a = ke(a, _t(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), a = ke(a, [["exit", d, t], e[o - 2], e[o - 1], ["exit", u, t]]), a = ke(a, e.slice(o + 1)), a = ke(a, [["exit", s, t]]), be(e, l, e.length, a), e;
}
function dc(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(h) {
    return l ? l._inactive ? c(h) : (o = r.parser.defined.includes(Te(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(h);
  }
  function s(h) {
    return h === 40 ? e.attempt(oc, d, o ? d : c)(h) : h === 91 ? e.attempt(ac, d, o ? u : c)(h) : o ? d(h) : c(h);
  }
  function u(h) {
    return e.attempt(sc, d, c)(h);
  }
  function d(h) {
    return t(h);
  }
  function c(h) {
    return l._balanced = !0, n(h);
  }
}
function fc(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Q(c) ? xt(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41 ? d(c) : il(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function o(c) {
    return Q(c) ? xt(e, s)(c) : d(c);
  }
  function a(c) {
    return n(c);
  }
  function s(c) {
    return c === 34 || c === 39 || c === 40 ? ol(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : d(c);
  }
  function u(c) {
    return Q(c) ? xt(e, d)(c) : d(c);
  }
  function d(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function hc(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ll.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(Te(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function pc(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const mc = {
  name: "labelStartImage",
  resolveAll: Nn.resolveAll,
  tokenize: gc
};
function gc(e, t, n) {
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
const xc = {
  name: "labelStartLink",
  resolveAll: Nn.resolveAll,
  tokenize: yc
};
function yc(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const en = {
  name: "lineEnding",
  tokenize: bc
};
function bc(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), G(e, t, "linePrefix");
  }
}
const Rt = {
  name: "thematicBreak",
  tokenize: kc
};
function kc(e, t, n) {
  let r = 0, i;
  return l;
  function l(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, a(u);
  }
  function a(u) {
    return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || z(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), q(u) ? G(e, a, "whitespace")(u) : a(u));
  }
}
const ce = {
  continuation: {
    tokenize: Sc
  },
  exit: Ec,
  name: "list",
  tokenize: vc
}, wc = {
  partial: !0,
  tokenize: Ic
}, Cc = {
  partial: !0,
  tokenize: Tc
};
function vc(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(f) {
    const m = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
    if (m === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Cn(f)) {
      if (r.containerState.type || (r.containerState.type = m, e.enter(m, {
        _container: !0
      })), m === "listUnordered")
        return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(Rt, n, u)(f) : u(f);
      if (!r.interrupt || f === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
    }
    return n(f);
  }
  function s(f) {
    return Cn(f) && ++o < 10 ? (e.consume(f), s) : (!r.interrupt || o < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : n(f);
  }
  function u(f) {
    return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(
      St,
      // Can’t be empty when interrupting.
      r.interrupt ? n : d,
      e.attempt(wc, h, c)
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
function Sc(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(St, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, G(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Cc, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, G(e, e.attempt(ce, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Tc(e, t, n) {
  const r = this;
  return G(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function Ec(e) {
  e.exit(this.containerState.type);
}
function Ic(e, t, n) {
  const r = this;
  return G(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !q(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const vr = {
  name: "setextUnderline",
  resolveTo: Ac,
  tokenize: Pc
};
function Ac(e, t) {
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
function Pc(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(u) {
    let d = r.events.length, c;
    for (; d--; )
      if (r.events[d][1].type !== "lineEnding" && r.events[d][1].type !== "linePrefix" && r.events[d][1].type !== "content") {
        c = r.events[d][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, o(u)) : n(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), a(u);
  }
  function a(u) {
    return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), q(u) ? G(e, s, "lineSuffix")(u) : s(u));
  }
  function s(u) {
    return u === null || z(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const Lc = {
  tokenize: Dc
};
function Dc(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    St,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, G(e, e.attempt(this.parser.constructs.flow, i, e.attempt(ju, i)), "linePrefix"))
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
const Rc = {
  resolveAll: sl()
}, Fc = al("string"), Mc = al("text");
function al(e) {
  return {
    resolveAll: sl(e === "text" ? $c : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], l = n.attempt(i, o, a);
    return o;
    function o(d) {
      return u(d) ? l(d) : a(d);
    }
    function a(d) {
      if (d === null) {
        n.consume(d);
        return;
      }
      return n.enter("data"), n.consume(d), s;
    }
    function s(d) {
      return u(d) ? (n.exit("data"), l(d)) : (n.consume(d), s);
    }
    function u(d) {
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
function sl(e) {
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
const jc = {
  42: ce,
  43: ce,
  45: ce,
  48: ce,
  49: ce,
  50: ce,
  51: ce,
  52: ce,
  53: ce,
  54: ce,
  55: ce,
  56: ce,
  57: ce,
  62: el
}, Bc = {
  91: Vu
}, Oc = {
  [-2]: Jt,
  [-1]: Jt,
  32: Jt
}, zc = {
  35: Zu,
  42: Rt,
  45: [vr, Rt],
  60: Yu,
  61: vr,
  95: Rt,
  96: wr,
  126: wr
}, _c = {
  38: nl,
  92: tl
}, Vc = {
  [-5]: en,
  [-4]: en,
  [-3]: en,
  33: mc,
  38: nl,
  42: vn,
  60: [xu, ic],
  91: xc,
  92: [Uu, tl],
  93: Nn,
  95: vn,
  96: Lu
}, Nc = {
  null: [vn, Rc]
}, Hc = {
  null: [42, 95]
}, qc = {
  null: []
}, Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Hc,
  contentInitial: Bc,
  disable: qc,
  document: jc,
  flow: zc,
  flowInitial: Oc,
  insideSpan: Nc,
  string: _c,
  text: Vc
}, Symbol.toStringTag, { value: "Module" }));
function Wc(e, t, n) {
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
    attempt: R(E),
    check: R(b),
    consume: T,
    enter: w,
    exit: A,
    interrupt: R(b, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: C,
    events: [],
    now: m,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: f,
    write: c
  };
  let d = t.tokenize.call(u, s);
  return t.resolveAll && l.push(t), u;
  function c(F) {
    return o = ke(o, F), k(), o[o.length - 1] !== null ? [] : (B(t, 0), u.events = _t(l, u.events, u), u.events);
  }
  function h(F, M) {
    return Kc(f(F), M);
  }
  function f(F) {
    return Zc(o, F);
  }
  function m() {
    const {
      _bufferIndex: F,
      _index: M,
      line: V,
      column: $,
      offset: L
    } = r;
    return {
      _bufferIndex: F,
      _index: M,
      line: V,
      column: $,
      offset: L
    };
  }
  function C(F) {
    i[F.line] = F.column, v();
  }
  function k() {
    let F;
    for (; r._index < o.length; ) {
      const M = o[r._index];
      if (typeof M == "string")
        for (F = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === F && r._bufferIndex < M.length; )
          y(M.charCodeAt(r._bufferIndex));
      else
        y(M);
    }
  }
  function y(F) {
    d = d(F);
  }
  function T(F) {
    z(F) ? (r.line++, r.column = 1, r.offset += F === -3 ? 2 : 1, v()) : F !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = F;
  }
  function w(F, M) {
    const V = M || {};
    return V.type = F, V.start = m(), u.events.push(["enter", V, u]), a.push(V), V;
  }
  function A(F) {
    const M = a.pop();
    return M.end = m(), u.events.push(["exit", M, u]), M;
  }
  function E(F, M) {
    B(F, M.from);
  }
  function b(F, M) {
    M.restore();
  }
  function R(F, M) {
    return V;
    function V($, L, U) {
      let te, ae, he, g;
      return Array.isArray($) ? (
        /* c8 ignore next 1 */
        we($)
      ) : "tokenize" in $ ? (
        // Looks like a construct.
        we([
          /** @type {Construct} */
          $
        ])
      ) : pe($);
      function pe(re) {
        return Le;
        function Le(Ee) {
          const $e = Ee !== null && re[Ee], je = Ee !== null && re.null, Ze = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray($e) ? $e : $e ? [$e] : [],
            ...Array.isArray(je) ? je : je ? [je] : []
          ];
          return we(Ze)(Ee);
        }
      }
      function we(re) {
        return te = re, ae = 0, re.length === 0 ? U : x(re[ae]);
      }
      function x(re) {
        return Le;
        function Le(Ee) {
          return g = _(), he = re, re.partial || (u.currentConstruct = re), re.name && u.parser.constructs.disable.null.includes(re.name) ? Ce() : re.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            M ? Object.assign(Object.create(u), M) : u,
            s,
            me,
            Ce
          )(Ee);
        }
      }
      function me(re) {
        return F(he, g), L;
      }
      function Ce(re) {
        return g.restore(), ++ae < te.length ? x(te[ae]) : U;
      }
    }
  }
  function B(F, M) {
    F.resolveAll && !l.includes(F) && l.push(F), F.resolve && be(u.events, M, u.events.length - M, F.resolve(u.events.slice(M), u)), F.resolveTo && (u.events = F.resolveTo(u.events, u));
  }
  function _() {
    const F = m(), M = u.previous, V = u.currentConstruct, $ = u.events.length, L = Array.from(a);
    return {
      from: $,
      restore: U
    };
    function U() {
      r = F, u.previous = M, u.currentConstruct = V, u.events.length = $, a = L, v();
    }
  }
  function v() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Zc(e, t) {
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
function Kc(e, t) {
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
function Gc(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Qi([Uc, ...(e || {}).extensions || []])
    ),
    content: i(cu),
    defined: [],
    document: i(fu),
    flow: i(Lc),
    lazy: {},
    string: i(Fc),
    text: i(Mc)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return Wc(r, l, a);
    }
  }
}
function Xc(e) {
  for (; !rl(e); )
    ;
  return e;
}
const Sr = /[\0\t\n\r]/g;
function Yc() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const s = [];
    let u, d, c, h, f;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), c = 0, t = "", n && (l.charCodeAt(0) === 65279 && c++, n = void 0); c < l.length; ) {
      if (Sr.lastIndex = c, u = Sr.exec(l), h = u && u.index !== void 0 ? u.index : l.length, f = l.charCodeAt(h), !u) {
        t = l.slice(c);
        break;
      }
      if (f === 10 && c === h && r)
        s.push(-3), r = void 0;
      else
        switch (r && (s.push(-5), r = void 0), c < h && (s.push(l.slice(c, h)), e += h - c), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (d = Math.ceil(e / 4) * 4, s.push(-2); e++ < d; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = h + 1;
    }
    return a && (r && s.push(-5), t && s.push(t), s.push(null)), s;
  }
}
const Qc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Jc(e) {
  return e.replace(Qc, ed);
}
function ed(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return Ji(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Vn(n) || e;
}
const ul = {}.hasOwnProperty;
function td(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), nd(n)(Xc(Gc(n).document().write(Yc()(e, t, !0))));
}
function nd(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(st),
      autolinkProtocol: _,
      autolinkEmail: _,
      atxHeading: l(lt),
      blockQuote: l(je),
      characterEscape: _,
      characterReference: _,
      codeFenced: l(Ze),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(Ze, o),
      codeText: l(qt, o),
      codeTextData: _,
      data: _,
      codeFlowValue: _,
      definition: l(Ut),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(Wt),
      hardBreakEscape: l(ot),
      hardBreakTrailing: l(ot),
      htmlFlow: l(at, o),
      htmlFlowData: _,
      htmlText: l(at, o),
      htmlTextData: _,
      image: l(It),
      label: o,
      link: l(st),
      listItem: l(Z),
      listItemValue: h,
      listOrdered: l(j, c),
      listUnordered: l(j),
      paragraph: l(N),
      reference: x,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(lt),
      strong: l(K),
      thematicBreak: l(ie)
    },
    exit: {
      atxHeading: s(),
      atxHeadingSequence: E,
      autolink: s(),
      autolinkEmail: $e,
      autolinkProtocol: Ee,
      blockQuote: s(),
      characterEscapeValue: v,
      characterReferenceMarkerHexadecimal: Ce,
      characterReferenceMarkerNumeric: Ce,
      characterReferenceValue: re,
      characterReference: Le,
      codeFenced: s(k),
      codeFencedFence: C,
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: m,
      codeFlowValue: v,
      codeIndented: s(y),
      codeText: s(L),
      codeTextData: v,
      data: v,
      definition: s(),
      definitionDestinationString: A,
      definitionLabelString: T,
      definitionTitleString: w,
      emphasis: s(),
      hardBreakEscape: s(M),
      hardBreakTrailing: s(M),
      htmlFlow: s(V),
      htmlFlowData: v,
      htmlText: s($),
      htmlTextData: v,
      image: s(te),
      label: he,
      labelText: ae,
      lineEnding: F,
      link: s(U),
      listItem: s(),
      listOrdered: s(),
      listUnordered: s(),
      paragraph: s(),
      referenceString: me,
      resourceDestinationString: g,
      resourceTitleString: pe,
      resource: we,
      setextHeading: s(B),
      setextHeadingLineSequence: R,
      setextHeadingText: b,
      strong: s(),
      thematicBreak: s()
    }
  };
  cl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(S) {
    let P = {
      type: "root",
      children: []
    };
    const O = {
      stack: [P],
      tokenStack: [],
      config: t,
      enter: a,
      exit: u,
      buffer: o,
      resume: d,
      data: n
    }, W = [];
    let Y = -1;
    for (; ++Y < S.length; )
      if (S[Y][1].type === "listOrdered" || S[Y][1].type === "listUnordered")
        if (S[Y][0] === "enter")
          W.push(Y);
        else {
          const ve = W.pop();
          Y = i(S, ve, Y);
        }
    for (Y = -1; ++Y < S.length; ) {
      const ve = t[S[Y][0]];
      ul.call(ve, S[Y][1].type) && ve[S[Y][1].type].call(Object.assign({
        sliceSerialize: S[Y][2].sliceSerialize
      }, O), S[Y][1]);
    }
    if (O.tokenStack.length > 0) {
      const ve = O.tokenStack[O.tokenStack.length - 1];
      (ve[1] || Tr).call(O, void 0, ve[0]);
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
  function i(S, P, O) {
    let W = P - 1, Y = -1, ve = !1, Ve, De, ut, ct;
    for (; ++W <= O; ) {
      const ge = S[W];
      switch (ge[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ge[0] === "enter" ? Y++ : Y--, ct = void 0;
          break;
        }
        case "lineEndingBlank": {
          ge[0] === "enter" && (Ve && !ct && !Y && !ut && (ut = W), ct = void 0);
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
      if (!Y && ge[0] === "enter" && ge[1].type === "listItemPrefix" || Y === -1 && ge[0] === "exit" && (ge[1].type === "listUnordered" || ge[1].type === "listOrdered")) {
        if (Ve) {
          let Ke = W;
          for (De = void 0; Ke--; ) {
            const Re = S[Ke];
            if (Re[1].type === "lineEnding" || Re[1].type === "lineEndingBlank") {
              if (Re[0] === "exit") continue;
              De && (S[De][1].type = "lineEndingBlank", ve = !0), Re[1].type = "lineEnding", De = Ke;
            } else if (!(Re[1].type === "linePrefix" || Re[1].type === "blockQuotePrefix" || Re[1].type === "blockQuotePrefixWhitespace" || Re[1].type === "blockQuoteMarker" || Re[1].type === "listItemIndent")) break;
          }
          ut && (!De || ut < De) && (Ve._spread = !0), Ve.end = Object.assign({}, De ? S[De][1].start : ge[1].end), S.splice(De || W, 0, ["exit", Ve, ge[2]]), W++, O++;
        }
        if (ge[1].type === "listItemPrefix") {
          const Ke = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ge[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Ve = Ke, S.splice(W, 0, ["enter", Ke, ge[2]]), W++, O++, ut = void 0, ct = !0;
        }
      }
    }
    return S[P][1]._spread = ve, O;
  }
  function l(S, P) {
    return O;
    function O(W) {
      a.call(this, S(W), W), P && P.call(this, W);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(S, P, O) {
    this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([P, O || void 0]), S.position = {
      start: Be(P.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function s(S) {
    return P;
    function P(O) {
      S && S.call(this, O), u.call(this, O);
    }
  }
  function u(S, P) {
    const O = this.stack.pop(), W = this.tokenStack.pop();
    if (W)
      W[0].type !== S.type && (P ? P.call(this, S, W[0]) : (W[1] || Tr).call(this, S, W[0]));
    else throw new Error("Cannot close `" + S.type + "` (" + gt({
      start: S.start,
      end: S.end
    }) + "): it’s not open");
    O.position.end = Be(S.end);
  }
  function d() {
    return _n(this.stack.pop());
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
  function C() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function k() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function y() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function T(S) {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.label = P, O.identifier = Te(this.sliceSerialize(S)).toLowerCase();
  }
  function w() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.title = S;
  }
  function A() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.url = S;
  }
  function E(S) {
    const P = this.stack[this.stack.length - 1];
    if (!P.depth) {
      const O = this.sliceSerialize(S).length;
      P.depth = O;
    }
  }
  function b() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function R(S) {
    const P = this.stack[this.stack.length - 1];
    P.depth = this.sliceSerialize(S).codePointAt(0) === 61 ? 1 : 2;
  }
  function B() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function _(S) {
    const O = this.stack[this.stack.length - 1].children;
    let W = O[O.length - 1];
    (!W || W.type !== "text") && (W = se(), W.position = {
      start: Be(S.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, O.push(W)), this.stack.push(W);
  }
  function v(S) {
    const P = this.stack.pop();
    P.value += this.sliceSerialize(S), P.position.end = Be(S.end);
  }
  function F(S) {
    const P = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const O = P.children[P.children.length - 1];
      O.position.end = Be(S.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(P.type) && (_.call(this, S), v.call(this, S));
  }
  function M() {
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
  function L() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.value = S;
  }
  function U() {
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
  function ae(S) {
    const P = this.sliceSerialize(S), O = this.stack[this.stack.length - 2];
    O.label = Jc(P), O.identifier = Te(P).toLowerCase();
  }
  function he() {
    const S = this.stack[this.stack.length - 1], P = this.resume(), O = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, O.type === "link") {
      const W = S.children;
      O.children = W;
    } else
      O.alt = P;
  }
  function g() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.url = S;
  }
  function pe() {
    const S = this.resume(), P = this.stack[this.stack.length - 1];
    P.title = S;
  }
  function we() {
    this.data.inReference = void 0;
  }
  function x() {
    this.data.referenceType = "collapsed";
  }
  function me(S) {
    const P = this.resume(), O = this.stack[this.stack.length - 1];
    O.label = P, O.identifier = Te(this.sliceSerialize(S)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ce(S) {
    this.data.characterReferenceType = S.type;
  }
  function re(S) {
    const P = this.sliceSerialize(S), O = this.data.characterReferenceType;
    let W;
    O ? (W = Ji(P, O === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : W = Vn(P);
    const Y = this.stack[this.stack.length - 1];
    Y.value += W;
  }
  function Le(S) {
    const P = this.stack.pop();
    P.position.end = Be(S.end);
  }
  function Ee(S) {
    v.call(this, S);
    const P = this.stack[this.stack.length - 1];
    P.url = this.sliceSerialize(S);
  }
  function $e(S) {
    v.call(this, S);
    const P = this.stack[this.stack.length - 1];
    P.url = "mailto:" + this.sliceSerialize(S);
  }
  function je() {
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
  function qt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ut() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Wt() {
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
  function se() {
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
function cl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? cl(e, r) : rd(e, r);
  }
}
function rd(e, t) {
  let n;
  for (n in t)
    if (ul.call(t, n))
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
function Tr(e, t) {
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
function id(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return td(r, {
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
function ld(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function od(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function ad(e, t) {
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
function sd(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ud(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function cd(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = it(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
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
function dd(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function fd(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function dl(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function hd(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return dl(e, t);
  const i = { src: it(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function pd(e, t) {
  const n = { src: it(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function md(e, t) {
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
function gd(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return dl(e, t);
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
function xd(e, t) {
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
function yd(e, t, n) {
  const r = e.all(t), i = n ? bd(n) : fl(t), l = {}, o = [];
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
  const s = r[r.length - 1];
  s && (i || s.type !== "element" || s.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(t, u), e.applyData(t, u);
}
function bd(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = fl(n[r]);
  }
  return t;
}
function fl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function kd(e, t) {
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
function wd(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Cd(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function vd(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Sd(e, t) {
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
    }, a = jn(t.children[1]), s = qi(t.children[t.children.length - 1]);
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
function Td(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let s = -1;
  const u = [];
  for (; ++s < a; ) {
    const c = t.children[s], h = {}, f = o ? o[s] : void 0;
    f && (h.align = f);
    let m = { type: "element", tagName: l, properties: h, children: [] };
    c && (m.children = e.all(c), e.patch(c, m), m = e.applyData(c, m)), u.push(m);
  }
  const d = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, d), e.applyData(t, d);
}
function Ed(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Er = 9, Ir = 32;
function Id(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      Ar(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(Ar(t.slice(i), i > 0, !1)), l.join("");
}
function Ar(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === Er || l === Ir; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === Er || l === Ir; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Ad(e, t) {
  const n = { type: "text", value: Id(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Pd(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Ld = {
  blockquote: ld,
  break: od,
  code: ad,
  delete: sd,
  emphasis: ud,
  footnoteReference: cd,
  heading: dd,
  html: fd,
  imageReference: hd,
  image: pd,
  inlineCode: md,
  linkReference: gd,
  link: xd,
  listItem: yd,
  list: kd,
  paragraph: wd,
  // @ts-expect-error: root is different, but hard to type.
  root: Cd,
  strong: vd,
  table: Sd,
  tableCell: Ed,
  tableRow: Td,
  text: Ad,
  thematicBreak: Pd,
  toml: At,
  yaml: At,
  definition: At,
  footnoteDefinition: At
};
function At() {
}
const hl = -1, Vt = 0, yt = 1, jt = 2, Hn = 3, qn = 4, Un = 5, Wn = 6, pl = 7, ml = 8, Pr = typeof self == "object" ? self : globalThis, Dd = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case Vt:
      case hl:
        return n(o, i);
      case yt: {
        const a = n([], i);
        for (const s of o)
          a.push(r(s));
        return a;
      }
      case jt: {
        const a = n({}, i);
        for (const [s, u] of o)
          a[r(s)] = r(u);
        return a;
      }
      case Hn:
        return n(new Date(o), i);
      case qn: {
        const { source: a, flags: s } = o;
        return n(new RegExp(a, s), i);
      }
      case Un: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [s, u] of o)
          a.set(r(s), r(u));
        return a;
      }
      case Wn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const s of o)
          a.add(r(s));
        return a;
      }
      case pl: {
        const { name: a, message: s } = o;
        return n(new Pr[a](s), i);
      }
      case ml:
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
    return n(new Pr[l](o), i);
  };
  return r;
}, Lr = (e) => Dd(/* @__PURE__ */ new Map(), e)(0), Xe = "", { toString: Rd } = {}, { keys: Fd } = Object, mt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Vt, t];
  const n = Rd.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [yt, Xe];
    case "Object":
      return [jt, Xe];
    case "Date":
      return [Hn, Xe];
    case "RegExp":
      return [qn, Xe];
    case "Map":
      return [Un, Xe];
    case "Set":
      return [Wn, Xe];
    case "DataView":
      return [yt, n];
  }
  return n.includes("Array") ? [yt, n] : n.includes("Error") ? [pl, n] : [jt, n];
}, Pt = ([e, t]) => e === Vt && (t === "function" || t === "symbol"), Md = (e, t, n, r) => {
  const i = (o, a) => {
    const s = r.push(o) - 1;
    return n.set(a, s), s;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, s] = mt(o);
    switch (a) {
      case Vt: {
        let d = o;
        switch (s) {
          case "bigint":
            a = ml, d = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + s);
            d = null;
            break;
          case "undefined":
            return i([hl], o);
        }
        return i([a, d], o);
      }
      case yt: {
        if (s) {
          let h = o;
          return s === "DataView" ? h = new Uint8Array(o.buffer) : s === "ArrayBuffer" && (h = new Uint8Array(o)), i([s, [...h]], o);
        }
        const d = [], c = i([a, d], o);
        for (const h of o)
          d.push(l(h));
        return c;
      }
      case jt: {
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
        const d = [], c = i([a, d], o);
        for (const h of Fd(o))
          (e || !Pt(mt(o[h]))) && d.push([l(h), l(o[h])]);
        return c;
      }
      case Hn:
        return i([a, o.toISOString()], o);
      case qn: {
        const { source: d, flags: c } = o;
        return i([a, { source: d, flags: c }], o);
      }
      case Un: {
        const d = [], c = i([a, d], o);
        for (const [h, f] of o)
          (e || !(Pt(mt(h)) || Pt(mt(f)))) && d.push([l(h), l(f)]);
        return c;
      }
      case Wn: {
        const d = [], c = i([a, d], o);
        for (const h of o)
          (e || !Pt(mt(h))) && d.push(l(h));
        return c;
      }
    }
    const { message: u } = o;
    return i([a, { name: s, message: u }], o);
  };
  return l;
}, Dr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Md(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, wt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Lr(Dr(e, t)) : structuredClone(e)
) : (e, t) => Lr(Dr(e, t));
function $d(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function jd(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Bd(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || $d, r = e.options.footnoteBackLabel || jd, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let s = -1;
  for (; ++s < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[s]
    );
    if (!u)
      continue;
    const d = e.all(u), c = String(u.identifier).toUpperCase(), h = it(c.toLowerCase());
    let f = 0;
    const m = [], C = e.footnoteCounts.get(c);
    for (; C !== void 0 && ++f <= C; ) {
      m.length > 0 && m.push({ type: "text", value: " " });
      let T = typeof n == "string" ? n : n(s, f);
      typeof T == "string" && (T = { type: "text", value: T }), m.push({
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
    const k = d[d.length - 1];
    if (k && k.type === "element" && k.tagName === "p") {
      const T = k.children[k.children.length - 1];
      T && T.type === "text" ? T.value += " " : k.children.push({ type: "text", value: " " }), k.children.push(...m);
    } else
      d.push(...m);
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(d, !0)
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
const Nt = (
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
      return Vd;
    if (typeof e == "function")
      return Ht(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Od(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        zd(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return _d(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Od(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Nt(e[n]);
  return Ht(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function zd(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ht(n);
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
function _d(e) {
  return Ht(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ht(e) {
  return t;
  function t(n, r, i) {
    return !!(Nd(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Vd() {
  return !0;
}
function Nd(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const gl = [], Hd = !0, Sn = !1, qd = "skip";
function xl(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = Nt(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(s, u, d) {
    const c = (
      /** @type {Record<string, unknown>} */
      s && typeof s == "object" ? s : {}
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
        value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let f = gl, m, C, k;
      if ((!t || l(s, u, d[d.length - 1] || void 0)) && (f = Ud(n(s, d)), f[0] === Sn))
        return f;
      if ("children" in s && s.children) {
        const y = (
          /** @type {UnistParent} */
          s
        );
        if (y.children && f[0] !== qd)
          for (C = (r ? y.children.length : -1) + o, k = d.concat(y); C > -1 && C < y.children.length; ) {
            const T = y.children[C];
            if (m = a(T, C, k)(), m[0] === Sn)
              return m;
            C = typeof m[1] == "number" ? m[1] : C + o;
          }
      }
      return f;
    }
  }
}
function Ud(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Hd, e] : e == null ? gl : [e];
}
function Zn(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), xl(e, l, a, i);
  function a(s, u) {
    const d = u[u.length - 1], c = d ? d.children.indexOf(s) : void 0;
    return o(s, c, d);
  }
}
const Tn = {}.hasOwnProperty, Wd = {};
function Zd(e, t) {
  const n = t || Wd, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Ld, ...n.handlers }, a = {
    all: u,
    applyData: Gd,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: s,
    options: n,
    patch: Kd,
    wrap: Yd
  };
  return Zn(e, function(d) {
    if (d.type === "definition" || d.type === "footnoteDefinition") {
      const c = d.type === "definition" ? r : i, h = String(d.identifier).toUpperCase();
      c.has(h) || c.set(h, d);
    }
  }), a;
  function s(d, c) {
    const h = d.type, f = a.handlers[h];
    if (Tn.call(a.handlers, h) && f)
      return f(a, d, c);
    if (a.options.passThrough && a.options.passThrough.includes(h)) {
      if ("children" in d) {
        const { children: C, ...k } = d, y = wt(k);
        return y.children = a.all(d), y;
      }
      return wt(d);
    }
    return (a.options.unknownHandler || Xd)(a, d, c);
  }
  function u(d) {
    const c = [];
    if ("children" in d) {
      const h = d.children;
      let f = -1;
      for (; ++f < h.length; ) {
        const m = a.one(h[f], d);
        if (m) {
          if (f && h[f - 1].type === "break" && (!Array.isArray(m) && m.type === "text" && (m.value = Rr(m.value)), !Array.isArray(m) && m.type === "element")) {
            const C = m.children[0];
            C && C.type === "text" && (C.value = Rr(C.value));
          }
          Array.isArray(m) ? c.push(...m) : c.push(m);
        }
      }
    }
    return c;
  }
}
function Kd(e, t) {
  e.position && (t.position = Wi(e));
}
function Gd(e, t) {
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
function Xd(e, t) {
  const n = t.data || {}, r = "value" in t && !(Tn.call(n, "hProperties") || Tn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Yd(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Rr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Fr(e, t) {
  const n = Zd(e, t), r = n.one(e, void 0), i = Bd(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function Qd(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Fr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Fr(n, { file: r, ...e || t })
    );
  };
}
function Mr(e) {
  if (e)
    throw e;
}
var tn, $r;
function Jd() {
  if ($r) return tn;
  $r = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(u) {
    return typeof Array.isArray == "function" ? Array.isArray(u) : t.call(u) === "[object Array]";
  }, l = function(u) {
    if (!u || t.call(u) !== "[object Object]")
      return !1;
    var d = e.call(u, "constructor"), c = u.constructor && u.constructor.prototype && e.call(u.constructor.prototype, "isPrototypeOf");
    if (u.constructor && !d && !c)
      return !1;
    var h;
    for (h in u)
      ;
    return typeof h > "u" || e.call(u, h);
  }, o = function(u, d) {
    n && d.name === "__proto__" ? n(u, d.name, {
      enumerable: !0,
      configurable: !0,
      value: d.newValue,
      writable: !0
    }) : u[d.name] = d.newValue;
  }, a = function(u, d) {
    if (d === "__proto__")
      if (e.call(u, d)) {
        if (r)
          return r(u, d).value;
      } else return;
    return u[d];
  };
  return tn = function s() {
    var u, d, c, h, f, m, C = arguments[0], k = 1, y = arguments.length, T = !1;
    for (typeof C == "boolean" && (T = C, C = arguments[1] || {}, k = 2), (C == null || typeof C != "object" && typeof C != "function") && (C = {}); k < y; ++k)
      if (u = arguments[k], u != null)
        for (d in u)
          c = a(C, d), h = a(u, d), C !== h && (T && h && (l(h) || (f = i(h))) ? (f ? (f = !1, m = c && i(c) ? c : []) : m = c && l(c) ? c : {}, o(C, { name: d, newValue: s(T, m, h) })) : typeof h < "u" && o(C, { name: d, newValue: h }));
    return C;
  }, tn;
}
var ef = Jd();
const nn = /* @__PURE__ */ hi(ef);
function En(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function tf() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(s, ...u) {
      const d = e[++l];
      let c = -1;
      if (s) {
        o(s);
        return;
      }
      for (; ++c < i.length; )
        (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
      i = u, d ? nf(d, a)(...u) : o(null, ...u);
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
function nf(e, t) {
  let n;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let s;
    a && o.push(i);
    try {
      s = e.apply(this, o);
    } catch (u) {
      const d = (
        /** @type {Error} */
        u
      );
      if (a && n)
        throw d;
      return i(d);
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
const Ie = { basename: rf, dirname: lf, extname: of, join: af, sep: "/" };
function rf(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Tt(e);
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
function lf(e) {
  if (Tt(e), e.length === 0)
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
function of(e) {
  Tt(e);
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
function af(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Tt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : sf(n);
}
function sf(e) {
  Tt(e);
  const t = e.codePointAt(0) === 47;
  let n = uf(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function uf(e, t) {
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
function Tt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const cf = { cwd: df };
function df() {
  return "/";
}
function In(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function ff(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!In(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return hf(e);
}
function hf(e) {
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
const rn = (
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
class yl {
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
    t ? In(t) ? n = { path: t } : typeof t == "string" || pf(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : cf.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < rn.length; ) {
      const l = rn[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      rn.includes(i) || (this[i] = n[i]);
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
    on(t, "basename"), ln(t, "basename"), this.path = Ie.join(this.dirname || "", t);
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
    jr(this.basename, "dirname"), this.path = Ie.join(t || "", this.basename);
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
    if (ln(t, "extname"), jr(this.dirname, "extname"), t) {
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
    In(t) && (t = ff(t)), on(t, "path"), this.path !== t && this.history.push(t);
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
    on(t, "stem"), ln(t, "stem"), this.path = Ie.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new oe(
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
function ln(e, t) {
  if (e && e.includes(Ie.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ie.sep + "`"
    );
}
function on(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function jr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function pf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const mf = (
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
), gf = {}.hasOwnProperty;
class Kn extends mf {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = tf();
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
      new Kn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(nn(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (un("data", this.frozen), this.namespace[t] = n, this) : gf.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (un("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    return an("parse", r), r(String(n), n);
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
    return this.freeze(), an("process", this.parser || this.Parser), sn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = Lt(t), s = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(s, a, function(d, c, h) {
        if (d || !c || !h)
          return u(d);
        const f = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), m = r.stringify(f, h);
        bf(m) ? h.value = m : h.result = m, u(
          d,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function u(d, c) {
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
    return this.freeze(), an("processSync", this.parser || this.Parser), sn("processSync", this.compiler || this.Compiler), this.process(t, i), Or("processSync", "process", n), r;
    function i(l, o) {
      n = !0, Mr(l), r = o;
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
    Br(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const s = Lt(n);
      i.run(t, s, u);
      function u(d, c, h) {
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
    return this.run(t, n, l), Or("runSync", "run", r), i;
    function l(o, a) {
      Mr(o), i = a, r = !0;
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
    return sn("stringify", i), Br(t), i(t, r);
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
    if (un("use", this.frozen), t != null) if (typeof t == "function")
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
          const [d, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          s(d, c);
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
      a(u.plugins), u.settings && (i.settings = nn(!0, i.settings, u.settings));
    }
    function a(u) {
      let d = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++d < u.length; ) {
          const c = u[d];
          l(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function s(u, d) {
      let c = -1, h = -1;
      for (; ++c < r.length; )
        if (r[c][0] === u) {
          h = c;
          break;
        }
      if (h === -1)
        r.push([u, ...d]);
      else if (d.length > 0) {
        let [f, ...m] = d;
        const C = r[h][1];
        En(C) && En(f) && (f = nn(!0, C, f)), r[h] = [u, f, ...m];
      }
    }
  }
}
const xf = new Kn().freeze();
function an(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function sn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function un(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Br(e) {
  if (!En(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Or(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Lt(e) {
  return yf(e) ? e : new yl(e);
}
function yf(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function bf(e) {
  return typeof e == "string" || kf(e);
}
function kf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const wf = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", zr = [], _r = { allowDangerousHtml: !0 }, Cf = /^(https?|ircs?|mailto|xmpp)$/i, vf = [
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
function Sf(e) {
  const t = Tf(e), n = Ef(e);
  return If(t.runSync(t.parse(n), n), e);
}
function Tf(e) {
  const t = e.rehypePlugins || zr, n = e.remarkPlugins || zr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ..._r } : _r;
  return xf().use(id).use(n).use(Qd, r).use(t);
}
function Ef(e) {
  const t = e.children || "", n = new yl();
  return typeof t == "string" && (n.value = t), n;
}
function If(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, s = t.urlTransform || Af;
  for (const d of vf)
    Object.hasOwn(t, d.from) && ("" + d.from + (d.to ? "use `" + d.to + "` instead" : "remove it") + wf + d.id, void 0);
  return Zn(e, u), Vs(e, {
    Fragment: p.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: p.jsx,
    jsxs: p.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function u(d, c, h) {
    if (d.type === "raw" && h && typeof c == "number")
      return o ? h.children.splice(c, 1) : h.children[c] = { type: "text", value: d.value }, c;
    if (d.type === "element") {
      let f;
      for (f in Qt)
        if (Object.hasOwn(Qt, f) && Object.hasOwn(d.properties, f)) {
          const m = d.properties[f], C = Qt[f];
          (C === null || C.includes(d.tagName)) && (d.properties[f] = s(String(m || ""), f, d));
        }
    }
    if (d.type === "element") {
      let f = n ? !n.includes(d.tagName) : l ? l.includes(d.tagName) : !1;
      if (!f && r && typeof c == "number" && (f = !r(d, c, h)), f && h && typeof c == "number")
        return a && d.children ? h.children.splice(c, 1, ...d.children) : h.children.splice(c, 1), c;
    }
  }
}
function Af(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Cf.test(e.slice(0, t)) ? e : ""
  );
}
const Ne = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], Vr = {
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
}, Oe = {}.hasOwnProperty;
function Pf(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...Vr, ...t } : Vr,
    stack: []
  }, i = bl(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function bl(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Lf(e, n);
      case "doctype":
        return Df(e, n);
      case "element":
        return Rf(e, n);
      case "root":
        return Ff(e, n);
      case "text":
        return Mf(e, n);
    }
  }
}
function Lf(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return Et(l, t), l;
  }
}
function Df(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return Et(n, t), n;
  }
}
function Rf(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    kl(e, t.children)
  ), i = $f(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && Oe.call(e.schema.ancestors, n))) {
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
  return Et(o, t), o;
}
function Ff(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    kl(e, t.children)
  ) };
  return Et(r, t), r;
}
function Mf(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return Et(r, t), r;
}
function kl(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = bl(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function $f(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && Oe.call(r, n) ? r[n] : void 0, o = r && Oe.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), s = {};
  let u;
  for (u in a)
    if (Oe.call(a, u)) {
      const d = a[u];
      let c = Nr(
        e,
        Hr(l, u),
        u,
        d
      );
      c == null && (c = Nr(e, Hr(o, u), u, d)), c != null && (s[u] = c);
    }
  if (i && Oe.call(i, n)) {
    const d = i[n];
    for (u in d)
      Oe.call(d, u) && !Oe.call(s, u) && (s[u] = d[u]);
  }
  return s;
}
function Nr(e, t, n, r) {
  return t ? Array.isArray(r) ? jf(e, t, n, r) : wl(e, t, n, r) : void 0;
}
function jf(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = wl(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function wl(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && Bf(e, n, r)) {
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
function Bf(e, t, n) {
  const r = e.schema.protocols && Oe.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
  if (!r || r.length === 0)
    return !0;
  const i = String(n), l = i.indexOf(":"), o = i.indexOf("?"), a = i.indexOf("#"), s = i.indexOf("/");
  if (l < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  s > -1 && l > s || o > -1 && l > o || a > -1 && l > a)
    return !0;
  let u = -1;
  for (; ++u < r.length; ) {
    const d = r[u];
    if (l === d.length && i.slice(0, d.length) === d)
      return !0;
  }
  return !1;
}
function Et(e, t) {
  const n = Wi(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = wt(t.data)), n && (e.position = n);
}
function Hr(e, t) {
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
function Of(e) {
  return function(t) {
    return (
      /** @type {Root} */
      Pf(t, e)
    );
  };
}
function qr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function zf(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function _f(e, t, n) {
  const i = Nt((n || {}).ignore || []), l = Vf(t);
  let o = -1;
  for (; ++o < l.length; )
    xl(e, "text", a);
  function a(u, d) {
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
      return s(u, d);
  }
  function s(u, d) {
    const c = d[d.length - 1], h = l[o][0], f = l[o][1];
    let m = 0;
    const k = c.children.indexOf(u);
    let y = !1, T = [];
    h.lastIndex = 0;
    let w = h.exec(u.value);
    for (; w; ) {
      const A = w.index, E = {
        index: w.index,
        input: w.input,
        stack: [...d, u]
      };
      let b = f(...w, E);
      if (typeof b == "string" && (b = b.length > 0 ? { type: "text", value: b } : void 0), b === !1 ? h.lastIndex = A + 1 : (m !== A && T.push({
        type: "text",
        value: u.value.slice(m, A)
      }), Array.isArray(b) ? T.push(...b) : b && T.push(b), m = A + w[0].length, y = !0), !h.global)
        break;
      w = h.exec(u.value);
    }
    return y ? (m < u.value.length && T.push({ type: "text", value: u.value.slice(m) }), c.children.splice(k, 1, ...T)) : T = [u], k + T.length;
  }
}
function Vf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Nf(i[0]), Hf(i[1])]);
  }
  return t;
}
function Nf(e) {
  return typeof e == "string" ? new RegExp(zf(e), "g") : e;
}
function Hf(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const cn = "phrasing", dn = ["autolink", "link", "image", "label"];
function qf() {
  return {
    transforms: [Yf],
    enter: {
      literalAutolink: Wf,
      literalAutolinkEmail: fn,
      literalAutolinkHttp: fn,
      literalAutolinkWww: fn
    },
    exit: {
      literalAutolink: Xf,
      literalAutolinkEmail: Gf,
      literalAutolinkHttp: Zf,
      literalAutolinkWww: Kf
    }
  };
}
function Uf() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: cn,
        notInConstruct: dn
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: cn,
        notInConstruct: dn
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: cn,
        notInConstruct: dn
      }
    ]
  };
}
function Wf(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function fn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function Zf(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function Kf(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Gf(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function Xf(e) {
  this.exit(e);
}
function Yf(e) {
  _f(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Qf],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Jf]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function Qf(e, t, n, r, i) {
  let l = "";
  if (!Cl(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !eh(n)))
    return !1;
  const o = th(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function Jf(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Cl(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function eh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function th(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = qr(e, "(");
  let l = qr(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function Cl(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ue(n) || zt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
vl.peek = ch;
function nh() {
  this.buffer();
}
function rh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function ih() {
  this.buffer();
}
function lh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function oh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Te(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function ah(e) {
  this.exit(e);
}
function sh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Te(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function uh(e) {
  this.exit(e);
}
function ch() {
  return "[";
}
function vl(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function dh() {
  return {
    enter: {
      gfmFootnoteCallString: nh,
      gfmFootnoteCall: rh,
      gfmFootnoteDefinitionLabelString: ih,
      gfmFootnoteDefinition: lh
    },
    exit: {
      gfmFootnoteCallString: oh,
      gfmFootnoteCall: ah,
      gfmFootnoteDefinitionLabelString: sh,
      gfmFootnoteDefinition: uh
    }
  };
}
function fh(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: vl },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, l, o) {
    const a = l.createTracker(o);
    let s = a.move("[^");
    const u = l.enter("footnoteDefinition"), d = l.enter("label");
    return s += a.move(
      l.safe(l.associationId(r), { before: s, after: "]" })
    ), d(), s += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), s += a.move(
      (t ? `
` : " ") + l.indentLines(
        l.containerFlow(r, a.current()),
        t ? Sl : hh
      )
    )), u(), s;
  }
}
function hh(e, t, n) {
  return t === 0 ? e : Sl(e, t, n);
}
function Sl(e, t, n) {
  return (n ? "" : "    ") + e;
}
const ph = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Tl.peek = bh;
function mh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: xh },
    exit: { strikethrough: yh }
  };
}
function gh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: ph
      }
    ],
    handlers: { delete: Tl }
  };
}
function xh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function yh(e) {
  this.exit(e);
}
function Tl(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function bh() {
  return "~";
}
function kh(e) {
  return e.length;
}
function wh(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || kh, l = [], o = [], a = [], s = [];
  let u = 0, d = -1;
  for (; ++d < e.length; ) {
    const C = [], k = [];
    let y = -1;
    for (e[d].length > u && (u = e[d].length); ++y < e[d].length; ) {
      const T = Ch(e[d][y]);
      if (n.alignDelimiters !== !1) {
        const w = i(T);
        k[y] = w, (s[y] === void 0 || w > s[y]) && (s[y] = w);
      }
      C.push(T);
    }
    o[d] = C, a[d] = k;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < u; )
      l[c] = Ur(r[c]);
  else {
    const C = Ur(r);
    for (; ++c < u; )
      l[c] = C;
  }
  c = -1;
  const h = [], f = [];
  for (; ++c < u; ) {
    const C = l[c];
    let k = "", y = "";
    C === 99 ? (k = ":", y = ":") : C === 108 ? k = ":" : C === 114 && (y = ":");
    let T = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      s[c] - k.length - y.length
    );
    const w = k + "-".repeat(T) + y;
    n.alignDelimiters !== !1 && (T = k.length + T + y.length, T > s[c] && (s[c] = T), f[c] = T), h[c] = w;
  }
  o.splice(1, 0, h), a.splice(1, 0, f), d = -1;
  const m = [];
  for (; ++d < o.length; ) {
    const C = o[d], k = a[d];
    c = -1;
    const y = [];
    for (; ++c < u; ) {
      const T = C[c] || "";
      let w = "", A = "";
      if (n.alignDelimiters !== !1) {
        const E = s[c] - (k[c] || 0), b = l[c];
        b === 114 ? w = " ".repeat(E) : b === 99 ? E % 2 ? (w = " ".repeat(E / 2 + 0.5), A = " ".repeat(E / 2 - 0.5)) : (w = " ".repeat(E / 2), A = w) : A = " ".repeat(E);
      }
      n.delimiterStart !== !1 && !c && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && T === "") && (n.delimiterStart !== !1 || c) && y.push(" "), n.alignDelimiters !== !1 && y.push(w), y.push(T), n.alignDelimiters !== !1 && y.push(A), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || c !== u - 1) && y.push("|");
    }
    m.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return m.join(`
`);
}
function Ch(e) {
  return e == null ? "" : String(e);
}
function Ur(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function vh(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    Sh
  );
  return i(), o;
}
function Sh(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Th(e, t) {
  return Wr(e, t.inConstruct, !0) && !Wr(e, t.notInConstruct, !1);
}
function Wr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Zr(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Th(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Eh(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function Ih(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Ah(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Ph(e, t, n, r) {
  const i = Ah(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (Ih(e, n)) {
    const c = n.enter("codeIndented"), h = n.indentLines(l, Lh);
    return c(), h;
  }
  const a = n.createTracker(r), s = i.repeat(Math.max(Eh(l, i) + 1, 3)), u = n.enter("codeFenced");
  let d = a.move(s);
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
`)), d += a.move(s), u(), d;
}
function Lh(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Gn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Dh(e, t, n, r) {
  const i = Gn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
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
function Rh(e) {
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
function Bt(e, t, n) {
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
El.peek = Fh;
function El(e, t, n, r) {
  const i = Rh(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), d = Bt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  d.inside && (s = Ct(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), h = Bt(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + Ct(c));
  const f = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + s + f;
}
function Fh(e, t, n) {
  return n.options.emphasis || "*";
}
function Mh(e, t) {
  let n = !1;
  return Zn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, Sn;
  }), !!((!e.depth || e.depth < 3) && _n(e) && (t.options.setext || n));
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
  const o = "#".repeat(i), a = n.enter("headingAtx"), s = n.enter("phrasing");
  l.move(o + " ");
  let u = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...l.current()
  });
  return /^[\t ]/.test(u) && (u = Ct(u.charCodeAt(0)) + u.slice(1)), u = u ? o + " " + u : o, n.options.closeAtx && (u += " " + o), s(), a(), u;
}
Il.peek = jh;
function Il(e) {
  return e.value || "";
}
function jh() {
  return "<";
}
Al.peek = Bh;
function Al(e, t, n, r) {
  const i = Gn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
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
function Bh() {
  return "!";
}
Pl.peek = Oh;
function Pl(e, t, n, r) {
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
  const d = n.stack;
  n.stack = [], o = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = d, l(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Oh() {
  return "!";
}
Ll.peek = zh;
function Ll(e, t, n) {
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
function zh() {
  return "`";
}
function Dl(e, t) {
  const n = _n(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Rl.peek = _h;
function Rl(e, t, n, r) {
  const i = Gn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, s;
  if (Dl(e, n)) {
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
function _h(e, t, n) {
  return Dl(e, n) ? "<" : "[";
}
Fl.peek = Vh;
function Fl(e, t, n, r) {
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
  const d = n.stack;
  n.stack = [], o = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: s,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = d, l(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
}
function Vh() {
  return "[";
}
function Xn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Nh(e) {
  const t = Xn(e), n = e.options.bulletOther;
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
function Hh(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Ml(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function qh(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? Hh(n) : Xn(n);
  const a = e.ordered ? o === "." ? ")" : "." : Nh(n);
  let s = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const d = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      d && (!d.children || !d.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (s = !0), Ml(n) === o && d
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const h = e.children[c];
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
function Uh(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function Wh(e, t, n, r) {
  const i = Uh(n);
  let l = n.bulletCurrent || Xn(n);
  t && t.type === "list" && t.ordered && (l = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + l);
  let o = l.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const a = n.createTracker(r);
  a.move(l + " ".repeat(o - l.length)), a.shift(o);
  const s = n.enter("listItem"), u = n.indentLines(
    n.containerFlow(e, a.current()),
    d
  );
  return s(), u;
  function d(c, h, f) {
    return h ? (f ? "" : " ".repeat(o)) + c : (f ? l : l + " ".repeat(o - l.length)) + c;
  }
}
function Zh(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const Kh = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Nt([
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
function Gh(e, t, n, r) {
  return (e.children.some(function(o) {
    return Kh(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function Xh(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
$l.peek = Yh;
function $l(e, t, n, r) {
  const i = Xh(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let s = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const u = s.charCodeAt(0), d = Bt(
    r.before.charCodeAt(r.before.length - 1),
    u,
    i
  );
  d.inside && (s = Ct(u) + s.slice(1));
  const c = s.charCodeAt(s.length - 1), h = Bt(r.after.charCodeAt(0), c, i);
  h.inside && (s = s.slice(0, -1) + Ct(c));
  const f = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: d.outside
  }, a + s + f;
}
function Yh(e, t, n) {
  return n.options.strong || "*";
}
function Qh(e, t, n, r) {
  return n.safe(e.value, r);
}
function Jh(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function ep(e, t, n) {
  const r = (Ml(n) + (n.options.ruleSpaces ? " " : "")).repeat(Jh(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const jl = {
  blockquote: vh,
  break: Zr,
  code: Ph,
  definition: Dh,
  emphasis: El,
  hardBreak: Zr,
  heading: $h,
  html: Il,
  image: Al,
  imageReference: Pl,
  inlineCode: Ll,
  link: Rl,
  linkReference: Fl,
  list: qh,
  listItem: Wh,
  paragraph: Zh,
  root: Gh,
  strong: $l,
  text: Qh,
  thematicBreak: ep
};
function tp() {
  return {
    enter: {
      table: np,
      tableData: Kr,
      tableHeader: Kr,
      tableRow: ip
    },
    exit: {
      codeText: lp,
      table: rp,
      tableData: hn,
      tableHeader: hn,
      tableRow: hn
    }
  };
}
function np(e) {
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
function rp(e) {
  this.exit(e), this.data.inTable = void 0;
}
function ip(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function hn(e) {
  this.exit(e);
}
function Kr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function lp(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, op));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function op(e, t) {
  return t === "|" ? t : e;
}
function ap(e) {
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
  function o(f, m, C, k) {
    return u(d(f, C, k), f.align);
  }
  function a(f, m, C, k) {
    const y = c(f, C, k), T = u([y]);
    return T.slice(0, T.indexOf(`
`));
  }
  function s(f, m, C, k) {
    const y = C.enter("tableCell"), T = C.enter("phrasing"), w = C.containerPhrasing(f, {
      ...k,
      before: l,
      after: l
    });
    return T(), y(), w;
  }
  function u(f, m) {
    return wh(f, {
      align: m,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function d(f, m, C) {
    const k = f.children;
    let y = -1;
    const T = [], w = m.enter("table");
    for (; ++y < k.length; )
      T[y] = c(k[y], m, C);
    return w(), T;
  }
  function c(f, m, C) {
    const k = f.children;
    let y = -1;
    const T = [], w = m.enter("tableRow");
    for (; ++y < k.length; )
      T[y] = s(k[y], f, m, C);
    return w(), T;
  }
  function h(f, m, C) {
    let k = jl.inlineCode(f, m, C);
    return C.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function sp() {
  return {
    exit: {
      taskListCheckValueChecked: Gr,
      taskListCheckValueUnchecked: Gr,
      paragraph: cp
    }
  };
}
function up() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: dp }
  };
}
function Gr(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function cp(e) {
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
function dp(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let s = jl.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
  function u(d) {
    return d + o;
  }
}
function fp() {
  return [
    qf(),
    dh(),
    mh(),
    tp(),
    sp()
  ];
}
function hp(e) {
  return {
    extensions: [
      Uf(),
      fh(e),
      gh(),
      ap(e),
      up()
    ]
  };
}
const pp = {
  tokenize: kp,
  partial: !0
}, Bl = {
  tokenize: wp,
  partial: !0
}, Ol = {
  tokenize: Cp,
  partial: !0
}, zl = {
  tokenize: vp,
  partial: !0
}, mp = {
  tokenize: Sp,
  partial: !0
}, _l = {
  name: "wwwAutolink",
  tokenize: yp,
  previous: Nl
}, Vl = {
  name: "protocolAutolink",
  tokenize: bp,
  previous: Hl
}, Me = {
  name: "emailAutolink",
  tokenize: xp,
  previous: ql
}, Pe = {};
function gp() {
  return {
    text: Pe
  };
}
let He = 48;
for (; He < 123; )
  Pe[He] = Me, He++, He === 58 ? He = 65 : He === 91 && (He = 97);
Pe[43] = Me;
Pe[45] = Me;
Pe[46] = Me;
Pe[95] = Me;
Pe[72] = [Me, Vl];
Pe[104] = [Me, Vl];
Pe[87] = [Me, _l];
Pe[119] = [Me, _l];
function xp(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(c) {
    return !An(c) || !ql.call(r, r.previous) || Yn(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return An(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : n(c);
  }
  function s(c) {
    return c === 46 ? e.check(mp, d, u)(c) : c === 45 || c === 95 || le(c) ? (l = !0, e.consume(c), s) : d(c);
  }
  function u(c) {
    return e.consume(c), i = !0, s;
  }
  function d(c) {
    return l && i && ue(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function yp(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !Nl.call(r, r.previous) || Yn(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(pp, e.attempt(Bl, e.attempt(Ol, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function bp(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(c) {
    return (c === 72 || c === 104) && Hl.call(r, r.previous) && !Yn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (ue(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const h = i.toLowerCase();
      if (h === "http" || h === "https")
        return e.consume(c), s;
    }
    return n(c);
  }
  function s(c) {
    return c === 47 ? (e.consume(c), l ? u : (l = !0, s)) : n(c);
  }
  function u(c) {
    return c === null || $t(c) || Q(c) || Ue(c) || zt(c) ? n(c) : e.attempt(Bl, e.attempt(Ol, d), n)(c);
  }
  function d(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function kp(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function wp(e, t, n) {
  let r, i, l;
  return o;
  function o(u) {
    return u === 46 || u === 95 ? e.check(zl, s, a)(u) : u === null || Q(u) || Ue(u) || u !== 45 && zt(u) ? s(u) : (l = !0, e.consume(u), o);
  }
  function a(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), e.consume(u), o;
  }
  function s(u) {
    return i || r || !l ? n(u) : t(u);
  }
}
function Cp(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(zl, t, l)(o) : o === null || Q(o) || Ue(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function vp(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Q(a) || Ue(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Q(a) || Ue(a) ? t(a) : r(a);
  }
  function l(a) {
    return ue(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : ue(a) ? (e.consume(a), o) : n(a);
  }
}
function Sp(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return le(l) ? n(l) : t(l);
  }
}
function Nl(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Q(e);
}
function Hl(e) {
  return !ue(e);
}
function ql(e) {
  return !(e === 47 || An(e));
}
function An(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || le(e);
}
function Yn(e) {
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
function Ep() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Lp,
        continuation: {
          tokenize: Dp
        },
        exit: Rp
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Pp
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Ip,
        resolveTo: Ap
      }
    }
  };
}
function Ip(e, t, n) {
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
    const u = Te(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !l.includes(u.slice(1)) ? n(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), t(s));
  }
}
function Ap(e, t) {
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
function Pp(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l = 0, o;
  return a;
  function a(c) {
    return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
  }
  function s(c) {
    return c !== 94 ? n(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
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
      return i.includes(Te(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Q(c) || (o = !0), l++, e.consume(c), c === 92 ? d : u;
  }
  function d(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, u) : u(c);
  }
}
function Lp(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l, o = 0, a;
  return s;
  function s(m) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(m) {
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
      const C = e.exit("gfmFootnoteDefinitionLabelString");
      return l = Te(r.sliceSerialize(C)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(m), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return Q(m) || (a = !0), o++, e.consume(m), m === 92 ? c : d;
  }
  function c(m) {
    return m === 91 || m === 92 || m === 93 ? (e.consume(m), o++, d) : d(m);
  }
  function h(m) {
    return m === 58 ? (e.enter("definitionMarker"), e.consume(m), e.exit("definitionMarker"), i.includes(l) || i.push(l), G(e, f, "gfmFootnoteDefinitionWhitespace")) : n(m);
  }
  function f(m) {
    return t(m);
  }
}
function Dp(e, t, n) {
  return e.check(St, t, e.attempt(Tp, t, n));
}
function Rp(e) {
  e.exit("gfmFootnoteDefinition");
}
function Fp(e, t, n) {
  const r = this;
  return G(e, i, "gfmFootnoteDefinitionIndent", 5);
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
    let s = -1;
    for (; ++s < o.length; )
      if (o[s][0] === "enter" && o[s][1].type === "strikethroughSequenceTemporary" && o[s][1]._close) {
        let u = s;
        for (; u--; )
          if (o[u][0] === "exit" && o[u][1].type === "strikethroughSequenceTemporary" && o[u][1]._open && // If the sizes are the same:
          o[s][1].end.offset - o[s][1].start.offset === o[u][1].end.offset - o[u][1].start.offset) {
            o[s][1].type = "strikethroughSequence", o[u][1].type = "strikethroughSequence";
            const d = {
              type: "strikethrough",
              start: Object.assign({}, o[u][1].start),
              end: Object.assign({}, o[s][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, o[u][1].end),
              end: Object.assign({}, o[s][1].start)
            }, h = [["enter", d, a], ["enter", o[u][1], a], ["exit", o[u][1], a], ["enter", c, a]], f = a.parser.constructs.insideSpan.null;
            f && be(h, h.length, 0, _t(f, o.slice(u + 1, s), a)), be(h, h.length, 0, [["exit", c, a], ["enter", o[s][1], a], ["exit", o[s][1], a], ["exit", d, a]]), be(o, u - 1, s - u + 3, h), s = u + h.length - 2;
            break;
          }
      }
    for (s = -1; ++s < o.length; )
      o[s][1].type === "strikethroughSequenceTemporary" && (o[s][1].type = "data");
    return o;
  }
  function l(o, a, s) {
    const u = this.previous, d = this.events;
    let c = 0;
    return h;
    function h(m) {
      return u === 126 && d[d.length - 1][1].type !== "characterEscape" ? s(m) : (o.enter("strikethroughSequenceTemporary"), f(m));
    }
    function f(m) {
      const C = tt(u);
      if (m === 126)
        return c > 1 ? s(m) : (o.consume(m), c++, f);
      if (c < 2 && !n) return s(m);
      const k = o.exit("strikethroughSequenceTemporary"), y = tt(m);
      return k._open = !y || y === 2 && !!C, k._close = !C || C === 2 && !!y, a(m);
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
    jp(this, t, n, r);
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
function jp(e, t, n, r) {
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
function Bp(e, t) {
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
function Op() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: zp,
        resolveAll: _p
      }
    }
  };
}
function zp(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(v) {
    let F = r.events.length - 1;
    for (; F > -1; ) {
      const $ = r.events[F][1].type;
      if ($ === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      $ === "linePrefix") F--;
      else break;
    }
    const M = F > -1 ? r.events[F][1].type : null, V = M === "tableHead" || M === "tableRow" ? b : s;
    return V === b && r.parser.lazy[r.now().line] ? n(v) : V(v);
  }
  function s(v) {
    return e.enter("tableHead"), e.enter("tableRow"), u(v);
  }
  function u(v) {
    return v === 124 || (o = !0, l += 1), d(v);
  }
  function d(v) {
    return v === null ? n(v) : z(v) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), f) : n(v) : q(v) ? G(e, d, "whitespace")(v) : (l += 1, o && (o = !1, i += 1), v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), o = !0, d) : (e.enter("data"), c(v)));
  }
  function c(v) {
    return v === null || v === 124 || Q(v) ? (e.exit("data"), d(v)) : (e.consume(v), v === 92 ? h : c);
  }
  function h(v) {
    return v === 92 || v === 124 ? (e.consume(v), c) : c(v);
  }
  function f(v) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(v) : (e.enter("tableDelimiterRow"), o = !1, q(v) ? G(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(v) : m(v));
  }
  function m(v) {
    return v === 45 || v === 58 ? k(v) : v === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), C) : E(v);
  }
  function C(v) {
    return q(v) ? G(e, k, "whitespace")(v) : k(v);
  }
  function k(v) {
    return v === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), y) : v === 45 ? (l += 1, y(v)) : v === null || z(v) ? A(v) : E(v);
  }
  function y(v) {
    return v === 45 ? (e.enter("tableDelimiterFiller"), T(v)) : E(v);
  }
  function T(v) {
    return v === 45 ? (e.consume(v), T) : v === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(v), e.exit("tableDelimiterMarker"), w) : (e.exit("tableDelimiterFiller"), w(v));
  }
  function w(v) {
    return q(v) ? G(e, A, "whitespace")(v) : A(v);
  }
  function A(v) {
    return v === 124 ? m(v) : v === null || z(v) ? !o || i !== l ? E(v) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(v)) : E(v);
  }
  function E(v) {
    return n(v);
  }
  function b(v) {
    return e.enter("tableRow"), R(v);
  }
  function R(v) {
    return v === 124 ? (e.enter("tableCellDivider"), e.consume(v), e.exit("tableCellDivider"), R) : v === null || z(v) ? (e.exit("tableRow"), t(v)) : q(v) ? G(e, R, "whitespace")(v) : (e.enter("data"), B(v));
  }
  function B(v) {
    return v === null || v === 124 || Q(v) ? (e.exit("data"), R(v)) : (e.consume(v), v === 92 ? _ : B);
  }
  function _(v) {
    return v === 92 || v === 124 ? (e.consume(v), B) : B(v);
  }
}
function _p(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, s = 0, u, d, c;
  const h = new $p();
  for (; ++n < e.length; ) {
    const f = e[n], m = f[1];
    f[0] === "enter" ? m.type === "tableHead" ? (a = !1, s !== 0 && (Xr(h, t, s, u, d), d = void 0, s = 0), u = {
      type: "table",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", u, t]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, c = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, d = {
      type: "tableBody",
      start: Object.assign({}, m.start),
      // Note: correct end is set later.
      end: Object.assign({}, m.end)
    }, h.add(n, 0, [["enter", d, t]])), i = m.type === "tableDelimiterRow" ? 2 : d ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], c = Dt(h, t, l, i, void 0, c), l = [0, 0, 0, 0]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], c = Dt(h, t, l, i, void 0, c)), l = o, o = [l[1], n, 0, 0])) : m.type === "tableHead" ? (a = !0, s = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (s = n, l[1] !== 0 ? (o[0] = o[1], c = Dt(h, t, l, i, n, c)) : o[1] !== 0 && (c = Dt(h, t, o, i, n, c)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (s !== 0 && Xr(h, t, s, u, d), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const f = t.events[n];
    f[0] === "enter" && f[1].type === "table" && (f[1]._align = Bp(t.events, n));
  }
  return e;
}
function Dt(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, Ye(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const s = Ye(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, s),
    // Note: correct end is set later.
    end: Object.assign({}, s)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const u = Ye(t.events, n[2]), d = Ye(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, u),
      end: Object.assign({}, d)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const h = t.events[n[2]], f = t.events[n[3]];
      if (h[1].end = Object.assign({}, f[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const m = n[2] + 1, C = n[3] - n[2] - 1;
        e.add(m, C, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, Ye(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function Xr(e, t, n, r, i) {
  const l = [], o = Ye(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function Ye(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Vp = {
  name: "tasklistCheck",
  tokenize: Hp
};
function Np() {
  return {
    text: {
      91: Vp
    }
  };
}
function Hp(e, t, n) {
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
    return Q(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), o) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), o) : n(s);
  }
  function o(s) {
    return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(s);
  }
  function a(s) {
    return z(s) ? t(s) : q(s) ? e.check({
      tokenize: qp
    }, t, n)(s) : n(s);
  }
}
function qp(e, t, n) {
  return G(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function Up(e) {
  return Qi([
    gp(),
    Ep(),
    Mp(e),
    Op(),
    Np()
  ]);
}
const Wp = {};
function Zp(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || Wp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Up(n)), l.push(fp()), o.push(hp(n));
}
const Kp = X.div`
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
`, Pn = ({ content: e, className: t }) => /* @__PURE__ */ p.jsx(Kp, { className: t, children: /* @__PURE__ */ p.jsx(Sf, { remarkPlugins: [Zp], rehypePlugins: [Of], children: e }) }), Gp = X.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Ul = ({ name: e, timestamp: t }) => /* @__PURE__ */ p.jsxs(Fe, { children: [
  /* @__PURE__ */ p.jsx(pi, { src: $o }),
  /* @__PURE__ */ p.jsx(et, { children: e }),
  /* @__PURE__ */ p.jsx(Gp, { children: new Date(t).toLocaleString() })
] }), Xp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Yp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Qp = Object.defineProperty, Jp = (e, t) => Qp(e, "name", { value: t, configurable: !0 });
const e1 = Jp((e) => p.jsx(Ae, { light: Yp, dark: Xp, ...e }), "CheckIcon"), t1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", n1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var r1 = Object.defineProperty, i1 = (e, t) => r1(e, "name", { value: t, configurable: !0 });
const l1 = i1((e) => p.jsx(Ae, { light: n1, dark: t1, ...e }), "CopyIcon"), o1 = ({
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
), a1 = ({
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
), s1 = ({
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
), u1 = ({
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
), c1 = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ p.jsxs(
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
), d1 = ({
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
), f1 = ({
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
), h1 = ({
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
), Wl = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, pn = X.span`
    font-size: 10px;
    color: ${({ theme: e }) => di(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, p1 = X(Fe)`
    margin-left: auto;
`, m1 = X.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Zl = ({
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
  const s = () => {
    i(), o(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => o(!1), 1e3);
  };
  return /* @__PURE__ */ p.jsxs(Fe, { alignItems: "center", children: [
    /* @__PURE__ */ p.jsxs(Fe, { gap: 4, title: "Total tokens", children: [
      /* @__PURE__ */ p.jsx(f1, {}),
      e && /* @__PURE__ */ p.jsx(pn, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ p.jsx(pn, { title: "(Request tokens / Response tokens)", children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ p.jsxs(Fe, { gap: 4, title: "Duration", children: [
      /* @__PURE__ */ p.jsx(s1, {}),
      r && /* @__PURE__ */ p.jsx(pn, { children: Wl(r) })
    ] }),
    /* @__PURE__ */ p.jsxs(p1, { children: [
      /* @__PURE__ */ p.jsx(mi, { icon: l ? /* @__PURE__ */ p.jsx(e1, {}) : /* @__PURE__ */ p.jsx(l1, {}), onPress: s }),
      l && /* @__PURE__ */ p.jsx(m1, { children: "Copied to clipboard" })
    ] })
  ] });
}, g1 = () => /* @__PURE__ */ p.jsxs(bi, { children: [
  /* @__PURE__ */ p.jsx(et, { children: "Test your agent" }),
  /* @__PURE__ */ p.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), x1 = X.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, y1 = X.div`
    padding-bottom: 8px;
`, b1 = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = D.useState(n), l = D.useId();
  return /* @__PURE__ */ p.jsxs("div", { children: [
    /* @__PURE__ */ p.jsxs(x1, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ p.jsx(o1, {}) : /* @__PURE__ */ p.jsx(a1, {}),
      e
    ] }),
    r && /* @__PURE__ */ p.jsx(y1, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, k1 = (e) => "kbDisplayName" in e, w1 = (e) => "serverName" in e, C1 = X.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, v1 = X.div`
    font-size: 16px;
`, Kl = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return k1(n) ? (i = /* @__PURE__ */ p.jsx(u1, {}), r = n.displayName) : w1(n) ? (i = /* @__PURE__ */ p.jsx(c1, {}), r = n.toolName) : (i = /* @__PURE__ */ p.jsx(h1, {}), r = n.displayName), /* @__PURE__ */ p.jsxs(Fe, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ p.jsx(v1, { children: i }),
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsx("div", { children: r }),
        /* @__PURE__ */ p.jsx(C1, { children: Wl(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ p.jsx(Fe, { marginTop: 8, children: /* @__PURE__ */ p.jsx(b1, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, Gl = async (e) => {
  await navigator.clipboard.writeText(e);
}, S1 = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && Gl(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ p.jsxs(ki, { children: [
    /* @__PURE__ */ p.jsx(et, { children: "Test execution failed" }),
    /* @__PURE__ */ p.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ p.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ p.jsx(vi, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ p.jsx(ji, {}) : t ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsx(Ul, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ p.jsx(Pn, { content: t.responseText }),
    /* @__PURE__ */ p.jsx(
      Zl,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ p.jsx(Kl, { tools: t.tools })
  ] }) : /* @__PURE__ */ p.jsx(g1, {});
  return /* @__PURE__ */ p.jsx(qe, { label: "Output", children: o() });
}, Yr = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], T1 = X.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, E1 = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ p.jsx(pi, { src: t, alt: o }) : t;
  return /* @__PURE__ */ p.jsx(po, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ p.jsxs(T1, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, I1 = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ p.jsxs(Fe, { children: [
  e && /* @__PURE__ */ p.jsx(Qn, { children: /* @__PURE__ */ p.jsx(mo, { children: /* @__PURE__ */ p.jsx(
    go,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ p.jsx(Qn, { fullWidth: !0, children: /* @__PURE__ */ p.jsx(xo, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), A1 = X.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, Xl = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ p.jsx(A1, { children: e.map((r, i) => {
  var l, o, a, s;
  return /* @__PURE__ */ p.jsx(
    I1,
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
}) }) : null, P1 = ({
  onSubmit: e,
  disabled: t,
  value: n,
  updateValue: r,
  children: i,
  id: l = "AgentEditorChatInput"
}) => {
  const o = D.useCallback(
    async (s) => {
      if (s.key === "Enter") {
        if (s.shiftKey) return;
        s.preventDefault(), await e();
      }
    },
    [e]
  ), a = D.useCallback(
    (s) => {
      r(s.currentTarget.value), s.currentTarget.style.height = "0px", s.currentTarget.style.height = s.currentTarget.scrollHeight + 2 + "px";
    },
    [r]
  );
  return /* @__PURE__ */ p.jsxs(D1, { children: [
    /* @__PURE__ */ p.jsx(
      L1,
      {
        id: l,
        value: n,
        required: !0,
        onKeyDown: o,
        onChange: a,
        placeholder: "What can I help you with?",
        disabled: t,
        tabIndex: 1,
        title: "",
        onDragOver: (s) => s.preventDefault(),
        onDrop: (s) => s.preventDefault()
      }
    ),
    /* @__PURE__ */ p.jsx(Ft, { children: i })
  ] });
}, L1 = X(yo)`
    min-height: 58px;
    max-height: 106px;
    padding: ${ee.spacing8};
`, Ft = X.div`
    border: ${ee.borderWidthMd} solid ${({ theme: e }) => e.colorsBorderInputDefault};
    border-top: 0;
    padding: ${ee.spacing4} ${ee.spacing8} ${ee.spacing8};
    border-radius: 0 0 ${ee.borderRadiusXs} ${ee.borderRadiusXs};
    margin-top: ${ee.spacing0};
    background-color: ${({ theme: e }) => e.colorsBackgroundInputBase};
`, D1 = X.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;

    textarea {
        border-bottom: 0;
        border-radius: ${ee.borderRadiusXs} ${ee.borderRadiusXs} 0 0;

        // Make sure the fake inside area (where the buttons are) of the textarea gets the same hover/active styling
        &:hover:enabled + ${Ft} {
            border-color: ${({ theme: e }) => e.colorsBorderInputHover};
        }

        &:active:enabled + ${Ft}, &:focus:enabled + ${Ft} {
            border-color: ${({ theme: e }) => e.colorsBorderActive};
        }
    }
`, R1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.14502%206.14498L4.85502%206.85498L7.50002%204.20498V14H8.50002V4.20498L11.145%206.85498L11.855%206.14498L8.00002%202.29498L4.14502%206.14498Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", F1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.14502%206.14498L4.85502%206.85498L7.50002%204.20498V14H8.50002V4.20498L11.145%206.85498L11.855%206.14498L8.00002%202.29498L4.14502%206.14498Z'%20fill='%23535965'/%3e%3c/svg%3e";
var M1 = Object.defineProperty, $1 = (e, t) => M1(e, "name", { value: t, configurable: !0 });
const j1 = $1((e) => p.jsx(Ae, { light: F1, dark: R1, ...e }), "PushIcon"), B1 = ({
  onSubmit: e,
  disabled: t,
  userPrompt: n,
  updateQuestion: r,
  waitingForResponse: i
}) => /* @__PURE__ */ p.jsx(O1, { children: /* @__PURE__ */ p.jsx(P1, { onSubmit: e, disabled: t, value: n, updateValue: r, children: /* @__PURE__ */ p.jsx(z1, { children: /* @__PURE__ */ p.jsx(
  _1,
  {
    icon: /* @__PURE__ */ p.jsx(j1, {}),
    "aria-label": "Send message",
    isDisabled: i || n.trim() === "" || t,
    onPress: e
  }
) }) }) }), O1 = X.section`
    flex-basis: 80px;
`, z1 = X.div`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    align-items: center;
`, _1 = X(mi)`
    background-color: ${({ theme: e }) => e.colorsBackgroundButtonPrimaryButtonDefault};
    color: ${({ theme: e }) => e.colorsAccentWhite};
    border-radius: 4px;
    padding: 3px;
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
`, V1 = X.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
`, N1 = X.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    margin-bottom: 16px;
`, Qr = X.div`
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme: e }) => e.colorsBorderSecondary};

    &:last-child {
        border-bottom: none;
    }
`, H1 = X.div`
    padding: 12px 0;
    border-bottom: 1px solid ${({ theme: e }) => e.colorsBorderSecondary};
`, q1 = X.div`
    font-weight: 600;
    margin-bottom: 8px;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
`, U1 = ({
  agentName: e,
  isLoading: t,
  onChatSubmit: n,
  testVariables: r,
  onVariableChange: i,
  highlightRules: l,
  messages: o = []
}) => {
  const [a, s] = D.useState(""), u = () => {
    a.trim() && (n(a), s(""));
  }, d = () => o.length === 0 ? null : /* @__PURE__ */ p.jsxs(N1, { children: [
    o.map((c, h) => c.type === "user" ? /* @__PURE__ */ p.jsxs(H1, { children: [
      /* @__PURE__ */ p.jsx(q1, { children: "You" }),
      /* @__PURE__ */ p.jsx(Pn, { content: c.text })
    ] }, h) : /* @__PURE__ */ p.jsxs(Qr, { children: [
      /* @__PURE__ */ p.jsx(Ul, { name: e, timestamp: c.response.receivedAt }),
      /* @__PURE__ */ p.jsx(Pn, { content: c.response.responseText }),
      /* @__PURE__ */ p.jsx(
        Zl,
        {
          totalTokens: c.response.totalTokens,
          requestTokens: c.response.requestTokens,
          responseTokens: c.response.responseTokens,
          duration: c.response.durationMilliseconds,
          handleCopyClick: () => Gl(c.response.responseText)
        }
      ),
      c.response.tools && c.response.tools.length > 0 && /* @__PURE__ */ p.jsx(Kl, { tools: c.response.tools })
    ] }, h)),
    t && /* @__PURE__ */ p.jsx(Qr, { children: /* @__PURE__ */ p.jsx(ji, {}) })
  ] });
  return /* @__PURE__ */ p.jsxs(V1, { children: [
    r.length > 0 && /* @__PURE__ */ p.jsx(
      Xl,
      {
        variables: r,
        highlightRules: l,
        onVariableChange: i
      }
    ),
    d(),
    /* @__PURE__ */ p.jsx(
      B1,
      {
        disabled: !1,
        onSubmit: u,
        userPrompt: a,
        updateQuestion: s,
        waitingForResponse: t
      }
    )
  ] });
}, W1 = X(qo)`
    flex: 1;
`, Z1 = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  executeAction: i,
  usageType: l,
  isLoading: o = !1,
  response: a,
  agentName: s
}) => {
  const [u, d] = D.useState(Yr[0]), [c, h] = D.useState(
    e.map((E) => ({
      ...E,
      value: ""
    }))
  ), [f, m] = D.useState([]);
  D.useEffect(() => {
    if (a && l === ye.Chat && !o) {
      const E = {
        type: "agent",
        response: a
      };
      m((b) => {
        const R = b[b.length - 1];
        return (R == null ? void 0 : R.type) === "agent" ? b : [...b, E];
      });
    }
  }, [a, o, l]), D.useEffect(() => {
    h((E) => {
      const b = new Map(E.map((R) => [R.key, R.value]));
      return e.map((R) => b.has(R.key) ? { ...R, value: b.get(R.key) } : {
        ...R,
        value: ""
      });
    });
  }, [e]);
  const C = () => i(c), k = (E) => {
    const b = {
      type: "user",
      text: E,
      timestamp: Date.now()
    }, R = [...f, b];
    m(R), i(c, R);
  }, y = (E, b) => {
    h((R) => {
      const B = [...R];
      return B[E] = { ...B[E], value: b }, B;
    });
  }, T = () => {
    m([]), h(
      e.map((E) => ({
        ...E,
        value: ""
      }))
    );
  }, w = () => l !== ye.Chat ? null : /* @__PURE__ */ p.jsx(
    U1,
    {
      agentName: s,
      isLoading: o,
      onChatSubmit: k,
      testVariables: c,
      onVariableChange: y,
      highlightRules: t,
      messages: f
    }
  ), A = () => l !== ye.Task ? null : /* @__PURE__ */ p.jsx(
    Xl,
    {
      variables: c,
      highlightRules: t,
      onVariableChange: y
    }
  );
  return /* @__PURE__ */ p.jsxs(qe, { label: "Playground", children: [
    r && /* @__PURE__ */ p.jsxs(Vo, { children: [
      /* @__PURE__ */ p.jsx(et, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ p.jsx("div", { children: "To test your agent, restart the application to apply the latest changes." })
    ] }),
    /* @__PURE__ */ p.jsxs(Fe, { children: [
      /* @__PURE__ */ p.jsx(
        W1,
        {
          defaultValue: u == null ? void 0 : u.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: Yr.map((E) => /* @__PURE__ */ p.jsx(xn, { id: E.uuid, children: E.name }, E.uuid))
        }
      ),
      /* @__PURE__ */ p.jsx(
        E1,
        {
          label: l === ye.Chat ? "New chat" : "Test",
          icon: /* @__PURE__ */ p.jsx(d1, {}),
          onPress: l === ye.Chat ? T : C,
          variant: "primary",
          isDisabled: n,
          alt: "run test icon"
        }
      )
    ] }),
    l === ye.Task && c.length > 0 && A(),
    l === ye.Chat && w()
  ] });
}, K1 = [
  { key: ze.Auto, caption: "Auto" },
  { key: ze.None, caption: "None" },
  { key: ze.Any, caption: "Any" },
  { key: ze.Tool, caption: "Tool" }
], G1 = ({
  agent: e,
  validationInfo: t,
  onToolChoiceChange: n,
  onToolChoiceToolChange: r
}) => /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx(
    tr,
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
          vi,
          {
            href: "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Read more."
          }
        )
      ] }),
      children: K1.map((i) => /* @__PURE__ */ p.jsx(xn, { id: i.key, children: i.caption }, i.key))
    }
  ),
  e.toolChoice === ze.Tool && /* @__PURE__ */ p.jsx(
    tr,
    {
      "aria-label": "Tool choice tool",
      label: "Tool",
      selectedKey: e.toolChoiceToolName ?? null,
      validate: () => t.isValidToolChoice,
      onSelectionChange: r,
      description: "Only microflows can be selected as tool choice.",
      children: e.tools.filter((i) => i.toolType === gn.Microflow).map((i) => /* @__PURE__ */ p.jsx(xn, { id: i.name, children: i.name }, i.name))
    }
  )
] }), X1 = X(Mi)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Y1 = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  toolValidations: l,
  agentValidationInfo: o
}) => {
  const [a, s] = D.useState([]), u = D.useMemo(() => e.tools ? e.tools.map((w, A) => ({
    id: w.id ?? String(A),
    enabled: w.enabled,
    name: w.toolType === gn.Microflow ? w.name : w.document.qualifiedName.split(".")[1],
    description: w.description || "",
    tooltype: w.toolType,
    tool: w.document.qualifiedName || ""
  })) : [], [e.tools]), { items: d, sortProps: c } = wi(u), h = D.useCallback(
    (w) => {
      const A = l.get(w);
      return A === "invalid" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(fi, { title: "Tool invalid" }) }) : A === "syncing" ? /* @__PURE__ */ p.jsx(Mt, { icon: /* @__PURE__ */ p.jsx(Fi, { title: "Validating..." }) }) : null;
    },
    [l]
  ), f = D.useCallback(async () => {
    const w = await rr(t, n, e, r);
    w && i(w);
  }, [t, n, e, r, i]), m = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const w = a[0], A = await rr(
      t,
      n,
      e,
      r,
      w
    );
    A && i(A);
  }, [t, n, e, r, i, a]), C = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const w = a[0], A = await $a(t, e, r, w);
    A && i(A);
  }, [e, r, i, a]), k = D.useCallback(
    async (w, A) => {
      if (!e.tools)
        return;
      const E = e.tools.map(
        (R) => (R.id ?? "") === w ? { ...R, enabled: A } : R
      ), b = { ...e, tools: E };
      r(b), i(b);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, r, i]
  ), y = async (w) => {
    const A = await Ba(e, r, w);
    A && i(A);
  }, T = async (w) => {
    const A = await Oa(
      e,
      r,
      w
    );
    A && i(A);
  };
  return /* @__PURE__ */ p.jsxs(qe, { label: "Tools", children: [
    /* @__PURE__ */ p.jsx(
      G1,
      {
        agent: e,
        validationInfo: o,
        onToolChoiceChange: y,
        onToolChoiceToolChange: T
      }
    ),
    /* @__PURE__ */ p.jsx(
      Ci,
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
        data: d.map((w) => [
          { cellContent: h(w.id) },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              X1,
              {
                "aria-label": "Enabled",
                isSelected: w.enabled,
                onChange: (A) => k(w.id, A)
              }
            )
          },
          { cellContent: w.name, tooltipText: w.name },
          { cellContent: w.description, tooltipText: w.description },
          {
            cellContent: /* @__PURE__ */ p.jsx(
              gi,
              {
                icon: w.tooltype === gn.Microflow ? /* @__PURE__ */ p.jsx(Zo, {}) : jo,
                text: w.tool
              }
            ),
            tooltipText: w.tool
          }
        ]),
        rowKey: (w, A) => {
          var E;
          return ((E = d[A]) == null ? void 0 : E.id) ?? String(A);
        },
        rowOpacity: (w) => {
          var A;
          return (A = d[w]) != null && A.enabled ? 1 : 0.5;
        },
        selectionType: "row",
        selectionMode: "single",
        selectedKeys: a,
        onDoubleClick: m,
        onSelectionChange: s,
        ...c,
        toolbarLeft: /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx(
            Qe,
            {
              icon: /* @__PURE__ */ p.jsx(Ri, {}),
              label: "New",
              "aria-label": "Add new tool",
              tooltip: "Add new tool",
              onPress: f
            }
          ),
          /* @__PURE__ */ p.jsx(
            Qe,
            {
              icon: /* @__PURE__ */ p.jsx(Di, {}),
              label: "Edit",
              "aria-label": "Edit selected tool",
              onPress: m,
              tooltip: "Edit selected tool",
              isDisabled: a.length === 0
            }
          ),
          /* @__PURE__ */ p.jsx(
            Qe,
            {
              icon: /* @__PURE__ */ p.jsx(Li, {}),
              label: "Delete",
              "aria-label": "Delete selected tool",
              onPress: C,
              tooltip: "Delete selected tool",
              isDisabled: a.length === 0
            }
          )
        ] })
      }
    )
  ] });
};
var Q1 = Object.defineProperty, J1 = (e, t) => Q1(e, "name", { value: t, configurable: !0 });
const em = J1((e) => p.jsx(tm, { ...e }), "RadioButton"), tm = X(aa)`
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
var nm = Object.defineProperty, rm = (e, t) => nm(e, "name", { value: t, configurable: !0 });
const im = rm(({ orientation: e = "horizontal", label: t, description: n, children: r, ...i }) => {
  const { isInvalid: l, validate: o, validationError: a } = bo(i);
  return p.jsx(Yl, { orientation: e, ...i, isInvalid: l, validate: o, children: p.jsx(ko, { label: t, description: n, realtimeValidationError: a, children: p.jsx(lm, { children: r }) }) });
}, "RadioButtonGroup"), Yl = X(oa)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, lm = X.div`
    display: flex;
    flex-direction: row;
    gap: ${ee.spacing8};
    padding: ${ee.spacing4} 0;

    ${Yl}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`, om = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUsageType: !0,
  isValidUserPrompt: !0,
  isValidToolChoice: !0,
  missingAttributes: [],
  unusedAttributes: []
}, am = [
  { caption: "Task", value: ye.Task },
  { caption: "Chat", value: ye.Chat }
], sm = ({
  agentDocument: { name: e, contents: t, $ID: n },
  isRuntimeConnected: r,
  showUnsavedChangesWarning: i,
  studioPro: l,
  updateStudioProDocument: o
}) => {
  var lt, ot, at, It, st;
  const [a, s] = D.useState(!1), [u, d] = D.useState(om), [c, h] = D.useState(void 0), [f, m] = D.useState(t), [C, k] = D.useState(!1), [y, T] = D.useState(/* @__PURE__ */ new Map()), [w, A] = D.useState(
    /* @__PURE__ */ new Map()
  ), E = wo(), b = [
    (lt = f.model) == null ? void 0 : lt.documentId,
    ...f.tools.map((j) => j.document.documentId),
    ...(f.knowledgebaseTools || []).map((j) => j.document.documentId)
  ].filter((j) => !!j), R = f.entity ? [(It = (at = (ot = f.entity) == null ? void 0 : ot.qualifiedName) == null ? void 0 : at.split(".")) == null ? void 0 : It[0]] : void 0, {
    data: B,
    isError: _,
    error: v,
    isPending: F,
    execute: M
  } = La(l, n, r), V = D.useRef(null);
  D.useEffect(() => {
    var j;
    Le(t).then((Z) => d(Z)), Ce(l, (j = t.entity) == null ? void 0 : j.qualifiedName).then((Z) => h(Z)), m(t), s(!0);
  }, []), D.useEffect(() => {
    a && m(t);
  }, [t]), D.useEffect(() => () => {
    V.current && clearTimeout(V.current);
  }, []), D.useEffect(() => {
    a && (async () => {
      var N;
      const Z = await Ce(l, (N = f.entity) == null ? void 0 : N.qualifiedName);
      h(Z);
    })();
  }, [l, (st = f.entity) == null ? void 0 : st.qualifiedName]);
  const $ = async () => {
    const j = [];
    if (f.tools && f.tools.length > 0) {
      const Z = /* @__PURE__ */ new Map();
      f.tools.forEach((N) => {
        Z.set(N.id, "syncing");
      }), T(Z), j.push(
        Promise.all(
          f.tools.map(async (N) => {
            const K = await No("document", N, f, l);
            return {
              id: N.id,
              state: K === !0 ? "valid" : "invalid"
            };
          })
        ).then((N) => {
          const K = new Map(N.map((se) => [se.id, se.state]));
          T(K);
        })
      );
    }
    if (f.knowledgebaseTools && f.knowledgebaseTools.length > 0) {
      const Z = /* @__PURE__ */ new Map();
      f.knowledgebaseTools.forEach((N) => {
        Z.set(N.id, "syncing");
      }), A(Z), j.push(
        Promise.all(
          f.knowledgebaseTools.map(async (N) => {
            const K = await Ho(
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
          const K = new Map(N.map((se) => [se.id, se.state]));
          A(K);
        })
      );
    }
    await Promise.all(j);
  };
  D.useEffect(() => {
    a && $();
  }, [a]);
  const L = D.useRef(/* @__PURE__ */ new Map()), U = D.useRef(/* @__PURE__ */ new Map());
  D.useEffect(() => {
    if (a && f.tools) {
      const j = L.current, Z = /* @__PURE__ */ new Map();
      f.tools.forEach((N) => {
        Z.set(N.id, N.document.qualifiedName);
      }), T((N) => {
        var se;
        const K = new Map(N);
        return (se = f.tools) == null || se.forEach((ie) => {
          if (!N.has(ie.id))
            K.set(ie.id, "valid");
          else {
            const S = j.get(ie.id), P = Z.get(ie.id);
            S !== void 0 && P !== void 0 && S !== P && K.set(ie.id, "valid");
          }
        }), K;
      }), L.current = Z;
    }
  }, [f.tools, a]), D.useEffect(() => {
    if (a && f.knowledgebaseTools) {
      const j = U.current, Z = /* @__PURE__ */ new Map();
      f.knowledgebaseTools.forEach((N) => {
        Z.set(N.id, N.document.qualifiedName);
      }), A((N) => {
        var se;
        const K = new Map(N);
        return (se = f.knowledgebaseTools) == null || se.forEach((ie) => {
          if (!N.has(ie.id))
            K.set(ie.id, "valid");
          else {
            const S = j.get(ie.id), P = Z.get(ie.id);
            S !== void 0 && P !== void 0 && S !== P && K.set(ie.id, "valid");
          }
        }), K;
      }), U.current = Z;
    }
  }, [f.knowledgebaseTools, a]), D.useEffect(() => {
    a && (async () => {
      const Z = await Le(f);
      d(Z);
    })();
  }, [l, f]), xi({
    studioPro: l,
    dependentIds: b,
    onDependentDocumentsChanged: (j) => {
      var ie, S, P;
      const Z = [
        ...f.tools.map((O) => O.document.documentId),
        ...((ie = f.knowledgebaseTools) == null ? void 0 : ie.map((O) => O.document.documentId)) || []
      ], N = j.includes("domainModel"), K = j.includes(((S = f.model) == null ? void 0 : S.documentId) || "") || N, se = j.some((O) => Z.includes(O));
      K && Le(f).then((O) => d(O)), N && (Ce(l, (P = f.entity) == null ? void 0 : P.qualifiedName).then((O) => h(O)), Fn(l, f.variables, f).then((O) => {
        m({ ...f, variables: O });
      })), se && $();
    },
    watchDomainModelModules: R
  });
  const ae = D.useMemo(() => fa(f.variables, E), [f.variables, E]), he = (j) => (Z) => {
    const N = { ...f, [j]: Z };
    m(N), V.current && clearTimeout(V.current), V.current = setTimeout(async () => {
      const K = await nr(
        l,
        j,
        N,
        o,
        Z
      );
      m(K);
    }, 300);
  }, g = async () => {
    const j = await Da(l, f, o);
    j && m(j);
  }, pe = async () => {
    const j = await Ra(l, f, o);
    j && m(j);
  }, we = async () => {
    f.model && Fa(l, f.model);
  }, x = async () => {
    f.entity && zo(l, f.entity.qualifiedName);
  }, me = async () => {
    const j = await Ma(l, Zt, f, o);
    j && m(j);
  }, Ce = async (j, Z) => {
    if (!Z)
      return;
    const N = await Ot(j, Z);
    if (!N)
      return;
    const K = await Bo(N, j);
    if (K !== void 0)
      return K ? /* @__PURE__ */ p.jsx(Ca, {}) : /* @__PURE__ */ p.jsx(Ia, {});
  }, re = D.useMemo(() => {
    let j = "";
    return f.maxTokens !== void 0 && (j += "Max tokens: " + f.maxTokens.toLocaleString(navigator.language)), f.temperature !== void 0 && (j.length > 0 && (j += ", "), j += "Temperature: " + f.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), f.topP !== void 0 && (j.length > 0 && (j += ", "), j += "Top P: " + f.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), j;
  }, [f.temperature, f.maxTokens, f.topP]), Le = async (j) => ({
    isValidModel: await dt("model", l, j),
    isValidEntity: await dt("entity", l, j),
    isValidUsageType: await dt("usageType", l, j),
    isValidUserPrompt: await dt("userPrompt", l, j),
    missingAttributes: await pa(l, j),
    unusedAttributes: await ma(l, j),
    isValidToolChoice: await dt("toolChoice", l, j)
  }), Ee = () => {
    var j, Z, N;
    return /* @__PURE__ */ p.jsxs(qe, { label: "General", children: [
      /* @__PURE__ */ p.jsx(
        im,
        {
          label: "Agent type",
          "aria-label": "Agent type",
          value: f.usageType,
          validate: () => u.isValidUsageType,
          compactControl: !0,
          onChange: (K) => nr(l, "usageType", f, o, K),
          children: am.map((K) => /* @__PURE__ */ p.jsx(em, { value: K.value, children: K.caption }, K.value))
        }
      ),
      /* @__PURE__ */ p.jsx(
        Kt,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((j = f.model) == null ? void 0 : j.qualifiedName) || "",
          icon: f.model ? Oo : void 0,
          buttonCaption: "Select...",
          onClick: pe,
          validate: () => u.isValidModel,
          buttonCaptionSecondary: f.model ? "Show" : void 0,
          onClickSecondary: f.model ? we : void 0
        }
      ),
      /* @__PURE__ */ p.jsx(
        Kt,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: re,
          buttonCaption: "Edit",
          onClick: me,
          validate: void 0
        }
      ),
      /* @__PURE__ */ p.jsx(
        Co,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: f.description,
          onChange: he("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ p.jsx(
        Kt,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((Z = f.entity) == null ? void 0 : Z.qualifiedName) || "",
          icon: c,
          onClick: g,
          buttonCaption: "Select...",
          validate: () => u.isValidEntity,
          buttonCaptionSecondary: f.entity ? "Show" : void 0,
          onClickSecondary: f.entity ? x : void 0
        }
      ),
      f.entity && u.missingAttributes.length > 0 && /* @__PURE__ */ p.jsxs(ki, { children: [
        /* @__PURE__ */ p.jsx(et, { children: `The following attributes cannot be found in ${f.entity.qualifiedName}:` }),
        /* @__PURE__ */ p.jsx("div", { children: u.missingAttributes.map((K) => `{{${K}}}`).join(", ") })
      ] }),
      f.entity && u.unusedAttributes.length > 0 && !C && /* @__PURE__ */ p.jsxs(bi, { onClose: () => k(!0), children: [
        /* @__PURE__ */ p.jsx(et, { children: `The following attributes are found in ${(N = f.entity) == null ? void 0 : N.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ p.jsx("div", { children: u.unusedAttributes.map((K) => `{{${K}}}`).join(", ") })
      ] })
    ] });
  }, $e = () => /* @__PURE__ */ p.jsx(qe, { label: "System prompt", children: /* @__PURE__ */ p.jsx(
    er,
    {
      ariaLabel: "System prompt",
      value: f.systemPrompt,
      onChange: he("systemPrompt"),
      highlightRules: ae,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), je = () => /* @__PURE__ */ p.jsx(qe, { label: "User prompt", children: /* @__PURE__ */ p.jsx(
    er,
    {
      ariaLabel: "User prompt",
      value: f.userPrompt || "",
      onChange: he("userPrompt"),
      highlightRules: ae,
      validate: () => u.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), Ze = () => /* @__PURE__ */ p.jsx(
    Y1,
    {
      agent: f,
      studioPro: l,
      componentName: Zt,
      updateStudioProDocument: o,
      onAgentChange: m,
      toolValidations: y,
      agentValidationInfo: u
    }
  ), qt = () => /* @__PURE__ */ p.jsx(
    Z1,
    {
      variables: f.variables,
      highlightRules: ae,
      executeAction: M,
      isDisabled: F || i,
      showUnsavedChangesWarning: i,
      usageType: f.usageType,
      isLoading: F,
      response: B,
      agentName: e
    }
  ), Ut = () => /* @__PURE__ */ p.jsx(
    ds,
    {
      agent: f,
      studioPro: l,
      componentName: Zt,
      updateStudioProDocument: o,
      onAgentChange: m,
      knowledgebaseToolValidations: w
    }
  ), Wt = () => /* @__PURE__ */ p.jsx(
    S1,
    {
      agentName: e,
      response: B,
      isLoading: F,
      isError: _,
      error: v
    }
  );
  return /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
    /* @__PURE__ */ p.jsxs(Jn, { children: [
      Ee(),
      $e(),
      f.usageType === ye.Task && je(),
      Ze(),
      Ut()
    ] }),
    /* @__PURE__ */ p.jsxs(Jn, { children: [
      qt(),
      f.usageType === ye.Task && Wt()
    ] })
  ] });
}, um = _o(), cm = ({ studioPro: e, documentId: t }) => {
  var y, T, w, A;
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = D.useState(!1), [o, a] = D.useState(um), [s, u] = D.useState(0), [d, c] = D.useState(!1), [h, f] = D.useState(!1), m = [
    t,
    (y = o.contents.model) == null ? void 0 : y.documentId,
    ...o.contents.tools.map((E) => E.document.documentId),
    ...(o.contents.knowledgebaseTools || []).map((E) => E.document.documentId)
  ].filter((E) => !!E), C = o.contents.entity ? [(A = (w = (T = o.contents.entity) == null ? void 0 : T.qualifiedName) == null ? void 0 : w.split(".")) == null ? void 0 : A[0]] : void 0;
  D.useEffect(() => {
    r.getDocumentById(t).then(async (E) => {
      if (E && !("error" in E))
        l(!0), a(E.document);
      else
        throw new Error((E == null ? void 0 : E.error) || "Document not found");
    }).catch(async (E) => {
      await n.show("error", "Error loading document", "Details: " + (E == null ? void 0 : E.message) || E), l(!0);
    });
  }, [s]);
  const k = D.useCallback(
    (E) => {
      E.some((b) => b === t) && u((b) => b + 1), f(!0);
    },
    [t]
  );
  return xi({
    studioPro: e,
    dependentIds: m,
    onDependentDocumentsChanged: k,
    watchProjectSettings: !0,
    watchDomainModelModules: C
  }), D.useEffect(() => {
    const E = (b) => {
      c(b.isConnected), f(!1);
    };
    return e.runtime.controller.addEventListener("connectionChanged", E), () => {
      e.runtime.controller.removeEventListener("connectionChanged", E);
    };
  }, []), D.useEffect(() => {
    xa(e).then((E) => {
      c(E);
    });
  }, [e]), /* @__PURE__ */ p.jsx(vo, { studioPro: e, children: /* @__PURE__ */ p.jsxs(So, { children: [
    !i && /* @__PURE__ */ p.jsx(Io, {}),
    i && /* @__PURE__ */ p.jsx(To, { children: /* @__PURE__ */ p.jsx(
      sm,
      {
        agentDocument: o,
        isRuntimeConnected: d,
        showUnsavedChangesWarning: h && d,
        studioPro: e,
        updateStudioProDocument: ca(e, t)
      }
    ) })
  ] }) });
}, Cm = Eo(cm);
export {
  cm as App,
  Cm as component
};
