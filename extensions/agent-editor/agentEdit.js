import { j as a, p as N, $ as z, a as be, b as E, c as M, d as he, e as pe, r as f, f as ge, g as ve, h as xe, i as $e, k as me, l as ye, m as we, n as Ce, o as Q, q as A, s as je, t as Pe, u as ke, v as Ve, w as De, x as K, y as Se, z as Be, A as Ae, B as Ee, C as Re, D as Le, E as Ie, F as Fe, G as I, H as k, I as R, T as W, J as Y, K as Oe, L as Me, M as Te, N as He, O as F, P as D, S as q, Q as We, R as J, U as Ne, V as qe, W as Ge, X as _e, Y as ze, Z as Ue, _ as U, a0 as O, a1 as Ze } from "./componentLoader-CiJ_P7hp.js";
import { c as X, a as Qe, b as Ke, i as Ye, m as Je } from "./agentUtils-DWFrOytf.js";
import { $ as Xe, a as et, b as tt } from "./TextArea-CqbH26zx.js";
const at = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", nt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var rt = Object.defineProperty, st = (e, t) => rt(e, "name", { value: t, configurable: !0 });
const it = st((e) => a.jsx(N, { light: nt, dark: at, ...e }), "EntityIcon"), lt = (e, t, n, r, i) => async (s) => {
  if (console.log("agent change triggered for field ", t), t === "userPrompt" || t === "systemPrompt") {
    const l = { ...n, [t]: s.target.value }, o = X(l), u = { ...l, variables: o };
    r(u), await S(e, u, i);
  } else {
    const l = { ...n, [t]: s.target.value };
    r(l), await S(e, l, i);
  }
}, ot = (e, t, n, r, i) => async (s) => {
  if (console.log("agent change triggered for field ", t), t === "userPrompt" || t === "systemPrompt") {
    const l = { ...n, [t]: s }, o = X(l), u = { ...l, variables: o };
    r(u), await S(e, u, i);
  } else {
    const l = { ...n, [t]: s };
    r(l), await S(e, l, i);
  }
}, dt = async (e, t, n, r) => {
  const i = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  if (i.status === "ok") {
    console.log(i);
    const s = { ...t, entity: i.selected.module + "." + i.selected.name };
    n(s), await S(e, s, r);
  }
  if (i.status === "none") {
    console.log('"None" selected for Entity');
    const s = { ...t, entity: "" };
    n(s), await S(e, s, r);
  }
}, ct = async (e, t, n, r, i) => {
  const s = await e.ui.elementSelectors.selectDocument({ allowNone: !0 });
  if (s.status === "ok") {
    console.log(s);
    const l = { ...t, [i]: s.selected.module + "." + s.selected.name };
    console.log(s.selected.module + "." + s.selected.name), n(l), await S(e, l, r);
  }
  if (s.status === "none") {
    console.log('"None" selected for ' + i);
    const l = { ...t, [i]: void 0 };
    n(l), await S(e, l, r);
  }
}, ut = (e, t, n, r) => async (i, s) => {
  console.log("variable test value change triggered for index", i);
  const l = [...t.variables];
  l[i] = { ...l[i], testValue: s };
  const o = { ...t, variables: l };
  n(o), await S(e, o, r);
}, S = async (e, t, n) => {
  console.log("Save logic triggered");
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(n, t);
  } catch (r) {
    e.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
}, ft = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", bt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ht = Object.defineProperty, pt = (e, t) => ht(e, "name", { value: t, configurable: !0 });
const ee = pt((e) => a.jsx(N, { light: bt, dark: ft, ...e }), "CloseIcon"), te = /* @__PURE__ */ new WeakMap();
function gt(e, t, n) {
  let { value: r, children: i, "aria-label": s, "aria-labelledby": l, onPressStart: o, onPressEnd: u, onPressChange: h, onPress: p, onPressUp: x, onClick: d } = e;
  const b = e.isDisabled || t.isDisabled;
  let P = i != null, y = s != null || l != null;
  !P && !y && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let j = t.selectedValue === r, g = (L) => {
    L.stopPropagation(), t.setSelectedValue(r);
  }, { pressProps: w, isPressed: $ } = z({
    onPressStart: o,
    onPressEnd: u,
    onPressChange: h,
    onPress: p,
    onPressUp: x,
    onClick: d,
    isDisabled: b
  }), { pressProps: c, isPressed: v } = z({
    onPressStart: o,
    onPressEnd: u,
    onPressChange: h,
    onPressUp: x,
    onClick: d,
    isDisabled: b,
    onPress(L) {
      var T;
      p == null || p(L), t.setSelectedValue(r), (T = n.current) === null || T === void 0 || T.focus();
    }
  }), { focusableProps: C } = be(E(e, {
    onFocus: () => t.setLastFocusedValue(r)
  }), n), m = E(w, C), V = M(e, {
    labelable: !0
  }), B = -1;
  t.selectedValue != null ? t.selectedValue === r && (B = 0) : (t.lastFocusedValue === r || t.lastFocusedValue == null) && (B = 0), b && (B = void 0);
  let { name: de, form: ce, descriptionId: ue, errorMessageId: fe, validationBehavior: _ } = te.get(t);
  return he(n, t.defaultSelectedValue, t.setSelectedValue), pe({
    validationBehavior: _
  }, t, n), {
    labelProps: E(c, f.useMemo(() => ({
      onClick: (L) => L.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (L) => L.preventDefault()
    }), [])),
    inputProps: E(V, {
      ...m,
      type: "radio",
      name: de,
      form: ce,
      tabIndex: B,
      disabled: b,
      required: t.isRequired && _ === "native",
      checked: j,
      value: r,
      onChange: g,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? fe : null,
        ue
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: b,
    isSelected: j,
    isPressed: $ || v
  };
}
function vt(e, t) {
  let { name: n, form: r, isReadOnly: i, isRequired: s, isDisabled: l, orientation: o = "vertical", validationBehavior: u = "aria" } = e, { direction: h } = ge(), { isInvalid: p, validationErrors: x, validationDetails: d } = t.displayValidation, { labelProps: b, fieldProps: P, descriptionProps: y, errorMessageProps: j } = ve({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || x
  }), g = M(e, {
    labelable: !0
  }), { focusWithinProps: w } = xe({
    onBlurWithin(v) {
      var C;
      (C = e.onBlur) === null || C === void 0 || C.call(e, v), t.selectedValue || t.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), $ = (v) => {
    let C;
    switch (v.key) {
      case "ArrowRight":
        h === "rtl" && o !== "vertical" ? C = "prev" : C = "next";
        break;
      case "ArrowLeft":
        h === "rtl" && o !== "vertical" ? C = "next" : C = "prev";
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
    v.preventDefault();
    let m = me(v.currentTarget, {
      from: v.target,
      accept: (B) => B instanceof ye(B).HTMLInputElement && B.type === "radio"
    }), V;
    C === "next" ? (V = m.nextNode(), V || (m.currentNode = v.currentTarget, V = m.firstChild())) : (V = m.previousNode(), V || (m.currentNode = v.currentTarget, V = m.lastChild())), V && (V.focus(), t.setSelectedValue(V.value));
  }, c = $e(n);
  return te.set(t, {
    name: c,
    form: r,
    descriptionId: y.id,
    errorMessageId: j.id,
    validationBehavior: u
  }), {
    radioGroupProps: E(g, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: $,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": s || void 0,
      "aria-disabled": l || void 0,
      "aria-orientation": o,
      ...P,
      ...w
    }),
    labelProps: b,
    descriptionProps: y,
    errorMessageProps: j,
    isInvalid: p,
    validationErrors: x,
    validationDetails: d
  };
}
let xt = Math.round(Math.random() * 1e10), $t = 0;
function mt(e) {
  let t = f.useMemo(() => e.name || `radio-group-${xt}-${++$t}`, [
    e.name
  ]);
  var n;
  let [r, i] = we(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [s] = f.useState(r), [l, o] = f.useState(null), u = Ce({
    ...e,
    value: r
  }), h = (d) => {
    !e.isReadOnly && !e.isDisabled && (i(d), u.commitValidation());
  }, p = u.displayValidation.isInvalid;
  var x;
  return {
    ...u,
    name: t,
    selectedValue: r,
    defaultSelectedValue: e.value !== void 0 ? s : (x = e.defaultValue) !== null && x !== void 0 ? x : null,
    setSelectedValue: h,
    lastFocusedValue: l,
    setLastFocusedValue: o,
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isRequired: e.isRequired || !1,
    validationState: e.validationState || (p ? "invalid" : null),
    isInvalid: p
  };
}
const yt = /* @__PURE__ */ f.createContext(null), wt = /* @__PURE__ */ f.createContext(null), ae = /* @__PURE__ */ f.createContext(null), Ct = /* @__PURE__ */ f.forwardRef(function(t, n) {
  [t, n] = Q(t, n, yt);
  let { validationBehavior: r } = Be(Ae) || {};
  var i, s;
  let l = (s = (i = t.validationBehavior) !== null && i !== void 0 ? i : r) !== null && s !== void 0 ? s : "native", o = mt({
    ...t,
    validationBehavior: l
  }), [u, h] = Ee(!t["aria-label"] && !t["aria-labelledby"]), { radioGroupProps: p, labelProps: x, descriptionProps: d, errorMessageProps: b, ...P } = vt({
    ...t,
    label: h,
    validationBehavior: l
  }, o), y = K({
    ...t,
    values: {
      orientation: t.orientation || "vertical",
      isDisabled: o.isDisabled,
      isReadOnly: o.isReadOnly,
      isRequired: o.isRequired,
      isInvalid: o.isInvalid,
      state: o
    },
    defaultClassName: "react-aria-RadioGroup"
  }), j = M(t, {
    global: !0
  });
  return /* @__PURE__ */ A.createElement("div", {
    ...E(j, y, p),
    ref: n,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "vertical",
    "data-invalid": o.isInvalid || void 0,
    "data-disabled": o.isDisabled || void 0,
    "data-readonly": o.isReadOnly || void 0,
    "data-required": o.isRequired || void 0
  }, /* @__PURE__ */ A.createElement(Re, {
    values: [
      [
        ae,
        o
      ],
      [
        Le,
        {
          ...x,
          ref: u,
          elementType: "span"
        }
      ],
      [
        Ie,
        {
          slots: {
            description: d,
            errorMessage: b
          }
        }
      ],
      [
        Fe,
        P
      ]
    ]
  }, /* @__PURE__ */ A.createElement(et, null, y.children)));
}), jt = /* @__PURE__ */ f.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Q(i, n, wt);
  let s = A.useContext(ae), l = je(f.useMemo(() => Pe(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: o, inputProps: u, isSelected: h, isDisabled: p, isPressed: x } = gt({
    ...ke(t),
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, l), { isFocused: d, isFocusVisible: b, focusProps: P } = Ve(), y = p || s.isReadOnly, { hoverProps: j, isHovered: g } = De({
    ...t,
    isDisabled: y
  }), w = K({
    ...t,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: h,
      isPressed: x,
      isHovered: g,
      isFocused: d,
      isFocusVisible: b,
      isDisabled: p,
      isReadOnly: s.isReadOnly,
      isInvalid: s.isInvalid,
      isRequired: s.isRequired
    }
  }), $ = M(t, {
    global: !0
  });
  return delete $.id, delete $.onClick, /* @__PURE__ */ A.createElement("label", {
    ...E($, o, j, w),
    ref: n,
    "data-selected": h || void 0,
    "data-pressed": x || void 0,
    "data-hovered": g || void 0,
    "data-focused": d || void 0,
    "data-focus-visible": b || void 0,
    "data-disabled": p || void 0,
    "data-readonly": s.isReadOnly || void 0,
    "data-invalid": s.isInvalid || void 0,
    "data-required": s.isRequired || void 0
  }, /* @__PURE__ */ A.createElement(Se, {
    elementType: "span"
  }, /* @__PURE__ */ A.createElement("input", {
    ...E(u, P),
    ref: l
  })), /* @__PURE__ */ A.createElement(Xe.Provider, {
    value: {
      isSelected: h
    }
  }, w.children));
});
var Pt = Object.defineProperty, G = (e, t) => Pt(e, "name", { value: t, configurable: !0 });
function ne(e) {
  throw new Error("Unexpected object", e);
}
G(ne, "assertNever");
function kt(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
G(kt, "clamp");
function Vt(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
G(Vt, "getIconSrc");
var Dt = Object.defineProperty, St = (e, t) => Dt(e, "name", { value: t, configurable: !0 });
function re(e) {
  switch (e) {
    case "warning":
      return I`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestOrange};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultOrange};
            `;
    case "info":
      return I`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestBlue};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultBlue};
            `;
    case "success":
      return I`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGreen};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGreen};
            `;
    case "danger":
      return I`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestRed};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
            `;
    case "neutral":
      return I`
                background-color: ${({ theme: t }) => t.colorsAccentSubtlestGrey};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGrey};
            `;
    default:
      ne(e);
  }
}
St(re, "getAlertStyleByType");
const se = k.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: stretch;

    min-height: 28px;
    height: fit-content;

    padding: 0 8px;

    ${({ $showBorder: e }) => e && I`
            border-width: 1px 0;
            border-style: solid;
        `}

    ${({ $type: e }) => re(e)}
`, ie = k.div`
    padding: ${R.spacing4} ${R.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var Bt = Object.defineProperty, At = (e, t) => Bt(e, "name", { value: t, configurable: !0 });
const Et = At(({ type: e = "neutral", icon: t, children: n, button: r, onClose: i }) => a.jsxs(se, { $type: e, $showBorder: !0, role: "alert", children: [t, a.jsx(ie, { children: n }), r ? a.jsx(W, { onPress: r.onClick, children: r.caption }) : null, i ? a.jsx(Y, { icon: a.jsx(ee, {}), onPress: i }) : null] }), "Alert");
var Rt = Object.defineProperty, Lt = (e, t) => Rt(e, "name", { value: t, configurable: !0 });
Lt(({ type: e = "neutral", icon: t, children: n, onClose: r }) => a.jsxs(se, { $type: e, role: "alert", children: [t, a.jsx(ie, { children: n }), r ? a.jsx(Y, { icon: a.jsx(ee, {}), onPress: r }) : null] }), "InlineAlert");
const It = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ft = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ot = Object.defineProperty, Mt = (e, t) => Ot(e, "name", { value: t, configurable: !0 });
Mt((e) => a.jsx(N, { light: Ft, dark: It, ...e }), "WarningIcon");
const le = ({
  children: e,
  type: t,
  icon: n,
  onClose: r,
  buttonCaption: i,
  buttonClick: s
}) => {
  const l = i && s;
  return /* @__PURE__ */ a.jsx(
    Et,
    {
      type: t,
      icon: n,
      onClose: r,
      button: l ? { caption: i, onClick: s } : void 0,
      children: e
    }
  );
}, Tt = (e) => /* @__PURE__ */ a.jsx(le, { ...e, type: "info", icon: /* @__PURE__ */ a.jsx(Oe, {}) }), Ht = (e) => /* @__PURE__ */ a.jsx(le, { ...e, type: "danger", icon: /* @__PURE__ */ a.jsx(Me, {}) });
var Wt = Object.defineProperty, Nt = (e, t) => Wt(e, "name", { value: t, configurable: !0 });
const qt = Nt((e) => a.jsx(Gt, { ...e }), "RadioButton"), Gt = k(jt)`
    display: flex;
    align-items: center;
    gap: ${R.spacing4};
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
        border: ${R.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorUnselected};
        margin: ${R.spacing1};
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
        border: ${R.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorSelected};
    }
`;
var _t = Object.defineProperty, zt = (e, t) => _t(e, "name", { value: t, configurable: !0 });
const Ut = zt(({ orientation: e = "horizontal", label: t, description: n, children: r, ...i }) => {
  const { isInvalid: s, validate: l, validationError: o } = Te(i);
  return a.jsx(oe, { orientation: e, ...i, isInvalid: s, validate: l, children: a.jsx(He, { label: t, description: n, realtimeValidationError: o, children: a.jsx(Zt, { children: r }) }) });
}, "RadioButtonGroup"), oe = k(Ct)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, Zt = k.div`
    display: flex;
    flex-direction: row;
    gap: ${R.spacing8};
    padding: ${R.spacing4} 0;

    ${oe}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`, Qt = ({
  label: e,
  ariaLabel: t,
  options: n,
  value: r,
  onChange: i,
  hasMarginTop: s = !1
}) => {
  const l = s ? 8 : 0;
  return /* @__PURE__ */ a.jsxs(F, { marginTop: l, children: [
    e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(q, { children: e }) }),
    /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(
      Ut,
      {
        value: r,
        onChange: i,
        "aria-label": t,
        children: n.map((o) => /* @__PURE__ */ a.jsx(
          qt,
          {
            value: o.value,
            "aria-label": o.caption,
            children: o.caption
          },
          o.value
        ))
      }
    ) })
  ] });
}, Kt = k(tt).withConfig({
  shouldForwardProp: (e) => !["hasHighlighting"].includes(e)
})`
  width: 100%;
  resize: vertical;
  ${({ hasHighlighting: e }) => e ? `
    background-color: transparent;
    color: transparent;
    caret-color: black;
    
    &::selection {
      background-color: rgba(0, 123, 255, 0.3);
    }
  ` : ""}
  position: relative;
  z-index: 1;
  margin-bottom: -3px;
`, Yt = k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 3px;
  width: 100%;
  padding: 4px;
  pointer-events: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: inherit;
  border: 1px solid transparent;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: visible;
  z-index: 0;
  transform: translateY(var(--scroll-offset, 0px));
`, Jt = k.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 3px;
`, Xt = k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: -1;
  border: 1px solid transparent;
`, H = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  placeholder: i,
  readOnly: s = !1,
  defaultHeightRows: l,
  highlightRules: o
}) => {
  const u = f.useRef(null), h = f.useRef(null), [p, x] = f.useState(0), d = l || 5, b = o && o.length > 0, P = () => {
    if (!b) return null;
    const g = [];
    o.forEach((c, v) => {
      Array.from(n.matchAll(c.pattern)).forEach((m) => {
        m.index !== void 0 && g.push({
          start: m.index,
          end: m.index + m[0].length,
          text: m[0],
          style: c.style,
          ruleIndex: v
        });
      });
    }), g.sort((c, v) => c.start - v.start);
    const w = [];
    let $ = 0;
    return g.forEach((c, v) => {
      c.start > $ && w.push(
        /* @__PURE__ */ a.jsx("span", { children: n.slice($, c.start) }, `text-${$}-${c.start}`)
      ), c.start >= $ && (w.push(
        /* @__PURE__ */ a.jsx("span", { style: c.style, children: c.text }, `placeholder-${c.ruleIndex}-${v}`)
      ), $ = c.end);
    }), $ < n.length && w.push(
      /* @__PURE__ */ a.jsx("span", { children: n.slice($) }, `text-${$}-end`)
    ), w;
  }, y = f.useCallback(() => {
    if (u.current) {
      const g = u.current.offsetWidth - u.current.clientWidth;
      x(g);
    }
  }, []), j = f.useCallback(() => {
    if (u.current && h.current) {
      const g = u.current.scrollTop;
      h.current.style.setProperty("--scroll-offset", `-${g}px`);
    }
  }, []);
  return f.useEffect(() => {
    const g = u.current;
    if (g) {
      y();
      const w = new ResizeObserver(y);
      return w.observe(g), g.addEventListener("scroll", j), () => {
        w.disconnect(), g.removeEventListener("scroll", j);
      };
    }
  }, [j, y]), /* @__PURE__ */ a.jsxs(F, { marginBottom: -3, children: [
    e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(q, { children: e }) }),
    /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(Jt, { children: [
      b && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Xt, {}),
        /* @__PURE__ */ a.jsx(
          Yt,
          {
            ref: h,
            style: { paddingRight: `${2 + p}px` },
            children: P()
          }
        )
      ] }),
      /* @__PURE__ */ a.jsx(
        Kt,
        {
          "aria-label": t,
          ref: u,
          value: n,
          placeholder: i,
          readOnly: s,
          onChange: r,
          rows: d,
          hasHighlighting: b
        }
      )
    ] }) })
  ] });
}, ea = k.img`
    width: 16px;
    height: 16px;
`, ta = k.div`
    position: relative;
    width: 100%;
`, Z = ({
  label: e,
  ariaLabel: t,
  value: n,
  buttonCaption: r,
  onClick: i,
  buttonCaptionSecondary: s,
  onClickSecondary: l,
  placeholder: o,
  hasMarginTop: u = !1,
  icon: h
}) => {
  const p = u ? 8 : 0;
  return /* @__PURE__ */ a.jsxs(F, { marginTop: p, children: [
    e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(q, { children: e }) }),
    /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(F, { children: [
      /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(ta, { children: [
        h && /* @__PURE__ */ a.jsx(We, { children: typeof h == "string" ? /* @__PURE__ */ a.jsx(ea, { src: h }) : h }),
        /* @__PURE__ */ a.jsx(
          J,
          {
            value: n,
            placeholder: o,
            isReadOnly: !0,
            "aria-label": t,
            hasIcon: !!h
          }
        )
      ] }) }),
      /* @__PURE__ */ a.jsx(
        W,
        {
          onPress: i,
          children: r
        }
      ),
      s && /* @__PURE__ */ a.jsx(
        W,
        {
          onPress: l,
          children: s
        }
      )
    ] }) })
  ] });
}, aa = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  placeholder: i,
  readOnly: s = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ a.jsxs(F, { children: [
  e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(Ne, { children: /* @__PURE__ */ a.jsx(qe, { backgroundColor: l, borderColor: o, children: "{{" + e + "}}" }) }) }),
  /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(
    J,
    {
      value: n,
      placeholder: i,
      isReadOnly: s,
      onChange: r,
      "aria-label": t
    }
  ) })
] }), na = k.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, ra = ({ variables: e, onVariableChange: t }) => e.length > 0 ? /* @__PURE__ */ a.jsx(na, { children: e.map((n, r) => /* @__PURE__ */ a.jsx(
  aa,
  {
    label: n.key,
    ariaLabel: "variable-" + n.key,
    value: n.testValue,
    onChange: (i) => t(r, i),
    badgeBackgroundColor: n.backgroundColor,
    badgeBorderColor: n.borderColor
  },
  `${n.key}-${r}`
)) }) : null, sa = Qe(), ia = [
  { caption: "Chat", value: "Chat" },
  { caption: "Task", value: "Task" }
], la = ({ studioPro: e, documentId: t }) => {
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, s] = f.useState(0), [l, o] = f.useState({}), [u, h] = f.useState(!1), [p, x] = f.useState(!0), [d, b] = f.useState(sa), P = f.useMemo(() => Ke(d.variables), [d.variables]), y = f.useCallback(
    (c) => lt(e, c, d, b, t),
    [e, d, b, t]
  ), j = f.useCallback(
    (c) => ot(e, c, d, b, t),
    [e, d, b, t]
  ), g = f.useCallback(
    () => dt(e, d, b, t),
    [e, d, b, t]
  ), w = f.useCallback(
    () => ct(e, d, b, t, "modelQualifiedName"),
    [e, d, b, t]
  ), $ = f.useCallback(
    ut(e, d, b, t),
    [e, d, b, t]
  );
  return f.useEffect(() => {
    const c = (v) => {
      const { documents: C } = v;
      C.some((m) => m.id === t) && s((m) => m + 1);
    };
    return r.addEventListener("documentsChanged", c), () => {
      r.removeEventListener("documentsChanged", c);
    };
  }, []), f.useEffect(() => {
    r.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const v = c.document.contents;
        b(v), x(await Ye(e, v)), o({}), h(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch((c) => {
      n.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
    });
  }, [i]), /* @__PURE__ */ a.jsx(_e, { studioPro: e, children: /* @__PURE__ */ a.jsxs(ze, { children: [
    !u && /* @__PURE__ */ a.jsx("span", { children: "Loading document content..." }),
    u && /* @__PURE__ */ a.jsxs(Ue, { children: [
      /* @__PURE__ */ a.jsxs(U, { children: [
        /* @__PURE__ */ a.jsx(
          Z,
          {
            ariaLabel: "Model",
            label: "Model",
            value: d.modelQualifiedName ? d.modelQualifiedName : "",
            icon: d.modelQualifiedName ? Je : void 0,
            buttonCaption: "Select...",
            onClick: w,
            buttonCaptionSecondary: "Settings",
            onClickSecondary: () => {
            }
          }
        ),
        /* @__PURE__ */ a.jsx(O, { label: "System prompt", children: /* @__PURE__ */ a.jsx(
          H,
          {
            ariaLabel: "System prompt",
            value: d.systemPrompt,
            onChange: y("systemPrompt"),
            highlightRules: P
          }
        ) }),
        /* @__PURE__ */ a.jsx(O, { label: "User prompt", children: /* @__PURE__ */ a.jsx(
          H,
          {
            ariaLabel: "User prompt",
            value: d.userPrompt + "",
            onChange: y("userPrompt"),
            highlightRules: P
          }
        ) })
      ] }),
      /* @__PURE__ */ a.jsxs(U, { children: [
        /* @__PURE__ */ a.jsxs(O, { label: "Variables", children: [
          /* @__PURE__ */ a.jsx(
            ra,
            {
              variables: d.variables,
              onVariableChange: $
            }
          ),
          d.variables.length === 0 && /* @__PURE__ */ a.jsx(Tt, { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." })
        ] }),
        /* @__PURE__ */ a.jsxs(O, { label: "General", children: [
          /* @__PURE__ */ a.jsx(
            Ze,
            {
              label: "Agent ID",
              ariaLabel: "Agent ID",
              value: t,
              onChange: () => {
              },
              readOnly: !0
            }
          ),
          /* @__PURE__ */ a.jsx(
            H,
            {
              label: "Documentation",
              ariaLabel: "Documentation",
              value: d.description,
              onChange: y("description"),
              defaultHeightRows: 3
            }
          ),
          /* @__PURE__ */ a.jsx(
            Qt,
            {
              options: ia,
              label: "Agent type",
              ariaLabel: "Agent type",
              onChange: j("usageType"),
              value: d.usageType
            }
          ),
          /* @__PURE__ */ a.jsx(
            Z,
            {
              ariaLabel: "Entity",
              label: "Entity",
              value: d.entity,
              icon: d.entity ? /* @__PURE__ */ a.jsx(it, {}) : void 0,
              onClick: g,
              buttonCaption: "Select..."
            }
          ),
          p || /* @__PURE__ */ a.jsx(Ht, { children: `Entity with name ${d.entity} does not exist (anymore). Please select a valid entity.` })
        ] })
      ] })
    ] })
  ] }) });
}, ua = Ge(la);
export {
  ua as component
};
