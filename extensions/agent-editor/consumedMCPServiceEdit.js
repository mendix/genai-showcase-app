import { N as Xa, w as de, x as Mc, r as be, O as Ac, C as Dc, G as In, Q as Uc, D as Vc, P as Zc, E as Lc } from "./TextInputWithIcon-Bxcjz2pl.js";
import { c as Fc, C as xc } from "./CenteredLoadingSpinner-GhVhA5yR.js";
import { m as Hc, c as Kc, u as Jc } from "./consumedMCPServiceUtils-BaykyGe_.js";
import { g as Wc, C as Gc, T as os, n as Bc, h as Qc } from "./genAICommonsEntities-Dtcj_rDj.js";
import { C as Yc, B as ss } from "./ButtonWithLabel-DZihO6Yp.js";
import { c as ei } from "./logger-CC_FxqwC.js";
import { T as as } from "./TextInputLabeled-Cr8pg4pf.js";
import { y as Xc } from "./ComboBox-D4VTIJ8V.js";
import { I as eu, S as tu } from "./Banner-DNPItzP7.js";
import { T as ru } from "./Table-DhYu8u5D.js";
import { T as nu } from "./TextWithIcon-DyBRNAR1.js";
const ou = ["v2025_03_26", "v2024_11_05"], su = Object.freeze({
  status: "aborted"
});
function z(e, t, r) {
  function n(i, c) {
    if (i._zod || Object.defineProperty(i, "_zod", {
      value: {
        def: c,
        constr: a,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), i._zod.traits.has(e))
      return;
    i._zod.traits.add(e), t(i, c);
    const u = a.prototype, l = Object.keys(u);
    for (let g = 0; g < l.length; g++) {
      const _ = l[g];
      _ in i || (i[_] = u[_].bind(i));
    }
  }
  const o = (r == null ? void 0 : r.Parent) ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function a(i) {
    var c;
    const u = r != null && r.Parent ? new s() : this;
    n(u, i), (c = u._zod).deferred ?? (c.deferred = []);
    for (const l of u._zod.deferred)
      l();
    return u;
  }
  return Object.defineProperty(a, "init", { value: n }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (i) => {
      var c, u;
      return r != null && r.Parent && i instanceof r.Parent ? !0 : (u = (c = i == null ? void 0 : i._zod) == null ? void 0 : c.traits) == null ? void 0 : u.has(e);
    }
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class Nt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class ti extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const ri = {};
function ct(e) {
  return ri;
}
function ni(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function Bn(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function hn(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function bo(e) {
  return e == null;
}
function So(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function au(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = t.toString();
  let o = (n.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(n)) {
    const c = n.match(/\d?e-(\d?)/);
    c != null && c[1] && (o = Number.parseInt(c[1]));
  }
  const s = r > o ? r : o, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
const is = Symbol("evaluating");
function ce(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== is)
        return n === void 0 && (n = is, n = r()), n;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function wt(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function lt(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function cs(e) {
  return JSON.stringify(e);
}
function iu(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const oi = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Qt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const cu = hn(() => {
  var e;
  if (typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare")))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function jt(e) {
  if (Qt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(Qt(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function si(e) {
  return jt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const uu = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function qt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function dt(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (n._zod.parent = e), n;
}
function J(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if ((t == null ? void 0 : t.message) !== void 0) {
    if ((t == null ? void 0 : t.error) !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function lu(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const du = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function fu(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = lt(e._zod.def, {
    get shape() {
      const a = {};
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (a[i] = r.shape[i]);
      }
      return wt(this, "shape", a), a;
    },
    checks: []
  });
  return dt(e, s);
}
function hu(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = lt(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete a[i];
      }
      return wt(this, "shape", a), a;
    },
    checks: []
  });
  return dt(e, s);
}
function pu(e, t) {
  if (!jt(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const s = e._zod.def.shape;
    for (const a in t)
      if (Object.getOwnPropertyDescriptor(s, a) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = lt(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return wt(this, "shape", s), s;
    }
  });
  return dt(e, o);
}
function mu(e, t) {
  if (!jt(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = lt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return wt(this, "shape", n), n;
    }
  });
  return dt(e, r);
}
function _u(e, t) {
  const r = lt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return wt(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return dt(e, r);
}
function gu(e, t, r) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const a = lt(t._zod.def, {
    get shape() {
      const i = t._zod.def.shape, c = { ...i };
      if (r)
        for (const u in r) {
          if (!(u in i))
            throw new Error(`Unrecognized key: "${u}"`);
          r[u] && (c[u] = e ? new e({
            type: "optional",
            innerType: i[u]
          }) : i[u]);
        }
      else
        for (const u in i)
          c[u] = e ? new e({
            type: "optional",
            innerType: i[u]
          }) : i[u];
      return wt(this, "shape", c), c;
    },
    checks: []
  });
  return dt(t, a);
}
function yu(e, t, r) {
  const n = lt(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (r)
        for (const a in r) {
          if (!(a in s))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = new e({
            type: "nonoptional",
            innerType: o[a]
          }));
        }
      else
        for (const a in o)
          s[a] = new e({
            type: "nonoptional",
            innerType: o[a]
          });
      return wt(this, "shape", s), s;
    }
  });
  return dt(t, n);
}
function Rt(e, t = 0) {
  var r;
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (((r = e.issues[n]) == null ? void 0 : r.continue) !== !0)
      return !0;
  return !1;
}
function Ct(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function ar(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function ut(e, t, r) {
  var o, s, a, i, c, u;
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const l = ar((a = (s = (o = e.inst) == null ? void 0 : o._zod.def) == null ? void 0 : s.error) == null ? void 0 : a.call(s, e)) ?? ar((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? ar((c = r.customError) == null ? void 0 : c.call(r, e)) ?? ar((u = r.localeError) == null ? void 0 : u.call(r, e)) ?? "Invalid input";
    n.message = l;
  }
  return delete n.inst, delete n.continue, t != null && t.reportInput || delete n.input, n;
}
function ko(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Yt(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const ai = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Bn, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, ii = z("$ZodError", ai), ci = z("$ZodError", ai, { Parent: Error });
function vu(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const o of e.issues)
    o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
  return { formErrors: n, fieldErrors: r };
}
function wu(e, t = (r) => r.message) {
  const r = { _errors: [] }, n = (o) => {
    for (const s of o.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((a) => n({ issues: a }));
      else if (s.code === "invalid_key")
        n({ issues: s.issues });
      else if (s.code === "invalid_element")
        n({ issues: s.issues });
      else if (s.path.length === 0)
        r._errors.push(t(s));
      else {
        let a = r, i = 0;
        for (; i < s.path.length; ) {
          const c = s.path[i];
          i === s.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(t(s))) : a[c] = a[c] || { _errors: [] }, a = a[c], i++;
        }
      }
  };
  return n(e), r;
}
const Eo = (e) => (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new Nt();
  if (a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => ut(c, s, ct())));
    throw oi(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, To = (e) => async (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => ut(c, s, ct())));
    throw oi(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, pn = (e) => (t, r, n) => {
  const o = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new Nt();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? ii)(s.issues.map((a) => ut(a, o, ct())))
  } : { success: !0, data: s.value };
}, ui = /* @__PURE__ */ pn(ci), mn = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => ut(a, o, ct())))
  } : { success: !0, data: s.value };
}, $u = /* @__PURE__ */ mn(ci), bu = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Eo(e)(t, r, o);
}, Su = (e) => (t, r, n) => Eo(e)(t, r, n), ku = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return To(e)(t, r, o);
}, Eu = (e) => async (t, r, n) => To(e)(t, r, n), Tu = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return pn(e)(t, r, o);
}, Pu = (e) => (t, r, n) => pn(e)(t, r, n), Ru = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return mn(e)(t, r, o);
}, Cu = (e) => async (t, r, n) => mn(e)(t, r, n), Iu = /^[cC][^\s-]{8,}$/, Ou = /^[0-9a-z]+$/, Nu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, zu = /^[0-9a-vA-V]{20}$/, ju = /^[A-Za-z0-9]{27}$/, qu = /^[a-zA-Z0-9_-]{21}$/, Mu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Au = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, us = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Du = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Uu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Vu() {
  return new RegExp(Uu, "u");
}
const Zu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Lu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Fu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, xu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Hu = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, li = /^[A-Za-z0-9_-]*$/, Ku = /^\+[1-9]\d{6,14}$/, di = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ju = /* @__PURE__ */ new RegExp(`^${di}$`);
function fi(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Wu(e) {
  return new RegExp(`^${fi(e)}$`);
}
function Gu(e) {
  const t = fi({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${di}T(?:${n})$`);
}
const Bu = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Qu = /^-?\d+$/, hi = /^-?\d+(?:\.\d+)?$/, Yu = /^(?:true|false)$/i, Xu = /^null$/i, el = /^[^A-Z]*$/, tl = /^[^a-z]*$/, Ze = /* @__PURE__ */ z("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), pi = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, mi = /* @__PURE__ */ z("$ZodCheckLessThan", (e, t) => {
  Ze.init(e, t);
  const r = pi[typeof t.value];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag, s = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: r,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), _i = /* @__PURE__ */ z("$ZodCheckGreaterThan", (e, t) => {
  Ze.init(e, t);
  const r = pi[typeof t.value];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag, s = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: r,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), rl = /* @__PURE__ */ z("$ZodCheckMultipleOf", (e, t) => {
  Ze.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : au(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), nl = /* @__PURE__ */ z("$ZodCheckNumberFormat", (e, t) => {
  var a;
  Ze.init(e, t), t.format = t.format || "float64";
  const r = (a = t.format) == null ? void 0 : a.includes("int"), n = r ? "int" : "number", [o, s] = du[t.format];
  e._zod.onattach.push((i) => {
    const c = i._zod.bag;
    c.format = t.format, c.minimum = o, c.maximum = s, r && (c.pattern = Qu);
  }), e._zod.check = (i) => {
    const c = i.value;
    if (r) {
      if (!Number.isInteger(c)) {
        i.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: c,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(c)) {
        c > 0 ? i.issues.push({
          input: c,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        }) : i.issues.push({
          input: c,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    c < o && i.issues.push({
      origin: "number",
      input: c,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), c > s && i.issues.push({
      origin: "number",
      input: c,
      code: "too_big",
      maximum: s,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), ol = /* @__PURE__ */ z("$ZodCheckMaxLength", (e, t) => {
  var r;
  Ze.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !bo(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length <= t.maximum)
      return;
    const a = ko(o);
    n.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), sl = /* @__PURE__ */ z("$ZodCheckMinLength", (e, t) => {
  var r;
  Ze.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !bo(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length >= t.minimum)
      return;
    const a = ko(o);
    n.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), al = /* @__PURE__ */ z("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Ze.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !bo(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (n) => {
    const o = n.value, s = o.length;
    if (s === t.length)
      return;
    const a = ko(o), i = s > t.length;
    n.issues.push({
      origin: a,
      ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), _n = /* @__PURE__ */ z("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  Ze.init(e, t), e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), il = /* @__PURE__ */ z("$ZodCheckRegex", (e, t) => {
  _n.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), cl = /* @__PURE__ */ z("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = el), _n.init(e, t);
}), ul = /* @__PURE__ */ z("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = tl), _n.init(e, t);
}), ll = /* @__PURE__ */ z("$ZodCheckIncludes", (e, t) => {
  Ze.init(e, t);
  const r = qt(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(n);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), dl = /* @__PURE__ */ z("$ZodCheckStartsWith", (e, t) => {
  Ze.init(e, t);
  const r = new RegExp(`^${qt(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), fl = /* @__PURE__ */ z("$ZodCheckEndsWith", (e, t) => {
  Ze.init(e, t);
  const r = new RegExp(`.*${qt(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), hl = /* @__PURE__ */ z("$ZodCheckOverwrite", (e, t) => {
  Ze.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class pl {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const n = t.split(`
`).filter((a) => a), o = Math.min(...n.map((a) => a.length - a.trimStart().length)), s = n.map((a) => a.slice(o)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of s)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this == null ? void 0 : this.args, o = [...((this == null ? void 0 : this.content) ?? [""]).map((s) => `  ${s}`)];
    return new t(...r, o.join(`
`));
  }
}
const ml = {
  major: 4,
  minor: 3,
  patch: 6
}, he = /* @__PURE__ */ z("$ZodType", (e, t) => {
  var o;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ml;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const s of n)
    for (const a of s._zod.onattach)
      a(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), (o = e._zod.deferred) == null || o.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const s = (i, c, u) => {
      let l = Rt(i), g;
      for (const _ of c) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(i))
            continue;
        } else if (l)
          continue;
        const y = i.issues.length, v = _._zod.check(i);
        if (v instanceof Promise && (u == null ? void 0 : u.async) === !1)
          throw new Nt();
        if (g || v instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await v, i.issues.length !== y && (l || (l = Rt(i, y)));
          });
        else {
          if (i.issues.length === y)
            continue;
          l || (l = Rt(i, y));
        }
      }
      return g ? g.then(() => i) : i;
    }, a = (i, c, u) => {
      if (Rt(i))
        return i.aborted = !0, i;
      const l = s(c, n, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new Nt();
        return l.then((g) => e._zod.parse(g, u));
      }
      return e._zod.parse(l, u);
    };
    e._zod.run = (i, c) => {
      if (c.skipChecks)
        return e._zod.parse(i, c);
      if (c.direction === "backward") {
        const l = e._zod.parse({ value: i.value, issues: [] }, { ...c, skipChecks: !0 });
        return l instanceof Promise ? l.then((g) => a(g, i, c)) : a(l, i, c);
      }
      const u = e._zod.parse(i, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new Nt();
        return u.then((l) => s(l, n, c));
      }
      return s(u, n, c);
    };
  }
  ce(e, "~standard", () => ({
    validate: (s) => {
      var a;
      try {
        const i = ui(e, s);
        return i.success ? { value: i.data } : { issues: (a = i.error) == null ? void 0 : a.issues };
      } catch {
        return $u(e, s).then((c) => {
          var u;
          return c.success ? { value: c.data } : { issues: (u = c.error) == null ? void 0 : u.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Po = /* @__PURE__ */ z("$ZodString", (e, t) => {
  var r;
  he.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? Bu(e._zod.bag), e._zod.parse = (n, o) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), ge = /* @__PURE__ */ z("$ZodStringFormat", (e, t) => {
  _n.init(e, t), Po.init(e, t);
}), _l = /* @__PURE__ */ z("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Au), ge.init(e, t);
}), gl = /* @__PURE__ */ z("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = us(n));
  } else
    t.pattern ?? (t.pattern = us());
  ge.init(e, t);
}), yl = /* @__PURE__ */ z("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Du), ge.init(e, t);
}), vl = /* @__PURE__ */ z("$ZodURL", (e, t) => {
  ge.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim(), o = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = o.href : r.value = n;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), wl = /* @__PURE__ */ z("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Vu()), ge.init(e, t);
}), $l = /* @__PURE__ */ z("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = qu), ge.init(e, t);
}), bl = /* @__PURE__ */ z("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Iu), ge.init(e, t);
}), Sl = /* @__PURE__ */ z("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Ou), ge.init(e, t);
}), kl = /* @__PURE__ */ z("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = Nu), ge.init(e, t);
}), El = /* @__PURE__ */ z("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = zu), ge.init(e, t);
}), Tl = /* @__PURE__ */ z("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = ju), ge.init(e, t);
}), Pl = /* @__PURE__ */ z("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Gu(t)), ge.init(e, t);
}), Rl = /* @__PURE__ */ z("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Ju), ge.init(e, t);
}), Cl = /* @__PURE__ */ z("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Wu(t)), ge.init(e, t);
}), Il = /* @__PURE__ */ z("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Mu), ge.init(e, t);
}), Ol = /* @__PURE__ */ z("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Zu), ge.init(e, t), e._zod.bag.format = "ipv4";
}), Nl = /* @__PURE__ */ z("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Lu), ge.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), zl = /* @__PURE__ */ z("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Fu), ge.init(e, t);
}), jl = /* @__PURE__ */ z("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = xu), ge.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [o, s] = n;
      if (!s)
        throw new Error();
      const a = Number(s);
      if (`${a}` !== s)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function gi(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const ql = /* @__PURE__ */ z("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Hu), ge.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    gi(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Ml(e) {
  if (!li.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return gi(r);
}
const Al = /* @__PURE__ */ z("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = li), ge.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Ml(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Dl = /* @__PURE__ */ z("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Ku), ge.init(e, t);
});
function Ul(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const o = JSON.parse(atob(n));
    return !("typ" in o && (o == null ? void 0 : o.typ) !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const Vl = /* @__PURE__ */ z("$ZodJWT", (e, t) => {
  ge.init(e, t), e._zod.check = (r) => {
    Ul(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), yi = /* @__PURE__ */ z("$ZodNumber", (e, t) => {
  he.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? hi, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const o = r.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return r;
    const s = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...s ? { received: s } : {}
    }), r;
  };
}), Zl = /* @__PURE__ */ z("$ZodNumberFormat", (e, t) => {
  nl.init(e, t), yi.init(e, t);
}), Ll = /* @__PURE__ */ z("$ZodBoolean", (e, t) => {
  he.init(e, t), e._zod.pattern = Yu, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const o = r.value;
    return typeof o == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), Fl = /* @__PURE__ */ z("$ZodNull", (e, t) => {
  he.init(e, t), e._zod.pattern = Xu, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, n) => {
    const o = r.value;
    return o === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), xl = /* @__PURE__ */ z("$ZodAny", (e, t) => {
  he.init(e, t), e._zod.parse = (r) => r;
}), Hl = /* @__PURE__ */ z("$ZodUnknown", (e, t) => {
  he.init(e, t), e._zod.parse = (r) => r;
}), Kl = /* @__PURE__ */ z("$ZodNever", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function ls(e, t, r) {
  e.issues.length && t.issues.push(...Ct(r, e.issues)), t.value[r] = e.value;
}
const Jl = /* @__PURE__ */ z("$ZodArray", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value;
    if (!Array.isArray(o))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), r;
    r.value = Array(o.length);
    const s = [];
    for (let a = 0; a < o.length; a++) {
      const i = o[a], c = t.element._zod.run({
        value: i,
        issues: []
      }, n);
      c instanceof Promise ? s.push(c.then((u) => ls(u, r, a))) : ls(c, r, a);
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function Yr(e, t, r, n, o) {
  if (e.issues.length) {
    if (o && !(r in n))
      return;
    t.issues.push(...Ct(r, e.issues));
  }
  e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function vi(e) {
  var n, o, s, a;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((a = (s = (o = (n = e.shape) == null ? void 0 : n[i]) == null ? void 0 : o._zod) == null ? void 0 : s.traits) != null && a.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const r = lu(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function wi(e, t, r, n, o, s) {
  const a = [], i = o.keySet, c = o.catchall._zod, u = c.def.type, l = c.optout === "optional";
  for (const g in t) {
    if (i.has(g))
      continue;
    if (u === "never") {
      a.push(g);
      continue;
    }
    const _ = c.run({ value: t[g], issues: [] }, n);
    _ instanceof Promise ? e.push(_.then((y) => Yr(y, r, g, t, l))) : Yr(_, r, g, t, l);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Wl = /* @__PURE__ */ z("$ZodObject", (e, t) => {
  he.init(e, t);
  const r = Object.getOwnPropertyDescriptor(t, "shape");
  if (!(r != null && r.get)) {
    const i = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...i };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const n = hn(() => vi(t));
  ce(e._zod, "propValues", () => {
    const i = t.shape, c = {};
    for (const u in i) {
      const l = i[u]._zod;
      if (l.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const g of l.values)
          c[u].add(g);
      }
    }
    return c;
  });
  const o = Qt, s = t.catchall;
  let a;
  e._zod.parse = (i, c) => {
    a ?? (a = n.value);
    const u = i.value;
    if (!o(u))
      return i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), i;
    i.value = {};
    const l = [], g = a.shape;
    for (const _ of a.keys) {
      const y = g[_], v = y._zod.optout === "optional", w = y._zod.run({ value: u[_], issues: [] }, c);
      w instanceof Promise ? l.push(w.then((h) => Yr(h, i, _, u, v))) : Yr(w, i, _, u, v);
    }
    return s ? wi(l, u, i, c, n.value, e) : l.length ? Promise.all(l).then(() => i) : i;
  };
}), Gl = /* @__PURE__ */ z("$ZodObjectJIT", (e, t) => {
  Wl.init(e, t);
  const r = e._zod.parse, n = hn(() => vi(t)), o = (_) => {
    var p;
    const y = new pl(["shape", "payload", "ctx"]), v = n.value, w = (S) => {
      const f = cs(S);
      return `shape[${f}]._zod.run({ value: input[${f}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const h = /* @__PURE__ */ Object.create(null);
    let m = 0;
    for (const S of v.keys)
      h[S] = `key_${m++}`;
    y.write("const newResult = {};");
    for (const S of v.keys) {
      const f = h[S], $ = cs(S), k = _[S], I = ((p = k == null ? void 0 : k._zod) == null ? void 0 : p.optout) === "optional";
      y.write(`const ${f} = ${w(S)};`), I ? y.write(`
        if (${f}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${f}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${f}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${f}.value;
        }
        
      `) : y.write(`
        if (${f}.issues.length) {
          payload.issues = payload.issues.concat(${f}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${f}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${f}.value;
        }
        
      `);
    }
    y.write("payload.value = newResult;"), y.write("return payload;");
    const d = y.compile();
    return (S, f) => d(_, S, f);
  };
  let s;
  const a = Qt, i = !ri.jitless, u = i && cu.value, l = t.catchall;
  let g;
  e._zod.parse = (_, y) => {
    g ?? (g = n.value);
    const v = _.value;
    return a(v) ? i && u && (y == null ? void 0 : y.async) === !1 && y.jitless !== !0 ? (s || (s = o(t.shape)), _ = s(_, y), l ? wi([], v, _, y, g, e) : _) : r(_, y) : (_.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), _);
  };
});
function ds(e, t, r, n) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const o = e.filter((s) => !Rt(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((s) => s.issues.map((a) => ut(a, n, ct())))
  }), t);
}
const $i = /* @__PURE__ */ z("$ZodUnion", (e, t) => {
  he.init(e, t), ce(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), ce(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), ce(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), ce(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => So(s.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (o, s) => {
    if (r)
      return n(o, s);
    let a = !1;
    const i = [];
    for (const c of t.options) {
      const u = c._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (u instanceof Promise)
        i.push(u), a = !0;
      else {
        if (u.issues.length === 0)
          return u;
        i.push(u);
      }
    }
    return a ? Promise.all(i).then((c) => ds(c, o, e, s)) : ds(i, o, e, s);
  };
}), Bl = /* @__PURE__ */ z("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, $i.init(e, t);
  const r = e._zod.parse;
  ce(e._zod, "propValues", () => {
    const o = {};
    for (const s of t.options) {
      const a = s._zod.propValues;
      if (!a || Object.keys(a).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
      for (const [i, c] of Object.entries(a)) {
        o[i] || (o[i] = /* @__PURE__ */ new Set());
        for (const u of c)
          o[i].add(u);
      }
    }
    return o;
  });
  const n = hn(() => {
    var a;
    const o = t.options, s = /* @__PURE__ */ new Map();
    for (const i of o) {
      const c = (a = i._zod.propValues) == null ? void 0 : a[t.discriminator];
      if (!c || c.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const u of c) {
        if (s.has(u))
          throw new Error(`Duplicate discriminator value "${String(u)}"`);
        s.set(u, i);
      }
    }
    return s;
  });
  e._zod.parse = (o, s) => {
    const a = o.value;
    if (!Qt(a))
      return o.issues.push({
        code: "invalid_type",
        expected: "object",
        input: a,
        inst: e
      }), o;
    const i = n.value.get(a == null ? void 0 : a[t.discriminator]);
    return i ? i._zod.run(o, s) : t.unionFallback ? r(o, s) : (o.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      input: a,
      path: [t.discriminator],
      inst: e
    }), o);
  };
}), Ql = /* @__PURE__ */ z("$ZodIntersection", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value, s = t.left._zod.run({ value: o, issues: [] }, n), a = t.right._zod.run({ value: o, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([c, u]) => fs(r, c, u)) : fs(r, s, a);
  };
});
function Qn(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (jt(e) && jt(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((s) => r.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of n) {
      const a = Qn(e[s], t[s]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...a.mergeErrorPath]
        };
      o[s] = a.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = t[n], a = Qn(o, s);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function fs(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  let o;
  for (const i of t.issues)
    if (i.code === "unrecognized_keys") {
      o ?? (o = i);
      for (const c of i.keys)
        n.has(c) || n.set(c, {}), n.get(c).l = !0;
    } else
      e.issues.push(i);
  for (const i of r.issues)
    if (i.code === "unrecognized_keys")
      for (const c of i.keys)
        n.has(c) || n.set(c, {}), n.get(c).r = !0;
    else
      e.issues.push(i);
  const s = [...n].filter(([, i]) => i.l && i.r).map(([i]) => i);
  if (s.length && o && e.issues.push({ ...o, keys: s }), Rt(e))
    return e;
  const a = Qn(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const Yl = /* @__PURE__ */ z("$ZodRecord", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value;
    if (!jt(o))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), r;
    const s = [], a = t.keyType._zod.values;
    if (a) {
      r.value = {};
      const i = /* @__PURE__ */ new Set();
      for (const u of a)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          i.add(typeof u == "number" ? u.toString() : u);
          const l = t.valueType._zod.run({ value: o[u], issues: [] }, n);
          l instanceof Promise ? s.push(l.then((g) => {
            g.issues.length && r.issues.push(...Ct(u, g.issues)), r.value[u] = g.value;
          })) : (l.issues.length && r.issues.push(...Ct(u, l.issues)), r.value[u] = l.value);
        }
      let c;
      for (const u in o)
        i.has(u) || (c = c ?? [], c.push(u));
      c && c.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: c
      });
    } else {
      r.value = {};
      for (const i of Reflect.ownKeys(o)) {
        if (i === "__proto__")
          continue;
        let c = t.keyType._zod.run({ value: i, issues: [] }, n);
        if (c instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof i == "string" && hi.test(i) && c.issues.length) {
          const g = t.keyType._zod.run({ value: Number(i), issues: [] }, n);
          if (g instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          g.issues.length === 0 && (c = g);
        }
        if (c.issues.length) {
          t.mode === "loose" ? r.value[i] = o[i] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((g) => ut(g, n, ct())),
            input: i,
            path: [i],
            inst: e
          });
          continue;
        }
        const l = t.valueType._zod.run({ value: o[i], issues: [] }, n);
        l instanceof Promise ? s.push(l.then((g) => {
          g.issues.length && r.issues.push(...Ct(i, g.issues)), r.value[c.value] = g.value;
        })) : (l.issues.length && r.issues.push(...Ct(i, l.issues)), r.value[c.value] = l.value);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
}), Xl = /* @__PURE__ */ z("$ZodEnum", (e, t) => {
  he.init(e, t);
  const r = ni(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((o) => uu.has(typeof o)).map((o) => typeof o == "string" ? qt(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return n.has(a) || o.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), o;
  };
}), ed = /* @__PURE__ */ z("$ZodLiteral", (e, t) => {
  if (he.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((n) => typeof n == "string" ? qt(n) : n ? qt(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, o) => {
    const s = n.value;
    return r.has(s) || n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: s,
      inst: e
    }), n;
  };
}), td = /* @__PURE__ */ z("$ZodTransform", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new ti(e.constructor.name);
    const o = t.transform(r.value, r);
    if (n.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((a) => (r.value = a, r));
    if (o instanceof Promise)
      throw new Nt();
    return r.value = o, r;
  };
});
function hs(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const bi = /* @__PURE__ */ z("$ZodOptional", (e, t) => {
  he.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ce(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ce(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${So(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => hs(s, r.value)) : hs(o, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), rd = /* @__PURE__ */ z("$ZodExactOptional", (e, t) => {
  bi.init(e, t), ce(e._zod, "values", () => t.innerType._zod.values), ce(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), nd = /* @__PURE__ */ z("$ZodNullable", (e, t) => {
  he.init(e, t), ce(e._zod, "optin", () => t.innerType._zod.optin), ce(e._zod, "optout", () => t.innerType._zod.optout), ce(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${So(r.source)}|null)$`) : void 0;
  }), ce(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), od = /* @__PURE__ */ z("$ZodDefault", (e, t) => {
  he.init(e, t), e._zod.optin = "optional", ce(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => ps(s, t)) : ps(o, t);
  };
});
function ps(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const sd = /* @__PURE__ */ z("$ZodPrefault", (e, t) => {
  he.init(e, t), e._zod.optin = "optional", ce(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), ad = /* @__PURE__ */ z("$ZodNonOptional", (e, t) => {
  he.init(e, t), ce(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => ms(s, e)) : ms(o, e);
  };
});
function ms(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const id = /* @__PURE__ */ z("$ZodCatch", (e, t) => {
  he.init(e, t), ce(e._zod, "optin", () => t.innerType._zod.optin), ce(e._zod, "optout", () => t.innerType._zod.optout), ce(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((a) => ut(a, n, ct()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((s) => ut(s, n, ct()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), cd = /* @__PURE__ */ z("$ZodPipe", (e, t) => {
  he.init(e, t), ce(e._zod, "values", () => t.in._zod.values), ce(e._zod, "optin", () => t.in._zod.optin), ce(e._zod, "optout", () => t.out._zod.optout), ce(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const s = t.out._zod.run(r, n);
      return s instanceof Promise ? s.then((a) => ir(a, t.in, n)) : ir(s, t.in, n);
    }
    const o = t.in._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => ir(s, t.out, n)) : ir(o, t.out, n);
  };
});
function ir(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const ud = /* @__PURE__ */ z("$ZodReadonly", (e, t) => {
  he.init(e, t), ce(e._zod, "propValues", () => t.innerType._zod.propValues), ce(e._zod, "values", () => t.innerType._zod.values), ce(e._zod, "optin", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optin;
  }), ce(e._zod, "optout", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optout;
  }), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then(_s) : _s(o);
  };
});
function _s(e) {
  return e.value = Object.freeze(e.value), e;
}
const ld = /* @__PURE__ */ z("$ZodCustom", (e, t) => {
  Ze.init(e, t), he.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, o = t.fn(n);
    if (o instanceof Promise)
      return o.then((s) => gs(s, r, n, e));
    gs(o, r, n, e);
  };
});
function gs(e, t, r, n) {
  if (!e) {
    const o = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (o.params = n._zod.def.params), t.issues.push(Yt(o));
  }
}
var ys;
class dd {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    return this._map.set(t, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const o = { ...n, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function fd() {
  return new dd();
}
(ys = globalThis).__zod_globalRegistry ?? (ys.__zod_globalRegistry = fd());
const Ht = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function hd(e, t) {
  return new e({
    type: "string",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pd(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vs(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function md(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _d(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vd(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wd(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $d(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function bd(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Sd(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function kd(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ed(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Td(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pd(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rd(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cd(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Id(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Od(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nd(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zd(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jd(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qd(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Md(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ad(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Dd(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ud(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zd(e, t) {
  return new e({
    type: "boolean",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ld(e, t) {
  return new e({
    type: "null",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fd(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function xd(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Hd(e, t) {
  return new e({
    type: "never",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ws(e, t) {
  return new mi({
    check: "less_than",
    ...J(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function On(e, t) {
  return new mi({
    check: "less_than",
    ...J(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function $s(e, t) {
  return new _i({
    check: "greater_than",
    ...J(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Nn(e, t) {
  return new _i({
    check: "greater_than",
    ...J(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function bs(e, t) {
  return new rl({
    check: "multiple_of",
    ...J(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
  return new ol({
    check: "max_length",
    ...J(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Xr(e, t) {
  return new sl({
    check: "min_length",
    ...J(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ei(e, t) {
  return new al({
    check: "length_equals",
    ...J(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Kd(e, t) {
  return new il({
    check: "string_format",
    format: "regex",
    ...J(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Jd(e) {
  return new cl({
    check: "string_format",
    format: "lowercase",
    ...J(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Wd(e) {
  return new ul({
    check: "string_format",
    format: "uppercase",
    ...J(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Gd(e, t) {
  return new ll({
    check: "string_format",
    format: "includes",
    ...J(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function Bd(e, t) {
  return new dl({
    check: "string_format",
    format: "starts_with",
    ...J(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Qd(e, t) {
  return new fl({
    check: "string_format",
    format: "ends_with",
    ...J(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return new hl({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Yd(e) {
  return /* @__PURE__ */ Dt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Xd() {
  return /* @__PURE__ */ Dt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function ef() {
  return /* @__PURE__ */ Dt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function tf() {
  return /* @__PURE__ */ Dt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function rf() {
  return /* @__PURE__ */ Dt((e) => iu(e));
}
// @__NO_SIDE_EFFECTS__
function nf(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...J(r)
  });
}
// @__NO_SIDE_EFFECTS__
function of(e, t, r) {
  const n = J(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
// @__NO_SIDE_EFFECTS__
function sf(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...J(r)
  });
}
// @__NO_SIDE_EFFECTS__
function af(e) {
  const t = /* @__PURE__ */ cf((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(Yt(n, r.value, t._zod.def));
    else {
      const o = n;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), r.issues.push(Yt(o));
    }
  }, e(r.value, r)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function cf(e, t) {
  const r = new Ze({
    check: "custom",
    ...J(t)
  });
  return r._zod.check = e, r;
}
function Ti(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: (e == null ? void 0 : e.metadata) ?? Ht,
    target: t,
    unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
    override: (e == null ? void 0 : e.override) ?? (() => {
    }),
    io: (e == null ? void 0 : e.io) ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: (e == null ? void 0 : e.cycles) ?? "ref",
    reused: (e == null ? void 0 : e.reused) ?? "inline",
    external: (e == null ? void 0 : e.external) ?? void 0
  };
}
function Se(e, t, r = { path: [], schemaPath: [] }) {
  var l, g;
  var n;
  const o = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, r.schemaPath.includes(e) && (s.cycle = r.path), s.schema;
  const a = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, a);
  const i = (g = (l = e._zod).toJSONSchema) == null ? void 0 : g.call(l);
  if (i)
    a.schema = i;
  else {
    const _ = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, a.schema, _);
    else {
      const v = a.schema, w = t.processors[o.type];
      if (!w)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      w(e, t, v, _);
    }
    const y = e._zod.parent;
    y && (a.ref || (a.ref = y), Se(y, t, _), t.seen.get(y).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && Ae(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((n = a.schema).default ?? (n.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function Pi(e, t) {
  var a, i, c, u;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const l of e.seen.entries()) {
    const g = (a = e.metadataRegistry.get(l[0])) == null ? void 0 : a.id;
    if (g) {
      const _ = n.get(g);
      if (_ && _ !== l[0])
        throw new Error(`Duplicate schema id "${g}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(g, l[0]);
    }
  }
  const o = (l) => {
    var w;
    const g = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const h = (w = e.external.registry.get(l[0])) == null ? void 0 : w.id, m = e.external.uri ?? ((p) => p);
      if (h)
        return { ref: m(h) };
      const d = l[1].defId ?? l[1].schema.id ?? `schema${e.counter++}`;
      return l[1].defId = d, { defId: d, ref: `${m("__shared")}#/${g}/${d}` };
    }
    if (l[1] === r)
      return { ref: "#" };
    const y = `#/${g}/`, v = l[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: v, ref: y + v };
  }, s = (l) => {
    if (l[1].schema.$ref)
      return;
    const g = l[1], { ref: _, defId: y } = o(l);
    g.def = { ...g.schema }, y && (g.defId = y);
    const v = g.schema;
    for (const w in v)
      delete v[w];
    v.$ref = _;
  };
  if (e.cycles === "throw")
    for (const l of e.seen.entries()) {
      const g = l[1];
      if (g.cycle)
        throw new Error(`Cycle detected: #/${(i = g.cycle) == null ? void 0 : i.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const l of e.seen.entries()) {
    const g = l[1];
    if (t === l[0]) {
      s(l);
      continue;
    }
    if (e.external) {
      const y = (c = e.external.registry.get(l[0])) == null ? void 0 : c.id;
      if (t !== l[0] && y) {
        s(l);
        continue;
      }
    }
    if ((u = e.metadataRegistry.get(l[0])) == null ? void 0 : u.id) {
      s(l);
      continue;
    }
    if (g.cycle) {
      s(l);
      continue;
    }
    if (g.count > 1 && e.reused === "ref") {
      s(l);
      continue;
    }
  }
}
function Ri(e, t) {
  var a, i, c;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (u) => {
    const l = e.seen.get(u);
    if (l.ref === null)
      return;
    const g = l.def ?? l.schema, _ = { ...g }, y = l.ref;
    if (l.ref = null, y) {
      n(y);
      const w = e.seen.get(y), h = w.schema;
      if (h.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(h)) : Object.assign(g, h), Object.assign(g, _), u._zod.parent === y)
        for (const d in g)
          d === "$ref" || d === "allOf" || d in _ || delete g[d];
      if (h.$ref && w.def)
        for (const d in g)
          d === "$ref" || d === "allOf" || d in w.def && JSON.stringify(g[d]) === JSON.stringify(w.def[d]) && delete g[d];
    }
    const v = u._zod.parent;
    if (v && v !== y) {
      n(v);
      const w = e.seen.get(v);
      if (w != null && w.schema.$ref && (g.$ref = w.schema.$ref, w.def))
        for (const h in g)
          h === "$ref" || h === "allOf" || h in w.def && JSON.stringify(g[h]) === JSON.stringify(w.def[h]) && delete g[h];
    }
    e.override({
      zodSchema: u,
      jsonSchema: g,
      path: l.path ?? []
    });
  };
  for (const u of [...e.seen.entries()].reverse())
    n(u[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (a = e.external) != null && a.uri) {
    const u = (i = e.external.registry.get(t)) == null ? void 0 : i.id;
    if (!u)
      throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(u);
  }
  Object.assign(o, r.def ?? r.schema);
  const s = ((c = e.external) == null ? void 0 : c.defs) ?? {};
  for (const u of e.seen.entries()) {
    const l = u[1];
    l.def && l.defId && (s[l.defId] = l.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? o.$defs = s : o.definitions = s);
  try {
    const u = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(u, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: en(t, "input", e.processors),
          output: en(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), u;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Ae(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return Ae(n.element, r);
  if (n.type === "set")
    return Ae(n.valueType, r);
  if (n.type === "lazy")
    return Ae(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return Ae(n.innerType, r);
  if (n.type === "intersection")
    return Ae(n.left, r) || Ae(n.right, r);
  if (n.type === "record" || n.type === "map")
    return Ae(n.keyType, r) || Ae(n.valueType, r);
  if (n.type === "pipe")
    return Ae(n.in, r) || Ae(n.out, r);
  if (n.type === "object") {
    for (const o in n.shape)
      if (Ae(n.shape[o], r))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const o of n.options)
      if (Ae(o, r))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const o of n.items)
      if (Ae(o, r))
        return !0;
    return !!(n.rest && Ae(n.rest, r));
  }
  return !1;
}
const uf = (e, t = {}) => (r) => {
  const n = Ti({ ...r, processors: t });
  return Se(e, n), Pi(n, e), Ri(n, e);
}, en = (e, t, r = {}) => (n) => {
  const { libraryOptions: o, target: s } = n ?? {}, a = Ti({ ...o ?? {}, target: s, io: t, processors: r });
  return Se(e, a), Pi(a, e), Ri(a, e);
}, lf = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, df = (e, t, r, n) => {
  const o = r;
  o.type = "string";
  const { minimum: s, maximum: a, format: i, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof a == "number" && (o.maxLength = a), i && (o.format = lf[i] ?? i, o.format === "" && delete o.format, i === "time" && delete o.format), u && (o.contentEncoding = u), c && c.size > 0) {
    const l = [...c];
    l.length === 1 ? o.pattern = l[0].source : l.length > 1 && (o.allOf = [
      ...l.map((g) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: g.source
      }))
    ]);
  }
}, ff = (e, t, r, n) => {
  const o = r, { minimum: s, maximum: a, format: i, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: l } = e._zod.bag;
  typeof i == "string" && i.includes("int") ? o.type = "integer" : o.type = "number", typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = l, o.exclusiveMinimum = !0) : o.exclusiveMinimum = l), typeof s == "number" && (o.minimum = s, typeof l == "number" && t.target !== "draft-04" && (l >= s ? delete o.minimum : delete o.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = u, o.exclusiveMaximum = !0) : o.exclusiveMaximum = u), typeof a == "number" && (o.maximum = a, typeof u == "number" && t.target !== "draft-04" && (u <= a ? delete o.maximum : delete o.exclusiveMaximum)), typeof c == "number" && (o.multipleOf = c);
}, hf = (e, t, r, n) => {
  r.type = "boolean";
}, pf = (e, t, r, n) => {
  t.target === "openapi-3.0" ? (r.type = "string", r.nullable = !0, r.enum = [null]) : r.type = "null";
}, mf = (e, t, r, n) => {
  r.not = {};
}, _f = (e, t, r, n) => {
}, gf = (e, t, r, n) => {
}, yf = (e, t, r, n) => {
  const o = e._zod.def, s = ni(o.entries);
  s.every((a) => typeof a == "number") && (r.type = "number"), s.every((a) => typeof a == "string") && (r.type = "string"), r.enum = s;
}, vf = (e, t, r, n) => {
  const o = e._zod.def, s = [];
  for (const a of o.values)
    if (a === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof a == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      s.push(Number(a));
    } else
      s.push(a);
  if (s.length !== 0) if (s.length === 1) {
    const a = s[0];
    r.type = a === null ? "null" : typeof a, t.target === "draft-04" || t.target === "openapi-3.0" ? r.enum = [a] : r.const = a;
  } else
    s.every((a) => typeof a == "number") && (r.type = "number"), s.every((a) => typeof a == "string") && (r.type = "string"), s.every((a) => typeof a == "boolean") && (r.type = "boolean"), s.every((a) => a === null) && (r.type = "null"), r.enum = s;
}, wf = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, $f = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, bf = (e, t, r, n) => {
  const o = r, s = e._zod.def, { minimum: a, maximum: i } = e._zod.bag;
  typeof a == "number" && (o.minItems = a), typeof i == "number" && (o.maxItems = i), o.type = "array", o.items = Se(s.element, t, { ...n, path: [...n.path, "items"] });
}, Sf = (e, t, r, n) => {
  var u;
  const o = r, s = e._zod.def;
  o.type = "object", o.properties = {};
  const a = s.shape;
  for (const l in a)
    o.properties[l] = Se(a[l], t, {
      ...n,
      path: [...n.path, "properties", l]
    });
  const i = new Set(Object.keys(a)), c = new Set([...i].filter((l) => {
    const g = s.shape[l]._zod;
    return t.io === "input" ? g.optin === void 0 : g.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), ((u = s.catchall) == null ? void 0 : u._zod.def.type) === "never" ? o.additionalProperties = !1 : s.catchall ? s.catchall && (o.additionalProperties = Se(s.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, kf = (e, t, r, n) => {
  const o = e._zod.def, s = o.inclusive === !1, a = o.options.map((i, c) => Se(i, t, {
    ...n,
    path: [...n.path, s ? "oneOf" : "anyOf", c]
  }));
  s ? r.oneOf = a : r.anyOf = a;
}, Ef = (e, t, r, n) => {
  const o = e._zod.def, s = Se(o.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), a = Se(o.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), i = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...i(s) ? s.allOf : [s],
    ...i(a) ? a.allOf : [a]
  ];
  r.allOf = c;
}, Tf = (e, t, r, n) => {
  const o = r, s = e._zod.def;
  o.type = "object";
  const a = s.keyType, i = a._zod.bag, c = i == null ? void 0 : i.patterns;
  if (s.mode === "loose" && c && c.size > 0) {
    const l = Se(s.valueType, t, {
      ...n,
      path: [...n.path, "patternProperties", "*"]
    });
    o.patternProperties = {};
    for (const g of c)
      o.patternProperties[g.source] = l;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (o.propertyNames = Se(s.keyType, t, {
      ...n,
      path: [...n.path, "propertyNames"]
    })), o.additionalProperties = Se(s.valueType, t, {
      ...n,
      path: [...n.path, "additionalProperties"]
    });
  const u = a._zod.values;
  if (u) {
    const l = [...u].filter((g) => typeof g == "string" || typeof g == "number");
    l.length > 0 && (o.required = l);
  }
}, Pf = (e, t, r, n) => {
  const o = e._zod.def, s = Se(o.innerType, t, n), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = o.innerType, r.nullable = !0) : r.anyOf = [s, { type: "null" }];
}, Rf = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, Cf = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.default = JSON.parse(JSON.stringify(o.defaultValue));
}, If = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, Of = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
  let a;
  try {
    a = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = a;
}, Nf = (e, t, r, n) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  Se(s, t, n);
  const a = t.seen.get(e);
  a.ref = s;
}, zf = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.readOnly = !0;
}, Ci = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
};
function gn(e) {
  return !!e._zod;
}
function at(e, t) {
  return gn(e) ? ui(e, t) : e.safeParse(t);
}
function Ii(e) {
  var r, n;
  if (!e)
    return;
  let t;
  if (gn(e) ? t = (n = (r = e._zod) == null ? void 0 : r.def) == null ? void 0 : n.shape : t = e.shape, !!t) {
    if (typeof t == "function")
      try {
        return t();
      } catch {
        return;
      }
    return t;
  }
}
function jf(e) {
  var o;
  if (gn(e)) {
    const a = (o = e._zod) == null ? void 0 : o.def;
    if (a) {
      if (a.value !== void 0)
        return a.value;
      if (Array.isArray(a.values) && a.values.length > 0)
        return a.values[0];
    }
  }
  const r = e._def;
  if (r) {
    if (r.value !== void 0)
      return r.value;
    if (Array.isArray(r.values) && r.values.length > 0)
      return r.values[0];
  }
  const n = e.value;
  if (n !== void 0)
    return n;
}
const qf = /* @__PURE__ */ z("ZodISODateTime", (e, t) => {
  Pl.init(e, t), we.init(e, t);
});
function Oi(e) {
  return /* @__PURE__ */ jd(qf, e);
}
const Mf = /* @__PURE__ */ z("ZodISODate", (e, t) => {
  Rl.init(e, t), we.init(e, t);
});
function Af(e) {
  return /* @__PURE__ */ qd(Mf, e);
}
const Df = /* @__PURE__ */ z("ZodISOTime", (e, t) => {
  Cl.init(e, t), we.init(e, t);
});
function Uf(e) {
  return /* @__PURE__ */ Md(Df, e);
}
const Vf = /* @__PURE__ */ z("ZodISODuration", (e, t) => {
  Il.init(e, t), we.init(e, t);
});
function Zf(e) {
  return /* @__PURE__ */ Ad(Vf, e);
}
const Lf = (e, t) => {
  ii.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => wu(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => vu(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Bn, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Bn, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Je = z("ZodError", Lf, {
  Parent: Error
}), Ff = /* @__PURE__ */ Eo(Je), xf = /* @__PURE__ */ To(Je), Hf = /* @__PURE__ */ pn(Je), Kf = /* @__PURE__ */ mn(Je), Jf = /* @__PURE__ */ bu(Je), Wf = /* @__PURE__ */ Su(Je), Gf = /* @__PURE__ */ ku(Je), Bf = /* @__PURE__ */ Eu(Je), Qf = /* @__PURE__ */ Tu(Je), Yf = /* @__PURE__ */ Pu(Je), Xf = /* @__PURE__ */ Ru(Je), eh = /* @__PURE__ */ Cu(Je), pe = /* @__PURE__ */ z("ZodType", (e, t) => (he.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: en(e, "input"),
    output: en(e, "output")
  }
}), e.toJSONSchema = uf(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(lt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, n) => dt(e, r, n), e.brand = () => e, e.register = (r, n) => (r.add(e, n), e), e.parse = (r, n) => Ff(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Hf(e, r, n), e.parseAsync = async (r, n) => xf(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Kf(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Jf(e, r, n), e.decode = (r, n) => Wf(e, r, n), e.encodeAsync = async (r, n) => Gf(e, r, n), e.decodeAsync = async (r, n) => Bf(e, r, n), e.safeEncode = (r, n) => Qf(e, r, n), e.safeDecode = (r, n) => Yf(e, r, n), e.safeEncodeAsync = async (r, n) => Xf(e, r, n), e.safeDecodeAsync = async (r, n) => eh(e, r, n), e.refine = (r, n) => e.check(Jh(r, n)), e.superRefine = (r) => e.check(Wh(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ Dt(r)), e.optional = () => $e(e), e.exactOptional = () => jh(e), e.nullable = () => Es(e), e.nullish = () => $e(Es(e)), e.nonoptional = (r) => Vh(e, r), e.array = () => L(e), e.or = (r) => me([e, r]), e.and = (r) => Co(e, r), e.transform = (r) => Xn(e, Di(r)), e.default = (r) => Ah(e, r), e.prefault = (r) => Uh(e, r), e.catch = (r) => Lh(e, r), e.pipe = (r) => Xn(e, r), e.readonly = () => Hh(e), e.describe = (r) => {
  const n = e.clone();
  return Ht.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = Ht.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Ht.get(e);
  const n = e.clone();
  return Ht.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), Ni = /* @__PURE__ */ z("_ZodString", (e, t) => {
  Po.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => df(e, n, o);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(/* @__PURE__ */ Kd(...n)), e.includes = (...n) => e.check(/* @__PURE__ */ Gd(...n)), e.startsWith = (...n) => e.check(/* @__PURE__ */ Bd(...n)), e.endsWith = (...n) => e.check(/* @__PURE__ */ Qd(...n)), e.min = (...n) => e.check(/* @__PURE__ */ Xr(...n)), e.max = (...n) => e.check(/* @__PURE__ */ ki(...n)), e.length = (...n) => e.check(/* @__PURE__ */ Ei(...n)), e.nonempty = (...n) => e.check(/* @__PURE__ */ Xr(1, ...n)), e.lowercase = (n) => e.check(/* @__PURE__ */ Jd(n)), e.uppercase = (n) => e.check(/* @__PURE__ */ Wd(n)), e.trim = () => e.check(/* @__PURE__ */ Xd()), e.normalize = (...n) => e.check(/* @__PURE__ */ Yd(...n)), e.toLowerCase = () => e.check(/* @__PURE__ */ ef()), e.toUpperCase = () => e.check(/* @__PURE__ */ tf()), e.slugify = () => e.check(/* @__PURE__ */ rf());
}), th = /* @__PURE__ */ z("ZodString", (e, t) => {
  Po.init(e, t), Ni.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ pd(rh, r)), e.url = (r) => e.check(/* @__PURE__ */ Si(zi, r)), e.jwt = (r) => e.check(/* @__PURE__ */ zd(yh, r)), e.emoji = (r) => e.check(/* @__PURE__ */ vd(oh, r)), e.guid = (r) => e.check(/* @__PURE__ */ vs(Ss, r)), e.uuid = (r) => e.check(/* @__PURE__ */ md(cr, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ _d(cr, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ gd(cr, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ yd(cr, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ wd(sh, r)), e.guid = (r) => e.check(/* @__PURE__ */ vs(Ss, r)), e.cuid = (r) => e.check(/* @__PURE__ */ $d(ah, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ bd(ih, r)), e.ulid = (r) => e.check(/* @__PURE__ */ Sd(ch, r)), e.base64 = (r) => e.check(/* @__PURE__ */ Id(mh, r)), e.base64url = (r) => e.check(/* @__PURE__ */ Od(_h, r)), e.xid = (r) => e.check(/* @__PURE__ */ kd(uh, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ Ed(lh, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ Td(dh, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ Pd(fh, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ Rd(hh, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ Cd(ph, r)), e.e164 = (r) => e.check(/* @__PURE__ */ Nd(gh, r)), e.datetime = (r) => e.check(Oi(r)), e.date = (r) => e.check(Af(r)), e.time = (r) => e.check(Uf(r)), e.duration = (r) => e.check(Zf(r));
});
function T(e) {
  return /* @__PURE__ */ hd(th, e);
}
const we = /* @__PURE__ */ z("ZodStringFormat", (e, t) => {
  ge.init(e, t), Ni.init(e, t);
}), rh = /* @__PURE__ */ z("ZodEmail", (e, t) => {
  yl.init(e, t), we.init(e, t);
}), Ss = /* @__PURE__ */ z("ZodGUID", (e, t) => {
  _l.init(e, t), we.init(e, t);
}), cr = /* @__PURE__ */ z("ZodUUID", (e, t) => {
  gl.init(e, t), we.init(e, t);
}), zi = /* @__PURE__ */ z("ZodURL", (e, t) => {
  vl.init(e, t), we.init(e, t);
});
function nh(e) {
  return /* @__PURE__ */ Si(zi, e);
}
const oh = /* @__PURE__ */ z("ZodEmoji", (e, t) => {
  wl.init(e, t), we.init(e, t);
}), sh = /* @__PURE__ */ z("ZodNanoID", (e, t) => {
  $l.init(e, t), we.init(e, t);
}), ah = /* @__PURE__ */ z("ZodCUID", (e, t) => {
  bl.init(e, t), we.init(e, t);
}), ih = /* @__PURE__ */ z("ZodCUID2", (e, t) => {
  Sl.init(e, t), we.init(e, t);
}), ch = /* @__PURE__ */ z("ZodULID", (e, t) => {
  kl.init(e, t), we.init(e, t);
}), uh = /* @__PURE__ */ z("ZodXID", (e, t) => {
  El.init(e, t), we.init(e, t);
}), lh = /* @__PURE__ */ z("ZodKSUID", (e, t) => {
  Tl.init(e, t), we.init(e, t);
}), dh = /* @__PURE__ */ z("ZodIPv4", (e, t) => {
  Ol.init(e, t), we.init(e, t);
}), fh = /* @__PURE__ */ z("ZodIPv6", (e, t) => {
  Nl.init(e, t), we.init(e, t);
}), hh = /* @__PURE__ */ z("ZodCIDRv4", (e, t) => {
  zl.init(e, t), we.init(e, t);
}), ph = /* @__PURE__ */ z("ZodCIDRv6", (e, t) => {
  jl.init(e, t), we.init(e, t);
}), mh = /* @__PURE__ */ z("ZodBase64", (e, t) => {
  ql.init(e, t), we.init(e, t);
}), _h = /* @__PURE__ */ z("ZodBase64URL", (e, t) => {
  Al.init(e, t), we.init(e, t);
}), gh = /* @__PURE__ */ z("ZodE164", (e, t) => {
  Dl.init(e, t), we.init(e, t);
}), yh = /* @__PURE__ */ z("ZodJWT", (e, t) => {
  Vl.init(e, t), we.init(e, t);
}), Ro = /* @__PURE__ */ z("ZodNumber", (e, t) => {
  yi.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => ff(e, n, o), e.gt = (n, o) => e.check(/* @__PURE__ */ $s(n, o)), e.gte = (n, o) => e.check(/* @__PURE__ */ Nn(n, o)), e.min = (n, o) => e.check(/* @__PURE__ */ Nn(n, o)), e.lt = (n, o) => e.check(/* @__PURE__ */ ws(n, o)), e.lte = (n, o) => e.check(/* @__PURE__ */ On(n, o)), e.max = (n, o) => e.check(/* @__PURE__ */ On(n, o)), e.int = (n) => e.check(ks(n)), e.safe = (n) => e.check(ks(n)), e.positive = (n) => e.check(/* @__PURE__ */ $s(0, n)), e.nonnegative = (n) => e.check(/* @__PURE__ */ Nn(0, n)), e.negative = (n) => e.check(/* @__PURE__ */ ws(0, n)), e.nonpositive = (n) => e.check(/* @__PURE__ */ On(0, n)), e.multipleOf = (n, o) => e.check(/* @__PURE__ */ bs(n, o)), e.step = (n, o) => e.check(/* @__PURE__ */ bs(n, o)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function ue(e) {
  return /* @__PURE__ */ Dd(Ro, e);
}
const vh = /* @__PURE__ */ z("ZodNumberFormat", (e, t) => {
  Zl.init(e, t), Ro.init(e, t);
});
function ks(e) {
  return /* @__PURE__ */ Vd(vh, e);
}
const wh = /* @__PURE__ */ z("ZodBoolean", (e, t) => {
  Ll.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => hf(e, r, n);
});
function fe(e) {
  return /* @__PURE__ */ Zd(wh, e);
}
const $h = /* @__PURE__ */ z("ZodNull", (e, t) => {
  Fl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => pf(e, r, n);
});
function ji(e) {
  return /* @__PURE__ */ Ld($h, e);
}
const bh = /* @__PURE__ */ z("ZodAny", (e, t) => {
  xl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => _f();
});
function Sh() {
  return /* @__PURE__ */ Fd(bh);
}
const kh = /* @__PURE__ */ z("ZodUnknown", (e, t) => {
  Hl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => gf();
});
function ye() {
  return /* @__PURE__ */ xd(kh);
}
const Eh = /* @__PURE__ */ z("ZodNever", (e, t) => {
  Kl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => mf(e, r, n);
});
function Th(e) {
  return /* @__PURE__ */ Hd(Eh, e);
}
const Ph = /* @__PURE__ */ z("ZodArray", (e, t) => {
  Jl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => bf(e, r, n, o), e.element = t.element, e.min = (r, n) => e.check(/* @__PURE__ */ Xr(r, n)), e.nonempty = (r) => e.check(/* @__PURE__ */ Xr(1, r)), e.max = (r, n) => e.check(/* @__PURE__ */ ki(r, n)), e.length = (r, n) => e.check(/* @__PURE__ */ Ei(r, n)), e.unwrap = () => e.element;
});
function L(e, t) {
  return /* @__PURE__ */ nf(Ph, e, t);
}
const qi = /* @__PURE__ */ z("ZodObject", (e, t) => {
  Gl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Sf(e, r, n, o), ce(e, "shape", () => t.shape), e.keyof = () => xe(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ye() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ye() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Th() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => pu(e, r), e.safeExtend = (r) => mu(e, r), e.merge = (r) => _u(e, r), e.pick = (r) => fu(e, r), e.omit = (r) => hu(e, r), e.partial = (...r) => gu(Ui, e, r[0]), e.required = (...r) => yu(Vi, e, r[0]);
});
function F(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...J(t)
  };
  return new qi(r);
}
function Ne(e, t) {
  return new qi({
    type: "object",
    shape: e,
    catchall: ye(),
    ...J(t)
  });
}
const Mi = /* @__PURE__ */ z("ZodUnion", (e, t) => {
  $i.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => kf(e, r, n, o), e.options = t.options;
});
function me(e, t) {
  return new Mi({
    type: "union",
    options: e,
    ...J(t)
  });
}
const Rh = /* @__PURE__ */ z("ZodDiscriminatedUnion", (e, t) => {
  Mi.init(e, t), Bl.init(e, t);
});
function Ai(e, t, r) {
  return new Rh({
    type: "union",
    options: t,
    discriminator: e,
    ...J(r)
  });
}
const Ch = /* @__PURE__ */ z("ZodIntersection", (e, t) => {
  Ql.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Ef(e, r, n, o);
});
function Co(e, t) {
  return new Ch({
    type: "intersection",
    left: e,
    right: t
  });
}
const Ih = /* @__PURE__ */ z("ZodRecord", (e, t) => {
  Yl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Tf(e, r, n, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ve(e, t, r) {
  return new Ih({
    type: "record",
    keyType: e,
    valueType: t,
    ...J(r)
  });
}
const Yn = /* @__PURE__ */ z("ZodEnum", (e, t) => {
  Xl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => yf(e, n, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, o) => {
    const s = {};
    for (const a of n)
      if (r.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Yn({
      ...t,
      checks: [],
      ...J(o),
      entries: s
    });
  }, e.exclude = (n, o) => {
    const s = { ...t.entries };
    for (const a of n)
      if (r.has(a))
        delete s[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Yn({
      ...t,
      checks: [],
      ...J(o),
      entries: s
    });
  };
});
function xe(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Yn({
    type: "enum",
    entries: r,
    ...J(t)
  });
}
const Oh = /* @__PURE__ */ z("ZodLiteral", (e, t) => {
  ed.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => vf(e, r, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function W(e, t) {
  return new Oh({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...J(t)
  });
}
const Nh = /* @__PURE__ */ z("ZodTransform", (e, t) => {
  td.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => $f(e, r), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new ti(e.constructor.name);
    r.addIssue = (s) => {
      if (typeof s == "string")
        r.issues.push(Yt(s, r.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(Yt(a));
      }
    };
    const o = t.transform(r.value, r);
    return o instanceof Promise ? o.then((s) => (r.value = s, r)) : (r.value = o, r);
  };
});
function Di(e) {
  return new Nh({
    type: "transform",
    transform: e
  });
}
const Ui = /* @__PURE__ */ z("ZodOptional", (e, t) => {
  bi.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Ci(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function $e(e) {
  return new Ui({
    type: "optional",
    innerType: e
  });
}
const zh = /* @__PURE__ */ z("ZodExactOptional", (e, t) => {
  rd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Ci(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function jh(e) {
  return new zh({
    type: "optional",
    innerType: e
  });
}
const qh = /* @__PURE__ */ z("ZodNullable", (e, t) => {
  nd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Pf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Es(e) {
  return new qh({
    type: "nullable",
    innerType: e
  });
}
const Mh = /* @__PURE__ */ z("ZodDefault", (e, t) => {
  od.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Cf(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ah(e, t) {
  return new Mh({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : si(t);
    }
  });
}
const Dh = /* @__PURE__ */ z("ZodPrefault", (e, t) => {
  sd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => If(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Uh(e, t) {
  return new Dh({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : si(t);
    }
  });
}
const Vi = /* @__PURE__ */ z("ZodNonOptional", (e, t) => {
  ad.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Rf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Vh(e, t) {
  return new Vi({
    type: "nonoptional",
    innerType: e,
    ...J(t)
  });
}
const Zh = /* @__PURE__ */ z("ZodCatch", (e, t) => {
  id.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Of(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Lh(e, t) {
  return new Zh({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Fh = /* @__PURE__ */ z("ZodPipe", (e, t) => {
  cd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Nf(e, r, n, o), e.in = t.in, e.out = t.out;
});
function Xn(e, t) {
  return new Fh({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const xh = /* @__PURE__ */ z("ZodReadonly", (e, t) => {
  ud.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => zf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Hh(e) {
  return new xh({
    type: "readonly",
    innerType: e
  });
}
const Zi = /* @__PURE__ */ z("ZodCustom", (e, t) => {
  ld.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => wf(e, r);
});
function Kh(e, t) {
  return /* @__PURE__ */ of(Zi, e ?? (() => !0), t);
}
function Jh(e, t = {}) {
  return /* @__PURE__ */ sf(Zi, e, t);
}
function Wh(e) {
  return /* @__PURE__ */ af(e);
}
function Li(e, t) {
  return Xn(Di(e), t);
}
const Gh = {
  custom: "custom"
};
function Bh(e) {
  return /* @__PURE__ */ Ud(Ro, e);
}
const yn = "2025-11-25", Qh = [yn, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], gt = "io.modelcontextprotocol/related-task", vn = "2.0", ze = Kh((e) => e !== null && (typeof e == "object" || typeof e == "function")), Fi = me([T(), ue().int()]), xi = T();
Ne({
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: me([ue(), ji()]).optional(),
  /**
   * Time in milliseconds to wait between task status requests.
   */
  pollInterval: ue().optional()
});
const Yh = F({
  ttl: ue().optional()
}), Xh = F({
  taskId: T()
}), Io = Ne({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: Fi.optional(),
  /**
   * If specified, this request is related to the provided task.
   */
  [gt]: Xh.optional()
}), He = F({
  /**
   * See [General fields: `_meta`](/specification/draft/basic/index#meta) for notes on `_meta` usage.
   */
  _meta: Io.optional()
}), er = He.extend({
  /**
   * If specified, the caller is requesting task-augmented execution for this request.
   * The request will return a CreateTaskResult immediately, and the actual result can be
   * retrieved later via tasks/result.
   *
   * Task augmentation is subject to capability negotiation - receivers MUST declare support
   * for task augmentation of specific request types in their capabilities.
   */
  task: Yh.optional()
}), ep = (e) => er.safeParse(e).success, je = F({
  method: T(),
  params: He.loose().optional()
}), We = F({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Io.optional()
}), Ge = F({
  method: T(),
  params: We.loose().optional()
}), qe = Ne({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Io.optional()
}), wn = me([T(), ue().int()]), Hi = F({
  jsonrpc: W(vn),
  id: wn,
  ...je.shape
}).strict(), eo = (e) => Hi.safeParse(e).success, Ki = F({
  jsonrpc: W(vn),
  ...Ge.shape
}).strict(), tp = (e) => Ki.safeParse(e).success, Oo = F({
  jsonrpc: W(vn),
  id: wn,
  result: qe
}).strict(), Kt = (e) => Oo.safeParse(e).success;
var Y;
(function(e) {
  e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(Y || (Y = {}));
const No = F({
  jsonrpc: W(vn),
  id: wn.optional(),
  error: F({
    /**
     * The error type that occurred.
     */
    code: ue().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: T(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: ye().optional()
  })
}).strict(), rp = (e) => No.safeParse(e).success, Wr = me([
  Hi,
  Ki,
  Oo,
  No
]);
me([Oo, No]);
const It = qe.strict(), np = We.extend({
  /**
   * The ID of the request to cancel.
   *
   * This MUST correspond to the ID of a request previously issued in the same direction.
   */
  requestId: wn.optional(),
  /**
   * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
   */
  reason: T().optional()
}), zo = Ge.extend({
  method: W("notifications/cancelled"),
  params: np
}), op = F({
  /**
   * URL or data URI for the icon.
   */
  src: T(),
  /**
   * Optional MIME type for the icon.
   */
  mimeType: T().optional(),
  /**
   * Optional array of strings that specify sizes at which the icon can be used.
   * Each string should be in WxH format (e.g., `"48x48"`, `"96x96"`) or `"any"` for scalable formats like SVG.
   *
   * If not provided, the client should assume that the icon can be used at any size.
   */
  sizes: L(T()).optional(),
  /**
   * Optional specifier for the theme this icon is designed for. `light` indicates
   * the icon is designed to be used with a light background, and `dark` indicates
   * the icon is designed to be used with a dark background.
   *
   * If not provided, the client should assume the icon can be used with any theme.
   */
  theme: xe(["light", "dark"]).optional()
}), tr = F({
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons: L(op).optional()
}), Mt = F({
  /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
  name: T(),
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title: T().optional()
}), Ji = Mt.extend({
  ...Mt.shape,
  ...tr.shape,
  version: T(),
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl: T().optional(),
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description: T().optional()
}), sp = Co(F({
  applyDefaults: fe().optional()
}), ve(T(), ye())), ap = Li((e) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0 ? { form: {} } : e, Co(F({
  form: sp.optional(),
  url: ze.optional()
}), ve(T(), ye()).optional())), ip = Ne({
  /**
   * Present if the client supports listing tasks.
   */
  list: ze.optional(),
  /**
   * Present if the client supports cancelling tasks.
   */
  cancel: ze.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: Ne({
    /**
     * Task support for sampling requests.
     */
    sampling: Ne({
      createMessage: ze.optional()
    }).optional(),
    /**
     * Task support for elicitation requests.
     */
    elicitation: Ne({
      create: ze.optional()
    }).optional()
  }).optional()
}), cp = Ne({
  /**
   * Present if the server supports listing tasks.
   */
  list: ze.optional(),
  /**
   * Present if the server supports cancelling tasks.
   */
  cancel: ze.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: Ne({
    /**
     * Task support for tool requests.
     */
    tools: Ne({
      call: ze.optional()
    }).optional()
  }).optional()
}), up = F({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: ve(T(), ze).optional(),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: F({
    /**
     * Present if the client supports context inclusion via includeContext parameter.
     * If not declared, servers SHOULD only use `includeContext: "none"` (or omit it).
     */
    context: ze.optional(),
    /**
     * Present if the client supports tool use via tools and toolChoice parameters.
     */
    tools: ze.optional()
  }).optional(),
  /**
   * Present if the client supports eliciting user input.
   */
  elicitation: ap.optional(),
  /**
   * Present if the client supports listing roots.
   */
  roots: F({
    /**
     * Whether the client supports issuing notifications for changes to the roots list.
     */
    listChanged: fe().optional()
  }).optional(),
  /**
   * Present if the client supports task creation.
   */
  tasks: ip.optional()
}), lp = He.extend({
  /**
   * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
   */
  protocolVersion: T(),
  capabilities: up,
  clientInfo: Ji
}), dp = je.extend({
  method: W("initialize"),
  params: lp
}), fp = F({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: ve(T(), ze).optional(),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: ze.optional(),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: ze.optional(),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: F({
    /**
     * Whether this server supports issuing notifications for changes to the prompt list.
     */
    listChanged: fe().optional()
  }).optional(),
  /**
   * Present if the server offers any resources to read.
   */
  resources: F({
    /**
     * Whether this server supports clients subscribing to resource updates.
     */
    subscribe: fe().optional(),
    /**
     * Whether this server supports issuing notifications for changes to the resource list.
     */
    listChanged: fe().optional()
  }).optional(),
  /**
   * Present if the server offers any tools to call.
   */
  tools: F({
    /**
     * Whether this server supports issuing notifications for changes to the tool list.
     */
    listChanged: fe().optional()
  }).optional(),
  /**
   * Present if the server supports task creation.
   */
  tasks: cp.optional()
}), Wi = qe.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: T(),
  capabilities: fp,
  serverInfo: Ji,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: T().optional()
}), Gi = Ge.extend({
  method: W("notifications/initialized"),
  params: We.optional()
}), hp = (e) => Gi.safeParse(e).success, jo = je.extend({
  method: W("ping"),
  params: He.optional()
}), pp = F({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: ue(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: $e(ue()),
  /**
   * An optional message describing the current progress.
   */
  message: $e(T())
}), mp = F({
  ...We.shape,
  ...pp.shape,
  /**
   * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
   */
  progressToken: Fi
}), qo = Ge.extend({
  method: W("notifications/progress"),
  params: mp
}), _p = He.extend({
  /**
   * An opaque token representing the current pagination position.
   * If provided, the server should return results starting after this cursor.
   */
  cursor: xi.optional()
}), rr = je.extend({
  params: _p.optional()
}), nr = qe.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: xi.optional()
}), gp = xe(["working", "input_required", "completed", "failed", "cancelled"]), or = F({
  taskId: T(),
  status: gp,
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: me([ue(), ji()]),
  /**
   * ISO 8601 timestamp when the task was created.
   */
  createdAt: T(),
  /**
   * ISO 8601 timestamp when the task was last updated.
   */
  lastUpdatedAt: T(),
  pollInterval: $e(ue()),
  /**
   * Optional diagnostic message for failed tasks or other status information.
   */
  statusMessage: $e(T())
}), Xt = qe.extend({
  task: or
}), yp = We.merge(or), tn = Ge.extend({
  method: W("notifications/tasks/status"),
  params: yp
}), Mo = je.extend({
  method: W("tasks/get"),
  params: He.extend({
    taskId: T()
  })
}), Ao = qe.merge(or), Do = je.extend({
  method: W("tasks/result"),
  params: He.extend({
    taskId: T()
  })
});
qe.loose();
const Uo = rr.extend({
  method: W("tasks/list")
}), Vo = nr.extend({
  tasks: L(or)
}), Zo = je.extend({
  method: W("tasks/cancel"),
  params: He.extend({
    taskId: T()
  })
}), vp = qe.merge(or), Bi = F({
  /**
   * The URI of this resource.
   */
  uri: T(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: $e(T()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Qi = Bi.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: T()
}), Lo = T().refine((e) => {
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), Yi = Bi.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: Lo
}), sr = xe(["user", "assistant"]), Ut = F({
  /**
   * Intended audience(s) for the resource.
   */
  audience: L(sr).optional(),
  /**
   * Importance hint for the resource, from 0 (least) to 1 (most).
   */
  priority: ue().min(0).max(1).optional(),
  /**
   * ISO 8601 timestamp for the most recent modification.
   */
  lastModified: Oi({ offset: !0 }).optional()
}), Xi = F({
  ...Mt.shape,
  ...tr.shape,
  /**
   * The URI of this resource.
   */
  uri: T(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: $e(T()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: $e(T()),
  /**
   * Optional annotations for the client.
   */
  annotations: Ut.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: $e(Ne({}))
}), wp = F({
  ...Mt.shape,
  ...tr.shape,
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: T(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: $e(T()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: $e(T()),
  /**
   * Optional annotations for the client.
   */
  annotations: Ut.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: $e(Ne({}))
}), $p = rr.extend({
  method: W("resources/list")
}), ec = nr.extend({
  resources: L(Xi)
}), bp = rr.extend({
  method: W("resources/templates/list")
}), tc = nr.extend({
  resourceTemplates: L(wp)
}), Fo = He.extend({
  /**
   * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
   *
   * @format uri
   */
  uri: T()
}), Sp = Fo, kp = je.extend({
  method: W("resources/read"),
  params: Sp
}), rc = qe.extend({
  contents: L(me([Qi, Yi]))
}), nc = Ge.extend({
  method: W("notifications/resources/list_changed"),
  params: We.optional()
}), Ep = Fo, Tp = je.extend({
  method: W("resources/subscribe"),
  params: Ep
}), Pp = Fo, Rp = je.extend({
  method: W("resources/unsubscribe"),
  params: Pp
}), Cp = We.extend({
  /**
   * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
   */
  uri: T()
}), Ip = Ge.extend({
  method: W("notifications/resources/updated"),
  params: Cp
}), Op = F({
  /**
   * The name of the argument.
   */
  name: T(),
  /**
   * A human-readable description of the argument.
   */
  description: $e(T()),
  /**
   * Whether this argument must be provided.
   */
  required: $e(fe())
}), Np = F({
  ...Mt.shape,
  ...tr.shape,
  /**
   * An optional description of what this prompt provides
   */
  description: $e(T()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: $e(L(Op)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: $e(Ne({}))
}), zp = rr.extend({
  method: W("prompts/list")
}), oc = nr.extend({
  prompts: L(Np)
}), jp = He.extend({
  /**
   * The name of the prompt or prompt template.
   */
  name: T(),
  /**
   * Arguments to use for templating the prompt.
   */
  arguments: ve(T(), T()).optional()
}), qp = je.extend({
  method: W("prompts/get"),
  params: jp
}), xo = F({
  type: W("text"),
  /**
   * The text content of the message.
   */
  text: T(),
  /**
   * Optional annotations for the client.
   */
  annotations: Ut.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Ho = F({
  type: W("image"),
  /**
   * The base64-encoded image data.
   */
  data: Lo,
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: T(),
  /**
   * Optional annotations for the client.
   */
  annotations: Ut.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Ko = F({
  type: W("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: Lo,
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: T(),
  /**
   * Optional annotations for the client.
   */
  annotations: Ut.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Mp = F({
  type: W("tool_use"),
  /**
   * The name of the tool to invoke.
   * Must match a tool name from the request's tools array.
   */
  name: T(),
  /**
   * Unique identifier for this tool call.
   * Used to correlate with ToolResultContent in subsequent messages.
   */
  id: T(),
  /**
   * Arguments to pass to the tool.
   * Must conform to the tool's inputSchema.
   */
  input: ve(T(), ye()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Ap = F({
  type: W("resource"),
  resource: me([Qi, Yi]),
  /**
   * Optional annotations for the client.
   */
  annotations: Ut.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Dp = Xi.extend({
  type: W("resource_link")
}), Jo = me([
  xo,
  Ho,
  Ko,
  Dp,
  Ap
]), Up = F({
  role: sr,
  content: Jo
}), sc = qe.extend({
  /**
   * An optional description for the prompt.
   */
  description: T().optional(),
  messages: L(Up)
}), ac = Ge.extend({
  method: W("notifications/prompts/list_changed"),
  params: We.optional()
}), Vp = F({
  /**
   * A human-readable title for the tool.
   */
  title: T().optional(),
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint: fe().optional(),
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint: fe().optional(),
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint: fe().optional(),
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint: fe().optional()
}), Zp = F({
  /**
   * Indicates the tool's preference for task-augmented execution.
   * - "required": Clients MUST invoke the tool as a task
   * - "optional": Clients MAY invoke the tool as a task or normal request
   * - "forbidden": Clients MUST NOT attempt to invoke the tool as a task
   *
   * If not present, defaults to "forbidden".
   */
  taskSupport: xe(["required", "optional", "forbidden"]).optional()
}), ic = F({
  ...Mt.shape,
  ...tr.shape,
  /**
   * A human-readable description of the tool.
   */
  description: T().optional(),
  /**
   * A JSON Schema 2020-12 object defining the expected parameters for the tool.
   * Must have type: 'object' at the root level per MCP spec.
   */
  inputSchema: F({
    type: W("object"),
    properties: ve(T(), ze).optional(),
    required: L(T()).optional()
  }).catchall(ye()),
  /**
   * An optional JSON Schema 2020-12 object defining the structure of the tool's output
   * returned in the structuredContent field of a CallToolResult.
   * Must have type: 'object' at the root level per MCP spec.
   */
  outputSchema: F({
    type: W("object"),
    properties: ve(T(), ze).optional(),
    required: L(T()).optional()
  }).catchall(ye()).optional(),
  /**
   * Optional additional tool information.
   */
  annotations: Vp.optional(),
  /**
   * Execution-related properties for this tool.
   */
  execution: Zp.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Lp = rr.extend({
  method: W("tools/list")
}), Wo = nr.extend({
  tools: L(ic)
}), $n = qe.extend({
  /**
   * A list of content objects that represent the result of the tool call.
   *
   * If the Tool does not define an outputSchema, this field MUST be present in the result.
   * For backwards compatibility, this field is always present, but it may be empty.
   */
  content: L(Jo).default([]),
  /**
   * An object containing structured tool output.
   *
   * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
   */
  structuredContent: ve(T(), ye()).optional(),
  /**
   * Whether the tool call ended in an error.
   *
   * If not set, this is assumed to be false (the call was successful).
   *
   * Any errors that originate from the tool SHOULD be reported inside the result
   * object, with `isError` set to true, _not_ as an MCP protocol-level error
   * response. Otherwise, the LLM would not be able to see that an error occurred
   * and self-correct.
   *
   * However, any errors in _finding_ the tool, an error indicating that the
   * server does not support tool calls, or any other exceptional conditions,
   * should be reported as an MCP error response.
   */
  isError: fe().optional()
});
$n.or(qe.extend({
  toolResult: ye()
}));
const Fp = er.extend({
  /**
   * The name of the tool to call.
   */
  name: T(),
  /**
   * Arguments to pass to the tool.
   */
  arguments: ve(T(), ye()).optional()
}), xp = je.extend({
  method: W("tools/call"),
  params: Fp
}), cc = Ge.extend({
  method: W("notifications/tools/list_changed"),
  params: We.optional()
}), Hp = F({
  /**
   * If true, the list will be refreshed automatically when a list changed notification is received.
   * The callback will be called with the updated list.
   *
   * If false, the callback will be called with null items, allowing manual refresh.
   *
   * @default true
   */
  autoRefresh: fe().default(!0),
  /**
   * Debounce time in milliseconds for list changed notification processing.
   *
   * Multiple notifications received within this timeframe will only trigger one refresh.
   * Set to 0 to disable debouncing.
   *
   * @default 300
   */
  debounceMs: ue().int().nonnegative().default(300)
}), uc = xe(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), Kp = He.extend({
  /**
   * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
   */
  level: uc
}), Jp = je.extend({
  method: W("logging/setLevel"),
  params: Kp
}), Wp = We.extend({
  /**
   * The severity of this log message.
   */
  level: uc,
  /**
   * An optional name of the logger issuing this message.
   */
  logger: T().optional(),
  /**
   * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
   */
  data: ye()
}), Gp = Ge.extend({
  method: W("notifications/message"),
  params: Wp
}), Bp = F({
  /**
   * A hint for a model name.
   */
  name: T().optional()
}), Qp = F({
  /**
   * Optional hints to use for model selection.
   */
  hints: L(Bp).optional(),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: ue().min(0).max(1).optional(),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: ue().min(0).max(1).optional(),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: ue().min(0).max(1).optional()
}), Yp = F({
  /**
   * Controls when tools are used:
   * - "auto": Model decides whether to use tools (default)
   * - "required": Model MUST use at least one tool before completing
   * - "none": Model MUST NOT use any tools
   */
  mode: xe(["auto", "required", "none"]).optional()
}), Xp = F({
  type: W("tool_result"),
  toolUseId: T().describe("The unique identifier for the corresponding tool call."),
  content: L(Jo).default([]),
  structuredContent: F({}).loose().optional(),
  isError: fe().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), em = Ai("type", [xo, Ho, Ko]), rn = Ai("type", [
  xo,
  Ho,
  Ko,
  Mp,
  Xp
]), tm = F({
  role: sr,
  content: me([rn, L(rn)]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), rm = er.extend({
  messages: L(tm),
  /**
   * The server's preferences for which model to select. The client MAY modify or omit this request.
   */
  modelPreferences: Qp.optional(),
  /**
   * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
   */
  systemPrompt: T().optional(),
  /**
   * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt.
   * The client MAY ignore this request.
   *
   * Default is "none". Values "thisServer" and "allServers" are soft-deprecated. Servers SHOULD only use these values if the client
   * declares ClientCapabilities.sampling.context. These values may be removed in future spec releases.
   */
  includeContext: xe(["none", "thisServer", "allServers"]).optional(),
  temperature: ue().optional(),
  /**
   * The requested maximum number of tokens to sample (to prevent runaway completions).
   *
   * The client MAY choose to sample fewer tokens than the requested maximum.
   */
  maxTokens: ue().int(),
  stopSequences: L(T()).optional(),
  /**
   * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
   */
  metadata: ze.optional(),
  /**
   * Tools that the model may use during generation.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   */
  tools: L(ic).optional(),
  /**
   * Controls how the model uses tools.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   * Default is `{ mode: "auto" }`.
   */
  toolChoice: Yp.optional()
}), lc = je.extend({
  method: W("sampling/createMessage"),
  params: rm
}), dc = qe.extend({
  /**
   * The name of the model that generated the message.
   */
  model: T(),
  /**
   * The reason why sampling stopped, if known.
   *
   * Standard values:
   * - "endTurn": Natural end of the assistant's turn
   * - "stopSequence": A stop sequence was encountered
   * - "maxTokens": Maximum token limit was reached
   *
   * This field is an open string to allow for provider-specific stop reasons.
   */
  stopReason: $e(xe(["endTurn", "stopSequence", "maxTokens"]).or(T())),
  role: sr,
  /**
   * Response content. Single content block (text, image, or audio).
   */
  content: em
}), fc = qe.extend({
  /**
   * The name of the model that generated the message.
   */
  model: T(),
  /**
   * The reason why sampling stopped, if known.
   *
   * Standard values:
   * - "endTurn": Natural end of the assistant's turn
   * - "stopSequence": A stop sequence was encountered
   * - "maxTokens": Maximum token limit was reached
   * - "toolUse": The model wants to use one or more tools
   *
   * This field is an open string to allow for provider-specific stop reasons.
   */
  stopReason: $e(xe(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(T())),
  role: sr,
  /**
   * Response content. May be a single block or array. May include ToolUseContent if stopReason is "toolUse".
   */
  content: me([rn, L(rn)])
}), nm = F({
  type: W("boolean"),
  title: T().optional(),
  description: T().optional(),
  default: fe().optional()
}), om = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  minLength: ue().optional(),
  maxLength: ue().optional(),
  format: xe(["email", "uri", "date", "date-time"]).optional(),
  default: T().optional()
}), sm = F({
  type: xe(["number", "integer"]),
  title: T().optional(),
  description: T().optional(),
  minimum: ue().optional(),
  maximum: ue().optional(),
  default: ue().optional()
}), am = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  enum: L(T()),
  default: T().optional()
}), im = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  oneOf: L(F({
    const: T(),
    title: T()
  })),
  default: T().optional()
}), cm = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  enum: L(T()),
  enumNames: L(T()).optional(),
  default: T().optional()
}), um = me([am, im]), lm = F({
  type: W("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: ue().optional(),
  maxItems: ue().optional(),
  items: F({
    type: W("string"),
    enum: L(T())
  }),
  default: L(T()).optional()
}), dm = F({
  type: W("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: ue().optional(),
  maxItems: ue().optional(),
  items: F({
    anyOf: L(F({
      const: T(),
      title: T()
    }))
  }),
  default: L(T()).optional()
}), fm = me([lm, dm]), hm = me([cm, um, fm]), pm = me([hm, nm, om, sm]), mm = er.extend({
  /**
   * The elicitation mode.
   *
   * Optional for backward compatibility. Clients MUST treat missing mode as "form".
   */
  mode: W("form").optional(),
  /**
   * The message to present to the user describing what information is being requested.
   */
  message: T(),
  /**
   * A restricted subset of JSON Schema.
   * Only top-level properties are allowed, without nesting.
   */
  requestedSchema: F({
    type: W("object"),
    properties: ve(T(), pm),
    required: L(T()).optional()
  })
}), _m = er.extend({
  /**
   * The elicitation mode.
   */
  mode: W("url"),
  /**
   * The message to present to the user explaining why the interaction is needed.
   */
  message: T(),
  /**
   * The ID of the elicitation, which must be unique within the context of the server.
   * The client MUST treat this ID as an opaque value.
   */
  elicitationId: T(),
  /**
   * The URL that the user should navigate to.
   */
  url: T().url()
}), gm = me([mm, _m]), hc = je.extend({
  method: W("elicitation/create"),
  params: gm
}), ym = We.extend({
  /**
   * The ID of the elicitation that completed.
   */
  elicitationId: T()
}), vm = Ge.extend({
  method: W("notifications/elicitation/complete"),
  params: ym
}), pc = qe.extend({
  /**
   * The user action in response to the elicitation.
   * - "accept": User submitted the form/confirmed the action
   * - "decline": User explicitly decline the action
   * - "cancel": User dismissed without making an explicit choice
   */
  action: xe(["accept", "decline", "cancel"]),
  /**
   * The submitted form data, only present when action is "accept".
   * Contains values matching the requested schema.
   * Per MCP spec, content is "typically omitted" for decline/cancel actions.
   * We normalize null to undefined for leniency while maintaining type compatibility.
   */
  content: Li((e) => e === null ? void 0 : e, ve(T(), me([T(), ue(), fe(), L(T())])).optional())
}), wm = F({
  type: W("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: T()
}), $m = F({
  type: W("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: T()
}), bm = He.extend({
  ref: me([$m, wm]),
  /**
   * The argument's information
   */
  argument: F({
    /**
     * The name of the argument
     */
    name: T(),
    /**
     * The value of the argument to use for completion matching.
     */
    value: T()
  }),
  context: F({
    /**
     * Previously-resolved variables in a URI template or prompt.
     */
    arguments: ve(T(), T()).optional()
  }).optional()
}), Sm = je.extend({
  method: W("completion/complete"),
  params: bm
}), mc = qe.extend({
  completion: Ne({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: L(T()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: $e(ue().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: $e(fe())
  })
}), km = F({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: T().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: T().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Em = je.extend({
  method: W("roots/list"),
  params: He.optional()
}), Tm = qe.extend({
  roots: L(km)
}), Pm = Ge.extend({
  method: W("notifications/roots/list_changed"),
  params: We.optional()
});
me([
  jo,
  dp,
  Sm,
  Jp,
  qp,
  zp,
  $p,
  bp,
  kp,
  Tp,
  Rp,
  xp,
  Lp,
  Mo,
  Do,
  Uo,
  Zo
]);
me([
  zo,
  qo,
  Gi,
  Pm,
  tn
]);
me([
  It,
  dc,
  fc,
  pc,
  Tm,
  Ao,
  Vo,
  Xt
]);
me([
  jo,
  lc,
  hc,
  Em,
  Mo,
  Do,
  Uo,
  Zo
]);
me([
  zo,
  qo,
  Gp,
  Ip,
  nc,
  cc,
  ac,
  tn,
  vm
]);
me([
  It,
  Wi,
  mc,
  sc,
  oc,
  ec,
  tc,
  rc,
  $n,
  Wo,
  Ao,
  Vo,
  Xt
]);
class Q extends Error {
  constructor(t, r, n) {
    super(`MCP error ${t}: ${r}`), this.code = t, this.data = n, this.name = "McpError";
  }
  /**
   * Factory method to create the appropriate error type based on the error code and data
   */
  static fromError(t, r, n) {
    if (t === Y.UrlElicitationRequired && n) {
      const o = n;
      if (o.elicitations)
        return new Rm(o.elicitations, r);
    }
    return new Q(t, r, n);
  }
}
class Rm extends Q {
  constructor(t, r = `URL elicitation${t.length > 1 ? "s" : ""} required`) {
    super(Y.UrlElicitationRequired, r, {
      elicitations: t
    });
  }
  get elicitations() {
    var t;
    return ((t = this.data) == null ? void 0 : t.elicitations) ?? [];
  }
}
function ht(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Ts(e) {
  const t = Ii(e), r = t == null ? void 0 : t.method;
  if (!r)
    throw new Error("Schema is missing a method literal");
  const n = jf(r);
  if (typeof n != "string")
    throw new Error("Schema method literal must be a string");
  return n;
}
function Ps(e, t) {
  const r = at(e, t);
  if (!r.success)
    throw r.error;
  return r.data;
}
const Cm = 6e4;
class Im {
  constructor(t) {
    this._options = t, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(zo, (r) => {
      this._oncancel(r);
    }), this.setNotificationHandler(qo, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(
      jo,
      // Automatic pong by default.
      (r) => ({})
    ), this._taskStore = t == null ? void 0 : t.taskStore, this._taskMessageQueue = t == null ? void 0 : t.taskMessageQueue, this._taskStore && (this.setRequestHandler(Mo, async (r, n) => {
      const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
      if (!o)
        throw new Q(Y.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...o
      };
    }), this.setRequestHandler(Do, async (r, n) => {
      const o = async () => {
        var i;
        const s = r.params.taskId;
        if (this._taskMessageQueue) {
          let c;
          for (; c = await this._taskMessageQueue.dequeue(s, n.sessionId); ) {
            if (c.type === "response" || c.type === "error") {
              const u = c.message, l = u.id, g = this._requestResolvers.get(l);
              if (g)
                if (this._requestResolvers.delete(l), c.type === "response")
                  g(u);
                else {
                  const _ = u, y = new Q(_.error.code, _.error.message, _.error.data);
                  g(y);
                }
              else {
                const _ = c.type === "response" ? "Response" : "Error";
                this._onerror(new Error(`${_} handler missing for request ${l}`));
              }
              continue;
            }
            await ((i = this._transport) == null ? void 0 : i.send(c.message, { relatedRequestId: n.requestId }));
          }
        }
        const a = await this._taskStore.getTask(s, n.sessionId);
        if (!a)
          throw new Q(Y.InvalidParams, `Task not found: ${s}`);
        if (!ht(a.status))
          return await this._waitForTaskUpdate(s, n.signal), await o();
        if (ht(a.status)) {
          const c = await this._taskStore.getTaskResult(s, n.sessionId);
          return this._clearTaskQueue(s), {
            ...c,
            _meta: {
              ...c._meta,
              [gt]: {
                taskId: s
              }
            }
          };
        }
        return await o();
      };
      return await o();
    }), this.setRequestHandler(Uo, async (r, n) => {
      var o;
      try {
        const { tasks: s, nextCursor: a } = await this._taskStore.listTasks((o = r.params) == null ? void 0 : o.cursor, n.sessionId);
        return {
          tasks: s,
          nextCursor: a,
          _meta: {}
        };
      } catch (s) {
        throw new Q(Y.InvalidParams, `Failed to list tasks: ${s instanceof Error ? s.message : String(s)}`);
      }
    }), this.setRequestHandler(Zo, async (r, n) => {
      try {
        const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
        if (!o)
          throw new Q(Y.InvalidParams, `Task not found: ${r.params.taskId}`);
        if (ht(o.status))
          throw new Q(Y.InvalidParams, `Cannot cancel task in terminal status: ${o.status}`);
        await this._taskStore.updateTaskStatus(r.params.taskId, "cancelled", "Client cancelled task execution.", n.sessionId), this._clearTaskQueue(r.params.taskId);
        const s = await this._taskStore.getTask(r.params.taskId, n.sessionId);
        if (!s)
          throw new Q(Y.InvalidParams, `Task not found after cancellation: ${r.params.taskId}`);
        return {
          _meta: {},
          ...s
        };
      } catch (o) {
        throw o instanceof Q ? o : new Q(Y.InvalidRequest, `Failed to cancel task: ${o instanceof Error ? o.message : String(o)}`);
      }
    }));
  }
  async _oncancel(t) {
    if (!t.params.requestId)
      return;
    const r = this._requestHandlerAbortControllers.get(t.params.requestId);
    r == null || r.abort(t.params.reason);
  }
  _setupTimeout(t, r, n, o, s = !1) {
    this._timeoutInfo.set(t, {
      timeoutId: setTimeout(o, r),
      startTime: Date.now(),
      timeout: r,
      maxTotalTimeout: n,
      resetTimeoutOnProgress: s,
      onTimeout: o
    });
  }
  _resetTimeout(t) {
    const r = this._timeoutInfo.get(t);
    if (!r)
      return !1;
    const n = Date.now() - r.startTime;
    if (r.maxTotalTimeout && n >= r.maxTotalTimeout)
      throw this._timeoutInfo.delete(t), Q.fromError(Y.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: r.maxTotalTimeout,
        totalElapsed: n
      });
    return clearTimeout(r.timeoutId), r.timeoutId = setTimeout(r.onTimeout, r.timeout), !0;
  }
  _cleanupTimeout(t) {
    const r = this._timeoutInfo.get(t);
    r && (clearTimeout(r.timeoutId), this._timeoutInfo.delete(t));
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The Protocol object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(t) {
    var s, a, i;
    if (this._transport)
      throw new Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    this._transport = t;
    const r = (s = this.transport) == null ? void 0 : s.onclose;
    this._transport.onclose = () => {
      r == null || r(), this._onclose();
    };
    const n = (a = this.transport) == null ? void 0 : a.onerror;
    this._transport.onerror = (c) => {
      n == null || n(c), this._onerror(c);
    };
    const o = (i = this._transport) == null ? void 0 : i.onmessage;
    this._transport.onmessage = (c, u) => {
      o == null || o(c, u), Kt(c) || rp(c) ? this._onresponse(c) : eo(c) ? this._onrequest(c, u) : tp(c) ? this._onnotification(c) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(c)}`));
    }, await this._transport.start();
  }
  _onclose() {
    var n;
    const t = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const o of this._requestHandlerAbortControllers.values())
      o.abort();
    this._requestHandlerAbortControllers.clear();
    const r = Q.fromError(Y.ConnectionClosed, "Connection closed");
    this._transport = void 0, (n = this.onclose) == null || n.call(this);
    for (const o of t.values())
      o(r);
  }
  _onerror(t) {
    var r;
    (r = this.onerror) == null || r.call(this, t);
  }
  _onnotification(t) {
    const r = this._notificationHandlers.get(t.method) ?? this.fallbackNotificationHandler;
    r !== void 0 && Promise.resolve().then(() => r(t)).catch((n) => this._onerror(new Error(`Uncaught error in notification handler: ${n}`)));
  }
  _onrequest(t, r) {
    var l, g, _, y;
    const n = this._requestHandlers.get(t.method) ?? this.fallbackRequestHandler, o = this._transport, s = (_ = (g = (l = t.params) == null ? void 0 : l._meta) == null ? void 0 : g[gt]) == null ? void 0 : _.taskId;
    if (n === void 0) {
      const v = {
        jsonrpc: "2.0",
        id: t.id,
        error: {
          code: Y.MethodNotFound,
          message: "Method not found"
        }
      };
      s && this._taskMessageQueue ? this._enqueueTaskMessage(s, {
        type: "error",
        message: v,
        timestamp: Date.now()
      }, o == null ? void 0 : o.sessionId).catch((w) => this._onerror(new Error(`Failed to enqueue error response: ${w}`))) : o == null || o.send(v).catch((w) => this._onerror(new Error(`Failed to send an error response: ${w}`)));
      return;
    }
    const a = new AbortController();
    this._requestHandlerAbortControllers.set(t.id, a);
    const i = ep(t.params) ? t.params.task : void 0, c = this._taskStore ? this.requestTaskStore(t, o == null ? void 0 : o.sessionId) : void 0, u = {
      signal: a.signal,
      sessionId: o == null ? void 0 : o.sessionId,
      _meta: (y = t.params) == null ? void 0 : y._meta,
      sendNotification: async (v) => {
        if (a.signal.aborted)
          return;
        const w = { relatedRequestId: t.id };
        s && (w.relatedTask = { taskId: s }), await this.notification(v, w);
      },
      sendRequest: async (v, w, h) => {
        var p;
        if (a.signal.aborted)
          throw new Q(Y.ConnectionClosed, "Request was cancelled");
        const m = { ...h, relatedRequestId: t.id };
        s && !m.relatedTask && (m.relatedTask = { taskId: s });
        const d = ((p = m.relatedTask) == null ? void 0 : p.taskId) ?? s;
        return d && c && await c.updateTaskStatus(d, "input_required"), await this.request(v, w, m);
      },
      authInfo: r == null ? void 0 : r.authInfo,
      requestId: t.id,
      requestInfo: r == null ? void 0 : r.requestInfo,
      taskId: s,
      taskStore: c,
      taskRequestedTtl: i == null ? void 0 : i.ttl,
      closeSSEStream: r == null ? void 0 : r.closeSSEStream,
      closeStandaloneSSEStream: r == null ? void 0 : r.closeStandaloneSSEStream
    };
    Promise.resolve().then(() => {
      i && this.assertTaskHandlerCapability(t.method);
    }).then(() => n(t, u)).then(async (v) => {
      if (a.signal.aborted)
        return;
      const w = {
        result: v,
        jsonrpc: "2.0",
        id: t.id
      };
      s && this._taskMessageQueue ? await this._enqueueTaskMessage(s, {
        type: "response",
        message: w,
        timestamp: Date.now()
      }, o == null ? void 0 : o.sessionId) : await (o == null ? void 0 : o.send(w));
    }, async (v) => {
      if (a.signal.aborted)
        return;
      const w = {
        jsonrpc: "2.0",
        id: t.id,
        error: {
          code: Number.isSafeInteger(v.code) ? v.code : Y.InternalError,
          message: v.message ?? "Internal error",
          ...v.data !== void 0 && { data: v.data }
        }
      };
      s && this._taskMessageQueue ? await this._enqueueTaskMessage(s, {
        type: "error",
        message: w,
        timestamp: Date.now()
      }, o == null ? void 0 : o.sessionId) : await (o == null ? void 0 : o.send(w));
    }).catch((v) => this._onerror(new Error(`Failed to send response: ${v}`))).finally(() => {
      this._requestHandlerAbortControllers.delete(t.id);
    });
  }
  _onprogress(t) {
    const { progressToken: r, ...n } = t.params, o = Number(r), s = this._progressHandlers.get(o);
    if (!s) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(t)}`));
      return;
    }
    const a = this._responseHandlers.get(o), i = this._timeoutInfo.get(o);
    if (i && a && i.resetTimeoutOnProgress)
      try {
        this._resetTimeout(o);
      } catch (c) {
        this._responseHandlers.delete(o), this._progressHandlers.delete(o), this._cleanupTimeout(o), a(c);
        return;
      }
    s(n);
  }
  _onresponse(t) {
    const r = Number(t.id), n = this._requestResolvers.get(r);
    if (n) {
      if (this._requestResolvers.delete(r), Kt(t))
        n(t);
      else {
        const a = new Q(t.error.code, t.error.message, t.error.data);
        n(a);
      }
      return;
    }
    const o = this._responseHandlers.get(r);
    if (o === void 0) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(t)}`));
      return;
    }
    this._responseHandlers.delete(r), this._cleanupTimeout(r);
    let s = !1;
    if (Kt(t) && t.result && typeof t.result == "object") {
      const a = t.result;
      if (a.task && typeof a.task == "object") {
        const i = a.task;
        typeof i.taskId == "string" && (s = !0, this._taskProgressTokens.set(i.taskId, r));
      }
    }
    if (s || this._progressHandlers.delete(r), Kt(t))
      o(t);
    else {
      const a = Q.fromError(t.error.code, t.error.message, t.error.data);
      o(a);
    }
  }
  get transport() {
    return this._transport;
  }
  /**
   * Closes the connection.
   */
  async close() {
    var t;
    await ((t = this._transport) == null ? void 0 : t.close());
  }
  /**
   * Sends a request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * @example
   * ```typescript
   * const stream = protocol.requestStream(request, resultSchema, options);
   * for await (const message of stream) {
   *   switch (message.type) {
   *     case 'taskCreated':
   *       console.log('Task created:', message.task.taskId);
   *       break;
   *     case 'taskStatus':
   *       console.log('Task status:', message.task.status);
   *       break;
   *     case 'result':
   *       console.log('Final result:', message.result);
   *       break;
   *     case 'error':
   *       console.error('Error:', message.error);
   *       break;
   *   }
   * }
   * ```
   *
   * @experimental Use `client.experimental.tasks.requestStream()` to access this method.
   */
  async *requestStream(t, r, n) {
    var a, i;
    const { task: o } = n ?? {};
    if (!o) {
      try {
        yield { type: "result", result: await this.request(t, r, n) };
      } catch (c) {
        yield {
          type: "error",
          error: c instanceof Q ? c : new Q(Y.InternalError, String(c))
        };
      }
      return;
    }
    let s;
    try {
      const c = await this.request(t, Xt, n);
      if (c.task)
        s = c.task.taskId, yield { type: "taskCreated", task: c.task };
      else
        throw new Q(Y.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const u = await this.getTask({ taskId: s }, n);
        if (yield { type: "taskStatus", task: u }, ht(u.status)) {
          u.status === "completed" ? yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) } : u.status === "failed" ? yield {
            type: "error",
            error: new Q(Y.InternalError, `Task ${s} failed`)
          } : u.status === "cancelled" && (yield {
            type: "error",
            error: new Q(Y.InternalError, `Task ${s} was cancelled`)
          });
          return;
        }
        if (u.status === "input_required") {
          yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) };
          return;
        }
        const l = u.pollInterval ?? ((a = this._options) == null ? void 0 : a.defaultTaskPollInterval) ?? 1e3;
        await new Promise((g) => setTimeout(g, l)), (i = n == null ? void 0 : n.signal) == null || i.throwIfAborted();
      }
    } catch (c) {
      yield {
        type: "error",
        error: c instanceof Q ? c : new Q(Y.InternalError, String(c))
      };
    }
  }
  /**
   * Sends a request and waits for a response.
   *
   * Do not use this method to emit notifications! Use notification() instead.
   */
  request(t, r, n) {
    const { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a, task: i, relatedTask: c } = n ?? {};
    return new Promise((u, l) => {
      var d, p, S, f, $;
      const g = (k) => {
        l(k);
      };
      if (!this._transport) {
        g(new Error("Not connected"));
        return;
      }
      if (((d = this._options) == null ? void 0 : d.enforceStrictCapabilities) === !0)
        try {
          this.assertCapabilityForMethod(t.method), i && this.assertTaskCapability(t.method);
        } catch (k) {
          g(k);
          return;
        }
      (p = n == null ? void 0 : n.signal) == null || p.throwIfAborted();
      const _ = this._requestMessageId++, y = {
        ...t,
        jsonrpc: "2.0",
        id: _
      };
      n != null && n.onprogress && (this._progressHandlers.set(_, n.onprogress), y.params = {
        ...t.params,
        _meta: {
          ...((S = t.params) == null ? void 0 : S._meta) || {},
          progressToken: _
        }
      }), i && (y.params = {
        ...y.params,
        task: i
      }), c && (y.params = {
        ...y.params,
        _meta: {
          ...((f = y.params) == null ? void 0 : f._meta) || {},
          [gt]: c
        }
      });
      const v = (k) => {
        var M;
        this._responseHandlers.delete(_), this._progressHandlers.delete(_), this._cleanupTimeout(_), (M = this._transport) == null || M.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: _,
            reason: String(k)
          }
        }, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((V) => this._onerror(new Error(`Failed to send cancellation: ${V}`)));
        const I = k instanceof Q ? k : new Q(Y.RequestTimeout, String(k));
        l(I);
      };
      this._responseHandlers.set(_, (k) => {
        var I;
        if (!((I = n == null ? void 0 : n.signal) != null && I.aborted)) {
          if (k instanceof Error)
            return l(k);
          try {
            const M = at(r, k.result);
            M.success ? u(M.data) : l(M.error);
          } catch (M) {
            l(M);
          }
        }
      }), ($ = n == null ? void 0 : n.signal) == null || $.addEventListener("abort", () => {
        var k;
        v((k = n == null ? void 0 : n.signal) == null ? void 0 : k.reason);
      });
      const w = (n == null ? void 0 : n.timeout) ?? Cm, h = () => v(Q.fromError(Y.RequestTimeout, "Request timed out", { timeout: w }));
      this._setupTimeout(_, w, n == null ? void 0 : n.maxTotalTimeout, h, (n == null ? void 0 : n.resetTimeoutOnProgress) ?? !1);
      const m = c == null ? void 0 : c.taskId;
      if (m) {
        const k = (I) => {
          const M = this._responseHandlers.get(_);
          M ? M(I) : this._onerror(new Error(`Response handler missing for side-channeled request ${_}`));
        };
        this._requestResolvers.set(_, k), this._enqueueTaskMessage(m, {
          type: "request",
          message: y,
          timestamp: Date.now()
        }).catch((I) => {
          this._cleanupTimeout(_), l(I);
        });
      } else
        this._transport.send(y, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((k) => {
          this._cleanupTimeout(_), l(k);
        });
    });
  }
  /**
   * Gets the current status of a task.
   *
   * @experimental Use `client.experimental.tasks.getTask()` to access this method.
   */
  async getTask(t, r) {
    return this.request({ method: "tasks/get", params: t }, Ao, r);
  }
  /**
   * Retrieves the result of a completed task.
   *
   * @experimental Use `client.experimental.tasks.getTaskResult()` to access this method.
   */
  async getTaskResult(t, r, n) {
    return this.request({ method: "tasks/result", params: t }, r, n);
  }
  /**
   * Lists tasks, optionally starting from a pagination cursor.
   *
   * @experimental Use `client.experimental.tasks.listTasks()` to access this method.
   */
  async listTasks(t, r) {
    return this.request({ method: "tasks/list", params: t }, Vo, r);
  }
  /**
   * Cancels a specific task.
   *
   * @experimental Use `client.experimental.tasks.cancelTask()` to access this method.
   */
  async cancelTask(t, r) {
    return this.request({ method: "tasks/cancel", params: t }, vp, r);
  }
  /**
   * Emits a notification, which is a one-way message that does not expect a response.
   */
  async notification(t, r) {
    var i, c, u, l;
    if (!this._transport)
      throw new Error("Not connected");
    this.assertNotificationCapability(t.method);
    const n = (i = r == null ? void 0 : r.relatedTask) == null ? void 0 : i.taskId;
    if (n) {
      const g = {
        ...t,
        jsonrpc: "2.0",
        params: {
          ...t.params,
          _meta: {
            ...((c = t.params) == null ? void 0 : c._meta) || {},
            [gt]: r.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(n, {
        type: "notification",
        message: g,
        timestamp: Date.now()
      });
      return;
    }
    if ((((u = this._options) == null ? void 0 : u.debouncedNotificationMethods) ?? []).includes(t.method) && !t.params && !(r != null && r.relatedRequestId) && !(r != null && r.relatedTask)) {
      if (this._pendingDebouncedNotifications.has(t.method))
        return;
      this._pendingDebouncedNotifications.add(t.method), Promise.resolve().then(() => {
        var _, y;
        if (this._pendingDebouncedNotifications.delete(t.method), !this._transport)
          return;
        let g = {
          ...t,
          jsonrpc: "2.0"
        };
        r != null && r.relatedTask && (g = {
          ...g,
          params: {
            ...g.params,
            _meta: {
              ...((_ = g.params) == null ? void 0 : _._meta) || {},
              [gt]: r.relatedTask
            }
          }
        }), (y = this._transport) == null || y.send(g, r).catch((v) => this._onerror(v));
      });
      return;
    }
    let a = {
      ...t,
      jsonrpc: "2.0"
    };
    r != null && r.relatedTask && (a = {
      ...a,
      params: {
        ...a.params,
        _meta: {
          ...((l = a.params) == null ? void 0 : l._meta) || {},
          [gt]: r.relatedTask
        }
      }
    }), await this._transport.send(a, r);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a request with the given method.
   *
   * Note that this will replace any previous request handler for the same method.
   */
  setRequestHandler(t, r) {
    const n = Ts(t);
    this.assertRequestHandlerCapability(n), this._requestHandlers.set(n, (o, s) => {
      const a = Ps(t, o);
      return Promise.resolve(r(a, s));
    });
  }
  /**
   * Removes the request handler for the given method.
   */
  removeRequestHandler(t) {
    this._requestHandlers.delete(t);
  }
  /**
   * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
   */
  assertCanSetRequestHandler(t) {
    if (this._requestHandlers.has(t))
      throw new Error(`A request handler for ${t} already exists, which would be overridden`);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a notification with the given method.
   *
   * Note that this will replace any previous notification handler for the same method.
   */
  setNotificationHandler(t, r) {
    const n = Ts(t);
    this._notificationHandlers.set(n, (o) => {
      const s = Ps(t, o);
      return Promise.resolve(r(s));
    });
  }
  /**
   * Removes the notification handler for the given method.
   */
  removeNotificationHandler(t) {
    this._notificationHandlers.delete(t);
  }
  /**
   * Cleans up the progress handler associated with a task.
   * This should be called when a task reaches a terminal status.
   */
  _cleanupTaskProgressHandler(t) {
    const r = this._taskProgressTokens.get(t);
    r !== void 0 && (this._progressHandlers.delete(r), this._taskProgressTokens.delete(t));
  }
  /**
   * Enqueues a task-related message for side-channel delivery via tasks/result.
   * @param taskId The task ID to associate the message with
   * @param message The message to enqueue
   * @param sessionId Optional session ID for binding the operation to a specific session
   * @throws Error if taskStore is not configured or if enqueue fails (e.g., queue overflow)
   *
   * Note: If enqueue fails, it's the TaskMessageQueue implementation's responsibility to handle
   * the error appropriately (e.g., by failing the task, logging, etc.). The Protocol layer
   * simply propagates the error.
   */
  async _enqueueTaskMessage(t, r, n) {
    var s;
    if (!this._taskStore || !this._taskMessageQueue)
      throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    const o = (s = this._options) == null ? void 0 : s.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(t, r, n, o);
  }
  /**
   * Clears the message queue for a task and rejects any pending request resolvers.
   * @param taskId The task ID whose queue should be cleared
   * @param sessionId Optional session ID for binding the operation to a specific session
   */
  async _clearTaskQueue(t, r) {
    if (this._taskMessageQueue) {
      const n = await this._taskMessageQueue.dequeueAll(t, r);
      for (const o of n)
        if (o.type === "request" && eo(o.message)) {
          const s = o.message.id, a = this._requestResolvers.get(s);
          a ? (a(new Q(Y.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(s)) : this._onerror(new Error(`Resolver missing for request ${s} during task ${t} cleanup`));
        }
    }
  }
  /**
   * Waits for a task update (new messages or status change) with abort signal support.
   * Uses polling to check for updates at the task's configured poll interval.
   * @param taskId The task ID to wait for
   * @param signal Abort signal to cancel the wait
   * @returns Promise that resolves when an update occurs or rejects if aborted
   */
  async _waitForTaskUpdate(t, r) {
    var o, s;
    let n = ((o = this._options) == null ? void 0 : o.defaultTaskPollInterval) ?? 1e3;
    try {
      const a = await ((s = this._taskStore) == null ? void 0 : s.getTask(t));
      a != null && a.pollInterval && (n = a.pollInterval);
    } catch {
    }
    return new Promise((a, i) => {
      if (r.aborted) {
        i(new Q(Y.InvalidRequest, "Request cancelled"));
        return;
      }
      const c = setTimeout(a, n);
      r.addEventListener("abort", () => {
        clearTimeout(c), i(new Q(Y.InvalidRequest, "Request cancelled"));
      }, { once: !0 });
    });
  }
  requestTaskStore(t, r) {
    const n = this._taskStore;
    if (!n)
      throw new Error("No task store configured");
    return {
      createTask: async (o) => {
        if (!t)
          throw new Error("No request provided");
        return await n.createTask(o, t.id, {
          method: t.method,
          params: t.params
        }, r);
      },
      getTask: async (o) => {
        const s = await n.getTask(o, r);
        if (!s)
          throw new Q(Y.InvalidParams, "Failed to retrieve task: Task not found");
        return s;
      },
      storeTaskResult: async (o, s, a) => {
        await n.storeTaskResult(o, s, a, r);
        const i = await n.getTask(o, r);
        if (i) {
          const c = tn.parse({
            method: "notifications/tasks/status",
            params: i
          });
          await this.notification(c), ht(i.status) && this._cleanupTaskProgressHandler(o);
        }
      },
      getTaskResult: (o) => n.getTaskResult(o, r),
      updateTaskStatus: async (o, s, a) => {
        const i = await n.getTask(o, r);
        if (!i)
          throw new Q(Y.InvalidParams, `Task "${o}" not found - it may have been cleaned up`);
        if (ht(i.status))
          throw new Q(Y.InvalidParams, `Cannot update task "${o}" from terminal status "${i.status}" to "${s}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await n.updateTaskStatus(o, s, a, r);
        const c = await n.getTask(o, r);
        if (c) {
          const u = tn.parse({
            method: "notifications/tasks/status",
            params: c
          });
          await this.notification(u), ht(c.status) && this._cleanupTaskProgressHandler(o);
        }
      },
      listTasks: (o) => n.listTasks(o, r)
    };
  }
}
function Rs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Om(e, t) {
  const r = { ...e };
  for (const n in t) {
    const o = n, s = t[o];
    if (s === void 0)
      continue;
    const a = r[o];
    Rs(a) && Rs(s) ? r[o] = { ...a, ...s } : r[o] = s;
  }
  return r;
}
var ur = { exports: {} }, zn = {}, tt = {}, pt = {}, jn = {}, qn = {}, Mn = {}, Cs;
function nn() {
  return Cs || (Cs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(d) {
        if (super(), !e.IDENTIFIER.test(d))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = d;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = r;
    class n extends t {
      constructor(d) {
        super(), this._items = typeof d == "string" ? [d] : d;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const d = this._items[0];
        return d === "" || d === '""';
      }
      get str() {
        var d;
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((p, S) => `${p}${S}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((p, S) => (S instanceof r && (p[S.str] = (p[S.str] || 0) + 1), p), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(m, ...d) {
      const p = [m[0]];
      let S = 0;
      for (; S < d.length; )
        i(p, d[S]), p.push(m[++S]);
      return new n(p);
    }
    e._ = o;
    const s = new n("+");
    function a(m, ...d) {
      const p = [y(m[0])];
      let S = 0;
      for (; S < d.length; )
        p.push(s), i(p, d[S]), p.push(s, y(m[++S]));
      return c(p), new n(p);
    }
    e.str = a;
    function i(m, d) {
      d instanceof n ? m.push(...d._items) : d instanceof r ? m.push(d) : m.push(g(d));
    }
    e.addCodeArg = i;
    function c(m) {
      let d = 1;
      for (; d < m.length - 1; ) {
        if (m[d] === s) {
          const p = u(m[d - 1], m[d + 1]);
          if (p !== void 0) {
            m.splice(d - 1, 3, p);
            continue;
          }
          m[d++] = "+";
        }
        d++;
      }
    }
    function u(m, d) {
      if (d === '""')
        return m;
      if (m === '""')
        return d;
      if (typeof m == "string")
        return d instanceof r || m[m.length - 1] !== '"' ? void 0 : typeof d != "string" ? `${m.slice(0, -1)}${d}"` : d[0] === '"' ? m.slice(0, -1) + d.slice(1) : void 0;
      if (typeof d == "string" && d[0] === '"' && !(m instanceof r))
        return `"${m}${d.slice(1)}`;
    }
    function l(m, d) {
      return d.emptyStr() ? m : m.emptyStr() ? d : a`${m}${d}`;
    }
    e.strConcat = l;
    function g(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : y(Array.isArray(m) ? m.join(",") : m);
    }
    function _(m) {
      return new n(y(m));
    }
    e.stringify = _;
    function y(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function v(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new n(`.${m}`) : o`[${m}]`;
    }
    e.getProperty = v;
    function w(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new n(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function h(m) {
      return new n(m.toString());
    }
    e.regexpCode = h;
  }(Mn)), Mn;
}
var An = {}, Is;
function Os() {
  return Is || (Is = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = nn();
    class r extends Error {
      constructor(u) {
        super(`CodeGen: "code" for ${u} not defined`), this.value = u.value;
      }
    }
    var n;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(n || (e.UsedValueState = n = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class o {
      constructor({ prefixes: u, parent: l } = {}) {
        this._names = {}, this._prefixes = u, this._parent = l;
      }
      toName(u) {
        return u instanceof t.Name ? u : this.name(u);
      }
      name(u) {
        return new t.Name(this._newName(u));
      }
      _newName(u) {
        const l = this._names[u] || this._nameGroup(u);
        return `${u}${l.index++}`;
      }
      _nameGroup(u) {
        var l, g;
        if (!((g = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || g === void 0) && g.has(u) || this._prefixes && !this._prefixes.has(u))
          throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
        return this._names[u] = { prefix: u, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(u, l) {
        super(l), this.prefix = u;
      }
      setValue(u, { property: l, itemIndex: g }) {
        this.value = u, this.scopePath = (0, t._)`.${new t.Name(l)}[${g}]`;
      }
    }
    e.ValueScopeName = s;
    const a = (0, t._)`\n`;
    class i extends o {
      constructor(u) {
        super(u), this._values = {}, this._scope = u.scope, this.opts = { ...u, _n: u.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(u) {
        return new s(u, this._newName(u));
      }
      value(u, l) {
        var g;
        if (l.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const _ = this.toName(u), { prefix: y } = _, v = (g = l.key) !== null && g !== void 0 ? g : l.ref;
        let w = this._values[y];
        if (w) {
          const d = w.get(v);
          if (d)
            return d;
        } else
          w = this._values[y] = /* @__PURE__ */ new Map();
        w.set(v, _);
        const h = this._scope[y] || (this._scope[y] = []), m = h.length;
        return h[m] = l.ref, _.setValue(l, { property: y, itemIndex: m }), _;
      }
      getValue(u, l) {
        const g = this._values[u];
        if (g)
          return g.get(l);
      }
      scopeRefs(u, l = this._values) {
        return this._reduceValues(l, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${u}${g.scopePath}`;
        });
      }
      scopeCode(u = this._values, l, g) {
        return this._reduceValues(u, (_) => {
          if (_.value === void 0)
            throw new Error(`CodeGen: name "${_}" has no value`);
          return _.value.code;
        }, l, g);
      }
      _reduceValues(u, l, g = {}, _) {
        let y = t.nil;
        for (const v in u) {
          const w = u[v];
          if (!w)
            continue;
          const h = g[v] = g[v] || /* @__PURE__ */ new Map();
          w.forEach((m) => {
            if (h.has(m))
              return;
            h.set(m, n.Started);
            let d = l(m);
            if (d) {
              const p = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${p} ${m} = ${d};${this.opts._n}`;
            } else if (d = _ == null ? void 0 : _(m))
              y = (0, t._)`${y}${d}${this.opts._n}`;
            else
              throw new r(m);
            h.set(m, n.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = i;
  }(An)), An;
}
var Ns;
function ee() {
  return Ns || (Ns = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = nn(), r = Os();
    var n = nn();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return n._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return n.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return n.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return n.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return n.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return n.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return n.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return n.Name;
    } });
    var o = Os();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return o.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return o.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return o.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return o.varKinds;
    } }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class s {
      optimizeNodes() {
        return this;
      }
      optimizeNames(b, E) {
        return this;
      }
    }
    class a extends s {
      constructor(b, E, N) {
        super(), this.varKind = b, this.name = E, this.rhs = N;
      }
      render({ es5: b, _n: E }) {
        const N = b ? r.varKinds.var : this.varKind, K = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${N} ${this.name}${K};` + E;
      }
      optimizeNames(b, E) {
        if (b[this.name.str])
          return this.rhs && (this.rhs = H(this.rhs, b, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor(b, E, N) {
        super(), this.lhs = b, this.rhs = E, this.sideEffects = N;
      }
      render({ _n: b }) {
        return `${this.lhs} = ${this.rhs};` + b;
      }
      optimizeNames(b, E) {
        if (!(this.lhs instanceof t.Name && !b[this.lhs.str] && !this.sideEffects))
          return this.rhs = H(this.rhs, b, E), this;
      }
      get names() {
        const b = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return x(b, this.rhs);
      }
    }
    class c extends i {
      constructor(b, E, N, K) {
        super(b, N, K), this.op = E;
      }
      render({ _n: b }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + b;
      }
    }
    class u extends s {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `${this.label}:` + b;
      }
    }
    class l extends s {
      constructor(b) {
        super(), this.label = b, this.names = {};
      }
      render({ _n: b }) {
        return `break${this.label ? ` ${this.label}` : ""};` + b;
      }
    }
    class g extends s {
      constructor(b) {
        super(), this.error = b;
      }
      render({ _n: b }) {
        return `throw ${this.error};` + b;
      }
      get names() {
        return this.error.names;
      }
    }
    class _ extends s {
      constructor(b) {
        super(), this.code = b;
      }
      render({ _n: b }) {
        return `${this.code};` + b;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(b, E) {
        return this.code = H(this.code, b, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class y extends s {
      constructor(b = []) {
        super(), this.nodes = b;
      }
      render(b) {
        return this.nodes.reduce((E, N) => E + N.render(b), "");
      }
      optimizeNodes() {
        const { nodes: b } = this;
        let E = b.length;
        for (; E--; ) {
          const N = b[E].optimizeNodes();
          Array.isArray(N) ? b.splice(E, 1, ...N) : N ? b[E] = N : b.splice(E, 1);
        }
        return b.length > 0 ? this : void 0;
      }
      optimizeNames(b, E) {
        const { nodes: N } = this;
        let K = N.length;
        for (; K--; ) {
          const B = N[K];
          B.optimizeNames(b, E) || (oe(b, B.names), N.splice(K, 1));
        }
        return N.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((b, E) => Z(b, E.names), {});
      }
    }
    class v extends y {
      render(b) {
        return "{" + b._n + super.render(b) + "}" + b._n;
      }
    }
    class w extends y {
    }
    class h extends v {
    }
    h.kind = "else";
    class m extends v {
      constructor(b, E) {
        super(E), this.condition = b;
      }
      render(b) {
        let E = `if(${this.condition})` + super.render(b);
        return this.else && (E += "else " + this.else.render(b)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const b = this.condition;
        if (b === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const N = E.optimizeNodes();
          E = this.else = Array.isArray(N) ? new h(N) : N;
        }
        if (E)
          return b === !1 ? E instanceof m ? E : E.nodes : this.nodes.length ? this : new m(Te(b), E instanceof m ? [E] : E.nodes);
        if (!(b === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(b, E) {
        var N;
        if (this.else = (N = this.else) === null || N === void 0 ? void 0 : N.optimizeNames(b, E), !!(super.optimizeNames(b, E) || this.else))
          return this.condition = H(this.condition, b, E), this;
      }
      get names() {
        const b = super.names;
        return x(b, this.condition), this.else && Z(b, this.else.names), b;
      }
    }
    m.kind = "if";
    class d extends v {
    }
    d.kind = "for";
    class p extends d {
      constructor(b) {
        super(), this.iteration = b;
      }
      render(b) {
        return `for(${this.iteration})` + super.render(b);
      }
      optimizeNames(b, E) {
        if (super.optimizeNames(b, E))
          return this.iteration = H(this.iteration, b, E), this;
      }
      get names() {
        return Z(super.names, this.iteration.names);
      }
    }
    class S extends d {
      constructor(b, E, N, K) {
        super(), this.varKind = b, this.name = E, this.from = N, this.to = K;
      }
      render(b) {
        const E = b.es5 ? r.varKinds.var : this.varKind, { name: N, from: K, to: B } = this;
        return `for(${E} ${N}=${K}; ${N}<${B}; ${N}++)` + super.render(b);
      }
      get names() {
        const b = x(super.names, this.from);
        return x(b, this.to);
      }
    }
    class f extends d {
      constructor(b, E, N, K) {
        super(), this.loop = b, this.varKind = E, this.name = N, this.iterable = K;
      }
      render(b) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(b);
      }
      optimizeNames(b, E) {
        if (super.optimizeNames(b, E))
          return this.iterable = H(this.iterable, b, E), this;
      }
      get names() {
        return Z(super.names, this.iterable.names);
      }
    }
    class $ extends v {
      constructor(b, E, N) {
        super(), this.name = b, this.args = E, this.async = N;
      }
      render(b) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(b);
      }
    }
    $.kind = "func";
    class k extends y {
      render(b) {
        return "return " + super.render(b);
      }
    }
    k.kind = "return";
    class I extends v {
      render(b) {
        let E = "try" + super.render(b);
        return this.catch && (E += this.catch.render(b)), this.finally && (E += this.finally.render(b)), E;
      }
      optimizeNodes() {
        var b, E;
        return super.optimizeNodes(), (b = this.catch) === null || b === void 0 || b.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(b, E) {
        var N, K;
        return super.optimizeNames(b, E), (N = this.catch) === null || N === void 0 || N.optimizeNames(b, E), (K = this.finally) === null || K === void 0 || K.optimizeNames(b, E), this;
      }
      get names() {
        const b = super.names;
        return this.catch && Z(b, this.catch.names), this.finally && Z(b, this.finally.names), b;
      }
    }
    class M extends v {
      constructor(b) {
        super(), this.error = b;
      }
      render(b) {
        return `catch(${this.error})` + super.render(b);
      }
    }
    M.kind = "catch";
    class V extends v {
      render(b) {
        return "finally" + super.render(b);
      }
    }
    V.kind = "finally";
    class j {
      constructor(b, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = b, this._scope = new r.Scope({ parent: b }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(b) {
        return this._scope.name(b);
      }
      // reserves unique name in the external scope
      scopeName(b) {
        return this._extScope.name(b);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(b, E) {
        const N = this._extScope.value(b, E);
        return (this._values[N.prefix] || (this._values[N.prefix] = /* @__PURE__ */ new Set())).add(N), N;
      }
      getScopeValue(b, E) {
        return this._extScope.getValue(b, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(b) {
        return this._extScope.scopeRefs(b, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(b, E, N, K) {
        const B = this._scope.toName(E);
        return N !== void 0 && K && (this._constants[B.str] = N), this._leafNode(new a(b, B, N)), B;
      }
      // `const` declaration (`var` in es5 mode)
      const(b, E, N) {
        return this._def(r.varKinds.const, b, E, N);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(b, E, N) {
        return this._def(r.varKinds.let, b, E, N);
      }
      // `var` declaration with optional assignment
      var(b, E, N) {
        return this._def(r.varKinds.var, b, E, N);
      }
      // assignment code
      assign(b, E, N) {
        return this._leafNode(new i(b, E, N));
      }
      // `+=` code
      add(b, E) {
        return this._leafNode(new c(b, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(b) {
        return typeof b == "function" ? b() : b !== t.nil && this._leafNode(new _(b)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...b) {
        const E = ["{"];
        for (const [N, K] of b)
          E.length > 1 && E.push(","), E.push(N), (N !== K || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, K));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(b, E, N) {
        if (this._blockNode(new m(b)), E && N)
          this.code(E).else().code(N).endIf();
        else if (E)
          this.code(E).endIf();
        else if (N)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(b) {
        return this._elseNode(new m(b));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, h);
      }
      _for(b, E) {
        return this._blockNode(b), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(b, E) {
        return this._for(new p(b), E);
      }
      // `for` statement for a range of values
      forRange(b, E, N, K, B = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const ae = this._scope.toName(b);
        return this._for(new S(B, ae, E, N), () => K(ae));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(b, E, N, K = r.varKinds.const) {
        const B = this._scope.toName(b);
        if (this.opts.es5) {
          const ae = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${ae}.length`, (ne) => {
            this.var(B, (0, t._)`${ae}[${ne}]`), N(B);
          });
        }
        return this._for(new f("of", K, B, E), () => N(B));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(b, E, N, K = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(b, (0, t._)`Object.keys(${E})`, N);
        const B = this._scope.toName(b);
        return this._for(new f("in", K, B, E), () => N(B));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label(b) {
        return this._leafNode(new u(b));
      }
      // `break` statement
      break(b) {
        return this._leafNode(new l(b));
      }
      // `return` statement
      return(b) {
        const E = new k();
        if (this._blockNode(E), this.code(b), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(k);
      }
      // `try` statement
      try(b, E, N) {
        if (!E && !N)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const K = new I();
        if (this._blockNode(K), this.code(b), E) {
          const B = this.name("e");
          this._currNode = K.catch = new M(B), E(B);
        }
        return N && (this._currNode = K.finally = new V(), this.code(N)), this._endBlockNode(M, V);
      }
      // `throw` statement
      throw(b) {
        return this._leafNode(new g(b));
      }
      // start self-balancing block
      block(b, E) {
        return this._blockStarts.push(this._nodes.length), b && this.code(b).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(b) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const N = this._nodes.length - E;
        if (N < 0 || b !== void 0 && N !== b)
          throw new Error(`CodeGen: wrong number of nodes: ${N} vs ${b} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(b, E = t.nil, N, K) {
        return this._blockNode(new $(b, E, N)), K && this.code(K).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode($);
      }
      optimize(b = 1) {
        for (; b-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(b) {
        return this._currNode.nodes.push(b), this;
      }
      _blockNode(b) {
        this._currNode.nodes.push(b), this._nodes.push(b);
      }
      _endBlockNode(b, E) {
        const N = this._currNode;
        if (N instanceof b || E && N instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${b.kind}/${E.kind}` : b.kind}"`);
      }
      _elseNode(b) {
        const E = this._currNode;
        if (!(E instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = b, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const b = this._nodes;
        return b[b.length - 1];
      }
      set _currNode(b) {
        const E = this._nodes;
        E[E.length - 1] = b;
      }
    }
    e.CodeGen = j;
    function Z(P, b) {
      for (const E in b)
        P[E] = (P[E] || 0) + (b[E] || 0);
      return P;
    }
    function x(P, b) {
      return b instanceof t._CodeOrName ? Z(P, b.names) : P;
    }
    function H(P, b, E) {
      if (P instanceof t.Name)
        return N(P);
      if (!K(P))
        return P;
      return new t._Code(P._items.reduce((B, ae) => (ae instanceof t.Name && (ae = N(ae)), ae instanceof t._Code ? B.push(...ae._items) : B.push(ae), B), []));
      function N(B) {
        const ae = E[B.str];
        return ae === void 0 || b[B.str] !== 1 ? B : (delete b[B.str], ae);
      }
      function K(B) {
        return B instanceof t._Code && B._items.some((ae) => ae instanceof t.Name && b[ae.str] === 1 && E[ae.str] !== void 0);
      }
    }
    function oe(P, b) {
      for (const E in b)
        P[E] = (P[E] || 0) - (b[E] || 0);
    }
    function Te(P) {
      return typeof P == "boolean" || typeof P == "number" || P === null ? !P : (0, t._)`!${q(P)}`;
    }
    e.not = Te;
    const Pe = C(e.operators.AND);
    function ie(...P) {
      return P.reduce(Pe);
    }
    e.and = ie;
    const Le = C(e.operators.OR);
    function D(...P) {
      return P.reduce(Le);
    }
    e.or = D;
    function C(P) {
      return (b, E) => b === t.nil ? E : E === t.nil ? b : (0, t._)`${q(b)} ${P} ${q(E)}`;
    }
    function q(P) {
      return P instanceof t.Name ? P : (0, t._)`(${P})`;
    }
  }(qn)), qn;
}
var X = {}, zs;
function se() {
  if (zs) return X;
  zs = 1, Object.defineProperty(X, "__esModule", { value: !0 }), X.checkStrictMode = X.getErrorPath = X.Type = X.useFunc = X.setEvaluated = X.evaluatedPropsToName = X.mergeEvaluated = X.eachItem = X.unescapeJsonPointer = X.escapeJsonPointer = X.escapeFragment = X.unescapeFragment = X.schemaRefOrVal = X.schemaHasRulesButRef = X.schemaHasRules = X.checkUnknownRules = X.alwaysValidSchema = X.toHash = void 0;
  const e = ee(), t = nn();
  function r(f) {
    const $ = {};
    for (const k of f)
      $[k] = !0;
    return $;
  }
  X.toHash = r;
  function n(f, $) {
    return typeof $ == "boolean" ? $ : Object.keys($).length === 0 ? !0 : (o(f, $), !s($, f.self.RULES.all));
  }
  X.alwaysValidSchema = n;
  function o(f, $ = f.schema) {
    const { opts: k, self: I } = f;
    if (!k.strictSchema || typeof $ == "boolean")
      return;
    const M = I.RULES.keywords;
    for (const V in $)
      M[V] || S(f, `unknown keyword: "${V}"`);
  }
  X.checkUnknownRules = o;
  function s(f, $) {
    if (typeof f == "boolean")
      return !f;
    for (const k in f)
      if ($[k])
        return !0;
    return !1;
  }
  X.schemaHasRules = s;
  function a(f, $) {
    if (typeof f == "boolean")
      return !f;
    for (const k in f)
      if (k !== "$ref" && $.all[k])
        return !0;
    return !1;
  }
  X.schemaHasRulesButRef = a;
  function i({ topSchemaRef: f, schemaPath: $ }, k, I, M) {
    if (!M) {
      if (typeof k == "number" || typeof k == "boolean")
        return k;
      if (typeof k == "string")
        return (0, e._)`${k}`;
    }
    return (0, e._)`${f}${$}${(0, e.getProperty)(I)}`;
  }
  X.schemaRefOrVal = i;
  function c(f) {
    return g(decodeURIComponent(f));
  }
  X.unescapeFragment = c;
  function u(f) {
    return encodeURIComponent(l(f));
  }
  X.escapeFragment = u;
  function l(f) {
    return typeof f == "number" ? `${f}` : f.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  X.escapeJsonPointer = l;
  function g(f) {
    return f.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  X.unescapeJsonPointer = g;
  function _(f, $) {
    if (Array.isArray(f))
      for (const k of f)
        $(k);
    else
      $(f);
  }
  X.eachItem = _;
  function y({ mergeNames: f, mergeToName: $, mergeValues: k, resultToName: I }) {
    return (M, V, j, Z) => {
      const x = j === void 0 ? V : j instanceof e.Name ? (V instanceof e.Name ? f(M, V, j) : $(M, V, j), j) : V instanceof e.Name ? ($(M, j, V), V) : k(V, j);
      return Z === e.Name && !(x instanceof e.Name) ? I(M, x) : x;
    };
  }
  X.mergeEvaluated = {
    props: y({
      mergeNames: (f, $, k) => f.if((0, e._)`${k} !== true && ${$} !== undefined`, () => {
        f.if((0, e._)`${$} === true`, () => f.assign(k, !0), () => f.assign(k, (0, e._)`${k} || {}`).code((0, e._)`Object.assign(${k}, ${$})`));
      }),
      mergeToName: (f, $, k) => f.if((0, e._)`${k} !== true`, () => {
        $ === !0 ? f.assign(k, !0) : (f.assign(k, (0, e._)`${k} || {}`), w(f, k, $));
      }),
      mergeValues: (f, $) => f === !0 ? !0 : { ...f, ...$ },
      resultToName: v
    }),
    items: y({
      mergeNames: (f, $, k) => f.if((0, e._)`${k} !== true && ${$} !== undefined`, () => f.assign(k, (0, e._)`${$} === true ? true : ${k} > ${$} ? ${k} : ${$}`)),
      mergeToName: (f, $, k) => f.if((0, e._)`${k} !== true`, () => f.assign(k, $ === !0 ? !0 : (0, e._)`${k} > ${$} ? ${k} : ${$}`)),
      mergeValues: (f, $) => f === !0 ? !0 : Math.max(f, $),
      resultToName: (f, $) => f.var("items", $)
    })
  };
  function v(f, $) {
    if ($ === !0)
      return f.var("props", !0);
    const k = f.var("props", (0, e._)`{}`);
    return $ !== void 0 && w(f, k, $), k;
  }
  X.evaluatedPropsToName = v;
  function w(f, $, k) {
    Object.keys(k).forEach((I) => f.assign((0, e._)`${$}${(0, e.getProperty)(I)}`, !0));
  }
  X.setEvaluated = w;
  const h = {};
  function m(f, $) {
    return f.scopeValue("func", {
      ref: $,
      code: h[$.code] || (h[$.code] = new t._Code($.code))
    });
  }
  X.useFunc = m;
  var d;
  (function(f) {
    f[f.Num = 0] = "Num", f[f.Str = 1] = "Str";
  })(d || (X.Type = d = {}));
  function p(f, $, k) {
    if (f instanceof e.Name) {
      const I = $ === d.Num;
      return k ? I ? (0, e._)`"[" + ${f} + "]"` : (0, e._)`"['" + ${f} + "']"` : I ? (0, e._)`"/" + ${f}` : (0, e._)`"/" + ${f}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return k ? (0, e.getProperty)(f).toString() : "/" + l(f);
  }
  X.getErrorPath = p;
  function S(f, $, k = f.opts.strictSchema) {
    if (k) {
      if ($ = `strict mode: ${$}`, k === !0)
        throw new Error($);
      f.self.logger.warn($);
    }
  }
  return X.checkStrictMode = S, X;
}
var lr = {}, js;
function ft() {
  if (js) return lr;
  js = 1, Object.defineProperty(lr, "__esModule", { value: !0 });
  const e = ee(), t = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return lr.default = t, lr;
}
var qs;
function bn() {
  return qs || (qs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = ee(), r = se(), n = ft();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: m }) => m ? (0, t.str)`"${h}" keyword must be ${m} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function o(h, m = e.keywordError, d, p) {
      const { it: S } = h, { gen: f, compositeRule: $, allErrors: k } = S, I = g(h, m, d);
      p ?? ($ || k) ? c(f, I) : u(S, (0, t._)`[${I}]`);
    }
    e.reportError = o;
    function s(h, m = e.keywordError, d) {
      const { it: p } = h, { gen: S, compositeRule: f, allErrors: $ } = p, k = g(h, m, d);
      c(S, k), f || $ || u(p, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(h, m) {
      h.assign(n.default.errors, m), h.if((0, t._)`${n.default.vErrors} !== null`, () => h.if(m, () => h.assign((0, t._)`${n.default.vErrors}.length`, m), () => h.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: h, keyword: m, schemaValue: d, data: p, errsCount: S, it: f }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const $ = h.name("err");
      h.forRange("i", S, n.default.errors, (k) => {
        h.const($, (0, t._)`${n.default.vErrors}[${k}]`), h.if((0, t._)`${$}.instancePath === undefined`, () => h.assign((0, t._)`${$}.instancePath`, (0, t.strConcat)(n.default.instancePath, f.errorPath))), h.assign((0, t._)`${$}.schemaPath`, (0, t.str)`${f.errSchemaPath}/${m}`), f.opts.verbose && (h.assign((0, t._)`${$}.schema`, d), h.assign((0, t._)`${$}.data`, p));
      });
    }
    e.extendErrors = i;
    function c(h, m) {
      const d = h.const("err", m);
      h.if((0, t._)`${n.default.vErrors} === null`, () => h.assign(n.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${n.default.vErrors}.push(${d})`), h.code((0, t._)`${n.default.errors}++`);
    }
    function u(h, m) {
      const { gen: d, validateName: p, schemaEnv: S } = h;
      S.$async ? d.throw((0, t._)`new ${h.ValidationError}(${m})`) : (d.assign((0, t._)`${p}.errors`, m), d.return(!1));
    }
    const l = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function g(h, m, d) {
      const { createErrors: p } = h.it;
      return p === !1 ? (0, t._)`{}` : _(h, m, d);
    }
    function _(h, m, d = {}) {
      const { gen: p, it: S } = h, f = [
        y(S, d),
        v(h, d)
      ];
      return w(h, m, f), p.object(...f);
    }
    function y({ errorPath: h }, { instancePath: m }) {
      const d = m ? (0, t.str)`${h}${(0, r.getErrorPath)(m, r.Type.Str)}` : h;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, d)];
    }
    function v({ keyword: h, it: { errSchemaPath: m } }, { schemaPath: d, parentSchema: p }) {
      let S = p ? m : (0, t.str)`${m}/${h}`;
      return d && (S = (0, t.str)`${S}${(0, r.getErrorPath)(d, r.Type.Str)}`), [l.schemaPath, S];
    }
    function w(h, { params: m, message: d }, p) {
      const { keyword: S, data: f, schemaValue: $, it: k } = h, { opts: I, propertyName: M, topSchemaRef: V, schemaPath: j } = k;
      p.push([l.keyword, S], [l.params, typeof m == "function" ? m(h) : m || (0, t._)`{}`]), I.messages && p.push([l.message, typeof d == "function" ? d(h) : d]), I.verbose && p.push([l.schema, $], [l.parentSchema, (0, t._)`${V}${j}`], [n.default.data, f]), M && p.push([l.propertyName, M]);
    }
  }(jn)), jn;
}
var Ms;
function Nm() {
  if (Ms) return pt;
  Ms = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.boolOrEmptySchema = pt.topBoolOrEmptySchema = void 0;
  const e = bn(), t = ee(), r = ft(), n = {
    message: "boolean schema is false"
  };
  function o(i) {
    const { gen: c, schema: u, validateName: l } = i;
    u === !1 ? a(i, !1) : typeof u == "object" && u.$async === !0 ? c.return(r.default.data) : (c.assign((0, t._)`${l}.errors`, null), c.return(!0));
  }
  pt.topBoolOrEmptySchema = o;
  function s(i, c) {
    const { gen: u, schema: l } = i;
    l === !1 ? (u.var(c, !1), a(i)) : u.var(c, !0);
  }
  pt.boolOrEmptySchema = s;
  function a(i, c) {
    const { gen: u, data: l } = i, g = {
      gen: u,
      keyword: "false schema",
      data: l,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(g, n, void 0, c);
  }
  return pt;
}
var Ie = {}, mt = {}, As;
function _c() {
  if (As) return mt;
  As = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.getRules = mt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(o) {
    return typeof o == "string" && t.has(o);
  }
  mt.isJSONType = r;
  function n() {
    const o = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...o, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, o.number, o.string, o.array, o.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return mt.getRules = n, mt;
}
var rt = {}, Ds;
function gc() {
  if (Ds) return rt;
  Ds = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.shouldUseRule = rt.shouldUseGroup = rt.schemaHasRulesForType = void 0;
  function e({ schema: n, self: o }, s) {
    const a = o.RULES.types[s];
    return a && a !== !0 && t(n, a);
  }
  rt.schemaHasRulesForType = e;
  function t(n, o) {
    return o.rules.some((s) => r(n, s));
  }
  rt.shouldUseGroup = t;
  function r(n, o) {
    var s;
    return n[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((a) => n[a] !== void 0));
  }
  return rt.shouldUseRule = r, rt;
}
var Us;
function on() {
  if (Us) return Ie;
  Us = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.reportTypeError = Ie.checkDataTypes = Ie.checkDataType = Ie.coerceAndCheckDataType = Ie.getJSONTypes = Ie.getSchemaTypes = Ie.DataType = void 0;
  const e = _c(), t = gc(), r = bn(), n = ee(), o = se();
  var s;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(s || (Ie.DataType = s = {}));
  function a(d) {
    const p = i(d.type);
    if (p.includes("null")) {
      if (d.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!p.length && d.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      d.nullable === !0 && p.push("null");
    }
    return p;
  }
  Ie.getSchemaTypes = a;
  function i(d) {
    const p = Array.isArray(d) ? d : d ? [d] : [];
    if (p.every(e.isJSONType))
      return p;
    throw new Error("type must be JSONType or JSONType[]: " + p.join(","));
  }
  Ie.getJSONTypes = i;
  function c(d, p) {
    const { gen: S, data: f, opts: $ } = d, k = l(p, $.coerceTypes), I = p.length > 0 && !(k.length === 0 && p.length === 1 && (0, t.schemaHasRulesForType)(d, p[0]));
    if (I) {
      const M = v(p, f, $.strictNumbers, s.Wrong);
      S.if(M, () => {
        k.length ? g(d, p, k) : h(d);
      });
    }
    return I;
  }
  Ie.coerceAndCheckDataType = c;
  const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function l(d, p) {
    return p ? d.filter((S) => u.has(S) || p === "array" && S === "array") : [];
  }
  function g(d, p, S) {
    const { gen: f, data: $, opts: k } = d, I = f.let("dataType", (0, n._)`typeof ${$}`), M = f.let("coerced", (0, n._)`undefined`);
    k.coerceTypes === "array" && f.if((0, n._)`${I} == 'object' && Array.isArray(${$}) && ${$}.length == 1`, () => f.assign($, (0, n._)`${$}[0]`).assign(I, (0, n._)`typeof ${$}`).if(v(p, $, k.strictNumbers), () => f.assign(M, $))), f.if((0, n._)`${M} !== undefined`);
    for (const j of S)
      (u.has(j) || j === "array" && k.coerceTypes === "array") && V(j);
    f.else(), h(d), f.endIf(), f.if((0, n._)`${M} !== undefined`, () => {
      f.assign($, M), _(d, M);
    });
    function V(j) {
      switch (j) {
        case "string":
          f.elseIf((0, n._)`${I} == "number" || ${I} == "boolean"`).assign(M, (0, n._)`"" + ${$}`).elseIf((0, n._)`${$} === null`).assign(M, (0, n._)`""`);
          return;
        case "number":
          f.elseIf((0, n._)`${I} == "boolean" || ${$} === null
              || (${I} == "string" && ${$} && ${$} == +${$})`).assign(M, (0, n._)`+${$}`);
          return;
        case "integer":
          f.elseIf((0, n._)`${I} === "boolean" || ${$} === null
              || (${I} === "string" && ${$} && ${$} == +${$} && !(${$} % 1))`).assign(M, (0, n._)`+${$}`);
          return;
        case "boolean":
          f.elseIf((0, n._)`${$} === "false" || ${$} === 0 || ${$} === null`).assign(M, !1).elseIf((0, n._)`${$} === "true" || ${$} === 1`).assign(M, !0);
          return;
        case "null":
          f.elseIf((0, n._)`${$} === "" || ${$} === 0 || ${$} === false`), f.assign(M, null);
          return;
        case "array":
          f.elseIf((0, n._)`${I} === "string" || ${I} === "number"
              || ${I} === "boolean" || ${$} === null`).assign(M, (0, n._)`[${$}]`);
      }
    }
  }
  function _({ gen: d, parentData: p, parentDataProperty: S }, f) {
    d.if((0, n._)`${p} !== undefined`, () => d.assign((0, n._)`${p}[${S}]`, f));
  }
  function y(d, p, S, f = s.Correct) {
    const $ = f === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let k;
    switch (d) {
      case "null":
        return (0, n._)`${p} ${$} null`;
      case "array":
        k = (0, n._)`Array.isArray(${p})`;
        break;
      case "object":
        k = (0, n._)`${p} && typeof ${p} == "object" && !Array.isArray(${p})`;
        break;
      case "integer":
        k = I((0, n._)`!(${p} % 1) && !isNaN(${p})`);
        break;
      case "number":
        k = I();
        break;
      default:
        return (0, n._)`typeof ${p} ${$} ${d}`;
    }
    return f === s.Correct ? k : (0, n.not)(k);
    function I(M = n.nil) {
      return (0, n.and)((0, n._)`typeof ${p} == "number"`, M, S ? (0, n._)`isFinite(${p})` : n.nil);
    }
  }
  Ie.checkDataType = y;
  function v(d, p, S, f) {
    if (d.length === 1)
      return y(d[0], p, S, f);
    let $;
    const k = (0, o.toHash)(d);
    if (k.array && k.object) {
      const I = (0, n._)`typeof ${p} != "object"`;
      $ = k.null ? I : (0, n._)`!${p} || ${I}`, delete k.null, delete k.array, delete k.object;
    } else
      $ = n.nil;
    k.number && delete k.integer;
    for (const I in k)
      $ = (0, n.and)($, y(I, p, S, f));
    return $;
  }
  Ie.checkDataTypes = v;
  const w = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: p }) => typeof d == "string" ? (0, n._)`{type: ${d}}` : (0, n._)`{type: ${p}}`
  };
  function h(d) {
    const p = m(d);
    (0, r.reportError)(p, w);
  }
  Ie.reportTypeError = h;
  function m(d) {
    const { gen: p, data: S, schema: f } = d, $ = (0, o.schemaRefOrVal)(d, f, "type");
    return {
      gen: p,
      keyword: "type",
      data: S,
      schema: f.type,
      schemaCode: $,
      schemaValue: $,
      parentSchema: f,
      params: {},
      it: d
    };
  }
  return Ie;
}
var Zt = {}, Vs;
function zm() {
  if (Vs) return Zt;
  Vs = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.assignDefaults = void 0;
  const e = ee(), t = se();
  function r(o, s) {
    const { properties: a, items: i } = o.schema;
    if (s === "object" && a)
      for (const c in a)
        n(o, c, a[c].default);
    else s === "array" && Array.isArray(i) && i.forEach((c, u) => n(o, u, c.default));
  }
  Zt.assignDefaults = r;
  function n(o, s, a) {
    const { gen: i, compositeRule: c, data: u, opts: l } = o;
    if (a === void 0)
      return;
    const g = (0, e._)`${u}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let _ = (0, e._)`${g} === undefined`;
    l.useDefaults === "empty" && (_ = (0, e._)`${_} || ${g} === null || ${g} === ""`), i.if(_, (0, e._)`${g} = ${(0, e.stringify)(a)}`);
  }
  return Zt;
}
var Qe = {}, le = {}, Zs;
function et() {
  if (Zs) return le;
  Zs = 1, Object.defineProperty(le, "__esModule", { value: !0 }), le.validateUnion = le.validateArray = le.usePattern = le.callValidateCode = le.schemaProperties = le.allSchemaProperties = le.noPropertyInData = le.propertyInData = le.isOwnProperty = le.hasPropFunc = le.reportMissingProp = le.checkMissingProp = le.checkReportMissingProp = void 0;
  const e = ee(), t = se(), r = ft(), n = se();
  function o(d, p) {
    const { gen: S, data: f, it: $ } = d;
    S.if(l(S, f, p, $.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${p}` }, !0), d.error();
    });
  }
  le.checkReportMissingProp = o;
  function s({ gen: d, data: p, it: { opts: S } }, f, $) {
    return (0, e.or)(...f.map((k) => (0, e.and)(l(d, p, k, S.ownProperties), (0, e._)`${$} = ${k}`)));
  }
  le.checkMissingProp = s;
  function a(d, p) {
    d.setParams({ missingProperty: p }, !0), d.error();
  }
  le.reportMissingProp = a;
  function i(d) {
    return d.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  le.hasPropFunc = i;
  function c(d, p, S) {
    return (0, e._)`${i(d)}.call(${p}, ${S})`;
  }
  le.isOwnProperty = c;
  function u(d, p, S, f) {
    const $ = (0, e._)`${p}${(0, e.getProperty)(S)} !== undefined`;
    return f ? (0, e._)`${$} && ${c(d, p, S)}` : $;
  }
  le.propertyInData = u;
  function l(d, p, S, f) {
    const $ = (0, e._)`${p}${(0, e.getProperty)(S)} === undefined`;
    return f ? (0, e.or)($, (0, e.not)(c(d, p, S))) : $;
  }
  le.noPropertyInData = l;
  function g(d) {
    return d ? Object.keys(d).filter((p) => p !== "__proto__") : [];
  }
  le.allSchemaProperties = g;
  function _(d, p) {
    return g(p).filter((S) => !(0, t.alwaysValidSchema)(d, p[S]));
  }
  le.schemaProperties = _;
  function y({ schemaCode: d, data: p, it: { gen: S, topSchemaRef: f, schemaPath: $, errorPath: k }, it: I }, M, V, j) {
    const Z = j ? (0, e._)`${d}, ${p}, ${f}${$}` : p, x = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, k)],
      [r.default.parentData, I.parentData],
      [r.default.parentDataProperty, I.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    I.opts.dynamicRef && x.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const H = (0, e._)`${Z}, ${S.object(...x)}`;
    return V !== e.nil ? (0, e._)`${M}.call(${V}, ${H})` : (0, e._)`${M}(${H})`;
  }
  le.callValidateCode = y;
  const v = (0, e._)`new RegExp`;
  function w({ gen: d, it: { opts: p } }, S) {
    const f = p.unicodeRegExp ? "u" : "", { regExp: $ } = p.code, k = $(S, f);
    return d.scopeValue("pattern", {
      key: k.toString(),
      ref: k,
      code: (0, e._)`${$.code === "new RegExp" ? v : (0, n.useFunc)(d, $)}(${S}, ${f})`
    });
  }
  le.usePattern = w;
  function h(d) {
    const { gen: p, data: S, keyword: f, it: $ } = d, k = p.name("valid");
    if ($.allErrors) {
      const M = p.let("valid", !0);
      return I(() => p.assign(M, !1)), M;
    }
    return p.var(k, !0), I(() => p.break()), k;
    function I(M) {
      const V = p.const("len", (0, e._)`${S}.length`);
      p.forRange("i", 0, V, (j) => {
        d.subschema({
          keyword: f,
          dataProp: j,
          dataPropType: t.Type.Num
        }, k), p.if((0, e.not)(k), M);
      });
    }
  }
  le.validateArray = h;
  function m(d) {
    const { gen: p, schema: S, keyword: f, it: $ } = d;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((V) => (0, t.alwaysValidSchema)($, V)) && !$.opts.unevaluated)
      return;
    const I = p.let("valid", !1), M = p.name("_valid");
    p.block(() => S.forEach((V, j) => {
      const Z = d.subschema({
        keyword: f,
        schemaProp: j,
        compositeRule: !0
      }, M);
      p.assign(I, (0, e._)`${I} || ${M}`), d.mergeValidEvaluated(Z, M) || p.if((0, e.not)(I));
    })), d.result(I, () => d.reset(), () => d.error(!0));
  }
  return le.validateUnion = m, le;
}
var Ls;
function jm() {
  if (Ls) return Qe;
  Ls = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.validateKeywordUsage = Qe.validSchemaType = Qe.funcKeywordCode = Qe.macroKeywordCode = void 0;
  const e = ee(), t = ft(), r = et(), n = bn();
  function o(_, y) {
    const { gen: v, keyword: w, schema: h, parentSchema: m, it: d } = _, p = y.macro.call(d.self, h, m, d), S = u(v, w, p);
    d.opts.validateSchema !== !1 && d.self.validateSchema(p, !0);
    const f = v.name("valid");
    _.subschema({
      schema: p,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${w}`,
      topSchemaRef: S,
      compositeRule: !0
    }, f), _.pass(f, () => _.error(!0));
  }
  Qe.macroKeywordCode = o;
  function s(_, y) {
    var v;
    const { gen: w, keyword: h, schema: m, parentSchema: d, $data: p, it: S } = _;
    c(S, y);
    const f = !p && y.compile ? y.compile.call(S.self, m, d, S) : y.validate, $ = u(w, h, f), k = w.let("valid");
    _.block$data(k, I), _.ok((v = y.valid) !== null && v !== void 0 ? v : k);
    function I() {
      if (y.errors === !1)
        j(), y.modifying && a(_), Z(() => _.error());
      else {
        const x = y.async ? M() : V();
        y.modifying && a(_), Z(() => i(_, x));
      }
    }
    function M() {
      const x = w.let("ruleErrs", null);
      return w.try(() => j((0, e._)`await `), (H) => w.assign(k, !1).if((0, e._)`${H} instanceof ${S.ValidationError}`, () => w.assign(x, (0, e._)`${H}.errors`), () => w.throw(H))), x;
    }
    function V() {
      const x = (0, e._)`${$}.errors`;
      return w.assign(x, null), j(e.nil), x;
    }
    function j(x = y.async ? (0, e._)`await ` : e.nil) {
      const H = S.opts.passContext ? t.default.this : t.default.self, oe = !("compile" in y && !p || y.schema === !1);
      w.assign(k, (0, e._)`${x}${(0, r.callValidateCode)(_, $, H, oe)}`, y.modifying);
    }
    function Z(x) {
      var H;
      w.if((0, e.not)((H = y.valid) !== null && H !== void 0 ? H : k), x);
    }
  }
  Qe.funcKeywordCode = s;
  function a(_) {
    const { gen: y, data: v, it: w } = _;
    y.if(w.parentData, () => y.assign(v, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function i(_, y) {
    const { gen: v } = _;
    v.if((0, e._)`Array.isArray(${y})`, () => {
      v.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)(_);
    }, () => _.error());
  }
  function c({ schemaEnv: _ }, y) {
    if (y.async && !_.$async)
      throw new Error("async keyword in sync schema");
  }
  function u(_, y, v) {
    if (v === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return _.scopeValue("keyword", typeof v == "function" ? { ref: v } : { ref: v, code: (0, e.stringify)(v) });
  }
  function l(_, y, v = !1) {
    return !y.length || y.some((w) => w === "array" ? Array.isArray(_) : w === "object" ? _ && typeof _ == "object" && !Array.isArray(_) : typeof _ == w || v && typeof _ > "u");
  }
  Qe.validSchemaType = l;
  function g({ schema: _, opts: y, self: v, errSchemaPath: w }, h, m) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(m) : h.keyword !== m)
      throw new Error("ajv implementation error");
    const d = h.dependencies;
    if (d != null && d.some((p) => !Object.prototype.hasOwnProperty.call(_, p)))
      throw new Error(`parent schema must have dependencies of ${m}: ${d.join(",")}`);
    if (h.validateSchema && !h.validateSchema(_[m])) {
      const S = `keyword "${m}" value is invalid at path "${w}": ` + v.errorsText(h.validateSchema.errors);
      if (y.validateSchema === "log")
        v.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Qe.validateKeywordUsage = g, Qe;
}
var nt = {}, Fs;
function qm() {
  if (Fs) return nt;
  Fs = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.extendSubschemaMode = nt.extendSubschemaData = nt.getSubschema = void 0;
  const e = ee(), t = se();
  function r(s, { keyword: a, schemaProp: i, schema: c, schemaPath: u, errSchemaPath: l, topSchemaRef: g }) {
    if (a !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const _ = s.schema[a];
      return i === void 0 ? {
        schema: _,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}`
      } : {
        schema: _[i],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (c !== void 0) {
      if (u === void 0 || l === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: u,
        topSchemaRef: g,
        errSchemaPath: l
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  nt.getSubschema = r;
  function n(s, a, { dataProp: i, dataPropType: c, data: u, dataTypes: l, propertyName: g }) {
    if (u !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: _ } = a;
    if (i !== void 0) {
      const { errorPath: v, dataPathArr: w, opts: h } = a, m = _.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      y(m), s.errorPath = (0, e.str)`${v}${(0, t.getErrorPath)(i, c, h.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [...w, s.parentDataProperty];
    }
    if (u !== void 0) {
      const v = u instanceof e.Name ? u : _.let("data", u, !0);
      y(v), g !== void 0 && (s.propertyName = g);
    }
    l && (s.dataTypes = l);
    function y(v) {
      s.data = v, s.dataLevel = a.dataLevel + 1, s.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), s.parentData = a.data, s.dataNames = [...a.dataNames, v];
    }
  }
  nt.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: u, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), u !== void 0 && (s.createErrors = u), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return nt.extendSubschemaMode = o, nt;
}
var Me = {}, Dn, xs;
function yc() {
  return xs || (xs = 1, Dn = function e(t, r) {
    if (t === r) return !0;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return !1;
      var n, o, s;
      if (Array.isArray(t)) {
        if (n = t.length, n != r.length) return !1;
        for (o = n; o-- !== 0; )
          if (!e(t[o], r[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (s = Object.keys(t), n = s.length, n !== Object.keys(r).length) return !1;
      for (o = n; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, s[o])) return !1;
      for (o = n; o-- !== 0; ) {
        var a = s[o];
        if (!e(t[a], r[a])) return !1;
      }
      return !0;
    }
    return t !== t && r !== r;
  }), Dn;
}
var Un = { exports: {} }, Hs;
function Mm() {
  if (Hs) return Un.exports;
  Hs = 1;
  var e = Un.exports = function(n, o, s) {
    typeof o == "function" && (s = o, o = {}), s = o.cb || s;
    var a = typeof s == "function" ? s : s.pre || function() {
    }, i = s.post || function() {
    };
    t(o, a, i, n, "", n);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function t(n, o, s, a, i, c, u, l, g, _) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      o(a, i, c, u, l, g, _);
      for (var y in a) {
        var v = a[y];
        if (Array.isArray(v)) {
          if (y in e.arrayKeywords)
            for (var w = 0; w < v.length; w++)
              t(n, o, s, v[w], i + "/" + y + "/" + w, c, i, y, a, w);
        } else if (y in e.propsKeywords) {
          if (v && typeof v == "object")
            for (var h in v)
              t(n, o, s, v[h], i + "/" + y + "/" + r(h), c, i, y, a, h);
        } else (y in e.keywords || n.allKeys && !(y in e.skipKeywords)) && t(n, o, s, v, i + "/" + y, c, i, y, a);
      }
      s(a, i, c, u, l, g, _);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Un.exports;
}
var Ks;
function Sn() {
  if (Ks) return Me;
  Ks = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.getSchemaRefs = Me.resolveUrl = Me.normalizeId = Me._getFullPath = Me.getFullPath = Me.inlineRef = void 0;
  const e = se(), t = yc(), r = Mm(), n = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function o(w, h = !0) {
    return typeof w == "boolean" ? !0 : h === !0 ? !a(w) : h ? i(w) <= h : !1;
  }
  Me.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(w) {
    for (const h in w) {
      if (s.has(h))
        return !0;
      const m = w[h];
      if (Array.isArray(m) && m.some(a) || typeof m == "object" && a(m))
        return !0;
    }
    return !1;
  }
  function i(w) {
    let h = 0;
    for (const m in w) {
      if (m === "$ref")
        return 1 / 0;
      if (h++, !n.has(m) && (typeof w[m] == "object" && (0, e.eachItem)(w[m], (d) => h += i(d)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function c(w, h = "", m) {
    m !== !1 && (h = g(h));
    const d = w.parse(h);
    return u(w, d);
  }
  Me.getFullPath = c;
  function u(w, h) {
    return w.serialize(h).split("#")[0] + "#";
  }
  Me._getFullPath = u;
  const l = /#\/?$/;
  function g(w) {
    return w ? w.replace(l, "") : "";
  }
  Me.normalizeId = g;
  function _(w, h, m) {
    return m = g(m), w.resolve(h, m);
  }
  Me.resolveUrl = _;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function v(w, h) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: m, uriResolver: d } = this.opts, p = g(w[m] || h), S = { "": p }, f = c(d, p, !1), $ = {}, k = /* @__PURE__ */ new Set();
    return r(w, { allKeys: !0 }, (V, j, Z, x) => {
      if (x === void 0)
        return;
      const H = f + j;
      let oe = S[x];
      typeof V[m] == "string" && (oe = Te.call(this, V[m])), Pe.call(this, V.$anchor), Pe.call(this, V.$dynamicAnchor), S[j] = oe;
      function Te(ie) {
        const Le = this.opts.uriResolver.resolve;
        if (ie = g(oe ? Le(oe, ie) : ie), k.has(ie))
          throw M(ie);
        k.add(ie);
        let D = this.refs[ie];
        return typeof D == "string" && (D = this.refs[D]), typeof D == "object" ? I(V, D.schema, ie) : ie !== g(H) && (ie[0] === "#" ? (I(V, $[ie], ie), $[ie] = V) : this.refs[ie] = H), ie;
      }
      function Pe(ie) {
        if (typeof ie == "string") {
          if (!y.test(ie))
            throw new Error(`invalid anchor "${ie}"`);
          Te.call(this, `#${ie}`);
        }
      }
    }), $;
    function I(V, j, Z) {
      if (j !== void 0 && !t(V, j))
        throw M(Z);
    }
    function M(V) {
      return new Error(`reference "${V}" resolves to more than one schema`);
    }
  }
  return Me.getSchemaRefs = v, Me;
}
var Js;
function kn() {
  if (Js) return tt;
  Js = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.getData = tt.KeywordCxt = tt.validateFunctionCode = void 0;
  const e = Nm(), t = on(), r = gc(), n = on(), o = zm(), s = jm(), a = qm(), i = ee(), c = ft(), u = Sn(), l = se(), g = bn();
  function _(R) {
    if (f(R) && (k(R), S(R))) {
      h(R);
      return;
    }
    y(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  tt.validateFunctionCode = _;
  function y({ gen: R, validateName: O, schema: A, schemaEnv: U, opts: G }, te) {
    G.code.es5 ? R.func(O, (0, i._)`${c.default.data}, ${c.default.valCxt}`, U.$async, () => {
      R.code((0, i._)`"use strict"; ${d(A, G)}`), w(R, G), R.code(te);
    }) : R.func(O, (0, i._)`${c.default.data}, ${v(G)}`, U.$async, () => R.code(d(A, G)).code(te));
  }
  function v(R) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${R.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function w(R, O) {
    R.if(c.default.valCxt, () => {
      R.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), R.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), R.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), R.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), O.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      R.var(c.default.instancePath, (0, i._)`""`), R.var(c.default.parentData, (0, i._)`undefined`), R.var(c.default.parentDataProperty, (0, i._)`undefined`), R.var(c.default.rootData, c.default.data), O.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function h(R) {
    const { schema: O, opts: A, gen: U } = R;
    y(R, () => {
      A.$comment && O.$comment && x(R), V(R), U.let(c.default.vErrors, null), U.let(c.default.errors, 0), A.unevaluated && m(R), I(R), H(R);
    });
  }
  function m(R) {
    const { gen: O, validateName: A } = R;
    R.evaluated = O.const("evaluated", (0, i._)`${A}.evaluated`), O.if((0, i._)`${R.evaluated}.dynamicProps`, () => O.assign((0, i._)`${R.evaluated}.props`, (0, i._)`undefined`)), O.if((0, i._)`${R.evaluated}.dynamicItems`, () => O.assign((0, i._)`${R.evaluated}.items`, (0, i._)`undefined`));
  }
  function d(R, O) {
    const A = typeof R == "object" && R[O.schemaId];
    return A && (O.code.source || O.code.process) ? (0, i._)`/*# sourceURL=${A} */` : i.nil;
  }
  function p(R, O) {
    if (f(R) && (k(R), S(R))) {
      $(R, O);
      return;
    }
    (0, e.boolOrEmptySchema)(R, O);
  }
  function S({ schema: R, self: O }) {
    if (typeof R == "boolean")
      return !R;
    for (const A in R)
      if (O.RULES.all[A])
        return !0;
    return !1;
  }
  function f(R) {
    return typeof R.schema != "boolean";
  }
  function $(R, O) {
    const { schema: A, gen: U, opts: G } = R;
    G.$comment && A.$comment && x(R), j(R), Z(R);
    const te = U.const("_errs", c.default.errors);
    I(R, te), U.var(O, (0, i._)`${te} === ${c.default.errors}`);
  }
  function k(R) {
    (0, l.checkUnknownRules)(R), M(R);
  }
  function I(R, O) {
    if (R.opts.jtd)
      return Te(R, [], !1, O);
    const A = (0, t.getSchemaTypes)(R.schema), U = (0, t.coerceAndCheckDataType)(R, A);
    Te(R, A, !U, O);
  }
  function M(R) {
    const { schema: O, errSchemaPath: A, opts: U, self: G } = R;
    O.$ref && U.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(O, G.RULES) && G.logger.warn(`$ref: keywords ignored in schema at path "${A}"`);
  }
  function V(R) {
    const { schema: O, opts: A } = R;
    O.default !== void 0 && A.useDefaults && A.strictSchema && (0, l.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function j(R) {
    const O = R.schema[R.opts.schemaId];
    O && (R.baseId = (0, u.resolveUrl)(R.opts.uriResolver, R.baseId, O));
  }
  function Z(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function x({ gen: R, schemaEnv: O, schema: A, errSchemaPath: U, opts: G }) {
    const te = A.$comment;
    if (G.$comment === !0)
      R.code((0, i._)`${c.default.self}.logger.log(${te})`);
    else if (typeof G.$comment == "function") {
      const Re = (0, i.str)`${U}/$comment`, Be = R.scopeValue("root", { ref: O.root });
      R.code((0, i._)`${c.default.self}.opts.$comment(${te}, ${Re}, ${Be}.schema)`);
    }
  }
  function H(R) {
    const { gen: O, schemaEnv: A, validateName: U, ValidationError: G, opts: te } = R;
    A.$async ? O.if((0, i._)`${c.default.errors} === 0`, () => O.return(c.default.data), () => O.throw((0, i._)`new ${G}(${c.default.vErrors})`)) : (O.assign((0, i._)`${U}.errors`, c.default.vErrors), te.unevaluated && oe(R), O.return((0, i._)`${c.default.errors} === 0`));
  }
  function oe({ gen: R, evaluated: O, props: A, items: U }) {
    A instanceof i.Name && R.assign((0, i._)`${O}.props`, A), U instanceof i.Name && R.assign((0, i._)`${O}.items`, U);
  }
  function Te(R, O, A, U) {
    const { gen: G, schema: te, data: Re, allErrors: Be, opts: De, self: Ue } = R, { RULES: Ce } = Ue;
    if (te.$ref && (De.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(te, Ce))) {
      G.block(() => K(R, "$ref", Ce.all.$ref.definition));
      return;
    }
    De.jtd || ie(R, O), G.block(() => {
      for (const Ke of Ce.rules)
        $t(Ke);
      $t(Ce.post);
    });
    function $t(Ke) {
      (0, r.shouldUseGroup)(te, Ke) && (Ke.type ? (G.if((0, n.checkDataType)(Ke.type, Re, De.strictNumbers)), Pe(R, Ke), O.length === 1 && O[0] === Ke.type && A && (G.else(), (0, n.reportTypeError)(R)), G.endIf()) : Pe(R, Ke), Be || G.if((0, i._)`${c.default.errors} === ${U || 0}`));
    }
  }
  function Pe(R, O) {
    const { gen: A, schema: U, opts: { useDefaults: G } } = R;
    G && (0, o.assignDefaults)(R, O.type), A.block(() => {
      for (const te of O.rules)
        (0, r.shouldUseRule)(U, te) && K(R, te.keyword, te.definition, O.type);
    });
  }
  function ie(R, O) {
    R.schemaEnv.meta || !R.opts.strictTypes || (Le(R, O), R.opts.allowUnionTypes || D(R, O), C(R, R.dataTypes));
  }
  function Le(R, O) {
    if (O.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = O;
        return;
      }
      O.forEach((A) => {
        P(R.dataTypes, A) || E(R, `type "${A}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), b(R, O);
    }
  }
  function D(R, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && E(R, "use allowUnionTypes to allow union type keyword");
  }
  function C(R, O) {
    const A = R.self.RULES.all;
    for (const U in A) {
      const G = A[U];
      if (typeof G == "object" && (0, r.shouldUseRule)(R.schema, G)) {
        const { type: te } = G.definition;
        te.length && !te.some((Re) => q(O, Re)) && E(R, `missing type "${te.join(",")}" for keyword "${U}"`);
      }
    }
  }
  function q(R, O) {
    return R.includes(O) || O === "number" && R.includes("integer");
  }
  function P(R, O) {
    return R.includes(O) || O === "integer" && R.includes("number");
  }
  function b(R, O) {
    const A = [];
    for (const U of R.dataTypes)
      P(O, U) ? A.push(U) : O.includes("integer") && U === "number" && A.push("integer");
    R.dataTypes = A;
  }
  function E(R, O) {
    const A = R.schemaEnv.baseId + R.errSchemaPath;
    O += ` at "${A}" (strictTypes)`, (0, l.checkStrictMode)(R, O, R.opts.strictTypes);
  }
  class N {
    constructor(O, A, U) {
      if ((0, s.validateKeywordUsage)(O, A, U), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = U, this.data = O.data, this.schema = O.schema[U], this.$data = A.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(O, this.schema, U, this.$data), this.schemaType = A.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = A, this.$data)
        this.schemaCode = O.gen.const("vSchema", ne(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, A.schemaType, A.allowUndefined))
        throw new Error(`${U} value must be ${JSON.stringify(A.schemaType)}`);
      ("code" in A ? A.trackErrors : A.errors !== !1) && (this.errsCount = O.gen.const("_errs", c.default.errors));
    }
    result(O, A, U) {
      this.failResult((0, i.not)(O), A, U);
    }
    failResult(O, A, U) {
      this.gen.if(O), U ? U() : this.error(), A ? (this.gen.else(), A(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, A) {
      this.failResult((0, i.not)(O), void 0, A);
    }
    fail(O) {
      if (O === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(O), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(O) {
      if (!this.$data)
        return this.fail(O);
      const { schemaCode: A } = this;
      this.fail((0, i._)`${A} !== undefined && (${(0, i.or)(this.invalid$data(), O)})`);
    }
    error(O, A, U) {
      if (A) {
        this.setParams(A), this._error(O, U), this.setParams({});
        return;
      }
      this._error(O, U);
    }
    _error(O, A) {
      (O ? g.reportExtraError : g.reportError)(this, this.def.error, A);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(O) {
      this.allErrors || this.gen.if(O);
    }
    setParams(O, A) {
      A ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, A, U = i.nil) {
      this.gen.block(() => {
        this.check$data(O, U), A();
      });
    }
    check$data(O = i.nil, A = i.nil) {
      if (!this.$data)
        return;
      const { gen: U, schemaCode: G, schemaType: te, def: Re } = this;
      U.if((0, i.or)((0, i._)`${G} === undefined`, A)), O !== i.nil && U.assign(O, !0), (te.length || Re.validateSchema) && (U.elseIf(this.invalid$data()), this.$dataError(), O !== i.nil && U.assign(O, !1)), U.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: A, schemaType: U, def: G, it: te } = this;
      return (0, i.or)(Re(), Be());
      function Re() {
        if (U.length) {
          if (!(A instanceof i.Name))
            throw new Error("ajv implementation error");
          const De = Array.isArray(U) ? U : [U];
          return (0, i._)`${(0, n.checkDataTypes)(De, A, te.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function Be() {
        if (G.validateSchema) {
          const De = O.scopeValue("validate$data", { ref: G.validateSchema });
          return (0, i._)`!${De}(${A})`;
        }
        return i.nil;
      }
    }
    subschema(O, A) {
      const U = (0, a.getSubschema)(this.it, O);
      (0, a.extendSubschemaData)(U, this.it, O), (0, a.extendSubschemaMode)(U, O);
      const G = { ...this.it, ...U, items: void 0, props: void 0 };
      return p(G, A), G;
    }
    mergeEvaluated(O, A) {
      const { it: U, gen: G } = this;
      U.opts.unevaluated && (U.props !== !0 && O.props !== void 0 && (U.props = l.mergeEvaluated.props(G, O.props, U.props, A)), U.items !== !0 && O.items !== void 0 && (U.items = l.mergeEvaluated.items(G, O.items, U.items, A)));
    }
    mergeValidEvaluated(O, A) {
      const { it: U, gen: G } = this;
      if (U.opts.unevaluated && (U.props !== !0 || U.items !== !0))
        return G.if(A, () => this.mergeEvaluated(O, i.Name)), !0;
    }
  }
  tt.KeywordCxt = N;
  function K(R, O, A, U) {
    const G = new N(R, A, O);
    "code" in A ? A.code(G, U) : G.$data && A.validate ? (0, s.funcKeywordCode)(G, A) : "macro" in A ? (0, s.macroKeywordCode)(G, A) : (A.compile || A.validate) && (0, s.funcKeywordCode)(G, A);
  }
  const B = /^\/(?:[^~]|~0|~1)*$/, ae = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ne(R, { dataLevel: O, dataNames: A, dataPathArr: U }) {
    let G, te;
    if (R === "")
      return c.default.rootData;
    if (R[0] === "/") {
      if (!B.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      G = R, te = c.default.rootData;
    } else {
      const Ue = ae.exec(R);
      if (!Ue)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const Ce = +Ue[1];
      if (G = Ue[2], G === "#") {
        if (Ce >= O)
          throw new Error(De("property/index", Ce));
        return U[O - Ce];
      }
      if (Ce > O)
        throw new Error(De("data", Ce));
      if (te = A[O - Ce], !G)
        return te;
    }
    let Re = te;
    const Be = G.split("/");
    for (const Ue of Be)
      Ue && (te = (0, i._)`${te}${(0, i.getProperty)((0, l.unescapeJsonPointer)(Ue))}`, Re = (0, i._)`${Re} && ${te}`);
    return Re;
    function De(Ue, Ce) {
      return `Cannot access ${Ue} ${Ce} levels up, current level is ${O}`;
    }
  }
  return tt.getData = ne, tt;
}
var dr = {}, Ws;
function Go() {
  if (Ws) return dr;
  Ws = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return dr.default = e, dr;
}
var fr = {}, Gs;
function En() {
  if (Gs) return fr;
  Gs = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  const e = Sn();
  class t extends Error {
    constructor(n, o, s, a) {
      super(a || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(n, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return fr.default = t, fr;
}
var Fe = {}, Bs;
function Bo() {
  if (Bs) return Fe;
  Bs = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.resolveSchema = Fe.getCompilingSchema = Fe.resolveRef = Fe.compileSchema = Fe.SchemaEnv = void 0;
  const e = ee(), t = Go(), r = ft(), n = Sn(), o = se(), s = kn();
  class a {
    constructor(m) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let p;
      typeof m.schema == "object" && (p = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (d = m.baseId) !== null && d !== void 0 ? d : (0, n.normalizeId)(p == null ? void 0 : p[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = p == null ? void 0 : p.$async, this.refs = {};
    }
  }
  Fe.SchemaEnv = a;
  function i(h) {
    const m = l.call(this, h);
    if (m)
      return m;
    const d = (0, n.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: p, lines: S } = this.opts.code, { ownProperties: f } = this.opts, $ = new e.CodeGen(this.scope, { es5: p, lines: S, ownProperties: f });
    let k;
    h.$async && (k = $.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const I = $.scopeName("validate");
    h.validateName = I;
    const M = {
      gen: $,
      allErrors: this.opts.allErrors,
      data: r.default.data,
      parentData: r.default.parentData,
      parentDataProperty: r.default.parentDataProperty,
      dataNames: [r.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: $.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: I,
      ValidationError: k,
      schema: h.schema,
      schemaEnv: h,
      rootId: d,
      baseId: h.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let V;
    try {
      this._compilations.add(h), (0, s.validateFunctionCode)(M), $.optimize(this.opts.code.optimize);
      const j = $.toString();
      V = `${$.scopeRefs(r.default.scope)}return ${j}`, this.opts.code.process && (V = this.opts.code.process(V, h));
      const x = new Function(`${r.default.self}`, `${r.default.scope}`, V)(this, this.scope.get());
      if (this.scope.value(I, { ref: x }), x.errors = null, x.schema = h.schema, x.schemaEnv = h, h.$async && (x.$async = !0), this.opts.code.source === !0 && (x.source = { validateName: I, validateCode: j, scopeValues: $._values }), this.opts.unevaluated) {
        const { props: H, items: oe } = M;
        x.evaluated = {
          props: H instanceof e.Name ? void 0 : H,
          items: oe instanceof e.Name ? void 0 : oe,
          dynamicProps: H instanceof e.Name,
          dynamicItems: oe instanceof e.Name
        }, x.source && (x.source.evaluated = (0, e.stringify)(x.evaluated));
      }
      return h.validate = x, h;
    } catch (j) {
      throw delete h.validate, delete h.validateName, V && this.logger.error("Error compiling schema, function code:", V), j;
    } finally {
      this._compilations.delete(h);
    }
  }
  Fe.compileSchema = i;
  function c(h, m, d) {
    var p;
    d = (0, n.resolveUrl)(this.opts.uriResolver, m, d);
    const S = h.refs[d];
    if (S)
      return S;
    let f = _.call(this, h, d);
    if (f === void 0) {
      const $ = (p = h.localRefs) === null || p === void 0 ? void 0 : p[d], { schemaId: k } = this.opts;
      $ && (f = new a({ schema: $, schemaId: k, root: h, baseId: m }));
    }
    if (f !== void 0)
      return h.refs[d] = u.call(this, f);
  }
  Fe.resolveRef = c;
  function u(h) {
    return (0, n.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : i.call(this, h);
  }
  function l(h) {
    for (const m of this._compilations)
      if (g(m, h))
        return m;
  }
  Fe.getCompilingSchema = l;
  function g(h, m) {
    return h.schema === m.schema && h.root === m.root && h.baseId === m.baseId;
  }
  function _(h, m) {
    let d;
    for (; typeof (d = this.refs[m]) == "string"; )
      m = d;
    return d || this.schemas[m] || y.call(this, h, m);
  }
  function y(h, m) {
    const d = this.opts.uriResolver.parse(m), p = (0, n._getFullPath)(this.opts.uriResolver, d);
    let S = (0, n.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && p === S)
      return w.call(this, d, h);
    const f = (0, n.normalizeId)(p), $ = this.refs[f] || this.schemas[f];
    if (typeof $ == "string") {
      const k = y.call(this, h, $);
      return typeof (k == null ? void 0 : k.schema) != "object" ? void 0 : w.call(this, d, k);
    }
    if (typeof ($ == null ? void 0 : $.schema) == "object") {
      if ($.validate || i.call(this, $), f === (0, n.normalizeId)(m)) {
        const { schema: k } = $, { schemaId: I } = this.opts, M = k[I];
        return M && (S = (0, n.resolveUrl)(this.opts.uriResolver, S, M)), new a({ schema: k, schemaId: I, root: h, baseId: S });
      }
      return w.call(this, d, $);
    }
  }
  Fe.resolveSchema = y;
  const v = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(h, { baseId: m, schema: d, root: p }) {
    var S;
    if (((S = h.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const k of h.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const I = d[(0, o.unescapeFragment)(k)];
      if (I === void 0)
        return;
      d = I;
      const M = typeof d == "object" && d[this.opts.schemaId];
      !v.has(k) && M && (m = (0, n.resolveUrl)(this.opts.uriResolver, m, M));
    }
    let f;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const k = (0, n.resolveUrl)(this.opts.uriResolver, m, d.$ref);
      f = y.call(this, p, k);
    }
    const { schemaId: $ } = this.opts;
    if (f = f || new a({ schema: d, schemaId: $, root: p, baseId: m }), f.schema !== f.root.schema)
      return f;
  }
  return Fe;
}
const Am = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Dm = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Um = "object", Vm = ["$data"], Zm = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Lm = !1, Fm = {
  $id: Am,
  description: Dm,
  type: Um,
  required: Vm,
  properties: Zm,
  additionalProperties: Lm
};
var hr = {}, Lt = { exports: {} }, Vn, Qs;
function vc() {
  if (Qs) return Vn;
  Qs = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function r(_) {
    let y = "", v = 0, w = 0;
    for (w = 0; w < _.length; w++)
      if (v = _[w].charCodeAt(0), v !== 48) {
        if (!(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
          return "";
        y += _[w];
        break;
      }
    for (w += 1; w < _.length; w++) {
      if (v = _[w].charCodeAt(0), !(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
        return "";
      y += _[w];
    }
    return y;
  }
  const n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(_) {
    return _.length = 0, !0;
  }
  function s(_, y, v) {
    if (_.length) {
      const w = r(_);
      if (w !== "")
        y.push(w);
      else
        return v.error = !0, !1;
      _.length = 0;
    }
    return !0;
  }
  function a(_) {
    let y = 0;
    const v = { error: !1, address: "", zone: "" }, w = [], h = [];
    let m = !1, d = !1, p = s;
    for (let S = 0; S < _.length; S++) {
      const f = _[S];
      if (!(f === "[" || f === "]"))
        if (f === ":") {
          if (m === !0 && (d = !0), !p(h, w, v))
            break;
          if (++y > 7) {
            v.error = !0;
            break;
          }
          S > 0 && _[S - 1] === ":" && (m = !0), w.push(":");
          continue;
        } else if (f === "%") {
          if (!p(h, w, v))
            break;
          p = o;
        } else {
          h.push(f);
          continue;
        }
    }
    return h.length && (p === o ? v.zone = h.join("") : d ? w.push(h.join("")) : w.push(r(h))), v.address = w.join(""), v;
  }
  function i(_) {
    if (c(_, ":") < 2)
      return { host: _, isIPV6: !1 };
    const y = a(_);
    if (y.error)
      return { host: _, isIPV6: !1 };
    {
      let v = y.address, w = y.address;
      return y.zone && (v += "%" + y.zone, w += "%25" + y.zone), { host: v, isIPV6: !0, escapedHost: w };
    }
  }
  function c(_, y) {
    let v = 0;
    for (let w = 0; w < _.length; w++)
      _[w] === y && v++;
    return v;
  }
  function u(_) {
    let y = _;
    const v = [];
    let w = -1, h = 0;
    for (; h = y.length; ) {
      if (h === 1) {
        if (y === ".")
          break;
        if (y === "/") {
          v.push("/");
          break;
        } else {
          v.push(y);
          break;
        }
      } else if (h === 2) {
        if (y[0] === ".") {
          if (y[1] === ".")
            break;
          if (y[1] === "/") {
            y = y.slice(2);
            continue;
          }
        } else if (y[0] === "/" && (y[1] === "." || y[1] === "/")) {
          v.push("/");
          break;
        }
      } else if (h === 3 && y === "/..") {
        v.length !== 0 && v.pop(), v.push("/");
        break;
      }
      if (y[0] === ".") {
        if (y[1] === ".") {
          if (y[2] === "/") {
            y = y.slice(3);
            continue;
          }
        } else if (y[1] === "/") {
          y = y.slice(2);
          continue;
        }
      } else if (y[0] === "/" && y[1] === ".") {
        if (y[2] === "/") {
          y = y.slice(2);
          continue;
        } else if (y[2] === "." && y[3] === "/") {
          y = y.slice(3), v.length !== 0 && v.pop();
          continue;
        }
      }
      if ((w = y.indexOf("/", 1)) === -1) {
        v.push(y);
        break;
      } else
        v.push(y.slice(0, w)), y = y.slice(w);
    }
    return v.join("");
  }
  function l(_, y) {
    const v = y !== !0 ? escape : unescape;
    return _.scheme !== void 0 && (_.scheme = v(_.scheme)), _.userinfo !== void 0 && (_.userinfo = v(_.userinfo)), _.host !== void 0 && (_.host = v(_.host)), _.path !== void 0 && (_.path = v(_.path)), _.query !== void 0 && (_.query = v(_.query)), _.fragment !== void 0 && (_.fragment = v(_.fragment)), _;
  }
  function g(_) {
    const y = [];
    if (_.userinfo !== void 0 && (y.push(_.userinfo), y.push("@")), _.host !== void 0) {
      let v = unescape(_.host);
      if (!t(v)) {
        const w = i(v);
        w.isIPV6 === !0 ? v = `[${w.escapedHost}]` : v = _.host;
      }
      y.push(v);
    }
    return (typeof _.port == "number" || typeof _.port == "string") && (y.push(":"), y.push(String(_.port))), y.length ? y.join("") : void 0;
  }
  return Vn = {
    nonSimpleDomain: n,
    recomposeAuthority: g,
    normalizeComponentEncoding: l,
    removeDotSegments: u,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: i,
    stringArrayToHexStripped: r
  }, Vn;
}
var Zn, Ys;
function xm() {
  if (Ys) return Zn;
  Ys = 1;
  const { isUUID: e } = vc(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
    /** @type {const} */
    [
      "http",
      "https",
      "ws",
      "wss",
      "urn",
      "urn:uuid"
    ]
  );
  function n(f) {
    return r.indexOf(
      /** @type {*} */
      f
    ) !== -1;
  }
  function o(f) {
    return f.secure === !0 ? !0 : f.secure === !1 ? !1 : f.scheme ? f.scheme.length === 3 && (f.scheme[0] === "w" || f.scheme[0] === "W") && (f.scheme[1] === "s" || f.scheme[1] === "S") && (f.scheme[2] === "s" || f.scheme[2] === "S") : !1;
  }
  function s(f) {
    return f.host || (f.error = f.error || "HTTP URIs must have a host."), f;
  }
  function a(f) {
    const $ = String(f.scheme).toLowerCase() === "https";
    return (f.port === ($ ? 443 : 80) || f.port === "") && (f.port = void 0), f.path || (f.path = "/"), f;
  }
  function i(f) {
    return f.secure = o(f), f.resourceName = (f.path || "/") + (f.query ? "?" + f.query : ""), f.path = void 0, f.query = void 0, f;
  }
  function c(f) {
    if ((f.port === (o(f) ? 443 : 80) || f.port === "") && (f.port = void 0), typeof f.secure == "boolean" && (f.scheme = f.secure ? "wss" : "ws", f.secure = void 0), f.resourceName) {
      const [$, k] = f.resourceName.split("?");
      f.path = $ && $ !== "/" ? $ : void 0, f.query = k, f.resourceName = void 0;
    }
    return f.fragment = void 0, f;
  }
  function u(f, $) {
    if (!f.path)
      return f.error = "URN can not be parsed", f;
    const k = f.path.match(t);
    if (k) {
      const I = $.scheme || f.scheme || "urn";
      f.nid = k[1].toLowerCase(), f.nss = k[2];
      const M = `${I}:${$.nid || f.nid}`, V = S(M);
      f.path = void 0, V && (f = V.parse(f, $));
    } else
      f.error = f.error || "URN can not be parsed.";
    return f;
  }
  function l(f, $) {
    if (f.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const k = $.scheme || f.scheme || "urn", I = f.nid.toLowerCase(), M = `${k}:${$.nid || I}`, V = S(M);
    V && (f = V.serialize(f, $));
    const j = f, Z = f.nss;
    return j.path = `${I || $.nid}:${Z}`, $.skipEscape = !0, j;
  }
  function g(f, $) {
    const k = f;
    return k.uuid = k.nss, k.nss = void 0, !$.tolerant && (!k.uuid || !e(k.uuid)) && (k.error = k.error || "UUID is not valid."), k;
  }
  function _(f) {
    const $ = f;
    return $.nss = (f.uuid || "").toLowerCase(), $;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: s,
      serialize: a
    }
  ), v = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: s,
      serialize: a
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: i,
      serialize: c
    }
  ), h = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), p = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: v,
      ws: w,
      wss: h,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: u,
          serialize: l,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: g,
          serialize: _,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(p, null);
  function S(f) {
    return f && (p[
      /** @type {SchemeName} */
      f
    ] || p[
      /** @type {SchemeName} */
      f.toLowerCase()
    ]) || void 0;
  }
  return Zn = {
    wsIsSecure: o,
    SCHEMES: p,
    isValidSchemeName: n,
    getSchemeHandler: S
  }, Zn;
}
var Xs;
function Hm() {
  if (Xs) return Lt.exports;
  Xs = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizeComponentEncoding: n, isIPv4: o, nonSimpleDomain: s } = vc(), { SCHEMES: a, getSchemeHandler: i } = xm();
  function c(h, m) {
    return typeof h == "string" ? h = /** @type {T} */
    _(v(h, m), m) : typeof h == "object" && (h = /** @type {T} */
    v(_(h, m), m)), h;
  }
  function u(h, m, d) {
    const p = d ? Object.assign({ scheme: "null" }, d) : { scheme: "null" }, S = l(v(h, p), v(m, p), p, !0);
    return p.skipEscape = !0, _(S, p);
  }
  function l(h, m, d, p) {
    const S = {};
    return p || (h = v(_(h, d), d), m = v(_(m, d), d)), d = d || {}, !d.tolerant && m.scheme ? (S.scheme = m.scheme, S.userinfo = m.userinfo, S.host = m.host, S.port = m.port, S.path = t(m.path || ""), S.query = m.query) : (m.userinfo !== void 0 || m.host !== void 0 || m.port !== void 0 ? (S.userinfo = m.userinfo, S.host = m.host, S.port = m.port, S.path = t(m.path || ""), S.query = m.query) : (m.path ? (m.path[0] === "/" ? S.path = t(m.path) : ((h.userinfo !== void 0 || h.host !== void 0 || h.port !== void 0) && !h.path ? S.path = "/" + m.path : h.path ? S.path = h.path.slice(0, h.path.lastIndexOf("/") + 1) + m.path : S.path = m.path, S.path = t(S.path)), S.query = m.query) : (S.path = h.path, m.query !== void 0 ? S.query = m.query : S.query = h.query), S.userinfo = h.userinfo, S.host = h.host, S.port = h.port), S.scheme = h.scheme), S.fragment = m.fragment, S;
  }
  function g(h, m, d) {
    return typeof h == "string" ? (h = unescape(h), h = _(n(v(h, d), !0), { ...d, skipEscape: !0 })) : typeof h == "object" && (h = _(n(h, !0), { ...d, skipEscape: !0 })), typeof m == "string" ? (m = unescape(m), m = _(n(v(m, d), !0), { ...d, skipEscape: !0 })) : typeof m == "object" && (m = _(n(m, !0), { ...d, skipEscape: !0 })), h.toLowerCase() === m.toLowerCase();
  }
  function _(h, m) {
    const d = {
      host: h.host,
      scheme: h.scheme,
      userinfo: h.userinfo,
      port: h.port,
      path: h.path,
      query: h.query,
      nid: h.nid,
      nss: h.nss,
      uuid: h.uuid,
      fragment: h.fragment,
      reference: h.reference,
      resourceName: h.resourceName,
      secure: h.secure,
      error: ""
    }, p = Object.assign({}, m), S = [], f = i(p.scheme || d.scheme);
    f && f.serialize && f.serialize(d, p), d.path !== void 0 && (p.skipEscape ? d.path = unescape(d.path) : (d.path = escape(d.path), d.scheme !== void 0 && (d.path = d.path.split("%3A").join(":")))), p.reference !== "suffix" && d.scheme && S.push(d.scheme, ":");
    const $ = r(d);
    if ($ !== void 0 && (p.reference !== "suffix" && S.push("//"), S.push($), d.path && d.path[0] !== "/" && S.push("/")), d.path !== void 0) {
      let k = d.path;
      !p.absolutePath && (!f || !f.absolutePath) && (k = t(k)), $ === void 0 && k[0] === "/" && k[1] === "/" && (k = "/%2F" + k.slice(2)), S.push(k);
    }
    return d.query !== void 0 && S.push("?", d.query), d.fragment !== void 0 && S.push("#", d.fragment), S.join("");
  }
  const y = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function v(h, m) {
    const d = Object.assign({}, m), p = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let S = !1;
    d.reference === "suffix" && (d.scheme ? h = d.scheme + ":" + h : h = "//" + h);
    const f = h.match(y);
    if (f) {
      if (p.scheme = f[1], p.userinfo = f[3], p.host = f[4], p.port = parseInt(f[5], 10), p.path = f[6] || "", p.query = f[7], p.fragment = f[8], isNaN(p.port) && (p.port = f[5]), p.host)
        if (o(p.host) === !1) {
          const I = e(p.host);
          p.host = I.host.toLowerCase(), S = I.isIPV6;
        } else
          S = !0;
      p.scheme === void 0 && p.userinfo === void 0 && p.host === void 0 && p.port === void 0 && p.query === void 0 && !p.path ? p.reference = "same-document" : p.scheme === void 0 ? p.reference = "relative" : p.fragment === void 0 ? p.reference = "absolute" : p.reference = "uri", d.reference && d.reference !== "suffix" && d.reference !== p.reference && (p.error = p.error || "URI is not a " + d.reference + " reference.");
      const $ = i(d.scheme || p.scheme);
      if (!d.unicodeSupport && (!$ || !$.unicodeSupport) && p.host && (d.domainHost || $ && $.domainHost) && S === !1 && s(p.host))
        try {
          p.host = URL.domainToASCII(p.host.toLowerCase());
        } catch (k) {
          p.error = p.error || "Host's domain name can not be converted to ASCII: " + k;
        }
      (!$ || $ && !$.skipNormalize) && (h.indexOf("%") !== -1 && (p.scheme !== void 0 && (p.scheme = unescape(p.scheme)), p.host !== void 0 && (p.host = unescape(p.host))), p.path && (p.path = escape(unescape(p.path))), p.fragment && (p.fragment = encodeURI(decodeURIComponent(p.fragment)))), $ && $.parse && $.parse(p, d);
    } else
      p.error = p.error || "URI can not be parsed.";
    return p;
  }
  const w = {
    SCHEMES: a,
    normalize: c,
    resolve: u,
    resolveComponent: l,
    equal: g,
    serialize: _,
    parse: v
  };
  return Lt.exports = w, Lt.exports.default = w, Lt.exports.fastUri = w, Lt.exports;
}
var ea;
function Km() {
  if (ea) return hr;
  ea = 1, Object.defineProperty(hr, "__esModule", { value: !0 });
  const e = Hm();
  return e.code = 'require("ajv/dist/runtime/uri").default', hr.default = e, hr;
}
var ta;
function Jm() {
  return ta || (ta = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = kn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = ee();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return r.CodeGen;
    } });
    const n = Go(), o = En(), s = _c(), a = Bo(), i = ee(), c = Sn(), u = on(), l = se(), g = Fm, _ = Km(), y = (D, C) => new RegExp(D, C);
    y.code = "new RegExp";
    const v = ["removeAdditional", "useDefaults", "coerceTypes"], w = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), h = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, m = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, d = 200;
    function p(D) {
      var C, q, P, b, E, N, K, B, ae, ne, R, O, A, U, G, te, Re, Be, De, Ue, Ce, $t, Ke, Pn, Rn;
      const Vt = D.strict, Cn = (C = D.code) === null || C === void 0 ? void 0 : C.optimize, rs = Cn === !0 || Cn === void 0 ? 1 : Cn || 0, ns = (P = (q = D.code) === null || q === void 0 ? void 0 : q.regExp) !== null && P !== void 0 ? P : y, qc = (b = D.uriResolver) !== null && b !== void 0 ? b : _.default;
      return {
        strictSchema: (N = (E = D.strictSchema) !== null && E !== void 0 ? E : Vt) !== null && N !== void 0 ? N : !0,
        strictNumbers: (B = (K = D.strictNumbers) !== null && K !== void 0 ? K : Vt) !== null && B !== void 0 ? B : !0,
        strictTypes: (ne = (ae = D.strictTypes) !== null && ae !== void 0 ? ae : Vt) !== null && ne !== void 0 ? ne : "log",
        strictTuples: (O = (R = D.strictTuples) !== null && R !== void 0 ? R : Vt) !== null && O !== void 0 ? O : "log",
        strictRequired: (U = (A = D.strictRequired) !== null && A !== void 0 ? A : Vt) !== null && U !== void 0 ? U : !1,
        code: D.code ? { ...D.code, optimize: rs, regExp: ns } : { optimize: rs, regExp: ns },
        loopRequired: (G = D.loopRequired) !== null && G !== void 0 ? G : d,
        loopEnum: (te = D.loopEnum) !== null && te !== void 0 ? te : d,
        meta: (Re = D.meta) !== null && Re !== void 0 ? Re : !0,
        messages: (Be = D.messages) !== null && Be !== void 0 ? Be : !0,
        inlineRefs: (De = D.inlineRefs) !== null && De !== void 0 ? De : !0,
        schemaId: (Ue = D.schemaId) !== null && Ue !== void 0 ? Ue : "$id",
        addUsedSchema: (Ce = D.addUsedSchema) !== null && Ce !== void 0 ? Ce : !0,
        validateSchema: ($t = D.validateSchema) !== null && $t !== void 0 ? $t : !0,
        validateFormats: (Ke = D.validateFormats) !== null && Ke !== void 0 ? Ke : !0,
        unicodeRegExp: (Pn = D.unicodeRegExp) !== null && Pn !== void 0 ? Pn : !0,
        int32range: (Rn = D.int32range) !== null && Rn !== void 0 ? Rn : !0,
        uriResolver: qc
      };
    }
    class S {
      constructor(C = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), C = this.opts = { ...C, ...p(C) };
        const { es5: q, lines: P } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: w, es5: q, lines: P }), this.logger = Z(C.logger);
        const b = C.validateFormats;
        C.validateFormats = !1, this.RULES = (0, s.getRules)(), f.call(this, h, C, "NOT SUPPORTED"), f.call(this, m, C, "DEPRECATED", "warn"), this._metaOpts = V.call(this), C.formats && I.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), C.keywords && M.call(this, C.keywords), typeof C.meta == "object" && this.addMetaSchema(C.meta), k.call(this), C.validateFormats = b;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: C, meta: q, schemaId: P } = this.opts;
        let b = g;
        P === "id" && (b = { ...g }, b.id = b.$id, delete b.$id), q && C && this.addMetaSchema(b, b[P], !1);
      }
      defaultMeta() {
        const { meta: C, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof C == "object" ? C[q] || C : void 0;
      }
      validate(C, q) {
        let P;
        if (typeof C == "string") {
          if (P = this.getSchema(C), !P)
            throw new Error(`no schema with key or ref "${C}"`);
        } else
          P = this.compile(C);
        const b = P(q);
        return "$async" in P || (this.errors = P.errors), b;
      }
      compile(C, q) {
        const P = this._addSchema(C, q);
        return P.validate || this._compileSchemaEnv(P);
      }
      compileAsync(C, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: P } = this.opts;
        return b.call(this, C, q);
        async function b(ne, R) {
          await E.call(this, ne.$schema);
          const O = this._addSchema(ne, R);
          return O.validate || N.call(this, O);
        }
        async function E(ne) {
          ne && !this.getSchema(ne) && await b.call(this, { $ref: ne }, !0);
        }
        async function N(ne) {
          try {
            return this._compileSchemaEnv(ne);
          } catch (R) {
            if (!(R instanceof o.default))
              throw R;
            return K.call(this, R), await B.call(this, R.missingSchema), N.call(this, ne);
          }
        }
        function K({ missingSchema: ne, missingRef: R }) {
          if (this.refs[ne])
            throw new Error(`AnySchema ${ne} is loaded but ${R} cannot be resolved`);
        }
        async function B(ne) {
          const R = await ae.call(this, ne);
          this.refs[ne] || await E.call(this, R.$schema), this.refs[ne] || this.addSchema(R, ne, q);
        }
        async function ae(ne) {
          const R = this._loading[ne];
          if (R)
            return R;
          try {
            return await (this._loading[ne] = P(ne));
          } finally {
            delete this._loading[ne];
          }
        }
      }
      // Adds schema to the instance
      addSchema(C, q, P, b = this.opts.validateSchema) {
        if (Array.isArray(C)) {
          for (const N of C)
            this.addSchema(N, void 0, P, b);
          return this;
        }
        let E;
        if (typeof C == "object") {
          const { schemaId: N } = this.opts;
          if (E = C[N], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${N} must be string`);
        }
        return q = (0, c.normalizeId)(q || E), this._checkUnique(q), this.schemas[q] = this._addSchema(C, P, q, b, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(C, q, P = this.opts.validateSchema) {
        return this.addSchema(C, q, !0, P), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(C, q) {
        if (typeof C == "boolean")
          return !0;
        let P;
        if (P = C.$schema, P !== void 0 && typeof P != "string")
          throw new Error("$schema must be a string");
        if (P = P || this.opts.defaultMeta || this.defaultMeta(), !P)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const b = this.validate(P, C);
        if (!b && q) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return b;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(C) {
        let q;
        for (; typeof (q = $.call(this, C)) == "string"; )
          C = q;
        if (q === void 0) {
          const { schemaId: P } = this.opts, b = new a.SchemaEnv({ schema: {}, schemaId: P });
          if (q = a.resolveSchema.call(this, b, C), !q)
            return;
          this.refs[C] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(C) {
        if (C instanceof RegExp)
          return this._removeAllSchemas(this.schemas, C), this._removeAllSchemas(this.refs, C), this;
        switch (typeof C) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const q = $.call(this, C);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[C], delete this.refs[C], this;
          }
          case "object": {
            const q = C;
            this._cache.delete(q);
            let P = C[this.opts.schemaId];
            return P && (P = (0, c.normalizeId)(P), delete this.schemas[P], delete this.refs[P]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(C) {
        for (const q of C)
          this.addKeyword(q);
        return this;
      }
      addKeyword(C, q) {
        let P;
        if (typeof C == "string")
          P = C, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = P);
        else if (typeof C == "object" && q === void 0) {
          if (q = C, P = q.keyword, Array.isArray(P) && !P.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (H.call(this, P, q), !q)
          return (0, l.eachItem)(P, (E) => oe.call(this, E)), this;
        Pe.call(this, q);
        const b = {
          ...q,
          type: (0, u.getJSONTypes)(q.type),
          schemaType: (0, u.getJSONTypes)(q.schemaType)
        };
        return (0, l.eachItem)(P, b.type.length === 0 ? (E) => oe.call(this, E, b) : (E) => b.type.forEach((N) => oe.call(this, E, b, N))), this;
      }
      getKeyword(C) {
        const q = this.RULES.all[C];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(C) {
        const { RULES: q } = this;
        delete q.keywords[C], delete q.all[C];
        for (const P of q.rules) {
          const b = P.rules.findIndex((E) => E.keyword === C);
          b >= 0 && P.rules.splice(b, 1);
        }
        return this;
      }
      // Add format
      addFormat(C, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[C] = q, this;
      }
      errorsText(C = this.errors, { separator: q = ", ", dataVar: P = "data" } = {}) {
        return !C || C.length === 0 ? "No errors" : C.map((b) => `${P}${b.instancePath} ${b.message}`).reduce((b, E) => b + q + E);
      }
      $dataMetaSchema(C, q) {
        const P = this.RULES.all;
        C = JSON.parse(JSON.stringify(C));
        for (const b of q) {
          const E = b.split("/").slice(1);
          let N = C;
          for (const K of E)
            N = N[K];
          for (const K in P) {
            const B = P[K];
            if (typeof B != "object")
              continue;
            const { $data: ae } = B.definition, ne = N[K];
            ae && ne && (N[K] = Le(ne));
          }
        }
        return C;
      }
      _removeAllSchemas(C, q) {
        for (const P in C) {
          const b = C[P];
          (!q || q.test(P)) && (typeof b == "string" ? delete C[P] : b && !b.meta && (this._cache.delete(b.schema), delete C[P]));
        }
      }
      _addSchema(C, q, P, b = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let N;
        const { schemaId: K } = this.opts;
        if (typeof C == "object")
          N = C[K];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof C != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let B = this._cache.get(C);
        if (B !== void 0)
          return B;
        P = (0, c.normalizeId)(N || P);
        const ae = c.getSchemaRefs.call(this, C, P);
        return B = new a.SchemaEnv({ schema: C, schemaId: K, meta: q, baseId: P, localRefs: ae }), this._cache.set(B.schema, B), E && !P.startsWith("#") && (P && this._checkUnique(P), this.refs[P] = B), b && this.validateSchema(C, !0), B;
      }
      _checkUnique(C) {
        if (this.schemas[C] || this.refs[C])
          throw new Error(`schema with key or id "${C}" already exists`);
      }
      _compileSchemaEnv(C) {
        if (C.meta ? this._compileMetaSchema(C) : a.compileSchema.call(this, C), !C.validate)
          throw new Error("ajv implementation error");
        return C.validate;
      }
      _compileMetaSchema(C) {
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, C);
        } finally {
          this.opts = q;
        }
      }
    }
    S.ValidationError = n.default, S.MissingRefError = o.default, e.default = S;
    function f(D, C, q, P = "error") {
      for (const b in D) {
        const E = b;
        E in C && this.logger[P](`${q}: option ${b}. ${D[E]}`);
      }
    }
    function $(D) {
      return D = (0, c.normalizeId)(D), this.schemas[D] || this.refs[D];
    }
    function k() {
      const D = this.opts.schemas;
      if (D)
        if (Array.isArray(D))
          this.addSchema(D);
        else
          for (const C in D)
            this.addSchema(D[C], C);
    }
    function I() {
      for (const D in this.opts.formats) {
        const C = this.opts.formats[D];
        C && this.addFormat(D, C);
      }
    }
    function M(D) {
      if (Array.isArray(D)) {
        this.addVocabulary(D);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const C in D) {
        const q = D[C];
        q.keyword || (q.keyword = C), this.addKeyword(q);
      }
    }
    function V() {
      const D = { ...this.opts };
      for (const C of v)
        delete D[C];
      return D;
    }
    const j = { log() {
    }, warn() {
    }, error() {
    } };
    function Z(D) {
      if (D === !1)
        return j;
      if (D === void 0)
        return console;
      if (D.log && D.warn && D.error)
        return D;
      throw new Error("logger must implement log, warn and error methods");
    }
    const x = /^[a-z_$][a-z0-9_$:-]*$/i;
    function H(D, C) {
      const { RULES: q } = this;
      if ((0, l.eachItem)(D, (P) => {
        if (q.keywords[P])
          throw new Error(`Keyword ${P} is already defined`);
        if (!x.test(P))
          throw new Error(`Keyword ${P} has invalid name`);
      }), !!C && C.$data && !("code" in C || "validate" in C))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function oe(D, C, q) {
      var P;
      const b = C == null ? void 0 : C.post;
      if (q && b)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let N = b ? E.post : E.rules.find(({ type: B }) => B === q);
      if (N || (N = { type: q, rules: [] }, E.rules.push(N)), E.keywords[D] = !0, !C)
        return;
      const K = {
        keyword: D,
        definition: {
          ...C,
          type: (0, u.getJSONTypes)(C.type),
          schemaType: (0, u.getJSONTypes)(C.schemaType)
        }
      };
      C.before ? Te.call(this, N, K, C.before) : N.rules.push(K), E.all[D] = K, (P = C.implements) === null || P === void 0 || P.forEach((B) => this.addKeyword(B));
    }
    function Te(D, C, q) {
      const P = D.rules.findIndex((b) => b.keyword === q);
      P >= 0 ? D.rules.splice(P, 0, C) : (D.rules.push(C), this.logger.warn(`rule ${q} is not defined`));
    }
    function Pe(D) {
      let { metaSchema: C } = D;
      C !== void 0 && (D.$data && this.opts.$data && (C = Le(C)), D.validateSchema = this.compile(C, !0));
    }
    const ie = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Le(D) {
      return { anyOf: [D, ie] };
    }
  }(zn)), zn;
}
var pr = {}, mr = {}, _r = {}, ra;
function Wm() {
  if (ra) return _r;
  ra = 1, Object.defineProperty(_r, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return _r.default = e, _r;
}
var st = {}, na;
function Gm() {
  if (na) return st;
  na = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.callRef = st.getValidate = void 0;
  const e = En(), t = et(), r = ee(), n = ft(), o = Bo(), s = se(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(u) {
      const { gen: l, schema: g, it: _ } = u, { baseId: y, schemaEnv: v, validateName: w, opts: h, self: m } = _, { root: d } = v;
      if ((g === "#" || g === "#/") && y === d.baseId)
        return S();
      const p = o.resolveRef.call(m, d, y, g);
      if (p === void 0)
        throw new e.default(_.opts.uriResolver, y, g);
      if (p instanceof o.SchemaEnv)
        return f(p);
      return $(p);
      function S() {
        if (v === d)
          return c(u, w, v, v.$async);
        const k = l.scopeValue("root", { ref: d });
        return c(u, (0, r._)`${k}.validate`, d, d.$async);
      }
      function f(k) {
        const I = i(u, k);
        c(u, I, k, k.$async);
      }
      function $(k) {
        const I = l.scopeValue("schema", h.code.source === !0 ? { ref: k, code: (0, r.stringify)(k) } : { ref: k }), M = l.name("valid"), V = u.subschema({
          schema: k,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: I,
          errSchemaPath: g
        }, M);
        u.mergeEvaluated(V), u.ok(M);
      }
    }
  };
  function i(u, l) {
    const { gen: g } = u;
    return l.validate ? g.scopeValue("validate", { ref: l.validate }) : (0, r._)`${g.scopeValue("wrapper", { ref: l })}.validate`;
  }
  st.getValidate = i;
  function c(u, l, g, _) {
    const { gen: y, it: v } = u, { allErrors: w, schemaEnv: h, opts: m } = v, d = m.passContext ? n.default.this : r.nil;
    _ ? p() : S();
    function p() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const k = y.let("valid");
      y.try(() => {
        y.code((0, r._)`await ${(0, t.callValidateCode)(u, l, d)}`), $(l), w || y.assign(k, !0);
      }, (I) => {
        y.if((0, r._)`!(${I} instanceof ${v.ValidationError})`, () => y.throw(I)), f(I), w || y.assign(k, !1);
      }), u.ok(k);
    }
    function S() {
      u.result((0, t.callValidateCode)(u, l, d), () => $(l), () => f(l));
    }
    function f(k) {
      const I = (0, r._)`${k}.errors`;
      y.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${I} : ${n.default.vErrors}.concat(${I})`), y.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function $(k) {
      var I;
      if (!v.opts.unevaluated)
        return;
      const M = (I = g == null ? void 0 : g.validate) === null || I === void 0 ? void 0 : I.evaluated;
      if (v.props !== !0)
        if (M && !M.dynamicProps)
          M.props !== void 0 && (v.props = s.mergeEvaluated.props(y, M.props, v.props));
        else {
          const V = y.var("props", (0, r._)`${k}.evaluated.props`);
          v.props = s.mergeEvaluated.props(y, V, v.props, r.Name);
        }
      if (v.items !== !0)
        if (M && !M.dynamicItems)
          M.items !== void 0 && (v.items = s.mergeEvaluated.items(y, M.items, v.items));
        else {
          const V = y.var("items", (0, r._)`${k}.evaluated.items`);
          v.items = s.mergeEvaluated.items(y, V, v.items, r.Name);
        }
    }
  }
  return st.callRef = c, st.default = a, st;
}
var oa;
function Bm() {
  if (oa) return mr;
  oa = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  const e = Wm(), t = Gm(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return mr.default = r, mr;
}
var gr = {}, yr = {}, sa;
function Qm() {
  if (sa) return yr;
  sa = 1, Object.defineProperty(yr, "__esModule", { value: !0 });
  const e = ee(), t = e.operators, r = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, n = {
    message: ({ keyword: s, schemaCode: a }) => (0, e.str)`must be ${r[s].okStr} ${a}`,
    params: ({ keyword: s, schemaCode: a }) => (0, e._)`{comparison: ${r[s].okStr}, limit: ${a}}`
  }, o = {
    keyword: Object.keys(r),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: n,
    code(s) {
      const { keyword: a, data: i, schemaCode: c } = s;
      s.fail$data((0, e._)`${i} ${r[a].fail} ${c} || isNaN(${i})`);
    }
  };
  return yr.default = o, yr;
}
var vr = {}, aa;
function Ym() {
  if (aa) return vr;
  aa = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const e = ee(), r = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must be multiple of ${n}`,
      params: ({ schemaCode: n }) => (0, e._)`{multipleOf: ${n}}`
    },
    code(n) {
      const { gen: o, data: s, schemaCode: a, it: i } = n, c = i.opts.multipleOfPrecision, u = o.let("res"), l = c ? (0, e._)`Math.abs(Math.round(${u}) - ${u}) > 1e-${c}` : (0, e._)`${u} !== parseInt(${u})`;
      n.fail$data((0, e._)`(${a} === 0 || (${u} = ${s}/${a}, ${l}))`);
    }
  };
  return vr.default = r, vr;
}
var wr = {}, $r = {}, ia;
function Xm() {
  if (ia) return $r;
  ia = 1, Object.defineProperty($r, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let n = 0, o = 0, s;
    for (; o < r; )
      n++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < r && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return n;
  }
  return $r.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', $r;
}
var ca;
function e_() {
  if (ca) return wr;
  ca = 1, Object.defineProperty(wr, "__esModule", { value: !0 });
  const e = ee(), t = se(), r = Xm(), o = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: s, schemaCode: a }) {
        const i = s === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${a} characters`;
      },
      params: ({ schemaCode: s }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { keyword: a, data: i, schemaCode: c, it: u } = s, l = a === "maxLength" ? e.operators.GT : e.operators.LT, g = u.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, r.default)}(${i})`;
      s.fail$data((0, e._)`${g} ${l} ${c}`);
    }
  };
  return wr.default = o, wr;
}
var br = {}, ua;
function t_() {
  if (ua) return br;
  ua = 1, Object.defineProperty(br, "__esModule", { value: !0 });
  const e = et(), t = ee(), n = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, t.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, t._)`{pattern: ${o}}`
    },
    code(o) {
      const { data: s, $data: a, schema: i, schemaCode: c, it: u } = o, l = u.opts.unicodeRegExp ? "u" : "", g = a ? (0, t._)`(new RegExp(${c}, ${l}))` : (0, e.usePattern)(o, i);
      o.fail$data((0, t._)`!${g}.test(${s})`);
    }
  };
  return br.default = n, br;
}
var Sr = {}, la;
function r_() {
  if (la) return Sr;
  la = 1, Object.defineProperty(Sr, "__esModule", { value: !0 });
  const e = ee(), r = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: o }) {
        const s = n === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} properties`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: o, data: s, schemaCode: a } = n, i = o === "maxProperties" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`Object.keys(${s}).length ${i} ${a}`);
    }
  };
  return Sr.default = r, Sr;
}
var kr = {}, da;
function n_() {
  if (da) return kr;
  da = 1, Object.defineProperty(kr, "__esModule", { value: !0 });
  const e = et(), t = ee(), r = se(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: a, schema: i, schemaCode: c, data: u, $data: l, it: g } = s, { opts: _ } = g;
      if (!l && i.length === 0)
        return;
      const y = i.length >= _.loopRequired;
      if (g.allErrors ? v() : w(), _.strictRequired) {
        const d = s.parentSchema.properties, { definedProperties: p } = s.it;
        for (const S of i)
          if ((d == null ? void 0 : d[S]) === void 0 && !p.has(S)) {
            const f = g.schemaEnv.baseId + g.errSchemaPath, $ = `required property "${S}" is not defined at "${f}" (strictRequired)`;
            (0, r.checkStrictMode)(g, $, g.opts.strictRequired);
          }
      }
      function v() {
        if (y || l)
          s.block$data(t.nil, h);
        else
          for (const d of i)
            (0, e.checkReportMissingProp)(s, d);
      }
      function w() {
        const d = a.let("missing");
        if (y || l) {
          const p = a.let("valid", !0);
          s.block$data(p, () => m(d, p)), s.ok(p);
        } else
          a.if((0, e.checkMissingProp)(s, i, d)), (0, e.reportMissingProp)(s, d), a.else();
      }
      function h() {
        a.forOf("prop", c, (d) => {
          s.setParams({ missingProperty: d }), a.if((0, e.noPropertyInData)(a, u, d, _.ownProperties), () => s.error());
        });
      }
      function m(d, p) {
        s.setParams({ missingProperty: d }), a.forOf(d, c, () => {
          a.assign(p, (0, e.propertyInData)(a, u, d, _.ownProperties)), a.if((0, t.not)(p), () => {
            s.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return kr.default = o, kr;
}
var Er = {}, fa;
function o_() {
  if (fa) return Er;
  fa = 1, Object.defineProperty(Er, "__esModule", { value: !0 });
  const e = ee(), r = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: o }) {
        const s = n === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} items`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: o, data: s, schemaCode: a } = n, i = o === "maxItems" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`${s}.length ${i} ${a}`);
    }
  };
  return Er.default = r, Er;
}
var Tr = {}, Pr = {}, ha;
function Qo() {
  if (ha) return Pr;
  ha = 1, Object.defineProperty(Pr, "__esModule", { value: !0 });
  const e = yc();
  return e.code = 'require("ajv/dist/runtime/equal").default', Pr.default = e, Pr;
}
var pa;
function s_() {
  if (pa) return Tr;
  pa = 1, Object.defineProperty(Tr, "__esModule", { value: !0 });
  const e = on(), t = ee(), r = se(), n = Qo(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${a} are identical)`,
      params: ({ params: { i: a, j: i } }) => (0, t._)`{i: ${a}, j: ${i}}`
    },
    code(a) {
      const { gen: i, data: c, $data: u, schema: l, parentSchema: g, schemaCode: _, it: y } = a;
      if (!u && !l)
        return;
      const v = i.let("valid"), w = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      a.block$data(v, h, (0, t._)`${_} === false`), a.ok(v);
      function h() {
        const S = i.let("i", (0, t._)`${c}.length`), f = i.let("j");
        a.setParams({ i: S, j: f }), i.assign(v, !0), i.if((0, t._)`${S} > 1`, () => (m() ? d : p)(S, f));
      }
      function m() {
        return w.length > 0 && !w.some((S) => S === "object" || S === "array");
      }
      function d(S, f) {
        const $ = i.name("item"), k = (0, e.checkDataTypes)(w, $, y.opts.strictNumbers, e.DataType.Wrong), I = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${S}--;`, () => {
          i.let($, (0, t._)`${c}[${S}]`), i.if(k, (0, t._)`continue`), w.length > 1 && i.if((0, t._)`typeof ${$} == "string"`, (0, t._)`${$} += "_"`), i.if((0, t._)`typeof ${I}[${$}] == "number"`, () => {
            i.assign(f, (0, t._)`${I}[${$}]`), a.error(), i.assign(v, !1).break();
          }).code((0, t._)`${I}[${$}] = ${S}`);
        });
      }
      function p(S, f) {
        const $ = (0, r.useFunc)(i, n.default), k = i.name("outer");
        i.label(k).for((0, t._)`;${S}--;`, () => i.for((0, t._)`${f} = ${S}; ${f}--;`, () => i.if((0, t._)`${$}(${c}[${S}], ${c}[${f}])`, () => {
          a.error(), i.assign(v, !1).break(k);
        })));
      }
    }
  };
  return Tr.default = s, Tr;
}
var Rr = {}, ma;
function a_() {
  if (ma) return Rr;
  ma = 1, Object.defineProperty(Rr, "__esModule", { value: !0 });
  const e = ee(), t = se(), r = Qo(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schemaCode: u, schema: l } = s;
      c || l && typeof l == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(a, r.default)}(${i}, ${u})`) : s.fail((0, e._)`${l} !== ${i}`);
    }
  };
  return Rr.default = o, Rr;
}
var Cr = {}, _a;
function i_() {
  if (_a) return Cr;
  _a = 1, Object.defineProperty(Cr, "__esModule", { value: !0 });
  const e = ee(), t = se(), r = Qo(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: u, schemaCode: l, it: g } = s;
      if (!c && u.length === 0)
        throw new Error("enum must have non-empty array");
      const _ = u.length >= g.opts.loopEnum;
      let y;
      const v = () => y ?? (y = (0, t.useFunc)(a, r.default));
      let w;
      if (_ || c)
        w = a.let("valid"), s.block$data(w, h);
      else {
        if (!Array.isArray(u))
          throw new Error("ajv implementation error");
        const d = a.const("vSchema", l);
        w = (0, e.or)(...u.map((p, S) => m(d, S)));
      }
      s.pass(w);
      function h() {
        a.assign(w, !1), a.forOf("v", l, (d) => a.if((0, e._)`${v()}(${i}, ${d})`, () => a.assign(w, !0).break()));
      }
      function m(d, p) {
        const S = u[p];
        return typeof S == "object" && S !== null ? (0, e._)`${v()}(${i}, ${d}[${p}])` : (0, e._)`${i} === ${S}`;
      }
    }
  };
  return Cr.default = o, Cr;
}
var ga;
function c_() {
  if (ga) return gr;
  ga = 1, Object.defineProperty(gr, "__esModule", { value: !0 });
  const e = Qm(), t = Ym(), r = e_(), n = t_(), o = r_(), s = n_(), a = o_(), i = s_(), c = a_(), u = i_(), l = [
    // number
    e.default,
    t.default,
    // string
    r.default,
    n.default,
    // object
    o.default,
    s.default,
    // array
    a.default,
    i.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    u.default
  ];
  return gr.default = l, gr;
}
var Ir = {}, bt = {}, ya;
function wc() {
  if (ya) return bt;
  ya = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.validateAdditionalItems = void 0;
  const e = ee(), t = se(), n = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { parentSchema: a, it: i } = s, { items: c } = a;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(i, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(s, c);
    }
  };
  function o(s, a) {
    const { gen: i, schema: c, data: u, keyword: l, it: g } = s;
    g.items = !0;
    const _ = i.const("len", (0, e._)`${u}.length`);
    if (c === !1)
      s.setParams({ len: a.length }), s.pass((0, e._)`${_} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const v = i.var("valid", (0, e._)`${_} <= ${a.length}`);
      i.if((0, e.not)(v), () => y(v)), s.ok(v);
    }
    function y(v) {
      i.forRange("i", a.length, _, (w) => {
        s.subschema({ keyword: l, dataProp: w, dataPropType: t.Type.Num }, v), g.allErrors || i.if((0, e.not)(v), () => i.break());
      });
    }
  }
  return bt.validateAdditionalItems = o, bt.default = n, bt;
}
var Or = {}, St = {}, va;
function $c() {
  if (va) return St;
  va = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.validateTuple = void 0;
  const e = ee(), t = se(), r = et(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(s) {
      const { schema: a, it: i } = s;
      if (Array.isArray(a))
        return o(s, "additionalItems", a);
      i.items = !0, !(0, t.alwaysValidSchema)(i, a) && s.ok((0, r.validateArray)(s));
    }
  };
  function o(s, a, i = s.schema) {
    const { gen: c, parentSchema: u, data: l, keyword: g, it: _ } = s;
    w(u), _.opts.unevaluated && i.length && _.items !== !0 && (_.items = t.mergeEvaluated.items(c, i.length, _.items));
    const y = c.name("valid"), v = c.const("len", (0, e._)`${l}.length`);
    i.forEach((h, m) => {
      (0, t.alwaysValidSchema)(_, h) || (c.if((0, e._)`${v} > ${m}`, () => s.subschema({
        keyword: g,
        schemaProp: m,
        dataProp: m
      }, y)), s.ok(y));
    });
    function w(h) {
      const { opts: m, errSchemaPath: d } = _, p = i.length, S = p === h.minItems && (p === h.maxItems || h[a] === !1);
      if (m.strictTuples && !S) {
        const f = `"${g}" is ${p}-tuple, but minItems or maxItems/${a} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(_, f, m.strictTuples);
      }
    }
  }
  return St.validateTuple = o, St.default = n, St;
}
var wa;
function u_() {
  if (wa) return Or;
  wa = 1, Object.defineProperty(Or, "__esModule", { value: !0 });
  const e = $c(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return Or.default = t, Or;
}
var Nr = {}, $a;
function l_() {
  if ($a) return Nr;
  $a = 1, Object.defineProperty(Nr, "__esModule", { value: !0 });
  const e = ee(), t = se(), r = et(), n = wc(), s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: i, parentSchema: c, it: u } = a, { prefixItems: l } = c;
      u.items = !0, !(0, t.alwaysValidSchema)(u, i) && (l ? (0, n.validateAdditionalItems)(a, l) : a.ok((0, r.validateArray)(a)));
    }
  };
  return Nr.default = s, Nr;
}
var zr = {}, ba;
function d_() {
  if (ba) return zr;
  ba = 1, Object.defineProperty(zr, "__esModule", { value: !0 });
  const e = ee(), t = se(), n = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e.str)`must contain at least ${o} valid item(s)` : (0, e.str)`must contain at least ${o} and no more than ${s} valid item(s)`,
      params: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e._)`{minContains: ${o}}` : (0, e._)`{minContains: ${o}, maxContains: ${s}}`
    },
    code(o) {
      const { gen: s, schema: a, parentSchema: i, data: c, it: u } = o;
      let l, g;
      const { minContains: _, maxContains: y } = i;
      u.opts.next ? (l = _ === void 0 ? 1 : _, g = y) : l = 1;
      const v = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: l, max: g }), g === void 0 && l === 0) {
        (0, t.checkStrictMode)(u, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && l > g) {
        (0, t.checkStrictMode)(u, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(u, a)) {
        let p = (0, e._)`${v} >= ${l}`;
        g !== void 0 && (p = (0, e._)`${p} && ${v} <= ${g}`), o.pass(p);
        return;
      }
      u.items = !0;
      const w = s.name("valid");
      g === void 0 && l === 1 ? m(w, () => s.if(w, () => s.break())) : l === 0 ? (s.let(w, !0), g !== void 0 && s.if((0, e._)`${c}.length > 0`, h)) : (s.let(w, !1), h()), o.result(w, () => o.reset());
      function h() {
        const p = s.name("_valid"), S = s.let("count", 0);
        m(p, () => s.if(p, () => d(S)));
      }
      function m(p, S) {
        s.forRange("i", 0, v, (f) => {
          o.subschema({
            keyword: "contains",
            dataProp: f,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, p), S();
        });
      }
      function d(p) {
        s.code((0, e._)`${p}++`), g === void 0 ? s.if((0, e._)`${p} >= ${l}`, () => s.assign(w, !0).break()) : (s.if((0, e._)`${p} > ${g}`, () => s.assign(w, !1).break()), l === 1 ? s.assign(w, !0) : s.if((0, e._)`${p} >= ${l}`, () => s.assign(w, !0)));
      }
    }
  };
  return zr.default = n, zr;
}
var Ln = {}, Sa;
function f_() {
  return Sa || (Sa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = ee(), r = se(), n = et();
    e.error = {
      message: ({ params: { property: c, depsCount: u, deps: l } }) => {
        const g = u === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${l} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: u, deps: l, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
    depsCount: ${u},
    deps: ${l}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [u, l] = s(c);
        a(c, u), i(c, l);
      }
    };
    function s({ schema: c }) {
      const u = {}, l = {};
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const _ = Array.isArray(c[g]) ? u : l;
        _[g] = c[g];
      }
      return [u, l];
    }
    function a(c, u = c.schema) {
      const { gen: l, data: g, it: _ } = c;
      if (Object.keys(u).length === 0)
        return;
      const y = l.let("missing");
      for (const v in u) {
        const w = u[v];
        if (w.length === 0)
          continue;
        const h = (0, n.propertyInData)(l, g, v, _.opts.ownProperties);
        c.setParams({
          property: v,
          depsCount: w.length,
          deps: w.join(", ")
        }), _.allErrors ? l.if(h, () => {
          for (const m of w)
            (0, n.checkReportMissingProp)(c, m);
        }) : (l.if((0, t._)`${h} && (${(0, n.checkMissingProp)(c, w, y)})`), (0, n.reportMissingProp)(c, y), l.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, u = c.schema) {
      const { gen: l, data: g, keyword: _, it: y } = c, v = l.name("valid");
      for (const w in u)
        (0, r.alwaysValidSchema)(y, u[w]) || (l.if(
          (0, n.propertyInData)(l, g, w, y.opts.ownProperties),
          () => {
            const h = c.subschema({ keyword: _, schemaProp: w }, v);
            c.mergeValidEvaluated(h, v);
          },
          () => l.var(v, !0)
          // TODO var
        ), c.ok(v));
    }
    e.validateSchemaDeps = i, e.default = o;
  }(Ln)), Ln;
}
var jr = {}, ka;
function h_() {
  if (ka) return jr;
  ka = 1, Object.defineProperty(jr, "__esModule", { value: !0 });
  const e = ee(), t = se(), n = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: s, schema: a, data: i, it: c } = o;
      if ((0, t.alwaysValidSchema)(c, a))
        return;
      const u = s.name("valid");
      s.forIn("key", i, (l) => {
        o.setParams({ propertyName: l }), o.subschema({
          keyword: "propertyNames",
          data: l,
          dataTypes: ["string"],
          propertyName: l,
          compositeRule: !0
        }, u), s.if((0, e.not)(u), () => {
          o.error(!0), c.allErrors || s.break();
        });
      }), o.ok(u);
    }
  };
  return jr.default = n, jr;
}
var qr = {}, Ea;
function bc() {
  if (Ea) return qr;
  Ea = 1, Object.defineProperty(qr, "__esModule", { value: !0 });
  const e = et(), t = ee(), r = ft(), n = se(), s = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: a }) => (0, t._)`{additionalProperty: ${a.additionalProperty}}`
    },
    code(a) {
      const { gen: i, schema: c, parentSchema: u, data: l, errsCount: g, it: _ } = a;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: v } = _;
      if (_.props = !0, v.removeAdditional !== "all" && (0, n.alwaysValidSchema)(_, c))
        return;
      const w = (0, e.allSchemaProperties)(u.properties), h = (0, e.allSchemaProperties)(u.patternProperties);
      m(), a.ok((0, t._)`${g} === ${r.default.errors}`);
      function m() {
        i.forIn("key", l, ($) => {
          !w.length && !h.length ? S($) : i.if(d($), () => S($));
        });
      }
      function d($) {
        let k;
        if (w.length > 8) {
          const I = (0, n.schemaRefOrVal)(_, u.properties, "properties");
          k = (0, e.isOwnProperty)(i, I, $);
        } else w.length ? k = (0, t.or)(...w.map((I) => (0, t._)`${$} === ${I}`)) : k = t.nil;
        return h.length && (k = (0, t.or)(k, ...h.map((I) => (0, t._)`${(0, e.usePattern)(a, I)}.test(${$})`))), (0, t.not)(k);
      }
      function p($) {
        i.code((0, t._)`delete ${l}[${$}]`);
      }
      function S($) {
        if (v.removeAdditional === "all" || v.removeAdditional && c === !1) {
          p($);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: $ }), a.error(), y || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)(_, c)) {
          const k = i.name("valid");
          v.removeAdditional === "failing" ? (f($, k, !1), i.if((0, t.not)(k), () => {
            a.reset(), p($);
          })) : (f($, k), y || i.if((0, t.not)(k), () => i.break()));
        }
      }
      function f($, k, I) {
        const M = {
          keyword: "additionalProperties",
          dataProp: $,
          dataPropType: n.Type.Str
        };
        I === !1 && Object.assign(M, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(M, k);
      }
    }
  };
  return qr.default = s, qr;
}
var Mr = {}, Ta;
function p_() {
  if (Ta) return Mr;
  Ta = 1, Object.defineProperty(Mr, "__esModule", { value: !0 });
  const e = kn(), t = et(), r = se(), n = bc(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, parentSchema: c, data: u, it: l } = s;
      l.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(l, n.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(i);
      for (const h of g)
        l.definedProperties.add(h);
      l.opts.unevaluated && g.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(g), l.props));
      const _ = g.filter((h) => !(0, r.alwaysValidSchema)(l, i[h]));
      if (_.length === 0)
        return;
      const y = a.name("valid");
      for (const h of _)
        v(h) ? w(h) : (a.if((0, t.propertyInData)(a, u, h, l.opts.ownProperties)), w(h), l.allErrors || a.else().var(y, !0), a.endIf()), s.it.definedProperties.add(h), s.ok(y);
      function v(h) {
        return l.opts.useDefaults && !l.compositeRule && i[h].default !== void 0;
      }
      function w(h) {
        s.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, y);
      }
    }
  };
  return Mr.default = o, Mr;
}
var Ar = {}, Pa;
function m_() {
  if (Pa) return Ar;
  Pa = 1, Object.defineProperty(Ar, "__esModule", { value: !0 });
  const e = et(), t = ee(), r = se(), n = se(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: u, it: l } = s, { opts: g } = l, _ = (0, e.allSchemaProperties)(i), y = _.filter((S) => (0, r.alwaysValidSchema)(l, i[S]));
      if (_.length === 0 || y.length === _.length && (!l.opts.unevaluated || l.props === !0))
        return;
      const v = g.strictSchema && !g.allowMatchingProperties && u.properties, w = a.name("valid");
      l.props !== !0 && !(l.props instanceof t.Name) && (l.props = (0, n.evaluatedPropsToName)(a, l.props));
      const { props: h } = l;
      m();
      function m() {
        for (const S of _)
          v && d(S), l.allErrors ? p(S) : (a.var(w, !0), p(S), a.if(w));
      }
      function d(S) {
        for (const f in v)
          new RegExp(S).test(f) && (0, r.checkStrictMode)(l, `property ${f} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function p(S) {
        a.forIn("key", c, (f) => {
          a.if((0, t._)`${(0, e.usePattern)(s, S)}.test(${f})`, () => {
            const $ = y.includes(S);
            $ || s.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: f,
              dataPropType: n.Type.Str
            }, w), l.opts.unevaluated && h !== !0 ? a.assign((0, t._)`${h}[${f}]`, !0) : !$ && !l.allErrors && a.if((0, t.not)(w), () => a.break());
          });
        });
      }
    }
  };
  return Ar.default = o, Ar;
}
var Dr = {}, Ra;
function __() {
  if (Ra) return Dr;
  Ra = 1, Object.defineProperty(Dr, "__esModule", { value: !0 });
  const e = se(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(r) {
      const { gen: n, schema: o, it: s } = r;
      if ((0, e.alwaysValidSchema)(s, o)) {
        r.fail();
        return;
      }
      const a = n.name("valid");
      r.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a), r.failResult(a, () => r.reset(), () => r.error());
    },
    error: { message: "must NOT be valid" }
  };
  return Dr.default = t, Dr;
}
var Ur = {}, Ca;
function g_() {
  if (Ca) return Ur;
  Ca = 1, Object.defineProperty(Ur, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: et().validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Ur.default = t, Ur;
}
var Vr = {}, Ia;
function y_() {
  if (Ia) return Vr;
  Ia = 1, Object.defineProperty(Vr, "__esModule", { value: !0 });
  const e = ee(), t = se(), n = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: s, schema: a, parentSchema: i, it: c } = o;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && i.discriminator)
        return;
      const u = a, l = s.let("valid", !1), g = s.let("passing", null), _ = s.name("_valid");
      o.setParams({ passing: g }), s.block(y), o.result(l, () => o.reset(), () => o.error(!0));
      function y() {
        u.forEach((v, w) => {
          let h;
          (0, t.alwaysValidSchema)(c, v) ? s.var(_, !0) : h = o.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, _), w > 0 && s.if((0, e._)`${_} && ${l}`).assign(l, !1).assign(g, (0, e._)`[${g}, ${w}]`).else(), s.if(_, () => {
            s.assign(l, !0), s.assign(g, w), h && o.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return Vr.default = n, Vr;
}
var Zr = {}, Oa;
function v_() {
  if (Oa) return Zr;
  Oa = 1, Object.defineProperty(Zr, "__esModule", { value: !0 });
  const e = se(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(r) {
      const { gen: n, schema: o, it: s } = r;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const a = n.name("valid");
      o.forEach((i, c) => {
        if ((0, e.alwaysValidSchema)(s, i))
          return;
        const u = r.subschema({ keyword: "allOf", schemaProp: c }, a);
        r.ok(a), r.mergeEvaluated(u);
      });
    }
  };
  return Zr.default = t, Zr;
}
var Lr = {}, Na;
function w_() {
  if (Na) return Lr;
  Na = 1, Object.defineProperty(Lr, "__esModule", { value: !0 });
  const e = ee(), t = se(), n = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: s }) => (0, e.str)`must match "${s.ifClause}" schema`,
      params: ({ params: s }) => (0, e._)`{failingKeyword: ${s.ifClause}}`
    },
    code(s) {
      const { gen: a, parentSchema: i, it: c } = s;
      i.then === void 0 && i.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const u = o(c, "then"), l = o(c, "else");
      if (!u && !l)
        return;
      const g = a.let("valid", !0), _ = a.name("_valid");
      if (y(), s.reset(), u && l) {
        const w = a.let("ifClause");
        s.setParams({ ifClause: w }), a.if(_, v("then", w), v("else", w));
      } else u ? a.if(_, v("then")) : a.if((0, e.not)(_), v("else"));
      s.pass(g, () => s.error(!0));
      function y() {
        const w = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, _);
        s.mergeEvaluated(w);
      }
      function v(w, h) {
        return () => {
          const m = s.subschema({ keyword: w }, _);
          a.assign(g, _), s.mergeValidEvaluated(m, g), h ? a.assign(h, (0, e._)`${w}`) : s.setParams({ ifClause: w });
        };
      }
    }
  };
  function o(s, a) {
    const i = s.schema[a];
    return i !== void 0 && !(0, t.alwaysValidSchema)(s, i);
  }
  return Lr.default = n, Lr;
}
var Fr = {}, za;
function $_() {
  if (za) return Fr;
  za = 1, Object.defineProperty(Fr, "__esModule", { value: !0 });
  const e = se(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: n, it: o }) {
      n.if === void 0 && (0, e.checkStrictMode)(o, `"${r}" without "if" is ignored`);
    }
  };
  return Fr.default = t, Fr;
}
var ja;
function b_() {
  if (ja) return Ir;
  ja = 1, Object.defineProperty(Ir, "__esModule", { value: !0 });
  const e = wc(), t = u_(), r = $c(), n = l_(), o = d_(), s = f_(), a = h_(), i = bc(), c = p_(), u = m_(), l = __(), g = g_(), _ = y_(), y = v_(), v = w_(), w = $_();
  function h(m = !1) {
    const d = [
      // any
      l.default,
      g.default,
      _.default,
      y.default,
      v.default,
      w.default,
      // object
      a.default,
      i.default,
      s.default,
      c.default,
      u.default
    ];
    return m ? d.push(t.default, n.default) : d.push(e.default, r.default), d.push(o.default), d;
  }
  return Ir.default = h, Ir;
}
var xr = {}, Hr = {}, qa;
function S_() {
  if (qa) return Hr;
  qa = 1, Object.defineProperty(Hr, "__esModule", { value: !0 });
  const e = ee(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, o) {
      const { gen: s, data: a, $data: i, schema: c, schemaCode: u, it: l } = n, { opts: g, errSchemaPath: _, schemaEnv: y, self: v } = l;
      if (!g.validateFormats)
        return;
      i ? w() : h();
      function w() {
        const m = s.scopeValue("formats", {
          ref: v.formats,
          code: g.code.formats
        }), d = s.const("fDef", (0, e._)`${m}[${u}]`), p = s.let("fType"), S = s.let("format");
        s.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => s.assign(p, (0, e._)`${d}.type || "string"`).assign(S, (0, e._)`${d}.validate`), () => s.assign(p, (0, e._)`"string"`).assign(S, d)), n.fail$data((0, e.or)(f(), $()));
        function f() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${u} && !${S}`;
        }
        function $() {
          const k = y.$async ? (0, e._)`(${d}.async ? await ${S}(${a}) : ${S}(${a}))` : (0, e._)`${S}(${a})`, I = (0, e._)`(typeof ${S} == "function" ? ${k} : ${S}.test(${a}))`;
          return (0, e._)`${S} && ${S} !== true && ${p} === ${o} && !${I}`;
        }
      }
      function h() {
        const m = v.formats[c];
        if (!m) {
          f();
          return;
        }
        if (m === !0)
          return;
        const [d, p, S] = $(m);
        d === o && n.pass(k());
        function f() {
          if (g.strictSchema === !1) {
            v.logger.warn(I());
            return;
          }
          throw new Error(I());
          function I() {
            return `unknown format "${c}" ignored in schema at path "${_}"`;
          }
        }
        function $(I) {
          const M = I instanceof RegExp ? (0, e.regexpCode)(I) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, V = s.scopeValue("formats", { key: c, ref: I, code: M });
          return typeof I == "object" && !(I instanceof RegExp) ? [I.type || "string", I.validate, (0, e._)`${V}.validate`] : ["string", I, V];
        }
        function k() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${a})`;
          }
          return typeof p == "function" ? (0, e._)`${S}(${a})` : (0, e._)`${S}.test(${a})`;
        }
      }
    }
  };
  return Hr.default = r, Hr;
}
var Ma;
function k_() {
  if (Ma) return xr;
  Ma = 1, Object.defineProperty(xr, "__esModule", { value: !0 });
  const t = [S_().default];
  return xr.default = t, xr;
}
var _t = {}, Aa;
function E_() {
  return Aa || (Aa = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.contentVocabulary = _t.metadataVocabulary = void 0, _t.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], _t.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), _t;
}
var Da;
function T_() {
  if (Da) return pr;
  Da = 1, Object.defineProperty(pr, "__esModule", { value: !0 });
  const e = Bm(), t = c_(), r = b_(), n = k_(), o = E_(), s = [
    e.default,
    t.default,
    (0, r.default)(),
    n.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return pr.default = s, pr;
}
var Kr = {}, Ft = {}, Ua;
function P_() {
  if (Ua) return Ft;
  Ua = 1, Object.defineProperty(Ft, "__esModule", { value: !0 }), Ft.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (Ft.DiscrError = e = {})), Ft;
}
var Va;
function R_() {
  if (Va) return Kr;
  Va = 1, Object.defineProperty(Kr, "__esModule", { value: !0 });
  const e = ee(), t = P_(), r = Bo(), n = En(), o = se(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: u } }) => (0, e._)`{error: ${i}, tag: ${u}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: u, schema: l, parentSchema: g, it: _ } = i, { oneOf: y } = g;
      if (!_.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const v = l.propertyName;
      if (typeof v != "string")
        throw new Error("discriminator: requires propertyName");
      if (l.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), h = c.const("tag", (0, e._)`${u}${(0, e.getProperty)(v)}`);
      c.if((0, e._)`typeof ${h} == "string"`, () => m(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: v })), i.ok(w);
      function m() {
        const S = p();
        c.if(!1);
        for (const f in S)
          c.elseIf((0, e._)`${h} === ${f}`), c.assign(w, d(S[f]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: v }), c.endIf();
      }
      function d(S) {
        const f = c.name("valid"), $ = i.subschema({ keyword: "oneOf", schemaProp: S }, f);
        return i.mergeEvaluated($, e.Name), f;
      }
      function p() {
        var S;
        const f = {}, $ = I(g);
        let k = !0;
        for (let j = 0; j < y.length; j++) {
          let Z = y[j];
          if (Z != null && Z.$ref && !(0, o.schemaHasRulesButRef)(Z, _.self.RULES)) {
            const H = Z.$ref;
            if (Z = r.resolveRef.call(_.self, _.schemaEnv.root, _.baseId, H), Z instanceof r.SchemaEnv && (Z = Z.schema), Z === void 0)
              throw new n.default(_.opts.uriResolver, _.baseId, H);
          }
          const x = (S = Z == null ? void 0 : Z.properties) === null || S === void 0 ? void 0 : S[v];
          if (typeof x != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${v}"`);
          k = k && ($ || I(Z)), M(x, j);
        }
        if (!k)
          throw new Error(`discriminator: "${v}" must be required`);
        return f;
        function I({ required: j }) {
          return Array.isArray(j) && j.includes(v);
        }
        function M(j, Z) {
          if (j.const)
            V(j.const, Z);
          else if (j.enum)
            for (const x of j.enum)
              V(x, Z);
          else
            throw new Error(`discriminator: "properties/${v}" must have "const" or "enum"`);
        }
        function V(j, Z) {
          if (typeof j != "string" || j in f)
            throw new Error(`discriminator: "${v}" values must be unique strings`);
          f[j] = Z;
        }
      }
    }
  };
  return Kr.default = a, Kr;
}
const C_ = "http://json-schema.org/draft-07/schema#", I_ = "http://json-schema.org/draft-07/schema#", O_ = "Core schema meta-schema", N_ = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, z_ = ["object", "boolean"], j_ = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, q_ = {
  $schema: C_,
  $id: I_,
  title: O_,
  definitions: N_,
  type: z_,
  properties: j_,
  default: !0
};
var Za;
function Sc() {
  return Za || (Za = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = Jm(), n = T_(), o = R_(), s = q_, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
    class c extends r.default {
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const v = this.opts.$data ? this.$dataMetaSchema(s, a) : s;
        this.addMetaSchema(v, i, !1), this.refs["http://json-schema.org/schema"] = i;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var u = kn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return u.KeywordCxt;
    } });
    var l = ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return l._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return l.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return l.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return l.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return l.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return l.CodeGen;
    } });
    var g = Go();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var _ = En();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return _.default;
    } });
  }(ur, ur.exports)), ur.exports;
}
var M_ = Sc();
const A_ = /* @__PURE__ */ Xa(M_);
var Jr = { exports: {} }, Fn = {}, La;
function D_() {
  return La || (La = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(j, Z) {
      return { validate: j, compare: Z };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(s, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), u),
      "date-time": t(_(!0), y),
      "iso-time": t(c(), l),
      "iso-date-time": t(_(), v),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: m,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: V,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte: p,
      // signed 32 bit integer
      int32: { type: "number", validate: $ },
      // signed 64 bit integer
      int64: { type: "number", validate: k },
      // C-type float
      float: { type: "number", validate: I },
      // C-type double
      double: { type: "number", validate: I },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, a),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, u),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, y),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, l),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, v),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function r(j) {
      return j % 4 === 0 && (j % 100 !== 0 || j % 400 === 0);
    }
    const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function s(j) {
      const Z = n.exec(j);
      if (!Z)
        return !1;
      const x = +Z[1], H = +Z[2], oe = +Z[3];
      return H >= 1 && H <= 12 && oe >= 1 && oe <= (H === 2 && r(x) ? 29 : o[H]);
    }
    function a(j, Z) {
      if (j && Z)
        return j > Z ? 1 : j < Z ? -1 : 0;
    }
    const i = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(j) {
      return function(x) {
        const H = i.exec(x);
        if (!H)
          return !1;
        const oe = +H[1], Te = +H[2], Pe = +H[3], ie = H[4], Le = H[5] === "-" ? -1 : 1, D = +(H[6] || 0), C = +(H[7] || 0);
        if (D > 23 || C > 59 || j && !ie)
          return !1;
        if (oe <= 23 && Te <= 59 && Pe < 60)
          return !0;
        const q = Te - C * Le, P = oe - D * Le - (q < 0 ? 1 : 0);
        return (P === 23 || P === -1) && (q === 59 || q === -1) && Pe < 61;
      };
    }
    function u(j, Z) {
      if (!(j && Z))
        return;
      const x = (/* @__PURE__ */ new Date("2020-01-01T" + j)).valueOf(), H = (/* @__PURE__ */ new Date("2020-01-01T" + Z)).valueOf();
      if (x && H)
        return x - H;
    }
    function l(j, Z) {
      if (!(j && Z))
        return;
      const x = i.exec(j), H = i.exec(Z);
      if (x && H)
        return j = x[1] + x[2] + x[3], Z = H[1] + H[2] + H[3], j > Z ? 1 : j < Z ? -1 : 0;
    }
    const g = /t|\s/i;
    function _(j) {
      const Z = c(j);
      return function(H) {
        const oe = H.split(g);
        return oe.length === 2 && s(oe[0]) && Z(oe[1]);
      };
    }
    function y(j, Z) {
      if (!(j && Z))
        return;
      const x = new Date(j).valueOf(), H = new Date(Z).valueOf();
      if (x && H)
        return x - H;
    }
    function v(j, Z) {
      if (!(j && Z))
        return;
      const [x, H] = j.split(g), [oe, Te] = Z.split(g), Pe = a(x, oe);
      if (Pe !== void 0)
        return Pe || u(H, Te);
    }
    const w = /\/|:/, h = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function m(j) {
      return w.test(j) && h.test(j);
    }
    const d = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function p(j) {
      return d.lastIndex = 0, d.test(j);
    }
    const S = -2147483648, f = 2 ** 31 - 1;
    function $(j) {
      return Number.isInteger(j) && j <= f && j >= S;
    }
    function k(j) {
      return Number.isInteger(j);
    }
    function I() {
      return !0;
    }
    const M = /[^\\]\\Z/;
    function V(j) {
      if (M.test(j))
        return !1;
      try {
        return new RegExp(j), !0;
      } catch {
        return !1;
      }
    }
  }(Fn)), Fn;
}
var xn = {}, Fa;
function U_() {
  return Fa || (Fa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = Sc(), r = ee(), n = r.operators, o = {
      formatMaximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
      formatMinimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
      formatExclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE }
    }, s = {
      message: ({ keyword: i, schemaCode: c }) => (0, r.str)`should be ${o[i].okStr} ${c}`,
      params: ({ keyword: i, schemaCode: c }) => (0, r._)`{comparison: ${o[i].okStr}, limit: ${c}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(o),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: s,
      code(i) {
        const { gen: c, data: u, schemaCode: l, keyword: g, it: _ } = i, { opts: y, self: v } = _;
        if (!y.validateFormats)
          return;
        const w = new t.KeywordCxt(_, v.RULES.all.format.definition, "format");
        w.$data ? h() : m();
        function h() {
          const p = c.scopeValue("formats", {
            ref: v.formats,
            code: y.code.formats
          }), S = c.const("fmt", (0, r._)`${p}[${w.schemaCode}]`);
          i.fail$data((0, r.or)((0, r._)`typeof ${S} != "object"`, (0, r._)`${S} instanceof RegExp`, (0, r._)`typeof ${S}.compare != "function"`, d(S)));
        }
        function m() {
          const p = w.schema, S = v.formats[p];
          if (!S || S === !0)
            return;
          if (typeof S != "object" || S instanceof RegExp || typeof S.compare != "function")
            throw new Error(`"${g}": format "${p}" does not define "compare" function`);
          const f = c.scopeValue("formats", {
            key: p,
            ref: S,
            code: y.code.formats ? (0, r._)`${y.code.formats}${(0, r.getProperty)(p)}` : void 0
          });
          i.fail$data(d(f));
        }
        function d(p) {
          return (0, r._)`${p}.compare(${u}, ${l}) ${o[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (i) => (i.addKeyword(e.formatLimitDefinition), i);
    e.default = a;
  }(xn)), xn;
}
var xa;
function V_() {
  return xa || (xa = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = D_(), n = U_(), o = ee(), s = new o.Name("fullFormats"), a = new o.Name("fastFormats"), i = (u, l = { keywords: !0 }) => {
      if (Array.isArray(l))
        return c(u, l, r.fullFormats, s), u;
      const [g, _] = l.mode === "fast" ? [r.fastFormats, a] : [r.fullFormats, s], y = l.formats || r.formatNames;
      return c(u, y, g, _), l.keywords && (0, n.default)(u), u;
    };
    i.get = (u, l = "full") => {
      const _ = (l === "fast" ? r.fastFormats : r.fullFormats)[u];
      if (!_)
        throw new Error(`Unknown format "${u}"`);
      return _;
    };
    function c(u, l, g, _) {
      var y, v;
      (y = (v = u.opts.code).formats) !== null && y !== void 0 || (v.formats = (0, o._)`require("ajv-formats/dist/formats").${_}`);
      for (const w of l)
        u.addFormat(w, g[w]);
    }
    e.exports = t = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
  }(Jr, Jr.exports)), Jr.exports;
}
var Z_ = V_();
const L_ = /* @__PURE__ */ Xa(Z_);
function F_() {
  const e = new A_({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return L_(e), e;
}
class x_ {
  /**
   * Create an AJV validator
   *
   * @param ajv - Optional pre-configured AJV instance. If not provided, a default instance will be created.
   *
   * @example
   * ```typescript
   * // Use default configuration (recommended for most cases)
   * import { AjvJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/ajv';
   * const validator = new AjvJsonSchemaValidator();
   *
   * // Or provide custom AJV instance for advanced configuration
   * import { Ajv } from 'ajv';
   * import addFormats from 'ajv-formats';
   *
   * const ajv = new Ajv({ validateFormats: true });
   * addFormats(ajv);
   * const validator = new AjvJsonSchemaValidator(ajv);
   * ```
   */
  constructor(t) {
    this._ajv = t ?? F_();
  }
  /**
   * Create a validator for the given JSON Schema
   *
   * The validator is compiled once and can be reused multiple times.
   * If the schema has an $id, it will be cached by AJV automatically.
   *
   * @param schema - Standard JSON Schema object
   * @returns A validator function that validates input data
   */
  getValidator(t) {
    const r = "$id" in t && typeof t.$id == "string" ? this._ajv.getSchema(t.$id) ?? this._ajv.compile(t) : this._ajv.compile(t);
    return (n) => r(n) ? {
      valid: !0,
      data: n,
      errorMessage: void 0
    } : {
      valid: !1,
      data: void 0,
      errorMessage: this._ajv.errorsText(r.errors)
    };
  }
}
class H_ {
  constructor(t) {
    this._client = t;
  }
  /**
   * Calls a tool and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * This method provides streaming access to tool execution, allowing you to
   * observe intermediate task status updates for long-running tool calls.
   * Automatically validates structured output if the tool has an outputSchema.
   *
   * @example
   * ```typescript
   * const stream = client.experimental.tasks.callToolStream({ name: 'myTool', arguments: {} });
   * for await (const message of stream) {
   *   switch (message.type) {
   *     case 'taskCreated':
   *       console.log('Tool execution started:', message.task.taskId);
   *       break;
   *     case 'taskStatus':
   *       console.log('Tool status:', message.task.status);
   *       break;
   *     case 'result':
   *       console.log('Tool result:', message.result);
   *       break;
   *     case 'error':
   *       console.error('Tool error:', message.error);
   *       break;
   *   }
   * }
   * ```
   *
   * @param params - Tool call parameters (name and arguments)
   * @param resultSchema - Zod schema for validating the result (defaults to CallToolResultSchema)
   * @param options - Optional request options (timeout, signal, task creation params, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  async *callToolStream(t, r = $n, n) {
    const o = this._client, s = {
      ...n,
      // We check if the tool is known to be a task during auto-configuration, but assume
      // the caller knows what they're doing if they pass this explicitly
      task: (n == null ? void 0 : n.task) ?? (o.isToolTask(t.name) ? {} : void 0)
    }, a = o.requestStream({ method: "tools/call", params: t }, r, s), i = o.getToolOutputValidator(t.name);
    for await (const c of a) {
      if (c.type === "result" && i) {
        const u = c.result;
        if (!u.structuredContent && !u.isError) {
          yield {
            type: "error",
            error: new Q(Y.InvalidRequest, `Tool ${t.name} has an output schema but did not return structured content`)
          };
          return;
        }
        if (u.structuredContent)
          try {
            const l = i(u.structuredContent);
            if (!l.valid) {
              yield {
                type: "error",
                error: new Q(Y.InvalidParams, `Structured content does not match the tool's output schema: ${l.errorMessage}`)
              };
              return;
            }
          } catch (l) {
            if (l instanceof Q) {
              yield { type: "error", error: l };
              return;
            }
            yield {
              type: "error",
              error: new Q(Y.InvalidParams, `Failed to validate structured content: ${l instanceof Error ? l.message : String(l)}`)
            };
            return;
          }
      }
      yield c;
    }
  }
  /**
   * Gets the current status of a task.
   *
   * @param taskId - The task identifier
   * @param options - Optional request options
   * @returns The task status
   *
   * @experimental
   */
  async getTask(t, r) {
    return this._client.getTask({ taskId: t }, r);
  }
  /**
   * Retrieves the result of a completed task.
   *
   * @param taskId - The task identifier
   * @param resultSchema - Zod schema for validating the result
   * @param options - Optional request options
   * @returns The task result
   *
   * @experimental
   */
  async getTaskResult(t, r, n) {
    return this._client.getTaskResult({ taskId: t }, r, n);
  }
  /**
   * Lists tasks with optional pagination.
   *
   * @param cursor - Optional pagination cursor
   * @param options - Optional request options
   * @returns List of tasks with optional next cursor
   *
   * @experimental
   */
  async listTasks(t, r) {
    return this._client.listTasks(t ? { cursor: t } : void 0, r);
  }
  /**
   * Cancels a running task.
   *
   * @param taskId - The task identifier
   * @param options - Optional request options
   *
   * @experimental
   */
  async cancelTask(t, r) {
    return this._client.cancelTask({ taskId: t }, r);
  }
  /**
   * Sends a request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * This method provides streaming access to request processing, allowing you to
   * observe intermediate task status updates for task-augmented requests.
   *
   * @param request - The request to send
   * @param resultSchema - Zod schema for validating the result
   * @param options - Optional request options (timeout, signal, task creation params, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  requestStream(t, r, n) {
    return this._client.requestStream(t, r, n);
  }
}
function K_(e, t, r) {
  var n;
  if (!e)
    throw new Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
    case "tools/call":
      if (!((n = e.tools) != null && n.call))
        throw new Error(`${r} does not support task creation for tools/call (required for ${t})`);
      break;
  }
}
function J_(e, t, r) {
  var n, o;
  if (!e)
    throw new Error(`${r} does not support task creation (required for ${t})`);
  switch (t) {
    case "sampling/createMessage":
      if (!((n = e.sampling) != null && n.createMessage))
        throw new Error(`${r} does not support task creation for sampling/createMessage (required for ${t})`);
      break;
    case "elicitation/create":
      if (!((o = e.elicitation) != null && o.create))
        throw new Error(`${r} does not support task creation for elicitation/create (required for ${t})`);
      break;
  }
}
function Gr(e, t) {
  if (!(!e || t === null || typeof t != "object")) {
    if (e.type === "object" && e.properties && typeof e.properties == "object") {
      const r = t, n = e.properties;
      for (const o of Object.keys(n)) {
        const s = n[o];
        r[o] === void 0 && Object.prototype.hasOwnProperty.call(s, "default") && (r[o] = s.default), r[o] !== void 0 && Gr(s, r[o]);
      }
    }
    if (Array.isArray(e.anyOf))
      for (const r of e.anyOf)
        typeof r != "boolean" && Gr(r, t);
    if (Array.isArray(e.oneOf))
      for (const r of e.oneOf)
        typeof r != "boolean" && Gr(r, t);
  }
}
function W_(e) {
  if (!e)
    return { supportsFormMode: !1, supportsUrlMode: !1 };
  const t = e.form !== void 0, r = e.url !== void 0;
  return { supportsFormMode: t || !t && !r, supportsUrlMode: r };
}
class Ha extends Im {
  /**
   * Initializes this client with the given name and version information.
   */
  constructor(t, r) {
    super(r), this._clientInfo = t, this._cachedToolOutputValidators = /* @__PURE__ */ new Map(), this._cachedKnownTaskTools = /* @__PURE__ */ new Set(), this._cachedRequiredTaskTools = /* @__PURE__ */ new Set(), this._listChangedDebounceTimers = /* @__PURE__ */ new Map(), this._capabilities = (r == null ? void 0 : r.capabilities) ?? {}, this._jsonSchemaValidator = (r == null ? void 0 : r.jsonSchemaValidator) ?? new x_(), r != null && r.listChanged && (this._pendingListChangedConfig = r.listChanged);
  }
  /**
   * Set up handlers for list changed notifications based on config and server capabilities.
   * This should only be called after initialization when server capabilities are known.
   * Handlers are silently skipped if the server doesn't advertise the corresponding listChanged capability.
   * @internal
   */
  _setupListChangedHandlers(t) {
    var r, n, o, s, a, i;
    t.tools && ((n = (r = this._serverCapabilities) == null ? void 0 : r.tools) != null && n.listChanged) && this._setupListChangedHandler("tools", cc, t.tools, async () => (await this.listTools()).tools), t.prompts && ((s = (o = this._serverCapabilities) == null ? void 0 : o.prompts) != null && s.listChanged) && this._setupListChangedHandler("prompts", ac, t.prompts, async () => (await this.listPrompts()).prompts), t.resources && ((i = (a = this._serverCapabilities) == null ? void 0 : a.resources) != null && i.listChanged) && this._setupListChangedHandler("resources", nc, t.resources, async () => (await this.listResources()).resources);
  }
  /**
   * Access experimental features.
   *
   * WARNING: These APIs are experimental and may change without notice.
   *
   * @experimental
   */
  get experimental() {
    return this._experimental || (this._experimental = {
      tasks: new H_(this)
    }), this._experimental;
  }
  /**
   * Registers new capabilities. This can only be called before connecting to a transport.
   *
   * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
   */
  registerCapabilities(t) {
    if (this.transport)
      throw new Error("Cannot register capabilities after connecting to transport");
    this._capabilities = Om(this._capabilities, t);
  }
  /**
   * Override request handler registration to enforce client-side validation for elicitation.
   */
  setRequestHandler(t, r) {
    var i;
    const n = Ii(t), o = n == null ? void 0 : n.method;
    if (!o)
      throw new Error("Schema is missing a method literal");
    let s;
    if (gn(o)) {
      const c = o, u = (i = c._zod) == null ? void 0 : i.def;
      s = (u == null ? void 0 : u.value) ?? c.value;
    } else {
      const c = o, u = c._def;
      s = (u == null ? void 0 : u.value) ?? c.value;
    }
    if (typeof s != "string")
      throw new Error("Schema method literal must be a string");
    const a = s;
    if (a === "elicitation/create") {
      const c = async (u, l) => {
        var p, S;
        const g = at(hc, u);
        if (!g.success) {
          const f = g.error instanceof Error ? g.error.message : String(g.error);
          throw new Q(Y.InvalidParams, `Invalid elicitation request: ${f}`);
        }
        const { params: _ } = g.data;
        _.mode = _.mode ?? "form";
        const { supportsFormMode: y, supportsUrlMode: v } = W_(this._capabilities.elicitation);
        if (_.mode === "form" && !y)
          throw new Q(Y.InvalidParams, "Client does not support form-mode elicitation requests");
        if (_.mode === "url" && !v)
          throw new Q(Y.InvalidParams, "Client does not support URL-mode elicitation requests");
        const w = await Promise.resolve(r(u, l));
        if (_.task) {
          const f = at(Xt, w);
          if (!f.success) {
            const $ = f.error instanceof Error ? f.error.message : String(f.error);
            throw new Q(Y.InvalidParams, `Invalid task creation result: ${$}`);
          }
          return f.data;
        }
        const h = at(pc, w);
        if (!h.success) {
          const f = h.error instanceof Error ? h.error.message : String(h.error);
          throw new Q(Y.InvalidParams, `Invalid elicitation result: ${f}`);
        }
        const m = h.data, d = _.mode === "form" ? _.requestedSchema : void 0;
        if (_.mode === "form" && m.action === "accept" && m.content && d && (S = (p = this._capabilities.elicitation) == null ? void 0 : p.form) != null && S.applyDefaults)
          try {
            Gr(d, m.content);
          } catch {
          }
        return m;
      };
      return super.setRequestHandler(t, c);
    }
    if (a === "sampling/createMessage") {
      const c = async (u, l) => {
        const g = at(lc, u);
        if (!g.success) {
          const m = g.error instanceof Error ? g.error.message : String(g.error);
          throw new Q(Y.InvalidParams, `Invalid sampling request: ${m}`);
        }
        const { params: _ } = g.data, y = await Promise.resolve(r(u, l));
        if (_.task) {
          const m = at(Xt, y);
          if (!m.success) {
            const d = m.error instanceof Error ? m.error.message : String(m.error);
            throw new Q(Y.InvalidParams, `Invalid task creation result: ${d}`);
          }
          return m.data;
        }
        const w = _.tools || _.toolChoice ? fc : dc, h = at(w, y);
        if (!h.success) {
          const m = h.error instanceof Error ? h.error.message : String(h.error);
          throw new Q(Y.InvalidParams, `Invalid sampling result: ${m}`);
        }
        return h.data;
      };
      return super.setRequestHandler(t, c);
    }
    return super.setRequestHandler(t, r);
  }
  assertCapability(t, r) {
    var n;
    if (!((n = this._serverCapabilities) != null && n[t]))
      throw new Error(`Server does not support ${t} (required for ${r})`);
  }
  async connect(t, r) {
    if (await super.connect(t), t.sessionId === void 0)
      try {
        const n = await this.request({
          method: "initialize",
          params: {
            protocolVersion: yn,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo
          }
        }, Wi, r);
        if (n === void 0)
          throw new Error(`Server sent invalid initialize result: ${n}`);
        if (!Qh.includes(n.protocolVersion))
          throw new Error(`Server's protocol version is not supported: ${n.protocolVersion}`);
        this._serverCapabilities = n.capabilities, this._serverVersion = n.serverInfo, t.setProtocolVersion && t.setProtocolVersion(n.protocolVersion), this._instructions = n.instructions, await this.notification({
          method: "notifications/initialized"
        }), this._pendingListChangedConfig && (this._setupListChangedHandlers(this._pendingListChangedConfig), this._pendingListChangedConfig = void 0);
      } catch (n) {
        throw this.close(), n;
      }
  }
  /**
   * After initialization has completed, this will be populated with the server's reported capabilities.
   */
  getServerCapabilities() {
    return this._serverCapabilities;
  }
  /**
   * After initialization has completed, this will be populated with information about the server's name and version.
   */
  getServerVersion() {
    return this._serverVersion;
  }
  /**
   * After initialization has completed, this may be populated with information about the server's instructions.
   */
  getInstructions() {
    return this._instructions;
  }
  assertCapabilityForMethod(t) {
    var r, n, o, s, a;
    switch (t) {
      case "logging/setLevel":
        if (!((r = this._serverCapabilities) != null && r.logging))
          throw new Error(`Server does not support logging (required for ${t})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!((n = this._serverCapabilities) != null && n.prompts))
          throw new Error(`Server does not support prompts (required for ${t})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
      case "resources/subscribe":
      case "resources/unsubscribe":
        if (!((o = this._serverCapabilities) != null && o.resources))
          throw new Error(`Server does not support resources (required for ${t})`);
        if (t === "resources/subscribe" && !this._serverCapabilities.resources.subscribe)
          throw new Error(`Server does not support resource subscriptions (required for ${t})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!((s = this._serverCapabilities) != null && s.tools))
          throw new Error(`Server does not support tools (required for ${t})`);
        break;
      case "completion/complete":
        if (!((a = this._serverCapabilities) != null && a.completions))
          throw new Error(`Server does not support completions (required for ${t})`);
        break;
    }
  }
  assertNotificationCapability(t) {
    var r;
    switch (t) {
      case "notifications/roots/list_changed":
        if (!((r = this._capabilities.roots) != null && r.listChanged))
          throw new Error(`Client does not support roots list changed notifications (required for ${t})`);
        break;
    }
  }
  assertRequestHandlerCapability(t) {
    if (this._capabilities)
      switch (t) {
        case "sampling/createMessage":
          if (!this._capabilities.sampling)
            throw new Error(`Client does not support sampling capability (required for ${t})`);
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation)
            throw new Error(`Client does not support elicitation capability (required for ${t})`);
          break;
        case "roots/list":
          if (!this._capabilities.roots)
            throw new Error(`Client does not support roots capability (required for ${t})`);
          break;
        case "tasks/get":
        case "tasks/list":
        case "tasks/result":
        case "tasks/cancel":
          if (!this._capabilities.tasks)
            throw new Error(`Client does not support tasks capability (required for ${t})`);
          break;
      }
  }
  assertTaskCapability(t) {
    var r, n;
    K_((n = (r = this._serverCapabilities) == null ? void 0 : r.tasks) == null ? void 0 : n.requests, t, "Server");
  }
  assertTaskHandlerCapability(t) {
    var r;
    this._capabilities && J_((r = this._capabilities.tasks) == null ? void 0 : r.requests, t, "Client");
  }
  async ping(t) {
    return this.request({ method: "ping" }, It, t);
  }
  async complete(t, r) {
    return this.request({ method: "completion/complete", params: t }, mc, r);
  }
  async setLoggingLevel(t, r) {
    return this.request({ method: "logging/setLevel", params: { level: t } }, It, r);
  }
  async getPrompt(t, r) {
    return this.request({ method: "prompts/get", params: t }, sc, r);
  }
  async listPrompts(t, r) {
    return this.request({ method: "prompts/list", params: t }, oc, r);
  }
  async listResources(t, r) {
    return this.request({ method: "resources/list", params: t }, ec, r);
  }
  async listResourceTemplates(t, r) {
    return this.request({ method: "resources/templates/list", params: t }, tc, r);
  }
  async readResource(t, r) {
    return this.request({ method: "resources/read", params: t }, rc, r);
  }
  async subscribeResource(t, r) {
    return this.request({ method: "resources/subscribe", params: t }, It, r);
  }
  async unsubscribeResource(t, r) {
    return this.request({ method: "resources/unsubscribe", params: t }, It, r);
  }
  /**
   * Calls a tool and waits for the result. Automatically validates structured output if the tool has an outputSchema.
   *
   * For task-based execution with streaming behavior, use client.experimental.tasks.callToolStream() instead.
   */
  async callTool(t, r = $n, n) {
    if (this.isToolTaskRequired(t.name))
      throw new Q(Y.InvalidRequest, `Tool "${t.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`);
    const o = await this.request({ method: "tools/call", params: t }, r, n), s = this.getToolOutputValidator(t.name);
    if (s) {
      if (!o.structuredContent && !o.isError)
        throw new Q(Y.InvalidRequest, `Tool ${t.name} has an output schema but did not return structured content`);
      if (o.structuredContent)
        try {
          const a = s(o.structuredContent);
          if (!a.valid)
            throw new Q(Y.InvalidParams, `Structured content does not match the tool's output schema: ${a.errorMessage}`);
        } catch (a) {
          throw a instanceof Q ? a : new Q(Y.InvalidParams, `Failed to validate structured content: ${a instanceof Error ? a.message : String(a)}`);
        }
    }
    return o;
  }
  isToolTask(t) {
    var r, n, o, s;
    return (s = (o = (n = (r = this._serverCapabilities) == null ? void 0 : r.tasks) == null ? void 0 : n.requests) == null ? void 0 : o.tools) != null && s.call ? this._cachedKnownTaskTools.has(t) : !1;
  }
  /**
   * Check if a tool requires task-based execution.
   * Unlike isToolTask which includes 'optional' tools, this only checks for 'required'.
   */
  isToolTaskRequired(t) {
    return this._cachedRequiredTaskTools.has(t);
  }
  /**
   * Cache validators for tool output schemas.
   * Called after listTools() to pre-compile validators for better performance.
   */
  cacheToolMetadata(t) {
    var r;
    this._cachedToolOutputValidators.clear(), this._cachedKnownTaskTools.clear(), this._cachedRequiredTaskTools.clear();
    for (const n of t) {
      if (n.outputSchema) {
        const s = this._jsonSchemaValidator.getValidator(n.outputSchema);
        this._cachedToolOutputValidators.set(n.name, s);
      }
      const o = (r = n.execution) == null ? void 0 : r.taskSupport;
      (o === "required" || o === "optional") && this._cachedKnownTaskTools.add(n.name), o === "required" && this._cachedRequiredTaskTools.add(n.name);
    }
  }
  /**
   * Get cached validator for a tool
   */
  getToolOutputValidator(t) {
    return this._cachedToolOutputValidators.get(t);
  }
  async listTools(t, r) {
    const n = await this.request({ method: "tools/list", params: t }, Wo, r);
    return this.cacheToolMetadata(n.tools), n;
  }
  /**
   * Set up a single list changed handler.
   * @internal
   */
  _setupListChangedHandler(t, r, n, o) {
    const s = Hp.safeParse(n);
    if (!s.success)
      throw new Error(`Invalid ${t} listChanged options: ${s.error.message}`);
    if (typeof n.onChanged != "function")
      throw new Error(`Invalid ${t} listChanged options: onChanged must be a function`);
    const { autoRefresh: a, debounceMs: i } = s.data, { onChanged: c } = n, u = async () => {
      if (!a) {
        c(null, null);
        return;
      }
      try {
        const g = await o();
        c(null, g);
      } catch (g) {
        const _ = g instanceof Error ? g : new Error(String(g));
        c(_, null);
      }
    }, l = () => {
      if (i) {
        const g = this._listChangedDebounceTimers.get(t);
        g && clearTimeout(g);
        const _ = setTimeout(u, i);
        this._listChangedDebounceTimers.set(t, _);
      } else
        u();
    };
    this.setNotificationHandler(r, l);
  }
  async sendRootsListChanged() {
    return this.notification({ method: "notifications/roots/list_changed" });
  }
}
class Ka extends Error {
  constructor(t, r) {
    super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Hn(e) {
}
function kc(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = Hn, onError: r = Hn, onRetry: n = Hn, onComment: o } = e;
  let s = "", a = !0, i, c = "", u = "";
  function l(w) {
    const h = a ? w.replace(/^\xEF\xBB\xBF/, "") : w, [m, d] = G_(`${s}${h}`);
    for (const p of m)
      g(p);
    s = d, a = !1;
  }
  function g(w) {
    if (w === "") {
      y();
      return;
    }
    if (w.startsWith(":")) {
      o && o(w.slice(w.startsWith(": ") ? 2 : 1));
      return;
    }
    const h = w.indexOf(":");
    if (h !== -1) {
      const m = w.slice(0, h), d = w[h + 1] === " " ? 2 : 1, p = w.slice(h + d);
      _(m, p, w);
      return;
    }
    _(w, "", w);
  }
  function _(w, h, m) {
    switch (w) {
      case "event":
        u = h;
        break;
      case "data":
        c = `${c}${h}
`;
        break;
      case "id":
        i = h.includes("\0") ? void 0 : h;
        break;
      case "retry":
        /^\d+$/.test(h) ? n(parseInt(h, 10)) : r(
          new Ka(`Invalid \`retry\` value: "${h}"`, {
            type: "invalid-retry",
            value: h,
            line: m
          })
        );
        break;
      default:
        r(
          new Ka(
            `Unknown field "${w.length > 20 ? `${w.slice(0, 20)}…` : w}"`,
            { type: "unknown-field", field: w, value: h, line: m }
          )
        );
        break;
    }
  }
  function y() {
    c.length > 0 && t({
      id: i,
      event: u || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: c.endsWith(`
`) ? c.slice(0, -1) : c
    }), i = void 0, c = "", u = "";
  }
  function v(w = {}) {
    s && w.consume && g(s), a = !0, i = void 0, c = "", u = "", s = "";
  }
  return { feed: l, reset: v };
}
function G_(e) {
  const t = [];
  let r = "", n = 0;
  for (; n < e.length; ) {
    const o = e.indexOf("\r", n), s = e.indexOf(`
`, n);
    let a = -1;
    if (o !== -1 && s !== -1 ? a = Math.min(o, s) : o !== -1 ? o === e.length - 1 ? a = -1 : a = o : s !== -1 && (a = s), a === -1) {
      r = e.slice(n);
      break;
    } else {
      const i = e.slice(n, a);
      t.push(i), n = a + 1, e[n - 1] === "\r" && e[n] === `
` && n++;
    }
  }
  return [t, r];
}
class Ja extends Event {
  /**
   * Constructs a new `ErrorEvent` instance. This is typically not called directly,
   * but rather emitted by the `EventSource` object when an error occurs.
   *
   * @param type - The type of the event (should be "error")
   * @param errorEventInitDict - Optional properties to include in the error event
   */
  constructor(t, r) {
    var n, o;
    super(t), this.code = (n = r == null ? void 0 : r.code) != null ? n : void 0, this.message = (o = r == null ? void 0 : r.message) != null ? o : void 0;
  }
  /**
   * Node.js "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Node.js when you `console.log` an instance of this class.
   *
   * @param _depth - The current depth
   * @param options - The options passed to `util.inspect`
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @returns A string representation of the error
   */
  [Symbol.for("nodejs.util.inspect.custom")](t, r, n) {
    return n(Wa(this), r);
  }
  /**
   * Deno "hides" the `message` and `code` properties of the `ErrorEvent` instance,
   * when it is `console.log`'ed. This makes it harder to debug errors. To ease debugging,
   * we explicitly include the properties in the `inspect` method.
   *
   * This is automatically called by Deno when you `console.log` an instance of this class.
   *
   * @param inspect - The inspect function to use (prevents having to import it from `util`)
   * @param options - The options passed to `Deno.inspect`
   * @returns A string representation of the error
   */
  [Symbol.for("Deno.customInspect")](t, r) {
    return t(Wa(this), r);
  }
}
function B_(e) {
  const t = globalThis.DOMException;
  return typeof t == "function" ? new t(e, "SyntaxError") : new SyntaxError(e);
}
function to(e) {
  return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(to).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${to(e.cause)}` : e.message : `${e}`;
}
function Wa(e) {
  return {
    type: e.type,
    message: e.message,
    code: e.code,
    defaultPrevented: e.defaultPrevented,
    cancelable: e.cancelable,
    timeStamp: e.timeStamp
  };
}
var Ec = (e) => {
  throw TypeError(e);
}, Yo = (e, t, r) => t.has(e) || Ec("Cannot " + r), re = (e, t, r) => (Yo(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ke = (e, t, r) => t.has(e) ? Ec("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _e = (e, t, r, n) => (Yo(e, t, "write to private field"), t.set(e, r), r), ot = (e, t, r) => (Yo(e, t, "access private method"), r), Ve, yt, Et, Br, sn, Gt, Ot, Bt, it, Tt, zt, Pt, Jt, Ye, ro, no, oo, Ga, so, ao, Wt, io, co;
class Qr extends EventTarget {
  constructor(t, r) {
    var n, o;
    super(), ke(this, Ye), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ke(this, Ve), ke(this, yt), ke(this, Et), ke(this, Br), ke(this, sn), ke(this, Gt), ke(this, Ot), ke(this, Bt, null), ke(this, it), ke(this, Tt), ke(this, zt, null), ke(this, Pt, null), ke(this, Jt, null), ke(this, no, async (s) => {
      var a;
      re(this, Tt).reset();
      const { body: i, redirected: c, status: u, headers: l } = s;
      if (u === 204) {
        ot(this, Ye, Wt).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (c ? _e(this, Et, new URL(s.url)) : _e(this, Et, void 0), u !== 200) {
        ot(this, Ye, Wt).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(l.get("content-type") || "").startsWith("text/event-stream")) {
        ot(this, Ye, Wt).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if (re(this, Ve) === this.CLOSED)
        return;
      _e(this, Ve, this.OPEN);
      const g = new Event("open");
      if ((a = re(this, Jt)) == null || a.call(this, g), this.dispatchEvent(g), typeof i != "object" || !i || !("getReader" in i)) {
        ot(this, Ye, Wt).call(this, "Invalid response body, expected a web ReadableStream", u), this.close();
        return;
      }
      const _ = new TextDecoder(), y = i.getReader();
      let v = !0;
      do {
        const { done: w, value: h } = await y.read();
        h && re(this, Tt).feed(_.decode(h, { stream: !w })), w && (v = !1, re(this, Tt).reset(), ot(this, Ye, io).call(this));
      } while (v);
    }), ke(this, oo, (s) => {
      _e(this, it, void 0), !(s.name === "AbortError" || s.type === "aborted") && ot(this, Ye, io).call(this, to(s));
    }), ke(this, so, (s) => {
      typeof s.id == "string" && _e(this, Bt, s.id);
      const a = new MessageEvent(s.event || "message", {
        data: s.data,
        origin: re(this, Et) ? re(this, Et).origin : re(this, yt).origin,
        lastEventId: s.id || ""
      });
      re(this, Pt) && (!s.event || s.event === "message") && re(this, Pt).call(this, a), this.dispatchEvent(a);
    }), ke(this, ao, (s) => {
      _e(this, Gt, s);
    }), ke(this, co, () => {
      _e(this, Ot, void 0), re(this, Ve) === this.CONNECTING && ot(this, Ye, ro).call(this);
    });
    try {
      if (t instanceof URL)
        _e(this, yt, t);
      else if (typeof t == "string")
        _e(this, yt, new URL(t, Q_()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw B_("An invalid or illegal string was specified");
    }
    _e(this, Tt, kc({
      onEvent: re(this, so),
      onRetry: re(this, ao)
    })), _e(this, Ve, this.CONNECTING), _e(this, Gt, 3e3), _e(this, sn, (n = r == null ? void 0 : r.fetch) != null ? n : globalThis.fetch), _e(this, Br, (o = r == null ? void 0 : r.withCredentials) != null ? o : !1), ot(this, Ye, ro).call(this);
  }
  /**
   * Returns the state of this EventSource object's connection. It can have the values described below.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/readyState)
   *
   * Note: typed as `number` instead of `0 | 1 | 2` for compatibility with the `EventSource` interface,
   * defined in the TypeScript `dom` library.
   *
   * @public
   */
  get readyState() {
    return re(this, Ve);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return re(this, yt).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return re(this, Br);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return re(this, zt);
  }
  set onerror(t) {
    _e(this, zt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return re(this, Pt);
  }
  set onmessage(t) {
    _e(this, Pt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return re(this, Jt);
  }
  set onopen(t) {
    _e(this, Jt, t);
  }
  addEventListener(t, r, n) {
    const o = r;
    super.addEventListener(t, o, n);
  }
  removeEventListener(t, r, n) {
    const o = r;
    super.removeEventListener(t, o, n);
  }
  /**
   * Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/close)
   *
   * @public
   */
  close() {
    re(this, Ot) && clearTimeout(re(this, Ot)), re(this, Ve) !== this.CLOSED && (re(this, it) && re(this, it).abort(), _e(this, Ve, this.CLOSED), _e(this, it, void 0));
  }
}
Ve = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
ro = function() {
  _e(this, Ve, this.CONNECTING), _e(this, it, new AbortController()), re(this, sn)(re(this, yt), ot(this, Ye, Ga).call(this)).then(re(this, no)).catch(re(this, oo));
}, no = /* @__PURE__ */ new WeakMap(), oo = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
Ga = function() {
  var e;
  const t = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...re(this, Bt) ? { "Last-Event-ID": re(this, Bt) } : void 0 },
    cache: "no-store",
    signal: (e = re(this, it)) == null ? void 0 : e.signal
  };
  return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, so = /* @__PURE__ */ new WeakMap(), ao = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
Wt = function(e, t) {
  var r;
  re(this, Ve) !== this.CLOSED && _e(this, Ve, this.CLOSED);
  const n = new Ja("error", { code: t, message: e });
  (r = re(this, zt)) == null || r.call(this, n), this.dispatchEvent(n);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
io = function(e, t) {
  var r;
  if (re(this, Ve) === this.CLOSED)
    return;
  _e(this, Ve, this.CONNECTING);
  const n = new Ja("error", { code: t, message: e });
  (r = re(this, zt)) == null || r.call(this, n), this.dispatchEvent(n), _e(this, Ot, setTimeout(re(this, co), re(this, Gt)));
}, co = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
Qr.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
Qr.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
Qr.CLOSED = 2;
function Q_() {
  const e = "document" in globalThis ? globalThis.document : void 0;
  return e && typeof e == "object" && "baseURI" in e && typeof e.baseURI == "string" ? e.baseURI : void 0;
}
function an(e) {
  return e ? e instanceof Headers ? Object.fromEntries(e.entries()) : Array.isArray(e) ? Object.fromEntries(e) : { ...e } : {};
}
function Tc(e = fetch, t) {
  return t ? async (r, n) => {
    const o = {
      ...t,
      ...n,
      // Headers need special handling - merge instead of replace
      headers: n != null && n.headers ? { ...an(t.headers), ...an(n.headers) } : t.headers
    };
    return e(r, o);
  } : e;
}
let Xo;
Xo = globalThis.crypto;
async function Y_(e) {
  return (await Xo).getRandomValues(new Uint8Array(e));
}
async function X_(e) {
  const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~", r = Math.pow(2, 8) - Math.pow(2, 8) % t.length;
  let n = "";
  for (; n.length < e; ) {
    const o = await Y_(e - n.length);
    for (const s of o)
      s < r && (n += t[s % t.length]);
  }
  return n;
}
async function eg(e) {
  return await X_(e);
}
async function tg(e) {
  const t = await (await Xo).subtle.digest("SHA-256", new TextEncoder().encode(e));
  return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function rg(e) {
  if (e || (e = 43), e < 43 || e > 128)
    throw `Expected a length between 43 and 128. Received ${e}.`;
  const t = await eg(e), r = await tg(t);
  return {
    code_verifier: t,
    code_challenge: r
  };
}
const Oe = nh().superRefine((e, t) => {
  if (!URL.canParse(e))
    return t.addIssue({
      code: Gh.custom,
      message: "URL must be parseable",
      fatal: !0
    }), su;
}).refine((e) => {
  const t = new URL(e);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), ng = Ne({
  resource: T().url(),
  authorization_servers: L(Oe).optional(),
  jwks_uri: T().url().optional(),
  scopes_supported: L(T()).optional(),
  bearer_methods_supported: L(T()).optional(),
  resource_signing_alg_values_supported: L(T()).optional(),
  resource_name: T().optional(),
  resource_documentation: T().optional(),
  resource_policy_uri: T().url().optional(),
  resource_tos_uri: T().url().optional(),
  tls_client_certificate_bound_access_tokens: fe().optional(),
  authorization_details_types_supported: L(T()).optional(),
  dpop_signing_alg_values_supported: L(T()).optional(),
  dpop_bound_access_tokens_required: fe().optional()
}), Pc = Ne({
  issuer: T(),
  authorization_endpoint: Oe,
  token_endpoint: Oe,
  registration_endpoint: Oe.optional(),
  scopes_supported: L(T()).optional(),
  response_types_supported: L(T()),
  response_modes_supported: L(T()).optional(),
  grant_types_supported: L(T()).optional(),
  token_endpoint_auth_methods_supported: L(T()).optional(),
  token_endpoint_auth_signing_alg_values_supported: L(T()).optional(),
  service_documentation: Oe.optional(),
  revocation_endpoint: Oe.optional(),
  revocation_endpoint_auth_methods_supported: L(T()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: L(T()).optional(),
  introspection_endpoint: T().optional(),
  introspection_endpoint_auth_methods_supported: L(T()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: L(T()).optional(),
  code_challenge_methods_supported: L(T()).optional(),
  client_id_metadata_document_supported: fe().optional()
}), og = Ne({
  issuer: T(),
  authorization_endpoint: Oe,
  token_endpoint: Oe,
  userinfo_endpoint: Oe.optional(),
  jwks_uri: Oe,
  registration_endpoint: Oe.optional(),
  scopes_supported: L(T()).optional(),
  response_types_supported: L(T()),
  response_modes_supported: L(T()).optional(),
  grant_types_supported: L(T()).optional(),
  acr_values_supported: L(T()).optional(),
  subject_types_supported: L(T()),
  id_token_signing_alg_values_supported: L(T()),
  id_token_encryption_alg_values_supported: L(T()).optional(),
  id_token_encryption_enc_values_supported: L(T()).optional(),
  userinfo_signing_alg_values_supported: L(T()).optional(),
  userinfo_encryption_alg_values_supported: L(T()).optional(),
  userinfo_encryption_enc_values_supported: L(T()).optional(),
  request_object_signing_alg_values_supported: L(T()).optional(),
  request_object_encryption_alg_values_supported: L(T()).optional(),
  request_object_encryption_enc_values_supported: L(T()).optional(),
  token_endpoint_auth_methods_supported: L(T()).optional(),
  token_endpoint_auth_signing_alg_values_supported: L(T()).optional(),
  display_values_supported: L(T()).optional(),
  claim_types_supported: L(T()).optional(),
  claims_supported: L(T()).optional(),
  service_documentation: T().optional(),
  claims_locales_supported: L(T()).optional(),
  ui_locales_supported: L(T()).optional(),
  claims_parameter_supported: fe().optional(),
  request_parameter_supported: fe().optional(),
  request_uri_parameter_supported: fe().optional(),
  require_request_uri_registration: fe().optional(),
  op_policy_uri: Oe.optional(),
  op_tos_uri: Oe.optional(),
  client_id_metadata_document_supported: fe().optional()
}), sg = F({
  ...og.shape,
  ...Pc.pick({
    code_challenge_methods_supported: !0
  }).shape
}), ag = F({
  access_token: T(),
  id_token: T().optional(),
  // Optional for OAuth 2.1, but necessary in OpenID Connect
  token_type: T(),
  expires_in: Bh().optional(),
  scope: T().optional(),
  refresh_token: T().optional()
}).strip(), ig = F({
  error: T(),
  error_description: T().optional(),
  error_uri: T().optional()
}), Ba = Oe.optional().or(W("").transform(() => {
})), cg = F({
  redirect_uris: L(Oe),
  token_endpoint_auth_method: T().optional(),
  grant_types: L(T()).optional(),
  response_types: L(T()).optional(),
  client_name: T().optional(),
  client_uri: Oe.optional(),
  logo_uri: Ba,
  scope: T().optional(),
  contacts: L(T()).optional(),
  tos_uri: Ba,
  policy_uri: T().optional(),
  jwks_uri: Oe.optional(),
  jwks: Sh().optional(),
  software_id: T().optional(),
  software_version: T().optional(),
  software_statement: T().optional()
}).strip(), ug = F({
  client_id: T(),
  client_secret: T().optional(),
  client_id_issued_at: ue().optional(),
  client_secret_expires_at: ue().optional()
}).strip(), lg = cg.merge(ug);
F({
  error: T(),
  error_description: T().optional()
}).strip();
F({
  token: T(),
  token_type_hint: T().optional()
}).strip();
function dg(e) {
  const t = typeof e == "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function fg({ requestedResource: e, configuredResource: t }) {
  const r = typeof e == "string" ? new URL(e) : new URL(e.href), n = typeof t == "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== n.origin || r.pathname.length < n.pathname.length)
    return !1;
  const o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", s = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
  return o.startsWith(s);
}
class Ee extends Error {
  constructor(t, r) {
    super(t), this.errorUri = r, this.name = this.constructor.name;
  }
  /**
   * Converts the error to a standard OAuth error response object
   */
  toResponseObject() {
    const t = {
      error: this.errorCode,
      error_description: this.message
    };
    return this.errorUri && (t.error_uri = this.errorUri), t;
  }
  get errorCode() {
    return this.constructor.errorCode;
  }
}
class uo extends Ee {
}
uo.errorCode = "invalid_request";
class cn extends Ee {
}
cn.errorCode = "invalid_client";
class un extends Ee {
}
un.errorCode = "invalid_grant";
class ln extends Ee {
}
ln.errorCode = "unauthorized_client";
class lo extends Ee {
}
lo.errorCode = "unsupported_grant_type";
class fo extends Ee {
}
fo.errorCode = "invalid_scope";
class ho extends Ee {
}
ho.errorCode = "access_denied";
class At extends Ee {
}
At.errorCode = "server_error";
class po extends Ee {
}
po.errorCode = "temporarily_unavailable";
class mo extends Ee {
}
mo.errorCode = "unsupported_response_type";
class _o extends Ee {
}
_o.errorCode = "unsupported_token_type";
class go extends Ee {
}
go.errorCode = "invalid_token";
class yo extends Ee {
}
yo.errorCode = "method_not_allowed";
class vo extends Ee {
}
vo.errorCode = "too_many_requests";
class dn extends Ee {
}
dn.errorCode = "invalid_client_metadata";
class wo extends Ee {
}
wo.errorCode = "insufficient_scope";
class $o extends Ee {
}
$o.errorCode = "invalid_target";
const hg = {
  [uo.errorCode]: uo,
  [cn.errorCode]: cn,
  [un.errorCode]: un,
  [ln.errorCode]: ln,
  [lo.errorCode]: lo,
  [fo.errorCode]: fo,
  [ho.errorCode]: ho,
  [At.errorCode]: At,
  [po.errorCode]: po,
  [mo.errorCode]: mo,
  [_o.errorCode]: _o,
  [go.errorCode]: go,
  [yo.errorCode]: yo,
  [vo.errorCode]: vo,
  [dn.errorCode]: dn,
  [wo.errorCode]: wo,
  [$o.errorCode]: $o
};
class Xe extends Error {
  constructor(t) {
    super(t ?? "Unauthorized");
  }
}
function pg(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
const Kn = "code", Jn = "S256";
function mg(e, t) {
  const r = e.client_secret !== void 0;
  return t.length === 0 ? r ? "client_secret_post" : "none" : "token_endpoint_auth_method" in e && e.token_endpoint_auth_method && pg(e.token_endpoint_auth_method) && t.includes(e.token_endpoint_auth_method) ? e.token_endpoint_auth_method : r && t.includes("client_secret_basic") ? "client_secret_basic" : r && t.includes("client_secret_post") ? "client_secret_post" : t.includes("none") ? "none" : r ? "client_secret_post" : "none";
}
function _g(e, t, r, n) {
  const { client_id: o, client_secret: s } = t;
  switch (e) {
    case "client_secret_basic":
      gg(o, s, r);
      return;
    case "client_secret_post":
      yg(o, s, n);
      return;
    case "none":
      vg(o, n);
      return;
    default:
      throw new Error(`Unsupported client authentication method: ${e}`);
  }
}
function gg(e, t, r) {
  if (!t)
    throw new Error("client_secret_basic authentication requires a client_secret");
  const n = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${n}`);
}
function yg(e, t, r) {
  r.set("client_id", e), t && r.set("client_secret", t);
}
function vg(e, t) {
  t.set("client_id", e);
}
async function Rc(e) {
  const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
  try {
    const n = ig.parse(JSON.parse(r)), { error: o, error_description: s, error_uri: a } = n, i = hg[o] || At;
    return new i(s || "", a);
  } catch (n) {
    const o = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${n}. Raw body: ${r}`;
    return new At(o);
  }
}
async function vt(e, t) {
  var r, n;
  try {
    return await Wn(e, t);
  } catch (o) {
    if (o instanceof cn || o instanceof ln)
      return await ((r = e.invalidateCredentials) == null ? void 0 : r.call(e, "all")), await Wn(e, t);
    if (o instanceof un)
      return await ((n = e.invalidateCredentials) == null ? void 0 : n.call(e, "tokens")), await Wn(e, t);
    throw o;
  }
}
async function Wn(e, { serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: o, fetchFn: s }) {
  var d, p, S, f, $;
  const a = await ((d = e.discoveryState) == null ? void 0 : d.call(e));
  let i, c, u, l = o;
  if (!l && (a != null && a.resourceMetadataUrl) && (l = new URL(a.resourceMetadataUrl)), a != null && a.authorizationServerUrl) {
    if (c = a.authorizationServerUrl, i = a.resourceMetadata, u = a.authorizationServerMetadata ?? await Ic(c, { fetchFn: s }), !i)
      try {
        i = await Cc(t, { resourceMetadataUrl: l }, s);
      } catch {
      }
    (u !== a.authorizationServerMetadata || i !== a.resourceMetadata) && await ((p = e.saveDiscoveryState) == null ? void 0 : p.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: u
    }));
  } else {
    const k = await Tg(t, { resourceMetadataUrl: l, fetchFn: s });
    c = k.authorizationServerUrl, u = k.authorizationServerMetadata, i = k.resourceMetadata, await ((S = e.saveDiscoveryState) == null ? void 0 : S.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: u
    }));
  }
  const g = await $g(t, e, i);
  let _ = await Promise.resolve(e.clientInformation());
  if (!_) {
    if (r !== void 0)
      throw new Error("Existing OAuth client information is required when exchanging an authorization code");
    const k = (u == null ? void 0 : u.client_id_metadata_document_supported) === !0, I = e.clientMetadataUrl;
    if (I && !wg(I))
      throw new dn(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${I}`);
    if (k && I)
      _ = {
        client_id: I
      }, await ((f = e.saveClientInformation) == null ? void 0 : f.call(e, _));
    else {
      if (!e.saveClientInformation)
        throw new Error("OAuth client information must be saveable for dynamic registration");
      const V = await Og(c, {
        metadata: u,
        clientMetadata: e.clientMetadata,
        fetchFn: s
      });
      await e.saveClientInformation(V), _ = V;
    }
  }
  const y = !e.redirectUrl;
  if (r !== void 0 || y) {
    const k = await Ig(e, c, {
      metadata: u,
      resource: g,
      authorizationCode: r,
      fetchFn: s
    });
    return await e.saveTokens(k), "AUTHORIZED";
  }
  const v = await e.tokens();
  if (v != null && v.refresh_token)
    try {
      const k = await Cg(c, {
        metadata: u,
        clientInformation: _,
        refreshToken: v.refresh_token,
        resource: g,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: s
      });
      return await e.saveTokens(k), "AUTHORIZED";
    } catch (k) {
      if (!(!(k instanceof Ee) || k instanceof At)) throw k;
    }
  const w = e.state ? await e.state() : void 0, { authorizationUrl: h, codeVerifier: m } = await Pg(c, {
    metadata: u,
    clientInformation: _,
    state: w,
    redirectUrl: e.redirectUrl,
    scope: n || (($ = i == null ? void 0 : i.scopes_supported) == null ? void 0 : $.join(" ")) || e.clientMetadata.scope,
    resource: g
  });
  return await e.saveCodeVerifier(m), await e.redirectToAuthorization(h), "REDIRECT";
}
function wg(e) {
  if (!e)
    return !1;
  try {
    const t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function $g(e, t, r) {
  const n = dg(e);
  if (t.validateResourceURL)
    return await t.validateResourceURL(n, r == null ? void 0 : r.resource);
  if (r) {
    if (!fg({ requestedResource: n, configuredResource: r.resource }))
      throw new Error(`Protected resource ${r.resource} does not match expected ${n} (or origin)`);
    return new URL(r.resource);
  }
}
function fn(e) {
  const t = e.headers.get("WWW-Authenticate");
  if (!t)
    return {};
  const [r, n] = t.split(" ");
  if (r.toLowerCase() !== "bearer" || !n)
    return {};
  const o = Gn(e, "resource_metadata") || void 0;
  let s;
  if (o)
    try {
      s = new URL(o);
    } catch {
    }
  const a = Gn(e, "scope") || void 0, i = Gn(e, "error") || void 0;
  return {
    resourceMetadataUrl: s,
    scope: a,
    error: i
  };
}
function Gn(e, t) {
  const r = e.headers.get("WWW-Authenticate");
  if (!r)
    return null;
  const n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`), o = r.match(n);
  return o ? o[1] || o[2] : null;
}
async function Cc(e, t, r = fetch) {
  var o, s;
  const n = await kg(e, "oauth-protected-resource", r, {
    protocolVersion: t == null ? void 0 : t.protocolVersion,
    metadataUrl: t == null ? void 0 : t.resourceMetadataUrl
  });
  if (!n || n.status === 404)
    throw await ((o = n == null ? void 0 : n.body) == null ? void 0 : o.cancel()), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!n.ok)
    throw await ((s = n.body) == null ? void 0 : s.cancel()), new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
  return ng.parse(await n.json());
}
async function es(e, t, r = fetch) {
  try {
    return await r(e, { headers: t });
  } catch (n) {
    if (n instanceof TypeError)
      return t ? es(e, void 0, r) : void 0;
    throw n;
  }
}
function bg(e, t = "", r = {}) {
  return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Qa(e, t, r = fetch) {
  return await es(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function Sg(e, t) {
  return !e || e.status >= 400 && e.status < 500 && t !== "/";
}
async function kg(e, t, r, n) {
  const o = new URL(e), s = (n == null ? void 0 : n.protocolVersion) ?? yn;
  let a;
  if (n != null && n.metadataUrl)
    a = new URL(n.metadataUrl);
  else {
    const c = bg(t, o.pathname);
    a = new URL(c, (n == null ? void 0 : n.metadataServerUrl) ?? o), a.search = o.search;
  }
  let i = await Qa(a, s, r);
  if (!(n != null && n.metadataUrl) && Sg(i, o.pathname)) {
    const c = new URL(`/.well-known/${t}`, o);
    i = await Qa(c, s, r);
  }
  return i;
}
function Eg(e) {
  const t = typeof e == "string" ? new URL(e) : e, r = t.pathname !== "/", n = [];
  if (!r)
    return n.push({
      url: new URL("/.well-known/oauth-authorization-server", t.origin),
      type: "oauth"
    }), n.push({
      url: new URL("/.well-known/openid-configuration", t.origin),
      type: "oidc"
    }), n;
  let o = t.pathname;
  return o.endsWith("/") && (o = o.slice(0, -1)), n.push({
    url: new URL(`/.well-known/oauth-authorization-server${o}`, t.origin),
    type: "oauth"
  }), n.push({
    url: new URL(`/.well-known/openid-configuration${o}`, t.origin),
    type: "oidc"
  }), n.push({
    url: new URL(`${o}/.well-known/openid-configuration`, t.origin),
    type: "oidc"
  }), n;
}
async function Ic(e, { fetchFn: t = fetch, protocolVersion: r = yn } = {}) {
  var s;
  const n = {
    "MCP-Protocol-Version": r,
    Accept: "application/json"
  }, o = Eg(e);
  for (const { url: a, type: i } of o) {
    const c = await es(a, n, t);
    if (c) {
      if (!c.ok) {
        if (await ((s = c.body) == null ? void 0 : s.cancel()), c.status >= 400 && c.status < 500)
          continue;
        throw new Error(`HTTP ${c.status} trying to load ${i === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${a}`);
      }
      return i === "oauth" ? Pc.parse(await c.json()) : sg.parse(await c.json());
    }
  }
}
async function Tg(e, t) {
  let r, n;
  try {
    r = await Cc(e, { resourceMetadataUrl: t == null ? void 0 : t.resourceMetadataUrl }, t == null ? void 0 : t.fetchFn), r.authorization_servers && r.authorization_servers.length > 0 && (n = r.authorization_servers[0]);
  } catch {
  }
  n || (n = String(new URL("/", e)));
  const o = await Ic(n, { fetchFn: t == null ? void 0 : t.fetchFn });
  return {
    authorizationServerUrl: n,
    authorizationServerMetadata: o,
    resourceMetadata: r
  };
}
async function Pg(e, { metadata: t, clientInformation: r, redirectUrl: n, scope: o, state: s, resource: a }) {
  let i;
  if (t) {
    if (i = new URL(t.authorization_endpoint), !t.response_types_supported.includes(Kn))
      throw new Error(`Incompatible auth server: does not support response type ${Kn}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(Jn))
      throw new Error(`Incompatible auth server: does not support code challenge method ${Jn}`);
  } else
    i = new URL("/authorize", e);
  const c = await rg(), u = c.code_verifier, l = c.code_challenge;
  return i.searchParams.set("response_type", Kn), i.searchParams.set("client_id", r.client_id), i.searchParams.set("code_challenge", l), i.searchParams.set("code_challenge_method", Jn), i.searchParams.set("redirect_uri", String(n)), s && i.searchParams.set("state", s), o && i.searchParams.set("scope", o), o != null && o.includes("offline_access") && i.searchParams.append("prompt", "consent"), a && i.searchParams.set("resource", a.href), { authorizationUrl: i, codeVerifier: u };
}
function Rg(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r)
  });
}
async function Oc(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: a }) {
  const i = t != null && t.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), c = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  });
  if (s && r.set("resource", s.href), o)
    await o(c, r, i, t);
  else if (n) {
    const l = (t == null ? void 0 : t.token_endpoint_auth_methods_supported) ?? [], g = mg(n, l);
    _g(g, n, c, r);
  }
  const u = await (a ?? fetch)(i, {
    method: "POST",
    headers: c,
    body: r
  });
  if (!u.ok)
    throw await Rc(u);
  return ag.parse(await u.json());
}
async function Cg(e, { metadata: t, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: a }) {
  const i = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: n
  }), c = await Oc(e, {
    metadata: t,
    tokenRequestParams: i,
    clientInformation: r,
    addClientAuthentication: s,
    resource: o,
    fetchFn: a
  });
  return { refresh_token: n, ...c };
}
async function Ig(e, t, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
  const a = e.clientMetadata.scope;
  let i;
  if (e.prepareTokenRequest && (i = await e.prepareTokenRequest(a)), !i) {
    if (!o)
      throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl)
      throw new Error("redirectUrl is required for authorization_code flow");
    const u = await e.codeVerifier();
    i = Rg(o, u, e.redirectUrl);
  }
  const c = await e.clientInformation();
  return Oc(t, {
    metadata: r,
    tokenRequestParams: i,
    clientInformation: c ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: n,
    fetchFn: s
  });
}
async function Og(e, { metadata: t, clientMetadata: r, fetchFn: n }) {
  let o;
  if (t) {
    if (!t.registration_endpoint)
      throw new Error("Incompatible auth server: does not support dynamic client registration");
    o = new URL(t.registration_endpoint);
  } else
    o = new URL("/register", e);
  const s = await (n ?? fetch)(o, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(r)
  });
  if (!s.ok)
    throw await Rc(s);
  return lg.parse(await s.json());
}
class Ng extends Error {
  constructor(t, r, n) {
    super(`SSE error: ${r}`), this.code = t, this.event = n;
  }
}
class zg {
  constructor(t, r) {
    this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = r == null ? void 0 : r.eventSourceInit, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = Tc(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit);
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new Xe("No auth provider");
    let t;
    try {
      t = await vt(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (n) {
      throw (r = this.onerror) == null || r.call(this, n), n;
    }
    if (t !== "AUTHORIZED")
      throw new Xe();
    return await this._startOrAuth();
  }
  async _commonHeaders() {
    var n;
    const t = {};
    if (this._authProvider) {
      const o = await this._authProvider.tokens();
      o && (t.Authorization = `Bearer ${o.access_token}`);
    }
    this._protocolVersion && (t["mcp-protocol-version"] = this._protocolVersion);
    const r = an((n = this._requestInit) == null ? void 0 : n.headers);
    return new Headers({
      ...t,
      ...r
    });
  }
  _startOrAuth() {
    var r;
    const t = ((r = this == null ? void 0 : this._eventSourceInit) == null ? void 0 : r.fetch) ?? this._fetch ?? fetch;
    return new Promise((n, o) => {
      this._eventSource = new Qr(this._url.href, {
        ...this._eventSourceInit,
        fetch: async (s, a) => {
          const i = await this._commonHeaders();
          i.set("Accept", "text/event-stream");
          const c = await t(s, {
            ...a,
            headers: i
          });
          if (c.status === 401 && c.headers.has("www-authenticate")) {
            const { resourceMetadataUrl: u, scope: l } = fn(c);
            this._resourceMetadataUrl = u, this._scope = l;
          }
          return c;
        }
      }), this._abortController = new AbortController(), this._eventSource.onerror = (s) => {
        var i;
        if (s.code === 401 && this._authProvider) {
          this._authThenStart().then(n, o);
          return;
        }
        const a = new Ng(s.code, s.message, s);
        o(a), (i = this.onerror) == null || i.call(this, a);
      }, this._eventSource.onopen = () => {
      }, this._eventSource.addEventListener("endpoint", (s) => {
        var i;
        const a = s;
        try {
          if (this._endpoint = new URL(a.data, this._url), this._endpoint.origin !== this._url.origin)
            throw new Error(`Endpoint origin does not match connection origin: ${this._endpoint.origin}`);
        } catch (c) {
          o(c), (i = this.onerror) == null || i.call(this, c), this.close();
          return;
        }
        n();
      }), this._eventSource.onmessage = (s) => {
        var c, u;
        const a = s;
        let i;
        try {
          i = Wr.parse(JSON.parse(a.data));
        } catch (l) {
          (c = this.onerror) == null || c.call(this, l);
          return;
        }
        (u = this.onmessage) == null || u.call(this, i);
      };
    });
  }
  async start() {
    if (this._eventSource)
      throw new Error("SSEClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return await this._startOrAuth();
  }
  /**
   * Call this method after the user has finished authorizing via their user agent and is redirected back to the MCP client application. This will exchange the authorization code for an access token, enabling the next connection attempt to successfully auth.
   */
  async finishAuth(t) {
    if (!this._authProvider)
      throw new Xe("No auth provider");
    if (await vt(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: t,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    }) !== "AUTHORIZED")
      throw new Xe("Failed to authorize");
  }
  async close() {
    var t, r, n;
    (t = this._abortController) == null || t.abort(), (r = this._eventSource) == null || r.close(), (n = this.onclose) == null || n.call(this);
  }
  async send(t) {
    var r, n, o;
    if (!this._endpoint)
      throw new Error("Not connected");
    try {
      const s = await this._commonHeaders();
      s.set("content-type", "application/json");
      const a = {
        ...this._requestInit,
        method: "POST",
        headers: s,
        body: JSON.stringify(t),
        signal: (r = this._abortController) == null ? void 0 : r.signal
      }, i = await (this._fetch ?? fetch)(this._endpoint, a);
      if (!i.ok) {
        const c = await i.text().catch(() => null);
        if (i.status === 401 && this._authProvider) {
          const { resourceMetadataUrl: u, scope: l } = fn(i);
          if (this._resourceMetadataUrl = u, this._scope = l, await vt(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED")
            throw new Xe();
          return this.send(t);
        }
        throw new Error(`Error POSTing to endpoint (HTTP ${i.status}): ${c}`);
      }
      await ((n = i.body) == null ? void 0 : n.cancel());
    } catch (s) {
      throw (o = this.onerror) == null || o.call(this, s), s;
    }
  }
  setProtocolVersion(t) {
    this._protocolVersion = t;
  }
}
class jg extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let o;
    super({
      start(s) {
        o = kc({
          onEvent: (a) => {
            s.enqueue(a);
          },
          onError(a) {
            t === "terminate" ? s.error(a) : typeof t == "function" && t(a);
          },
          onRetry: r,
          onComment: n
        });
      },
      transform(s) {
        o.feed(s);
      }
    });
  }
}
const qg = {
  initialReconnectionDelay: 1e3,
  maxReconnectionDelay: 3e4,
  reconnectionDelayGrowFactor: 1.5,
  maxRetries: 2
};
class kt extends Error {
  constructor(t, r) {
    super(`Streamable HTTP error: ${r}`), this.code = t;
  }
}
class Mg {
  constructor(t, r) {
    this._hasCompletedAuthFlow = !1, this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = Tc(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit), this._sessionId = r == null ? void 0 : r.sessionId, this._reconnectionOptions = (r == null ? void 0 : r.reconnectionOptions) ?? qg;
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new Xe("No auth provider");
    let t;
    try {
      t = await vt(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (n) {
      throw (r = this.onerror) == null || r.call(this, n), n;
    }
    if (t !== "AUTHORIZED")
      throw new Xe();
    return await this._startOrAuthSse({ resumptionToken: void 0 });
  }
  async _commonHeaders() {
    var n;
    const t = {};
    if (this._authProvider) {
      const o = await this._authProvider.tokens();
      o && (t.Authorization = `Bearer ${o.access_token}`);
    }
    this._sessionId && (t["mcp-session-id"] = this._sessionId), this._protocolVersion && (t["mcp-protocol-version"] = this._protocolVersion);
    const r = an((n = this._requestInit) == null ? void 0 : n.headers);
    return new Headers({
      ...t,
      ...r
    });
  }
  async _startOrAuthSse(t) {
    var n, o, s;
    const { resumptionToken: r } = t;
    try {
      const a = await this._commonHeaders();
      a.set("Accept", "text/event-stream"), r && a.set("last-event-id", r);
      const i = await (this._fetch ?? fetch)(this._url, {
        method: "GET",
        headers: a,
        signal: (n = this._abortController) == null ? void 0 : n.signal
      });
      if (!i.ok) {
        if (await ((o = i.body) == null ? void 0 : o.cancel()), i.status === 401 && this._authProvider)
          return await this._authThenStart();
        if (i.status === 405)
          return;
        throw new kt(i.status, `Failed to open SSE stream: ${i.statusText}`);
      }
      this._handleSseStream(i.body, t, !0);
    } catch (a) {
      throw (s = this.onerror) == null || s.call(this, a), a;
    }
  }
  /**
   * Calculates the next reconnection delay using  backoff algorithm
   *
   * @param attempt Current reconnection attempt count for the specific stream
   * @returns Time to wait in milliseconds before next reconnection attempt
   */
  _getNextReconnectionDelay(t) {
    if (this._serverRetryMs !== void 0)
      return this._serverRetryMs;
    const r = this._reconnectionOptions.initialReconnectionDelay, n = this._reconnectionOptions.reconnectionDelayGrowFactor, o = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(r * Math.pow(n, t), o);
  }
  /**
   * Schedule a reconnection attempt using server-provided retry interval or backoff
   *
   * @param lastEventId The ID of the last received event for resumability
   * @param attemptCount Current reconnection attempt count for this specific stream
   */
  _scheduleReconnection(t, r = 0) {
    var s;
    const n = this._reconnectionOptions.maxRetries;
    if (r >= n) {
      (s = this.onerror) == null || s.call(this, new Error(`Maximum reconnection attempts (${n}) exceeded.`));
      return;
    }
    const o = this._getNextReconnectionDelay(r);
    this._reconnectionTimeout = setTimeout(() => {
      this._startOrAuthSse(t).catch((a) => {
        var i;
        (i = this.onerror) == null || i.call(this, new Error(`Failed to reconnect SSE stream: ${a instanceof Error ? a.message : String(a)}`)), this._scheduleReconnection(t, r + 1);
      });
    }, o);
  }
  _handleSseStream(t, r, n) {
    if (!t)
      return;
    const { onresumptiontoken: o, replayMessageId: s } = r;
    let a, i = !1, c = !1;
    (async () => {
      var l, g, _, y;
      try {
        const v = t.pipeThrough(new TextDecoderStream()).pipeThrough(new jg({
          onRetry: (m) => {
            this._serverRetryMs = m;
          }
        })).getReader();
        for (; ; ) {
          const { value: m, done: d } = await v.read();
          if (d)
            break;
          if (m.id && (a = m.id, i = !0, o == null || o(m.id)), !!m.data && (!m.event || m.event === "message"))
            try {
              const p = Wr.parse(JSON.parse(m.data));
              Kt(p) && (c = !0, s !== void 0 && (p.id = s)), (l = this.onmessage) == null || l.call(this, p);
            } catch (p) {
              (g = this.onerror) == null || g.call(this, p);
            }
        }
        (n || i) && !c && this._abortController && !this._abortController.signal.aborted && this._scheduleReconnection({
          resumptionToken: a,
          onresumptiontoken: o,
          replayMessageId: s
        }, 0);
      } catch (v) {
        if ((_ = this.onerror) == null || _.call(this, new Error(`SSE stream disconnected: ${v}`)), (n || i) && !c && this._abortController && !this._abortController.signal.aborted)
          try {
            this._scheduleReconnection({
              resumptionToken: a,
              onresumptiontoken: o,
              replayMessageId: s
            }, 0);
          } catch (m) {
            (y = this.onerror) == null || y.call(this, new Error(`Failed to reconnect: ${m instanceof Error ? m.message : String(m)}`));
          }
      }
    })();
  }
  async start() {
    if (this._abortController)
      throw new Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController();
  }
  /**
   * Call this method after the user has finished authorizing via their user agent and is redirected back to the MCP client application. This will exchange the authorization code for an access token, enabling the next connection attempt to successfully auth.
   */
  async finishAuth(t) {
    if (!this._authProvider)
      throw new Xe("No auth provider");
    if (await vt(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: t,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    }) !== "AUTHORIZED")
      throw new Xe("Failed to authorize");
  }
  async close() {
    var t, r;
    this._reconnectionTimeout && (clearTimeout(this._reconnectionTimeout), this._reconnectionTimeout = void 0), (t = this._abortController) == null || t.abort(), (r = this.onclose) == null || r.call(this);
  }
  async send(t, r) {
    var n, o, s, a, i, c;
    try {
      const { resumptionToken: u, onresumptiontoken: l } = r || {};
      if (u) {
        this._startOrAuthSse({ resumptionToken: u, replayMessageId: eo(t) ? t.id : void 0 }).catch((d) => {
          var p;
          return (p = this.onerror) == null ? void 0 : p.call(this, d);
        });
        return;
      }
      const g = await this._commonHeaders();
      g.set("content-type", "application/json"), g.set("accept", "application/json, text/event-stream");
      const _ = {
        ...this._requestInit,
        method: "POST",
        headers: g,
        body: JSON.stringify(t),
        signal: (n = this._abortController) == null ? void 0 : n.signal
      }, y = await (this._fetch ?? fetch)(this._url, _), v = y.headers.get("mcp-session-id");
      if (v && (this._sessionId = v), !y.ok) {
        const d = await y.text().catch(() => null);
        if (y.status === 401 && this._authProvider) {
          if (this._hasCompletedAuthFlow)
            throw new kt(401, "Server returned 401 after successful authentication");
          const { resourceMetadataUrl: p, scope: S } = fn(y);
          if (this._resourceMetadataUrl = p, this._scope = S, await vt(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED")
            throw new Xe();
          return this._hasCompletedAuthFlow = !0, this.send(t);
        }
        if (y.status === 403 && this._authProvider) {
          const { resourceMetadataUrl: p, scope: S, error: f } = fn(y);
          if (f === "insufficient_scope") {
            const $ = y.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === $)
              throw new kt(403, "Server returned 403 after trying upscoping");
            if (S && (this._scope = S), p && (this._resourceMetadataUrl = p), this._lastUpscopingHeader = $ ?? void 0, await vt(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            }) !== "AUTHORIZED")
              throw new Xe();
            return this.send(t);
          }
        }
        throw new kt(y.status, `Error POSTing to endpoint: ${d}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, y.status === 202) {
        await ((o = y.body) == null ? void 0 : o.cancel()), hp(t) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((d) => {
          var p;
          return (p = this.onerror) == null ? void 0 : p.call(this, d);
        });
        return;
      }
      const h = (Array.isArray(t) ? t : [t]).filter((d) => "method" in d && "id" in d && d.id !== void 0).length > 0, m = y.headers.get("content-type");
      if (h)
        if (m != null && m.includes("text/event-stream"))
          this._handleSseStream(y.body, { onresumptiontoken: l }, !1);
        else if (m != null && m.includes("application/json")) {
          const d = await y.json(), p = Array.isArray(d) ? d.map((S) => Wr.parse(S)) : [Wr.parse(d)];
          for (const S of p)
            (s = this.onmessage) == null || s.call(this, S);
        } else
          throw await ((a = y.body) == null ? void 0 : a.cancel()), new kt(-1, `Unexpected content type: ${m}`);
      else
        await ((i = y.body) == null ? void 0 : i.cancel());
    } catch (u) {
      throw (c = this.onerror) == null || c.call(this, u), u;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  /**
   * Terminates the current session by sending a DELETE request to the server.
   *
   * Clients that no longer need a particular session
   * (e.g., because the user is leaving the client application) SHOULD send an
   * HTTP DELETE to the MCP endpoint with the Mcp-Session-Id header to explicitly
   * terminate the session.
   *
   * The server MAY respond with HTTP 405 Method Not Allowed, indicating that
   * the server does not allow clients to terminate sessions.
   */
  async terminateSession() {
    var t, r, n;
    if (this._sessionId)
      try {
        const o = await this._commonHeaders(), s = {
          ...this._requestInit,
          method: "DELETE",
          headers: o,
          signal: (t = this._abortController) == null ? void 0 : t.signal
        }, a = await (this._fetch ?? fetch)(this._url, s);
        if (await ((r = a.body) == null ? void 0 : r.cancel()), !a.ok && a.status !== 405)
          throw new kt(a.status, `Failed to terminate session: ${a.statusText}`);
        this._sessionId = void 0;
      } catch (o) {
        throw (n = this.onerror) == null || n.call(this, o), o;
      }
  }
  setProtocolVersion(t) {
    this._protocolVersion = t;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  /**
   * Resume an SSE stream from a previous event ID.
   * Opens a GET SSE connection with Last-Event-ID header to replay missed events.
   *
   * @param lastEventId The event ID to resume from
   * @param options Optional callback to receive new resumption tokens
   */
  async resumeStream(t, r) {
    await this._startOrAuthSse({
      resumptionToken: t,
      onresumptiontoken: r == null ? void 0 : r.onresumptiontoken
    });
  }
}
const Ag = async (e, t) => {
  const r = await ts(e, t);
  if (!r)
    return await e.ui.messageBoxes.show("error", "Could not find constant.", "This constant might have been deleted or renamed. Please update the tool constant selection.");
  await e.ui.editors.editDocument(r.$ID);
}, Tn = async (e, t) => {
  const r = await ts(e, t);
  return r ? r.defaultValue : "";
}, Nc = async (e, t) => {
  const r = await ts(e, t);
  return (r == null ? void 0 : r.type.$Type) === "DataTypes$StringType" || !1;
}, ts = async (e, t) => {
  const [r, n] = t.split(".");
  if (!r || !n)
    return null;
  const o = await e.app.model.constants.loadAll(
    (s) => s.moduleName === r && s.name === n
  );
  return o.length > 0 ? o[0] : null;
};
async function zc(e, t, r, n) {
  return r.debug(`Connecting to server at: ${e}`), await Dg(e, t, r);
}
async function jc(e, t) {
  t.debug("Disconnecting from MCP server..."), e.client.onerror = void 0, await e.transport.close(), t.debug("Disconnected from MCP server");
}
async function Dg(e, t, r) {
  r.debug("1. Trying Streamable HTTP transport first...");
  const n = new Ha({
    name: "backwards-compatible-client",
    version: t
  });
  n.onerror = (s) => {
    r.error("Client error:", s);
  };
  const o = new URL(e);
  try {
    const s = new Mg(o);
    return await n.connect(s), r.debug("Successfully connected using modern Streamable HTTP transport."), {
      client: n,
      transport: s,
      transportType: "streamable-http"
    };
  } catch (s) {
    r.debug(`StreamableHttp transport connection failed: ${s}`), r.debug("2. Falling back to deprecated HTTP+SSE transport...");
    try {
      const a = new zg(o), i = new Ha({
        name: "backwards-compatible-client",
        version: t
      });
      return await i.connect(a), r.debug("Successfully connected using deprecated HTTP+SSE transport."), {
        client: i,
        transport: a,
        transportType: "sse"
      };
    } catch (a) {
      throw r.error(
        `Failed to connect with either transport method:
1. Streamable HTTP error: ${s}
2. SSE error: ${a}`
      ), new Error("Could not connect to server with any available transport");
    }
  }
}
async function Ug(e, t) {
  try {
    const r = {
      method: "tools/list",
      params: {}
    }, n = await e.request(r, Wo);
    t.debug(`Found ${n.tools.length} tools`);
    for (const o of n.tools)
      t.debug(`  - ${o.name}: ${o.description}`);
    return n.tools;
  } catch (r) {
    return t.error(`Tools not supported by this server: ${r}`), [];
  }
}
const Vg = async (e, t) => {
  const r = ei(e), n = await Tn(e, t.endpoint);
  if (n === "")
    return r.error(`MCP endpoint constant ${t.endpoint} does not have a value.`), "Endpoint constant not found.";
  try {
    const o = await zc(n, t.version, r);
    return await jc(o, r), !0;
  } catch (o) {
    return r.error(`Failed to connect to MCP server at ${n}: ${o}`), `Connection failed: ${o}`;
  }
}, Zg = async (e, t) => {
  const r = ei(e), n = await Tn(e, t.endpoint);
  if (n === "")
    return r.error(`MCP endpoint constant ${t.endpoint} does not have a value.`), [];
  const o = await zc(n, t.version, r);
  if (!o)
    return r.error(`Failed to establish MCP connection to endpoint ${n}.`), [];
  const s = await Ug(o.client, r);
  return await jc(o, r), s;
}, Lg = async (e, t) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (r.status === "ok")
    return {
      ...t,
      endpoint: r.selected.module + "." + r.selected.name
    };
  if (r.status === "none")
    return { ...t, endpoint: "" };
}, xt = async (e, t, r) => {
  switch (e) {
    case "endpoint":
      if (!t.endpoint || t.endpoint.trim() === "")
        return "Endpoint cannot be empty.";
      if (await Nc(r, t.endpoint) === !1)
        return "Selected constant must be of type string.";
      if (await Tn(r, t.endpoint) === "")
        return `Constant ${t.endpoint} does not have a value.`;
      break;
    case "version":
      if (!t.version || t.version.trim() === "")
        return "Version cannot be empty.";
      break;
    case "protocolVersion":
      if (!t.protocolVersion || t.protocolVersion.trim() === "")
        return "Protocol version cannot be empty.";
      break;
    case "connectionTimeoutSeconds":
      if (t.connectionTimeoutSeconds !== void 0 && t.connectionTimeoutSeconds <= 0)
        return "Connection timeout must be greater than 0 (or empty).";
      break;
    case "authenticationMicroflow": {
      if (t.authenticationMicroflow) {
        const n = await Wc(
          r,
          t.authenticationMicroflow || ""
        );
        if (n === null)
          return "Selected microflow does not exist.";
        const o = n.objectCollection.objects, s = o == null ? void 0 : o.filter(
          (a) => a.$Type === "Microflows$MicroflowParameterObject"
        );
        if (s && s.length > 0)
          return "Authentication microflow cannot have input parameters.";
        if (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== Gc.HttpHeader)
          return "Authentication microflow must return a list of System.HttpHeader objects.";
      }
      break;
    }
    default:
      return !0;
  }
  return !0;
}, Ya = async (e, t, r) => ({ ...e, [t]: r }), Fg = async (e, t) => {
  var o;
  const r = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => {
        const s = await Vg(e, t);
        return typeof s == "string" ? s : !0;
      }
    }
  ], n = await e.ui.dialogs.showProgressDialog("Testing connection", r);
  switch (n.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const s = "No connection.", a = `Make sure you are connected to the internet and check if your key still exists in the Mendix GenAI portal and try again.
` + (((o = n.failedStep) == null ? void 0 : o.error) ?? "");
      return e.ui.messageBoxes.show("error", s, a), !1;
    }
  }
}, xg = async (e, t) => {
  var s;
  let r = [];
  const n = [
    {
      title: "Getting available tools",
      description: "Getting available tools",
      action: async () => {
        try {
          return r = await Zg(e, t), !0;
        } catch (a) {
          return a instanceof Error ? a.message : "Failed to load tools.";
        }
      }
    }
  ], o = await e.ui.dialogs.showProgressDialog("Getting available tools", n);
  switch (o.result) {
    case "Success":
      return r;
    case "UserCancelled":
      return [];
    case "Failure": {
      const a = "Failed to load tools.", i = `Check your connection and make sure your MCP server is available, then try again.
` + (((s = o.failedStep) == null ? void 0 : s.error) ?? "");
      return e.ui.messageBoxes.show("error", a, i), [];
    }
  }
}, Hg = async (e, t) => {
  const r = await e.ui.elementSelectors.selectDocument({
    query: { elementType: "Microflows$Microflow" }
  });
  return r.status === "ok" ? {
    ...t,
    authenticationMicroflow: r.selected.module + "." + r.selected.name
  } : null;
}, Kg = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%235BDB5B'%20stroke-linejoin='round'/%3e%3c/svg%3e", Jg = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%203.5H4.19C2.92%203.5%202.5%204.77%202.5%204.77'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.9248%2012.5C2.9248%2012.5%205.6498%2011.95%205.4998%203.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.46%2012.5C11.815%2012.5%2010.5%2011.445%2010.5%209.96V3.5'%20stroke='%230D990D'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var Wg = Object.defineProperty, Gg = (e, t) => Wg(e, "name", { value: t, configurable: !0 });
const Bg = Gg((e) => de.jsx(Mc, { light: Jg, dark: Kg, ...e }), "ConstantIcon"), Qg = {
  isValidEndpoint: !0,
  isValidProtocolVersion: !0,
  isValidConnectionTimeout: !0,
  isValidAuthenticationMicroflow: !0
}, Yg = {
  endpoint: "isValidEndpoint",
  protocolVersion: "isValidProtocolVersion",
  connectionTimeoutSeconds: "isValidConnectionTimeout"
}, Xg = ou.map(
  (e) => ({
    key: e,
    caption: e
  })
), ey = ({
  loadedConsumedMCPService: e,
  studioPro: t,
  updateStudioProDocument: r
}) => {
  var q;
  const [n, o] = be.useState(e), [s, a] = be.useState(Qg), [i, c] = be.useState(!1), [u, l] = be.useState(!0), [g, _] = be.useState([]), [y, v] = be.useState(!1), [w, h] = be.useState(null), [m, d] = be.useState(
    ((q = e.connectionTimeoutSeconds) == null ? void 0 : q.toString()) ?? ""
  ), [p, S] = be.useState(null), f = be.useRef(null), $ = be.useRef(null);
  be.useEffect(() => {
    if (i) {
      const P = setTimeout(() => {
        c(!1);
      }, 5e3);
      return () => clearTimeout(P);
    }
  }, [i]), be.useEffect(() => () => {
    f.current && clearTimeout(f.current), $.current && clearTimeout($.current);
  }, []);
  const k = be.useCallback(
    async (P) => ({
      isValidEndpoint: await xt("endpoint", P, t),
      isValidProtocolVersion: await xt(
        "protocolVersion",
        P,
        t
      ),
      isValidConnectionTimeout: await xt(
        "connectionTimeoutSeconds",
        P,
        t
      ),
      isValidAuthenticationMicroflow: await xt(
        "authenticationMicroflow",
        P,
        t
      )
    }),
    [t]
  ), I = async (P, b) => {
    const E = Yg[P];
    if (E) {
      const N = await xt(
        P,
        b,
        t
      );
      a((K) => ({ ...K, [E]: N }));
    }
  };
  be.useEffect(() => {
    (async () => {
      const b = await k(n);
      a(b);
    })();
  }, [k, n]);
  const M = be.useCallback(
    async (P) => {
      if (await Nc(t, P)) {
        const b = await Tn(t, P);
        S(b);
      } else
        S(null);
    },
    [t]
  );
  be.useEffect(() => {
    e.endpoint && M(e.endpoint);
  }, [e.endpoint, M]);
  const V = async () => {
    const P = await Lg(t, n);
    P && (o(P), r(P), I("endpoint", P), await M(P.endpoint));
  }, j = async () => {
    n.endpoint && Ag(t, n.endpoint);
  }, Z = (P) => async (b) => {
    const E = await Ya(
      n,
      P,
      b
    );
    o(E), r(E), I(P, E);
  }, x = (P) => (b) => {
    const E = { ...n, [P]: b };
    o(E), f.current && clearTimeout(f.current), f.current = setTimeout(async () => {
      const N = await Ya(
        E,
        P,
        b
      );
      o(N), r(N), I(P, N);
    }, 300);
  }, H = (P) => {
    if (P !== "" && !/^\d+$/.test(P))
      return;
    if (d(P), P === "") {
      o((N) => ({ ...N, connectionTimeoutSeconds: void 0 })), $.current && clearTimeout($.current), $.current = setTimeout(async () => {
        const N = { ...n, connectionTimeoutSeconds: void 0 };
        r(N), I("connectionTimeoutSeconds", N);
      }, 300);
      return;
    }
    const E = parseInt(P, 10);
    isNaN(E) || (o((N) => ({ ...N, connectionTimeoutSeconds: E })), $.current && clearTimeout($.current), $.current = setTimeout(async () => {
      const N = { ...n, connectionTimeoutSeconds: E };
      await r(N), await I("connectionTimeoutSeconds", N);
    }, 300));
  }, oe = async () => {
    const P = await Hg(t, n);
    P && (o(P), r(P), I("authenticationMicroflow", P));
  }, Te = async () => {
    n.authenticationMicroflow && Qc(t, n.authenticationMicroflow);
  }, Pe = async () => {
    c(!1);
    const P = await Fg(t, n);
    c(P);
  }, ie = () => {
    c(!1);
  }, Le = () => {
    l(!1);
  }, D = async () => {
    v(!1);
    const P = await xg(t, n);
    _(P), v(!0), h(/* @__PURE__ */ new Date());
  }, C = s.isValidEndpoint !== !0 || s.isValidProtocolVersion !== !0 || s.isValidConnectionTimeout !== !0 || s.isValidAuthenticationMicroflow !== !0;
  return /* @__PURE__ */ de.jsxs(Ac, { children: [
    /* @__PURE__ */ de.jsxs(Dc, { children: [
      /* @__PURE__ */ de.jsxs(In, { label: "General", children: [
        /* @__PURE__ */ de.jsx(
          as,
          {
            label: "Version",
            ariaLabel: "Version",
            value: n.version,
            onChange: x("version"),
            placeholder: "[1.0.0]"
          }
        ),
        /* @__PURE__ */ de.jsx(
          Xc,
          {
            label: "Documentation",
            "aria-label": "Documentation",
            value: n.documentation,
            onChange: x("documentation"),
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ de.jsxs(In, { label: "Configuration", children: [
        /* @__PURE__ */ de.jsx(
          os,
          {
            ariaLabel: "Endpoint",
            label: "Endpoint",
            value: n.endpoint ? n.endpoint : "",
            icon: n.endpoint ? /* @__PURE__ */ de.jsx(Bg, {}) : void 0,
            buttonCaption: "Select...",
            onClick: V,
            validate: () => s.isValidEndpoint,
            buttonCaptionSecondary: n.endpoint ? "Show" : void 0,
            onClickSecondary: n.endpoint ? j : void 0,
            description: s.isValidEndpoint === !0 ? "Selected constant value: " + p : void 0
          }
        ),
        u && /* @__PURE__ */ de.jsx(eu, { onClose: Le, children: "Limitation: Currently, only the default value of the constant can be considered for exploring tools in this editor. This does not apply for the running app. If configured in a running app, the constant value from the environment configuration will be used." }),
        /* @__PURE__ */ de.jsx(
          Yc,
          {
            ariaLabel: "Protocol version",
            label: "Protocol version",
            selectedKey: n.protocolVersion,
            options: Xg,
            onSelectionChange: Z("protocolVersion"),
            validate: () => s.isValidProtocolVersion
          }
        ),
        /* @__PURE__ */ de.jsx(
          os,
          {
            ariaLabel: "Credentials microflow",
            label: "Credentials microflow",
            value: n.authenticationMicroflow ? n.authenticationMicroflow : "",
            icon: n.authenticationMicroflow ? /* @__PURE__ */ de.jsx(Bc, {}) : void 0,
            description: "Optional: Select a microflow that generates credentials that can be used to authenticate to the MCP server. The microflow needs to return a list of System.HttpHeader objects. Input parameters are not allowed.",
            onClick: oe,
            buttonCaption: "Select...",
            buttonCaptionSecondary: n.authenticationMicroflow ? "Show" : void 0,
            onClickSecondary: n.authenticationMicroflow ? Te : void 0,
            validate: () => s.isValidAuthenticationMicroflow
          }
        ),
        /* @__PURE__ */ de.jsx(
          as,
          {
            label: "Connection timeout (seconds)",
            ariaLabel: "Connection timeout",
            value: m,
            description: "Optional: Connection timeout controls the maximum time to wait for a response from the MCP service.",
            onChange: H,
            validate: () => s.isValidConnectionTimeout
          }
        ),
        /* @__PURE__ */ de.jsx(
          ss,
          {
            label: "Connection",
            buttonCaption: "Test",
            onPress: Pe,
            disabled: C
          }
        ),
        i && /* @__PURE__ */ de.jsx(tu, { onClose: ie, children: "Connection successful." })
      ] })
    ] }),
    /* @__PURE__ */ de.jsx(Uc, { children: /* @__PURE__ */ de.jsxs(In, { label: "MCP explorer", children: [
      /* @__PURE__ */ de.jsx(
        ss,
        {
          label: "Tools",
          buttonCaption: "List tools",
          onPress: D,
          disabled: C
        }
      ),
      y && /* @__PURE__ */ de.jsxs(de.Fragment, { children: [
        w && /* @__PURE__ */ de.jsxs("div", { children: [
          "Last updated: ",
          w.toLocaleString()
        ] }),
        /* @__PURE__ */ de.jsx(
          ru,
          {
            ariaLabel: "Tools table",
            columns: [
              {
                id: "name",
                caption: "Name",
                resizable: !0,
                isRowHeader: !0,
                defaultWidth: 350
              },
              { id: "description", caption: "Description", resizable: !0 }
            ],
            data: g.map((P) => [
              /* @__PURE__ */ de.jsx(nu, { icon: Hc, text: P.name }),
              P.description
            ])
          }
        )
      ] })
    ] }) })
  ] });
}, ty = Kc(), ry = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [o, s] = be.useState(!1), [a, i] = be.useState(ty);
  return be.useEffect(() => {
    n.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const u = c.document.contents;
        s(!0), i(u);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch((c) => {
      r.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c), s(!0);
    });
  }, []), /* @__PURE__ */ de.jsx(Vc, { studioPro: e, children: /* @__PURE__ */ de.jsxs(Zc, { children: [
    !o && /* @__PURE__ */ de.jsx(xc, {}),
    o && /* @__PURE__ */ de.jsx(Lc, { children: /* @__PURE__ */ de.jsx(
      ey,
      {
        loadedConsumedMCPService: a,
        studioPro: e,
        updateStudioProDocument: Jc(e, t)
      }
    ) })
  ] }) });
}, py = Fc(ry);
export {
  py as component
};
//# sourceMappingURL=consumedMCPServiceEdit.js.map
