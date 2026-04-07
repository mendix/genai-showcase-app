import { $ as cn, a as kl, b as Ke, c as Vr, d as wl, e as Hr, f as Cl, r as D, g as qr, h as vl, i as Sl, j as Tl, k as El, l as Il, m as Ll, n as Al, o as Pl, p as Vn, q as Dl, s as Ml, t as Rl, u as Nt, v as jl, w as x, x as Ae, y as ne, z as Fl, A as Ur, G as $e, B as zl, C as Wr, D as Le, E as Zr, F as Ol, T as _l, H as Hn, L as Bl, S as $l, I as Nl, J as Vl, K as qn, M as Hl, N as ql, P as Ul, O as Wl } from "./Icon-DQcqUu4m.js";
import { y as Kr, u as Gr } from "./Link-CKghzZdc.js";
import { I as At, T as Xr, B as Ye, c as Zl, C as Kl } from "./TextWithIcon-HMOLBQDk.js";
import { a as Gl, e as Xl, i as Yl, g as Yr, m as Ql, c as Jl, b as Qr, k as eo, d as to, T as ft, f as fn, h as no, j as ro, l as io, n as lo, o as oo, p as ao, q as Vt, r as so, s as uo, t as co, u as fo } from "./index-BXG0OQfl.js";
import { P as ho, A as po, m as mo } from "./modelUtils-Cwt4V4f0.js";
import { I as Jr, W as ei, E as go } from "./Banner-DqKAGJJD.js";
import { h as xo, T as Un } from "./toolHandlers-DgbFQs38.js";
import { T as Ht } from "./TextInputWithButton-D4GcKXWs.js";
import { h as yo } from "./knowledgebaseToolHandlers-C_hZB4JW.js";
import { r as Fe, i as bo } from "./userPreferences-CMksV11G.js";
import { u as ti, T as ni, D as Ge, k as ko } from "./Table-Bjm3LHGN.js";
import { I as hn, S as Wn } from "./ComboBox-BPEc6pgM.js";
import { n as wo } from "./MicroflowIcon-C3S0Aw_R.js";
function Co(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: u, "aria-label": s, "aria-labelledby": f, validationState: c = "valid", isInvalid: d, onPressStart: h, onPressEnd: g, onPressChange: v, onPress: k, onPressUp: y, onClick: T } = e, b = (B) => {
    B.stopPropagation(), t.setSelected(B.target.checked);
  }, L = u != null, A = s != null || f != null;
  !L && !A && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: C, isPressed: _ } = cn({
    onPressStart: h,
    onPressEnd: g,
    onPressChange: v,
    onPress: k,
    onPressUp: y,
    onClick: T,
    isDisabled: r
  }), { pressProps: H, isPressed: V } = cn({
    onPressStart: h,
    onPressEnd: g,
    onPressChange: v,
    onPressUp: y,
    onClick: T,
    onPress(B) {
      var F;
      k == null || k(B), t.toggle(), (F = n.current) === null || F === void 0 || F.focus();
    },
    isDisabled: r || i
  }), { focusableProps: w } = kl(e, n), M = Ke(C, w), R = Vr(e, {
    labelable: !0
  });
  return wl(n, t.defaultSelected, t.setSelected), {
    labelProps: Ke(H, {
      onClick: (B) => B.preventDefault()
    }),
    inputProps: Ke(R, {
      "aria-invalid": d || c === "invalid" || void 0,
      "aria-errormessage": e["aria-errormessage"],
      "aria-controls": e["aria-controls"],
      "aria-readonly": i || void 0,
      onChange: b,
      disabled: r,
      ...l == null ? {} : {
        value: l
      },
      name: o,
      form: a,
      type: "checkbox",
      ...M
    }),
    isSelected: t.isSelected,
    isPressed: _ || V,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: d || c === "invalid"
  };
}
function ri(e, t, n) {
  let r = Hr({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: u, isSelected: s, isPressed: f, isDisabled: c, isReadOnly: d } = Co({
    ...e,
    isInvalid: i
  }, t, n);
  Cl(e, r, n);
  let { isIndeterminate: h, isRequired: g, validationBehavior: v = "aria" } = e;
  D.useEffect(() => {
    n.current && (n.current.indeterminate = !!h);
  });
  let { pressProps: k } = cn({
    isDisabled: c || d,
    onPress() {
      let { [qr]: y } = e, { commitValidation: T } = y || r;
      T();
    }
  });
  return {
    labelProps: Ke(a, k, D.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (y) => y.preventDefault()
    }), [])),
    inputProps: {
      ...u,
      checked: s,
      "aria-required": g && v === "aria" || void 0,
      required: g && v === "native"
    },
    isSelected: s,
    isPressed: f,
    isDisabled: c,
    isReadOnly: d,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
