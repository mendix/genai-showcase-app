import { k as ee, j as te, e as W, b as I, bq as re, br as ne, bs as ae, r as z, x as ie, I as se, F as oe, E as le, G as ce, H as de, R as l, S, bg as A, T as y, U as v, a0 as ue, bt as fe, a8 as R, a3 as q } from "./formelements-DgWWXRMR.js";
function ge(e, t) {
  let { elementType: o = "a", onPress: d, onPressStart: g, onPressEnd: m, onClick: $, isDisabled: i, ...u } = e, c = {};
  o !== "a" && (c = {
    role: "link",
    tabIndex: i ? void 0 : 0
  });
  let { focusableProps: s } = ee(e, t), { pressProps: p, isPressed: h } = te({
    onPress: d,
    onPressStart: g,
    onPressEnd: m,
    onClick: $,
    isDisabled: i,
    ref: t
  }), C = W(u, {
    labelable: !0
  }), b = I(s, p), L = re(), P = ne(e);
  return {
    isPressed: h,
    linkProps: I(C, P, {
      ...b,
      ...c,
      "aria-disabled": i || void 0,
      "aria-current": e["aria-current"],
      onClick: (N) => {
        var r;
        (r = p.onClick) === null || r === void 0 || r.call(p, N), ae(N, L, e.href, e.routerOptions);
      }
    })
  };
}
const he = /* @__PURE__ */ z.createContext(null), pe = /* @__PURE__ */ z.forwardRef(function(t, o) {
  [t, o] = ie(t, o, he);
  let d = t.href && !t.isDisabled ? "a" : "span", { linkProps: g, isPressed: m } = ge({
    ...t,
    elementType: d
  }, o), $ = se[d], { hoverProps: i, isHovered: u } = oe(t), { focusProps: c, isFocused: s, isFocusVisible: p } = le(), h = ce({
    ...t,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!t["aria-current"],
      isDisabled: t.isDisabled || !1,
      isPressed: m,
      isHovered: u,
      isFocused: s,
      isFocusVisible: p
    }
  }), C = W(t, {
    global: !0
  });
  return delete C.onClick, /* @__PURE__ */ de.createElement($, {
    ref: o,
    slot: t.slot || void 0,
    ...I(C, h, g, i, c),
    "data-focused": s || void 0,
    "data-hovered": u || void 0,
    "data-pressed": m || void 0,
    "data-focus-visible": p || void 0,
    "data-current": !!t["aria-current"] || void 0,
    "data-disabled": t.isDisabled || void 0
  }, h.children);
}), me = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", $e = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2011.5L11.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M11.5%2011.5L4.5%204.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var xe = Object.defineProperty, ve = (e, t) => xe(e, "name", { value: t, configurable: !0 });
const V = ve((e) => l.jsx(S, { light: $e, dark: me, ...e }), "CloseIcon"), be = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%235BDB5B'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%235BDB5B'%20stroke-miterlimit='10'/%3e%3c/svg%3e", we = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%230D990D'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M11%206L7%2010L5%208'%20stroke='%230D990D'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ke = Object.defineProperty, Ce = (e, t) => ke(e, "name", { value: t, configurable: !0 });
const ye = Ce((e) => l.jsx(S, { light: we, dark: be, ...e }), "CheckmarkIcon"), Le = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23F69558'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23F69558'%20stroke-miterlimit='10'/%3e%3c/svg%3e", je = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.57992%2012.6651L7.54492%202.76006C7.75492%202.41006%208.23992%202.41006%208.44992%202.76006L14.4149%2012.6651C14.6349%2013.0301%2014.3799%2013.5001%2013.9599%2013.5001H2.03492C1.61992%2013.5001%201.36492%2013.0301%201.57992%2012.6651Z'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2012C8.41421%2012%208.75%2011.6642%208.75%2011.25C8.75%2010.8358%208.41421%2010.5%208%2010.5C7.58579%2010.5%207.25%2010.8358%207.25%2011.25C7.25%2011.6642%207.58579%2012%208%2012Z'%20fill='%23DB5F12'/%3e%3cpath%20d='M8%205.5V9.5'%20stroke='%23DB5F12'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ae = Object.defineProperty, Ne = (e, t) => Ae(e, "name", { value: t, configurable: !0 });
const Be = Ne((e) => l.jsx(S, { light: je, dark: Le, ...e }), "WarningIcon");
var Me = Object.defineProperty, Z = (e, t) => Me(e, "name", { value: t, configurable: !0 }), M;
((e) => {
  e.DEFAULT_CHARACTER_LIMIT = 255;
  function t(o) {
    return !o || o.length === 0 ? "Name cannot be empty" : o.length > 255 ? "Name is too long" : De.test(o) ? Fe(o) ? "Name is a reserved word" : null : "Names should start with a letter or underscore and can only contain letters, digits and underscores";
  }
  e.validateNameSyntax = t, Z(t, "validateNameSyntax");
})(M || (M = {}));
const Pe = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "false", "final", "finally", "float", "for", "if", "goto", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "true", "try", "void", "volatile", "while", "MendixObject", "__filename__", "changedby", "changeddate", "context", "createddate", "currentUser", "empty", "guid", "id", "object", "owner", "submetaobjectname", "type", "con"].map((e) => e.toLowerCase()).sort(), Fe = Z((e) => Pe.indexOf(e.toLowerCase()) > -1, "isReservedWord"), De = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
var Se = Object.defineProperty, j = (e, t) => Se(e, "name", { value: t, configurable: !0 }), G;
((e) => {
  function t(i) {
    if (!i) return "";
    const u = i.split("."), c = u.pop();
    if (!c) throw new Error(`Not a valid qualified name: "${i}"`);
    return u.length ? `${c} (${u.reverse().join(", ")})` : c;
  }
  e.beautifyQualifiedName = t, j(t, "beautifyQualifiedName");
  function o(i, u = "") {
    return (i == null ? void 0 : i.split(".").slice(-1)[0]) ?? u;
  }
  e.getName = o, j(o, "getName");
  function d(i) {
    return i.split("$").slice(-1)[0];
  }
  e.getClassName = d, j(d, "getClassName");
  function g(i, u = !0) {
    function c(h) {
      return h >= "A" && h <= "Z";
    }
    j(c, "isUpper");
    function s(h) {
      return h >= "a" && h <= "z";
    }
    j(s, "isLower");
    let p = i.charAt(0);
    for (let h = 1; h < i.length; h++) {
      const C = i.charAt(h - 1), b = i.charAt(h), L = i.charAt(h + 1);
      s(C) && c(b) ? p += ` ${u || c(L) ? b : b.toLowerCase()}` : c(C) && c(b) && s(L) ? p += ` ${u ? b : b.toLowerCase()}` : p += b;
    }
    return p;
  }
  e.deCamelCase = g, j(g, "deCamelCase");
  function m(i, u = !0, c = !0) {
    let s = i;
    return s = s.replace(/[^a-zA-Z0-9_ ]+/g, ""), s = s.replace(/[\s\xa0]+/g, " ").trim(), s = s.replace(/\W+/g, "_"), s.match(/^\d/) && (s = `_${s}`), u && M.validateNameSyntax(s) === "Name is a reserved word" && (s = `${s}_1`), c && M.validateNameSyntax(s) === "Name is too long" && (s = s.slice(0, M.DEFAULT_CHARACTER_LIMIT)), s;
  }
  e.sanitizeName = m, j(m, "sanitizeName");
  function $(i, u, c = 1) {
    for (let s = c; s < Te; s++) {
      const p = u + s;
      if (!i.includes(p)) return p;
    }
    throw new Error(`Cannot create prefixed name: Too many names generated using same prefix: ${u}`);
  }
  e.generatePrefixedName = $, j($, "generatePrefixedName");
})(G || (G = {}));
const Te = 1e6;
var Ie = Object.defineProperty, f = (e, t) => Ie(e, "name", { value: t, configurable: !0 });
function D(e, t = !1, o) {
  try {
    return e instanceof Error ? t ? e.message : JSON.stringify(e, Object.getOwnPropertyNames(e)) : typeof e == "string" ? e : JSON.stringify(e);
  } catch (d) {
    return o && D(o) || `<circular structure>: ${D(d)}`;
  }
}
f(D, "safeStringify");
var Ee;
((e) => {
  function t(r) {
    return r.replace(/\r\n|\r|\n/g, " ");
  }
  e.replaceNewLinesWithSpaces = t, f(t, "replaceNewLinesWithSpaces");
  function o(r) {
    return r.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
  }
  e.collapseWhitespace = o, f(o, "collapseWhitespace");
  function d(r) {
    return r.replace(/\W/g, "_").toLowerCase();
  }
  e.sanitizeForClassName = d, f(d, "sanitizeForClassName");
  function g(r, n, a = " ") {
    let x = String(r);
    const w = n - x.length;
    let k = -1;
    for (; ++k < w; ) x = a + x;
    return x;
  }
  e.leftpad = g, f(g, "leftpad");
  function m(r) {
    return r.split(/\s+/).map((n, a) => J(n, a) ? $(n) : n).join(" ");
  }
  e.titleCase = m, f(m, "titleCase");
  function $(r, n = !0) {
    if (!r) return r;
    const a = n ? r.substring(1).toLocaleLowerCase() : r.substring(1);
    return r[0].toLocaleUpperCase() + a;
  }
  e.toFirstUpper = $, f($, "toFirstUpper");
  function i(r, n, a) {
    return r.split(n).join(a);
  }
  e.replaceAll = i, f(i, "replaceAll");
  function u(r, n) {
    return !r && !n ? !0 : !r || !n ? !1 : r.toLocaleLowerCase() === n.toLocaleLowerCase();
  }
  e.equalsIgnoreCase = u, f(u, "equalsIgnoreCase");
  function c(r, n) {
    return r.toLocaleLowerCase().includes(n.toLocaleLowerCase());
  }
  e.containsIgnoreCase = c, f(c, "containsIgnoreCase");
  function s(r, n) {
    return r.startsWith(n) ? r : `${n}${r}`;
  }
  e.ensureStartsWith = s, f(s, "ensureStartsWith");
  function p(r, n = " and ") {
    if (r.length === 0) return "";
    if (r.length === 1) return r[0];
    const a = r[r.length - 1];
    return `${r.slice(0, r.length - 1).join(", ")}${n}${a}`;
  }
  e.formatList = p, f(p, "formatList");
  function h(r, n) {
    const a = "abcdefghijklmnopqrstuvwxyz", x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", w = "0123456789";
    let k = "", F = !1, H = !1, U = !1;
    for (; k.length < r || n && !(F && H && U); ) {
      const Y = Math.floor(Math.random() * 3);
      let B = "";
      switch (Y) {
        case 0:
          B = a, F = !0;
          break;
        case 1:
          B = x, H = !0;
          break;
        case 2:
          B = w, U = !0;
          break;
      }
      k += B[Math.floor(Math.random() * B.length)];
    }
    return k;
  }
  e.generateRandomString = h, f(h, "generateRandomString");
  function C(r, n) {
    return r.length < n ? r : r.slice(0, n - 1) + "…";
  }
  e.shortenToMaxLengthWithDots = C, f(C, "shortenToMaxLengthWithDots");
  function b(r, n, a = 1, x, w = !0) {
    return E(r, n, a, (k, F) => k === F, x, w);
  }
  e.getUniqueName = b, f(b, "getUniqueName");
  function L(r, n, a = 1, x) {
    return E(r, n, a, (w, k) => w.toLocaleLowerCase() === k.toLocaleLowerCase(), x);
  }
  e.getUniqueNameIgnoreCase = L, f(L, "getUniqueNameIgnoreCase");
  function P(r, n, a) {
    const x = (a == null ? void 0 : a.checkForReservedWords) ?? !0, w = (a == null ? void 0 : a.checkForLength) ?? !0, k = w && !(a != null && a.characterLimit) ? M.DEFAULT_CHARACTER_LIMIT : a == null ? void 0 : a.characterLimit;
    return L(G.sanitizeName(r, x, w), n, a == null ? void 0 : a.startSuffixIndex, k);
  }
  e.getSanitizedUniqueName = P, f(P, "getSanitizedUniqueName");
  function N(r, n) {
    if (r.length <= n) return r;
    const a = /.*(_\d+)$/.exec(r), x = a ? a[1] : "", w = n - x.length;
    return r.slice(0, w) + x;
  }
  e.shortenToMaxLength = N, f(N, "shortenToMaxLength");
})(Ee || (Ee = {}));
function J(e, t) {
  return !(e.length <= 2 && t > 0 || e.substring(1).search(/[A-Z]/) !== -1);
}
f(J, "shouldTitleCase");
const Oe = f((e, t) => `${e}_${t}`, "suffixedName"), _e = f((e) => `_${e}`.length, "suffixLength");
function E(e, t, o = 1, d, g, m = !0) {
  const $ = g ? e.substring(0, g) : e;
  if (!t.find((c) => d($, c))) return $;
  let i = o, u = $;
  do {
    const c = g ? e.substring(0, g - _e(i)) : $;
    u = m ? Oe(c, i) : c + i, i++;
  } while (t.find((c) => d(u, c)));
  return u;
}
f(E, "uniqueNameBoilerplate");
var He = Object.defineProperty, O = (e, t) => He(e, "name", { value: t, configurable: !0 });
function Ue(e) {
  (typeof e == "function" ? e() : e).then(() => {
  }).catch((t) => console.error("Error in ignored promise", t));
}
O(Ue, "ignorePromise");
function Q(e) {
  throw new Error("Unexpected object: " + D(e));
}
O(Q, "assertNever");
function We(e) {
}
O(We, "assertNeverSuppressError");
var ze = Object.defineProperty, K = (e, t) => ze(e, "name", { value: t, configurable: !0 });
function _(e) {
  switch (e) {
    case "warning":
      return A`
                background-color: ${({ theme: t }) => t.colorsBackgroundAlertWarning};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultOrange};
            `;
    case "info":
      return A`
                background-color: ${({ theme: t }) => t.colorsBackgroundAlertInformation};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultBlue};
            `;
    case "success":
      return A`
                background-color: ${({ theme: t }) => t.colorsBackgroundAlertSuccess};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGreen};
            `;
    case "danger":
      return A`
                background-color: ${({ theme: t }) => t.colorsBackgroundAlertDanger};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultRed};
            `;
    case "neutral":
      return A`
                background-color: ${({ theme: t }) => t.colorsBackgroundAlertNeutral};
                border-color: ${({ theme: t }) => t.colorsAccentDefaultGrey};
            `;
    default:
      Q(e);
  }
}
K(_, "getAlertStyleByType");
function X(e) {
  switch (e) {
    case "warning":
      return l.jsx(Be, {});
    case "info":
      return l.jsx(fe, {});
    case "success":
      return l.jsx(ye, {});
    case "danger":
      return l.jsx(ue, {});
    case "neutral":
      return null;
  }
}
K(X, "getAlertIconByType");
const Re = y.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: stretch;

    min-height: 28px;
    height: fit-content;

    padding: 0 8px;

    ${({ $showBorder: e }) => e && A`
            border-width: 1px 0;
            border-style: solid;
        `}

    ${({ $type: e }) => _(e)}
