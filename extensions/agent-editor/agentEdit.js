import { j as a, p as q, $ as z, a as be, b as A, c as M, d as he, e as pe, r as f, f as ge, g as ve, h as xe, i as me, k as $e, l as ye, m as we, n as Ce, o as Q, q as B, s as je, t as Pe, u as ke, v as Ve, w as De, x as K, y as Se, z as Be, A as Ae, B as Ee, C as Re, D as Le, E as Ie, F as Fe, G as I, H as k, I as E, T as W, J as Y, K as Oe, L as Me, M as Te, N as He, O as F, P as D, S as N, Q as We, R as J, U as qe, V as Ne, W as Ge, X as _e, Y as ze, Z as Ue, _ as U, a0 as O, a1 as Ze } from "./componentLoader-DyfefHgs.js";
import { c as X, a as Qe, b as Ke, i as Ye, m as Je } from "./agentUtils-DWFrOytf.js";
import { $ as Xe, a as et, b as tt } from "./TextArea-CrejeeTr.js";
const at = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", rt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var nt = Object.defineProperty, st = (e, t) => nt(e, "name", { value: t, configurable: !0 });
const it = st((e) => a.jsx(q, { light: rt, dark: at, ...e }), "EntityIcon"), lt = (e, t, r, n, i) => async (s) => {
  if (console.log("agent change triggered for field ", t), t === "userPrompt" || t === "systemPrompt") {
    const o = { ...r, [t]: s.target.value }, l = X(o), u = { ...o, variables: l };
    n(u), await L(e, u, i);
  } else {
    const o = { ...r, [t]: s.target.value };
    n(o), await L(e, o, i);
  }
}, ot = (e, t, r, n, i) => async (s) => {
  if (console.log("agent change triggered for field ", t), t === "userPrompt" || t === "systemPrompt") {
    const o = { ...r, [t]: s }, l = X(o), u = { ...o, variables: l };
    n(u), await L(e, u, i);
  } else {
    const o = { ...r, [t]: s };
    n(o), await L(e, o, i);
  }
}, dt = async (e, t, r, n) => {
  const i = await e.ui.elementSelectors.selectEntity();
  if (i.status == "ok") {
    console.log(i);
    const s = { ...t, entity: i.selected.module + "." + i.selected.name };
    r(s), await L(e, s, n);
  }
}, ct = async (e, t, r, n, i) => {
  const s = await e.ui.elementSelectors.selectDocument();
  if (s.status == "ok") {
    console.log(s);
    const o = { ...t, [i]: s.selected.module + "." + s.selected.name };
    console.log(s.selected.module + "." + s.selected.name), r(o), await L(e, o, n);
  }
}, ut = (e, t, r, n) => async (i, s) => {
  console.log("variable test value change triggered for index", i);
  const o = [...t.variables];
  o[i] = { ...o[i], testValue: s };
  const l = { ...t, variables: o };
  r(l), await L(e, l, n);
}, L = async (e, t, r) => {
  console.log("Save logic triggered");
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (n) {
    e.ui.notifications.show({
      title: "Failed to save document",
      message: n.message
    });
  }
}, ft = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", bt = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ht = Object.defineProperty, pt = (e, t) => ht(e, "name", { value: t, configurable: !0 });
const ee = pt((e) => a.jsx(q, { light: bt, dark: ft, ...e }), "CloseIcon"), te = /* @__PURE__ */ new WeakMap();
function gt(e, t, r) {
  let { value: n, children: i, "aria-label": s, "aria-labelledby": o, onPressStart: l, onPressEnd: u, onPressChange: h, onPress: p, onPressUp: x, onClick: d } = e;
  const b = e.isDisabled || t.isDisabled;
  let P = i != null, y = s != null || o != null;
  !P && !y && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let j = t.selectedValue === n, g = (R) => {
    R.stopPropagation(), t.setSelectedValue(n);
  }, { pressProps: w, isPressed: m } = z({
    onPressStart: l,
    onPressEnd: u,
    onPressChange: h,
    onPress: p,
    onPressUp: x,
    onClick: d,
    isDisabled: b
  }), { pressProps: c, isPressed: v } = z({
    onPressStart: l,
    onPressEnd: u,
    onPressChange: h,
    onPressUp: x,
    onClick: d,
    isDisabled: b,
    onPress(R) {
      var T;
      p == null || p(R), t.setSelectedValue(n), (T = r.current) === null || T === void 0 || T.focus();
    }
  }), { focusableProps: C } = be(A(e, {
    onFocus: () => t.setLastFocusedValue(n)
  }), r), $ = A(w, C), V = M(e, {
    labelable: !0
  }), S = -1;
  t.selectedValue != null ? t.selectedValue === n && (S = 0) : (t.lastFocusedValue === n || t.lastFocusedValue == null) && (S = 0), b && (S = void 0);
  let { name: de, form: ce, descriptionId: ue, errorMessageId: fe, validationBehavior: _ } = te.get(t);
  return he(r, t.defaultSelectedValue, t.setSelectedValue), pe({
    validationBehavior: _
  }, t, r), {
    labelProps: A(c, f.useMemo(() => ({
      onClick: (R) => R.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (R) => R.preventDefault()
    }), [])),
    inputProps: A(V, {
      ...$,
      type: "radio",
      name: de,
      form: ce,
      tabIndex: S,
      disabled: b,
      required: t.isRequired && _ === "native",
      checked: j,
      value: n,
      onChange: g,
      "aria-describedby": [
        e["aria-describedby"],
        t.isInvalid ? fe : null,
        ue
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: b,
    isSelected: j,
    isPressed: m || v
  };
}
function vt(e, t) {
  let { name: r, form: n, isReadOnly: i, isRequired: s, isDisabled: o, orientation: l = "vertical", validationBehavior: u = "aria" } = e, { direction: h } = ge(), { isInvalid: p, validationErrors: x, validationDetails: d } = t.displayValidation, { labelProps: b, fieldProps: P, descriptionProps: y, errorMessageProps: j } = ve({
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
  }), m = (v) => {
    let C;
    switch (v.key) {
      case "ArrowRight":
        h === "rtl" && l !== "vertical" ? C = "prev" : C = "next";
        break;
      case "ArrowLeft":
        h === "rtl" && l !== "vertical" ? C = "next" : C = "prev";
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
    let $ = $e(v.currentTarget, {
      from: v.target,
      accept: (S) => S instanceof ye(S).HTMLInputElement && S.type === "radio"
    }), V;
    C === "next" ? (V = $.nextNode(), V || ($.currentNode = v.currentTarget, V = $.firstChild())) : (V = $.previousNode(), V || ($.currentNode = v.currentTarget, V = $.lastChild())), V && (V.focus(), t.setSelectedValue(V.value));
  }, c = me(r);
  return te.set(t, {
    name: c,
    form: n,
    descriptionId: y.id,
    errorMessageId: j.id,
    validationBehavior: u
  }), {
    radioGroupProps: A(g, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: m,
      "aria-invalid": t.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": i || void 0,
      "aria-required": s || void 0,
      "aria-disabled": o || void 0,
      "aria-orientation": l,
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
let xt = Math.round(Math.random() * 1e10), mt = 0;
function $t(e) {
  let t = f.useMemo(() => e.name || `radio-group-${xt}-${++mt}`, [
    e.name
  ]);
  var r;
  let [n, i] = we(e.value, (r = e.defaultValue) !== null && r !== void 0 ? r : null, e.onChange), [s] = f.useState(n), [o, l] = f.useState(null), u = Ce({
    ...e,
    value: n
  }), h = (d) => {
    !e.isReadOnly && !e.isDisabled && (i(d), u.commitValidation());
  }, p = u.displayValidation.isInvalid;
  var x;
  return {
    ...u,
    name: t,
    selectedValue: n,
    defaultSelectedValue: e.value !== void 0 ? s : (x = e.defaultValue) !== null && x !== void 0 ? x : null,
    setSelectedValue: h,
    lastFocusedValue: o,
    setLastFocusedValue: l,
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isRequired: e.isRequired || !1,
    validationState: e.validationState || (p ? "invalid" : null),
    isInvalid: p
  };
}
const yt = /* @__PURE__ */ f.createContext(null), wt = /* @__PURE__ */ f.createContext(null), ae = /* @__PURE__ */ f.createContext(null), Ct = /* @__PURE__ */ f.forwardRef(function(t, r) {
  [t, r] = Q(t, r, yt);
  let { validationBehavior: n } = Be(Ae) || {};
  var i, s;
  let o = (s = (i = t.validationBehavior) !== null && i !== void 0 ? i : n) !== null && s !== void 0 ? s : "native", l = $t({
    ...t,
    validationBehavior: o
  }), [u, h] = Ee(!t["aria-label"] && !t["aria-labelledby"]), { radioGroupProps: p, labelProps: x, descriptionProps: d, errorMessageProps: b, ...P } = vt({
    ...t,
    label: h,
    validationBehavior: o
  }, l), y = K({
    ...t,
    values: {
      orientation: t.orientation || "vertical",
      isDisabled: l.isDisabled,
      isReadOnly: l.isReadOnly,
      isRequired: l.isRequired,
      isInvalid: l.isInvalid,
      state: l
    },
    defaultClassName: "react-aria-RadioGroup"
  }), j = M(t, {
    global: !0
  });
  return /* @__PURE__ */ B.createElement("div", {
    ...A(j, y, p),
    ref: r,
    slot: t.slot || void 0,
    "data-orientation": t.orientation || "vertical",
    "data-invalid": l.isInvalid || void 0,
    "data-disabled": l.isDisabled || void 0,
    "data-readonly": l.isReadOnly || void 0,
    "data-required": l.isRequired || void 0
  }, /* @__PURE__ */ B.createElement(Re, {
    values: [
      [
        ae,
        l
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
  }, /* @__PURE__ */ B.createElement(et, null, y.children)));
}), jt = /* @__PURE__ */ f.forwardRef(function(t, r) {
  let { inputRef: n = null, ...i } = t;
  [t, r] = Q(i, r, wt);
  let s = B.useContext(ae), o = je(f.useMemo(() => Pe(n, t.inputRef !== void 0 ? t.inputRef : null), [
    n,
    t.inputRef
  ])), { labelProps: l, inputProps: u, isSelected: h, isDisabled: p, isPressed: x } = gt({
    ...ke(t),
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, o), { isFocused: d, isFocusVisible: b, focusProps: P } = Ve(), y = p || s.isReadOnly, { hoverProps: j, isHovered: g } = De({
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
  }), m = M(t, {
    global: !0
  });
  return delete m.id, delete m.onClick, /* @__PURE__ */ B.createElement("label", {
    ...A(m, l, j, w),
    ref: r,
    "data-selected": h || void 0,
    "data-pressed": x || void 0,
    "data-hovered": g || void 0,
    "data-focused": d || void 0,
    "data-focus-visible": b || void 0,
    "data-disabled": p || void 0,
    "data-readonly": s.isReadOnly || void 0,
    "data-invalid": s.isInvalid || void 0,
    "data-required": s.isRequired || void 0
  }, /* @__PURE__ */ B.createElement(Se, {
    elementType: "span"
  }, /* @__PURE__ */ B.createElement("input", {
    ...A(u, P),
    ref: o
  })), /* @__PURE__ */ B.createElement(Xe.Provider, {
    value: {
      isSelected: h
    }
  }, w.children));
});
var Pt = Object.defineProperty, G = (e, t) => Pt(e, "name", { value: t, configurable: !0 });
function re(e) {
  throw new Error("Unexpected object", e);
}
G(re, "assertNever");
function kt(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
G(kt, "clamp");
function Vt(e) {
  return e.type === "url" ? e.url : `data:image/png;base64,${e.base64Png}`;
}
G(Vt, "getIconSrc");
var Dt = Object.defineProperty, St = (e, t) => Dt(e, "name", { value: t, configurable: !0 });
function ne(e) {
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
      re(e);
  }
}
St(ne, "getAlertStyleByType");
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

    ${({ $type: e }) => ne(e)}
`, ie = k.div`
    padding: ${E.spacing4} ${E.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var Bt = Object.defineProperty, At = (e, t) => Bt(e, "name", { value: t, configurable: !0 });
const Et = At(({ type: e = "neutral", icon: t, children: r, button: n, onClose: i }) => a.jsxs(se, { $type: e, $showBorder: !0, role: "alert", children: [t, a.jsx(ie, { children: r }), n ? a.jsx(W, { onPress: n.onClick, children: n.caption }) : null, i ? a.jsx(Y, { icon: a.jsx(ee, {}), onPress: i }) : null] }), "Alert");
var Rt = Object.defineProperty, Lt = (e, t) => Rt(e, "name", { value: t, configurable: !0 });
Lt(({ type: e = "neutral", icon: t, children: r, onClose: n }) => a.jsxs(se, { $type: e, role: "alert", children: [t, a.jsx(ie, { children: r }), n ? a.jsx(Y, { icon: a.jsx(ee, {}), onPress: n }) : null] }), "InlineAlert");
const It = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ft = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ot = Object.defineProperty, Mt = (e, t) => Ot(e, "name", { value: t, configurable: !0 });
Mt((e) => a.jsx(q, { light: Ft, dark: It, ...e }), "WarningIcon");
const le = ({
  children: e,
  type: t,
  icon: r,
  onClose: n,
  buttonCaption: i,
  buttonClick: s
}) => {
  const o = i && s;
  return /* @__PURE__ */ a.jsx(
    Et,
    {
      type: t,
      icon: r,
      onClose: n,
      button: o ? { caption: i, onClick: s } : void 0,
      children: e
    }
  );
}, Tt = (e) => /* @__PURE__ */ a.jsx(le, { ...e, type: "info", icon: /* @__PURE__ */ a.jsx(Oe, {}) }), Ht = (e) => /* @__PURE__ */ a.jsx(le, { ...e, type: "danger", icon: /* @__PURE__ */ a.jsx(Me, {}) });
var Wt = Object.defineProperty, qt = (e, t) => Wt(e, "name", { value: t, configurable: !0 });
const Nt = qt((e) => a.jsx(Gt, { ...e }), "RadioButton"), Gt = k(jt)`
    display: flex;
    align-items: center;
    gap: ${E.spacing4};
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
        border: ${E.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorUnselected};
        margin: ${E.spacing1};
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
        border: ${E.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorSelected};
    }
`;
var _t = Object.defineProperty, zt = (e, t) => _t(e, "name", { value: t, configurable: !0 });
const Ut = zt(({ orientation: e = "horizontal", label: t, description: r, children: n, ...i }) => {
  const { isInvalid: s, validate: o, validationError: l } = Te(i);
  return a.jsx(oe, { orientation: e, ...i, isInvalid: s, validate: o, children: a.jsx(He, { label: t, description: r, realtimeValidationError: l, children: a.jsx(Zt, { children: n }) }) });
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
    gap: ${E.spacing8};
    padding: ${E.spacing4} 0;

    ${oe}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`, Qt = ({
  label: e,
  ariaLabel: t,
  options: r,
  value: n,
  onChange: i,
  hasMarginTop: s = !1
}) => {
  const o = s ? 8 : 0;
  return /* @__PURE__ */ a.jsxs(F, { marginTop: o, children: [
    e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(N, { children: e }) }),
    /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(
      Ut,
      {
        value: n,
        onChange: i,
        "aria-label": t,
        children: r.map((l) => /* @__PURE__ */ a.jsx(
          Nt,
          {
            value: l.value,
            "aria-label": l.caption,
            children: l.caption
          },
          l.value
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
  value: r,
  onChange: n,
  placeholder: i,
  readOnly: s = !1,
  defaultHeightRows: o,
  highlightRules: l
}) => {
  const u = f.useRef(null), h = f.useRef(null), [p, x] = f.useState(0), d = o || 5, b = l && l.length > 0, P = () => {
    if (!b) return null;
    const g = [];
    l.forEach((c, v) => {
      Array.from(r.matchAll(c.pattern)).forEach(($) => {
        $.index !== void 0 && g.push({
          start: $.index,
          end: $.index + $[0].length,
          text: $[0],
          style: c.style,
          ruleIndex: v
        });
      });
    }), g.sort((c, v) => c.start - v.start);
    const w = [];
    let m = 0;
    return g.forEach((c, v) => {
      c.start > m && w.push(
        /* @__PURE__ */ a.jsx("span", { children: r.slice(m, c.start) }, `text-${m}-${c.start}`)
      ), c.start >= m && (w.push(
        /* @__PURE__ */ a.jsx("span", { style: c.style, children: c.text }, `placeholder-${c.ruleIndex}-${v}`)
      ), m = c.end);
    }), m < r.length && w.push(
      /* @__PURE__ */ a.jsx("span", { children: r.slice(m) }, `text-${m}-end`)
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
    e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(N, { children: e }) }),
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
          value: r,
          placeholder: i,
          readOnly: s,
          onChange: n,
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
  value: r,
  buttonCaption: n,
  onClick: i,
  buttonCaptionSecondary: s,
  onClickSecondary: o,
  placeholder: l,
  hasMarginTop: u = !1,
  icon: h
}) => {
  const p = u ? 8 : 0;
  return /* @__PURE__ */ a.jsxs(F, { marginTop: p, children: [
    e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(N, { children: e }) }),
    /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(F, { children: [
      /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(ta, { children: [
        h && /* @__PURE__ */ a.jsx(We, { children: typeof h == "string" ? /* @__PURE__ */ a.jsx(ea, { src: h }) : h }),
        /* @__PURE__ */ a.jsx(
          J,
          {
            value: r,
            placeholder: l,
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
          children: n
        }
      ),
      s && /* @__PURE__ */ a.jsx(
        W,
        {
          onPress: o,
          children: s
        }
      )
    ] }) })
  ] });
}, aa = ({
  label: e,
  ariaLabel: t,
  value: r,
  onChange: n,
  placeholder: i,
  readOnly: s = !1,
  badgeBackgroundColor: o,
  badgeBorderColor: l
}) => /* @__PURE__ */ a.jsxs(F, { children: [
  e && /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsx(qe, { children: /* @__PURE__ */ a.jsx(Ne, { backgroundColor: o, borderColor: l, children: "{{" + e + "}}" }) }) }),
  /* @__PURE__ */ a.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(
    J,
    {
      value: r,
      placeholder: i,
      isReadOnly: s,
      onChange: n,
      "aria-label": t
    }
  ) })
] }), ra = k.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, na = ({ variables: e, onVariableChange: t }) => e.length > 0 ? /* @__PURE__ */ a.jsx(ra, { children: e.map((r, n) => /* @__PURE__ */ a.jsx(
  aa,
  {
    label: r.key,
    ariaLabel: "variable-" + r.key,
    value: r.testValue,
    onChange: (i) => t(n, i),
    badgeBackgroundColor: r.backgroundColor,
    badgeBorderColor: r.borderColor
  },
  `${r.key}-${n}`
)) }) : null, sa = Qe(), ia = [
  { caption: "Chat", value: "Chat" },
  { caption: "Task", value: "Task" }
], la = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [i, s] = f.useState(0), [o, l] = f.useState({}), [u, h] = f.useState(!1), [p, x] = f.useState(!0), [d, b] = f.useState(sa), P = f.useMemo(() => Ke(d.variables), [d.variables]), y = f.useCallback(
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
  ), m = f.useCallback(
    ut(e, d, b, t),
    [e, d, b, t]
  );
  return f.useEffect(() => {
    const c = (v) => {
      const { documents: C } = v;
      C.some(($) => $.id === t) && s(($) => $ + 1);
    };
    return n.addEventListener("documentsChanged", c), () => {
      n.removeEventListener("documentsChanged", c);
    };
  }, []), f.useEffect(() => {
    n.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const v = c.document.contents;
        b(v), x(await Ye(e, v)), l({}), h(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch((c) => {
      r.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
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
            na,
            {
              variables: d.variables,
              onVariableChange: m
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
