import { r as a, $ as Ee, f as He, g as Ae, h as Il, i as Ll, k as Xe, l as Rl, m as Ye, n as Ze, o as ge, q as Z, s as Je, t as Ce, u as xe, v as Ke, w as Ge, x as dt, y as Ol, z as de, B as Ft, E as Qe, G as Vl, H as se, I as jl, J as Nl, K as D, L as ft, M as zl, N as Hl, O as _e, Q as pt, R as Mt, U as Gl, V as It, W as Ul, X as Wl, Y as ht, Z as Le, _ as ql, a0 as Lt, a1 as bt, a2 as Rt, a3 as Xl, a4 as Yl, a5 as Ot, a6 as Zl, a7 as Jl, a8 as Pe, a9 as Vt, aa as ce, ab as et, ac as Ql, ad as _l, ae as eo, af as to, ag as jt, ah as tt, ai as nt, aj as no, ak as lo, al as oo, am as Nt, an as io, ao as uo, ap as ro, aq as so, ar as zt, as as Ht, at as Gt, au as ao, av as co, aw as Ut, ax as fo, j as S, p as Wt, d as Q, ay as re, az as po, aA as ho, aB as bo, aC as vo, aD as $o, aE as go, aF as yo, D as $e, a as le, S as Se, aG as xo, b as qt, F as Xt, c as mo, A as Co, P as So, e as Do, aH as Eo } from "./TextInputWithIcon-BpSHc-Lp.js";
import { a as Ao, b as Ko, c as Po, d as ko } from "./modelUtils-BKeUOTig.js";
import { y as Bo, S as wo } from "./Banner-B8h5d_oN.js";
import { T as be } from "./TextInputLabeled-G5mbtodI.js";
function To(t, e) {
  const n = a.useRef(!0), l = a.useRef(null);
  a.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []), a.useEffect(() => {
    let o = l.current;
    n.current ? n.current = !1 : (!o || e.some((i, u) => !Object.is(i, o[u]))) && t(), l.current = e;
  }, e);
}
function vt(t, e) {
  const n = a.useRef(!0), l = a.useRef(null);
  Ee(() => (n.current = !0, () => {
    n.current = !1;
  }), []), Ee(() => {
    n.current ? n.current = !1 : (!l.current || e.some((o, i) => !Object.is(o, l[i]))) && t(), l.current = e;
  }, e);
}
function Fo(t, e) {
  const n = [];
  for (; t && t !== document.documentElement; )
    He(t, e) && n.push(t), t = t.parentElement;
  return n;
}
let Mo = 0;
const Re = /* @__PURE__ */ new Map();
function Io(t) {
  let [e, n] = a.useState();
  return Ee(() => {
    if (!t) return;
    let l = Re.get(t);
    if (l)
      n(l.element.id);
    else {
      let o = `react-aria-description-${Mo++}`;
      n(o);
      let i = document.createElement("div");
      i.id = o, i.style.display = "none", i.textContent = t, document.body.appendChild(i), l = {
        refCount: 0,
        element: i
      }, Re.set(t, l);
    }
    return l.refCount++, () => {
      l && --l.refCount === 0 && (l.element.remove(), Re.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? e : void 0
  };
}
function ve(t, e, n, l) {
  let o = Ae(n), i = n == null;
  a.useEffect(() => {
    if (i || !t.current) return;
    let u = t.current;
    return u.addEventListener(e, o, l), () => {
      u.removeEventListener(e, o, l);
    };
  }, [
    t,
    e,
    l,
    i,
    o
  ]);
}
function Yt(t, e) {
  let n = $t(t, e, "left"), l = $t(t, e, "top"), o = e.offsetWidth, i = e.offsetHeight, u = t.scrollLeft, r = t.scrollTop, { borderTopWidth: s, borderLeftWidth: f, scrollPaddingTop: d, scrollPaddingRight: c, scrollPaddingBottom: p, scrollPaddingLeft: b } = getComputedStyle(t), { scrollMarginTop: v, scrollMarginRight: g, scrollMarginBottom: m, scrollMarginLeft: y } = getComputedStyle(e), C = u + parseInt(f, 10), k = r + parseInt(s, 10), B = C + t.clientWidth, A = k + t.clientHeight, P = parseInt(d, 10) || 0, N = parseInt(p, 10) || 0, T = parseInt(c, 10) || 0, V = parseInt(b, 10) || 0, F = parseInt(v, 10) || 0, z = parseInt(m, 10) || 0, H = parseInt(g, 10) || 0, O = parseInt(y, 10) || 0, Y = n - O, w = n + o + H, U = l - F, $ = l + i + z, E = u + parseInt(f, 10) + V, M = B - T, h = r + parseInt(s, 10) + P, I = A - N;
  if ((Y > E || w < M) && (Y <= u + V ? u = Y - parseInt(f, 10) - V : w > B - T && (u += w - B + T)), (U > h || $ < I) && (U <= k + P ? r = U - parseInt(s, 10) - P : $ > A - N && (r += $ - A + N)), process.env.NODE_ENV === "test") {
    t.scrollLeft = u, t.scrollTop = r;
    return;
  }
  t.scrollTo({
    left: u,
    top: r
  });
}
function $t(t, e, n) {
  const l = n === "left" ? "offsetLeft" : "offsetTop";
  let o = 0;
  for (; e.offsetParent && (o += e[l], e.offsetParent !== t); ) {
    if (e.offsetParent.contains(t)) {
      o -= t[l];
      break;
    }
    e = e.offsetParent;
  }
  return o;
}
function gt(t, e) {
  if (t && document.contains(t)) {
    let u = document.scrollingElement || document.documentElement;
    if (!(window.getComputedStyle(u).overflow === "hidden") && !Il()) {
      var n;
      let { left: s, top: f } = t.getBoundingClientRect();
      t == null || (n = t.scrollIntoView) === null || n === void 0 || n.call(t, {
        block: "nearest"
      });
      let { left: d, top: c } = t.getBoundingClientRect();
      if (Math.abs(s - d) > 1 || Math.abs(f - c) > 1) {
        var l, o, i;
        e == null || (o = e.containingElement) === null || o === void 0 || (l = o.scrollIntoView) === null || l === void 0 || l.call(o, {
          block: "center",
          inline: "center"
        }), (i = t.scrollIntoView) === null || i === void 0 || i.call(t, {
          block: "nearest"
        });
      }
    } else {
      let s = Fo(t);
      for (let f of s) Yt(f, t);
    }
  }
}
function Lo(t, e) {
  let { collection: n, onLoadMore: l, scrollOffset: o = 1 } = t, i = a.useRef(null), u = Ae((r) => {
    for (let s of r)
      s.isIntersecting && l && l();
  });
  Ee(() => (e.current && (i.current = new IntersectionObserver(u, {
    root: Ll(e == null ? void 0 : e.current),
    rootMargin: `0px ${100 * o}% ${100 * o}% ${100 * o}%`
  }), i.current.observe(e.current)), () => {
    i.current && i.current.disconnect();
  }), [
    n,
    u,
    e,
    o
  ]);
}
function Ro(t) {
  const e = a.version.split(".");
  return parseInt(e[0], 10) >= 19 ? t : t ? "true" : void 0;
}
const Oo = "react-aria-clear-focus", Vo = "react-aria-focus";
var Zt = {};
Zt = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} خيار`,
    other: () => `${e.number(t.optionCount)} خيارات`
  })} متاحة.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `المجموعة المدخلة ${t.groupTitle}, مع ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} خيار`,
      other: () => `${e.number(t.groupCount)} خيارات`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", محدد",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "مقترحات",
  selectedAnnouncement: (t) => `${t.optionText}، محدد`
};
var Jt = {};
Jt = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} опция`,
    other: () => `${e.number(t.optionCount)} опции`
  })} на разположение.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Въведена група ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} опция`,
      other: () => `${e.number(t.groupCount)} опции`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", избрани",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, избрани`
};
var Qt = {};
Qt = {
  buttonLabel: "Zobrazit doporučení",
  countAnnouncement: (t, e) => `K dispozici ${e.plural(t.optionCount, {
    one: () => `je ${e.number(t.optionCount)} možnost`,
    other: () => `jsou/je ${e.number(t.optionCount)} možnosti/-í`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina „${t.groupTitle}“ ${e.plural(t.groupCount, {
      one: () => `s ${e.number(t.groupCount)} možností`,
      other: () => `se ${e.number(t.groupCount)} možnostmi`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: " (vybráno)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybráno`
};
var _t = {};
_t = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} mulighed tilgængelig`,
    other: () => `${e.number(t.optionCount)} muligheder tilgængelige`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angivet gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} mulighed`,
      other: () => `${e.number(t.groupCount)} muligheder`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var en = {};
