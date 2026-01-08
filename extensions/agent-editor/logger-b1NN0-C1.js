var Le = Object.defineProperty;
var Ne = (t, e, r) => e in t ? Le(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var G = (t, e, r) => Ne(t, typeof e != "symbol" ? e + "" : e, r);
import { getComponentFramework as Me } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as M } from "@mendix/model-access-sdk";
function ot(t) {
  const e = Me(t);
  return {
    ui: {
      messageBoxes: e.getApi("mendix.MessageBoxApi"),
      tabs: e.getApi("mendix.TabApi"),
      panes: e.getApi("mendix.DockablePaneApi"),
      extensionsMenu: e.getApi("mendix.ExtensionsMenuApi"),
      preferences: e.getApi("mendix.PreferencesApi"),
      dialogs: e.getApi("mendix.DialogApi"),
      notifications: e.getApi("mendix.NotificationApi"),
      editors: e.getApi("mendix.EditorApi"),
      elementSelectors: e.getApi("mendix.ElementSelectorApi"),
      versionControl: e.getApi("mendix.VersionControlApi"),
      appExplorer: e.getApi("mendix.AppExplorerApi"),
      documents: e.getApi("mendix.DocumentEditorApi"),
      messagePassing: e.getApi("mendix.MessagePassingApi")
    },
    app: {
      files: e.getApi("mendix.AppFilesApi"),
      model: {
        domainModels: M(
          "mendix.DomainModelApi",
          "DomainModels$DomainModel",
          t
        ),
        pages: M(
          "mendix.PageApi",
          "Pages$Page",
          t
        ),
        enumerations: M(
          "mendix.EnumerationApi",
          "Enumerations$Enumeration",
          t
        ),
        snippets: M(
          "mendix.SnippetApi",
          "Pages$Snippet",
          t
        ),
        buildingBlocks: M(
          "mendix.BuildingBlockApi",
          "Pages$BuildingBlock",
          t
        ),
        projects: e.getApi("mendix.ProjectApi"),
        moduleSettings: M(
          "mendix.ModuleSettingsApi",
          "Projects$ModuleSettings",
          t
        ),
        microflows: M(
          "mendix.MicroflowModelApi",
          "Microflows$Microflow",
          t
        ),
        customBlobDocuments: e.getApi("mendix.CustomBlobDocumentApi"),
        importMappings: M(
          "mendix.ImportMappingModelApi",
          "ImportMappings$ImportMapping",
          t
        ),
        exportMappings: M(
          "mendix.ExportMappingModelApi",
          "ExportMappings$ExportMapping",
          t
        ),
        jsonStructures: M(
          "mendix.JsonStructureModelApi",
          "JsonStructures$JsonStructure",
          t
        ),
        messageDefinitions: M(
          "mendix.MessageDefinitionModelApi",
          "MessageDefinitions$MessageDefinitionCollection",
          t
        ),
        xmlSchemas: M(
          "mendix.XmlSchemaModelApi",
          "XmlSchemas$XmlSchema",
          t
        )
      }
    },
    network: {
      httpProxy: e.getApi("mendix.HttpProxyApi")
    }
  };
}
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
const oe = {
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
function ie(t, e, r, n = !1) {
  const s = String(e), l = (f, u) => `\x1B[${u[0]}m${f}\x1B[${u[1]}m`, a = (f, u) => u != null && typeof u == "string" ? l(f, oe[u]) : u != null && Array.isArray(u) ? u.reduce((y, m) => a(y, m), f) : u != null && u[f.trim()] != null ? a(f, u[f.trim()]) : u != null && u["*"] != null ? a(f, u["*"]) : f, c = null;
  return s.replace(/{{(.+?)}}/g, (f, u) => {
    var m;
    const y = r[u] != null ? String(r[u]) : n ? "" : f;
    return t.stylePrettyLogs ? a(y, ((m = t == null ? void 0 : t.prettyLogStyles) == null ? void 0 : m[u]) ?? c) + l("", oe.reset) : y;
  });
}
function C(t, e = 2, r = 0) {
  return t != null && isNaN(t) ? "" : (t = t != null ? t + r : t, e === 2 ? t == null ? "--" : t < 10 ? "0" + t : t.toString() : t == null ? "---" : t < 10 ? "00" + t : t < 100 ? "0" + t : t.toString());
}
function pe(t, e) {
  var c, f, u, y, m, P, F, T, _, I, z, R, W, K, D, V, U, H, N;
  if (e == null)
    return {
      text: "",
      template: t.prettyLogTemplate,
      placeholders: {}
    };
  let r = t.prettyLogTemplate;
  const n = {};
  r.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}") ? r = r.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}") : t.prettyLogTimeZone === "UTC" ? (n.yyyy = ((c = e.date) == null ? void 0 : c.getUTCFullYear()) ?? "----", n.mm = C((f = e.date) == null ? void 0 : f.getUTCMonth(), 2, 1), n.dd = C((u = e.date) == null ? void 0 : u.getUTCDate(), 2), n.hh = C((y = e.date) == null ? void 0 : y.getUTCHours(), 2), n.MM = C((m = e.date) == null ? void 0 : m.getUTCMinutes(), 2), n.ss = C((P = e.date) == null ? void 0 : P.getUTCSeconds(), 2), n.ms = C((F = e.date) == null ? void 0 : F.getUTCMilliseconds(), 3)) : (n.yyyy = ((T = e.date) == null ? void 0 : T.getFullYear()) ?? "----", n.mm = C((_ = e.date) == null ? void 0 : _.getMonth(), 2, 1), n.dd = C((I = e.date) == null ? void 0 : I.getDate(), 2), n.hh = C((z = e.date) == null ? void 0 : z.getHours(), 2), n.MM = C((R = e.date) == null ? void 0 : R.getMinutes(), 2), n.ss = C((W = e.date) == null ? void 0 : W.getSeconds(), 2), n.ms = C((K = e.date) == null ? void 0 : K.getMilliseconds(), 3));
  const s = t.prettyLogTimeZone === "UTC" ? e.date : e.date != null ? new Date(e.date.getTime() - e.date.getTimezoneOffset() * 6e4) : void 0;
  n.rawIsoStr = (s == null ? void 0 : s.toISOString()) ?? "", n.dateIsoStr = (s == null ? void 0 : s.toISOString().replace("T", " ").replace("Z", "")) ?? "", n.logLevelName = e.logLevelName, n.fileNameWithLine = ((D = e.path) == null ? void 0 : D.fileNameWithLine) ?? "", n.filePathWithLine = ((V = e.path) == null ? void 0 : V.filePathWithLine) ?? "", n.fullFilePath = ((U = e.path) == null ? void 0 : U.fullFilePath) ?? "";
  let l = (H = t.parentNames) == null ? void 0 : H.join(t.prettyErrorParentNamesSeparator);
  l = l != null && e.name != null ? l + t.prettyErrorParentNamesSeparator : void 0;
  const a = e.name != null || l != null ? `${l ?? ""}${e.name ?? ""}` : "";
  return n.name = a, n.nameWithDelimiterPrefix = a.length > 0 ? t.prettyErrorLoggerNameDelimiter + a : "", n.nameWithDelimiterSuffix = a.length > 0 ? a + t.prettyErrorLoggerNameDelimiter : "", ((N = t.overwrite) == null ? void 0 : N.addPlaceholders) != null && t.overwrite.addPlaceholders(e, n), {
    text: ie(t, r, n),
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
function xe(t) {
  const e = typeof (t == null ? void 0 : t.stack) == "string" ? t.stack : void 0;
  return e == null || e.length === 0 ? [] : e.split(`
`).map((r) => r.trimEnd());
}
function je(t) {
  return t.filter((e) => e.length > 0 && !/^\s*Error\b/.test(e));
}
function Te(t, e) {
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
function De(t) {
  return je(xe(t));
}
function ee(t, e) {
  return Te(De(t), e);
}
function ce(t, e) {
  return t < 0 ? 0 : t >= e ? Math.max(0, e - 1) : t;
}
function fe() {
  return [...he];
}
const $e = 5;
function Fe(t, e = {}) {
  const r = e.maxDepth ?? $e, n = [], s = /* @__PURE__ */ new Set();
  let l = t, a = 0;
  for (; l != null && a < r; ) {
    const c = l == null ? void 0 : l.cause;
    if (c == null || s.has(c))
      break;
    s.add(c), n.push(me(c)), l = c, a += 1;
  }
  return n;
}
function me(t) {
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
function L(t, e) {
  const r = {
    seen: [],
    stylize: ge
  };
  return e != null && we(r, e), J(r.showHidden) && (r.showHidden = !1), J(r.depth) && (r.depth = 2), J(r.colors) && (r.colors = !0), J(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = Ie), X(r, t, r.depth);
}
L.colors = oe;
L.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
};
function _e(t) {
  return typeof t == "boolean";
}
function J(t) {
  return t === void 0;
}
function ge(t) {
  return t;
}
function Ie(t, e) {
  var n, s, l, a;
  const r = L.styles[e];
  return r != null && ((s = (n = L == null ? void 0 : L.colors) == null ? void 0 : n[r]) == null ? void 0 : s[0]) != null && ((a = (l = L == null ? void 0 : L.colors) == null ? void 0 : l[r]) == null ? void 0 : a[1]) != null ? "\x1B[" + L.colors[r][0] + "m" + t + "\x1B[" + L.colors[r][1] + "m" : t;
}
function Z(t) {
  return typeof t == "function";
}
function ye(t) {
  return typeof t == "string";
}
function ze(t) {
  return typeof t == "number";
}
function be(t) {
  return t === null;
}
function Se(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function te(t) {
  return q(t) && ae(t) === "[object RegExp]";
}
function q(t) {
  return typeof t == "object" && t !== null;
}
function re(t) {
  return q(t) && (ae(t) === "[object Error]" || t instanceof Error);
}
function ue(t) {
  return q(t) && ae(t) === "[object Date]";
}
function ae(t) {
  return Object.prototype.toString.call(t);
}
function Re(t) {
  const e = {};
  return t.forEach((r) => {
    e[r] = !0;
  }), e;
}
function We(t, e, r, n, s) {
  const l = [];
  for (let a = 0, c = e.length; a < c; ++a)
    Se(e, String(a)) ? l.push(se(t, e, r, n, String(a), !0)) : l.push("");
  return s.forEach((a) => {
    a.match(/^\d+$/) || l.push(se(t, e, r, n, a, !0));
  }), l;
}
function ne(t) {
  return "[" + Error.prototype.toString.call(t) + "]";
}
function X(t, e, r = 0) {
  if (t.customInspect && e != null && Z(e) && (e == null ? void 0 : e.inspect) !== L && !(e != null && e.constructor && (e == null ? void 0 : e.constructor.prototype) === e)) {
    if (typeof e.inspect != "function" && e.toString != null)
      return e.toString();
    let y = e == null ? void 0 : e.inspect(r, t);
    return ye(y) || (y = X(t, y, r)), y;
  }
  const n = $(t, e);
  if (n)
    return n;
  let s = Object.keys(e);
  const l = Re(s);
  try {
    t.showHidden && Object.getOwnPropertyNames && (s = Object.getOwnPropertyNames(e));
  } catch {
  }
  if (re(e) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
    return ne(e);
  if (s.length === 0)
    if (Z(t.stylize)) {
      if (Z(e)) {
        const y = e.name ? ": " + e.name : "";
        return t.stylize("[Function" + y + "]", "special");
      }
      if (te(e))
        return t.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (ue(e))
        return t.stylize(Date.prototype.toISOString.call(e), "date");
      if (re(e))
        return ne(e);
    } else
      return e;
  let a = "", c = !1, f = [`{
`, `
}`];
  if (Array.isArray(e) && (c = !0, f = [`[
`, `
]`]), Z(e) && (a = " [Function" + (e.name ? ": " + e.name : "") + "]"), te(e) && (a = " " + RegExp.prototype.toString.call(e)), ue(e) && (a = " " + Date.prototype.toUTCString.call(e)), re(e) && (a = " " + ne(e)), s.length === 0 && (!c || e.length == 0))
    return f[0] + a + f[1];
  if (r < 0)
    return te(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
  t.seen.push(e);
  let u;
  return c ? u = We(t, e, r, l, s) : u = s.map((y) => se(t, e, r, l, y, c)), t.seen.pop(), Ke(u, a, f);
}
function se(t, e, r, n, s, l) {
  let a, c, f = { value: void 0 };
  try {
    f.value = e[s];
  } catch {
  }
  try {
    Object.getOwnPropertyDescriptor && (f = Object.getOwnPropertyDescriptor(e, s) || f);
  } catch {
  }
  if (f.get ? f.set ? c = t.stylize("[Getter/Setter]", "special") : c = t.stylize("[Getter]", "special") : f.set && (c = t.stylize("[Setter]", "special")), Se(n, s) || (a = "[" + s + "]"), c || (t.seen.indexOf(f.value) < 0 ? (be(r) ? c = X(t, f.value, void 0) : c = X(t, f.value, r - 1), c.indexOf(`
`) > -1 && (l ? c = c.split(`
`).map((u) => "  " + u).join(`
`).substr(2) : c = `
` + c.split(`
`).map((u) => "   " + u).join(`
`))) : c = t.stylize("[Circular]", "special")), J(a)) {
    if (l && s.match(/^\d+$/))
      return c;
    a = JSON.stringify("" + s), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, "\\'").replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"));
  }
  return a + ": " + c;
}
function $(t, e) {
  if (J(e))
    return t.stylize("undefined", "undefined");
  if (ye(e)) {
    const r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") + "'";
    return t.stylize(r, "string");
  }
  if (ze(e))
    return t.stylize("" + e, "number");
  if (_e(e))
    return t.stylize("" + e, "boolean");
  if (be(e))
    return t.stylize("null", "null");
}
function Ke(t, e, r) {
  return r[0] + (e === "" ? "" : e + `
`) + "  " + t.join(`,
  `) + " " + r[1];
}
function we(t, e) {
  const r = { ...t };
  if (!e || !q(e))
    return t;
  const n = { ...e }, s = Object.keys(e);
  let l = s.length;
  for (; l--; )
    r[s[l]] = n[s[l]];
  return r;
}
function Ve(t, ...e) {
  const r = {
    seen: [],
    stylize: ge
  };
  t != null && we(r, t);
  const n = e[0];
  let s = 0, l = "", a = "";
  if (typeof n == "string") {
    if (e.length === 1)
      return n;
    let c, f = 0;
    for (let u = 0; u < n.length - 1; u++)
      if (n.charCodeAt(u) === 37) {
        const y = n.charCodeAt(++u);
        if (s + 1 !== e.length) {
          switch (y) {
            case 115: {
              const m = e[++s];
              typeof m == "number" || typeof m == "bigint" ? c = $(r, m) : typeof m != "object" || m === null ? c = String(m) : c = L(m, {
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
              const m = e[++s];
              typeof m == "bigint" ? c = $(r, m) : typeof m == "symbol" ? c = "NaN" : c = $(r, m);
              break;
            }
            case 79:
              c = L(e[++s], t);
              break;
            case 111:
              c = L(e[++s], {
                ...t,
                showHidden: !0,
                showProxy: !0,
                depth: 4
              });
              break;
            case 105: {
              const m = e[++s];
              typeof m == "bigint" ? c = $(r, m) : typeof m == "symbol" ? c = "NaN" : c = $(r, parseInt(c));
              break;
            }
            case 102: {
              const m = e[++s];
              typeof m == "symbol" ? c = "NaN" : c = $(r, parseInt(m));
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
        } else y === 37 && (l += n.slice(f, u), f = u + 1);
      }
    f !== 0 && (s++, a = " ", f < n.length && (l += n.slice(f)));
  }
  for (; s < e.length; ) {
    const c = e[s];
    l += a, l += typeof c != "string" ? L(c, t) : c, a = " ", s++;
  }
  return l;
}
function Ue() {
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
function Ae() {
  return typeof window < "u" && typeof document < "u";
}
function He() {
  var n, s;
  if (!Ae())
    return !1;
  const t = globalThis == null ? void 0 : globalThis.navigator, e = (t == null ? void 0 : t.userAgent) ?? "";
  if (/firefox/i.test(e))
    return !0;
  const r = globalThis;
  return (s = (n = r == null ? void 0 : r.CSS) == null ? void 0 : n.supports) != null && s.call(n, "color", "#000") ? !0 : /safari/i.test(e) && !/chrome/i.test(e);
}
function Je() {
  const t = H(), e = K(t), r = t.name === "browser" || t.name === "worker", n = r ? [...fe(), /node_modules[\\/].*tslog/i] : [...fe(), /node:(?:internal|vm)/i, /\binternal[\\/]/i];
  let s;
  const l = {
    getMeta(o, i, p, h, d, g) {
      return Object.assign({}, e, {
        name: d,
        parentNames: g,
        date: /* @__PURE__ */ new Date(),
        logLevelId: o,
        logLevelName: i,
        path: h ? void 0 : l.getCallerStackFrame(p)
      });
    },
    getCallerStackFrame(o, i = new Error()) {
      const p = ee(i, (A) => a(A));
      if (p.length === 0)
        return {};
      const h = Be(p, n), d = Number.isFinite(o) && o >= 0, g = ce(d ? o : h, p.length);
      return p[g] ?? {};
    },
    getErrorTrace(o) {
      return ee(o, (i) => a(i));
    },
    isError(o) {
      return Ee(o);
    },
    isBuffer(o) {
      return typeof Buffer < "u" && typeof Buffer.isBuffer == "function" ? Buffer.isBuffer(o) : !1;
    },
    prettyFormatLogObj(o, i) {
      return o.reduce((p, h) => (l.isError(h) ? p.errors.push(l.prettyFormatErrorObj(h, i)) : p.args.push(h), p), { args: [], errors: [] });
    },
    prettyFormatErrorObj(o, i) {
      const p = u(l.getErrorTrace(o), i), h = Fe(o).map((g, A) => {
        const O = `Caused by (${A + 1}): ${g.name ?? "Error"}${g.message ? `: ${g.message}` : ""}`, S = u(ee(g, (w) => a(w)), i);
        return [O, ...S].join(`
`);
      }), d = {
        errorName: ` ${o.name} `,
        errorMessage: y(o),
        errorStack: [...p, ...h].join(`
`)
      };
      return ie(i, i.prettyErrorTemplate, d);
    },
    transportFormatted(o, i, p, h, d) {
      const g = d.stylePrettyLogs !== !1, A = (p.length > 0 && i.length > 0 ? `
` : "") + p.join(`
`), O = P(o), S = g ? o : O;
      if (m(g)) {
        d.prettyInspectOptions.colors = !1;
        const E = D(d.prettyInspectOptions, i), b = h != null ? F(d, h) : { text: O, styles: [] }, k = b.text.length > 0 && b.styles.length > 0, B = (k ? b.text : O) + E + A;
        k ? console.log(B, ...b.styles) : console.log(B);
        return;
      }
      d.prettyInspectOptions.colors = g;
      const w = D(d.prettyInspectOptions, i);
      console.log(S + w + A);
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
    const p = i.replace(/^at\s+/, "");
    let h, d = p;
    const g = p.match(/^(.*?)\s+\((.*)\)$/);
    g && (h = g[1], d = g[2]);
    const A = d.replace(/^\(/, "").replace(/\)$/, ""), O = A.replace(/\?.*$/, "");
    let S, w, E = O;
    const b = O.split(":");
    b.length >= 3 && /^\d+$/.test(b[b.length - 1] ?? "") ? (w = b.pop(), S = b.pop(), E = b.join(":")) : b.length >= 2 && /^\d+$/.test(b[b.length - 1] ?? "") && (S = b.pop(), E = b.join(":"));
    let k = E.replace(/^file:\/\//, "");
    const j = z();
    j != null && k.startsWith(j) && (k = k.slice(j.length), k = k.replace(/^[\\/]/, "")), k.length === 0 && (k = E);
    const B = U(k), Y = B.length > 0 ? B : k, le = Y.split(/\\|\//), v = le[le.length - 1], ke = v && S ? `${v}:${S}` : void 0, Pe = Y && S ? `${Y}:${S}` : void 0;
    return {
      fullFilePath: A,
      fileName: v,
      fileNameWithLine: ke,
      fileColumn: w,
      fileLine: S,
      filePath: Y,
      filePathWithLine: Pe,
      method: h
    };
  }
  function f(o) {
    var S, w;
    const i = (S = globalThis.location) == null ? void 0 : S.origin;
    if (o == null)
      return;
    const p = o.match(Ze);
    if (!p)
      return;
    const h = (w = p[1]) == null ? void 0 : w.replace(/\?.*$/, "");
    if (h == null)
      return;
    const d = h.split("/"), g = p[2], A = p[3], O = d[d.length - 1];
    return {
      fullFilePath: i ? `${i}${h}` : h,
      fileName: O,
      fileNameWithLine: O && g ? `${O}:${g}` : void 0,
      fileColumn: A,
      fileLine: g,
      filePath: h,
      filePathWithLine: g ? `${h}:${g}` : void 0,
      method: void 0
    };
  }
  function u(o, i) {
    return o.map((p) => ie(i, i.prettyErrorStackTemplate, { ...p }, !0));
  }
  function y(o) {
    return Object.getOwnPropertyNames(o).filter((i) => i !== "stack" && i !== "cause").reduce((i, p) => {
      const h = o[p];
      return typeof h == "function" || i.push(String(h)), i;
    }, []).join(", ");
  }
  function m(o) {
    return o && (t.name === "browser" || t.name === "worker") && He();
  }
  function P(o) {
    return o.replace(Ge, "");
  }
  function F(o, i) {
    var w;
    if (i == null)
      return { text: "", styles: [] };
    const { template: p, placeholders: h } = pe(o, i), d = [], g = [];
    let A = 0;
    const O = /{{(.+?)}}/g;
    let S;
    for (; (S = O.exec(p)) != null; ) {
      S.index > A && d.push(p.slice(A, S.index));
      const E = S[1], b = h[E] != null ? String(h[E]) : "", k = T((w = o.prettyLogStyles) == null ? void 0 : w[E], b), j = _(k);
      j.length > 0 ? (d.push(`%c${b}%c`), g.push(j, "")) : d.push(b), A = O.lastIndex;
    }
    return A < p.length && d.push(p.slice(A)), {
      text: d.join(""),
      styles: g
    };
  }
  function T(o, i) {
    if (o == null)
      return [];
    if (typeof o == "string")
      return [o];
    if (Array.isArray(o))
      return o.flatMap((p) => T(p, i));
    if (typeof o == "object") {
      const p = i.trim(), h = o[p] ?? o["*"];
      return h == null ? [] : T(h, i);
    }
    return [];
  }
  function _(o) {
    const i = /* @__PURE__ */ new Set(), p = [];
    for (const h of o) {
      const d = I(h);
      d != null && d.length > 0 && !i.has(d) && (i.add(d), p.push(d));
    }
    return p.join("; ");
  }
  function I(o) {
    const i = Qe[o];
    if (i != null)
      return `color: ${i}`;
    const p = Ye[o];
    if (p != null)
      return `background-color: ${p}`;
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
    return s === void 0 && (s = Ue() ?? null), s ?? void 0;
  }
  function R() {
    return t.name === "node" || t.name === "deno" || t.name === "bun";
  }
  function W() {
    return t.name === "node" || t.name === "deno" || t.name === "bun";
  }
  function K(o) {
    if (o.name === "browser" || o.name === "worker")
      return {
        runtime: o.name,
        browser: o.userAgent
      };
    const i = {
      runtime: o.name
    };
    return W() && (i.runtimeVersion = o.version ?? "unknown"), R() && (i.hostname = o.hostname ?? "unknown"), i;
  }
  function D(o, i) {
    try {
      return Ve(o, ...i);
    } catch {
      return i.map(V).join(" ");
    }
  }
  function V(o) {
    if (typeof o == "string")
      return o;
    try {
      return JSON.stringify(o);
    } catch {
      return String(o);
    }
  }
  function U(o) {
    if (typeof o != "string" || o.length === 0)
      return o;
    const i = o.replace(/\\+/g, "\\").replace(/\\/g, "/"), p = i.startsWith("//"), h = i.startsWith("/") && !p, d = i.match(/^[A-Za-z]:/), g = d ? d[0] : "", O = (g ? i.slice(g.length) : i).split("/"), S = [];
    for (const E of O)
      if (!(E === "" || E === ".")) {
        if (E === "..") {
          S.length > 0 && S.pop();
          continue;
        }
        S.push(E);
      }
    let w = S.join("/");
    return p ? w = `//${w}` : h ? w = `/${w}` : g !== "" && (w = `${g}${w.length > 0 ? `/${w}` : ""}`), w.length === 0 ? o : w;
  }
  function H() {
    var p, h, d, g, A, O, S, w, E;
    if (Ae()) {
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
        userAgent: (p = o.navigator) == null ? void 0 : p.userAgent
      };
    const i = globalThis;
    if (i.Bun != null) {
      const b = i.Bun.version;
      return {
        name: "bun",
        version: b != null ? `bun/${b}` : void 0,
        hostname: N(i.process, i.Deno, i.Bun, i.location)
      };
    }
    if (i.Deno != null) {
      const b = Q(i.Deno), k = (d = (h = i.Deno) == null ? void 0 : h.version) == null ? void 0 : d.deno;
      return {
        name: "deno",
        version: k != null ? `deno/${k}` : void 0,
        hostname: b ?? N(i.process, i.Deno, i.Bun, i.location)
      };
    }
    return ((A = (g = i.process) == null ? void 0 : g.versions) == null ? void 0 : A.node) != null || ((O = i.process) == null ? void 0 : O.version) != null ? {
      name: "node",
      version: ((w = (S = i.process) == null ? void 0 : S.versions) == null ? void 0 : w.node) ?? ((E = i.process) == null ? void 0 : E.version),
      hostname: N(i.process, i.Deno, i.Bun, i.location)
    } : i.process != null ? {
      name: "node",
      version: "unknown",
      hostname: N(i.process, i.Deno, i.Bun, i.location)
    } : {
      name: "unknown"
    };
  }
  function N(o, i, p, h) {
    var A, O, S, w, E, b, k;
    const d = ((A = o == null ? void 0 : o.env) == null ? void 0 : A.HOSTNAME) ?? ((O = o == null ? void 0 : o.env) == null ? void 0 : O.HOST) ?? ((S = o == null ? void 0 : o.env) == null ? void 0 : S.COMPUTERNAME);
    if (d != null && d.length > 0)
      return d;
    const g = ((w = p == null ? void 0 : p.env) == null ? void 0 : w.HOSTNAME) ?? ((E = p == null ? void 0 : p.env) == null ? void 0 : E.HOST) ?? ((b = p == null ? void 0 : p.env) == null ? void 0 : b.COMPUTERNAME);
    if (g != null && g.length > 0)
      return g;
    try {
      const j = (k = i == null ? void 0 : i.env) == null ? void 0 : k.get;
      if (typeof j == "function") {
        const B = j("HOSTNAME");
        if (B != null && B.length > 0)
          return B;
      }
    } catch {
    }
    if ((h == null ? void 0 : h.hostname) != null && h.hostname.length > 0)
      return h.hostname;
  }
  function Q(o) {
    var p;
    try {
      if (typeof (o == null ? void 0 : o.hostname) == "function") {
        const h = o.hostname();
        if (h != null && h.length > 0)
          return h;
      }
    } catch {
    }
    const i = (p = globalThis.location) == null ? void 0 : p.hostname;
    if (i != null && i.length > 0)
      return i;
  }
  function Oe() {
    var i;
    const o = globalThis == null ? void 0 : globalThis.process;
    return (i = o == null ? void 0 : o.env) == null ? void 0 : i.NODE_ENV;
  }
  function Ee(o) {
    if (o instanceof Error)
      return !0;
    if (o != null && typeof o == "object") {
      const i = Object.prototype.toString.call(o);
      if (/\[object .*Error\]/.test(i))
        return !0;
      const p = o.name;
      if (typeof p == "string" && p.endsWith("Error"))
        return !0;
    }
    return !1;
  }
}
const Ge = /\u001b\[[0-9;]*m/g, Qe = {
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
}, Ye = {
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
}, Ze = /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/, x = Je();
class Xe {
  constructor(e, r, n = Number.NaN) {
    var s, l, a, c, f, u, y, m;
    this.logObj = r, this.stackDepthLevel = n, this.runtime = x, this.maxErrorCauseDepth = 5, this.settings = {
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
        transportFormatted: (y = e == null ? void 0 : e.overwrite) == null ? void 0 : y.transportFormatted,
        transportJSON: (m = e == null ? void 0 : e.overwrite) == null ? void 0 : m.transportJSON
      }
    }, this.captureStackForMeta = this._shouldCaptureStack();
  }
  log(e, r, ...n) {
    var F, T, _, I, z, R, W, K, D, V, U, H;
    if (e < this.settings.minLevel)
      return;
    const s = this._resolveLogArguments(n), l = [...this.settings.prefix, ...s], a = ((F = this.settings.overwrite) == null ? void 0 : F.mask) != null ? (T = this.settings.overwrite) == null ? void 0 : T.mask(l) : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0 ? this._mask(l) : l, c = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0, f = ((_ = this.settings.overwrite) == null ? void 0 : _.toLogObj) != null ? (I = this.settings.overwrite) == null ? void 0 : I.toLogObj(a, c) : this._toLogObj(a, c), u = ((z = this.settings.overwrite) == null ? void 0 : z.addMeta) != null ? (R = this.settings.overwrite) == null ? void 0 : R.addMeta(f, e, r) : this._addMetaToLogObj(f, e, r), y = u == null ? void 0 : u[this.settings.metaProperty];
    let m, P;
    if (((W = this.settings.overwrite) == null ? void 0 : W.formatMeta) != null && (m = (K = this.settings.overwrite) == null ? void 0 : K.formatMeta(u == null ? void 0 : u[this.settings.metaProperty])), ((D = this.settings.overwrite) == null ? void 0 : D.formatLogObj) != null && (P = (V = this.settings.overwrite) == null ? void 0 : V.formatLogObj(a, this.settings)), this.settings.type === "pretty" && (m = m ?? this._prettyFormatLogObjMeta(u == null ? void 0 : u[this.settings.metaProperty]), P = P ?? x.prettyFormatLogObj(a, this.settings)), m != null && P != null)
      if (((U = this.settings.overwrite) == null ? void 0 : U.transportFormatted) != null) {
        const N = this.settings.overwrite.transportFormatted, Q = N.length;
        Q < 4 ? N(m, P.args, P.errors) : Q === 4 ? N(m, P.args, P.errors, y) : N(m, P.args, P.errors, y, this.settings);
      } else
        x.transportFormatted(m, P.args, P.errors, y, this.settings);
    else
      ((H = this.settings.overwrite) == null ? void 0 : H.transportJSON) != null ? this.settings.overwrite.transportJSON(u) : this.settings.type !== "hidden" && x.transportJSON(u);
    return this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0 && this.settings.attachedTransports.forEach((N) => {
      N(u);
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
    if (typeof e == "object" && e !== null && n.push(e), x.isError(e) || x.isBuffer(e))
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
      const a = x.isError(e) ? this._cloneError(e) : Object.create(Object.getPrototypeOf(e));
      return Object.getOwnPropertyNames(e).reduce((c, f) => {
        var y;
        const u = ((y = this.settings) == null ? void 0 : y.maskValuesOfKeysCaseInsensitive) !== !0 ? f : typeof f == "string" ? f.toLowerCase() : String(f).toLowerCase();
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
    return e = e == null ? void 0 : e.map((n) => x.isError(n) ? this._toErrorObject(n) : n), this.settings.argumentsArrayName == null ? e.length === 1 && !Array.isArray(e[0]) && x.isBuffer(e[0]) !== !0 && !(e[0] instanceof Date) ? r = typeof e[0] == "object" && e[0] != null ? { ...e[0], ...r } : { 0: e[0], ...r } : r = { ...r, ...e } : r = {
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
      stack: x.getErrorTrace(e)
    };
    if (r >= this.maxErrorCauseDepth)
      return s;
    const l = e.cause;
    if (l != null) {
      const a = me(l);
      n.has(a) || (s.cause = this._toErrorObject(a, r + 1, n));
    }
    return s;
  }
  _addMetaToLogObj(e, r, n) {
    return {
      ...e,
      [this.settings.metaProperty]: x.getMeta(r, n, this.stackDepthLevel, !this.captureStackForMeta, this.settings.name, this.settings.parentNames)
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
    return pe(this.settings, e).text;
  }
}
class qe extends Xe {
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
function ve() {
  const t = /* @__PURE__ */ new Date(), e = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), n = String(t.getDate()).padStart(2, "0");
  return `agenteditor/log/log-${e}-${r}-${n}.log`;
}
class et {
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
    }) : typeof f == "object" && f !== null ? JSON.stringify(
      f,
      (u, y) => y === void 0 ? null : y
    ) : String(f)).join(" "), c = `[${n}] ${s}: ${a}
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
        await this.studioPro.app.files.putFile(
          this.filePath,
          r + e.join("")
        );
      } catch (e) {
        console.error("Failed to write logs to file:", e);
      } finally {
        this.isProcessing = !1, this.logQueue.length > 0 && setTimeout(() => this.processQueue(), 0);
      }
    }
  }
}
function it(t) {
  const e = ve(), r = new et(e, t), n = new qe({
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
  it as c,
  ot as m
};
//# sourceMappingURL=logger-b1NN0-C1.js.map
