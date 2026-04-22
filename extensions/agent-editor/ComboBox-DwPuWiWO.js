import { r as a, ao as me, aI as Re, al as Ce, a$ as Dl, av as El, j as je, ak as Kl, $ as Dt, b0 as Ue, b1 as be, b as X, b2 as He, b3 as ye, m as $e, ab as Ge, at as Oe, b4 as lt, n as Al, b5 as se, aS as Et, as as We, b6 as Pl, c as ue, l as Bl, b7 as wl, A as S, b8 as ot, b9 as Tl, ba as kl, y as Kt, au as it, ac as Fl, bb as Ml, ap as At, bc as Il, g as Ll, bd as ut, aq as we, be as Rl, bf as Pt, aK as Bt, bg as wt, bh as rt, bi as Ol, aN as Vl, h as qe, aC as zl, e as Nl, aM as jl, z as de, p as Ye, bj as Ul, u as Tt, D as Ze, F as Xe, aJ as Hl, aO as Gl, x as Wl, aQ as ql, C as kt, s as Yl, t as Zl, w as Xl, aE as Jl, E as Ft, aF as Mt, bk as It, aG as Ql, aH as _l, bl as Lt, G as eo, I as _, J as to, L as re, K as ce, bm as no, _ as lo, a0 as oo, aY as io, aZ as uo, T as ro } from "./Icon-BL-ju1Kw.js";
function so(t, e) {
  const n = a.useRef(!0), l = a.useRef(null);
  a.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []), a.useEffect(() => {
    let o = l.current;
    n.current ? n.current = !1 : (!o || e.some((i, u) => !Object.is(i, o[u]))) && t(), l.current = e;
  }, e);
}
function st(t, e) {
  const n = a.useRef(!0), l = a.useRef(null);
  me(() => (n.current = !0, () => {
    n.current = !1;
  }), []), me(() => {
    n.current ? n.current = !1 : (!l.current || e.some((o, i) => !Object.is(o, l[i]))) && t(), l.current = e;
  }, e);
}
function ao(t, e) {
  const n = [];
  for (; t && t !== document.documentElement; )
    Re(t, e) && n.push(t), t = t.parentElement;
  return n;
}
let co = 0;
const Te = /* @__PURE__ */ new Map();
function fo(t) {
  let [e, n] = a.useState();
  return me(() => {
    if (!t) return;
    let l = Te.get(t);
    if (l)
      n(l.element.id);
    else {
      let o = `react-aria-description-${co++}`;
      n(o);
      let i = document.createElement("div");
      i.id = o, i.style.display = "none", i.textContent = t, document.body.appendChild(i), l = {
        refCount: 0,
        element: i
      }, Te.set(t, l);
    }
    return l.refCount++, () => {
      l && --l.refCount === 0 && (l.element.remove(), Te.delete(t));
    };
  }, [
    t
  ]), {
    "aria-describedby": t ? e : void 0
  };
}
function he(t, e, n, l) {
  let o = Ce(n), i = n == null;
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
function Rt(t, e) {
  let n = at(t, e, "left"), l = at(t, e, "top"), o = e.offsetWidth, i = e.offsetHeight, u = t.scrollLeft, r = t.scrollTop, { borderTopWidth: s, borderLeftWidth: p, scrollPaddingTop: b, scrollPaddingRight: c, scrollPaddingBottom: f, scrollPaddingLeft: h } = getComputedStyle(t), { scrollMarginTop: $, scrollMarginRight: m, scrollMarginBottom: x, scrollMarginLeft: y } = getComputedStyle(e), C = u + parseInt(p, 10), P = r + parseInt(s, 10), B = C + t.clientWidth, E = P + t.clientHeight, A = parseInt(b, 10) || 0, z = parseInt(f, 10) || 0, T = parseInt(c, 10) || 0, O = parseInt(h, 10) || 0, k = parseInt($, 10) || 0, N = parseInt(x, 10) || 0, j = parseInt(m, 10) || 0, R = parseInt(y, 10) || 0, Y = n - R, w = n + o + j, H = l - k, v = l + i + N, D = u + parseInt(p, 10) + O, F = B - T, d = r + parseInt(s, 10) + A, M = E - z;
  if ((Y > D || w < F) && (Y <= u + O ? u = Y - parseInt(p, 10) - O : w > B - T && (u += w - B + T)), (H > d || v < M) && (H <= P + A ? r = H - parseInt(s, 10) - A : v > E - z && (r += v - E + z)), process.env.NODE_ENV === "test") {
    t.scrollLeft = u, t.scrollTop = r;
    return;
  }
  t.scrollTo({
    left: u,
    top: r
  });
}
function at(t, e, n) {
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
function ct(t, e) {
  if (t && document.contains(t)) {
    let u = document.scrollingElement || document.documentElement;
    if (!(window.getComputedStyle(u).overflow === "hidden") && !Dl()) {
      var n;
      let { left: s, top: p } = t.getBoundingClientRect();
      t == null || (n = t.scrollIntoView) === null || n === void 0 || n.call(t, {
        block: "nearest"
      });
      let { left: b, top: c } = t.getBoundingClientRect();
      if (Math.abs(s - b) > 1 || Math.abs(p - c) > 1) {
        var l, o, i;
        e == null || (o = e.containingElement) === null || o === void 0 || (l = o.scrollIntoView) === null || l === void 0 || l.call(o, {
          block: "center",
          inline: "center"
        }), (i = t.scrollIntoView) === null || i === void 0 || i.call(t, {
          block: "nearest"
        });
      }
    } else {
      let s = ao(t);
      for (let p of s) Rt(p, t);
    }
  }
}
function po(t, e) {
  let { collection: n, onLoadMore: l, scrollOffset: o = 1 } = t, i = a.useRef(null), u = Ce((r) => {
    for (let s of r)
      s.isIntersecting && l && l();
  });
  me(() => (e.current && (i.current = new IntersectionObserver(u, {
    root: El(e == null ? void 0 : e.current),
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
function ho(t) {
  const e = a.version.split(".");
  return parseInt(e[0], 10) >= 19 ? t : t ? "true" : void 0;
}
const bo = "react-aria-clear-focus", vo = "react-aria-focus";
var Ot = {};
Ot = {
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
var Vt = {};
Vt = {
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
var zt = {};
zt = {
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
var Nt = {};
Nt = {
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
var jt = {};
jt = {
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
var Ut = {};
Ut = {
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
var Ht = {};
Ht = {
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
var Gt = {};
Gt = {
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
var Wt = {};
Wt = {
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
var qt = {};
qt = {
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
var Yt = {};
Yt = {
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
var Zt = {};
Zt = {
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
var Xt = {};
Xt = {
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
var Jt = {};
Jt = {
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
var Qt = {};
Qt = {
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
var _t = {};
_t = {
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
var en = {};
en = {
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
var tn = {};
tn = {
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
var nn = {};
nn = {
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
var ln = {};
ln = {
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
var on = {};
on = {
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
var un = {};
un = {
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
var rn = {};
rn = {
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
var sn = {};
sn = {
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
var an = {};
an = {
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
var cn = {};
cn = {
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
var dn = {};
dn = {
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
var fn = {};
fn = {
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
var pn = {};
pn = {
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
var hn = {};
hn = {
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
var bn = {};
bn = {
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
var vn = {};
vn = {
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
var $n = {};
$n = {
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
var gn = {};
gn = {
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
var yn = {};
yn = {
  "ar-AE": Ot,
  "bg-BG": Vt,
  "cs-CZ": zt,
  "da-DK": Nt,
  "de-DE": jt,
  "el-GR": Ut,
  "en-US": Ht,
  "es-ES": Gt,
  "et-EE": Wt,
  "fi-FI": qt,
  "fr-FR": Yt,
  "he-IL": Zt,
  "hr-HR": Xt,
  "hu-HU": Jt,
  "it-IT": Qt,
  "ja-JP": _t,
  "ko-KR": en,
  "lt-LT": tn,
  "lv-LV": nn,
  "nb-NO": ln,
  "nl-NL": on,
  "pl-PL": un,
  "pt-BR": rn,
  "pt-PT": sn,
  "ro-RO": an,
  "ru-RU": cn,
  "sk-SK": dn,
  "sl-SI": fn,
  "sr-SP": pn,
  "sv-SE": hn,
  "tr-TR": bn,
  "uk-UA": vn,
  "zh-CN": $n,
  "zh-TW": gn
};
let ke = /* @__PURE__ */ new Map();
function Je(t) {
  let { locale: e } = je(), n = e + (t ? Object.entries(t).sort((o, i) => o[0] < i[0] ? -1 : 1).join() : "");
  if (ke.has(n)) return ke.get(n);
  let l = new Intl.Collator(e, t);
  return ke.set(n, l), l;
}
function $o(t) {
  let e = Je({
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
      let p = i.slice(r, r + s);
      if (e.compare(u, p) === 0) return !0;
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
const go = 500;
function xn(t) {
  let { isDisabled: e, onLongPressStart: n, onLongPressEnd: l, onLongPress: o, threshold: i = go, accessibilityDescription: u } = t;
  const r = a.useRef(void 0);
  let { addGlobalListener: s, removeGlobalListener: p } = Kl(), { pressProps: b } = Dt({
    isDisabled: e,
    onPressStart(f) {
      if (f.continuePropagation(), (f.pointerType === "mouse" || f.pointerType === "touch") && (n && n({
        ...f,
        type: "longpressstart"
      }), r.current = setTimeout(() => {
        f.target.dispatchEvent(new PointerEvent("pointercancel", {
          bubbles: !0
        })), Ue(f.target).activeElement !== f.target && be(f.target), o && o({
          ...f,
          type: "longpress"
        }), r.current = void 0;
      }, i), f.pointerType === "touch")) {
        let h = ($) => {
          $.preventDefault();
        };
        s(f.target, "contextmenu", h, {
          once: !0
        }), s(window, "pointerup", () => {
          setTimeout(() => {
            p(f.target, "contextmenu", h);
          }, 30);
        }, {
          once: !0
        });
      }
    },
    onPressEnd(f) {
      r.current && clearTimeout(r.current), l && (f.pointerType === "mouse" || f.pointerType === "touch") && l({
        ...f,
        type: "longpressend"
      });
    }
  }), c = fo(o && !e ? u : void 0);
  return {
    longPressProps: X(b, c)
  };
}
function mn(t) {
  let e = xo(Ue(t));
  e !== t && (e && yo(e, t), t && Qe(t, e));
}
function yo(t, e) {
  t.dispatchEvent(new FocusEvent("blur", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusout", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function Qe(t, e) {
  t.dispatchEvent(new FocusEvent("focus", {
    relatedTarget: e
  })), t.dispatchEvent(new FocusEvent("focusin", {
    bubbles: !0,
    relatedTarget: e
  }));
}
function xo(t) {
  let e = He(t), n = e == null ? void 0 : e.getAttribute("aria-activedescendant");
  return n && t.getElementById(n) || e;
}
const Se = /* @__PURE__ */ new WeakMap();
function mo(t) {
  return typeof t == "string" ? t.replace(/\s*/g, "") : "" + t;
}
function Cn(t, e) {
  let n = Se.get(t);
  if (!n) throw new Error("Unknown list");
  return `${n.id}-option-${mo(e)}`;
}
function Ve(t) {
  return ye() ? t.altKey : t.ctrlKey;
}
function xe(t, e) {
  var n, l;
  let o = `[data-key="${CSS.escape(String(e))}"]`, i = (n = t.current) === null || n === void 0 ? void 0 : n.dataset.collection;
  return i && (o = `[data-collection="${CSS.escape(i)}"]${o}`), (l = t.current) === null || l === void 0 ? void 0 : l.querySelector(o);
}
const Sn = /* @__PURE__ */ new WeakMap();
function Co(t) {
  let e = $e();
  return Sn.set(t, e), e;
}
function So(t) {
  return Sn.get(t);
}
const Do = 1e3;
function Eo(t) {
  let { keyboardDelegate: e, selectionManager: n, onTypeSelect: l } = t, o = a.useRef({
    search: "",
    timeout: void 0
  }).current, i = (u) => {
    let r = Ko(u.key);
    if (!(!r || u.ctrlKey || u.metaKey || !u.currentTarget.contains(u.target) || o.search.length === 0 && r === " ")) {
      if (r === " " && o.search.trim().length > 0 && (u.preventDefault(), "continuePropagation" in u || u.stopPropagation()), o.search += r, e.getKeyForSearch != null) {
        let s = e.getKeyForSearch(o.search, n.focusedKey);
        s == null && (s = e.getKeyForSearch(o.search)), s != null && (n.setFocusedKey(s), l && l(s));
      }
      clearTimeout(o.timeout), o.timeout = setTimeout(() => {
        o.search = "";
      }, Do);
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
function Ko(t) {
  return t.length === 1 || !/^[A-Z]/i.test(t) ? t : "";
}
function Dn(t) {
  let { selectionManager: e, keyboardDelegate: n, ref: l, autoFocus: o = !1, shouldFocusWrap: i = !1, disallowEmptySelection: u = !1, disallowSelectAll: r = !1, escapeKeyBehavior: s = "clearSelection", selectOnFocus: p = e.selectionBehavior === "replace", disallowTypeAhead: b = !1, shouldUseVirtualFocus: c, allowsTabNavigation: f = !1, isVirtualized: h, scrollRef: $ = l, linkBehavior: m = "action" } = t, { direction: x } = je(), y = Ge(), C = (v) => {
    var D;
    if (v.altKey && v.key === "Tab" && v.preventDefault(), !(!((D = l.current) === null || D === void 0) && D.contains(v.target))) return;
    const F = (g, I) => {
      if (g != null) {
        if (e.isLink(g) && m === "selection" && p && !Ve(v)) {
          Et.flushSync(() => {
            e.setFocusedKey(g, I);
          });
          let Z = xe(l, g), oe = e.getItemProps(g);
          Z && y.open(Z, v, oe.href, oe.routerOptions);
          return;
        }
        if (e.setFocusedKey(g, I), e.isLink(g) && m === "override") return;
        v.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(g) : p && !Ve(v) && e.replaceSelection(g);
      }
    };
    switch (v.key) {
      case "ArrowDown":
        if (n.getKeyBelow) {
          var d, M, V;
          let g = e.focusedKey != null ? (d = n.getKeyBelow) === null || d === void 0 ? void 0 : d.call(n, e.focusedKey) : (M = n.getFirstKey) === null || M === void 0 ? void 0 : M.call(n);
          g == null && i && (g = (V = n.getFirstKey) === null || V === void 0 ? void 0 : V.call(n, e.focusedKey)), g != null && (v.preventDefault(), F(g));
        }
        break;
      case "ArrowUp":
        if (n.getKeyAbove) {
          var W, q, te;
          let g = e.focusedKey != null ? (W = n.getKeyAbove) === null || W === void 0 ? void 0 : W.call(n, e.focusedKey) : (q = n.getLastKey) === null || q === void 0 ? void 0 : q.call(n);
          g == null && i && (g = (te = n.getLastKey) === null || te === void 0 ? void 0 : te.call(n, e.focusedKey)), g != null && (v.preventDefault(), F(g));
        }
        break;
      case "ArrowLeft":
        if (n.getKeyLeftOf) {
          var J, Q, ne;
          let g = e.focusedKey != null ? (J = n.getKeyLeftOf) === null || J === void 0 ? void 0 : J.call(n, e.focusedKey) : null;
          g == null && i && (g = x === "rtl" ? (Q = n.getFirstKey) === null || Q === void 0 ? void 0 : Q.call(n, e.focusedKey) : (ne = n.getLastKey) === null || ne === void 0 ? void 0 : ne.call(n, e.focusedKey)), g != null && (v.preventDefault(), F(g, x === "rtl" ? "first" : "last"));
        }
        break;
      case "ArrowRight":
        if (n.getKeyRightOf) {
          var le, ie, K;
          let g = e.focusedKey != null ? (le = n.getKeyRightOf) === null || le === void 0 ? void 0 : le.call(n, e.focusedKey) : null;
          g == null && i && (g = x === "rtl" ? (ie = n.getLastKey) === null || ie === void 0 ? void 0 : ie.call(n, e.focusedKey) : (K = n.getFirstKey) === null || K === void 0 ? void 0 : K.call(n, e.focusedKey)), g != null && (v.preventDefault(), F(g, x === "rtl" ? "last" : "first"));
        }
        break;
      case "Home":
        if (n.getFirstKey) {
          if (e.focusedKey === null && v.shiftKey) return;
          v.preventDefault();
          let g = n.getFirstKey(e.focusedKey, se(v));
          e.setFocusedKey(g), g != null && (se(v) && v.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(g) : p && e.replaceSelection(g));
        }
        break;
      case "End":
        if (n.getLastKey) {
          if (e.focusedKey === null && v.shiftKey) return;
          v.preventDefault();
          let g = n.getLastKey(e.focusedKey, se(v));
          e.setFocusedKey(g), g != null && (se(v) && v.shiftKey && e.selectionMode === "multiple" ? e.extendSelection(g) : p && e.replaceSelection(g));
        }
        break;
      case "PageDown":
        if (n.getKeyPageBelow && e.focusedKey != null) {
          let g = n.getKeyPageBelow(e.focusedKey);
          g != null && (v.preventDefault(), F(g));
        }
        break;
      case "PageUp":
        if (n.getKeyPageAbove && e.focusedKey != null) {
          let g = n.getKeyPageAbove(e.focusedKey);
          g != null && (v.preventDefault(), F(g));
        }
        break;
      case "a":
        se(v) && e.selectionMode === "multiple" && r !== !0 && (v.preventDefault(), e.selectAll());
        break;
      case "Escape":
        s === "clearSelection" && !u && e.selectedKeys.size !== 0 && (v.stopPropagation(), v.preventDefault(), e.clearSelection());
        break;
      case "Tab":
        if (!f) {
          if (v.shiftKey) l.current.focus();
          else {
            let g = Al(l.current, {
              tabbable: !0
            }), I, Z;
            do
              Z = g.lastChild(), Z && (I = Z);
            while (Z);
            I && !I.contains(document.activeElement) && be(I);
          }
          break;
        }
    }
  }, P = a.useRef({
    top: 0,
    left: 0
  });
  he($, "scroll", h ? void 0 : () => {
    var v, D, F, d;
    P.current = {
      top: (F = (v = $.current) === null || v === void 0 ? void 0 : v.scrollTop) !== null && F !== void 0 ? F : 0,
      left: (d = (D = $.current) === null || D === void 0 ? void 0 : D.scrollLeft) !== null && d !== void 0 ? d : 0
    };
  });
  let B = (v) => {
    if (e.isFocused) {
      v.currentTarget.contains(v.target) || e.setFocused(!1);
      return;
    }
    if (v.currentTarget.contains(v.target)) {
      if (e.setFocused(!0), e.focusedKey == null) {
        var D, F;
        let V = (q) => {
          q != null && (e.setFocusedKey(q), p && !e.isSelected(q) && e.replaceSelection(q));
        }, W = v.relatedTarget;
        var d, M;
        W && v.currentTarget.compareDocumentPosition(W) & Node.DOCUMENT_POSITION_FOLLOWING ? V((d = e.lastSelectedKey) !== null && d !== void 0 ? d : (D = n.getLastKey) === null || D === void 0 ? void 0 : D.call(n)) : V((M = e.firstSelectedKey) !== null && M !== void 0 ? M : (F = n.getFirstKey) === null || F === void 0 ? void 0 : F.call(n));
      } else !h && $.current && ($.current.scrollTop = P.current.top, $.current.scrollLeft = P.current.left);
      if (e.focusedKey != null && $.current) {
        let V = xe(l, e.focusedKey);
        V instanceof HTMLElement && (!V.contains(document.activeElement) && !c && be(V), lt() === "keyboard" && ct(V, {
          containingElement: l.current
        }));
      }
    }
  }, E = (v) => {
    v.currentTarget.contains(v.relatedTarget) || e.setFocused(!1);
  }, A = a.useRef(!1);
  he(l, vo, c ? (v) => {
    let { detail: D } = v;
    v.stopPropagation(), e.setFocused(!0), (D == null ? void 0 : D.focusStrategy) === "first" && (A.current = !0);
  } : void 0);
  let z = Ce(() => {
    var v, D;
    let F = (D = (v = n.getFirstKey) === null || v === void 0 ? void 0 : v.call(n)) !== null && D !== void 0 ? D : null;
    if (F == null) {
      let d = He();
      mn(l.current), Qe(d, null), e.collection.size > 0 && (A.current = !1);
    } else
      e.setFocusedKey(F), A.current = !1;
  });
  st(() => {
    A.current && z();
  }, [
    e.collection,
    z
  ]);
  let T = Ce(() => {
    e.collection.size > 0 && (A.current = !1);
  });
  st(() => {
    T();
  }, [
    e.focusedKey,
    T
  ]), he(l, bo, c ? (v) => {
    var D;
    v.stopPropagation(), e.setFocused(!1), !((D = v.detail) === null || D === void 0) && D.clearFocusKey && e.setFocusedKey(null);
  } : void 0);
  const O = a.useRef(o), k = a.useRef(!1);
  a.useEffect(() => {
    if (O.current) {
      var v, D;
      let M = null;
      var F;
      o === "first" && (M = (F = (v = n.getFirstKey) === null || v === void 0 ? void 0 : v.call(n)) !== null && F !== void 0 ? F : null);
      var d;
      o === "last" && (M = (d = (D = n.getLastKey) === null || D === void 0 ? void 0 : D.call(n)) !== null && d !== void 0 ? d : null);
      let V = e.selectedKeys;
      if (V.size) {
        for (let W of V) if (e.canSelectItem(W)) {
          M = W;
          break;
        }
      }
      e.setFocused(!0), e.setFocusedKey(M), M == null && !c && l.current && Oe(l.current), e.collection.size > 0 && (O.current = !1, k.current = !0);
    }
  });
  let N = a.useRef(e.focusedKey), j = a.useRef(null);
  a.useEffect(() => {
    if (e.isFocused && e.focusedKey != null && (e.focusedKey !== N.current || k.current) && $.current && l.current) {
      let v = lt(), D = xe(l, e.focusedKey);
      if (!(D instanceof HTMLElement))
        return;
      (v === "keyboard" || k.current) && (j.current && cancelAnimationFrame(j.current), j.current = requestAnimationFrame(() => {
        $.current && (Rt($.current, D), v !== "virtual" && ct(D, {
          containingElement: l.current
        }));
      }));
    }
    !c && e.isFocused && e.focusedKey == null && N.current != null && l.current && Oe(l.current), N.current = e.focusedKey, k.current = !1;
  }), a.useEffect(() => () => {
    j.current && cancelAnimationFrame(j.current);
  }, []), he(l, "react-aria-focus-scope-restore", (v) => {
    v.preventDefault(), e.setFocused(!0);
  });
  let R = {
    onKeyDown: C,
    onFocus: B,
    onBlur: E,
    onMouseDown(v) {
      $.current === v.target && v.preventDefault();
    }
  }, { typeSelectProps: Y } = Eo({
    keyboardDelegate: n,
    selectionManager: e
  });
  b || (R = X(Y, R));
  let w;
  c || (w = e.focusedKey == null ? 0 : -1);
  let H = Co(e.collection);
  return {
    collectionProps: X(R, {
      tabIndex: w,
      "data-collection": H
    })
  };
}
function Ao(t) {
  let { id: e, selectionManager: n, key: l, ref: o, shouldSelectOnPressUp: i, shouldUseVirtualFocus: u, focus: r, isDisabled: s, onAction: p, allowsDifferentPressOrigin: b, linkBehavior: c = "action" } = t, f = Ge();
  e = $e(e);
  let h = (d) => {
    if (d.pointerType === "keyboard" && Ve(d)) n.toggleSelection(l);
    else {
      if (n.selectionMode === "none") return;
      if (n.isLink(l)) {
        if (c === "selection" && o.current) {
          let M = n.getItemProps(l);
          f.open(o.current, d, M.href, M.routerOptions), n.setSelectedKeys(n.selectedKeys);
          return;
        } else if (c === "override" || c === "none") return;
      }
      n.selectionMode === "single" ? n.isSelected(l) && !n.disallowEmptySelection ? n.toggleSelection(l) : n.replaceSelection(l) : d && d.shiftKey ? n.extendSelection(l) : n.selectionBehavior === "toggle" || d && (se(d) || d.pointerType === "touch" || d.pointerType === "virtual") ? n.toggleSelection(l) : n.replaceSelection(l);
    }
  };
  a.useEffect(() => {
    l === n.focusedKey && n.isFocused && (u ? mn(o.current) : r ? r() : document.activeElement !== o.current && o.current && Oe(o.current));
  }, [
    o,
    l,
    n.focusedKey,
    n.childFocusStrategy,
    n.isFocused,
    u
  ]), s = s || n.isDisabled(l);
  let $ = {};
  !u && !s ? $ = {
    tabIndex: l === n.focusedKey ? 0 : -1,
    onFocus(d) {
      d.target === o.current && n.setFocusedKey(l);
    }
  } : s && ($.onMouseDown = (d) => {
    d.preventDefault();
  });
  let m = n.isLink(l) && c === "override", x = p && t.UNSTABLE_itemBehavior === "action", y = n.isLink(l) && c !== "selection" && c !== "none", C = !s && n.canSelectItem(l) && !m && !x, P = (p || y) && !s, B = P && (n.selectionBehavior === "replace" ? !C : !C || n.isEmpty), E = P && C && n.selectionBehavior === "replace", A = B || E, z = a.useRef(null), T = A && C, O = a.useRef(!1), k = a.useRef(!1), N = n.getItemProps(l), j = (d) => {
    if (p) {
      var M;
      p(), (M = o.current) === null || M === void 0 || M.dispatchEvent(new CustomEvent("react-aria-item-action", {
        bubbles: !0
      }));
    }
    y && o.current && f.open(o.current, d, N.href, N.routerOptions);
  }, R = {
    ref: o
  };
  if (i ? (R.onPressStart = (d) => {
    z.current = d.pointerType, O.current = T, d.pointerType === "keyboard" && (!A || ft()) && h(d);
  }, b ? (R.onPressUp = B ? void 0 : (d) => {
    d.pointerType === "mouse" && C && h(d);
  }, R.onPress = B ? j : (d) => {
    d.pointerType !== "keyboard" && d.pointerType !== "mouse" && C && h(d);
  }) : R.onPress = (d) => {
    if (B || E && d.pointerType !== "mouse") {
      if (d.pointerType === "keyboard" && !dt()) return;
      j(d);
    } else d.pointerType !== "keyboard" && C && h(d);
  }) : (R.onPressStart = (d) => {
    z.current = d.pointerType, O.current = T, k.current = B, C && (d.pointerType === "mouse" && !B || d.pointerType === "keyboard" && (!P || ft())) && h(d);
  }, R.onPress = (d) => {
    (d.pointerType === "touch" || d.pointerType === "pen" || d.pointerType === "virtual" || d.pointerType === "keyboard" && A && dt() || d.pointerType === "mouse" && k.current) && (A ? j(d) : C && h(d));
  }), $["data-collection"] = So(n.collection), $["data-key"] = l, R.preventFocusOnPress = u, u && (R = X(R, {
    onPressStart(d) {
      d.pointerType !== "touch" && (n.setFocused(!0), n.setFocusedKey(l));
    },
    onPress(d) {
      d.pointerType === "touch" && (n.setFocused(!0), n.setFocusedKey(l));
    }
  })), N)
    for (let d of [
      "onPressStart",
      "onPressEnd",
      "onPressChange",
      "onPress",
      "onPressUp",
      "onClick"
    ]) N[d] && (R[d] = We(R[d], N[d]));
  let { pressProps: Y, isPressed: w } = Dt(R), H = E ? (d) => {
    z.current === "mouse" && (d.stopPropagation(), d.preventDefault(), j(d));
  } : void 0, { longPressProps: v } = xn({
    isDisabled: !T,
    onLongPress(d) {
      d.pointerType === "touch" && (h(d), n.setSelectionBehavior("toggle"));
    }
  }), D = (d) => {
    z.current === "touch" && O.current && d.preventDefault();
  }, F = c !== "none" && n.isLink(l) ? (d) => {
    Pl.isOpening || d.preventDefault();
  } : void 0;
  return {
    itemProps: X(
      $,
      C || B || u && !s ? Y : {},
      T ? v : {},
      {
        onDoubleClick: H,
        onDragStartCapture: D,
        onClick: F,
        id: e
      },
      // Prevent DOM focus from moving on mouse down when using virtual focus
      u ? {
        onMouseDown: (d) => d.preventDefault()
      } : void 0
    ),
    isPressed: w,
    isSelected: n.isSelected(l),
    isFocused: n.isFocused && n.focusedKey === l,
    isDisabled: s,
    allowsSelection: C,
    hasAction: A
  };
}
function dt() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === "Enter";
}
function ft() {
  let t = window.event;
  return (t == null ? void 0 : t.key) === " " || (t == null ? void 0 : t.code) === "Space";
}
class pt {
  getItemRect(e) {
    let n = this.ref.current;
    if (!n) return null;
    let l = e != null ? xe(this.ref, e) : null;
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
class _e {
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
    if (n && !Re(n)) return this.getFirstKey();
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
    if (n && !Re(n)) return this.getLastKey();
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
      this.collection = n.collection, this.ref = n.ref, this.collator = n.collator, this.disabledKeys = n.disabledKeys || /* @__PURE__ */ new Set(), this.disabledBehavior = n.disabledBehavior || "all", this.orientation = n.orientation || "vertical", this.direction = n.direction, this.layout = n.layout || "stack", this.layoutDelegate = n.layoutDelegate || new pt(n.ref);
    } else
      this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new pt(this.ref);
    this.layout === "stack" && this.orientation === "vertical" && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0);
  }
}
function Po(t) {
  let { selectionManager: e, collection: n, disabledKeys: l, ref: o, keyboardDelegate: i, layoutDelegate: u } = t, r = Je({
    usage: "search",
    sensitivity: "base"
  }), s = e.disabledBehavior, p = a.useMemo(() => i || new _e({
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
  ]), { collectionProps: b } = Dn({
    ...t,
    ref: o,
    selectionManager: e,
    keyboardDelegate: p
  });
  return {
    listProps: b
  };
}
function Bo(t, e, n) {
  let l = ue(t, {
    labelable: !0
  }), o = t.selectionBehavior || "toggle", i = t.linkBehavior || (o === "replace" ? "action" : "override");
  o === "toggle" && i === "action" && (i = "override");
  let { listProps: u } = Po({
    ...t,
    ref: n,
    selectionManager: e.selectionManager,
    collection: e.collection,
    disabledKeys: e.disabledKeys,
    linkBehavior: i
  }), { focusWithinProps: r } = Bl({
    onFocusWithin: t.onFocus,
    onBlurWithin: t.onBlur,
    onFocusWithinChange: t.onFocusChange
  }), s = $e(t.id);
  Se.set(e, {
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
  let { labelProps: p, fieldProps: b } = wl({
    ...t,
    id: s,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: p,
    listBoxProps: X(l, r, e.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...X(b, u)
    })
  };
}
class wo {
  build(e, n) {
    return this.context = n, ht(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: n, items: l } = e;
    if (S.isValidElement(n) && n.type === S.Fragment) yield* this.iterateCollection({
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
      S.Children.forEach(n, (u) => {
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
    if (S.isValidElement(e.element) && e.element.type === S.Fragment) {
      let x = [];
      S.Children.forEach(e.element.props.children, (C) => {
        x.push(C);
      });
      var i;
      let y = (i = e.index) !== null && i !== void 0 ? i : 0;
      for (const C of x) yield* this.getFullNode({
        element: C,
        index: y++
      }, n, l, o);
      return;
    }
    let u = e.element;
    if (!u && e.value && n && n.renderer) {
      let x = this.cache.get(e.value);
      if (x && (!x.shouldInvalidate || !x.shouldInvalidate(this.context))) {
        x.index = e.index, x.parentKey = o ? o.key : null, yield x;
        return;
      }
      u = n.renderer(e.value);
    }
    if (S.isValidElement(u)) {
      let x = u.type;
      if (typeof x != "function" && typeof x.getCollectionNode != "function") {
        let B = u.type;
        throw new Error(`Unknown element <${B}> in collection.`);
      }
      let y = x.getCollectionNode(u.props, this.context);
      var r;
      let C = (r = e.index) !== null && r !== void 0 ? r : 0, P = y.next();
      for (; !P.done && P.value; ) {
        let B = P.value;
        e.index = C;
        var s;
        let E = (s = B.key) !== null && s !== void 0 ? s : null;
        E == null && (E = B.element ? null : this.getKey(u, e, n, l));
        let z = [
          ...this.getFullNode({
            ...B,
            key: E,
            index: C,
            wrapper: To(e.wrapper, B.wrapper)
          }, this.getChildState(n, B), l ? `${l}${u.key}` : u.key, o)
        ];
        for (let T of z) {
          var p, b;
          T.value = (b = (p = B.value) !== null && p !== void 0 ? p : e.value) !== null && b !== void 0 ? b : null, T.value && this.cache.set(T.value, T);
          var c;
          if (e.type && T.type !== e.type) throw new Error(`Unsupported type <${Fe(T.type)}> in <${Fe((c = o == null ? void 0 : o.type) !== null && c !== void 0 ? c : "unknown parent type")}>. Only <${Fe(e.type)}> is supported.`);
          C++, yield T;
        }
        P = y.next(z);
      }
      return;
    }
    if (e.key == null || e.type == null) return;
    let f = this;
    var h, $;
    let m = {
      type: e.type,
      props: e.props,
      key: e.key,
      parentKey: o ? o.key : null,
      value: (h = e.value) !== null && h !== void 0 ? h : null,
      level: o ? o.level + 1 : 0,
      index: e.index,
      rendered: e.rendered,
      textValue: ($ = e.textValue) !== null && $ !== void 0 ? $ : "",
      "aria-label": e["aria-label"],
      wrapper: e.wrapper,
      shouldInvalidate: e.shouldInvalidate,
      hasChildNodes: e.hasChildNodes || !1,
      childNodes: ht(function* () {
        if (!e.hasChildNodes || !e.childNodes) return;
        let x = 0;
        for (let y of e.childNodes()) {
          y.key != null && (y.key = `${m.key}${y.key}`);
          let C = f.getFullNode({
            ...y,
            index: x
          }, f.getChildState(n, y), m.key, m);
          for (let P of C)
            x++, yield P;
        }
      })
    };
    yield m;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function ht(t) {
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
function To(t, e) {
  if (t && e) return (n) => t(e(n));
  if (t) return t;
  if (e) return e;
}
function Fe(t) {
  return t[0].toUpperCase() + t.slice(1);
}
function ko(t, e, n) {
  let l = a.useMemo(() => new wo(), []), { children: o, items: i, collection: u } = t;
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
function De(t, e) {
  return typeof e.getChildren == "function" ? e.getChildren(t.key) : t.childNodes;
}
function Fo(t) {
  return Mo(t, 0);
}
function Mo(t, e) {
  if (e < 0) return;
  let n = 0;
  for (let l of t) {
    if (n === e) return l;
    n++;
  }
}
function Wi(t) {
  let e;
  for (let n of t) e = n;
  return e;
}
function Me(t, e, n) {
  if (e.parentKey === n.parentKey) return e.index - n.index;
  let l = [
    ...bt(t, e),
    e
  ], o = [
    ...bt(t, n),
    n
  ], i = l.slice(0, o.length).findIndex((u, r) => u !== o[r]);
  return i !== -1 ? (e = l[i], n = o[i], e.index - n.index) : l.findIndex((u) => u === n) >= 0 ? 1 : (o.findIndex((u) => u === e) >= 0, -1);
}
function bt(t, e) {
  let n = [], l = e;
  for (; (l == null ? void 0 : l.parentKey) != null; )
    l = t.getItem(l.parentKey), l && n.unshift(l);
  return n;
}
const vt = /* @__PURE__ */ new WeakMap();
function En(t) {
  let e = vt.get(t);
  if (e != null) return e;
  let n = 0, l = (o) => {
    for (let i of o)
      i.type === "section" ? l(De(i, t)) : i.type === "item" && n++;
  };
  return l(t), vt.set(t, n), n;
}
function Io(t, e, n) {
  var l, o;
  let { key: i } = t, u = Se.get(e);
  var r;
  let s = (r = t.isDisabled) !== null && r !== void 0 ? r : e.selectionManager.isDisabled(i);
  var p;
  let b = (p = t.isSelected) !== null && p !== void 0 ? p : e.selectionManager.isSelected(i);
  var c;
  let f = (c = t.shouldSelectOnPressUp) !== null && c !== void 0 ? c : u == null ? void 0 : u.shouldSelectOnPressUp;
  var h;
  let $ = (h = t.shouldFocusOnHover) !== null && h !== void 0 ? h : u == null ? void 0 : u.shouldFocusOnHover;
  var m;
  let x = (m = t.shouldUseVirtualFocus) !== null && m !== void 0 ? m : u == null ? void 0 : u.shouldUseVirtualFocus;
  var y;
  let C = (y = t.isVirtualized) !== null && y !== void 0 ? y : u == null ? void 0 : u.isVirtualized, P = ot(), B = ot(), E = {
    role: "option",
    "aria-disabled": s || void 0,
    "aria-selected": e.selectionManager.selectionMode !== "none" ? b : void 0
  };
  Tl() && kl() || (E["aria-label"] = t["aria-label"], E["aria-labelledby"] = P, E["aria-describedby"] = B);
  let A = e.collection.getItem(i);
  if (C) {
    let v = Number(A == null ? void 0 : A.index);
    E["aria-posinset"] = Number.isNaN(v) ? void 0 : v + 1, E["aria-setsize"] = En(e.collection);
  }
  let z = u != null && u.onAction ? () => {
    var v;
    return u == null || (v = u.onAction) === null || v === void 0 ? void 0 : v.call(u, i);
  } : void 0, T = Cn(e, i), { itemProps: O, isPressed: k, isFocused: N, hasAction: j, allowsSelection: R } = Ao({
    selectionManager: e.selectionManager,
    key: i,
    ref: n,
    shouldSelectOnPressUp: f,
    allowsDifferentPressOrigin: f && $,
    isVirtualized: C,
    shouldUseVirtualFocus: x,
    isDisabled: s,
    onAction: z || !(A == null || (l = A.props) === null || l === void 0) && l.onAction ? We(A == null || (o = A.props) === null || o === void 0 ? void 0 : o.onAction, z) : void 0,
    linkBehavior: u == null ? void 0 : u.linkBehavior,
    // @ts-ignore
    UNSTABLE_itemBehavior: u == null ? void 0 : u.UNSTABLE_itemBehavior,
    id: T
  }), { hoverProps: Y } = Kt({
    isDisabled: s || !$,
    onHoverStart() {
      it() || (e.selectionManager.setFocused(!0), e.selectionManager.setFocusedKey(i));
    }
  }), w = ue(A == null ? void 0 : A.props);
  delete w.id;
  let H = Fl(A == null ? void 0 : A.props);
  return {
    optionProps: {
      ...E,
      ...X(w, O, Y, H),
      id: T
    },
    labelProps: {
      id: P
    },
    descriptionProps: {
      id: B
    },
    isFocused: N,
    isFocusVisible: N && e.selectionManager.isFocused && it(),
    isSelected: b,
    isDisabled: s,
    isPressed: k,
    allowsSelection: R,
    hasAction: j
  };
}
function Lo(t) {
  let { heading: e, "aria-label": n } = t, l = $e();
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
var Kn = {};
Kn = {
  longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
};
var An = {};
An = {
  longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
};
var Pn = {};
Pn = {
  longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
};
var Bn = {};
Bn = {
  longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
};
var wn = {};
wn = {
  longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
};
var Tn = {};
Tn = {
  longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
};
var kn = {};
kn = {
  longPressMessage: "Long press or press Alt + ArrowDown to open menu"
};
var Fn = {};
Fn = {
  longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
};
var Mn = {};
Mn = {
  longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
};
var In = {};
In = {
  longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
};
var Ln = {};
Ln = {
  longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
};
var Rn = {};
Rn = {
  longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
};
var On = {};
On = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
};
var Vn = {};
Vn = {
  longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
};
var zn = {};
zn = {
  longPressMessage: "Premere a lungo o premere Alt + Freccia giù per aprire il menu"
};
var Nn = {};
Nn = {
  longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
};
var jn = {};
jn = {
  longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
};
var Un = {};
Un = {
  longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
};
var Hn = {};
Hn = {
  longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
};
var Gn = {};
Gn = {
  longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
};
var Wn = {};
Wn = {
  longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
};
var qn = {};
qn = {
  longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
};
var Yn = {};
Yn = {
  longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
};
var Zn = {};
Zn = {
  longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
};
var Xn = {};
Xn = {
  longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
};
var Jn = {};
Jn = {
  longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
};
var Qn = {};
Qn = {
  longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
};
var _n = {};
_n = {
  longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
};
var el = {};
el = {
  longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
};
var tl = {};
tl = {
  longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
};
var nl = {};
nl = {
  longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
};
var ll = {};
ll = {
  longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
};
var ol = {};
ol = {
  longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
};
var il = {};
il = {
  longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
};
var ul = {};
ul = {
  "ar-AE": Kn,
  "bg-BG": An,
  "cs-CZ": Pn,
  "da-DK": Bn,
  "de-DE": wn,
  "el-GR": Tn,
  "en-US": kn,
  "es-ES": Fn,
  "et-EE": Mn,
  "fi-FI": In,
  "fr-FR": Ln,
  "he-IL": Rn,
  "hr-HR": On,
  "hu-HU": Vn,
  "it-IT": zn,
  "ja-JP": Nn,
  "ko-KR": jn,
  "lt-LT": Un,
  "lv-LV": Hn,
  "nb-NO": Gn,
  "nl-NL": Wn,
  "pl-PL": qn,
  "pt-BR": Yn,
  "pt-PT": Zn,
  "ro-RO": Xn,
  "ru-RU": Jn,
  "sk-SK": Qn,
  "sl-SI": _n,
  "sr-SP": el,
  "sv-SE": tl,
  "tr-TR": nl,
  "uk-UA": ll,
  "zh-CN": ol,
  "zh-TW": il
};
function Ro(t) {
  return t && t.__esModule ? t.default : t;
}
function Oo(t, e, n) {
  let { type: l = "menu", isDisabled: o, trigger: i = "press" } = t, u = $e(), { triggerProps: r, overlayProps: s } = Ml({
    type: l
  }, e, n), p = (h) => {
    if (!o && !(i === "longPress" && !h.altKey) && n && n.current)
      switch (h.key) {
        case "Enter":
        case " ":
          if (i === "longPress" || h.isDefaultPrevented()) return;
        // fallthrough
        case "ArrowDown":
          "continuePropagation" in h || h.stopPropagation(), h.preventDefault(), e.toggle("first");
          break;
        case "ArrowUp":
          "continuePropagation" in h || h.stopPropagation(), h.preventDefault(), e.toggle("last");
          break;
        default:
          "continuePropagation" in h && h.continuePropagation();
      }
  }, b = At(Ro(ul), "@react-aria/menu"), { longPressProps: c } = xn({
    isDisabled: o || i !== "longPress",
    accessibilityDescription: b.format("longPressMessage"),
    onLongPressStart() {
      e.close();
    },
    onLongPress() {
      e.open("first");
    }
  }), f = {
    preventFocusOnPress: !0,
    onPressStart(h) {
      h.pointerType !== "touch" && h.pointerType !== "keyboard" && !o && (be(h.target), e.open(h.pointerType === "virtual" ? "first" : null));
    },
    onPress(h) {
      h.pointerType === "touch" && !o && (be(h.target), e.toggle());
    }
  };
  return delete r.onPress, {
    // @ts-ignore - TODO we pass out both DOMAttributes AND AriaButtonProps, but useButton will discard the longPress event handlers, it's only through PressResponder magic that this works for RSP and RAC. it does not work in aria examples
    menuTriggerProps: {
      ...r,
      ...i === "press" ? f : c,
      id: u,
      onKeyDown: p
    },
    menuProps: {
      ...s,
      "aria-labelledby": u,
      autoFocus: e.focusStrategy || !0,
      onClose: e.close
    }
  };
}
function Vo(t) {
  return t && t.__esModule ? t.default : t;
}
function zo(t, e) {
  let { buttonRef: n, popoverRef: l, inputRef: o, listBoxRef: i, keyboardDelegate: u, layoutDelegate: r, shouldFocusWrap: s, isReadOnly: p, isDisabled: b } = t, c = a.useRef(null);
  n = n ?? c;
  let f = At(Vo(yn), "@react-aria/combobox"), { menuTriggerProps: h, menuProps: $ } = Oo({
    type: "listbox",
    isDisabled: b || p
  }, e, n);
  Se.set(e, {
    id: $.id
  });
  let { collection: m } = e, { disabledKeys: x } = e.selectionManager, y = a.useMemo(() => u || new _e({
    collection: m,
    disabledKeys: x,
    ref: i,
    layoutDelegate: r
  }), [
    u,
    r,
    m,
    x,
    i
  ]), { collectionProps: C } = Dn({
    selectionManager: e.selectionManager,
    keyboardDelegate: y,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: s,
    ref: o,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), P = Ge(), B = (K) => {
    if (!K.nativeEvent.isComposing)
      switch (K.key) {
        case "Enter":
        case "Tab":
          if (e.isOpen && K.key === "Enter" && K.preventDefault(), e.isOpen && i.current && e.selectionManager.focusedKey != null) {
            let g = e.collection.getItem(e.selectionManager.focusedKey);
            if (g != null && g.props.href) {
              let I = i.current.querySelector(`[data-key="${CSS.escape(e.selectionManager.focusedKey.toString())}"]`);
              K.key === "Enter" && I instanceof HTMLAnchorElement && P.open(I, K, g.props.href, g.props.routerOptions), e.close();
              break;
            } else if (g != null && g.props.onAction) {
              g.props.onAction(), e.close();
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
  }, E = (K) => {
    var g;
    let I = (n == null ? void 0 : n.current) && n.current === K.relatedTarget, Z = (g = l.current) === null || g === void 0 ? void 0 : g.contains(K.relatedTarget);
    I || Z || (t.onBlur && t.onBlur(K), e.setFocused(!1));
  }, A = (K) => {
    e.isFocused || (t.onFocus && t.onFocus(K), e.setFocused(!0));
  }, { isInvalid: z, validationErrors: T, validationDetails: O } = e.displayValidation, { labelProps: k, inputProps: N, descriptionProps: j, errorMessageProps: R } = Il({
    ...t,
    onChange: e.setInputValue,
    onKeyDown: p ? t.onKeyDown : We(e.isOpen && C.onKeyDown, B, t.onKeyDown),
    onBlur: E,
    value: e.inputValue,
    defaultValue: e.defaultInputValue,
    onFocus: A,
    autoComplete: "off",
    validate: void 0,
    [Ll]: e
  }, o), Y = (K) => {
    if (K.pointerType === "touch") {
      var g;
      (g = o.current) === null || g === void 0 || g.focus(), e.toggle(null, "manual");
    }
  }, w = (K) => {
    if (K.pointerType !== "touch") {
      var g;
      (g = o.current) === null || g === void 0 || g.focus(), e.toggle(K.pointerType === "keyboard" || K.pointerType === "virtual" ? "first" : null, "manual");
    }
  }, H = ut({
    id: h.id,
    "aria-label": f.format("buttonLabel"),
    "aria-labelledby": t["aria-labelledby"] || k.id
  }), v = ut({
    id: $.id,
    "aria-label": f.format("listboxLabel"),
    "aria-labelledby": t["aria-labelledby"] || k.id
  }), D = a.useRef(0), F = (K) => {
    if (b || p) return;
    if (K.timeStamp - D.current < 500) {
      var g;
      K.preventDefault(), (g = o.current) === null || g === void 0 || g.focus();
      return;
    }
    let I = K.target.getBoundingClientRect(), Z = K.changedTouches[0], oe = Math.ceil(I.left + 0.5 * I.width), Ae = Math.ceil(I.top + 0.5 * I.height);
    if (Z.clientX === oe && Z.clientY === Ae) {
      var pe;
      K.preventDefault(), (pe = o.current) === null || pe === void 0 || pe.focus(), e.toggle(null, "manual"), D.current = K.timeStamp;
    }
  }, d = e.selectionManager.focusedKey != null && e.isOpen ? e.collection.getItem(e.selectionManager.focusedKey) : void 0;
  var M;
  let V = (M = d == null ? void 0 : d.parentKey) !== null && M !== void 0 ? M : null;
  var W;
  let q = (W = e.selectionManager.focusedKey) !== null && W !== void 0 ? W : null, te = a.useRef(V), J = a.useRef(q);
  a.useEffect(() => {
    if (ye() && d != null && q != null && q !== J.current) {
      let g = e.selectionManager.isSelected(q), I = V != null ? e.collection.getItem(V) : null, Z = (I == null ? void 0 : I["aria-label"]) || (typeof (I == null ? void 0 : I.rendered) == "string" ? I.rendered : "") || "";
      var K;
      let oe = f.format("focusAnnouncement", {
        isGroupChange: (K = I && V !== te.current) !== null && K !== void 0 ? K : !1,
        groupTitle: Z,
        groupCount: I ? [
          ...De(I, e.collection)
        ].length : 0,
        optionText: d["aria-label"] || d.textValue || "",
        isSelected: g
      });
      we(oe);
    }
    te.current = V, J.current = q;
  });
  let Q = En(e.collection), ne = a.useRef(Q), le = a.useRef(e.isOpen);
  a.useEffect(() => {
    let K = e.isOpen !== le.current && (e.selectionManager.focusedKey == null || ye());
    if (e.isOpen && (K || Q !== ne.current)) {
      let g = f.format("countAnnouncement", {
        optionCount: Q
      });
      we(g);
    }
    ne.current = Q, le.current = e.isOpen;
  });
  let ie = a.useRef(e.selectedKey);
  return a.useEffect(() => {
    if (ye() && e.isFocused && e.selectedItem && e.selectedKey !== ie.current) {
      let K = e.selectedItem["aria-label"] || e.selectedItem.textValue || "", g = f.format("selectedAnnouncement", {
        optionText: K
      });
      we(g);
    }
    ie.current = e.selectedKey;
  }), a.useEffect(() => {
    if (e.isOpen) return Rl([
      o.current,
      l.current
    ].filter((K) => K != null));
  }, [
    e.isOpen,
    o,
    l
  ]), so(() => {
    !d && o.current && He(Ue(o.current)) === o.current && Qe(o.current, null);
  }, [
    d
  ]), he(i, "react-aria-item-action", e.isOpen ? () => {
    e.close();
  } : void 0), {
    labelProps: k,
    buttonProps: {
      ...h,
      ...H,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      onPress: Y,
      onPressStart: w,
      isDisabled: b || p
    },
    inputProps: X(N, {
      role: "combobox",
      "aria-expanded": h["aria-expanded"],
      "aria-controls": e.isOpen ? $.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": d ? Cn(e, d.key) : void 0,
      onTouchEnd: F,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: X($, v, {
      autoFocus: e.focusStrategy || !0,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection",
      UNSTABLE_itemBehavior: "action"
    }),
    descriptionProps: j,
    errorMessageProps: R,
    isInvalid: z,
    validationErrors: T,
    validationDetails: O
  };
}
class rl {
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
class ae extends rl {
  get index() {
    return this._index;
  }
  set index(e) {
    this._index = e, this.ownerDocument.markDirty(this);
  }
  get level() {
    var e;
    return this.parentNode instanceof ae ? this.parentNode.level + (((e = this.node) === null || e === void 0 ? void 0 : e.type) === "item" ? 1 : 0) : 0;
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
    let p = this.nextVisibleSibling, b = this.getMutableNode();
    if (b != null) {
      b.index = this.index, b.level = this.level;
      var c;
      b.parentKey = this.parentNode instanceof ae && (c = (e = this.parentNode.node) === null || e === void 0 ? void 0 : e.key) !== null && c !== void 0 ? c : null;
      var f;
      b.prevKey = (f = (l = this.previousVisibleSibling) === null || l === void 0 || (n = l.node) === null || n === void 0 ? void 0 : n.key) !== null && f !== void 0 ? f : null;
      var h;
      b.nextKey = (h = p == null || (o = p.node) === null || o === void 0 ? void 0 : o.key) !== null && h !== void 0 ? h : null, b.hasChildNodes = !!this.firstChild;
      var $;
      b.firstChildKey = ($ = (u = this.firstVisibleChild) === null || u === void 0 || (i = u.node) === null || i === void 0 ? void 0 : i.key) !== null && $ !== void 0 ? $ : null;
      var m;
      if (b.lastChildKey = (m = (s = this.lastVisibleChild) === null || s === void 0 || (r = s.node) === null || r === void 0 ? void 0 : r.key) !== null && m !== void 0 ? m : null, (b.colSpan != null || b.colIndex != null) && p) {
        var x, y;
        let C = ((x = b.colIndex) !== null && x !== void 0 ? x : b.index) + ((y = b.colSpan) !== null && y !== void 0 ? y : 1);
        if (p.node != null && C !== p.node.colIndex) {
          let P = p.getMutableNode();
          P.colIndex = C;
        }
      }
    }
  }
  setProps(e, n, l, o, i) {
    let u, { value: r, textValue: s, id: p, ...b } = e;
    if (this.node == null ? (u = new l(p ?? `react-aria-${++this.ownerDocument.nodeId}`), this.node = u) : u = this.getMutableNode(), b.ref = n, u.props = b, u.rendered = o, u.render = i, u.value = r, u.textValue = s || (typeof b.children == "string" ? b.children : "") || e["aria-label"] || "", p != null && p !== u.key) throw new Error("Cannot change the id of an item");
    b.colSpan != null && (u.colSpan = b.colSpan), this.isConnected && this.ownerDocument.queueUpdate();
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
class No extends rl {
  get isConnected() {
    return !0;
  }
  createElement(e) {
    return new ae(e, this);
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
    for (let r of this.dirtyNodes) r instanceof ae && (!r.isConnected || r.isHidden) ? this.removeNode(r) : r.updateChildIndices();
    for (let r of this.dirtyNodes) r instanceof ae ? (r.isConnected && !r.isHidden && (r.updateNode(), this.addNode(r)), r.node && this.dirtyNodes.delete(r), r.isMutated = !1) : this.dirtyNodes.delete(r);
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
function sl(t) {
  let { children: e, items: n, idScope: l, addIdAndValue: o, dependencies: i = [] } = t, u = a.useMemo(() => /* @__PURE__ */ new WeakMap(), i);
  return a.useMemo(() => {
    if (n && typeof e == "function") {
      let p = [];
      for (let b of n) {
        let c = u.get(b);
        if (!c) {
          c = e(b);
          var r, s;
          let f = (s = (r = c.props.id) !== null && r !== void 0 ? r : b.key) !== null && s !== void 0 ? s : b.id;
          if (f == null) throw new Error("Could not determine key for item");
          l && (f = l + ":" + f), c = a.cloneElement(c, o ? {
            key: f,
            id: f,
            value: b
          } : {
            key: f
          }), u.set(b, c);
        }
        p.push(c);
      }
      return p;
    } else if (typeof e != "function") return e;
  }, [
    e,
    n,
    u,
    l,
    o
  ]);
}
var ge = { exports: {} }, Ie = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function jo() {
  if ($t) return Ie;
  $t = 1;
  var t = Pt();
  function e(c, f) {
    return c === f && (c !== 0 || 1 / c === 1 / f) || c !== c && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : e, l = t.useState, o = t.useEffect, i = t.useLayoutEffect, u = t.useDebugValue;
  function r(c, f) {
    var h = f(), $ = l({ inst: { value: h, getSnapshot: f } }), m = $[0].inst, x = $[1];
    return i(
      function() {
        m.value = h, m.getSnapshot = f, s(m) && x({ inst: m });
      },
      [c, h, f]
    ), o(
      function() {
        return s(m) && x({ inst: m }), c(function() {
          s(m) && x({ inst: m });
        });
      },
      [c]
    ), u(h), h;
  }
  function s(c) {
    var f = c.getSnapshot;
    c = c.value;
    try {
      var h = f();
      return !n(c, h);
    } catch {
      return !0;
    }
  }
  function p(c, f) {
    return f();
  }
  var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : r;
  return Ie.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : b, Ie;
}
var Le = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function Uo() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && function() {
    function t(h, $) {
      return h === $ && (h !== 0 || 1 / h === 1 / $) || h !== h && $ !== $;
    }
    function e(h, $) {
      b || o.startTransition === void 0 || (b = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = $();
      if (!c) {
        var x = $();
        i(m, x) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), c = !0);
      }
      x = u({
        inst: { value: m, getSnapshot: $ }
      });
      var y = x[0].inst, C = x[1];
      return s(
        function() {
          y.value = m, y.getSnapshot = $, n(y) && C({ inst: y });
        },
        [h, m, $]
      ), r(
        function() {
          return n(y) && C({ inst: y }), h(function() {
            n(y) && C({ inst: y });
          });
        },
        [h]
      ), p(m), m;
    }
    function n(h) {
      var $ = h.getSnapshot;
      h = h.value;
      try {
        var m = $();
        return !i(h, m);
      } catch {
        return !0;
      }
    }
    function l(h, $) {
      return $();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = Pt(), i = typeof Object.is == "function" ? Object.is : t, u = o.useState, r = o.useEffect, s = o.useLayoutEffect, p = o.useDebugValue, b = !1, c = !1, f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : e;
    Le.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Le;
}
var yt;
function Ho() {
  return yt || (yt = 1, process.env.NODE_ENV === "production" ? ge.exports = jo() : ge.exports = Uo()), ge.exports;
}
var Go = Ho();
const al = /* @__PURE__ */ a.createContext(!1), ve = /* @__PURE__ */ a.createContext(null);
function cl(t) {
  if (a.useContext(ve))
    return t.content;
  let { collection: n, document: l } = Zo(t.createCollection);
  return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Ol, null, /* @__PURE__ */ S.createElement(ve.Provider, {
    value: l
  }, t.content)), /* @__PURE__ */ S.createElement(Wo, {
    render: t.children,
    collection: n
  }));
}
function Wo({ collection: t, render: e }) {
  return e(t);
}
function qo(t, e, n) {
  let l = wt(), o = a.useRef(l);
  o.current = l;
  let i = a.useCallback(() => o.current ? n() : e(), [
    e,
    n
  ]);
  return Go.useSyncExternalStore(t, i);
}
const Yo = typeof S.useSyncExternalStore == "function" ? S.useSyncExternalStore : qo;
function Zo(t) {
  let [e] = a.useState(() => new No((t == null ? void 0 : t()) || new Vl())), n = a.useCallback((u) => e.subscribe(u), [
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
    collection: Yo(n, l, o),
    document: e
  };
}
const ze = /* @__PURE__ */ a.createContext(null);
function Xo(t) {
  var e;
  return e = class extends Bt {
  }, e.type = t, e;
}
function dl(t, e, n, l, o, i) {
  typeof t == "string" && (t = Xo(t));
  let u = a.useCallback((s) => {
    s == null || s.setProps(e, n, t, l, i);
  }, [
    e,
    n,
    l,
    i,
    t
  ]), r = a.useContext(ze);
  if (r) {
    let s = r.ownerDocument.nodesByProps.get(e);
    return s || (s = r.ownerDocument.createElement(t.type), s.setProps(e, n, t, l, i), r.appendChild(s), r.ownerDocument.updateCollection(), r.ownerDocument.nodesByProps.set(e, s)), o ? /* @__PURE__ */ S.createElement(ze.Provider, {
      value: s
    }, o) : null;
  }
  return /* @__PURE__ */ S.createElement(t.type, {
    ref: u
  }, o);
}
function fl(t, e) {
  let n = ({ node: o }) => e(o.props, o.props.ref, o), l = a.forwardRef((o, i) => {
    let u = a.useContext(rt);
    if (!a.useContext(al)) {
      if (e.length >= 3) throw new Error(e.name + " cannot be rendered outside a collection.");
      return e(o, i);
    }
    return dl(t, o, i, "children" in o ? o.children : null, null, (s) => (
      // Forward FocusableContext to real DOM tree so tooltips work.
      /* @__PURE__ */ S.createElement(rt.Provider, {
        value: u
      }, /* @__PURE__ */ S.createElement(n, {
        node: s
      }))
    ));
  });
  return l.displayName = e.name, l;
}
function qi(t, e, n = pl) {
  let l = ({ node: i }) => e(i.props, i.props.ref, i), o = a.forwardRef((i, u) => {
    let r = n(i);
    var s;
    return (s = dl(t, i, u, null, r, (p) => /* @__PURE__ */ S.createElement(l, {
      node: p
    }))) !== null && s !== void 0 ? s : /* @__PURE__ */ S.createElement(S.Fragment, null);
  });
  return o.displayName = e.name, o;
}
function pl(t) {
  return sl({
    ...t,
    addIdAndValue: !0
  });
}
const xt = /* @__PURE__ */ a.createContext(null);
function Jo(t) {
  let e = a.useContext(xt), n = ((e == null ? void 0 : e.dependencies) || []).concat(t.dependencies), l = t.idScope || (e == null ? void 0 : e.idScope), o = pl({
    ...t,
    idScope: l,
    dependencies: n
  });
  return a.useContext(ve) && (o = /* @__PURE__ */ S.createElement(Qo, null, o)), e = a.useMemo(() => ({
    dependencies: n,
    idScope: l
  }), [
    l,
    ...n
  ]), /* @__PURE__ */ S.createElement(xt.Provider, {
    value: e
  }, o);
}
function Qo({ children: t }) {
  let e = a.useContext(ve), n = a.useMemo(() => /* @__PURE__ */ S.createElement(ve.Provider, {
    value: null
  }, /* @__PURE__ */ S.createElement(al.Provider, {
    value: !0
  }, t)), [
    t
  ]);
  return wt() ? /* @__PURE__ */ S.createElement(ze.Provider, {
    value: e
  }, n) : /* @__PURE__ */ Et.createPortal(n, e);
}
const _o = /* @__PURE__ */ a.createContext(null), ei = {
  CollectionRoot({ collection: t, renderDropIndicator: e }) {
    return mt(t, null, e);
  },
  CollectionBranch({ collection: t, parent: e, renderDropIndicator: n }) {
    return mt(t, e, n);
  }
};
function mt(t, e, n) {
  return sl({
    items: e ? t.getChildren(e.key) : t,
    dependencies: [
      n
    ],
    children(l) {
      let o = l.render(l);
      return !n || l.type !== "item" ? o : /* @__PURE__ */ S.createElement(S.Fragment, null, n({
        type: "item",
        key: l.key,
        dropPosition: "before"
      }), o, ti(t, l, n));
    }
  });
}
function ti(t, e, n) {
  let l = e.key, o = t.getKeyAfter(l), i = o != null ? t.getItem(o) : null;
  for (; i != null && i.type !== "item"; )
    o = t.getKeyAfter(i.key), i = o != null ? t.getItem(o) : null;
  let u = e.nextKey != null ? t.getItem(e.nextKey) : null;
  for (; u != null && u.type !== "item"; ) u = u.nextKey != null ? t.getItem(u.nextKey) : null;
  let r = [];
  if (u == null) {
    let s = e;
    for (; s && (!i || s.parentKey !== i.parentKey && i.level < s.level); ) {
      let p = n({
        type: "item",
        key: s.key,
        dropPosition: "after"
      });
      /* @__PURE__ */ a.isValidElement(p) && r.push(/* @__PURE__ */ a.cloneElement(p, {
        key: `${s.key}-after`
      })), s = s.parentKey != null ? t.getItem(s.parentKey) : null;
    }
  }
  return r;
}
const et = /* @__PURE__ */ a.createContext(ei);
class Ne {
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
class ee extends Set {
  constructor(e, n, l) {
    super(e), e instanceof ee ? (this.anchorKey = n ?? e.anchorKey, this.currentKey = l ?? e.currentKey) : (this.anchorKey = n ?? null, this.currentKey = l ?? null);
  }
}
function ni(t, e) {
  if (t.size !== e.size) return !1;
  for (let n of t)
    if (!e.has(n)) return !1;
  return !0;
}
function li(t) {
  let { selectionMode: e = "none", disallowEmptySelection: n = !1, allowDuplicateSelectionEvents: l, selectionBehavior: o = "toggle", disabledBehavior: i = "all" } = t, u = a.useRef(!1), [, r] = a.useState(!1), s = a.useRef(null), p = a.useRef(null), [, b] = a.useState(null), c = a.useMemo(() => Ct(t.selectedKeys), [
    t.selectedKeys
  ]), f = a.useMemo(() => Ct(t.defaultSelectedKeys, new ee()), [
    t.defaultSelectedKeys
  ]), [h, $] = qe(c, f, t.onSelectionChange), m = a.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), [x, y] = a.useState(o);
  o === "replace" && x === "toggle" && typeof h == "object" && h.size === 0 && y("replace");
  let C = a.useRef(o);
  return a.useEffect(() => {
    o !== C.current && (y(o), C.current = o);
  }, [
    o
  ]), {
    selectionMode: e,
    disallowEmptySelection: n,
    selectionBehavior: x,
    setSelectionBehavior: y,
    get isFocused() {
      return u.current;
    },
    setFocused(P) {
      u.current = P, r(P);
    },
    get focusedKey() {
      return s.current;
    },
    get childFocusStrategy() {
      return p.current;
    },
    setFocusedKey(P, B = "first") {
      s.current = P, p.current = B, b(P);
    },
    selectedKeys: h,
    setSelectedKeys(P) {
      (l || !ni(P, h)) && $(P);
    },
    disabledKeys: m,
    disabledBehavior: i
  };
}
function Ct(t, e) {
  return t ? t === "all" ? "all" : new ee(t) : e;
}
class tt {
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
      (!e || o && Me(this.collection, o, e) < 0) && (e = o);
    }
    var n;
    return (n = e == null ? void 0 : e.key) !== null && n !== void 0 ? n : null;
  }
  get lastSelectedKey() {
    let e = null;
    for (let l of this.state.selectedKeys) {
      let o = this.collection.getItem(l);
      (!e || o && Me(this.collection, o, e) > 0) && (e = o);
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
    if (this.state.selectedKeys === "all") l = new ee([
      n
    ], n, n);
    else {
      let u = this.state.selectedKeys;
      var o;
      let r = (o = u.anchorKey) !== null && o !== void 0 ? o : n;
      l = new ee(u, r, n);
      var i;
      for (let s of this.getKeyRange(r, (i = u.currentKey) !== null && i !== void 0 ? i : n)) l.delete(s);
      for (let s of this.getKeyRange(n, r)) this.canSelectItem(s) && l.add(s);
    }
    this.state.setSelectedKeys(l);
  }
  getKeyRange(e, n) {
    let l = this.collection.getItem(e), o = this.collection.getItem(n);
    return l && o ? Me(this.collection, l, o) <= 0 ? this.getKeyRangeInternal(e, n) : this.getKeyRangeInternal(n, e) : [];
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
    let l = new ee(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    l.has(n) ? l.delete(n) : this.canSelectItem(n) && (l.add(n), l.anchorKey = n, l.currentKey = n), !(this.disallowEmptySelection && l.size === 0) && this.state.setSelectedKeys(l);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(e) {
    if (this.selectionMode === "none") return;
    let n = this.getKey(e);
    if (n == null) return;
    let l = this.canSelectItem(n) ? new ee([
      n
    ], n, n) : new ee();
    this.state.setSelectedKeys(l);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(e) {
    if (this.selectionMode === "none") return;
    let n = new ee();
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
          u != null && u.hasChildNodes && (this.allowsCellSelection || u.type !== "item") && n((i = (o = Fo(De(u, this.collection))) === null || o === void 0 ? void 0 : o.key) !== null && i !== void 0 ? i : null);
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
    !this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new ee());
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
    return new tt(e, this.state, {
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
function hl(t) {
  let { filter: e, layoutDelegate: n } = t, l = li(t), o = a.useMemo(() => t.disabledKeys ? new Set(t.disabledKeys) : /* @__PURE__ */ new Set(), [
    t.disabledKeys
  ]), i = a.useCallback((p) => e ? new Ne(e(p)) : new Ne(p), [
    e
  ]), u = a.useMemo(() => ({
    suppressTextValueWarning: t.suppressTextValueWarning
  }), [
    t.suppressTextValueWarning
  ]), r = ko(t, i, u), s = a.useMemo(() => new tt(r, l, {
    layoutDelegate: n
  }), [
    r,
    l,
    n
  ]);
  return bl(r, s), {
    collection: r,
    disabledKeys: o,
    selectionManager: s
  };
}
function oi(t, e) {
  let n = a.useMemo(() => e ? t.collection.filter(e) : t.collection, [
    t.collection,
    e
  ]), l = t.selectionManager.withCollection(n);
  return bl(n, l), {
    collection: n,
    selectionManager: l,
    disabledKeys: t.disabledKeys
  };
}
function bl(t, e) {
  const n = a.useRef(null);
  a.useEffect(() => {
    if (e.focusedKey != null && !t.getItem(e.focusedKey) && n.current) {
      const b = n.current.getItem(e.focusedKey), c = [
        ...n.current.getKeys()
      ].map((y) => {
        const C = n.current.getItem(y);
        return (C == null ? void 0 : C.type) === "item" ? C : null;
      }).filter((y) => y !== null), f = [
        ...t.getKeys()
      ].map((y) => {
        const C = t.getItem(y);
        return (C == null ? void 0 : C.type) === "item" ? C : null;
      }).filter((y) => y !== null);
      var l, o;
      const h = ((l = c == null ? void 0 : c.length) !== null && l !== void 0 ? l : 0) - ((o = f == null ? void 0 : f.length) !== null && o !== void 0 ? o : 0);
      var i, u, r;
      let $ = Math.min(h > 1 ? Math.max(((i = b == null ? void 0 : b.index) !== null && i !== void 0 ? i : 0) - h + 1, 0) : (u = b == null ? void 0 : b.index) !== null && u !== void 0 ? u : 0, ((r = f == null ? void 0 : f.length) !== null && r !== void 0 ? r : 0) - 1), m = null, x = !1;
      for (; $ >= 0; ) {
        if (!e.isDisabled(f[$].key)) {
          m = f[$];
          break;
        }
        if ($ < f.length - 1 && !x) $++;
        else {
          x = !0;
          var s, p;
          $ > ((s = b == null ? void 0 : b.index) !== null && s !== void 0 ? s : 0) && ($ = (p = b == null ? void 0 : b.index) !== null && p !== void 0 ? p : 0), $--;
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
function ii(t) {
  var e;
  let [n, l] = qe(t.selectedKey, (e = t.defaultSelectedKey) !== null && e !== void 0 ? e : null, t.onSelectionChange), o = a.useMemo(() => n != null ? [
    n
  ] : [], [
    n
  ]), { collection: i, disabledKeys: u, selectionManager: r } = hl({
    ...t,
    selectionMode: "single",
    disallowEmptySelection: !0,
    allowDuplicateSelectionEvents: !0,
    selectedKeys: o,
    onSelectionChange: (p) => {
      if (p === "all") return;
      var b;
      let c = (b = p.values().next().value) !== null && b !== void 0 ? b : null;
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
function ui(t) {
  var e;
  let { defaultFilter: n, menuTrigger: l = "input", allowsEmptyCollection: o = !1, allowsCustomValue: i, shouldCloseOnBlur: u = !0 } = t, [r, s] = a.useState(!1), [p, b] = a.useState(!1), [c, f] = a.useState(null), h = (L) => {
    t.onSelectionChange && t.onSelectionChange(L), L === y && (W(), d());
  };
  var $;
  let { collection: m, selectionManager: x, selectedKey: y, setSelectedKey: C, selectedItem: P, disabledKeys: B } = ii({
    ...t,
    onSelectionChange: h,
    items: ($ = t.items) !== null && $ !== void 0 ? $ : t.defaultItems
  }), [E, A] = qe(t.inputValue, St(t.defaultInputValue, y, m) || "", t.onInputChange), [z] = a.useState(y), [T] = a.useState(E), O = m, k = a.useMemo(() => (
    // No default filter if items are controlled.
    t.items != null || !n ? m : ri(m, E, n)
  ), [
    m,
    E,
    n,
    t.items
  ]), [N, j] = a.useState(k), R = a.useRef("focus"), w = zl({
    ...t,
    onOpenChange: (L) => {
      t.onOpenChange && t.onOpenChange(L, L ? R.current : void 0), x.setFocused(L), L || x.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), H = (L = null, U) => {
    let G = U === "manual" || U === "focus" && l === "focus";
    (o || k.size > 0 || G && O.size > 0 || t.items) && (G && !w.isOpen && t.items === void 0 && s(!0), R.current = U, f(L), w.open());
  }, v = (L = null, U) => {
    let G = U === "manual" || U === "focus" && l === "focus";
    !(o || k.size > 0 || G && O.size > 0 || t.items) && !w.isOpen || (G && !w.isOpen && t.items === void 0 && s(!0), w.isOpen || (R.current = U), F(L));
  }, D = a.useCallback(() => {
    j(r ? O : k);
  }, [
    r,
    O,
    k
  ]), F = a.useCallback((L = null) => {
    w.isOpen && D(), f(L), w.toggle();
  }, [
    w,
    D
  ]), d = a.useCallback(() => {
    w.isOpen && (D(), w.close());
  }, [
    w,
    D
  ]), [M, V] = a.useState(E), W = () => {
    var L, U;
    let G = y != null && (U = (L = m.getItem(y)) === null || L === void 0 ? void 0 : L.textValue) !== null && U !== void 0 ? U : "";
    V(G), A(G);
  };
  var q, te;
  let J = a.useRef((te = (q = t.selectedKey) !== null && q !== void 0 ? q : t.defaultSelectedKey) !== null && te !== void 0 ? te : null);
  var Q;
  let ne = a.useRef(y != null && (Q = (e = m.getItem(y)) === null || e === void 0 ? void 0 : e.textValue) !== null && Q !== void 0 ? Q : "");
  a.useEffect(() => {
    var L;
    p && (k.size > 0 || o) && !w.isOpen && E !== M && l !== "manual" && H(null, "input"), !r && !o && w.isOpen && k.size === 0 && d(), y != null && y !== J.current && d(), E !== M && (x.setFocusedKey(null), s(!1), E === "" && (t.inputValue === void 0 || t.selectedKey === void 0) && C(null)), y !== J.current && (t.inputValue === void 0 || t.selectedKey === void 0) ? W() : M !== E && V(E);
    var U;
    let G = y != null && (U = (L = m.getItem(y)) === null || L === void 0 ? void 0 : L.textValue) !== null && U !== void 0 ? U : "";
    !p && y != null && t.inputValue === void 0 && y === J.current && ne.current !== G && (V(G), A(G)), J.current = y, ne.current = G;
  });
  let le = Nl({
    ...t,
    value: a.useMemo(() => ({
      inputValue: E,
      selectedKey: y
    }), [
      E,
      y
    ])
  }), ie = () => {
    i && y == null ? K() : g();
  }, K = () => {
    J.current = null, C(null), d();
  }, g = () => {
    if (t.selectedKey !== void 0 && t.inputValue !== void 0) {
      var L, U;
      (L = t.onSelectionChange) === null || L === void 0 || L.call(t, y);
      var G;
      let Sl = y != null && (G = (U = m.getItem(y)) === null || U === void 0 ? void 0 : U.textValue) !== null && G !== void 0 ? G : "";
      V(Sl), d();
    } else
      W(), d();
  };
  const I = () => {
    if (i) {
      var L, U;
      const G = y != null && (U = (L = m.getItem(y)) === null || L === void 0 ? void 0 : L.textValue) !== null && U !== void 0 ? U : "";
      E === G ? g() : K();
    } else
      g();
  };
  let Z = () => {
    w.isOpen && x.focusedKey != null ? y === x.focusedKey ? g() : C(x.focusedKey) : I();
  }, oe = a.useRef(E), Ae = (L) => {
    L ? (oe.current = E, l === "focus" && !t.isReadOnly && H(null, "focus")) : (u && I(), E !== oe.current && le.commitValidation()), b(L);
  }, pe = a.useMemo(() => w.isOpen ? r ? O : k : N, [
    w.isOpen,
    O,
    k,
    r,
    N
  ]);
  var Pe;
  let nt = (Pe = t.defaultSelectedKey) !== null && Pe !== void 0 ? Pe : z;
  var Be;
  return {
    ...le,
    ...w,
    focusStrategy: c,
    toggle: v,
    open: H,
    close: I,
    selectionManager: x,
    selectedKey: y,
    defaultSelectedKey: nt,
    setSelectedKey: C,
    disabledKeys: B,
    isFocused: p,
    setFocused: Ae,
    selectedItem: P,
    collection: pe,
    inputValue: E,
    defaultInputValue: (Be = St(t.defaultInputValue, nt, m)) !== null && Be !== void 0 ? Be : T,
    setInputValue: A,
    commit: Z,
    revert: ie
  };
}
function ri(t, e, n) {
  return new Ne(vl(t, t, e, n));
}
function vl(t, e, n, l) {
  let o = [];
  for (let i of e)
    if (i.type === "section" && i.hasChildNodes) {
      let u = vl(t, De(i, t), n, l);
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
function St(t, e, n) {
  if (t == null) {
    var l, o;
    if (e != null) return (o = (l = n.getItem(e)) === null || l === void 0 ? void 0 : l.textValue) !== null && o !== void 0 ? o : "";
  }
  return t;
}
const Ee = /* @__PURE__ */ a.createContext({}), $l = /* @__PURE__ */ a.createContext(null), si = /* @__PURE__ */ a.forwardRef(function(e, n) {
  let { render: l } = a.useContext($l);
  return /* @__PURE__ */ S.createElement(S.Fragment, null, l(e, n));
});
function gl(t, e) {
  var n;
  let l = t == null ? void 0 : t.renderDropIndicator, o = t == null || (n = t.isVirtualDragging) === null || n === void 0 ? void 0 : n.call(t), i = a.useCallback((u) => {
    if (o || e != null && e.isDropTarget(u)) return l ? l(u) : /* @__PURE__ */ S.createElement(si, {
      target: u
    });
  }, [
    e == null ? void 0 : e.target,
    o,
    l
  ]);
  return t != null && t.useDropIndicator ? i : void 0;
}
function ai(t, e, n) {
  var l, o;
  let i = t.focusedKey, u = null;
  if (!(e == null || (l = e.isVirtualDragging) === null || l === void 0) && l.call(e) && (n == null || (o = n.target) === null || o === void 0 ? void 0 : o.type) === "item" && (u = n.target.key, n.target.dropPosition === "after")) {
    let c = n.collection.getKeyAfter(u), f = null;
    if (c != null) {
      var r, s;
      let h = (s = (r = n.collection.getItem(u)) === null || r === void 0 ? void 0 : r.level) !== null && s !== void 0 ? s : 0;
      for (; c; ) {
        let $ = n.collection.getItem(c);
        if (!$) break;
        if ($.type !== "item") {
          c = n.collection.getKeyAfter(c);
          continue;
        }
        var p;
        if (((p = $.level) !== null && p !== void 0 ? p : 0) <= h) break;
        f = c, c = n.collection.getKeyAfter(c);
      }
    }
    var b;
    u = (b = c ?? f) !== null && b !== void 0 ? b : u;
  }
  return a.useMemo(() => new Set([
    i,
    u
  ].filter((c) => c != null)), [
    i,
    u
  ]);
}
const ci = /* @__PURE__ */ a.createContext({}), di = /* @__PURE__ */ a.createContext(null);
function fi(t) {
  let e = a.useRef({});
  return /* @__PURE__ */ S.createElement(di.Provider, {
    value: e
  }, t.children);
}
const pi = /* @__PURE__ */ a.createContext({
  isSelected: !1
}), hi = /* @__PURE__ */ a.createContext({});
class bi extends Bt {
  filter(e, n) {
    let l = n.getItem(this.prevKey);
    if (l && l.type !== "separator") {
      let o = this.clone();
      return n.addDescendants(o, e), o;
    }
    return null;
  }
}
bi.type = "separator";
const Ke = /* @__PURE__ */ a.createContext(null), fe = /* @__PURE__ */ a.createContext(null), vi = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = Ye(e, n, Ke);
  let l = a.useContext(fe);
  return l ? /* @__PURE__ */ S.createElement(yl, {
    state: l,
    props: e,
    listBoxRef: n
  }) : /* @__PURE__ */ S.createElement(cl, {
    content: /* @__PURE__ */ S.createElement(Jo, e)
  }, (o) => /* @__PURE__ */ S.createElement($i, {
    props: e,
    listBoxRef: n,
    collection: o
  }));
});
function $i({ props: t, listBoxRef: e, collection: n }) {
  t = {
    ...t,
    collection: n,
    children: null,
    items: null
  };
  let { layoutDelegate: l } = a.useContext(et), o = hl({
    ...t,
    layoutDelegate: l
  });
  return /* @__PURE__ */ S.createElement(yl, {
    state: o,
    props: t,
    listBoxRef: e
  });
}
function yl({ state: t, props: e, listBoxRef: n }) {
  [e, n] = Ye(e, n, Gl);
  let { dragAndDropHooks: l, layout: o = "stack", orientation: i = "vertical", filter: u } = e, r = oi(t, u), { collection: s, selectionManager: p } = r, b = !!(l != null && l.useDraggableCollectionState), c = !!(l != null && l.useDroppableCollectionState), { direction: f } = je(), { disabledBehavior: h, disabledKeys: $ } = p, m = Je({
    usage: "search",
    sensitivity: "base"
  }), { isVirtualized: x, layoutDelegate: y, dropTargetDelegate: C, CollectionRoot: P } = a.useContext(et), B = a.useMemo(() => e.keyboardDelegate || new _e({
    collection: s,
    collator: m,
    ref: n,
    disabledKeys: $,
    disabledBehavior: h,
    layout: o,
    orientation: i,
    direction: f,
    layoutDelegate: y
  }), [
    s,
    m,
    n,
    h,
    $,
    i,
    f,
    e.keyboardDelegate,
    o,
    y
  ]), { listBoxProps: E } = Bo({
    ...e,
    shouldSelectOnPressUp: b || e.shouldSelectOnPressUp,
    keyboardDelegate: B,
    isVirtualized: x
  }, r, n), A = a.useRef(b), z = a.useRef(c);
  a.useEffect(() => {
    process.env.NODE_ENV !== "production" && (A.current !== b && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), z.current !== c && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    b,
    c
  ]);
  let T, O, k, N = !1, j = null, R = a.useRef(null);
  if (b && l) {
    T = l.useDraggableCollectionState({
      collection: s,
      selectionManager: p,
      preview: l.renderDragPreview ? R : void 0
    }), l.useDraggableCollection({}, T, n);
    let V = l.DragPreview;
    j = l.renderDragPreview ? /* @__PURE__ */ S.createElement(V, {
      ref: R
    }, l.renderDragPreview) : null;
  }
  if (c && l) {
    O = l.useDroppableCollectionState({
      collection: s,
      selectionManager: p
    });
    let V = l.dropTargetDelegate || C || new l.ListDropTargetDelegate(s, n, {
      orientation: i,
      layout: o,
      direction: f
    });
    k = l.useDroppableCollection({
      keyboardDelegate: B,
      dropTargetDelegate: V
    }, O, n), N = O.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: Y, isFocused: w, isFocusVisible: H } = Wl(), v = r.collection.size === 0, D = {
    isDropTarget: N,
    isEmpty: v,
    isFocused: w,
    isFocusVisible: H,
    layout: e.layout || "stack",
    state: r
  }, F = de({
    className: e.className,
    style: e.style,
    defaultClassName: "react-aria-ListBox",
    values: D
  }), d = null;
  v && e.renderEmptyState && (d = /* @__PURE__ */ S.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, e.renderEmptyState(D)));
  let M = ue(e, {
    global: !0
  });
  return /* @__PURE__ */ S.createElement(ql, null, /* @__PURE__ */ S.createElement("div", {
    ...X(M, F, E, Y, k == null ? void 0 : k.collectionProps),
    ref: n,
    slot: e.slot || void 0,
    onScroll: e.onScroll,
    "data-drop-target": N || void 0,
    "data-empty": v || void 0,
    "data-focused": w || void 0,
    "data-focus-visible": H || void 0,
    "data-layout": e.layout || "stack",
    "data-orientation": e.orientation || "vertical"
  }, /* @__PURE__ */ S.createElement(Ze, {
    values: [
      [
        Ke,
        e
      ],
      [
        fe,
        r
      ],
      [
        Ee,
        {
          dragAndDropHooks: l,
          dragState: T,
          dropState: O
        }
      ],
      [
        hi,
        {
          elementType: "div"
        }
      ],
      [
        $l,
        {
          render: xi
        }
      ],
      [
        _o,
        {
          name: "ListBoxSection",
          render: gi
        }
      ]
    ]
  }, /* @__PURE__ */ S.createElement(fi, null, /* @__PURE__ */ S.createElement(P, {
    collection: s,
    scrollRef: n,
    persistedKeys: ai(p, l, O),
    renderDropIndicator: gl(l, O)
  }))), d, j));
}
function gi(t, e, n, l = "react-aria-ListBoxSection") {
  let o = a.useContext(fe), { dragAndDropHooks: i, dropState: u } = a.useContext(Ee), { CollectionBranch: r } = a.useContext(et), [s, p] = kt();
  var b;
  let { headingProps: c, groupProps: f } = Lo({
    heading: p,
    "aria-label": (b = t["aria-label"]) !== null && b !== void 0 ? b : void 0
  }), h = de({
    defaultClassName: l,
    className: t.className,
    style: t.style,
    values: {}
  }), $ = ue(t, {
    global: !0
  });
  return delete $.id, /* @__PURE__ */ S.createElement("section", {
    ...X($, h, f),
    ref: e
  }, /* @__PURE__ */ S.createElement(ci.Provider, {
    value: {
      ...c,
      ref: s
    }
  }, /* @__PURE__ */ S.createElement(r, {
    collection: o.collection,
    parent: n,
    renderDropIndicator: gl(i, u)
  })));
}
const yi = /* @__PURE__ */ fl(Ul, function(e, n, l) {
  let o = Tt(n), i = a.useContext(fe), { dragAndDropHooks: u, dragState: r, dropState: s } = a.useContext(Ee), { optionProps: p, labelProps: b, descriptionProps: c, ...f } = Io({
    key: l.key,
    "aria-label": e == null ? void 0 : e["aria-label"]
  }, i, o), { hoverProps: h, isHovered: $ } = Kt({
    isDisabled: !f.allowsSelection && !f.hasAction,
    onHoverStart: l.props.onHoverStart,
    onHoverChange: l.props.onHoverChange,
    onHoverEnd: l.props.onHoverEnd
  }), m = null;
  r && u && (m = u.useDraggableItem({
    key: l.key
  }, r));
  let x = null;
  s && u && (x = u.useDroppableItem({
    target: {
      type: "item",
      key: l.key,
      dropPosition: "on"
    }
  }, s, o));
  let y = r && r.isDragging(l.key), C = de({
    ...e,
    id: void 0,
    children: e.children,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...f,
      isHovered: $,
      selectionMode: i.selectionManager.selectionMode,
      selectionBehavior: i.selectionManager.selectionBehavior,
      allowsDragging: !!r,
      isDragging: y,
      isDropTarget: x == null ? void 0 : x.isDropTarget
    }
  });
  a.useEffect(() => {
    !l.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    l.textValue
  ]);
  let P = e.href ? "a" : "div", B = ue(e, {
    global: !0
  });
  return delete B.id, delete B.onClick, /* @__PURE__ */ S.createElement(P, {
    ...X(B, C, p, h, m == null ? void 0 : m.dragProps, x == null ? void 0 : x.dropProps),
    ref: o,
    "data-allows-dragging": !!r || void 0,
    "data-selected": f.isSelected || void 0,
    "data-disabled": f.isDisabled || void 0,
    "data-hovered": $ || void 0,
    "data-focused": f.isFocused || void 0,
    "data-focus-visible": f.isFocusVisible || void 0,
    "data-pressed": f.isPressed || void 0,
    "data-dragging": y || void 0,
    "data-drop-target": (x == null ? void 0 : x.isDropTarget) || void 0,
    "data-selection-mode": i.selectionManager.selectionMode === "none" ? void 0 : i.selectionManager.selectionMode
  }, /* @__PURE__ */ S.createElement(Ze, {
    values: [
      [
        Xe,
        {
          slots: {
            [Hl]: b,
            label: b,
            description: c
          }
        }
      ],
      [
        pi,
        {
          isSelected: f.isSelected
        }
      ]
    ]
  }, C.children));
});
function xi(t, e) {
  e = Tt(e);
  let { dragAndDropHooks: n, dropState: l } = a.useContext(Ee), { dropIndicatorProps: o, isHidden: i, isDropTarget: u } = n.useDropIndicator(t, l, e);
  return i ? null : /* @__PURE__ */ S.createElement(Ci, {
    ...t,
    dropIndicatorProps: o,
    isDropTarget: u,
    ref: e
  });
}
function mi(t, e) {
  let { dropIndicatorProps: n, isDropTarget: l, ...o } = t, i = de({
    ...o,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: l
    }
  });
  return /* @__PURE__ */ S.createElement("div", {
    ...n,
    ...i,
    // eslint-disable-next-line
    role: "option",
    ref: e,
    "data-drop-target": l || void 0
  });
}
const Ci = /* @__PURE__ */ a.forwardRef(mi);
fl(jl, function(e, n, l) {
  let o = a.useContext(fe), { isLoading: i, onLoadMore: u, scrollOffset: r, ...s } = e, p = a.useRef(null), b = a.useMemo(() => ({
    onLoadMore: u,
    collection: o == null ? void 0 : o.collection,
    sentinelRef: p,
    scrollOffset: r
  }), [
    u,
    r,
    o == null ? void 0 : o.collection
  ]);
  po(b, p);
  let c = de({
    ...s,
    id: void 0,
    children: l.rendered,
    defaultClassName: "react-aria-ListBoxLoadingIndicator",
    values: null
  }), f = {
    // For Android talkback
    tabIndex: -1
  };
  return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: ho(!0)
  }, /* @__PURE__ */ S.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: p,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), i && c.children && /* @__PURE__ */ S.createElement("div", {
    ...X(ue(e, {
      global: !0
    }), f),
    ...c,
    // aria-selected isn't needed here since this option is not selectable.
    // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
    role: "option",
    ref: n
  }, c.children));
});
const Si = /* @__PURE__ */ a.createContext(null), Di = /* @__PURE__ */ a.createContext(null), Ei = /* @__PURE__ */ a.forwardRef(function(e, n) {
  [e, n] = Ye(e, n, Si);
  let { children: l, isDisabled: o = !1, isInvalid: i = !1, isRequired: u = !1 } = e, r = a.useMemo(() => {
    var s;
    return /* @__PURE__ */ S.createElement(Ke.Provider, {
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
  return /* @__PURE__ */ S.createElement(cl, {
    content: r
  }, (s) => /* @__PURE__ */ S.createElement(Ai, {
    props: e,
    collection: s,
    comboBoxRef: n
  }));
}), Ki = [
  Ft,
  Mt,
  It,
  Lt,
  Xe
];
function Ai({ props: t, collection: e, comboBoxRef: n }) {
  let { name: l, formValue: o = "key", allowsCustomValue: i } = t;
  i && (o = "text");
  let { validationBehavior: u } = Yl(Zl) || {};
  var r, s;
  let p = (s = (r = t.validationBehavior) !== null && r !== void 0 ? r : u) !== null && s !== void 0 ? s : "native", { contains: b } = $o({
    sensitivity: "base"
  }), c = ui({
    defaultFilter: t.defaultFilter || b,
    ...t,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: t.items,
    children: void 0,
    collection: e,
    validationBehavior: p
  }), f = a.useRef(null), h = a.useRef(null), $ = a.useRef(null), m = a.useRef(null), [x, y] = kt(!t["aria-label"] && !t["aria-labelledby"]), { buttonProps: C, inputProps: P, listBoxProps: B, labelProps: E, descriptionProps: A, errorMessageProps: z, ...T } = zo({
    ...Xl(t),
    label: y,
    inputRef: h,
    buttonRef: f,
    listBoxRef: $,
    popoverRef: m,
    name: o === "text" ? l : void 0,
    validationBehavior: p
  }, c), [O, k] = a.useState(null), N = a.useCallback(() => {
    if (h.current) {
      var H;
      let v = (H = f.current) === null || H === void 0 ? void 0 : H.getBoundingClientRect(), D = h.current.getBoundingClientRect(), F = v ? Math.min(v.left, D.left) : D.left, d = v ? Math.max(v.right, D.right) : D.right;
      k(d - F + "px");
    }
  }, [
    f,
    h,
    k
  ]);
  Jl({
    ref: h,
    onResize: N
  });
  let j = a.useMemo(() => ({
    isOpen: c.isOpen,
    isDisabled: t.isDisabled || !1,
    isInvalid: T.isInvalid || !1,
    isRequired: t.isRequired || !1
  }), [
    c.isOpen,
    t.isDisabled,
    T.isInvalid,
    t.isRequired
  ]), R = de({
    ...t,
    values: j,
    defaultClassName: "react-aria-ComboBox"
  }), Y = ue(t, {
    global: !0
  });
  delete Y.id;
  var w;
  return /* @__PURE__ */ S.createElement(Ze, {
    values: [
      [
        Di,
        c
      ],
      [
        Ft,
        {
          ...E,
          ref: x
        }
      ],
      [
        Mt,
        {
          ...C,
          ref: f,
          isPressed: c.isOpen
        }
      ],
      [
        It,
        {
          ...P,
          ref: h
        }
      ],
      [
        Ql,
        c
      ],
      [
        _l,
        {
          ref: m,
          triggerRef: h,
          scrollRef: $,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": O
          },
          clearContexts: Ki
        }
      ],
      [
        Ke,
        {
          ...B,
          ref: $
        }
      ],
      [
        fe,
        c
      ],
      [
        Xe,
        {
          slots: {
            description: A,
            errorMessage: z
          }
        }
      ],
      [
        Lt,
        {
          isInvalid: T.isInvalid,
          isDisabled: t.isDisabled || !1
        }
      ],
      [
        eo,
        T
      ]
    ]
  }, /* @__PURE__ */ S.createElement("div", {
    ...Y,
    ...R,
    ref: n,
    slot: t.slot || void 0,
    "data-focused": c.isFocused || void 0,
    "data-open": c.isOpen || void 0,
    "data-disabled": t.isDisabled || void 0,
    "data-invalid": T.isInvalid || void 0,
    "data-required": t.isRequired || void 0
  }), l && o === "key" && /* @__PURE__ */ S.createElement("input", {
    type: "hidden",
    name: l,
    form: t.form,
    value: (w = c.selectedKey) !== null && w !== void 0 ? w : ""
  }));
}
const Pi = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.2449%206H10.7549C10.9449%206%2011.0599%206.16%2010.9649%206.29L8.3949%209.795C8.1949%2010.07%207.7999%2010.07%207.5999%209.795L5.0299%206.29C4.9349%206.16%205.0549%206%205.2399%206H5.2449Z'%20fill='%23A4A4A4'/%3e%3c/svg%3e", Bi = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.2449%206H10.7549C10.9449%206%2011.0599%206.16%2010.9649%206.29L8.3949%209.795C8.1949%2010.07%207.7999%2010.07%207.5999%209.795L5.0299%206.29C4.9349%206.16%205.0549%206%205.2399%206H5.2449Z'%20fill='%23535965'/%3e%3c/svg%3e";
var wi = Object.defineProperty, Ti = (t, e) => wi(t, "name", { value: e, configurable: !0 });
const ki = Ti((t) => _.jsx(to, { light: Bi, dark: Pi, ...t }), "ExpandedSplitButtonIcon");
var Fi = Object.defineProperty, xl = (t, e) => Fi(t, "name", { value: e, configurable: !0 });
function ml(t) {
  return _.jsx(Ii, { ...t });
}
xl(ml, "DropdownListBox");
function Mi(t) {
  return _.jsx(Li, { ...t });
}
xl(Mi, "DropdownListBoxItem");
const Ii = re(vi)``, Li = re(yi)`
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

    font-size: ${ce.fontSizeMd};
    line-height: ${ce.lineHeightMd};
`;
var Ri = Object.defineProperty, Oi = (t, e) => Ri(t, "name", { value: e, configurable: !0 });
function Cl({ children: t, label: e, description: n, items: l, onInputChange: o, ...i }) {
  const [u, r] = a.useState(i.inputValue ?? i.defaultInputValue ?? ""), s = a.useMemo(() => i.inputValue !== void 0 || i.selectedKey !== void 0 ? { selectedKey: i.selectedKey ?? null, inputValue: i.inputValue ?? u } : void 0, [i.inputValue, i.selectedKey, u]), { isInvalid: p, validate: b, validationError: c } = lo({ value: s, validate: i.validate }), f = a.useCallback((h) => {
    i.inputValue === void 0 && r(h), o == null || o(h);
  }, [i.inputValue, o]);
  return _.jsx(Ni, { ...i, onInputChange: f, isInvalid: p, validate: b, children: _.jsxs(oo, { label: e, description: n, realtimeValidationError: c, children: [_.jsxs(ji, { children: [_.jsx(Ui, {}), _.jsx(Hi, { "aria-hidden": "true", icon: _.jsx(ki, {}) })] }), _.jsx(io, { children: _.jsx(ml, { items: l, children: t }) })] }) });
}
Oi(Cl, "ComboBox");
const Vi = "16px", zi = `${Vi} + ${ce.spacing4} * 2`, Ni = re(Ei)``, ji = re.div`
    position: relative;
    line-height: ${ce.lineHeightMd};
    flex: 1;
`, Ui = re(uo)`
    padding-right: calc(${zi});
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &[data-expanded] {
        border-color: ${(t) => t.theme.colorsBorderActive};
    }
`, Hi = re(ro)`
    position: absolute;
    // We need to add the border width, because the button is positioned relative to the input
    inset: ${ce.borderWidthMd};
    left: unset;
    border: 0;
    padding: ${no} ${ce.spacing4};
`;
re(Cl)`
    width: 100%;
`;
export {
  pi as $,
  Ee as A,
  gl as B,
  fl as C,
  po as D,
  ho as E,
  $l as F,
  ai as G,
  ei as H,
  Mi as I,
  he as J,
  ti as K,
  ki as L,
  ml as M,
  Cl as S,
  Ni as _,
  fi as a,
  De as b,
  Wi as c,
  Fo as d,
  Mo as e,
  pt as f,
  so as g,
  fo as h,
  Je as i,
  Dn as j,
  Ao as k,
  ct as l,
  _e as m,
  Oo as n,
  Eo as o,
  hl as p,
  li as q,
  tt as r,
  ko as s,
  cl as t,
  Ke as u,
  fe as v,
  qi as w,
  sl as x,
  Jo as y,
  et as z
};
