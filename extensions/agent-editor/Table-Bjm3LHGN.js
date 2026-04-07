import { a4 as Q, r as p, a5 as xo, a6 as le, a7 as Co, a8 as wo, a9 as he, aa as Le, ab as _, ac as Bt, ad as It, ae as ye, c as L, b as N, af as Pt, ag as X, ah as Do, ai as re, aj as ko, ak as So, u as w, al as $e, d as Eo, f as zo, am as Ee, $ as Rt, a as Bo, an as bt, ao as Io, ap as Po, aq as Ro, h as Ao, e as Mo, ar as Ko, j as Ie, l as At, t as Y, as as Xe, m as To, q as ie, at as Fo, p as No, au as Ze, av as xe, aw as Mt, ax as Ge, ay as Ho, az as Vo, aA as jo, n as ne, aB as Lo, s as Ce, k as Kt, aC as yt, aD as Pe, aE as Wo, aF as Oo, aG as Uo, aH as $t, o as Yo, aI as qo, aJ as Xo, aK as Zo, aL as He, y as R, aM as me, w as S, aN as Go, aO as Jo, E as Qo, aP as _o, aQ as ze, aR as en, aS as tn, aT as ln, aU as Tt, x as Ft } from "./Icon-DQcqUu4m.js";
import { $ as T, a as J, b as ee, c as Se, d as on, e as Nt, f as Re, g as Je, h as nn, i as Ht, j as ae, k as Vt, l as un, m as rn, n as an, o as jt, p as sn, q as dn, r as Lt, s as cn, t as hn, u as Qe, v as fn, w as we, x as U, y as fe, z as pn, A as vn, B as _e, C as mn, D as gn, E as bn, F as yn, G as $n, H as Wt, J as xn, K as Cn, L as wn, M as Dn, _ as We } from "./ComboBox-BPEc6pgM.js";
import { r as A } from "./userPreferences-CMksV11G.js";
function kn(t = {}) {
  let { locale: e } = Q();
  return p.useMemo(() => new Intl.ListFormat(e, t), [
    e,
    t
  ]);
}
function Sn(t) {
  let { onMoveStart: e, onMove: l, onMoveEnd: i } = t, o = p.useRef({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: n, removeGlobalListener: u } = xo(), r = le((d, c, h, f) => {
    h === 0 && f === 0 || (o.current.didMove || (o.current.didMove = !0, e == null || e({
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
      deltaY: f,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  }), a = le((d, c) => {
    Co(), o.current.didMove && (i == null || i({
      type: "moveend",
      pointerType: c,
      shiftKey: d.shiftKey,
      metaKey: d.metaKey,
      ctrlKey: d.ctrlKey,
      altKey: d.altKey
    }));
  });
  return {
    moveProps: p.useMemo(() => {
      let d = {}, c = () => {
        wo(), o.current.didMove = !1;
      };
      if (typeof PointerEvent > "u" && process.env.NODE_ENV === "test") {
        let f = (g) => {
          if (g.button === 0) {
            var C, y, $, x;
            r(g, "mouse", g.pageX - (($ = (C = o.current.lastPosition) === null || C === void 0 ? void 0 : C.pageX) !== null && $ !== void 0 ? $ : 0), g.pageY - ((x = (y = o.current.lastPosition) === null || y === void 0 ? void 0 : y.pageY) !== null && x !== void 0 ? x : 0)), o.current.lastPosition = {
              pageX: g.pageX,
              pageY: g.pageY
            };
          }
        }, v = (g) => {
          g.button === 0 && (a(g, "mouse"), u(window, "mousemove", f, !1), u(window, "mouseup", v, !1));
        };
        d.onMouseDown = (g) => {
          g.button === 0 && (c(), g.stopPropagation(), g.preventDefault(), o.current.lastPosition = {
            pageX: g.pageX,
            pageY: g.pageY
          }, n(window, "mousemove", f, !1), n(window, "mouseup", v, !1));
        };
        let m = (g) => {
          let C = [
            ...g.changedTouches
          ].findIndex(({ identifier: k }) => k === o.current.id);
          if (C >= 0) {
            var y, $;
            let { pageX: k, pageY: P } = g.changedTouches[C];
            var x, D;
            r(g, "touch", k - ((x = (y = o.current.lastPosition) === null || y === void 0 ? void 0 : y.pageX) !== null && x !== void 0 ? x : 0), P - ((D = ($ = o.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageY) !== null && D !== void 0 ? D : 0)), o.current.lastPosition = {
              pageX: k,
              pageY: P
            };
          }
        }, b = (g) => {
          [
            ...g.changedTouches
          ].findIndex(({ identifier: y }) => y === o.current.id) >= 0 && (a(g, "touch"), o.current.id = null, u(window, "touchmove", m), u(window, "touchend", b), u(window, "touchcancel", b));
        };
        d.onTouchStart = (g) => {
          if (g.changedTouches.length === 0 || o.current.id != null) return;
          let { pageX: C, pageY: y, identifier: $ } = g.changedTouches[0];
          c(), g.stopPropagation(), g.preventDefault(), o.current.lastPosition = {
            pageX: C,
            pageY: y
          }, o.current.id = $, n(window, "touchmove", m, !1), n(window, "touchend", b, !1), n(window, "touchcancel", b, !1);
        };
      } else {
        let f = (m) => {
          if (m.pointerId === o.current.id) {
            var b, g;
            let $ = m.pointerType || "mouse";
            var C, y;
            r(m, $, m.pageX - ((C = (b = o.current.lastPosition) === null || b === void 0 ? void 0 : b.pageX) !== null && C !== void 0 ? C : 0), m.pageY - ((y = (g = o.current.lastPosition) === null || g === void 0 ? void 0 : g.pageY) !== null && y !== void 0 ? y : 0)), o.current.lastPosition = {
              pageX: m.pageX,
              pageY: m.pageY
            };
          }
        }, v = (m) => {
          if (m.pointerId === o.current.id) {
            let b = m.pointerType || "mouse";
            a(m, b), o.current.id = null, u(window, "pointermove", f, !1), u(window, "pointerup", v, !1), u(window, "pointercancel", v, !1);
          }
        };
        d.onPointerDown = (m) => {
          m.button === 0 && o.current.id == null && (c(), m.stopPropagation(), m.preventDefault(), o.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          }, o.current.id = m.pointerId, n(window, "pointermove", f, !1), n(window, "pointerup", v, !1), n(window, "pointercancel", v, !1));
        };
      }
      let h = (f, v, m) => {
        c(), r(f, "keyboard", v, m), a(f, "keyboard");
      };
      return d.onKeyDown = (f) => {
        switch (f.key) {
          case "Left":
          case "ArrowLeft":
            f.preventDefault(), f.stopPropagation(), h(f, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            f.preventDefault(), f.stopPropagation(), h(f, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            f.preventDefault(), f.stopPropagation(), h(f, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            f.preventDefault(), f.stopPropagation(), h(f, 0, 1);
            break;
        }
      }, d;
    }, [
      o,
      n,
      u,
      r,
      a
    ])
  };
}
function En(t, e) {
  let l = e == null ? void 0 : e.isDisabled, [i, o] = p.useState(!1);
  return he(() => {
    if (t != null && t.current && !l) {
      let n = () => {
        if (t.current) {
          let r = Le(t.current, {
            tabbable: !0
          });
          o(!!r.nextNode());
        }
      };
      n();
      let u = new MutationObserver(n);
      return u.observe(t.current, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      }), () => {
        u.disconnect();
      };
    }
  }), l ? !1 : i;
}
class Ot {
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
      let o = this.collection.getItem(i);
      if (!o) return null;
      if (!this.isDisabled(o) && (!l || l(o))) return i;
      i = this.collection.getKeyBefore(i);
    }
    return null;
  }
  findNextKey(e, l) {
    let i = e != null ? this.collection.getKeyAfter(e) : this.collection.getFirstKey();
    for (; i != null; ) {
      let o = this.collection.getItem(i);
      if (!o) return null;
      if (!this.isDisabled(o) && (!l || l(o))) return i;
      if (i = this.collection.getKeyAfter(i), i == null) return null;
    }
    return null;
  }
  getKeyForItemInRowByIndex(e, l = 0) {
    if (l < 0) return null;
    let i = this.collection.getItem(e);
    if (!i) return null;
    let o = 0;
    for (let r of T(i, this.collection)) {
      var n;
      if (r.colSpan && r.colSpan + o > l) return (n = r.key) !== null && n !== void 0 ? n : null;
      r.colSpan && (o = o + r.colSpan - 1);
      var u;
      if (o === l) return (u = r.key) !== null && u !== void 0 ? u : null;
      o++;
    }
    return null;
  }
  getKeyBelow(e) {
    let l = e, i = this.collection.getItem(l);
    if (!i) return null;
    var o;
    if (this.isCell(i) && (l = (o = i.parentKey) !== null && o !== void 0 ? o : null), l == null) return null;
    if (l = this.findNextKey(l, (n) => n.type === "item"), l != null) {
      if (this.isCell(i)) {
        let n = i.colIndex ? i.colIndex : i.index;
        return this.getKeyForItemInRowByIndex(l, n);
      }
      if (this.focusMode === "row") return l;
    }
    return null;
  }
  getKeyAbove(e) {
    let l = e, i = this.collection.getItem(l);
    if (!i) return null;
    var o;
    if (this.isCell(i) && (l = (o = i.parentKey) !== null && o !== void 0 ? o : null), l == null) return null;
    if (l = this.findPreviousKey(l, (n) => n.type === "item"), l != null) {
      if (this.isCell(i)) {
        let n = i.colIndex ? i.colIndex : i.index;
        return this.getKeyForItemInRowByIndex(l, n);
      }
      if (this.focusMode === "row") return l;
    }
    return null;
  }
  getKeyRightOf(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (this.isRow(l)) {
      var i, o;
      let d = T(l, this.collection);
      var n;
      return (n = this.direction === "rtl" ? (i = J(d)) === null || i === void 0 ? void 0 : i.key : (o = ee(d)) === null || o === void 0 ? void 0 : o.key) !== null && n !== void 0 ? n : null;
    }
    if (this.isCell(l) && l.parentKey != null) {
      let d = this.collection.getItem(l.parentKey);
      if (!d) return null;
      let c = T(d, this.collection);
      var u;
      let h = (u = this.direction === "rtl" ? Se(c, l.index - 1) : Se(c, l.index + 1)) !== null && u !== void 0 ? u : null;
      var r;
      if (h) return (r = h.key) !== null && r !== void 0 ? r : null;
      var a;
      if (this.focusMode === "row") return (a = l.parentKey) !== null && a !== void 0 ? a : null;
      var s;
      return (s = this.direction === "rtl" ? this.getFirstKey(e) : this.getLastKey(e)) !== null && s !== void 0 ? s : null;
    }
    return null;
  }
  getKeyLeftOf(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (this.isRow(l)) {
      var i, o;
      let d = T(l, this.collection);
      var n;
      return (n = this.direction === "rtl" ? (i = ee(d)) === null || i === void 0 ? void 0 : i.key : (o = J(d)) === null || o === void 0 ? void 0 : o.key) !== null && n !== void 0 ? n : null;
    }
    if (this.isCell(l) && l.parentKey != null) {
      let d = this.collection.getItem(l.parentKey);
      if (!d) return null;
      let c = T(d, this.collection);
      var u;
      let h = (u = this.direction === "rtl" ? Se(c, l.index + 1) : Se(c, l.index - 1)) !== null && u !== void 0 ? u : null;
      var r;
      if (h) return (r = h.key) !== null && r !== void 0 ? r : null;
      var a;
      if (this.focusMode === "row") return (a = l.parentKey) !== null && a !== void 0 ? a : null;
      var s;
      return (s = this.direction === "rtl" ? this.getLastKey(e) : this.getFirstKey(e)) !== null && s !== void 0 ? s : null;
    }
    return null;
  }
  getFirstKey(e, l) {
    let i = e ?? null, o;
    if (i != null) {
      if (o = this.collection.getItem(i), !o) return null;
      if (this.isCell(o) && !l && o.parentKey != null) {
        var n;
        let s = this.collection.getItem(o.parentKey);
        if (!s) return null;
        var u;
        return (u = (n = ee(T(s, this.collection))) === null || n === void 0 ? void 0 : n.key) !== null && u !== void 0 ? u : null;
      }
    }
    if (i = this.findNextKey(void 0, (s) => s.type === "item"), i != null && (o && this.isCell(o) && l || this.focusMode === "cell")) {
      var r;
      let s = this.collection.getItem(i);
      if (!s) return null;
      var a;
      i = (a = (r = ee(T(s, this.collection))) === null || r === void 0 ? void 0 : r.key) !== null && a !== void 0 ? a : null;
    }
    return i;
  }
  getLastKey(e, l) {
    let i = e ?? null, o;
    if (i != null) {
      if (o = this.collection.getItem(i), !o) return null;
      if (this.isCell(o) && !l && o.parentKey != null) {
        var n;
        let s = this.collection.getItem(o.parentKey);
        if (!s) return null;
        let d = T(s, this.collection);
        var u;
        return (u = (n = J(d)) === null || n === void 0 ? void 0 : n.key) !== null && u !== void 0 ? u : null;
      }
    }
    if (i = this.findPreviousKey(void 0, (s) => s.type === "item"), i != null && (o && this.isCell(o) && l || this.focusMode === "cell")) {
      var r;
      let s = this.collection.getItem(i);
      if (!s) return null;
      let d = T(s, this.collection);
      var a;
      i = (a = (r = J(d)) === null || r === void 0 ? void 0 : r.key) !== null && a !== void 0 ? a : null;
    }
    return i;
  }
  getKeyPageAbove(e) {
    let l = e, i = this.layoutDelegate.getItemRect(l);
    if (!i) return null;
    let o = Math.max(0, i.y + i.height - this.layoutDelegate.getVisibleRect().height);
    for (; i && i.y > o && l != null; ) {
      var n;
      if (l = (n = this.getKeyAbove(l)) !== null && n !== void 0 ? n : null, l == null) break;
      i = this.layoutDelegate.getItemRect(l);
    }
    return l;
  }
  getKeyPageBelow(e) {
    let l = e, i = this.layoutDelegate.getItemRect(l);
    if (!i) return null;
    let o = this.layoutDelegate.getVisibleRect().height, n = Math.min(this.layoutDelegate.getContentSize().height, i.y + o);
    for (; i && i.y + i.height < n; ) {
      let u = this.getKeyBelow(l);
      if (u == null) break;
      i = this.layoutDelegate.getItemRect(u), l = u;
    }
    return l;
  }
  getKeyForSearch(e, l) {
    let i = l ?? null;
    if (!this.collator) return null;
    let o = this.collection;
    if (i = l ?? this.getFirstKey(), i == null) return null;
    let n = o.getItem(i);
    if (!n) return null;
    var u;
    n.type === "cell" && (i = (u = n.parentKey) !== null && u !== void 0 ? u : null);
    let r = !1;
    for (; i != null; ) {
      let d = o.getItem(i);
      if (!d) return null;
      if (d.textValue) {
        let c = d.textValue.slice(0, e.length);
        if (this.collator.compare(c, e) === 0) {
          var a, s;
          return this.isRow(d) && this.focusMode === "cell" ? (s = (a = ee(T(d, this.collection))) === null || a === void 0 ? void 0 : a.key) !== null && s !== void 0 ? s : null : d.key;
        }
      }
      i = this.findNextKey(i, (c) => c.type === "item"), i == null && !r && (i = this.getFirstKey(), r = !0);
    }
    return null;
  }
  constructor(e) {
    if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || "all", this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw new Error("Either a layout or a ref must be specified.");
    this.layoutDelegate = e.layoutDelegate || (e.layout ? new zn(e.layout) : new on(e.ref));
    var l;
    this.focusMode = (l = e.focusMode) !== null && l !== void 0 ? l : "row";
  }
}
class zn {
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
const et = /* @__PURE__ */ new WeakMap();
var Ut = {};
Ut = {
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
var Yt = {};
Yt = {
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
var qt = {};
qt = {
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
var Xt = {};
Xt = {
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
var Zt = {};
Zt = {
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
var Gt = {};
Gt = {
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
var Jt = {};
Jt = {
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
var Qt = {};
Qt = {
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
var _t = {};
_t = {
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
var el = {};
el = {
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
var tl = {};
tl = {
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
var ll = {};
ll = {
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
var il = {};
il = {
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
var ol = {};
ol = {
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
var nl = {};
nl = {
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
var ul = {};
ul = {
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
var rl = {};
rl = {
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
var al = {};
al = {
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
var sl = {};
sl = {
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
var dl = {};
dl = {
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
var cl = {};
cl = {
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
var hl = {};
hl = {
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
var fl = {};
fl = {
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
var pl = {};
pl = {
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
var vl = {};
vl = {
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
var ml = {};
ml = {
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
var gl = {};
gl = {
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
var bl = {};
bl = {
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
var yl = {};
yl = {
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
var $l = {};
$l = {
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
var xl = {};
xl = {
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
var Cl = {};
Cl = {
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
var wl = {};
wl = {
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
var Dl = {};
Dl = {
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
var Ae = {};
Ae = {
  "ar-AE": Ut,
  "bg-BG": Yt,
  "cs-CZ": qt,
  "da-DK": Xt,
  "de-DE": Zt,
  "el-GR": Gt,
  "en-US": Jt,
  "es-ES": Qt,
  "et-EE": _t,
  "fi-FI": el,
  "fr-FR": tl,
  "he-IL": ll,
  "hr-HR": il,
  "hu-HU": ol,
  "it-IT": nl,
  "ja-JP": ul,
  "ko-KR": rl,
  "lt-LT": al,
  "lv-LV": sl,
  "nb-NO": dl,
  "nl-NL": cl,
  "pl-PL": hl,
  "pt-BR": fl,
  "pt-PT": pl,
  "ro-RO": vl,
  "ru-RU": ml,
  "sk-SK": gl,
  "sl-SI": bl,
  "sr-SP": yl,
  "sv-SE": $l,
  "tr-TR": xl,
  "uk-UA": Cl,
  "zh-CN": wl,
  "zh-TW": Dl
};
function Bn(t) {
  return t && t.__esModule ? t.default : t;
}
function In(t, e) {
  let { getRowText: l = (r) => {
    var a, s, d, c;
    return (c = (a = (s = e.collection).getTextValue) === null || a === void 0 ? void 0 : a.call(s, r)) !== null && c !== void 0 ? c : (d = e.collection.getItem(r)) === null || d === void 0 ? void 0 : d.textValue;
  } } = t, i = _(Bn(Ae), "@react-aria/grid"), o = e.selectionManager.rawSelection, n = p.useRef(o), u = le(() => {
    var r;
    if (!e.selectionManager.isFocused || o === n.current) {
      n.current = o;
      return;
    }
    let a = xt(o, n.current), s = xt(n.current, o), d = e.selectionManager.selectionBehavior === "replace", c = [];
    if (e.selectionManager.selectedKeys.size === 1 && d) {
      let h = e.selectionManager.selectedKeys.keys().next().value;
      if (h != null && e.collection.getItem(h)) {
        let f = l(h);
        f && c.push(i.format("selectedItem", {
          item: f
        }));
      }
    } else if (a.size === 1 && s.size === 0) {
      let h = a.keys().next().value;
      if (h != null) {
        let f = l(h);
        f && c.push(i.format("selectedItem", {
          item: f
        }));
      }
    } else if (s.size === 1 && a.size === 0) {
      let h = s.keys().next().value;
      if (h != null && e.collection.getItem(h)) {
        let f = l(h);
        f && c.push(i.format("deselectedItem", {
          item: f
        }));
      }
    }
    e.selectionManager.selectionMode === "multiple" && (c.length === 0 || o === "all" || o.size > 1 || n.current === "all" || ((r = n.current) === null || r === void 0 ? void 0 : r.size) > 1) && c.push(o === "all" ? i.format("selectedAll") : i.format("selectedCount", {
      count: o.size
    })), c.length > 0 && Bt(c.join(" ")), n.current = o;
  });
  Nt(() => {
    if (e.selectionManager.isFocused) u();
    else {
      let r = requestAnimationFrame(u);
      return () => cancelAnimationFrame(r);
    }
  }, [
    o,
    e.selectionManager.isFocused
  ]);
}
function xt(t, e) {
  let l = /* @__PURE__ */ new Set();
  if (t === "all" || e === "all") return l;
  for (let i of t.keys()) e.has(i) || l.add(i);
  return l;
}
function Pn(t) {
  return t && t.__esModule ? t.default : t;
}
function Rn(t) {
  let e = _(Pn(Ae), "@react-aria/grid"), l = It(), i = (l === "pointer" || l === "virtual" || l == null) && typeof window < "u" && "ontouchstart" in window, o = p.useMemo(() => {
    let u = t.selectionManager.selectionMode, r = t.selectionManager.selectionBehavior, a;
    return i && (a = e.format("longPressToSelect")), r === "replace" && u !== "none" && t.hasItemActions ? a : void 0;
  }, [
    t.selectionManager.selectionMode,
    t.selectionManager.selectionBehavior,
    t.hasItemActions,
    e,
    i
  ]);
  return Re(o);
}
function An(t, e, l) {
  let { isVirtualized: i, disallowTypeAhead: o, keyboardDelegate: n, focusMode: u, scrollRef: r, getRowText: a, onRowAction: s, onCellAction: d, escapeKeyBehavior: c = "clearSelection", shouldSelectOnPressUp: h } = t, { selectionManager: f } = e;
  !t["aria-label"] && !t["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let v = Je({
    usage: "search",
    sensitivity: "base"
  }), { direction: m } = Q(), b = e.selectionManager.disabledBehavior, g = p.useMemo(() => n || new Ot({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: b,
    ref: l,
    direction: m,
    collator: v,
    focusMode: u
  }), [
    n,
    e.collection,
    e.disabledKeys,
    b,
    l,
    m,
    v,
    u
  ]), { collectionProps: C } = nn({
    ref: l,
    selectionManager: f,
    keyboardDelegate: g,
    isVirtualized: i,
    scrollRef: r,
    disallowTypeAhead: o,
    escapeKeyBehavior: c
  }), y = ye(t.id);
  et.set(e, {
    keyboardDelegate: g,
    actions: {
      onRowAction: s,
      onCellAction: d
    },
    shouldSelectOnPressUp: h
  });
  let $ = Rn({
    selectionManager: f,
    hasItemActions: !!(s || d)
  }), x = L(t, {
    labelable: !0
  }), D = p.useCallback((E) => {
    if (f.isFocused) {
      E.currentTarget.contains(E.target) || f.setFocused(!1);
      return;
    }
    E.currentTarget.contains(E.target) && f.setFocused(!0);
  }, [
    f
  ]), k = p.useMemo(() => ({
    onBlur: C.onBlur,
    onFocus: D
  }), [
    D,
    C.onBlur
  ]), P = En(l, {
    isDisabled: e.collection.size !== 0
  }), z = N(
    x,
    {
      role: "grid",
      id: y,
      "aria-multiselectable": f.selectionMode === "multiple" ? "true" : void 0
    },
    e.isKeyboardNavigationDisabled ? k : C,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    e.collection.size === 0 && {
      tabIndex: P ? -1 : 0
    } || void 0,
    $
  );
  return i && (z["aria-rowcount"] = e.collection.size, z["aria-colcount"] = e.collection.columnCount), In({
    getRowText: a
  }, e), {
    gridProps: z
  };
}
function Mn() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function Kn(t, e, l) {
  var i, o;
  let { node: n, isVirtualized: u, shouldSelectOnPressUp: r, onAction: a } = t, { actions: s, shouldSelectOnPressUp: d } = et.get(e), c = s.onRowAction ? () => {
    var b;
    return (b = s.onRowAction) === null || b === void 0 ? void 0 : b.call(s, n.key);
  } : a, { itemProps: h, ...f } = Ht({
    selectionManager: e.selectionManager,
    key: n.key,
    ref: l,
    isVirtualized: u,
    shouldSelectOnPressUp: d || r,
    onAction: c || !(n == null || (i = n.props) === null || i === void 0) && i.onAction ? Pt(n == null || (o = n.props) === null || o === void 0 ? void 0 : o.onAction, c) : void 0,
    isDisabled: e.collection.size === 0
  }), v = e.selectionManager.isSelected(n.key), m = {
    role: "row",
    "aria-selected": e.selectionManager.selectionMode !== "none" ? v : void 0,
    "aria-disabled": f.isDisabled || void 0,
    ...h
  };
  return u && (m["aria-rowindex"] = n.index + 1), {
    rowProps: m,
    ...f
  };
}
function kl(t, e, l) {
  let { node: i, isVirtualized: o, focusMode: n = "child", shouldSelectOnPressUp: u, onAction: r } = t, { direction: a } = Q(), { keyboardDelegate: s, actions: { onCellAction: d } } = et.get(e), c = p.useRef(null), h = () => {
    if (l.current) {
      let y = Le(l.current);
      if (n === "child") {
        if (l.current.contains(document.activeElement) && l.current !== document.activeElement) return;
        let $ = e.selectionManager.childFocusStrategy === "last" ? Ve(y) : y.firstChild();
        if ($) {
          X($);
          return;
        }
      }
      (c.current != null && i.key !== c.current || !l.current.contains(document.activeElement)) && X(l.current);
    }
  }, { itemProps: f, isPressed: v } = Ht({
    selectionManager: e.selectionManager,
    key: i.key,
    ref: l,
    isVirtualized: o,
    focus: h,
    shouldSelectOnPressUp: u,
    onAction: d ? () => d(i.key) : r,
    isDisabled: e.collection.size === 0
  }), m = (y) => {
    if (!y.currentTarget.contains(y.target) || e.isKeyboardNavigationDisabled || !l.current || !document.activeElement) return;
    let $ = Le(l.current);
    switch ($.currentNode = document.activeElement, y.key) {
      case "ArrowLeft": {
        let E = a === "rtl" ? $.nextNode() : $.previousNode();
        if (n === "child" && E === l.current && (E = null), y.preventDefault(), y.stopPropagation(), E)
          X(E), ae(E, {
            containingElement: re(l.current)
          });
        else {
          var x;
          if (((x = s.getKeyLeftOf) === null || x === void 0 ? void 0 : x.call(s, i.key)) !== i.key) {
            var D;
            (D = l.current.parentElement) === null || D === void 0 || D.dispatchEvent(new KeyboardEvent(y.nativeEvent.type, y.nativeEvent));
            break;
          }
          n === "cell" && a === "rtl" ? (X(l.current), ae(l.current, {
            containingElement: re(l.current)
          })) : ($.currentNode = l.current, E = a === "rtl" ? $.firstChild() : Ve($), E && (X(E), ae(E, {
            containingElement: re(l.current)
          })));
        }
        break;
      }
      case "ArrowRight": {
        let E = a === "rtl" ? $.previousNode() : $.nextNode();
        if (n === "child" && E === l.current && (E = null), y.preventDefault(), y.stopPropagation(), E)
          X(E), ae(E, {
            containingElement: re(l.current)
          });
        else {
          var k;
          if (((k = s.getKeyRightOf) === null || k === void 0 ? void 0 : k.call(s, i.key)) !== i.key) {
            var P;
            (P = l.current.parentElement) === null || P === void 0 || P.dispatchEvent(new KeyboardEvent(y.nativeEvent.type, y.nativeEvent));
            break;
          }
          n === "cell" && a === "ltr" ? (X(l.current), ae(l.current, {
            containingElement: re(l.current)
          })) : ($.currentNode = l.current, E = a === "rtl" ? Ve($) : $.firstChild(), E && (X(E), ae(E, {
            containingElement: re(l.current)
          })));
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (!y.altKey && l.current.contains(y.target)) {
          var z;
          y.stopPropagation(), y.preventDefault(), (z = l.current.parentElement) === null || z === void 0 || z.dispatchEvent(new KeyboardEvent(y.nativeEvent.type, y.nativeEvent));
        }
        break;
    }
  }, b = (y) => {
    if (c.current = i.key, y.target !== l.current) {
      Do() || e.selectionManager.setFocusedKey(i.key);
      return;
    }
    requestAnimationFrame(() => {
      n === "child" && document.activeElement === l.current && h();
    });
  }, g = N(f, {
    role: "gridcell",
    onKeyDownCapture: m,
    "aria-colspan": i.colSpan,
    "aria-colindex": i.colIndex != null ? i.colIndex + 1 : void 0,
    colSpan: o ? void 0 : i.colSpan,
    onFocus: b
  });
  var C;
  return o && (g["aria-colindex"] = ((C = i.colIndex) !== null && C !== void 0 ? C : i.index) + 1), u && g.tabIndex != null && g.onPointerDown == null && (g.onPointerDown = (y) => {
    let $ = y.currentTarget, x = $.getAttribute("tabindex");
    $.removeAttribute("tabindex"), requestAnimationFrame(() => {
      x != null && $.setAttribute("tabindex", x);
    });
  }), {
    gridCellProps: g,
    isPressed: v
  };
}
function Ve(t) {
  let e = null, l = null;
  do
    l = t.lastChild(), l && (e = l);
  while (l);
  return e;
}
function Tn(t) {
  return t && t.__esModule ? t.default : t;
}
function Fn(t, e) {
  let { key: l } = t, i = e.selectionManager, o = ye(), n = !e.selectionManager.canSelectItem(l), u = e.selectionManager.isSelected(l), r = () => i.toggleSelection(l);
  const a = _(Tn(Ae), "@react-aria/grid");
  return {
    checkboxProps: {
      id: o,
      "aria-label": a.format("select"),
      isSelected: u,
      isDisabled: n,
      onChange: r
    }
  };
}
const tt = /* @__PURE__ */ new WeakMap();
function Nn(t, e, l) {
  let { keyboardDelegate: i, isDisabled: o, isRequired: n, name: u, form: r, validationBehavior: a = "aria" } = t, s = Je({
    usage: "search",
    sensitivity: "base"
  }), d = p.useMemo(() => i || new Vt(e.collection, e.disabledKeys, l, s), [
    i,
    e.collection,
    e.disabledKeys,
    s,
    l
  ]), { menuTriggerProps: c, menuProps: h } = un({
    isDisabled: o,
    type: "listbox"
  }, e, l), f = (z) => {
    if (e.selectionManager.selectionMode !== "multiple")
      switch (z.key) {
        case "ArrowLeft": {
          var E, K;
          z.preventDefault();
          let j = e.selectedKey != null ? (E = d.getKeyAbove) === null || E === void 0 ? void 0 : E.call(d, e.selectedKey) : (K = d.getFirstKey) === null || K === void 0 ? void 0 : K.call(d);
          j && e.setSelectedKey(j);
          break;
        }
        case "ArrowRight": {
          var F, H;
          z.preventDefault();
          let j = e.selectedKey != null ? (F = d.getKeyBelow) === null || F === void 0 ? void 0 : F.call(d, e.selectedKey) : (H = d.getFirstKey) === null || H === void 0 ? void 0 : H.call(d);
          j && e.setSelectedKey(j);
          break;
        }
      }
  }, { typeSelectProps: v } = rn({
    keyboardDelegate: d,
    selectionManager: e.selectionManager,
    onTypeSelect(z) {
      e.setSelectedKey(z);
    }
  }), { isInvalid: m, validationErrors: b, validationDetails: g } = e.displayValidation, { labelProps: C, fieldProps: y, descriptionProps: $, errorMessageProps: x } = ko({
    ...t,
    labelElementType: "span",
    isInvalid: m,
    errorMessage: t.errorMessage || b
  });
  v.onKeyDown = v.onKeyDownCapture, delete v.onKeyDownCapture, e.selectionManager.selectionMode === "multiple" && (v = {});
  let D = L(t, {
    labelable: !0
  }), k = N(v, c, y), P = ye();
  return tt.set(e, {
    isDisabled: o,
    isRequired: n,
    name: u,
    form: r,
    validationBehavior: a
  }), {
    labelProps: {
      ...C,
      onClick: () => {
        if (!t.isDisabled) {
          var z;
          (z = l.current) === null || z === void 0 || z.focus(), So("keyboard");
        }
      }
    },
    triggerProps: N(D, {
      ...k,
      isDisabled: o,
      onKeyDown: Pt(k.onKeyDown, f, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        P,
        k["aria-labelledby"],
        k["aria-label"] && !k["aria-labelledby"] ? k.id : null
      ].filter(Boolean).join(" "),
      onFocus(z) {
        e.isFocused || (t.onFocus && t.onFocus(z), t.onFocusChange && t.onFocusChange(!0), e.setFocused(!0));
      },
      onBlur(z) {
        e.isOpen || (t.onBlur && t.onBlur(z), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      }
    }),
    valueProps: {
      id: P
    },
    menuProps: {
      ...h,
      autoFocus: e.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (z) => {
        z.currentTarget.contains(z.relatedTarget) || (t.onBlur && t.onBlur(z), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      },
      "aria-labelledby": [
        y["aria-labelledby"],
        k["aria-label"] && !y["aria-labelledby"] ? k.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: $,
    errorMessageProps: x,
    isInvalid: m,
    validationErrors: b,
    validationDetails: g,
    hiddenSelectProps: {
      isDisabled: o,
      name: u,
      label: t.label,
      state: e,
      triggerRef: l,
      form: r
    }
  };
}
function Hn(t, e, l) {
  let i = tt.get(e) || {}, { autoComplete: o, name: n = i.name, form: u = i.form, isDisabled: r = i.isDisabled } = t, { validationBehavior: a, isRequired: s } = i, { visuallyHiddenProps: d } = $e({
    style: {
      // Prevent page scrolling.
      position: "fixed",
      top: 0,
      left: 0
    }
  });
  Eo(t.selectRef, e.defaultValue, e.setValue), zo({
    validationBehavior: a,
    focus: () => {
      var v;
      return (v = l.current) === null || v === void 0 ? void 0 : v.focus();
    }
  }, e, t.selectRef);
  let c = e.setValue, h = p.useCallback((v) => {
    v.target.multiple ? c(Array.from(v.target.selectedOptions, (m) => m.value)) : c(v.currentTarget.value);
  }, [
    c
  ]);
  var f;
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
      autoComplete: o,
      disabled: r,
      multiple: e.selectionManager.selectionMode === "multiple",
      required: a === "native" && s,
      name: n,
      form: u,
      value: (f = e.value) !== null && f !== void 0 ? f : "",
      onChange: h,
      onInput: h
    }
  };
}
function Vn(t) {
  let { state: e, triggerRef: l, label: i, name: o, form: n, isDisabled: u } = t, r = p.useRef(null), a = p.useRef(null), { containerProps: s, selectProps: d } = Hn({
    ...t,
    selectRef: e.collection.size <= 300 ? r : a
  }, e, l);
  if (e.collection.size <= 300) return /* @__PURE__ */ w.createElement("div", {
    ...s,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ w.createElement("label", null, i, /* @__PURE__ */ w.createElement("select", {
    ...d,
    ref: r
  }, /* @__PURE__ */ w.createElement("option", null), [
    ...e.collection.getKeys()
  ].map((c) => {
    let h = e.collection.getItem(c);
    if (h && h.type === "item") return /* @__PURE__ */ w.createElement("option", {
      key: h.key,
      value: h.key
    }, h.textValue);
  }))));
  if (o) {
    let c = tt.get(e) || {}, { validationBehavior: h } = c, f = Array.isArray(e.value) ? e.value : [
      e.value
    ];
    f.length === 0 && (f = [
      null
    ]);
    let v = f.map((m, b) => {
      let g = {
        type: "hidden",
        autoComplete: d.autoComplete,
        name: o,
        form: n,
        disabled: u,
        value: m ?? ""
      };
      return h === "native" ? /* @__PURE__ */ w.createElement("input", {
        key: b,
        ...g,
        ref: b === 0 ? a : null,
        style: {
          display: "none"
        },
        type: "text",
        required: b === 0 ? d.required : !1,
        onChange: () => {
        }
      }) : /* @__PURE__ */ w.createElement("input", {
        key: b,
        ...g,
        ref: b === 0 ? a : null
      });
    });
    return /* @__PURE__ */ w.createElement(w.Fragment, null, v);
  }
  return null;
}
const lt = /* @__PURE__ */ new WeakMap();
function Oe(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function Sl(t, e) {
  let l = lt.get(t);
  if (!l) throw new Error("Unknown grid");
  return `${l}-${Oe(e)}`;
}
function El(t, e, l) {
  let i = lt.get(t);
  if (!i) throw new Error("Unknown grid");
  return `${i}-${Oe(e)}-${Oe(l)}`;
}
function zl(t, e) {
  return [
    ...t.collection.rowHeaderColumnKeys
  ].map((l) => El(t, e, l)).join(" ");
}
var Bl = {};
Bl = {
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
var Il = {};
Il = {
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
var Pl = {};
Pl = {
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
var Rl = {};
Rl = {
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
var Al = {};
Al = {
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
var Ml = {};
Ml = {
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
var Kl = {};
Kl = {
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
var Tl = {};
Tl = {
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
var Fl = {};
Fl = {
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
var Nl = {};
Nl = {
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
var Hl = {};
Hl = {
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
var Vl = {};
Vl = {
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
var jl = {};
jl = {
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
var Ll = {};
Ll = {
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
var Wl = {};
Wl = {
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
var Ol = {};
Ol = {
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
var Ul = {};
Ul = {
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
var Yl = {};
Yl = {
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
var ql = {};
ql = {
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
var Xl = {};
Xl = {
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
var Zl = {};
Zl = {
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
var Gl = {};
Gl = {
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
var Jl = {};
Jl = {
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
var Ql = {};
Ql = {
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
var _l = {};
_l = {
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
var ei = {};
ei = {
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
var ti = {};
ti = {
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
var li = {};
li = {
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
var ii = {};
ii = {
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
var oi = {};
oi = {
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
var ni = {};
ni = {
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
var ui = {};
ui = {
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
var ri = {};
ri = {
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
var ai = {};
ai = {
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
var De = {};
De = {
  "ar-AE": Bl,
  "bg-BG": Il,
  "cs-CZ": Pl,
  "da-DK": Rl,
  "de-DE": Al,
  "el-GR": Ml,
  "en-US": Kl,
  "es-ES": Tl,
  "et-EE": Fl,
  "fi-FI": Nl,
  "fr-FR": Hl,
  "he-IL": Vl,
  "hr-HR": jl,
  "hu-HU": Ll,
  "it-IT": Wl,
  "ja-JP": Ol,
  "ko-KR": Ul,
  "lt-LT": Yl,
  "lv-LV": ql,
  "nb-NO": Xl,
  "nl-NL": Zl,
  "pl-PL": Gl,
  "pt-BR": Jl,
  "pt-PT": Ql,
  "ro-RO": _l,
  "ru-RU": ei,
  "sk-SK": ti,
  "sl-SI": li,
  "sr-SP": ii,
  "sv-SE": oi,
  "tr-TR": ni,
  "uk-UA": ui,
  "zh-CN": ri,
  "zh-TW": ai
};
class jn extends Ot {
  isCell(e) {
    return e.type === "cell" || e.type === "rowheader" || e.type === "column";
  }
  getKeyBelow(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (l.type === "column") {
      let i = ee(T(l, this.collection));
      if (i) return i.key;
      let o = this.getFirstKey();
      return o == null || !this.collection.getItem(o) ? null : super.getKeyForItemInRowByIndex(o, l.index);
    }
    return super.getKeyBelow(e);
  }
  getKeyAbove(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (l.type === "column") {
      let n = l.parentKey != null ? this.collection.getItem(l.parentKey) : null;
      return n && n.type === "column" ? n.key : null;
    }
    let i = super.getKeyAbove(e), o = i != null ? this.collection.getItem(i) : null;
    return o && o.type !== "headerrow" ? i : this.isCell(l) ? this.collection.columns[l.index].key : this.collection.columns[0].key;
  }
  findNextColumnKey(e) {
    let l = this.findNextKey(e.key, (o) => o.type === "column");
    if (l != null) return l;
    let i = this.collection.headerRows[e.level];
    for (let o of T(i, this.collection))
      if (o.type === "column") return o.key;
    return null;
  }
  findPreviousColumnKey(e) {
    let l = this.findPreviousKey(e.key, (n) => n.type === "column");
    if (l != null) return l;
    let i = this.collection.headerRows[e.level], o = [
      ...T(i, this.collection)
    ];
    for (let n = o.length - 1; n >= 0; n--) {
      let u = o[n];
      if (u.type === "column") return u.key;
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
    let i = this.collection, o = l ?? this.getFirstKey();
    if (o == null) return null;
    let n = i.getItem(o);
    var u;
    (n == null ? void 0 : n.type) === "cell" && (o = (u = n.parentKey) !== null && u !== void 0 ? u : null);
    let r = !1;
    for (; o != null; ) {
      let a = i.getItem(o);
      if (!a) return null;
      if (a.textValue) {
        let s = a.textValue.slice(0, e.length);
        if (this.collator.compare(s, e) === 0) return a.key;
      }
      for (let s of T(a, this.collection)) {
        let d = i.columns[s.index];
        if (i.rowHeaderColumnKeys.has(d.key) && s.textValue) {
          let c = s.textValue.slice(0, e.length);
          if (this.collator.compare(c, e) === 0) {
            let h = l != null ? i.getItem(l) : n;
            return (h == null ? void 0 : h.type) === "cell" ? s.key : a.key;
          }
        }
      }
      o = this.getKeyBelow(o), o == null && !r && (o = this.getFirstKey(), r = !0);
    }
    return null;
  }
}
function Ln(t) {
  return t && t.__esModule ? t.default : t;
}
function Wn(t, e, l) {
  let { keyboardDelegate: i, isVirtualized: o, layoutDelegate: n, layout: u } = t, r = Je({
    usage: "search",
    sensitivity: "base"
  }), { direction: a } = Q(), s = e.selectionManager.disabledBehavior, d = p.useMemo(() => i || new jn({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: s,
    ref: l,
    direction: a,
    collator: r,
    layoutDelegate: n,
    layout: u
  }), [
    i,
    e.collection,
    e.disabledKeys,
    s,
    l,
    a,
    r,
    n,
    u
  ]), c = ye(t.id);
  lt.set(e, c);
  let { gridProps: h } = An({
    ...t,
    id: c,
    keyboardDelegate: d
  }, e, l);
  o && (h["aria-rowcount"] = e.collection.size + e.collection.headerRows.length), Ee() && "expandedKeys" in e && (h.role = "treegrid");
  let { column: f, direction: v } = e.sortDescriptor || {}, m = _(Ln(De), "@react-aria/table"), b = p.useMemo(() => {
    var C, y;
    let $ = (y = (C = e.collection.columns.find((x) => x.key === f)) === null || C === void 0 ? void 0 : C.textValue) !== null && y !== void 0 ? y : "";
    return v && f ? m.format(`${v}Sort`, {
      columnName: $
    }) : void 0;
  }, [
    v,
    f,
    e.collection.columns
  ]), g = Re(b);
  return Nt(() => {
    b && Bt(b, "assertive", 500);
  }, [
    b
  ]), {
    gridProps: N(h, g, {
      // merge sort description with long press information
      "aria-describedby": [
        g["aria-describedby"],
        h["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function On(t) {
  return t && t.__esModule ? t.default : t;
}
function Un(t, e, l) {
  var i, o;
  let { node: n } = t, u = n.props.allowsSorting, { gridCellProps: r } = kl({
    ...t,
    focusMode: "child"
  }, e, l), a = n.props.isSelectionCell && e.selectionManager.selectionMode === "single", { pressProps: s } = Rt({
    isDisabled: !u || a,
    onPress() {
      e.sort(n.key);
    },
    ref: l
  }), { focusableProps: d } = Bo({}, l), c, h = ((i = e.sortDescriptor) === null || i === void 0 ? void 0 : i.column) === n.key, f = (o = e.sortDescriptor) === null || o === void 0 ? void 0 : o.direction;
  n.props.allowsSorting && !bt() && (c = h ? f : "none");
  let v = _(On(De), "@react-aria/table"), m;
  u && (m = `${v.format("sortable")}`, h && f && bt() && (m = `${m}, ${v.format(f)}`));
  let b = Re(m), g = e.collection.size === 0;
  return p.useEffect(() => {
    g && e.selectionManager.focusedKey === n.key && e.selectionManager.setFocusedKey(null);
  }, [
    g,
    e.selectionManager,
    n.key
  ]), {
    columnHeaderProps: {
      ...N(
        d,
        r,
        s,
        b,
        // If the table is empty, make all column headers untabbable
        g ? {
          tabIndex: -1
        } : null
      ),
      role: "columnheader",
      id: Sl(e, n.key),
      "aria-colspan": n.colSpan && n.colSpan > 1 ? n.colSpan : void 0,
      "aria-sort": c
    }
  };
}
const Ct = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function Yn(t, e, l) {
  let { node: i, isVirtualized: o } = t, { rowProps: n, ...u } = Kn(t, e, l), { direction: r } = Q();
  o && !(Ee() && "expandedKeys" in e) ? n["aria-rowindex"] = i.index + 1 + e.collection.headerRows.length : delete n["aria-rowindex"];
  let a = {};
  if (Ee() && "expandedKeys" in e) {
    let x = e.keyMap.get(i.key);
    if (x != null) {
      var s, d, c, h, f, v;
      let D = ((s = x.props) === null || s === void 0 ? void 0 : s.UNSTABLE_childItems) || ((c = x.props) === null || c === void 0 || (d = c.children) === null || d === void 0 ? void 0 : d.length) > e.userColumnCount;
      var m, b, g, C;
      a = {
        onKeyDown: (k) => {
          (k.key === Ct.expand[r] && e.selectionManager.focusedKey === x.key && D && e.expandedKeys !== "all" && !e.expandedKeys.has(x.key) || k.key === Ct.collapse[r] && e.selectionManager.focusedKey === x.key && D && (e.expandedKeys === "all" || e.expandedKeys.has(x.key))) && (e.toggleKey(x.key), k.stopPropagation());
        },
        "aria-expanded": D ? e.expandedKeys === "all" || e.expandedKeys.has(i.key) : void 0,
        "aria-level": x.level,
        "aria-posinset": ((m = x.indexOfType) !== null && m !== void 0 ? m : 0) + 1,
        "aria-setsize": x.level > 1 ? ((g = (h = J((b = (f = e.keyMap.get(x.parentKey)) === null || f === void 0 ? void 0 : f.childNodes) !== null && b !== void 0 ? b : [])) === null || h === void 0 ? void 0 : h.indexOfType) !== null && g !== void 0 ? g : 0) + 1 : ((C = (v = J(e.collection.body.childNodes)) === null || v === void 0 ? void 0 : v.indexOfType) !== null && C !== void 0 ? C : 0) + 1
      };
    }
  }
  let y = Io(i.props), $ = u.hasAction ? y : {};
  return {
    rowProps: {
      ...N(n, a, $),
      "aria-labelledby": zl(e, i.key)
    },
    ...u
  };
}
function qn(t, e, l) {
  let { node: i, isVirtualized: o } = t, n = {
    role: "row"
  };
  return o && !(Ee() && "expandedKeys" in e) && (n["aria-rowindex"] = i.index + 1), {
    rowProps: n
  };
}
function Xn(t, e, l) {
  var i;
  let { gridCellProps: o, isPressed: n } = kl(t, e, l), u = (i = t.node.column) === null || i === void 0 ? void 0 : i.key;
  return u != null && e.collection.rowHeaderColumnKeys.has(u) && (o.role = "rowheader", o.id = El(e, t.node.parentKey, u)), {
    gridCellProps: o,
    isPressed: n
  };
}
function Zn(t) {
  return t && t.__esModule ? t.default : t;
}
function Gn(t, e) {
  let { key: l } = t;
  const { checkboxProps: i } = Fn(t, e);
  return {
    checkboxProps: {
      ...i,
      "aria-labelledby": `${i.id} ${zl(e, l)}`
    }
  };
}
function Jn(t) {
  let { isEmpty: e, isSelectAll: l, selectionMode: i } = t.selectionManager;
  return {
    checkboxProps: {
      "aria-label": _(Zn(De), "@react-aria/table").format(i === "single" ? "select" : "selectAll"),
      isSelected: l,
      isDisabled: i !== "multiple" || t.collection.size === 0 || t.collection.rows.length === 1 && t.collection.rows[0].type === "loader",
      isIndeterminate: !e && !l,
      onChange: () => t.selectionManager.toggleSelectAll()
    }
  };
}
function Qn(t) {
  return t && t.__esModule ? t.default : t;
}
function _n(t, e, l) {
  let { column: i, triggerRef: o, isDisabled: n, onResizeStart: u, onResize: r, onResizeEnd: a, "aria-label": s } = t;
  const d = _(Qn(De), "@react-aria/table");
  let c = ye(), h = e.resizingColumn === i.key, f = p.useRef(h), v = p.useRef(null), m = p.useRef(!1), b = e.tableState.isKeyboardNavigationDisabled, { direction: g } = Q(), { keyboardProps: C } = Po({
    onKeyDown: (B) => {
      b ? (B.key === "Escape" || B.key === "Enter" || B.key === " " || B.key === "Tab") && (B.preventDefault(), x(i)) : (B.continuePropagation(), B.key === "Enter" && y(i));
    }
  }), y = le((B) => {
    f.current || (v.current = e.updateResizedColumns(B.key, e.getColumnWidth(B.key)), e.startResize(B.key), e.tableState.setKeyboardNavigationDisabled(!0), u == null || u(v.current)), f.current = !0;
  }), $ = le((B, M) => {
    let q = e.updateResizedColumns(B.key, M);
    r == null || r(q), v.current = q;
  }), x = le((B) => {
    f.current && (v.current == null && (v.current = e.updateResizedColumns(B.key, e.getColumnWidth(B.key))), e.endResize(), e.tableState.setKeyboardNavigationDisabled(!1), a == null || a(v.current), f.current = !1, o != null && o.current && !m.current && X(o.current)), v.current = null;
  });
  const D = p.useRef(0), { moveProps: k } = Sn({
    onMoveStart() {
      D.current = e.getColumnWidth(i.key), y(i);
    },
    onMove(B) {
      let { deltaX: M, deltaY: q, pointerType: $o } = B;
      g === "rtl" && (M *= -1), $o === "keyboard" && (q !== 0 && M === 0 && (M = q * -1), M *= 10), M !== 0 && (D.current += M, $(i, D.current));
    },
    onMoveEnd(B) {
      let { pointerType: M } = B;
      D.current = 0, (M === "mouse" || M === "touch" && m.current) && x(i);
    }
  });
  let P = p.useCallback((B) => {
    var M;
    b && ((M = k.onKeyDown) === null || M === void 0 || M.call(k, B));
  }, [
    b,
    k
  ]), z = Math.floor(e.getColumnMinWidth(i.key)), E = Math.floor(e.getColumnMaxWidth(i.key));
  E === 1 / 0 && (E = Number.MAX_SAFE_INTEGER);
  let K = Math.floor(e.getColumnWidth(i.key)), F = It();
  F === "virtual" && typeof window < "u" && "ontouchstart" in window && (F = "touch");
  let H = (o == null ? void 0 : o.current) == null && (F === "keyboard" || F === "virtual") && !h ? d.format("resizerDescription") : void 0, j = Re(H), O = {
    "aria-label": s,
    "aria-orientation": "horizontal",
    "aria-labelledby": `${c} ${Sl(e.tableState, i.key)}`,
    "aria-valuetext": d.format("columnSize", {
      value: K
    }),
    type: "range",
    min: z,
    max: E,
    value: K,
    ...j
  };
  const ue = p.useCallback(() => {
    l.current && X(l.current);
  }, [
    l
  ]);
  let G = e.resizingColumn, pe = p.useRef(null);
  p.useEffect(() => {
    if (pe.current !== G && G != null && G === i.key) {
      m.current = document.activeElement === l.current, y(i);
      let B = setTimeout(() => ue(), 0), M = setTimeout(ue, 400);
      return () => {
        clearTimeout(B), clearTimeout(M);
      };
    }
    pe.current = G;
  }, [
    G,
    i,
    ue,
    l,
    y
  ]);
  let Fe = (B) => {
    let M = e.getColumnWidth(i.key), q = parseFloat(B.target.value);
    q > M ? q = M + 10 : q = M - 10, $(i, q);
  }, { pressProps: Ne } = Rt({
    preventFocusOnPress: !0,
    onPressStart: (B) => {
      if (!(B.ctrlKey || B.altKey || B.metaKey || B.shiftKey || B.pointerType === "keyboard")) {
        if (B.pointerType === "virtual" && e.resizingColumn != null) {
          x(i);
          return;
        }
        ue(), B.pointerType !== "virtual" && y(i);
      }
    },
    onPress: (B) => {
      (B.pointerType === "touch" && m.current || B.pointerType === "mouse") && e.resizingColumn != null && x(i);
    }
  }), { visuallyHiddenProps: ve } = $e();
  return {
    resizerProps: N(C, {
      ...k,
      onKeyDown: P
    }, Ne, {
      style: {
        touchAction: "none"
      }
    }),
    inputProps: N(ve, {
      id: c,
      onBlur: () => {
        x(i);
      },
      onChange: Fe,
      disabled: n
    }, O),
    isResizing: h
  };
}
function si() {
  return Mn();
}
function eu(t) {
  let { selectionMode: e = "single" } = t, l = Ro(t), [i, o] = p.useState(null), n = p.useMemo(() => {
    var $;
    return t.defaultValue !== void 0 ? t.defaultValue : e === "single" ? ($ = t.defaultSelectedKey) !== null && $ !== void 0 ? $ : null : [];
  }, [
    t.defaultValue,
    t.defaultSelectedKey,
    e
  ]), u = p.useMemo(() => t.value !== void 0 ? t.value : e === "single" ? t.selectedKey : void 0, [
    t.value,
    t.selectedKey,
    e
  ]), [r, a] = Ao(u, n, t.onChange), s = e === "single" && Array.isArray(r) ? r[0] : r, d = ($) => {
    if (e === "single") {
      var x, D;
      let k = Array.isArray($) ? (D = $[0]) !== null && D !== void 0 ? D : null : $;
      a(k), k !== s && ((x = t.onSelectionChange) === null || x === void 0 || x.call(t, k));
    } else {
      let k = [];
      Array.isArray($) ? k = $ : $ != null && (k = [
        $
      ]), a(k);
    }
  }, c = an({
    ...t,
    selectionMode: e,
    disallowEmptySelection: e === "single",
    allowDuplicateSelectionEvents: !0,
    selectedKeys: p.useMemo(() => tu(s), [
      s
    ]),
    onSelectionChange: ($) => {
      if ($ !== "all") {
        if (e === "single") {
          var x;
          let D = (x = $.values().next().value) !== null && x !== void 0 ? x : null;
          d(D), l.close();
        } else d([
          ...$
        ]);
        v.commitValidation();
      }
    }
  }), h = c.selectionManager.firstSelectedKey, f = p.useMemo(() => [
    ...c.selectionManager.selectedKeys
  ].map(($) => c.collection.getItem($)).filter(($) => $ != null), [
    c.selectionManager.selectedKeys,
    c.collection
  ]), v = Mo({
    ...t,
    value: Array.isArray(s) && s.length === 0 ? null : s
  }), [m, b] = p.useState(!1), [g] = p.useState(s);
  var C, y;
  return {
    ...v,
    ...c,
    ...l,
    value: s,
    defaultValue: n ?? g,
    setValue: d,
    selectedKey: h,
    setSelectedKey: d,
    selectedItem: (C = f[0]) !== null && C !== void 0 ? C : null,
    selectedItems: f,
    defaultSelectedKey: (y = t.defaultSelectedKey) !== null && y !== void 0 ? y : t.selectionMode === "single" ? g : null,
    focusStrategy: i,
    open($ = null) {
      c.collection.size !== 0 && (o($), l.open());
    },
    toggle($ = null) {
      c.collection.size !== 0 && (o($), l.toggle());
    },
    isFocused: m,
    setFocused: b
  };
}
function tu(t) {
  if (t !== void 0)
    return t === null ? [] : Array.isArray(t) ? t : [
      t
    ];
}
function lu(t) {
  return t != null && (!isNaN(t) || String(t).match(/^(\d+)(?=%$)/) !== null);
}
function iu(t) {
  if (!t || typeof t == "number") return 1;
  let e = t.match(/^(.+)(?=fr$)/);
  return e ? parseFloat(e[0]) : (process.env.NODE_ENV !== "production" && console.warn(`width: ${t} is not a supported format, width should be a number (ex. 150), percentage (ex. '50%') or fr unit (ex. '2fr')`, "defaulting to '1fr'"), 1);
}
function it(t, e) {
  if (typeof t == "string") {
    let l = t.match(/^(\d+)(?=%$)/);
    if (!l) throw new Error("Only percentages or numbers are supported for static column widths");
    return e * (parseFloat(l[0]) / 100);
  }
  return t;
}
function di(t, e) {
  return t != null ? it(t, e) : Number.MAX_SAFE_INTEGER;
}
function ci(t, e) {
  return t != null ? it(t, e) : 0;
}
function ou(t, e, l, i, o) {
  let n = !1, u = e.map((r, a) => {
    var s, d, c, h;
    let f = l.get(r.key) != null ? (s = l.get(r.key)) !== null && s !== void 0 ? s : "1fr" : (h = (c = (d = r.width) !== null && d !== void 0 ? d : r.defaultWidth) !== null && c !== void 0 ? c : i == null ? void 0 : i(a)) !== null && h !== void 0 ? h : "1fr", v = !1, m = 0, b = 0, g = 0;
    lu(f) ? (m = it(f, t), v = !0) : (b = iu(f), b <= 0 && (v = !0));
    var C, y;
    let $ = ci((y = (C = r.minWidth) !== null && C !== void 0 ? C : o == null ? void 0 : o(a)) !== null && y !== void 0 ? y : 0, t), x = di(r.maxWidth, t), D = Math.max($, Math.min(m, x));
    return v ? g = D : m > D && (v = !0, g = D), v || (n = !0), {
      frozen: v,
      baseSize: m,
      hypotheticalMainSize: D,
      min: $,
      max: x,
      flex: b,
      targetMainSize: g,
      violation: 0
    };
  });
  for (; n; ) {
    let r = 0, a = 0;
    u.forEach((c) => {
      c.frozen ? r += c.targetMainSize : (r += c.baseSize, a += c.flex);
    });
    let s = t - r;
    s > 0 && u.forEach((c) => {
      if (!c.frozen) {
        let h = c.flex / a;
        c.targetMainSize = c.baseSize + h * s;
      }
    });
    let d = 0;
    u.forEach((c) => {
      if (c.violation = 0, !c.frozen) {
        let { min: h, max: f, targetMainSize: v } = c;
        c.targetMainSize = Math.max(h, Math.min(v, f)), c.violation = c.targetMainSize - v, d += c.violation;
      }
    }), n = !1, u.forEach((c) => {
      d === 0 || Math.sign(d) === Math.sign(c.violation) ? c.frozen = !0 : c.frozen || (n = !0);
    });
  }
  return nu(u);
}
function nu(t) {
  let e = 0, l = 0, i = [];
  return t.forEach(function(o) {
    let n = o.targetMainSize, u = Math.round(n + e) - l;
    e += n, l += u, i.push(u);
  }), i;
}
class hi {
  /** Takes an array of columns and splits it into 2 maps of columns with controlled and columns with uncontrolled widths. */
  splitColumnsIntoControlledAndUncontrolled(e) {
    return e.reduce((l, i) => (i.props.width != null ? l[0].set(i.key, i) : l[1].set(i.key, i), l), [
      /* @__PURE__ */ new Map(),
      /* @__PURE__ */ new Map()
    ]);
  }
  /** Takes uncontrolled and controlled widths and joins them into a single Map. */
  recombineColumns(e, l, i, o) {
    return new Map(e.map((n) => i.has(n.key) ? [
      n.key,
      l.get(n.key)
    ] : [
      n.key,
      o.get(n.key).props.width
    ]));
  }
  /** Used to make an initial Map of the uncontrolled widths based on default widths. */
  getInitialUncontrolledWidths(e) {
    return new Map(Array.from(e).map(([l, i]) => {
      var o, n, u, r;
      return [
        l,
        (r = (u = i.props.defaultWidth) !== null && u !== void 0 ? u : (o = (n = this).getDefaultWidth) === null || o === void 0 ? void 0 : o.call(n, i)) !== null && r !== void 0 ? r : "1fr"
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
  resizeColumnWidth(e, l, i, o) {
    let n = this.columnWidths, u = !0, r = /* @__PURE__ */ new Map();
    return o = Math.max(this.getColumnMinWidth(i), Math.min(this.getColumnMaxWidth(i), Math.floor(o))), e.columns.forEach((a) => {
      var s, d;
      a.key === i ? (r.set(a.key, o), u = !1) : u ? r.set(a.key, (s = n.get(a.key)) !== null && s !== void 0 ? s : 0) : r.set(a.key, (d = a.props.width) !== null && d !== void 0 ? d : l.get(a.key));
    }), r;
  }
  buildColumnWidths(e, l, i) {
    return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), ou(e, l.columns.map((n) => ({
      ...n.props,
      key: n.key
    })), i, (n) => this.getDefaultWidth(l.columns[n]), (n) => this.getDefaultMinWidth(l.columns[n])).forEach((n, u) => {
      let r = l.columns[u].key, a = l.columns[u];
      this.columnWidths.set(r, n);
      var s;
      this.columnMinWidths.set(r, ci((s = a.props.minWidth) !== null && s !== void 0 ? s : this.getDefaultMinWidth(a), e)), this.columnMaxWidths.set(r, di(a.props.maxWidth, e));
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
function uu(t, e) {
  let { getDefaultWidth: l, getDefaultMinWidth: i, tableWidth: o = 0 } = t, [n, u] = p.useState(null), r = p.useMemo(() => new hi({
    getDefaultWidth: l,
    getDefaultMinWidth: i
  }), [
    l,
    i
  ]), [a, s] = p.useMemo(() => r.splitColumnsIntoControlledAndUncontrolled(e.collection.columns), [
    e.collection.columns,
    r
  ]), [d, c] = p.useState(() => r.getInitialUncontrolledWidths(s)), [h, f] = p.useState(e.collection.columns);
  if (e.collection.columns !== h) {
    if (e.collection.columns.length !== h.length || e.collection.columns.some((y, $) => y.key !== h[$].key)) {
      let y = r.getInitialUncontrolledWidths(s);
      c(y);
    }
    f(e.collection.columns);
  }
  let v = p.useMemo(() => r.recombineColumns(e.collection.columns, d, s, a), [
    e.collection.columns,
    d,
    s,
    a,
    r
  ]), m = p.useCallback((y) => {
    u(y);
  }, [
    u
  ]), b = p.useCallback((y, $) => {
    let x = r.resizeColumnWidth(e.collection, d, y, $), D = new Map(Array.from(s).map(([k]) => [
      k,
      x.get(k)
    ]));
    return D.set(y, $), c(D), x;
  }, [
    s,
    c,
    r,
    e.collection,
    d
  ]), g = p.useCallback(() => {
    u(null);
  }, [
    u
  ]), C = p.useMemo(() => r.buildColumnWidths(o, e.collection, v), [
    o,
    e.collection,
    v,
    r
  ]);
  return p.useMemo(() => ({
    resizingColumn: n,
    updateResizedColumns: b,
    startResize: m,
    endResize: g,
    getColumnWidth: (y) => r.getColumnWidth(y),
    getColumnMinWidth: (y) => r.getColumnMinWidth(y),
    getColumnMaxWidth: (y) => r.getColumnMaxWidth(y),
    tableState: e,
    columnWidths: C
  }), [
    r,
    C,
    n,
    b,
    m,
    g,
    e
  ]);
}
function ru(t) {
  let { collection: e, focusMode: l } = t, i = t.UNSAFE_selectionState || jt(t), o = p.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), n = i.setFocusedKey;
  i.setFocusedKey = (a, s) => {
    if (l === "cell" && a != null) {
      let v = e.getItem(a);
      if ((v == null ? void 0 : v.type) === "item") {
        var d, c;
        let m = T(v, e);
        var h, f;
        s === "last" ? a = (h = (d = J(m)) === null || d === void 0 ? void 0 : d.key) !== null && h !== void 0 ? h : null : a = (f = (c = ee(m)) === null || c === void 0 ? void 0 : c.key) !== null && f !== void 0 ? f : null;
      }
    }
    n(a, s);
  };
  let u = p.useMemo(() => new sn(e, i), [
    e,
    i
  ]);
  const r = p.useRef(null);
  return p.useEffect(() => {
    if (i.focusedKey != null && r.current && !e.getItem(i.focusedKey)) {
      const a = r.current.getItem(i.focusedKey), s = (a == null ? void 0 : a.parentKey) != null && (a.type === "cell" || a.type === "rowheader" || a.type === "column") ? r.current.getItem(a.parentKey) : a;
      if (!s) {
        i.setFocusedKey(null);
        return;
      }
      const d = r.current.rows, c = e.rows, h = d.length - c.length;
      let f = Math.min(h > 1 ? Math.max(s.index - h + 1, 0) : s.index, c.length - 1), v = null;
      for (; f >= 0; ) {
        if (!u.isDisabled(c[f].key) && c[f].type !== "headerrow") {
          v = c[f];
          break;
        }
        f < c.length - 1 ? f++ : (f > s.index && (f = s.index), f--);
      }
      if (v) {
        const m = v.hasChildNodes ? [
          ...T(v, e)
        ] : [], b = v.hasChildNodes && s !== a && a && a.index < m.length ? m[a.index].key : v.key;
        i.setFocusedKey(b);
      } else i.setFocusedKey(null);
    }
    r.current = e;
  }, [
    e,
    u,
    i,
    i.focusedKey
  ]), {
    collection: e,
    disabledKeys: o,
    isKeyboardNavigationDisabled: !1,
    selectionManager: u
  };
}
class au {
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
      let f = /* @__PURE__ */ new Set(), v = null, m = !1;
      if (c.type === "item") {
        var b;
        for (let x of c.childNodes) if (((b = x.props) === null || b === void 0 ? void 0 : b.colSpan) !== void 0) {
          m = !0;
          break;
        }
      }
      for (let x of c.childNodes) {
        if (x.type === "cell" && m) {
          var g, C;
          x.colspan = (g = x.props) === null || g === void 0 ? void 0 : g.colSpan, x.colSpan = (C = x.props) === null || C === void 0 ? void 0 : C.colSpan;
          var y, $;
          x.colIndex = v ? ((y = v.colIndex) !== null && y !== void 0 ? y : v.index) + (($ = v.colSpan) !== null && $ !== void 0 ? $ : 1) : x.index;
        }
        x.type === "cell" && x.parentKey == null && (x.parentKey = c.key), f.add(x.key), v ? (v.nextKey = x.key, x.prevKey = v.key) : x.prevKey = null, l(x), v = x;
      }
      if (v && (v.nextKey = null), h)
        for (let x of h.childNodes) f.has(x.key) || i(x);
    }, i = (c) => {
      this.keyMap.delete(c.key);
      for (let h of c.childNodes) this.keyMap.get(h.key) === h && i(h);
    }, o = null;
    for (let [c, h] of e.items.entries()) {
      var n, u, r, a, s, d;
      let f = {
        ...h,
        level: (n = h.level) !== null && n !== void 0 ? n : 0,
        key: (u = h.key) !== null && u !== void 0 ? u : "row-" + c,
        type: (r = h.type) !== null && r !== void 0 ? r : "row",
        value: (a = h.value) !== null && a !== void 0 ? a : null,
        hasChildNodes: !0,
        childNodes: [
          ...h.childNodes
        ],
        rendered: h.rendered,
        textValue: (s = h.textValue) !== null && s !== void 0 ? s : "",
        index: (d = h.index) !== null && d !== void 0 ? d : c
      };
      o ? (o.nextKey = f.key, f.prevKey = o.key) : f.prevKey = null, this.rows.push(f), l(f), o = f;
    }
    o && (o.nextKey = null);
  }
}
const fi = "row-header-column-" + Math.random().toString(36).slice(2);
let Ue = "row-header-column-" + Math.random().toString(36).slice(2);
for (; fi === Ue; ) Ue = "row-header-column-" + Math.random().toString(36).slice(2);
function pi(t, e) {
  if (e.length === 0) return [];
  let l = [], i = /* @__PURE__ */ new Map();
  for (let d of e) {
    let c = d.parentKey, h = [
      d
    ];
    for (; c; ) {
      let f = t.get(c);
      if (!f) break;
      if (i.has(f)) {
        var o, n;
        (n = (o = f).colSpan) !== null && n !== void 0 || (o.colSpan = 0), f.colSpan++, f.colspan = f.colSpan;
        let { column: v, index: m } = i.get(f);
        if (m > h.length) break;
        for (let b = m; b < h.length; b++) v.splice(b, 0, null);
        for (let b = h.length; b < v.length; b++)
          v[b] && i.has(v[b]) && (i.get(v[b]).index = b);
      } else
        f.colSpan = 1, f.colspan = 1, h.push(f), i.set(f, {
          column: h,
          index: h.length - 1
        });
      c = f.parentKey;
    }
    l.push(h), d.index = l.length - 1;
  }
  let u = Math.max(...l.map((d) => d.length)), r = Array(u).fill(0).map(() => []), a = 0;
  for (let d of l) {
    let c = u - 1;
    for (let h of d) {
      if (h) {
        let f = r[c], v = f.reduce((m, b) => {
          var g;
          return m + ((g = b.colSpan) !== null && g !== void 0 ? g : 1);
        }, 0);
        if (v < a) {
          let m = {
            type: "placeholder",
            key: "placeholder-" + h.key,
            colspan: a - v,
            colSpan: a - v,
            index: v,
            value: null,
            rendered: null,
            level: c,
            hasChildNodes: !1,
            childNodes: [],
            textValue: ""
          };
          f.length > 0 && (f[f.length - 1].nextKey = m.key, m.prevKey = f[f.length - 1].key), f.push(m);
        }
        f.length > 0 && (f[f.length - 1].nextKey = h.key, h.prevKey = f[f.length - 1].key), h.level = c, h.colIndex = a, f.push(h);
      }
      c--;
    }
    a++;
  }
  let s = 0;
  for (let d of r) {
    let c = d.reduce((h, f) => {
      var v;
      return h + ((v = f.colSpan) !== null && v !== void 0 ? v : 1);
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
        level: s,
        hasChildNodes: !1,
        childNodes: [],
        textValue: "",
        prevKey: d[d.length - 1].key
      };
      d.push(h);
    }
    s++;
  }
  return r.map((d, c) => ({
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
class su extends au {
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
    return (l = (e = ee(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && l !== void 0 ? l : null;
  }
  getLastKey() {
    var e, l;
    return (l = (e = J(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && l !== void 0 ? l : null;
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
      let o = [];
      for (let n of l.childNodes) {
        let u = this.columns[n.index];
        if (i.has(u.key) && n.textValue && o.push(n.textValue), o.length === i.size) break;
      }
      return o.join(" ");
    }
    return "";
  }
  constructor(e, l, i) {
    let o = /* @__PURE__ */ new Set(), n = null, u = [];
    if (i != null && i.showSelectionCheckboxes) {
      let c = {
        type: "column",
        key: fi,
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
      u.unshift(c);
    }
    if (i != null && i.showDragButtons) {
      let c = {
        type: "column",
        key: Ue,
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
      u.unshift(c);
    }
    let r = [], a = /* @__PURE__ */ new Map(), s = (c) => {
      switch (c.type) {
        case "body":
          n = c;
          break;
        case "column":
          a.set(c.key, c), c.hasChildNodes || (u.push(c), c.props.isRowHeader && o.add(c.key));
          break;
        case "item":
          r.push(c);
          return;
      }
      for (let h of c.childNodes) s(h);
    };
    for (let c of e) s(c);
    let d = pi(a, u);
    if (d.forEach((c, h) => r.splice(h, 0, c)), super({
      columnCount: u.length,
      items: r,
      visitNode: (c) => (c.column = u[c.index], c)
    }), this._size = 0, this.columns = u, this.rowHeaderColumnKeys = o, this.body = n, this.headerRows = d, this._size = [
      ...n.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0) {
      let c = this.columns.find((h) => {
        var f, v;
        return !(!((f = h.props) === null || f === void 0) && f.isDragButtonCell) && !(!((v = h.props) === null || v === void 0) && v.isSelectionCell);
      });
      c && this.rowHeaderColumnKeys.add(c.key);
    }
  }
}
const du = {
  ascending: "descending",
  descending: "ascending"
};
function cu(t) {
  let [e, l] = p.useState(!1), { selectionMode: i = "none", showSelectionCheckboxes: o, showDragButtons: n } = t, u = p.useMemo(() => ({
    showSelectionCheckboxes: o && i !== "none",
    showDragButtons: n,
    selectionMode: i,
    columns: []
  }), [
    t.children,
    o,
    i,
    n
  ]), r = dn(t, p.useCallback((c) => new su(c, null, u), [
    u
  ]), u), { disabledKeys: a, selectionManager: s } = ru({
    ...t,
    collection: r,
    disabledBehavior: t.disabledBehavior || "selection"
  });
  var d;
  return {
    collection: r,
    disabledKeys: a,
    selectionManager: s,
    showSelectionCheckboxes: t.showSelectionCheckboxes || !1,
    sortDescriptor: (d = t.sortDescriptor) !== null && d !== void 0 ? d : null,
    isKeyboardNavigationDisabled: r.size === 0 || e,
    setKeyboardNavigationDisabled: l,
    sort(c, h) {
      var f, v;
      (v = t.onSortChange) === null || v === void 0 || v.call(t, {
        column: c,
        direction: h ?? (((f = t.sortDescriptor) === null || f === void 0 ? void 0 : f.column) === c ? du[t.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
function hu(t, e) {
  let l = p.useMemo(() => e ? t.collection.filter(e) : t.collection, [
    t.collection,
    e
  ]), i = t.selectionManager.withCollection(l);
  return {
    ...t,
    collection: l,
    selectionManager: i
  };
}
var vi = {};
vi = {
  colorSwatchPicker: "تغييرات الألوان",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "حدد عنصرًا",
  tableResizer: "أداة تغيير الحجم"
};
var mi = {};
mi = {
  colorSwatchPicker: "Цветови мостри",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Изберете предмет",
  tableResizer: "Преоразмерител"
};
var gi = {};
gi = {
  colorSwatchPicker: "Vzorky barev",
  dropzoneLabel: "Místo pro přetažení",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Změna velikosti"
};
var bi = {};
bi = {
  colorSwatchPicker: "Farveprøver",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vælg et element",
  tableResizer: "Størrelsesændring"
};
var yi = {};
yi = {
  colorSwatchPicker: "Farbfelder",
  dropzoneLabel: "Ablegebereich",
  selectPlaceholder: "Element wählen",
  tableResizer: "Größenanpassung"
};
var $i = {};
$i = {
  colorSwatchPicker: "Χρωματικά δείγματα",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Επιλέξτε ένα αντικείμενο",
  tableResizer: "Αλλαγή μεγέθους"
};
var xi = {};
xi = {
  selectPlaceholder: "Select an item",
  tableResizer: "Resizer",
  dropzoneLabel: "DropZone",
  colorSwatchPicker: "Color swatches"
};
var Ci = {};
Ci = {
  colorSwatchPicker: "Muestras de colores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Seleccionar un artículo",
  tableResizer: "Cambiador de tamaño"
};
var wi = {};
wi = {
  colorSwatchPicker: "Värvinäidised",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valige üksus",
  tableResizer: "Suuruse muutja"
};
var Di = {};
Di = {
  colorSwatchPicker: "Värimallit",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valitse kohde",
  tableResizer: "Koon muuttaja"
};
var ki = {};
ki = {
  colorSwatchPicker: "Échantillons de couleurs",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Sélectionner un élément",
  tableResizer: "Redimensionneur"
};
var Si = {};
Si = {
  colorSwatchPicker: "דוגמיות צבע",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "בחר פריט",
  tableResizer: "שינוי גודל"
};
var Ei = {};
Ei = {
  colorSwatchPicker: "Uzorci boja",
  dropzoneLabel: "Zona spuštanja",
  selectPlaceholder: "Odaberite stavku",
  tableResizer: "Promjena veličine"
};
var zi = {};
zi = {
  colorSwatchPicker: "Színtárak",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Válasszon ki egy elemet",
  tableResizer: "Átméretező"
};
var Bi = {};
Bi = {
  colorSwatchPicker: "Campioni di colore",
  dropzoneLabel: "Zona di rilascio",
  selectPlaceholder: "Seleziona un elemento",
  tableResizer: "Ridimensionamento"
};
var Ii = {};
Ii = {
  colorSwatchPicker: "カラースウォッチ",
  dropzoneLabel: "ドロップゾーン",
  selectPlaceholder: "項目を選択",
  tableResizer: "サイズ変更ツール"
};
var Pi = {};
Pi = {
  colorSwatchPicker: "색상 견본",
  dropzoneLabel: "드롭 영역",
  selectPlaceholder: "항목 선택",
  tableResizer: "크기 조정기"
};
var Ri = {};
Ri = {
  colorSwatchPicker: "Spalvų pavyzdžiai",
  dropzoneLabel: "„DropZone“",
  selectPlaceholder: "Pasirinkite elementą",
  tableResizer: "Dydžio keitiklis"
};
var Ai = {};
Ai = {
  colorSwatchPicker: "Krāsu paraugi",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izvēlēties vienumu",
  tableResizer: "Izmēra mainītājs"
};
var Mi = {};
Mi = {
  colorSwatchPicker: "Fargekart",
  dropzoneLabel: "Droppsone",
  selectPlaceholder: "Velg et element",
  tableResizer: "Størrelsesendrer"
};
var Ki = {};
Ki = {
  colorSwatchPicker: "kleurstalen",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecteer een item",
  tableResizer: "Resizer"
};
var Ti = {};
Ti = {
  colorSwatchPicker: "Próbki kolorów",
  dropzoneLabel: "Strefa upuszczania",
  selectPlaceholder: "Wybierz element",
  tableResizer: "Zmiana rozmiaru"
};
var Fi = {};
Fi = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var Ni = {};
Ni = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var Hi = {};
Hi = {
  colorSwatchPicker: "Specimene de culoare",
  dropzoneLabel: "Zonă de plasare",
  selectPlaceholder: "Selectați un element",
  tableResizer: "Instrument de redimensionare"
};
var Vi = {};
Vi = {
  colorSwatchPicker: "Цветовые образцы",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Выберите элемент",
  tableResizer: "Средство изменения размера"
};
var ji = {};
ji = {
  colorSwatchPicker: "Vzorkovníky farieb",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Nástroj na zmenu veľkosti"
};
var Li = {};
Li = {
  colorSwatchPicker: "Barvne palete",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izberite element",
  tableResizer: "Spreminjanje velikosti"
};
var Wi = {};
Wi = {
  colorSwatchPicker: "Uzorci boje",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izaberite stavku",
  tableResizer: "Promena veličine"
};
var Oi = {};
Oi = {
  colorSwatchPicker: "Färgrutor",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Välj en artikel",
  tableResizer: "Storleksändrare"
};
var Ui = {};
Ui = {
  colorSwatchPicker: "Renk örnekleri",
  dropzoneLabel: "Bırakma Bölgesi",
  selectPlaceholder: "Bir öğe seçin",
  tableResizer: "Yeniden boyutlandırıcı"
};
var Yi = {};
Yi = {
  colorSwatchPicker: "Зразки кольорів",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Виберіть елемент",
  tableResizer: "Засіб змінення розміру"
};
var qi = {};
qi = {
  colorSwatchPicker: "颜色色板",
  dropzoneLabel: "放置区域",
  selectPlaceholder: "选择一个项目",
  tableResizer: "尺寸调整器"
};
var Xi = {};
Xi = {
  colorSwatchPicker: "色票",
  dropzoneLabel: "放置區",
  selectPlaceholder: "選取項目",
  tableResizer: "大小調整器"
};
var ot = {};
ot = {
  "ar-AE": vi,
  "bg-BG": mi,
  "cs-CZ": gi,
  "da-DK": bi,
  "de-DE": yi,
  "el-GR": $i,
  "en-US": xi,
  "es-ES": Ci,
  "et-EE": wi,
  "fi-FI": Di,
  "fr-FR": ki,
  "he-IL": Si,
  "hr-HR": Ei,
  "hu-HU": zi,
  "it-IT": Bi,
  "ja-JP": Ii,
  "ko-KR": Pi,
  "lt-LT": Ri,
  "lv-LV": Ai,
  "nb-NO": Mi,
  "nl-NL": Ki,
  "pl-PL": Ti,
  "pt-BR": Fi,
  "pt-PT": Ni,
  "ro-RO": Hi,
  "ru-RU": Vi,
  "sk-SK": ji,
  "sl-SI": Li,
  "sr-SP": Wi,
  "sv-SE": Oi,
  "tr-TR": Ui,
  "uk-UA": Yi,
  "zh-CN": qi,
  "zh-TW": Xi
};
function fu(t) {
  return t && t.__esModule ? t.default : t;
}
const nt = /* @__PURE__ */ p.createContext(null), Zi = /* @__PURE__ */ p.createContext(null), pu = /* @__PURE__ */ p.forwardRef(function(e, l) {
  [e, l] = Ie(e, l, nt);
  let { children: i, isDisabled: o = !1, isInvalid: n = !1, isRequired: u = !1 } = e, r = p.useMemo(() => typeof i == "function" ? i({
    isOpen: !1,
    isDisabled: o,
    isInvalid: n,
    isRequired: u,
    isFocused: !1,
    isFocusVisible: !1,
    defaultChildren: null
  }) : i, [
    i,
    o,
    n,
    u
  ]);
  return /* @__PURE__ */ w.createElement(Lt, {
    content: r
  }, (a) => /* @__PURE__ */ w.createElement(mu, {
    props: e,
    collection: a,
    selectRef: l
  }));
}), vu = [
  Mt,
  Ge,
  Xe
];
function mu({ props: t, selectRef: e, collection: l }) {
  let { validationBehavior: i } = At(To) || {};
  var o, n;
  let u = (n = (o = t.validationBehavior) !== null && o !== void 0 ? o : i) !== null && n !== void 0 ? n : "native", r = eu({
    ...t,
    collection: l,
    children: void 0,
    validationBehavior: u
  }), { isFocusVisible: a, focusProps: s } = ie({
    within: !0
  }), d = p.useRef(null), [c, h] = Fo(!t["aria-label"] && !t["aria-labelledby"]), { labelProps: f, triggerProps: v, valueProps: m, menuProps: b, descriptionProps: g, errorMessageProps: C, hiddenSelectProps: y, ...$ } = Nn({
    ...No(t),
    label: h,
    validationBehavior: u
  }, r, d), [x, D] = p.useState(null), k = p.useCallback(() => {
    d.current && D(d.current.offsetWidth + "px");
  }, [
    d
  ]);
  Ze({
    ref: d,
    onResize: k
  });
  let P = p.useMemo(() => ({
    isOpen: r.isOpen,
    isFocused: r.isFocused,
    isFocusVisible: a,
    isDisabled: t.isDisabled || !1,
    isInvalid: $.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    r.isOpen,
    r.isFocused,
    a,
    t.isDisabled,
    $.isInvalid,
    t.isRequired
  ]), z = Y({
    ...t,
    values: P,
    defaultClassName: "react-aria-Select"
  }), E = L(t, {
    global: !0
  });
  delete E.id;
  let K = p.useRef(null);
  return /* @__PURE__ */ w.createElement(xe, {
    values: [
      [
        nt,
        t
      ],
      [
        Zi,
        r
      ],
      [
        Gi,
        m
      ],
      [
        Mt,
        {
          ...f,
          ref: c,
          elementType: "span"
        }
      ],
      [
        Ge,
        {
          ...v,
          ref: d,
          isPressed: r.isOpen,
          autoFocus: t.autoFocus
        }
      ],
      [
        Ho,
        r
      ],
      [
        Vo,
        {
          trigger: "Select",
          triggerRef: d,
          scrollRef: K,
          placement: "bottom start",
          style: {
            "--trigger-width": x
          },
          "aria-labelledby": b["aria-labelledby"],
          clearContexts: vu
        }
      ],
      [
        cn,
        {
          ...b,
          ref: K
        }
      ],
      [
        hn,
        r
      ],
      [
        Xe,
        {
          slots: {
            description: g,
            errorMessage: C
          }
        }
      ],
      [
        jo,
        $
      ]
    ]
  }, /* @__PURE__ */ w.createElement("div", {
    ...N(E, z, s),
    ref: e,
    slot: t.slot || void 0,
    "data-focused": r.isFocused || void 0,
    "data-focus-visible": a || void 0,
    "data-open": r.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": $.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }, z.children, /* @__PURE__ */ w.createElement(Vn, {
    ...y,
    autoComplete: t.autoComplete
  })));
}
const Gi = /* @__PURE__ */ p.createContext(null), gu = /* @__PURE__ */ Ko(function(e, l) {
  var i;
  [e, l] = Ie(e, l, Gi);
  let o = p.useContext(Zi), { placeholder: n } = At(nt), u = o.selectedItems.map((g) => {
    var C;
    let y = (C = g.props) === null || C === void 0 ? void 0 : C.children;
    return typeof y == "function" && (y = y({
      isHovered: !1,
      isPressed: !1,
      isSelected: !1,
      isFocused: !1,
      isFocusVisible: !1,
      isDisabled: !1,
      selectionMode: "single",
      selectionBehavior: "toggle"
    })), y;
  }), r = kn(), a = p.useMemo(() => o.selectedItems.map((g) => g == null ? void 0 : g.textValue), [
    o.selectedItems
  ]), s = o.selectionManager.selectionMode, d = p.useMemo(() => {
    var g;
    return s === "single" ? (g = a[0]) !== null && g !== void 0 ? g : "" : r.format(a);
  }, [
    s,
    r,
    a
  ]), c = p.useMemo(() => {
    if (s === "single") return u[0];
    let g = r.formatToParts(a);
    if (g.length === 0) return null;
    let C = 0;
    return g.map((y) => y.type === "element" ? /* @__PURE__ */ w.createElement(p.Fragment, {
      key: C
    }, u[C++]) : y.value);
  }, [
    s,
    r,
    a,
    u
  ]), h = _(fu(ot), "react-aria-components");
  var f, v;
  let m = Y({
    ...e,
    defaultChildren: (f = c ?? n) !== null && f !== void 0 ? f : h.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (v = (i = o.selectedItems[0]) === null || i === void 0 ? void 0 : i.value) !== null && v !== void 0 ? v : null,
      selectedItems: p.useMemo(() => o.selectedItems.map((g) => {
        var C;
        return (C = g.value) !== null && C !== void 0 ? C : null;
      }), [
        o.selectedItems
      ]),
      selectedText: d,
      isPlaceholder: o.selectedItems.length === 0,
      state: o
    }
  }), b = L(e, {
    global: !0
  });
  return /* @__PURE__ */ w.createElement("span", {
    ref: l,
    ...b,
    ...m,
    "data-placeholder": o.selectedItems.length === 0 || void 0
  }, /* @__PURE__ */ w.createElement(Xe.Provider, {
    value: void 0
  }, m.children));
});
function bu(t) {
  return t && t.__esModule ? t.default : t;
}
class yu extends Uo {
  addNode(e) {
    super.addNode(e), this.columnsDirty || (this.columnsDirty = e.type === "column"), e.type === "tableheader" && (this.head = e), e.type === "tablebody" && (this.body = e);
  }
  commit(e, l, i = !1) {
    this.updateColumns(i), this.rows = [];
    for (let u of this.getChildren(this.body.key)) {
      let r = u.lastChildKey;
      if (r != null) {
        let a = this.getItem(r);
        var o, n;
        let s = ((o = a.colIndex) !== null && o !== void 0 ? o : a.index) + ((n = a.colSpan) !== null && n !== void 0 ? n : 1);
        if (s !== this.columns.length && !i) throw new Error(`Cell count must match column count. Found ${s} cells and ${this.columns.length} columns.`);
      }
      this.rows.push(u);
    }
    super.commit(e, l, i);
  }
  updateColumns(e) {
    if (!this.columnsDirty) return;
    this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
    let l = /* @__PURE__ */ new Map(), i = (o) => {
      switch (o.type) {
        case "column":
          l.set(o.key, o), o.hasChildNodes || (o.index = this.columns.length, this.columns.push(o), o.props.isRowHeader && this.rowHeaderColumnKeys.add(o.key));
          break;
      }
      for (let n of this.getChildren(o.key)) i(n);
    };
    for (let o of this.getChildren(this.head.key)) i(o);
    if (this.headerRows = pi(l, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0 && !e) throw new Error("A table must have at least one Column with the isRowHeader prop set to true");
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
    var o;
    if ((i == null ? void 0 : i.type) === "column") return (o = i.prevKey) !== null && o !== void 0 ? o : null;
    let n = super.getKeyBefore(e);
    return n != null && ((l = this.getItem(n)) === null || l === void 0 ? void 0 : l.type) === "tablebody" ? null : n;
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
    let i = this.rowHeaderColumnKeys, o = [];
    for (let n of this.getChildren(e)) {
      let u = this.columns[n.index];
      if (i.has(u.key) && n.textValue && o.push(n.textValue), o.length === i.size) break;
    }
    return o.join(" ");
  }
  constructor(...e) {
    super(...e), this.headerRows = [], this.columns = [], this.rows = [], this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.head = new rt(-1), this.body = new at(-2), this.columnsDirty = !0;
  }
}
const ut = /* @__PURE__ */ p.createContext(null), $u = /* @__PURE__ */ p.forwardRef(function(e, l) {
  let i = ne(l), o = p.useRef(null), n = p.useRef(null), [u, r] = p.useState(0);
  he(() => {
    let s = o.current;
    for (; s && s !== i.current && !Lo(s); ) s = s.parentElement;
    n.current = s;
  }, [
    i
  ]), Ze({
    ref: n,
    box: "border-box",
    onResize() {
      var s, d;
      r((d = (s = n.current) === null || s === void 0 ? void 0 : s.clientWidth) !== null && d !== void 0 ? d : 0);
    }
  }), he(() => {
    var s, d;
    r((d = (s = n.current) === null || s === void 0 ? void 0 : s.clientWidth) !== null && d !== void 0 ? d : 0);
  }, []);
  let a = p.useMemo(() => ({
    tableRef: o,
    scrollRef: n,
    tableWidth: u,
    useTableColumnResizeState: uu,
    onResizeStart: e.onResizeStart,
    onResize: e.onResize,
    onResizeEnd: e.onResizeEnd
  }), [
    o,
    u,
    e.onResizeStart,
    e.onResize,
    e.onResizeEnd
  ]);
  return /* @__PURE__ */ w.createElement("div", {
    ...L(e, {
      global: !0
    }),
    ref: i,
    className: e.className || "react-aria-ResizableTableContainer",
    style: e.style,
    onScroll: e.onScroll
  }, /* @__PURE__ */ w.createElement(ut.Provider, {
    value: a
  }, e.children));
}), xu = /* @__PURE__ */ p.createContext(null), Z = /* @__PURE__ */ p.createContext(null), Me = /* @__PURE__ */ p.createContext(null), Cu = /* @__PURE__ */ p.forwardRef(function(e, l) {
  var i;
  [e, l] = Ie(e, l, xu);
  let o = jt(e), { selectionBehavior: n, selectionMode: u, disallowEmptySelection: r } = o, a = !!(!((i = e.dragAndDropHooks) === null || i === void 0) && i.useDraggableCollectionState), s = p.useMemo(() => ({
    selectionBehavior: u === "none" ? null : n,
    selectionMode: u,
    disallowEmptySelection: r,
    allowsDragging: a
  }), [
    n,
    u,
    r,
    a
  ]), d = /* @__PURE__ */ w.createElement(Du.Provider, {
    value: s
  }, /* @__PURE__ */ w.createElement(we, e));
  return /* @__PURE__ */ w.createElement(Lt, {
    content: d,
    createCollection: () => new yu()
  }, (c) => /* @__PURE__ */ w.createElement(wu, {
    props: e,
    forwardedRef: l,
    selectionState: o,
    collection: c
  }));
});
function wu({ props: t, forwardedRef: e, selectionState: l, collection: i }) {
  [t, e] = Ie(t, e, $t);
  let { shouldUseVirtualFocus: o, disallowTypeAhead: n, filter: u, ...r } = t, a = p.useContext(ut);
  e = ne(p.useMemo(() => Yo(e, a == null ? void 0 : a.tableRef), [
    e,
    a == null ? void 0 : a.tableRef
  ]));
  let s = cu({
    ...r,
    collection: i,
    children: void 0,
    UNSAFE_selectionState: l
  }), d = hu(s, u), { isVirtualized: c, layoutDelegate: h, dropTargetDelegate: f, CollectionRoot: v } = p.useContext(U), { dragAndDropHooks: m } = t, { gridProps: b } = Wn({
    ...r,
    layoutDelegate: h,
    isVirtualized: c
  }, d, e), g = d.selectionManager, C = !!(m != null && m.useDraggableCollectionState), y = !!(m != null && m.useDroppableCollectionState), $ = p.useRef(C), x = p.useRef(y);
  p.useEffect(() => {
    process.env.NODE_ENV !== "production" && ($.current !== C && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), x.current !== y && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    C,
    y
  ]);
  let D, k, P, z = !1, E = null, K = p.useRef(null);
  if (C && m) {
    D = m.useDraggableCollectionState({
      collection: d.collection,
      selectionManager: g,
      preview: m.renderDragPreview ? K : void 0
    }), m.useDraggableCollection({}, D, e);
    let B = m.DragPreview;
    E = m.renderDragPreview ? /* @__PURE__ */ w.createElement(B, {
      ref: K
    }, m.renderDragPreview) : null;
  }
  if (y && m) {
    k = m.useDroppableCollectionState({
      collection: d.collection,
      selectionManager: g
    });
    let B = new Vt({
      collection: d.collection,
      disabledKeys: g.disabledKeys,
      disabledBehavior: g.disabledBehavior,
      ref: e,
      layoutDelegate: h
    }), M = m.dropTargetDelegate || f || new m.ListDropTargetDelegate(i.rows, e);
    P = m.useDroppableCollection({
      keyboardDelegate: B,
      dropTargetDelegate: M
    }, k, e), z = k.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: F, isFocused: H, isFocusVisible: j } = ie(), O = Y({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-Table",
    values: {
      isDropTarget: z,
      isFocused: H,
      isFocusVisible: j,
      state: d
    }
  }), ue = !!(C && !(D != null && D.isDisabled)), G = O.style, pe = null;
  a && (pe = a.useTableColumnResizeState({
    tableWidth: a.tableWidth
  }, d), c || (G = {
    ...G,
    tableLayout: "fixed",
    width: "fit-content"
  }));
  let Fe = V("table"), Ne = L(t, {
    global: !0
  });
  var ve;
  return /* @__PURE__ */ w.createElement(xe, {
    values: [
      [
        Z,
        d
      ],
      [
        Me,
        pe
      ],
      [
        fe,
        {
          dragAndDropHooks: m,
          dragState: D,
          dropState: k
        }
      ],
      [
        bn,
        {
          render: Pu
        }
      ],
      [
        $t,
        null
      ],
      [
        qo,
        null
      ]
    ]
  }, /* @__PURE__ */ w.createElement(Xo, null, /* @__PURE__ */ w.createElement(Fe, {
    ...N(Ne, O, b, F, P == null ? void 0 : P.collectionProps),
    style: G,
    ref: e,
    slot: t.slot || void 0,
    onScroll: t.onScroll,
    "data-allows-dragging": ue || void 0,
    "data-drop-target": z || void 0,
    "data-focused": H || void 0,
    "data-focus-visible": j || void 0
  }, /* @__PURE__ */ w.createElement(yn, null, /* @__PURE__ */ w.createElement(v, {
    collection: d.collection,
    scrollRef: (ve = a == null ? void 0 : a.scrollRef) !== null && ve !== void 0 ? ve : e,
    persistedKeys: $n(g, m, k)
  })))), E);
}
function V(t) {
  let { isVirtualized: e } = p.useContext(U);
  return e ? "div" : t;
}
const Du = /* @__PURE__ */ p.createContext(null);
class rt extends Pe {
}
rt.type = "tableheader";
const Ji = /* @__PURE__ */ Qe(rt, (t, e) => {
  let l = p.useContext(Z).collection, i = fn({
    items: l.headerRows,
    children: p.useCallback((s) => {
      switch (s.type) {
        case "headerrow":
          return /* @__PURE__ */ w.createElement(ku, {
            item: s
          });
        default:
          throw new Error("Unsupported node type in TableHeader: " + s.type);
      }
    }, [])
  }), o = V("thead"), { rowGroupProps: n } = si(), { hoverProps: u, isHovered: r } = Ce({
    onHoverStart: t.onHoverStart,
    onHoverChange: t.onHoverChange,
    onHoverEnd: t.onHoverEnd
  }), a = Y({
    className: t.className,
    style: t.style,
    defaultClassName: "react-aria-TableHeader",
    values: {
      isHovered: r
    }
  });
  return /* @__PURE__ */ w.createElement(o, {
    ...N(L(t, {
      global: !0
    }), n, u),
    ...a,
    ref: e,
    "data-hovered": r || void 0
  }, i);
}, (t) => /* @__PURE__ */ w.createElement(we, {
  dependencies: t.dependencies,
  items: t.columns
}, t.children));
function ku({ item: t }) {
  let e = p.useRef(null), l = p.useContext(Z), { isVirtualized: i, CollectionBranch: o } = p.useContext(U), { rowProps: n } = qn({
    node: t,
    isVirtualized: i
  }, l, e), { checkboxProps: u } = Jn(l), r = V("tr");
  return /* @__PURE__ */ w.createElement(r, {
    ...n,
    ref: e
  }, /* @__PURE__ */ w.createElement(xe, {
    values: [
      [
        Kt,
        {
          slots: {
            selection: u
          }
        }
      ]
    ]
  }, /* @__PURE__ */ w.createElement(o, {
    collection: l.collection,
    parent: t
  })));
}
class Qi extends Pe {
}
Qi.type = "column";
const Su = /* @__PURE__ */ _e(Qi, (t, e, l) => {
  var i, o;
  let n = ne(e), u = p.useContext(Z), { isVirtualized: r } = p.useContext(U), { columnHeaderProps: a } = Un({
    node: l,
    isVirtualized: r
  }, u, n), { isFocused: s, isFocusVisible: d, focusProps: c } = ie(), h = p.useContext(Me), f = !1;
  if (h) f = h.resizingColumn === l.key;
  else if (process.env.NODE_ENV !== "production")
    for (let $ in [
      "width",
      "defaultWidth",
      "minWidth",
      "maxWidth"
    ]) $ in l.props && console.warn(`The ${$} prop on a <Column> only applies when a <Table> is wrapped in a <ResizableTableContainer>. If you aren't using column resizing, you can set the width of a column with CSS.`);
  let { hoverProps: v, isHovered: m } = Ce({
    isDisabled: !t.allowsSorting
  }), b = Y({
    ...t,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-Column",
    values: {
      isHovered: m,
      isFocused: s,
      isFocusVisible: d,
      allowsSorting: l.props.allowsSorting,
      sortDirection: ((i = u.sortDescriptor) === null || i === void 0 ? void 0 : i.column) === l.key ? u.sortDescriptor.direction : void 0,
      isResizing: f,
      startResize: () => {
        if (h)
          h.startResize(l.key), u.setKeyboardNavigationDisabled(!0);
        else throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
      },
      sort: ($) => {
        u.sort(l.key, $);
      }
    }
  }), g = b.style;
  h && (g = {
    ...g,
    width: h.getColumnWidth(l.key)
  });
  let C = V("th"), y = L(t, {
    global: !0
  });
  return delete y.id, /* @__PURE__ */ w.createElement(C, {
    ...N(y, a, c, v),
    ...b,
    style: g,
    ref: n,
    "data-hovered": m || void 0,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0,
    "data-resizing": f || void 0,
    "data-allows-sorting": l.props.allowsSorting || void 0,
    "data-sort-direction": ((o = u.sortDescriptor) === null || o === void 0 ? void 0 : o.column) === l.key ? u.sortDescriptor.direction : void 0
  }, /* @__PURE__ */ w.createElement(xe, {
    values: [
      [
        _i,
        {
          column: l,
          triggerRef: n
        }
      ],
      [
        U,
        Wt
      ]
    ]
  }, b.children));
}), _i = /* @__PURE__ */ p.createContext(null), Eu = /* @__PURE__ */ p.forwardRef(function(e, l) {
  let i = p.useContext(Me);
  if (!i) throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  let o = _(bu(ot), "react-aria-components"), { onResizeStart: n, onResize: u, onResizeEnd: r } = p.useContext(ut), { column: a, triggerRef: s } = p.useContext(_i), d = p.useRef(null), { resizerProps: c, inputProps: h, isResizing: f } = _n({
    column: a,
    "aria-label": e["aria-label"] || o.format("tableResizer"),
    onResizeStart: n,
    onResize: u,
    onResizeEnd: r,
    triggerRef: s
  }, i, d), { focusProps: v, isFocused: m, isFocusVisible: b } = ie(), { hoverProps: g, isHovered: C } = Ce(e), y = i.getColumnMinWidth(a.key) >= i.getColumnWidth(a.key), $ = i.getColumnMaxWidth(a.key) <= i.getColumnWidth(a.key), { direction: x } = Q(), D = "both";
  y ? D = x === "rtl" ? "right" : "left" : $ ? D = x === "rtl" ? "left" : "right" : D = "both";
  let k = ne(l), [P, z] = p.useState("");
  p.useEffect(() => {
    if (!k.current) return;
    let O = window.getComputedStyle(k.current);
    z(O.cursor);
  }, [
    k,
    D
  ]);
  let E = Y({
    ...e,
    defaultClassName: "react-aria-ColumnResizer",
    values: {
      isFocused: m,
      isFocusVisible: b,
      isResizing: f,
      isHovered: C,
      resizableDirection: D
    }
  }), [K, F] = p.useState(!1), H = (O) => {
    O.pointerType === "mouse" && F(!0);
  };
  !f && K && F(!1);
  let j = L(e, {
    global: !0
  });
  return /* @__PURE__ */ w.createElement("div", {
    ref: k,
    role: "presentation",
    ...N(j, E, c, {
      onPointerDown: H
    }, g),
    "data-hovered": C || void 0,
    "data-focused": m || void 0,
    "data-focus-visible": b || void 0,
    "data-resizing": f || void 0,
    "data-resizable-direction": D
  }, E.children, /* @__PURE__ */ w.createElement("input", {
    ref: d,
    ...N(h, v)
  }), f && K && /* @__PURE__ */ Zo.createPortal(/* @__PURE__ */ w.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      cursor: P
    }
  }), document.body));
});
class at extends Wo {
}
at.type = "tablebody";
const zu = /* @__PURE__ */ Qe(at, (t, e) => {
  let l = p.useContext(Z), { isVirtualized: i } = p.useContext(U), o = l.collection, { CollectionBranch: n } = p.useContext(U), { dragAndDropHooks: u, dropState: r } = p.useContext(fe), a = !!(u != null && u.useDroppableCollectionState) && !(r != null && r.isDisabled);
  var s;
  let d = a && !!r && ((s = r.isDropTarget({
    type: "root"
  })) !== null && s !== void 0 ? s : !1), c = o.size === 0, h = {
    isDropTarget: d,
    isEmpty: c
  }, f = Y({
    ...t,
    id: void 0,
    children: void 0,
    defaultClassName: "react-aria-TableBody",
    values: h
  }), v, m = V("tr"), b = V("td"), g = o.columnCount;
  if (c && t.renderEmptyState && l) {
    let x = {}, D = {}, k = {};
    i ? (D["aria-colspan"] = g, k = {
      display: "contents"
    }) : D.colSpan = g, v = /* @__PURE__ */ w.createElement(m, {
      role: "row",
      ...x,
      style: k
    }, /* @__PURE__ */ w.createElement(b, {
      role: "rowheader",
      ...D,
      style: k
    }, t.renderEmptyState(h)));
  }
  let { rowGroupProps: C } = si(), y = V("tbody"), $ = L(t, {
    global: !0
  });
  return /* @__PURE__ */ w.createElement(y, {
    ...N($, f, C),
    ref: e,
    "data-empty": c || void 0
  }, a && /* @__PURE__ */ w.createElement(Mu, null), /* @__PURE__ */ w.createElement(n, {
    collection: o,
    parent: o.body,
    renderDropIndicator: pn(u, r)
  }), v);
});
class eo extends Pe {
  filter(e, l, i) {
    let o = e.getChildren(this.key);
    for (let n of o) if (i(n.textValue, n)) {
      let u = this.clone();
      return l.addDescendants(u, e), u;
    }
    return null;
  }
}
eo.type = "item";
const Bu = /* @__PURE__ */ Qe(eo, (t, e, l) => {
  let i = ne(e), o = p.useContext(Z), { dragAndDropHooks: n, dragState: u, dropState: r } = p.useContext(fe), { isVirtualized: a, CollectionBranch: s } = p.useContext(U), { rowProps: d, ...c } = Yn({
    node: l,
    shouldSelectOnPressUp: !!u,
    isVirtualized: a
  }, o, i), { isFocused: h, isFocusVisible: f, focusProps: v } = ie(), { isFocusVisible: m, focusProps: b } = ie({
    within: !0
  }), { hoverProps: g, isHovered: C } = Ce({
    isDisabled: !c.allowsSelection && !c.hasAction,
    onHoverStart: t.onHoverStart,
    onHoverChange: t.onHoverChange,
    onHoverEnd: t.onHoverEnd
  }), { checkboxProps: y } = Gn({
    key: l.key
  }, o), $;
  u && n && ($ = n.useDraggableItem({
    key: l.key,
    hasDragButton: !0
  }, u));
  let x, D = p.useRef(null), { visuallyHiddenProps: k } = $e();
  r && n && (x = n.useDropIndicator({
    target: {
      type: "item",
      key: l.key,
      dropPosition: "on"
    }
  }, r, D));
  let P = p.useRef(null);
  p.useEffect(() => {
    u && !P.current && process.env.NODE_ENV !== "production" && console.warn('Draggable items in a Table must contain a <Button slot="drag"> element so that keyboard and screen reader users can drag them.');
  }, []);
  let z = u && u.isDragging(l.key), { children: E, ...K } = t, F = Y({
    ...K,
    id: void 0,
    defaultClassName: "react-aria-Row",
    values: {
      ...c,
      isHovered: C,
      isFocused: h,
      isFocusVisible: f,
      selectionMode: o.selectionManager.selectionMode,
      selectionBehavior: o.selectionManager.selectionBehavior,
      isDragging: z,
      isDropTarget: x == null ? void 0 : x.isDropTarget,
      isFocusVisibleWithin: m,
      id: l.key
    }
  }), H = V("tr"), j = V("td"), O = L(t, {
    global: !0
  });
  return delete O.id, delete O.onClick, /* @__PURE__ */ w.createElement(w.Fragment, null, x && !x.isHidden && /* @__PURE__ */ w.createElement(H, {
    role: "row",
    style: {
      height: 0
    }
  }, /* @__PURE__ */ w.createElement(j, {
    role: "gridcell",
    colSpan: o.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ w.createElement("div", {
    role: "button",
    ...k,
    ...x.dropIndicatorProps,
    ref: D
  }))), /* @__PURE__ */ w.createElement(H, {
    ...N(O, F, d, v, g, $ == null ? void 0 : $.dragProps, b),
    ref: i,
    "data-disabled": c.isDisabled || void 0,
    "data-selected": c.isSelected || void 0,
    "data-hovered": C || void 0,
    "data-focused": c.isFocused || void 0,
    "data-focus-visible": f || void 0,
    "data-pressed": c.isPressed || void 0,
    "data-dragging": z || void 0,
    "data-drop-target": (x == null ? void 0 : x.isDropTarget) || void 0,
    "data-selection-mode": o.selectionManager.selectionMode === "none" ? void 0 : o.selectionManager.selectionMode,
    "data-focus-visible-within": m || void 0
  }, /* @__PURE__ */ w.createElement(xe, {
    values: [
      [
        Kt,
        {
          slots: {
            [yt]: {},
            selection: y
          }
        }
      ],
      [
        Ge,
        {
          slots: {
            [yt]: {},
            drag: {
              ...$ == null ? void 0 : $.dragButtonProps,
              ref: P,
              style: {
                pointerEvents: "none"
              }
            }
          }
        }
      ],
      [
        vn,
        {
          isSelected: c.isSelected
        }
      ]
    ]
  }, /* @__PURE__ */ w.createElement(s, {
    collection: o.collection,
    parent: l
  }))));
}, (t) => {
  if (t.id == null && typeof t.children == "function") throw new Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
  let e = [
    t.value
  ].concat(t.dependencies);
  return /* @__PURE__ */ w.createElement(we, {
    dependencies: e,
    items: t.columns,
    idScope: t.id
  }, t.children);
});
class to extends Pe {
}
to.type = "cell";
const Iu = /* @__PURE__ */ _e(to, (t, e, l) => {
  let i = ne(e), o = p.useContext(Z), { dragState: n } = p.useContext(fe), { isVirtualized: u } = p.useContext(U);
  l.column = o.collection.columns[l.index];
  let { gridCellProps: r, isPressed: a } = Xn({
    node: l,
    shouldSelectOnPressUp: !!n,
    isVirtualized: u
  }, o, i), { isFocused: s, isFocusVisible: d, focusProps: c } = ie(), { hoverProps: h, isHovered: f } = Ce({}), v = Y({
    ...t,
    id: void 0,
    defaultClassName: "react-aria-Cell",
    values: {
      isFocused: s,
      isFocusVisible: d,
      isPressed: a,
      isHovered: f,
      id: l.key
    }
  }), m = V("td"), b = L(t, {
    global: !0
  });
  return delete b.id, /* @__PURE__ */ w.createElement(m, {
    ...N(b, v, r, c, h),
    ref: i,
    "data-focused": s || void 0,
    "data-focus-visible": d || void 0,
    "data-pressed": a || void 0
  }, /* @__PURE__ */ w.createElement(U.Provider, {
    value: Wt
  }, v.children));
});
function Pu(t, e) {
  e = ne(e);
  let { dragAndDropHooks: l, dropState: i } = p.useContext(fe), o = p.useRef(null), { dropIndicatorProps: n, isHidden: u, isDropTarget: r } = l.useDropIndicator(t, i, o);
  return u ? null : /* @__PURE__ */ w.createElement(Au, {
    ...t,
    dropIndicatorProps: n,
    isDropTarget: r,
    buttonRef: o,
    ref: e
  });
}
function Ru(t, e) {
  let { dropIndicatorProps: l, isDropTarget: i, buttonRef: o, ...n } = t, u = p.useContext(Z), { visuallyHiddenProps: r } = $e(), a = Y({
    ...n,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: i
    }
  }), s = V("tr"), d = V("td");
  return /* @__PURE__ */ w.createElement(s, {
    ...L(t, {
      global: !0
    }),
    ...a,
    role: "row",
    ref: e,
    "data-drop-target": i || void 0
  }, /* @__PURE__ */ w.createElement(d, {
    role: "gridcell",
    colSpan: u.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ w.createElement("div", {
    ...r,
    role: "button",
    ...l,
    ref: o
  }), a.children));
}
const Au = /* @__PURE__ */ p.forwardRef(Ru);
function Mu() {
  let t = p.useContext(Z), { dragAndDropHooks: e, dropState: l } = p.useContext(fe), i = p.useRef(null), { dropIndicatorProps: o } = e.useDropIndicator({
    target: {
      type: "root"
    }
  }, l, i), n = l.isDropTarget({
    type: "root"
  }), { visuallyHiddenProps: u } = $e(), r = V("tr"), a = V("td");
  return !n && o["aria-hidden"] ? null : /* @__PURE__ */ w.createElement(r, {
    role: "row",
    "aria-hidden": o["aria-hidden"],
    style: {
      height: 0
    }
  }, /* @__PURE__ */ w.createElement(a, {
    role: "gridcell",
    colSpan: t.collection.columnCount,
    style: {
      padding: 0
    }
  }, /* @__PURE__ */ w.createElement("div", {
    role: "button",
    ...u,
    ...o,
    ref: i
  })));
}
_e(Oo, function(e, l, i) {
  let o = p.useContext(Z), { isVirtualized: n } = p.useContext(U), { isLoading: u, onLoadMore: r, scrollOffset: a, ...s } = e, d = o.collection.columns.length, c = p.useRef(null), h = p.useMemo(() => ({
    onLoadMore: r,
    collection: o == null ? void 0 : o.collection,
    sentinelRef: c,
    scrollOffset: a
  }), [
    r,
    a,
    o == null ? void 0 : o.collection
  ]);
  mn(h, c);
  let f = Y({
    ...s,
    id: void 0,
    children: i.rendered,
    defaultClassName: "react-aria-TableLoadingIndicator",
    values: null
  }), v = V("tr"), m = V("td"), b = {}, g = {}, C = {};
  return n ? (g["aria-colspan"] = d, C = {
    display: "contents"
  }) : g.colSpan = d, /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(v, {
    style: {
      height: 0
    },
    inert: gn(!0)
  }, /* @__PURE__ */ w.createElement(m, {
    style: {
      padding: 0,
      border: 0
    }
  }, /* @__PURE__ */ w.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: c,
    style: {
      position: "relative",
      height: 1,
      width: 1
    }
  }))), u && f.children && /* @__PURE__ */ w.createElement(v, {
    ...N(L(e, {
      global: !0
    }), b),
    ...f,
    role: "row",
    ref: l
  }, /* @__PURE__ */ w.createElement(m, {
    role: "rowheader",
    ...g,
    style: C
  }, f.children)));
});
class Ku {
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
class W {
  /**
  * Returns a copy of the LayoutInfo.
  */
  copy() {
    let e = new W(this.type, this.key, this.rect.copy());
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
class te {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new te(this.x, this.y);
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
class I {
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
    return new te(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new te(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new te(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new te(this.maxX, this.maxY);
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
    let l = Math.min(this.x, e.x), i = Math.min(this.y, e.y), o = Math.max(this.maxX, e.maxX) - l, n = Math.max(this.maxY, e.maxY) - i;
    return new I(l, i, o, n);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(e) {
    if (!this.intersects(e)) return new I(0, 0, 0, 0);
    let l = Math.max(this.x, e.x), i = Math.max(this.y, e.y);
    return new I(l, i, Math.min(this.maxX, e.maxX) - l, Math.min(this.maxY, e.maxY) - i);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new I(this.x, this.y, this.width, this.height);
  }
  constructor(e = 0, l = 0, i = 0, o = 0) {
    this.x = e, this.y = l, this.width = i, this.height = o;
  }
}
class oe {
  /**
  * Returns a copy of this size.
  */
  copy() {
    return new oe(this.width, this.height);
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
let Tu = 0;
class lo {
  /**
  * Prepares the view for reuse. Called just before the view is removed from the DOM.
  */
  prepareForReuse() {
    this.content = null, this.rendered = null, this.layoutInfo = null;
  }
  getReusableView(e) {
    let l = this.reusableViews.get(e);
    return l && l.length > 0 ? l.shift() : new Nu(this.virtualizer, this, e);
  }
  reuseChild(e) {
    e.prepareForReuse();
    let l = this.reusableViews.get(e.viewType);
    l || (l = [], this.reusableViews.set(e.viewType, l)), l.push(e);
  }
  constructor(e, l) {
    this.virtualizer = e, this.key = ++Tu, this.viewType = l, this.children = /* @__PURE__ */ new Set(), this.reusableViews = /* @__PURE__ */ new Map(), this.layoutInfo = null, this.content = null, this.rendered = null;
  }
}
class Fu extends lo {
  constructor(e) {
    super(e, "root");
  }
}
class Nu extends lo {
  constructor(e, l, i) {
    super(e, i), this.parent = l;
  }
}
function Hu(t, e) {
  if (t === e) return !0;
  if (t.size !== e.size) return !1;
  for (let l of t)
    if (!e.has(l)) return !1;
  return !0;
}
class Vu {
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
    this.startTime = 0, this.velocity = new te(0, 0), this.visibleRect = new I();
  }
}
class ju {
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
      let { type: l, key: i, content: o } = e.layoutInfo;
      e.content = o || this.collection.getItem(i), e.rendered = this._renderContent(l, e.content);
    }
  }
  _renderContent(e, l) {
    let i = l != null ? this._renderedContent.get(l) : null;
    if (i != null) return i;
    let o = this.delegate.renderView(e, l);
    return l && this._renderedContent.set(l, o), o;
  }
  /**
  * Returns the key for the item view currently at the given point.
  */
  keyAtPoint(e) {
    let l = new I(e.x, e.y, 1, 1), i = l.area === 0 ? [] : this.layout.getVisibleLayoutInfos(l);
    for (let o of i)
      if (o.rect.intersects(l)) return o.key;
    return null;
  }
  relayout(e = {}) {
    this.layout.update(e), this.contentSize = this.layout.getContentSize();
    let l = this.visibleRect, i = e.contentChanged ? 0 : l.x, o = e.contentChanged ? 0 : l.y;
    if (i = Math.max(0, Math.min(this.contentSize.width - l.width, i)), o = Math.max(0, Math.min(this.contentSize.height - l.height, o)), i !== l.x || o !== l.y) {
      let n = new I(i, o, l.width, l.height);
      this.delegate.setVisibleRect(n);
    } else this.updateSubviews();
  }
  getVisibleLayoutInfos() {
    let e = process.env.NODE_ENV === "test" && !process.env.VIRT_ON, l = e && typeof HTMLElement < "u" && Object.getOwnPropertyNames(HTMLElement.prototype).includes("clientWidth"), i = e && typeof HTMLElement < "u" && Object.getOwnPropertyNames(HTMLElement.prototype).includes("clientHeight"), o;
    e && !(l && i) ? o = new I(0, 0, this.contentSize.width, this.contentSize.height) : o = this._overscanManager.getOverscannedRect();
    let n = this.layout.getVisibleLayoutInfos(o), u = /* @__PURE__ */ new Map();
    for (let r of n) u.set(r.key, r);
    return u;
  }
  updateSubviews() {
    let e = this.getVisibleLayoutInfos(), l = /* @__PURE__ */ new Set();
    for (let [i, o] of this._visibleViews) {
      let n = e.get(i);
      (!n || o.parent !== this.getParentView(n)) && (this._visibleViews.delete(i), o.parent.reuseChild(o), l.add(o));
    }
    for (let [i, o] of e) {
      let n = this._visibleViews.get(i);
      if (!n)
        n = this.getReusableView(o), n.parent.children.add(n), this._visibleViews.set(i, n), l.delete(n);
      else {
        n.layoutInfo = o;
        let u = this.collection.getItem(o.key);
        n.content !== u && (n.content != null && this._renderedContent.delete(n.content), this._renderView(n));
      }
    }
    for (let i of l)
      i.parent.children.delete(i), i.parent.reusableViews.clear();
    if (!this._isScrolling)
      for (let i of e.keys()) {
        let o = this._visibleViews.get(i);
        o.parent.children.delete(o), o.parent.children.add(o);
      }
  }
  /** Performs layout and updates visible views as needed. */
  render(e) {
    let l = this, i = !1, o = !1, n = !1, u = !1, r = !1, a = !1;
    return e.collection !== this.collection && (l.collection = e.collection, i = !0), (e.layout !== this.layout || this.layout.virtualizer !== this) && (this.layout && (this.layout.virtualizer = null), e.layout.virtualizer = this, l.layout = e.layout, i = !0), e.persistedKeys && !Hu(e.persistedKeys, this.persistedKeys) && (l.persistedKeys = e.persistedKeys, a = !0), this.visibleRect.equals(e.visibleRect) || (this._overscanManager.setVisibleRect(e.visibleRect), this.layout.shouldInvalidate(e.visibleRect, this.visibleRect) ? (o = !e.visibleRect.pointEquals(this.visibleRect), n = !e.visibleRect.sizeEquals(this.visibleRect), i = !0) : a = !0, l.visibleRect = e.visibleRect), e.invalidationContext !== this._invalidationContext && (e.invalidationContext && (n || (n = e.invalidationContext.sizeChanged || !1), o || (o = e.invalidationContext.offsetChanged || !1), u || (u = e.invalidationContext.itemSizeChanged || !1), r || (r = e.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && e.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(e.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions)), i || (i = u || n || o || r)), this._invalidationContext = e.invalidationContext), e.isScrolling !== this._isScrolling && (this._isScrolling = e.isScrolling, e.isScrolling || (a = !0)), i ? this.relayout({
      offsetChanged: o,
      sizeChanged: n,
      itemSizeChanged: u,
      layoutOptionsChanged: r,
      layoutOptions: this._invalidationContext.layoutOptions
    }) : a && this.updateSubviews(), Array.from(this._rootView.children);
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
    this.delegate = e.delegate, this.collection = e.collection, this.layout = e.layout, this.contentSize = new oe(), this.visibleRect = new I(), this.persistedKeys = /* @__PURE__ */ new Set(), this._visibleViews = /* @__PURE__ */ new Map(), this._renderedContent = /* @__PURE__ */ new WeakMap(), this._rootView = new Fu(this), this._isScrolling = !1, this._invalidationContext = {}, this._overscanManager = new Vu();
  }
}
const Lu = typeof document < "u" ? w.useLayoutEffect : () => {
};
function Wu(t) {
  let [e, l] = p.useState(new I(0, 0, 0, 0)), [i, o] = p.useState(!1), [n, u] = p.useState({}), r = p.useRef(!1), [a] = p.useState(() => new ju({
    collection: t.collection,
    layout: t.layout,
    delegate: {
      setVisibleRect(m) {
        l(m), r.current = !0;
      },
      // TODO: should changing these invalidate the entire cache?
      renderView: t.renderView,
      invalidate: u
    }
  }));
  Lu(() => {
    r.current && (r.current = !1, t.onVisibleRectChange(e));
  });
  let s = p.useMemo(() => t.layoutOptions != null ? {
    ...n,
    layoutOptions: t.layoutOptions
  } : n, [
    n,
    t.layoutOptions
  ]), d = a.render({
    layout: t.layout,
    collection: t.collection,
    persistedKeys: t.persistedKeys,
    layoutOptions: t.layoutOptions,
    visibleRect: e,
    invalidationContext: s,
    isScrolling: i
  }), c = a.contentSize, h = p.useCallback(() => {
    o(!0);
  }, []), f = p.useCallback(() => {
    o(!1);
  }, []);
  return p.useMemo(() => ({
    virtualizer: a,
    visibleViews: d,
    setVisibleRect: l,
    contentSize: c,
    isScrolling: i,
    startScrolling: h,
    endScrolling: f
  }), [
    a,
    d,
    l,
    c,
    i,
    h,
    f
  ]);
}
const se = 48;
class Ou extends Ku {
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
      let u = ((i = (l = this.rowHeight) !== null && l !== void 0 ? l : this.estimatedRowHeight) !== null && i !== void 0 ? i : se) + this.gap;
      e.y = Math.floor(e.y / u) * u, e.height = Math.ceil(e.height / u) * u;
    }
    this.layoutIfNeeded(e);
    let o = [], n = (u) => {
      for (let r of u) this.isVisible(r, e) && (o.push(r.layoutInfo), r.children && n(r.children));
    };
    return n(this.rootNodes), o;
  }
  layoutIfNeeded(e) {
    if (this.lastCollection) {
      this.requestedRect.containsRect(e) || (this.requestedRect = this.requestedRect.union(e), this.rootNodes = this.buildCollection());
      for (let l of this.virtualizer.persistedKeys)
        if (this.ensureLayoutInfo(l)) return;
    }
  }
  ensureLayoutInfo(e) {
    return !this.layoutNodes.has(e) && this.requestedRect.area < this.contentSize.area && this.lastCollection ? (this.requestedRect = new I(0, 0, 1 / 0, 1 / 0), this.rootNodes = this.buildCollection(), this.requestedRect = new I(0, 0, this.contentSize.width, this.contentSize.height), !0) : !1;
  }
  isVisible(e, l) {
    return e.layoutInfo.rect.intersects(l) || e.layoutInfo.isSticky || e.layoutInfo.type === "header" || e.layoutInfo.type === "loader" || this.virtualizer.isPersistedKey(e.layoutInfo.key);
  }
  shouldInvalidateEverything(e) {
    let l = e.layoutOptions;
    var i, o, n, u, r;
    return e.sizeChanged || this.rowHeight !== ((i = l == null ? void 0 : l.rowHeight) !== null && i !== void 0 ? i : this.rowHeight) || this.headingHeight !== ((o = l == null ? void 0 : l.headingHeight) !== null && o !== void 0 ? o : this.headingHeight) || this.loaderHeight !== ((n = l == null ? void 0 : l.loaderHeight) !== null && n !== void 0 ? n : this.loaderHeight) || this.gap !== ((u = l == null ? void 0 : l.gap) !== null && u !== void 0 ? u : this.gap) || this.padding !== ((r = l == null ? void 0 : l.padding) !== null && r !== void 0 ? r : this.padding);
  }
  shouldInvalidateLayoutOptions(e, l) {
    return e.rowHeight !== l.rowHeight || e.estimatedRowHeight !== l.estimatedRowHeight || e.headingHeight !== l.headingHeight || e.estimatedHeadingHeight !== l.estimatedHeadingHeight || e.loaderHeight !== l.loaderHeight || e.dropIndicatorThickness !== l.dropIndicatorThickness || e.gap !== l.gap || e.padding !== l.padding;
  }
  update(e) {
    let l = this.virtualizer.collection;
    this.invalidateEverything = this.shouldInvalidateEverything(e), this.invalidateEverything && (this.requestedRect = this.virtualizer.visibleRect.copy(), this.layoutNodes.clear());
    let i = e.layoutOptions;
    var o;
    this.rowHeight = (o = i == null ? void 0 : i.rowHeight) !== null && o !== void 0 ? o : this.rowHeight;
    var n;
    this.estimatedRowHeight = (n = i == null ? void 0 : i.estimatedRowHeight) !== null && n !== void 0 ? n : this.estimatedRowHeight;
    var u;
    this.headingHeight = (u = i == null ? void 0 : i.headingHeight) !== null && u !== void 0 ? u : this.headingHeight;
    var r;
    this.estimatedHeadingHeight = (r = i == null ? void 0 : i.estimatedHeadingHeight) !== null && r !== void 0 ? r : this.estimatedHeadingHeight;
    var a;
    this.loaderHeight = (a = i == null ? void 0 : i.loaderHeight) !== null && a !== void 0 ? a : this.loaderHeight;
    var s;
    this.dropIndicatorThickness = (s = i == null ? void 0 : i.dropIndicatorThickness) !== null && s !== void 0 ? s : this.dropIndicatorThickness;
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
    ], o = i.filter((s) => s.type === "loader"), n = [], u = (l == null ? void 0 : l.size) === 0;
    u && (e = 0);
    for (let s of i) {
      var r, a;
      let d = ((a = (r = this.rowHeight) !== null && r !== void 0 ? r : this.estimatedRowHeight) !== null && a !== void 0 ? a : se) + this.gap;
      if (s.type === "item" && e + d < this.requestedRect.y && !this.isValid(s, e)) {
        e += d;
        continue;
      }
      let c = this.buildChild(s, this.padding, e, null);
      if (e = c.layoutInfo.rect.maxY + this.gap, n.push(c), s.type === "loader") {
        let h = o.indexOf(s);
        o.splice(h, 1);
      }
      if ((s.type === "item" || s.type === "loader") && e > this.requestedRect.maxY) {
        let h = i.indexOf(s);
        for (let f of o) {
          let v = i.indexOf(f);
          e += (v - h - 1) * d;
          let m = this.buildChild(f, this.padding, e, null);
          n.push(m), e = m.layoutInfo.rect.maxY, h = v;
        }
        e += (i.length - h - 1) * d;
        break;
      }
    }
    return e -= this.gap, e += u ? 0 : this.padding, this.contentSize = new oe(this.virtualizer.visibleRect.width, e), n;
  }
  isValid(e, l) {
    let i = this.layoutNodes.get(e.key);
    return !this.invalidateEverything && !!i && i.node === e && l === i.layoutInfo.rect.y && i.layoutInfo.rect.intersects(this.validRect) && i.validRect.containsRect(i.layoutInfo.rect.intersection(this.requestedRect));
  }
  buildChild(e, l, i, o) {
    if (this.isValid(e, i)) return this.layoutNodes.get(e.key);
    let n = this.buildNode(e, l, i);
    return n.layoutInfo.parentKey = o ?? null, n.layoutInfo.allowOverflow = !0, this.layoutNodes.set(e.key, n), n;
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
    let o = new I(l, i, this.padding, 0), n = new W("loader", e.key, o);
    o.width = this.virtualizer.contentSize.width - this.padding - l;
    var u, r, a;
    return o.height = e.props.isLoading ? (a = (r = (u = this.loaderHeight) !== null && u !== void 0 ? u : this.rowHeight) !== null && r !== void 0 ? r : this.estimatedRowHeight) !== null && a !== void 0 ? a : se : 0, {
      layoutInfo: n,
      validRect: o.intersection(this.requestedRect)
    };
  }
  buildSection(e, l, i) {
    let o = this.virtualizer.collection, n = this.virtualizer.visibleRect.width - this.padding, u = new I(l, i, n - l, 0), r = new W(e.type, e.key, u), a = i, s = 0, d = [];
    for (let f of T(e, o)) {
      var c, h;
      let v = ((h = (c = this.rowHeight) !== null && c !== void 0 ? c : this.estimatedRowHeight) !== null && h !== void 0 ? h : se) + this.gap;
      if (i + v < this.requestedRect.y && !this.isValid(e, i)) {
        i += v, s++;
        continue;
      }
      let m = this.buildChild(f, l, i, r.key);
      if (i = m.layoutInfo.rect.maxY + this.gap, d.push(m), i > this.requestedRect.maxY) {
        i += ([
          ...T(e, o)
        ].length - (d.length + s)) * v;
        break;
      }
    }
    return i -= this.gap, u.height = i - a, {
      layoutInfo: r,
      children: d,
      validRect: r.rect.intersection(this.requestedRect),
      node: e
    };
  }
  buildSectionHeader(e, l, i) {
    let o = this.virtualizer.visibleRect.width - this.padding, n = this.headingHeight, u = !1;
    if (n == null) {
      let s = this.layoutNodes.get(e.key), d = s == null ? void 0 : s.layoutInfo;
      if (d) {
        let c = this.virtualizer.collection.getItem(e.key), h = this.lastCollection ? this.lastCollection.getItem(e.key) : null;
        n = d.rect.height, u = o !== d.rect.width || c !== h || d.estimatedSize;
      } else
        n = e.rendered ? this.estimatedHeadingHeight : 0, u = !0;
    }
    n == null && (n = se);
    let r = new I(l, i, o - l, n), a = new W("header", e.key, r);
    return a.estimatedSize = u, {
      layoutInfo: a,
      children: [],
      validRect: a.rect.intersection(this.requestedRect),
      node: e
    };
  }
  buildItem(e, l, i) {
    let o = this.virtualizer.visibleRect.width - this.padding - l, n = this.rowHeight, u = !1;
    if (n == null) {
      let s = this.layoutNodes.get(e.key);
      s ? (n = s.layoutInfo.rect.height, u = o !== s.layoutInfo.rect.width || e !== s.node || s.layoutInfo.estimatedSize) : (n = this.estimatedRowHeight, u = !0);
    }
    n == null && (n = se);
    let r = new I(l, i, o, n), a = new W(e.type, e.key, r);
    return a.estimatedSize = u, {
      layoutInfo: a,
      children: [],
      validRect: a.rect,
      node: e
    };
  }
  updateItemSize(e, l) {
    let i = this.layoutNodes.get(e);
    if (!i) return !1;
    let o = this.virtualizer.collection, n = i.layoutInfo;
    if (n.estimatedSize = !1, n.rect.height !== l.height) {
      let u = n.copy();
      u.rect.height = l.height, i.layoutInfo = u, this.validRect.height = Math.min(this.validRect.height, n.rect.y - this.validRect.y), this.requestedRect.height += u.rect.height - n.rect.height, this.updateLayoutNode(e, n, u);
      let r = n.parentKey != null ? o.getItem(n.parentKey) : null;
      for (; r; )
        this.updateLayoutNode(r.key, n, u), r = r.parentKey != null ? o.getItem(r.parentKey) : null;
      return !0;
    }
    return !1;
  }
  updateLayoutNode(e, l, i) {
    let o = this.layoutNodes.get(e);
    o && (o.validRect = o.validRect.intersection(this.validRect), o.layoutInfo === l && (o.layoutInfo = i));
  }
  getContentSize() {
    return this.contentSize;
  }
  getDropTargetFromPoint(e, l, i) {
    e += this.virtualizer.visibleRect.x, l += this.virtualizer.visibleRect.y;
    let o = new I(e, Math.max(0, l - this.gap), 1, Math.max(1, this.gap * 2)), n = this.getVisibleLayoutInfos(o), u = null, r = 1 / 0;
    for (let c of n) {
      if (!c.rect.intersects(o)) continue;
      let h = Math.abs(c.rect.y - l), f = Math.abs(c.rect.maxY - l), v = Math.min(h, f);
      v < r && (r = v, u = c.key);
    }
    if (u == null || this.virtualizer.collection.size === 0) return {
      type: "root"
    };
    let a = this.getLayoutInfo(u);
    if (!a) return null;
    let s = a.rect, d = {
      type: "item",
      key: a.key,
      dropPosition: "on"
    };
    return i(d) ? l <= s.y + 10 && i({
      ...d,
      dropPosition: "before"
    }) ? d.dropPosition = "before" : l >= s.maxY - 10 && i({
      ...d,
      dropPosition: "after"
    }) && (d.dropPosition = "after") : l <= s.y + s.height / 2 && i({
      ...d,
      dropPosition: "before"
    }) ? d.dropPosition = "before" : i({
      ...d,
      dropPosition: "after"
    }) && (d.dropPosition = "after"), d;
  }
  getDropTargetLayoutInfo(e) {
    let l = this.getLayoutInfo(e.key), i;
    if (e.dropPosition === "before") i = new I(l.rect.x, Math.max(0, l.rect.y - this.dropIndicatorThickness / 2), l.rect.width, this.dropIndicatorThickness);
    else if (e.dropPosition === "after") {
      let n = this.collection.getItem(e.key);
      if (n) {
        var o;
        let u = (o = n.level) !== null && o !== void 0 ? o : 0, r = this.collection.getKeyAfter(e.key);
        for (; r != null; ) {
          let a = this.collection.getItem(r);
          if (!a || a.level <= u) break;
          l = this.getLayoutInfo(r) || l, r = this.collection.getKeyAfter(r);
        }
      }
      i = new I(l.rect.x, l.rect.maxY - this.dropIndicatorThickness / 2, l.rect.width, this.dropIndicatorThickness);
    } else i = l.rect;
    return new W("dropIndicator", e.key + ":" + e.dropPosition, i);
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
    var o;
    this.headingHeight = (o = e.headingHeight) !== null && o !== void 0 ? o : null;
    var n;
    this.estimatedHeadingHeight = (n = e.estimatedHeadingHeight) !== null && n !== void 0 ? n : null;
    var u;
    this.loaderHeight = (u = e.loaderHeight) !== null && u !== void 0 ? u : null, this.dropIndicatorThickness = e.dropIndicatorThickness || 2, this.gap = e.gap || 0, this.padding = e.padding || 0, this.layoutNodes = /* @__PURE__ */ new Map(), this.rootNodes = [], this.lastCollection = null, this.invalidateEverything = !1, this.validRect = new I(), this.requestedRect = new I(), this.contentSize = new oe();
  }
}
const wt = 48;
class Uu extends Ou {
  // Backward compatibility for subclassing.
  get collection() {
    return this.virtualizer.collection;
  }
  columnsChanged(e, l) {
    return !l || e.columns !== l.columns && e.columns.length !== l.columns.length || e.columns.some((i, o) => i.key !== l.columns[o].key || i.props.width !== l.columns[o].props.width || i.props.minWidth !== l.columns[o].props.minWidth || i.props.maxWidth !== l.columns[o].props.maxWidth);
  }
  shouldInvalidateLayoutOptions(e, l) {
    return e.columnWidths !== l.columnWidths || super.shouldInvalidateLayoutOptions(e, l);
  }
  update(e) {
    var l;
    let i = this.virtualizer.collection;
    if (!((l = e.layoutOptions) === null || l === void 0) && l.columnWidths) {
      for (const [o, n] of e.layoutOptions.columnWidths) if (this.columnWidths.get(o) !== n) {
        this.columnWidths = e.layoutOptions.columnWidths, e.sizeChanged = !0;
        break;
      }
    } else if (e.sizeChanged || this.columnsChanged(i, this.lastCollection)) {
      let o = new hi({});
      this.columnWidths = o.buildColumnWidths(this.virtualizer.visibleRect.width - this.padding * 2, i, /* @__PURE__ */ new Map()), e.sizeChanged = !0;
    }
    super.update(e);
  }
  buildCollection() {
    var e;
    this.stickyColumnIndices = [];
    let l = this.virtualizer.collection;
    if (((e = l.head) === null || e === void 0 ? void 0 : e.key) === -1) return [];
    for (let n of l.columns)
      (this.isStickyColumn(n) || l.rowHeaderColumnKeys.has(n.key)) && this.stickyColumnIndices.push(n.index);
    let i = this.buildTableHeader();
    this.layoutNodes.set(i.layoutInfo.key, i);
    let o = this.buildBody(i.layoutInfo.rect.maxY + this.gap);
    return this.lastPersistedKeys = null, o.layoutInfo.rect.width = Math.max(i.layoutInfo.rect.width, o.layoutInfo.rect.width), this.contentSize = new oe(o.layoutInfo.rect.width + this.padding * 2, o.layoutInfo.rect.maxY + this.padding), [
      i,
      o
    ];
  }
  buildTableHeader() {
    var e;
    let l = this.virtualizer.collection, i = new I(this.padding, this.padding, 0, 0);
    var o;
    let n = new W("header", (o = (e = l.head) === null || e === void 0 ? void 0 : e.key) !== null && o !== void 0 ? o : "header", i);
    n.isSticky = !0, n.zIndex = 1;
    let u = this.padding, r = 0, a = [];
    for (let s of l.headerRows) {
      let d = this.buildChild(s, this.padding, u, n.key);
      d.layoutInfo.parentKey = n.key, u = d.layoutInfo.rect.maxY, r = Math.max(r, d.layoutInfo.rect.width), d.index = a.length, a.push(d);
    }
    return i.width = r, i.height = u - this.padding, {
      layoutInfo: n,
      children: a,
      validRect: n.rect,
      node: l.head
    };
  }
  buildHeaderRow(e, l, i) {
    let o = new I(l, i, 0, 0), n = new W("headerrow", e.key, o), u = 0, r = [];
    for (let a of T(e, this.virtualizer.collection)) {
      let s = this.buildChild(a, l, i, n.key);
      s.layoutInfo.parentKey = n.key, l = s.layoutInfo.rect.maxX, u = Math.max(u, s.layoutInfo.rect.height), s.index = r.length, r.push(s);
    }
    for (let [a, s] of r.entries()) s.layoutInfo.zIndex = r.length - a + 1;
    return this.setChildHeights(r, u), o.height = u, o.width = l - o.x, {
      layoutInfo: n,
      children: r,
      validRect: o,
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
    let o = (i = e.colSpan) !== null && i !== void 0 ? i : 1;
    var n;
    let u = (n = e.colIndex) !== null && n !== void 0 ? n : e.index, r = 0;
    for (let s = u; s < u + o; s++) {
      let d = l.columns[s];
      var a;
      (d == null ? void 0 : d.key) != null && (r += (a = this.columnWidths.get(d.key)) !== null && a !== void 0 ? a : 0);
    }
    return r;
  }
  getEstimatedHeight(e, l, i, o) {
    let n = !1;
    if (i == null) {
      let u = this.layoutNodes.get(e.key);
      u ? (i = u.layoutInfo.rect.height, n = e !== u.node || l !== u.layoutInfo.rect.width || u.layoutInfo.estimatedSize) : (i = o ?? wt, n = !0);
    }
    return {
      height: i,
      isEstimated: n
    };
  }
  getEstimatedRowHeight() {
    var e, l;
    return (l = (e = this.rowHeight) !== null && e !== void 0 ? e : this.estimatedRowHeight) !== null && l !== void 0 ? l : wt;
  }
  buildColumn(e, l, i) {
    let o = this.getRenderedColumnWidth(e);
    var n, u;
    let { height: r, isEstimated: a } = this.getEstimatedHeight(e, o, (n = this.headingHeight) !== null && n !== void 0 ? n : this.rowHeight, (u = this.estimatedHeadingHeight) !== null && u !== void 0 ? u : this.estimatedRowHeight), s = new I(l, i, o, r), d = new W(e.type, e.key, s);
    return d.isSticky = this.isStickyColumn(e), d.zIndex = d.isSticky ? 2 : 1, d.estimatedSize = a, {
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
    let l = this.virtualizer.collection, i = new I(this.padding, e, 0, 0), o = new W("rowgroup", l.body.key, i), n = e, u = 0, r = 0, a = [], s = this.getEstimatedRowHeight() + this.gap, d = T(l.body, l);
    for (let f of d) {
      if (e + s < this.requestedRect.y && !this.isValid(f, e)) {
        e += s, u++;
        continue;
      }
      let v = this.buildChild(f, this.padding, e, o.key);
      if (v.layoutInfo.parentKey = o.key, v.index = a.length, e = v.layoutInfo.rect.maxY + this.gap, r = Math.max(r, v.layoutInfo.rect.width), a.push(v), e > this.requestedRect.maxY) {
        var c;
        let m = l.size - (a.length + u), b = J(d);
        if (e += m * s, (b == null ? void 0 : b.type) === "loader" && ((c = a.at(-1)) === null || c === void 0 ? void 0 : c.layoutInfo.type) !== "loader") {
          let g = this.buildChild(b, this.padding, e, o.key);
          g.layoutInfo.parentKey = o.key, g.index = l.size, r = Math.max(r, g.layoutInfo.rect.width), a.push(g), e = g.layoutInfo.rect.maxY;
        }
        break;
      }
    }
    return (l == null ? void 0 : l.size) === 0 ? e = this.virtualizer.visibleRect.maxY : e -= this.gap, i.width = r, i.height = e - n, {
      layoutInfo: o,
      children: a,
      validRect: o.rect.intersection(this.requestedRect),
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
    var o;
    let n = this.virtualizer.collection, u = new I(l, i, 0, 0), r = new W("row", e.key, u), a = [], s = 0;
    for (let c of T(e, n)) if (c.type === "cell")
      if (l > this.requestedRect.maxX) {
        let h = this.layoutNodes.get(c.key);
        if (h)
          h.layoutInfo.rect.x = l, l += h.layoutInfo.rect.width;
        else break;
      } else {
        let h = this.buildChild(c, l, i, r.key);
        l = h.layoutInfo.rect.maxX, s = Math.max(s, h.layoutInfo.rect.height), h.index = a.length, a.push(h);
      }
    this.setChildHeights(a, s);
    var d;
    return u.width = this.layoutNodes.get((d = (o = n.head) === null || o === void 0 ? void 0 : o.key) !== null && d !== void 0 ? d : "header").layoutInfo.rect.width, u.height = s, {
      layoutInfo: r,
      children: a,
      validRect: u.intersection(this.requestedRect),
      node: e
    };
  }
  buildCell(e, l, i) {
    let o = this.getRenderedColumnWidth(e), { height: n, isEstimated: u } = this.getEstimatedHeight(e, o, this.rowHeight, this.estimatedRowHeight), r = new I(l, i, o, n), a = new W(e.type, e.key, r);
    return a.isSticky = this.isStickyColumn(e), a.zIndex = a.isSticky ? 2 : 1, a.estimatedSize = u, {
      layoutInfo: a,
      children: [],
      validRect: r,
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
          for (let o of l.children)
            e.push(o.layoutInfo), this.addVisibleLayoutInfos(e, o, i);
          break;
        case "rowgroup": {
          let o = this.binarySearch(l.children, i.topLeft, "y"), n = this.binarySearch(l.children, i.bottomRight, "y"), u = this.persistedIndices.get(l.layoutInfo.key), r = 0;
          for (; u && r < u.length && u[r] < o; ) {
            let s = u[r];
            s < l.children.length && (e.push(l.children[s].layoutInfo), this.addVisibleLayoutInfos(e, l.children[s], i)), r++;
          }
          for (let s = o; s <= n; s++) {
            for (; u && r < u.length && u[r] < s; ) r++;
            e.push(l.children[s].layoutInfo), this.addVisibleLayoutInfos(e, l.children[s], i);
          }
          for (; u && r < u.length; ) {
            let s = u[r++];
            s < l.children.length && (e.push(l.children[s].layoutInfo), this.addVisibleLayoutInfos(e, l.children[s], i));
          }
          let a = l.children.at(-1);
          (a == null ? void 0 : a.layoutInfo.type) === "loader" && e.push(a.layoutInfo);
          break;
        }
        case "headerrow":
        case "row": {
          let o = this.binarySearch(l.children, i.topLeft, "x"), n = this.binarySearch(l.children, i.topRight, "x"), u = 0, r = this.persistedIndices.get(l.layoutInfo.key) || this.stickyColumnIndices;
          for (; u < r.length && r[u] < o; ) {
            let a = r[u];
            a < l.children.length && e.push(l.children[a].layoutInfo), u++;
          }
          for (let a = o; a <= n; a++) {
            for (; u < r.length && r[u] < a; ) u++;
            e.push(l.children[a].layoutInfo);
          }
          for (; u < r.length; ) {
            let a = r[u++];
            a < l.children.length && e.push(l.children[a].layoutInfo);
          }
          break;
        }
        default:
          throw new Error("Unknown node type " + l.layoutInfo.type);
      }
  }
  binarySearch(e, l, i) {
    let o = 0, n = e.length - 1;
    for (; o <= n; ) {
      let u = o + n >> 1, r = e[u];
      if (i === "x" && r.layoutInfo.rect.maxX <= l.x || i === "y" && r.layoutInfo.rect.maxY <= l.y) o = u + 1;
      else if (i === "x" && r.layoutInfo.rect.x > l.x || i === "y" && r.layoutInfo.rect.y > l.y) n = u - 1;
      else return u;
    }
    return Math.max(0, Math.min(e.length - 1, o));
  }
  buildPersistedIndices() {
    if (this.virtualizer.persistedKeys !== this.lastPersistedKeys) {
      this.lastPersistedKeys = this.virtualizer.persistedKeys, this.persistedIndices.clear();
      for (let o of this.virtualizer.persistedKeys) {
        var e;
        let n = (e = this.layoutNodes.get(o)) === null || e === void 0 ? void 0 : e.layoutInfo;
        for (; n && n.parentKey; ) {
          var l, i;
          let u = this.virtualizer.collection.getItem(n.key), r = this.persistedIndices.get(n.parentKey);
          r || (r = (u == null ? void 0 : u.type) === "cell" || (u == null ? void 0 : u.type) === "column" ? [
            ...this.stickyColumnIndices
          ] : [], this.persistedIndices.set(n.parentKey, r));
          let a = (l = this.layoutNodes.get(n.key)) === null || l === void 0 ? void 0 : l.index;
          a != null && !r.includes(a) && r.push(a), n = (i = this.layoutNodes.get(n.parentKey)) === null || i === void 0 ? void 0 : i.layoutInfo;
        }
      }
      for (let o of this.persistedIndices.values()) o.sort((n, u) => n - u);
    }
  }
  getDropTargetFromPoint(e, l, i) {
    e += this.virtualizer.visibleRect.x, l += this.virtualizer.visibleRect.y;
    let o = new I(e, Math.max(0, l - this.gap), 1, Math.max(1, this.gap * 2)), n = this.getVisibleLayoutInfos(o), u = null, r = 1 / 0;
    for (let c of n) {
      if (c.type !== "row" || !c.rect.intersects(o)) continue;
      let h = Math.abs(c.rect.y - l), f = Math.abs(c.rect.maxY - l), v = Math.min(h, f);
      v < r && (r = v, u = c.key);
    }
    if (u == null || this.virtualizer.collection.size === 0) return {
      type: "root"
    };
    let a = this.getLayoutInfo(u);
    if (!a) return null;
    let s = a.rect, d = {
      type: "item",
      key: a.key,
      dropPosition: "on"
    };
    return i(d) ? l <= s.y + 10 && i({
      ...d,
      dropPosition: "before"
    }) ? d.dropPosition = "before" : l >= s.maxY - 10 && i({
      ...d,
      dropPosition: "after"
    }) && (d.dropPosition = "after") : l <= s.y + s.height / 2 && i({
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
class Yu extends Uu {
  // Invalidate the layout whenever the column widths change.
  useLayoutOptions() {
    let e = p.useContext(Me);
    return p.useMemo(() => ({
      columnWidths: e == null ? void 0 : e.columnWidths
    }), [
      e == null ? void 0 : e.columnWidths
    ]);
  }
}
let de = null;
function qu(t = !1) {
  if (de === null || t) {
    const e = document.createElement("div"), l = e.style;
    l.width = "50px", l.height = "50px", l.overflow = "scroll", l.direction = "rtl";
    const i = document.createElement("div"), o = i.style;
    return o.width = "100px", o.height = "100px", e.appendChild(i), document.body.appendChild(e), e.scrollLeft > 0 ? de = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? de = "negative" : de = "positive-ascending"), document.body.removeChild(e), de;
  }
  return de;
}
function Xu(t, e) {
  let { scrollLeft: l } = t;
  if (e === "rtl") {
    let { scrollWidth: i, clientWidth: o } = t;
    switch (qu()) {
      case "negative":
        l = -l;
        break;
      case "positive-descending":
        l = i - o - l;
        break;
    }
  }
  return l;
}
function Zu(t, e) {
  let { contentSize: l, onVisibleRectChange: i, innerStyle: o, onScrollStart: n, onScrollEnd: u, scrollDirection: r = "both", ...a } = t, s = p.useRef({
    scrollTop: 0,
    scrollLeft: 0,
    scrollEndTime: 0,
    scrollTimeout: null,
    width: 0,
    height: 0,
    isScrolling: !1
  }).current, { direction: d } = Q(), [c, h] = p.useState(!1), f = p.useCallback((x) => {
    x.target === x.currentTarget && (t.onScroll && t.onScroll(x), He.flushSync(() => {
      let D = x.currentTarget.scrollTop, k = Xu(x.currentTarget, d);
      s.scrollTop = Math.max(0, Math.min(D, l.height - s.height)), s.scrollLeft = Math.max(0, Math.min(k, l.width - s.width)), i(new I(s.scrollLeft, s.scrollTop, s.width, s.height)), s.isScrolling || (s.isScrolling = !0, h(!0), window.dispatchEvent(new Event("tk.disconnect-observer")), n && n());
      let P = Date.now();
      s.scrollEndTime <= P + 50 && (s.scrollEndTime = P + 300, s.scrollTimeout != null && clearTimeout(s.scrollTimeout), s.scrollTimeout = setTimeout(() => {
        s.isScrolling = !1, h(!1), s.scrollTimeout = null, window.dispatchEvent(new Event("tk.connect-observer")), u && u();
      }, 300));
    }));
  }, [
    t,
    d,
    s,
    l,
    i,
    n,
    u
  ]);
  xn(e, "scroll", f), p.useEffect(() => () => {
    s.scrollTimeout != null && clearTimeout(s.scrollTimeout), s.isScrolling && window.dispatchEvent(new Event("tk.connect-observer"));
  }, []);
  let v = p.useRef(!1), m = le((x) => {
    let D = e.current;
    if (!D || v.current) return;
    v.current = !0;
    let k = process.env.NODE_ENV === "test" && !process.env.VIRT_ON, P = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientWidth"), z = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientHeight"), E = D.clientWidth, K = D.clientHeight, F = k && !P ? 1 / 0 : E, H = k && !z ? 1 / 0 : K;
    (s.width !== F || s.height !== H) && (s.width = F, s.height = H, x(() => {
      i(new I(s.scrollLeft, s.scrollTop, F, H));
    }), (!k && E !== D.clientWidth || K !== D.clientHeight) && (s.width = D.clientWidth, s.height = D.clientHeight, x(() => {
      i(new I(s.scrollLeft, s.scrollTop, s.width, s.height));
    }))), v.current = !1;
  }), b = p.useRef(null), [g, C] = p.useState({});
  he(() => {
    if (!v.current && (b.current == null || !l.equals(b.current)))
      if (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") {
        C({}), b.current = l;
        return;
      } else queueMicrotask(() => m(He.flushSync));
    b.current = l;
  }), he(() => {
    m((x) => x());
  }, [
    g
  ]);
  let y = p.useCallback(() => {
    m(He.flushSync);
  }, [
    m
  ]);
  Ze({
    ref: e,
    box: "border-box",
    onResize: y
  });
  let $ = {
    // Reset padding so that relative positioning works correctly. Padding will be done in JS layout.
    padding: 0,
    ...a.style
  };
  return r === "horizontal" ? ($.overflowX = "auto", $.overflowY = "hidden") : r === "vertical" || l.width === s.width ? ($.overflowY = "auto", $.overflowX = "hidden") : $.overflow = "auto", o = {
    width: Number.isFinite(l.width) ? l.width : void 0,
    height: Number.isFinite(l.height) ? l.height : void 0,
    pointerEvents: c ? "none" : "auto",
    position: "relative",
    ...o
  }, {
    isScrolling: c,
    scrollViewProps: {
      ...a,
      style: $
    },
    contentProps: {
      role: "presentation",
      style: o
    }
  };
}
function Gu(t) {
  let { layoutInfo: e, virtualizer: l, ref: i } = t, o = e == null ? void 0 : e.key, n = p.useCallback(() => {
    if (o != null && i.current) {
      let u = Ju(i.current);
      l.updateItemSize(o, u);
    }
  }, [
    l,
    o,
    i
  ]);
  return he(() => {
    e != null && e.estimatedSize && n();
  }), {
    updateSize: n
  };
}
function Ju(t) {
  let e = t.style.height;
  t.style.height = "";
  let l = new oe(t.scrollWidth, t.scrollHeight);
  return t.style.height = e, l;
}
function io(t) {
  let { style: e, className: l, layoutInfo: i, virtualizer: o, parent: n, children: u } = t, { direction: r } = Q(), a = p.useRef(null);
  return Gu({
    layoutInfo: i,
    virtualizer: o,
    ref: a
  }), /* @__PURE__ */ w.createElement("div", {
    role: "presentation",
    ref: a,
    className: l,
    style: {
      ...Qu(i, r, n),
      ...e
    }
  }, u);
}
let Dt = /* @__PURE__ */ new WeakMap();
function Qu(t, e, l) {
  let i = e === "rtl" ? "right" : "left", o = Dt.get(t);
  if (o && o[i] != null) {
    if (!l) return o;
    let a = t.rect.y - l.rect.y, s = t.rect.x - l.rect.x;
    if (o.top === a && o[i] === s) return o;
  }
  let n = {
    // TODO: For layoutInfos that are sticky that have parents with overflow visible, their "top" will be relative to the to the nearest scrolling container
    // which WON'T be the parent since the parent has overflow visible. This means we shouldn't offset the height by the parent's position
    // Not 100% about this change here since it is quite ambigious what the scrolling container maybe and how its top is positioned with respect to the
    // calculated layoutInfo.y here
    top: t.rect.y - (l && !(l.allowOverflow && t.isSticky) ? l.rect.y : 0),
    [i]: t.rect.x - (l && !(l.allowOverflow && t.isSticky) ? l.rect.x : 0),
    width: t.rect.width,
    height: t.rect.height
  };
  Object.entries(n).forEach(([a, s]) => {
    Number.isFinite(s) || (n[a] = void 0);
  });
  var u;
  let r = {
    position: t.isSticky ? "sticky" : "absolute",
    // Sticky elements are positioned in normal document flow. Display inline-block so that they don't push other sticky columns onto the following rows.
    display: t.isSticky ? "inline-block" : void 0,
    overflow: t.allowOverflow ? "visible" : "hidden",
    opacity: t.opacity,
    zIndex: t.zIndex,
    transform: (u = t.transform) !== null && u !== void 0 ? u : void 0,
    contain: "size layout style",
    ...n
  };
  return Dt.set(t, r), r;
}
const oo = /* @__PURE__ */ p.createContext(null), no = /* @__PURE__ */ p.createContext(null);
function _u(t) {
  let { children: e, layout: l, layoutOptions: i } = t, o = p.useMemo(() => typeof l == "function" ? new l() : l, [
    l
  ]), n = p.useMemo(() => ({
    isVirtualized: !0,
    layoutDelegate: o,
    dropTargetDelegate: o.getDropTargetFromPoint ? o : void 0,
    CollectionRoot: er,
    CollectionBranch: tr
  }), [
    o
  ]);
  return /* @__PURE__ */ w.createElement(U.Provider, {
    value: n
  }, /* @__PURE__ */ w.createElement(no.Provider, {
    value: {
      layout: o,
      layoutOptions: i
    }
  }, e));
}
function er({ collection: t, persistedKeys: e, scrollRef: l, renderDropIndicator: i }) {
  var o;
  let { layout: n, layoutOptions: u } = p.useContext(no), r = (o = n.useLayoutOptions) === null || o === void 0 ? void 0 : o.call(n), a = Wu({
    layout: n,
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
    layoutOptions: p.useMemo(() => u && r ? {
      ...u,
      ...r
    } : u || r, [
      u,
      r
    ])
  }), { contentProps: s } = Zu({
    onVisibleRectChange: a.setVisibleRect,
    contentSize: a.contentSize,
    onScrollStart: a.startScrolling,
    onScrollEnd: a.endScrolling
  }, l);
  return /* @__PURE__ */ w.createElement("div", s, /* @__PURE__ */ w.createElement(oo.Provider, {
    value: a
  }, uo(null, a.visibleViews, i)));
}
function tr({ parent: t, renderDropIndicator: e }) {
  let i = p.useContext(oo).virtualizer.getVisibleView(t.key);
  return uo(i, Array.from(i.children), e);
}
function uo(t, e, l) {
  return e.map((i) => lr(t, i, l));
}
function lr(t, e, l) {
  let i = /* @__PURE__ */ w.createElement(io, {
    key: e.key,
    layoutInfo: e.layoutInfo,
    virtualizer: e.virtualizer,
    parent: t == null ? void 0 : t.layoutInfo
  }, e.rendered), { collection: o, layout: n } = e.virtualizer, u = e.content;
  return (u == null ? void 0 : u.type) === "item" && l && n.getDropTargetLayoutInfo && (i = /* @__PURE__ */ w.createElement(w.Fragment, {
    key: e.key
  }, kt(t, e, {
    type: "item",
    key: e.content.key,
    dropPosition: "before"
  }, l), i, Cn(o, u, (r) => kt(t, e, r, l)))), i;
}
function kt(t, e, l, i) {
  let o = i(l);
  if (o) {
    let n = e.virtualizer.layout.getDropTargetLayoutInfo(l);
    o = /* @__PURE__ */ w.createElement(io, {
      layoutInfo: n,
      virtualizer: e.virtualizer,
      parent: t == null ? void 0 : t.layoutInfo
    }, o);
  }
  return o;
}
var ir = Object.defineProperty, st = (t, e) => ir(t, "name", { value: e, configurable: !0 });
const Va = st(({ icon: t, label: e, isActive: l, onDragStart: i, tooltip: o, ...n }) => {
  const u = p.useRef(null);
  p.useEffect(() => {
    if (!u.current || !i) return;
    const a = u.current;
    return a.draggable = !0, a.addEventListener("dragstart", i), () => {
      a.removeEventListener("dragstart", i);
    };
  }, [i]);
  const r = S.jsxs(Be, { ...n, $isActive: l, ref: u, children: [t && S.jsx(or, { icon: t }), e && S.jsx(rr, { children: e })] });
  return o ? S.jsxs(Go, { children: [r, S.jsx(Jo, { placement: "bottom", children: o })] }) : r;
}, "ToolbarButton"), or = st(({ icon: t }) => typeof t == "string" ? S.jsx(ur, { src: t, "aria-hidden": !0 }) : t, "ToolbarButtonIcon"), nr = st((t) => me`
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
    `, "baseToolbarButtonStyle"), Be = R(_o)`
    ${({ $isActive: t }) => nr(t)}
`, ur = Qo, rr = R.span`
    font-size: 12px;
    line-height: 16px;
    margin-right: 1px;
`;
var ar = Object.defineProperty, sr = (t, e) => ar(t, "name", { value: e, configurable: !0 });
const dr = sr(() => {
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.border = "1px solid black", t.style.visibility = "hidden", t.style.width = "1px", t.style.height = "1px", document.body.appendChild(t);
  const e = getComputedStyle(t), l = parseFloat(e.borderTopWidth);
  return document.body.removeChild(t), l;
}, "getBorderScaleFactor");
var cr = Object.defineProperty, Ke = (t, e) => cr(t, "name", { value: e, configurable: !0 });
const ro = p.createContext({ borderScaleFactor: 1, stickyHeader: !1 }), hr = Ke(({ stickyHeader: t = !1, children: e }) => {
  const l = p.useMemo(() => t ? dr() : 1, [t]);
  return S.jsx(ro.Provider, { value: { borderScaleFactor: l, stickyHeader: t }, children: e });
}, "TableProvider"), ao = Ke(() => p.useContext(ro), "useTableContext"), so = p.createContext({}), co = Ke(({ id: t, children: e }) => S.jsx(so.Provider, { value: { id: t }, children: e }), "TableRowContextProvider"), ho = Ke(() => p.useContext(so), "useTableRowContext");
var fr = Object.defineProperty, dt = (t, e) => fr(t, "name", { value: e, configurable: !0 });
const fo = p.createContext(void 0), pr = dt(({ selectionType: t = "none", selectionMode: e = "none", defaultSelectedKeys: l = [], selectedKeys: i, onSelectionChange: o, onDoubleClick: n, onContextMenu: u, children: r }) => {
  const [a, s] = p.useState(l[0]), [d, c] = p.useState(), h = p.useRef(!1), f = p.useCallback((v) => {
    e !== "single" || v === void 0 || (i !== void 0 ? i[0] !== v && (o == null || o([v])) : v !== a && (s(v), o == null || o([v])));
  }, [i, a, o, e]);
  return ge(t) || ge(e) ? S.jsx(S.Fragment, { children: r }) : S.jsx(fo.Provider, { value: { selectionType: t, selectionMode: e, hasScrolledIntoView: h, defaultSelectedKeys: l, selected: i ? i[0] : a, addSelected: f, hovered: d, setHovered: c, onDoubleClick: n, onContextMenu: u }, children: r });
}, "TableInteractionProvider"), Te = dt(() => p.useContext(fo), "useTableInteractionContext");
function ge(t) {
  return t === "none" || t === void 0;
}
dt(ge, "isNoneOrUndefined");
const ct = 6;
var vr = Object.defineProperty, mr = (t, e) => vr(t, "name", { value: e, configurable: !0 });
const je = 16 + 2 * ct + 1, gr = { loaderHeight: je, estimatedRowHeight: je, estimatedHeadingHeight: je }, br = mr(({ stickyHeader: t, selectionType: e, selectionMode: l, defaultSelectedKeys: i, onSelectionChange: o, onDoubleClick: n, onContextMenu: u, selectedKeys: r, className: a, virtualizationOptions: s = {}, ...d }) => {
  const c = { ...d, disallowTypeAhead: !0 }, h = { ...gr, ...s };
  let f = S.jsx(yr, { className: a, children: S.jsx(_u, { layout: Yu, layoutOptions: h, children: S.jsx($r, { ...c }) }) });
  return e && (f = S.jsx(pr, { selectionType: e, selectionMode: l, defaultSelectedKeys: i, selectedKeys: r, onSelectionChange: o, onDoubleClick: n, onContextMenu: u, children: f })), S.jsx(hr, { stickyHeader: t, children: f });
}, "Table"), yr = R.div`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableLayout};
    border: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${A.borderWidthMd};
    min-height: 100%;
    height: 100%;
    width: 100%;
    overflow: auto;
`, $r = R(Cu)`
    border-collapse: separate;
    border-spacing: 0;
    color: ${({ theme: t }) => t.colorsTextPrimaryDefault};
    font-size: ${A.fontSizeMd};
    height: auto;
    line-height: ${A.lineHeightMd};
    table-layout: fixed;
    white-space: nowrap;
    width: 100%;
`;
var xr = Object.defineProperty, Cr = (t, e) => xr(t, "name", { value: e, configurable: !0 });
const wr = Cr(({ ...t }) => S.jsx(zu, { ...t }), "TableBody");
var Dr = Object.defineProperty, kr = (t, e) => Dr(t, "name", { value: e, configurable: !0 });
const Sr = kr((t) => S.jsxs(Er, { ...t, children: [S.jsx(zr, {}), S.jsx(wn, {})] }), "DropdownButton"), Er = R(ze)`
    color: ${(t) => t.theme.colorsTextPrimaryDefault};
    background-color: ${(t) => t.theme.colorsBackgroundInputBase};

    border-width: ${A.borderWidthMd};
    border-style: solid;
    border-radius: ${A.borderRadiusXs};

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

    padding: 3px ${A.spacing4};
    display: flex;
    align-items: normal;
    gap: ${A.spacing8};
    width: 100%;
`, zr = R(gu)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    // specific overwrite for this value to make sure the default Sass stylesheet isn't being used ("button span" selector)
    // (& targets the classname for this component specifically in styled-components)
    // Can be removed once the global Sass stylesheet is removed
    & {
        line-height: ${A.lineHeightMd};
    }

    flex-grow: 1;
    text-align: left;
`;
var Br = Object.defineProperty, Ir = (t, e) => Br(t, "name", { value: e, configurable: !0 });
function Pr({ children: t, items: e, label: l, description: i, ...o }) {
  const { isInvalid: n, validate: u, validationError: r } = en({ value: o.selectedKey ?? void 0, isInvalid: o.isInvalid, validate: o.validate });
  return S.jsx(ce, { ...o, isInvalid: n, validate: u, children: S.jsxs(tn, { label: l, description: i, realtimeValidationError: r, children: [S.jsx(Rr, {}), S.jsx(ln, { children: S.jsx(Dn, { items: e, children: t }) })] }) });
}
Ir(Pr, "Dropdown");
const ce = R(pu)``, Rr = R(Sr)`
    // To avoid the button getting the border if it happens to be nested in something bigger with "data-invalid" set on it,
    // we extend the styling here a bit to directly target it only if inside a data-invalid Dropdown control.
    ${ce}[data-invalid] & {
        border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
    }
`;
var Ar = Object.defineProperty, Mr = (t, e) => Ar(t, "name", { value: e, configurable: !0 });
const po = Mr(({ children: t, title: e }) => S.jsx(Kr, { title: e, children: t }), "ContentWrapper"), Kr = R.div`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    -webkit-user-select: none; // Safari
    user-select: none; // Other browsers
`;
var Tr = Object.defineProperty, ht = (t, e) => Tr(t, "name", { value: e, configurable: !0 });
const vo = ht(({ cellType: t, columnId: e }) => {
  const { id: l } = ho(), { selectionType: i, selectionMode: o } = { ...Te() }, n = !ge(i) && !ge(o);
  return t === "cell" && n || t === "header" && n && i === "column" ? S.jsx(Fr, { id: i === "column" ? e : l }) : null;
}, "Selectable"), Fr = ht(({ id: t }) => {
  const { borderScaleFactor: e } = ao(), { selectionType: l, selected: i, hovered: o, addSelected: n, setHovered: u, onDoubleClick: r, onContextMenu: a } = { ...Te() }, s = p.useCallback(() => {
    n == null || n(t);
  }, [n, t]), d = p.useCallback(() => {
    u == null || u(t);
  }, [u, t]), c = p.useCallback(() => {
    u == null || u();
  }, [u]), h = p.useCallback(() => {
    r == null || r(t);
  }, [r, t]), f = p.useCallback(() => {
    n == null || n(t), a == null || a(t);
  }, [n, a, t]), v = i !== void 0 && i === t;
  return S.jsx(l === "row" ? Nr : Hr, { onClick: s, onDoubleClick: h, onMouseOver: d, onMouseLeave: c, onContextMenu: f, $isSelected: v, $isHovered: o !== void 0 && !v && o === t, $borderScaleFactor: e, "data-testid": "Selectable overlay", "aria-hidden": !0 });
}, "SelectableInner"), ft = me`
    position: absolute;
    inset: 0;
`;
function be(t, e) {
  return me`
        &::after {
            ${ft}
            content: "";
            pointer-events: none;

            --border: solid ${A.borderWidthLg} ${e};

            ${t === "row" ? me`
                      border-top: var(--border);
                      border-bottom: var(--border);

                      [role="presentation"]:first-child > :is([role="gridcell"], [role="rowheader"]) & {
                          border-left: var(--border);
                      }

                      [role="presentation"]:last-child > :is([role="gridcell"], [role="rowheader"]) & {
                          border-right: var(--border);
                      }
                  ` : me`
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
ht(be, "highLight");
const Nr = R.div`
    ${ft}
    right: ${({ $borderScaleFactor: t }) => `calc(-${t} * ${A.borderWidthMd})`};

    [role="presentation"]:last-child > :is([role="gridcell"], [role="rowheader"]) & {
        right: 0;
    }

    ${({ $isHovered: t, theme: e }) => t && be("row", e.colorsBorderPrimary)};
    ${({ $isSelected: t, theme: e }) => t && be("row", e.colorsAccentDefaultBlue)};
`, Hr = R.div`
    ${ft}
    bottom: ${({ $borderScaleFactor: t }) => `calc(-${t} * ${A.borderWidthMd})`};

    tbody > [role="row"]:last-child & {
        bottom: 0;
    }

    ${({ $isHovered: t, theme: e }) => t && be("column", e.colorsBorderPrimary)};
    ${({ $isSelected: t, theme: e }) => t && be("column", e.colorsAccentDefaultBlue)};
`;
var Vr = Object.defineProperty, jr = (t, e) => Vr(t, "name", { value: e, configurable: !0 });
function pt(t) {
  return t == null || t === "" ? " " : t;
}
jr(pt, "ensureContent");
var Lr = Object.defineProperty, Wr = (t, e) => Lr(t, "name", { value: e, configurable: !0 });
const mo = Wr(({ children: t, id: e, columnId: l, title: i, forceEmpty: o, ...n }) => {
  const { id: u } = ho();
  return S.jsx(Or, { ...n, children: S.jsx(co, { id: u, children: S.jsxs("div", { title: i, children: [S.jsx(po, { children: o ? void 0 : pt(t) }), S.jsx(vo, { cellType: "cell", columnId: l })] }) }) });
}, "TableCell");
R(mo)`
    text-align: center;
`;
const Or = R(Iu)`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableCellPrimary};
    padding: ${ct}px ${A.spacing4};
    &:has(${Tt}, ${ce}, ${We}, ${ze}) {
        padding: ${A.spacing2} ${A.spacing4};
    }
    // XXX: remove this when ToolbarButton has been replaced by a ghost button (with different sizes/paddings per context)
    &:has(${Be}) {
        padding: ${A.spacing4};
    }
    position: relative;

    border-bottom: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${A.borderWidthMd};
    [role="row"] > [role="presentation"]:not(:last-child) & {
        border-right: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${A.borderWidthMd};
    }
`;
var Ur = Object.defineProperty, Yr = (t, e) => Ur(t, "name", { value: e, configurable: !0 });
const qr = Yr(({ columns: t, children: e, ...l }) => {
  const { stickyHeader: i } = ao();
  return S.jsx(i ? Xr : Ji, { ...l, children: S.jsx(we, { items: t, children: e }) });
}, "TableHead"), Xr = R(Ji)`
    position: sticky;
    top: 0;
    z-index: 2; // make sure sticky header is above sticky first column
`, Zr = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%204H2.94989C2.60489%204%202.38989%204.31%202.55989%204.56L7.58489%2011.79C7.78489%2012.075%208.21989%2012.075%208.41489%2011.79L13.4399%204.56C13.6149%204.31%2013.3949%204%2013.0499%204Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Gr = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%204H2.94989C2.60489%204%202.38989%204.31%202.55989%204.56L7.58489%2011.79C7.78489%2012.075%208.21989%2012.075%208.41489%2011.79L13.4399%204.56C13.6149%204.31%2013.3949%204%2013.0499%204Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Jr = Object.defineProperty, Qr = (t, e) => Jr(t, "name", { value: e, configurable: !0 });
const _r = Qr((t) => S.jsx(Ft, { light: Gr, dark: Zr, ...t }), "MoveDownIcon"), ea = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%2012H2.94989C2.60489%2012%202.38989%2011.69%202.55989%2011.44L7.58489%204.21497C7.78489%203.92997%208.21989%203.92997%208.41489%204.21497L13.4399%2011.445C13.6149%2011.695%2013.3949%2012.005%2013.0499%2012.005V12Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", ta = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%2012H2.94989C2.60489%2012%202.38989%2011.69%202.55989%2011.44L7.58489%204.21497C7.78489%203.92997%208.21989%203.92997%208.41489%204.21497L13.4399%2011.445C13.6149%2011.695%2013.3949%2012.005%2013.0499%2012.005V12Z'%20fill='%23535965'/%3e%3c/svg%3e";
var la = Object.defineProperty, ia = (t, e) => la(t, "name", { value: e, configurable: !0 });
const oa = ia((t) => S.jsx(Ft, { light: ta, dark: ea, ...t }), "MoveUpIcon");
var na = Object.defineProperty, ua = (t, e) => na(t, "name", { value: e, configurable: !0 });
const ra = ua(({ ...t }) => S.jsx(aa, { ...t }), "ColumnResizer"), aa = R(Eu)`
    z-index: 3; // on top of sticky header and sticky first column

    position: absolute;
    inset: 0 -${A.spacing8} 0 auto;
    // The Virtualizer adds "contain: size layout style" on a role="presentation" div causing the resizer to not be hoverable outside of this header
    // So in reality this spacing is 8px
    width: ${A.spacing16};

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
var sa = Object.defineProperty, da = (t, e) => sa(t, "name", { value: e, configurable: !0 });
const go = da((t, e, l) => {
  var i;
  return e !== void 0 && (l == null ? void 0 : l.selectionType) === t && (l == null ? void 0 : l.selectionMode) === "single" && ((i = l == null ? void 0 : l.defaultSelectedKeys) == null ? void 0 : i[0]) === e && (l == null ? void 0 : l.hasScrolledIntoView.current) !== !0 ? (o) => {
    o && (o.scrollIntoView({ behavior: "instant", inline: "nearest", block: "nearest" }), l.hasScrolledIntoView.current = !0);
  } : null;
}, "getScrollIntoViewRef");
var ca = Object.defineProperty, ha = (t, e) => ca(t, "name", { value: e, configurable: !0 });
const fa = ha(({ children: t, id: e, title: l, resizable: i, ...o }) => {
  const n = Te(), u = p.useMemo(() => go("column", e, n), [e, n]);
  return S.jsx(pa, { id: e, ref: u, ...o, children: ({ allowsSorting: r, sortDirection: a }) => S.jsxs(va, { title: l, children: [S.jsx(po, { children: pt(t) }), r && S.jsx(ma, { "aria-hidden": "true", className: "sort-indicator", children: a === "ascending" ? S.jsx(oa, {}) : S.jsx(_r, {}) }), S.jsx(vo, { cellType: "header", columnId: e }), i && S.jsx(ra, {})] }) });
}, "TableHeader"), pa = R(Su)`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableHeaderDefault};
    font-weight: 600;
    padding: ${ct}px ${A.spacing4};
    position: relative; // for Selectable column to be rendered absolute here
    text-align: left;

    border-bottom: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${A.borderWidthMd};
    [role="row"] > [role="presentation"]:not(:last-child) & {
        border-right: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${A.borderWidthMd};
    }

    &:not([data-sort-direction]) .sort-indicator {
        visibility: hidden;
    }
`, va = R.div`
    display: flex;
    min-width: 0;
    gap: ${A.spacing4};
`, ma = R.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
`;
var ga = Object.defineProperty, ba = (t, e) => ga(t, "name", { value: e, configurable: !0 });
const St = ba(({ children: t, id: e, columns: l, ...i }) => {
  const o = Te(), n = p.useMemo(() => go("row", e, o), [e, o]);
  return S.jsx(Bu, { id: e, ref: n, ...i, children: S.jsx(co, { id: e, children: S.jsx(we, { items: l, children: t }) }) });
}, "TableRow");
var ya = Object.defineProperty, $a = (t, e) => ya(t, "name", { value: e, configurable: !0 });
function Ye(t) {
  return t != null;
}
$a(Ye, "isDefined");
var xa = Object.defineProperty, Ca = (t, e) => xa(t, "name", { value: e, configurable: !0 }), bo;
((t) => {
  function e(l, i) {
    return !Ye(l) && !Ye(i) || l === i;
  }
  t.same = e, Ca(e, "same");
})(bo || (bo = {}));
var wa = Object.defineProperty, ke = (t, e) => wa(t, "name", { value: e, configurable: !0 }), Da;
((t) => {
  function e(l, i) {
    return vt(l, { direction: i });
  }
  t.by = e, ke(e, "by");
})(Da || (Da = {}));
function qe(t, e) {
  return typeof e == "function" ? e(t) : t[e];
}
ke(qe, "getValue");
function vt(t, e) {
  const l = ke((i, o) => {
    var a;
    const n = ((a = e == null ? void 0 : e.previous) == null ? void 0 : a.call(e, i, o)) ?? 0;
    if (n !== 0) return n;
    const u = qe(i, t), r = qe(o, t);
    return mt(u, r) * ((e == null ? void 0 : e.direction) === "descending" ? -1 : 1);
  }, "sort");
  return l.thenBy = (i, o) => vt(i, { direction: o, previous: l }), l;
}
ke(vt, "sortFunction");
function mt(t, e) {
  return bo.same(t, e) ? 0 : t == null ? 1 : e == null ? -1 : typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "number" && typeof e == "number" ? t < e ? -1 : 1 : typeof t == "boolean" && typeof e == "boolean" ? t ? 1 : -1 : t instanceof Date && e instanceof Date ? t.getTime() - e.getTime() : 0;
}
ke(mt, "simpleSortFunction");
var ka = Object.defineProperty, Sa = (t, e) => ka(t, "name", { value: e, configurable: !0 });
function yo({ items: t, sortDescriptor: { column: e, direction: l } }) {
  return { items: t.sort((i, o) => {
    if (!e || !l) return 0;
    const n = e, u = mt(i[n], o[n]);
    return l === "ascending" ? u : -u;
  }) };
}
Sa(yo, "asyncListSortFunction");
var Ea = Object.defineProperty, za = (t, e) => Ea(t, "name", { value: e, configurable: !0 });
const Ba = za(({ className: t, children: e, "aria-label": l }) => S.jsx(Ia, { role: "toolbar", "aria-label": l, className: t, children: e }), "Toolbar"), Ia = R.div`
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

    ${Tt}, ${ce}, ${We}, ${ze}, ${Be} {
        line-height: 14px; // no design system value for this. Only 13px, 15px and 16px
        padding: ${A.spacing2} 1px;
    }
    ${Be}:has(img) {
        padding: 1px; // Icons have a height of 16px (vs text having a line-height of 16px), so they need less vertical padding to get to a 20px height button.
    }
    ${ce}, ${We} {
        // Dropdown and Combobox are already high enough (20px); they don't need vertical padding
        padding: 0 1px;
    }
    ${ce} ${ze} {
        // Since the chevron-down button inside the dropdown is a button, and it has a border (for validation),
        //we need to make the vertical padding smaller (1px vs 2px) to make it fit inside the toolbar
        padding: 1px;
    }
`, gt = R.div`
    display: flex;
    gap: 8px;
    align-items: center;

    &:only-child {
        grid-column: left/right; // If no siblings, use entire toolbar.
    }
`, Pa = R(gt)`
    grid-column: left;
    justify-content: start;
`;
R(gt)`
    grid-column: center;
    justify-content: center;
`;
const Ra = R(gt)`
    grid-column: right;
    justify-content: end;
`;
R.div`
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
const Aa = R(Ba)`
    background-color: transparent;
    & button {
        background-color: transparent;
    }
`, Ma = R.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`, Ka = R(fa)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, Et = R(mo)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${(t) => t.$align && `
        display: flex !important;
        justify-content: ${t.$align === "center" ? "center" : t.$align === "right" ? "flex-end" : "flex-start"};
        align-items: center;
    `}
`, Ta = R(br)`
    border-bottom: none;
    height: unset;
    min-height: unset;
    width: round(calc(100% - 1px), 2px);
    border-collapse: collapse;
`, zt = R.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: text;
    ${(t) => t.$opacity !== void 0 && `
    opacity: ${t.$opacity};
    `}
`, ja = ({
  ariaLabel: t,
  columns: e,
  data: l,
  stickyHeader: i = !1,
  toolbarLeft: o,
  toolbarRight: n,
  selectionType: u,
  selectionMode: r = "single",
  selectedKeys: a,
  onDoubleClick: s,
  onSelectionChange: d,
  onSortChange: c,
  sortDescriptor: h,
  rowKey: f,
  rowOpacity: v
}) => {
  const m = p.useRef(null);
  return p.useEffect(() => {
    const b = (g) => {
      m.current && !m.current.contains(g.target) && (d == null || d([]));
    };
    return document.addEventListener("click", b), () => {
      document.removeEventListener("click", b);
    };
  }, [d]), /* @__PURE__ */ S.jsx($u, { children: /* @__PURE__ */ S.jsxs(
    Ma,
    {
      onKeyDownCapture: (b) => {
        b.key === " " && (b.key = " ");
      },
      children: [
        (o || n) && /* @__PURE__ */ S.jsxs(Aa, { "aria-label": `${t} toolbar`, children: [
          o && /* @__PURE__ */ S.jsx(Pa, { children: o }),
          n && /* @__PURE__ */ S.jsx(Ra, { children: n })
        ] }),
        /* @__PURE__ */ S.jsx("div", { ref: m, children: /* @__PURE__ */ S.jsxs(
          Ta,
          {
            "aria-label": t,
            stickyHeader: i,
            selectionType: u,
            selectionMode: r,
            selectedKeys: a,
            onSelectionChange: d,
            onDoubleClick: s,
            onSortChange: c,
            sortDescriptor: h,
            children: [
              /* @__PURE__ */ S.jsx(qr, { children: e.map((b) => /* @__PURE__ */ S.jsx(
                Ka,
                {
                  id: b.id,
                  isRowHeader: b.isRowHeader,
                  resizable: b.resizable,
                  minWidth: b.minWidth,
                  maxWidth: b.maxWidth,
                  defaultWidth: b.defaultWidth,
                  allowsSorting: b.allowsSorting,
                  children: b.caption
                },
                b.id
              )) }),
              /* @__PURE__ */ S.jsx(wr, { children: l.length === 0 ? /* @__PURE__ */ S.jsx(St, { children: e.map((b) => /* @__PURE__ */ S.jsx(
                Et,
                {
                  columnId: b.id,
                  $align: b.alignContents,
                  children: " "
                },
                b.id
              )) }) : l.map((b, g) => {
                const C = f ? f(b, g) : String(g), y = v == null ? void 0 : v(g);
                return /* @__PURE__ */ S.jsx(St, { id: C, children: b.map(($, x) => {
                  const D = e[x];
                  if (!D)
                    return null;
                  const k = D.isControl ? 1 : y;
                  return /* @__PURE__ */ S.jsx(
                    Et,
                    {
                      title: $.tooltipText,
                      columnId: D.id,
                      $align: D.alignContents,
                      children: $.cellContent ? /* @__PURE__ */ S.jsx(zt, { $opacity: k, children: $.cellContent }) : /* @__PURE__ */ S.jsx(zt, { $opacity: k, children: " " })
                    },
                    x
                  );
                }) }, C);
              }) })
            ]
          }
        ) })
      ]
    }
  ) });
};
function La(t) {
  const [e, l] = p.useState();
  return {
    items: p.useMemo(() => e ? yo({
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
export {
  Va as D,
  ja as T,
  Pr as k,
  La as u
};
