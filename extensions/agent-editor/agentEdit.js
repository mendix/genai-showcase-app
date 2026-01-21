import { $ as ee, r as f, a as qn, b as ue, c as Yn, d as Zn, e as me, f as Ze, g as xe, h as Ut, i as V, j as U, k as qt, l as lt, m as Yt, n as Zt, o as Xt, p as Xn, q as te, s as Gt, t as Qt, u as ke, v as Jt, w as Q, x as Gn, y as ce, z as Qn, A as Jn, B as k, C as De, D as Ae, E as It, F as _n, G as eo, H as to, I as Se, J as it, K as nt, L as _t, M as oe, N as el, O as Xe, P as ne, Q as ge, R as X, S as lo, T as io, U as ot, V as no, W as rt, X as Ee, Y as tl, Z as ut, _ as oo, a0 as ro, a1 as uo, a2 as ao, a3 as Fe, a4 as so, a5 as co, a6 as Pt, a7 as ho, a8 as fo, a9 as po, aa as Rt, ab as vo, ac as Le, ad as P, ae as y, af as mo, ag as le, ah as T, ai as Me, aj as go, ak as bo, al as yo, am as $e, an as $o, ao as xo, ap as wo, aq as Co, ar as ll, as as ko, at as Do, au as Re, av as At, aw as So, ax as Eo, ay as zo } from "./TextInputWithIcon-B3kv_B9i.js";
import { c as Bo } from "./componentLoader-_xi6kKSa.js";
import { c as Io, a as Po, m as at, i as Ro, b as Ao, h as Mo, g as To, d as Fo, e as Ko, f as Vo, j as Mt, k as No, u as Ho } from "./index-CCba4LmR.js";
import { $ as L, a as _, b as ie, c as Pe, d as jo, e as il, f as Ke, g as st, h as Lo, i as nl, j as he, k as ol, l as Oo, m as Wo, n as Uo, o as rl, p as qo, q as Yo, r as ul, s as Zo, t as Xo, u as dt, v as Z, w as Go, x as Qo, y as ze, z as be, A as Jo, B as _o, C as er, D as ct, E as tr, F as al, G as lr, H as ir, I as nr, J as or, K as rr, L as ur, _ as Ge, M as ar } from "./ComboBox-DOXi1OXZ.js";
import { n as sr, T as Tt, a as Oe, g as dr } from "./MicroflowIcon-B4IwsC9b.js";
import { I as Ft, W as cr } from "./Banner-CTNaNVaj.js";
import { m as hr } from "./modelUtils-BKeUOTig.js";
import { I as Kt, T as fr } from "./TextWithIcon-P8z9vjya.js";
function pr(t = {}) {
  let { locale: e } = ee();
  return f.useMemo(() => new Intl.ListFormat(e, t), [
    e,
    t
  ]);
}
function vr(t) {
  let { onMoveStart: e, onMove: l, onMoveEnd: i } = t, n = f.useRef({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: o, removeGlobalListener: r } = qn(), u = ue((d, c, h, p) => {
    h === 0 && p === 0 || (n.current.didMove || (n.current.didMove = !0, e == null || e({
      type: "movestart",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    })), l == null || l({
      type: "move",
      pointerType: c,
      deltaX: h,
      deltaY: p,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  }), s = ue((d, c) => {
    Yn(), n.current.didMove && (i == null || i({
      type: "moveend",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  });
  return {
    moveProps: f.useMemo(() => {
      let d = {}, c = () => {
        Zn(), n.current.didMove = !1;
      };
      if (typeof PointerEvent > "u" && process.env.NODE_ENV === "test") {
        let p = (m) => {
          if (m.button === 0) {
            var C, $, x, w;
            u(m, "mouse", m.pageX - ((x = (C = n.current.lastPosition) === null || C === void 0 ? void 0 : C.pageX) !== null && x !== void 0 ? x : 0), m.pageY - ((w = ($ = n.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageY) !== null && w !== void 0 ? w : 0)), n.current.lastPosition = {
              pageX: m.pageX,
              pageY: m.pageY
            };
          }
        }, v = (m) => {
          m.button === 0 && (s(m, "mouse"), r(window, "mousemove", p, !1), r(window, "mouseup", v, !1));
        };
        d.onMouseDown = (m) => {
          m.button === 0 && (c(), m.stopPropagation(), m.preventDefault(), n.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          }, o(window, "mousemove", p, !1), o(window, "mouseup", v, !1));
        };
        let b = (m) => {
          let C = [
            ...m.changedTouches
          ].findIndex(({ identifier: S }) => S === n.current.id);
          if (C >= 0) {
            var $, x;
            let { pageX: S, pageY: R } = m.changedTouches[C];
            var w, D;
            u(m, "touch", S - ((w = ($ = n.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageX) !== null && w !== void 0 ? w : 0), R - ((D = (x = n.current.lastPosition) === null || x === void 0 ? void 0 : x.pageY) !== null && D !== void 0 ? D : 0)), n.current.lastPosition = {
              pageX: S,
              pageY: R
            };
          }
        }, g = (m) => {
          [
            ...m.changedTouches
          ].findIndex(({ identifier: $ }) => $ === n.current.id) >= 0 && (s(m, "touch"), n.current.id = null, r(window, "touchmove", b), r(window, "touchend", g), r(window, "touchcancel", g));
        };
        d.onTouchStart = (m) => {
          if (m.changedTouches.length === 0 || n.current.id != null) return;
          let { pageX: C, pageY: $, identifier: x } = m.changedTouches[0];
          c(), m.stopPropagation(), m.preventDefault(), n.current.lastPosition = {
            pageX: C,
            pageY: $
          }, n.current.id = x, o(window, "touchmove", b, !1), o(window, "touchend", g, !1), o(window, "touchcancel", g, !1);
        };
      } else {
        let p = (b) => {
          if (b.pointerId === n.current.id) {
            var g, m;
            let x = b.pointerType || "mouse";
            var C, $;
            u(b, x, b.pageX - ((C = (g = n.current.lastPosition) === null || g === void 0 ? void 0 : g.pageX) !== null && C !== void 0 ? C : 0), b.pageY - (($ = (m = n.current.lastPosition) === null || m === void 0 ? void 0 : m.pageY) !== null && $ !== void 0 ? $ : 0)), n.current.lastPosition = {
              pageX: b.pageX,
              pageY: b.pageY
            };
          }
        }, v = (b) => {
          if (b.pointerId === n.current.id) {
            let g = b.pointerType || "mouse";
            s(b, g), n.current.id = null, r(window, "pointermove", p, !1), r(window, "pointerup", v, !1), r(window, "pointercancel", v, !1);
          }
        };
        d.onPointerDown = (b) => {
          b.button === 0 && n.current.id == null && (c(), b.stopPropagation(), b.preventDefault(), n.current.lastPosition = {
            pageX: b.pageX,
            pageY: b.pageY
          }, n.current.id = b.pointerId, o(window, "pointermove", p, !1), o(window, "pointerup", v, !1), o(window, "pointercancel", v, !1));
        };
      }
      let h = (p, v, b) => {
        c(), u(p, "keyboard", v, b), s(p, "keyboard");
      };
      return d.onKeyDown = (p) => {
        switch (p.key) {
          case "Left":
          case "ArrowLeft":
            p.preventDefault(), p.stopPropagation(), h(p, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            p.preventDefault(), p.stopPropagation(), h(p, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            p.preventDefault(), p.stopPropagation(), h(p, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            p.preventDefault(), p.stopPropagation(), h(p, 0, 1);
            break;
        }
      }, d;
    }, [
      n,
      o,
      r,
      u,
      s
    ])
  };
}
function mr(t, e) {
  let l = e == null ? void 0 : e.isDisabled, [i, n] = f.useState(!1);
  return me(() => {
    if (t != null && t.current && !l) {
      let o = () => {
        if (t.current) {
          let u = Ze(t.current, {
            tabbable: !0
          });
          n(!!u.nextNode());
        }
      };
      o();
      let r = new MutationObserver(o);
      return r.observe(t.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        r.disconnect();
      };
    }
  }), l ? !1 : i;
}
function gr(t, e, l) {
  let { isDisabled: i = !1, isReadOnly: n = !1, value: o, name: r, form: u, children: s, "aria-label": a, "aria-labelledby": d, validationState: c = "valid", isInvalid: h, onPressStart: p, onPressEnd: v, onPressChange: b, onPress: g, onPressUp: m, onClick: C } = t, $ = (E) => {
    E.stopPropagation(), e.setSelected(E.target.checked);
  }, x = s != null, w = a != null || d != null;
  !x && !w && process.env.NODE_ENV !== "production" && console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps: D, isPressed: S } = xe({
    onPressStart: p,
    onPressEnd: v,
    onPressChange: b,
    onPress: g,
    onPressUp: m,
    onClick: C,
    isDisabled: i
  }), { pressProps: R, isPressed: B } = xe({
    onPressStart: p,
    onPressEnd: v,
    onPressChange: b,
    onPressUp: m,
    onClick: C,
    onPress(E) {
      var A;
      g == null || g(E), e.toggle(), (A = l.current) === null || A === void 0 || A.focus();
    },
    isDisabled: i || n
  }), { focusableProps: z } = Ut(t, l), K = V(D, z), N = U(t, {
    labelable: !0
  });
  return qt(l, e.defaultSelected, e.setSelected), {
    labelProps: V(R, {
      onClick: (E) => E.preventDefault()
    }),
    inputProps: V(N, {
      "aria-invalid": h || c === "invalid" || void 0,
      "aria-errormessage": t["aria-errormessage"],
      "aria-controls": t["aria-controls"],
      "aria-readonly": n || void 0,
      onChange: $,
      disabled: i,
      ...o == null ? {} : {
        value: o
      },
      name: r,
      form: u,
      type: "checkbox",
      ...K
    }),
    isSelected: e.isSelected,
    isPressed: S || B,
    isDisabled: i,
    isReadOnly: n,
    isInvalid: h || c === "invalid"
  };
}
function sl(t, e, l) {
  let i = lt({
    ...t,
    value: e.isSelected
  }), { isInvalid: n, validationErrors: o, validationDetails: r } = i.displayValidation, { labelProps: u, inputProps: s, isSelected: a, isPressed: d, isDisabled: c, isReadOnly: h } = gr({
    ...t,
    isInvalid: n
  }, e, l);
  Yt(t, i, l);
  let { isIndeterminate: p, isRequired: v, validationBehavior: b = "aria" } = t;
  f.useEffect(() => {
    l.current && (l.current.indeterminate = !!p);
  });
  let { pressProps: g } = xe({
    isDisabled: c || h,
    onPress() {
      let { [Zt]: m } = t, { commitValidation: C } = m || i;
      C();
    }
  });
  return {
    labelProps: V(u, g, f.useMemo(() => ({
      // Prevent label from being focused when mouse down on it.
      // Note, this does not prevent the input from being focused in the `click` event.
      onMouseDown: (m) => m.preventDefault()
    }), [])),
    inputProps: {
      ...s,
      checked: a,
      "aria-required": v && b === "aria" || void 0,
      required: v && b === "native"
    },
    isSelected: a,
    isPressed: d,
    isDisabled: c,
    isReadOnly: h,
    isInvalid: n,
    validationErrors: o,
    validationDetails: r
  };
}
const br = /* @__PURE__ */ new WeakMap();
function dl(t = {}) {
  let { isReadOnly: e } = t, [l, i] = Xt(t.isSelected, t.defaultSelected || !1, t.onChange), [n] = f.useState(l);
  function o(s) {
    e || i(s);
  }
  function r() {
    e || i(!l);
  }
  var u;
  return {
    isSelected: l,
    defaultSelected: (u = t.defaultSelected) !== null && u !== void 0 ? u : n,
    setSelected: o,
    toggle: r
  };
}
function yr(t, e, l) {
  const i = dl({
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isSelected: e.isSelected(t.value),
    defaultSelected: e.defaultValue.includes(t.value),
    onChange(m) {
      m ? e.addValue(t.value) : e.removeValue(t.value), t.onChange && t.onChange(m);
    }
  });
  let { name: n, form: o, descriptionId: r, errorMessageId: u, validationBehavior: s } = br.get(e);
  var a;
  s = (a = t.validationBehavior) !== null && a !== void 0 ? a : s;
  let { realtimeValidation: d } = lt({
    ...t,
    value: i.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  }), c = f.useRef(Xn), h = () => {
    e.setInvalid(t.value, d.isInvalid ? d : c.current);
  };
  f.useEffect(h);
  let p = e.realtimeValidation.isInvalid ? e.realtimeValidation : d, v = s === "native" ? e.displayValidation : p;
  var b;
  let g = sl({
    ...t,
    isReadOnly: t.isReadOnly || e.isReadOnly,
    isDisabled: t.isDisabled || e.isDisabled,
    name: t.name || n,
    form: t.form || o,
    isRequired: (b = t.isRequired) !== null && b !== void 0 ? b : e.isRequired,
    validationBehavior: s,
    [Zt]: {
      realtimeValidation: p,
      displayValidation: v,
      resetValidation: e.resetValidation,
      commitValidation: e.commitValidation,
      updateValidation(m) {
        c.current = m, h();
      }
    }
  }, i, l);
  return {
    ...g,
    inputProps: {
      ...g.inputProps,
      "aria-describedby": [
        t["aria-describedby"],
        e.isInvalid ? u : null,
        r
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
class cl {
  isCell(e) {
    return e.type === "cell";
  }
  isRow(e) {
    return e.type === "row" || e.type === "item";
  }
  isDisabled(e) {
    var l;
    return this.disabledBehavior === "all" && (((l = e.props) === null || l === void 0 ? void 0 : l.isDisabled) || this.disabledKeys.has(e.key));
  }
  findPreviousKey(e, l) {
    let i = e != null ? this.collection.getKeyBefore(e) : this.collection.getLastKey();
    for (; i != null; ) {
      let n = this.collection.getItem(i);
      if (!n) return null;
      if (!this.isDisabled(n) && (!l || l(n))) return i;
      i = this.collection.getKeyBefore(i);
    }
    return null;
  }
  findNextKey(e, l) {
    let i = e != null ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
    for (; i != null; ) {
      let n = this.collection.getItem(i);
      if (!n) return null;
      if (!this.isDisabled(n) && (!l || l(n))) return i;
      if (i = this.collection.getKeyAfter(i), i == null) return null;
    }
    return null;
  }
  getKeyForItemInRowByIndex(e, l = 0) {
    if (l < 0) return null;
    let i = this.collection.getItem(e);
    if (!i) return null;
    let n = 0;
    for (let u of L(i, this.collection)) {
      var o;
      if (u.colSpan && u.colSpan + n > l) return (o = u.key) !== null && o !== void 0 ? o : null;
      u.colSpan && (n = n + u.colSpan - 1);
      var r;
      if (n === l) return (r = u.key) !== null && r !== void 0 ? r : null;
      n++;
    }
    return null;
  }
  getKeyBelow(e) {
    let l = e, i = this.collection.getItem(l);
    if (!i) return null;
    var n;
    if (this.isCell(i) && (l = (n = i.parentKey) !== null && n !== void 0 ? n : null), l == null) return null;
    if (l = this.findNextKey(l, (o) => o.type === "item"), l != null) {
      if (this.isCell(i)) {
        let o = i.colIndex ? i.colIndex : i.index;
        return this.getKeyForItemInRowByIndex(l, o);
      }
      if (this.focusMode === "row") return l;
    }
    return null;
  }
  getKeyAbove(e) {
    let l = e, i = this.collection.getItem(l);
    if (!i) return null;
    var n;
    if (this.isCell(i) && (l = (n = i.parentKey) !== null && n !== void 0 ? n : null), l == null) return null;
    if (l = this.findPreviousKey(l, (o) => o.type === "item"), l != null) {
      if (this.isCell(i)) {
        let o = i.colIndex ? i.colIndex : i.index;
        return this.getKeyForItemInRowByIndex(l, o);
      }
      if (this.focusMode === "row") return l;
    }
    return null;
  }
  getKeyRightOf(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (this.isRow(l)) {
      var i, n;
      let d = L(l, this.collection);
      var o;
      return (o = this.direction === "rtl" ? (i = _(d)) === null || i === void 0 ? void 0 : i.key : (n = ie(d)) === null || n === void 0 ? void 0 : n.key) !== null && o !== void 0 ? o : null;
    }
    if (this.isCell(l) && l.parentKey != null) {
      let d = this.collection.getItem(l.parentKey);
      if (!d) return null;
      let c = L(d, this.collection);
      var r;
      let h = (r = this.direction === "rtl" ? Pe(c, l.index - 1) : Pe(c, l.index + 1)) !== null && r !== void 0 ? r : null;
      var u;
      if (h) return (u = h.key) !== null && u !== void 0 ? u : null;
      var s;
      if (this.focusMode === "row") return (s = l.parentKey) !== null && s !== void 0 ? s : null;
      var a;
      return (a = this.direction === "rtl" ? this.getFirstKey(e) : this.getLastKey(e)) !== null && a !== void 0 ? a : null;
    }
    return null;
  }
  getKeyLeftOf(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (this.isRow(l)) {
      var i, n;
      let d = L(l, this.collection);
      var o;
      return (o = this.direction === "rtl" ? (i = ie(d)) === null || i === void 0 ? void 0 : i.key : (n = _(d)) === null || n === void 0 ? void 0 : n.key) !== null && o !== void 0 ? o : null;
    }
    if (this.isCell(l) && l.parentKey != null) {
      let d = this.collection.getItem(l.parentKey);
      if (!d) return null;
      let c = L(d, this.collection);
      var r;
      let h = (r = this.direction === "rtl" ? Pe(c, l.index + 1) : Pe(c, l.index - 1)) !== null && r !== void 0 ? r : null;
      var u;
      if (h) return (u = h.key) !== null && u !== void 0 ? u : null;
      var s;
      if (this.focusMode === "row") return (s = l.parentKey) !== null && s !== void 0 ? s : null;
      var a;
      return (a = this.direction === "rtl" ? this.getLastKey(e) : this.getFirstKey(e)) !== null && a !== void 0 ? a : null;
    }
    return null;
  }
  getFirstKey(e, l) {
    let i = e ?? null, n;
    if (i != null) {
      if (n = this.collection.getItem(i), !n) return null;
      if (this.isCell(n) && !l && n.parentKey != null) {
        var o;
        let a = this.collection.getItem(n.parentKey);
        if (!a) return null;
        var r;
        return (r = (o = ie(L(a, this.collection))) === null || o === void 0 ? void 0 : o.key) !== null && r !== void 0 ? r : null;
      }
    }
    if (i = this.findNextKey(void 0, (a) => a.type === "item"), i != null && (n && this.isCell(n) && l || this.focusMode === "cell")) {
      var u;
      let a = this.collection.getItem(i);
      if (!a) return null;
      var s;
      i = (s = (u = ie(L(a, this.collection))) === null || u === void 0 ? void 0 : u.key) !== null && s !== void 0 ? s : null;
    }
    return i;
  }
  getLastKey(e, l) {
    let i = e ?? null, n;
    if (i != null) {
      if (n = this.collection.getItem(i), !n) return null;
      if (this.isCell(n) && !l && n.parentKey != null) {
        var o;
        let a = this.collection.getItem(n.parentKey);
        if (!a) return null;
        let d = L(a, this.collection);
        var r;
        return (r = (o = _(d)) === null || o === void 0 ? void 0 : o.key) !== null && r !== void 0 ? r : null;
      }
    }
    if (i = this.findPreviousKey(void 0, (a) => a.type === "item"), i != null && (n && this.isCell(n) && l || this.focusMode === "cell")) {
      var u;
      let a = this.collection.getItem(i);
      if (!a) return null;
      let d = L(a, this.collection);
      var s;
      i = (s = (u = _(d)) === null || u === void 0 ? void 0 : u.key) !== null && s !== void 0 ? s : null;
    }
    return i;
  }
  getKeyPageAbove(e) {
    let l = e, i = this.layoutDelegate.getItemRect(l);
    if (!i) return null;
    let n = Math.max(0, i.y + i.height - this.layoutDelegate.getVisibleRect().height);
    for (; i && i.y > n && l != null; ) {
      var o;
      if (l = (o = this.getKeyAbove(l)) !== null && o !== void 0 ? o : null, l == null) break;
      i = this.layoutDelegate.getItemRect(l);
    }
    return l;
  }
  getKeyPageBelow(e) {
    let l = e, i = this.layoutDelegate.getItemRect(l);
    if (!i) return null;
    let n = this.layoutDelegate.getVisibleRect().height, o = Math.min(this.layoutDelegate.getContentSize().height, i.y + n);
    for (; i && i.y + i.height < o; ) {
      let r = this.getKeyBelow(l);
      if (r == null) break;
      i = this.layoutDelegate.getItemRect(r), l = r;
    }
    return l;
  }
  getKeyForSearch(e, l) {
    let i = l ?? null;
    if (!this.collator) return null;
    let n = this.collection;
    if (i = l ?? this.getFirstKey(), i == null) return null;
    let o = n.getItem(i);
    if (!o) return null;
    var r;
    o.type === "cell" && (i = (r = o.parentKey) !== null && r !== void 0 ? r : null);
    let u = !1;
    for (; i != null; ) {
      let d = n.getItem(i);
      if (!d) return null;
      if (d.textValue) {
        let c = d.textValue.slice(0, e.length);
        if (this.collator.compare(c, e) === 0) {
          var s, a;
          return this.isRow(d) && this.focusMode === "cell" ? (a = (s = ie(L(d, this.collection))) === null || s === void 0 ? void 0 : s.key) !== null && a !== void 0 ? a : null : d.key;
        }
      }
      i = this.findNextKey(i, (c) => c.type === "item"), i == null && !u && (i = this.getFirstKey(), u = !0);
    }
    return null;
  }
  constructor(e) {
    if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || "all", this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw new Error("Either a layout or a ref must be specified.");
    this.layoutDelegate = e.layoutDelegate || (e.layout ? new $r(e.layout) : new jo(e.ref));
    var l;
    this.focusMode = (l = e.focusMode) !== null && l !== void 0 ? l : "row";
  }
}
class $r {
  getContentSize() {
    return this.layout.getContentSize();
  }
  getItemRect(e) {
    var l;
    return ((l = this.layout.getLayoutInfo(e)) === null || l === void 0 ? void 0 : l.rect) || null;
  }
  getVisibleRect() {
    return this.layout.virtualizer.visibleRect;
  }
  constructor(e) {
    this.layout = e;
  }
}
const ht = /* @__PURE__ */ new WeakMap();
var hl = {};
hl = {
  deselectedItem: (t) => `${t.item} غير المحدد`,
  longPressToSelect: "اضغط مطولًا للدخول إلى وضع التحديد.",
  select: "تحديد",
  selectedAll: "جميع العناصر المحددة.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "لم يتم تحديد عناصر",
    one: () => `${e.number(t.count)} عنصر محدد`,
    other: () => `${e.number(t.count)} عنصر محدد`
  })}.`,
  selectedItem: (t) => `${t.item} المحدد`
};
var fl = {};
fl = {
  deselectedItem: (t) => `${t.item} не е избран.`,
  longPressToSelect: "Натиснете и задръжте за да влезете в избирателен режим.",
  select: "Изберете",
  selectedAll: "Всички елементи са избрани.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Няма избрани елементи",
    one: () => `${e.number(t.count)} избран елемент`,
    other: () => `${e.number(t.count)} избрани елементи`
  })}.`,
  selectedItem: (t) => `${t.item} избран.`
};
var pl = {};
pl = {
  deselectedItem: (t) => `Položka ${t.item} není vybrána.`,
  longPressToSelect: "Dlouhým stisknutím přejdete do režimu výběru.",
  select: "Vybrat",
  selectedAll: "Vybrány všechny položky.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nevybrány žádné položky",
    one: () => `Vybrána ${e.number(t.count)} položka`,
    other: () => `Vybráno ${e.number(t.count)} položek`
  })}.`,
  selectedItem: (t) => `Vybrána položka ${t.item}.`
};
var vl = {};
vl = {
  deselectedItem: (t) => `${t.item} ikke valgt.`,
  longPressToSelect: "Lav et langt tryk for at aktivere valgtilstand.",
  select: "Vælg",
  selectedAll: "Alle elementer valgt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ingen elementer valgt",
    one: () => `${e.number(t.count)} element valgt`,
    other: () => `${e.number(t.count)} elementer valgt`
  })}.`,
  selectedItem: (t) => `${t.item} valgt.`
};
var ml = {};
ml = {
  deselectedItem: (t) => `${t.item} nicht ausgewählt.`,
  longPressToSelect: "Gedrückt halten, um Auswahlmodus zu öffnen.",
  select: "Auswählen",
  selectedAll: "Alle Elemente ausgewählt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Keine Elemente ausgewählt",
    one: () => `${e.number(t.count)} Element ausgewählt`,
    other: () => `${e.number(t.count)} Elemente ausgewählt`
  })}.`,
  selectedItem: (t) => `${t.item} ausgewählt.`
};
var gl = {};
gl = {
  deselectedItem: (t) => `Δεν επιλέχθηκε το στοιχείο ${t.item}.`,
  longPressToSelect: "Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.",
  select: "Επιλογή",
  selectedAll: "Επιλέχθηκαν όλα τα στοιχεία.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Δεν επιλέχθηκαν στοιχεία",
    one: () => `Επιλέχθηκε ${e.number(t.count)} στοιχείο`,
    other: () => `Επιλέχθηκαν ${e.number(t.count)} στοιχεία`
  })}.`,
  selectedItem: (t) => `Επιλέχθηκε το στοιχείο ${t.item}.`
};
var bl = {};
bl = {
  deselectedItem: (t) => `${t.item} not selected.`,
  select: "Select",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "No items selected",
    one: () => `${e.number(t.count)} item selected`,
    other: () => `${e.number(t.count)} items selected`
  })}.`,
  selectedAll: "All items selected.",
  selectedItem: (t) => `${t.item} selected.`,
  longPressToSelect: "Long press to enter selection mode."
};
var yl = {};
yl = {
  deselectedItem: (t) => `${t.item} no seleccionado.`,
  longPressToSelect: "Mantenga pulsado para abrir el modo de selección.",
  select: "Seleccionar",
  selectedAll: "Todos los elementos seleccionados.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ningún elemento seleccionado",
    one: () => `${e.number(t.count)} elemento seleccionado`,
    other: () => `${e.number(t.count)} elementos seleccionados`
  })}.`,
  selectedItem: (t) => `${t.item} seleccionado.`
};
var $l = {};
$l = {
  deselectedItem: (t) => `${t.item} pole valitud.`,
  longPressToSelect: "Valikurežiimi sisenemiseks vajutage pikalt.",
  select: "Vali",
  selectedAll: "Kõik üksused valitud.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Üksusi pole valitud",
    one: () => `${e.number(t.count)} üksus valitud`,
    other: () => `${e.number(t.count)} üksust valitud`
  })}.`,
  selectedItem: (t) => `${t.item} valitud.`
};
var xl = {};
xl = {
  deselectedItem: (t) => `Kohdetta ${t.item} ei valittu.`,
  longPressToSelect: "Siirry valintatilaan painamalla pitkään.",
  select: "Valitse",
  selectedAll: "Kaikki kohteet valittu.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ei yhtään kohdetta valittu",
    one: () => `${e.number(t.count)} kohde valittu`,
    other: () => `${e.number(t.count)} kohdetta valittu`
  })}.`,
  selectedItem: (t) => `${t.item} valittu.`
};
var wl = {};
wl = {
  deselectedItem: (t) => `${t.item} non sélectionné.`,
  longPressToSelect: "Appuyez de manière prolongée pour passer en mode de sélection.",
  select: "Sélectionner",
  selectedAll: "Tous les éléments sélectionnés.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Aucun élément sélectionné",
    one: () => `${e.number(t.count)} élément sélectionné`,
    other: () => `${e.number(t.count)} éléments sélectionnés`
  })}.`,
  selectedItem: (t) => `${t.item} sélectionné.`
};
var Cl = {};
Cl = {
  deselectedItem: (t) => `${t.item} לא נבחר.`,
  longPressToSelect: "הקשה ארוכה לכניסה למצב בחירה.",
  select: "בחר",
  selectedAll: "כל הפריטים נבחרו.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "לא נבחרו פריטים",
    one: () => `פריט ${e.number(t.count)} נבחר`,
    other: () => `${e.number(t.count)} פריטים נבחרו`
  })}.`,
  selectedItem: (t) => `${t.item} נבחר.`
};
var kl = {};
kl = {
  deselectedItem: (t) => `Stavka ${t.item} nije odabrana.`,
  longPressToSelect: "Dugo pritisnite za ulazak u način odabira.",
  select: "Odaberite",
  selectedAll: "Odabrane su sve stavke.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nije odabrana nijedna stavka",
    one: () => `Odabrana je ${e.number(t.count)} stavka`,
    other: () => `Odabrano je ${e.number(t.count)} stavki`
  })}.`,
  selectedItem: (t) => `Stavka ${t.item} je odabrana.`
};
var Dl = {};
Dl = {
  deselectedItem: (t) => `${t.item} nincs kijelölve.`,
  longPressToSelect: "Nyomja hosszan a kijelöléshez.",
  select: "Kijelölés",
  selectedAll: "Az összes elem kijelölve.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Egy elem sincs kijelölve",
    one: () => `${e.number(t.count)} elem kijelölve`,
    other: () => `${e.number(t.count)} elem kijelölve`
  })}.`,
  selectedItem: (t) => `${t.item} kijelölve.`
};
var Sl = {};
Sl = {
  deselectedItem: (t) => `${t.item} non selezionato.`,
  longPressToSelect: "Premi a lungo per passare alla modalità di selezione.",
  select: "Seleziona",
  selectedAll: "Tutti gli elementi selezionati.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nessun elemento selezionato",
    one: () => `${e.number(t.count)} elemento selezionato`,
    other: () => `${e.number(t.count)} elementi selezionati`
  })}.`,
  selectedItem: (t) => `${t.item} selezionato.`
};
var El = {};
El = {
  deselectedItem: (t) => `${t.item} が選択されていません。`,
  longPressToSelect: "長押しして選択モードを開きます。",
  select: "選択",
  selectedAll: "すべての項目を選択しました。",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "項目が選択されていません",
    one: () => `${e.number(t.count)} 項目を選択しました`,
    other: () => `${e.number(t.count)} 項目を選択しました`
  })}。`,
  selectedItem: (t) => `${t.item} を選択しました。`
};
var zl = {};
zl = {
  deselectedItem: (t) => `${t.item}이(가) 선택되지 않았습니다.`,
  longPressToSelect: "선택 모드로 들어가려면 길게 누르십시오.",
  select: "선택",
  selectedAll: "모든 항목이 선택되었습니다.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "선택된 항목이 없습니다",
    one: () => `${e.number(t.count)}개 항목이 선택되었습니다`,
    other: () => `${e.number(t.count)}개 항목이 선택되었습니다`
  })}.`,
  selectedItem: (t) => `${t.item}이(가) 선택되었습니다.`
};
var Bl = {};
Bl = {
  deselectedItem: (t) => `${t.item} nepasirinkta.`,
  longPressToSelect: "Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.",
  select: "Pasirinkti",
  selectedAll: "Pasirinkti visi elementai.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nepasirinktas nė vienas elementas",
    one: () => `Pasirinktas ${e.number(t.count)} elementas`,
    other: () => `Pasirinkta elementų: ${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `Pasirinkta: ${t.item}.`
};
var Il = {};
Il = {
  deselectedItem: (t) => `Vienums ${t.item} nav atlasīts.`,
  longPressToSelect: "Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.",
  select: "Atlasīt",
  selectedAll: "Atlasīti visi vienumi.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nav atlasīts neviens vienums",
    one: () => `Atlasīto vienumu skaits: ${e.number(t.count)}`,
    other: () => `Atlasīto vienumu skaits: ${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `Atlasīts vienums ${t.item}.`
};
var Pl = {};
Pl = {
  deselectedItem: (t) => `${t.item} er ikke valgt.`,
  longPressToSelect: "Bruk et langt trykk for å gå inn i valgmodus.",
  select: "Velg",
  selectedAll: "Alle elementer er valgt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Ingen elementer er valgt",
    one: () => `${e.number(t.count)} element er valgt`,
    other: () => `${e.number(t.count)} elementer er valgt`
  })}.`,
  selectedItem: (t) => `${t.item} er valgt.`
};
var Rl = {};
Rl = {
  deselectedItem: (t) => `${t.item} niet geselecteerd.`,
  longPressToSelect: "Druk lang om de selectiemodus te openen.",
  select: "Selecteren",
  selectedAll: "Alle items geselecteerd.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Geen items geselecteerd",
    one: () => `${e.number(t.count)} item geselecteerd`,
    other: () => `${e.number(t.count)} items geselecteerd`
  })}.`,
  selectedItem: (t) => `${t.item} geselecteerd.`
};
var Al = {};
Al = {
  deselectedItem: (t) => `Nie zaznaczono ${t.item}.`,
  longPressToSelect: "Naciśnij i przytrzymaj, aby wejść do trybu wyboru.",
  select: "Zaznacz",
  selectedAll: "Wszystkie zaznaczone elementy.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nie zaznaczono żadnych elementów",
    one: () => `${e.number(t.count)} zaznaczony element`,
    other: () => `${e.number(t.count)} zaznaczonych elementów`
  })}.`,
  selectedItem: (t) => `Zaznaczono ${t.item}.`
};
var Ml = {};
Ml = {
  deselectedItem: (t) => `${t.item} não selecionado.`,
  longPressToSelect: "Mantenha pressionado para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${e.number(t.count)} item selecionado`,
    other: () => `${e.number(t.count)} itens selecionados`
  })}.`,
  selectedItem: (t) => `${t.item} selecionado.`
};
var Tl = {};
Tl = {
  deselectedItem: (t) => `${t.item} não selecionado.`,
  longPressToSelect: "Prima continuamente para entrar no modo de seleção.",
  select: "Selecionar",
  selectedAll: "Todos os itens selecionados.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nenhum item selecionado",
    one: () => `${e.number(t.count)} item selecionado`,
    other: () => `${e.number(t.count)} itens selecionados`
  })}.`,
  selectedItem: (t) => `${t.item} selecionado.`
};
var Fl = {};
Fl = {
  deselectedItem: (t) => `${t.item} neselectat.`,
  longPressToSelect: "Apăsați lung pentru a intra în modul de selectare.",
  select: "Selectare",
  selectedAll: "Toate elementele selectate.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Niciun element selectat",
    one: () => `${e.number(t.count)} element selectat`,
    other: () => `${e.number(t.count)} elemente selectate`
  })}.`,
  selectedItem: (t) => `${t.item} selectat.`
};
var Kl = {};
Kl = {
  deselectedItem: (t) => `${t.item} не выбрано.`,
  longPressToSelect: "Нажмите и удерживайте для входа в режим выбора.",
  select: "Выбрать",
  selectedAll: "Выбраны все элементы.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Нет выбранных элементов",
    one: () => `${e.number(t.count)} элемент выбран`,
    other: () => `${e.number(t.count)} элементов выбрано`
  })}.`,
  selectedItem: (t) => `${t.item} выбрано.`
};
var Vl = {};
Vl = {
  deselectedItem: (t) => `Nevybraté položky: ${t.item}.`,
  longPressToSelect: "Dlhším stlačením prejdite do režimu výberu.",
  select: "Vybrať",
  selectedAll: "Všetky vybraté položky.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Žiadne vybraté položky",
    one: () => `${e.number(t.count)} vybratá položka`,
    other: () => `Počet vybratých položiek:${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `Vybraté položky: ${t.item}.`
};
var Nl = {};
Nl = {
  deselectedItem: (t) => `Element ${t.item} ni izbran.`,
  longPressToSelect: "Za izbirni način pritisnite in dlje časa držite.",
  select: "Izberite",
  selectedAll: "Vsi elementi so izbrani.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Noben element ni izbran",
    one: () => `${e.number(t.count)} element je izbran`,
    other: () => `${e.number(t.count)} elementov je izbranih`
  })}.`,
  selectedItem: (t) => `Element ${t.item} je izbran.`
};
var Hl = {};
Hl = {
  deselectedItem: (t) => `${t.item} nije izabrano.`,
  longPressToSelect: "Dugo pritisnite za ulazak u režim biranja.",
  select: "Izaberite",
  selectedAll: "Izabrane su sve stavke.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Nije izabrana nijedna stavka",
    one: () => `Izabrana je ${e.number(t.count)} stavka`,
    other: () => `Izabrano je ${e.number(t.count)} stavki`
  })}.`,
  selectedItem: (t) => `${t.item} je izabrano.`
};
var jl = {};
jl = {
  deselectedItem: (t) => `${t.item} ej markerat.`,
  longPressToSelect: "Tryck länge när du vill öppna väljarläge.",
  select: "Markera",
  selectedAll: "Alla markerade objekt.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Inga markerade objekt",
    one: () => `${e.number(t.count)} markerat objekt`,
    other: () => `${e.number(t.count)} markerade objekt`
  })}.`,
  selectedItem: (t) => `${t.item} markerat.`
};
var Ll = {};
Ll = {
  deselectedItem: (t) => `${t.item} seçilmedi.`,
  longPressToSelect: "Seçim moduna girmek için uzun basın.",
  select: "Seç",
  selectedAll: "Tüm ögeler seçildi.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Hiçbir öge seçilmedi",
    one: () => `${e.number(t.count)} öge seçildi`,
    other: () => `${e.number(t.count)} öge seçildi`
  })}.`,
  selectedItem: (t) => `${t.item} seçildi.`
};
var Ol = {};
Ol = {
  deselectedItem: (t) => `${t.item} не вибрано.`,
  longPressToSelect: "Виконайте довге натиснення, щоб перейти в режим вибору.",
  select: "Вибрати",
  selectedAll: "Усі елементи вибрано.",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "Жодних елементів не вибрано",
    one: () => `${e.number(t.count)} елемент вибрано`,
    other: () => `Вибрано елементів: ${e.number(t.count)}`
  })}.`,
  selectedItem: (t) => `${t.item} вибрано.`
};
var Wl = {};
Wl = {
  deselectedItem: (t) => `未选择 ${t.item}。`,
  longPressToSelect: "长按以进入选择模式。",
  select: "选择",
  selectedAll: "已选择所有项目。",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "未选择项目",
    one: () => `已选择 ${e.number(t.count)} 个项目`,
    other: () => `已选择 ${e.number(t.count)} 个项目`
  })}。`,
  selectedItem: (t) => `已选择 ${t.item}。`
};
var Ul = {};
Ul = {
  deselectedItem: (t) => `未選取「${t.item}」。`,
  longPressToSelect: "長按以進入選擇模式。",
  select: "選取",
  selectedAll: "已選取所有項目。",
  selectedCount: (t, e) => `${e.plural(t.count, {
    "=0": "未選取任何項目",
    one: () => `已選取 ${e.number(t.count)} 個項目`,
    other: () => `已選取 ${e.number(t.count)} 個項目`
  })}。`,
  selectedItem: (t) => `已選取「${t.item}」。`
};
var Ve = {};
Ve = {
  "ar-AE": hl,
  "bg-BG": fl,
  "cs-CZ": pl,
  "da-DK": vl,
  "de-DE": ml,
  "el-GR": gl,
  "en-US": bl,
  "es-ES": yl,
  "et-EE": $l,
  "fi-FI": xl,
  "fr-FR": wl,
  "he-IL": Cl,
  "hr-HR": kl,
  "hu-HU": Dl,
  "it-IT": Sl,
  "ja-JP": El,
  "ko-KR": zl,
  "lt-LT": Bl,
  "lv-LV": Il,
  "nb-NO": Pl,
  "nl-NL": Rl,
  "pl-PL": Al,
  "pt-BR": Ml,
  "pt-PT": Tl,
  "ro-RO": Fl,
  "ru-RU": Kl,
  "sk-SK": Vl,
  "sl-SI": Nl,
  "sr-SP": Hl,
  "sv-SE": jl,
  "tr-TR": Ll,
  "uk-UA": Ol,
  "zh-CN": Wl,
  "zh-TW": Ul
};
function xr(t) {
  return t && t.__esModule ? t.default : t;
}
function wr(t, e) {
  let { getRowText: l = (u) => {
    var s, a, d, c;
    return (c = (s = (a = e.collection).getTextValue) === null || s === void 0 ? void 0 : s.call(a, u)) !== null && c !== void 0 ? c : (d = e.collection.getItem(u)) === null || d === void 0 ? void 0 : d.textValue;
  } } = t, i = te(xr(Ve), "@react-aria/grid"), n = e.selectionManager.rawSelection, o = f.useRef(n), r = ue(() => {
    var u;
    if (!e.selectionManager.isFocused || n === o.current) {
      o.current = n;
      return;
    }
    let s = Vt(n, o.current), a = Vt(o.current, n), d = e.selectionManager.selectionBehavior === "replace", c = [];
    if (e.selectionManager.selectedKeys.size === 1 && d) {
      let h = e.selectionManager.selectedKeys.keys().next().value;
      if (h != null && e.collection.getItem(h)) {
        let p = l(h);
        p && c.push(i.format("selectedItem", {
          item: p
        }));
      }
    } else if (s.size === 1 && a.size === 0) {
      let h = s.keys().next().value;
      if (h != null) {
        let p = l(h);
        p && c.push(i.format("selectedItem", {
          item: p
        }));
      }
    } else if (a.size === 1 && s.size === 0) {
      let h = a.keys().next().value;
      if (h != null && e.collection.getItem(h)) {
        let p = l(h);
        p && c.push(i.format("deselectedItem", {
          item: p
        }));
      }
    }
    e.selectionManager.selectionMode === "multiple" && (c.length === 0 || n === "all" || n.size > 1 || o.current === "all" || ((u = o.current) === null || u === void 0 ? void 0 : u.size) > 1) && c.push(n === "all" ? i.format("selectedAll") : i.format("selectedCount", {
      count: n.size
    })), c.length > 0 && Gt(c.join(" ")), o.current = n;
  });
  il(() => {
    if (e.selectionManager.isFocused) r();
    else {
      let u = requestAnimationFrame(r);
      return () => cancelAnimationFrame(u);
    }
  }, [
    n,
    e.selectionManager.isFocused
  ]);
}
function Vt(t, e) {
  let l = /* @__PURE__ */ new Set();
  if (t === "all" || e === "all") return l;
  for (let i of t.keys()) e.has(i) || l.add(i);
  return l;
}
function Cr(t) {
  return t && t.__esModule ? t.default : t;
}
function kr(t) {
  let e = te(Cr(Ve), "@react-aria/grid"), l = Qt(), i = (l === "pointer" || l === "virtual" || l == null) && typeof window < "u" && "ontouchstart" in window, n = f.useMemo(() => {
    let r = t.selectionManager.selectionMode, u = t.selectionManager.selectionBehavior, s;
    return i && (s = e.format("longPressToSelect")), u === "replace" && r !== "none" && t.hasItemActions ? s : void 0;
  }, [
    t.selectionManager.selectionMode,
    t.selectionManager.selectionBehavior,
    t.hasItemActions,
    e,
    i
  ]);
  return Ke(n);
}
function Dr(t, e, l) {
  let { isVirtualized: i, disallowTypeAhead: n, keyboardDelegate: o, focusMode: r, scrollRef: u, getRowText: s, onRowAction: a, onCellAction: d, escapeKeyBehavior: c = "clearSelection", shouldSelectOnPressUp: h } = t, { selectionManager: p } = e;
  !t["aria-label"] && !t["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let v = st({
    usage: "search",
    sensitivity: "base"
  }), { direction: b } = ee(), g = e.selectionManager.disabledBehavior, m = f.useMemo(() => o || new cl({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: g,
    ref: l,
    direction: b,
    collator: v,
    focusMode: r
  }), [
    o,
    e.collection,
    e.disabledKeys,
    g,
    l,
    b,
    v,
    r
  ]), { collectionProps: C } = Lo({
    ref: l,
    selectionManager: p,
    keyboardDelegate: m,
    isVirtualized: i,
    scrollRef: u,
    disallowTypeAhead: n,
    escapeKeyBehavior: c
  }), $ = ke(t.id);
  ht.set(e, {
    keyboardDelegate: m,
    actions: {
      onRowAction: a,
      onCellAction: d
    },
    shouldSelectOnPressUp: h
  });
  let x = kr({
    selectionManager: p,
    hasItemActions: !!(a || d)
  }), w = U(t, {
    labelable: !0
  }), D = f.useCallback((z) => {
    if (p.isFocused) {
      z.currentTarget.contains(z.target) || p.setFocused(!1);
      return;
    }
    z.currentTarget.contains(z.target) && p.setFocused(!0);
  }, [
    p
  ]), S = f.useMemo(() => ({
    onBlur: C.onBlur,
    onFocus: D
  }), [
    D,
    C.onBlur
  ]), R = mr(l, {
    isDisabled: e.collection.size !== 0
  }), B = V(
    w,
    {
      role: "grid",
      id: $,
      "aria-multiselectable": p.selectionMode === "multiple" ? "true" : void 0
    },
    e.isKeyboardNavigationDisabled ? S : C,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    e.collection.size === 0 && {
      tabIndex: R ? -1 : 0
    } || void 0,
    x
  );
  return i && (B["aria-rowcount"] = e.collection.size, B["aria-colcount"] = e.collection.columnCount), wr({
    getRowText: s
  }, e), {
    gridProps: B
  };
}
function Sr() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function Er(t, e, l) {
  var i, n;
  let { node: o, isVirtualized: r, shouldSelectOnPressUp: u, onAction: s } = t, { actions: a, shouldSelectOnPressUp: d } = ht.get(e), c = a.onRowAction ? () => {
    var g;
    return (g = a.onRowAction) === null || g === void 0 ? void 0 : g.call(a, o.key);
  } : s, { itemProps: h, ...p } = nl({
    selectionManager: e.selectionManager,
    key: o.key,
    ref: l,
    isVirtualized: r,
    shouldSelectOnPressUp: d || u,
    onAction: c || !(o == null || (i = o.props) === null || i === void 0) && i.onAction ? Jt(o == null || (n = o.props) === null || n === void 0 ? void 0 : n.onAction, c) : void 0,
    isDisabled: e.collection.size === 0
  }), v = e.selectionManager.isSelected(o.key), b = {
    role: "row",
    "aria-selected": e.selectionManager.selectionMode !== "none" ? v : void 0,
    "aria-disabled": p.isDisabled || void 0,
    ...h
  };
  return r && (b["aria-rowindex"] = o.index + 1), {
    rowProps: b,
    ...p
  };
}
function ql(t, e, l) {
  let { node: i, isVirtualized: n, focusMode: o = "child", shouldSelectOnPressUp: r, onAction: u } = t, { direction: s } = ee(), { keyboardDelegate: a, actions: { onCellAction: d } } = ht.get(e), c = f.useRef(null), h = () => {
    if (l.current) {
      let $ = Ze(l.current);
      if (o === "child") {
        if (l.current.contains(document.activeElement) && l.current !== document.activeElement) return;
        let x = e.selectionManager.childFocusStrategy === "last" ? We($) : $.firstChild();
        if (x) {
          Q(x);
          return;
        }
      }
      (c.current != null && i.key !== c.current || !l.current.contains(document.activeElement)) && Q(l.current);
    }
  }, { itemProps: p, isPressed: v } = nl({
    selectionManager: e.selectionManager,
    key: i.key,
    ref: l,
    isVirtualized: n,
    focus: h,
    shouldSelectOnPressUp: r,
    onAction: d ? () => d(i.key) : u,
    isDisabled: e.collection.size === 0
  }), b = ($) => {
    if (!$.currentTarget.contains($.target) || e.isKeyboardNavigationDisabled || !l.current || !document.activeElement) return;
    let x = Ze(l.current);
    switch (x.currentNode = document.activeElement, $.key) {
      case "ArrowLeft": {
        let z = s === "rtl" ? x.nextNode() : x.previousNode();
        if (o === "child" && z === l.current && (z = null), $.preventDefault(), $.stopPropagation(), z)
          Q(z), he(z, {
            containingElement: ce(l.current)
          });
        else {
          var w;
          if (((w = a.getKeyLeftOf) === null || w === void 0 ? void 0 : w.call(a, i.key)) !== i.key) {
            var D;
            (D = l.current.parentElement) === null || D === void 0 || D.dispatchEvent(new KeyboardEvent($.nativeEvent.type, $.nativeEvent));
            break;
          }
          o === "cell" && s === "rtl" ? (Q(l.current), he(l.current, {
            containingElement: ce(l.current)
          })) : (x.currentNode = l.current, z = s === "rtl" ? x.firstChild() : We(x), z && (Q(z), he(z, {
            containingElement: ce(l.current)
          })));
        }
        break;
      }
      case "ArrowRight": {
        let z = s === "rtl" ? x.previousNode() : x.nextNode();
        if (o === "child" && z === l.current && (z = null), $.preventDefault(), $.stopPropagation(), z)
          Q(z), he(z, {
            containingElement: ce(l.current)
          });
        else {
          var S;
          if (((S = a.getKeyRightOf) === null || S === void 0 ? void 0 : S.call(a, i.key)) !== i.key) {
            var R;
            (R = l.current.parentElement) === null || R === void 0 || R.dispatchEvent(new KeyboardEvent($.nativeEvent.type, $.nativeEvent));
            break;
          }
          o === "cell" && s === "ltr" ? (Q(l.current), he(l.current, {
            containingElement: ce(l.current)
          })) : (x.currentNode = l.current, z = s === "rtl" ? We(x) : x.firstChild(), z && (Q(z), he(z, {
            containingElement: ce(l.current)
          })));
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (!$.altKey && l.current.contains($.target)) {
          var B;
          $.stopPropagation(), $.preventDefault(), (B = l.current.parentElement) === null || B === void 0 || B.dispatchEvent(new KeyboardEvent($.nativeEvent.type, $.nativeEvent));
        }
        break;
    }
  }, g = ($) => {
    if (c.current = i.key, $.target !== l.current) {
      Gn() || e.selectionManager.setFocusedKey(i.key);
      return;
    }
    requestAnimationFrame(() => {
      o === "child" && document.activeElement === l.current && h();
    });
  }, m = V(p, {
    role: "gridcell",
    onKeyDownCapture: b,
    "aria-colspan": i.colSpan,
    "aria-colindex": i.colIndex != null ? i.colIndex + 1 : void 0,
    colSpan: n ? void 0 : i.colSpan,
    onFocus: g
  });
  var C;
  return n && (m["aria-colindex"] = ((C = i.colIndex) !== null && C !== void 0 ? C : i.index) + 1), r && m.tabIndex != null && m.onPointerDown == null && (m.onPointerDown = ($) => {
    let x = $.currentTarget, w = x.getAttribute("tabindex");
    x.removeAttribute("tabindex"), requestAnimationFrame(() => {
      w != null && x.setAttribute("tabindex", w);
    });
  }), {
    gridCellProps: m,
    isPressed: v
  };
}
function We(t) {
  let e = null, l = null;
  do
    l = t.lastChild(), l && (e = l);
  while (l);
  return e;
}
function zr(t) {
  return t && t.__esModule ? t.default : t;
}
function Br(t, e) {
  let { key: l } = t, i = e.selectionManager, n = ke(), o = !e.selectionManager.canSelectItem(l), r = e.selectionManager.isSelected(l), u = () => i.toggleSelection(l);
  const s = te(zr(Ve), "@react-aria/grid");
  return {
    checkboxProps: {
      id: n,
      "aria-label": s.format("select"),
      isSelected: r,
      isDisabled: o,
      onChange: u
    }
  };
}
const ft = /* @__PURE__ */ new WeakMap();
function Ir(t, e, l) {
  let { keyboardDelegate: i, isDisabled: n, isRequired: o, name: r, form: u, validationBehavior: s = "aria" } = t, a = st({
    usage: "search",
    sensitivity: "base"
  }), d = f.useMemo(() => i || new ol(e.collection, e.disabledKeys, l, a), [
    i,
    e.collection,
    e.disabledKeys,
    a,
    l
  ]), { menuTriggerProps: c, menuProps: h } = Oo({
    isDisabled: n,
    type: "listbox"
  }, e, l), p = (B) => {
    if (e.selectionManager.selectionMode !== "multiple")
      switch (B.key) {
        case "ArrowLeft": {
          var z, K;
          B.preventDefault();
          let A = e.selectedKey != null ? (z = d.getKeyAbove) === null || z === void 0 ? void 0 : z.call(d, e.selectedKey) : (K = d.getFirstKey) === null || K === void 0 ? void 0 : K.call(d);
          A && e.setSelectedKey(A);
          break;
        }
        case "ArrowRight": {
          var N, E;
          B.preventDefault();
          let A = e.selectedKey != null ? (N = d.getKeyBelow) === null || N === void 0 ? void 0 : N.call(d, e.selectedKey) : (E = d.getFirstKey) === null || E === void 0 ? void 0 : E.call(d);
          A && e.setSelectedKey(A);
          break;
        }
      }
  }, { typeSelectProps: v } = Wo({
    keyboardDelegate: d,
    selectionManager: e.selectionManager,
    onTypeSelect(B) {
      e.setSelectedKey(B);
    }
  }), { isInvalid: b, validationErrors: g, validationDetails: m } = e.displayValidation, { labelProps: C, fieldProps: $, descriptionProps: x, errorMessageProps: w } = Qn({
    ...t,
    labelElementType: "span",
    isInvalid: b,
    errorMessage: t.errorMessage || g
  });
  v.onKeyDown = v.onKeyDownCapture, delete v.onKeyDownCapture, e.selectionManager.selectionMode === "multiple" && (v = {});
  let D = U(t, {
    labelable: !0
  }), S = V(v, c, $), R = ke();
  return ft.set(e, {
    isDisabled: n,
    isRequired: o,
    name: r,
    form: u,
    validationBehavior: s
  }), {
    labelProps: {
      ...C,
      onClick: () => {
        if (!t.isDisabled) {
          var B;
          (B = l.current) === null || B === void 0 || B.focus(), Jn("keyboard");
        }
      }
    },
    triggerProps: V(D, {
      ...S,
      isDisabled: n,
      onKeyDown: Jt(S.onKeyDown, p, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        R,
        S["aria-labelledby"],
        S["aria-label"] && !S["aria-labelledby"] ? S.id : null
      ].filter(Boolean).join(" "),
      onFocus(B) {
        e.isFocused || (t.onFocus && t.onFocus(B), t.onFocusChange && t.onFocusChange(!0), e.setFocused(!0));
      },
      onBlur(B) {
        e.isOpen || (t.onBlur && t.onBlur(B), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      }
    }),
    valueProps: {
      id: R
    },
    menuProps: {
      ...h,
      autoFocus: e.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (B) => {
        B.currentTarget.contains(B.relatedTarget) || (t.onBlur && t.onBlur(B), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      },
      "aria-labelledby": [
        $["aria-labelledby"],
        S["aria-label"] && !$["aria-labelledby"] ? S.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: x,
    errorMessageProps: w,
    isInvalid: b,
    validationErrors: g,
    validationDetails: m,
    hiddenSelectProps: {
      isDisabled: n,
      name: r,
      label: t.label,
      state: e,
      triggerRef: l,
      form: u
    }
  };
}
function Pr(t, e, l) {
  let i = ft.get(e) || {}, { autoComplete: n, name: o = i.name, form: r = i.form, isDisabled: u = i.isDisabled } = t, { validationBehavior: s, isRequired: a } = i, { visuallyHiddenProps: d } = De({
    style: {
      // Prevent page scrolling.
      position: "fixed",
      top: 0,
      left: 0
    }
  });
  qt(t.selectRef, e.defaultValue, e.setValue), Yt({
    validationBehavior: s,
    focus: () => {
      var v;
      return (v = l.current) === null || v === void 0 ? void 0 : v.focus();
    }
  }, e, t.selectRef);
  let c = e.setValue, h = f.useCallback((v) => {
    v.target.multiple ? c(Array.from(v.target.selectedOptions, (b) => b.value)) : c(v.currentTarget.value);
  }, [
    c
  ]);
  var p;
  return {
    containerProps: {
      ...d,
      "aria-hidden": !0,
      // @ts-ignore
      "data-react-aria-prevent-focus": !0,
      // @ts-ignore
      "data-a11y-ignore": "aria-hidden-focus"
    },
    inputProps: {
      style: {
        display: "none"
      }
    },
    selectProps: {
      tabIndex: -1,
      autoComplete: n,
      disabled: u,
      multiple: e.selectionManager.selectionMode === "multiple",
      required: s === "native" && a,
      name: o,
      form: r,
      value: (p = e.value) !== null && p !== void 0 ? p : "",
      onChange: h,
      onInput: h
    }
  };
}
function Rr(t) {
  let { state: e, triggerRef: l, label: i, name: n, form: o, isDisabled: r } = t, u = f.useRef(null), s = f.useRef(null), { containerProps: a, selectProps: d } = Pr({
    ...t,
    selectRef: e.collection.size <= 300 ? u : s
  }, e, l);
  if (e.collection.size <= 300) return /* @__PURE__ */ k.createElement("div", {
    ...a,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ k.createElement("label", null, i, /* @__PURE__ */ k.createElement("select", {
    ...d,
    ref: u
  }, /* @__PURE__ */ k.createElement("option", null), [
    ...e.collection.getKeys()
  ].map((c) => {
    let h = e.collection.getItem(c);
    if (h && h.type === "item") return /* @__PURE__ */ k.createElement("option", {
      key: h.key,
      value: h.key
    }, h.textValue);
  }))));
  if (n) {
    let c = ft.get(e) || {}, { validationBehavior: h } = c, p = Array.isArray(e.value) ? e.value : [
      e.value
    ];
    p.length === 0 && (p = [
      null
    ]);
    let v = p.map((b, g) => {
      let m = {
        type: "hidden",
        autoComplete: d.autoComplete,
        name: n,
        form: o,
        disabled: r,
        value: b ?? ""
      };
      return h === "native" ? /* @__PURE__ */ k.createElement("input", {
        key: g,
        ...m,
        ref: g === 0 ? s : null,
        style: {
          display: "none"
        },
        type: "text",
        required: g === 0 ? d.required : !1,
        onChange: () => {
        }
      }) : /* @__PURE__ */ k.createElement("input", {
        key: g,
        ...m,
        ref: g === 0 ? s : null
      });
    });
    return /* @__PURE__ */ k.createElement(k.Fragment, null, v);
  }
  return null;
}
const pt = /* @__PURE__ */ new WeakMap();
function Qe(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function Yl(t, e) {
  let l = pt.get(t);
  if (!l) throw new Error("Unknown grid");
  return `${l}-${Qe(e)}`;
}
function Zl(t, e, l) {
  let i = pt.get(t);
  if (!i) throw new Error("Unknown grid");
  return `${i}-${Qe(e)}-${Qe(l)}`;
}
function Xl(t, e) {
  return [
    ...t.collection.rowHeaderColumnKeys
  ].map((l) => Zl(t, e, l)).join(" ");
}
var Gl = {};
Gl = {
  ascending: "تصاعدي",
  ascendingSort: (t) => `ترتيب حسب العمود ${t.columnName} بترتيب تصاعدي`,
  columnSize: (t) => `${t.value} بالبكسل`,
  descending: "تنازلي",
  descendingSort: (t) => `ترتيب حسب العمود ${t.columnName} بترتيب تنازلي`,
  resizerDescription: "اضغط على مفتاح Enter لبدء تغيير الحجم",
  select: "تحديد",
  selectAll: "تحديد الكل",
  sortable: "عمود قابل للترتيب"
};
var Ql = {};
Ql = {
  ascending: "възходящ",
  ascendingSort: (t) => `сортирано по колона ${t.columnName} във възходящ ред`,
  columnSize: (t) => `${t.value} пиксела`,
  descending: "низходящ",
  descendingSort: (t) => `сортирано по колона ${t.columnName} в низходящ ред`,
  resizerDescription: "Натиснете „Enter“, за да започнете да преоразмерявате",
  select: "Изберете",
  selectAll: "Изберете всичко",
  sortable: "сортираща колона"
};
var Jl = {};
Jl = {
  ascending: "vzestupně",
  ascendingSort: (t) => `řazeno vzestupně podle sloupce ${t.columnName}`,
  columnSize: (t) => `${t.value} pixelů`,
  descending: "sestupně",
  descendingSort: (t) => `řazeno sestupně podle sloupce ${t.columnName}`,
  resizerDescription: "Stisknutím klávesy Enter začnete měnit velikost",
  select: "Vybrat",
  selectAll: "Vybrat vše",
  sortable: "sloupec s možností řazení"
};
var _l = {};
_l = {
  ascending: "stigende",
  ascendingSort: (t) => `sorteret efter kolonne ${t.columnName} i stigende rækkefølge`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "faldende",
  descendingSort: (t) => `sorteret efter kolonne ${t.columnName} i faldende rækkefølge`,
  resizerDescription: "Tryk på Enter for at ændre størrelse",
  select: "Vælg",
  selectAll: "Vælg alle",
  sortable: "sorterbar kolonne"
};
var ei = {};
ei = {
  ascending: "aufsteigend",
  ascendingSort: (t) => `sortiert nach Spalte ${t.columnName} in aufsteigender Reihenfolge`,
  columnSize: (t) => `${t.value} Pixel`,
  descending: "absteigend",
  descendingSort: (t) => `sortiert nach Spalte ${t.columnName} in absteigender Reihenfolge`,
  resizerDescription: "Eingabetaste zum Starten der Größenänderung drücken",
  select: "Auswählen",
  selectAll: "Alles auswählen",
  sortable: "sortierbare Spalte"
};
var ti = {};
ti = {
  ascending: "αύξουσα",
  ascendingSort: (t) => `διαλογή ανά στήλη ${t.columnName} σε αύξουσα σειρά`,
  columnSize: (t) => `${t.value} pixel`,
  descending: "φθίνουσα",
  descendingSort: (t) => `διαλογή ανά στήλη ${t.columnName} σε φθίνουσα σειρά`,
  resizerDescription: "Πατήστε Enter για έναρξη της αλλαγής μεγέθους",
  select: "Επιλογή",
  selectAll: "Επιλογή όλων",
  sortable: "Στήλη διαλογής"
};
var li = {};
li = {
  select: "Select",
  selectAll: "Select All",
  sortable: "sortable column",
  ascending: "ascending",
  descending: "descending",
  ascendingSort: (t) => `sorted by column ${t.columnName} in ascending order`,
  descendingSort: (t) => `sorted by column ${t.columnName} in descending order`,
  columnSize: (t) => `${t.value} pixels`,
  resizerDescription: "Press Enter to start resizing"
};
var ii = {};
ii = {
  ascending: "ascendente",
  ascendingSort: (t) => `ordenado por columna ${t.columnName} en sentido ascendente`,
  columnSize: (t) => `${t.value} píxeles`,
  descending: "descendente",
  descendingSort: (t) => `ordenado por columna ${t.columnName} en orden descendente`,
  resizerDescription: "Pulse Intro para empezar a redimensionar",
  select: "Seleccionar",
  selectAll: "Seleccionar todos",
  sortable: "columna ordenable"
};
var ni = {};
ni = {
  ascending: "tõusev järjestus",
  ascendingSort: (t) => `sorditud veeru järgi ${t.columnName} tõusvas järjestuses`,
  columnSize: (t) => `${t.value} pikslit`,
  descending: "laskuv järjestus",
  descendingSort: (t) => `sorditud veeru järgi ${t.columnName} laskuvas järjestuses`,
  resizerDescription: "Suuruse muutmise alustamiseks vajutage klahvi Enter",
  select: "Vali",
  selectAll: "Vali kõik",
  sortable: "sorditav veerg"
};
var oi = {};
oi = {
  ascending: "nouseva",
  ascendingSort: (t) => `lajiteltu sarakkeen ${t.columnName} mukaan nousevassa järjestyksessä`,
  columnSize: (t) => `${t.value} pikseliä`,
  descending: "laskeva",
  descendingSort: (t) => `lajiteltu sarakkeen ${t.columnName} mukaan laskevassa järjestyksessä`,
  resizerDescription: "Aloita koon muutos painamalla Enter-näppäintä",
  select: "Valitse",
  selectAll: "Valitse kaikki",
  sortable: "lajiteltava sarake"
};
var ri = {};
ri = {
  ascending: "croissant",
  ascendingSort: (t) => `trié en fonction de la colonne ${t.columnName} par ordre croissant`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "décroissant",
  descendingSort: (t) => `trié en fonction de la colonne ${t.columnName} par ordre décroissant`,
  resizerDescription: "Appuyez sur Entrée pour commencer le redimensionnement.",
  select: "Sélectionner",
  selectAll: "Sélectionner tout",
  sortable: "colonne triable"
};
var ui = {};
ui = {
  ascending: "עולה",
  ascendingSort: (t) => `מוין לפי עמודה ${t.columnName} בסדר עולה`,
  columnSize: (t) => `${t.value} פיקסלים`,
  descending: "יורד",
  descendingSort: (t) => `מוין לפי עמודה ${t.columnName} בסדר יורד`,
  resizerDescription: "הקש Enter כדי לשנות את הגודל",
  select: "בחר",
  selectAll: "בחר הכול",
  sortable: "עמודה שניתן למיין"
};
var ai = {};
ai = {
  ascending: "rastući",
  ascendingSort: (t) => `razvrstano po stupcima ${t.columnName} rastućem redoslijedom`,
  columnSize: (t) => `${t.value} piksela`,
  descending: "padajući",
  descendingSort: (t) => `razvrstano po stupcima ${t.columnName} padajućim redoslijedom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Odaberite",
  selectAll: "Odaberite sve",
  sortable: "stupac koji se može razvrstati"
};
var si = {};
si = {
  ascending: "növekvő",
  ascendingSort: (t) => `rendezve a(z) ${t.columnName} oszlop szerint, növekvő sorrendben`,
  columnSize: (t) => `${t.value} képpont`,
  descending: "csökkenő",
  descendingSort: (t) => `rendezve a(z) ${t.columnName} oszlop szerint, csökkenő sorrendben`,
  resizerDescription: "Nyomja le az Enter billentyűt az átméretezés megkezdéséhez",
  select: "Kijelölés",
  selectAll: "Összes kijelölése",
  sortable: "rendezendő oszlop"
};
var di = {};
di = {
  ascending: "crescente",
  ascendingSort: (t) => `in ordine crescente in base alla colonna ${t.columnName}`,
  columnSize: (t) => `${t.value} pixel`,
  descending: "decrescente",
  descendingSort: (t) => `in ordine decrescente in base alla colonna ${t.columnName}`,
  resizerDescription: "Premi Invio per iniziare a ridimensionare",
  select: "Seleziona",
  selectAll: "Seleziona tutto",
  sortable: "colonna ordinabile"
};
var ci = {};
ci = {
  ascending: "昇順",
  ascendingSort: (t) => `列 ${t.columnName} を昇順で並べ替え`,
  columnSize: (t) => `${t.value} ピクセル`,
  descending: "降順",
  descendingSort: (t) => `列 ${t.columnName} を降順で並べ替え`,
  resizerDescription: "Enter キーを押してサイズ変更を開始",
  select: "選択",
  selectAll: "すべて選択",
  sortable: "並べ替え可能な列"
};
var hi = {};
hi = {
  ascending: "오름차순",
  ascendingSort: (t) => `${t.columnName} 열을 기준으로 오름차순으로 정렬됨`,
  columnSize: (t) => `${t.value} 픽셀`,
  descending: "내림차순",
  descendingSort: (t) => `${t.columnName} 열을 기준으로 내림차순으로 정렬됨`,
  resizerDescription: "크기 조정을 시작하려면 Enter를 누르세요.",
  select: "선택",
  selectAll: "모두 선택",
  sortable: "정렬 가능한 열"
};
var fi = {};
fi = {
  ascending: "didėjančia tvarka",
  ascendingSort: (t) => `surikiuota pagal stulpelį ${t.columnName} didėjančia tvarka`,
  columnSize: (t) => `${t.value} piks.`,
  descending: "mažėjančia tvarka",
  descendingSort: (t) => `surikiuota pagal stulpelį ${t.columnName} mažėjančia tvarka`,
  resizerDescription: "Paspauskite „Enter“, kad pradėtumėte keisti dydį",
  select: "Pasirinkti",
  selectAll: "Pasirinkti viską",
  sortable: "rikiuojamas stulpelis"
};
var pi = {};
pi = {
  ascending: "augošā secībā",
  ascendingSort: (t) => `kārtots pēc kolonnas ${t.columnName} augošā secībā`,
  columnSize: (t) => `${t.value} pikseļi`,
  descending: "dilstošā secībā",
  descendingSort: (t) => `kārtots pēc kolonnas ${t.columnName} dilstošā secībā`,
  resizerDescription: "Nospiediet Enter, lai sāktu izmēru mainīšanu",
  select: "Atlasīt",
  selectAll: "Atlasīt visu",
  sortable: "kārtojamā kolonna"
};
var vi = {};
vi = {
  ascending: "stigende",
  ascendingSort: (t) => `sortert etter kolonne ${t.columnName} i stigende rekkefølge`,
  columnSize: (t) => `${t.value} piksler`,
  descending: "synkende",
  descendingSort: (t) => `sortert etter kolonne ${t.columnName} i synkende rekkefølge`,
  resizerDescription: "Trykk på Enter for å starte størrelsesendring",
  select: "Velg",
  selectAll: "Velg alle",
  sortable: "kolonne som kan sorteres"
};
var mi = {};
mi = {
  ascending: "oplopend",
  ascendingSort: (t) => `gesorteerd in oplopende volgorde in kolom ${t.columnName}`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "aflopend",
  descendingSort: (t) => `gesorteerd in aflopende volgorde in kolom ${t.columnName}`,
  resizerDescription: "Druk op Enter om het formaat te wijzigen",
  select: "Selecteren",
  selectAll: "Alles selecteren",
  sortable: "sorteerbare kolom"
};
var gi = {};
gi = {
  ascending: "rosnąco",
  ascendingSort: (t) => `posortowano według kolumny ${t.columnName} w porządku rosnącym`,
  columnSize: (t) => `Liczba pikseli: ${t.value}`,
  descending: "malejąco",
  descendingSort: (t) => `posortowano według kolumny ${t.columnName} w porządku malejącym`,
  resizerDescription: "Naciśnij Enter, aby rozpocząć zmienianie rozmiaru",
  select: "Zaznacz",
  selectAll: "Zaznacz wszystko",
  sortable: "kolumna z możliwością sortowania"
};
var bi = {};
bi = {
  ascending: "crescente",
  ascendingSort: (t) => `classificado pela coluna ${t.columnName} em ordem crescente`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "decrescente",
  descendingSort: (t) => `classificado pela coluna ${t.columnName} em ordem decrescente`,
  resizerDescription: "Pressione Enter para começar a redimensionar",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "coluna classificável"
};
var yi = {};
yi = {
  ascending: "ascendente",
  ascendingSort: (t) => `Ordenar por coluna ${t.columnName} em ordem ascendente`,
  columnSize: (t) => `${t.value} pixels`,
  descending: "descendente",
  descendingSort: (t) => `Ordenar por coluna ${t.columnName} em ordem descendente`,
  resizerDescription: "Prima Enter para iniciar o redimensionamento",
  select: "Selecionar",
  selectAll: "Selecionar tudo",
  sortable: "Coluna ordenável"
};
var $i = {};
$i = {
  ascending: "crescătoare",
  ascendingSort: (t) => `sortate după coloana ${t.columnName} în ordine crescătoare`,
  columnSize: (t) => `${t.value} pixeli`,
  descending: "descrescătoare",
  descendingSort: (t) => `sortate după coloana ${t.columnName} în ordine descrescătoare`,
  resizerDescription: "Apăsați pe Enter pentru a începe redimensionarea",
  select: "Selectare",
  selectAll: "Selectare totală",
  sortable: "coloană sortabilă"
};
var xi = {};
xi = {
  ascending: "возрастание",
  ascendingSort: (t) => `сортировать столбец ${t.columnName} в порядке возрастания`,
  columnSize: (t) => `${t.value} пикс.`,
  descending: "убывание",
  descendingSort: (t) => `сортировать столбец ${t.columnName} в порядке убывания`,
  resizerDescription: "Нажмите клавишу Enter для начала изменения размеров",
  select: "Выбрать",
  selectAll: "Выбрать все",
  sortable: "сортируемый столбец"
};
var wi = {};
wi = {
  ascending: "vzostupne",
  ascendingSort: (t) => `zoradené zostupne podľa stĺpca ${t.columnName}`,
  columnSize: (t) => `Počet pixelov: ${t.value}`,
  descending: "zostupne",
  descendingSort: (t) => `zoradené zostupne podľa stĺpca ${t.columnName}`,
  resizerDescription: "Stlačením klávesu Enter začnete zmenu veľkosti",
  select: "Vybrať",
  selectAll: "Vybrať všetko",
  sortable: "zoraditeľný stĺpec"
};
var Ci = {};
Ci = {
  ascending: "naraščajoče",
  ascendingSort: (t) => `razvrščeno po stolpcu ${t.columnName} v naraščajočem vrstnem redu`,
  columnSize: (t) => `${t.value} slikovnih pik`,
  descending: "padajoče",
  descendingSort: (t) => `razvrščeno po stolpcu ${t.columnName} v padajočem vrstnem redu`,
  resizerDescription: "Pritisnite tipko Enter da začnete spreminjati velikost",
  select: "Izberite",
  selectAll: "Izberite vse",
  sortable: "razvrstljivi stolpec"
};
var ki = {};
ki = {
  ascending: "rastući",
  ascendingSort: (t) => `sortirano po kolonama ${t.columnName} rastućim redosledom`,
  columnSize: (t) => `${t.value} piksela`,
  descending: "padajući",
  descendingSort: (t) => `sortirano po kolonama ${t.columnName} padajućim redosledom`,
  resizerDescription: "Pritisnite Enter da biste započeli promenu veličine",
  select: "Izaberite",
  selectAll: "Izaberite sve",
  sortable: "kolona koja se može sortirati"
};
var Di = {};
Di = {
  ascending: "stigande",
  ascendingSort: (t) => `sorterat på kolumn ${t.columnName} i stigande ordning`,
  columnSize: (t) => `${t.value} pixlar`,
  descending: "fallande",
  descendingSort: (t) => `sorterat på kolumn ${t.columnName} i fallande ordning`,
  resizerDescription: "Tryck på Retur för att börja ändra storlek",
  select: "Markera",
  selectAll: "Markera allt",
  sortable: "sorterbar kolumn"
};
var Si = {};
Si = {
  ascending: "artan sırada",
  ascendingSort: (t) => `${t.columnName} sütuna göre artan düzende sırala`,
  columnSize: (t) => `${t.value} piksel`,
  descending: "azalan sırada",
  descendingSort: (t) => `${t.columnName} sütuna göre azalan düzende sırala`,
  resizerDescription: "Yeniden boyutlandırmak için Enter'a basın",
  select: "Seç",
  selectAll: "Tümünü Seç",
  sortable: "Sıralanabilir sütun"
};
var Ei = {};
Ei = {
  ascending: "висхідний",
  ascendingSort: (t) => `відсортовано за стовпцем ${t.columnName} у висхідному порядку`,
  columnSize: (t) => `${t.value} пікс.`,
  descending: "низхідний",
  descendingSort: (t) => `відсортовано за стовпцем ${t.columnName} у низхідному порядку`,
  resizerDescription: "Натисніть Enter, щоб почати зміну розміру",
  select: "Вибрати",
  selectAll: "Вибрати все",
  sortable: "сортувальний стовпець"
};
var zi = {};
zi = {
  ascending: "升序",
  ascendingSort: (t) => `按列 ${t.columnName} 升序排序`,
  columnSize: (t) => `${t.value} 像素`,
  descending: "降序",
  descendingSort: (t) => `按列 ${t.columnName} 降序排序`,
  resizerDescription: "按“输入”键开始调整大小。",
  select: "选择",
  selectAll: "全选",
  sortable: "可排序的列"
};
var Bi = {};
Bi = {
  ascending: "遞增",
  ascendingSort: (t) => `已依據「${t.columnName}」欄遞增排序`,
  columnSize: (t) => `${t.value} 像素`,
  descending: "遞減",
  descendingSort: (t) => `已依據「${t.columnName}」欄遞減排序`,
  resizerDescription: "按 Enter 鍵以開始調整大小",
  select: "選取",
  selectAll: "全選",
  sortable: "可排序的欄"
};
var Be = {};
Be = {
  "ar-AE": Gl,
  "bg-BG": Ql,
  "cs-CZ": Jl,
  "da-DK": _l,
  "de-DE": ei,
  "el-GR": ti,
  "en-US": li,
  "es-ES": ii,
  "et-EE": ni,
  "fi-FI": oi,
  "fr-FR": ri,
  "he-IL": ui,
  "hr-HR": ai,
  "hu-HU": si,
  "it-IT": di,
  "ja-JP": ci,
  "ko-KR": hi,
  "lt-LT": fi,
  "lv-LV": pi,
  "nb-NO": vi,
  "nl-NL": mi,
  "pl-PL": gi,
  "pt-BR": bi,
  "pt-PT": yi,
  "ro-RO": $i,
  "ru-RU": xi,
  "sk-SK": wi,
  "sl-SI": Ci,
  "sr-SP": ki,
  "sv-SE": Di,
  "tr-TR": Si,
  "uk-UA": Ei,
  "zh-CN": zi,
  "zh-TW": Bi
};
class Ar extends cl {
  isCell(e) {
    return e.type === "cell" || e.type === "rowheader" || e.type === "column";
  }
  getKeyBelow(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (l.type === "column") {
      let i = ie(L(l, this.collection));
      if (i) return i.key;
      let n = this.getFirstKey();
      return n == null || !this.collection.getItem(n) ? null : super.getKeyForItemInRowByIndex(n, l.index);
    }
    return super.getKeyBelow(e);
  }
  getKeyAbove(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (l.type === "column") {
      let o = l.parentKey != null ? this.collection.getItem(l.parentKey) : null;
      return o && o.type === "column" ? o.key : null;
    }
    let i = super.getKeyAbove(e), n = i != null ? this.collection.getItem(i) : null;
    return n && n.type !== "headerrow" ? i : this.isCell(l) ? this.collection.columns[l.index].key : this.collection.columns[0].key;
  }
  findNextColumnKey(e) {
    let l = this.findNextKey(e.key, (n) => n.type === "column");
    if (l != null) return l;
    let i = this.collection.headerRows[e.level];
    for (let n of L(i, this.collection))
      if (n.type === "column") return n.key;
    return null;
  }
  findPreviousColumnKey(e) {
    let l = this.findPreviousKey(e.key, (o) => o.type === "column");
    if (l != null) return l;
    let i = this.collection.headerRows[e.level], n = [
      ...L(i, this.collection)
    ];
    for (let o = n.length - 1; o >= 0; o--) {
      let r = n[o];
      if (r.type === "column") return r.key;
    }
    return null;
  }
  getKeyRightOf(e) {
    let l = this.collection.getItem(e);
    return l ? l.type === "column" ? this.direction === "rtl" ? this.findPreviousColumnKey(l) : this.findNextColumnKey(l) : super.getKeyRightOf(e) : null;
  }
  getKeyLeftOf(e) {
    let l = this.collection.getItem(e);
    return l ? l.type === "column" ? this.direction === "rtl" ? this.findNextColumnKey(l) : this.findPreviousColumnKey(l) : super.getKeyLeftOf(e) : null;
  }
  getKeyForSearch(e, l) {
    if (!this.collator) return null;
    let i = this.collection, n = l ?? this.getFirstKey();
    if (n == null) return null;
    let o = i.getItem(n);
    var r;
    (o == null ? void 0 : o.type) === "cell" && (n = (r = o.parentKey) !== null && r !== void 0 ? r : null);
    let u = !1;
    for (; n != null; ) {
      let s = i.getItem(n);
      if (!s) return null;
      if (s.textValue) {
        let a = s.textValue.slice(0, e.length);
        if (this.collator.compare(a, e) === 0) return s.key;
      }
      for (let a of L(s, this.collection)) {
        let d = i.columns[a.index];
        if (i.rowHeaderColumnKeys.has(d.key) && a.textValue) {
          let c = a.textValue.slice(0, e.length);
          if (this.collator.compare(c, e) === 0) {
            let h = l != null ? i.getItem(l) : o;
            return (h == null ? void 0 : h.type) === "cell" ? a.key : s.key;
          }
        }
      }
      n = this.getKeyBelow(n), n == null && !u && (n = this.getFirstKey(), u = !0);
    }
    return null;
  }
}
function Mr(t) {
  return t && t.__esModule ? t.default : t;
}
function Tr(t, e, l) {
  let { keyboardDelegate: i, isVirtualized: n, layoutDelegate: o, layout: r } = t, u = st({
    usage: "search",
    sensitivity: "base"
  }), { direction: s } = ee(), a = e.selectionManager.disabledBehavior, d = f.useMemo(() => i || new Ar({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: a,
    ref: l,
    direction: s,
    collator: u,
    layoutDelegate: o,
    layout: r
  }), [
    i,
    e.collection,
    e.disabledKeys,
    a,
    l,
    s,
    u,
    o,
    r
  ]), c = ke(t.id);
  pt.set(e, c);
  let { gridProps: h } = Dr({
    ...t,
    id: c,
    keyboardDelegate: d
  }, e, l);
  n && (h["aria-rowcount"] = e.collection.size + e.collection.headerRows.length), Ae() && "expandedKeys" in e && (h.role = "treegrid");
  let { column: p, direction: v } = e.sortDescriptor || {}, b = te(Mr(Be), "@react-aria/table"), g = f.useMemo(() => {
    var C, $;
    let x = ($ = (C = e.collection.columns.find((w) => w.key === p)) === null || C === void 0 ? void 0 : C.textValue) !== null && $ !== void 0 ? $ : "";
    return v && p ? b.format(`${v}Sort`, {
      columnName: x
    }) : void 0;
  }, [
    v,
    p,
    e.collection.columns
  ]), m = Ke(g);
  return il(() => {
    g && Gt(g, "assertive", 500);
  }, [
    g
  ]), {
    gridProps: V(h, m, {
      // merge sort description with long press information
      "aria-describedby": [
        m["aria-describedby"],
        h["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function Fr(t) {
  return t && t.__esModule ? t.default : t;
}
function Kr(t, e, l) {
  var i, n;
  let { node: o } = t, r = o.props.allowsSorting, { gridCellProps: u } = ql({
    ...t,
    focusMode: "child"
  }, e, l), s = o.props.isSelectionCell && e.selectionManager.selectionMode === "single", { pressProps: a } = xe({
    isDisabled: !r || s,
    onPress() {
      e.sort(o.key);
    },
    ref: l
  }), { focusableProps: d } = Ut({}, l), c, h = ((i = e.sortDescriptor) === null || i === void 0 ? void 0 : i.column) === o.key, p = (n = e.sortDescriptor) === null || n === void 0 ? void 0 : n.direction;
  o.props.allowsSorting && !It() && (c = h ? p : "none");
  let v = te(Fr(Be), "@react-aria/table"), b;
  r && (b = `${v.format("sortable")}`, h && p && It() && (b = `${b}, ${v.format(p)}`));
  let g = Ke(b), m = e.collection.size === 0;
  return f.useEffect(() => {
    m && e.selectionManager.focusedKey === o.key && e.selectionManager.setFocusedKey(null);
  }, [
    m,
    e.selectionManager,
    o.key
  ]), {
    columnHeaderProps: {
      ...V(
        d,
        u,
        a,
        g,
        // If the table is empty, make all column headers untabbable
        m ? {
          tabIndex: -1
        } : null
      ),
      role: "columnheader",
      id: Yl(e, o.key),
      "aria-colspan": o.colSpan && o.colSpan > 1 ? o.colSpan : void 0,
      "aria-sort": c
    }
  };
}
const Nt = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function Vr(t, e, l) {
  let { node: i, isVirtualized: n } = t, { rowProps: o, ...r } = Er(t, e, l), { direction: u } = ee();
  n && !(Ae() && "expandedKeys" in e) ? o["aria-rowindex"] = i.index + 1 + e.collection.headerRows.length : delete o["aria-rowindex"];
  let s = {};
  if (Ae() && "expandedKeys" in e) {
    let w = e.keyMap.get(i.key);
    if (w != null) {
      var a, d, c, h, p, v;
      let D = ((a = w.props) === null || a === void 0 ? void 0 : a.UNSTABLE_childItems) || ((c = w.props) === null || c === void 0 || (d = c.children) === null || d === void 0 ? void 0 : d.length) > e.userColumnCount;
      var b, g, m, C;
      s = {
        onKeyDown: (S) => {
          (S.key === Nt.expand[u] && e.selectionManager.focusedKey === w.key && D && e.expandedKeys !== "all" && !e.expandedKeys.has(w.key) || S.key === Nt.collapse[u] && e.selectionManager.focusedKey === w.key && D && (e.expandedKeys === "all" || e.expandedKeys.has(w.key))) && (e.toggleKey(w.key), S.stopPropagation());
        },
        "aria-expanded": D ? e.expandedKeys === "all" || e.expandedKeys.has(i.key) : void 0,
        "aria-level": w.level,
        "aria-posinset": ((b = w.indexOfType) !== null && b !== void 0 ? b : 0) + 1,
        "aria-setsize": w.level > 1 ? ((m = (h = _((g = (p = e.keyMap.get(w.parentKey)) === null || p === void 0 ? void 0 : p.childNodes) !== null && g !== void 0 ? g : [])) === null || h === void 0 ? void 0 : h.indexOfType) !== null && m !== void 0 ? m : 0) + 1 : ((C = (v = _(e.collection.body.childNodes)) === null || v === void 0 ? void 0 : v.indexOfType) !== null && C !== void 0 ? C : 0) + 1
      };
    }
  }
  let $ = _n(i.props), x = r.hasAction ? $ : {};
  return {
    rowProps: {
      ...V(o, s, x),
      "aria-labelledby": Xl(e, i.key)
    },
    ...r
  };
}
function Nr(t, e, l) {
  let { node: i, isVirtualized: n } = t, o = {
    role: "row"
  };
  return n && !(Ae() && "expandedKeys" in e) && (o["aria-rowindex"] = i.index + 1), {
    rowProps: o
  };
}
function Hr(t, e, l) {
  var i;
  let { gridCellProps: n, isPressed: o } = ql(t, e, l), r = (i = t.node.column) === null || i === void 0 ? void 0 : i.key;
  return r != null && e.collection.rowHeaderColumnKeys.has(r) && (n.role = "rowheader", n.id = Zl(e, t.node.parentKey, r)), {
    gridCellProps: n,
    isPressed: o
  };
}
function jr(t) {
  return t && t.__esModule ? t.default : t;
}
function Lr(t, e) {
  let { key: l } = t;
  const { checkboxProps: i } = Br(t, e);
  return {
    checkboxProps: {
      ...i,
      "aria-labelledby": `${i.id} ${Xl(e, l)}`
    }
  };
}
function Or(t) {
  let { isEmpty: e, isSelectAll: l, selectionMode: i } = t.selectionManager;
  return {
    checkboxProps: {
      "aria-label": te(jr(Be), "@react-aria/table").format(i === "single" ? "select" : "selectAll"),
      isSelected: l,
      isDisabled: i !== "multiple" || t.collection.size === 0 || t.collection.rows.length === 1 && t.collection.rows[0].type === "loader",
      isIndeterminate: !e && !l,
      onChange: () => t.selectionManager.toggleSelectAll()
    }
  };
}
function Wr(t) {
  return t && t.__esModule ? t.default : t;
}
function Ur(t, e, l) {
  let { column: i, triggerRef: n, isDisabled: o, onResizeStart: r, onResize: u, onResizeEnd: s, "aria-label": a } = t;
  const d = te(Wr(Be), "@react-aria/table");
  let c = ke(), h = e.resizingColumn === i.key, p = f.useRef(h), v = f.useRef(null), b = f.useRef(!1), g = e.tableState.isKeyboardNavigationDisabled, { direction: m } = ee(), { keyboardProps: C } = eo({
    onKeyDown: (I) => {
      g ? (I.key === "Escape" || I.key === "Enter" || I.key === " " || I.key === "Tab") && (I.preventDefault(), w(i)) : (I.continuePropagation(), I.key === "Enter" && $(i));
    }
  }), $ = ue((I) => {
    p.current || (v.current = e.updateResizedColumns(I.key, e.getColumnWidth(I.key)), e.startResize(I.key), e.tableState.setKeyboardNavigationDisabled(!0), r == null || r(v.current)), p.current = !0;
  }), x = ue((I, j) => {
    let G = e.updateResizedColumns(I.key, j);
    u == null || u(G), v.current = G;
  }), w = ue((I) => {
    p.current && (v.current == null && (v.current = e.updateResizedColumns(I.key, e.getColumnWidth(I.key))), e.endResize(), e.tableState.setKeyboardNavigationDisabled(!1), s == null || s(v.current), p.current = !1, n != null && n.current && !b.current && Q(n.current)), v.current = null;
  });
  const D = f.useRef(0), { moveProps: S } = vr({
    onMoveStart() {
      D.current = e.getColumnWidth(i.key), $(i);
    },
    onMove(I) {
      let { deltaX: j, deltaY: G, pointerType: Un } = I;
      m === "rtl" && (j *= -1), Un === "keyboard" && (G !== 0 && j === 0 && (j = G * -1), j *= 10), j !== 0 && (D.current += j, x(i, D.current));
    },
    onMoveEnd(I) {
      let { pointerType: j } = I;
      D.current = 0, (j === "mouse" || j === "touch" && b.current) && w(i);
    }
  });
  let R = f.useCallback((I) => {
    var j;
    g && ((j = S.onKeyDown) === null || j === void 0 || j.call(S, I));
  }, [
    g,
    S
  ]), B = Math.floor(e.getColumnMinWidth(i.key)), z = Math.floor(e.getColumnMaxWidth(i.key));
  z === 1 / 0 && (z = Number.MAX_SAFE_INTEGER);
  let K = Math.floor(e.getColumnWidth(i.key)), N = Qt();
  N === "virtual" && typeof window < "u" && "ontouchstart" in window && (N = "touch");
  let E = (n == null ? void 0 : n.current) == null && (N === "keyboard" || N === "virtual") && !h ? d.format("resizerDescription") : void 0, A = Ke(E), F = {
    "aria-label": a,
    "aria-orientation": "horizontal",
    "aria-labelledby": `${c} ${Yl(e.tableState, i.key)}`,
    "aria-valuetext": d.format("columnSize", {
      value: K
    }),
    type: "range",
    min: B,
    max: z,
    value: K,
    ...A
  };
  const O = f.useCallback(() => {
    l.current && Q(l.current);
  }, [
    l
  ]);
  let H = e.resizingColumn, q = f.useRef(null);
  f.useEffect(() => {
    if (q.current !== H && H != null && H === i.key) {
      b.current = document.activeElement === l.current, $(i);
      let I = setTimeout(() => O(), 0), j = setTimeout(O, 400);
      return () => {
        clearTimeout(I), clearTimeout(j);
      };
    }
    q.current = H;
  }, [
    H,
    i,
    O,
    l,
    $
  ]);
  let se = (I) => {
    let j = e.getColumnWidth(i.key), G = parseFloat(I.target.value);
    G > j ? G = j + 10 : G = j - 10, x(i, G);
  }, { pressProps: de } = xe({
    preventFocusOnPress: !0,
    onPressStart: (I) => {
      if (!(I.ctrlKey || I.altKey || I.metaKey || I.shiftKey || I.pointerType === "keyboard")) {
        if (I.pointerType === "virtual" && e.resizingColumn != null) {
          w(i);
          return;
        }
        O(), I.pointerType !== "virtual" && $(i);
      }
    },
    onPress: (I) => {
      (I.pointerType === "touch" && b.current || I.pointerType === "mouse") && e.resizingColumn != null && w(i);
    }
  }), { visuallyHiddenProps: ye } = De();
  return {
    resizerProps: V(C, {
      ...S,
      onKeyDown: R
    }, de, {
      style: {
        touchAction: "none"
      }
    }),
    inputProps: V(ye, {
      id: c,
      onBlur: () => {
        w(i);
      },
      onChange: se,
      disabled: o
    }, F),
    isResizing: h
  };
}
function Ii() {
  return Sr();
}
function qr(t) {
  let { selectionMode: e = "single" } = t, l = to(t), [i, n] = f.useState(null), o = f.useMemo(() => {
    var x;
    return t.defaultValue !== void 0 ? t.defaultValue : e === "single" ? (x = t.defaultSelectedKey) !== null && x !== void 0 ? x : null : [];
  }, [
    t.defaultValue,
    t.defaultSelectedKey,
    e
  ]), r = f.useMemo(() => t.value !== void 0 ? t.value : e === "single" ? t.selectedKey : void 0, [
    t.value,
    t.selectedKey,
    e
  ]), [u, s] = Xt(r, o, t.onChange), a = e === "single" && Array.isArray(u) ? u[0] : u, d = (x) => {
    if (e === "single") {
      var w, D;
      let S = Array.isArray(x) ? (D = x[0]) !== null && D !== void 0 ? D : null : x;
      s(S), S !== a && ((w = t.onSelectionChange) === null || w === void 0 || w.call(t, S));
    } else {
      let S = [];
      Array.isArray(x) ? S = x : x != null && (S = [
        x
      ]), s(S);
    }
  }, c = Uo({
    ...t,
    selectionMode: e,
    disallowEmptySelection: e === "single",
    allowDuplicateSelectionEvents: !0,
    selectedKeys: f.useMemo(() => Yr(a), [
      a
    ]),
    onSelectionChange: (x) => {
      if (x !== "all") {
        if (e === "single") {
          var w;
          let D = (w = x.values().next().value) !== null && w !== void 0 ? w : null;
          d(D), l.close();
        } else d([
          ...x
        ]);
        v.commitValidation();
      }
    }
  }), h = c.selectionManager.firstSelectedKey, p = f.useMemo(() => [
    ...c.selectionManager.selectedKeys
  ].map((x) => c.collection.getItem(x)).filter((x) => x != null), [
    c.selectionManager.selectedKeys,
    c.collection
  ]), v = lt({
    ...t,
    value: Array.isArray(a) && a.length === 0 ? null : a
  }), [b, g] = f.useState(!1), [m] = f.useState(a);
  var C, $;
  return {
    ...v,
    ...c,
    ...l,
    value: a,
    defaultValue: o ?? m,
    setValue: d,
    selectedKey: h,
    setSelectedKey: d,
    selectedItem: (C = p[0]) !== null && C !== void 0 ? C : null,
    selectedItems: p,
    defaultSelectedKey: ($ = t.defaultSelectedKey) !== null && $ !== void 0 ? $ : t.selectionMode === "single" ? m : null,
    focusStrategy: i,
    open(x = null) {
      c.collection.size !== 0 && (n(x), l.open());
    },
    toggle(x = null) {
      c.collection.size !== 0 && (n(x), l.toggle());
    },
    isFocused: b,
    setFocused: g
  };
}
function Yr(t) {
  if (t !== void 0)
    return t === null ? [] : Array.isArray(t) ? t : [
      t
    ];
}
function Zr(t) {
  return t != null && (!isNaN(t) || String(t).match(/^(\d+)(?=%$)/) !== null);
}
function Xr(t) {
  if (!t || typeof t == "number") return 1;
  let e = t.match(/^(.+)(?=fr$)/);
  return e ? parseFloat(e[0]) : (process.env.NODE_ENV !== "production" && console.warn(`width: ${t} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function vt(t, e) {
  if (typeof t == "string") {
    let l = t.match(/^(\d+)(?=%$)/);
    if (!l) throw new Error("Only percentages or numbers are supported for static column widths");
    return e * (parseFloat(l[0]) / 100);
  }
  return t;
}
function Pi(t, e) {
  return t != null ? vt(t, e) : Number.MAX_SAFE_INTEGER;
}
function Ri(t, e) {
  return t != null ? vt(t, e) : 0;
}
function Gr(t, e, l, i, n) {
  let o = !1, r = e.map((u, s) => {
    var a, d, c, h;
    let p = l.get(u.key) != null ? (a = l.get(u.key)) !== null && a !== void 0 ? a : "1fr" : (h = (c = (d = u.width) !== null && d !== void 0 ? d : u.defaultWidth) !== null && c !== void 0 ? c : i == null ? void 0 : i(s)) !== null && h !== void 0 ? h : "1fr", v = !1, b = 0, g = 0, m = 0;
    Zr(p) ? (b = vt(p, t), v = !0) : (g = Xr(p), g <= 0 && (v = !0));
    var C, $;
    let x = Ri(($ = (C = u.minWidth) !== null && C !== void 0 ? C : n == null ? void 0 : n(s)) !== null && $ !== void 0 ? $ : 0, t), w = Pi(u.maxWidth, t), D = Math.max(x, Math.min(b, w));
    return v ? m = D : b > D && (v = !0, m = D), v || (o = !0), {
      frozen: v,
      baseSize: b,
      hypotheticalMainSize: D,
      min: x,
      max: w,
      flex: g,
      targetMainSize: m,
      violation: 0
    };
  });
  for (; o; ) {
    let u = 0, s = 0;
    r.forEach((c) => {
      c.frozen ? u += c.targetMainSize : (u += c.baseSize, s += c.flex);
    });
    let a = t - u;
    a > 0 && r.forEach((c) => {
      if (!c.frozen) {
        let h = c.flex / s;
        c.targetMainSize = c.baseSize + h * a;
      }
    });
    let d = 0;
    r.forEach((c) => {
      if (c.violation = 0, !c.frozen) {
        let { min: h, max: p, targetMainSize: v } = c;
        c.targetMainSize = Math.max(h, Math.min(v, p)), c.violation = c.targetMainSize - v, d += c.violation;
      }
    }), o = !1, r.forEach((c) => {
      d === 0 || Math.sign(d) === Math.sign(c.violation) ? c.frozen = !0 : c.frozen || (o = !0);
    });
  }
  return Qr(r);
}
function Qr(t) {
  let e = 0, l = 0, i = [];
  return t.forEach(function(n) {
    let o = n.targetMainSize, r = Math.round(o + e) - l;
    e += o, l += r, i.push(r);
  }), i;
}
class Ai {
  /** Takes an array of columns and splits it into 2 maps of columns with controlled and columns with uncontrolled widths. */
  splitColumnsIntoControlledAndUncontrolled(e) {
    return e.reduce((l, i) => (i.props.width != null ? l[0].set(i.key, i) : l[1].set(i.key, i), l), [
      /* @__PURE__ */ new Map(),
      /* @__PURE__ */ new Map()
    ]);
  }
  /** Takes uncontrolled and controlled widths and joins them into a single Map. */
  recombineColumns(e, l, i, n) {
    return new Map(e.map((o) => i.has(o.key) ? [
      o.key,
      l.get(o.key)
    ] : [
      o.key,
      n.get(o.key).props.width
    ]));
  }
  /** Used to make an initial Map of the uncontrolled widths based on default widths. */
  getInitialUncontrolledWidths(e) {
    return new Map(Array.from(e).map(([l, i]) => {
      var n, o, r, u;
      return [
        l,
        (u = (r = i.props.defaultWidth) !== null && r !== void 0 ? r : (n = (o = this).getDefaultWidth) === null || n === void 0 ? void 0 : n.call(o, i)) !== null && u !== void 0 ? u : "1fr"
      ];
    }));
  }
  getColumnWidth(e) {
    var l;
    return (l = this.columnWidths.get(e)) !== null && l !== void 0 ? l : 0;
  }
  getColumnMinWidth(e) {
    var l;
    return (l = this.columnMinWidths.get(e)) !== null && l !== void 0 ? l : 0;
  }
  getColumnMaxWidth(e) {
    var l;
    return (l = this.columnMaxWidths.get(e)) !== null && l !== void 0 ? l : 0;
  }
  resizeColumnWidth(e, l, i, n) {
    let o = this.columnWidths, r = !0, u = /* @__PURE__ */ new Map();
    return n = Math.max(this.getColumnMinWidth(i), Math.min(this.getColumnMaxWidth(i), Math.floor(n))), e.columns.forEach((s) => {
      var a, d;
      s.key === i ? (u.set(s.key, n), r = !1) : r ? u.set(s.key, (a = o.get(s.key)) !== null && a !== void 0 ? a : 0) : u.set(s.key, (d = s.props.width) !== null && d !== void 0 ? d : l.get(s.key));
    }), u;
  }
  buildColumnWidths(e, l, i) {
    return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), Gr(e, l.columns.map((o) => ({
      ...o.props,
      key: o.key
    })), i, (o) => this.getDefaultWidth(l.columns[o]), (o) => this.getDefaultMinWidth(l.columns[o])).forEach((o, r) => {
      let u = l.columns[r].key, s = l.columns[r];
      this.columnWidths.set(u, o);
      var a;
      this.columnMinWidths.set(u, Ri((a = s.props.minWidth) !== null && a !== void 0 ? a : this.getDefaultMinWidth(s), e)), this.columnMaxWidths.set(u, Pi(s.props.maxWidth, e));
    }), this.columnWidths;
  }
  constructor(e) {
    this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map();
    var l;
    this.getDefaultWidth = (l = e == null ? void 0 : e.getDefaultWidth) !== null && l !== void 0 ? l : () => "1fr";
    var i;
    this.getDefaultMinWidth = (i = e == null ? void 0 : e.getDefaultMinWidth) !== null && i !== void 0 ? i : () => 75;
  }
}
function Jr(t, e) {
  let { getDefaultWidth: l, getDefaultMinWidth: i, tableWidth: n = 0 } = t, [o, r] = f.useState(null), u = f.useMemo(() => new Ai({
    getDefaultWidth: l,
    getDefaultMinWidth: i
  }), [
    l,
    i
  ]), [s, a] = f.useMemo(() => u.splitColumnsIntoControlledAndUncontrolled(e.collection.columns), [
    e.collection.columns,
    u
  ]), [d, c] = f.useState(() => u.getInitialUncontrolledWidths(a)), [h, p] = f.useState(e.collection.columns);
  if (e.collection.columns !== h) {
    if (e.collection.columns.length !== h.length || e.collection.columns.some(($, x) => $.key !== h[x].key)) {
      let $ = u.getInitialUncontrolledWidths(a);
      c($);
    }
    p(e.collection.columns);
  }
  let v = f.useMemo(() => u.recombineColumns(e.collection.columns, d, a, s), [
    e.collection.columns,
    d,
    a,
    s,
    u
  ]), b = f.useCallback(($) => {
    r($);
  }, [
    r
  ]), g = f.useCallback(($, x) => {
    let w = u.resizeColumnWidth(e.collection, d, $, x), D = new Map(Array.from(a).map(([S]) => [
      S,
      w.get(S)
    ]));
    return D.set($, x), c(D), w;
  }, [
    a,
    c,
    u,
    e.collection,
    d
  ]), m = f.useCallback(() => {
    r(null);
  }, [
    r
  ]), C = f.useMemo(() => u.buildColumnWidths(n, e.collection, v), [
    n,
    e.collection,
    v,
    u
  ]);
  return f.useMemo(() => ({
    resizingColumn: o,
    updateResizedColumns: g,
    startResize: b,
    endResize: m,
    getColumnWidth: ($) => u.getColumnWidth($),
    getColumnMinWidth: ($) => u.getColumnMinWidth($),
    getColumnMaxWidth: ($) => u.getColumnMaxWidth($),
    tableState: e,
    columnWidths: C
  }), [
    u,
    C,
    o,
    g,
    b,
    m,
    e
  ]);
}
function _r(t) {
  let { collection: e, focusMode: l } = t, i = t.UNSAFE_selectionState || rl(t), n = f.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), o = i.setFocusedKey;
  i.setFocusedKey = (s, a) => {
    if (l === "cell" && s != null) {
      let v = e.getItem(s);
      if ((v == null ? void 0 : v.type) === "item") {
        var d, c;
        let b = L(v, e);
        var h, p;
        a === "last" ? s = (h = (d = _(b)) === null || d === void 0 ? void 0 : d.key) !== null && h !== void 0 ? h : null : s = (p = (c = ie(b)) === null || c === void 0 ? void 0 : c.key) !== null && p !== void 0 ? p : null;
      }
    }
    o(s, a);
  };
  let r = f.useMemo(() => new qo(e, i), [
    e,
    i
  ]);
  const u = f.useRef(null);
  return f.useEffect(() => {
    if (i.focusedKey != null && u.current && !e.getItem(i.focusedKey)) {
      const s = u.current.getItem(i.focusedKey), a = (s == null ? void 0 : s.parentKey) != null && (s.type === "cell" || s.type === "rowheader" || s.type === "column") ? u.current.getItem(s.parentKey) : s;
      if (!a) {
        i.setFocusedKey(null);
        return;
      }
      const d = u.current.rows, c = e.rows, h = d.length - c.length;
      let p = Math.min(h > 1 ? Math.max(a.index - h + 1, 0) : a.index, c.length - 1), v = null;
      for (; p >= 0; ) {
        if (!r.isDisabled(c[p].key) && c[p].type !== "headerrow") {
          v = c[p];
          break;
        }
        p < c.length - 1 ? p++ : (p > a.index && (p = a.index), p--);
      }
      if (v) {
        const b = v.hasChildNodes ? [
          ...L(v, e)
        ] : [], g = v.hasChildNodes && a !== s && s && s.index < b.length ? b[s.index].key : v.key;
        i.setFocusedKey(g);
      } else i.setFocusedKey(null);
    }
    u.current = e;
  }, [
    e,
    r,
    i,
    i.focusedKey
  ]), {
    collection: e,
    disabledKeys: n,
    isKeyboardNavigationDisabled: !1,
    selectionManager: r
  };
}
class eu {
  *[Symbol.iterator]() {
    yield* [
      ...this.rows
    ];
  }
  get size() {
    return [
      ...this.rows
    ].length;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let l = this.keyMap.get(e);
    var i;
    return l && (i = l.prevKey) !== null && i !== void 0 ? i : null;
  }
  getKeyAfter(e) {
    let l = this.keyMap.get(e);
    var i;
    return l && (i = l.nextKey) !== null && i !== void 0 ? i : null;
  }
  getFirstKey() {
    var e;
    return (e = [
      ...this.rows
    ][0]) === null || e === void 0 ? void 0 : e.key;
  }
  getLastKey() {
    var e;
    let l = [
      ...this.rows
    ];
    return (e = l[l.length - 1]) === null || e === void 0 ? void 0 : e.key;
  }
  getItem(e) {
    var l;
    return (l = this.keyMap.get(e)) !== null && l !== void 0 ? l : null;
  }
  at(e) {
    const l = [
      ...this.getKeys()
    ];
    return this.getItem(l[e]);
  }
  getChildren(e) {
    let l = this.keyMap.get(e);
    return (l == null ? void 0 : l.childNodes) || [];
  }
  constructor(e) {
    this.keyMap = /* @__PURE__ */ new Map(), this.keyMap = /* @__PURE__ */ new Map(), this.columnCount = e == null ? void 0 : e.columnCount, this.rows = [];
    let l = (c) => {
      let h = this.keyMap.get(c.key);
      e.visitNode && (c = e.visitNode(c)), this.keyMap.set(c.key, c);
      let p = /* @__PURE__ */ new Set(), v = null, b = !1;
      if (c.type === "item") {
        var g;
        for (let w of c.childNodes) if (((g = w.props) === null || g === void 0 ? void 0 : g.colSpan) !== void 0) {
          b = !0;
          break;
        }
      }
      for (let w of c.childNodes) {
        if (w.type === "cell" && b) {
          var m, C;
          w.colspan = (m = w.props) === null || m === void 0 ? void 0 : m.colSpan, w.colSpan = (C = w.props) === null || C === void 0 ? void 0 : C.colSpan;
          var $, x;
          w.colIndex = v ? (($ = v.colIndex) !== null && $ !== void 0 ? $ : v.index) + ((x = v.colSpan) !== null && x !== void 0 ? x : 1) : w.index;
        }
        w.type === "cell" && w.parentKey == null && (w.parentKey = c.key), p.add(w.key), v ? (v.nextKey = w.key, w.prevKey = v.key) : w.prevKey = null, l(w), v = w;
      }
      if (v && (v.nextKey = null), h)
        for (let w of h.childNodes) p.has(w.key) || i(w);
    }, i = (c) => {
      this.keyMap.delete(c.key);
      for (let h of c.childNodes) this.keyMap.get(h.key) === h && i(h);
    }, n = null;
    for (let [c, h] of e.items.entries()) {
      var o, r, u, s, a, d;
      let p = {
        ...h,
        level: (o = h.level) !== null && o !== void 0 ? o : 0,
        key: (r = h.key) !== null && r !== void 0 ? r : "row-" + c,
        type: (u = h.type) !== null && u !== void 0 ? u : "row",
        value: (s = h.value) !== null && s !== void 0 ? s : null,
        hasChildNodes: !0,
        childNodes: [
          ...h.childNodes
        ],
        rendered: h.rendered,
        textValue: (a = h.textValue) !== null && a !== void 0 ? a : "",
        index: (d = h.index) !== null && d !== void 0 ? d : c
      };
      n ? (n.nextKey = p.key, p.prevKey = n.key) : p.prevKey = null, this.rows.push(p), l(p), n = p;
    }
    n && (n.nextKey = null);
  }
}
const Mi = "row-header-column-" + Math.random().toString(36).slice(2);
let Je = "row-header-column-" + Math.random().toString(36).slice(2);
for (; Mi === Je; ) Je = "row-header-column-" + Math.random().toString(36).slice(2);
function Ti(t, e) {
  if (e.length === 0) return [];
  let l = [], i = /* @__PURE__ */ new Map();
  for (let d of e) {
    let c = d.parentKey, h = [
      d
    ];
    for (; c; ) {
      let p = t.get(c);
      if (!p) break;
      if (i.has(p)) {
        var n, o;
        (o = (n = p).colSpan) !== null && o !== void 0 || (n.colSpan = 0), p.colSpan++, p.colspan = p.colSpan;
        let { column: v, index: b } = i.get(p);
        if (b > h.length) break;
        for (let g = b; g < h.length; g++) v.splice(g, 0, null);
        for (let g = h.length; g < v.length; g++)
          v[g] && i.has(v[g]) && (i.get(v[g]).index = g);
      } else
        p.colSpan = 1, p.colspan = 1, h.push(p), i.set(p, {
          column: h,
          index: h.length - 1
        });
      c = p.parentKey;
    }
    l.push(h), d.index = l.length - 1;
  }
  let r = Math.max(...l.map((d) => d.length)), u = Array(r).fill(0).map(() => []), s = 0;
  for (let d of l) {
    let c = r - 1;
    for (let h of d) {
      if (h) {
        let p = u[c], v = p.reduce((b, g) => {
          var m;
          return b + ((m = g.colSpan) !== null && m !== void 0 ? m : 1);
        }, 0);
        if (v < s) {
          let b = {
            type: "placeholder",
            key: "placeholder-" + h.key,
            colspan: s - v,
            colSpan: s - v,
            index: v,
            value: null,
            rendered: null,
            level: c,
            hasChildNodes: !1,
            childNodes: [],
            textValue: ""
          };
          p.length > 0 && (p[p.length - 1].nextKey = b.key, b.prevKey = p[p.length - 1].key), p.push(b);
        }
        p.length > 0 && (p[p.length - 1].nextKey = h.key, h.prevKey = p[p.length - 1].key), h.level = c, h.colIndex = s, p.push(h);
      }
      c--;
    }
    s++;
  }
  let a = 0;
  for (let d of u) {
    let c = d.reduce((h, p) => {
      var v;
      return h + ((v = p.colSpan) !== null && v !== void 0 ? v : 1);
    }, 0);
    if (c < e.length) {
      let h = {
        type: "placeholder",
        key: "placeholder-" + d[d.length - 1].key,
        colSpan: e.length - c,
        colspan: e.length - c,
        index: c,
        value: null,
        rendered: null,
        level: a,
        hasChildNodes: !1,
        childNodes: [],
        textValue: "",
        prevKey: d[d.length - 1].key
      };
      d.push(h);
    }
    a++;
  }
  return u.map((d, c) => ({
    type: "headerrow",
    key: "headerrow-" + c,
    index: c,
    value: null,
    rendered: null,
    level: 0,
    hasChildNodes: !0,
    childNodes: d,
    textValue: ""
  }));
}
class tu extends eu {
  *[Symbol.iterator]() {
    yield* this.body.childNodes;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let l = this.keyMap.get(e);
    var i;
    return (i = l == null ? void 0 : l.prevKey) !== null && i !== void 0 ? i : null;
  }
  getKeyAfter(e) {
    let l = this.keyMap.get(e);
    var i;
    return (i = l == null ? void 0 : l.nextKey) !== null && i !== void 0 ? i : null;
  }
  getFirstKey() {
    var e, l;
    return (l = (e = ie(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && l !== void 0 ? l : null;
  }
  getLastKey() {
    var e, l;
    return (l = (e = _(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && l !== void 0 ? l : null;
  }
  getItem(e) {
    var l;
    return (l = this.keyMap.get(e)) !== null && l !== void 0 ? l : null;
  }
  at(e) {
    const l = [
      ...this.getKeys()
    ];
    return this.getItem(l[e]);
  }
  getChildren(e) {
    return e === this.body.key ? this.body.childNodes : super.getChildren(e);
  }
  getTextValue(e) {
    let l = this.getItem(e);
    if (!l) return "";
    if (l.textValue) return l.textValue;
    let i = this.rowHeaderColumnKeys;
    if (i) {
      let n = [];
      for (let o of l.childNodes) {
        let r = this.columns[o.index];
        if (i.has(r.key) && o.textValue && n.push(o.textValue), n.length === i.size) break;
      }
      return n.join(" ");
    }
    return "";
  }
  constructor(e, l, i) {
    let n = /* @__PURE__ */ new Set(), o = null, r = [];
    if (i != null && i.showSelectionCheckboxes) {
      let c = {
        type: "column",
        key: Mi,
        value: null,
        textValue: "",
        level: 0,
        index: i != null && i.showDragButtons ? 1 : 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isSelectionCell: !0
        }
      };
      r.unshift(c);
    }
    if (i != null && i.showDragButtons) {
      let c = {
        type: "column",
        key: Je,
        value: null,
        textValue: "",
        level: 0,
        index: 0,
        hasChildNodes: !1,
        rendered: null,
        childNodes: [],
        props: {
          isDragButtonCell: !0
        }
      };
      r.unshift(c);
    }
    let u = [], s = /* @__PURE__ */ new Map(), a = (c) => {
      switch (c.type) {
        case "body":
          o = c;
          break;
        case "column":
          s.set(c.key, c), c.hasChildNodes || (r.push(c), c.props.isRowHeader && n.add(c.key));
          break;
        case "item":
          u.push(c);
          return;
      }
      for (let h of c.childNodes) a(h);
    };
    for (let c of e) a(c);
    let d = Ti(s, r);
    if (d.forEach((c, h) => u.splice(h, 0, c)), super({
      columnCount: r.length,
      items: u,
      visitNode: (c) => (c.column = r[c.index], c)
    }), this._size = 0, this.columns = r, this.rowHeaderColumnKeys = n, this.body = o, this.headerRows = d, this._size = [
      ...o.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0) {
      let c = this.columns.find((h) => {
        var p, v;
        return !(!((p = h.props) === null || p === void 0) && p.isDragButtonCell) && !(!((v = h.props) === null || v === void 0) && v.isSelectionCell);
      });
      c && this.rowHeaderColumnKeys.add(c.key);
    }
  }
}
const lu = {
  ascending: "descending",
  descending: "ascending"
};
function iu(t) {
  let [e, l] = f.useState(!1), { selectionMode: i = "none", showSelectionCheckboxes: n, showDragButtons: o } = t, r = f.useMemo(() => ({
    showSelectionCheckboxes: n && i !== "none",
    showDragButtons: o,
    selectionMode: i,
    columns: []
  }), [
    t.children,
    n,
    i,
    o
  ]), u = Yo(t, f.useCallback((c) => new tu(c, null, r), [
    r
  ]), r), { disabledKeys: s, selectionManager: a } = _r({
    ...t,
    collection: u,
    disabledBehavior: t.disabledBehavior || "selection"
  });
  var d;
  return {
    collection: u,
    disabledKeys: s,
    selectionManager: a,
    showSelectionCheckboxes: t.showSelectionCheckboxes || !1,
    sortDescriptor: (d = t.sortDescriptor) !== null && d !== void 0 ? d : null,
    isKeyboardNavigationDisabled: u.size === 0 || e,
    setKeyboardNavigationDisabled: l,
    sort(c, h) {
      var p, v;
      (v = t.onSortChange) === null || v === void 0 || v.call(t, {
        column: c,
        direction: h ?? (((p = t.sortDescriptor) === null || p === void 0 ? void 0 : p.column) === c ? lu[t.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function nu(t, e) {
  let l = f.useMemo(() => e ? t.collection.filter(e) : t.collection, [
    t.collection,
    e
  ]), i = t.selectionManager.withCollection(l);
  return {
    ...t,
    collection: l,
    selectionManager: i
  };
}
const ou = /* @__PURE__ */ f.createContext(null), ru = /* @__PURE__ */ f.forwardRef(function(e, l) {
  let { inputRef: i = null, ...n } = e;
  [e, l] = Se(n, l, it);
  let { validationBehavior: o } = nt(_t) || {};
  var r, u;
  let s = (u = (r = e.validationBehavior) !== null && r !== void 0 ? r : o) !== null && u !== void 0 ? u : "native", a = f.useContext(ou), d = oe(f.useMemo(() => el(i, e.inputRef !== void 0 ? e.inputRef : null), [
    i,
    e.inputRef
  ])), { labelProps: c, inputProps: h, isSelected: p, isDisabled: v, isReadOnly: b, isPressed: g, isInvalid: m } = a ? yr({
    ...Xe(e),
    // Value is optional for standalone checkboxes, but required for CheckboxGroup items;
    // it's passed explicitly here to avoid typescript error (requires ignore).
    // @ts-ignore
    value: e.value,
    // ReactNode type doesn't allow function children.
    children: typeof e.children == "function" ? !0 : e.children
  }, a, d) : sl({
    ...Xe(e),
    children: typeof e.children == "function" ? !0 : e.children,
    validationBehavior: s
  }, dl(e), d), { isFocused: C, isFocusVisible: $, focusProps: x } = ne(), w = v || b, { hoverProps: D, isHovered: S } = ge({
    ...e,
    isDisabled: w
  }), R = X({
    ...e,
    defaultClassName: "react-aria-Checkbox",
    values: {
      isSelected: p,
      isIndeterminate: e.isIndeterminate || !1,
      isPressed: g,
      isHovered: S,
      isFocused: C,
      isFocusVisible: $,
      isDisabled: v,
      isReadOnly: b,
      isInvalid: m,
      isRequired: e.isRequired || !1
    }
  }), B = U(e, {
    global: !0
  });
  return delete B.id, delete B.onClick, /* @__PURE__ */ k.createElement("label", {
    ...V(B, c, D, R),
    ref: l,
    slot: e.slot || void 0,
    "data-selected": p || void 0,
    "data-indeterminate": e.isIndeterminate || void 0,
    "data-pressed": g || void 0,
    "data-hovered": S || void 0,
    "data-focused": C || void 0,
    "data-focus-visible": $ || void 0,
    "data-disabled": v || void 0,
    "data-readonly": b || void 0,
    "data-invalid": m || void 0,
    "data-required": e.isRequired || void 0
  }, /* @__PURE__ */ k.createElement(lo, {
    elementType: "span"
  }, /* @__PURE__ */ k.createElement("input", {
    ...V(h, x),
    ref: d
  })), R.children);
});
var Fi = {};
Fi = {
  colorSwatchPicker: "تغييرات الألوان",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "حدد عنصرًا",
  tableResizer: "أداة تغيير الحجم"
};
var Ki = {};
Ki = {
  colorSwatchPicker: "Цветови мостри",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Изберете предмет",
  tableResizer: "Преоразмерител"
};
var Vi = {};
Vi = {
  colorSwatchPicker: "Vzorky barev",
  dropzoneLabel: "Místo pro přetažení",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Změna velikosti"
};
var Ni = {};
Ni = {
  colorSwatchPicker: "Farveprøver",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vælg et element",
  tableResizer: "Størrelsesændring"
};
var Hi = {};
Hi = {
  colorSwatchPicker: "Farbfelder",
  dropzoneLabel: "Ablegebereich",
  selectPlaceholder: "Element wählen",
  tableResizer: "Größenanpassung"
};
var ji = {};
ji = {
  colorSwatchPicker: "Χρωματικά δείγματα",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Επιλέξτε ένα αντικείμενο",
  tableResizer: "Αλλαγή μεγέθους"
};
var Li = {};
Li = {
  selectPlaceholder: "Select an item",
  tableResizer: "Resizer",
  dropzoneLabel: "DropZone",
  colorSwatchPicker: "Color swatches"
};
var Oi = {};
Oi = {
  colorSwatchPicker: "Muestras de colores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Seleccionar un artículo",
  tableResizer: "Cambiador de tamaño"
};
var Wi = {};
Wi = {
  colorSwatchPicker: "Värvinäidised",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valige üksus",
  tableResizer: "Suuruse muutja"
};
var Ui = {};
Ui = {
  colorSwatchPicker: "Värimallit",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valitse kohde",
  tableResizer: "Koon muuttaja"
};
var qi = {};
qi = {
  colorSwatchPicker: "Échantillons de couleurs",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Sélectionner un élément",
  tableResizer: "Redimensionneur"
};
var Yi = {};
Yi = {
  colorSwatchPicker: "דוגמיות צבע",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "בחר פריט",
  tableResizer: "שינוי גודל"
};
var Zi = {};
Zi = {
  colorSwatchPicker: "Uzorci boja",
  dropzoneLabel: "Zona spuštanja",
  selectPlaceholder: "Odaberite stavku",
  tableResizer: "Promjena veličine"
};
var Xi = {};
Xi = {
  colorSwatchPicker: "Színtárak",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Válasszon ki egy elemet",
  tableResizer: "Átméretező"
};
var Gi = {};
Gi = {
  colorSwatchPicker: "Campioni di colore",
  dropzoneLabel: "Zona di rilascio",
  selectPlaceholder: "Seleziona un elemento",
  tableResizer: "Ridimensionamento"
};
var Qi = {};
Qi = {
  colorSwatchPicker: "カラースウォッチ",
  dropzoneLabel: "ドロップゾーン",
  selectPlaceholder: "項目を選択",
  tableResizer: "サイズ変更ツール"
};
var Ji = {};
Ji = {
  colorSwatchPicker: "색상 견본",
  dropzoneLabel: "드롭 영역",
  selectPlaceholder: "항목 선택",
  tableResizer: "크기 조정기"
};
var _i = {};
_i = {
  colorSwatchPicker: "Spalvų pavyzdžiai",
  dropzoneLabel: "„DropZone“",
  selectPlaceholder: "Pasirinkite elementą",
  tableResizer: "Dydžio keitiklis"
};
var en = {};
en = {
  colorSwatchPicker: "Krāsu paraugi",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izvēlēties vienumu",
  tableResizer: "Izmēra mainītājs"
};
var tn = {};
tn = {
  colorSwatchPicker: "Fargekart",
  dropzoneLabel: "Droppsone",
  selectPlaceholder: "Velg et element",
  tableResizer: "Størrelsesendrer"
};
var ln = {};
ln = {
  colorSwatchPicker: "kleurstalen",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecteer een item",
  tableResizer: "Resizer"
};
var nn = {};
nn = {
  colorSwatchPicker: "Próbki kolorów",
  dropzoneLabel: "Strefa upuszczania",
  selectPlaceholder: "Wybierz element",
  tableResizer: "Zmiana rozmiaru"
};
var on = {};
on = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var rn = {};
rn = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var un = {};
un = {
  colorSwatchPicker: "Specimene de culoare",
  dropzoneLabel: "Zonă de plasare",
  selectPlaceholder: "Selectați un element",
  tableResizer: "Instrument de redimensionare"
};
var an = {};
an = {
  colorSwatchPicker: "Цветовые образцы",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Выберите элемент",
  tableResizer: "Средство изменения размера"
};
var sn = {};
sn = {
  colorSwatchPicker: "Vzorkovníky farieb",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Nástroj na zmenu veľkosti"
};
var dn = {};
dn = {
  colorSwatchPicker: "Barvne palete",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izberite element",
  tableResizer: "Spreminjanje velikosti"
};
var cn = {};
cn = {
  colorSwatchPicker: "Uzorci boje",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izaberite stavku",
  tableResizer: "Promena veličine"
};
var hn = {};
hn = {
  colorSwatchPicker: "Färgrutor",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Välj en artikel",
  tableResizer: "Storleksändrare"
};
var fn = {};
fn = {
  colorSwatchPicker: "Renk örnekleri",
  dropzoneLabel: "Bırakma Bölgesi",
  selectPlaceholder: "Bir öğe seçin",
  tableResizer: "Yeniden boyutlandırıcı"
};
var pn = {};
pn = {
  colorSwatchPicker: "Зразки кольорів",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Виберіть елемент",
  tableResizer: "Засіб змінення розміру"
};
var vn = {};
vn = {
  colorSwatchPicker: "颜色色板",
  dropzoneLabel: "放置区域",
  selectPlaceholder: "选择一个项目",
  tableResizer: "尺寸调整器"
};
var mn = {};
mn = {
  colorSwatchPicker: "色票",
  dropzoneLabel: "放置區",
  selectPlaceholder: "選取項目",
  tableResizer: "大小調整器"
};
var mt = {};
mt = {
  "ar-AE": Fi,
  "bg-BG": Ki,
  "cs-CZ": Vi,
  "da-DK": Ni,
  "de-DE": Hi,
  "el-GR": ji,
  "en-US": Li,
  "es-ES": Oi,
  "et-EE": Wi,
  "fi-FI": Ui,
  "fr-FR": qi,
  "he-IL": Yi,
  "hr-HR": Zi,
  "hu-HU": Xi,
  "it-IT": Gi,
  "ja-JP": Qi,
  "ko-KR": Ji,
  "lt-LT": _i,
  "lv-LV": en,
  "nb-NO": tn,
  "nl-NL": ln,
  "pl-PL": nn,
  "pt-BR": on,
  "pt-PT": rn,
  "ro-RO": un,
  "ru-RU": an,
  "sk-SK": sn,
  "sl-SI": dn,
  "sr-SP": cn,
  "sv-SE": hn,
  "tr-TR": fn,
  "uk-UA": pn,
  "zh-CN": vn,
  "zh-TW": mn
};
function uu(t) {
  return t && t.__esModule ? t.default : t;
}
const gt = /* @__PURE__ */ f.createContext(null), gn = /* @__PURE__ */ f.createContext(null), au = /* @__PURE__ */ f.forwardRef(function(e, l) {
  [e, l] = Se(e, l, gt);
  let { children: i, isDisabled: n = !1, isInvalid: o = !1, isRequired: r = !1 } = e, u = f.useMemo(() => typeof i == "function" ? i({
    isOpen: !1,
    isDisabled: n,
    isInvalid: o,
    isRequired: r,
    isFocused: !1,
    isFocusVisible: !1,
    defaultChildren: null
  }) : i, [
    i,
    n,
    o,
    r
  ]);
  return /* @__PURE__ */ k.createElement(ul, {
    content: u
  }, (s) => /* @__PURE__ */ k.createElement(du, {
    props: e,
    collection: s,
    selectRef: l
  }));
}), su = [
  tl,
  ut,
  ot
];
function du({ props: t, selectRef: e, collection: l }) {
  let { validationBehavior: i } = nt(_t) || {};
  var n, o;
  let r = (o = (n = t.validationBehavior) !== null && n !== void 0 ? n : i) !== null && o !== void 0 ? o : "native", u = qr({
    ...t,
    collection: l,
    children: void 0,
    validationBehavior: r
  }), { isFocusVisible: s, focusProps: a } = ne({
    within: !0
  }), d = f.useRef(null), [c, h] = no(!t["aria-label"] && !t["aria-labelledby"]), { labelProps: p, triggerProps: v, valueProps: b, menuProps: g, descriptionProps: m, errorMessageProps: C, hiddenSelectProps: $, ...x } = Ir({
    ...Xe(t),
    label: h,
    validationBehavior: r
  }, u, d), [w, D] = f.useState(null), S = f.useCallback(() => {
    d.current && D(d.current.offsetWidth + "px");
  }, [
    d
  ]);
  rt({
    ref: d,
    onResize: S
  });
  let R = f.useMemo(() => ({
    isOpen: u.isOpen,
    isFocused: u.isFocused,
    isFocusVisible: s,
    isDisabled: t.isDisabled || !1,
    isInvalid: x.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    u.isOpen,
    u.isFocused,
    s,
    t.isDisabled,
    x.isInvalid,
    t.isRequired
  ]), B = X({
    ...t,
    values: R,
    defaultClassName: "react-aria-Select"
  }), z = U(t, {
    global: !0
  });
  delete z.id;
  let K = f.useRef(null);
  return /* @__PURE__ */ k.createElement(Ee, {
    values: [
      [
        gt,
        t
      ],
      [
        gn,
        u
      ],
      [
        bn,
        b
      ],
      [
        tl,
        {
          ...p,
          ref: c,
          elementType: "span"
        }
      ],
      [
        ut,
        {
          ...v,
          ref: d,
          isPressed: u.isOpen,
          autoFocus: t.autoFocus
        }
      ],
      [
        oo,
        u
      ],
      [
        ro,
        {
          trigger: "Select",
          triggerRef: d,
          scrollRef: K,
          placement: "bottom start",
          style: {
            "--trigger-width": w
          },
          "aria-labelledby": g["aria-labelledby"],
          clearContexts: su
        }
      ],
      [
        Zo,
        {
          ...g,
          ref: K
        }
      ],
      [
        Xo,
        u
      ],
      [
        ot,
        {
          slots: {
            description: m,
            errorMessage: C
          }
        }
      ],
      [
        uo,
        x
      ]
    ]
  }, /* @__PURE__ */ k.createElement("div", {
    ...V(z, B, a),
    ref: e,
    slot: t.slot || void 0,
    "data-focused": u.isFocused || void 0,
    "data-focus-visible": s || void 0,
    "data-open": u.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": x.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }, B.children, /* @__PURE__ */ k.createElement(Rr, {
    ...$,
    autoComplete: t.autoComplete
  })));
}
const bn = /* @__PURE__ */ f.createContext(null), cu = /* @__PURE__ */ io(function(e, l) {
  var i;
  [e, l] = Se(e, l, bn);
  let n = f.useContext(gn), { placeholder: o } = nt(gt), r = n.selectedItems.map((m) => {
    var C;
    let $ = (C = m.props) === null || C === void 0 ? void 0 : C.children;
    return typeof $ == "function" && ($ = $({
      isHovered: !1,
      isPressed: !1,
      isSelected: !1,
      isFocused: !1,
      isFocusVisible: !1,
      isDisabled: !1,
      selectionMode: "single",
      selectionBehavior: "toggle"
    })), $;
  }), u = pr(), s = f.useMemo(() => n.selectedItems.map((m) => m == null ? void 0 : m.textValue), [
    n.selectedItems
  ]), a = n.selectionManager.selectionMode, d = f.useMemo(() => {
    var m;
    return a === "single" ? (m = s[0]) !== null && m !== void 0 ? m : "" : u.format(s);
  }, [
    a,
    u,
    s
  ]), c = f.useMemo(() => {
    if (a === "single") return r[0];
    let m = u.formatToParts(s);
    if (m.length === 0) return null;
    let C = 0;
    return m.map(($) => $.type === "element" ? /* @__PURE__ */ k.createElement(f.Fragment, {
      key: C
    }, r[C++]) : $.value);
  }, [
    a,
    u,
    s,
    r
  ]), h = te(uu(mt), "react-aria-components");
  var p, v;
  let b = X({
    ...e,
    defaultChildren: (p = c ?? o) !== null && p !== void 0 ? p : h.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (v = (i = n.selectedItems[0]) === null || i === void 0 ? void 0 : i.value) !== null && v !== void 0 ? v : null,
      selectedItems: f.useMemo(() => n.selectedItems.map((m) => {
        var C;
        return (C = m.value) !== null && C !== void 0 ? C : null;
      }), [
        n.selectedItems
      ]),
      selectedText: d,
      isPlaceholder: n.selectedItems.length === 0,
      state: n
    }
  }), g = U(e, {
    global: !0
  });
  return /* @__PURE__ */ k.createElement("span", {
    ref: l,
    ...g,
    ...b,
    "data-placeholder": n.selectedItems.length === 0 || void 0
  }, /* @__PURE__ */ k.createElement(ot.Provider, {
    value: void 0
  }, b.children));
});
function hu(t) {
  return t && t.__esModule ? t.default : t;
}
class fu extends co {
  addNode(e) {
    super.addNode(e), this.columnsDirty || (this.columnsDirty = e.type === "column"), e.type === "tableheader" && (this.head = e), e.type === "tablebody" && (this.body = e);
  }
  commit(e, l, i = !1) {
    this.updateColumns(i), this.rows = [];
    for (let r of this.getChildren(this.body.key)) {
      let u = r.lastChildKey;
      if (u != null) {
        let s = this.getItem(u);
        var n, o;
        let a = ((n = s.colIndex) !== null && n !== void 0 ? n : s.index) + ((o = s.colSpan) !== null && o !== void 0 ? o : 1);
        if (a !== this.columns.length && !i) throw new Error(`Cell count must match column count. Found ${a} cells and ${this.columns.length} columns.`);
      }
      this.rows.push(r);
    }
    super.commit(e, l, i);
  }
  updateColumns(e) {
    if (!this.columnsDirty) return;
    this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
    let l = /* @__PURE__ */ new Map(), i = (n) => {
      switch (n.type) {
        case "column":
          l.set(n.key, n), n.hasChildNodes || (n.index = this.columns.length, this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key));
          break;
      }
      for (let o of this.getChildren(n.key)) i(o);
    };
    for (let n of this.getChildren(this.head.key)) i(n);
    if (this.headerRows = Ti(l, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw new Error("A table must have at least one Column with the isRowHeader prop set to true");
  }
  get columnCount() {
    return this.columns.length;
  }
  *[Symbol.iterator]() {
    this.head.key !== -1 && (yield this.head, yield this.body);
  }
  getFirstKey() {
    return this.body.firstChildKey;
  }
  getLastKey() {
    return this.body.lastChildKey;
  }
  getKeyAfter(e) {
    let l = this.getItem(e);
    var i;
    return (l == null ? void 0 : l.type) === "column" ? (i = l.nextKey) !== null && i !== void 0 ? i : null : super.getKeyAfter(e);
  }
  getKeyBefore(e) {
    var l;
    let i = this.getItem(e);
    var n;
    if ((i == null ? void 0 : i.type) === "column") return (n = i.prevKey) !== null && n !== void 0 ? n : null;
    let o = super.getKeyBefore(e);
    return o != null && ((l = this.getItem(o)) === null || l === void 0 ? void 0 : l.type) === "tablebody" ? null : o;
  }
  getChildren(e) {
    if (!this.getItem(e)) {
      for (let l of this.headerRows)
        if (l.key === e) return l.childNodes;
    }
    return super.getChildren(e);
  }
  clone() {
    let e = super.clone();
    return e.headerRows = this.headerRows, e.columns = this.columns, e.rowHeaderColumnKeys = this.rowHeaderColumnKeys, e.head = this.head, e.body = this.body, e;
  }
  getTextValue(e) {
    let l = this.getItem(e);
    if (!l) return "";
    if (l.textValue) return l.textValue;
    let i = this.rowHeaderColumnKeys, n = [];
    for (let o of this.getChildren(e)) {
      let r = this.columns[o.index];
      if (i.has(r.key) && o.textValue && n.push(o.textValue), n.length === i.size) break;
    }
    return n.join(" ");
  }
  constructor(...e) {
    super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new yt(-1), this.body = new $t(-2), this.columnsDirty = !0;
  }
}
const bt = /* @__PURE__ */ f.createContext(null), pu = /* @__PURE__ */ f.forwardRef(function(e, l) {
  let i = oe(l), n = f.useRef(null), o = f.useRef(null), [r, u] = f.useState(0);
  me(() => {
    let a = n.current;
    for (; a && a !== i.current && !vo(a); ) a = a.parentElement;
    o.current = a;
  }, [
    i
  ]), rt({
    ref: o,
    box: "border-box",
    onResize() {
      var a, d;
      u((d = (a = o.current) === null || a === void 0 ? void 0 : a.clientWidth) !== null && d !== void 0 ? d : 0);
    }
  }), me(() => {
    var a, d;
    u((d = (a = o.current) === null || a === void 0 ? void 0 : a.clientWidth) !== null && d !== void 0 ? d : 0);
  }, []);
  let s = f.useMemo(() => ({
    tableRef: n,
    scrollRef: o,
    tableWidth: r,
    useTableColumnResizeState: Jr,
    onResizeStart: e.onResizeStart,
    onResize: e.onResize,
    onResizeEnd: e.onResizeEnd
  }), [
    n,
    r,
    e.onResizeStart,
    e.onResize,
    e.onResizeEnd
  ]);
  return /* @__PURE__ */ k.createElement("div", {
    ...U(e, {
      global: !0
    }),
    ref: i,
    className: e.className || "react-aria-ResizableTableContainer",
    style: e.style,
    onScroll: e.onScroll
  }, /* @__PURE__ */ k.createElement(bt.Provider, {
    value: s
  }, e.children));
}), vu = /* @__PURE__ */ f.createContext(null), J = /* @__PURE__ */ f.createContext(null), Ne = /* @__PURE__ */ f.createContext(null), mu = /* @__PURE__ */ f.forwardRef(function(e, l) {
  var i;
  [e, l] = Se(e, l, vu);
  let n = rl(e), { selectionBehavior: o, selectionMode: r, disallowEmptySelection: u } = n, s = !!(!((i = e.dragAndDropHooks) === null || i === void 0) && i.useDraggableCollectionState), a = f.useMemo(() => ({
    selectionBehavior: r === "none" ? null : o,
    selectionMode: r,
    disallowEmptySelection: u,
    allowsDragging: s
  }), [
    o,
    r,
    u,
    s
  ]), d = /* @__PURE__ */ k.createElement(bu.Provider, {
    value: a
  }, /* @__PURE__ */ k.createElement(ze, e));
  return /* @__PURE__ */ k.createElement(ul, {
    content: d,
    createCollection: () => new fu()
  }, (c) => /* @__PURE__ */ k.createElement(gu, {
    props: e,
    forwardedRef: l,
    selectionState: n,
    collection: c
  }));
});
function gu({ props: t, forwardedRef: e, selectionState: l, collection: i }) {
  [t, e] = Se(t, e, Pt);
  let { shouldUseVirtualFocus: n, disallowTypeAhead: o, filter: r, ...u } = t, s = f.useContext(bt);
  e = oe(f.useMemo(() => el(e, s == null ? void 0 : s.tableRef), [
    e,
    s == null ? void 0 : s.tableRef
  ]));
  let a = iu({
    ...u,
    collection: i,
    children: void 0,
    UNSAFE_selectionState: l
  }), d = nu(a, r), { isVirtualized: c, layoutDelegate: h, dropTargetDelegate: p, CollectionRoot: v } = f.useContext(Z), { dragAndDropHooks: b } = t, { gridProps: g } = Tr({
    ...u,
    layoutDelegate: h,
    isVirtualized: c
  }, d, e), m = d.selectionManager, C = !!(b != null && b.useDraggableCollectionState), $ = !!(b != null && b.useDroppableCollectionState), x = f.useRef(C), w = f.useRef($);
  f.useEffect(() => {
    process.env.NODE_ENV !== "production" && (x.current !== C && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), w.current !== $ && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    C,
    $
  ]);
  let D, S, R, B = !1, z = null, K = f.useRef(null);
  if (C && b) {
    D = b.useDraggableCollectionState({
      collection: d.collection,
      selectionManager: m,
      preview: b.renderDragPreview ? K : void 0
    }), b.useDraggableCollection({}, D, e);
    let I = b.DragPreview;
    z = b.renderDragPreview ? /* @__PURE__ */ k.createElement(I, {
      ref: K
    }, b.renderDragPreview) : null;
  }
  if ($ && b) {
    S = b.useDroppableCollectionState({
      collection: d.collection,
      selectionManager: m
    });
    let I = new ol({
      collection: d.collection,
      disabledKeys: m.disabledKeys,
      disabledBehavior: m.disabledBehavior,
      ref: e,
      layoutDelegate: h
    }), j = b.dropTargetDelegate || p || new b.ListDropTargetDelegate(i.rows, e);
    R = b.useDroppableCollection({
      keyboardDelegate: I,
      dropTargetDelegate: j
    }, S, e), B = S.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: N, isFocused: E, isFocusVisible: A } = ne(), F = X({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: B,
      isFocused: E,
      isFocusVisible: A,
      state: d
    }
  }), O = !!(C && !(D != null && D.isDisabled)), H = F.style, q = null;
  s && (q = s.useTableColumnResizeState({
    tableWidth: s.tableWidth
  }, d), c || (H = {
    ...H,
    tableLayout: "fixed",
    width: "fit-content"
  }));
  let se = W("table"), de = U(t, {
    global: !0
  });
  var ye;
  return /* @__PURE__ */ k.createElement(Ee, {
    values: [
      [
        J,
        d
      ],
      [
        Ne,
        q
      ],
      [
        be,
        {
          dragAndDropHooks: b,
          dragState: D,
          dropState: S
        }
      ],
      [
        Jo,
        {
          render: Du
        }
      ],
      [
        Pt,
        null
      ],
      [
        ho,
        null
      ]
    ]
  }, /* @__PURE__ */ k.createElement(fo, null, /* @__PURE__ */ k.createElement(se, {
    ...V(de, F, g, N, R == null ? void 0 : R.collectionProps),
    style: H,
    ref: e,
    slot: t.slot || void 0,
    onScroll: t.onScroll,
    "data-allows-dragging": O || void 0,
    "data-drop-target": B || void 0,
    "data-focused": E || void 0,
    "data-focus-visible": A || void 0
  }, /* @__PURE__ */ k.createElement(_o, null, /* @__PURE__ */ k.createElement(v, {
    collection: d.collection,
    scrollRef: (ye = s == null ? void 0 : s.scrollRef) !== null && ye !== void 0 ? ye : e,
    persistedKeys: er(m, b, S)
  })))), z);
}
function W(t) {
  let { isVirtualized: e } = f.useContext(Z);
  return e ? "div" : t;
}
const bu = /* @__PURE__ */ f.createContext(null);
class yt extends Fe {
}
yt.type = "tableheader";
const yn = /* @__PURE__ */ ct(yt, (t, e) => {
  let l = f.useContext(J).collection, i = lr({
    items: l.headerRows,
    children: f.useCallback((a) => {
      switch (a.type) {
        case "headerrow":
          return /* @__PURE__ */ k.createElement(yu, {
            item: a
          });
        default:
          throw new Error("Unsupported node type in TableHeader: " + a.type);
      }
    }, [])
  }), n = W("thead"), { rowGroupProps: o } = Ii(), { hoverProps: r, isHovered: u } = ge({
    onHoverStart: t.onHoverStart,
    onHoverChange: t.onHoverChange,
    onHoverEnd: t.onHoverEnd
  }), s = X({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-TableHeader",
    values: {
      isHovered: u
    }
  });
  return /* @__PURE__ */ k.createElement(n, {
    ...V(U(t, {
      global: !0
    }), o, r),
    ...s,
    ref: e,
    "data-hovered": u || void 0
  }, i);
}, (t) => /* @__PURE__ */ k.createElement(ze, {
  dependencies: t.dependencies,
  items: t.columns
}, t.children));
function yu({ item: t }) {
  let e = f.useRef(null), l = f.useContext(J), { isVirtualized: i, CollectionBranch: n } = f.useContext(Z), { rowProps: o } = Nr({
    node: t,
    isVirtualized: i
  }, l, e), { checkboxProps: r } = Or(l), u = W("tr");
  return /* @__PURE__ */ k.createElement(u, {
    ...o,
    ref: e
  }, /* @__PURE__ */ k.createElement(Ee, {
    values: [
      [
        it,
        {
          slots: {
            selection: r
          }
        }
      ]
    ]
  }, /* @__PURE__ */ k.createElement(n, {
    collection: l.collection,
    parent: t
  })));
}
class $n extends Fe {
}
$n.type = "column";
const $u = /* @__PURE__ */ dt($n, (t, e, l) => {
  var i, n;
  let o = oe(e), r = f.useContext(J), { isVirtualized: u } = f.useContext(Z), { columnHeaderProps: s } = Kr({
    node: l,
    isVirtualized: u
  }, r, o), { isFocused: a, isFocusVisible: d, focusProps: c } = ne(), h = f.useContext(Ne), p = !1;
  if (h) p = h.resizingColumn === l.key;
  else if (process.env.NODE_ENV !== "production")
    for (let x in [
      "width",
      "defaultWidth",
      "minWidth",
      "maxWidth"
    ]) x in l.props && console.warn(`The ${x} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
  let { hoverProps: v, isHovered: b } = ge({
    isDisabled: !t.allowsSorting
  }), g = X({
    ...t,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-Column",
    values: {
      isHovered: b,
      isFocused: a,
      isFocusVisible: d,
      allowsSorting: l.props.allowsSorting,
      sortDirection: ((i = r.sortDescriptor) === null || i === void 0 ? void 0 : i.column) === l.key ? r.sortDescriptor.direction : void 0,
      isResizing: p,
      startResize: () => {
        if (h)
          h.startResize(l.key), r.setKeyboardNavigationDisabled(!0);
        else throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
      },
      sort: (x) => {
        r.sort(l.key, x);
      }
    }
  }), m = g.style;
  h && (m = {
    ...m,
    width: h.getColumnWidth(l.key)
  });
  let C = W("th"), $ = U(t, {
    global: !0
  });
  return delete $.id, /* @__PURE__ */ k.createElement(C, {
    ...V($, s, c, v),
    ...g,
    style: m,
    ref: o,
    "data-hovered": b || void 0,
    "data-focused": a || void 0,
    "data-focus-visible": d || void 0,
    "data-resizing": p || void 0,
    "data-allows-sorting": l.props.allowsSorting || void 0,
    "data-sort-direction": ((n = r.sortDescriptor) === null || n === void 0 ? void 0 : n.column) === l.key ? r.sortDescriptor.direction : void 0
  }, /* @__PURE__ */ k.createElement(Ee, {
    values: [
      [
        xn,
        {
          column: l,
          triggerRef: o
        }
      ],
      [
        Z,
        al
      ]
    ]
  }, g.children));
}), xn = /* @__PURE__ */ f.createContext(null), xu = /* @__PURE__ */ f.forwardRef(function(e, l) {
  let i = f.useContext(Ne);
  if (!i) throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  let n = te(hu(mt), "react-aria-components"), { onResizeStart: o, onResize: r, onResizeEnd: u } = f.useContext(bt), { column: s, triggerRef: a } = f.useContext(xn), d = f.useRef(null), { resizerProps: c, inputProps: h, isResizing: p } = Ur({
    column: s,
    "aria-label": e["aria-label"] || n.format("tableResizer"),
    onResizeStart: o,
    onResize: r,
    onResizeEnd: u,
    triggerRef: a
  }, i, d), { focusProps: v, isFocused: b, isFocusVisible: g } = ne(), { hoverProps: m, isHovered: C } = ge(e), $ = i.getColumnMinWidth(s.key) >= i.getColumnWidth(s.key), x = i.getColumnMaxWidth(s.key) <= i.getColumnWidth(s.key), { direction: w } = ee(), D = "both";
  $ ? D = w === "rtl" ? "right" : "left" : x ? D = w === "rtl" ? "left" : "right" : D = "both";
  let S = oe(l), [R, B] = f.useState("");
  f.useEffect(() => {
    if (!S.current) return;
    let F = window.getComputedStyle(S.current);
    B(F.cursor);
  }, [
    S,
    D
  ]);
  let z = X({
    ...e,
    defaultClassName: "react-aria-ColumnResizer",
    values: {
      isFocused: b,
      isFocusVisible: g,
      isResizing: p,
      isHovered: C,
      resizableDirection: D
    }
  }), [K, N] = f.useState(!1), E = (F) => {
    F.pointerType === "mouse" && N(!0);
  };
  !p && K && N(!1);
  let A = U(e, {
    global: !0
  });
  return /* @__PURE__ */ k.createElement("div", {
    ref: S,
    role: "presentation",
    ...V(A, z, c, {
      onPointerDown: E
    }, m),
    "data-hovered": C || void 0,
    "data-focused": b || void 0,
    "data-focus-visible": g || void 0,
    "data-resizing": p || void 0,
    "data-resizable-direction": D
  }, z.children, /* @__PURE__ */ k.createElement("input", {
    ref: d,
    ...V(h, v)
  }), p && K && /* @__PURE__ */ po.createPortal(/* @__PURE__ */ k.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      cursor: R
    }
  }), document.body));
});
class $t extends so {
}
$t.type = "tablebody";
const wu = /* @__PURE__ */ ct($t, (t, e) => {
  let l = f.useContext(J), { isVirtualized: i } = f.useContext(Z), n = l.collection, { CollectionBranch: o } = f.useContext(Z), { dragAndDropHooks: r, dropState: u } = f.useContext(be), s = !!(r != null && r.useDroppableCollectionState) && !(u != null && u.isDisabled);
  var a;
  let d = s && !!u && ((a = u.isDropTarget({
    type: "root"
  })) !== null && a !== void 0 ? a : !1), c = n.size === 0, h = {
    isDropTarget: d,
    isEmpty: c
  }, p = X({
    ...t,
    id: void 0,
    children: void 0,
    defaultClassName: "react-aria-TableBody",
    values: h
  }), v, b = W("tr"), g = W("td"), m = n.columnCount;
  if (c && t.renderEmptyState && l) {
    let w = {}, D = {}, S = {};
    i ? (D["aria-colspan"] = m, S = {
      display: "contents"
    }) : D.colSpan = m, v = /* @__PURE__ */ k.createElement(b, {
      role: "row",
      ...w,
      style: S
    }, /* @__PURE__ */ k.createElement(g, {
      role: "rowheader",
      ...D,
      style: S
    }, t.renderEmptyState(h)));
  }
  let { rowGroupProps: C } = Ii(), $ = W("tbody"), x = U(t, {
    global: !0
  });
  return /* @__PURE__ */ k.createElement($, {
    ...V(x, p, C),
    ref: e,
    "data-empty": c || void 0
  }, s && /* @__PURE__ */ k.createElement(zu, null), /* @__PURE__ */ k.createElement(o, {
    collection: n,
    parent: n.body,
    renderDropIndicator: tr(r, u)
  }), v);
});
class wn extends Fe {
  filter(e, l, i) {
    let n = e.getChildren(this.key);
    for (let o of n) if (i(o.textValue, o)) {
      let r = this.clone();
      return l.addDescendants(r, e), r;
    }
    return null;
  }
}
wn.type = "item";
const Cu = /* @__PURE__ */ ct(wn, (t, e, l) => {
  let i = oe(e), n = f.useContext(J), { dragAndDropHooks: o, dragState: r, dropState: u } = f.useContext(be), { isVirtualized: s, CollectionBranch: a } = f.useContext(Z), { rowProps: d, ...c } = Vr({
    node: l,
    shouldSelectOnPressUp: !!r,
    isVirtualized: s
  }, n, i), { isFocused: h, isFocusVisible: p, focusProps: v } = ne(), { isFocusVisible: b, focusProps: g } = ne({
    within: !0
  }), { hoverProps: m, isHovered: C } = ge({
    isDisabled: !c.allowsSelection && !c.hasAction,
    onHoverStart: t.onHoverStart,
    onHoverChange: t.onHoverChange,
    onHoverEnd: t.onHoverEnd
  }), { checkboxProps: $ } = Lr({
    key: l.key
  }, n), x;
  r && o && (x = o.useDraggableItem({
    key: l.key,
    hasDragButton: !0
  }, r));
  let w, D = f.useRef(null), { visuallyHiddenProps: S } = De();
  u && o && (w = o.useDropIndicator({
    target: {
      type: "item",
      key: l.key,
      dropPosition: "on"
    }
  }, u, D));
  let R = f.useRef(null);
  f.useEffect(() => {
    r && !R.current && process.env.NODE_ENV !== "production" && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []);
  let B = r && r.isDragging(l.key), { children: z, ...K } = t, N = X({
    ...K,
    id: void 0,
    defaultClassName: "react-aria-Row",
    values: {
      ...c,
      isHovered: C,
      isFocused: h,
      isFocusVisible: p,
      selectionMode: n.selectionManager.selectionMode,
      selectionBehavior: n.selectionManager.selectionBehavior,
      isDragging: B,
      isDropTarget: w == null ? void 0 : w.isDropTarget,
      isFocusVisibleWithin: b,
      id: l.key
    }
  }), E = W("tr"), A = W("td"), F = U(t, {
    global: !0
  });
  return delete F.id, delete F.onClick, /* @__PURE__ */ k.createElement(k.Fragment, null, w && !w.isHidden && /* @__PURE__ */ k.createElement(E, {
    role: "row",
    style: {
      height: 0
    }
  }, /* @__PURE__ */ k.createElement(A, {
    role: "gridcell",
    colSpan: n.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ k.createElement("div", {
    role: "button",
    ...S,
    ...w.dropIndicatorProps,
    ref: D
  }))), /* @__PURE__ */ k.createElement(E, {
    ...V(F, N, d, v, m, x == null ? void 0 : x.dragProps, g),
    ref: i,
    "data-disabled": c.isDisabled || void 0,
    "data-selected": c.isSelected || void 0,
    "data-hovered": C || void 0,
    "data-focused": c.isFocused || void 0,
    "data-focus-visible": p || void 0,
    "data-pressed": c.isPressed || void 0,
    "data-dragging": B || void 0,
    "data-drop-target": (w == null ? void 0 : w.isDropTarget) || void 0,
    "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode,
    "data-focus-visible-within": b || void 0
  }, /* @__PURE__ */ k.createElement(Ee, {
    values: [
      [
        it,
        {
          slots: {
            [Rt]: {},
            selection: $
          }
        }
      ],
      [
        ut,
        {
          slots: {
            [Rt]: {},
            drag: {
              ...x == null ? void 0 : x.dragButtonProps,
              ref: R,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ],
      [
        ir,
        {
          isSelected: c.isSelected
        }
      ]
    ]
  }, /* @__PURE__ */ k.createElement(a, {
    collection: n.collection,
    parent: l
  }))));
}, (t) => {
  if (t.id == null && typeof t.children == "function") throw new Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
  let e = [
    t.value
  ].concat(t.dependencies);
  return /* @__PURE__ */ k.createElement(ze, {
    dependencies: e,
    items: t.columns,
    idScope: t.id
  }, t.children);
});
class Cn extends Fe {
}
Cn.type = "cell";
const ku = /* @__PURE__ */ dt(Cn, (t, e, l) => {
  let i = oe(e), n = f.useContext(J), { dragState: o } = f.useContext(be), { isVirtualized: r } = f.useContext(Z);
  l.column = n.collection.columns[l.index];
  let { gridCellProps: u, isPressed: s } = Hr({
    node: l,
    shouldSelectOnPressUp: !!o,
    isVirtualized: r
  }, n, i), { isFocused: a, isFocusVisible: d, focusProps: c } = ne(), { hoverProps: h, isHovered: p } = ge({}), v = X({
    ...t,
    id: void 0,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: a,
      isFocusVisible: d,
      isPressed: s,
      isHovered: p,
      id: l.key
    }
  }), b = W("td"), g = U(t, {
    global: !0
  });
  return delete g.id, /* @__PURE__ */ k.createElement(b, {
    ...V(g, v, u, c, h),
    ref: i,
    "data-focused": a || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": s || void 0
  }, /* @__PURE__ */ k.createElement(Z.Provider, {
    value: al
  }, v.children));
});
function Du(t, e) {
  e = oe(e);
  let { dragAndDropHooks: l, dropState: i } = f.useContext(be), n = f.useRef(null), { dropIndicatorProps: o, isHidden: r, isDropTarget: u } = l.useDropIndicator(t, i, n);
  return r ? null : /* @__PURE__ */ k.createElement(Eu, {
    ...t,
    dropIndicatorProps: o,
    isDropTarget: u,
    buttonRef: n,
    ref: e
  });
}
function Su(t, e) {
  let { dropIndicatorProps: l, isDropTarget: i, buttonRef: n, ...o } = t, r = f.useContext(J), { visuallyHiddenProps: u } = De(), s = X({
    ...o,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: i
    }
  }), a = W("tr"), d = W("td");
  return /* @__PURE__ */ k.createElement(a, {
    ...U(t, {
      global: !0
    }),
    ...s,
    role: "row",
    ref: e,
    "data-drop-target": i || void 0
  }, /* @__PURE__ */ k.createElement(d, {
    role: "gridcell",
    colSpan: r.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ k.createElement("div", {
    ...u,
    role: "button",
    ...l,
    ref: n
  }), s.children));
}
const Eu = /* @__PURE__ */ f.forwardRef(Su);
function zu() {
  let t = f.useContext(J), { dragAndDropHooks: e, dropState: l } = f.useContext(be), i = f.useRef(null), { dropIndicatorProps: n } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, l, i), o = l.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: r } = De(), u = W("tr"), s = W("td");
  return !o && n["aria-hidden"] ? null : /* @__PURE__ */ k.createElement(u, {
    role: "row",
    "aria-hidden": n["aria-hidden"],
    style: {
      height: 0
    }
  }, /* @__PURE__ */ k.createElement(s, {
    role: "gridcell",
    colSpan: t.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ k.createElement("div", {
    role: "button",
    ...r,
    ...n,
    ref: i
  })));
}
dt(ao, function(e, l, i) {
  let n = f.useContext(J), { isVirtualized: o } = f.useContext(Z), { isLoading: r, onLoadMore: u, scrollOffset: s, ...a } = e, d = n.collection.columns.length, c = f.useRef(null), h = f.useMemo(() => ({
    onLoadMore: u,
    collection: n == null ? void 0 : n.collection,
    sentinelRef: c,
    scrollOffset: s
  }), [
    u,
    s,
    n == null ? void 0 : n.collection
  ]);
  Go(h, c);
  let p = X({
    ...a,
    id: void 0,
    children: i.rendered,
    defaultClassName: "react-aria-TableLoadingIndicator",
    values: null
  }), v = W("tr"), b = W("td"), g = {}, m = {}, C = {};
  return o ? (m["aria-colspan"] = d, C = {
    display: "contents"
  }) : m.colSpan = d, /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(v, {
    style: {
      height: 0
    },
    inert: Qo(!0)
  }, /* @__PURE__ */ k.createElement(b, {
    style: {
      padding: 0,
      border: 0
    }
  }, /* @__PURE__ */ k.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: c,
    style: {
      position: "relative",
      height: 1,
      width: 1
    }
  }))), r && p.children && /* @__PURE__ */ k.createElement(v, {
    ...V(U(e, {
      global: !0
    }), g),
    ...p,
    role: "row",
    ref: l
  }, /* @__PURE__ */ k.createElement(b, {
    role: "rowheader",
    ...m,
    style: C
  }, p.children)));
});
class Bu {
  /**
  * Returns whether the layout should invalidate in response to
  * visible rectangle changes. By default, it only invalidates
  * when the virtualizer's size changes. Return true always
  * to make the layout invalidate while scrolling (e.g. sticky headers).
  */
  shouldInvalidate(e, l) {
    return e.width !== l.width || e.height !== l.height;
  }
  /**
  * Returns whether the layout should invalidate when the layout options change.
  * By default it invalidates when the object identity changes. Override this
  * method to optimize layout updates based on specific option changes.
  */
  shouldInvalidateLayoutOptions(e, l) {
    return e !== l;
  }
  /**
  * This method allows the layout to perform any pre-computation
  * it needs to in order to prepare LayoutInfos for retrieval.
  * Called by the virtualizer before `getVisibleLayoutInfos`
  * or `getLayoutInfo` are called.
  */
  update(e) {
  }
  /** @private */
  getItemRect(e) {
    var l, i;
    return (i = (l = this.getLayoutInfo(e)) === null || l === void 0 ? void 0 : l.rect) !== null && i !== void 0 ? i : null;
  }
  /** @private */
  getVisibleRect() {
    return this.virtualizer.visibleRect;
  }
  constructor() {
    this.virtualizer = null;
  }
}
class Y {
  /**
  * Returns a copy of the LayoutInfo.
  */
  copy() {
    let e = new Y(this.type, this.key, this.rect.copy());
    return e.estimatedSize = this.estimatedSize, e.opacity = this.opacity, e.transform = this.transform, e.parentKey = this.parentKey, e.content = this.content, e.isSticky = this.isSticky, e.zIndex = this.zIndex, e.allowOverflow = this.allowOverflow, e;
  }
  /**
  * @param type The type of element represented by this LayoutInfo. Should match the `type` of the corresponding collection node.
  * @param key A unique key for this LayoutInfo. Should match the `key` of the corresponding collection node.
  * @param rect The rectangle describing the size and position of this element.
  */
  constructor(e, l, i) {
    this.type = e, this.key = l, this.parentKey = null, this.content = null, this.rect = i, this.estimatedSize = !1, this.isSticky = !1, this.opacity = 1, this.transform = null, this.zIndex = 0, this.allowOverflow = !1;
  }
}
class re {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new re(this.x, this.y);
  }
  /**
  * Checks if two points are equal.
  */
  equals(e) {
    return this.x === e.x && this.y === e.y;
  }
  /**
  * Returns true if this point is the origin.
  */
  isOrigin() {
    return this.x === 0 && this.y === 0;
  }
  constructor(e = 0, l = 0) {
    this.x = e, this.y = l;
  }
}
class M {
  /**
  * The maximum x-coordinate in the rectangle.
  */
  get maxX() {
    return this.x + this.width;
  }
  /**
  * The maximum y-coordinate in the rectangle.
  */
  get maxY() {
    return this.y + this.height;
  }
  /**
  * The area of the rectangle.
  */
  get area() {
    return this.width * this.height;
  }
  /**
  * The top left corner of the rectangle.
  */
  get topLeft() {
    return new re(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new re(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new re(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new re(this.maxX, this.maxY);
  }
  /**
  * Returns whether this rectangle intersects another rectangle.
  * @param rect - The rectangle to check.
  */
  intersects(e) {
    return (process.env.NODE_ENV === "test" && !process.env.VIRT_ON || this.area > 0 && e.area > 0) && this.x <= e.x + e.width && e.x <= this.x + this.width && this.y <= e.y + e.height && e.y <= this.y + this.height;
  }
  /**
  * Returns whether this rectangle fully contains another rectangle.
  * @param rect - The rectangle to check.
  */
  containsRect(e) {
    return this.x <= e.x && this.y <= e.y && this.maxX >= e.maxX && this.maxY >= e.maxY;
  }
  /**
  * Returns whether the rectangle contains the given point.
  * @param point - The point to check.
  */
  containsPoint(e) {
    return this.x <= e.x && this.y <= e.y && this.maxX >= e.x && this.maxY >= e.y;
  }
  /**
  * Returns the first corner of this rectangle (from top to bottom, left to right)
  * that is contained in the given rectangle, or null of the rectangles do not intersect.
  * @param rect - The rectangle to check.
  */
  getCornerInRect(e) {
    for (let l of [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ])
      if (e.containsPoint(this[l])) return l;
    return null;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.width === this.width && e.height === this.height;
  }
  pointEquals(e) {
    return this.x === e.x && this.y === e.y;
  }
  sizeEquals(e) {
    return this.width === e.width && this.height === e.height;
  }
  /**
  * Returns the union of this Rect and another.
  */
  union(e) {
    let l = Math.min(this.x, e.x), i = Math.min(this.y, e.y), n = Math.max(this.maxX, e.maxX) - l, o = Math.max(this.maxY, e.maxY) - i;
    return new M(l, i, n, o);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(e) {
    if (!this.intersects(e)) return new M(0, 0, 0, 0);
    let l = Math.max(this.x, e.x), i = Math.max(this.y, e.y);
    return new M(l, i, Math.min(this.maxX, e.maxX) - l, Math.min(this.maxY, e.maxY) - i);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new M(this.x, this.y, this.width, this.height);
  }
  constructor(e = 0, l = 0, i = 0, n = 0) {
    this.x = e, this.y = l, this.width = i, this.height = n;
  }
}
class ae {
  /**
  * Returns a copy of this size.
  */
  copy() {
    return new ae(this.width, this.height);
  }
  /**
  * Returns whether this size is equal to another one.
  */
  equals(e) {
    return this.width === e.width && this.height === e.height;
  }
  /**
  * The total area of the Size.
  */
  get area() {
    return this.width * this.height;
  }
  constructor(e = 0, l = 0) {
    this.width = Math.max(e, 0), this.height = Math.max(l, 0);
  }
}
let Iu = 0;
class kn {
  /**
  * Prepares the view for reuse. Called just before the view is removed from the DOM.
  */
  prepareForReuse() {
    this.content = null, this.rendered = null, this.layoutInfo = null;
  }
  getReusableView(e) {
    let l = this.reusableViews.get(e);
    return l && l.length > 0 ? l.shift() : new Ru(this.virtualizer, this, e);
  }
  reuseChild(e) {
    e.prepareForReuse();
    let l = this.reusableViews.get(e.viewType);
    l || (l = [], this.reusableViews.set(e.viewType, l)), l.push(e);
  }
  constructor(e, l) {
    this.virtualizer = e, this.key = ++Iu, this.viewType = l, this.children = /* @__PURE__ */ new Set(), this.reusableViews = /* @__PURE__ */ new Map(), this.layoutInfo = null, this.content = null, this.rendered = null;
  }
}
class Pu extends kn {
  constructor(e) {
    super(e, "root");
  }
}
class Ru extends kn {
  constructor(e, l, i) {
    super(e, i), this.parent = l;
  }
}
function Au(t, e) {
  if (t === e) return !0;
  if (t.size !== e.size) return !1;
  for (let l of t)
    if (!e.has(l)) return !1;
  return !0;
}
class Mu {
  setVisibleRect(e) {
    let l = performance.now() - this.startTime;
    l < 500 && (e.x !== this.visibleRect.x && l > 0 && (this.velocity.x = (e.x - this.visibleRect.x) / l), e.y !== this.visibleRect.y && l > 0 && (this.velocity.y = (e.y - this.visibleRect.y) / l)), this.startTime = performance.now(), this.visibleRect = e;
  }
  getOverscannedRect() {
    let e = this.visibleRect.copy(), l = this.visibleRect.height / 3;
    if (e.height += l, this.velocity.y < 0 && (e.y -= l), this.velocity.x !== 0) {
      let i = this.visibleRect.width / 3;
      e.width += i, this.velocity.x < 0 && (e.x -= i);
    }
    return e;
  }
  constructor() {
    this.startTime = 0, this.velocity = new re(0, 0), this.visibleRect = new M();
  }
}
class Tu {
  /** Returns whether the given key, or an ancestor, is persisted. */
  isPersistedKey(e) {
    if (this.persistedKeys.has(e)) return !0;
    for (let l of this.persistedKeys) for (; l != null; ) {
      let i = this.layout.getLayoutInfo(l);
      if (!i || i.parentKey == null) break;
      if (l = i.parentKey, l === e) return !0;
    }
    return !1;
  }
  getParentView(e) {
    return e.parentKey != null ? this._visibleViews.get(e.parentKey) : this._rootView;
  }
  getReusableView(e) {
    let i = this.getParentView(e).getReusableView(e.type);
    return i.layoutInfo = e, this._renderView(i), i;
  }
  _renderView(e) {
    if (e.layoutInfo) {
      let { type: l, key: i, content: n } = e.layoutInfo;
      e.content = n || this.collection.getItem(i), e.rendered = this._renderContent(l, e.content);
    }
  }
  _renderContent(e, l) {
    let i = l != null ? this._renderedContent.get(l) : null;
    if (i != null) return i;
    let n = this.delegate.renderView(e, l);
    return l && this._renderedContent.set(l, n), n;
  }
  /**
  * Returns the key for the item view currently at the given point.
  */
  keyAtPoint(e) {
    let l = new M(e.x, e.y, 1, 1), i = l.area === 0 ? [] : this.layout.getVisibleLayoutInfos(l);
    for (let n of i)
      if (n.rect.intersects(l)) return n.key;
    return null;
  }
  relayout(e = {}) {
    this.layout.update(e), this.contentSize = this.layout.getContentSize();
    let l = this.visibleRect, i = e.contentChanged ? 0 : l.x, n = e.contentChanged ? 0 : l.y;
    if (i = Math.max(0, Math.min(this.contentSize.width - l.width, i)), n = Math.max(0, Math.min(this.contentSize.height - l.height, n)), i !== l.x || n !== l.y) {
      let o = new M(i, n, l.width, l.height);
      this.delegate.setVisibleRect(o);
    } else this.updateSubviews();
  }
  getVisibleLayoutInfos() {
    let e = process.env.NODE_ENV === "test" && !process.env.VIRT_ON, l = e && typeof HTMLElement < "u" && Object.getOwnPropertyNames(HTMLElement.prototype).includes("clientWidth"), i = e && typeof HTMLElement < "u" && Object.getOwnPropertyNames(HTMLElement.prototype).includes("clientHeight"), n;
    e && !(l && i) ? n = new M(0, 0, this.contentSize.width, this.contentSize.height) : n = this._overscanManager.getOverscannedRect();
    let o = this.layout.getVisibleLayoutInfos(n), r = /* @__PURE__ */ new Map();
    for (let u of o) r.set(u.key, u);
    return r;
  }
  updateSubviews() {
    let e = this.getVisibleLayoutInfos(), l = /* @__PURE__ */ new Set();
    for (let [i, n] of this._visibleViews) {
      let o = e.get(i);
      (!o || n.parent !== this.getParentView(o)) && (this._visibleViews.delete(i), n.parent.reuseChild(n), l.add(n));
    }
    for (let [i, n] of e) {
      let o = this._visibleViews.get(i);
      if (!o)
        o = this.getReusableView(n), o.parent.children.add(o), this._visibleViews.set(i, o), l.delete(o);
      else {
        o.layoutInfo = n;
        let r = this.collection.getItem(n.key);
        o.content !== r && (o.content != null && this._renderedContent.delete(o.content), this._renderView(o));
      }
    }
    for (let i of l)
      i.parent.children.delete(i), i.parent.reusableViews.clear();
    if (!this._isScrolling)
      for (let i of e.keys()) {
        let n = this._visibleViews.get(i);
        n.parent.children.delete(n), n.parent.children.add(n);
      }
  }
  /** Performs layout and updates visible views as needed. */
  render(e) {
    let l = this, i = !1, n = !1, o = !1, r = !1, u = !1, s = !1;
    return e.collection !== this.collection && (l.collection = e.collection, i = !0), (e.layout !== this.layout || this.layout.virtualizer !== this) && (this.layout && (this.layout.virtualizer = null), e.layout.virtualizer = this, l.layout = e.layout, i = !0), e.persistedKeys && !Au(e.persistedKeys, this.persistedKeys) && (l.persistedKeys = e.persistedKeys, s = !0), this.visibleRect.equals(e.visibleRect) || (this._overscanManager.setVisibleRect(e.visibleRect), this.layout.shouldInvalidate(e.visibleRect, this.visibleRect) ? (n = !e.visibleRect.pointEquals(this.visibleRect), o = !e.visibleRect.sizeEquals(this.visibleRect), i = !0) : s = !0, l.visibleRect = e.visibleRect), e.invalidationContext !== this._invalidationContext && (e.invalidationContext && (o || (o = e.invalidationContext.sizeChanged || !1), n || (n = e.invalidationContext.offsetChanged || !1), r || (r = e.invalidationContext.itemSizeChanged || !1), u || (u = e.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && e.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(e.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions)), i || (i = r || o || n || u)), this._invalidationContext = e.invalidationContext), e.isScrolling !== this._isScrolling && (this._isScrolling = e.isScrolling, e.isScrolling || (s = !0)), i ? this.relayout({
      offsetChanged: n,
      sizeChanged: o,
      itemSizeChanged: r,
      layoutOptionsChanged: u,
      layoutOptions: this._invalidationContext.layoutOptions
    }) : s && this.updateSubviews(), Array.from(this._rootView.children);
  }
  getVisibleView(e) {
    return this._visibleViews.get(e);
  }
  invalidate(e) {
    this.delegate.invalidate(e);
  }
  updateItemSize(e, l) {
    if (!this.layout.updateItemSize) return;
    this.layout.updateItemSize(e, l) && this.invalidate({
      itemSizeChanged: !0
    });
  }
  constructor(e) {
    this.delegate = e.delegate, this.collection = e.collection, this.layout = e.layout, this.contentSize = new ae(), this.visibleRect = new M(), this.persistedKeys = /* @__PURE__ */ new Set(), this._visibleViews = /* @__PURE__ */ new Map(), this._renderedContent = /* @__PURE__ */ new WeakMap(), this._rootView = new Pu(this), this._isScrolling = !1, this._invalidationContext = {}, this._overscanManager = new Mu();
  }
}
const Fu = typeof document < "u" ? k.useLayoutEffect : () => {
};
function Ku(t) {
  let [e, l] = f.useState(new M(0, 0, 0, 0)), [i, n] = f.useState(!1), [o, r] = f.useState({}), u = f.useRef(!1), [s] = f.useState(() => new Tu({
    collection: t.collection,
    layout: t.layout,
    delegate: {
      setVisibleRect(b) {
        l(b), u.current = !0;
      },
      // TODO: should changing these invalidate the entire cache?
      renderView: t.renderView,
      invalidate: r
    }
  }));
  Fu(() => {
    u.current && (u.current = !1, t.onVisibleRectChange(e));
  });
  let a = f.useMemo(() => t.layoutOptions != null ? {
    ...o,
    layoutOptions: t.layoutOptions
  } : o, [
    o,
    t.layoutOptions
  ]), d = s.render({
    layout: t.layout,
    collection: t.collection,
    persistedKeys: t.persistedKeys,
    layoutOptions: t.layoutOptions,
    visibleRect: e,
    invalidationContext: a,
    isScrolling: i
  }), c = s.contentSize, h = f.useCallback(() => {
    n(!0);
  }, []), p = f.useCallback(() => {
    n(!1);
  }, []);
  return f.useMemo(() => ({
    virtualizer: s,
    visibleViews: d,
    setVisibleRect: l,
    contentSize: c,
    isScrolling: i,
    startScrolling: h,
    endScrolling: p
  }), [
    s,
    d,
    l,
    c,
    i,
    h,
    p
  ]);
}
const fe = 48;
class Vu extends Bu {
  // Backward compatibility for subclassing.
  get collection() {
    return this.virtualizer.collection;
  }
  getLayoutInfo(e) {
    var l;
    return this.ensureLayoutInfo(e), ((l = this.layoutNodes.get(e)) === null || l === void 0 ? void 0 : l.layoutInfo) || null;
  }
  getVisibleLayoutInfos(e) {
    if (e.height > 1) {
      var l, i;
      let r = ((i = (l = this.rowHeight) !== null && l !== void 0 ? l : this.estimatedRowHeight) !== null && i !== void 0 ? i : fe) + this.gap;
      e.y = Math.floor(e.y / r) * r, e.height = Math.ceil(e.height / r) * r;
    }
    this.layoutIfNeeded(e);
    let n = [], o = (r) => {
      for (let u of r) this.isVisible(u, e) && (n.push(u.layoutInfo), u.children && o(u.children));
    };
    return o(this.rootNodes), n;
  }
  layoutIfNeeded(e) {
    if (this.lastCollection) {
      this.requestedRect.containsRect(e) || (this.requestedRect = this.requestedRect.union(e), this.rootNodes = this.buildCollection());
      for (let l of this.virtualizer.persistedKeys)
        if (this.ensureLayoutInfo(l)) return;
    }
  }
  ensureLayoutInfo(e) {
    return !this.layoutNodes.has(e) && this.requestedRect.area < this.contentSize.area && this.lastCollection ? (this.requestedRect = new M(0, 0, 1 / 0, 1 / 0), this.rootNodes = this.buildCollection(), this.requestedRect = new M(0, 0, this.contentSize.width, this.contentSize.height), !0) : !1;
  }
  isVisible(e, l) {
    return e.layoutInfo.rect.intersects(l) || e.layoutInfo.isSticky || e.layoutInfo.type === "header" || e.layoutInfo.type === "loader" || this.virtualizer.isPersistedKey(e.layoutInfo.key);
  }
  shouldInvalidateEverything(e) {
    let l = e.layoutOptions;
    var i, n, o, r, u;
    return e.sizeChanged || this.rowHeight !== ((i = l == null ? void 0 : l.rowHeight) !== null && i !== void 0 ? i : this.rowHeight) || this.headingHeight !== ((n = l == null ? void 0 : l.headingHeight) !== null && n !== void 0 ? n : this.headingHeight) || this.loaderHeight !== ((o = l == null ? void 0 : l.loaderHeight) !== null && o !== void 0 ? o : this.loaderHeight) || this.gap !== ((r = l == null ? void 0 : l.gap) !== null && r !== void 0 ? r : this.gap) || this.padding !== ((u = l == null ? void 0 : l.padding) !== null && u !== void 0 ? u : this.padding);
  }
  shouldInvalidateLayoutOptions(e, l) {
    return e.rowHeight !== l.rowHeight || e.estimatedRowHeight !== l.estimatedRowHeight || e.headingHeight !== l.headingHeight || e.estimatedHeadingHeight !== l.estimatedHeadingHeight || e.loaderHeight !== l.loaderHeight || e.dropIndicatorThickness !== l.dropIndicatorThickness || e.gap !== l.gap || e.padding !== l.padding;
  }
  update(e) {
    let l = this.virtualizer.collection;
    this.invalidateEverything = this.shouldInvalidateEverything(e), this.invalidateEverything && (this.requestedRect = this.virtualizer.visibleRect.copy(), this.layoutNodes.clear());
    let i = e.layoutOptions;
    var n;
    this.rowHeight = (n = i == null ? void 0 : i.rowHeight) !== null && n !== void 0 ? n : this.rowHeight;
    var o;
    this.estimatedRowHeight = (o = i == null ? void 0 : i.estimatedRowHeight) !== null && o !== void 0 ? o : this.estimatedRowHeight;
    var r;
    this.headingHeight = (r = i == null ? void 0 : i.headingHeight) !== null && r !== void 0 ? r : this.headingHeight;
    var u;
    this.estimatedHeadingHeight = (u = i == null ? void 0 : i.estimatedHeadingHeight) !== null && u !== void 0 ? u : this.estimatedHeadingHeight;
    var s;
    this.loaderHeight = (s = i == null ? void 0 : i.loaderHeight) !== null && s !== void 0 ? s : this.loaderHeight;
    var a;
    this.dropIndicatorThickness = (a = i == null ? void 0 : i.dropIndicatorThickness) !== null && a !== void 0 ? a : this.dropIndicatorThickness;
    var d;
    this.gap = (d = i == null ? void 0 : i.gap) !== null && d !== void 0 ? d : this.gap;
    var c;
    if (this.padding = (c = i == null ? void 0 : i.padding) !== null && c !== void 0 ? c : this.padding, this.rootNodes = this.buildCollection(), this.lastCollection && l !== this.lastCollection)
      for (let h of this.lastCollection.getKeys()) l.getItem(h) || this.layoutNodes.get(h) && this.layoutNodes.delete(h);
    this.lastCollection = l, this.invalidateEverything = !1, this.validRect = this.requestedRect.copy();
  }
  buildCollection(e = this.padding) {
    let l = this.virtualizer.collection, i = [
      ...l
    ], n = i.filter((a) => a.type === "loader"), o = [], r = (l == null ? void 0 : l.size) === 0;
    r && (e = 0);
    for (let a of i) {
      var u, s;
      let d = ((s = (u = this.rowHeight) !== null && u !== void 0 ? u : this.estimatedRowHeight) !== null && s !== void 0 ? s : fe) + this.gap;
      if (a.type === "item" && e + d < this.requestedRect.y && !this.isValid(a, e)) {
        e += d;
        continue;
      }
      let c = this.buildChild(a, this.padding, e, null);
      if (e = c.layoutInfo.rect.maxY + this.gap, o.push(c), a.type === "loader") {
        let h = n.indexOf(a);
        n.splice(h, 1);
      }
      if ((a.type === "item" || a.type === "loader") && e > this.requestedRect.maxY) {
        let h = i.indexOf(a);
        for (let p of n) {
          let v = i.indexOf(p);
          e += (v - h - 1) * d;
          let b = this.buildChild(p, this.padding, e, null);
          o.push(b), e = b.layoutInfo.rect.maxY, h = v;
        }
        e += (i.length - h - 1) * d;
        break;
      }
    }
    return e -= this.gap, e += r ? 0 : this.padding, this.contentSize = new ae(this.virtualizer.visibleRect.width, e), o;
  }
  isValid(e, l) {
    let i = this.layoutNodes.get(e.key);
    return !this.invalidateEverything && !!i && i.node === e && l === i.layoutInfo.rect.y && i.layoutInfo.rect.intersects(this.validRect) && i.validRect.containsRect(i.layoutInfo.rect.intersection(this.requestedRect));
  }
  buildChild(e, l, i, n) {
    if (this.isValid(e, i)) return this.layoutNodes.get(e.key);
    let o = this.buildNode(e, l, i);
    return o.layoutInfo.parentKey = n ?? null, o.layoutInfo.allowOverflow = !0, this.layoutNodes.set(e.key, o), o;
  }
  buildNode(e, l, i) {
    switch (e.type) {
      case "section":
        return this.buildSection(e, l, i);
      case "item":
        return this.buildItem(e, l, i);
      case "header":
        return this.buildSectionHeader(e, l, i);
      case "loader":
        return this.buildLoader(e, l, i);
      case "separator":
        return this.buildItem(e, l, i);
      default:
        throw new Error("Unsupported node type: " + e.type);
    }
  }
  buildLoader(e, l, i) {
    let n = new M(l, i, this.padding, 0), o = new Y("loader", e.key, n);
    n.width = this.virtualizer.contentSize.width - this.padding - l;
    var r, u, s;
    return n.height = e.props.isLoading ? (s = (u = (r = this.loaderHeight) !== null && r !== void 0 ? r : this.rowHeight) !== null && u !== void 0 ? u : this.estimatedRowHeight) !== null && s !== void 0 ? s : fe : 0, {
      layoutInfo: o,
      validRect: n.intersection(this.requestedRect)
    };
  }
  buildSection(e, l, i) {
    let n = this.virtualizer.collection, o = this.virtualizer.visibleRect.width - this.padding, r = new M(l, i, o - l, 0), u = new Y(e.type, e.key, r), s = i, a = 0, d = [];
    for (let p of L(e, n)) {
      var c, h;
      let v = ((h = (c = this.rowHeight) !== null && c !== void 0 ? c : this.estimatedRowHeight) !== null && h !== void 0 ? h : fe) + this.gap;
      if (i + v < this.requestedRect.y && !this.isValid(e, i)) {
        i += v, a++;
        continue;
      }
      let b = this.buildChild(p, l, i, u.key);
      if (i = b.layoutInfo.rect.maxY + this.gap, d.push(b), i > this.requestedRect.maxY) {
        i += ([
          ...L(e, n)
        ].length - (d.length + a)) * v;
        break;
      }
    }
    return i -= this.gap, r.height = i - s, {
      layoutInfo: u,
      children: d,
      validRect: u.rect.intersection(this.requestedRect),
      node: e
    };
  }
  buildSectionHeader(e, l, i) {
    let n = this.virtualizer.visibleRect.width - this.padding, o = this.headingHeight, r = !1;
    if (o == null) {
      let a = this.layoutNodes.get(e.key), d = a == null ? void 0 : a.layoutInfo;
      if (d) {
        let c = this.virtualizer.collection.getItem(e.key), h = this.lastCollection ? this.lastCollection.getItem(e.key) : null;
        o = d.rect.height, r = n !== d.rect.width || c !== h || d.estimatedSize;
      } else
        o = e.rendered ? this.estimatedHeadingHeight : 0, r = !0;
    }
    o == null && (o = fe);
    let u = new M(l, i, n - l, o), s = new Y("header", e.key, u);
    return s.estimatedSize = r, {
      layoutInfo: s,
      children: [],
      validRect: s.rect.intersection(this.requestedRect),
      node: e
    };
  }
  buildItem(e, l, i) {
    let n = this.virtualizer.visibleRect.width - this.padding - l, o = this.rowHeight, r = !1;
    if (o == null) {
      let a = this.layoutNodes.get(e.key);
      a ? (o = a.layoutInfo.rect.height, r = n !== a.layoutInfo.rect.width || e !== a.node || a.layoutInfo.estimatedSize) : (o = this.estimatedRowHeight, r = !0);
    }
    o == null && (o = fe);
    let u = new M(l, i, n, o), s = new Y(e.type, e.key, u);
    return s.estimatedSize = r, {
      layoutInfo: s,
      children: [],
      validRect: s.rect,
      node: e
    };
  }
  updateItemSize(e, l) {
    let i = this.layoutNodes.get(e);
    if (!i) return !1;
    let n = this.virtualizer.collection, o = i.layoutInfo;
    if (o.estimatedSize = !1, o.rect.height !== l.height) {
      let r = o.copy();
      r.rect.height = l.height, i.layoutInfo = r, this.validRect.height = Math.min(this.validRect.height, o.rect.y - this.validRect.y), this.requestedRect.height += r.rect.height - o.rect.height, this.updateLayoutNode(e, o, r);
      let u = o.parentKey != null ? n.getItem(o.parentKey) : null;
      for (; u; )
        this.updateLayoutNode(u.key, o, r), u = u.parentKey != null ? n.getItem(u.parentKey) : null;
      return !0;
    }
    return !1;
  }
  updateLayoutNode(e, l, i) {
    let n = this.layoutNodes.get(e);
    n && (n.validRect = n.validRect.intersection(this.validRect), n.layoutInfo === l && (n.layoutInfo = i));
  }
  getContentSize() {
    return this.contentSize;
  }
  getDropTargetFromPoint(e, l, i) {
    e += this.virtualizer.visibleRect.x, l += this.virtualizer.visibleRect.y;
    let n = new M(e, Math.max(0, l - this.gap), 1, Math.max(1, this.gap * 2)), o = this.getVisibleLayoutInfos(n), r = null, u = 1 / 0;
    for (let c of o) {
      if (!c.rect.intersects(n)) continue;
      let h = Math.abs(c.rect.y - l), p = Math.abs(c.rect.maxY - l), v = Math.min(h, p);
      v < u && (u = v, r = c.key);
    }
    if (r == null || this.virtualizer.collection.size === 0) return {
      type: "root"
    };
    let s = this.getLayoutInfo(r);
    if (!s) return null;
    let a = s.rect, d = {
      type: "item",
      key: s.key,
      dropPosition: "on"
    };
    return i(d) ? l <= a.y + 10 && i({
      ...d,
      dropPosition: "before"
    }) ? d.dropPosition = "before" : l >= a.maxY - 10 && i({
      ...d,
      dropPosition: "after"
    }) && (d.dropPosition = "after") : l <= a.y + a.height / 2 && i({
      ...d,
      dropPosition: "before"
    }) ? d.dropPosition = "before" : i({
      ...d,
      dropPosition: "after"
    }) && (d.dropPosition = "after"), d;
  }
  getDropTargetLayoutInfo(e) {
    let l = this.getLayoutInfo(e.key), i;
    if (e.dropPosition === "before") i = new M(l.rect.x, Math.max(0, l.rect.y - this.dropIndicatorThickness / 2), l.rect.width, this.dropIndicatorThickness);
    else if (e.dropPosition === "after") {
      let o = this.collection.getItem(e.key);
      if (o) {
        var n;
        let r = (n = o.level) !== null && n !== void 0 ? n : 0, u = this.collection.getKeyAfter(e.key);
        for (; u != null; ) {
          let s = this.collection.getItem(u);
          if (!s || s.level <= r) break;
          l = this.getLayoutInfo(u) || l, u = this.collection.getKeyAfter(u);
        }
      }
      i = new M(l.rect.x, l.rect.maxY - this.dropIndicatorThickness / 2, l.rect.width, this.dropIndicatorThickness);
    } else i = l.rect;
    return new Y("dropIndicator", e.key + ":" + e.dropPosition, i);
  }
  /**
  * Creates a new ListLayout with options. See the list of properties below for a description
  * of the options that can be provided.
  */
  constructor(e = {}) {
    super();
    var l;
    this.rowHeight = (l = e.rowHeight) !== null && l !== void 0 ? l : null;
    var i;
    this.estimatedRowHeight = (i = e.estimatedRowHeight) !== null && i !== void 0 ? i : null;
    var n;
    this.headingHeight = (n = e.headingHeight) !== null && n !== void 0 ? n : null;
    var o;
    this.estimatedHeadingHeight = (o = e.estimatedHeadingHeight) !== null && o !== void 0 ? o : null;
    var r;
    this.loaderHeight = (r = e.loaderHeight) !== null && r !== void 0 ? r : null, this.dropIndicatorThickness = e.dropIndicatorThickness || 2, this.gap = e.gap || 0, this.padding = e.padding || 0, this.layoutNodes = /* @__PURE__ */ new Map(), this.rootNodes = [], this.lastCollection = null, this.invalidateEverything = !1, this.validRect = new M(), this.requestedRect = new M(), this.contentSize = new ae();
  }
}
const Ht = 48;
class Nu extends Vu {
  // Backward compatibility for subclassing.
  get collection() {
    return this.virtualizer.collection;
  }
  columnsChanged(e, l) {
    return !l || e.columns !== l.columns && e.columns.length !== l.columns.length || e.columns.some((i, n) => i.key !== l.columns[n].key || i.props.width !== l.columns[n].props.width || i.props.minWidth !== l.columns[n].props.minWidth || i.props.maxWidth !== l.columns[n].props.maxWidth);
  }
  shouldInvalidateLayoutOptions(e, l) {
    return e.columnWidths !== l.columnWidths || super.shouldInvalidateLayoutOptions(e, l);
  }
  update(e) {
    var l;
    let i = this.virtualizer.collection;
    if (!((l = e.layoutOptions) === null || l === void 0) && l.columnWidths) {
      for (const [n, o] of e.layoutOptions.columnWidths) if (this.columnWidths.get(n) !== o) {
        this.columnWidths = e.layoutOptions.columnWidths, e.sizeChanged = !0;
        break;
      }
    } else if (e.sizeChanged || this.columnsChanged(i, this.lastCollection)) {
      let n = new Ai({});
      this.columnWidths = n.buildColumnWidths(this.virtualizer.visibleRect.width - this.padding * 2, i, /* @__PURE__ */ new Map()), e.sizeChanged = !0;
    }
    super.update(e);
  }
  buildCollection() {
    var e;
    this.stickyColumnIndices = [];
    let l = this.virtualizer.collection;
    if (((e = l.head) === null || e === void 0 ? void 0 : e.key) === -1) return [];
    for (let o of l.columns)
      (this.isStickyColumn(o) || l.rowHeaderColumnKeys.has(o.key)) && this.stickyColumnIndices.push(o.index);
    let i = this.buildTableHeader();
    this.layoutNodes.set(i.layoutInfo.key, i);
    let n = this.buildBody(i.layoutInfo.rect.maxY + this.gap);
    return this.lastPersistedKeys = null, n.layoutInfo.rect.width = Math.max(i.layoutInfo.rect.width, n.layoutInfo.rect.width), this.contentSize = new ae(n.layoutInfo.rect.width + this.padding * 2, n.layoutInfo.rect.maxY + this.padding), [
      i,
      n
    ];
  }
  buildTableHeader() {
    var e;
    let l = this.virtualizer.collection, i = new M(this.padding, this.padding, 0, 0);
    var n;
    let o = new Y("header", (n = (e = l.head) === null || e === void 0 ? void 0 : e.key) !== null && n !== void 0 ? n : "header", i);
    o.isSticky = !0, o.zIndex = 1;
    let r = this.padding, u = 0, s = [];
    for (let a of l.headerRows) {
      let d = this.buildChild(a, this.padding, r, o.key);
      d.layoutInfo.parentKey = o.key, r = d.layoutInfo.rect.maxY, u = Math.max(u, d.layoutInfo.rect.width), d.index = s.length, s.push(d);
    }
    return i.width = u, i.height = r - this.padding, {
      layoutInfo: o,
      children: s,
      validRect: o.rect,
      node: l.head
    };
  }
  buildHeaderRow(e, l, i) {
    let n = new M(l, i, 0, 0), o = new Y("headerrow", e.key, n), r = 0, u = [];
    for (let s of L(e, this.virtualizer.collection)) {
      let a = this.buildChild(s, l, i, o.key);
      a.layoutInfo.parentKey = o.key, l = a.layoutInfo.rect.maxX, r = Math.max(r, a.layoutInfo.rect.height), a.index = u.length, u.push(a);
    }
    for (let [s, a] of u.entries()) a.layoutInfo.zIndex = u.length - s + 1;
    return this.setChildHeights(u, r), n.height = r, n.width = l - n.x, {
      layoutInfo: o,
      children: u,
      validRect: n,
      node: e
    };
  }
  setChildHeights(e, l) {
    for (let i of e) i.layoutInfo.rect.height !== l && (i.layoutInfo = i.layoutInfo.copy(), i.layoutInfo.rect.height = l);
  }
  // used to get the column widths when rendering to the DOM
  getRenderedColumnWidth(e) {
    let l = this.virtualizer.collection;
    var i;
    let n = (i = e.colSpan) !== null && i !== void 0 ? i : 1;
    var o;
    let r = (o = e.colIndex) !== null && o !== void 0 ? o : e.index, u = 0;
    for (let a = r; a < r + n; a++) {
      let d = l.columns[a];
      var s;
      (d == null ? void 0 : d.key) != null && (u += (s = this.columnWidths.get(d.key)) !== null && s !== void 0 ? s : 0);
    }
    return u;
  }
  getEstimatedHeight(e, l, i, n) {
    let o = !1;
    if (i == null) {
      let r = this.layoutNodes.get(e.key);
      r ? (i = r.layoutInfo.rect.height, o = e !== r.node || l !== r.layoutInfo.rect.width || r.layoutInfo.estimatedSize) : (i = n ?? Ht, o = !0);
    }
    return {
      height: i,
      isEstimated: o
    };
  }
  getEstimatedRowHeight() {
    var e, l;
    return (l = (e = this.rowHeight) !== null && e !== void 0 ? e : this.estimatedRowHeight) !== null && l !== void 0 ? l : Ht;
  }
  buildColumn(e, l, i) {
    let n = this.getRenderedColumnWidth(e);
    var o, r;
    let { height: u, isEstimated: s } = this.getEstimatedHeight(e, n, (o = this.headingHeight) !== null && o !== void 0 ? o : this.rowHeight, (r = this.estimatedHeadingHeight) !== null && r !== void 0 ? r : this.estimatedRowHeight), a = new M(l, i, n, u), d = new Y(e.type, e.key, a);
    return d.isSticky = this.isStickyColumn(e), d.zIndex = d.isSticky ? 2 : 1, d.estimatedSize = s, {
      layoutInfo: d,
      children: [],
      validRect: d.rect,
      node: e
    };
  }
  // For subclasses.
  // eslint-disable-next-line
  isStickyColumn(e) {
    return !1;
  }
  buildBody(e) {
    let l = this.virtualizer.collection, i = new M(this.padding, e, 0, 0), n = new Y("rowgroup", l.body.key, i), o = e, r = 0, u = 0, s = [], a = this.getEstimatedRowHeight() + this.gap, d = L(l.body, l);
    for (let p of d) {
      if (e + a < this.requestedRect.y && !this.isValid(p, e)) {
        e += a, r++;
        continue;
      }
      let v = this.buildChild(p, this.padding, e, n.key);
      if (v.layoutInfo.parentKey = n.key, v.index = s.length, e = v.layoutInfo.rect.maxY + this.gap, u = Math.max(u, v.layoutInfo.rect.width), s.push(v), e > this.requestedRect.maxY) {
        var c;
        let b = l.size - (s.length + r), g = _(d);
        if (e += b * a, (g == null ? void 0 : g.type) === "loader" && ((c = s.at(-1)) === null || c === void 0 ? void 0 : c.layoutInfo.type) !== "loader") {
          let m = this.buildChild(g, this.padding, e, n.key);
          m.layoutInfo.parentKey = n.key, m.index = l.size, u = Math.max(u, m.layoutInfo.rect.width), s.push(m), e = m.layoutInfo.rect.maxY;
        }
        break;
      }
    }
    return (l == null ? void 0 : l.size) === 0 ? e = this.virtualizer.visibleRect.maxY : e -= this.gap, i.width = u, i.height = e - o, {
      layoutInfo: n,
      children: s,
      validRect: n.rect.intersection(this.requestedRect),
      node: l.body
    };
  }
  buildNode(e, l, i) {
    switch (e.type) {
      case "headerrow":
        return this.buildHeaderRow(e, l, i);
      case "item":
        return this.buildRow(e, l, i);
      case "column":
      case "placeholder":
        return this.buildColumn(e, l, i);
      case "cell":
        return this.buildCell(e, l, i);
      case "loader":
        return this.buildLoader(e, l, i);
      default:
        throw new Error("Unknown node type " + e.type);
    }
  }
  buildRow(e, l, i) {
    var n;
    let o = this.virtualizer.collection, r = new M(l, i, 0, 0), u = new Y("row", e.key, r), s = [], a = 0;
    for (let c of L(e, o)) if (c.type === "cell")
      if (l > this.requestedRect.maxX) {
        let h = this.layoutNodes.get(c.key);
        if (h)
          h.layoutInfo.rect.x = l, l += h.layoutInfo.rect.width;
        else break;
      } else {
        let h = this.buildChild(c, l, i, u.key);
        l = h.layoutInfo.rect.maxX, a = Math.max(a, h.layoutInfo.rect.height), h.index = s.length, s.push(h);
      }
    this.setChildHeights(s, a);
    var d;
    return r.width = this.layoutNodes.get((d = (n = o.head) === null || n === void 0 ? void 0 : n.key) !== null && d !== void 0 ? d : "header").layoutInfo.rect.width, r.height = a, {
      layoutInfo: u,
      children: s,
      validRect: r.intersection(this.requestedRect),
      node: e
    };
  }
  buildCell(e, l, i) {
    let n = this.getRenderedColumnWidth(e), { height: o, isEstimated: r } = this.getEstimatedHeight(e, n, this.rowHeight, this.estimatedRowHeight), u = new M(l, i, n, o), s = new Y(e.type, e.key, u);
    return s.isSticky = this.isStickyColumn(e), s.zIndex = s.isSticky ? 2 : 1, s.estimatedSize = r, {
      layoutInfo: s,
      children: [],
      validRect: u,
      node: e
    };
  }
  getVisibleLayoutInfos(e) {
    if (e.height > 1) {
      let i = this.getEstimatedRowHeight();
      e.y = Math.floor(e.y / i) * i, e.height = Math.ceil(e.height / i) * i;
    }
    this.layoutIfNeeded(e);
    let l = [];
    this.buildPersistedIndices();
    for (let i of this.rootNodes)
      l.push(i.layoutInfo), this.addVisibleLayoutInfos(l, i, e);
    return l;
  }
  addVisibleLayoutInfos(e, l, i) {
    if (!(!l.children || l.children.length === 0))
      switch (l.layoutInfo.type) {
        case "header":
          for (let n of l.children)
            e.push(n.layoutInfo), this.addVisibleLayoutInfos(e, n, i);
          break;
        case "rowgroup": {
          let n = this.binarySearch(l.children, i.topLeft, "y"), o = this.binarySearch(l.children, i.bottomRight, "y"), r = this.persistedIndices.get(l.layoutInfo.key), u = 0;
          for (; r && u < r.length && r[u] < n; ) {
            let a = r[u];
            a < l.children.length && (e.push(l.children[a].layoutInfo), this.addVisibleLayoutInfos(e, l.children[a], i)), u++;
          }
          for (let a = n; a <= o; a++) {
            for (; r && u < r.length && r[u] < a; ) u++;
            e.push(l.children[a].layoutInfo), this.addVisibleLayoutInfos(e, l.children[a], i);
          }
          for (; r && u < r.length; ) {
            let a = r[u++];
            a < l.children.length && (e.push(l.children[a].layoutInfo), this.addVisibleLayoutInfos(e, l.children[a], i));
          }
          let s = l.children.at(-1);
          (s == null ? void 0 : s.layoutInfo.type) === "loader" && e.push(s.layoutInfo);
          break;
        }
        case "headerrow":
        case "row": {
          let n = this.binarySearch(l.children, i.topLeft, "x"), o = this.binarySearch(l.children, i.topRight, "x"), r = 0, u = this.persistedIndices.get(l.layoutInfo.key) || this.stickyColumnIndices;
          for (; r < u.length && u[r] < n; ) {
            let s = u[r];
            s < l.children.length && e.push(l.children[s].layoutInfo), r++;
          }
          for (let s = n; s <= o; s++) {
            for (; r < u.length && u[r] < s; ) r++;
            e.push(l.children[s].layoutInfo);
          }
          for (; r < u.length; ) {
            let s = u[r++];
            s < l.children.length && e.push(l.children[s].layoutInfo);
          }
          break;
        }
        default:
          throw new Error("Unknown node type " + l.layoutInfo.type);
      }
  }
  binarySearch(e, l, i) {
    let n = 0, o = e.length - 1;
    for (; n <= o; ) {
      let r = n + o >> 1, u = e[r];
      if (i === "x" && u.layoutInfo.rect.maxX <= l.x || i === "y" && u.layoutInfo.rect.maxY <= l.y) n = r + 1;
      else if (i === "x" && u.layoutInfo.rect.x > l.x || i === "y" && u.layoutInfo.rect.y > l.y) o = r - 1;
      else return r;
    }
    return Math.max(0, Math.min(e.length - 1, n));
  }
  buildPersistedIndices() {
    if (this.virtualizer.persistedKeys !== this.lastPersistedKeys) {
      this.lastPersistedKeys = this.virtualizer.persistedKeys, this.persistedIndices.clear();
      for (let n of this.virtualizer.persistedKeys) {
        var e;
        let o = (e = this.layoutNodes.get(n)) === null || e === void 0 ? void 0 : e.layoutInfo;
        for (; o && o.parentKey; ) {
          var l, i;
          let r = this.virtualizer.collection.getItem(o.key), u = this.persistedIndices.get(o.parentKey);
          u || (u = (r == null ? void 0 : r.type) === "cell" || (r == null ? void 0 : r.type) === "column" ? [
            ...this.stickyColumnIndices
          ] : [], this.persistedIndices.set(o.parentKey, u));
          let s = (l = this.layoutNodes.get(o.key)) === null || l === void 0 ? void 0 : l.index;
          s != null && !u.includes(s) && u.push(s), o = (i = this.layoutNodes.get(o.parentKey)) === null || i === void 0 ? void 0 : i.layoutInfo;
        }
      }
      for (let n of this.persistedIndices.values()) n.sort((o, r) => o - r);
    }
  }
  getDropTargetFromPoint(e, l, i) {
    e += this.virtualizer.visibleRect.x, l += this.virtualizer.visibleRect.y;
    let n = new M(e, Math.max(0, l - this.gap), 1, Math.max(1, this.gap * 2)), o = this.getVisibleLayoutInfos(n), r = null, u = 1 / 0;
    for (let c of o) {
      if (c.type !== "row" || !c.rect.intersects(n)) continue;
      let h = Math.abs(c.rect.y - l), p = Math.abs(c.rect.maxY - l), v = Math.min(h, p);
      v < u && (u = v, r = c.key);
    }
    if (r == null || this.virtualizer.collection.size === 0) return {
      type: "root"
    };
    let s = this.getLayoutInfo(r);
    if (!s) return null;
    let a = s.rect, d = {
      type: "item",
      key: s.key,
      dropPosition: "on"
    };
    return i(d) ? l <= a.y + 10 && i({
      ...d,
      dropPosition: "before"
    }) ? d.dropPosition = "before" : l >= a.maxY - 10 && i({
      ...d,
      dropPosition: "after"
    }) && (d.dropPosition = "after") : l <= a.y + a.height / 2 && i({
      ...d,
      dropPosition: "before"
    }) ? d.dropPosition = "before" : i({
      ...d,
      dropPosition: "after"
    }) && (d.dropPosition = "after"), d;
  }
  getDropTargetLayoutInfo(e) {
    let l = super.getDropTargetLayoutInfo(e);
    return l.parentKey = this.virtualizer.collection.body.key, l;
  }
  constructor(e) {
    super(e), this.lastCollection = null, this.columnWidths = /* @__PURE__ */ new Map(), this.lastPersistedKeys = null, this.persistedIndices = /* @__PURE__ */ new Map(), this.stickyColumnIndices = [];
  }
}
class Hu extends Nu {
  // Invalidate the layout whenever the column widths change.
  useLayoutOptions() {
    let e = f.useContext(Ne);
    return f.useMemo(() => ({
      columnWidths: e == null ? void 0 : e.columnWidths
    }), [
      e == null ? void 0 : e.columnWidths
    ]);
  }
}
let pe = null;
function ju(t = !1) {
  if (pe === null || t) {
    const e = document.createElement("div"), l = e.style;
    l.width = "50px", l.height = "50px", l.overflow = "scroll", l.direction = "rtl";
    const i = document.createElement("div"), n = i.style;
    return n.width = "100px", n.height = "100px", e.appendChild(i), document.body.appendChild(e), e.scrollLeft > 0 ? pe = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? pe = "negative" : pe = "positive-ascending"), document.body.removeChild(e), pe;
  }
  return pe;
}
function Lu(t, e) {
  let { scrollLeft: l } = t;
  if (e === "rtl") {
    let { scrollWidth: i, clientWidth: n } = t;
    switch (ju()) {
      case "negative":
        l = -l;
        break;
      case "positive-descending":
        l = i - n - l;
        break;
    }
  }
  return l;
}
function Ou(t, e) {
  let { contentSize: l, onVisibleRectChange: i, innerStyle: n, onScrollStart: o, onScrollEnd: r, scrollDirection: u = "both", ...s } = t, a = f.useRef({
    scrollTop: 0,
    scrollLeft: 0,
    scrollEndTime: 0,
    scrollTimeout: null,
    width: 0,
    height: 0,
    isScrolling: !1
  }).current, { direction: d } = ee(), [c, h] = f.useState(!1), p = f.useCallback((w) => {
    w.target === w.currentTarget && (t.onScroll && t.onScroll(w), Le.flushSync(() => {
      let D = w.currentTarget.scrollTop, S = Lu(w.currentTarget, d);
      a.scrollTop = Math.max(0, Math.min(D, l.height - a.height)), a.scrollLeft = Math.max(0, Math.min(S, l.width - a.width)), i(new M(a.scrollLeft, a.scrollTop, a.width, a.height)), a.isScrolling || (a.isScrolling = !0, h(!0), window.dispatchEvent(new Event("tk.disconnect-observer")), o && o());
      let R = Date.now();
      a.scrollEndTime <= R + 50 && (a.scrollEndTime = R + 300, a.scrollTimeout != null && clearTimeout(a.scrollTimeout), a.scrollTimeout = setTimeout(() => {
        a.isScrolling = !1, h(!1), a.scrollTimeout = null, window.dispatchEvent(new Event("tk.connect-observer")), r && r();
      }, 300));
    }));
  }, [
    t,
    d,
    a,
    l,
    i,
    o,
    r
  ]);
  nr(e, "scroll", p), f.useEffect(() => () => {
    a.scrollTimeout != null && clearTimeout(a.scrollTimeout), a.isScrolling && window.dispatchEvent(new Event("tk.connect-observer"));
  }, []);
  let v = f.useRef(!1), b = ue((w) => {
    let D = e.current;
    if (!D || v.current) return;
    v.current = !0;
    let S = process.env.NODE_ENV === "test" && !process.env.VIRT_ON, R = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientWidth"), B = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientHeight"), z = D.clientWidth, K = D.clientHeight, N = S && !R ? 1 / 0 : z, E = S && !B ? 1 / 0 : K;
    (a.width !== N || a.height !== E) && (a.width = N, a.height = E, w(() => {
      i(new M(a.scrollLeft, a.scrollTop, N, E));
    }), (!S && z !== D.clientWidth || K !== D.clientHeight) && (a.width = D.clientWidth, a.height = D.clientHeight, w(() => {
      i(new M(a.scrollLeft, a.scrollTop, a.width, a.height));
    }))), v.current = !1;
  }), g = f.useRef(null), [m, C] = f.useState({});
  me(() => {
    if (!v.current && (g.current == null || !l.equals(g.current)))
      if (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") {
        C({}), g.current = l;
        return;
      } else queueMicrotask(() => b(Le.flushSync));
    g.current = l;
  }), me(() => {
    b((w) => w());
  }, [
    m
  ]);
  let $ = f.useCallback(() => {
    b(Le.flushSync);
  }, [
    b
  ]);
  rt({
    ref: e,
    box: "border-box",
    onResize: $
  });
  let x = {
    // Reset padding so that relative positioning works correctly. Padding will be done in JS layout.
    padding: 0,
    ...s.style
  };
  return u === "horizontal" ? (x.overflowX = "auto", x.overflowY = "hidden") : u === "vertical" || l.width === a.width ? (x.overflowY = "auto", x.overflowX = "hidden") : x.overflow = "auto", n = {
    width: Number.isFinite(l.width) ? l.width : void 0,
    height: Number.isFinite(l.height) ? l.height : void 0,
    pointerEvents: c ? "none" : "auto",
    position: "relative",
    ...n
  }, {
    isScrolling: c,
    scrollViewProps: {
      ...s,
      style: x
    },
    contentProps: {
      role: "presentation",
      style: n
    }
  };
}
function Wu(t) {
  let { layoutInfo: e, virtualizer: l, ref: i } = t, n = e == null ? void 0 : e.key, o = f.useCallback(() => {
    if (n != null && i.current) {
      let r = Uu(i.current);
      l.updateItemSize(n, r);
    }
  }, [
    l,
    n,
    i
  ]);
  return me(() => {
    e != null && e.estimatedSize && o();
  }), {
    updateSize: o
  };
}
function Uu(t) {
  let e = t.style.height;
  t.style.height = "";
  let l = new ae(t.scrollWidth, t.scrollHeight);
  return t.style.height = e, l;
}
function Dn(t) {
  let { style: e, className: l, layoutInfo: i, virtualizer: n, parent: o, children: r } = t, { direction: u } = ee(), s = f.useRef(null);
  return Wu({
    layoutInfo: i,
    virtualizer: n,
    ref: s
  }), /* @__PURE__ */ k.createElement("div", {
    role: "presentation",
    ref: s,
    className: l,
    style: {
      ...qu(i, u, o),
      ...e
    }
  }, r);
}
let jt = /* @__PURE__ */ new WeakMap();
function qu(t, e, l) {
  let i = e === "rtl" ? "right" : "left", n = jt.get(t);
  if (n && n[i] != null) {
    if (!l) return n;
    let s = t.rect.y - l.rect.y, a = t.rect.x - l.rect.x;
    if (n.top === s && n[i] === a) return n;
  }
  let o = {
    // TODO: For layoutInfos that are sticky that have parents with overflow visible, their "top" will be relative to the to the nearest scrolling container
    // which WON'T be the parent since the parent has overflow visible. This means we shouldn't offset the height by the parent's position
    // Not 100% about this change here since it is quite ambigious what the scrolling container maybe and how its top is positioned with respect to the
    // calculated layoutInfo.y here
    top: t.rect.y - (l && !(l.allowOverflow && t.isSticky) ? l.rect.y : 0),
    [i]: t.rect.x - (l && !(l.allowOverflow && t.isSticky) ? l.rect.x : 0),
    width: t.rect.width,
    height: t.rect.height
  };
  Object.entries(o).forEach(([s, a]) => {
    Number.isFinite(a) || (o[s] = void 0);
  });
  var r;
  let u = {
    position: t.isSticky ? "sticky" : "absolute",
    // Sticky elements are positioned in normal document flow. Display inline-block so that they don't push other sticky columns onto the following rows.
    display: t.isSticky ? "inline-block" : void 0,
    overflow: t.allowOverflow ? "visible" : "hidden",
    opacity: t.opacity,
    zIndex: t.zIndex,
    transform: (r = t.transform) !== null && r !== void 0 ? r : void 0,
    contain: "size layout style",
    ...o
  };
  return jt.set(t, u), u;
}
const Sn = /* @__PURE__ */ f.createContext(null), En = /* @__PURE__ */ f.createContext(null);
function Yu(t) {
  let { children: e, layout: l, layoutOptions: i } = t, n = f.useMemo(() => typeof l == "function" ? new l() : l, [
    l
  ]), o = f.useMemo(() => ({
    isVirtualized: !0,
    layoutDelegate: n,
    dropTargetDelegate: n.getDropTargetFromPoint ? n : void 0,
    CollectionRoot: Zu,
    CollectionBranch: Xu
  }), [
    n
  ]);
  return /* @__PURE__ */ k.createElement(Z.Provider, {
    value: o
  }, /* @__PURE__ */ k.createElement(En.Provider, {
    value: {
      layout: n,
      layoutOptions: i
    }
  }, e));
}
function Zu({ collection: t, persistedKeys: e, scrollRef: l, renderDropIndicator: i }) {
  var n;
  let { layout: o, layoutOptions: r } = f.useContext(En), u = (n = o.useLayoutOptions) === null || n === void 0 ? void 0 : n.call(o), s = Ku({
    layout: o,
    collection: t,
    renderView: (d, c) => {
      var h;
      return c == null || (h = c.render) === null || h === void 0 ? void 0 : h.call(c, c);
    },
    onVisibleRectChange(d) {
      let c = l == null ? void 0 : l.current;
      c && (c.scrollLeft = d.x, c.scrollTop = d.y);
    },
    persistedKeys: e,
    layoutOptions: f.useMemo(() => r && u ? {
      ...r,
      ...u
    } : r || u, [
      r,
      u
    ])
  }), { contentProps: a } = Ou({
    onVisibleRectChange: s.setVisibleRect,
    contentSize: s.contentSize,
    onScrollStart: s.startScrolling,
    onScrollEnd: s.endScrolling
  }, l);
  return /* @__PURE__ */ k.createElement("div", a, /* @__PURE__ */ k.createElement(Sn.Provider, {
    value: s
  }, zn(null, s.visibleViews, i)));
}
function Xu({ parent: t, renderDropIndicator: e }) {
  let i = f.useContext(Sn).virtualizer.getVisibleView(t.key);
  return zn(i, Array.from(i.children), e);
}
function zn(t, e, l) {
  return e.map((i) => Gu(t, i, l));
}
function Gu(t, e, l) {
  let i = /* @__PURE__ */ k.createElement(Dn, {
    key: e.key,
    layoutInfo: e.layoutInfo,
    virtualizer: e.virtualizer,
    parent: t == null ? void 0 : t.layoutInfo
  }, e.rendered), { collection: n, layout: o } = e.virtualizer, r = e.content;
  return (r == null ? void 0 : r.type) === "item" && l && o.getDropTargetLayoutInfo && (i = /* @__PURE__ */ k.createElement(k.Fragment, {
    key: e.key
  }, Lt(t, e, {
    type: "item",
    key: e.content.key,
    dropPosition: "before"
  }, l), i, or(n, r, (u) => Lt(t, e, u, l)))), i;
}
function Lt(t, e, l, i) {
  let n = i(l);
  if (n) {
    let o = e.virtualizer.layout.getDropTargetLayoutInfo(l);
    n = /* @__PURE__ */ k.createElement(Dn, {
      layoutInfo: o,
      virtualizer: e.virtualizer,
      parent: t == null ? void 0 : t.layoutInfo
    }, n);
  }
  return n;
}
var Qu = Object.defineProperty, Bn = (t, e) => Qu(t, "name", { value: e, configurable: !0 });
Bn(() => y.jsx(In, { style: "small" }), "LoadingSpinnerInline");
const In = Bn(({ style: t = "large", centered: e = !1, ...l }) => {
  const i = t === "large" ? 64 : 16, n = y.jsx(mo, { ...l, isIndeterminate: !0, "aria-label": "Loading...", children: () => y.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 16 16", fill: "none", children: [y.jsx(Ju, { cx: "8", cy: "8", r: "6.5" }), y.jsx(_u, { d: "M8 1c3.866 0 7 3.13401 7 7 0 .27614-.2239.5-.5.5S14 8.27614 14 8c0-3.31371-2.6863-6-6-6-3.31371 0-6 2.68629-6 6 0 .27614-.22386.5-.5.5S1 8.27614 1 8c0-3.86599 3.13401-7 7-7Z" })] }) });
  return e ? y.jsx(ea, { children: n }) : n;
}, "LoadingSpinner"), Ju = P.circle`
    stroke: ${({ theme: t }) => t.colorsAccentSubtlestGrey};
`, _u = P.path`
    @keyframes rotate {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }

    fill: ${({ theme: t }) => t.colorsAccentDefaultBlue};

    animation: rotate;
    animation-direction: normal;
    animation-duration: 1.125s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: center;
`, ea = P.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`, ta = () => {
  const t = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
  };
  return /* @__PURE__ */ y.jsx("div", { style: t, children: /* @__PURE__ */ y.jsx(In, {}) });
}, la = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23579BF9'%20stroke-linejoin='round'/%3e%3c/svg%3e", ia = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13%202.5H3C2.72386%202.5%202.5%202.72386%202.5%203V13C2.5%2013.2761%202.72386%2013.5%203%2013.5H13C13.2761%2013.5%2013.5%2013.2761%2013.5%2013V3C13.5%202.72386%2013.2761%202.5%2013%202.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5V6.5C6.5%205.95%206.95%205.5%207.5%205.5H8.5C9.05%205.5%209.5%205.95%209.5%206.5V8H6.5'%20stroke='%23146FF4'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var na = Object.defineProperty, oa = (t, e) => na(t, "name", { value: e, configurable: !0 });
const ra = oa((t) => y.jsx(le, { light: ia, dark: la, ...t }), "EntityIcon"), ua = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23FBCF55'%20stroke-linejoin='round'/%3e%3c/svg%3e", aa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.75%2010.5H7.5C6.95%2010.5%206.5%2010.05%206.5%209.5L6.5%206.5C6.5%205.95%206.95%205.5%207.5%205.5L8.5%205.5C9.05%205.5%209.5%205.95%209.5%206.5V8L6.5%208'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3cpath%20d='M9.5%202.5L6.5%202.5M11%202.5L13%202.5C13.2761%202.5%2013.5%202.72386%2013.5%203V5M5%202.5L3%202.5C2.72386%202.5%202.5%202.72386%202.5%203L2.5%205M2.5%209.5L2.5%206.5M2.5%2011L2.5%2013C2.5%2013.2761%202.72386%2013.5%203%2013.5H5M13.5%206.5L13.5%209.5M13.5%2011V13C13.5%2013.2761%2013.2761%2013.5%2013%2013.5H11M9.5%2013.5L6.5%2013.5'%20stroke='%23C97800'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var sa = Object.defineProperty, da = (t, e) => sa(t, "name", { value: e, configurable: !0 });
const ca = da((t) => y.jsx(le, { light: aa, dark: ua, ...t }), "EntityNonPersistableIcon"), ha = async (t, e, l, i, n) => {
  const o = { ...l, [e]: n };
  return (e === "userPrompt" || e === "systemPrompt") && (o.variables = await Io(t, o)), i(o), o;
}, fa = async (t, e, l) => {
  const i = await t.ui.elementSelectors.selectEntity({ allowNone: !0 });
  let n;
  if (i.status === "ok" && (n = { ...e, entity: i.selected.module + "." + i.selected.name }), i.status === "none" && (n = { ...e, entity: "" }), n) {
    const o = await Po(t, e.variables, n);
    n = { ...n, variables: o }, l(n);
  }
  return n;
}, pa = async (t, e, l) => {
  const i = await t.ui.elementSelectors.selectDocument({ allowNone: !0, query: { elementType: at } });
  let n;
  return i.status === "ok" && (n = { ...e, modelQualifiedName: i.selected.module + "." + i.selected.name }), i.status === "none" && (n = { ...e, modelQualifiedName: void 0 }), n && l(n), n;
}, Ue = async (t, e, l) => {
  switch (t) {
    case "modelQualifiedName":
      if (!l.modelQualifiedName)
        return "Please select a model.";
      if (!(await e.app.model.customBlobDocuments.getDocumentsOfType(at)).find((s) => s.moduleName + "." + s.name === l.modelQualifiedName))
        return "This document is invalid. Make sure to select a document of type Model.";
      break;
    case "entity":
      if (l.variables.length > 0 && !l.entity)
        return "Please select an entity.";
      const [o, r] = l.entity.split(".");
      if (l.entity && (!o || !r))
        return "The selected entity is not valid.";
      if (!await Ro(e, l))
        return "Entity no longer exists.";
      break;
    case "userPrompt":
      if (!l.userPrompt)
        return "Please provide a user prompt.";
      break;
    default:
      return !0;
  }
  return !0;
}, va = async (t, e) => {
  if (!e)
    return;
  const l = (await t.app.model.customBlobDocuments.getDocumentsOfType(at)).find((i) => i.moduleName + "." + i.name === e);
  if (!l) {
    t.ui.messageBoxes.show(
      "error",
      "Could not find model.",
      "This model might have been deleted or renamed. Please update the model selection."
    );
    return;
  }
  t.ui.editors.editDocument(l.id);
}, ma = async (t, e, l, i) => {
  const n = await t.ui.dialogs.showModal(
    {
      title: "Model settings",
      contentSize: { height: 400, width: 600 }
    },
    {
      componentName: e,
      uiEntrypoint: "modelSettingsEdit",
      queryParams: {
        agent: encodeURIComponent(JSON.stringify(l))
      }
    }
  );
  let o;
  return n && (o = n), o && i(o), o;
}, Ot = async (t, e, l, i, n) => {
  const o = n && l.tools ? l.tools.find((u) => u.id === n) : void 0, r = await t.ui.dialogs.showModal(
    {
      title: o ? "Edit tool" : "Add tool",
      contentSize: { height: 330, width: 600 }
    },
    {
      componentName: e,
      uiEntrypoint: "toolEdit",
      queryParams: {
        tool: o ? encodeURIComponent(JSON.stringify(o)) : "",
        agent: l ? encodeURIComponent(JSON.stringify(l)) : ""
      }
    }
  );
  if (r !== null) {
    const u = r;
    let s;
    n && l.tools ? s = l.tools.map((d) => d.id === n ? u : d) : s = [...l.tools || [], u], s.sort((d, c) => d.name.localeCompare(c.name));
    const a = { ...l, tools: s };
    return i(a), a;
  } else
    return null;
}, ga = async (t, e, l) => {
  const i = t.tools.filter((o) => o.id !== l), n = { ...t, tools: i };
  return e(n), n;
}, ba = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ya = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M3.5%2012.75L12.75%203.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var $a = Object.defineProperty, xa = (t, e) => $a(t, "name", { value: e, configurable: !0 });
const wa = xa((t) => y.jsx(le, { light: ya, dark: ba, ...t }), "AppSelectorNoVersionIcon"), Ca = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ka = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.85498%204.52502L11.475%207.14502'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M5.145%2013.5H2.5V10.885L10.745%202.63502C10.94%202.44002%2011.255%202.44002%2011.45%202.63502L13.36%204.54502C13.555%204.74002%2013.555%205.05502%2013.36%205.25002L5.145%2013.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Da = Object.defineProperty, Sa = (t, e) => Da(t, "name", { value: e, configurable: !0 });
const Ea = Sa((t) => y.jsx(le, { light: ka, dark: Ca, ...t }), "EditIcon"), za = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Ba = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V2C3.5%201.725%203.725%201.5%204%201.5H8.5L12.5%205.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5Z'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%205.5H8.5V1.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ia = Object.defineProperty, Pa = (t, e) => Ia(t, "name", { value: e, configurable: !0 });
const Ra = Pa((t) => y.jsx(le, { light: Ba, dark: za, ...t }), "PageIcon"), Aa = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23579BF9'/%3e%3c/svg%3e", Ma = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.5%204.605V3H14.5V6.495H11V5.495H12.895C12.105%204.245%2010.55%202.495%208.00002%202.495C5.14002%202.495%202.73502%204.725%202.51502%207.57L1.52002%207.495C1.77502%204.135%204.62502%201.5%208.00002%201.5C10.775%201.5%2012.53%203.215%2013.5%204.605ZM3.105%2010.5001C3.895%2011.7501%205.45%2013.5001%208%2013.5001V13.5051C10.86%2013.5051%2013.265%2011.2751%2013.485%208.43005L14.48%208.50505C14.225%2011.8651%2011.375%2014.5001%208%2014.5001C5.225%2014.5001%203.47%2012.7851%202.5%2011.3951V13.0001H1.5V9.50005H5V10.5001H3.105Z'%20fill='%23146FF4'/%3e%3c/svg%3e";
var Ta = Object.defineProperty, Fa = (t, e) => Ta(t, "name", { value: e, configurable: !0 });
const Ka = Fa((t) => y.jsx(le, { light: Ma, dark: Aa, ...t }), "SyncIcon");
var Va = Object.defineProperty, Na = (t, e) => Va(t, "name", { value: e, configurable: !0 });
const Ha = Na(() => {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.border = "1px solid black", t.style.visibility = "hidden", t.style.width = "1px", t.style.height = "1px", document.body.appendChild(t);
  const e = getComputedStyle(t), l = parseFloat(e.borderTopWidth);
  return document.body.removeChild(t), l;
}, "getBorderScaleFactor");
var ja = Object.defineProperty, He = (t, e) => ja(t, "name", { value: e, configurable: !0 });
const Pn = f.createContext({ borderScaleFactor: 1, stickyHeader: !1 }), La = He(({ stickyHeader: t = !1, children: e }) => {
  const l = f.useMemo(() => t ? Ha() : 1, [t]);
  return y.jsx(Pn.Provider, { value: { borderScaleFactor: l, stickyHeader: t }, children: e });
}, "TableProvider"), Rn = He(() => f.useContext(Pn), "useTableContext"), An = f.createContext({}), Mn = He(({ id: t, children: e }) => y.jsx(An.Provider, { value: { id: t }, children: e }), "TableRowContextProvider"), Tn = He(() => f.useContext(An), "useTableRowContext");
var Oa = Object.defineProperty, xt = (t, e) => Oa(t, "name", { value: e, configurable: !0 });
const Fn = f.createContext(void 0), Wa = xt(({ selectionType: t = "none", selectionMode: e = "none", defaultSelectedKeys: l = [], selectedKeys: i, onSelectionChange: n, onDoubleClick: o, onContextMenu: r, children: u }) => {
  const [s, a] = f.useState(l[0]), [d, c] = f.useState(), h = f.useRef(!1), p = f.useCallback((v) => {
    e !== "single" || v === void 0 || (i !== void 0 ? i[0] !== v && (n == null || n([v])) : v !== s && (a(v), n == null || n([v])));
  }, [i, s, n, e]);
  return we(t) || we(e) ? y.jsx(y.Fragment, { children: u }) : y.jsx(Fn.Provider, { value: { selectionType: t, selectionMode: e, hasScrolledIntoView: h, defaultSelectedKeys: l, selected: i ? i[0] : s, addSelected: p, hovered: d, setHovered: c, onDoubleClick: o, onContextMenu: r }, children: u });
}, "TableInteractionProvider"), je = xt(() => f.useContext(Fn), "useTableInteractionContext");
function we(t) {
  return t === "none" || t === void 0;
}
xt(we, "isNoneOrUndefined");
const wt = 6;
var Ua = Object.defineProperty, qa = (t, e) => Ua(t, "name", { value: e, configurable: !0 });
const qe = 16 + 2 * wt + 1, Ya = { loaderHeight: qe, estimatedRowHeight: qe, estimatedHeadingHeight: qe }, Za = qa(({ stickyHeader: t, selectionType: e, selectionMode: l, defaultSelectedKeys: i, onSelectionChange: n, onDoubleClick: o, onContextMenu: r, selectedKeys: u, className: s, virtualizationOptions: a = {}, ...d }) => {
  const c = { ...d, disallowTypeAhead: !0 }, h = { ...Ya, ...a };
  let p = y.jsx(Xa, { className: s, children: y.jsx(Yu, { layout: Hu, layoutOptions: h, children: y.jsx(Ga, { ...c }) }) });
  return e && (p = y.jsx(Wa, { selectionType: e, selectionMode: l, defaultSelectedKeys: i, selectedKeys: u, onSelectionChange: n, onDoubleClick: o, onContextMenu: r, children: p })), y.jsx(La, { stickyHeader: t, children: p });
}, "Table"), Xa = P.div`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableLayout};
    border: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${T.borderWidthMd};
    min-height: 100%;
    height: 100%;
    width: 100%;
    overflow: auto;
`, Ga = P(mu)`
    border-collapse: separate;
    border-spacing: 0;
    color: ${({ theme: t }) => t.colorsTextPrimaryDefault};
    font-size: ${T.fontSizeMd};
    height: auto;
    line-height: ${T.lineHeightMd};
    table-layout: fixed;
    white-space: nowrap;
    width: 100%;
`;
var Qa = Object.defineProperty, Ja = (t, e) => Qa(t, "name", { value: e, configurable: !0 });
const _a = Ja(({ ...t }) => y.jsx(wu, { ...t }), "TableBody");
var es = Object.defineProperty, ts = (t, e) => es(t, "name", { value: e, configurable: !0 });
const ls = ts((t) => y.jsxs(is, { ...t, children: [y.jsx(ns, {}), y.jsx(rr, {})] }), "DropdownButton"), is = P(Me)`
    color: ${(t) => t.theme.colorsTextPrimaryDefault};
    background-color: ${(t) => t.theme.colorsBackgroundInputBase};

    border-width: ${T.borderWidthMd};
    border-style: solid;
    border-radius: ${T.borderRadiusXs};

    border-color: ${(t) => t.theme.colorsBorderInputDefault};

    &[data-hovered] {
        border-color: ${(t) => t.theme.colorsBorderInputHover};
    }

    &[data-pressed],
    &[data-focused],
    &[data-selected] {
        border-color: ${(t) => t.theme.colorsBorderActive};
    }

    &[data-disabled] {
        opacity: 0.5;
    }

    padding: 3px ${T.spacing4};
    display: flex;
    align-items: normal;
    gap: ${T.spacing8};
    width: 100%;
`, ns = P(cu)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    // specific overwrite for this value to make sure the default Sass stylesheet isn't being used ("button span" selector)
    // (& targets the classname for this component specifically in styled-components)
    // Can be removed once the global Sass stylesheet is removed
    & {
        line-height: ${T.lineHeightMd};
    }

    flex-grow: 1;
    text-align: left;
`;
var os = Object.defineProperty, rs = (t, e) => os(t, "name", { value: e, configurable: !0 });
function us({ children: t, items: e, label: l, description: i, ...n }) {
  const { isInvalid: o, validate: r, validationError: u } = go({ value: n.selectedKey ?? void 0, isInvalid: n.isInvalid, validate: n.validate });
  return y.jsx(ve, { ...n, isInvalid: o, validate: r, children: y.jsxs(bo, { label: l, description: i, realtimeValidationError: u, children: [y.jsx(as, {}), y.jsx(yo, { children: y.jsx(ur, { items: e, children: t }) })] }) });
}
rs(us, "Dropdown");
const ve = P(au)``, as = P(ls)`
    // To avoid the button getting the border if it happens to be nested in something bigger with "data-invalid" set on it,
    // we extend the styling here a bit to directly target it only if inside a data-invalid Dropdown control.
    ${ve}[data-invalid] & {
        border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
    }
`;
var ss = Object.defineProperty, Ct = (t, e) => ss(t, "name", { value: e, configurable: !0 });
const Ye = Ct(({ icon: t, label: e, isActive: l, onDragStart: i, tooltip: n, ...o }) => {
  const r = f.useRef(null);
  f.useEffect(() => {
    if (!r.current || !i) return;
    const s = r.current;
    return s.draggable = !0, s.addEventListener("dragstart", i), () => {
      s.removeEventListener("dragstart", i);
    };
  }, [i]);
  const u = y.jsxs(Te, { ...o, $isActive: l, ref: r, children: [t && y.jsx(ds, { icon: t }), e && y.jsx(fs, { children: e })] });
  return n ? y.jsxs($o, { children: [u, y.jsx(xo, { placement: "bottom", children: n })] }) : u;
}, "ToolbarButton"), ds = Ct(({ icon: t }) => typeof t == "string" ? y.jsx(hs, { src: t, "aria-hidden": !0 }) : t, "ToolbarButtonIcon"), cs = Ct((t) => $e`
        height: 20px;
        padding: 1px;
        border: 1px solid ${({ theme: e }) => t ? e.colorsBorderActive : "transparent"};
        border-radius: 4px;
        display: flex;
        gap: 4px;
        color: ${({ theme: e }) => e.colorsTextPrimaryDefault};
        background-color: ${({ theme: e }) => e.colorsBackgroundDefault};
        white-space: nowrap;

        &:hover:not(:disabled) {
            border-color: ${({ theme: e }) => t ? e.colorsBorderActive : e.colorsBorderButtonsGhostButtonHover};
        }

        &:is(:active):not(:disabled) {
            border-color: ${({ theme: e }) => t ? e.colorsBorderActive : e.colorsBorderSelected};
        }

        &:disabled {
            opacity: 0.5;
        }
    `, "baseToolbarButtonStyle"), Te = P(Co)`
    ${({ $isActive: t }) => cs(t)}
`, hs = wo, fs = P.span`
    font-size: 12px;
    line-height: 16px;
    margin-right: 1px;
`;
var ps = Object.defineProperty, vs = (t, e) => ps(t, "name", { value: e, configurable: !0 });
const Kn = vs(({ children: t, title: e }) => y.jsx(ms, { title: e, children: t }), "ContentWrapper"), ms = P.div`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    -webkit-user-select: none; // Safari
    user-select: none; // Other browsers
`;
var gs = Object.defineProperty, kt = (t, e) => gs(t, "name", { value: e, configurable: !0 });
const Vn = kt(({ cellType: t, columnId: e }) => {
  const { id: l } = Tn(), { selectionType: i, selectionMode: n } = { ...je() }, o = !we(i) && !we(n);
  return t === "cell" && o || t === "header" && o && i === "column" ? y.jsx(bs, { id: i === "column" ? e : l }) : null;
}, "Selectable"), bs = kt(({ id: t }) => {
  const { borderScaleFactor: e } = Rn(), { selectionType: l, selected: i, hovered: n, addSelected: o, setHovered: r, onDoubleClick: u, onContextMenu: s } = { ...je() }, a = f.useCallback(() => {
    o == null || o(t);
  }, [o, t]), d = f.useCallback(() => {
    r == null || r(t);
  }, [r, t]), c = f.useCallback(() => {
    r == null || r();
  }, [r]), h = f.useCallback(() => {
    u == null || u(t);
  }, [u, t]), p = f.useCallback(() => {
    o == null || o(t), s == null || s(t);
  }, [o, s, t]), v = i !== void 0 && i === t;
  return y.jsx(l === "row" ? ys : $s, { onClick: a, onDoubleClick: h, onMouseOver: d, onMouseLeave: c, onContextMenu: p, $isSelected: v, $isHovered: n !== void 0 && !v && n === t, $borderScaleFactor: e, "data-testid": "Selectable overlay", "aria-hidden": !0 });
}, "SelectableInner"), Dt = $e`
    position: absolute;
    inset: 0;
`;
function Ce(t, e) {
  return $e`
        &::after {
            ${Dt}
            content: "";
            pointer-events: none;

            --border: solid ${T.borderWidthLg} ${e};

            ${t === "row" ? $e`
                      border-top: var(--border);
                      border-bottom: var(--border);

                      [role="presentation"]:first-child > :is([role="gridcell"], [role="rowheader"]) & {
                          border-left: var(--border);
                      }

                      [role="presentation"]:last-child > :is([role="gridcell"], [role="rowheader"]) & {
                          border-right: var(--border);
                      }
                  ` : $e`
                      border-left: var(--border);
                      border-right: var(--border);

                      [role="columnheader"] & {
                          border-top: var(--border);
                      }

                      [role="rowgroup"] > [role="presentation"]:last-child :is([role="gridcell"], [role="rowheader"]) & {
                          border-bottom: var(--border);
                      }
                  `}
        }
    `;
}
kt(Ce, "highLight");
const ys = P.div`
    ${Dt}
    right: ${({ $borderScaleFactor: t }) => `calc(-${t} * ${T.borderWidthMd})`};

    [role="presentation"]:last-child > :is([role="gridcell"], [role="rowheader"]) & {
        right: 0;
    }

    ${({ $isHovered: t, theme: e }) => t && Ce("row", e.colorsBorderPrimary)};
    ${({ $isSelected: t, theme: e }) => t && Ce("row", e.colorsAccentDefaultBlue)};
`, $s = P.div`
    ${Dt}
    bottom: ${({ $borderScaleFactor: t }) => `calc(-${t} * ${T.borderWidthMd})`};

    tbody > [role="row"]:last-child & {
        bottom: 0;
    }

    ${({ $isHovered: t, theme: e }) => t && Ce("column", e.colorsBorderPrimary)};
    ${({ $isSelected: t, theme: e }) => t && Ce("column", e.colorsAccentDefaultBlue)};
`;
var xs = Object.defineProperty, ws = (t, e) => xs(t, "name", { value: e, configurable: !0 });
function St(t) {
  return t == null || t === "" ? " " : t;
}
ws(St, "ensureContent");
var Cs = Object.defineProperty, ks = (t, e) => Cs(t, "name", { value: e, configurable: !0 });
const Nn = ks(({ children: t, id: e, columnId: l, title: i, forceEmpty: n, ...o }) => {
  const { id: r } = Tn();
  return y.jsx(Ds, { ...o, children: y.jsx(Mn, { id: r, children: y.jsxs("div", { title: i, children: [y.jsx(Kn, { children: n ? void 0 : St(t) }), y.jsx(Vn, { cellType: "cell", columnId: l })] }) }) });
}, "TableCell");
P(Nn)`
    text-align: center;
`;
const Ds = P(ku)`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableCellPrimary};
    padding: ${wt}px ${T.spacing4};
    &:has(${ll}, ${ve}, ${Ge}, ${Me}) {
        padding: ${T.spacing2} ${T.spacing4};
    }
    // XXX: remove this when ToolbarButton has been replaced by a ghost button (with different sizes/paddings per context)
    &:has(${Te}) {
        padding: ${T.spacing4};
    }
    position: relative;

    border-bottom: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${T.borderWidthMd};
    [role="row"] > [role="presentation"]:not(:last-child) & {
        border-right: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${T.borderWidthMd};
    }
`;
var Ss = Object.defineProperty, Es = (t, e) => Ss(t, "name", { value: e, configurable: !0 });
const zs = Es(({ columns: t, children: e, ...l }) => {
  const { stickyHeader: i } = Rn();
  return y.jsx(i ? Bs : yn, { ...l, children: y.jsx(ze, { items: t, children: e }) });
}, "TableHead"), Bs = P(yn)`
    position: sticky;
    top: 0;
    z-index: 2; // make sure sticky header is above sticky first column
`, Is = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%204H2.94989C2.60489%204%202.38989%204.31%202.55989%204.56L7.58489%2011.79C7.78489%2012.075%208.21989%2012.075%208.41489%2011.79L13.4399%204.56C13.6149%204.31%2013.3949%204%2013.0499%204Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Ps = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%204H2.94989C2.60489%204%202.38989%204.31%202.55989%204.56L7.58489%2011.79C7.78489%2012.075%208.21989%2012.075%208.41489%2011.79L13.4399%204.56C13.6149%204.31%2013.3949%204%2013.0499%204Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Rs = Object.defineProperty, As = (t, e) => Rs(t, "name", { value: e, configurable: !0 });
const Ms = As((t) => y.jsx(le, { light: Ps, dark: Is, ...t }), "MoveDownIcon"), Ts = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%2012H2.94989C2.60489%2012%202.38989%2011.69%202.55989%2011.44L7.58489%204.21497C7.78489%203.92997%208.21989%203.92997%208.41489%204.21497L13.4399%2011.445C13.6149%2011.695%2013.3949%2012.005%2013.0499%2012.005V12Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Fs = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%2012H2.94989C2.60489%2012%202.38989%2011.69%202.55989%2011.44L7.58489%204.21497C7.78489%203.92997%208.21989%203.92997%208.41489%204.21497L13.4399%2011.445C13.6149%2011.695%2013.3949%2012.005%2013.0499%2012.005V12Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Ks = Object.defineProperty, Vs = (t, e) => Ks(t, "name", { value: e, configurable: !0 });
const Ns = Vs((t) => y.jsx(le, { light: Fs, dark: Ts, ...t }), "MoveUpIcon");
var Hs = Object.defineProperty, js = (t, e) => Hs(t, "name", { value: e, configurable: !0 });
const Ls = js(({ ...t }) => y.jsx(Os, { ...t }), "ColumnResizer"), Os = P(xu)`
    z-index: 3; // on top of sticky header and sticky first column

    position: absolute;
    inset: 0 -${T.spacing8} 0 auto;
    // The Virtualizer adds "contain: size layout style" on a role="presentation" div causing the resizer to not be hoverable outside of this header
    // So in reality this spacing is 8px
    width: ${T.spacing16};

    [role="row"][aria-rowindex="1"] > [role="presentation"]:last-child [role="columnheader"] & {
        // we make sure the column resizer does not make the Table itself larger, when scrolling to the end of it, for example
        right: 0;
    }

    touch-action: none;

    &[data-resizable-direction="both"] {
        cursor: ew-resize;
    }

    &[data-resizable-direction="left"] {
        cursor: e-resize;
    }

    &[data-resizable-direction="right"] {
        cursor: w-resize;
    }
`;
var Ws = Object.defineProperty, Us = (t, e) => Ws(t, "name", { value: e, configurable: !0 });
const Hn = Us((t, e, l) => {
  var i;
  return e !== void 0 && (l == null ? void 0 : l.selectionType) === t && (l == null ? void 0 : l.selectionMode) === "single" && ((i = l == null ? void 0 : l.defaultSelectedKeys) == null ? void 0 : i[0]) === e && (l == null ? void 0 : l.hasScrolledIntoView.current) !== !0 ? (n) => {
    n && (n.scrollIntoView({ behavior: "instant", inline: "nearest", block: "nearest" }), l.hasScrolledIntoView.current = !0);
  } : null;
}, "getScrollIntoViewRef");
var qs = Object.defineProperty, Ys = (t, e) => qs(t, "name", { value: e, configurable: !0 });
const Zs = Ys(({ children: t, id: e, title: l, resizable: i, ...n }) => {
  const o = je(), r = f.useMemo(() => Hn("column", e, o), [e, o]);
  return y.jsx(Xs, { id: e, ref: r, ...n, children: ({ allowsSorting: u, sortDirection: s }) => y.jsxs(Gs, { title: l, children: [y.jsx(Kn, { children: St(t) }), u && y.jsx(Qs, { "aria-hidden": "true", className: "sort-indicator", children: s === "ascending" ? y.jsx(Ns, {}) : y.jsx(Ms, {}) }), y.jsx(Vn, { cellType: "header", columnId: e }), i && y.jsx(Ls, {})] }) });
}, "TableHeader"), Xs = P($u)`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableHeaderDefault};
    font-weight: 600;
    padding: ${wt}px ${T.spacing4};
    position: relative; // for Selectable column to be rendered absolute here
    text-align: left;

    border-bottom: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${T.borderWidthMd};
    [role="row"] > [role="presentation"]:not(:last-child) & {
        border-right: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${T.borderWidthMd};
    }

    &:not([data-sort-direction]) .sort-indicator {
        visibility: hidden;
    }
`, Gs = P.div`
    display: flex;
    min-width: 0;
    gap: ${T.spacing4};
`, Qs = P.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
`;
var Js = Object.defineProperty, _s = (t, e) => Js(t, "name", { value: e, configurable: !0 });
const jn = _s(({ children: t, id: e, columns: l, ...i }) => {
  const n = je(), o = f.useMemo(() => Hn("row", e, n), [e, n]);
  return y.jsx(Cu, { id: e, ref: o, ...i, children: y.jsx(Mn, { id: e, children: y.jsx(ze, { items: l, children: t }) }) });
}, "TableRow");
var ed = Object.defineProperty, td = (t, e) => ed(t, "name", { value: e, configurable: !0 });
const ld = td(({ className: t, children: e, "aria-label": l }) => y.jsx(id, { role: "toolbar", "aria-label": l, className: t, children: e }), "Toolbar"), id = P.div`
    display: grid;
    grid-template-columns: [left-start] 1fr [left-end center-start] max-content [center-end right-start] 1fr [right-end];
    background-color: ${({ theme: t }) => t.colorsBackgroundDefault};
    padding: 4px 8px;
    font-size: 12px;
    min-height: 28px;
    width: 100%;
    user-select: none;
    -webkit-user-select: none;
    /* We make overflow-x hidden, to make sure that no horizontal scrollbar appears when the toolbar is resized
       smaller than the total width of its content.
    */
    overflow-x: hidden;
    /* HACK: We make overflow-y hidden, to avoid a vertical scrollbar in case the content of the toolbar would be larger than
       the height of the toolbar. This only happens in MacOS, because of the MacOS system font we are using there.
       Because of this system font the line-height becomes 15px instead of the 14px we set below.
       Changing the global font to Arial or Helvetica or another web-safe font would also solve this issue,
       but UX would like to keep using the system font on all OS's ("Segoe UI" on Windows).
       See https://stackoverflow.com/questions/11726442/font-rendering-line-height-issue-on-mac-pc-outside-of-element
    */
    overflow-y: hidden;

    ${ll}, ${ve}, ${Ge}, ${Me}, ${Te} {
        line-height: 14px; // no design system value for this. Only 13px, 15px and 16px
        padding: ${T.spacing2} 1px;
    }
    ${Te}:has(img) {
        padding: 1px; // Icons have a height of 16px (vs text having a line-height of 16px), so they need less vertical padding to get to a 20px height button.
    }
    ${ve}, ${Ge} {
        // Dropdown and Combobox are already high enough (20px); they don't need vertical padding
        padding: 0 1px;
    }
    ${ve} ${Me} {
        // Since the chevron-down button inside the dropdown is a button, and it has a border (for validation),
        //we need to make the vertical padding smaller (1px vs 2px) to make it fit inside the toolbar
        padding: 1px;
    }
`, Et = P.div`
    display: flex;
    gap: 8px;
    align-items: center;

    &:only-child {
        grid-column: left/right; // If no siblings, use entire toolbar.
    }
`, nd = P(Et)`
    grid-column: left;
    justify-content: start;
`;
P(Et)`
    grid-column: center;
    justify-content: center;
`;
const od = P(Et)`
    grid-column: right;
    justify-content: end;
`;
P.div`
    border-left: solid 1px;
    border-color: ${({ theme: t }) => t.colorsBorderDivider};
    width: 1px;
    height: 16px;
    align-self: center;

    &:first-child,
    &:last-child {
        display: none;
    }
`;
var rd = Object.defineProperty, ud = (t, e) => rd(t, "name", { value: e, configurable: !0 });
function _e(t) {
  return t != null;
}
ud(_e, "isDefined");
var ad = Object.defineProperty, sd = (t, e) => ad(t, "name", { value: e, configurable: !0 }), Ln;
((t) => {
  function e(l, i) {
    return !_e(l) && !_e(i) || l === i;
  }
  t.same = e, sd(e, "same");
})(Ln || (Ln = {}));
var dd = Object.defineProperty, Ie = (t, e) => dd(t, "name", { value: e, configurable: !0 }), cd;
((t) => {
  function e(l, i) {
    return zt(l, { direction: i });
  }
  t.by = e, Ie(e, "by");
})(cd || (cd = {}));
function et(t, e) {
  return typeof e == "function" ? e(t) : t[e];
}
Ie(et, "getValue");
function zt(t, e) {
  const l = Ie((i, n) => {
    var s;
    const o = ((s = e == null ? void 0 : e.previous) == null ? void 0 : s.call(e, i, n)) ?? 0;
    if (o !== 0) return o;
    const r = et(i, t), u = et(n, t);
    return Bt(r, u) * ((e == null ? void 0 : e.direction) === "descending" ? -1 : 1);
  }, "sort");
  return l.thenBy = (i, n) => zt(i, { direction: n, previous: l }), l;
}
Ie(zt, "sortFunction");
function Bt(t, e) {
  return Ln.same(t, e) ? 0 : t == null ? 1 : e == null ? -1 : typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "number" && typeof e == "number" ? t < e ? -1 : 1 : typeof t == "boolean" && typeof e == "boolean" ? t ? 1 : -1 : t instanceof Date && e instanceof Date ? t.getTime() - e.getTime() : 0;
}
Ie(Bt, "simpleSortFunction");
var hd = Object.defineProperty, fd = (t, e) => hd(t, "name", { value: e, configurable: !0 });
function On({ items: t, sortDescriptor: { column: e, direction: l } }) {
  return { items: t.sort((i, n) => {
    if (!e || !l) return 0;
    const o = e, r = Bt(i[o], n[o]);
    return l === "ascending" ? r : -r;
  }) };
}
fd(On, "asyncListSortFunction");
const pd = P(ld)`
    background-color: transparent;
    & button {
        background-color: transparent;
    }
`, vd = P.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`, md = P(Zs)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, tt = P(Nn)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    ${(t) => t.$align && `
        display: flex !important;
        justify-content: ${t.$align === "center" ? "center" : t.$align === "right" ? "flex-end" : "flex-start"};
        align-items: center;
    `}
`, gd = P(jn)`
    ${tt} {
        background-color: #d9dbddff;
    }
`, bd = P(Za)`
    border-bottom: none;
    height: unset;
    min-height: unset;
    width: round(calc(100% - 1px), 2px);
    border-collapse: collapse;
`, Wt = P.div`
    display: contents;
    ${(t) => t.$opacity !== void 0 && `
        & > * {
            opacity: ${t.$opacity};
        }
    `}
`, yd = ({
  ariaLabel: t,
  columns: e,
  data: l,
  stickyHeader: i = !1,
  toolbarLeft: n,
  toolbarRight: o,
  selectionType: r,
  selectionMode: u = "single",
  selectedKeys: s,
  onDoubleClick: a,
  onSelectionChange: d,
  onSortChange: c,
  sortDescriptor: h,
  rowKey: p,
  rowOpacity: v
}) => {
  const b = f.useRef(null);
  return f.useEffect(() => {
    const g = (m) => {
      b.current && !b.current.contains(m.target) && (d == null || d([]));
    };
    return document.addEventListener("click", g), () => {
      document.removeEventListener("click", g);
    };
  }, [d]), /* @__PURE__ */ y.jsxs(vd, { ref: b, children: [
    (n || o) && /* @__PURE__ */ y.jsxs(pd, { "aria-label": `${t} toolbar`, children: [
      n && /* @__PURE__ */ y.jsx(nd, { children: n }),
      o && /* @__PURE__ */ y.jsx(od, { children: o })
    ] }),
    /* @__PURE__ */ y.jsxs(
      bd,
      {
        "aria-label": t,
        stickyHeader: i,
        selectionType: r,
        selectionMode: u,
        selectedKeys: s,
        onSelectionChange: d,
        onDoubleClick: a,
        onSortChange: c,
        sortDescriptor: h,
        children: [
          /* @__PURE__ */ y.jsx(zs, { children: e.map((g) => /* @__PURE__ */ y.jsx(
            md,
            {
              id: g.id,
              isRowHeader: g.isRowHeader,
              resizable: g.resizable,
              minWidth: g.minWidth,
              maxWidth: g.maxWidth,
              defaultWidth: g.defaultWidth,
              allowsSorting: g.allowsSorting,
              children: g.caption
            },
            g.id
          )) }),
          /* @__PURE__ */ y.jsx(_a, { children: l.length === 0 ? /* @__PURE__ */ y.jsx(gd, { children: e.map((g) => /* @__PURE__ */ y.jsx(tt, { columnId: g.id, $align: g.alignContents, children: " " }, g.id)) }) : l.map((g, m) => {
            const C = p ? p(g, m) : String(m), $ = v == null ? void 0 : v(m);
            return /* @__PURE__ */ y.jsx(jn, { id: C, children: g.map((x, w) => {
              const D = e[w];
              return D ? /* @__PURE__ */ y.jsx(tt, { columnId: D.id, $align: D.alignContents, children: x ? /* @__PURE__ */ y.jsx(Wt, { $opacity: $, children: x }) : /* @__PURE__ */ y.jsx(Wt, { $opacity: $, children: " " }) }, w) : null;
            }) }, C);
          }) })
        ]
      }
    )
  ] });
};
function $d(t) {
  const [e, l] = f.useState();
  return {
    items: f.useMemo(() => e ? On({
      items: t,
      sortDescriptor: e,
      signal: new AbortController().signal
    }).items : t, [t, e]),
    sortProps: {
      onSortChange: l,
      sortDescriptor: e
    }
  };
}
const xd = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4749_6635)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='%23252525'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4749_6635'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", wd = "data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_4747_6634)'%3e%3cpath%20d='M7.5%201.5L2.645%206L0.5%204.015'%20stroke='white'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_4747_6634'%3e%3crect%20width='8'%20height='8'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Cd = Object.defineProperty, kd = (t, e) => Cd(t, "name", { value: e, configurable: !0 });
const Dd = kd((t) => y.jsx(le, { light: wd, dark: xd, ...t }), "CheckCheckboxIcon");
var Sd = Object.defineProperty, Ed = (t, e) => Sd(t, "name", { value: e, configurable: !0 });
const zd = Ed(({ children: t, ...e }) => y.jsx(Id, { ...e, children: ({ isIndeterminate: l, isSelected: i }) => y.jsxs(y.Fragment, { children: [y.jsxs(Wn, { $isSelected: i, $isIndeterminate: l, children: [l && y.jsx(Bd, {}), i && !l && y.jsx(Dd, {})] }), t] }) }), "Checkbox"), Wn = P.div`
    width: ${T.size12};
    height: ${T.size12};
    margin: ${T.spacing2};
    border-radius: ${T.borderRadiusXs};
    border: ${T.borderWidthMd} solid
        ${({ theme: t, $isSelected: e }) => e ? t.colorsBorderSelectorSelected : t.colorsBorderSelectorUnselected};
    background-color: ${({ theme: t, $isSelected: e, $isIndeterminate: l }) => e && !l ? t.colorsBorderSelectorSelected : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`, Bd = P.div`
    width: 6px;
    height: 6px;
    border-radius: 1px;
    background: ${({ theme: t }) => t.colorsBorderSelectorSelected};
`, Id = P(ru)`
    cursor: pointer;
    display: flex;
    height: ${T.size16};
    gap: ${T.spacing4};
    line-height: ${T.lineHeightMd};

    &[data-disabled] {
        cursor: default;
        opacity: 0.5;
    }

    &[data-hovered],
    &[data-pressed],
    &[data-indeterminate] {
        ${Wn} {
            border-color: ${({ theme: t }) => t.colorsBorderSelectorSelected};
        }
    }

    ${ko}

    // Some keyboardFocusStyle overrides for Checkbox specifically
    &[data-focus-visible]:after {
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
    }
`, Pd = P(zd)`
    pointer-events: auto;
    position: relative;
    z-index: 10;
`, Rd = ({
  agent: t,
  studioPro: e,
  componentName: l,
  updateStudioProDocument: i,
  onAgentChange: n,
  toolValidations: o
}) => {
  const [r, u] = f.useState([]), s = f.useMemo(() => t.tools ? t.tools.map((g, m) => ({
    id: g.id ?? String(m),
    enabled: g.enabled,
    name: g.name,
    description: g.description || "",
    tool: g.microflow || ""
  })) : [], [t.tools]), { items: a, sortProps: d } = $d(s), c = f.useCallback((g) => {
    const m = o.get(g);
    return m === "invalid" ? /* @__PURE__ */ y.jsx(Kt, { icon: /* @__PURE__ */ y.jsx(Do, { title: "Microflow not found" }) }) : m === "syncing" ? /* @__PURE__ */ y.jsx(Kt, { icon: /* @__PURE__ */ y.jsx(Ka, { title: "Validating..." }) }) : null;
  }, [o]), h = f.useCallback(async () => {
    const g = await Ot(e, l, t, i);
    g && n(g);
  }, [e, l, t, i, n]), p = f.useCallback(async () => {
    const g = r[0];
    if (r.length === 0 || !t.tools)
      return;
    const m = await Ot(e, l, t, i, g);
    m && n(m);
  }, [e, l, t, i, n, r]), v = f.useCallback(async () => {
    const g = r[0];
    if (r.length === 0 || !t.tools)
      return;
    const m = await ga(t, i, g);
    m && n(m);
  }, [t, i, n, r]), b = f.useCallback(async (g, m) => {
    if (!t.tools)
      return;
    const C = t.tools.map(
      (x) => (x.id ?? "") === g ? { ...x, enabled: m } : x
    ), $ = { ...t, tools: C };
    i($), n($);
  }, [t.tools, i, n]);
  return /* @__PURE__ */ y.jsx(Re, { label: "Tools", children: /* @__PURE__ */ y.jsx(pu, { children: /* @__PURE__ */ y.jsx(
    yd,
    {
      ariaLabel: "Tools table",
      columns: [
        { id: "validation", minWidth: 24, defaultWidth: 24, maxWidth: 24 },
        { id: "enabled", caption: "Active", minWidth: 63, defaultWidth: 63, maxWidth: 63, allowsSorting: !0, alignContents: "center" },
        { id: "name", caption: "Name", isRowHeader: !0, resizable: !0, allowsSorting: !0 },
        { id: "description", caption: "Description", resizable: !0, allowsSorting: !0 },
        { id: "tool", caption: "Tool", resizable: !0, allowsSorting: !0 }
      ],
      data: a.map((g) => [
        c(g.id),
        /* @__PURE__ */ y.jsx(
          Pd,
          {
            "aria-label": "Enabled",
            isSelected: g.enabled,
            onChange: (m) => b(g.id, m)
          }
        ),
        g.name,
        g.description,
        /* @__PURE__ */ y.jsx(
          fr,
          {
            icon: /* @__PURE__ */ y.jsx(sr, {}),
            text: g.tool
          }
        )
      ]),
      rowKey: (g, m) => {
        var C;
        return ((C = a[m]) == null ? void 0 : C.id) ?? String(m);
      },
      rowOpacity: (g) => {
        var m;
        return (m = a[g]) != null && m.enabled ? 1 : 0.5;
      },
      selectionType: "row",
      selectionMode: "single",
      selectedKeys: r,
      onDoubleClick: p,
      onSelectionChange: u,
      ...d,
      toolbarLeft: /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ y.jsx(Ra, {}),
            label: "New",
            "aria-label": "Add new tool",
            tooltip: "Add new tool",
            onPress: h
          }
        ),
        /* @__PURE__ */ y.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ y.jsx(Ea, {}),
            label: "Edit",
            "aria-label": "Edit selected tool",
            onPress: p,
            tooltip: "Edit selected tool",
            isDisabled: r.length === 0
          }
        ),
        /* @__PURE__ */ y.jsx(
          Ye,
          {
            icon: /* @__PURE__ */ y.jsx(wa, {}),
            label: "Delete",
            "aria-label": "Delete selected tool",
            onPress: v,
            tooltip: "Delete selected tool",
            isDisabled: r.length === 0
          }
        )
      ] })
    }
  ) }) });
}, Ad = {
  isValidModel: !0,
  isValidEntity: !0,
  isValidUserPrompt: !0,
  showCreateVariablesInfo: !1,
  missingAttributes: [],
  unusedAttributes: []
}, Md = ({ loadedAgent: t, studioPro: e, updateStudioProDocument: l }) => {
  const [i, n] = f.useState(!1), [o, r] = f.useState(Ad), [u, s] = f.useState(void 0), [a, d] = f.useState(t), [c, h] = f.useState(!1), [p, v] = f.useState(!1), [b, g] = f.useState(/* @__PURE__ */ new Map()), m = f.useRef(null);
  f.useEffect(() => {
    N(t).then((E) => r(E)), z(e, t.entity).then((E) => s(E)), d(t), n(!0);
  }, []), f.useEffect(() => {
    i && (async () => {
      const A = await z(e, a.entity);
      s(A);
    })();
  }, [e, a.entity]), f.useEffect(() => {
    i && (async () => {
      if (a.tools && a.tools.length > 0) {
        const A = /* @__PURE__ */ new Map();
        a.tools.forEach((H) => {
          H.microflow && A.set(H.id, "syncing");
        }), g(A);
        const F = await Promise.all(
          a.tools.map(async (H) => {
            if (H.microflow) {
              const q = await dr(e, H.microflow);
              return {
                id: H.id,
                state: q ? "valid" : "invalid"
              };
            }
            return { id: H.id, state: "valid" };
          })
        ), O = new Map(F.map((H) => [H.id, H.state]));
        g(O);
      }
    })();
  }, [i]);
  const C = f.useRef(/* @__PURE__ */ new Map());
  f.useEffect(() => {
    if (i && a.tools) {
      const E = C.current, A = /* @__PURE__ */ new Map();
      a.tools.forEach((F) => {
        F.microflow && A.set(F.id, F.microflow);
      }), g((F) => {
        var H;
        const O = new Map(F);
        return (H = a.tools) == null || H.forEach((q) => {
          if (!F.has(q.id))
            O.set(q.id, "valid");
          else {
            const se = E.get(q.id), de = A.get(q.id);
            se !== void 0 && de !== void 0 && se !== de && O.set(q.id, "valid");
          }
        }), O;
      }), C.current = A;
    }
  }, [a.tools]), f.useEffect(() => {
    i && (async () => {
      const A = await N(a);
      r(A);
    })();
  }, [e, a]);
  const $ = f.useMemo(
    () => Ao(a.variables),
    [a.variables]
  ), x = f.useCallback((E) => (A) => {
    const F = { ...a, [E]: A };
    d(F), m.current && clearTimeout(m.current), m.current = setTimeout(async () => {
      const O = await ha(e, E, F, l, A);
      d(O);
    }, 300);
  }, [e, a]), w = f.useCallback(async () => {
    const E = await fa(e, a, l);
    E && d(E);
  }, [e, a]), D = f.useCallback(async () => {
    const E = await pa(e, a, l);
    E && d(E);
  }, [e, a]), S = f.useCallback(async () => {
    a.modelQualifiedName && va(e, a.modelQualifiedName);
  }, [e, a]), R = f.useCallback(async () => {
    Mo(e, a.entity);
  }, [e, a]), B = f.useCallback(async () => {
    const E = await ma(e, Mt, a, l);
    E && d(E);
  }, [e, a]), z = f.useCallback(async (E, A) => {
    if (!A)
      return;
    const F = await To(E, A);
    if (!F)
      return;
    const O = await Fo(F, E);
    if (O !== void 0)
      return O ? /* @__PURE__ */ y.jsx(ra, {}) : /* @__PURE__ */ y.jsx(ca, {});
  }, [e, a.entity]), K = f.useMemo(() => {
    let E = "";
    return a.maxTokens !== void 0 && (E += "Max tokens: " + a.maxTokens.toLocaleString(navigator.language)), a.temperature !== void 0 && (E.length > 0 && (E += ", "), E += "Temperature: " + a.temperature.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), a.topP !== void 0 && (E.length > 0 && (E += ", "), E += "Top P: " + a.topP.toLocaleString(navigator.language, { minimumFractionDigits: 1, maximumFractionDigits: 2 })), E;
  }, [a.temperature, a.maxTokens, a.topP]), N = async (E) => ({
    isValidModel: await Ue("modelQualifiedName", e, E),
    isValidEntity: await Ue("entity", e, E),
    isValidUserPrompt: await Ue("userPrompt", e, E),
    showCreateVariablesInfo: E.variables.length === 0,
    missingAttributes: await Vo(e, E),
    unusedAttributes: await Ko(e, E)
  });
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(At, { children: [
      /* @__PURE__ */ y.jsx(Re, { label: "System prompt", children: /* @__PURE__ */ y.jsx(
        Tt,
        {
          ariaLabel: "System prompt",
          value: a.systemPrompt,
          onChange: x("systemPrompt"),
          highlightRules: $
        }
      ) }),
      /* @__PURE__ */ y.jsx(Re, { label: "User prompt", children: /* @__PURE__ */ y.jsx(
        Tt,
        {
          ariaLabel: "User prompt",
          value: a.userPrompt || "",
          onChange: x("userPrompt"),
          highlightRules: $,
          validate: () => o.isValidUserPrompt
        }
      ) }),
      /* @__PURE__ */ y.jsx(
        Rd,
        {
          agent: a,
          studioPro: e,
          componentName: Mt,
          updateStudioProDocument: l,
          onAgentChange: d,
          toolValidations: b
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(At, { children: /* @__PURE__ */ y.jsxs(Re, { label: "General", children: [
      /* @__PURE__ */ y.jsx(
        Oe,
        {
          ariaLabel: "Model",
          label: "Model",
          value: a.modelQualifiedName ? a.modelQualifiedName : "",
          icon: a.modelQualifiedName ? hr : void 0,
          buttonCaption: "Select...",
          onClick: D,
          validate: () => o.isValidModel,
          buttonCaptionSecondary: a.modelQualifiedName ? "Show" : void 0,
          onClickSecondary: a.modelQualifiedName ? S : void 0
        }
      ),
      /* @__PURE__ */ y.jsx(
        Oe,
        {
          ariaLabel: "Settings",
          label: "Model settings",
          value: K,
          buttonCaption: "Edit",
          onClick: B,
          validate: void 0
        }
      ),
      /* @__PURE__ */ y.jsx(
        ar,
        {
          label: "Documentation",
          "aria-label": "Documentation",
          value: a.description,
          onChange: x("description"),
          rows: 3
        }
      ),
      /* @__PURE__ */ y.jsx(
        Oe,
        {
          ariaLabel: "Entity",
          label: "Entity",
          value: a.entity,
          icon: u,
          onClick: w,
          buttonCaption: "Select...",
          validate: () => o.isValidEntity,
          buttonCaptionSecondary: a.entity ? "Show" : void 0,
          onClickSecondary: a.entity ? R : void 0
        }
      ),
      o.showCreateVariablesInfo && o.unusedAttributes.length === 0 && !p && /* @__PURE__ */ y.jsx(
        Ft,
        {
          onClose: () => v(!0),
          children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt."
        }
      ),
      o.missingAttributes.length > 0 && /* @__PURE__ */ y.jsxs(cr, { children: [
        /* @__PURE__ */ y.jsx("span", { children: "The following attributes cannot be found on the selected entity:" }),
        /* @__PURE__ */ y.jsx("ul", { children: o.missingAttributes.map((E) => /* @__PURE__ */ y.jsx("li", { children: E }, E)) })
      ] }),
      o.unusedAttributes.length > 0 && !c && /* @__PURE__ */ y.jsxs(
        Ft,
        {
          onClose: () => h(!0),
          children: [
            o.showCreateVariablesInfo && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
              /* @__PURE__ */ y.jsx("span", { children: "Create variables: Enclose a word or text in double curly brackets. For example, you can write {{Language}} in the system or user prompt." }),
              /* @__PURE__ */ y.jsx("br", {})
            ] }),
            /* @__PURE__ */ y.jsx("span", { children: "The following attributes are found on the selected entity, but are not used in the prompt:" }),
            /* @__PURE__ */ y.jsx("ul", { children: o.unusedAttributes.map((E) => /* @__PURE__ */ y.jsx("li", { children: E }, E)) })
          ]
        }
      )
    ] }) })
  ] });
}, Td = No(), Fd = ({ studioPro: t, documentId: e }) => {
  const l = t.ui.messageBoxes, i = t.app.model.customBlobDocuments, [n, o] = f.useState(!1), [r, u] = f.useState(Td);
  return f.useEffect(() => {
    i.getDocumentById(e).then(async (s) => {
      if (s && !("error" in s)) {
        const a = s.document.contents;
        o(!0), u(a);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch((s) => {
      l.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s), o(!0);
    });
  }, []), /* @__PURE__ */ y.jsx(So, { studioPro: t, children: /* @__PURE__ */ y.jsxs(Eo, { children: [
    !n && /* @__PURE__ */ y.jsx(ta, {}),
    n && /* @__PURE__ */ y.jsx(zo, { children: /* @__PURE__ */ y.jsx(
      Md,
      {
        loadedAgent: r,
        studioPro: t,
        updateStudioProDocument: Ho(t, e)
      }
    ) })
  ] }) });
}, Ud = Bo(Fd);
export {
  Ud as component
};
//# sourceMappingURL=agentEdit.js.map
