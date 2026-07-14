function Ee(t) {
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
    searchParams: [...t.searchParams].map(([e, n]) => ({ key: e, value: n })),
    hash: t.hash,
    origin: t.origin
  };
}
const H = {
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
function G(t, e, n, r = !1) {
  const o = String(e), l = (f, h) => `\x1B[${h[0]}m${f}\x1B[${h[1]}m`, a = (f, h) => h != null && typeof h == "string" ? l(f, H[h]) : h != null && Array.isArray(h) ? h.reduce((y, m) => a(y, m), f) : h != null && h[f.trim()] != null ? a(f, h[f.trim()]) : h != null && h["*"] != null ? a(f, h["*"]) : f, u = null;
  return o.replace(/{{(.+?)}}/g, (f, h) => {
    const y = n[h] != null ? String(n[h]) : r ? "" : f;
    return t.stylePrettyLogs ? a(y, t?.prettyLogStyles?.[h] ?? u) + l("", H.reset) : y;
  });
}
function N(t, e = 2, n = 0) {
  return t != null && isNaN(t) ? "" : (t = t != null ? t + n : t, e === 2 ? t == null ? "--" : t < 10 ? "0" + t : t.toString() : t == null ? "---" : t < 10 ? "00" + t : t < 100 ? "0" + t : t.toString());
}
function ee(t, e) {
  if (e == null)
    return {
      text: "",
      template: t.prettyLogTemplate,
      placeholders: {}
    };
  let n = t.prettyLogTemplate;
  const r = {};
  n.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}") ? n = n.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}") : t.prettyLogTimeZone === "UTC" ? (r.yyyy = e.date?.getUTCFullYear() ?? "----", r.mm = N(e.date?.getUTCMonth(), 2, 1), r.dd = N(e.date?.getUTCDate(), 2), r.hh = N(e.date?.getUTCHours(), 2), r.MM = N(e.date?.getUTCMinutes(), 2), r.ss = N(e.date?.getUTCSeconds(), 2), r.ms = N(e.date?.getUTCMilliseconds(), 3)) : (r.yyyy = e.date?.getFullYear() ?? "----", r.mm = N(e.date?.getMonth(), 2, 1), r.dd = N(e.date?.getDate(), 2), r.hh = N(e.date?.getHours(), 2), r.MM = N(e.date?.getMinutes(), 2), r.ss = N(e.date?.getSeconds(), 2), r.ms = N(e.date?.getMilliseconds(), 3));
  const o = t.prettyLogTimeZone === "UTC" ? e.date : e.date != null ? new Date(e.date.getTime() - e.date.getTimezoneOffset() * 6e4) : void 0;
  r.rawIsoStr = o?.toISOString() ?? "", r.dateIsoStr = o?.toISOString().replace("T", " ").replace("Z", "") ?? "", r.logLevelName = e.logLevelName, r.fileNameWithLine = e.path?.fileNameWithLine ?? "", r.filePathWithLine = e.path?.filePathWithLine ?? "", r.fullFilePath = e.path?.fullFilePath ?? "";
  let l = t.parentNames?.join(t.prettyErrorParentNamesSeparator);
  l = l != null && e.name != null ? l + t.prettyErrorParentNamesSeparator : void 0;
  const a = e.name != null || l != null ? `${l ?? ""}${e.name ?? ""}` : "";
  return r.name = a, r.nameWithDelimiterPrefix = a.length > 0 ? t.prettyErrorLoggerNameDelimiter + a : "", r.nameWithDelimiterSuffix = a.length > 0 ? a + t.prettyErrorLoggerNameDelimiter : "", t.overwrite?.addPlaceholders != null && t.overwrite.addPlaceholders(e, r), {
    text: G(t, n, r),
    template: n,
    placeholders: r
  };
}
const te = [
  /(?:^|[\\/])node_modules[\\/].*tslog/i,
  /(?:^|[\\/])deps[\\/].*tslog/i,
  /tslog[\\/]+src[\\/]+internal[\\/]/i,
  /tslog[\\/]+src[\\/]BaseLogger/i,
  /tslog[\\/]+src[\\/]index/i
];
function Le(t) {
  const e = typeof t?.stack == "string" ? t.stack : void 0;
  return e == null || e.length === 0 ? [] : e.split(`
`).map((n) => n.trimEnd());
}
function Ne(t) {
  return t.filter((e) => e.length > 0 && !/^\s*Error\b/.test(e));
}
function je(t, e) {
  const n = [];
  for (const r of t) {
    const o = e(r);
    o != null && n.push(o);
  }
  return n;
}
function Te(t, e = te) {
  for (let n = 0; n < t.length; n += 1) {
    const r = t[n], o = r.filePath ?? "", l = r.fullFilePath ?? "";
    if (!e.some((a) => a.test(o) || a.test(l)))
      return n;
  }
  return 0;
}
function Ce(t) {
  return Ne(Le(t));
}
function R(t, e) {
  return je(Ce(t), e);
}
function Y(t, e) {
  return t < 0 ? 0 : t >= e ? Math.max(0, e - 1) : t;
}
function X() {
  return [...te];
}
const Ae = 5;
function Be(t, e = {}) {
  const n = e.maxDepth ?? Ae, r = [], o = /* @__PURE__ */ new Set();
  let l = t, a = 0;
  for (; l != null && a < n; ) {
    const u = l?.cause;
    if (u == null || o.has(u))
      break;
    o.add(u), r.push(ne(u)), l = u, a += 1;
  }
  return r;
}
function ne(t) {
  if (t instanceof Error)
    return t;
  const e = new Error(typeof t == "string" ? t : JSON.stringify(t));
  return typeof t == "object" && t != null && Object.assign(e, t), e;
}
function re(t) {
  const e = /* @__PURE__ */ new Set();
  return JSON.stringify(t, (n, r) => {
    if (typeof r == "object" && r !== null) {
      if (e.has(r))
        return "[Circular]";
      e.add(r);
    }
    return typeof r == "bigint" ? `${r}` : typeof r > "u" ? "[undefined]" : r;
  });
}
function j(t, e) {
  const n = {
    seen: [],
    stylize: ie
  };
  return e != null && le(n, e), M(n.showHidden) && (n.showHidden = !1), M(n.depth) && (n.depth = 2), M(n.colors) && (n.colors = !0), M(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = Fe), x(n, t, n.depth);
}
j.colors = H;
j.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
function Me(t) {
  return typeof t == "boolean";
}
function M(t) {
  return t === void 0;
}
function ie(t) {
  return t;
}
function Fe(t, e) {
  const n = j.styles[e];
  return n != null && j?.colors?.[n]?.[0] != null && j?.colors?.[n]?.[1] != null ? "\x1B[" + j.colors[n][0] + "m" + t + "\x1B[" + j.colors[n][1] + "m" : t;
}
function I(t) {
  return typeof t == "function";
}
function se(t) {
  return typeof t == "string";
}
function De(t) {
  return typeof t == "number";
}
function oe(t) {
  return t === null;
}
function ae(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function K(t) {
  return W(t) && J(t) === "[object RegExp]";
}
function W(t) {
  return typeof t == "object" && t !== null;
}
function V(t) {
  return W(t) && (J(t) === "[object Error]" || t instanceof Error);
}
function q(t) {
  return W(t) && J(t) === "[object Date]";
}
function J(t) {
  return Object.prototype.toString.call(t);
}
function $e(t) {
  const e = {};
  return t.forEach((n) => {
    e[n] = !0;
  }), e;
}
function _e(t, e, n, r, o) {
  const l = [];
  for (let a = 0, u = e.length; a < u; ++a)
    ae(e, String(a)) ? l.push(v(t, e, n, r, String(a), !0)) : l.push("");
  return o.forEach((a) => {
    a.match(/^\d+$/) || l.push(v(t, e, n, r, a, !0));
  }), l;
}
function U(t) {
  return "[" + Error.prototype.toString.call(t) + "]";
}
function x(t, e, n = 0) {
  if (t.customInspect && e != null && I(e) && e?.inspect !== j && !(e?.constructor && e?.constructor.prototype === e)) {
    if (typeof e.inspect != "function" && e.toString != null)
      return e.toString();
    let y = e?.inspect(n, t);
    return se(y) || (y = x(t, y, n)), y;
  }
  const r = A(t, e);
  if (r)
    return r;
  let o = Object.keys(e);
  const l = $e(o);
  try {
    t.showHidden && Object.getOwnPropertyNames && (o = Object.getOwnPropertyNames(e));
  } catch {
  }
  if (V(e) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
    return U(e);
  if (o.length === 0)
    if (I(t.stylize)) {
      if (I(e)) {
        const y = e.name ? ": " + e.name : "";
        return t.stylize("[Function" + y + "]", "special");
      }
      if (K(e))
        return t.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (q(e))
        return t.stylize(Date.prototype.toISOString.call(e), "date");
      if (V(e))
        return U(e);
    } else
      return e;
  let a = "", u = !1, f = [`{
`, `
}`];
  if (Array.isArray(e) && (u = !0, f = [`[
`, `
]`]), I(e) && (a = " [Function" + (e.name ? ": " + e.name : "") + "]"), K(e) && (a = " " + RegExp.prototype.toString.call(e)), q(e) && (a = " " + Date.prototype.toUTCString.call(e)), V(e) && (a = " " + U(e)), o.length === 0 && (!u || e.length == 0))
    return f[0] + a + f[1];
  if (n < 0)
    return K(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
  t.seen.push(e);
  let h;
  return u ? h = _e(t, e, n, l, o) : h = o.map((y) => v(t, e, n, l, y, u)), t.seen.pop(), Ie(h, a, f);
}
function v(t, e, n, r, o, l) {
  let a, u, f = { value: void 0 };
  try {
    f.value = e[o];
  } catch {
  }
  try {
    Object.getOwnPropertyDescriptor && (f = Object.getOwnPropertyDescriptor(e, o) || f);
  } catch {
  }
  if (f.get ? f.set ? u = t.stylize("[Getter/Setter]", "special") : u = t.stylize("[Getter]", "special") : f.set && (u = t.stylize("[Setter]", "special")), ae(r, o) || (a = "[" + o + "]"), u || (t.seen.indexOf(f.value) < 0 ? (oe(n) ? u = x(t, f.value, void 0) : u = x(t, f.value, n - 1), u.indexOf(`
`) > -1 && (l ? u = u.split(`
`).map((h) => "  " + h).join(`
`).substr(2) : u = `
` + u.split(`
`).map((h) => "   " + h).join(`
`))) : u = t.stylize("[Circular]", "special")), M(a)) {
    if (l && o.match(/^\d+$/))
      return u;
    a = JSON.stringify("" + o), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, "\\'").replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"));
  }
  return a + ": " + u;
}
function A(t, e) {
  if (M(e))
    return t.stylize("undefined", "undefined");
  if (se(e)) {
    const n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") + "'";
    return t.stylize(n, "string");
  }
  if (De(e))
    return t.stylize("" + e, "number");
  if (Me(e))
    return t.stylize("" + e, "boolean");
  if (oe(e))
    return t.stylize("null", "null");
}
function Ie(t, e, n) {
  return n[0] + (e === "" ? "" : e + `
`) + "  " + t.join(`,
  `) + " " + n[1];
}
function le(t, e) {
  const n = { ...t };
  if (!e || !W(e))
    return t;
  const r = { ...e }, o = Object.keys(e);
  let l = o.length;
  for (; l--; )
    n[o[l]] = r[o[l]];
  return n;
}
function xe(t, ...e) {
  const n = {
    seen: [],
    stylize: ie
  };
  t != null && le(n, t);
  const r = e[0];
  let o = 0, l = "", a = "";
  if (typeof r == "string") {
    if (e.length === 1)
      return r;
    let u, f = 0;
    for (let h = 0; h < r.length - 1; h++)
      if (r.charCodeAt(h) === 37) {
        const y = r.charCodeAt(++h);
        if (o + 1 !== e.length) {
          switch (y) {
            case 115: {
              const m = e[++o];
              typeof m == "number" || typeof m == "bigint" ? u = A(n, m) : typeof m != "object" || m === null ? u = String(m) : u = j(m, {
                ...t,
                compact: 3,
                colors: !1,
                depth: 0
              });
              break;
            }
            case 106:
              u = re(e[++o]);
              break;
            case 100: {
              const m = e[++o];
              typeof m == "bigint" ? u = A(n, m) : typeof m == "symbol" ? u = "NaN" : u = A(n, m);
              break;
            }
            case 79:
              u = j(e[++o], t);
              break;
            case 111:
              u = j(e[++o], {
                ...t,
                showHidden: !0,
                showProxy: !0,
                depth: 4
              });
              break;
            case 105: {
              const m = e[++o];
              typeof m == "bigint" ? u = A(n, m) : typeof m == "symbol" ? u = "NaN" : u = A(n, parseInt(u));
              break;
            }
            case 102: {
              const m = e[++o];
              typeof m == "symbol" ? u = "NaN" : u = A(n, parseInt(m));
              break;
            }
            case 99:
              o += 1, u = "";
              break;
            case 37:
              l += r.slice(f, h), f = h + 1;
              continue;
            default:
              continue;
          }
          f !== h - 1 && (l += r.slice(f, h - 1)), l += u, f = h + 1;
        } else y === 37 && (l += r.slice(f, h), f = h + 1);
      }
    f !== 0 && (o++, a = " ", f < r.length && (l += r.slice(f)));
  }
  for (; o < e.length; ) {
    const u = e[o];
    l += a, l += typeof u != "string" ? j(u, t) : u, a = " ", o++;
  }
  return l;
}
function We() {
  try {
    const t = globalThis?.process;
    if (typeof t?.cwd == "function")
      return t.cwd();
  } catch {
  }
  try {
    const t = globalThis?.Deno;
    if (typeof t?.cwd == "function")
      return t.cwd();
  } catch {
  }
}
function ce() {
  return typeof window < "u" && typeof document < "u";
}
function ze() {
  if (!ce())
    return !1;
  const e = globalThis?.navigator?.userAgent ?? "";
  return /firefox/i.test(e) || globalThis?.CSS?.supports?.("color", "#000") ? !0 : /safari/i.test(e) && !/chrome/i.test(e);
}
function Re() {
  const t = be(), e = de(t), n = t.name === "browser" || t.name === "worker", r = n ? [...X(), /node_modules[\\/].*tslog/i] : [...X(), /node:(?:internal|vm)/i, /\binternal[\\/]/i];
  let o;
  const l = {
    getMeta(i, s, c, g, p, d) {
      return Object.assign({}, e, {
        name: p,
        parentNames: d,
        date: /* @__PURE__ */ new Date(),
        logLevelId: i,
        logLevelName: s,
        path: g ? void 0 : l.getCallerStackFrame(c)
      });
    },
    getCallerStackFrame(i, s = new Error()) {
      const c = R(s, (b) => a(b));
      if (c.length === 0)
        return {};
      const g = Te(c, r), p = Number.isFinite(i) && i >= 0, d = Y(p ? i : g, c.length);
      return c[d] ?? {};
    },
    getErrorTrace(i) {
      return R(i, (s) => a(s));
    },
    isError(i) {
      return Oe(i);
    },
    isBuffer(i) {
      return typeof Buffer < "u" && typeof Buffer.isBuffer == "function" ? Buffer.isBuffer(i) : !1;
    },
    prettyFormatLogObj(i, s) {
      return i.reduce((c, g) => (l.isError(g) ? c.errors.push(l.prettyFormatErrorObj(g, s)) : c.args.push(g), c), { args: [], errors: [] });
    },
    prettyFormatErrorObj(i, s) {
      const c = h(l.getErrorTrace(i), s), g = Be(i).map((d, b) => {
        const S = `Caused by (${b + 1}): ${d.name ?? "Error"}${d.message ? `: ${d.message}` : ""}`, w = h(R(d, (O) => a(O)), s);
        return [S, ...w].join(`
`);
      }), p = {
        errorName: ` ${i.name} `,
        errorMessage: y(i),
        errorStack: [...c, ...g].join(`
`)
      };
      return G(s, s.prettyErrorTemplate, p);
    },
    transportFormatted(i, s, c, g, p) {
      const d = p.stylePrettyLogs !== !1, b = (c.length > 0 && s.length > 0 ? `
` : "") + c.join(`
`), S = L(i), w = d ? i : S;
      if (m(d)) {
        p.prettyInspectOptions.colors = !1;
        const k = Q(p.prettyInspectOptions, s), P = g != null ? C(p, g) : { text: S, styles: [] }, E = P.text.length > 0 && P.styles.length > 0, F = (E ? P.text : S) + k + b;
        E ? console.log(F, ...P.styles) : console.log(F);
        return;
      }
      p.prettyInspectOptions.colors = d;
      const O = Q(p.prettyInspectOptions, s);
      console.log(w + O + b);
    },
    transportJSON(i) {
      console.log(re(i));
    }
  };
  return we() === "test" && (l.__resetWorkingDirectoryCacheForTests = () => {
    o = void 0;
  }), l;
  function a(i) {
    return n ? f(i) : u(i);
  }
  function u(i) {
    if (typeof i != "string" || i.length === 0)
      return;
    const s = i.trim();
    if (!s.includes(" at ") && !s.startsWith("at "))
      return;
    const c = s.replace(/^at\s+/, "");
    let g, p = c;
    const d = c.match(/^(.*?)\s+\((.*)\)$/);
    d && (g = d[1], p = d[2]);
    const b = p.replace(/^\(/, "").replace(/\)$/, ""), S = b.replace(/\?.*$/, "");
    let w, O, k = S;
    const P = S.split(":");
    P.length >= 3 && /^\d+$/.test(P[P.length - 1] ?? "") ? (O = P.pop(), w = P.pop(), k = P.join(":")) : P.length >= 2 && /^\d+$/.test(P[P.length - 1] ?? "") && (w = P.pop(), k = P.join(":"));
    let E = k.replace(/^file:\/\//, "");
    const $ = he();
    $ != null && E.startsWith($) && (E = E.slice($.length), E = E.replace(/^[\\/]/, "")), E.length === 0 && (E = k);
    const F = ye(E), _ = F.length > 0 ? F : E, Z = _.split(/\\|\//), z = Z[Z.length - 1], Pe = z && w ? `${z}:${w}` : void 0, ke = _ && w ? `${_}:${w}` : void 0;
    return {
      fullFilePath: b,
      fileName: z,
      fileNameWithLine: Pe,
      fileColumn: O,
      fileLine: w,
      filePath: _,
      filePathWithLine: ke,
      method: g
    };
  }
  function f(i) {
    const s = globalThis.location?.origin;
    if (i == null)
      return;
    const c = i.match(He);
    if (!c)
      return;
    const g = c[1]?.replace(/\?.*$/, "");
    if (g == null)
      return;
    const p = g.split("/"), d = c[2], b = c[3], S = p[p.length - 1];
    return {
      fullFilePath: s ? `${s}${g}` : g,
      fileName: S,
      fileNameWithLine: S && d ? `${S}:${d}` : void 0,
      fileColumn: b,
      fileLine: d,
      filePath: g,
      filePathWithLine: d ? `${g}:${d}` : void 0,
      method: void 0
    };
  }
  function h(i, s) {
    return i.map((c) => G(s, s.prettyErrorStackTemplate, { ...c }, !0));
  }
  function y(i) {
    return Object.getOwnPropertyNames(i).filter((s) => s !== "stack" && s !== "cause").reduce((s, c) => {
      const g = i[c];
      return typeof g == "function" || s.push(String(g)), s;
    }, []).join(", ");
  }
  function m(i) {
    return i && (t.name === "browser" || t.name === "worker") && ze();
  }
  function L(i) {
    return i.replace(Ke, "");
  }
  function C(i, s) {
    if (s == null)
      return { text: "", styles: [] };
    const { template: c, placeholders: g } = ee(i, s), p = [], d = [];
    let b = 0;
    const S = /{{(.+?)}}/g;
    let w;
    for (; (w = S.exec(c)) != null; ) {
      w.index > b && p.push(c.slice(b, w.index));
      const O = w[1], k = g[O] != null ? String(g[O]) : "", P = B(i.prettyLogStyles?.[O], k), E = ue(P);
      E.length > 0 ? (p.push(`%c${k}%c`), d.push(E, "")) : p.push(k), b = S.lastIndex;
    }
    return b < c.length && p.push(c.slice(b)), {
      text: p.join(""),
      styles: d
    };
  }
  function B(i, s) {
    if (i == null)
      return [];
    if (typeof i == "string")
      return [i];
    if (Array.isArray(i))
      return i.flatMap((c) => B(c, s));
    if (typeof i == "object") {
      const c = s.trim(), g = i[c] ?? i["*"];
      return g == null ? [] : B(g, s);
    }
    return [];
  }
  function ue(i) {
    const s = /* @__PURE__ */ new Set(), c = [];
    for (const g of i) {
      const p = fe(g);
      p != null && p.length > 0 && !s.has(p) && (s.add(p), c.push(p));
    }
    return c.join("; ");
  }
  function fe(i) {
    const s = Ve[i];
    if (s != null)
      return `color: ${s}`;
    const c = Ue[i];
    if (c != null)
      return `background-color: ${c}`;
    switch (i) {
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
  function he() {
    return o === void 0 && (o = We() ?? null), o ?? void 0;
  }
  function ge() {
    return t.name === "node" || t.name === "deno" || t.name === "bun";
  }
  function pe() {
    return t.name === "node" || t.name === "deno" || t.name === "bun";
  }
  function de(i) {
    if (i.name === "browser" || i.name === "worker")
      return {
        runtime: i.name,
        browser: i.userAgent
      };
    const s = {
      runtime: i.name
    };
    return pe() && (s.runtimeVersion = i.version ?? "unknown"), ge() && (s.hostname = i.hostname ?? "unknown"), s;
  }
  function Q(i, s) {
    try {
      return xe(i, ...s);
    } catch {
      return s.map(me).join(" ");
    }
  }
  function me(i) {
    if (typeof i == "string")
      return i;
    try {
      return JSON.stringify(i);
    } catch {
      return String(i);
    }
  }
  function ye(i) {
    if (typeof i != "string" || i.length === 0)
      return i;
    const s = i.replace(/\\+/g, "\\").replace(/\\/g, "/"), c = s.startsWith("//"), g = s.startsWith("/") && !c, p = s.match(/^[A-Za-z]:/), d = p ? p[0] : "", S = (d ? s.slice(d.length) : s).split("/"), w = [];
    for (const k of S)
      if (!(k === "" || k === ".")) {
        if (k === "..") {
          w.length > 0 && w.pop();
          continue;
        }
        w.push(k);
      }
    let O = w.join("/");
    return c ? O = `//${O}` : g ? O = `/${O}` : d !== "" && (O = `${d}${O.length > 0 ? `/${O}` : ""}`), O.length === 0 ? i : O;
  }
  function be() {
    if (ce())
      return {
        name: "browser",
        userAgent: globalThis.navigator?.userAgent
      };
    const i = globalThis;
    if (typeof i.importScripts == "function")
      return {
        name: "worker",
        userAgent: i.navigator?.userAgent
      };
    const s = globalThis;
    if (s.Bun != null) {
      const c = s.Bun.version;
      return {
        name: "bun",
        version: c != null ? `bun/${c}` : void 0,
        hostname: D(s.process, s.Deno, s.Bun, s.location)
      };
    }
    if (s.Deno != null) {
      const c = Se(s.Deno), g = s.Deno?.version?.deno;
      return {
        name: "deno",
        version: g != null ? `deno/${g}` : void 0,
        hostname: c ?? D(s.process, s.Deno, s.Bun, s.location)
      };
    }
    return s.process?.versions?.node != null || s.process?.version != null ? {
      name: "node",
      version: s.process?.versions?.node ?? s.process?.version,
      hostname: D(s.process, s.Deno, s.Bun, s.location)
    } : s.process != null ? {
      name: "node",
      version: "unknown",
      hostname: D(s.process, s.Deno, s.Bun, s.location)
    } : {
      name: "unknown"
    };
  }
  function D(i, s, c, g) {
    const p = i?.env?.HOSTNAME ?? i?.env?.HOST ?? i?.env?.COMPUTERNAME;
    if (p != null && p.length > 0)
      return p;
    const d = c?.env?.HOSTNAME ?? c?.env?.HOST ?? c?.env?.COMPUTERNAME;
    if (d != null && d.length > 0)
      return d;
    try {
      const b = s?.env?.get;
      if (typeof b == "function") {
        const S = b("HOSTNAME");
        if (S != null && S.length > 0)
          return S;
      }
    } catch {
    }
    if (g?.hostname != null && g.hostname.length > 0)
      return g.hostname;
  }
  function Se(i) {
    try {
      if (typeof i?.hostname == "function") {
        const c = i.hostname();
        if (c != null && c.length > 0)
          return c;
      }
    } catch {
    }
    const s = globalThis.location?.hostname;
    if (s != null && s.length > 0)
      return s;
  }
  function we() {
    return globalThis?.process?.env?.NODE_ENV;
  }
  function Oe(i) {
    if (i instanceof Error)
      return !0;
    if (i != null && typeof i == "object") {
      const s = Object.prototype.toString.call(i);
      if (/\[object .*Error\]/.test(s))
        return !0;
      const c = i.name;
      if (typeof c == "string" && c.endsWith("Error"))
        return !0;
    }
    return !1;
  }
}
const Ke = /\u001b\[[0-9;]*m/g, Ve = {
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
}, Ue = {
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
}, He = /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/, T = Re();
class Ge {
  constructor(e, n, r = Number.NaN) {
    this.logObj = n, this.stackDepthLevel = r, this.runtime = T, this.maxErrorCauseDepth = 5, this.settings = {
      type: e?.type ?? "pretty",
      name: e?.name,
      parentNames: e?.parentNames,
      minLevel: e?.minLevel ?? 0,
      argumentsArrayName: e?.argumentsArrayName,
      hideLogPositionForProduction: e?.hideLogPositionForProduction ?? !1,
      prettyLogTemplate: e?.prettyLogTemplate ?? "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	{{filePathWithLine}}{{nameWithDelimiterPrefix}}	",
      prettyErrorTemplate: e?.prettyErrorTemplate ?? `
{{errorName}} {{errorMessage}}
error stack:
{{errorStack}}`,
      prettyErrorStackTemplate: e?.prettyErrorStackTemplate ?? `  • {{fileName}}	{{method}}
	{{filePathWithLine}}`,
      prettyErrorParentNamesSeparator: e?.prettyErrorParentNamesSeparator ?? ":",
      prettyErrorLoggerNameDelimiter: e?.prettyErrorLoggerNameDelimiter ?? "	",
      stylePrettyLogs: e?.stylePrettyLogs ?? !0,
      prettyLogTimeZone: e?.prettyLogTimeZone ?? "UTC",
      prettyLogStyles: e?.prettyLogStyles ?? {
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
      prettyInspectOptions: e?.prettyInspectOptions ?? {
        colors: !0,
        compact: !1,
        depth: 1 / 0
      },
      metaProperty: e?.metaProperty ?? "_meta",
      maskPlaceholder: e?.maskPlaceholder ?? "[***]",
      maskValuesOfKeys: e?.maskValuesOfKeys ?? ["password"],
      maskValuesOfKeysCaseInsensitive: e?.maskValuesOfKeysCaseInsensitive ?? !1,
      maskValuesRegEx: e?.maskValuesRegEx,
      prefix: [...e?.prefix ?? []],
      attachedTransports: [...e?.attachedTransports ?? []],
      overwrite: {
        mask: e?.overwrite?.mask,
        toLogObj: e?.overwrite?.toLogObj,
        addMeta: e?.overwrite?.addMeta,
        addPlaceholders: e?.overwrite?.addPlaceholders,
        formatMeta: e?.overwrite?.formatMeta,
        formatLogObj: e?.overwrite?.formatLogObj,
        transportFormatted: e?.overwrite?.transportFormatted,
        transportJSON: e?.overwrite?.transportJSON
      }
    }, this.captureStackForMeta = this._shouldCaptureStack();
  }
  log(e, n, ...r) {
    if (e < this.settings.minLevel)
      return;
    const o = this._resolveLogArguments(r), l = [...this.settings.prefix, ...o], a = this.settings.overwrite?.mask != null ? this.settings.overwrite?.mask(l) : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0 ? this._mask(l) : l, u = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0, f = this.settings.overwrite?.toLogObj != null ? this.settings.overwrite?.toLogObj(a, u) : this._toLogObj(a, u), h = this.settings.overwrite?.addMeta != null ? this.settings.overwrite?.addMeta(f, e, n) : this._addMetaToLogObj(f, e, n), y = h?.[this.settings.metaProperty];
    let m, L;
    if (this.settings.overwrite?.formatMeta != null && (m = this.settings.overwrite?.formatMeta(h?.[this.settings.metaProperty])), this.settings.overwrite?.formatLogObj != null && (L = this.settings.overwrite?.formatLogObj(a, this.settings)), this.settings.type === "pretty" && (m = m ?? this._prettyFormatLogObjMeta(h?.[this.settings.metaProperty]), L = L ?? T.prettyFormatLogObj(a, this.settings)), m != null && L != null)
      if (this.settings.overwrite?.transportFormatted != null) {
        const C = this.settings.overwrite.transportFormatted, B = C.length;
        B < 4 ? C(m, L.args, L.errors) : B === 4 ? C(m, L.args, L.errors, y) : C(m, L.args, L.errors, y, this.settings);
      } else
        T.transportFormatted(m, L.args, L.errors, y, this.settings);
    else
      this.settings.overwrite?.transportJSON != null ? this.settings.overwrite.transportJSON(h) : this.settings.type !== "hidden" && T.transportJSON(h);
    return this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0 && this.settings.attachedTransports.forEach((C) => {
      C(h);
    }), h;
  }
  attachTransport(e) {
    this.settings.attachedTransports.push(e);
  }
  getSubLogger(e, n) {
    const r = {
      ...this.settings,
      ...e,
      parentNames: this.settings?.parentNames != null && this.settings?.name != null ? [...this.settings.parentNames, this.settings.name] : this.settings?.name != null ? [this.settings.name] : void 0,
      prefix: [...this.settings.prefix, ...e?.prefix ?? []]
    };
    return new this.constructor(r, n ?? this.logObj, this.stackDepthLevel);
  }
  _mask(e) {
    const n = this._getMaskKeys();
    return e?.map((r) => this._recursiveCloneAndMaskValuesOfKeys(r, n));
  }
  _getMaskKeys() {
    const e = this.settings.maskValuesOfKeys ?? [], n = e.map(String).join("|");
    if (this.settings.maskValuesOfKeysCaseInsensitive === !0) {
      if (this.maskKeysCache?.source === e && this.maskKeysCache.caseInsensitive === !0 && this.maskKeysCache.signature === n)
        return this.maskKeysCache.normalized;
      const r = e.map((o) => typeof o == "string" ? o.toLowerCase() : String(o).toLowerCase());
      return this.maskKeysCache = {
        source: e,
        caseInsensitive: !0,
        normalized: r,
        signature: n
      }, r;
    }
    return this.maskKeysCache = {
      source: e,
      caseInsensitive: !1,
      normalized: e,
      signature: n
    }, e;
  }
  _resolveLogArguments(e) {
    if (e.length === 1 && typeof e[0] == "function") {
      const n = e[0];
      if (n.length === 0) {
        const r = n();
        return Array.isArray(r) ? r : [r];
      }
    }
    return e;
  }
  _recursiveCloneAndMaskValuesOfKeys(e, n, r = []) {
    if (r.includes(e))
      return { ...e };
    if (typeof e == "object" && e !== null && r.push(e), T.isError(e) || T.isBuffer(e))
      return e;
    if (e instanceof Map)
      return new Map(e);
    if (e instanceof Set)
      return new Set(e);
    if (Array.isArray(e))
      return e.map((o) => this._recursiveCloneAndMaskValuesOfKeys(o, n, r));
    if (e instanceof Date)
      return new Date(e.getTime());
    if (e instanceof URL)
      return Ee(e);
    if (e !== null && typeof e == "object") {
      const o = T.isError(e) ? this._cloneError(e) : Object.create(Object.getPrototypeOf(e));
      return Object.getOwnPropertyNames(e).reduce((l, a) => {
        const u = this.settings?.maskValuesOfKeysCaseInsensitive !== !0 ? a : typeof a == "string" ? a.toLowerCase() : String(a).toLowerCase();
        return l[a] = n.includes(u) ? this.settings.maskPlaceholder : (() => {
          try {
            return this._recursiveCloneAndMaskValuesOfKeys(e[a], n, r);
          } catch {
            return null;
          }
        })(), l;
      }, o);
    } else {
      if (typeof e == "string") {
        let o = e;
        for (const l of this.settings?.maskValuesRegEx || [])
          o = o.replace(l, this.settings?.maskPlaceholder || "");
        return o;
      }
      return e;
    }
  }
  _recursiveCloneAndExecuteFunctions(e, n = []) {
    return this.isObjectOrArray(e) && n.includes(e) ? this.shallowCopy(e) : (this.isObjectOrArray(e) && n.push(e), Array.isArray(e) ? e.map((r) => this._recursiveCloneAndExecuteFunctions(r, n)) : e instanceof Date ? new Date(e.getTime()) : this.isObject(e) ? Object.getOwnPropertyNames(e).reduce((r, o) => {
      const l = Object.getOwnPropertyDescriptor(e, o);
      if (l) {
        Object.defineProperty(r, o, l);
        const a = e[o];
        r[o] = typeof a == "function" ? a() : this._recursiveCloneAndExecuteFunctions(a, n);
      }
      return r;
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
  _toLogObj(e, n = {}) {
    return e = e?.map((r) => T.isError(r) ? this._toErrorObject(r) : r), this.settings.argumentsArrayName == null ? e.length === 1 && !Array.isArray(e[0]) && T.isBuffer(e[0]) !== !0 && !(e[0] instanceof Date) ? n = typeof e[0] == "object" && e[0] != null ? { ...e[0], ...n } : { 0: e[0], ...n } : n = { ...n, ...e } : n = {
      ...n,
      [this.settings.argumentsArrayName]: e
    }, n;
  }
  _cloneError(e) {
    const n = new e.constructor();
    return Object.getOwnPropertyNames(e).forEach((r) => {
      n[r] = e[r];
    }), n;
  }
  _toErrorObject(e, n = 0, r = /* @__PURE__ */ new Set()) {
    r.has(e) || r.add(e);
    const o = {
      nativeError: e,
      name: e.name ?? "Error",
      message: e.message,
      stack: T.getErrorTrace(e)
    };
    if (n >= this.maxErrorCauseDepth)
      return o;
    const l = e.cause;
    if (l != null) {
      const a = ne(l);
      r.has(a) || (o.cause = this._toErrorObject(a, n + 1, r));
    }
    return o;
  }
  _addMetaToLogObj(e, n, r) {
    return {
      ...e,
      [this.settings.metaProperty]: T.getMeta(n, r, this.stackDepthLevel, !this.captureStackForMeta, this.settings.name, this.settings.parentNames)
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
    return ee(this.settings, e).text;
  }
}
class ve extends Ge {
  constructor(e, n) {
    const r = typeof window < "u" && typeof document < "u", o = { ...e ?? {} };
    r && (o.stylePrettyLogs = e?.stylePrettyLogs ?? !0), super(o, n, Number.NaN);
  }
  log(e, n, ...r) {
    return super.log(e, n, ...r);
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
  getSubLogger(e, n) {
    return super.getSubLogger(e, n);
  }
}
function Je() {
  const t = /* @__PURE__ */ new Date(), e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `agenteditor/log/log-${e}-${n}-${r}.log`;
}
class Qe {
  filePath;
  studioPro;
  logQueue = [];
  isProcessing = !1;
  constructor(e, n) {
    this.filePath = e, this.studioPro = n;
  }
  log(e) {
    const n = e._meta, r = new Date(n.date).toISOString(), o = n.logLevelName.toUpperCase(), l = [];
    for (const f in e)
      f !== "_meta" && l.push(e[f]);
    const a = l.map((f) => f instanceof Error ? JSON.stringify({
      name: f.name,
      message: f.message,
      stack: f.stack
    }) : typeof f == "object" && f !== null ? JSON.stringify(f, (h, y) => y === void 0 ? null : y) : String(f)).join(" "), u = `[${r}] ${o}: ${a}
`;
    this.logQueue.push(u), this.processQueue();
  }
  async processQueue() {
    if (!(this.isProcessing || this.logQueue.length === 0)) {
      this.isProcessing = !0;
      try {
        const e = [...this.logQueue];
        this.logQueue = [];
        let n = "";
        try {
          n = await this.studioPro.app.files.getFile(this.filePath) || "";
        } catch {
        }
        await this.studioPro.app.files.putFile(this.filePath, n + e.join(""));
      } catch (e) {
        console.error("Failed to write logs to file:", e);
      } finally {
        this.isProcessing = !1, this.logQueue.length > 0 && setTimeout(() => this.processQueue(), 0);
      }
    }
  }
}
function Ze(t) {
  const e = Je(), n = new Qe(e, t), r = new ve({
    minLevel: 0,
    // 0: silly, 1: trace, 2: debug, 3: info, 4: warn, 5: error, 6: fatal
    type: "pretty",
    stylePrettyLogs: !1,
    // No colors in console
    hideLogPositionForProduction: !0
    // Hides file path and line number
  });
  return r.attachTransport((o) => {
    n.log(o);
  }), r;
}
export {
  Ze as createStudioProLogger
};