en = {
  buttonLabel: "Empfehlungen anzeigen",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} Option`,
    other: () => `${e.number(t.optionCount)} Optionen`
  })} verfügbar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Eingetretene Gruppe ${t.groupTitle}, mit ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} Option`,
      other: () => `${e.number(t.groupCount)} Optionen`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", ausgewählt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Empfehlungen",
  selectedAnnouncement: (t) => `${t.optionText}, ausgewählt`
};
var tn = {};
tn = {
  buttonLabel: "Προβολή προτάσεων",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} επιλογή`,
    other: () => `${e.number(t.optionCount)} επιλογές `
  })} διαθέσιμες.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Εισαγμένη ομάδα ${t.groupTitle}, με ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} επιλογή`,
      other: () => `${e.number(t.groupCount)} επιλογές`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", επιλεγμένο",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Προτάσεις",
  selectedAnnouncement: (t) => `${t.optionText}, επιλέχθηκε`
};
var nn = {};
nn = {
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Entered group ${t.groupTitle}, with ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selected",
    other: ""
  }, t.isSelected)}`,
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} available.`,
  selectedAnnouncement: (t) => `${t.optionText}, selected`,
  buttonLabel: "Show suggestions",
  listboxLabel: "Suggestions"
};
var ln = {};
ln = {
  buttonLabel: "Mostrar sugerencias",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opción`,
    other: () => `${e.number(t.optionCount)} opciones`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Se ha unido al grupo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opción`,
      other: () => `${e.number(t.groupCount)} opciones`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seleccionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugerencias",
  selectedAnnouncement: (t) => `${t.optionText}, seleccionado`
};
var on = {};
on = {
  buttonLabel: "Kuva soovitused",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} valik`,
    other: () => `${e.number(t.optionCount)} valikud`
  })} saadaval.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Sisestatud rühm ${t.groupTitle}, valikuga ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} valik`,
      other: () => `${e.number(t.groupCount)} valikud`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valitud",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Soovitused",
  selectedAnnouncement: (t) => `${t.optionText}, valitud`
};
var un = {};
un = {
  buttonLabel: "Näytä ehdotukset",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} vaihtoehto`,
    other: () => `${e.number(t.optionCount)} vaihtoehdot`
  })} saatavilla.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Mentiin ryhmään ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} vaihtoehdon`,
      other: () => `${e.number(t.groupCount)} vaihtoehdon`
    })} kanssa.`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valittu",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ehdotukset",
  selectedAnnouncement: (t) => `${t.optionText}, valittu`
};
var rn = {};
rn = {
  buttonLabel: "Afficher les suggestions",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} option`,
    other: () => `${e.number(t.optionCount)} options`
  })} disponible(s).`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groupe ${t.groupTitle} rejoint, avec ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} option`,
      other: () => `${e.number(t.groupCount)} options`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", sélectionné(s)",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggestions",
  selectedAnnouncement: (t) => `${t.optionText}, sélectionné`
};
var sn = {};
sn = {
  buttonLabel: "הצג הצעות",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `אפשרות ${e.number(t.optionCount)}`,
    other: () => `${e.number(t.optionCount)} אפשרויות`
  })} במצב זמין.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `נכנס לקבוצה ${t.groupTitle}, עם ${e.plural(t.groupCount, {
      one: () => `אפשרות ${e.number(t.groupCount)}`,
      other: () => `${e.number(t.groupCount)} אפשרויות`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", נבחר",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "הצעות",
  selectedAnnouncement: (t) => `${t.optionText}, נבחר`
};
var an = {};
an = {
  buttonLabel: "Prikaži prijedloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} opcije/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", odabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Prijedlozi",
  selectedAnnouncement: (t) => `${t.optionText}, odabrano`
};
var cn = {};
cn = {
  buttonLabel: "Javaslatok megjelenítése",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} lehetőség`,
    other: () => `${e.number(t.optionCount)} lehetőség`
  })} áll rendelkezésre.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Belépett a(z) ${t.groupTitle} csoportba, amely ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} lehetőséget`,
      other: () => `${e.number(t.groupCount)} lehetőséget`
    })} tartalmaz. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", kijelölve",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Javaslatok",
  selectedAnnouncement: (t) => `${t.optionText}, kijelölve`
};
var dn = {};
dn = {
  buttonLabel: "Mostra suggerimenti",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opzione disponibile`,
    other: () => `${e.number(t.optionCount)} opzioni disponibili`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingresso nel gruppo ${t.groupTitle}, con ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opzione`,
      other: () => `${e.number(t.groupCount)} opzioni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selezionato",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggerimenti",
  selectedAnnouncement: (t) => `${t.optionText}, selezionato`
};
var fn = {};
fn = {
  buttonLabel: "候補を表示",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 個のオプション`,
    other: () => `${e.number(t.optionCount)} 個のオプション`
  })}を利用できます。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `入力されたグループ ${t.groupTitle}、${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 個のオプション`,
      other: () => `${e.number(t.groupCount)} 個のオプション`
    })}を含む。`,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: "、選択済み",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "候補",
  selectedAnnouncement: (t) => `${t.optionText}、選択済み`
};
var pn = {};
pn = {
  buttonLabel: "제안 사항 표시",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)}개 옵션`,
    other: () => `${e.number(t.optionCount)}개 옵션`
  })}을 사용할 수 있습니다.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `입력한 그룹 ${t.groupTitle}, ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)}개 옵션`,
      other: () => `${e.number(t.groupCount)}개 옵션`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 선택됨",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "제안",
  selectedAnnouncement: (t) => `${t.optionText}, 선택됨`
};
var hn = {};
hn = {
  buttonLabel: "Rodyti pasiūlymus",
  countAnnouncement: (t, e) => `Yra ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} parinktis`,
    other: () => `${e.number(t.optionCount)} parinktys (-ių)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Įvesta grupė ${t.groupTitle}, su ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} parinktimi`,
      other: () => `${e.number(t.groupCount)} parinktimis (-ių)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", pasirinkta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Pasiūlymai",
  selectedAnnouncement: (t) => `${t.optionText}, pasirinkta`
};
var bn = {};
bn = {
  buttonLabel: "Rādīt ieteikumus",
  countAnnouncement: (t, e) => `Pieejamo opciju skaits: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcijas`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ievadīta grupa ${t.groupTitle}, ar ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opciju`,
      other: () => `${e.number(t.groupCount)} opcijām`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", atlasīta",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Ieteikumi",
  selectedAnnouncement: (t) => `${t.optionText}, atlasīta`
};
var vn = {};
vn = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativer`
  })} finnes.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Angitt gruppe ${t.groupTitle}, med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativer`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valgt",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (t) => `${t.optionText}, valgt`
};
var $n = {};
$n = {
  buttonLabel: "Suggesties weergeven",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} optie`,
    other: () => `${e.number(t.optionCount)} opties`
  })} beschikbaar.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Groep ${t.groupTitle} ingevoerd met ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} optie`,
      other: () => `${e.number(t.groupCount)} opties`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", geselecteerd",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Suggesties",
  selectedAnnouncement: (t) => `${t.optionText}, geselecteerd`
};
var gn = {};
gn = {
  buttonLabel: "Wyświetlaj sugestie",
  countAnnouncement: (t, e) => `dostępna/dostępne(-nych) ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcja`,
    other: () => `${e.number(t.optionCount)} opcje(-i)`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Dołączono do grupy ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcją`,
      other: () => `${e.number(t.groupCount)} opcjami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", wybrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestie",
  selectedAnnouncement: (t) => `${t.optionText}, wybrano`
};
var yn = {};
yn = {
  buttonLabel: "Mostrar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo inserido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var xn = {};
xn = {
  buttonLabel: "Apresentar sugestões",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opção`,
    other: () => `${e.number(t.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grupo introduzido ${t.groupTitle}, com ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opção`,
      other: () => `${e.number(t.groupCount)} opções`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selecionado",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (t) => `${t.optionText}, selecionado`
};
var mn = {};
mn = {
  buttonLabel: "Afișare sugestii",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opțiune`,
    other: () => `${e.number(t.optionCount)} opțiuni`
  })} disponibile.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Grup ${t.groupTitle} introdus, cu ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opțiune`,
      other: () => `${e.number(t.groupCount)} opțiuni`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", selectat",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Sugestii",
  selectedAnnouncement: (t) => `${t.optionText}, selectat`
};
var Cn = {};
Cn = {
  buttonLabel: "Показать предложения",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметров`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введенная группа ${t.groupTitle}, с ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметром`,
      other: () => `${e.number(t.groupCount)} параметрами`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", выбранными",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (t) => `${t.optionText}, выбрано`
};
var Sn = {};
Sn = {
  buttonLabel: "Zobraziť návrhy",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} možnosť`,
    other: () => `${e.number(t.optionCount)} možnosti/-í`
  })} k dispozícii.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Zadaná skupina ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} možnosťou`,
      other: () => `${e.number(t.groupCount)} možnosťami`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", vybraté",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (t) => `${t.optionText}, vybraté`
};
var Dn = {};
Dn = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Na voljo je ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Vnesena skupina ${t.groupTitle}, z ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcija`,
      other: () => `${e.number(t.groupCount)} opcije`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izbrano",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlogi",
  selectedAnnouncement: (t) => `${t.optionText}, izbrano`
};
var En = {};
En = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (t, e) => `Dostupno još: ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} opcija`,
    other: () => `${e.number(t.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Unesena grupa ${t.groupTitle}, s ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} opcijom`,
      other: () => `${e.number(t.groupCount)} optione/a`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", izabranih",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Predlozi",
  selectedAnnouncement: (t) => `${t.optionText}, izabrano`
};
var An = {};
An = {
  buttonLabel: "Visa förslag",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} alternativ`,
    other: () => `${e.number(t.optionCount)} alternativ`
  })} tillgängliga.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Ingick i gruppen ${t.groupTitle} med ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} alternativ`,
      other: () => `${e.number(t.groupCount)} alternativ`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", valda",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Förslag",
  selectedAnnouncement: (t) => `${t.optionText}, valda`
};
var Kn = {};
Kn = {
  buttonLabel: "Önerileri göster",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} seçenek`,
    other: () => `${e.number(t.optionCount)} seçenekler`
  })} kullanılabilir.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Girilen grup ${t.groupTitle}, ile ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} seçenek`,
      other: () => `${e.number(t.groupCount)} seçenekler`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", seçildi",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Öneriler",
  selectedAnnouncement: (t) => `${t.optionText}, seçildi`
};
var Pn = {};
Pn = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} параметр`,
    other: () => `${e.number(t.optionCount)} параметри(-ів)`
  })} доступно.`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `Введена група ${t.groupTitle}, з ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} параметр`,
      other: () => `${e.number(t.groupCount)} параметри(-ів)`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", вибрано",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "Пропозиції",
  selectedAnnouncement: (t) => `${t.optionText}, вибрано`
};
var kn = {};
kn = {
  buttonLabel: "显示建议",
  countAnnouncement: (t, e) => `有 ${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 个选项`,
    other: () => `${e.number(t.optionCount)} 个选项`
  })}可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `进入了 ${t.groupTitle} 组，其中有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 个选项`,
      other: () => `${e.number(t.groupCount)} 个选项`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已选择",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建议",
  selectedAnnouncement: (t) => `${t.optionText}, 已选择`
};
var Bn = {};
Bn = {
  buttonLabel: "顯示建議",
  countAnnouncement: (t, e) => `${e.plural(t.optionCount, {
    one: () => `${e.number(t.optionCount)} 選項`,
    other: () => `${e.number(t.optionCount)} 選項`
  })} 可用。`,
  focusAnnouncement: (t, e) => `${e.select({
    true: () => `輸入的群組 ${t.groupTitle}, 有 ${e.plural(t.groupCount, {
      one: () => `${e.number(t.groupCount)} 選項`,
      other: () => `${e.number(t.groupCount)} 選項`
    })}. `,
    other: ""
  }, t.isGroupChange)}${t.optionText}${e.select({
    true: ", 已選取",
    other: ""
  }, t.isSelected)}`,
  listboxLabel: "建議",
  selectedAnnouncement: (t) => `${t.optionText}, 已選取`
};
var wn = {};
wn = {
  "ar-AE": Zt,
  "bg-BG": Jt,
  "cs-CZ": Qt,
  "da-DK": _t,
  "de-DE": en,
  "el-GR": tn,
  "en-US": nn,
  "es-ES": ln,
  "et-EE": on,
  "fi-FI": un,
  "fr-FR": rn,
  "he-IL": sn,
  "hr-HR": an,
  "hu-HU": cn,
  "it-IT": dn,
  "ja-JP": fn,
  "ko-KR": pn,
  "lt-LT": hn,
  "lv-LV": bn,
  "nb-NO": vn,
  "nl-NL": $n,
  "pl-PL": gn,
  "pt-BR": yn,
  "pt-PT": xn,
  "ro-RO": mn,
  "ru-RU": Cn,
  "sk-SK": Sn,
  "sl-SI": Dn,
  "sr-SP": En,
  "sv-SE": An,
  "tr-TR": Kn,
  "uk-UA": Pn,
  "zh-CN": kn,
  "zh-TW": Bn
};
let Oe = /* @__PURE__ */ new Map();
function lt(t) {
  let { locale: e } = Xe(), n = e + (t ? Object.entries(t).sort((o, i) => o[0] < i[0] ? -1 : 1).join() : "");
  if (Oe.has(n)) return Oe.get(n);
  let l = new Intl.Collator(e, t);
  return Oe.set(n, l), l;
}
function jo(t) {
  let e = lt({
    usage: "search",
    ...t
  }), n = a.useCallback((i, u) => u.length === 0 ? !0 : (i = i.normalize("NFC"), u = u.normalize("NFC"), e.compare(i.slice(0, u.length), u) === 0), [
    e
  ]), l = a.useCallback((i, u) => u.length === 0 ? !0 : (i = i.normalize("NFC"), u = u.normalize("NFC"), e.compare(i.slice(-u.length), u) === 0), [
    e
  ]), o = a.useCallback((i, u) => {
    if (u.length === 0) return !0;
    i = i.normalize("NFC"), u = u.normalize("NFC");
    let r = 0, s = u.length;
    for (; r + s <= i.length; r++) {
      let f = i.slice(r, r + s);
      if (e.compare(u, f) === 0) return !0;
    }
    return !1;
  }, [
    e
  ]);
  return a.useMemo(() => ({
    startsWith: n,
    endsWith: l,
    contains: o
  }), [
    n,
    l,
    o
  ]);
}
const No = 500;
function Tn(t) {
  let { isDisabled: e, onLongPressStart: n, onLongPressEnd: l, onLongPress: o, threshold: i = No, accessibilityDescription: u } = t;
  const r = a.useRef(void 0);
  let { addGlobalListener: s, removeGlobalListener: f } = Rl(), { pressProps: d } = Ye({
    isDisabled: e,
    onPressStart(p) {
      if (p.continuePropagation(), (p.pointerType === "mouse" || p.pointerType === "touch") && (n && n({
        ...p,
        type: "longpressstart"
      }), r.current = setTimeout(() => {
        p.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), Ze(p.target).activeElement !== p.target && ge(p.target), o && o({
          ...p,
          type: "longpress"
        }), r.current = void 0;
      }, i), p.pointerType === "touch")) {
        let b = (v) => {
          v.preventDefault();
        };
        s(p.target, "contextmenu", b, {
          once: !0
        }), s(window, "pointerup", () => {
          setTimeout(() => {
            f(p.target, "contextmenu", b);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(p) {
      r.current && clearTimeout(r.current), l && (p.pointerType === "mouse" || p.pointerType === "touch") && l({
        ...p,
        type: "longpressend"
      });
    }
  }), c = Io(o && !e ? u : void 0);
  return {
    longPressProps: Z(d, c)
  };
}
function Fn(t) {
  let e = Ho(Ze(t));
  e !== t && (e && zo(e, t), t && ot(t, e));
}
function zo(t, e) {
  t.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function ot(t, e) {
  t.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function Ho(t) {
  let e = Je(t), n = e == null ? void 0 : e.getAttribute("aria-activedescendant");
  return n && t.getElementById(n) || e;
}
const ke = /* @__PURE__ */ new WeakMap();
function Go(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function Mn(t, e) {
  let n = ke.get(t);
  if (!n) throw new Error("Unknown list");
  return `${n.id}-option-${Go(e)}`;
}
function Ue(t) {
  return Ce() ? t.altKey : t.ctrlKey;
}
function De(t, e) {
  var n, l;
  let o = `[data-key="${CSS.escape(String(e))}"]`, i = (n = t.current) === null || n === void 0 ? void 0 : n.dataset.collection;
  return i && (o = `[data-collection="${CSS.escape(i)}"]${o}`), (l = t.current) === null || l === void 0 ? void 0 : l.querySelector(o);
}
const In = /* @__PURE__ */ new WeakMap();
function Uo(t) {
  let e = xe();
  return In.set(t, e), e;
}
function Wo(t) {
  return In.get(t);
}
const qo = 1e3;
function Xo(t) {
  let { keyboardDelegate: e, selectionManager: n, onTypeSelect: l } = t, o = a.useRef({
    search: "",
    timeout: void 0
  }).current, i = (u) => {
    let r = Yo(u.key);
    if (!(!r || u.ctrlKey || u.metaKey || !u.currentTarget.contains(u.target) || o.search.length === 0 && r === " ")) {
      if (r === " " && o.search.trim().length > 0 && (u.preventDefault(), "continuePropagation" in u || u.stopPropagation()), o.search += r, e.getKeyForSearch != null) {
        let s = e.getKeyForSearch(o.search, n.focusedKey);
        s == null && (s = e.getKeyForSearch(o.search)), s != null && (n.setFocusedKey(s), l && l(s));
      }
      clearTimeout(o.timeout), o.timeout = setTimeout(() => {
        o.search = "";
      }, qo);
    }
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: e.getKeyForSearch ? i : void 0
    }
  };
}
function Yo(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function Ln(t) {
  let { selectionManager: e, keyboardDelegate: n, ref: l, autoFocus: o = !1, shouldFocusWrap: i = !1, disallowEmptySelection: u = !1, disallowSelectAll: r = !1, escapeKeyBehavior: s = "clearSelection", selectOnFocus: f = e.selectionBehavior === "replace", disallowTypeAhead: d = !1, shouldUseVirtualFocus: c, allowsTabNavigation: p = !1, isVirtualized: b, scrollRef: v = l, linkBehavior: g = "action" } = t, { direction: m } = Xe(), y = Ke(), C = ($) => {
    var E;
    if ($.altKey && $.key === "Tab" && $.preventDefault(), !(!((E = l.current) === null || E === void 0) && E.contains($.target))) return;
    const M = (x, L) => {
      if (x != null) {
        if (e.isLink(x) && g === "selection" && f && !Ue($)) {
          Ft.flushSync(() => {
            e.setFocusedKey(x, L);
          });
          let J = De(l, x), ue = e.getItemProps(x);
          J && y.open(J, $, ue.href, ue.routerOptions);
          return;
        }
        if (e.setFocusedKey(x, L), e.isLink(x) && g === "override") return;
        $.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(x) : f && !Ue($) && e.replaceSelection(x);
      }
    };
    switch ($.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var h, I, j;
          let x = e.focusedKey != null ? (h = n.getKeyBelow) === null || h === void 0 ? void 0 : h.call(n, e.focusedKey) : (I = n.getFirstKey) === null || I === void 0 ? void 0 : I.call(n);
          x == null && i && (x = (j = n.getFirstKey) === null || j === void 0 ? void 0 : j.call(n, e.focusedKey)), x != null && ($.preventDefault(), M(x));
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var q, X, ne;
          let x = e.focusedKey != null ? (q = n.getKeyAbove) === null || q === void 0 ? void 0 : q.call(n, e.focusedKey) : (X = n.getLastKey) === null || X === void 0 ? void 0 : X.call(n);
          x == null && i && (x = (ne = n.getLastKey) === null || ne === void 0 ? void 0 : ne.call(n, e.focusedKey)), x != null && ($.preventDefault(), M(x));
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var _, ee, oe;
          let x = e.focusedKey != null ? (_ = n.getKeyLeftOf) === null || _ === void 0 ? void 0 : _.call(n, e.focusedKey) : null;
          x == null && i && (x = m === "rtl" ? (ee = n.getFirstKey) === null || ee === void 0 ? void 0 : ee.call(n, e.focusedKey) : (oe = n.getLastKey) === null || oe === void 0 ? void 0 : oe.call(n, e.focusedKey)), x != null && ($.preventDefault(), M(x, m === "rtl" ? "first" : "last"));
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var ie, ae, K;
          let x = e.focusedKey != null ? (ie = n.getKeyRightOf) === null || ie === void 0 ? void 0 : ie.call(n, e.focusedKey) : null;
          x == null && i && (x = m === "rtl" ? (ae = n.getLastKey) === null || ae === void 0 ? void 0 : ae.call(n, e.focusedKey) : (K = n.getFirstKey) === null || K === void 0 ? void 0 : K.call(n, e.focusedKey)), x != null && ($.preventDefault(), M(x, m === "rtl" ? "last" : "first"));
        }
        break;
      case "Home":
        if (n.getFirstKey) {
          if (e.focusedKey === null && $.shiftKey) return;
          $.preventDefault();
          let x = n.getFirstKey(e.focusedKey, de($));
          e.setFocusedKey(x), x != null && (de($) && $.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(x) : f && e.replaceSelection(x));
        }
        break;
      case "End":
        if (n.getLastKey) {
          if (e.focusedKey === null && $.shiftKey) return;
          $.preventDefault();
          let x = n.getLastKey(e.focusedKey, de($));
          e.setFocusedKey(x), x != null && (de($) && $.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(x) : f && e.replaceSelection(x));
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow && e.focusedKey != null) {
          let x = n.getKeyPageBelow(e.focusedKey);
          x != null && ($.preventDefault(), M(x));
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove && e.focusedKey != null) {
          let x = n.getKeyPageAbove(e.focusedKey);
          x != null && ($.preventDefault(), M(x));
        }
        break;
      case "a":
        de($) && e.selectionMode === "multiple" && r !== !0 && ($.preventDefault(), e.selectAll());
        break;
      case "Escape":
        s === "clearSelection" && !u && e.selectedKeys.size !== 0 && ($.stopPropagation(), $.preventDefault(), e.clearSelection());
        break;
      case "Tab":
        if (!p) {
          if ($.shiftKey) l.current.focus();
          else {
            let x = Ol(l.current, {
              tabbable: !0
            }), L, J;
            do
              J = x.lastChild(), J && (L = J);
            while (J);
            L && !L.contains(document.activeElement) && ge(L);
          }
          break;
        }
    }
  }, k = a.useRef({
    top: 0,
    left: 0
  });
  ve(v, "scroll", b ? void 0 : () => {
    var $, E, M, h;
    k.current = {
      top: (M = ($ = v.current) === null || $ === void 0 ? void 0 : $.scrollTop) !== null && M !== void 0 ? M : 0,
      left: (h = (E = v.current) === null || E === void 0 ? void 0 : E.scrollLeft) !== null && h !== void 0 ? h : 0
    };
  });
  let B = ($) => {
    if (e.isFocused) {
      $.currentTarget.contains($.target) || e.setFocused(!1);
      return;
    }
    if ($.currentTarget.contains($.target)) {
      if (e.setFocused(!0), e.focusedKey == null) {
        var E, M;
        let j = (X) => {
          X != null && (e.setFocusedKey(X), f && !e.isSelected(X) && e.replaceSelection(X));
        }, q = $.relatedTarget;
        var h, I;
        q && $.currentTarget.compareDocumentPosition(q) & Node.DOCUMENT_POSITION_FOLLOWING ? j((h = e.lastSelectedKey) !== null && h !== void 0 ? h : (E = n.getLastKey) === null || E === void 0 ? void 0 : E.call(n)) : j((I = e.firstSelectedKey) !== null && I !== void 0 ? I : (M = n.getFirstKey) === null || M === void 0 ? void 0 : M.call(n));
      } else !b && v.current && (v.current.scrollTop = k.current.top, v.current.scrollLeft = k.current.left);
      if (e.focusedKey != null && v.current) {
        let j = De(l, e.focusedKey);
        j instanceof HTMLElement && (!j.contains(document.activeElement) && !c && ge(j), dt() === "keyboard" && gt(j, {
          containingElement: l.current
        }));
      }
    }
  }, A = ($) => {
    $.currentTarget.contains($.relatedTarget) || e.setFocused(!1);
  }, P = a.useRef(!1);
  ve(l, Vo, c ? ($) => {
    let { detail: E } = $;
    $.stopPropagation(), e.setFocused(!0), (E == null ? void 0 : E.focusStrategy) === "first" && (P.current = !0);
  } : void 0);
  let N = Ae(() => {
    var $, E;
    let M = (E = ($ = n.getFirstKey) === null || $ === void 0 ? void 0 : $.call(n)) !== null && E !== void 0 ? E : null;
    if (M == null) {
      let h = Je();
      Fn(l.current), ot(h, null), e.collection.size > 0 && (P.current = !1);
    } else
      e.setFocusedKey(M), P.current = !1;
  });
  vt(() => {
    P.current && N();
  }, [
    e.collection,
    N
  ]);
  let T = Ae(() => {
    e.collection.size > 0 && (P.current = !1);
  });
  vt(() => {
    T();
  }, [
    e.focusedKey,
    T
  ]), ve(l, Oo, c ? ($) => {
    var E;
    $.stopPropagation(), e.setFocused(!1), !((E = $.detail) === null || E === void 0) && E.clearFocusKey && e.setFocusedKey(null);
  } : void 0);
  const V = a.useRef(o), F = a.useRef(!1);
  a.useEffect(() => {
    if (V.current) {
      var $, E;
      let I = null;
      var M;
      o === "first" && (I = (M = ($ = n.getFirstKey) === null || $ === void 0 ? void 0 : $.call(n)) !== null && M !== void 0 ? M : null);
      var h;
      o === "last" && (I = (h = (E = n.getLastKey) === null || E === void 0 ? void 0 : E.call(n)) !== null && h !== void 0 ? h : null);
      let j = e.selectedKeys;
      if (j.size) {
        for (let q of j) if (e.canSelectItem(q)) {
          I = q;
          break;
        }
      }
      e.setFocused(!0), e.setFocusedKey(I), I == null && !c && l.current && Ge(l.current), e.collection.size > 0 && (V.current = !1, F.current = !0);
    }
  });
  let z = a.useRef(e.focusedKey), H = a.useRef(null);
  a.useEffect(() => {
    if (e.isFocused && e.focusedKey != null && (e.focusedKey !== z.current || F.current) && v.current && l.current) {
      let $ = dt(), E = De(l, e.focusedKey);
      if (!(E instanceof HTMLElement))
        return;
      ($ === "keyboard" || F.current) && (H.current && cancelAnimationFrame(H.current), H.current = requestAnimationFrame(() => {
        v.current && (Yt(v.current, E), $ !== "virtual" && gt(E, {
          containingElement: l.current
        }));
      }));
    }
    !c && e.isFocused && e.focusedKey == null && z.current != null && l.current && Ge(l.current), z.current = e.focusedKey, F.current = !1;
  }), a.useEffect(() => () => {
    H.current && cancelAnimationFrame(H.current);
  }, []), ve(l, "react-aria-focus-scope-restore", ($) => {
    $.preventDefault(), e.setFocused(!0);
  });
  let O = {
    onKeyDown: C,
    onFocus: B,
    onBlur: A,
    onMouseDown($) {
      v.current === $.target && $.preventDefault();
    }
  }, { typeSelectProps: Y } = Xo({
    keyboardDelegate: n,
    selectionManager: e
  });
  d || (O = Z(Y, O));
  let w;
  c || (w = e.focusedKey == null ? 0 : -1);
  let U = Uo(e.collection);
  return {
    collectionProps: Z(O, {
      tabIndex: w,
      "data-collection": U
    })
  };
}
function Zo(t) {
  let { id: e, selectionManager: n, key: l, ref: o, shouldSelectOnPressUp: i, shouldUseVirtualFocus: u, focus: r, isDisabled: s, onAction: f, allowsDifferentPressOrigin: d, linkBehavior: c = "action" } = t, p = Ke();
  e = xe(e);
  let b = (h) => {
    if (h.pointerType === "keyboard" && Ue(h)) n.toggleSelection(l);
    else {
      if (n.selectionMode === "none") return;
      if (n.isLink(l)) {
        if (c === "selection" && o.current) {
          let I = n.getItemProps(l);
          p.open(o.current, h, I.href, I.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return;
        } else if (c === "override" || c === "none") return;
      }
      n.selectionMode === "single" ? n.isSelected(l) && !n.disallowEmptySelection ? n.toggleSelection(l) : n.replaceSelection(l) : h && h.shiftKey ? n.extendSelection(l) : n.selectionBehavior === "toggle" || h && (de(h) || h.pointerType === "touch" || h.pointerType === "virtual") ? n.toggleSelection(l) : n.replaceSelection(l);
    }
  };
  a.useEffect(() => {
    l === n.focusedKey && n.isFocused && (u ? Fn(o.current) : r ? r() : document.activeElement !== o.current && o.current && Ge(o.current));
  }, [
    o,
    l,
    n.focusedKey,
    n.childFocusStrategy,
    n.isFocused,
    u
  ]), s = s || n.isDisabled(l);
  let v = {};
  !u && !s ? v = {
    tabIndex: l === n.focusedKey ? 0 : -1,
    onFocus(h) {
      h.target === o.current && n.setFocusedKey(l);
    }
  } : s && (v.onMouseDown = (h) => {
    h.preventDefault();
  });
  let g = n.isLink(l) && c === "override", m = f && t.UNSTABLE_itemBehavior === "action", y = n.isLink(l) && c !== "selection" && c !== "none", C = !s && n.canSelectItem(l) && !g && !m, k = (f || y) && !s, B = k && (n.selectionBehavior === "replace" ? !C : !C || n.isEmpty), A = k && C && n.selectionBehavior === "replace", P = B || A, N = a.useRef(null), T = P && C, V = a.useRef(!1), F = a.useRef(!1), z = n.getItemProps(l), H = (h) => {
    if (f) {
      var I;
      f(), (I = o.current) === null || I === void 0 || I.dispatchEvent(new CustomEvent("react-aria-item-action", {
        bubbles: !0
      }));
    }
    y && o.current && p.open(o.current, h, z.href, z.routerOptions);
  }, O = {
    ref: o
  };
  if (i ? (O.onPressStart = (h) => {
    N.current = h.pointerType, V.current = T, h.pointerType === "keyboard" && (!P || xt()) && b(h);
  }, d ? (O.onPressUp = B ? void 0 : (h) => {
    h.pointerType === "mouse" && C && b(h);
  }, O.onPress = B ? H : (h) => {
    h.pointerType !== "keyboard" && h.pointerType !== "mouse" && C && b(h);
  }) : O.onPress = (h) => {
    if (B || A && h.pointerType !== "mouse") {
      if (h.pointerType === "keyboard" && !yt()) return;
      H(h);
    } else h.pointerType !== "keyboard" && C && b(h);
  }) : (O.onPressStart = (h) => {
    N.current = h.pointerType, V.current = T, F.current = B, C && (h.pointerType === "mouse" && !B || h.pointerType === "keyboard" && (!k || xt())) && b(h);
  }, O.onPress = (h) => {
    (h.pointerType === "touch" || h.pointerType === "pen" || h.pointerType === "virtual" || h.pointerType === "keyboard" && P && yt() || h.pointerType === "mouse" && F.current) && (P ? H(h) : C && b(h));
  }), v["data-collection"] = Wo(n.collection), v["data-key"] = l, O.preventFocusOnPress = u, u && (O = Z(O, {
    onPressStart(h) {
      h.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(l));
    },
    onPress(h) {
      h.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(l));
    }
  })), z)
    for (let h of [
      "onPressStart",
      "onPressEnd",
      "onPressChange",
      "onPress",
      "onPressUp",
      "onClick"
    ]) z[h] && (O[h] = Qe(O[h], z[h]));
  let { pressProps: Y, isPressed: w } = Ye(O), U = A ? (h) => {
    N.current === "mouse" && (h.stopPropagation(), h.preventDefault(), H(h));
  } : void 0, { longPressProps: $ } = Tn({
    isDisabled: !T,
    onLongPress(h) {
      h.pointerType === "touch" && (b(h), n.setSelectionBehavior("toggle"));
    }
  }), E = (h) => {
    N.current === "touch" && V.current && h.preventDefault();
  }, M = c !== "none" && n.isLink(l) ? (h) => {
    Vl.isOpening || h.preventDefault();
  } : void 0;
  return {
    itemProps: Z(
      v,
      C || B || u && !s ? Y : {},
      T ? $ : {},
      {
        onDoubleClick: U,
        onDragStartCapture: E,
        onClick: M,
        id: e
      },
      // Prevent DOM focus from moving on mouse down when using virtual focus
      u ? {
        onMouseDown: (h) => h.preventDefault()
      } : void 0
    ),
    isPressed: w,
    isSelected: n.isSelected(l),
    isFocused: n.isFocused && n.focusedKey === l,
    isDisabled: s,
    allowsSelection: C,
    hasAction: P
  };
}
function yt() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === "Enter";
}
function xt() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === " " || (t == null ? void 0 : t.code) === "Space";
}
class mt {
  getItemRect(e) {
    let n = this.ref.current;
    if (!n) return null;
    let l = e != null ? De(this.ref, e) : null;
    if (!l) return null;
    let o = n.getBoundingClientRect(), i = l.getBoundingClientRect();
    return {
      x: i.left - o.left - n.clientLeft + n.scrollLeft,
      y: i.top - o.top - n.clientTop + n.scrollTop,
      width: i.width,
      height: i.height
    };
  }
  getContentSize() {
    let e = this.ref.current;
    var n, l;
    return {
      width: (n = e == null ? void 0 : e.scrollWidth) !== null && n !== void 0 ? n : 0,
      height: (l = e == null ? void 0 : e.scrollHeight) !== null && l !== void 0 ? l : 0
    };
  }
  getVisibleRect() {
    let e = this.ref.current;
    var n, l, o, i;
    return {
      x: (n = e == null ? void 0 : e.scrollLeft) !== null && n !== void 0 ? n : 0,
      y: (l = e == null ? void 0 : e.scrollTop) !== null && l !== void 0 ? l : 0,
      width: (o = e == null ? void 0 : e.clientWidth) !== null && o !== void 0 ? o : 0,
      height: (i = e == null ? void 0 : e.clientHeight) !== null && i !== void 0 ? i : 0
    };
  }
  constructor(e) {
    this.ref = e;
  }
}
class it {
  isDisabled(e) {
    var n;
    return this.disabledBehavior === "all" && (((n = e.props) === null || n === void 0 ? void 0 : n.isDisabled) || this.disabledKeys.has(e.key));
  }
  findNextNonDisabled(e, n) {
    let l = e;
    for (; l != null; ) {
      let o = this.collection.getItem(l);
      if ((o == null ? void 0 : o.type) === "item" && !this.isDisabled(o)) return l;
      l = n(l);
    }
    return null;
  }
  getNextKey(e) {
    let n = e;
    return n = this.collection.getKeyAfter(n), this.findNextNonDisabled(n, (l) => this.collection.getKeyAfter(l));
  }
  getPreviousKey(e) {
    let n = e;
    return n = this.collection.getKeyBefore(n), this.findNextNonDisabled(n, (l) => this.collection.getKeyBefore(l));
  }
  findKey(e, n, l) {
    let o = e, i = this.layoutDelegate.getItemRect(o);
    if (!i || o == null) return null;
    let u = i;
    do {
      if (o = n(o), o == null) break;
      i = this.layoutDelegate.getItemRect(o);
    } while (i && l(u, i) && o != null);
    return o;
  }
  isSameRow(e, n) {
    return e.y === n.y || e.x !== n.x;
  }
  isSameColumn(e, n) {
    return e.x === n.x || e.y !== n.y;
  }
  getKeyBelow(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (n) => this.getNextKey(n), this.isSameRow) : this.getNextKey(e);
  }
  getKeyAbove(e) {
    return this.layout === "grid" && this.orientation === "vertical" ? this.findKey(e, (n) => this.getPreviousKey(n), this.isSameRow) : this.getPreviousKey(e);
  }
  getNextColumn(e, n) {
    return n ? this.getPreviousKey(e) : this.getNextKey(e);
  }
  getKeyRightOf(e) {
    let n = this.direction === "ltr" ? "getKeyRightOf" : "getKeyLeftOf";
    return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (l) => this.layoutDelegate[n](l))) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "rtl") : this.findKey(e, (l) => this.getNextColumn(l, this.direction === "rtl"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "rtl") : null;
  }
  getKeyLeftOf(e) {
    let n = this.direction === "ltr" ? "getKeyLeftOf" : "getKeyRightOf";
    return this.layoutDelegate[n] ? (e = this.layoutDelegate[n](e), this.findNextNonDisabled(e, (l) => this.layoutDelegate[n](l))) : this.layout === "grid" ? this.orientation === "vertical" ? this.getNextColumn(e, this.direction === "ltr") : this.findKey(e, (l) => this.getNextColumn(l, this.direction === "ltr"), this.isSameColumn) : this.orientation === "horizontal" ? this.getNextColumn(e, this.direction === "ltr") : null;
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    return this.findNextNonDisabled(e, (n) => this.collection.getKeyAfter(n));
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    return this.findNextNonDisabled(e, (n) => this.collection.getKeyBefore(n));
  }
  getKeyPageAbove(e) {
    let n = this.ref.current, l = this.layoutDelegate.getItemRect(e);
    if (!l) return null;
    if (n && !He(n)) return this.getFirstKey();
    let o = e;
    if (this.orientation === "horizontal") {
      let i = Math.max(0, l.x + l.width - this.layoutDelegate.getVisibleRect().width);
      for (; l && l.x > i && o != null; )
        o = this.getKeyAbove(o), l = o == null ? null : this.layoutDelegate.getItemRect(o);
    } else {
      let i = Math.max(0, l.y + l.height - this.layoutDelegate.getVisibleRect().height);
      for (; l && l.y > i && o != null; )
        o = this.getKeyAbove(o), l = o == null ? null : this.layoutDelegate.getItemRect(o);
    }
    return o ?? this.getFirstKey();
  }
  getKeyPageBelow(e) {
    let n = this.ref.current, l = this.layoutDelegate.getItemRect(e);
    if (!l) return null;
    if (n && !He(n)) return this.getLastKey();
    let o = e;
    if (this.orientation === "horizontal") {
      let i = Math.min(this.layoutDelegate.getContentSize().width, l.y - l.width + this.layoutDelegate.getVisibleRect().width);
      for (; l && l.x < i && o != null; )
        o = this.getKeyBelow(o), l = o == null ? null : this.layoutDelegate.getItemRect(o);
    } else {
      let i = Math.min(this.layoutDelegate.getContentSize().height, l.y - l.height + this.layoutDelegate.getVisibleRect().height);
      for (; l && l.y < i && o != null; )
        o = this.getKeyBelow(o), l = o == null ? null : this.layoutDelegate.getItemRect(o);
    }
    return o ?? this.getLastKey();
  }
  getKeyForSearch(e, n) {
    if (!this.collator) return null;
    let l = this.collection, o = n || this.getFirstKey();
    for (; o != null; ) {
      let i = l.getItem(o);
      if (!i) return null;
      let u = i.textValue.slice(0, e.length);
      if (i.textValue && this.collator.compare(u, e) === 0) return o;
      o = this.getNextKey(o);
    }
    return null;
  }
  constructor(...e) {
    if (e.length === 1) {
      let n = e[0];
      this.collection = n.collection, this.ref = n.ref, this.collator = n.collator, this.disabledKeys = n.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = n.disabledBehavior || "all", this.orientation = n.orientation || "vertical", this.direction = n.direction, this.layout = n.layout || "stack", this.layoutDelegate = n.layoutDelegate || new mt(n.ref);
    } else
      this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new mt(this.ref);
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function Jo(t) {
  let { selectionManager: e, collection: n, disabledKeys: l, ref: o, keyboardDelegate: i, layoutDelegate: u } = t, r = lt({
    usage: "search",
    sensitivity: "base"
  }), s = e.disabledBehavior, f = a.useMemo(() => i || new it({
    collection: n,
    disabledKeys: l,
    disabledBehavior: s,
    ref: o,
    collator: r,
    layoutDelegate: u
  }), [
    i,
    u,
    n,
    l,
    o,
    r,
    s
  ]), { collectionProps: d } = Ln({
    ...t,
    ref: o,
    selectionManager: e,
    keyboardDelegate: f
  });
  return {
    listProps: d
  };
}
function Qo(t, e, n) {
  let l = se(t, {
    labelable: !0
  }), o = t.selectionBehavior || "toggle", i = t.linkBehavior || (o === "replace" ? "action" : "override");
  o === "toggle" && i === "action" && (i = "override");
  let { listProps: u } = Jo({
    ...t,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: r } = jl({
    onFocusWithin: t.onFocus,
    onBlurWithin: t.onBlur,
    onFocusWithinChange: t.onFocusChange
  }), s = xe(t.id);
  ke.set(e, {
    id: s,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp,
    shouldFocusOnHover: t.shouldFocusOnHover,
    isVirtualized: t.isVirtualized,
    onAction: t.onAction,
    linkBehavior: i,
    // @ts-ignore
    UNSTABLE_itemBehavior: t.UNSTABLE_itemBehavior
  });
  let { labelProps: f, fieldProps: d } = Nl({
    ...t,
    id: s,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: f,
    listBoxProps: Z(l, r, e.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...Z(d, u)
    })
  };
}
class _o {
  build(e, n) {
    return this.context = n, Ct(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: n, items: l } = e;
    if (D.isValidElement(n) && n.type === D.Fragment) yield* this.iterateCollection({
      children: n.props.children,
      items: l
    });
    else if (typeof n == "function") {
      if (!l) throw new Error("props.children was a function but props.items is missing");
      let o = 0;
      for (let i of l)
        yield* this.getFullNode({
          value: i,
          index: o
        }, {
          renderer: n
        }), o++;
    } else {
      let o = [];
      D.Children.forEach(n, (u) => {
        u && o.push(u);
      });
      let i = 0;
      for (let u of o) {
        let r = this.getFullNode({
          element: u,
          index: i
        }, {});
        for (let s of r)
          i++, yield s;
      }
    }
  }
  getKey(e, n, l, o) {
    if (e.key != null) return e.key;
    if (n.type === "cell" && n.key != null) return `${o}${n.key}`;
    let i = n.value;
    if (i != null) {
      var u;
      let r = (u = i.key) !== null && u !== void 0 ? u : i.id;
      if (r == null) throw new Error("No key found for item");
      return r;
    }
    return o ? `${o}.${n.index}` : `$.${n.index}`;
  }
  getChildState(e, n) {
    return {
      renderer: n.renderer || e.renderer
    };
  }
  *getFullNode(e, n, l, o) {
    if (D.isValidElement(e.element) && e.element.type === D.Fragment) {
      let m = [];
      D.Children.forEach(e.element.props.children, (C) => {
        m.push(C);
      });
      var i;
      let y = (i = e.index) !== null && i !== void 0 ? i : 0;
      for (const C of m) yield* this.getFullNode({
        element: C,
        index: y++
      }, n, l, o);
      return;
    }
    let u = e.element;
    if (!u && e.value && n && n.renderer) {
      let m = this.cache.get(e.value);
      if (m && (!m.shouldInvalidate || !m.shouldInvalidate(this.context))) {
        m.index = e.index, m.parentKey = o ? o.key : null, yield m;
        return;
      }
      u = n.renderer(e.value);
    }
    if (D.isValidElement(u)) {
      let m = u.type;
      if (typeof m != "function" && typeof m.getCollectionNode != "function") {
        let B = u.type;
        throw new Error(`Unknown element <${B}> in collection.`);
      }
      let y = m.getCollectionNode(u.props, this.context);
      var r;
      let C = (r = e.index) !== null && r !== void 0 ? r : 0, k = y.next();
      for (; !k.done && k.value; ) {
        let B = k.value;
        e.index = C;
        var s;
        let A = (s = B.key) !== null && s !== void 0 ? s : null;
        A == null && (A = B.element ? null : this.getKey(u, e, n, l));
        let N = [
          ...this.getFullNode({
            ...B,
            key: A,
            index: C,
            wrapper: ei(e.wrapper, B.wrapper)
          }, this.getChildState(n, B), l ? `${l}${u.key}` : u.key, o)
        ];
        for (let T of N) {
          var f, d;
          T.value = (d = (f = B.value) !== null && f !== void 0 ? f : e.value) !== null && d !== void 0 ? d : null, T.value && this.cache.set(T.value, T);
          var c;
          if (e.type && T.type !== e.type) throw new Error(`Unsupported type <${Ve(T.type)}> in <${Ve((c = o == null ? void 0 : o.type) !== null && c !== void 0 ? c : "unknown parent type")}>. Only <${Ve(e.type)}> is supported.`);
          C++, yield T;
        }
        k = y.next(N);
      }
      return;
    }
    if (e.key == null || e.type == null) return;
    let p = this;
    var b, v;
    let g = {
      type: e.type,
      props: e.props,
      key: e.key,
      parentKey: o ? o.key : null,
      value: (b = e.value) !== null && b !== void 0 ? b : null,
      level: o ? o.level + 1 : 0,
      index: e.index,
      rendered: e.rendered,
      textValue: (v = e.textValue) !== null && v !== void 0 ? v : "",
      "aria-label": e["aria-label"],
      wrapper: e.wrapper,
      shouldInvalidate: e.shouldInvalidate,
      hasChildNodes: e.hasChildNodes || !1,
      childNodes: Ct(function* () {
        if (!e.hasChildNodes || !e.childNodes) return;
        let m = 0;
        for (let y of e.childNodes()) {
          y.key != null && (y.key = `${g.key}${y.key}`);
          let C = p.getFullNode({
            ...y,
            index: m
          }, p.getChildState(n, y), g.key, g);
          for (let k of C)
            m++, yield k;
        }
      })
    };
    yield g;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function Ct(t) {
  let e = [], n = null;
  return {
    *[Symbol.iterator]() {
      for (let l of e) yield l;
      n || (n = t());
      for (let l of n)
        e.push(l), yield l;
    }
  };
}
function ei(t, e) {
  if (t && e) return (n) => t(e(n));
  if (t) return t;
  if (e) return e;
}
function Ve(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function ti(t, e, n) {
  let l = a.useMemo(() => new _o(), []), { children: o, items: i, collection: u } = t;
  return a.useMemo(() => {
    if (u) return u;
    let s = l.build({
      children: o,
      items: i
    }, n);
    return e(s);
  }, [
    l,
    o,
    i,
    u,
    n,
    e
  ]);
}
function Be(t, e) {
  return typeof e.getChildren == "function" ? e.getChildren(t.key) : t.childNodes;
}
function ni(t) {
  return li(t);
}
function li(t, e) {
  for (let n of t)
    return n;
}
function je(t, e, n) {
  if (e.parentKey === n.parentKey) return e.index - n.index;
  let l = [
    ...St(t, e),
    e
  ], o = [
    ...St(t, n),
    n
  ], i = l.slice(0, o.length).findIndex((u, r) => u !== o[r]);
  return i !== -1 ? (e = l[i], n = o[i], e.index - n.index) : l.findIndex((u) => u === n) >= 0 ? 1 : (o.findIndex((u) => u === e) >= 0, -1);
}
function St(t, e) {
  let n = [], l = e;
  for (; (l == null ? void 0 : l.parentKey) != null; )
    l = t.getItem(l.parentKey), l && n.unshift(l);
  return n;
}
const Dt = /* @__PURE__ */ new WeakMap();
function Rn(t) {
  let e = Dt.get(t);
  if (e != null) return e;
  let n = 0, l = (o) => {
    for (let i of o)
      i.type === "section" ? l(Be(i, t)) : i.type === "item" && n++;
  };
  return l(t), Dt.set(t, n), n;
}
function oi(t, e, n) {
  var l, o;
  let { key: i } = t, u = ke.get(e);
  var r;
  let s = (r = t.isDisabled) !== null && r !== void 0 ? r : e.selectionManager.isDisabled(i);
  var f;
  let d = (f = t.isSelected) !== null && f !== void 0 ? f : e.selectionManager.isSelected(i);
  var c;
  let p = (c = t.shouldSelectOnPressUp) !== null && c !== void 0 ? c : u == null ? void 0 : u.shouldSelectOnPressUp;
  var b;
  let v = (b = t.shouldFocusOnHover) !== null && b !== void 0 ? b : u == null ? void 0 : u.shouldFocusOnHover;
  var g;
  let m = (g = t.shouldUseVirtualFocus) !== null && g !== void 0 ? g : u == null ? void 0 : u.shouldUseVirtualFocus;
  var y;
  let C = (y = t.isVirtualized) !== null && y !== void 0 ? y : u == null ? void 0 : u.isVirtualized, k = ft(), B = ft(), A = {
    role: "option",
    "aria-disabled": s || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? d : void 0
  };
  zl() && Hl() || (A["aria-label"] = t["aria-label"], A["aria-labelledby"] = k, A["aria-describedby"] = B);
  let P = e.collection.getItem(i);
  if (C) {
    let $ = Number(P == null ? void 0 : P.index);
    A["aria-posinset"] = Number.isNaN($) ? void 0 : $ + 1, A["aria-setsize"] = Rn(e.collection);
  }
  let N = u != null && u.onAction ? () => {
    var $;
    return u == null || ($ = u.onAction) === null || $ === void 0 ? void 0 : $.call(u, i);
  } : void 0, T = Mn(e, i), { itemProps: V, isPressed: F, isFocused: z, hasAction: H, allowsSelection: O } = Zo({
    selectionManager: e.selectionManager,
    key: i,
    ref: n,
    shouldSelectOnPressUp: p,
    allowsDifferentPressOrigin: p && v,
    isVirtualized: C,
    shouldUseVirtualFocus: m,
    isDisabled: s,
    onAction: N || !(P == null || (l = P.props) === null || l === void 0) && l.onAction ? Qe(P == null || (o = P.props) === null || o === void 0 ? void 0 : o.onAction, N) : void 0,
    linkBehavior: u == null ? void 0 : u.linkBehavior,
    // @ts-ignore
    UNSTABLE_itemBehavior: u == null ? void 0 : u.UNSTABLE_itemBehavior,
    id: T
  }), { hoverProps: Y } = _e({
    isDisabled: s || !v,
    onHoverStart() {
      pt() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(i));
    }
  }), w = se(P == null ? void 0 : P.props);
  delete w.id;
  let U = Mt(P == null ? void 0 : P.props);
  return {
    optionProps: {
      ...A,
      ...Z(w, V, Y, U),
      id: T
    },
    labelProps: {
      id: k
    },
    descriptionProps: {
      id: B
    },
    isFocused: z,
    isFocusVisible: z && e.selectionManager.isFocused && pt(),
    isSelected: d,
    isDisabled: s,
    isPressed: F,
    allowsSelection: O,
    hasAction: H
  };
}
function ii(t) {
  let { heading: e, "aria-label": n } = t, l = xe();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: e ? {
      // Techincally, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: l,
      role: "presentation"
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": e ? l : void 0
    }
  };
}
var On = {};
On = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var Vn = {};
Vn = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var jn = {};
jn = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var Nn = {};
Nn = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var zn = {};
zn = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var Hn = {};
Hn = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var Gn = {};
Gn = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Un = {};
Un = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var Wn = {};
Wn = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var qn = {};
qn = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var Xn = {};
Xn = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Yn = {};
Yn = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var Zn = {};
Zn = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Jn = {};
Jn = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var Qn = {};
Qn = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var _n = {};
_n = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var el = {};
el = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var tl = {};
tl = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var nl = {};
nl = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var ll = {};
ll = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var ol = {};
ol = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var il = {};
il = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var ul = {};
ul = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var rl = {};
rl = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var sl = {};
sl = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var al = {};
al = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var cl = {};
cl = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var dl = {};
dl = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var fl = {};
fl = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var pl = {};
pl = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var hl = {};
hl = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var bl = {};
bl = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var vl = {};
vl = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var $l = {};
$l = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
var gl = {};
gl = {
  "ar-AE": On,
  "bg-BG": Vn,
  "cs-CZ": jn,
  "da-DK": Nn,
  "de-DE": zn,
  "el-GR": Hn,
  "en-US": Gn,
  "es-ES": Un,
  "et-EE": Wn,
  "fi-FI": qn,
  "fr-FR": Xn,
  "he-IL": Yn,
  "hr-HR": Zn,
  "hu-HU": Jn,
  "it-IT": Qn,
  "ja-JP": _n,
  "ko-KR": el,
  "lt-LT": tl,
  "lv-LV": nl,
  "nb-NO": ll,
  "nl-NL": ol,
  "pl-PL": il,
  "pt-BR": ul,
  "pt-PT": rl,
  "ro-RO": sl,
  "ru-RU": al,
  "sk-SK": cl,
  "sl-SI": dl,
  "sr-SP": fl,
  "sv-SE": pl,
  "tr-TR": hl,
  "uk-UA": bl,
  "zh-CN": vl,
  "zh-TW": $l
};
function ui(t) {
  return t && t.__esModule ? t.default : t;
}
function ri(t, e, n) {
  let { type: l = "menu", isDisabled: o, trigger: i = "press" } = t, u = xe(), { triggerProps: r, overlayProps: s } = Gl({
    type: l
  }, e, n), f = (b) => {
    if (!o && !(i === "longPress" && !b.altKey) && n && n.current)
      switch (b.key) {
        case "Enter":
        case " ":
          if (i === "longPress" || b.isDefaultPrevented()) return;
        // fallthrough
        case "ArrowDown":
          "continuePropagation" in b || b.stopPropagation(), b.preventDefault(), e.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in b || b.stopPropagation(), b.preventDefault(), e.toggle("last");
          break;
        default:
          "continuePropagation" in b && b.continuePropagation();
      }
  }, d = It(ui(gl), "@react-aria/menu"), { longPressProps: c } = Tn({
    isDisabled: o || i !== "longPress",
    accessibilityDescription: d.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), p = {
    preventFocusOnPress: !0,
    onPressStart(b) {
      b.pointerType !== "touch" && b.pointerType !== "keyboard" && !o && (ge(b.target), e.open(b.pointerType === "virtual" ? "first" : null));
    },
    onPress(b) {
      b.pointerType === "touch" && !o && (ge(b.target), e.toggle());
    }
  };
  return delete r.onPress, {
    // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
    menuTriggerProps: {
      ...r,
      ...i === "press" ? p : c,
      id: u,
      onKeyDown: f
    },
    menuProps: {
      ...s,
      "aria-labelledby": u,
      autoFocus: e.focusStrategy || !0,
      onClose: e.close
    }
  };
}
function si(t) {
  return t && t.__esModule ? t.default : t;
}
function ai(t, e) {
  let { buttonRef: n, popoverRef: l, inputRef: o, listBoxRef: i, keyboardDelegate: u, layoutDelegate: r, shouldFocusWrap: s, isReadOnly: f, isDisabled: d } = t, c = a.useRef(null);
  n = n ?? c;
  let p = It(si(wn), "@react-aria/combobox"), { menuTriggerProps: b, menuProps: v } = ri({
    type: "listbox",
    isDisabled: d || f
  }, e, n);
  ke.set(e, {
    id: v.id
  });
  let { collection: g } = e, { disabledKeys: m } = e.selectionManager, y = a.useMemo(() => u || new it({
    collection: g,
    disabledKeys: m,
    ref: i,
    layoutDelegate: r
  }), [
    u,
    r,
    g,
    m,
    i
  ]), { collectionProps: C } = Ln({
    selectionManager: e.selectionManager,
    keyboardDelegate: y,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: s,
    ref: o,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), k = Ke(), B = (K) => {
    if (!K.nativeEvent.isComposing)
      switch (K.key) {
        case "Enter":
        case "Tab":
          if (e.isOpen && K.key === "Enter" && K.preventDefault(), e.isOpen && i.current && e.selectionManager.focusedKey != null) {
            let x = e.collection.getItem(e.selectionManager.focusedKey);
            if (x != null && x.props.href) {
              let L = i.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
              K.key === "Enter" && L instanceof HTMLAnchorElement && k.open(L, K, x.props.href, x.props.routerOptions), e.close();
              break;
            } else if (x != null && x.props.onAction) {
              x.props.onAction(), e.close();
              break;
            }
          }
          e.commit();
          break;
        case "Escape":
          (e.selectedKey !== null || e.inputValue === "" || t.allowsCustomValue) && K.continuePropagation(), e.revert();
          break;
        case "ArrowDown":
          e.open("first", "manual");
          break;
        case "ArrowUp":
          e.open("last", "manual");
          break;
        case "ArrowLeft":
        case "ArrowRight":
          e.selectionManager.setFocusedKey(null);
          break;
      }
  }, A = (K) => {
    var x;
    let L = (n == null ? void 0 : n.current) && n.current === K.relatedTarget, J = (x = l.current) === null || x === void 0 ? void 0 : x.contains(K.relatedTarget);
    L || J || (t.onBlur && t.onBlur(K), e.setFocused(!1));
  }, P = (K) => {
    e.isFocused || (t.onFocus && t.onFocus(K), e.setFocused(!0));
  }, { isInvalid: N, validationErrors: T, validationDetails: V } = e.displayValidation, { labelProps: F, inputProps: z, descriptionProps: H, errorMessageProps: O } = Ul({
    ...t,
    onChange: e.setInputValue,
    onKeyDown: f ? t.onKeyDown : Qe(e.isOpen && C.onKeyDown, B, t.onKeyDown),
    onBlur: A,
    value: e.inputValue,
    defaultValue: e.defaultInputValue,
    onFocus: P,
    autoComplete: "off",
    validate: void 0,
    [Wl]: e
  }, o), Y = (K) => {
    if (K.pointerType === "touch") {
      var x;
      (x = o.current) === null || x === void 0 || x.focus(), e.toggle(null, "manual");
    }
  }, w = (K) => {
    if (K.pointerType !== "touch") {
      var x;
      (x = o.current) === null || x === void 0 || x.focus(), e.toggle(K.pointerType === "keyboard" || K.pointerType === "virtual" ? "first" : null, "manual");
    }
  }, U = ht({
    id: b.id,
    "aria-label": p.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || F.id
  }), $ = ht({
    id: v.id,
    "aria-label": p.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || F.id
  }), E = a.useRef(0), M = (K) => {
    if (d || f) return;
    if (K.timeStamp - E.current < 500) {
      var x;
      K.preventDefault(), (x = o.current) === null || x === void 0 || x.focus();
      return;
    }
    let L = K.target.getBoundingClientRect(), J = K.changedTouches[0], ue = Math.ceil(L.left + 0.5 * L.width), Fe = Math.ceil(L.top + 0.5 * L.height);
    if (J.clientX === ue && J.clientY === Fe) {
      var he;
      K.preventDefault(), (he = o.current) === null || he === void 0 || he.focus(), e.toggle(null, "manual"), E.current = K.timeStamp;
    }
  }, h = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var I;
  let j = (I = h == null ? void 0 : h.parentKey) !== null && I !== void 0 ? I : null;
  var q;
  let X = (q = e.selectionManager.focusedKey) !== null && q !== void 0 ? q : null, ne = a.useRef(j), _ = a.useRef(X);
  a.useEffect(() => {
    if (Ce() && h != null && X != null && X !== _.current) {
      let x = e.selectionManager.isSelected(X), L = j != null ? e.collection.getItem(j) : null, J = (L == null ? void 0 : L["aria-label"]) || (typeof (L == null ? void 0 : L.rendered) == "string" ? L.rendered : "") || "";
      var K;
      let ue = p.format("focusAnnouncement", {
        isGroupChange: (K = L && j !== ne.current) !== null && K !== void 0 ? K : !1,
        groupTitle: J,
        groupCount: L ? [
          ...Be(L, e.collection)
        ].length : 0,
        optionText: h["aria-label"] || h.textValue || "",
        isSelected: x
      });
      Le(ue);
    }
    ne.current = j, _.current = X;
  });
  let ee = Rn(e.collection), oe = a.useRef(ee), ie = a.useRef(e.isOpen);
  a.useEffect(() => {
    let K = e.isOpen !== ie.current && (e.selectionManager.focusedKey == null || Ce());
    if (e.isOpen && (K || ee !== oe.current)) {
      let x = p.format("countAnnouncement", {
        optionCount: ee
      });
      Le(x);
    }
    oe.current = ee, ie.current = e.isOpen;
  });
  let ae = a.useRef(e.selectedKey);
  return a.useEffect(() => {
    if (Ce() && e.isFocused && e.selectedItem && e.selectedKey !== ae.current) {
      let K = e.selectedItem["aria-label"] || e.selectedItem.textValue || "", x = p.format("selectedAnnouncement", {
        optionText: K
      });
      Le(x);
    }
    ae.current = e.selectedKey;
  }), a.useEffect(() => {
    if (e.isOpen) return ql([
      o.current,
      l.current
    ].filter((K) => K != null));
  }, [
    e.isOpen,
    o,
    l
  ]), To(() => {
    !h && o.current && Je(Ze(o.current)) === o.current && ot(o.current, null);
  }, [
    h
  ]), ve(i, "react-aria-item-action", e.isOpen ? () => {
    e.close();
  } : void 0), {
    labelProps: F,
    buttonProps: {
      ...b,
      ...U,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      onPress: Y,
      onPressStart: w,
      isDisabled: d || f
    },
    inputProps: Z(z, {
      role: "combobox",
      "aria-expanded": b["aria-expanded"],
      "aria-controls": e.isOpen ? v.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": h ? Mn(e, h.key) : void 0,
      onTouchEnd: M,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: Z(v, $, {
      autoFocus: e.focusStrategy || !0,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection",
      UNSTABLE_itemBehavior: "action"
    }),
    descriptionProps: H,
    errorMessageProps: O,
    isInvalid: N,
    validationErrors: T,
    validationDetails: V
  };
}
class yl {
  *[Symbol.iterator]() {
    let e = this.firstChild;
    for (; e; )
      yield e, e = e.nextSibling;
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(e) {
    this._firstChild = e, this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(e) {
    this._lastChild = e, this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(e) {
    this._previousSibling = e, this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(e) {
    this._nextSibling = e, this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(e) {
    this._parentNode = e, this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    var e;
    return ((e = this.parentNode) === null || e === void 0 ? void 0 : e.isConnected) || !1;
  }
  invalidateChildIndices(e) {
    (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || e.index < this._minInvalidChildIndex.index) && (this._minInvalidChildIndex = e, this.ownerDocument.markDirty(this));
  }
  updateChildIndices() {
    let e = this._minInvalidChildIndex;
    for (; e; )
      e.index = e.previousSibling ? e.previousSibling.index + 1 : 0, e = e.nextSibling;
    this._minInvalidChildIndex = null;
  }
  appendChild(e) {
    e.parentNode && e.parentNode.removeChild(e), this.firstChild == null && (this.firstChild = e), this.lastChild ? (this.lastChild.nextSibling = e, e.index = this.lastChild.index + 1, e.previousSibling = this.lastChild) : (e.previousSibling = null, e.index = 0), e.parentNode = this, e.nextSibling = null, this.lastChild = e, this.ownerDocument.markDirty(this), this.isConnected && this.ownerDocument.queueUpdate();
  }
  insertBefore(e, n) {
    if (n == null) return this.appendChild(e);
    e.parentNode && e.parentNode.removeChild(e), e.nextSibling = n, e.previousSibling = n.previousSibling, e.index = n.index - 1, this.firstChild === n ? this.firstChild = e : n.previousSibling && (n.previousSibling.nextSibling = e), n.previousSibling = e, e.parentNode = n.parentNode, this.invalidateChildIndices(e), this.isConnected && this.ownerDocument.queueUpdate();
  }
  removeChild(e) {
    e.parentNode === this && (this._minInvalidChildIndex === e && (this._minInvalidChildIndex = null), e.nextSibling && (this.invalidateChildIndices(e.nextSibling), e.nextSibling.previousSibling = e.previousSibling), e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling), this.firstChild === e && (this.firstChild = e.nextSibling), this.lastChild === e && (this.lastChild = e.previousSibling), e.parentNode = null, e.nextSibling = null, e.previousSibling = null, e.index = 0, this.ownerDocument.markDirty(e), this.isConnected && this.ownerDocument.queueUpdate());
  }
  addEventListener() {
  }
  removeEventListener() {
  }
  get previousVisibleSibling() {
    let e = this.previousSibling;
    for (; e && e.isHidden; ) e = e.previousSibling;
    return e;
  }
  get nextVisibleSibling() {
    let e = this.nextSibling;
    for (; e && e.isHidden; ) e = e.nextSibling;
    return e;
  }
  get firstVisibleChild() {
    let e = this.firstChild;
    for (; e && e.isHidden; ) e = e.nextSibling;
    return e;
  }
  get lastVisibleChild() {
    let e = this.lastChild;
    for (; e && e.isHidden; ) e = e.previousSibling;
    return e;
  }
  constructor(e) {
    this._firstChild = null, this._lastChild = null, this._previousSibling = null, this._nextSibling = null, this._parentNode = null, this._minInvalidChildIndex = null, this.ownerDocument = e;
  }
}
class fe extends yl {
  get index() {
    return this._index;
  }
  set index(e) {
    this._index = e, this.ownerDocument.markDirty(this);
  }
  get level() {
    var e;
    return this.parentNode instanceof fe ? this.parentNode.level + (((e = this.node) === null || e === void 0 ? void 0 : e.type) === "item" ? 1 : 0) : 0;
  }
  /**
  * Lazily gets a mutable instance of a Node. If the node has already
  * been cloned during this update cycle, it just returns the existing one.
  */
  getMutableNode() {
    return this.node == null ? null : (this.isMutated || (this.node = this.node.clone(), this.isMutated = !0), this.ownerDocument.markDirty(this), this.node);
  }
  updateNode() {
    var e, n, l, o, i, u, r, s;
    let f = this.nextVisibleSibling, d = this.getMutableNode();
    if (d != null) {
      d.index = this.index, d.level = this.level;
      var c;
      d.parentKey = this.parentNode instanceof fe && (c = (e = this.parentNode.node) === null || e === void 0 ? void 0 : e.key) !== null && c !== void 0 ? c : null;
      var p;
      d.prevKey = (p = (l = this.previousVisibleSibling) === null || l === void 0 || (n = l.node) === null || n === void 0 ? void 0 : n.key) !== null && p !== void 0 ? p : null;
      var b;
      d.nextKey = (b = f == null || (o = f.node) === null || o === void 0 ? void 0 : o.key) !== null && b !== void 0 ? b : null, d.hasChildNodes = !!this.firstChild;
      var v;
      d.firstChildKey = (v = (u = this.firstVisibleChild) === null || u === void 0 || (i = u.node) === null || i === void 0 ? void 0 : i.key) !== null && v !== void 0 ? v : null;
      var g;
      if (d.lastChildKey = (g = (s = this.lastVisibleChild) === null || s === void 0 || (r = s.node) === null || r === void 0 ? void 0 : r.key) !== null && g !== void 0 ? g : null, (d.colSpan != null || d.colIndex != null) && f) {
        var m, y;
        let C = ((m = d.colIndex) !== null && m !== void 0 ? m : d.index) + ((y = d.colSpan) !== null && y !== void 0 ? y : 1);
        if (f.node != null && C !== f.node.colIndex) {
          let k = f.getMutableNode();
          k.colIndex = C;
        }
      }
    }
  }
  setProps(e, n, l, o, i) {
    let u, { value: r, textValue: s, id: f, ...d } = e;
    if (this.node == null ? (u = new l(f ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = u) : u = this.getMutableNode(), d.ref = n, u.props = d, u.rendered = o, u.render = i, u.value = r, u.textValue = s || (typeof d.children == "string" ? d.children : "") || e["aria-label"] || "", f != null && f !== u.key) throw new Error("Cannot change the id of an item");
    d.colSpan != null && (u.colSpan = d.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
  }
  get style() {
    let e = this;
    return {
      get display() {
        return e.isHidden ? "none" : "";
      },
      set display(n) {
        let l = n === "none";
        if (e.isHidden !== l) {
          var o, i;
          (((o = e.parentNode) === null || o === void 0 ? void 0 : o.firstVisibleChild) === e || ((i = e.parentNode) === null || i === void 0 ? void 0 : i.lastVisibleChild) === e) && e.ownerDocument.markDirty(e.parentNode);
          let u = e.previousVisibleSibling, r = e.nextVisibleSibling;
          u && e.ownerDocument.markDirty(u), r && e.ownerDocument.markDirty(r), e.isHidden = l, e.ownerDocument.markDirty(e);
        }
      }
    };
  }
  hasAttribute() {
  }
  setAttribute() {
  }
  setAttributeNS() {
  }
  removeAttribute() {
  }
  constructor(e, n) {
    super(n), this.nodeType = 8, this.isMutated = !0, this._index = 0, this.isHidden = !1, this.node = null;
  }
}
class ci extends yl {
  get isConnected() {
    return !0;
  }
  createElement(e) {
    return new fe(e, this);
  }
  getMutableCollection() {
    return this.nextCollection || (this.nextCollection = this.collection.clone()), this.nextCollection;
  }
  markDirty(e) {
    this.dirtyNodes.add(e);
  }
  addNode(e) {
    if (e.isHidden || e.node == null) return;
    let n = this.getMutableCollection();
    if (!n.getItem(e.node.key)) for (let l of e) this.addNode(l);
    n.addNode(e.node);
  }
  removeNode(e) {
    for (let n of e) this.removeNode(n);
    e.node && this.getMutableCollection().removeNode(e.node.key);
  }
  /** Finalizes the collection update, updating all nodes and freezing the collection. */
  getCollection() {
    return this.inSubscription ? this.collection.clone() : (this.queuedRender = !1, this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let r of this.dirtyNodes) r instanceof fe && (!r.isConnected || r.isHidden) ? this.removeNode(r) : r.updateChildIndices();
    for (let r of this.dirtyNodes) r instanceof fe ? (r.isConnected && !r.isHidden && (r.updateNode(), this.addNode(r)), r.node && this.dirtyNodes.delete(r), r.isMutated = !1) : this.dirtyNodes.delete(r);
    if (this.nextCollection) {
      var e, n, l, o, i, u;
      this.nextCollection.commit((i = (n = this.firstVisibleChild) === null || n === void 0 || (e = n.node) === null || e === void 0 ? void 0 : e.key) !== null && i !== void 0 ? i : null, (u = (o = this.lastVisibleChild) === null || o === void 0 || (l = o.node) === null || l === void 0 ? void 0 : l.key) !== null && u !== void 0 ? u : null, this.isSSR), this.isSSR || (this.collection = this.nextCollection, this.nextCollection = null);
    }
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.queuedRender)) {
      this.queuedRender = !0, this.inSubscription = !0;
      for (let e of this.subscriptions) e();
      this.inSubscription = !1;
    }
  }
  subscribe(e) {
    return this.subscriptions.add(e), () => this.subscriptions.delete(e);
  }
  resetAfterSSR() {
    this.isSSR && (this.isSSR = !1, this.firstChild = null, this.lastChild = null, this.nodeId = 0);
  }
  constructor(e) {
    super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = !1, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = !1, this.inSubscription = !1, this.collection = e, this.nextCollection = e;
  }
}
function xl(t) {
  let { children: e, items: n, idScope: l, addIdAndValue: o, dependencies: i = [] } = t, u = a.useMemo(() => /* @__PURE__ */ new WeakMap(), i);
  return a.useMemo(() => {
    if (n && typeof e == "function") {
      let f = [];
      for (let d of n) {
        let c = u.get(d);
        if (!c) {
          c = e(d);
          var r, s;
          let p = (s = (r = c.props.id) !== null && r !== void 0 ? r : d.key) !== null && s !== void 0 ? s : d.id;
          if (p == null) throw new Error("Could not determine key for item");
          l && (p = l + ":" + p), c = a.cloneElement(c, o ? {
            key: p,
            id: p,
            value: d
          } : {
            key: p
          }), u.set(d, c);
        }
        f.push(c);
      }
      return f;
    } else if (typeof e != "function") return e;
  }, [
    e,
    n,
    u,
    l,
    o
  ]);
}
var me = { exports: {} }, Ne = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Et;
function di() {
  if (Et) return Ne;
  Et = 1;
  var t = Lt();
  function e(c, p) {
    return c === p && (c !== 0 || 1 / c === 1 / p) || c !== c && p !== p;
  }
  var n = typeof Object.is == "function" ? Object.is : e, l = t.useState, o = t.useEffect, i = t.useLayoutEffect, u = t.useDebugValue;
  function r(c, p) {
    var b = p(), v = l({ inst: { value: b, getSnapshot: p } }), g = v[0].inst, m = v[1];
    return i(
      function() {
        g.value = b, g.getSnapshot = p, s(g) && m({ inst: g });
      },
      [c, b, p]
    ), o(
      function() {
        return s(g) && m({ inst: g }), c(function() {
          s(g) && m({ inst: g });
        });
      },
      [c]
    ), u(b), b;
  }
  function s(c) {
    var p = c.getSnapshot;
    c = c.value;
    try {
      var b = p();
      return !n(c, b);
    } catch {
      return !0;
    }
  }
  function f(c, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : r;
  return Ne.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : d, Ne;
}
var ze = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function fi() {
  return At || (At = 1, process.env.NODE_ENV !== "production" && function() {
    function t(b, v) {
      return b === v && (b !== 0 || 1 / b === 1 / v) || b !== b && v !== v;
    }
    function e(b, v) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var g = v();
      if (!c) {
        var m = v();
        i(g, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      m = u({
        inst: { value: g, getSnapshot: v }
      });
      var y = m[0].inst, C = m[1];
      return s(
        function() {
          y.value = g, y.getSnapshot = v, n(y) && C({ inst: y });
        },
        [b, g, v]
      ), r(
        function() {
          return n(y) && C({ inst: y }), b(function() {
            n(y) && C({ inst: y });
          });
        },
        [b]
      ), f(g), g;
    }
    function n(b) {
      var v = b.getSnapshot;
      b = b.value;
      try {
        var g = v();
        return !i(b, g);
      } catch {
        return !0;
      }
    }
    function l(b, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Lt(), i = typeof Object.is == "function" ? Object.is : t, u = o.useState, r = o.useEffect, s = o.useLayoutEffect, f = o.useDebugValue, d = !1, c = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : e;
    ze.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ze;
}
var Kt;
function pi() {
  return Kt || (Kt = 1, process.env.NODE_ENV === "production" ? me.exports = di() : me.exports = fi()), me.exports;
}
var hi = pi();
const ml = /* @__PURE__ */ a.createContext(!1), ye = /* @__PURE__ */ a.createContext(null);
function Cl(t) {
  if (a.useContext(ye))
    return t.content;
  let { collection: n, document: l } = gi(t.createCollection);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Xl, null, /* @__PURE__ */ D.createElement(ye.Provider, {
    value: l
  }, t.content)), /* @__PURE__ */ D.createElement(bi, {
    render: t.children,
    collection: n
  }));
}
function bi({ collection: t, render: e }) {
  return e(t);
}
function vi(t, e, n) {
  let l = Ot(), o = a.useRef(l);
  o.current = l;
  let i = a.useCallback(() => o.current ? n() : e(), [
    e,
    n
  ]);
  return hi.useSyncExternalStore(t, i);
}
const $i = typeof D.useSyncExternalStore == "function" ? D.useSyncExternalStore : vi;
function gi(t) {
  let [e] = a.useState(() => new ci((t == null ? void 0 : t()) || new Yl())), n = a.useCallback((u) => e.subscribe(u), [
    e
  ]), l = a.useCallback(() => {
    let u = e.getCollection();
    return e.isSSR && e.resetAfterSSR(), u;
  }, [
    e
  ]), o = a.useCallback(() => (e.isSSR = !0, e.getCollection()), [
    e
  ]);
  return {
    collection: $i(n, l, o),
    document: e
  };
}
const We = /* @__PURE__ */ a.createContext(null);
function yi(t) {
  var e;
  return e = class extends Rt {
  }, e.type = t, e;
}
function xi(t, e, n, l, o, i) {
  typeof t == "string" && (t = yi(t));
  let u = a.useCallback((s) => {
    s == null || s.setProps(e, n, t, l, i);
  }, [
    e,
    n,
    l,
    i,
    t
  ]), r = a.useContext(We);
  if (r) {
    let s = r.ownerDocument.nodesByProps.get(e);
    return s || (s = r.ownerDocument.createElement(t.type), s.setProps(e, n, t, l, i), r.appendChild(s), r.ownerDocument.updateCollection(), r.ownerDocument.nodesByProps.set(e, s)), o ? /* @__PURE__ */ D.createElement(We.Provider, {
      value: s
    }, o) : null;
  }
  return /* @__PURE__ */ D.createElement(t.type, {
    ref: u
  }, o);
}
function Sl(t, e) {
  let n = ({ node: o }) => e(o.props, o.props.ref, o), l = a.forwardRef((o, i) => {
    let u = a.useContext(bt);
    if (!a.useContext(ml)) {
      if (e.length >= 3) throw new Error(e.name + " cannot be rendered outside a collection.");
      return e(o, i);
    }
    return xi(t, o, i, "children" in o ? o.children : null, null, (s) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ D.createElement(bt.Provider, {
        value: u
      }, /* @__PURE__ */ D.createElement(n, {
        node: s
      }))
    ));
  });
  return l.displayName = e.name, l;
}
function mi(t) {
  return xl({
    ...t,
    addIdAndValue: !0
  });
}
const Pt = /* @__PURE__ */ a.createContext(null);
function Ci(t) {
  let e = a.useContext(Pt), n = ((e == null ? void 0 : e.dependencies) || []).concat(t.dependencies), l = t.idScope || (e == null ? void 0 : e.idScope), o = mi({
    ...t,
    idScope: l,
    dependencies: n
  });
  return a.useContext(ye) && (o = /* @__PURE__ */ D.createElement(Si, null, o)), e = a.useMemo(() => ({
    dependencies: n,
    idScope: l
  }), [
    l,
    ...n
  ]), /* @__PURE__ */ D.createElement(Pt.Provider, {
    value: e
  }, o);
}
function Si({ children: t }) {
  let e = a.useContext(ye), n = a.useMemo(() => /* @__PURE__ */ D.createElement(ye.Provider, {
    value: null
  }, /* @__PURE__ */ D.createElement(ml.Provider, {
    value: !0
  }, t)), [
    t
  ]);
  return Ot() ? /* @__PURE__ */ D.createElement(We.Provider, {
    value: e
  }, n) : /* @__PURE__ */ Ft.createPortal(n, e);
}
const Di = /* @__PURE__ */ a.createContext(null), Ei = {
  CollectionRoot({ collection: t, renderDropIndicator: e }) {
    return kt(t, null, e);
  },
  CollectionBranch({ collection: t, parent: e, renderDropIndicator: n }) {
    return kt(t, e, n);
  }
};
function kt(t, e, n) {
  return xl({
    items: e ? t.getChildren(e.key) : t,
    dependencies: [
      n
    ],
    children(l) {
      let o = l.render(l);
      return !n || l.type !== "item" ? o : /* @__PURE__ */ D.createElement(D.Fragment, null, n({
        type: "item",
        key: l.key,
        dropPosition: "before"
      }), o, Ai(t, l, n));
    }
  });
}
function Ai(t, e, n) {
  let l = e.key, o = t.getKeyAfter(l), i = o != null ? t.getItem(o) : null;
  for (; i != null && i.type !== "item"; )
    o = t.getKeyAfter(i.key), i = o != null ? t.getItem(o) : null;
  let u = e.nextKey != null ? t.getItem(e.nextKey) : null;
  for (; u != null && u.type !== "item"; ) u = u.nextKey != null ? t.getItem(u.nextKey) : null;
  let r = [];
  if (u == null) {
    let s = e;
    for (; s && (!i || s.parentKey !== i.parentKey && i.level < s.level); ) {
      let f = n({
        type: "item",
        key: s.key,
        dropPosition: "after"
      });
      /* @__PURE__ */ a.isValidElement(f) && r.push(/* @__PURE__ */ a.cloneElement(f, {
        key: `${s.key}-after`
      })), s = s.parentKey != null ? t.getItem(s.parentKey) : null;
    }
  }
  return r;
}
const ut = /* @__PURE__ */ a.createContext(Ei);
function Ki(t, e) {
  let { elementType: n = "a", onPress: l, onPressStart: o, onPressEnd: i, onClick: u, isDisabled: r, ...s } = t, f = {};
  n !== "a" && (f = {
    role: "link",
    tabIndex: r ? void 0 : 0
  });
  let { focusableProps: d } = Zl(t, e), { pressProps: c, isPressed: p } = Ye({
    onPress: l,
    onPressStart: o,
    onPressEnd: i,
    onClick: u,
    isDisabled: r,
    ref: e
  }), b = se(s, {
    labelable: !0
  }), v = Z(d, c), g = Ke(), m = Mt(t);
  return {
    isPressed: p,
    linkProps: Z(b, m, {
      ...v,
      ...f,
      "aria-disabled": r || void 0,
      "aria-current": t["aria-current"],
      onClick: (y) => {
        var C;
        (C = c.onClick) === null || C === void 0 || C.call(c, y), Jl(y, g, t.href, t.routerOptions);
      }
    })
  };
}
const Pi = /* @__PURE__ */ a.createContext(null), ki = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = Pe(e, n, Pi);
  let l = e.href && !e.isDisabled ? "a" : "span", { linkProps: o, isPressed: i } = Ki({
    ...e,
    elementType: l
  }, n), { hoverProps: u, isHovered: r } = _e(e), { focusProps: s, isFocused: f, isFocusVisible: d } = Vt(), c = ce({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: i,
      isHovered: r,
      isFocused: f,
      isFocusVisible: d
    }
  }), p = se(e, {
    global: !0
  });
  return delete p.onClick, /* @__PURE__ */ D.createElement(l, {
    ref: n,
    slot: e.slot || void 0,
    ...Z(p, c, o, u, s),
    "data-focused": f || void 0,
    "data-hovered": r || void 0,
    "data-pressed": i || void 0,
    "data-focus-visible": d || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, c.children);
});
class qe {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    var l;
    return n && (l = n.prevKey) !== null && l !== void 0 ? l : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    var l;
    return n && (l = n.nextKey) !== null && l !== void 0 ? l : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    var n;
    return (n = this.keyMap.get(e)) !== null && n !== void 0 ? n : null;
  }
  at(e) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[e]);
  }
  getChildren(e) {
    let n = this.keyMap.get(e);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(e) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = e;
    let n = (r) => {
      if (this.keyMap.set(r.key, r), r.childNodes && r.type === "section") for (let s of r.childNodes) n(s);
    };
    for (let r of e) n(r);
    let l = null, o = 0, i = 0;
    for (let [r, s] of this.keyMap)
      l ? (l.nextKey = r, s.prevKey = l.key) : (this.firstKey = r, s.prevKey = void 0), s.type === "item" && (s.index = o++), (s.type === "section" || s.type === "item") && i++, l = s, l.nextKey = void 0;
    this._size = i;
    var u;
    this.lastKey = (u = l == null ? void 0 : l.key) !== null && u !== void 0 ? u : null;
  }
}
class te extends Set {
  constructor(e, n, l) {
    super(e), e instanceof te ? (this.anchorKey = n ?? e.anchorKey, this.currentKey = l ?? e.currentKey) : (this.anchorKey = n ?? null, this.currentKey = l ?? null);
  }
}
function Bi(t, e) {
  if (t.size !== e.size) return !1;
  for (let n of t)
    if (!e.has(n)) return !1;
  return !0;
}
function wi(t) {
  let { selectionMode: e = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: l, selectionBehavior: o = "toggle", disabledBehavior: i = "all" } = t, u = a.useRef(!1), [, r] = a.useState(!1), s = a.useRef(null), f = a.useRef(null), [, d] = a.useState(null), c = a.useMemo(() => Bt(t.selectedKeys), [
    t.selectedKeys
  ]), p = a.useMemo(() => Bt(t.defaultSelectedKeys, new te()), [
    t.defaultSelectedKeys
  ]), [b, v] = et(c, p, t.onSelectionChange), g = a.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [m, y] = a.useState(o);
  o === "replace" && m === "toggle" && typeof b == "object" && b.size === 0 && y("replace");
  let C = a.useRef(o);
  return a.useEffect(() => {
    o !== C.current && (y(o), C.current = o);
  }, [
    o
  ]), {
    selectionMode: e,
    disallowEmptySelection: n,
    selectionBehavior: m,
    setSelectionBehavior: y,
    get isFocused() {
      return u.current;
    },
    setFocused(k) {
      u.current = k, r(k);
    },
    get focusedKey() {
      return s.current;
    },
    get childFocusStrategy() {
      return f.current;
    },
    setFocusedKey(k, B = "first") {
      s.current = k, f.current = B, d(k);
    },
    selectedKeys: b,
    setSelectedKeys(k) {
      (l || !Bi(k, b)) && v(k);
    },
    disabledKeys: g,
    disabledBehavior: i
  };
}
function Bt(t, e) {
  return t ? t === "all" ? "all" : new te(t) : e;
}
class rt {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(e) {
    this.state.setFocused(e);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(e, n) {
    (e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, n);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(e) {
    if (this.state.selectionMode === "none") return !1;
    let n = this.getKey(e);
    return n == null ? !1 : this.state.selectedKeys === "all" ? this.canSelectItem(n) : this.state.selectedKeys.has(n);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if (this.state.selectedKeys === "all") return !0;
    if (this._isSelectAll != null) return this._isSelectAll;
    let e = this.getSelectAllKeys(), n = this.state.selectedKeys;
    return this._isSelectAll = e.every((l) => n.has(l)), this._isSelectAll;
  }
  get firstSelectedKey() {
    let e = null;
    for (let l of this.state.selectedKeys) {
      let o = this.collection.getItem(l);
      (!e || o && je(this.collection, o, e) < 0) && (e = o);
    }
    var n;
    return (n = e == null ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  get lastSelectedKey() {
    let e = null;
    for (let l of this.state.selectedKeys) {
      let o = this.collection.getItem(l);
      (!e || o && je(this.collection, o, e) > 0) && (e = o);
    }
    var n;
    return (n = e == null ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(e);
      return;
    }
    let n = this.getKey(e);
    if (n == null) return;
    let l;
    if (this.state.selectedKeys === "all") l = new te([
      n
    ], n, n);
    else {
      let u = this.state.selectedKeys;
      var o;
      let r = (o = u.anchorKey) !== null && o !== void 0 ? o : n;
      l = new te(u, r, n);
      var i;
      for (let s of this.getKeyRange(r, (i = u.currentKey) !== null && i !== void 0 ? i : n)) l.delete(s);
      for (let s of this.getKeyRange(n, r)) this.canSelectItem(s) && l.add(s);
    }
    this.state.setSelectedKeys(l);
  }
  getKeyRange(e, n) {
    let l = this.collection.getItem(e), o = this.collection.getItem(n);
    return l && o ? je(this.collection, l, o) <= 0 ? this.getKeyRangeInternal(e, n) : this.getKeyRangeInternal(n, e) : [];
  }
  getKeyRangeInternal(e, n) {
    var l;
    if (!((l = this.layoutDelegate) === null || l === void 0) && l.getKeyRange) return this.layoutDelegate.getKeyRange(e, n);
    let o = [], i = e;
    for (; i != null; ) {
      let u = this.collection.getItem(i);
      if (u && (u.type === "item" || u.type === "cell" && this.allowsCellSelection) && o.push(i), i === n) return o;
      i = this.collection.getKeyAfter(i);
    }
    return [];
  }
  getKey(e) {
    let n = this.collection.getItem(e);
    if (!n || n.type === "cell" && this.allowsCellSelection) return e;
    for (; n && n.type !== "item" && n.parentKey != null; ) n = this.collection.getItem(n.parentKey);
    return !n || n.type !== "item" ? null : n.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    let n = this.getKey(e);
    if (n == null) return;
    let l = new te(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    l.has(n) ? l.delete(n) : this.canSelectItem(n) && (l.add(n), l.anchorKey = n, l.currentKey = n), !(this.disallowEmptySelection && l.size === 0) && this.state.setSelectedKeys(l);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(e) {
    if (this.selectionMode === "none") return;
    let n = this.getKey(e);
    if (n == null) return;
    let l = this.canSelectItem(n) ? new te([
      n
    ], n, n) : new te();
    this.state.setSelectedKeys(l);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(e) {
    if (this.selectionMode === "none") return;
    let n = new te();
    for (let l of e) {
      let o = this.getKey(l);
      if (o != null && (n.add(o), this.selectionMode === "single"))
        break;
    }
    this.state.setSelectedKeys(n);
  }
  getSelectAllKeys() {
    let e = [], n = (l) => {
      for (; l != null; ) {
        if (this.canSelectItem(l)) {
          var o;
          let u = this.collection.getItem(l);
          (u == null ? void 0 : u.type) === "item" && e.push(l);
          var i;
          u != null && u.hasChildNodes && (this.allowsCellSelection || u.type !== "item") && n((i = (o = ni(Be(u, this.collection))) === null || o === void 0 ? void 0 : o.key) !== null && i !== void 0 ? i : null);
        }
        l = this.collection.getKeyAfter(l);
      }
    };
    return n(this.collection.getFirstKey()), e;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    !this.isSelectAll && this.selectionMode === "multiple" && this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new te());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(e, n) {
    this.selectionMode !== "none" && (this.selectionMode === "single" ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : this.selectionBehavior === "toggle" || n && (n.pointerType === "touch" || n.pointerType === "virtual") ? this.toggleSelection(e) : this.replaceSelection(e));
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys) return !0;
    let n = this.selectedKeys;
    if (e.size !== n.size) return !1;
    for (let l of e)
      if (!n.has(l)) return !1;
    for (let l of n)
      if (!e.has(l)) return !1;
    return !0;
  }
  canSelectItem(e) {
    var n;
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(e)) return !1;
    let l = this.collection.getItem(e);
    return !(!l || !(l == null || (n = l.props) === null || n === void 0) && n.isDisabled || l.type === "cell" && !this.allowsCellSelection);
  }
  isDisabled(e) {
    var n, l;
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(e) || !!(!((l = this.collection.getItem(e)) === null || l === void 0 || (n = l.props) === null || n === void 0) && n.isDisabled));
  }
  isLink(e) {
    var n, l;
    return !!(!((l = this.collection.getItem(e)) === null || l === void 0 || (n = l.props) === null || n === void 0) && n.href);
  }
  getItemProps(e) {
    var n;
    return (n = this.collection.getItem(e)) === null || n === void 0 ? void 0 : n.props;
  }
  withCollection(e) {
    return new rt(e, this.state, {
      allowsCellSelection: this.allowsCellSelection,
      layoutDelegate: this.layoutDelegate || void 0
    });
  }
  constructor(e, n, l) {
    this.collection = e, this.state = n;
    var o;
    this.allowsCellSelection = (o = l == null ? void 0 : l.allowsCellSelection) !== null && o !== void 0 ? o : !1, this._isSelectAll = null, this.layoutDelegate = (l == null ? void 0 : l.layoutDelegate) || null;
  }
}
function Dl(t) {
  let { filter: e, layoutDelegate: n } = t, l = wi(t), o = a.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), i = a.useCallback((f) => e ? new qe(e(f)) : new qe(f), [
    e
  ]), u = a.useMemo(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), r = ti(t, i, u), s = a.useMemo(() => new rt(r, l, {
    layoutDelegate: n
  }), [
    r,
    l,
    n
  ]);
  return El(r, s), {
    collection: r,
    disabledKeys: o,
    selectionManager: s
  };
}
function Ti(t, e) {
  let n = a.useMemo(() => e ? t.collection.filter(e) : t.collection, [
    t.collection,
    e
  ]), l = t.selectionManager.withCollection(n);
  return El(n, l), {
    collection: n,
    selectionManager: l,
    disabledKeys: t.disabledKeys
  };
}
function El(t, e) {
  const n = a.useRef(null);
  a.useEffect(() => {
    if (e.focusedKey != null && !t.getItem(e.focusedKey) && n.current) {
      const d = n.current.getItem(e.focusedKey), c = [
        ...n.current.getKeys()
      ].map((y) => {
        const C = n.current.getItem(y);
        return (C == null ? void 0 : C.type) === "item" ? C : null;
      }).filter((y) => y !== null), p = [
        ...t.getKeys()
      ].map((y) => {
        const C = t.getItem(y);
        return (C == null ? void 0 : C.type) === "item" ? C : null;
      }).filter((y) => y !== null);
      var l, o;
      const b = ((l = c == null ? void 0 : c.length) !== null && l !== void 0 ? l : 0) - ((o = p == null ? void 0 : p.length) !== null && o !== void 0 ? o : 0);
      var i, u, r;
      let v = Math.min(b > 1 ? Math.max(((i = d == null ? void 0 : d.index) !== null && i !== void 0 ? i : 0) - b + 1, 0) : (u = d == null ? void 0 : d.index) !== null && u !== void 0 ? u : 0, ((r = p == null ? void 0 : p.length) !== null && r !== void 0 ? r : 0) - 1), g = null, m = !1;
      for (; v >= 0; ) {
        if (!e.isDisabled(p[v].key)) {
          g = p[v];
          break;
        }
        if (v < p.length - 1 && !m) v++;
        else {
          m = !0;
          var s, f;
          v > ((s = d == null ? void 0 : d.index) !== null && s !== void 0 ? s : 0) && (v = (f = d == null ? void 0 : d.index) !== null && f !== void 0 ? f : 0), v--;
        }
      }
      e.setFocusedKey(g ? g.key : null);
    }
    n.current = t;
  }, [
    t,
    e
  ]);
}
function Fi(t) {
  var e;
  let [n, l] = et(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), o = a.useMemo(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: u, selectionManager: r } = Dl({
    ...t,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: o,
    onSelectionChange: (f) => {
      if (f === "all") return;
      var d;
      let c = (d = f.values().next().value) !== null && d !== void 0 ? d : null;
      c === n && t.onSelectionChange && t.onSelectionChange(c), l(c);
    }
  }), s = n != null ? i.getItem(n) : null;
  return {
    collection: i,
    disabledKeys: u,
    selectionManager: r,
    selectedKey: n,
    setSelectedKey: l,
    selectedItem: s
  };
}
function Mi(t) {
  var e;
  let { defaultFilter: n, menuTrigger: l = "input", allowsEmptyCollection: o = !1, allowsCustomValue: i, shouldCloseOnBlur: u = !0 } = t, [r, s] = a.useState(!1), [f, d] = a.useState(!1), [c, p] = a.useState(null), b = (R) => {
    t.onSelectionChange && t.onSelectionChange(R), R === y && (q(), h());
  };
  var v;
  let { collection: g, selectionManager: m, selectedKey: y, setSelectedKey: C, selectedItem: k, disabledKeys: B } = Fi({
    ...t,
    onSelectionChange: b,
    items: (v = t.items) !== null && v !== void 0 ? v : t.defaultItems
  }), [A, P] = et(t.inputValue, wt(t.defaultInputValue, y, g) || "", t.onInputChange), [N] = a.useState(y), [T] = a.useState(A), V = g, F = a.useMemo(() => (
    // No default filter if items are controlled.
    t.items != null || !n ? g : Ii(g, A, n)
  ), [
    g,
    A,
    n,
    t.items
  ]), [z, H] = a.useState(F), O = a.useRef("focus"), w = Ql({
    ...t,
    onOpenChange: (R) => {
      t.onOpenChange && t.onOpenChange(R, R ? O.current : void 0), m.setFocused(R), R || m.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), U = (R = null, G) => {
    let W = G === "manual" || G === "focus" && l === "focus";
    (o || F.size > 0 || W && V.size > 0 || t.items) && (W && !w.isOpen && t.items === void 0 && s(!0), O.current = G, p(R), w.open());
  }, $ = (R = null, G) => {
    let W = G === "manual" || G === "focus" && l === "focus";
    !(o || F.size > 0 || W && V.size > 0 || t.items) && !w.isOpen || (W && !w.isOpen && t.items === void 0 && s(!0), w.isOpen || (O.current = G), M(R));
  }, E = a.useCallback(() => {
    H(r ? V : F);
  }, [
    r,
    V,
    F
  ]), M = a.useCallback((R = null) => {
    w.isOpen && E(), p(R), w.toggle();
  }, [
    w,
    E
  ]), h = a.useCallback(() => {
    w.isOpen && (E(), w.close());
  }, [
    w,
    E
  ]), [I, j] = a.useState(A), q = () => {
    var R, G;
    let W = y != null && (G = (R = g.getItem(y)) === null || R === void 0 ? void 0 : R.textValue) !== null && G !== void 0 ? G : "";
    j(W), P(W);
  };
  var X, ne;
  let _ = a.useRef((ne = (X = t.selectedKey) !== null && X !== void 0 ? X : t.defaultSelectedKey) !== null && ne !== void 0 ? ne : null);
  var ee;
  let oe = a.useRef(y != null && (ee = (e = g.getItem(y)) === null || e === void 0 ? void 0 : e.textValue) !== null && ee !== void 0 ? ee : "");
  a.useEffect(() => {
    var R;
    f && (F.size > 0 || o) && !w.isOpen && A !== I && l !== "manual" && U(null, "input"), !r && !o && w.isOpen && F.size === 0 && h(), y != null && y !== _.current && h(), A !== I && (m.setFocusedKey(null), s(!1), A === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && C(null)), y !== _.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? q() : I !== A && j(A);
    var G;
    let W = y != null && (G = (R = g.getItem(y)) === null || R === void 0 ? void 0 : R.textValue) !== null && G !== void 0 ? G : "";
    !f && y != null && t.inputValue === void 0 && y === _.current && oe.current !== W && (j(W), P(W)), _.current = y, oe.current = W;
  });
  let ie = _l({
    ...t,
    value: a.useMemo(() => ({
      inputValue: A,
      selectedKey: y
    }), [
      A,
      y
    ])
  }), ae = () => {
    i && y == null ? K() : x();
  }, K = () => {
    _.current = null, C(null), h();
  }, x = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var R, G;
      (R = t.onSelectionChange) === null || R === void 0 || R.call(t, y);
      var W;
      let Ml = y != null && (W = (G = g.getItem(y)) === null || G === void 0 ? void 0 : G.textValue) !== null && W !== void 0 ? W : "";
      j(Ml), h();
    } else
      q(), h();
  };
  const L = () => {
    if (i) {
      var R, G;
      const W = y != null && (G = (R = g.getItem(y)) === null || R === void 0 ? void 0 : R.textValue) !== null && G !== void 0 ? G : "";
      A === W ? x() : K();
    } else
      x();
  };
  let J = () => {
    w.isOpen && m.focusedKey != null ? y === m.focusedKey ? x() : C(m.focusedKey) : L();
  }, ue = a.useRef(A), Fe = (R) => {
    R ? (ue.current = A, l === "focus" && !t.isReadOnly && U(null, "focus")) : (u && L(), A !== ue.current && ie.commitValidation()), d(R);
  }, he = a.useMemo(() => w.isOpen ? r ? V : F : z, [
    w.isOpen,
    V,
    F,
    r,
    z
  ]);
  var Me;
  let ct = (Me = t.defaultSelectedKey) !== null && Me !== void 0 ? Me : N;
  var Ie;
  return {
    ...ie,
    ...w,
    focusStrategy: c,
    toggle: $,
    open: U,
    close: L,
    selectionManager: m,
    selectedKey: y,
    defaultSelectedKey: ct,
    setSelectedKey: C,
    disabledKeys: B,
    isFocused: f,
    setFocused: Fe,
    selectedItem: k,
    collection: he,
    inputValue: A,
    defaultInputValue: (Ie = wt(t.defaultInputValue, ct, g)) !== null && Ie !== void 0 ? Ie : T,
    setInputValue: P,
    commit: J,
    revert: ae
  };
}
function Ii(t, e, n) {
  return new qe(Al(t, t, e, n));
}
function Al(t, e, n, l) {
  let o = [];
  for (let i of e)
    if (i.type === "section" && i.hasChildNodes) {
      let u = Al(t, Be(i, t), n, l);
      [
        ...u
      ].some((r) => r.type === "item") && o.push({
        ...i,
        childNodes: u
      });
    } else i.type === "item" && l(i.textValue, n) ? o.push({
      ...i
    }) : i.type !== "item" && o.push({
      ...i
    });
  return o;
}
function wt(t, e, n) {
  if (t == null) {
    var l, o;
    if (e != null) return (o = (l = n.getItem(e)) === null || l === void 0 ? void 0 : l.textValue) !== null && o !== void 0 ? o : "";
  }
  return t;
}
const we = /* @__PURE__ */ a.createContext({}), Kl = /* @__PURE__ */ a.createContext(null), Li = /* @__PURE__ */ a.forwardRef(function(e, n) {
  let { render: l } = a.useContext(Kl);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, l(e, n));
});
function Pl(t, e) {
  var n;
  let l = t == null ? void 0 : t.renderDropIndicator, o = t == null || (n = t.isVirtualDragging) === null || n === void 0 ? void 0 : n.call(t), i = a.useCallback((u) => {
    if (o || e != null && e.isDropTarget(u)) return l ? l(u) : /* @__PURE__ */ D.createElement(Li, {
      target: u
    });
  }, [
    e == null ? void 0 : e.target,
    o,
    l
  ]);
  return t != null && t.useDropIndicator ? i : void 0;
}
function Ri(t, e, n) {
  var l, o;
  let i = t.focusedKey, u = null;
  if (!(e == null || (l = e.isVirtualDragging) === null || l === void 0) && l.call(e) && (n == null || (o = n.target) === null || o === void 0 ? void 0 : o.type) === "item" && (u = n.target.key, n.target.dropPosition === "after")) {
    let c = n.collection.getKeyAfter(u), p = null;
    if (c != null) {
      var r, s;
      let b = (s = (r = n.collection.getItem(u)) === null || r === void 0 ? void 0 : r.level) !== null && s !== void 0 ? s : 0;
      for (; c; ) {
        let v = n.collection.getItem(c);
        if (!v) break;
        if (v.type !== "item") {
          c = n.collection.getKeyAfter(c);
          continue;
        }
        var f;
        if (((f = v.level) !== null && f !== void 0 ? f : 0) <= b) break;
        p = c, c = n.collection.getKeyAfter(c);
      }
    }
    var d;
    u = (d = c ?? p) !== null && d !== void 0 ? d : u;
  }
  return a.useMemo(() => new Set([
    i,
    u
  ].filter((c) => c != null)), [
    i,
    u
  ]);
}
const Oi = /* @__PURE__ */ a.createContext({}), Vi = /* @__PURE__ */ a.createContext(null);
function ji(t) {
  let e = a.useRef({});
  return /* @__PURE__ */ D.createElement(Vi.Provider, {
    value: e
  }, t.children);
}
const Ni = /* @__PURE__ */ a.createContext({
  isSelected: !1
}), zi = /* @__PURE__ */ a.createContext({});
class Hi extends Rt {
  filter(e, n) {
    let l = n.getItem(this.prevKey);
    if (l && l.type !== "separator") {
      let o = this.clone();
      return n.addDescendants(o, e), o;
    }
    return null;
  }
}
Hi.type = "separator";
const Te = /* @__PURE__ */ a.createContext(null), pe = /* @__PURE__ */ a.createContext(null), Gi = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = Pe(e, n, Te);
  let l = a.useContext(pe);
  return l ? /* @__PURE__ */ D.createElement(kl, {
    state: l,
    props: e,
    listBoxRef: n
  }) : /* @__PURE__ */ D.createElement(Cl, {
    content: /* @__PURE__ */ D.createElement(Ci, e)
  }, (o) => /* @__PURE__ */ D.createElement(Ui, {
    props: e,
    listBoxRef: n,
    collection: o
  }));
});
function Ui({ props: t, listBoxRef: e, collection: n }) {
  t = {
    ...t,
    collection: n,
    children: null,
    items: null
  };
  let { layoutDelegate: l } = a.useContext(ut), o = Dl({
    ...t,
    layoutDelegate: l
  });
  return /* @__PURE__ */ D.createElement(kl, {
    state: o,
    props: t,
    listBoxRef: e
  });
}
function kl({ state: t, props: e, listBoxRef: n }) {
  [e, n] = Pe(e, n, lo);
  let { dragAndDropHooks: l, layout: o = "stack", orientation: i = "vertical", filter: u } = e, r = Ti(t, u), { collection: s, selectionManager: f } = r, d = !!(l != null && l.useDraggableCollectionState), c = !!(l != null && l.useDroppableCollectionState), { direction: p } = Xe(), { disabledBehavior: b, disabledKeys: v } = f, g = lt({
    usage: "search",
    sensitivity: "base"
  }), { isVirtualized: m, layoutDelegate: y, dropTargetDelegate: C, CollectionRoot: k } = a.useContext(ut), B = a.useMemo(() => e.keyboardDelegate || new it({
    collection: s,
    collator: g,
    ref: n,
    disabledKeys: v,
    disabledBehavior: b,
    layout: o,
    orientation: i,
    direction: p,
    layoutDelegate: y
  }), [
    s,
    g,
    n,
    b,
    v,
    i,
    p,
    e.keyboardDelegate,
    o,
    y
  ]), { listBoxProps: A } = Qo({
    ...e,
    shouldSelectOnPressUp: d || e.shouldSelectOnPressUp,
    keyboardDelegate: B,
    isVirtualized: m
  }, r, n), P = a.useRef(d), N = a.useRef(c);
  a.useEffect(() => {
    process.env.NODE_ENV !== "production" && (P.current !== d && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), N.current !== c && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    d,
    c
  ]);
  let T, V, F, z = !1, H = null, O = a.useRef(null);
  if (d && l) {
    T = l.useDraggableCollectionState({
      collection: s,
      selectionManager: f,
      preview: l.renderDragPreview ? O : void 0
    }), l.useDraggableCollection({}, T, n);
    let j = l.DragPreview;
    H = l.renderDragPreview ? /* @__PURE__ */ D.createElement(j, {
      ref: O
    }, l.renderDragPreview) : null;
  }
  if (c && l) {
    V = l.useDroppableCollectionState({
      collection: s,
      selectionManager: f
    });
    let j = l.dropTargetDelegate || C || new l.ListDropTargetDelegate(s, n, {
      orientation: i,
      layout: o,
      direction: p
    });
    F = l.useDroppableCollection({
      keyboardDelegate: B,
      dropTargetDelegate: j
    }, V, n), z = V.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: Y, isFocused: w, isFocusVisible: U } = Vt(), $ = r.collection.size === 0, E = {
    isDropTarget: z,
    isEmpty: $,
    isFocused: w,
    isFocusVisible: U,
    layout: e.layout || "stack",
    state: r
  }, M = ce({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-ListBox",
    values: E
  }), h = null;
  $ && e.renderEmptyState && (h = /* @__PURE__ */ D.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, e.renderEmptyState(E)));
  let I = se(e, {
    global: !0
  });
  return /* @__PURE__ */ D.createElement(oo, null, /* @__PURE__ */ D.createElement("div", {
    ...Z(I, M, A, Y, F == null ? void 0 : F.collectionProps),
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": z || void 0,
    "data-empty": $ || void 0,
    "data-focused": w || void 0,
    "data-focus-visible": U || void 0,
    "data-layout": e.layout || "stack",
    "data-orientation": e.orientation || "vertical"
  }, /* @__PURE__ */ D.createElement(tt, {
    values: [
      [
        Te,
        e
      ],
      [
        pe,
        r
      ],
      [
        we,
        {
          dragAndDropHooks: l,
          dragState: T,
          dropState: V
        }
      ],
      [
        zi,
        {
          elementType: "div"
        }
      ],
      [
        Kl,
        {
          render: Xi
        }
      ],
      [
        Di,
        {
          name: "ListBoxSection",
          render: Wi
        }
      ]
    ]
  }, /* @__PURE__ */ D.createElement(ji, null, /* @__PURE__ */ D.createElement(k, {
    collection: s,
    scrollRef: n,
    persistedKeys: Ri(f, l, V),
    renderDropIndicator: Pl(l, V)
  }))), h, H));
}
function Wi(t, e, n, l = "react-aria-ListBoxSection") {
  let o = a.useContext(pe), { dragAndDropHooks: i, dropState: u } = a.useContext(we), { CollectionBranch: r } = a.useContext(ut), [s, f] = Nt();
  var d;
  let { headingProps: c, groupProps: p } = ii({
    heading: f,
    "aria-label": (d = t["aria-label"]) !== null && d !== void 0 ? d : void 0
  }), b = ce({
    defaultClassName: l,
    className: t.className,
    style: t.style,
    values: {}
  }), v = se(t, {
    global: !0
  });
  return delete v.id, /* @__PURE__ */ D.createElement("section", {
    ...Z(v, b, p),
    ref: e
  }, /* @__PURE__ */ D.createElement(Oi.Provider, {
    value: {
      ...c,
      ref: s
    }
  }, /* @__PURE__ */ D.createElement(r, {
    collection: o.collection,
    parent: n,
    renderDropIndicator: Pl(i, u)
  })));
}
const qi = /* @__PURE__ */ Sl(to, function(e, n, l) {
  let o = jt(n), i = a.useContext(pe), { dragAndDropHooks: u, dragState: r, dropState: s } = a.useContext(we), { optionProps: f, labelProps: d, descriptionProps: c, ...p } = oi({
    key: l.key,
    "aria-label": e == null ? void 0 : e["aria-label"]
  }, i, o), { hoverProps: b, isHovered: v } = _e({
    isDisabled: !p.allowsSelection && !p.hasAction,
    onHoverStart: l.props.onHoverStart,
    onHoverChange: l.props.onHoverChange,
    onHoverEnd: l.props.onHoverEnd
  }), g = null;
  r && u && (g = u.useDraggableItem({
    key: l.key
  }, r));
  let m = null;
  s && u && (m = u.useDroppableItem({
    target: {
      type: "item",
      key: l.key,
      dropPosition: "on"
    }
  }, s, o));
  let y = r && r.isDragging(l.key), C = ce({
    ...e,
    id: void 0,
    children: e.children,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...p,
      isHovered: v,
      selectionMode: i.selectionManager.selectionMode,
      selectionBehavior: i.selectionManager.selectionBehavior,
      allowsDragging: !!r,
      isDragging: y,
      isDropTarget: m == null ? void 0 : m.isDropTarget
    }
  });
  a.useEffect(() => {
    !l.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    l.textValue
  ]);
  let k = e.href ? "a" : "div", B = se(e, {
    global: !0
  });
  return delete B.id, delete B.onClick, /* @__PURE__ */ D.createElement(k, {
    ...Z(B, C, f, b, g == null ? void 0 : g.dragProps, m == null ? void 0 : m.dropProps),
    ref: o,
    "data-allows-dragging": !!r || void 0,
    "data-selected": p.isSelected || void 0,
    "data-disabled": p.isDisabled || void 0,
    "data-hovered": v || void 0,
    "data-focused": p.isFocused || void 0,
    "data-focus-visible": p.isFocusVisible || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-dragging": y || void 0,
    "data-drop-target": (m == null ? void 0 : m.isDropTarget) || void 0,
    "data-selection-mode": i.selectionManager.selectionMode === "none" ? void 0 : i.selectionManager.selectionMode
  }, /* @__PURE__ */ D.createElement(tt, {
    values: [
      [
        nt,
        {
          slots: {
            [no]: d,
            label: d,
            description: c
          }
        }
      ],
      [
        Ni,
        {
          isSelected: p.isSelected
        }
      ]
    ]
  }, C.children));
});
function Xi(t, e) {
  e = jt(e);
  let { dragAndDropHooks: n, dropState: l } = a.useContext(we), { dropIndicatorProps: o, isHidden: i, isDropTarget: u } = n.useDropIndicator(t, l, e);
  return i ? null : /* @__PURE__ */ D.createElement(Zi, {
    ...t,
    dropIndicatorProps: o,
    isDropTarget: u,
    ref: e
  });
}
function Yi(t, e) {
  let { dropIndicatorProps: n, isDropTarget: l, ...o } = t, i = ce({
    ...o,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: l
    }
  });
  return /* @__PURE__ */ D.createElement("div", {
    ...n,
    ...i,
    // eslint-disable-next-line
    role: "option",
    ref: e,
    "data-drop-target": l || void 0
  });
}
const Zi = /* @__PURE__ */ a.forwardRef(Yi);
Sl(eo, function(e, n, l) {
  let o = a.useContext(pe), { isLoading: i, onLoadMore: u, scrollOffset: r, ...s } = e, f = a.useRef(null), d = a.useMemo(() => ({
    onLoadMore: u,
    collection: o == null ? void 0 : o.collection,
    sentinelRef: f,
    scrollOffset: r
  }), [
    u,
    r,
    o == null ? void 0 : o.collection
  ]);
  Lo(d, f);
  let c = ce({
    ...s,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-ListBoxLoadingIndicator",
    values: null
  }), p = {
    // For Android talkback
    tabIndex: -1
  };
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: Ro(!0)
  }, /* @__PURE__ */ D.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: f,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), i && c.children && /* @__PURE__ */ D.createElement("div", {
    ...Z(se(e, {
      global: !0
    }), p),
    ...c,
    // aria-selected isn't needed here since this option is not selectable.
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    role: "option",
    ref: n
  }, c.children));
});
const Ji = /* @__PURE__ */ a.createContext(null), Qi = /* @__PURE__ */ a.createContext(null), _i = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = Pe(e, n, Ji);
  let { children: l, isDisabled: o = !1, isInvalid: i = !1, isRequired: u = !1 } = e, r = a.useMemo(() => {
    var s;
    return /* @__PURE__ */ D.createElement(Te.Provider, {
      value: {
        items: (s = e.items) !== null && s !== void 0 ? s : e.defaultItems
      }
    }, typeof l == "function" ? l({
      isOpen: !1,
      isDisabled: o,
      isInvalid: i,
      isRequired: u,
      defaultChildren: null
    }) : l);
  }, [
    l,
    o,
    i,
    u,
    e.items,
    e.defaultItems
  ]);
  return /* @__PURE__ */ D.createElement(Cl, {
    content: r
  }, (s) => /* @__PURE__ */ D.createElement(tu, {
    props: e,
    collection: s,
    comboBoxRef: n
  }));
}), eu = [
  zt,
  Ht,
  Gt,
  Ut,
  nt
];
function tu({ props: t, collection: e, comboBoxRef: n }) {
  let { name: l, formValue: o = "key", allowsCustomValue: i } = t;
  i && (o = "text");
  let { validationBehavior: u } = io(uo) || {};
  var r, s;
  let f = (s = (r = t.validationBehavior) !== null && r !== void 0 ? r : u) !== null && s !== void 0 ? s : "native", { contains: d } = jo({
    sensitivity: "base"
  }), c = Mi({
    defaultFilter: t.defaultFilter || d,
    ...t,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: t.items,
    children: void 0,
    collection: e,
    validationBehavior: f
  }), p = a.useRef(null), b = a.useRef(null), v = a.useRef(null), g = a.useRef(null), [m, y] = Nt(!t["aria-label"] && !t["aria-labelledby"]), { buttonProps: C, inputProps: k, listBoxProps: B, labelProps: A, descriptionProps: P, errorMessageProps: N, ...T } = ai({
    ...ro(t),
    label: y,
    inputRef: b,
    buttonRef: p,
    listBoxRef: v,
    popoverRef: g,
    name: o === "text" ? l : void 0,
    validationBehavior: f
  }, c), [V, F] = a.useState(null), z = a.useCallback(() => {
    if (b.current) {
      var U;
      let $ = (U = p.current) === null || U === void 0 ? void 0 : U.getBoundingClientRect(), E = b.current.getBoundingClientRect(), M = $ ? Math.min($.left, E.left) : E.left, h = $ ? Math.max($.right, E.right) : E.right;
      F(h - M + "px");
    }
  }, [
    p,
    b,
    F
  ]);
  so({
    ref: b,
    onResize: z
  });
  let H = a.useMemo(() => ({
    isOpen: c.isOpen,
    isDisabled: t.isDisabled || !1,
    isInvalid: T.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    c.isOpen,
    t.isDisabled,
    T.isInvalid,
    t.isRequired
  ]), O = ce({
    ...t,
    values: H,
    defaultClassName: "react-aria-ComboBox"
  }), Y = se(t, {
    global: !0
  });
  delete Y.id;
  var w;
  return /* @__PURE__ */ D.createElement(tt, {
    values: [
      [
        Qi,
        c
      ],
      [
        zt,
        {
          ...A,
          ref: m
        }
      ],
      [
        Ht,
        {
          ...C,
          ref: p,
          isPressed: c.isOpen
        }
      ],
      [
        Gt,
        {
          ...k,
          ref: b
        }
      ],
      [
        ao,
        c
      ],
      [
        co,
        {
          ref: g,
          triggerRef: b,
          scrollRef: v,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": V
          },
          clearContexts: eu
        }
      ],
      [
        Te,
        {
          ...B,
          ref: v
        }
      ],
      [
        pe,
        c
      ],
      [
        nt,
        {
          slots: {
            description: P,
            errorMessage: N
          }
        }
      ],
      [
        Ut,
        {
          isInvalid: T.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        fo,
        T
      ]
    ]
  }, /* @__PURE__ */ D.createElement("div", {
    ...Y,
    ...O,
    ref: n,
    slot: t.slot || void 0,
    "data-focused": c.isFocused || void 0,
    "data-open": c.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": T.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }), l && o === "key" && /* @__PURE__ */ D.createElement("input", {
    type: "hidden",
    name: l,
    form: t.form,
    value: (w = c.selectedKey) !== null && w !== void 0 ? w : ""
  }));
}
const st = async (t, e, n) => {
  console.log("Save logic triggered");
  try {
    await t.app.model.customBlobDocuments.updateDocumentContent(n, e);
  } catch (l) {
    t.ui.notifications.show({
      title: "Failed to save document.",
      message: l.message
    });
  }
}, nu = (t, e, n, l, o) => async () => {
  if (!(e.provider === o && "key" in e.providerFields) && o === "MxCloudGenAI") {
    const i = Ao(), u = { ...e, provider: o, providerFields: i };
    n(u), await st(t, u, l);
  }
}, lu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.2449%206H10.7549C10.9449%206%2011.0599%206.16%2010.9649%206.29L8.3949%209.795C8.1949%2010.07%207.7999%2010.07%207.5999%209.795L5.0299%206.29C4.9349%206.16%205.0549%206%205.2399%206H5.2449Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", ou = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.2449%206H10.7549C10.9449%206%2011.0599%206.16%2010.9649%206.29L8.3949%209.795C8.1949%2010.07%207.7999%2010.07%207.5999%209.795L5.0299%206.29C4.9349%206.16%205.0549%206%205.2399%206H5.2449Z'%20fill='%23535965'/%3e%3c/svg%3e";
var iu = Object.defineProperty, uu = (t, e) => iu(t, "name", { value: e, configurable: !0 });
const ru = uu((t) => S.jsx(Wt, { light: ou, dark: lu, ...t }), "ExpandedSplitButtonIcon");
var su = Object.defineProperty, Bl = (t, e) => su(t, "name", { value: e, configurable: !0 });
function wl(t) {
  return S.jsx(au, { ...t });
}
Bl(wl, "DropdownListBox");
function Tl(t) {
  return S.jsx(cu, { ...t });
}
Bl(Tl, "DropdownListBoxItem");
const au = Q(Gi)``, cu = Q(qi)`
    background-color: ${(t) => t.theme.colorsBackgroundMenuItemDefault};
    &[data-selected] {
        background-color: ${(t) => t.theme.colorsBackgroundMenuItemPressed};
    }
    &[data-hovered],
    &[data-focused],
    &[data-focus-visible] {
        background-color: ${(t) => t.theme.colorsBackgroundMenuItemHover};
    }
    &[data-disabled] {
        opacity: 0.5;
    }

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding: 3px 4px;

    font-size: ${re.fontSizeMd};
    line-height: ${re.lineHeightMd};
`;
var du = Object.defineProperty, fu = (t, e) => du(t, "name", { value: e, configurable: !0 });
function at({ children: t, label: e, description: n, items: l, onInputChange: o, ...i }) {
  const [u, r] = a.useState(i.inputValue ?? i.defaultInputValue ?? ""), s = a.useMemo(() => i.inputValue !== void 0 || i.selectedKey !== void 0 ? { selectedKey: i.selectedKey ?? null, inputValue: i.inputValue ?? u } : void 0, [i.inputValue, i.selectedKey, u]), { isInvalid: f, validate: d, validationError: c } = ho({ value: s, validate: i.validate }), p = a.useCallback((b) => {
    i.inputValue === void 0 && r(b), o == null || o(b);
  }, [i.inputValue, o]);
  return S.jsx(bu, { ...i, onInputChange: p, isInvalid: f, validate: d, children: S.jsxs(bo, { label: e, description: n, realtimeValidationError: c, children: [S.jsxs(vu, { children: [S.jsx($u, {}), S.jsx(gu, { "aria-hidden": "true", icon: S.jsx(ru, {}) })] }), S.jsx(vo, { children: S.jsx(wl, { items: l, children: t }) })] }) });
}
fu(at, "ComboBox");
const pu = "16px", hu = `${pu} + ${re.spacing4} * 2`, bu = Q(_i)``, vu = Q.div`
    position: relative;
    line-height: ${re.lineHeightMd};
    flex: 1;
`, $u = Q($o)`
    padding-right: calc(${hu});
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &[data-expanded] {
        border-color: ${(t) => t.theme.colorsBorderActive};
    }
`, gu = Q(go)`
    position: absolute;
    // We need to add the border width, because the button is positioned relative to the input
    inset: ${re.borderWidthMd};
    left: unset;
    border: 0;
    padding: ${po} ${re.spacing4};
`;
Q(at)`
    width: 100%;
`;
const yu = Q.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, xu = Q.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, mu = Q.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, Cu = ({ icon: t, text: e }) => /* @__PURE__ */ S.jsxs(yu, { children: [
  t && /* @__PURE__ */ S.jsx(xu, { children: typeof t == "string" ? /* @__PURE__ */ S.jsx(yo, { src: t }) : t }),
  /* @__PURE__ */ S.jsx(mu, { children: e })
] }), Su = Q.div`
    & [role="combobox"] {
        ${(t) => t.iconurl && `
            background-image: url(${t.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, Du = ({
  ariaLabel: t,
  isDisabled: e = !1,
  label: n,
  options: l,
  onSelectionChange: o,
  selectedKey: i,
  validate: u
}) => {
  const r = l.find((s) => s.key === i);
  return /* @__PURE__ */ S.jsx(Su, { iconurl: r == null ? void 0 : r.icon, children: /* @__PURE__ */ S.jsx(
    at,
    {
      "aria-label": t,
      isDisabled: e,
      label: n,
      selectedKey: i,
      onSelectionChange: o,
      validate: u,
      children: l.map((s) => /* @__PURE__ */ S.jsx(
        Tl,
        {
          id: s.key,
          textValue: s.caption,
          children: /* @__PURE__ */ S.jsx(
            Cu,
            {
              text: s.caption,
              icon: s.icon
            }
          )
        },
        s.key
      ))
    }
  ) });
}, Eu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Au = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ku = Object.defineProperty, Pu = (t, e) => Ku(t, "name", { value: e, configurable: !0 });
const ku = Pu((t) => S.jsx(Wt, { light: Au, dark: Eu, ...t }), "ExternalLinkIcon");
var Bu = Object.defineProperty, wu = (t, e) => Bu(t, "name", { value: e, configurable: !0 });
const Tt = wu(({ children: t, href: e, ...n }) => S.jsxs(Tu, { href: e, ...n, children: [t ?? e, e && S.jsx(ku, {})] }), "Link"), Tu = Q(ki)`
    font-size: ${re.fontSizeMd};
    line-height: ${re.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${re.spacing4};
    }
`, Fl = (t) => {
  const e = atob(t);
  return JSON.parse(e);
}, Fu = (t, e, n, l) => async () => {
  try {
    const o = e.providerFields;
    if (!o.keyImportHelper)
      throw new Error("Missing key.");
    const i = Fl(o.keyImportHelper);
    if (i.type !== "TEXT_GENERATION")
      throw new Error("Invalid key type. Only Text Generation keys are supported.");
    const u = {
      key: o.keyImportHelper || "",
      keyImportHelper: "",
      keyId: i.keyId || "",
      keyName: i.keyName || "",
      resourceName: i.name || "",
      environment: i.environment || "",
      deepLinkURL: i.deepLinkUrl || ""
    }, r = {
      ...e,
      name: i.model || "",
      displayName: Lu(i.model),
      type: i.type === "TEXT_GENERATION" ? "Text generation" : i.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...u
      }
    };
    r.providerFields = {
      ...u
    }, n(r), await st(t, r, l);
  } catch (o) {
    console.error("Error during MxCloud GenAI key import:", o);
    const i = "Failed to import MxCloud GenAI model key.", u = "Error during MxCloud GenAI key import: " + o;
    await t.ui.messageBoxes.show(
      "error",
      i,
      u
    );
  }
}, Mu = (t, e) => async () => {
  try {
    const n = e.providerFields;
    if (!n.key)
      throw new Error("Missing key.");
    const l = Fl(n.key), o = await t.network.httpProxy.getProxyUrl(`${l.resourceBaseUrl}/converse`), i = await fetch(o, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": l.accessToken
      },
      body: JSON.stringify({
        inferenceConfig: { maxTokens: 10 },
        messages: [{ content: [{ text: "Hello World!" }], role: "user" }]
      }),
      credentials: "omit"
    });
    if (i.status !== 200)
      throw new Error(`HTTP ${i.status}: ${i.statusText}`);
    return !0;
  } catch (n) {
    return console.error("Error during MxCloud GenAI connection test:", n), n instanceof Error ? n.message : "";
  }
}, Iu = (t) => {
  const e = t.providerFields;
  if (!e.key && !e.keyImportHelper)
    return "Key is required.";
  if (!e.key)
    return "Key wasn't imported.";
}, Lu = (t) => t === "anthropic.claude-3-sonnet-20240229-v1:0" ? "Anthropic Claude 3 Sonnet" : t === "anthropic.claude-3-5-sonnet-20240620-v1:0" || t === "eu.anthropic.claude-3-5-sonnet-20240620-v1:0" ? "Anthropic Claude 3.5 Sonnet" : t === "eu.anthropic.claude-3-7-sonnet-20250219-v1:0" ? "Anthropic Claude 3.7 Sonnet" : t === "eu.anthropic.claude-sonnet-4-20250514-v1:0" ? "Anthropic Claude Sonnet 4" : t === "eu.anthropic.claude-sonnet-4-5-20250929-v1:0" ? "Anthropic Claude Sonnet 4.5" : t;
async function Ru(t, e, n, l, o) {
  const i = {
    ...t,
    providerFields: {
      ...t.providerFields,
      keyImportHelper: e
    }
  };
  n(i), await st(l, i, o);
}
async function Ou(t, e) {
  var o;
  const n = [{
    title: "Testing connection",
    description: "Testing connection",
    action: async () => Mu(t, e)()
  }], l = await t.ui.dialogs.showProgressDialog("Testing connection", n);
  switch (l.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure":
      const i = "No connection.", u = `Make sure you are connected to the internet and check if your key still exists in the Mendix GenAI portal and try again.
` + (((o = l.failedStep) == null ? void 0 : o.error) ?? "");
      return await t.ui.messageBoxes.show(
        "error",
        i,
        u
      ), !1;
  }
}
const Vu = Q.div`
    position: relative;
    width: 100%;
`, ju = Q(Bo)`
    width: 100%;
    
    & textarea {
        min-height: 24px;
        resize: vertical;
        overflow: hidden;
        padding: 3px 4px;
    }
`, Nu = ({
  ariaLabel: t,
  value: e,
  onChange: n,
  description: l,
  readOnly: o = !1,
  rows: i = 1,
  validate: u
}) => {
  const r = a.useRef(null), s = (d) => {
    d.style.height = "auto", d.style.height = d.scrollHeight + "px";
  }, f = (d) => {
    n && n(d);
  };
  return a.useEffect(() => {
    var c;
    const d = (c = r.current) == null ? void 0 : c.querySelector("textarea");
    d && s(d);
  }, [e]), /* @__PURE__ */ S.jsx(Vu, { ref: r, children: /* @__PURE__ */ S.jsx(
    ju,
    {
      value: e,
      onChange: f,
      description: l,
      isReadOnly: o,
      "aria-label": t,
      rows: i,
      validate: u
    }
  ) });
}, zu = ({
  label: t,
  ariaLabel: e,
  value: n,
  onChange: l,
  buttonCaption: o,
  onClick: i,
  description: u,
  readOnly: r = !1,
  hasMarginTop: s = !1,
  rows: f = 1,
  validate: d
}) => {
  const c = s ? 8 : 0;
  return /* @__PURE__ */ S.jsxs($e, { marginTop: c, children: [
    t && /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(Se, { children: t }) }),
    /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsxs(xo, { children: [
      /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsx(
        Nu,
        {
          ariaLabel: e,
          value: n,
          onChange: l,
          description: u,
          readOnly: r,
          rows: f,
          validate: d
        }
      ) }),
      /* @__PURE__ */ S.jsx(
        qt,
        {
          onPress: i,
          children: o
        }
      )
    ] }) })
  ] });
}, Hu = ({
  onPress: t,
  buttonCaption: e
}) => {
  const [n, l] = a.useState(!1), o = async () => {
    if (!(!t || n)) {
      l(!0);
      try {
        await t();
      } finally {
        l(!1);
      }
    }
  };
  return /* @__PURE__ */ S.jsx($e, { children: /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(
    qt,
    {
      onPress: o,
      isDisabled: n,
      children: e
    }
  ) }) });
}, Gu = ({
  studioPro: t,
  model: e,
  setModel: n,
  documentId: l
}) => {
  const [o, i] = a.useState(!1), u = e.providerFields;
  a.useEffect(() => {
    if (o) {
      const p = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(p);
    }
  }, [o]);
  const r = a.useCallback(async (p) => {
    await Ru(e, p, n, t, l);
  }, [t, e, n, l]), s = a.useCallback(async () => {
    await Fu(t, e, n, l)(), i(!1);
  }, [t, e, n, l]), f = a.useCallback(async () => {
    i(!1);
    const p = await Ou(t, e);
    i(p);
  }, [t, e]), d = a.useCallback(() => Iu(e), [e]), c = a.useCallback(() => {
    i(!1);
  }, []);
  return /* @__PURE__ */ S.jsxs(Xt, { label: "Resource", children: [
    /* @__PURE__ */ S.jsx(
      zu,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: u.keyImportHelper || "",
        onChange: r,
        buttonCaption: "Import",
        onClick: s,
        validate: d,
        description: u.key ? void 0 : "Please enter your key from the portal."
      }
    ),
    !u.key && /* @__PURE__ */ S.jsxs($e, { children: [
      /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(Se, {}) }),
      /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsx(Tt, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    u.key && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: u.resourceName,
          onChange: () => {
          },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: u.keyName,
          onChange: () => {
          },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: e.displayName,
          icon: e.displayName && e.displayName.toLocaleLowerCase().includes("anthropic") ? Ko : void 0,
          onChange: () => {
          },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: e.name,
          onChange: () => {
          },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: u.environment,
          onChange: () => {
          },
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsxs($e, { children: [
        /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(Se, {}) }),
        /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsx(Tt, { href: u.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ S.jsxs($e, { children: [
        /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(Se, { children: "Connection" }) }),
        /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(Hu, { onPress: f, buttonCaption: "Test" }) })
      ] }),
      o && /* @__PURE__ */ S.jsx(wo, { onClose: c, children: "Connection successful." })
    ] })
  ] });
}, Uu = Po(), Wu = ({ studioPro: t, documentId: e }) => {
  const n = t.ui.messageBoxes, l = t.app.model.customBlobDocuments, [o, i] = a.useState(0), [u, r] = a.useState(!1), [s, f] = a.useState(Uu), [d, c] = a.useState(!1), p = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: ko }
  ];
  a.useEffect(() => {
    const g = (m) => {
      const { documents: y } = m;
      y.some((C) => C.id === e) && i((C) => C + 1);
    };
    return l.addEventListener("documentsChanged", g), () => {
      l.removeEventListener("documentsChanged", g);
    };
  }, []), a.useEffect(() => {
    l.getDocumentById(e).then(async (g) => {
      if (g && !("error" in g)) {
        const m = g.document.contents;
        !d && m.providerFields && "keyImportHelper" in m.providerFields && (m.providerFields.keyImportHelper = "", c(!0)), f({ ...m }), r(!0);
      } else
        throw new Error((g == null ? void 0 : g.error) || "Document not found");
    }).catch((g) => {
      n.show("error", "Error loading document", "Details: " + (g == null ? void 0 : g.message) || g);
    });
  }, [o]);
  const b = a.useCallback(async (g) => {
    await nu(t, s, f, e, g)();
  }, [t, s, f, e]), v = a.useCallback(() => {
    if (!s.provider)
      return "Model provider is required.";
  }, [s.provider]);
  return /* @__PURE__ */ S.jsx(Co, { studioPro: t, children: /* @__PURE__ */ S.jsxs(So, { children: [
    !u && /* @__PURE__ */ S.jsx("span", { children: "Loading document content..." }),
    u && /* @__PURE__ */ S.jsx(Do, { children: /* @__PURE__ */ S.jsxs(Eo, { children: [
      /* @__PURE__ */ S.jsx(Xt, { label: "Common", children: /* @__PURE__ */ S.jsx(
        Du,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: s.provider,
          options: p,
          onSelectionChange: b,
          validate: v
        }
      ) }),
      s.provider === "MxCloudGenAI" && /* @__PURE__ */ S.jsx(
        Gu,
        {
          studioPro: t,
          model: s,
          setModel: f,
          documentId: e
        }
      )
    ] }) })
  ] }) });
}, Ju = mo(Wu);
export {
  Ju as component
};
//# sourceMappingURL=modelEdit.js.map