`, qe = y.div`
    padding: ${v.spacing4} ${v.spacing0};
    flex-grow: 1;

    text-overflow: ellipsis;
    overflow: hidden;
`;
var Ve = Object.defineProperty, Ze = (e, t) => Ve(e, "name", { value: t, configurable: !0 });
Ze(({ type: e = "neutral", icon: t, children: o, button: d, onClose: g }) => l.jsxs(Re, { $type: e, $showBorder: !0, role: "alert", children: [t, l.jsx(qe, { children: o }), d ? l.jsx(R, { onPress: d.onClick, children: d.caption }) : null, g ? l.jsx(q, { icon: l.jsx(V, {}), onPress: g }) : null] }), "Alert");
const Ge = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Je = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Qe = Object.defineProperty, Ke = (e, t) => Qe(e, "name", { value: t, configurable: !0 });
const Xe = Ke((e) => l.jsx(S, { light: Je, dark: Ge, ...e }), "ExternalLinkIcon");
var Ye = Object.defineProperty, et = (e, t) => Ye(e, "name", { value: t, configurable: !0 });
const tt = et(({ children: e, href: t, ...o }) => l.jsxs(rt, { href: t, ...o, children: [e ?? t, t && l.jsx(Xe, {})] }), "Link"), rt = y(pe)`
    font-size: ${v.fontSizeMd};
    line-height: ${v.lineHeightMd};
    color: ${({ theme: e }) => e.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${v.spacing4};
    }
