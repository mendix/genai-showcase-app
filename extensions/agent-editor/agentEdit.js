import { r as P, $ as nn, a as pl, b as Ye, c as jr, d as ml, e as Fr, f as gl, g as zr, h as xl, i as yl, j as bl, k as kl, l as wl, m as Cl, n as vl, o as Sl, p as jn, q as El, s as Tl, t as Il, u as Rt, v as Ll, w as y, x as Le, y as re, z as Al, A as Or, G as He, B as Pl, C as _r, D as Ie, E as Br, F as Dl, T as Ml, H as Fn, L as Rl, S as jl, I as Fl, J as zl, K as zn, M as Ol, N as _l, P as Bl, O as $l } from "./Icon-fHsyUm8I.js";
import { D as Nl, P as Vl, a as Hl, e as ql, b as Ul, A as Wl, i as Zl, g as $r, m as Kl, c as Gl, d as Yl, k as Xl, f as Ql, T as On, h as Jl, j as eo, l as to, n as no, o as ro, p as io, q as jt, r as lo, s as oo, t as ao, u as so } from "./index-DsStz3tj.js";
import { I as St, T as Nr, B as Je, c as uo, C as co } from "./TextWithIcon-VpEcElJR.js";
import { m as fo } from "./modelUtils-B4UuvvXG.js";
import { I as Vr, W as Hr, E as ho } from "./Banner-CrOSEmJM.js";
import { h as po, T as _n } from "./toolHandlers-BpyTxTMZ.js";
import { T as Ft } from "./TextInputWithButton-Ck7o_ZdS.js";
import { h as mo } from "./knowledgebaseToolHandlers-C4Go8quH.js";
import { r as Fe, i as go } from "./userPreferences-BV8i5uIO.js";
import { u as qr, T as Ur, D as Xe, k as xo } from "./Table-Cr6LdGBI.js";
import { y as yo } from "./Link-6Dwxyd2F.js";
import { I as bo } from "./ComboBox-BoIVB1SV.js";
import { n as ko } from "./MicroflowIcon-CZXKWVwd.js";
const wo = ({
  studioPro: e,
  dependentIds: t,
  onDependentDocumentsChanged: n,
  watchProjectSettings: r,
  watchDomainModelModules: i
}) => {
  const o = P.useRef(n);
  o.current = n;
  const l = P.useRef(t);
  l.current = t;
  const a = P.useRef(i);
  a.current = i;
  const u = P.useRef(r);
  u.current = r, P.useEffect(() => {
    const s = ({ documents: f }) => {
      const c = [];
      for (const d of f)
        a.current && d.documentType === Nl && d.moduleName && a.current.includes(d.moduleName) ? c.push("domainModel") : u.current && d.documentType === Vl ? c.push("projectSettings") : l.current.includes(d.documentId) && c.push(d.documentId);
      c.length > 0 && o.current(c);
    };
    return e.app.projectChanges.addEventListener("documentsChanged", s), () => {
      e.app.projectChanges.removeEventListener("documentsChanged", s);
    };
  }, [e.app.projectChanges]);
};
function Co(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: o, name: l, form: a, children: u, "aria-label": s, "aria-labelledby": f, validationState: c = "valid", isInvalid: d, onPressStart: h, onPressEnd: x, onPressChange: w, onPress: b, onPressUp: g, onClick: S } = e, E = (N) => {
    N.stopPropagation(), t.setSelected(N.target.checked);
  }, R = u != null, L = s != null || f != null;
  !R && !L && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: C, isPressed: O } = nn({
    onPressStart: h,
    onPressEnd: x,
    onPressChange: w,
    onPress: b,
    onPressUp: g,
    onClick: S,
    isDisabled: r
  }), { pressProps: V, isPressed: B } = nn({
    onPressStart: h,
    onPressEnd: x,
    onPressChange: w,
    onPressUp: g,
    onClick: S,
    onPress(N) {
      var j;
      b == null || b(N), t.toggle(), (j = n.current) === null || j === void 0 || j.focus();
    },
    isDisabled: r || i
  }), { focusableProps: k } = pl(e, n), D = Ye(C, k), M = jr(e, {
    labelable: !0
  });
  return ml(n, t.defaultSelected, t.setSelected), {
    labelProps: Ye(V, {
      onClick: (N) => N.preventDefault()
    }),
    inputProps: Ye(M, {
      "aria-invalid": d || c === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": i || void 0,
      onChange: E,
      disabled: r,
      ...o == null ? {} : {
        value: o
      },
      name: l,
      form: a,
      type: "checkbox",
      ...D
    }),
    isSelected: t.isSelected,
    isPressed: O || B,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: d || c === "invalid"
  };
}
function Wr(e, t, n) {
  let r = Fr({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: o, validationDetails: l } = r.displayValidation, { labelProps: a, inputProps: u, isSelected: s, isPressed: f, isDisabled: c, isReadOnly: d } = Co({
    ...e,
    isInvalid: i
  }, t, n);
  gl(e, r, n);
  let { isIndeterminate: h, isRequired: x, validationBehavior: w = "aria" } = e;
  P.useEffect(() => {
    n.current && (n.current.indeterminate = !!h);
  });
  let { pressProps: b } = nn({
    isDisabled: c || d,
    onPress() {
      let { [zr]: g } = e, { commitValidation: S } = g || r;
      S();
    }
  });
  return {
    labelProps: Ye(a, b, P.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (g) => g.preventDefault()
    }), [])),
    inputProps: {
      ...u,
      checked: s,
      "aria-required": x && w === "aria" || void 0,
      required: x && w === "native"
    },
    isSelected: s,
    isPressed: f,
    isDisabled: c,
    isReadOnly: d,
    isInvalid: i,
    validationErrors: o,
    validationDetails: l
  };
}
const vo = /* @__PURE__ */ new WeakMap();
function Zr(e = {}) {
  let { isReadOnly: t } = e, [n, r] = xl(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = P.useState(n);
  function o(u) {
    t || r(u);
  }
  function l() {
    t || r(!n);
  }
  var a;
  return {
    isSelected: n,
    defaultSelected: (a = e.defaultSelected) !== null && a !== void 0 ? a : i,
    setSelected: o,
    toggle: l
  };
}
function So(e, t, n) {
  const r = Zr({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(g) {
      g ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(g);
    }
  });
  let { name: i, form: o, descriptionId: l, errorMessageId: a, validationBehavior: u } = vo.get(t);
  var s;
  u = (s = e.validationBehavior) !== null && s !== void 0 ? s : u;
  let { realtimeValidation: f } = Fr({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = P.useRef(yl), d = () => {
    t.setInvalid(e.value, f.isInvalid ? f : c.current);
  };
  P.useEffect(d);
  let h = t.realtimeValidation.isInvalid ? t.realtimeValidation : f, x = u === "native" ? t.displayValidation : h;
  var w;
  let b = Wr({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || o,
    isRequired: (w = e.isRequired) !== null && w !== void 0 ? w : t.isRequired,
    validationBehavior: u,
    [zr]: {
      realtimeValidation: h,
      displayValidation: x,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(g) {
        c.current = g, d();
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
        l
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
const Eo = /* @__PURE__ */ P.createContext(null), To = /* @__PURE__ */ P.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = bl(i, n, kl);
  let { validationBehavior: o } = wl(Cl) || {};
  var l, a;
  let u = (a = (l = t.validationBehavior) !== null && l !== void 0 ? l : o) !== null && a !== void 0 ? a : "native", s = P.useContext(Eo), f = vl(P.useMemo(() => Sl(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: c, inputProps: d, isSelected: h, isDisabled: x, isReadOnly: w, isPressed: b, isInvalid: g } = s ? So({
    ...jn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, f) : Wr({
    ...jn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: u
  }, Zr(t), f), { isFocused: S, isFocusVisible: E, focusProps: R } = El(), L = x || w, { hoverProps: C, isHovered: O } = Tl({
    ...t,
    isDisabled: L
  }), V = Il({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: h,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: b,
      isHovered: O,
      isFocused: S,
      isFocusVisible: E,
      isDisabled: x,
      isReadOnly: w,
      isInvalid: g,
      isRequired: t.isRequired || !1
    }
  }), B = jr(t, {
    global: !0
  });
  return delete B.id, delete B.onClick, /* @__PURE__ */ Rt.createElement("label", {
    ...Ye(B, c, C, V),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": h || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": b || void 0,
    "data-hovered": O || void 0,
    "data-focused": S || void 0,
    "data-focus-visible": E || void 0,
    "data-disabled": x || void 0,
    "data-readonly": w || void 0,
    "data-invalid": g || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Rt.createElement(Ll, {
    elementType: "span"
  }, /* @__PURE__ */ Rt.createElement("input", {
    ...Ye(d, R),
    ref: f
  })), V.children);
}), Io = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", Lo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Ao = Object.defineProperty, Po = (e, t) => Ao(e, "name", { value: t, configurable: !0 });
const Do = Po((e) => y.jsx(Le, { light: Lo, dark: Io, ...e }), "EntityIcon"), Mo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ro = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var jo = Object.defineProperty, Fo = (e, t) => jo(e, "name", { value: t, configurable: !0 });
const zo = Fo((e) => y.jsx(Le, { light: Ro, dark: Mo, ...e }), "EntityNonPersistableIcon"), Oo = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", _o = "Test action failed. Please check the runtime logs for more details.", Bo = (e, t, n) => {
  const [r, i] = P.useState(void 0), [o, l] = P.useState(!1), [a, u] = P.useState(!1), [s, f] = P.useState(void 0), c = P.useCallback(
    async (d) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: Hl,
          title: "App is not running",
          message: "Please run the app to use the playground."
        });
        return;
      }
      l(!0), i(void 0), u(!1), f(void 0);
      try {
        const h = await ql(e, t, d);
        if (h === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in h && h.message === Ul) {
          u(!0), f({ name: "Error", message: Oo, link: Wl });
          return;
        }
        i(h);
      } catch {
        u(!0), f({ name: "Error", message: _o });
      } finally {
        l(!1);
      }
    },
    [e, n, t]
  );
  return { data: r, isPending: o, isError: a, error: s, execute: c };
}, $o = async (e, t, n, r, i) => {
  const o = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt") && (o.variables = await Gl(e, o)), r(o), o;
}, No = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const o = await Yl(e, t.variables, i);
    i = { ...i, variables: o }, n(i);
  }
  return i;
}, Vo = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Kl }
  });
  let i;
  return r.status === "ok" && (i = {
    ...t,
    model: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, model: void 0 }), i && n(i), i;
}, zt = async (e, t, n) => {
  switch (e) {
    case "model": {
      if (!n.model)
        return "Please select a model.";
      const r = await $r(t, n.model);
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
      if (!await Zl(t, n))
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
}, Ho = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await $r(e, t))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, qo = async (e, t, n, r) => {
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
  let o;
  return i && (o = i), o && r(o), o;
}, Bn = async (e, t, n, r, i) => {
  const o = i && n.tools ? n.tools.find((a) => a.id === i) : void 0, l = await e.ui.dialogs.showModal(
    {
      title: o ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: o ? encodeURIComponent(JSON.stringify(o)) : "",
        agent: n ? encodeURIComponent(JSON.stringify(n)) : ""
      }
    }
  );
  if (l !== null) {
    const a = l;
    let u;
    i && n.tools ? u = n.tools.map((f) => f.id === i ? a : f) : u = [...n.tools || [], a], u.sort((f, c) => f.name.localeCompare(c.name));
    const s = { ...n, tools: u };
    return r(s), s;
  } else
    return null;
}, Uo = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const o = t.tools.filter((a) => a.id !== r), l = { ...t, tools: o };
  return n(l), l;
}, $n = async (e, t, n, r, i) => {
  const o = n.knowledgebaseTools || [], l = i ? o.find((u) => u.id === i) : void 0, a = await e.ui.dialogs.showModal(
    {
      title: l ? "Edit knowledge base" : "Add knowledge base",
      contentSize: { height: 541, width: 600 }
    },
    {
      componentName: t,
      uiEntrypoint: "knowledgebaseToolEdit",
      queryParams: {
        tool: l ? encodeURIComponent(JSON.stringify(l)) : "",
        agent: n ? encodeURIComponent(JSON.stringify(n)) : ""
      }
    }
  );
  if (a !== null) {
    const u = a;
    let s;
    i ? s = o.map((c) => c.id === i ? u : c) : s = [...o, u], s.sort((c, d) => c.name.localeCompare(d.name));
    const f = { ...n, knowledgebaseTools: s };
    return r(f), f;
  }
  return null;
}, Wo = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to remove this knowledge base from the agent?"
  }) === !1)
    return;
  const l = (t.knowledgebaseTools || []).filter((u) => u.id !== r), a = { ...t, knowledgebaseTools: l };
  return n(a), a;
}, Zo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ko = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Go = Object.defineProperty, Yo = (e, t) => Go(e, "name", { value: t, configurable: !0 });
const Kr = Yo((e) => y.jsx(Le, { light: Ko, dark: Zo, ...e }), "AppSelectorNoVersionIcon"), Xo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Qo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Jo = Object.defineProperty, ea = (e, t) => Jo(e, "name", { value: t, configurable: !0 });
const Gr = ea((e) => y.jsx(Le, { light: Qo, dark: Xo, ...e }), "EditIcon"), ta = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", na = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ra = Object.defineProperty, ia = (e, t) => ra(e, "name", { value: t, configurable: !0 });
const Yr = ia((e) => y.jsx(Le, { light: na, dark: ta, ...e }), "PageIcon"), la = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", oa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var aa = Object.defineProperty, sa = (e, t) => aa(e, "name", { value: t, configurable: !0 });
const Xr = sa((e) => y.jsx(Le, { light: oa, dark: la, ...e }), "SyncIcon"), ua = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ca = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var fa = Object.defineProperty, ha = (e, t) => fa(e, "name", { value: t, configurable: !0 });
const da = ha((e) => y.jsx(Le, { light: ca, dark: ua, ...e }), "CheckCheckboxIcon");
var pa = Object.defineProperty, ma = (e, t) => pa(e, "name", { value: t, configurable: !0 });
const Qr = ma(({ children: e, ...t }) => y.jsx(xa, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => y.jsxs(y.Fragment, { children: [y.jsxs(Jr, { $isSelected: r, $isIndeterminate: n, children: [n && y.jsx(ga, {}), r && !n && y.jsx(da, {})] }), e] }) }), "Checkbox"), Jr = re.div`
    width: ${Fe.size12};
    height: ${Fe.size12};
    margin: ${Fe.spacing2};
    border-radius: ${Fe.borderRadiusXs};
    border: ${Fe.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: n }) => t && !n ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, ga = re.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, xa = re(To)`
    cursor: pointer;
    display: flex;
    height: ${Fe.size16};
    gap: ${Fe.spacing4};
    line-height: ${Fe.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${Jr} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${Al}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, ya = re(Qr)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, ba = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  knowledgebaseToolValidations: o
}) => {
  const [l, a] = P.useState([]), u = P.useMemo(() => (e.knowledgebaseTools || []).map((g, S) => ({
    id: g.id ?? String(S),
    enabled: g.enabled,
    name: g.name,
    description: g.description || "",
    tool: g.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: s, sortProps: f } = qr(u), c = P.useCallback(
    (b) => {
      const g = o.get(b);
      return g === "invalid" ? /* @__PURE__ */ y.jsx(St, { icon: /* @__PURE__ */ y.jsx(Or, { title: "Tool invalid" }) }) : g === "syncing" ? /* @__PURE__ */ y.jsx(St, { icon: /* @__PURE__ */ y.jsx(Xr, { title: "Validating..." }) }) : null;
    },
    [o]
  ), d = P.useCallback(async () => {
    const b = await $n(
      t,
      n,
      e,
      r
    );
    b && i(b);
  }, [t, n, e, r, i]), h = P.useCallback(async () => {
    const b = e.knowledgebaseTools || [];
    if (l.length === 0 || b.length === 0)
      return;
    const g = l[0], S = await $n(
      t,
      n,
      e,
      r,
      g
    );
    S && i(S);
  }, [t, n, e, r, i, l]), x = P.useCallback(async () => {
    const b = e.knowledgebaseTools || [];
    if (l.length === 0 || b.length === 0)
      return;
    const g = l[0], S = await Wo(
      t,
      e,
      r,
      g
    );
    S && i(S);
  }, [e, r, i, l]), w = P.useCallback(
    async (b, g) => {
      const S = e.knowledgebaseTools || [];
      if (S.length === 0)
        return;
      const E = S.map(
        (L) => (L.id ?? "") === b ? { ...L, enabled: g } : L
      ), R = { ...e, knowledgebaseTools: E };
      r(R), i(R);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, r, i]
  );
  return /* @__PURE__ */ y.jsx(He, { label: "Knowledge bases", children: /* @__PURE__ */ y.jsx(
    Ur,
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
          cellContent: /* @__PURE__ */ y.jsx(
            ya,
            {
              "aria-label": "Enabled",
              isSelected: b.enabled,
              onChange: (g) => w(b.id, g)
            }
          )
        },
        { cellContent: b.name, tooltipText: b.name },
        { cellContent: b.description, tooltipText: b.description },
        {
          cellContent: /* @__PURE__ */ y.jsx(Nr, { icon: Xl, text: b.tool }),
          tooltipText: b.tool
        }
      ]),
      rowKey: (b, g) => {
        var S;
        return ((S = s[g]) == null ? void 0 : S.id) ?? String(g);
      },
      rowOpacity: (b) => {
        var g;
        return (g = s[b]) != null && g.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: l,
      onDoubleClick: h,
      onSelectionChange: a,
      ...f,
      toolbarLeft: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ y.jsx(Yr, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: d
          }
        ),
        /* @__PURE__ */ y.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ y.jsx(Gr, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: h,
            tooltip: "Edit selected knowledge base",
            isDisabled: l.length === 0
          }
        ),
        /* @__PURE__ */ y.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ y.jsx(Kr, {}),
            label: "Delete",
            "aria-label": "Remove selected knowledge base from agent",
            onPress: x,
            tooltip: "Remove selected knowledge base from agent",
            isDisabled: l.length === 0
          }
        )
      ] })
    }
  ) });
}, ka = Pl`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, wa = re.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, Ot = re.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${ka} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, Ca = () => /* @__PURE__ */ y.jsxs(wa, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ y.jsx(Ot, { delay: "0s" }),
  /* @__PURE__ */ y.jsx(Ot, { delay: "0.2s" }),
  /* @__PURE__ */ y.jsx(Ot, { delay: "0.4s" })
] });
function va(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Sa = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ea = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ta = {};
function Nn(e, t) {
  return (Ta.jsx ? Ea : Sa).test(e);
}
const Ia = /[ \t\n\f\r]/g;
function La(e) {
  return typeof e == "object" ? e.type === "text" ? Vn(e.value) : !1 : Vn(e);
}
function Vn(e) {
  return e.replace(Ia, "") === "";
}
class mt {
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
mt.prototype.normal = {};
mt.prototype.property = {};
mt.prototype.space = void 0;
function ei(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new mt(n, r, t);
}
function rn(e) {
  return e.toLowerCase();
}
class ce {
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
ce.prototype.attribute = "";
ce.prototype.booleanish = !1;
ce.prototype.boolean = !1;
ce.prototype.commaOrSpaceSeparated = !1;
ce.prototype.commaSeparated = !1;
ce.prototype.defined = !1;
ce.prototype.mustUseProperty = !1;
ce.prototype.number = !1;
ce.prototype.overloadedBoolean = !1;
ce.prototype.property = "";
ce.prototype.spaceSeparated = !1;
ce.prototype.space = void 0;
let Aa = 0;
const $ = Ue(), te = Ue(), ln = Ue(), T = Ue(), Q = Ue(), Qe = Ue(), pe = Ue();
function Ue() {
  return 2 ** ++Aa;
}
const on = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: $,
  booleanish: te,
  commaOrSpaceSeparated: pe,
  commaSeparated: Qe,
  number: T,
  overloadedBoolean: ln,
  spaceSeparated: Q
}, Symbol.toStringTag, { value: "Module" })), _t = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(on)
);
class mn extends ce {
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
    let o = -1;
    if (super(t, n), Hn(this, "space", i), typeof r == "number")
      for (; ++o < _t.length; ) {
        const l = _t[o];
        Hn(this, _t[o], (r & on[l]) === on[l]);
      }
  }
}
mn.prototype.defined = !0;
function Hn(e, t, n) {
  n && (e[t] = n);
}
function tt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new mn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[rn(r)] = r, n[rn(o.attribute)] = r;
  }
  return new mt(t, n, e.space);
}
const ti = tt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: te,
    ariaAutoComplete: null,
    ariaBusy: te,
    ariaChecked: te,
    ariaColCount: T,
    ariaColIndex: T,
    ariaColSpan: T,
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
    ariaLevel: T,
    ariaLive: null,
    ariaModal: te,
    ariaMultiLine: te,
    ariaMultiSelectable: te,
    ariaOrientation: null,
    ariaOwns: Q,
    ariaPlaceholder: null,
    ariaPosInSet: T,
    ariaPressed: te,
    ariaReadOnly: te,
    ariaRelevant: null,
    ariaRequired: te,
    ariaRoleDescription: Q,
    ariaRowCount: T,
    ariaRowIndex: T,
    ariaRowSpan: T,
    ariaSelected: te,
    ariaSetSize: T,
    ariaSort: null,
    ariaValueMax: T,
    ariaValueMin: T,
    ariaValueNow: T,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function ni(e, t) {
  return t in e ? e[t] : t;
}
function ri(e, t) {
  return ni(e, t.toLowerCase());
}
const Pa = tt({
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
    allowFullScreen: $,
    allowPaymentRequest: $,
    allowUserMedia: $,
    alt: null,
    as: null,
    async: $,
    autoCapitalize: null,
    autoComplete: Q,
    autoFocus: $,
    autoPlay: $,
    blocking: Q,
    capture: null,
    charSet: null,
    checked: $,
    cite: null,
    className: Q,
    cols: T,
    colSpan: null,
    content: null,
    contentEditable: te,
    controls: $,
    controlsList: Q,
    coords: T | Qe,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: $,
    defer: $,
    dir: null,
    dirName: null,
    disabled: $,
    download: ln,
    draggable: te,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: $,
    formTarget: null,
    headers: Q,
    height: T,
    hidden: ln,
    high: T,
    href: null,
    hrefLang: null,
    htmlFor: Q,
    httpEquiv: Q,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: $,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: $,
    itemId: null,
    itemProp: Q,
    itemRef: Q,
    itemScope: $,
    itemType: Q,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: $,
    low: T,
    manifest: null,
    max: null,
    maxLength: T,
    media: null,
    method: null,
    min: null,
    minLength: T,
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
    optimum: T,
    pattern: null,
    ping: Q,
    placeholder: null,
    playsInline: $,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: $,
    referrerPolicy: null,
    rel: Q,
    required: $,
    reversed: $,
    rows: T,
    rowSpan: T,
    sandbox: Q,
    scope: null,
    scoped: $,
    seamless: $,
    selected: $,
    shadowRootClonable: $,
    shadowRootDelegatesFocus: $,
    shadowRootMode: null,
    shape: null,
    size: T,
    sizes: null,
    slot: null,
    span: T,
    spellCheck: te,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: T,
    step: null,
    style: null,
    tabIndex: T,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: $,
    useMap: null,
    value: te,
    width: T,
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
    border: T,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: T,
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
    hSpace: T,
    // `<img>` and `<object>`
    leftMargin: T,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: T,
    // `<body>`
    marginWidth: T,
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
    rightMargin: T,
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
    topMargin: T,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: T,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: $,
    disableRemotePlayback: $,
    prefix: null,
    property: null,
    results: T,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: ri
}), Da = tt({
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
    accentHeight: T,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: T,
    amplitude: T,
    arabicForm: null,
    ascent: T,
    attributeName: null,
    attributeType: null,
    azimuth: T,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: T,
    by: null,
    calcMode: null,
    capHeight: T,
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
    descent: T,
    diffuseConstant: T,
    direction: null,
    display: null,
    dur: null,
    divisor: T,
    dominantBaseline: null,
    download: $,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: T,
    enableBackground: null,
    end: null,
    event: null,
    exponent: T,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: T,
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
    hanging: T,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: T,
    horizOriginX: T,
    horizOriginY: T,
    id: null,
    ideographic: T,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: T,
    k: T,
    k1: T,
    k2: T,
    k3: T,
    k4: T,
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
    limitingConeAngle: T,
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
    mediaSize: T,
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
    overlinePosition: T,
    overlineThickness: T,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: T,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Q,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: T,
    pointsAtY: T,
    pointsAtZ: T,
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
    specularConstant: T,
    specularExponent: T,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: T,
    strikethroughThickness: T,
    string: null,
    stroke: null,
    strokeDashArray: pe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: T,
    strokeOpacity: T,
    strokeWidth: null,
    style: null,
    surfaceScale: T,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: pe,
    tabIndex: T,
    tableValues: null,
    target: null,
    targetX: T,
    targetY: T,
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
    underlinePosition: T,
    underlineThickness: T,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: T,
    values: null,
    vAlphabetic: T,
    vMathematical: T,
    vectorEffect: null,
    vHanging: T,
    vIdeographic: T,
    version: null,
    vertAdvY: T,
    vertOriginX: T,
    vertOriginY: T,
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
    xHeight: T,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: ni
}), ii = tt({
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
}), li = tt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ri
}), oi = tt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Ma = {
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
}, Ra = /[A-Z]/g, qn = /-[a-z]/g, ja = /^data[-\w.:]+$/i;
function Fa(e, t) {
  const n = rn(t);
  let r = t, i = ce;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && ja.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(qn, Oa);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!qn.test(o)) {
        let l = o.replace(Ra, za);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = mn;
  }
  return new i(r, t);
}
function za(e) {
  return "-" + e.toLowerCase();
}
function Oa(e) {
  return e.charAt(1).toUpperCase();
}
const _a = ei([ti, Pa, ii, li, oi], "html"), gn = ei([ti, Da, ii, li, oi], "svg");
function Ba(e) {
  return e.join(" ").trim();
}
var Ze = {}, Bt, Un;
function $a() {
  if (Un) return Bt;
  Un = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", f = "*", c = "", d = "comment", h = "declaration";
  function x(b, g) {
    if (typeof b != "string")
      throw new TypeError("First argument must be a string");
    if (!b) return [];
    g = g || {};
    var S = 1, E = 1;
    function R(j) {
      var A = j.match(t);
      A && (S += A.length);
      var K = j.lastIndexOf(u);
      E = ~K ? j.length - K : E + j.length;
    }
    function L() {
      var j = { line: S, column: E };
      return function(A) {
        return A.position = new C(j), B(), A;
      };
    }
    function C(j) {
      this.start = j, this.end = { line: S, column: E }, this.source = g.source;
    }
    C.prototype.content = b;
    function O(j) {
      var A = new Error(
        g.source + ":" + S + ":" + E + ": " + j
      );
      if (A.reason = j, A.filename = g.source, A.line = S, A.column = E, A.source = b, !g.silent) throw A;
    }
    function V(j) {
      var A = j.exec(b);
      if (A) {
        var K = A[0];
        return R(K), b = b.slice(K.length), A;
      }
    }
    function B() {
      V(n);
    }
    function k(j) {
      var A;
      for (j = j || []; A = D(); )
        A !== !1 && j.push(A);
      return j;
    }
    function D() {
      var j = L();
      if (!(s != b.charAt(0) || f != b.charAt(1))) {
        for (var A = 2; c != b.charAt(A) && (f != b.charAt(A) || s != b.charAt(A + 1)); )
          ++A;
        if (A += 2, c === b.charAt(A - 1))
          return O("End of comment missing");
        var K = b.slice(2, A - 2);
        return E += 2, R(K), b = b.slice(A), E += 2, j({
          type: d,
          comment: K
        });
      }
    }
    function M() {
      var j = L(), A = V(r);
      if (A) {
        if (D(), !V(i)) return O("property missing ':'");
        var K = V(o), J = j({
          type: h,
          property: w(A[0].replace(e, c)),
          value: K ? w(K[0].replace(e, c)) : c
        });
        return V(l), J;
      }
    }
    function N() {
      var j = [];
      k(j);
      for (var A; A = M(); )
        A !== !1 && (j.push(A), k(j));
      return j;
    }
    return B(), N();
  }
  function w(b) {
    return b ? b.replace(a, c) : c;
  }
  return Bt = x, Bt;
}
var Wn;
function Na() {
  if (Wn) return Ze;
  Wn = 1;
  var e = Ze && Ze.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.default = n;
  const t = e($a());
  function n(r, i) {
    let o = null;
    if (!r || typeof r != "string")
      return o;
    const l = (0, t.default)(r), a = typeof i == "function";
    return l.forEach((u) => {
      if (u.type !== "declaration")
        return;
      const { property: s, value: f } = u;
      a ? i(s, f, u) : f && (o = o || {}, o[s] = f);
    }), o;
  }
  return Ze;
}
var lt = {}, Zn;
function Va() {
  if (Zn) return lt;
  Zn = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, o = function(s) {
    return !s || n.test(s) || e.test(s);
  }, l = function(s, f) {
    return f.toUpperCase();
  }, a = function(s, f) {
    return "".concat(f, "-");
  }, u = function(s, f) {
    return f === void 0 && (f = {}), o(s) ? s : (s = s.toLowerCase(), f.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, l));
  };
  return lt.camelCase = u, lt;
}
var ot, Kn;
function Ha() {
  if (Kn) return ot;
  Kn = 1;
  var e = ot && ot.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Na()), n = Va();
  function r(i, o) {
    var l = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (l[(0, n.camelCase)(a, o)] = u);
    }), l;
  }
  return r.default = r, ot = r, ot;
}
var qa = Ha();
const Ua = /* @__PURE__ */ _r(qa), ai = si("end"), xn = si("start");
function si(e) {
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
function ui(e) {
  const t = xn(e), n = ai(e);
  if (t && n)
    return { start: t, end: n };
}
function ut(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Gn(e.position) : "start" in e || "end" in e ? Gn(e) : "line" in e || "column" in e ? an(e) : "";
}
function an(e) {
  return Yn(e && e.line) + ":" + Yn(e && e.column);
}
function Gn(e) {
  return an(e && e.start) + "-" + an(e && e.end);
}
function Yn(e) {
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
    let i = "", o = {}, l = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (l = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const u = r.indexOf(":");
      u === -1 ? o.ruleId = r : (o.source = r.slice(0, u), o.ruleId = r.slice(u + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const u = o.ancestors[o.ancestors.length - 1];
      u && (o.place = u.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = ut(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
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
const yn = {}.hasOwnProperty, Wa = /* @__PURE__ */ new Map(), Za = /[A-Z]/g, Ka = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ga = /* @__PURE__ */ new Set(["td", "th"]), ci = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Ya(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = is(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = rs(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? gn : _a,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = fi(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function fi(e, t, n) {
  if (t.type === "element")
    return Xa(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return Qa(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return es(e, t, n);
  if (t.type === "mdxjsEsm")
    return Ja(e, t);
  if (t.type === "root")
    return ts(e, t, n);
  if (t.type === "text")
    return ns(e, t);
}
function Xa(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = gn, e.schema = i), e.ancestors.push(t);
  const o = di(e, t.tagName, !1), l = ls(e, t);
  let a = kn(e, t);
  return Ka.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !La(u) : !0;
  })), hi(e, l, o, t), bn(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function Qa(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  ht(e, t.position);
}
function Ja(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  ht(e, t.position);
}
function es(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = gn, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : di(e, t.name, !0), l = os(e, t), a = kn(e, t);
  return hi(e, l, o, t), bn(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function ts(e, t, n) {
  const r = {};
  return bn(r, kn(e, t)), e.create(t, e.Fragment, r, n);
}
function ns(e, t) {
  return t.value;
}
function hi(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function bn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function rs(e, t, n) {
  return r;
  function r(i, o, l, a) {
    const s = Array.isArray(l.children) ? n : t;
    return a ? s(o, l, a) : s(o, l);
  }
}
function is(e, t) {
  return n;
  function n(r, i, o, l) {
    const a = Array.isArray(o.children), u = xn(r);
    return t(
      i,
      o,
      l,
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
function ls(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && yn.call(t.properties, i)) {
      const o = as(e, i, t.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && Ga.has(t.tagName) ? r = a : n[l] = a;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function os(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const a = l.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        ht(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          ht(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function kn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Wa;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let l;
    if (e.passKeys) {
      const u = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (u) {
        const s = i.get(u) || 0;
        l = u + "-" + s, i.set(u, s + 1);
      }
    }
    const a = fi(e, o, l);
    a !== void 0 && n.push(a);
  }
  return n;
}
function as(e, t, n) {
  const r = Fa(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? va(n) : Ba(n)), r.property === "style") {
      let i = typeof n == "object" ? n : ss(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = us(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Ma[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function ss(e, t) {
  try {
    return Ua(t, { reactCompat: !0 });
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
    throw i.file = e.filePath || void 0, i.url = ci + "#cannot-parse-style-attribute", i;
  }
}
function di(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const a = Nn(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = l;
  } else
    r = Nn(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return yn.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  ht(e);
}
function ht(e, t) {
  const n = new oe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = ci + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function us(e) {
  const t = {};
  let n;
  for (n in e)
    yn.call(e, n) && (t[cs(n)] = e[n]);
  return t;
}
function cs(e) {
  let t = e.replace(Za, fs);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function fs(e) {
  return "-" + e.toLowerCase();
}
const $t = {
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
}, hs = {};
function wn(e, t) {
  const n = hs, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return pi(e, r, i);
}
function pi(e, t, n) {
  if (ds(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Xn(e.children, t, n);
  }
  return Array.isArray(e) ? Xn(e, t, n) : "";
}
function Xn(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = pi(e[i], t, n);
  return r.join("");
}
function ds(e) {
  return !!(e && typeof e == "object");
}
const Qn = document.createElement("i");
function Cn(e) {
  const t = "&" + e + ";";
  Qn.innerHTML = t;
  const n = Qn.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function me(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function ge(e, t) {
  return e.length > 0 ? (me(e, e.length, 0, t), e) : t;
}
const Jn = {}.hasOwnProperty;
function mi(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    ps(t, e[n]);
  return t;
}
function ps(e, t) {
  let n;
  for (n in t) {
    const i = (Jn.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        Jn.call(i, l) || (i[l] = []);
        const a = o[l];
        ms(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function ms(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  me(e, 0, 0, r);
}
function gi(e, t) {
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
const ae = ze(/[A-Za-z]/), le = ze(/[\dA-Za-z]/), gs = ze(/[#-'*+\--9=?A-Z^-~]/);
function Et(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const sn = ze(/\d/), xs = ze(/[\dA-Fa-f]/), ys = ze(/[!-/:-@[-`{-~]/);
function F(e) {
  return e !== null && e < -2;
}
function X(e) {
  return e !== null && (e < 0 || e === 32);
}
function H(e) {
  return e === -2 || e === -1 || e === 32;
}
const Lt = ze(new RegExp("\\p{P}|\\p{S}", "u")), qe = ze(/\s/);
function ze(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function nt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && le(e.charCodeAt(n + 1)) && le(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function U(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return H(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return H(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const bs = {
  tokenize: ks
};
function ks(e) {
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
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return F(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const ws = {
  tokenize: Cs
}, er = {
  tokenize: vs
};
function Cs(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return a;
  function a(E) {
    if (r < n.length) {
      const R = n[r];
      return t.containerState = R[1], e.attempt(R[0].continuation, u, s)(E);
    }
    return s(E);
  }
  function u(E) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && S();
      const R = t.events.length;
      let L = R, C;
      for (; L--; )
        if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
          C = t.events[L][1].end;
          break;
        }
      g(r);
      let O = R;
      for (; O < t.events.length; )
        t.events[O][1].end = {
          ...C
        }, O++;
      return me(t.events, L + 1, 0, t.events.slice(R)), t.events.length = O, s(E);
    }
    return a(E);
  }
  function s(E) {
    if (r === n.length) {
      if (!i)
        return d(E);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return x(E);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(er, f, c)(E);
  }
  function f(E) {
    return i && S(), g(r), d(E);
  }
  function c(E) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, x(E);
  }
  function d(E) {
    return t.containerState = {}, e.attempt(er, h, x)(E);
  }
  function h(E) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(E);
  }
  function x(E) {
    if (E === null) {
      i && S(), g(0), e.consume(E);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), w(E);
  }
  function w(E) {
    if (E === null) {
      b(e.exit("chunkFlow"), !0), g(0), e.consume(E);
      return;
    }
    return F(E) ? (e.consume(E), b(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(E), w);
  }
  function b(E, R) {
    const L = t.sliceStream(E);
    if (R && L.push(null), E.previous = o, o && (o.next = E), o = E, i.defineSkip(E.start), i.write(L), t.parser.lazy[E.start.line]) {
      let C = i.events.length;
      for (; C--; )
        if (
          // The token starts before the line ending…
          i.events[C][1].start.offset < l && // …and either is not ended yet…
          (!i.events[C][1].end || // …or ends after it.
          i.events[C][1].end.offset > l)
        )
          return;
      const O = t.events.length;
      let V = O, B, k;
      for (; V--; )
        if (t.events[V][0] === "exit" && t.events[V][1].type === "chunkFlow") {
          if (B) {
            k = t.events[V][1].end;
            break;
          }
          B = !0;
        }
      for (g(r), C = O; C < t.events.length; )
        t.events[C][1].end = {
          ...k
        }, C++;
      me(t.events, V + 1, 0, t.events.slice(O)), t.events.length = C;
    }
  }
  function g(E) {
    let R = n.length;
    for (; R-- > E; ) {
      const L = n[R];
      t.containerState = L[1], L[0].exit.call(t, e);
    }
    n.length = E;
  }
  function S() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function vs(e, t, n) {
  return U(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function et(e) {
  if (e === null || X(e) || qe(e))
    return 1;
  if (Lt(e))
    return 2;
}
function At(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const un = {
  name: "attention",
  resolveAll: Ss,
  tokenize: Es
};
function Ss(e, t) {
  let n = -1, r, i, o, l, a, u, s, f;
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
          }, d = {
            ...e[n][1].start
          };
          tr(c, -u), tr(d, u), l = {
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
            end: d
          }, o = {
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
              ...l.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[n][1].start = {
            ...a.end
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = ge(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = ge(s, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), s = ge(s, At(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = ge(s, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, s = ge(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, me(e, r - 1, n - r + 3, s), n = r + s.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Es(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = et(r);
  let o;
  return l;
  function l(u) {
    return o = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === o)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), f = et(u), c = !f || f === 2 && i || n.includes(u), d = !i || i === 2 && f || n.includes(r);
    return s._open = !!(o === 42 ? c : c && (i || !d)), s._close = !!(o === 42 ? d : d && (f || !c)), t(u);
  }
}
function tr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Ts = {
  name: "autolink",
  tokenize: Is
};
function Is(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(h) {
    return ae(h) ? (e.consume(h), l) : h === 64 ? n(h) : s(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || le(h) ? (r = 1, a(h)) : s(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), r = 0, u) : (h === 43 || h === 45 || h === 46 || le(h)) && r++ < 32 ? (e.consume(h), a) : (r = 0, s(h));
  }
  function u(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || Et(h) ? n(h) : (e.consume(h), u);
  }
  function s(h) {
    return h === 64 ? (e.consume(h), f) : gs(h) ? (e.consume(h), s) : n(h);
  }
  function f(h) {
    return le(h) ? c(h) : n(h);
  }
  function c(h) {
    return h === 46 ? (e.consume(h), r = 0, f) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(h);
  }
  function d(h) {
    if ((h === 45 || le(h)) && r++ < 63) {
      const x = h === 45 ? d : c;
      return e.consume(h), x;
    }
    return n(h);
  }
}
const gt = {
  partial: !0,
  tokenize: Ls
};
function Ls(e, t, n) {
  return r;
  function r(o) {
    return H(o) ? U(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || F(o) ? t(o) : n(o);
  }
}
const xi = {
  continuation: {
    tokenize: Ps
  },
  exit: Ds,
  name: "blockQuote",
  tokenize: As
};
function As(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return n(l);
  }
  function o(l) {
    return H(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Ps(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return H(l) ? U(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(xi, t, n)(l);
  }
}
function Ds(e) {
  e.exit("blockQuote");
}
const yi = {
  name: "characterEscape",
  tokenize: Ms
};
function Ms(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return ys(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const bi = {
  name: "characterReference",
  tokenize: Rs
};
function Rs(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), u;
  }
  function u(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, l = le, f(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = xs, f) : (e.enter("characterReferenceValue"), o = 7, l = sn, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return l === le && !Cn(r.sliceSerialize(d)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(c) && i++ < o ? (e.consume(c), f) : n(c);
  }
}
const nr = {
  partial: !0,
  tokenize: Fs
}, rr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: js
};
function js(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: L
  };
  let o = 0, l = 0, a;
  return u;
  function u(C) {
    return s(C);
  }
  function s(C) {
    const O = r.events[r.events.length - 1];
    return o = O && O[1].type === "linePrefix" ? O[2].sliceSerialize(O[1], !0).length : 0, a = C, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(C);
  }
  function f(C) {
    return C === a ? (l++, e.consume(C), f) : l < 3 ? n(C) : (e.exit("codeFencedFenceSequence"), H(C) ? U(e, c, "whitespace")(C) : c(C));
  }
  function c(C) {
    return C === null || F(C) ? (e.exit("codeFencedFence"), r.interrupt ? t(C) : e.check(nr, w, R)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(C));
  }
  function d(C) {
    return C === null || F(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(C)) : H(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), U(e, h, "whitespace")(C)) : C === 96 && C === a ? n(C) : (e.consume(C), d);
  }
  function h(C) {
    return C === null || F(C) ? c(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), x(C));
  }
  function x(C) {
    return C === null || F(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(C)) : C === 96 && C === a ? n(C) : (e.consume(C), x);
  }
  function w(C) {
    return e.attempt(i, R, b)(C);
  }
  function b(C) {
    return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), g;
  }
  function g(C) {
    return o > 0 && H(C) ? U(e, S, "linePrefix", o + 1)(C) : S(C);
  }
  function S(C) {
    return C === null || F(C) ? e.check(nr, w, R)(C) : (e.enter("codeFlowValue"), E(C));
  }
  function E(C) {
    return C === null || F(C) ? (e.exit("codeFlowValue"), S(C)) : (e.consume(C), E);
  }
  function R(C) {
    return e.exit("codeFenced"), t(C);
  }
  function L(C, O, V) {
    let B = 0;
    return k;
    function k(A) {
      return C.enter("lineEnding"), C.consume(A), C.exit("lineEnding"), D;
    }
    function D(A) {
      return C.enter("codeFencedFence"), H(A) ? U(C, M, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(A) : M(A);
    }
    function M(A) {
      return A === a ? (C.enter("codeFencedFenceSequence"), N(A)) : V(A);
    }
    function N(A) {
      return A === a ? (B++, C.consume(A), N) : B >= l ? (C.exit("codeFencedFenceSequence"), H(A) ? U(C, j, "whitespace")(A) : j(A)) : V(A);
    }
    function j(A) {
      return A === null || F(A) ? (C.exit("codeFencedFence"), O(A)) : V(A);
    }
  }
}
function Fs(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Nt = {
  name: "codeIndented",
  tokenize: Os
}, zs = {
  partial: !0,
  tokenize: _s
};
function Os(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), U(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? l(s) : n(s);
  }
  function l(s) {
    return s === null ? u(s) : F(s) ? e.attempt(zs, l, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || F(s) ? (e.exit("codeFlowValue"), l(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function _s(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : F(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : U(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : F(l) ? i(l) : n(l);
  }
}
const Bs = {
  name: "codeText",
  previous: Ns,
  resolve: $s,
  tokenize: Vs
};
function $s(e) {
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
function Ns(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Vs(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), u(c));
  }
  function u(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), u) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, f(c)) : F(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || F(c) ? (e.exit("codeTextData"), u(c)) : (e.consume(c), s);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (o.type = "codeTextData", s(c));
  }
}
class Hs {
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
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && at(this.left, r), o.reverse();
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
function ki(e) {
  const t = {};
  let n = -1, r, i, o, l, a, u, s;
  const f = new Hs(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, qs(f, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (l = f.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (f.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...f.get(i)[1].start
      }, a = f.slice(i, n), a.unshift(r), f.splice(i, n - i + 1, a));
    }
  }
  return me(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !s;
}
function qs(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const a = l.events, u = [], s = {};
  let f, c, d = -1, h = n, x = 0, w = 0;
  const b = [w];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    o.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), c && l.defineSkip(h.start), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(f), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = h, h = h.next;
  }
  for (h = n; ++d < a.length; )
    // Find a void token that includes a break.
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (w = d + 1, b.push(w), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (l.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : b.pop(), d = b.length; d--; ) {
    const g = a.slice(b[d], b[d + 1]), S = o.pop();
    u.push([S, S + g.length - 1]), e.splice(S, 2, g);
  }
  for (u.reverse(), d = -1; ++d < u.length; )
    s[x + u[d][0]] = x + u[d][1], x += u[d][1] - u[d][0] - 1;
  return s;
}
const Us = {
  resolve: Zs,
  tokenize: Ks
}, Ws = {
  partial: !0,
  tokenize: Gs
};
function Zs(e) {
  return ki(e), e;
}
function Ks(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : F(a) ? e.check(Ws, l, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Gs(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), U(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || F(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function wi(e, t, n, r, i, o, l, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(g) {
    return g === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(g), e.exit(o), d) : g === null || g === 32 || g === 41 || Et(g) ? n(g) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), w(g));
  }
  function d(g) {
    return g === 62 ? (e.enter(o), e.consume(g), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(g));
  }
  function h(g) {
    return g === 62 ? (e.exit("chunkString"), e.exit(a), d(g)) : g === null || g === 60 || F(g) ? n(g) : (e.consume(g), g === 92 ? x : h);
  }
  function x(g) {
    return g === 60 || g === 62 || g === 92 ? (e.consume(g), h) : h(g);
  }
  function w(g) {
    return !f && (g === null || g === 41 || X(g)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(g)) : f < s && g === 40 ? (e.consume(g), f++, w) : g === 41 ? (e.consume(g), f--, w) : g === null || g === 32 || g === 40 || Et(g) ? n(g) : (e.consume(g), g === 92 ? b : w);
  }
  function b(g) {
    return g === 40 || g === 41 || g === 92 ? (e.consume(g), w) : w(g);
  }
}
function Ci(e, t, n, r, i, o) {
  const l = this;
  let a = 0, u;
  return s;
  function s(h) {
    return e.enter(r), e.enter(i), e.consume(h), e.exit(i), e.enter(o), f;
  }
  function f(h) {
    return a > 999 || h === null || h === 91 || h === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    h === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(h) : h === 93 ? (e.exit(o), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : F(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === null || h === 91 || h === 93 || F(h) || a++ > 999 ? (e.exit("chunkString"), f(h)) : (e.consume(h), u || (u = !H(h)), h === 92 ? d : c);
  }
  function d(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, c) : c(h);
  }
}
function vi(e, t, n, r, i, o) {
  let l;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), l = d === 40 ? 41 : d, u) : n(d);
  }
  function u(d) {
    return d === l ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), s(d));
  }
  function s(d) {
    return d === l ? (e.exit(o), u(l)) : d === null ? n(d) : F(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), U(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === l || d === null || F(d) ? (e.exit("chunkString"), s(d)) : (e.consume(d), d === 92 ? c : f);
  }
  function c(d) {
    return d === l || d === 92 ? (e.consume(d), f) : f(d);
  }
}
function ct(e, t) {
  let n;
  return r;
  function r(i) {
    return F(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : H(i) ? U(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Ys = {
  name: "definition",
  tokenize: Qs
}, Xs = {
  partial: !0,
  tokenize: Js
};
function Qs(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(h) {
    return e.enter("definition"), l(h);
  }
  function l(h) {
    return Ci.call(
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
    return X(h) ? ct(e, s)(h) : s(h);
  }
  function s(h) {
    return wi(
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
    return e.attempt(Xs, c, c)(h);
  }
  function c(h) {
    return H(h) ? U(e, d, "whitespace")(h) : d(h);
  }
  function d(h) {
    return h === null || F(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function Js(e, t, n) {
  return r;
  function r(a) {
    return X(a) ? ct(e, i)(a) : n(a);
  }
  function i(a) {
    return vi(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return H(a) ? U(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || F(a) ? t(a) : n(a);
  }
}
const eu = {
  name: "hardBreakEscape",
  tokenize: tu
};
function tu(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return F(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const nu = {
  name: "headingAtx",
  resolve: ru,
  tokenize: iu
};
function ru(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, me(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function iu(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e.enter("atxHeadingSequence"), l(f);
  }
  function l(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), l) : f === null || X(f) ? (e.exit("atxHeadingSequence"), a(f)) : n(f);
  }
  function a(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), u(f)) : f === null || F(f) ? (e.exit("atxHeading"), t(f)) : H(f) ? U(e, a, "whitespace")(f) : (e.enter("atxHeadingText"), s(f));
  }
  function u(f) {
    return f === 35 ? (e.consume(f), u) : (e.exit("atxHeadingSequence"), a(f));
  }
  function s(f) {
    return f === null || f === 35 || X(f) ? (e.exit("atxHeadingText"), a(f)) : (e.consume(f), s);
  }
}
const lu = [
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
], ir = ["pre", "script", "style", "textarea"], ou = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: uu,
  tokenize: cu
}, au = {
  partial: !0,
  tokenize: hu
}, su = {
  partial: !0,
  tokenize: fu
};
function uu(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function cu(e, t, n) {
  const r = this;
  let i, o, l, a, u;
  return s;
  function s(m) {
    return f(m);
  }
  function f(m) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(m), c;
  }
  function c(m) {
    return m === 33 ? (e.consume(m), d) : m === 47 ? (e.consume(m), o = !0, w) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : p) : ae(m) ? (e.consume(m), l = String.fromCharCode(m), b) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), i = 2, h) : m === 91 ? (e.consume(m), i = 5, a = 0, x) : ae(m) ? (e.consume(m), i = 4, r.interrupt ? t : p) : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : p) : n(m);
  }
  function x(m) {
    const he = "CDATA[";
    return m === he.charCodeAt(a++) ? (e.consume(m), a === he.length ? r.interrupt ? t : M : x) : n(m);
  }
  function w(m) {
    return ae(m) ? (e.consume(m), l = String.fromCharCode(m), b) : n(m);
  }
  function b(m) {
    if (m === null || m === 47 || m === 62 || X(m)) {
      const he = m === 47, Se = l.toLowerCase();
      return !he && !o && ir.includes(Se) ? (i = 1, r.interrupt ? t(m) : M(m)) : lu.includes(l.toLowerCase()) ? (i = 6, he ? (e.consume(m), g) : r.interrupt ? t(m) : M(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : o ? S(m) : E(m));
    }
    return m === 45 || le(m) ? (e.consume(m), l += String.fromCharCode(m), b) : n(m);
  }
  function g(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : M) : n(m);
  }
  function S(m) {
    return H(m) ? (e.consume(m), S) : k(m);
  }
  function E(m) {
    return m === 47 ? (e.consume(m), k) : m === 58 || m === 95 || ae(m) ? (e.consume(m), R) : H(m) ? (e.consume(m), E) : k(m);
  }
  function R(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || le(m) ? (e.consume(m), R) : L(m);
  }
  function L(m) {
    return m === 61 ? (e.consume(m), C) : H(m) ? (e.consume(m), L) : E(m);
  }
  function C(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), u = m, O) : H(m) ? (e.consume(m), C) : V(m);
  }
  function O(m) {
    return m === u ? (e.consume(m), u = null, B) : m === null || F(m) ? n(m) : (e.consume(m), O);
  }
  function V(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || X(m) ? L(m) : (e.consume(m), V);
  }
  function B(m) {
    return m === 47 || m === 62 || H(m) ? E(m) : n(m);
  }
  function k(m) {
    return m === 62 ? (e.consume(m), D) : n(m);
  }
  function D(m) {
    return m === null || F(m) ? M(m) : H(m) ? (e.consume(m), D) : n(m);
  }
  function M(m) {
    return m === 45 && i === 2 ? (e.consume(m), K) : m === 60 && i === 1 ? (e.consume(m), J) : m === 62 && i === 4 ? (e.consume(m), se) : m === 63 && i === 3 ? (e.consume(m), p) : m === 93 && i === 5 ? (e.consume(m), xe) : F(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(au, ye, N)(m)) : m === null || F(m) ? (e.exit("htmlFlowData"), N(m)) : (e.consume(m), M);
  }
  function N(m) {
    return e.check(su, j, ye)(m);
  }
  function j(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), A;
  }
  function A(m) {
    return m === null || F(m) ? N(m) : (e.enter("htmlFlowData"), M(m));
  }
  function K(m) {
    return m === 45 ? (e.consume(m), p) : M(m);
  }
  function J(m) {
    return m === 47 ? (e.consume(m), l = "", fe) : M(m);
  }
  function fe(m) {
    if (m === 62) {
      const he = l.toLowerCase();
      return ir.includes(he) ? (e.consume(m), se) : M(m);
    }
    return ae(m) && l.length < 8 ? (e.consume(m), l += String.fromCharCode(m), fe) : M(m);
  }
  function xe(m) {
    return m === 93 ? (e.consume(m), p) : M(m);
  }
  function p(m) {
    return m === 62 ? (e.consume(m), se) : m === 45 && i === 2 ? (e.consume(m), p) : M(m);
  }
  function se(m) {
    return m === null || F(m) ? (e.exit("htmlFlowData"), ye(m)) : (e.consume(m), se);
  }
  function ye(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function fu(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return F(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function hu(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(gt, t, n);
  }
}
const du = {
  name: "htmlText",
  tokenize: pu
};
function pu(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(p) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(p), u;
  }
  function u(p) {
    return p === 33 ? (e.consume(p), s) : p === 47 ? (e.consume(p), L) : p === 63 ? (e.consume(p), E) : ae(p) ? (e.consume(p), V) : n(p);
  }
  function s(p) {
    return p === 45 ? (e.consume(p), f) : p === 91 ? (e.consume(p), o = 0, x) : ae(p) ? (e.consume(p), S) : n(p);
  }
  function f(p) {
    return p === 45 ? (e.consume(p), h) : n(p);
  }
  function c(p) {
    return p === null ? n(p) : p === 45 ? (e.consume(p), d) : F(p) ? (l = c, J(p)) : (e.consume(p), c);
  }
  function d(p) {
    return p === 45 ? (e.consume(p), h) : c(p);
  }
  function h(p) {
    return p === 62 ? K(p) : p === 45 ? d(p) : c(p);
  }
  function x(p) {
    const se = "CDATA[";
    return p === se.charCodeAt(o++) ? (e.consume(p), o === se.length ? w : x) : n(p);
  }
  function w(p) {
    return p === null ? n(p) : p === 93 ? (e.consume(p), b) : F(p) ? (l = w, J(p)) : (e.consume(p), w);
  }
  function b(p) {
    return p === 93 ? (e.consume(p), g) : w(p);
  }
  function g(p) {
    return p === 62 ? K(p) : p === 93 ? (e.consume(p), g) : w(p);
  }
  function S(p) {
    return p === null || p === 62 ? K(p) : F(p) ? (l = S, J(p)) : (e.consume(p), S);
  }
  function E(p) {
    return p === null ? n(p) : p === 63 ? (e.consume(p), R) : F(p) ? (l = E, J(p)) : (e.consume(p), E);
  }
  function R(p) {
    return p === 62 ? K(p) : E(p);
  }
  function L(p) {
    return ae(p) ? (e.consume(p), C) : n(p);
  }
  function C(p) {
    return p === 45 || le(p) ? (e.consume(p), C) : O(p);
  }
  function O(p) {
    return F(p) ? (l = O, J(p)) : H(p) ? (e.consume(p), O) : K(p);
  }
  function V(p) {
    return p === 45 || le(p) ? (e.consume(p), V) : p === 47 || p === 62 || X(p) ? B(p) : n(p);
  }
  function B(p) {
    return p === 47 ? (e.consume(p), K) : p === 58 || p === 95 || ae(p) ? (e.consume(p), k) : F(p) ? (l = B, J(p)) : H(p) ? (e.consume(p), B) : K(p);
  }
  function k(p) {
    return p === 45 || p === 46 || p === 58 || p === 95 || le(p) ? (e.consume(p), k) : D(p);
  }
  function D(p) {
    return p === 61 ? (e.consume(p), M) : F(p) ? (l = D, J(p)) : H(p) ? (e.consume(p), D) : B(p);
  }
  function M(p) {
    return p === null || p === 60 || p === 61 || p === 62 || p === 96 ? n(p) : p === 34 || p === 39 ? (e.consume(p), i = p, N) : F(p) ? (l = M, J(p)) : H(p) ? (e.consume(p), M) : (e.consume(p), j);
  }
  function N(p) {
    return p === i ? (e.consume(p), i = void 0, A) : p === null ? n(p) : F(p) ? (l = N, J(p)) : (e.consume(p), N);
  }
  function j(p) {
    return p === null || p === 34 || p === 39 || p === 60 || p === 61 || p === 96 ? n(p) : p === 47 || p === 62 || X(p) ? B(p) : (e.consume(p), j);
  }
  function A(p) {
    return p === 47 || p === 62 || X(p) ? B(p) : n(p);
  }
  function K(p) {
    return p === 62 ? (e.consume(p), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(p);
  }
  function J(p) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), fe;
  }
  function fe(p) {
    return H(p) ? U(e, xe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p) : xe(p);
  }
  function xe(p) {
    return e.enter("htmlTextData"), l(p);
  }
}
const vn = {
  name: "labelEnd",
  resolveAll: yu,
  resolveTo: bu,
  tokenize: ku
}, mu = {
  tokenize: wu
}, gu = {
  tokenize: Cu
}, xu = {
  tokenize: vu
};
function yu(e) {
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
function bu(e, t) {
  let n = e.length, r = 0, i, o, l, a;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
  const u = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, s = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, f = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return a = [["enter", u, t], ["enter", s, t]], a = ge(a, e.slice(o + 1, o + r + 3)), a = ge(a, [["enter", f, t]]), a = ge(a, At(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), a = ge(a, [["exit", f, t], e[l - 2], e[l - 1], ["exit", s, t]]), a = ge(a, e.slice(l + 1)), a = ge(a, [["exit", u, t]]), me(e, o, e.length, a), e;
}
function ku(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return o ? o._inactive ? c(d) : (l = r.parser.defined.includes(ke(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(d);
  }
  function u(d) {
    return d === 40 ? e.attempt(mu, f, l ? f : c)(d) : d === 91 ? e.attempt(gu, f, l ? s : c)(d) : l ? f(d) : c(d);
  }
  function s(d) {
    return e.attempt(xu, f, c)(d);
  }
  function f(d) {
    return t(d);
  }
  function c(d) {
    return o._balanced = !0, n(d);
  }
}
function wu(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return X(c) ? ct(e, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : wi(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return X(c) ? ct(e, u)(c) : f(c);
  }
  function a(c) {
    return n(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? vi(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function s(c) {
    return X(c) ? ct(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Cu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Ci.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(ke(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function vu(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Su = {
  name: "labelStartImage",
  resolveAll: vn.resolveAll,
  tokenize: Eu
};
function Eu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : n(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Tu = {
  name: "labelStartLink",
  resolveAll: vn.resolveAll,
  tokenize: Iu
};
function Iu(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Vt = {
  name: "lineEnding",
  tokenize: Lu
};
function Lu(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), U(e, t, "linePrefix");
  }
}
const vt = {
  name: "thematicBreak",
  tokenize: Au
};
function Au(e, t, n) {
  let r = 0, i;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), l(s);
  }
  function l(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || F(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), H(s) ? U(e, a, "whitespace")(s) : a(s));
  }
}
const ue = {
  continuation: {
    tokenize: Ru
  },
  exit: Fu,
  name: "list",
  tokenize: Mu
}, Pu = {
  partial: !0,
  tokenize: zu
}, Du = {
  partial: !0,
  tokenize: ju
};
function Mu(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(h) {
    const x = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (x === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : sn(h)) {
      if (r.containerState.type || (r.containerState.type = x, e.enter(x, {
        _container: !0
      })), x === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(vt, n, s)(h) : s(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(h);
    }
    return n(h);
  }
  function u(h) {
    return sn(h) && ++l < 10 ? (e.consume(h), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), s(h)) : n(h);
  }
  function s(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      gt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(Pu, d, c)
    );
  }
  function f(h) {
    return r.containerState.initialBlankLine = !0, o++, d(h);
  }
  function c(h) {
    return H(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), d) : n(h);
  }
  function d(h) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function Ru(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(gt, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, U(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !H(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Du, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, U(e, e.attempt(ue, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function ju(e, t, n) {
  const r = this;
  return U(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function Fu(e) {
  e.exit(this.containerState.type);
}
function zu(e, t, n) {
  const r = this;
  return U(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !H(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const lr = {
  name: "setextUnderline",
  resolveTo: Ou,
  tokenize: _u
};
function Ou(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function _u(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(s) {
    let f = r.events.length, c;
    for (; f--; )
      if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
        c = r.events[f][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = s, l(s)) : n(s);
  }
  function l(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), H(s) ? U(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || F(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Bu = {
  tokenize: $u
};
function $u(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    gt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, U(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Us, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Nu = {
  resolveAll: Ei()
}, Vu = Si("string"), Hu = Si("text");
function Si(e) {
  return {
    resolveAll: Ei(e === "text" ? qu : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, l, a);
    return l;
    function l(f) {
      return s(f) ? o(f) : a(f);
    }
    function a(f) {
      if (f === null) {
        n.consume(f);
        return;
      }
      return n.enter("data"), n.consume(f), u;
    }
    function u(f) {
      return s(f) ? (n.exit("data"), o(f)) : (n.consume(f), u);
    }
    function s(f) {
      if (f === null)
        return !0;
      const c = i[f];
      let d = -1;
      if (c)
        for (; ++d < c.length; ) {
          const h = c[d];
          if (!h.previous || h.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Ei(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function qu(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, l = -1, a = 0, u;
      for (; o--; ) {
        const s = i[o];
        if (typeof s == "string") {
          for (l = s.length; s.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l) break;
          l = -1;
        } else if (s === -2)
          u = !0, a++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const s = {
          type: n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
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
const Uu = {
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
  62: xi
}, Wu = {
  91: Ys
}, Zu = {
  [-2]: Nt,
  [-1]: Nt,
  32: Nt
}, Ku = {
  35: nu,
  42: vt,
  45: [lr, vt],
  60: ou,
  61: lr,
  95: vt,
  96: rr,
  126: rr
}, Gu = {
  38: bi,
  92: yi
}, Yu = {
  [-5]: Vt,
  [-4]: Vt,
  [-3]: Vt,
  33: Su,
  38: bi,
  42: un,
  60: [Ts, du],
  91: Tu,
  92: [eu, yi],
  93: vn,
  95: un,
  96: Bs
}, Xu = {
  null: [un, Nu]
}, Qu = {
  null: [42, 95]
}, Ju = {
  null: []
}, ec = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Qu,
  contentInitial: Wu,
  disable: Ju,
  document: Uu,
  flow: Ku,
  flowInitial: Zu,
  insideSpan: Xu,
  string: Gu,
  text: Yu
}, Symbol.toStringTag, { value: "Module" }));
function tc(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let l = [], a = [];
  const u = {
    attempt: O(L),
    check: O(C),
    consume: S,
    enter: E,
    exit: R,
    interrupt: O(C, {
      interrupt: !0
    })
  }, s = {
    code: null,
    containerState: {},
    defineSkip: w,
    events: [],
    now: x,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: h,
    write: c
  };
  let f = t.tokenize.call(s, u);
  return t.resolveAll && o.push(t), s;
  function c(D) {
    return l = ge(l, D), b(), l[l.length - 1] !== null ? [] : (V(t, 0), s.events = At(o, s.events, s), s.events);
  }
  function d(D, M) {
    return rc(h(D), M);
  }
  function h(D) {
    return nc(l, D);
  }
  function x() {
    const {
      _bufferIndex: D,
      _index: M,
      line: N,
      column: j,
      offset: A
    } = r;
    return {
      _bufferIndex: D,
      _index: M,
      line: N,
      column: j,
      offset: A
    };
  }
  function w(D) {
    i[D.line] = D.column, k();
  }
  function b() {
    let D;
    for (; r._index < l.length; ) {
      const M = l[r._index];
      if (typeof M == "string")
        for (D = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === D && r._bufferIndex < M.length; )
          g(M.charCodeAt(r._bufferIndex));
      else
        g(M);
    }
  }
  function g(D) {
    f = f(D);
  }
  function S(D) {
    F(D) ? (r.line++, r.column = 1, r.offset += D === -3 ? 2 : 1, k()) : D !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = D;
  }
  function E(D, M) {
    const N = M || {};
    return N.type = D, N.start = x(), s.events.push(["enter", N, s]), a.push(N), N;
  }
  function R(D) {
    const M = a.pop();
    return M.end = x(), s.events.push(["exit", M, s]), M;
  }
  function L(D, M) {
    V(D, M.from);
  }
  function C(D, M) {
    M.restore();
  }
  function O(D, M) {
    return N;
    function N(j, A, K) {
      let J, fe, xe, p;
      return Array.isArray(j) ? (
        /* c8 ignore next 1 */
        ye(j)
      ) : "tokenize" in j ? (
        // Looks like a construct.
        ye([
          /** @type {Construct} */
          j
        ])
      ) : se(j);
      function se(ne) {
        return Oe;
        function Oe(we) {
          const Pe = we !== null && ne[we], De = we !== null && ne.null, _e = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Pe) ? Pe : Pe ? [Pe] : [],
            ...Array.isArray(De) ? De : De ? [De] : []
          ];
          return ye(_e)(we);
        }
      }
      function ye(ne) {
        return J = ne, fe = 0, ne.length === 0 ? K : m(ne[fe]);
      }
      function m(ne) {
        return Oe;
        function Oe(we) {
          return p = B(), xe = ne, ne.partial || (s.currentConstruct = ne), ne.name && s.parser.constructs.disable.null.includes(ne.name) ? Se() : ne.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            M ? Object.assign(Object.create(s), M) : s,
            u,
            he,
            Se
          )(we);
        }
      }
      function he(ne) {
        return D(xe, p), A;
      }
      function Se(ne) {
        return p.restore(), ++fe < J.length ? m(J[fe]) : K;
      }
    }
  }
  function V(D, M) {
    D.resolveAll && !o.includes(D) && o.push(D), D.resolve && me(s.events, M, s.events.length - M, D.resolve(s.events.slice(M), s)), D.resolveTo && (s.events = D.resolveTo(s.events, s));
  }
  function B() {
    const D = x(), M = s.previous, N = s.currentConstruct, j = s.events.length, A = Array.from(a);
    return {
      from: j,
      restore: K
    };
    function K() {
      r = D, s.previous = M, s.currentConstruct = N, s.events.length = j, a = A, k();
    }
  }
  function k() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function nc(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, o)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function rc(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let l;
    if (typeof o == "string")
      l = o;
    else switch (o) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(o);
    }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
function ic(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      mi([ec, ...(e || {}).extensions || []])
    ),
    content: i(bs),
    defined: [],
    document: i(ws),
    flow: i(Bu),
    lazy: {},
    string: i(Vu),
    text: i(Hu)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return tc(r, o, a);
    }
  }
}
function lc(e) {
  for (; !ki(e); )
    ;
  return e;
}
const or = /[\0\t\n\r]/g;
function oc() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, a) {
    const u = [];
    let s, f, c, d, h;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, t = "", n && (o.charCodeAt(0) === 65279 && c++, n = void 0); c < o.length; ) {
      if (or.lastIndex = c, s = or.exec(o), d = s && s.index !== void 0 ? s.index : o.length, h = o.charCodeAt(d), !s) {
        t = o.slice(c);
        break;
      }
      if (h === 10 && c === d && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), c < d && (u.push(o.slice(c, d)), e += d - c), h) {
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
      c = d + 1;
    }
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const ac = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function sc(e) {
  return e.replace(ac, uc);
}
function uc(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return gi(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Cn(n) || e;
}
const Ti = {}.hasOwnProperty;
function cc(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), fc(n)(lc(ic(n).document().write(oc()(e, t, !0))));
}
function fc(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(Me),
      autolinkProtocol: B,
      autolinkEmail: B,
      atxHeading: o(W),
      blockQuote: o(De),
      characterEscape: B,
      characterReference: B,
      codeFenced: o(_e),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(_e, l),
      codeText: o(z, l),
      codeTextData: B,
      data: B,
      codeFlowValue: B,
      definition: o(G),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Z),
      hardBreakEscape: o(ie),
      hardBreakTrailing: o(ie),
      htmlFlow: o(ee, l),
      htmlFlowData: B,
      htmlText: o(ee, l),
      htmlTextData: B,
      image: o(Be),
      label: l,
      link: o(Me),
      listItem: o(ul),
      listItemValue: d,
      listOrdered: o(Rn, c),
      listUnordered: o(Rn),
      paragraph: o(cl),
      reference: m,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(W),
      strong: o(fl),
      thematicBreak: o(dl)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: L,
      autolink: u(),
      autolinkEmail: Pe,
      autolinkProtocol: we,
      blockQuote: u(),
      characterEscapeValue: k,
      characterReferenceMarkerHexadecimal: Se,
      characterReferenceMarkerNumeric: Se,
      characterReferenceValue: ne,
      characterReference: Oe,
      codeFenced: u(b),
      codeFencedFence: w,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: x,
      codeFlowValue: k,
      codeIndented: u(g),
      codeText: u(A),
      codeTextData: k,
      data: k,
      definition: u(),
      definitionDestinationString: R,
      definitionLabelString: S,
      definitionTitleString: E,
      emphasis: u(),
      hardBreakEscape: u(M),
      hardBreakTrailing: u(M),
      htmlFlow: u(N),
      htmlFlowData: k,
      htmlText: u(j),
      htmlTextData: k,
      image: u(J),
      label: xe,
      labelText: fe,
      lineEnding: D,
      link: u(K),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: he,
      resourceDestinationString: p,
      resourceTitleString: se,
      resource: ye,
      setextHeading: u(V),
      setextHeadingLineSequence: O,
      setextHeadingText: C,
      strong: u(),
      thematicBreak: u()
    }
  };
  Ii(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(v) {
    let I = {
      type: "root",
      children: []
    };
    const _ = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: l,
      resume: f,
      data: n
    }, q = [];
    let Y = -1;
    for (; ++Y < v.length; )
      if (v[Y][1].type === "listOrdered" || v[Y][1].type === "listUnordered")
        if (v[Y][0] === "enter")
          q.push(Y);
        else {
          const be = q.pop();
          Y = i(v, be, Y);
        }
    for (Y = -1; ++Y < v.length; ) {
      const be = t[v[Y][0]];
      Ti.call(be, v[Y][1].type) && be[v[Y][1].type].call(Object.assign({
        sliceSerialize: v[Y][2].sliceSerialize
      }, _), v[Y][1]);
    }
    if (_.tokenStack.length > 0) {
      const be = _.tokenStack[_.tokenStack.length - 1];
      (be[1] || ar).call(_, void 0, be[0]);
    }
    for (I.position = {
      start: Re(v.length > 0 ? v[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Re(v.length > 0 ? v[v.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Y = -1; ++Y < t.transforms.length; )
      I = t.transforms[Y](I) || I;
    return I;
  }
  function i(v, I, _) {
    let q = I - 1, Y = -1, be = !1, $e, Ee, rt, it;
    for (; ++q <= _; ) {
      const de = v[q];
      switch (de[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          de[0] === "enter" ? Y++ : Y--, it = void 0;
          break;
        }
        case "lineEndingBlank": {
          de[0] === "enter" && ($e && !it && !Y && !rt && (rt = q), it = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          it = void 0;
      }
      if (!Y && de[0] === "enter" && de[1].type === "listItemPrefix" || Y === -1 && de[0] === "exit" && (de[1].type === "listUnordered" || de[1].type === "listOrdered")) {
        if ($e) {
          let We = q;
          for (Ee = void 0; We--; ) {
            const Te = v[We];
            if (Te[1].type === "lineEnding" || Te[1].type === "lineEndingBlank") {
              if (Te[0] === "exit") continue;
              Ee && (v[Ee][1].type = "lineEndingBlank", be = !0), Te[1].type = "lineEnding", Ee = We;
            } else if (!(Te[1].type === "linePrefix" || Te[1].type === "blockQuotePrefix" || Te[1].type === "blockQuotePrefixWhitespace" || Te[1].type === "blockQuoteMarker" || Te[1].type === "listItemIndent")) break;
          }
          rt && (!Ee || rt < Ee) && ($e._spread = !0), $e.end = Object.assign({}, Ee ? v[Ee][1].start : de[1].end), v.splice(Ee || q, 0, ["exit", $e, de[2]]), q++, _++;
        }
        if (de[1].type === "listItemPrefix") {
          const We = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, de[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          $e = We, v.splice(q, 0, ["enter", We, de[2]]), q++, _++, rt = void 0, it = !0;
        }
      }
    }
    return v[I][1]._spread = be, _;
  }
  function o(v, I) {
    return _;
    function _(q) {
      a.call(this, v(q), q), I && I.call(this, q);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(v, I, _) {
    this.stack[this.stack.length - 1].children.push(v), this.stack.push(v), this.tokenStack.push([I, _ || void 0]), v.position = {
      start: Re(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(v) {
    return I;
    function I(_) {
      v && v.call(this, _), s.call(this, _);
    }
  }
  function s(v, I) {
    const _ = this.stack.pop(), q = this.tokenStack.pop();
    if (q)
      q[0].type !== v.type && (I ? I.call(this, v, q[0]) : (q[1] || ar).call(this, v, q[0]));
    else throw new Error("Cannot close `" + v.type + "` (" + ut({
      start: v.start,
      end: v.end
    }) + "): it’s not open");
    _.position.end = Re(v.end);
  }
  function f() {
    return wn(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(v) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(v), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = v;
  }
  function x() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = v;
  }
  function w() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function b() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = v.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function g() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = v.replace(/(\r?\n|\r)$/g, "");
  }
  function S(v) {
    const I = this.resume(), _ = this.stack[this.stack.length - 1];
    _.label = I, _.identifier = ke(this.sliceSerialize(v)).toLowerCase();
  }
  function E() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = v;
  }
  function R() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = v;
  }
  function L(v) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const _ = this.sliceSerialize(v).length;
      I.depth = _;
    }
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function O(v) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(v).codePointAt(0) === 61 ? 1 : 2;
  }
  function V() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function B(v) {
    const _ = this.stack[this.stack.length - 1].children;
    let q = _[_.length - 1];
    (!q || q.type !== "text") && (q = hl(), q.position = {
      start: Re(v.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, _.push(q)), this.stack.push(q);
  }
  function k(v) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(v), I.position.end = Re(v.end);
  }
  function D(v) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const _ = I.children[I.children.length - 1];
      _.position.end = Re(v.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && (B.call(this, v), k.call(this, v));
  }
  function M() {
    this.data.atHardBreak = !0;
  }
  function N() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = v;
  }
  function j() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = v;
  }
  function A() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = v;
  }
  function K() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = I, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function J() {
    const v = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      v.type += "Reference", v.referenceType = I, delete v.url, delete v.title;
    } else
      delete v.identifier, delete v.label;
    this.data.referenceType = void 0;
  }
  function fe(v) {
    const I = this.sliceSerialize(v), _ = this.stack[this.stack.length - 2];
    _.label = sc(I), _.identifier = ke(I).toLowerCase();
  }
  function xe() {
    const v = this.stack[this.stack.length - 1], I = this.resume(), _ = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, _.type === "link") {
      const q = v.children;
      _.children = q;
    } else
      _.alt = I;
  }
  function p() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = v;
  }
  function se() {
    const v = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = v;
  }
  function ye() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function he(v) {
    const I = this.resume(), _ = this.stack[this.stack.length - 1];
    _.label = I, _.identifier = ke(this.sliceSerialize(v)).toLowerCase(), this.data.referenceType = "full";
  }
  function Se(v) {
    this.data.characterReferenceType = v.type;
  }
  function ne(v) {
    const I = this.sliceSerialize(v), _ = this.data.characterReferenceType;
    let q;
    _ ? (q = gi(I, _ === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : q = Cn(I);
    const Y = this.stack[this.stack.length - 1];
    Y.value += q;
  }
  function Oe(v) {
    const I = this.stack.pop();
    I.position.end = Re(v.end);
  }
  function we(v) {
    k.call(this, v);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(v);
  }
  function Pe(v) {
    k.call(this, v);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(v);
  }
  function De() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function _e() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function z() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function G() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Z() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function W() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function ie() {
    return {
      type: "break"
    };
  }
  function ee() {
    return {
      type: "html",
      value: ""
    };
  }
  function Be() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Me() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Rn(v) {
    return {
      type: "list",
      ordered: v.type === "listOrdered",
      start: null,
      spread: v._spread,
      children: []
    };
  }
  function ul(v) {
    return {
      type: "listItem",
      spread: v._spread,
      checked: null,
      children: []
    };
  }
  function cl() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function fl() {
    return {
      type: "strong",
      children: []
    };
  }
  function hl() {
    return {
      type: "text",
      value: ""
    };
  }
  function dl() {
    return {
      type: "thematicBreak"
    };
  }
}
function Re(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Ii(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Ii(e, r) : hc(e, r);
  }
}
function hc(e, t) {
  let n;
  for (n in t)
    if (Ti.call(t, n))
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
function ar(e, t) {
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
function dc(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return cc(r, {
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
function pc(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function mc(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function gc(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function xc(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function yc(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function bc(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = nt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
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
function kc(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function wc(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Li(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function Cc(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Li(e, t);
  const i = { src: nt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function vc(e, t) {
  const n = { src: nt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Sc(e, t) {
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
function Ec(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Li(e, t);
  const i = { href: nt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Tc(e, t) {
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
function Ic(e, t, n) {
  const r = e.all(t), i = n ? Lc(n) : Ai(t), o = {}, l = [];
  if (typeof t.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const f = r[a];
    (i || a !== 0 || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? l.push(...f.children) : l.push(f);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && l.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(t, s), e.applyData(t, s);
}
function Lc(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Ai(n[r]);
  }
  return t;
}
function Ai(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Ac(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Pc(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Dc(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Mc(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Rc(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = xn(t.children[1]), u = ai(t.children[t.children.length - 1]);
    a && u && (l.position = { start: a, end: u }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function jc(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const c = t.children[u], d = {}, h = l ? l[u] : void 0;
    h && (d.align = h);
    let x = { type: "element", tagName: o, properties: d, children: [] };
    c && (x.children = e.all(c), e.patch(c, x), x = e.applyData(c, x)), s.push(x);
  }
  const f = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, f), e.applyData(t, f);
}
function Fc(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const sr = 9, ur = 32;
function zc(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      cr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(cr(t.slice(i), i > 0, !1)), o.join("");
}
function cr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === sr || o === ur; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === sr || o === ur; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Oc(e, t) {
  const n = { type: "text", value: zc(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function _c(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Bc = {
  blockquote: pc,
  break: mc,
  code: gc,
  delete: xc,
  emphasis: yc,
  footnoteReference: bc,
  heading: kc,
  html: wc,
  imageReference: Cc,
  image: vc,
  inlineCode: Sc,
  linkReference: Ec,
  link: Tc,
  listItem: Ic,
  list: Ac,
  paragraph: Pc,
  // @ts-expect-error: root is different, but hard to type.
  root: Dc,
  strong: Mc,
  table: Rc,
  tableCell: Fc,
  tableRow: jc,
  text: Oc,
  thematicBreak: _c,
  toml: bt,
  yaml: bt,
  definition: bt,
  footnoteDefinition: bt
};
function bt() {
}
const Pi = -1, Pt = 0, ft = 1, Tt = 2, Sn = 3, En = 4, Tn = 5, In = 6, Di = 7, Mi = 8, fr = typeof self == "object" ? self : globalThis, $c = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = t[i];
    switch (o) {
      case Pt:
      case Pi:
        return n(l, i);
      case ft: {
        const a = n([], i);
        for (const u of l)
          a.push(r(u));
        return a;
      }
      case Tt: {
        const a = n({}, i);
        for (const [u, s] of l)
          a[r(u)] = r(s);
        return a;
      }
      case Sn:
        return n(new Date(l), i);
      case En: {
        const { source: a, flags: u } = l;
        return n(new RegExp(a, u), i);
      }
      case Tn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of l)
          a.set(r(u), r(s));
        return a;
      }
      case In: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of l)
          a.add(r(u));
        return a;
      }
      case Di: {
        const { name: a, message: u } = l;
        return n(new fr[a](u), i);
      }
      case Mi:
        return n(BigInt(l), i);
      case "BigInt":
        return n(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: a } = new Uint8Array(l);
        return n(new DataView(a), l);
      }
    }
    return n(new fr[o](l), i);
  };
  return r;
}, hr = (e) => $c(/* @__PURE__ */ new Map(), e)(0), Ke = "", { toString: Nc } = {}, { keys: Vc } = Object, st = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Pt, t];
  const n = Nc.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [ft, Ke];
    case "Object":
      return [Tt, Ke];
    case "Date":
      return [Sn, Ke];
    case "RegExp":
      return [En, Ke];
    case "Map":
      return [Tn, Ke];
    case "Set":
      return [In, Ke];
    case "DataView":
      return [ft, n];
  }
  return n.includes("Array") ? [ft, n] : n.includes("Error") ? [Di, n] : [Tt, n];
}, kt = ([e, t]) => e === Pt && (t === "function" || t === "symbol"), Hc = (e, t, n, r) => {
  const i = (l, a) => {
    const u = r.push(l) - 1;
    return n.set(a, u), u;
  }, o = (l) => {
    if (n.has(l))
      return n.get(l);
    let [a, u] = st(l);
    switch (a) {
      case Pt: {
        let f = l;
        switch (u) {
          case "bigint":
            a = Mi, f = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            f = null;
            break;
          case "undefined":
            return i([Pi], l);
        }
        return i([a, f], l);
      }
      case ft: {
        if (u) {
          let d = l;
          return u === "DataView" ? d = new Uint8Array(l.buffer) : u === "ArrayBuffer" && (d = new Uint8Array(l)), i([u, [...d]], l);
        }
        const f = [], c = i([a, f], l);
        for (const d of l)
          f.push(o(d));
        return c;
      }
      case Tt: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return o(l.toJSON());
        const f = [], c = i([a, f], l);
        for (const d of Vc(l))
          (e || !kt(st(l[d]))) && f.push([o(d), o(l[d])]);
        return c;
      }
      case Sn:
        return i([a, l.toISOString()], l);
      case En: {
        const { source: f, flags: c } = l;
        return i([a, { source: f, flags: c }], l);
      }
      case Tn: {
        const f = [], c = i([a, f], l);
        for (const [d, h] of l)
          (e || !(kt(st(d)) || kt(st(h)))) && f.push([o(d), o(h)]);
        return c;
      }
      case In: {
        const f = [], c = i([a, f], l);
        for (const d of l)
          (e || !kt(st(d))) && f.push(o(d));
        return c;
      }
    }
    const { message: s } = l;
    return i([a, { name: u, message: s }], l);
  };
  return o;
}, dr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Hc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, dt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? hr(dr(e, t)) : structuredClone(e)
) : (e, t) => hr(dr(e, t));
function qc(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Uc(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Wc(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || qc, r = e.options.footnoteBackLabel || Uc, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const f = e.all(s), c = String(s.identifier).toUpperCase(), d = nt(c.toLowerCase());
    let h = 0;
    const x = [], w = e.footnoteCounts.get(c);
    for (; w !== void 0 && ++h <= w; ) {
      x.length > 0 && x.push({ type: "text", value: " " });
      let S = typeof n == "string" ? n : n(u, h);
      typeof S == "string" && (S = { type: "text", value: S }), x.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(S) ? S : [S]
      });
    }
    const b = f[f.length - 1];
    if (b && b.type === "element" && b.tagName === "p") {
      const S = b.children[b.children.length - 1];
      S && S.type === "text" ? S.value += " " : b.children.push({ type: "text", value: " " }), b.children.push(...x);
    } else
      f.push(...x);
    const g = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(f, !0)
    };
    e.patch(s, g), a.push(g);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...dt(l),
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
const Dt = (
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
      return Yc;
    if (typeof e == "function")
      return Mt(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Zc(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Kc(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Gc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Zc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Dt(e[n]);
  return Mt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function Kc(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Mt(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function Gc(e) {
  return Mt(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Mt(e) {
  return t;
  function t(n, r, i) {
    return !!(Xc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Yc() {
  return !0;
}
function Xc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ri = [], Qc = !0, cn = !1, Jc = "skip";
function ji(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Dt(i), l = r ? -1 : 1;
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
      Object.defineProperty(d, "name", {
        value: "node (" + (u.type + (h ? "<" + h + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let h = Ri, x, w, b;
      if ((!t || o(u, s, f[f.length - 1] || void 0)) && (h = ef(n(u, f)), h[0] === cn))
        return h;
      if ("children" in u && u.children) {
        const g = (
          /** @type {UnistParent} */
          u
        );
        if (g.children && h[0] !== Jc)
          for (w = (r ? g.children.length : -1) + l, b = f.concat(g); w > -1 && w < g.children.length; ) {
            const S = g.children[w];
            if (x = a(S, w, b)(), x[0] === cn)
              return x;
            w = typeof x[1] == "number" ? x[1] : w + l;
          }
      }
      return h;
    }
  }
}
function ef(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Qc, e] : e == null ? Ri : [e];
}
function Ln(e, t, n, r) {
  let i, o, l;
  typeof t == "function" && typeof n != "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), ji(e, o, a, i);
  function a(u, s) {
    const f = s[s.length - 1], c = f ? f.children.indexOf(u) : void 0;
    return l(u, c, f);
  }
}
const fn = {}.hasOwnProperty, tf = {};
function nf(e, t) {
  const n = t || tf, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...Bc, ...n.handlers }, a = {
    all: s,
    applyData: lf,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: u,
    options: n,
    patch: rf,
    wrap: af
  };
  return Ln(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, d = String(f.identifier).toUpperCase();
      c.has(d) || c.set(d, f);
    }
  }), a;
  function u(f, c) {
    const d = f.type, h = a.handlers[d];
    if (fn.call(a.handlers, d) && h)
      return h(a, f, c);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in f) {
        const { children: w, ...b } = f, g = dt(b);
        return g.children = a.all(f), g;
      }
      return dt(f);
    }
    return (a.options.unknownHandler || of)(a, f, c);
  }
  function s(f) {
    const c = [];
    if ("children" in f) {
      const d = f.children;
      let h = -1;
      for (; ++h < d.length; ) {
        const x = a.one(d[h], f);
        if (x) {
          if (h && d[h - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = pr(x.value)), !Array.isArray(x) && x.type === "element")) {
            const w = x.children[0];
            w && w.type === "text" && (w.value = pr(w.value));
          }
          Array.isArray(x) ? c.push(...x) : c.push(x);
        }
      }
    }
    return c;
  }
}
function rf(e, t) {
  e.position && (t.position = ui(e));
}
function lf(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && o && Object.assign(n.properties, dt(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function of(e, t) {
  const n = t.data || {}, r = "value" in t && !(fn.call(n, "hProperties") || fn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function af(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function pr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function mr(e, t) {
  const n = nf(e, t), r = n.one(e, void 0), i = Wc(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function sf(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      mr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      mr(n, { file: r, ...e || t })
    );
  };
}
function gr(e) {
  if (e)
    throw e;
}
var Ht, xr;
function uf() {
  if (xr) return Ht;
  xr = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, o = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var f = e.call(s, "constructor"), c = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !f && !c)
      return !1;
    var d;
    for (d in s)
      ;
    return typeof d > "u" || e.call(s, d);
  }, l = function(s, f) {
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
  return Ht = function u() {
    var s, f, c, d, h, x, w = arguments[0], b = 1, g = arguments.length, S = !1;
    for (typeof w == "boolean" && (S = w, w = arguments[1] || {}, b = 2), (w == null || typeof w != "object" && typeof w != "function") && (w = {}); b < g; ++b)
      if (s = arguments[b], s != null)
        for (f in s)
          c = a(w, f), d = a(s, f), w !== d && (S && d && (o(d) || (h = i(d))) ? (h ? (h = !1, x = c && i(c) ? c : []) : x = c && o(c) ? c : {}, l(w, { name: f, newValue: u(S, x, d) })) : typeof d < "u" && l(w, { name: f, newValue: d }));
    return w;
  }, Ht;
}
var cf = uf();
const qt = /* @__PURE__ */ _r(cf);
function hn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ff() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(u, ...s) {
      const f = e[++o];
      let c = -1;
      if (u) {
        l(u);
        return;
      }
      for (; ++c < i.length; )
        (s[c] === null || s[c] === void 0) && (s[c] = i[c]);
      i = s, f ? hf(f, a)(...s) : l(null, ...s);
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
function hf(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let u;
    a && l.push(i);
    try {
      u = e.apply(this, l);
    } catch (s) {
      const f = (
        /** @type {Error} */
        s
      );
      if (a && n)
        throw f;
      return i(f);
    }
    a || (u && u.then && typeof u.then == "function" ? u.then(o, i) : u instanceof Error ? i(u) : o(u));
  }
  function i(l, ...a) {
    n || (n = !0, t(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const Ce = { basename: df, dirname: pf, extname: mf, join: gf, sep: "/" };
function df(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  xt(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let l = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function pf(e) {
  if (xt(e), e.length === 0)
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
function mf(e) {
  xt(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, l;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function gf(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    xt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : xf(n);
}
function xf(e) {
  xt(e);
  const t = e.codePointAt(0) === 47;
  let n = yf(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function yf(e, t) {
  let n = "", r = 0, i = -1, o = 0, l = -1, a, u;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      a = e.codePointAt(l);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function xt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const bf = { cwd: kf };
function kf() {
  return "/";
}
function dn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function wf(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!dn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Cf(e);
}
function Cf(e) {
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
const Ut = (
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
class Fi {
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
    t ? dn(t) ? n = { path: t } : typeof t == "string" || vf(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : bf.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Ut.length; ) {
      const o = Ut[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Ut.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ce.basename(this.path) : void 0;
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
    Zt(t, "basename"), Wt(t, "basename"), this.path = Ce.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ce.dirname(this.path) : void 0;
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
    yr(this.basename, "dirname"), this.path = Ce.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ce.extname(this.path) : void 0;
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
    if (Wt(t, "extname"), yr(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ce.join(this.dirname, this.stem + (t || ""));
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
    dn(t) && (t = wf(t)), Zt(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ce.basename(this.path, this.extname) : void 0;
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
    Zt(t, "stem"), Wt(t, "stem"), this.path = Ce.join(this.dirname || "", t + (this.extname || ""));
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
function Wt(e, t) {
  if (e && e.includes(Ce.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ce.sep + "`"
    );
}
function Zt(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function yr(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function vf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Sf = (
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
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), Ef = {}.hasOwnProperty;
class An extends Sf {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = ff();
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
      new An()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(qt(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Yt("data", this.frozen), this.namespace[t] = n, this) : Ef.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Yt("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = wt(t), r = this.parser || this.Parser;
    return Kt("parse", r), r(String(n), n);
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
    return this.freeze(), Kt("process", this.parser || this.Parser), Gt("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, l) {
      const a = wt(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(f, c, d) {
        if (f || !c || !d)
          return s(f);
        const h = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), x = r.stringify(h, d);
        Lf(x) ? d.value = x : d.result = x, s(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function s(f, c) {
        f || !c ? l(f) : o ? o(c) : n(void 0, c);
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
    return this.freeze(), Kt("processSync", this.parser || this.Parser), Gt("processSync", this.compiler || this.Compiler), this.process(t, i), kr("processSync", "process", n), r;
    function i(o, l) {
      n = !0, gr(o), r = l;
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
    br(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, a) {
      const u = wt(n);
      i.run(t, u, s);
      function s(f, c, d) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        f ? a(f) : l ? l(h) : r(void 0, h, d);
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
    return this.run(t, n, o), kr("runSync", "run", r), i;
    function o(l, a) {
      gr(l), i = a, r = !0;
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
    const r = wt(n), i = this.compiler || this.Compiler;
    return Gt("stringify", i), br(t), i(t, r);
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
    if (Yt("use", this.frozen), t != null) if (typeof t == "function")
      u(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(s) {
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
          l(s);
      else
        throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function l(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(s.plugins), s.settings && (i.settings = qt(!0, i.settings, s.settings));
    }
    function a(s) {
      let f = -1;
      if (s != null) if (Array.isArray(s))
        for (; ++f < s.length; ) {
          const c = s[f];
          o(c);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function u(s, f) {
      let c = -1, d = -1;
      for (; ++c < r.length; )
        if (r[c][0] === s) {
          d = c;
          break;
        }
      if (d === -1)
        r.push([s, ...f]);
      else if (f.length > 0) {
        let [h, ...x] = f;
        const w = r[d][1];
        hn(w) && hn(h) && (h = qt(!0, w, h)), r[d] = [s, h, ...x];
      }
    }
  }
}
const Tf = new An().freeze();
function Kt(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Gt(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Yt(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function br(e) {
  if (!hn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function kr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function wt(e) {
  return If(e) ? e : new Fi(e);
}
function If(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Lf(e) {
  return typeof e == "string" || Af(e);
}
function Af(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Pf = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", wr = [], Cr = { allowDangerousHtml: !0 }, Df = /^(https?|ircs?|mailto|xmpp)$/i, Mf = [
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
function Rf(e) {
  const t = jf(e), n = Ff(e);
  return zf(t.runSync(t.parse(n), n), e);
}
function jf(e) {
  const t = e.rehypePlugins || wr, n = e.remarkPlugins || wr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Cr } : Cr;
  return Tf().use(dc).use(n).use(sf, r).use(t);
}
function Ff(e) {
  const t = e.children || "", n = new Fi();
  return typeof t == "string" && (n.value = t), n;
}
function zf(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, l = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || Of;
  for (const f of Mf)
    Object.hasOwn(t, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + Pf + f.id, void 0);
  return Ln(e, s), Ya(e, {
    Fragment: y.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: y.jsx,
    jsxs: y.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function s(f, c, d) {
    if (f.type === "raw" && d && typeof c == "number")
      return l ? d.children.splice(c, 1) : d.children[c] = { type: "text", value: f.value }, c;
    if (f.type === "element") {
      let h;
      for (h in $t)
        if (Object.hasOwn($t, h) && Object.hasOwn(f.properties, h)) {
          const x = f.properties[h], w = $t[h];
          (w === null || w.includes(f.tagName)) && (f.properties[h] = u(String(x || ""), h, f));
        }
    }
    if (f.type === "element") {
      let h = n ? !n.includes(f.tagName) : o ? o.includes(f.tagName) : !1;
      if (!h && r && typeof c == "number" && (h = !r(f, c, d)), h && d && typeof c == "number")
        return a && f.children ? d.children.splice(c, 1, ...f.children) : d.children.splice(c, 1), c;
    }
  }
}
function Of(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Df.test(e.slice(0, t)) ? e : ""
  );
}
const Ne = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], vr = {
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
}, je = {}.hasOwnProperty;
function _f(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...vr, ...t } : vr,
    stack: []
  }, i = zi(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function zi(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Bf(e, n);
      case "doctype":
        return $f(e, n);
      case "element":
        return Nf(e, n);
      case "root":
        return Vf(e, n);
      case "text":
        return Hf(e, n);
    }
  }
}
function Bf(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), o = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return yt(o, t), o;
  }
}
function $f(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return yt(n, t), n;
  }
}
function Nf(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    Oi(e, t.children)
  ), i = qf(e, t.properties);
  e.stack.pop();
  let o = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (o = !0, e.schema.ancestors && je.call(e.schema.ancestors, n))) {
    const a = e.schema.ancestors[n];
    let u = -1;
    for (o = !1; ++u < a.length; )
      e.stack.includes(a[u]) && (o = !0);
  }
  if (!o)
    return e.schema.strip && !e.schema.strip.includes(n) ? r : void 0;
  const l = {
    type: "element",
    tagName: n,
    properties: i,
    children: r
  };
  return yt(l, t), l;
}
function Vf(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    Oi(e, t.children)
  ) };
  return yt(r, t), r;
}
function Hf(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return yt(r, t), r;
}
function Oi(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const o = zi(e, r[i]);
      o && (Array.isArray(o) ? n.push(...o) : n.push(o));
    }
  }
  return n;
}
function qf(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, o = r && je.call(r, n) ? r[n] : void 0, l = r && je.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), u = {};
  let s;
  for (s in a)
    if (je.call(a, s)) {
      const f = a[s];
      let c = Sr(
        e,
        Er(o, s),
        s,
        f
      );
      c == null && (c = Sr(e, Er(l, s), s, f)), c != null && (u[s] = c);
    }
  if (i && je.call(i, n)) {
    const f = i[n];
    for (s in f)
      je.call(f, s) && !je.call(u, s) && (u[s] = f[s]);
  }
  return u;
}
function Sr(e, t, n, r) {
  return t ? Array.isArray(r) ? Uf(e, t, n, r) : _i(e, t, n, r) : void 0;
}
function Uf(e, t, n, r) {
  let i = -1;
  const o = [];
  for (; ++i < r.length; ) {
    const l = _i(e, t, n, r[i]);
    (typeof l == "number" || typeof l == "string") && o.push(l);
  }
  return o;
}
function _i(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && Wf(e, n, r)) {
    if (typeof t == "object" && t.length > 1) {
      let i = !1, o = 0;
      for (; ++o < t.length; ) {
        const l = t[o];
        if (l && typeof l == "object" && "flags" in l) {
          if (l.test(String(r))) {
            i = !0;
            break;
          }
        } else if (l === r) {
          i = !0;
          break;
        }
      }
      if (!i) return;
    }
    return e.schema.clobber && e.schema.clobberPrefix && e.schema.clobber.includes(n) ? e.schema.clobberPrefix + r : r;
  }
}
function Wf(e, t, n) {
  const r = e.schema.protocols && je.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
  if (!r || r.length === 0)
    return !0;
  const i = String(n), o = i.indexOf(":"), l = i.indexOf("?"), a = i.indexOf("#"), u = i.indexOf("/");
  if (o < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
  u > -1 && o > u || l > -1 && o > l || a > -1 && o > a)
    return !0;
  let s = -1;
  for (; ++s < r.length; ) {
    const f = r[s];
    if (o === f.length && i.slice(0, f.length) === f)
      return !0;
  }
  return !1;
}
function yt(e, t) {
  const n = ui(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = dt(t.data)), n && (e.position = n);
}
function Er(e, t) {
  let n, r = -1;
  if (e)
    for (; ++r < e.length; ) {
      const i = e[r], o = typeof i == "string" ? i : i[0];
      if (o === t)
        return i;
      o === "data*" && (n = i);
    }
  if (t.length > 4 && t.slice(0, 4).toLowerCase() === "data")
    return n;
}
function Zf(e) {
  return function(t) {
    return (
      /** @type {Root} */
      _f(t, e)
    );
  };
}
function Tr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Kf(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Gf(e, t, n) {
  const i = Dt((n || {}).ignore || []), o = Yf(t);
  let l = -1;
  for (; ++l < o.length; )
    ji(e, "text", a);
  function a(s, f) {
    let c = -1, d;
    for (; ++c < f.length; ) {
      const h = f[c], x = d ? d.children : void 0;
      if (i(
        h,
        x ? x.indexOf(h) : void 0,
        d
      ))
        return;
      d = h;
    }
    if (d)
      return u(s, f);
  }
  function u(s, f) {
    const c = f[f.length - 1], d = o[l][0], h = o[l][1];
    let x = 0;
    const b = c.children.indexOf(s);
    let g = !1, S = [];
    d.lastIndex = 0;
    let E = d.exec(s.value);
    for (; E; ) {
      const R = E.index, L = {
        index: E.index,
        input: E.input,
        stack: [...f, s]
      };
      let C = h(...E, L);
      if (typeof C == "string" && (C = C.length > 0 ? { type: "text", value: C } : void 0), C === !1 ? d.lastIndex = R + 1 : (x !== R && S.push({
        type: "text",
        value: s.value.slice(x, R)
      }), Array.isArray(C) ? S.push(...C) : C && S.push(C), x = R + E[0].length, g = !0), !d.global)
        break;
      E = d.exec(s.value);
    }
    return g ? (x < s.value.length && S.push({ type: "text", value: s.value.slice(x) }), c.children.splice(b, 1, ...S)) : S = [s], b + S.length;
  }
}
function Yf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Xf(i[0]), Qf(i[1])]);
  }
  return t;
}
function Xf(e) {
  return typeof e == "string" ? new RegExp(Kf(e), "g") : e;
}
function Qf(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const Xt = "phrasing", Qt = ["autolink", "link", "image", "label"];
function Jf() {
  return {
    transforms: [oh],
    enter: {
      literalAutolink: th,
      literalAutolinkEmail: Jt,
      literalAutolinkHttp: Jt,
      literalAutolinkWww: Jt
    },
    exit: {
      literalAutolink: lh,
      literalAutolinkEmail: ih,
      literalAutolinkHttp: nh,
      literalAutolinkWww: rh
    }
  };
}
function eh() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Xt,
        notInConstruct: Qt
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Xt,
        notInConstruct: Qt
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Xt,
        notInConstruct: Qt
      }
    ]
  };
}
function th(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function Jt(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function nh(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function rh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function ih(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function lh(e) {
  this.exit(e);
}
function oh(e) {
  Gf(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, ah],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), sh]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function ah(e, t, n, r, i) {
  let o = "";
  if (!Bi(i) || (/^w/i.test(t) && (n = t + n, t = "", o = "http://"), !uh(n)))
    return !1;
  const l = ch(n + r);
  if (!l[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + t + l[0],
    children: [{ type: "text", value: t + l[0] }]
  };
  return l[1] ? [a, { type: "text", value: l[1] }] : a;
}
function sh(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Bi(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function uh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function ch(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = Tr(e, "(");
  let o = Tr(e, ")");
  for (; r !== -1 && i > o; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [e, n];
}
function Bi(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || qe(n) || Lt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
$i.peek = bh;
function fh() {
  this.buffer();
}
function hh(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function dh() {
  this.buffer();
}
function ph(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function mh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = ke(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function gh(e) {
  this.exit(e);
}
function xh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = ke(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function yh(e) {
  this.exit(e);
}
function bh() {
  return "[";
}
function $i(e, t, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const l = n.enter("footnoteReference"), a = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(e), { after: "]", before: o })
  ), a(), l(), o += i.move("]"), o;
}
function kh() {
  return {
    enter: {
      gfmFootnoteCallString: fh,
      gfmFootnoteCall: hh,
      gfmFootnoteDefinitionLabelString: dh,
      gfmFootnoteDefinition: ph
    },
    exit: {
      gfmFootnoteCallString: mh,
      gfmFootnoteCall: gh,
      gfmFootnoteDefinitionLabelString: xh,
      gfmFootnoteDefinition: yh
    }
  };
}
function wh(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: $i },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, o, l) {
    const a = o.createTracker(l);
    let u = a.move("[^");
    const s = o.enter("footnoteDefinition"), f = o.enter("label");
    return u += a.move(
      o.safe(o.associationId(r), { before: u, after: "]" })
    ), f(), u += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), u += a.move(
      (t ? `
` : " ") + o.indentLines(
        o.containerFlow(r, a.current()),
        t ? Ni : Ch
      )
    )), s(), u;
  }
}
function Ch(e, t, n) {
  return t === 0 ? e : Ni(e, t, n);
}
function Ni(e, t, n) {
  return (n ? "" : "    ") + e;
}
const vh = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Vi.peek = Lh;
function Sh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Th },
    exit: { strikethrough: Ih }
  };
}
function Eh() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: vh
      }
    ],
    handlers: { delete: Vi }
  };
}
function Th(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Ih(e) {
  this.exit(e);
}
function Vi(e, t, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let l = i.move("~~");
  return l += n.containerPhrasing(e, {
    ...i.current(),
    before: l,
    after: "~"
  }), l += i.move("~~"), o(), l;
}
function Lh() {
  return "~";
}
function Ah(e) {
  return e.length;
}
function Ph(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Ah, o = [], l = [], a = [], u = [];
  let s = 0, f = -1;
  for (; ++f < e.length; ) {
    const w = [], b = [];
    let g = -1;
    for (e[f].length > s && (s = e[f].length); ++g < e[f].length; ) {
      const S = Dh(e[f][g]);
      if (n.alignDelimiters !== !1) {
        const E = i(S);
        b[g] = E, (u[g] === void 0 || E > u[g]) && (u[g] = E);
      }
      w.push(S);
    }
    l[f] = w, a[f] = b;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < s; )
      o[c] = Ir(r[c]);
  else {
    const w = Ir(r);
    for (; ++c < s; )
      o[c] = w;
  }
  c = -1;
  const d = [], h = [];
  for (; ++c < s; ) {
    const w = o[c];
    let b = "", g = "";
    w === 99 ? (b = ":", g = ":") : w === 108 ? b = ":" : w === 114 && (g = ":");
    let S = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      u[c] - b.length - g.length
    );
    const E = b + "-".repeat(S) + g;
    n.alignDelimiters !== !1 && (S = b.length + S + g.length, S > u[c] && (u[c] = S), h[c] = S), d[c] = E;
  }
  l.splice(1, 0, d), a.splice(1, 0, h), f = -1;
  const x = [];
  for (; ++f < l.length; ) {
    const w = l[f], b = a[f];
    c = -1;
    const g = [];
    for (; ++c < s; ) {
      const S = w[c] || "";
      let E = "", R = "";
      if (n.alignDelimiters !== !1) {
        const L = u[c] - (b[c] || 0), C = o[c];
        C === 114 ? E = " ".repeat(L) : C === 99 ? L % 2 ? (E = " ".repeat(L / 2 + 0.5), R = " ".repeat(L / 2 - 0.5)) : (E = " ".repeat(L / 2), R = E) : R = " ".repeat(L);
      }
      n.delimiterStart !== !1 && !c && g.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && S === "") && (n.delimiterStart !== !1 || c) && g.push(" "), n.alignDelimiters !== !1 && g.push(E), g.push(S), n.alignDelimiters !== !1 && g.push(R), n.padding !== !1 && g.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && g.push("|");
    }
    x.push(
      n.delimiterEnd === !1 ? g.join("").replace(/ +$/, "") : g.join("")
    );
  }
  return x.join(`
`);
}
function Dh(e) {
  return e == null ? "" : String(e);
}
function Ir(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Mh(e, t, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const l = n.indentLines(
    n.containerFlow(e, o.current()),
    Rh
  );
  return i(), l;
}
function Rh(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function jh(e, t) {
  return Lr(e, t.inConstruct, !0) && !Lr(e, t.notInConstruct, !1);
}
function Lr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Ar(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && jh(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Fh(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, o = 0, l = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > l && (l = o) : o = 1, i = r + t.length, r = n.indexOf(t, i);
  return l;
}
function zh(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Oh(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function _h(e, t, n, r) {
  const i = Oh(n), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (zh(e, n)) {
    const c = n.enter("codeIndented"), d = n.indentLines(o, Bh);
    return c(), d;
  }
  const a = n.createTracker(r), u = i.repeat(Math.max(Fh(o, i) + 1, 3)), s = n.enter("codeFenced");
  let f = a.move(u);
  if (e.lang) {
    const c = n.enter(`codeFencedLang${l}`);
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
    const c = n.enter(`codeFencedMeta${l}`);
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
`), o && (f += a.move(o + `
`)), f += a.move(u), s(), f;
}
function Bh(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Pn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function $h(e, t, n, r) {
  const i = Pn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("definition");
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
  )), a(), e.title && (a = n.enter(`title${o}`), s += u.move(" " + i), s += u.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), l(), s;
}
function Nh(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function pt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function It(e, t, n) {
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
Hi.peek = Vh;
function Hi(e, t, n, r) {
  const i = Nh(n), o = n.enter("emphasis"), l = n.createTracker(r), a = l.move(i);
  let u = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const s = u.charCodeAt(0), f = It(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = pt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), d = It(r.after.charCodeAt(0), c, i);
  d.inside && (u = u.slice(0, -1) + pt(c));
  const h = l.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: f.outside
  }, a + u + h;
}
function Vh(e, t, n) {
  return n.options.emphasis || "*";
}
function Hh(e, t) {
  let n = !1;
  return Ln(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, cn;
  }), !!((!e.depth || e.depth < 3) && wn(e) && (t.options.setext || n));
}
function qh(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), o = n.createTracker(r);
  if (Hh(e, n)) {
    const f = n.enter("headingSetext"), c = n.enter("phrasing"), d = n.containerPhrasing(e, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return c(), f(), d + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      d.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(d.lastIndexOf("\r"), d.lastIndexOf(`
`)) + 1)
    );
  }
  const l = "#".repeat(i), a = n.enter("headingAtx"), u = n.enter("phrasing");
  o.move(l + " ");
  let s = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(s) && (s = pt(s.charCodeAt(0)) + s.slice(1)), s = s ? l + " " + s : l, n.options.closeAtx && (s += " " + l), u(), a(), s;
}
qi.peek = Uh;
function qi(e) {
  return e.value || "";
}
function Uh() {
  return "<";
}
Ui.peek = Wh;
function Ui(e, t, n, r) {
  const i = Pn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.enter("image");
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
  )), a(), e.title && (a = n.enter(`title${o}`), s += u.move(" " + i), s += u.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...u.current()
    })
  ), s += u.move(i), a()), s += u.move(")"), l(), s;
}
function Wh() {
  return "!";
}
Wi.peek = Zh;
function Wi(e, t, n, r) {
  const i = e.referenceType, o = n.enter("imageReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("![");
  const s = n.safe(e.alt, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), l();
  const f = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = f, o(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function Zh() {
  return "!";
}
Zi.peek = Kh;
function Zi(e, t, n) {
  let r = e.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const l = n.unsafe[o], a = n.compilePattern(l);
    let u;
    if (l.atBreak)
      for (; u = a.exec(r); ) {
        let s = u.index;
        r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(u.index + 1);
      }
  }
  return i + r + i;
}
function Kh() {
  return "`";
}
function Ki(e, t) {
  const n = wn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
Gi.peek = Gh;
function Gi(e, t, n, r) {
  const i = Pn(n), o = i === '"' ? "Quote" : "Apostrophe", l = n.createTracker(r);
  let a, u;
  if (Ki(e, n)) {
    const f = n.stack;
    n.stack = [], a = n.enter("autolink");
    let c = l.move("<");
    return c += l.move(
      n.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })
    ), c += l.move(">"), a(), n.stack = f, c;
  }
  a = n.enter("link"), u = n.enter("label");
  let s = l.move("[");
  return s += l.move(
    n.containerPhrasing(e, {
      before: s,
      after: "](",
      ...l.current()
    })
  ), s += l.move("]("), u(), // If there’s no url but there is a title…
  !e.url && e.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(e.url) ? (u = n.enter("destinationLiteral"), s += l.move("<"), s += l.move(
    n.safe(e.url, { before: s, after: ">", ...l.current() })
  ), s += l.move(">")) : (u = n.enter("destinationRaw"), s += l.move(
    n.safe(e.url, {
      before: s,
      after: e.title ? " " : ")",
      ...l.current()
    })
  )), u(), e.title && (u = n.enter(`title${o}`), s += l.move(" " + i), s += l.move(
    n.safe(e.title, {
      before: s,
      after: i,
      ...l.current()
    })
  ), s += l.move(i), u()), s += l.move(")"), a(), s;
}
function Gh(e, t, n) {
  return Ki(e, n) ? "<" : "[";
}
Yi.peek = Yh;
function Yi(e, t, n, r) {
  const i = e.referenceType, o = n.enter("linkReference");
  let l = n.enter("label");
  const a = n.createTracker(r);
  let u = a.move("[");
  const s = n.containerPhrasing(e, {
    before: u,
    after: "]",
    ...a.current()
  });
  u += a.move(s + "]["), l();
  const f = n.stack;
  n.stack = [], l = n.enter("reference");
  const c = n.safe(n.associationId(e), {
    before: u,
    after: "]",
    ...a.current()
  });
  return l(), n.stack = f, o(), i === "full" || !s || s !== c ? u += a.move(c + "]") : i === "shortcut" ? u = u.slice(0, -1) : u += a.move("]"), u;
}
function Yh() {
  return "[";
}
function Dn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Xh(e) {
  const t = Dn(e), n = e.options.bulletOther;
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
function Qh(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function Xi(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function Jh(e, t, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let l = e.ordered ? Qh(n) : Dn(n);
  const a = e.ordered ? l === "." ? ")" : "." : Xh(n);
  let u = t && n.bulletLastUsed ? l === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (l === "*" || l === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (u = !0), Xi(n) === l && f
    ) {
      let c = -1;
      for (; ++c < e.children.length; ) {
        const d = e.children[c];
        if (d && d.type === "listItem" && d.children && d.children[0] && d.children[0].type === "thematicBreak") {
          u = !0;
          break;
        }
      }
    }
  }
  u && (l = a), n.bulletCurrent = l;
  const s = n.containerFlow(e, r);
  return n.bulletLastUsed = l, n.bulletCurrent = o, i(), s;
}
function ed(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function td(e, t, n, r) {
  const i = ed(n);
  let o = n.bulletCurrent || Dn(n);
  t && t.type === "list" && t.ordered && (o = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(l - o.length)), a.shift(l);
  const u = n.enter("listItem"), s = n.indentLines(
    n.containerFlow(e, a.current()),
    f
  );
  return u(), s;
  function f(c, d, h) {
    return d ? (h ? "" : " ".repeat(l)) + c : (h ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function nd(e, t, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), l = n.containerPhrasing(e, r);
  return o(), i(), l;
}
const rd = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Dt([
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
function id(e, t, n, r) {
  return (e.children.some(function(l) {
    return rd(l);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function ld(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
Qi.peek = od;
function Qi(e, t, n, r) {
  const i = ld(n), o = n.enter("strong"), l = n.createTracker(r), a = l.move(i + i);
  let u = l.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    })
  );
  const s = u.charCodeAt(0), f = It(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = pt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), d = It(r.after.charCodeAt(0), c, i);
  d.inside && (u = u.slice(0, -1) + pt(c));
  const h = l.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: f.outside
  }, a + u + h;
}
function od(e, t, n) {
  return n.options.strong || "*";
}
function ad(e, t, n, r) {
  return n.safe(e.value, r);
}
function sd(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function ud(e, t, n) {
  const r = (Xi(n) + (n.options.ruleSpaces ? " " : "")).repeat(sd(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Ji = {
  blockquote: Mh,
  break: Ar,
  code: _h,
  definition: $h,
  emphasis: Hi,
  hardBreak: Ar,
  heading: qh,
  html: qi,
  image: Ui,
  imageReference: Wi,
  inlineCode: Zi,
  link: Gi,
  linkReference: Yi,
  list: Jh,
  listItem: td,
  paragraph: nd,
  root: id,
  strong: Qi,
  text: ad,
  thematicBreak: ud
};
function cd() {
  return {
    enter: {
      table: fd,
      tableData: Pr,
      tableHeader: Pr,
      tableRow: dd
    },
    exit: {
      codeText: pd,
      table: hd,
      tableData: en,
      tableHeader: en,
      tableRow: en
    }
  };
}
function fd(e) {
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
function hd(e) {
  this.exit(e), this.data.inTable = void 0;
}
function dd(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function en(e) {
  this.exit(e);
}
function Pr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function pd(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, md));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function md(e, t) {
  return t === "|" ? t : e;
}
function gd(e) {
  const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, o = n ? " " : "|";
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
      inlineCode: d,
      table: l,
      tableCell: u,
      tableRow: a
    }
  };
  function l(h, x, w, b) {
    return s(f(h, w, b), h.align);
  }
  function a(h, x, w, b) {
    const g = c(h, w, b), S = s([g]);
    return S.slice(0, S.indexOf(`
`));
  }
  function u(h, x, w, b) {
    const g = w.enter("tableCell"), S = w.enter("phrasing"), E = w.containerPhrasing(h, {
      ...b,
      before: o,
      after: o
    });
    return S(), g(), E;
  }
  function s(h, x) {
    return Ph(h, {
      align: x,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(h, x, w) {
    const b = h.children;
    let g = -1;
    const S = [], E = x.enter("table");
    for (; ++g < b.length; )
      S[g] = c(b[g], x, w);
    return E(), S;
  }
  function c(h, x, w) {
    const b = h.children;
    let g = -1;
    const S = [], E = x.enter("tableRow");
    for (; ++g < b.length; )
      S[g] = u(b[g], h, x, w);
    return E(), S;
  }
  function d(h, x, w) {
    let b = Ji.inlineCode(h, x, w);
    return w.stack.includes("tableCell") && (b = b.replace(/\|/g, "\\$&")), b;
  }
}
function xd() {
  return {
    exit: {
      taskListCheckValueChecked: Dr,
      taskListCheckValueUnchecked: Dr,
      paragraph: bd
    }
  };
}
function yd() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: kd }
  };
}
function Dr(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function bd(e) {
  const t = this.stack[this.stack.length - 2];
  if (t && t.type === "listItem" && typeof t.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = t.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          l = a;
          break;
        }
      }
      l === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e);
}
function kd(e, t, n, r) {
  const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(l);
  let u = Ji.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return o && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(f) {
    return f + l;
  }
}
function wd() {
  return [
    Jf(),
    kh(),
    Sh(),
    cd(),
    xd()
  ];
}
function Cd(e) {
  return {
    extensions: [
      eh(),
      wh(e),
      Eh(),
      gd(e),
      yd()
    ]
  };
}
const vd = {
  tokenize: Ad,
  partial: !0
}, el = {
  tokenize: Pd,
  partial: !0
}, tl = {
  tokenize: Dd,
  partial: !0
}, nl = {
  tokenize: Md,
  partial: !0
}, Sd = {
  tokenize: Rd,
  partial: !0
}, rl = {
  name: "wwwAutolink",
  tokenize: Id,
  previous: ll
}, il = {
  name: "protocolAutolink",
  tokenize: Ld,
  previous: ol
}, Ae = {
  name: "emailAutolink",
  tokenize: Td,
  previous: al
}, ve = {};
function Ed() {
  return {
    text: ve
  };
}
let Ve = 48;
for (; Ve < 123; )
  ve[Ve] = Ae, Ve++, Ve === 58 ? Ve = 65 : Ve === 91 && (Ve = 97);
ve[43] = Ae;
ve[45] = Ae;
ve[46] = Ae;
ve[95] = Ae;
ve[72] = [Ae, il];
ve[104] = [Ae, il];
ve[87] = [Ae, rl];
ve[119] = [Ae, rl];
function Td(e, t, n) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !pn(c) || !al.call(r, r.previous) || Mn(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return pn(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), u) : n(c);
  }
  function u(c) {
    return c === 46 ? e.check(Sd, f, s)(c) : c === 45 || c === 95 || le(c) ? (o = !0, e.consume(c), u) : f(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function f(c) {
    return o && i && ae(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function Id(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !ll.call(r, r.previous) || Mn(r.events) ? n(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(vd, e.attempt(el, e.attempt(tl, o), n), n)(l));
  }
  function o(l) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(l);
  }
}
function Ld(e, t, n) {
  const r = this;
  let i = "", o = !1;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && ol.call(r, r.previous) && !Mn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (ae(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(c), u;
    }
    return n(c);
  }
  function u(c) {
    return c === 47 ? (e.consume(c), o ? s : (o = !0, u)) : n(c);
  }
  function s(c) {
    return c === null || Et(c) || X(c) || qe(c) || Lt(c) ? n(c) : e.attempt(el, e.attempt(tl, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Ad(e, t, n) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : n(l);
  }
  function o(l) {
    return l === null ? n(l) : t(l);
  }
}
function Pd(e, t, n) {
  let r, i, o;
  return l;
  function l(s) {
    return s === 46 || s === 95 ? e.check(nl, u, a)(s) : s === null || X(s) || qe(s) || s !== 45 && Lt(s) ? u(s) : (o = !0, e.consume(s), l);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), l;
  }
  function u(s) {
    return i || r || !o ? n(s) : t(s);
  }
}
function Dd(e, t) {
  let n = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (n++, e.consume(l), i) : l === 41 && r < n ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(nl, t, o)(l) : l === null || X(l) || qe(l) ? t(l) : (e.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e.consume(l), i;
  }
}
function Md(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || X(a) || qe(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || X(a) || qe(a) ? t(a) : r(a);
  }
  function o(a) {
    return ae(a) ? l(a) : n(a);
  }
  function l(a) {
    return a === 59 ? (e.consume(a), r) : ae(a) ? (e.consume(a), l) : n(a);
  }
}
function Rd(e, t, n) {
  return r;
  function r(o) {
    return e.consume(o), i;
  }
  function i(o) {
    return le(o) ? n(o) : t(o);
  }
}
function ll(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || X(e);
}
function ol(e) {
  return !ae(e);
}
function al(e) {
  return !(e === 47 || pn(e));
}
function pn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || le(e);
}
function Mn(e) {
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
const jd = {
  tokenize: Vd,
  partial: !0
};
function Fd() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Bd,
        continuation: {
          tokenize: $d
        },
        exit: Nd
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: _d
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: zd,
        resolveTo: Od
      }
    }
  };
}
function zd(e, t, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const u = r.events[i][1];
    if (u.type === "labelImage") {
      l = u;
      break;
    }
    if (u.type === "gfmFootnoteCall" || u.type === "labelLink" || u.type === "label" || u.type === "image" || u.type === "link")
      break;
  }
  return a;
  function a(u) {
    if (!l || !l._balanced)
      return n(u);
    const s = ke(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }));
    return s.codePointAt(0) !== 94 || !o.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u));
  }
}
function Od(e, t) {
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
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, e[e.length - 1][1].start)
  }, l = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
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
    ["enter", o, t],
    ["enter", l, t],
    ["exit", l, t],
    ["exit", o, t],
    // The ending (`]`, properly parsed and labelled).
    e[e.length - 2],
    e[e.length - 1],
    ["exit", r, t]
  ];
  return e.splice(n, e.length - n + 1, ...a), e;
}
function _d(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
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
      o > 999 || // Closing brace with nothing.
      c === 93 && !l || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || X(c)
    )
      return n(c);
    if (c === 93) {
      e.exit("chunkString");
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(ke(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return X(c) || (l = !0), o++, e.consume(c), c === 92 ? f : s;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, s) : s(c);
  }
}
function Bd(e, t, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, a;
  return u;
  function u(x) {
    return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(x), e.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(x) {
    return x === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(x), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", f) : n(x);
  }
  function f(x) {
    if (
      // Too long.
      l > 999 || // Closing brace with nothing.
      x === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      x === null || x === 91 || X(x)
    )
      return n(x);
    if (x === 93) {
      e.exit("chunkString");
      const w = e.exit("gfmFootnoteDefinitionLabelString");
      return o = ke(r.sliceSerialize(w)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(x), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return X(x) || (a = !0), l++, e.consume(x), x === 92 ? c : f;
  }
  function c(x) {
    return x === 91 || x === 92 || x === 93 ? (e.consume(x), l++, f) : f(x);
  }
  function d(x) {
    return x === 58 ? (e.enter("definitionMarker"), e.consume(x), e.exit("definitionMarker"), i.includes(o) || i.push(o), U(e, h, "gfmFootnoteDefinitionWhitespace")) : n(x);
  }
  function h(x) {
    return t(x);
  }
}
function $d(e, t, n) {
  return e.check(gt, t, e.attempt(jd, t, n));
}
function Nd(e) {
  e.exit("gfmFootnoteDefinition");
}
function Vd(e, t, n) {
  const r = this;
  return U(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], !0).length === 4 ? t(o) : n(o);
  }
}
function Hd(e) {
  let n = (e || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
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
  function i(l, a) {
    let u = -1;
    for (; ++u < l.length; )
      if (l[u][0] === "enter" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._close) {
        let s = u;
        for (; s--; )
          if (l[s][0] === "exit" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._open && // If the sizes are the same:
          l[u][1].end.offset - l[u][1].start.offset === l[s][1].end.offset - l[s][1].start.offset) {
            l[u][1].type = "strikethroughSequence", l[s][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, l[s][1].start),
              end: Object.assign({}, l[u][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, l[s][1].end),
              end: Object.assign({}, l[u][1].start)
            }, d = [["enter", f, a], ["enter", l[s][1], a], ["exit", l[s][1], a], ["enter", c, a]], h = a.parser.constructs.insideSpan.null;
            h && me(d, d.length, 0, At(h, l.slice(s + 1, u), a)), me(d, d.length, 0, [["exit", c, a], ["enter", l[u][1], a], ["exit", l[u][1], a], ["exit", f, a]]), me(l, s - 1, u - s + 3, d), u = s + d.length - 2;
            break;
          }
      }
    for (u = -1; ++u < l.length; )
      l[u][1].type === "strikethroughSequenceTemporary" && (l[u][1].type = "data");
    return l;
  }
  function o(l, a, u) {
    const s = this.previous, f = this.events;
    let c = 0;
    return d;
    function d(x) {
      return s === 126 && f[f.length - 1][1].type !== "characterEscape" ? u(x) : (l.enter("strikethroughSequenceTemporary"), h(x));
    }
    function h(x) {
      const w = et(s);
      if (x === 126)
        return c > 1 ? u(x) : (l.consume(x), c++, h);
      if (c < 2 && !n) return u(x);
      const b = l.exit("strikethroughSequenceTemporary"), g = et(x);
      return b._open = !g || g === 2 && !!w, b._close = !w || w === 2 && !!g, a(x);
    }
  }
}
class qd {
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
    Ud(this, t, n, r);
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
    if (this.map.sort(function(o, l) {
      return o[0] - l[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        t.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Ud(e, t, n, r) {
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
function Wd(e, t) {
  let n = !1;
  const r = [];
  for (; t < e.length; ) {
    const i = e[t];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e[t - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    t += 1;
  }
  return r;
}
function Zd() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Kd,
        resolveAll: Gd
      }
    }
  };
}
function Kd(e, t, n) {
  const r = this;
  let i = 0, o = 0, l;
  return a;
  function a(k) {
    let D = r.events.length - 1;
    for (; D > -1; ) {
      const j = r.events[D][1].type;
      if (j === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      j === "linePrefix") D--;
      else break;
    }
    const M = D > -1 ? r.events[D][1].type : null, N = M === "tableHead" || M === "tableRow" ? C : u;
    return N === C && r.parser.lazy[r.now().line] ? n(k) : N(k);
  }
  function u(k) {
    return e.enter("tableHead"), e.enter("tableRow"), s(k);
  }
  function s(k) {
    return k === 124 || (l = !0, o += 1), f(k);
  }
  function f(k) {
    return k === null ? n(k) : F(k) ? o > 1 ? (o = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), h) : n(k) : H(k) ? U(e, f, "whitespace")(k) : (o += 1, l && (l = !1, i += 1), k === 124 ? (e.enter("tableCellDivider"), e.consume(k), e.exit("tableCellDivider"), l = !0, f) : (e.enter("data"), c(k)));
  }
  function c(k) {
    return k === null || k === 124 || X(k) ? (e.exit("data"), f(k)) : (e.consume(k), k === 92 ? d : c);
  }
  function d(k) {
    return k === 92 || k === 124 ? (e.consume(k), c) : c(k);
  }
  function h(k) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(k) : (e.enter("tableDelimiterRow"), l = !1, H(k) ? U(e, x, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(k) : x(k));
  }
  function x(k) {
    return k === 45 || k === 58 ? b(k) : k === 124 ? (l = !0, e.enter("tableCellDivider"), e.consume(k), e.exit("tableCellDivider"), w) : L(k);
  }
  function w(k) {
    return H(k) ? U(e, b, "whitespace")(k) : b(k);
  }
  function b(k) {
    return k === 58 ? (o += 1, l = !0, e.enter("tableDelimiterMarker"), e.consume(k), e.exit("tableDelimiterMarker"), g) : k === 45 ? (o += 1, g(k)) : k === null || F(k) ? R(k) : L(k);
  }
  function g(k) {
    return k === 45 ? (e.enter("tableDelimiterFiller"), S(k)) : L(k);
  }
  function S(k) {
    return k === 45 ? (e.consume(k), S) : k === 58 ? (l = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(k), e.exit("tableDelimiterMarker"), E) : (e.exit("tableDelimiterFiller"), E(k));
  }
  function E(k) {
    return H(k) ? U(e, R, "whitespace")(k) : R(k);
  }
  function R(k) {
    return k === 124 ? x(k) : k === null || F(k) ? !l || i !== o ? L(k) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(k)) : L(k);
  }
  function L(k) {
    return n(k);
  }
  function C(k) {
    return e.enter("tableRow"), O(k);
  }
  function O(k) {
    return k === 124 ? (e.enter("tableCellDivider"), e.consume(k), e.exit("tableCellDivider"), O) : k === null || F(k) ? (e.exit("tableRow"), t(k)) : H(k) ? U(e, O, "whitespace")(k) : (e.enter("data"), V(k));
  }
  function V(k) {
    return k === null || k === 124 || X(k) ? (e.exit("data"), O(k)) : (e.consume(k), k === 92 ? B : V);
  }
  function B(k) {
    return k === 92 || k === 124 ? (e.consume(k), V) : V(k);
  }
}
function Gd(e, t) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], a = !1, u = 0, s, f, c;
  const d = new qd();
  for (; ++n < e.length; ) {
    const h = e[n], x = h[1];
    h[0] === "enter" ? x.type === "tableHead" ? (a = !1, u !== 0 && (Mr(d, t, u, s, f), f = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, x.start),
      // Note: correct end is set later.
      end: Object.assign({}, x.end)
    }, d.add(n, 0, [["enter", s, t]])) : x.type === "tableRow" || x.type === "tableDelimiterRow" ? (r = !0, c = void 0, o = [0, 0, 0, 0], l = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, x.start),
      // Note: correct end is set later.
      end: Object.assign({}, x.end)
    }, d.add(n, 0, [["enter", f, t]])), i = x.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (x.type === "data" || x.type === "tableDelimiterMarker" || x.type === "tableDelimiterFiller") ? (r = !1, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = Ct(d, t, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = n)) : x.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (l[0] = l[1], c = Ct(d, t, o, i, void 0, c)), o = l, l = [o[1], n, 0, 0])) : x.type === "tableHead" ? (a = !0, u = n) : x.type === "tableRow" || x.type === "tableDelimiterRow" ? (u = n, o[1] !== 0 ? (l[0] = l[1], c = Ct(d, t, o, i, n, c)) : l[1] !== 0 && (c = Ct(d, t, l, i, n, c)), i = 0) : i && (x.type === "data" || x.type === "tableDelimiterMarker" || x.type === "tableDelimiterFiller") && (l[3] = n);
  }
  for (u !== 0 && Mr(d, t, u, s, f), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const h = t.events[n];
    h[0] === "enter" && h[1].type === "table" && (h[1]._align = Wd(t.events, n));
  }
  return e;
}
function Ct(e, t, n, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, Ge(t.events, n[0])), e.add(n[0], 0, [["exit", o, t]]));
  const u = Ge(t.events, n[1]);
  if (o = {
    type: l,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", o, t]]), n[2] !== 0) {
    const s = Ge(t.events, n[2]), f = Ge(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const d = t.events[n[2]], h = t.events[n[3]];
      if (d[1].end = Object.assign({}, h[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const x = n[2] + 1, w = n[3] - n[2] - 1;
        e.add(x, w, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Ge(t.events, i)), e.add(i, 0, [["exit", o, t]]), o = void 0), o;
}
function Mr(e, t, n, r, i) {
  const o = [], l = Ge(t.events, n);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, t])), r.end = Object.assign({}, l), o.push(["exit", r, t]), e.add(n + 1, 0, o);
}
function Ge(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Yd = {
  name: "tasklistCheck",
  tokenize: Qd
};
function Xd() {
  return {
    text: {
      91: Yd
    }
  };
}
function Qd(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(u) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), o)
    );
  }
  function o(u) {
    return X(u) ? (e.enter("taskListCheckValueUnchecked"), e.consume(u), e.exit("taskListCheckValueUnchecked"), l) : u === 88 || u === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(u), e.exit("taskListCheckValueChecked"), l) : n(u);
  }
  function l(u) {
    return u === 93 ? (e.enter("taskListCheckMarker"), e.consume(u), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(u);
  }
  function a(u) {
    return F(u) ? t(u) : H(u) ? e.check({
      tokenize: Jd
    }, t, n)(u) : n(u);
  }
}
function Jd(e, t, n) {
  return U(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function ep(e) {
  return mi([
    Ed(),
    Fd(),
    Hd(e),
    Zd(),
    Xd()
  ]);
}
const tp = {};
function np(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || tp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(ep(n)), o.push(wd()), l.push(Cd(n));
}
const rp = re.div`
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
`, ip = ({ content: e, className: t }) => /* @__PURE__ */ y.jsx(rp, { className: t, children: /* @__PURE__ */ y.jsx(Rf, { remarkPlugins: [np], rehypePlugins: [Zf], children: e }) }), lp = re.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, op = ({ name: e, timestamp: t }) => /* @__PURE__ */ y.jsxs(Ie, { children: [
  /* @__PURE__ */ y.jsx(Br, { src: Ql }),
  /* @__PURE__ */ y.jsx(Je, { children: e }),
  /* @__PURE__ */ y.jsx(lp, { children: new Date(t).toLocaleString() })
] }), ap = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", sp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var up = Object.defineProperty, cp = (e, t) => up(e, "name", { value: t, configurable: !0 });
const fp = cp((e) => y.jsx(Le, { light: sp, dark: ap, ...e }), "CheckIcon"), hp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", dp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var pp = Object.defineProperty, mp = (e, t) => pp(e, "name", { value: t, configurable: !0 });
const gp = mp((e) => y.jsx(Le, { light: dp, dark: hp, ...e }), "CopyIcon"), xp = ({
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
), yp = ({
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
), bp = ({
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
), kp = ({
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
), wp = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ y.jsxs(
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
), Cp = ({
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
), vp = ({
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
), Sp = ({
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
), sl = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, tn = re.span`
    font-size: 10px;
    color: ${({ theme: e }) => go(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, Ep = re(Ie)`
    margin-left: auto;
`, Tp = re.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Ip = ({
  totalTokens: e,
  requestTokens: t,
  responseTokens: n,
  duration: r,
  handleCopyClick: i
}) => {
  const [o, l] = P.useState(!1), a = P.useRef(null);
  P.useEffect(() => () => {
    a.current && clearTimeout(a.current);
  }, []);
  const u = () => {
    i(), l(!0), a.current && clearTimeout(a.current), a.current = setTimeout(() => l(!1), 1e3);
  };
  return /* @__PURE__ */ y.jsxs(Ie, { alignItems: "center", children: [
    /* @__PURE__ */ y.jsxs(Ie, { gap: 4, children: [
      /* @__PURE__ */ y.jsx(vp, {}),
      e && /* @__PURE__ */ y.jsx(tn, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ y.jsx(tn, { children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ y.jsxs(Ie, { gap: 4, children: [
      /* @__PURE__ */ y.jsx(bp, {}),
      r && /* @__PURE__ */ y.jsx(tn, { children: sl(r) })
    ] }),
    /* @__PURE__ */ y.jsxs(Ep, { children: [
      /* @__PURE__ */ y.jsx(Dl, { icon: o ? /* @__PURE__ */ y.jsx(fp, {}) : /* @__PURE__ */ y.jsx(gp, {}), onPress: u }),
      o && /* @__PURE__ */ y.jsx(Tp, { children: "Copied to clipboard" })
    ] })
  ] });
}, Lp = () => /* @__PURE__ */ y.jsxs(Vr, { children: [
  /* @__PURE__ */ y.jsx(Je, { children: "Test your agent" }),
  /* @__PURE__ */ y.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), Ap = re.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, Pp = re.div`
    padding-bottom: 8px;
`, Dp = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = P.useState(n), o = P.useId();
  return /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsxs(Ap, { "aria-expanded": r, "aria-controls": o, onClick: () => i((l) => !l), children: [
      r ? /* @__PURE__ */ y.jsx(xp, {}) : /* @__PURE__ */ y.jsx(yp, {}),
      e
    ] }),
    r && /* @__PURE__ */ y.jsx(Pp, { id: o, role: "region", "aria-label": e, children: t })
  ] });
}, Mp = (e) => "kbDisplayName" in e, Rp = (e) => "serverName" in e, jp = re.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Fp = re.div`
    font-size: 16px;
`, zp = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return Mp(n) ? (i = /* @__PURE__ */ y.jsx(kp, {}), r = n.kbDisplayName) : Rp(n) ? (i = /* @__PURE__ */ y.jsx(wp, {}), r = n.toolName) : (i = /* @__PURE__ */ y.jsx(Sp, {}), r = n.displayName), /* @__PURE__ */ y.jsxs(Ie, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ y.jsx(Fp, { children: i }),
      /* @__PURE__ */ y.jsxs("div", { children: [
        /* @__PURE__ */ y.jsx("div", { children: r }),
        /* @__PURE__ */ y.jsx(jp, { children: sl(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ y.jsx(Ie, { marginTop: 8, children: /* @__PURE__ */ y.jsx(Dp, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, Op = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const o = () => {
    t && navigator.clipboard.writeText(t.responseText);
  }, l = () => r && i ? /* @__PURE__ */ y.jsxs(Hr, { children: [
    /* @__PURE__ */ y.jsx(Je, { children: "Test execution failed" }),
    /* @__PURE__ */ y.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ y.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ y.jsx(yo, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ y.jsx(Ca, {}) : t ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(op, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ y.jsx(ip, { content: t.responseText }),
    /* @__PURE__ */ y.jsx(
      Ip,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: o
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ y.jsx(zp, { tools: t.tools })
  ] }) : /* @__PURE__ */ y.jsx(Lp, {});
  return /* @__PURE__ */ y.jsx(He, { label: "Output", children: l() });
}, Rr = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], _p = re.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, Bp = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: o,
  alt: l
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ y.jsx(Br, { src: t, alt: l }) : t;
  return /* @__PURE__ */ y.jsx(Ml, { variant: i, onPress: n, isDisabled: o, children: /* @__PURE__ */ y.jsxs(_p, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, $p = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: o,
  badgeBorderColor: l
}) => /* @__PURE__ */ y.jsxs(Ie, { children: [
  e && /* @__PURE__ */ y.jsx(Fn, { children: /* @__PURE__ */ y.jsx(Rl, { children: /* @__PURE__ */ y.jsx(
    jl,
    {
      title: e,
      backgroundcolor: o,
      bordercolor: l,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ y.jsx(Fn, { fullWidth: !0, children: /* @__PURE__ */ y.jsx(Fl, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), Np = re.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, Vp = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ y.jsx(Np, { children: e.map((r, i) => {
  var o, l, a, u;
  return /* @__PURE__ */ y.jsx(
    $p,
    {
      label: r.key,
      ariaLabel: "variable-" + r.key,
      value: r.value,
      onChange: (s) => n(i, s),
      badgeBackgroundColor: ((l = (o = t[i]) == null ? void 0 : o.style) == null ? void 0 : l.backgroundColor) || "initial",
      badgeBorderColor: ((u = (a = t[i]) == null ? void 0 : a.style) == null ? void 0 : u.borderColor) || "initial"
    },
    `${r.key}-${i}`
  );
}) }) : null, Hp = re(xo)`
    flex: 1;
`, qp = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  triggerTestAction: i
}) => {
  const [o, l] = P.useState(Rr[0]), [a, u] = P.useState(
    e.map((c) => ({
      ...c,
      value: ""
    }))
  );
  P.useEffect(() => {
    u((c) => {
      const d = new Map(c.map((h) => [h.key, h.value]));
      return e.map((h) => d.has(h.key) ? { ...h, value: d.get(h.key) } : {
        ...h,
        value: ""
      });
    });
  }, [e]);
  const s = () => i(a), f = (c, d) => {
    u((h) => {
      const x = [...h];
      return x[c] = { ...x[c], value: d }, x;
    });
  };
  return /* @__PURE__ */ y.jsxs(He, { label: "Playground", children: [
    r && /* @__PURE__ */ y.jsxs(ho, { children: [
      /* @__PURE__ */ y.jsx(Je, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ y.jsx("div", { children: "Please restart the application to apply the changes to the agent." })
    ] }),
    /* @__PURE__ */ y.jsxs(Ie, { children: [
      /* @__PURE__ */ y.jsx(
        Hp,
        {
          defaultValue: o == null ? void 0 : o.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: Rr.map((c) => /* @__PURE__ */ y.jsx(bo, { id: c.uuid, children: c.name }, c.uuid))
        }
      ),
      /* @__PURE__ */ y.jsx(
        Bp,
        {
          label: "Test",
          icon: /* @__PURE__ */ y.jsx(Cp, {}),
          onPress: s,
          variant: "primary",
          isDisabled: n,
          alt: "run test icon"
        }
      )
    ] }),
    a.length > 0 && /* @__PURE__ */ y.jsx(
      Vp,
      {
        variables: a,
        highlightRules: t,
        onVariableChange: f
      }
    )
  ] });
}, Up = re(Qr)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Wp = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  toolValidations: o
}) => {
  const [l, a] = P.useState([]), u = P.useMemo(() => e.tools ? e.tools.map((b, g) => ({
    id: b.id ?? String(g),
    enabled: b.enabled,
    name: b.toolType === On.Microflow ? b.name : b.document.qualifiedName.split(".")[1],
    description: b.description || "",
    tooltype: b.toolType,
    tool: b.document.qualifiedName || ""
  })) : [], [e.tools]), { items: s, sortProps: f } = qr(u), c = P.useCallback(
    (b) => {
      const g = o.get(b);
      return g === "invalid" ? /* @__PURE__ */ y.jsx(St, { icon: /* @__PURE__ */ y.jsx(Or, { title: "Tool invalid" }) }) : g === "syncing" ? /* @__PURE__ */ y.jsx(St, { icon: /* @__PURE__ */ y.jsx(Xr, { title: "Validating..." }) }) : null;
    },
    [o]
  ), d = P.useCallback(async () => {
    const b = await Bn(t, n, e, r);
    b && i(b);
  }, [t, n, e, r, i]), h = P.useCallback(async () => {
    if (l.length === 0 || !e.tools)
      return;
    const b = l[0], g = await Bn(
      t,
      n,
      e,
      r,
      b
    );
    g && i(g);
  }, [t, n, e, r, i, l]), x = P.useCallback(async () => {
    if (l.length === 0 || !e.tools)
      return;
    const b = l[0], g = await Uo(t, e, r, b);
    g && i(g);
  }, [e, r, i, l]), w = P.useCallback(
    async (b, g) => {
      if (!e.tools)
        return;
      const S = e.tools.map(
        (R) => (R.id ?? "") === b ? { ...R, enabled: g } : R
      ), E = { ...e, tools: S };
      r(E), i(E);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, r, i]
  );
  return /* @__PURE__ */ y.jsx(He, { label: "Tools", children: /* @__PURE__ */ y.jsx(
    Ur,
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
      data: s.map((b) => [
        { cellContent: c(b.id) },
        {
          cellContent: /* @__PURE__ */ y.jsx(
            Up,
            {
              "aria-label": "Enabled",
              isSelected: b.enabled,
              onChange: (g) => w(b.id, g)
            }
          )
        },
        { cellContent: b.name, tooltipText: b.name },
        { cellContent: b.description, tooltipText: b.description },
        {
          cellContent: /* @__PURE__ */ y.jsx(
            Nr,
            {
              icon: b.tooltype === On.Microflow ? /* @__PURE__ */ y.jsx(ko, {}) : Jl,
              text: b.tool
            }
          ),
          tooltipText: b.tool
        }
      ]),
      rowKey: (b, g) => {
        var S;
        return ((S = s[g]) == null ? void 0 : S.id) ?? String(g);
      },
      rowOpacity: (b) => {
        var g;
        return (g = s[b]) != null && g.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: l,
      onDoubleClick: h,
      onSelectionChange: a,
      ...f,
      toolbarLeft: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ y.jsx(Yr, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: d
          }
        ),
        /* @__PURE__ */ y.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ y.jsx(Gr, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: h,
            tooltip: "Edit selected tool",
            isDisabled: l.length === 0
          }
        ),
        /* @__PURE__ */ y.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ y.jsx(Kr, {}),
            label: "Delete",
            "aria-label": "Delete selected tool",
            onPress: x,
            tooltip: "Delete selected tool",
            isDisabled: l.length === 0
          }
        )
      ] })
    }
  ) });
}, Zp = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  missingAttributes: [],
  unusedAttributes: []
}, Kp = ({
  agentDocument: { name: e, contents: t, $ID: n },
  isRuntimeConnected: r,
  showUnsavedChangesWarning: i,
  studioPro: o,
  updateStudioProDocument: l
}) => {
  var _e;
  const [a, u] = P.useState(!1), [s, f] = P.useState(Zp), [c, d] = P.useState(void 0), [h, x] = P.useState(t), [w, b] = P.useState(!1), [g, S] = P.useState(/* @__PURE__ */ new Map()), [E, R] = P.useState(
    /* @__PURE__ */ new Map()
  ), L = zl(), {
    data: C,
    isError: O,
    error: V,
    isPending: B,
    execute: k
  } = Bo(o, n, r), D = P.useRef(null);
  P.useEffect(() => {
    var z;
    m(t).then((G) => f(G)), se(o, (z = t.entity) == null ? void 0 : z.qualifiedName).then((G) => d(G)), x(t), u(!0);
  }, []), P.useEffect(() => {
    a && x(t);
  }, [t]), P.useEffect(() => () => {
    D.current && clearTimeout(D.current);
  }, []), P.useEffect(() => {
    a && (async () => {
      var Z;
      const G = await se(o, (Z = h.entity) == null ? void 0 : Z.qualifiedName);
      d(G);
    })();
  }, [o, (_e = h.entity) == null ? void 0 : _e.qualifiedName]), P.useEffect(() => {
    a && (async () => {
      const G = [];
      if (h.tools && h.tools.length > 0) {
        const Z = /* @__PURE__ */ new Map();
        h.tools.forEach((W) => {
          Z.set(W.id, "syncing");
        }), S(Z), G.push(
          Promise.all(
            h.tools.map(async (W) => {
              const ie = await po("document", W, h, o);
              return {
                id: W.id,
                state: ie === !0 ? "valid" : "invalid"
              };
            })
          ).then((W) => {
            const ie = new Map(W.map((ee) => [ee.id, ee.state]));
            S(ie);
          })
        );
      }
      if (h.knowledgebaseTools && h.knowledgebaseTools.length > 0) {
        const Z = /* @__PURE__ */ new Map();
        h.knowledgebaseTools.forEach((W) => {
          Z.set(W.id, "syncing");
        }), R(Z), G.push(
          Promise.all(
            h.knowledgebaseTools.map(async (W) => {
              const ie = await mo(
                "document",
                W,
                h,
                o
              );
              return {
                id: W.id,
                state: ie === !0 ? "valid" : "invalid"
              };
            })
          ).then((W) => {
            const ie = new Map(W.map((ee) => [ee.id, ee.state]));
            R(ie);
          })
        );
      }
      await Promise.all(G);
    })();
  }, [a]);
  const M = P.useRef(/* @__PURE__ */ new Map()), N = P.useRef(/* @__PURE__ */ new Map());
  P.useEffect(() => {
    if (a && h.tools) {
      const z = M.current, G = /* @__PURE__ */ new Map();
      h.tools.forEach((Z) => {
        G.set(Z.id, Z.document.qualifiedName);
      }), S((Z) => {
        var ie;
        const W = new Map(Z);
        return (ie = h.tools) == null || ie.forEach((ee) => {
          if (!Z.has(ee.id))
            W.set(ee.id, "valid");
          else {
            const Be = z.get(ee.id), Me = G.get(ee.id);
            Be !== void 0 && Me !== void 0 && Be !== Me && W.set(ee.id, "valid");
          }
        }), W;
      }), M.current = G;
    }
  }, [h.tools, a]), P.useEffect(() => {
    if (a && h.knowledgebaseTools) {
      const z = N.current, G = /* @__PURE__ */ new Map();
      h.knowledgebaseTools.forEach((Z) => {
        G.set(Z.id, Z.document.qualifiedName);
      }), R((Z) => {
        var ie;
        const W = new Map(Z);
        return (ie = h.knowledgebaseTools) == null || ie.forEach((ee) => {
          if (!Z.has(ee.id))
            W.set(ee.id, "valid");
          else {
            const Be = z.get(ee.id), Me = G.get(ee.id);
            Be !== void 0 && Me !== void 0 && Be !== Me && W.set(ee.id, "valid");
          }
        }), W;
      }), N.current = G;
    }
  }, [h.knowledgebaseTools, a]), P.useEffect(() => {
    a && (async () => {
      const G = await m(h);
      f(G);
    })();
  }, [o, h]);
  const j = P.useMemo(() => eo(h.variables, L), [h.variables, L]), A = (z) => (G) => {
    const Z = { ...h, [z]: G };
    x(Z), D.current && clearTimeout(D.current), D.current = setTimeout(async () => {
      const W = await $o(
        o,
        z,
        Z,
        l,
        G
      );
      x(W);
    }, 300);
  }, K = async () => {
    const z = await No(o, h, l);
    z && x(z);
  }, J = async () => {
    const z = await Vo(o, h, l);
    z && x(z);
  }, fe = async () => {
    h.model && Ho(o, h.model);
  }, xe = async () => {
    h.entity && lo(o, h.entity.qualifiedName);
  }, p = async () => {
    const z = await qo(o, jt, h, l);
    z && x(z);
  }, se = async (z, G) => {
    if (!G)
      return;
    const Z = await to(z, G);
    if (!Z)
      return;
    const W = await no(Z, z);
    if (W !== void 0)
      return W ? /* @__PURE__ */ y.jsx(Do, {}) : /* @__PURE__ */ y.jsx(zo, {});
  }, ye = P.useMemo(() => {
    let z = "";
    return h.maxTokens !== void 0 && (z += "Max tokens: " + h.maxTokens.toLocaleString(navigator.language)), h.temperature !== void 0 && (z.length > 0 && (z += ", "), z += "Temperature: " + h.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), h.topP !== void 0 && (z.length > 0 && (z += ", "), z += "Top P: " + h.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), z;
  }, [h.temperature, h.maxTokens, h.topP]), m = async (z) => ({
    isValidModel: await zt("model", o, z),
    isValidEntity: await zt("entity", o, z),
    isValidUserPrompt: await zt("userPrompt", o, z),
    missingAttributes: await io(o, z),
    unusedAttributes: await ro(o, z)
  }), he = () => {
    var z, G, Z;
    return /* @__PURE__ */ y.jsxs(He, { label: "General", children: [
      /* @__PURE__ */ y.jsx(
        Ft,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((z = h.model) == null ? void 0 : z.qualifiedName) || "",
          icon: h.model ? fo : void 0,
          buttonCaption: "Select...",
          onClick: J,
          validate: () => s.isValidModel,
          buttonCaptionSecondary: h.model ? "Show" : void 0,
          onClickSecondary: h.model ? fe : void 0
        }
      ),
      /* @__PURE__ */ y.jsx(
        Ft,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: ye,
          buttonCaption: "Edit",
          onClick: p,
          validate: void 0
        }
      ),
      /* @__PURE__ */ y.jsx(
        Ol,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: h.description,
          onChange: A("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ y.jsx(
        Ft,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((G = h.entity) == null ? void 0 : G.qualifiedName) || "",
          icon: c,
          onClick: K,
          buttonCaption: "Select...",
          validate: () => s.isValidEntity,
          buttonCaptionSecondary: h.entity ? "Show" : void 0,
          onClickSecondary: h.entity ? xe : void 0
        }
      ),
      h.entity && s.missingAttributes.length > 0 && /* @__PURE__ */ y.jsxs(Hr, { children: [
        /* @__PURE__ */ y.jsx(Je, { children: `The following attributes cannot be found in ${h.entity.qualifiedName}:` }),
        /* @__PURE__ */ y.jsx("div", { children: s.missingAttributes.map((W) => `{{${W}}}`).join(", ") })
      ] }),
      h.entity && s.unusedAttributes.length > 0 && !w && /* @__PURE__ */ y.jsxs(Vr, { onClose: () => b(!0), children: [
        /* @__PURE__ */ y.jsx(Je, { children: `The following attributes are found in ${(Z = h.entity) == null ? void 0 : Z.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ y.jsx("div", { children: s.unusedAttributes.map((W) => `{{${W}}}`).join(", ") })
      ] })
    ] });
  }, Se = () => /* @__PURE__ */ y.jsx(He, { label: "System prompt", children: /* @__PURE__ */ y.jsx(
    _n,
    {
      ariaLabel: "System prompt",
      value: h.systemPrompt,
      onChange: A("systemPrompt"),
      highlightRules: j,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), ne = () => /* @__PURE__ */ y.jsx(He, { label: "User prompt", children: /* @__PURE__ */ y.jsx(
    _n,
    {
      ariaLabel: "User prompt",
      value: h.userPrompt || "",
      onChange: A("userPrompt"),
      highlightRules: j,
      validate: () => s.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), Oe = () => /* @__PURE__ */ y.jsx(
    Wp,
    {
      agent: h,
      studioPro: o,
      componentName: jt,
      updateStudioProDocument: l,
      onAgentChange: x,
      toolValidations: g
    }
  ), we = () => /* @__PURE__ */ y.jsx(
    qp,
    {
      variables: h.variables,
      highlightRules: j,
      triggerTestAction: k,
      isDisabled: B || i,
      showUnsavedChangesWarning: i
    }
  ), Pe = () => /* @__PURE__ */ y.jsx(
    ba,
    {
      agent: h,
      studioPro: o,
      componentName: jt,
      updateStudioProDocument: l,
      onAgentChange: x,
      knowledgebaseToolValidations: E
    }
  ), De = () => /* @__PURE__ */ y.jsx(
    Op,
    {
      agentName: e,
      response: C,
      isLoading: B,
      isError: O,
      error: V
    }
  );
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(zn, { children: [
      he(),
      Se(),
      ne(),
      Oe(),
      Pe()
    ] }),
    /* @__PURE__ */ y.jsxs(zn, { children: [
      we(),
      De()
    ] })
  ] });
}, Gp = oo(), Yp = ({ studioPro: e, documentId: t }) => {
  var g, S, E, R;
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, o] = P.useState(!1), [l, a] = P.useState(Gp), [u, s] = P.useState(0), [f, c] = P.useState(!1), [d, h] = P.useState(!1), x = [
    t,
    (g = l.contents.model) == null ? void 0 : g.documentId,
    ...l.contents.tools.map((L) => L.document.documentId)
  ].filter((L) => !!L), w = l.contents.entity ? [(R = (E = (S = l.contents.entity) == null ? void 0 : S.qualifiedName) == null ? void 0 : E.split(".")) == null ? void 0 : R[0]] : void 0;
  P.useEffect(() => {
    r.getDocumentById(t).then(async (L) => {
      if (L && !("error" in L))
        o(!0), a(L.document);
      else
        throw new Error((L == null ? void 0 : L.error) || "Document not found");
    }).catch(async (L) => {
      await n.show("error", "Error loading document", "Details: " + (L == null ? void 0 : L.message) || L), o(!0);
    });
  }, [u]);
  const b = P.useCallback(
    (L) => {
      L.some((C) => C === t) && s((C) => C + 1), h(!0);
    },
    [t]
  );
  return wo({
    studioPro: e,
    dependentIds: x,
    onDependentDocumentsChanged: b,
    watchProjectSettings: !0,
    watchDomainModelModules: w
  }), P.useEffect(() => {
    const L = (C) => {
      c(C.isConnected), h(!1);
    };
    return e.runtime.controller.addEventListener("connectionChanged", L), () => {
      e.runtime.controller.removeEventListener("connectionChanged", L);
    };
  }, []), P.useEffect(() => {
    ao(e).then((L) => {
      c(L);
    });
  }, [e]), /* @__PURE__ */ y.jsx(_l, { studioPro: e, children: /* @__PURE__ */ y.jsxs(Bl, { children: [
    !i && /* @__PURE__ */ y.jsx(co, {}),
    i && /* @__PURE__ */ y.jsx($l, { children: /* @__PURE__ */ y.jsx(
      Kp,
      {
        agentDocument: l,
        isRuntimeConnected: f,
        showUnsavedChangesWarning: d && f,
        studioPro: e,
        updateStudioProDocument: so(e, t)
      }
    ) })
  ] }) });
}, c1 = uo(Yp);
export {
  Yp as App,
  c1 as component
};
//# sourceMappingURL=agentEdit.js.map
