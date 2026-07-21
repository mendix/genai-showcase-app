import { r as a, au as we, c as Wu, aN as qu, aG as Oe, e as te, bu as Zu, t as Xu, u as Ee, bv as Yu, b as Q, bw as ke, bx as Ju, by as Qu, bz as Re, aI as _u, a as ze, F as je, aL as Le, br as en, aC as un, aP as nn, aO as Ge, aH as on, bq as tn, bA as ln, o as an, l as rn, bB as Me, bC as ge, ax as Ne, aD as ye, bD as dn, i as cn, bE as sn, bF as pn, bb as $n, bG as bn, g as Ie, f as De, aY as fn, a_ as vn, aZ as hn, p as Ve, aX as xn, m as Cn, H as g, b5 as Ue, b6 as mn, G as ce, I as oe, x as Be, b0 as He, bm as gn, bH as yn, B as We, aW as Dn, bI as An, M as Te, O as Fe, K as En, bJ as Bn, bK as Tn, d as Fn, b7 as Pe, E as Pn, bp as Sn, bL as kn, bM as Ln, Q as Mn, L as qe, bN as In, z as Vn, A as Kn, D as wn, b1 as On, N as Ze, b2 as Xe, bO as Ye, b3 as Rn, b4 as zn, bP as Je, P as jn, T as le, U as de, R as q, bQ as Gn, Y as Nn, bR as Un, Z as Hn, bd as Wn, bf as qn, bi as Zn, a3 as Xn } from "./formelements-DgWWXRMR.js";
function Yn(e, u) {
  const n = a.useRef(!0), o = a.useRef(null);
  let i = we(e);
  a.useEffect(() => (n.current = !0, () => {
    n.current = !1;
  }), []), a.useEffect(() => {
    let t = o.current;
    n.current ? n.current = !1 : (!t || u.some((l, r) => !Object.is(l, t[r]))) && i(), o.current = u;
  }, u);
}
function Jn(e, u) {
  let { collection: n, onLoadMore: o, scrollOffset: i = 1 } = e, t = a.useRef(null), l = we((r) => {
    for (let d of r)
      d.isIntersecting && o && o();
  });
  Wu(() => (u.current && (t.current = new IntersectionObserver(l, {
    root: qu(u == null ? void 0 : u.current),
    rootMargin: `0px ${100 * i}% ${100 * i}% ${100 * i}%`
  }), t.current.observe(u.current)), () => {
    t.current && t.current.disconnect();
  }), [
    n,
    u,
    i
  ]);
}
function Qn(e) {
  const u = a.version.split(".");
  return parseInt(u[0], 10) >= 19 ? e : e ? "true" : void 0;
}
var Qe = {};
Qe = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} خيار`,
    other: () => `${u.number(e.optionCount)} خيارات`
  })} متاحة.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `المجموعة المدخلة ${e.groupTitle}, مع ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} خيار`,
      other: () => `${u.number(e.groupCount)} خيارات`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", محدد",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "مقترحات",
  selectedAnnouncement: (e) => `${e.optionText}، محدد`
};
var _e = {};
_e = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} опция`,
    other: () => `${u.number(e.optionCount)} опции`
  })} на разположение.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Въведена група ${e.groupTitle}, с ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} опция`,
      other: () => `${u.number(e.groupCount)} опции`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", избрани",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (e) => `${e.optionText}, избрани`
};
var eu = {};
eu = {
  buttonLabel: "Zobrazit doporučení",
  countAnnouncement: (e, u) => `K dispozici ${u.plural(e.optionCount, {
    one: () => `je ${u.number(e.optionCount)} možnost`,
    other: () => `jsou/je ${u.number(e.optionCount)} možnosti/-í`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Zadaná skupina „${e.groupTitle}“ ${u.plural(e.groupCount, {
      one: () => `s ${u.number(e.groupCount)} možností`,
      other: () => `se ${u.number(e.groupCount)} možnostmi`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: " (vybráno)",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (e) => `${e.optionText}, vybráno`
};
var uu = {};
uu = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} mulighed tilgængelig`,
    other: () => `${u.number(e.optionCount)} muligheder tilgængelige`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Angivet gruppe ${e.groupTitle}, med ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} mulighed`,
      other: () => `${u.number(e.groupCount)} muligheder`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", valgt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var nu = {};
nu = {
  buttonLabel: "Empfehlungen anzeigen",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} Option`,
    other: () => `${u.number(e.optionCount)} Optionen`
  })} verfügbar.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} Option`,
      other: () => `${u.number(e.groupCount)} Optionen`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", ausgewählt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Empfehlungen",
  selectedAnnouncement: (e) => `${e.optionText}, ausgewählt`
};
var ou = {};
ou = {
  buttonLabel: "Προβολή προτάσεων",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} επιλογή`,
    other: () => `${u.number(e.optionCount)} επιλογές `
  })} διαθέσιμες.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Εισαγμένη ομάδα ${e.groupTitle}, με ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} επιλογή`,
      other: () => `${u.number(e.groupCount)} επιλογές`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", επιλεγμένο",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Προτάσεις",
  selectedAnnouncement: (e) => `${e.optionText}, επιλέχθηκε`
};
var tu = {};
tu = {
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Entered group ${e.groupTitle}, with ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} option`,
      other: () => `${u.number(e.groupCount)} options`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", selected",
    other: ""
  }, e.isSelected)}`,
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} option`,
    other: () => `${u.number(e.optionCount)} options`
  })} available.`,
  selectedAnnouncement: (e) => `${e.optionText}, selected`,
  buttonLabel: "Show suggestions",
  listboxLabel: "Suggestions"
};
var lu = {};
lu = {
  buttonLabel: "Mostrar sugerencias",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opción`,
    other: () => `${u.number(e.optionCount)} opciones`
  })} disponible(s).`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Se ha unido al grupo ${e.groupTitle}, con ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opción`,
      other: () => `${u.number(e.groupCount)} opciones`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", seleccionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugerencias",
  selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
var iu = {};
iu = {
  buttonLabel: "Kuva soovitused",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} valik`,
    other: () => `${u.number(e.optionCount)} valikud`
  })} saadaval.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Sisestatud rühm ${e.groupTitle}, valikuga ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} valik`,
      other: () => `${u.number(e.groupCount)} valikud`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", valitud",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Soovitused",
  selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
var au = {};
au = {
  buttonLabel: "Näytä ehdotukset",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} vaihtoehto`,
    other: () => `${u.number(e.optionCount)} vaihtoehdot`
  })} saatavilla.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Mentiin ryhmään ${e.groupTitle}, ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} vaihtoehdon`,
      other: () => `${u.number(e.groupCount)} vaihtoehdon`
    })} kanssa.`,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", valittu",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Ehdotukset",
  selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