`;
var nt = Object.defineProperty, at = (e, t) => nt(e, "name", { value: t, configurable: !0 });
const it = at(({ type: e = "info", title: t, children: o, link: d, button: g, onClose: m }) => l.jsxs(st, { $type: e, role: "alert", children: [X(e), l.jsxs(lt, { children: [t ? l.jsx(ct, { children: t }) : null, l.jsx(dt, { children: o }), d ? l.jsx(tt, { href: d.href, target: "_blank", rel: "external noreferrer", children: d.caption }) : null, g ? l.jsx(R, { onPress: g.onClick, children: g.caption }) : null] }), m ? l.jsx(ot, { icon: l.jsx(V, {}), onPress: m }) : null] }), "InlineAlert"), st = y.div`
    display: flex;
    flex-direction: row;
    gap: ${v.spacing8};
    justify-content: stretch;
    align-items: start;

    min-height: ${v.size28};
    height: fit-content;

    padding: ${v.spacing8};

    ${({ $type: e }) => _(e)}
`, ot = y(q)`
    border: 0;
    padding: 0;
`, lt = y.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: ${v.spacing4};
    & button {
        align-self: flex-start;
    }
`, ct = y.div`
    padding: ${v.spacing0};
    flex-grow: 1;
    line-height: ${v.lineHeightMd};
    font-weight: bold;

    text-overflow: ellipsis;
    overflow: hidden;
`, dt = y.div`
    padding: ${v.spacing0};
    flex-grow: 1;
    line-height: ${v.lineHeightMd};

    text-overflow: ellipsis;
    overflow: hidden;
`, ut = y.div`
    [role="alert"] {
        align-items: start;
        padding: 8px 8px;
        ${({ $transparent: e }) => e && "background: transparent;"}

        & > button {
            padding: 0px;
        }
        & > div {
            padding: 0px;
        }
        ul {
            margin-block-start: 8px;
            margin-block-end: 0px;
            padding: 0px 0px 0px 18px;
        }
    }
`, T = ({ children: e, type: t, onClose: o, transparent: d }) => /* @__PURE__ */ l.jsx(ut, { $transparent: d, children: /* @__PURE__ */ l.jsx(it, { type: t, onClose: o, children: e }) }), gt = (e) => /* @__PURE__ */ l.jsx(T, { ...e, type: "info" }), ht = (e) => /* @__PURE__ */ l.jsx(T, { ...e, type: "warning" }), pt = (e) => /* @__PURE__ */ l.jsx(T, { ...e, type: "danger" }), mt = (e) => /* @__PURE__ */ l.jsx(T, { ...e, type: "success" });
export {
  pt as E,
  gt as I,
  mt as S,
  ht as W,
  tt as y
};
