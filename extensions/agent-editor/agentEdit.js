import { $ as fn, a as Sl, b as Ge, c as qr, d as El, e as Ur, f as Tl, r as D, g as Wr, h as Il, i as Al, j as Ll, k as Pl, l as Dl, m as Fl, n as Ml, o as Rl, p as qn, q as jl, s as zl, t as Ol, u as Vt, v as _l, w as Zr, x, y as Le, z as je, A as ne, B as Bl, C as Kr, G as $e, D as Nl, E as Gr, F as Ae, H as Xr, I as $l, T as Vl, J as Un, L as Hl, S as ql, K as Ul, M as Wl, N as Wn, O as Zl, P as Kl, Q as Gl, R as Xl } from "./Icon-Bb5knnP8.js";
import { I as Lt, T as Yr, B as Qe, u as Qr, c as Yl, C as Ql } from "./TextWithIcon-BWIeOSjQ.js";
import { R as Jl, g as Mt, a as eo, b as to, P as no, A as ro, T as ze, c as Jr, m as io, k as lo, d as oo, e as dn, f as ao, i as so, h as uo, j as Ht, l as co, n as fo } from "./index-BsnBB1AC.js";
import { I as ei, W as ti, E as ho } from "./Banner-DsVgoRin.js";
import { h as po, T as Zn } from "./toolHandlers-CR21pGNz.js";
import { T as qt } from "./TextInputWithButton-CMS27jFj.js";
import { h as mo } from "./knowledgebaseToolHandlers-Brs8qBc8.js";
import { u as ni, T as ri, D as Xe, k as go } from "./Table-B2MEs44R.js";
import { y as ii } from "./Link-B-mEjjKJ.js";
import { I as hn, S as Kn } from "./ComboBox-BS5KkYOa.js";
import { n as xo } from "./MicroflowIcon-CiDB04gt.js";
function yo(e, t, n) {
  let { isDisabled: r = !1, isReadOnly: i = !1, value: l, name: o, form: a, children: u, "aria-label": s, "aria-labelledby": f, validationState: c = "valid", isInvalid: h, onPressStart: d, onPressEnd: g, onPressChange: v, onPress: k, onPressUp: y, onClick: E } = e, b = (B) => {
    B.stopPropagation(), t.setSelected(B.target.checked);
  }, A = u != null, L = s != null || f != null;
  !A && !L && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: C, isPressed: _ } = fn({
    onPressStart: d,
    onPressEnd: g,
    onPressChange: v,
    onPress: k,
    onPressUp: y,
    onClick: E,
    isDisabled: r
  }), { pressProps: H, isPressed: V } = fn({
    onPressStart: d,
    onPressEnd: g,
    onPressChange: v,
    onPressUp: y,
    onClick: E,
    onPress(B) {
      var j;
      k == null || k(B), t.toggle(), (j = n.current) === null || j === void 0 || j.focus();
    },
    isDisabled: r || i
  }), { focusableProps: w } = Sl(e, n), F = Ge(C, w), M = qr(e, {
    labelable: !0
  });
  return El(n, t.defaultSelected, t.setSelected), {
    labelProps: Ge(H, {
      onClick: (B) => B.preventDefault()
    }),
    inputProps: Ge(M, {
      "aria-invalid": h || c === "invalid" || void 0,
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
      ...F
    }),
    isSelected: t.isSelected,
    isPressed: _ || V,
    isDisabled: r,
    isReadOnly: i,
    isInvalid: h || c === "invalid"
  };
}
function li(e, t, n) {
  let r = Ur({
    ...e,
    value: t.isSelected
  }), { isInvalid: i, validationErrors: l, validationDetails: o } = r.displayValidation, { labelProps: a, inputProps: u, isSelected: s, isPressed: f, isDisabled: c, isReadOnly: h } = yo({
    ...e,
    isInvalid: i
  }, t, n);
  Tl(e, r, n);
  let { isIndeterminate: d, isRequired: g, validationBehavior: v = "aria" } = e;
  D.useEffect(() => {
    n.current && (n.current.indeterminate = !!d);
  });
  let { pressProps: k } = fn({
    isDisabled: c || h,
    onPress() {
      let { [Wr]: y } = e, { commitValidation: E } = y || r;
      E();
    }
  });
  return {
    labelProps: Ge(a, k, D.useMemo(() => ({
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
    isReadOnly: h,
    isInvalid: i,
    validationErrors: l,
    validationDetails: o
  };
}
const bo = /* @__PURE__ */ new WeakMap();
function oi(e = {}) {
  let { isReadOnly: t } = e, [n, r] = Il(e.isSelected, e.defaultSelected || !1, e.onChange), [i] = D.useState(n);
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
function ko(e, t, n) {
  const r = oi({
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isSelected: t.isSelected(e.value),
    defaultSelected: t.defaultValue.includes(e.value),
    onChange(y) {
      y ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(y);
    }
  });
  let { name: i, form: l, descriptionId: o, errorMessageId: a, validationBehavior: u } = bo.get(t);
  var s;
  u = (s = e.validationBehavior) !== null && s !== void 0 ? s : u;
  let { realtimeValidation: f } = Ur({
    ...e,
    value: r.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = D.useRef(Al), h = () => {
    t.setInvalid(e.value, f.isInvalid ? f : c.current);
  };
  D.useEffect(h);
  let d = t.realtimeValidation.isInvalid ? t.realtimeValidation : f, g = u === "native" ? t.displayValidation : d;
  var v;
  let k = li({
    ...e,
    isReadOnly: e.isReadOnly || t.isReadOnly,
    isDisabled: e.isDisabled || t.isDisabled,
    name: e.name || i,
    form: e.form || l,
    isRequired: (v = e.isRequired) !== null && v !== void 0 ? v : t.isRequired,
    validationBehavior: u,
    [Wr]: {
      realtimeValidation: d,
      displayValidation: g,
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
const wo = /* @__PURE__ */ D.createContext(null), Co = /* @__PURE__ */ D.forwardRef(function(t, n) {
  let { inputRef: r = null, ...i } = t;
  [t, n] = Ll(i, n, Pl);
  let { validationBehavior: l } = Dl(Fl) || {};
  var o, a;
  let u = (a = (o = t.validationBehavior) !== null && o !== void 0 ? o : l) !== null && a !== void 0 ? a : "native", s = D.useContext(wo), f = Ml(D.useMemo(() => Rl(r, t.inputRef !== void 0 ? t.inputRef : null), [
    r,
    t.inputRef
  ])), { labelProps: c, inputProps: h, isSelected: d, isDisabled: g, isReadOnly: v, isPressed: k, isInvalid: y } = s ? ko({
    ...qn(t),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: t.value,
    // ReactNode type doesn't allow function children.
    children: typeof t.children == "function" ? !0 : t.children
  }, s, f) : li({
    ...qn(t),
    children: typeof t.children == "function" ? !0 : t.children,
    validationBehavior: u
  }, oi(t), f), { isFocused: E, isFocusVisible: b, focusProps: A } = jl(), L = g || v, { hoverProps: C, isHovered: _ } = zl({
    ...t,
    isDisabled: L
  }), H = Ol({
    ...t,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: d,
      isIndeterminate: t.isIndeterminate || !1,
      isPressed: k,
      isHovered: _,
      isFocused: E,
      isFocusVisible: b,
      isDisabled: g,
      isReadOnly: v,
      isInvalid: y,
      isRequired: t.isRequired || !1
    }
  }), V = qr(t, {
    global: !0
  });
  return delete V.id, delete V.onClick, /* @__PURE__ */ Vt.createElement("label", {
    ...Ge(V, c, C, H),
    ref: n,
    slot: t.slot || void 0,
    "data-selected": d || void 0,
    "data-indeterminate": t.isIndeterminate || void 0,
    "data-pressed": k || void 0,
    "data-hovered": _ || void 0,
    "data-focused": E || void 0,
    "data-focus-visible": b || void 0,
    "data-disabled": g || void 0,
    "data-readonly": v || void 0,
    "data-invalid": y || void 0,
    "data-required": t.isRequired || void 0
  }, /* @__PURE__ */ Vt.createElement(_l, {
    elementType: "span"
  }, /* @__PURE__ */ Vt.createElement("input", {
    ...Ge(h, A),
    ref: f
  })), H.children);
}), vo = [
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
], So = [
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
], Eo = (e, t) => async (n) => {
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, n);
  } catch (r) {
    await e.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function To(e, t) {
  const n = /\{\{([^}\s{]+)\}\}/g, r = t.systemPrompt.match(n) || [], i = t.userPrompt ? t.userPrompt.match(n) || [] : [], l = [...r, ...i];
  if (l.length === 0)
    return Promise.resolve([]);
  const o = l.map((f) => f.replace(/\{\{|\}\}/g, "")), a = [...new Set(o)], u = t.variables, s = a.map((f) => u.find((h) => h.key === f) || {
    key: f,
    isAttributeInEntity: !1
  });
  return En(e, s, t);
}
const Io = (e, t) => e.map((n, r) => ({
  pattern: new RegExp("\\{\\{" + n.key + "\\}\\}", "g"),
  style: {
    ...Ao(r, Zr(t)),
    borderRadius: "2px",
    borderWidth: "1px",
    borderStyle: "solid",
    margin: "0 -1px"
  }
}));
function Ao(e, t) {
  const n = t ? So : vo;
  return {
    color: n[e % n.length][1],
    backgroundColor: n[e % n.length][0],
    borderColor: n[e % n.length][1]
  };
}
async function En(e, t, n) {
  const r = await ai(e, n), i = await si(n, e);
  return t.map((l) => {
    const o = i.includes(l.key);
    return {
      ...l,
      isAttributeInEntity: r === !1 || o
    };
  });
}
const ai = async (e, t) => t.entity ? await Mt(e, t.entity.qualifiedName) !== void 0 : !0, Lo = async (e, t) => t.variables.length === 0 ? [] : !t.entity || !await Mt(e, t.entity.qualifiedName) ? [] : t.variables.filter((n) => !n.isAttributeInEntity).map((n) => n.key), si = async (e, t) => {
  if (!e.entity)
    return [];
  const n = await Mt(t, e.entity.qualifiedName);
  return n ? (await eo(t, n)).sort() : [];
}, Po = async (e, t) => (await si(t, e)).filter((r) => !t.variables.find((i) => i.key === r)), Do = async (e, t, n) => {
  const r = n.reduce((o, a) => (o[a.key] = a.value, o), {}), i = {
    documentId: t,
    variables: JSON.stringify(r)
  };
  return await e.runtime.controller.executePreviewAction(
    "preview_agent_test",
    i
  );
}, Fo = async (e) => {
  try {
    const t = await e.runtime.controller.executePreviewAction("preview_runtime_test", {});
    return !(typeof t == "object" && t !== null && "error" in t && t.error === Jl);
  } catch {
    return !0;
  }
}, Mo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ro = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var jo = Object.defineProperty, zo = (e, t) => jo(e, "name", { value: t, configurable: !0 });
const Oo = zo((e) => x.jsx(Le, { light: Ro, dark: Mo, ...e }), "EntityIcon"), _o = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", Bo = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var No = Object.defineProperty, $o = (e, t) => No(e, "name", { value: t, configurable: !0 });
const Vo = $o((e) => x.jsx(Le, { light: Bo, dark: _o, ...e }), "EntityNonPersistableIcon"), Ho = "Please make sure the ASU_AgentEditor is triggered upon app startup in order to register your agent and test it locally.", qo = "Test action failed. Please check the runtime logs for more details.", Uo = (e, t, n) => {
  const [r, i] = D.useState(void 0), [l, o] = D.useState(!1), [a, u] = D.useState(!1), [s, f] = D.useState(void 0), c = D.useCallback(
    async (h) => {
      if (!n) {
        await e.ui.notifications.show({
          icon: to,
          title: "App is not running",
          message: "Please run the app to use the playground."
        });
        return;
      }
      o(!0), i(void 0), u(!1), f(void 0);
      try {
        const d = await Do(e, t, h);
        if (d === void 0)
          throw new Error("No response received from the test action.");
        if ("message" in d && d.message === no) {
          u(!0), f({ name: "Error", message: Ho, link: ro });
          return;
        }
        i(d);
      } catch {
        u(!0), f({ name: "Error", message: qo });
      } finally {
        o(!1);
      }
    },
    [e, n, t]
  );
  return { data: r, isPending: l, isError: a, error: s, execute: c };
}, Wo = async (e, t, n, r, i) => {
  const l = { ...n, [t]: i };
  return (t === "userPrompt" || t === "systemPrompt") && (l.variables = await To(e, l)), r(l), l;
}, Zo = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let i;
  if (r.status === "ok" && (i = {
    ...t,
    entity: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  }), r.status === "none" && (i = { ...t, entity: void 0 }), i) {
    const l = await En(e, t.variables, i);
    i = { ...i, variables: l }, n(i);
  }
  return i;
}, Ko = async (e, t, n) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: io }
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
      const r = await Jr(t, n.model);
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
      if (!await ai(t, n))
        return "Entity no longer exists.";
      break;
    }
    case "userPrompt":
      if (!n.userPrompt)
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
}, Go = async (e, t) => {
  if (!t.documentId)
    return;
  if (!await Jr(e, t))
    return await e.ui.messageBoxes.show("error", "Could not find model.", "This model might have been deleted or renamed. Please update the model selection.");
  e.ui.editors.editDocument(t.documentId);
}, Xo = async (e, t, n, r) => {
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
}, Gn = async (e, t, n, r, i) => {
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
    return i && n.tools ? (u = n.tools.map((f) => f.id === i ? a : f), n.toolChoiceToolName && n.toolChoiceToolName === (l == null ? void 0 : l.name) && a.name !== (l == null ? void 0 : l.name) && (s.toolChoiceToolName = a.name)) : u = [...n.tools || [], a], u.sort((f, c) => f.name.localeCompare(c.name)), s.tools = u, r(s), s;
  } else
    return null;
}, Yo = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to delete this tool?"
  }) === !1)
    return;
  const l = t.tools.filter((a) => a.id !== r), o = { ...t, tools: l };
  return n(o), o;
}, Xn = async (e, t, n, r, i) => {
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
    const f = { ...n, knowledgebaseTools: s };
    return r(f), f;
  }
  return null;
}, Qo = async (e, t, n, r) => {
  if (await e.ui.messageBoxes.ask({
    type: "confirmation",
    question: "Are you sure you want to remove this knowledge base from the agent?"
  }) === !1)
    return;
  const o = (t.knowledgebaseTools || []).filter((u) => u.id !== r), a = { ...t, knowledgebaseTools: o };
  return n(a), a;
}, Jo = async (e, t, n) => {
  const r = {
    ...e,
    toolChoice: n ?? void 0,
    // Clear toolChoiceToolName if toolChoice is not "Tool"
    toolChoiceToolName: n === ze.Tool ? e.toolChoiceToolName : void 0
  };
  return t(r), r;
}, ea = async (e, t, n) => {
  if (e.toolChoice !== ze.Tool)
    return;
  const r = { ...e, toolChoiceToolName: n ?? void 0 };
  return t(r), r;
}, ta = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", na = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ra = Object.defineProperty, ia = (e, t) => ra(e, "name", { value: t, configurable: !0 });
const ui = ia((e) => x.jsx(Le, { light: na, dark: ta, ...e }), "AppSelectorNoVersionIcon"), la = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", oa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var aa = Object.defineProperty, sa = (e, t) => aa(e, "name", { value: t, configurable: !0 });
const ci = sa((e) => x.jsx(Le, { light: oa, dark: la, ...e }), "EditIcon"), ua = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ca = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var fa = Object.defineProperty, da = (e, t) => fa(e, "name", { value: t, configurable: !0 });
const fi = da((e) => x.jsx(Le, { light: ca, dark: ua, ...e }), "PageIcon"), ha = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", pa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var ma = Object.defineProperty, ga = (e, t) => ma(e, "name", { value: t, configurable: !0 });
const di = ga((e) => x.jsx(Le, { light: pa, dark: ha, ...e }), "SyncIcon"), xa = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ya = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var ba = Object.defineProperty, ka = (e, t) => ba(e, "name", { value: t, configurable: !0 });
const wa = ka((e) => x.jsx(Le, { light: ya, dark: xa, ...e }), "CheckCheckboxIcon");
var Ca = Object.defineProperty, va = (e, t) => Ca(e, "name", { value: t, configurable: !0 });
const hi = va(({ children: e, ...t }) => x.jsx(Ea, { ...t, children: ({ isIndeterminate: n, isSelected: r }) => x.jsxs(x.Fragment, { children: [x.jsxs(pi, { $isSelected: r, $isIndeterminate: n, children: [n && x.jsx(Sa, {}), r && !n && x.jsx(wa, {})] }), e] }) }), "Checkbox"), pi = ne.div`
    width: ${je.size12};
    height: ${je.size12};
    margin: ${je.spacing2};
    border-radius: ${je.borderRadiusXs};
    border: ${je.borderWidthMd} solid
        ${({ theme: e, $isSelected: t }) => t ? e.colorsBorderSelectorSelected : e.colorsBorderSelectorUnselected};
    background-color: ${({ theme: e, $isSelected: t, $isIndeterminate: n }) => t && !n ? e.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, Sa = ne.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: e }) => e.colorsBorderSelectorSelected};
`, Ea = ne(Co)`
    cursor: pointer;
    display: flex;
    height: ${je.size16};
    gap: ${je.spacing4};
    line-height: ${je.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${pi} {
            border-color: ${({ theme: e }) => e.colorsBorderSelectorSelected};
        }
    }

    ${Bl}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, Ta = ne(hi)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Ia = ({
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
  })), [e.knowledgebaseTools]), { items: s, sortProps: f } = ni(u), c = D.useCallback(
    (k) => {
      const y = l.get(k);
      return y === "invalid" ? /* @__PURE__ */ x.jsx(Lt, { icon: /* @__PURE__ */ x.jsx(Kr, { title: "Tool invalid" }) }) : y === "syncing" ? /* @__PURE__ */ x.jsx(Lt, { icon: /* @__PURE__ */ x.jsx(di, { title: "Validating..." }) }) : null;
    },
    [l]
  ), h = D.useCallback(async () => {
    const k = await Xn(
      t,
      n,
      e,
      r
    );
    k && i(k);
  }, [t, n, e, r, i]), d = D.useCallback(async () => {
    const k = e.knowledgebaseTools || [];
    if (o.length === 0 || k.length === 0)
      return;
    const y = o[0], E = await Xn(
      t,
      n,
      e,
      r,
      y
    );
    E && i(E);
  }, [t, n, e, r, i, o]), g = D.useCallback(async () => {
    const k = e.knowledgebaseTools || [];
    if (o.length === 0 || k.length === 0)
      return;
    const y = o[0], E = await Qo(
      t,
      e,
      r,
      y
    );
    E && i(E);
  }, [e, r, i, o]), v = D.useCallback(
    async (k, y) => {
      const E = e.knowledgebaseTools || [];
      if (E.length === 0)
        return;
      const b = E.map(
        (L) => (L.id ?? "") === k ? { ...L, enabled: y } : L
      ), A = { ...e, knowledgebaseTools: b };
      r(A), i(A);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.knowledgebaseTools, r, i]
  );
  return /* @__PURE__ */ x.jsx($e, { label: "Knowledge bases", children: /* @__PURE__ */ x.jsx(
    ri,
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
            Ta,
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
          cellContent: /* @__PURE__ */ x.jsx(Yr, { icon: lo, text: k.tool }),
          tooltipText: k.tool
        }
      ]),
      rowKey: (k, y) => {
        var E;
        return ((E = s[y]) == null ? void 0 : E.id) ?? String(y);
      },
      rowOpacity: (k) => {
        var y;
        return (y = s[k]) != null && y.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: o,
      onDoubleClick: d,
      onSelectionChange: a,
      ...f,
      toolbarLeft: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
        /* @__PURE__ */ x.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ x.jsx(fi, {}),
            label: "New",
            "aria-label": "Add new knowledge base to agent",
            tooltip: "Add new knowledge base to agent",
            onPress: h
          }
        ),
        /* @__PURE__ */ x.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ x.jsx(ci, {}),
            label: "Edit",
            "aria-label": "Edit selected knowledge base",
            onPress: d,
            tooltip: "Edit selected knowledge base",
            isDisabled: o.length === 0
          }
        ),
        /* @__PURE__ */ x.jsx(
          Xe,
          {
            icon: /* @__PURE__ */ x.jsx(ui, {}),
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
}, Aa = Nl`
    0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
    30%            { opacity: 1; transform: scale(1.2); }