const vo = /* @__PURE__ */ new WeakMap();
function ii(e = {}) {
  let { isReadOnly: t } = e, [n, r] = vl(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = D.useState(n);
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
function So(e, t, n) {
  const r = ii({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(y) {
      y ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(y);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: u } = vo.get(t);
  var s;
  u = (s = e.validationBehavior) !== null && s !== void 0 ? s : u;
  let { realtimeValidation: f } = Hr({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = D.useRef(Sl), d = () => {
    t.setInvalid(e.value, f.isInvalid ? f : c.current);
  };
  D.useEffect(d);
  let h = t.realtimeValidation.isInvalid ? t.realtimeValidation : f, g = u === "native" ? t.displayValidation : h;
  var v;
  let k = ri({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (v = e.isRequired) !== null && v !== void 0 ? v : t.isRequired,
    validationBehavior: u,
    [qr]: {
      realtimeValidation: h,
      displayValidation: g,
      resetValidation: t.resetValidation,
      commitValidation: t.commitValidation,
      updateValidation(y) {
        c.current = y, d();
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
const To = /* @__PURE__ */ D.createContext(null), Eo = /* @__PURE__ */ D.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Tl(i, n, El);
  let { validationBehavior: l } = Il(Ll) || {};
  var o, a;
  let u = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", s = D.useContext(To), f = Al(D.useMemo(() => Pl(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: c, inputProps: d, isSelected: h, isDisabled: g, isReadOnly: v, isPressed: k, isInvalid: y } = s ? So({
    ...Vn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, f) : ri({
    ...Vn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: u
  }, ii(t), f), { isFocused: T, isFocusVisible: b, focusProps: L } = Dl(), A = g || v, { hoverProps: C, isHovered: _ } = Ml({
    ...t,
    isDisabled: A
  }), H = Rl({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: h,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: k,
      isHovered: _,
      isFocused: T,
      isFocusVisible: b,
      isDisabled: g,
      isReadOnly: v,
      isInvalid: y,
      isRequired: t.isRequired || !1
    }
  }), V = Vr(t, {
    global: !0
  });
  return delete V.id, delete V.onClick, /* @__PURE__ */ Nt.createElement("label", {
    ...Ke(V, c, C, H),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": h || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": k || void 0,
    "data-hovered": _ || void 0,
    "data-focused": T || void 0,
    "data-focus-visible": b || void 0,
    "data-disabled": g || void 0,
    "data-readonly": v || void 0,
    "data-invalid": y || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Nt.createElement(jl, {
    elementType: "span"
  }, /* @__PURE__ */ Nt.createElement("input", {
    ...Ke(d, L),
    ref: f
  })), H.children);
}), Io = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", Lo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Ao = Object.defineProperty, Po = (e, t) => Ao(e, "name", { value: t, configurable: !0 });
const Do = Po((e) => x.jsx(Ae, { light: Lo, dark: Io, ...e }), "EntityIcon"), Mo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ro = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var jo = Object.defineProperty, Fo = (e, t) => jo(e, "name", { value: t, configurable: !0 });
const zo = Fo((e) => x.jsx(Ae, { light: Ro, dark: Mo, ...e }), "EntityNonPersistableIcon"), Oo = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", _o = "Test action failed. Please check the runtime logs for more details.", Bo = (e, t, n) => {
  const [r, i] = D.useState(void 0), [l, o] = D.useState(!1), [a, u] = D.useState(!1), [s, f] = D.useState(void 0), c = D.useCallback(
    async (d) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: Gl,
          title: "App is not running",
          message: "Please run the app to use the playground."
        });
        return;
      }
      o(!0), i(void 0), u(!1), f(void 0);
      try {
        const h = await Xl(e, t, d);
        if (h === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in h && h.message === ho) {
          u(!0), f({ name: "Error", message: Oo, link: po });
          return;
        }
        i(h);
      } catch {
        u(!0), f({ name: "Error", message: _o });
      } finally {
        o(!1);
      }
    },
    [e, n, t]
  );
  return { data: r, isPending: l, isError: a, error: s, execute: c };
}, $o = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt") && (l.variables = await Jl(e, l)), r(l), l;
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
    const l = await Qr(e, t.variables, i);
    i = { ...i, variables: l }, n(i);
  }
  return i;
}, Vo = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: Ql }
  });
  let i;
  return r.status === "ok" && (i = {
    ...t,
    model: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, model: void 0 }), i && n(i), i;
}, vt = async (e, t, n) => {
  switch (e) {
    case "model": {
      if (!n.model)
        return "Please select a model.";
      const r = await Yr(t, n.model);
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
      if (!await Yl(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "userPrompt":
      if (!n.userPrompt)
        return "Please provide a user prompt.";
      break;
    case "toolChoice":
      if (n.toolChoice === "Tool") {
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
}, Ho = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await Yr(e, t))
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
  let l;
  return i && (l = i), l && r(l), l;
}, Zn = async (e, t, n, r, i) => {
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
}, Uo = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const l = t.tools.filter((a) => a.id !== r), o = { ...t, tools: l };
  return n(o), o;
}, Kn = async (e, t, n, r, i) => {
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
    i ? s = l.map((c) => c.id === i ? u : c) : s = [...l, u], s.sort((c, d) => c.name.localeCompare(d.name));
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
  const o = (t.knowledgebaseTools || []).filter((u) => u.id !== r), a = { ...t, knowledgebaseTools: o };
  return n(a), a;
}, Zo = async (e, t, n) => {
  const r = {
    ...e,
    toolChoice: n ?? void 0,
    // Clear toolChoiceToolName if toolChoice is not "Tool"
    toolChoiceToolName: n === "Tool" ? e.toolChoiceToolName : void 0
  };
  return t(r), r;
}, Ko = async (e, t, n) => {
  if (e.toolChoice !== "Tool")
    return;
  const r = { ...e, toolChoiceToolName: n ?? void 0 };
  return t(r), r;
}, Go = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Xo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Yo = Object.defineProperty, Qo = (e, t) => Yo(e, "name", { value: t, configurable: !0 });
const li = Qo((e) => x.jsx(Ae, { light: Xo, dark: Go, ...e }), "AppSelectorNoVersionIcon"), Jo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ea = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ta = Object.defineProperty, na = (e, t) => ta(e, "name", { value: t, configurable: !0 });
const oi = na((e) => x.jsx(Ae, { light: ea, dark: Jo, ...e }), "EditIcon"), ra = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ia = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var la = Object.defineProperty, oa = (e, t) => la(e, "name", { value: t, configurable: !0 });
const ai = oa((e) => x.jsx(Ae, { light: ia, dark: ra, ...e }), "PageIcon"), aa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", sa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var ua = Object.defineProperty, ca = (e, t) => ua(e, "name", { value: t, configurable: !0 });
const si = ca((e) => x.jsx(Ae, { light: sa, dark: aa, ...e }), "SyncIcon"), fa = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ha = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var da = Object.defineProperty, pa = (e, t) => da(e, "name", { value: t, configurable: !0 });
const ma = pa((e) => x.jsx(Ae, { light: ha, dark: fa, ...e }), "CheckCheckboxIcon");
var ga = Object.defineProperty, xa = (e, t) => ga(e, "name", { value: t, configurable: !0 });
const ui = xa(({ children: e, ...t }) => x.jsx(ba, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => x.jsxs(x.Fragment, { children: [x.jsxs(ci, { $isSelected: r, $isIndeterminate: n, children: [n && x.jsx(ya, {}), r && !n && x.jsx(ma, {})] }), e] }) }), "Checkbox"), ci = ne.div`
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
`, ya = ne.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, ba = ne(Eo)`
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
        ${ci} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${Fl}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, ka = ne(ui)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, wa = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  knowledgebaseToolValidations: l
}) => {
  const [o, a] = D.useState([]), u = D.useMemo(() => (e.knowledgebaseTools || []).map((y, T) => ({
    id: y.id ?? String(T),
    enabled: y.enabled,
    name: y.name,
    description: y.description || "",
    tool: y.document.qualifiedName || ""
  })), [e.knowledgebaseTools]), { items: s, sortProps: f } = ti(u), c = D.useCallback(
    (k) => {
      const y = l.get(k);
      return y === "invalid" ? /* @__PURE__ */ x.jsx(At, { icon: /* @__PURE__ */ x.jsx(Ur, { title: "Tool invalid" }) }) : y === "syncing" ? /* @__PURE__ */ x.jsx(At, { icon: /* @__PURE__ */ x.jsx(si, { title: "Validating..." }) }) : null;
    },
    [l]
  ), d = D.useCallback(async () => {
    const k = await Kn(
      t,
      n,
      e,
      r
    );
    k && i(k);
  }, [t, n, e, r, i]), h = D.useCallback(async () => {
    const k = e.knowledgebaseTools || [];
    if (o.length === 0 || k.length === 0)
      return;
    const y = o[0], T = await Kn(
      t,
      n,
      e,
      r,
      y
    );
    T && i(T);
  }, [t, n, e, r, i, o]), g = D.useCallback(async () => {
    const k = e.knowledgebaseTools || [];
    if (o.length === 0 || k.length === 0)
      return;
    const y = o[0], T = await Wo(
      t,
      e,
      r,
      y
    );
    T && i(T);
  }, [e, r, i, o]), v = D.useCallback(
    async (k, y) => {
      const T = e.knowledgebaseTools || [];
      if (T.length === 0)
        return;
      const b = T.map(
        (A) => (A.id ?? "") === k ? { ...A, enabled: y } : A
      ), L = { ...e, knowledgebaseTools: b };
      r(L), i(L);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, r, i]
  );
  return /* @__PURE__ */ x.jsx($e, { label: "Knowledge bases", children: /* @__PURE__ */ x.jsx(
    ni,
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
      data: s.map((k) => [
        { cellContent: c(k.id) },
        {
          cellContent: /* @__PURE__ */ x.jsx(
            ka,
            {
              "aria-label": "Enabled",
              isSelected: k.enabled,
              onChange: (y) => v(k.id, y)
            }
          )
        },
        { cellContent: k.name, tooltipText: k.name },
        { cellContent: k.description, tooltipText: k.description },
        {
          cellContent: /* @__PURE__ */ x.jsx(Xr, { icon: eo, text: k.tool }),
          tooltipText: k.tool
        }
      ]),
      rowKey: (k, y) => {
        var T;
        return ((T = s[y]) == null ? void 0 : T.id) ?? String(y);
      },
      rowOpacity: (k) => {
        var y;
        return (y = s[k]) != null && y.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: o,
      onDoubleClick: h,
      onSelectionChange: a,
      ...f,
      toolbarLeft: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx(
          Ge,
          {
            icon: /* @__PURE__ */ x.jsx(ai, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: d
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ge,
          {
            icon: /* @__PURE__ */ x.jsx(oi, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: h,
            tooltip: "Edit selected knowledge base",
            isDisabled: o.length === 0
          }
        ),
        /* @__PURE__ */ x.jsx(
          Ge,
          {
            icon: /* @__PURE__ */ x.jsx(li, {}),
            label: "Delete",
            "aria-label": "Remove selected knowledge base from agent",
            onPress: g,
            tooltip: "Remove selected knowledge base from agent",
            isDisabled: o.length === 0
          }
        )
      ] })
    }
  ) });
}, Ca = zl`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, va = ne.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, qt = ne.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${Ca} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, Sa = () => /* @__PURE__ */ x.jsxs(va, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ x.jsx(qt, { delay: "0s" }),
  /* @__PURE__ */ x.jsx(qt, { delay: "0.2s" }),
  /* @__PURE__ */ x.jsx(qt, { delay: "0.4s" })
] });
function Ta(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Ea = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ia = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, La = {};
function Gn(e, t) {
  return (La.jsx ? Ia : Ea).test(e);
}
const Aa = /[ \t\n\f\r]/g;
function Pa(e) {
  return typeof e == "object" ? e.type === "text" ? Xn(e.value) : !1 : Xn(e);
}
function Xn(e) {
  return e.replace(Aa, "") === "";
}
class yt {
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
yt.prototype.normal = {};
yt.prototype.property = {};
yt.prototype.space = void 0;
function fi(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new yt(n, r, t);
}
function dn(e) {
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
let Da = 0;
const N = Ve(), ee = Ve(), pn = Ve(), E = Ve(), Q = Ve(), Xe = Ve(), me = Ve();
function Ve() {
  return 2 ** ++Da;
}
const mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: N,
  booleanish: ee,
  commaOrSpaceSeparated: me,
  commaSeparated: Xe,
  number: E,
  overloadedBoolean: pn,
  spaceSeparated: Q
}, Symbol.toStringTag, { value: "Module" })), Ut = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(mn)
);
class Sn extends ce {
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
    if (super(t, n), Yn(this, "space", i), typeof r == "number")
      for (; ++l < Ut.length; ) {
        const o = Ut[l];
        Yn(this, Ut[l], (r & mn[o]) === mn[o]);
      }
  }
}
Sn.prototype.defined = !0;
function Yn(e, t, n) {
  n && (e[t] = n);
}
function Je(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new Sn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[dn(r)] = r, n[dn(l.attribute)] = r;
  }
  return new yt(t, n, e.space);
}
const hi = Je({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ee,
    ariaAutoComplete: null,
    ariaBusy: ee,
    ariaChecked: ee,
    ariaColCount: E,
    ariaColIndex: E,
    ariaColSpan: E,
    ariaControls: Q,
    ariaCurrent: null,
    ariaDescribedBy: Q,
    ariaDetails: null,
    ariaDisabled: ee,
    ariaDropEffect: Q,
    ariaErrorMessage: null,
    ariaExpanded: ee,
    ariaFlowTo: Q,
    ariaGrabbed: ee,
    ariaHasPopup: null,
    ariaHidden: ee,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Q,
    ariaLevel: E,
    ariaLive: null,
    ariaModal: ee,
    ariaMultiLine: ee,
    ariaMultiSelectable: ee,
    ariaOrientation: null,
    ariaOwns: Q,
    ariaPlaceholder: null,
    ariaPosInSet: E,
    ariaPressed: ee,
    ariaReadOnly: ee,
    ariaRelevant: null,
    ariaRequired: ee,
    ariaRoleDescription: Q,
    ariaRowCount: E,
    ariaRowIndex: E,
    ariaRowSpan: E,
    ariaSelected: ee,
    ariaSetSize: E,
    ariaSort: null,
    ariaValueMax: E,
    ariaValueMin: E,
    ariaValueNow: E,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function di(e, t) {
  return t in e ? e[t] : t;
}
function pi(e, t) {
  return di(e, t.toLowerCase());
}
const Ma = Je({
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
    accept: Xe,
    acceptCharset: Q,
    accessKey: Q,
    action: null,
    allow: null,
    allowFullScreen: N,
    allowPaymentRequest: N,
    allowUserMedia: N,
    alt: null,
    as: null,
    async: N,
    autoCapitalize: null,
    autoComplete: Q,
    autoFocus: N,
    autoPlay: N,
    blocking: Q,
    capture: null,
    charSet: null,
    checked: N,
    cite: null,
    className: Q,
    cols: E,
    colSpan: null,
    content: null,
    contentEditable: ee,
    controls: N,
    controlsList: Q,
    coords: E | Xe,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: N,
    defer: N,
    dir: null,
    dirName: null,
    disabled: N,
    download: pn,
    draggable: ee,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: N,
    formTarget: null,
    headers: Q,
    height: E,
    hidden: pn,
    high: E,
    href: null,
    hrefLang: null,
    htmlFor: Q,
    httpEquiv: Q,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: N,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: N,
    itemId: null,
    itemProp: Q,
    itemRef: Q,
    itemScope: N,
    itemType: Q,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: N,
    low: E,
    manifest: null,
    max: null,
    maxLength: E,
    media: null,
    method: null,
    min: null,
    minLength: E,
    multiple: N,
    muted: N,
    name: null,
    nonce: null,
    noModule: N,
    noValidate: N,
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
    open: N,
    optimum: E,
    pattern: null,
    ping: Q,
    placeholder: null,
    playsInline: N,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: N,
    referrerPolicy: null,
    rel: Q,
    required: N,
    reversed: N,
    rows: E,
    rowSpan: E,
    sandbox: Q,
    scope: null,
    scoped: N,
    seamless: N,
    selected: N,
    shadowRootClonable: N,
    shadowRootDelegatesFocus: N,
    shadowRootMode: null,
    shape: null,
    size: E,
    sizes: null,
    slot: null,
    span: E,
    spellCheck: ee,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: E,
    step: null,
    style: null,
    tabIndex: E,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: N,
    useMap: null,
    value: ee,
    width: E,
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
    border: E,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: E,
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
    compact: N,
    // Lists. Use CSS to reduce space between items instead
    declare: N,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: E,
    // `<img>` and `<object>`
    leftMargin: E,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: E,
    // `<body>`
    marginWidth: E,
    // `<body>`
    noResize: N,
    // `<frame>`
    noHref: N,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: N,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: N,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: E,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: ee,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: E,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: E,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: N,
    disableRemotePlayback: N,
    prefix: null,
    property: null,
    results: E,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: pi
}), Ra = Je({
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
    about: me,
    accentHeight: E,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: E,
    amplitude: E,
    arabicForm: null,
    ascent: E,
    attributeName: null,
    attributeType: null,
    azimuth: E,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: E,
    by: null,
    calcMode: null,
    capHeight: E,
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
    descent: E,
    diffuseConstant: E,
    direction: null,
    display: null,
    dur: null,
    divisor: E,
    dominantBaseline: null,
    download: N,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: E,
    enableBackground: null,
    end: null,
    event: null,
    exponent: E,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: E,
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
    g1: Xe,
    g2: Xe,
    glyphName: Xe,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: E,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: E,
    horizOriginX: E,
    horizOriginY: E,
    id: null,
    ideographic: E,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: E,
    k: E,
    k1: E,
    k2: E,
    k3: E,
    k4: E,
    kernelMatrix: me,
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
    limitingConeAngle: E,
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
    mediaSize: E,
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
    overlinePosition: E,
    overlineThickness: E,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: E,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Q,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: E,
    pointsAtY: E,
    pointsAtZ: E,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: me,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: me,
    rev: me,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: me,
    requiredFeatures: me,
    requiredFonts: me,
    requiredFormats: me,
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
    specularConstant: E,
    specularExponent: E,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: E,
    strikethroughThickness: E,
    string: null,
    stroke: null,
    strokeDashArray: me,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: E,
    strokeOpacity: E,
    strokeWidth: null,
    style: null,
    surfaceScale: E,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: me,
    tabIndex: E,
    tableValues: null,
    target: null,
    targetX: E,
    targetY: E,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: me,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: E,
    underlineThickness: E,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: E,
    values: null,
    vAlphabetic: E,
    vMathematical: E,
    vectorEffect: null,
    vHanging: E,
    vIdeographic: E,
    version: null,
    vertAdvY: E,
    vertOriginX: E,
    vertOriginY: E,
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
    xHeight: E,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: di
}), mi = Je({
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
}), gi = Je({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: pi
}), xi = Je({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), ja = {
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
}, Fa = /[A-Z]/g, Qn = /-[a-z]/g, za = /^data[-\w.:]+$/i;
function Oa(e, t) {
  const n = dn(t);
  let r = t, i = ce;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && za.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(Qn, Ba);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!Qn.test(l)) {
        let o = l.replace(Fa, _a);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = Sn;
  }
  return new i(r, t);
}
function _a(e) {
  return "-" + e.toLowerCase();
}
function Ba(e) {
  return e.charAt(1).toUpperCase();
}
const $a = fi([hi, Ma, mi, gi, xi], "html"), Tn = fi([hi, Ra, mi, gi, xi], "svg");
function Na(e) {
  return e.join(" ").trim();
}
var Ue = {}, Wt, Jn;
function Va() {
  if (Jn) return Wt;
  Jn = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", f = "*", c = "", d = "comment", h = "declaration";
  function g(k, y) {
    if (typeof k != "string")
      throw new TypeError("First argument must be a string");
    if (!k) return [];
    y = y || {};
    var T = 1, b = 1;
    function L(F) {
      var P = F.match(t);
      P && (T += P.length);
      var K = F.lastIndexOf(u);
      b = ~K ? F.length - K : b + F.length;
    }
    function A() {
      var F = { line: T, column: b };
      return function(P) {
        return P.position = new C(F), V(), P;
      };
    }
    function C(F) {
      this.start = F, this.end = { line: T, column: b }, this.source = y.source;
    }
    C.prototype.content = k;
    function _(F) {
      var P = new Error(
        y.source + ":" + T + ":" + b + ": " + F
      );
      if (P.reason = F, P.filename = y.source, P.line = T, P.column = b, P.source = k, !y.silent) throw P;
    }
    function H(F) {
      var P = F.exec(k);
      if (P) {
        var K = P[0];
        return L(K), k = k.slice(K.length), P;
      }
    }
    function V() {
      H(n);
    }
    function w(F) {
      var P;
      for (F = F || []; P = M(); )
        P !== !1 && F.push(P);
      return F;
    }
    function M() {
      var F = A();
      if (!(s != k.charAt(0) || f != k.charAt(1))) {
        for (var P = 2; c != k.charAt(P) && (f != k.charAt(P) || s != k.charAt(P + 1)); )
          ++P;
        if (P += 2, c === k.charAt(P - 1))
          return _("End of comment missing");
        var K = k.slice(2, P - 2);
        return b += 2, L(K), k = k.slice(P), b += 2, F({
          type: d,
          comment: K
        });
      }
    }
    function R() {
      var F = A(), P = H(r);
      if (P) {
        if (M(), !H(i)) return _("property missing ':'");
        var K = H(l), J = F({
          type: h,
          property: v(P[0].replace(e, c)),
          value: K ? v(K[0].replace(e, c)) : c
        });
        return H(o), J;
      }
    }
    function B() {
      var F = [];
      w(F);
      for (var P; P = R(); )
        P !== !1 && (F.push(P), w(F));
      return F;
    }
    return V(), B();
  }
  function v(k) {
    return k ? k.replace(a, c) : c;
  }
  return Wt = g, Wt;
}
var er;
function Ha() {
  if (er) return Ue;
  er = 1;
  var e = Ue && Ue.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.default = n;
  const t = e(Va());
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
  return Ue;
}
var at = {}, tr;
function qa() {
  if (tr) return at;
  tr = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(s) {
    return !s || n.test(s) || e.test(s);
  }, o = function(s, f) {
    return f.toUpperCase();
  }, a = function(s, f) {
    return "".concat(f, "-");
  }, u = function(s, f) {
    return f === void 0 && (f = {}), l(s) ? s : (s = s.toLowerCase(), f.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, o));
  };
  return at.camelCase = u, at;
}
var st, nr;
function Ua() {
  if (nr) return st;
  nr = 1;
  var e = st && st.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Ha()), n = qa();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (o[(0, n.camelCase)(a, l)] = u);
    }), o;
  }
  return r.default = r, st = r, st;
}
var Wa = Ua();
const Za = /* @__PURE__ */ Wr(Wa), yi = bi("end"), En = bi("start");
function bi(e) {
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
function ki(e) {
  const t = En(e), n = yi(e);
  if (t && n)
    return { start: t, end: n };
}
function ht(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? rr(e.position) : "start" in e || "end" in e ? rr(e) : "line" in e || "column" in e ? gn(e) : "";
}
function gn(e) {
  return ir(e && e.line) + ":" + ir(e && e.column);
}
function rr(e) {
  return gn(e && e.start) + "-" + gn(e && e.end);
}
function ir(e) {
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
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = ht(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
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
const In = {}.hasOwnProperty, Ka = /* @__PURE__ */ new Map(), Ga = /[A-Z]/g, Xa = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Ya = /* @__PURE__ */ new Set(["td", "th"]), wi = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Qa(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = os(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = ls(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? Tn : $a,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = Ci(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function Ci(e, t, n) {
  if (t.type === "element")
    return Ja(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return es(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return ns(e, t, n);
  if (t.type === "mdxjsEsm")
    return ts(e, t);
  if (t.type === "root")
    return rs(e, t, n);
  if (t.type === "text")
    return is(e, t);
}
function Ja(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Tn, e.schema = i), e.ancestors.push(t);
  const l = Si(e, t.tagName, !1), o = as(e, t);
  let a = An(e, t);
  return Xa.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !Pa(u) : !0;
  })), vi(e, o, l, t), Ln(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function es(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  mt(e, t.position);
}
function ts(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  mt(e, t.position);
}
function ns(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Tn, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : Si(e, t.name, !0), o = ss(e, t), a = An(e, t);
  return vi(e, o, l, t), Ln(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function rs(e, t, n) {
  const r = {};
  return Ln(r, An(e, t)), e.create(t, e.Fragment, r, n);
}
function is(e, t) {
  return t.value;
}
function vi(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Ln(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function ls(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const s = Array.isArray(o.children) ? n : t;
    return a ? s(l, o, a) : s(l, o);
  }
}
function os(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), u = En(r);
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
function as(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && In.call(t.properties, i)) {
      const l = us(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && Ya.has(t.tagName) ? r = a : n[o] = a;
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
function ss(e, t) {
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
        mt(e, t.position);
    else {
      const i = r.name;
      let l;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, l = e.evaluater.evaluateExpression(a.expression);
        } else
          mt(e, t.position);
      else
        l = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      l;
    }
  return n;
}
function An(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Ka;
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
    const a = Ci(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function us(e, t, n) {
  const r = Oa(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Ta(n) : Na(n)), r.property === "style") {
      let i = typeof n == "object" ? n : cs(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = fs(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? ja[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function cs(e, t) {
  try {
    return Za(t, { reactCompat: !0 });
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
    throw i.file = e.filePath || void 0, i.url = wi + "#cannot-parse-style-attribute", i;
  }
}
function Si(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = Gn(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = Gn(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return In.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  mt(e);
}
function mt(e, t) {
  const n = new le(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = wi + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function fs(e) {
  const t = {};
  let n;
  for (n in e)
    In.call(e, n) && (t[hs(n)] = e[n]);
  return t;
}
function hs(e) {
  let t = e.replace(Ga, ds);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function ds(e) {
  return "-" + e.toLowerCase();
}
const Zt = {
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
}, ps = {};
function Pn(e, t) {
  const n = ps, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ti(e, r, i);
}
function Ti(e, t, n) {
  if (ms(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return lr(e.children, t, n);
  }
  return Array.isArray(e) ? lr(e, t, n) : "";
}
function lr(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ti(e[i], t, n);
  return r.join("");
}
function ms(e) {
  return !!(e && typeof e == "object");
}
const or = document.createElement("i");
function Dn(e) {
  const t = "&" + e + ";";
  or.innerHTML = t;
  const n = or.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function ge(e, t, n, r) {
  const i = e.length;
  let l = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); l < r.length; )
      o = r.slice(l, l + 1e4), o.unshift(t, 0), e.splice(...o), l += 1e4, t += 1e4;
}
function xe(e, t) {
  return e.length > 0 ? (ge(e, e.length, 0, t), e) : t;
}
const ar = {}.hasOwnProperty;
function Ei(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    gs(t, e[n]);
  return t;
}
function gs(e, t) {
  let n;
  for (n in t) {
    const i = (ar.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        ar.call(i, o) || (i[o] = []);
        const a = l[o];
        xs(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function xs(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  ge(e, 0, 0, r);
}
function Ii(e, t) {
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
function we(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const se = ze(/[A-Za-z]/), ie = ze(/[\dA-Za-z]/), ys = ze(/[#-'*+\--9=?A-Z^-~]/);
function Pt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const xn = ze(/\d/), bs = ze(/[\dA-Fa-f]/), ks = ze(/[!-/:-@[-`{-~]/);
function O(e) {
  return e !== null && e < -2;
}
function Y(e) {
  return e !== null && (e < 0 || e === 32);
}
function q(e) {
  return e === -2 || e === -1 || e === 32;
}
const Rt = ze(new RegExp("\\p{P}|\\p{S}", "u")), Ne = ze(/\s/);
function ze(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function et(e) {
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
function Z(e, t, n, r) {
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
const ws = {
  tokenize: Cs
};
function Cs(e) {
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
const vs = {
  tokenize: Ss
}, sr = {
  tokenize: Ts
};
function Ss(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(b) {
    if (r < n.length) {
      const L = n[r];
      return t.containerState = L[1], e.attempt(L[0].continuation, u, s)(b);
    }
    return s(b);
  }
  function u(b) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && T();
      const L = t.events.length;
      let A = L, C;
      for (; A--; )
        if (t.events[A][0] === "exit" && t.events[A][1].type === "chunkFlow") {
          C = t.events[A][1].end;
          break;
        }
      y(r);
      let _ = L;
      for (; _ < t.events.length; )
        t.events[_][1].end = {
          ...C
        }, _++;
      return ge(t.events, A + 1, 0, t.events.slice(L)), t.events.length = _, s(b);
    }
    return a(b);
  }
  function s(b) {
    if (r === n.length) {
      if (!i)
        return d(b);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return g(b);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(sr, f, c)(b);
  }
  function f(b) {
    return i && T(), y(r), d(b);
  }
  function c(b) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, g(b);
  }
  function d(b) {
    return t.containerState = {}, e.attempt(sr, h, g)(b);
  }
  function h(b) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(b);
  }
  function g(b) {
    if (b === null) {
      i && T(), y(0), e.consume(b);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: l
    }), v(b);
  }
  function v(b) {
    if (b === null) {
      k(e.exit("chunkFlow"), !0), y(0), e.consume(b);
      return;
    }
    return O(b) ? (e.consume(b), k(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(b), v);
  }
  function k(b, L) {
    const A = t.sliceStream(b);
    if (L && A.push(null), b.previous = l, l && (l.next = b), l = b, i.defineSkip(b.start), i.write(A), t.parser.lazy[b.start.line]) {
      let C = i.events.length;
      for (; C--; )
        if (
          // The token starts before the line ending…
          i.events[C][1].start.offset < o && // …and either is not ended yet…
          (!i.events[C][1].end || // …or ends after it.
          i.events[C][1].end.offset > o)
        )
          return;
      const _ = t.events.length;
      let H = _, V, w;
      for (; H--; )
        if (t.events[H][0] === "exit" && t.events[H][1].type === "chunkFlow") {
          if (V) {
            w = t.events[H][1].end;
            break;
          }
          V = !0;
        }
      for (y(r), C = _; C < t.events.length; )
        t.events[C][1].end = {
          ...w
        }, C++;
      ge(t.events, H + 1, 0, t.events.slice(_)), t.events.length = C;
    }
  }
  function y(b) {
    let L = n.length;
    for (; L-- > b; ) {
      const A = n[L];
      t.containerState = A[1], A[0].exit.call(t, e);
    }
    n.length = b;
  }
  function T() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Ts(e, t, n) {
  return Z(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Qe(e) {
  if (e === null || Y(e) || Ne(e))
    return 1;
  if (Rt(e))
    return 2;
}
function jt(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const l = e[i].resolveAll;
    l && !r.includes(l) && (t = l(t, n), r.push(l));
  }
  return t;
}
const yn = {
  name: "attention",
  resolveAll: Es,
  tokenize: Is
};
function Es(e, t) {
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
          }, d = {
            ...e[n][1].start
          };
          ur(c, -u), ur(d, u), o = {
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
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = xe(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = xe(s, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), s = xe(s, jt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = xe(s, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, s = xe(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, ge(e, r - 1, n - r + 3, s), n = r + s.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Is(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Qe(r);
  let l;
  return o;
  function o(u) {
    return l = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === l)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), f = Qe(u), c = !f || f === 2 && i || n.includes(u), d = !i || i === 2 && f || n.includes(r);
    return s._open = !!(l === 42 ? c : c && (i || !d)), s._close = !!(l === 42 ? d : d && (f || !c)), t(u);
  }
}
function ur(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Ls = {
  name: "autolink",
  tokenize: As
};
function As(e, t, n) {
  let r = 0;
  return i;
  function i(h) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(h) {
    return se(h) ? (e.consume(h), o) : h === 64 ? n(h) : s(h);
  }
  function o(h) {
    return h === 43 || h === 45 || h === 46 || ie(h) ? (r = 1, a(h)) : s(h);
  }
  function a(h) {
    return h === 58 ? (e.consume(h), r = 0, u) : (h === 43 || h === 45 || h === 46 || ie(h)) && r++ < 32 ? (e.consume(h), a) : (r = 0, s(h));
  }
  function u(h) {
    return h === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : h === null || h === 32 || h === 60 || Pt(h) ? n(h) : (e.consume(h), u);
  }
  function s(h) {
    return h === 64 ? (e.consume(h), f) : ys(h) ? (e.consume(h), s) : n(h);
  }
  function f(h) {
    return ie(h) ? c(h) : n(h);
  }
  function c(h) {
    return h === 46 ? (e.consume(h), r = 0, f) : h === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(h), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(h);
  }
  function d(h) {
    if ((h === 45 || ie(h)) && r++ < 63) {
      const g = h === 45 ? d : c;
      return e.consume(h), g;
    }
    return n(h);
  }
}
const bt = {
  partial: !0,
  tokenize: Ps
};
function Ps(e, t, n) {
  return r;
  function r(l) {
    return q(l) ? Z(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || O(l) ? t(l) : n(l);
  }
}
const Li = {
  continuation: {
    tokenize: Ms
  },
  exit: Rs,
  name: "blockQuote",
  tokenize: Ds
};
function Ds(e, t, n) {
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
function Ms(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return q(o) ? Z(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(Li, t, n)(o);
  }
}
function Rs(e) {
  e.exit("blockQuote");
}
const Ai = {
  name: "characterEscape",
  tokenize: js
};
function js(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return ks(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const Pi = {
  name: "characterReference",
  tokenize: Fs
};
function Fs(e, t, n) {
  const r = this;
  let i = 0, l, o;
  return a;
  function a(c) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), u;
  }
  function u(c) {
    return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), l = 31, o = ie, f(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = bs, f) : (e.enter("characterReferenceValue"), l = 7, o = xn, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return o === ie && !Dn(r.sliceSerialize(d)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(c) && i++ < l ? (e.consume(c), f) : n(c);
  }
}
const cr = {
  partial: !0,
  tokenize: Os
}, fr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: zs
};
function zs(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: A
  };
  let l = 0, o = 0, a;
  return u;
  function u(C) {
    return s(C);
  }
  function s(C) {
    const _ = r.events[r.events.length - 1];
    return l = _ && _[1].type === "linePrefix" ? _[2].sliceSerialize(_[1], !0).length : 0, a = C, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), f(C);
  }
  function f(C) {
    return C === a ? (o++, e.consume(C), f) : o < 3 ? n(C) : (e.exit("codeFencedFenceSequence"), q(C) ? Z(e, c, "whitespace")(C) : c(C));
  }
  function c(C) {
    return C === null || O(C) ? (e.exit("codeFencedFence"), r.interrupt ? t(C) : e.check(cr, v, L)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(C));
  }
  function d(C) {
    return C === null || O(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(C)) : q(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Z(e, h, "whitespace")(C)) : C === 96 && C === a ? n(C) : (e.consume(C), d);
  }
  function h(C) {
    return C === null || O(C) ? c(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), g(C));
  }
  function g(C) {
    return C === null || O(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(C)) : C === 96 && C === a ? n(C) : (e.consume(C), g);
  }
  function v(C) {
    return e.attempt(i, L, k)(C);
  }
  function k(C) {
    return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), y;
  }
  function y(C) {
    return l > 0 && q(C) ? Z(e, T, "linePrefix", l + 1)(C) : T(C);
  }
  function T(C) {
    return C === null || O(C) ? e.check(cr, v, L)(C) : (e.enter("codeFlowValue"), b(C));
  }
  function b(C) {
    return C === null || O(C) ? (e.exit("codeFlowValue"), T(C)) : (e.consume(C), b);
  }
  function L(C) {
    return e.exit("codeFenced"), t(C);
  }
  function A(C, _, H) {
    let V = 0;
    return w;
    function w(P) {
      return C.enter("lineEnding"), C.consume(P), C.exit("lineEnding"), M;
    }
    function M(P) {
      return C.enter("codeFencedFence"), q(P) ? Z(C, R, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(P) : R(P);
    }
    function R(P) {
      return P === a ? (C.enter("codeFencedFenceSequence"), B(P)) : H(P);
    }
    function B(P) {
      return P === a ? (V++, C.consume(P), B) : V >= o ? (C.exit("codeFencedFenceSequence"), q(P) ? Z(C, F, "whitespace")(P) : F(P)) : H(P);
    }
    function F(P) {
      return P === null || O(P) ? (C.exit("codeFencedFence"), _(P)) : H(P);
    }
  }
}
function Os(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Kt = {
  name: "codeIndented",
  tokenize: Bs
}, _s = {
  partial: !0,
  tokenize: $s
};
function Bs(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), Z(e, l, "linePrefix", 5)(s);
  }
  function l(s) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], !0).length >= 4 ? o(s) : n(s);
  }
  function o(s) {
    return s === null ? u(s) : O(s) ? e.attempt(_s, o, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || O(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function $s(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : O(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : Z(e, l, "linePrefix", 5)(o);
  }
  function l(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : O(o) ? i(o) : n(o);
  }
}
const Ns = {
  name: "codeText",
  previous: Hs,
  resolve: Vs,
  tokenize: qs
};
function Vs(e) {
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
function Hs(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function qs(e, t, n) {
  let r = 0, i, l;
  return o;
  function o(c) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
  }
  function a(c) {
    return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), u(c));
  }
  function u(c) {
    return c === null ? n(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), u) : c === 96 ? (l = e.enter("codeTextSequence"), i = 0, f(c)) : O(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || O(c) ? (e.exit("codeTextData"), u(c)) : (e.consume(c), s);
  }
  function f(c) {
    return c === 96 ? (e.consume(c), i++, f) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(c)) : (l.type = "codeTextData", s(c));
  }
}
class Us {
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
    return r && ut(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), ut(this.left, t);
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
    this.setCursor(0), ut(this.right, t.reverse());
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
        ut(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        ut(this.left, n.reverse());
      }
  }
}
function ut(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function Di(e) {
  const t = {};
  let n = -1, r, i, l, o, a, u, s;
  const f = new Us(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, l = 0, l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2), l < u.length && u[l][1].type === "content"))
      for (; ++l < u.length && u[l][1].type !== "content"; )
        u[l][1].type === "chunkText" && (u[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Ws(f, n)), n = t[n], s = !0);
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
  return ge(e, 0, Number.POSITIVE_INFINITY, f.slice(0)), !s;
}
function Ws(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, u = [], s = {};
  let f, c, d = -1, h = n, g = 0, v = 0;
  const k = [v];
  for (; h; ) {
    for (; e.get(++i)[1] !== h; )
      ;
    l.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), c && o.defineSkip(h.start), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(f), h._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), c = h, h = h.next;
  }
  for (h = n; ++d < a.length; )
    // Find a void token that includes a break.
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (v = d + 1, k.push(v), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (o.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : k.pop(), d = k.length; d--; ) {
    const y = a.slice(k[d], k[d + 1]), T = l.pop();
    u.push([T, T + y.length - 1]), e.splice(T, 2, y);
  }
  for (u.reverse(), d = -1; ++d < u.length; )
    s[g + u[d][0]] = g + u[d][1], g += u[d][1] - u[d][0] - 1;
  return s;
}
const Zs = {
  resolve: Gs,
  tokenize: Xs
}, Ks = {
  partial: !0,
  tokenize: Ys
};
function Gs(e) {
  return Di(e), e;
}
function Xs(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : O(a) ? e.check(Ks, o, l)(a) : (e.consume(a), i);
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
function Ys(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), Z(e, l, "linePrefix");
  }
  function l(o) {
    if (o === null || O(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function Mi(e, t, n, r, i, l, o, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), d) : y === null || y === 32 || y === 41 || Pt(y) ? n(y) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(y));
  }
  function d(y) {
    return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(y));
  }
  function h(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), d(y)) : y === null || y === 60 || O(y) ? n(y) : (e.consume(y), y === 92 ? g : h);
  }
  function g(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), h) : h(y);
  }
  function v(y) {
    return !f && (y === null || y === 41 || Y(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(y)) : f < s && y === 40 ? (e.consume(y), f++, v) : y === 41 ? (e.consume(y), f--, v) : y === null || y === 32 || y === 40 || Pt(y) ? n(y) : (e.consume(y), y === 92 ? k : v);
  }
  function k(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), v) : v(y);
  }
}
function Ri(e, t, n, r, i, l) {
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
    h === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(h) : h === 93 ? (e.exit(l), e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : O(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === null || h === 91 || h === 93 || O(h) || a++ > 999 ? (e.exit("chunkString"), f(h)) : (e.consume(h), u || (u = !q(h)), h === 92 ? d : c);
  }
  function d(h) {
    return h === 91 || h === 92 || h === 93 ? (e.consume(h), a++, c) : c(h);
  }
}
function ji(e, t, n, r, i, l) {
  let o;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), o = d === 40 ? 41 : d, u) : n(d);
  }
  function u(d) {
    return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(l), s(d));
  }
  function s(d) {
    return d === o ? (e.exit(l), u(o)) : d === null ? n(d) : O(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), Z(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === o || d === null || O(d) ? (e.exit("chunkString"), s(d)) : (e.consume(d), d === 92 ? c : f);
  }
  function c(d) {
    return d === o || d === 92 ? (e.consume(d), f) : f(d);
  }
}
function dt(e, t) {
  let n;
  return r;
  function r(i) {
    return O(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? Z(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Qs = {
  name: "definition",
  tokenize: eu
}, Js = {
  partial: !0,
  tokenize: tu
};
function eu(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(h) {
    return e.enter("definition"), o(h);
  }
  function o(h) {
    return Ri.call(
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
    return i = we(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e.enter("definitionMarker"), e.consume(h), e.exit("definitionMarker"), u) : n(h);
  }
  function u(h) {
    return Y(h) ? dt(e, s)(h) : s(h);
  }
  function s(h) {
    return Mi(
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
    return e.attempt(Js, c, c)(h);
  }
  function c(h) {
    return q(h) ? Z(e, d, "whitespace")(h) : d(h);
  }
  function d(h) {
    return h === null || O(h) ? (e.exit("definition"), r.parser.defined.push(i), t(h)) : n(h);
  }
}
function tu(e, t, n) {
  return r;
  function r(a) {
    return Y(a) ? dt(e, i)(a) : n(a);
  }
  function i(a) {
    return ji(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return q(a) ? Z(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || O(a) ? t(a) : n(a);
  }
}
const nu = {
  name: "hardBreakEscape",
  tokenize: ru
};
function ru(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return O(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const iu = {
  name: "headingAtx",
  resolve: lu,
  tokenize: ou
};
function lu(e, t) {
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
  }, ge(e, r, n - r + 1, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]])), e;
}
function ou(e, t, n) {
  let r = 0;
  return i;
  function i(f) {
    return e.enter("atxHeading"), l(f);
  }
  function l(f) {
    return e.enter("atxHeadingSequence"), o(f);
  }
  function o(f) {
    return f === 35 && r++ < 6 ? (e.consume(f), o) : f === null || Y(f) ? (e.exit("atxHeadingSequence"), a(f)) : n(f);
  }
  function a(f) {
    return f === 35 ? (e.enter("atxHeadingSequence"), u(f)) : f === null || O(f) ? (e.exit("atxHeading"), t(f)) : q(f) ? Z(e, a, "whitespace")(f) : (e.enter("atxHeadingText"), s(f));
  }
  function u(f) {
    return f === 35 ? (e.consume(f), u) : (e.exit("atxHeadingSequence"), a(f));
  }
  function s(f) {
    return f === null || f === 35 || Y(f) ? (e.exit("atxHeadingText"), a(f)) : (e.consume(f), s);
  }
}
const au = [
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
], hr = ["pre", "script", "style", "textarea"], su = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: fu,
  tokenize: hu
}, uu = {
  partial: !0,
  tokenize: pu
}, cu = {
  partial: !0,
  tokenize: du
};
function fu(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function hu(e, t, n) {
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
    return m === 33 ? (e.consume(m), d) : m === 47 ? (e.consume(m), l = !0, v) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : p) : se(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), i = 2, h) : m === 91 ? (e.consume(m), i = 5, a = 0, g) : se(m) ? (e.consume(m), i = 4, r.interrupt ? t : p) : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : p) : n(m);
  }
  function g(m) {
    const de = "CDATA[";
    return m === de.charCodeAt(a++) ? (e.consume(m), a === de.length ? r.interrupt ? t : R : g) : n(m);
  }
  function v(m) {
    return se(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function k(m) {
    if (m === null || m === 47 || m === 62 || Y(m)) {
      const de = m === 47, be = o.toLowerCase();
      return !de && !l && hr.includes(be) ? (i = 1, r.interrupt ? t(m) : R(m)) : au.includes(o.toLowerCase()) ? (i = 6, de ? (e.consume(m), y) : r.interrupt ? t(m) : R(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : l ? T(m) : b(m));
    }
    return m === 45 || ie(m) ? (e.consume(m), o += String.fromCharCode(m), k) : n(m);
  }
  function y(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : R) : n(m);
  }
  function T(m) {
    return q(m) ? (e.consume(m), T) : w(m);
  }
  function b(m) {
    return m === 47 ? (e.consume(m), w) : m === 58 || m === 95 || se(m) ? (e.consume(m), L) : q(m) ? (e.consume(m), b) : w(m);
  }
  function L(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || ie(m) ? (e.consume(m), L) : A(m);
  }
  function A(m) {
    return m === 61 ? (e.consume(m), C) : q(m) ? (e.consume(m), A) : b(m);
  }
  function C(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), u = m, _) : q(m) ? (e.consume(m), C) : H(m);
  }
  function _(m) {
    return m === u ? (e.consume(m), u = null, V) : m === null || O(m) ? n(m) : (e.consume(m), _);
  }
  function H(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || Y(m) ? A(m) : (e.consume(m), H);
  }
  function V(m) {
    return m === 47 || m === 62 || q(m) ? b(m) : n(m);
  }
  function w(m) {
    return m === 62 ? (e.consume(m), M) : n(m);
  }
  function M(m) {
    return m === null || O(m) ? R(m) : q(m) ? (e.consume(m), M) : n(m);
  }
  function R(m) {
    return m === 45 && i === 2 ? (e.consume(m), K) : m === 60 && i === 1 ? (e.consume(m), J) : m === 62 && i === 4 ? (e.consume(m), he) : m === 63 && i === 3 ? (e.consume(m), p) : m === 93 && i === 5 ? (e.consume(m), fe) : O(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(uu, ye, B)(m)) : m === null || O(m) ? (e.exit("htmlFlowData"), B(m)) : (e.consume(m), R);
  }
  function B(m) {
    return e.check(cu, F, ye)(m);
  }
  function F(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), P;
  }
  function P(m) {
    return m === null || O(m) ? B(m) : (e.enter("htmlFlowData"), R(m));
  }
  function K(m) {
    return m === 45 ? (e.consume(m), p) : R(m);
  }
  function J(m) {
    return m === 47 ? (e.consume(m), o = "", oe) : R(m);
  }
  function oe(m) {
    if (m === 62) {
      const de = o.toLowerCase();
      return hr.includes(de) ? (e.consume(m), he) : R(m);
    }
    return se(m) && o.length < 8 ? (e.consume(m), o += String.fromCharCode(m), oe) : R(m);
  }
  function fe(m) {
    return m === 93 ? (e.consume(m), p) : R(m);
  }
  function p(m) {
    return m === 62 ? (e.consume(m), he) : m === 45 && i === 2 ? (e.consume(m), p) : R(m);
  }
  function he(m) {
    return m === null || O(m) ? (e.exit("htmlFlowData"), ye(m)) : (e.consume(m), he);
  }
  function ye(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function du(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return O(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function pu(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(bt, t, n);
  }
}
const mu = {
  name: "htmlText",
  tokenize: gu
};
function gu(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(p) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(p), u;
  }
  function u(p) {
    return p === 33 ? (e.consume(p), s) : p === 47 ? (e.consume(p), A) : p === 63 ? (e.consume(p), b) : se(p) ? (e.consume(p), H) : n(p);
  }
  function s(p) {
    return p === 45 ? (e.consume(p), f) : p === 91 ? (e.consume(p), l = 0, g) : se(p) ? (e.consume(p), T) : n(p);
  }
  function f(p) {
    return p === 45 ? (e.consume(p), h) : n(p);
  }
  function c(p) {
    return p === null ? n(p) : p === 45 ? (e.consume(p), d) : O(p) ? (o = c, J(p)) : (e.consume(p), c);
  }
  function d(p) {
    return p === 45 ? (e.consume(p), h) : c(p);
  }
  function h(p) {
    return p === 62 ? K(p) : p === 45 ? d(p) : c(p);
  }
  function g(p) {
    const he = "CDATA[";
    return p === he.charCodeAt(l++) ? (e.consume(p), l === he.length ? v : g) : n(p);
  }
  function v(p) {
    return p === null ? n(p) : p === 93 ? (e.consume(p), k) : O(p) ? (o = v, J(p)) : (e.consume(p), v);
  }
  function k(p) {
    return p === 93 ? (e.consume(p), y) : v(p);
  }
  function y(p) {
    return p === 62 ? K(p) : p === 93 ? (e.consume(p), y) : v(p);
  }
  function T(p) {
    return p === null || p === 62 ? K(p) : O(p) ? (o = T, J(p)) : (e.consume(p), T);
  }
  function b(p) {
    return p === null ? n(p) : p === 63 ? (e.consume(p), L) : O(p) ? (o = b, J(p)) : (e.consume(p), b);
  }
  function L(p) {
    return p === 62 ? K(p) : b(p);
  }
  function A(p) {
    return se(p) ? (e.consume(p), C) : n(p);
  }
  function C(p) {
    return p === 45 || ie(p) ? (e.consume(p), C) : _(p);
  }
  function _(p) {
    return O(p) ? (o = _, J(p)) : q(p) ? (e.consume(p), _) : K(p);
  }
  function H(p) {
    return p === 45 || ie(p) ? (e.consume(p), H) : p === 47 || p === 62 || Y(p) ? V(p) : n(p);
  }
  function V(p) {
    return p === 47 ? (e.consume(p), K) : p === 58 || p === 95 || se(p) ? (e.consume(p), w) : O(p) ? (o = V, J(p)) : q(p) ? (e.consume(p), V) : K(p);
  }
  function w(p) {
    return p === 45 || p === 46 || p === 58 || p === 95 || ie(p) ? (e.consume(p), w) : M(p);
  }
  function M(p) {
    return p === 61 ? (e.consume(p), R) : O(p) ? (o = M, J(p)) : q(p) ? (e.consume(p), M) : V(p);
  }
  function R(p) {
    return p === null || p === 60 || p === 61 || p === 62 || p === 96 ? n(p) : p === 34 || p === 39 ? (e.consume(p), i = p, B) : O(p) ? (o = R, J(p)) : q(p) ? (e.consume(p), R) : (e.consume(p), F);
  }
  function B(p) {
    return p === i ? (e.consume(p), i = void 0, P) : p === null ? n(p) : O(p) ? (o = B, J(p)) : (e.consume(p), B);
  }
  function F(p) {
    return p === null || p === 34 || p === 39 || p === 60 || p === 61 || p === 96 ? n(p) : p === 47 || p === 62 || Y(p) ? V(p) : (e.consume(p), F);
  }
  function P(p) {
    return p === 47 || p === 62 || Y(p) ? V(p) : n(p);
  }
  function K(p) {
    return p === 62 ? (e.consume(p), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(p);
  }
  function J(p) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), oe;
  }
  function oe(p) {
    return q(p) ? Z(e, fe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p) : fe(p);
  }
  function fe(p) {
    return e.enter("htmlTextData"), o(p);
  }
}
const Mn = {
  name: "labelEnd",
  resolveAll: ku,
  resolveTo: wu,
  tokenize: Cu
}, xu = {
  tokenize: vu
}, yu = {
  tokenize: Su
}, bu = {
  tokenize: Tu
};
function ku(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && ge(e, 0, e.length, n), e;
}
function wu(e, t) {
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
  return a = [["enter", u, t], ["enter", s, t]], a = xe(a, e.slice(l + 1, l + r + 3)), a = xe(a, [["enter", f, t]]), a = xe(a, jt(t.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), t)), a = xe(a, [["exit", f, t], e[o - 2], e[o - 1], ["exit", s, t]]), a = xe(a, e.slice(o + 1)), a = xe(a, [["exit", u, t]]), ge(e, l, e.length, a), e;
}
function Cu(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return l ? l._inactive ? c(d) : (o = r.parser.defined.includes(we(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(d);
  }
  function u(d) {
    return d === 40 ? e.attempt(xu, f, o ? f : c)(d) : d === 91 ? e.attempt(yu, f, o ? s : c)(d) : o ? f(d) : c(d);
  }
  function s(d) {
    return e.attempt(bu, f, c)(d);
  }
  function f(d) {
    return t(d);
  }
  function c(d) {
    return l._balanced = !0, n(d);
  }
}
function vu(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Y(c) ? dt(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41 ? f(c) : Mi(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function o(c) {
    return Y(c) ? dt(e, u)(c) : f(c);
  }
  function a(c) {
    return n(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? ji(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function s(c) {
    return Y(c) ? dt(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Su(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Ri.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(we(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function Tu(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const Eu = {
  name: "labelStartImage",
  resolveAll: Mn.resolveAll,
  tokenize: Iu
};
function Iu(e, t, n) {
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
const Lu = {
  name: "labelStartLink",
  resolveAll: Mn.resolveAll,
  tokenize: Au
};
function Au(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Gt = {
  name: "lineEnding",
  tokenize: Pu
};
function Pu(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), Z(e, t, "linePrefix");
  }
}
const Lt = {
  name: "thematicBreak",
  tokenize: Du
};
function Du(e, t, n) {
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
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), q(s) ? Z(e, a, "whitespace")(s) : a(s));
  }
}
const ue = {
  continuation: {
    tokenize: Fu
  },
  exit: Ou,
  name: "list",
  tokenize: ju
}, Mu = {
  partial: !0,
  tokenize: _u
}, Ru = {
  partial: !0,
  tokenize: zu
};
function ju(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(h) {
    const g = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (g === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : xn(h)) {
      if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
        _container: !0
      })), g === "listUnordered")
        return e.enter("listItemPrefix"), h === 42 || h === 45 ? e.check(Lt, n, s)(h) : s(h);
      if (!r.interrupt || h === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(h);
    }
    return n(h);
  }
  function u(h) {
    return xn(h) && ++o < 10 ? (e.consume(h), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e.exit("listItemValue"), s(h)) : n(h);
  }
  function s(h) {
    return e.enter("listItemMarker"), e.consume(h), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e.check(
      bt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(Mu, d, c)
    );
  }
  function f(h) {
    return r.containerState.initialBlankLine = !0, l++, d(h);
  }
  function c(h) {
    return q(h) ? (e.enter("listItemPrefixWhitespace"), e.consume(h), e.exit("listItemPrefixWhitespace"), d) : n(h);
  }
  function d(h) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(h);
  }
}
function Fu(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(bt, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Z(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ru, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, Z(e, e.attempt(ue, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function zu(e, t, n) {
  const r = this;
  return Z(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function Ou(e) {
  e.exit(this.containerState.type);
}
function _u(e, t, n) {
  const r = this;
  return Z(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !q(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const dr = {
  name: "setextUnderline",
  resolveTo: Bu,
  tokenize: $u
};
function Bu(e, t) {
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
function $u(e, t, n) {
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
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), q(s) ? Z(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || O(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Nu = {
  tokenize: Vu
};
function Vu(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    bt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, Z(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Zs, i)), "linePrefix"))
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
const Hu = {
  resolveAll: zi()
}, qu = Fi("string"), Uu = Fi("text");
function Fi(e) {
  return {
    resolveAll: zi(e === "text" ? Wu : void 0),
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
function zi(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function Wu(e, t) {
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
const Zu = {
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
  62: Li
}, Ku = {
  91: Qs
}, Gu = {
  [-2]: Kt,
  [-1]: Kt,
  32: Kt
}, Xu = {
  35: iu,
  42: Lt,
  45: [dr, Lt],
  60: su,
  61: dr,
  95: Lt,
  96: fr,
  126: fr
}, Yu = {
  38: Pi,
  92: Ai
}, Qu = {
  [-5]: Gt,
  [-4]: Gt,
  [-3]: Gt,
  33: Eu,
  38: Pi,
  42: yn,
  60: [Ls, mu],
  91: Lu,
  92: [nu, Ai],
  93: Mn,
  95: yn,
  96: Ns
}, Ju = {
  null: [yn, Hu]
}, ec = {
  null: [42, 95]
}, tc = {
  null: []
}, nc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: ec,
  contentInitial: Ku,
  disable: tc,
  document: Zu,
  flow: Xu,
  flowInitial: Gu,
  insideSpan: Ju,
  string: Yu,
  text: Qu
}, Symbol.toStringTag, { value: "Module" }));
function rc(e, t, n) {
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
    attempt: _(A),
    check: _(C),
    consume: T,
    enter: b,
    exit: L,
    interrupt: _(C, {
      interrupt: !0
    })
  }, s = {
    code: null,
    containerState: {},
    defineSkip: v,
    events: [],
    now: g,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: h,
    write: c
  };
  let f = t.tokenize.call(s, u);
  return t.resolveAll && l.push(t), s;
  function c(M) {
    return o = xe(o, M), k(), o[o.length - 1] !== null ? [] : (H(t, 0), s.events = jt(l, s.events, s), s.events);
  }
  function d(M, R) {
    return lc(h(M), R);
  }
  function h(M) {
    return ic(o, M);
  }
  function g() {
    const {
      _bufferIndex: M,
      _index: R,
      line: B,
      column: F,
      offset: P
    } = r;
    return {
      _bufferIndex: M,
      _index: R,
      line: B,
      column: F,
      offset: P
    };
  }
  function v(M) {
    i[M.line] = M.column, w();
  }
  function k() {
    let M;
    for (; r._index < o.length; ) {
      const R = o[r._index];
      if (typeof R == "string")
        for (M = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === M && r._bufferIndex < R.length; )
          y(R.charCodeAt(r._bufferIndex));
      else
        y(R);
    }
  }
  function y(M) {
    f = f(M);
  }
  function T(M) {
    O(M) ? (r.line++, r.column = 1, r.offset += M === -3 ? 2 : 1, w()) : M !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = M;
  }
  function b(M, R) {
    const B = R || {};
    return B.type = M, B.start = g(), s.events.push(["enter", B, s]), a.push(B), B;
  }
  function L(M) {
    const R = a.pop();
    return R.end = g(), s.events.push(["exit", R, s]), R;
  }
  function A(M, R) {
    H(M, R.from);
  }
  function C(M, R) {
    R.restore();
  }
  function _(M, R) {
    return B;
    function B(F, P, K) {
      let J, oe, fe, p;
      return Array.isArray(F) ? (
        /* c8 ignore next 1 */
        ye(F)
      ) : "tokenize" in F ? (
        // Looks like a construct.
        ye([
          /** @type {Construct} */
          F
        ])
      ) : he(F);
      function he(te) {
        return Te;
        function Te(Ce) {
          const De = Ce !== null && te[Ce], Me = Ce !== null && te.null, He = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(De) ? De : De ? [De] : [],
            ...Array.isArray(Me) ? Me : Me ? [Me] : []
          ];
          return ye(He)(Ce);
        }
      }
      function ye(te) {
        return J = te, oe = 0, te.length === 0 ? K : m(te[oe]);
      }
      function m(te) {
        return Te;
        function Te(Ce) {
          return p = V(), fe = te, te.partial || (s.currentConstruct = te), te.name && s.parser.constructs.disable.null.includes(te.name) ? be() : te.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            R ? Object.assign(Object.create(s), R) : s,
            u,
            de,
            be
          )(Ce);
        }
      }
      function de(te) {
        return M(fe, p), P;
      }
      function be(te) {
        return p.restore(), ++oe < J.length ? m(J[oe]) : K;
      }
    }
  }
  function H(M, R) {
    M.resolveAll && !l.includes(M) && l.push(M), M.resolve && ge(s.events, R, s.events.length - R, M.resolve(s.events.slice(R), s)), M.resolveTo && (s.events = M.resolveTo(s.events, s));
  }
  function V() {
    const M = g(), R = s.previous, B = s.currentConstruct, F = s.events.length, P = Array.from(a);
    return {
      from: F,
      restore: K
    };
    function K() {
      r = M, s.previous = R, s.currentConstruct = B, s.events.length = F, a = P, w();
    }
  }
  function w() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function ic(e, t) {
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
function lc(e, t) {
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
function oc(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Ei([nc, ...(e || {}).extensions || []])
    ),
    content: i(ws),
    defined: [],
    document: i(vs),
    flow: i(Nu),
    lazy: {},
    string: i(qu),
    text: i(Uu)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return rc(r, l, a);
    }
  }
}
function ac(e) {
  for (; !Di(e); )
    ;
  return e;
}
const pr = /[\0\t\n\r]/g;
function sc() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const u = [];
    let s, f, c, d, h;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), c = 0, t = "", n && (l.charCodeAt(0) === 65279 && c++, n = void 0); c < l.length; ) {
      if (pr.lastIndex = c, s = pr.exec(l), d = s && s.index !== void 0 ? s.index : l.length, h = l.charCodeAt(d), !s) {
        t = l.slice(c);
        break;
      }
      if (h === 10 && c === d && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), c < d && (u.push(l.slice(c, d)), e += d - c), h) {
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
const uc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function cc(e) {
  return e.replace(uc, fc);
}
function fc(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return Ii(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Dn(n) || e;
}
const Oi = {}.hasOwnProperty;
function hc(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), dc(n)(ac(oc(n).document().write(sc()(e, t, !0))));
}
function dc(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(it),
      autolinkProtocol: V,
      autolinkEmail: V,
      atxHeading: l(tt),
      blockQuote: l(Me),
      characterEscape: V,
      characterReference: V,
      codeFenced: l(He),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(He, o),
      codeText: l(_t, o),
      codeTextData: V,
      data: V,
      codeFlowValue: V,
      definition: l(Bt),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l($t),
      hardBreakEscape: l(nt),
      hardBreakTrailing: l(nt),
      htmlFlow: l(rt, o),
      htmlFlowData: V,
      htmlText: l(rt, o),
      htmlTextData: V,
      image: l(Ct),
      label: o,
      link: l(it),
      listItem: l(W),
      listItemValue: d,
      listOrdered: l(j, c),
      listUnordered: l(j),
      paragraph: l($),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(tt),
      strong: l(G),
      thematicBreak: l(re)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: A,
      autolink: u(),
      autolinkEmail: De,
      autolinkProtocol: Ce,
      blockQuote: u(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: be,
      characterReferenceMarkerNumeric: be,
      characterReferenceValue: te,
      characterReference: Te,
      codeFenced: u(k),
      codeFencedFence: v,
      codeFencedFenceInfo: h,
      codeFencedFenceMeta: g,
      codeFlowValue: w,
      codeIndented: u(y),
      codeText: u(P),
      codeTextData: w,
      data: w,
      definition: u(),
      definitionDestinationString: L,
      definitionLabelString: T,
      definitionTitleString: b,
      emphasis: u(),
      hardBreakEscape: u(R),
      hardBreakTrailing: u(R),
      htmlFlow: u(B),
      htmlFlowData: w,
      htmlText: u(F),
      htmlTextData: w,
      image: u(J),
      label: fe,
      labelText: oe,
      lineEnding: M,
      link: u(K),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: de,
      resourceDestinationString: p,
      resourceTitleString: he,
      resource: ye,
      setextHeading: u(H),
      setextHeadingLineSequence: _,
      setextHeadingText: C,
      strong: u(),
      thematicBreak: u()
    }
  };
  _i(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(S) {
    let I = {
      type: "root",
      children: []
    };
    const z = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: o,
      resume: f,
      data: n
    }, U = [];
    let X = -1;
    for (; ++X < S.length; )
      if (S[X][1].type === "listOrdered" || S[X][1].type === "listUnordered")
        if (S[X][0] === "enter")
          U.push(X);
        else {
          const ke = U.pop();
          X = i(S, ke, X);
        }
    for (X = -1; ++X < S.length; ) {
      const ke = t[S[X][0]];
      Oi.call(ke, S[X][1].type) && ke[S[X][1].type].call(Object.assign({
        sliceSerialize: S[X][2].sliceSerialize
      }, z), S[X][1]);
    }
    if (z.tokenStack.length > 0) {
      const ke = z.tokenStack[z.tokenStack.length - 1];
      (ke[1] || mr).call(z, void 0, ke[0]);
    }
    for (I.position = {
      start: Re(S.length > 0 ? S[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Re(S.length > 0 ? S[S.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, X = -1; ++X < t.transforms.length; )
      I = t.transforms[X](I) || I;
    return I;
  }
  function i(S, I, z) {
    let U = I - 1, X = -1, ke = !1, Oe, Ee, lt, ot;
    for (; ++U <= z; ) {
      const pe = S[U];
      switch (pe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          pe[0] === "enter" ? X++ : X--, ot = void 0;
          break;
        }
        case "lineEndingBlank": {
          pe[0] === "enter" && (Oe && !ot && !X && !lt && (lt = U), ot = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ot = void 0;
      }
      if (!X && pe[0] === "enter" && pe[1].type === "listItemPrefix" || X === -1 && pe[0] === "exit" && (pe[1].type === "listUnordered" || pe[1].type === "listOrdered")) {
        if (Oe) {
          let qe = U;
          for (Ee = void 0; qe--; ) {
            const Ie = S[qe];
            if (Ie[1].type === "lineEnding" || Ie[1].type === "lineEndingBlank") {
              if (Ie[0] === "exit") continue;
              Ee && (S[Ee][1].type = "lineEndingBlank", ke = !0), Ie[1].type = "lineEnding", Ee = qe;
            } else if (!(Ie[1].type === "linePrefix" || Ie[1].type === "blockQuotePrefix" || Ie[1].type === "blockQuotePrefixWhitespace" || Ie[1].type === "blockQuoteMarker" || Ie[1].type === "listItemIndent")) break;
          }
          lt && (!Ee || lt < Ee) && (Oe._spread = !0), Oe.end = Object.assign({}, Ee ? S[Ee][1].start : pe[1].end), S.splice(Ee || U, 0, ["exit", Oe, pe[2]]), U++, z++;
        }
        if (pe[1].type === "listItemPrefix") {
          const qe = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, pe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Oe = qe, S.splice(U, 0, ["enter", qe, pe[2]]), U++, z++, lt = void 0, ot = !0;
        }
      }
    }
    return S[I][1]._spread = ke, z;
  }
  function l(S, I) {
    return z;
    function z(U) {
      a.call(this, S(U), U), I && I.call(this, U);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(S, I, z) {
    this.stack[this.stack.length - 1].children.push(S), this.stack.push(S), this.tokenStack.push([I, z || void 0]), S.position = {
      start: Re(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(S) {
    return I;
    function I(z) {
      S && S.call(this, z), s.call(this, z);
    }
  }
  function s(S, I) {
    const z = this.stack.pop(), U = this.tokenStack.pop();
    if (U)
      U[0].type !== S.type && (I ? I.call(this, S, U[0]) : (U[1] || mr).call(this, S, U[0]));
    else throw new Error("Cannot close `" + S.type + "` (" + ht({
      start: S.start,
      end: S.end
    }) + "): it’s not open");
    z.position.end = Re(S.end);
  }
  function f() {
    return Pn(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(S) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(S), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = S;
  }
  function g() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = S;
  }
  function v() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function k() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function y() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S.replace(/(\r?\n|\r)$/g, "");
  }
  function T(S) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = we(this.sliceSerialize(S)).toLowerCase();
  }
  function b() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function L() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function A(S) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const z = this.sliceSerialize(S).length;
      I.depth = z;
    }
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function _(S) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(S).codePointAt(0) === 61 ? 1 : 2;
  }
  function H() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function V(S) {
    const z = this.stack[this.stack.length - 1].children;
    let U = z[z.length - 1];
    (!U || U.type !== "text") && (U = ae(), U.position = {
      start: Re(S.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(U)), this.stack.push(U);
  }
  function w(S) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(S), I.position.end = Re(S.end);
  }
  function M(S) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = I.children[I.children.length - 1];
      z.position.end = Re(S.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && (V.call(this, S), w.call(this, S));
  }
  function R() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function F() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function P() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function K() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = I, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function J() {
    const S = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      S.type += "Reference", S.referenceType = I, delete S.url, delete S.title;
    } else
      delete S.identifier, delete S.label;
    this.data.referenceType = void 0;
  }
  function oe(S) {
    const I = this.sliceSerialize(S), z = this.stack[this.stack.length - 2];
    z.label = cc(I), z.identifier = we(I).toLowerCase();
  }
  function fe() {
    const S = this.stack[this.stack.length - 1], I = this.resume(), z = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, z.type === "link") {
      const U = S.children;
      z.children = U;
    } else
      z.alt = I;
  }
  function p() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function he() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function ye() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function de(S) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = we(this.sliceSerialize(S)).toLowerCase(), this.data.referenceType = "full";
  }
  function be(S) {
    this.data.characterReferenceType = S.type;
  }
  function te(S) {
    const I = this.sliceSerialize(S), z = this.data.characterReferenceType;
    let U;
    z ? (U = Ii(I, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : U = Dn(I);
    const X = this.stack[this.stack.length - 1];
    X.value += U;
  }
  function Te(S) {
    const I = this.stack.pop();
    I.position.end = Re(S.end);
  }
  function Ce(S) {
    w.call(this, S);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(S);
  }
  function De(S) {
    w.call(this, S);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(S);
  }
  function Me() {
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
  function _t() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Bt() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function $t() {
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
  function nt() {
    return {
      type: "break"
    };
  }
  function rt() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ct() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function it() {
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
  function W(S) {
    return {
      type: "listItem",
      spread: S._spread,
      checked: null,
      children: []
    };
  }
  function $() {
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
function Re(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function _i(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? _i(e, r) : pc(e, r);
  }
}
function pc(e, t) {
  let n;
  for (n in t)
    if (Oi.call(t, n))
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
function mr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + ht({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + ht({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + ht({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function mc(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return hc(r, {
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
function gc(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function xc(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function yc(e, t) {
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
function bc(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function kc(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function wc(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = et(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
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
function Cc(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function vc(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Bi(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Sc(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Bi(e, t);
  const i = { src: et(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function Tc(e, t) {
  const n = { src: et(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Ec(e, t) {
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
function Ic(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Bi(e, t);
  const i = { href: et(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Lc(e, t) {
  const n = { href: et(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ac(e, t, n) {
  const r = e.all(t), i = n ? Pc(n) : $i(t), l = {}, o = [];
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
function Pc(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = $i(n[r]);
  }
  return t;
}
function $i(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Dc(e, t) {
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
function Mc(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Rc(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function jc(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fc(e, t) {
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
    }, a = En(t.children[1]), u = yi(t.children[t.children.length - 1]);
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
function zc(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const c = t.children[u], d = {}, h = o ? o[u] : void 0;
    h && (d.align = h);
    let g = { type: "element", tagName: l, properties: d, children: [] };
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
function Oc(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const gr = 9, xr = 32;
function _c(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      yr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(yr(t.slice(i), i > 0, !1)), l.join("");
}
function yr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === gr || l === xr; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === gr || l === xr; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Bc(e, t) {
  const n = { type: "text", value: _c(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function $c(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Nc = {
  blockquote: gc,
  break: xc,
  code: yc,
  delete: bc,
  emphasis: kc,
  footnoteReference: wc,
  heading: Cc,
  html: vc,
  imageReference: Sc,
  image: Tc,
  inlineCode: Ec,
  linkReference: Ic,
  link: Lc,
  listItem: Ac,
  list: Dc,
  paragraph: Mc,
  // @ts-expect-error: root is different, but hard to type.
  root: Rc,
  strong: jc,
  table: Fc,
  tableCell: Oc,
  tableRow: zc,
  text: Bc,
  thematicBreak: $c,
  toml: St,
  yaml: St,
  definition: St,
  footnoteDefinition: St
};
function St() {
}
const Ni = -1, Ft = 0, pt = 1, Dt = 2, Rn = 3, jn = 4, Fn = 5, zn = 6, Vi = 7, Hi = 8, br = typeof self == "object" ? self : globalThis, Vc = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case Ft:
      case Ni:
        return n(o, i);
      case pt: {
        const a = n([], i);
        for (const u of o)
          a.push(r(u));
        return a;
      }
      case Dt: {
        const a = n({}, i);
        for (const [u, s] of o)
          a[r(u)] = r(s);
        return a;
      }
      case Rn:
        return n(new Date(o), i);
      case jn: {
        const { source: a, flags: u } = o;
        return n(new RegExp(a, u), i);
      }
      case Fn: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of o)
          a.set(r(u), r(s));
        return a;
      }
      case zn: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          a.add(r(u));
        return a;
      }
      case Vi: {
        const { name: a, message: u } = o;
        return n(new br[a](u), i);
      }
      case Hi:
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
    return n(new br[l](o), i);
  };
  return r;
}, kr = (e) => Vc(/* @__PURE__ */ new Map(), e)(0), We = "", { toString: Hc } = {}, { keys: qc } = Object, ct = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Ft, t];
  const n = Hc.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [pt, We];
    case "Object":
      return [Dt, We];
    case "Date":
      return [Rn, We];
    case "RegExp":
      return [jn, We];
    case "Map":
      return [Fn, We];
    case "Set":
      return [zn, We];
    case "DataView":
      return [pt, n];
  }
  return n.includes("Array") ? [pt, n] : n.includes("Error") ? [Vi, n] : [Dt, n];
}, Tt = ([e, t]) => e === Ft && (t === "function" || t === "symbol"), Uc = (e, t, n, r) => {
  const i = (o, a) => {
    const u = r.push(o) - 1;
    return n.set(a, u), u;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, u] = ct(o);
    switch (a) {
      case Ft: {
        let f = o;
        switch (u) {
          case "bigint":
            a = Hi, f = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            f = null;
            break;
          case "undefined":
            return i([Ni], o);
        }
        return i([a, f], o);
      }
      case pt: {
        if (u) {
          let d = o;
          return u === "DataView" ? d = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (d = new Uint8Array(o)), i([u, [...d]], o);
        }
        const f = [], c = i([a, f], o);
        for (const d of o)
          f.push(l(d));
        return c;
      }
      case Dt: {
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
        for (const d of qc(o))
          (e || !Tt(ct(o[d]))) && f.push([l(d), l(o[d])]);
        return c;
      }
      case Rn:
        return i([a, o.toISOString()], o);
      case jn: {
        const { source: f, flags: c } = o;
        return i([a, { source: f, flags: c }], o);
      }
      case Fn: {
        const f = [], c = i([a, f], o);
        for (const [d, h] of o)
          (e || !(Tt(ct(d)) || Tt(ct(h)))) && f.push([l(d), l(h)]);
        return c;
      }
      case zn: {
        const f = [], c = i([a, f], o);
        for (const d of o)
          (e || !Tt(ct(d))) && f.push(l(d));
        return c;
      }
    }
    const { message: s } = o;
    return i([a, { name: u, message: s }], o);
  };
  return l;
}, wr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Uc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, gt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? kr(wr(e, t)) : structuredClone(e)
) : (e, t) => kr(wr(e, t));
function Wc(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Zc(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Kc(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Wc, r = e.options.footnoteBackLabel || Zc, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const f = e.all(s), c = String(s.identifier).toUpperCase(), d = et(c.toLowerCase());
    let h = 0;
    const g = [], v = e.footnoteCounts.get(c);
    for (; v !== void 0 && ++h <= v; ) {
      g.length > 0 && g.push({ type: "text", value: " " });
      let T = typeof n == "string" ? n : n(u, h);
      typeof T == "string" && (T = { type: "text", value: T }), g.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (h > 1 ? "-" + h : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, h),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(T) ? T : [T]
      });
    }
    const k = f[f.length - 1];
    if (k && k.type === "element" && k.tagName === "p") {
      const T = k.children[k.children.length - 1];
      T && T.type === "text" ? T.value += " " : k.children.push({ type: "text", value: " " }), k.children.push(...g);
    } else
      f.push(...g);
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(f, !0)
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
            ...gt(o),
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
const zt = (
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
      return Qc;
    if (typeof e == "function")
      return Ot(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Gc(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        Xc(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return Yc(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Gc(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = zt(e[n]);
  return Ot(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function Xc(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Ot(n);
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
function Yc(e) {
  return Ot(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Ot(e) {
  return t;
  function t(n, r, i) {
    return !!(Jc(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Qc() {
  return !0;
}
function Jc(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const qi = [], ef = !0, bn = !1, tf = "skip";
function Ui(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = zt(i), o = r ? -1 : 1;
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
      let h = qi, g, v, k;
      if ((!t || l(u, s, f[f.length - 1] || void 0)) && (h = nf(n(u, f)), h[0] === bn))
        return h;
      if ("children" in u && u.children) {
        const y = (
          /** @type {UnistParent} */
          u
        );
        if (y.children && h[0] !== tf)
          for (v = (r ? y.children.length : -1) + o, k = f.concat(y); v > -1 && v < y.children.length; ) {
            const T = y.children[v];
            if (g = a(T, v, k)(), g[0] === bn)
              return g;
            v = typeof g[1] == "number" ? g[1] : v + o;
          }
      }
      return h;
    }
  }
}
function nf(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [ef, e] : e == null ? qi : [e];
}
function On(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), Ui(e, l, a, i);
  function a(u, s) {
    const f = s[s.length - 1], c = f ? f.children.indexOf(u) : void 0;
    return o(u, c, f);
  }
}
const kn = {}.hasOwnProperty, rf = {};
function lf(e, t) {
  const n = t || rf, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Nc, ...n.handlers }, a = {
    all: s,
    applyData: af,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: n,
    patch: of,
    wrap: uf
  };
  return On(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, d = String(f.identifier).toUpperCase();
      c.has(d) || c.set(d, f);
    }
  }), a;
  function u(f, c) {
    const d = f.type, h = a.handlers[d];
    if (kn.call(a.handlers, d) && h)
      return h(a, f, c);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in f) {
        const { children: v, ...k } = f, y = gt(k);
        return y.children = a.all(f), y;
      }
      return gt(f);
    }
    return (a.options.unknownHandler || sf)(a, f, c);
  }
  function s(f) {
    const c = [];
    if ("children" in f) {
      const d = f.children;
      let h = -1;
      for (; ++h < d.length; ) {
        const g = a.one(d[h], f);
        if (g) {
          if (h && d[h - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = Cr(g.value)), !Array.isArray(g) && g.type === "element")) {
            const v = g.children[0];
            v && v.type === "text" && (v.value = Cr(v.value));
          }
          Array.isArray(g) ? c.push(...g) : c.push(g);
        }
      }
    }
    return c;
  }
}
function of(e, t) {
  e.position && (t.position = ki(e));
}
function af(e, t) {
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
    n.type === "element" && l && Object.assign(n.properties, gt(l)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function sf(e, t) {
  const n = t.data || {}, r = "value" in t && !(kn.call(n, "hProperties") || kn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function uf(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Cr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function vr(e, t) {
  const n = lf(e, t), r = n.one(e, void 0), i = Kc(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function cf(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      vr(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      vr(n, { file: r, ...e || t })
    );
  };
}
function Sr(e) {
  if (e)
    throw e;
}
var Xt, Tr;
function ff() {
  if (Tr) return Xt;
  Tr = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, l = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var f = e.call(s, "constructor"), c = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !f && !c)
      return !1;
    var d;
    for (d in s)
      ;
    return typeof d > "u" || e.call(s, d);
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
  return Xt = function u() {
    var s, f, c, d, h, g, v = arguments[0], k = 1, y = arguments.length, T = !1;
    for (typeof v == "boolean" && (T = v, v = arguments[1] || {}, k = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); k < y; ++k)
      if (s = arguments[k], s != null)
        for (f in s)
          c = a(v, f), d = a(s, f), v !== d && (T && d && (l(d) || (h = i(d))) ? (h ? (h = !1, g = c && i(c) ? c : []) : g = c && l(c) ? c : {}, o(v, { name: f, newValue: u(T, g, d) })) : typeof d < "u" && o(v, { name: f, newValue: d }));
    return v;
  }, Xt;
}
var hf = ff();
const Yt = /* @__PURE__ */ Wr(hf);
function wn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function df() {
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
      i = s, f ? pf(f, a)(...s) : o(null, ...s);
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
function pf(e, t) {
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
const ve = { basename: mf, dirname: gf, extname: xf, join: yf, sep: "/" };
function mf(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  kt(e);
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
function gf(e) {
  if (kt(e), e.length === 0)
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
function xf(e) {
  kt(e);
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
function yf(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    kt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : bf(n);
}
function bf(e) {
  kt(e);
  const t = e.codePointAt(0) === 47;
  let n = kf(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function kf(e, t) {
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
function kt(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const wf = { cwd: Cf };
function Cf() {
  return "/";
}
function Cn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function vf(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Cn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Sf(e);
}
function Sf(e) {
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
const Qt = (
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
class Wi {
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
    t ? Cn(t) ? n = { path: t } : typeof t == "string" || Tf(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : wf.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Qt.length; ) {
      const l = Qt[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      Qt.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? ve.basename(this.path) : void 0;
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
    en(t, "basename"), Jt(t, "basename"), this.path = ve.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? ve.dirname(this.path) : void 0;
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
    Er(this.basename, "dirname"), this.path = ve.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? ve.extname(this.path) : void 0;
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
    if (Jt(t, "extname"), Er(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ve.join(this.dirname, this.stem + (t || ""));
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
    Cn(t) && (t = vf(t)), en(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? ve.basename(this.path, this.extname) : void 0;
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
    en(t, "stem"), Jt(t, "stem"), this.path = ve.join(this.dirname || "", t + (this.extname || ""));
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
function Jt(e, t) {
  if (e && e.includes(ve.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + ve.sep + "`"
    );
}
function en(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Er(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Tf(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Ef = (
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
), If = {}.hasOwnProperty;
class _n extends Ef {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = df();
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
      new _n()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Yt(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (rn("data", this.frozen), this.namespace[t] = n, this) : If.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (rn("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Et(t), r = this.parser || this.Parser;
    return tn("parse", r), r(String(n), n);
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
    return this.freeze(), tn("process", this.parser || this.Parser), nn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = Et(t), u = (
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
        ), g = r.stringify(h, d);
        Pf(g) ? d.value = g : d.result = g, s(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          d
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
    return this.freeze(), tn("processSync", this.parser || this.Parser), nn("processSync", this.compiler || this.Compiler), this.process(t, i), Lr("processSync", "process", n), r;
    function i(l, o) {
      n = !0, Sr(l), r = o;
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
    Ir(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const u = Et(n);
      i.run(t, u, s);
      function s(f, c, d) {
        const h = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        f ? a(f) : o ? o(h) : r(void 0, h, d);
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
    return this.run(t, n, l), Lr("runSync", "run", r), i;
    function l(o, a) {
      Sr(o), i = a, r = !0;
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
    const r = Et(n), i = this.compiler || this.Compiler;
    return nn("stringify", i), Ir(t), i(t, r);
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
    if (rn("use", this.frozen), t != null) if (typeof t == "function")
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
      a(s.plugins), s.settings && (i.settings = Yt(!0, i.settings, s.settings));
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
      let c = -1, d = -1;
      for (; ++c < r.length; )
        if (r[c][0] === s) {
          d = c;
          break;
        }
      if (d === -1)
        r.push([s, ...f]);
      else if (f.length > 0) {
        let [h, ...g] = f;
        const v = r[d][1];
        wn(v) && wn(h) && (h = Yt(!0, v, h)), r[d] = [s, h, ...g];
      }
    }
  }
}
const Lf = new _n().freeze();
function tn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function nn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function rn(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Ir(e) {
  if (!wn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Lr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Et(e) {
  return Af(e) ? e : new Wi(e);
}
function Af(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Pf(e) {
  return typeof e == "string" || Df(e);
}
function Df(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Mf = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Ar = [], Pr = { allowDangerousHtml: !0 }, Rf = /^(https?|ircs?|mailto|xmpp)$/i, jf = [
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
function Ff(e) {
  const t = zf(e), n = Of(e);
  return _f(t.runSync(t.parse(n), n), e);
}
function zf(e) {
  const t = e.rehypePlugins || Ar, n = e.remarkPlugins || Ar, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Pr } : Pr;
  return Lf().use(mc).use(n).use(cf, r).use(t);
}
function Of(e) {
  const t = e.children || "", n = new Wi();
  return typeof t == "string" && (n.value = t), n;
}
function _f(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || Bf;
  for (const f of jf)
    Object.hasOwn(t, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + Mf + f.id, void 0);
  return On(e, s), Qa(e, {
    Fragment: x.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: x.jsx,
    jsxs: x.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function s(f, c, d) {
    if (f.type === "raw" && d && typeof c == "number")
      return o ? d.children.splice(c, 1) : d.children[c] = { type: "text", value: f.value }, c;
    if (f.type === "element") {
      let h;
      for (h in Zt)
        if (Object.hasOwn(Zt, h) && Object.hasOwn(f.properties, h)) {
          const g = f.properties[h], v = Zt[h];
          (v === null || v.includes(f.tagName)) && (f.properties[h] = u(String(g || ""), h, f));
        }
    }
    if (f.type === "element") {
      let h = n ? !n.includes(f.tagName) : l ? l.includes(f.tagName) : !1;
      if (!h && r && typeof c == "number" && (h = !r(f, c, d)), h && d && typeof c == "number")
        return a && f.children ? d.children.splice(c, 1, ...f.children) : d.children.splice(c, 1), c;
    }
  }
}
function Bf(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Rf.test(e.slice(0, t)) ? e : ""
  );
}
const _e = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], Dr = {
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
      ..._e,
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
    dl: [..._e],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [..._e, "longDesc", "src"],
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
    ol: [..._e, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [..._e],
    table: [..._e],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [..._e, ["className", "contains-task-list"]],
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
function $f(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...Dr, ...t } : Dr,
    stack: []
  }, i = Zi(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function Zi(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Nf(e, n);
      case "doctype":
        return Vf(e, n);
      case "element":
        return Hf(e, n);
      case "root":
        return qf(e, n);
      case "text":
        return Uf(e, n);
    }
  }
}
function Nf(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return wt(l, t), l;
  }
}
function Vf(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return wt(n, t), n;
  }
}
function Hf(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    Ki(e, t.children)
  ), i = Wf(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && je.call(e.schema.ancestors, n))) {
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
  return wt(o, t), o;
}
function qf(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    Ki(e, t.children)
  ) };
  return wt(r, t), r;
}
function Uf(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return wt(r, t), r;
}
function Ki(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = Zi(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function Wf(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && je.call(r, n) ? r[n] : void 0, o = r && je.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), u = {};
  let s;
  for (s in a)
    if (je.call(a, s)) {
      const f = a[s];
      let c = Mr(
        e,
        Rr(l, s),
        s,
        f
      );
      c == null && (c = Mr(e, Rr(o, s), s, f)), c != null && (u[s] = c);
    }
  if (i && je.call(i, n)) {
    const f = i[n];
    for (s in f)
      je.call(f, s) && !je.call(u, s) && (u[s] = f[s]);
  }
  return u;
}
function Mr(e, t, n, r) {
  return t ? Array.isArray(r) ? Zf(e, t, n, r) : Gi(e, t, n, r) : void 0;
}
function Zf(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = Gi(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function Gi(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && Kf(e, n, r)) {
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
function Kf(e, t, n) {
  const r = e.schema.protocols && je.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
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
function wt(e, t) {
  const n = ki(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = gt(t.data)), n && (e.position = n);
}
function Rr(e, t) {
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
function Gf(e) {
  return function(t) {
    return (
      /** @type {Root} */
      $f(t, e)
    );
  };
}
function jr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function Xf(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Yf(e, t, n) {
  const i = zt((n || {}).ignore || []), l = Qf(t);
  let o = -1;
  for (; ++o < l.length; )
    Ui(e, "text", a);
  function a(s, f) {
    let c = -1, d;
    for (; ++c < f.length; ) {
      const h = f[c], g = d ? d.children : void 0;
      if (i(
        h,
        g ? g.indexOf(h) : void 0,
        d
      ))
        return;
      d = h;
    }
    if (d)
      return u(s, f);
  }
  function u(s, f) {
    const c = f[f.length - 1], d = l[o][0], h = l[o][1];
    let g = 0;
    const k = c.children.indexOf(s);
    let y = !1, T = [];
    d.lastIndex = 0;
    let b = d.exec(s.value);
    for (; b; ) {
      const L = b.index, A = {
        index: b.index,
        input: b.input,
        stack: [...f, s]
      };
      let C = h(...b, A);
      if (typeof C == "string" && (C = C.length > 0 ? { type: "text", value: C } : void 0), C === !1 ? d.lastIndex = L + 1 : (g !== L && T.push({
        type: "text",
        value: s.value.slice(g, L)
      }), Array.isArray(C) ? T.push(...C) : C && T.push(C), g = L + b[0].length, y = !0), !d.global)
        break;
      b = d.exec(s.value);
    }
    return y ? (g < s.value.length && T.push({ type: "text", value: s.value.slice(g) }), c.children.splice(k, 1, ...T)) : T = [s], k + T.length;
  }
}
function Qf(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([Jf(i[0]), eh(i[1])]);
  }
  return t;
}
function Jf(e) {
  return typeof e == "string" ? new RegExp(Xf(e), "g") : e;
}
function eh(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const ln = "phrasing", on = ["autolink", "link", "image", "label"];
function th() {
  return {
    transforms: [sh],
    enter: {
      literalAutolink: rh,
      literalAutolinkEmail: an,
      literalAutolinkHttp: an,
      literalAutolinkWww: an
    },
    exit: {
      literalAutolink: ah,
      literalAutolinkEmail: oh,
      literalAutolinkHttp: ih,
      literalAutolinkWww: lh
    }
  };
}
function nh() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: ln,
        notInConstruct: on
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: ln,
        notInConstruct: on
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: ln,
        notInConstruct: on
      }
    ]
  };
}
function rh(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function an(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function ih(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function lh(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function oh(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function ah(e) {
  this.exit(e);
}
function sh(e) {
  Yf(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, uh],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), ch]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function uh(e, t, n, r, i) {
  let l = "";
  if (!Xi(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !fh(n)))
    return !1;
  const o = hh(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function ch(e, t, n, r) {
  return (
    // Not an expected previous character.
    !Xi(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function fh(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function hh(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = jr(e, "(");
  let l = jr(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function Xi(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ne(n) || Rt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
Yi.peek = wh;
function dh() {
  this.buffer();
}
function ph(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function mh() {
  this.buffer();
}
function gh(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function xh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = we(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function yh(e) {
  this.exit(e);
}
function bh(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = we(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function kh(e) {
  this.exit(e);
}
function wh() {
  return "[";
}
function Yi(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function Ch() {
  return {
    enter: {
      gfmFootnoteCallString: dh,
      gfmFootnoteCall: ph,
      gfmFootnoteDefinitionLabelString: mh,
      gfmFootnoteDefinition: gh
    },
    exit: {
      gfmFootnoteCallString: xh,
      gfmFootnoteCall: yh,
      gfmFootnoteDefinitionLabelString: bh,
      gfmFootnoteDefinition: kh
    }
  };
}
function vh(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: Yi },
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
        t ? Qi : Sh
      )
    )), s(), u;
  }
}
function Sh(e, t, n) {
  return t === 0 ? e : Qi(e, t, n);
}
function Qi(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Th = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Ji.peek = Ph;
function Eh() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Lh },
    exit: { strikethrough: Ah }
  };
}
function Ih() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Th
      }
    ],
    handlers: { delete: Ji }
  };
}
function Lh(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function Ah(e) {
  this.exit(e);
}
function Ji(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function Ph() {
  return "~";
}
function Dh(e) {
  return e.length;
}
function Mh(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Dh, l = [], o = [], a = [], u = [];
  let s = 0, f = -1;
  for (; ++f < e.length; ) {
    const v = [], k = [];
    let y = -1;
    for (e[f].length > s && (s = e[f].length); ++y < e[f].length; ) {
      const T = Rh(e[f][y]);
      if (n.alignDelimiters !== !1) {
        const b = i(T);
        k[y] = b, (u[y] === void 0 || b > u[y]) && (u[y] = b);
      }
      v.push(T);
    }
    o[f] = v, a[f] = k;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < s; )
      l[c] = Fr(r[c]);
  else {
    const v = Fr(r);
    for (; ++c < s; )
      l[c] = v;
  }
  c = -1;
  const d = [], h = [];
  for (; ++c < s; ) {
    const v = l[c];
    let k = "", y = "";
    v === 99 ? (k = ":", y = ":") : v === 108 ? k = ":" : v === 114 && (y = ":");
    let T = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      u[c] - k.length - y.length
    );
    const b = k + "-".repeat(T) + y;
    n.alignDelimiters !== !1 && (T = k.length + T + y.length, T > u[c] && (u[c] = T), h[c] = T), d[c] = b;
  }
  o.splice(1, 0, d), a.splice(1, 0, h), f = -1;
  const g = [];
  for (; ++f < o.length; ) {
    const v = o[f], k = a[f];
    c = -1;
    const y = [];
    for (; ++c < s; ) {
      const T = v[c] || "";
      let b = "", L = "";
      if (n.alignDelimiters !== !1) {
        const A = u[c] - (k[c] || 0), C = l[c];
        C === 114 ? b = " ".repeat(A) : C === 99 ? A % 2 ? (b = " ".repeat(A / 2 + 0.5), L = " ".repeat(A / 2 - 0.5)) : (b = " ".repeat(A / 2), L = b) : L = " ".repeat(A);
      }
      n.delimiterStart !== !1 && !c && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && T === "") && (n.delimiterStart !== !1 || c) && y.push(" "), n.alignDelimiters !== !1 && y.push(b), y.push(T), n.alignDelimiters !== !1 && y.push(L), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && y.push("|");
    }
    g.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return g.join(`
`);
}
function Rh(e) {
  return e == null ? "" : String(e);
}
function Fr(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function jh(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    Fh
  );
  return i(), o;
}
function Fh(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function zh(e, t) {
  return zr(e, t.inConstruct, !0) && !zr(e, t.notInConstruct, !1);
}
function zr(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Or(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && zh(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Oh(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function _h(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Bh(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function $h(e, t, n, r) {
  const i = Bh(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (_h(e, n)) {
    const c = n.enter("codeIndented"), d = n.indentLines(l, Nh);
    return c(), d;
  }
  const a = n.createTracker(r), u = i.repeat(Math.max(Oh(l, i) + 1, 3)), s = n.enter("codeFenced");
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
function Nh(e, t, n) {
  return (n ? "" : "    ") + e;
}
function Bn(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Vh(e, t, n, r) {
  const i = Bn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
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
function Hh(e) {
  const t = e.options.emphasis || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return t;
}
function xt(e) {
  return "&#x" + e.toString(16).toUpperCase() + ";";
}
function Mt(e, t, n) {
  const r = Qe(e), i = Qe(t);
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
el.peek = qh;
function el(e, t, n, r) {
  const i = Hh(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), f = Mt(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = xt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), d = Mt(r.after.charCodeAt(0), c, i);
  d.inside && (u = u.slice(0, -1) + xt(c));
  const h = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: f.outside
  }, a + u + h;
}
function qh(e, t, n) {
  return n.options.emphasis || "*";
}
function Uh(e, t) {
  let n = !1;
  return On(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, bn;
  }), !!((!e.depth || e.depth < 3) && Pn(e) && (t.options.setext || n));
}
function Wh(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (Uh(e, n)) {
    const f = n.enter("headingSetext"), c = n.enter("phrasing"), d = n.containerPhrasing(e, {
      ...l.current(),
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
  const o = "#".repeat(i), a = n.enter("headingAtx"), u = n.enter("phrasing");
  l.move(o + " ");
  let s = n.containerPhrasing(e, {
    before: "# ",
    after: `
`,
    ...l.current()
  });
  return /^[\t ]/.test(s) && (s = xt(s.charCodeAt(0)) + s.slice(1)), s = s ? o + " " + s : o, n.options.closeAtx && (s += " " + o), u(), a(), s;
}
tl.peek = Zh;
function tl(e) {
  return e.value || "";
}
function Zh() {
  return "<";
}
nl.peek = Kh;
function nl(e, t, n, r) {
  const i = Bn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
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
function Kh() {
  return "!";
}
rl.peek = Gh;
function rl(e, t, n, r) {
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
function Gh() {
  return "!";
}
il.peek = Xh;
function il(e, t, n) {
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
function Xh() {
  return "`";
}
function ll(e, t) {
  const n = Pn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
ol.peek = Yh;
function ol(e, t, n, r) {
  const i = Bn(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, u;
  if (ll(e, n)) {
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
function Yh(e, t, n) {
  return ll(e, n) ? "<" : "[";
}
al.peek = Qh;
function al(e, t, n, r) {
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
function Qh() {
  return "[";
}
function $n(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function Jh(e) {
  const t = $n(e), n = e.options.bulletOther;
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
function ed(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function sl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function td(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? ed(n) : $n(n);
  const a = e.ordered ? o === "." ? ")" : "." : Jh(n);
  let u = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (u = !0), sl(n) === o && f
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
  u && (o = a), n.bulletCurrent = o;
  const s = n.containerFlow(e, r);
  return n.bulletLastUsed = o, n.bulletCurrent = l, i(), s;
}
function nd(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function rd(e, t, n, r) {
  const i = nd(n);
  let l = n.bulletCurrent || $n(n);
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
  function f(c, d, h) {
    return d ? (h ? "" : " ".repeat(o)) + c : (h ? l : l + " ".repeat(o - l.length)) + c;
  }
}
function id(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const ld = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  zt([
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
function od(e, t, n, r) {
  return (e.children.some(function(o) {
    return ld(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function ad(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
ul.peek = sd;
function ul(e, t, n, r) {
  const i = ad(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), f = Mt(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = xt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), d = Mt(r.after.charCodeAt(0), c, i);
  d.inside && (u = u.slice(0, -1) + xt(c));
  const h = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: d.outside,
    before: f.outside
  }, a + u + h;
}
function sd(e, t, n) {
  return n.options.strong || "*";
}
function ud(e, t, n, r) {
  return n.safe(e.value, r);
}
function cd(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function fd(e, t, n) {
  const r = (sl(n) + (n.options.ruleSpaces ? " " : "")).repeat(cd(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const cl = {
  blockquote: jh,
  break: Or,
  code: $h,
  definition: Vh,
  emphasis: el,
  hardBreak: Or,
  heading: Wh,
  html: tl,
  image: nl,
  imageReference: rl,
  inlineCode: il,
  link: ol,
  linkReference: al,
  list: td,
  listItem: rd,
  paragraph: id,
  root: od,
  strong: ul,
  text: ud,
  thematicBreak: fd
};
function hd() {
  return {
    enter: {
      table: dd,
      tableData: _r,
      tableHeader: _r,
      tableRow: md
    },
    exit: {
      codeText: gd,
      table: pd,
      tableData: sn,
      tableHeader: sn,
      tableRow: sn
    }
  };
}
function dd(e) {
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
function pd(e) {
  this.exit(e), this.data.inTable = void 0;
}
function md(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function sn(e) {
  this.exit(e);
}
function _r(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function gd(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, xd));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function xd(e, t) {
  return t === "|" ? t : e;
}
function yd(e) {
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
      inlineCode: d,
      table: o,
      tableCell: u,
      tableRow: a
    }
  };
  function o(h, g, v, k) {
    return s(f(h, v, k), h.align);
  }
  function a(h, g, v, k) {
    const y = c(h, v, k), T = s([y]);
    return T.slice(0, T.indexOf(`
`));
  }
  function u(h, g, v, k) {
    const y = v.enter("tableCell"), T = v.enter("phrasing"), b = v.containerPhrasing(h, {
      ...k,
      before: l,
      after: l
    });
    return T(), y(), b;
  }
  function s(h, g) {
    return Mh(h, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(h, g, v) {
    const k = h.children;
    let y = -1;
    const T = [], b = g.enter("table");
    for (; ++y < k.length; )
      T[y] = c(k[y], g, v);
    return b(), T;
  }
  function c(h, g, v) {
    const k = h.children;
    let y = -1;
    const T = [], b = g.enter("tableRow");
    for (; ++y < k.length; )
      T[y] = u(k[y], h, g, v);
    return b(), T;
  }
  function d(h, g, v) {
    let k = cl.inlineCode(h, g, v);
    return v.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function bd() {
  return {
    exit: {
      taskListCheckValueChecked: Br,
      taskListCheckValueUnchecked: Br,
      paragraph: wd
    }
  };
}
function kd() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Cd }
  };
}
function Br(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function wd(e) {
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
function Cd(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let u = cl.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(f) {
    return f + o;
  }
}
function vd() {
  return [
    th(),
    Ch(),
    Eh(),
    hd(),
    bd()
  ];
}
function Sd(e) {
  return {
    extensions: [
      nh(),
      vh(e),
      Ih(),
      yd(e),
      kd()
    ]
  };
}
const Td = {
  tokenize: Dd,
  partial: !0
}, fl = {
  tokenize: Md,
  partial: !0
}, hl = {
  tokenize: Rd,
  partial: !0
}, dl = {
  tokenize: jd,
  partial: !0
}, Ed = {
  tokenize: Fd,
  partial: !0
}, pl = {
  name: "wwwAutolink",
  tokenize: Ad,
  previous: gl
}, ml = {
  name: "protocolAutolink",
  tokenize: Pd,
  previous: xl
}, Pe = {
  name: "emailAutolink",
  tokenize: Ld,
  previous: yl
}, Se = {};
function Id() {
  return {
    text: Se
  };
}
let Be = 48;
for (; Be < 123; )
  Se[Be] = Pe, Be++, Be === 58 ? Be = 65 : Be === 91 && (Be = 97);
Se[43] = Pe;
Se[45] = Pe;
Se[46] = Pe;
Se[95] = Pe;
Se[72] = [Pe, ml];
Se[104] = [Pe, ml];
Se[87] = [Pe, pl];
Se[119] = [Pe, pl];
function Ld(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(c) {
    return !vn(c) || !yl.call(r, r.previous) || Nn(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return vn(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), u) : n(c);
  }
  function u(c) {
    return c === 46 ? e.check(Ed, f, s)(c) : c === 45 || c === 95 || ie(c) ? (l = !0, e.consume(c), u) : f(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function f(c) {
    return l && i && se(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function Ad(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !gl.call(r, r.previous) || Nn(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Td, e.attempt(fl, e.attempt(hl, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function Pd(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(c) {
    return (c === 72 || c === 104) && xl.call(r, r.previous) && !Nn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
  }
  function a(c) {
    if (se(c) && i.length < 5)
      return i += String.fromCodePoint(c), e.consume(c), a;
    if (c === 58) {
      const d = i.toLowerCase();
      if (d === "http" || d === "https")
        return e.consume(c), u;
    }
    return n(c);
  }
  function u(c) {
    return c === 47 ? (e.consume(c), l ? s : (l = !0, u)) : n(c);
  }
  function s(c) {
    return c === null || Pt(c) || Y(c) || Ne(c) || Rt(c) ? n(c) : e.attempt(fl, e.attempt(hl, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Dd(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function Md(e, t, n) {
  let r, i, l;
  return o;
  function o(s) {
    return s === 46 || s === 95 ? e.check(dl, u, a)(s) : s === null || Y(s) || Ne(s) || s !== 45 && Rt(s) ? u(s) : (l = !0, e.consume(s), o);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), o;
  }
  function u(s) {
    return i || r || !l ? n(s) : t(s);
  }
}
function Rd(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(dl, t, l)(o) : o === null || Y(o) || Ne(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function jd(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Y(a) || Ne(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Y(a) || Ne(a) ? t(a) : r(a);
  }
  function l(a) {
    return se(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : se(a) ? (e.consume(a), o) : n(a);
  }
}
function Fd(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return ie(l) ? n(l) : t(l);
  }
}
function gl(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Y(e);
}
function xl(e) {
  return !se(e);
}
function yl(e) {
  return !(e === 47 || vn(e));
}
function vn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ie(e);
}
function Nn(e) {
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
const zd = {
  tokenize: qd,
  partial: !0
};
function Od() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Nd,
        continuation: {
          tokenize: Vd
        },
        exit: Hd
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: $d
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: _d,
        resolveTo: Bd
      }
    }
  };
}
function _d(e, t, n) {
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
    const s = we(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return s.codePointAt(0) !== 94 || !l.includes(s.slice(1)) ? n(u) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(u), e.exit("gfmFootnoteCallLabelMarker"), t(u));
  }
}
function Bd(e, t) {
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
function $d(e, t, n) {
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
      const d = e.exit("gfmFootnoteCallString");
      return i.includes(we(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Y(c) || (o = !0), l++, e.consume(c), c === 92 ? f : s;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, s) : s(c);
  }
}
function Nd(e, t, n) {
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
      g === null || g === 91 || Y(g)
    )
      return n(g);
    if (g === 93) {
      e.exit("chunkString");
      const v = e.exit("gfmFootnoteDefinitionLabelString");
      return l = we(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
    }
    return Y(g) || (a = !0), o++, e.consume(g), g === 92 ? c : f;
  }
  function c(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), o++, f) : f(g);
  }
  function d(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(l) || i.push(l), Z(e, h, "gfmFootnoteDefinitionWhitespace")) : n(g);
  }
  function h(g) {
    return t(g);
  }
}
function Vd(e, t, n) {
  return e.check(bt, t, e.attempt(zd, t, n));
}
function Hd(e) {
  e.exit("gfmFootnoteDefinition");
}
function qd(e, t, n) {
  const r = this;
  return Z(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l);
  }
}
function Ud(e) {
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
            }, d = [["enter", f, a], ["enter", o[s][1], a], ["exit", o[s][1], a], ["enter", c, a]], h = a.parser.constructs.insideSpan.null;
            h && ge(d, d.length, 0, jt(h, o.slice(s + 1, u), a)), ge(d, d.length, 0, [["exit", c, a], ["enter", o[u][1], a], ["exit", o[u][1], a], ["exit", f, a]]), ge(o, s - 1, u - s + 3, d), u = s + d.length - 2;
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
    return d;
    function d(g) {
      return s === 126 && f[f.length - 1][1].type !== "characterEscape" ? u(g) : (o.enter("strikethroughSequenceTemporary"), h(g));
    }
    function h(g) {
      const v = Qe(s);
      if (g === 126)
        return c > 1 ? u(g) : (o.consume(g), c++, h);
      if (c < 2 && !n) return u(g);
      const k = o.exit("strikethroughSequenceTemporary"), y = Qe(g);
      return k._open = !y || y === 2 && !!v, k._close = !v || v === 2 && !!y, a(g);
    }
  }
}
class Wd {
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
    Zd(this, t, n, r);
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
function Zd(e, t, n, r) {
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
function Kd(e, t) {
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
function Gd() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Xd,
        resolveAll: Yd
      }
    }
  };
}
function Xd(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(w) {
    let M = r.events.length - 1;
    for (; M > -1; ) {
      const F = r.events[M][1].type;
      if (F === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      F === "linePrefix") M--;
      else break;
    }
    const R = M > -1 ? r.events[M][1].type : null, B = R === "tableHead" || R === "tableRow" ? C : u;
    return B === C && r.parser.lazy[r.now().line] ? n(w) : B(w);
  }
  function u(w) {
    return e.enter("tableHead"), e.enter("tableRow"), s(w);
  }
  function s(w) {
    return w === 124 || (o = !0, l += 1), f(w);
  }
  function f(w) {
    return w === null ? n(w) : O(w) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), h) : n(w) : q(w) ? Z(e, f, "whitespace")(w) : (l += 1, o && (o = !1, i += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), o = !0, f) : (e.enter("data"), c(w)));
  }
  function c(w) {
    return w === null || w === 124 || Y(w) ? (e.exit("data"), f(w)) : (e.consume(w), w === 92 ? d : c);
  }
  function d(w) {
    return w === 92 || w === 124 ? (e.consume(w), c) : c(w);
  }
  function h(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), o = !1, q(w) ? Z(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : g(w));
  }
  function g(w) {
    return w === 45 || w === 58 ? k(w) : w === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), v) : A(w);
  }
  function v(w) {
    return q(w) ? Z(e, k, "whitespace")(w) : k(w);
  }
  function k(w) {
    return w === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), y) : w === 45 ? (l += 1, y(w)) : w === null || O(w) ? L(w) : A(w);
  }
  function y(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), T(w)) : A(w);
  }
  function T(w) {
    return w === 45 ? (e.consume(w), T) : w === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), b) : (e.exit("tableDelimiterFiller"), b(w));
  }
  function b(w) {
    return q(w) ? Z(e, L, "whitespace")(w) : L(w);
  }
  function L(w) {
    return w === 124 ? g(w) : w === null || O(w) ? !o || i !== l ? A(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : A(w);
  }
  function A(w) {
    return n(w);
  }
  function C(w) {
    return e.enter("tableRow"), _(w);
  }
  function _(w) {
    return w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), _) : w === null || O(w) ? (e.exit("tableRow"), t(w)) : q(w) ? Z(e, _, "whitespace")(w) : (e.enter("data"), H(w));
  }
  function H(w) {
    return w === null || w === 124 || Y(w) ? (e.exit("data"), _(w)) : (e.consume(w), w === 92 ? V : H);
  }
  function V(w) {
    return w === 92 || w === 124 ? (e.consume(w), H) : H(w);
  }
}
function Yd(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, u = 0, s, f, c;
  const d = new Wd();
  for (; ++n < e.length; ) {
    const h = e[n], g = h[1];
    h[0] === "enter" ? g.type === "tableHead" ? (a = !1, u !== 0 && ($r(d, t, u, s, f), f = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, d.add(n, 0, [["enter", s, t]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, c = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, d.add(n, 0, [["enter", f, t]])), i = g.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], c = It(d, t, l, i, void 0, c), l = [0, 0, 0, 0]), o[2] = n)) : g.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], c = It(d, t, l, i, void 0, c)), l = o, o = [l[1], n, 0, 0])) : g.type === "tableHead" ? (a = !0, u = n) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (u = n, l[1] !== 0 ? (o[0] = o[1], c = It(d, t, l, i, n, c)) : o[1] !== 0 && (c = It(d, t, o, i, n, c)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (u !== 0 && $r(d, t, u, s, f), d.consume(t.events), n = -1; ++n < t.events.length; ) {
    const h = t.events[n];
    h[0] === "enter" && h[1].type === "table" && (h[1]._align = Kd(t.events, n));
  }
  return e;
}
function It(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, Ze(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const u = Ze(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const s = Ze(t.events, n[2]), f = Ze(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const d = t.events[n[2]], h = t.events[n[3]];
      if (d[1].end = Object.assign({}, h[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
        const g = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(g, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, Ze(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function $r(e, t, n, r, i) {
  const l = [], o = Ze(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function Ze(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Qd = {
  name: "tasklistCheck",
  tokenize: ep
};
function Jd() {
  return {
    text: {
      91: Qd
    }
  };
}
function ep(e, t, n) {
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
      tokenize: tp
    }, t, n)(u) : n(u);
  }
}
function tp(e, t, n) {
  return Z(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function np(e) {
  return Ei([
    Id(),
    Od(),
    Ud(e),
    Gd(),
    Jd()
  ]);
}
const rp = {};
function ip(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || rp, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(np(n)), l.push(vd()), o.push(Sd(n));
}
const lp = ne.div`
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
`, op = ({ content: e, className: t }) => /* @__PURE__ */ x.jsx(lp, { className: t, children: /* @__PURE__ */ x.jsx(Ff, { remarkPlugins: [ip], rehypePlugins: [Gf], children: e }) }), ap = ne.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, sp = ({ name: e, timestamp: t }) => /* @__PURE__ */ x.jsxs(Le, { children: [
  /* @__PURE__ */ x.jsx(Zr, { src: to }),
  /* @__PURE__ */ x.jsx(Ye, { children: e }),
  /* @__PURE__ */ x.jsx(ap, { children: new Date(t).toLocaleString() })
] }), up = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", cp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var fp = Object.defineProperty, hp = (e, t) => fp(e, "name", { value: t, configurable: !0 });
const dp = hp((e) => x.jsx(Ae, { light: cp, dark: up, ...e }), "CheckIcon"), pp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", mp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var gp = Object.defineProperty, xp = (e, t) => gp(e, "name", { value: t, configurable: !0 });
const yp = xp((e) => x.jsx(Ae, { light: mp, dark: pp, ...e }), "CopyIcon"), bp = ({
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
), kp = ({
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
), wp = ({
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
), Cp = ({
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
), vp = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ x.jsxs(
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
), Sp = ({
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
), Tp = ({
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
), Ep = ({
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
), bl = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, un = ne.span`
    font-size: 10px;
    color: ${({ theme: e }) => bo(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, Ip = ne(Le)`
    margin-left: auto;
`, Lp = ne.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Ap = ({
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
  return /* @__PURE__ */ x.jsxs(Le, { alignItems: "center", children: [
    /* @__PURE__ */ x.jsxs(Le, { gap: 4, children: [
      /* @__PURE__ */ x.jsx(Tp, {}),
      e && /* @__PURE__ */ x.jsx(un, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ x.jsx(un, { children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ x.jsxs(Le, { gap: 4, children: [
      /* @__PURE__ */ x.jsx(wp, {}),
      r && /* @__PURE__ */ x.jsx(un, { children: bl(r) })
    ] }),
    /* @__PURE__ */ x.jsxs(Ip, { children: [
      /* @__PURE__ */ x.jsx(Ol, { icon: l ? /* @__PURE__ */ x.jsx(dp, {}) : /* @__PURE__ */ x.jsx(yp, {}), onPress: u }),
      l && /* @__PURE__ */ x.jsx(Lp, { children: "Copied to clipboard" })
    ] })
  ] });
}, Pp = () => /* @__PURE__ */ x.jsxs(Jr, { children: [
  /* @__PURE__ */ x.jsx(Ye, { children: "Test your agent" }),
  /* @__PURE__ */ x.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), Dp = ne.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, Mp = ne.div`
    padding-bottom: 8px;
`, Rp = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = D.useState(n), l = D.useId();
  return /* @__PURE__ */ x.jsxs("div", { children: [
    /* @__PURE__ */ x.jsxs(Dp, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ x.jsx(bp, {}) : /* @__PURE__ */ x.jsx(kp, {}),
      e
    ] }),
    r && /* @__PURE__ */ x.jsx(Mp, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, jp = (e) => "kbDisplayName" in e, Fp = (e) => "serverName" in e, zp = ne.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Op = ne.div`
    font-size: 16px;
`, _p = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return jp(n) ? (i = /* @__PURE__ */ x.jsx(Cp, {}), r = n.displayName) : Fp(n) ? (i = /* @__PURE__ */ x.jsx(vp, {}), r = n.toolName) : (i = /* @__PURE__ */ x.jsx(Ep, {}), r = n.displayName), /* @__PURE__ */ x.jsxs(Le, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ x.jsx(Op, { children: i }),
      /* @__PURE__ */ x.jsxs("div", { children: [
        /* @__PURE__ */ x.jsx("div", { children: r }),
        /* @__PURE__ */ x.jsx(zp, { children: bl(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ x.jsx(Le, { marginTop: 8, children: /* @__PURE__ */ x.jsx(Rp, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, Bp = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && navigator.clipboard.writeText(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ x.jsxs(ei, { children: [
    /* @__PURE__ */ x.jsx(Ye, { children: "Test execution failed" }),
    /* @__PURE__ */ x.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ x.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ x.jsx(Kr, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ x.jsx(Sa, {}) : t ? /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(sp, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ x.jsx(op, { content: t.responseText }),
    /* @__PURE__ */ x.jsx(
      Ap,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ x.jsx(_p, { tools: t.tools })
  ] }) : /* @__PURE__ */ x.jsx(Pp, {});
  return /* @__PURE__ */ x.jsx($e, { label: "Output", children: o() });
}, Nr = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], $p = ne.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, Np = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ x.jsx(Zr, { src: t, alt: o }) : t;
  return /* @__PURE__ */ x.jsx(_l, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ x.jsxs($p, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, Vp = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ x.jsxs(Le, { children: [
  e && /* @__PURE__ */ x.jsx(Hn, { children: /* @__PURE__ */ x.jsx(Bl, { children: /* @__PURE__ */ x.jsx(
    $l,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ x.jsx(Hn, { fullWidth: !0, children: /* @__PURE__ */ x.jsx(Nl, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), Hp = ne.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, qp = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ x.jsx(Hp, { children: e.map((r, i) => {
  var l, o, a, u;
  return /* @__PURE__ */ x.jsx(
    Vp,
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
}) }) : null, Up = ne(ko)`
    flex: 1;
`, Wp = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  triggerTestAction: i
}) => {
  const [l, o] = D.useState(Nr[0]), [a, u] = D.useState(
    e.map((c) => ({
      ...c,
      value: ""
    }))
  );
  D.useEffect(() => {
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
      const g = [...h];
      return g[c] = { ...g[c], value: d }, g;
    });
  };
  return /* @__PURE__ */ x.jsxs($e, { label: "Playground", children: [
    r && /* @__PURE__ */ x.jsxs(go, { children: [
      /* @__PURE__ */ x.jsx(Ye, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ x.jsx("div", { children: "Please restart the application to apply the changes to the agent." })
    ] }),
    /* @__PURE__ */ x.jsxs(Le, { children: [
      /* @__PURE__ */ x.jsx(
        Up,
        {
          defaultValue: l == null ? void 0 : l.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: Nr.map((c) => /* @__PURE__ */ x.jsx(hn, { id: c.uuid, children: c.name }, c.uuid))
        }
      ),
      /* @__PURE__ */ x.jsx(
        Np,
        {
          label: "Test",
          icon: /* @__PURE__ */ x.jsx(Sp, {}),
          onPress: s,
          variant: "primary",
          isDisabled: n,
          alt: "run test icon"
        }
      )
    ] }),
    a.length > 0 && /* @__PURE__ */ x.jsx(
      qp,
      {
        variables: a,
        highlightRules: t,
        onVariableChange: f
      }
    )
  ] });
}, Zp = [
  { key: ft.Auto, caption: "Auto" },
  { key: ft.None, caption: "None" },
  { key: ft.Tool, caption: "Tool" },
  { key: ft.Any, caption: "Any" }
], Kp = ({
  agent: e,
  validationInfo: t,
  onToolChoiceChange: n,
  onToolChoiceToolChange: r
}) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
  /* @__PURE__ */ x.jsx(
    Wn,
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
          Kr,
          {
            href: "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Read more."
          }
        )
      ] }),
      children: Zp.map((i) => /* @__PURE__ */ x.jsx(hn, { id: i.key, children: i.caption }, i.key))
    }
  ),
  e.toolChoice === ft.Tool && /* @__PURE__ */ x.jsx(
    Wn,
    {
      "aria-label": "Tool choice tool",
      label: "Tool",
      selectedKey: e.toolChoiceToolName ?? null,
      validate: () => t.isValidToolChoice,
      onSelectionChange: r,
      children: e.tools.filter((i) => i.toolType === fn.Microflow).map((i) => /* @__PURE__ */ x.jsx(hn, { id: i.name, children: i.name }, i.name))
    }
  )
] }), Gp = ne(ui)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Xp = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  toolValidations: l,
  agentValidationInfo: o
}) => {
  const [a, u] = D.useState([]), s = D.useMemo(() => e.tools ? e.tools.map((b, L) => ({
    id: b.id ?? String(L),
    enabled: b.enabled,
    name: b.toolType === fn.Microflow ? b.name : b.document.qualifiedName.split(".")[1],
    description: b.description || "",
    tooltype: b.toolType,
    tool: b.document.qualifiedName || ""
  })) : [], [e.tools]), { items: f, sortProps: c } = ti(s), d = D.useCallback(
    (b) => {
      const L = l.get(b);
      return L === "invalid" ? /* @__PURE__ */ x.jsx(At, { icon: /* @__PURE__ */ x.jsx(Ur, { title: "Tool invalid" }) }) : L === "syncing" ? /* @__PURE__ */ x.jsx(At, { icon: /* @__PURE__ */ x.jsx(si, { title: "Validating..." }) }) : null;
    },
    [l]
  ), h = D.useCallback(async () => {
    const b = await Zn(t, n, e, r);
    b && i(b);
  }, [t, n, e, r, i]), g = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const b = a[0], L = await Zn(
      t,
      n,
      e,
      r,
      b
    );
    L && i(L);
  }, [t, n, e, r, i, a]), v = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const b = a[0], L = await Uo(t, e, r, b);
    L && i(L);
  }, [e, r, i, a]), k = D.useCallback(
    async (b, L) => {
      if (!e.tools)
        return;
      const A = e.tools.map(
        (_) => (_.id ?? "") === b ? { ..._, enabled: L } : _
      ), C = { ...e, tools: A };
      r(C), i(C);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, r, i]
  ), y = async (b) => {
    const L = await Zo(e, r, b);
    L && i(L);
  }, T = async (b) => {
    const L = await Ko(
      e,
      r,
      b
    );
    L && i(L);
  };
  return /* @__PURE__ */ x.jsxs($e, { label: "Tools", children: [
    /* @__PURE__ */ x.jsx(
      Kp,
      {
        agent: e,
        validationInfo: o,
        onToolChoiceChange: y,
        onToolChoiceToolChange: T
      }
    ),
    /* @__PURE__ */ x.jsx(
      ni,
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
        data: f.map((b) => [
          { cellContent: d(b.id) },
          {
            cellContent: /* @__PURE__ */ x.jsx(
              Gp,
              {
                "aria-label": "Enabled",
                isSelected: b.enabled,
                onChange: (L) => k(b.id, L)
              }
            )
          },
          { cellContent: b.name, tooltipText: b.name },
          { cellContent: b.description, tooltipText: b.description },
          {
            cellContent: /* @__PURE__ */ x.jsx(
              Xr,
              {
                icon: b.tooltype === fn.Microflow ? /* @__PURE__ */ x.jsx(wo, {}) : no,
                text: b.tool
              }
            ),
            tooltipText: b.tool
          }
        ]),
        rowKey: (b, L) => {
          var A;
          return ((A = f[L]) == null ? void 0 : A.id) ?? String(L);
        },
        rowOpacity: (b) => {
          var L;
          return (L = f[b]) != null && L.enabled ? 1 : 0.5;
        },
        selectionType: "row",
        selectionMode: "single",
        selectedKeys: a,
        onDoubleClick: g,
        onSelectionChange: u,
        ...c,
        toolbarLeft: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(
            Ge,
            {
              icon: /* @__PURE__ */ x.jsx(ai, {}),
              label: "New",
              "aria-label": "Add new tool",
              tooltip: "Add new tool",
              onPress: h
            }
          ),
          /* @__PURE__ */ x.jsx(
            Ge,
            {
              icon: /* @__PURE__ */ x.jsx(oi, {}),
              label: "Edit",
              "aria-label": "Edit selected tool",
              onPress: g,
              tooltip: "Edit selected tool",
              isDisabled: a.length === 0
            }
          ),
          /* @__PURE__ */ x.jsx(
            Ge,
            {
              icon: /* @__PURE__ */ x.jsx(li, {}),
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
}, Yp = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  isValidToolChoice: !0,
  missingAttributes: [],
  unusedAttributes: []
}, Qp = ({
  agentDocument: { name: e, contents: t, $ID: n },
  isRuntimeConnected: r,
  showUnsavedChangesWarning: i,
  studioPro: l,
  updateStudioProDocument: o
}) => {
  var tt, nt, rt, Ct, it;
  const [a, u] = D.useState(!1), [s, f] = D.useState(Yp), [c, d] = D.useState(void 0), [h, g] = D.useState(t), [v, k] = D.useState(!1), [y, T] = D.useState(/* @__PURE__ */ new Map()), [b, L] = D.useState(
    /* @__PURE__ */ new Map()
  ), A = Vl(), C = [
    (tt = h.model) == null ? void 0 : tt.documentId,
    ...h.tools.map((j) => j.document.documentId),
    ...(h.knowledgebaseTools || []).map((j) => j.document.documentId)
  ].filter((j) => !!j), _ = h.entity ? [(Ct = (rt = (nt = h.entity) == null ? void 0 : nt.qualifiedName) == null ? void 0 : rt.split(".")) == null ? void 0 : Ct[0]] : void 0, {
    data: H,
    isError: V,
    error: w,
    isPending: M,
    execute: R
  } = Bo(l, n, r), B = D.useRef(null);
  D.useEffect(() => {
    var j;
    Te(t).then((W) => f(W)), be(l, (j = t.entity) == null ? void 0 : j.qualifiedName).then((W) => d(W)), g(t), u(!0);
  }, []), D.useEffect(() => {
    a && g(t);
  }, [t]), D.useEffect(() => () => {
    B.current && clearTimeout(B.current);
  }, []), D.useEffect(() => {
    a && (async () => {
      var $;
      const W = await be(l, ($ = h.entity) == null ? void 0 : $.qualifiedName);
      d(W);
    })();
  }, [l, (it = h.entity) == null ? void 0 : it.qualifiedName]);
  const F = async () => {
    const j = [];
    if (h.tools && h.tools.length > 0) {
      const W = /* @__PURE__ */ new Map();
      h.tools.forEach(($) => {
        W.set($.id, "syncing");
      }), T(W), j.push(
        Promise.all(
          h.tools.map(async ($) => {
            const G = await xo("document", $, h, l);
            return {
              id: $.id,
              state: G === !0 ? "valid" : "invalid"
            };
          })
        ).then(($) => {
          const G = new Map($.map((ae) => [ae.id, ae.state]));
          T(G);
        })
      );
    }
    if (h.knowledgebaseTools && h.knowledgebaseTools.length > 0) {
      const W = /* @__PURE__ */ new Map();
      h.knowledgebaseTools.forEach(($) => {
        W.set($.id, "syncing");
      }), L(W), j.push(
        Promise.all(
          h.knowledgebaseTools.map(async ($) => {
            const G = await yo(
              "document",
              $,
              h,
              l
            );
            return {
              id: $.id,
              state: G === !0 ? "valid" : "invalid"
            };
          })
        ).then(($) => {
          const G = new Map($.map((ae) => [ae.id, ae.state]));
          L(G);
        })
      );
    }
    await Promise.all(j);
  };
  D.useEffect(() => {
    a && F();
  }, [a]);
  const P = D.useRef(/* @__PURE__ */ new Map()), K = D.useRef(/* @__PURE__ */ new Map());
  D.useEffect(() => {
    if (a && h.tools) {
      const j = P.current, W = /* @__PURE__ */ new Map();
      h.tools.forEach(($) => {
        W.set($.id, $.document.qualifiedName);
      }), T(($) => {
        var ae;
        const G = new Map($);
        return (ae = h.tools) == null || ae.forEach((re) => {
          if (!$.has(re.id))
            G.set(re.id, "valid");
          else {
            const S = j.get(re.id), I = W.get(re.id);
            S !== void 0 && I !== void 0 && S !== I && G.set(re.id, "valid");
          }
        }), G;
      }), P.current = W;
    }
  }, [h.tools, a]), D.useEffect(() => {
    if (a && h.knowledgebaseTools) {
      const j = K.current, W = /* @__PURE__ */ new Map();
      h.knowledgebaseTools.forEach(($) => {
        W.set($.id, $.document.qualifiedName);
      }), L(($) => {
        var ae;
        const G = new Map($);
        return (ae = h.knowledgebaseTools) == null || ae.forEach((re) => {
          if (!$.has(re.id))
            G.set(re.id, "valid");
          else {
            const S = j.get(re.id), I = W.get(re.id);
            S !== void 0 && I !== void 0 && S !== I && G.set(re.id, "valid");
          }
        }), G;
      }), K.current = W;
    }
  }, [h.knowledgebaseTools, a]), D.useEffect(() => {
    a && (async () => {
      const W = await Te(h);
      f(W);
    })();
  }, [l, h]), Gr({
    studioPro: l,
    dependentIds: C,
    onDependentDocumentsChanged: (j) => {
      var re, S, I;
      const W = [
        ...h.tools.map((z) => z.document.documentId),
        ...((re = h.knowledgebaseTools) == null ? void 0 : re.map((z) => z.document.documentId)) || []
      ], $ = j.includes("domainModel"), G = j.includes(((S = h.model) == null ? void 0 : S.documentId) || "") || $, ae = j.some((z) => W.includes(z));
      G && Te(h).then((z) => f(z)), $ && (be(l, (I = h.entity) == null ? void 0 : I.qualifiedName).then((z) => d(z)), Qr(l, h.variables, h).then((z) => {
        g({ ...h, variables: z });
      })), ae && F();
    },
    watchDomainModelModules: _
  });
  const oe = D.useMemo(() => ro(h.variables, A), [h.variables, A]), fe = (j) => (W) => {
    const $ = { ...h, [j]: W };
    g($), B.current && clearTimeout(B.current), B.current = setTimeout(async () => {
      const G = await $o(
        l,
        j,
        $,
        o,
        W
      );
      g(G);
    }, 300);
  }, p = async () => {
    const j = await No(l, h, o);
    j && g(j);
  }, he = async () => {
    const j = await Vo(l, h, o);
    j && g(j);
  }, ye = async () => {
    h.model && Ho(l, h.model);
  }, m = async () => {
    h.entity && so(l, h.entity.qualifiedName);
  }, de = async () => {
    const j = await qo(l, Vt, h, o);
    j && g(j);
  }, be = async (j, W) => {
    if (!W)
      return;
    const $ = await io(j, W);
    if (!$)
      return;
    const G = await lo($, j);
    if (G !== void 0)
      return G ? /* @__PURE__ */ x.jsx(Do, {}) : /* @__PURE__ */ x.jsx(zo, {});
  }, te = D.useMemo(() => {
    let j = "";
    return h.maxTokens !== void 0 && (j += "Max tokens: " + h.maxTokens.toLocaleString(navigator.language)), h.temperature !== void 0 && (j.length > 0 && (j += ", "), j += "Temperature: " + h.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), h.topP !== void 0 && (j.length > 0 && (j += ", "), j += "Top P: " + h.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), j;
  }, [h.temperature, h.maxTokens, h.topP]), Te = async (j) => ({
    isValidModel: await vt("model", l, j),
    isValidEntity: await vt("entity", l, j),
    isValidUserPrompt: await vt("userPrompt", l, j),
    missingAttributes: await ao(l, j),
    unusedAttributes: await oo(l, j),
    isValidToolChoice: await vt("toolChoice", l, j)
  }), Ce = () => {
    var j, W, $;
    return /* @__PURE__ */ x.jsxs($e, { label: "General", children: [
      /* @__PURE__ */ x.jsx(
        Ht,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((j = h.model) == null ? void 0 : j.qualifiedName) || "",
          icon: h.model ? mo : void 0,
          buttonCaption: "Select...",
          onClick: he,
          validate: () => s.isValidModel,
          buttonCaptionSecondary: h.model ? "Show" : void 0,
          onClickSecondary: h.model ? ye : void 0
        }
      ),
      /* @__PURE__ */ x.jsx(
        Ht,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: te,
          buttonCaption: "Edit",
          onClick: de,
          validate: void 0
        }
      ),
      /* @__PURE__ */ x.jsx(
        Hl,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: h.description,
          onChange: fe("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ x.jsx(
        Ht,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((W = h.entity) == null ? void 0 : W.qualifiedName) || "",
          icon: c,
          onClick: p,
          buttonCaption: "Select...",
          validate: () => s.isValidEntity,
          buttonCaptionSecondary: h.entity ? "Show" : void 0,
          onClickSecondary: h.entity ? m : void 0
        }
      ),
      h.entity && s.missingAttributes.length > 0 && /* @__PURE__ */ x.jsxs(ei, { children: [
        /* @__PURE__ */ x.jsx(Ye, { children: `The following attributes cannot be found in ${h.entity.qualifiedName}:` }),
        /* @__PURE__ */ x.jsx("div", { children: s.missingAttributes.map((G) => `{{${G}}}`).join(", ") })
      ] }),
      h.entity && s.unusedAttributes.length > 0 && !v && /* @__PURE__ */ x.jsxs(Jr, { onClose: () => k(!0), children: [
        /* @__PURE__ */ x.jsx(Ye, { children: `The following attributes are found in ${($ = h.entity) == null ? void 0 : $.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ x.jsx("div", { children: s.unusedAttributes.map((G) => `{{${G}}}`).join(", ") })
      ] })
    ] });
  }, De = () => /* @__PURE__ */ x.jsx($e, { label: "System prompt", children: /* @__PURE__ */ x.jsx(
    Un,
    {
      ariaLabel: "System prompt",
      value: h.systemPrompt,
      onChange: fe("systemPrompt"),
      highlightRules: oe,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), Me = () => /* @__PURE__ */ x.jsx($e, { label: "User prompt", children: /* @__PURE__ */ x.jsx(
    Un,
    {
      ariaLabel: "User prompt",
      value: h.userPrompt || "",
      onChange: fe("userPrompt"),
      highlightRules: oe,
      validate: () => s.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), He = () => /* @__PURE__ */ x.jsx(
    Xp,
    {
      agent: h,
      studioPro: l,
      componentName: Vt,
      updateStudioProDocument: o,
      onAgentChange: g,
      toolValidations: y,
      agentValidationInfo: s
    }
  ), _t = () => /* @__PURE__ */ x.jsx(
    Wp,
    {
      variables: h.variables,
      highlightRules: oe,
      triggerTestAction: R,
      isDisabled: M || i,
      showUnsavedChangesWarning: i
    }
  ), Bt = () => /* @__PURE__ */ x.jsx(
    wa,
    {
      agent: h,
      studioPro: l,
      componentName: Vt,
      updateStudioProDocument: o,
      onAgentChange: g,
      knowledgebaseToolValidations: b
    }
  ), $t = () => /* @__PURE__ */ x.jsx(
    Bp,
    {
      agentName: e,
      response: H,
      isLoading: M,
      isError: V,
      error: w
    }
  );
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(qn, { children: [
      Ce(),
      De(),
      Me(),
      He(),
      Bt()
    ] }),
    /* @__PURE__ */ x.jsxs(qn, { children: [
      _t(),
      $t()
    ] })
  ] });
}, Jp = uo(), e1 = ({ studioPro: e, documentId: t }) => {
  var y, T, b, L;
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = D.useState(!1), [o, a] = D.useState(Jp), [u, s] = D.useState(0), [f, c] = D.useState(!1), [d, h] = D.useState(!1), g = [
    t,
    (y = o.contents.model) == null ? void 0 : y.documentId,
    ...o.contents.tools.map((A) => A.document.documentId),
    ...(o.contents.knowledgebaseTools || []).map((A) => A.document.documentId)
  ].filter((A) => !!A), v = o.contents.entity ? [(L = (b = (T = o.contents.entity) == null ? void 0 : T.qualifiedName) == null ? void 0 : b.split(".")) == null ? void 0 : L[0]] : void 0;
  D.useEffect(() => {
    r.getDocumentById(t).then(async (A) => {
      if (A && !("error" in A))
        l(!0), a(A.document);
      else
        throw new Error((A == null ? void 0 : A.error) || "Document not found");
    }).catch(async (A) => {
      await n.show("error", "Error loading document", "Details: " + (A == null ? void 0 : A.message) || A), l(!0);
    });
  }, [u]);
  const k = D.useCallback(
    (A) => {
      A.some((C) => C === t) && s((C) => C + 1), h(!0);
    },
    [t]
  );
  return Gr({
    studioPro: e,
    dependentIds: g,
    onDependentDocumentsChanged: k,
    watchProjectSettings: !0,
    watchDomainModelModules: v
  }), D.useEffect(() => {
    const A = (C) => {
      c(C.isConnected), h(!1);
    };
    return e.runtime.controller.addEventListener("connectionChanged", A), () => {
      e.runtime.controller.removeEventListener("connectionChanged", A);
    };
  }, []), D.useEffect(() => {
    co(e).then((A) => {
      c(A);
    });
  }, [e]), /* @__PURE__ */ x.jsx(ql, { studioPro: e, children: /* @__PURE__ */ x.jsxs(Ul, { children: [
    !i && /* @__PURE__ */ x.jsx(Kl, {}),
    i && /* @__PURE__ */ x.jsx(Wl, { children: /* @__PURE__ */ x.jsx(
      Qp,
      {
        agentDocument: o,
        isRuntimeConnected: f,
        showUnsavedChangesWarning: d && f,
        studioPro: e,
        updateStudioProDocument: fo(e, t)
      }
    ) })
  ] }) });
}, p1 = Zl(e1);
export {
  e1 as App,
  p1 as component
};
