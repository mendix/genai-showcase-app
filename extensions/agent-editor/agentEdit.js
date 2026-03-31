import { r as M, $ as Xt, a as il, b as He, c as Mr, d as ll, e as Rr, f as ol, g as jr, h as al, i as sl, j as ul, k as cl, l as fl, m as hl, n as pl, o as dl, p as Dn, q as ml, s as gl, t as xl, u as Tt, v as yl, w as y, x as Te, y as kl, z as ne, A as Fr, D as Ie, B as zr, E as bl, G as qe, T as wl, C as Mn, L as Cl, S as vl, F as Sl, H as El, I as Il, J as Tl, K as Rn, M as Ll, N as Al, P as Pl, O as Dl } from "./Icon-B83cP35T.js";
import { D as Ml, P as Rl, a as jl, e as Fl, i as zl, g as Or, m as Ol, c as _l, b as Bl, d as $l, T as jn, f as Nl, h as Vl, j as Hl, k as ql, l as Ul, n as Wl, o as Fn, p as Zl, q as Yl, t as Gl, u as Xl } from "./index-CiUZK5eE.js";
import { c as Kl, C as Ql } from "./componentLoader-C5js17K5.js";
import { m as Jl } from "./modelUtils-DbaOd0FB.js";
import { I as _r, W as Br, E as eo } from "./Banner-D-UDHPHw.js";
import { B as We, I as zn, T as to } from "./TextWithIcon-CCknD1LS.js";
import { h as no, T as On } from "./toolHandlers-CeY3sqjF.js";
import { T as Lt } from "./TextInputWithButton-DgVpQKXA.js";
import { i as ro, r as Me } from "./userPreferences-BV8i5uIO.js";
import { k as io, u as lo, T as oo, D as At } from "./Table-Dft-J4Yp.js";
import { I as ao } from "./ComboBox-D6X5csBa.js";
import { n as so } from "./MicroflowIcon-BX1yYH6c.js";
const uo = ({
  studioPro: e,
  dependentIds: t,
  onDependentDocumentsChanged: n,
  watchProjectSettings: r,
  watchDomainModelModules: i
}) => {
  const l = M.useRef(n);
  l.current = n;
  const o = M.useRef(t);
  o.current = t;
  const a = M.useRef(i);
  a.current = i;
  const u = M.useRef(r);
  u.current = r, M.useEffect(() => {
    const s = ({ documents: f }) => {
      const c = [];
      for (const p of f)
        a.current && p.documentType === Ml && p.moduleName && a.current.includes(p.moduleName) ? c.push("domainModel") : u.current && p.documentType === Rl ? c.push("projectSettings") : o.current.includes(p.documentId) && c.push(p.documentId);
      c.length > 0 && l.current(c);
    };
    return e.app.projectChanges.addEventListener("documentsChanged", s), () => {
      e.app.projectChanges.removeEventListener("documentsChanged", s);
    };
  }, [e.app.projectChanges]);
};
function co(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: u, "aria-label": s, "aria-labelledby": f, validationState: c = "valid", isInvalid: p, onPressStart: h, onPressEnd: g, onPressChange: C, onPress: k, onPressUp: x, onClick: E } = e, S = (V) => {
    V.stopPropagation(), t.setSelected(V.target.checked);
  }, j = u != null, A = s != null || f != null;
  !j && !A && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: w, isPressed: O } = Xt({
    onPressStart: h,
    onPressEnd: g,
    onPressChange: C,
    onPress: k,
    onPressUp: x,
    onClick: E,
    isDisabled: r
  }), { pressProps: N, isPressed: _ } = Xt({
    onPressStart: h,
    onPressEnd: g,
    onPressChange: C,
    onPressUp: x,
    onClick: E,
    onPress(V) {
      var R;
      k == null || k(V), t.toggle(), (R = n.current) === null || R === void 0 || R.focus();
    },
    isDisabled: r || i
  }), { focusableProps: b } = il(e, n), P = He(w, b), D = Mr(e, {
    labelable: !0
  });
  return ll(n, t.defaultSelected, t.setSelected), {
    labelProps: He(N, {
      onClick: (V) => V.preventDefault()
    }),
    inputProps: He(D, {
      "aria-invalid": p || c === "invalid" || void 0,
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
      ...P
    }),
    isSelected: t.isSelected,
    isPressed: O || _,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: p || c === "invalid"
  };
}
function $r(e, t, n) {
  let r = Rr({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: u, isSelected: s, isPressed: f, isDisabled: c, isReadOnly: p } = co({
    ...e,
    isInvalid: i
  }, t, n);
  ol(e, r, n);
  let { isIndeterminate: h, isRequired: g, validationBehavior: C = "aria" } = e;
  M.useEffect(() => {
    n.current && (n.current.indeterminate = !!h);
  });
  let { pressProps: k } = Xt({
    isDisabled: c || p,
    onPress() {
      let { [jr]: x } = e, { commitValidation: E } = x || r;
      E();
    }
  });
  return {
    labelProps: He(a, k, M.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (x) => x.preventDefault()
    }), [])),
    inputProps: {
      ...u,
      checked: s,
      "aria-required": g && C === "aria" || void 0,
      required: g && C === "native"
    },
    isSelected: s,
    isPressed: f,
    isDisabled: c,
    isReadOnly: p,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
