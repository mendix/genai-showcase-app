var Ne = Object.defineProperty;
var Pe = (t, e, r) => e in t ? Ne(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var G = (t, e, r) => Pe(t, typeof e != "symbol" ? e + "" : e, r);
function Ce(t) {
  return {
    href: t.href,
    protocol: t.protocol,
    username: t.username,
    password: t.password,
    host: t.host,
    hostname: t.hostname,
    port: t.port,
    pathname: t.pathname,
    search: t.search,
    searchParams: [...t.searchParams].map(([e, r]) => ({ key: e, value: r })),
    hash: t.hash,
    origin: t.origin
  };
}
const ne = {
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  overline: [53, 55],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};
function oe(t, e, r, n = !1) {
  const s = String(e), l = (f, u) => `\x1B[${u[0]}m${f}\x1B[${u[1]}m`, a = (f, u) => u != null && typeof u == "string" ? l(f, ne[u]) : u != null && Array.isArray(u) ? u.reduce((g, d) => a(g, d), f) : u != null && u[f.trim()] != null ? a(f, u[f.trim()]) : u != null && u["*"] != null ? a(f, u["*"]) : f, c = null;
  return s.replace(/{{(.+?)}}/g, (f, u) => {
    var d;
    const g = r[u] != null ? String(r[u]) : n ? "" : f;
    return t.stylePrettyLogs ? a(g, ((d = t == null ? void 0 : t.prettyLogStyles) == null ? void 0 : d[u]) ?? c) + l("", ne.reset) : g;
  });
}
function T(t, e = 2, r = 0) {
  return t != null && isNaN(t) ? "" : (t = t != null ? t + r : t, e === 2 ? t == null ? "--" : t < 10 ? "0" + t : t.toString() : t == null ? "---" : t < 10 ? "00" + t : t < 100 ? "0" + t : t.toString());
}
function ue(t, e) {
  var c, f, u, g, d, N, $, B, _, x, z, I, R, W, F, K, V, U, C;
  if (e == null)
    return {
      text: "",
      template: t.prettyLogTemplate,
      placeholders: {}
    };
  let r = t.prettyLogTemplate;
  const n = {};
  r.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}") ? r = r.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}") : t.prettyLogTimeZone === "UTC" ? (n.yyyy = ((c = e.date) == null ? void 0 : c.getUTCFullYear()) ?? "----", n.mm = T((f = e.date) == null ? void 0 : f.getUTCMonth(), 2, 1), n.dd = T((u = e.date) == null ? void 0 : u.getUTCDate(), 2), n.hh = T((g = e.date) == null ? void 0 : g.getUTCHours(), 2), n.MM = T((d = e.date) == null ? void 0 : d.getUTCMinutes(), 2), n.ss = T((N = e.date) == null ? void 0 : N.getUTCSeconds(), 2), n.ms = T(($ = e.date) == null ? void 0 : $.getUTCMilliseconds(), 3)) : (n.yyyy = ((B = e.date) == null ? void 0 : B.getFullYear()) ?? "----", n.mm = T((_ = e.date) == null ? void 0 : _.getMonth(), 2, 1), n.dd = T((x = e.date) == null ? void 0 : x.getDate(), 2), n.hh = T((z = e.date) == null ? void 0 : z.getHours(), 2), n.MM = T((I = e.date) == null ? void 0 : I.getMinutes(), 2), n.ss = T((R = e.date) == null ? void 0 : R.getSeconds(), 2), n.ms = T((W = e.date) == null ? void 0 : W.getMilliseconds(), 3));
  const s = t.prettyLogTimeZone === "UTC" ? e.date : e.date != null ? new Date(e.date.getTime() - e.date.getTimezoneOffset() * 6e4) : void 0;
  n.rawIsoStr = (s == null ? void 0 : s.toISOString()) ?? "", n.dateIsoStr = (s == null ? void 0 : s.toISOString().replace("T", " ").replace("Z", "")) ?? "", n.logLevelName = e.logLevelName, n.fileNameWithLine = ((F = e.path) == null ? void 0 : F.fileNameWithLine) ?? "", n.filePathWithLine = ((K = e.path) == null ? void 0 : K.filePathWithLine) ?? "", n.fullFilePath = ((V = e.path) == null ? void 0 : V.fullFilePath) ?? "";
  let l = (U = t.parentNames) == null ? void 0 : U.join(t.prettyErrorParentNamesSeparator);
  l = l != null && e.name != null ? l + t.prettyErrorParentNamesSeparator : void 0;
  const a = e.name != null || l != null ? `${l ?? ""}${e.name ?? ""}` : "";
  return n.name = a, n.nameWithDelimiterPrefix = a.length > 0 ? t.prettyErrorLoggerNameDelimiter + a : "", n.nameWithDelimiterSuffix = a.length > 0 ? a + t.prettyErrorLoggerNameDelimiter : "", ((C = t.overwrite) == null ? void 0 : C.addPlaceholders) != null && t.overwrite.addPlaceholders(e, n), {
    text: oe(t, r, n),
    template: r,
    placeholders: n
  };
}
const he = [
  /(?:^|[\\/])node_modules[\\/].*tslog/i,
  /(?:^|[\\/])deps[\\/].*tslog/i,
  /tslog[\\/]+src[\\/]+internal[\\/]/i,
  /tslog[\\/]+src[\\/]BaseLogger/i,
  /tslog[\\/]+src[\\/]index/i
];
function Te(t) {
  const e = typeof (t == null ? void 0 : t.stack) == "string" ? t.stack : void 0;
  return e == null || e.length === 0 ? [] : e.split(`
`).map((r) => r.trimEnd());
}
function je(t) {
  return t.filter((e) => e.length > 0 && !/^\s*Error\b/.test(e));
}
function Ae(t, e) {
  const r = [];
  for (const n of t) {
    const s = e(n);
    s != null && r.push(s);
  }
  return r;
}
function Be(t, e = he) {
  for (let r = 0; r < t.length; r += 1) {
    const n = t[r], s = n.filePath ?? "", l = n.fullFilePath ?? "";
    if (!e.some((a) => a.test(s) || a.test(l)))
      return r;
  }
  return 0;
}
function Me(t) {
  return je(Te(t));
}
function v(t, e) {
  return Ae(Me(t), e);
}
function le(t, e) {
  return t < 0 ? 0 : t >= e ? Math.max(0, e - 1) : t;
}
function ce() {
  return [...he];
}
const Fe = 5;
function De(t, e = {}) {
  const r = e.maxDepth ?? Fe, n = [], s = /* @__PURE__ */ new Set();
  let l = t, a = 0;
  for (; l != null && a < r; ) {
    const c = l == null ? void 0 : l.cause;
    if (c == null || s.has(c))
      break;
    s.add(c), n.push(pe(c)), l = c, a += 1;
  }
  return n;
}
function pe(t) {
  if (t instanceof Error)
    return t;
  const e = new Error(typeof t == "string" ? t : JSON.stringify(t));
  return typeof t == "object" && t != null && Object.assign(e, t), e;
}
function de(t) {
  const e = /* @__PURE__ */ new Set();
  return JSON.stringify(t, (r, n) => {
    if (typeof n == "object" && n !== null) {
      if (e.has(n))
        return "[Circular]";
      e.add(n);
    }
    return typeof n == "bigint" ? `${n}` : typeof n > "u" ? "[undefined]" : n;
  });
}
function P(t, e) {
  const r = {
    seen: [],
    stylize: me
  };
  return e != null && Se(r, e), H(r.showHidden) && (r.showHidden = !1), H(r.depth) && (r.depth = 2), H(r.colors) && (r.colors = !0), H(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = _e), Z(r, t, r.depth);
}
P.colors = ne;
P.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
function $e(t) {
  return typeof t == "boolean";
}
function H(t) {
  return t === void 0;
}
function me(t) {
  return t;
}
function _e(t, e) {
  var n, s, l, a;
  const r = P.styles[e];
  return r != null && ((s = (n = P == null ? void 0 : P.colors) == null ? void 0 : n[r]) == null ? void 0 : s[0]) != null && ((a = (l = P == null ? void 0 : P.colors) == null ? void 0 : l[r]) == null ? void 0 : a[1]) != null ? "\x1B[" + P.colors[r][0] + "m" + t + "\x1B[" + P.colors[r][1] + "m" : t;
}
function Y(t) {
  return typeof t == "function";
}
function ye(t) {
  return typeof t == "string";
}
function xe(t) {
  return typeof t == "number";
}
function ge(t) {
  return t === null;
}
function be(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function ee(t) {
  return X(t) && se(t) === "[object RegExp]";
}
function X(t) {
  return typeof t == "object" && t !== null;
}
function te(t) {
  return X(t) && (se(t) === "[object Error]" || t instanceof Error);
}
function fe(t) {
  return X(t) && se(t) === "[object Date]";
}
function se(t) {
  return Object.prototype.toString.call(t);
}
function ze(t) {
  const e = {};
  return t.forEach((r) => {
    e[r] = !0;
  }), e;
}
function Ie(t, e, r, n, s) {
  const l = [];
  for (let a = 0, c = e.length; a < c; ++a)
    be(e, String(a)) ? l.push(ie(t, e, r, n, String(a), !0)) : l.push("");
  return s.forEach((a) => {
    a.match(/^\d+$/) || l.push(ie(t, e, r, n, a, !0));
  }), l;
}
function re(t) {
  return "[" + Error.prototype.toString.call(t) + "]";
}
function Z(t, e, r = 0) {
  if (t.customInspect && e != null && Y(e) && (e == null ? void 0 : e.inspect) !== P && !(e != null && e.constructor && (e == null ? void 0 : e.constructor.prototype) === e)) {
    if (typeof e.inspect != "function" && e.toString != null)
      return e.toString();
    let g = e == null ? void 0 : e.inspect(r, t);
    return ye(g) || (g = Z(t, g, r)), g;
  }
  const n = D(t, e);
  if (n)
    return n;
  let s = Object.keys(e);
  const l = ze(s);
  try {
    t.showHidden && Object.getOwnPropertyNames && (s = Object.getOwnPropertyNames(e));
  } catch {
  }
  if (te(e) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
    return re(e);
  if (s.length === 0)
    if (Y(t.stylize)) {
      if (Y(e)) {
        const g = e.name ? ": " + e.name : "";
        return t.stylize("[Function" + g + "]", "special");
      }
      if (ee(e))
        return t.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (fe(e))
        return t.stylize(Date.prototype.toISOString.call(e), "date");
      if (te(e))
        return re(e);
    } else
      return e;
  let a = "", c = !1, f = [`{
`, `
}`];
  if (Array.isArray(e) && (c = !0, f = [`[
`, `
]`]), Y(e) && (a = " [Function" + (e.name ? ": " + e.name : "") + "]"), ee(e) && (a = " " + RegExp.prototype.toString.call(e)), fe(e) && (a = " " + Date.prototype.toUTCString.call(e)), te(e) && (a = " " + re(e)), s.length === 0 && (!c || e.length == 0))
    return f[0] + a + f[1];
  if (r < 0)
    return ee(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
  t.seen.push(e);
  let u;
  return c ? u = Ie(t, e, r, l, s) : u = s.map((g) => ie(t, e, r, l, g, c)), t.seen.pop(), Re(u, a, f);
}
function ie(t, e, r, n, s, l) {
  let a, c, f = { value: void 0 };
  try {
    f.value = e[s];
  } catch {
  }
  try {
    Object.getOwnPropertyDescriptor && (f = Object.getOwnPropertyDescriptor(e, s) || f);
  } catch {
  }
  if (f.get ? f.set ? c = t.stylize("[Getter/Setter]", "special") : c = t.stylize("[Getter]", "special") : f.set && (c = t.stylize("[Setter]", "special")), be(n, s) || (a = "[" + s + "]"), c || (t.seen.indexOf(f.value) < 0 ? (ge(r) ? c = Z(t, f.value, void 0) : c = Z(t, f.value, r - 1), c.indexOf(`
`) > -1 && (l ? c = c.split(`
`).map((u) => "  " + u).join(`
`).substr(2) : c = `
` + c.split(`
`).map((u) => "   " + u).join(`
`))) : c = t.stylize("[Circular]", "special")), H(a)) {
    if (l && s.match(/^\d+$/))
      return c;
    a = JSON.stringify("" + s), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, "\\'").replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"));
  }
  return a + ": " + c;
}
function D(t, e) {
  if (H(e))
    return t.stylize("undefined", "undefined");
  if (ye(e)) {
    const r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") + "'";
    return t.stylize(r, "string");
  }
  if (xe(e))
    return t.stylize("" + e, "number");
  if ($e(e))
    return t.stylize("" + e, "boolean");
  if (ge(e))
    return t.stylize("null", "null");
}
function Re(t, e, r) {
  return r[0] + (e === "" ? "" : e + `
`) + "  " + t.join(`,
  `) + " " + r[1];
}
function Se(t, e) {
  const r = { ...t };
  if (!e || !X(e))
    return t;
  const n = { ...e }, s = Object.keys(e);
  let l = s.length;
  for (; l--; )
    r[s[l]] = n[s[l]];
  return r;
}
function We(t, ...e) {
  const r = {
    seen: [],
    stylize: me
  };
  t != null && Se(r, t);
  const n = e[0];
  let s = 0, l = "", a = "";
  if (typeof n == "string") {
    if (e.length === 1)
      return n;
    let c, f = 0;
    for (let u = 0; u < n.length - 1; u++)
      if (n.charCodeAt(u) === 37) {
        const g = n.charCodeAt(++u);
        if (s + 1 !== e.length) {
          switch (g) {
            case 115: {
              const d = e[++s];
              typeof d == "number" || typeof d == "bigint" ? c = D(r, d) : typeof d != "object" || d === null ? c = String(d) : c = P(d, {
                ...t,
                compact: 3,
                colors: !1,
                depth: 0
              });
              break;
            }
            case 106:
              c = de(e[++s]);
              break;
            case 100: {
              const d = e[++s];
              typeof d == "bigint" ? c = D(r, d) : typeof d == "symbol" ? c = "NaN" : c = D(r, d);
              break;
            }
            case 79:
              c = P(e[++s], t);
              break;
            case 111:
              c = P(e[++s], {
                ...t,
                showHidden: !0,
                showProxy: !0,
                depth: 4
              });
              break;
            case 105: {
              const d = e[++s];
              typeof d == "bigint" ? c = D(r, d) : typeof d == "symbol" ? c = "NaN" : c = D(r, parseInt(c));
              break;
            }
            case 102: {
              const d = e[++s];
              typeof d == "symbol" ? c = "NaN" : c = D(r, parseInt(d));
              break;
            }
            case 99:
              s += 1, c = "";
              break;
            case 37:
              l += n.slice(f, u), f = u + 1;
              continue;
            default:
              continue;
          }
          f !== u - 1 && (l += n.slice(f, u - 1)), l += c, f = u + 1;
        } else g === 37 && (l += n.slice(f, u), f = u + 1);
      }
    f !== 0 && (s++, a = " ", f < n.length && (l += n.slice(f)));
  }
  for (; s < e.length; ) {
    const c = e[s];
    l += a, l += typeof c != "string" ? P(c, t) : c, a = " ", s++;
  }
  return l;
}
function Ke() {
  try {
    const t = globalThis == null ? void 0 : globalThis.process;
    if (typeof (t == null ? void 0 : t.cwd) == "function")
      return t.cwd();
  } catch {
  }
  try {
    const t = globalThis == null ? void 0 : globalThis.Deno;
    if (typeof (t == null ? void 0 : t.cwd) == "function")
      return t.cwd();
  } catch {
  }
}
function we() {
  return typeof window < "u" && typeof document < "u";
}
function Ve() {
  var n, s;
  if (!we())
    return !1;
  const t = globalThis == null ? void 0 : globalThis.navigator, e = (t == null ? void 0 : t.userAgent) ?? "";
  if (/firefox/i.test(e))
    return !0;
  const r = globalThis;
  return (s = (n = r == null ? void 0 : r.CSS) == null ? void 0 : n.supports) != null && s.call(n, "color", "#000") ? !0 : /safari/i.test(e) && !/chrome/i.test(e);
}
function Ue() {
  const t = U(), e = W(t), r = t.name === "browser" || t.name === "worker", n = r ? [...ce(), /node_modules[\\/].*tslog/i] : [...ce(), /node:(?:internal|vm)/i, /\binternal[\\/]/i];
  let s;
  const l = {
    getMeta(o, i, h, p, m, y) {
      return Object.assign({}, e, {
        name: m,
        parentNames: y,
        date: /* @__PURE__ */ new Date(),
        logLevelId: o,
        logLevelName: i,
        path: p ? void 0 : l.getCallerStackFrame(h)
      });
    },
    getCallerStackFrame(o, i = new Error()) {
      const h = v(i, (O) => a(O));
      if (h.length === 0)
        return {};
      const p = Be(h, n), m = Number.isFinite(o) && o >= 0, y = le(m ? o : p, h.length);
      return h[y] ?? {};
    },
    getErrorTrace(o) {
      return v(o, (i) => a(i));
    },
    isError(o) {
      return ke(o);
    },
    isBuffer(o) {
      return typeof Buffer < "u" && typeof Buffer.isBuffer == "function" ? Buffer.isBuffer(o) : !1;
    },
    prettyFormatLogObj(o, i) {
      return o.reduce((h, p) => (l.isError(p) ? h.errors.push(l.prettyFormatErrorObj(p, i)) : h.args.push(p), h), { args: [], errors: [] });
    },
    prettyFormatErrorObj(o, i) {
      const h = u(l.getErrorTrace(o), i), p = De(o).map((y, O) => {
        const k = `Caused by (${O + 1}): ${y.name ?? "Error"}${y.message ? `: ${y.message}` : ""}`, S = u(v(y, (w) => a(w)), i);
        return [k, ...S].join(`
`);
      }), m = {
        errorName: ` ${o.name} `,
        errorMessage: g(o),
        errorStack: [...h, ...p].join(`
`)
      };
      return oe(i, i.prettyErrorTemplate, m);
    },
    transportFormatted(o, i, h, p, m) {
      const y = m.stylePrettyLogs !== !1, O = (h.length > 0 && i.length > 0 ? `
` : "") + h.join(`
`), k = N(o), S = y ? o : k;
      if (d(y)) {
        m.prettyInspectOptions.colors = !1;
        const E = F(m.prettyInspectOptions, i), b = p != null ? $(m, p) : { text: k, styles: [] }, L = b.text.length > 0 && b.styles.length > 0, M = (L ? b.text : k) + E + O;
        L ? console.log(M, ...b.styles) : console.log(M);
        return;
      }
      m.prettyInspectOptions.colors = y;
      const w = F(m.prettyInspectOptions, i);
      console.log(S + w + O);
    },
    transportJSON(o) {
      console.log(de(o));
    }
  };
  return Oe() === "test" && (l.__resetWorkingDirectoryCacheForTests = () => {
    s = void 0;
  }), l;
  function a(o) {
    return r ? f(o) : c(o);
  }
  function c(o) {
    if (typeof o != "string" || o.length === 0)
      return;
    const i = o.trim();
    if (!i.includes(" at ") && !i.startsWith("at "))
      return;
    const h = i.replace(/^at\s+/, "");
    let p, m = h;
    const y = h.match(/^(.*?)\s+\((.*)\)$/);
    y && (p = y[1], m = y[2]);
    const O = m.replace(/^\(/, "").replace(/\)$/, ""), k = O.replace(/\?.*$/, "");
    let S, w, E = k;
    const b = k.split(":");
    b.length >= 3 && /^\d+$/.test(b[b.length - 1] ?? "") ? (w = b.pop(), S = b.pop(), E = b.join(":")) : b.length >= 2 && /^\d+$/.test(b[b.length - 1] ?? "") && (S = b.pop(), E = b.join(":"));
    let L = E.replace(/^file:\/\//, "");
    const A = z();
    A != null && L.startsWith(A) && (L = L.slice(A.length), L = L.replace(/^[\\/]/, "")), L.length === 0 && (L = E);
    const M = V(L), Q = M.length > 0 ? M : L, ae = Q.split(/\\|\//), q = ae[ae.length - 1], Ee = q && S ? `${q}:${S}` : void 0, Le = Q && S ? `${Q}:${S}` : void 0;
    return {
      fullFilePath: O,
      fileName: q,
      fileNameWithLine: Ee,
      fileColumn: w,
      fileLine: S,
      filePath: Q,
      filePathWithLine: Le,
      method: p
    };
  }
  function f(o) {
    var S, w;
    const i = (S = globalThis.location) == null ? void 0 : S.origin;
    if (o == null)
      return;
    const h = o.match(Qe);
    if (!h)
      return;
    const p = (w = h[1]) == null ? void 0 : w.replace(/\?.*$/, "");
    if (p == null)
      return;
    const m = p.split("/"), y = h[2], O = h[3], k = m[m.length - 1];
    return {
      fullFilePath: i ? `${i}${p}` : p,
      fileName: k,
      fileNameWithLine: k && y ? `${k}:${y}` : void 0,
      fileColumn: O,
      fileLine: y,
      filePath: p,
      filePathWithLine: y ? `${p}:${y}` : void 0,
      method: void 0
    };
  }
  function u(o, i) {
    return o.map((h) => oe(i, i.prettyErrorStackTemplate, { ...h }, !0));
  }
  function g(o) {
    return Object.getOwnPropertyNames(o).filter((i) => i !== "stack" && i !== "cause").reduce((i, h) => {
      const p = o[h];
      return typeof p == "function" || i.push(String(p)), i;
    }, []).join(", ");
  }
  function d(o) {
    return o && (t.name === "browser" || t.name === "worker") && Ve();
  }
  function N(o) {
    return o.replace(He, "");
  }
  function $(o, i) {
    var w;
    if (i == null)
      return { text: "", styles: [] };
    const { template: h, placeholders: p } = ue(o, i), m = [], y = [];
    let O = 0;
    const k = /{{(.+?)}}/g;
    let S;
    for (; (S = k.exec(h)) != null; ) {
      S.index > O && m.push(h.slice(O, S.index));
      const E = S[1], b = p[E] != null ? String(p[E]) : "", L = B((w = o.prettyLogStyles) == null ? void 0 : w[E], b), A = _(L);
      A.length > 0 ? (m.push(`%c${b}%c`), y.push(A, "")) : m.push(b), O = k.lastIndex;
    }
    return O < h.length && m.push(h.slice(O)), {
      text: m.join(""),
      styles: y
    };
  }
  function B(o, i) {
    if (o == null)
      return [];
    if (typeof o == "string")
      return [o];
    if (Array.isArray(o))
      return o.flatMap((h) => B(h, i));
    if (typeof o == "object") {
      const h = i.trim(), p = o[h] ?? o["*"];
      return p == null ? [] : B(p, i);
    }
    return [];
  }
  function _(o) {
    const i = /* @__PURE__ */ new Set(), h = [];
    for (const p of o) {
      const m = x(p);
      m != null && m.length > 0 && !i.has(m) && (i.add(m), h.push(m));
    }
    return h.join("; ");
  }
  function x(o) {
    const i = Ge[o];
    if (i != null)
      return `color: ${i}`;
    const h = Je[o];
    if (h != null)
      return `background-color: ${h}`;
    switch (o) {
      case "bold":
        return "font-weight: bold";
      case "dim":
        return "opacity: 0.75";
      case "italic":
        return "font-style: italic";
      case "underline":
        return "text-decoration: underline";
      case "overline":
        return "text-decoration: overline";
      case "inverse":
        return "filter: invert(1)";
      case "hidden":
        return "visibility: hidden";
      case "strikethrough":
        return "text-decoration: line-through";
      default:
        return;
    }
  }
  function z() {
    return s === void 0 && (s = Ke() ?? null), s ?? void 0;
  }
  function I() {
    return t.name === "node" || t.name === "deno" || t.name === "bun";
  }
  function R() {
    return t.name === "node" || t.name === "deno" || t.name === "bun";
  }
  function W(o) {
    if (o.name === "browser" || o.name === "worker")
      return {
        runtime: o.name,
        browser: o.userAgent
      };
    const i = {
      runtime: o.name
    };
    return R() && (i.runtimeVersion = o.version ?? "unknown"), I() && (i.hostname = o.hostname ?? "unknown"), i;
  }
  function F(o, i) {
    try {
      return We(o, ...i);
    } catch {
      return i.map(K).join(" ");
    }
  }
  function K(o) {
    if (typeof o == "string")
      return o;
    try {
      return JSON.stringify(o);
    } catch {
      return String(o);
    }
  }
  function V(o) {
    if (typeof o != "string" || o.length === 0)
      return o;
    const i = o.replace(/\\+/g, "\\").replace(/\\/g, "/"), h = i.startsWith("//"), p = i.startsWith("/") && !h, m = i.match(/^[A-Za-z]:/), y = m ? m[0] : "", k = (y ? i.slice(y.length) : i).split("/"), S = [];
    for (const E of k)
      if (!(E === "" || E === ".")) {
        if (E === "..") {
          S.length > 0 && S.pop();
          continue;
        }
        S.push(E);
      }
    let w = S.join("/");
    return h ? w = `//${w}` : p ? w = `/${w}` : y !== "" && (w = `${y}${w.length > 0 ? `/${w}` : ""}`), w.length === 0 ? o : w;
  }
  function U() {
    var h, p, m, y, O, k, S, w, E;
    if (we()) {
      const b = globalThis.navigator;
      return {
        name: "browser",
        userAgent: b == null ? void 0 : b.userAgent
      };
    }
    const o = globalThis;
    if (typeof o.importScripts == "function")
      return {
        name: "worker",
        userAgent: (h = o.navigator) == null ? void 0 : h.userAgent
      };
    const i = globalThis;
    if (i.Bun != null) {
      const b = i.Bun.version;
      return {
        name: "bun",
        version: b != null ? `bun/${b}` : void 0,
        hostname: C(i.process, i.Deno, i.Bun, i.location)
      };
    }
    if (i.Deno != null) {
      const b = J(i.Deno), L = (m = (p = i.Deno) == null ? void 0 : p.version) == null ? void 0 : m.deno;
      return {
        name: "deno",
        version: L != null ? `deno/${L}` : void 0,
        hostname: b ?? C(i.process, i.Deno, i.Bun, i.location)
      };
    }
    return ((O = (y = i.process) == null ? void 0 : y.versions) == null ? void 0 : O.node) != null || ((k = i.process) == null ? void 0 : k.version) != null ? {
      name: "node",
      version: ((w = (S = i.process) == null ? void 0 : S.versions) == null ? void 0 : w.node) ?? ((E = i.process) == null ? void 0 : E.version),
      hostname: C(i.process, i.Deno, i.Bun, i.location)
    } : i.process != null ? {
      name: "node",
      version: "unknown",
      hostname: C(i.process, i.Deno, i.Bun, i.location)
    } : {
      name: "unknown"
    };
  }
  function C(o, i, h, p) {
    var O, k, S, w, E, b, L;
    const m = ((O = o == null ? void 0 : o.env) == null ? void 0 : O.HOSTNAME) ?? ((k = o == null ? void 0 : o.env) == null ? void 0 : k.HOST) ?? ((S = o == null ? void 0 : o.env) == null ? void 0 : S.COMPUTERNAME);
    if (m != null && m.length > 0)
      return m;
    const y = ((w = h == null ? void 0 : h.env) == null ? void 0 : w.HOSTNAME) ?? ((E = h == null ? void 0 : h.env) == null ? void 0 : E.HOST) ?? ((b = h == null ? void 0 : h.env) == null ? void 0 : b.COMPUTERNAME);
    if (y != null && y.length > 0)
      return y;
    try {
      const A = (L = i == null ? void 0 : i.env) == null ? void 0 : L.get;
      if (typeof A == "function") {
        const M = A("HOSTNAME");
        if (M != null && M.length > 0)
          return M;
      }
    } catch {
    }
    if ((p == null ? void 0 : p.hostname) != null && p.hostname.length > 0)
      return p.hostname;
  }
  function J(o) {
    var h;
    try {
      if (typeof (o == null ? void 0 : o.hostname) == "function") {
        const p = o.hostname();
        if (p != null && p.length > 0)
          return p;
      }
    } catch {
    }
    const i = (h = globalThis.location) == null ? void 0 : h.hostname;
    if (i != null && i.length > 0)
      return i;
  }
  function Oe() {
    var i;
    const o = globalThis == null ? void 0 : globalThis.process;
    return (i = o == null ? void 0 : o.env) == null ? void 0 : i.NODE_ENV;
  }
  function ke(o) {
    if (o instanceof Error)
      return !0;
    if (o != null && typeof o == "object") {
      const i = Object.prototype.toString.call(o);
      if (/\[object .*Error\]/.test(i))
        return !0;
      const h = o.name;
      if (typeof h == "string" && h.endsWith("Error"))
        return !0;
    }
    return !1;
  }
}
const He = /\u001b\[[0-9;]*m/g, Ge = {
  black: "#000000",
  red: "#ef5350",
  green: "#66bb6a",
  yellow: "#fdd835",
  blue: "#42a5f5",
  magenta: "#ab47bc",
  cyan: "#26c6da",
  white: "#fafafa",
  blackBright: "#424242",
  redBright: "#ff7043",
  greenBright: "#81c784",
  yellowBright: "#ffe082",
  blueBright: "#64b5f6",
  magentaBright: "#ce93d8",
  cyanBright: "#4dd0e1",
  whiteBright: "#ffffff"
}, Je = {
  bgBlack: "#000000",
  bgRed: "#ef5350",
  bgGreen: "#66bb6a",
  bgYellow: "#fdd835",
  bgBlue: "#42a5f5",
  bgMagenta: "#ab47bc",
  bgCyan: "#26c6da",
  bgWhite: "#fafafa",
  bgBlackBright: "#424242",
  bgRedBright: "#ff7043",
  bgGreenBright: "#81c784",
  bgYellowBright: "#ffe082",
  bgBlueBright: "#64b5f6",
  bgMagentaBright: "#ce93d8",
  bgCyanBright: "#4dd0e1",
  bgWhiteBright: "#ffffff"
}, Qe = /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/, j = Ue();
class Ye {
  constructor(e, r, n = Number.NaN) {
    var s, l, a, c, f, u, g, d;
    this.logObj = r, this.stackDepthLevel = n, this.runtime = j, this.maxErrorCauseDepth = 5, this.settings = {
      type: (e == null ? void 0 : e.type) ?? "pretty",
      name: e == null ? void 0 : e.name,
      parentNames: e == null ? void 0 : e.parentNames,
      minLevel: (e == null ? void 0 : e.minLevel) ?? 0,
      argumentsArrayName: e == null ? void 0 : e.argumentsArrayName,
      hideLogPositionForProduction: (e == null ? void 0 : e.hideLogPositionForProduction) ?? !1,
      prettyLogTemplate: (e == null ? void 0 : e.prettyLogTemplate) ?? "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	{{filePathWithLine}}{{nameWithDelimiterPrefix}}	",
      prettyErrorTemplate: (e == null ? void 0 : e.prettyErrorTemplate) ?? `
{{errorName}} {{errorMessage}}
error stack:
{{errorStack}}`,
      prettyErrorStackTemplate: (e == null ? void 0 : e.prettyErrorStackTemplate) ?? `  • {{fileName}}	{{method}}
	{{filePathWithLine}}`,
      prettyErrorParentNamesSeparator: (e == null ? void 0 : e.prettyErrorParentNamesSeparator) ?? ":",
      prettyErrorLoggerNameDelimiter: (e == null ? void 0 : e.prettyErrorLoggerNameDelimiter) ?? "	",
      stylePrettyLogs: (e == null ? void 0 : e.stylePrettyLogs) ?? !0,
      prettyLogTimeZone: (e == null ? void 0 : e.prettyLogTimeZone) ?? "UTC",
      prettyLogStyles: (e == null ? void 0 : e.prettyLogStyles) ?? {
        logLevelName: {
          "*": ["bold", "black", "bgWhiteBright", "dim"],
          SILLY: ["bold", "white"],
          TRACE: ["bold", "whiteBright"],
          DEBUG: ["bold", "green"],
          INFO: ["bold", "blue"],
          WARN: ["bold", "yellow"],
          ERROR: ["bold", "red"],
          FATAL: ["bold", "redBright"]
        },
        dateIsoStr: "white",
        filePathWithLine: "white",
        name: ["white", "bold"],
        nameWithDelimiterPrefix: ["white", "bold"],
        nameWithDelimiterSuffix: ["white", "bold"],
        errorName: ["bold", "bgRedBright", "whiteBright"],
        fileName: ["yellow"],
        fileNameWithLine: "white"
      },
      prettyInspectOptions: (e == null ? void 0 : e.prettyInspectOptions) ?? {
        colors: !0,
        compact: !1,
        depth: 1 / 0
      },
      metaProperty: (e == null ? void 0 : e.metaProperty) ?? "_meta",
      maskPlaceholder: (e == null ? void 0 : e.maskPlaceholder) ?? "[***]",
      maskValuesOfKeys: (e == null ? void 0 : e.maskValuesOfKeys) ?? ["password"],
      maskValuesOfKeysCaseInsensitive: (e == null ? void 0 : e.maskValuesOfKeysCaseInsensitive) ?? !1,
      maskValuesRegEx: e == null ? void 0 : e.maskValuesRegEx,
      prefix: [...(e == null ? void 0 : e.prefix) ?? []],
      attachedTransports: [...(e == null ? void 0 : e.attachedTransports) ?? []],
      overwrite: {
        mask: (s = e == null ? void 0 : e.overwrite) == null ? void 0 : s.mask,
        toLogObj: (l = e == null ? void 0 : e.overwrite) == null ? void 0 : l.toLogObj,
        addMeta: (a = e == null ? void 0 : e.overwrite) == null ? void 0 : a.addMeta,
        addPlaceholders: (c = e == null ? void 0 : e.overwrite) == null ? void 0 : c.addPlaceholders,
        formatMeta: (f = e == null ? void 0 : e.overwrite) == null ? void 0 : f.formatMeta,
        formatLogObj: (u = e == null ? void 0 : e.overwrite) == null ? void 0 : u.formatLogObj,
        transportFormatted: (g = e == null ? void 0 : e.overwrite) == null ? void 0 : g.transportFormatted,
        transportJSON: (d = e == null ? void 0 : e.overwrite) == null ? void 0 : d.transportJSON
      }
    }, this.captureStackForMeta = this._shouldCaptureStack();
  }
  log(e, r, ...n) {
    var $, B, _, x, z, I, R, W, F, K, V, U;
    if (e < this.settings.minLevel)
      return;
    const s = this._resolveLogArguments(n), l = [...this.settings.prefix, ...s], a = (($ = this.settings.overwrite) == null ? void 0 : $.mask) != null ? (B = this.settings.overwrite) == null ? void 0 : B.mask(l) : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0 ? this._mask(l) : l, c = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0, f = ((_ = this.settings.overwrite) == null ? void 0 : _.toLogObj) != null ? (x = this.settings.overwrite) == null ? void 0 : x.toLogObj(a, c) : this._toLogObj(a, c), u = ((z = this.settings.overwrite) == null ? void 0 : z.addMeta) != null ? (I = this.settings.overwrite) == null ? void 0 : I.addMeta(f, e, r) : this._addMetaToLogObj(f, e, r), g = u == null ? void 0 : u[this.settings.metaProperty];
    let d, N;
    if (((R = this.settings.overwrite) == null ? void 0 : R.formatMeta) != null && (d = (W = this.settings.overwrite) == null ? void 0 : W.formatMeta(u == null ? void 0 : u[this.settings.metaProperty])), ((F = this.settings.overwrite) == null ? void 0 : F.formatLogObj) != null && (N = (K = this.settings.overwrite) == null ? void 0 : K.formatLogObj(a, this.settings)), this.settings.type === "pretty" && (d = d ?? this._prettyFormatLogObjMeta(u == null ? void 0 : u[this.settings.metaProperty]), N = N ?? j.prettyFormatLogObj(a, this.settings)), d != null && N != null)
      if (((V = this.settings.overwrite) == null ? void 0 : V.transportFormatted) != null) {
        const C = this.settings.overwrite.transportFormatted, J = C.length;
        J < 4 ? C(d, N.args, N.errors) : J === 4 ? C(d, N.args, N.errors, g) : C(d, N.args, N.errors, g, this.settings);
      } else
        j.transportFormatted(d, N.args, N.errors, g, this.settings);
    else
      ((U = this.settings.overwrite) == null ? void 0 : U.transportJSON) != null ? this.settings.overwrite.transportJSON(u) : this.settings.type !== "hidden" && j.transportJSON(u);
    return this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0 && this.settings.attachedTransports.forEach((C) => {
      C(u);
    }), u;
  }
  attachTransport(e) {
    this.settings.attachedTransports.push(e);
  }
  getSubLogger(e, r) {
    var l, a, c;
    const n = {
      ...this.settings,
      ...e,
      parentNames: ((l = this.settings) == null ? void 0 : l.parentNames) != null && ((a = this.settings) == null ? void 0 : a.name) != null ? [...this.settings.parentNames, this.settings.name] : ((c = this.settings) == null ? void 0 : c.name) != null ? [this.settings.name] : void 0,
      prefix: [...this.settings.prefix, ...(e == null ? void 0 : e.prefix) ?? []]
    };
    return new this.constructor(n, r ?? this.logObj, this.stackDepthLevel);
  }
  _mask(e) {
    const r = this._getMaskKeys();
    return e == null ? void 0 : e.map((n) => this._recursiveCloneAndMaskValuesOfKeys(n, r));
  }
  _getMaskKeys() {
    var n;
    const e = this.settings.maskValuesOfKeys ?? [], r = e.map(String).join("|");
    if (this.settings.maskValuesOfKeysCaseInsensitive === !0) {
      if (((n = this.maskKeysCache) == null ? void 0 : n.source) === e && this.maskKeysCache.caseInsensitive === !0 && this.maskKeysCache.signature === r)
        return this.maskKeysCache.normalized;
      const s = e.map((l) => typeof l == "string" ? l.toLowerCase() : String(l).toLowerCase());
      return this.maskKeysCache = {
        source: e,
        caseInsensitive: !0,
        normalized: s,
        signature: r
      }, s;
    }
    return this.maskKeysCache = {
      source: e,
      caseInsensitive: !1,
      normalized: e,
      signature: r
    }, e;
  }
  _resolveLogArguments(e) {
    if (e.length === 1 && typeof e[0] == "function") {
      const r = e[0];
      if (r.length === 0) {
        const n = r();
        return Array.isArray(n) ? n : [n];
      }
    }
    return e;
  }
  _recursiveCloneAndMaskValuesOfKeys(e, r, n = []) {
    var s, l;
    if (n.includes(e))
      return { ...e };
    if (typeof e == "object" && e !== null && n.push(e), j.isError(e) || j.isBuffer(e))
      return e;
    if (e instanceof Map)
      return new Map(e);
    if (e instanceof Set)
      return new Set(e);
    if (Array.isArray(e))
      return e.map((a) => this._recursiveCloneAndMaskValuesOfKeys(a, r, n));
    if (e instanceof Date)
      return new Date(e.getTime());
    if (e instanceof URL)
      return Ce(e);
    if (e !== null && typeof e == "object") {
      const a = j.isError(e) ? this._cloneError(e) : Object.create(Object.getPrototypeOf(e));
      return Object.getOwnPropertyNames(e).reduce((c, f) => {
        var g;
        const u = ((g = this.settings) == null ? void 0 : g.maskValuesOfKeysCaseInsensitive) !== !0 ? f : typeof f == "string" ? f.toLowerCase() : String(f).toLowerCase();
        return c[f] = r.includes(u) ? this.settings.maskPlaceholder : (() => {
          try {
            return this._recursiveCloneAndMaskValuesOfKeys(e[f], r, n);
          } catch {
            return null;
          }
        })(), c;
      }, a);
    } else {
      if (typeof e == "string") {
        let a = e;
        for (const c of ((s = this.settings) == null ? void 0 : s.maskValuesRegEx) || [])
          a = a.replace(c, ((l = this.settings) == null ? void 0 : l.maskPlaceholder) || "");
        return a;
      }
      return e;
    }
  }
  _recursiveCloneAndExecuteFunctions(e, r = []) {
    return this.isObjectOrArray(e) && r.includes(e) ? this.shallowCopy(e) : (this.isObjectOrArray(e) && r.push(e), Array.isArray(e) ? e.map((n) => this._recursiveCloneAndExecuteFunctions(n, r)) : e instanceof Date ? new Date(e.getTime()) : this.isObject(e) ? Object.getOwnPropertyNames(e).reduce((n, s) => {
      const l = Object.getOwnPropertyDescriptor(e, s);
      if (l) {
        Object.defineProperty(n, s, l);
        const a = e[s];
        n[s] = typeof a == "function" ? a() : this._recursiveCloneAndExecuteFunctions(a, r);
      }
      return n;
    }, Object.create(Object.getPrototypeOf(e))) : e);
  }
  isObjectOrArray(e) {
    return typeof e == "object" && e !== null;
  }
  isObject(e) {
    return typeof e == "object" && !Array.isArray(e) && e !== null;
  }
  shallowCopy(e) {
    return Array.isArray(e) ? [...e] : { ...e };
  }
  _toLogObj(e, r = {}) {
    return e = e == null ? void 0 : e.map((n) => j.isError(n) ? this._toErrorObject(n) : n), this.settings.argumentsArrayName == null ? e.length === 1 && !Array.isArray(e[0]) && j.isBuffer(e[0]) !== !0 && !(e[0] instanceof Date) ? r = typeof e[0] == "object" && e[0] != null ? { ...e[0], ...r } : { 0: e[0], ...r } : r = { ...r, ...e } : r = {
      ...r,
      [this.settings.argumentsArrayName]: e
    }, r;
  }
  _cloneError(e) {
    const r = new e.constructor();
    return Object.getOwnPropertyNames(e).forEach((n) => {
      r[n] = e[n];
    }), r;
  }
  _toErrorObject(e, r = 0, n = /* @__PURE__ */ new Set()) {
    n.has(e) || n.add(e);
    const s = {
      nativeError: e,
      name: e.name ?? "Error",
      message: e.message,
      stack: j.getErrorTrace(e)
    };
    if (r >= this.maxErrorCauseDepth)
      return s;
    const l = e.cause;
    if (l != null) {
      const a = pe(l);
      n.has(a) || (s.cause = this._toErrorObject(a, r + 1, n));
    }
    return s;
  }
  _addMetaToLogObj(e, r, n) {
    return {
      ...e,
      [this.settings.metaProperty]: j.getMeta(r, n, this.stackDepthLevel, !this.captureStackForMeta, this.settings.name, this.settings.parentNames)
    };
  }
  _shouldCaptureStack() {
    if (this.settings.hideLogPositionForProduction)
      return !1;
    if (this.settings.type === "json")
      return !0;
    const e = this.settings.prettyLogTemplate ?? "";
    return !!/{{\s*(file(Name|Path|Line|PathWithLine|NameWithLine)|fullFilePath)\s*}}/.test(e);
  }
  _prettyFormatLogObjMeta(e) {
    return ue(this.settings, e).text;
  }
}
class Ze extends Ye {
  constructor(e, r) {
    const n = typeof window < "u" && typeof document < "u", s = { ...e ?? {} };
    n && (s.stylePrettyLogs = (e == null ? void 0 : e.stylePrettyLogs) ?? !0), super(s, r, Number.NaN);
  }
  log(e, r, ...n) {
    return super.log(e, r, ...n);
  }
  silly(...e) {
    return super.log(0, "SILLY", ...e);
  }
  trace(...e) {
    return super.log(1, "TRACE", ...e);
  }
  debug(...e) {
    return super.log(2, "DEBUG", ...e);
  }
  info(...e) {
    return super.log(3, "INFO", ...e);
  }
  warn(...e) {
    return super.log(4, "WARN", ...e);
  }
  error(...e) {
    return super.log(5, "ERROR", ...e);
  }
  fatal(...e) {
    return super.log(6, "FATAL", ...e);
  }
  getSubLogger(e, r) {
    return super.getSubLogger(e, r);
  }
}
function Xe() {
  const t = /* @__PURE__ */ new Date(), e = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), n = String(t.getDate()).padStart(2, "0");
  return `agenteditor/log/log-${e}-${r}-${n}.log`;
}
class qe {
  constructor(e, r) {
    G(this, "filePath");
    G(this, "studioPro");
    G(this, "logQueue", []);
    G(this, "isProcessing", !1);
    this.filePath = e, this.studioPro = r;
  }
  log(e) {
    const r = e._meta, n = new Date(r.date).toISOString(), s = r.logLevelName.toUpperCase(), l = [];
    for (const f in e)
      f !== "_meta" && l.push(e[f]);
    const a = l.map((f) => f instanceof Error ? JSON.stringify({
      name: f.name,
      message: f.message,
      stack: f.stack
    }) : typeof f == "object" && f !== null ? JSON.stringify(f, (u, g) => g === void 0 ? null : g) : String(f)).join(" "), c = `[${n}] ${s}: ${a}
`;
    this.logQueue.push(c), this.processQueue();
  }
  async processQueue() {
    if (!(this.isProcessing || this.logQueue.length === 0)) {
      this.isProcessing = !0;
      try {
        const e = [...this.logQueue];
        this.logQueue = [];
        let r = "";
        try {
          r = await this.studioPro.app.files.getFile(this.filePath) || "";
        } catch {
        }
        await this.studioPro.app.files.putFile(this.filePath, r + e.join(""));
      } catch (e) {
        console.error("Failed to write logs to file:", e);
      } finally {
        this.isProcessing = !1, this.logQueue.length > 0 && setTimeout(() => this.processQueue(), 0);
      }
    }
  }
}
function et(t) {
  const e = Xe(), r = new qe(e, t), n = new Ze({
    minLevel: 0,
    // 0: silly, 1: trace, 2: debug, 3: info, 4: warn, 5: error, 6: fatal
    type: "pretty",
    stylePrettyLogs: !1,
    // No colors in console
    hideLogPositionForProduction: !0
    // Hides file path and line number
  });
  return n.attachTransport((s) => {
    r.log(s);
  }), n;
}
export {
  et as createStudioProLogger
};
//# sourceMappingURL=logger-Bof2Evv1.js.map
