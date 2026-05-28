var Tn = Object.defineProperty;
var Nn = (t, e, l) => e in t ? Tn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: l }) : t[e] = l;
var j = (t, e, l) => Nn(t, typeof e != "symbol" ? e + "" : e, l);
import { d as Z, r as v, at as Vn, au as Ee, av as jn, c as ie, aw as Hn, v as We, ax as F, ay as q, az as G, aA as Ce, aB as Ln, aC as ve, aD as Tt, aE as Nt, aF as Ke, aG as tt, aH as Wn, u as Fe, e as W, f as ye, g as J, b as T, aI as Vt, a as jt, aJ as St, i as ke, aK as Y, aL as On, aM as se, aN as ae, aO as Un, aP as Yn, aQ as qn, s as Zn, aR as Xn, H as R, aS as Ht, l as Gn, n as Jn, aT as Se, j as Lt, k as Qn, aU as zt, aV as _n, aW as eo, aX as to, p as lo, m as io, aY as Wt, aZ as no, a_ as oo, a$ as uo, x as lt, z as Ot, G as ue, I as fe, O as it, b0 as Ut, A as ro, E as pe, L as so, D as ao, b1 as nt, M as ot, N as Yt, b2 as qt, b3 as co, b4 as ho, P as fo, b5 as ut, b6 as po, b7 as rt, b8 as _, b9 as Zt, ba as je, bb as vo, U as P, bc as mo, T as A, R as C, bd as bo, be as ze, Y as go, Z as yo, bf as $o, bg as xo, V as wo, W as Co, a5 as ko, bh as Do, bi as Xt, B as X, S as Gt, bj as Eo, F as st, bk as So, bl as at, bm as ct, bn as Jt, bo as zo, C as Bo, bp as Ro } from "./formelements-DgWWXRMR.js";
import { $ as Qt, a as Io, b as Ao, c as Po, d as Mo, e as Ko, f as Fo, S as Oe } from "./ComboBox-tmgYuUfm.js";
function To(t = {}) {
  let { locale: e } = Z();
  return v.useMemo(() => new Intl.ListFormat(e, t), [
    e,
    t
  ]);
}
function No(t) {
  let { onMoveStart: e, onMove: l, onMoveEnd: i } = t, n = v.useRef({
    didMove: !1,
    lastPosition: null,
    id: null
  }), { addGlobalListener: o, removeGlobalListener: u } = Vn(), r = v.useCallback((h, g, m, b) => {
    m === 0 && b === 0 || (n.current.didMove || (n.current.didMove = !0, e == null || e({
      type: "movestart",
      pointerType: g,
      shiftKey: h.shiftKey,
      metaKey: h.metaKey,
      ctrlKey: h.ctrlKey,
      altKey: h.altKey
    })), l == null || l({
      type: "move",
      pointerType: g,
      deltaX: m,
      deltaY: b,
      shiftKey: h.shiftKey,
      metaKey: h.metaKey,
      ctrlKey: h.ctrlKey,
      altKey: h.altKey
    }));
  }, [
    e,
    l,
    n
  ]), a = Ee(r), s = v.useCallback((h, g) => {
    jn(), n.current.didMove && (i == null || i({
      type: "moveend",
      pointerType: g,
      shiftKey: h.shiftKey,
      metaKey: h.metaKey,
      ctrlKey: h.ctrlKey,
      altKey: h.altKey
    }));
  }, [
    i,
    n
  ]), d = Ee(s), [c, f] = v.useState(null);
  return ie(() => {
    if (c === "pointer") {
      let h = (m) => {
        if (m.pointerId === n.current.id) {
          var b, w;
          let x = m.pointerType || "mouse";
          var $, y;
          a(m, x, m.pageX - (($ = (b = n.current.lastPosition) === null || b === void 0 ? void 0 : b.pageX) !== null && $ !== void 0 ? $ : 0), m.pageY - ((y = (w = n.current.lastPosition) === null || w === void 0 ? void 0 : w.pageY) !== null && y !== void 0 ? y : 0)), n.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          };
        }
      }, g = (m) => {
        if (m.pointerId === n.current.id) {
          let b = m.pointerType || "mouse";
          d(m, b), n.current.id = null, u(window, "pointermove", h, !1), u(window, "pointerup", g, !1), u(window, "pointercancel", g, !1), f(null);
        }
      };
      return o(window, "pointermove", h, !1), o(window, "pointerup", g, !1), o(window, "pointercancel", g, !1), () => {
        u(window, "pointermove", h, !1), u(window, "pointerup", g, !1), u(window, "pointercancel", g, !1);
      };
    } else if (c === "mouse" && process.env.NODE_ENV === "test") {
      let h = (m) => {
        if (m.button === 0) {
          var b, w, $, y;
          a(m, "mouse", m.pageX - (($ = (b = n.current.lastPosition) === null || b === void 0 ? void 0 : b.pageX) !== null && $ !== void 0 ? $ : 0), m.pageY - ((y = (w = n.current.lastPosition) === null || w === void 0 ? void 0 : w.pageY) !== null && y !== void 0 ? y : 0)), n.current.lastPosition = {
            pageX: m.pageX,
            pageY: m.pageY
          };
        }
      }, g = (m) => {
        m.button === 0 && (d(m, "mouse"), u(window, "mousemove", h, !1), u(window, "mouseup", g, !1), f(null));
      };
      return o(window, "mousemove", h, !1), o(window, "mouseup", g, !1), () => {
        u(window, "mousemove", h, !1), u(window, "mouseup", g, !1);
      };
    } else if (c === "touch" && process.env.NODE_ENV === "test") {
      let h = (m) => {
        let b = [
          ...m.changedTouches
        ].findIndex(({ identifier: k }) => k === n.current.id);
        if (b >= 0) {
          var w, $;
          let { pageX: k, pageY: D } = m.changedTouches[b];
          var y, x;
          a(m, "touch", k - ((y = (w = n.current.lastPosition) === null || w === void 0 ? void 0 : w.pageX) !== null && y !== void 0 ? y : 0), D - ((x = ($ = n.current.lastPosition) === null || $ === void 0 ? void 0 : $.pageY) !== null && x !== void 0 ? x : 0)), n.current.lastPosition = {
            pageX: k,
            pageY: D
          };
        }
      }, g = (m) => {
        [
          ...m.changedTouches
        ].findIndex(({ identifier: w }) => w === n.current.id) >= 0 && (d(m, "touch"), n.current.id = null, u(window, "touchmove", h), u(window, "touchend", g), u(window, "touchcancel", g), f(null));
      };
      return o(window, "touchmove", h, !1), o(window, "touchend", g, !1), o(window, "touchcancel", g, !1), () => {
        u(window, "touchmove", h, !1), u(window, "touchend", g, !1), u(window, "touchcancel", g, !1);
      };
    }
  }, [
    c,
    o,
    u
  ]), {
    moveProps: v.useMemo(() => {
      let h = {}, g = () => {
        Hn(), n.current.didMove = !1;
      };
      typeof PointerEvent > "u" && process.env.NODE_ENV === "test" ? (h.onMouseDown = (b) => {
        b.button === 0 && (g(), b.stopPropagation(), b.preventDefault(), n.current.lastPosition = {
          pageX: b.pageX,
          pageY: b.pageY
        }, f("mouse"));
      }, h.onTouchStart = (b) => {
        if (b.changedTouches.length === 0 || n.current.id != null) return;
        let { pageX: w, pageY: $, identifier: y } = b.changedTouches[0];
        g(), b.stopPropagation(), b.preventDefault(), n.current.lastPosition = {
          pageX: w,
          pageY: $
        }, n.current.id = y, f("touch");
      }) : h.onPointerDown = (b) => {
        b.button === 0 && n.current.id == null && (g(), b.stopPropagation(), b.preventDefault(), n.current.lastPosition = {
          pageX: b.pageX,
          pageY: b.pageY
        }, n.current.id = b.pointerId, f("pointer"));
      };
      let m = (b, w, $) => {
        g(), r(b, "keyboard", w, $), s(b, "keyboard");
      };
      return h.onKeyDown = (b) => {
        switch (b.key) {
          case "Left":
          case "ArrowLeft":
            b.preventDefault(), b.stopPropagation(), m(b, -1, 0);
            break;
          case "Right":
          case "ArrowRight":
            b.preventDefault(), b.stopPropagation(), m(b, 1, 0);
            break;
          case "Up":
          case "ArrowUp":
            b.preventDefault(), b.stopPropagation(), m(b, 0, -1);
            break;
          case "Down":
          case "ArrowDown":
            b.preventDefault(), b.stopPropagation(), m(b, 0, 1);
            break;
        }
      }, h;
    }, [
      n,
      r,
      s
    ])
  };
}
function Vo(t, e) {
  let l = e == null ? void 0 : e.isDisabled, [i, n] = v.useState(!1);
  return ie(() => {
    if (t != null && t.current && !l) {
      let o = () => {
        if (t.current) {
          let r = We(t.current, {
            tabbable: !0
          });
          n(!!r.nextNode());
        }
      };
      o();
      let u = new MutationObserver(o);
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
class _t {
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
    for (let r of F(i, this.collection)) {
      var o;
      if (r.colSpan && r.colSpan + n > l) return (o = r.key) !== null && o !== void 0 ? o : null;
      r.colSpan && (n = n + r.colSpan - 1);
      var u;
      if (n === l) return (u = r.key) !== null && u !== void 0 ? u : null;
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
      let d = F(l, this.collection);
      var o;
      return (o = this.direction === "rtl" ? (i = q(d)) === null || i === void 0 ? void 0 : i.key : (n = G(d)) === null || n === void 0 ? void 0 : n.key) !== null && o !== void 0 ? o : null;
    }
    if (this.isCell(l) && l.parentKey != null) {
      let d = this.collection.getItem(l.parentKey);
      if (!d) return null;
      let c = F(d, this.collection);
      var u;
      let f = (u = this.direction === "rtl" ? Ce(c, l.index - 1) : Ce(c, l.index + 1)) !== null && u !== void 0 ? u : null;
      var r;
      if (f) return (r = f.key) !== null && r !== void 0 ? r : null;
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
      var i, n;
      let d = F(l, this.collection);
      var o;
      return (o = this.direction === "rtl" ? (i = G(d)) === null || i === void 0 ? void 0 : i.key : (n = q(d)) === null || n === void 0 ? void 0 : n.key) !== null && o !== void 0 ? o : null;
    }
    if (this.isCell(l) && l.parentKey != null) {
      let d = this.collection.getItem(l.parentKey);
      if (!d) return null;
      let c = F(d, this.collection);
      var u;
      let f = (u = this.direction === "rtl" ? Ce(c, l.index + 1) : Ce(c, l.index - 1)) !== null && u !== void 0 ? u : null;
      var r;
      if (f) return (r = f.key) !== null && r !== void 0 ? r : null;
      var a;
      if (this.focusMode === "row") return (a = l.parentKey) !== null && a !== void 0 ? a : null;
      var s;
      return (s = this.direction === "rtl" ? this.getLastKey(e) : this.getFirstKey(e)) !== null && s !== void 0 ? s : null;
    }
    return null;
  }
  getFirstKey(e, l) {
    let i = e ?? null, n;
    if (i != null) {
      if (n = this.collection.getItem(i), !n) return null;
      if (this.isCell(n) && !l && n.parentKey != null) {
        var o;
        let s = this.collection.getItem(n.parentKey);
        if (!s) return null;
        var u;
        return (u = (o = G(F(s, this.collection))) === null || o === void 0 ? void 0 : o.key) !== null && u !== void 0 ? u : null;
      }
    }
    if (i = this.findNextKey(void 0, (s) => s.type === "item"), i != null && (n && this.isCell(n) && l || this.focusMode === "cell")) {
      var r;
      let s = this.collection.getItem(i);
      if (!s) return null;
      var a;
      i = (a = (r = G(F(s, this.collection))) === null || r === void 0 ? void 0 : r.key) !== null && a !== void 0 ? a : null;
    }
    return i;
  }
  getLastKey(e, l) {
    let i = e ?? null, n;
    if (i != null) {
      if (n = this.collection.getItem(i), !n) return null;
      if (this.isCell(n) && !l && n.parentKey != null) {
        var o;
        let s = this.collection.getItem(n.parentKey);
        if (!s) return null;
        let d = F(s, this.collection);
        var u;
        return (u = (o = q(d)) === null || o === void 0 ? void 0 : o.key) !== null && u !== void 0 ? u : null;
      }
    }
    if (i = this.findPreviousKey(void 0, (s) => s.type === "item"), i != null && (n && this.isCell(n) && l || this.focusMode === "cell")) {
      var r;
      let s = this.collection.getItem(i);
      if (!s) return null;
      let d = F(s, this.collection);
      var a;
      i = (a = (r = q(d)) === null || r === void 0 ? void 0 : r.key) !== null && a !== void 0 ? a : null;
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
      let u = this.getKeyBelow(l);
      if (u == null) break;
      i = this.layoutDelegate.getItemRect(u), l = u;
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
    var u;
    o.type === "cell" && (i = (u = o.parentKey) !== null && u !== void 0 ? u : null);
    let r = !1;
    for (; i != null; ) {
      let d = n.getItem(i);
      if (!d) return null;
      if (d.textValue) {
        let c = d.textValue.slice(0, e.length);
        if (this.collator.compare(c, e) === 0) {
          var a, s;
          return this.isRow(d) && this.focusMode === "cell" ? (s = (a = G(F(d, this.collection))) === null || a === void 0 ? void 0 : a.key) !== null && s !== void 0 ? s : null : d.key;
        }
      }
      i = this.findNextKey(i, (c) => c.type === "item"), i == null && !r && (i = this.getFirstKey(), r = !0);
    }
    return null;
  }
  constructor(e) {
    if (this.collection = e.collection, this.disabledKeys = e.disabledKeys, this.disabledBehavior = e.disabledBehavior || "all", this.direction = e.direction, this.collator = e.collator, !e.layout && !e.ref) throw new Error("Either a layout or a ref must be specified.");
    this.layoutDelegate = e.layoutDelegate || (e.layout ? new jo(e.layout) : new Ln(e.ref));
    var l;
    this.focusMode = (l = e.focusMode) !== null && l !== void 0 ? l : "row";
  }
}
class jo {
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
const dt = /* @__PURE__ */ new WeakMap();
var el = {};
el = {
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
var tl = {};
tl = {
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
var ll = {};
ll = {
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
var il = {};
il = {
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
var nl = {};
nl = {
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
var ol = {};
ol = {
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
var ul = {};
ul = {
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
var rl = {};
rl = {
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
var sl = {};
sl = {
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
var al = {};
al = {
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
var cl = {};
cl = {
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
var dl = {};
dl = {
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
var hl = {};
hl = {
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
var fl = {};
fl = {
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
var pl = {};
pl = {
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
var vl = {};
vl = {
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
var ml = {};
ml = {
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
var bl = {};
bl = {
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
var gl = {};
gl = {
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
var yl = {};
yl = {
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
var $l = {};
$l = {
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
var xl = {};
xl = {
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
var wl = {};
wl = {
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
var Cl = {};
Cl = {
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
var kl = {};
kl = {
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
var Dl = {};
Dl = {
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
var El = {};
El = {
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
var Sl = {};
Sl = {
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
var zl = {};
zl = {
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
var Bl = {};
Bl = {
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
var Rl = {};
Rl = {
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
var Il = {};
Il = {
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
var Al = {};
Al = {
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
var Pl = {};
Pl = {
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
var ht = {};
ht = {
  "ar-AE": el,
  "bg-BG": tl,
  "cs-CZ": ll,
  "da-DK": il,
  "de-DE": nl,
  "el-GR": ol,
  "en-US": ul,
  "es-ES": rl,
  "et-EE": sl,
  "fi-FI": al,
  "fr-FR": cl,
  "he-IL": dl,
  "hr-HR": hl,
  "hu-HU": fl,
  "it-IT": pl,
  "ja-JP": vl,
  "ko-KR": ml,
  "lt-LT": bl,
  "lv-LV": gl,
  "nb-NO": yl,
  "nl-NL": $l,
  "pl-PL": xl,
  "pt-BR": wl,
  "pt-PT": Cl,
  "ro-RO": kl,
  "ru-RU": Dl,
  "sk-SK": El,
  "sl-SI": Sl,
  "sr-SP": zl,
  "sv-SE": Bl,
  "tr-TR": Rl,
  "uk-UA": Il,
  "zh-CN": Al,
  "zh-TW": Pl
};
function Ho(t) {
  return t && t.__esModule ? t.default : t;
}
function Lo(t, e) {
  let { getRowText: l = (r) => {
    var a, s, d, c;
    return (c = (a = (s = e.collection).getTextValue) === null || a === void 0 ? void 0 : a.call(s, r)) !== null && c !== void 0 ? c : (d = e.collection.getItem(r)) === null || d === void 0 ? void 0 : d.textValue;
  } } = t, i = ve(Ho(ht), "@react-aria/grid"), n = e.selectionManager.rawSelection, o = v.useRef(n), u = v.useCallback(() => {
    var r;
    if (!e.selectionManager.isFocused || n === o.current) {
      o.current = n;
      return;
    }
    let a = Bt(n, o.current), s = Bt(o.current, n), d = e.selectionManager.selectionBehavior === "replace", c = [];
    if (e.selectionManager.selectedKeys.size === 1 && d) {
      let f = e.selectionManager.selectedKeys.keys().next().value;
      if (f != null && e.collection.getItem(f)) {
        let p = l(f);
        p && c.push(i.format("selectedItem", {
          item: p
        }));
      }
    } else if (a.size === 1 && s.size === 0) {
      let f = a.keys().next().value;
      if (f != null) {
        let p = l(f);
        p && c.push(i.format("selectedItem", {
          item: p
        }));
      }
    } else if (s.size === 1 && a.size === 0) {
      let f = s.keys().next().value;
      if (f != null && e.collection.getItem(f)) {
        let p = l(f);
        p && c.push(i.format("deselectedItem", {
          item: p
        }));
      }
    }
    e.selectionManager.selectionMode === "multiple" && (c.length === 0 || n === "all" || n.size > 1 || o.current === "all" || ((r = o.current) === null || r === void 0 ? void 0 : r.size) > 1) && c.push(n === "all" ? i.format("selectedAll") : i.format("selectedCount", {
      count: n.size
    })), c.length > 0 && Tt(c.join(" ")), o.current = n;
  }, [
    n,
    e.selectionManager.selectedKeys,
    e.selectionManager.isFocused,
    e.selectionManager.selectionBehavior,
    e.selectionManager.selectionMode,
    e.collection,
    l,
    i
  ]);
  Qt(() => {
    if (e.selectionManager.isFocused) u();
    else {
      let r = requestAnimationFrame(u);
      return () => cancelAnimationFrame(r);
    }
  }, [
    n,
    e.selectionManager.isFocused
  ]);
}
function Bt(t, e) {
  let l = /* @__PURE__ */ new Set();
  if (t === "all" || e === "all") return l;
  for (let i of t.keys()) e.has(i) || l.add(i);
  return l;
}
function Wo(t) {
  return t && t.__esModule ? t.default : t;
}
function Oo(t) {
  let e = ve(Wo(ht), "@react-aria/grid"), l = Nt(), i = (l === "pointer" || l === "virtual" || l == null) && typeof window < "u" && "ontouchstart" in window, n = v.useMemo(() => {
    let u = t.selectionManager.selectionMode, r = t.selectionManager.selectionBehavior, a;
    return i && (a = e.format("longPressToSelect")), r === "replace" && u !== "none" && t.hasItemActions ? a : void 0;
  }, [
    t.selectionManager.selectionMode,
    t.selectionManager.selectionBehavior,
    t.hasItemActions,
    e,
    i
  ]);
  return Ke(n);
}
function Uo(t, e, l) {
  let { isVirtualized: i, disallowTypeAhead: n, keyboardDelegate: o, focusMode: u, scrollRef: r, getRowText: a, onRowAction: s, onCellAction: d, escapeKeyBehavior: c = "clearSelection", shouldSelectOnPressUp: f } = t, { selectionManager: p } = e;
  !t["aria-label"] && !t["aria-labelledby"] && console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let h = tt({
    usage: "search",
    sensitivity: "base"
  }), { direction: g } = Z(), m = e.selectionManager.disabledBehavior, b = v.useMemo(() => o || new _t({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: m,
    ref: l,
    direction: g,
    collator: h,
    focusMode: u
  }), [
    o,
    e.collection,
    e.disabledKeys,
    m,
    l,
    g,
    h,
    u
  ]), { collectionProps: w } = Wn({
    ref: l,
    selectionManager: p,
    keyboardDelegate: b,
    isVirtualized: i,
    scrollRef: r,
    disallowTypeAhead: n,
    escapeKeyBehavior: c
  }), $ = Fe(t.id);
  dt.set(e, {
    keyboardDelegate: b,
    actions: {
      onRowAction: s,
      onCellAction: d
    },
    shouldSelectOnPressUp: f
  });
  let y = Oo({
    selectionManager: p,
    hasItemActions: !!(s || d)
  }), x = W(t, {
    labelable: !0
  }), k = v.useCallback((M) => {
    if (p.isFocused) {
      ye(M.currentTarget, J(M)) || p.setFocused(!1);
      return;
    }
    ye(M.currentTarget, J(M)) && p.setFocused(!0);
  }, [
    p
  ]), D = v.useMemo(() => ({
    onBlur: w.onBlur,
    onFocus: k
  }), [
    k,
    w.onBlur
  ]), I = Vo(l, {
    isDisabled: e.collection.size !== 0
  }), E = T(
    x,
    {
      role: "grid",
      id: $,
      "aria-multiselectable": p.selectionMode === "multiple" ? "true" : void 0
    },
    e.isKeyboardNavigationDisabled ? D : w,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    e.collection.size === 0 && {
      tabIndex: I ? -1 : 0
    } || void 0,
    y
  );
  return i && (E["aria-rowcount"] = e.collection.size, E["aria-colcount"] = e.collection.columnCount), Lo({
    getRowText: a
  }, e), {
    gridProps: E
  };
}
function Yo() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function qo(t, e, l) {
  var i, n;
  let { node: o, isVirtualized: u, shouldSelectOnPressUp: r, onAction: a } = t, { actions: s, shouldSelectOnPressUp: d } = dt.get(e), c = s.onRowAction ? () => {
    var m;
    return (m = s.onRowAction) === null || m === void 0 ? void 0 : m.call(s, o.key);
  } : a, { itemProps: f, ...p } = Vt({
    selectionManager: e.selectionManager,
    key: o.key,
    ref: l,
    isVirtualized: u,
    shouldSelectOnPressUp: d || r,
    onAction: c || !(o == null || (i = o.props) === null || i === void 0) && i.onAction ? jt(o == null || (n = o.props) === null || n === void 0 ? void 0 : n.onAction, c) : void 0,
    isDisabled: e.collection.size === 0
  }), h = e.selectionManager.isSelected(o.key), g = {
    role: "row",
    "aria-selected": e.selectionManager.selectionMode !== "none" ? h : void 0,
    "aria-disabled": p.isDisabled || void 0,
    ...f
  };
  return u && (g["aria-rowindex"] = o.index + 1), {
    rowProps: g,
    ...p
  };
}
function Ml(t, e, l) {
  let { node: i, isVirtualized: n, focusMode: o = "child", shouldSelectOnPressUp: u, onAction: r } = t, { direction: a } = Z(), { keyboardDelegate: s, actions: { onCellAction: d } } = dt.get(e), c = v.useRef(null), f = () => {
    if (l.current) {
      let $ = We(l.current);
      if (o === "child") {
        if (St(l.current) && l.current !== ke()) return;
        let y = e.selectionManager.childFocusStrategy === "last" ? He($) : $.firstChild();
        if (y) {
          Y(y);
          return;
        }
      }
      (c.current != null && i.key !== c.current || !St(l.current)) && Y(l.current);
    }
  }, { itemProps: p, isPressed: h } = Vt({
    selectionManager: e.selectionManager,
    key: i.key,
    ref: l,
    isVirtualized: n,
    focus: f,
    shouldSelectOnPressUp: u,
    onAction: d ? () => d(i.key) : r,
    isDisabled: e.collection.size === 0
  }), g = ($) => {
    let y = ke();
    if (!ye($.currentTarget, J($)) || e.isKeyboardNavigationDisabled || !l.current || !y) return;
    let x = We(l.current);
    switch (x.currentNode = y, $.key) {
      case "ArrowLeft": {
        let z = a === "rtl" ? x.nextNode() : x.previousNode();
        if (o === "child" && z === l.current && (z = null), $.preventDefault(), $.stopPropagation(), z)
          Y(z), se(z, {
            containingElement: ae(l.current)
          });
        else {
          var k;
          if (((k = s.getKeyLeftOf) === null || k === void 0 ? void 0 : k.call(s, i.key)) !== i.key) {
            var D;
            (D = l.current.parentElement) === null || D === void 0 || D.dispatchEvent(new KeyboardEvent($.nativeEvent.type, $.nativeEvent));
            break;
          }
          o === "cell" && a === "rtl" ? (Y(l.current), se(l.current, {
            containingElement: ae(l.current)
          })) : (x.currentNode = l.current, z = a === "rtl" ? x.firstChild() : He(x), z && (Y(z), se(z, {
            containingElement: ae(l.current)
          })));
        }
        break;
      }
      case "ArrowRight": {
        let z = a === "rtl" ? x.previousNode() : x.nextNode();
        if (o === "child" && z === l.current && (z = null), $.preventDefault(), $.stopPropagation(), z)
          Y(z), se(z, {
            containingElement: ae(l.current)
          });
        else {
          var I;
          if (((I = s.getKeyRightOf) === null || I === void 0 ? void 0 : I.call(s, i.key)) !== i.key) {
            var E;
            (E = l.current.parentElement) === null || E === void 0 || E.dispatchEvent(new KeyboardEvent($.nativeEvent.type, $.nativeEvent));
            break;
          }
          o === "cell" && a === "ltr" ? (Y(l.current), se(l.current, {
            containingElement: ae(l.current)
          })) : (x.currentNode = l.current, z = a === "rtl" ? He(x) : x.firstChild(), z && (Y(z), se(z, {
            containingElement: ae(l.current)
          })));
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (!$.altKey && ye(l.current, J($))) {
          var M;
          $.stopPropagation(), $.preventDefault(), (M = l.current.parentElement) === null || M === void 0 || M.dispatchEvent(new KeyboardEvent($.nativeEvent.type, $.nativeEvent));
        }
        break;
    }
  }, m = ($) => {
    if (c.current = i.key, J($) !== l.current) {
      On() || e.selectionManager.setFocusedKey(i.key);
      return;
    }
    requestAnimationFrame(() => {
      o === "child" && ke() === l.current && f();
    });
  }, b = T(p, {
    role: "gridcell",
    onKeyDownCapture: g,
    "aria-colspan": i.colSpan,
    "aria-colindex": i.colIndex != null ? i.colIndex + 1 : void 0,
    colSpan: n ? void 0 : i.colSpan,
    onFocus: m
  });
  var w;
  return n && (b["aria-colindex"] = ((w = i.colIndex) !== null && w !== void 0 ? w : i.index) + 1), u && b.tabIndex != null && b.onPointerDown == null && (b.onPointerDown = ($) => {
    let y = $.currentTarget, x = y.getAttribute("tabindex");
    y.removeAttribute("tabindex"), requestAnimationFrame(() => {
      x != null && y.setAttribute("tabindex", x);
    });
  }), {
    gridCellProps: b,
    isPressed: h
  };
}
function He(t) {
  let e = null, l = null;
  do
    l = t.lastChild(), l && (e = l);
  while (l);
  return e;
}
const ft = /* @__PURE__ */ new WeakMap();
function Zo(t, e, l) {
  let { keyboardDelegate: i, isDisabled: n, isRequired: o, name: u, form: r, validationBehavior: a = "aria" } = t, s = tt({
    usage: "search",
    sensitivity: "base"
  }), d = v.useMemo(() => i || new Un(e.collection, e.disabledKeys, l, s), [
    i,
    e.collection,
    e.disabledKeys,
    s,
    l
  ]), { menuTriggerProps: c, menuProps: f } = Yn({
    isDisabled: n,
    type: "listbox"
  }, e, l), p = (E) => {
    if (e.selectionManager.selectionMode !== "multiple")
      switch (E.key) {
        case "ArrowLeft": {
          var M, z;
          E.preventDefault();
          let O = e.selectedKey != null ? (M = d.getKeyAbove) === null || M === void 0 ? void 0 : M.call(d, e.selectedKey) : (z = d.getFirstKey) === null || z === void 0 ? void 0 : z.call(d);
          O && e.setSelectedKey(O);
          break;
        }
        case "ArrowRight": {
          var N, V;
          E.preventDefault();
          let O = e.selectedKey != null ? (N = d.getKeyBelow) === null || N === void 0 ? void 0 : N.call(d, e.selectedKey) : (V = d.getFirstKey) === null || V === void 0 ? void 0 : V.call(d);
          O && e.setSelectedKey(O);
          break;
        }
      }
  }, { typeSelectProps: h } = qn({
    keyboardDelegate: d,
    selectionManager: e.selectionManager,
    onTypeSelect(E) {
      e.setSelectedKey(E);
    }
  }), { isInvalid: g, validationErrors: m, validationDetails: b } = e.displayValidation, { labelProps: w, fieldProps: $, descriptionProps: y, errorMessageProps: x } = Zn({
    ...t,
    labelElementType: "span",
    isInvalid: g,
    errorMessage: t.errorMessage || m
  });
  h.onKeyDown = h.onKeyDownCapture, delete h.onKeyDownCapture, e.selectionManager.selectionMode === "multiple" && (h = {});
  let k = W(t, {
    labelable: !0
  }), D = T(h, c, $), I = Fe();
  return ft.set(e, {
    isDisabled: n,
    isRequired: o,
    name: u,
    form: r,
    validationBehavior: a
  }), {
    labelProps: {
      ...w,
      onClick: () => {
        if (!t.isDisabled) {
          var E;
          (E = l.current) === null || E === void 0 || E.focus(), Xn("keyboard");
        }
      }
    },
    triggerProps: T(k, {
      ...D,
      isDisabled: n,
      onKeyDown: jt(D.onKeyDown, p, t.onKeyDown),
      onKeyUp: t.onKeyUp,
      "aria-labelledby": [
        I,
        D["aria-labelledby"],
        D["aria-label"] && !D["aria-labelledby"] ? D.id : null
      ].filter(Boolean).join(" "),
      onFocus(E) {
        e.isFocused || (t.onFocus && t.onFocus(E), t.onFocusChange && t.onFocusChange(!0), e.setFocused(!0));
      },
      onBlur(E) {
        e.isOpen || (t.onBlur && t.onBlur(E), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      }
    }),
    valueProps: {
      id: I
    },
    menuProps: {
      ...f,
      autoFocus: e.focusStrategy || !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      disallowEmptySelection: !0,
      linkBehavior: "selection",
      onBlur: (E) => {
        ye(E.currentTarget, E.relatedTarget) || (t.onBlur && t.onBlur(E), t.onFocusChange && t.onFocusChange(!1), e.setFocused(!1));
      },
      "aria-labelledby": [
        $["aria-labelledby"],
        D["aria-label"] && !$["aria-labelledby"] ? D.id : null
      ].filter(Boolean).join(" ")
    },
    descriptionProps: y,
    errorMessageProps: x,
    isInvalid: g,
    validationErrors: m,
    validationDetails: b,
    hiddenSelectProps: {
      isDisabled: n,
      name: u,
      label: t.label,
      state: e,
      triggerRef: l,
      form: r
    }
  };
}
function Xo(t, e, l) {
  let i = ft.get(e) || {}, { autoComplete: n, name: o = i.name, form: u = i.form, isDisabled: r = i.isDisabled } = t, { validationBehavior: a, isRequired: s } = i, { visuallyHiddenProps: d } = Ht({
    style: {
      // Prevent page scrolling.
      position: "fixed",
      top: 0,
      left: 0
    }
  });
  Gn(t.selectRef, e.defaultValue, e.setValue), Jn({
    validationBehavior: a,
    focus: () => {
      var h;
      return (h = l.current) === null || h === void 0 ? void 0 : h.focus();
    }
  }, e, t.selectRef);
  let c = e.setValue, f = v.useCallback((h) => {
    let g = J(h);
    g.multiple ? c(Array.from(g.selectedOptions, (m) => m.value)) : c(h.currentTarget.value);
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
      disabled: r,
      multiple: e.selectionManager.selectionMode === "multiple",
      required: a === "native" && s,
      name: o,
      form: u,
      value: (p = e.value) !== null && p !== void 0 ? p : "",
      onChange: f,
      onInput: f
    }
  };
}
function Go(t) {
  let { state: e, triggerRef: l, label: i, name: n, form: o, isDisabled: u } = t, r = v.useRef(null), a = v.useRef(null), { containerProps: s, selectProps: d } = Xo({
    ...t,
    selectRef: e.collection.size <= 300 ? r : a
  }, e, l), c = Array.isArray(e.value) ? e.value : [
    e.value
  ];
  if (e.collection.size <= 300) return /* @__PURE__ */ R.createElement("div", {
    ...s,
    "data-testid": "hidden-select-container"
  }, /* @__PURE__ */ R.createElement("label", null, i, /* @__PURE__ */ R.createElement("select", {
    ...d,
    ref: r
  }, /* @__PURE__ */ R.createElement("option", null), [
    ...e.collection.getKeys()
  ].map((f) => {
    let p = e.collection.getItem(f);
    if (p && p.type === "item") return /* @__PURE__ */ R.createElement("option", {
      key: p.key,
      value: p.key
    }, p.textValue);
  }), e.collection.size === 0 && n && c.map((f, p) => /* @__PURE__ */ R.createElement("option", {
    key: p,
    value: f ?? ""
  })))));
  if (n) {
    let f = ft.get(e) || {}, { validationBehavior: p } = f;
    c.length === 0 && (c = [
      null
    ]);
    let h = c.map((g, m) => {
      let b = {
        type: "hidden",
        autoComplete: d.autoComplete,
        name: n,
        form: o,
        disabled: u,
        value: g ?? ""
      };
      return p === "native" ? /* @__PURE__ */ R.createElement("input", {
        key: m,
        ...b,
        ref: m === 0 ? a : null,
        style: {
          display: "none"
        },
        type: "text",
        required: m === 0 ? d.required : !1,
        onChange: () => {
        }
      }) : /* @__PURE__ */ R.createElement("input", {
        key: m,
        ...b,
        ref: m === 0 ? a : null
      });
    });
    return /* @__PURE__ */ R.createElement(R.Fragment, null, h);
  }
  return null;
}
const pt = /* @__PURE__ */ new WeakMap();
function Ue(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function Kl(t, e) {
  let l = pt.get(t);
  if (!l) throw new Error("Unknown grid");
  return `${l}-${Ue(e)}`;
}
function Fl(t, e, l) {
  let i = pt.get(t);
  if (!i) throw new Error("Unknown grid");
  return `${i}-${Ue(e)}-${Ue(l)}`;
}
function Jo(t, e) {
  return [
    ...t.collection.rowHeaderColumnKeys
  ].map((l) => Fl(t, e, l)).join(" ");
}
var Tl = {};
Tl = {
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
var Nl = {};
Nl = {
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
var Vl = {};
Vl = {
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
var jl = {};
jl = {
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
var Hl = {};
Hl = {
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
var Ll = {};
Ll = {
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
var Wl = {};
Wl = {
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
var Ol = {};
Ol = {
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
var Ul = {};
Ul = {
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
var Yl = {};
Yl = {
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
var ql = {};
ql = {
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
var Zl = {};
Zl = {
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
var Xl = {};
Xl = {
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
var Gl = {};
Gl = {
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
var Jl = {};
Jl = {
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
var Ql = {};
Ql = {
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
var _l = {};
_l = {
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
var ei = {};
ei = {
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
var ti = {};
ti = {
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
var li = {};
li = {
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
var ii = {};
ii = {
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
var ni = {};
ni = {
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
var oi = {};
oi = {
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
var ui = {};
ui = {
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
var ri = {};
ri = {
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
var si = {};
si = {
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
var ai = {};
ai = {
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
var ci = {};
ci = {
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
var di = {};
di = {
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
var hi = {};
hi = {
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
var fi = {};
fi = {
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
var pi = {};
pi = {
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
var vi = {};
vi = {
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
var mi = {};
mi = {
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
var Te = {};
Te = {
  "ar-AE": Tl,
  "bg-BG": Nl,
  "cs-CZ": Vl,
  "da-DK": jl,
  "de-DE": Hl,
  "el-GR": Ll,
  "en-US": Wl,
  "es-ES": Ol,
  "et-EE": Ul,
  "fi-FI": Yl,
  "fr-FR": ql,
  "he-IL": Zl,
  "hr-HR": Xl,
  "hu-HU": Gl,
  "it-IT": Jl,
  "ja-JP": Ql,
  "ko-KR": _l,
  "lt-LT": ei,
  "lv-LV": ti,
  "nb-NO": li,
  "nl-NL": ii,
  "pl-PL": ni,
  "pt-BR": oi,
  "pt-PT": ui,
  "ro-RO": ri,
  "ru-RU": si,
  "sk-SK": ai,
  "sl-SI": ci,
  "sr-SP": di,
  "sv-SE": hi,
  "tr-TR": fi,
  "uk-UA": pi,
  "zh-CN": vi,
  "zh-TW": mi
};
class Qo extends _t {
  isCell(e) {
    return e.type === "cell" || e.type === "rowheader" || e.type === "column";
  }
  getKeyBelow(e) {
    let l = this.collection.getItem(e);
    if (!l) return null;
    if (l.type === "column") {
      let i = G(F(l, this.collection));
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
    for (let n of F(i, this.collection))
      if (n.type === "column") return n.key;
    return null;
  }
  findPreviousColumnKey(e) {
    let l = this.findPreviousKey(e.key, (o) => o.type === "column");
    if (l != null) return l;
    let i = this.collection.headerRows[e.level], n = [
      ...F(i, this.collection)
    ];
    for (let o = n.length - 1; o >= 0; o--) {
      let u = n[o];
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
    let i = this.collection, n = l ?? this.getFirstKey();
    if (n == null) return null;
    let o = i.getItem(n);
    var u;
    (o == null ? void 0 : o.type) === "cell" && (n = (u = o.parentKey) !== null && u !== void 0 ? u : null);
    let r = !1;
    for (; n != null; ) {
      let a = i.getItem(n);
      if (!a) return null;
      if (a.textValue) {
        let s = a.textValue.slice(0, e.length);
        if (this.collator.compare(s, e) === 0) return a.key;
      }
      for (let s of F(a, this.collection)) {
        let d = i.columns[s.index];
        if (i.rowHeaderColumnKeys.has(d.key) && s.textValue) {
          let c = s.textValue.slice(0, e.length);
          if (this.collator.compare(c, e) === 0) {
            let f = l != null ? i.getItem(l) : o;
            return (f == null ? void 0 : f.type) === "cell" ? s.key : a.key;
          }
        }
      }
      n = this.getKeyBelow(n), n == null && !r && (n = this.getFirstKey(), r = !0);
    }
    return null;
  }
}
function _o(t) {
  return t && t.__esModule ? t.default : t;
}
function eu(t, e, l) {
  let { keyboardDelegate: i, isVirtualized: n, layoutDelegate: o, layout: u } = t, r = tt({
    usage: "search",
    sensitivity: "base"
  }), { direction: a } = Z(), s = e.selectionManager.disabledBehavior, d = v.useMemo(() => i || new Qo({
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    disabledBehavior: s,
    ref: l,
    direction: a,
    collator: r,
    layoutDelegate: o,
    layout: u
  }), [
    i,
    e.collection,
    e.disabledKeys,
    s,
    l,
    a,
    r,
    o,
    u
  ]), c = Fe(t.id);
  pt.set(e, c);
  let { gridProps: f } = Uo({
    ...t,
    id: c,
    keyboardDelegate: d
  }, e, l);
  n && (f["aria-rowcount"] = e.collection.size + e.collection.headerRows.length), Se() && "expandedKeys" in e && (f.role = "treegrid");
  let { column: p, direction: h } = e.sortDescriptor || {}, g = ve(_o(Te), "@react-aria/table"), m = v.useMemo(() => {
    var w, $;
    let y = ($ = (w = e.collection.columns.find((x) => x.key === p)) === null || w === void 0 ? void 0 : w.textValue) !== null && $ !== void 0 ? $ : "";
    return h && p ? g.format(`${h}Sort`, {
      columnName: y
    }) : void 0;
  }, [
    h,
    p,
    e.collection.columns
  ]), b = Ke(m);
  return Qt(() => {
    m && Tt(m, "assertive", 500);
  }, [
    m
  ]), {
    gridProps: T(f, b, {
      // merge sort description with long press information
      "aria-describedby": [
        b["aria-describedby"],
        f["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function tu(t) {
  return t && t.__esModule ? t.default : t;
}
function lu(t, e, l) {
  var i, n;
  let { node: o } = t, u = o.props.allowsSorting, { gridCellProps: r } = Ml({
    ...t,
    focusMode: "child"
  }, e, l), a = o.props.isSelectionCell && e.selectionManager.selectionMode === "single", { pressProps: s, isPressed: d } = Lt({
    isDisabled: !u || a,
    onPress() {
      e.sort(o.key);
    },
    ref: l
  }), { focusableProps: c } = Qn({}, l), f, p = ((i = e.sortDescriptor) === null || i === void 0 ? void 0 : i.column) === o.key, h = (n = e.sortDescriptor) === null || n === void 0 ? void 0 : n.direction;
  o.props.allowsSorting && !zt() && (f = p ? h : "none");
  let g = ve(tu(Te), "@react-aria/table"), m;
  u && (m = `${g.format("sortable")}`, p && h && zt() && (m = `${m}, ${g.format(h)}`));
  let b = Ke(m), w = e.collection.size === 0;
  return v.useEffect(() => {
    w && e.selectionManager.focusedKey === o.key && e.selectionManager.setFocusedKey(null);
  }, [
    w,
    e.selectionManager,
    o.key
  ]), {
    columnHeaderProps: {
      ...T(
        c,
        r,
        s,
        b,
        // If the table is empty, make all column headers untabbable
        w ? {
          tabIndex: -1
        } : null
      ),
      role: "columnheader",
      id: Kl(e, o.key),
      "aria-colspan": o.colSpan && o.colSpan > 1 ? o.colSpan : void 0,
      "aria-sort": f
    },
    isPressed: d
  };
}
const Rt = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  collapse: {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function iu(t, e, l) {
  let { node: i } = t, { rowProps: n, ...o } = qo(t, e, l), { direction: u } = Z();
  Se() && "expandedKeys" in e ? delete n["aria-rowindex"] : n["aria-rowindex"] = i.index + 1 + e.collection.headerRows.length;
  let r = {};
  if (Se() && "expandedKeys" in e) {
    let y = e.keyMap.get(i.key);
    if (y != null) {
      var a, s, d, c, f, p;
      let x = ((a = y.props) === null || a === void 0 ? void 0 : a.UNSTABLE_childItems) || ((d = y.props) === null || d === void 0 || (s = d.children) === null || s === void 0 ? void 0 : s.length) > e.userColumnCount;
      var h, g, m, b;
      r = {
        onKeyDown: (k) => {
          (k.key === Rt.expand[u] && e.selectionManager.focusedKey === y.key && x && e.expandedKeys !== "all" && !e.expandedKeys.has(y.key) || k.key === Rt.collapse[u] && e.selectionManager.focusedKey === y.key && x && (e.expandedKeys === "all" || e.expandedKeys.has(y.key))) && (e.toggleKey(y.key), k.stopPropagation());
        },
        "aria-expanded": x ? e.expandedKeys === "all" || e.expandedKeys.has(i.key) : void 0,
        "aria-level": y.level,
        "aria-posinset": ((h = y.indexOfType) !== null && h !== void 0 ? h : 0) + 1,
        "aria-setsize": y.level > 1 ? ((m = (c = q((g = (f = e.keyMap.get(y.parentKey)) === null || f === void 0 ? void 0 : f.childNodes) !== null && g !== void 0 ? g : [])) === null || c === void 0 ? void 0 : c.indexOfType) !== null && m !== void 0 ? m : 0) + 1 : ((b = (p = q(e.collection.body.childNodes)) === null || p === void 0 ? void 0 : p.indexOfType) !== null && b !== void 0 ? b : 0) + 1
      };
    }
  }
  let w = _n(i.props), $ = o.hasAction ? w : {};
  return {
    rowProps: {
      ...T(n, r, $),
      "aria-labelledby": Jo(e, i.key)
    },
    ...o
  };
}
function nu(t, e, l) {
  let { node: i } = t, n = {
    role: "row"
  };
  return Se() && "expandedKeys" in e || (n["aria-rowindex"] = i.index + 1), {
    rowProps: n
  };
}
function ou(t, e, l) {
  var i;
  let { gridCellProps: n, isPressed: o } = Ml(t, e, l), u = (i = t.node.column) === null || i === void 0 ? void 0 : i.key;
  return u != null && e.collection.rowHeaderColumnKeys.has(u) && (n.role = "rowheader", n.id = Fl(e, t.node.parentKey, u)), {
    gridCellProps: n,
    isPressed: o
  };
}
function uu(t) {
  return t && t.__esModule ? t.default : t;
}
function ru(t, e, l) {
  let { column: i, triggerRef: n, isDisabled: o, onResizeStart: u, onResize: r, onResizeEnd: a, "aria-label": s } = t;
  const d = ve(uu(Te), "@react-aria/table");
  let c = Fe(), f = e.resizingColumn === i.key, p = v.useRef(f), h = v.useRef(null), g = v.useRef(!1), m = e.tableState.isKeyboardNavigationDisabled, { direction: b } = Z(), w = v.useCallback((S) => {
    p.current || (h.current = e.updateResizedColumns(S.key, e.getColumnWidth(S.key)), e.startResize(S.key), e.tableState.setKeyboardNavigationDisabled(!0), u == null || u(h.current)), p.current = !0;
  }, [
    e,
    u
  ]), $ = v.useCallback((S, K) => {
    let U = e.updateResizedColumns(S.key, K);
    r == null || r(U), h.current = U;
  }, [
    e,
    r
  ]), y = v.useCallback((S) => {
    p.current && (h.current == null && (h.current = e.updateResizedColumns(S.key, e.getColumnWidth(S.key))), e.endResize(), e.tableState.setKeyboardNavigationDisabled(!1), a == null || a(h.current), p.current = !1, n != null && n.current && !g.current && Y(n.current)), h.current = null;
  }, [
    e,
    n,
    a
  ]), { keyboardProps: x } = eo({
    onKeyDown: (S) => {
      m ? (S.key === "Escape" || S.key === "Enter" || S.key === " " || S.key === "Tab") && (S.preventDefault(), y(i)) : (S.continuePropagation(), S.key === "Enter" && w(i));
    }
  });
  const k = v.useRef(0), { moveProps: D } = No({
    onMoveStart() {
      k.current = e.getColumnWidth(i.key), w(i);
    },
    onMove(S) {
      let { deltaX: K, deltaY: U, pointerType: Fn } = S;
      b === "rtl" && (K *= -1), Fn === "keyboard" && (U !== 0 && K === 0 && (K = U * -1), K *= 10), K !== 0 && (k.current += K, $(i, k.current));
    },
    onMoveEnd(S) {
      let { pointerType: K } = S;
      k.current = 0, (K === "mouse" || K === "touch" && g.current) && y(i);
    }
  });
  let I = v.useCallback((S) => {
    var K;
    m && ((K = D.onKeyDown) === null || K === void 0 || K.call(D, S));
  }, [
    m,
    D
  ]), E = Math.floor(e.getColumnMinWidth(i.key)), M = Math.floor(e.getColumnMaxWidth(i.key));
  M === 1 / 0 && (M = Number.MAX_SAFE_INTEGER);
  let z = Math.floor(e.getColumnWidth(i.key)), N = Nt();
  N === "virtual" && typeof window < "u" && "ontouchstart" in window && (N = "touch");
  let V = (n == null ? void 0 : n.current) == null && (N === "keyboard" || N === "virtual") && !f ? d.format("resizerDescription") : void 0, O = Ke(V), In = {
    "aria-label": s,
    "aria-orientation": "horizontal",
    "aria-labelledby": `${c} ${Kl(e.tableState, i.key)}`,
    "aria-valuetext": d.format("columnSize", {
      value: z
    }),
    type: "range",
    min: E,
    max: M,
    value: z,
    ...O
  };
  const we = v.useCallback(() => {
    l.current && Y(l.current);
  }, [
    l
  ]);
  let ge = e.resizingColumn, Et = v.useRef(null), An = Ee(w);
  v.useEffect(() => {
    if (Et.current !== ge && ge != null && ge === i.key) {
      g.current = ke() === l.current, An(i);
      let S = setTimeout(() => we(), 0), K = setTimeout(we, 400);
      return () => {
        clearTimeout(S), clearTimeout(K);
      };
    }
    Et.current = ge;
  }, [
    ge,
    i,
    we,
    l
  ]);
  let Pn = (S) => {
    let K = e.getColumnWidth(i.key), U = parseFloat(J(S).value);
    U > K ? U = K + 10 : U = K - 10, $(i, U);
  }, { pressProps: Mn } = Lt({
    preventFocusOnPress: !0,
    onPressStart: (S) => {
      if (!(S.ctrlKey || S.altKey || S.metaKey || S.shiftKey || S.pointerType === "keyboard")) {
        if (S.pointerType === "virtual" && e.resizingColumn != null) {
          y(i);
          return;
        }
        we(), S.pointerType !== "virtual" && w(i);
      }
    },
    onPress: (S) => {
      (S.pointerType === "touch" && g.current || S.pointerType === "mouse") && e.resizingColumn != null && y(i);
    }
  }), { visuallyHiddenProps: Kn } = Ht();
  return {
    resizerProps: T(x, {
      ...D,
      onKeyDown: I
    }, Mn, {
      style: {
        touchAction: "none"
      }
    }),
    inputProps: T(Kn, {
      id: c,
      onBlur: () => {
        y(i);
      },
      onChange: Pn,
      disabled: o
    }, In),
    isResizing: f
  };
}
function bi() {
  return Yo();
}
function su(t) {
  let { selectionMode: e = "single" } = t, l = to(t), [i, n] = v.useState(null), o = v.useMemo(() => {
    var y;
    return t.defaultValue !== void 0 ? t.defaultValue : e === "single" ? (y = t.defaultSelectedKey) !== null && y !== void 0 ? y : null : [];
  }, [
    t.defaultValue,
    t.defaultSelectedKey,
    e
  ]), u = v.useMemo(() => t.value !== void 0 ? t.value : e === "single" ? t.selectedKey : void 0, [
    t.value,
    t.selectedKey,
    e
  ]), [r, a] = lo(u, o, t.onChange), s = e === "single" && Array.isArray(r) ? r[0] : r, d = (y) => {
    if (e === "single") {
      var x, k;
      let D = Array.isArray(y) ? (k = y[0]) !== null && k !== void 0 ? k : null : y;
      a(D), D !== s && ((x = t.onSelectionChange) === null || x === void 0 || x.call(t, D));
    } else {
      let D = [];
      Array.isArray(y) ? D = y : y != null && (D = [
        y
      ]), a(D);
    }
  }, c = Io({
    ...t,
    selectionMode: e,
    disallowEmptySelection: e === "single",
    allowDuplicateSelectionEvents: !0,
    selectedKeys: v.useMemo(() => au(s), [
      s
    ]),
    onSelectionChange: (y) => {
      if (y !== "all") {
        if (e === "single") {
          var x;
          let k = (x = y.values().next().value) !== null && x !== void 0 ? x : null;
          d(k), l.close();
        } else d([
          ...y
        ]);
        h.commitValidation();
      }
    }
  }), f = c.selectionManager.firstSelectedKey, p = v.useMemo(() => [
    ...c.selectionManager.selectedKeys
  ].map((y) => c.collection.getItem(y)).filter((y) => y != null), [
    c.selectionManager.selectedKeys,
    c.collection
  ]), h = io({
    ...t,
    value: Array.isArray(s) && s.length === 0 ? null : s
  }), [g, m] = v.useState(!1), [b] = v.useState(s);
  var w, $;
  return {
    ...h,
    ...c,
    ...l,
    value: s,
    defaultValue: o ?? b,
    setValue: d,
    selectedKey: f,
    setSelectedKey: d,
    selectedItem: (w = p[0]) !== null && w !== void 0 ? w : null,
    selectedItems: p,
    defaultSelectedKey: ($ = t.defaultSelectedKey) !== null && $ !== void 0 ? $ : t.selectionMode === "single" ? b : null,
    focusStrategy: i,
    open(y = null) {
      (c.collection.size !== 0 || t.allowsEmptyCollection) && (n(y), l.open());
    },
    toggle(y = null) {
      (c.collection.size !== 0 || t.allowsEmptyCollection) && (n(y), l.toggle());
    },
    isFocused: g,
    setFocused: m
  };
}
function au(t) {
  if (t !== void 0)
    return t === null ? [] : Array.isArray(t) ? t : [
      t
    ];
}
function cu(t) {
  return t != null && (!isNaN(t) || String(t).match(/^(\d+)(?=%$)/) !== null);
}
function du(t) {
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
function gi(t, e) {
  return t != null ? vt(t, e) : Number.MAX_SAFE_INTEGER;
}
function yi(t, e) {
  return t != null ? vt(t, e) : 0;
}
function hu(t, e, l, i, n) {
  let o = !1, u = e.map((r, a) => {
    var s, d, c, f;
    let p = l.get(r.key) != null ? (s = l.get(r.key)) !== null && s !== void 0 ? s : "1fr" : (f = (c = (d = r.width) !== null && d !== void 0 ? d : r.defaultWidth) !== null && c !== void 0 ? c : i == null ? void 0 : i(a)) !== null && f !== void 0 ? f : "1fr", h = !1, g = 0, m = 0, b = 0;
    cu(p) ? (g = vt(p, t), h = !0) : (m = du(p), m <= 0 && (h = !0));
    var w, $;
    let y = yi(($ = (w = r.minWidth) !== null && w !== void 0 ? w : n == null ? void 0 : n(a)) !== null && $ !== void 0 ? $ : 0, t), x = gi(r.maxWidth, t), k = Math.max(y, Math.min(g, x));
    return h ? b = k : g > k && (h = !0, b = k), h || (o = !0), {
      frozen: h,
      baseSize: g,
      hypotheticalMainSize: k,
      min: y,
      max: x,
      flex: m,
      targetMainSize: b,
      violation: 0
    };
  });
  for (; o; ) {
    let r = 0, a = 0;
    u.forEach((c) => {
      c.frozen ? r += c.targetMainSize : (r += c.baseSize, a += c.flex);
    });
    let s = t - r;
    s > 0 && u.forEach((c) => {
      if (!c.frozen) {
        let f = c.flex / a;
        c.targetMainSize = c.baseSize + f * s;
      }
    });
    let d = 0;
    u.forEach((c) => {
      if (c.violation = 0, !c.frozen) {
        let { min: f, max: p, targetMainSize: h } = c;
        c.targetMainSize = Math.max(f, Math.min(h, p)), c.violation = c.targetMainSize - h, d += c.violation;
      }
    }), o = !1, u.forEach((c) => {
      d === 0 || Math.sign(d) === Math.sign(c.violation) ? c.frozen = !0 : c.frozen || (o = !0);
    });
  }
  return fu(u);
}
function fu(t) {
  let e = 0, l = 0, i = [];
  return t.forEach(function(n) {
    let o = n.targetMainSize, u = Math.round(o + e) - l;
    e += o, l += u, i.push(u);
  }), i;
}
class $i {
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
      var n, o, u, r;
      return [
        l,
        (r = (u = i.props.defaultWidth) !== null && u !== void 0 ? u : (n = (o = this).getDefaultWidth) === null || n === void 0 ? void 0 : n.call(o, i)) !== null && r !== void 0 ? r : "1fr"
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
    let o = this.columnWidths, u = !0, r = /* @__PURE__ */ new Map();
    return n = Math.max(this.getColumnMinWidth(i), Math.min(this.getColumnMaxWidth(i), Math.floor(n))), e.columns.forEach((a) => {
      var s, d;
      a.key === i ? (r.set(a.key, n), u = !1) : u ? r.set(a.key, (s = o.get(a.key)) !== null && s !== void 0 ? s : 0) : r.set(a.key, (d = a.props.width) !== null && d !== void 0 ? d : l.get(a.key));
    }), r;
  }
  buildColumnWidths(e, l, i) {
    return this.columnWidths = /* @__PURE__ */ new Map(), this.columnMinWidths = /* @__PURE__ */ new Map(), this.columnMaxWidths = /* @__PURE__ */ new Map(), hu(e, l.columns.map((o) => ({
      ...o.props,
      key: o.key
    })), i, (o) => this.getDefaultWidth(l.columns[o]), (o) => this.getDefaultMinWidth(l.columns[o])).forEach((o, u) => {
      let r = l.columns[u].key, a = l.columns[u];
      this.columnWidths.set(r, o);
      var s;
      this.columnMinWidths.set(r, yi((s = a.props.minWidth) !== null && s !== void 0 ? s : this.getDefaultMinWidth(a), e)), this.columnMaxWidths.set(r, gi(a.props.maxWidth, e));
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
function pu(t, e) {
  let { getDefaultWidth: l, getDefaultMinWidth: i, tableWidth: n = 0 } = t, [o, u] = v.useState(null), r = v.useMemo(() => new $i({
    getDefaultWidth: l,
    getDefaultMinWidth: i
  }), [
    l,
    i
  ]), [a, s] = v.useMemo(() => r.splitColumnsIntoControlledAndUncontrolled(e.collection.columns), [
    e.collection.columns,
    r
  ]), [d, c] = v.useState(() => r.getInitialUncontrolledWidths(s)), [f, p] = v.useState(e.collection.columns);
  if (e.collection.columns !== f) {
    if (e.collection.columns.length !== f.length || e.collection.columns.some(($, y) => $.key !== f[y].key)) {
      let $ = r.getInitialUncontrolledWidths(s);
      c($);
    }
    p(e.collection.columns);
  }
  let h = v.useMemo(() => r.recombineColumns(e.collection.columns, d, s, a), [
    e.collection.columns,
    d,
    s,
    a,
    r
  ]), g = v.useCallback(($) => {
    u($);
  }, [
    u
  ]), m = v.useCallback(($, y) => {
    let x = r.resizeColumnWidth(e.collection, d, $, y), k = new Map(Array.from(s).map(([D]) => [
      D,
      x.get(D)
    ]));
    return k.set($, y), c(k), x;
  }, [
    s,
    c,
    r,
    e.collection,
    d
  ]), b = v.useCallback(() => {
    u(null);
  }, [
    u
  ]), w = v.useMemo(() => r.buildColumnWidths(n, e.collection, h), [
    n,
    e.collection,
    h,
    r
  ]);
  return v.useMemo(() => ({
    resizingColumn: o,
    updateResizedColumns: m,
    startResize: g,
    endResize: b,
    getColumnWidth: ($) => r.getColumnWidth($),
    getColumnMinWidth: ($) => r.getColumnMinWidth($),
    getColumnMaxWidth: ($) => r.getColumnMaxWidth($),
    tableState: e,
    columnWidths: w
  }), [
    r,
    w,
    o,
    m,
    g,
    b,
    e
  ]);
}
function vu(t) {
  let { collection: e, focusMode: l } = t, i = t.UNSAFE_selectionState || Wt(t), n = v.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), o = i.setFocusedKey;
  i.setFocusedKey = (a, s) => {
    if (l === "cell" && a != null) {
      let h = e.getItem(a);
      if ((h == null ? void 0 : h.type) === "item") {
        var d, c;
        let g = F(h, e);
        var f, p;
        s === "last" ? a = (f = (d = q(g)) === null || d === void 0 ? void 0 : d.key) !== null && f !== void 0 ? f : null : a = (p = (c = G(g)) === null || c === void 0 ? void 0 : c.key) !== null && p !== void 0 ? p : null;
      }
    }
    o(a, s);
  };
  let u = v.useMemo(() => new no(e, i), [
    e,
    i
  ]);
  const r = v.useRef(null);
  return v.useEffect(() => {
    if (i.focusedKey != null && r.current && !e.getItem(i.focusedKey)) {
      const a = r.current.getItem(i.focusedKey), s = (a == null ? void 0 : a.parentKey) != null && (a.type === "cell" || a.type === "rowheader" || a.type === "column") ? r.current.getItem(a.parentKey) : a;
      if (!s) {
        i.setFocusedKey(null);
        return;
      }
      const d = r.current.rows, c = e.rows, f = d.length - c.length;
      let p = Math.min(f > 1 ? Math.max(s.index - f + 1, 0) : s.index, c.length - 1), h = null;
      for (; p >= 0; ) {
        if (!u.isDisabled(c[p].key) && c[p].type !== "headerrow") {
          h = c[p];
          break;
        }
        p < c.length - 1 ? p++ : (p > s.index && (p = s.index), p--);
      }
      if (h) {
        const g = h.hasChildNodes ? [
          ...F(h, e)
        ] : [], m = h.hasChildNodes && s !== a && a && a.index < g.length ? g[a.index].key : h.key;
        i.setFocusedKey(m);
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
    disabledKeys: n,
    isKeyboardNavigationDisabled: !1,
    selectionManager: u
  };
}
class mu {
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
      let f = this.keyMap.get(c.key);
      e.visitNode && (c = e.visitNode(c)), this.keyMap.set(c.key, c);
      let p = /* @__PURE__ */ new Set(), h = null, g = !1;
      if (c.type === "item") {
        var m;
        for (let x of c.childNodes) if (((m = x.props) === null || m === void 0 ? void 0 : m.colSpan) !== void 0) {
          g = !0;
          break;
        }
      }
      for (let x of c.childNodes) {
        if (x.type === "cell" && g) {
          var b, w;
          x.colspan = (b = x.props) === null || b === void 0 ? void 0 : b.colSpan, x.colSpan = (w = x.props) === null || w === void 0 ? void 0 : w.colSpan;
          var $, y;
          x.colIndex = h ? (($ = h.colIndex) !== null && $ !== void 0 ? $ : h.index) + ((y = h.colSpan) !== null && y !== void 0 ? y : 1) : x.index;
        }
        x.type === "cell" && x.parentKey == null && (x.parentKey = c.key), p.add(x.key), h ? (h.nextKey = x.key, x.prevKey = h.key) : x.prevKey = null, l(x), h = x;
      }
      if (h && (h.nextKey = null), f)
        for (let x of f.childNodes) p.has(x.key) || i(x);
    }, i = (c) => {
      this.keyMap.delete(c.key);
      for (let f of c.childNodes) this.keyMap.get(f.key) === f && i(f);
    }, n = null;
    for (let [c, f] of e.items.entries()) {
      var o, u, r, a, s, d;
      let p = {
        ...f,
        level: (o = f.level) !== null && o !== void 0 ? o : 0,
        key: (u = f.key) !== null && u !== void 0 ? u : "row-" + c,
        type: (r = f.type) !== null && r !== void 0 ? r : "row",
        value: (a = f.value) !== null && a !== void 0 ? a : null,
        hasChildNodes: !0,
        childNodes: [
          ...f.childNodes
        ],
        rendered: f.rendered,
        textValue: (s = f.textValue) !== null && s !== void 0 ? s : "",
        index: (d = f.index) !== null && d !== void 0 ? d : c
      };
      n ? (n.nextKey = p.key, p.prevKey = n.key) : p.prevKey = null, this.rows.push(p), l(p), n = p;
    }
    n && (n.nextKey = null);
  }
}
const xi = "row-header-column-" + Math.random().toString(36).slice(2);
let Ye = "row-header-column-" + Math.random().toString(36).slice(2);
for (; xi === Ye; ) Ye = "row-header-column-" + Math.random().toString(36).slice(2);
function wi(t, e) {
  if (e.length === 0) return [];
  let l = [], i = /* @__PURE__ */ new Map();
  for (let d of e) {
    let c = d.parentKey, f = [
      d
    ];
    for (; c; ) {
      let p = t.get(c);
      if (!p) break;
      if (i.has(p)) {
        var n, o;
        (o = (n = p).colSpan) !== null && o !== void 0 || (n.colSpan = 0), p.colSpan++, p.colspan = p.colSpan;
        let { column: h, index: g } = i.get(p);
        if (g > f.length) break;
        for (let m = g; m < f.length; m++) h.splice(m, 0, null);
        for (let m = f.length; m < h.length; m++)
          h[m] && i.has(h[m]) && (i.get(h[m]).index = m);
      } else
        p.colSpan = 1, p.colspan = 1, f.push(p), i.set(p, {
          column: f,
          index: f.length - 1
        });
      c = p.parentKey;
    }
    l.push(f), d.index = l.length - 1;
  }
  let u = Math.max(...l.map((d) => d.length)), r = Array(u).fill(0).map(() => []), a = 0;
  for (let d of l) {
    let c = u - 1;
    for (let f of d) {
      if (f) {
        let p = r[c], h = p.reduce((g, m) => {
          var b;
          return g + ((b = m.colSpan) !== null && b !== void 0 ? b : 1);
        }, 0);
        if (h < a) {
          let g = {
            type: "placeholder",
            key: "placeholder-" + f.key,
            colspan: a - h,
            colSpan: a - h,
            index: h,
            value: null,
            rendered: null,
            level: c,
            hasChildNodes: !1,
            childNodes: [],
            textValue: ""
          };
          p.length > 0 && (p[p.length - 1].nextKey = g.key, g.prevKey = p[p.length - 1].key), p.push(g);
        }
        p.length > 0 && (p[p.length - 1].nextKey = f.key, f.prevKey = p[p.length - 1].key), f.level = c, f.colIndex = a, p.push(f);
      }
      c--;
    }
    a++;
  }
  let s = 0;
  for (let d of r) {
    let c = d.reduce((f, p) => {
      var h;
      return f + ((h = p.colSpan) !== null && h !== void 0 ? h : 1);
    }, 0);
    if (c < e.length) {
      let f = {
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
      d.push(f);
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
class bu extends mu {
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
    return (l = (e = G(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && l !== void 0 ? l : null;
  }
  getLastKey() {
    var e, l;
    return (l = (e = q(this.body.childNodes)) === null || e === void 0 ? void 0 : e.key) !== null && l !== void 0 ? l : null;
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
        let u = this.columns[o.index];
        if (i.has(u.key) && o.textValue && n.push(o.textValue), n.length === i.size) break;
      }
      return n.join(" ");
    }
    return "";
  }
  constructor(e, l, i) {
    let n = /* @__PURE__ */ new Set(), o = null, u = [];
    if (i != null && i.showSelectionCheckboxes) {
      let c = {
        type: "column",
        key: xi,
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
        key: Ye,
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
          o = c;
          break;
        case "column":
          a.set(c.key, c), c.hasChildNodes || (u.push(c), c.props.isRowHeader && n.add(c.key));
          break;
        case "item":
          r.push(c);
          return;
      }
      for (let f of c.childNodes) s(f);
    };
    for (let c of e) s(c);
    let d = wi(a, u);
    if (d.forEach((c, f) => r.splice(f, 0, c)), super({
      columnCount: u.length,
      items: r,
      visitNode: (c) => (c.column = u[c.index], c)
    }), this._size = 0, this.columns = u, this.rowHeaderColumnKeys = n, this.body = o, this.headerRows = d, this._size = [
      ...o.childNodes
    ].length, this.rowHeaderColumnKeys.size === 0) {
      let c = this.columns.find((f) => {
        var p, h;
        return !(!((p = f.props) === null || p === void 0) && p.isDragButtonCell) && !(!((h = f.props) === null || h === void 0) && h.isSelectionCell);
      });
      c && this.rowHeaderColumnKeys.add(c.key);
    }
  }
}
const gu = {
  ascending: "descending",
  descending: "ascending"
};
function yu(t) {
  let [e, l] = v.useState(!1), { selectionMode: i = "none", showSelectionCheckboxes: n, showDragButtons: o } = t, u = v.useMemo(() => ({
    showSelectionCheckboxes: n && i !== "none",
    showDragButtons: o,
    selectionMode: i,
    columns: []
  }), [
    t.children,
    n,
    i,
    o
  ]), r = oo(t, v.useCallback((c) => new bu(c, null, u), [
    u
  ]), u), { disabledKeys: a, selectionManager: s } = vu({
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
    sort(c, f) {
      var p, h;
      (h = t.onSortChange) === null || h === void 0 || h.call(t, {
        column: c,
        direction: f ?? (((p = t.sortDescriptor) === null || p === void 0 ? void 0 : p.column) === c ? gu[t.sortDescriptor.direction] : "ascending")
      });
    }
  };
}
var Ci = {};
Ci = {
  colorSwatchPicker: "تغييرات الألوان",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "حدد عنصرًا",
  tableResizer: "أداة تغيير الحجم"
};
var ki = {};
ki = {
  colorSwatchPicker: "Цветови мостри",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Изберете предмет",
  tableResizer: "Преоразмерител"
};
var Di = {};
Di = {
  colorSwatchPicker: "Vzorky barev",
  dropzoneLabel: "Místo pro přetažení",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Změna velikosti"
};
var Ei = {};
Ei = {
  colorSwatchPicker: "Farveprøver",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vælg et element",
  tableResizer: "Størrelsesændring"
};
var Si = {};
Si = {
  colorSwatchPicker: "Farbfelder",
  dropzoneLabel: "Ablegebereich",
  selectPlaceholder: "Element wählen",
  tableResizer: "Größenanpassung"
};
var zi = {};
zi = {
  colorSwatchPicker: "Χρωματικά δείγματα",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Επιλέξτε ένα αντικείμενο",
  tableResizer: "Αλλαγή μεγέθους"
};
var Bi = {};
Bi = {
  selectPlaceholder: "Select an item",
  tableResizer: "Resizer",
  dropzoneLabel: "DropZone",
  colorSwatchPicker: "Color swatches"
};
var Ri = {};
Ri = {
  colorSwatchPicker: "Muestras de colores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Seleccionar un artículo",
  tableResizer: "Cambiador de tamaño"
};
var Ii = {};
Ii = {
  colorSwatchPicker: "Värvinäidised",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valige üksus",
  tableResizer: "Suuruse muutja"
};
var Ai = {};
Ai = {
  colorSwatchPicker: "Värimallit",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Valitse kohde",
  tableResizer: "Koon muuttaja"
};
var Pi = {};
Pi = {
  colorSwatchPicker: "Échantillons de couleurs",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Sélectionner un élément",
  tableResizer: "Redimensionneur"
};
var Mi = {};
Mi = {
  colorSwatchPicker: "דוגמיות צבע",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "בחר פריט",
  tableResizer: "שינוי גודל"
};
var Ki = {};
Ki = {
  colorSwatchPicker: "Uzorci boja",
  dropzoneLabel: "Zona spuštanja",
  selectPlaceholder: "Odaberite stavku",
  tableResizer: "Promjena veličine"
};
var Fi = {};
Fi = {
  colorSwatchPicker: "Színtárak",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Válasszon ki egy elemet",
  tableResizer: "Átméretező"
};
var Ti = {};
Ti = {
  colorSwatchPicker: "Campioni di colore",
  dropzoneLabel: "Zona di rilascio",
  selectPlaceholder: "Seleziona un elemento",
  tableResizer: "Ridimensionamento"
};
var Ni = {};
Ni = {
  colorSwatchPicker: "カラースウォッチ",
  dropzoneLabel: "ドロップゾーン",
  selectPlaceholder: "項目を選択",
  tableResizer: "サイズ変更ツール"
};
var Vi = {};
Vi = {
  colorSwatchPicker: "색상 견본",
  dropzoneLabel: "드롭 영역",
  selectPlaceholder: "항목 선택",
  tableResizer: "크기 조정기"
};
var ji = {};
ji = {
  colorSwatchPicker: "Spalvų pavyzdžiai",
  dropzoneLabel: "„DropZone“",
  selectPlaceholder: "Pasirinkite elementą",
  tableResizer: "Dydžio keitiklis"
};
var Hi = {};
Hi = {
  colorSwatchPicker: "Krāsu paraugi",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izvēlēties vienumu",
  tableResizer: "Izmēra mainītājs"
};
var Li = {};
Li = {
  colorSwatchPicker: "Fargekart",
  dropzoneLabel: "Droppsone",
  selectPlaceholder: "Velg et element",
  tableResizer: "Størrelsesendrer"
};
var Wi = {};
Wi = {
  colorSwatchPicker: "kleurstalen",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecteer een item",
  tableResizer: "Resizer"
};
var Oi = {};
Oi = {
  colorSwatchPicker: "Próbki kolorów",
  dropzoneLabel: "Strefa upuszczania",
  selectPlaceholder: "Wybierz element",
  tableResizer: "Zmiana rozmiaru"
};
var Ui = {};
Ui = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var Yi = {};
Yi = {
  colorSwatchPicker: "Amostras de cores",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Selecione um item",
  tableResizer: "Redimensionador"
};
var qi = {};
qi = {
  colorSwatchPicker: "Specimene de culoare",
  dropzoneLabel: "Zonă de plasare",
  selectPlaceholder: "Selectați un element",
  tableResizer: "Instrument de redimensionare"
};
var Zi = {};
Zi = {
  colorSwatchPicker: "Цветовые образцы",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Выберите элемент",
  tableResizer: "Средство изменения размера"
};
var Xi = {};
Xi = {
  colorSwatchPicker: "Vzorkovníky farieb",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Vyberte položku",
  tableResizer: "Nástroj na zmenu veľkosti"
};
var Gi = {};
Gi = {
  colorSwatchPicker: "Barvne palete",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izberite element",
  tableResizer: "Spreminjanje velikosti"
};
var Ji = {};
Ji = {
  colorSwatchPicker: "Uzorci boje",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Izaberite stavku",
  tableResizer: "Promena veličine"
};
var Qi = {};
Qi = {
  colorSwatchPicker: "Färgrutor",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Välj en artikel",
  tableResizer: "Storleksändrare"
};
var _i = {};
_i = {
  colorSwatchPicker: "Renk örnekleri",
  dropzoneLabel: "Bırakma Bölgesi",
  selectPlaceholder: "Bir öğe seçin",
  tableResizer: "Yeniden boyutlandırıcı"
};
var en = {};
en = {
  colorSwatchPicker: "Зразки кольорів",
  dropzoneLabel: "DropZone",
  selectPlaceholder: "Виберіть елемент",
  tableResizer: "Засіб змінення розміру"
};
var tn = {};
tn = {
  colorSwatchPicker: "颜色色板",
  dropzoneLabel: "放置区域",
  selectPlaceholder: "选择一个项目",
  tableResizer: "尺寸调整器"
};
var ln = {};
ln = {
  colorSwatchPicker: "色票",
  dropzoneLabel: "放置區",
  selectPlaceholder: "選取項目",
  tableResizer: "大小調整器"
};
var nn = {};
nn = {
  "ar-AE": Ci,
  "bg-BG": ki,
  "cs-CZ": Di,
  "da-DK": Ei,
  "de-DE": Si,
  "el-GR": zi,
  "en-US": Bi,
  "es-ES": Ri,
  "et-EE": Ii,
  "fi-FI": Ai,
  "fr-FR": Pi,
  "he-IL": Mi,
  "hr-HR": Ki,
  "hu-HU": Fi,
  "it-IT": Ti,
  "ja-JP": Ni,
  "ko-KR": Vi,
  "lt-LT": ji,
  "lv-LV": Hi,
  "nb-NO": Li,
  "nl-NL": Wi,
  "pl-PL": Oi,
  "pt-BR": Ui,
  "pt-PT": Yi,
  "ro-RO": qi,
  "ru-RU": Zi,
  "sk-SK": Xi,
  "sl-SI": Gi,
  "sr-SP": Ji,
  "sv-SE": Qi,
  "tr-TR": _i,
  "uk-UA": en,
  "zh-CN": tn,
  "zh-TW": ln
};
function $u(t) {
  return t && t.__esModule ? t.default : t;
}
const mt = /* @__PURE__ */ v.createContext(null), on = /* @__PURE__ */ v.createContext(null), xu = /* @__PURE__ */ v.forwardRef(function(e, l) {
  [e, l] = lt(e, l, mt);
  let { children: i, isDisabled: n = !1, isInvalid: o = !1, isRequired: u = !1 } = e, r = v.useMemo(() => typeof i == "function" ? i({
    isOpen: !1,
    isDisabled: n,
    isInvalid: o,
    isRequired: u,
    isFocused: !1,
    isFocusVisible: !1,
    defaultChildren: null
  }) : i, [
    i,
    n,
    o,
    u
  ]);
  return /* @__PURE__ */ R.createElement(Ut, {
    content: r
  }, (a) => /* @__PURE__ */ R.createElement(Cu, {
    props: e,
    collection: a,
    selectRef: l
  }));
}), wu = [
  Yt,
  qt,
  it
];
function Cu({ props: t, selectRef: e, collection: l }) {
  let { validationBehavior: i } = Ot(ro) || {};
  var n, o;
  let u = (o = (n = t.validationBehavior) !== null && n !== void 0 ? n : i) !== null && o !== void 0 ? o : "native", r = su({
    ...t,
    collection: l,
    children: void 0,
    validationBehavior: u
  }), { isFocusVisible: a, focusProps: s } = pe({
    within: !0
  }), d = v.useRef(null), [c, f] = so(!t["aria-label"] && !t["aria-labelledby"]), { labelProps: p, triggerProps: h, valueProps: g, menuProps: m, descriptionProps: b, errorMessageProps: w, hiddenSelectProps: $, ...y } = Zo({
    ...ao(t),
    label: f,
    validationBehavior: u
  }, r, d), [x, k] = v.useState(null), D = v.useCallback(() => {
    d.current && k(d.current.offsetWidth + "px");
  }, [
    d
  ]);
  nt({
    ref: d,
    onResize: D
  });
  let I = v.useMemo(() => ({
    isOpen: r.isOpen,
    isFocused: r.isFocused,
    isFocusVisible: a,
    isDisabled: t.isDisabled || !1,
    isInvalid: y.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    r.isOpen,
    r.isFocused,
    a,
    t.isDisabled,
    y.isInvalid,
    t.isRequired
  ]), E = ue({
    ...t,
    values: I,
    defaultClassName: "react-aria-Select"
  }), M = W(t, {
    global: !0
  });
  delete M.id;
  let z = v.useRef(null);
  return /* @__PURE__ */ R.createElement(ot, {
    values: [
      [
        mt,
        t
      ],
      [
        on,
        r
      ],
      [
        un,
        g
      ],
      [
        Yt,
        {
          ...p,
          ref: c,
          elementType: "span"
        }
      ],
      [
        qt,
        {
          ...h,
          ref: d,
          isPressed: r.isOpen,
          autoFocus: t.autoFocus
        }
      ],
      [
        co,
        r
      ],
      [
        ho,
        {
          trigger: "Select",
          triggerRef: d,
          scrollRef: z,
          placement: "bottom start",
          style: {
            "--trigger-width": x
          },
          "aria-labelledby": m["aria-labelledby"],
          clearContexts: wu
        }
      ],
      [
        Ao,
        {
          ...m,
          ref: z
        }
      ],
      [
        Po,
        r
      ],
      [
        it,
        {
          slots: {
            description: b,
            errorMessage: w
          }
        }
      ],
      [
        fo,
        y
      ]
    ]
  }, /* @__PURE__ */ R.createElement(fe.div, {
    ...T(M, E, s),
    ref: e,
    slot: t.slot || void 0,
    "data-focused": r.isFocused || void 0,
    "data-focus-visible": a || void 0,
    "data-open": r.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": y.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }, E.children, /* @__PURE__ */ R.createElement(Go, {
    ...$,
    autoComplete: t.autoComplete
  })));
}
const un = /* @__PURE__ */ v.createContext(null), ku = /* @__PURE__ */ uo(function(e, l) {
  var i;
  [e, l] = lt(e, l, un);
  let n = v.useContext(on), { placeholder: o } = Ot(mt), u = n.selectedItems.map((b) => {
    var w;
    let $ = (w = b.props) === null || w === void 0 ? void 0 : w.children;
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
  }), r = To(), a = v.useMemo(() => n.selectedItems.map((b) => b == null ? void 0 : b.textValue), [
    n.selectedItems
  ]), s = n.selectionManager.selectionMode, d = v.useMemo(() => {
    var b;
    return s === "single" ? (b = a[0]) !== null && b !== void 0 ? b : "" : r.format(a);
  }, [
    s,
    r,
    a
  ]), c = v.useMemo(() => {
    if (s === "single") return u[0];
    let b = r.formatToParts(a);
    if (b.length === 0) return null;
    let w = 0;
    return b.map(($) => $.type === "element" ? /* @__PURE__ */ R.createElement(v.Fragment, {
      key: w
    }, u[w++]) : $.value);
  }, [
    s,
    r,
    a,
    u
  ]), f = ve($u(nn), "react-aria-components");
  var p, h;
  let g = ue({
    ...e,
    defaultChildren: (p = c ?? o) !== null && p !== void 0 ? p : f.format("selectPlaceholder"),
    defaultClassName: "react-aria-SelectValue",
    values: {
      selectedItem: (h = (i = n.selectedItems[0]) === null || i === void 0 ? void 0 : i.value) !== null && h !== void 0 ? h : null,
      selectedItems: v.useMemo(() => n.selectedItems.map((b) => {
        var w;
        return (w = b.value) !== null && w !== void 0 ? w : null;
      }), [
        n.selectedItems
      ]),
      selectedText: d,
      isPlaceholder: n.selectedItems.length === 0,
      state: n
    }
  }), m = W(e, {
    global: !0
  });
  return /* @__PURE__ */ R.createElement(fe.span, {
    ref: l,
    ...m,
    ...g,
    "data-placeholder": n.selectedItems.length === 0 || void 0
  }, /* @__PURE__ */ R.createElement(it.Provider, {
    value: void 0
  }, g.children));
}), Du = /* @__PURE__ */ v.createContext(null), Eu = /* @__PURE__ */ v.createContext(null), Ne = /* @__PURE__ */ v.createContext(null);
class Su extends _ {
}
Su.type = "tableheader";
class zu extends _ {
}
zu.type = "column";
class Bu extends Zt {
}
Bu.type = "tablebody";
class Ru extends _ {
  filter(e, l, i) {
    let n = e.getChildren(this.key);
    for (let o of n) if (i(o.textValue, o)) {
      let u = this.clone();
      return l.addDescendants(u, e), u;
    }
    return null;
  }
}
Ru.type = "item";
let It = /* @__PURE__ */ v.forwardRef(function(e, l) {
  let { isVirtualized: i } = v.useContext(rt);
  return i ? /* @__PURE__ */ R.createElement(fe.div, {
    ...e,
    ref: l
  }) : /* @__PURE__ */ R.createElement(fe.tr, {
    ...e,
    ref: l
  });
});
class Iu extends _ {
}
Iu.type = "cell";
let At = /* @__PURE__ */ v.forwardRef(function(e, l) {
  let { isVirtualized: i } = v.useContext(rt);
  return i ? /* @__PURE__ */ R.createElement(fe.div, {
    ...e,
    ref: l
  }) : /* @__PURE__ */ R.createElement(fe.td, {
    ...e,
    ref: l
  });
});
ut(po, function(e, l, i) {
  let n = v.useContext(Eu), { isVirtualized: o } = v.useContext(rt), { isLoading: u, onLoadMore: r, scrollOffset: a, ...s } = e, d = n.collection.columns.length, c = v.useRef(null), f = v.useMemo(() => ({
    onLoadMore: r,
    collection: n == null ? void 0 : n.collection,
    sentinelRef: c,
    scrollOffset: a
  }), [
    r,
    a,
    n == null ? void 0 : n.collection
  ]);
  Mo(f, c);
  let p = ue({
    ...s,
    id: void 0,
    children: i.rendered,
    defaultClassName: "react-aria-TableLoadingIndicator",
    values: void 0
  }), h = {}, g = {}, m = {};
  return o ? (g["aria-colspan"] = d, m = {
    display: "contents"
  }) : g.colSpan = d, /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(It, {
    style: {
      height: 0
    },
    inert: Ko(!0)
  }, /* @__PURE__ */ R.createElement(At, {
    style: {
      padding: 0,
      border: 0
    }
  }, /* @__PURE__ */ R.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: c,
    style: {
      position: "relative",
      height: 1,
      width: 1
    }
  }))), u && p.children && /* @__PURE__ */ R.createElement(It, {
    ...T(W(e, {
      global: !0
    }), h),
    ...p,
    role: "row",
    ref: l
  }, /* @__PURE__ */ R.createElement(At, {
    role: "rowheader",
    ...g,
    style: m
  }, p.children)));
});
class Au {
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
class H {
  /**
  * Returns a copy of the LayoutInfo.
  */
  copy() {
    let e = new H(this.type, this.key, this.rect.copy());
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
class ee {
  /**
  * Returns a copy of this point.
  */
  copy() {
    return new ee(this.x, this.y);
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
class B {
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
    return new ee(this.x, this.y);
  }
  /**
  * The top right corner of the rectangle.
  */
  get topRight() {
    return new ee(this.maxX, this.y);
  }
  /**
  * The bottom left corner of the rectangle.
  */
  get bottomLeft() {
    return new ee(this.x, this.maxY);
  }
  /**
  * The bottom right corner of the rectangle.
  */
  get bottomRight() {
    return new ee(this.maxX, this.maxY);
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
    return new B(l, i, n, o);
  }
  /**
  * Returns the intersection of this Rect with another.
  * If the rectangles do not intersect, an all zero Rect is returned.
  */
  intersection(e) {
    if (!this.intersects(e)) return new B(0, 0, 0, 0);
    let l = Math.max(this.x, e.x), i = Math.max(this.y, e.y);
    return new B(l, i, Math.min(this.maxX, e.maxX) - l, Math.min(this.maxY, e.maxY) - i);
  }
  /**
  * Returns a copy of this rectangle.
  */
  copy() {
    return new B(this.x, this.y, this.width, this.height);
  }
  constructor(e = 0, l = 0, i = 0, n = 0) {
    this.x = e, this.y = l, this.width = i, this.height = n;
  }
}
class ne {
  /**
  * Returns a copy of this size.
  */
  copy() {
    return new ne(this.width, this.height);
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
let Pu = 0;
class rn {
  /**
  * Prepares the view for reuse. Called just before the view is removed from the DOM.
  */
  prepareForReuse() {
    this.content = null, this.rendered = null, this.layoutInfo = null;
  }
  getReusableView(e) {
    let l = this.reusableViews.get(e);
    return l && l.length > 0 ? l.shift() : new Ku(this.virtualizer, this, e);
  }
  reuseChild(e) {
    e.prepareForReuse();
    let l = this.reusableViews.get(e.viewType);
    l || (l = [], this.reusableViews.set(e.viewType, l)), l.push(e);
  }
  constructor(e, l) {
    this.virtualizer = e, this.key = ++Pu, this.viewType = l, this.children = /* @__PURE__ */ new Set(), this.reusableViews = /* @__PURE__ */ new Map(), this.layoutInfo = null, this.content = null, this.rendered = null;
  }
}
class Mu extends rn {
  constructor(e) {
    super(e, "root");
  }
}
class Ku extends rn {
  constructor(e, l, i) {
    super(e, i), this.parent = l;
  }
}
function Fu(t, e) {
  if (t === e) return !0;
  if (t.size !== e.size) return !1;
  for (let l of t)
    if (!e.has(l)) return !1;
  return !0;
}
class Tu {
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
    this.startTime = 0, this.velocity = new ee(0, 0), this.visibleRect = new B();
  }
}
class Nu {
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
    let l = new B(e.x, e.y, 1, 1), i = l.area === 0 ? [] : this.layout.getVisibleLayoutInfos(l);
    for (let n of i)
      if (n.rect.intersects(l)) return n.key;
    return null;
  }
  relayout(e = {}) {
    this.layout.update(e), this.contentSize = this.layout.getContentSize();
    let l = this.visibleRect, i = e.contentChanged ? 0 : l.x, n = e.contentChanged ? 0 : l.y;
    if (i = Math.max(0, Math.min(this.contentSize.width - l.width, i)), n = Math.max(0, Math.min(this.contentSize.height - l.height, n)), i !== l.x || n !== l.y) {
      let o = new B(i, n, l.width, l.height);
      this.delegate.setVisibleRect(o);
    } else this.updateSubviews();
  }
  getVisibleLayoutInfos() {
    let e = process.env.NODE_ENV === "test" && !process.env.VIRT_ON, l = e && typeof HTMLElement < "u" && Object.getOwnPropertyNames(HTMLElement.prototype).includes("clientWidth"), i = e && typeof HTMLElement < "u" && Object.getOwnPropertyNames(HTMLElement.prototype).includes("clientHeight"), n;
    e && !(l && i) ? n = new B(0, 0, this.contentSize.width, this.contentSize.height) : n = this._overscanManager.getOverscannedRect();
    let o = this.layout.getVisibleLayoutInfos(n), u = /* @__PURE__ */ new Map();
    for (let r of o) u.set(r.key, r);
    return u;
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
        let u = this.collection.getItem(n.key);
        o.content !== u && (o.content != null && this._renderedContent.delete(o.content), this._renderView(o));
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
    let l = this, i = !1, n = !1, o = !1, u = !1, r = !1, a = !1;
    return e.collection !== this.collection && (l.collection = e.collection, i = !0), (e.layout !== this.layout || this.layout.virtualizer !== this) && (this.layout && (this.layout.virtualizer = null), e.layout.virtualizer = this, l.layout = e.layout, i = !0), e.persistedKeys && !Fu(e.persistedKeys, this.persistedKeys) && (l.persistedKeys = e.persistedKeys, a = !0), this.visibleRect.equals(e.visibleRect) || (this._overscanManager.setVisibleRect(e.visibleRect), this.layout.shouldInvalidate(e.visibleRect, this.visibleRect) ? (n = !e.visibleRect.pointEquals(this.visibleRect), o = !e.visibleRect.sizeEquals(this.visibleRect), i = !0) : a = !0, l.visibleRect = e.visibleRect), e.invalidationContext !== this._invalidationContext && (e.invalidationContext && (o || (o = e.invalidationContext.sizeChanged || !1), n || (n = e.invalidationContext.offsetChanged || !1), u || (u = e.invalidationContext.itemSizeChanged || !1), r || (r = e.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && e.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(e.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions)), i || (i = u || o || n || r)), this._invalidationContext = e.invalidationContext), e.isScrolling !== this._isScrolling && (this._isScrolling = e.isScrolling, e.isScrolling || (a = !0)), i ? this.relayout({
      offsetChanged: n,
      sizeChanged: o,
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
    this.delegate = e.delegate, this.collection = e.collection, this.layout = e.layout, this.contentSize = new ne(), this.visibleRect = new B(), this.persistedKeys = /* @__PURE__ */ new Set(), this._visibleViews = /* @__PURE__ */ new Map(), this._renderedContent = /* @__PURE__ */ new WeakMap(), this._rootView = new Mu(this), this._isScrolling = !1, this._invalidationContext = {}, this._overscanManager = new Tu();
  }
}
const Vu = typeof document < "u" ? R.useLayoutEffect : () => {
};
function ju(t) {
  let [e, l] = v.useState(new B(0, 0, 0, 0)), [i, n] = v.useState(!1), [o, u] = v.useState({}), r = v.useRef(!1), [a] = v.useState(() => new Nu({
    collection: t.collection,
    layout: t.layout,
    delegate: {
      setVisibleRect(g) {
        l(g), r.current = !0;
      },
      // TODO: should changing these invalidate the entire cache?
      renderView: t.renderView,
      invalidate: u
    }
  }));
  Vu(() => {
    r.current && (r.current = !1, t.onVisibleRectChange(e));
  });
  let s = v.useMemo(() => t.layoutOptions != null ? {
    ...o,
    layoutOptions: t.layoutOptions
  } : o, [
    o,
    t.layoutOptions
  ]), d = a.render({
    layout: t.layout,
    collection: t.collection,
    persistedKeys: t.persistedKeys,
    layoutOptions: t.layoutOptions,
    visibleRect: e,
    invalidationContext: s,
    isScrolling: i
  }), c = a.contentSize, f = v.useCallback(() => {
    n(!0);
  }, []), p = v.useCallback(() => {
    n(!1);
  }, []);
  return v.useMemo(() => ({
    virtualizer: a,
    visibleViews: d,
    setVisibleRect: l,
    contentSize: c,
    isScrolling: i,
    startScrolling: f,
    endScrolling: p
  }), [
    a,
    d,
    l,
    c,
    i,
    f,
    p
  ]);
}
const ce = 48;
class Hu extends Au {
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
      let u = ((i = (l = this.rowHeight) !== null && l !== void 0 ? l : this.estimatedRowHeight) !== null && i !== void 0 ? i : ce) + this.gap;
      e.y = Math.floor(e.y / u) * u, e.height = Math.ceil(e.height / u) * u;
    }
    this.layoutIfNeeded(e);
    let n = [], o = (u) => {
      for (let r of u) this.isVisible(r, e) && (n.push(r.layoutInfo), r.children && o(r.children));
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
    return !this.layoutNodes.has(e) && this.requestedRect.area < this.contentSize.area && this.lastCollection ? (this.requestedRect = new B(0, 0, 1 / 0, 1 / 0), this.rootNodes = this.buildCollection(), this.requestedRect = new B(0, 0, this.contentSize.width, this.contentSize.height), !0) : !1;
  }
  isVisible(e, l) {
    return e.layoutInfo.rect.intersects(l) || e.layoutInfo.isSticky || e.layoutInfo.type === "header" || e.layoutInfo.type === "loader" || this.virtualizer.isPersistedKey(e.layoutInfo.key);
  }
  shouldInvalidateEverything(e) {
    let l = e.layoutOptions;
    var i, n, o, u, r;
    return e.sizeChanged || this.rowHeight !== ((i = l == null ? void 0 : l.rowHeight) !== null && i !== void 0 ? i : this.rowHeight) || this.headingHeight !== ((n = l == null ? void 0 : l.headingHeight) !== null && n !== void 0 ? n : this.headingHeight) || this.loaderHeight !== ((o = l == null ? void 0 : l.loaderHeight) !== null && o !== void 0 ? o : this.loaderHeight) || this.gap !== ((u = l == null ? void 0 : l.gap) !== null && u !== void 0 ? u : this.gap) || this.padding !== ((r = l == null ? void 0 : l.padding) !== null && r !== void 0 ? r : this.padding);
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
      for (let f of this.lastCollection.getKeys()) l.getItem(f) || this.layoutNodes.get(f) && this.layoutNodes.delete(f);
    this.lastCollection = l, this.invalidateEverything = !1, this.validRect = this.requestedRect.copy();
  }
  buildCollection(e = this.padding) {
    let l = this.virtualizer.collection, i = Lu(l, (s) => s.type !== "content"), n = i.filter((s) => s.type === "loader"), o = [], u = (l == null ? void 0 : l.size) === 0;
    u && (e = 0);
    for (let s of i) {
      var r, a;
      let d = ((a = (r = this.rowHeight) !== null && r !== void 0 ? r : this.estimatedRowHeight) !== null && a !== void 0 ? a : ce) + this.gap;
      if (s.type === "item" && e + d < this.requestedRect.y && !this.isValid(s, e)) {
        e += d;
        continue;
      }
      let c = this.buildChild(s, this.padding, e, null);
      if (e = c.layoutInfo.rect.maxY + this.gap, o.push(c), s.type === "loader") {
        let f = n.indexOf(s);
        n.splice(f, 1);
      }
      if ((s.type === "item" || s.type === "loader") && e > this.requestedRect.maxY) {
        let f = i.indexOf(s);
        for (let p of n) {
          let h = i.indexOf(p);
          e += (h - f - 1) * d;
          let g = this.buildChild(p, this.padding, e, null);
          o.push(g), e = g.layoutInfo.rect.maxY, f = h;
        }
        e += (i.length - f - 1) * d;
        break;
      }
    }
    return e -= this.gap, e += u ? 0 : this.padding, this.contentSize = new ne(this.virtualizer.visibleRect.width, e), o;
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
    let n = new B(l, i, this.padding, 0), o = new H("loader", e.key, n);
    n.width = this.virtualizer.contentSize.width - this.padding - l;
    var u, r, a;
    return n.height = e.props.isLoading ? (a = (r = (u = this.loaderHeight) !== null && u !== void 0 ? u : this.rowHeight) !== null && r !== void 0 ? r : this.estimatedRowHeight) !== null && a !== void 0 ? a : ce : 0, {
      layoutInfo: o,
      validRect: n.intersection(this.requestedRect)
    };
  }
  buildSection(e, l, i) {
    let n = this.virtualizer.collection, o = this.virtualizer.visibleRect.width - this.padding, u = new B(l, i, o - l, 0), r = new H(e.type, e.key, u), a = i, s = 0, d = [];
    for (let p of F(e, n)) {
      if (p.type === "content") continue;
      var c, f;
      let h = ((f = (c = this.rowHeight) !== null && c !== void 0 ? c : this.estimatedRowHeight) !== null && f !== void 0 ? f : ce) + this.gap;
      if (i + h < this.requestedRect.y && !this.isValid(e, i)) {
        i += h, s++;
        continue;
      }
      let g = this.buildChild(p, l, i, r.key);
      if (i = g.layoutInfo.rect.maxY + this.gap, d.push(g), i > this.requestedRect.maxY) {
        i += ([
          ...F(e, n)
        ].length - (d.length + s)) * h;
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
    let n = this.virtualizer.visibleRect.width - this.padding, o = this.headingHeight, u = !1;
    if (o == null) {
      let s = this.layoutNodes.get(e.key), d = s == null ? void 0 : s.layoutInfo;
      if (d) {
        let c = this.virtualizer.collection.getItem(e.key), f = this.lastCollection ? this.lastCollection.getItem(e.key) : null;
        o = d.rect.height, u = n !== d.rect.width || c !== f || d.estimatedSize;
      } else
        o = e.rendered ? this.estimatedHeadingHeight : 0, u = !0;
    }
    o == null && (o = ce);
    let r = new B(l, i, n - l, o), a = new H("header", e.key, r);
    return a.estimatedSize = u, {
      layoutInfo: a,
      children: [],
      validRect: a.rect.intersection(this.requestedRect),
      node: e
    };
  }
  buildItem(e, l, i) {
    let n = this.virtualizer.visibleRect.width - this.padding - l, o = this.rowHeight, u = !1;
    if (o == null) {
      let s = this.layoutNodes.get(e.key);
      s ? (o = s.layoutInfo.rect.height, u = n !== s.layoutInfo.rect.width || e !== s.node || s.layoutInfo.estimatedSize) : (o = this.estimatedRowHeight, u = !0);
    }
    o == null && (o = ce);
    let r = new B(l, i, n, o), a = new H(e.type, e.key, r);
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
    let n = this.virtualizer.collection, o = i.layoutInfo;
    if (o.estimatedSize = !1, o.rect.height !== l.height) {
      let u = o.copy();
      u.rect.height = l.height, i.layoutInfo = u, this.validRect.height = Math.min(this.validRect.height, o.rect.y - this.validRect.y), this.requestedRect.height += u.rect.height - o.rect.height, this.updateLayoutNode(e, o, u);
      let r = o.parentKey != null ? n.getItem(o.parentKey) : null;
      for (; r; )
        this.updateLayoutNode(r.key, o, u), r = r.parentKey != null ? n.getItem(r.parentKey) : null;
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
    let n = new B(e, Math.max(0, l - this.gap), 1, Math.max(1, this.gap * 2)), o = this.getVisibleLayoutInfos(n), u = null, r = 1 / 0;
    for (let c of o) {
      if (!c.rect.intersects(n)) continue;
      let f = Math.abs(c.rect.y - l), p = Math.abs(c.rect.maxY - l), h = Math.min(f, p);
      h < r && (r = h, u = c.key);
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
    if (e.dropPosition === "before") i = new B(l.rect.x, Math.max(0, l.rect.y - this.dropIndicatorThickness / 2), l.rect.width, this.dropIndicatorThickness);
    else if (e.dropPosition === "after") {
      let o = this.collection.getItem(e.key);
      if (o) {
        var n;
        let u = (n = o.level) !== null && n !== void 0 ? n : 0, r = this.collection.getKeyAfter(e.key);
        for (; r != null; ) {
          let a = this.collection.getItem(r);
          if (!a || a.level <= u) break;
          l = this.getLayoutInfo(r) || l, r = this.collection.getKeyAfter(r);
        }
      }
      i = new B(l.rect.x, l.rect.maxY - this.dropIndicatorThickness / 2, l.rect.width, this.dropIndicatorThickness);
    } else i = l.rect;
    return new H("dropIndicator", e.key + ":" + e.dropPosition, i);
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
    var u;
    this.loaderHeight = (u = e.loaderHeight) !== null && u !== void 0 ? u : null, this.dropIndicatorThickness = e.dropIndicatorThickness || 2, this.gap = e.gap || 0, this.padding = e.padding || 0, this.layoutNodes = /* @__PURE__ */ new Map(), this.rootNodes = [], this.lastCollection = null, this.invalidateEverything = !1, this.validRect = new B(), this.requestedRect = new B(), this.contentSize = new ne();
  }
}
function Lu(t, e) {
  const l = [];
  for (const i of t) e(i) && l.push(i);
  return l;
}
const Pt = 48;
class Wu extends Hu {
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
      let n = new $i({});
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
    return this.lastPersistedKeys = null, n.layoutInfo.rect.width = Math.max(i.layoutInfo.rect.width, n.layoutInfo.rect.width), this.contentSize = new ne(n.layoutInfo.rect.width + this.padding * 2, n.layoutInfo.rect.maxY + this.padding), [
      i,
      n
    ];
  }
  buildTableHeader() {
    var e;
    let l = this.virtualizer.collection, i = new B(this.padding, this.padding, 0, 0);
    var n;
    let o = new H("header", (n = (e = l.head) === null || e === void 0 ? void 0 : e.key) !== null && n !== void 0 ? n : "header", i);
    o.isSticky = !0, o.zIndex = 1;
    let u = this.padding, r = 0, a = [];
    for (let s of l.headerRows) {
      let d = this.buildChild(s, this.padding, u, o.key);
      d.layoutInfo.parentKey = o.key, u = d.layoutInfo.rect.maxY, r = Math.max(r, d.layoutInfo.rect.width), d.index = a.length, a.push(d);
    }
    return i.width = r, i.height = u - this.padding, {
      layoutInfo: o,
      children: a,
      validRect: o.rect,
      node: l.head
    };
  }
  buildHeaderRow(e, l, i) {
    let n = new B(l, i, 0, 0), o = new H("headerrow", e.key, n), u = 0, r = [];
    for (let a of F(e, this.virtualizer.collection)) {
      let s = this.buildChild(a, l, i, o.key);
      s.layoutInfo.parentKey = o.key, l = s.layoutInfo.rect.maxX, u = Math.max(u, s.layoutInfo.rect.height), s.index = r.length, r.push(s);
    }
    for (let [a, s] of r.entries()) s.layoutInfo.zIndex = r.length - a + 1;
    return this.setChildHeights(r, u), n.height = u, n.width = l - n.x, {
      layoutInfo: o,
      children: r,
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
    let u = (o = e.colIndex) !== null && o !== void 0 ? o : e.index, r = 0;
    for (let s = u; s < u + n; s++) {
      let d = l.columns[s];
      var a;
      (d == null ? void 0 : d.key) != null && (r += (a = this.columnWidths.get(d.key)) !== null && a !== void 0 ? a : 0);
    }
    return r;
  }
  getEstimatedHeight(e, l, i, n) {
    let o = !1;
    if (i == null) {
      let u = this.layoutNodes.get(e.key);
      u ? (i = u.layoutInfo.rect.height, o = e !== u.node || l !== u.layoutInfo.rect.width || u.layoutInfo.estimatedSize) : (i = n ?? Pt, o = !0);
    }
    return {
      height: i,
      isEstimated: o
    };
  }
  getEstimatedRowHeight() {
    var e, l;
    return (l = (e = this.rowHeight) !== null && e !== void 0 ? e : this.estimatedRowHeight) !== null && l !== void 0 ? l : Pt;
  }
  buildColumn(e, l, i) {
    let n = this.getRenderedColumnWidth(e);
    var o, u;
    let { height: r, isEstimated: a } = this.getEstimatedHeight(e, n, (o = this.headingHeight) !== null && o !== void 0 ? o : this.rowHeight, (u = this.estimatedHeadingHeight) !== null && u !== void 0 ? u : this.estimatedRowHeight), s = new B(l, i, n, r), d = new H(e.type, e.key, s);
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
    let l = this.virtualizer.collection, i = new B(this.padding, e, 0, 0), n = new H("rowgroup", l.body.key, i), o = e, u = 0, r = 0, a = [], s = this.getEstimatedRowHeight() + this.gap, d = F(l.body, l);
    for (let p of d) {
      if (e + s < this.requestedRect.y && !this.isValid(p, e)) {
        e += s, u++;
        continue;
      }
      let h = this.buildChild(p, this.padding, e, n.key);
      if (h.layoutInfo.parentKey = n.key, h.index = a.length, e = h.layoutInfo.rect.maxY + this.gap, r = Math.max(r, h.layoutInfo.rect.width), a.push(h), e > this.requestedRect.maxY) {
        var c;
        let g = l.size - (a.length + u), m = q(d);
        if (e += g * s, (m == null ? void 0 : m.type) === "loader" && ((c = a.at(-1)) === null || c === void 0 ? void 0 : c.layoutInfo.type) !== "loader") {
          let b = this.buildChild(m, this.padding, e, n.key);
          b.layoutInfo.parentKey = n.key, b.index = l.size, r = Math.max(r, b.layoutInfo.rect.width), a.push(b), e = b.layoutInfo.rect.maxY;
        }
        break;
      }
    }
    return (l == null ? void 0 : l.size) === 0 ? e = this.virtualizer.visibleRect.maxY : e -= this.gap, i.width = r, i.height = e - o, {
      layoutInfo: n,
      children: a,
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
    let o = this.virtualizer.collection, u = new B(l, i, 0, 0), r = new H("row", e.key, u), a = [], s = 0;
    for (let c of F(e, o)) if (c.type === "cell")
      if (l > this.requestedRect.maxX) {
        let f = this.layoutNodes.get(c.key);
        if (f)
          f.layoutInfo.rect.x = l, l += f.layoutInfo.rect.width;
        else break;
      } else {
        let f = this.buildChild(c, l, i, r.key);
        l = f.layoutInfo.rect.maxX, s = Math.max(s, f.layoutInfo.rect.height), f.index = a.length, a.push(f);
      }
    this.setChildHeights(a, s);
    var d;
    return u.width = this.layoutNodes.get((d = (n = o.head) === null || n === void 0 ? void 0 : n.key) !== null && d !== void 0 ? d : "header").layoutInfo.rect.width, u.height = s, {
      layoutInfo: r,
      children: a,
      validRect: u.intersection(this.requestedRect),
      node: e
    };
  }
  buildCell(e, l, i) {
    let n = this.getRenderedColumnWidth(e), { height: o, isEstimated: u } = this.getEstimatedHeight(e, n, this.rowHeight, this.estimatedRowHeight), r = new B(l, i, n, o), a = new H(e.type, e.key, r);
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
          for (let n of l.children)
            e.push(n.layoutInfo), this.addVisibleLayoutInfos(e, n, i);
          break;
        case "rowgroup": {
          let n = this.binarySearch(l.children, i.topLeft, "y"), o = this.binarySearch(l.children, i.bottomRight, "y"), u = this.persistedIndices.get(l.layoutInfo.key), r = 0;
          for (; u && r < u.length && u[r] < n; ) {
            let s = u[r];
            s < l.children.length && (e.push(l.children[s].layoutInfo), this.addVisibleLayoutInfos(e, l.children[s], i)), r++;
          }
          for (let s = n; s <= o; s++) {
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
          let n = this.binarySearch(l.children, i.topLeft, "x"), o = this.binarySearch(l.children, i.topRight, "x"), u = 0, r = this.persistedIndices.get(l.layoutInfo.key) || this.stickyColumnIndices;
          for (; u < r.length && r[u] < n; ) {
            let a = r[u];
            a < l.children.length && e.push(l.children[a].layoutInfo), u++;
          }
          for (let a = n; a <= o; a++) {
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
    let n = 0, o = e.length - 1;
    for (; n <= o; ) {
      let u = n + o >> 1, r = e[u];
      if (i === "x" && r.layoutInfo.rect.maxX <= l.x || i === "y" && r.layoutInfo.rect.maxY <= l.y) n = u + 1;
      else if (i === "x" && r.layoutInfo.rect.x > l.x || i === "y" && r.layoutInfo.rect.y > l.y) o = u - 1;
      else return u;
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
          let u = this.virtualizer.collection.getItem(o.key), r = this.persistedIndices.get(o.parentKey);
          r || (r = (u == null ? void 0 : u.type) === "cell" || (u == null ? void 0 : u.type) === "column" ? [
            ...this.stickyColumnIndices
          ] : [], this.persistedIndices.set(o.parentKey, r));
          let a = (l = this.layoutNodes.get(o.key)) === null || l === void 0 ? void 0 : l.index;
          a != null && !r.includes(a) && r.push(a), o = (i = this.layoutNodes.get(o.parentKey)) === null || i === void 0 ? void 0 : i.layoutInfo;
        }
      }
      for (let n of this.persistedIndices.values()) n.sort((o, u) => o - u);
    }
  }
  getDropTargetFromPoint(e, l, i) {
    e += this.virtualizer.visibleRect.x, l += this.virtualizer.visibleRect.y;
    let n = new B(e, Math.max(0, l - this.gap), 1, Math.max(1, this.gap * 2)), o = this.getVisibleLayoutInfos(n), u = null, r = 1 / 0;
    for (let c of o) {
      if (c.type !== "row" || !c.rect.intersects(n)) continue;
      let f = Math.abs(c.rect.y - l), p = Math.abs(c.rect.maxY - l), h = Math.min(f, p);
      h < r && (r = h, u = c.key);
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
class Ou extends Wu {
  // Invalidate the layout whenever the column widths change.
  useLayoutOptions() {
    let e = v.useContext(Ne);
    return v.useMemo(() => ({
      columnWidths: e == null ? void 0 : e.columnWidths
    }), [
      e == null ? void 0 : e.columnWidths
    ]);
  }
}
let de = null;
function Uu(t = !1) {
  if (de === null || t) {
    const e = document.createElement("div"), l = e.style;
    l.width = "50px", l.height = "50px", l.overflow = "scroll", l.direction = "rtl";
    const i = document.createElement("div"), n = i.style;
    return n.width = "100px", n.height = "100px", e.appendChild(i), document.body.appendChild(e), e.scrollLeft > 0 ? de = "positive-descending" : (e.scrollLeft = 1, e.scrollLeft === 0 ? de = "negative" : de = "positive-ascending"), document.body.removeChild(e), de;
  }
  return de;
}
function Yu(t, e) {
  let { scrollLeft: l } = t;
  if (e === "rtl") {
    let { scrollWidth: i, clientWidth: n } = t;
    switch (Uu()) {
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
function qu(t, e) {
  let { contentSize: l, onVisibleRectChange: i, innerStyle: n, onScrollStart: o, onScrollEnd: u, scrollDirection: r = "both", ...a } = t, s = v.useRef({
    scrollTop: 0,
    scrollLeft: 0,
    scrollEndTime: 0,
    scrollTimeout: null,
    width: 0,
    height: 0,
    isScrolling: !1
  }).current, { direction: d } = Z(), [c, f] = v.useState(!1), p = v.useCallback((k) => {
    J(k) === k.currentTarget && (t.onScroll && t.onScroll(k), je.flushSync(() => {
      let D = k.currentTarget.scrollTop, I = Yu(k.currentTarget, d);
      s.scrollTop = Math.max(0, Math.min(D, l.height - s.height)), s.scrollLeft = Math.max(0, Math.min(I, l.width - s.width)), i(new B(s.scrollLeft, s.scrollTop, s.width, s.height)), s.isScrolling || (s.isScrolling = !0, f(!0), window.dispatchEvent(new Event("tk.disconnect-observer")), o && o());
      let E = Date.now();
      s.scrollEndTime <= E + 50 && (s.scrollEndTime = E + 300, s.scrollTimeout != null && clearTimeout(s.scrollTimeout), s.scrollTimeout = setTimeout(() => {
        s.isScrolling = !1, f(!1), s.scrollTimeout = null, window.dispatchEvent(new Event("tk.connect-observer")), u && u();
      }, 300));
    }));
  }, [
    t,
    d,
    s,
    l,
    i,
    o,
    u
  ]);
  vo(e, "scroll", p), v.useEffect(() => () => {
    s.scrollTimeout != null && clearTimeout(s.scrollTimeout), s.isScrolling && window.dispatchEvent(new Event("tk.connect-observer"));
  }, []);
  let h = v.useRef(!1), g = v.useCallback((k) => {
    let D = e.current;
    if (!D || h.current) return;
    h.current = !0;
    let I = process.env.NODE_ENV === "test" && !process.env.VIRT_ON, E = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientWidth"), M = Object.getOwnPropertyNames(window.HTMLElement.prototype).includes("clientHeight"), z = D.clientWidth, N = D.clientHeight, V = I && !E ? 1 / 0 : z, O = I && !M ? 1 / 0 : N;
    (s.width !== V || s.height !== O) && (s.width = V, s.height = O, k(() => {
      i(new B(s.scrollLeft, s.scrollTop, V, O));
    }), (!I && z !== D.clientWidth || N !== D.clientHeight) && (s.width = D.clientWidth, s.height = D.clientHeight, k(() => {
      i(new B(s.scrollLeft, s.scrollTop, s.width, s.height));
    }))), h.current = !1;
  }, [
    e,
    s,
    i
  ]), m = Ee(g), b = v.useRef(null), [w, $] = v.useState({});
  ie(() => {
    if (!h.current && (b.current == null || !l.equals(b.current)))
      if (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") {
        $({}), b.current = l;
        return;
      } else queueMicrotask(() => m(je.flushSync));
    b.current = l;
  }), ie(() => {
    m((k) => k());
  }, [
    w
  ]);
  let y = v.useCallback(() => {
    g(je.flushSync);
  }, [
    g
  ]);
  nt({
    ref: e,
    box: "border-box",
    onResize: y
  });
  let x = {
    // Reset padding so that relative positioning works correctly. Padding will be done in JS layout.
    padding: 0,
    ...a.style
  };
  return r === "horizontal" ? (x.overflowX = "auto", x.overflowY = "hidden") : r === "vertical" || l.width === s.width ? (x.overflowY = "auto", x.overflowX = "hidden") : x.overflow = "auto", n = {
    width: Number.isFinite(l.width) ? l.width : void 0,
    height: Number.isFinite(l.height) ? l.height : void 0,
    pointerEvents: c ? "none" : "auto",
    position: "relative",
    ...n
  }, {
    isScrolling: c,
    scrollViewProps: {
      ...a,
      style: x
    },
    contentProps: {
      role: "presentation",
      style: n
    }
  };
}
function Zu(t) {
  let { layoutInfo: e, virtualizer: l, ref: i } = t, n = e == null ? void 0 : e.key, o = v.useCallback(() => {
    if (n != null && i.current) {
      let u = Xu(i.current);
      l.updateItemSize(n, u);
    }
  }, [
    l,
    n,
    i
  ]);
  return ie(() => {
    e != null && e.estimatedSize && o();
  }), {
    updateSize: o
  };
}
function Xu(t) {
  let e = t.style.height;
  t.style.height = "";
  let l = new ne(t.scrollWidth, t.scrollHeight);
  return t.style.height = e, l;
}
function Gu(t) {
  let { style: e, className: l, layoutInfo: i, virtualizer: n, parent: o, children: u } = t, { direction: r } = Z(), a = v.useRef(null);
  return Zu({
    layoutInfo: i,
    virtualizer: n,
    ref: a
  }), /* @__PURE__ */ R.createElement("div", {
    role: "presentation",
    ref: a,
    className: l,
    style: {
      ...Ju(i, r, o),
      ...e
    }
  }, u);
}
let Mt = /* @__PURE__ */ new WeakMap();
function Ju(t, e, l) {
  let i = e === "rtl" ? "right" : "left", n = Mt.get(t);
  if (n && n[i] != null) {
    if (!l) return n;
    let a = t.rect.y - l.rect.y, s = t.rect.x - l.rect.x;
    if (n.top === a && n[i] === s) return n;
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
  Object.entries(o).forEach(([a, s]) => {
    Number.isFinite(s) || (o[a] = void 0);
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
    ...o
  };
  return Mt.set(t, r), r;
}
var Qu = Object.defineProperty, _u = (t, e) => Qu(t, "name", { value: e, configurable: !0 });
const er = _u((t) => C.jsxs(tr, { ...t, children: [C.jsx(lr, {}), C.jsx(bo, {})] }), "DropdownButton"), tr = A(ze)`
    color: ${(t) => t.theme.colorsTextPrimaryDefault};
    background-color: ${(t) => t.theme.colorsBackgroundInputBase};

    border-width: ${P.borderWidthMd};
    border-style: solid;
    border-radius: ${P.borderRadiusXs};

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

    padding: ${mo} ${P.spacing4};
    display: flex;
    align-items: normal;
    gap: ${P.spacing8};
    width: 100%;
`, lr = A(ku)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    // specific overwrite for this value to make sure the default Sass stylesheet isn't being used ("button span" selector)
    // (& targets the classname for this component specifically in styled-components)
    // Can be removed once the global Sass stylesheet is removed
    & {
        line-height: ${P.lineHeightMd};
    }

    flex-grow: 1;
    text-align: left;
`;
var ir = Object.defineProperty, nr = (t, e) => ir(t, "name", { value: e, configurable: !0 });
function or({ children: t, items: e, label: l, description: i, ...n }) {
  const { isInvalid: o, validate: u, validationError: r } = go({ value: n.value ?? void 0, isInvalid: n.isInvalid, validate: n.validate });
  return C.jsx(ur, { ...n, isInvalid: o, validate: u, children: C.jsxs(yo, { label: l, description: i, realtimeValidationError: r, children: [C.jsx(rr, {}), C.jsx($o, { children: C.jsx(Fo, { items: e, children: t }) })] }) });
}
nr(or, "Dropdown");
const he = A(xu)``, ur = he, rr = A(er)`
    // To avoid the button getting the border if it happens to be nested in something bigger with "data-invalid" set on it,
    // we extend the styling here a bit to directly target it only if inside a data-invalid Dropdown control.
    ${he}[data-invalid] & {
        border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
    }
`;
var sr = Object.defineProperty, bt = (t, e) => sr(t, "name", { value: e, configurable: !0 });
const Vs = bt(({ icon: t, label: e, isActive: l, onDragStart: i, tooltip: n, ...o }) => {
  const u = v.useRef(null);
  v.useEffect(() => {
    if (!u.current || !i) return;
    const a = u.current;
    return a.draggable = !0, a.addEventListener("dragstart", i), () => {
      a.removeEventListener("dragstart", i);
    };
  }, [i]);
  const r = C.jsxs(Be, { ...o, $isActive: l, ref: u, children: [t && C.jsx(ar, { icon: t }), e && C.jsx(hr, { children: e })] });
  return n ? C.jsxs(wo, { children: [r, C.jsx(Co, { placement: "bottom", children: n })] }) : r;
}, "ToolbarButton"), ar = bt(({ icon: t }) => typeof t == "string" ? C.jsx(dr, { src: t, "aria-hidden": !0 }) : t, "ToolbarButtonIcon"), cr = bt((t) => xo`
        height: 20px;
        padding: 1px;
        border: 1px solid ${({ theme: e }) => t ? e.colorsBorderActive : "transparent"};
        border-radius: 4px;
        display: flex;
        align-items: center;
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
    `, "baseToolbarButtonStyle"), Be = A(Do)`
    ${({ $isActive: t }) => cr(t)}
`, dr = ko, hr = A.span`
    font-size: 12px;
    line-height: 16px;
    margin-right: 1px;
`;
var fr = Object.defineProperty, pr = (t, e) => fr(t, "name", { value: e, configurable: !0 });
const vr = pr(({ className: t, children: e, "aria-label": l }) => C.jsx(mr, { role: "toolbar", "aria-label": l, className: t, children: e }), "Toolbar"), mr = A.div`
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

    ${Xt}, ${he}, ${Oe}, ${ze}, ${Be} {
        line-height: 14px; // no design system value for this. Only 13px, 15px and 16px
        padding: ${P.spacing2} 1px;
    }
    ${Be}:has(img) {
        padding: 1px; // Icons have a height of 16px (vs text having a line-height of 16px), so they need less vertical padding to get to a 20px height button.
    }
    ${he}, ${Oe} {
        // Dropdown and Combobox are already high enough (20px); they don't need vertical padding
        padding: 0 1px;
    }
    ${he} ${ze} {
        // Since the chevron-down button inside the dropdown is a button, and it has a border (for validation),
        //we need to make the vertical padding smaller (1px vs 2px) to make it fit inside the toolbar
        padding: 1px;
    }
`, gt = A.div`
    display: flex;
    gap: 8px;
    align-items: center;

    &:only-child {
        grid-column: left/right; // If no siblings, use entire toolbar.
    }
`, br = A(gt)`
    grid-column: left;
    justify-content: start;
`;
A(gt)`
    grid-column: center;
    justify-content: center;
`;
const gr = A(gt)`
    grid-column: right;
    justify-content: end;
`;
A.div`
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
var yr = Object.defineProperty, $r = (t, e) => yr(t, "name", { value: e, configurable: !0 });
function qe(t) {
  return t != null;
}
$r(qe, "isDefined");
var xr = Object.defineProperty, wr = (t, e) => xr(t, "name", { value: e, configurable: !0 }), sn;
((t) => {
  function e(l, i) {
    return !qe(l) && !qe(i) || l === i;
  }
  t.same = e, wr(e, "same");
})(sn || (sn = {}));
var Cr = Object.defineProperty, xe = (t, e) => Cr(t, "name", { value: e, configurable: !0 }), kr;
((t) => {
  function e(l, i) {
    return yt(l, { direction: i });
  }
  t.by = e, xe(e, "by");
})(kr || (kr = {}));
function Ze(t, e) {
  return typeof e == "function" ? e(t) : t[e];
}
xe(Ze, "getValue");
function yt(t, e) {
  const l = xe((i, n) => {
    var a;
    const o = ((a = e == null ? void 0 : e.previous) == null ? void 0 : a.call(e, i, n)) ?? 0;
    if (o !== 0) return o;
    const u = Ze(i, t), r = Ze(n, t);
    return $t(u, r) * ((e == null ? void 0 : e.direction) === "descending" ? -1 : 1);
  }, "sort");
  return l.thenBy = (i, n) => yt(i, { direction: n, previous: l }), l;
}
xe(yt, "sortFunction");
function $t(t, e) {
  return sn.same(t, e) ? 0 : t == null ? 1 : e == null ? -1 : typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "number" && typeof e == "number" ? t < e ? -1 : 1 : typeof t == "boolean" && typeof e == "boolean" ? t ? 1 : -1 : t instanceof Date && e instanceof Date ? t.getTime() - e.getTime() : 0;
}
xe($t, "simpleSortFunction");
var Dr = Object.defineProperty, Er = (t, e) => Dr(t, "name", { value: e, configurable: !0 });
function an({ items: t, sortDescriptor: { column: e, direction: l } }) {
  return { items: t.sort((i, n) => {
    if (!e || !l) return 0;
    const o = e, u = $t(i[o], n[o]);
    return l === "ascending" ? u : -u;
  }) };
}
Er(an, "asyncListSortFunction");
var Sr = Object.defineProperty, zr = (t, e) => Sr(t, "name", { value: e, configurable: !0 });
function L(t) {
  const e = v.useContext(t);
  if (!e) throw new Error(`Context ${t.displayName ?? ""} is not provided. Please provide it${t.displayName ? ` using <${t.displayName}.Provider>` : ""}.`);
  return e;
}
zr(L, "useContextOrThrow");
var Br = Object.defineProperty, Rr = (t, e) => Br(t, "name", { value: e, configurable: !0 });
const cn = Rr(({ children: t, title: e }) => C.jsx(Ir, { role: "presentation", title: e, children: t }), "ContentWrapper"), Ir = A.div`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    -webkit-user-select: none; // Safari
    user-select: none; // Other browsers
`, re = v.createContext(null), dn = 6, De = 29;
var Ar = Object.defineProperty, Pr = (t, e) => Ar(t, "name", { value: e, configurable: !0 });
function xt(t) {
  return t == null || t === "" ? " " : t;
}
Pr(xt, "ensureContent");
var Mr = Object.defineProperty, Kr = (t, e) => Mr(t, "name", { value: e, configurable: !0 }), te;
let Fr = (te = class extends _ {
}, Kr(te, "TableCellNode"), j(te, "type", "cell"), te);
const Kt = ut(Fr, ({ children: t, ...e }, l, i) => {
  const n = X(l), o = L(re);
  i.column = o.collection.columns[i.index];
  const { gridCellProps: u } = ou({ node: i, isVirtualized: !0 }, o, n), r = ue({ ...e, defaultClassName: "react-aria-Cell", values: { id: i.key } }), a = W(e, { global: !0 });
  return C.jsx(Tr, { ...T(a, r, u), ref: n, children: C.jsx(cn, { title: e.title, children: xt(t) }) });
}), Tr = A.div`
    padding: ${dn}px ${P.spacing4};

    &:has(${Xt}, ${he}, ${Oe}, ${ze}) {
        padding: ${P.spacing2} ${P.spacing4};
    }
    // XXX: remove this when ToolbarButton has been replaced by a ghost button (with different sizes/paddings per context)
    &:has(${Be}) {
        padding: ${P.spacing4};
    }

    border-bottom: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${P.borderWidthMd};
    [role="row"] > [role="presentation"]:not(:last-child) & {
        border-right: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${P.borderWidthMd};
    }
`, Nr = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%204H2.94989C2.60489%204%202.38989%204.31%202.55989%204.56L7.58489%2011.79C7.78489%2012.075%208.21989%2012.075%208.41489%2011.79L13.4399%204.56C13.6149%204.31%2013.3949%204%2013.0499%204Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Vr = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%204H2.94989C2.60489%204%202.38989%204.31%202.55989%204.56L7.58489%2011.79C7.78489%2012.075%208.21989%2012.075%208.41489%2011.79L13.4399%204.56C13.6149%204.31%2013.3949%204%2013.0499%204Z'%20fill='%23535965'/%3e%3c/svg%3e";
var jr = Object.defineProperty, Hr = (t, e) => jr(t, "name", { value: e, configurable: !0 });
const Lr = Hr((t) => C.jsx(Gt, { light: Vr, dark: Nr, ...t }), "MoveDownIcon"), Wr = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%2012H2.94989C2.60489%2012%202.38989%2011.69%202.55989%2011.44L7.58489%204.21497C7.78489%203.92997%208.21989%203.92997%208.41489%204.21497L13.4399%2011.445C13.6149%2011.695%2013.3949%2012.005%2013.0499%2012.005V12Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Or = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.0499%2012H2.94989C2.60489%2012%202.38989%2011.69%202.55989%2011.44L7.58489%204.21497C7.78489%203.92997%208.21989%203.92997%208.41489%204.21497L13.4399%2011.445C13.6149%2011.695%2013.3949%2012.005%2013.0499%2012.005V12Z'%20fill='%23535965'/%3e%3c/svg%3e";
var Ur = Object.defineProperty, Yr = (t, e) => Ur(t, "name", { value: e, configurable: !0 });
const qr = Yr((t) => C.jsx(Gt, { light: Or, dark: Wr, ...t }), "MoveUpIcon");
var Zr = Object.defineProperty, Xr = (t, e) => Zr(t, "name", { value: e, configurable: !0 });
const Ve = v.createContext(null), Gr = v.forwardRef(Xr(function(t, e) {
  const l = X(e), i = v.useRef(null), n = v.useRef(null), [o, u] = v.useState(0);
  ie(() => {
    let s = i.current;
    for (; s && s !== l.current && !Eo(s); ) s = s.parentElement;
    n.current = s;
  }, [l]);
  const r = v.useCallback(() => {
    var s;
    u(((s = n.current) == null ? void 0 : s.clientWidth) ?? 0);
  }, []);
  ie(r, [r]), nt({ ref: n, box: "border-box", onResize: r });
  const a = v.useMemo(() => ({ tableRef: i, scrollRef: n, tableWidth: o, useTableColumnResizeState: pu, refreshTableWidth: r, onResizeStart: t.onResizeStart, onResize: t.onResize, onResizeEnd: t.onResizeEnd }), [i, o, r, t.onResizeStart, t.onResize, t.onResizeEnd]);
  return C.jsx("div", { ...W(t, { global: !0 }), ref: l, className: t.className || "react-aria-ResizableTableContainer", style: t.style, onScroll: t.onScroll, children: C.jsx(Ve.Provider, { value: a, children: t.children }) });
}, "ResizableTableContainer"));
var Jr = Object.defineProperty, Qr = (t, e) => Jr(t, "name", { value: e, configurable: !0 });
const hn = v.createContext(null), _r = v.forwardRef(Qr(function(t, e) {
  const l = v.useContext(Ne);
  if (!l) throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  const { onResizeStart: i, onResize: n, onResizeEnd: o } = v.useContext(Ve), { column: u, triggerRef: r } = v.useContext(hn), a = v.useRef(null), { resizerProps: s, inputProps: d, isResizing: c } = ru({ column: u, "aria-label": t["aria-label"] || "tableResizer", onResizeStart: i, onResize: n, onResizeEnd: o, triggerRef: r }, l, a), { focusProps: f, isFocused: p, isFocusVisible: h } = pe(), { hoverProps: g, isHovered: m } = st(t), b = l.getColumnMinWidth(u.key) >= l.getColumnWidth(u.key), w = l.getColumnMaxWidth(u.key) <= l.getColumnWidth(u.key), { direction: $ } = Z();
  let y = "both";
  b ? y = $ === "rtl" ? "right" : "left" : w ? y = $ === "rtl" ? "left" : "right" : y = "both";
  const x = X(e), [k, D] = v.useState("");
  v.useEffect(() => {
    if (!x.current) return;
    const V = window.getComputedStyle(x.current);
    D(V.cursor);
  }, [x, y]);
  const I = ue({ ...t, defaultClassName: "react-aria-ColumnResizer", values: { isFocused: p, isFocusVisible: h, isResizing: c, isHovered: m, resizableDirection: y } }), [E, M] = v.useState(!1), z = v.useCallback((V) => {
    V.pointerType === "mouse" && M(!0);
  }, []);
  !c && E && M(!1);
  const N = W(t, { global: !0 });
  return C.jsxs(es, { ref: x, role: "presentation", ...T(N, I, s, { onPointerDown: z }, g), "data-hovered": m || void 0, "data-focused": p || void 0, "data-focus-visible": h || void 0, "data-resizing": c || void 0, "data-resizable-direction": y, children: [I.children, C.jsx("input", { ref: a, ...T(d, f) }), c && E && So.createPortal(C.jsx("div", { style: { position: "fixed", top: 0, left: 0, bottom: 0, right: 0, cursor: k } }), document.body)] });
}, "ColumnResizer")), es = A.div`
    z-index: 3; // on top of sticky header and sticky first column

    position: absolute;
    inset: 0 -${P.spacing8} 0 auto;
    // The Virtualizer adds "contain: size layout style" on a role="presentation" div causing the resizer to not be hoverable outside of this header
    // So in reality this spacing is 8px
    width: ${P.spacing16};

    [role="row"][aria-rowindex="1"] > [role="presentation"]:last-child [role="column"] & {
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
var ts = Object.defineProperty, ls = (t, e) => ts(t, "name", { value: e, configurable: !0 });
const Ae = class Ae extends Zt {
};
ls(Ae, "TableBodyNode"), j(Ae, "type", "tablebody");
let Re = Ae;
const is = at(Re, (t, e) => {
  const l = X(e), { CollectionBranch: i } = L(me), { collection: n } = L(re), { rowGroupProps: o } = bi(), { ...u } = t, r = W(u, { global: !0 });
  return C.jsx(ns, { ...T(r, o), ref: l, children: C.jsx(i, { collection: n, parent: n.body }) });
}), ns = A.div``;
var os = Object.defineProperty, us = (t, e) => os(t, "name", { value: e, configurable: !0 });
function fn({ item: t }) {
  const e = v.useRef(null), l = L(re), { CollectionBranch: i } = L(me), { rowProps: n } = nu({ node: t }, l);
  return C.jsx(rs, { ...n, ref: e, children: C.jsx(i, { collection: l.collection, parent: t }) });
}
us(fn, "TableHeaderRow");
const rs = A.div``;
var ss = Object.defineProperty, as = (t, e) => ss(t, "name", { value: e, configurable: !0 }), le;
let pn = (le = class extends _ {
}, as(le, "TableHeaderNode"), j(le, "type", "tableheader"), le);
const cs = at(pn, (t, e) => {
  const l = X(e), { collection: i } = L(re), { rowGroupProps: n } = bi(), { ...o } = t, u = W(o, { global: !0 });
  return C.jsx(ds, { ...T(u, n), ref: l, children: Jt({ items: i.headerRows, children: v.useCallback((r) => {
    if (r.type !== "headerrow") throw new Error("Unsupported node type in TableHeader: " + r.type);
    return C.jsx(fn, { item: r });
  }, []) }) });
}, (t) => C.jsx(ct, { dependencies: t.dependencies, items: t.columns, children: t.children })), ds = A.div``;
var hs = Object.defineProperty, oe = (t, e) => hs(t, "name", { value: e, configurable: !0 });
const vn = { CollectionRoot({ collection: t }) {
  return Xe(t, null);
}, CollectionBranch({ collection: t, parent: e }) {
  return Xe(t, e);
} };
function Xe(t, e) {
  var l;
  return Jt({ items: e ? (l = t.getChildren) == null ? void 0 : l.call(t, e.key) : t });
}
oe(Xe, "useCollectionRender");
const me = v.createContext(vn), kt = class kt extends zo {
  constructor() {
    super(...arguments);
    j(this, "headerRows", []);
    j(this, "columns", []);
    j(this, "rows", []);
    j(this, "rowHeaderColumnKeys", /* @__PURE__ */ new Set());
    j(this, "head", new pn(-1));
    j(this, "body", new Re(-2));
    j(this, "columnsDirty", !0);
  }
  addNode(l) {
    super.addNode(l), this.columnsDirty || (this.columnsDirty = l.type === "column"), gn(l) && (this.head = l), yn(l) && (this.body = l);
  }
  commit(l, i) {
    this.updateColumns(), this.updateRows(), super.commit(l, i);
  }
  updateRows() {
    if (this.rows = [], this.body) for (const l of this.getChildren(this.body.key)) {
      if (!bn(l)) throw new Error("Table body can only contain row nodes.");
      const i = l.lastChildKey;
      if (i !== null) {
        const n = this.getItem(i), o = (n.colIndex ?? n.index) + (n.colSpan ?? 1);
        if (o !== this.columns.length) throw new Error(`Cell count must match column count. Found ${o} cells and ${this.columns.length} columns.`);
      }
      this.rows.push(l);
    }
  }
  updateColumns() {
    if (!this.columnsDirty) return;
    this.rowHeaderColumnKeys = /* @__PURE__ */ new Set(), this.columns = [];
    const l = /* @__PURE__ */ new Map(), i = oe((n) => {
      if (mn(n)) {
        if (l.set(n.key, n), n.hasChildNodes) throw new Error("Column nodes cannot have child columns.");
        this.columns.push(n), n.props.isRowHeader && this.rowHeaderColumnKeys.add(n.key);
      }
      for (const o of this.getChildren(n.key)) i(o);
    }, "visit");
    if (this.head) for (const n of this.getChildren(this.head.key)) i(n);
    if (this.headerRows = wi(l, this.columns), this.columnsDirty = !1, this.rowHeaderColumnKeys.size === 0 && this.columns.length > 0) throw new Error("A table must have at least one Column with the isRowHeader prop set to true");
  }
  get columnCount() {
    return this.columns.length;
  }
  *[Symbol.iterator]() {
    this.head.key !== -1 && (yield this.head, yield this.body);
  }
  get size() {
    return this.rows.length;
  }
  getFirstKey() {
    return this.body.firstChildKey;
  }
  getLastKey() {
    return this.body.lastChildKey;
  }
  getKeyAfter(l) {
    const i = this.getItem(l);
    return (i == null ? void 0 : i.type) === "column" ? i.nextKey ?? null : super.getKeyAfter(l);
  }
  getKeyBefore(l) {
    var o;
    const i = this.getItem(l);
    if ((i == null ? void 0 : i.type) === "column") return i.prevKey ?? null;
    const n = super.getKeyBefore(l);
    return n != null && ((o = this.getItem(n)) == null ? void 0 : o.type) === "tablebody" ? null : n;
  }
  getChildren(l) {
    if (!this.getItem(l)) {
      for (const i of this.headerRows) if (i.key === l) return i.childNodes;
    }
    return super.getChildren(l);
  }
  clone() {
    const l = super.clone();
    return l.headerRows = this.headerRows, l.columns = this.columns, l.rowHeaderColumnKeys = this.rowHeaderColumnKeys, l.head = this.head, l.body = this.body, l;
  }
  getTextValue(l) {
    const i = this.getItem(l);
    if (!i) return "";
    if (i.textValue) return i.textValue;
    const n = this.rowHeaderColumnKeys, o = [];
    for (const u of this.getChildren(l)) {
      const r = this.columns[u.index];
      if (n.has(r.key) && u.textValue && o.push(u.textValue), o.length === n.size) break;
    }
    return o.join(" ");
  }
};
oe(kt, "TableCollection");
let Ge = kt;
function mn(t) {
  return t.type === "column";
}
oe(mn, "isColumnNode");
function bn(t) {
  return t.type === "item";
}
oe(bn, "isRowNode");
function gn(t) {
  return t.type === "tableheader";
}
oe(gn, "isTableHeaderNode");
function yn(t) {
  return t.type === "tablebody";
}
oe(yn, "isTableBodyNode");
var fs = Object.defineProperty, Je = (t, e) => fs(t, "name", { value: e, configurable: !0 });
const Pe = class Pe extends _ {
};
Je(Pe, "TableColumnNode"), j(Pe, "type", "column");
let Qe = Pe;
const ps = ut(Qe, ({ children: t, ...e }, l, i) => {
  var k, D, I;
  const { title: n, allowsSorting: o = !1, allowsResizing: u = !0, ...r } = e, a = X(l), s = L(re), { columnHeaderProps: d, isPressed: c } = lu({ node: i, isVirtualized: !0 }, s, a), { isFocused: f, isFocusVisible: p, focusProps: h } = pe(), g = v.useContext(Ne);
  let m = !1;
  g && (m = g.resizingColumn === i.key);
  const { hoverProps: b, isHovered: w } = st({ isDisabled: !e.allowsSorting }), $ = ue({ ...e, children: i.rendered, defaultClassName: "react-aria-Column", values: { isHovered: w, isPressed: c, isFocused: f, isFocusVisible: p, allowsSorting: i.props.allowsSorting, sortDirection: ((k = s.sortDescriptor) == null ? void 0 : k.column) === i.key ? s.sortDescriptor.direction : void 0, isResizing: m, startResize: Je(() => {
    if (g) g.startResize(i.key), s.setKeyboardNavigationDisabled(!0);
    else throw new Error("Wrap your <Table> in a <ResizableTableContainer> to enable column resizing");
  }, "startResize"), sort: Je((E) => {
    s.sort(i.key, E);
  }, "sort") } });
  let y = $.style;
  g && (y = { ...y, width: g.getColumnWidth(i.key) });
  const x = W(r, { global: !0 });
  return delete x.id, C.jsx(vs, { ...T(x, d, h, b), ...$, style: y, ref: a, "data-resizing": m || void 0, "data-allows-sorting": o || void 0, "data-sort-direction": ((D = s.sortDescriptor) == null ? void 0 : D.column) === i.key ? s.sortDescriptor.direction : void 0, children: C.jsx(ot, { values: [[me, vn], [hn, { column: i, triggerRef: a }]], children: C.jsxs(ms, { role: "presentation", title: n, children: [C.jsx(cn, { children: xt(t) }), o && C.jsx(bs, { role: "presentation", className: "sort-indicator", children: ((I = s.sortDescriptor) == null ? void 0 : I.direction) === "ascending" ? C.jsx(qr, {}) : C.jsx(Lr, {}) }), u && C.jsx(_r, {})] }) }) });
}), vs = A.div`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableHeaderDefault};
    font-weight: 600;
    padding: ${dn}px ${P.spacing4};
    text-align: left;

    border-bottom: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${P.borderWidthMd};
    [role="row"] > [role="presentation"]:not(:last-child) & {
        border-right: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${P.borderWidthMd};
    }

    &:not([data-sort-direction]) .sort-indicator {
        visibility: hidden;
    }
`, ms = A.div`
    display: flex;
    min-width: 0;
    gap: ${P.spacing4};
`, bs = A.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
`;
var gs = Object.defineProperty, ys = (t, e) => gs(t, "name", { value: e, configurable: !0 });
const Me = class Me extends _ {
};
ys(Me, "TableRowNode"), j(Me, "type", "item");
let _e = Me;
const Ft = at(_e, (t, e, l) => {
  const i = X(e), n = L(re), { CollectionBranch: o } = L(me), { rowProps: u, ...r } = iu({ node: l, isVirtualized: !0 }, n, i), { hoverProps: a, isHovered: s } = st({ isDisabled: !r.allowsSelection && !r.hasAction }), d = W({ ...t, id: void 0 }, { global: !0 });
  delete d.onClick;
  const { isFocusVisible: c, focusProps: f } = pe(), { isFocusVisible: p, focusProps: h } = pe({ within: !0 }), { children: g, ...m } = t, b = ue({ ...m, defaultClassName: "react-aria-Row", values: { ...r, isHovered: s, isFocusVisible: c, selectionMode: n.selectionManager.selectionMode, selectionBehavior: n.selectionManager.selectionBehavior, isFocusVisibleWithin: p, id: l.key } });
  return C.jsx($s, { ...T(d, b, u, f, h, a), ref: i, "data-disabled": r.isDisabled || void 0, "data-selected": r.isSelected || void 0, "data-hovered": s || void 0, "data-focused": r.isFocused || void 0, "data-focus-visible": c || void 0, "data-focus-visible-within": p || void 0, "data-pressed": r.isPressed || void 0, "data-selection-mode": n.selectionManager.selectionMode === "none" ? void 0 : n.selectionManager.selectionMode, children: C.jsx(o, { collection: n.collection, parent: l }) });
}, (t) => {
  if (t.id == null && typeof t.children == "function") throw new Error("No id detected for the Row element. The Row element requires a id to be provided to it when the cells are rendered dynamically.");
  const e = t.dependencies;
  return C.jsx(ct, { dependencies: e, items: t.columns, idScope: t.id, children: t.children });
}), $s = A.div`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableCellPrimary};
    width: inherit;
    height: inherit;

    // Only apply extra styling when the row is interactive, to prevent focus styles on non-interactive rows
    // This means in practice currently that only when row-selection is enabled, these styles will apply
    &[data-react-aria-pressable] {
        &::after {
            content: "";
            position: absolute;
            inset: 0;
            top: -${P.borderWidthMd};
            pointer-events: none;
            z-index: 1;
        }

        &[data-hovered]::after,
        &[data-selected]::after {
            outline: ${P.borderWidthLg} solid ${({ theme: t }) => t.colorsBorderPrimary};
            outline-offset: -${P.borderWidthLg};
        }

        /*
        We show the outline below:
        - When the row itself is focused,
        - Or when a table cell, or an interactive element inside the cell (like a TextField) gets the "data-focused" attribute when clicking inside a cell (note that "data-focused" is more precise than ":focus")
        - Or any other focusable element inside the row also gets the focus outline (via ":focus-within"), to support custom-created components

        We don't show the outline of the row when it is not selected, to avoid showing the focus when right-clicking to bring up the context menu
        */
        &[data-selected]:is([data-focused], :has([data-focused], :focus-within))::after {
            outline: ${P.borderWidthLg} solid ${({ theme: t }) => t.colorsAccentDefaultBlue};
            outline-offset: -${P.borderWidthLg};
        }
    }
`;
var xs = Object.defineProperty, ws = (t, e) => xs(t, "name", { value: e, configurable: !0 });
const $n = v.createContext(null);
function Cs() {
  return L($n);
}
ws(Cs, "useTableOptions");
var ks = Object.defineProperty, Q = (t, e) => ks(t, "name", { value: e, configurable: !0 });
const Ds = { loaderHeight: De, estimatedRowHeight: De, estimatedHeadingHeight: De }, xn = v.createContext(null), wn = v.createContext(null), Es = Q(function({ children: t }) {
  const e = v.useMemo(() => Ds, []), l = v.useMemo(() => new Ou(e), [e]), i = v.useMemo(() => ({ layoutDelegate: l, CollectionRoot: kn, CollectionBranch: Dn }), [l]);
  return C.jsx(me.Provider, { value: i, children: C.jsx(wn.Provider, { value: { layout: l, layoutOptions: e }, children: t }) });
}, "TableVirtualizer");
function Cn(t) {
  if (!t.layoutInfo) throw new Error(`Table: ${t.viewType} has no layoutInfo`);
  return t.layoutInfo;
}
Q(Cn, "getLayoutInfo");
function kn({ collection: t, persistedKeys: e, scrollRef: l }) {
  var c;
  const { layout: i, layoutOptions: n } = L(wn), o = v.useContext(Ve), u = (c = i.useLayoutOptions) == null ? void 0 : c.call(i), r = v.useMemo(() => n && u ? { ...n, ...u } : n ?? u, [n, u]), a = ju({ layout: i, collection: t, renderView: Q((f, p) => {
    var h;
    return (h = p == null ? void 0 : p.render) == null ? void 0 : h.call(p, p);
  }, "renderView"), onVisibleRectChange(f) {
    const p = l == null ? void 0 : l.current;
    p && (p.scrollLeft = f.x, p.scrollTop = f.y);
  }, persistedKeys: e, layoutOptions: r });
  if (!l) throw new Error("TableVirtualizer: scrollRef is required in CollectionRoot.");
  const s = v.useRef(0), { contentProps: d } = qu({ onVisibleRectChange: Q((f) => {
    a.setVisibleRect(f), f.width !== s.current && (s.current = f.width, o == null || o.refreshTableWidth());
  }, "onVisibleRectChange"), contentSize: a.contentSize, onScrollStart: a.startScrolling, onScrollEnd: a.endScrolling }, l);
  return C.jsx("div", { ...d, children: C.jsx(xn.Provider, { value: a, children: wt(null, a.visibleViews) }) });
}
Q(kn, "CollectionRoot");
function Dn({ parent: t }) {
  const e = v.useContext(xn).virtualizer.getVisibleView(t.key);
  return wt(e, Array.from(e.children));
}
Q(Dn, "CollectionBranch");
function wt(t, e) {
  return e.map((l) => En(t, l));
}
Q(wt, "renderChildren");
function En(t, e) {
  return C.jsx(Gu, { layoutInfo: Cn(e), virtualizer: e.virtualizer, parent: t == null ? void 0 : t.layoutInfo, children: e.rendered }, e.key);
}
Q(En, "renderWrapper");
var Ss = Object.defineProperty, be = (t, e) => Ss(t, "name", { value: e, configurable: !0 });
function Sn(t) {
  const { key: e, target: l } = t;
  if (!Ie(e) || t.nativeEvent instanceof $e && Ie(t.nativeEvent.key) && t.nativeEvent.treatAsKey === "Tab" || !(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement)) return !1;
  const i = l.selectionStart, n = l.selectionEnd;
  return i === null || n === null ? !1 : i !== n ? !0 : e === "ArrowLeft" ? i > 0 : n < l.value.length;
}
be(Sn, "shouldStopArrowKeyPropagation");
function zn(t) {
  const { key: e, target: l } = t;
  return !(e.length !== 1 || !(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement));
}
be(zn, "shouldPreventTypeAhead");
function Bn(t) {
  ["Enter", "Tab"].includes(t.key) && (t.preventDefault(), t.stopPropagation(), t.key === "Enter" && et(t.target, "ArrowDown"), t.key === "Tab" && et(t.target, t.shiftKey ? "ArrowLeft" : "ArrowRight"));
}
be(Bn, "handleEnterTabNavigation");
const zs = { ArrowLeft: 37, ArrowUp: 38, ArrowRight: 39, ArrowDown: 40 };
function et(t, e) {
  const l = zs[e], i = { key: e, code: String(l), keyCode: l, which: l, bubbles: !0, cancelable: !0 };
  Ie(e) ? (t.dispatchEvent(new $e("keydown", i, "Tab")), t.dispatchEvent(new $e("keyup", i, "Tab"))) : (t.dispatchEvent(new KeyboardEvent("keydown", i)), t.dispatchEvent(new KeyboardEvent("keyup", i)));
}
be(et, "dispatchKeyDownEvent");
function Ie(t) {
  return t === "ArrowLeft" || t === "ArrowRight";
}
be(Ie, "isArrowLeftRight");
const Dt = class Dt extends KeyboardEvent {
  constructor(e, l, i) {
    super(e, l), this.treatAsKey = i;
  }
};
be(Dt, "CloakedKeyboardEvent");
let $e = Dt;
var Bs = Object.defineProperty, Ct = (t, e) => Bs(t, "name", { value: e, configurable: !0 });
const Rs = v.forwardRef(Ct(function({ children: t, ...e }, l) {
  return C.jsx(Es, { children: C.jsxs(Is, { ...e, ref: l, children: [t[0], t[1]] }) });
}, "Table")), Is = v.forwardRef(Ct(function({ selectedKey: t, onContextMenu: e, onSelectionChange: l, children: i, ...n }, o) {
  const [u, r] = lt(n, o, Du), a = v.useMemo(() => new Set(t ? [t] : []), [t]), s = v.useCallback((y) => {
    if (y instanceof Set) {
      const x = y.values().next().value;
      x !== t && (l == null || l(x));
    }
  }, [l, t]), d = v.useCallback((y) => {
    let x, k, D;
    if (y.target instanceof HTMLElement) {
      const I = y.target.closest("[role=row]"), E = y.target.closest(":is([role=gridcell], [role=rowheader], [role=columnheader])");
      x = (I == null ? void 0 : I.getAttribute("data-key")) ?? void 0, k = (E == null ? void 0 : E.getAttribute("data-key")) ?? void 0, D = (E == null ? void 0 : E.getAttribute("role")) ?? void 0;
    }
    e == null || e({ rowKey: x, cellKey: k, cellRole: D, selection: t });
  }, [e, t]), c = { selectedKeys: a, selectionBehavior: "replace", disallowEmptySelection: !0, onSelectionChange: s, onContextMenu: d, ...u }, f = Wt(c), { selectionBehavior: p, selectionMode: h, disallowEmptySelection: g } = f, m = v.useMemo(() => ({ selectionBehavior: p, selectionMode: h === "multiple" ? "single" : h, disallowEmptySelection: g }), [h, p, g]), b = v.useMemo(() => C.jsx($n.Provider, { value: m, children: C.jsx(ct, { children: i }) }), [i, m]), w = X(r), $ = v.useCallback(() => new Ge(), []);
  return C.jsx(Ut, { content: b, createCollection: $, children: (y) => C.jsx(Rn, { collection: y, forwardedRef: w, selectionState: f, props: c }) });
}, "UnVirtualizedTable"));
function Rn({ forwardedRef: t, collection: e, selectionState: l, props: i }) {
  const { ...n } = i, o = v.useContext(Ve);
  t = X(v.useMemo(() => Bo(t, o == null ? void 0 : o.tableRef), [t, o == null ? void 0 : o.tableRef]));
  const u = yu({ ...n, collection: e, children: void 0, UNSAFE_selectionState: l }), r = u.selectionManager.focusedKey, { layoutDelegate: a, CollectionRoot: s } = L(me), d = { ...n, isVirtualized: !0 }, { gridProps: c } = eu({ ...d, layoutDelegate: a }, u, t), f = W(i, { global: !0 }), { focusProps: p, isFocused: h, isFocusVisible: g } = pe(), m = v.useCallback((w) => {
    (Sn(w) || zn(w)) && w.stopPropagation(), Bn(w);
  }, []);
  let b = null;
  return o && (b = o.useTableColumnResizeState({ tableWidth: o.tableWidth }, u)), C.jsx(ot, { values: [[re, u], [Ne, b]], children: C.jsx(Ro, { children: C.jsx(As, { ...T(f, c, p), ref: t, "data-focused": h || void 0, "data-focus-visible": g || void 0, onKeyDownCapture: m, children: C.jsx(s, { collection: e, scrollRef: t, persistedKeys: r !== null ? /* @__PURE__ */ new Set([r]) : void 0 }) }) }) });
}
Ct(Rn, "TableInner");
const As = A.div`
    background-color: ${({ theme: t }) => t.colorsBackgroundTableLayout};
    border: solid ${({ theme: t }) => t.colorsBackgroundTableBase} ${P.borderWidthMd};
    color: ${({ theme: t }) => t.colorsTextPrimaryDefault};
    font-size: ${P.fontSizeMd};
    line-height: ${P.lineHeightMd};
    white-space: nowrap;

    min-height: 100%;
    height: 100%;
    width: 100%;
    overflow: auto;

    // This is needed to prevent a keyboard-selected row from being hidden by the Table header when navigating with the keyboard,
    // as the browser will try to scroll the focused row into view, but we want to have some space above it so that the header is not covering it.
    scroll-padding-top: ${De}px;
`, Ps = A(vr)`
    background-color: transparent;
    & button {
        background-color: transparent;
    }
`, Ms = A.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`, Ks = A.div`
    width: round(calc(100% - 1px), 2px);
    & > div {
        border-bottom: none;
    }
`, Le = A.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: text;
    ${(t) => t.$opacity !== void 0 && `
    opacity: ${t.$opacity};
    `}
    ${(t) => t.$align && `
    display: flex;
    justify-content: ${t.$align === "center" ? "center" : t.$align === "right" ? "flex-end" : "flex-start"};
    align-items: center;
    `}
`, js = ({
  ariaLabel: t,
  columns: e,
  data: l,
  toolbarLeft: i,
  toolbarRight: n,
  selectionMode: o = "single",
  selectedKey: u,
  onRowAction: r,
  onSelectionChange: a,
  onSortChange: s,
  sortDescriptor: d,
  rowKey: c,
  rowOpacity: f
}) => {
  const p = v.useRef(null);
  return v.useEffect(() => {
    const h = (g) => {
      p.current && !p.current.contains(g.target) && (a == null || a(void 0));
    };
    return document.addEventListener("click", h), () => {
      document.removeEventListener("click", h);
    };
  }, [a]), /* @__PURE__ */ C.jsx(Gr, { children: /* @__PURE__ */ C.jsxs(Ms, { children: [
    (i || n) && /* @__PURE__ */ C.jsxs(Ps, { "aria-label": `${t} toolbar`, children: [
      i && /* @__PURE__ */ C.jsx(br, { children: i }),
      n && /* @__PURE__ */ C.jsx(gr, { children: n })
    ] }),
    /* @__PURE__ */ C.jsx(Ks, { ref: p, children: /* @__PURE__ */ C.jsxs(
      Rs,
      {
        "aria-label": t,
        selectionMode: o,
        selectedKey: u,
        onSelectionChange: a,
        onRowAction: r,
        onSortChange: s,
        sortDescriptor: d,
        children: [
          /* @__PURE__ */ C.jsx(cs, { children: e.map((h) => /* @__PURE__ */ C.jsx(
            ps,
            {
              id: h.id,
              isRowHeader: h.isRowHeader,
              allowsResizing: h.allowsResizing,
              minWidth: h.minWidth,
              maxWidth: h.maxWidth,
              defaultWidth: h.defaultWidth,
              allowsSorting: h.allowsSorting,
              children: h.caption
            },
            h.id
          )) }),
          /* @__PURE__ */ C.jsx(is, { children: l.length === 0 ? /* @__PURE__ */ C.jsx(Ft, { children: e.map((h) => /* @__PURE__ */ C.jsx(Kt, { children: /* @__PURE__ */ C.jsx(Le, { $align: h.alignContents, children: " " }) }, h.id)) }) : l.map((h, g) => {
            const m = c ? c(h, g) : String(g), b = f == null ? void 0 : f(g);
            return /* @__PURE__ */ C.jsx(Ft, { id: m, children: h.map((w, $) => {
              const y = e[$];
              if (!y)
                return null;
              const x = y.isControl ? 1 : b;
              return /* @__PURE__ */ C.jsx(Kt, { title: w.tooltipText, children: w.cellContent ? /* @__PURE__ */ C.jsx(
                Le,
                {
                  $opacity: x,
                  $align: y.alignContents,
                  children: w.cellContent
                }
              ) : /* @__PURE__ */ C.jsx(
                Le,
                {
                  $opacity: x,
                  $align: y.alignContents,
                  children: " "
                }
              ) }, $);
            }) }, m);
          }) })
        ]
      }
    ) })
  ] }) });
};
function Hs(t) {
  const [e, l] = v.useState();
  return {
    items: v.useMemo(() => e ? an({
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
  Vs as D,
  or as E,
  gr as S,
  js as T,
  vr as a,
  Hs as u
};