var ru = {};
ru = {
  buttonLabel: "Afficher les suggestions",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} option`,
    other: () => `${u.number(e.optionCount)} options`
  })} disponible(s).`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Groupe ${e.groupTitle} rejoint, avec ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} option`,
      other: () => `${u.number(e.groupCount)} options`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", sélectionné(s)",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggestions",
  selectedAnnouncement: (e) => `${e.optionText}, sélectionné`
};
var du = {};
du = {
  buttonLabel: "הצג הצעות",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `אפשרות ${u.number(e.optionCount)}`,
    other: () => `${u.number(e.optionCount)} אפשרויות`
  })} במצב זמין.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `נכנס לקבוצה ${e.groupTitle}, עם ${u.plural(e.groupCount, {
      one: () => `אפשרות ${u.number(e.groupCount)}`,
      other: () => `${u.number(e.groupCount)} אפשרויות`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", נבחר",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "הצעות",
  selectedAnnouncement: (e) => `${e.optionText}, נבחר`
};
var cu = {};
cu = {
  buttonLabel: "Prikaži prijedloge",
  countAnnouncement: (e, u) => `Dostupno još: ${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opcija`,
    other: () => `${u.number(e.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Unesena skupina ${e.groupTitle}, s ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opcijom`,
      other: () => `${u.number(e.groupCount)} opcije/a`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", odabranih",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Prijedlozi",
  selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
var su = {};
su = {
  buttonLabel: "Javaslatok megjelenítése",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} lehetőség`,
    other: () => `${u.number(e.optionCount)} lehetőség`
  })} áll rendelkezésre.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Belépett a(z) ${e.groupTitle} csoportba, amely ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} lehetőséget`,
      other: () => `${u.number(e.groupCount)} lehetőséget`
    })} tartalmaz. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", kijelölve",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Javaslatok",
  selectedAnnouncement: (e) => `${e.optionText}, kijelölve`
};
var pu = {};
pu = {
  buttonLabel: "Mostra suggerimenti",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opzione disponibile`,
    other: () => `${u.number(e.optionCount)} opzioni disponibili`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opzione`,
      other: () => `${u.number(e.groupCount)} opzioni`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", selezionato",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggerimenti",
  selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
var $u = {};
$u = {
  buttonLabel: "候補を表示",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} 個のオプション`,
    other: () => `${u.number(e.optionCount)} 個のオプション`
  })}を利用できます。`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `入力されたグループ ${e.groupTitle}、${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} 個のオプション`,
      other: () => `${u.number(e.groupCount)} 個のオプション`
    })}を含む。`,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: "、選択済み",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "候補",
  selectedAnnouncement: (e) => `${e.optionText}、選択済み`
};
var bu = {};
bu = {
  buttonLabel: "제안 사항 표시",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)}개 옵션`,
    other: () => `${u.number(e.optionCount)}개 옵션`
  })}을 사용할 수 있습니다.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `입력한 그룹 ${e.groupTitle}, ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)}개 옵션`,
      other: () => `${u.number(e.groupCount)}개 옵션`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", 선택됨",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "제안",
  selectedAnnouncement: (e) => `${e.optionText}, 선택됨`
};
var fu = {};
fu = {
  buttonLabel: "Rodyti pasiūlymus",
  countAnnouncement: (e, u) => `Yra ${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} parinktis`,
    other: () => `${u.number(e.optionCount)} parinktys (-ių)`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Įvesta grupė ${e.groupTitle}, su ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} parinktimi`,
      other: () => `${u.number(e.groupCount)} parinktimis (-ių)`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", pasirinkta",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Pasiūlymai",
  selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
var vu = {};
vu = {
  buttonLabel: "Rādīt ieteikumus",
  countAnnouncement: (e, u) => `Pieejamo opciju skaits: ${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opcija`,
    other: () => `${u.number(e.optionCount)} opcijas`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Ievadīta grupa ${e.groupTitle}, ar ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opciju`,
      other: () => `${u.number(e.groupCount)} opcijām`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", atlasīta",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Ieteikumi",
  selectedAnnouncement: (e) => `${e.optionText}, atlasīta`
};
var hu = {};
hu = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} alternativ`,
    other: () => `${u.number(e.optionCount)} alternativer`
  })} finnes.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Angitt gruppe ${e.groupTitle}, med ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} alternativ`,
      other: () => `${u.number(e.groupCount)} alternativer`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", valgt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var xu = {};
xu = {
  buttonLabel: "Suggesties weergeven",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} optie`,
    other: () => `${u.number(e.optionCount)} opties`
  })} beschikbaar.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Groep ${e.groupTitle} ingevoerd met ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} optie`,
      other: () => `${u.number(e.groupCount)} opties`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", geselecteerd",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggesties",
  selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
