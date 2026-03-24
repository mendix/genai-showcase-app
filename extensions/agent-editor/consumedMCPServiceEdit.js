import { M as Ya, y as zc, r as Ze, w as fe, N as Nc, C as ss, G as Cn, O as jc, D as Mc, P as qc, E as Ac } from "./Icon-DjcrVRZV.js";
import { c as Uc, C as Dc } from "./CenteredLoadingSpinner-C-2fDE-r.js";
import { o as Zc, C as Vc, M as Lc, b as Fc, p as xc, k as Hc, q as Kc, r as Jc } from "./index-Chq3mA2y.js";
import { v as Wc, C as Vt, i as Gc, a as Bc, B as Qc } from "./ButtonWithLabel-DExfpPWr.js";
import { y as Yc, n as Xc } from "./MicroflowIcon-DiZtEKnf.js";
import { T as as } from "./TextInputLabeled-D01D1g1m.js";
import { T as On } from "./TextInputWithButton-DS64HwKN.js";
import { c as eu } from "./DesignSystemTokens-CB_9gr2a.js";
import { g as tu, h as ru } from "./modelUtils-Bx_f070p.js";
import { T as nu } from "./Table-CAHeG_cf.js";
import { T as ou } from "./TextWithIcon-BR0LcMCK.js";
const su = Object.freeze({
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
    for (let y = 0; y < l.length; y++) {
      const g = l[y];
      g in i || (i[g] = u[g].bind(i));
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
class zt extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Xa extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const ei = {};
function ct(e) {
  return ei;
}
function ti(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function Yn(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function pn(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function ko(e) {
  return e == null;
}
function Eo(e) {
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
function ue(e, t, r) {
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
const ri = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Yt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const cu = pn(() => {
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
  if (Yt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(Yt(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function ni(e) {
  return jt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const uu = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Mt(e) {
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
function It(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function ir(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function ut(e, t, r) {
  var o, s, a, i, c, u;
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const l = ir((a = (s = (o = e.inst) == null ? void 0 : o._zod.def) == null ? void 0 : s.error) == null ? void 0 : a.call(s, e)) ?? ir((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? ir((c = r.customError) == null ? void 0 : c.call(r, e)) ?? ir((u = r.localeError) == null ? void 0 : u.call(r, e)) ?? "Invalid input";
    n.message = l;
  }
  return delete n.inst, delete n.continue, t != null && t.reportInput || delete n.input, n;
}
function To(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Xt(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const oi = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Yn, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, si = z("$ZodError", oi), ai = z("$ZodError", oi, { Parent: Error });
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
const Po = (e) => (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new zt();
  if (a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => ut(c, s, ct())));
    throw ri(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, Ro = (e) => async (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => ut(c, s, ct())));
    throw ri(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, mn = (e) => (t, r, n) => {
  const o = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new zt();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? si)(s.issues.map((a) => ut(a, o, ct())))
  } : { success: !0, data: s.value };
}, ii = /* @__PURE__ */ mn(ai), _n = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => ut(a, o, ct())))
  } : { success: !0, data: s.value };
}, $u = /* @__PURE__ */ _n(ai), bu = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Po(e)(t, r, o);
}, Su = (e) => (t, r, n) => Po(e)(t, r, n), ku = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ro(e)(t, r, o);
}, Eu = (e) => async (t, r, n) => Ro(e)(t, r, n), Tu = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return mn(e)(t, r, o);
}, Pu = (e) => (t, r, n) => mn(e)(t, r, n), Ru = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return _n(e)(t, r, o);
}, Iu = (e) => async (t, r, n) => _n(e)(t, r, n), Cu = /^[cC][^\s-]{8,}$/, Ou = /^[0-9a-z]+$/, zu = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Nu = /^[0-9a-vA-V]{20}$/, ju = /^[A-Za-z0-9]{27}$/, Mu = /^[a-zA-Z0-9_-]{21}$/, qu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Au = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, us = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Uu = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Du = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Zu() {
  return new RegExp(Du, "u");
}
const Vu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Lu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Fu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, xu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Hu = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ci = /^[A-Za-z0-9_-]*$/, Ku = /^\+[1-9]\d{6,14}$/, ui = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ju = /* @__PURE__ */ new RegExp(`^${ui}$`);
function li(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Wu(e) {
  return new RegExp(`^${li(e)}$`);
}
function Gu(e) {
  const t = li({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${ui}T(?:${n})$`);
}
const Bu = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Qu = /^-?\d+$/, di = /^-?\d+(?:\.\d+)?$/, Yu = /^(?:true|false)$/i, Xu = /^null$/i, el = /^[^A-Z]*$/, tl = /^[^a-z]*$/, Le = /* @__PURE__ */ z("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), fi = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, hi = /* @__PURE__ */ z("$ZodCheckLessThan", (e, t) => {
  Le.init(e, t);
  const r = fi[typeof t.value];
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
}), pi = /* @__PURE__ */ z("$ZodCheckGreaterThan", (e, t) => {
  Le.init(e, t);
  const r = fi[typeof t.value];
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
  Le.init(e, t), e._zod.onattach.push((r) => {
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
  Le.init(e, t), t.format = t.format || "float64";
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
  Le.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !ko(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length <= t.maximum)
      return;
    const a = To(o);
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
  Le.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !ko(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length >= t.minimum)
      return;
    const a = To(o);
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
  Le.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !ko(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (n) => {
    const o = n.value, s = o.length;
    if (s === t.length)
      return;
    const a = To(o), i = s > t.length;
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
}), gn = /* @__PURE__ */ z("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  Le.init(e, t), e._zod.onattach.push((o) => {
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
  gn.init(e, t), e._zod.check = (r) => {
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
  t.pattern ?? (t.pattern = el), gn.init(e, t);
}), ul = /* @__PURE__ */ z("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = tl), gn.init(e, t);
}), ll = /* @__PURE__ */ z("$ZodCheckIncludes", (e, t) => {
  Le.init(e, t);
  const r = Mt(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
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
  Le.init(e, t);
  const r = new RegExp(`^${Mt(t.prefix)}.*`);
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
  Le.init(e, t);
  const r = new RegExp(`.*${Mt(t.suffix)}$`);
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
  Le.init(e, t), e._zod.check = (r) => {
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
}, pe = /* @__PURE__ */ z("$ZodType", (e, t) => {
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
      let l = Rt(i), y;
      for (const g of c) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(i))
            continue;
        } else if (l)
          continue;
        const p = i.issues.length, v = g._zod.check(i);
        if (v instanceof Promise && (u == null ? void 0 : u.async) === !1)
          throw new zt();
        if (y || v instanceof Promise)
          y = (y ?? Promise.resolve()).then(async () => {
            await v, i.issues.length !== p && (l || (l = Rt(i, p)));
          });
        else {
          if (i.issues.length === p)
            continue;
          l || (l = Rt(i, p));
        }
      }
      return y ? y.then(() => i) : i;
    }, a = (i, c, u) => {
      if (Rt(i))
        return i.aborted = !0, i;
      const l = s(c, n, u);
      if (l instanceof Promise) {
        if (u.async === !1)
          throw new zt();
        return l.then((y) => e._zod.parse(y, u));
      }
      return e._zod.parse(l, u);
    };
    e._zod.run = (i, c) => {
      if (c.skipChecks)
        return e._zod.parse(i, c);
      if (c.direction === "backward") {
        const l = e._zod.parse({ value: i.value, issues: [] }, { ...c, skipChecks: !0 });
        return l instanceof Promise ? l.then((y) => a(y, i, c)) : a(l, i, c);
      }
      const u = e._zod.parse(i, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new zt();
        return u.then((l) => s(l, n, c));
      }
      return s(u, n, c);
    };
  }
  ue(e, "~standard", () => ({
    validate: (s) => {
      var a;
      try {
        const i = ii(e, s);
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
}), Io = /* @__PURE__ */ z("$ZodString", (e, t) => {
  var r;
  pe.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? Bu(e._zod.bag), e._zod.parse = (n, o) => {
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
}), ye = /* @__PURE__ */ z("$ZodStringFormat", (e, t) => {
  gn.init(e, t), Io.init(e, t);
}), _l = /* @__PURE__ */ z("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Au), ye.init(e, t);
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
  ye.init(e, t);
}), yl = /* @__PURE__ */ z("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Uu), ye.init(e, t);
}), vl = /* @__PURE__ */ z("$ZodURL", (e, t) => {
  ye.init(e, t), e._zod.check = (r) => {
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
  t.pattern ?? (t.pattern = Zu()), ye.init(e, t);
}), $l = /* @__PURE__ */ z("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Mu), ye.init(e, t);
}), bl = /* @__PURE__ */ z("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Cu), ye.init(e, t);
}), Sl = /* @__PURE__ */ z("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = Ou), ye.init(e, t);
}), kl = /* @__PURE__ */ z("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = zu), ye.init(e, t);
}), El = /* @__PURE__ */ z("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = Nu), ye.init(e, t);
}), Tl = /* @__PURE__ */ z("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = ju), ye.init(e, t);
}), Pl = /* @__PURE__ */ z("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Gu(t)), ye.init(e, t);
}), Rl = /* @__PURE__ */ z("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Ju), ye.init(e, t);
}), Il = /* @__PURE__ */ z("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Wu(t)), ye.init(e, t);
}), Cl = /* @__PURE__ */ z("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = qu), ye.init(e, t);
}), Ol = /* @__PURE__ */ z("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Vu), ye.init(e, t), e._zod.bag.format = "ipv4";
}), zl = /* @__PURE__ */ z("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Lu), ye.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
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
}), Nl = /* @__PURE__ */ z("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Fu), ye.init(e, t);
}), jl = /* @__PURE__ */ z("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = xu), ye.init(e, t), e._zod.check = (r) => {
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
function mi(e) {
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
const Ml = /* @__PURE__ */ z("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Hu), ye.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    mi(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function ql(e) {
  if (!ci.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return mi(r);
}
const Al = /* @__PURE__ */ z("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ci), ye.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    ql(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ul = /* @__PURE__ */ z("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Ku), ye.init(e, t);
});
function Dl(e, t = null) {
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
const Zl = /* @__PURE__ */ z("$ZodJWT", (e, t) => {
  ye.init(e, t), e._zod.check = (r) => {
    Dl(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), _i = /* @__PURE__ */ z("$ZodNumber", (e, t) => {
  pe.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? di, e._zod.parse = (r, n) => {
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
}), Vl = /* @__PURE__ */ z("$ZodNumberFormat", (e, t) => {
  nl.init(e, t), _i.init(e, t);
}), Ll = /* @__PURE__ */ z("$ZodBoolean", (e, t) => {
  pe.init(e, t), e._zod.pattern = Yu, e._zod.parse = (r, n) => {
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
  pe.init(e, t), e._zod.pattern = Xu, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, n) => {
    const o = r.value;
    return o === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), xl = /* @__PURE__ */ z("$ZodAny", (e, t) => {
  pe.init(e, t), e._zod.parse = (r) => r;
}), Hl = /* @__PURE__ */ z("$ZodUnknown", (e, t) => {
  pe.init(e, t), e._zod.parse = (r) => r;
}), Kl = /* @__PURE__ */ z("$ZodNever", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function ls(e, t, r) {
  e.issues.length && t.issues.push(...It(r, e.issues)), t.value[r] = e.value;
}
const Jl = /* @__PURE__ */ z("$ZodArray", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => {
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
function Xr(e, t, r, n, o) {
  if (e.issues.length) {
    if (o && !(r in n))
      return;
    t.issues.push(...It(r, e.issues));
  }
  e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function gi(e) {
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
function yi(e, t, r, n, o, s) {
  const a = [], i = o.keySet, c = o.catchall._zod, u = c.def.type, l = c.optout === "optional";
  for (const y in t) {
    if (i.has(y))
      continue;
    if (u === "never") {
      a.push(y);
      continue;
    }
    const g = c.run({ value: t[y], issues: [] }, n);
    g instanceof Promise ? e.push(g.then((p) => Xr(p, r, y, t, l))) : Xr(g, r, y, t, l);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Wl = /* @__PURE__ */ z("$ZodObject", (e, t) => {
  pe.init(e, t);
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
  const n = pn(() => gi(t));
  ue(e._zod, "propValues", () => {
    const i = t.shape, c = {};
    for (const u in i) {
      const l = i[u]._zod;
      if (l.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const y of l.values)
          c[u].add(y);
      }
    }
    return c;
  });
  const o = Yt, s = t.catchall;
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
    const l = [], y = a.shape;
    for (const g of a.keys) {
      const p = y[g], v = p._zod.optout === "optional", w = p._zod.run({ value: u[g], issues: [] }, c);
      w instanceof Promise ? l.push(w.then((f) => Xr(f, i, g, u, v))) : Xr(w, i, g, u, v);
    }
    return s ? yi(l, u, i, c, n.value, e) : l.length ? Promise.all(l).then(() => i) : i;
  };
}), Gl = /* @__PURE__ */ z("$ZodObjectJIT", (e, t) => {
  Wl.init(e, t);
  const r = e._zod.parse, n = pn(() => gi(t)), o = (g) => {
    var _;
    const p = new pl(["shape", "payload", "ctx"]), v = n.value, w = (b) => {
      const h = cs(b);
      return `shape[${h}]._zod.run({ value: input[${h}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const f = /* @__PURE__ */ Object.create(null);
    let m = 0;
    for (const b of v.keys)
      f[b] = `key_${m++}`;
    p.write("const newResult = {};");
    for (const b of v.keys) {
      const h = f[b], $ = cs(b), k = g[b], C = ((_ = k == null ? void 0 : k._zod) == null ? void 0 : _.optout) === "optional";
      p.write(`const ${h} = ${w(b)};`), C ? p.write(`
        if (${h}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${h}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${h}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${h}.value;
        }
        
      `) : p.write(`
        if (${h}.issues.length) {
          payload.issues = payload.issues.concat(${h}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${h}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${h}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const d = p.compile();
    return (b, h) => d(g, b, h);
  };
  let s;
  const a = Yt, i = !ei.jitless, u = i && cu.value, l = t.catchall;
  let y;
  e._zod.parse = (g, p) => {
    y ?? (y = n.value);
    const v = g.value;
    return a(v) ? i && u && (p == null ? void 0 : p.async) === !1 && p.jitless !== !0 ? (s || (s = o(t.shape)), g = s(g, p), l ? yi([], v, g, p, y, e) : g) : r(g, p) : (g.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), g);
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
const vi = /* @__PURE__ */ z("$ZodUnion", (e, t) => {
  pe.init(e, t), ue(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), ue(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), ue(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), ue(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Eo(s.source)).join("|")})$`);
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
  t.inclusive = !1, vi.init(e, t);
  const r = e._zod.parse;
  ue(e._zod, "propValues", () => {
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
  const n = pn(() => {
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
    if (!Yt(a))
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
  pe.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value, s = t.left._zod.run({ value: o, issues: [] }, n), a = t.right._zod.run({ value: o, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([c, u]) => fs(r, c, u)) : fs(r, s, a);
  };
});
function Xn(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (jt(e) && jt(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((s) => r.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of n) {
      const a = Xn(e[s], t[s]);
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
      const o = e[n], s = t[n], a = Xn(o, s);
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
  const a = Xn(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const Yl = /* @__PURE__ */ z("$ZodRecord", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => {
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
          l instanceof Promise ? s.push(l.then((y) => {
            y.issues.length && r.issues.push(...It(u, y.issues)), r.value[u] = y.value;
          })) : (l.issues.length && r.issues.push(...It(u, l.issues)), r.value[u] = l.value);
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
        if (typeof i == "string" && di.test(i) && c.issues.length) {
          const y = t.keyType._zod.run({ value: Number(i), issues: [] }, n);
          if (y instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          y.issues.length === 0 && (c = y);
        }
        if (c.issues.length) {
          t.mode === "loose" ? r.value[i] = o[i] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((y) => ut(y, n, ct())),
            input: i,
            path: [i],
            inst: e
          });
          continue;
        }
        const l = t.valueType._zod.run({ value: o[i], issues: [] }, n);
        l instanceof Promise ? s.push(l.then((y) => {
          y.issues.length && r.issues.push(...It(i, y.issues)), r.value[c.value] = y.value;
        })) : (l.issues.length && r.issues.push(...It(i, l.issues)), r.value[c.value] = l.value);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
}), Xl = /* @__PURE__ */ z("$ZodEnum", (e, t) => {
  pe.init(e, t);
  const r = ti(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((o) => uu.has(typeof o)).map((o) => typeof o == "string" ? Mt(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return n.has(a) || o.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), o;
  };
}), ed = /* @__PURE__ */ z("$ZodLiteral", (e, t) => {
  if (pe.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((n) => typeof n == "string" ? Mt(n) : n ? Mt(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, o) => {
    const s = n.value;
    return r.has(s) || n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: s,
      inst: e
    }), n;
  };
}), td = /* @__PURE__ */ z("$ZodTransform", (e, t) => {
  pe.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Xa(e.constructor.name);
    const o = t.transform(r.value, r);
    if (n.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((a) => (r.value = a, r));
    if (o instanceof Promise)
      throw new zt();
    return r.value = o, r;
  };
});
function hs(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const wi = /* @__PURE__ */ z("$ZodOptional", (e, t) => {
  pe.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ue(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ue(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Eo(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => hs(s, r.value)) : hs(o, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), rd = /* @__PURE__ */ z("$ZodExactOptional", (e, t) => {
  wi.init(e, t), ue(e._zod, "values", () => t.innerType._zod.values), ue(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), nd = /* @__PURE__ */ z("$ZodNullable", (e, t) => {
  pe.init(e, t), ue(e._zod, "optin", () => t.innerType._zod.optin), ue(e._zod, "optout", () => t.innerType._zod.optout), ue(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Eo(r.source)}|null)$`) : void 0;
  }), ue(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), od = /* @__PURE__ */ z("$ZodDefault", (e, t) => {
  pe.init(e, t), e._zod.optin = "optional", ue(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
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
  pe.init(e, t), e._zod.optin = "optional", ue(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), ad = /* @__PURE__ */ z("$ZodNonOptional", (e, t) => {
  pe.init(e, t), ue(e._zod, "values", () => {
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
  pe.init(e, t), ue(e._zod, "optin", () => t.innerType._zod.optin), ue(e._zod, "optout", () => t.innerType._zod.optout), ue(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
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
  pe.init(e, t), ue(e._zod, "values", () => t.in._zod.values), ue(e._zod, "optin", () => t.in._zod.optin), ue(e._zod, "optout", () => t.out._zod.optout), ue(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const s = t.out._zod.run(r, n);
      return s instanceof Promise ? s.then((a) => cr(a, t.in, n)) : cr(s, t.in, n);
    }
    const o = t.in._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => cr(s, t.out, n)) : cr(o, t.out, n);
  };
});
function cr(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const ud = /* @__PURE__ */ z("$ZodReadonly", (e, t) => {
  pe.init(e, t), ue(e._zod, "propValues", () => t.innerType._zod.propValues), ue(e._zod, "values", () => t.innerType._zod.values), ue(e._zod, "optin", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optin;
  }), ue(e._zod, "optout", () => {
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
  Le.init(e, t), pe.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
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
    n._zod.def.params && (o.params = n._zod.def.params), t.issues.push(Xt(o));
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
const Kt = globalThis.__zod_globalRegistry;
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
function $i(e, t) {
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
function Id(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cd(e, t) {
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
function zd(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nd(e, t) {
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
function Md(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qd(e, t) {
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
function Ud(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Dd(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zd(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...J(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vd(e, t) {
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
  return new hi({
    check: "less_than",
    ...J(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
  return new hi({
    check: "less_than",
    ...J(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function $s(e, t) {
  return new pi({
    check: "greater_than",
    ...J(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Nn(e, t) {
  return new pi({
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
function bi(e, t) {
  return new ol({
    check: "max_length",
    ...J(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function en(e, t) {
  return new sl({
    check: "min_length",
    ...J(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
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
function Ut(e) {
  return new hl({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Yd(e) {
  return /* @__PURE__ */ Ut((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Xd() {
  return /* @__PURE__ */ Ut((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function ef() {
  return /* @__PURE__ */ Ut((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function tf() {
  return /* @__PURE__ */ Ut((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function rf() {
  return /* @__PURE__ */ Ut((e) => iu(e));
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
      r.issues.push(Xt(n, r.value, t._zod.def));
    else {
      const o = n;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), r.issues.push(Xt(o));
    }
  }, e(r.value, r)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function cf(e, t) {
  const r = new Le({
    check: "custom",
    ...J(t)
  });
  return r._zod.check = e, r;
}
function ki(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: (e == null ? void 0 : e.metadata) ?? Kt,
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
  var l, y;
  var n;
  const o = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, r.schemaPath.includes(e) && (s.cycle = r.path), s.schema;
  const a = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, a);
  const i = (y = (l = e._zod).toJSONSchema) == null ? void 0 : y.call(l);
  if (i)
    a.schema = i;
  else {
    const g = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, a.schema, g);
    else {
      const v = a.schema, w = t.processors[o.type];
      if (!w)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      w(e, t, v, g);
    }
    const p = e._zod.parent;
    p && (a.ref || (a.ref = p), Se(p, t, g), t.seen.get(p).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && Ae(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((n = a.schema).default ?? (n.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function Ei(e, t) {
  var a, i, c, u;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const l of e.seen.entries()) {
    const y = (a = e.metadataRegistry.get(l[0])) == null ? void 0 : a.id;
    if (y) {
      const g = n.get(y);
      if (g && g !== l[0])
        throw new Error(`Duplicate schema id "${y}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(y, l[0]);
    }
  }
  const o = (l) => {
    var w;
    const y = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const f = (w = e.external.registry.get(l[0])) == null ? void 0 : w.id, m = e.external.uri ?? ((_) => _);
      if (f)
        return { ref: m(f) };
      const d = l[1].defId ?? l[1].schema.id ?? `schema${e.counter++}`;
      return l[1].defId = d, { defId: d, ref: `${m("__shared")}#/${y}/${d}` };
    }
    if (l[1] === r)
      return { ref: "#" };
    const p = `#/${y}/`, v = l[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: v, ref: p + v };
  }, s = (l) => {
    if (l[1].schema.$ref)
      return;
    const y = l[1], { ref: g, defId: p } = o(l);
    y.def = { ...y.schema }, p && (y.defId = p);
    const v = y.schema;
    for (const w in v)
      delete v[w];
    v.$ref = g;
  };
  if (e.cycles === "throw")
    for (const l of e.seen.entries()) {
      const y = l[1];
      if (y.cycle)
        throw new Error(`Cycle detected: #/${(i = y.cycle) == null ? void 0 : i.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const l of e.seen.entries()) {
    const y = l[1];
    if (t === l[0]) {
      s(l);
      continue;
    }
    if (e.external) {
      const p = (c = e.external.registry.get(l[0])) == null ? void 0 : c.id;
      if (t !== l[0] && p) {
        s(l);
        continue;
      }
    }
    if ((u = e.metadataRegistry.get(l[0])) == null ? void 0 : u.id) {
      s(l);
      continue;
    }
    if (y.cycle) {
      s(l);
      continue;
    }
    if (y.count > 1 && e.reused === "ref") {
      s(l);
      continue;
    }
  }
}
function Ti(e, t) {
  var a, i, c;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (u) => {
    const l = e.seen.get(u);
    if (l.ref === null)
      return;
    const y = l.def ?? l.schema, g = { ...y }, p = l.ref;
    if (l.ref = null, p) {
      n(p);
      const w = e.seen.get(p), f = w.schema;
      if (f.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (y.allOf = y.allOf ?? [], y.allOf.push(f)) : Object.assign(y, f), Object.assign(y, g), u._zod.parent === p)
        for (const d in y)
          d === "$ref" || d === "allOf" || d in g || delete y[d];
      if (f.$ref && w.def)
        for (const d in y)
          d === "$ref" || d === "allOf" || d in w.def && JSON.stringify(y[d]) === JSON.stringify(w.def[d]) && delete y[d];
    }
    const v = u._zod.parent;
    if (v && v !== p) {
      n(v);
      const w = e.seen.get(v);
      if (w != null && w.schema.$ref && (y.$ref = w.schema.$ref, w.def))
        for (const f in y)
          f === "$ref" || f === "allOf" || f in w.def && JSON.stringify(y[f]) === JSON.stringify(w.def[f]) && delete y[f];
    }
    e.override({
      zodSchema: u,
      jsonSchema: y,
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
          input: tn(t, "input", e.processors),
          output: tn(t, "output", e.processors)
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
  const n = ki({ ...r, processors: t });
  return Se(e, n), Ei(n, e), Ti(n, e);
}, tn = (e, t, r = {}) => (n) => {
  const { libraryOptions: o, target: s } = n ?? {}, a = ki({ ...o ?? {}, target: s, io: t, processors: r });
  return Se(e, a), Ei(a, e), Ti(a, e);
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
      ...l.map((y) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: y.source
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
  const o = e._zod.def, s = ti(o.entries);
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
    const y = s.shape[l]._zod;
    return t.io === "input" ? y.optin === void 0 : y.optout === void 0;
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
    for (const y of c)
      o.patternProperties[y.source] = l;
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
    const l = [...u].filter((y) => typeof y == "string" || typeof y == "number");
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
}, If = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.default = JSON.parse(JSON.stringify(o.defaultValue));
}, Cf = (e, t, r, n) => {
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
}, zf = (e, t, r, n) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  Se(s, t, n);
  const a = t.seen.get(e);
  a.ref = s;
}, Nf = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.readOnly = !0;
}, Pi = (e, t, r, n) => {
  const o = e._zod.def;
  Se(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
};
function yn(e) {
  return !!e._zod;
}
function at(e, t) {
  return yn(e) ? ii(e, t) : e.safeParse(t);
}
function Ri(e) {
  var r, n;
  if (!e)
    return;
  let t;
  if (yn(e) ? t = (n = (r = e._zod) == null ? void 0 : r.def) == null ? void 0 : n.shape : t = e.shape, !!t) {
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
  if (yn(e)) {
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
const Mf = /* @__PURE__ */ z("ZodISODateTime", (e, t) => {
  Pl.init(e, t), $e.init(e, t);
});
function Ii(e) {
  return /* @__PURE__ */ jd(Mf, e);
}
const qf = /* @__PURE__ */ z("ZodISODate", (e, t) => {
  Rl.init(e, t), $e.init(e, t);
});
function Af(e) {
  return /* @__PURE__ */ Md(qf, e);
}
const Uf = /* @__PURE__ */ z("ZodISOTime", (e, t) => {
  Il.init(e, t), $e.init(e, t);
});
function Df(e) {
  return /* @__PURE__ */ qd(Uf, e);
}
const Zf = /* @__PURE__ */ z("ZodISODuration", (e, t) => {
  Cl.init(e, t), $e.init(e, t);
});
function Vf(e) {
  return /* @__PURE__ */ Ad(Zf, e);
}
const Lf = (e, t) => {
  si.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
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
        e.issues.push(r), e.message = JSON.stringify(e.issues, Yn, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Yn, 2);
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
}), Ff = /* @__PURE__ */ Po(Je), xf = /* @__PURE__ */ Ro(Je), Hf = /* @__PURE__ */ mn(Je), Kf = /* @__PURE__ */ _n(Je), Jf = /* @__PURE__ */ bu(Je), Wf = /* @__PURE__ */ Su(Je), Gf = /* @__PURE__ */ ku(Je), Bf = /* @__PURE__ */ Eu(Je), Qf = /* @__PURE__ */ Tu(Je), Yf = /* @__PURE__ */ Pu(Je), Xf = /* @__PURE__ */ Ru(Je), eh = /* @__PURE__ */ Iu(Je), me = /* @__PURE__ */ z("ZodType", (e, t) => (pe.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: tn(e, "input"),
    output: tn(e, "output")
  }
}), e.toJSONSchema = uf(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(lt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, n) => dt(e, r, n), e.brand = () => e, e.register = (r, n) => (r.add(e, n), e), e.parse = (r, n) => Ff(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Hf(e, r, n), e.parseAsync = async (r, n) => xf(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Kf(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Jf(e, r, n), e.decode = (r, n) => Wf(e, r, n), e.encodeAsync = async (r, n) => Gf(e, r, n), e.decodeAsync = async (r, n) => Bf(e, r, n), e.safeEncode = (r, n) => Qf(e, r, n), e.safeDecode = (r, n) => Yf(e, r, n), e.safeEncodeAsync = async (r, n) => Xf(e, r, n), e.safeDecodeAsync = async (r, n) => eh(e, r, n), e.refine = (r, n) => e.check(Jh(r, n)), e.superRefine = (r) => e.check(Wh(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ Ut(r)), e.optional = () => be(e), e.exactOptional = () => jh(e), e.nullable = () => Es(e), e.nullish = () => be(Es(e)), e.nonoptional = (r) => Zh(e, r), e.array = () => L(e), e.or = (r) => _e([e, r]), e.and = (r) => Oo(e, r), e.transform = (r) => to(e, qi(r)), e.default = (r) => Ah(e, r), e.prefault = (r) => Dh(e, r), e.catch = (r) => Lh(e, r), e.pipe = (r) => to(e, r), e.readonly = () => Hh(e), e.describe = (r) => {
  const n = e.clone();
  return Kt.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = Kt.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return Kt.get(e);
  const n = e.clone();
  return Kt.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), Ci = /* @__PURE__ */ z("_ZodString", (e, t) => {
  Io.init(e, t), me.init(e, t), e._zod.processJSONSchema = (n, o, s) => df(e, n, o);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(/* @__PURE__ */ Kd(...n)), e.includes = (...n) => e.check(/* @__PURE__ */ Gd(...n)), e.startsWith = (...n) => e.check(/* @__PURE__ */ Bd(...n)), e.endsWith = (...n) => e.check(/* @__PURE__ */ Qd(...n)), e.min = (...n) => e.check(/* @__PURE__ */ en(...n)), e.max = (...n) => e.check(/* @__PURE__ */ bi(...n)), e.length = (...n) => e.check(/* @__PURE__ */ Si(...n)), e.nonempty = (...n) => e.check(/* @__PURE__ */ en(1, ...n)), e.lowercase = (n) => e.check(/* @__PURE__ */ Jd(n)), e.uppercase = (n) => e.check(/* @__PURE__ */ Wd(n)), e.trim = () => e.check(/* @__PURE__ */ Xd()), e.normalize = (...n) => e.check(/* @__PURE__ */ Yd(...n)), e.toLowerCase = () => e.check(/* @__PURE__ */ ef()), e.toUpperCase = () => e.check(/* @__PURE__ */ tf()), e.slugify = () => e.check(/* @__PURE__ */ rf());
}), th = /* @__PURE__ */ z("ZodString", (e, t) => {
  Io.init(e, t), Ci.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ pd(rh, r)), e.url = (r) => e.check(/* @__PURE__ */ $i(Oi, r)), e.jwt = (r) => e.check(/* @__PURE__ */ Nd(yh, r)), e.emoji = (r) => e.check(/* @__PURE__ */ vd(oh, r)), e.guid = (r) => e.check(/* @__PURE__ */ vs(Ss, r)), e.uuid = (r) => e.check(/* @__PURE__ */ md(ur, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ _d(ur, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ gd(ur, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ yd(ur, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ wd(sh, r)), e.guid = (r) => e.check(/* @__PURE__ */ vs(Ss, r)), e.cuid = (r) => e.check(/* @__PURE__ */ $d(ah, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ bd(ih, r)), e.ulid = (r) => e.check(/* @__PURE__ */ Sd(ch, r)), e.base64 = (r) => e.check(/* @__PURE__ */ Cd(mh, r)), e.base64url = (r) => e.check(/* @__PURE__ */ Od(_h, r)), e.xid = (r) => e.check(/* @__PURE__ */ kd(uh, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ Ed(lh, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ Td(dh, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ Pd(fh, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ Rd(hh, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ Id(ph, r)), e.e164 = (r) => e.check(/* @__PURE__ */ zd(gh, r)), e.datetime = (r) => e.check(Ii(r)), e.date = (r) => e.check(Af(r)), e.time = (r) => e.check(Df(r)), e.duration = (r) => e.check(Vf(r));
});
function E(e) {
  return /* @__PURE__ */ hd(th, e);
}
const $e = /* @__PURE__ */ z("ZodStringFormat", (e, t) => {
  ye.init(e, t), Ci.init(e, t);
}), rh = /* @__PURE__ */ z("ZodEmail", (e, t) => {
  yl.init(e, t), $e.init(e, t);
}), Ss = /* @__PURE__ */ z("ZodGUID", (e, t) => {
  _l.init(e, t), $e.init(e, t);
}), ur = /* @__PURE__ */ z("ZodUUID", (e, t) => {
  gl.init(e, t), $e.init(e, t);
}), Oi = /* @__PURE__ */ z("ZodURL", (e, t) => {
  vl.init(e, t), $e.init(e, t);
});
function nh(e) {
  return /* @__PURE__ */ $i(Oi, e);
}
const oh = /* @__PURE__ */ z("ZodEmoji", (e, t) => {
  wl.init(e, t), $e.init(e, t);
}), sh = /* @__PURE__ */ z("ZodNanoID", (e, t) => {
  $l.init(e, t), $e.init(e, t);
}), ah = /* @__PURE__ */ z("ZodCUID", (e, t) => {
  bl.init(e, t), $e.init(e, t);
}), ih = /* @__PURE__ */ z("ZodCUID2", (e, t) => {
  Sl.init(e, t), $e.init(e, t);
}), ch = /* @__PURE__ */ z("ZodULID", (e, t) => {
  kl.init(e, t), $e.init(e, t);
}), uh = /* @__PURE__ */ z("ZodXID", (e, t) => {
  El.init(e, t), $e.init(e, t);
}), lh = /* @__PURE__ */ z("ZodKSUID", (e, t) => {
  Tl.init(e, t), $e.init(e, t);
}), dh = /* @__PURE__ */ z("ZodIPv4", (e, t) => {
  Ol.init(e, t), $e.init(e, t);
}), fh = /* @__PURE__ */ z("ZodIPv6", (e, t) => {
  zl.init(e, t), $e.init(e, t);
}), hh = /* @__PURE__ */ z("ZodCIDRv4", (e, t) => {
  Nl.init(e, t), $e.init(e, t);
}), ph = /* @__PURE__ */ z("ZodCIDRv6", (e, t) => {
  jl.init(e, t), $e.init(e, t);
}), mh = /* @__PURE__ */ z("ZodBase64", (e, t) => {
  Ml.init(e, t), $e.init(e, t);
}), _h = /* @__PURE__ */ z("ZodBase64URL", (e, t) => {
  Al.init(e, t), $e.init(e, t);
}), gh = /* @__PURE__ */ z("ZodE164", (e, t) => {
  Ul.init(e, t), $e.init(e, t);
}), yh = /* @__PURE__ */ z("ZodJWT", (e, t) => {
  Zl.init(e, t), $e.init(e, t);
}), Co = /* @__PURE__ */ z("ZodNumber", (e, t) => {
  _i.init(e, t), me.init(e, t), e._zod.processJSONSchema = (n, o, s) => ff(e, n, o), e.gt = (n, o) => e.check(/* @__PURE__ */ $s(n, o)), e.gte = (n, o) => e.check(/* @__PURE__ */ Nn(n, o)), e.min = (n, o) => e.check(/* @__PURE__ */ Nn(n, o)), e.lt = (n, o) => e.check(/* @__PURE__ */ ws(n, o)), e.lte = (n, o) => e.check(/* @__PURE__ */ zn(n, o)), e.max = (n, o) => e.check(/* @__PURE__ */ zn(n, o)), e.int = (n) => e.check(ks(n)), e.safe = (n) => e.check(ks(n)), e.positive = (n) => e.check(/* @__PURE__ */ $s(0, n)), e.nonnegative = (n) => e.check(/* @__PURE__ */ Nn(0, n)), e.negative = (n) => e.check(/* @__PURE__ */ ws(0, n)), e.nonpositive = (n) => e.check(/* @__PURE__ */ zn(0, n)), e.multipleOf = (n, o) => e.check(/* @__PURE__ */ bs(n, o)), e.step = (n, o) => e.check(/* @__PURE__ */ bs(n, o)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function le(e) {
  return /* @__PURE__ */ Ud(Co, e);
}
const vh = /* @__PURE__ */ z("ZodNumberFormat", (e, t) => {
  Vl.init(e, t), Co.init(e, t);
});
function ks(e) {
  return /* @__PURE__ */ Zd(vh, e);
}
const wh = /* @__PURE__ */ z("ZodBoolean", (e, t) => {
  Ll.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => hf(e, r, n);
});
function he(e) {
  return /* @__PURE__ */ Vd(wh, e);
}
const $h = /* @__PURE__ */ z("ZodNull", (e, t) => {
  Fl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => pf(e, r, n);
});
function zi(e) {
  return /* @__PURE__ */ Ld($h, e);
}
const bh = /* @__PURE__ */ z("ZodAny", (e, t) => {
  xl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => _f();
});
function Sh() {
  return /* @__PURE__ */ Fd(bh);
}
const kh = /* @__PURE__ */ z("ZodUnknown", (e, t) => {
  Hl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => gf();
});
function ve() {
  return /* @__PURE__ */ xd(kh);
}
const Eh = /* @__PURE__ */ z("ZodNever", (e, t) => {
  Kl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => mf(e, r, n);
});
function Th(e) {
  return /* @__PURE__ */ Hd(Eh, e);
}
const Ph = /* @__PURE__ */ z("ZodArray", (e, t) => {
  Jl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => bf(e, r, n, o), e.element = t.element, e.min = (r, n) => e.check(/* @__PURE__ */ en(r, n)), e.nonempty = (r) => e.check(/* @__PURE__ */ en(1, r)), e.max = (r, n) => e.check(/* @__PURE__ */ bi(r, n)), e.length = (r, n) => e.check(/* @__PURE__ */ Si(r, n)), e.unwrap = () => e.element;
});
function L(e, t) {
  return /* @__PURE__ */ nf(Ph, e, t);
}
const Ni = /* @__PURE__ */ z("ZodObject", (e, t) => {
  Gl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Sf(e, r, n, o), ue(e, "shape", () => t.shape), e.keyof = () => xe(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ve() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ve() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Th() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => pu(e, r), e.safeExtend = (r) => mu(e, r), e.merge = (r) => _u(e, r), e.pick = (r) => fu(e, r), e.omit = (r) => hu(e, r), e.partial = (...r) => gu(Ai, e, r[0]), e.required = (...r) => yu(Ui, e, r[0]);
});
function F(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...J(t)
  };
  return new Ni(r);
}
function ze(e, t) {
  return new Ni({
    type: "object",
    shape: e,
    catchall: ve(),
    ...J(t)
  });
}
const ji = /* @__PURE__ */ z("ZodUnion", (e, t) => {
  vi.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => kf(e, r, n, o), e.options = t.options;
});
function _e(e, t) {
  return new ji({
    type: "union",
    options: e,
    ...J(t)
  });
}
const Rh = /* @__PURE__ */ z("ZodDiscriminatedUnion", (e, t) => {
  ji.init(e, t), Bl.init(e, t);
});
function Mi(e, t, r) {
  return new Rh({
    type: "union",
    options: t,
    discriminator: e,
    ...J(r)
  });
}
const Ih = /* @__PURE__ */ z("ZodIntersection", (e, t) => {
  Ql.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Ef(e, r, n, o);
});
function Oo(e, t) {
  return new Ih({
    type: "intersection",
    left: e,
    right: t
  });
}
const Ch = /* @__PURE__ */ z("ZodRecord", (e, t) => {
  Yl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Tf(e, r, n, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function we(e, t, r) {
  return new Ch({
    type: "record",
    keyType: e,
    valueType: t,
    ...J(r)
  });
}
const eo = /* @__PURE__ */ z("ZodEnum", (e, t) => {
  Xl.init(e, t), me.init(e, t), e._zod.processJSONSchema = (n, o, s) => yf(e, n, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, o) => {
    const s = {};
    for (const a of n)
      if (r.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new eo({
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
    return new eo({
      ...t,
      checks: [],
      ...J(o),
      entries: s
    });
  };
});
function xe(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new eo({
    type: "enum",
    entries: r,
    ...J(t)
  });
}
const Oh = /* @__PURE__ */ z("ZodLiteral", (e, t) => {
  ed.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => vf(e, r, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function G(e, t) {
  return new Oh({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...J(t)
  });
}
const zh = /* @__PURE__ */ z("ZodTransform", (e, t) => {
  td.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => $f(e, r), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Xa(e.constructor.name);
    r.addIssue = (s) => {
      if (typeof s == "string")
        r.issues.push(Xt(s, r.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(Xt(a));
      }
    };
    const o = t.transform(r.value, r);
    return o instanceof Promise ? o.then((s) => (r.value = s, r)) : (r.value = o, r);
  };
});
function qi(e) {
  return new zh({
    type: "transform",
    transform: e
  });
}
const Ai = /* @__PURE__ */ z("ZodOptional", (e, t) => {
  wi.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Pi(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function be(e) {
  return new Ai({
    type: "optional",
    innerType: e
  });
}
const Nh = /* @__PURE__ */ z("ZodExactOptional", (e, t) => {
  rd.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Pi(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function jh(e) {
  return new Nh({
    type: "optional",
    innerType: e
  });
}
const Mh = /* @__PURE__ */ z("ZodNullable", (e, t) => {
  nd.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Pf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Es(e) {
  return new Mh({
    type: "nullable",
    innerType: e
  });
}
const qh = /* @__PURE__ */ z("ZodDefault", (e, t) => {
  od.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => If(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ah(e, t) {
  return new qh({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : ni(t);
    }
  });
}
const Uh = /* @__PURE__ */ z("ZodPrefault", (e, t) => {
  sd.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Cf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Dh(e, t) {
  return new Uh({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : ni(t);
    }
  });
}
const Ui = /* @__PURE__ */ z("ZodNonOptional", (e, t) => {
  ad.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Rf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Zh(e, t) {
  return new Ui({
    type: "nonoptional",
    innerType: e,
    ...J(t)
  });
}
const Vh = /* @__PURE__ */ z("ZodCatch", (e, t) => {
  id.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Of(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Lh(e, t) {
  return new Vh({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Fh = /* @__PURE__ */ z("ZodPipe", (e, t) => {
  cd.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => zf(e, r, n, o), e.in = t.in, e.out = t.out;
});
function to(e, t) {
  return new Fh({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const xh = /* @__PURE__ */ z("ZodReadonly", (e, t) => {
  ud.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => Nf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Hh(e) {
  return new xh({
    type: "readonly",
    innerType: e
  });
}
const Di = /* @__PURE__ */ z("ZodCustom", (e, t) => {
  ld.init(e, t), me.init(e, t), e._zod.processJSONSchema = (r, n, o) => wf(e, r);
});
function Kh(e, t) {
  return /* @__PURE__ */ of(Di, e ?? (() => !0), t);
}
function Jh(e, t = {}) {
  return /* @__PURE__ */ sf(Di, e, t);
}
function Wh(e) {
  return /* @__PURE__ */ af(e);
}
function Zi(e, t) {
  return to(qi(e), t);
}
const Gh = {
  custom: "custom"
};
function Bh(e) {
  return /* @__PURE__ */ Dd(Co, e);
}
const vn = "2025-11-25", Qh = [vn, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], gt = "io.modelcontextprotocol/related-task", wn = "2.0", Ne = Kh((e) => e !== null && (typeof e == "object" || typeof e == "function")), Vi = _e([E(), le().int()]), Li = E();
ze({
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: _e([le(), zi()]).optional(),
  /**
   * Time in milliseconds to wait between task status requests.
   */
  pollInterval: le().optional()
});
const Yh = F({
  ttl: le().optional()
}), Xh = F({
  taskId: E()
}), zo = ze({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: Vi.optional(),
  /**
   * If specified, this request is related to the provided task.
   */
  [gt]: Xh.optional()
}), He = F({
  /**
   * See [General fields: `_meta`](/specification/draft/basic/index#meta) for notes on `_meta` usage.
   */
  _meta: zo.optional()
}), tr = He.extend({
  /**
   * If specified, the caller is requesting task-augmented execution for this request.
   * The request will return a CreateTaskResult immediately, and the actual result can be
   * retrieved later via tasks/result.
   *
   * Task augmentation is subject to capability negotiation - receivers MUST declare support
   * for task augmentation of specific request types in their capabilities.
   */
  task: Yh.optional()
}), ep = (e) => tr.safeParse(e).success, je = F({
  method: E(),
  params: He.loose().optional()
}), We = F({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: zo.optional()
}), Ge = F({
  method: E(),
  params: We.loose().optional()
}), Me = ze({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: zo.optional()
}), $n = _e([E(), le().int()]), Fi = F({
  jsonrpc: G(wn),
  id: $n,
  ...je.shape
}).strict(), ro = (e) => Fi.safeParse(e).success, xi = F({
  jsonrpc: G(wn),
  ...Ge.shape
}).strict(), tp = (e) => xi.safeParse(e).success, No = F({
  jsonrpc: G(wn),
  id: $n,
  result: Me
}).strict(), Jt = (e) => No.safeParse(e).success;
var X;
(function(e) {
  e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(X || (X = {}));
const jo = F({
  jsonrpc: G(wn),
  id: $n.optional(),
  error: F({
    /**
     * The error type that occurred.
     */
    code: le().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: E(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: ve().optional()
  })
}).strict(), rp = (e) => jo.safeParse(e).success, Gr = _e([
  Fi,
  xi,
  No,
  jo
]);
_e([No, jo]);
const Ct = Me.strict(), np = We.extend({
  /**
   * The ID of the request to cancel.
   *
   * This MUST correspond to the ID of a request previously issued in the same direction.
   */
  requestId: $n.optional(),
  /**
   * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
   */
  reason: E().optional()
}), Mo = Ge.extend({
  method: G("notifications/cancelled"),
  params: np
}), op = F({
  /**
   * URL or data URI for the icon.
   */
  src: E(),
  /**
   * Optional MIME type for the icon.
   */
  mimeType: E().optional(),
  /**
   * Optional array of strings that specify sizes at which the icon can be used.
   * Each string should be in WxH format (e.g., `"48x48"`, `"96x96"`) or `"any"` for scalable formats like SVG.
   *
   * If not provided, the client should assume that the icon can be used at any size.
   */
  sizes: L(E()).optional(),
  /**
   * Optional specifier for the theme this icon is designed for. `light` indicates
   * the icon is designed to be used with a light background, and `dark` indicates
   * the icon is designed to be used with a dark background.
   *
   * If not provided, the client should assume the icon can be used with any theme.
   */
  theme: xe(["light", "dark"]).optional()
}), rr = F({
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
}), qt = F({
  /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
  name: E(),
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title: E().optional()
}), Hi = qt.extend({
  ...qt.shape,
  ...rr.shape,
  version: E(),
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl: E().optional(),
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description: E().optional()
}), sp = Oo(F({
  applyDefaults: he().optional()
}), we(E(), ve())), ap = Zi((e) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0 ? { form: {} } : e, Oo(F({
  form: sp.optional(),
  url: Ne.optional()
}), we(E(), ve()).optional())), ip = ze({
  /**
   * Present if the client supports listing tasks.
   */
  list: Ne.optional(),
  /**
   * Present if the client supports cancelling tasks.
   */
  cancel: Ne.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: ze({
    /**
     * Task support for sampling requests.
     */
    sampling: ze({
      createMessage: Ne.optional()
    }).optional(),
    /**
     * Task support for elicitation requests.
     */
    elicitation: ze({
      create: Ne.optional()
    }).optional()
  }).optional()
}), cp = ze({
  /**
   * Present if the server supports listing tasks.
   */
  list: Ne.optional(),
  /**
   * Present if the server supports cancelling tasks.
   */
  cancel: Ne.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: ze({
    /**
     * Task support for tool requests.
     */
    tools: ze({
      call: Ne.optional()
    }).optional()
  }).optional()
}), up = F({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: we(E(), Ne).optional(),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: F({
    /**
     * Present if the client supports context inclusion via includeContext parameter.
     * If not declared, servers SHOULD only use `includeContext: "none"` (or omit it).
     */
    context: Ne.optional(),
    /**
     * Present if the client supports tool use via tools and toolChoice parameters.
     */
    tools: Ne.optional()
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
    listChanged: he().optional()
  }).optional(),
  /**
   * Present if the client supports task creation.
   */
  tasks: ip.optional()
}), lp = He.extend({
  /**
   * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
   */
  protocolVersion: E(),
  capabilities: up,
  clientInfo: Hi
}), dp = je.extend({
  method: G("initialize"),
  params: lp
}), fp = F({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: we(E(), Ne).optional(),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: Ne.optional(),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: Ne.optional(),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: F({
    /**
     * Whether this server supports issuing notifications for changes to the prompt list.
     */
    listChanged: he().optional()
  }).optional(),
  /**
   * Present if the server offers any resources to read.
   */
  resources: F({
    /**
     * Whether this server supports clients subscribing to resource updates.
     */
    subscribe: he().optional(),
    /**
     * Whether this server supports issuing notifications for changes to the resource list.
     */
    listChanged: he().optional()
  }).optional(),
  /**
   * Present if the server offers any tools to call.
   */
  tools: F({
    /**
     * Whether this server supports issuing notifications for changes to the tool list.
     */
    listChanged: he().optional()
  }).optional(),
  /**
   * Present if the server supports task creation.
   */
  tasks: cp.optional()
}), Ki = Me.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: E(),
  capabilities: fp,
  serverInfo: Hi,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: E().optional()
}), Ji = Ge.extend({
  method: G("notifications/initialized"),
  params: We.optional()
}), hp = (e) => Ji.safeParse(e).success, qo = je.extend({
  method: G("ping"),
  params: He.optional()
}), pp = F({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: le(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: be(le()),
  /**
   * An optional message describing the current progress.
   */
  message: be(E())
}), mp = F({
  ...We.shape,
  ...pp.shape,
  /**
   * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
   */
  progressToken: Vi
}), Ao = Ge.extend({
  method: G("notifications/progress"),
  params: mp
}), _p = He.extend({
  /**
   * An opaque token representing the current pagination position.
   * If provided, the server should return results starting after this cursor.
   */
  cursor: Li.optional()
}), nr = je.extend({
  params: _p.optional()
}), or = Me.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: Li.optional()
}), gp = xe(["working", "input_required", "completed", "failed", "cancelled"]), sr = F({
  taskId: E(),
  status: gp,
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: _e([le(), zi()]),
  /**
   * ISO 8601 timestamp when the task was created.
   */
  createdAt: E(),
  /**
   * ISO 8601 timestamp when the task was last updated.
   */
  lastUpdatedAt: E(),
  pollInterval: be(le()),
  /**
   * Optional diagnostic message for failed tasks or other status information.
   */
  statusMessage: be(E())
}), er = Me.extend({
  task: sr
}), yp = We.merge(sr), rn = Ge.extend({
  method: G("notifications/tasks/status"),
  params: yp
}), Uo = je.extend({
  method: G("tasks/get"),
  params: He.extend({
    taskId: E()
  })
}), Do = Me.merge(sr), Zo = je.extend({
  method: G("tasks/result"),
  params: He.extend({
    taskId: E()
  })
});
Me.loose();
const Vo = nr.extend({
  method: G("tasks/list")
}), Lo = or.extend({
  tasks: L(sr)
}), Fo = je.extend({
  method: G("tasks/cancel"),
  params: He.extend({
    taskId: E()
  })
}), vp = Me.merge(sr), Wi = F({
  /**
   * The URI of this resource.
   */
  uri: E(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: be(E()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), Gi = Wi.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: E()
}), xo = E().refine((e) => {
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), Bi = Wi.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: xo
}), ar = xe(["user", "assistant"]), Dt = F({
  /**
   * Intended audience(s) for the resource.
   */
  audience: L(ar).optional(),
  /**
   * Importance hint for the resource, from 0 (least) to 1 (most).
   */
  priority: le().min(0).max(1).optional(),
  /**
   * ISO 8601 timestamp for the most recent modification.
   */
  lastModified: Ii({ offset: !0 }).optional()
}), Qi = F({
  ...qt.shape,
  ...rr.shape,
  /**
   * The URI of this resource.
   */
  uri: E(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: be(E()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: be(E()),
  /**
   * Optional annotations for the client.
   */
  annotations: Dt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: be(ze({}))
}), wp = F({
  ...qt.shape,
  ...rr.shape,
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: E(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: be(E()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: be(E()),
  /**
   * Optional annotations for the client.
   */
  annotations: Dt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: be(ze({}))
}), $p = nr.extend({
  method: G("resources/list")
}), Yi = or.extend({
  resources: L(Qi)
}), bp = nr.extend({
  method: G("resources/templates/list")
}), Xi = or.extend({
  resourceTemplates: L(wp)
}), Ho = He.extend({
  /**
   * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
   *
   * @format uri
   */
  uri: E()
}), Sp = Ho, kp = je.extend({
  method: G("resources/read"),
  params: Sp
}), ec = Me.extend({
  contents: L(_e([Gi, Bi]))
}), tc = Ge.extend({
  method: G("notifications/resources/list_changed"),
  params: We.optional()
}), Ep = Ho, Tp = je.extend({
  method: G("resources/subscribe"),
  params: Ep
}), Pp = Ho, Rp = je.extend({
  method: G("resources/unsubscribe"),
  params: Pp
}), Ip = We.extend({
  /**
   * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
   */
  uri: E()
}), Cp = Ge.extend({
  method: G("notifications/resources/updated"),
  params: Ip
}), Op = F({
  /**
   * The name of the argument.
   */
  name: E(),
  /**
   * A human-readable description of the argument.
   */
  description: be(E()),
  /**
   * Whether this argument must be provided.
   */
  required: be(he())
}), zp = F({
  ...qt.shape,
  ...rr.shape,
  /**
   * An optional description of what this prompt provides
   */
  description: be(E()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: be(L(Op)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: be(ze({}))
}), Np = nr.extend({
  method: G("prompts/list")
}), rc = or.extend({
  prompts: L(zp)
}), jp = He.extend({
  /**
   * The name of the prompt or prompt template.
   */
  name: E(),
  /**
   * Arguments to use for templating the prompt.
   */
  arguments: we(E(), E()).optional()
}), Mp = je.extend({
  method: G("prompts/get"),
  params: jp
}), Ko = F({
  type: G("text"),
  /**
   * The text content of the message.
   */
  text: E(),
  /**
   * Optional annotations for the client.
   */
  annotations: Dt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), Jo = F({
  type: G("image"),
  /**
   * The base64-encoded image data.
   */
  data: xo,
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: E(),
  /**
   * Optional annotations for the client.
   */
  annotations: Dt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), Wo = F({
  type: G("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: xo,
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: E(),
  /**
   * Optional annotations for the client.
   */
  annotations: Dt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), qp = F({
  type: G("tool_use"),
  /**
   * The name of the tool to invoke.
   * Must match a tool name from the request's tools array.
   */
  name: E(),
  /**
   * Unique identifier for this tool call.
   * Used to correlate with ToolResultContent in subsequent messages.
   */
  id: E(),
  /**
   * Arguments to pass to the tool.
   * Must conform to the tool's inputSchema.
   */
  input: we(E(), ve()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), Ap = F({
  type: G("resource"),
  resource: _e([Gi, Bi]),
  /**
   * Optional annotations for the client.
   */
  annotations: Dt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), Up = Qi.extend({
  type: G("resource_link")
}), Go = _e([
  Ko,
  Jo,
  Wo,
  Up,
  Ap
]), Dp = F({
  role: ar,
  content: Go
}), nc = Me.extend({
  /**
   * An optional description for the prompt.
   */
  description: E().optional(),
  messages: L(Dp)
}), oc = Ge.extend({
  method: G("notifications/prompts/list_changed"),
  params: We.optional()
}), Zp = F({
  /**
   * A human-readable title for the tool.
   */
  title: E().optional(),
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint: he().optional(),
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint: he().optional(),
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint: he().optional(),
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint: he().optional()
}), Vp = F({
  /**
   * Indicates the tool's preference for task-augmented execution.
   * - "required": Clients MUST invoke the tool as a task
   * - "optional": Clients MAY invoke the tool as a task or normal request
   * - "forbidden": Clients MUST NOT attempt to invoke the tool as a task
   *
   * If not present, defaults to "forbidden".
   */
  taskSupport: xe(["required", "optional", "forbidden"]).optional()
}), sc = F({
  ...qt.shape,
  ...rr.shape,
  /**
   * A human-readable description of the tool.
   */
  description: E().optional(),
  /**
   * A JSON Schema 2020-12 object defining the expected parameters for the tool.
   * Must have type: 'object' at the root level per MCP spec.
   */
  inputSchema: F({
    type: G("object"),
    properties: we(E(), Ne).optional(),
    required: L(E()).optional()
  }).catchall(ve()),
  /**
   * An optional JSON Schema 2020-12 object defining the structure of the tool's output
   * returned in the structuredContent field of a CallToolResult.
   * Must have type: 'object' at the root level per MCP spec.
   */
  outputSchema: F({
    type: G("object"),
    properties: we(E(), Ne).optional(),
    required: L(E()).optional()
  }).catchall(ve()).optional(),
  /**
   * Optional additional tool information.
   */
  annotations: Zp.optional(),
  /**
   * Execution-related properties for this tool.
   */
  execution: Vp.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), Lp = nr.extend({
  method: G("tools/list")
}), Bo = or.extend({
  tools: L(sc)
}), bn = Me.extend({
  /**
   * A list of content objects that represent the result of the tool call.
   *
   * If the Tool does not define an outputSchema, this field MUST be present in the result.
   * For backwards compatibility, this field is always present, but it may be empty.
   */
  content: L(Go).default([]),
  /**
   * An object containing structured tool output.
   *
   * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
   */
  structuredContent: we(E(), ve()).optional(),
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
  isError: he().optional()
});
bn.or(Me.extend({
  toolResult: ve()
}));
const Fp = tr.extend({
  /**
   * The name of the tool to call.
   */
  name: E(),
  /**
   * Arguments to pass to the tool.
   */
  arguments: we(E(), ve()).optional()
}), xp = je.extend({
  method: G("tools/call"),
  params: Fp
}), ac = Ge.extend({
  method: G("notifications/tools/list_changed"),
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
  autoRefresh: he().default(!0),
  /**
   * Debounce time in milliseconds for list changed notification processing.
   *
   * Multiple notifications received within this timeframe will only trigger one refresh.
   * Set to 0 to disable debouncing.
   *
   * @default 300
   */
  debounceMs: le().int().nonnegative().default(300)
}), ic = xe(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), Kp = He.extend({
  /**
   * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
   */
  level: ic
}), Jp = je.extend({
  method: G("logging/setLevel"),
  params: Kp
}), Wp = We.extend({
  /**
   * The severity of this log message.
   */
  level: ic,
  /**
   * An optional name of the logger issuing this message.
   */
  logger: E().optional(),
  /**
   * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
   */
  data: ve()
}), Gp = Ge.extend({
  method: G("notifications/message"),
  params: Wp
}), Bp = F({
  /**
   * A hint for a model name.
   */
  name: E().optional()
}), Qp = F({
  /**
   * Optional hints to use for model selection.
   */
  hints: L(Bp).optional(),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: le().min(0).max(1).optional(),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: le().min(0).max(1).optional(),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: le().min(0).max(1).optional()
}), Yp = F({
  /**
   * Controls when tools are used:
   * - "auto": Model decides whether to use tools (default)
   * - "required": Model MUST use at least one tool before completing
   * - "none": Model MUST NOT use any tools
   */
  mode: xe(["auto", "required", "none"]).optional()
}), Xp = F({
  type: G("tool_result"),
  toolUseId: E().describe("The unique identifier for the corresponding tool call."),
  content: L(Go).default([]),
  structuredContent: F({}).loose().optional(),
  isError: he().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), em = Mi("type", [Ko, Jo, Wo]), nn = Mi("type", [
  Ko,
  Jo,
  Wo,
  qp,
  Xp
]), tm = F({
  role: ar,
  content: _e([nn, L(nn)]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), rm = tr.extend({
  messages: L(tm),
  /**
   * The server's preferences for which model to select. The client MAY modify or omit this request.
   */
  modelPreferences: Qp.optional(),
  /**
   * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
   */
  systemPrompt: E().optional(),
  /**
   * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt.
   * The client MAY ignore this request.
   *
   * Default is "none". Values "thisServer" and "allServers" are soft-deprecated. Servers SHOULD only use these values if the client
   * declares ClientCapabilities.sampling.context. These values may be removed in future spec releases.
   */
  includeContext: xe(["none", "thisServer", "allServers"]).optional(),
  temperature: le().optional(),
  /**
   * The requested maximum number of tokens to sample (to prevent runaway completions).
   *
   * The client MAY choose to sample fewer tokens than the requested maximum.
   */
  maxTokens: le().int(),
  stopSequences: L(E()).optional(),
  /**
   * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
   */
  metadata: Ne.optional(),
  /**
   * Tools that the model may use during generation.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   */
  tools: L(sc).optional(),
  /**
   * Controls how the model uses tools.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   * Default is `{ mode: "auto" }`.
   */
  toolChoice: Yp.optional()
}), cc = je.extend({
  method: G("sampling/createMessage"),
  params: rm
}), uc = Me.extend({
  /**
   * The name of the model that generated the message.
   */
  model: E(),
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
  stopReason: be(xe(["endTurn", "stopSequence", "maxTokens"]).or(E())),
  role: ar,
  /**
   * Response content. Single content block (text, image, or audio).
   */
  content: em
}), lc = Me.extend({
  /**
   * The name of the model that generated the message.
   */
  model: E(),
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
  stopReason: be(xe(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(E())),
  role: ar,
  /**
   * Response content. May be a single block or array. May include ToolUseContent if stopReason is "toolUse".
   */
  content: _e([nn, L(nn)])
}), nm = F({
  type: G("boolean"),
  title: E().optional(),
  description: E().optional(),
  default: he().optional()
}), om = F({
  type: G("string"),
  title: E().optional(),
  description: E().optional(),
  minLength: le().optional(),
  maxLength: le().optional(),
  format: xe(["email", "uri", "date", "date-time"]).optional(),
  default: E().optional()
}), sm = F({
  type: xe(["number", "integer"]),
  title: E().optional(),
  description: E().optional(),
  minimum: le().optional(),
  maximum: le().optional(),
  default: le().optional()
}), am = F({
  type: G("string"),
  title: E().optional(),
  description: E().optional(),
  enum: L(E()),
  default: E().optional()
}), im = F({
  type: G("string"),
  title: E().optional(),
  description: E().optional(),
  oneOf: L(F({
    const: E(),
    title: E()
  })),
  default: E().optional()
}), cm = F({
  type: G("string"),
  title: E().optional(),
  description: E().optional(),
  enum: L(E()),
  enumNames: L(E()).optional(),
  default: E().optional()
}), um = _e([am, im]), lm = F({
  type: G("array"),
  title: E().optional(),
  description: E().optional(),
  minItems: le().optional(),
  maxItems: le().optional(),
  items: F({
    type: G("string"),
    enum: L(E())
  }),
  default: L(E()).optional()
}), dm = F({
  type: G("array"),
  title: E().optional(),
  description: E().optional(),
  minItems: le().optional(),
  maxItems: le().optional(),
  items: F({
    anyOf: L(F({
      const: E(),
      title: E()
    }))
  }),
  default: L(E()).optional()
}), fm = _e([lm, dm]), hm = _e([cm, um, fm]), pm = _e([hm, nm, om, sm]), mm = tr.extend({
  /**
   * The elicitation mode.
   *
   * Optional for backward compatibility. Clients MUST treat missing mode as "form".
   */
  mode: G("form").optional(),
  /**
   * The message to present to the user describing what information is being requested.
   */
  message: E(),
  /**
   * A restricted subset of JSON Schema.
   * Only top-level properties are allowed, without nesting.
   */
  requestedSchema: F({
    type: G("object"),
    properties: we(E(), pm),
    required: L(E()).optional()
  })
}), _m = tr.extend({
  /**
   * The elicitation mode.
   */
  mode: G("url"),
  /**
   * The message to present to the user explaining why the interaction is needed.
   */
  message: E(),
  /**
   * The ID of the elicitation, which must be unique within the context of the server.
   * The client MUST treat this ID as an opaque value.
   */
  elicitationId: E(),
  /**
   * The URL that the user should navigate to.
   */
  url: E().url()
}), gm = _e([mm, _m]), dc = je.extend({
  method: G("elicitation/create"),
  params: gm
}), ym = We.extend({
  /**
   * The ID of the elicitation that completed.
   */
  elicitationId: E()
}), vm = Ge.extend({
  method: G("notifications/elicitation/complete"),
  params: ym
}), fc = Me.extend({
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
  content: Zi((e) => e === null ? void 0 : e, we(E(), _e([E(), le(), he(), L(E())])).optional())
}), wm = F({
  type: G("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: E()
}), $m = F({
  type: G("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: E()
}), bm = He.extend({
  ref: _e([$m, wm]),
  /**
   * The argument's information
   */
  argument: F({
    /**
     * The name of the argument
     */
    name: E(),
    /**
     * The value of the argument to use for completion matching.
     */
    value: E()
  }),
  context: F({
    /**
     * Previously-resolved variables in a URI template or prompt.
     */
    arguments: we(E(), E()).optional()
  }).optional()
}), Sm = je.extend({
  method: G("completion/complete"),
  params: bm
}), hc = Me.extend({
  completion: ze({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: L(E()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: be(le().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: be(he())
  })
}), km = F({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: E().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: E().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: we(E(), ve()).optional()
}), Em = je.extend({
  method: G("roots/list"),
  params: He.optional()
}), Tm = Me.extend({
  roots: L(km)
}), Pm = Ge.extend({
  method: G("notifications/roots/list_changed"),
  params: We.optional()
});
_e([
  qo,
  dp,
  Sm,
  Jp,
  Mp,
  Np,
  $p,
  bp,
  kp,
  Tp,
  Rp,
  xp,
  Lp,
  Uo,
  Zo,
  Vo,
  Fo
]);
_e([
  Mo,
  Ao,
  Ji,
  Pm,
  rn
]);
_e([
  Ct,
  uc,
  lc,
  fc,
  Tm,
  Do,
  Lo,
  er
]);
_e([
  qo,
  cc,
  dc,
  Em,
  Uo,
  Zo,
  Vo,
  Fo
]);
_e([
  Mo,
  Ao,
  Gp,
  Cp,
  tc,
  ac,
  oc,
  rn,
  vm
]);
_e([
  Ct,
  Ki,
  hc,
  nc,
  rc,
  Yi,
  Xi,
  ec,
  bn,
  Bo,
  Do,
  Lo,
  er
]);
class Y extends Error {
  constructor(t, r, n) {
    super(`MCP error ${t}: ${r}`), this.code = t, this.data = n, this.name = "McpError";
  }
  /**
   * Factory method to create the appropriate error type based on the error code and data
   */
  static fromError(t, r, n) {
    if (t === X.UrlElicitationRequired && n) {
      const o = n;
      if (o.elicitations)
        return new Rm(o.elicitations, r);
    }
    return new Y(t, r, n);
  }
}
class Rm extends Y {
  constructor(t, r = `URL elicitation${t.length > 1 ? "s" : ""} required`) {
    super(X.UrlElicitationRequired, r, {
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
  const t = Ri(e), r = t == null ? void 0 : t.method;
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
const Im = 6e4;
class Cm {
  constructor(t) {
    this._options = t, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(Mo, (r) => {
      this._oncancel(r);
    }), this.setNotificationHandler(Ao, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(
      qo,
      // Automatic pong by default.
      (r) => ({})
    ), this._taskStore = t == null ? void 0 : t.taskStore, this._taskMessageQueue = t == null ? void 0 : t.taskMessageQueue, this._taskStore && (this.setRequestHandler(Uo, async (r, n) => {
      const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
      if (!o)
        throw new Y(X.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...o
      };
    }), this.setRequestHandler(Zo, async (r, n) => {
      const o = async () => {
        var i;
        const s = r.params.taskId;
        if (this._taskMessageQueue) {
          let c;
          for (; c = await this._taskMessageQueue.dequeue(s, n.sessionId); ) {
            if (c.type === "response" || c.type === "error") {
              const u = c.message, l = u.id, y = this._requestResolvers.get(l);
              if (y)
                if (this._requestResolvers.delete(l), c.type === "response")
                  y(u);
                else {
                  const g = u, p = new Y(g.error.code, g.error.message, g.error.data);
                  y(p);
                }
              else {
                const g = c.type === "response" ? "Response" : "Error";
                this._onerror(new Error(`${g} handler missing for request ${l}`));
              }
              continue;
            }
            await ((i = this._transport) == null ? void 0 : i.send(c.message, { relatedRequestId: n.requestId }));
          }
        }
        const a = await this._taskStore.getTask(s, n.sessionId);
        if (!a)
          throw new Y(X.InvalidParams, `Task not found: ${s}`);
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
    }), this.setRequestHandler(Vo, async (r, n) => {
      var o;
      try {
        const { tasks: s, nextCursor: a } = await this._taskStore.listTasks((o = r.params) == null ? void 0 : o.cursor, n.sessionId);
        return {
          tasks: s,
          nextCursor: a,
          _meta: {}
        };
      } catch (s) {
        throw new Y(X.InvalidParams, `Failed to list tasks: ${s instanceof Error ? s.message : String(s)}`);
      }
    }), this.setRequestHandler(Fo, async (r, n) => {
      try {
        const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
        if (!o)
          throw new Y(X.InvalidParams, `Task not found: ${r.params.taskId}`);
        if (ht(o.status))
          throw new Y(X.InvalidParams, `Cannot cancel task in terminal status: ${o.status}`);
        await this._taskStore.updateTaskStatus(r.params.taskId, "cancelled", "Client cancelled task execution.", n.sessionId), this._clearTaskQueue(r.params.taskId);
        const s = await this._taskStore.getTask(r.params.taskId, n.sessionId);
        if (!s)
          throw new Y(X.InvalidParams, `Task not found after cancellation: ${r.params.taskId}`);
        return {
          _meta: {},
          ...s
        };
      } catch (o) {
        throw o instanceof Y ? o : new Y(X.InvalidRequest, `Failed to cancel task: ${o instanceof Error ? o.message : String(o)}`);
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
      throw this._timeoutInfo.delete(t), Y.fromError(X.RequestTimeout, "Maximum total timeout exceeded", {
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
      o == null || o(c, u), Jt(c) || rp(c) ? this._onresponse(c) : ro(c) ? this._onrequest(c, u) : tp(c) ? this._onnotification(c) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(c)}`));
    }, await this._transport.start();
  }
  _onclose() {
    var n;
    const t = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const o of this._requestHandlerAbortControllers.values())
      o.abort();
    this._requestHandlerAbortControllers.clear();
    const r = Y.fromError(X.ConnectionClosed, "Connection closed");
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
    var l, y, g, p;
    const n = this._requestHandlers.get(t.method) ?? this.fallbackRequestHandler, o = this._transport, s = (g = (y = (l = t.params) == null ? void 0 : l._meta) == null ? void 0 : y[gt]) == null ? void 0 : g.taskId;
    if (n === void 0) {
      const v = {
        jsonrpc: "2.0",
        id: t.id,
        error: {
          code: X.MethodNotFound,
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
      _meta: (p = t.params) == null ? void 0 : p._meta,
      sendNotification: async (v) => {
        if (a.signal.aborted)
          return;
        const w = { relatedRequestId: t.id };
        s && (w.relatedTask = { taskId: s }), await this.notification(v, w);
      },
      sendRequest: async (v, w, f) => {
        var _;
        if (a.signal.aborted)
          throw new Y(X.ConnectionClosed, "Request was cancelled");
        const m = { ...f, relatedRequestId: t.id };
        s && !m.relatedTask && (m.relatedTask = { taskId: s });
        const d = ((_ = m.relatedTask) == null ? void 0 : _.taskId) ?? s;
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
          code: Number.isSafeInteger(v.code) ? v.code : X.InternalError,
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
      if (this._requestResolvers.delete(r), Jt(t))
        n(t);
      else {
        const a = new Y(t.error.code, t.error.message, t.error.data);
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
    if (Jt(t) && t.result && typeof t.result == "object") {
      const a = t.result;
      if (a.task && typeof a.task == "object") {
        const i = a.task;
        typeof i.taskId == "string" && (s = !0, this._taskProgressTokens.set(i.taskId, r));
      }
    }
    if (s || this._progressHandlers.delete(r), Jt(t))
      o(t);
    else {
      const a = Y.fromError(t.error.code, t.error.message, t.error.data);
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
          error: c instanceof Y ? c : new Y(X.InternalError, String(c))
        };
      }
      return;
    }
    let s;
    try {
      const c = await this.request(t, er, n);
      if (c.task)
        s = c.task.taskId, yield { type: "taskCreated", task: c.task };
      else
        throw new Y(X.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const u = await this.getTask({ taskId: s }, n);
        if (yield { type: "taskStatus", task: u }, ht(u.status)) {
          u.status === "completed" ? yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) } : u.status === "failed" ? yield {
            type: "error",
            error: new Y(X.InternalError, `Task ${s} failed`)
          } : u.status === "cancelled" && (yield {
            type: "error",
            error: new Y(X.InternalError, `Task ${s} was cancelled`)
          });
          return;
        }
        if (u.status === "input_required") {
          yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) };
          return;
        }
        const l = u.pollInterval ?? ((a = this._options) == null ? void 0 : a.defaultTaskPollInterval) ?? 1e3;
        await new Promise((y) => setTimeout(y, l)), (i = n == null ? void 0 : n.signal) == null || i.throwIfAborted();
      }
    } catch (c) {
      yield {
        type: "error",
        error: c instanceof Y ? c : new Y(X.InternalError, String(c))
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
      var d, _, b, h, $;
      const y = (k) => {
        l(k);
      };
      if (!this._transport) {
        y(new Error("Not connected"));
        return;
      }
      if (((d = this._options) == null ? void 0 : d.enforceStrictCapabilities) === !0)
        try {
          this.assertCapabilityForMethod(t.method), i && this.assertTaskCapability(t.method);
        } catch (k) {
          y(k);
          return;
        }
      (_ = n == null ? void 0 : n.signal) == null || _.throwIfAborted();
      const g = this._requestMessageId++, p = {
        ...t,
        jsonrpc: "2.0",
        id: g
      };
      n != null && n.onprogress && (this._progressHandlers.set(g, n.onprogress), p.params = {
        ...t.params,
        _meta: {
          ...((b = t.params) == null ? void 0 : b._meta) || {},
          progressToken: g
        }
      }), i && (p.params = {
        ...p.params,
        task: i
      }), c && (p.params = {
        ...p.params,
        _meta: {
          ...((h = p.params) == null ? void 0 : h._meta) || {},
          [gt]: c
        }
      });
      const v = (k) => {
        var A;
        this._responseHandlers.delete(g), this._progressHandlers.delete(g), this._cleanupTimeout(g), (A = this._transport) == null || A.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: g,
            reason: String(k)
          }
        }, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((Z) => this._onerror(new Error(`Failed to send cancellation: ${Z}`)));
        const C = k instanceof Y ? k : new Y(X.RequestTimeout, String(k));
        l(C);
      };
      this._responseHandlers.set(g, (k) => {
        var C;
        if (!((C = n == null ? void 0 : n.signal) != null && C.aborted)) {
          if (k instanceof Error)
            return l(k);
          try {
            const A = at(r, k.result);
            A.success ? u(A.data) : l(A.error);
          } catch (A) {
            l(A);
          }
        }
      }), ($ = n == null ? void 0 : n.signal) == null || $.addEventListener("abort", () => {
        var k;
        v((k = n == null ? void 0 : n.signal) == null ? void 0 : k.reason);
      });
      const w = (n == null ? void 0 : n.timeout) ?? Im, f = () => v(Y.fromError(X.RequestTimeout, "Request timed out", { timeout: w }));
      this._setupTimeout(g, w, n == null ? void 0 : n.maxTotalTimeout, f, (n == null ? void 0 : n.resetTimeoutOnProgress) ?? !1);
      const m = c == null ? void 0 : c.taskId;
      if (m) {
        const k = (C) => {
          const A = this._responseHandlers.get(g);
          A ? A(C) : this._onerror(new Error(`Response handler missing for side-channeled request ${g}`));
        };
        this._requestResolvers.set(g, k), this._enqueueTaskMessage(m, {
          type: "request",
          message: p,
          timestamp: Date.now()
        }).catch((C) => {
          this._cleanupTimeout(g), l(C);
        });
      } else
        this._transport.send(p, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((k) => {
          this._cleanupTimeout(g), l(k);
        });
    });
  }
  /**
   * Gets the current status of a task.
   *
   * @experimental Use `client.experimental.tasks.getTask()` to access this method.
   */
  async getTask(t, r) {
    return this.request({ method: "tasks/get", params: t }, Do, r);
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
    return this.request({ method: "tasks/list", params: t }, Lo, r);
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
      const y = {
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
        message: y,
        timestamp: Date.now()
      });
      return;
    }
    if ((((u = this._options) == null ? void 0 : u.debouncedNotificationMethods) ?? []).includes(t.method) && !t.params && !(r != null && r.relatedRequestId) && !(r != null && r.relatedTask)) {
      if (this._pendingDebouncedNotifications.has(t.method))
        return;
      this._pendingDebouncedNotifications.add(t.method), Promise.resolve().then(() => {
        var g, p;
        if (this._pendingDebouncedNotifications.delete(t.method), !this._transport)
          return;
        let y = {
          ...t,
          jsonrpc: "2.0"
        };
        r != null && r.relatedTask && (y = {
          ...y,
          params: {
            ...y.params,
            _meta: {
              ...((g = y.params) == null ? void 0 : g._meta) || {},
              [gt]: r.relatedTask
            }
          }
        }), (p = this._transport) == null || p.send(y, r).catch((v) => this._onerror(v));
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
        if (o.type === "request" && ro(o.message)) {
          const s = o.message.id, a = this._requestResolvers.get(s);
          a ? (a(new Y(X.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(s)) : this._onerror(new Error(`Resolver missing for request ${s} during task ${t} cleanup`));
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
        i(new Y(X.InvalidRequest, "Request cancelled"));
        return;
      }
      const c = setTimeout(a, n);
      r.addEventListener("abort", () => {
        clearTimeout(c), i(new Y(X.InvalidRequest, "Request cancelled"));
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
          throw new Y(X.InvalidParams, "Failed to retrieve task: Task not found");
        return s;
      },
      storeTaskResult: async (o, s, a) => {
        await n.storeTaskResult(o, s, a, r);
        const i = await n.getTask(o, r);
        if (i) {
          const c = rn.parse({
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
          throw new Y(X.InvalidParams, `Task "${o}" not found - it may have been cleaned up`);
        if (ht(i.status))
          throw new Y(X.InvalidParams, `Cannot update task "${o}" from terminal status "${i.status}" to "${s}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await n.updateTaskStatus(o, s, a, r);
        const c = await n.getTask(o, r);
        if (c) {
          const u = rn.parse({
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
var lr = { exports: {} }, jn = {}, tt = {}, pt = {}, Mn = {}, qn = {}, An = {}, Is;
function on() {
  return Is || (Is = 1, function(e) {
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
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((_, b) => `${_}${b}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((_, b) => (b instanceof r && (_[b.str] = (_[b.str] || 0) + 1), _), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(m, ...d) {
      const _ = [m[0]];
      let b = 0;
      for (; b < d.length; )
        i(_, d[b]), _.push(m[++b]);
      return new n(_);
    }
    e._ = o;
    const s = new n("+");
    function a(m, ...d) {
      const _ = [p(m[0])];
      let b = 0;
      for (; b < d.length; )
        _.push(s), i(_, d[b]), _.push(s, p(m[++b]));
      return c(_), new n(_);
    }
    e.str = a;
    function i(m, d) {
      d instanceof n ? m.push(...d._items) : d instanceof r ? m.push(d) : m.push(y(d));
    }
    e.addCodeArg = i;
    function c(m) {
      let d = 1;
      for (; d < m.length - 1; ) {
        if (m[d] === s) {
          const _ = u(m[d - 1], m[d + 1]);
          if (_ !== void 0) {
            m.splice(d - 1, 3, _);
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
    function y(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : p(Array.isArray(m) ? m.join(",") : m);
    }
    function g(m) {
      return new n(p(m));
    }
    e.stringify = g;
    function p(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = p;
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
    function f(m) {
      return new n(m.toString());
    }
    e.regexpCode = f;
  }(An)), An;
}
var Un = {}, Cs;
function Os() {
  return Cs || (Cs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ on();
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
        var l, y;
        if (!((y = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || y === void 0) && y.has(u) || this._prefixes && !this._prefixes.has(u))
          throw new Error(`CodeGen: prefix "${u}" is not allowed in this scope`);
        return this._names[u] = { prefix: u, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(u, l) {
        super(l), this.prefix = u;
      }
      setValue(u, { property: l, itemIndex: y }) {
        this.value = u, this.scopePath = (0, t._)`.${new t.Name(l)}[${y}]`;
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
        var y;
        if (l.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const g = this.toName(u), { prefix: p } = g, v = (y = l.key) !== null && y !== void 0 ? y : l.ref;
        let w = this._values[p];
        if (w) {
          const d = w.get(v);
          if (d)
            return d;
        } else
          w = this._values[p] = /* @__PURE__ */ new Map();
        w.set(v, g);
        const f = this._scope[p] || (this._scope[p] = []), m = f.length;
        return f[m] = l.ref, g.setValue(l, { property: p, itemIndex: m }), g;
      }
      getValue(u, l) {
        const y = this._values[u];
        if (y)
          return y.get(l);
      }
      scopeRefs(u, l = this._values) {
        return this._reduceValues(l, (y) => {
          if (y.scopePath === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return (0, t._)`${u}${y.scopePath}`;
        });
      }
      scopeCode(u = this._values, l, y) {
        return this._reduceValues(u, (g) => {
          if (g.value === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return g.value.code;
        }, l, y);
      }
      _reduceValues(u, l, y = {}, g) {
        let p = t.nil;
        for (const v in u) {
          const w = u[v];
          if (!w)
            continue;
          const f = y[v] = y[v] || /* @__PURE__ */ new Map();
          w.forEach((m) => {
            if (f.has(m))
              return;
            f.set(m, n.Started);
            let d = l(m);
            if (d) {
              const _ = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              p = (0, t._)`${p}${_} ${m} = ${d};${this.opts._n}`;
            } else if (d = g == null ? void 0 : g(m))
              p = (0, t._)`${p}${d}${this.opts._n}`;
            else
              throw new r(m);
            f.set(m, n.Completed);
          });
        }
        return p;
      }
    }
    e.ValueScope = i;
  }(Un)), Un;
}
var zs;
function te() {
  return zs || (zs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ on(), r = /* @__PURE__ */ Os();
    var n = /* @__PURE__ */ on();
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
    var o = /* @__PURE__ */ Os();
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
      optimizeNames(S, T) {
        return this;
      }
    }
    class a extends s {
      constructor(S, T, N) {
        super(), this.varKind = S, this.name = T, this.rhs = N;
      }
      render({ es5: S, _n: T }) {
        const N = S ? r.varKinds.var : this.varKind, W = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${N} ${this.name}${W};` + T;
      }
      optimizeNames(S, T) {
        if (S[this.name.str])
          return this.rhs && (this.rhs = K(this.rhs, S, T)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor(S, T, N) {
        super(), this.lhs = S, this.rhs = T, this.sideEffects = N;
      }
      render({ _n: S }) {
        return `${this.lhs} = ${this.rhs};` + S;
      }
      optimizeNames(S, T) {
        if (!(this.lhs instanceof t.Name && !S[this.lhs.str] && !this.sideEffects))
          return this.rhs = K(this.rhs, S, T), this;
      }
      get names() {
        const S = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return H(S, this.rhs);
      }
    }
    class c extends i {
      constructor(S, T, N, W) {
        super(S, N, W), this.op = T;
      }
      render({ _n: S }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + S;
      }
    }
    class u extends s {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `${this.label}:` + S;
      }
    }
    class l extends s {
      constructor(S) {
        super(), this.label = S, this.names = {};
      }
      render({ _n: S }) {
        return `break${this.label ? ` ${this.label}` : ""};` + S;
      }
    }
    class y extends s {
      constructor(S) {
        super(), this.error = S;
      }
      render({ _n: S }) {
        return `throw ${this.error};` + S;
      }
      get names() {
        return this.error.names;
      }
    }
    class g extends s {
      constructor(S) {
        super(), this.code = S;
      }
      render({ _n: S }) {
        return `${this.code};` + S;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(S, T) {
        return this.code = K(this.code, S, T), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class p extends s {
      constructor(S = []) {
        super(), this.nodes = S;
      }
      render(S) {
        return this.nodes.reduce((T, N) => T + N.render(S), "");
      }
      optimizeNodes() {
        const { nodes: S } = this;
        let T = S.length;
        for (; T--; ) {
          const N = S[T].optimizeNodes();
          Array.isArray(N) ? S.splice(T, 1, ...N) : N ? S[T] = N : S.splice(T, 1);
        }
        return S.length > 0 ? this : void 0;
      }
      optimizeNames(S, T) {
        const { nodes: N } = this;
        let W = N.length;
        for (; W--; ) {
          const Q = N[W];
          Q.optimizeNames(S, T) || (ae(S, Q.names), N.splice(W, 1));
        }
        return N.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((S, T) => V(S, T.names), {});
      }
    }
    class v extends p {
      render(S) {
        return "{" + S._n + super.render(S) + "}" + S._n;
      }
    }
    class w extends p {
    }
    class f extends v {
    }
    f.kind = "else";
    class m extends v {
      constructor(S, T) {
        super(T), this.condition = S;
      }
      render(S) {
        let T = `if(${this.condition})` + super.render(S);
        return this.else && (T += "else " + this.else.render(S)), T;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const S = this.condition;
        if (S === !0)
          return this.nodes;
        let T = this.else;
        if (T) {
          const N = T.optimizeNodes();
          T = this.else = Array.isArray(N) ? new f(N) : N;
        }
        if (T)
          return S === !1 ? T instanceof m ? T : T.nodes : this.nodes.length ? this : new m(Pe(S), T instanceof m ? [T] : T.nodes);
        if (!(S === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(S, T) {
        var N;
        if (this.else = (N = this.else) === null || N === void 0 ? void 0 : N.optimizeNames(S, T), !!(super.optimizeNames(S, T) || this.else))
          return this.condition = K(this.condition, S, T), this;
      }
      get names() {
        const S = super.names;
        return H(S, this.condition), this.else && V(S, this.else.names), S;
      }
    }
    m.kind = "if";
    class d extends v {
    }
    d.kind = "for";
    class _ extends d {
      constructor(S) {
        super(), this.iteration = S;
      }
      render(S) {
        return `for(${this.iteration})` + super.render(S);
      }
      optimizeNames(S, T) {
        if (super.optimizeNames(S, T))
          return this.iteration = K(this.iteration, S, T), this;
      }
      get names() {
        return V(super.names, this.iteration.names);
      }
    }
    class b extends d {
      constructor(S, T, N, W) {
        super(), this.varKind = S, this.name = T, this.from = N, this.to = W;
      }
      render(S) {
        const T = S.es5 ? r.varKinds.var : this.varKind, { name: N, from: W, to: Q } = this;
        return `for(${T} ${N}=${W}; ${N}<${Q}; ${N}++)` + super.render(S);
      }
      get names() {
        const S = H(super.names, this.from);
        return H(S, this.to);
      }
    }
    class h extends d {
      constructor(S, T, N, W) {
        super(), this.loop = S, this.varKind = T, this.name = N, this.iterable = W;
      }
      render(S) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(S);
      }
      optimizeNames(S, T) {
        if (super.optimizeNames(S, T))
          return this.iterable = K(this.iterable, S, T), this;
      }
      get names() {
        return V(super.names, this.iterable.names);
      }
    }
    class $ extends v {
      constructor(S, T, N) {
        super(), this.name = S, this.args = T, this.async = N;
      }
      render(S) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(S);
      }
    }
    $.kind = "func";
    class k extends p {
      render(S) {
        return "return " + super.render(S);
      }
    }
    k.kind = "return";
    class C extends v {
      render(S) {
        let T = "try" + super.render(S);
        return this.catch && (T += this.catch.render(S)), this.finally && (T += this.finally.render(S)), T;
      }
      optimizeNodes() {
        var S, T;
        return super.optimizeNodes(), (S = this.catch) === null || S === void 0 || S.optimizeNodes(), (T = this.finally) === null || T === void 0 || T.optimizeNodes(), this;
      }
      optimizeNames(S, T) {
        var N, W;
        return super.optimizeNames(S, T), (N = this.catch) === null || N === void 0 || N.optimizeNames(S, T), (W = this.finally) === null || W === void 0 || W.optimizeNames(S, T), this;
      }
      get names() {
        const S = super.names;
        return this.catch && V(S, this.catch.names), this.finally && V(S, this.finally.names), S;
      }
    }
    class A extends v {
      constructor(S) {
        super(), this.error = S;
      }
      render(S) {
        return `catch(${this.error})` + super.render(S);
      }
    }
    A.kind = "catch";
    class Z extends v {
      render(S) {
        return "finally" + super.render(S);
      }
    }
    Z.kind = "finally";
    class j {
      constructor(S, T = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...T, _n: T.lines ? `
` : "" }, this._extScope = S, this._scope = new r.Scope({ parent: S }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(S) {
        return this._scope.name(S);
      }
      // reserves unique name in the external scope
      scopeName(S) {
        return this._extScope.name(S);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(S, T) {
        const N = this._extScope.value(S, T);
        return (this._values[N.prefix] || (this._values[N.prefix] = /* @__PURE__ */ new Set())).add(N), N;
      }
      getScopeValue(S, T) {
        return this._extScope.getValue(S, T);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(S) {
        return this._extScope.scopeRefs(S, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(S, T, N, W) {
        const Q = this._scope.toName(T);
        return N !== void 0 && W && (this._constants[Q.str] = N), this._leafNode(new a(S, Q, N)), Q;
      }
      // `const` declaration (`var` in es5 mode)
      const(S, T, N) {
        return this._def(r.varKinds.const, S, T, N);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(S, T, N) {
        return this._def(r.varKinds.let, S, T, N);
      }
      // `var` declaration with optional assignment
      var(S, T, N) {
        return this._def(r.varKinds.var, S, T, N);
      }
      // assignment code
      assign(S, T, N) {
        return this._leafNode(new i(S, T, N));
      }
      // `+=` code
      add(S, T) {
        return this._leafNode(new c(S, e.operators.ADD, T));
      }
      // appends passed SafeExpr to code or executes Block
      code(S) {
        return typeof S == "function" ? S() : S !== t.nil && this._leafNode(new g(S)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...S) {
        const T = ["{"];
        for (const [N, W] of S)
          T.length > 1 && T.push(","), T.push(N), (N !== W || this.opts.es5) && (T.push(":"), (0, t.addCodeArg)(T, W));
        return T.push("}"), new t._Code(T);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(S, T, N) {
        if (this._blockNode(new m(S)), T && N)
          this.code(T).else().code(N).endIf();
        else if (T)
          this.code(T).endIf();
        else if (N)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(S) {
        return this._elseNode(new m(S));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, f);
      }
      _for(S, T) {
        return this._blockNode(S), T && this.code(T).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(S, T) {
        return this._for(new _(S), T);
      }
      // `for` statement for a range of values
      forRange(S, T, N, W, Q = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const ie = this._scope.toName(S);
        return this._for(new b(Q, ie, T, N), () => W(ie));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(S, T, N, W = r.varKinds.const) {
        const Q = this._scope.toName(S);
        if (this.opts.es5) {
          const ie = T instanceof t.Name ? T : this.var("_arr", T);
          return this.forRange("_i", 0, (0, t._)`${ie}.length`, (oe) => {
            this.var(Q, (0, t._)`${ie}[${oe}]`), N(Q);
          });
        }
        return this._for(new h("of", W, Q, T), () => N(Q));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(S, T, N, W = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(S, (0, t._)`Object.keys(${T})`, N);
        const Q = this._scope.toName(S);
        return this._for(new h("in", W, Q, T), () => N(Q));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label(S) {
        return this._leafNode(new u(S));
      }
      // `break` statement
      break(S) {
        return this._leafNode(new l(S));
      }
      // `return` statement
      return(S) {
        const T = new k();
        if (this._blockNode(T), this.code(S), T.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(k);
      }
      // `try` statement
      try(S, T, N) {
        if (!T && !N)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const W = new C();
        if (this._blockNode(W), this.code(S), T) {
          const Q = this.name("e");
          this._currNode = W.catch = new A(Q), T(Q);
        }
        return N && (this._currNode = W.finally = new Z(), this.code(N)), this._endBlockNode(A, Z);
      }
      // `throw` statement
      throw(S) {
        return this._leafNode(new y(S));
      }
      // start self-balancing block
      block(S, T) {
        return this._blockStarts.push(this._nodes.length), S && this.code(S).endBlock(T), this;
      }
      // end the current self-balancing block
      endBlock(S) {
        const T = this._blockStarts.pop();
        if (T === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const N = this._nodes.length - T;
        if (N < 0 || S !== void 0 && N !== S)
          throw new Error(`CodeGen: wrong number of nodes: ${N} vs ${S} expected`);
        return this._nodes.length = T, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(S, T = t.nil, N, W) {
        return this._blockNode(new $(S, T, N)), W && this.code(W).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode($);
      }
      optimize(S = 1) {
        for (; S-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(S) {
        return this._currNode.nodes.push(S), this;
      }
      _blockNode(S) {
        this._currNode.nodes.push(S), this._nodes.push(S);
      }
      _endBlockNode(S, T) {
        const N = this._currNode;
        if (N instanceof S || T && N instanceof T)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${T ? `${S.kind}/${T.kind}` : S.kind}"`);
      }
      _elseNode(S) {
        const T = this._currNode;
        if (!(T instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = T.else = S, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const S = this._nodes;
        return S[S.length - 1];
      }
      set _currNode(S) {
        const T = this._nodes;
        T[T.length - 1] = S;
      }
    }
    e.CodeGen = j;
    function V(O, S) {
      for (const T in S)
        O[T] = (O[T] || 0) + (S[T] || 0);
      return O;
    }
    function H(O, S) {
      return S instanceof t._CodeOrName ? V(O, S.names) : O;
    }
    function K(O, S, T) {
      if (O instanceof t.Name)
        return N(O);
      if (!W(O))
        return O;
      return new t._Code(O._items.reduce((Q, ie) => (ie instanceof t.Name && (ie = N(ie)), ie instanceof t._Code ? Q.push(...ie._items) : Q.push(ie), Q), []));
      function N(Q) {
        const ie = T[Q.str];
        return ie === void 0 || S[Q.str] !== 1 ? Q : (delete S[Q.str], ie);
      }
      function W(Q) {
        return Q instanceof t._Code && Q._items.some((ie) => ie instanceof t.Name && S[ie.str] === 1 && T[ie.str] !== void 0);
      }
    }
    function ae(O, S) {
      for (const T in S)
        O[T] = (O[T] || 0) - (S[T] || 0);
    }
    function Pe(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${M(O)}`;
    }
    e.not = Pe;
    const Ee = R(e.operators.AND);
    function x(...O) {
      return O.reduce(Ee);
    }
    e.and = x;
    const ce = R(e.operators.OR);
    function U(...O) {
      return O.reduce(ce);
    }
    e.or = U;
    function R(O) {
      return (S, T) => S === t.nil ? T : T === t.nil ? S : (0, t._)`${M(S)} ${O} ${M(T)}`;
    }
    function M(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  }(qn)), qn;
}
var ee = {}, Ns;
function se() {
  if (Ns) return ee;
  Ns = 1, Object.defineProperty(ee, "__esModule", { value: !0 }), ee.checkStrictMode = ee.getErrorPath = ee.Type = ee.useFunc = ee.setEvaluated = ee.evaluatedPropsToName = ee.mergeEvaluated = ee.eachItem = ee.unescapeJsonPointer = ee.escapeJsonPointer = ee.escapeFragment = ee.unescapeFragment = ee.schemaRefOrVal = ee.schemaHasRulesButRef = ee.schemaHasRules = ee.checkUnknownRules = ee.alwaysValidSchema = ee.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ on();
  function r(h) {
    const $ = {};
    for (const k of h)
      $[k] = !0;
    return $;
  }
  ee.toHash = r;
  function n(h, $) {
    return typeof $ == "boolean" ? $ : Object.keys($).length === 0 ? !0 : (o(h, $), !s($, h.self.RULES.all));
  }
  ee.alwaysValidSchema = n;
  function o(h, $ = h.schema) {
    const { opts: k, self: C } = h;
    if (!k.strictSchema || typeof $ == "boolean")
      return;
    const A = C.RULES.keywords;
    for (const Z in $)
      A[Z] || b(h, `unknown keyword: "${Z}"`);
  }
  ee.checkUnknownRules = o;
  function s(h, $) {
    if (typeof h == "boolean")
      return !h;
    for (const k in h)
      if ($[k])
        return !0;
    return !1;
  }
  ee.schemaHasRules = s;
  function a(h, $) {
    if (typeof h == "boolean")
      return !h;
    for (const k in h)
      if (k !== "$ref" && $.all[k])
        return !0;
    return !1;
  }
  ee.schemaHasRulesButRef = a;
  function i({ topSchemaRef: h, schemaPath: $ }, k, C, A) {
    if (!A) {
      if (typeof k == "number" || typeof k == "boolean")
        return k;
      if (typeof k == "string")
        return (0, e._)`${k}`;
    }
    return (0, e._)`${h}${$}${(0, e.getProperty)(C)}`;
  }
  ee.schemaRefOrVal = i;
  function c(h) {
    return y(decodeURIComponent(h));
  }
  ee.unescapeFragment = c;
  function u(h) {
    return encodeURIComponent(l(h));
  }
  ee.escapeFragment = u;
  function l(h) {
    return typeof h == "number" ? `${h}` : h.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ee.escapeJsonPointer = l;
  function y(h) {
    return h.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ee.unescapeJsonPointer = y;
  function g(h, $) {
    if (Array.isArray(h))
      for (const k of h)
        $(k);
    else
      $(h);
  }
  ee.eachItem = g;
  function p({ mergeNames: h, mergeToName: $, mergeValues: k, resultToName: C }) {
    return (A, Z, j, V) => {
      const H = j === void 0 ? Z : j instanceof e.Name ? (Z instanceof e.Name ? h(A, Z, j) : $(A, Z, j), j) : Z instanceof e.Name ? ($(A, j, Z), Z) : k(Z, j);
      return V === e.Name && !(H instanceof e.Name) ? C(A, H) : H;
    };
  }
  ee.mergeEvaluated = {
    props: p({
      mergeNames: (h, $, k) => h.if((0, e._)`${k} !== true && ${$} !== undefined`, () => {
        h.if((0, e._)`${$} === true`, () => h.assign(k, !0), () => h.assign(k, (0, e._)`${k} || {}`).code((0, e._)`Object.assign(${k}, ${$})`));
      }),
      mergeToName: (h, $, k) => h.if((0, e._)`${k} !== true`, () => {
        $ === !0 ? h.assign(k, !0) : (h.assign(k, (0, e._)`${k} || {}`), w(h, k, $));
      }),
      mergeValues: (h, $) => h === !0 ? !0 : { ...h, ...$ },
      resultToName: v
    }),
    items: p({
      mergeNames: (h, $, k) => h.if((0, e._)`${k} !== true && ${$} !== undefined`, () => h.assign(k, (0, e._)`${$} === true ? true : ${k} > ${$} ? ${k} : ${$}`)),
      mergeToName: (h, $, k) => h.if((0, e._)`${k} !== true`, () => h.assign(k, $ === !0 ? !0 : (0, e._)`${k} > ${$} ? ${k} : ${$}`)),
      mergeValues: (h, $) => h === !0 ? !0 : Math.max(h, $),
      resultToName: (h, $) => h.var("items", $)
    })
  };
  function v(h, $) {
    if ($ === !0)
      return h.var("props", !0);
    const k = h.var("props", (0, e._)`{}`);
    return $ !== void 0 && w(h, k, $), k;
  }
  ee.evaluatedPropsToName = v;
  function w(h, $, k) {
    Object.keys(k).forEach((C) => h.assign((0, e._)`${$}${(0, e.getProperty)(C)}`, !0));
  }
  ee.setEvaluated = w;
  const f = {};
  function m(h, $) {
    return h.scopeValue("func", {
      ref: $,
      code: f[$.code] || (f[$.code] = new t._Code($.code))
    });
  }
  ee.useFunc = m;
  var d;
  (function(h) {
    h[h.Num = 0] = "Num", h[h.Str = 1] = "Str";
  })(d || (ee.Type = d = {}));
  function _(h, $, k) {
    if (h instanceof e.Name) {
      const C = $ === d.Num;
      return k ? C ? (0, e._)`"[" + ${h} + "]"` : (0, e._)`"['" + ${h} + "']"` : C ? (0, e._)`"/" + ${h}` : (0, e._)`"/" + ${h}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return k ? (0, e.getProperty)(h).toString() : "/" + l(h);
  }
  ee.getErrorPath = _;
  function b(h, $, k = h.opts.strictSchema) {
    if (k) {
      if ($ = `strict mode: ${$}`, k === !0)
        throw new Error($);
      h.self.logger.warn($);
    }
  }
  return ee.checkStrictMode = b, ee;
}
var dr = {}, js;
function ft() {
  if (js) return dr;
  js = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = {
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
  return dr.default = t, dr;
}
var Ms;
function Sn() {
  return Ms || (Ms = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ ft();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: m }) => m ? (0, t.str)`"${f}" keyword must be ${m} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function o(f, m = e.keywordError, d, _) {
      const { it: b } = f, { gen: h, compositeRule: $, allErrors: k } = b, C = y(f, m, d);
      _ ?? ($ || k) ? c(h, C) : u(b, (0, t._)`[${C}]`);
    }
    e.reportError = o;
    function s(f, m = e.keywordError, d) {
      const { it: _ } = f, { gen: b, compositeRule: h, allErrors: $ } = _, k = y(f, m, d);
      c(b, k), h || $ || u(_, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(f, m) {
      f.assign(n.default.errors, m), f.if((0, t._)`${n.default.vErrors} !== null`, () => f.if(m, () => f.assign((0, t._)`${n.default.vErrors}.length`, m), () => f.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: f, keyword: m, schemaValue: d, data: _, errsCount: b, it: h }) {
      if (b === void 0)
        throw new Error("ajv implementation error");
      const $ = f.name("err");
      f.forRange("i", b, n.default.errors, (k) => {
        f.const($, (0, t._)`${n.default.vErrors}[${k}]`), f.if((0, t._)`${$}.instancePath === undefined`, () => f.assign((0, t._)`${$}.instancePath`, (0, t.strConcat)(n.default.instancePath, h.errorPath))), f.assign((0, t._)`${$}.schemaPath`, (0, t.str)`${h.errSchemaPath}/${m}`), h.opts.verbose && (f.assign((0, t._)`${$}.schema`, d), f.assign((0, t._)`${$}.data`, _));
      });
    }
    e.extendErrors = i;
    function c(f, m) {
      const d = f.const("err", m);
      f.if((0, t._)`${n.default.vErrors} === null`, () => f.assign(n.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${n.default.vErrors}.push(${d})`), f.code((0, t._)`${n.default.errors}++`);
    }
    function u(f, m) {
      const { gen: d, validateName: _, schemaEnv: b } = f;
      b.$async ? d.throw((0, t._)`new ${f.ValidationError}(${m})`) : (d.assign((0, t._)`${_}.errors`, m), d.return(!1));
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
    function y(f, m, d) {
      const { createErrors: _ } = f.it;
      return _ === !1 ? (0, t._)`{}` : g(f, m, d);
    }
    function g(f, m, d = {}) {
      const { gen: _, it: b } = f, h = [
        p(b, d),
        v(f, d)
      ];
      return w(f, m, h), _.object(...h);
    }
    function p({ errorPath: f }, { instancePath: m }) {
      const d = m ? (0, t.str)`${f}${(0, r.getErrorPath)(m, r.Type.Str)}` : f;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, d)];
    }
    function v({ keyword: f, it: { errSchemaPath: m } }, { schemaPath: d, parentSchema: _ }) {
      let b = _ ? m : (0, t.str)`${m}/${f}`;
      return d && (b = (0, t.str)`${b}${(0, r.getErrorPath)(d, r.Type.Str)}`), [l.schemaPath, b];
    }
    function w(f, { params: m, message: d }, _) {
      const { keyword: b, data: h, schemaValue: $, it: k } = f, { opts: C, propertyName: A, topSchemaRef: Z, schemaPath: j } = k;
      _.push([l.keyword, b], [l.params, typeof m == "function" ? m(f) : m || (0, t._)`{}`]), C.messages && _.push([l.message, typeof d == "function" ? d(f) : d]), C.verbose && _.push([l.schema, $], [l.parentSchema, (0, t._)`${Z}${j}`], [n.default.data, h]), A && _.push([l.propertyName, A]);
    }
  }(Mn)), Mn;
}
var qs;
function zm() {
  if (qs) return pt;
  qs = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.boolOrEmptySchema = pt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Sn(), t = /* @__PURE__ */ te(), r = /* @__PURE__ */ ft(), n = {
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
    const { gen: u, data: l } = i, y = {
      gen: u,
      keyword: "false schema",
      data: l,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(y, n, void 0, c);
  }
  return pt;
}
var Ce = {}, mt = {}, As;
function pc() {
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
var rt = {}, Us;
function mc() {
  if (Us) return rt;
  Us = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.shouldUseRule = rt.shouldUseGroup = rt.schemaHasRulesForType = void 0;
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
var Ds;
function sn() {
  if (Ds) return Ce;
  Ds = 1, Object.defineProperty(Ce, "__esModule", { value: !0 }), Ce.reportTypeError = Ce.checkDataTypes = Ce.checkDataType = Ce.coerceAndCheckDataType = Ce.getJSONTypes = Ce.getSchemaTypes = Ce.DataType = void 0;
  const e = /* @__PURE__ */ pc(), t = /* @__PURE__ */ mc(), r = /* @__PURE__ */ Sn(), n = /* @__PURE__ */ te(), o = /* @__PURE__ */ se();
  var s;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(s || (Ce.DataType = s = {}));
  function a(d) {
    const _ = i(d.type);
    if (_.includes("null")) {
      if (d.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!_.length && d.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      d.nullable === !0 && _.push("null");
    }
    return _;
  }
  Ce.getSchemaTypes = a;
  function i(d) {
    const _ = Array.isArray(d) ? d : d ? [d] : [];
    if (_.every(e.isJSONType))
      return _;
    throw new Error("type must be JSONType or JSONType[]: " + _.join(","));
  }
  Ce.getJSONTypes = i;
  function c(d, _) {
    const { gen: b, data: h, opts: $ } = d, k = l(_, $.coerceTypes), C = _.length > 0 && !(k.length === 0 && _.length === 1 && (0, t.schemaHasRulesForType)(d, _[0]));
    if (C) {
      const A = v(_, h, $.strictNumbers, s.Wrong);
      b.if(A, () => {
        k.length ? y(d, _, k) : f(d);
      });
    }
    return C;
  }
  Ce.coerceAndCheckDataType = c;
  const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function l(d, _) {
    return _ ? d.filter((b) => u.has(b) || _ === "array" && b === "array") : [];
  }
  function y(d, _, b) {
    const { gen: h, data: $, opts: k } = d, C = h.let("dataType", (0, n._)`typeof ${$}`), A = h.let("coerced", (0, n._)`undefined`);
    k.coerceTypes === "array" && h.if((0, n._)`${C} == 'object' && Array.isArray(${$}) && ${$}.length == 1`, () => h.assign($, (0, n._)`${$}[0]`).assign(C, (0, n._)`typeof ${$}`).if(v(_, $, k.strictNumbers), () => h.assign(A, $))), h.if((0, n._)`${A} !== undefined`);
    for (const j of b)
      (u.has(j) || j === "array" && k.coerceTypes === "array") && Z(j);
    h.else(), f(d), h.endIf(), h.if((0, n._)`${A} !== undefined`, () => {
      h.assign($, A), g(d, A);
    });
    function Z(j) {
      switch (j) {
        case "string":
          h.elseIf((0, n._)`${C} == "number" || ${C} == "boolean"`).assign(A, (0, n._)`"" + ${$}`).elseIf((0, n._)`${$} === null`).assign(A, (0, n._)`""`);
          return;
        case "number":
          h.elseIf((0, n._)`${C} == "boolean" || ${$} === null
              || (${C} == "string" && ${$} && ${$} == +${$})`).assign(A, (0, n._)`+${$}`);
          return;
        case "integer":
          h.elseIf((0, n._)`${C} === "boolean" || ${$} === null
              || (${C} === "string" && ${$} && ${$} == +${$} && !(${$} % 1))`).assign(A, (0, n._)`+${$}`);
          return;
        case "boolean":
          h.elseIf((0, n._)`${$} === "false" || ${$} === 0 || ${$} === null`).assign(A, !1).elseIf((0, n._)`${$} === "true" || ${$} === 1`).assign(A, !0);
          return;
        case "null":
          h.elseIf((0, n._)`${$} === "" || ${$} === 0 || ${$} === false`), h.assign(A, null);
          return;
        case "array":
          h.elseIf((0, n._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${$} === null`).assign(A, (0, n._)`[${$}]`);
      }
    }
  }
  function g({ gen: d, parentData: _, parentDataProperty: b }, h) {
    d.if((0, n._)`${_} !== undefined`, () => d.assign((0, n._)`${_}[${b}]`, h));
  }
  function p(d, _, b, h = s.Correct) {
    const $ = h === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let k;
    switch (d) {
      case "null":
        return (0, n._)`${_} ${$} null`;
      case "array":
        k = (0, n._)`Array.isArray(${_})`;
        break;
      case "object":
        k = (0, n._)`${_} && typeof ${_} == "object" && !Array.isArray(${_})`;
        break;
      case "integer":
        k = C((0, n._)`!(${_} % 1) && !isNaN(${_})`);
        break;
      case "number":
        k = C();
        break;
      default:
        return (0, n._)`typeof ${_} ${$} ${d}`;
    }
    return h === s.Correct ? k : (0, n.not)(k);
    function C(A = n.nil) {
      return (0, n.and)((0, n._)`typeof ${_} == "number"`, A, b ? (0, n._)`isFinite(${_})` : n.nil);
    }
  }
  Ce.checkDataType = p;
  function v(d, _, b, h) {
    if (d.length === 1)
      return p(d[0], _, b, h);
    let $;
    const k = (0, o.toHash)(d);
    if (k.array && k.object) {
      const C = (0, n._)`typeof ${_} != "object"`;
      $ = k.null ? C : (0, n._)`!${_} || ${C}`, delete k.null, delete k.array, delete k.object;
    } else
      $ = n.nil;
    k.number && delete k.integer;
    for (const C in k)
      $ = (0, n.and)($, p(C, _, b, h));
    return $;
  }
  Ce.checkDataTypes = v;
  const w = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: _ }) => typeof d == "string" ? (0, n._)`{type: ${d}}` : (0, n._)`{type: ${_}}`
  };
  function f(d) {
    const _ = m(d);
    (0, r.reportError)(_, w);
  }
  Ce.reportTypeError = f;
  function m(d) {
    const { gen: _, data: b, schema: h } = d, $ = (0, o.schemaRefOrVal)(d, h, "type");
    return {
      gen: _,
      keyword: "type",
      data: b,
      schema: h.type,
      schemaCode: $,
      schemaValue: $,
      parentSchema: h,
      params: {},
      it: d
    };
  }
  return Ce;
}
var Lt = {}, Zs;
function Nm() {
  if (Zs) return Lt;
  Zs = 1, Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se();
  function r(o, s) {
    const { properties: a, items: i } = o.schema;
    if (s === "object" && a)
      for (const c in a)
        n(o, c, a[c].default);
    else s === "array" && Array.isArray(i) && i.forEach((c, u) => n(o, u, c.default));
  }
  Lt.assignDefaults = r;
  function n(o, s, a) {
    const { gen: i, compositeRule: c, data: u, opts: l } = o;
    if (a === void 0)
      return;
    const y = (0, e._)`${u}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${y}`);
      return;
    }
    let g = (0, e._)`${y} === undefined`;
    l.useDefaults === "empty" && (g = (0, e._)`${g} || ${y} === null || ${y} === ""`), i.if(g, (0, e._)`${y} = ${(0, e.stringify)(a)}`);
  }
  return Lt;
}
var Qe = {}, de = {}, Vs;
function et() {
  if (Vs) return de;
  Vs = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), r = /* @__PURE__ */ ft(), n = /* @__PURE__ */ se();
  function o(d, _) {
    const { gen: b, data: h, it: $ } = d;
    b.if(l(b, h, _, $.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${_}` }, !0), d.error();
    });
  }
  de.checkReportMissingProp = o;
  function s({ gen: d, data: _, it: { opts: b } }, h, $) {
    return (0, e.or)(...h.map((k) => (0, e.and)(l(d, _, k, b.ownProperties), (0, e._)`${$} = ${k}`)));
  }
  de.checkMissingProp = s;
  function a(d, _) {
    d.setParams({ missingProperty: _ }, !0), d.error();
  }
  de.reportMissingProp = a;
  function i(d) {
    return d.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  de.hasPropFunc = i;
  function c(d, _, b) {
    return (0, e._)`${i(d)}.call(${_}, ${b})`;
  }
  de.isOwnProperty = c;
  function u(d, _, b, h) {
    const $ = (0, e._)`${_}${(0, e.getProperty)(b)} !== undefined`;
    return h ? (0, e._)`${$} && ${c(d, _, b)}` : $;
  }
  de.propertyInData = u;
  function l(d, _, b, h) {
    const $ = (0, e._)`${_}${(0, e.getProperty)(b)} === undefined`;
    return h ? (0, e.or)($, (0, e.not)(c(d, _, b))) : $;
  }
  de.noPropertyInData = l;
  function y(d) {
    return d ? Object.keys(d).filter((_) => _ !== "__proto__") : [];
  }
  de.allSchemaProperties = y;
  function g(d, _) {
    return y(_).filter((b) => !(0, t.alwaysValidSchema)(d, _[b]));
  }
  de.schemaProperties = g;
  function p({ schemaCode: d, data: _, it: { gen: b, topSchemaRef: h, schemaPath: $, errorPath: k }, it: C }, A, Z, j) {
    const V = j ? (0, e._)`${d}, ${_}, ${h}${$}` : _, H = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, k)],
      [r.default.parentData, C.parentData],
      [r.default.parentDataProperty, C.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    C.opts.dynamicRef && H.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const K = (0, e._)`${V}, ${b.object(...H)}`;
    return Z !== e.nil ? (0, e._)`${A}.call(${Z}, ${K})` : (0, e._)`${A}(${K})`;
  }
  de.callValidateCode = p;
  const v = (0, e._)`new RegExp`;
  function w({ gen: d, it: { opts: _ } }, b) {
    const h = _.unicodeRegExp ? "u" : "", { regExp: $ } = _.code, k = $(b, h);
    return d.scopeValue("pattern", {
      key: k.toString(),
      ref: k,
      code: (0, e._)`${$.code === "new RegExp" ? v : (0, n.useFunc)(d, $)}(${b}, ${h})`
    });
  }
  de.usePattern = w;
  function f(d) {
    const { gen: _, data: b, keyword: h, it: $ } = d, k = _.name("valid");
    if ($.allErrors) {
      const A = _.let("valid", !0);
      return C(() => _.assign(A, !1)), A;
    }
    return _.var(k, !0), C(() => _.break()), k;
    function C(A) {
      const Z = _.const("len", (0, e._)`${b}.length`);
      _.forRange("i", 0, Z, (j) => {
        d.subschema({
          keyword: h,
          dataProp: j,
          dataPropType: t.Type.Num
        }, k), _.if((0, e.not)(k), A);
      });
    }
  }
  de.validateArray = f;
  function m(d) {
    const { gen: _, schema: b, keyword: h, it: $ } = d;
    if (!Array.isArray(b))
      throw new Error("ajv implementation error");
    if (b.some((Z) => (0, t.alwaysValidSchema)($, Z)) && !$.opts.unevaluated)
      return;
    const C = _.let("valid", !1), A = _.name("_valid");
    _.block(() => b.forEach((Z, j) => {
      const V = d.subschema({
        keyword: h,
        schemaProp: j,
        compositeRule: !0
      }, A);
      _.assign(C, (0, e._)`${C} || ${A}`), d.mergeValidEvaluated(V, A) || _.if((0, e.not)(C));
    })), d.result(C, () => d.reset(), () => d.error(!0));
  }
  return de.validateUnion = m, de;
}
var Ls;
function jm() {
  if (Ls) return Qe;
  Ls = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.validateKeywordUsage = Qe.validSchemaType = Qe.funcKeywordCode = Qe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ft(), r = /* @__PURE__ */ et(), n = /* @__PURE__ */ Sn();
  function o(g, p) {
    const { gen: v, keyword: w, schema: f, parentSchema: m, it: d } = g, _ = p.macro.call(d.self, f, m, d), b = u(v, w, _);
    d.opts.validateSchema !== !1 && d.self.validateSchema(_, !0);
    const h = v.name("valid");
    g.subschema({
      schema: _,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${w}`,
      topSchemaRef: b,
      compositeRule: !0
    }, h), g.pass(h, () => g.error(!0));
  }
  Qe.macroKeywordCode = o;
  function s(g, p) {
    var v;
    const { gen: w, keyword: f, schema: m, parentSchema: d, $data: _, it: b } = g;
    c(b, p);
    const h = !_ && p.compile ? p.compile.call(b.self, m, d, b) : p.validate, $ = u(w, f, h), k = w.let("valid");
    g.block$data(k, C), g.ok((v = p.valid) !== null && v !== void 0 ? v : k);
    function C() {
      if (p.errors === !1)
        j(), p.modifying && a(g), V(() => g.error());
      else {
        const H = p.async ? A() : Z();
        p.modifying && a(g), V(() => i(g, H));
      }
    }
    function A() {
      const H = w.let("ruleErrs", null);
      return w.try(() => j((0, e._)`await `), (K) => w.assign(k, !1).if((0, e._)`${K} instanceof ${b.ValidationError}`, () => w.assign(H, (0, e._)`${K}.errors`), () => w.throw(K))), H;
    }
    function Z() {
      const H = (0, e._)`${$}.errors`;
      return w.assign(H, null), j(e.nil), H;
    }
    function j(H = p.async ? (0, e._)`await ` : e.nil) {
      const K = b.opts.passContext ? t.default.this : t.default.self, ae = !("compile" in p && !_ || p.schema === !1);
      w.assign(k, (0, e._)`${H}${(0, r.callValidateCode)(g, $, K, ae)}`, p.modifying);
    }
    function V(H) {
      var K;
      w.if((0, e.not)((K = p.valid) !== null && K !== void 0 ? K : k), H);
    }
  }
  Qe.funcKeywordCode = s;
  function a(g) {
    const { gen: p, data: v, it: w } = g;
    p.if(w.parentData, () => p.assign(v, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function i(g, p) {
    const { gen: v } = g;
    v.if((0, e._)`Array.isArray(${p})`, () => {
      v.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${p} : ${t.default.vErrors}.concat(${p})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)(g);
    }, () => g.error());
  }
  function c({ schemaEnv: g }, p) {
    if (p.async && !g.$async)
      throw new Error("async keyword in sync schema");
  }
  function u(g, p, v) {
    if (v === void 0)
      throw new Error(`keyword "${p}" failed to compile`);
    return g.scopeValue("keyword", typeof v == "function" ? { ref: v } : { ref: v, code: (0, e.stringify)(v) });
  }
  function l(g, p, v = !1) {
    return !p.length || p.some((w) => w === "array" ? Array.isArray(g) : w === "object" ? g && typeof g == "object" && !Array.isArray(g) : typeof g == w || v && typeof g > "u");
  }
  Qe.validSchemaType = l;
  function y({ schema: g, opts: p, self: v, errSchemaPath: w }, f, m) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(m) : f.keyword !== m)
      throw new Error("ajv implementation error");
    const d = f.dependencies;
    if (d != null && d.some((_) => !Object.prototype.hasOwnProperty.call(g, _)))
      throw new Error(`parent schema must have dependencies of ${m}: ${d.join(",")}`);
    if (f.validateSchema && !f.validateSchema(g[m])) {
      const b = `keyword "${m}" value is invalid at path "${w}": ` + v.errorsText(f.validateSchema.errors);
      if (p.validateSchema === "log")
        v.logger.error(b);
      else
        throw new Error(b);
    }
  }
  return Qe.validateKeywordUsage = y, Qe;
}
var nt = {}, Fs;
function Mm() {
  if (Fs) return nt;
  Fs = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.extendSubschemaMode = nt.extendSubschemaData = nt.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se();
  function r(s, { keyword: a, schemaProp: i, schema: c, schemaPath: u, errSchemaPath: l, topSchemaRef: y }) {
    if (a !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const g = s.schema[a];
      return i === void 0 ? {
        schema: g,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}`
      } : {
        schema: g[i],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (c !== void 0) {
      if (u === void 0 || l === void 0 || y === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: u,
        topSchemaRef: y,
        errSchemaPath: l
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  nt.getSubschema = r;
  function n(s, a, { dataProp: i, dataPropType: c, data: u, dataTypes: l, propertyName: y }) {
    if (u !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: g } = a;
    if (i !== void 0) {
      const { errorPath: v, dataPathArr: w, opts: f } = a, m = g.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      p(m), s.errorPath = (0, e.str)`${v}${(0, t.getErrorPath)(i, c, f.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [...w, s.parentDataProperty];
    }
    if (u !== void 0) {
      const v = u instanceof e.Name ? u : g.let("data", u, !0);
      p(v), y !== void 0 && (s.propertyName = y);
    }
    l && (s.dataTypes = l);
    function p(v) {
      s.data = v, s.dataLevel = a.dataLevel + 1, s.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), s.parentData = a.data, s.dataNames = [...a.dataNames, v];
    }
  }
  nt.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: u, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), u !== void 0 && (s.createErrors = u), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return nt.extendSubschemaMode = o, nt;
}
var qe = {}, Dn, xs;
function _c() {
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
var Zn = { exports: {} }, Hs;
function qm() {
  if (Hs) return Zn.exports;
  Hs = 1;
  var e = Zn.exports = function(n, o, s) {
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
  function t(n, o, s, a, i, c, u, l, y, g) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      o(a, i, c, u, l, y, g);
      for (var p in a) {
        var v = a[p];
        if (Array.isArray(v)) {
          if (p in e.arrayKeywords)
            for (var w = 0; w < v.length; w++)
              t(n, o, s, v[w], i + "/" + p + "/" + w, c, i, p, a, w);
        } else if (p in e.propsKeywords) {
          if (v && typeof v == "object")
            for (var f in v)
              t(n, o, s, v[f], i + "/" + p + "/" + r(f), c, i, p, a, f);
        } else (p in e.keywords || n.allKeys && !(p in e.skipKeywords)) && t(n, o, s, v, i + "/" + p, c, i, p, a);
      }
      s(a, i, c, u, l, y, g);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Zn.exports;
}
var Ks;
function kn() {
  if (Ks) return qe;
  Ks = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getSchemaRefs = qe.resolveUrl = qe.normalizeId = qe._getFullPath = qe.getFullPath = qe.inlineRef = void 0;
  const e = /* @__PURE__ */ se(), t = _c(), r = qm(), n = /* @__PURE__ */ new Set([
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
  function o(w, f = !0) {
    return typeof w == "boolean" ? !0 : f === !0 ? !a(w) : f ? i(w) <= f : !1;
  }
  qe.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(w) {
    for (const f in w) {
      if (s.has(f))
        return !0;
      const m = w[f];
      if (Array.isArray(m) && m.some(a) || typeof m == "object" && a(m))
        return !0;
    }
    return !1;
  }
  function i(w) {
    let f = 0;
    for (const m in w) {
      if (m === "$ref")
        return 1 / 0;
      if (f++, !n.has(m) && (typeof w[m] == "object" && (0, e.eachItem)(w[m], (d) => f += i(d)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function c(w, f = "", m) {
    m !== !1 && (f = y(f));
    const d = w.parse(f);
    return u(w, d);
  }
  qe.getFullPath = c;
  function u(w, f) {
    return w.serialize(f).split("#")[0] + "#";
  }
  qe._getFullPath = u;
  const l = /#\/?$/;
  function y(w) {
    return w ? w.replace(l, "") : "";
  }
  qe.normalizeId = y;
  function g(w, f, m) {
    return m = y(m), w.resolve(f, m);
  }
  qe.resolveUrl = g;
  const p = /^[a-z_][-a-z0-9._]*$/i;
  function v(w, f) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: m, uriResolver: d } = this.opts, _ = y(w[m] || f), b = { "": _ }, h = c(d, _, !1), $ = {}, k = /* @__PURE__ */ new Set();
    return r(w, { allKeys: !0 }, (Z, j, V, H) => {
      if (H === void 0)
        return;
      const K = h + j;
      let ae = b[H];
      typeof Z[m] == "string" && (ae = Pe.call(this, Z[m])), Ee.call(this, Z.$anchor), Ee.call(this, Z.$dynamicAnchor), b[j] = ae;
      function Pe(x) {
        const ce = this.opts.uriResolver.resolve;
        if (x = y(ae ? ce(ae, x) : x), k.has(x))
          throw A(x);
        k.add(x);
        let U = this.refs[x];
        return typeof U == "string" && (U = this.refs[U]), typeof U == "object" ? C(Z, U.schema, x) : x !== y(K) && (x[0] === "#" ? (C(Z, $[x], x), $[x] = Z) : this.refs[x] = K), x;
      }
      function Ee(x) {
        if (typeof x == "string") {
          if (!p.test(x))
            throw new Error(`invalid anchor "${x}"`);
          Pe.call(this, `#${x}`);
        }
      }
    }), $;
    function C(Z, j, V) {
      if (j !== void 0 && !t(Z, j))
        throw A(V);
    }
    function A(Z) {
      return new Error(`reference "${Z}" resolves to more than one schema`);
    }
  }
  return qe.getSchemaRefs = v, qe;
}
var Js;
function En() {
  if (Js) return tt;
  Js = 1, Object.defineProperty(tt, "__esModule", { value: !0 }), tt.getData = tt.KeywordCxt = tt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ zm(), t = /* @__PURE__ */ sn(), r = /* @__PURE__ */ mc(), n = /* @__PURE__ */ sn(), o = /* @__PURE__ */ Nm(), s = /* @__PURE__ */ jm(), a = /* @__PURE__ */ Mm(), i = /* @__PURE__ */ te(), c = /* @__PURE__ */ ft(), u = /* @__PURE__ */ kn(), l = /* @__PURE__ */ se(), y = /* @__PURE__ */ Sn();
  function g(P) {
    if (h(P) && (k(P), b(P))) {
      f(P);
      return;
    }
    p(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  tt.validateFunctionCode = g;
  function p({ gen: P, validateName: I, schema: q, schemaEnv: D, opts: B }, re) {
    B.code.es5 ? P.func(I, (0, i._)`${c.default.data}, ${c.default.valCxt}`, D.$async, () => {
      P.code((0, i._)`"use strict"; ${d(q, B)}`), w(P, B), P.code(re);
    }) : P.func(I, (0, i._)`${c.default.data}, ${v(B)}`, D.$async, () => P.code(d(q, B)).code(re));
  }
  function v(P) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function w(P, I) {
    P.if(c.default.valCxt, () => {
      P.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), P.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), P.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), P.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), I.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      P.var(c.default.instancePath, (0, i._)`""`), P.var(c.default.parentData, (0, i._)`undefined`), P.var(c.default.parentDataProperty, (0, i._)`undefined`), P.var(c.default.rootData, c.default.data), I.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function f(P) {
    const { schema: I, opts: q, gen: D } = P;
    p(P, () => {
      q.$comment && I.$comment && H(P), Z(P), D.let(c.default.vErrors, null), D.let(c.default.errors, 0), q.unevaluated && m(P), C(P), K(P);
    });
  }
  function m(P) {
    const { gen: I, validateName: q } = P;
    P.evaluated = I.const("evaluated", (0, i._)`${q}.evaluated`), I.if((0, i._)`${P.evaluated}.dynamicProps`, () => I.assign((0, i._)`${P.evaluated}.props`, (0, i._)`undefined`)), I.if((0, i._)`${P.evaluated}.dynamicItems`, () => I.assign((0, i._)`${P.evaluated}.items`, (0, i._)`undefined`));
  }
  function d(P, I) {
    const q = typeof P == "object" && P[I.schemaId];
    return q && (I.code.source || I.code.process) ? (0, i._)`/*# sourceURL=${q} */` : i.nil;
  }
  function _(P, I) {
    if (h(P) && (k(P), b(P))) {
      $(P, I);
      return;
    }
    (0, e.boolOrEmptySchema)(P, I);
  }
  function b({ schema: P, self: I }) {
    if (typeof P == "boolean")
      return !P;
    for (const q in P)
      if (I.RULES.all[q])
        return !0;
    return !1;
  }
  function h(P) {
    return typeof P.schema != "boolean";
  }
  function $(P, I) {
    const { schema: q, gen: D, opts: B } = P;
    B.$comment && q.$comment && H(P), j(P), V(P);
    const re = D.const("_errs", c.default.errors);
    C(P, re), D.var(I, (0, i._)`${re} === ${c.default.errors}`);
  }
  function k(P) {
    (0, l.checkUnknownRules)(P), A(P);
  }
  function C(P, I) {
    if (P.opts.jtd)
      return Pe(P, [], !1, I);
    const q = (0, t.getSchemaTypes)(P.schema), D = (0, t.coerceAndCheckDataType)(P, q);
    Pe(P, q, !D, I);
  }
  function A(P) {
    const { schema: I, errSchemaPath: q, opts: D, self: B } = P;
    I.$ref && D.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(I, B.RULES) && B.logger.warn(`$ref: keywords ignored in schema at path "${q}"`);
  }
  function Z(P) {
    const { schema: I, opts: q } = P;
    I.default !== void 0 && q.useDefaults && q.strictSchema && (0, l.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function j(P) {
    const I = P.schema[P.opts.schemaId];
    I && (P.baseId = (0, u.resolveUrl)(P.opts.uriResolver, P.baseId, I));
  }
  function V(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function H({ gen: P, schemaEnv: I, schema: q, errSchemaPath: D, opts: B }) {
    const re = q.$comment;
    if (B.$comment === !0)
      P.code((0, i._)`${c.default.self}.logger.log(${re})`);
    else if (typeof B.$comment == "function") {
      const Re = (0, i.str)`${D}/$comment`, Be = P.scopeValue("root", { ref: I.root });
      P.code((0, i._)`${c.default.self}.opts.$comment(${re}, ${Re}, ${Be}.schema)`);
    }
  }
  function K(P) {
    const { gen: I, schemaEnv: q, validateName: D, ValidationError: B, opts: re } = P;
    q.$async ? I.if((0, i._)`${c.default.errors} === 0`, () => I.return(c.default.data), () => I.throw((0, i._)`new ${B}(${c.default.vErrors})`)) : (I.assign((0, i._)`${D}.errors`, c.default.vErrors), re.unevaluated && ae(P), I.return((0, i._)`${c.default.errors} === 0`));
  }
  function ae({ gen: P, evaluated: I, props: q, items: D }) {
    q instanceof i.Name && P.assign((0, i._)`${I}.props`, q), D instanceof i.Name && P.assign((0, i._)`${I}.items`, D);
  }
  function Pe(P, I, q, D) {
    const { gen: B, schema: re, data: Re, allErrors: Be, opts: Ue, self: De } = P, { RULES: Ie } = De;
    if (re.$ref && (Ue.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(re, Ie))) {
      B.block(() => W(P, "$ref", Ie.all.$ref.definition));
      return;
    }
    Ue.jtd || x(P, I), B.block(() => {
      for (const Ke of Ie.rules)
        $t(Ke);
      $t(Ie.post);
    });
    function $t(Ke) {
      (0, r.shouldUseGroup)(re, Ke) && (Ke.type ? (B.if((0, n.checkDataType)(Ke.type, Re, Ue.strictNumbers)), Ee(P, Ke), I.length === 1 && I[0] === Ke.type && q && (B.else(), (0, n.reportTypeError)(P)), B.endIf()) : Ee(P, Ke), Be || B.if((0, i._)`${c.default.errors} === ${D || 0}`));
    }
  }
  function Ee(P, I) {
    const { gen: q, schema: D, opts: { useDefaults: B } } = P;
    B && (0, o.assignDefaults)(P, I.type), q.block(() => {
      for (const re of I.rules)
        (0, r.shouldUseRule)(D, re) && W(P, re.keyword, re.definition, I.type);
    });
  }
  function x(P, I) {
    P.schemaEnv.meta || !P.opts.strictTypes || (ce(P, I), P.opts.allowUnionTypes || U(P, I), R(P, P.dataTypes));
  }
  function ce(P, I) {
    if (I.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = I;
        return;
      }
      I.forEach((q) => {
        O(P.dataTypes, q) || T(P, `type "${q}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), S(P, I);
    }
  }
  function U(P, I) {
    I.length > 1 && !(I.length === 2 && I.includes("null")) && T(P, "use allowUnionTypes to allow union type keyword");
  }
  function R(P, I) {
    const q = P.self.RULES.all;
    for (const D in q) {
      const B = q[D];
      if (typeof B == "object" && (0, r.shouldUseRule)(P.schema, B)) {
        const { type: re } = B.definition;
        re.length && !re.some((Re) => M(I, Re)) && T(P, `missing type "${re.join(",")}" for keyword "${D}"`);
      }
    }
  }
  function M(P, I) {
    return P.includes(I) || I === "number" && P.includes("integer");
  }
  function O(P, I) {
    return P.includes(I) || I === "integer" && P.includes("number");
  }
  function S(P, I) {
    const q = [];
    for (const D of P.dataTypes)
      O(I, D) ? q.push(D) : I.includes("integer") && D === "number" && q.push("integer");
    P.dataTypes = q;
  }
  function T(P, I) {
    const q = P.schemaEnv.baseId + P.errSchemaPath;
    I += ` at "${q}" (strictTypes)`, (0, l.checkStrictMode)(P, I, P.opts.strictTypes);
  }
  class N {
    constructor(I, q, D) {
      if ((0, s.validateKeywordUsage)(I, q, D), this.gen = I.gen, this.allErrors = I.allErrors, this.keyword = D, this.data = I.data, this.schema = I.schema[D], this.$data = q.$data && I.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(I, this.schema, D, this.$data), this.schemaType = q.schemaType, this.parentSchema = I.schema, this.params = {}, this.it = I, this.def = q, this.$data)
        this.schemaCode = I.gen.const("vSchema", oe(this.$data, I));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, q.schemaType, q.allowUndefined))
        throw new Error(`${D} value must be ${JSON.stringify(q.schemaType)}`);
      ("code" in q ? q.trackErrors : q.errors !== !1) && (this.errsCount = I.gen.const("_errs", c.default.errors));
    }
    result(I, q, D) {
      this.failResult((0, i.not)(I), q, D);
    }
    failResult(I, q, D) {
      this.gen.if(I), D ? D() : this.error(), q ? (this.gen.else(), q(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(I, q) {
      this.failResult((0, i.not)(I), void 0, q);
    }
    fail(I) {
      if (I === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(I), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(I) {
      if (!this.$data)
        return this.fail(I);
      const { schemaCode: q } = this;
      this.fail((0, i._)`${q} !== undefined && (${(0, i.or)(this.invalid$data(), I)})`);
    }
    error(I, q, D) {
      if (q) {
        this.setParams(q), this._error(I, D), this.setParams({});
        return;
      }
      this._error(I, D);
    }
    _error(I, q) {
      (I ? y.reportExtraError : y.reportError)(this, this.def.error, q);
    }
    $dataError() {
      (0, y.reportError)(this, this.def.$dataError || y.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, y.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(I) {
      this.allErrors || this.gen.if(I);
    }
    setParams(I, q) {
      q ? Object.assign(this.params, I) : this.params = I;
    }
    block$data(I, q, D = i.nil) {
      this.gen.block(() => {
        this.check$data(I, D), q();
      });
    }
    check$data(I = i.nil, q = i.nil) {
      if (!this.$data)
        return;
      const { gen: D, schemaCode: B, schemaType: re, def: Re } = this;
      D.if((0, i.or)((0, i._)`${B} === undefined`, q)), I !== i.nil && D.assign(I, !0), (re.length || Re.validateSchema) && (D.elseIf(this.invalid$data()), this.$dataError(), I !== i.nil && D.assign(I, !1)), D.else();
    }
    invalid$data() {
      const { gen: I, schemaCode: q, schemaType: D, def: B, it: re } = this;
      return (0, i.or)(Re(), Be());
      function Re() {
        if (D.length) {
          if (!(q instanceof i.Name))
            throw new Error("ajv implementation error");
          const Ue = Array.isArray(D) ? D : [D];
          return (0, i._)`${(0, n.checkDataTypes)(Ue, q, re.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function Be() {
        if (B.validateSchema) {
          const Ue = I.scopeValue("validate$data", { ref: B.validateSchema });
          return (0, i._)`!${Ue}(${q})`;
        }
        return i.nil;
      }
    }
    subschema(I, q) {
      const D = (0, a.getSubschema)(this.it, I);
      (0, a.extendSubschemaData)(D, this.it, I), (0, a.extendSubschemaMode)(D, I);
      const B = { ...this.it, ...D, items: void 0, props: void 0 };
      return _(B, q), B;
    }
    mergeEvaluated(I, q) {
      const { it: D, gen: B } = this;
      D.opts.unevaluated && (D.props !== !0 && I.props !== void 0 && (D.props = l.mergeEvaluated.props(B, I.props, D.props, q)), D.items !== !0 && I.items !== void 0 && (D.items = l.mergeEvaluated.items(B, I.items, D.items, q)));
    }
    mergeValidEvaluated(I, q) {
      const { it: D, gen: B } = this;
      if (D.opts.unevaluated && (D.props !== !0 || D.items !== !0))
        return B.if(q, () => this.mergeEvaluated(I, i.Name)), !0;
    }
  }
  tt.KeywordCxt = N;
  function W(P, I, q, D) {
    const B = new N(P, q, I);
    "code" in q ? q.code(B, D) : B.$data && q.validate ? (0, s.funcKeywordCode)(B, q) : "macro" in q ? (0, s.macroKeywordCode)(B, q) : (q.compile || q.validate) && (0, s.funcKeywordCode)(B, q);
  }
  const Q = /^\/(?:[^~]|~0|~1)*$/, ie = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function oe(P, { dataLevel: I, dataNames: q, dataPathArr: D }) {
    let B, re;
    if (P === "")
      return c.default.rootData;
    if (P[0] === "/") {
      if (!Q.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      B = P, re = c.default.rootData;
    } else {
      const De = ie.exec(P);
      if (!De)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const Ie = +De[1];
      if (B = De[2], B === "#") {
        if (Ie >= I)
          throw new Error(Ue("property/index", Ie));
        return D[I - Ie];
      }
      if (Ie > I)
        throw new Error(Ue("data", Ie));
      if (re = q[I - Ie], !B)
        return re;
    }
    let Re = re;
    const Be = B.split("/");
    for (const De of Be)
      De && (re = (0, i._)`${re}${(0, i.getProperty)((0, l.unescapeJsonPointer)(De))}`, Re = (0, i._)`${Re} && ${re}`);
    return Re;
    function Ue(De, Ie) {
      return `Cannot access ${De} ${Ie} levels up, current level is ${I}`;
    }
  }
  return tt.getData = oe, tt;
}
var fr = {}, Ws;
function Qo() {
  if (Ws) return fr;
  Ws = 1, Object.defineProperty(fr, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return fr.default = e, fr;
}
var hr = {}, Gs;
function Tn() {
  if (Gs) return hr;
  Gs = 1, Object.defineProperty(hr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ kn();
  class t extends Error {
    constructor(n, o, s, a) {
      super(a || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(n, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return hr.default = t, hr;
}
var Fe = {}, Bs;
function Yo() {
  if (Bs) return Fe;
  Bs = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.resolveSchema = Fe.getCompilingSchema = Fe.resolveRef = Fe.compileSchema = Fe.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Qo(), r = /* @__PURE__ */ ft(), n = /* @__PURE__ */ kn(), o = /* @__PURE__ */ se(), s = /* @__PURE__ */ En();
  class a {
    constructor(m) {
      var d;
      this.refs = {}, this.dynamicAnchors = {};
      let _;
      typeof m.schema == "object" && (_ = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (d = m.baseId) !== null && d !== void 0 ? d : (0, n.normalizeId)(_ == null ? void 0 : _[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = _ == null ? void 0 : _.$async, this.refs = {};
    }
  }
  Fe.SchemaEnv = a;
  function i(f) {
    const m = l.call(this, f);
    if (m)
      return m;
    const d = (0, n.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: _, lines: b } = this.opts.code, { ownProperties: h } = this.opts, $ = new e.CodeGen(this.scope, { es5: _, lines: b, ownProperties: h });
    let k;
    f.$async && (k = $.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = $.scopeName("validate");
    f.validateName = C;
    const A = {
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
      topSchemaRef: $.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: C,
      ValidationError: k,
      schema: f.schema,
      schemaEnv: f,
      rootId: d,
      baseId: f.baseId || d,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let Z;
    try {
      this._compilations.add(f), (0, s.validateFunctionCode)(A), $.optimize(this.opts.code.optimize);
      const j = $.toString();
      Z = `${$.scopeRefs(r.default.scope)}return ${j}`, this.opts.code.process && (Z = this.opts.code.process(Z, f));
      const H = new Function(`${r.default.self}`, `${r.default.scope}`, Z)(this, this.scope.get());
      if (this.scope.value(C, { ref: H }), H.errors = null, H.schema = f.schema, H.schemaEnv = f, f.$async && (H.$async = !0), this.opts.code.source === !0 && (H.source = { validateName: C, validateCode: j, scopeValues: $._values }), this.opts.unevaluated) {
        const { props: K, items: ae } = A;
        H.evaluated = {
          props: K instanceof e.Name ? void 0 : K,
          items: ae instanceof e.Name ? void 0 : ae,
          dynamicProps: K instanceof e.Name,
          dynamicItems: ae instanceof e.Name
        }, H.source && (H.source.evaluated = (0, e.stringify)(H.evaluated));
      }
      return f.validate = H, f;
    } catch (j) {
      throw delete f.validate, delete f.validateName, Z && this.logger.error("Error compiling schema, function code:", Z), j;
    } finally {
      this._compilations.delete(f);
    }
  }
  Fe.compileSchema = i;
  function c(f, m, d) {
    var _;
    d = (0, n.resolveUrl)(this.opts.uriResolver, m, d);
    const b = f.refs[d];
    if (b)
      return b;
    let h = g.call(this, f, d);
    if (h === void 0) {
      const $ = (_ = f.localRefs) === null || _ === void 0 ? void 0 : _[d], { schemaId: k } = this.opts;
      $ && (h = new a({ schema: $, schemaId: k, root: f, baseId: m }));
    }
    if (h !== void 0)
      return f.refs[d] = u.call(this, h);
  }
  Fe.resolveRef = c;
  function u(f) {
    return (0, n.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : i.call(this, f);
  }
  function l(f) {
    for (const m of this._compilations)
      if (y(m, f))
        return m;
  }
  Fe.getCompilingSchema = l;
  function y(f, m) {
    return f.schema === m.schema && f.root === m.root && f.baseId === m.baseId;
  }
  function g(f, m) {
    let d;
    for (; typeof (d = this.refs[m]) == "string"; )
      m = d;
    return d || this.schemas[m] || p.call(this, f, m);
  }
  function p(f, m) {
    const d = this.opts.uriResolver.parse(m), _ = (0, n._getFullPath)(this.opts.uriResolver, d);
    let b = (0, n.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && _ === b)
      return w.call(this, d, f);
    const h = (0, n.normalizeId)(_), $ = this.refs[h] || this.schemas[h];
    if (typeof $ == "string") {
      const k = p.call(this, f, $);
      return typeof (k == null ? void 0 : k.schema) != "object" ? void 0 : w.call(this, d, k);
    }
    if (typeof ($ == null ? void 0 : $.schema) == "object") {
      if ($.validate || i.call(this, $), h === (0, n.normalizeId)(m)) {
        const { schema: k } = $, { schemaId: C } = this.opts, A = k[C];
        return A && (b = (0, n.resolveUrl)(this.opts.uriResolver, b, A)), new a({ schema: k, schemaId: C, root: f, baseId: b });
      }
      return w.call(this, d, $);
    }
  }
  Fe.resolveSchema = p;
  const v = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(f, { baseId: m, schema: d, root: _ }) {
    var b;
    if (((b = f.fragment) === null || b === void 0 ? void 0 : b[0]) !== "/")
      return;
    for (const k of f.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const C = d[(0, o.unescapeFragment)(k)];
      if (C === void 0)
        return;
      d = C;
      const A = typeof d == "object" && d[this.opts.schemaId];
      !v.has(k) && A && (m = (0, n.resolveUrl)(this.opts.uriResolver, m, A));
    }
    let h;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const k = (0, n.resolveUrl)(this.opts.uriResolver, m, d.$ref);
      h = p.call(this, _, k);
    }
    const { schemaId: $ } = this.opts;
    if (h = h || new a({ schema: d, schemaId: $, root: _, baseId: m }), h.schema !== h.root.schema)
      return h;
  }
  return Fe;
}
const Am = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Um = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Dm = "object", Zm = ["$data"], Vm = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Lm = !1, Fm = {
  $id: Am,
  description: Um,
  type: Dm,
  required: Zm,
  properties: Vm,
  additionalProperties: Lm
};
var pr = {}, Ft = { exports: {} }, Vn, Qs;
function gc() {
  if (Qs) return Vn;
  Qs = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function r(g) {
    let p = "", v = 0, w = 0;
    for (w = 0; w < g.length; w++)
      if (v = g[w].charCodeAt(0), v !== 48) {
        if (!(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
          return "";
        p += g[w];
        break;
      }
    for (w += 1; w < g.length; w++) {
      if (v = g[w].charCodeAt(0), !(v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102))
        return "";
      p += g[w];
    }
    return p;
  }
  const n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(g) {
    return g.length = 0, !0;
  }
  function s(g, p, v) {
    if (g.length) {
      const w = r(g);
      if (w !== "")
        p.push(w);
      else
        return v.error = !0, !1;
      g.length = 0;
    }
    return !0;
  }
  function a(g) {
    let p = 0;
    const v = { error: !1, address: "", zone: "" }, w = [], f = [];
    let m = !1, d = !1, _ = s;
    for (let b = 0; b < g.length; b++) {
      const h = g[b];
      if (!(h === "[" || h === "]"))
        if (h === ":") {
          if (m === !0 && (d = !0), !_(f, w, v))
            break;
          if (++p > 7) {
            v.error = !0;
            break;
          }
          b > 0 && g[b - 1] === ":" && (m = !0), w.push(":");
          continue;
        } else if (h === "%") {
          if (!_(f, w, v))
            break;
          _ = o;
        } else {
          f.push(h);
          continue;
        }
    }
    return f.length && (_ === o ? v.zone = f.join("") : d ? w.push(f.join("")) : w.push(r(f))), v.address = w.join(""), v;
  }
  function i(g) {
    if (c(g, ":") < 2)
      return { host: g, isIPV6: !1 };
    const p = a(g);
    if (p.error)
      return { host: g, isIPV6: !1 };
    {
      let v = p.address, w = p.address;
      return p.zone && (v += "%" + p.zone, w += "%25" + p.zone), { host: v, isIPV6: !0, escapedHost: w };
    }
  }
  function c(g, p) {
    let v = 0;
    for (let w = 0; w < g.length; w++)
      g[w] === p && v++;
    return v;
  }
  function u(g) {
    let p = g;
    const v = [];
    let w = -1, f = 0;
    for (; f = p.length; ) {
      if (f === 1) {
        if (p === ".")
          break;
        if (p === "/") {
          v.push("/");
          break;
        } else {
          v.push(p);
          break;
        }
      } else if (f === 2) {
        if (p[0] === ".") {
          if (p[1] === ".")
            break;
          if (p[1] === "/") {
            p = p.slice(2);
            continue;
          }
        } else if (p[0] === "/" && (p[1] === "." || p[1] === "/")) {
          v.push("/");
          break;
        }
      } else if (f === 3 && p === "/..") {
        v.length !== 0 && v.pop(), v.push("/");
        break;
      }
      if (p[0] === ".") {
        if (p[1] === ".") {
          if (p[2] === "/") {
            p = p.slice(3);
            continue;
          }
        } else if (p[1] === "/") {
          p = p.slice(2);
          continue;
        }
      } else if (p[0] === "/" && p[1] === ".") {
        if (p[2] === "/") {
          p = p.slice(2);
          continue;
        } else if (p[2] === "." && p[3] === "/") {
          p = p.slice(3), v.length !== 0 && v.pop();
          continue;
        }
      }
      if ((w = p.indexOf("/", 1)) === -1) {
        v.push(p);
        break;
      } else
        v.push(p.slice(0, w)), p = p.slice(w);
    }
    return v.join("");
  }
  function l(g, p) {
    const v = p !== !0 ? escape : unescape;
    return g.scheme !== void 0 && (g.scheme = v(g.scheme)), g.userinfo !== void 0 && (g.userinfo = v(g.userinfo)), g.host !== void 0 && (g.host = v(g.host)), g.path !== void 0 && (g.path = v(g.path)), g.query !== void 0 && (g.query = v(g.query)), g.fragment !== void 0 && (g.fragment = v(g.fragment)), g;
  }
  function y(g) {
    const p = [];
    if (g.userinfo !== void 0 && (p.push(g.userinfo), p.push("@")), g.host !== void 0) {
      let v = unescape(g.host);
      if (!t(v)) {
        const w = i(v);
        w.isIPV6 === !0 ? v = `[${w.escapedHost}]` : v = g.host;
      }
      p.push(v);
    }
    return (typeof g.port == "number" || typeof g.port == "string") && (p.push(":"), p.push(String(g.port))), p.length ? p.join("") : void 0;
  }
  return Vn = {
    nonSimpleDomain: n,
    recomposeAuthority: y,
    normalizeComponentEncoding: l,
    removeDotSegments: u,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: i,
    stringArrayToHexStripped: r
  }, Vn;
}
var Ln, Ys;
function xm() {
  if (Ys) return Ln;
  Ys = 1;
  const { isUUID: e } = gc(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
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
  function n(h) {
    return r.indexOf(
      /** @type {*} */
      h
    ) !== -1;
  }
  function o(h) {
    return h.secure === !0 ? !0 : h.secure === !1 ? !1 : h.scheme ? h.scheme.length === 3 && (h.scheme[0] === "w" || h.scheme[0] === "W") && (h.scheme[1] === "s" || h.scheme[1] === "S") && (h.scheme[2] === "s" || h.scheme[2] === "S") : !1;
  }
  function s(h) {
    return h.host || (h.error = h.error || "HTTP URIs must have a host."), h;
  }
  function a(h) {
    const $ = String(h.scheme).toLowerCase() === "https";
    return (h.port === ($ ? 443 : 80) || h.port === "") && (h.port = void 0), h.path || (h.path = "/"), h;
  }
  function i(h) {
    return h.secure = o(h), h.resourceName = (h.path || "/") + (h.query ? "?" + h.query : ""), h.path = void 0, h.query = void 0, h;
  }
  function c(h) {
    if ((h.port === (o(h) ? 443 : 80) || h.port === "") && (h.port = void 0), typeof h.secure == "boolean" && (h.scheme = h.secure ? "wss" : "ws", h.secure = void 0), h.resourceName) {
      const [$, k] = h.resourceName.split("?");
      h.path = $ && $ !== "/" ? $ : void 0, h.query = k, h.resourceName = void 0;
    }
    return h.fragment = void 0, h;
  }
  function u(h, $) {
    if (!h.path)
      return h.error = "URN can not be parsed", h;
    const k = h.path.match(t);
    if (k) {
      const C = $.scheme || h.scheme || "urn";
      h.nid = k[1].toLowerCase(), h.nss = k[2];
      const A = `${C}:${$.nid || h.nid}`, Z = b(A);
      h.path = void 0, Z && (h = Z.parse(h, $));
    } else
      h.error = h.error || "URN can not be parsed.";
    return h;
  }
  function l(h, $) {
    if (h.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const k = $.scheme || h.scheme || "urn", C = h.nid.toLowerCase(), A = `${k}:${$.nid || C}`, Z = b(A);
    Z && (h = Z.serialize(h, $));
    const j = h, V = h.nss;
    return j.path = `${C || $.nid}:${V}`, $.skipEscape = !0, j;
  }
  function y(h, $) {
    const k = h;
    return k.uuid = k.nss, k.nss = void 0, !$.tolerant && (!k.uuid || !e(k.uuid)) && (k.error = k.error || "UUID is not valid."), k;
  }
  function g(h) {
    const $ = h;
    return $.nss = (h.uuid || "").toLowerCase(), $;
  }
  const p = (
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
      domainHost: p.domainHost,
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
  ), f = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), _ = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: p,
      https: v,
      ws: w,
      wss: f,
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
          parse: y,
          serialize: g,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(_, null);
  function b(h) {
    return h && (_[
      /** @type {SchemeName} */
      h
    ] || _[
      /** @type {SchemeName} */
      h.toLowerCase()
    ]) || void 0;
  }
  return Ln = {
    wsIsSecure: o,
    SCHEMES: _,
    isValidSchemeName: n,
    getSchemeHandler: b
  }, Ln;
}
var Xs;
function Hm() {
  if (Xs) return Ft.exports;
  Xs = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizeComponentEncoding: n, isIPv4: o, nonSimpleDomain: s } = gc(), { SCHEMES: a, getSchemeHandler: i } = xm();
  function c(f, m) {
    return typeof f == "string" ? f = /** @type {T} */
    g(v(f, m), m) : typeof f == "object" && (f = /** @type {T} */
    v(g(f, m), m)), f;
  }
  function u(f, m, d) {
    const _ = d ? Object.assign({ scheme: "null" }, d) : { scheme: "null" }, b = l(v(f, _), v(m, _), _, !0);
    return _.skipEscape = !0, g(b, _);
  }
  function l(f, m, d, _) {
    const b = {};
    return _ || (f = v(g(f, d), d), m = v(g(m, d), d)), d = d || {}, !d.tolerant && m.scheme ? (b.scheme = m.scheme, b.userinfo = m.userinfo, b.host = m.host, b.port = m.port, b.path = t(m.path || ""), b.query = m.query) : (m.userinfo !== void 0 || m.host !== void 0 || m.port !== void 0 ? (b.userinfo = m.userinfo, b.host = m.host, b.port = m.port, b.path = t(m.path || ""), b.query = m.query) : (m.path ? (m.path[0] === "/" ? b.path = t(m.path) : ((f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) && !f.path ? b.path = "/" + m.path : f.path ? b.path = f.path.slice(0, f.path.lastIndexOf("/") + 1) + m.path : b.path = m.path, b.path = t(b.path)), b.query = m.query) : (b.path = f.path, m.query !== void 0 ? b.query = m.query : b.query = f.query), b.userinfo = f.userinfo, b.host = f.host, b.port = f.port), b.scheme = f.scheme), b.fragment = m.fragment, b;
  }
  function y(f, m, d) {
    return typeof f == "string" ? (f = unescape(f), f = g(n(v(f, d), !0), { ...d, skipEscape: !0 })) : typeof f == "object" && (f = g(n(f, !0), { ...d, skipEscape: !0 })), typeof m == "string" ? (m = unescape(m), m = g(n(v(m, d), !0), { ...d, skipEscape: !0 })) : typeof m == "object" && (m = g(n(m, !0), { ...d, skipEscape: !0 })), f.toLowerCase() === m.toLowerCase();
  }
  function g(f, m) {
    const d = {
      host: f.host,
      scheme: f.scheme,
      userinfo: f.userinfo,
      port: f.port,
      path: f.path,
      query: f.query,
      nid: f.nid,
      nss: f.nss,
      uuid: f.uuid,
      fragment: f.fragment,
      reference: f.reference,
      resourceName: f.resourceName,
      secure: f.secure,
      error: ""
    }, _ = Object.assign({}, m), b = [], h = i(_.scheme || d.scheme);
    h && h.serialize && h.serialize(d, _), d.path !== void 0 && (_.skipEscape ? d.path = unescape(d.path) : (d.path = escape(d.path), d.scheme !== void 0 && (d.path = d.path.split("%3A").join(":")))), _.reference !== "suffix" && d.scheme && b.push(d.scheme, ":");
    const $ = r(d);
    if ($ !== void 0 && (_.reference !== "suffix" && b.push("//"), b.push($), d.path && d.path[0] !== "/" && b.push("/")), d.path !== void 0) {
      let k = d.path;
      !_.absolutePath && (!h || !h.absolutePath) && (k = t(k)), $ === void 0 && k[0] === "/" && k[1] === "/" && (k = "/%2F" + k.slice(2)), b.push(k);
    }
    return d.query !== void 0 && b.push("?", d.query), d.fragment !== void 0 && b.push("#", d.fragment), b.join("");
  }
  const p = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function v(f, m) {
    const d = Object.assign({}, m), _ = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let b = !1;
    d.reference === "suffix" && (d.scheme ? f = d.scheme + ":" + f : f = "//" + f);
    const h = f.match(p);
    if (h) {
      if (_.scheme = h[1], _.userinfo = h[3], _.host = h[4], _.port = parseInt(h[5], 10), _.path = h[6] || "", _.query = h[7], _.fragment = h[8], isNaN(_.port) && (_.port = h[5]), _.host)
        if (o(_.host) === !1) {
          const C = e(_.host);
          _.host = C.host.toLowerCase(), b = C.isIPV6;
        } else
          b = !0;
      _.scheme === void 0 && _.userinfo === void 0 && _.host === void 0 && _.port === void 0 && _.query === void 0 && !_.path ? _.reference = "same-document" : _.scheme === void 0 ? _.reference = "relative" : _.fragment === void 0 ? _.reference = "absolute" : _.reference = "uri", d.reference && d.reference !== "suffix" && d.reference !== _.reference && (_.error = _.error || "URI is not a " + d.reference + " reference.");
      const $ = i(d.scheme || _.scheme);
      if (!d.unicodeSupport && (!$ || !$.unicodeSupport) && _.host && (d.domainHost || $ && $.domainHost) && b === !1 && s(_.host))
        try {
          _.host = URL.domainToASCII(_.host.toLowerCase());
        } catch (k) {
          _.error = _.error || "Host's domain name can not be converted to ASCII: " + k;
        }
      (!$ || $ && !$.skipNormalize) && (f.indexOf("%") !== -1 && (_.scheme !== void 0 && (_.scheme = unescape(_.scheme)), _.host !== void 0 && (_.host = unescape(_.host))), _.path && (_.path = escape(unescape(_.path))), _.fragment && (_.fragment = encodeURI(decodeURIComponent(_.fragment)))), $ && $.parse && $.parse(_, d);
    } else
      _.error = _.error || "URI can not be parsed.";
    return _;
  }
  const w = {
    SCHEMES: a,
    normalize: c,
    resolve: u,
    resolveComponent: l,
    equal: y,
    serialize: g,
    parse: v
  };
  return Ft.exports = w, Ft.exports.default = w, Ft.exports.fastUri = w, Ft.exports;
}
var ea;
function Km() {
  if (ea) return pr;
  ea = 1, Object.defineProperty(pr, "__esModule", { value: !0 });
  const e = Hm();
  return e.code = 'require("ajv/dist/runtime/uri").default', pr.default = e, pr;
}
var ta;
function Jm() {
  return ta || (ta = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ En();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = /* @__PURE__ */ te();
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
    const n = /* @__PURE__ */ Qo(), o = /* @__PURE__ */ Tn(), s = /* @__PURE__ */ pc(), a = /* @__PURE__ */ Yo(), i = /* @__PURE__ */ te(), c = /* @__PURE__ */ kn(), u = /* @__PURE__ */ sn(), l = /* @__PURE__ */ se(), y = Fm, g = /* @__PURE__ */ Km(), p = (U, R) => new RegExp(U, R);
    p.code = "new RegExp";
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
    ]), f = {
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
    function _(U) {
      var R, M, O, S, T, N, W, Q, ie, oe, P, I, q, D, B, re, Re, Be, Ue, De, Ie, $t, Ke, Pn, Rn;
      const Zt = U.strict, In = (R = U.code) === null || R === void 0 ? void 0 : R.optimize, ns = In === !0 || In === void 0 ? 1 : In || 0, os = (O = (M = U.code) === null || M === void 0 ? void 0 : M.regExp) !== null && O !== void 0 ? O : p, Oc = (S = U.uriResolver) !== null && S !== void 0 ? S : g.default;
      return {
        strictSchema: (N = (T = U.strictSchema) !== null && T !== void 0 ? T : Zt) !== null && N !== void 0 ? N : !0,
        strictNumbers: (Q = (W = U.strictNumbers) !== null && W !== void 0 ? W : Zt) !== null && Q !== void 0 ? Q : !0,
        strictTypes: (oe = (ie = U.strictTypes) !== null && ie !== void 0 ? ie : Zt) !== null && oe !== void 0 ? oe : "log",
        strictTuples: (I = (P = U.strictTuples) !== null && P !== void 0 ? P : Zt) !== null && I !== void 0 ? I : "log",
        strictRequired: (D = (q = U.strictRequired) !== null && q !== void 0 ? q : Zt) !== null && D !== void 0 ? D : !1,
        code: U.code ? { ...U.code, optimize: ns, regExp: os } : { optimize: ns, regExp: os },
        loopRequired: (B = U.loopRequired) !== null && B !== void 0 ? B : d,
        loopEnum: (re = U.loopEnum) !== null && re !== void 0 ? re : d,
        meta: (Re = U.meta) !== null && Re !== void 0 ? Re : !0,
        messages: (Be = U.messages) !== null && Be !== void 0 ? Be : !0,
        inlineRefs: (Ue = U.inlineRefs) !== null && Ue !== void 0 ? Ue : !0,
        schemaId: (De = U.schemaId) !== null && De !== void 0 ? De : "$id",
        addUsedSchema: (Ie = U.addUsedSchema) !== null && Ie !== void 0 ? Ie : !0,
        validateSchema: ($t = U.validateSchema) !== null && $t !== void 0 ? $t : !0,
        validateFormats: (Ke = U.validateFormats) !== null && Ke !== void 0 ? Ke : !0,
        unicodeRegExp: (Pn = U.unicodeRegExp) !== null && Pn !== void 0 ? Pn : !0,
        int32range: (Rn = U.int32range) !== null && Rn !== void 0 ? Rn : !0,
        uriResolver: Oc
      };
    }
    class b {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ..._(R) };
        const { es5: M, lines: O } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: w, es5: M, lines: O }), this.logger = V(R.logger);
        const S = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, s.getRules)(), h.call(this, f, R, "NOT SUPPORTED"), h.call(this, m, R, "DEPRECATED", "warn"), this._metaOpts = Z.call(this), R.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && A.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), k.call(this), R.validateFormats = S;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: M, schemaId: O } = this.opts;
        let S = y;
        O === "id" && (S = { ...y }, S.id = S.$id, delete S.$id), M && R && this.addMetaSchema(S, S[O], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: M } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[M] || R : void 0;
      }
      validate(R, M) {
        let O;
        if (typeof R == "string") {
          if (O = this.getSchema(R), !O)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          O = this.compile(R);
        const S = O(M);
        return "$async" in O || (this.errors = O.errors), S;
      }
      compile(R, M) {
        const O = this._addSchema(R, M);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(R, M) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return S.call(this, R, M);
        async function S(oe, P) {
          await T.call(this, oe.$schema);
          const I = this._addSchema(oe, P);
          return I.validate || N.call(this, I);
        }
        async function T(oe) {
          oe && !this.getSchema(oe) && await S.call(this, { $ref: oe }, !0);
        }
        async function N(oe) {
          try {
            return this._compileSchemaEnv(oe);
          } catch (P) {
            if (!(P instanceof o.default))
              throw P;
            return W.call(this, P), await Q.call(this, P.missingSchema), N.call(this, oe);
          }
        }
        function W({ missingSchema: oe, missingRef: P }) {
          if (this.refs[oe])
            throw new Error(`AnySchema ${oe} is loaded but ${P} cannot be resolved`);
        }
        async function Q(oe) {
          const P = await ie.call(this, oe);
          this.refs[oe] || await T.call(this, P.$schema), this.refs[oe] || this.addSchema(P, oe, M);
        }
        async function ie(oe) {
          const P = this._loading[oe];
          if (P)
            return P;
          try {
            return await (this._loading[oe] = O(oe));
          } finally {
            delete this._loading[oe];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, M, O, S = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const N of R)
            this.addSchema(N, void 0, O, S);
          return this;
        }
        let T;
        if (typeof R == "object") {
          const { schemaId: N } = this.opts;
          if (T = R[N], T !== void 0 && typeof T != "string")
            throw new Error(`schema ${N} must be string`);
        }
        return M = (0, c.normalizeId)(M || T), this._checkUnique(M), this.schemas[M] = this._addSchema(R, O, M, S, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, M, O = this.opts.validateSchema) {
        return this.addSchema(R, M, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, M) {
        if (typeof R == "boolean")
          return !0;
        let O;
        if (O = R.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const S = this.validate(O, R);
        if (!S && M) {
          const T = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(T);
          else
            throw new Error(T);
        }
        return S;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let M;
        for (; typeof (M = $.call(this, R)) == "string"; )
          R = M;
        if (M === void 0) {
          const { schemaId: O } = this.opts, S = new a.SchemaEnv({ schema: {}, schemaId: O });
          if (M = a.resolveSchema.call(this, S, R), !M)
            return;
          this.refs[R] = M;
        }
        return M.validate || this._compileSchemaEnv(M);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(R) {
        if (R instanceof RegExp)
          return this._removeAllSchemas(this.schemas, R), this._removeAllSchemas(this.refs, R), this;
        switch (typeof R) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const M = $.call(this, R);
            return typeof M == "object" && this._cache.delete(M.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const M = R;
            this._cache.delete(M);
            let O = R[this.opts.schemaId];
            return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const M of R)
          this.addKeyword(M);
        return this;
      }
      addKeyword(R, M) {
        let O;
        if (typeof R == "string")
          O = R, typeof M == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), M.keyword = O);
        else if (typeof R == "object" && M === void 0) {
          if (M = R, O = M.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (K.call(this, O, M), !M)
          return (0, l.eachItem)(O, (T) => ae.call(this, T)), this;
        Ee.call(this, M);
        const S = {
          ...M,
          type: (0, u.getJSONTypes)(M.type),
          schemaType: (0, u.getJSONTypes)(M.schemaType)
        };
        return (0, l.eachItem)(O, S.type.length === 0 ? (T) => ae.call(this, T, S) : (T) => S.type.forEach((N) => ae.call(this, T, S, N))), this;
      }
      getKeyword(R) {
        const M = this.RULES.all[R];
        return typeof M == "object" ? M.definition : !!M;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: M } = this;
        delete M.keywords[R], delete M.all[R];
        for (const O of M.rules) {
          const S = O.rules.findIndex((T) => T.keyword === R);
          S >= 0 && O.rules.splice(S, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, M) {
        return typeof M == "string" && (M = new RegExp(M)), this.formats[R] = M, this;
      }
      errorsText(R = this.errors, { separator: M = ", ", dataVar: O = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((S) => `${O}${S.instancePath} ${S.message}`).reduce((S, T) => S + M + T);
      }
      $dataMetaSchema(R, M) {
        const O = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const S of M) {
          const T = S.split("/").slice(1);
          let N = R;
          for (const W of T)
            N = N[W];
          for (const W in O) {
            const Q = O[W];
            if (typeof Q != "object")
              continue;
            const { $data: ie } = Q.definition, oe = N[W];
            ie && oe && (N[W] = ce(oe));
          }
        }
        return R;
      }
      _removeAllSchemas(R, M) {
        for (const O in R) {
          const S = R[O];
          (!M || M.test(O)) && (typeof S == "string" ? delete R[O] : S && !S.meta && (this._cache.delete(S.schema), delete R[O]));
        }
      }
      _addSchema(R, M, O, S = this.opts.validateSchema, T = this.opts.addUsedSchema) {
        let N;
        const { schemaId: W } = this.opts;
        if (typeof R == "object")
          N = R[W];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let Q = this._cache.get(R);
        if (Q !== void 0)
          return Q;
        O = (0, c.normalizeId)(N || O);
        const ie = c.getSchemaRefs.call(this, R, O);
        return Q = new a.SchemaEnv({ schema: R, schemaId: W, meta: M, baseId: O, localRefs: ie }), this._cache.set(Q.schema, Q), T && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = Q), S && this.validateSchema(R, !0), Q;
      }
      _checkUnique(R) {
        if (this.schemas[R] || this.refs[R])
          throw new Error(`schema with key or id "${R}" already exists`);
      }
      _compileSchemaEnv(R) {
        if (R.meta ? this._compileMetaSchema(R) : a.compileSchema.call(this, R), !R.validate)
          throw new Error("ajv implementation error");
        return R.validate;
      }
      _compileMetaSchema(R) {
        const M = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, R);
        } finally {
          this.opts = M;
        }
      }
    }
    b.ValidationError = n.default, b.MissingRefError = o.default, e.default = b;
    function h(U, R, M, O = "error") {
      for (const S in U) {
        const T = S;
        T in R && this.logger[O](`${M}: option ${S}. ${U[T]}`);
      }
    }
    function $(U) {
      return U = (0, c.normalizeId)(U), this.schemas[U] || this.refs[U];
    }
    function k() {
      const U = this.opts.schemas;
      if (U)
        if (Array.isArray(U))
          this.addSchema(U);
        else
          for (const R in U)
            this.addSchema(U[R], R);
    }
    function C() {
      for (const U in this.opts.formats) {
        const R = this.opts.formats[U];
        R && this.addFormat(U, R);
      }
    }
    function A(U) {
      if (Array.isArray(U)) {
        this.addVocabulary(U);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in U) {
        const M = U[R];
        M.keyword || (M.keyword = R), this.addKeyword(M);
      }
    }
    function Z() {
      const U = { ...this.opts };
      for (const R of v)
        delete U[R];
      return U;
    }
    const j = { log() {
    }, warn() {
    }, error() {
    } };
    function V(U) {
      if (U === !1)
        return j;
      if (U === void 0)
        return console;
      if (U.log && U.warn && U.error)
        return U;
      throw new Error("logger must implement log, warn and error methods");
    }
    const H = /^[a-z_$][a-z0-9_$:-]*$/i;
    function K(U, R) {
      const { RULES: M } = this;
      if ((0, l.eachItem)(U, (O) => {
        if (M.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!H.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function ae(U, R, M) {
      var O;
      const S = R == null ? void 0 : R.post;
      if (M && S)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: T } = this;
      let N = S ? T.post : T.rules.find(({ type: Q }) => Q === M);
      if (N || (N = { type: M, rules: [] }, T.rules.push(N)), T.keywords[U] = !0, !R)
        return;
      const W = {
        keyword: U,
        definition: {
          ...R,
          type: (0, u.getJSONTypes)(R.type),
          schemaType: (0, u.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? Pe.call(this, N, W, R.before) : N.rules.push(W), T.all[U] = W, (O = R.implements) === null || O === void 0 || O.forEach((Q) => this.addKeyword(Q));
    }
    function Pe(U, R, M) {
      const O = U.rules.findIndex((S) => S.keyword === M);
      O >= 0 ? U.rules.splice(O, 0, R) : (U.rules.push(R), this.logger.warn(`rule ${M} is not defined`));
    }
    function Ee(U) {
      let { metaSchema: R } = U;
      R !== void 0 && (U.$data && this.opts.$data && (R = ce(R)), U.validateSchema = this.compile(R, !0));
    }
    const x = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ce(U) {
      return { anyOf: [U, x] };
    }
  }(jn)), jn;
}
var mr = {}, _r = {}, gr = {}, ra;
function Wm() {
  if (ra) return gr;
  ra = 1, Object.defineProperty(gr, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return gr.default = e, gr;
}
var st = {}, na;
function Gm() {
  if (na) return st;
  na = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.callRef = st.getValidate = void 0;
  const e = /* @__PURE__ */ Tn(), t = /* @__PURE__ */ et(), r = /* @__PURE__ */ te(), n = /* @__PURE__ */ ft(), o = /* @__PURE__ */ Yo(), s = /* @__PURE__ */ se(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(u) {
      const { gen: l, schema: y, it: g } = u, { baseId: p, schemaEnv: v, validateName: w, opts: f, self: m } = g, { root: d } = v;
      if ((y === "#" || y === "#/") && p === d.baseId)
        return b();
      const _ = o.resolveRef.call(m, d, p, y);
      if (_ === void 0)
        throw new e.default(g.opts.uriResolver, p, y);
      if (_ instanceof o.SchemaEnv)
        return h(_);
      return $(_);
      function b() {
        if (v === d)
          return c(u, w, v, v.$async);
        const k = l.scopeValue("root", { ref: d });
        return c(u, (0, r._)`${k}.validate`, d, d.$async);
      }
      function h(k) {
        const C = i(u, k);
        c(u, C, k, k.$async);
      }
      function $(k) {
        const C = l.scopeValue("schema", f.code.source === !0 ? { ref: k, code: (0, r.stringify)(k) } : { ref: k }), A = l.name("valid"), Z = u.subschema({
          schema: k,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: C,
          errSchemaPath: y
        }, A);
        u.mergeEvaluated(Z), u.ok(A);
      }
    }
  };
  function i(u, l) {
    const { gen: y } = u;
    return l.validate ? y.scopeValue("validate", { ref: l.validate }) : (0, r._)`${y.scopeValue("wrapper", { ref: l })}.validate`;
  }
  st.getValidate = i;
  function c(u, l, y, g) {
    const { gen: p, it: v } = u, { allErrors: w, schemaEnv: f, opts: m } = v, d = m.passContext ? n.default.this : r.nil;
    g ? _() : b();
    function _() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const k = p.let("valid");
      p.try(() => {
        p.code((0, r._)`await ${(0, t.callValidateCode)(u, l, d)}`), $(l), w || p.assign(k, !0);
      }, (C) => {
        p.if((0, r._)`!(${C} instanceof ${v.ValidationError})`, () => p.throw(C)), h(C), w || p.assign(k, !1);
      }), u.ok(k);
    }
    function b() {
      u.result((0, t.callValidateCode)(u, l, d), () => $(l), () => h(l));
    }
    function h(k) {
      const C = (0, r._)`${k}.errors`;
      p.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${C} : ${n.default.vErrors}.concat(${C})`), p.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function $(k) {
      var C;
      if (!v.opts.unevaluated)
        return;
      const A = (C = y == null ? void 0 : y.validate) === null || C === void 0 ? void 0 : C.evaluated;
      if (v.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (v.props = s.mergeEvaluated.props(p, A.props, v.props));
        else {
          const Z = p.var("props", (0, r._)`${k}.evaluated.props`);
          v.props = s.mergeEvaluated.props(p, Z, v.props, r.Name);
        }
      if (v.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (v.items = s.mergeEvaluated.items(p, A.items, v.items));
        else {
          const Z = p.var("items", (0, r._)`${k}.evaluated.items`);
          v.items = s.mergeEvaluated.items(p, Z, v.items, r.Name);
        }
    }
  }
  return st.callRef = c, st.default = a, st;
}
var oa;
function Bm() {
  if (oa) return _r;
  oa = 1, Object.defineProperty(_r, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wm(), t = /* @__PURE__ */ Gm(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return _r.default = r, _r;
}
var yr = {}, vr = {}, sa;
function Qm() {
  if (sa) return vr;
  sa = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = e.operators, r = {
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
  return vr.default = o, vr;
}
var wr = {}, aa;
function Ym() {
  if (aa) return wr;
  aa = 1, Object.defineProperty(wr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), r = {
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
  return wr.default = r, wr;
}
var $r = {}, br = {}, ia;
function Xm() {
  if (ia) return br;
  ia = 1, Object.defineProperty(br, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let n = 0, o = 0, s;
    for (; o < r; )
      n++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < r && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return n;
  }
  return br.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', br;
}
var ca;
function e_() {
  if (ca) return $r;
  ca = 1, Object.defineProperty($r, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), r = /* @__PURE__ */ Xm(), o = {
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
      const { keyword: a, data: i, schemaCode: c, it: u } = s, l = a === "maxLength" ? e.operators.GT : e.operators.LT, y = u.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, r.default)}(${i})`;
      s.fail$data((0, e._)`${y} ${l} ${c}`);
    }
  };
  return $r.default = o, $r;
}
var Sr = {}, ua;
function t_() {
  if (ua) return Sr;
  ua = 1, Object.defineProperty(Sr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ se(), r = /* @__PURE__ */ te(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, r.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, r._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: u, schemaCode: l, it: y } = s, g = y.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: p } = y.opts.code, v = p.code === "new RegExp" ? (0, r._)`new RegExp` : (0, t.useFunc)(a, p), w = a.let("valid");
        a.try(() => a.assign(w, (0, r._)`${v}(${l}, ${g}).test(${i})`), () => a.assign(w, !1)), s.fail$data((0, r._)`!${w}`);
      } else {
        const p = (0, e.usePattern)(s, u);
        s.fail$data((0, r._)`!${p}.test(${i})`);
      }
    }
  };
  return Sr.default = o, Sr;
}
var kr = {}, la;
function r_() {
  if (la) return kr;
  la = 1, Object.defineProperty(kr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), r = {
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
  return kr.default = r, kr;
}
var Er = {}, da;
function n_() {
  if (da) return Er;
  da = 1, Object.defineProperty(Er, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ te(), r = /* @__PURE__ */ se(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: a, schema: i, schemaCode: c, data: u, $data: l, it: y } = s, { opts: g } = y;
      if (!l && i.length === 0)
        return;
      const p = i.length >= g.loopRequired;
      if (y.allErrors ? v() : w(), g.strictRequired) {
        const d = s.parentSchema.properties, { definedProperties: _ } = s.it;
        for (const b of i)
          if ((d == null ? void 0 : d[b]) === void 0 && !_.has(b)) {
            const h = y.schemaEnv.baseId + y.errSchemaPath, $ = `required property "${b}" is not defined at "${h}" (strictRequired)`;
            (0, r.checkStrictMode)(y, $, y.opts.strictRequired);
          }
      }
      function v() {
        if (p || l)
          s.block$data(t.nil, f);
        else
          for (const d of i)
            (0, e.checkReportMissingProp)(s, d);
      }
      function w() {
        const d = a.let("missing");
        if (p || l) {
          const _ = a.let("valid", !0);
          s.block$data(_, () => m(d, _)), s.ok(_);
        } else
          a.if((0, e.checkMissingProp)(s, i, d)), (0, e.reportMissingProp)(s, d), a.else();
      }
      function f() {
        a.forOf("prop", c, (d) => {
          s.setParams({ missingProperty: d }), a.if((0, e.noPropertyInData)(a, u, d, g.ownProperties), () => s.error());
        });
      }
      function m(d, _) {
        s.setParams({ missingProperty: d }), a.forOf(d, c, () => {
          a.assign(_, (0, e.propertyInData)(a, u, d, g.ownProperties)), a.if((0, t.not)(_), () => {
            s.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return Er.default = o, Er;
}
var Tr = {}, fa;
function o_() {
  if (fa) return Tr;
  fa = 1, Object.defineProperty(Tr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), r = {
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
  return Tr.default = r, Tr;
}
var Pr = {}, Rr = {}, ha;
function Xo() {
  if (ha) return Rr;
  ha = 1, Object.defineProperty(Rr, "__esModule", { value: !0 });
  const e = _c();
  return e.code = 'require("ajv/dist/runtime/equal").default', Rr.default = e, Rr;
}
var pa;
function s_() {
  if (pa) return Pr;
  pa = 1, Object.defineProperty(Pr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sn(), t = /* @__PURE__ */ te(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ Xo(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${a} are identical)`,
      params: ({ params: { i: a, j: i } }) => (0, t._)`{i: ${a}, j: ${i}}`
    },
    code(a) {
      const { gen: i, data: c, $data: u, schema: l, parentSchema: y, schemaCode: g, it: p } = a;
      if (!u && !l)
        return;
      const v = i.let("valid"), w = y.items ? (0, e.getSchemaTypes)(y.items) : [];
      a.block$data(v, f, (0, t._)`${g} === false`), a.ok(v);
      function f() {
        const b = i.let("i", (0, t._)`${c}.length`), h = i.let("j");
        a.setParams({ i: b, j: h }), i.assign(v, !0), i.if((0, t._)`${b} > 1`, () => (m() ? d : _)(b, h));
      }
      function m() {
        return w.length > 0 && !w.some((b) => b === "object" || b === "array");
      }
      function d(b, h) {
        const $ = i.name("item"), k = (0, e.checkDataTypes)(w, $, p.opts.strictNumbers, e.DataType.Wrong), C = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${b}--;`, () => {
          i.let($, (0, t._)`${c}[${b}]`), i.if(k, (0, t._)`continue`), w.length > 1 && i.if((0, t._)`typeof ${$} == "string"`, (0, t._)`${$} += "_"`), i.if((0, t._)`typeof ${C}[${$}] == "number"`, () => {
            i.assign(h, (0, t._)`${C}[${$}]`), a.error(), i.assign(v, !1).break();
          }).code((0, t._)`${C}[${$}] = ${b}`);
        });
      }
      function _(b, h) {
        const $ = (0, r.useFunc)(i, n.default), k = i.name("outer");
        i.label(k).for((0, t._)`;${b}--;`, () => i.for((0, t._)`${h} = ${b}; ${h}--;`, () => i.if((0, t._)`${$}(${c}[${b}], ${c}[${h}])`, () => {
          a.error(), i.assign(v, !1).break(k);
        })));
      }
    }
  };
  return Pr.default = s, Pr;
}
var Ir = {}, ma;
function a_() {
  if (ma) return Ir;
  ma = 1, Object.defineProperty(Ir, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), r = /* @__PURE__ */ Xo(), o = {
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
  return Ir.default = o, Ir;
}
var Cr = {}, _a;
function i_() {
  if (_a) return Cr;
  _a = 1, Object.defineProperty(Cr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), r = /* @__PURE__ */ Xo(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: u, schemaCode: l, it: y } = s;
      if (!c && u.length === 0)
        throw new Error("enum must have non-empty array");
      const g = u.length >= y.opts.loopEnum;
      let p;
      const v = () => p ?? (p = (0, t.useFunc)(a, r.default));
      let w;
      if (g || c)
        w = a.let("valid"), s.block$data(w, f);
      else {
        if (!Array.isArray(u))
          throw new Error("ajv implementation error");
        const d = a.const("vSchema", l);
        w = (0, e.or)(...u.map((_, b) => m(d, b)));
      }
      s.pass(w);
      function f() {
        a.assign(w, !1), a.forOf("v", l, (d) => a.if((0, e._)`${v()}(${i}, ${d})`, () => a.assign(w, !0).break()));
      }
      function m(d, _) {
        const b = u[_];
        return typeof b == "object" && b !== null ? (0, e._)`${v()}(${i}, ${d}[${_}])` : (0, e._)`${i} === ${b}`;
      }
    }
  };
  return Cr.default = o, Cr;
}
var ga;
function c_() {
  if (ga) return yr;
  ga = 1, Object.defineProperty(yr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qm(), t = /* @__PURE__ */ Ym(), r = /* @__PURE__ */ e_(), n = /* @__PURE__ */ t_(), o = /* @__PURE__ */ r_(), s = /* @__PURE__ */ n_(), a = /* @__PURE__ */ o_(), i = /* @__PURE__ */ s_(), c = /* @__PURE__ */ a_(), u = /* @__PURE__ */ i_(), l = [
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
  return yr.default = l, yr;
}
var Or = {}, bt = {}, ya;
function yc() {
  if (ya) return bt;
  ya = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), n = {
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
    const { gen: i, schema: c, data: u, keyword: l, it: y } = s;
    y.items = !0;
    const g = i.const("len", (0, e._)`${u}.length`);
    if (c === !1)
      s.setParams({ len: a.length }), s.pass((0, e._)`${g} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(y, c)) {
      const v = i.var("valid", (0, e._)`${g} <= ${a.length}`);
      i.if((0, e.not)(v), () => p(v)), s.ok(v);
    }
    function p(v) {
      i.forRange("i", a.length, g, (w) => {
        s.subschema({ keyword: l, dataProp: w, dataPropType: t.Type.Num }, v), y.allErrors || i.if((0, e.not)(v), () => i.break());
      });
    }
  }
  return bt.validateAdditionalItems = o, bt.default = n, bt;
}
var zr = {}, St = {}, va;
function vc() {
  if (va) return St;
  va = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.validateTuple = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), r = /* @__PURE__ */ et(), n = {
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
    const { gen: c, parentSchema: u, data: l, keyword: y, it: g } = s;
    w(u), g.opts.unevaluated && i.length && g.items !== !0 && (g.items = t.mergeEvaluated.items(c, i.length, g.items));
    const p = c.name("valid"), v = c.const("len", (0, e._)`${l}.length`);
    i.forEach((f, m) => {
      (0, t.alwaysValidSchema)(g, f) || (c.if((0, e._)`${v} > ${m}`, () => s.subschema({
        keyword: y,
        schemaProp: m,
        dataProp: m
      }, p)), s.ok(p));
    });
    function w(f) {
      const { opts: m, errSchemaPath: d } = g, _ = i.length, b = _ === f.minItems && (_ === f.maxItems || f[a] === !1);
      if (m.strictTuples && !b) {
        const h = `"${y}" is ${_}-tuple, but minItems or maxItems/${a} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(g, h, m.strictTuples);
      }
    }
  }
  return St.validateTuple = o, St.default = n, St;
}
var wa;
function u_() {
  if (wa) return zr;
  wa = 1, Object.defineProperty(zr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vc(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return zr.default = t, zr;
}
var Nr = {}, $a;
function l_() {
  if ($a) return Nr;
  $a = 1, Object.defineProperty(Nr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), r = /* @__PURE__ */ et(), n = /* @__PURE__ */ yc(), s = {
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
var jr = {}, ba;
function d_() {
  if (ba) return jr;
  ba = 1, Object.defineProperty(jr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), n = {
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
      let l, y;
      const { minContains: g, maxContains: p } = i;
      u.opts.next ? (l = g === void 0 ? 1 : g, y = p) : l = 1;
      const v = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: l, max: y }), y === void 0 && l === 0) {
        (0, t.checkStrictMode)(u, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (y !== void 0 && l > y) {
        (0, t.checkStrictMode)(u, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(u, a)) {
        let _ = (0, e._)`${v} >= ${l}`;
        y !== void 0 && (_ = (0, e._)`${_} && ${v} <= ${y}`), o.pass(_);
        return;
      }
      u.items = !0;
      const w = s.name("valid");
      y === void 0 && l === 1 ? m(w, () => s.if(w, () => s.break())) : l === 0 ? (s.let(w, !0), y !== void 0 && s.if((0, e._)`${c}.length > 0`, f)) : (s.let(w, !1), f()), o.result(w, () => o.reset());
      function f() {
        const _ = s.name("_valid"), b = s.let("count", 0);
        m(_, () => s.if(_, () => d(b)));
      }
      function m(_, b) {
        s.forRange("i", 0, v, (h) => {
          o.subschema({
            keyword: "contains",
            dataProp: h,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, _), b();
        });
      }
      function d(_) {
        s.code((0, e._)`${_}++`), y === void 0 ? s.if((0, e._)`${_} >= ${l}`, () => s.assign(w, !0).break()) : (s.if((0, e._)`${_} > ${y}`, () => s.assign(w, !1).break()), l === 1 ? s.assign(w, !0) : s.if((0, e._)`${_} >= ${l}`, () => s.assign(w, !0)));
      }
    }
  };
  return jr.default = n, jr;
}
var Fn = {}, Sa;
function f_() {
  return Sa || (Sa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ et();
    e.error = {
      message: ({ params: { property: c, depsCount: u, deps: l } }) => {
        const y = u === 1 ? "property" : "properties";
        return (0, t.str)`must have ${y} ${l} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: u, deps: l, missingProperty: y } }) => (0, t._)`{property: ${c},
    missingProperty: ${y},
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
      for (const y in c) {
        if (y === "__proto__")
          continue;
        const g = Array.isArray(c[y]) ? u : l;
        g[y] = c[y];
      }
      return [u, l];
    }
    function a(c, u = c.schema) {
      const { gen: l, data: y, it: g } = c;
      if (Object.keys(u).length === 0)
        return;
      const p = l.let("missing");
      for (const v in u) {
        const w = u[v];
        if (w.length === 0)
          continue;
        const f = (0, n.propertyInData)(l, y, v, g.opts.ownProperties);
        c.setParams({
          property: v,
          depsCount: w.length,
          deps: w.join(", ")
        }), g.allErrors ? l.if(f, () => {
          for (const m of w)
            (0, n.checkReportMissingProp)(c, m);
        }) : (l.if((0, t._)`${f} && (${(0, n.checkMissingProp)(c, w, p)})`), (0, n.reportMissingProp)(c, p), l.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, u = c.schema) {
      const { gen: l, data: y, keyword: g, it: p } = c, v = l.name("valid");
      for (const w in u)
        (0, r.alwaysValidSchema)(p, u[w]) || (l.if(
          (0, n.propertyInData)(l, y, w, p.opts.ownProperties),
          () => {
            const f = c.subschema({ keyword: g, schemaProp: w }, v);
            c.mergeValidEvaluated(f, v);
          },
          () => l.var(v, !0)
          // TODO var
        ), c.ok(v));
    }
    e.validateSchemaDeps = i, e.default = o;
  }(Fn)), Fn;
}
var Mr = {}, ka;
function h_() {
  if (ka) return Mr;
  ka = 1, Object.defineProperty(Mr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), n = {
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
  return Mr.default = n, Mr;
}
var qr = {}, Ea;
function wc() {
  if (Ea) return qr;
  Ea = 1, Object.defineProperty(qr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ te(), r = /* @__PURE__ */ ft(), n = /* @__PURE__ */ se(), s = {
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
      const { gen: i, schema: c, parentSchema: u, data: l, errsCount: y, it: g } = a;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: p, opts: v } = g;
      if (g.props = !0, v.removeAdditional !== "all" && (0, n.alwaysValidSchema)(g, c))
        return;
      const w = (0, e.allSchemaProperties)(u.properties), f = (0, e.allSchemaProperties)(u.patternProperties);
      m(), a.ok((0, t._)`${y} === ${r.default.errors}`);
      function m() {
        i.forIn("key", l, ($) => {
          !w.length && !f.length ? b($) : i.if(d($), () => b($));
        });
      }
      function d($) {
        let k;
        if (w.length > 8) {
          const C = (0, n.schemaRefOrVal)(g, u.properties, "properties");
          k = (0, e.isOwnProperty)(i, C, $);
        } else w.length ? k = (0, t.or)(...w.map((C) => (0, t._)`${$} === ${C}`)) : k = t.nil;
        return f.length && (k = (0, t.or)(k, ...f.map((C) => (0, t._)`${(0, e.usePattern)(a, C)}.test(${$})`))), (0, t.not)(k);
      }
      function _($) {
        i.code((0, t._)`delete ${l}[${$}]`);
      }
      function b($) {
        if (v.removeAdditional === "all" || v.removeAdditional && c === !1) {
          _($);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: $ }), a.error(), p || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)(g, c)) {
          const k = i.name("valid");
          v.removeAdditional === "failing" ? (h($, k, !1), i.if((0, t.not)(k), () => {
            a.reset(), _($);
          })) : (h($, k), p || i.if((0, t.not)(k), () => i.break()));
        }
      }
      function h($, k, C) {
        const A = {
          keyword: "additionalProperties",
          dataProp: $,
          dataPropType: n.Type.Str
        };
        C === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(A, k);
      }
    }
  };
  return qr.default = s, qr;
}
var Ar = {}, Ta;
function p_() {
  if (Ta) return Ar;
  Ta = 1, Object.defineProperty(Ar, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ En(), t = /* @__PURE__ */ et(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ wc(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, parentSchema: c, data: u, it: l } = s;
      l.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(l, n.default, "additionalProperties"));
      const y = (0, t.allSchemaProperties)(i);
      for (const f of y)
        l.definedProperties.add(f);
      l.opts.unevaluated && y.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(y), l.props));
      const g = y.filter((f) => !(0, r.alwaysValidSchema)(l, i[f]));
      if (g.length === 0)
        return;
      const p = a.name("valid");
      for (const f of g)
        v(f) ? w(f) : (a.if((0, t.propertyInData)(a, u, f, l.opts.ownProperties)), w(f), l.allErrors || a.else().var(p, !0), a.endIf()), s.it.definedProperties.add(f), s.ok(p);
      function v(f) {
        return l.opts.useDefaults && !l.compositeRule && i[f].default !== void 0;
      }
      function w(f) {
        s.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, p);
      }
    }
  };
  return Ar.default = o, Ar;
}
var Ur = {}, Pa;
function m_() {
  if (Pa) return Ur;
  Pa = 1, Object.defineProperty(Ur, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ te(), r = /* @__PURE__ */ se(), n = /* @__PURE__ */ se(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: u, it: l } = s, { opts: y } = l, g = (0, e.allSchemaProperties)(i), p = g.filter((b) => (0, r.alwaysValidSchema)(l, i[b]));
      if (g.length === 0 || p.length === g.length && (!l.opts.unevaluated || l.props === !0))
        return;
      const v = y.strictSchema && !y.allowMatchingProperties && u.properties, w = a.name("valid");
      l.props !== !0 && !(l.props instanceof t.Name) && (l.props = (0, n.evaluatedPropsToName)(a, l.props));
      const { props: f } = l;
      m();
      function m() {
        for (const b of g)
          v && d(b), l.allErrors ? _(b) : (a.var(w, !0), _(b), a.if(w));
      }
      function d(b) {
        for (const h in v)
          new RegExp(b).test(h) && (0, r.checkStrictMode)(l, `property ${h} matches pattern ${b} (use allowMatchingProperties)`);
      }
      function _(b) {
        a.forIn("key", c, (h) => {
          a.if((0, t._)`${(0, e.usePattern)(s, b)}.test(${h})`, () => {
            const $ = p.includes(b);
            $ || s.subschema({
              keyword: "patternProperties",
              schemaProp: b,
              dataProp: h,
              dataPropType: n.Type.Str
            }, w), l.opts.unevaluated && f !== !0 ? a.assign((0, t._)`${f}[${h}]`, !0) : !$ && !l.allErrors && a.if((0, t.not)(w), () => a.break());
          });
        });
      }
    }
  };
  return Ur.default = o, Ur;
}
var Dr = {}, Ra;
function __() {
  if (Ra) return Dr;
  Ra = 1, Object.defineProperty(Dr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = {
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
var Zr = {}, Ia;
function g_() {
  if (Ia) return Zr;
  Ia = 1, Object.defineProperty(Zr, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ et()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Zr.default = t, Zr;
}
var Vr = {}, Ca;
function y_() {
  if (Ca) return Vr;
  Ca = 1, Object.defineProperty(Vr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), n = {
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
      const u = a, l = s.let("valid", !1), y = s.let("passing", null), g = s.name("_valid");
      o.setParams({ passing: y }), s.block(p), o.result(l, () => o.reset(), () => o.error(!0));
      function p() {
        u.forEach((v, w) => {
          let f;
          (0, t.alwaysValidSchema)(c, v) ? s.var(g, !0) : f = o.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, g), w > 0 && s.if((0, e._)`${g} && ${l}`).assign(l, !1).assign(y, (0, e._)`[${y}, ${w}]`).else(), s.if(g, () => {
            s.assign(l, !0), s.assign(y, w), f && o.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Vr.default = n, Vr;
}
var Lr = {}, Oa;
function v_() {
  if (Oa) return Lr;
  Oa = 1, Object.defineProperty(Lr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = {
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
  return Lr.default = t, Lr;
}
var Fr = {}, za;
function w_() {
  if (za) return Fr;
  za = 1, Object.defineProperty(Fr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ se(), n = {
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
      const y = a.let("valid", !0), g = a.name("_valid");
      if (p(), s.reset(), u && l) {
        const w = a.let("ifClause");
        s.setParams({ ifClause: w }), a.if(g, v("then", w), v("else", w));
      } else u ? a.if(g, v("then")) : a.if((0, e.not)(g), v("else"));
      s.pass(y, () => s.error(!0));
      function p() {
        const w = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, g);
        s.mergeEvaluated(w);
      }
      function v(w, f) {
        return () => {
          const m = s.subschema({ keyword: w }, g);
          a.assign(y, g), s.mergeValidEvaluated(m, y), f ? a.assign(f, (0, e._)`${w}`) : s.setParams({ ifClause: w });
        };
      }
    }
  };
  function o(s, a) {
    const i = s.schema[a];
    return i !== void 0 && !(0, t.alwaysValidSchema)(s, i);
  }
  return Fr.default = n, Fr;
}
var xr = {}, Na;
function $_() {
  if (Na) return xr;
  Na = 1, Object.defineProperty(xr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ se(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: n, it: o }) {
      n.if === void 0 && (0, e.checkStrictMode)(o, `"${r}" without "if" is ignored`);
    }
  };
  return xr.default = t, xr;
}
var ja;
function b_() {
  if (ja) return Or;
  ja = 1, Object.defineProperty(Or, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yc(), t = /* @__PURE__ */ u_(), r = /* @__PURE__ */ vc(), n = /* @__PURE__ */ l_(), o = /* @__PURE__ */ d_(), s = /* @__PURE__ */ f_(), a = /* @__PURE__ */ h_(), i = /* @__PURE__ */ wc(), c = /* @__PURE__ */ p_(), u = /* @__PURE__ */ m_(), l = /* @__PURE__ */ __(), y = /* @__PURE__ */ g_(), g = /* @__PURE__ */ y_(), p = /* @__PURE__ */ v_(), v = /* @__PURE__ */ w_(), w = /* @__PURE__ */ $_();
  function f(m = !1) {
    const d = [
      // any
      l.default,
      y.default,
      g.default,
      p.default,
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
  return Or.default = f, Or;
}
var Hr = {}, Kr = {}, Ma;
function S_() {
  if (Ma) return Kr;
  Ma = 1, Object.defineProperty(Kr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, o) {
      const { gen: s, data: a, $data: i, schema: c, schemaCode: u, it: l } = n, { opts: y, errSchemaPath: g, schemaEnv: p, self: v } = l;
      if (!y.validateFormats)
        return;
      i ? w() : f();
      function w() {
        const m = s.scopeValue("formats", {
          ref: v.formats,
          code: y.code.formats
        }), d = s.const("fDef", (0, e._)`${m}[${u}]`), _ = s.let("fType"), b = s.let("format");
        s.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => s.assign(_, (0, e._)`${d}.type || "string"`).assign(b, (0, e._)`${d}.validate`), () => s.assign(_, (0, e._)`"string"`).assign(b, d)), n.fail$data((0, e.or)(h(), $()));
        function h() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${u} && !${b}`;
        }
        function $() {
          const k = p.$async ? (0, e._)`(${d}.async ? await ${b}(${a}) : ${b}(${a}))` : (0, e._)`${b}(${a})`, C = (0, e._)`(typeof ${b} == "function" ? ${k} : ${b}.test(${a}))`;
          return (0, e._)`${b} && ${b} !== true && ${_} === ${o} && !${C}`;
        }
      }
      function f() {
        const m = v.formats[c];
        if (!m) {
          h();
          return;
        }
        if (m === !0)
          return;
        const [d, _, b] = $(m);
        d === o && n.pass(k());
        function h() {
          if (y.strictSchema === !1) {
            v.logger.warn(C());
            return;
          }
          throw new Error(C());
          function C() {
            return `unknown format "${c}" ignored in schema at path "${g}"`;
          }
        }
        function $(C) {
          const A = C instanceof RegExp ? (0, e.regexpCode)(C) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, Z = s.scopeValue("formats", { key: c, ref: C, code: A });
          return typeof C == "object" && !(C instanceof RegExp) ? [C.type || "string", C.validate, (0, e._)`${Z}.validate`] : ["string", C, Z];
        }
        function k() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!p.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${b}(${a})`;
          }
          return typeof _ == "function" ? (0, e._)`${b}(${a})` : (0, e._)`${b}.test(${a})`;
        }
      }
    }
  };
  return Kr.default = r, Kr;
}
var qa;
function k_() {
  if (qa) return Hr;
  qa = 1, Object.defineProperty(Hr, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ S_()).default];
  return Hr.default = t, Hr;
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
var Ua;
function T_() {
  if (Ua) return mr;
  Ua = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bm(), t = /* @__PURE__ */ c_(), r = /* @__PURE__ */ b_(), n = /* @__PURE__ */ k_(), o = /* @__PURE__ */ E_(), s = [
    e.default,
    t.default,
    (0, r.default)(),
    n.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return mr.default = s, mr;
}
var Jr = {}, xt = {}, Da;
function P_() {
  if (Da) return xt;
  Da = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (xt.DiscrError = e = {})), xt;
}
var Za;
function R_() {
  if (Za) return Jr;
  Za = 1, Object.defineProperty(Jr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ P_(), r = /* @__PURE__ */ Yo(), n = /* @__PURE__ */ Tn(), o = /* @__PURE__ */ se(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: u } }) => (0, e._)`{error: ${i}, tag: ${u}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: u, schema: l, parentSchema: y, it: g } = i, { oneOf: p } = y;
      if (!g.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const v = l.propertyName;
      if (typeof v != "string")
        throw new Error("discriminator: requires propertyName");
      if (l.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!p)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), f = c.const("tag", (0, e._)`${u}${(0, e.getProperty)(v)}`);
      c.if((0, e._)`typeof ${f} == "string"`, () => m(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: v })), i.ok(w);
      function m() {
        const b = _();
        c.if(!1);
        for (const h in b)
          c.elseIf((0, e._)`${f} === ${h}`), c.assign(w, d(b[h]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: v }), c.endIf();
      }
      function d(b) {
        const h = c.name("valid"), $ = i.subschema({ keyword: "oneOf", schemaProp: b }, h);
        return i.mergeEvaluated($, e.Name), h;
      }
      function _() {
        var b;
        const h = {}, $ = C(y);
        let k = !0;
        for (let j = 0; j < p.length; j++) {
          let V = p[j];
          if (V != null && V.$ref && !(0, o.schemaHasRulesButRef)(V, g.self.RULES)) {
            const K = V.$ref;
            if (V = r.resolveRef.call(g.self, g.schemaEnv.root, g.baseId, K), V instanceof r.SchemaEnv && (V = V.schema), V === void 0)
              throw new n.default(g.opts.uriResolver, g.baseId, K);
          }
          const H = (b = V == null ? void 0 : V.properties) === null || b === void 0 ? void 0 : b[v];
          if (typeof H != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${v}"`);
          k = k && ($ || C(V)), A(H, j);
        }
        if (!k)
          throw new Error(`discriminator: "${v}" must be required`);
        return h;
        function C({ required: j }) {
          return Array.isArray(j) && j.includes(v);
        }
        function A(j, V) {
          if (j.const)
            Z(j.const, V);
          else if (j.enum)
            for (const H of j.enum)
              Z(H, V);
          else
            throw new Error(`discriminator: "properties/${v}" must have "const" or "enum"`);
        }
        function Z(j, V) {
          if (typeof j != "string" || j in h)
            throw new Error(`discriminator: "${v}" values must be unique strings`);
          h[j] = V;
        }
      }
    }
  };
  return Jr.default = a, Jr;
}
const I_ = "http://json-schema.org/draft-07/schema#", C_ = "http://json-schema.org/draft-07/schema#", O_ = "Core schema meta-schema", z_ = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, N_ = ["object", "boolean"], j_ = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, M_ = {
  $schema: I_,
  $id: C_,
  title: O_,
  definitions: z_,
  type: N_,
  properties: j_,
  default: !0
};
var Va;
function $c() {
  return Va || (Va = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = /* @__PURE__ */ Jm(), n = /* @__PURE__ */ T_(), o = /* @__PURE__ */ R_(), s = M_, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
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
    var u = /* @__PURE__ */ En();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return u.KeywordCxt;
    } });
    var l = /* @__PURE__ */ te();
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
    var y = /* @__PURE__ */ Qo();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return y.default;
    } });
    var g = /* @__PURE__ */ Tn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  }(lr, lr.exports)), lr.exports;
}
var q_ = /* @__PURE__ */ $c();
const A_ = /* @__PURE__ */ Ya(q_);
var Wr = { exports: {} }, xn = {}, La;
function U_() {
  return La || (La = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(j, V) {
      return { validate: j, compare: V };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(s, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), u),
      "date-time": t(g(!0), p),
      "iso-time": t(c(), l),
      "iso-date-time": t(g(), v),
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
      regex: Z,
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
      byte: _,
      // signed 32 bit integer
      int32: { type: "number", validate: $ },
      // signed 64 bit integer
      int64: { type: "number", validate: k },
      // C-type float
      float: { type: "number", validate: C },
      // C-type double
      double: { type: "number", validate: C },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, a),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, u),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
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
      const V = n.exec(j);
      if (!V)
        return !1;
      const H = +V[1], K = +V[2], ae = +V[3];
      return K >= 1 && K <= 12 && ae >= 1 && ae <= (K === 2 && r(H) ? 29 : o[K]);
    }
    function a(j, V) {
      if (j && V)
        return j > V ? 1 : j < V ? -1 : 0;
    }
    const i = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(j) {
      return function(H) {
        const K = i.exec(H);
        if (!K)
          return !1;
        const ae = +K[1], Pe = +K[2], Ee = +K[3], x = K[4], ce = K[5] === "-" ? -1 : 1, U = +(K[6] || 0), R = +(K[7] || 0);
        if (U > 23 || R > 59 || j && !x)
          return !1;
        if (ae <= 23 && Pe <= 59 && Ee < 60)
          return !0;
        const M = Pe - R * ce, O = ae - U * ce - (M < 0 ? 1 : 0);
        return (O === 23 || O === -1) && (M === 59 || M === -1) && Ee < 61;
      };
    }
    function u(j, V) {
      if (!(j && V))
        return;
      const H = (/* @__PURE__ */ new Date("2020-01-01T" + j)).valueOf(), K = (/* @__PURE__ */ new Date("2020-01-01T" + V)).valueOf();
      if (H && K)
        return H - K;
    }
    function l(j, V) {
      if (!(j && V))
        return;
      const H = i.exec(j), K = i.exec(V);
      if (H && K)
        return j = H[1] + H[2] + H[3], V = K[1] + K[2] + K[3], j > V ? 1 : j < V ? -1 : 0;
    }
    const y = /t|\s/i;
    function g(j) {
      const V = c(j);
      return function(K) {
        const ae = K.split(y);
        return ae.length === 2 && s(ae[0]) && V(ae[1]);
      };
    }
    function p(j, V) {
      if (!(j && V))
        return;
      const H = new Date(j).valueOf(), K = new Date(V).valueOf();
      if (H && K)
        return H - K;
    }
    function v(j, V) {
      if (!(j && V))
        return;
      const [H, K] = j.split(y), [ae, Pe] = V.split(y), Ee = a(H, ae);
      if (Ee !== void 0)
        return Ee || u(K, Pe);
    }
    const w = /\/|:/, f = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function m(j) {
      return w.test(j) && f.test(j);
    }
    const d = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function _(j) {
      return d.lastIndex = 0, d.test(j);
    }
    const b = -2147483648, h = 2 ** 31 - 1;
    function $(j) {
      return Number.isInteger(j) && j <= h && j >= b;
    }
    function k(j) {
      return Number.isInteger(j);
    }
    function C() {
      return !0;
    }
    const A = /[^\\]\\Z/;
    function Z(j) {
      if (A.test(j))
        return !1;
      try {
        return new RegExp(j), !0;
      } catch {
        return !1;
      }
    }
  }(xn)), xn;
}
var Hn = {}, Fa;
function D_() {
  return Fa || (Fa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ $c(), r = /* @__PURE__ */ te(), n = r.operators, o = {
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
        const { gen: c, data: u, schemaCode: l, keyword: y, it: g } = i, { opts: p, self: v } = g;
        if (!p.validateFormats)
          return;
        const w = new t.KeywordCxt(g, v.RULES.all.format.definition, "format");
        w.$data ? f() : m();
        function f() {
          const _ = c.scopeValue("formats", {
            ref: v.formats,
            code: p.code.formats
          }), b = c.const("fmt", (0, r._)`${_}[${w.schemaCode}]`);
          i.fail$data((0, r.or)((0, r._)`typeof ${b} != "object"`, (0, r._)`${b} instanceof RegExp`, (0, r._)`typeof ${b}.compare != "function"`, d(b)));
        }
        function m() {
          const _ = w.schema, b = v.formats[_];
          if (!b || b === !0)
            return;
          if (typeof b != "object" || b instanceof RegExp || typeof b.compare != "function")
            throw new Error(`"${y}": format "${_}" does not define "compare" function`);
          const h = c.scopeValue("formats", {
            key: _,
            ref: b,
            code: p.code.formats ? (0, r._)`${p.code.formats}${(0, r.getProperty)(_)}` : void 0
          });
          i.fail$data(d(h));
        }
        function d(_) {
          return (0, r._)`${_}.compare(${u}, ${l}) ${o[y].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (i) => (i.addKeyword(e.formatLimitDefinition), i);
    e.default = a;
  }(Hn)), Hn;
}
var xa;
function Z_() {
  return xa || (xa = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = U_(), n = D_(), o = /* @__PURE__ */ te(), s = new o.Name("fullFormats"), a = new o.Name("fastFormats"), i = (u, l = { keywords: !0 }) => {
      if (Array.isArray(l))
        return c(u, l, r.fullFormats, s), u;
      const [y, g] = l.mode === "fast" ? [r.fastFormats, a] : [r.fullFormats, s], p = l.formats || r.formatNames;
      return c(u, p, y, g), l.keywords && (0, n.default)(u), u;
    };
    i.get = (u, l = "full") => {
      const g = (l === "fast" ? r.fastFormats : r.fullFormats)[u];
      if (!g)
        throw new Error(`Unknown format "${u}"`);
      return g;
    };
    function c(u, l, y, g) {
      var p, v;
      (p = (v = u.opts.code).formats) !== null && p !== void 0 || (v.formats = (0, o._)`require("ajv-formats/dist/formats").${g}`);
      for (const w of l)
        u.addFormat(w, y[w]);
    }
    e.exports = t = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
  }(Wr, Wr.exports)), Wr.exports;
}
var V_ = Z_();
const L_ = /* @__PURE__ */ Ya(V_);
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
  async *callToolStream(t, r = bn, n) {
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
            error: new Y(X.InvalidRequest, `Tool ${t.name} has an output schema but did not return structured content`)
          };
          return;
        }
        if (u.structuredContent)
          try {
            const l = i(u.structuredContent);
            if (!l.valid) {
              yield {
                type: "error",
                error: new Y(X.InvalidParams, `Structured content does not match the tool's output schema: ${l.errorMessage}`)
              };
              return;
            }
          } catch (l) {
            if (l instanceof Y) {
              yield { type: "error", error: l };
              return;
            }
            yield {
              type: "error",
              error: new Y(X.InvalidParams, `Failed to validate structured content: ${l instanceof Error ? l.message : String(l)}`)
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
function Br(e, t) {
  if (!(!e || t === null || typeof t != "object")) {
    if (e.type === "object" && e.properties && typeof e.properties == "object") {
      const r = t, n = e.properties;
      for (const o of Object.keys(n)) {
        const s = n[o];
        r[o] === void 0 && Object.prototype.hasOwnProperty.call(s, "default") && (r[o] = s.default), r[o] !== void 0 && Br(s, r[o]);
      }
    }
    if (Array.isArray(e.anyOf))
      for (const r of e.anyOf)
        typeof r != "boolean" && Br(r, t);
    if (Array.isArray(e.oneOf))
      for (const r of e.oneOf)
        typeof r != "boolean" && Br(r, t);
  }
}
function W_(e) {
  if (!e)
    return { supportsFormMode: !1, supportsUrlMode: !1 };
  const t = e.form !== void 0, r = e.url !== void 0;
  return { supportsFormMode: t || !t && !r, supportsUrlMode: r };
}
class G_ extends Cm {
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
    t.tools && ((n = (r = this._serverCapabilities) == null ? void 0 : r.tools) != null && n.listChanged) && this._setupListChangedHandler("tools", ac, t.tools, async () => (await this.listTools()).tools), t.prompts && ((s = (o = this._serverCapabilities) == null ? void 0 : o.prompts) != null && s.listChanged) && this._setupListChangedHandler("prompts", oc, t.prompts, async () => (await this.listPrompts()).prompts), t.resources && ((i = (a = this._serverCapabilities) == null ? void 0 : a.resources) != null && i.listChanged) && this._setupListChangedHandler("resources", tc, t.resources, async () => (await this.listResources()).resources);
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
    const n = Ri(t), o = n == null ? void 0 : n.method;
    if (!o)
      throw new Error("Schema is missing a method literal");
    let s;
    if (yn(o)) {
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
        var _, b;
        const y = at(dc, u);
        if (!y.success) {
          const h = y.error instanceof Error ? y.error.message : String(y.error);
          throw new Y(X.InvalidParams, `Invalid elicitation request: ${h}`);
        }
        const { params: g } = y.data;
        g.mode = g.mode ?? "form";
        const { supportsFormMode: p, supportsUrlMode: v } = W_(this._capabilities.elicitation);
        if (g.mode === "form" && !p)
          throw new Y(X.InvalidParams, "Client does not support form-mode elicitation requests");
        if (g.mode === "url" && !v)
          throw new Y(X.InvalidParams, "Client does not support URL-mode elicitation requests");
        const w = await Promise.resolve(r(u, l));
        if (g.task) {
          const h = at(er, w);
          if (!h.success) {
            const $ = h.error instanceof Error ? h.error.message : String(h.error);
            throw new Y(X.InvalidParams, `Invalid task creation result: ${$}`);
          }
          return h.data;
        }
        const f = at(fc, w);
        if (!f.success) {
          const h = f.error instanceof Error ? f.error.message : String(f.error);
          throw new Y(X.InvalidParams, `Invalid elicitation result: ${h}`);
        }
        const m = f.data, d = g.mode === "form" ? g.requestedSchema : void 0;
        if (g.mode === "form" && m.action === "accept" && m.content && d && (b = (_ = this._capabilities.elicitation) == null ? void 0 : _.form) != null && b.applyDefaults)
          try {
            Br(d, m.content);
          } catch {
          }
        return m;
      };
      return super.setRequestHandler(t, c);
    }
    if (a === "sampling/createMessage") {
      const c = async (u, l) => {
        const y = at(cc, u);
        if (!y.success) {
          const m = y.error instanceof Error ? y.error.message : String(y.error);
          throw new Y(X.InvalidParams, `Invalid sampling request: ${m}`);
        }
        const { params: g } = y.data, p = await Promise.resolve(r(u, l));
        if (g.task) {
          const m = at(er, p);
          if (!m.success) {
            const d = m.error instanceof Error ? m.error.message : String(m.error);
            throw new Y(X.InvalidParams, `Invalid task creation result: ${d}`);
          }
          return m.data;
        }
        const w = g.tools || g.toolChoice ? lc : uc, f = at(w, p);
        if (!f.success) {
          const m = f.error instanceof Error ? f.error.message : String(f.error);
          throw new Y(X.InvalidParams, `Invalid sampling result: ${m}`);
        }
        return f.data;
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
            protocolVersion: vn,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo
          }
        }, Ki, r);
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
    return this.request({ method: "ping" }, Ct, t);
  }
  async complete(t, r) {
    return this.request({ method: "completion/complete", params: t }, hc, r);
  }
  async setLoggingLevel(t, r) {
    return this.request({ method: "logging/setLevel", params: { level: t } }, Ct, r);
  }
  async getPrompt(t, r) {
    return this.request({ method: "prompts/get", params: t }, nc, r);
  }
  async listPrompts(t, r) {
    return this.request({ method: "prompts/list", params: t }, rc, r);
  }
  async listResources(t, r) {
    return this.request({ method: "resources/list", params: t }, Yi, r);
  }
  async listResourceTemplates(t, r) {
    return this.request({ method: "resources/templates/list", params: t }, Xi, r);
  }
  async readResource(t, r) {
    return this.request({ method: "resources/read", params: t }, ec, r);
  }
  async subscribeResource(t, r) {
    return this.request({ method: "resources/subscribe", params: t }, Ct, r);
  }
  async unsubscribeResource(t, r) {
    return this.request({ method: "resources/unsubscribe", params: t }, Ct, r);
  }
  /**
   * Calls a tool and waits for the result. Automatically validates structured output if the tool has an outputSchema.
   *
   * For task-based execution with streaming behavior, use client.experimental.tasks.callToolStream() instead.
   */
  async callTool(t, r = bn, n) {
    if (this.isToolTaskRequired(t.name))
      throw new Y(X.InvalidRequest, `Tool "${t.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`);
    const o = await this.request({ method: "tools/call", params: t }, r, n), s = this.getToolOutputValidator(t.name);
    if (s) {
      if (!o.structuredContent && !o.isError)
        throw new Y(X.InvalidRequest, `Tool ${t.name} has an output schema but did not return structured content`);
      if (o.structuredContent)
        try {
          const a = s(o.structuredContent);
          if (!a.valid)
            throw new Y(X.InvalidParams, `Structured content does not match the tool's output schema: ${a.errorMessage}`);
        } catch (a) {
          throw a instanceof Y ? a : new Y(X.InvalidParams, `Failed to validate structured content: ${a instanceof Error ? a.message : String(a)}`);
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
    const n = await this.request({ method: "tools/list", params: t }, Bo, r);
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
        const y = await o();
        c(null, y);
      } catch (y) {
        const g = y instanceof Error ? y : new Error(String(y));
        c(g, null);
      }
    }, l = () => {
      if (i) {
        const y = this._listChangedDebounceTimers.get(t);
        y && clearTimeout(y);
        const g = setTimeout(u, i);
        this._listChangedDebounceTimers.set(t, g);
      } else
        u();
    };
    this.setNotificationHandler(r, l);
  }
  async sendRootsListChanged() {
    return this.notification({ method: "notifications/roots/list_changed" });
  }
}
let es;
es = globalThis.crypto;
async function B_(e) {
  return (await es).getRandomValues(new Uint8Array(e));
}
async function Q_(e) {
  const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~", r = Math.pow(2, 8) - Math.pow(2, 8) % t.length;
  let n = "";
  for (; n.length < e; ) {
    const o = await B_(e - n.length);
    for (const s of o)
      s < r && (n += t[s % t.length]);
  }
  return n;
}
async function Y_(e) {
  return await Q_(e);
}
async function X_(e) {
  const t = await (await es).subtle.digest("SHA-256", new TextEncoder().encode(e));
  return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function eg(e) {
  if (e || (e = 43), e < 43 || e > 128)
    throw `Expected a length between 43 and 128. Received ${e}.`;
  const t = await Y_(e), r = await X_(t);
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
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), tg = ze({
  resource: E().url(),
  authorization_servers: L(Oe).optional(),
  jwks_uri: E().url().optional(),
  scopes_supported: L(E()).optional(),
  bearer_methods_supported: L(E()).optional(),
  resource_signing_alg_values_supported: L(E()).optional(),
  resource_name: E().optional(),
  resource_documentation: E().optional(),
  resource_policy_uri: E().url().optional(),
  resource_tos_uri: E().url().optional(),
  tls_client_certificate_bound_access_tokens: he().optional(),
  authorization_details_types_supported: L(E()).optional(),
  dpop_signing_alg_values_supported: L(E()).optional(),
  dpop_bound_access_tokens_required: he().optional()
}), bc = ze({
  issuer: E(),
  authorization_endpoint: Oe,
  token_endpoint: Oe,
  registration_endpoint: Oe.optional(),
  scopes_supported: L(E()).optional(),
  response_types_supported: L(E()),
  response_modes_supported: L(E()).optional(),
  grant_types_supported: L(E()).optional(),
  token_endpoint_auth_methods_supported: L(E()).optional(),
  token_endpoint_auth_signing_alg_values_supported: L(E()).optional(),
  service_documentation: Oe.optional(),
  revocation_endpoint: Oe.optional(),
  revocation_endpoint_auth_methods_supported: L(E()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: L(E()).optional(),
  introspection_endpoint: E().optional(),
  introspection_endpoint_auth_methods_supported: L(E()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: L(E()).optional(),
  code_challenge_methods_supported: L(E()).optional(),
  client_id_metadata_document_supported: he().optional()
}), rg = ze({
  issuer: E(),
  authorization_endpoint: Oe,
  token_endpoint: Oe,
  userinfo_endpoint: Oe.optional(),
  jwks_uri: Oe,
  registration_endpoint: Oe.optional(),
  scopes_supported: L(E()).optional(),
  response_types_supported: L(E()),
  response_modes_supported: L(E()).optional(),
  grant_types_supported: L(E()).optional(),
  acr_values_supported: L(E()).optional(),
  subject_types_supported: L(E()),
  id_token_signing_alg_values_supported: L(E()),
  id_token_encryption_alg_values_supported: L(E()).optional(),
  id_token_encryption_enc_values_supported: L(E()).optional(),
  userinfo_signing_alg_values_supported: L(E()).optional(),
  userinfo_encryption_alg_values_supported: L(E()).optional(),
  userinfo_encryption_enc_values_supported: L(E()).optional(),
  request_object_signing_alg_values_supported: L(E()).optional(),
  request_object_encryption_alg_values_supported: L(E()).optional(),
  request_object_encryption_enc_values_supported: L(E()).optional(),
  token_endpoint_auth_methods_supported: L(E()).optional(),
  token_endpoint_auth_signing_alg_values_supported: L(E()).optional(),
  display_values_supported: L(E()).optional(),
  claim_types_supported: L(E()).optional(),
  claims_supported: L(E()).optional(),
  service_documentation: E().optional(),
  claims_locales_supported: L(E()).optional(),
  ui_locales_supported: L(E()).optional(),
  claims_parameter_supported: he().optional(),
  request_parameter_supported: he().optional(),
  request_uri_parameter_supported: he().optional(),
  require_request_uri_registration: he().optional(),
  op_policy_uri: Oe.optional(),
  op_tos_uri: Oe.optional(),
  client_id_metadata_document_supported: he().optional()
}), ng = F({
  ...rg.shape,
  ...bc.pick({
    code_challenge_methods_supported: !0
  }).shape
}), og = F({
  access_token: E(),
  id_token: E().optional(),
  // Optional for OAuth 2.1, but necessary in OpenID Connect
  token_type: E(),
  expires_in: Bh().optional(),
  scope: E().optional(),
  refresh_token: E().optional()
}).strip(), sg = F({
  error: E(),
  error_description: E().optional(),
  error_uri: E().optional()
}), Ha = Oe.optional().or(G("").transform(() => {
})), ag = F({
  redirect_uris: L(Oe),
  token_endpoint_auth_method: E().optional(),
  grant_types: L(E()).optional(),
  response_types: L(E()).optional(),
  client_name: E().optional(),
  client_uri: Oe.optional(),
  logo_uri: Ha,
  scope: E().optional(),
  contacts: L(E()).optional(),
  tos_uri: Ha,
  policy_uri: E().optional(),
  jwks_uri: Oe.optional(),
  jwks: Sh().optional(),
  software_id: E().optional(),
  software_version: E().optional(),
  software_statement: E().optional()
}).strip(), ig = F({
  client_id: E(),
  client_secret: E().optional(),
  client_id_issued_at: le().optional(),
  client_secret_expires_at: le().optional()
}).strip(), cg = ag.merge(ig);
F({
  error: E(),
  error_description: E().optional()
}).strip();
F({
  token: E(),
  token_type_hint: E().optional()
}).strip();
function ug(e) {
  const t = typeof e == "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function lg({ requestedResource: e, configuredResource: t }) {
  const r = typeof e == "string" ? new URL(e) : new URL(e.href), n = typeof t == "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== n.origin || r.pathname.length < n.pathname.length)
    return !1;
  const o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", s = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
  return o.startsWith(s);
}
class Te extends Error {
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
class no extends Te {
}
no.errorCode = "invalid_request";
class an extends Te {
}
an.errorCode = "invalid_client";
class cn extends Te {
}
cn.errorCode = "invalid_grant";
class un extends Te {
}
un.errorCode = "unauthorized_client";
class oo extends Te {
}
oo.errorCode = "unsupported_grant_type";
class so extends Te {
}
so.errorCode = "invalid_scope";
class ao extends Te {
}
ao.errorCode = "access_denied";
class At extends Te {
}
At.errorCode = "server_error";
class io extends Te {
}
io.errorCode = "temporarily_unavailable";
class co extends Te {
}
co.errorCode = "unsupported_response_type";
class uo extends Te {
}
uo.errorCode = "unsupported_token_type";
class lo extends Te {
}
lo.errorCode = "invalid_token";
class fo extends Te {
}
fo.errorCode = "method_not_allowed";
class ho extends Te {
}
ho.errorCode = "too_many_requests";
class ln extends Te {
}
ln.errorCode = "invalid_client_metadata";
class po extends Te {
}
po.errorCode = "insufficient_scope";
class mo extends Te {
}
mo.errorCode = "invalid_target";
const dg = {
  [no.errorCode]: no,
  [an.errorCode]: an,
  [cn.errorCode]: cn,
  [un.errorCode]: un,
  [oo.errorCode]: oo,
  [so.errorCode]: so,
  [ao.errorCode]: ao,
  [At.errorCode]: At,
  [io.errorCode]: io,
  [co.errorCode]: co,
  [uo.errorCode]: uo,
  [lo.errorCode]: lo,
  [fo.errorCode]: fo,
  [ho.errorCode]: ho,
  [ln.errorCode]: ln,
  [po.errorCode]: po,
  [mo.errorCode]: mo
};
class Xe extends Error {
  constructor(t) {
    super(t ?? "Unauthorized");
  }
}
function fg(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
const Kn = "code", Jn = "S256";
function hg(e, t) {
  const r = e.client_secret !== void 0;
  return t.length === 0 ? r ? "client_secret_post" : "none" : "token_endpoint_auth_method" in e && e.token_endpoint_auth_method && fg(e.token_endpoint_auth_method) && t.includes(e.token_endpoint_auth_method) ? e.token_endpoint_auth_method : r && t.includes("client_secret_basic") ? "client_secret_basic" : r && t.includes("client_secret_post") ? "client_secret_post" : t.includes("none") ? "none" : r ? "client_secret_post" : "none";
}
function pg(e, t, r, n) {
  const { client_id: o, client_secret: s } = t;
  switch (e) {
    case "client_secret_basic":
      mg(o, s, r);
      return;
    case "client_secret_post":
      _g(o, s, n);
      return;
    case "none":
      gg(o, n);
      return;
    default:
      throw new Error(`Unsupported client authentication method: ${e}`);
  }
}
function mg(e, t, r) {
  if (!t)
    throw new Error("client_secret_basic authentication requires a client_secret");
  const n = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${n}`);
}
function _g(e, t, r) {
  r.set("client_id", e), t && r.set("client_secret", t);
}
function gg(e, t) {
  t.set("client_id", e);
}
async function Sc(e) {
  const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
  try {
    const n = sg.parse(JSON.parse(r)), { error: o, error_description: s, error_uri: a } = n, i = dg[o] || At;
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
    if (o instanceof an || o instanceof un)
      return await ((r = e.invalidateCredentials) == null ? void 0 : r.call(e, "all")), await Wn(e, t);
    if (o instanceof cn)
      return await ((n = e.invalidateCredentials) == null ? void 0 : n.call(e, "tokens")), await Wn(e, t);
    throw o;
  }
}
async function Wn(e, { serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: o, fetchFn: s }) {
  var d, _, b, h, $;
  const a = await ((d = e.discoveryState) == null ? void 0 : d.call(e));
  let i, c, u, l = o;
  if (!l && (a != null && a.resourceMetadataUrl) && (l = new URL(a.resourceMetadataUrl)), a != null && a.authorizationServerUrl) {
    if (c = a.authorizationServerUrl, i = a.resourceMetadata, u = a.authorizationServerMetadata ?? await Ec(c, { fetchFn: s }), !i)
      try {
        i = await kc(t, { resourceMetadataUrl: l }, s);
      } catch {
      }
    (u !== a.authorizationServerMetadata || i !== a.resourceMetadata) && await ((_ = e.saveDiscoveryState) == null ? void 0 : _.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: u
    }));
  } else {
    const k = await kg(t, { resourceMetadataUrl: l, fetchFn: s });
    c = k.authorizationServerUrl, u = k.authorizationServerMetadata, i = k.resourceMetadata, await ((b = e.saveDiscoveryState) == null ? void 0 : b.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: u
    }));
  }
  const y = await vg(t, e, i);
  let g = await Promise.resolve(e.clientInformation());
  if (!g) {
    if (r !== void 0)
      throw new Error("Existing OAuth client information is required when exchanging an authorization code");
    const k = (u == null ? void 0 : u.client_id_metadata_document_supported) === !0, C = e.clientMetadataUrl;
    if (C && !yg(C))
      throw new ln(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${C}`);
    if (k && C)
      g = {
        client_id: C
      }, await ((h = e.saveClientInformation) == null ? void 0 : h.call(e, g));
    else {
      if (!e.saveClientInformation)
        throw new Error("OAuth client information must be saveable for dynamic registration");
      const Z = await Ig(c, {
        metadata: u,
        clientMetadata: e.clientMetadata,
        fetchFn: s
      });
      await e.saveClientInformation(Z), g = Z;
    }
  }
  const p = !e.redirectUrl;
  if (r !== void 0 || p) {
    const k = await Rg(e, c, {
      metadata: u,
      resource: y,
      authorizationCode: r,
      fetchFn: s
    });
    return await e.saveTokens(k), "AUTHORIZED";
  }
  const v = await e.tokens();
  if (v != null && v.refresh_token)
    try {
      const k = await Pg(c, {
        metadata: u,
        clientInformation: g,
        refreshToken: v.refresh_token,
        resource: y,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: s
      });
      return await e.saveTokens(k), "AUTHORIZED";
    } catch (k) {
      if (!(!(k instanceof Te) || k instanceof At)) throw k;
    }
  const w = e.state ? await e.state() : void 0, { authorizationUrl: f, codeVerifier: m } = await Eg(c, {
    metadata: u,
    clientInformation: g,
    state: w,
    redirectUrl: e.redirectUrl,
    scope: n || (($ = i == null ? void 0 : i.scopes_supported) == null ? void 0 : $.join(" ")) || e.clientMetadata.scope,
    resource: y
  });
  return await e.saveCodeVerifier(m), await e.redirectToAuthorization(f), "REDIRECT";
}
function yg(e) {
  if (!e)
    return !1;
  try {
    const t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function vg(e, t, r) {
  const n = ug(e);
  if (t.validateResourceURL)
    return await t.validateResourceURL(n, r == null ? void 0 : r.resource);
  if (r) {
    if (!lg({ requestedResource: n, configuredResource: r.resource }))
      throw new Error(`Protected resource ${r.resource} does not match expected ${n} (or origin)`);
    return new URL(r.resource);
  }
}
function dn(e) {
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
async function kc(e, t, r = fetch) {
  var o, s;
  const n = await bg(e, "oauth-protected-resource", r, {
    protocolVersion: t == null ? void 0 : t.protocolVersion,
    metadataUrl: t == null ? void 0 : t.resourceMetadataUrl
  });
  if (!n || n.status === 404)
    throw await ((o = n == null ? void 0 : n.body) == null ? void 0 : o.cancel()), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!n.ok)
    throw await ((s = n.body) == null ? void 0 : s.cancel()), new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
  return tg.parse(await n.json());
}
async function ts(e, t, r = fetch) {
  try {
    return await r(e, { headers: t });
  } catch (n) {
    if (n instanceof TypeError)
      return t ? ts(e, void 0, r) : void 0;
    throw n;
  }
}
function wg(e, t = "", r = {}) {
  return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Ka(e, t, r = fetch) {
  return await ts(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function $g(e, t) {
  return !e || e.status >= 400 && e.status < 500 && t !== "/";
}
async function bg(e, t, r, n) {
  const o = new URL(e), s = (n == null ? void 0 : n.protocolVersion) ?? vn;
  let a;
  if (n != null && n.metadataUrl)
    a = new URL(n.metadataUrl);
  else {
    const c = wg(t, o.pathname);
    a = new URL(c, (n == null ? void 0 : n.metadataServerUrl) ?? o), a.search = o.search;
  }
  let i = await Ka(a, s, r);
  if (!(n != null && n.metadataUrl) && $g(i, o.pathname)) {
    const c = new URL(`/.well-known/${t}`, o);
    i = await Ka(c, s, r);
  }
  return i;
}
function Sg(e) {
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
async function Ec(e, { fetchFn: t = fetch, protocolVersion: r = vn } = {}) {
  var s;
  const n = {
    "MCP-Protocol-Version": r,
    Accept: "application/json"
  }, o = Sg(e);
  for (const { url: a, type: i } of o) {
    const c = await ts(a, n, t);
    if (c) {
      if (!c.ok) {
        if (await ((s = c.body) == null ? void 0 : s.cancel()), c.status >= 400 && c.status < 500)
          continue;
        throw new Error(`HTTP ${c.status} trying to load ${i === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${a}`);
      }
      return i === "oauth" ? bc.parse(await c.json()) : ng.parse(await c.json());
    }
  }
}
async function kg(e, t) {
  let r, n;
  try {
    r = await kc(e, { resourceMetadataUrl: t == null ? void 0 : t.resourceMetadataUrl }, t == null ? void 0 : t.fetchFn), r.authorization_servers && r.authorization_servers.length > 0 && (n = r.authorization_servers[0]);
  } catch {
  }
  n || (n = String(new URL("/", e)));
  const o = await Ec(n, { fetchFn: t == null ? void 0 : t.fetchFn });
  return {
    authorizationServerUrl: n,
    authorizationServerMetadata: o,
    resourceMetadata: r
  };
}
async function Eg(e, { metadata: t, clientInformation: r, redirectUrl: n, scope: o, state: s, resource: a }) {
  let i;
  if (t) {
    if (i = new URL(t.authorization_endpoint), !t.response_types_supported.includes(Kn))
      throw new Error(`Incompatible auth server: does not support response type ${Kn}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(Jn))
      throw new Error(`Incompatible auth server: does not support code challenge method ${Jn}`);
  } else
    i = new URL("/authorize", e);
  const c = await eg(), u = c.code_verifier, l = c.code_challenge;
  return i.searchParams.set("response_type", Kn), i.searchParams.set("client_id", r.client_id), i.searchParams.set("code_challenge", l), i.searchParams.set("code_challenge_method", Jn), i.searchParams.set("redirect_uri", String(n)), s && i.searchParams.set("state", s), o && i.searchParams.set("scope", o), o != null && o.includes("offline_access") && i.searchParams.append("prompt", "consent"), a && i.searchParams.set("resource", a.href), { authorizationUrl: i, codeVerifier: u };
}
function Tg(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r)
  });
}
async function Tc(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: a }) {
  const i = t != null && t.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), c = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  });
  if (s && r.set("resource", s.href), o)
    await o(c, r, i, t);
  else if (n) {
    const l = (t == null ? void 0 : t.token_endpoint_auth_methods_supported) ?? [], y = hg(n, l);
    pg(y, n, c, r);
  }
  const u = await (a ?? fetch)(i, {
    method: "POST",
    headers: c,
    body: r
  });
  if (!u.ok)
    throw await Sc(u);
  return og.parse(await u.json());
}
async function Pg(e, { metadata: t, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: a }) {
  const i = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: n
  }), c = await Tc(e, {
    metadata: t,
    tokenRequestParams: i,
    clientInformation: r,
    addClientAuthentication: s,
    resource: o,
    fetchFn: a
  });
  return { refresh_token: n, ...c };
}
async function Rg(e, t, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
  const a = e.clientMetadata.scope;
  let i;
  if (e.prepareTokenRequest && (i = await e.prepareTokenRequest(a)), !i) {
    if (!o)
      throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl)
      throw new Error("redirectUrl is required for authorization_code flow");
    const u = await e.codeVerifier();
    i = Tg(o, u, e.redirectUrl);
  }
  const c = await e.clientInformation();
  return Tc(t, {
    metadata: r,
    tokenRequestParams: i,
    clientInformation: c ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: n,
    fetchFn: s
  });
}
async function Ig(e, { metadata: t, clientMetadata: r, fetchFn: n }) {
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
    throw await Sc(s);
  return cg.parse(await s.json());
}
const Pc = (...e) => (t) => e.reduce((r, n) => n(r), t), Cg = (e) => (t) => (r, n) => e(t, r, n);
class Ja extends Error {
  constructor(t, r) {
    super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function Bn(e) {
}
function Rc(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = Bn, onError: r = Bn, onRetry: n = Bn, onComment: o } = e;
  let s = "", a = !0, i, c = "", u = "";
  function l(w) {
    const f = a ? w.replace(/^\xEF\xBB\xBF/, "") : w, [m, d] = Og(`${s}${f}`);
    for (const _ of m)
      y(_);
    s = d, a = !1;
  }
  function y(w) {
    if (w === "") {
      p();
      return;
    }
    if (w.startsWith(":")) {
      o && o(w.slice(w.startsWith(": ") ? 2 : 1));
      return;
    }
    const f = w.indexOf(":");
    if (f !== -1) {
      const m = w.slice(0, f), d = w[f + 1] === " " ? 2 : 1, _ = w.slice(f + d);
      g(m, _, w);
      return;
    }
    g(w, "", w);
  }
  function g(w, f, m) {
    switch (w) {
      case "event":
        u = f;
        break;
      case "data":
        c = `${c}${f}
`;
        break;
      case "id":
        i = f.includes("\0") ? void 0 : f;
        break;
      case "retry":
        /^\d+$/.test(f) ? n(parseInt(f, 10)) : r(
          new Ja(`Invalid \`retry\` value: "${f}"`, {
            type: "invalid-retry",
            value: f,
            line: m
          })
        );
        break;
      default:
        r(
          new Ja(
            `Unknown field "${w.length > 20 ? `${w.slice(0, 20)}…` : w}"`,
            { type: "unknown-field", field: w, value: f, line: m }
          )
        );
        break;
    }
  }
  function p() {
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
    s && w.consume && y(s), a = !0, i = void 0, c = "", u = "", s = "";
  }
  return { feed: l, reset: v };
}
function Og(e) {
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
class Wa extends Event {
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
    return n(Ga(this), r);
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
    return t(Ga(this), r);
  }
}
function zg(e) {
  const t = globalThis.DOMException;
  return typeof t == "function" ? new t(e, "SyntaxError") : new SyntaxError(e);
}
function _o(e) {
  return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(_o).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${_o(e.cause)}` : e.message : `${e}`;
}
function Ga(e) {
  return {
    type: e.type,
    message: e.message,
    code: e.code,
    defaultPrevented: e.defaultPrevented,
    cancelable: e.cancelable,
    timeStamp: e.timeStamp
  };
}
var Ic = (e) => {
  throw TypeError(e);
}, rs = (e, t, r) => t.has(e) || Ic("Cannot " + r), ne = (e, t, r) => (rs(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ke = (e, t, r) => t.has(e) ? Ic("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ge = (e, t, r, n) => (rs(e, t, "write to private field"), t.set(e, r), r), ot = (e, t, r) => (rs(e, t, "access private method"), r), Ve, yt, Et, Qr, fn, Bt, Ot, Qt, it, Tt, Nt, Pt, Wt, Ye, go, yo, vo, Ba, wo, $o, Gt, bo, So;
class Yr extends EventTarget {
  constructor(t, r) {
    var n, o;
    super(), ke(this, Ye), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, ke(this, Ve), ke(this, yt), ke(this, Et), ke(this, Qr), ke(this, fn), ke(this, Bt), ke(this, Ot), ke(this, Qt, null), ke(this, it), ke(this, Tt), ke(this, Nt, null), ke(this, Pt, null), ke(this, Wt, null), ke(this, yo, async (s) => {
      var a;
      ne(this, Tt).reset();
      const { body: i, redirected: c, status: u, headers: l } = s;
      if (u === 204) {
        ot(this, Ye, Gt).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (c ? ge(this, Et, new URL(s.url)) : ge(this, Et, void 0), u !== 200) {
        ot(this, Ye, Gt).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(l.get("content-type") || "").startsWith("text/event-stream")) {
        ot(this, Ye, Gt).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if (ne(this, Ve) === this.CLOSED)
        return;
      ge(this, Ve, this.OPEN);
      const y = new Event("open");
      if ((a = ne(this, Wt)) == null || a.call(this, y), this.dispatchEvent(y), typeof i != "object" || !i || !("getReader" in i)) {
        ot(this, Ye, Gt).call(this, "Invalid response body, expected a web ReadableStream", u), this.close();
        return;
      }
      const g = new TextDecoder(), p = i.getReader();
      let v = !0;
      do {
        const { done: w, value: f } = await p.read();
        f && ne(this, Tt).feed(g.decode(f, { stream: !w })), w && (v = !1, ne(this, Tt).reset(), ot(this, Ye, bo).call(this));
      } while (v);
    }), ke(this, vo, (s) => {
      ge(this, it, void 0), !(s.name === "AbortError" || s.type === "aborted") && ot(this, Ye, bo).call(this, _o(s));
    }), ke(this, wo, (s) => {
      typeof s.id == "string" && ge(this, Qt, s.id);
      const a = new MessageEvent(s.event || "message", {
        data: s.data,
        origin: ne(this, Et) ? ne(this, Et).origin : ne(this, yt).origin,
        lastEventId: s.id || ""
      });
      ne(this, Pt) && (!s.event || s.event === "message") && ne(this, Pt).call(this, a), this.dispatchEvent(a);
    }), ke(this, $o, (s) => {
      ge(this, Bt, s);
    }), ke(this, So, () => {
      ge(this, Ot, void 0), ne(this, Ve) === this.CONNECTING && ot(this, Ye, go).call(this);
    });
    try {
      if (t instanceof URL)
        ge(this, yt, t);
      else if (typeof t == "string")
        ge(this, yt, new URL(t, Ng()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw zg("An invalid or illegal string was specified");
    }
    ge(this, Tt, Rc({
      onEvent: ne(this, wo),
      onRetry: ne(this, $o)
    })), ge(this, Ve, this.CONNECTING), ge(this, Bt, 3e3), ge(this, fn, (n = r == null ? void 0 : r.fetch) != null ? n : globalThis.fetch), ge(this, Qr, (o = r == null ? void 0 : r.withCredentials) != null ? o : !1), ot(this, Ye, go).call(this);
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
    return ne(this, Ve);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return ne(this, yt).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return ne(this, Qr);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return ne(this, Nt);
  }
  set onerror(t) {
    ge(this, Nt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return ne(this, Pt);
  }
  set onmessage(t) {
    ge(this, Pt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return ne(this, Wt);
  }
  set onopen(t) {
    ge(this, Wt, t);
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
    ne(this, Ot) && clearTimeout(ne(this, Ot)), ne(this, Ve) !== this.CLOSED && (ne(this, it) && ne(this, it).abort(), ge(this, Ve, this.CLOSED), ge(this, it, void 0));
  }
}
Ve = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
go = function() {
  ge(this, Ve, this.CONNECTING), ge(this, it, new AbortController()), ne(this, fn)(ne(this, yt), ot(this, Ye, Ba).call(this)).then(ne(this, yo)).catch(ne(this, vo));
}, yo = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
Ba = function() {
  var e;
  const t = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...ne(this, Qt) ? { "Last-Event-ID": ne(this, Qt) } : void 0 },
    cache: "no-store",
    signal: (e = ne(this, it)) == null ? void 0 : e.signal
  };
  return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, wo = /* @__PURE__ */ new WeakMap(), $o = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
Gt = function(e, t) {
  var r;
  ne(this, Ve) !== this.CLOSED && ge(this, Ve, this.CLOSED);
  const n = new Wa("error", { code: t, message: e });
  (r = ne(this, Nt)) == null || r.call(this, n), this.dispatchEvent(n);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
bo = function(e, t) {
  var r;
  if (ne(this, Ve) === this.CLOSED)
    return;
  ge(this, Ve, this.CONNECTING);
  const n = new Wa("error", { code: t, message: e });
  (r = ne(this, Nt)) == null || r.call(this, n), this.dispatchEvent(n), ge(this, Ot, setTimeout(ne(this, So), ne(this, Bt)));
}, So = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
Yr.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
Yr.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
Yr.CLOSED = 2;
function Ng() {
  const e = "document" in globalThis ? globalThis.document : void 0;
  return e && typeof e == "object" && "baseURI" in e && typeof e.baseURI == "string" ? e.baseURI : void 0;
}
function hn(e) {
  return e ? e instanceof Headers ? Object.fromEntries(e.entries()) : Array.isArray(e) ? Object.fromEntries(e) : { ...e } : {};
}
function Cc(e = fetch, t) {
  return t ? async (r, n) => {
    const o = {
      ...t,
      ...n,
      // Headers need special handling - merge instead of replace
      headers: n != null && n.headers ? { ...hn(t.headers), ...hn(n.headers) } : t.headers
    };
    return e(r, o);
  } : e;
}
class jg extends Error {
  constructor(t, r, n) {
    super(`SSE error: ${r}`), this.code = t, this.event = n;
  }
}
class Mg {
  constructor(t, r) {
    this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = r == null ? void 0 : r.eventSourceInit, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = Cc(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit);
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
    const r = hn((n = this._requestInit) == null ? void 0 : n.headers);
    return new Headers({
      ...t,
      ...r
    });
  }
  _startOrAuth() {
    var r;
    const t = ((r = this == null ? void 0 : this._eventSourceInit) == null ? void 0 : r.fetch) ?? this._fetch ?? fetch;
    return new Promise((n, o) => {
      this._eventSource = new Yr(this._url.href, {
        ...this._eventSourceInit,
        fetch: async (s, a) => {
          const i = await this._commonHeaders();
          i.set("Accept", "text/event-stream");
          const c = await t(s, {
            ...a,
            headers: i
          });
          if (c.status === 401 && c.headers.has("www-authenticate")) {
            const { resourceMetadataUrl: u, scope: l } = dn(c);
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
        const a = new jg(s.code, s.message, s);
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
          i = Gr.parse(JSON.parse(a.data));
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
          const { resourceMetadataUrl: u, scope: l } = dn(i);
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
class qg extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let o;
    super({
      start(s) {
        o = Rc({
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
const Ag = {
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
class Ug {
  constructor(t, r) {
    this._hasCompletedAuthFlow = !1, this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = Cc(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit), this._sessionId = r == null ? void 0 : r.sessionId, this._reconnectionOptions = (r == null ? void 0 : r.reconnectionOptions) ?? Ag;
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
    const r = hn((n = this._requestInit) == null ? void 0 : n.headers);
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
      var l, y, g, p;
      try {
        const v = t.pipeThrough(new TextDecoderStream()).pipeThrough(new qg({
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
              const _ = Gr.parse(JSON.parse(m.data));
              Jt(_) && (c = !0, s !== void 0 && (_.id = s)), (l = this.onmessage) == null || l.call(this, _);
            } catch (_) {
              (y = this.onerror) == null || y.call(this, _);
            }
        }
        (n || i) && !c && this._abortController && !this._abortController.signal.aborted && this._scheduleReconnection({
          resumptionToken: a,
          onresumptiontoken: o,
          replayMessageId: s
        }, 0);
      } catch (v) {
        if ((g = this.onerror) == null || g.call(this, new Error(`SSE stream disconnected: ${v}`)), (n || i) && !c && this._abortController && !this._abortController.signal.aborted)
          try {
            this._scheduleReconnection({
              resumptionToken: a,
              onresumptiontoken: o,
              replayMessageId: s
            }, 0);
          } catch (m) {
            (p = this.onerror) == null || p.call(this, new Error(`Failed to reconnect: ${m instanceof Error ? m.message : String(m)}`));
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
        this._startOrAuthSse({ resumptionToken: u, replayMessageId: ro(t) ? t.id : void 0 }).catch((d) => {
          var _;
          return (_ = this.onerror) == null ? void 0 : _.call(this, d);
        });
        return;
      }
      const y = await this._commonHeaders();
      y.set("content-type", "application/json"), y.set("accept", "application/json, text/event-stream");
      const g = {
        ...this._requestInit,
        method: "POST",
        headers: y,
        body: JSON.stringify(t),
        signal: (n = this._abortController) == null ? void 0 : n.signal
      }, p = await (this._fetch ?? fetch)(this._url, g), v = p.headers.get("mcp-session-id");
      if (v && (this._sessionId = v), !p.ok) {
        const d = await p.text().catch(() => null);
        if (p.status === 401 && this._authProvider) {
          if (this._hasCompletedAuthFlow)
            throw new kt(401, "Server returned 401 after successful authentication");
          const { resourceMetadataUrl: _, scope: b } = dn(p);
          if (this._resourceMetadataUrl = _, this._scope = b, await vt(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED")
            throw new Xe();
          return this._hasCompletedAuthFlow = !0, this.send(t);
        }
        if (p.status === 403 && this._authProvider) {
          const { resourceMetadataUrl: _, scope: b, error: h } = dn(p);
          if (h === "insufficient_scope") {
            const $ = p.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === $)
              throw new kt(403, "Server returned 403 after trying upscoping");
            if (b && (this._scope = b), _ && (this._resourceMetadataUrl = _), this._lastUpscopingHeader = $ ?? void 0, await vt(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            }) !== "AUTHORIZED")
              throw new Xe();
            return this.send(t);
          }
        }
        throw new kt(p.status, `Error POSTing to endpoint: ${d}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, p.status === 202) {
        await ((o = p.body) == null ? void 0 : o.cancel()), hp(t) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((d) => {
          var _;
          return (_ = this.onerror) == null ? void 0 : _.call(this, d);
        });
        return;
      }
      const f = (Array.isArray(t) ? t : [t]).filter((d) => "method" in d && "id" in d && d.id !== void 0).length > 0, m = p.headers.get("content-type");
      if (f)
        if (m != null && m.includes("text/event-stream"))
          this._handleSseStream(p.body, { onresumptiontoken: l }, !1);
        else if (m != null && m.includes("application/json")) {
          const d = await p.json(), _ = Array.isArray(d) ? d.map((b) => Gr.parse(b)) : [Gr.parse(d)];
          for (const b of _)
            (s = this.onmessage) == null || s.call(this, b);
        } else
          throw await ((a = p.body) == null ? void 0 : a.cancel()), new kt(-1, `Unexpected content type: ${m}`);
      else
        await ((i = p.body) == null ? void 0 : i.cancel());
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
async function Dg(e, t, r, n, o, s) {
  return r.debug(`Connecting to server at: ${e}`), await Lg(e, t, r, n, o);
}
async function Zg(e, t) {
  t.debug("Disconnecting from MCP server..."), e.client.onerror = void 0, await e.transport.close(), t.debug("Disconnected from MCP server");
}
async function Qa(e, t, r) {
  const n = new Mg(t, { fetch: Pc(r)(fetch) });
  try {
    await e.connect(n);
  } catch (o) {
    throw await n.close().catch(() => {
    }), o;
  }
  return { client: e, transport: n, transportType: "sse" };
}
async function Vg(e, t, r) {
  const n = new Ug(t, {
    fetch: Pc(r)(fetch)
  });
  return await e.connect(n), { client: e, transport: n, transportType: "streamable-http" };
}
async function Lg(e, t, r, n, o) {
  const s = "Please verify the server URL is correct.", a = "Please verify the server URL is correct and the attached authentication headers are supported by the server.", i = "Could not connect to server using HTTP+SSE transport.", c = "Could not connect to server with any available transport.", u = new G_({
    name: "Mendix Agent Editor",
    version: t
  });
  u.onerror = (p) => {
    r.error("Client error:", p);
  };
  const l = Cg(async (p, v, w) => {
    const f = new Headers(w == null ? void 0 : w.headers);
    return o.forEach(([m, d]) => {
      f.set(m, d);
    }), p(v, { ...w, headers: f });
  }), y = new URL(e), g = (p) => {
    let v = p === "SSE" ? i : c;
    return o.length > 0 ? v += ` ${a}` : v += ` ${s}`, v;
  };
  if (n === "v2024_11_05") {
    r.debug("Protocol version 2024-11-05 specified, connecting directly with HTTP+SSE transport...");
    try {
      const p = await Qa(u, y, l);
      return r.debug("Successfully connected using HTTP+SSE transport."), p;
    } catch (p) {
      throw r.error(`Failed to connect using HTTP+SSE transport: ${p}`), new Error(g("SSE"));
    }
  }
  r.debug("Trying Streamable HTTP transport...");
  try {
    const p = await Vg(u, y, l);
    return r.debug("Successfully connected using Streamable HTTP transport."), p;
  } catch (p) {
    r.debug(`StreamableHttp transport connection failed: ${p}`), r.debug("Falling back to HTTP+SSE transport...");
    try {
      const v = await Qa(u, y, l);
      return r.debug("Successfully connected using HTTP+SSE transport."), v;
    } catch (v) {
      throw r.error(
        `Failed to connect with either transport method:
1. Streamable HTTP error: ${p}
2. SSE error: ${v}`
      ), new Error(g("HTTP+SSE"));
    }
  }
}
async function Fg(e, t) {
  try {
    const r = {
      method: "tools/list",
      params: {}
    }, n = await e.request(r, Bo);
    t.debug(`Found ${n.tools.length} tools`);
    for (const o of n.tools)
      t.debug(`  - ${o.name}: ${o.description}`);
    return n.tools;
  } catch (r) {
    return t.error(`Tools not supported by this server: ${r}`), [];
  }
}
const xg = async (e, t, r) => {
  const n = eu(e), o = await tu(e, t.endpoint);
  if (!o) {
    n.error(
      `MCP endpoint constant ${t.endpoint} does not have an accessible runtime value or default value.`
    );
    return;
  }
  const s = await Dg(
    o,
    t.version ?? "",
    n,
    t.protocolVersion,
    r
  ), a = await Fg(s.client, n);
  return await Zg(s, n), a;
}, Hg = async (e, t) => {
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
}, Ht = async (e, t, r) => {
  switch (e) {
    case "endpoint": {
      const n = await Wc(r, t.endpoint);
      if (n === Vt.Required)
        return "Endpoint is required.";
      if (n === Vt.NotFound)
        return "Selected constant not found. It might have been deleted or renamed. Please update the constant selection.";
      if (n === Vt.InvalidType)
        return "Selected constant must be of type string.";
      if (n === Vt.PrivateValue)
        return "Selected constant has a private runtime value, which is currently not supported. Use a public runtime value or remove the constant from the local runtime configuration.";
      if (n === Vt.EmptyValue)
        return "No value was found for the selected constant. Please set it as part of your local runtime configuration, or set a default value in the constant document.";
      break;
    }
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
        const n = await Zc(
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
        if (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== Vc.HttpHeader)
          return "Authentication microflow must return a list of System.HttpHeader objects.";
      }
      break;
    }
    default:
      return !0;
  }
  return !0;
}, Qn = (e, t, r) => ({ ...e, [t]: r }), Kg = async (e, t, r) => {
  var a;
  let n;
  const o = [
    {
      title: "Getting exposed tools",
      description: "Getting exposed tools",
      action: async () => {
        try {
          return n = await xg(e, t, r), !0;
        } catch (i) {
          return i instanceof Error ? i.message : "Failed to load tools.";
        }
      }
    }
  ], s = await e.ui.dialogs.showProgressDialog("Getting exposed tools", o);
  switch (s.result) {
    case "Success":
      return n;
    case "UserCancelled":
      return;
    case "Failure": {
      const i = "Failed to load tools.", c = `Check your connection and make sure your MCP server is available, then try again.
` + (((a = s.failedStep) == null ? void 0 : a.error) ?? "");
      await e.ui.messageBoxes.show("error", i, c);
      return;
    }
  }
}, Jg = async (e, t) => {
  const r = await e.ui.elementSelectors.selectDocument({
    query: { elementType: "Microflows$Microflow" },
    allowNone: !0
  });
  return r.status === "ok" ? {
    ...t,
    authenticationMicroflow: r.selected.module + "." + r.selected.name
  } : r.status === "none" ? { ...t, authenticationMicroflow: "" } : null;
}, Wg = async (e, t, r) => {
  const n = await e.ui.dialogs.showModal(
    {
      title: "Edit headers",
      contentSize: { height: 500, width: 700 }
    },
    {
      componentName: t,
      uiEntrypoint: "mcpAuthenticationHeadersEdit",
      queryParams: {
        headers: encodeURIComponent(JSON.stringify(r))
      }
    }
  );
  if (n)
    return n;
}, Gg = {
  isValidEndpoint: !0,
  isValidProtocolVersion: !0,
  isValidConnectionTimeout: !0,
  isValidAuthenticationMicroflow: !0
}, Bg = {
  endpoint: "isValidEndpoint",
  protocolVersion: "isValidProtocolVersion",
  connectionTimeoutSeconds: "isValidConnectionTimeout",
  authenticationMicroflow: "isValidAuthenticationMicroflow"
}, Qg = Lc.map(
  (e) => ({
    key: e,
    caption: e
  })
), Yg = zc.div`
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    font-size: 10px;
`, Xg = ({
  loadedConsumedMCPService: e,
  studioPro: t,
  updateStudioProDocument: r
}) => {
  var Ee;
  const [n, o] = Ze.useState(e), [s, a] = Ze.useState(Gg), [i, c] = Ze.useState([]), [u, l] = Ze.useState(!1), [y, g] = Ze.useState(null), [p, v] = Ze.useState(
    ((Ee = e.connectionTimeoutSeconds) == null ? void 0 : Ee.toString()) ?? ""
  ), [w, f] = Ze.useState([]), m = Ze.useRef(null);
  Ze.useEffect(() => () => {
    m.current && clearTimeout(m.current);
  }, []), Ze.useEffect(() => {
    d("endpoint", n), d("authenticationMicroflow", n);
  }, []);
  const d = async (x, ce) => {
    const U = Bg[x];
    if (U) {
      const R = await Ht(
        x,
        ce,
        t
      );
      a((M) => ({ ...M, [U]: R }));
    }
  };
  Ze.useEffect(() => {
    (async () => {
      const ce = {
        isValidEndpoint: await Ht("endpoint", n, t),
        isValidProtocolVersion: await Ht(
          "protocolVersion",
          n,
          t
        ),
        isValidConnectionTimeout: await Ht(
          "connectionTimeoutSeconds",
          n,
          t
        ),
        isValidAuthenticationMicroflow: await Ht(
          "authenticationMicroflow",
          n,
          t
        )
      };
      a(ce);
    })();
  }, []);
  const _ = 300, b = (x, ce) => {
    m.current && clearTimeout(m.current), m.current = setTimeout(async () => {
      await r(x), await d(ce, x);
    }, _);
  }, h = async () => {
    const x = await Hg(t, n);
    x && (o(x), r(x), d("endpoint", x), c([]), l(!1));
  }, $ = async () => {
    n.endpoint && ru(t, n.endpoint);
  }, k = (x) => async (ce) => {
    o((U) => {
      const R = Qn(U, x, ce);
      return r(R), d(x, R), R;
    });
  }, C = (x) => (ce) => {
    o((U) => {
      const R = Qn(U, x, ce);
      return b(R, x), R;
    });
  }, A = (x) => {
    if (x !== "" && !/^\d+$/.test(x)) return;
    v(x);
    const ce = x === "" ? void 0 : parseInt(x, 10);
    o((U) => {
      const R = Qn(U, "connectionTimeoutSeconds", ce);
      return b(R, "connectionTimeoutSeconds"), R;
    });
  }, Z = async () => {
    const x = await Jg(t, n);
    x && (o(x), r(x), d("authenticationMicroflow", x));
  }, j = async () => {
    n.authenticationMicroflow && xc(t, n.authenticationMicroflow);
  }, V = async () => {
    const x = u;
    l(!1);
    const ce = await Kg(t, n, K(w));
    if (ce === void 0) {
      x && l(!0);
      return;
    }
    c(ce), l(!0), g(/* @__PURE__ */ new Date());
  }, H = async () => {
    const x = await Wg(t, Hc, w);
    x && f(x);
  }, K = (x) => x.filter(([ce]) => ce.trim() !== ""), ae = (x) => K(x).map((ce) => ce[0]).join(", "), Pe = Object.values(s).some((x) => x !== !0);
  return /* @__PURE__ */ fe.jsxs(Nc, { children: [
    /* @__PURE__ */ fe.jsxs(ss, { children: [
      /* @__PURE__ */ fe.jsxs(Cn, { label: "General", children: [
        /* @__PURE__ */ fe.jsx(
          as,
          {
            label: "Version",
            ariaLabel: "Version",
            value: n.version === void 0 ? "" : n.version,
            onChange: C("version"),
            placeholder: "[1.0.0]"
          }
        ),
        /* @__PURE__ */ fe.jsx(
          Yc,
          {
            label: "Documentation",
            "aria-label": "Documentation",
            value: n.documentation,
            onChange: C("documentation"),
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ fe.jsxs(Cn, { label: "Configuration", children: [
        /* @__PURE__ */ fe.jsx(
          On,
          {
            ariaLabel: "Endpoint",
            label: "Endpoint",
            value: n.endpoint ?? "",
            icon: n.endpoint ? /* @__PURE__ */ fe.jsx(Gc, {}) : void 0,
            buttonCaption: "Select...",
            onClick: h,
            validate: () => s.isValidEndpoint,
            buttonCaptionSecondary: n.endpoint ? "Show" : void 0,
            onClickSecondary: n.endpoint ? $ : void 0
          }
        ),
        /* @__PURE__ */ fe.jsx(
          On,
          {
            ariaLabel: "Credentials microflow",
            label: "Credentials microflow",
            value: n.authenticationMicroflow ? n.authenticationMicroflow : "",
            icon: n.authenticationMicroflow ? /* @__PURE__ */ fe.jsx(Xc, {}) : void 0,
            description: "Optional: Select a microflow that generates credentials that will be used to authenticate to the MCP server. The microflow needs to return a list of System.HttpHeader objects. Input parameters are not allowed.",
            onClick: Z,
            buttonCaption: "Select...",
            buttonCaptionSecondary: n.authenticationMicroflow ? "Show" : void 0,
            onClickSecondary: n.authenticationMicroflow ? j : void 0,
            validate: () => s.isValidAuthenticationMicroflow
          }
        ),
        /* @__PURE__ */ fe.jsx(
          Bc,
          {
            ariaLabel: "Protocol version",
            label: "Protocol version",
            selectedKey: n.protocolVersion,
            options: Qg,
            onSelectionChange: k("protocolVersion"),
            validate: () => s.isValidProtocolVersion
          }
        ),
        /* @__PURE__ */ fe.jsx(
          as,
          {
            label: "Connection timeout (seconds)",
            ariaLabel: "Connection timeout",
            value: p,
            description: "Optional: Connection timeout controls the maximum time to wait for a response from the MCP server.",
            onChange: A,
            validate: () => s.isValidConnectionTimeout
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ fe.jsx(jc, { children: /* @__PURE__ */ fe.jsxs(Cn, { label: "MCP Tools Playground", children: [
      /* @__PURE__ */ fe.jsx(ss, { children: /* @__PURE__ */ fe.jsx(
        On,
        {
          ariaLabel: "MCP Authentication headers",
          label: "Authentication headers",
          value: ae(w),
          buttonCaption: "Edit",
          onClick: H,
          validate: void 0,
          description: "Headers are not stored and only used to explore tools from Studio Pro."
        }
      ) }),
      /* @__PURE__ */ fe.jsx(
        Qc,
        {
          label: "Tools",
          buttonCaption: "List tools",
          onPress: V,
          disabled: Pe
        }
      ),
      u && /* @__PURE__ */ fe.jsxs(fe.Fragment, { children: [
        y && /* @__PURE__ */ fe.jsxs(Yg, { children: [
          "Last updated: ",
          y.toLocaleString()
        ] }),
        /* @__PURE__ */ fe.jsx(
          nu,
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
            data: i.map((x) => [
              /* @__PURE__ */ fe.jsx(ou, { icon: Fc, text: x.name }, x.name),
              x.description
            ])
          }
        )
      ] })
    ] }) })
  ] });
}, ey = Kc(), ty = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [o, s] = Ze.useState(!1), [a, i] = Ze.useState(ey);
  return Ze.useEffect(() => {
    n.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const u = c.document.contents;
        s(!0), i(u);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch(async (c) => {
      await r.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c), s(!0);
    });
  }, []), /* @__PURE__ */ fe.jsx(Mc, { studioPro: e, children: /* @__PURE__ */ fe.jsxs(qc, { children: [
    !o && /* @__PURE__ */ fe.jsx(Dc, {}),
    o && /* @__PURE__ */ fe.jsx(Ac, { children: /* @__PURE__ */ fe.jsx(
      Xg,
      {
        loadedConsumedMCPService: a,
        studioPro: e,
        updateStudioProDocument: Jc(e, t)
      }
    ) })
  ] }) });
}, hy = Uc(ty);
export {
  hy as component
};
//# sourceMappingURL=consumedMCPServiceEdit.js.map