`, La = ne.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 4px;
`, Ut = ne.span`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    display: inline-block;
    animation: ${Aa} 1.4s ease-in-out infinite;
    animation-delay: ${({ delay: e }) => e};
`, Pa = () => /* @__PURE__ */ x.jsxs(La, { "data-testid": "loading-dots", children: [
  /* @__PURE__ */ x.jsx(Ut, { delay: "0s" }),
  /* @__PURE__ */ x.jsx(Ut, { delay: "0.2s" }),
  /* @__PURE__ */ x.jsx(Ut, { delay: "0.4s" })
] });
function Da(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Fa = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ma = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ra = {};
function Yn(e, t) {
  return (Ra.jsx ? Ma : Fa).test(e);
}
const ja = /[ \t\n\f\r]/g;
function za(e) {
  return typeof e == "object" ? e.type === "text" ? Qn(e.value) : !1 : Qn(e);
}
function Qn(e) {
  return e.replace(ja, "") === "";
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
function mi(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new yt(n, r, t);
}
function pn(e) {
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
let Oa = 0;
const $ = He(), ee = He(), mn = He(), T = He(), Q = He(), Ye = He(), me = He();
function He() {
  return 2 ** ++Oa;
}
const gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: $,
  booleanish: ee,
  commaOrSpaceSeparated: me,
  commaSeparated: Ye,
  number: T,
  overloadedBoolean: mn,
  spaceSeparated: Q
}, Symbol.toStringTag, { value: "Module" })), Wt = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(gn)
);
class Tn extends ce {
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
    if (super(t, n), Jn(this, "space", i), typeof r == "number")
      for (; ++l < Wt.length; ) {
        const o = Wt[l];
        Jn(this, Wt[l], (r & gn[o]) === gn[o]);
      }
  }
}
Tn.prototype.defined = !0;
function Jn(e, t, n) {
  n && (e[t] = n);
}
function et(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const l = new Tn(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), t[r] = l, n[pn(r)] = r, n[pn(l.attribute)] = r;
  }
  return new yt(t, n, e.space);
}
const gi = et({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: ee,
    ariaAutoComplete: null,
    ariaBusy: ee,
    ariaChecked: ee,
    ariaColCount: T,
    ariaColIndex: T,
    ariaColSpan: T,
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
    ariaLevel: T,
    ariaLive: null,
    ariaModal: ee,
    ariaMultiLine: ee,
    ariaMultiSelectable: ee,
    ariaOrientation: null,
    ariaOwns: Q,
    ariaPlaceholder: null,
    ariaPosInSet: T,
    ariaPressed: ee,
    ariaReadOnly: ee,
    ariaRelevant: null,
    ariaRequired: ee,
    ariaRoleDescription: Q,
    ariaRowCount: T,
    ariaRowIndex: T,
    ariaRowSpan: T,
    ariaSelected: ee,
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
function xi(e, t) {
  return t in e ? e[t] : t;
}
function yi(e, t) {
  return xi(e, t.toLowerCase());
}
const _a = et({
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
    accept: Ye,
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
    contentEditable: ee,
    controls: $,
    controlsList: Q,
    coords: T | Ye,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: $,
    defer: $,
    dir: null,
    dirName: null,
    disabled: $,
    download: mn,
    draggable: ee,
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
    hidden: mn,
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
    spellCheck: ee,
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
    value: ee,
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
    scrolling: ee,
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
  transform: yi
}), Ba = et({
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
    g1: Ye,
    g2: Ye,
    glyphName: Ye,
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
    strokeDashArray: me,
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
    systemLanguage: me,
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
    typeOf: me,
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
  transform: xi
}), bi = et({
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
}), ki = et({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: yi
}), wi = et({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Na = {
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
}, $a = /[A-Z]/g, er = /-[a-z]/g, Va = /^data[-\w.:]+$/i;
function Ha(e, t) {
  const n = pn(t);
  let r = t, i = ce;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Va.test(t)) {
    if (t.charAt(4) === "-") {
      const l = t.slice(5).replace(er, Ua);
      r = "data" + l.charAt(0).toUpperCase() + l.slice(1);
    } else {
      const l = t.slice(4);
      if (!er.test(l)) {
        let o = l.replace($a, qa);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = Tn;
  }
  return new i(r, t);
}
function qa(e) {
  return "-" + e.toLowerCase();
}
function Ua(e) {
  return e.charAt(1).toUpperCase();
}
const Wa = mi([gi, _a, bi, ki, wi], "html"), In = mi([gi, Ba, bi, ki, wi], "svg");
function Za(e) {
  return e.join(" ").trim();
}
var We = {}, Zt, tr;
function Ka() {
  if (tr) return Zt;
  tr = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", f = "*", c = "", h = "comment", d = "declaration";
  function g(k, y) {
    if (typeof k != "string")
      throw new TypeError("First argument must be a string");
    if (!k) return [];
    y = y || {};
    var E = 1, b = 1;
    function A(j) {
      var P = j.match(t);
      P && (E += P.length);
      var K = j.lastIndexOf(u);
      b = ~K ? j.length - K : b + j.length;
    }
    function L() {
      var j = { line: E, column: b };
      return function(P) {
        return P.position = new C(j), V(), P;
      };
    }
    function C(j) {
      this.start = j, this.end = { line: E, column: b }, this.source = y.source;
    }
    C.prototype.content = k;
    function _(j) {
      var P = new Error(
        y.source + ":" + E + ":" + b + ": " + j
      );
      if (P.reason = j, P.filename = y.source, P.line = E, P.column = b, P.source = k, !y.silent) throw P;
    }
    function H(j) {
      var P = j.exec(k);
      if (P) {
        var K = P[0];
        return A(K), k = k.slice(K.length), P;
      }
    }
    function V() {
      H(n);
    }
    function w(j) {
      var P;
      for (j = j || []; P = F(); )
        P !== !1 && j.push(P);
      return j;
    }
    function F() {
      var j = L();
      if (!(s != k.charAt(0) || f != k.charAt(1))) {
        for (var P = 2; c != k.charAt(P) && (f != k.charAt(P) || s != k.charAt(P + 1)); )
          ++P;
        if (P += 2, c === k.charAt(P - 1))
          return _("End of comment missing");
        var K = k.slice(2, P - 2);
        return b += 2, A(K), k = k.slice(P), b += 2, j({
          type: h,
          comment: K
        });
      }
    }
    function M() {
      var j = L(), P = H(r);
      if (P) {
        if (F(), !H(i)) return _("property missing ':'");
        var K = H(l), J = j({
          type: d,
          property: v(P[0].replace(e, c)),
          value: K ? v(K[0].replace(e, c)) : c
        });
        return H(o), J;
      }
    }
    function B() {
      var j = [];
      w(j);
      for (var P; P = M(); )
        P !== !1 && (j.push(P), w(j));
      return j;
    }
    return V(), B();
  }
  function v(k) {
    return k ? k.replace(a, c) : c;
  }
  return Zt = g, Zt;
}
var nr;
function Ga() {
  if (nr) return We;
  nr = 1;
  var e = We && We.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(We, "__esModule", { value: !0 }), We.default = n;
  const t = e(Ka());
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
  return We;
}
var st = {}, rr;
function Xa() {
  if (rr) return st;
  rr = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, l = function(s) {
    return !s || n.test(s) || e.test(s);
  }, o = function(s, f) {
    return f.toUpperCase();
  }, a = function(s, f) {
    return "".concat(f, "-");
  }, u = function(s, f) {
    return f === void 0 && (f = {}), l(s) ? s : (s = s.toLowerCase(), f.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, o));
  };
  return st.camelCase = u, st;
}
var ut, ir;
function Ya() {
  if (ir) return ut;
  ir = 1;
  var e = ut && ut.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Ga()), n = Xa();
  function r(i, l) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (o[(0, n.camelCase)(a, l)] = u);
    }), o;
  }
  return r.default = r, ut = r, ut;
}
var Qa = Ya();
const Ja = /* @__PURE__ */ Gr(Qa), Ci = vi("end"), An = vi("start");
function vi(e) {
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
function Si(e) {
  const t = An(e), n = Ci(e);
  if (t && n)
    return { start: t, end: n };
}
function dt(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? lr(e.position) : "start" in e || "end" in e ? lr(e) : "line" in e || "column" in e ? xn(e) : "";
}
function xn(e) {
  return or(e && e.line) + ":" + or(e && e.column);
}
function lr(e) {
  return xn(e && e.start) + "-" + xn(e && e.end);
}
function or(e) {
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
    this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = dt(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
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
const Ln = {}.hasOwnProperty, es = /* @__PURE__ */ new Map(), ts = /[A-Z]/g, ns = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), rs = /* @__PURE__ */ new Set(["td", "th"]), Ei = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function is(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = ds(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = fs(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? In : Wa,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, l = Ti(i, e, void 0);
  return l && typeof l != "string" ? l : i.create(
    e,
    i.Fragment,
    { children: l || void 0 },
    void 0
  );
}
function Ti(e, t, n) {
  if (t.type === "element")
    return ls(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return os(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return ss(e, t, n);
  if (t.type === "mdxjsEsm")
    return as(e, t);
  if (t.type === "root")
    return us(e, t, n);
  if (t.type === "text")
    return cs(e, t);
}
function ls(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = In, e.schema = i), e.ancestors.push(t);
  const l = Ai(e, t.tagName, !1), o = hs(e, t);
  let a = Dn(e, t);
  return ns.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !za(u) : !0;
  })), Ii(e, o, l, t), Pn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function os(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  mt(e, t.position);
}
function as(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  mt(e, t.position);
}
function ss(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = In, e.schema = i), e.ancestors.push(t);
  const l = t.name === null ? e.Fragment : Ai(e, t.name, !0), o = ps(e, t), a = Dn(e, t);
  return Ii(e, o, l, t), Pn(o, a), e.ancestors.pop(), e.schema = r, e.create(t, l, o, n);
}
function us(e, t, n) {
  const r = {};
  return Pn(r, Dn(e, t)), e.create(t, e.Fragment, r, n);
}
function cs(e, t) {
  return t.value;
}
function Ii(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Pn(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function fs(e, t, n) {
  return r;
  function r(i, l, o, a) {
    const s = Array.isArray(o.children) ? n : t;
    return a ? s(l, o, a) : s(l, o);
  }
}
function ds(e, t) {
  return n;
  function n(r, i, l, o) {
    const a = Array.isArray(l.children), u = An(r);
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
function hs(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Ln.call(t.properties, i)) {
      const l = ms(e, i, t.properties[i]);
      if (l) {
        const [o, a] = l;
        e.tableCellAlignToStyle && o === "align" && typeof a == "string" && rs.has(t.tagName) ? r = a : n[o] = a;
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
function ps(e, t) {
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
function Dn(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : es;
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
    const a = Ti(e, l, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function ms(e, t, n) {
  const r = Ha(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Da(n) : Za(n)), r.property === "style") {
      let i = typeof n == "object" ? n : gs(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = xs(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Na[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function gs(e, t) {
  try {
    return Ja(t, { reactCompat: !0 });
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
    throw i.file = e.filePath || void 0, i.url = Ei + "#cannot-parse-style-attribute", i;
  }
}
function Ai(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let l = -1, o;
    for (; ++l < i.length; ) {
      const a = Yn(i[l]) ? { type: "Identifier", name: i[l] } : { type: "Literal", value: i[l] };
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
    r = Yn(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Ln.call(e.components, i) ? e.components[i] : i;
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
  throw n.file = e.filePath || void 0, n.url = Ei + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function xs(e) {
  const t = {};
  let n;
  for (n in e)
    Ln.call(e, n) && (t[ys(n)] = e[n]);
  return t;
}
function ys(e) {
  let t = e.replace(ts, bs);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function bs(e) {
  return "-" + e.toLowerCase();
}
const Kt = {
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
}, ks = {};
function Fn(e, t) {
  const n = ks, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Li(e, r, i);
}
function Li(e, t, n) {
  if (ws(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return ar(e.children, t, n);
  }
  return Array.isArray(e) ? ar(e, t, n) : "";
}
function ar(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Li(e[i], t, n);
  return r.join("");
}
function ws(e) {
  return !!(e && typeof e == "object");
}
const sr = document.createElement("i");
function Mn(e) {
  const t = "&" + e + ";";
  sr.innerHTML = t;
  const n = sr.textContent;
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
const ur = {}.hasOwnProperty;
function Pi(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Cs(t, e[n]);
  return t;
}
function Cs(e, t) {
  let n;
  for (n in t) {
    const i = (ur.call(e, n) ? e[n] : void 0) || (e[n] = {}), l = t[n];
    let o;
    if (l)
      for (o in l) {
        ur.call(i, o) || (i[o] = []);
        const a = l[o];
        vs(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function vs(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  ge(e, 0, 0, r);
}
function Di(e, t) {
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
const se = Oe(/[A-Za-z]/), ie = Oe(/[\dA-Za-z]/), Ss = Oe(/[#-'*+\--9=?A-Z^-~]/);
function Pt(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const yn = Oe(/\d/), Es = Oe(/[\dA-Fa-f]/), Ts = Oe(/[!-/:-@[-`{-~]/);
function O(e) {
  return e !== null && e < -2;
}
function Y(e) {
  return e !== null && (e < 0 || e === 32);
}
function q(e) {
  return e === -2 || e === -1 || e === 32;
}
const Rt = Oe(new RegExp("\\p{P}|\\p{S}", "u")), Ve = Oe(/\s/);
function Oe(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function tt(e) {
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
const Is = {
  tokenize: As
};
function As(e) {
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
const Ls = {
  tokenize: Ps
}, cr = {
  tokenize: Ds
};
function Ps(e) {
  const t = this, n = [];
  let r = 0, i, l, o;
  return a;
  function a(b) {
    if (r < n.length) {
      const A = n[r];
      return t.containerState = A[1], e.attempt(A[0].continuation, u, s)(b);
    }
    return s(b);
  }
  function u(b) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && E();
      const A = t.events.length;
      let L = A, C;
      for (; L--; )
        if (t.events[L][0] === "exit" && t.events[L][1].type === "chunkFlow") {
          C = t.events[L][1].end;
          break;
        }
      y(r);
      let _ = A;
      for (; _ < t.events.length; )
        t.events[_][1].end = {
          ...C
        }, _++;
      return ge(t.events, L + 1, 0, t.events.slice(A)), t.events.length = _, s(b);
    }
    return a(b);
  }
  function s(b) {
    if (r === n.length) {
      if (!i)
        return h(b);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return g(b);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(cr, f, c)(b);
  }
  function f(b) {
    return i && E(), y(r), h(b);
  }
  function c(b) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, g(b);
  }
  function h(b) {
    return t.containerState = {}, e.attempt(cr, d, g)(b);
  }
  function d(b) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(b);
  }
  function g(b) {
    if (b === null) {
      i && E(), y(0), e.consume(b);
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
  function k(b, A) {
    const L = t.sliceStream(b);
    if (A && L.push(null), b.previous = l, l && (l.next = b), l = b, i.defineSkip(b.start), i.write(L), t.parser.lazy[b.start.line]) {
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
    let A = n.length;
    for (; A-- > b; ) {
      const L = n[A];
      t.containerState = L[1], L[0].exit.call(t, e);
    }
    n.length = b;
  }
  function E() {
    i.write([null]), l = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Ds(e, t, n) {
  return Z(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Je(e) {
  if (e === null || Y(e) || Ve(e))
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
const bn = {
  name: "attention",
  resolveAll: Fs,
  tokenize: Ms
};
function Fs(e, t) {
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
          }, h = {
            ...e[n][1].start
          };
          fr(c, -u), fr(h, u), o = {
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
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = xe(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = xe(s, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", l, t]]), s = xe(s, jt(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = xe(s, [["exit", l, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (f = 2, s = xe(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : f = 0, ge(e, r - 1, n - r + 3, s), n = r + s.length - f - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Ms(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Je(r);
  let l;
  return o;
  function o(u) {
    return l = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === l)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), f = Je(u), c = !f || f === 2 && i || n.includes(u), h = !i || i === 2 && f || n.includes(r);
    return s._open = !!(l === 42 ? c : c && (i || !h)), s._close = !!(l === 42 ? h : h && (f || !c)), t(u);
  }
}
function fr(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Rs = {
  name: "autolink",
  tokenize: js
};
function js(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l;
  }
  function l(d) {
    return se(d) ? (e.consume(d), o) : d === 64 ? n(d) : s(d);
  }
  function o(d) {
    return d === 43 || d === 45 || d === 46 || ie(d) ? (r = 1, a(d)) : s(d);
  }
  function a(d) {
    return d === 58 ? (e.consume(d), r = 0, u) : (d === 43 || d === 45 || d === 46 || ie(d)) && r++ < 32 ? (e.consume(d), a) : (r = 0, s(d));
  }
  function u(d) {
    return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || Pt(d) ? n(d) : (e.consume(d), u);
  }
  function s(d) {
    return d === 64 ? (e.consume(d), f) : Ss(d) ? (e.consume(d), s) : n(d);
  }
  function f(d) {
    return ie(d) ? c(d) : n(d);
  }
  function c(d) {
    return d === 46 ? (e.consume(d), r = 0, f) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(d);
  }
  function h(d) {
    if ((d === 45 || ie(d)) && r++ < 63) {
      const g = d === 45 ? h : c;
      return e.consume(d), g;
    }
    return n(d);
  }
}
const bt = {
  partial: !0,
  tokenize: zs
};
function zs(e, t, n) {
  return r;
  function r(l) {
    return q(l) ? Z(e, i, "linePrefix")(l) : i(l);
  }
  function i(l) {
    return l === null || O(l) ? t(l) : n(l);
  }
}
const Fi = {
  continuation: {
    tokenize: _s
  },
  exit: Bs,
  name: "blockQuote",
  tokenize: Os
};
function Os(e, t, n) {
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
function _s(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return q(o) ? Z(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o);
  }
  function l(o) {
    return e.attempt(Fi, t, n)(o);
  }
}
function Bs(e) {
  e.exit("blockQuote");
}
const Mi = {
  name: "characterEscape",
  tokenize: Ns
};
function Ns(e, t, n) {
  return r;
  function r(l) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i;
  }
  function i(l) {
    return Ts(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(l);
  }
}
const Ri = {
  name: "characterReference",
  tokenize: $s
};
function $s(e, t, n) {
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
    return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = Es, f) : (e.enter("characterReferenceValue"), l = 7, o = yn, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return o === ie && !Mn(r.sliceSerialize(h)) ? n(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(c) && i++ < l ? (e.consume(c), f) : n(c);
  }
}
const dr = {
  partial: !0,
  tokenize: Hs
}, hr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Vs
};
function Vs(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: L
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
    return C === null || O(C) ? (e.exit("codeFencedFence"), r.interrupt ? t(C) : e.check(dr, v, A)(C)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(C));
  }
  function h(C) {
    return C === null || O(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(C)) : q(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Z(e, d, "whitespace")(C)) : C === 96 && C === a ? n(C) : (e.consume(C), h);
  }
  function d(C) {
    return C === null || O(C) ? c(C) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), g(C));
  }
  function g(C) {
    return C === null || O(C) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(C)) : C === 96 && C === a ? n(C) : (e.consume(C), g);
  }
  function v(C) {
    return e.attempt(i, A, k)(C);
  }
  function k(C) {
    return e.enter("lineEnding"), e.consume(C), e.exit("lineEnding"), y;
  }
  function y(C) {
    return l > 0 && q(C) ? Z(e, E, "linePrefix", l + 1)(C) : E(C);
  }
  function E(C) {
    return C === null || O(C) ? e.check(dr, v, A)(C) : (e.enter("codeFlowValue"), b(C));
  }
  function b(C) {
    return C === null || O(C) ? (e.exit("codeFlowValue"), E(C)) : (e.consume(C), b);
  }
  function A(C) {
    return e.exit("codeFenced"), t(C);
  }
  function L(C, _, H) {
    let V = 0;
    return w;
    function w(P) {
      return C.enter("lineEnding"), C.consume(P), C.exit("lineEnding"), F;
    }
    function F(P) {
      return C.enter("codeFencedFence"), q(P) ? Z(C, M, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(P) : M(P);
    }
    function M(P) {
      return P === a ? (C.enter("codeFencedFenceSequence"), B(P)) : H(P);
    }
    function B(P) {
      return P === a ? (V++, C.consume(P), B) : V >= o ? (C.exit("codeFencedFenceSequence"), q(P) ? Z(C, j, "whitespace")(P) : j(P)) : H(P);
    }
    function j(P) {
      return P === null || O(P) ? (C.exit("codeFencedFence"), _(P)) : H(P);
    }
  }
}
function Hs(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Gt = {
  name: "codeIndented",
  tokenize: Us
}, qs = {
  partial: !0,
  tokenize: Ws
};
function Us(e, t, n) {
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
    return s === null ? u(s) : O(s) ? e.attempt(qs, o, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || O(s) ? (e.exit("codeFlowValue"), o(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Ws(e, t, n) {
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
const Zs = {
  name: "codeText",
  previous: Gs,
  resolve: Ks,
  tokenize: Xs
};
function Ks(e) {
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
function Gs(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Xs(e, t, n) {
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
class Ys {
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
    return r && ct(this.left, r), l.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), ct(this.left, t);
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
    this.setCursor(0), ct(this.right, t.reverse());
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
        ct(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        ct(this.left, n.reverse());
      }
  }
}
function ct(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function ji(e) {
  const t = {};
  let n = -1, r, i, l, o, a, u, s;
  const f = new Ys(e);
  for (; ++n < f.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = f.get(n), n && r[1].type === "chunkFlow" && f.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, l = 0, l < u.length && u[l][1].type === "lineEndingBlank" && (l += 2), l < u.length && u[l][1].type === "content"))
      for (; ++l < u.length && u[l][1].type !== "content"; )
        u[l][1].type === "chunkText" && (u[l][1]._isInFirstContentOfListItem = !0, l++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Qs(f, n)), n = t[n], s = !0);
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
function Qs(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const l = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, u = [], s = {};
  let f, c, h = -1, d = n, g = 0, v = 0;
  const k = [v];
  for (; d; ) {
    for (; e.get(++i)[1] !== d; )
      ;
    l.push(i), d._tokenizer || (f = r.sliceStream(d), d.next || f.push(null), c && o.defineSkip(d.start), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(f), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), c = d, d = d.next;
  }
  for (d = n; ++h < a.length; )
    // Find a void token that includes a break.
    a[h][0] === "exit" && a[h - 1][0] === "enter" && a[h][1].type === a[h - 1][1].type && a[h][1].start.line !== a[h][1].end.line && (v = h + 1, k.push(v), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (o.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : k.pop(), h = k.length; h--; ) {
    const y = a.slice(k[h], k[h + 1]), E = l.pop();
    u.push([E, E + y.length - 1]), e.splice(E, 2, y);
  }
  for (u.reverse(), h = -1; ++h < u.length; )
    s[g + u[h][0]] = g + u[h][1], g += u[h][1] - u[h][0] - 1;
  return s;
}
const Js = {
  resolve: tu,
  tokenize: nu
}, eu = {
  partial: !0,
  tokenize: ru
};
function tu(e) {
  return ji(e), e;
}
function nu(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? l(a) : O(a) ? e.check(eu, o, l)(a) : (e.consume(a), i);
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
function ru(e, t, n) {
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
function zi(e, t, n, r, i, l, o, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(y) {
    return y === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(y), e.exit(l), h) : y === null || y === 32 || y === 41 || Pt(y) ? n(y) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), v(y));
  }
  function h(y) {
    return y === 62 ? (e.enter(l), e.consume(y), e.exit(l), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), d(y));
  }
  function d(y) {
    return y === 62 ? (e.exit("chunkString"), e.exit(a), h(y)) : y === null || y === 60 || O(y) ? n(y) : (e.consume(y), y === 92 ? g : d);
  }
  function g(y) {
    return y === 60 || y === 62 || y === 92 ? (e.consume(y), d) : d(y);
  }
  function v(y) {
    return !f && (y === null || y === 41 || Y(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), t(y)) : f < s && y === 40 ? (e.consume(y), f++, v) : y === 41 ? (e.consume(y), f--, v) : y === null || y === 32 || y === 40 || Pt(y) ? n(y) : (e.consume(y), y === 92 ? k : v);
  }
  function k(y) {
    return y === 40 || y === 41 || y === 92 ? (e.consume(y), v) : v(y);
  }
}
function Oi(e, t, n, r, i, l) {
  const o = this;
  let a = 0, u;
  return s;
  function s(d) {
    return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(l), f;
  }
  function f(d) {
    return a > 999 || d === null || d === 91 || d === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(d) : d === 93 ? (e.exit(l), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : O(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), f) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === null || d === 91 || d === 93 || O(d) || a++ > 999 ? (e.exit("chunkString"), f(d)) : (e.consume(d), u || (u = !q(d)), d === 92 ? h : c);
  }
  function h(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), a++, c) : c(d);
  }
}
function _i(e, t, n, r, i, l) {
  let o;
  return a;
  function a(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, u) : n(h);
  }
  function u(h) {
    return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(l), s(h));
  }
  function s(h) {
    return h === o ? (e.exit(l), u(o)) : h === null ? n(h) : O(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), Z(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), f(h));
  }
  function f(h) {
    return h === o || h === null || O(h) ? (e.exit("chunkString"), s(h)) : (e.consume(h), h === 92 ? c : f);
  }
  function c(h) {
    return h === o || h === 92 ? (e.consume(h), f) : f(h);
  }
}
function ht(e, t) {
  let n;
  return r;
  function r(i) {
    return O(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? Z(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const iu = {
  name: "definition",
  tokenize: ou
}, lu = {
  partial: !0,
  tokenize: au
};
function ou(e, t, n) {
  const r = this;
  let i;
  return l;
  function l(d) {
    return e.enter("definition"), o(d);
  }
  function o(d) {
    return Oi.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function a(d) {
    return i = we(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), u) : n(d);
  }
  function u(d) {
    return Y(d) ? ht(e, s)(d) : s(d);
  }
  function s(d) {
    return zi(
      e,
      f,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function f(d) {
    return e.attempt(lu, c, c)(d);
  }
  function c(d) {
    return q(d) ? Z(e, h, "whitespace")(d) : h(d);
  }
  function h(d) {
    return d === null || O(d) ? (e.exit("definition"), r.parser.defined.push(i), t(d)) : n(d);
  }
}
function au(e, t, n) {
  return r;
  function r(a) {
    return Y(a) ? ht(e, i)(a) : n(a);
  }
  function i(a) {
    return _i(e, l, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function l(a) {
    return q(a) ? Z(e, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || O(a) ? t(a) : n(a);
  }
}
const su = {
  name: "hardBreakEscape",
  tokenize: uu
};
function uu(e, t, n) {
  return r;
  function r(l) {
    return e.enter("hardBreakEscape"), e.consume(l), i;
  }
  function i(l) {
    return O(l) ? (e.exit("hardBreakEscape"), t(l)) : n(l);
  }
}
const cu = {
  name: "headingAtx",
  resolve: fu,
  tokenize: du
};
function fu(e, t) {
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
function du(e, t, n) {
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
const hu = [
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
], pr = ["pre", "script", "style", "textarea"], pu = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: xu,
  tokenize: yu
}, mu = {
  partial: !0,
  tokenize: ku
}, gu = {
  partial: !0,
  tokenize: bu
};
function xu(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function yu(e, t, n) {
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
    return m === 33 ? (e.consume(m), h) : m === 47 ? (e.consume(m), l = !0, v) : m === 63 ? (e.consume(m), i = 3, r.interrupt ? t : p) : se(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function h(m) {
    return m === 45 ? (e.consume(m), i = 2, d) : m === 91 ? (e.consume(m), i = 5, a = 0, g) : se(m) ? (e.consume(m), i = 4, r.interrupt ? t : p) : n(m);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), r.interrupt ? t : p) : n(m);
  }
  function g(m) {
    const he = "CDATA[";
    return m === he.charCodeAt(a++) ? (e.consume(m), a === he.length ? r.interrupt ? t : M : g) : n(m);
  }
  function v(m) {
    return se(m) ? (e.consume(m), o = String.fromCharCode(m), k) : n(m);
  }
  function k(m) {
    if (m === null || m === 47 || m === 62 || Y(m)) {
      const he = m === 47, be = o.toLowerCase();
      return !he && !l && pr.includes(be) ? (i = 1, r.interrupt ? t(m) : M(m)) : hu.includes(o.toLowerCase()) ? (i = 6, he ? (e.consume(m), y) : r.interrupt ? t(m) : M(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : l ? E(m) : b(m));
    }
    return m === 45 || ie(m) ? (e.consume(m), o += String.fromCharCode(m), k) : n(m);
  }
  function y(m) {
    return m === 62 ? (e.consume(m), r.interrupt ? t : M) : n(m);
  }
  function E(m) {
    return q(m) ? (e.consume(m), E) : w(m);
  }
  function b(m) {
    return m === 47 ? (e.consume(m), w) : m === 58 || m === 95 || se(m) ? (e.consume(m), A) : q(m) ? (e.consume(m), b) : w(m);
  }
  function A(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || ie(m) ? (e.consume(m), A) : L(m);
  }
  function L(m) {
    return m === 61 ? (e.consume(m), C) : q(m) ? (e.consume(m), L) : b(m);
  }
  function C(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), u = m, _) : q(m) ? (e.consume(m), C) : H(m);
  }
  function _(m) {
    return m === u ? (e.consume(m), u = null, V) : m === null || O(m) ? n(m) : (e.consume(m), _);
  }
  function H(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || Y(m) ? L(m) : (e.consume(m), H);
  }
  function V(m) {
    return m === 47 || m === 62 || q(m) ? b(m) : n(m);
  }
  function w(m) {
    return m === 62 ? (e.consume(m), F) : n(m);
  }
  function F(m) {
    return m === null || O(m) ? M(m) : q(m) ? (e.consume(m), F) : n(m);
  }
  function M(m) {
    return m === 45 && i === 2 ? (e.consume(m), K) : m === 60 && i === 1 ? (e.consume(m), J) : m === 62 && i === 4 ? (e.consume(m), de) : m === 63 && i === 3 ? (e.consume(m), p) : m === 93 && i === 5 ? (e.consume(m), fe) : O(m) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(mu, ye, B)(m)) : m === null || O(m) ? (e.exit("htmlFlowData"), B(m)) : (e.consume(m), M);
  }
  function B(m) {
    return e.check(gu, j, ye)(m);
  }
  function j(m) {
    return e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), P;
  }
  function P(m) {
    return m === null || O(m) ? B(m) : (e.enter("htmlFlowData"), M(m));
  }
  function K(m) {
    return m === 45 ? (e.consume(m), p) : M(m);
  }
  function J(m) {
    return m === 47 ? (e.consume(m), o = "", oe) : M(m);
  }
  function oe(m) {
    if (m === 62) {
      const he = o.toLowerCase();
      return pr.includes(he) ? (e.consume(m), de) : M(m);
    }
    return se(m) && o.length < 8 ? (e.consume(m), o += String.fromCharCode(m), oe) : M(m);
  }
  function fe(m) {
    return m === 93 ? (e.consume(m), p) : M(m);
  }
  function p(m) {
    return m === 62 ? (e.consume(m), de) : m === 45 && i === 2 ? (e.consume(m), p) : M(m);
  }
  function de(m) {
    return m === null || O(m) ? (e.exit("htmlFlowData"), ye(m)) : (e.consume(m), de);
  }
  function ye(m) {
    return e.exit("htmlFlow"), t(m);
  }
}
function bu(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return O(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : n(o);
  }
  function l(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function ku(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(bt, t, n);
  }
}
const wu = {
  name: "htmlText",
  tokenize: Cu
};
function Cu(e, t, n) {
  const r = this;
  let i, l, o;
  return a;
  function a(p) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(p), u;
  }
  function u(p) {
    return p === 33 ? (e.consume(p), s) : p === 47 ? (e.consume(p), L) : p === 63 ? (e.consume(p), b) : se(p) ? (e.consume(p), H) : n(p);
  }
  function s(p) {
    return p === 45 ? (e.consume(p), f) : p === 91 ? (e.consume(p), l = 0, g) : se(p) ? (e.consume(p), E) : n(p);
  }
  function f(p) {
    return p === 45 ? (e.consume(p), d) : n(p);
  }
  function c(p) {
    return p === null ? n(p) : p === 45 ? (e.consume(p), h) : O(p) ? (o = c, J(p)) : (e.consume(p), c);
  }
  function h(p) {
    return p === 45 ? (e.consume(p), d) : c(p);
  }
  function d(p) {
    return p === 62 ? K(p) : p === 45 ? h(p) : c(p);
  }
  function g(p) {
    const de = "CDATA[";
    return p === de.charCodeAt(l++) ? (e.consume(p), l === de.length ? v : g) : n(p);
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
  function E(p) {
    return p === null || p === 62 ? K(p) : O(p) ? (o = E, J(p)) : (e.consume(p), E);
  }
  function b(p) {
    return p === null ? n(p) : p === 63 ? (e.consume(p), A) : O(p) ? (o = b, J(p)) : (e.consume(p), b);
  }
  function A(p) {
    return p === 62 ? K(p) : b(p);
  }
  function L(p) {
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
    return p === 45 || p === 46 || p === 58 || p === 95 || ie(p) ? (e.consume(p), w) : F(p);
  }
  function F(p) {
    return p === 61 ? (e.consume(p), M) : O(p) ? (o = F, J(p)) : q(p) ? (e.consume(p), F) : V(p);
  }
  function M(p) {
    return p === null || p === 60 || p === 61 || p === 62 || p === 96 ? n(p) : p === 34 || p === 39 ? (e.consume(p), i = p, B) : O(p) ? (o = M, J(p)) : q(p) ? (e.consume(p), M) : (e.consume(p), j);
  }
  function B(p) {
    return p === i ? (e.consume(p), i = void 0, P) : p === null ? n(p) : O(p) ? (o = B, J(p)) : (e.consume(p), B);
  }
  function j(p) {
    return p === null || p === 34 || p === 39 || p === 60 || p === 61 || p === 96 ? n(p) : p === 47 || p === 62 || Y(p) ? V(p) : (e.consume(p), j);
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
const Rn = {
  name: "labelEnd",
  resolveAll: Tu,
  resolveTo: Iu,
  tokenize: Au
}, vu = {
  tokenize: Lu
}, Su = {
  tokenize: Pu
}, Eu = {
  tokenize: Du
};
function Tu(e) {
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
function Iu(e, t) {
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
function Au(e, t, n) {
  const r = this;
  let i = r.events.length, l, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      l = r.events[i][1];
      break;
    }
  return a;
  function a(h) {
    return l ? l._inactive ? c(h) : (o = r.parser.defined.includes(we(r.sliceSerialize({
      start: l.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(h);
  }
  function u(h) {
    return h === 40 ? e.attempt(vu, f, o ? f : c)(h) : h === 91 ? e.attempt(Su, f, o ? s : c)(h) : o ? f(h) : c(h);
  }
  function s(h) {
    return e.attempt(Eu, f, c)(h);
  }
  function f(h) {
    return t(h);
  }
  function c(h) {
    return l._balanced = !0, n(h);
  }
}
function Lu(e, t, n) {
  return r;
  function r(c) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
  }
  function i(c) {
    return Y(c) ? ht(e, l)(c) : l(c);
  }
  function l(c) {
    return c === 41 ? f(c) : zi(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function o(c) {
    return Y(c) ? ht(e, u)(c) : f(c);
  }
  function a(c) {
    return n(c);
  }
  function u(c) {
    return c === 34 || c === 39 || c === 40 ? _i(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function s(c) {
    return Y(c) ? ht(e, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), t) : n(c);
  }
}
function Pu(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return Oi.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function l(a) {
    return r.parser.defined.includes(we(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function Du(e, t, n) {
  return r;
  function r(l) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i;
  }
  function i(l) {
    return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), t) : n(l);
  }
}
const Fu = {
  name: "labelStartImage",
  resolveAll: Rn.resolveAll,
  tokenize: Mu
};
function Mu(e, t, n) {
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
const Ru = {
  name: "labelStartLink",
  resolveAll: Rn.resolveAll,
  tokenize: ju
};
function ju(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l;
  }
  function l(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const Xt = {
  name: "lineEnding",
  tokenize: zu
};
function zu(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), Z(e, t, "linePrefix");
  }
}
const At = {
  name: "thematicBreak",
  tokenize: Ou
};
function Ou(e, t, n) {
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
    tokenize: $u
  },
  exit: Hu,
  name: "list",
  tokenize: Nu
}, _u = {
  partial: !0,
  tokenize: qu
}, Bu = {
  partial: !0,
  tokenize: Vu
};
function Nu(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(d) {
    const g = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (g === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : yn(d)) {
      if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
        _container: !0
      })), g === "listUnordered")
        return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(At, n, s)(d) : s(d);
      if (!r.interrupt || d === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(d);
    }
    return n(d);
  }
  function u(d) {
    return yn(d) && ++o < 10 ? (e.consume(d), u) : (!r.interrupt || o < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), s(d)) : n(d);
  }
  function s(d) {
    return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(
      bt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : f,
      e.attempt(_u, h, c)
    );
  }
  function f(d) {
    return r.containerState.initialBlankLine = !0, l++, h(d);
  }
  function c(d) {
    return q(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), h) : n(d);
  }
  function h(d) {
    return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d);
  }
}
function $u(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(bt, i, l);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Z(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function l(a) {
    return r.containerState.furtherBlankLines || !q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Bu, t, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, Z(e, e.attempt(ue, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Vu(e, t, n) {
  const r = this;
  return Z(e, i, "listItemIndent", r.containerState.size + 1);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(l) : n(l);
  }
}
function Hu(e) {
  e.exit(this.containerState.type);
}
function qu(e, t, n) {
  const r = this;
  return Z(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return !q(l) && o && o[1].type === "listItemPrefixWhitespace" ? t(l) : n(l);
  }
}
const mr = {
  name: "setextUnderline",
  resolveTo: Uu,
  tokenize: Wu
};
function Uu(e, t) {
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
function Wu(e, t, n) {
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
const Zu = {
  tokenize: Ku
};
function Ku(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    bt,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, Z(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Js, i)), "linePrefix"))
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
const Gu = {
  resolveAll: Ni()
}, Xu = Bi("string"), Yu = Bi("text");
function Bi(e) {
  return {
    resolveAll: Ni(e === "text" ? Qu : void 0),
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
      let h = -1;
      if (c)
        for (; ++h < c.length; ) {
          const d = c[h];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Ni(e) {
  return t;
  function t(n, r) {
    let i = -1, l;
    for (; ++i <= n.length; )
      l === void 0 ? n[i] && n[i][1].type === "data" && (l = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== l + 2 && (n[l][1].end = n[i - 1][1].end, n.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
    return e ? e(n, r) : n;
  }
}
function Qu(e, t) {
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
const Ju = {
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
  62: Fi
}, ec = {
  91: iu
}, tc = {
  [-2]: Gt,
  [-1]: Gt,
  32: Gt
}, nc = {
  35: cu,
  42: At,
  45: [mr, At],
  60: pu,
  61: mr,
  95: At,
  96: hr,
  126: hr
}, rc = {
  38: Ri,
  92: Mi
}, ic = {
  [-5]: Xt,
  [-4]: Xt,
  [-3]: Xt,
  33: Fu,
  38: Ri,
  42: bn,
  60: [Rs, wu],
  91: Ru,
  92: [su, Mi],
  93: Rn,
  95: bn,
  96: Zs
}, lc = {
  null: [bn, Gu]
}, oc = {
  null: [42, 95]
}, ac = {
  null: []
}, sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: oc,
  contentInitial: ec,
  disable: ac,
  document: Ju,
  flow: nc,
  flowInitial: tc,
  insideSpan: lc,
  string: rc,
  text: ic
}, Symbol.toStringTag, { value: "Module" }));
function uc(e, t, n) {
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
    attempt: _(L),
    check: _(C),
    consume: E,
    enter: b,
    exit: A,
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
    sliceSerialize: h,
    sliceStream: d,
    write: c
  };
  let f = t.tokenize.call(s, u);
  return t.resolveAll && l.push(t), s;
  function c(F) {
    return o = xe(o, F), k(), o[o.length - 1] !== null ? [] : (H(t, 0), s.events = jt(l, s.events, s), s.events);
  }
  function h(F, M) {
    return fc(d(F), M);
  }
  function d(F) {
    return cc(o, F);
  }
  function g() {
    const {
      _bufferIndex: F,
      _index: M,
      line: B,
      column: j,
      offset: P
    } = r;
    return {
      _bufferIndex: F,
      _index: M,
      line: B,
      column: j,
      offset: P
    };
  }
  function v(F) {
    i[F.line] = F.column, w();
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
    f = f(F);
  }
  function E(F) {
    O(F) ? (r.line++, r.column = 1, r.offset += F === -3 ? 2 : 1, w()) : F !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = F;
  }
  function b(F, M) {
    const B = M || {};
    return B.type = F, B.start = g(), s.events.push(["enter", B, s]), a.push(B), B;
  }
  function A(F) {
    const M = a.pop();
    return M.end = g(), s.events.push(["exit", M, s]), M;
  }
  function L(F, M) {
    H(F, M.from);
  }
  function C(F, M) {
    M.restore();
  }
  function _(F, M) {
    return B;
    function B(j, P, K) {
      let J, oe, fe, p;
      return Array.isArray(j) ? (
        /* c8 ignore next 1 */
        ye(j)
      ) : "tokenize" in j ? (
        // Looks like a construct.
        ye([
          /** @type {Construct} */
          j
        ])
      ) : de(j);
      function de(te) {
        return Ee;
        function Ee(Ce) {
          const De = Ce !== null && te[Ce], Fe = Ce !== null && te.null, qe = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(De) ? De : De ? [De] : [],
            ...Array.isArray(Fe) ? Fe : Fe ? [Fe] : []
          ];
          return ye(qe)(Ce);
        }
      }
      function ye(te) {
        return J = te, oe = 0, te.length === 0 ? K : m(te[oe]);
      }
      function m(te) {
        return Ee;
        function Ee(Ce) {
          return p = V(), fe = te, te.partial || (s.currentConstruct = te), te.name && s.parser.constructs.disable.null.includes(te.name) ? be() : te.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            M ? Object.assign(Object.create(s), M) : s,
            u,
            he,
            be
          )(Ce);
        }
      }
      function he(te) {
        return F(fe, p), P;
      }
      function be(te) {
        return p.restore(), ++oe < J.length ? m(J[oe]) : K;
      }
    }
  }
  function H(F, M) {
    F.resolveAll && !l.includes(F) && l.push(F), F.resolve && ge(s.events, M, s.events.length - M, F.resolve(s.events.slice(M), s)), F.resolveTo && (s.events = F.resolveTo(s.events, s));
  }
  function V() {
    const F = g(), M = s.previous, B = s.currentConstruct, j = s.events.length, P = Array.from(a);
    return {
      from: j,
      restore: K
    };
    function K() {
      r = F, s.previous = M, s.currentConstruct = B, s.events.length = j, a = P, w();
    }
  }
  function w() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function cc(e, t) {
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
function fc(e, t) {
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
function dc(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Pi([sc, ...(e || {}).extensions || []])
    ),
    content: i(Is),
    defined: [],
    document: i(Ls),
    flow: i(Zu),
    lazy: {},
    string: i(Xu),
    text: i(Yu)
  };
  return r;
  function i(l) {
    return o;
    function o(a) {
      return uc(r, l, a);
    }
  }
}
function hc(e) {
  for (; !ji(e); )
    ;
  return e;
}
const gr = /[\0\t\n\r]/g;
function pc() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(l, o, a) {
    const u = [];
    let s, f, c, h, d;
    for (l = t + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), c = 0, t = "", n && (l.charCodeAt(0) === 65279 && c++, n = void 0); c < l.length; ) {
      if (gr.lastIndex = c, s = gr.exec(l), h = s && s.index !== void 0 ? s.index : l.length, d = l.charCodeAt(h), !s) {
        t = l.slice(c);
        break;
      }
      if (d === 10 && c === h && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), c < h && (u.push(l.slice(c, h)), e += h - c), d) {
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
      c = h + 1;
    }
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const mc = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function gc(e) {
  return e.replace(mc, xc);
}
function xc(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), l = i === 120 || i === 88;
    return Di(n.slice(l ? 2 : 1), l ? 16 : 10);
  }
  return Mn(n) || e;
}
const $i = {}.hasOwnProperty;
function yc(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), bc(n)(hc(dc(n).document().write(pc()(e, t, !0))));
}
function bc(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: l(lt),
      autolinkProtocol: V,
      autolinkEmail: V,
      atxHeading: l(nt),
      blockQuote: l(Fe),
      characterEscape: V,
      characterReference: V,
      codeFenced: l(qe),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: l(qe, o),
      codeText: l(Bt, o),
      codeTextData: V,
      data: V,
      codeFlowValue: V,
      definition: l(Nt),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: l($t),
      hardBreakEscape: l(rt),
      hardBreakTrailing: l(rt),
      htmlFlow: l(it, o),
      htmlFlowData: V,
      htmlText: l(it, o),
      htmlTextData: V,
      image: l(Ct),
      label: o,
      link: l(lt),
      listItem: l(W),
      listItemValue: h,
      listOrdered: l(R, c),
      listUnordered: l(R),
      paragraph: l(N),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: l(nt),
      strong: l(G),
      thematicBreak: l(re)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: L,
      autolink: u(),
      autolinkEmail: De,
      autolinkProtocol: Ce,
      blockQuote: u(),
      characterEscapeValue: w,
      characterReferenceMarkerHexadecimal: be,
      characterReferenceMarkerNumeric: be,
      characterReferenceValue: te,
      characterReference: Ee,
      codeFenced: u(k),
      codeFencedFence: v,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: g,
      codeFlowValue: w,
      codeIndented: u(y),
      codeText: u(P),
      codeTextData: w,
      data: w,
      definition: u(),
      definitionDestinationString: A,
      definitionLabelString: E,
      definitionTitleString: b,
      emphasis: u(),
      hardBreakEscape: u(M),
      hardBreakTrailing: u(M),
      htmlFlow: u(B),
      htmlFlowData: w,
      htmlText: u(j),
      htmlTextData: w,
      image: u(J),
      label: fe,
      labelText: oe,
      lineEnding: F,
      link: u(K),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: he,
      resourceDestinationString: p,
      resourceTitleString: de,
      resource: ye,
      setextHeading: u(H),
      setextHeadingLineSequence: _,
      setextHeadingText: C,
      strong: u(),
      thematicBreak: u()
    }
  };
  Vi(t, (e || {}).mdastExtensions || []);
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
      $i.call(ke, S[X][1].type) && ke[S[X][1].type].call(Object.assign({
        sliceSerialize: S[X][2].sliceSerialize
      }, z), S[X][1]);
    }
    if (z.tokenStack.length > 0) {
      const ke = z.tokenStack[z.tokenStack.length - 1];
      (ke[1] || xr).call(z, void 0, ke[0]);
    }
    for (I.position = {
      start: Me(S.length > 0 ? S[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Me(S.length > 0 ? S[S.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, X = -1; ++X < t.transforms.length; )
      I = t.transforms[X](I) || I;
    return I;
  }
  function i(S, I, z) {
    let U = I - 1, X = -1, ke = !1, _e, Te, ot, at;
    for (; ++U <= z; ) {
      const pe = S[U];
      switch (pe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          pe[0] === "enter" ? X++ : X--, at = void 0;
          break;
        }
        case "lineEndingBlank": {
          pe[0] === "enter" && (_e && !at && !X && !ot && (ot = U), at = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          at = void 0;
      }
      if (!X && pe[0] === "enter" && pe[1].type === "listItemPrefix" || X === -1 && pe[0] === "exit" && (pe[1].type === "listUnordered" || pe[1].type === "listOrdered")) {
        if (_e) {
          let Ue = U;
          for (Te = void 0; Ue--; ) {
            const Ie = S[Ue];
            if (Ie[1].type === "lineEnding" || Ie[1].type === "lineEndingBlank") {
              if (Ie[0] === "exit") continue;
              Te && (S[Te][1].type = "lineEndingBlank", ke = !0), Ie[1].type = "lineEnding", Te = Ue;
            } else if (!(Ie[1].type === "linePrefix" || Ie[1].type === "blockQuotePrefix" || Ie[1].type === "blockQuotePrefixWhitespace" || Ie[1].type === "blockQuoteMarker" || Ie[1].type === "listItemIndent")) break;
          }
          ot && (!Te || ot < Te) && (_e._spread = !0), _e.end = Object.assign({}, Te ? S[Te][1].start : pe[1].end), S.splice(Te || U, 0, ["exit", _e, pe[2]]), U++, z++;
        }
        if (pe[1].type === "listItemPrefix") {
          const Ue = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, pe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          _e = Ue, S.splice(U, 0, ["enter", Ue, pe[2]]), U++, z++, ot = void 0, at = !0;
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
      start: Me(I.start),
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
      U[0].type !== S.type && (I ? I.call(this, S, U[0]) : (U[1] || xr).call(this, S, U[0]));
    else throw new Error("Cannot close `" + S.type + "` (" + dt({
      start: S.start,
      end: S.end
    }) + "): it’s not open");
    z.position.end = Me(S.end);
  }
  function f() {
    return Fn(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h(S) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(S), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function d() {
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
  function E(S) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = we(this.sliceSerialize(S)).toLowerCase();
  }
  function b() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function A() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = S;
  }
  function L(S) {
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
      start: Me(S.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, z.push(U)), this.stack.push(U);
  }
  function w(S) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(S), I.position.end = Me(S.end);
  }
  function F(S) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const z = I.children[I.children.length - 1];
      z.position.end = Me(S.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && (V.call(this, S), w.call(this, S));
  }
  function M() {
    this.data.atHardBreak = !0;
  }
  function B() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = S;
  }
  function j() {
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
    z.label = gc(I), z.identifier = we(I).toLowerCase();
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
  function de() {
    const S = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = S;
  }
  function ye() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function he(S) {
    const I = this.resume(), z = this.stack[this.stack.length - 1];
    z.label = I, z.identifier = we(this.sliceSerialize(S)).toLowerCase(), this.data.referenceType = "full";
  }
  function be(S) {
    this.data.characterReferenceType = S.type;
  }
  function te(S) {
    const I = this.sliceSerialize(S), z = this.data.characterReferenceType;
    let U;
    z ? (U = Di(I, z === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : U = Mn(I);
    const X = this.stack[this.stack.length - 1];
    X.value += U;
  }
  function Ee(S) {
    const I = this.stack.pop();
    I.position.end = Me(S.end);
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
  function Fe() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function qe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Bt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Nt() {
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
  function nt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function rt() {
    return {
      type: "break"
    };
  }
  function it() {
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
  function lt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function R(S) {
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
function Me(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Vi(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Vi(e, r) : kc(e, r);
  }
}
function kc(e, t) {
  let n;
  for (n in t)
    if ($i.call(t, n))
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
function xr(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + dt({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + dt({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + dt({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function wc(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return yc(r, {
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
function Cc(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function vc(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Sc(e, t) {
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
function Ec(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Tc(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ic(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = tt(r.toLowerCase()), l = e.footnoteOrder.indexOf(r);
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
function Ac(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lc(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Hi(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), l = i[0];
  l && l.type === "text" ? l.value = "[" + l.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function Pc(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Hi(e, t);
  const i = { src: tt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, l), e.applyData(t, l);
}
function Dc(e, t) {
  const n = { src: tt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Fc(e, t) {
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
function Mc(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Hi(e, t);
  const i = { href: tt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const l = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Rc(e, t) {
  const n = { href: tt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function jc(e, t, n) {
  const r = e.all(t), i = n ? zc(n) : qi(t), l = {}, o = [];
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
function zc(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = qi(n[r]);
  }
  return t;
}
function qi(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Oc(e, t) {
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
function _c(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Bc(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Nc(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function $c(e, t) {
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
    }, a = An(t.children[1]), u = Ci(t.children[t.children.length - 1]);
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
function Vc(e, t, n) {
  const r = n ? n.children : void 0, l = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const c = t.children[u], h = {}, d = o ? o[u] : void 0;
    d && (h.align = d);
    let g = { type: "element", tagName: l, properties: h, children: [] };
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
function Hc(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const yr = 9, br = 32;
function qc(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const l = [];
  for (; r; )
    l.push(
      kr(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return l.push(kr(t.slice(i), i > 0, !1)), l.join("");
}
function kr(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let l = e.codePointAt(r);
    for (; l === yr || l === br; )
      r++, l = e.codePointAt(r);
  }
  if (n) {
    let l = e.codePointAt(i - 1);
    for (; l === yr || l === br; )
      i--, l = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Uc(e, t) {
  const n = { type: "text", value: qc(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Wc(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Zc = {
  blockquote: Cc,
  break: vc,
  code: Sc,
  delete: Ec,
  emphasis: Tc,
  footnoteReference: Ic,
  heading: Ac,
  html: Lc,
  imageReference: Pc,
  image: Dc,
  inlineCode: Fc,
  linkReference: Mc,
  link: Rc,
  listItem: jc,
  list: Oc,
  paragraph: _c,
  // @ts-expect-error: root is different, but hard to type.
  root: Bc,
  strong: Nc,
  table: $c,
  tableCell: Hc,
  tableRow: Vc,
  text: Uc,
  thematicBreak: Wc,
  toml: St,
  yaml: St,
  definition: St,
  footnoteDefinition: St
};
function St() {
}
const Ui = -1, zt = 0, pt = 1, Dt = 2, jn = 3, zn = 4, On = 5, _n = 6, Wi = 7, Zi = 8, wr = typeof self == "object" ? self : globalThis, Kc = (e, t) => {
  const n = (i, l) => (e.set(l, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [l, o] = t[i];
    switch (l) {
      case zt:
      case Ui:
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
      case jn:
        return n(new Date(o), i);
      case zn: {
        const { source: a, flags: u } = o;
        return n(new RegExp(a, u), i);
      }
      case On: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of o)
          a.set(r(u), r(s));
        return a;
      }
      case _n: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of o)
          a.add(r(u));
        return a;
      }
      case Wi: {
        const { name: a, message: u } = o;
        return n(new wr[a](u), i);
      }
      case Zi:
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
    return n(new wr[l](o), i);
  };
  return r;
}, Cr = (e) => Kc(/* @__PURE__ */ new Map(), e)(0), Ze = "", { toString: Gc } = {}, { keys: Xc } = Object, ft = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [zt, t];
  const n = Gc.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [pt, Ze];
    case "Object":
      return [Dt, Ze];
    case "Date":
      return [jn, Ze];
    case "RegExp":
      return [zn, Ze];
    case "Map":
      return [On, Ze];
    case "Set":
      return [_n, Ze];
    case "DataView":
      return [pt, n];
  }
  return n.includes("Array") ? [pt, n] : n.includes("Error") ? [Wi, n] : [Dt, n];
}, Et = ([e, t]) => e === zt && (t === "function" || t === "symbol"), Yc = (e, t, n, r) => {
  const i = (o, a) => {
    const u = r.push(o) - 1;
    return n.set(a, u), u;
  }, l = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, u] = ft(o);
    switch (a) {
      case zt: {
        let f = o;
        switch (u) {
          case "bigint":
            a = Zi, f = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            f = null;
            break;
          case "undefined":
            return i([Ui], o);
        }
        return i([a, f], o);
      }
      case pt: {
        if (u) {
          let h = o;
          return u === "DataView" ? h = new Uint8Array(o.buffer) : u === "ArrayBuffer" && (h = new Uint8Array(o)), i([u, [...h]], o);
        }
        const f = [], c = i([a, f], o);
        for (const h of o)
          f.push(l(h));
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
        for (const h of Xc(o))
          (e || !Et(ft(o[h]))) && f.push([l(h), l(o[h])]);
        return c;
      }
      case jn:
        return i([a, o.toISOString()], o);
      case zn: {
        const { source: f, flags: c } = o;
        return i([a, { source: f, flags: c }], o);
      }
      case On: {
        const f = [], c = i([a, f], o);
        for (const [h, d] of o)
          (e || !(Et(ft(h)) || Et(ft(d)))) && f.push([l(h), l(d)]);
        return c;
      }
      case _n: {
        const f = [], c = i([a, f], o);
        for (const h of o)
          (e || !Et(ft(h))) && f.push(l(h));
        return c;
      }
    }
    const { message: s } = o;
    return i([a, { name: u, message: s }], o);
  };
  return l;
}, vr = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return Yc(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, gt = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Cr(vr(e, t)) : structuredClone(e)
) : (e, t) => Cr(vr(e, t));
function Qc(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function Jc(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function ef(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Qc, r = e.options.footnoteBackLabel || Jc, i = e.options.footnoteLabel || "Footnotes", l = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const f = e.all(s), c = String(s.identifier).toUpperCase(), h = tt(c.toLowerCase());
    let d = 0;
    const g = [], v = e.footnoteCounts.get(c);
    for (; v !== void 0 && ++d <= v; ) {
      g.length > 0 && g.push({ type: "text", value: " " });
      let E = typeof n == "string" ? n : n(u, d);
      typeof E == "string" && (E = { type: "text", value: E }), g.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (d > 1 ? "-" + d : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, d),
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
    const y = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
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
const Ot = (
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
      return lf;
    if (typeof e == "function")
      return _t(e);
    if (typeof e == "object")
      return Array.isArray(e) ? tf(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        nf(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return rf(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function tf(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Ot(e[n]);
  return _t(r);
  function r(...i) {
    let l = -1;
    for (; ++l < t.length; )
      if (t[l].apply(this, i)) return !0;
    return !1;
  }
}
function nf(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return _t(n);
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
function rf(e) {
  return _t(t);
  function t(n) {
    return n && n.type === e;
  }
}
function _t(e) {
  return t;
  function t(n, r, i) {
    return !!(of(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function lf() {
  return !0;
}
function of(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ki = [], af = !0, kn = !1, sf = "skip";
function Gi(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const l = Ot(i), o = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, f) {
    const c = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof c.type == "string") {
      const d = (
        // `hast`
        typeof c.tagName == "string" ? c.tagName : (
          // `xast`
          typeof c.name == "string" ? c.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (u.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let d = Ki, g, v, k;
      if ((!t || l(u, s, f[f.length - 1] || void 0)) && (d = uf(n(u, f)), d[0] === kn))
        return d;
      if ("children" in u && u.children) {
        const y = (
          /** @type {UnistParent} */
          u
        );
        if (y.children && d[0] !== sf)
          for (v = (r ? y.children.length : -1) + o, k = f.concat(y); v > -1 && v < y.children.length; ) {
            const E = y.children[v];
            if (g = a(E, v, k)(), g[0] === kn)
              return g;
            v = typeof g[1] == "number" ? g[1] : v + o;
          }
      }
      return d;
    }
  }
}
function uf(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [af, e] : e == null ? Ki : [e];
}
function Bn(e, t, n, r) {
  let i, l, o;
  typeof t == "function" && typeof n != "function" ? (l = void 0, o = t, i = n) : (l = t, o = n, i = r), Gi(e, l, a, i);
  function a(u, s) {
    const f = s[s.length - 1], c = f ? f.children.indexOf(u) : void 0;
    return o(u, c, f);
  }
}
const wn = {}.hasOwnProperty, cf = {};
function ff(e, t) {
  const n = t || cf, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), o = { ...Zc, ...n.handlers }, a = {
    all: s,
    applyData: hf,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: l,
    footnoteOrder: [],
    handlers: o,
    one: u,
    options: n,
    patch: df,
    wrap: mf
  };
  return Bn(e, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, h = String(f.identifier).toUpperCase();
      c.has(h) || c.set(h, f);
    }
  }), a;
  function u(f, c) {
    const h = f.type, d = a.handlers[h];
    if (wn.call(a.handlers, h) && d)
      return d(a, f, c);
    if (a.options.passThrough && a.options.passThrough.includes(h)) {
      if ("children" in f) {
        const { children: v, ...k } = f, y = gt(k);
        return y.children = a.all(f), y;
      }
      return gt(f);
    }
    return (a.options.unknownHandler || pf)(a, f, c);
  }
  function s(f) {
    const c = [];
    if ("children" in f) {
      const h = f.children;
      let d = -1;
      for (; ++d < h.length; ) {
        const g = a.one(h[d], f);
        if (g) {
          if (d && h[d - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = Sr(g.value)), !Array.isArray(g) && g.type === "element")) {
            const v = g.children[0];
            v && v.type === "text" && (v.value = Sr(v.value));
          }
          Array.isArray(g) ? c.push(...g) : c.push(g);
        }
      }
    }
    return c;
  }
}
function df(e, t) {
  e.position && (t.position = Si(e));
}
function hf(e, t) {
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
function pf(e, t) {
  const n = t.data || {}, r = "value" in t && !(wn.call(n, "hProperties") || wn.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function mf(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Sr(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Er(e, t) {
  const n = ff(e, t), r = n.one(e, void 0), i = ef(n), l = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && l.children.push({ type: "text", value: `
` }, i), l;
}
function gf(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Er(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Er(n, { file: r, ...e || t })
    );
  };
}
function Tr(e) {
  if (e)
    throw e;
}
var Yt, Ir;
function xf() {
  if (Ir) return Yt;
  Ir = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, l = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var f = e.call(s, "constructor"), c = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !f && !c)
      return !1;
    var h;
    for (h in s)
      ;
    return typeof h > "u" || e.call(s, h);
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
  return Yt = function u() {
    var s, f, c, h, d, g, v = arguments[0], k = 1, y = arguments.length, E = !1;
    for (typeof v == "boolean" && (E = v, v = arguments[1] || {}, k = 2), (v == null || typeof v != "object" && typeof v != "function") && (v = {}); k < y; ++k)
      if (s = arguments[k], s != null)
        for (f in s)
          c = a(v, f), h = a(s, f), v !== h && (E && h && (l(h) || (d = i(h))) ? (d ? (d = !1, g = c && i(c) ? c : []) : g = c && l(c) ? c : {}, o(v, { name: f, newValue: u(E, g, h) })) : typeof h < "u" && o(v, { name: f, newValue: h }));
    return v;
  }, Yt;
}
var yf = xf();
const Qt = /* @__PURE__ */ Gr(yf);
function Cn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function bf() {
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
      i = s, f ? kf(f, a)(...s) : o(null, ...s);
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
function kf(e, t) {
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
const ve = { basename: wf, dirname: Cf, extname: vf, join: Sf, sep: "/" };
function wf(e, t) {
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
function Cf(e) {
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
function vf(e) {
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
function Sf(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    kt(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Ef(n);
}
function Ef(e) {
  kt(e);
  const t = e.codePointAt(0) === 47;
  let n = Tf(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Tf(e, t) {
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
const If = { cwd: Af };
function Af() {
  return "/";
}
function vn(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Lf(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!vn(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Pf(e);
}
function Pf(e) {
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
const Jt = (
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
class Xi {
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
    t ? vn(t) ? n = { path: t } : typeof t == "string" || Df(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : If.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Jt.length; ) {
      const l = Jt[r];
      l in n && n[l] !== void 0 && n[l] !== null && (this[l] = l === "history" ? [...n[l]] : n[l]);
    }
    let i;
    for (i in n)
      Jt.includes(i) || (this[i] = n[i]);
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
    tn(t, "basename"), en(t, "basename"), this.path = ve.join(this.dirname || "", t);
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
    Ar(this.basename, "dirname"), this.path = ve.join(t || "", this.basename);
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
    if (en(t, "extname"), Ar(this.dirname, "extname"), t) {
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
    vn(t) && (t = Lf(t)), tn(t, "path"), this.path !== t && this.history.push(t);
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
    tn(t, "stem"), en(t, "stem"), this.path = ve.join(this.dirname || "", t + (this.extname || ""));
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
function en(e, t) {
  if (e && e.includes(ve.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + ve.sep + "`"
    );
}
function tn(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ar(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Df(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Ff = (
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
), Mf = {}.hasOwnProperty;
class Nn extends Ff {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = bf();
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
      new Nn()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Qt(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (ln("data", this.frozen), this.namespace[t] = n, this) : Mf.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (ln("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Tt(t), r = this.parser || this.Parser;
    return nn("parse", r), r(String(n), n);
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
    return this.freeze(), nn("process", this.parser || this.Parser), rn("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(l, o) {
      const a = Tt(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(f, c, h) {
        if (f || !c || !h)
          return s(f);
        const d = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          c
        ), g = r.stringify(d, h);
        zf(g) ? h.value = g : h.result = g, s(
          f,
          /** @type {VFileWithOutput<CompileResult>} */
          h
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
    return this.freeze(), nn("processSync", this.parser || this.Parser), rn("processSync", this.compiler || this.Compiler), this.process(t, i), Pr("processSync", "process", n), r;
    function i(l, o) {
      n = !0, Tr(l), r = o;
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
    Lr(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? l(void 0, r) : new Promise(l);
    function l(o, a) {
      const u = Tt(n);
      i.run(t, u, s);
      function s(f, c, h) {
        const d = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          c || t
        );
        f ? a(f) : o ? o(d) : r(void 0, d, h);
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
    return this.run(t, n, l), Pr("runSync", "run", r), i;
    function l(o, a) {
      Tr(o), i = a, r = !0;
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
    const r = Tt(n), i = this.compiler || this.Compiler;
    return rn("stringify", i), Lr(t), i(t, r);
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
    if (ln("use", this.frozen), t != null) if (typeof t == "function")
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
      a(s.plugins), s.settings && (i.settings = Qt(!0, i.settings, s.settings));
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
      let c = -1, h = -1;
      for (; ++c < r.length; )
        if (r[c][0] === s) {
          h = c;
          break;
        }
      if (h === -1)
        r.push([s, ...f]);
      else if (f.length > 0) {
        let [d, ...g] = f;
        const v = r[h][1];
        Cn(v) && Cn(d) && (d = Qt(!0, v, d)), r[h] = [s, d, ...g];
      }
    }
  }
}
const Rf = new Nn().freeze();
function nn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function rn(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function ln(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Lr(e) {
  if (!Cn(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Pr(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Tt(e) {
  return jf(e) ? e : new Xi(e);
}
function jf(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function zf(e) {
  return typeof e == "string" || Of(e);
}
function Of(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const _f = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Dr = [], Fr = { allowDangerousHtml: !0 }, Bf = /^(https?|ircs?|mailto|xmpp)$/i, Nf = [
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
function $f(e) {
  const t = Vf(e), n = Hf(e);
  return qf(t.runSync(t.parse(n), n), e);
}
function Vf(e) {
  const t = e.rehypePlugins || Dr, n = e.remarkPlugins || Dr, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Fr } : Fr;
  return Rf().use(wc).use(n).use(gf, r).use(t);
}
function Hf(e) {
  const t = e.children || "", n = new Xi();
  return typeof t == "string" && (n.value = t), n;
}
function qf(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, l = t.disallowedElements, o = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || Uf;
  for (const f of Nf)
    Object.hasOwn(t, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + _f + f.id, void 0);
  return Bn(e, s), is(e, {
    Fragment: x.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: x.jsx,
    jsxs: x.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function s(f, c, h) {
    if (f.type === "raw" && h && typeof c == "number")
      return o ? h.children.splice(c, 1) : h.children[c] = { type: "text", value: f.value }, c;
    if (f.type === "element") {
      let d;
      for (d in Kt)
        if (Object.hasOwn(Kt, d) && Object.hasOwn(f.properties, d)) {
          const g = f.properties[d], v = Kt[d];
          (v === null || v.includes(f.tagName)) && (f.properties[d] = u(String(g || ""), d, f));
        }
    }
    if (f.type === "element") {
      let d = n ? !n.includes(f.tagName) : l ? l.includes(f.tagName) : !1;
      if (!d && r && typeof c == "number" && (d = !r(f, c, h)), d && h && typeof c == "number")
        return a && f.children ? h.children.splice(c, 1, ...f.children) : h.children.splice(c, 1), c;
    }
  }
}
function Uf(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Bf.test(e.slice(0, t)) ? e : ""
  );
}
const Be = ["ariaDescribedBy", "ariaLabel", "ariaLabelledBy"], Mr = {
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
      ...Be,
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
    dl: [...Be],
    // Note: this is used by GFM footnotes.
    h2: [["className", "sr-only"]],
    img: [...Be, "longDesc", "src"],
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
    ol: [...Be, ["className", "contains-task-list"]],
    q: ["cite"],
    section: ["dataFootnotes", ["className", "footnotes"]],
    source: ["srcSet"],
    summary: [...Be],
    table: [...Be],
    // Note: this class is not normally allowed by GH, when manually writing
    // `ol` as HTML in markdown, they adds it some other way.
    // We can’t do that, so we have to allow it.
    ul: [...Be, ["className", "contains-task-list"]],
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
}, Re = {}.hasOwnProperty;
function Wf(e, t) {
  let n = { type: "root", children: [] };
  const r = {
    schema: t ? { ...Mr, ...t } : Mr,
    stack: []
  }, i = Yi(r, e);
  return i && (Array.isArray(i) ? i.length === 1 ? n = i[0] : n.children = i : n = i), n;
}
function Yi(e, t) {
  if (t && typeof t == "object") {
    const n = (
      /** @type {Record<string, Readonly<unknown>>} */
      t
    );
    switch (typeof n.type == "string" ? n.type : "") {
      case "comment":
        return Zf(e, n);
      case "doctype":
        return Kf(e, n);
      case "element":
        return Gf(e, n);
      case "root":
        return Xf(e, n);
      case "text":
        return Yf(e, n);
    }
  }
}
function Zf(e, t) {
  if (e.schema.allowComments) {
    const n = typeof t.value == "string" ? t.value : "", r = n.indexOf("-->"), l = { type: "comment", value: r < 0 ? n : n.slice(0, r) };
    return wt(l, t), l;
  }
}
function Kf(e, t) {
  if (e.schema.allowDoctypes) {
    const n = { type: "doctype" };
    return wt(n, t), n;
  }
}
function Gf(e, t) {
  const n = typeof t.tagName == "string" ? t.tagName : "";
  e.stack.push(n);
  const r = (
    /** @type {Array<ElementContent>} */
    Qi(e, t.children)
  ), i = Qf(e, t.properties);
  e.stack.pop();
  let l = !1;
  if (n && n !== "*" && (!e.schema.tagNames || e.schema.tagNames.includes(n)) && (l = !0, e.schema.ancestors && Re.call(e.schema.ancestors, n))) {
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
function Xf(e, t) {
  const r = { type: "root", children: (
    /** @type {Array<RootContent>} */
    Qi(e, t.children)
  ) };
  return wt(r, t), r;
}
function Yf(e, t) {
  const r = { type: "text", value: typeof t.value == "string" ? t.value : "" };
  return wt(r, t), r;
}
function Qi(e, t) {
  const n = [];
  if (Array.isArray(t)) {
    const r = (
      /** @type {Array<Readonly<unknown>>} */
      t
    );
    let i = -1;
    for (; ++i < r.length; ) {
      const l = Yi(e, r[i]);
      l && (Array.isArray(l) ? n.push(...l) : n.push(l));
    }
  }
  return n;
}
function Qf(e, t) {
  const n = e.stack[e.stack.length - 1], r = e.schema.attributes, i = e.schema.required, l = r && Re.call(r, n) ? r[n] : void 0, o = r && Re.call(r, "*") ? r["*"] : void 0, a = (
    /** @type {Readonly<Record<string, Readonly<unknown>>>} */
    t && typeof t == "object" ? t : {}
  ), u = {};
  let s;
  for (s in a)
    if (Re.call(a, s)) {
      const f = a[s];
      let c = Rr(
        e,
        jr(l, s),
        s,
        f
      );
      c == null && (c = Rr(e, jr(o, s), s, f)), c != null && (u[s] = c);
    }
  if (i && Re.call(i, n)) {
    const f = i[n];
    for (s in f)
      Re.call(f, s) && !Re.call(u, s) && (u[s] = f[s]);
  }
  return u;
}
function Rr(e, t, n, r) {
  return t ? Array.isArray(r) ? Jf(e, t, n, r) : Ji(e, t, n, r) : void 0;
}
function Jf(e, t, n, r) {
  let i = -1;
  const l = [];
  for (; ++i < r.length; ) {
    const o = Ji(e, t, n, r[i]);
    (typeof o == "number" || typeof o == "string") && l.push(o);
  }
  return l;
}
function Ji(e, t, n, r) {
  if (!(typeof r != "boolean" && typeof r != "number" && typeof r != "string") && ed(e, n, r)) {
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
function ed(e, t, n) {
  const r = e.schema.protocols && Re.call(e.schema.protocols, t) ? e.schema.protocols[t] : void 0;
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
  const n = Si(
    // @ts-expect-error: looks like a node.
    t
  );
  t.data && (e.data = gt(t.data)), n && (e.position = n);
}
function jr(e, t) {
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
function td(e) {
  return function(t) {
    return (
      /** @type {Root} */
      Wf(t, e)
    );
  };
}
function zr(e, t) {
  const n = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let r = 0, i = n.indexOf(t);
  for (; i !== -1; )
    r++, i = n.indexOf(t, i + t.length);
  return r;
}
function nd(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function rd(e, t, n) {
  const i = Ot((n || {}).ignore || []), l = id(t);
  let o = -1;
  for (; ++o < l.length; )
    Gi(e, "text", a);
  function a(s, f) {
    let c = -1, h;
    for (; ++c < f.length; ) {
      const d = f[c], g = h ? h.children : void 0;
      if (i(
        d,
        g ? g.indexOf(d) : void 0,
        h
      ))
        return;
      h = d;
    }
    if (h)
      return u(s, f);
  }
  function u(s, f) {
    const c = f[f.length - 1], h = l[o][0], d = l[o][1];
    let g = 0;
    const k = c.children.indexOf(s);
    let y = !1, E = [];
    h.lastIndex = 0;
    let b = h.exec(s.value);
    for (; b; ) {
      const A = b.index, L = {
        index: b.index,
        input: b.input,
        stack: [...f, s]
      };
      let C = d(...b, L);
      if (typeof C == "string" && (C = C.length > 0 ? { type: "text", value: C } : void 0), C === !1 ? h.lastIndex = A + 1 : (g !== A && E.push({
        type: "text",
        value: s.value.slice(g, A)
      }), Array.isArray(C) ? E.push(...C) : C && E.push(C), g = A + b[0].length, y = !0), !h.global)
        break;
      b = h.exec(s.value);
    }
    return y ? (g < s.value.length && E.push({ type: "text", value: s.value.slice(g) }), c.children.splice(k, 1, ...E)) : E = [s], k + E.length;
  }
}
function id(e) {
  const t = [];
  if (!Array.isArray(e))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !e[0] || Array.isArray(e[0]) ? e : [e];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    t.push([ld(i[0]), od(i[1])]);
  }
  return t;
}
function ld(e) {
  return typeof e == "string" ? new RegExp(nd(e), "g") : e;
}
function od(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}
const on = "phrasing", an = ["autolink", "link", "image", "label"];
function ad() {
  return {
    transforms: [pd],
    enter: {
      literalAutolink: ud,
      literalAutolinkEmail: sn,
      literalAutolinkHttp: sn,
      literalAutolinkWww: sn
    },
    exit: {
      literalAutolink: hd,
      literalAutolinkEmail: dd,
      literalAutolinkHttp: cd,
      literalAutolinkWww: fd
    }
  };
}
function sd() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: on,
        notInConstruct: an
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: on,
        notInConstruct: an
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: on,
        notInConstruct: an
      }
    ]
  };
}
function ud(e) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e);
}
function sn(e) {
  this.config.enter.autolinkProtocol.call(this, e);
}
function cd(e) {
  this.config.exit.autolinkProtocol.call(this, e);
}
function fd(e) {
  this.config.exit.data.call(this, e);
  const t = this.stack[this.stack.length - 1];
  t.type, t.url = "http://" + this.sliceSerialize(e);
}
function dd(e) {
  this.config.exit.autolinkEmail.call(this, e);
}
function hd(e) {
  this.exit(e);
}
function pd(e) {
  rd(
    e,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, md],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), gd]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function md(e, t, n, r, i) {
  let l = "";
  if (!el(i) || (/^w/i.test(t) && (n = t + n, t = "", l = "http://"), !xd(n)))
    return !1;
  const o = yd(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: l + t + o[0],
    children: [{ type: "text", value: t + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
}
function gd(e, t, n, r) {
  return (
    // Not an expected previous character.
    !el(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [{ type: "text", value: t + "@" + n }]
    }
  );
}
function xd(e) {
  const t = e.split(".");
  return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function yd(e) {
  const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
  if (!t)
    return [e, void 0];
  e = e.slice(0, t.index);
  let n = t[0], r = n.indexOf(")");
  const i = zr(e, "(");
  let l = zr(e, ")");
  for (; r !== -1 && i > l; )
    e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), l++;
  return [e, n];
}
function el(e, t) {
  const n = e.input.charCodeAt(e.index - 1);
  return (e.index === 0 || Ve(n) || Rt(n)) && // If it’s an email, the previous character should not be a slash.
  (!t || n !== 47);
}
tl.peek = Id;
function bd() {
  this.buffer();
}
function kd(e) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e);
}
function wd() {
  this.buffer();
}
function Cd(e) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    e
  );
}
function vd(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = we(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Sd(e) {
  this.exit(e);
}
function Ed(e) {
  const t = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = we(
    this.sliceSerialize(e)
  ).toLowerCase(), n.label = t;
}
function Td(e) {
  this.exit(e);
}
function Id() {
  return "[";
}
function tl(e, t, n, r) {
  const i = n.createTracker(r);
  let l = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return l += i.move(
    n.safe(n.associationId(e), { after: "]", before: l })
  ), a(), o(), l += i.move("]"), l;
}
function Ad() {
  return {
    enter: {
      gfmFootnoteCallString: bd,
      gfmFootnoteCall: kd,
      gfmFootnoteDefinitionLabelString: wd,
      gfmFootnoteDefinition: Cd
    },
    exit: {
      gfmFootnoteCallString: vd,
      gfmFootnoteCall: Sd,
      gfmFootnoteDefinitionLabelString: Ed,
      gfmFootnoteDefinition: Td
    }
  };
}
function Ld(e) {
  let t = !1;
  return e && e.firstLineBlank && (t = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: tl },
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
        t ? nl : Pd
      )
    )), s(), u;
  }
}
function Pd(e, t, n) {
  return t === 0 ? e : nl(e, t, n);
}
function nl(e, t, n) {
  return (n ? "" : "    ") + e;
}
const Dd = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
rl.peek = zd;
function Fd() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: Rd },
    exit: { strikethrough: jd }
  };
}
function Md() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: Dd
      }
    ],
    handlers: { delete: rl }
  };
}
function Rd(e) {
  this.enter({ type: "delete", children: [] }, e);
}
function jd(e) {
  this.exit(e);
}
function rl(e, t, n, r) {
  const i = n.createTracker(r), l = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(e, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), l(), o;
}
function zd() {
  return "~";
}
function Od(e) {
  return e.length;
}
function _d(e, t) {
  const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Od, l = [], o = [], a = [], u = [];
  let s = 0, f = -1;
  for (; ++f < e.length; ) {
    const v = [], k = [];
    let y = -1;
    for (e[f].length > s && (s = e[f].length); ++y < e[f].length; ) {
      const E = Bd(e[f][y]);
      if (n.alignDelimiters !== !1) {
        const b = i(E);
        k[y] = b, (u[y] === void 0 || b > u[y]) && (u[y] = b);
      }
      v.push(E);
    }
    o[f] = v, a[f] = k;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++c < s; )
      l[c] = Or(r[c]);
  else {
    const v = Or(r);
    for (; ++c < s; )
      l[c] = v;
  }
  c = -1;
  const h = [], d = [];
  for (; ++c < s; ) {
    const v = l[c];
    let k = "", y = "";
    v === 99 ? (k = ":", y = ":") : v === 108 ? k = ":" : v === 114 && (y = ":");
    let E = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      u[c] - k.length - y.length
    );
    const b = k + "-".repeat(E) + y;
    n.alignDelimiters !== !1 && (E = k.length + E + y.length, E > u[c] && (u[c] = E), d[c] = E), h[c] = b;
  }
  o.splice(1, 0, h), a.splice(1, 0, d), f = -1;
  const g = [];
  for (; ++f < o.length; ) {
    const v = o[f], k = a[f];
    c = -1;
    const y = [];
    for (; ++c < s; ) {
      const E = v[c] || "";
      let b = "", A = "";
      if (n.alignDelimiters !== !1) {
        const L = u[c] - (k[c] || 0), C = l[c];
        C === 114 ? b = " ".repeat(L) : C === 99 ? L % 2 ? (b = " ".repeat(L / 2 + 0.5), A = " ".repeat(L / 2 - 0.5)) : (b = " ".repeat(L / 2), A = b) : A = " ".repeat(L);
      }
      n.delimiterStart !== !1 && !c && y.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && E === "") && (n.delimiterStart !== !1 || c) && y.push(" "), n.alignDelimiters !== !1 && y.push(b), y.push(E), n.alignDelimiters !== !1 && y.push(A), n.padding !== !1 && y.push(" "), (n.delimiterEnd !== !1 || c !== s - 1) && y.push("|");
    }
    g.push(
      n.delimiterEnd === !1 ? y.join("").replace(/ +$/, "") : y.join("")
    );
  }
  return g.join(`
`);
}
function Bd(e) {
  return e == null ? "" : String(e);
}
function Or(e) {
  const t = typeof e == "string" ? e.codePointAt(0) : 0;
  return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
function Nd(e, t, n, r) {
  const i = n.enter("blockquote"), l = n.createTracker(r);
  l.move("> "), l.shift(2);
  const o = n.indentLines(
    n.containerFlow(e, l.current()),
    $d
  );
  return i(), o;
}
function $d(e, t, n) {
  return ">" + (n ? "" : " ") + e;
}
function Vd(e, t) {
  return _r(e, t.inConstruct, !0) && !_r(e, t.notInConstruct, !1);
}
function _r(e, t, n) {
  if (typeof t == "string" && (t = [t]), !t || t.length === 0)
    return n;
  let r = -1;
  for (; ++r < t.length; )
    if (e.includes(t[r]))
      return !0;
  return !1;
}
function Br(e, t, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && Vd(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function Hd(e, t) {
  const n = String(e);
  let r = n.indexOf(t), i = r, l = 0, o = 0;
  if (typeof t != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++l > o && (o = l) : l = 1, i = r + t.length, r = n.indexOf(t, i);
  return o;
}
function qd(e, t) {
  return !!(t.options.fences === !1 && e.value && // If there’s no info…
  !e.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(e.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
function Ud(e) {
  const t = e.options.fence || "`";
  if (t !== "`" && t !== "~")
    throw new Error(
      "Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return t;
}
function Wd(e, t, n, r) {
  const i = Ud(n), l = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if (qd(e, n)) {
    const c = n.enter("codeIndented"), h = n.indentLines(l, Zd);
    return c(), h;
  }
  const a = n.createTracker(r), u = i.repeat(Math.max(Hd(l, i) + 1, 3)), s = n.enter("codeFenced");
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
function Zd(e, t, n) {
  return (n ? "" : "    ") + e;
}
function $n(e) {
  const t = e.options.quote || '"';
  if (t !== '"' && t !== "'")
    throw new Error(
      "Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`"
    );
  return t;
}
function Kd(e, t, n, r) {
  const i = $n(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
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
function Gd(e) {
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
function Ft(e, t, n) {
  const r = Je(e), i = Je(t);
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
il.peek = Xd;
function il(e, t, n, r) {
  const i = Gd(n), l = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), f = Ft(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = xt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), h = Ft(r.after.charCodeAt(0), c, i);
  h.inside && (u = u.slice(0, -1) + xt(c));
  const d = o.move(i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, a + u + d;
}
function Xd(e, t, n) {
  return n.options.emphasis || "*";
}
function Yd(e, t) {
  let n = !1;
  return Bn(e, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, kn;
  }), !!((!e.depth || e.depth < 3) && Fn(e) && (t.options.setext || n));
}
function Qd(e, t, n, r) {
  const i = Math.max(Math.min(6, e.depth || 1), 1), l = n.createTracker(r);
  if (Yd(e, n)) {
    const f = n.enter("headingSetext"), c = n.enter("phrasing"), h = n.containerPhrasing(e, {
      ...l.current(),
      before: `
`,
      after: `
`
    });
    return c(), f(), h + `
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
  return /^[\t ]/.test(s) && (s = xt(s.charCodeAt(0)) + s.slice(1)), s = s ? o + " " + s : o, n.options.closeAtx && (s += " " + o), u(), a(), s;
}
ll.peek = Jd;
function ll(e) {
  return e.value || "";
}
function Jd() {
  return "<";
}
ol.peek = eh;
function ol(e, t, n, r) {
  const i = $n(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
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
function eh() {
  return "!";
}
al.peek = th;
function al(e, t, n, r) {
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
function th() {
  return "!";
}
sl.peek = nh;
function sl(e, t, n) {
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
function nh() {
  return "`";
}
function ul(e, t) {
  const n = Fn(e);
  return !!(!t.options.resourceLink && // If there’s a url…
  e.url && // And there’s a no title…
  !e.title && // And the content of `node` is a single text node…
  e.children && e.children.length === 1 && e.children[0].type === "text" && // And if the url is the same as the content…
  (n === e.url || "mailto:" + n === e.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(e.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(e.url));
}
cl.peek = rh;
function cl(e, t, n, r) {
  const i = $n(n), l = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, u;
  if (ul(e, n)) {
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
function rh(e, t, n) {
  return ul(e, n) ? "<" : "[";
}
fl.peek = ih;
function fl(e, t, n, r) {
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
function ih() {
  return "[";
}
function Vn(e) {
  const t = e.options.bullet || "*";
  if (t !== "*" && t !== "+" && t !== "-")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return t;
}
function lh(e) {
  const t = Vn(e), n = e.options.bulletOther;
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
function oh(e) {
  const t = e.options.bulletOrdered || ".";
  if (t !== "." && t !== ")")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return t;
}
function dl(e) {
  const t = e.options.rule || "*";
  if (t !== "*" && t !== "-" && t !== "_")
    throw new Error(
      "Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return t;
}
function ah(e, t, n, r) {
  const i = n.enter("list"), l = n.bulletCurrent;
  let o = e.ordered ? oh(n) : Vn(n);
  const a = e.ordered ? o === "." ? ")" : "." : lh(n);
  let u = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!e.ordered) {
    const f = e.children ? e.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (u = !0), dl(n) === o && f
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
function sh(e) {
  const t = e.options.listItemIndent || "one";
  if (t !== "tab" && t !== "one" && t !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return t;
}
function uh(e, t, n, r) {
  const i = sh(n);
  let l = n.bulletCurrent || Vn(n);
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
  function f(c, h, d) {
    return h ? (d ? "" : " ".repeat(o)) + c : (d ? l : l + " ".repeat(o - l.length)) + c;
  }
}
function ch(e, t, n, r) {
  const i = n.enter("paragraph"), l = n.enter("phrasing"), o = n.containerPhrasing(e, r);
  return l(), i(), o;
}
const fh = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Ot([
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
function dh(e, t, n, r) {
  return (e.children.some(function(o) {
    return fh(o);
  }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
function hh(e) {
  const t = e.options.strong || "*";
  if (t !== "*" && t !== "_")
    throw new Error(
      "Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`"
    );
  return t;
}
hl.peek = ph;
function hl(e, t, n, r) {
  const i = hh(n), l = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let u = o.move(
    n.containerPhrasing(e, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const s = u.charCodeAt(0), f = Ft(
    r.before.charCodeAt(r.before.length - 1),
    s,
    i
  );
  f.inside && (u = xt(s) + u.slice(1));
  const c = u.charCodeAt(u.length - 1), h = Ft(r.after.charCodeAt(0), c, i);
  h.inside && (u = u.slice(0, -1) + xt(c));
  const d = o.move(i + i);
  return l(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, a + u + d;
}
function ph(e, t, n) {
  return n.options.strong || "*";
}
function mh(e, t, n, r) {
  return n.safe(e.value, r);
}
function gh(e) {
  const t = e.options.ruleRepetition || 3;
  if (t < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return t;
}
function xh(e, t, n) {
  const r = (dl(n) + (n.options.ruleSpaces ? " " : "")).repeat(gh(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const pl = {
  blockquote: Nd,
  break: Br,
  code: Wd,
  definition: Kd,
  emphasis: il,
  hardBreak: Br,
  heading: Qd,
  html: ll,
  image: ol,
  imageReference: al,
  inlineCode: sl,
  link: cl,
  linkReference: fl,
  list: ah,
  listItem: uh,
  paragraph: ch,
  root: dh,
  strong: hl,
  text: mh,
  thematicBreak: xh
};
function yh() {
  return {
    enter: {
      table: bh,
      tableData: Nr,
      tableHeader: Nr,
      tableRow: wh
    },
    exit: {
      codeText: Ch,
      table: kh,
      tableData: un,
      tableHeader: un,
      tableRow: un
    }
  };
}
function bh(e) {
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
function kh(e) {
  this.exit(e), this.data.inTable = void 0;
}
function wh(e) {
  this.enter({ type: "tableRow", children: [] }, e);
}
function un(e) {
  this.exit(e);
}
function Nr(e) {
  this.enter({ type: "tableCell", children: [] }, e);
}
function Ch(e) {
  let t = this.resume();
  this.data.inTable && (t = t.replace(/\\([\\|])/g, vh));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = t, this.exit(e);
}
function vh(e, t) {
  return t === "|" ? t : e;
}
function Sh(e) {
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
  function o(d, g, v, k) {
    return s(f(d, v, k), d.align);
  }
  function a(d, g, v, k) {
    const y = c(d, v, k), E = s([y]);
    return E.slice(0, E.indexOf(`
`));
  }
  function u(d, g, v, k) {
    const y = v.enter("tableCell"), E = v.enter("phrasing"), b = v.containerPhrasing(d, {
      ...k,
      before: l,
      after: l
    });
    return E(), y(), b;
  }
  function s(d, g) {
    return _d(d, {
      align: g,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(d, g, v) {
    const k = d.children;
    let y = -1;
    const E = [], b = g.enter("table");
    for (; ++y < k.length; )
      E[y] = c(k[y], g, v);
    return b(), E;
  }
  function c(d, g, v) {
    const k = d.children;
    let y = -1;
    const E = [], b = g.enter("tableRow");
    for (; ++y < k.length; )
      E[y] = u(k[y], d, g, v);
    return b(), E;
  }
  function h(d, g, v) {
    let k = pl.inlineCode(d, g, v);
    return v.stack.includes("tableCell") && (k = k.replace(/\|/g, "\\$&")), k;
  }
}
function Eh() {
  return {
    exit: {
      taskListCheckValueChecked: $r,
      taskListCheckValueUnchecked: $r,
      paragraph: Ih
    }
  };
}
function Th() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Ah }
  };
}
function $r(e) {
  const t = this.stack[this.stack.length - 2];
  t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Ih(e) {
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
function Ah(e, t, n, r) {
  const i = e.children[0], l = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  l && a.move(o);
  let u = pl.listItem(e, t, n, {
    ...r,
    ...a.current()
  });
  return l && (u = u.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), u;
  function s(f) {
    return f + o;
  }
}
function Lh() {
  return [
    ad(),
    Ad(),
    Fd(),
    yh(),
    Eh()
  ];
}
function Ph(e) {
  return {
    extensions: [
      sd(),
      Ld(e),
      Md(),
      Sh(e),
      Th()
    ]
  };
}
const Dh = {
  tokenize: Oh,
  partial: !0
}, ml = {
  tokenize: _h,
  partial: !0
}, gl = {
  tokenize: Bh,
  partial: !0
}, xl = {
  tokenize: Nh,
  partial: !0
}, Fh = {
  tokenize: $h,
  partial: !0
}, yl = {
  name: "wwwAutolink",
  tokenize: jh,
  previous: kl
}, bl = {
  name: "protocolAutolink",
  tokenize: zh,
  previous: wl
}, Pe = {
  name: "emailAutolink",
  tokenize: Rh,
  previous: Cl
}, Se = {};
function Mh() {
  return {
    text: Se
  };
}
let Ne = 48;
for (; Ne < 123; )
  Se[Ne] = Pe, Ne++, Ne === 58 ? Ne = 65 : Ne === 91 && (Ne = 97);
Se[43] = Pe;
Se[45] = Pe;
Se[46] = Pe;
Se[95] = Pe;
Se[72] = [Pe, bl];
Se[104] = [Pe, bl];
Se[87] = [Pe, yl];
Se[119] = [Pe, yl];
function Rh(e, t, n) {
  const r = this;
  let i, l;
  return o;
  function o(c) {
    return !Sn(c) || !Cl.call(r, r.previous) || Hn(r.events) ? n(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
  }
  function a(c) {
    return Sn(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), u) : n(c);
  }
  function u(c) {
    return c === 46 ? e.check(Fh, f, s)(c) : c === 45 || c === 95 || ie(c) ? (l = !0, e.consume(c), u) : f(c);
  }
  function s(c) {
    return e.consume(c), i = !0, u;
  }
  function f(c) {
    return l && i && se(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(c)) : n(c);
  }
}
function jh(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !kl.call(r, r.previous) || Hn(r.events) ? n(o) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Dh, e.attempt(ml, e.attempt(gl, l), n), n)(o));
  }
  function l(o) {
    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(o);
  }
}
function zh(e, t, n) {
  const r = this;
  let i = "", l = !1;
  return o;
  function o(c) {
    return (c === 72 || c === 104) && wl.call(r, r.previous) && !Hn(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : n(c);
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
    return c === null || Pt(c) || Y(c) || Ve(c) || Rt(c) ? n(c) : e.attempt(ml, e.attempt(gl, f), n)(c);
  }
  function f(c) {
    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(c);
  }
}
function Oh(e, t, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, e.consume(o), i) : o === 46 && r === 3 ? (e.consume(o), l) : n(o);
  }
  function l(o) {
    return o === null ? n(o) : t(o);
  }
}
function _h(e, t, n) {
  let r, i, l;
  return o;
  function o(s) {
    return s === 46 || s === 95 ? e.check(xl, u, a)(s) : s === null || Y(s) || Ve(s) || s !== 45 && Rt(s) ? u(s) : (l = !0, e.consume(s), o);
  }
  function a(s) {
    return s === 95 ? r = !0 : (i = r, r = void 0), e.consume(s), o;
  }
  function u(s) {
    return i || r || !l ? n(s) : t(s);
  }
}
function Bh(e, t) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? l(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(xl, t, l)(o) : o === null || Y(o) || Ve(o) ? t(o) : (e.consume(o), i);
  }
  function l(o) {
    return o === 41 && r++, e.consume(o), i;
  }
}
function Nh(e, t, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), l) : a === 93 ? (e.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Y(a) || Ve(a) ? t(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Y(a) || Ve(a) ? t(a) : r(a);
  }
  function l(a) {
    return se(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (e.consume(a), r) : se(a) ? (e.consume(a), o) : n(a);
  }
}
function $h(e, t, n) {
  return r;
  function r(l) {
    return e.consume(l), i;
  }
  function i(l) {
    return ie(l) ? n(l) : t(l);
  }
}
function kl(e) {
  return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Y(e);
}
function wl(e) {
  return !se(e);
}
function Cl(e) {
  return !(e === 47 || Sn(e));
}
function Sn(e) {
  return e === 43 || e === 45 || e === 46 || e === 95 || ie(e);
}
function Hn(e) {
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
const Vh = {
  tokenize: Xh,
  partial: !0
};
function Hh() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Zh,
        continuation: {
          tokenize: Kh
        },
        exit: Gh
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Wh
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: qh,
        resolveTo: Uh
      }
    }
  };
}
function qh(e, t, n) {
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
function Uh(e, t) {
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
function Wh(e, t, n) {
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
      return i.includes(we(r.sliceSerialize(h))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(c);
    }
    return Y(c) || (o = !0), l++, e.consume(c), c === 92 ? f : s;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e.consume(c), l++, s) : s(c);
  }
}
function Zh(e, t, n) {
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
      return l = we(r.sliceSerialize(v)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return Y(g) || (a = !0), o++, e.consume(g), g === 92 ? c : f;
  }
  function c(g) {
    return g === 91 || g === 92 || g === 93 ? (e.consume(g), o++, f) : f(g);
  }
  function h(g) {
    return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(l) || i.push(l), Z(e, d, "gfmFootnoteDefinitionWhitespace")) : n(g);
  }
  function d(g) {
    return t(g);
  }
}
function Kh(e, t, n) {
  return e.check(bt, t, e.attempt(Vh, t, n));
}
function Gh(e) {
  e.exit("gfmFootnoteDefinition");
}
function Xh(e, t, n) {
  const r = this;
  return Z(e, i, "gfmFootnoteDefinitionIndent", 5);
  function i(l) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? t(l) : n(l);
  }
}
function Yh(e) {
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
            }, h = [["enter", f, a], ["enter", o[s][1], a], ["exit", o[s][1], a], ["enter", c, a]], d = a.parser.constructs.insideSpan.null;
            d && ge(h, h.length, 0, jt(d, o.slice(s + 1, u), a)), ge(h, h.length, 0, [["exit", c, a], ["enter", o[u][1], a], ["exit", o[u][1], a], ["exit", f, a]]), ge(o, s - 1, u - s + 3, h), u = s + h.length - 2;
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
    return h;
    function h(g) {
      return s === 126 && f[f.length - 1][1].type !== "characterEscape" ? u(g) : (o.enter("strikethroughSequenceTemporary"), d(g));
    }
    function d(g) {
      const v = Je(s);
      if (g === 126)
        return c > 1 ? u(g) : (o.consume(g), c++, d);
      if (c < 2 && !n) return u(g);
      const k = o.exit("strikethroughSequenceTemporary"), y = Je(g);
      return k._open = !y || y === 2 && !!v, k._close = !v || v === 2 && !!y, a(g);
    }
  }
}
class Qh {
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
    Jh(this, t, n, r);
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
function Jh(e, t, n, r) {
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
function ep(e, t) {
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
function tp() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: np,
        resolveAll: rp
      }
    }
  };
}
function np(e, t, n) {
  const r = this;
  let i = 0, l = 0, o;
  return a;
  function a(w) {
    let F = r.events.length - 1;
    for (; F > -1; ) {
      const j = r.events[F][1].type;
      if (j === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      j === "linePrefix") F--;
      else break;
    }
    const M = F > -1 ? r.events[F][1].type : null, B = M === "tableHead" || M === "tableRow" ? C : u;
    return B === C && r.parser.lazy[r.now().line] ? n(w) : B(w);
  }
  function u(w) {
    return e.enter("tableHead"), e.enter("tableRow"), s(w);
  }
  function s(w) {
    return w === 124 || (o = !0, l += 1), f(w);
  }
  function f(w) {
    return w === null ? n(w) : O(w) ? l > 1 ? (l = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), d) : n(w) : q(w) ? Z(e, f, "whitespace")(w) : (l += 1, o && (o = !1, i += 1), w === 124 ? (e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), o = !0, f) : (e.enter("data"), c(w)));
  }
  function c(w) {
    return w === null || w === 124 || Y(w) ? (e.exit("data"), f(w)) : (e.consume(w), w === 92 ? h : c);
  }
  function h(w) {
    return w === 92 || w === 124 ? (e.consume(w), c) : c(w);
  }
  function d(w) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(w) : (e.enter("tableDelimiterRow"), o = !1, q(w) ? Z(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : g(w));
  }
  function g(w) {
    return w === 45 || w === 58 ? k(w) : w === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(w), e.exit("tableCellDivider"), v) : L(w);
  }
  function v(w) {
    return q(w) ? Z(e, k, "whitespace")(w) : k(w);
  }
  function k(w) {
    return w === 58 ? (l += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), y) : w === 45 ? (l += 1, y(w)) : w === null || O(w) ? A(w) : L(w);
  }
  function y(w) {
    return w === 45 ? (e.enter("tableDelimiterFiller"), E(w)) : L(w);
  }
  function E(w) {
    return w === 45 ? (e.consume(w), E) : w === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(w), e.exit("tableDelimiterMarker"), b) : (e.exit("tableDelimiterFiller"), b(w));
  }
  function b(w) {
    return q(w) ? Z(e, A, "whitespace")(w) : A(w);
  }
  function A(w) {
    return w === 124 ? g(w) : w === null || O(w) ? !o || i !== l ? L(w) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(w)) : L(w);
  }
  function L(w) {
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
function rp(e, t) {
  let n = -1, r = !0, i = 0, l = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, u = 0, s, f, c;
  const h = new Qh();
  for (; ++n < e.length; ) {
    const d = e[n], g = d[1];
    d[0] === "enter" ? g.type === "tableHead" ? (a = !1, u !== 0 && (Vr(h, t, u, s, f), f = void 0, u = 0), s = {
      type: "table",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, h.add(n, 0, [["enter", s, t]])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = !0, c = void 0, l = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, g.start),
      // Note: correct end is set later.
      end: Object.assign({}, g.end)
    }, h.add(n, 0, [["enter", f, t]])), i = g.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (l[1] !== 0 && (o[0] = o[1], c = It(h, t, l, i, void 0, c), l = [0, 0, 0, 0]), o[2] = n)) : g.type === "tableCellDivider" && (r ? r = !1 : (l[1] !== 0 && (o[0] = o[1], c = It(h, t, l, i, void 0, c)), l = o, o = [l[1], n, 0, 0])) : g.type === "tableHead" ? (a = !0, u = n) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (u = n, l[1] !== 0 ? (o[0] = o[1], c = It(h, t, l, i, n, c)) : o[1] !== 0 && (c = It(h, t, o, i, n, c)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (u !== 0 && Vr(h, t, u, s, f), h.consume(t.events), n = -1; ++n < t.events.length; ) {
    const d = t.events[n];
    d[0] === "enter" && d[1].type === "table" && (d[1]._align = ep(t.events, n));
  }
  return e;
}
function It(e, t, n, r, i, l) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (l.end = Object.assign({}, Ke(t.events, n[0])), e.add(n[0], 0, [["exit", l, t]]));
  const u = Ke(t.events, n[1]);
  if (l = {
    type: o,
    start: Object.assign({}, u),
    // Note: correct end is set later.
    end: Object.assign({}, u)
  }, e.add(n[1], 0, [["enter", l, t]]), n[2] !== 0) {
    const s = Ke(t.events, n[2]), f = Ke(t.events, n[3]), c = {
      type: a,
      start: Object.assign({}, s),
      end: Object.assign({}, f)
    };
    if (e.add(n[2], 0, [["enter", c, t]]), r !== 2) {
      const h = t.events[n[2]], d = t.events[n[3]];
      if (h[1].end = Object.assign({}, d[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const g = n[2] + 1, v = n[3] - n[2] - 1;
        e.add(g, v, []);
      }
    }
    e.add(n[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (l.end = Object.assign({}, Ke(t.events, i)), e.add(i, 0, [["exit", l, t]]), l = void 0), l;
}
function Vr(e, t, n, r, i) {
  const l = [], o = Ke(t.events, n);
  i && (i.end = Object.assign({}, o), l.push(["exit", i, t])), r.end = Object.assign({}, o), l.push(["exit", r, t]), e.add(n + 1, 0, l);
}
function Ke(e, t) {
  const n = e[t], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const ip = {
  name: "tasklistCheck",
  tokenize: op
};
function lp() {
  return {
    text: {
      91: ip
    }
  };
}
function op(e, t, n) {
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
      tokenize: ap
    }, t, n)(u) : n(u);
  }
}
function ap(e, t, n) {
  return Z(e, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : t(i);
  }
}
function sp(e) {
  return Pi([
    Mh(),
    Hh(),
    Yh(e),
    tp(),
    lp()
  ]);
}
const up = {};
function cp(e) {
  const t = (
    /** @type {Processor<Root>} */
    this
  ), n = e || up, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), l = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(sp(n)), l.push(Lh()), o.push(Ph(n));
}
const fp = ne.div`
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
`, dp = ({ content: e, className: t }) => /* @__PURE__ */ x.jsx(fp, { className: t, children: /* @__PURE__ */ x.jsx($f, { remarkPlugins: [cp], rehypePlugins: [td], children: e }) }), hp = ne.div`
    margin-left: auto;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, pp = ({ name: e, timestamp: t }) => /* @__PURE__ */ x.jsxs(Ae, { children: [
  /* @__PURE__ */ x.jsx(Xr, { src: oo }),
  /* @__PURE__ */ x.jsx(Qe, { children: e }),
  /* @__PURE__ */ x.jsx(hp, { children: new Date(t).toLocaleString() })
] }), mp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%235BDB5B'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e", gp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%204.5L6.105%2011.5L3%208.5'%20stroke='%230D990D'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var xp = Object.defineProperty, yp = (e, t) => xp(e, "name", { value: t, configurable: !0 });
const bp = yp((e) => x.jsx(Le, { light: gp, dark: mp, ...e }), "CheckIcon"), kp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", wp = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%203H3V9H2V3C2%202.45%202.45%202%203%202H9V3ZM5%2014C4.45%2014%204%2013.55%204%2013V5C4%204.45%204.45%204%205%204H13C13.55%204%2014%204.45%2014%205V13C14%2013.55%2013.55%2014%2013%2014H5ZM5%2013H13V5H5V13Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Cp = Object.defineProperty, vp = (e, t) => Cp(e, "name", { value: t, configurable: !0 });
const Sp = vp((e) => x.jsx(Le, { light: wp, dark: kp, ...e }), "CopyIcon"), Ep = ({
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
), Tp = ({
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
), Ip = ({
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
), Ap = ({
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
), Lp = ({ width: e = "1em", height: t = "1em", className: n, style: r }) => /* @__PURE__ */ x.jsxs(
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
), Pp = ({
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
), Dp = ({
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
), Fp = ({
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
), vl = (e) => {
  if (e < 1e3)
    return `${e} ms`;
  if (e < 6e4)
    return `${(e / 1e3).toFixed(2)} s`;
  {
    const t = Math.floor(e / 1e3), n = Math.floor(t / 60), r = t % 60;
    return `${n} m ${r} s`;
  }
}, cn = ne.span`
    font-size: 10px;
    color: ${({ theme: e }) => Zr(e) ? e.colorsAccentWhite : e.colorsTextSecondaryDefault};
`, Mp = ne(Ae)`
    margin-left: auto;
`, Rp = ne.span`
    align-self: center;
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, jp = ({
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
  return /* @__PURE__ */ x.jsxs(Ae, { alignItems: "center", children: [
    /* @__PURE__ */ x.jsxs(Ae, { gap: 4, children: [
      /* @__PURE__ */ x.jsx(Dp, {}),
      e && /* @__PURE__ */ x.jsx(cn, { children: e.toLocaleString(navigator.language) })
    ] }),
    t && n && /* @__PURE__ */ x.jsx(cn, { children: `(${t.toLocaleString(navigator.language)} / ${n.toLocaleString(navigator.language)})` }),
    /* @__PURE__ */ x.jsxs(Ae, { gap: 4, children: [
      /* @__PURE__ */ x.jsx(Ip, {}),
      r && /* @__PURE__ */ x.jsx(cn, { children: vl(r) })
    ] }),
    /* @__PURE__ */ x.jsxs(Mp, { children: [
      /* @__PURE__ */ x.jsx($l, { icon: l ? /* @__PURE__ */ x.jsx(bp, {}) : /* @__PURE__ */ x.jsx(Sp, {}), onPress: u }),
      l && /* @__PURE__ */ x.jsx(Rp, { children: "Copied to clipboard" })
    ] })
  ] });
}, zp = () => /* @__PURE__ */ x.jsxs(ei, { children: [
  /* @__PURE__ */ x.jsx(Qe, { children: "Test your agent" }),
  /* @__PURE__ */ x.jsx("div", { children: "Choose a model and provide a prompt. Optionally, add variables to simulate different scenarios and compare results." })
] }), Op = ne.button`
    all: unset;
    display: flex;
    align-items: center;
    width: 100%;
    color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
    gap: 4px;
`, _p = ne.div`
    padding-bottom: 8px;
`, Bp = ({ title: e, children: t, defaultExpanded: n = !1 }) => {
  const [r, i] = D.useState(n), l = D.useId();
  return /* @__PURE__ */ x.jsxs("div", { children: [
    /* @__PURE__ */ x.jsxs(Op, { "aria-expanded": r, "aria-controls": l, onClick: () => i((o) => !o), children: [
      r ? /* @__PURE__ */ x.jsx(Ep, {}) : /* @__PURE__ */ x.jsx(Tp, {}),
      e
    ] }),
    r && /* @__PURE__ */ x.jsx(_p, { id: l, role: "region", "aria-label": e, children: t })
  ] });
}, Np = (e) => "kbDisplayName" in e, $p = (e) => "serverName" in e, Vp = ne.span`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, Hp = ne.div`
    font-size: 16px;
`, qp = ({ tools: e }) => {
  const t = (n) => {
    let r, i;
    return Np(n) ? (i = /* @__PURE__ */ x.jsx(Ap, {}), r = n.displayName) : $p(n) ? (i = /* @__PURE__ */ x.jsx(Lp, {}), r = n.toolName) : (i = /* @__PURE__ */ x.jsx(Fp, {}), r = n.displayName), /* @__PURE__ */ x.jsxs(Ae, { marginTop: 8, alignItems: "center", children: [
      /* @__PURE__ */ x.jsx(Hp, { children: i }),
      /* @__PURE__ */ x.jsxs("div", { children: [
        /* @__PURE__ */ x.jsx("div", { children: r }),
        /* @__PURE__ */ x.jsx(Vp, { children: vl(n.durationMilliseconds) })
      ] })
    ] }, n.spanId);
  };
  return /* @__PURE__ */ x.jsx(Ae, { marginTop: 8, children: /* @__PURE__ */ x.jsx(Bp, { title: "References & tools", children: e.map((n) => t(n)) }) });
}, Up = ({ agentName: e, response: t, isLoading: n, isError: r, error: i }) => {
  const l = () => {
    t && navigator.clipboard.writeText(t.responseText);
  }, o = () => r && i ? /* @__PURE__ */ x.jsxs(ti, { children: [
    /* @__PURE__ */ x.jsx(Qe, { children: "Test execution failed" }),
    /* @__PURE__ */ x.jsx("div", { children: i.message }),
    i.link && /* @__PURE__ */ x.jsxs("div", { children: [
      "For more information, please visit",
      " ",
      /* @__PURE__ */ x.jsx(ii, { href: i.link, target: "_blank", rel: "noopener noreferrer", children: "MxDocs" }),
      "."
    ] })
  ] }) : n ? /* @__PURE__ */ x.jsx(Pa, {}) : t ? /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx(pp, { name: e, timestamp: t.receivedAt }),
    /* @__PURE__ */ x.jsx(dp, { content: t.responseText }),
    /* @__PURE__ */ x.jsx(
      jp,
      {
        totalTokens: t.totalTokens,
        requestTokens: t.requestTokens,
        responseTokens: t.responseTokens,
        duration: t.durationMilliseconds,
        handleCopyClick: l
      }
    ),
    t.tools && t.tools.length > 0 && /* @__PURE__ */ x.jsx(qp, { tools: t.tools })
  ] }) : /* @__PURE__ */ x.jsx(zp, {});
  return /* @__PURE__ */ x.jsx($e, { label: "Output", children: o() });
}, Hr = [
  {
    uuid: "default",
    name: "Default case",
    variables: []
  }
], Wp = ne.span`
    display: flex;
    align-items: center;
    gap: 4px;
`, Zp = ({
  label: e,
  icon: t,
  onPress: n,
  iconPosition: r = "start",
  variant: i,
  isDisabled: l,
  alt: o
}) => {
  const a = typeof t == "string" ? /* @__PURE__ */ x.jsx(Xr, { src: t, alt: o }) : t;
  return /* @__PURE__ */ x.jsx(Vl, { variant: i, onPress: n, isDisabled: l, children: /* @__PURE__ */ x.jsxs(Wp, { children: [
    r === "start" && a,
    e,
    r === "end" && a
  ] }) });
}, Kp = ({
  label: e,
  ariaLabel: t,
  value: n,
  onChange: r,
  readOnly: i = !1,
  badgeBackgroundColor: l,
  badgeBorderColor: o
}) => /* @__PURE__ */ x.jsxs(Ae, { children: [
  e && /* @__PURE__ */ x.jsx(Un, { children: /* @__PURE__ */ x.jsx(Hl, { children: /* @__PURE__ */ x.jsx(
    ql,
    {
      title: e,
      backgroundcolor: l,
      bordercolor: o,
      children: "{{" + e + "}}"
    }
  ) }) }),
  /* @__PURE__ */ x.jsx(Un, { fullWidth: !0, children: /* @__PURE__ */ x.jsx(Ul, { value: n, readOnly: i, onChange: r, ariaLabel: t }) })
] }), Gp = ne.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`, Xp = ({ variables: e, highlightRules: t, onVariableChange: n }) => e.length > 0 ? /* @__PURE__ */ x.jsx(Gp, { children: e.map((r, i) => {
  var l, o, a, u;
  return /* @__PURE__ */ x.jsx(
    Kp,
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
}) }) : null, Yp = ne(go)`
    flex: 1;
`, Qp = ({
  variables: e,
  highlightRules: t,
  isDisabled: n,
  showUnsavedChangesWarning: r,
  triggerTestAction: i
}) => {
  const [l, o] = D.useState(Hr[0]), [a, u] = D.useState(
    e.map((c) => ({
      ...c,
      value: ""
    }))
  );
  D.useEffect(() => {
    u((c) => {
      const h = new Map(c.map((d) => [d.key, d.value]));
      return e.map((d) => h.has(d.key) ? { ...d, value: h.get(d.key) } : {
        ...d,
        value: ""
      });
    });
  }, [e]);
  const s = () => i(a), f = (c, h) => {
    u((d) => {
      const g = [...d];
      return g[c] = { ...g[c], value: h }, g;
    });
  };
  return /* @__PURE__ */ x.jsxs($e, { label: "Playground", children: [
    r && /* @__PURE__ */ x.jsxs(ho, { children: [
      /* @__PURE__ */ x.jsx(Qe, { children: "Unsaved agent changes detected" }),
      /* @__PURE__ */ x.jsx("div", { children: "Please restart the application to apply the changes to the agent." })
    ] }),
    /* @__PURE__ */ x.jsxs(Ae, { children: [
      /* @__PURE__ */ x.jsx(
        Yp,
        {
          defaultValue: l == null ? void 0 : l.uuid,
          label: "Test variable input",
          "aria-label": "Test variable input",
          isDisabled: !0,
          children: Hr.map((c) => /* @__PURE__ */ x.jsx(hn, { id: c.uuid, children: c.name }, c.uuid))
        }
      ),
      /* @__PURE__ */ x.jsx(
        Zp,
        {
          label: "Test",
          icon: /* @__PURE__ */ x.jsx(Pp, {}),
          onPress: s,
          variant: "primary",
          isDisabled: n,
          alt: "run test icon"
        }
      )
    ] }),
    a.length > 0 && /* @__PURE__ */ x.jsx(
      Xp,
      {
        variables: a,
        highlightRules: t,
        onVariableChange: f
      }
    )
  ] });
}, Jp = [
  { key: ze.Auto, caption: "Auto" },
  { key: ze.None, caption: "None" },
  { key: ze.Any, caption: "Any" },
  { key: ze.Tool, caption: "Tool" }
], e1 = ({
  agent: e,
  validationInfo: t,
  onToolChoiceChange: n,
  onToolChoiceToolChange: r
}) => /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
  /* @__PURE__ */ x.jsx(
    Kn,
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
          ii,
          {
            href: "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Read more."
          }
        )
      ] }),
      children: Jp.map((i) => /* @__PURE__ */ x.jsx(hn, { id: i.key, children: i.caption }, i.key))
    }
  ),
  e.toolChoice === ze.Tool && /* @__PURE__ */ x.jsx(
    Kn,
    {
      "aria-label": "Tool choice tool",
      label: "Tool",
      selectedKey: e.toolChoiceToolName ?? null,
      validate: () => t.isValidToolChoice,
      onSelectionChange: r,
      description: "Only microflows can be selected as tool choice.",
      children: e.tools.filter((i) => i.toolType === dn.Microflow).map((i) => /* @__PURE__ */ x.jsx(hn, { id: i.name, children: i.name }, i.name))
    }
  )
] }), t1 = ne(hi)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, n1 = ({
  agent: e,
  studioPro: t,
  componentName: n,
  updateStudioProDocument: r,
  onAgentChange: i,
  toolValidations: l,
  agentValidationInfo: o
}) => {
  const [a, u] = D.useState([]), s = D.useMemo(() => e.tools ? e.tools.map((b, A) => ({
    id: b.id ?? String(A),
    enabled: b.enabled,
    name: b.toolType === dn.Microflow ? b.name : b.document.qualifiedName.split(".")[1],
    description: b.description || "",
    tooltype: b.toolType,
    tool: b.document.qualifiedName || ""
  })) : [], [e.tools]), { items: f, sortProps: c } = ni(s), h = D.useCallback(
    (b) => {
      const A = l.get(b);
      return A === "invalid" ? /* @__PURE__ */ x.jsx(Lt, { icon: /* @__PURE__ */ x.jsx(Kr, { title: "Tool invalid" }) }) : A === "syncing" ? /* @__PURE__ */ x.jsx(Lt, { icon: /* @__PURE__ */ x.jsx(di, { title: "Validating..." }) }) : null;
    },
    [l]
  ), d = D.useCallback(async () => {
    const b = await Gn(t, n, e, r);
    b && i(b);
  }, [t, n, e, r, i]), g = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const b = a[0], A = await Gn(
      t,
      n,
      e,
      r,
      b
    );
    A && i(A);
  }, [t, n, e, r, i, a]), v = D.useCallback(async () => {
    if (a.length === 0 || !e.tools)
      return;
    const b = a[0], A = await Yo(t, e, r, b);
    A && i(A);
  }, [e, r, i, a]), k = D.useCallback(
    async (b, A) => {
      if (!e.tools)
        return;
      const L = e.tools.map(
        (_) => (_.id ?? "") === b ? { ..._, enabled: A } : _
      ), C = { ...e, tools: L };
      r(C), i(C);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e.tools, r, i]
  ), y = async (b) => {
    const A = await Jo(e, r, b);
    A && i(A);
  }, E = async (b) => {
    const A = await ea(
      e,
      r,
      b
    );
    A && i(A);
  };
  return /* @__PURE__ */ x.jsxs($e, { label: "Tools", children: [
    /* @__PURE__ */ x.jsx(
      e1,
      {
        agent: e,
        validationInfo: o,
        onToolChoiceChange: y,
        onToolChoiceToolChange: E
      }
    ),
    /* @__PURE__ */ x.jsx(
      ri,
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
          { cellContent: h(b.id) },
          {
            cellContent: /* @__PURE__ */ x.jsx(
              t1,
              {
                "aria-label": "Enabled",
                isSelected: b.enabled,
                onChange: (A) => k(b.id, A)
              }
            )
          },
          { cellContent: b.name, tooltipText: b.name },
          { cellContent: b.description, tooltipText: b.description },
          {
            cellContent: /* @__PURE__ */ x.jsx(
              Yr,
              {
                icon: b.tooltype === dn.Microflow ? /* @__PURE__ */ x.jsx(xo, {}) : ao,
                text: b.tool
              }
            ),
            tooltipText: b.tool
          }
        ]),
        rowKey: (b, A) => {
          var L;
          return ((L = f[A]) == null ? void 0 : L.id) ?? String(A);
        },
        rowOpacity: (b) => {
          var A;
          return (A = f[b]) != null && A.enabled ? 1 : 0.5;
        },
        selectionType: "row",
        selectionMode: "single",
        selectedKeys: a,
        onDoubleClick: g,
        onSelectionChange: u,
        ...c,
        toolbarLeft: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
          /* @__PURE__ */ x.jsx(
            Xe,
            {
              icon: /* @__PURE__ */ x.jsx(fi, {}),
              label: "New",
              "aria-label": "Add new tool",
              tooltip: "Add new tool",
              onPress: d
            }
          ),
          /* @__PURE__ */ x.jsx(
            Xe,
            {
              icon: /* @__PURE__ */ x.jsx(ci, {}),
              label: "Edit",
              "aria-label": "Edit selected tool",
              onPress: g,
              tooltip: "Edit selected tool",
              isDisabled: a.length === 0
            }
          ),
          /* @__PURE__ */ x.jsx(
            Xe,
            {
              icon: /* @__PURE__ */ x.jsx(ui, {}),
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
}, r1 = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  isValidToolChoice: !0,
  missingAttributes: [],
  unusedAttributes: []
}, i1 = ({
  agentDocument: { name: e, contents: t, $ID: n },
  isRuntimeConnected: r,
  showUnsavedChangesWarning: i,
  studioPro: l,
  updateStudioProDocument: o
}) => {
  var nt, rt, it, Ct, lt;
  const [a, u] = D.useState(!1), [s, f] = D.useState(r1), [c, h] = D.useState(void 0), [d, g] = D.useState(t), [v, k] = D.useState(!1), [y, E] = D.useState(/* @__PURE__ */ new Map()), [b, A] = D.useState(
    /* @__PURE__ */ new Map()
  ), L = Wl(), C = [
    (nt = d.model) == null ? void 0 : nt.documentId,
    ...d.tools.map((R) => R.document.documentId),
    ...(d.knowledgebaseTools || []).map((R) => R.document.documentId)
  ].filter((R) => !!R), _ = d.entity ? [(Ct = (it = (rt = d.entity) == null ? void 0 : rt.qualifiedName) == null ? void 0 : it.split(".")) == null ? void 0 : Ct[0]] : void 0, {
    data: H,
    isError: V,
    error: w,
    isPending: F,
    execute: M
  } = Uo(l, n, r), B = D.useRef(null);
  D.useEffect(() => {
    var R;
    Ee(t).then((W) => f(W)), be(l, (R = t.entity) == null ? void 0 : R.qualifiedName).then((W) => h(W)), g(t), u(!0);
  }, []), D.useEffect(() => {
    a && g(t);
  }, [t]), D.useEffect(() => () => {
    B.current && clearTimeout(B.current);
  }, []), D.useEffect(() => {
    a && (async () => {
      var N;
      const W = await be(l, (N = d.entity) == null ? void 0 : N.qualifiedName);
      h(W);
    })();
  }, [l, (lt = d.entity) == null ? void 0 : lt.qualifiedName]);
  const j = async () => {
    const R = [];
    if (d.tools && d.tools.length > 0) {
      const W = /* @__PURE__ */ new Map();
      d.tools.forEach((N) => {
        W.set(N.id, "syncing");
      }), E(W), R.push(
        Promise.all(
          d.tools.map(async (N) => {
            const G = await po("document", N, d, l);
            return {
              id: N.id,
              state: G === !0 ? "valid" : "invalid"
            };
          })
        ).then((N) => {
          const G = new Map(N.map((ae) => [ae.id, ae.state]));
          E(G);
        })
      );
    }
    if (d.knowledgebaseTools && d.knowledgebaseTools.length > 0) {
      const W = /* @__PURE__ */ new Map();
      d.knowledgebaseTools.forEach((N) => {
        W.set(N.id, "syncing");
      }), A(W), R.push(
        Promise.all(
          d.knowledgebaseTools.map(async (N) => {
            const G = await mo(
              "document",
              N,
              d,
              l
            );
            return {
              id: N.id,
              state: G === !0 ? "valid" : "invalid"
            };
          })
        ).then((N) => {
          const G = new Map(N.map((ae) => [ae.id, ae.state]));
          A(G);
        })
      );
    }
    await Promise.all(R);
  };
  D.useEffect(() => {
    a && j();
  }, [a]);
  const P = D.useRef(/* @__PURE__ */ new Map()), K = D.useRef(/* @__PURE__ */ new Map());
  D.useEffect(() => {
    if (a && d.tools) {
      const R = P.current, W = /* @__PURE__ */ new Map();
      d.tools.forEach((N) => {
        W.set(N.id, N.document.qualifiedName);
      }), E((N) => {
        var ae;
        const G = new Map(N);
        return (ae = d.tools) == null || ae.forEach((re) => {
          if (!N.has(re.id))
            G.set(re.id, "valid");
          else {
            const S = R.get(re.id), I = W.get(re.id);
            S !== void 0 && I !== void 0 && S !== I && G.set(re.id, "valid");
          }
        }), G;
      }), P.current = W;
    }
  }, [d.tools, a]), D.useEffect(() => {
    if (a && d.knowledgebaseTools) {
      const R = K.current, W = /* @__PURE__ */ new Map();
      d.knowledgebaseTools.forEach((N) => {
        W.set(N.id, N.document.qualifiedName);
      }), A((N) => {
        var ae;
        const G = new Map(N);
        return (ae = d.knowledgebaseTools) == null || ae.forEach((re) => {
          if (!N.has(re.id))
            G.set(re.id, "valid");
          else {
            const S = R.get(re.id), I = W.get(re.id);
            S !== void 0 && I !== void 0 && S !== I && G.set(re.id, "valid");
          }
        }), G;
      }), K.current = W;
    }
  }, [d.knowledgebaseTools, a]), D.useEffect(() => {
    a && (async () => {
      const W = await Ee(d);
      f(W);
    })();
  }, [l, d]), Qr({
    studioPro: l,
    dependentIds: C,
    onDependentDocumentsChanged: (R) => {
      var re, S, I;
      const W = [
        ...d.tools.map((z) => z.document.documentId),
        ...((re = d.knowledgebaseTools) == null ? void 0 : re.map((z) => z.document.documentId)) || []
      ], N = R.includes("domainModel"), G = R.includes(((S = d.model) == null ? void 0 : S.documentId) || "") || N, ae = R.some((z) => W.includes(z));
      G && Ee(d).then((z) => f(z)), N && (be(l, (I = d.entity) == null ? void 0 : I.qualifiedName).then((z) => h(z)), En(l, d.variables, d).then((z) => {
        g({ ...d, variables: z });
      })), ae && j();
    },
    watchDomainModelModules: _
  });
  const oe = D.useMemo(() => Io(d.variables, L), [d.variables, L]), fe = (R) => (W) => {
    const N = { ...d, [R]: W };
    g(N), B.current && clearTimeout(B.current), B.current = setTimeout(async () => {
      const G = await Wo(
        l,
        R,
        N,
        o,
        W
      );
      g(G);
    }, 300);
  }, p = async () => {
    const R = await Zo(l, d, o);
    R && g(R);
  }, de = async () => {
    const R = await Ko(l, d, o);
    R && g(R);
  }, ye = async () => {
    d.model && Go(l, d.model);
  }, m = async () => {
    d.entity && co(l, d.entity.qualifiedName);
  }, he = async () => {
    const R = await Xo(l, Ht, d, o);
    R && g(R);
  }, be = async (R, W) => {
    if (!W)
      return;
    const N = await Mt(R, W);
    if (!N)
      return;
    const G = await so(N, R);
    if (G !== void 0)
      return G ? /* @__PURE__ */ x.jsx(Oo, {}) : /* @__PURE__ */ x.jsx(Vo, {});
  }, te = D.useMemo(() => {
    let R = "";
    return d.maxTokens !== void 0 && (R += "Max tokens: " + d.maxTokens.toLocaleString(navigator.language)), d.temperature !== void 0 && (R.length > 0 && (R += ", "), R += "Temperature: " + d.temperature.toLocaleString(navigator.language, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 2
    })), d.topP !== void 0 && (R.length > 0 && (R += ", "), R += "Top P: " + d.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), R;
  }, [d.temperature, d.maxTokens, d.topP]), Ee = async (R) => ({
    isValidModel: await vt("model", l, R),
    isValidEntity: await vt("entity", l, R),
    isValidUserPrompt: await vt("userPrompt", l, R),
    missingAttributes: await Lo(l, R),
    unusedAttributes: await Po(l, R),
    isValidToolChoice: await vt("toolChoice", l, R)
  }), Ce = () => {
    var R, W, N;
    return /* @__PURE__ */ x.jsxs($e, { label: "General", children: [
      /* @__PURE__ */ x.jsx(
        qt,
        {
          ariaLabel: "Model",
          label: "Model",
          value: ((R = d.model) == null ? void 0 : R.qualifiedName) || "",
          icon: d.model ? uo : void 0,
          buttonCaption: "Select...",
          onClick: de,
          validate: () => s.isValidModel,
          buttonCaptionSecondary: d.model ? "Show" : void 0,
          onClickSecondary: d.model ? ye : void 0
        }
      ),
      /* @__PURE__ */ x.jsx(
        qt,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: te,
          buttonCaption: "Edit",
          onClick: he,
          validate: void 0
        }
      ),
      /* @__PURE__ */ x.jsx(
        Zl,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: d.description,
          onChange: fe("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ x.jsx(
        qt,
        {
          ariaLabel: "Context entity",
          label: "Context entity",
          value: ((W = d.entity) == null ? void 0 : W.qualifiedName) || "",
          icon: c,
          onClick: p,
          buttonCaption: "Select...",
          validate: () => s.isValidEntity,
          buttonCaptionSecondary: d.entity ? "Show" : void 0,
          onClickSecondary: d.entity ? m : void 0
        }
      ),
      d.entity && s.missingAttributes.length > 0 && /* @__PURE__ */ x.jsxs(ti, { children: [
        /* @__PURE__ */ x.jsx(Qe, { children: `The following attributes cannot be found in ${d.entity.qualifiedName}:` }),
        /* @__PURE__ */ x.jsx("div", { children: s.missingAttributes.map((G) => `{{${G}}}`).join(", ") })
      ] }),
      d.entity && s.unusedAttributes.length > 0 && !v && /* @__PURE__ */ x.jsxs(ei, { onClose: () => k(!0), children: [
        /* @__PURE__ */ x.jsx(Qe, { children: `The following attributes are found in ${(N = d.entity) == null ? void 0 : N.qualifiedName}, but are not in use.` }),
        /* @__PURE__ */ x.jsx("div", { children: s.unusedAttributes.map((G) => `{{${G}}}`).join(", ") })
      ] })
    ] });
  }, De = () => /* @__PURE__ */ x.jsx($e, { label: "System prompt", children: /* @__PURE__ */ x.jsx(
    Zn,
    {
      ariaLabel: "System prompt",
      value: d.systemPrompt,
      onChange: fe("systemPrompt"),
      highlightRules: oe,
      placeholder: "Enter the system prompt here. Outline the agent's goals, constraints and behavior. To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), Fe = () => /* @__PURE__ */ x.jsx($e, { label: "User prompt", children: /* @__PURE__ */ x.jsx(
    Zn,
    {
      ariaLabel: "User prompt",
      value: d.userPrompt || "",
      onChange: fe("userPrompt"),
      highlightRules: oe,
      validate: () => s.isValidUserPrompt,
      placeholder: "Enter the user prompt here. Define the input from the user of the system that triggers the agent.To create variables, use double curly brackets, like {{VariableName}}."
    }
  ) }), qe = () => /* @__PURE__ */ x.jsx(
    n1,
    {
      agent: d,
      studioPro: l,
      componentName: Ht,
      updateStudioProDocument: o,
      onAgentChange: g,
      toolValidations: y,
      agentValidationInfo: s
    }
  ), Bt = () => /* @__PURE__ */ x.jsx(
    Qp,
    {
      variables: d.variables,
      highlightRules: oe,
      triggerTestAction: M,
      isDisabled: F || i,
      showUnsavedChangesWarning: i
    }
  ), Nt = () => /* @__PURE__ */ x.jsx(
    Ia,
    {
      agent: d,
      studioPro: l,
      componentName: Ht,
      updateStudioProDocument: o,
      onAgentChange: g,
      knowledgebaseToolValidations: b
    }
  ), $t = () => /* @__PURE__ */ x.jsx(
    Up,
    {
      agentName: e,
      response: H,
      isLoading: F,
      isError: V,
      error: w
    }
  );
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(Wn, { children: [
      Ce(),
      De(),
      Fe(),
      qe(),
      Nt()
    ] }),
    /* @__PURE__ */ x.jsxs(Wn, { children: [
      Bt(),
      $t()
    ] })
  ] });
}, l1 = fo(), o1 = ({ studioPro: e, documentId: t }) => {
  var y, E, b, A;
  const n = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [i, l] = D.useState(!1), [o, a] = D.useState(l1), [u, s] = D.useState(0), [f, c] = D.useState(!1), [h, d] = D.useState(!1), g = [
    t,
    (y = o.contents.model) == null ? void 0 : y.documentId,
    ...o.contents.tools.map((L) => L.document.documentId),
    ...(o.contents.knowledgebaseTools || []).map((L) => L.document.documentId)
  ].filter((L) => !!L), v = o.contents.entity ? [(A = (b = (E = o.contents.entity) == null ? void 0 : E.qualifiedName) == null ? void 0 : b.split(".")) == null ? void 0 : A[0]] : void 0;
  D.useEffect(() => {
    r.getDocumentById(t).then(async (L) => {
      if (L && !("error" in L))
        l(!0), a(L.document);
      else
        throw new Error((L == null ? void 0 : L.error) || "Document not found");
    }).catch(async (L) => {
      await n.show("error", "Error loading document", "Details: " + (L == null ? void 0 : L.message) || L), l(!0);
    });
  }, [u]);
  const k = D.useCallback(
    (L) => {
      L.some((C) => C === t) && s((C) => C + 1), d(!0);
    },
    [t]
  );
  return Qr({
    studioPro: e,
    dependentIds: g,
    onDependentDocumentsChanged: k,
    watchProjectSettings: !0,
    watchDomainModelModules: v
  }), D.useEffect(() => {
    const L = (C) => {
      c(C.isConnected), d(!1);
    };
    return e.runtime.controller.addEventListener("connectionChanged", L), () => {
      e.runtime.controller.removeEventListener("connectionChanged", L);
    };
  }, []), D.useEffect(() => {
    Fo(e).then((L) => {
      c(L);
    });
  }, [e]), /* @__PURE__ */ x.jsx(Kl, { studioPro: e, children: /* @__PURE__ */ x.jsxs(Gl, { children: [
    !i && /* @__PURE__ */ x.jsx(Ql, {}),
    i && /* @__PURE__ */ x.jsx(Xl, { children: /* @__PURE__ */ x.jsx(
      i1,
      {
        agentDocument: o,
        isRuntimeConnected: f,
        showUnsavedChangesWarning: h && f,
        studioPro: e,
        updateStudioProDocument: Eo(e, t)
      }
    ) })
  ] }) });
}, y1 = Yl(o1);
export {
  o1 as App,
  y1 as component
};
