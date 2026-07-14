import { j as q } from "./jsx-runtime-CWOFuNcx.js";
import { r as a, ap as we, c as qn, aI as Xn, aB as Oe, e as te, bk as Yn, t as Zn, u as Ee, bl as Jn, b as Q, bm as ke, bn as Qn, bo as _n, bp as Re, aD as eu, a as ze, F as je, aG as Le, bq as nu, ax as uu, aK as ou, aJ as Ge, aC as tu, br as lu, bs as iu, o as au, l as ru, bt as Me, bu as ge, as as Ne, ay as ye, bv as du, i as cu, bw as su, bx as pu, b6 as $u, by as bu, g as Ie, f as De, aT as fu, aV as vu, aU as hu, p as Ve, aS as xu, m as Cu, H as g, b0 as Ue, b1 as mu, G as ce, I as oe, x as Be, aX as He, bg as gu, bz as yu, B as We, aR as Du, bA as Au, M as Te, O as Fe, K as Eu, bB as Bu, bC as Tu, d as Fu, b2 as Pe, E as Pu, af as Su, bD as ku, bE as Lu, Q as Mu, L as qe, bF as Iu, z as Vu, A as Ku, D as wu, aY as Ou, N as Xe, aZ as Ye, bG as Ze, a_ as Ru, a$ as zu, bH as Je, P as ju, S as le, T as de, bI as Gu, X as Nu, al as Uu, Y as Hu, b8 as Wu, ba as qu, bc as Xu, a0 as Yu } from "./PageContainers-BvK5usmz.js";
function Zu(e, n) {
  const u = a.useRef(!0), o = a.useRef(null);
  let i = we(e);
  a.useEffect(() => (u.current = !0, () => {
    u.current = !1;
  }), []), a.useEffect(() => {
    let t = o.current;
    u.current ? u.current = !1 : (!t || n.some((l, r) => !Object.is(l, t[r]))) && i(), o.current = n;
  }, n);
}
function Ju(e, n) {
  let { collection: u, onLoadMore: o, scrollOffset: i = 1 } = e, t = a.useRef(null), l = we((r) => {
    for (let d of r)
      d.isIntersecting && o && o();
  });
  qn(() => (n.current && (t.current = new IntersectionObserver(l, {
    root: Xn(n?.current),
    rootMargin: `0px ${100 * i}% ${100 * i}% ${100 * i}%`
  }), t.current.observe(n.current)), () => {
    t.current && t.current.disconnect();
  }), [
    u,
    n,
    i
  ]);
}
function Qu(e) {
  const n = a.version.split(".");
  return parseInt(n[0], 10) >= 19 ? e : e ? "true" : void 0;
}
var Qe = {};
Qe = {
  buttonLabel: "عرض المقترحات",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} خيار`,
    other: () => `${n.number(e.optionCount)} خيارات`
  })} متاحة.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `المجموعة المدخلة ${e.groupTitle}, مع ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} خيار`,
      other: () => `${n.number(e.groupCount)} خيارات`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", محدد",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "مقترحات",
  selectedAnnouncement: (e) => `${e.optionText}، محدد`
};
var _e = {};
_e = {
  buttonLabel: "Покажи предложения",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} опция`,
    other: () => `${n.number(e.optionCount)} опции`
  })} на разположение.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Въведена група ${e.groupTitle}, с ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} опция`,
      other: () => `${n.number(e.groupCount)} опции`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", избрани",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (e) => `${e.optionText}, избрани`
};
var en = {};
en = {
  buttonLabel: "Zobrazit doporučení",
  countAnnouncement: (e, n) => `K dispozici ${n.plural(e.optionCount, {
    one: () => `je ${n.number(e.optionCount)} možnost`,
    other: () => `jsou/je ${n.number(e.optionCount)} možnosti/-í`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Zadaná skupina „${e.groupTitle}“ ${n.plural(e.groupCount, {
      one: () => `s ${n.number(e.groupCount)} možností`,
      other: () => `se ${n.number(e.groupCount)} možnostmi`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: " (vybráno)",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (e) => `${e.optionText}, vybráno`
};
var nn = {};
nn = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} mulighed tilgængelig`,
    other: () => `${n.number(e.optionCount)} muligheder tilgængelige`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Angivet gruppe ${e.groupTitle}, med ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} mulighed`,
      other: () => `${n.number(e.groupCount)} muligheder`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", valgt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var un = {};
un = {
  buttonLabel: "Empfehlungen anzeigen",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} Option`,
    other: () => `${n.number(e.optionCount)} Optionen`
  })} verfügbar.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} Option`,
      other: () => `${n.number(e.groupCount)} Optionen`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", ausgewählt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Empfehlungen",
  selectedAnnouncement: (e) => `${e.optionText}, ausgewählt`
};
var on = {};
on = {
  buttonLabel: "Προβολή προτάσεων",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} επιλογή`,
    other: () => `${n.number(e.optionCount)} επιλογές `
  })} διαθέσιμες.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Εισαγμένη ομάδα ${e.groupTitle}, με ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} επιλογή`,
      other: () => `${n.number(e.groupCount)} επιλογές`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", επιλεγμένο",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Προτάσεις",
  selectedAnnouncement: (e) => `${e.optionText}, επιλέχθηκε`
};
var tn = {};
tn = {
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Entered group ${e.groupTitle}, with ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} option`,
      other: () => `${n.number(e.groupCount)} options`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", selected",
    other: ""
  }, e.isSelected)}`,
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} option`,
    other: () => `${n.number(e.optionCount)} options`
  })} available.`,
  selectedAnnouncement: (e) => `${e.optionText}, selected`,
  buttonLabel: "Show suggestions",
  listboxLabel: "Suggestions"
};
var ln = {};
ln = {
  buttonLabel: "Mostrar sugerencias",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opción`,
    other: () => `${n.number(e.optionCount)} opciones`
  })} disponible(s).`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Se ha unido al grupo ${e.groupTitle}, con ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opción`,
      other: () => `${n.number(e.groupCount)} opciones`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", seleccionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugerencias",
  selectedAnnouncement: (e) => `${e.optionText}, seleccionado`
};
var an = {};
an = {
  buttonLabel: "Kuva soovitused",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} valik`,
    other: () => `${n.number(e.optionCount)} valikud`
  })} saadaval.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Sisestatud rühm ${e.groupTitle}, valikuga ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} valik`,
      other: () => `${n.number(e.groupCount)} valikud`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", valitud",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Soovitused",
  selectedAnnouncement: (e) => `${e.optionText}, valitud`
};
var rn = {};
rn = {
  buttonLabel: "Näytä ehdotukset",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} vaihtoehto`,
    other: () => `${n.number(e.optionCount)} vaihtoehdot`
  })} saatavilla.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Mentiin ryhmään ${e.groupTitle}, ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} vaihtoehdon`,
      other: () => `${n.number(e.groupCount)} vaihtoehdon`
    })} kanssa.`,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", valittu",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Ehdotukset",
  selectedAnnouncement: (e) => `${e.optionText}, valittu`
};
var dn = {};
dn = {
  buttonLabel: "Afficher les suggestions",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} option`,
    other: () => `${n.number(e.optionCount)} options`
  })} disponible(s).`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Groupe ${e.groupTitle} rejoint, avec ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} option`,
      other: () => `${n.number(e.groupCount)} options`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", sélectionné(s)",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggestions",
  selectedAnnouncement: (e) => `${e.optionText}, sélectionné`
};
var cn = {};
cn = {
  buttonLabel: "הצג הצעות",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `אפשרות ${n.number(e.optionCount)}`,
    other: () => `${n.number(e.optionCount)} אפשרויות`
  })} במצב זמין.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `נכנס לקבוצה ${e.groupTitle}, עם ${n.plural(e.groupCount, {
      one: () => `אפשרות ${n.number(e.groupCount)}`,
      other: () => `${n.number(e.groupCount)} אפשרויות`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", נבחר",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "הצעות",
  selectedAnnouncement: (e) => `${e.optionText}, נבחר`
};
var sn = {};
sn = {
  buttonLabel: "Prikaži prijedloge",
  countAnnouncement: (e, n) => `Dostupno još: ${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opcija`,
    other: () => `${n.number(e.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Unesena skupina ${e.groupTitle}, s ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opcijom`,
      other: () => `${n.number(e.groupCount)} opcije/a`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", odabranih",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Prijedlozi",
  selectedAnnouncement: (e) => `${e.optionText}, odabrano`
};
var pn = {};
pn = {
  buttonLabel: "Javaslatok megjelenítése",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} lehetőség`,
    other: () => `${n.number(e.optionCount)} lehetőség`
  })} áll rendelkezésre.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Belépett a(z) ${e.groupTitle} csoportba, amely ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} lehetőséget`,
      other: () => `${n.number(e.groupCount)} lehetőséget`
    })} tartalmaz. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", kijelölve",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Javaslatok",
  selectedAnnouncement: (e) => `${e.optionText}, kijelölve`
};
var $n = {};
$n = {
  buttonLabel: "Mostra suggerimenti",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opzione disponibile`,
    other: () => `${n.number(e.optionCount)} opzioni disponibili`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opzione`,
      other: () => `${n.number(e.groupCount)} opzioni`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", selezionato",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggerimenti",
  selectedAnnouncement: (e) => `${e.optionText}, selezionato`
};
var bn = {};
bn = {
  buttonLabel: "候補を表示",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} 個のオプション`,
    other: () => `${n.number(e.optionCount)} 個のオプション`
  })}を利用できます。`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `入力されたグループ ${e.groupTitle}、${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} 個のオプション`,
      other: () => `${n.number(e.groupCount)} 個のオプション`
    })}を含む。`,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: "、選択済み",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "候補",
  selectedAnnouncement: (e) => `${e.optionText}、選択済み`
};
var fn = {};
fn = {
  buttonLabel: "제안 사항 표시",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)}개 옵션`,
    other: () => `${n.number(e.optionCount)}개 옵션`
  })}을 사용할 수 있습니다.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `입력한 그룹 ${e.groupTitle}, ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)}개 옵션`,
      other: () => `${n.number(e.groupCount)}개 옵션`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", 선택됨",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "제안",
  selectedAnnouncement: (e) => `${e.optionText}, 선택됨`
};
var vn = {};
vn = {
  buttonLabel: "Rodyti pasiūlymus",
  countAnnouncement: (e, n) => `Yra ${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} parinktis`,
    other: () => `${n.number(e.optionCount)} parinktys (-ių)`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Įvesta grupė ${e.groupTitle}, su ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} parinktimi`,
      other: () => `${n.number(e.groupCount)} parinktimis (-ių)`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", pasirinkta",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Pasiūlymai",
  selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`
};
var hn = {};
hn = {
  buttonLabel: "Rādīt ieteikumus",
  countAnnouncement: (e, n) => `Pieejamo opciju skaits: ${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opcija`,
    other: () => `${n.number(e.optionCount)} opcijas`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Ievadīta grupa ${e.groupTitle}, ar ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opciju`,
      other: () => `${n.number(e.groupCount)} opcijām`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", atlasīta",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Ieteikumi",
  selectedAnnouncement: (e) => `${e.optionText}, atlasīta`
};
var xn = {};
xn = {
  buttonLabel: "Vis forslag",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} alternativ`,
    other: () => `${n.number(e.optionCount)} alternativer`
  })} finnes.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Angitt gruppe ${e.groupTitle}, med ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} alternativ`,
      other: () => `${n.number(e.groupCount)} alternativer`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", valgt",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Forslag",
  selectedAnnouncement: (e) => `${e.optionText}, valgt`
};
var Cn = {};
Cn = {
  buttonLabel: "Suggesties weergeven",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} optie`,
    other: () => `${n.number(e.optionCount)} opties`
  })} beschikbaar.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Groep ${e.groupTitle} ingevoerd met ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} optie`,
      other: () => `${n.number(e.groupCount)} opties`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", geselecteerd",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Suggesties",
  selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`
};
var mn = {};
mn = {
  buttonLabel: "Wyświetlaj sugestie",
  countAnnouncement: (e, n) => `dostępna/dostępne(-nych) ${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opcja`,
    other: () => `${n.number(e.optionCount)} opcje(-i)`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Dołączono do grupy ${e.groupTitle}, z ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opcją`,
      other: () => `${n.number(e.groupCount)} opcjami`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", wybrano",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestie",
  selectedAnnouncement: (e) => `${e.optionText}, wybrano`
};
var gn = {};
gn = {
  buttonLabel: "Mostrar sugestões",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opção`,
    other: () => `${n.number(e.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Grupo inserido ${e.groupTitle}, com ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opção`,
      other: () => `${n.number(e.groupCount)} opções`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", selecionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var yn = {};
yn = {
  buttonLabel: "Apresentar sugestões",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opção`,
    other: () => `${n.number(e.optionCount)} opções`
  })} disponível.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Grupo introduzido ${e.groupTitle}, com ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opção`,
      other: () => `${n.number(e.groupCount)} opções`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", selecionado",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestões",
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`
};
var Dn = {};
Dn = {
  buttonLabel: "Afișare sugestii",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opțiune`,
    other: () => `${n.number(e.optionCount)} opțiuni`
  })} disponibile.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Grup ${e.groupTitle} introdus, cu ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opțiune`,
      other: () => `${n.number(e.groupCount)} opțiuni`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", selectat",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Sugestii",
  selectedAnnouncement: (e) => `${e.optionText}, selectat`
};
var An = {};
An = {
  buttonLabel: "Показать предложения",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} параметр`,
    other: () => `${n.number(e.optionCount)} параметров`
  })} доступно.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Введенная группа ${e.groupTitle}, с ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} параметром`,
      other: () => `${n.number(e.groupCount)} параметрами`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", выбранными",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Предложения",
  selectedAnnouncement: (e) => `${e.optionText}, выбрано`
};
var En = {};
En = {
  buttonLabel: "Zobraziť návrhy",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} možnosť`,
    other: () => `${n.number(e.optionCount)} možnosti/-í`
  })} k dispozícii.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Zadaná skupina ${e.groupTitle}, s ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} možnosťou`,
      other: () => `${n.number(e.groupCount)} možnosťami`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", vybraté",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Návrhy",
  selectedAnnouncement: (e) => `${e.optionText}, vybraté`
};
var Bn = {};
Bn = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (e, n) => `Na voljo je ${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opcija`,
    other: () => `${n.number(e.optionCount)} opcije`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Vnesena skupina ${e.groupTitle}, z ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opcija`,
      other: () => `${n.number(e.groupCount)} opcije`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", izbrano",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Predlogi",
  selectedAnnouncement: (e) => `${e.optionText}, izbrano`
};
var Tn = {};
Tn = {
  buttonLabel: "Prikaži predloge",
  countAnnouncement: (e, n) => `Dostupno još: ${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} opcija`,
    other: () => `${n.number(e.optionCount)} opcije/a`
  })}.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Unesena grupa ${e.groupTitle}, s ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} opcijom`,
      other: () => `${n.number(e.groupCount)} optione/a`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", izabranih",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Predlozi",
  selectedAnnouncement: (e) => `${e.optionText}, izabrano`
};
var Fn = {};
Fn = {
  buttonLabel: "Visa förslag",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} alternativ`,
    other: () => `${n.number(e.optionCount)} alternativ`
  })} tillgängliga.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Ingick i gruppen ${e.groupTitle} med ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} alternativ`,
      other: () => `${n.number(e.groupCount)} alternativ`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", valda",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Förslag",
  selectedAnnouncement: (e) => `${e.optionText}, valda`
};
var Pn = {};
Pn = {
  buttonLabel: "Önerileri göster",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} seçenek`,
    other: () => `${n.number(e.optionCount)} seçenekler`
  })} kullanılabilir.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Girilen grup ${e.groupTitle}, ile ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} seçenek`,
      other: () => `${n.number(e.groupCount)} seçenekler`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", seçildi",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Öneriler",
  selectedAnnouncement: (e) => `${e.optionText}, seçildi`
};
var Sn = {};
Sn = {
  buttonLabel: "Показати пропозиції",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} параметр`,
    other: () => `${n.number(e.optionCount)} параметри(-ів)`
  })} доступно.`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `Введена група ${e.groupTitle}, з ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} параметр`,
      other: () => `${n.number(e.groupCount)} параметри(-ів)`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", вибрано",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "Пропозиції",
  selectedAnnouncement: (e) => `${e.optionText}, вибрано`
};
var kn = {};
kn = {
  buttonLabel: "显示建议",
  countAnnouncement: (e, n) => `有 ${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} 个选项`,
    other: () => `${n.number(e.optionCount)} 个选项`
  })}可用。`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `进入了 ${e.groupTitle} 组，其中有 ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} 个选项`,
      other: () => `${n.number(e.groupCount)} 个选项`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", 已选择",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "建议",
  selectedAnnouncement: (e) => `${e.optionText}, 已选择`
};
var Ln = {};
Ln = {
  buttonLabel: "顯示建議",
  countAnnouncement: (e, n) => `${n.plural(e.optionCount, {
    one: () => `${n.number(e.optionCount)} 選項`,
    other: () => `${n.number(e.optionCount)} 選項`
  })} 可用。`,
  focusAnnouncement: (e, n) => `${n.select({
    true: () => `輸入的群組 ${e.groupTitle}, 有 ${n.plural(e.groupCount, {
      one: () => `${n.number(e.groupCount)} 選項`,
      other: () => `${n.number(e.groupCount)} 選項`
    })}. `,
    other: ""
  }, e.isGroupChange)}${e.optionText}${n.select({
    true: ", 已選取",
    other: ""
  }, e.isSelected)}`,
  listboxLabel: "建議",
  selectedAnnouncement: (e) => `${e.optionText}, 已選取`
};
var Mn = {};
Mn = {
  "ar-AE": Qe,
  "bg-BG": _e,
  "cs-CZ": en,
  "da-DK": nn,
  "de-DE": un,
  "el-GR": on,
  "en-US": tn,
  "es-ES": ln,
  "et-EE": an,
  "fi-FI": rn,
  "fr-FR": dn,
  "he-IL": cn,
  "hr-HR": sn,
  "hu-HU": pn,
  "it-IT": $n,
  "ja-JP": bn,
  "ko-KR": fn,
  "lt-LT": vn,
  "lv-LV": hn,
  "nb-NO": xn,
  "nl-NL": Cn,
  "pl-PL": mn,
  "pt-BR": gn,
  "pt-PT": yn,
  "ro-RO": Dn,
  "ru-RU": An,
  "sk-SK": En,
  "sl-SI": Bn,
  "sr-SP": Tn,
  "sv-SE": Fn,
  "tr-TR": Pn,
  "uk-UA": Sn,
  "zh-CN": kn,
  "zh-TW": Ln
};
function _u(e) {
  let n = Oe({
    usage: "search",
    ...e
  }), u = a.useCallback((t, l) => l.length === 0 ? !0 : (t = t.normalize("NFC"), l = l.normalize("NFC"), n.compare(t.slice(0, l.length), l) === 0), [
    n
  ]), o = a.useCallback((t, l) => l.length === 0 ? !0 : (t = t.normalize("NFC"), l = l.normalize("NFC"), n.compare(t.slice(-l.length), l) === 0), [
    n
  ]), i = a.useCallback((t, l) => {
    if (l.length === 0) return !0;
    t = t.normalize("NFC"), l = l.normalize("NFC");
    let r = 0, d = l.length;
    for (; r + d <= t.length; r++) {
      let b = t.slice(r, r + d);
      if (n.compare(l, b) === 0) return !0;
    }
    return !1;
  }, [
    n
  ]);
  return a.useMemo(() => ({
    startsWith: u,
    endsWith: o,
    contains: i
  }), [
    u,
    o,
    i
  ]);
}
const be = /* @__PURE__ */ new WeakMap();
function eo(e) {
  return typeof e == "string" ? e.replace(/\s*/g, "") : "" + e;
}
function In(e, n) {
  let u = be.get(e);
  if (!u) throw new Error("Unknown list");
  return `${u.id}-option-${eo(n)}`;
}
function no(e, n, u) {
  let o = te(e, {
    labelable: !0
  }), i = e.selectionBehavior || "toggle", t = e.linkBehavior || (i === "replace" ? "action" : "override");
  i === "toggle" && t === "action" && (t = "override");
  let { listProps: l } = Yn({
    ...e,
    ref: u,
    selectionManager: n.selectionManager,
    collection: n.collection,
    disabledKeys: n.disabledKeys,
    linkBehavior: t
  }), { focusWithinProps: r } = Zn({
    onFocusWithin: e.onFocus,
    onBlurWithin: e.onBlur,
    onFocusWithinChange: e.onFocusChange
  }), d = Ee(e.id);
  be.set(n, {
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
  let { labelProps: b, fieldProps: $ } = Jn({
    ...e,
    id: d,
    // listbox is not an HTML input element so it
    // shouldn't be labeled by a <label> element.
    labelElementType: "span"
  });
  return {
    labelProps: b,
    listBoxProps: Q(o, r, n.selectionManager.selectionMode === "multiple" ? {
      "aria-multiselectable": "true"
    } : {}, {
      role: "listbox",
      ...Q($, l)
    })
  };
}
function uo(e, n, u) {
  var o, i;
  let { key: t } = e, l = be.get(n);
  var r;
  let d = (r = e.isDisabled) !== null && r !== void 0 ? r : n.selectionManager.isDisabled(t);
  var b;
  let $ = (b = e.isSelected) !== null && b !== void 0 ? b : n.selectionManager.isSelected(t);
  var c;
  let p = (c = e.shouldSelectOnPressUp) !== null && c !== void 0 ? c : l?.shouldSelectOnPressUp;
  var C;
  let h = (C = e.shouldFocusOnHover) !== null && C !== void 0 ? C : l?.shouldFocusOnHover;
  var P;
  let K = (P = e.shouldUseVirtualFocus) !== null && P !== void 0 ? P : l?.shouldUseVirtualFocus;
  var T;
  let f = (T = e.isVirtualized) !== null && T !== void 0 ? T : l?.isVirtualized, I = ke(), R = ke(), A = {
    role: "option",
    "aria-disabled": d || void 0,
    "aria-selected": n.selectionManager.selectionMode !== "none" ? $ : void 0
  };
  Qn() && _n() || (A["aria-label"] = e["aria-label"], A["aria-labelledby"] = I, A["aria-describedby"] = R);
  let x = n.collection.getItem(t);
  if (f) {
    let k = Number(x?.index);
    A["aria-posinset"] = Number.isNaN(k) ? void 0 : k + 1, A["aria-setsize"] = Re(n.collection);
  }
  let H = l?.onAction ? () => {
    var k;
    return l == null || (k = l.onAction) === null || k === void 0 ? void 0 : k.call(l, t);
  } : void 0, D = In(n, t), { itemProps: M, isPressed: E, isFocused: w, hasAction: W, allowsSelection: X } = eu({
    selectionManager: n.selectionManager,
    key: t,
    ref: u,
    shouldSelectOnPressUp: p,
    allowsDifferentPressOrigin: p && h,
    isVirtualized: f,
    shouldUseVirtualFocus: K,
    isDisabled: d,
    onAction: H || !(x == null || (o = x.props) === null || o === void 0) && o.onAction ? ze(x == null || (i = x.props) === null || i === void 0 ? void 0 : i.onAction, H) : void 0,
    linkBehavior: l?.linkBehavior,
    // @ts-ignore
    UNSTABLE_itemBehavior: l?.UNSTABLE_itemBehavior,
    id: D
  }), { hoverProps: z } = je({
    isDisabled: d || !h,
    onHoverStart() {
      Le() || (n.selectionManager.setFocused(!0), n.selectionManager.setFocusedKey(t));
    }
  }), L = te(x?.props);
  delete L.id;
  let G = nu(x?.props);
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
    isFocusVisible: w && n.selectionManager.isFocused && Le(),
    isSelected: $,
    isDisabled: d,
    isPressed: E,
    allowsSelection: X,
    hasAction: W
  };
}
function oo(e) {
  let { heading: n, "aria-label": u } = e, o = Ee();
  return {
    itemProps: {
      role: "presentation"
    },
    headingProps: n ? {
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
      "aria-label": u,
      "aria-labelledby": n ? o : void 0
    }
  };
}
function to(e) {
  return e && e.__esModule ? e.default : e;
}
function lo(e, n) {
  let { buttonRef: u, popoverRef: o, inputRef: i, listBoxRef: t, keyboardDelegate: l, layoutDelegate: r, shouldFocusWrap: d, isReadOnly: b, isDisabled: $ } = e, c = a.useRef(null);
  u = u ?? c;
  let p = uu(to(Mn), "@react-aria/combobox"), { menuTriggerProps: C, menuProps: h } = ou({
    type: "listbox",
    isDisabled: $ || b
  }, n, u);
  be.set(n, {
    id: h.id
  });
  let { collection: P } = n, { disabledKeys: K } = n.selectionManager, T = a.useMemo(() => l || new Ge({
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
  ]), { collectionProps: f } = tu({
    selectionManager: n.selectionManager,
    keyboardDelegate: T,
    disallowTypeAhead: !0,
    disallowEmptySelection: !0,
    shouldFocusWrap: d,
    ref: i,
    // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
    isVirtualized: !0
  }), I = lu(), R = (v) => {
    if (!v.nativeEvent.isComposing)
      switch (v.key) {
        case "Enter":
        case "Tab":
          if (n.isOpen && v.key === "Enter" && v.preventDefault(), n.isOpen && t.current && n.selectionManager.focusedKey != null) {
            let m = n.collection.getItem(n.selectionManager.focusedKey);
            if (m?.props.href) {
              let S = t.current.querySelector(`[data-key="${CSS.escape(n.selectionManager.focusedKey.toString())}"]`);
              v.key === "Enter" && S instanceof HTMLAnchorElement && I.open(S, v, m.props.href, m.props.routerOptions), n.close();
              break;
            } else if (m?.props.onAction) {
              m.props.onAction(), n.close();
              break;
            }
          }
          n.commit();
          break;
        case "Escape":
          (!n.selectionManager.isEmpty || n.inputValue === "" || e.allowsCustomValue) && v.continuePropagation(), n.revert();
          break;
        case "ArrowDown":
          n.open("first", "manual");
          break;
        case "ArrowUp":
          n.open("last", "manual");
          break;
        case "ArrowLeft":
        case "ArrowRight":
          n.selectionManager.setFocusedKey(null);
          break;
      }
  }, A = (v) => {
    let m = u?.current && u.current === v.relatedTarget, S = De(o.current, v.relatedTarget);
    m || S || (e.onBlur && e.onBlur(v), n.setFocused(!1));
  }, x = (v) => {
    n.isFocused || (e.onFocus && e.onFocus(v), n.setFocused(!0));
  }, H = io([
    n.selectedItems,
    n.selectionManager.selectionMode
  ]), { isInvalid: D, validationErrors: M, validationDetails: E } = n.displayValidation, { labelProps: w, inputProps: W, descriptionProps: X, errorMessageProps: z } = iu({
    ...e,
    onChange: n.setInputValue,
    onKeyDown: b ? e.onKeyDown : ze(n.isOpen && f.onKeyDown, R, e.onKeyDown),
    onBlur: A,
    value: n.inputValue,
    defaultValue: n.defaultInputValue,
    onFocus: x,
    autoComplete: "off",
    validate: void 0,
    [au]: n,
    "aria-describedby": [
      H,
      e["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0
  }, i);
  ru(i, n.defaultValue, n.setValue);
  let L = (v) => {
    if (v.pointerType === "touch") {
      var m;
      (m = i.current) === null || m === void 0 || m.focus(), n.toggle(null, "manual");
    }
  }, G = (v) => {
    if (v.pointerType !== "touch") {
      var m;
      (m = i.current) === null || m === void 0 || m.focus(), n.toggle(v.pointerType === "keyboard" || v.pointerType === "virtual" ? "first" : null, "manual");
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
    let S = Ie(v).getBoundingClientRect(), J = v.changedTouches[0], ue = Math.ceil(S.left + 0.5 * S.width), he = Math.ceil(S.top + 0.5 * S.height);
    if (J.clientX === ue && J.clientY === he) {
      var re;
      v.preventDefault(), (re = i.current) === null || re === void 0 || re.focus(), n.toggle(null, "manual"), N.current = v.timeStamp;
    }
  }, V = n.selectionManager.focusedKey != null && n.isOpen ? n.collection.getItem(n.selectionManager.focusedKey) : void 0;
  var Z;
  let Y = (Z = V?.parentKey) !== null && Z !== void 0 ? Z : null;
  var pe;
  let U = (pe = n.selectionManager.focusedKey) !== null && pe !== void 0 ? pe : null, ie = a.useRef(Y), ne = a.useRef(U);
  a.useEffect(() => {
    if (ge() && V != null && U != null && U !== ne.current) {
      let m = n.selectionManager.isSelected(U), S = Y != null ? n.collection.getItem(Y) : null, J = S?.["aria-label"] || (typeof S?.rendered == "string" ? S.rendered : "") || "";
      var v;
      let ue = p.format("focusAnnouncement", {
        isGroupChange: (v = S && Y !== ie.current) !== null && v !== void 0 ? v : !1,
        groupTitle: J,
        groupCount: S ? [
          ...Ne(S, n.collection)
        ].length : 0,
        optionText: V["aria-label"] || V.textValue || "",
        isSelected: m
      });
      ye(ue);
    }
    ie.current = Y, ne.current = U;
  });
  let _ = Re(n.collection), ee = a.useRef(_), ae = a.useRef(n.isOpen);
  a.useEffect(() => {
    let v = n.isOpen !== ae.current && (n.selectionManager.focusedKey == null || ge());
    if (n.isOpen && (v || _ !== ee.current)) {
      let m = p.format("countAnnouncement", {
        optionCount: _
      });
      ye(m);
    }
    ee.current = _, ae.current = n.isOpen;
  });
  let $e = a.useRef(n.selectedKey);
  return a.useEffect(() => {
    if (ge() && n.isFocused && n.selectedItem && n.selectedKey !== $e.current) {
      let v = n.selectedItem["aria-label"] || n.selectedItem.textValue || "", m = p.format("selectedAnnouncement", {
        optionText: v
      });
      ye(m);
    }
    $e.current = n.selectedKey;
  }), a.useEffect(() => {
    if (n.isOpen) return du([
      i.current,
      o.current
    ].filter((v) => v != null));
  }, [
    n.isOpen,
    i,
    o
  ]), Zu(() => {
    !V && i.current && cu(su(i.current)) === i.current && pu(i.current, null);
  }, [
    V
  ]), $u(t, "react-aria-item-action", n.isOpen ? () => {
    n.close();
  } : void 0), bu({
    ref: o,
    onInteractOutside: (v) => {
      let m = Ie(v);
      De(u?.current, m) || De(i.current, m) || n.close();
    },
    isDisabled: !n.isOpen
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
      "aria-controls": n.isOpen ? h.id : void 0,
      // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
      "aria-autocomplete": "list",
      "aria-activedescendant": V ? In(n, V.key) : void 0,
      onTouchEnd: F,
      // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
      autoCorrect: "off",
      // This disable's the macOS Safari spell check auto corrections.
      spellCheck: "false"
    }),
    listBoxProps: Q(h, O, {
      autoFocus: n.focusStrategy || !0,
      shouldUseVirtualFocus: !0,
      shouldSelectOnPressUp: !0,
      shouldFocusOnHover: !0,
      linkBehavior: "selection",
      UNSTABLE_itemBehavior: "action"
    }),
    valueProps: {
      id: H
    },
    descriptionProps: X,
    errorMessageProps: z,
    isInvalid: D,
    validationErrors: M,
    validationDetails: E
  };
}
function io(e = []) {
  let n = Ee(), [u, o] = a.useState(!0), [i, t] = a.useState(e);
  return i.some((l, r) => !Object.is(l, e[r])) && (o(!0), t(e)), a.useEffect(() => {
    u && !document.getElementById(n) && o(!1);
  }, [
    n,
    u,
    i
  ]), u ? n : void 0;
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
  getKeyBefore(n) {
    let u = this.keyMap.get(n);
    var o;
    return u && (o = u.prevKey) !== null && o !== void 0 ? o : null;
  }
  getKeyAfter(n) {
    let u = this.keyMap.get(n);
    var o;
    return u && (o = u.nextKey) !== null && o !== void 0 ? o : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(n) {
    var u;
    return (u = this.keyMap.get(n)) !== null && u !== void 0 ? u : null;
  }
  at(n) {
    const u = [
      ...this.getKeys()
    ];
    return this.getItem(u[n]);
  }
  getChildren(n) {
    let u = this.keyMap.get(n);
    return u?.childNodes || [];
  }
  constructor(n) {
    this.keyMap = /* @__PURE__ */ new Map(), this.firstKey = null, this.lastKey = null, this.iterable = n;
    let u = (r) => {
      if (this.keyMap.set(r.key, r), r.childNodes && r.type === "section") for (let d of r.childNodes) u(d);
    };
    for (let r of n) u(r);
    let o = null, i = 0, t = 0;
    for (let [r, d] of this.keyMap)
      o ? (o.nextKey = r, d.prevKey = o.key) : (this.firstKey = r, d.prevKey = void 0), d.type === "item" && (d.index = i++), (d.type === "section" || d.type === "item") && t++, o = d, o.nextKey = void 0;
    this._size = t;
    var l;
    this.lastKey = (l = o?.key) !== null && l !== void 0 ? l : null;
  }
}
function Vn(e) {
  let { filter: n, layoutDelegate: u } = e, o = fu(e), i = a.useMemo(() => e.disabledKeys ? new Set(e.disabledKeys) : /* @__PURE__ */ new Set(), [
    e.disabledKeys
  ]), t = a.useCallback((b) => n ? new Ae(n(b)) : new Ae(b), [
    n
  ]), l = a.useMemo(() => ({
    suppressTextValueWarning: e.suppressTextValueWarning
  }), [
    e.suppressTextValueWarning
  ]), r = vu(e, t, l), d = a.useMemo(() => new hu(r, o, {
    layoutDelegate: u
  }), [
    r,
    o,
    u
  ]);
  return Kn(r, d), {
    collection: r,
    disabledKeys: i,
    selectionManager: d
  };
}
function ao(e, n) {
  let u = a.useMemo(() => n ? e.collection.filter(n) : e.collection, [
    e.collection,
    n
  ]), o = e.selectionManager.withCollection(u);
  return Kn(u, o), {
    collection: u,
    selectionManager: o,
    disabledKeys: e.disabledKeys
  };
}
function Kn(e, n) {
  const u = a.useRef(null);
  a.useEffect(() => {
    if (n.focusedKey != null && !e.getItem(n.focusedKey) && u.current) {
      const $ = u.current.getItem(n.focusedKey), c = [
        ...u.current.getKeys()
      ].map((T) => {
        const f = u.current.getItem(T);
        return f?.type === "item" ? f : null;
      }).filter((T) => T !== null), p = [
        ...e.getKeys()
      ].map((T) => {
        const f = e.getItem(T);
        return f?.type === "item" ? f : null;
      }).filter((T) => T !== null);
      var o, i;
      const C = ((o = c?.length) !== null && o !== void 0 ? o : 0) - ((i = p?.length) !== null && i !== void 0 ? i : 0);
      var t, l, r;
      let h = Math.min(C > 1 ? Math.max(((t = $?.index) !== null && t !== void 0 ? t : 0) - C + 1, 0) : (l = $?.index) !== null && l !== void 0 ? l : 0, ((r = p?.length) !== null && r !== void 0 ? r : 0) - 1), P = null, K = !1;
      for (; h >= 0; ) {
        if (!n.isDisabled(p[h].key)) {
          P = p[h];
          break;
        }
        if (h < p.length - 1 && !K) h++;
        else {
          K = !0;
          var d, b;
          h > ((d = $?.index) !== null && d !== void 0 ? d : 0) && (h = (b = $?.index) !== null && b !== void 0 ? b : 0), h--;
        }
      }
      n.setFocusedKey(P ? P.key : null);
    }
    u.current = e;
  }, [
    e,
    n
  ]);
}
const ro = [];
function co(e) {
  var n;
  let { defaultFilter: u, menuTrigger: o = "input", allowsEmptyCollection: i = !1, allowsCustomValue: t, shouldCloseOnBlur: l = !0, selectionMode: r = "single" } = e, [d, b] = a.useState(!1), [$, c] = a.useState(!1), [p, C] = a.useState(null), h = a.useMemo(() => {
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
  let { collection: A, selectionManager: x, disabledKeys: H } = Vn({
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
  ]), [E, w] = Ve(e.inputValue, Ke(e.defaultInputValue, D, A) || "", e.onInputChange), [W] = a.useState(f), [X] = a.useState(E), z = A, L = a.useMemo(() => (
    // No default filter if items are controlled.
    e.items != null || !u ? A : so(A, E, u)
  ), [
    A,
    E,
    u,
    e.items
  ]), [G, k] = a.useState(L), O = a.useRef("focus"), F = xu({
    ...e,
    onOpenChange: (s) => {
      e.onOpenChange && e.onOpenChange(s, s ? O.current : void 0), x.setFocused(s), s || x.setFocusedKey(null);
    },
    isOpen: void 0,
    defaultOpen: void 0
  }), V = (s = null, y) => {
    let B = y === "manual" || y === "focus" && o === "focus";
    (i || L.size > 0 || B && z.size > 0 || e.items) && (B && !F.isOpen && e.items === void 0 && b(!0), O.current = y, C(s), F.open());
  }, Z = (s = null, y) => {
    let B = y === "manual" || y === "focus" && o === "focus";
    !(i || L.size > 0 || B && z.size > 0 || e.items) && !F.isOpen || (B && !F.isOpen && e.items === void 0 && b(!0), F.isOpen || (O.current = y), pe(s));
  }, Y = a.useCallback(() => {
    k(d ? z : L);
  }, [
    d,
    z,
    L
  ]), pe = a.useCallback((s = null) => {
    F.isOpen && Y(), C(s), F.toggle();
  }, [
    F,
    Y
  ]), U = a.useCallback(() => {
    F.isOpen && (Y(), F.close());
  }, [
    F,
    Y
  ]), [ie, ne] = a.useState(E), _ = () => {
    var s, y;
    let B = D != null && (y = (s = A.getItem(D)) === null || s === void 0 ? void 0 : s.textValue) !== null && y !== void 0 ? y : "";
    ne(B), w(B);
  }, ee = a.useRef(f);
  var ae;
  let $e = a.useRef(D != null && (ae = (n = A.getItem(D)) === null || n === void 0 ? void 0 : n.textValue) !== null && ae !== void 0 ? ae : "");
  a.useEffect(() => {
    var s;
    $ && (L.size > 0 || i) && !F.isOpen && E !== ie && o !== "manual" && V(null, "input"), !d && !i && F.isOpen && L.size === 0 && U(), f != null && f !== ee.current && r === "single" && U(), E !== ie && (x.setFocusedKey(null), b(!1), r === "single" && E === "" && (e.inputValue === void 0 || P === void 0) && I(null)), f !== ee.current && (e.inputValue === void 0 || P === void 0) ? _() : ie !== E && ne(E);
    var y;
    let B = D != null && (y = (s = A.getItem(D)) === null || s === void 0 ? void 0 : s.textValue) !== null && y !== void 0 ? y : "";
    !$ && D != null && e.inputValue === void 0 && D === ee.current && $e.current !== B && (ne(B), w(B)), ee.current = f, $e.current = B;
  });
  let v = Cu({
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
      let Wn = D != null && (j = (B = A.getItem(D)) === null || B === void 0 ? void 0 : B.textValue) !== null && j !== void 0 ? j : "";
      ne(Wn), U();
    } else
      _(), U();
  };
  const ue = () => {
    if (t) {
      var s, y;
      const B = D != null && (y = (s = A.getItem(D)) === null || s === void 0 ? void 0 : s.textValue) !== null && y !== void 0 ? y : "";
      E === B ? J() : S();
    } else
      J();
  };
  let he = () => {
    F.isOpen && x.focusedKey != null ? x.isSelected(x.focusedKey) && r === "single" ? J() : x.select(x.focusedKey) : ue();
  }, re = a.useRef(E), Un = (s) => {
    s ? (re.current = E, o === "focus" && !e.isReadOnly && V(null, "focus")) : (l && ue(), E !== re.current && v.commitValidation()), c(s);
  }, Hn = a.useMemo(() => F.isOpen ? d ? z : L : G, [
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
    toggle: Z,
    open: V,
    close: ue,
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
    setFocused: Un,
    selectedItem: (Ce = M[0]) !== null && Ce !== void 0 ? Ce : null,
    collection: Hn,
    inputValue: E,
    defaultInputValue: (me = Ke(e.defaultInputValue, Se, A)) !== null && me !== void 0 ? me : X,
    setInputValue: w,
    commit: he,
    revert: m
  };
}
function so(e, n, u) {
  return new Ae(wn(e, e, n, u));
}
function wn(e, n, u, o) {
  let i = [];
  for (let t of n)
    if (t.type === "section" && t.hasChildNodes) {
      let l = wn(e, Ne(t, e), u, o);
      [
        ...l
      ].some((r) => r.type === "item") && i.push({
        ...t,
        childNodes: l
      });
    } else t.type === "item" && o(t.textValue, u) ? i.push({
      ...t
    }) : t.type !== "item" && i.push({
      ...t
    });
  return i;
}
function Ke(e, n, u) {
  if (e == null) {
    var o, i;
    if (n != null) return (i = (o = u.getItem(n)) === null || o === void 0 ? void 0 : o.textValue) !== null && i !== void 0 ? i : "";
  }
  return e;
}
function po(e) {
  if (e !== void 0)
    return e === null ? [] : Array.isArray(e) ? e : [
      e
    ];
}
const fe = /* @__PURE__ */ a.createContext({}), On = /* @__PURE__ */ a.createContext(null), $o = /* @__PURE__ */ a.forwardRef(function(n, u) {
  let { render: o } = a.useContext(On);
  return /* @__PURE__ */ g.createElement(g.Fragment, null, o(n, u));
});
function Rn(e, n) {
  var u;
  let o = e?.renderDropIndicator, i = e == null || (u = e.isVirtualDragging) === null || u === void 0 ? void 0 : u.call(e), t = a.useCallback((l) => {
    if (i || n?.isDropTarget(l)) return o ? o(l) : /* @__PURE__ */ g.createElement($o, {
      target: l
    });
  }, [
    n?.target,
    i,
    o
  ]);
  return e?.useDropIndicator ? t : void 0;
}
function bo(e, n, u) {
  var o, i;
  let t = e.focusedKey, l = null;
  if (!(n == null || (o = n.isVirtualDragging) === null || o === void 0) && o.call(n) && (u == null || (i = u.target) === null || i === void 0 ? void 0 : i.type) === "item" && (l = u.target.key, u.target.dropPosition === "after")) {
    let c = u.collection.getKeyAfter(l), p = null;
    if (c != null) {
      var r, d;
      let C = (d = (r = u.collection.getItem(l)) === null || r === void 0 ? void 0 : r.level) !== null && d !== void 0 ? d : 0;
      for (; c; ) {
        let h = u.collection.getItem(c);
        if (!h) break;
        if (h.type !== "item") {
          c = u.collection.getKeyAfter(c);
          continue;
        }
        var b;
        if (((b = h.level) !== null && b !== void 0 ? b : 0) <= C) break;
        p = c, c = u.collection.getKeyAfter(c);
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
const ve = /* @__PURE__ */ a.createContext(null), se = /* @__PURE__ */ a.createContext(null), fo = /* @__PURE__ */ a.forwardRef(function(n, u) {
  [n, u] = Be(n, u, ve);
  let o = a.useContext(se);
  return o ? /* @__PURE__ */ g.createElement(zn, {
    state: o,
    props: n,
    listBoxRef: u
  }) : /* @__PURE__ */ g.createElement(He, {
    content: /* @__PURE__ */ g.createElement(gu, n)
  }, (i) => /* @__PURE__ */ g.createElement(vo, {
    props: n,
    listBoxRef: u,
    collection: i
  }));
});
function vo({ props: e, listBoxRef: n, collection: u }) {
  e = {
    ...e,
    collection: u,
    children: null,
    items: null
  };
  let { layoutDelegate: o } = a.useContext(Pe), i = Vn({
    ...e,
    layoutDelegate: o
  });
  return /* @__PURE__ */ g.createElement(zn, {
    state: i,
    props: e,
    listBoxRef: n
  });
}
function zn({ state: e, props: n, listBoxRef: u }) {
  [n, u] = Be(n, u, Tu);
  let { dragAndDropHooks: o, layout: i = "stack", orientation: t = "vertical", filter: l } = n, r = ao(e, l), { collection: d, selectionManager: b } = r, $ = !!o?.useDraggableCollectionState, c = !!o?.useDroppableCollectionState, { direction: p } = Fu(), { disabledBehavior: C, disabledKeys: h } = b, P = Oe({
    usage: "search",
    sensitivity: "base"
  }), { isVirtualized: K, layoutDelegate: T, dropTargetDelegate: f, CollectionRoot: I } = a.useContext(Pe), R = a.useMemo(() => n.keyboardDelegate || new Ge({
    collection: d,
    collator: P,
    ref: u,
    disabledKeys: h,
    disabledBehavior: C,
    layout: i,
    orientation: t,
    direction: p,
    layoutDelegate: T
  }), [
    d,
    P,
    u,
    C,
    h,
    t,
    p,
    n.keyboardDelegate,
    i,
    T
  ]), { listBoxProps: A } = no({
    ...n,
    shouldSelectOnPressUp: $ || n.shouldSelectOnPressUp,
    keyboardDelegate: R,
    isVirtualized: K
  }, r, u), x = a.useRef($), H = a.useRef(c);
  a.useEffect(() => {
    process.env.NODE_ENV !== "production" && (x.current !== $ && console.warn("Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."), H.current !== c && console.warn("Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior."));
  }, [
    $,
    c
  ]);
  let D, M, E, w = !1, W = null, X = a.useRef(null);
  if ($ && o) {
    D = o.useDraggableCollectionState({
      collection: d,
      selectionManager: b,
      preview: o.renderDragPreview ? X : void 0
    }), o.useDraggableCollection({}, D, u);
    let Z = o.DragPreview;
    W = o.renderDragPreview ? /* @__PURE__ */ g.createElement(Z, {
      ref: X
    }, o.renderDragPreview) : null;
  }
  if (c && o) {
    M = o.useDroppableCollectionState({
      collection: d,
      selectionManager: b
    });
    let Z = o.dropTargetDelegate || f || new o.ListDropTargetDelegate(d, u, {
      orientation: t,
      layout: i,
      direction: p
    });
    E = o.useDroppableCollection({
      keyboardDelegate: R,
      dropTargetDelegate: Z
    }, M, u), w = M.isDropTarget({
      type: "root"
    });
  }
  let { focusProps: z, isFocused: L, isFocusVisible: G } = Pu(), k = r.collection.size === 0, O = {
    isDropTarget: w,
    isEmpty: k,
    isFocused: L,
    isFocusVisible: G,
    layout: n.layout || "stack",
    state: r
  }, N = ce({
    ...n,
    children: void 0,
    defaultClassName: "react-aria-ListBox",
    values: O
  }), F = null;
  k && n.renderEmptyState && (F = /* @__PURE__ */ g.createElement("div", {
    // eslint-disable-next-line
    role: "option",
    style: {
      display: "contents"
    }
  }, n.renderEmptyState(O)));
  let V = te(n, {
    global: !0
  });
  return /* @__PURE__ */ g.createElement(Su, null, /* @__PURE__ */ g.createElement(oe.div, {
    ...Q(V, N, A, z, E?.collectionProps),
    ref: u,
    slot: n.slot || void 0,
    onScroll: n.onScroll,
    "data-drop-target": w || void 0,
    "data-empty": k || void 0,
    "data-focused": L || void 0,
    "data-focus-visible": G || void 0,
    "data-layout": n.layout || "stack",
    "data-orientation": n.orientation || "vertical"
  }, /* @__PURE__ */ g.createElement(Te, {
    values: [
      [
        ve,
        n
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
        ku,
        {
          elementType: "div"
        }
      ],
      [
        On,
        {
          render: Co
        }
      ],
      [
        Lu,
        {
          name: "ListBoxSection",
          render: ho
        }
      ]
    ]
  }, /* @__PURE__ */ g.createElement(Mu, null, /* @__PURE__ */ g.createElement(I, {
    collection: d,
    scrollRef: u,
    persistedKeys: bo(b, o, M),
    renderDropIndicator: Rn(o, M)
  }))), F, W));
}
function ho(e, n, u, o = "react-aria-ListBoxSection") {
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
    ref: n
  }, /* @__PURE__ */ g.createElement(Iu.Provider, {
    value: {
      ...c,
      ref: d
    }
  }, /* @__PURE__ */ g.createElement(r, {
    collection: i.collection,
    parent: u,
    renderDropIndicator: Rn(t, l)
  })));
}
const xo = /* @__PURE__ */ Ue(yu, function(n, u, o) {
  let i = We(u), t = a.useContext(se), { dragAndDropHooks: l, dragState: r, dropState: d } = a.useContext(fe), { optionProps: b, labelProps: $, descriptionProps: c, ...p } = uo({
    key: o.key,
    "aria-label": n?.["aria-label"]
  }, t, i), { hoverProps: C, isHovered: h } = je({
    isDisabled: !p.allowsSelection && !p.hasAction,
    onHoverStart: o.props.onHoverStart,
    onHoverChange: o.props.onHoverChange,
    onHoverEnd: o.props.onHoverEnd
  }), { keyboardProps: P } = Du(n), { focusProps: K } = Au(n), T = null;
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
    ...n,
    id: void 0,
    children: n.children,
    defaultClassName: "react-aria-ListBoxItem",
    values: {
      ...p,
      isHovered: h,
      selectionMode: t.selectionManager.selectionMode,
      selectionBehavior: t.selectionManager.selectionBehavior,
      allowsDragging: !!r,
      isDragging: I,
      isDropTarget: f?.isDropTarget
    }
  });
  a.useEffect(() => {
    !o.textValue && process.env.NODE_ENV !== "production" && console.warn("A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.");
  }, [
    o.textValue
  ]);
  let A = n.href ? oe.a : oe.div, x = te(n, {
    global: !0
  });
  return delete x.id, delete x.onClick, n.href && b.tabIndex == null && (b.tabIndex = -1), /* @__PURE__ */ g.createElement(A, {
    ...Q(x, R, b, C, P, K, T?.dragProps, f?.dropProps),
    ref: i,
    "data-allows-dragging": !!r || void 0,
    "data-selected": p.isSelected || void 0,
    "data-disabled": p.isDisabled || void 0,
    "data-hovered": h || void 0,
    "data-focused": p.isFocused || void 0,
    "data-focus-visible": p.isFocusVisible || void 0,
    "data-pressed": p.isPressed || void 0,
    "data-dragging": I || void 0,
    "data-drop-target": f?.isDropTarget || void 0,
    "data-selection-mode": t.selectionManager.selectionMode === "none" ? void 0 : t.selectionManager.selectionMode
  }, /* @__PURE__ */ g.createElement(Te, {
    values: [
      [
        Fe,
        {
          slots: {
            [Bu]: $,
            label: $,
            description: c
          }
        }
      ],
      [
        Eu,
        {
          isSelected: p.isSelected
        }
      ]
    ]
  }, R.children));
});
function Co(e, n) {
  n = We(n);
  let { dragAndDropHooks: u, dropState: o } = a.useContext(fe), { dropIndicatorProps: i, isHidden: t, isDropTarget: l } = u.useDropIndicator(e, o, n);
  return t ? null : /* @__PURE__ */ g.createElement(go, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: l,
    ref: n
  });
}
function mo(e, n) {
  let { dropIndicatorProps: u, isDropTarget: o, ...i } = e, t = ce({
    ...i,
    defaultClassName: "react-aria-DropIndicator",
    values: {
      isDropTarget: o
    }
  });
  return /* @__PURE__ */ g.createElement(oe.div, {
    ...u,
    ...t,
    role: "option",
    ref: n,
    "data-drop-target": o || void 0
  });
}
const go = /* @__PURE__ */ a.forwardRef(mo);
Ue(mu, function(n, u, o) {
  let i = a.useContext(se), { isLoading: t, onLoadMore: l, scrollOffset: r, ...d } = n, b = a.useRef(null), $ = a.useMemo(() => ({
    onLoadMore: l,
    collection: i?.collection,
    sentinelRef: b,
    scrollOffset: r
  }), [
    l,
    r,
    i?.collection
  ]);
  Ju($, b);
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
    inert: Qu(!0)
  }, /* @__PURE__ */ g.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: b,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), t && c.children && /* @__PURE__ */ g.createElement(oe.div, {
    ...Q(te(n, {
      global: !0
    }), p),
    ...c,
    // aria-selected isn't needed here since this option is not selectable.
    role: "option",
    ref: u
  }, c.children));
});
const yo = /* @__PURE__ */ a.createContext(null), Do = /* @__PURE__ */ a.createContext(null), Ao = /* @__PURE__ */ a.forwardRef(function(n, u) {
  [n, u] = Be(n, u, yo);
  let { children: o, isDisabled: i = !1, isInvalid: t = !1, isRequired: l = !1 } = n, r = a.useMemo(() => {
    var d;
    return /* @__PURE__ */ g.createElement(ve.Provider, {
      value: {
        items: (d = n.items) !== null && d !== void 0 ? d : n.defaultItems
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
    n.items,
    n.defaultItems
  ]);
  return /* @__PURE__ */ g.createElement(He, {
    content: r
  }, (d) => /* @__PURE__ */ g.createElement(Bo, {
    props: n,
    collection: d,
    comboBoxRef: u
  }));
}), Eo = [
  Xe,
  Ye,
  Ze,
  Je,
  Fe
];
function Bo({ props: e, collection: n, comboBoxRef: u }) {
  let { name: o, formValue: i = "key", allowsCustomValue: t } = e;
  t && (i = "text");
  let { validationBehavior: l } = Vu(Ku) || {};
  var r, d;
  let b = (d = (r = e.validationBehavior) !== null && r !== void 0 ? r : l) !== null && d !== void 0 ? d : "native", { contains: $ } = _u({
    sensitivity: "base"
  }), c = co({
    ...e,
    defaultFilter: e.defaultFilter || $,
    // If props.items isn't provided, rely on collection filtering (aka listbox.items is provided or defaultItems provided to Combobox)
    items: e.items,
    children: void 0,
    collection: n,
    validationBehavior: b
  }), p = a.useRef(null), C = a.useRef(null), h = a.useRef(null), P = a.useRef(null), [K, T] = qe(!e["aria-label"] && !e["aria-labelledby"]), { buttonProps: f, inputProps: I, listBoxProps: R, labelProps: A, descriptionProps: x, errorMessageProps: H, valueProps: D, ...M } = lo({
    ...wu(e),
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
  Ou({
    ref: C,
    onResize: W
  });
  let X = a.useMemo(() => ({
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
    values: X,
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
        Xe,
        {
          ...A,
          ref: K
        }
      ],
      [
        Ye,
        {
          ...f,
          ref: p,
          isPressed: c.isOpen
        }
      ],
      [
        Ze,
        {
          ...I,
          ref: C
        }
      ],
      [
        Ru,
        c
      ],
      [
        zu,
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
        ju,
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
    ref: u,
    slot: e.slot || void 0,
    "data-focused": c.isFocused || void 0,
    "data-open": c.isOpen || void 0,
    "data-disabled": e.isDisabled || void 0,
    "data-invalid": M.isInvalid || void 0,
    "data-required": e.isRequired || void 0
  }, z.children, G));
}
const To = /* @__PURE__ */ a.createContext(null);
var Fo = Object.defineProperty, jn = (e, n) => Fo(e, "name", { value: n, configurable: !0 });
function Gn(e) {
  return q.jsx(So, { ...e });
}
jn(Gn, "DropdownListBox");
function Po(e) {
  return q.jsx(ko, { ...e });
}
jn(Po, "DropdownListBoxItem");
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
var Lo = Object.defineProperty, Mo = (e, n) => Lo(e, "name", { value: n, configurable: !0 });
function Nn({ children: e, label: n, description: u, items: o, onInputChange: i, ...t }) {
  const [l, r] = a.useState(t.inputValue ?? t.defaultInputValue ?? ""), d = a.useMemo(() => {
    if (!(t.inputValue === void 0 && t.value === void 0)) return { selectedKey: t.value ?? null, value: t.value ?? null, inputValue: t.inputValue ?? l };
  }, [t.inputValue, t.value, l]), { isInvalid: b, validate: $, validationError: c } = Nu({ value: d, validate: t.validate }), p = a.useCallback((C) => {
    t.inputValue === void 0 && r(C), i?.(C);
  }, [t.inputValue, i]);
  return q.jsx(Uu, { children: ({ inputRef: C }) => q.jsx(wo, { ...t, onInputChange: p, isInvalid: b, validate: $, children: q.jsxs(Hu, { label: n, description: u, realtimeValidationError: c, children: [q.jsxs(Oo, { children: [q.jsx(Ro, { ref: C }), q.jsx(zo, { "aria-hidden": "true", icon: q.jsx(Wu, {}) })] }), q.jsx(qu, { children: q.jsx(Gn, { items: o, children: e }) })] }) }) });
}
Mo(Nn, "ComboBox");
const Io = "16px", Vo = `${Io} + ${de.spacing4} * 2`, Ko = le(Ao)``, wo = Ko, Oo = le.div`
    position: relative;
    line-height: ${de.lineHeightMd};
    flex: 1;
`, Ro = le(Xu)`
    padding-right: calc(${Vo});
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &[data-expanded] {
        border-color: ${(e) => e.theme.colorsBorderActive};
    }
`, zo = le(Yu)`
    position: absolute;
    // We need to add the border width, because the button is positioned relative to the input
    inset: ${de.borderWidthMd};
    left: unset;
    border: 0;
    padding: ${Gu} ${de.spacing4};
`;
le(Nn)`
    width: 100%;
`;
export {
  Zu as $,
  Po as I,
  Ko as S,
  Nn as _,
  Vn as a,
  ve as b,
  se as c,
  Ju as d,
  Qu as e,
  Gn as f
};
