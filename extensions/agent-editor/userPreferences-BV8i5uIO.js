var Tr = Object.defineProperty;
var xr = (o, e, t) => e in o ? Tr(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var U = (o, e, t) => xr(o, typeof e != "symbol" ? e + "" : e, t);
import { getComponentFramework as Cr } from "@mendix/component-framework";
import { getModelAccessWithComponentProxy as T } from "@mendix/model-access-sdk";
function ge(o) {
  const e = Cr(o);
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
      projectChanges: e.getApi("mendix.ProjectChangesApi"),
      model: {
        domainModels: T(
          "mendix.DomainModelApi",
          "DomainModels$DomainModel",
          o
        ),
        pages: T(
          "mendix.PageApi",
          "Pages$Page",
          o
        ),
        constants: T(
          "mendix.ConstantApi",
          "Constants$Constant",
          o
        ),
        enumerations: T(
          "mendix.EnumerationApi",
          "Enumerations$Enumeration",
          o
        ),
        snippets: T(
          "mendix.SnippetApi",
          "Pages$Snippet",
          o
        ),
        buildingBlocks: T(
          "mendix.BuildingBlockApi",
          "Pages$BuildingBlock",
          o
        ),
        projects: e.getApi("mendix.ProjectApi"),
        modules: e.getApi("mendix.ModuleApi"),
        moduleSettings: T(
          "mendix.ModuleSettingsApi",
          "Projects$ModuleSettings",
          o
        ),
        microflows: T(
          "mendix.MicroflowModelApi",
          "Microflows$Microflow",
          o
        ),
        customBlobDocuments: e.getApi("mendix.CustomBlobDocumentApi"),
        importMappings: T(
          "mendix.ImportMappingModelApi",
          "ImportMappings$ImportMapping",
          o
        ),
        exportMappings: T(
          "mendix.ExportMappingModelApi",
          "ExportMappings$ExportMapping",
          o
        ),
        jsonStructures: T(
          "mendix.JsonStructureModelApi",
          "JsonStructures$JsonStructure",
          o
        ),
        messageDefinitions: T(
          "mendix.MessageDefinitionModelApi",
          "MessageDefinitions$MessageDefinitionCollection",
          o
        ),
        xmlSchemas: T(
          "mendix.XmlSchemaModelApi",
          "XmlSchemas$XmlSchema",
          o
        ),
        workflows: T(
          "mendix.WorkflowApi",
          "Workflows$Workflow",
          o
        )
      }
    },
    network: {
      httpProxy: e.getApi("mendix.HttpProxyApi")
    },
    runtime: {
      controller: e.getApi("mendix.RuntimeControllerApi"),
      configuration: e.getApi("mendix.RuntimeConfigurationApi")
    }
  };
}
function Or(o) {
  return {
    href: o.href,
    protocol: o.protocol,
    username: o.username,
    password: o.password,
    host: o.host,
    hostname: o.hostname,
    port: o.port,
    pathname: o.pathname,
    search: o.search,
    searchParams: [...o.searchParams].map(([e, t]) => ({ key: e, value: t })),
    hash: o.hash,
    origin: o.origin
  };
}
const lr = {
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
function cr(o, e, t, n = !1) {
  const c = String(e), u = (d, g) => `\x1B[${g[0]}m${d}\x1B[${g[1]}m`, s = (d, g) => g != null && typeof g == "string" ? u(d, lr[g]) : g != null && Array.isArray(g) ? g.reduce((p, h) => s(p, h), d) : g != null && g[d.trim()] != null ? s(d, g[d.trim()]) : g != null && g["*"] != null ? s(d, g["*"]) : d, i = null;
  return c.replace(/{{(.+?)}}/g, (d, g) => {
    var h;
    const p = t[g] != null ? String(t[g]) : n ? "" : d;
    return o.stylePrettyLogs ? s(p, ((h = o == null ? void 0 : o.prettyLogStyles) == null ? void 0 : h[g]) ?? i) + u("", lr.reset) : p;
  });
}
function x(o, e = 2, t = 0) {
  return o != null && isNaN(o) ? "" : (o = o != null ? o + t : o, e === 2 ? o == null ? "--" : o < 10 ? "0" + o : o.toString() : o == null ? "---" : o < 10 ? "00" + o : o < 100 ? "0" + o : o.toString());
}
function hr(o, e) {
  var i, d, g, p, h, A, I, E, R, j, F, W, $, z, N, _, V, Y, w;
  if (e == null)
    return {
      text: "",
      template: o.prettyLogTemplate,
      placeholders: {}
    };
  let t = o.prettyLogTemplate;
  const n = {};
  t.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}") ? t = t.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}") : o.prettyLogTimeZone === "UTC" ? (n.yyyy = ((i = e.date) == null ? void 0 : i.getUTCFullYear()) ?? "----", n.mm = x((d = e.date) == null ? void 0 : d.getUTCMonth(), 2, 1), n.dd = x((g = e.date) == null ? void 0 : g.getUTCDate(), 2), n.hh = x((p = e.date) == null ? void 0 : p.getUTCHours(), 2), n.MM = x((h = e.date) == null ? void 0 : h.getUTCMinutes(), 2), n.ss = x((A = e.date) == null ? void 0 : A.getUTCSeconds(), 2), n.ms = x((I = e.date) == null ? void 0 : I.getUTCMilliseconds(), 3)) : (n.yyyy = ((E = e.date) == null ? void 0 : E.getFullYear()) ?? "----", n.mm = x((R = e.date) == null ? void 0 : R.getMonth(), 2, 1), n.dd = x((j = e.date) == null ? void 0 : j.getDate(), 2), n.hh = x((F = e.date) == null ? void 0 : F.getHours(), 2), n.MM = x((W = e.date) == null ? void 0 : W.getMinutes(), 2), n.ss = x(($ = e.date) == null ? void 0 : $.getSeconds(), 2), n.ms = x((z = e.date) == null ? void 0 : z.getMilliseconds(), 3));
  const c = o.prettyLogTimeZone === "UTC" ? e.date : e.date != null ? new Date(e.date.getTime() - e.date.getTimezoneOffset() * 6e4) : void 0;
  n.rawIsoStr = (c == null ? void 0 : c.toISOString()) ?? "", n.dateIsoStr = (c == null ? void 0 : c.toISOString().replace("T", " ").replace("Z", "")) ?? "", n.logLevelName = e.logLevelName, n.fileNameWithLine = ((N = e.path) == null ? void 0 : N.fileNameWithLine) ?? "", n.filePathWithLine = ((_ = e.path) == null ? void 0 : _.filePathWithLine) ?? "", n.fullFilePath = ((V = e.path) == null ? void 0 : V.fullFilePath) ?? "";
  let u = (Y = o.parentNames) == null ? void 0 : Y.join(o.prettyErrorParentNamesSeparator);
  u = u != null && e.name != null ? u + o.prettyErrorParentNamesSeparator : void 0;
  const s = e.name != null || u != null ? `${u ?? ""}${e.name ?? ""}` : "";
  return n.name = s, n.nameWithDelimiterPrefix = s.length > 0 ? o.prettyErrorLoggerNameDelimiter + s : "", n.nameWithDelimiterSuffix = s.length > 0 ? s + o.prettyErrorLoggerNameDelimiter : "", ((w = o.overwrite) == null ? void 0 : w.addPlaceholders) != null && o.overwrite.addPlaceholders(e, n), {
    text: cr(o, t, n),
    template: t,
    placeholders: n
  };
}
const kr = [
  /(?:^|[\\/])node_modules[\\/].*tslog/i,
  /(?:^|[\\/])deps[\\/].*tslog/i,
  /tslog[\\/]+src[\\/]+internal[\\/]/i,
  /tslog[\\/]+src[\\/]BaseLogger/i,
  /tslog[\\/]+src[\\/]index/i
];
function Er(o) {
  const e = typeof (o == null ? void 0 : o.stack) == "string" ? o.stack : void 0;
  return e == null || e.length === 0 ? [] : e.split(`
`).map((t) => t.trimEnd());
}
function Hr(o) {
  return o.filter((e) => e.length > 0 && !/^\s*Error\b/.test(e));
}
function Nr(o, e) {
  const t = [];
  for (const n of o) {
    const c = e(n);
    c != null && t.push(c);
  }
  return t;
}
function vr(o, e = kr) {
  for (let t = 0; t < o.length; t += 1) {
    const n = o[t], c = n.filePath ?? "", u = n.fullFilePath ?? "";
    if (!e.some((s) => s.test(c) || s.test(u)))
      return t;
  }
  return 0;
}
function Ir(o) {
  return Hr(Er(o));
}
function or(o, e) {
  return Nr(Ir(o), e);
}
function gr(o, e) {
  return o < 0 ? 0 : o >= e ? Math.max(0, e - 1) : o;
}
function Br() {
  return [...kr];
}
const Rr = 5;
function jr(o, e = {}) {
  const t = e.maxDepth ?? Rr, n = [], c = /* @__PURE__ */ new Set();
  let u = o, s = 0;
  for (; u != null && s < t; ) {
    const i = u == null ? void 0 : u.cause;
    if (i == null || c.has(i))
      break;
    c.add(i), n.push(yr(i)), u = i, s += 1;
  }
  return n;
}
function yr(o) {
  if (o instanceof Error)
    return o;
  const e = new Error(typeof o == "string" ? o : JSON.stringify(o));
  return typeof o == "object" && o != null && Object.assign(e, o), e;
}
function pr(o) {
  const e = /* @__PURE__ */ new Set();
  return JSON.stringify(o, (t, n) => {
    if (typeof n == "object" && n !== null) {
      if (e.has(n))
        return "[Circular]";
      e.add(n);
    }
    return typeof n == "bigint" ? `${n}` : typeof n > "u" ? "[undefined]" : n;
  });
}
function P(o, e) {
  const t = {
    seen: [],
    stylize: mr
  };
  return e != null && Lr(t, e), K(t.showHidden) && (t.showHidden = !1), K(t.depth) && (t.depth = 2), K(t.colors) && (t.colors = !0), K(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = Wr), Z(t, o, t.depth);
}
P.colors = lr;
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
function Fr(o) {
  return typeof o == "boolean";
}
function K(o) {
  return o === void 0;
}
function mr(o) {
  return o;
}
function Wr(o, e) {
  var n, c, u, s;
  const t = P.styles[e];
  return t != null && ((c = (n = P == null ? void 0 : P.colors) == null ? void 0 : n[t]) == null ? void 0 : c[0]) != null && ((s = (u = P == null ? void 0 : P.colors) == null ? void 0 : u[t]) == null ? void 0 : s[1]) != null ? "\x1B[" + P.colors[t][0] + "m" + o + "\x1B[" + P.colors[t][1] + "m" : o;
}
function X(o) {
  return typeof o == "function";
}
function Dr(o) {
  return typeof o == "string";
}
function $r(o) {
  return typeof o == "number";
}
function br(o) {
  return o === null;
}
function Gr(o, e) {
  return Object.prototype.hasOwnProperty.call(o, e);
}
function tr(o) {
  return rr(o) && ur(o) === "[object RegExp]";
}
function rr(o) {
  return typeof o == "object" && o !== null;
}
function nr(o) {
  return rr(o) && (ur(o) === "[object Error]" || o instanceof Error);
}
function fr(o) {
  return rr(o) && ur(o) === "[object Date]";
}
function ur(o) {
  return Object.prototype.toString.call(o);
}
function zr(o) {
  const e = {};
  return o.forEach((t) => {
    e[t] = !0;
  }), e;
}
function _r(o, e, t, n, c) {
  const u = [];
  for (let s = 0, i = e.length; s < i; ++s)
    Gr(e, String(s)) ? u.push(sr(o, e, t, n, String(s), !0)) : u.push("");
  return c.forEach((s) => {
    s.match(/^\d+$/) || u.push(sr(o, e, t, n, s, !0));
  }), u;
}
function ar(o) {
  return "[" + Error.prototype.toString.call(o) + "]";
}
function Z(o, e, t = 0) {
  if (o.customInspect && e != null && X(e) && (e == null ? void 0 : e.inspect) !== P && !(e != null && e.constructor && (e == null ? void 0 : e.constructor.prototype) === e)) {
    if (typeof e.inspect != "function" && e.toString != null)
      return e.toString();
    let p = e == null ? void 0 : e.inspect(t, o);
    return Dr(p) || (p = Z(o, p, t)), p;
  }
  const n = v(o, e);
  if (n)
    return n;
  let c = Object.keys(e);
  const u = zr(c);
  try {
    o.showHidden && Object.getOwnPropertyNames && (c = Object.getOwnPropertyNames(e));
  } catch {
  }
  if (nr(e) && (c.indexOf("message") >= 0 || c.indexOf("description") >= 0))
    return ar(e);
  if (c.length === 0)
    if (X(o.stylize)) {
      if (X(e)) {
        const p = e.name ? ": " + e.name : "";
        return o.stylize("[Function" + p + "]", "special");
      }
      if (tr(e))
        return o.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (fr(e))
        return o.stylize(Date.prototype.toISOString.call(e), "date");
      if (nr(e))
        return ar(e);
    } else
      return e;
  let s = "", i = !1, d = [`{
`, `
}`];
  if (Array.isArray(e) && (i = !0, d = [`[
`, `
]`]), X(e) && (s = " [Function" + (e.name ? ": " + e.name : "") + "]"), tr(e) && (s = " " + RegExp.prototype.toString.call(e)), fr(e) && (s = " " + Date.prototype.toUTCString.call(e)), nr(e) && (s = " " + ar(e)), c.length === 0 && (!i || e.length == 0))
    return d[0] + s + d[1];
  if (t < 0)
    return tr(e) ? o.stylize(RegExp.prototype.toString.call(e), "regexp") : o.stylize("[Object]", "special");
  o.seen.push(e);
  let g;
  return i ? g = _r(o, e, t, u, c) : g = c.map((p) => sr(o, e, t, u, p, i)), o.seen.pop(), Vr(g, s, d);
}
function sr(o, e, t, n, c, u) {
  let s, i, d = { value: void 0 };
  try {
    d.value = e[c];
  } catch {
  }
  try {
    Object.getOwnPropertyDescriptor && (d = Object.getOwnPropertyDescriptor(e, c) || d);
  } catch {
  }
  if (d.get ? d.set ? i = o.stylize("[Getter/Setter]", "special") : i = o.stylize("[Getter]", "special") : d.set && (i = o.stylize("[Setter]", "special")), Gr(n, c) || (s = "[" + c + "]"), i || (o.seen.indexOf(d.value) < 0 ? (br(t) ? i = Z(o, d.value, void 0) : i = Z(o, d.value, t - 1), i.indexOf(`
`) > -1 && (u ? i = i.split(`
`).map((g) => "  " + g).join(`
`).substr(2) : i = `
` + i.split(`
`).map((g) => "   " + g).join(`
`))) : i = o.stylize("[Circular]", "special")), K(s)) {
    if (u && c.match(/^\d+$/))
      return i;
    s = JSON.stringify("" + c), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = o.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, "\\'").replace(/(^"|"$)/g, "'"), s = o.stylize(s, "string"));
  }
  return s + ": " + i;
}
function v(o, e) {
  if (K(e))
    return o.stylize("undefined", "undefined");
  if (Dr(e)) {
    const t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\\'") + "'";
    return o.stylize(t, "string");
  }
  if ($r(e))
    return o.stylize("" + e, "number");
  if (Fr(e))
    return o.stylize("" + e, "boolean");
  if (br(e))
    return o.stylize("null", "null");
}
function Vr(o, e, t) {
  return t[0] + (e === "" ? "" : e + `
`) + "  " + o.join(`,
  `) + " " + t[1];
}
function Lr(o, e) {
  const t = { ...o };
  if (!e || !rr(e))
    return o;
  const n = { ...e }, c = Object.keys(e);
  let u = c.length;
  for (; u--; )
    t[c[u]] = n[c[u]];
  return t;
}
function Yr(o, ...e) {
  const t = {
    seen: [],
    stylize: mr
  };
  o != null && Lr(t, o);
  const n = e[0];
  let c = 0, u = "", s = "";
  if (typeof n == "string") {
    if (e.length === 1)
      return n;
    let i, d = 0;
    for (let g = 0; g < n.length - 1; g++)
      if (n.charCodeAt(g) === 37) {
        const p = n.charCodeAt(++g);
        if (c + 1 !== e.length) {
          switch (p) {
            case 115: {
              const h = e[++c];
              typeof h == "number" || typeof h == "bigint" ? i = v(t, h) : typeof h != "object" || h === null ? i = String(h) : i = P(h, {
                ...o,
                compact: 3,
                colors: !1,
                depth: 0
              });
              break;
            }
            case 106:
              i = pr(e[++c]);
              break;
            case 100: {
              const h = e[++c];
              typeof h == "bigint" ? i = v(t, h) : typeof h == "symbol" ? i = "NaN" : i = v(t, h);
              break;
            }
            case 79:
              i = P(e[++c], o);
              break;
            case 111:
              i = P(e[++c], {
                ...o,
                showHidden: !0,
                showProxy: !0,
                depth: 4
              });
              break;
            case 105: {
              const h = e[++c];
              typeof h == "bigint" ? i = v(t, h) : typeof h == "symbol" ? i = "NaN" : i = v(t, parseInt(i));
              break;
            }
            case 102: {
              const h = e[++c];
              typeof h == "symbol" ? i = "NaN" : i = v(t, parseInt(h));
              break;
            }
            case 99:
              c += 1, i = "";
              break;
            case 37:
              u += n.slice(d, g), d = g + 1;
              continue;
            default:
              continue;
          }
          d !== g - 1 && (u += n.slice(d, g - 1)), u += i, d = g + 1;
        } else p === 37 && (u += n.slice(d, g), d = g + 1);
      }
    d !== 0 && (c++, s = " ", d < n.length && (u += n.slice(d)));
  }
  for (; c < e.length; ) {
    const i = e[c];
    u += s, u += typeof i != "string" ? P(i, o) : i, s = " ", c++;
  }
  return u;
}
function Kr() {
  try {
    const o = globalThis == null ? void 0 : globalThis.process;
    if (typeof (o == null ? void 0 : o.cwd) == "function")
      return o.cwd();
  } catch {
  }
  try {
    const o = globalThis == null ? void 0 : globalThis.Deno;
    if (typeof (o == null ? void 0 : o.cwd) == "function")
      return o.cwd();
  } catch {
  }
}
function Sr() {
  return typeof window < "u" && typeof document < "u";
}
function Ur() {
  var n, c;
  if (!Sr())
    return !1;
  const o = globalThis == null ? void 0 : globalThis.navigator, e = (o == null ? void 0 : o.userAgent) ?? "";
  if (/firefox/i.test(e))
    return !0;
  const t = globalThis;
  return (c = (n = t == null ? void 0 : t.CSS) == null ? void 0 : n.supports) != null && c.call(n, "color", "#000") ? !0 : /safari/i.test(e) && !/chrome/i.test(e);
}
function Jr() {
  const o = Y(), e = z(o), t = o.name === "browser" || o.name === "worker", n = t ? [...Br(), /node_modules[\\/].*tslog/i] : [...Br(), /node:(?:internal|vm)/i, /\binternal[\\/]/i];
  let c;
  const u = {
    getMeta(a, l, B, f, k, y) {
      return Object.assign({}, e, {
        name: k,
        parentNames: y,
        date: /* @__PURE__ */ new Date(),
        logLevelId: a,
        logLevelName: l,
        path: f ? void 0 : u.getCallerStackFrame(B)
      });
    },
    getCallerStackFrame(a, l = new Error()) {
      const B = or(l, (G) => s(G));
      if (B.length === 0)
        return {};
      const f = vr(B, n), k = Number.isFinite(a) && a >= 0, y = gr(k ? a : f, B.length);
      return B[y] ?? {};
    },
    getErrorTrace(a) {
      return or(a, (l) => s(l));
    },
    isError(a) {
      return Ar(a);
    },
    isBuffer(a) {
      return typeof Buffer < "u" && typeof Buffer.isBuffer == "function" ? Buffer.isBuffer(a) : !1;
    },
    prettyFormatLogObj(a, l) {
      return a.reduce((B, f) => (u.isError(f) ? B.errors.push(u.prettyFormatErrorObj(f, l)) : B.args.push(f), B), { args: [], errors: [] });
    },
    prettyFormatErrorObj(a, l) {
      const B = g(u.getErrorTrace(a), l), f = jr(a).map((y, G) => {
        const L = `Caused by (${G + 1}): ${y.name ?? "Error"}${y.message ? `: ${y.message}` : ""}`, D = g(or(y, (b) => s(b)), l);
        return [L, ...D].join(`
`);
      }), k = {
        errorName: ` ${a.name} `,
        errorMessage: p(a),
        errorStack: [...B, ...f].join(`
`)
      };
      return cr(l, l.prettyErrorTemplate, k);
    },
    transportFormatted(a, l, B, f, k) {
      const y = k.stylePrettyLogs !== !1, G = (B.length > 0 && l.length > 0 ? `
` : "") + B.join(`
`), L = A(a), D = y ? a : L;
      if (h(y)) {
        k.prettyInspectOptions.colors = !1;
        const S = N(k.prettyInspectOptions, l), m = f != null ? I(k, f) : { text: L, styles: [] }, M = m.text.length > 0 && m.styles.length > 0, H = (M ? m.text : L) + S + G;
        M ? console.log(H, ...m.styles) : console.log(H);
        return;
      }
      k.prettyInspectOptions.colors = y;
      const b = N(k.prettyInspectOptions, l);
      console.log(D + b + G);
    },
    transportJSON(a) {
      console.log(pr(a));
    }
  };
  return Mr() === "test" && (u.__resetWorkingDirectoryCacheForTests = () => {
    c = void 0;
  }), u;
  function s(a) {
    return t ? d(a) : i(a);
  }
  function i(a) {
    if (typeof a != "string" || a.length === 0)
      return;
    const l = a.trim();
    if (!l.includes(" at ") && !l.startsWith("at "))
      return;
    const B = l.replace(/^at\s+/, "");
    let f, k = B;
    const y = B.match(/^(.*?)\s+\((.*)\)$/);
    y && (f = y[1], k = y[2]);
    const G = k.replace(/^\(/, "").replace(/\)$/, ""), L = G.replace(/\?.*$/, "");
    let D, b, S = L;
    const m = L.split(":");
    m.length >= 3 && /^\d+$/.test(m[m.length - 1] ?? "") ? (b = m.pop(), D = m.pop(), S = m.join(":")) : m.length >= 2 && /^\d+$/.test(m[m.length - 1] ?? "") && (D = m.pop(), S = m.join(":"));
    let M = S.replace(/^file:\/\//, "");
    const O = F();
    O != null && M.startsWith(O) && (M = M.slice(O.length), M = M.replace(/^[\\/]/, "")), M.length === 0 && (M = S);
    const H = V(M), Q = H.length > 0 ? H : M, dr = Q.split(/\\|\//), er = dr[dr.length - 1], Pr = er && D ? `${er}:${D}` : void 0, wr = Q && D ? `${Q}:${D}` : void 0;
    return {
      fullFilePath: G,
      fileName: er,
      fileNameWithLine: Pr,
      fileColumn: b,
      fileLine: D,
      filePath: Q,
      filePathWithLine: wr,
      method: f
    };
  }
  function d(a) {
    var D, b;
    const l = (D = globalThis.location) == null ? void 0 : D.origin;
    if (a == null)
      return;
    const B = a.match(qr);
    if (!B)
      return;
    const f = (b = B[1]) == null ? void 0 : b.replace(/\?.*$/, "");
    if (f == null)
      return;
    const k = f.split("/"), y = B[2], G = B[3], L = k[k.length - 1];
    return {
      fullFilePath: l ? `${l}${f}` : f,
      fileName: L,
      fileNameWithLine: L && y ? `${L}:${y}` : void 0,
      fileColumn: G,
      fileLine: y,
      filePath: f,
      filePathWithLine: y ? `${f}:${y}` : void 0,
      method: void 0
    };
  }
  function g(a, l) {
    return a.map((B) => cr(l, l.prettyErrorStackTemplate, { ...B }, !0));
  }
  function p(a) {
    return Object.getOwnPropertyNames(a).filter((l) => l !== "stack" && l !== "cause").reduce((l, B) => {
      const f = a[B];
      return typeof f == "function" || l.push(String(f)), l;
    }, []).join(", ");
  }
  function h(a) {
    return a && (o.name === "browser" || o.name === "worker") && Ur();
  }
  function A(a) {
    return a.replace(Qr, "");
  }
  function I(a, l) {
    var b;
    if (l == null)
      return { text: "", styles: [] };
    const { template: B, placeholders: f } = hr(a, l), k = [], y = [];
    let G = 0;
    const L = /{{(.+?)}}/g;
    let D;
    for (; (D = L.exec(B)) != null; ) {
      D.index > G && k.push(B.slice(G, D.index));
      const S = D[1], m = f[S] != null ? String(f[S]) : "", M = E((b = a.prettyLogStyles) == null ? void 0 : b[S], m), O = R(M);
      O.length > 0 ? (k.push(`%c${m}%c`), y.push(O, "")) : k.push(m), G = L.lastIndex;
    }
    return G < B.length && k.push(B.slice(G)), {
      text: k.join(""),
      styles: y
    };
  }
  function E(a, l) {
    if (a == null)
      return [];
    if (typeof a == "string")
      return [a];
    if (Array.isArray(a))
      return a.flatMap((B) => E(B, l));
    if (typeof a == "object") {
      const B = l.trim(), f = a[B] ?? a["*"];
      return f == null ? [] : E(f, l);
    }
    return [];
  }
  function R(a) {
    const l = /* @__PURE__ */ new Set(), B = [];
    for (const f of a) {
      const k = j(f);
      k != null && k.length > 0 && !l.has(k) && (l.add(k), B.push(k));
    }
    return B.join("; ");
  }
  function j(a) {
    const l = Xr[a];
    if (l != null)
      return `color: ${l}`;
    const B = Zr[a];
    if (B != null)
      return `background-color: ${B}`;
    switch (a) {
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
  function F() {
    return c === void 0 && (c = Kr() ?? null), c ?? void 0;
  }
  function W() {
    return o.name === "node" || o.name === "deno" || o.name === "bun";
  }
  function $() {
    return o.name === "node" || o.name === "deno" || o.name === "bun";
  }
  function z(a) {
    if (a.name === "browser" || a.name === "worker")
      return {
        runtime: a.name,
        browser: a.userAgent
      };
    const l = {
      runtime: a.name
    };
    return $() && (l.runtimeVersion = a.version ?? "unknown"), W() && (l.hostname = a.hostname ?? "unknown"), l;
  }
  function N(a, l) {
    try {
      return Yr(a, ...l);
    } catch {
      return l.map(_).join(" ");
    }
  }
  function _(a) {
    if (typeof a == "string")
      return a;
    try {
      return JSON.stringify(a);
    } catch {
      return String(a);
    }
  }
  function V(a) {
    if (typeof a != "string" || a.length === 0)
      return a;
    const l = a.replace(/\\+/g, "\\").replace(/\\/g, "/"), B = l.startsWith("//"), f = l.startsWith("/") && !B, k = l.match(/^[A-Za-z]:/), y = k ? k[0] : "", L = (y ? l.slice(y.length) : l).split("/"), D = [];
    for (const S of L)
      if (!(S === "" || S === ".")) {
        if (S === "..") {
          D.length > 0 && D.pop();
          continue;
        }
        D.push(S);
      }
    let b = D.join("/");
    return B ? b = `//${b}` : f ? b = `/${b}` : y !== "" && (b = `${y}${b.length > 0 ? `/${b}` : ""}`), b.length === 0 ? a : b;
  }
  function Y() {
    var B, f, k, y, G, L, D, b, S;
    if (Sr()) {
      const m = globalThis.navigator;
      return {
        name: "browser",
        userAgent: m == null ? void 0 : m.userAgent
      };
    }
    const a = globalThis;
    if (typeof a.importScripts == "function")
      return {
        name: "worker",
        userAgent: (B = a.navigator) == null ? void 0 : B.userAgent
      };
    const l = globalThis;
    if (l.Bun != null) {
      const m = l.Bun.version;
      return {
        name: "bun",
        version: m != null ? `bun/${m}` : void 0,
        hostname: w(l.process, l.Deno, l.Bun, l.location)
      };
    }
    if (l.Deno != null) {
      const m = J(l.Deno), M = (k = (f = l.Deno) == null ? void 0 : f.version) == null ? void 0 : k.deno;
      return {
        name: "deno",
        version: M != null ? `deno/${M}` : void 0,
        hostname: m ?? w(l.process, l.Deno, l.Bun, l.location)
      };
    }
    return ((G = (y = l.process) == null ? void 0 : y.versions) == null ? void 0 : G.node) != null || ((L = l.process) == null ? void 0 : L.version) != null ? {
      name: "node",
      version: ((b = (D = l.process) == null ? void 0 : D.versions) == null ? void 0 : b.node) ?? ((S = l.process) == null ? void 0 : S.version),
      hostname: w(l.process, l.Deno, l.Bun, l.location)
    } : l.process != null ? {
      name: "node",
      version: "unknown",
      hostname: w(l.process, l.Deno, l.Bun, l.location)
    } : {
      name: "unknown"
    };
  }
  function w(a, l, B, f) {
    var G, L, D, b, S, m, M;
    const k = ((G = a == null ? void 0 : a.env) == null ? void 0 : G.HOSTNAME) ?? ((L = a == null ? void 0 : a.env) == null ? void 0 : L.HOST) ?? ((D = a == null ? void 0 : a.env) == null ? void 0 : D.COMPUTERNAME);
    if (k != null && k.length > 0)
      return k;
    const y = ((b = B == null ? void 0 : B.env) == null ? void 0 : b.HOSTNAME) ?? ((S = B == null ? void 0 : B.env) == null ? void 0 : S.HOST) ?? ((m = B == null ? void 0 : B.env) == null ? void 0 : m.COMPUTERNAME);
    if (y != null && y.length > 0)
      return y;
    try {
      const O = (M = l == null ? void 0 : l.env) == null ? void 0 : M.get;
      if (typeof O == "function") {
        const H = O("HOSTNAME");
        if (H != null && H.length > 0)
          return H;
      }
    } catch {
    }
    if ((f == null ? void 0 : f.hostname) != null && f.hostname.length > 0)
      return f.hostname;
  }
  function J(a) {
    var B;
    try {
      if (typeof (a == null ? void 0 : a.hostname) == "function") {
        const f = a.hostname();
        if (f != null && f.length > 0)
          return f;
      }
    } catch {
    }
    const l = (B = globalThis.location) == null ? void 0 : B.hostname;
    if (l != null && l.length > 0)
      return l;
  }
  function Mr() {
    var l;
    const a = globalThis == null ? void 0 : globalThis.process;
    return (l = a == null ? void 0 : a.env) == null ? void 0 : l.NODE_ENV;
  }
  function Ar(a) {
    if (a instanceof Error)
      return !0;
    if (a != null && typeof a == "object") {
      const l = Object.prototype.toString.call(a);
      if (/\[object .*Error\]/.test(l))
        return !0;
      const B = a.name;
      if (typeof B == "string" && B.endsWith("Error"))
        return !0;
    }
    return !1;
  }
}
const Qr = /\u001b\[[0-9;]*m/g, Xr = {
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
}, Zr = {
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
}, qr = /(?:(?:file|https?|global code|[^@]+)@)?(?:file:)?((?:\/[^:/]+){2,})(?::(\d+))?(?::(\d+))?/, C = Jr();
class re {
  constructor(e, t, n = Number.NaN) {
    var c, u, s, i, d, g, p, h;
    this.logObj = t, this.stackDepthLevel = n, this.runtime = C, this.maxErrorCauseDepth = 5, this.settings = {
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
        mask: (c = e == null ? void 0 : e.overwrite) == null ? void 0 : c.mask,
        toLogObj: (u = e == null ? void 0 : e.overwrite) == null ? void 0 : u.toLogObj,
        addMeta: (s = e == null ? void 0 : e.overwrite) == null ? void 0 : s.addMeta,
        addPlaceholders: (i = e == null ? void 0 : e.overwrite) == null ? void 0 : i.addPlaceholders,
        formatMeta: (d = e == null ? void 0 : e.overwrite) == null ? void 0 : d.formatMeta,
        formatLogObj: (g = e == null ? void 0 : e.overwrite) == null ? void 0 : g.formatLogObj,
        transportFormatted: (p = e == null ? void 0 : e.overwrite) == null ? void 0 : p.transportFormatted,
        transportJSON: (h = e == null ? void 0 : e.overwrite) == null ? void 0 : h.transportJSON
      }
    }, this.captureStackForMeta = this._shouldCaptureStack();
  }
  log(e, t, ...n) {
    var I, E, R, j, F, W, $, z, N, _, V, Y;
    if (e < this.settings.minLevel)
      return;
    const c = this._resolveLogArguments(n), u = [...this.settings.prefix, ...c], s = ((I = this.settings.overwrite) == null ? void 0 : I.mask) != null ? (E = this.settings.overwrite) == null ? void 0 : E.mask(u) : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0 ? this._mask(u) : u, i = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0, d = ((R = this.settings.overwrite) == null ? void 0 : R.toLogObj) != null ? (j = this.settings.overwrite) == null ? void 0 : j.toLogObj(s, i) : this._toLogObj(s, i), g = ((F = this.settings.overwrite) == null ? void 0 : F.addMeta) != null ? (W = this.settings.overwrite) == null ? void 0 : W.addMeta(d, e, t) : this._addMetaToLogObj(d, e, t), p = g == null ? void 0 : g[this.settings.metaProperty];
    let h, A;
    if ((($ = this.settings.overwrite) == null ? void 0 : $.formatMeta) != null && (h = (z = this.settings.overwrite) == null ? void 0 : z.formatMeta(g == null ? void 0 : g[this.settings.metaProperty])), ((N = this.settings.overwrite) == null ? void 0 : N.formatLogObj) != null && (A = (_ = this.settings.overwrite) == null ? void 0 : _.formatLogObj(s, this.settings)), this.settings.type === "pretty" && (h = h ?? this._prettyFormatLogObjMeta(g == null ? void 0 : g[this.settings.metaProperty]), A = A ?? C.prettyFormatLogObj(s, this.settings)), h != null && A != null)
      if (((V = this.settings.overwrite) == null ? void 0 : V.transportFormatted) != null) {
        const w = this.settings.overwrite.transportFormatted, J = w.length;
        J < 4 ? w(h, A.args, A.errors) : J === 4 ? w(h, A.args, A.errors, p) : w(h, A.args, A.errors, p, this.settings);
      } else
        C.transportFormatted(h, A.args, A.errors, p, this.settings);
    else
      ((Y = this.settings.overwrite) == null ? void 0 : Y.transportJSON) != null ? this.settings.overwrite.transportJSON(g) : this.settings.type !== "hidden" && C.transportJSON(g);
    return this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0 && this.settings.attachedTransports.forEach((w) => {
      w(g);
    }), g;
  }
  attachTransport(e) {
    this.settings.attachedTransports.push(e);
  }
  getSubLogger(e, t) {
    var u, s, i;
    const n = {
      ...this.settings,
      ...e,
      parentNames: ((u = this.settings) == null ? void 0 : u.parentNames) != null && ((s = this.settings) == null ? void 0 : s.name) != null ? [...this.settings.parentNames, this.settings.name] : ((i = this.settings) == null ? void 0 : i.name) != null ? [this.settings.name] : void 0,
      prefix: [...this.settings.prefix, ...(e == null ? void 0 : e.prefix) ?? []]
    };
    return new this.constructor(n, t ?? this.logObj, this.stackDepthLevel);
  }
  _mask(e) {
    const t = this._getMaskKeys();
    return e == null ? void 0 : e.map((n) => this._recursiveCloneAndMaskValuesOfKeys(n, t));
  }
  _getMaskKeys() {
    var n;
    const e = this.settings.maskValuesOfKeys ?? [], t = e.map(String).join("|");
    if (this.settings.maskValuesOfKeysCaseInsensitive === !0) {
      if (((n = this.maskKeysCache) == null ? void 0 : n.source) === e && this.maskKeysCache.caseInsensitive === !0 && this.maskKeysCache.signature === t)
        return this.maskKeysCache.normalized;
      const c = e.map((u) => typeof u == "string" ? u.toLowerCase() : String(u).toLowerCase());
      return this.maskKeysCache = {
        source: e,
        caseInsensitive: !0,
        normalized: c,
        signature: t
      }, c;
    }
    return this.maskKeysCache = {
      source: e,
      caseInsensitive: !1,
      normalized: e,
      signature: t
    }, e;
  }
  _resolveLogArguments(e) {
    if (e.length === 1 && typeof e[0] == "function") {
      const t = e[0];
      if (t.length === 0) {
        const n = t();
        return Array.isArray(n) ? n : [n];
      }
    }
    return e;
  }
  _recursiveCloneAndMaskValuesOfKeys(e, t, n = []) {
    var c, u;
    if (n.includes(e))
      return { ...e };
    if (typeof e == "object" && e !== null && n.push(e), C.isError(e) || C.isBuffer(e))
      return e;
    if (e instanceof Map)
      return new Map(e);
    if (e instanceof Set)
      return new Set(e);
    if (Array.isArray(e))
      return e.map((s) => this._recursiveCloneAndMaskValuesOfKeys(s, t, n));
    if (e instanceof Date)
      return new Date(e.getTime());
    if (e instanceof URL)
      return Or(e);
    if (e !== null && typeof e == "object") {
      const s = C.isError(e) ? this._cloneError(e) : Object.create(Object.getPrototypeOf(e));
      return Object.getOwnPropertyNames(e).reduce((i, d) => {
        var p;
        const g = ((p = this.settings) == null ? void 0 : p.maskValuesOfKeysCaseInsensitive) !== !0 ? d : typeof d == "string" ? d.toLowerCase() : String(d).toLowerCase();
        return i[d] = t.includes(g) ? this.settings.maskPlaceholder : (() => {
          try {
            return this._recursiveCloneAndMaskValuesOfKeys(e[d], t, n);
          } catch {
            return null;
          }
        })(), i;
      }, s);
    } else {
      if (typeof e == "string") {
        let s = e;
        for (const i of ((c = this.settings) == null ? void 0 : c.maskValuesRegEx) || [])
          s = s.replace(i, ((u = this.settings) == null ? void 0 : u.maskPlaceholder) || "");
        return s;
      }
      return e;
    }
  }
  _recursiveCloneAndExecuteFunctions(e, t = []) {
    return this.isObjectOrArray(e) && t.includes(e) ? this.shallowCopy(e) : (this.isObjectOrArray(e) && t.push(e), Array.isArray(e) ? e.map((n) => this._recursiveCloneAndExecuteFunctions(n, t)) : e instanceof Date ? new Date(e.getTime()) : this.isObject(e) ? Object.getOwnPropertyNames(e).reduce((n, c) => {
      const u = Object.getOwnPropertyDescriptor(e, c);
      if (u) {
        Object.defineProperty(n, c, u);
        const s = e[c];
        n[c] = typeof s == "function" ? s() : this._recursiveCloneAndExecuteFunctions(s, t);
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
  _toLogObj(e, t = {}) {
    return e = e == null ? void 0 : e.map((n) => C.isError(n) ? this._toErrorObject(n) : n), this.settings.argumentsArrayName == null ? e.length === 1 && !Array.isArray(e[0]) && C.isBuffer(e[0]) !== !0 && !(e[0] instanceof Date) ? t = typeof e[0] == "object" && e[0] != null ? { ...e[0], ...t } : { 0: e[0], ...t } : t = { ...t, ...e } : t = {
      ...t,
      [this.settings.argumentsArrayName]: e
    }, t;
  }
  _cloneError(e) {
    const t = new e.constructor();
    return Object.getOwnPropertyNames(e).forEach((n) => {
      t[n] = e[n];
    }), t;
  }
  _toErrorObject(e, t = 0, n = /* @__PURE__ */ new Set()) {
    n.has(e) || n.add(e);
    const c = {
      nativeError: e,
      name: e.name ?? "Error",
      message: e.message,
      stack: C.getErrorTrace(e)
    };
    if (t >= this.maxErrorCauseDepth)
      return c;
    const u = e.cause;
    if (u != null) {
      const s = yr(u);
      n.has(s) || (c.cause = this._toErrorObject(s, t + 1, n));
    }
    return c;
  }
  _addMetaToLogObj(e, t, n) {
    return {
      ...e,
      [this.settings.metaProperty]: C.getMeta(t, n, this.stackDepthLevel, !this.captureStackForMeta, this.settings.name, this.settings.parentNames)
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
    return hr(this.settings, e).text;
  }
}
class ee extends re {
  constructor(e, t) {
    const n = typeof window < "u" && typeof document < "u", c = { ...e ?? {} };
    n && (c.stylePrettyLogs = (e == null ? void 0 : e.stylePrettyLogs) ?? !0), super(c, t, Number.NaN);
  }
  log(e, t, ...n) {
    return super.log(e, t, ...n);
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
  getSubLogger(e, t) {
    return super.getSubLogger(e, t);
  }
}
function oe() {
  const o = /* @__PURE__ */ new Date(), e = o.getFullYear(), t = String(o.getMonth() + 1).padStart(2, "0"), n = String(o.getDate()).padStart(2, "0");
  return `agenteditor/log/log-${e}-${t}-${n}.log`;
}
class te {
  constructor(e, t) {
    U(this, "filePath");
    U(this, "studioPro");
    U(this, "logQueue", []);
    U(this, "isProcessing", !1);
    this.filePath = e, this.studioPro = t;
  }
  log(e) {
    const t = e._meta, n = new Date(t.date).toISOString(), c = t.logLevelName.toUpperCase(), u = [];
    for (const d in e)
      d !== "_meta" && u.push(e[d]);
    const s = u.map((d) => d instanceof Error ? JSON.stringify({
      name: d.name,
      message: d.message,
      stack: d.stack
    }) : typeof d == "object" && d !== null ? JSON.stringify(d, (g, p) => p === void 0 ? null : p) : String(d)).join(" "), i = `[${n}] ${c}: ${s}
`;
    this.logQueue.push(i), this.processQueue();
  }
  async processQueue() {
    if (!(this.isProcessing || this.logQueue.length === 0)) {
      this.isProcessing = !0;
      try {
        const e = [...this.logQueue];
        this.logQueue = [];
        let t = "";
        try {
          t = await this.studioPro.app.files.getFile(this.filePath) || "";
        } catch {
        }
        await this.studioPro.app.files.putFile(this.filePath, t + e.join(""));
      } catch (e) {
        console.error("Failed to write logs to file:", e);
      } finally {
        this.isProcessing = !1, this.logQueue.length > 0 && setTimeout(() => this.processQueue(), 0);
      }
    }
  }
}
function Be(o) {
  const e = oe(), t = new te(e, o), n = new ee({
    minLevel: 0,
    // 0: silly, 1: trace, 2: debug, 3: info, 4: warn, 5: error, 6: fatal
    type: "pretty",
    stylePrettyLogs: !1,
    // No colors in console
    hideLogPositionForProduction: !0
    // Hides file path and line number
  });
  return n.attachTransport((c) => {
    t.log(c);
  }), n;
}
var ne = Object.defineProperty, ae = (o, e) => ne(o, "name", { value: e, configurable: !0 });
const r = { get borderRadiusFull() {
  return "9999px";
}, get borderRadiusXs() {
  return "2px";
}, get borderWidthLg() {
  return "2px";
}, get borderWidthMd() {
  return "1px";
}, get colorsDarkBrandAlphaBlue52() {
  return "#3a65e533";
}, get colorsDarkBrandAlphaBlue54() {
  return "#3a65e566";
}, get colorsDarkBrandAlphaBlue75() {
  return "#146ff480";
}, get colorsDarkBrandAlphaGrey0() {
  return "#ffffff00";
}, get colorsDarkBrandAlphaGrey35() {
  return "#3e3e3e80";
}, get colorsDarkBrandAlphaGrey45() {
  return "#4f4f4f80";
}, get colorsDarkBrandAlphaGrey75() {
  return "#a4a4a480";
}, get colorsDarkBrandAlphaGrey95() {
  return "#dedede80";
}, get colorsDarkBrandBlue4() {
  return "#344bceff";
}, get colorsDarkBrandBlue5() {
  return "#3a65e5ff";
}, get colorsDarkBrandBlue6() {
  return "#4481f2ff";
}, get colorsDarkBrandBlue7() {
  return "#579bf9ff";
}, get colorsDarkBrandBlue8() {
  return "#6db1feff";
}, get colorsDarkBrandBlue9() {
  return "#8ac4ffff";
}, get colorsDarkBrandGreen4() {
  return "#289d28ff";
}, get colorsDarkBrandGreen5() {
  return "#34b634ff";
}, get colorsDarkBrandGreen7() {
  return "#5bdb5bff";
}, get colorsDarkBrandGrey0() {
  return "#171717ff";
}, get colorsDarkBrandGrey1() {
  return "#252525ff";
}, get colorsDarkBrandGrey10() {
  return "#ffffffff";
}, get colorsDarkBrandGrey2() {
  return "#313131ff";
}, get colorsDarkBrandGrey3() {
  return "#3e3e3eff";
}, get colorsDarkBrandGrey4() {
  return "#4f4f4fff";
}, get colorsDarkBrandGrey5() {
  return "#646464ff";
}, get colorsDarkBrandGrey6() {
  return "#848484ff";
}, get colorsDarkBrandGrey7() {
  return "#a4a4a4ff";
}, get colorsDarkBrandGrey8() {
  return "#c5c5c5ff";
}, get colorsDarkBrandGrey9() {
  return "#dededeff";
}, get colorsDarkBrandMergedColorsBlue52Solid() {
  return "#333b55ff";
}, get colorsDarkBrandMergedColorsGreen52Solid() {
  return "#324c32ff";
}, get colorsDarkBrandMergedColorsGrey52Solid() {
  return "#3b3b3bff";
}, get colorsDarkBrandMergedColorsOrange52Solid() {
  return "#533e33ff";
}, get colorsDarkBrandMergedColorsPurple52Solid() {
  return "#3a3453ff";
}, get colorsDarkBrandMergedColorsRed52Solid() {
  return "#523233ff";
}, get colorsDarkBrandMergedColorsYellow52Solid() {
  return "#554a33ff";
}, get colorsDarkBrandOrange4() {
  return "#c05c2eff";
}, get colorsDarkBrandOrange7() {
  return "#f69558ff";
}, get colorsDarkBrandPurple4() {
  return "#5131c5ff";
}, get colorsDarkBrandPurple5() {
  return "#603edcff";
}, get colorsDarkBrandPurple7() {
  return "#8568f8ff";
}, get colorsDarkBrandPurple9() {
  return "#afa1ffff";
}, get colorsDarkBrandRed4() {
  return "#ba2b37ff";
}, get colorsDarkBrandRed7() {
  return "#f25c5cff";
}, get colorsDarkBrandRed8() {
  return "#fe7777ff";
}, get colorsDarkBrandYellow4() {
  return "#c7912eff";
}, get colorsDarkBrandYellow5() {
  return "#e3ae3bff";
}, get colorsDarkBrandYellow7() {
  return "#fbcf55ff";
}, get colorsLightBrandAlphaBlue52() {
  return "#47a9ff33";
}, get colorsLightBrandAlphaBlue54() {
  return "#47a9ff66";
}, get colorsLightBrandAlphaBlue75() {
  return "#146ff480";
}, get colorsLightBrandAlphaGrey0() {
  return "#0a132400";
}, get colorsLightBrandAlphaGrey45() {
  return "#d9dbdd80";
}, get colorsLightBrandAlphaGrey65() {
  return "#9ea2a980";
}, get colorsLightBrandAlphaGrey75() {
  return "#6b707b80";
}, get colorsLightBrandAlphaGrey95() {
  return "#2f364680";
}, get colorsLightBrandBlue1() {
  return "#dceefeff";
}, get colorsLightBrandBlue2() {
  return "#c2e2ffff";
}, get colorsLightBrandBlue4() {
  return "#6ebdffff";
}, get colorsLightBrandBlue5() {
  return "#47a9ffff";
}, get colorsLightBrandBlue7() {
  return "#146ff4ff";
}, get colorsLightBrandBlue8() {
  return "#064ae4ff";
}, get colorsLightBrandBlue9() {
  return "#0123c6ff";
}, get colorsLightBrandGreen2() {
  return "#b8f3b8ff";
}, get colorsLightBrandGreen5() {
  return "#4fd84fff";
}, get colorsLightBrandGreen8() {
  return "#0d990dff";
}, get colorsLightBrandGreen9() {
  return "#0a7d0aff";
}, get colorsLightBrandGrey0() {
  return "#ffffffff";
}, get colorsLightBrandGrey1() {
  return "#f7f7f7ff";
}, get colorsLightBrandGrey10() {
  return "#0a1324ff";
}, get colorsLightBrandGrey2() {
  return "#f2f2f3ff";
}, get colorsLightBrandGrey3() {
  return "#e7e7e9ff";
}, get colorsLightBrandGrey4() {
  return "#d9dbddff";
}, get colorsLightBrandGrey5() {
  return "#c1c3c8ff";
}, get colorsLightBrandGrey6() {
  return "#9ea2a9ff";
}, get colorsLightBrandGrey7() {
  return "#6b707bff";
}, get colorsLightBrandGrey8() {
  return "#535965ff";
}, get colorsLightBrandGrey9() {
  return "#2f3646ff";
}, get colorsLightBrandOrange10() {
  return "#7d1401ff";
}, get colorsLightBrandOrange2() {
  return "#ffd6b7ff";
}, get colorsLightBrandOrange4() {
  return "#fea166ff";
}, get colorsLightBrandOrange7() {
  return "#db5f12ff";
}, get colorsLightBrandPurple2() {
  return "#cdc4ffff";
}, get colorsLightBrandPurple4() {
  return "#9c81feff";
}, get colorsLightBrandPurple6() {
  return "#6e3afdff";
}, get colorsLightBrandRed2() {
  return "#fec3c3ff";
}, get colorsLightBrandRed4() {
  return "#fd7072ff";
}, get colorsLightBrandRed7() {
  return "#d31e23ff";
}, get colorsLightBrandYellow2() {
  return "#ffe9acff";
}, get colorsLightBrandYellow5() {
  return "#fcc73aff";
}, get colorsLightBrandYellow8() {
  return "#c97800ff";
}, get colorsLightBrandYellow9() {
  return "#a05700ff";
}, get fontSizeMd() {
  return "12px";
}, get fontWeightRegular() {
  return "Regular";
}, get lineHeightMd() {
  return "16px";
}, get size0() {
  return "0px";
}, get size12() {
  return "12px";
}, get size16() {
  return "16px";
}, get size24() {
  return "24px";
}, get size4() {
  return "4px";
}, get spacing0() {
  return "0px";
}, get spacing16() {
  return "16px";
}, get spacing2() {
  return "2px";
}, get spacing20() {
  return "20px";
}, get spacing4() {
  return "4px";
}, get spacing8() {
  return "8px";
} };
let le;
const fe = { name: "light", get devTokens() {
  return le ?? (le = new q(this));
}, get colorsAccentBlack() {
  return r.colorsLightBrandGrey10;
}, get colorsAccentDefaultBlue() {
  return r.colorsLightBrandBlue7;
}, get colorsAccentDefaultGreen() {
  return r.colorsLightBrandGreen8;
}, get colorsAccentDefaultGrey() {
  return r.colorsLightBrandGrey8;
}, get colorsAccentDefaultOrange() {
  return r.colorsLightBrandOrange7;
}, get colorsAccentDefaultPurple() {
  return r.colorsLightBrandPurple6;
}, get colorsAccentDefaultRed() {
  return r.colorsLightBrandRed7;
}, get colorsAccentDefaultYellow() {
  return r.colorsLightBrandYellow8;
}, get colorsAccentInverse() {
  return r.colorsLightBrandGrey0;
}, get colorsAccentMxdockBlue() {
  return r.colorsDarkBrandBlue7;
}, get colorsAccentMxdockGreen() {
  return r.colorsDarkBrandGreen7;
}, get colorsAccentMxdockGrey() {
  return r.colorsDarkBrandGrey7;
}, get colorsAccentMxdockRed() {
  return r.colorsDarkBrandRed7;
}, get colorsAccentMxdockWhite() {
  return r.colorsLightBrandGrey0;
}, get colorsAccentSubtlerBlue() {
  return r.colorsLightBrandBlue5;
}, get colorsAccentSubtlerGreen() {
  return r.colorsLightBrandGreen5;
}, get colorsAccentSubtlerGrey() {
  return r.colorsLightBrandGrey5;
}, get colorsAccentSubtlerOrange() {
  return r.colorsLightBrandOrange4;
}, get colorsAccentSubtlerPurple() {
  return r.colorsLightBrandPurple4;
}, get colorsAccentSubtlerRed() {
  return r.colorsLightBrandRed4;
}, get colorsAccentSubtlerYellow() {
  return r.colorsLightBrandYellow5;
}, get colorsAccentSubtlestBlue() {
  return r.colorsLightBrandBlue2;
}, get colorsAccentSubtlestGreen() {
  return r.colorsLightBrandGreen2;
}, get colorsAccentSubtlestGrey() {
  return r.colorsLightBrandGrey2;
}, get colorsAccentSubtlestOrange() {
  return r.colorsLightBrandOrange2;
}, get colorsAccentSubtlestPurple() {
  return r.colorsLightBrandPurple2;
}, get colorsAccentSubtlestRed() {
  return r.colorsLightBrandRed2;
}, get colorsAccentSubtlestYellow() {
  return r.colorsLightBrandYellow2;
}, get colorsAccentWhite() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundOutline() {
  return r.colorsLightBrandAlphaGrey0;
}, get colorsBackgroundActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundBrandingAppIconPrimary() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundBrandingAppIconSecondary() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundBrandingSplashScreenBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundButtonCloseButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundButtonCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundButtonCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundButtonIdeButtonDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundButtonIdeButtonHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundButtonIdeButtonPressed() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundButtonMinMaxButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundButtonMinMaxButtonHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundButtonMinMaxButtonPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundButtonNotificationButtonCloseButtonHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundButtonNotificationButtonCloseButtonPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundButtonNotificationButtonPrimaryDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundButtonNotificationButtonPrimaryHover() {
  return r.colorsDarkBrandBlue6;
}, get colorsBackgroundButtonNotificationButtonPrimaryPressed() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundButtonNotificationButtonSecondaryDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonNotificationButtonSecondaryHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundButtonNotificationButtonSecondaryPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonPrimaryButtonDefault() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundButtonPrimaryButtonHover() {
  return r.colorsLightBrandBlue8;
}, get colorsBackgroundButtonPrimaryButtonPressed() {
  return r.colorsLightBrandBlue9;
}, get colorsBackgroundButtonSecondaryButtonHover() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundButtonSecondaryButtonPressed() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundCanvasBase() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundCodeEditorTextSelection() {
  return r.colorsLightBrandAlphaBlue52;
}, get colorsBackgroundDark() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundDesignPropertiesSpacingDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundDesignPropertiesSpacingHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundDesignPropertiesSpacingLockLocked() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundDesignPropertiesSpacingLockUnlock() {
  return r.colorsLightBrandGrey6;
}, get colorsBackgroundDesignPropertiesSpacingSelected() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundDesignPropertiesToggleDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundDesignPropertiesToggleHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundDesignPropertiesToggleSelected() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundDomainModelAttributeDiffAdded() {
  return r.colorsLightBrandGreen2;
}, get colorsBackgroundDomainModelAttributeDiffChanged() {
  return r.colorsLightBrandYellow2;
}, get colorsBackgroundDomainModelAttributeDiffDeleted() {
  return r.colorsLightBrandRed2;
}, get colorsBackgroundDomainModelAttributeSource() {
  return r.colorsLightBrandBlue1;
}, get colorsBackgroundDomainModelEntityBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundDomainModelEntityHeaderExternal() {
  return r.colorsLightBrandPurple2;
}, get colorsBackgroundDomainModelEntityHeaderMapping() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundDomainModelEntityHeaderNonPersistable() {
  return r.colorsLightBrandYellow2;
}, get colorsBackgroundDomainModelEntityHeaderPersistable() {
  return r.colorsLightBrandBlue2;
}, get colorsBackgroundDomainModelEntityHeaderView() {
  return r.colorsLightBrandGreen2;
}, get colorsBackgroundDomainModelEntitySidebarExternal() {
  return r.colorsLightBrandPurple4;
}, get colorsBackgroundDomainModelEntitySidebarMapping() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundDomainModelEntitySidebarNonPersistable() {
  return r.colorsLightBrandYellow5;
}, get colorsBackgroundDomainModelEntitySidebarPersistable() {
  return r.colorsLightBrandBlue5;
}, get colorsBackgroundDomainModelEntitySidebarView() {
  return r.colorsLightBrandGreen5;
}, get colorsBackgroundImagePreview() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundInputActionHover() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundInputBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundInputReadOnly() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundInputTextSelection() {
  return r.colorsLightBrandBlue4;
}, get colorsBackgroundInverse() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundLoadingBarBar() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundLoadingBarFill() {
  return r.colorsLightBrandGreen8;
}, get colorsBackgroundMenuItemDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundMenuItemHover() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundMenuItemPressed() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundMicroflowAnchorDefault() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundMicroflowAnchorHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundMicroflowErrorHandle() {
  return this.colorsAccentDefaultYellow;
}, get colorsBackgroundMicroflowHandleDefault() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundMicroflowHandleHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundMicroflowSelection() {
  return r.colorsLightBrandAlphaBlue52;
}, get colorsBackgroundMxchatMessageAiDefault() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundMxchatMessageUserDefault() {
  return r.colorsLightBrandAlphaBlue54;
}, get colorsBackgroundMxdockBase() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockCloseButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundMxdockCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundMxdockMenuDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockMenuHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundMxdockMenuPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundMxdockMinMaxButtonDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsBackgroundMxdockMinMaxButtonHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundMxdockMinMaxButtonPressed() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundMxdockRunViewButtonDefault() {
  return r.colorsLightBrandGrey9;
}, get colorsBackgroundMxdockRunViewButtonHover() {
  return r.colorsLightBrandGrey8;
}, get colorsBackgroundMxdockRunViewButtonPressed() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundMyappsContent() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundMyappsMenuButtonHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundMyappsMenuButtonPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundMyappsPrimaryButtonDefault() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundMyappsPrimaryButtonHover() {
  return r.colorsLightBrandBlue8;
}, get colorsBackgroundMyappsPrimaryButtonPressed() {
  return r.colorsLightBrandBlue9;
}, get colorsBackgroundMyappsSecondaryButtonHover() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundMyappsSecondaryButtonPressed() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundMyappsSidebar() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundPaneBase() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundPaneHeader() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundPaneRow() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundScrollbarArrowDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundScrollbarArrowHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundScrollbarArrowPressed() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundScrollbarThumbDefault() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundScrollbarThumbHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundScrollbarThumbPressed() {
  return r.colorsLightBrandGrey6;
}, get colorsBackgroundScrollbarTrack() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbDefault() {
  return r.colorsLightBrandAlphaGrey65;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbHover() {
  return r.colorsLightBrandAlphaGrey75;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackDefault() {
  return r.colorsLightBrandAlphaGrey0;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackHover() {
  return r.colorsLightBrandAlphaGrey45;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbDefault() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundScrollbarWebScrollbarPaneTrackDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundStepperDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundStepperHover() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundStepperPressed() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundSwitchOffDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBackgroundSwitchOffHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBackgroundSwitchOnDefault() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundSwitchThumb() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTabDockBase() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTabDockDropdownHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundTabDockDropdownPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTabDockItemCloseButtonHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundTabDockItemCloseButtonPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTabDockItemSelected() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTabDockItemUnselected() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTabMenuSelected() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTabMenuUnselected() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundTableBase() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTableCellPrimary() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundTableCellSecondary() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTableHeaderDefault() {
  return r.colorsLightBrandGrey2;
}, get colorsBackgroundTableHeaderHover() {
  return r.colorsLightBrandGrey3;
}, get colorsBackgroundTableHeaderPressed() {
  return r.colorsLightBrandGrey4;
}, get colorsBackgroundTableLayout() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowAnnotationButton() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundWorkflowEmptyOutcome() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowGeneralActivity() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowJumpCounter() {
  return r.colorsLightBrandGrey1;
}, get colorsBackgroundWorkflowNonGeneralActivity() {
  return r.colorsLightBrandGrey0;
}, get colorsBackgroundWorkflowStartEnd() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderAssistbotBulbDefault() {
  return r.colorsLightBrandAlphaBlue75;
}, get colorsBorderButtonsDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderButtonsGhostButtonHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderButtonsNotificationSecondary() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderButtonsToolbarActionButtonActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderButtonsToolbarActionButtonHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderButtonsToolbarActionButtonSelected() {
  return r.colorsLightBrandGrey8;
}, get colorsBorderDivider() {
  return r.colorsLightBrandGrey4;
}, get colorsBorderDomainModelActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderDomainModelDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderDomainModelDiffAdded() {
  return r.colorsLightBrandGreen5;
}, get colorsBorderDomainModelDiffDeleted() {
  return r.colorsLightBrandRed4;
}, get colorsBorderDomainModelHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBorderFocus() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderHover() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderInputActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderInputDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderInputHover() {
  return r.colorsLightBrandGrey7;
}, get colorsBorderKeyboardFocus() {
  return r.colorsLightBrandGrey6;
}, get colorsBorderLoadingBar() {
  return r.colorsLightBrandGrey4;
}, get colorsBorderModal() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderMxchatMessageAiDefault() {
  return r.colorsLightBrandGrey3;
}, get colorsBorderMxdockMenuDivider() {
  return r.colorsLightBrandGrey8;
}, get colorsBorderPane() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderPrimary() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderSecondary() {
  return r.colorsLightBrandGrey4;
}, get colorsBorderSelected() {
  return r.colorsLightBrandGrey8;
}, get colorsBorderSelectorHover() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderSelectorSelected() {
  return r.colorsLightBrandGrey9;
}, get colorsBorderSelectorUnselected() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderTreeViewNestingLine() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderWebScrollbarCanvasThumbDefault() {
  return r.colorsLightBrandAlphaGrey75;
}, get colorsBorderWebScrollbarThumbPaneDefault() {
  return r.colorsLightBrandGrey6;
}, get colorsBorderWorkflowActive() {
  return r.colorsLightBrandBlue7;
}, get colorsBorderWorkflowDefault() {
  return r.colorsLightBrandGrey5;
}, get colorsBorderWorkflowHover() {
  return r.colorsLightBrandGrey7;
}, get colorsTextToggle() {
  return r.colorsLightBrandGrey10;
}, get colorsTextActive() {
  return r.colorsLightBrandBlue7;
}, get colorsTextButtonsIdeDefault() {
  return r.colorsLightBrandGrey10;
}, get colorsTextButtonsNotificationDefault() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextButtonsPrimary() {
  return r.colorsLightBrandGrey0;
}, get colorsTextButtonsSecondary() {
  return r.colorsLightBrandGrey10;
}, get colorsTextCodeErrors() {
  return r.colorsLightBrandRed7;
}, get colorsTextCodeFunctions() {
  return r.colorsLightBrandGreen9;
}, get colorsTextCodeIdentifiers() {
  return r.colorsLightBrandBlue7;
}, get colorsTextCodeKeywords() {
  return r.colorsLightBrandBlue9;
}, get colorsTextCodeOperators() {
  return r.colorsLightBrandGrey9;
}, get colorsTextCodeRuntimeTokens() {
  return r.colorsLightBrandPurple6;
}, get colorsTextCodeStringAndNumberLiterals() {
  return r.colorsLightBrandOrange10;
}, get colorsTextCodeVariables() {
  return r.colorsLightBrandYellow9;
}, get colorsTextInfo() {
  return r.colorsLightBrandBlue7;
}, get colorsTextInverse() {
  return r.colorsLightBrandGrey0;
}, get colorsTextLink() {
  return r.colorsLightBrandBlue7;
}, get colorsTextModalHeader() {
  return r.colorsLightBrandGrey0;
}, get colorsTextMxdockLink() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextMxdockMenu() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextMxdockPrimary() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextMxdockSecondary() {
  return r.colorsDarkBrandGrey7;
}, get colorsTextPrimaryDefault() {
  return r.colorsLightBrandGrey9;
}, get colorsTextPrimaryDisabled() {
  return r.colorsLightBrandAlphaGrey95;
}, get colorsTextSecondaryDefault() {
  return r.colorsLightBrandGrey7;
}, get colorsTextSecondaryDisabled() {
  return r.colorsLightBrandAlphaGrey75;
} };
let ce;
const se = { name: "dark", get devTokens() {
  return ce ?? (ce = new q(this));
}, get colorsAccentBlack() {
  return r.colorsDarkBrandGrey0;
}, get colorsAccentDefaultBlue() {
  return r.colorsDarkBrandBlue7;
}, get colorsAccentDefaultGreen() {
  return r.colorsDarkBrandGreen7;
}, get colorsAccentDefaultGrey() {
  return r.colorsDarkBrandGrey7;
}, get colorsAccentDefaultOrange() {
  return r.colorsDarkBrandOrange7;
}, get colorsAccentDefaultPurple() {
  return r.colorsDarkBrandPurple7;
}, get colorsAccentDefaultRed() {
  return r.colorsDarkBrandRed7;
}, get colorsAccentDefaultYellow() {
  return r.colorsDarkBrandYellow7;
}, get colorsAccentInverse() {
  return r.colorsDarkBrandGrey1;
}, get colorsAccentMxdockBlue() {
  return r.colorsDarkBrandBlue7;
}, get colorsAccentMxdockGreen() {
  return r.colorsDarkBrandGreen7;
}, get colorsAccentMxdockGrey() {
  return r.colorsDarkBrandGrey7;
}, get colorsAccentMxdockRed() {
  return r.colorsDarkBrandRed7;
}, get colorsAccentMxdockWhite() {
  return r.colorsDarkBrandGrey10;
}, get colorsAccentSubtlerBlue() {
  return r.colorsDarkBrandBlue4;
}, get colorsAccentSubtlerGreen() {
  return r.colorsDarkBrandGreen4;
}, get colorsAccentSubtlerGrey() {
  return r.colorsDarkBrandGrey5;
}, get colorsAccentSubtlerOrange() {
  return r.colorsDarkBrandOrange4;
}, get colorsAccentSubtlerPurple() {
  return r.colorsDarkBrandPurple4;
}, get colorsAccentSubtlerRed() {
  return r.colorsDarkBrandRed4;
}, get colorsAccentSubtlerYellow() {
  return r.colorsDarkBrandYellow4;
}, get colorsAccentSubtlestBlue() {
  return r.colorsDarkBrandMergedColorsBlue52Solid;
}, get colorsAccentSubtlestGreen() {
  return r.colorsDarkBrandMergedColorsGreen52Solid;
}, get colorsAccentSubtlestGrey() {
  return r.colorsDarkBrandMergedColorsGrey52Solid;
}, get colorsAccentSubtlestOrange() {
  return r.colorsDarkBrandMergedColorsOrange52Solid;
}, get colorsAccentSubtlestPurple() {
  return r.colorsDarkBrandMergedColorsPurple52Solid;
}, get colorsAccentSubtlestRed() {
  return r.colorsDarkBrandMergedColorsRed52Solid;
}, get colorsAccentSubtlestYellow() {
  return r.colorsDarkBrandMergedColorsYellow52Solid;
}, get colorsAccentWhite() {
  return r.colorsDarkBrandGrey10;
}, get colorsBackgroundOutline() {
  return r.colorsDarkBrandAlphaGrey0;
}, get colorsBackgroundActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundBrandingAppIconPrimary() {
  return r.colorsLightBrandBlue7;
}, get colorsBackgroundBrandingAppIconSecondary() {
  return r.colorsDarkBrandGrey10;
}, get colorsBackgroundBrandingSplashScreenBase() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonCloseButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundButtonCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundButtonIdeButtonDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundButtonIdeButtonHover() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundButtonIdeButtonPressed() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundButtonMinMaxButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonMinMaxButtonHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundButtonMinMaxButtonPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonNotificationButtonCloseButtonHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonNotificationButtonCloseButtonPressed() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundButtonNotificationButtonPrimaryDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundButtonNotificationButtonPrimaryHover() {
  return r.colorsDarkBrandBlue6;
}, get colorsBackgroundButtonNotificationButtonPrimaryPressed() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundButtonNotificationButtonSecondaryDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundButtonNotificationButtonSecondaryHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundButtonNotificationButtonSecondaryPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundButtonPrimaryButtonDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundButtonPrimaryButtonHover() {
  return r.colorsDarkBrandBlue8;
}, get colorsBackgroundButtonPrimaryButtonPressed() {
  return r.colorsDarkBrandBlue9;
}, get colorsBackgroundButtonSecondaryButtonHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundButtonSecondaryButtonPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundCanvasBase() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundCodeEditorTextSelection() {
  return r.colorsDarkBrandAlphaBlue52;
}, get colorsBackgroundDark() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundDesignPropertiesSpacingDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundDesignPropertiesSpacingHover() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundDesignPropertiesSpacingLockLocked() {
  return r.colorsDarkBrandGrey8;
}, get colorsBackgroundDesignPropertiesSpacingLockUnlock() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundDesignPropertiesSpacingSelected() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundDesignPropertiesToggleDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundDesignPropertiesToggleHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundDesignPropertiesToggleSelected() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundDomainModelAttributeDiffAdded() {
  return r.colorsDarkBrandMergedColorsGreen52Solid;
}, get colorsBackgroundDomainModelAttributeDiffChanged() {
  return r.colorsDarkBrandMergedColorsYellow52Solid;
}, get colorsBackgroundDomainModelAttributeDiffDeleted() {
  return r.colorsDarkBrandMergedColorsRed52Solid;
}, get colorsBackgroundDomainModelAttributeSource() {
  return "#2b2f3fff";
}, get colorsBackgroundDomainModelEntityBase() {
  return "#1e1e1eff";
}, get colorsBackgroundDomainModelEntityHeaderExternal() {
  return r.colorsDarkBrandMergedColorsPurple52Solid;
}, get colorsBackgroundDomainModelEntityHeaderMapping() {
  return r.colorsDarkBrandMergedColorsGrey52Solid;
}, get colorsBackgroundDomainModelEntityHeaderNonPersistable() {
  return r.colorsDarkBrandMergedColorsYellow52Solid;
}, get colorsBackgroundDomainModelEntityHeaderPersistable() {
  return r.colorsDarkBrandMergedColorsBlue52Solid;
}, get colorsBackgroundDomainModelEntityHeaderView() {
  return r.colorsDarkBrandMergedColorsGreen52Solid;
}, get colorsBackgroundDomainModelEntitySidebarExternal() {
  return r.colorsDarkBrandPurple5;
}, get colorsBackgroundDomainModelEntitySidebarMapping() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundDomainModelEntitySidebarNonPersistable() {
  return r.colorsDarkBrandYellow5;
}, get colorsBackgroundDomainModelEntitySidebarPersistable() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundDomainModelEntitySidebarView() {
  return r.colorsDarkBrandGreen5;
}, get colorsBackgroundImagePreview() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundInputActionHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundInputBase() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundInputReadOnly() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundInputTextSelection() {
  return r.colorsDarkBrandBlue4;
}, get colorsBackgroundInverse() {
  return r.colorsDarkBrandGrey9;
}, get colorsBackgroundLoadingBarBar() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundLoadingBarFill() {
  return r.colorsDarkBrandGreen7;
}, get colorsBackgroundMenuItemDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMenuItemHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundMenuItemPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundMicroflowAnchorDefault() {
  return r.colorsDarkBrandGrey9;
}, get colorsBackgroundMicroflowAnchorHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundMicroflowErrorHandle() {
  return this.colorsAccentDefaultYellow;
}, get colorsBackgroundMicroflowHandleDefault() {
  return r.colorsDarkBrandGrey9;
}, get colorsBackgroundMicroflowHandleHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundMicroflowSelection() {
  return r.colorsDarkBrandAlphaBlue52;
}, get colorsBackgroundMxchatMessageAiDefault() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxchatMessageUserDefault() {
  return r.colorsDarkBrandAlphaBlue54;
}, get colorsBackgroundMxdockBase() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockCloseButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockCloseButtonHover() {
  return "#e81123ff";
}, get colorsBackgroundMxdockCloseButtonPressed() {
  return "#f1707aff";
}, get colorsBackgroundMxdockMenuDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockMenuHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundMxdockMenuPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxdockMinMaxButtonDefault() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundMxdockMinMaxButtonHover() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundMxdockMinMaxButtonPressed() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxdockRunViewButtonDefault() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundMxdockRunViewButtonHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMxdockRunViewButtonPressed() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundMyappsContent() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundMyappsMenuButtonHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundMyappsMenuButtonPressed() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundMyappsPrimaryButtonDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundMyappsPrimaryButtonHover() {
  return r.colorsDarkBrandBlue6;
}, get colorsBackgroundMyappsPrimaryButtonPressed() {
  return r.colorsDarkBrandBlue5;
}, get colorsBackgroundMyappsSecondaryButtonHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundMyappsSecondaryButtonPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundMyappsSidebar() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundPaneBase() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundPaneHeader() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundPaneRow() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundScrollbarArrowDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundScrollbarArrowHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundScrollbarArrowPressed() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundScrollbarThumbDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundScrollbarThumbHover() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundScrollbarThumbPressed() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundScrollbarTrack() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbDefault() {
  return r.colorsDarkBrandAlphaGrey35;
}, get colorsBackgroundScrollbarWebScrollbarCanvasThumbHover() {
  return r.colorsDarkBrandAlphaGrey45;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackDefault() {
  return r.colorsDarkBrandAlphaGrey0;
}, get colorsBackgroundScrollbarWebScrollbarCanvasTrackHover() {
  return r.colorsDarkBrandAlphaGrey45;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundScrollbarWebScrollbarPaneThumbHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundScrollbarWebScrollbarPaneTrackDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundStepperDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundStepperHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundStepperPressed() {
  return r.colorsDarkBrandGrey5;
}, get colorsBackgroundSwitchOffDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundSwitchOffHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBackgroundSwitchOnDefault() {
  return r.colorsDarkBrandBlue7;
}, get colorsBackgroundSwitchThumb() {
  return r.colorsDarkBrandGrey10;
}, get colorsBackgroundTabDockBase() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTabDockDropdownHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTabDockDropdownPressed() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTabDockItemCloseButtonHover() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTabDockItemCloseButtonPressed() {
  return r.colorsDarkBrandGrey4;
}, get colorsBackgroundTabDockItemSelected() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTabDockItemUnselected() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTabMenuSelected() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTabMenuUnselected() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTableBase() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTableCellPrimary() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTableCellSecondary() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTableHeaderDefault() {
  return r.colorsDarkBrandGrey3;
}, get colorsBackgroundTableHeaderHover() {
  return r.colorsDarkBrandGrey2;
}, get colorsBackgroundTableHeaderPressed() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundTableLayout() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowAnnotationButton() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundWorkflowEmptyOutcome() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowGeneralActivity() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowJumpCounter() {
  return r.colorsDarkBrandGrey1;
}, get colorsBackgroundWorkflowNonGeneralActivity() {
  return r.colorsDarkBrandGrey0;
}, get colorsBackgroundWorkflowStartEnd() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderAssistbotBulbDefault() {
  return r.colorsDarkBrandAlphaBlue75;
}, get colorsBorderButtonsDefault() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderButtonsGhostButtonHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderButtonsNotificationSecondary() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderButtonsToolbarActionButtonActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderButtonsToolbarActionButtonHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderButtonsToolbarActionButtonSelected() {
  return r.colorsDarkBrandGrey7;
}, get colorsBorderDivider() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderDomainModelActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderDomainModelDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderDomainModelDiffAdded() {
  return r.colorsDarkBrandGreen4;
}, get colorsBorderDomainModelDiffDeleted() {
  return r.colorsDarkBrandRed4;
}, get colorsBorderDomainModelHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderFocus() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderHover() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderInputActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderInputDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderInputHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderKeyboardFocus() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderLoadingBar() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderModal() {
  return r.colorsDarkBrandGrey0;
}, get colorsBorderMxchatMessageAiDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderMxdockMenuDivider() {
  return r.colorsDarkBrandGrey3;
}, get colorsBorderPane() {
  return r.colorsDarkBrandGrey0;
}, get colorsBorderPrimary() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderSecondary() {
  return r.colorsDarkBrandGrey1;
}, get colorsBorderSelected() {
  return r.colorsDarkBrandGrey7;
}, get colorsBorderSelectorHover() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderSelectorSelected() {
  return r.colorsDarkBrandGrey9;
}, get colorsBorderSelectorUnselected() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderTreeViewNestingLine() {
  return r.colorsDarkBrandGrey5;
}, get colorsBorderWebScrollbarCanvasThumbDefault() {
  return r.colorsDarkBrandAlphaGrey75;
}, get colorsBorderWebScrollbarThumbPaneDefault() {
  return r.colorsDarkBrandGrey6;
}, get colorsBorderWorkflowActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsBorderWorkflowDefault() {
  return r.colorsDarkBrandGrey4;
}, get colorsBorderWorkflowHover() {
  return r.colorsDarkBrandGrey6;
}, get colorsTextToggle() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextActive() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextButtonsIdeDefault() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextButtonsNotificationDefault() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextButtonsPrimary() {
  return r.colorsDarkBrandGrey0;
}, get colorsTextButtonsSecondary() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextCodeErrors() {
  return r.colorsDarkBrandRed8;
}, get colorsTextCodeFunctions() {
  return r.colorsDarkBrandGreen7;
}, get colorsTextCodeIdentifiers() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextCodeKeywords() {
  return r.colorsDarkBrandBlue9;
}, get colorsTextCodeOperators() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextCodeRuntimeTokens() {
  return r.colorsDarkBrandPurple9;
}, get colorsTextCodeStringAndNumberLiterals() {
  return r.colorsDarkBrandOrange7;
}, get colorsTextCodeVariables() {
  return r.colorsDarkBrandYellow7;
}, get colorsTextInfo() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextInverse() {
  return r.colorsDarkBrandGrey1;
}, get colorsTextLink() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextModalHeader() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextMxdockLink() {
  return r.colorsDarkBrandBlue7;
}, get colorsTextMxdockMenu() {
  return r.colorsDarkBrandGrey10;
}, get colorsTextMxdockPrimary() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextMxdockSecondary() {
  return r.colorsDarkBrandGrey7;
}, get colorsTextPrimaryDefault() {
  return r.colorsDarkBrandGrey9;
}, get colorsTextPrimaryDisabled() {
  return r.colorsDarkBrandAlphaGrey95;
}, get colorsTextSecondaryDefault() {
  return r.colorsDarkBrandGrey7;
}, get colorsTextSecondaryDisabled() {
  return r.colorsDarkBrandAlphaGrey75;
} }, ir = class ir {
  constructor(e) {
    this.theme = e;
  }
  get buttonNeutralDefaultBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonDefault;
  }
  get buttonNeutralDefaultBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralDefaultLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralDisabledBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonDefault;
  }
  get buttonNeutralDisabledBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralDisabledLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralFocusedBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonDefault;
  }
  get buttonNeutralFocusedBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralFocusedFocusringBorderColor() {
    return this.theme.colorsBorderKeyboardFocus;
  }
  get buttonNeutralFocusedLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralHoverBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonHover;
  }
  get buttonNeutralHoverBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralHoverLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonNeutralPressedBackgroundColor() {
    return this.theme.colorsBackgroundButtonIdeButtonPressed;
  }
  get buttonNeutralPressedBorderColor() {
    return this.theme.colorsBorderButtonsDefault;
  }
  get buttonNeutralPressedLabelTextColor() {
    return this.theme.colorsTextButtonsIdeDefault;
  }
  get buttonPrimaryDefaultBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonDefault;
  }
  get buttonPrimaryDefaultBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonDefault;
  }
  get buttonPrimaryDefaultLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryDisabledBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonDefault;
  }
  get buttonPrimaryDisabledBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonDefault;
  }
  get buttonPrimaryDisabledLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryFocusedBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonDefault;
  }
  get buttonPrimaryFocusedBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonDefault;
  }
  get buttonPrimaryFocusedFocusringBorderColor() {
    return this.theme.colorsAccentInverse;
  }
  get buttonPrimaryFocusedLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryHoverBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonHover;
  }
  get buttonPrimaryHoverBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonHover;
  }
  get buttonPrimaryHoverLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get buttonPrimaryPressedBackgroundColor() {
    return this.theme.colorsBackgroundButtonPrimaryButtonPressed;
  }
  get buttonPrimaryPressedBorderColor() {
    return this.theme.colorsBackgroundMyappsPrimaryButtonPressed;
  }
  get buttonPrimaryPressedLabelTextColor() {
    return this.theme.colorsTextButtonsPrimary;
  }
  get draggableDividerHorizontalDefaultDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get draggableDividerHorizontalFocusBorderColor() {
    return this.theme.colorsBorderKeyboardFocus;
  }
  get draggableDividerHorizontalFocusDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get draggableDividerVerticalDefaultDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get draggableDividerVerticalFocusBorderColor() {
    return this.theme.colorsBorderKeyboardFocus;
  }
  get draggableDividerVerticalFocusDotBackgroundColor() {
    return this.theme.colorsAccentDefaultGrey;
  }
  get linkLabelTextColor() {
    return this.theme.colorsTextLink;
  }
  get switchOffDefaultThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOffDefaultTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffDefaultTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffDisabledThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOffDisabledTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffDisabledTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOffDefault;
  }
  get switchOffHoverThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOffHoverTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOffHover;
  }
  get switchOffHoverTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOffHover;
  }
  get switchOnDefaultThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOnDefaultTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnDefaultTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnDisabledThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOnDisabledTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnDisabledTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnHoverThumbBackgroundColor() {
    return this.theme.colorsBackgroundSwitchThumb;
  }
  get switchOnHoverTrackBackgroundColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
  get switchOnHoverTrackBorderColor() {
    return this.theme.colorsBackgroundSwitchOnDefault;
  }
};
ae(ir, "DevTokens");
let q = ir;
async function he(o) {
  return (await o.ui.preferences.getPreferences()).theme;
}
function ke(o) {
  return o === se;
}
export {
  fe as a,
  Be as c,
  se as d,
  he as g,
  ke as i,
  r,
  ge as s
};
//# sourceMappingURL=userPreferences-BV8i5uIO.js.map