const fo = /* @__PURE__ */ new WeakMap();
function Nr(e = {}) {
  let { isReadOnly: t } = e, [n, r] = al(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = M.useState(n);
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
function ho(e, t, n) {
  const r = Nr({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(x) {
      x ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(x);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: u } = fo.get(t);
  var s;
  u = (s = e.validationBehavior) !== null && s !== void 0 ? s : u;
  let { realtimeValidation: f } = Rr({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = M.useRef(sl), p = () => {
    t.setInvalid(e.value, f.isInvalid ? f : c.current);
  };
  M.useEffect(p);
  let h = t.realtimeValidation.isInvalid ? t.realtimeValidation : f, g = u === "native" ? t.displayValidation : h;
  var C;
  let k = $r({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (C = e.isRequired) !== null && C !== void 0 ? C : t.isRequired,
    validationBehavior: u,
    [jr]: {
      realtimeValidation: h,
      displayValidation: g,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(x) {
        c.current = x, p();
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
const po = /* @__PURE__ */ M.createContext(null), mo = /* @__PURE__ */ M.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = ul(i, n, cl);
  let { validationBehavior: l } = fl(hl) || {};
  var o, a;
  let u = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", s = M.useContext(po), f = pl(M.useMemo(() => dl(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: c, inputProps: p, isSelected: h, isDisabled: g, isReadOnly: C, isPressed: k, isInvalid: x } = s ? ho({
    ...Dn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, f) : $r({
    ...Dn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: u
  }, Nr(t), f), { isFocused: E, isFocusVisible: S, focusProps: j } = ml(), A = g || C, { hoverProps: w, isHovered: O } = gl({
    ...t,
    isDisabled: A
  }), N = xl({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: h,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: k,
      isHovered: O,
      isFocused: E,
      isFocusVisible: S,
      isDisabled: g,
      isReadOnly: C,
      isInvalid: x,
      isRequired: t.isRequired || !1
    }
  }), _ = Mr(t, {
    global: !0
  });
  return delete _.id, delete _.onClick, /* @__PURE__ */ Tt.createElement("label", {
    ...He(_, c, w, N),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": h || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": k || void 0,
    "data-hovered": O || void 0,
    "data-focused": E || void 0,
    "data-focus-visible": S || void 0,
    "data-disabled": g || void 0,
    "data-readonly": C || void 0,
    "data-invalid": x || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Tt.createElement(yl, {
    elementType: "span"
  }, /* @__PURE__ */ Tt.createElement("input", {
    ...He(p, j),
    ref: f
  })), N.children);
}), go = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", xo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var yo = Object.defineProperty, ko = (e, t) => yo(e, "name", { value: t, configurable: !0 });
const bo = ko((e) => y.jsx(Te, { light: xo, dark: go, ...e }), "EntityIcon"), wo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", Co = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var vo = Object.defineProperty, So = (e, t) => vo(e, "name", { value: t, configurable: !0 });
const Eo = So((e) => y.jsx(Te, { light: Co, dark: wo, ...e }), "EntityNonPersistableIcon"), Io = (e, t, n) => {
  const [r, i] = M.useState(void 0), [l, o] = M.useState(!1), [a, u] = M.useState(!1), [s, f] = M.useState(void 0), c = M.useCallback(
    async (p) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: jl,
          title: "App is not running",
          message: "Please run the app to use the playground."
        });
        return;
      }
      o(!0), i(void 0), u(!1), f(void 0);
      try {
        const h = await Fl(e, t, p);
        if (h === void 0)
          throw new Error("No response received from the test action.");
        i(h);
      } catch {
        u(!0), f(new Error("Test action failed. Please check the runtime logs for more details."));
      } finally {
        o(!1);
      }
    },
    [e, n, t]
  );
  return { data: r, isPending: l, isError: a, error: s, execute: c };
}, To = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt") && (l.variables = await _l(e, l)), r(l), l;
}, Lo = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const l = await Bl(e, t.variables, i);
    i = { ...i, variables: l }, n(i);
  }
  return i;
}, Ao = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Ol }
  });
  let i;
  return r.status === "ok" && (i = {
    ...t,
    model: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, model: void 0 }), i && n(i), i;
}, Pt = async (e, t, n) => {
  switch (e) {
    case "model": {
      if (!n.model)
        return "Please select a model.";
      const r = await Or(t, n.model.documentId);
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
      if (!await zl(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "userPrompt":
      if (!n.userPrompt)
        return "Please provide a user prompt.";
      break;
    default:
      return !0;
  }
  return !0;
}, Po = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await Or(e, t.documentId))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, Do = async (e, t, n, r) => {
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
}, _n = async (e, t, n, r, i) => {
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
    i && n.tools ? u = n.tools.map((f) => f.id === i ? a : f) : u = [...n.tools || [], a], u.sort((f, c) => f.name.localeCompare(c.name));
    const s = { ...n, tools: u };
    return r(s), s;
  } else
    return null;
}, Mo = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const l = t.tools.filter((a) => a.id !== r), o = { ...t, tools: l };
  return n(o), o;
}, Ro = kl`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, jo = ne.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, Dt = ne.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${Ro} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, Fo = () => /* @__PURE__ */ y.jsxs(jo, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ y.jsx(Dt, { delay: "0s" }),
  /* @__PURE__ */ y.jsx(Dt, { delay: "0.2s" }),
  /* @__PURE__ */ y.jsx(Dt, { delay: "0.4s" })
] });
function zo(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Oo = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, _o = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Bo = {};
function Bn(e, t) {
  return (Bo.jsx ? _o : Oo).test(e);
}
const $o = /[ \t\n\f\r]/g;
function No(e) {
  return typeof e == "object" ? e.type === "text" ? $n(e.value) : !1 : $n(e);
}
function $n(e) {
  return e.replace($o, "") === "";
}
class ut {
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
ut.prototype.normal = {};
ut.prototype.property = {};
ut.prototype.space = void 0;
function Vr(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new ut(n, r, t);
}
function Kt(e) {
  return e.toLowerCase();
}
class se {
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
se.prototype.attribute = "";
se.prototype.booleanish = !1;
se.prototype.boolean = !1;
se.prototype.commaOrSpaceSeparated = !1;
se.prototype.commaSeparated = !1;
se.prototype.defined = !1;
se.prototype.mustUseProperty = !1;
se.prototype.number = !1;
se.prototype.overloadedBoolean = !1;
se.prototype.property = "";
se.prototype.spaceSeparated = !1;
se.prototype.space = void 0;
let Vo = 0;
const $ = _e(), J = _e(), Qt = _e(), I = _e(), K = _e(), Ue = _e(), he = _e();
function _e() {
  return 2 ** ++Vo;
}
const Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: $,
  booleanish: J,
  commaOrSpaceSeparated: he,
  commaSeparated: Ue,
  number: I,
  overloadedBoolean: Qt,
  spaceSeparated: K
}, Symbol.toStringTag, { value: "Module" })), Mt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Jt)
);
class un extends se {
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
    if (super(t, n), Nn(this, "space", i), typeof r == "number")
      for (; ++l < Mt.length; ) {
        const o = Mt[l];
        Nn(this, Mt[l], (r & Jt[o]) === Jt[o]);
      }
  }
}
un.prototype.defined = !0;
function Nn(e, t, n) {
  n && (e[t] = n);
}
function Ye(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new un(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[Kt(r)] = r, n[Kt(l.attribute)] = r;
  }
  return new ut(t, n, e.space);
}
const Hr = Ye({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: J,
    ariaAutoComplete: null,
    ariaBusy: J,
    ariaChecked: J,
    ariaColCount: I,
    ariaColIndex: I,
    ariaColSpan: I,
    ariaControls: K,
    ariaCurrent: null,
    ariaDescribedBy: K,
    ariaDetails: null,
    ariaDisabled: J,
    ariaDropEffect: K,
    ariaErrorMessage: null,
    ariaExpanded: J,
    ariaFlowTo: K,
    ariaGrabbed: J,
    ariaHasPopup: null,
    ariaHidden: J,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: K,
    ariaLevel: I,
    ariaLive: null,
    ariaModal: J,
    ariaMultiLine: J,
    ariaMultiSelectable: J,
    ariaOrientation: null,
    ariaOwns: K,
    ariaPlaceholder: null,
    ariaPosInSet: I,
    ariaPressed: J,
    ariaReadOnly: J,
    ariaRelevant: null,
    ariaRequired: J,
    ariaRoleDescription: K,
    ariaRowCount: I,
    ariaRowIndex: I,
    ariaRowSpan: I,
    ariaSelected: J,
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
function qr(e, t) {
  return t in e ? e[t] : t;
}
function Ur(e, t) {
  return qr(e, t.toLowerCase());
}
const Ho = Ye({
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
    accept: Ue,
    acceptCharset: K,
    accessKey: K,
    action: null,
    allow: null,
    allowFullScreen: $,
    allowPaymentRequest: $,
    allowUserMedia: $,
    alt: null,
    as: null,
    async: $,
    autoCapitalize: null,
    autoComplete: K,
    autoFocus: $,
    autoPlay: $,
    blocking: K,
    capture: null,
    charSet: null,
    checked: $,
    cite: null,
    className: K,
    cols: I,
    colSpan: null,
    content: null,
    contentEditable: J,
    controls: $,
    controlsList: K,
    coords: I | Ue,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: $,
    defer: $,
    dir: null,
    dirName: null,
    disabled: $,
    download: Qt,
    draggable: J,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: $,
    formTarget: null,
    headers: K,
    height: I,
    hidden: Qt,
    high: I,
    href: null,
    hrefLang: null,
    htmlFor: K,
    httpEquiv: K,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: $,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: $,
    itemId: null,
    itemProp: K,
    itemRef: K,
    itemScope: $,
    itemType: K,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: $,
    low: I,
    manifest: null,
    max: null,
    maxLength: I,
    media: null,
    method: null,
    min: null,
    minLength: I,
    multiple: $,
    muted: $,
    name: null,
    nonce: null,
    noModule: $,
    noValidate: $,
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
    open: $,
    optimum: I,
    pattern: null,
    ping: K,
    placeholder: null,
    playsInline: $,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: $,
    referrerPolicy: null,
    rel: K,
    required: $,
    reversed: $,
    rows: I,
    rowSpan: I,
    sandbox: K,
    scope: null,
    scoped: $,
    seamless: $,
    selected: $,
    shadowRootClonable: $,
    shadowRootDelegatesFocus: $,
    shadowRootMode: null,
    shape: null,
    size: I,
    sizes: null,
    slot: null,
    span: I,
    spellCheck: J,
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
    typeMustMatch: $,
    useMap: null,
    value: J,
    width: I,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: K,
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
    compact: $,
    // Lists. Use CSS to reduce space between items instead
    declare: $,
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
    noResize: $,
    // `<frame>`
    noHref: $,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: $,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: $,
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
    scrolling: J,
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
    disablePictureInPicture: $,
    disableRemotePlayback: $,
    prefix: null,
    property: null,
    results: I,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Ur
}), qo = Ye({
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
    about: he,
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
    className: K,
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
    download: $,
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
    g1: Ue,
    g2: Ue,
    glyphName: Ue,
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
    kernelMatrix: he,
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
    ping: K,
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
    property: he,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: he,
    rev: he,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: he,
    requiredFeatures: he,
    requiredFonts: he,
    requiredFormats: he,
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
    strokeDashArray: he,
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
    systemLanguage: he,
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
    typeOf: he,
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
  transform: qr
}), Wr = Ye({
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
}), Zr = Ye({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Ur
}), Yr = Ye({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Uo = {
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
}, Wo = /[A-Z]/g, Vn = /-[a-z]/g, Zo = /^data[-\w.:]+$/i;
function Yo(e, t) {
  const n = Kt(t);
  let r = t, i = se;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Zo.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(Vn, Xo);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!Vn.test(l)) {
        let o = l.replace(Wo, Go);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = un;
  }
  return new i(r, t);
}
function Go(e) {
  return "-" + e.toLowerCase();
}
function Xo(e) {
  return e.charAt(1).toUpperCase();
}
const Ko = Vr([Hr, Ho, Wr, Zr, Yr], "html"), cn = Vr([Hr, qo, Wr, Zr, Yr], "svg");
function Qo(e) {
  return e.join(" ").trim();
}
var $e = {}, Rt, Hn;
function Jo() {
  if (Hn) return Rt;
  Hn = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", f = "*", c = "", p = "comment", h = "declaration";
  function g(k, x) {
    if (typeof k != "string")
      throw new TypeError("First argument must be a string");
    if (!k) return [];
    x = x || {};
    var E = 1, S = 1;
    function j(R) {
      var L = R.match(t);
      L && (E += L.length);
      var W = R.lastIndexOf(u);
      S = ~W ? R.length - W : S + R.length;
    }
    function A() {
      var R = { line: E, column: S };
      return function(L) {
        return L.position = new w(R), _(), L;
      };
    }
    function w(R) {
      this.start = R, this.end = { line: E, column: S }, this.source = x.source;
    }
    w.prototype.content = k;
    function O(R) {
      var L = new Error(
        x.source + ":" + E + ":" + S + ": " + R
      );
      if (L.reason = R, L.filename = x.source, L.line = E, L.column = S, L.source = k, !x.silent) throw L;
    }
    function N(R) {
      var L = R.exec(k);
      if (L) {
        var W = L[0];
        return j(W), k = k.slice(W.length), L;
      }
    }
    function _() {
      N(n);
    }
    function b(R) {
      var L;
      for (R = R || []; L = P(); )
        L !== !1 && R.push(L);
      return R;
    }
    function P() {
      var R = A();
      if (!(s != k.charAt(0) || f != k.charAt(1))) {
        for (var L = 2; c != k.charAt(L) && (f != k.charAt(L) || s != k.charAt(L + 1)); )
          ++L;
        if (L += 2, c === k.charAt(L - 1))
          return O("End of comment missing");
        var W = k.slice(2, L - 2);
        return S += 2, j(W), k = k.slice(L), S += 2, R({
          type: p,
          comment: W
        });
      }
    }
    function D() {
      var R = A(), L = N(r);
      if (L) {
        if (P(), !N(i)) return O("property missing ':'");
        var W = N(l), Q = R({
          type: h,
          property: C(L[0].replace(e, c)),
          value: W ? C(W[0].replace(e, c)) : c
        });
        return N(o), Q;
      }
    }
    function V() {
      var R = [];
      b(R);
      for (var L; L = D(); )
        L !== !1 && (R.push(L), b(R));
      return R;
    }
    return _(), V();
  }
  function C(k) {
    return k ? k.replace(a, c) : c;
  }
  return Rt = g, Rt;
}
var qn;
function ea() {
  if (qn) return $e;
  qn = 1;
  var e = $e && $e.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty($e, "__esModule", { value: !0 }), $e.default = n;
  const t = e(Jo());
  function n(r, i) {
    let l = null;
    if (!r || typeof r != "string")
      return l;
    const o = (0, t.default)(r), a = typeof i == "function";
    return o.forEach((u) => {
      if (u.type !== "declaration")
        return;
      const { property: s, value: f } = u;
      a ? i(s, f, u) : f && (l = l || {}, l[s] = f);
    }), l;
  }
  return $e;
}
var Je = {}, Un;
function ta() {
  if (Un) return Je;
  Un = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(s) {
    return !s || n.test(s) || e.test(s);
  }, o = function(s, f) {
    return f.toUpperCase();
  }, a = function(s, f) {
    return "".concat(f, "-");
  }, u = function(s, f) {
    return f === void 0 && (f = {}), l(s) ? s : (s = s.toLowerCase(), f.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, o));
  };
  return Je.camelCase = u, Je;
}
var et, Wn;
function na() {
  if (Wn) return et;
  Wn = 1;
  var e = et && et.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(ea()), n = ta();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (o[(0, n.camelCase)(a, l)] = u);
    }), o;
  }
  return r.default = r, et = r, et;
}
var ra = na();
const ia = /* @__PURE__ */ Fr(ra), Gr = Xr("end"), fn = Xr("start");
function Xr(e) {
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
function Kr(e) {
  const t = fn(e), n = Gr(e);
  if (t && n)
    return { start: t, end: n };
}
function rt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Zn(e.position) : "start" in e || "end" in e ? Zn(e) : "line" in e || "column" in e ? en(e) : "";
}
function en(e) {
  return Yn(e && e.line) + ":" + Yn(e && e.column);
}
function Zn(e) {
  return en(e && e.start) + "-" + en(e && e.end);
}
function Yn(e) {
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
      const u = r.indexOf(":");
      u === -1 ? l.ruleId = r : (l.source = r.slice(0, u), l.ruleId = r.slice(u + 1));
    }
    if (!l.place && l.ancestors && l.ancestors) {
      const u = l.ancestors[l.ancestors.length - 1];
      u && (l.place = u.position);
    }
    const a = l.place && "start" in l.place ? l.place.start : l.place;
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = rt(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
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
const hn = {}.hasOwnProperty, la = /* @__PURE__ */ new Map(), oa = /[A-Z]/g, aa = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), sa = /* @__PURE__ */ new Set(["td", "th"]), Qr = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function ua(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = xa(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = ga(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? cn : Ko,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = Jr(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function Jr(e, t, n) {
  if (t.type === "element")
    return ca(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return fa(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return pa(e, t, n);
  if (t.type === "mdxjsEsm")
    return ha(e, t);
  if (t.type === "root")
    return da(e, t, n);
  if (t.type === "text")
    return ma(e, t);
}
function ca(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = cn, e.schema = i), e.ancestors.push(t);
  const l = ti(e, t.tagName, !1), o = ya(e, t);
  let a = dn(e, t);
  return aa.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !No(u) : !0;
  })), ei(e, o, l, t), pn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function fa(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  ot(e, t.position);
}
function ha(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  ot(e, t.position);
}
function pa(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = cn, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : ti(e, t.name, !0), o = ka(e, t), a = dn(e, t);
  return ei(e, o, l, t), pn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function da(e, t, n) {
  const r = {};
  return pn(r, dn(e, t)), e.create(t, e.Fragment, r, n);
}
function ma(e, t) {
  return t.value;
}
function ei(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function pn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function ga(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const s = Array.isArray(o.children) ? n : t;
    return a ? s(l, o, a) : s(l, o);
  }
}
function xa(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), u = fn(r);
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
function ya(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && hn.call(t.properties, i)) {
      const l = ba(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && sa.has(t.tagName) ? r = a : n[o] = a;
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
function ka(e, t) {
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
        ot(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          ot(e, t.position);
      else
        l = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return n;
}
function dn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : la;
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
    const a = Jr(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function ba(e, t, n) {
  const r = Yo(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? zo(n) : Qo(n)), r.property === "style") {
      let i = typeof n == "object" ? n : wa(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = Ca(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Uo[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function wa(e, t) {
  try {
    return ia(t, { reactCompat: !0 });
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
    throw i.file = e.filePath || void 0, i.url = Qr + "#cannot-parse-style-attribute", i;
  }
}
function ti(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = Bn(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = Bn(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return hn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  ot(e);
}
function ot(e, t) {
  const n = new ie(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Qr + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ca(e) {
  const t = {};
  let n;
  for (n in e)
    hn.call(e, n) && (t[va(n)] = e[n]);
  return t;
}
function va(e) {
  let t = e.replace(oa, Sa);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Sa(e) {
  return "-" + e.toLowerCase();
}
const jt = {
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
}, Ea = {};
function mn(e, t) {
  const n = Ea, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return ni(e, r, i);
}
function ni(e, t, n) {
  if (Ia(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Gn(e.children, t, n);
  }
  return Array.isArray(e) ? Gn(e, t, n) : "";
}
function Gn(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = ni(e[i], t, n);
  return r.join("");
}
function Ia(e) {
  return !!(e && typeof e == "object");
}
const Xn = document.createElement("i");
function gn(e) {
  const t = "&" + e + ";";
  Xn.innerHTML = t;
  const n = Xn.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function pe(e, t, n, r) {
  const i = e.length;
  let l = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4;
}
function me(e, t) {
  return e.length > 0 ? (pe(e, e.length, 0, t), e) : t;
}
const Kn = {}.hasOwnProperty;
function ri(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Ta(t, e[n]);
  return t;
}
function Ta(e, t) {
  let n;
  for (n in t) {
    const i = (Kn.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        Kn.call(i, o) || (i[o] = []);
        const a = l[o];
        La(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function La(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  pe(e, 0, 0, r);
}
function ii(e, t) {
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
function ke(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const le = Re(/[A-Za-z]/), re = Re(/[\dA-Za-z]/), Aa = Re(/[#-'*+\--9=?A-Z^-~]/);
function kt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const tn = Re(/\d/), Pa = Re(/[\dA-Fa-f]/), Da = Re(/[!-/:-@[-`{-~]/);
function F(e) {
  return e !== null && e < -2;
}
function G(e) {
  return e !== null && (e < 0 || e === 32);
}
function H(e) {
  return e === -2 || e === -1 || e === 32;
}
const Ct = Re(new RegExp("\\p{P}|\\p{S}", "u")), Oe = Re(/\s/);
function Re(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Ge(e) {
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
function U(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let l = 0;
  return o;
  function o(u) {
    return H(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return H(u) && l++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const Ma = {
  tokenize: Ra
};
function Ra(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), U(e, t, "linePrefix");
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
    return F(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o);
  }
}
const ja = {
  tokenize: Fa
}, Qn = {
  tokenize: za
};
function Fa(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(S) {
    if (r < n.length) {
      const j = n[r];
      return t.containerState = j[1], e.attempt(j[0].continuation, u, s)(S);
    }
    return s(S);
  }
  function u(S) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && E();
      const j = t.events.length;
      let A = j, w;
      for (; A--; )
        if (t.events[A][0] === "exit" && t.events[A][1].type === "chunkFlow") {
          w = t.events[A][1].end;
          break;
        }
      x(r);
      let O = j;
      for (; O < t.events.length; )
        t.events[O][1].end = {
          ...w
        }, O++;
      return pe(t.events, A + 1, 0, t.events.slice(j)), t.events.length = O, s(S);
    }
    return a(S);
  }
  function s(S) {
    if (r === n.length) {
      if (!i)
        return p(S);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return g(S);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Qn, f, c)(S);
  }
  function f(S) {
    return i && E(), x(r), p(S);
  }
  function c(S) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, g(S);
  }
  function p(S) {
    return t.containerState = {}, e.attempt(Qn, h, g)(S);
  }
  function h(S) {
    return r++, n.push([t.currentConstruct, t.containerState]), p(S);
  }
  function g(S) {
    if (S === null) {
      i && E(), x(0), e.consume(S);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), C(S);
  }
  function C(S) {
    if (S === null) {
      k(e.exit("chunkFlow"), !0), x(0), e.consume(S);
      return;
    }
    return F(S) ? (e.consume(S), k(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(S), C);
  }
  function k(S, j) {
    const A = t.sliceStream(S);
    if (j && A.push(null), S.previous = l, l && (l.next = S), l = S, i.defineSkip(S.start), i.write(A), t.parser.lazy[S.start.line]) {
      let w = i.events.length;
      for (; w--; )
        if (
          // The token starts before the line ending…
          i.events[w][1].start.offset < o && // …and either is not ended yet…
          (!i.events[w][1].end || // …or ends after it.
          i.events[w][1].end.offset > o)
        )
          return;
      const O = t.events.length;
      let N = O, _, b;
      for (; N--; )
        if (t.events[N][0] === "exit" && t.events[N][1].type === "chunkFlow") {
          if (_) {
            b = t.events[N][1].end;
            break;
          }
          _ = !0;
        }
      for (x(r), w = O; w < t.events.length; )
        t.events[w][1].end = {
          ...b
        }, w++;
      pe(t.events, N + 1, 0, t.events.slice(O)), t.events.length = w;
    }
  }
  function x(S) {
    let j = n.length;
    for (; j-- > S; ) {
      const A = n[j];
      t.containerState = A[1], A[0].exit.call(t, e);
    }
    n.length = S;
  }
  function E() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function za(e, t, n) {
  return U(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Ze(e) {
  if (e === null || G(e) || Oe(e))
    return 1;
  if (Ct(e))
    return 2;
}
function vt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (t = l(t, n), r.push(l));
  }
  return t;
}
const nn = {
  name: "attention",
  resolveAll: Oa,
  tokenize: _a
};
function Oa(e, t) {
  let n = -1, r, i, l, o, a, u, s, f;
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
          }, p = {
            ...e[n][1].start
          };
          Jn(c, -u), Jn(p, u), o = {
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
            end: p
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
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = me(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = me(s, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), s = me(s, vt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = me(s, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, s = me(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, pe(e, r - 1, n - r + 3, s), n = r + s.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function _a(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ze(r);
  let l;
  return o;
  function o(u) {
    return l = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === l)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), f = Ze(u), c = !f || f === 2 && i || n.includes(u), p = !i || i === 2 && f || n.includes(r);
    return s._open = !!(l === 42 ? c : c && (i || !p)), s._close = !!(l === 42 ? p : p && (f || !c)), t(u);
  }
}
function Jn(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Ba = {
  name: "autolink",
  tokenize: $a
};
function $a(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(h) {
    return le(h) ? (e.consume(h), o) : h === 64 ? n(h) : s(h);
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || re(h) ? (r = 1, a(h)) : s(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), r = 0, u) : (h === 43 || h === 45 || h === 46 || re(h)) && r++ < 32 ? (e.consume(h), a) : (r = 0, s(h));
  }
  function u(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || kt(h) ? n(h) : (e.consume(h), u);
  }
  function s(h) {
    return h === 64 ? (e.consume(h), f) : Aa(h) ? (e.consume(h), s) : n(h);
  }
  function f(h) {
    return re(h) ? c(h) : n(h);
  }
  function c(h) {
    return h === 46 ? (e.consume(h), r = 0, f) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : p(h);
  }
  function p(h) {
    if ((h === 45 || re(h)) && r++ < 63) {
      const g = h === 45 ? p : c;
      return e.consume(h), g;
    }
    return n(h);
  }
}
const ct = {
  partial: !0,
  tokenize: Na
};
function Na(e, t, n) {
  return r;
  function r(l) {
    return H(l) ? U(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || F(l) ? t(l) : n(l);
  }
}
const li = {
  continuation: {
    tokenize: Ha
  },
  exit: qa,
  name: "blockQuote",
  tokenize: Va
};
function Va(e, t, n) {
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
    return H(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function Ha(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return H(o) ? U(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(li, t, n)(o);
  }
}
function qa(e) {
  e.exit("blockQuote");
}
const oi = {
  name: "characterEscape",
  tokenize: Ua
};
function Ua(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return Da(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const ai = {
  name: "characterReference",
  tokenize: Wa
};
function Wa(e, t, n) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), u;
  }
  function u(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), l = 31, o = re, f(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = Pa, f) : (e.enter("characterReferenceValue"), l = 7, o = tn, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const p = e.exit("characterReferenceValue");
      return o === re && !gn(r.sliceSerialize(p)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(c) && i++ < l ? (e.consume(c), f) : n(c);
  }
}
const er = {
  partial: !0,
  tokenize: Ya
}, tr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Za
};
function Za(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: A
  };
  let l = 0, o = 0, a;
  return u;
  function u(w) {
    return s(w);
  }
  function s(w) {
    const O = r.events[r.events.length - 1];
    return l = O && O[1].type === "linePrefix" ? O[2].sliceSerialize(O[1], !0).length : 0, a = w, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(w);
  }
  function f(w) {
    return w === a ? (o++, e.consume(w), f) : o < 3 ? n(w) : (e.exit("codeFencedFenceSequence"), H(w) ? U(e, c, "whitespace")(w) : c(w));
  }
  function c(w) {
    return w === null || F(w) ? (e.exit("codeFencedFence"), r.interrupt ? t(w) : e.check(er, C, j)(w)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), p(w));
  }
  function p(w) {
    return w === null || F(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(w)) : H(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), U(e, h, "whitespace")(w)) : w === 96 && w === a ? n(w) : (e.consume(w), p);
  }
  function h(w) {
    return w === null || F(w) ? c(w) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), g(w));
  }
  function g(w) {
    return w === null || F(w) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(w)) : w === 96 && w === a ? n(w) : (e.consume(w), g);
  }
  function C(w) {
    return e.attempt(i, j, k)(w);
  }
  function k(w) {
    return e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), x;
  }
  function x(w) {
    return l > 0 && H(w) ? U(e, E, "linePrefix", l + 1)(w) : E(w);
  }
  function E(w) {
    return w === null || F(w) ? e.check(er, C, j)(w) : (e.enter("codeFlowValue"), S(w));
  }
  function S(w) {
    return w === null || F(w) ? (e.exit("codeFlowValue"), E(w)) : (e.consume(w), S);
  }
  function j(w) {
    return e.exit("codeFenced"), t(w);
  }
  function A(w, O, N) {
    let _ = 0;
    return b;
    function b(L) {
      return w.enter("lineEnding"), w.consume(L), w.exit("lineEnding"), P;
    }
    function P(L) {
      return w.enter("codeFencedFence"), H(L) ? U(w, D, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : D(L);
    }
    function D(L) {
      return L === a ? (w.enter("codeFencedFenceSequence"), V(L)) : N(L);
    }
    function V(L) {
      return L === a ? (_++, w.consume(L), V) : _ >= o ? (w.exit("codeFencedFenceSequence"), H(L) ? U(w, R, "whitespace")(L) : R(L)) : N(L);
    }
    function R(L) {
      return L === null || F(L) ? (w.exit("codeFencedFence"), O(L)) : N(L);
    }
  }
}
function Ya(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Ft = {
  name: "codeIndented",
  tokenize: Xa
}, Ga = {
  partial: !0,
  tokenize: Ka
};
function Xa(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), U(e, l, "linePrefix", 5)(s);
  }
  function l(s) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? o(s) : n(s);
  }
  function o(s) {
    return s === null ? u(s) : F(s) ? e.attempt(Ga, o, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || F(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Ka(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : F(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : U(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : F(o) ? i(o) : n(o);
  }
}
const Qa = {
  name: "codeText",
  previous: es,
  resolve: Ja,
  tokenize: ts
};
function Ja(e) {
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
function es(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ts(e, t, n) {
  let r = 0, i, l;
  return o;
  function o(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), u(c));
  }
  function u(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), u) : c === 96 ? (l = e.enter("codeTextSequence"), i = 0, f(c)) : F(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || F(c) ? (e.exit("codeTextData"), u(c)) : (e.consume(c), s);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (l.type = "codeTextData", s(c));
  }
}
class ns {
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
    return r && tt(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), tt(this.left, t);
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
    this.setCursor(0), tt(this.right, t.reverse());
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
        tt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        tt(this.left, n.reverse());
      }
  }
}
function tt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function si(e) {
  const t = {};
  let n = -1, r, i, l, o, a, u, s;
  const f = new ns(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, l = 0, l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2), l < u.length && u[l][1].type === "content"))
      for (; ++l < u.length && u[l][1].type !== "content"; )
        u[l][1].type === "chunkText" && (u[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, rs(f, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (l = n, i = void 0; l--; )
        if (o = f.get(l), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (f.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = l);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...f.get(i)[1].start
      }, a = f.slice(i, n), a.unshift(r), f.splice(i, n - i + 1, a));
    }
  }
  return pe(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !s;
}
function rs(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, u = [], s = {};
  let f, c, p = -1, h = n, g = 0, C = 0;
  const k = [C];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    l.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), c && o.defineSkip(h.start), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(f), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), c = h, h = h.next;
  }
  for (h = n; ++p < a.length; )
    // Find a void token that includes a break.
    a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (C = p + 1, k.push(C), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (o.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : k.pop(), p = k.length; p--; ) {
    const x = a.slice(k[p], k[p + 1]), E = l.pop();
    u.push([E, E + x.length - 1]), e.splice(E, 2, x);
  }
  for (u.reverse(), p = -1; ++p < u.length; )
    s[g + u[p][0]] = g + u[p][1], g += u[p][1] - u[p][0] - 1;
  return s;
}
const is = {
  resolve: os,
  tokenize: as
}, ls = {
  partial: !0,
  tokenize: ss
};
function os(e) {
  return si(e), e;
}
function as(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : F(a) ? e.check(ls, o, l)(a) : (e.consume(a), i);
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
function ss(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), U(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || F(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function ui(e, t, n, r, i, l, o, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(x) {
    return x === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(x), e.exit(l), p) : x === null || x === 32 || x === 41 || kt(x) ? n(x) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), C(x));
  }
  function p(x) {
    return x === 62 ? (e.enter(l), e.consume(x), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(x));
  }
  function h(x) {
    return x === 62 ? (e.exit("chunkString"), e.exit(a), p(x)) : x === null || x === 60 || F(x) ? n(x) : (e.consume(x), x === 92 ? g : h);
  }
  function g(x) {
    return x === 60 || x === 62 || x === 92 ? (e.consume(x), h) : h(x);
  }
  function C(x) {
    return !f && (x === null || x === 41 || G(x)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(x)) : f < s && x === 40 ? (e.consume(x), f++, C) : x === 41 ? (e.consume(x), f--, C) : x === null || x === 32 || x === 40 || kt(x) ? n(x) : (e.consume(x), x === 92 ? k : C);
  }
  function k(x) {
    return x === 40 || x === 41 || x === 92 ? (e.consume(x), C) : C(x);
  }
}
function ci(e, t, n, r, i, l) {
  const o = this;
  let a = 0, u;
  return s;
  function s(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(l), f;
  }
  function f(h) {
    return a > 999 || h === null || h === 91 || h === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(h) : h === 93 ? (e.exit(l), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : F(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === null || h === 91 || h === 93 || F(h) || a++ > 999 ? (e.exit("chunkString"), f(h)) : (e.consume(h), u || (u = !H(h)), h === 92 ? p : c);
  }
  function p(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, c) : c(h);
  }
}
function fi(e, t, n, r, i, l) {
  let o;
  return a;
  function a(p) {
    return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), o = p === 40 ? 41 : p, u) : n(p);
  }
  function u(p) {
    return p === o ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : (e.enter(l), s(p));
  }
  function s(p) {
    return p === o ? (e.exit(l), u(o)) : p === null ? n(p) : F(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), U(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === o || p === null || F(p) ? (e.exit("chunkString"), s(p)) : (e.consume(p), p === 92 ? c : f);
  }
  function c(p) {
    return p === o || p === 92 ? (e.consume(p), f) : f(p);
  }
}
function it(e, t) {
  let n;
  return r;
  function r(i) {
    return F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : H(i) ? U(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const us = {
  name: "definition",
  tokenize: fs
}, cs = {
  partial: !0,
  tokenize: hs
};
function fs(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(h) {
    return e.enter("definition"), o(h);
  }
  function o(h) {
    return ci.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(h);
  }
  function a(h) {
    return i = ke(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), u) : n(h);
  }
  function u(h) {
    return G(h) ? it(e, s)(h) : s(h);
  }
  function s(h) {
    return ui(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(h);
  }
  function f(h) {
    return e.attempt(cs, c, c)(h);
  }
  function c(h) {
    return H(h) ? U(e, p, "whitespace")(h) : p(h);
  }
  function p(h) {
    return h === null || F(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function hs(e, t, n) {
  return r;
  function r(a) {
    return G(a) ? it(e, i)(a) : n(a);
  }
  function i(a) {
    return fi(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return H(a) ? U(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || F(a) ? t(a) : n(a);
  }
}
const ps = {
  name: "hardBreakEscape",
  tokenize: ds
};
function ds(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return F(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const ms = {
  name: "headingAtx",
  resolve: gs,
  tokenize: xs
};
function gs(e, t) {
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
  }, pe(e, r, n - r + 1, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]])), e;
}
function xs(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), l(f);
  }
  function l(f) {
    return e.enter("atxHeadingSequence"), o(f);
  }
  function o(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), o) : f === null || G(f) ? (e.exit("atxHeadingSequence"), a(f)) : n(f);
  }
  function a(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), u(f)) : f === null || F(f) ? (e.exit("atxHeading"), t(f)) : H(f) ? U(e, a, "whitespace")(f) : (e.enter("atxHeadingText"), s(f));
  }
  function u(f) {
    return f === 35 ? (e.consume(f), u) : (e.exit("atxHeadingSequence"), a(f));
  }
  function s(f) {
    return f === null || f === 35 || G(f) ? (e.exit("atxHeadingText"), a(f)) : (e.consume(f), s);
  }
}
const ys = [
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
], nr = ["pre", "script", "style", "textarea"], ks = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Cs,
  tokenize: vs
}, bs = {
  partial: !0,
  tokenize: Es
}, ws = {
  partial: !0,
  tokenize: Ss
};
function Cs(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function vs(e, t, n) {
  const r = this;
  let i, l, o, a, u;
  return s;
  function s(m) {
    return f(m);
  }
  function f(m) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), c;
  }
  function c(m) {
    return m === 33 ? (e.consume(m), p) : m === 47 ? (e.consume(m), l = !0, C) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : d) : le(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function p(m) {
    return m === 45 ? (e.consume(m), i = 2, h) : m === 91 ? (e.consume(m), i = 5, a = 0, g) : le(m) ? (e.consume(m), i = 4, r.interrupt ? t : d) : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : d) : n(m);
  }
  function g(m) {
    const ce = "CDATA[";
    return m === ce.charCodeAt(a++) ? (e.consume(m), a === ce.length ? r.interrupt ? t : D : g) : n(m);
  }
  function C(m) {
    return le(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function k(m) {
    if (m === null || m === 47 || m === 62 || G(m)) {
      const ce = m === 47, Ce = o.toLowerCase();
      return !ce && !l && nr.includes(Ce) ? (i = 1, r.interrupt ? t(m) : D(m)) : ys.includes(o.toLowerCase()) ? (i = 6, ce ? (e.consume(m), x) : r.interrupt ? t(m) : D(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : l ? E(m) : S(m));
    }
    return m === 45 || re(m) ? (e.consume(m), o += String.fromCharCode(m), k) : n(m);
  }
  function x(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : D) : n(m);
  }
  function E(m) {
    return H(m) ? (e.consume(m), E) : b(m);
  }
  function S(m) {
    return m === 47 ? (e.consume(m), b) : m === 58 || m === 95 || le(m) ? (e.consume(m), j) : H(m) ? (e.consume(m), S) : b(m);
  }
  function j(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || re(m) ? (e.consume(m), j) : A(m);
  }
  function A(m) {
    return m === 61 ? (e.consume(m), w) : H(m) ? (e.consume(m), A) : S(m);
  }
  function w(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), u = m, O) : H(m) ? (e.consume(m), w) : N(m);
  }
  function O(m) {
    return m === u ? (e.consume(m), u = null, _) : m === null || F(m) ? n(m) : (e.consume(m), O);
  }
  function N(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || G(m) ? A(m) : (e.consume(m), N);
  }
  function _(m) {
    return m === 47 || m === 62 || H(m) ? S(m) : n(m);
  }
  function b(m) {
    return m === 62 ? (e.consume(m), P) : n(m);
  }
  function P(m) {
    return m === null || F(m) ? D(m) : H(m) ? (e.consume(m), P) : n(m);
  }
  function D(m) {
    return m === 45 && i === 2 ? (e.consume(m), W) : m === 60 && i === 1 ? (e.consume(m), Q) : m === 62 && i === 4 ? (e.consume(m), ue) : m === 63 && i === 3 ? (e.consume(m), d) : m === 93 && i === 5 ? (e.consume(m), ge) : F(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(bs, xe, V)(m)) : m === null || F(m) ? (e.exit("htmlFlowData"), V(m)) : (e.consume(m), D);
  }
  function V(m) {
    return e.check(ws, R, xe)(m);
  }
  function R(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), L;
  }
  function L(m) {
    return m === null || F(m) ? V(m) : (e.enter("htmlFlowData"), D(m));
  }
  function W(m) {
    return m === 45 ? (e.consume(m), d) : D(m);
  }
  function Q(m) {
    return m === 47 ? (e.consume(m), o = "", oe) : D(m);
  }
  function oe(m) {
    if (m === 62) {
      const ce = o.toLowerCase();
      return nr.includes(ce) ? (e.consume(m), ue) : D(m);
    }
    return le(m) && o.length < 8 ? (e.consume(m), o += String.fromCharCode(m), oe) : D(m);
  }
  function ge(m) {
    return m === 93 ? (e.consume(m), d) : D(m);
  }
  function d(m) {
    return m === 62 ? (e.consume(m), ue) : m === 45 && i === 2 ? (e.consume(m), d) : D(m);
  }
  function ue(m) {
    return m === null || F(m) ? (e.exit("htmlFlowData"), xe(m)) : (e.consume(m), ue);
  }
  function xe(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function Ss(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return F(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function Es(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(ct, t, n);
  }
}
const Is = {
  name: "htmlText",
  tokenize: Ts
};
function Ts(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(d) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(d), u;
  }
  function u(d) {
    return d === 33 ? (e.consume(d), s) : d === 47 ? (e.consume(d), A) : d === 63 ? (e.consume(d), S) : le(d) ? (e.consume(d), N) : n(d);
  }
  function s(d) {
    return d === 45 ? (e.consume(d), f) : d === 91 ? (e.consume(d), l = 0, g) : le(d) ? (e.consume(d), E) : n(d);
  }
  function f(d) {
    return d === 45 ? (e.consume(d), h) : n(d);
  }
  function c(d) {
    return d === null ? n(d) : d === 45 ? (e.consume(d), p) : F(d) ? (o = c, Q(d)) : (e.consume(d), c);
  }
  function p(d) {
    return d === 45 ? (e.consume(d), h) : c(d);
  }
  function h(d) {
    return d === 62 ? W(d) : d === 45 ? p(d) : c(d);
  }
  function g(d) {
    const ue = "CDATA[";
    return d === ue.charCodeAt(l++) ? (e.consume(d), l === ue.length ? C : g) : n(d);
  }
  function C(d) {
    return d === null ? n(d) : d === 93 ? (e.consume(d), k) : F(d) ? (o = C, Q(d)) : (e.consume(d), C);
  }
  function k(d) {
    return d === 93 ? (e.consume(d), x) : C(d);
  }
  function x(d) {
    return d === 62 ? W(d) : d === 93 ? (e.consume(d), x) : C(d);
  }
  function E(d) {
    return d === null || d === 62 ? W(d) : F(d) ? (o = E, Q(d)) : (e.consume(d), E);
  }
  function S(d) {
    return d === null ? n(d) : d === 63 ? (e.consume(d), j) : F(d) ? (o = S, Q(d)) : (e.consume(d), S);
  }
  function j(d) {
    return d === 62 ? W(d) : S(d);
  }
  function A(d) {
    return le(d) ? (e.consume(d), w) : n(d);
  }
  function w(d) {
    return d === 45 || re(d) ? (e.consume(d), w) : O(d);
  }
  function O(d) {
    return F(d) ? (o = O, Q(d)) : H(d) ? (e.consume(d), O) : W(d);
  }
  function N(d) {
    return d === 45 || re(d) ? (e.consume(d), N) : d === 47 || d === 62 || G(d) ? _(d) : n(d);
  }
  function _(d) {
    return d === 47 ? (e.consume(d), W) : d === 58 || d === 95 || le(d) ? (e.consume(d), b) : F(d) ? (o = _, Q(d)) : H(d) ? (e.consume(d), _) : W(d);
  }
  function b(d) {
    return d === 45 || d === 46 || d === 58 || d === 95 || re(d) ? (e.consume(d), b) : P(d);
  }
  function P(d) {
    return d === 61 ? (e.consume(d), D) : F(d) ? (o = P, Q(d)) : H(d) ? (e.consume(d), P) : _(d);
  }
  function D(d) {
    return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? n(d) : d === 34 || d === 39 ? (e.consume(d), i = d, V) : F(d) ? (o = D, Q(d)) : H(d) ? (e.consume(d), D) : (e.consume(d), R);
  }
  function V(d) {
    return d === i ? (e.consume(d), i = void 0, L) : d === null ? n(d) : F(d) ? (o = V, Q(d)) : (e.consume(d), V);
  }
  function R(d) {
    return d === null || d === 34 || d === 39 || d === 60 || d === 61 || d === 96 ? n(d) : d === 47 || d === 62 || G(d) ? _(d) : (e.consume(d), R);
  }
  function L(d) {
    return d === 47 || d === 62 || G(d) ? _(d) : n(d);
  }
  function W(d) {
    return d === 62 ? (e.consume(d), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(d);
  }
  function Q(d) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), oe;
  }
  function oe(d) {
    return H(d) ? U(e, ge, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(d) : ge(d);
  }
  function ge(d) {
    return e.enter("htmlTextData"), o(d);
  }
}
const xn = {
  name: "labelEnd",
  resolveAll: Ds,
  resolveTo: Ms,
  tokenize: Rs
}, Ls = {
  tokenize: js
}, As = {
  tokenize: Fs
}, Ps = {
  tokenize: zs
};
function Ds(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && pe(e, 0, e.length, n), e;
}
function Ms(e, t) {
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
  }, f = {
    type: "labelText",
    start: {
      ...e[l + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return a = [["enter", u, t], ["enter", s, t]], a = me(a, e.slice(l + 1, l + r + 3)), a = me(a, [["enter", f, t]]), a = me(a, vt(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), a = me(a, [["exit", f, t], e[o - 2], e[o - 1], ["exit", s, t]]), a = me(a, e.slice(o + 1)), a = me(a, [["exit", u, t]]), pe(e, l, e.length, a), e;
}
function Rs(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(p) {
    return l ? l._inactive ? c(p) : (o = r.parser.defined.includes(ke(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(p);
  }
  function u(p) {
    return p === 40 ? e.attempt(Ls, f, o ? f : c)(p) : p === 91 ? e.attempt(As, f, o ? s : c)(p) : o ? f(p) : c(p);
  }
  function s(p) {
    return e.attempt(Ps, f, c)(p);
  }
  function f(p) {
    return t(p);
  }
  function c(p) {
    return l._balanced = !0, n(p);
  }
}
function js(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return G(c) ? it(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41 ? f(c) : ui(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function o(c) {
    return G(c) ? it(e, u)(c) : f(c);
  }
  function a(c) {
    return n(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? fi(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function s(c) {
    return G(c) ? it(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Fs(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ci.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(ke(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function zs(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const Os = {
  name: "labelStartImage",
  resolveAll: xn.resolveAll,
  tokenize: _s
};
function _s(e, t, n) {
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
const Bs = {
  name: "labelStartLink",
  resolveAll: xn.resolveAll,
  tokenize: $s
};
function $s(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const zt = {
  name: "lineEnding",
  tokenize: Ns
};
function Ns(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), U(e, t, "linePrefix");
  }
}
const yt = {
  name: "thematicBreak",
  tokenize: Vs
};
function Vs(e, t, n) {
  let r = 0, i;
  return l;
  function l(s) {
    return e.enter("thematicBreak"), o(s);
  }
  function o(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || F(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), H(s) ? U(e, a, "whitespace")(s) : a(s));
  }
}
const ae = {
  continuation: {
    tokenize: Ws
  },
  exit: Ys,
  name: "list",
  tokenize: Us
}, Hs = {
  partial: !0,
  tokenize: Gs
}, qs = {
  partial: !0,
  tokenize: Zs
};
function Us(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(h) {
    const g = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (g === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : tn(h)) {
      if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
        _container: !0
      })), g === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(yt, n, s)(h) : s(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(h);
    }
    return n(h);
  }
  function u(h) {
    return tn(h) && ++o < 10 ? (e.consume(h), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), s(h)) : n(h);
  }
  function s(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      ct,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(Hs, p, c)
    );
  }
  function f(h) {
    return r.containerState.initialBlankLine = !0, l++, p(h);
  }
  function c(h) {
    return H(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), p) : n(h);
  }
  function p(h) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function Ws(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(ct, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, U(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !H(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(qs, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, U(e, e.attempt(ae, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Zs(e, t, n) {
  const r = this;
  return U(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function Ys(e) {
  e.exit(this.containerState.type);
}
function Gs(e, t, n) {
  const r = this;
  return U(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !H(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const rr = {
  name: "setextUnderline",
  resolveTo: Xs,
  tokenize: Ks
};
function Xs(e, t) {
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
function Ks(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(s) {
    let f = r.events.length, c;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = s, o(s)) : n(s);
  }
  function o(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), H(s) ? U(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || F(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Qs = {
  tokenize: Js
};
function Js(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    ct,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, U(e, e.attempt(this.parser.constructs.flow, i, e.attempt(is, i)), "linePrefix"))
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
const eu = {
  resolveAll: pi()
}, tu = hi("string"), nu = hi("text");
function hi(e) {
  return {
    resolveAll: pi(e === "text" ? ru : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], l = n.attempt(i, o, a);
    return o;
    function o(f) {
      return s(f) ? l(f) : a(f);
    }
    function a(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), u;
    }
    function u(f) {
      return s(f) ? (n.exit("data"), l(f)) : (n.consume(f), u);
    }
    function s(f) {
      if (f === null)
        return !0;
      const c = i[f];
      let p = -1;
      if (c)
        for (; ++p < c.length; ) {
          const h = c[p];
          if (!h.previous || h.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function pi(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function ru(e, t) {
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
const iu = {
  42: ae,
  43: ae,
  45: ae,
  48: ae,
  49: ae,
  50: ae,
  51: ae,
  52: ae,
  53: ae,
  54: ae,
  55: ae,
  56: ae,
  57: ae,
  62: li
}, lu = {
  91: us
}, ou = {
  [-2]: Ft,
  [-1]: Ft,
  32: Ft
}, au = {
  35: ms,
  42: yt,
  45: [rr, yt],
  60: ks,
  61: rr,
  95: yt,
  96: tr,
  126: tr
}, su = {
  38: ai,
  92: oi
}, uu = {
  [-5]: zt,
  [-4]: zt,
  [-3]: zt,
  33: Os,
  38: ai,
  42: nn,
  60: [Ba, Is],
  91: Bs,
  92: [ps, oi],
  93: xn,
  95: nn,
  96: Qa
}, cu = {
  null: [nn, eu]
}, fu = {
  null: [42, 95]
}, hu = {
  null: []
}, pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: fu,
  contentInitial: lu,
  disable: hu,
  document: iu,
  flow: au,
  flowInitial: ou,
  insideSpan: cu,
  string: su,
  text: uu
}, Symbol.toStringTag, { value: "Module" }));
function du(e, t, n) {
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
    attempt: O(A),
    check: O(w),
    consume: E,
    enter: S,
    exit: j,
    interrupt: O(w, {
      interrupt: !0
    })
  }, s = {
    code: null,
    containerState: {},
    defineSkip: C,
    events: [],
    now: g,
    parser: e,
    previous: null,
    sliceSerialize: p,
    sliceStream: h,
    write: c
  };
  let f = t.tokenize.call(s, u);
  return t.resolveAll && l.push(t), s;
  function c(P) {
    return o = me(o, P), k(), o[o.length - 1] !== null ? [] : (N(t, 0), s.events = vt(l, s.events, s), s.events);
  }
  function p(P, D) {
    return gu(h(P), D);
  }
  function h(P) {
    return mu(o, P);
  }
  function g() {
    const {
      _bufferIndex: P,
      _index: D,
      line: V,
      column: R,
      offset: L
    } = r;
    return {
      _bufferIndex: P,
      _index: D,
      line: V,
      column: R,
      offset: L
    };
  }
  function C(P) {
    i[P.line] = P.column, b();
  }
  function k() {
    let P;
    for (; r._index < o.length; ) {
      const D = o[r._index];
      if (typeof D == "string")
        for (P = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === P && r._bufferIndex < D.length; )
          x(D.charCodeAt(r._bufferIndex));
      else
        x(D);
    }
  }
  function x(P) {
    f = f(P);
  }
  function E(P) {
    F(P) ? (r.line++, r.column = 1, r.offset += P === -3 ? 2 : 1, b()) : P !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = P;
  }
  function S(P, D) {
    const V = D || {};
    return V.type = P, V.start = g(), s.events.push(["enter", V, s]), a.push(V), V;
  }
  function j(P) {
    const D = a.pop();
    return D.end = g(), s.events.push(["exit", D, s]), D;
  }
  function A(P, D) {
    N(P, D.from);
  }
  function w(P, D) {
    D.restore();
  }
  function O(P, D) {
    return V;
    function V(R, L, W) {
      let Q, oe, ge, d;
      return Array.isArray(R) ? (
        /* c8 ignore next 1 */
        xe(R)
      ) : "tokenize" in R ? (
        // Looks like a construct.
        xe([
          /** @type {Construct} */
          R
        ])
      ) : ue(R);
      function ue(ee) {
        return Ae;
        function Ae(z) {
          const Z = z !== null && ee[z], X = z !== null && ee.null, te = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Z) ? Z : Z ? [Z] : [],
            ...Array.isArray(X) ? X : X ? [X] : []
          ];
          return xe(te)(z);
        }
      }
      function xe(ee) {
        return Q = ee, oe = 0, ee.length === 0 ? W : m(ee[oe]);
      }
      function m(ee) {
        return Ae;
        function Ae(z) {
          return d = _(), ge = ee, ee.partial || (s.currentConstruct = ee), ee.name && s.parser.constructs.disable.null.includes(ee.name) ? Ce() : ee.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            D ? Object.assign(Object.create(s), D) : s,
            u,
            ce,
            Ce
          )(z);
        }
      }
      function ce(ee) {
        return P(ge, d), L;
      }
      function Ce(ee) {
        return d.restore(), ++oe < Q.length ? m(Q[oe]) : W;
      }
    }
  }
  function N(P, D) {
    P.resolveAll && !l.includes(P) && l.push(P), P.resolve && pe(s.events, D, s.events.length - D, P.resolve(s.events.slice(D), s)), P.resolveTo && (s.events = P.resolveTo(s.events, s));
  }
  function _() {
    const P = g(), D = s.previous, V = s.currentConstruct, R = s.events.length, L = Array.from(a);
    return {
      from: R,
      restore: W
    };
    function W() {
      r = P, s.previous = D, s.currentConstruct = V, s.events.length = R, a = L, b();
    }
  }
  function b() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function mu(e, t) {
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
function gu(e, t) {
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
function xu(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      ri([pu, ...(e || {}).extensions || []])
    ),
    content: i(Ma),
    defined: [],
    document: i(ja),
    flow: i(Qs),
    lazy: {},
    string: i(tu),
    text: i(nu)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return du(r, l, a);
    }
  }
}
function yu(e) {
  for (; !si(e); )
    ;
  return e;
}
const ir = /[\0\t\n\r]/g;
function ku() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const u = [];
    let s, f, c, p, h;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), c = 0, t = "", n && (l.charCodeAt(0) === 65279 && c++, n = void 0); c < l.length; ) {
      if (ir.lastIndex = c, s = ir.exec(l), p = s && s.index !== void 0 ? s.index : l.length, h = l.charCodeAt(p), !s) {
        t = l.slice(c);
        break;
      }
      if (h === 10 && c === p && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), c < p && (u.push(l.slice(c, p)), e += p - c), h) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (f = Math.ceil(e / 4) * 4, u.push(-2); e++ < f; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      c = p + 1;
    }
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const bu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function wu(e) {
  return e.replace(bu, Cu);
}
function Cu(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return ii(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return gn(n) || e;
}
const di = {}.hasOwnProperty;
function vu(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Su(n)(yu(xu(n).document().write(ku()(e, t, !0))));
}
function Su(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(An),
      autolinkProtocol: _,
      autolinkEmail: _,
      atxHeading: l(Xe),
      blockQuote: l(X),
      characterEscape: _,
      characterReference: _,
      codeFenced: l(te),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(te, o),
      codeText: l(de, o),
      codeTextData: _,
      data: _,
      codeFlowValue: _,
      definition: l(ve),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l(pt),
      hardBreakEscape: l(Tn),
      hardBreakTrailing: l(Tn),
      htmlFlow: l(Ln, o),
      htmlFlowData: _,
      htmlText: l(Ln, o),
      htmlTextData: _,
      image: l(Qi),
      label: o,
      link: l(An),
      listItem: l(Ji),
      listItemValue: p,
      listOrdered: l(Pn, c),
      listUnordered: l(Pn),
      paragraph: l(el),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(Xe),
      strong: l(tl),
      thematicBreak: l(rl)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: A,
      autolink: u(),
      autolinkEmail: Z,
      autolinkProtocol: z,
      blockQuote: u(),
      characterEscapeValue: b,
      characterReferenceMarkerHexadecimal: Ce,
      characterReferenceMarkerNumeric: Ce,
      characterReferenceValue: ee,
      characterReference: Ae,
      codeFenced: u(k),
      codeFencedFence: C,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: g,
      codeFlowValue: b,
      codeIndented: u(x),
      codeText: u(L),
      codeTextData: b,
      data: b,
      definition: u(),
      definitionDestinationString: j,
      definitionLabelString: E,
      definitionTitleString: S,
      emphasis: u(),
      hardBreakEscape: u(D),
      hardBreakTrailing: u(D),
      htmlFlow: u(V),
      htmlFlowData: b,
      htmlText: u(R),
      htmlTextData: b,
      image: u(Q),
      label: ge,
      labelText: oe,
      lineEnding: P,
      link: u(W),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: ce,
      resourceDestinationString: d,
      resourceTitleString: ue,
      resource: xe,
      setextHeading: u(N),
      setextHeadingLineSequence: O,
      setextHeadingText: w,
      strong: u(),
      thematicBreak: u()
    }
  };
  mi(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(v) {
    let T = {
      type: "root",
      children: []
    };
    const B = {
      stack: [T],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: o,
      resume: f,
      data: n
    }, q = [];
    let Y = -1;
    for (; ++Y < v.length; )
      if (v[Y][1].type === "listOrdered" || v[Y][1].type === "listUnordered")
        if (v[Y][0] === "enter")
          q.push(Y);
        else {
          const ye = q.pop();
          Y = i(v, ye, Y);
        }
    for (Y = -1; ++Y < v.length; ) {
      const ye = t[v[Y][0]];
      di.call(ye, v[Y][1].type) && ye[v[Y][1].type].call(Object.assign({
        sliceSerialize: v[Y][2].sliceSerialize
      }, B), v[Y][1]);
    }
    if (B.tokenStack.length > 0) {
      const ye = B.tokenStack[B.tokenStack.length - 1];
      (ye[1] || lr).call(B, void 0, ye[0]);
    }
    for (T.position = {
      start: Pe(v.length > 0 ? v[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Pe(v.length > 0 ? v[v.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Y = -1; ++Y < t.transforms.length; )
      T = t.transforms[Y](T) || T;
    return T;
  }
  function i(v, T, B) {
    let q = T - 1, Y = -1, ye = !1, je, Se, Ke, Qe;
    for (; ++q <= B; ) {
      const fe = v[q];
      switch (fe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          fe[0] === "enter" ? Y++ : Y--, Qe = void 0;
          break;
        }
        case "lineEndingBlank": {
          fe[0] === "enter" && (je && !Qe && !Y && !Ke && (Ke = q), Qe = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Qe = void 0;
      }
      if (!Y && fe[0] === "enter" && fe[1].type === "listItemPrefix" || Y === -1 && fe[0] === "exit" && (fe[1].type === "listUnordered" || fe[1].type === "listOrdered")) {
        if (je) {
          let Be = q;
          for (Se = void 0; Be--; ) {
            const Ee = v[Be];
            if (Ee[1].type === "lineEnding" || Ee[1].type === "lineEndingBlank") {
              if (Ee[0] === "exit") continue;
              Se && (v[Se][1].type = "lineEndingBlank", ye = !0), Ee[1].type = "lineEnding", Se = Be;
            } else if (!(Ee[1].type === "linePrefix" || Ee[1].type === "blockQuotePrefix" || Ee[1].type === "blockQuotePrefixWhitespace" || Ee[1].type === "blockQuoteMarker" || Ee[1].type === "listItemIndent")) break;
          }
          Ke && (!Se || Ke < Se) && (je._spread = !0), je.end = Object.assign({}, Se ? v[Se][1].start : fe[1].end), v.splice(Se || q, 0, ["exit", je, fe[2]]), q++, B++;
        }
        if (fe[1].type === "listItemPrefix") {
          const Be = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, fe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          je = Be, v.splice(q, 0, ["enter", Be, fe[2]]), q++, B++, Ke = void 0, Qe = !0;
        }
      }
    }
    return v[T][1]._spread = ye, B;
  }
  function l(v, T) {
    return B;
    function B(q) {
      a.call(this, v(q), q), T && T.call(this, q);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(v, T, B) {
    this.stack[this.stack.length - 1].children.push(v), this.stack.push(v), this.tokenStack.push([T, B || void 0]), v.position = {
      start: Pe(T.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(v) {
    return T;
    function T(B) {
      v && v.call(this, B), s.call(this, B);
    }
  }
  function s(v, T) {
    const B = this.stack.pop(), q = this.tokenStack.pop();
    if (q)
      q[0].type !== v.type && (T ? T.call(this, v, q[0]) : (q[1] || lr).call(this, v, q[0]));
    else throw new Error("Cannot close `" + v.type + "` (" + rt({
      start: v.start,
      end: v.end
    }) + "): it’s not open");
    B.position.end = Pe(v.end);
  }
  function f() {
    return mn(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function p(v) {
    if (this.data.expectingFirstListItemValue) {
      const T = this.stack[this.stack.length - 2];
      T.start = Number.parseInt(this.sliceSerialize(v), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.lang = v;
  }
  function g() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.meta = v;
  }
  function C() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function k() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = v.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function x() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = v.replace(/(\r?\n|\r)$/g, "");
  }
  function E(v) {
    const T = this.resume(), B = this.stack[this.stack.length - 1];
    B.label = T, B.identifier = ke(this.sliceSerialize(v)).toLowerCase();
  }
  function S() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.title = v;
  }
  function j() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.url = v;
  }
  function A(v) {
    const T = this.stack[this.stack.length - 1];
    if (!T.depth) {
      const B = this.sliceSerialize(v).length;
      T.depth = B;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function O(v) {
    const T = this.stack[this.stack.length - 1];
    T.depth = this.sliceSerialize(v).codePointAt(0) === 61 ? 1 : 2;
  }
  function N() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function _(v) {
    const B = this.stack[this.stack.length - 1].children;
    let q = B[B.length - 1];
    (!q || q.type !== "text") && (q = nl(), q.position = {
      start: Pe(v.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, B.push(q)), this.stack.push(q);
  }
  function b(v) {
    const T = this.stack.pop();
    T.value += this.sliceSerialize(v), T.position.end = Pe(v.end);
  }
  function P(v) {
    const T = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const B = T.children[T.children.length - 1];
      B.position.end = Pe(v.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(T.type) && (_.call(this, v), b.call(this, v));
  }
  function D() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = v;
  }
  function R() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = v;
  }
  function L() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.value = v;
  }
  function W() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const T = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = T, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function Q() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const T = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = T, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function oe(v) {
    const T = this.sliceSerialize(v), B = this.stack[this.stack.length - 2];
    B.label = wu(T), B.identifier = ke(T).toLowerCase();
  }
  function ge() {
    const v = this.stack[this.stack.length - 1], T = this.resume(), B = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, B.type === "link") {
      const q = v.children;
      B.children = q;
    } else
      B.alt = T;
  }
  function d() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.url = v;
  }
  function ue() {
    const v = this.resume(), T = this.stack[this.stack.length - 1];
    T.title = v;
  }
  function xe() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function ce(v) {
    const T = this.resume(), B = this.stack[this.stack.length - 1];
    B.label = T, B.identifier = ke(this.sliceSerialize(v)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ce(v) {
    this.data.characterReferenceType = v.type;
  }
  function ee(v) {
    const T = this.sliceSerialize(v), B = this.data.characterReferenceType;
    let q;
    B ? (q = ii(T, B === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : q = gn(T);
    const Y = this.stack[this.stack.length - 1];
    Y.value += q;
  }
  function Ae(v) {
    const T = this.stack.pop();
    T.position.end = Pe(v.end);
  }
  function z(v) {
    b.call(this, v);
    const T = this.stack[this.stack.length - 1];
    T.url = this.sliceSerialize(v);
  }
  function Z(v) {
    b.call(this, v);
    const T = this.stack[this.stack.length - 1];
    T.url = "mailto:" + this.sliceSerialize(v);
  }
  function X() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function te() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function de() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ve() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function pt() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Xe() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Tn() {
    return {
      type: "break"
    };
  }
  function Ln() {
    return {
      type: "html",
      value: ""
    };
  }
  function Qi() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function An() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Pn(v) {
    return {
      type: "list",
      ordered: v.type === "listOrdered",
      start: null,
      spread: v._spread,
      children: []
    };
  }
  function Ji(v) {
    return {
      type: "listItem",
      spread: v._spread,
      checked: null,
      children: []
    };
  }
  function el() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function tl() {
    return {
      type: "strong",
      children: []
    };
  }
  function nl() {
    return {
      type: "text",
      value: ""
    };
  }
  function rl() {
    return {
      type: "thematicBreak"
    };
  }
}
function Pe(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function mi(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? mi(e, r) : Eu(e, r);
  }
}
function Eu(e, t) {
  let n;
  for (n in t)
    if (di.call(t, n))
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
function lr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + rt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + rt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + rt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Iu(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return vu(r, {
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
function Tu(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lu(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Au(e, t) {
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
function Pu(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Du(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Mu(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Ge(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
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
function Ru(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ju(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function gi(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Fu(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return gi(e, t);
  const i = { src: Ge(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function zu(e, t) {
  const n = { src: Ge(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Ou(e, t) {
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
function _u(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return gi(e, t);
  const i = { href: Ge(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Bu(e, t) {
  const n = { href: Ge(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function $u(e, t, n) {
  const r = e.all(t), i = n ? Nu(n) : xi(t), l = {}, o = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), l.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const f = r[a];
    (i || a !== 0 || f.type !== "element" || f.tagName !== "p") && o.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? o.push(...f.children) : o.push(f);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && o.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: l, children: o };
  return e.patch(t, s), e.applyData(t, s);
}
function Nu(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = xi(n[r]);
  }
  return t;
}
function xi(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Vu(e, t) {
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
function Hu(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function qu(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Uu(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Wu(e, t) {
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
    }, a = fn(t.children[1]), u = Gr(t.children[t.children.length - 1]);
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
function Zu(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const c = t.children[u], p = {}, h = o ? o[u] : void 0;
    h && (p.align = h);
    let g = { type: "element", tagName: l, properties: p, children: [] };
    c && (g.children = e.all(c), e.patch(c, g), g = e.applyData(c, g)), s.push(g);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, f), e.applyData(t, f);
}
function Yu(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const or = 9, ar = 32;
function Gu(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      sr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(sr(t.slice(i), i > 0, !1)), l.join("");
}
function sr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === or || l === ar; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === or || l === ar; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Xu(e, t) {
  const n = { type: "text", value: Gu(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Ku(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Qu = {
  blockquote: Tu,
  break: Lu,
  code: Au,
  delete: Pu,
  emphasis: Du,
  footnoteReference: Mu,
  heading: Ru,
  html: ju,
  imageReference: Fu,
  image: zu,
  inlineCode: Ou,
  linkReference: _u,
  link: Bu,
  listItem: $u,
  list: Vu,
  paragraph: Hu,
  // @ts-expect-error: root is different, but hard to type.
  root: qu,
  strong: Uu,
  table: Wu,
  tableCell: Yu,
  tableRow: Zu,
  text: Xu,
  thematicBreak: Ku,
  toml: dt,
  yaml: dt,
  definition: dt,
  footnoteDefinition: dt
};
function dt() {
}
const yi = -1, St = 0, lt = 1, bt = 2, yn = 3, kn = 4, bn = 5, wn = 6, ki = 7, bi = 8, ur = typeof self == "object" ? self : globalThis, Ju = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case St:
      case yi:
        return n(o, i);
      case lt: {
        const a = n([], i);
        for (const u of o)
          a.push(r(u));
        return a;
      }
      case bt: {
        const a = n({}, i);
        for (const [u, s] of o)
          a[r(u)] = r(s);
        return a;
      }
      case yn:
        return n(new Date(o), i);
      case kn: {
        const { source: a, flags: u } = o;
        return n(new RegExp(a, u), i);
      }
      case bn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of o)
          a.set(r(u), r(s));
        return a;
      }
      case wn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          a.add(r(u));
        return a;
      }
      case ki: {
        const { name: a, message: u } = o;
        return n(new ur[a](u), i);
      }
      case bi:
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
    return n(new ur[l](o), i);
  };
  return r;
}, cr = (e) => Ju(/* @__PURE__ */ new Map(), e)(0), Ne = "", { toString: ec } = {}, { keys: tc } = Object, nt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [St, t];
  const n = ec.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [lt, Ne];
    case "Object":
      return [bt, Ne];
    case "Date":
      return [yn, Ne];
    case "RegExp":
      return [kn, Ne];
    case "Map":
      return [bn, Ne];
    case "Set":
      return [wn, Ne];
    case "DataView":
      return [lt, n];
  }
  return n.includes("Array") ? [lt, n] : n.includes("Error") ? [ki, n] : [bt, n];
}, mt = ([e, t]) => e === St && (t === "function" || t === "symbol"), nc = (e, t, n, r) => {
  const i = (o, a) => {
    const u = r.push(o) - 1;
    return n.set(a, u), u;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, u] = nt(o);
    switch (a) {
      case St: {
        let f = o;
        switch (u) {
          case "bigint":
            a = bi, f = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            f = null;
            break;
          case "undefined":
            return i([yi], o);
        }
        return i([a, f], o);
      }
      case lt: {
        if (u) {
          let p = o;
          return u === "DataView" ? p = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (p = new Uint8Array(o)), i([u, [...p]], o);
        }
        const f = [], c = i([a, f], o);
        for (const p of o)
          f.push(l(p));
        return c;
      }
      case bt: {
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
        const f = [], c = i([a, f], o);
        for (const p of tc(o))
          (e || !mt(nt(o[p]))) && f.push([l(p), l(o[p])]);
        return c;
      }
      case yn:
        return i([a, o.toISOString()], o);
      case kn: {
        const { source: f, flags: c } = o;
        return i([a, { source: f, flags: c }], o);
      }
      case bn: {
        const f = [], c = i([a, f], o);
        for (const [p, h] of o)
          (e || !(mt(nt(p)) || mt(nt(h)))) && f.push([l(p), l(h)]);
        return c;
      }
      case wn: {
        const f = [], c = i([a, f], o);
        for (const p of o)
          (e || !mt(nt(p))) && f.push(l(p));
        return c;
      }
    }
    const { message: s } = o;
    return i([a, { name: u, message: s }], o);
  };
  return l;
}, fr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return nc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, at = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? cr(fr(e, t)) : structuredClone(e)
) : (e, t) => cr(fr(e, t));
function rc(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function ic(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function lc(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || rc, r = e.options.footnoteBackLabel || ic, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const f = e.all(s), c = String(s.identifier).toUpperCase(), p = Ge(c.toLowerCase());
    let h = 0;
    const g = [], C = e.footnoteCounts.get(c);
    for (; C !== void 0 && ++h <= C; ) {
      g.length > 0 && g.push({ type: "text", value: " " });
      let E = typeof n == "string" ? n : n(u, h);
      typeof E == "string" && (E = { type: "text", value: E }), g.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + p + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(E) ? E : [E]
      });
    }
    const k = f[f.length - 1];
    if (k && k.type === "element" && k.tagName === "p") {
      const E = k.children[k.children.length - 1];
      E && E.type === "text" ? E.value += " " : k.children.push({ type: "text", value: " " }), k.children.push(...g);
    } else
      f.push(...g);
    const x = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + p },
      children: e.wrap(f, !0)
    };
    e.patch(s, x), a.push(x);
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
            ...at(o),
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
const Et = (
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
      return uc;
    if (typeof e == "function")
      return It(e);
    if (typeof e == "object")
      return Array.isArray(e) ? oc(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        ac(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return sc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function oc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Et(e[n]);
  return It(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function ac(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return It(n);
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
function sc(e) {
  return It(t);
  function t(n) {
    return n && n.type === e;
  }
}
function It(e) {
  return t;
  function t(n, r, i) {
    return !!(cc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function uc() {
  return !0;
}
function cc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const wi = [], fc = !0, rn = !1, hc = "skip";
function Ci(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = Et(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, f) {
    const c = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof c.type == "string") {
      const h = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(p, "name", {
        value: "node (" + (u.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return p;
    function p() {
      let h = wi, g, C, k;
      if ((!t || l(u, s, f[f.length - 1] || void 0)) && (h = pc(n(u, f)), h[0] === rn))
        return h;
      if ("children" in u && u.children) {
        const x = (
          /** @type {UnistParent} */
          u
        );
        if (x.children && h[0] !== hc)
          for (C = (r ? x.children.length : -1) + o, k = f.concat(x); C > -1 && C < x.children.length; ) {
            const E = x.children[C];
            if (g = a(E, C, k)(), g[0] === rn)
              return g;
            C = typeof g[1] == "number" ? g[1] : C + o;
          }
      }
      return h;
    }
  }
}
function pc(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [fc, e] : e == null ? wi : [e];
}
function Cn(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), Ci(e, l, a, i);
  function a(u, s) {
    const f = s[s.length - 1], c = f ? f.children.indexOf(u) : void 0;
    return o(u, c, f);
  }
}
const ln = {}.hasOwnProperty, dc = {};
function mc(e, t) {
  const n = t || dc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Qu, ...n.handlers }, a = {
    all: s,
    applyData: xc,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: n,
    patch: gc,
    wrap: kc
  };
  return Cn(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, p = String(f.identifier).toUpperCase();
      c.has(p) || c.set(p, f);
    }
  }), a;
  function u(f, c) {
    const p = f.type, h = a.handlers[p];
    if (ln.call(a.handlers, p) && h)
      return h(a, f, c);
    if (a.options.passThrough && a.options.passThrough.includes(p)) {
      if ("children" in f) {
        const { children: C, ...k } = f, x = at(k);
        return x.children = a.all(f), x;
      }
      return at(f);
    }
    return (a.options.unknownHandler || yc)(a, f, c);
  }
  function s(f) {
    const c = [];
    if ("children" in f) {
      const p = f.children;
      let h = -1;
      for (; ++h < p.length; ) {
        const g = a.one(p[h], f);
        if (g) {
          if (h && p[h - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = hr(g.value)), !Array.isArray(g) && g.type === "element")) {
            const C = g.children[0];
            C && C.type === "text" && (C.value = hr(C.value));
          }
          Array.isArray(g) ? c.push(...g) : c.push(g);
        }
      }
    }
    return c;
  }
}
function gc(e, t) {
  e.position && (t.position = Kr(e));
}
function xc(e, t) {
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
    n.type === "element" && l && Object.assign(n.properties, at(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function yc(e, t) {
  const n = t.data || {}, r = "value" in t && !(ln.call(n, "hProperties") || ln.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function kc(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function hr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function pr(e, t) {
  const n = mc(e, t), r = n.one(e, void 0), i = lc(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function bc(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      pr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      pr(n, { file: r, ...e || t })
    );
  };
}
function dr(e) {
  if (e)
    throw e;
}
var Ot, mr;
function wc() {
  if (mr) return Ot;
  mr = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, l = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var f = e.call(s, "constructor"), c = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !f && !c)
      return !1;
    var p;
    for (p in s)
      ;
    return typeof p > "u" || e.call(s, p);
  }, o = function(s, f) {
    n && f.name === "__proto__" ? n(s, f.name, {
      enumerable: !0,
      configurable: !0,
      value: f.newValue,
      writable: !0
    }) : s[f.name] = f.newValue;
  }, a = function(s, f) {
    if (f === "__proto__")
      if (e.call(s, f)) {
        if (r)
          return r(s, f).value;
      } else return;
    return s[f];
  };
  return Ot = function u() {
    var s, f, c, p, h, g, C = arguments[0], k = 1, x = arguments.length, E = !1;
    for (typeof C == "boolean" && (E = C, C = arguments[1] || {}, k = 2), (C == null || typeof C != "object" && typeof C != "function") && (C = {}); k < x; ++k)
      if (s = arguments[k], s != null)
        for (f in s)
          c = a(C, f), p = a(s, f), C !== p && (E && p && (l(p) || (h = i(p))) ? (h ? (h = !1, g = c && i(c) ? c : []) : g = c && l(c) ? c : {}, o(C, { name: f, newValue: u(E, g, p) })) : typeof p < "u" && o(C, { name: f, newValue: p }));
    return C;
  }, Ot;
}
var Cc = wc();
const _t = /* @__PURE__ */ Fr(Cc);
function on(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function vc() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let l = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(u, ...s) {
      const f = e[++l];
      let c = -1;
      if (u) {
        o(u);
        return;
      }
      for (; ++c < i.length; )
        (s[c] === null || s[c] === void 0) && (s[c] = i[c]);
      i = s, f ? Sc(f, a)(...s) : o(null, ...s);
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
function Sc(e, t) {
  let n;
  return r;
  function r(...o) {
    const a = e.length > o.length;
    let u;
    a && o.push(i);
    try {
      u = e.apply(this, o);
    } catch (s) {
      const f = (
        /** @type {Error} */
        s
      );
      if (a && n)
        throw f;
      return i(f);
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
const be = { basename: Ec, dirname: Ic, extname: Tc, join: Lc, sep: "/" };
function Ec(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ft(e);
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
function Ic(e) {
  if (ft(e), e.length === 0)
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
function Tc(e) {
  ft(e);
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
function Lc(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    ft(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Ac(n);
}
function Ac(e) {
  ft(e);
  const t = e.codePointAt(0) === 47;
  let n = Pc(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Pc(e, t) {
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
function ft(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Dc = { cwd: Mc };
function Mc() {
  return "/";
}
function an(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Rc(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!an(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return jc(e);
}
function jc(e) {
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
const Bt = (
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
class vi {
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
    t ? an(t) ? n = { path: t } : typeof t == "string" || Fc(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Dc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Bt.length; ) {
      const l = Bt[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      Bt.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? be.basename(this.path) : void 0;
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
    Nt(t, "basename"), $t(t, "basename"), this.path = be.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? be.dirname(this.path) : void 0;
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
    gr(this.basename, "dirname"), this.path = be.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? be.extname(this.path) : void 0;
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
    if ($t(t, "extname"), gr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = be.join(this.dirname, this.stem + (t || ""));
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
    an(t) && (t = Rc(t)), Nt(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? be.basename(this.path, this.extname) : void 0;
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
    Nt(t, "stem"), $t(t, "stem"), this.path = be.join(this.dirname || "", t + (this.extname || ""));
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
function $t(e, t) {
  if (e && e.includes(be.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + be.sep + "`"
    );
}
function Nt(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function gr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Fc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const zc = (
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
), Oc = {}.hasOwnProperty;
class vn extends zc {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = vc();
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
      new vn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(_t(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (qt("data", this.frozen), this.namespace[t] = n, this) : Oc.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (qt("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = gt(t), r = this.parser || this.Parser;
    return Vt("parse", r), r(String(n), n);
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
    return this.freeze(), Vt("process", this.parser || this.Parser), Ht("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = gt(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(f, c, p) {
        if (f || !c || !p)
          return s(f);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), g = r.stringify(h, p);
        $c(g) ? p.value = g : p.result = g, s(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          p
        );
      });
      function s(f, c) {
        f || !c ? o(f) : l ? l(c) : n(void 0, c);
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
    return this.freeze(), Vt("processSync", this.parser || this.Parser), Ht("processSync", this.compiler || this.Compiler), this.process(t, i), yr("processSync", "process", n), r;
    function i(l, o) {
      n = !0, dr(l), r = o;
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
    xr(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const u = gt(n);
      i.run(t, u, s);
      function s(f, c, p) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        f ? a(f) : o ? o(h) : r(void 0, h, p);
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
    return this.run(t, n, l), yr("runSync", "run", r), i;
    function l(o, a) {
      dr(o), i = a, r = !0;
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
    const r = gt(n), i = this.compiler || this.Compiler;
    return Ht("stringify", i), xr(t), i(t, r);
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
    if (qt("use", this.frozen), t != null) if (typeof t == "function")
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
          const [f, ...c] = (
            /** @type {PluginTuple<Array<unknown>>} */
            s
          );
          u(f, c);
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
      a(s.plugins), s.settings && (i.settings = _t(!0, i.settings, s.settings));
    }
    function a(s) {
      let f = -1;
      if (s != null) if (Array.isArray(s))
        for (; ++f < s.length; ) {
          const c = s[f];
          l(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function u(s, f) {
      let c = -1, p = -1;
      for (; ++c < r.length; )
        if (r[c][0] === s) {
          p = c;
          break;
        }
      if (p === -1)
        r.push([s, ...f]);
      else if (f.length > 0) {
        let [h, ...g] = f;
        const C = r[p][1];
        on(C) && on(h) && (h = _t(!0, C, h)), r[p] = [s, h, ...g];
      }
    }
  }
}
const _c = new vn().freeze();
function Vt(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Ht(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function qt(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function xr(e) {
  if (!on(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function yr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function gt(e) {
  return Bc(e) ? e : new vi(e);
}
function Bc(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function $c(e) {
  return typeof e == "string" || Nc(e);
}
function Nc(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Vc = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", kr = [], br = { allowDangerousHtml: !0 }, Hc = /^(https?|ircs?|mailto|xmpp)$/i, qc = [
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
function Uc(e) {
  const t = Wc(e), n = Zc(e);
  return Yc(t.runSync(t.parse(n), n), e);
}
function Wc(e) {
  const t = e.rehypePlugins || kr, n = e.remarkPlugins || kr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...br } : br;
  return _c().use(Iu).use(n).use(bc, r).use(t);
}
function Zc(e) {
  const t = e.children || "", n = new vi();
  return typeof t == "string" && (n.value = t), n;
}
function Yc(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || Gc;
  for (const f of qc)
    Object.hasOwn(t, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + Vc + f.id, void 0);
  return Cn(e, s), ua(e, {
    Fragment: y.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: y.jsx,
    jsxs: y.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function s(f, c, p) {
    if (f.type === "raw" && p && typeof c == "number")
      return o ? p.children.splice(c, 1) : p.children[c] = { type: "text", value: f.value }, c;
    if (f.type === "element") {
      let h;
      for (h in jt)
        if (Object.hasOwn(jt, h) && Object.hasOwn(f.properties, h)) {
          const g = f.properties[h], C = jt[h];
          (C === null || C.includes(f.tagName)) && (f.properties[h] = u(String(g || ""), h, f));
        }
    }
    if (f.type === "element") {
      let h = n ? !n.includes(f.tagName) : l ? l.includes(f.tagName) : !1;
      if (!h && r && typeof c == "number" && (h = !r(f, c, p)), h && p && typeof c == "number")
        return a && f.children ? p.children.splice(c, 1, ...f.children) : p.children.splice(c, 1), c;
    }
  }
}
function Gc(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Hc.test(e.slice(0, t)) ? e : ""
  );
}
const Fe = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], wr = {
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
      ...Fe,
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
    dl: [...Fe],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [...Fe, "longDesc", "src"],
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
    ol: [...Fe, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [...Fe],
    table: [...Fe],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...Fe, ["className", "contains-task-list"]],
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
}, De = {}.hasOwnProperty;
function Xc(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...wr, ...t } : wr,
    stack: []
  }, i = Si(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function Si(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Kc(e, n);
      case "doctype":
        return Qc(e, n);
      case "element":
        return Jc(e, n);
      case "root":
        return ef(e, n);
      case "text":
        return tf(e, n);
    }
  }
}
function Kc(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return ht(l, t), l;
  }
}
function Qc(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return ht(n, t), n;
  }
}
function Jc(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    Ei(e, t.children)
  ), i = nf(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && De.call(e.schema.ancestors, n))) {
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
  return ht(o, t), o;
}
function ef(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    Ei(e, t.children)
  ) };
  return ht(r, t), r;
}
function tf(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return ht(r, t), r;
}
function Ei(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = Si(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function nf(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && De.call(r, n) ? r[n] : void 0, o = r && De.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), u = {};
  let s;
  for (s in a)
    if (De.call(a, s)) {
      const f = a[s];
      let c = Cr(
        e,
        vr(l, s),
        s,
        f
      );
      c == null && (c = Cr(e, vr(o, s), s, f)), c != null && (u[s] = c);
    }
  if (i && De.call(i, n)) {
    const f = i[n];
    for (s in f)
      De.call(f, s) && !De.call(u, s) && (u[s] = f[s]);
  }
  return u;
}
function Cr(e, t, n, r) {
  return t ? Array.isArray(r) ? rf(e, t, n, r) : Ii(e, t, n, r) : void 0;
}
function rf(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = Ii(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function Ii(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && lf(e, n, r)) {
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
function lf(e, t, n) {
  const r = e.schema.protocols && De.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
  if (!r || r.length === 0)
    return !0;
  const i = String(n), l = i.indexOf(":"), o = i.indexOf("?"), a = i.indexOf("#"), u = i.indexOf("/");
  if (l < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  u > -1 && l > u || o > -1 && l > o || a > -1 && l > a)
    return !0;
  let s = -1;
  for (; ++s < r.length; ) {
    const f = r[s];
    if (l === f.length && i.slice(0, f.length) === f)
      return !0;
  }
  return !1;
}
function ht(e, t) {
  const n = Kr(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = at(t.data)), n && (e.position = n);
}
function vr(e, t) {
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
function of(e) {
  return function(t) {
    return (
      /** @type {Root} */
      Xc(t, e)
    );
  };
}
function Sr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function af(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function sf(e, t, n) {
  const i = Et((n || {}).ignore || []), l = uf(t);
  let o = -1;
  for (; ++o < l.length; )
    Ci(e, "text", a);
  function a(s, f) {
    let c = -1, p;
    for (; ++c < f.length; ) {
      const h = f[c], g = p ? p.children : void 0;
      if (i(
        h,
        g ? g.indexOf(h) : void 0,
        p
      ))
        return;
      p = h;
    }
    if (p)
      return u(s, f);
  }
  function u(s, f) {
    const c = f[f.length - 1], p = l[o][0], h = l[o][1];
    let g = 0;
    const k = c.children.indexOf(s);
    let x = !1, E = [];
    p.lastIndex = 0;
    let S = p.exec(s.value);
    for (; S; ) {
      const j = S.index, A = {
        index: S.index,
        input: S.input,
        stack: [...f, s]
      };
      let w = h(...S, A);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === !1 ? p.lastIndex = j + 1 : (g !== j && E.push({
        type: "text",
        value: s.value.slice(g, j)
      }), Array.isArray(w) ? E.push(...w) : w && E.push(w), g = j + S[0].length, x = !0), !p.global)
        break;
      S = p.exec(s.value);
    }
    return x ? (g < s.value.length && E.push({ type: "text", value: s.value.slice(g) }), c.children.splice(k, 1, ...E)) : E = [s], k + E.length;
  }
}
function uf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([cf(i[0]), ff(i[1])]);
  }
  return t;
}
function cf(e) {
  return typeof e == "string" ? new RegExp(af(e), "g") : e;
}
function ff(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Ut = "phrasing", Wt = ["autolink", "link", "image", "label"];
function hf() {
  return {
    transforms: [kf],
    enter: {
      literalAutolink: df,
      literalAutolinkEmail: Zt,
      literalAutolinkHttp: Zt,
      literalAutolinkWww: Zt
    },
    exit: {
      literalAutolink: yf,
      literalAutolinkEmail: xf,
      literalAutolinkHttp: mf,
      literalAutolinkWww: gf
    }
  };
}
function pf() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Ut,
        notInConstruct: Wt
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Ut,
        notInConstruct: Wt
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Ut,
        notInConstruct: Wt
      }
    ]
  };
}
function df(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Zt(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function mf(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function gf(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function xf(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function yf(e) {
  this.exit(e);
}
function kf(e) {
  sf(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, bf],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), wf]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function bf(e, t, n, r, i) {
  let l = "";
  if (!Ti(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !Cf(n)))
    return !1;
  const o = vf(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function wf(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Ti(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function Cf(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function vf(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Sr(e, "(");
  let l = Sr(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function Ti(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Oe(n) || Ct(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Li.peek = Mf;
function Sf() {
  this.buffer();
}
function Ef(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function If() {
  this.buffer();
}
function Tf(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function Lf(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = ke(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Af(e) {
  this.exit(e);
}
function Pf(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = ke(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Df(e) {
  this.exit(e);
}
function Mf() {
  return "[";
}
function Li(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function Rf() {
  return {
    enter: {
      gfmFootnoteCallString: Sf,
      gfmFootnoteCall: Ef,
      gfmFootnoteDefinitionLabelString: If,
      gfmFootnoteDefinition: Tf
    },
    exit: {
      gfmFootnoteCallString: Lf,
      gfmFootnoteCall: Af,
      gfmFootnoteDefinitionLabelString: Pf,
      gfmFootnoteDefinition: Df
    }
  };
}
function jf(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Li },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, l, o) {
    const a = l.createTracker(o);
    let u = a.move("[^");
    const s = l.enter("footnoteDefinition"), f = l.enter("label");
    return u += a.move(
      l.safe(l.associationId(r), { before: u, after: "]" })
    ), f(), u += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), u += a.move(
      (t ? `
` : " ") + l.indentLines(
        l.containerFlow(r, a.current()),
        t ? Ai : Ff
      )
    )), s(), u;
  }
}
function Ff(e, t, n) {
  return t === 0 ? e : Ai(e, t, n);
}
function Ai(e, t, n) {
  return (n ? "" : "    ") + e;
}
const zf = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Pi.peek = Nf;
function Of() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Bf },
    exit: { strikethrough: $f }
  };
}
function _f() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: zf
      }
    ],
    handlers: { delete: Pi }
  };
}
function Bf(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function $f(e) {
  this.exit(e);
}
function Pi(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function Nf() {
  return "~";
}
function Vf(e) {
  return e.length;
}
function Hf(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Vf, l = [], o = [], a = [], u = [];
  let s = 0, f = -1;
  for (; ++f < e.length; ) {
    const C = [], k = [];
    let x = -1;
    for (e[f].length > s && (s = e[f].length); ++x < e[f].length; ) {
      const E = qf(e[f][x]);
      if (n.alignDelimiters !== !1) {
        const S = i(E);
        k[x] = S, (u[x] === void 0 || S > u[x]) && (u[x] = S);
      }
      C.push(E);
    }
    o[f] = C, a[f] = k;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < s; )
      l[c] = Er(r[c]);
  else {
    const C = Er(r);
    for (; ++c < s; )
      l[c] = C;
  }
  c = -1;
  const p = [], h = [];
  for (; ++c < s; ) {
    const C = l[c];
    let k = "", x = "";
    C === 99 ? (k = ":", x = ":") : C === 108 ? k = ":" : C === 114 && (x = ":");
    let E = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      u[c] - k.length - x.length
    );
    const S = k + "-".repeat(E) + x;
    n.alignDelimiters !== !1 && (E = k.length + E + x.length, E > u[c] && (u[c] = E), h[c] = E), p[c] = S;
  }
  o.splice(1, 0, p), a.splice(1, 0, h), f = -1;
  const g = [];
  for (; ++f < o.length; ) {
    const C = o[f], k = a[f];
    c = -1;
    const x = [];
    for (; ++c < s; ) {
      const E = C[c] || "";
      let S = "", j = "";
      if (n.alignDelimiters !== !1) {
        const A = u[c] - (k[c] || 0), w = l[c];
        w === 114 ? S = " ".repeat(A) : w === 99 ? A % 2 ? (S = " ".repeat(A / 2 + 0.5), j = " ".repeat(A / 2 - 0.5)) : (S = " ".repeat(A / 2), j = S) : j = " ".repeat(A);
      }
      n.delimiterStart !== !1 && !c && x.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && E === "") && (n.delimiterStart !== !1 || c) && x.push(" "), n.alignDelimiters !== !1 && x.push(S), x.push(E), n.alignDelimiters !== !1 && x.push(j), n.padding !== !1 && x.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && x.push("|");
    }
    g.push(
      n.delimiterEnd === !1 ? x.join("").replace(/ +$/, "") : x.join("")
    );
  }
  return g.join(`
`);
}
function qf(e) {
  return e == null ? "" : String(e);
}
function Er(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Uf(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    Wf
  );
  return i(), o;
}
function Wf(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Zf(e, t) {
  return Ir(e, t.inConstruct, !0) && !Ir(e, t.notInConstruct, !1);
}
function Ir(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Tr(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Zf(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Yf(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function Gf(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Xf(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Kf(e, t, n, r) {
  const i = Xf(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (Gf(e, n)) {
    const c = n.enter("codeIndented"), p = n.indentLines(l, Qf);
    return c(), p;
  }
  const a = n.createTracker(r), u = i.repeat(Math.max(Yf(l, i) + 1, 3)), s = n.enter("codeFenced");
  let f = a.move(u);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${o}`);
    f += a.move(
      n.safe(e.lang, {
        before: f,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  if (e.lang && e.meta) {
    const c = n.enter(`codeFencedMeta${o}`);
    f += a.move(" "), f += a.move(
      n.safe(e.meta, {
        before: f,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), c();
  }
  return f += a.move(`
`), l && (f += a.move(l + `
`)), f += a.move(u), s(), f;
}
function Qf(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Sn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Jf(e, t, n, r) {
  const i = Sn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
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
function eh(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function st(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function wt(e, t, n) {
  const r = Ze(e), i = Ze(t);
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
Di.peek = th;
function Di(e, t, n, r) {
  const i = eh(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), f = wt(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = st(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), p = wt(r.after.charCodeAt(0), c, i);
  p.inside && (u = u.slice(0, -1) + st(c));
  const h = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: f.outside
  }, a + u + h;
}
function th(e, t, n) {
  return n.options.emphasis || "*";
}
function nh(e, t) {
  let n = !1;
  return Cn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, rn;
  }), !!((!e.depth || e.depth < 3) && mn(e) && (t.options.setext || n));
}
function rh(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (nh(e, n)) {
    const f = n.enter("headingSetext"), c = n.enter("phrasing"), p = n.containerPhrasing(e, {
      ...l.current(),
      before: `
`,
      after: `
`
    });
    return c(), f(), p + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      p.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
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
  return /^[\t ]/.test(s) && (s = st(s.charCodeAt(0)) + s.slice(1)), s = s ? o + " " + s : o, n.options.closeAtx && (s += " " + o), u(), a(), s;
}
Mi.peek = ih;
function Mi(e) {
  return e.value || "";
}
function ih() {
  return "<";
}
Ri.peek = lh;
function Ri(e, t, n, r) {
  const i = Sn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
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
function lh() {
  return "!";
}
ji.peek = oh;
function ji(e, t, n, r) {
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
  const f = n.stack;
  n.stack = [], o = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = f, l(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function oh() {
  return "!";
}
Fi.peek = ah;
function Fi(e, t, n) {
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
function ah() {
  return "`";
}
function zi(e, t) {
  const n = mn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Oi.peek = sh;
function Oi(e, t, n, r) {
  const i = Sn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, u;
  if (zi(e, n)) {
    const f = n.stack;
    n.stack = [], a = n.enter("autolink");
    let c = o.move("<");
    return c += o.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...o.current()
      })
    ), c += o.move(">"), a(), n.stack = f, c;
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
function sh(e, t, n) {
  return zi(e, n) ? "<" : "[";
}
_i.peek = uh;
function _i(e, t, n, r) {
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
  const f = n.stack;
  n.stack = [], o = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = f, l(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function uh() {
  return "[";
}
function En(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function ch(e) {
  const t = En(e), n = e.options.bulletOther;
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
function fh(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Bi(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function hh(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? fh(n) : En(n);
  const a = e.ordered ? o === "." ? ")" : "." : ch(n);
  let u = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (u = !0), Bi(n) === o && f
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const p = e.children[c];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
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
function ph(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function dh(e, t, n, r) {
  const i = ph(n);
  let l = n.bulletCurrent || En(n);
  t && t.type === "list" && t.ordered && (l = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + l);
  let o = l.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
  const a = n.createTracker(r);
  a.move(l + " ".repeat(o - l.length)), a.shift(o);
  const u = n.enter("listItem"), s = n.indentLines(
    n.containerFlow(e, a.current()),
    f
  );
  return u(), s;
  function f(c, p, h) {
    return p ? (h ? "" : " ".repeat(o)) + c : (h ? l : l + " ".repeat(o - l.length)) + c;
  }
}
function mh(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const gh = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Et([
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
function xh(e, t, n, r) {
  return (e.children.some(function(o) {
    return gh(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function yh(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
$i.peek = kh;
function $i(e, t, n, r) {
  const i = yh(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), f = wt(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = st(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), p = wt(r.after.charCodeAt(0), c, i);
  p.inside && (u = u.slice(0, -1) + st(c));
  const h = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: p.outside,
    before: f.outside
  }, a + u + h;
}
function kh(e, t, n) {
  return n.options.strong || "*";
}
function bh(e, t, n, r) {
  return n.safe(e.value, r);
}
function wh(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function Ch(e, t, n) {
  const r = (Bi(n) + (n.options.ruleSpaces ? " " : "")).repeat(wh(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ni = {
  blockquote: Uf,
  break: Tr,
  code: Kf,
  definition: Jf,
  emphasis: Di,
  hardBreak: Tr,
  heading: rh,
  html: Mi,
  image: Ri,
  imageReference: ji,
  inlineCode: Fi,
  link: Oi,
  linkReference: _i,
  list: hh,
  listItem: dh,
  paragraph: mh,
  root: xh,
  strong: $i,
  text: bh,
  thematicBreak: Ch
};
function vh() {
  return {
    enter: {
      table: Sh,
      tableData: Lr,
      tableHeader: Lr,
      tableRow: Ih
    },
    exit: {
      codeText: Th,
      table: Eh,
      tableData: Yt,
      tableHeader: Yt,
      tableRow: Yt
    }
  };
}
function Sh(e) {
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
function Eh(e) {
  this.exit(e), this.data.inTable = void 0;
}
function Ih(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function Yt(e) {
  this.exit(e);
}
function Lr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Th(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, Lh));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function Lh(e, t) {
  return t === "|" ? t : e;
}
function Ah(e) {
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
      inlineCode: p,
      table: o,
      tableCell: u,
      tableRow: a
    }
  };
  function o(h, g, C, k) {
    return s(f(h, C, k), h.align);
  }
  function a(h, g, C, k) {
    const x = c(h, C, k), E = s([x]);
    return E.slice(0, E.indexOf(`
`));
  }
  function u(h, g, C, k) {
    const x = C.enter("tableCell"), E = C.enter("phrasing"), S = C.containerPhrasing(h, {
      ...k,
      before: l,
      after: l
    });
    return E(), x(), S;
  }
  function s(h, g) {
    return Hf(h, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(h, g, C) {
    const k = h.children;
    let x = -1;
    const E = [], S = g.enter("table");
    for (; ++x < k.length; )
      E[x] = c(k[x], g, C);
    return S(), E;
  }
  function c(h, g, C) {
    const k = h.children;
    let x = -1;
    const E = [], S = g.enter("tableRow");
    for (; ++x < k.length; )
      E[x] = u(k[x], h, g, C);
    return S(), E;
  }
  function p(h, g, C) {
    let k = Ni.inlineCode(h, g, C);
    return C.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function Ph() {
  return {
    exit: {
      taskListCheckValueChecked: Ar,
      taskListCheckValueUnchecked: Ar,
      paragraph: Mh
    }
  };
}
function Dh() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Rh }
  };
}
function Ar(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Mh(e) {
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
function Rh(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let u = Ni.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(f) {
    return f + o;
  }
}
function jh() {
  return [
    hf(),
    Rf(),
    Of(),
    vh(),
    Ph()
  ];
}
function Fh(e) {
  return {
    extensions: [
      pf(),
      jf(e),
      _f(),
      Ah(e),
      Dh()
    ]
  };
}
const zh = {
  tokenize: Vh,
  partial: !0
}, Vi = {
  tokenize: Hh,
  partial: !0
}, Hi = {
  tokenize: qh,
  partial: !0
}, qi = {
  tokenize: Uh,
  partial: !0
}, Oh = {
  tokenize: Wh,
  partial: !0
}, Ui = {
  name: "wwwAutolink",
  tokenize: $h,
  previous: Zi
}, Wi = {
  name: "protocolAutolink",
  tokenize: Nh,
  previous: Yi
}, Le = {
  name: "emailAutolink",
  tokenize: Bh,
  previous: Gi
}, we = {};
function _h() {
  return {
    text: we
  };
}
let ze = 48;
for (; ze < 123; )
  we[ze] = Le, ze++, ze === 58 ? ze = 65 : ze === 91 && (ze = 97);
we[43] = Le;
we[45] = Le;
we[46] = Le;
we[95] = Le;
we[72] = [Le, Wi];
we[104] = [Le, Wi];
we[87] = [Le, Ui];
we[119] = [Le, Ui];
function Bh(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(c) {
    return !sn(c) || !Gi.call(r, r.previous) || In(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return sn(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), u) : n(c);
  }
  function u(c) {
    return c === 46 ? e.check(Oh, f, s)(c) : c === 45 || c === 95 || re(c) ? (l = !0, e.consume(c), u) : f(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function f(c) {
    return l && i && le(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function $h(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !Zi.call(r, r.previous) || In(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(zh, e.attempt(Vi, e.attempt(Hi, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function Nh(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(c) {
    return (c === 72 || c === 104) && Yi.call(r, r.previous) && !In(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (le(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https")
        return e.consume(c), u;
    }
    return n(c);
  }
  function u(c) {
    return c === 47 ? (e.consume(c), l ? s : (l = !0, u)) : n(c);
  }
  function s(c) {
    return c === null || kt(c) || G(c) || Oe(c) || Ct(c) ? n(c) : e.attempt(Vi, e.attempt(Hi, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Vh(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function Hh(e, t, n) {
  let r, i, l;
  return o;
  function o(s) {
    return s === 46 || s === 95 ? e.check(qi, u, a)(s) : s === null || G(s) || Oe(s) || s !== 45 && Ct(s) ? u(s) : (l = !0, e.consume(s), o);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), o;
  }
  function u(s) {
    return i || r || !l ? n(s) : t(s);
  }
}
function qh(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(qi, t, l)(o) : o === null || G(o) || Oe(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function Uh(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || G(a) || Oe(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || G(a) || Oe(a) ? t(a) : r(a);
  }
  function l(a) {
    return le(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : le(a) ? (e.consume(a), o) : n(a);
  }
}
function Wh(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return re(l) ? n(l) : t(l);
  }
}
function Zi(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || G(e);
}
function Yi(e) {
  return !le(e);
}
function Gi(e) {
  return !(e === 47 || sn(e));
}
function sn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || re(e);
}
function In(e) {
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
const Zh = {
  tokenize: tp,
  partial: !0
};
function Yh() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Qh,
        continuation: {
          tokenize: Jh
        },
        exit: ep
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Kh
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: Gh,
        resolveTo: Xh
      }
    }
  };
}
function Gh(e, t, n) {
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
    const s = ke(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return s.codePointAt(0) !== 94 || !l.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u));
  }
}
function Xh(e, t) {
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
function Kh(e, t, n) {
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
      c === null || c === 91 || G(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const p = e.exit("gfmFootnoteCallString");
      return i.includes(ke(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return G(c) || (o = !0), l++, e.consume(c), c === 92 ? f : s;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, s) : s(c);
  }
}
function Qh(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l, o = 0, a;
  return u;
  function u(g) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(g) {
    return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : n(g);
  }
  function f(g) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      g === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      g === null || g === 91 || G(g)
    )
      return n(g);
    if (g === 93) {
      e.exit("chunkString");
      const C = e.exit("gfmFootnoteDefinitionLabelString");
      return l = ke(r.sliceSerialize(C)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return G(g) || (a = !0), o++, e.consume(g), g === 92 ? c : f;
  }
  function c(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), o++, f) : f(g);
  }
  function p(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(l) || i.push(l), U(e, h, "gfmFootnoteDefinitionWhitespace")) : n(g);
  }
  function h(g) {
    return t(g);
  }
}
function Jh(e, t, n) {
  return e.check(ct, t, e.attempt(Zh, t, n));
}
function ep(e) {
  e.exit("gfmFootnoteDefinition");
}
function tp(e, t, n) {
  const r = this;
  return U(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l);
  }
}
function np(e) {
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
            const f = {
              type: "strikethrough",
              start: Object.assign({}, o[s][1].start),
              end: Object.assign({}, o[u][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, o[s][1].end),
              end: Object.assign({}, o[u][1].start)
            }, p = [["enter", f, a], ["enter", o[s][1], a], ["exit", o[s][1], a], ["enter", c, a]], h = a.parser.constructs.insideSpan.null;
            h && pe(p, p.length, 0, vt(h, o.slice(s + 1, u), a)), pe(p, p.length, 0, [["exit", c, a], ["enter", o[u][1], a], ["exit", o[u][1], a], ["exit", f, a]]), pe(o, s - 1, u - s + 3, p), u = s + p.length - 2;
            break;
          }
      }
    for (u = -1; ++u < o.length; )
      o[u][1].type === "strikethroughSequenceTemporary" && (o[u][1].type = "data");
    return o;
  }
  function l(o, a, u) {
    const s = this.previous, f = this.events;
    let c = 0;
    return p;
    function p(g) {
      return s === 126 && f[f.length - 1][1].type !== "characterEscape" ? u(g) : (o.enter("strikethroughSequenceTemporary"), h(g));
    }
    function h(g) {
      const C = Ze(s);
      if (g === 126)
        return c > 1 ? u(g) : (o.consume(g), c++, h);
      if (c < 2 && !n) return u(g);
      const k = o.exit("strikethroughSequenceTemporary"), x = Ze(g);
      return k._open = !x || x === 2 && !!C, k._close = !C || C === 2 && !!x, a(g);
    }
  }
}
class rp {
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
    ip(this, t, n, r);
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
function ip(e, t, n, r) {
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
function lp(e, t) {
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
function op() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: ap,
        resolveAll: sp
      }
    }
  };
}
function ap(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(b) {
    let P = r.events.length - 1;
    for (; P > -1; ) {
      const R = r.events[P][1].type;
      if (R === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      R === "linePrefix") P--;
      else break;
    }
    const D = P > -1 ? r.events[P][1].type : null, V = D === "tableHead" || D === "tableRow" ? w : u;
    return V === w && r.parser.lazy[r.now().line] ? n(b) : V(b);
  }
  function u(b) {
    return e.enter("tableHead"), e.enter("tableRow"), s(b);
  }
  function s(b) {
    return b === 124 || (o = !0, l += 1), f(b);
  }
  function f(b) {
    return b === null ? n(b) : F(b) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), h) : n(b) : H(b) ? U(e, f, "whitespace")(b) : (l += 1, o && (o = !1, i += 1), b === 124 ? (e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), o = !0, f) : (e.enter("data"), c(b)));
  }
  function c(b) {
    return b === null || b === 124 || G(b) ? (e.exit("data"), f(b)) : (e.consume(b), b === 92 ? p : c);
  }
  function p(b) {
    return b === 92 || b === 124 ? (e.consume(b), c) : c(b);
  }
  function h(b) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(b) : (e.enter("tableDelimiterRow"), o = !1, H(b) ? U(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : g(b));
  }
  function g(b) {
    return b === 45 || b === 58 ? k(b) : b === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), C) : A(b);
  }
  function C(b) {
    return H(b) ? U(e, k, "whitespace")(b) : k(b);
  }
  function k(b) {
    return b === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(b), e.exit("tableDelimiterMarker"), x) : b === 45 ? (l += 1, x(b)) : b === null || F(b) ? j(b) : A(b);
  }
  function x(b) {
    return b === 45 ? (e.enter("tableDelimiterFiller"), E(b)) : A(b);
  }
  function E(b) {
    return b === 45 ? (e.consume(b), E) : b === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(b), e.exit("tableDelimiterMarker"), S) : (e.exit("tableDelimiterFiller"), S(b));
  }
  function S(b) {
    return H(b) ? U(e, j, "whitespace")(b) : j(b);
  }
  function j(b) {
    return b === 124 ? g(b) : b === null || F(b) ? !o || i !== l ? A(b) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(b)) : A(b);
  }
  function A(b) {
    return n(b);
  }
  function w(b) {
    return e.enter("tableRow"), O(b);
  }
  function O(b) {
    return b === 124 ? (e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), O) : b === null || F(b) ? (e.exit("tableRow"), t(b)) : H(b) ? U(e, O, "whitespace")(b) : (e.enter("data"), N(b));
  }
  function N(b) {
    return b === null || b === 124 || G(b) ? (e.exit("data"), O(b)) : (e.consume(b), b === 92 ? _ : N);
  }
  function _(b) {
    return b === 92 || b === 124 ? (e.consume(b), N) : N(b);
  }
}
function sp(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, u = 0, s, f, c;
  const p = new rp();
  for (; ++n < e.length; ) {
    const h = e[n], g = h[1];
    h[0] === "enter" ? g.type === "tableHead" ? (a = !1, u !== 0 && (Pr(p, t, u, s, f), f = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(n, 0, [["enter", s, t]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, c = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, p.add(n, 0, [["enter", f, t]])), i = g.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], c = xt(p, t, l, i, void 0, c), l = [0, 0, 0, 0]), o[2] = n)) : g.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], c = xt(p, t, l, i, void 0, c)), l = o, o = [l[1], n, 0, 0])) : g.type === "tableHead" ? (a = !0, u = n) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (u = n, l[1] !== 0 ? (o[0] = o[1], c = xt(p, t, l, i, n, c)) : o[1] !== 0 && (c = xt(p, t, o, i, n, c)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (u !== 0 && Pr(p, t, u, s, f), p.consume(t.events), n = -1; ++n < t.events.length; ) {
    const h = t.events[n];
    h[0] === "enter" && h[1].type === "table" && (h[1]._align = lp(t.events, n));
  }
  return e;
}
function xt(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, Ve(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const u = Ve(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const s = Ve(t.events, n[2]), f = Ve(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const p = t.events[n[2]], h = t.events[n[3]];
      if (p[1].end = Object.assign({}, h[1].end), p[1].type = "chunkText", p[1].contentType = "text", n[3] > n[2] + 1) {
        const g = n[2] + 1, C = n[3] - n[2] - 1;
        e.add(g, C, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, Ve(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function Pr(e, t, n, r, i) {
  const l = [], o = Ve(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function Ve(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const up = {
  name: "tasklistCheck",
  tokenize: fp
};
function cp() {
  return {
    text: {
      91: up
    }
  };
}
function fp(e, t, n) {
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
    return G(u) ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), o) : u === 88 || u === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), o) : n(u);
  }
  function o(u) {
    return u === 93 ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(u);
  }
  function a(u) {
    return F(u) ? t(u) : H(u) ? e.check({
      tokenize: hp
    }, t, n)(u) : n(u);
  }
}
function hp(e, t, n) {
  return U(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function pp(e) {
  return ri([
    _h(),
    Yh(),
    np(e),
    op(),
    cp()
  ]);
}
const dp = {};
function mp(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || dp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(pp(n)), l.push(jh()), o.push(Fh(n));
}
const gp = ne.div`
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
`, xp = ({ content: e, className: t }) => /* @__PURE__ */ y.jsx(gp, { className: t, children: /* @__PURE__ */ y.jsx(Uc, { remarkPlugins: [mp], rehypePlugins: [of], children: e }) }), yp = ne.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, kp = ({ name: e, timestamp: t }) => /* @__PURE__ */ y.jsxs(Ie, { children: [
  /* @__PURE__ */ y.jsx(zr, { src: $l }),
  /* @__PURE__ */ y.jsx(We, { children: e }),
  /* @__PURE__ */ y.jsx(yp, { children: new Date(t).toLocaleString() })
] }), bp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", wp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Cp = Object.defineProperty, vp = (e, t) => Cp(e, "name", { value: t, configurable: !0 });
const Sp = vp((e) => y.jsx(Te, { light: wp, dark: bp, ...e }), "CheckIcon"), Ep = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Ip = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Tp = Object.defineProperty, Lp = (e, t) => Tp(e, "name", { value: t, configurable: !0 });
const Ap = Lp((e) => y.jsx(Te, { light: Ip, dark: Ep, ...e }), "CopyIcon"), Pp = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ y.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: /* @__PURE__ */ y.jsx("path", { d: "M6 9l6 6 6-6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  }
), Dp = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ y.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    style: r,
    children: /* @__PURE__ */ y.jsx("path", { d: "M9 6l6 6-6 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
  }
), Mp = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ y.jsxs(
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
      /* @__PURE__ */ y.jsx("path", { d: "M15 16.57V8H17V15.43L21.51 18.14L20.49 19.86L15 16.57Z", fill: n }),
      /* @__PURE__ */ y.jsx(
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
), Rp = ({
  width: e = "1em",
  height: t = "1em",
  className: n,
  style: r
}) => /* @__PURE__ */ y.jsxs(
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
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4 7.50517V12.9988C4 12.9988 4.00012 13.0002 4.00089 13.0024C4.00189 13.0052 4.00358 13.0085 4.00578 13.0114L4.00827 13.0143L4.03042 13.0197L7.5 14.2844V8.84301L4 7.50517ZM8.5 8.84301V14.2844L11.9696 13.0197L11.9917 13.0143L11.9942 13.0114C11.9964 13.0085 11.9981 13.0052 11.9991 13.0024C11.9999 13.0002 12 12.9988 12 12.9988V7.50517L8.5 8.84301ZM8 7.96356L4.2628 6.53506L4.23081 6.52744C3.60002 6.37725 3 6.85752 3 7.49884V12.9988C3 13.4369 3.29207 13.8526 3.73507 13.9764L8 15.531L12.2649 13.9764C12.7079 13.8526 13 13.4369 13 12.9988V7.49884C13 6.85752 12.4 6.37725 11.7692 6.52744L11.7372 6.53506L8 7.96356Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.1785 9.81916L9.67852 10.3925L9.32148 9.45844L10.8215 8.88508L11.1785 9.81916ZM4.82149 9.81917L5.17853 8.88509L6.67853 9.45844L6.32149 10.3925L4.82149 9.81917Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.1785 12.1671L9.67851 12.7404L9.32147 11.8063L10.8215 11.233L11.1785 12.1671ZM4.82148 12.1671L5.17852 11.233L6.67852 11.8063L6.32148 12.7404L4.82148 12.1671Z",
          fill: "#535965"
        }
      ),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11 4C9.067 4 7.5 2.433 7.5 0.5H8.5C8.5 1.88071 9.61929 3 11 3V4Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8.5 0.5C8.5 2.433 6.933 4 5 4V3C6.38071 3 7.5 1.88071 7.5 0.5H8.5Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 3C6.933 3 8.5 4.567 8.5 6.5H7.5C7.5 5.11929 6.38071 4 5 4V3Z",
          fill: "#146FF4"
        }
      ),
      /* @__PURE__ */ y.jsx(
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
), jp = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ y.jsxs(
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
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M15.0733 3.95252C14.6707 3.56066 14.131 3.3414 13.5691 3.3414C13.0073 3.3414 12.4676 3.56066 12.065 3.95252L4.04331 11.8192C3.90907 11.9497 3.72926 12.0227 3.54206 12.0227C3.35486 12.0227 3.17504 11.9497 3.04081 11.8192C2.97509 11.7553 2.92285 11.6788 2.88718 11.5944C2.85151 11.5099 2.83313 11.4192 2.83313 11.3275C2.83313 11.2358 2.85151 11.1451 2.88718 11.0607C2.92285 10.9762 2.97509 10.8998 3.04081 10.8359L11.0625 2.96919C11.7335 2.31618 12.6328 1.95081 13.5691 1.95081C14.5055 1.95081 15.4048 2.31618 16.0758 2.96919C16.4641 3.34678 16.7574 3.81094 16.9318 4.32368C17.1062 4.83643 17.1567 5.38318 17.0791 5.91919C17.6223 5.84194 18.1759 5.89043 18.6973 6.06092C19.2187 6.2314 19.6941 6.51934 20.0866 6.90252L20.1283 6.94419C20.4569 7.26376 20.7181 7.64596 20.8965 8.0682C21.0748 8.49044 21.1667 8.94416 21.1667 9.40252C21.1667 9.86089 21.0748 10.3146 20.8965 10.7368C20.7181 11.1591 20.4569 11.5413 20.1283 11.8609L12.8733 18.975C12.8514 18.9963 12.834 19.0218 12.8221 19.0499C12.8102 19.078 12.8041 19.1082 12.8041 19.1388C12.8041 19.1693 12.8102 19.1995 12.8221 19.2277C12.834 19.2558 12.8514 19.2812 12.8733 19.3025L14.3633 20.7642C14.429 20.8281 14.4813 20.9045 14.5169 20.989C14.5526 21.0734 14.571 21.1642 14.571 21.2559C14.571 21.3475 14.5526 21.4383 14.5169 21.5227C14.4813 21.6072 14.429 21.6836 14.3633 21.7475C14.2291 21.878 14.0493 21.951 13.8621 21.951C13.6749 21.951 13.495 21.878 13.3608 21.7475L11.8708 20.2867C11.7173 20.1376 11.5953 19.9592 11.512 19.7621C11.4287 19.565 11.3858 19.3532 11.3858 19.1392C11.3858 18.9252 11.4287 18.7134 11.512 18.5163C11.5953 18.3192 11.7173 18.1408 11.8708 17.9917L19.1258 10.8767C19.3229 10.6849 19.4795 10.4556 19.5864 10.2022C19.6934 9.94888 19.7485 9.67668 19.7485 9.40169C19.7485 9.1267 19.6934 8.8545 19.5864 8.60117C19.4795 8.34783 19.3229 8.11849 19.1258 7.92669L19.0841 7.88586C18.6819 7.4944 18.143 7.27516 17.5817 7.27469C17.0205 7.27423 16.4812 7.49257 16.0783 7.88336L10.1016 13.745L10.1 13.7467L10.0183 13.8275C9.88404 13.9582 9.70404 14.0314 9.51664 14.0314C9.32925 14.0314 9.14925 13.9582 9.01498 13.8275C8.94926 13.7636 8.89702 13.6872 8.86135 13.6027C8.82568 13.5183 8.8073 13.4275 8.8073 13.3359C8.8073 13.2442 8.82568 13.1534 8.86135 13.069C8.89702 12.9845 8.94926 12.9081 9.01498 12.8442L15.0758 6.90002C15.2723 6.7081 15.4284 6.47878 15.5349 6.22558C15.6414 5.97238 15.6962 5.70043 15.696 5.42575C15.6957 5.15106 15.6405 4.8792 15.5336 4.62618C15.4266 4.37317 15.2701 4.14412 15.0733 3.95252Z",
          fill: "#845EFF"
        }
      ),
      /* @__PURE__ */ y.jsx(
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
), Fp = ({
  width: e = "1em",
  height: t = "1em",
  stroke: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ y.jsx(
  "svg",
  {
    width: e,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: i,
    children: /* @__PURE__ */ y.jsx(
      "path",
      {
        d: "M3.5 13.05V2.95001C3.5 2.60501 3.85 2.39001 4.125 2.56001L12.29 7.61001C12.57 7.78501 12.57 8.21501 12.29 8.38501L4.125 13.44C3.845 13.615 3.5 13.395 3.5 13.05Z",
        stroke: n,
        strokeMiterlimit: "10"
      }
    )
  }
), zp = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "currentColor",
  className: r,
  style: i
}) => /* @__PURE__ */ y.jsxs(
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
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19.7559 10.083L19.5957 12H21.2598V14H19.4297L19.0957 18H20.7598V20H18.9297L18.7559 22.083L16.7637 21.917L16.9238 20H14.4297L14.2559 22.083L12.2637 21.917L12.4238 20H10.7598V18H12.5898L12.9238 14H11.2598V12H13.0898L13.2637 9.91699L15.2559 10.083L15.0957 12H17.5898L17.7637 9.91699L19.7559 10.083ZM14.5957 18H17.0898L17.4238 14H14.9297L14.5957 18Z",
          fill: n
        }
      ),
      /* @__PURE__ */ y.jsx(
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
), Op = ({
  width: e = "1em",
  height: t = "1em",
  fill: n = "#146FF4",
  className: r,
  style: i
}) => /* @__PURE__ */ y.jsxs(
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
      /* @__PURE__ */ y.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.99 11.3025L20.5499 16.005L12.99 20.7074V11.3025ZM13.1594 9.09996C12.1658 8.73983 10.99 9.42704 10.99 10.6V21.4C10.99 22.7094 12.4421 23.4114 13.481 22.7574L22.2952 17.2747L22.3021 17.2703C23.2226 16.6764 23.2226 15.3335 22.3021 14.7397L22.2952 14.7352L13.2356 9.09996H13.1594Z",
          fill: n
        }
      ),
      /* @__PURE__ */ y.jsx(
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
), Xi = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, Gt = ne.span`
    font-size: 10px;
    color: ${({ theme: e }) => ro(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, _p = ne(Ie)`
    margin-left: auto;
`, Bp = ne.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, $p = ({
  totalTokens: e,
  requestTokens: t,
  responseTokens: n,
  duration: r,
  handleCopyClick: i
}) => {
  const [l, o] = M.useState(!1), a = M.useRef(null);
  M.useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const u = () => {
    i(), o(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => o(!1), 1e3);
  };
  return /* @__PURE__ */ y.jsxs(Ie, { alignItems: "center", children: [
    /* @__PURE__ */ y.jsxs(Ie, { gap: 4, children: [
      /* @__PURE__ */ y.jsx(zp, {}),
      /* @__PURE__ */ y.jsx(Gt, { children: e })
    ] }),
    /* @__PURE__ */ y.jsx(Gt, { children: `(${t} / ${n})` }),
    /* @__PURE__ */ y.jsxs(Ie, { gap: 4, children: [
      /* @__PURE__ */ y.jsx(Mp, {}),
      /* @__PURE__ */ y.jsx(Gt, { children: Xi(r) })
    ] }),
    /* @__PURE__ */ y.jsxs(_p, { children: [
      /* @__PURE__ */ y.jsx(bl, { icon: l ? /* @__PURE__ */ y.jsx(Sp, {}) : /* @__PURE__ */ y.jsx(Ap, {}), onPress: u }),
      l && /* @__PURE__ */ y.jsx(Bp, { children: "Copied to clipboard" })
    ] })
  ] });
}, Np = () => /* @__PURE__ */ y.jsxs(_r, { children: [
  /* @__PURE__ */ y.jsx(We, { children: "Generate output" }),
  /* @__PURE__ */ y.jsx("div", { children: "Select a model and run the prompt to generate the output. You can also run the prompt against multiple test cases to get a comprehensive output table for easy analysis and comparison." })
] }), Vp = ne.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, Hp = ne.div`
    padding-bottom: 8px;
`, qp = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = M.useState(n), l = M.useId();
  return /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsxs(Vp, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ y.jsx(Pp, {}) : /* @__PURE__ */ y.jsx(Dp, {}),
      e
    ] }),
    r && /* @__PURE__ */ y.jsx(Hp, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, Up = (e) => "kbDisplayName" in e, Wp = (e) => "serverName" in e, Zp = ne.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Yp = ne.div`
    font-size: 16px;
`, Gp = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return Up(n) ? (i = /* @__PURE__ */ y.jsx(Rp, {}), r = n.kbDisplayName) : Wp(n) ? (i = /* @__PURE__ */ y.jsx(jp, {}), r = n.toolName) : (i = /* @__PURE__ */ y.jsx(Op, {}), r = n.displayName), /* @__PURE__ */ y.jsxs(Ie, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ y.jsx(Yp, { children: i }),
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("div", { children: r }),
        /* @__PURE__ */ y.jsx(Zp, { children: Xi(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ y.jsx(Ie, { marginTop: 8, children: /* @__PURE__ */ y.jsx(qp, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, Xp = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && navigator.clipboard.writeText(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ y.jsxs(Br, { children: [
    /* @__PURE__ */ y.jsx(We, { children: "Test execution failed" }),
    /* @__PURE__ */ y.jsx("div", { children: i.message })
  ] }) : n ? /* @__PURE__ */ y.jsx(Fo, {}) : t ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(kp, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ y.jsx(xp, { content: t.responseText }),
    /* @__PURE__ */ y.jsx(
      $p,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ y.jsx(Gp, { tools: t.tools })
  ] }) : /* @__PURE__ */ y.jsx(Np, {});
  return /* @__PURE__ */ y.jsx(qe, { label: "Output", children: o() });
}, Dr = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], Kp = ne.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, Qp = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ y.jsx(zr, { src: t, alt: o }) : t;
  return /* @__PURE__ */ y.jsx(wl, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ y.jsxs(Kp, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, Jp = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ y.jsxs(Ie, { children: [
  e && /* @__PURE__ */ y.jsx(Mn, { children: /* @__PURE__ */ y.jsx(Cl, { children: /* @__PURE__ */ y.jsx(
    vl,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ y.jsx(Mn, { fullWidth: !0, children: /* @__PURE__ */ y.jsx(Sl, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), ed = ne.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, td = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ y.jsx(ed, { children: e.map((r, i) => {
  var l, o, a, u;
  return /* @__PURE__ */ y.jsx(
    Jp,
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
}) }) : null, nd = ne(io)`
    flex: 1;
`, rd = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  triggerTestAction: i
}) => {
  const [l, o] = M.useState(Dr[0]), [a, u] = M.useState(
    e.map((c) => ({
      ...c,
      value: ""
    }))
  );
  M.useEffect(() => {
    u((c) => {
      const p = new Map(c.map((h) => [h.key, h.value]));
      return e.map((h) => p.has(h.key) ? { ...h, value: p.get(h.key) } : {
        ...h,
        value: ""
      });
    });
  }, [e]);
  const s = () => i(a), f = (c, p) => {
    u((h) => {
      const g = [...h];
      return g[c] = { ...g[c], value: p }, g;
    });
  };
  return /* @__PURE__ */ y.jsxs(qe, { label: "Playground", children: [
    r && /* @__PURE__ */ y.jsxs(eo, { children: [
      /* @__PURE__ */ y.jsx(We, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ y.jsx("div", { children: "Please restart the application to apply the changes to the agent." })
    ] }),
    /* @__PURE__ */ y.jsxs(Ie, { children: [
      /* @__PURE__ */ y.jsx(
        nd,
        {
          defaultValue: l == null ? void 0 : l.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: Dr.map((c) => /* @__PURE__ */ y.jsx(ao, { id: c.uuid, children: c.name }, c.uuid))
        }
      ),
      /* @__PURE__ */ y.jsx(
        Qp,
        {
          label: "Test",
          icon: /* @__PURE__ */ y.jsx(Fp, {}),
          onPress: s,
          variant: "primary",
          isDisabled: n,
          alt: "run test icon"
        }
      )
    ] }),
    a.length > 0 && /* @__PURE__ */ y.jsx(
      td,
      {
        variables: a,
        highlightRules: t,
        onVariableChange: f
      }
    )
  ] });
}, id = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ld = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var od = Object.defineProperty, ad = (e, t) => od(e, "name", { value: t, configurable: !0 });
const sd = ad((e) => y.jsx(Te, { light: ld, dark: id, ...e }), "AppSelectorNoVersionIcon"), ud = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", cd = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var fd = Object.defineProperty, hd = (e, t) => fd(e, "name", { value: t, configurable: !0 });
const pd = hd((e) => y.jsx(Te, { light: cd, dark: ud, ...e }), "EditIcon"), dd = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", md = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var gd = Object.defineProperty, xd = (e, t) => gd(e, "name", { value: t, configurable: !0 });
const yd = xd((e) => y.jsx(Te, { light: md, dark: dd, ...e }), "PageIcon"), kd = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", bd = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var wd = Object.defineProperty, Cd = (e, t) => wd(e, "name", { value: t, configurable: !0 });
const vd = Cd((e) => y.jsx(Te, { light: bd, dark: kd, ...e }), "SyncIcon"), Sd = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", Ed = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Id = Object.defineProperty, Td = (e, t) => Id(e, "name", { value: t, configurable: !0 });
const Ld = Td((e) => y.jsx(Te, { light: Ed, dark: Sd, ...e }), "CheckCheckboxIcon");
var Ad = Object.defineProperty, Pd = (e, t) => Ad(e, "name", { value: t, configurable: !0 });
const Dd = Pd(({ children: e, ...t }) => y.jsx(Rd, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => y.jsxs(y.Fragment, { children: [y.jsxs(Ki, { $isSelected: r, $isIndeterminate: n, children: [n && y.jsx(Md, {}), r && !n && y.jsx(Ld, {})] }), e] }) }), "Checkbox"), Ki = ne.div`
    width: ${Me.size12};
    height: ${Me.size12};
    margin: ${Me.spacing2};
    border-radius: ${Me.borderRadiusXs};
    border: ${Me.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: n }) => t && !n ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, Md = ne.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, Rd = ne(mo)`
    cursor: pointer;
    display: flex;
    height: ${Me.size16};
    gap: ${Me.spacing4};
    line-height: ${Me.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${Ki} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${El}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, jd = ne(Dd)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Fd = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  toolValidations: l
}) => {
  const [o, a] = M.useState([]), u = M.useMemo(() => e.tools ? e.tools.map((k, x) => ({
    id: k.id ?? String(x),
    enabled: k.enabled,
    name: k.toolType === jn.Microflow ? k.name : k.document.qualifiedName.split(".")[1],
    description: k.description || "",
    tooltype: k.toolType,
    tool: k.document.qualifiedName || ""
  })) : [], [e.tools]), { items: s, sortProps: f } = lo(u), c = M.useCallback(
    (k) => {
      const x = l.get(k);
      return x === "invalid" ? /* @__PURE__ */ y.jsx(zn, { icon: /* @__PURE__ */ y.jsx(Il, { title: "Tool invalid" }) }) : x === "syncing" ? /* @__PURE__ */ y.jsx(zn, { icon: /* @__PURE__ */ y.jsx(vd, { title: "Validating..." }) }) : null;
    },
    [l]
  ), p = M.useCallback(async () => {
    const k = await _n(t, n, e, r);
    k && i(k);
  }, [t, n, e, r, i]), h = M.useCallback(async () => {
    if (o.length === 0 || !e.tools)
      return;
    const k = o[0], x = await _n(
      t,
      n,
      e,
      r,
      k
    );
    x && i(x);
  }, [t, n, e, r, i, o]), g = M.useCallback(async () => {
    if (o.length === 0 || !e.tools)
      return;
    const k = o[0], x = await Mo(t, e, r, k);
    x && i(x);
  }, [e, r, i, o]), C = M.useCallback(
    async (k, x) => {
      if (!e.tools)
        return;
      const E = e.tools.map(
        (j) => (j.id ?? "") === k ? { ...j, enabled: x } : j
      ), S = { ...e, tools: E };
      r(S), i(S);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, r, i]
  );
  return /* @__PURE__ */ y.jsx(qe, { label: "Tools", children: /* @__PURE__ */ y.jsx(
    oo,
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
      data: s.map((k) => [
        c(k.id),
        /* @__PURE__ */ y.jsx(
          jd,
          {
            "aria-label": "Enabled",
            isSelected: k.enabled,
            onChange: (x) => C(k.id, x)
          }
        ),
        k.name,
        k.description,
        /* @__PURE__ */ y.jsx(
          to,
          {
            icon: k.tooltype === jn.Microflow ? /* @__PURE__ */ y.jsx(so, {}) : Nl,
            text: k.tool
          }
        )
      ]),
      rowKey: (k, x) => {
        var E;
        return ((E = s[x]) == null ? void 0 : E.id) ?? String(x);
      },
      rowOpacity: (k) => {
        var x;
        return (x = s[k]) != null && x.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: o,
      onDoubleClick: h,
      onSelectionChange: a,
      ...f,
      toolbarLeft: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          At,
          {
            icon: /* @__PURE__ */ y.jsx(yd, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: p
          }
        ),
        /* @__PURE__ */ y.jsx(
          At,
          {
            icon: /* @__PURE__ */ y.jsx(pd, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: h,
            tooltip: "Edit selected tool",
            isDisabled: o.length === 0
          }
        ),
        /* @__PURE__ */ y.jsx(
          At,
          {
            icon: /* @__PURE__ */ y.jsx(sd, {}),
            label: "Delete",
            "aria-label": "Delete selected tool",
            onPress: g,
            tooltip: "Delete selected tool",
            isDisabled: o.length === 0
          }
        )
      ] })
    }
  ) });
}, zd = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  missingAttributes: [],
  unusedAttributes: []
}, Od = ({
  agentDocument: { name: e, contents: t, $ID: n },
  isRuntimeConnected: r,
  showUnsavedChangesWarning: i,
  studioPro: l,
  updateStudioProDocument: o
}) => {
  var Ae;
  const [a, u] = M.useState(!1), [s, f] = M.useState(zd), [c, p] = M.useState(void 0), [h, g] = M.useState(t), [C, k] = M.useState(!1), [x, E] = M.useState(/* @__PURE__ */ new Map()), S = Tl(), {
    data: j,
    isError: A,
    error: w,
    isPending: O,
    execute: N
  } = Io(l, n, r), _ = M.useRef(null);
  M.useEffect(() => {
    var z;
    d(t).then((Z) => f(Z)), oe(l, (z = t.entity) == null ? void 0 : z.qualifiedName).then((Z) => p(Z)), g(t), u(!0);
  }, []), M.useEffect(() => () => {
    _.current && clearTimeout(_.current);
  }, []), M.useEffect(() => {
    a && (async () => {
      var X;
      const Z = await oe(l, (X = h.entity) == null ? void 0 : X.qualifiedName);
      p(Z);
    })();
  }, [l, (Ae = h.entity) == null ? void 0 : Ae.qualifiedName]), M.useEffect(() => {
    a && (async () => {
      if (h.tools && h.tools.length > 0) {
        const Z = /* @__PURE__ */ new Map();
        h.tools.forEach((de) => {
          Z.set(de.id, "syncing");
        }), E(Z);
        const X = await Promise.all(
          h.tools.map(async (de) => {
            const ve = await no("document", de, h, l);
            return {
              id: de.id,
              state: ve === !0 ? "valid" : "invalid"
            };
          })
        ), te = new Map(X.map((de) => [de.id, de.state]));
        E(te);
      }
    })();
  }, [a]);
  const b = M.useRef(/* @__PURE__ */ new Map());
  M.useEffect(() => {
    if (a && h.tools) {
      const z = b.current, Z = /* @__PURE__ */ new Map();
      h.tools.forEach((X) => {
        Z.set(X.id, X.document.qualifiedName);
      }), E((X) => {
        var de;
        const te = new Map(X);
        return (de = h.tools) == null || de.forEach((ve) => {
          if (!X.has(ve.id))
            te.set(ve.id, "valid");
          else {
            const pt = z.get(ve.id), Xe = Z.get(ve.id);
            pt !== void 0 && Xe !== void 0 && pt !== Xe && te.set(ve.id, "valid");
          }
        }), te;
      }), b.current = Z;
    }
  }, [h.tools, a]), M.useEffect(() => {
    a && (async () => {
      const Z = await d(h);
      f(Z);
    })();
  }, [l, h]);
  const P = M.useMemo(() => Vl(h.variables, S), [h.variables, S]), D = (z) => (Z) => {
    const X = { ...h, [z]: Z };
    g(X), _.current && clearTimeout(_.current), _.current = setTimeout(async () => {
      const te = await To(
        l,
        z,
        X,
        o,
        Z
      );
      g(te);
    }, 300);
  }, V = async () => {
    const z = await Lo(l, h, o);
    z && g(z);
  }, R = async () => {
    const z = await Ao(l, h, o);
    z && g(z);
  }, L = async () => {
    h.model && Po(l, h.model);
  }, W = async () => {
    h.entity && Zl(l, h.entity.qualifiedName);
  }, Q = async () => {
    const z = await Do(l, Fn, h, o);
    z && g(z);
  }, oe = async (z, Z) => {
    if (!Z)
      return;
    const X = await Hl(z, Z);
    if (!X)
      return;
    const te = await ql(X, z);
    if (te !== void 0)
      return te ? /* @__PURE__ */ y.jsx(bo, {}) : /* @__PURE__ */ y.jsx(Eo, {});
  }, ge = M.useMemo(() => {
    let z = "";
    return h.maxTokens !== void 0 && (z += "Max tokens: " + h.maxTokens.toLocaleString(navigator.language)), h.temperature !== void 0 && (z.length > 0 && (z += ", "), z += "Temperature: " + h.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), h.topP !== void 0 && (z.length > 0 && (z += ", "), z += "Top P: " + h.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), z;
  }, [h.temperature, h.maxTokens, h.topP]), d = async (z) => ({
    isValidModel: await Pt("model", l, z),
    isValidEntity: await Pt("entity", l, z),
    isValidUserPrompt: await Pt("userPrompt", l, z),
    missingAttributes: await Wl(l, z),
    unusedAttributes: await Ul(l, z)
  }), ue = () => {
    var z, Z, X;
    return /* @__PURE__ */ y.jsxs(qe, { label: "General", children: [
      /* @__PURE__ */ y.jsx(
        Lt,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((z = h.model) == null ? void 0 : z.qualifiedName) || "",
          icon: h.model ? Jl : void 0,
          buttonCaption: "Select...",
          onClick: R,
          validate: () => s.isValidModel,
          buttonCaptionSecondary: h.model ? "Show" : void 0,
          onClickSecondary: h.model ? L : void 0
        }
      ),
      /* @__PURE__ */ y.jsx(
        Lt,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: ge,
          buttonCaption: "Edit",
          onClick: Q,
          validate: void 0
        }
      ),
      /* @__PURE__ */ y.jsx(
        Ll,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: h.description,
          onChange: D("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ y.jsx(
        Lt,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((Z = h.entity) == null ? void 0 : Z.qualifiedName) || "",
          icon: c,
          onClick: V,
          buttonCaption: "Select...",
          validate: () => s.isValidEntity,
          buttonCaptionSecondary: h.entity ? "Show" : void 0,
          onClickSecondary: h.entity ? W : void 0
        }
      ),
      h.entity && s.missingAttributes.length > 0 && /* @__PURE__ */ y.jsxs(Br, { children: [
        /* @__PURE__ */ y.jsx(We, { children: `The following attributes cannot be found in ${h.entity.qualifiedName}:` }),
        /* @__PURE__ */ y.jsx("div", { children: s.missingAttributes.map((te) => `{{${te}}}`).join(", ") })
      ] }),
      h.entity && s.unusedAttributes.length > 0 && !C && /* @__PURE__ */ y.jsxs(_r, { onClose: () => k(!0), children: [
        /* @__PURE__ */ y.jsx(We, { children: `The following attributes are found in ${(X = h.entity) == null ? void 0 : X.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ y.jsx("div", { children: s.unusedAttributes.map((te) => `{{${te}}}`).join(", ") })
      ] })
    ] });
  }, xe = () => /* @__PURE__ */ y.jsx(qe, { label: "System prompt", children: /* @__PURE__ */ y.jsx(
    On,
    {
      ariaLabel: "System prompt",
      value: h.systemPrompt,
      onChange: D("systemPrompt"),
      highlightRules: P,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), m = () => /* @__PURE__ */ y.jsx(qe, { label: "User prompt", children: /* @__PURE__ */ y.jsx(
    On,
    {
      ariaLabel: "User prompt",
      value: h.userPrompt || "",
      onChange: D("userPrompt"),
      highlightRules: P,
      validate: () => s.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), ce = () => /* @__PURE__ */ y.jsx(
    Fd,
    {
      agent: h,
      studioPro: l,
      componentName: Fn,
      updateStudioProDocument: o,
      onAgentChange: g,
      toolValidations: x
    }
  ), Ce = () => /* @__PURE__ */ y.jsx(
    rd,
    {
      variables: h.variables,
      highlightRules: P,
      triggerTestAction: N,
      isDisabled: O || i,
      showUnsavedChangesWarning: i
    }
  ), ee = () => /* @__PURE__ */ y.jsx(
    Xp,
    {
      agentName: e,
      response: j,
      isLoading: O,
      isError: A,
      error: w
    }
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(Rn, { children: [
      ue(),
      xe(),
      m(),
      ce()
    ] }),
    /* @__PURE__ */ y.jsxs(Rn, { children: [
      Ce(),
      ee()
    ] })
  ] });
}, _d = Yl(), Bd = ({ studioPro: e, documentId: t }) => {
  var x, E, S, j;
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = M.useState(!1), [o, a] = M.useState(_d), [u, s] = M.useState(0), [f, c] = M.useState(!1), [p, h] = M.useState(!1), g = [
    t,
    (x = o.contents.model) == null ? void 0 : x.documentId,
    ...o.contents.tools.map((A) => A.document.documentId)
  ].filter((A) => !!A), C = o.contents.entity ? [(j = (S = (E = o.contents.entity) == null ? void 0 : E.qualifiedName) == null ? void 0 : S.split(".")) == null ? void 0 : j[0]] : void 0;
  M.useEffect(() => {
    r.getDocumentById(t).then(async (A) => {
      if (A && !("error" in A))
        l(!0), a(A.document);
      else
        throw new Error((A == null ? void 0 : A.error) || "Document not found");
    }).catch(async (A) => {
      await n.show("error", "Error loading document", "Details: " + (A == null ? void 0 : A.message) || A), l(!0);
    });
  }, [u]);
  const k = M.useCallback(
    (A) => {
      A.some((w) => w === t) && s((w) => w + 1), h(!0);
    },
    [t]
  );
  return uo({
    studioPro: e,
    dependentIds: g,
    onDependentDocumentsChanged: k,
    watchProjectSettings: !0,
    watchDomainModelModules: C
  }), M.useEffect(() => {
    const A = (w) => {
      c(w.isConnected), h(!1);
    };
    return e.runtime.controller.addEventListener("connectionChanged", A), () => {
      e.runtime.controller.removeEventListener("connectionChanged", A);
    };
  }, []), M.useEffect(() => {
    Gl(e).then((A) => {
      c(A);
    });
  }, [e]), /* @__PURE__ */ y.jsx(Al, { studioPro: e, children: /* @__PURE__ */ y.jsxs(Pl, { children: [
    !i && /* @__PURE__ */ y.jsx(Ql, {}),
    i && /* @__PURE__ */ y.jsx(Dl, { children: /* @__PURE__ */ y.jsx(
      Od,
      {
        agentDocument: o,
        isRuntimeConnected: f,
        showUnsavedChangesWarning: p && f,
        studioPro: e,
        updateStudioProDocument: Xl(e, t)
      }
    ) })
  ] }) });
}, Qd = Kl(Bd);
export {
  Bd as App,
  Qd as component
};
//# sourceMappingURL=agentEdit.js.map