var Cu = {};
Cu = {
  buttonLabel: "Wyświetlaj sugestie",
  countAnnouncement: (e, u) => `dostępna/dostępne(-nych) ${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opcja`,
    other: () => `${u.number(e.optionCount)} opcje(-i)`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Dołączono do grupy ${e.groupTitle}, z ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opcją`,
      other: () => `${u.number(e.groupCount)} opcjami`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", wybrano",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestie",
  selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
var mu = {};
mu = {
  buttonLabel: "Mostrar sugestões",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opção`,
    other: () => `${u.number(e.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Grupo inserido ${e.groupTitle}, com ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opção`,
      other: () => `${u.number(e.groupCount)} opções`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", selecionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var gu = {};
gu = {
  buttonLabel: "Apresentar sugestões",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opção`,
    other: () => `${u.number(e.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Grupo introduzido ${e.groupTitle}, com ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opção`,
      other: () => `${u.number(e.groupCount)} opções`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", selecionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var yu = {};
yu = {
  buttonLabel: "Afișare sugestii",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opțiune`,
    other: () => `${u.number(e.optionCount)} opțiuni`
  })} disponibile.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Grup ${e.groupTitle} introdus, cu ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opțiune`,
      other: () => `${u.number(e.groupCount)} opțiuni`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", selectat",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestii",
  selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
var Du = {};
Du = {
  buttonLabel: "Показать предложения",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} параметр`,
    other: () => `${u.number(e.optionCount)} параметров`
  })} доступно.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Введенная группа ${e.groupTitle}, с ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} параметром`,
      other: () => `${u.number(e.groupCount)} параметрами`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", выбранными",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (e) => `${e.optionText}, выбрано`
};
var Au = {};
Au = {
  buttonLabel: "Zobraziť návrhy",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} možnosť`,
    other: () => `${u.number(e.optionCount)} možnosti/-í`
  })} k dispozícii.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Zadaná skupina ${e.groupTitle}, s ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} možnosťou`,
      other: () => `${u.number(e.groupCount)} možnosťami`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", vybraté",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (e) => `${e.optionText}, vybraté`
};
var Eu = {};
Eu = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (e, u) => `Na voljo je ${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opcija`,
    other: () => `${u.number(e.optionCount)} opcije`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Vnesena skupina ${e.groupTitle}, z ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opcija`,
      other: () => `${u.number(e.groupCount)} opcije`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", izbrano",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Predlogi",
  selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
var Bu = {};
Bu = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (e, u) => `Dostupno još: ${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} opcija`,
    other: () => `${u.number(e.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Unesena grupa ${e.groupTitle}, s ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} opcijom`,
      other: () => `${u.number(e.groupCount)} optione/a`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", izabranih",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Predlozi",
  selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
var Tu = {};
Tu = {
  buttonLabel: "Visa förslag",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} alternativ`,
    other: () => `${u.number(e.optionCount)} alternativ`
  })} tillgängliga.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Ingick i gruppen ${e.groupTitle} med ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} alternativ`,
      other: () => `${u.number(e.groupCount)} alternativ`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", valda",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Förslag",
  selectedAnnouncement: (e) => `${e.optionText}, valda`
};
var Fu = {};
Fu = {
  buttonLabel: "Önerileri göster",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} seçenek`,
    other: () => `${u.number(e.optionCount)} seçenekler`
  })} kullanılabilir.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Girilen grup ${e.groupTitle}, ile ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} seçenek`,
      other: () => `${u.number(e.groupCount)} seçenekler`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", seçildi",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Öneriler",
  selectedAnnouncement: (e) => `${e.optionText}, seçildi`
};
var Pu = {};
Pu = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} параметр`,
    other: () => `${u.number(e.optionCount)} параметри(-ів)`
  })} доступно.`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `Введена група ${e.groupTitle}, з ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} параметр`,
      other: () => `${u.number(e.groupCount)} параметри(-ів)`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", вибрано",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Пропозиції",
  selectedAnnouncement: (e) => `${e.optionText}, вибрано`
};
var Su = {};
Su = {
  buttonLabel: "显示建议",
  countAnnouncement: (e, u) => `有 ${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} 个选项`,
    other: () => `${u.number(e.optionCount)} 个选项`
  })}可用。`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `进入了 ${e.groupTitle} 组，其中有 ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} 个选项`,
      other: () => `${u.number(e.groupCount)} 个选项`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", 已选择",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "建议",
  selectedAnnouncement: (e) => `${e.optionText}, 已选择`
};
var ku = {};
ku = {
  buttonLabel: "顯示建議",
  countAnnouncement: (e, u) => `${u.plural(e.optionCount, {
    one: () => `${u.number(e.optionCount)} 選項`,
    other: () => `${u.number(e.optionCount)} 選項`
  })} 可用。`,
  focusAnnouncement: (e, u) => `${u.select({
    true: () => `輸入的群組 ${e.groupTitle}, 有 ${u.plural(e.groupCount, {
      one: () => `${u.number(e.groupCount)} 選項`,
      other: () => `${u.number(e.groupCount)} 選項`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${u.select({
    true: ", 已選取",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "建議",
  selectedAnnouncement: (e) => `${e.optionText}, 已選取`
};
var Lu = {};
Lu = {
  "ar-AE": Qe,
  "bg-BG": _e,
  "cs-CZ": eu,
  "da-DK": uu,
  "de-DE": nu,
  "el-GR": ou,
  "en-US": tu,
  "es-ES": lu,
  "et-EE": iu,
  "fi-FI": au,
  "fr-FR": ru,
  "he-IL": du,
  "hr-HR": cu,
  "hu-HU": su,
  "it-IT": pu,
  "ja-JP": $u,
  "ko-KR": bu,
  "lt-LT": fu,
  "lv-LV": vu,
  "nb-NO": hu,
  "nl-NL": xu,
  "pl-PL": Cu,
  "pt-BR": mu,
  "pt-PT": gu,
  "ro-RO": yu,
  "ru-RU": Du,
  "sk-SK": Au,
  "sl-SI": Eu,
  "sr-SP": Bu,
  "sv-SE": Tu,
  "tr-TR": Fu,
  "uk-UA": Pu,
  "zh-CN": Su,
  "zh-TW": ku
};
function _n(e) {
  let u = Oe({
    usage: "search",
    ...e
  }), n = a.useCallback((t, l) => l.length === 0 ? !0 : (t = t.normalize("NFC"), l = l.normalize("NFC"), u.compare(t.slice(0, l.length), l) === 0), [
    u
  ]), o = a.useCallback((t, l) => l.length === 0 ? !0 : (t = t.normalize("NFC"), l = l.normalize("NFC"), u.compare(t.slice(-l.length), l) === 0), [
    u
  ]), i = a.useCallback((t, l) => {
    if (l.length === 0) return !0;
    t = t.normalize("NFC"), l = l.normalize("NFC");
    let r = 0, d = l.length;
    for (; r + d <= t.length; r++) {
      let b = t.slice(r, r + d);
      if (u.compare(l, b) === 0) return !0;
    }
    return !1;
  }, [
    u
  ]);
  return a.useMemo(() => ({
    startsWith: n,
    endsWith: o,
    contains: i
  }), [
    n,
    o,
    i
  ]);
}
const be = /* @__PURE__ */ new WeakMap();
function eo(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function Mu(e, u) {
  let n = be.get(e);
  if (!n) throw new Error("Unknown list");
  return `${n.id}-option-${eo(u)}`;
}
function uo(e, u, n) {
  let o = te(e, {
    labelable: !0
  }), i = e.selectionBehavior || "toggle", t = e.linkBehavior || (i === "replace" ? "action" : "override");
  i === "toggle" && t === "action" && (t = "override");
  let { listProps: l } = Zu({
    ...e,
    ref: n,
    selectionManager: u.selectionManager,
    collection: u.collection,
    disabledKeys: u.disabledKeys,
    linkBehavior: t
  }), { focusWithinProps: r } = Xu({
    onFocusWithin: e.onFocus,
    onBlurWithin: e.onBlur,
    onFocusWithinChange: e.onFocusChange
  }), d = Ee(e.id);
  be.set(u, {
    id: d,
    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
    shouldFocusOnHover: e.shouldFocusOnHover,
    isVirtualized: e.isVirtualized,
    onAction: e.onAction,
    linkBehavior: t,
    // @ts-ignore
    UNSTABLE_itemBehavior: e.UNSTABLE_itemBehavior
  });
  let { labelProps: b, fieldProps: $ } = Yu({
    ...e,
    id: d,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: b,
    listBoxProps: Q(o, r, u.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...Q($, l)
    })
  };
}
function no(e, u, n) {
  var o, i;
  let { key: t } = e, l = be.get(u);
  var r;
  let d = (r = e.isDisabled) !== null && r !== void 0 ? r : u.selectionManager.isDisabled(t);
  var b;
  let $ = (b = e.isSelected) !== null && b !== void 0 ? b : u.selectionManager.isSelected(t);
  var c;
  let p = (c = e.shouldSelectOnPressUp) !== null && c !== void 0 ? c : l == null ? void 0 : l.shouldSelectOnPressUp;
  var C;
  let h = (C = e.shouldFocusOnHover) !== null && C !== void 0 ? C : l == null ? void 0 : l.shouldFocusOnHover;
  var P;
  let K = (P = e.shouldUseVirtualFocus) !== null && P !== void 0 ? P : l == null ? void 0 : l.shouldUseVirtualFocus;
  var T;
  let f = (T = e.isVirtualized) !== null && T !== void 0 ? T : l == null ? void 0 : l.isVirtualized, I = ke(), R = ke(), A = {
    role: "option",
    "aria-disabled": d || void 0,
    "aria-selected": u.selectionManager.selectionMode !== "none" ? $ : void 0
  };
  Ju() && Qu() || (A["aria-label"] = e["aria-label"], A["aria-labelledby"] = I, A["aria-describedby"] = R);
  let x = u.collection.getItem(t);
  if (f) {
    let k = Number(x == null ? void 0 : x.index);
    A["aria-posinset"] = Number.isNaN(k) ? void 0 : k + 1, A["aria-setsize"] = Re(u.collection);
  }
  let H = l != null && l.onAction ? () => {
    var k;
    return l == null || (k = l.onAction) === null || k === void 0 ? void 0 : k.call(l, t);
  } : void 0, D = Mu(u, t), { itemProps: M, isPressed: E, isFocused: w, hasAction: W, allowsSelection: Z } = _u({
    selectionManager: u.selectionManager,
    key: t,
    ref: n,
    shouldSelectOnPressUp: p,
    allowsDifferentPressOrigin: p && h,
    isVirtualized: f,
    shouldUseVirtualFocus: K,
    isDisabled: d,
    onAction: H || !(x == null || (o = x.props) === null || o === void 0) && o.onAction ? ze(x == null || (i = x.props) === null || i === void 0 ? void 0 : i.onAction, H) : void 0,
    linkBehavior: l == null ? void 0 : l.linkBehavior,
    // @ts-ignore
    UNSTABLE_itemBehavior: l == null ? void 0 : l.UNSTABLE_itemBehavior,
    id: D
  }), { hoverProps: z } = je({
    isDisabled: d || !h,
    onHoverStart() {
      Le() || (u.selectionManager.setFocused(!0), u.selectionManager.setFocusedKey(t));
    }
  }), L = te(x == null ? void 0 : x.props);
  delete L.id;
  let G = en(x == null ? void 0 : x.props);
  return {
    optionProps: {
      ...A,
      ...Q(L, M, z, G),
      id: D
    },
    labelProps: {
      id: I
    },
    descriptionProps: {
      id: R
    },
    isFocused: w,
    isFocusVisible: w && u.selectionManager.isFocused && Le(),
    isSelected: $,
    isDisabled: d,
    isPressed: E,
    allowsSelection: Z,
    hasAction: W
  };
}
function oo(e) {
  let { heading: u, "aria-label": n } = e, o = Ee();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: u ? {
      // Technically, listbox cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, using role="presentation",
      // and only use it as a visual label for the nested group.
      id: o,
      role: "presentation",
      onMouseDown: (i) => {
        i.preventDefault();
      }
    } : {},
    groupProps: {
      role: "group",
      "aria-label": n,
      "aria-labelledby": u ? o : void 0
    }
  };
}
function to(e) {
  return e && e.__esModule ? e.default : e;
}
function lo(e, u) {
  let { buttonRef: n, popoverRef: o, inputRef: i, listBoxRef: t, keyboardDelegate: l, layoutDelegate: r, shouldFocusWrap: d, isReadOnly: b, isDisabled: $ } = e, c = a.useRef(null);
  n = n ?? c;
  let p = un(to(Lu), "@react-aria/combobox"), { menuTriggerProps: C, menuProps: h } = nn({
    type: "listbox",
    isDisabled: $ || b
  }, u, n);
  be.set(u, {
    id: h.id
  });
  let { collection: P } = u, { disabledKeys: K } = u.selectionManager, T = a.useMemo(() => l || new Ge({
    collection: P,
    disabledKeys: K,
    ref: t,
    layoutDelegate: r
  }), [
    l,
    r,
    P,
    K,
    t
  ]), { collectionProps: f } = on({
    selectionManager: u.selectionManager,
    keyboardDelegate: T,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: d,
    ref: i,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), I = tn(), R = (v) => {
    if (!v.nativeEvent.isComposing)
      switch (v.key) {
        case "Enter":
        case "Tab":
          if (u.isOpen && v.key === "Enter" && v.preventDefault(), u.isOpen && t.current && u.selectionManager.focusedKey != null) {
            let m = u.collection.getItem(u.selectionManager.focusedKey);
            if (m != null && m.props.href) {
              let S = t.current.querySelector(`[data-key="${CSS.escape(u.selectionManager.focusedKey.toString())}"]`);
              v.key === "Enter" && S instanceof HTMLAnchorElement && I.open(S, v, m.props.href, m.props.routerOptions), u.close();
              break;
            } else if (m != null && m.props.onAction) {
              m.props.onAction(), u.close();
              break;
            }
          }
          u.commit();
          break;
        case "Escape":
          (!u.selectionManager.isEmpty || u.inputValue === "" || e.allowsCustomValue) && v.continuePropagation(), u.revert();
          break;
        case "ArrowDown":
          u.open("first", "manual");
          break;
        case "ArrowUp":
          u.open("last", "manual");
          break;
        case "ArrowLeft":
        case "ArrowRight":
          u.selectionManager.setFocusedKey(null);
          break;
      }
  }, A = (v) => {
    let m = (n == null ? void 0 : n.current) && n.current === v.relatedTarget, S = De(o.current, v.relatedTarget);
    m || S || (e.onBlur && e.onBlur(v), u.setFocused(!1));
  }, x = (v) => {
    u.isFocused || (e.onFocus && e.onFocus(v), u.setFocused(!0));
  }, H = io([
    u.selectedItems,
    u.selectionManager.selectionMode
  ]), { isInvalid: D, validationErrors: M, validationDetails: E } = u.displayValidation, { labelProps: w, inputProps: W, descriptionProps: Z, errorMessageProps: z } = ln({
    ...e,
    onChange: u.setInputValue,
    onKeyDown: b ? e.onKeyDown : ze(u.isOpen && f.onKeyDown, R, e.onKeyDown),
    onBlur: A,
    value: u.inputValue,
    defaultValue: u.defaultInputValue,
    onFocus: x,
    autoComplete: "off",
    validate: void 0,
    [an]: u,
    "aria-describedby": [
      H,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }, i);
  rn(i, u.defaultValue, u.setValue);
  let L = (v) => {
    if (v.pointerType === "touch") {
      var m;
      (m = i.current) === null || m === void 0 || m.focus(), u.toggle(null, "manual");
    }
  }, G = (v) => {
    if (v.pointerType !== "touch") {
      var m;
      (m = i.current) === null || m === void 0 || m.focus(), u.toggle(v.pointerType === "keyboard" || v.pointerType === "virtual" ? "first" : null, "manual");
    }
  }, k = Me({
    id: C.id,
    "aria-label": p.format("buttonLabel"),
    "aria-labelledby": e["aria-labelledby"] || w.id
  }), O = Me({
    id: h.id,
    "aria-label": p.format("listboxLabel"),
    "aria-labelledby": e["aria-labelledby"] || w.id
  }), N = a.useRef(0), F = (v) => {
    if ($ || b) return;
    if (v.timeStamp - N.current < 500) {
      var m;
      v.preventDefault(), (m = i.current) === null || m === void 0 || m.focus();
      return;
    }
    let S = Ie(v).getBoundingClientRect(), J = v.changedTouches[0], ne = Math.ceil(S.left + 0.5 * S.width), he = Math.ceil(S.top + 0.5 * S.height);
    if (J.clientX === ne && J.clientY === he) {
      var re;
      v.preventDefault(), (re = i.current) === null || re === void 0 || re.focus(), u.toggle(null, "manual"), N.current = v.timeStamp;
    }
  }, V = u.selectionManager.focusedKey != null && u.isOpen ? u.collection.getItem(u.selectionManager.focusedKey) : void 0;
  var Y;
  let X = (Y = V == null ? void 0 : V.parentKey) !== null && Y !== void 0 ? Y : null;
  var pe;
  let U = (pe = u.selectionManager.focusedKey) !== null && pe !== void 0 ? pe : null, ie = a.useRef(X), ue = a.useRef(U);
  a.useEffect(() => {
    if (ge() && V != null && U != null && U !== ue.current) {
      let m = u.selectionManager.isSelected(U), S = X != null ? u.collection.getItem(X) : null, J = (S == null ? void 0 : S["aria-label"]) || (typeof (S == null ? void 0 : S.rendered) == "string" ? S.rendered : "") || "";
      var v;
      let ne = p.format("focusAnnouncement", {
        isGroupChange: (v = S && X !== ie.current) !== null && v !== void 0 ? v : !1,
        groupTitle: J,
        groupCount: S ? [
          ...Ne(S, u.collection)
        ].length : 0,
        optionText: V["aria-label"] || V.textValue || "",
        isSelected: m
      });
      ye(ne);
    }
    ie.current = X, ue.current = U;
  });
  let _ = Re(u.collection), ee = a.useRef(_), ae = a.useRef(u.isOpen);
  a.useEffect(() => {
    let v = u.isOpen !== ae.current && (u.selectionManager.focusedKey == null || ge());
    if (u.isOpen && (v || _ !== ee.current)) {
      let m = p.format("countAnnouncement", {
        optionCount: _
      });
      ye(m);
    }
    ee.current = _, ae.current = u.isOpen;
  });
  let $e = a.useRef(u.selectedKey);
  return a.useEffect(() => {
    if (ge() && u.isFocused && u.selectedItem && u.selectedKey !== $e.current) {
      let v = u.selectedItem["aria-label"] || u.selectedItem.textValue || "", m = p.format("selectedAnnouncement", {
        optionText: v
      });
      ye(m);
    }
    $e.current = u.selectedKey;
  }), a.useEffect(() => {
    if (u.isOpen) return dn([
      i.current,
      o.current
    ].filter((v) => v != null));
  }, [
    u.isOpen,
    i,
    o
  ]), Yn(() => {
    !V && i.current && cn(sn(i.current)) === i.current && pn(i.current, null);
  }, [
    V
  ]), $n(t, "react-aria-item-action", u.isOpen ? () => {
    u.close();
  } : void 0), bn({
    ref: o,
    onInteractOutside: (v) => {
      let m = Ie(v);
      De(n == null ? void 0 : n.current, m) || De(i.current, m) || u.close();
    },
    isDisabled: !u.isOpen
  }), {
    labelProps: w,
    buttonProps: {
      ...C,
      ...k,
      excludeFromTabOrder: !0,
      preventFocusOnPress: !0,
      onPress: L,
      onPressStart: G,
      isDisabled: $ || b
    },
    inputProps: Q(W, {
      role: "combobox",
      "aria-expanded": C["aria-expanded"],
      "aria-controls": u.isOpen ? h.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": V ? Mu(u, V.key) : void 0,
      onTouchEnd: F,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: Q(h, O, {
      autoFocus: u.focusStrategy || !0,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection",
      UNSTABLE_itemBehavior: "action"
    }),
    valueProps: {
      id: H
    },
    descriptionProps: Z,
    errorMessageProps: z,
    isInvalid: D,
    validationErrors: M,
    validationDetails: E
  };
}
function io(e = []) {
  let u = Ee(), [n, o] = a.useState(!0), [i, t] = a.useState(e);
  return i.some((l, r) => !Object.is(l, e[r])) && (o(!0), t(e)), a.useEffect(() => {
    n && !document.getElementById(u) && o(!1);
  }, [
    u,
    n,
    i
  ]), n ? u : void 0;
}
class Ae {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(u) {
    let n = this.keyMap.get(u);
    var o;
    return n && (o = n.prevKey) !== null && o !== void 0 ? o : null;
  }
  getKeyAfter(u) {
    let n = this.keyMap.get(u);
    var o;
    return n && (o = n.nextKey) !== null && o !== void 0 ? o : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(u) {
    var n;
    return (n = this.keyMap.get(u)) !== null && n !== void 0 ? n : null;
  }
  at(u) {
    const n = [
      ...this.getKeys()
    ];
    return this.getItem(n[u]);
  }
  getChildren(u) {
    let n = this.keyMap.get(u);
    return (n == null ? void 0 : n.childNodes) || [];
  }
  constructor(u) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = u;
    let n = (r) => {
      if (this.keyMap.set(r.key, r), r.childNodes && r.type === "section") for (let d of r.childNodes) n(d);
    };
    for (let r of u) n(r);
    let o = null, i = 0, t = 0;
    for (let [r, d] of this.keyMap)
      o ? (o.nextKey = r, d.prevKey = o.key) : (this.firstKey = r, d.prevKey = void 0), d.type === "item" && (d.index = i++), (d.type === "section" || d.type === "item") && t++, o = d, o.nextKey = void 0;
    this._size = t;
    var l;
    this.lastKey = (l = o == null ? void 0 : o.key) !== null && l !== void 0 ? l : null;
  }
}
function Iu(e) {
  let { filter: u, layoutDelegate: n } = e, o = fn(e), i = a.useMemo(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), t = a.useCallback((b) => u ? new Ae(u(b)) : new Ae(b), [
    u
  ]), l = a.useMemo(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), r = vn(e, t, l), d = a.useMemo(() => new hn(r, o, {
    layoutDelegate: n
  }), [
    r,
    o,
    n
  ]);
  return Vu(r, d), {
    collection: r,
    disabledKeys: i,
    selectionManager: d
  };
}
function ao(e, u) {
  let n = a.useMemo(() => u ? e.collection.filter(u) : e.collection, [
    e.collection,
    u
  ]), o = e.selectionManager.withCollection(n);
  return Vu(n, o), {
    collection: n,
    selectionManager: o,
    disabledKeys: e.disabledKeys
  };
}
function Vu(e, u) {
  const n = a.useRef(null);
  a.useEffect(() => {
    if (u.focusedKey != null && !e.getItem(u.focusedKey) && n.current) {
      const $ = n.current.getItem(u.focusedKey), c = [
        ...n.current.getKeys()
      ].map((T) => {
        const f = n.current.getItem(T);
        return (f == null ? void 0 : f.type) === "item" ? f : null;
      }).filter((T) => T !== null), p = [
        ...e.getKeys()
      ].map((T) => {
        const f = e.getItem(T);
        return (f == null ? void 0 : f.type) === "item" ? f : null;
      }).filter((T) => T !== null);
      var o, i;
      const C = ((o = c == null ? void 0 : c.length) !== null && o !== void 0 ? o : 0) - ((i = p == null ? void 0 : p.length) !== null && i !== void 0 ? i : 0);
      var t, l, r;
      let h = Math.min(C > 1 ? Math.max(((t = $ == null ? void 0 : $.index) !== null && t !== void 0 ? t : 0) - C + 1, 0) : (l = $ == null ? void 0 : $.index) !== null && l !== void 0 ? l : 0, ((r = p == null ? void 0 : p.length) !== null && r !== void 0 ? r : 0) - 1), P = null, K = !1;
      for (; h >= 0; ) {
        if (!u.isDisabled(p[h].key)) {
          P = p[h];
          break;
        }
        if (h < p.length - 1 && !K) h++;
        else {
          K = !0;
          var d, b;
          h > ((d = $ == null ? void 0 : $.index) !== null && d !== void 0 ? d : 0) && (h = (b = $ == null ? void 0 : $.index) !== null && b !== void 0 ? b : 0), h--;
        }
      }
      u.setFocusedKey(P ? P.key : null);
    }
    n.current = e;
  }, [
    e,
    u
  ]);
}
const ro = [];
function co(e) {
  var u;
  let { defaultFilter: n, menuTrigger: o = "input", allowsEmptyCollection: i = !1, allowsCustomValue: t, shouldCloseOnBlur: l = !0, selectionMode: r = "single" } = e, [d, b] = a.useState(!1), [$, c] = a.useState(!1), [p, C] = a.useState(null), h = a.useMemo(() => {
    var s;
    return e.defaultValue !== void 0 ? e.defaultValue : r === "single" ? (s = e.defaultSelectedKey) !== null && s !== void 0 ? s : null : [];
  }, [
    e.defaultValue,
    e.defaultSelectedKey,
    r
  ]), P = a.useMemo(() => e.value !== void 0 ? e.value : r === "single" ? e.selectedKey : void 0, [
    e.value,
    e.selectedKey,
    r
  ]), [K, T] = Ve(P, h, e.onChange), f = r === "single" && Array.isArray(K) ? K[0] : K, I = (s) => {
    if (r === "single") {
      var y, B;
      let j = Array.isArray(s) ? (B = s[0]) !== null && B !== void 0 ? B : null : s;
      T(j), j !== f && ((y = e.onSelectionChange) === null || y === void 0 || y.call(e, j));
    } else {
      let j = [];
      Array.isArray(s) ? j = s : s != null && (j = [
        s
      ]), T(j);
    }
  };
  var R;
  let { collection: A, selectionManager: x, disabledKeys: H } = Iu({
    ...e,
    items: (R = e.items) !== null && R !== void 0 ? R : e.defaultItems,
    selectionMode: r,
    disallowEmptySelection: r === "single",
    allowDuplicateSelectionEvents: !0,
    selectedKeys: a.useMemo(() => po(f), [
      f
    ]),
    onSelectionChange: (s) => {
      if (s !== "all")
        if (r === "single") {
          var y;
          let j = (y = s.values().next().value) !== null && y !== void 0 ? y : null;
          if (j === f) {
            var B;
            (B = e.onSelectionChange) === null || B === void 0 || B.call(e, j), _(), U();
          } else I(j);
        } else I([
          ...s
        ]);
    }
  }), D = r === "single" ? x.firstSelectedKey : null, M = a.useMemo(() => [
    ...x.selectedKeys
  ].map((s) => A.getItem(s)).filter((s) => s != null), [
    x.selectedKeys,
    A
  ]), [E, w] = Ve(e.inputValue, Ke(e.defaultInputValue, D, A) || "", e.onInputChange), [W] = a.useState(f), [Z] = a.useState(E), z = A, L = a.useMemo(() => (
    // No default filter if items are controlled.
    e.items != null || !n ? A : so(A, E, n)
  ), [
    A,
    E,
    n,
    e.items
  ]), [G, k] = a.useState(L), O = a.useRef("focus"), F = xn({
    ...e,
    onOpenChange: (s) => {
      e.onOpenChange && e.onOpenChange(s, s ? O.current : void 0), x.setFocused(s), s || x.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), V = (s = null, y) => {
    let B = y === "manual" || y === "focus" && o === "focus";
    (i || L.size > 0 || B && z.size > 0 || e.items) && (B && !F.isOpen && e.items === void 0 && b(!0), O.current = y, C(s), F.open());
  }, Y = (s = null, y) => {
    let B = y === "manual" || y === "focus" && o === "focus";
    !(i || L.size > 0 || B && z.size > 0 || e.items) && !F.isOpen || (B && !F.isOpen && e.items === void 0 && b(!0), F.isOpen || (O.current = y), pe(s));
  }, X = a.useCallback(() => {
    k(d ? z : L);
  }, [
    d,
    z,
    L
  ]), pe = a.useCallback((s = null) => {
    F.isOpen && X(), C(s), F.toggle();
  }, [
    F,
    X
  ]), U = a.useCallback(() => {
    F.isOpen && (X(), F.close());
  }, [
    F,
    X
  ]), [ie, ue] = a.useState(E), _ = () => {
    var s, y;
    let B = D != null && (y = (s = A.getItem(D)) === null || s === void 0 ? void 0 : s.textValue) !== null && y !== void 0 ? y : "";
    ue(B), w(B);
  }, ee = a.useRef(f);
  var ae;
  let $e = a.useRef(D != null && (ae = (u = A.getItem(D)) === null || u === void 0 ? void 0 : u.textValue) !== null && ae !== void 0 ? ae : "");
  a.useEffect(() => {
    var s;
    $ && (L.size > 0 || i) && !F.isOpen && E !== ie && o !== "manual" && V(null, "input"), !d && !i && F.isOpen && L.size === 0 && U(), f != null && f !== ee.current && r === "single" && U(), E !== ie && (x.setFocusedKey(null), b(!1), r === "single" && E === "" && (e.inputValue === void 0 || P === void 0) && I(null)), f !== ee.current && (e.inputValue === void 0 || P === void 0) ? _() : ie !== E && ue(E);
    var y;
    let B = D != null && (y = (s = A.getItem(D)) === null || s === void 0 ? void 0 : s.textValue) !== null && y !== void 0 ? y : "";
    !$ && D != null && e.inputValue === void 0 && D === ee.current && $e.current !== B && (ue(B), w(B)), ee.current = f, $e.current = B;
  });
  let v = Cn({
    ...e,
    value: a.useMemo(() => Array.isArray(f) && f.length === 0 ? null : {
      inputValue: E,
      value: f,
      selectedKey: D
    }, [
      E,
      D,
      f
    ])
  }), m = () => {
    t && D == null ? S() : J();
  }, S = () => {
    let s = r === "multiple" ? ro : null;
    ee.current = s, I(s), U();
  }, J = () => {
    if (P !== void 0 && e.inputValue !== void 0) {
      var s, y, B;
      (s = e.onSelectionChange) === null || s === void 0 || s.call(e, D), (y = e.onChange) === null || y === void 0 || y.call(e, f);
      var j;
      let Hu = D != null && (j = (B = A.getItem(D)) === null || B === void 0 ? void 0 : B.textValue) !== null && j !== void 0 ? j : "";
      ue(Hu), U();
    } else
      _(), U();
  };
  const ne = () => {
    if (t) {
      var s, y;
      const B = D != null && (y = (s = A.getItem(D)) === null || s === void 0 ? void 0 : s.textValue) !== null && y !== void 0 ? y : "";
      E === B ? J() : S();
    } else
      J();
  };
  let he = () => {
    F.isOpen && x.focusedKey != null ? x.isSelected(x.focusedKey) && r === "single" ? J() : x.select(x.focusedKey) : ne();
  }, re = a.useRef(E), Nu = (s) => {
    s ? (re.current = E, o === "focus" && !e.isReadOnly && V(null, "focus")) : (l && ne(), E !== re.current && v.commitValidation()), c(s);
  }, Uu = a.useMemo(() => F.isOpen ? d ? z : L : G, [
    F.isOpen,
    z,
    L,
    d,
    G
  ]);
  var xe;
  let Se = (xe = e.defaultSelectedKey) !== null && xe !== void 0 ? xe : r === "single" ? W : null;
  var Ce, me;
  return {
    ...v,
    ...F,
    focusStrategy: p,
    toggle: Y,
    open: V,
    close: ne,
    selectionManager: x,
    value: f,
    defaultValue: h ?? W,
    setValue: I,
    selectedKey: D,
    selectedItems: M,
    defaultSelectedKey: Se,
    setSelectedKey: I,
    disabledKeys: H,
    isFocused: $,
    setFocused: Nu,
    selectedItem: (Ce = M[0]) !== null && Ce !== void 0 ? Ce : null,
    collection: Uu,
    inputValue: E,
    defaultInputValue: (me = Ke(e.defaultInputValue, Se, A)) !== null && me !== void 0 ? me : Z,
    setInputValue: w,
    commit: he,
    revert: m
  };
}
function so(e, u, n) {
  return new Ae(Ku(e, e, u, n));
}
function Ku(e, u, n, o) {
  let i = [];
  for (let t of u)
    if (t.type === "section" && t.hasChildNodes) {
      let l = Ku(e, Ne(t, e), n, o);
      [
        ...l
      ].some((r) => r.type === "item") && i.push({
        ...t,
        childNodes: l
      });
    } else t.type === "item" && o(t.textValue, n) ? i.push({
      ...t
    }) : t.type !== "item" && i.push({
      ...t
    });
  return i;
}
function Ke(e, u, n) {
  if (e == null) {
    var o, i;
    if (u != null) return (i = (o = n.getItem(u)) === null || o === void 0 ? void 0 : o.textValue) !== null && i !== void 0 ? i : "";
  }
  return e;
}
function po(e) {
  if (e !== void 0)
    return e === null ? [] : Array.isArray(e) ? e : [
      e
    ];
}
const fe = /* @__PURE__ */ a.createContext({}), wu = /* @__PURE__ */ a.createContext(null), $o = /* @__PURE__ */ a.forwardRef(function(u, n) {
  let { render: o } = a.useContext(wu);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, o(u, n));
});
function Ou(e, u) {
  var n;
  let o = e == null ? void 0 : e.renderDropIndicator, i = e == null || (n = e.isVirtualDragging) === null || n === void 0 ? void 0 : n.call(e), t = a.useCallback((l) => {
    if (i || u != null && u.isDropTarget(l)) return o ? o(l) : /* @__PURE__ */ g.createElement($o, {
      target: l
    });
  }, [
    u == null ? void 0 : u.target,
    i,
    o
  ]);
  return e != null && e.useDropIndicator ? t : void 0;
}
function bo(e, u, n) {
  var o, i;
  let t = e.focusedKey, l = null;
  if (!(u == null || (o = u.isVirtualDragging) === null || o === void 0) && o.call(u) && (n == null || (i = n.target) === null || i === void 0 ? void 0 : i.type) === "item" && (l = n.target.key, n.target.dropPosition === "after")) {
    let c = n.collection.getKeyAfter(l), p = null;
    if (c != null) {
      var r, d;
      let C = (d = (r = n.collection.getItem(l)) === null || r === void 0 ? void 0 : r.level) !== null && d !== void 0 ? d : 0;
      for (; c; ) {
        let h = n.collection.getItem(c);
        if (!h) break;
        if (h.type !== "item") {
          c = n.collection.getKeyAfter(c);
          continue;
        }
        var b;
        if (((b = h.level) !== null && b !== void 0 ? b : 0) <= C) break;
        p = c, c = n.collection.getKeyAfter(c);
      }
    }
    var $;
    l = ($ = c ?? p) !== null && $ !== void 0 ? $ : l;
  }
  return a.useMemo(() => new Set([
    t,
    l
  ].filter((c) => c != null)), [
    t,
    l
  ]);
}
const ve = /* @__PURE__ */ a.createContext(null), se = /* @__PURE__ */ a.createContext(null), fo = /* @__PURE__ */ a.forwardRef(function(u, n) {
  [u, n] = Be(u, n, ve);
  let o = a.useContext(se);
  return o ? /* @__PURE__ */ g.createElement(Ru, {
    state: o,
    props: u,
    listBoxRef: n
  }) : /* @__PURE__ */ g.createElement(He, {
    content: /* @__PURE__ */ g.createElement(gn, u)
  }, (i) => /* @__PURE__ */ g.createElement(vo, {
    props: u,
    listBoxRef: n,
    collection: i
  }));
});
function vo({ props: e, listBoxRef: u, collection: n }) {
  e = {
    ...e,
    collection: n,
    children: null,
    items: null
  };
  let { layoutDelegate: o } = a.useContext(Pe), i = Iu({
    ...e,
    layoutDelegate: o
  });
  return /* @__PURE__ */ g.createElement(Ru, {
    state: i,
    props: e,
    listBoxRef: u
  });
}
function Ru({ state: e, props: u, listBoxRef: n }) {
  [u, n] = Be(u, n, Tn);
  let { dragAndDropHooks: o, layout: i = "stack", orientation: t = "vertical", filter: l } = u, r = ao(e, l), { collection: d, selectionManager: b } = r, $ = !!(o != null && o.useDraggableCollectionState), c = !!(o != null && o.useDroppableCollectionState), { direction: p } = Fn(), { disabledBehavior: C, disabledKeys: h } = b, P = Oe({
    usage: "search",
    sensitivity: "base"
  }), { isVirtualized: K, layoutDelegate: T, dropTargetDelegate: f, CollectionRoot: I } = a.useContext(Pe), R = a.useMemo(() => u.keyboardDelegate || new Ge({
    collection: d,
    collator: P,
    ref: n,
    disabledKeys: h,
    disabledBehavior: C,
    layout: i,
    orientation: t,
    direction: p,
    layoutDelegate: T
  }), [
    d,
    P,
    n,
    C,
    h,
    t,
    p,
    u.keyboardDelegate,
    i,
    T
  ]), { listBoxProps: A } = uo({
    ...u,
    shouldSelectOnPressUp: $ || u.shouldSelectOnPressUp,
    keyboardDelegate: R,
    isVirtualized: K
  }, r, n), x = a.useRef($), H = a.useRef(c);
  a.useEffect(() => {
    process.env.NODE_ENV !== "production" && (x.current !== $ && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), H.current !== c && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    $,
    c
  ]);
  let D, M, E, w = !1, W = null, Z = a.useRef(null);
  if ($ && o) {
    D = o.useDraggableCollectionState({
      collection: d,
      selectionManager: b,
      preview: o.renderDragPreview ? Z : void 0
    }), o.useDraggableCollection({}, D, n);
    let Y = o.DragPreview;
    W = o.renderDragPreview ? /* @__PURE__ */ g.createElement(Y, {
      ref: Z
    }, o.renderDragPreview) : null;
  }
  if (c && o) {
    M = o.useDroppableCollectionState({
      collection: d,
      selectionManager: b
    });
    let Y = o.dropTargetDelegate || f || new o.ListDropTargetDelegate(d, n, {
      orientation: t,
      layout: i,
      direction: p
    });
    E = o.useDroppableCollection({
      keyboardDelegate: R,
      dropTargetDelegate: Y
    }, M, n), w = M.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: z, isFocused: L, isFocusVisible: G } = Pn(), k = r.collection.size === 0, O = {
    isDropTarget: w,
    isEmpty: k,
    isFocused: L,
    isFocusVisible: G,
    layout: u.layout || "stack",
    state: r
  }, N = ce({
    ...u,
    children: void 0,
    defaultClassName: "react-aria-ListBox",
    values: O
  }), F = null;
  k && u.renderEmptyState && (F = /* @__PURE__ */ g.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, u.renderEmptyState(O)));
  let V = te(u, {
    global: !0
  });
  return /* @__PURE__ */ g.createElement(Sn, null, /* @__PURE__ */ g.createElement(oe.div, {
    ...Q(V, N, A, z, E == null ? void 0 : E.collectionProps),
    ref: n,
    slot: u.slot || void 0,
    onScroll: u.onScroll,
    "data-drop-target": w || void 0,
    "data-empty": k || void 0,
    "data-focused": L || void 0,
    "data-focus-visible": G || void 0,
    "data-layout": u.layout || "stack",
    "data-orientation": u.orientation || "vertical"
  }, /* @__PURE__ */ g.createElement(Te, {
    values: [
      [
        ve,
        u
      ],
      [
        se,
        r
      ],
      [
        fe,
        {
          dragAndDropHooks: o,
          dragState: D,
          dropState: M
        }
      ],
      [
        kn,
        {
          elementType: "div"
        }
      ],
      [
        wu,
        {
          render: Co
        }
      ],
      [
        Ln,
        {
          name: "ListBoxSection",
          render: ho
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(Mn, null, /* @__PURE__ */ g.createElement(I, {
    collection: d,
    scrollRef: n,
    persistedKeys: bo(b, o, M),
    renderDropIndicator: Ou(o, M)
  }))), F, W));
}
function ho(e, u, n, o = "react-aria-ListBoxSection") {
  let i = a.useContext(se), { dragAndDropHooks: t, dropState: l } = a.useContext(fe), { CollectionBranch: r } = a.useContext(Pe), [d, b] = qe();
  var $;
  let { headingProps: c, groupProps: p } = oo({
    heading: b,
    "aria-label": ($ = e["aria-label"]) !== null && $ !== void 0 ? $ : void 0
  }), C = ce({
    ...e,
    id: void 0,
    children: void 0,
    defaultClassName: o,
    values: void 0
  }), h = te(e, {
    global: !0
  });
  return delete h.id, /* @__PURE__ */ g.createElement(oe.section, {
    ...Q(h, C, p),
    ref: u
  }, /* @__PURE__ */ g.createElement(In.Provider, {
    value: {
      ...c,
      ref: d
    }
  }, /* @__PURE__ */ g.createElement(r, {
    collection: i.collection,
    parent: n,
    renderDropIndicator: Ou(t, l)
  })));
}
const xo = /* @__PURE__ */ Ue(yn, function(u, n, o) {
  let i = We(n), t = a.useContext(se), { dragAndDropHooks: l, dragState: r, dropState: d } = a.useContext(fe), { optionProps: b, labelProps: $, descriptionProps: c, ...p } = no({
    key: o.key,
    "aria-label": u == null ? void 0 : u["aria-label"]
  }, t, i), { hoverProps: C, isHovered: h } = je({
    isDisabled: !p.allowsSelection && !p.hasAction,
    onHoverStart: o.props.onHoverStart,
    onHoverChange: o.props.onHoverChange,
    onHoverEnd: o.props.onHoverEnd
  }), { keyboardProps: P } = Dn(u), { focusProps: K } = An(u), T = null;
  r && l && (T = l.useDraggableItem({
    key: o.key,
    hasAction: p.hasAction
  }, r));
  let f = null;
  d && l && (f = l.useDroppableItem({
    target: {
      type: "item",
      key: o.key,
      dropPosition: "on"
    }
  }, d, i));
  let I = r && r.isDragging(o.key), R = ce({
    ...u,
    id: void 0,
    children: u.children,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...p,
      isHovered: h,
      selectionMode: t.selectionManager.selectionMode,
      selectionBehavior: t.selectionManager.selectionBehavior,
      allowsDragging: !!r,
      isDragging: I,
      isDropTarget: f == null ? void 0 : f.isDropTarget
    }
  });
  a.useEffect(() => {
    !o.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    o.textValue
  ]);
  let A = u.href ? oe.a : oe.div, x = te(u, {
    global: !0
  });
  return delete x.id, delete x.onClick, u.href && b.tabIndex == null && (b.tabIndex = -1), /* @__PURE__ */ g.createElement(A, {
    ...Q(x, R, b, C, P, K, T == null ? void 0 : T.dragProps, f == null ? void 0 : f.dropProps),
    ref: i,
    "data-allows-dragging": !!r || void 0,
    "data-selected": p.isSelected || void 0,
    "data-disabled": p.isDisabled || void 0,
    "data-hovered": h || void 0,
    "data-focused": p.isFocused || void 0,
    "data-focus-visible": p.isFocusVisible || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-dragging": I || void 0,
    "data-drop-target": (f == null ? void 0 : f.isDropTarget) || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(Te, {
    values: [
      [
        Fe,
        {
          slots: {
            [Bn]: $,
            label: $,
            description: c
          }
        }
      ],
      [
        En,
        {
          isSelected: p.isSelected
        }
      ]
    ]
  }, R.children));
});
function Co(e, u) {
  u = We(u);
  let { dragAndDropHooks: n, dropState: o } = a.useContext(fe), { dropIndicatorProps: i, isHidden: t, isDropTarget: l } = n.useDropIndicator(e, o, u);
  return t ? null : /* @__PURE__ */ g.createElement(go, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: l,
    ref: u
  });
}
function mo(e, u) {
  let { dropIndicatorProps: n, isDropTarget: o, ...i } = e, t = ce({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: o
    }
  });
  return /* @__PURE__ */ g.createElement(oe.div, {
    ...n,
    ...t,
    role: "option",
    ref: u,
    "data-drop-target": o || void 0
  });
}
const go = /* @__PURE__ */ a.forwardRef(mo);
Ue(mn, function(u, n, o) {
  let i = a.useContext(se), { isLoading: t, onLoadMore: l, scrollOffset: r, ...d } = u, b = a.useRef(null), $ = a.useMemo(() => ({
    onLoadMore: l,
    collection: i == null ? void 0 : i.collection,
    sentinelRef: b,
    scrollOffset: r
  }), [
    l,
    r,
    i == null ? void 0 : i.collection
  ]);
  Jn($, b);
  let c = ce({
    ...d,
    id: void 0,
    children: o.rendered,
    defaultClassName: "react-aria-ListBoxLoadingIndicator",
    values: void 0
  }), p = {
    // For Android talkback
    tabIndex: -1
  };
  return /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: Qn(!0)
  }, /* @__PURE__ */ g.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: b,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), t && c.children && /* @__PURE__ */ g.createElement(oe.div, {
    ...Q(te(u, {
      global: !0
    }), p),
    ...c,
    // aria-selected isn't needed here since this option is not selectable.
    role: "option",
    ref: n
  }, c.children));
});
const yo = /* @__PURE__ */ a.createContext(null), Do = /* @__PURE__ */ a.createContext(null), Ao = /* @__PURE__ */ a.forwardRef(function(u, n) {
  [u, n] = Be(u, n, yo);
  let { children: o, isDisabled: i = !1, isInvalid: t = !1, isRequired: l = !1 } = u, r = a.useMemo(() => {
    var d;
    return /* @__PURE__ */ g.createElement(ve.Provider, {
      value: {
        items: (d = u.items) !== null && d !== void 0 ? d : u.defaultItems
      }
    }, typeof o == "function" ? o({
      isOpen: !1,
      isDisabled: i,
      isInvalid: t,
      isRequired: l,
      defaultChildren: null
    }) : o);
  }, [
    o,
    i,
    t,
    l,
    u.items,
    u.defaultItems
  ]);
  return /* @__PURE__ */ g.createElement(He, {
    content: r
  }, (d) => /* @__PURE__ */ g.createElement(Bo, {
    props: u,
    collection: d,
    comboBoxRef: n
  }));
}), Eo = [
  Ze,
  Xe,
  Ye,
  Je,
  Fe
];
function Bo({ props: e, collection: u, comboBoxRef: n }) {
  let { name: o, formValue: i = "key", allowsCustomValue: t } = e;
  t && (i = "text");
  let { validationBehavior: l } = Vn(Kn) || {};
  var r, d;
  let b = (d = (r = e.validationBehavior) !== null && r !== void 0 ? r : l) !== null && d !== void 0 ? d : "native", { contains: $ } = _n({
    sensitivity: "base"
  }), c = co({
    ...e,
    defaultFilter: e.defaultFilter || $,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: e.items,
    children: void 0,
    collection: u,
    validationBehavior: b
  }), p = a.useRef(null), C = a.useRef(null), h = a.useRef(null), P = a.useRef(null), [K, T] = qe(!e["aria-label"] && !e["aria-labelledby"]), { buttonProps: f, inputProps: I, listBoxProps: R, labelProps: A, descriptionProps: x, errorMessageProps: H, valueProps: D, ...M } = lo({
    ...wn(e),
    label: T,
    inputRef: C,
    buttonRef: p,
    listBoxRef: h,
    popoverRef: P,
    name: i === "text" ? o : void 0,
    validationBehavior: b
  }, c), [E, w] = a.useState(null), W = a.useCallback(() => {
    if (C.current) {
      var k;
      let O = (k = p.current) === null || k === void 0 ? void 0 : k.getBoundingClientRect(), N = C.current.getBoundingClientRect(), F = O ? Math.min(O.left, N.left) : N.left, V = O ? Math.max(O.right, N.right) : N.right;
      w(V - F + "px");
    }
  }, [
    p,
    C,
    w
  ]);
  On({
    ref: C,
    onResize: W
  });
  let Z = a.useMemo(() => ({
    isOpen: c.isOpen,
    isDisabled: e.isDisabled || !1,
    isInvalid: M.isInvalid || !1,
    isRequired: e.isRequired || !1
  }), [
    c.isOpen,
    e.isDisabled,
    M.isInvalid,
    e.isRequired
  ]), z = ce({
    ...e,
    values: Z,
    defaultClassName: "react-aria-ComboBox"
  }), L = te(e, {
    global: !0
  });
  delete L.id;
  let G = [];
  if (o && i === "key") {
    let k = Array.isArray(c.value) ? c.value : [
      c.value
    ];
    k.length === 0 && (k = [
      null
    ]), G = k.map((O, N) => /* @__PURE__ */ g.createElement("input", {
      key: N,
      type: "hidden",
      name: o,
      form: e.form,
      value: O ?? ""
    }));
  }
  return /* @__PURE__ */ g.createElement(Te, {
    values: [
      [
        Do,
        c
      ],
      [
        Ze,
        {
          ...A,
          ref: K
        }
      ],
      [
        Xe,
        {
          ...f,
          ref: p,
          isPressed: c.isOpen
        }
      ],
      [
        Ye,
        {
          ...I,
          ref: C
        }
      ],
      [
        Rn,
        c
      ],
      [
        zn,
        {
          ref: P,
          triggerRef: C,
          scrollRef: h,
          placement: "bottom start",
          isNonModal: !0,
          trigger: "ComboBox",
          style: {
            "--trigger-width": E
          },
          clearContexts: Eo
        }
      ],
      [
        ve,
        {
          ...R,
          ref: h
        }
      ],
      [
        se,
        c
      ],
      [
        Fe,
        {
          slots: {
            description: x,
            errorMessage: H
          }
        }
      ],
      [
        Je,
        {
          isInvalid: M.isInvalid,
          isDisabled: e.isDisabled || !1
        }
      ],
      [
        jn,
        M
      ],
      [
        To,
        D
      ]
    ]
  }, /* @__PURE__ */ g.createElement(oe.div, {
    ...L,
    ...z,
    ref: n,
    slot: e.slot || void 0,
    "data-focused": c.isFocused || void 0,
    "data-open": c.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": M.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }, z.children, G));
}
const To = /* @__PURE__ */ a.createContext(null);
var Fo = Object.defineProperty, zu = (e, u) => Fo(e, "name", { value: u, configurable: !0 });
function ju(e) {
  return q.jsx(So, { ...e });
}
zu(ju, "DropdownListBox");
function Po(e) {
  return q.jsx(ko, { ...e });
}
zu(Po, "DropdownListBoxItem");
const So = le(fo)``, ko = le(xo)`
    background-color: ${(e) => e.theme.colorsBackgroundMenuItemDefault};
    &[data-selected] {
        background-color: ${(e) => e.theme.colorsBackgroundMenuItemPressed};
    }
    &[data-hovered],
    &[data-focused],
    &[data-focus-visible] {
        background-color: ${(e) => e.theme.colorsBackgroundMenuItemHover};
    }
    &[data-disabled] {
        opacity: 0.5;
    }

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    padding: 3px 4px;

    font-size: ${de.fontSizeMd};
    line-height: ${de.lineHeightMd};
`;
var Lo = Object.defineProperty, Mo = (e, u) => Lo(e, "name", { value: u, configurable: !0 });
function Gu({ children: e, label: u, description: n, items: o, onInputChange: i, ...t }) {
  const [l, r] = a.useState(t.inputValue ?? t.defaultInputValue ?? ""), d = a.useMemo(() => {
    if (!(t.inputValue === void 0 && t.value === void 0)) return { selectedKey: t.value ?? null, value: t.value ?? null, inputValue: t.inputValue ?? l };
  }, [t.inputValue, t.value, l]), { isInvalid: b, validate: $, validationError: c } = Nn({ value: d, validate: t.validate }), p = a.useCallback((C) => {
    t.inputValue === void 0 && r(C), i == null || i(C);
  }, [t.inputValue, i]);
  return q.jsx(Un, { children: ({ inputRef: C }) => q.jsx(wo, { ...t, onInputChange: p, isInvalid: b, validate: $, children: q.jsxs(Hn, { label: u, description: n, realtimeValidationError: c, children: [q.jsxs(Oo, { children: [q.jsx(Ro, { ref: C }), q.jsx(zo, { "aria-hidden": "true", icon: q.jsx(Wn, {}) })] }), q.jsx(qn, { children: q.jsx(ju, { items: o, children: e }) })] }) }) });
}
Mo(Gu, "ComboBox");
const Io = "16px", Vo = `${Io} + ${de.spacing4} * 2`, Ko = le(Ao)``, wo = Ko, Oo = le.div`
    position: relative;
    line-height: ${de.lineHeightMd};
    flex: 1;
`, Ro = le(Zn)`
    padding-right: calc(${Vo});
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &[data-expanded] {
        border-color: ${(e) => e.theme.colorsBorderActive};
    }
`, zo = le(Xn)`
    position: absolute;
    // We need to add the border width, because the button is positioned relative to the input
    inset: ${de.borderWidthMd};
    left: unset;
    border: 0;
    padding: ${Gn} ${de.spacing4};
`;
le(Gu)`
    width: 100%;
`;
export {
  Yn as $,
  Po as I,
  Ko as S,
  Gu as _,
  Iu as a,
  ve as b,
  se as c,
  Jn as d,
  Qn as e,
  ju as f
};
