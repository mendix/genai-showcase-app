import { j as t, p as te, $ as N, a as ne, b as R, c as T, d as se, e as ie, r as f, f as re, g as le, h as oe, i as de, k as ce, l as ue, m as fe, n as be, o as G, q as S, s as pe, t as he, u as ve, v as ge, w as xe, x as U, y as $e, z as me, A as ye, B as Ce, C as Pe, D as we, E as je, F as Ve, G as L, H as B, T as De, I as ke, J as I, K as D, S as W, L as Ee, M as q, N as Se, O as Re, P as Be, Q as Ae, R as Le, U as Ie, V as Fe, W as _, X as F, Y as Te } from "./componentLoader-l-cCI7h-.js";
import { c as Q, a as Oe, b as Me, i as We, m as He } from "./agentUtils-rNdv1QzD.js";
import { $ as Ne, a as qe, b as _e, I as ze, E as Ge } from "./TextArea-L6950ltw.js";
const Ue = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", Qe = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Ke = Object.defineProperty, Ye = (e, a) => Ke(e, "name", { value: a, configurable: !0 });
const Ze = Ye((e) => t.jsx(te, { light: Qe, dark: Ue, ...e }), "EntityIcon"), Je = (e, a, n, i, r) => async (s) => {
  if (console.log("agent change triggered for field ", a), a === "userPrompt" || a === "systemPrompt") {
    const o = { ...n, [a]: s.target.value }, l = Q(o), u = { ...o, variables: l };
    i(u), await k(e, u, r);
  } else {
    const o = { ...n, [a]: s.target.value };
    i(o), await k(e, o, r);
  }
}, Xe = (e, a, n, i, r) => async (s) => {
  if (console.log("agent change triggered for field ", a), a === "userPrompt" || a === "systemPrompt") {
    const o = { ...n, [a]: s }, l = Q(o), u = { ...o, variables: l };
    i(u), await k(e, u, r);
  } else {
    const o = { ...n, [a]: s };
    i(o), await k(e, o, r);
  }
}, ea = async (e, a, n, i) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  if (r.status === "ok") {
    console.log(r);
    const s = { ...a, entity: r.selected.module + "." + r.selected.name };
    n(s), await k(e, s, i);
  }
  if (r.status === "none") {
    console.log('"None" selected for Entity');
    const s = { ...a, entity: "" };
    n(s), await k(e, s, i);
  }
}, aa = async (e, a, n, i, r) => {
  const s = await e.ui.elementSelectors.selectDocument({ allowNone: !0 });
  if (s.status === "ok") {
    console.log(s);
    const o = { ...a, [r]: s.selected.module + "." + s.selected.name };
    console.log(s.selected.module + "." + s.selected.name), n(o), await k(e, o, i);
  }
  if (s.status === "none") {
    console.log('"None" selected for ' + r);
    const o = { ...a, [r]: void 0 };
    n(o), await k(e, o, i);
  }
}, ta = (e, a, n, i) => async (r, s) => {
  console.log("variable test value change triggered for index", r);
  const o = [...a.variables];
  o[r] = { ...o[r], testValue: s };
  const l = { ...a, variables: o };
  n(l), await k(e, l, i);
}, k = async (e, a, n) => {
  console.log("Save logic triggered");
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(n, a);
  } catch (i) {
    e.ui.notifications.show({
      title: "Failed to save document",
      message: i.message
    });
  }
}, K = /* @__PURE__ */ new WeakMap();
function na(e, a, n) {
  let { value: i, children: r, "aria-label": s, "aria-labelledby": o, onPressStart: l, onPressEnd: u, onPressChange: p, onPress: h, onPressUp: x, onClick: d } = e;
  const b = e.isDisabled || a.isDisabled;
  let j = r != null, y = s != null || o != null;
  !j && !y && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let w = a.selectedValue === i, v = (A) => {
    A.stopPropagation(), a.setSelectedValue(i);
  }, { pressProps: C, isPressed: $ } = N({
    onPressStart: l,
    onPressEnd: u,
    onPressChange: p,
    onPress: h,
    onPressUp: x,
    onClick: d,
    isDisabled: b
  }), { pressProps: c, isPressed: g } = N({
    onPressStart: l,
    onPressEnd: u,
    onPressChange: p,
    onPressUp: x,
    onClick: d,
    isDisabled: b,
    onPress(A) {
      var O;
      h == null || h(A), a.setSelectedValue(i), (O = n.current) === null || O === void 0 || O.focus();
    }
  }), { focusableProps: P } = ne(R(e, {
    onFocus: () => a.setLastFocusedValue(i)
  }), n), m = R(C, P), V = T(e, {
    labelable: !0
  }), E = -1;
  a.selectedValue != null ? a.selectedValue === i && (E = 0) : (a.lastFocusedValue === i || a.lastFocusedValue == null) && (E = 0), b && (E = void 0);
  let { name: J, form: X, descriptionId: ee, errorMessageId: ae, validationBehavior: H } = K.get(a);
  return se(n, a.defaultSelectedValue, a.setSelectedValue), ie({
    validationBehavior: H
  }, a, n), {
    labelProps: R(c, f.useMemo(() => ({
      onClick: (A) => A.preventDefault(),
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (A) => A.preventDefault()
    }), [])),
    inputProps: R(V, {
      ...m,
      type: "radio",
      name: J,
      form: X,
      tabIndex: E,
      disabled: b,
      required: a.isRequired && H === "native",
      checked: w,
      value: i,
      onChange: v,
      "aria-describedby": [
        e["aria-describedby"],
        a.isInvalid ? ae : null,
        ee
      ].filter(Boolean).join(" ") || void 0
    }),
    isDisabled: b,
    isSelected: w,
    isPressed: $ || g
  };
}
function sa(e, a) {
  let { name: n, form: i, isReadOnly: r, isRequired: s, isDisabled: o, orientation: l = "vertical", validationBehavior: u = "aria" } = e, { direction: p } = re(), { isInvalid: h, validationErrors: x, validationDetails: d } = a.displayValidation, { labelProps: b, fieldProps: j, descriptionProps: y, errorMessageProps: w } = le({
    ...e,
    // Radio group is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span",
    isInvalid: a.isInvalid,
    errorMessage: e.errorMessage || x
  }), v = T(e, {
    labelable: !0
  }), { focusWithinProps: C } = oe({
    onBlurWithin(g) {
      var P;
      (P = e.onBlur) === null || P === void 0 || P.call(e, g), a.selectedValue || a.setLastFocusedValue(null);
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), $ = (g) => {
    let P;
    switch (g.key) {
      case "ArrowRight":
        p === "rtl" && l !== "vertical" ? P = "prev" : P = "next";
        break;
      case "ArrowLeft":
        p === "rtl" && l !== "vertical" ? P = "next" : P = "prev";
        break;
      case "ArrowDown":
        P = "next";
        break;
      case "ArrowUp":
        P = "prev";
        break;
      default:
        return;
    }
    g.preventDefault();
    let m = ce(g.currentTarget, {
      from: g.target,
      accept: (E) => E instanceof ue(E).HTMLInputElement && E.type === "radio"
    }), V;
    P === "next" ? (V = m.nextNode(), V || (m.currentNode = g.currentTarget, V = m.firstChild())) : (V = m.previousNode(), V || (m.currentNode = g.currentTarget, V = m.lastChild())), V && (V.focus(), a.setSelectedValue(V.value));
  }, c = de(n);
  return K.set(a, {
    name: c,
    form: i,
    descriptionId: y.id,
    errorMessageId: w.id,
    validationBehavior: u
  }), {
    radioGroupProps: R(v, {
      // https://www.w3.org/TR/wai-aria-1.2/#radiogroup
      role: "radiogroup",
      onKeyDown: $,
      "aria-invalid": a.isInvalid || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": r || void 0,
      "aria-required": s || void 0,
      "aria-disabled": o || void 0,
      "aria-orientation": l,
      ...j,
      ...C
    }),
    labelProps: b,
    descriptionProps: y,
    errorMessageProps: w,
    isInvalid: h,
    validationErrors: x,
    validationDetails: d
  };
}
let ia = Math.round(Math.random() * 1e10), ra = 0;
function la(e) {
  let a = f.useMemo(() => e.name || `radio-group-${ia}-${++ra}`, [
    e.name
  ]);
  var n;
  let [i, r] = fe(e.value, (n = e.defaultValue) !== null && n !== void 0 ? n : null, e.onChange), [s] = f.useState(i), [o, l] = f.useState(null), u = be({
    ...e,
    value: i
  }), p = (d) => {
    !e.isReadOnly && !e.isDisabled && (r(d), u.commitValidation());
  }, h = u.displayValidation.isInvalid;
  var x;
  return {
    ...u,
    name: a,
    selectedValue: i,
    defaultSelectedValue: e.value !== void 0 ? s : (x = e.defaultValue) !== null && x !== void 0 ? x : null,
    setSelectedValue: p,
    lastFocusedValue: o,
    setLastFocusedValue: l,
    isDisabled: e.isDisabled || !1,
    isReadOnly: e.isReadOnly || !1,
    isRequired: e.isRequired || !1,
    validationState: e.validationState || (h ? "invalid" : null),
    isInvalid: h
  };
}
const oa = /* @__PURE__ */ f.createContext(null), da = /* @__PURE__ */ f.createContext(null), Y = /* @__PURE__ */ f.createContext(null), ca = /* @__PURE__ */ f.forwardRef(function(a, n) {
  [a, n] = G(a, n, oa);
  let { validationBehavior: i } = me(ye) || {};
  var r, s;
  let o = (s = (r = a.validationBehavior) !== null && r !== void 0 ? r : i) !== null && s !== void 0 ? s : "native", l = la({
    ...a,
    validationBehavior: o
  }), [u, p] = Ce(!a["aria-label"] && !a["aria-labelledby"]), { radioGroupProps: h, labelProps: x, descriptionProps: d, errorMessageProps: b, ...j } = sa({
    ...a,
    label: p,
    validationBehavior: o
  }, l), y = U({
    ...a,
    values: {
      orientation: a.orientation || "vertical",
      isDisabled: l.isDisabled,
      isReadOnly: l.isReadOnly,
      isRequired: l.isRequired,
      isInvalid: l.isInvalid,
      state: l
    },
    defaultClassName: "react-aria-RadioGroup"
  }), w = T(a, {
    global: !0
  });
  return /* @__PURE__ */ S.createElement("div", {
    ...R(w, y, h),
    ref: n,
    slot: a.slot || void 0,
    "data-orientation": a.orientation || "vertical",
    "data-invalid": l.isInvalid || void 0,
    "data-disabled": l.isDisabled || void 0,
    "data-readonly": l.isReadOnly || void 0,
    "data-required": l.isRequired || void 0
  }, /* @__PURE__ */ S.createElement(Pe, {
    values: [
      [
        Y,
        l
      ],
      [
        we,
        {
          ...x,
          ref: u,
          elementType: "span"
        }
      ],
      [
        je,
        {
          slots: {
            description: d,
            errorMessage: b
          }
        }
      ],
      [
        Ve,
        j
      ]
    ]
  }, /* @__PURE__ */ S.createElement(qe, null, y.children)));
}), ua = /* @__PURE__ */ f.forwardRef(function(a, n) {
  let { inputRef: i = null, ...r } = a;
  [a, n] = G(r, n, da);
  let s = S.useContext(Y), o = pe(f.useMemo(() => he(i, a.inputRef !== void 0 ? a.inputRef : null), [
    i,
    a.inputRef
  ])), { labelProps: l, inputProps: u, isSelected: p, isDisabled: h, isPressed: x } = na({
    ...ve(a),
    // ReactNode type doesn't allow function children.
    children: typeof a.children == "function" ? !0 : a.children
  }, s, o), { isFocused: d, isFocusVisible: b, focusProps: j } = ge(), y = h || s.isReadOnly, { hoverProps: w, isHovered: v } = xe({
    ...a,
    isDisabled: y
  }), C = U({
    ...a,
    defaultClassName: "react-aria-Radio",
    values: {
      isSelected: p,
      isPressed: x,
      isHovered: v,
      isFocused: d,
      isFocusVisible: b,
      isDisabled: h,
      isReadOnly: s.isReadOnly,
      isInvalid: s.isInvalid,
      isRequired: s.isRequired
    }
  }), $ = T(a, {
    global: !0
  });
  return delete $.id, delete $.onClick, /* @__PURE__ */ S.createElement("label", {
    ...R($, l, w, C),
    ref: n,
    "data-selected": p || void 0,
    "data-pressed": x || void 0,
    "data-hovered": v || void 0,
    "data-focused": d || void 0,
    "data-focus-visible": b || void 0,
    "data-disabled": h || void 0,
    "data-readonly": s.isReadOnly || void 0,
    "data-invalid": s.isInvalid || void 0,
    "data-required": s.isRequired || void 0
  }, /* @__PURE__ */ S.createElement($e, {
    elementType: "span"
  }, /* @__PURE__ */ S.createElement("input", {
    ...R(u, j),
    ref: o
  })), /* @__PURE__ */ S.createElement(Ne.Provider, {
    value: {
      isSelected: p
    }
  }, C.children));
});
var fa = Object.defineProperty, ba = (e, a) => fa(e, "name", { value: a, configurable: !0 });
const pa = ba((e) => t.jsx(ha, { ...e }), "RadioButton"), ha = B(ua)`
    display: flex;
    align-items: center;
    gap: ${L.spacing4};
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
        border: ${L.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorUnselected};
        margin: ${L.spacing1};
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
        border: ${L.spacing1} solid ${({ theme: e }) => e.colorsBorderSelectorSelected};
    }
`;
var va = Object.defineProperty, ga = (e, a) => va(e, "name", { value: a, configurable: !0 });
const xa = ga(({ orientation: e = "horizontal", label: a, description: n, children: i, ...r }) => {
  const { isInvalid: s, validate: o, validationError: l } = De(r);
  return t.jsx(Z, { orientation: e, ...r, isInvalid: s, validate: o, children: t.jsx(ke, { label: a, description: n, realtimeValidationError: l, children: t.jsx($a, { children: i }) }) });
}, "RadioButtonGroup"), Z = B(ca)`
    &[data-orientation="vertical"] {
        flex-direction: column;
    }

    &[data-orientation="horizontal"] {
        flex-direction: row;
        align-items: center;
    }
`, $a = B.div`
    display: flex;
    flex-direction: row;
    gap: ${L.spacing8};
    padding: ${L.spacing4} 0;

    ${Z}[data-orientation="vertical"] & {
        flex-direction: column;
    }
`, ma = ({
  label: e,
  ariaLabel: a,
  options: n,
  value: i,
  onChange: r,
  hasMarginTop: s = !1
}) => {
  const o = s ? 8 : 0;
  return /* @__PURE__ */ t.jsxs(I, { marginTop: o, children: [
    e && /* @__PURE__ */ t.jsx(D, { children: /* @__PURE__ */ t.jsx(W, { children: e }) }),
    /* @__PURE__ */ t.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
      xa,
      {
        value: i,
        onChange: r,
        "aria-label": a,
        children: n.map((l) => /* @__PURE__ */ t.jsx(
          pa,
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
}, ya = B(_e).withConfig({
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
`, Ca = B.div`
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
`, Pa = B.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 3px;
`, wa = B.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: -1;
  border: 1px solid transparent;
`, M = ({
  label: e,
  ariaLabel: a,
  value: n,
  onChange: i,
  placeholder: r,
  readOnly: s = !1,
  defaultHeightRows: o,
  highlightRules: l
}) => {
  const u = f.useRef(null), p = f.useRef(null), [h, x] = f.useState(0), d = o || 5, b = l && l.length > 0, j = () => {
    if (!b) return null;
    const v = [];
    l.forEach((c, g) => {
      Array.from(n.matchAll(c.pattern)).forEach((m) => {
        m.index !== void 0 && v.push({
          start: m.index,
          end: m.index + m[0].length,
          text: m[0],
          style: c.style,
          ruleIndex: g
        });
      });
    }), v.sort((c, g) => c.start - g.start);
    const C = [];
    let $ = 0;
    return v.forEach((c, g) => {
      c.start > $ && C.push(
        /* @__PURE__ */ t.jsx("span", { children: n.slice($, c.start) }, `text-${$}-${c.start}`)
      ), c.start >= $ && (C.push(
        /* @__PURE__ */ t.jsx("span", { style: c.style, children: c.text }, `placeholder-${c.ruleIndex}-${g}`)
      ), $ = c.end);
    }), $ < n.length && C.push(
      /* @__PURE__ */ t.jsx("span", { children: n.slice($) }, `text-${$}-end`)
    ), C;
  }, y = f.useCallback(() => {
    if (u.current) {
      const v = u.current.offsetWidth - u.current.clientWidth;
      x(v);
    }
  }, []), w = f.useCallback(() => {
    if (u.current && p.current) {
      const v = u.current.scrollTop;
      p.current.style.setProperty("--scroll-offset", `-${v}px`);
    }
  }, []);
  return f.useEffect(() => {
    const v = u.current;
    if (v) {
      y();
      const C = new ResizeObserver(y);
      return C.observe(v), v.addEventListener("scroll", w), () => {
        C.disconnect(), v.removeEventListener("scroll", w);
      };
    }
  }, [w, y]), /* @__PURE__ */ t.jsxs(I, { marginBottom: -3, children: [
    e && /* @__PURE__ */ t.jsx(D, { children: /* @__PURE__ */ t.jsx(W, { children: e }) }),
    /* @__PURE__ */ t.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ t.jsxs(Pa, { children: [
      b && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(wa, {}),
        /* @__PURE__ */ t.jsx(
          Ca,
          {
            ref: p,
            style: { paddingRight: `${2 + h}px` },
            children: j()
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx(
        ya,
        {
          "aria-label": a,
          ref: u,
          value: n,
          placeholder: r,
          readOnly: s,
          onChange: i,
          rows: d,
          hasHighlighting: b
        }
      )
    ] }) })
  ] });
}, z = ({
  label: e,
  ariaLabel: a,
  value: n,
  buttonCaption: i,
  onClick: r,
  buttonCaptionSecondary: s,
  onClickSecondary: o,
  placeholder: l,
  hasMarginTop: u = !1,
  icon: p
}) => {
  const h = u ? 8 : 0;
  return /* @__PURE__ */ t.jsxs(I, { marginTop: h, children: [
    e && /* @__PURE__ */ t.jsx(D, { children: /* @__PURE__ */ t.jsx(W, { children: e }) }),
    /* @__PURE__ */ t.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ t.jsxs(I, { children: [
      /* @__PURE__ */ t.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
        Ee,
        {
          ariaLabel: a,
          value: n,
          placeholder: l,
          readOnly: !0,
          icon: p
        }
      ) }),
      /* @__PURE__ */ t.jsx(
        q,
        {
          onPress: r,
          children: i
        }
      ),
      s && /* @__PURE__ */ t.jsx(
        q,
        {
          onPress: o,
          children: s
        }
      )
    ] }) })
  ] });
}, ja = ({
  label: e,
  ariaLabel: a,
  value: n,
  onChange: i,
  placeholder: r,
  readOnly: s = !1,
  badgeBackgroundColor: o,
  badgeBorderColor: l
}) => /* @__PURE__ */ t.jsxs(I, { children: [
  e && /* @__PURE__ */ t.jsx(D, { children: /* @__PURE__ */ t.jsx(Se, { children: /* @__PURE__ */ t.jsx(Re, { backgroundColor: o, borderColor: l, children: "{{" + e + "}}" }) }) }),
  /* @__PURE__ */ t.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
    Be,
    {
      value: n,
      placeholder: r,
      isReadOnly: s,
      onChange: i,
      "aria-label": a
    }
  ) })
] }), Va = B.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, Da = ({ variables: e, onVariableChange: a }) => e.length > 0 ? /* @__PURE__ */ t.jsx(Va, { children: e.map((n, i) => /* @__PURE__ */ t.jsx(
  ja,
  {
    label: n.key,
    ariaLabel: "variable-" + n.key,
    value: n.testValue,
    onChange: (r) => a(i, r),
    badgeBackgroundColor: n.backgroundColor,
    badgeBorderColor: n.borderColor
  },
  `${n.key}-${i}`
)) }) : null, ka = Oe(), Ea = [
  { caption: "Chat", value: "Chat" },
  { caption: "Task", value: "Task" }
], Sa = ({ studioPro: e, documentId: a }) => {
  const n = e.ui.messageBoxes, i = e.app.model.customBlobDocuments, [r, s] = f.useState(0), [o, l] = f.useState({}), [u, p] = f.useState(!1), [h, x] = f.useState(!0), [d, b] = f.useState(ka), j = f.useMemo(() => Me(d.variables), [d.variables]), y = f.useCallback(
    (c) => Je(e, c, d, b, a),
    [e, d, b, a]
  ), w = f.useCallback(
    (c) => Xe(e, c, d, b, a),
    [e, d, b, a]
  ), v = f.useCallback(
    () => ea(e, d, b, a),
    [e, d, b, a]
  ), C = f.useCallback(
    () => aa(e, d, b, a, "modelQualifiedName"),
    [e, d, b, a]
  ), $ = f.useCallback(
    ta(e, d, b, a),
    [e, d, b, a]
  );
  return f.useEffect(() => {
    const c = (g) => {
      const { documents: P } = g;
      P.some((m) => m.id === a) && s((m) => m + 1);
    };
    return i.addEventListener("documentsChanged", c), () => {
      i.removeEventListener("documentsChanged", c);
    };
  }, []), f.useEffect(() => {
    i.getDocumentById(a).then(async (c) => {
      if (c && !("error" in c)) {
        const g = c.document.contents;
        b(g), x(await We(e, g)), l({}), p(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch((c) => {
      n.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
    });
  }, [r]), /* @__PURE__ */ t.jsx(Le, { studioPro: e, children: /* @__PURE__ */ t.jsxs(Ie, { children: [
    !u && /* @__PURE__ */ t.jsx("span", { children: "Loading document content..." }),
    u && /* @__PURE__ */ t.jsxs(Fe, { children: [
      /* @__PURE__ */ t.jsxs(_, { children: [
        /* @__PURE__ */ t.jsx(
          z,
          {
            ariaLabel: "Model",
            label: "Model",
            value: d.modelQualifiedName ? d.modelQualifiedName : "",
            icon: d.modelQualifiedName ? He : void 0,
            buttonCaption: "Select...",
            onClick: C,
            buttonCaptionSecondary: "Settings",
            onClickSecondary: () => {
            }
          }
        ),
        /* @__PURE__ */ t.jsx(F, { label: "System prompt", children: /* @__PURE__ */ t.jsx(
          M,
          {
            ariaLabel: "System prompt",
            value: d.systemPrompt,
            onChange: y("systemPrompt"),
            highlightRules: j
          }
        ) }),
        /* @__PURE__ */ t.jsx(F, { label: "User prompt", children: /* @__PURE__ */ t.jsx(
          M,
          {
            ariaLabel: "User prompt",
            value: d.userPrompt + "",
            onChange: y("userPrompt"),
            highlightRules: j
          }
        ) })
      ] }),
      /* @__PURE__ */ t.jsxs(_, { children: [
        /* @__PURE__ */ t.jsxs(F, { label: "Variables", children: [
          /* @__PURE__ */ t.jsx(
            Da,
            {
              variables: d.variables,
              onVariableChange: $
            }
          ),
          d.variables.length === 0 && /* @__PURE__ */ t.jsx(ze, { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." })
        ] }),
        /* @__PURE__ */ t.jsxs(F, { label: "General", children: [
          /* @__PURE__ */ t.jsx(
            Te,
            {
              label: "Agent ID",
              ariaLabel: "Agent ID",
              value: a,
              onChange: () => {
              },
              readOnly: !0
            }
          ),
          /* @__PURE__ */ t.jsx(
            M,
            {
              label: "Documentation",
              ariaLabel: "Documentation",
              value: d.description,
              onChange: y("description"),
              defaultHeightRows: 3
            }
          ),
          /* @__PURE__ */ t.jsx(
            ma,
            {
              options: Ea,
              label: "Agent type",
              ariaLabel: "Agent type",
              onChange: w("usageType"),
              value: d.usageType
            }
          ),
          /* @__PURE__ */ t.jsx(
            z,
            {
              ariaLabel: "Entity",
              label: "Entity",
              value: d.entity,
              icon: d.entity ? /* @__PURE__ */ t.jsx(Ze, {}) : void 0,
              onClick: v,
              buttonCaption: "Select..."
            }
          ),
          h || /* @__PURE__ */ t.jsx(Ge, { children: `Entity with name ${d.entity} does not exist (anymore). Please select a valid entity.` })
        ] })
      ] })
    ] })
  ] }) });
}, La = Ae(Sa);
export {
  La as component
};
//# sourceMappingURL=agentEdit.js.map
