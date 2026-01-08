import { r as a, $ as Ae, e as Ge, f as Ke, g as Ol, h as Vl, i as Ye, k as jl, l as Ze, m as Je, n as ye, o as Z, q as Qe, s as Se, t as me, u as Pe, v as Ue, w as ft, x as Nl, y as de, z as Mt, B as _e, E as zl, G as se, H as Hl, I as Gl, J as D, K as pt, L as Ul, M as Wl, N as et, O as ht, Q as It, R as ql, U as Lt, V as Xl, W as Yl, X as bt, Y as Re, Z as Zl, _ as Rt, a0 as vt, a1 as Ot, a2 as Jl, a3 as Ql, a4 as Vt, a5 as _l, a6 as eo, a7 as ke, a8 as jt, a9 as ce, aa as tt, ab as to, ac as no, ad as lo, ae as oo, af as Nt, ag as nt, ah as lt, ai as io, aj as uo, ak as ro, al as zt, am as so, an as ao, ao as co, ap as fo, aq as Ht, ar as Gt, as as Ut, at as po, au as ho, av as Wt, aw as bo, j as S, p as qt, d as ee, ax as re, ay as vo, az as $o, aA as yo, aB as go, aC as xo, aD as mo, aE as Co, D as $e, a as le, S as De, aF as So, b as Xt, F as Yt, A as Do, P as Eo, c as Ao, aG as Ko } from "./TextInputWithIcon-elAaw22_.js";
import { c as Po } from "./componentLoader-Cv8RpErS.js";
import { a as ko, b as Bo, c as wo, d as To } from "./modelUtils-BKeUOTig.js";
import { c as ot } from "./logger-BM6R1Quw.js";
import { S as Fo } from "./Banner-DNWL7edh.js";
import { T as Mo } from "./TextAreaAutogrow-C3UX_QB_.js";
import { T as be } from "./TextInputLabeled-BSwHRbEr.js";
function Io(t, e) {
  const n = a.useRef(!0), l = a.useRef(null);
  a.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []), a.useEffect(() => {
    let o = l.current;
    n.current ? n.current = !1 : (!o || e.some((i, u) => !Object.is(i, o[u]))) && t(), l.current = e;
  }, e);
}
function $t(t, e) {
  const n = a.useRef(!0), l = a.useRef(null);
  Ae(() => (n.current = !0, () => {
    n.current = !1;
  }), []), Ae(() => {
    n.current ? n.current = !1 : (!l.current || e.some((o, i) => !Object.is(o, l[i]))) && t(), l.current = e;
  }, e);
}
function Lo(t, e) {
  const n = [];
  for (; t && t !== document.documentElement; )
    Ge(t, e) && n.push(t), t = t.parentElement;
  return n;
}
let Ro = 0;
const Oe = /* @__PURE__ */ new Map();
function Oo(t) {
  let [e, n] = a.useState();
  return Ae(() => {
    if (!t) return;
    let l = Oe.get(t);
    if (l)
      n(l.element.id);
    else {
      let o = `react-aria-description-${Ro++}`;
      n(o);
      let i = document.createElement("div");
      i.id = o, i.style.display = "none", i.textContent = t, document.body.appendChild(i), l = {
        refCount: 0,
        element: i
      }, Oe.set(t, l);
    }
    return l.refCount++, () => {
      l && --l.refCount === 0 && (l.element.remove(), Oe.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? e : void 0
  };
}
function ve(t, e, n, l) {
  let o = Ke(n), i = n == null;
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
function Zt(t, e) {
  let n = yt(t, e, "left"), l = yt(t, e, "top"), o = e.offsetWidth, i = e.offsetHeight, u = t.scrollLeft, r = t.scrollTop, { borderTopWidth: s, borderLeftWidth: f, scrollPaddingTop: p, scrollPaddingRight: c, scrollPaddingBottom: h, scrollPaddingLeft: d } = getComputedStyle(t), { scrollMarginTop: v, scrollMarginRight: m, scrollMarginBottom: y, scrollMarginLeft: g } = getComputedStyle(e), C = u + parseInt(f, 10), k = r + parseInt(s, 10), B = C + t.clientWidth, A = k + t.clientHeight, P = parseInt(p, 10) || 0, N = parseInt(h, 10) || 0, T = parseInt(c, 10) || 0, V = parseInt(d, 10) || 0, F = parseInt(v, 10) || 0, z = parseInt(y, 10) || 0, H = parseInt(m, 10) || 0, O = parseInt(g, 10) || 0, Y = n - O, w = n + o + H, U = l - F, $ = l + i + z, E = u + parseInt(f, 10) + V, M = B - T, b = r + parseInt(s, 10) + P, I = A - N;
  if ((Y > E || w < M) && (Y <= u + V ? u = Y - parseInt(f, 10) - V : w > B - T && (u += w - B + T)), (U > b || $ < I) && (U <= k + P ? r = U - parseInt(s, 10) - P : $ > A - N && (r += $ - A + N)), process.env.NODE_ENV === "test") {
    t.scrollLeft = u, t.scrollTop = r;
    return;
  }
  t.scrollTo({
    left: u,
    top: r
  });
}
function yt(t, e, n) {
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
    if (!(window.getComputedStyle(u).overflow === "hidden") && !Ol()) {
      var n;
      let { left: s, top: f } = t.getBoundingClientRect();
      t == null || (n = t.scrollIntoView) === null || n === void 0 || n.call(t, {
        block: "nearest"
      });
      let { left: p, top: c } = t.getBoundingClientRect();
      if (Math.abs(s - p) > 1 || Math.abs(f - c) > 1) {
        var l, o, i;
        e == null || (o = e.containingElement) === null || o === void 0 || (l = o.scrollIntoView) === null || l === void 0 || l.call(o, {
          block: "center",
          inline: "center"
        }), (i = t.scrollIntoView) === null || i === void 0 || i.call(t, {
          block: "nearest"
        });
      }
    } else {
      let s = Lo(t);
      for (let f of s) Zt(f, t);
    }
  }
}
function Vo(t, e) {
  let { collection: n, onLoadMore: l, scrollOffset: o = 1 } = t, i = a.useRef(null), u = Ke((r) => {
    for (let s of r)
      s.isIntersecting && l && l();
  });
  Ae(() => (e.current && (i.current = new IntersectionObserver(u, {
    root: Vl(e == null ? void 0 : e.current),
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
function jo(t) {
  const e = a.version.split(".");
  return parseInt(e[0], 10) >= 19 ? t : t ? "true" : void 0;
}
const No = "react-aria-clear-focus", zo = "react-aria-focus";
var Jt = {};
Jt = {
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
var Qt = {};
Qt = {
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
var _t = {};
_t = {
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
var en = {};
en = {
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
var tn = {};
tn = {
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
var nn = {};
nn = {
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
var ln = {};
ln = {
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
var on = {};
on = {
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
var un = {};
un = {
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
var rn = {};
rn = {
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
var sn = {};
sn = {
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
var an = {};
an = {
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
var cn = {};
cn = {
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
var dn = {};
dn = {
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
var fn = {};
fn = {
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
var pn = {};
pn = {
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
var hn = {};
hn = {
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
var bn = {};
bn = {
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
var vn = {};
vn = {
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
var $n = {};
$n = {
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
var yn = {};
yn = {
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
var xn = {};
xn = {
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
var mn = {};
mn = {
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
var Cn = {};
Cn = {
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
var Sn = {};
Sn = {
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
var Dn = {};
Dn = {
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
var En = {};
En = {
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
var An = {};
An = {
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
var Kn = {};
Kn = {
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
var Pn = {};
Pn = {
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
var kn = {};
kn = {
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
var Bn = {};
Bn = {
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
var wn = {};
wn = {
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
var Tn = {};
Tn = {
  "ar-AE": Jt,
  "bg-BG": Qt,
  "cs-CZ": _t,
  "da-DK": en,
  "de-DE": tn,
  "el-GR": nn,
  "en-US": ln,
  "es-ES": on,
  "et-EE": un,
  "fi-FI": rn,
  "fr-FR": sn,
  "he-IL": an,
  "hr-HR": cn,
  "hu-HU": dn,
  "it-IT": fn,
  "ja-JP": pn,
  "ko-KR": hn,
  "lt-LT": bn,
  "lv-LV": vn,
  "nb-NO": $n,
  "nl-NL": yn,
  "pl-PL": gn,
  "pt-BR": xn,
  "pt-PT": mn,
  "ro-RO": Cn,
  "ru-RU": Sn,
  "sk-SK": Dn,
  "sl-SI": En,
  "sr-SP": An,
  "sv-SE": Kn,
  "tr-TR": Pn,
  "uk-UA": kn,
  "zh-CN": Bn,
  "zh-TW": wn
};
let Ve = /* @__PURE__ */ new Map();
function it(t) {
  let { locale: e } = Ye(), n = e + (t ? Object.entries(t).sort((o, i) => o[0] < i[0] ? -1 : 1).join() : "");
  if (Ve.has(n)) return Ve.get(n);
  let l = new Intl.Collator(e, t);
  return Ve.set(n, l), l;
}
function Ho(t) {
  let e = it({
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
const Go = 500;
function Fn(t) {
  let { isDisabled: e, onLongPressStart: n, onLongPressEnd: l, onLongPress: o, threshold: i = Go, accessibilityDescription: u } = t;
  const r = a.useRef(void 0);
  let { addGlobalListener: s, removeGlobalListener: f } = jl(), { pressProps: p } = Ze({
    isDisabled: e,
    onPressStart(h) {
      if (h.continuePropagation(), (h.pointerType === "mouse" || h.pointerType === "touch") && (n && n({
        ...h,
        type: "longpressstart"
      }), r.current = setTimeout(() => {
        h.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), Je(h.target).activeElement !== h.target && ye(h.target), o && o({
          ...h,
          type: "longpress"
        }), r.current = void 0;
      }, i), h.pointerType === "touch")) {
        let d = (v) => {
          v.preventDefault();
        };
        s(h.target, "contextmenu", d, {
          once: !0
        }), s(window, "pointerup", () => {
          setTimeout(() => {
            f(h.target, "contextmenu", d);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(h) {
      r.current && clearTimeout(r.current), l && (h.pointerType === "mouse" || h.pointerType === "touch") && l({
        ...h,
        type: "longpressend"
      });
    }
  }), c = Oo(o && !e ? u : void 0);
  return {
    longPressProps: Z(p, c)
  };
}
function Mn(t) {
  let e = Wo(Je(t));
  e !== t && (e && Uo(e, t), t && ut(t, e));
}
function Uo(t, e) {
  t.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function ut(t, e) {
  t.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function Wo(t) {
  let e = Qe(t), n = e == null ? void 0 : e.getAttribute("aria-activedescendant");
  return n && t.getElementById(n) || e;
}
const Be = /* @__PURE__ */ new WeakMap();
function qo(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function In(t, e) {
  let n = Be.get(t);
  if (!n) throw new Error("Unknown list");
  return `${n.id}-option-${qo(e)}`;
}
function We(t) {
  return Se() ? t.altKey : t.ctrlKey;
}
function Ee(t, e) {
  var n, l;
  let o = `[data-key="${CSS.escape(String(e))}"]`, i = (n = t.current) === null || n === void 0 ? void 0 : n.dataset.collection;
  return i && (o = `[data-collection="${CSS.escape(i)}"]${o}`), (l = t.current) === null || l === void 0 ? void 0 : l.querySelector(o);
}
const Ln = /* @__PURE__ */ new WeakMap();
function Xo(t) {
  let e = me();
  return Ln.set(t, e), e;
}
function Yo(t) {
  return Ln.get(t);
}
const Zo = 1e3;
function Jo(t) {
  let { keyboardDelegate: e, selectionManager: n, onTypeSelect: l } = t, o = a.useRef({
    search: "",
    timeout: void 0
  }).current, i = (u) => {
    let r = Qo(u.key);
    if (!(!r || u.ctrlKey || u.metaKey || !u.currentTarget.contains(u.target) || o.search.length === 0 && r === " ")) {
      if (r === " " && o.search.trim().length > 0 && (u.preventDefault(), "continuePropagation" in u || u.stopPropagation()), o.search += r, e.getKeyForSearch != null) {
        let s = e.getKeyForSearch(o.search, n.focusedKey);
        s == null && (s = e.getKeyForSearch(o.search)), s != null && (n.setFocusedKey(s), l && l(s));
      }
      clearTimeout(o.timeout), o.timeout = setTimeout(() => {
        o.search = "";
      }, Zo);
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
function Qo(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function Rn(t) {
  let { selectionManager: e, keyboardDelegate: n, ref: l, autoFocus: o = !1, shouldFocusWrap: i = !1, disallowEmptySelection: u = !1, disallowSelectAll: r = !1, escapeKeyBehavior: s = "clearSelection", selectOnFocus: f = e.selectionBehavior === "replace", disallowTypeAhead: p = !1, shouldUseVirtualFocus: c, allowsTabNavigation: h = !1, isVirtualized: d, scrollRef: v = l, linkBehavior: m = "action" } = t, { direction: y } = Ye(), g = Pe(), C = ($) => {
    var E;
    if ($.altKey && $.key === "Tab" && $.preventDefault(), !(!((E = l.current) === null || E === void 0) && E.contains($.target))) return;
    const M = (x, L) => {
      if (x != null) {
        if (e.isLink(x) && m === "selection" && f && !We($)) {
          Mt.flushSync(() => {
            e.setFocusedKey(x, L);
          });
          let J = Ee(l, x), ue = e.getItemProps(x);
          J && g.open(J, $, ue.href, ue.routerOptions);
          return;
        }
        if (e.setFocusedKey(x, L), e.isLink(x) && m === "override") return;
        $.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(x) : f && !We($) && e.replaceSelection(x);
      }
    };
    switch ($.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var b, I, j;
          let x = e.focusedKey != null ? (b = n.getKeyBelow) === null || b === void 0 ? void 0 : b.call(n, e.focusedKey) : (I = n.getFirstKey) === null || I === void 0 ? void 0 : I.call(n);
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
          var Q, _, oe;
          let x = e.focusedKey != null ? (Q = n.getKeyLeftOf) === null || Q === void 0 ? void 0 : Q.call(n, e.focusedKey) : null;
          x == null && i && (x = y === "rtl" ? (_ = n.getFirstKey) === null || _ === void 0 ? void 0 : _.call(n, e.focusedKey) : (oe = n.getLastKey) === null || oe === void 0 ? void 0 : oe.call(n, e.focusedKey)), x != null && ($.preventDefault(), M(x, y === "rtl" ? "first" : "last"));
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var ie, ae, K;
          let x = e.focusedKey != null ? (ie = n.getKeyRightOf) === null || ie === void 0 ? void 0 : ie.call(n, e.focusedKey) : null;
          x == null && i && (x = y === "rtl" ? (ae = n.getLastKey) === null || ae === void 0 ? void 0 : ae.call(n, e.focusedKey) : (K = n.getFirstKey) === null || K === void 0 ? void 0 : K.call(n, e.focusedKey)), x != null && ($.preventDefault(), M(x, y === "rtl" ? "last" : "first"));
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
        if (!h) {
          if ($.shiftKey) l.current.focus();
          else {
            let x = Nl(l.current, {
              tabbable: !0
            }), L, J;
            do
              J = x.lastChild(), J && (L = J);
            while (J);
            L && !L.contains(document.activeElement) && ye(L);
          }
          break;
        }
    }
  }, k = a.useRef({
    top: 0,
    left: 0
  });
  ve(v, "scroll", d ? void 0 : () => {
    var $, E, M, b;
    k.current = {
      top: (M = ($ = v.current) === null || $ === void 0 ? void 0 : $.scrollTop) !== null && M !== void 0 ? M : 0,
      left: (b = (E = v.current) === null || E === void 0 ? void 0 : E.scrollLeft) !== null && b !== void 0 ? b : 0
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
        var b, I;
        q && $.currentTarget.compareDocumentPosition(q) & Node.DOCUMENT_POSITION_FOLLOWING ? j((b = e.lastSelectedKey) !== null && b !== void 0 ? b : (E = n.getLastKey) === null || E === void 0 ? void 0 : E.call(n)) : j((I = e.firstSelectedKey) !== null && I !== void 0 ? I : (M = n.getFirstKey) === null || M === void 0 ? void 0 : M.call(n));
      } else !d && v.current && (v.current.scrollTop = k.current.top, v.current.scrollLeft = k.current.left);
      if (e.focusedKey != null && v.current) {
        let j = Ee(l, e.focusedKey);
        j instanceof HTMLElement && (!j.contains(document.activeElement) && !c && ye(j), ft() === "keyboard" && gt(j, {
          containingElement: l.current
        }));
      }
    }
  }, A = ($) => {
    $.currentTarget.contains($.relatedTarget) || e.setFocused(!1);
  }, P = a.useRef(!1);
  ve(l, zo, c ? ($) => {
    let { detail: E } = $;
    $.stopPropagation(), e.setFocused(!0), (E == null ? void 0 : E.focusStrategy) === "first" && (P.current = !0);
  } : void 0);
  let N = Ke(() => {
    var $, E;
    let M = (E = ($ = n.getFirstKey) === null || $ === void 0 ? void 0 : $.call(n)) !== null && E !== void 0 ? E : null;
    if (M == null) {
      let b = Qe();
      Mn(l.current), ut(b, null), e.collection.size > 0 && (P.current = !1);
    } else
      e.setFocusedKey(M), P.current = !1;
  });
  $t(() => {
    P.current && N();
  }, [
    e.collection,
    N
  ]);
  let T = Ke(() => {
    e.collection.size > 0 && (P.current = !1);
  });
  $t(() => {
    T();
  }, [
    e.focusedKey,
    T
  ]), ve(l, No, c ? ($) => {
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
      var b;
      o === "last" && (I = (b = (E = n.getLastKey) === null || E === void 0 ? void 0 : E.call(n)) !== null && b !== void 0 ? b : null);
      let j = e.selectedKeys;
      if (j.size) {
        for (let q of j) if (e.canSelectItem(q)) {
          I = q;
          break;
        }
      }
      e.setFocused(!0), e.setFocusedKey(I), I == null && !c && l.current && Ue(l.current), e.collection.size > 0 && (V.current = !1, F.current = !0);
    }
  });
  let z = a.useRef(e.focusedKey), H = a.useRef(null);
  a.useEffect(() => {
    if (e.isFocused && e.focusedKey != null && (e.focusedKey !== z.current || F.current) && v.current && l.current) {
      let $ = ft(), E = Ee(l, e.focusedKey);
      if (!(E instanceof HTMLElement))
        return;
      ($ === "keyboard" || F.current) && (H.current && cancelAnimationFrame(H.current), H.current = requestAnimationFrame(() => {
        v.current && (Zt(v.current, E), $ !== "virtual" && gt(E, {
          containingElement: l.current
        }));
      }));
    }
    !c && e.isFocused && e.focusedKey == null && z.current != null && l.current && Ue(l.current), z.current = e.focusedKey, F.current = !1;
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
  }, { typeSelectProps: Y } = Jo({
    keyboardDelegate: n,
    selectionManager: e
  });
  p || (O = Z(Y, O));
  let w;
  c || (w = e.focusedKey == null ? 0 : -1);
  let U = Xo(e.collection);
  return {
    collectionProps: Z(O, {
      tabIndex: w,
      "data-collection": U
    })
  };
}
function _o(t) {
  let { id: e, selectionManager: n, key: l, ref: o, shouldSelectOnPressUp: i, shouldUseVirtualFocus: u, focus: r, isDisabled: s, onAction: f, allowsDifferentPressOrigin: p, linkBehavior: c = "action" } = t, h = Pe();
  e = me(e);
  let d = (b) => {
    if (b.pointerType === "keyboard" && We(b)) n.toggleSelection(l);
    else {
      if (n.selectionMode === "none") return;
      if (n.isLink(l)) {
        if (c === "selection" && o.current) {
          let I = n.getItemProps(l);
          h.open(o.current, b, I.href, I.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return;
        } else if (c === "override" || c === "none") return;
      }
      n.selectionMode === "single" ? n.isSelected(l) && !n.disallowEmptySelection ? n.toggleSelection(l) : n.replaceSelection(l) : b && b.shiftKey ? n.extendSelection(l) : n.selectionBehavior === "toggle" || b && (de(b) || b.pointerType === "touch" || b.pointerType === "virtual") ? n.toggleSelection(l) : n.replaceSelection(l);
    }
  };
  a.useEffect(() => {
    l === n.focusedKey && n.isFocused && (u ? Mn(o.current) : r ? r() : document.activeElement !== o.current && o.current && Ue(o.current));
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
    onFocus(b) {
      b.target === o.current && n.setFocusedKey(l);
    }
  } : s && (v.onMouseDown = (b) => {
    b.preventDefault();
  });
  let m = n.isLink(l) && c === "override", y = f && t.UNSTABLE_itemBehavior === "action", g = n.isLink(l) && c !== "selection" && c !== "none", C = !s && n.canSelectItem(l) && !m && !y, k = (f || g) && !s, B = k && (n.selectionBehavior === "replace" ? !C : !C || n.isEmpty), A = k && C && n.selectionBehavior === "replace", P = B || A, N = a.useRef(null), T = P && C, V = a.useRef(!1), F = a.useRef(!1), z = n.getItemProps(l), H = (b) => {
    if (f) {
      var I;
      f(), (I = o.current) === null || I === void 0 || I.dispatchEvent(new CustomEvent("react-aria-item-action", {
        bubbles: !0
      }));
    }
    g && o.current && h.open(o.current, b, z.href, z.routerOptions);
  }, O = {
    ref: o
  };
  if (i ? (O.onPressStart = (b) => {
    N.current = b.pointerType, V.current = T, b.pointerType === "keyboard" && (!P || mt()) && d(b);
  }, p ? (O.onPressUp = B ? void 0 : (b) => {
    b.pointerType === "mouse" && C && d(b);
  }, O.onPress = B ? H : (b) => {
    b.pointerType !== "keyboard" && b.pointerType !== "mouse" && C && d(b);
  }) : O.onPress = (b) => {
    if (B || A && b.pointerType !== "mouse") {
      if (b.pointerType === "keyboard" && !xt()) return;
      H(b);
    } else b.pointerType !== "keyboard" && C && d(b);
  }) : (O.onPressStart = (b) => {
    N.current = b.pointerType, V.current = T, F.current = B, C && (b.pointerType === "mouse" && !B || b.pointerType === "keyboard" && (!k || mt())) && d(b);
  }, O.onPress = (b) => {
    (b.pointerType === "touch" || b.pointerType === "pen" || b.pointerType === "virtual" || b.pointerType === "keyboard" && P && xt() || b.pointerType === "mouse" && F.current) && (P ? H(b) : C && d(b));
  }), v["data-collection"] = Yo(n.collection), v["data-key"] = l, O.preventFocusOnPress = u, u && (O = Z(O, {
    onPressStart(b) {
      b.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(l));
    },
    onPress(b) {
      b.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(l));
    }
  })), z)
    for (let b of [
      "onPressStart",
      "onPressEnd",
      "onPressChange",
      "onPress",
      "onPressUp",
      "onClick"
    ]) z[b] && (O[b] = _e(O[b], z[b]));
  let { pressProps: Y, isPressed: w } = Ze(O), U = A ? (b) => {
    N.current === "mouse" && (b.stopPropagation(), b.preventDefault(), H(b));
  } : void 0, { longPressProps: $ } = Fn({
    isDisabled: !T,
    onLongPress(b) {
      b.pointerType === "touch" && (d(b), n.setSelectionBehavior("toggle"));
    }
  }), E = (b) => {
    N.current === "touch" && V.current && b.preventDefault();
  }, M = c !== "none" && n.isLink(l) ? (b) => {
    zl.isOpening || b.preventDefault();
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
        onMouseDown: (b) => b.preventDefault()
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
function xt() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === "Enter";
}
function mt() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === " " || (t == null ? void 0 : t.code) === "Space";
}
class Ct {
  getItemRect(e) {
    let n = this.ref.current;
    if (!n) return null;
    let l = e != null ? Ee(this.ref, e) : null;
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
class rt {
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
    if (n && !Ge(n)) return this.getFirstKey();
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
    if (n && !Ge(n)) return this.getLastKey();
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
      this.collection = n.collection, this.ref = n.ref, this.collator = n.collator, this.disabledKeys = n.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = n.disabledBehavior || "all", this.orientation = n.orientation || "vertical", this.direction = n.direction, this.layout = n.layout || "stack", this.layoutDelegate = n.layoutDelegate || new Ct(n.ref);
    } else
      this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new Ct(this.ref);
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function ei(t) {
  let { selectionManager: e, collection: n, disabledKeys: l, ref: o, keyboardDelegate: i, layoutDelegate: u } = t, r = it({
    usage: "search",
    sensitivity: "base"
  }), s = e.disabledBehavior, f = a.useMemo(() => i || new rt({
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
  ]), { collectionProps: p } = Rn({
    ...t,
    ref: o,
    selectionManager: e,
    keyboardDelegate: f
  });
  return {
    listProps: p
  };
}
function ti(t, e, n) {
  let l = se(t, {
    labelable: !0
  }), o = t.selectionBehavior || "toggle", i = t.linkBehavior || (o === "replace" ? "action" : "override");
  o === "toggle" && i === "action" && (i = "override");
  let { listProps: u } = ei({
    ...t,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: r } = Hl({
    onFocusWithin: t.onFocus,
    onBlurWithin: t.onBlur,
    onFocusWithinChange: t.onFocusChange
  }), s = me(t.id);
  Be.set(e, {
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
  let { labelProps: f, fieldProps: p } = Gl({
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
      ...Z(p, u)
    })
  };
}
class ni {
  build(e, n) {
    return this.context = n, St(() => this.iterateCollection(e));
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
      let y = [];
      D.Children.forEach(e.element.props.children, (C) => {
        y.push(C);
      });
      var i;
      let g = (i = e.index) !== null && i !== void 0 ? i : 0;
      for (const C of y) yield* this.getFullNode({
        element: C,
        index: g++
      }, n, l, o);
      return;
    }
    let u = e.element;
    if (!u && e.value && n && n.renderer) {
      let y = this.cache.get(e.value);
      if (y && (!y.shouldInvalidate || !y.shouldInvalidate(this.context))) {
        y.index = e.index, y.parentKey = o ? o.key : null, yield y;
        return;
      }
      u = n.renderer(e.value);
    }
    if (D.isValidElement(u)) {
      let y = u.type;
      if (typeof y != "function" && typeof y.getCollectionNode != "function") {
        let B = u.type;
        throw new Error(`Unknown element <${B}> in collection.`);
      }
      let g = y.getCollectionNode(u.props, this.context);
      var r;
      let C = (r = e.index) !== null && r !== void 0 ? r : 0, k = g.next();
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
            wrapper: li(e.wrapper, B.wrapper)
          }, this.getChildState(n, B), l ? `${l}${u.key}` : u.key, o)
        ];
        for (let T of N) {
          var f, p;
          T.value = (p = (f = B.value) !== null && f !== void 0 ? f : e.value) !== null && p !== void 0 ? p : null, T.value && this.cache.set(T.value, T);
          var c;
          if (e.type && T.type !== e.type) throw new Error(`Unsupported type <${je(T.type)}> in <${je((c = o == null ? void 0 : o.type) !== null && c !== void 0 ? c : "unknown parent type")}>. Only <${je(e.type)}> is supported.`);
          C++, yield T;
        }
        k = g.next(N);
      }
      return;
    }
    if (e.key == null || e.type == null) return;
    let h = this;
    var d, v;
    let m = {
      type: e.type,
      props: e.props,
      key: e.key,
      parentKey: o ? o.key : null,
      value: (d = e.value) !== null && d !== void 0 ? d : null,
      level: o ? o.level + 1 : 0,
      index: e.index,
      rendered: e.rendered,
      textValue: (v = e.textValue) !== null && v !== void 0 ? v : "",
      "aria-label": e["aria-label"],
      wrapper: e.wrapper,
      shouldInvalidate: e.shouldInvalidate,
      hasChildNodes: e.hasChildNodes || !1,
      childNodes: St(function* () {
        if (!e.hasChildNodes || !e.childNodes) return;
        let y = 0;
        for (let g of e.childNodes()) {
          g.key != null && (g.key = `${m.key}${g.key}`);
          let C = h.getFullNode({
            ...g,
            index: y
          }, h.getChildState(n, g), m.key, m);
          for (let k of C)
            y++, yield k;
        }
      })
    };
    yield m;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function St(t) {
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
function li(t, e) {
  if (t && e) return (n) => t(e(n));
  if (t) return t;
  if (e) return e;
}
function je(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function oi(t, e, n) {
  let l = a.useMemo(() => new ni(), []), { children: o, items: i, collection: u } = t;
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
function we(t, e) {
  return typeof e.getChildren == "function" ? e.getChildren(t.key) : t.childNodes;
}
function ii(t) {
  return ui(t);
}
function ui(t, e) {
  for (let n of t)
    return n;
}
function Ne(t, e, n) {
  if (e.parentKey === n.parentKey) return e.index - n.index;
  let l = [
    ...Dt(t, e),
    e
  ], o = [
    ...Dt(t, n),
    n
  ], i = l.slice(0, o.length).findIndex((u, r) => u !== o[r]);
  return i !== -1 ? (e = l[i], n = o[i], e.index - n.index) : l.findIndex((u) => u === n) >= 0 ? 1 : (o.findIndex((u) => u === e) >= 0, -1);
}
function Dt(t, e) {
  let n = [], l = e;
  for (; (l == null ? void 0 : l.parentKey) != null; )
    l = t.getItem(l.parentKey), l && n.unshift(l);
  return n;
}
const Et = /* @__PURE__ */ new WeakMap();
function On(t) {
  let e = Et.get(t);
  if (e != null) return e;
  let n = 0, l = (o) => {
    for (let i of o)
      i.type === "section" ? l(we(i, t)) : i.type === "item" && n++;
  };
  return l(t), Et.set(t, n), n;
}
function ri(t, e, n) {
  var l, o;
  let { key: i } = t, u = Be.get(e);
  var r;
  let s = (r = t.isDisabled) !== null && r !== void 0 ? r : e.selectionManager.isDisabled(i);
  var f;
  let p = (f = t.isSelected) !== null && f !== void 0 ? f : e.selectionManager.isSelected(i);
  var c;
  let h = (c = t.shouldSelectOnPressUp) !== null && c !== void 0 ? c : u == null ? void 0 : u.shouldSelectOnPressUp;
  var d;
  let v = (d = t.shouldFocusOnHover) !== null && d !== void 0 ? d : u == null ? void 0 : u.shouldFocusOnHover;
  var m;
  let y = (m = t.shouldUseVirtualFocus) !== null && m !== void 0 ? m : u == null ? void 0 : u.shouldUseVirtualFocus;
  var g;
  let C = (g = t.isVirtualized) !== null && g !== void 0 ? g : u == null ? void 0 : u.isVirtualized, k = pt(), B = pt(), A = {
    role: "option",
    "aria-disabled": s || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? p : void 0
  };
  Ul() && Wl() || (A["aria-label"] = t["aria-label"], A["aria-labelledby"] = k, A["aria-describedby"] = B);
  let P = e.collection.getItem(i);
  if (C) {
    let $ = Number(P == null ? void 0 : P.index);
    A["aria-posinset"] = Number.isNaN($) ? void 0 : $ + 1, A["aria-setsize"] = On(e.collection);
  }
  let N = u != null && u.onAction ? () => {
    var $;
    return u == null || ($ = u.onAction) === null || $ === void 0 ? void 0 : $.call(u, i);
  } : void 0, T = In(e, i), { itemProps: V, isPressed: F, isFocused: z, hasAction: H, allowsSelection: O } = _o({
    selectionManager: e.selectionManager,
    key: i,
    ref: n,
    shouldSelectOnPressUp: h,
    allowsDifferentPressOrigin: h && v,
    isVirtualized: C,
    shouldUseVirtualFocus: y,
    isDisabled: s,
    onAction: N || !(P == null || (l = P.props) === null || l === void 0) && l.onAction ? _e(P == null || (o = P.props) === null || o === void 0 ? void 0 : o.onAction, N) : void 0,
    linkBehavior: u == null ? void 0 : u.linkBehavior,
    // @ts-ignore
    UNSTABLE_itemBehavior: u == null ? void 0 : u.UNSTABLE_itemBehavior,
    id: T
  }), { hoverProps: Y } = et({
    isDisabled: s || !v,
    onHoverStart() {
      ht() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(i));
    }
  }), w = se(P == null ? void 0 : P.props);
  delete w.id;
  let U = It(P == null ? void 0 : P.props);
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
    isFocusVisible: z && e.selectionManager.isFocused && ht(),
    isSelected: p,
    isDisabled: s,
    isPressed: F,
    allowsSelection: O,
    hasAction: H
  };
}
function si(t) {
  let { heading: e, "aria-label": n } = t, l = me();
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
var Vn = {};
Vn = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var jn = {};
jn = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var Nn = {};
Nn = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var zn = {};
zn = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var Hn = {};
Hn = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var Gn = {};
Gn = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var Un = {};
Un = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Wn = {};
Wn = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var qn = {};
qn = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var Xn = {};
Xn = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var Yn = {};
Yn = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Zn = {};
Zn = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var Jn = {};
Jn = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Qn = {};
Qn = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var _n = {};
_n = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var el = {};
el = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var tl = {};
tl = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var nl = {};
nl = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var ll = {};
ll = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var ol = {};
ol = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var il = {};
il = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var ul = {};
ul = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var rl = {};
rl = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var sl = {};
sl = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var al = {};
al = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var cl = {};
cl = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var dl = {};
dl = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var fl = {};
fl = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var pl = {};
pl = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var hl = {};
hl = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var bl = {};
bl = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var vl = {};
vl = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var $l = {};
$l = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var yl = {};
yl = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
var gl = {};
gl = {
  "ar-AE": Vn,
  "bg-BG": jn,
  "cs-CZ": Nn,
  "da-DK": zn,
  "de-DE": Hn,
  "el-GR": Gn,
  "en-US": Un,
  "es-ES": Wn,
  "et-EE": qn,
  "fi-FI": Xn,
  "fr-FR": Yn,
  "he-IL": Zn,
  "hr-HR": Jn,
  "hu-HU": Qn,
  "it-IT": _n,
  "ja-JP": el,
  "ko-KR": tl,
  "lt-LT": nl,
  "lv-LV": ll,
  "nb-NO": ol,
  "nl-NL": il,
  "pl-PL": ul,
  "pt-BR": rl,
  "pt-PT": sl,
  "ro-RO": al,
  "ru-RU": cl,
  "sk-SK": dl,
  "sl-SI": fl,
  "sr-SP": pl,
  "sv-SE": hl,
  "tr-TR": bl,
  "uk-UA": vl,
  "zh-CN": $l,
  "zh-TW": yl
};
function ai(t) {
  return t && t.__esModule ? t.default : t;
}
function ci(t, e, n) {
  let { type: l = "menu", isDisabled: o, trigger: i = "press" } = t, u = me(), { triggerProps: r, overlayProps: s } = ql({
    type: l
  }, e, n), f = (d) => {
    if (!o && !(i === "longPress" && !d.altKey) && n && n.current)
      switch (d.key) {
        case "Enter":
        case " ":
          if (i === "longPress" || d.isDefaultPrevented()) return;
        // fallthrough
        case "ArrowDown":
          "continuePropagation" in d || d.stopPropagation(), d.preventDefault(), e.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in d || d.stopPropagation(), d.preventDefault(), e.toggle("last");
          break;
        default:
          "continuePropagation" in d && d.continuePropagation();
      }
  }, p = Lt(ai(gl), "@react-aria/menu"), { longPressProps: c } = Fn({
    isDisabled: o || i !== "longPress",
    accessibilityDescription: p.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), h = {
    preventFocusOnPress: !0,
    onPressStart(d) {
      d.pointerType !== "touch" && d.pointerType !== "keyboard" && !o && (ye(d.target), e.open(d.pointerType === "virtual" ? "first" : null));
    },
    onPress(d) {
      d.pointerType === "touch" && !o && (ye(d.target), e.toggle());
    }
  };
  return delete r.onPress, {
    // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
    menuTriggerProps: {
      ...r,
      ...i === "press" ? h : c,
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
function di(t) {
  return t && t.__esModule ? t.default : t;
}
function fi(t, e) {
  let { buttonRef: n, popoverRef: l, inputRef: o, listBoxRef: i, keyboardDelegate: u, layoutDelegate: r, shouldFocusWrap: s, isReadOnly: f, isDisabled: p } = t, c = a.useRef(null);
  n = n ?? c;
  let h = Lt(di(Tn), "@react-aria/combobox"), { menuTriggerProps: d, menuProps: v } = ci({
    type: "listbox",
    isDisabled: p || f
  }, e, n);
  Be.set(e, {
    id: v.id
  });
  let { collection: m } = e, { disabledKeys: y } = e.selectionManager, g = a.useMemo(() => u || new rt({
    collection: m,
    disabledKeys: y,
    ref: i,
    layoutDelegate: r
  }), [
    u,
    r,
    m,
    y,
    i
  ]), { collectionProps: C } = Rn({
    selectionManager: e.selectionManager,
    keyboardDelegate: g,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: s,
    ref: o,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), k = Pe(), B = (K) => {
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
  }, { isInvalid: N, validationErrors: T, validationDetails: V } = e.displayValidation, { labelProps: F, inputProps: z, descriptionProps: H, errorMessageProps: O } = Xl({
    ...t,
    onChange: e.setInputValue,
    onKeyDown: f ? t.onKeyDown : _e(e.isOpen && C.onKeyDown, B, t.onKeyDown),
    onBlur: A,
    value: e.inputValue,
    defaultValue: e.defaultInputValue,
    onFocus: P,
    autoComplete: "off",
    validate: void 0,
    [Yl]: e
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
  }, U = bt({
    id: d.id,
    "aria-label": h.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || F.id
  }), $ = bt({
    id: v.id,
    "aria-label": h.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || F.id
  }), E = a.useRef(0), M = (K) => {
    if (p || f) return;
    if (K.timeStamp - E.current < 500) {
      var x;
      K.preventDefault(), (x = o.current) === null || x === void 0 || x.focus();
      return;
    }
    let L = K.target.getBoundingClientRect(), J = K.changedTouches[0], ue = Math.ceil(L.left + 0.5 * L.width), Me = Math.ceil(L.top + 0.5 * L.height);
    if (J.clientX === ue && J.clientY === Me) {
      var he;
      K.preventDefault(), (he = o.current) === null || he === void 0 || he.focus(), e.toggle(null, "manual"), E.current = K.timeStamp;
    }
  }, b = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var I;
  let j = (I = b == null ? void 0 : b.parentKey) !== null && I !== void 0 ? I : null;
  var q;
  let X = (q = e.selectionManager.focusedKey) !== null && q !== void 0 ? q : null, ne = a.useRef(j), Q = a.useRef(X);
  a.useEffect(() => {
    if (Se() && b != null && X != null && X !== Q.current) {
      let x = e.selectionManager.isSelected(X), L = j != null ? e.collection.getItem(j) : null, J = (L == null ? void 0 : L["aria-label"]) || (typeof (L == null ? void 0 : L.rendered) == "string" ? L.rendered : "") || "";
      var K;
      let ue = h.format("focusAnnouncement", {
        isGroupChange: (K = L && j !== ne.current) !== null && K !== void 0 ? K : !1,
        groupTitle: J,
        groupCount: L ? [
          ...we(L, e.collection)
        ].length : 0,
        optionText: b["aria-label"] || b.textValue || "",
        isSelected: x
      });
      Re(ue);
    }
    ne.current = j, Q.current = X;
  });
  let _ = On(e.collection), oe = a.useRef(_), ie = a.useRef(e.isOpen);
  a.useEffect(() => {
    let K = e.isOpen !== ie.current && (e.selectionManager.focusedKey == null || Se());
    if (e.isOpen && (K || _ !== oe.current)) {
      let x = h.format("countAnnouncement", {
        optionCount: _
      });
      Re(x);
    }
    oe.current = _, ie.current = e.isOpen;
  });
  let ae = a.useRef(e.selectedKey);
  return a.useEffect(() => {
    if (Se() && e.isFocused && e.selectedItem && e.selectedKey !== ae.current) {
      let K = e.selectedItem["aria-label"] || e.selectedItem.textValue || "", x = h.format("selectedAnnouncement", {
        optionText: K
      });
      Re(x);
    }
    ae.current = e.selectedKey;
  }), a.useEffect(() => {
    if (e.isOpen) return Zl([
      o.current,
      l.current
    ].filter((K) => K != null));
  }, [
    e.isOpen,
    o,
    l
  ]), Io(() => {
    !b && o.current && Qe(Je(o.current)) === o.current && ut(o.current, null);
  }, [
    b
  ]), ve(i, "react-aria-item-action", e.isOpen ? () => {
    e.close();
  } : void 0), {
    labelProps: F,
    buttonProps: {
      ...d,
      ...U,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      onPress: Y,
      onPressStart: w,
      isDisabled: p || f
    },
    inputProps: Z(z, {
      role: "combobox",
      "aria-expanded": d["aria-expanded"],
      "aria-controls": e.isOpen ? v.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": b ? In(e, b.key) : void 0,
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
class xl {
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
class fe extends xl {
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
    let f = this.nextVisibleSibling, p = this.getMutableNode();
    if (p != null) {
      p.index = this.index, p.level = this.level;
      var c;
      p.parentKey = this.parentNode instanceof fe && (c = (e = this.parentNode.node) === null || e === void 0 ? void 0 : e.key) !== null && c !== void 0 ? c : null;
      var h;
      p.prevKey = (h = (l = this.previousVisibleSibling) === null || l === void 0 || (n = l.node) === null || n === void 0 ? void 0 : n.key) !== null && h !== void 0 ? h : null;
      var d;
      p.nextKey = (d = f == null || (o = f.node) === null || o === void 0 ? void 0 : o.key) !== null && d !== void 0 ? d : null, p.hasChildNodes = !!this.firstChild;
      var v;
      p.firstChildKey = (v = (u = this.firstVisibleChild) === null || u === void 0 || (i = u.node) === null || i === void 0 ? void 0 : i.key) !== null && v !== void 0 ? v : null;
      var m;
      if (p.lastChildKey = (m = (s = this.lastVisibleChild) === null || s === void 0 || (r = s.node) === null || r === void 0 ? void 0 : r.key) !== null && m !== void 0 ? m : null, (p.colSpan != null || p.colIndex != null) && f) {
        var y, g;
        let C = ((y = p.colIndex) !== null && y !== void 0 ? y : p.index) + ((g = p.colSpan) !== null && g !== void 0 ? g : 1);
        if (f.node != null && C !== f.node.colIndex) {
          let k = f.getMutableNode();
          k.colIndex = C;
        }
      }
    }
  }
  setProps(e, n, l, o, i) {
    let u, { value: r, textValue: s, id: f, ...p } = e;
    if (this.node == null ? (u = new l(f ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = u) : u = this.getMutableNode(), p.ref = n, u.props = p, u.rendered = o, u.render = i, u.value = r, u.textValue = s || (typeof p.children == "string" ? p.children : "") || e["aria-label"] || "", f != null && f !== u.key) throw new Error("Cannot change the id of an item");
    p.colSpan != null && (u.colSpan = p.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
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
class pi extends xl {
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
function ml(t) {
  let { children: e, items: n, idScope: l, addIdAndValue: o, dependencies: i = [] } = t, u = a.useMemo(() => /* @__PURE__ */ new WeakMap(), i);
  return a.useMemo(() => {
    if (n && typeof e == "function") {
      let f = [];
      for (let p of n) {
        let c = u.get(p);
        if (!c) {
          c = e(p);
          var r, s;
          let h = (s = (r = c.props.id) !== null && r !== void 0 ? r : p.key) !== null && s !== void 0 ? s : p.id;
          if (h == null) throw new Error("Could not determine key for item");
          l && (h = l + ":" + h), c = a.cloneElement(c, o ? {
            key: h,
            id: h,
            value: p
          } : {
            key: h
          }), u.set(p, c);
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
var Ce = { exports: {} }, ze = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function hi() {
  if (At) return ze;
  At = 1;
  var t = Rt();
  function e(c, h) {
    return c === h && (c !== 0 || 1 / c === 1 / h) || c !== c && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : e, l = t.useState, o = t.useEffect, i = t.useLayoutEffect, u = t.useDebugValue;
  function r(c, h) {
    var d = h(), v = l({ inst: { value: d, getSnapshot: h } }), m = v[0].inst, y = v[1];
    return i(
      function() {
        m.value = d, m.getSnapshot = h, s(m) && y({ inst: m });
      },
      [c, d, h]
    ), o(
      function() {
        return s(m) && y({ inst: m }), c(function() {
          s(m) && y({ inst: m });
        });
      },
      [c]
    ), u(d), d;
  }
  function s(c) {
    var h = c.getSnapshot;
    c = c.value;
    try {
      var d = h();
      return !n(c, d);
    } catch {
      return !0;
    }
  }
  function f(c, h) {
    return h();
  }
  var p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : r;
  return ze.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : p, ze;
}
var He = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function bi() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && function() {
    function t(d, v) {
      return d === v && (d !== 0 || 1 / d === 1 / v) || d !== d && v !== v;
    }
    function e(d, v) {
      p || o.startTransition === void 0 || (p = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = v();
      if (!c) {
        var y = v();
        i(m, y) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      y = u({
        inst: { value: m, getSnapshot: v }
      });
      var g = y[0].inst, C = y[1];
      return s(
        function() {
          g.value = m, g.getSnapshot = v, n(g) && C({ inst: g });
        },
        [d, m, v]
      ), r(
        function() {
          return n(g) && C({ inst: g }), d(function() {
            n(g) && C({ inst: g });
          });
        },
        [d]
      ), f(m), m;
    }
    function n(d) {
      var v = d.getSnapshot;
      d = d.value;
      try {
        var m = v();
        return !i(d, m);
      } catch {
        return !0;
      }
    }
    function l(d, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Rt(), i = typeof Object.is == "function" ? Object.is : t, u = o.useState, r = o.useEffect, s = o.useLayoutEffect, f = o.useDebugValue, p = !1, c = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : e;
    He.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), He;
}
var Pt;
function vi() {
  return Pt || (Pt = 1, process.env.NODE_ENV === "production" ? Ce.exports = hi() : Ce.exports = bi()), Ce.exports;
}
var $i = vi();
const Cl = /* @__PURE__ */ a.createContext(!1), ge = /* @__PURE__ */ a.createContext(null);
function Sl(t) {
  if (a.useContext(ge))
    return t.content;
  let { collection: n, document: l } = mi(t.createCollection);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(Jl, null, /* @__PURE__ */ D.createElement(ge.Provider, {
    value: l
  }, t.content)), /* @__PURE__ */ D.createElement(yi, {
    render: t.children,
    collection: n
  }));
}
function yi({ collection: t, render: e }) {
  return e(t);
}
function gi(t, e, n) {
  let l = Vt(), o = a.useRef(l);
  o.current = l;
  let i = a.useCallback(() => o.current ? n() : e(), [
    e,
    n
  ]);
  return $i.useSyncExternalStore(t, i);
}
const xi = typeof D.useSyncExternalStore == "function" ? D.useSyncExternalStore : gi;
function mi(t) {
  let [e] = a.useState(() => new pi((t == null ? void 0 : t()) || new Ql())), n = a.useCallback((u) => e.subscribe(u), [
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
    collection: xi(n, l, o),
    document: e
  };
}
const qe = /* @__PURE__ */ a.createContext(null);
function Ci(t) {
  var e;
  return e = class extends Ot {
  }, e.type = t, e;
}
function Si(t, e, n, l, o, i) {
  typeof t == "string" && (t = Ci(t));
  let u = a.useCallback((s) => {
    s == null || s.setProps(e, n, t, l, i);
  }, [
    e,
    n,
    l,
    i,
    t
  ]), r = a.useContext(qe);
  if (r) {
    let s = r.ownerDocument.nodesByProps.get(e);
    return s || (s = r.ownerDocument.createElement(t.type), s.setProps(e, n, t, l, i), r.appendChild(s), r.ownerDocument.updateCollection(), r.ownerDocument.nodesByProps.set(e, s)), o ? /* @__PURE__ */ D.createElement(qe.Provider, {
      value: s
    }, o) : null;
  }
  return /* @__PURE__ */ D.createElement(t.type, {
    ref: u
  }, o);
}
function Dl(t, e) {
  let n = ({ node: o }) => e(o.props, o.props.ref, o), l = a.forwardRef((o, i) => {
    let u = a.useContext(vt);
    if (!a.useContext(Cl)) {
      if (e.length >= 3) throw new Error(e.name + " cannot be rendered outside a collection.");
      return e(o, i);
    }
    return Si(t, o, i, "children" in o ? o.children : null, null, (s) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ D.createElement(vt.Provider, {
        value: u
      }, /* @__PURE__ */ D.createElement(n, {
        node: s
      }))
    ));
  });
  return l.displayName = e.name, l;
}
function Di(t) {
  return ml({
    ...t,
    addIdAndValue: !0
  });
}
const kt = /* @__PURE__ */ a.createContext(null);
function Ei(t) {
  let e = a.useContext(kt), n = ((e == null ? void 0 : e.dependencies) || []).concat(t.dependencies), l = t.idScope || (e == null ? void 0 : e.idScope), o = Di({
    ...t,
    idScope: l,
    dependencies: n
  });
  return a.useContext(ge) && (o = /* @__PURE__ */ D.createElement(Ai, null, o)), e = a.useMemo(() => ({
    dependencies: n,
    idScope: l
  }), [
    l,
    ...n
  ]), /* @__PURE__ */ D.createElement(kt.Provider, {
    value: e
  }, o);
}
function Ai({ children: t }) {
  let e = a.useContext(ge), n = a.useMemo(() => /* @__PURE__ */ D.createElement(ge.Provider, {
    value: null
  }, /* @__PURE__ */ D.createElement(Cl.Provider, {
    value: !0
  }, t)), [
    t
  ]);
  return Vt() ? /* @__PURE__ */ D.createElement(qe.Provider, {
    value: e
  }, n) : /* @__PURE__ */ Mt.createPortal(n, e);
}
const Ki = /* @__PURE__ */ a.createContext(null), Pi = {
  CollectionRoot({ collection: t, renderDropIndicator: e }) {
    return Bt(t, null, e);
  },
  CollectionBranch({ collection: t, parent: e, renderDropIndicator: n }) {
    return Bt(t, e, n);
  }
};
function Bt(t, e, n) {
  return ml({
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
      }), o, ki(t, l, n));
    }
  });
}
function ki(t, e, n) {
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
const st = /* @__PURE__ */ a.createContext(Pi);
function Bi(t, e) {
  let { elementType: n = "a", onPress: l, onPressStart: o, onPressEnd: i, onClick: u, isDisabled: r, ...s } = t, f = {};
  n !== "a" && (f = {
    role: "link",
    tabIndex: r ? void 0 : 0
  });
  let { focusableProps: p } = _l(t, e), { pressProps: c, isPressed: h } = Ze({
    onPress: l,
    onPressStart: o,
    onPressEnd: i,
    onClick: u,
    isDisabled: r,
    ref: e
  }), d = se(s, {
    labelable: !0
  }), v = Z(p, c), m = Pe(), y = It(t);
  return {
    isPressed: h,
    linkProps: Z(d, y, {
      ...v,
      ...f,
      "aria-disabled": r || void 0,
      "aria-current": t["aria-current"],
      onClick: (g) => {
        var C;
        (C = c.onClick) === null || C === void 0 || C.call(c, g), eo(g, m, t.href, t.routerOptions);
      }
    })
  };
}
const wi = /* @__PURE__ */ a.createContext(null), Ti = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = ke(e, n, wi);
  let l = e.href && !e.isDisabled ? "a" : "span", { linkProps: o, isPressed: i } = Bi({
    ...e,
    elementType: l
  }, n), { hoverProps: u, isHovered: r } = et(e), { focusProps: s, isFocused: f, isFocusVisible: p } = jt(), c = ce({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: i,
      isHovered: r,
      isFocused: f,
      isFocusVisible: p
    }
  }), h = se(e, {
    global: !0
  });
  return delete h.onClick, /* @__PURE__ */ D.createElement(l, {
    ref: n,
    slot: e.slot || void 0,
    ...Z(h, c, o, u, s),
    "data-focused": f || void 0,
    "data-hovered": r || void 0,
    "data-pressed": i || void 0,
    "data-focus-visible": p || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, c.children);
});
class Xe {
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
function Fi(t, e) {
  if (t.size !== e.size) return !1;
  for (let n of t)
    if (!e.has(n)) return !1;
  return !0;
}
function Mi(t) {
  let { selectionMode: e = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: l, selectionBehavior: o = "toggle", disabledBehavior: i = "all" } = t, u = a.useRef(!1), [, r] = a.useState(!1), s = a.useRef(null), f = a.useRef(null), [, p] = a.useState(null), c = a.useMemo(() => wt(t.selectedKeys), [
    t.selectedKeys
  ]), h = a.useMemo(() => wt(t.defaultSelectedKeys, new te()), [
    t.defaultSelectedKeys
  ]), [d, v] = tt(c, h, t.onSelectionChange), m = a.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [y, g] = a.useState(o);
  o === "replace" && y === "toggle" && typeof d == "object" && d.size === 0 && g("replace");
  let C = a.useRef(o);
  return a.useEffect(() => {
    o !== C.current && (g(o), C.current = o);
  }, [
    o
  ]), {
    selectionMode: e,
    disallowEmptySelection: n,
    selectionBehavior: y,
    setSelectionBehavior: g,
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
      s.current = k, f.current = B, p(k);
    },
    selectedKeys: d,
    setSelectedKeys(k) {
      (l || !Fi(k, d)) && v(k);
    },
    disabledKeys: m,
    disabledBehavior: i
  };
}
function wt(t, e) {
  return t ? t === "all" ? "all" : new te(t) : e;
}
class at {
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
      (!e || o && Ne(this.collection, o, e) < 0) && (e = o);
    }
    var n;
    return (n = e == null ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  get lastSelectedKey() {
    let e = null;
    for (let l of this.state.selectedKeys) {
      let o = this.collection.getItem(l);
      (!e || o && Ne(this.collection, o, e) > 0) && (e = o);
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
    return l && o ? Ne(this.collection, l, o) <= 0 ? this.getKeyRangeInternal(e, n) : this.getKeyRangeInternal(n, e) : [];
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
          u != null && u.hasChildNodes && (this.allowsCellSelection || u.type !== "item") && n((i = (o = ii(we(u, this.collection))) === null || o === void 0 ? void 0 : o.key) !== null && i !== void 0 ? i : null);
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
    return new at(e, this.state, {
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
function El(t) {
  let { filter: e, layoutDelegate: n } = t, l = Mi(t), o = a.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), i = a.useCallback((f) => e ? new Xe(e(f)) : new Xe(f), [
    e
  ]), u = a.useMemo(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), r = oi(t, i, u), s = a.useMemo(() => new at(r, l, {
    layoutDelegate: n
  }), [
    r,
    l,
    n
  ]);
  return Al(r, s), {
    collection: r,
    disabledKeys: o,
    selectionManager: s
  };
}
function Ii(t, e) {
  let n = a.useMemo(() => e ? t.collection.filter(e) : t.collection, [
    t.collection,
    e
  ]), l = t.selectionManager.withCollection(n);
  return Al(n, l), {
    collection: n,
    selectionManager: l,
    disabledKeys: t.disabledKeys
  };
}
function Al(t, e) {
  const n = a.useRef(null);
  a.useEffect(() => {
    if (e.focusedKey != null && !t.getItem(e.focusedKey) && n.current) {
      const p = n.current.getItem(e.focusedKey), c = [
        ...n.current.getKeys()
      ].map((g) => {
        const C = n.current.getItem(g);
        return (C == null ? void 0 : C.type) === "item" ? C : null;
      }).filter((g) => g !== null), h = [
        ...t.getKeys()
      ].map((g) => {
        const C = t.getItem(g);
        return (C == null ? void 0 : C.type) === "item" ? C : null;
      }).filter((g) => g !== null);
      var l, o;
      const d = ((l = c == null ? void 0 : c.length) !== null && l !== void 0 ? l : 0) - ((o = h == null ? void 0 : h.length) !== null && o !== void 0 ? o : 0);
      var i, u, r;
      let v = Math.min(d > 1 ? Math.max(((i = p == null ? void 0 : p.index) !== null && i !== void 0 ? i : 0) - d + 1, 0) : (u = p == null ? void 0 : p.index) !== null && u !== void 0 ? u : 0, ((r = h == null ? void 0 : h.length) !== null && r !== void 0 ? r : 0) - 1), m = null, y = !1;
      for (; v >= 0; ) {
        if (!e.isDisabled(h[v].key)) {
          m = h[v];
          break;
        }
        if (v < h.length - 1 && !y) v++;
        else {
          y = !0;
          var s, f;
          v > ((s = p == null ? void 0 : p.index) !== null && s !== void 0 ? s : 0) && (v = (f = p == null ? void 0 : p.index) !== null && f !== void 0 ? f : 0), v--;
        }
      }
      e.setFocusedKey(m ? m.key : null);
    }
    n.current = t;
  }, [
    t,
    e
  ]);
}
function Li(t) {
  var e;
  let [n, l] = tt(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), o = a.useMemo(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: u, selectionManager: r } = El({
    ...t,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: o,
    onSelectionChange: (f) => {
      if (f === "all") return;
      var p;
      let c = (p = f.values().next().value) !== null && p !== void 0 ? p : null;
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
function Ri(t) {
  var e;
  let { defaultFilter: n, menuTrigger: l = "input", allowsEmptyCollection: o = !1, allowsCustomValue: i, shouldCloseOnBlur: u = !0 } = t, [r, s] = a.useState(!1), [f, p] = a.useState(!1), [c, h] = a.useState(null), d = (R) => {
    t.onSelectionChange && t.onSelectionChange(R), R === g && (q(), b());
  };
  var v;
  let { collection: m, selectionManager: y, selectedKey: g, setSelectedKey: C, selectedItem: k, disabledKeys: B } = Li({
    ...t,
    onSelectionChange: d,
    items: (v = t.items) !== null && v !== void 0 ? v : t.defaultItems
  }), [A, P] = tt(t.inputValue, Tt(t.defaultInputValue, g, m) || "", t.onInputChange), [N] = a.useState(g), [T] = a.useState(A), V = m, F = a.useMemo(() => (
    // No default filter if items are controlled.
    t.items != null || !n ? m : Oi(m, A, n)
  ), [
    m,
    A,
    n,
    t.items
  ]), [z, H] = a.useState(F), O = a.useRef("focus"), w = to({
    ...t,
    onOpenChange: (R) => {
      t.onOpenChange && t.onOpenChange(R, R ? O.current : void 0), y.setFocused(R), R || y.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), U = (R = null, G) => {
    let W = G === "manual" || G === "focus" && l === "focus";
    (o || F.size > 0 || W && V.size > 0 || t.items) && (W && !w.isOpen && t.items === void 0 && s(!0), O.current = G, h(R), w.open());
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
    w.isOpen && E(), h(R), w.toggle();
  }, [
    w,
    E
  ]), b = a.useCallback(() => {
    w.isOpen && (E(), w.close());
  }, [
    w,
    E
  ]), [I, j] = a.useState(A), q = () => {
    var R, G;
    let W = g != null && (G = (R = m.getItem(g)) === null || R === void 0 ? void 0 : R.textValue) !== null && G !== void 0 ? G : "";
    j(W), P(W);
  };
  var X, ne;
  let Q = a.useRef((ne = (X = t.selectedKey) !== null && X !== void 0 ? X : t.defaultSelectedKey) !== null && ne !== void 0 ? ne : null);
  var _;
  let oe = a.useRef(g != null && (_ = (e = m.getItem(g)) === null || e === void 0 ? void 0 : e.textValue) !== null && _ !== void 0 ? _ : "");
  a.useEffect(() => {
    var R;
    f && (F.size > 0 || o) && !w.isOpen && A !== I && l !== "manual" && U(null, "input"), !r && !o && w.isOpen && F.size === 0 && b(), g != null && g !== Q.current && b(), A !== I && (y.setFocusedKey(null), s(!1), A === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && C(null)), g !== Q.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? q() : I !== A && j(A);
    var G;
    let W = g != null && (G = (R = m.getItem(g)) === null || R === void 0 ? void 0 : R.textValue) !== null && G !== void 0 ? G : "";
    !f && g != null && t.inputValue === void 0 && g === Q.current && oe.current !== W && (j(W), P(W)), Q.current = g, oe.current = W;
  });
  let ie = no({
    ...t,
    value: a.useMemo(() => ({
      inputValue: A,
      selectedKey: g
    }), [
      A,
      g
    ])
  }), ae = () => {
    i && g == null ? K() : x();
  }, K = () => {
    Q.current = null, C(null), b();
  }, x = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var R, G;
      (R = t.onSelectionChange) === null || R === void 0 || R.call(t, g);
      var W;
      let Rl = g != null && (W = (G = m.getItem(g)) === null || G === void 0 ? void 0 : G.textValue) !== null && W !== void 0 ? W : "";
      j(Rl), b();
    } else
      q(), b();
  };
  const L = () => {
    if (i) {
      var R, G;
      const W = g != null && (G = (R = m.getItem(g)) === null || R === void 0 ? void 0 : R.textValue) !== null && G !== void 0 ? G : "";
      A === W ? x() : K();
    } else
      x();
  };
  let J = () => {
    w.isOpen && y.focusedKey != null ? g === y.focusedKey ? x() : C(y.focusedKey) : L();
  }, ue = a.useRef(A), Me = (R) => {
    R ? (ue.current = A, l === "focus" && !t.isReadOnly && U(null, "focus")) : (u && L(), A !== ue.current && ie.commitValidation()), p(R);
  }, he = a.useMemo(() => w.isOpen ? r ? V : F : z, [
    w.isOpen,
    V,
    F,
    r,
    z
  ]);
  var Ie;
  let dt = (Ie = t.defaultSelectedKey) !== null && Ie !== void 0 ? Ie : N;
  var Le;
  return {
    ...ie,
    ...w,
    focusStrategy: c,
    toggle: $,
    open: U,
    close: L,
    selectionManager: y,
    selectedKey: g,
    defaultSelectedKey: dt,
    setSelectedKey: C,
    disabledKeys: B,
    isFocused: f,
    setFocused: Me,
    selectedItem: k,
    collection: he,
    inputValue: A,
    defaultInputValue: (Le = Tt(t.defaultInputValue, dt, m)) !== null && Le !== void 0 ? Le : T,
    setInputValue: P,
    commit: J,
    revert: ae
  };
}
function Oi(t, e, n) {
  return new Xe(Kl(t, t, e, n));
}
function Kl(t, e, n, l) {
  let o = [];
  for (let i of e)
    if (i.type === "section" && i.hasChildNodes) {
      let u = Kl(t, we(i, t), n, l);
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
function Tt(t, e, n) {
  if (t == null) {
    var l, o;
    if (e != null) return (o = (l = n.getItem(e)) === null || l === void 0 ? void 0 : l.textValue) !== null && o !== void 0 ? o : "";
  }
  return t;
}
const Te = /* @__PURE__ */ a.createContext({}), Pl = /* @__PURE__ */ a.createContext(null), Vi = /* @__PURE__ */ a.forwardRef(function(e, n) {
  let { render: l } = a.useContext(Pl);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, l(e, n));
});
function kl(t, e) {
  var n;
  let l = t == null ? void 0 : t.renderDropIndicator, o = t == null || (n = t.isVirtualDragging) === null || n === void 0 ? void 0 : n.call(t), i = a.useCallback((u) => {
    if (o || e != null && e.isDropTarget(u)) return l ? l(u) : /* @__PURE__ */ D.createElement(Vi, {
      target: u
    });
  }, [
    e == null ? void 0 : e.target,
    o,
    l
  ]);
  return t != null && t.useDropIndicator ? i : void 0;
}
function ji(t, e, n) {
  var l, o;
  let i = t.focusedKey, u = null;
  if (!(e == null || (l = e.isVirtualDragging) === null || l === void 0) && l.call(e) && (n == null || (o = n.target) === null || o === void 0 ? void 0 : o.type) === "item" && (u = n.target.key, n.target.dropPosition === "after")) {
    let c = n.collection.getKeyAfter(u), h = null;
    if (c != null) {
      var r, s;
      let d = (s = (r = n.collection.getItem(u)) === null || r === void 0 ? void 0 : r.level) !== null && s !== void 0 ? s : 0;
      for (; c; ) {
        let v = n.collection.getItem(c);
        if (!v) break;
        if (v.type !== "item") {
          c = n.collection.getKeyAfter(c);
          continue;
        }
        var f;
        if (((f = v.level) !== null && f !== void 0 ? f : 0) <= d) break;
        h = c, c = n.collection.getKeyAfter(c);
      }
    }
    var p;
    u = (p = c ?? h) !== null && p !== void 0 ? p : u;
  }
  return a.useMemo(() => new Set([
    i,
    u
  ].filter((c) => c != null)), [
    i,
    u
  ]);
}
const Ni = /* @__PURE__ */ a.createContext({}), zi = /* @__PURE__ */ a.createContext(null);
function Hi(t) {
  let e = a.useRef({});
  return /* @__PURE__ */ D.createElement(zi.Provider, {
    value: e
  }, t.children);
}
const Gi = /* @__PURE__ */ a.createContext({
  isSelected: !1
}), Ui = /* @__PURE__ */ a.createContext({});
class Wi extends Ot {
  filter(e, n) {
    let l = n.getItem(this.prevKey);
    if (l && l.type !== "separator") {
      let o = this.clone();
      return n.addDescendants(o, e), o;
    }
    return null;
  }
}
Wi.type = "separator";
const Fe = /* @__PURE__ */ a.createContext(null), pe = /* @__PURE__ */ a.createContext(null), qi = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = ke(e, n, Fe);
  let l = a.useContext(pe);
  return l ? /* @__PURE__ */ D.createElement(Bl, {
    state: l,
    props: e,
    listBoxRef: n
  }) : /* @__PURE__ */ D.createElement(Sl, {
    content: /* @__PURE__ */ D.createElement(Ei, e)
  }, (o) => /* @__PURE__ */ D.createElement(Xi, {
    props: e,
    listBoxRef: n,
    collection: o
  }));
});
function Xi({ props: t, listBoxRef: e, collection: n }) {
  t = {
    ...t,
    collection: n,
    children: null,
    items: null
  };
  let { layoutDelegate: l } = a.useContext(st), o = El({
    ...t,
    layoutDelegate: l
  });
  return /* @__PURE__ */ D.createElement(Bl, {
    state: o,
    props: t,
    listBoxRef: e
  });
}
function Bl({ state: t, props: e, listBoxRef: n }) {
  [e, n] = ke(e, n, uo);
  let { dragAndDropHooks: l, layout: o = "stack", orientation: i = "vertical", filter: u } = e, r = Ii(t, u), { collection: s, selectionManager: f } = r, p = !!(l != null && l.useDraggableCollectionState), c = !!(l != null && l.useDroppableCollectionState), { direction: h } = Ye(), { disabledBehavior: d, disabledKeys: v } = f, m = it({
    usage: "search",
    sensitivity: "base"
  }), { isVirtualized: y, layoutDelegate: g, dropTargetDelegate: C, CollectionRoot: k } = a.useContext(st), B = a.useMemo(() => e.keyboardDelegate || new rt({
    collection: s,
    collator: m,
    ref: n,
    disabledKeys: v,
    disabledBehavior: d,
    layout: o,
    orientation: i,
    direction: h,
    layoutDelegate: g
  }), [
    s,
    m,
    n,
    d,
    v,
    i,
    h,
    e.keyboardDelegate,
    o,
    g
  ]), { listBoxProps: A } = ti({
    ...e,
    shouldSelectOnPressUp: p || e.shouldSelectOnPressUp,
    keyboardDelegate: B,
    isVirtualized: y
  }, r, n), P = a.useRef(p), N = a.useRef(c);
  a.useEffect(() => {
    process.env.NODE_ENV !== "production" && (P.current !== p && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), N.current !== c && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    p,
    c
  ]);
  let T, V, F, z = !1, H = null, O = a.useRef(null);
  if (p && l) {
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
      direction: h
    });
    F = l.useDroppableCollection({
      keyboardDelegate: B,
      dropTargetDelegate: j
    }, V, n), z = V.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: Y, isFocused: w, isFocusVisible: U } = jt(), $ = r.collection.size === 0, E = {
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
  }), b = null;
  $ && e.renderEmptyState && (b = /* @__PURE__ */ D.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, e.renderEmptyState(E)));
  let I = se(e, {
    global: !0
  });
  return /* @__PURE__ */ D.createElement(ro, null, /* @__PURE__ */ D.createElement("div", {
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
  }, /* @__PURE__ */ D.createElement(nt, {
    values: [
      [
        Fe,
        e
      ],
      [
        pe,
        r
      ],
      [
        Te,
        {
          dragAndDropHooks: l,
          dragState: T,
          dropState: V
        }
      ],
      [
        Ui,
        {
          elementType: "div"
        }
      ],
      [
        Pl,
        {
          render: Ji
        }
      ],
      [
        Ki,
        {
          name: "ListBoxSection",
          render: Yi
        }
      ]
    ]
  }, /* @__PURE__ */ D.createElement(Hi, null, /* @__PURE__ */ D.createElement(k, {
    collection: s,
    scrollRef: n,
    persistedKeys: ji(f, l, V),
    renderDropIndicator: kl(l, V)
  }))), b, H));
}
function Yi(t, e, n, l = "react-aria-ListBoxSection") {
  let o = a.useContext(pe), { dragAndDropHooks: i, dropState: u } = a.useContext(Te), { CollectionBranch: r } = a.useContext(st), [s, f] = zt();
  var p;
  let { headingProps: c, groupProps: h } = si({
    heading: f,
    "aria-label": (p = t["aria-label"]) !== null && p !== void 0 ? p : void 0
  }), d = ce({
    defaultClassName: l,
    className: t.className,
    style: t.style,
    values: {}
  }), v = se(t, {
    global: !0
  });
  return delete v.id, /* @__PURE__ */ D.createElement("section", {
    ...Z(v, d, h),
    ref: e
  }, /* @__PURE__ */ D.createElement(Ni.Provider, {
    value: {
      ...c,
      ref: s
    }
  }, /* @__PURE__ */ D.createElement(r, {
    collection: o.collection,
    parent: n,
    renderDropIndicator: kl(i, u)
  })));
}
const Zi = /* @__PURE__ */ Dl(oo, function(e, n, l) {
  let o = Nt(n), i = a.useContext(pe), { dragAndDropHooks: u, dragState: r, dropState: s } = a.useContext(Te), { optionProps: f, labelProps: p, descriptionProps: c, ...h } = ri({
    key: l.key,
    "aria-label": e == null ? void 0 : e["aria-label"]
  }, i, o), { hoverProps: d, isHovered: v } = et({
    isDisabled: !h.allowsSelection && !h.hasAction,
    onHoverStart: l.props.onHoverStart,
    onHoverChange: l.props.onHoverChange,
    onHoverEnd: l.props.onHoverEnd
  }), m = null;
  r && u && (m = u.useDraggableItem({
    key: l.key
  }, r));
  let y = null;
  s && u && (y = u.useDroppableItem({
    target: {
      type: "item",
      key: l.key,
      dropPosition: "on"
    }
  }, s, o));
  let g = r && r.isDragging(l.key), C = ce({
    ...e,
    id: void 0,
    children: e.children,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...h,
      isHovered: v,
      selectionMode: i.selectionManager.selectionMode,
      selectionBehavior: i.selectionManager.selectionBehavior,
      allowsDragging: !!r,
      isDragging: g,
      isDropTarget: y == null ? void 0 : y.isDropTarget
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
    ...Z(B, C, f, d, m == null ? void 0 : m.dragProps, y == null ? void 0 : y.dropProps),
    ref: o,
    "data-allows-dragging": !!r || void 0,
    "data-selected": h.isSelected || void 0,
    "data-disabled": h.isDisabled || void 0,
    "data-hovered": v || void 0,
    "data-focused": h.isFocused || void 0,
    "data-focus-visible": h.isFocusVisible || void 0,
    "data-pressed": h.isPressed || void 0,
    "data-dragging": g || void 0,
    "data-drop-target": (y == null ? void 0 : y.isDropTarget) || void 0,
    "data-selection-mode": i.selectionManager.selectionMode === "none" ? void 0 : i.selectionManager.selectionMode
  }, /* @__PURE__ */ D.createElement(nt, {
    values: [
      [
        lt,
        {
          slots: {
            [io]: p,
            label: p,
            description: c
          }
        }
      ],
      [
        Gi,
        {
          isSelected: h.isSelected
        }
      ]
    ]
  }, C.children));
});
function Ji(t, e) {
  e = Nt(e);
  let { dragAndDropHooks: n, dropState: l } = a.useContext(Te), { dropIndicatorProps: o, isHidden: i, isDropTarget: u } = n.useDropIndicator(t, l, e);
  return i ? null : /* @__PURE__ */ D.createElement(_i, {
    ...t,
    dropIndicatorProps: o,
    isDropTarget: u,
    ref: e
  });
}
function Qi(t, e) {
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
const _i = /* @__PURE__ */ a.forwardRef(Qi);
Dl(lo, function(e, n, l) {
  let o = a.useContext(pe), { isLoading: i, onLoadMore: u, scrollOffset: r, ...s } = e, f = a.useRef(null), p = a.useMemo(() => ({
    onLoadMore: u,
    collection: o == null ? void 0 : o.collection,
    sentinelRef: f,
    scrollOffset: r
  }), [
    u,
    r,
    o == null ? void 0 : o.collection
  ]);
  Vo(p, f);
  let c = ce({
    ...s,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-ListBoxLoadingIndicator",
    values: null
  }), h = {
    // For Android talkback
    tabIndex: -1
  };
  return /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: jo(!0)
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
    }), h),
    ...c,
    // aria-selected isn't needed here since this option is not selectable.
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    role: "option",
    ref: n
  }, c.children));
});
const eu = /* @__PURE__ */ a.createContext(null), tu = /* @__PURE__ */ a.createContext(null), nu = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = ke(e, n, eu);
  let { children: l, isDisabled: o = !1, isInvalid: i = !1, isRequired: u = !1 } = e, r = a.useMemo(() => {
    var s;
    return /* @__PURE__ */ D.createElement(Fe.Provider, {
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
  return /* @__PURE__ */ D.createElement(Sl, {
    content: r
  }, (s) => /* @__PURE__ */ D.createElement(ou, {
    props: e,
    collection: s,
    comboBoxRef: n
  }));
}), lu = [
  Ht,
  Gt,
  Ut,
  Wt,
  lt
];
function ou({ props: t, collection: e, comboBoxRef: n }) {
  let { name: l, formValue: o = "key", allowsCustomValue: i } = t;
  i && (o = "text");
  let { validationBehavior: u } = so(ao) || {};
  var r, s;
  let f = (s = (r = t.validationBehavior) !== null && r !== void 0 ? r : u) !== null && s !== void 0 ? s : "native", { contains: p } = Ho({
    sensitivity: "base"
  }), c = Ri({
    defaultFilter: t.defaultFilter || p,
    ...t,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: t.items,
    children: void 0,
    collection: e,
    validationBehavior: f
  }), h = a.useRef(null), d = a.useRef(null), v = a.useRef(null), m = a.useRef(null), [y, g] = zt(!t["aria-label"] && !t["aria-labelledby"]), { buttonProps: C, inputProps: k, listBoxProps: B, labelProps: A, descriptionProps: P, errorMessageProps: N, ...T } = fi({
    ...co(t),
    label: g,
    inputRef: d,
    buttonRef: h,
    listBoxRef: v,
    popoverRef: m,
    name: o === "text" ? l : void 0,
    validationBehavior: f
  }, c), [V, F] = a.useState(null), z = a.useCallback(() => {
    if (d.current) {
      var U;
      let $ = (U = h.current) === null || U === void 0 ? void 0 : U.getBoundingClientRect(), E = d.current.getBoundingClientRect(), M = $ ? Math.min($.left, E.left) : E.left, b = $ ? Math.max($.right, E.right) : E.right;
      F(b - M + "px");
    }
  }, [
    h,
    d,
    F
  ]);
  fo({
    ref: d,
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
  return /* @__PURE__ */ D.createElement(nt, {
    values: [
      [
        tu,
        c
      ],
      [
        Ht,
        {
          ...A,
          ref: y
        }
      ],
      [
        Gt,
        {
          ...C,
          ref: h,
          isPressed: c.isOpen
        }
      ],
      [
        Ut,
        {
          ...k,
          ref: d
        }
      ],
      [
        po,
        c
      ],
      [
        ho,
        {
          ref: m,
          triggerRef: d,
          scrollRef: v,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": V
          },
          clearContexts: lu
        }
      ],
      [
        Fe,
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
        lt,
        {
          slots: {
            description: P,
            errorMessage: N
          }
        }
      ],
      [
        Wt,
        {
          isInvalid: T.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        bo,
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
const xe = async (t, e, n) => {
  const l = ot(t);
  try {
    await t.app.model.customBlobDocuments.updateDocumentContent(n, e);
  } catch (o) {
    l.error("Failed to save document:", o), t.ui.notifications.show({
      title: "Failed to save document.",
      message: o.message
    });
  }
}, iu = (t, e, n, l, o) => async () => {
  if (!(e.provider === o && "key" in e.providerFields) && o === "MxCloudGenAI") {
    const i = ko(), u = { ...e, provider: o, providerFields: i };
    n(u), await xe(t, u, l);
  }
}, uu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.2449%206H10.7549C10.9449%206%2011.0599%206.16%2010.9649%206.29L8.3949%209.795C8.1949%2010.07%207.7999%2010.07%207.5999%209.795L5.0299%206.29C4.9349%206.16%205.0549%206%205.2399%206H5.2449Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", ru = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.2449%206H10.7549C10.9449%206%2011.0599%206.16%2010.9649%206.29L8.3949%209.795C8.1949%2010.07%207.7999%2010.07%207.5999%209.795L5.0299%206.29C4.9349%206.16%205.0549%206%205.2399%206H5.2449Z'%20fill='%23535965'/%3e%3c/svg%3e";
var su = Object.defineProperty, au = (t, e) => su(t, "name", { value: e, configurable: !0 });
const cu = au((t) => S.jsx(qt, { light: ru, dark: uu, ...t }), "ExpandedSplitButtonIcon");
var du = Object.defineProperty, wl = (t, e) => du(t, "name", { value: e, configurable: !0 });
function Tl(t) {
  return S.jsx(fu, { ...t });
}
wl(Tl, "DropdownListBox");
function Fl(t) {
  return S.jsx(pu, { ...t });
}
wl(Fl, "DropdownListBoxItem");
const fu = ee(qi)``, pu = ee(Zi)`
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
var hu = Object.defineProperty, bu = (t, e) => hu(t, "name", { value: e, configurable: !0 });
function ct({ children: t, label: e, description: n, items: l, onInputChange: o, ...i }) {
  const [u, r] = a.useState(i.inputValue ?? i.defaultInputValue ?? ""), s = a.useMemo(() => i.inputValue !== void 0 || i.selectedKey !== void 0 ? { selectedKey: i.selectedKey ?? null, inputValue: i.inputValue ?? u } : void 0, [i.inputValue, i.selectedKey, u]), { isInvalid: f, validate: p, validationError: c } = $o({ value: s, validate: i.validate }), h = a.useCallback((d) => {
    i.inputValue === void 0 && r(d), o == null || o(d);
  }, [i.inputValue, o]);
  return S.jsx(yu, { ...i, onInputChange: h, isInvalid: f, validate: p, children: S.jsxs(yo, { label: e, description: n, realtimeValidationError: c, children: [S.jsxs(gu, { children: [S.jsx(xu, {}), S.jsx(mu, { "aria-hidden": "true", icon: S.jsx(cu, {}) })] }), S.jsx(go, { children: S.jsx(Tl, { items: l, children: t }) })] }) });
}
bu(ct, "ComboBox");
const vu = "16px", $u = `${vu} + ${re.spacing4} * 2`, yu = ee(nu)``, gu = ee.div`
    position: relative;
    line-height: ${re.lineHeightMd};
    flex: 1;
`, xu = ee(xo)`
    padding-right: calc(${$u});
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &[data-expanded] {
        border-color: ${(t) => t.theme.colorsBorderActive};
    }
`, mu = ee(mo)`
    position: absolute;
    // We need to add the border width, because the button is positioned relative to the input
    inset: ${re.borderWidthMd};
    left: unset;
    border: 0;
    padding: ${vo} ${re.spacing4};
`;
ee(ct)`
    width: 100%;
`;
const Cu = ee.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, Su = ee.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, Du = ee.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, Eu = ({ icon: t, text: e }) => /* @__PURE__ */ S.jsxs(Cu, { children: [
  t && /* @__PURE__ */ S.jsx(Su, { children: typeof t == "string" ? /* @__PURE__ */ S.jsx(Co, { src: t }) : t }),
  /* @__PURE__ */ S.jsx(Du, { children: e })
] }), Au = ee.div`
    & [role="combobox"] {
        ${(t) => t.iconurl && `
            background-image: url(${t.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, Ku = ({
  ariaLabel: t,
  isDisabled: e = !1,
  label: n,
  options: l,
  onSelectionChange: o,
  selectedKey: i,
  validate: u
}) => {
  const r = l.find((s) => s.key === i);
  return /* @__PURE__ */ S.jsx(Au, { iconurl: r == null ? void 0 : r.icon, children: /* @__PURE__ */ S.jsx(
    ct,
    {
      "aria-label": t,
      isDisabled: e,
      label: n,
      selectedKey: i,
      onSelectionChange: o,
      validate: u,
      children: l.map((s) => /* @__PURE__ */ S.jsx(
        Fl,
        {
          id: s.key,
          textValue: s.caption,
          children: /* @__PURE__ */ S.jsx(
            Eu,
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
}, Pu = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ku = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Bu = Object.defineProperty, wu = (t, e) => Bu(t, "name", { value: e, configurable: !0 });
const Tu = wu((t) => S.jsx(qt, { light: ku, dark: Pu, ...t }), "ExternalLinkIcon");
var Fu = Object.defineProperty, Mu = (t, e) => Fu(t, "name", { value: e, configurable: !0 });
const Ft = Mu(({ children: t, href: e, ...n }) => S.jsxs(Iu, { href: e, ...n, children: [t ?? e, e && S.jsx(Tu, {})] }), "Link"), Iu = ee(Ti)`
    font-size: ${re.fontSizeMd};
    line-height: ${re.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${re.spacing4};
    }
`, Ml = (t) => {
  const e = atob(t);
  return JSON.parse(e);
}, Il = (t, e) => async () => {
  const n = ot(t);
  try {
    const l = e.providerFields;
    if (!l.key)
      throw new Error("Missing key.");
    const o = Ml(l.key), i = await t.network.httpProxy.getProxyUrl(`${o.resourceBaseUrl}`), u = await fetch(i, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": o.accessToken
      },
      credentials: "omit"
    });
    if (u.status !== 200)
      throw new Error(`HTTP ${u.status}: ${u.statusText}`);
    return await u.json();
  } catch (l) {
    return n.error("Error invoking MxCloud GenAI resource API:", l), l instanceof Error ? l.message : "";
  }
}, Ll = (t, e) => ({
  ...t,
  name: (e == null ? void 0 : e.model) || t.name,
  displayName: e && (e.modelName || e.model) || t.displayName
}), Lu = (t, e, n, l) => async () => {
  const o = await Il(t, e)();
  if (typeof o == "string")
    return o;
  const i = Ll(e, o);
  return n(i), await xe(t, i, l), !0;
}, Ru = (t, e, n, l) => async () => {
  const o = ot(t);
  try {
    const i = e.providerFields;
    if (!i.keyImportHelper)
      throw new Error("No key import data found. Please paste a valid key from the MxCloud GenAI portal.");
    const u = Ml(i.keyImportHelper);
    if (u.type !== "TEXT_GENERATION")
      throw new Error(`Unsupported key type: ${u.type}. Only Text Generation keys are currently supported.`);
    const r = {
      key: i.keyImportHelper || "",
      keyImportHelper: "",
      keyId: u.keyId || "",
      keyName: u.keyName || "",
      resourceName: u.name || "",
      environment: u.environment || "",
      deepLinkURL: u.deepLinkUrl || ""
    }, s = {
      ...e,
      name: u.model || "",
      displayName: u.model || "",
      type: u.type === "TEXT_GENERATION" ? "Text generation" : u.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...r
      }
    };
    n(s), await xe(t, s, l), Il(t, s)().then((f) => {
      if (typeof f != "string") {
        const p = Ll(s, f);
        n(p), xe(t, p, l).catch(
          (c) => o.error("Failed to update model document after API response:", c)
        );
      } else
        o.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    });
  } catch (i) {
    o.error("Error during MxCloud GenAI key import:", i);
    const u = "Failed to import MxCloud GenAI model key.", r = "Error during MxCloud GenAI key import: " + i;
    await t.ui.messageBoxes.show(
      "error",
      u,
      r
    );
  }
}, Ou = (t) => {
  const e = t.providerFields;
  if (!e.key && !e.keyImportHelper)
    return "Key is required.";
  if (!e.key)
    return "Key wasn't imported.";
};
async function Vu(t, e, n, l, o) {
  const i = {
    ...t,
    providerFields: {
      ...t.providerFields,
      keyImportHelper: e
    }
  };
  n(i), await xe(l, i, o);
}
async function ju(t, e, n, l) {
  var u;
  const o = [{
    title: "Testing connection",
    description: "Testing connection",
    action: async () => Lu(t, e, n, l)()
  }], i = await t.ui.dialogs.showProgressDialog("Testing connection", o);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure":
      const r = "No connection.", s = `Make sure you are connected to the internet and check if your key still exists in the Mendix GenAI portal and try again.
` + (((u = i.failedStep) == null ? void 0 : u.error) ?? "");
      return await t.ui.messageBoxes.show(
        "error",
        r,
        s
      ), !1;
  }
}
const Nu = ({
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
  validate: p
}) => {
  const c = s ? 8 : 0;
  return /* @__PURE__ */ S.jsxs($e, { marginTop: c, children: [
    t && /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(De, { children: t }) }),
    /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsxs(So, { children: [
      /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsx(
        Mo,
        {
          ariaLabel: e,
          value: n,
          onChange: l,
          description: u,
          readOnly: r,
          rows: f,
          validate: p
        }
      ) }),
      /* @__PURE__ */ S.jsx(
        Xt,
        {
          onPress: i,
          children: o
        }
      )
    ] }) })
  ] });
}, zu = ({
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
    Xt,
    {
      onPress: o,
      isDisabled: n,
      children: e
    }
  ) }) });
}, Hu = ({
  studioPro: t,
  model: e,
  setModel: n,
  documentId: l
}) => {
  const [o, i] = a.useState(!1), u = e.providerFields, r = a.useCallback(() => {
  }, []), [s, f] = a.useState(u.keyImportHelper || ""), p = a.useRef(null);
  a.useEffect(() => {
    f(u.keyImportHelper || "");
  }, [u.keyImportHelper]), a.useEffect(() => {
    if (o) {
      const y = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(y);
    }
  }, [o]);
  const c = a.useCallback((y) => {
    f(y), p.current && clearTimeout(p.current), p.current = setTimeout(async () => {
      await Vu(e, y, n, t, l);
    }, 300);
  }, [t, e, l]), h = a.useCallback(async () => {
    await Ru(t, e, n, l)(), i(!1);
  }, [t, e, l]), d = a.useCallback(async () => {
    i(!1);
    const y = await ju(t, e, n, l);
    i(y);
  }, [t, e, l]), v = a.useCallback(() => Ou(e), [e]), m = a.useCallback(() => {
    i(!1);
  }, []);
  return /* @__PURE__ */ S.jsxs(Yt, { label: "Resource", children: [
    /* @__PURE__ */ S.jsx(
      Nu,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: s,
        onChange: c,
        buttonCaption: "Import",
        onClick: h,
        validate: v,
        description: u.key ? void 0 : "Please enter your key from the portal."
      }
    ),
    !u.key && /* @__PURE__ */ S.jsxs($e, { children: [
      /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(De, {}) }),
      /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsx(Ft, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    u.key && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: u.resourceName,
          onChange: r,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: u.keyName,
          onChange: r,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: e.displayName,
          icon: e.displayName && e.displayName.toLocaleLowerCase().includes("anthropic") ? Bo : void 0,
          onChange: r,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: e.name,
          onChange: r,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        be,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: u.environment,
          onChange: r,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ S.jsxs($e, { children: [
        /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(De, {}) }),
        /* @__PURE__ */ S.jsx(le, { fullWidth: !0, children: /* @__PURE__ */ S.jsx(Ft, { href: u.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ S.jsxs($e, { children: [
        /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(De, { children: "Connection" }) }),
        /* @__PURE__ */ S.jsx(le, { children: /* @__PURE__ */ S.jsx(zu, { onPress: d, buttonCaption: "Test" }) })
      ] }),
      o && /* @__PURE__ */ S.jsx(Fo, { onClose: m, children: "Connection successful." })
    ] })
  ] });
}, Gu = wo(), Uu = ({ studioPro: t, documentId: e }) => {
  const n = t.ui.messageBoxes, l = t.app.model.customBlobDocuments, [o, i] = a.useState(0), [u, r] = a.useState(!1), [s, f] = a.useState(Gu), p = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: To }
  ];
  a.useEffect(() => {
    const d = (v) => {
      const { documents: m } = v;
      m.some((y) => y.documentId === e) && i((y) => y + 1);
    };
    return l.addEventListener("documentsChanged", d), () => {
      l.removeEventListener("documentsChanged", d);
    };
  }, []), a.useEffect(() => {
    l.getDocumentById(e).then(async (d) => {
      if (d && !("error" in d)) {
        const v = d.document.contents;
        !u && v.providerFields && "keyImportHelper" in v.providerFields && (v.providerFields.keyImportHelper = ""), f({ ...v }), r(!0);
      } else
        throw new Error((d == null ? void 0 : d.error) || "Document not found");
    }).catch((d) => {
      n.show("error", "Error loading document", "Details: " + (d == null ? void 0 : d.message) || d);
    });
  }, [o]);
  const c = a.useCallback(async (d) => {
    await iu(t, s, f, e, d)();
  }, [t, s, f, e]), h = a.useCallback(() => {
    if (!s.provider)
      return "Model provider is required.";
  }, [s.provider]);
  return /* @__PURE__ */ S.jsx(Do, { studioPro: t, children: /* @__PURE__ */ S.jsxs(Eo, { children: [
    !u && /* @__PURE__ */ S.jsx("span", { children: "Loading document content..." }),
    u && /* @__PURE__ */ S.jsx(Ao, { children: /* @__PURE__ */ S.jsxs(Ko, { children: [
      /* @__PURE__ */ S.jsx(Yt, { label: "Common", children: /* @__PURE__ */ S.jsx(
        Ku,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: s.provider,
          options: p,
          onSelectionChange: c,
          validate: h
        }
      ) }),
      s.provider === "MxCloudGenAI" && /* @__PURE__ */ S.jsx(
        Hu,
        {
          studioPro: t,
          model: s,
          setModel: f,
          documentId: e
        }
      )
    ] }) })
  ] }) });
}, _u = Po(Uu);
export {
  _u as component
};
//# sourceMappingURL=modelEdit.js.map
