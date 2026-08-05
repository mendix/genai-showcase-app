import { j as B } from "./jsx-runtime-CWOFuNcx.js";
import { j as q, k as H, b as R, e as M, l as K, n as J, r as P, d as Q, a3 as X, a4 as Y, a5 as Z, a6 as ee, g as ae, a7 as ie, p as de, m as le, s as _, C as y, w as re, x as te, y as oe, z as se, A as ne, B as j, D as L, E as ce, G as ue, u as fe, v as be, a8 as $e, a9 as ve, aa as pe, ab as Pe, ac as xe, F as me, J as E, I as w, ad as he, ae as ge } from "./PageContainers-1sk3OYaf.js";
const N = /* @__PURE__ */ new WeakMap();
function ye(a, e, d) {
  let { value: l, children: t, "aria-label": r, "aria-labelledby": n, onPressStart: i, onPressEnd: f, onPressChange: c, onPress: o, onPressUp: s, onClick: $ } = a;
  const b = a.isDisabled || e.isDisabled;
  let V = t != null, x = r != null || n != null;
  !V && !x && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let m = e.selectedValue === l, S = (I) => {
    I.stopPropagation(), e.setSelectedValue(l);
  }, { pressProps: C, isPressed: D } = q({
    onPressStart: i,
    onPressEnd: f,
    onPressChange: c,
    onPress: o,
    onPressUp: s,
    onClick: $,
    isDisabled: b
  }), { pressProps: F, isPressed: p } = q({
    onPressStart: i,
    onPressEnd: f,
    onPressChange: c,
    onPressUp: s,
    onClick: $,
    isDisabled: b,
    onPress(I) {
      var k;
      o?.(I), e.setSelectedValue(l), (k = d.current) === null || k === void 0 || k.focus();
    }
  }), { focusableProps: u } = H(R(a, {
    onFocus: () => e.setLastFocusedValue(l)
  }), d), h = R(C, u), v = M(a, {
    labelable: !0
  }), g = -1;
  e.selectedValue != null ? e.selectedValue === l && (g = 0) : (e.lastFocusedValue === l || e.lastFocusedValue == null) && (g = 0), b && (g = void 0);
  let { name: U, form: A, descriptionId: W, errorMessageId: z, validationBehavior: O } = N.get(e);
  return K(d, e.defaultSelectedValue, e.setSelectedValue), J({
    validationBehavior: O
  }, e, d), {
    labelProps: R(F, P.useMemo(() => ({
      onClick: (I) => I.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (I) => I.preventDefault()
    }), [])),
    inputProps: R(v, {
      ...h,
      type: "radio",
      name: U,
      form: A,
      tabIndex: g,
      disabled: b,
      required: e.isRequired && O === "native",
      checked: m,
      value: l,
      onChange: S,
      "aria-describedby": [
        a["aria-describedby"],
        e.isInvalid ? z : null,
        W
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: b,
    isSelected: m,
    isPressed: D || p
  };
}
function Re(a, e) {
  let { name: d, form: l, isReadOnly: t, isRequired: r, isDisabled: n, orientation: i = "vertical", validationBehavior: f = "aria" } = a, { direction: c } = Q(), { isInvalid: o, validationErrors: s, validationDetails: $ } = e.displayValidation, { labelProps: b, fieldProps: V, descriptionProps: x, errorMessageProps: m } = X({
    ...a,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: e.isInvalid,
    errorMessage: a.errorMessage || s
  }), S = M(a, {
    labelable: !0
  }), { focusWithinProps: C } = Y({
    onBlurWithin(p) {
      var u;
      (u = a.onBlur) === null || u === void 0 || u.call(a, p), e.selectedValue || e.setLastFocusedValue(null);
    },
    onFocusWithin: a.onFocus,
    onFocusWithinChange: a.onFocusChange
  }), D = (p) => {
    let u;
    switch (p.key) {
      case "ArrowRight":
        c === "rtl" && i !== "vertical" ? u = "prev" : u = "next";
        break;
      case "ArrowLeft":
        c === "rtl" && i !== "vertical" ? u = "next" : u = "prev";
        break;
      case "ArrowDown":
        u = "next";
        break;
      case "ArrowUp":
        u = "prev";
        break;
      default:
        return;
    }
    p.preventDefault();
    let h = ee(p.currentTarget, {
      from: ae(p),
      accept: (g) => g instanceof ie(g).HTMLInputElement && g.type === "radio"
    }), v;
    u === "next" ? (v = h.nextNode(), v || (h.currentNode = p.currentTarget, v = h.firstChild())) : (v = h.previousNode(), v || (h.currentNode = p.currentTarget, v = h.lastChild())), v && (v.focus(), e.setSelectedValue(v.value));
  }, F = Z(d);
  return N.set(e, {
    name: F,
    form: l,
    descriptionId: x.id,
    errorMessageId: m.id,
    validationBehavior: f
  }), {
    radioGroupProps: R(S, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: D,
      "aria-invalid": e.isInvalid || void 0,
      "aria-errormessage": a["aria-errormessage"],
      "aria-readonly": t || void 0,
      "aria-required": r || void 0,
      "aria-disabled": n || void 0,
      "aria-orientation": i,
      ...V,
      ...C
    }),
    labelProps: b,
    descriptionProps: x,
    errorMessageProps: m,
    isInvalid: o,
    validationErrors: s,
    validationDetails: $
  };
}
let Ve = Math.round(Math.random() * 1e10), De = 0;
function Ie(a) {
  let e = P.useMemo(() => a.name || `radio-group-${Ve}-${++De}`, [
    a.name
  ]);
  var d;
  let [l, t] = de(a.value, (d = a.defaultValue) !== null && d !== void 0 ? d : null, a.onChange), [r] = P.useState(l), [n, i] = P.useState(null), f = le({
    ...a,
    value: l
  }), c = ($) => {
    !a.isReadOnly && !a.isDisabled && (t($), f.commitValidation());
  }, o = f.displayValidation.isInvalid;
  var s;
  return {
    ...f,
    name: e,
    selectedValue: l,
    defaultSelectedValue: a.value !== void 0 ? r : (s = a.defaultValue) !== null && s !== void 0 ? s : null,
    setSelectedValue: c,
    lastFocusedValue: n,
    setLastFocusedValue: i,
    isDisabled: a.isDisabled || !1,
    isReadOnly: a.isReadOnly || !1,
    isRequired: a.isRequired || !1,
    validationState: a.validationState || (o ? "invalid" : null),
    isInvalid: o
  };
}
const Se = /* @__PURE__ */ P.createContext(null), Ce = /* @__PURE__ */ P.createContext(null), T = /* @__PURE__ */ P.createContext(null), Ee = /* @__PURE__ */ P.forwardRef(function(e, d) {
  [e, d] = _(e, d, Se);
  let { validationBehavior: l } = fe(be) || {};
  var t, r;
  let n = (r = (t = e.validationBehavior) !== null && t !== void 0 ? t : l) !== null && r !== void 0 ? r : "native", i = Ie({
    ...e,
    validationBehavior: n
  }), [f, c] = $e(!e["aria-label"] && !e["aria-labelledby"]), { radioGroupProps: o, labelProps: s, descriptionProps: $, errorMessageProps: b, ...V } = Re({
    ...e,
    label: c,
    validationBehavior: n
  }, i), x = j({
    ...e,
    values: {
      orientation: e.orientation || "vertical",
      isDisabled: i.isDisabled,
      isReadOnly: i.isReadOnly,
      isRequired: i.isRequired,
      isInvalid: i.isInvalid,
      state: i
    },
    defaultClassName: "react-aria-RadioGroup"
  }), m = M(e, {
    global: !0
  });
  return /* @__PURE__ */ y.createElement(L.div, {
    ...R(m, x, o),
    ref: d,
    slot: e.slot || void 0,
    "data-orientation": e.orientation || "vertical",
    "data-invalid": i.isInvalid || void 0,
    "data-disabled": i.isDisabled || void 0,
    "data-readonly": i.isReadOnly || void 0,
    "data-required": i.isRequired || void 0
  }, /* @__PURE__ */ y.createElement(ve, {
    values: [
      [
        T,
        i
      ],
      [
        pe,
        {
          ...s,
          ref: f,
          elementType: "span"
        }
      ],
      [
        Pe,
        {
          slots: {
            description: $,
            errorMessage: b
          }
        }
      ],
      [
        xe,
        V
      ]
    ]
  }, /* @__PURE__ */ y.createElement(me, null, x.children)));
}), Be = /* @__PURE__ */ P.forwardRef(function(e, d) {
  let { inputRef: l = null, ...t } = e;
  [e, d] = _(t, d, Ce);
  let r = y.useContext(T), n = re(P.useMemo(() => te(l, e.inputRef !== void 0 ? e.inputRef : null), [
    l,
    e.inputRef
  ])), { labelProps: i, inputProps: f, isSelected: c, isDisabled: o, isPressed: s } = ye({
    ...oe(e),
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, r, n), { isFocused: $, isFocusVisible: b, focusProps: V } = se(), x = o || r.isReadOnly, { hoverProps: m, isHovered: S } = ne({
    ...e,
    isDisabled: x
  }), C = j({
    ...e,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: c,
      isPressed: s,
      isHovered: S,
      isFocused: $,
      isFocusVisible: b,
      isDisabled: o,
      isReadOnly: r.isReadOnly,
      isInvalid: r.isInvalid,
      isRequired: r.isRequired
    }
  }), D = M(e, {
    global: !0
  });
  return delete D.id, delete D.onClick, /* @__PURE__ */ y.createElement(L.label, {
    ...R(D, i, m, C),
    ref: d,
    "data-selected": c || void 0,
    "data-pressed": s || void 0,
    "data-hovered": S || void 0,
    "data-focused": $ || void 0,
    "data-focus-visible": b || void 0,
    "data-disabled": o || void 0,
    "data-readonly": r.isReadOnly || void 0,
    "data-invalid": r.isInvalid || void 0,
    "data-required": r.isRequired || void 0
  }, /* @__PURE__ */ y.createElement(ce, {
    elementType: "span"
  }, /* @__PURE__ */ y.createElement("input", {
    ...R(f, V),
    ref: n
  })), /* @__PURE__ */ y.createElement(ue.Provider, {
    value: {
      isSelected: c
    }
  }, C.children));
});
var Me = Object.defineProperty, Fe = (a, e) => Me(a, "name", { value: e, configurable: !0 });
const Le = Fe((a) => B.jsx(ke, { ...a }), "RadioButton"), ke = w(Be)`
    display: flex;
    align-items: center;
    gap: ${E.spacing4};
    color: ${({ theme: a }) => a.colorsTextPrimaryDefault};
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
        border: ${E.spacing1} solid ${({ theme: a }) => a.colorsBorderSelectorUnselected};
        margin: ${E.spacing1};
        border-radius: 50%;
        background-clip: content-box;
    }

    &[data-selected]::before {
        background-color: ${({ theme: a }) => a.colorsBorderSelectorSelected};
    }

    &[data-selected]::before,
    &[data-hovered]::before,
    &[data-focused]::before,
    &[data-focus-visible]::before {
        border: ${E.spacing1} solid ${({ theme: a }) => a.colorsBorderSelectorSelected};
    }
`;
var we = Object.defineProperty, Oe = (a, e) => we(a, "name", { value: e, configurable: !0 });
const Ne = Oe(({ orientation: a = "horizontal", label: e, description: d, children: l, ...t }) => {
  const { isInvalid: r, validate: n, validationError: i } = he({ ...t, value: t.value ?? void 0 });
  return B.jsx(G, { orientation: a, ...t, isInvalid: r, validate: n, children: B.jsx(ge, { label: e, description: d, realtimeValidationError: i, children: B.jsx(qe, { children: l }) }) });
}, "RadioButtonGroup"), G = w(Ee)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, qe = w.div`
    display: flex;
    flex-direction: row;
    gap: ${E.spacing8};
    padding: ${E.spacing4} 0;

    ${G}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`;
export {
  Ne as I,
  Le as m
};
