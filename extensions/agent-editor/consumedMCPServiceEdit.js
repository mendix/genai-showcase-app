import { J as Ya, y as Nc, r as Ve, w as ce, K as zc, C as ss, G as Cn, L as jc, D as qc, P as Mc, E as Ac } from "./Icon-DlQJfq7F.js";
import { T as Uc, c as Dc, C as Vc } from "./TextWithIcon-sxhIisHZ.js";
import { p as Zc, C as Lc, M as Fc, b as xc, q as Hc, l as Kc, r as Jc, s as Wc } from "./index-DO-n49Lf.js";
import { v as Gc, C as tt, i as Bc, B as Qc, b as Yc, a as Xc } from "./text-DiVMLl3U.js";
import { y as eu, n as tu } from "./MicroflowIcon-kvKEq0tY.js";
import { T as as } from "./TextInputLabeled-CEPunJWI.js";
import { T as On } from "./TextInputWithButton-DdFsQTz_.js";
import { c as ru } from "./DesignSystemTokens-BZrmEyPo.js";
import { g as nu, h as ou } from "./modelUtils-whA8-BBg.js";
import { W as su } from "./Banner-BKPTdROG.js";
import { T as au } from "./Table-CfPTytSG.js";
const iu = Object.freeze({
  status: "aborted"
});
function N(e, t, r) {
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
function ut(e) {
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
function cu(e, t) {
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
function $t(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function dt(...e) {
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
function uu(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const ri = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Yt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const lu = pn(() => {
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
function qt(e) {
  if (Yt(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(Yt(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function ni(e) {
  return qt(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const du = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Mt(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ft(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (n._zod.parent = e), n;
}
function K(e) {
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
function fu(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const hu = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function pu(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = dt(e._zod.def, {
    get shape() {
      const a = {};
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (a[i] = r.shape[i]);
      }
      return $t(this, "shape", a), a;
    },
    checks: []
  });
  return ft(e, s);
}
function mu(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = dt(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete a[i];
      }
      return $t(this, "shape", a), a;
    },
    checks: []
  });
  return ft(e, s);
}
function _u(e, t) {
  if (!qt(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const s = e._zod.def.shape;
    for (const a in t)
      if (Object.getOwnPropertyDescriptor(s, a) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = dt(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return $t(this, "shape", s), s;
    }
  });
  return ft(e, o);
}
function gu(e, t) {
  if (!qt(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = dt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return $t(this, "shape", n), n;
    }
  });
  return ft(e, r);
}
function yu(e, t) {
  const r = dt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return $t(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ft(e, r);
}
function vu(e, t, r) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const a = dt(t._zod.def, {
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
      return $t(this, "shape", c), c;
    },
    checks: []
  });
  return ft(t, a);
}
function wu(e, t, r) {
  const n = dt(t._zod.def, {
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
      return $t(this, "shape", s), s;
    }
  });
  return ft(t, n);
}
function It(e, t = 0) {
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
function ir(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function lt(e, t, r) {
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
}, si = N("$ZodError", oi), ai = N("$ZodError", oi, { Parent: Error });
function $u(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const o of e.issues)
    o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
  return { formErrors: n, fieldErrors: r };
}
function bu(e, t = (r) => r.message) {
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
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => lt(c, s, ut())));
    throw ri(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, Ro = (e) => async (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => lt(c, s, ut())));
    throw ri(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, mn = (e) => (t, r, n) => {
  const o = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new zt();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? si)(s.issues.map((a) => lt(a, o, ut())))
  } : { success: !0, data: s.value };
}, ii = /* @__PURE__ */ mn(ai), _n = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => lt(a, o, ut())))
  } : { success: !0, data: s.value };
}, Su = /* @__PURE__ */ _n(ai), ku = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Po(e)(t, r, o);
}, Eu = (e) => (t, r, n) => Po(e)(t, r, n), Tu = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ro(e)(t, r, o);
}, Pu = (e) => async (t, r, n) => Ro(e)(t, r, n), Ru = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return mn(e)(t, r, o);
}, Iu = (e) => (t, r, n) => mn(e)(t, r, n), Cu = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return _n(e)(t, r, o);
}, Ou = (e) => async (t, r, n) => _n(e)(t, r, n), Nu = /^[cC][^\s-]{8,}$/, zu = /^[0-9a-z]+$/, ju = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, qu = /^[0-9a-vA-V]{20}$/, Mu = /^[A-Za-z0-9]{27}$/, Au = /^[a-zA-Z0-9_-]{21}$/, Uu = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Du = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, us = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Vu = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Zu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Lu() {
  return new RegExp(Zu, "u");
}
const Fu = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, xu = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Hu = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ku = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ju = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ci = /^[A-Za-z0-9_-]*$/, Wu = /^\+[1-9]\d{6,14}$/, ui = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Gu = /* @__PURE__ */ new RegExp(`^${ui}$`);
function li(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Bu(e) {
  return new RegExp(`^${li(e)}$`);
}
function Qu(e) {
  const t = li({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${ui}T(?:${n})$`);
}
const Yu = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Xu = /^-?\d+$/, di = /^-?\d+(?:\.\d+)?$/, el = /^(?:true|false)$/i, tl = /^null$/i, rl = /^[^A-Z]*$/, nl = /^[^a-z]*$/, Le = /* @__PURE__ */ N("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), fi = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, hi = /* @__PURE__ */ N("$ZodCheckLessThan", (e, t) => {
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
}), pi = /* @__PURE__ */ N("$ZodCheckGreaterThan", (e, t) => {
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
}), ol = /* @__PURE__ */ N("$ZodCheckMultipleOf", (e, t) => {
  Le.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : cu(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), sl = /* @__PURE__ */ N("$ZodCheckNumberFormat", (e, t) => {
  var a;
  Le.init(e, t), t.format = t.format || "float64";
  const r = (a = t.format) == null ? void 0 : a.includes("int"), n = r ? "int" : "number", [o, s] = hu[t.format];
  e._zod.onattach.push((i) => {
    const c = i._zod.bag;
    c.format = t.format, c.minimum = o, c.maximum = s, r && (c.pattern = Xu);
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
}), al = /* @__PURE__ */ N("$ZodCheckMaxLength", (e, t) => {
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
}), il = /* @__PURE__ */ N("$ZodCheckMinLength", (e, t) => {
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
}), cl = /* @__PURE__ */ N("$ZodCheckLengthEquals", (e, t) => {
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
}), gn = /* @__PURE__ */ N("$ZodCheckStringFormat", (e, t) => {
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
}), ul = /* @__PURE__ */ N("$ZodCheckRegex", (e, t) => {
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
}), ll = /* @__PURE__ */ N("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = rl), gn.init(e, t);
}), dl = /* @__PURE__ */ N("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = nl), gn.init(e, t);
}), fl = /* @__PURE__ */ N("$ZodCheckIncludes", (e, t) => {
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
}), hl = /* @__PURE__ */ N("$ZodCheckStartsWith", (e, t) => {
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
}), pl = /* @__PURE__ */ N("$ZodCheckEndsWith", (e, t) => {
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
}), ml = /* @__PURE__ */ N("$ZodCheckOverwrite", (e, t) => {
  Le.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class _l {
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
const gl = {
  major: 4,
  minor: 3,
  patch: 6
}, he = /* @__PURE__ */ N("$ZodType", (e, t) => {
  var o;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = gl;
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
      let l = It(i), y;
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
            await v, i.issues.length !== p && (l || (l = It(i, p)));
          });
        else {
          if (i.issues.length === p)
            continue;
          l || (l = It(i, p));
        }
      }
      return y ? y.then(() => i) : i;
    }, a = (i, c, u) => {
      if (It(i))
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
        return Su(e, s).then((c) => {
          var u;
          return c.success ? { value: c.data } : { issues: (u = c.error) == null ? void 0 : u.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Io = /* @__PURE__ */ N("$ZodString", (e, t) => {
  var r;
  he.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? Yu(e._zod.bag), e._zod.parse = (n, o) => {
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
}), ge = /* @__PURE__ */ N("$ZodStringFormat", (e, t) => {
  gn.init(e, t), Io.init(e, t);
}), yl = /* @__PURE__ */ N("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Du), ge.init(e, t);
}), vl = /* @__PURE__ */ N("$ZodUUID", (e, t) => {
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
}), wl = /* @__PURE__ */ N("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = Vu), ge.init(e, t);
}), $l = /* @__PURE__ */ N("$ZodURL", (e, t) => {
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
}), bl = /* @__PURE__ */ N("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Lu()), ge.init(e, t);
}), Sl = /* @__PURE__ */ N("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Au), ge.init(e, t);
}), kl = /* @__PURE__ */ N("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = Nu), ge.init(e, t);
}), El = /* @__PURE__ */ N("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = zu), ge.init(e, t);
}), Tl = /* @__PURE__ */ N("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = ju), ge.init(e, t);
}), Pl = /* @__PURE__ */ N("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = qu), ge.init(e, t);
}), Rl = /* @__PURE__ */ N("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = Mu), ge.init(e, t);
}), Il = /* @__PURE__ */ N("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Qu(t)), ge.init(e, t);
}), Cl = /* @__PURE__ */ N("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Gu), ge.init(e, t);
}), Ol = /* @__PURE__ */ N("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Bu(t)), ge.init(e, t);
}), Nl = /* @__PURE__ */ N("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Uu), ge.init(e, t);
}), zl = /* @__PURE__ */ N("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Fu), ge.init(e, t), e._zod.bag.format = "ipv4";
}), jl = /* @__PURE__ */ N("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = xu), ge.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
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
}), ql = /* @__PURE__ */ N("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Hu), ge.init(e, t);
}), Ml = /* @__PURE__ */ N("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Ku), ge.init(e, t), e._zod.check = (r) => {
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
const Al = /* @__PURE__ */ N("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Ju), ge.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    mi(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Ul(e) {
  if (!ci.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return mi(r);
}
const Dl = /* @__PURE__ */ N("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ci), ge.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Ul(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Vl = /* @__PURE__ */ N("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Wu), ge.init(e, t);
});
function Zl(e, t = null) {
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
const Ll = /* @__PURE__ */ N("$ZodJWT", (e, t) => {
  ge.init(e, t), e._zod.check = (r) => {
    Zl(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), _i = /* @__PURE__ */ N("$ZodNumber", (e, t) => {
  he.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? di, e._zod.parse = (r, n) => {
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
}), Fl = /* @__PURE__ */ N("$ZodNumberFormat", (e, t) => {
  sl.init(e, t), _i.init(e, t);
}), xl = /* @__PURE__ */ N("$ZodBoolean", (e, t) => {
  he.init(e, t), e._zod.pattern = el, e._zod.parse = (r, n) => {
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
}), Hl = /* @__PURE__ */ N("$ZodNull", (e, t) => {
  he.init(e, t), e._zod.pattern = tl, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, n) => {
    const o = r.value;
    return o === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), Kl = /* @__PURE__ */ N("$ZodAny", (e, t) => {
  he.init(e, t), e._zod.parse = (r) => r;
}), Jl = /* @__PURE__ */ N("$ZodUnknown", (e, t) => {
  he.init(e, t), e._zod.parse = (r) => r;
}), Wl = /* @__PURE__ */ N("$ZodNever", (e, t) => {
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
const Gl = /* @__PURE__ */ N("$ZodArray", (e, t) => {
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
function Xr(e, t, r, n, o) {
  if (e.issues.length) {
    if (o && !(r in n))
      return;
    t.issues.push(...Ct(r, e.issues));
  }
  e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function gi(e) {
  var n, o, s, a;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((a = (s = (o = (n = e.shape) == null ? void 0 : n[i]) == null ? void 0 : o._zod) == null ? void 0 : s.traits) != null && a.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const r = fu(e.shape);
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
const Bl = /* @__PURE__ */ N("$ZodObject", (e, t) => {
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
}), Ql = /* @__PURE__ */ N("$ZodObjectJIT", (e, t) => {
  Bl.init(e, t);
  const r = e._zod.parse, n = pn(() => gi(t)), o = (g) => {
    var _;
    const p = new _l(["shape", "payload", "ctx"]), v = n.value, w = (S) => {
      const h = cs(S);
      return `shape[${h}]._zod.run({ value: input[${h}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    const f = /* @__PURE__ */ Object.create(null);
    let m = 0;
    for (const S of v.keys)
      f[S] = `key_${m++}`;
    p.write("const newResult = {};");
    for (const S of v.keys) {
      const h = f[S], b = cs(S), k = g[S], O = ((_ = k == null ? void 0 : k._zod) == null ? void 0 : _.optout) === "optional";
      p.write(`const ${h} = ${w(S)};`), O ? p.write(`
        if (${h}.issues.length) {
          if (${b} in input) {
            payload.issues = payload.issues.concat(${h}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${b}, ...iss.path] : [${b}]
            })));
          }
        }
        
        if (${h}.value === undefined) {
          if (${b} in input) {
            newResult[${b}] = undefined;
          }
        } else {
          newResult[${b}] = ${h}.value;
        }
        
      `) : p.write(`
        if (${h}.issues.length) {
          payload.issues = payload.issues.concat(${h}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${b}, ...iss.path] : [${b}]
          })));
        }
        
        if (${h}.value === undefined) {
          if (${b} in input) {
            newResult[${b}] = undefined;
          }
        } else {
          newResult[${b}] = ${h}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    const d = p.compile();
    return (S, h) => d(g, S, h);
  };
  let s;
  const a = Yt, i = !ei.jitless, u = i && lu.value, l = t.catchall;
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
  const o = e.filter((s) => !It(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((s) => s.issues.map((a) => lt(a, n, ut())))
  }), t);
}
const vi = /* @__PURE__ */ N("$ZodUnion", (e, t) => {
  he.init(e, t), ue(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), ue(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), ue(e._zod, "values", () => {
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
}), Yl = /* @__PURE__ */ N("$ZodDiscriminatedUnion", (e, t) => {
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
}), Xl = /* @__PURE__ */ N("$ZodIntersection", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value, s = t.left._zod.run({ value: o, issues: [] }, n), a = t.right._zod.run({ value: o, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([c, u]) => fs(r, c, u)) : fs(r, s, a);
  };
});
function Xn(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (qt(e) && qt(t)) {
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
  if (s.length && o && e.issues.push({ ...o, keys: s }), It(e))
    return e;
  const a = Xn(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const ed = /* @__PURE__ */ N("$ZodRecord", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value;
    if (!qt(o))
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
            y.issues.length && r.issues.push(...Ct(u, y.issues)), r.value[u] = y.value;
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
            issues: c.issues.map((y) => lt(y, n, ut())),
            input: i,
            path: [i],
            inst: e
          });
          continue;
        }
        const l = t.valueType._zod.run({ value: o[i], issues: [] }, n);
        l instanceof Promise ? s.push(l.then((y) => {
          y.issues.length && r.issues.push(...Ct(i, y.issues)), r.value[c.value] = y.value;
        })) : (l.issues.length && r.issues.push(...Ct(i, l.issues)), r.value[c.value] = l.value);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
}), td = /* @__PURE__ */ N("$ZodEnum", (e, t) => {
  he.init(e, t);
  const r = ti(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((o) => du.has(typeof o)).map((o) => typeof o == "string" ? Mt(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return n.has(a) || o.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), o;
  };
}), rd = /* @__PURE__ */ N("$ZodLiteral", (e, t) => {
  if (he.init(e, t), t.values.length === 0)
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
}), nd = /* @__PURE__ */ N("$ZodTransform", (e, t) => {
  he.init(e, t), e._zod.parse = (r, n) => {
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
const wi = /* @__PURE__ */ N("$ZodOptional", (e, t) => {
  he.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", ue(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), ue(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Eo(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => hs(s, r.value)) : hs(o, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), od = /* @__PURE__ */ N("$ZodExactOptional", (e, t) => {
  wi.init(e, t), ue(e._zod, "values", () => t.innerType._zod.values), ue(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), sd = /* @__PURE__ */ N("$ZodNullable", (e, t) => {
  he.init(e, t), ue(e._zod, "optin", () => t.innerType._zod.optin), ue(e._zod, "optout", () => t.innerType._zod.optout), ue(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Eo(r.source)}|null)$`) : void 0;
  }), ue(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), ad = /* @__PURE__ */ N("$ZodDefault", (e, t) => {
  he.init(e, t), e._zod.optin = "optional", ue(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
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
const id = /* @__PURE__ */ N("$ZodPrefault", (e, t) => {
  he.init(e, t), e._zod.optin = "optional", ue(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), cd = /* @__PURE__ */ N("$ZodNonOptional", (e, t) => {
  he.init(e, t), ue(e._zod, "values", () => {
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
const ud = /* @__PURE__ */ N("$ZodCatch", (e, t) => {
  he.init(e, t), ue(e._zod, "optin", () => t.innerType._zod.optin), ue(e._zod, "optout", () => t.innerType._zod.optout), ue(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((a) => lt(a, n, ut()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((s) => lt(s, n, ut()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), ld = /* @__PURE__ */ N("$ZodPipe", (e, t) => {
  he.init(e, t), ue(e._zod, "values", () => t.in._zod.values), ue(e._zod, "optin", () => t.in._zod.optin), ue(e._zod, "optout", () => t.out._zod.optout), ue(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
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
const dd = /* @__PURE__ */ N("$ZodReadonly", (e, t) => {
  he.init(e, t), ue(e._zod, "propValues", () => t.innerType._zod.propValues), ue(e._zod, "values", () => t.innerType._zod.values), ue(e._zod, "optin", () => {
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
const fd = /* @__PURE__ */ N("$ZodCustom", (e, t) => {
  Le.init(e, t), he.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
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
class hd {
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
function pd() {
  return new hd();
}
(ys = globalThis).__zod_globalRegistry ?? (ys.__zod_globalRegistry = pd());
const Kt = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function md(e, t) {
  return new e({
    type: "string",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _d(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vs(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wd(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $i(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $d(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function bd(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Sd(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function kd(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ed(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Td(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pd(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rd(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Id(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Cd(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Od(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nd(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zd(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jd(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qd(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Md(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ad(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ud(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Dd(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vd(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zd(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ld(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fd(e, t) {
  return new e({
    type: "boolean",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xd(e, t) {
  return new e({
    type: "null",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hd(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function Kd(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Jd(e, t) {
  return new e({
    type: "never",
    ...K(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ws(e, t) {
  return new hi({
    check: "less_than",
    ...K(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Nn(e, t) {
  return new hi({
    check: "less_than",
    ...K(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function $s(e, t) {
  return new pi({
    check: "greater_than",
    ...K(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
  return new pi({
    check: "greater_than",
    ...K(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function bs(e, t) {
  return new ol({
    check: "multiple_of",
    ...K(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function bi(e, t) {
  return new al({
    check: "max_length",
    ...K(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function en(e, t) {
  return new il({
    check: "min_length",
    ...K(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Si(e, t) {
  return new cl({
    check: "length_equals",
    ...K(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Wd(e, t) {
  return new ul({
    check: "string_format",
    format: "regex",
    ...K(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Gd(e) {
  return new ll({
    check: "string_format",
    format: "lowercase",
    ...K(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Bd(e) {
  return new dl({
    check: "string_format",
    format: "uppercase",
    ...K(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Qd(e, t) {
  return new fl({
    check: "string_format",
    format: "includes",
    ...K(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function Yd(e, t) {
  return new hl({
    check: "string_format",
    format: "starts_with",
    ...K(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Xd(e, t) {
  return new pl({
    check: "string_format",
    format: "ends_with",
    ...K(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Dt(e) {
  return new ml({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function ef(e) {
  return /* @__PURE__ */ Dt((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function tf() {
  return /* @__PURE__ */ Dt((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function rf() {
  return /* @__PURE__ */ Dt((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function nf() {
  return /* @__PURE__ */ Dt((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function of() {
  return /* @__PURE__ */ Dt((e) => uu(e));
}
// @__NO_SIDE_EFFECTS__
function sf(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...K(r)
  });
}
// @__NO_SIDE_EFFECTS__
function af(e, t, r) {
  const n = K(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
// @__NO_SIDE_EFFECTS__
function cf(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...K(r)
  });
}
// @__NO_SIDE_EFFECTS__
function uf(e) {
  const t = /* @__PURE__ */ lf((r) => (r.addIssue = (n) => {
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
function lf(e, t) {
  const r = new Le({
    check: "custom",
    ...K(t)
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
function be(e, t, r = { path: [], schemaPath: [] }) {
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
    p && (a.ref || (a.ref = p), be(p, t, g), t.seen.get(p).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && Me(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((n = a.schema).default ?? (n.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
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
function Me(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return Me(n.element, r);
  if (n.type === "set")
    return Me(n.valueType, r);
  if (n.type === "lazy")
    return Me(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return Me(n.innerType, r);
  if (n.type === "intersection")
    return Me(n.left, r) || Me(n.right, r);
  if (n.type === "record" || n.type === "map")
    return Me(n.keyType, r) || Me(n.valueType, r);
  if (n.type === "pipe")
    return Me(n.in, r) || Me(n.out, r);
  if (n.type === "object") {
    for (const o in n.shape)
      if (Me(n.shape[o], r))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const o of n.options)
      if (Me(o, r))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const o of n.items)
      if (Me(o, r))
        return !0;
    return !!(n.rest && Me(n.rest, r));
  }
  return !1;
}
const df = (e, t = {}) => (r) => {
  const n = ki({ ...r, processors: t });
  return be(e, n), Ei(n, e), Ti(n, e);
}, tn = (e, t, r = {}) => (n) => {
  const { libraryOptions: o, target: s } = n ?? {}, a = ki({ ...o ?? {}, target: s, io: t, processors: r });
  return be(e, a), Ei(a, e), Ti(a, e);
}, ff = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, hf = (e, t, r, n) => {
  const o = r;
  o.type = "string";
  const { minimum: s, maximum: a, format: i, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof a == "number" && (o.maxLength = a), i && (o.format = ff[i] ?? i, o.format === "" && delete o.format, i === "time" && delete o.format), u && (o.contentEncoding = u), c && c.size > 0) {
    const l = [...c];
    l.length === 1 ? o.pattern = l[0].source : l.length > 1 && (o.allOf = [
      ...l.map((y) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: y.source
      }))
    ]);
  }
}, pf = (e, t, r, n) => {
  const o = r, { minimum: s, maximum: a, format: i, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: l } = e._zod.bag;
  typeof i == "string" && i.includes("int") ? o.type = "integer" : o.type = "number", typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = l, o.exclusiveMinimum = !0) : o.exclusiveMinimum = l), typeof s == "number" && (o.minimum = s, typeof l == "number" && t.target !== "draft-04" && (l >= s ? delete o.minimum : delete o.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = u, o.exclusiveMaximum = !0) : o.exclusiveMaximum = u), typeof a == "number" && (o.maximum = a, typeof u == "number" && t.target !== "draft-04" && (u <= a ? delete o.maximum : delete o.exclusiveMaximum)), typeof c == "number" && (o.multipleOf = c);
}, mf = (e, t, r, n) => {
  r.type = "boolean";
}, _f = (e, t, r, n) => {
  t.target === "openapi-3.0" ? (r.type = "string", r.nullable = !0, r.enum = [null]) : r.type = "null";
}, gf = (e, t, r, n) => {
  r.not = {};
}, yf = (e, t, r, n) => {
}, vf = (e, t, r, n) => {
}, wf = (e, t, r, n) => {
  const o = e._zod.def, s = ti(o.entries);
  s.every((a) => typeof a == "number") && (r.type = "number"), s.every((a) => typeof a == "string") && (r.type = "string"), r.enum = s;
}, $f = (e, t, r, n) => {
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
}, bf = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Sf = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, kf = (e, t, r, n) => {
  const o = r, s = e._zod.def, { minimum: a, maximum: i } = e._zod.bag;
  typeof a == "number" && (o.minItems = a), typeof i == "number" && (o.maxItems = i), o.type = "array", o.items = be(s.element, t, { ...n, path: [...n.path, "items"] });
}, Ef = (e, t, r, n) => {
  var u;
  const o = r, s = e._zod.def;
  o.type = "object", o.properties = {};
  const a = s.shape;
  for (const l in a)
    o.properties[l] = be(a[l], t, {
      ...n,
      path: [...n.path, "properties", l]
    });
  const i = new Set(Object.keys(a)), c = new Set([...i].filter((l) => {
    const y = s.shape[l]._zod;
    return t.io === "input" ? y.optin === void 0 : y.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), ((u = s.catchall) == null ? void 0 : u._zod.def.type) === "never" ? o.additionalProperties = !1 : s.catchall ? s.catchall && (o.additionalProperties = be(s.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, Tf = (e, t, r, n) => {
  const o = e._zod.def, s = o.inclusive === !1, a = o.options.map((i, c) => be(i, t, {
    ...n,
    path: [...n.path, s ? "oneOf" : "anyOf", c]
  }));
  s ? r.oneOf = a : r.anyOf = a;
}, Pf = (e, t, r, n) => {
  const o = e._zod.def, s = be(o.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), a = be(o.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), i = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...i(s) ? s.allOf : [s],
    ...i(a) ? a.allOf : [a]
  ];
  r.allOf = c;
}, Rf = (e, t, r, n) => {
  const o = r, s = e._zod.def;
  o.type = "object";
  const a = s.keyType, i = a._zod.bag, c = i == null ? void 0 : i.patterns;
  if (s.mode === "loose" && c && c.size > 0) {
    const l = be(s.valueType, t, {
      ...n,
      path: [...n.path, "patternProperties", "*"]
    });
    o.patternProperties = {};
    for (const y of c)
      o.patternProperties[y.source] = l;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (o.propertyNames = be(s.keyType, t, {
      ...n,
      path: [...n.path, "propertyNames"]
    })), o.additionalProperties = be(s.valueType, t, {
      ...n,
      path: [...n.path, "additionalProperties"]
    });
  const u = a._zod.values;
  if (u) {
    const l = [...u].filter((y) => typeof y == "string" || typeof y == "number");
    l.length > 0 && (o.required = l);
  }
}, If = (e, t, r, n) => {
  const o = e._zod.def, s = be(o.innerType, t, n), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = o.innerType, r.nullable = !0) : r.anyOf = [s, { type: "null" }];
}, Cf = (e, t, r, n) => {
  const o = e._zod.def;
  be(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, Of = (e, t, r, n) => {
  const o = e._zod.def;
  be(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.default = JSON.parse(JSON.stringify(o.defaultValue));
}, Nf = (e, t, r, n) => {
  const o = e._zod.def;
  be(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, zf = (e, t, r, n) => {
  const o = e._zod.def;
  be(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
  let a;
  try {
    a = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = a;
}, jf = (e, t, r, n) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  be(s, t, n);
  const a = t.seen.get(e);
  a.ref = s;
}, qf = (e, t, r, n) => {
  const o = e._zod.def;
  be(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.readOnly = !0;
}, Pi = (e, t, r, n) => {
  const o = e._zod.def;
  be(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
};
function yn(e) {
  return !!e._zod;
}
function it(e, t) {
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
function Mf(e) {
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
const Af = /* @__PURE__ */ N("ZodISODateTime", (e, t) => {
  Il.init(e, t), we.init(e, t);
});
function Ii(e) {
  return /* @__PURE__ */ Md(Af, e);
}
const Uf = /* @__PURE__ */ N("ZodISODate", (e, t) => {
  Cl.init(e, t), we.init(e, t);
});
function Df(e) {
  return /* @__PURE__ */ Ad(Uf, e);
}
const Vf = /* @__PURE__ */ N("ZodISOTime", (e, t) => {
  Ol.init(e, t), we.init(e, t);
});
function Zf(e) {
  return /* @__PURE__ */ Ud(Vf, e);
}
const Lf = /* @__PURE__ */ N("ZodISODuration", (e, t) => {
  Nl.init(e, t), we.init(e, t);
});
function Ff(e) {
  return /* @__PURE__ */ Dd(Lf, e);
}
const xf = (e, t) => {
  si.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => bu(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => $u(e, r)
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
}, Je = N("ZodError", xf, {
  Parent: Error
}), Hf = /* @__PURE__ */ Po(Je), Kf = /* @__PURE__ */ Ro(Je), Jf = /* @__PURE__ */ mn(Je), Wf = /* @__PURE__ */ _n(Je), Gf = /* @__PURE__ */ ku(Je), Bf = /* @__PURE__ */ Eu(Je), Qf = /* @__PURE__ */ Tu(Je), Yf = /* @__PURE__ */ Pu(Je), Xf = /* @__PURE__ */ Ru(Je), eh = /* @__PURE__ */ Iu(Je), th = /* @__PURE__ */ Cu(Je), rh = /* @__PURE__ */ Ou(Je), pe = /* @__PURE__ */ N("ZodType", (e, t) => (he.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: tn(e, "input"),
    output: tn(e, "output")
  }
}), e.toJSONSchema = df(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(dt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, n) => ft(e, r, n), e.brand = () => e, e.register = (r, n) => (r.add(e, n), e), e.parse = (r, n) => Hf(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Jf(e, r, n), e.parseAsync = async (r, n) => Kf(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Wf(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Gf(e, r, n), e.decode = (r, n) => Bf(e, r, n), e.encodeAsync = async (r, n) => Qf(e, r, n), e.decodeAsync = async (r, n) => Yf(e, r, n), e.safeEncode = (r, n) => Xf(e, r, n), e.safeDecode = (r, n) => eh(e, r, n), e.safeEncodeAsync = async (r, n) => th(e, r, n), e.safeDecodeAsync = async (r, n) => rh(e, r, n), e.refine = (r, n) => e.check(Gh(r, n)), e.superRefine = (r) => e.check(Bh(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ Dt(r)), e.optional = () => $e(e), e.exactOptional = () => Mh(e), e.nullable = () => Es(e), e.nullish = () => $e(Es(e)), e.nonoptional = (r) => Lh(e, r), e.array = () => L(e), e.or = (r) => me([e, r]), e.and = (r) => Oo(e, r), e.transform = (r) => to(e, Mi(r)), e.default = (r) => Dh(e, r), e.prefault = (r) => Zh(e, r), e.catch = (r) => xh(e, r), e.pipe = (r) => to(e, r), e.readonly = () => Jh(e), e.describe = (r) => {
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
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), Ci = /* @__PURE__ */ N("_ZodString", (e, t) => {
  Io.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => hf(e, n, o);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(/* @__PURE__ */ Wd(...n)), e.includes = (...n) => e.check(/* @__PURE__ */ Qd(...n)), e.startsWith = (...n) => e.check(/* @__PURE__ */ Yd(...n)), e.endsWith = (...n) => e.check(/* @__PURE__ */ Xd(...n)), e.min = (...n) => e.check(/* @__PURE__ */ en(...n)), e.max = (...n) => e.check(/* @__PURE__ */ bi(...n)), e.length = (...n) => e.check(/* @__PURE__ */ Si(...n)), e.nonempty = (...n) => e.check(/* @__PURE__ */ en(1, ...n)), e.lowercase = (n) => e.check(/* @__PURE__ */ Gd(n)), e.uppercase = (n) => e.check(/* @__PURE__ */ Bd(n)), e.trim = () => e.check(/* @__PURE__ */ tf()), e.normalize = (...n) => e.check(/* @__PURE__ */ ef(...n)), e.toLowerCase = () => e.check(/* @__PURE__ */ rf()), e.toUpperCase = () => e.check(/* @__PURE__ */ nf()), e.slugify = () => e.check(/* @__PURE__ */ of());
}), nh = /* @__PURE__ */ N("ZodString", (e, t) => {
  Io.init(e, t), Ci.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ _d(oh, r)), e.url = (r) => e.check(/* @__PURE__ */ $i(Oi, r)), e.jwt = (r) => e.check(/* @__PURE__ */ qd(wh, r)), e.emoji = (r) => e.check(/* @__PURE__ */ $d(ah, r)), e.guid = (r) => e.check(/* @__PURE__ */ vs(Ss, r)), e.uuid = (r) => e.check(/* @__PURE__ */ gd(ur, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ yd(ur, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ vd(ur, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ wd(ur, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ bd(ih, r)), e.guid = (r) => e.check(/* @__PURE__ */ vs(Ss, r)), e.cuid = (r) => e.check(/* @__PURE__ */ Sd(ch, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ kd(uh, r)), e.ulid = (r) => e.check(/* @__PURE__ */ Ed(lh, r)), e.base64 = (r) => e.check(/* @__PURE__ */ Nd(gh, r)), e.base64url = (r) => e.check(/* @__PURE__ */ zd(yh, r)), e.xid = (r) => e.check(/* @__PURE__ */ Td(dh, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ Pd(fh, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ Rd(hh, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ Id(ph, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ Cd(mh, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ Od(_h, r)), e.e164 = (r) => e.check(/* @__PURE__ */ jd(vh, r)), e.datetime = (r) => e.check(Ii(r)), e.date = (r) => e.check(Df(r)), e.time = (r) => e.check(Zf(r)), e.duration = (r) => e.check(Ff(r));
});
function T(e) {
  return /* @__PURE__ */ md(nh, e);
}
const we = /* @__PURE__ */ N("ZodStringFormat", (e, t) => {
  ge.init(e, t), Ci.init(e, t);
}), oh = /* @__PURE__ */ N("ZodEmail", (e, t) => {
  wl.init(e, t), we.init(e, t);
}), Ss = /* @__PURE__ */ N("ZodGUID", (e, t) => {
  yl.init(e, t), we.init(e, t);
}), ur = /* @__PURE__ */ N("ZodUUID", (e, t) => {
  vl.init(e, t), we.init(e, t);
}), Oi = /* @__PURE__ */ N("ZodURL", (e, t) => {
  $l.init(e, t), we.init(e, t);
});
function sh(e) {
  return /* @__PURE__ */ $i(Oi, e);
}
const ah = /* @__PURE__ */ N("ZodEmoji", (e, t) => {
  bl.init(e, t), we.init(e, t);
}), ih = /* @__PURE__ */ N("ZodNanoID", (e, t) => {
  Sl.init(e, t), we.init(e, t);
}), ch = /* @__PURE__ */ N("ZodCUID", (e, t) => {
  kl.init(e, t), we.init(e, t);
}), uh = /* @__PURE__ */ N("ZodCUID2", (e, t) => {
  El.init(e, t), we.init(e, t);
}), lh = /* @__PURE__ */ N("ZodULID", (e, t) => {
  Tl.init(e, t), we.init(e, t);
}), dh = /* @__PURE__ */ N("ZodXID", (e, t) => {
  Pl.init(e, t), we.init(e, t);
}), fh = /* @__PURE__ */ N("ZodKSUID", (e, t) => {
  Rl.init(e, t), we.init(e, t);
}), hh = /* @__PURE__ */ N("ZodIPv4", (e, t) => {
  zl.init(e, t), we.init(e, t);
}), ph = /* @__PURE__ */ N("ZodIPv6", (e, t) => {
  jl.init(e, t), we.init(e, t);
}), mh = /* @__PURE__ */ N("ZodCIDRv4", (e, t) => {
  ql.init(e, t), we.init(e, t);
}), _h = /* @__PURE__ */ N("ZodCIDRv6", (e, t) => {
  Ml.init(e, t), we.init(e, t);
}), gh = /* @__PURE__ */ N("ZodBase64", (e, t) => {
  Al.init(e, t), we.init(e, t);
}), yh = /* @__PURE__ */ N("ZodBase64URL", (e, t) => {
  Dl.init(e, t), we.init(e, t);
}), vh = /* @__PURE__ */ N("ZodE164", (e, t) => {
  Vl.init(e, t), we.init(e, t);
}), wh = /* @__PURE__ */ N("ZodJWT", (e, t) => {
  Ll.init(e, t), we.init(e, t);
}), Co = /* @__PURE__ */ N("ZodNumber", (e, t) => {
  _i.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => pf(e, n, o), e.gt = (n, o) => e.check(/* @__PURE__ */ $s(n, o)), e.gte = (n, o) => e.check(/* @__PURE__ */ zn(n, o)), e.min = (n, o) => e.check(/* @__PURE__ */ zn(n, o)), e.lt = (n, o) => e.check(/* @__PURE__ */ ws(n, o)), e.lte = (n, o) => e.check(/* @__PURE__ */ Nn(n, o)), e.max = (n, o) => e.check(/* @__PURE__ */ Nn(n, o)), e.int = (n) => e.check(ks(n)), e.safe = (n) => e.check(ks(n)), e.positive = (n) => e.check(/* @__PURE__ */ $s(0, n)), e.nonnegative = (n) => e.check(/* @__PURE__ */ zn(0, n)), e.negative = (n) => e.check(/* @__PURE__ */ ws(0, n)), e.nonpositive = (n) => e.check(/* @__PURE__ */ Nn(0, n)), e.multipleOf = (n, o) => e.check(/* @__PURE__ */ bs(n, o)), e.step = (n, o) => e.check(/* @__PURE__ */ bs(n, o)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function le(e) {
  return /* @__PURE__ */ Vd(Co, e);
}
const $h = /* @__PURE__ */ N("ZodNumberFormat", (e, t) => {
  Fl.init(e, t), Co.init(e, t);
});
function ks(e) {
  return /* @__PURE__ */ Ld($h, e);
}
const bh = /* @__PURE__ */ N("ZodBoolean", (e, t) => {
  xl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => mf(e, r, n);
});
function fe(e) {
  return /* @__PURE__ */ Fd(bh, e);
}
const Sh = /* @__PURE__ */ N("ZodNull", (e, t) => {
  Hl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => _f(e, r, n);
});
function Ni(e) {
  return /* @__PURE__ */ xd(Sh, e);
}
const kh = /* @__PURE__ */ N("ZodAny", (e, t) => {
  Kl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => yf();
});
function Eh() {
  return /* @__PURE__ */ Hd(kh);
}
const Th = /* @__PURE__ */ N("ZodUnknown", (e, t) => {
  Jl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => vf();
});
function ye() {
  return /* @__PURE__ */ Kd(Th);
}
const Ph = /* @__PURE__ */ N("ZodNever", (e, t) => {
  Wl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => gf(e, r, n);
});
function Rh(e) {
  return /* @__PURE__ */ Jd(Ph, e);
}
const Ih = /* @__PURE__ */ N("ZodArray", (e, t) => {
  Gl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => kf(e, r, n, o), e.element = t.element, e.min = (r, n) => e.check(/* @__PURE__ */ en(r, n)), e.nonempty = (r) => e.check(/* @__PURE__ */ en(1, r)), e.max = (r, n) => e.check(/* @__PURE__ */ bi(r, n)), e.length = (r, n) => e.check(/* @__PURE__ */ Si(r, n)), e.unwrap = () => e.element;
});
function L(e, t) {
  return /* @__PURE__ */ sf(Ih, e, t);
}
const zi = /* @__PURE__ */ N("ZodObject", (e, t) => {
  Ql.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Ef(e, r, n, o), ue(e, "shape", () => t.shape), e.keyof = () => xe(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: ye() }), e.loose = () => e.clone({ ...e._zod.def, catchall: ye() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Rh() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => _u(e, r), e.safeExtend = (r) => gu(e, r), e.merge = (r) => yu(e, r), e.pick = (r) => pu(e, r), e.omit = (r) => mu(e, r), e.partial = (...r) => vu(Ai, e, r[0]), e.required = (...r) => wu(Ui, e, r[0]);
});
function F(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...K(t)
  };
  return new zi(r);
}
function Oe(e, t) {
  return new zi({
    type: "object",
    shape: e,
    catchall: ye(),
    ...K(t)
  });
}
const ji = /* @__PURE__ */ N("ZodUnion", (e, t) => {
  vi.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Tf(e, r, n, o), e.options = t.options;
});
function me(e, t) {
  return new ji({
    type: "union",
    options: e,
    ...K(t)
  });
}
const Ch = /* @__PURE__ */ N("ZodDiscriminatedUnion", (e, t) => {
  ji.init(e, t), Yl.init(e, t);
});
function qi(e, t, r) {
  return new Ch({
    type: "union",
    options: t,
    discriminator: e,
    ...K(r)
  });
}
const Oh = /* @__PURE__ */ N("ZodIntersection", (e, t) => {
  Xl.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Pf(e, r, n, o);
});
function Oo(e, t) {
  return new Oh({
    type: "intersection",
    left: e,
    right: t
  });
}
const Nh = /* @__PURE__ */ N("ZodRecord", (e, t) => {
  ed.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Rf(e, r, n, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function ve(e, t, r) {
  return new Nh({
    type: "record",
    keyType: e,
    valueType: t,
    ...K(r)
  });
}
const eo = /* @__PURE__ */ N("ZodEnum", (e, t) => {
  td.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => wf(e, n, o), e.enum = t.entries, e.options = Object.values(t.entries);
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
      ...K(o),
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
      ...K(o),
      entries: s
    });
  };
});
function xe(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new eo({
    type: "enum",
    entries: r,
    ...K(t)
  });
}
const zh = /* @__PURE__ */ N("ZodLiteral", (e, t) => {
  rd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => $f(e, r, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function W(e, t) {
  return new zh({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...K(t)
  });
}
const jh = /* @__PURE__ */ N("ZodTransform", (e, t) => {
  nd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Sf(e, r), e._zod.parse = (r, n) => {
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
function Mi(e) {
  return new jh({
    type: "transform",
    transform: e
  });
}
const Ai = /* @__PURE__ */ N("ZodOptional", (e, t) => {
  wi.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Pi(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function $e(e) {
  return new Ai({
    type: "optional",
    innerType: e
  });
}
const qh = /* @__PURE__ */ N("ZodExactOptional", (e, t) => {
  od.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Pi(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Mh(e) {
  return new qh({
    type: "optional",
    innerType: e
  });
}
const Ah = /* @__PURE__ */ N("ZodNullable", (e, t) => {
  sd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => If(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Es(e) {
  return new Ah({
    type: "nullable",
    innerType: e
  });
}
const Uh = /* @__PURE__ */ N("ZodDefault", (e, t) => {
  ad.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Of(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Dh(e, t) {
  return new Uh({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : ni(t);
    }
  });
}
const Vh = /* @__PURE__ */ N("ZodPrefault", (e, t) => {
  id.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Nf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Zh(e, t) {
  return new Vh({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : ni(t);
    }
  });
}
const Ui = /* @__PURE__ */ N("ZodNonOptional", (e, t) => {
  cd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Cf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Lh(e, t) {
  return new Ui({
    type: "nonoptional",
    innerType: e,
    ...K(t)
  });
}
const Fh = /* @__PURE__ */ N("ZodCatch", (e, t) => {
  ud.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => zf(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function xh(e, t) {
  return new Fh({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Hh = /* @__PURE__ */ N("ZodPipe", (e, t) => {
  ld.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => jf(e, r, n, o), e.in = t.in, e.out = t.out;
});
function to(e, t) {
  return new Hh({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Kh = /* @__PURE__ */ N("ZodReadonly", (e, t) => {
  dd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => qf(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Jh(e) {
  return new Kh({
    type: "readonly",
    innerType: e
  });
}
const Di = /* @__PURE__ */ N("ZodCustom", (e, t) => {
  fd.init(e, t), pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => bf(e, r);
});
function Wh(e, t) {
  return /* @__PURE__ */ af(Di, e ?? (() => !0), t);
}
function Gh(e, t = {}) {
  return /* @__PURE__ */ cf(Di, e, t);
}
function Bh(e) {
  return /* @__PURE__ */ uf(e);
}
function Vi(e, t) {
  return to(Mi(e), t);
}
const Qh = {
  custom: "custom"
};
function Yh(e) {
  return /* @__PURE__ */ Zd(Co, e);
}
const vn = "2025-11-25", Xh = [vn, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], yt = "io.modelcontextprotocol/related-task", wn = "2.0", Ne = Wh((e) => e !== null && (typeof e == "object" || typeof e == "function")), Zi = me([T(), le().int()]), Li = T();
Oe({
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: me([le(), Ni()]).optional(),
  /**
   * Time in milliseconds to wait between task status requests.
   */
  pollInterval: le().optional()
});
const ep = F({
  ttl: le().optional()
}), tp = F({
  taskId: T()
}), No = Oe({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: Zi.optional(),
  /**
   * If specified, this request is related to the provided task.
   */
  [yt]: tp.optional()
}), He = F({
  /**
   * See [General fields: `_meta`](/specification/draft/basic/index#meta) for notes on `_meta` usage.
   */
  _meta: No.optional()
}), tr = He.extend({
  /**
   * If specified, the caller is requesting task-augmented execution for this request.
   * The request will return a CreateTaskResult immediately, and the actual result can be
   * retrieved later via tasks/result.
   *
   * Task augmentation is subject to capability negotiation - receivers MUST declare support
   * for task augmentation of specific request types in their capabilities.
   */
  task: ep.optional()
}), rp = (e) => tr.safeParse(e).success, ze = F({
  method: T(),
  params: He.loose().optional()
}), We = F({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: No.optional()
}), Ge = F({
  method: T(),
  params: We.loose().optional()
}), je = Oe({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: No.optional()
}), $n = me([T(), le().int()]), Fi = F({
  jsonrpc: W(wn),
  id: $n,
  ...ze.shape
}).strict(), ro = (e) => Fi.safeParse(e).success, xi = F({
  jsonrpc: W(wn),
  ...Ge.shape
}).strict(), np = (e) => xi.safeParse(e).success, zo = F({
  jsonrpc: W(wn),
  id: $n,
  result: je
}).strict(), Jt = (e) => zo.safeParse(e).success;
var Y;
(function(e) {
  e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(Y || (Y = {}));
const jo = F({
  jsonrpc: W(wn),
  id: $n.optional(),
  error: F({
    /**
     * The error type that occurred.
     */
    code: le().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: T(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: ye().optional()
  })
}).strict(), op = (e) => jo.safeParse(e).success, Gr = me([
  Fi,
  xi,
  zo,
  jo
]);
me([zo, jo]);
const Ot = je.strict(), sp = We.extend({
  /**
   * The ID of the request to cancel.
   *
   * This MUST correspond to the ID of a request previously issued in the same direction.
   */
  requestId: $n.optional(),
  /**
   * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
   */
  reason: T().optional()
}), qo = Ge.extend({
  method: W("notifications/cancelled"),
  params: sp
}), ap = F({
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
  icons: L(ap).optional()
}), At = F({
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
}), Hi = At.extend({
  ...At.shape,
  ...rr.shape,
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
}), ip = Oo(F({
  applyDefaults: fe().optional()
}), ve(T(), ye())), cp = Vi((e) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0 ? { form: {} } : e, Oo(F({
  form: ip.optional(),
  url: Ne.optional()
}), ve(T(), ye()).optional())), up = Oe({
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
  requests: Oe({
    /**
     * Task support for sampling requests.
     */
    sampling: Oe({
      createMessage: Ne.optional()
    }).optional(),
    /**
     * Task support for elicitation requests.
     */
    elicitation: Oe({
      create: Ne.optional()
    }).optional()
  }).optional()
}), lp = Oe({
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
  requests: Oe({
    /**
     * Task support for tool requests.
     */
    tools: Oe({
      call: Ne.optional()
    }).optional()
  }).optional()
}), dp = F({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: ve(T(), Ne).optional(),
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
  elicitation: cp.optional(),
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
  tasks: up.optional()
}), fp = He.extend({
  /**
   * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
   */
  protocolVersion: T(),
  capabilities: dp,
  clientInfo: Hi
}), hp = ze.extend({
  method: W("initialize"),
  params: fp
}), pp = F({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: ve(T(), Ne).optional(),
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
  tasks: lp.optional()
}), Ki = je.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: T(),
  capabilities: pp,
  serverInfo: Hi,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: T().optional()
}), Ji = Ge.extend({
  method: W("notifications/initialized"),
  params: We.optional()
}), mp = (e) => Ji.safeParse(e).success, Mo = ze.extend({
  method: W("ping"),
  params: He.optional()
}), _p = F({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: le(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: $e(le()),
  /**
   * An optional message describing the current progress.
   */
  message: $e(T())
}), gp = F({
  ...We.shape,
  ..._p.shape,
  /**
   * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
   */
  progressToken: Zi
}), Ao = Ge.extend({
  method: W("notifications/progress"),
  params: gp
}), yp = He.extend({
  /**
   * An opaque token representing the current pagination position.
   * If provided, the server should return results starting after this cursor.
   */
  cursor: Li.optional()
}), nr = ze.extend({
  params: yp.optional()
}), or = je.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: Li.optional()
}), vp = xe(["working", "input_required", "completed", "failed", "cancelled"]), sr = F({
  taskId: T(),
  status: vp,
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: me([le(), Ni()]),
  /**
   * ISO 8601 timestamp when the task was created.
   */
  createdAt: T(),
  /**
   * ISO 8601 timestamp when the task was last updated.
   */
  lastUpdatedAt: T(),
  pollInterval: $e(le()),
  /**
   * Optional diagnostic message for failed tasks or other status information.
   */
  statusMessage: $e(T())
}), er = je.extend({
  task: sr
}), wp = We.merge(sr), rn = Ge.extend({
  method: W("notifications/tasks/status"),
  params: wp
}), Uo = ze.extend({
  method: W("tasks/get"),
  params: He.extend({
    taskId: T()
  })
}), Do = je.merge(sr), Vo = ze.extend({
  method: W("tasks/result"),
  params: He.extend({
    taskId: T()
  })
});
je.loose();
const Zo = nr.extend({
  method: W("tasks/list")
}), Lo = or.extend({
  tasks: L(sr)
}), Fo = ze.extend({
  method: W("tasks/cancel"),
  params: He.extend({
    taskId: T()
  })
}), $p = je.merge(sr), Wi = F({
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
}), Gi = Wi.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: T()
}), xo = T().refine((e) => {
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
}), ar = xe(["user", "assistant"]), Vt = F({
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
  ...At.shape,
  ...rr.shape,
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
  annotations: Vt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: $e(Oe({}))
}), bp = F({
  ...At.shape,
  ...rr.shape,
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
  annotations: Vt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: $e(Oe({}))
}), Sp = nr.extend({
  method: W("resources/list")
}), Yi = or.extend({
  resources: L(Qi)
}), kp = nr.extend({
  method: W("resources/templates/list")
}), Xi = or.extend({
  resourceTemplates: L(bp)
}), Ho = He.extend({
  /**
   * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
   *
   * @format uri
   */
  uri: T()
}), Ep = Ho, Tp = ze.extend({
  method: W("resources/read"),
  params: Ep
}), ec = je.extend({
  contents: L(me([Gi, Bi]))
}), tc = Ge.extend({
  method: W("notifications/resources/list_changed"),
  params: We.optional()
}), Pp = Ho, Rp = ze.extend({
  method: W("resources/subscribe"),
  params: Pp
}), Ip = Ho, Cp = ze.extend({
  method: W("resources/unsubscribe"),
  params: Ip
}), Op = We.extend({
  /**
   * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
   */
  uri: T()
}), Np = Ge.extend({
  method: W("notifications/resources/updated"),
  params: Op
}), zp = F({
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
}), jp = F({
  ...At.shape,
  ...rr.shape,
  /**
   * An optional description of what this prompt provides
   */
  description: $e(T()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: $e(L(zp)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: $e(Oe({}))
}), qp = nr.extend({
  method: W("prompts/list")
}), rc = or.extend({
  prompts: L(jp)
}), Mp = He.extend({
  /**
   * The name of the prompt or prompt template.
   */
  name: T(),
  /**
   * Arguments to use for templating the prompt.
   */
  arguments: ve(T(), T()).optional()
}), Ap = ze.extend({
  method: W("prompts/get"),
  params: Mp
}), Ko = F({
  type: W("text"),
  /**
   * The text content of the message.
   */
  text: T(),
  /**
   * Optional annotations for the client.
   */
  annotations: Vt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Jo = F({
  type: W("image"),
  /**
   * The base64-encoded image data.
   */
  data: xo,
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: T(),
  /**
   * Optional annotations for the client.
   */
  annotations: Vt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Wo = F({
  type: W("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: xo,
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: T(),
  /**
   * Optional annotations for the client.
   */
  annotations: Vt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Up = F({
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
}), Dp = F({
  type: W("resource"),
  resource: me([Gi, Bi]),
  /**
   * Optional annotations for the client.
   */
  annotations: Vt.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), Vp = Qi.extend({
  type: W("resource_link")
}), Go = me([
  Ko,
  Jo,
  Wo,
  Vp,
  Dp
]), Zp = F({
  role: ar,
  content: Go
}), nc = je.extend({
  /**
   * An optional description for the prompt.
   */
  description: T().optional(),
  messages: L(Zp)
}), oc = Ge.extend({
  method: W("notifications/prompts/list_changed"),
  params: We.optional()
}), Lp = F({
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
}), Fp = F({
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
  ...At.shape,
  ...rr.shape,
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
    properties: ve(T(), Ne).optional(),
    required: L(T()).optional()
  }).catchall(ye()),
  /**
   * An optional JSON Schema 2020-12 object defining the structure of the tool's output
   * returned in the structuredContent field of a CallToolResult.
   * Must have type: 'object' at the root level per MCP spec.
   */
  outputSchema: F({
    type: W("object"),
    properties: ve(T(), Ne).optional(),
    required: L(T()).optional()
  }).catchall(ye()).optional(),
  /**
   * Optional additional tool information.
   */
  annotations: Lp.optional(),
  /**
   * Execution-related properties for this tool.
   */
  execution: Fp.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), xp = nr.extend({
  method: W("tools/list")
}), Bo = or.extend({
  tools: L(sc)
}), bn = je.extend({
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
bn.or(je.extend({
  toolResult: ye()
}));
const Hp = tr.extend({
  /**
   * The name of the tool to call.
   */
  name: T(),
  /**
   * Arguments to pass to the tool.
   */
  arguments: ve(T(), ye()).optional()
}), Kp = ze.extend({
  method: W("tools/call"),
  params: Hp
}), ac = Ge.extend({
  method: W("notifications/tools/list_changed"),
  params: We.optional()
}), Jp = F({
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
  debounceMs: le().int().nonnegative().default(300)
}), ic = xe(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), Wp = He.extend({
  /**
   * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
   */
  level: ic
}), Gp = ze.extend({
  method: W("logging/setLevel"),
  params: Wp
}), Bp = We.extend({
  /**
   * The severity of this log message.
   */
  level: ic,
  /**
   * An optional name of the logger issuing this message.
   */
  logger: T().optional(),
  /**
   * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
   */
  data: ye()
}), Qp = Ge.extend({
  method: W("notifications/message"),
  params: Bp
}), Yp = F({
  /**
   * A hint for a model name.
   */
  name: T().optional()
}), Xp = F({
  /**
   * Optional hints to use for model selection.
   */
  hints: L(Yp).optional(),
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
}), em = F({
  /**
   * Controls when tools are used:
   * - "auto": Model decides whether to use tools (default)
   * - "required": Model MUST use at least one tool before completing
   * - "none": Model MUST NOT use any tools
   */
  mode: xe(["auto", "required", "none"]).optional()
}), tm = F({
  type: W("tool_result"),
  toolUseId: T().describe("The unique identifier for the corresponding tool call."),
  content: L(Go).default([]),
  structuredContent: F({}).loose().optional(),
  isError: fe().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), rm = qi("type", [Ko, Jo, Wo]), nn = qi("type", [
  Ko,
  Jo,
  Wo,
  Up,
  tm
]), nm = F({
  role: ar,
  content: me([nn, L(nn)]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ve(T(), ye()).optional()
}), om = tr.extend({
  messages: L(nm),
  /**
   * The server's preferences for which model to select. The client MAY modify or omit this request.
   */
  modelPreferences: Xp.optional(),
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
  temperature: le().optional(),
  /**
   * The requested maximum number of tokens to sample (to prevent runaway completions).
   *
   * The client MAY choose to sample fewer tokens than the requested maximum.
   */
  maxTokens: le().int(),
  stopSequences: L(T()).optional(),
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
  toolChoice: em.optional()
}), cc = ze.extend({
  method: W("sampling/createMessage"),
  params: om
}), uc = je.extend({
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
  role: ar,
  /**
   * Response content. Single content block (text, image, or audio).
   */
  content: rm
}), lc = je.extend({
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
  role: ar,
  /**
   * Response content. May be a single block or array. May include ToolUseContent if stopReason is "toolUse".
   */
  content: me([nn, L(nn)])
}), sm = F({
  type: W("boolean"),
  title: T().optional(),
  description: T().optional(),
  default: fe().optional()
}), am = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  minLength: le().optional(),
  maxLength: le().optional(),
  format: xe(["email", "uri", "date", "date-time"]).optional(),
  default: T().optional()
}), im = F({
  type: xe(["number", "integer"]),
  title: T().optional(),
  description: T().optional(),
  minimum: le().optional(),
  maximum: le().optional(),
  default: le().optional()
}), cm = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  enum: L(T()),
  default: T().optional()
}), um = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  oneOf: L(F({
    const: T(),
    title: T()
  })),
  default: T().optional()
}), lm = F({
  type: W("string"),
  title: T().optional(),
  description: T().optional(),
  enum: L(T()),
  enumNames: L(T()).optional(),
  default: T().optional()
}), dm = me([cm, um]), fm = F({
  type: W("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: le().optional(),
  maxItems: le().optional(),
  items: F({
    type: W("string"),
    enum: L(T())
  }),
  default: L(T()).optional()
}), hm = F({
  type: W("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: le().optional(),
  maxItems: le().optional(),
  items: F({
    anyOf: L(F({
      const: T(),
      title: T()
    }))
  }),
  default: L(T()).optional()
}), pm = me([fm, hm]), mm = me([lm, dm, pm]), _m = me([mm, sm, am, im]), gm = tr.extend({
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
    properties: ve(T(), _m),
    required: L(T()).optional()
  })
}), ym = tr.extend({
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
}), vm = me([gm, ym]), dc = ze.extend({
  method: W("elicitation/create"),
  params: vm
}), wm = We.extend({
  /**
   * The ID of the elicitation that completed.
   */
  elicitationId: T()
}), $m = Ge.extend({
  method: W("notifications/elicitation/complete"),
  params: wm
}), fc = je.extend({
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
  content: Vi((e) => e === null ? void 0 : e, ve(T(), me([T(), le(), fe(), L(T())])).optional())
}), bm = F({
  type: W("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: T()
}), Sm = F({
  type: W("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: T()
}), km = He.extend({
  ref: me([Sm, bm]),
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
}), Em = ze.extend({
  method: W("completion/complete"),
  params: km
}), hc = je.extend({
  completion: Oe({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: L(T()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: $e(le().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: $e(fe())
  })
}), Tm = F({
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
}), Pm = ze.extend({
  method: W("roots/list"),
  params: He.optional()
}), Rm = je.extend({
  roots: L(Tm)
}), Im = Ge.extend({
  method: W("notifications/roots/list_changed"),
  params: We.optional()
});
me([
  Mo,
  hp,
  Em,
  Gp,
  Ap,
  qp,
  Sp,
  kp,
  Tp,
  Rp,
  Cp,
  Kp,
  xp,
  Uo,
  Vo,
  Zo,
  Fo
]);
me([
  qo,
  Ao,
  Ji,
  Im,
  rn
]);
me([
  Ot,
  uc,
  lc,
  fc,
  Rm,
  Do,
  Lo,
  er
]);
me([
  Mo,
  cc,
  dc,
  Pm,
  Uo,
  Vo,
  Zo,
  Fo
]);
me([
  qo,
  Ao,
  Qp,
  Np,
  tc,
  ac,
  oc,
  rn,
  $m
]);
me([
  Ot,
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
        return new Cm(o.elicitations, r);
    }
    return new Q(t, r, n);
  }
}
class Cm extends Q {
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
function pt(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Ts(e) {
  const t = Ri(e), r = t == null ? void 0 : t.method;
  if (!r)
    throw new Error("Schema is missing a method literal");
  const n = Mf(r);
  if (typeof n != "string")
    throw new Error("Schema method literal must be a string");
  return n;
}
function Ps(e, t) {
  const r = it(e, t);
  if (!r.success)
    throw r.error;
  return r.data;
}
const Om = 6e4;
class Nm {
  constructor(t) {
    this._options = t, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(qo, (r) => {
      this._oncancel(r);
    }), this.setNotificationHandler(Ao, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(
      Mo,
      // Automatic pong by default.
      (r) => ({})
    ), this._taskStore = t == null ? void 0 : t.taskStore, this._taskMessageQueue = t == null ? void 0 : t.taskMessageQueue, this._taskStore && (this.setRequestHandler(Uo, async (r, n) => {
      const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
      if (!o)
        throw new Q(Y.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...o
      };
    }), this.setRequestHandler(Vo, async (r, n) => {
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
                  const g = u, p = new Q(g.error.code, g.error.message, g.error.data);
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
          throw new Q(Y.InvalidParams, `Task not found: ${s}`);
        if (!pt(a.status))
          return await this._waitForTaskUpdate(s, n.signal), await o();
        if (pt(a.status)) {
          const c = await this._taskStore.getTaskResult(s, n.sessionId);
          return this._clearTaskQueue(s), {
            ...c,
            _meta: {
              ...c._meta,
              [yt]: {
                taskId: s
              }
            }
          };
        }
        return await o();
      };
      return await o();
    }), this.setRequestHandler(Zo, async (r, n) => {
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
    }), this.setRequestHandler(Fo, async (r, n) => {
      try {
        const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
        if (!o)
          throw new Q(Y.InvalidParams, `Task not found: ${r.params.taskId}`);
        if (pt(o.status))
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
      o == null || o(c, u), Jt(c) || op(c) ? this._onresponse(c) : ro(c) ? this._onrequest(c, u) : np(c) ? this._onnotification(c) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(c)}`));
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
    var l, y, g, p;
    const n = this._requestHandlers.get(t.method) ?? this.fallbackRequestHandler, o = this._transport, s = (g = (y = (l = t.params) == null ? void 0 : l._meta) == null ? void 0 : y[yt]) == null ? void 0 : g.taskId;
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
    const i = rp(t.params) ? t.params.task : void 0, c = this._taskStore ? this.requestTaskStore(t, o == null ? void 0 : o.sessionId) : void 0, u = {
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
          throw new Q(Y.ConnectionClosed, "Request was cancelled");
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
      if (this._requestResolvers.delete(r), Jt(t))
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
      const c = await this.request(t, er, n);
      if (c.task)
        s = c.task.taskId, yield { type: "taskCreated", task: c.task };
      else
        throw new Q(Y.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const u = await this.getTask({ taskId: s }, n);
        if (yield { type: "taskStatus", task: u }, pt(u.status)) {
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
        await new Promise((y) => setTimeout(y, l)), (i = n == null ? void 0 : n.signal) == null || i.throwIfAborted();
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
      var d, _, S, h, b;
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
          ...((S = t.params) == null ? void 0 : S._meta) || {},
          progressToken: g
        }
      }), i && (p.params = {
        ...p.params,
        task: i
      }), c && (p.params = {
        ...p.params,
        _meta: {
          ...((h = p.params) == null ? void 0 : h._meta) || {},
          [yt]: c
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
        }, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((V) => this._onerror(new Error(`Failed to send cancellation: ${V}`)));
        const O = k instanceof Q ? k : new Q(Y.RequestTimeout, String(k));
        l(O);
      };
      this._responseHandlers.set(g, (k) => {
        var O;
        if (!((O = n == null ? void 0 : n.signal) != null && O.aborted)) {
          if (k instanceof Error)
            return l(k);
          try {
            const A = it(r, k.result);
            A.success ? u(A.data) : l(A.error);
          } catch (A) {
            l(A);
          }
        }
      }), (b = n == null ? void 0 : n.signal) == null || b.addEventListener("abort", () => {
        var k;
        v((k = n == null ? void 0 : n.signal) == null ? void 0 : k.reason);
      });
      const w = (n == null ? void 0 : n.timeout) ?? Om, f = () => v(Q.fromError(Y.RequestTimeout, "Request timed out", { timeout: w }));
      this._setupTimeout(g, w, n == null ? void 0 : n.maxTotalTimeout, f, (n == null ? void 0 : n.resetTimeoutOnProgress) ?? !1);
      const m = c == null ? void 0 : c.taskId;
      if (m) {
        const k = (O) => {
          const A = this._responseHandlers.get(g);
          A ? A(O) : this._onerror(new Error(`Response handler missing for side-channeled request ${g}`));
        };
        this._requestResolvers.set(g, k), this._enqueueTaskMessage(m, {
          type: "request",
          message: p,
          timestamp: Date.now()
        }).catch((O) => {
          this._cleanupTimeout(g), l(O);
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
    return this.request({ method: "tasks/cancel", params: t }, $p, r);
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
            [yt]: r.relatedTask
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
              [yt]: r.relatedTask
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
          [yt]: r.relatedTask
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
          const c = rn.parse({
            method: "notifications/tasks/status",
            params: i
          });
          await this.notification(c), pt(i.status) && this._cleanupTaskProgressHandler(o);
        }
      },
      getTaskResult: (o) => n.getTaskResult(o, r),
      updateTaskStatus: async (o, s, a) => {
        const i = await n.getTask(o, r);
        if (!i)
          throw new Q(Y.InvalidParams, `Task "${o}" not found - it may have been cleaned up`);
        if (pt(i.status))
          throw new Q(Y.InvalidParams, `Cannot update task "${o}" from terminal status "${i.status}" to "${s}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await n.updateTaskStatus(o, s, a, r);
        const c = await n.getTask(o, r);
        if (c) {
          const u = rn.parse({
            method: "notifications/tasks/status",
            params: c
          });
          await this.notification(u), pt(c.status) && this._cleanupTaskProgressHandler(o);
        }
      },
      listTasks: (o) => n.listTasks(o, r)
    };
  }
}
function Rs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function zm(e, t) {
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
var lr = { exports: {} }, jn = {}, rt = {}, mt = {}, qn = {}, Mn = {}, An = {}, Is;
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
        return (d = this._str) !== null && d !== void 0 ? d : this._str = this._items.reduce((_, S) => `${_}${S}`, "");
      }
      get names() {
        var d;
        return (d = this._names) !== null && d !== void 0 ? d : this._names = this._items.reduce((_, S) => (S instanceof r && (_[S.str] = (_[S.str] || 0) + 1), _), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(m, ...d) {
      const _ = [m[0]];
      let S = 0;
      for (; S < d.length; )
        i(_, d[S]), _.push(m[++S]);
      return new n(_);
    }
    e._ = o;
    const s = new n("+");
    function a(m, ...d) {
      const _ = [p(m[0])];
      let S = 0;
      for (; S < d.length; )
        _.push(s), i(_, d[S]), _.push(s, p(m[++S]));
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
var Ns;
function ee() {
  return Ns || (Ns = 1, function(e) {
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
      optimizeNames($, E) {
        return this;
      }
    }
    class a extends s {
      constructor($, E, j) {
        super(), this.varKind = $, this.name = E, this.rhs = j;
      }
      render({ es5: $, _n: E }) {
        const j = $ ? r.varKinds.var : this.varKind, J = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${j} ${this.name}${J};` + E;
      }
      optimizeNames($, E) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = H(this.rhs, $, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor($, E, j) {
        super(), this.lhs = $, this.rhs = E, this.sideEffects = j;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, E) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = H(this.rhs, $, E), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return x($, this.rhs);
      }
    }
    class c extends i {
      constructor($, E, j, J) {
        super($, j, J), this.op = E;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class u extends s {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class l extends s {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class y extends s {
      constructor($) {
        super(), this.error = $;
      }
      render({ _n: $ }) {
        return `throw ${this.error};` + $;
      }
      get names() {
        return this.error.names;
      }
    }
    class g extends s {
      constructor($) {
        super(), this.code = $;
      }
      render({ _n: $ }) {
        return `${this.code};` + $;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames($, E) {
        return this.code = H(this.code, $, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class p extends s {
      constructor($ = []) {
        super(), this.nodes = $;
      }
      render($) {
        return this.nodes.reduce((E, j) => E + j.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let E = $.length;
        for (; E--; ) {
          const j = $[E].optimizeNodes();
          Array.isArray(j) ? $.splice(E, 1, ...j) : j ? $[E] = j : $.splice(E, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, E) {
        const { nodes: j } = this;
        let J = j.length;
        for (; J--; ) {
          const B = j[J];
          B.optimizeNames($, E) || (se($, B.names), j.splice(J, 1));
        }
        return j.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, E) => Z($, E.names), {});
      }
    }
    class v extends p {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class w extends p {
    }
    class f extends v {
    }
    f.kind = "else";
    class m extends v {
      constructor($, E) {
        super(E), this.condition = $;
      }
      render($) {
        let E = `if(${this.condition})` + super.render($);
        return this.else && (E += "else " + this.else.render($)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const $ = this.condition;
        if ($ === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const j = E.optimizeNodes();
          E = this.else = Array.isArray(j) ? new f(j) : j;
        }
        if (E)
          return $ === !1 ? E instanceof m ? E : E.nodes : this.nodes.length ? this : new m(Ee($), E instanceof m ? [E] : E.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, E) {
        var j;
        if (this.else = (j = this.else) === null || j === void 0 ? void 0 : j.optimizeNames($, E), !!(super.optimizeNames($, E) || this.else))
          return this.condition = H(this.condition, $, E), this;
      }
      get names() {
        const $ = super.names;
        return x($, this.condition), this.else && Z($, this.else.names), $;
      }
    }
    m.kind = "if";
    class d extends v {
    }
    d.kind = "for";
    class _ extends d {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, E) {
        if (super.optimizeNames($, E))
          return this.iteration = H(this.iteration, $, E), this;
      }
      get names() {
        return Z(super.names, this.iteration.names);
      }
    }
    class S extends d {
      constructor($, E, j, J) {
        super(), this.varKind = $, this.name = E, this.from = j, this.to = J;
      }
      render($) {
        const E = $.es5 ? r.varKinds.var : this.varKind, { name: j, from: J, to: B } = this;
        return `for(${E} ${j}=${J}; ${j}<${B}; ${j}++)` + super.render($);
      }
      get names() {
        const $ = x(super.names, this.from);
        return x($, this.to);
      }
    }
    class h extends d {
      constructor($, E, j, J) {
        super(), this.loop = $, this.varKind = E, this.name = j, this.iterable = J;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, E) {
        if (super.optimizeNames($, E))
          return this.iterable = H(this.iterable, $, E), this;
      }
      get names() {
        return Z(super.names, this.iterable.names);
      }
    }
    class b extends v {
      constructor($, E, j) {
        super(), this.name = $, this.args = E, this.async = j;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    b.kind = "func";
    class k extends p {
      render($) {
        return "return " + super.render($);
      }
    }
    k.kind = "return";
    class O extends v {
      render($) {
        let E = "try" + super.render($);
        return this.catch && (E += this.catch.render($)), this.finally && (E += this.finally.render($)), E;
      }
      optimizeNodes() {
        var $, E;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames($, E) {
        var j, J;
        return super.optimizeNames($, E), (j = this.catch) === null || j === void 0 || j.optimizeNames($, E), (J = this.finally) === null || J === void 0 || J.optimizeNames($, E), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && Z($, this.catch.names), this.finally && Z($, this.finally.names), $;
      }
    }
    class A extends v {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    A.kind = "catch";
    class V extends v {
      render($) {
        return "finally" + super.render($);
      }
    }
    V.kind = "finally";
    class q {
      constructor($, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = $, this._scope = new r.Scope({ parent: $ }), this._nodes = [new w()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name($) {
        return this._scope.name($);
      }
      // reserves unique name in the external scope
      scopeName($) {
        return this._extScope.name($);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue($, E) {
        const j = this._extScope.value($, E);
        return (this._values[j.prefix] || (this._values[j.prefix] = /* @__PURE__ */ new Set())).add(j), j;
      }
      getScopeValue($, E) {
        return this._extScope.getValue($, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs($) {
        return this._extScope.scopeRefs($, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def($, E, j, J) {
        const B = this._scope.toName(E);
        return j !== void 0 && J && (this._constants[B.str] = j), this._leafNode(new a($, B, j)), B;
      }
      // `const` declaration (`var` in es5 mode)
      const($, E, j) {
        return this._def(r.varKinds.const, $, E, j);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, E, j) {
        return this._def(r.varKinds.let, $, E, j);
      }
      // `var` declaration with optional assignment
      var($, E, j) {
        return this._def(r.varKinds.var, $, E, j);
      }
      // assignment code
      assign($, E, j) {
        return this._leafNode(new i($, E, j));
      }
      // `+=` code
      add($, E) {
        return this._leafNode(new c($, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new g($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const E = ["{"];
        for (const [j, J] of $)
          E.length > 1 && E.push(","), E.push(j), (j !== J || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, J));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, E, j) {
        if (this._blockNode(new m($)), E && j)
          this.code(E).else().code(j).endIf();
        else if (E)
          this.code(E).endIf();
        else if (j)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new m($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, f);
      }
      _for($, E) {
        return this._blockNode($), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, E) {
        return this._for(new _($), E);
      }
      // `for` statement for a range of values
      forRange($, E, j, J, B = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const ae = this._scope.toName($);
        return this._for(new S(B, ae, E, j), () => J(ae));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, E, j, J = r.varKinds.const) {
        const B = this._scope.toName($);
        if (this.opts.es5) {
          const ae = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${ae}.length`, (ne) => {
            this.var(B, (0, t._)`${ae}[${ne}]`), j(B);
          });
        }
        return this._for(new h("of", J, B, E), () => j(B));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, E, j, J = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${E})`, j);
        const B = this._scope.toName($);
        return this._for(new h("in", J, B, E), () => j(B));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(d);
      }
      // `label` statement
      label($) {
        return this._leafNode(new u($));
      }
      // `break` statement
      break($) {
        return this._leafNode(new l($));
      }
      // `return` statement
      return($) {
        const E = new k();
        if (this._blockNode(E), this.code($), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(k);
      }
      // `try` statement
      try($, E, j) {
        if (!E && !j)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const J = new O();
        if (this._blockNode(J), this.code($), E) {
          const B = this.name("e");
          this._currNode = J.catch = new A(B), E(B);
        }
        return j && (this._currNode = J.finally = new V(), this.code(j)), this._endBlockNode(A, V);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new y($));
      }
      // start self-balancing block
      block($, E) {
        return this._blockStarts.push(this._nodes.length), $ && this.code($).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock($) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const j = this._nodes.length - E;
        if (j < 0 || $ !== void 0 && j !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${j} vs ${$} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, E = t.nil, j, J) {
        return this._blockNode(new b($, E, j)), J && this.code(J).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(b);
      }
      optimize($ = 1) {
        for (; $-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode($) {
        return this._currNode.nodes.push($), this;
      }
      _blockNode($) {
        this._currNode.nodes.push($), this._nodes.push($);
      }
      _endBlockNode($, E) {
        const j = this._currNode;
        if (j instanceof $ || E && j instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${$.kind}/${E.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const E = this._currNode;
        if (!(E instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = $, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const $ = this._nodes;
        return $[$.length - 1];
      }
      set _currNode($) {
        const E = this._nodes;
        E[E.length - 1] = $;
      }
    }
    e.CodeGen = q;
    function Z(I, $) {
      for (const E in $)
        I[E] = (I[E] || 0) + ($[E] || 0);
      return I;
    }
    function x(I, $) {
      return $ instanceof t._CodeOrName ? Z(I, $.names) : I;
    }
    function H(I, $, E) {
      if (I instanceof t.Name)
        return j(I);
      if (!J(I))
        return I;
      return new t._Code(I._items.reduce((B, ae) => (ae instanceof t.Name && (ae = j(ae)), ae instanceof t._Code ? B.push(...ae._items) : B.push(ae), B), []));
      function j(B) {
        const ae = E[B.str];
        return ae === void 0 || $[B.str] !== 1 ? B : (delete $[B.str], ae);
      }
      function J(B) {
        return B instanceof t._Code && B._items.some((ae) => ae instanceof t.Name && $[ae.str] === 1 && E[ae.str] !== void 0);
      }
    }
    function se(I, $) {
      for (const E in $)
        I[E] = (I[E] || 0) - ($[E] || 0);
    }
    function Ee(I) {
      return typeof I == "boolean" || typeof I == "number" || I === null ? !I : (0, t._)`!${z(I)}`;
    }
    e.not = Ee;
    const Te = P(e.operators.AND);
    function ie(...I) {
      return I.reduce(Te);
    }
    e.and = ie;
    const Ae = P(e.operators.OR);
    function U(...I) {
      return I.reduce(Ae);
    }
    e.or = U;
    function P(I) {
      return ($, E) => $ === t.nil ? E : E === t.nil ? $ : (0, t._)`${z($)} ${I} ${z(E)}`;
    }
    function z(I) {
      return I instanceof t.Name ? I : (0, t._)`(${I})`;
    }
  }(Mn)), Mn;
}
var X = {}, zs;
function oe() {
  if (zs) return X;
  zs = 1, Object.defineProperty(X, "__esModule", { value: !0 }), X.checkStrictMode = X.getErrorPath = X.Type = X.useFunc = X.setEvaluated = X.evaluatedPropsToName = X.mergeEvaluated = X.eachItem = X.unescapeJsonPointer = X.escapeJsonPointer = X.escapeFragment = X.unescapeFragment = X.schemaRefOrVal = X.schemaHasRulesButRef = X.schemaHasRules = X.checkUnknownRules = X.alwaysValidSchema = X.toHash = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ on();
  function r(h) {
    const b = {};
    for (const k of h)
      b[k] = !0;
    return b;
  }
  X.toHash = r;
  function n(h, b) {
    return typeof b == "boolean" ? b : Object.keys(b).length === 0 ? !0 : (o(h, b), !s(b, h.self.RULES.all));
  }
  X.alwaysValidSchema = n;
  function o(h, b = h.schema) {
    const { opts: k, self: O } = h;
    if (!k.strictSchema || typeof b == "boolean")
      return;
    const A = O.RULES.keywords;
    for (const V in b)
      A[V] || S(h, `unknown keyword: "${V}"`);
  }
  X.checkUnknownRules = o;
  function s(h, b) {
    if (typeof h == "boolean")
      return !h;
    for (const k in h)
      if (b[k])
        return !0;
    return !1;
  }
  X.schemaHasRules = s;
  function a(h, b) {
    if (typeof h == "boolean")
      return !h;
    for (const k in h)
      if (k !== "$ref" && b.all[k])
        return !0;
    return !1;
  }
  X.schemaHasRulesButRef = a;
  function i({ topSchemaRef: h, schemaPath: b }, k, O, A) {
    if (!A) {
      if (typeof k == "number" || typeof k == "boolean")
        return k;
      if (typeof k == "string")
        return (0, e._)`${k}`;
    }
    return (0, e._)`${h}${b}${(0, e.getProperty)(O)}`;
  }
  X.schemaRefOrVal = i;
  function c(h) {
    return y(decodeURIComponent(h));
  }
  X.unescapeFragment = c;
  function u(h) {
    return encodeURIComponent(l(h));
  }
  X.escapeFragment = u;
  function l(h) {
    return typeof h == "number" ? `${h}` : h.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  X.escapeJsonPointer = l;
  function y(h) {
    return h.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  X.unescapeJsonPointer = y;
  function g(h, b) {
    if (Array.isArray(h))
      for (const k of h)
        b(k);
    else
      b(h);
  }
  X.eachItem = g;
  function p({ mergeNames: h, mergeToName: b, mergeValues: k, resultToName: O }) {
    return (A, V, q, Z) => {
      const x = q === void 0 ? V : q instanceof e.Name ? (V instanceof e.Name ? h(A, V, q) : b(A, V, q), q) : V instanceof e.Name ? (b(A, q, V), V) : k(V, q);
      return Z === e.Name && !(x instanceof e.Name) ? O(A, x) : x;
    };
  }
  X.mergeEvaluated = {
    props: p({
      mergeNames: (h, b, k) => h.if((0, e._)`${k} !== true && ${b} !== undefined`, () => {
        h.if((0, e._)`${b} === true`, () => h.assign(k, !0), () => h.assign(k, (0, e._)`${k} || {}`).code((0, e._)`Object.assign(${k}, ${b})`));
      }),
      mergeToName: (h, b, k) => h.if((0, e._)`${k} !== true`, () => {
        b === !0 ? h.assign(k, !0) : (h.assign(k, (0, e._)`${k} || {}`), w(h, k, b));
      }),
      mergeValues: (h, b) => h === !0 ? !0 : { ...h, ...b },
      resultToName: v
    }),
    items: p({
      mergeNames: (h, b, k) => h.if((0, e._)`${k} !== true && ${b} !== undefined`, () => h.assign(k, (0, e._)`${b} === true ? true : ${k} > ${b} ? ${k} : ${b}`)),
      mergeToName: (h, b, k) => h.if((0, e._)`${k} !== true`, () => h.assign(k, b === !0 ? !0 : (0, e._)`${k} > ${b} ? ${k} : ${b}`)),
      mergeValues: (h, b) => h === !0 ? !0 : Math.max(h, b),
      resultToName: (h, b) => h.var("items", b)
    })
  };
  function v(h, b) {
    if (b === !0)
      return h.var("props", !0);
    const k = h.var("props", (0, e._)`{}`);
    return b !== void 0 && w(h, k, b), k;
  }
  X.evaluatedPropsToName = v;
  function w(h, b, k) {
    Object.keys(k).forEach((O) => h.assign((0, e._)`${b}${(0, e.getProperty)(O)}`, !0));
  }
  X.setEvaluated = w;
  const f = {};
  function m(h, b) {
    return h.scopeValue("func", {
      ref: b,
      code: f[b.code] || (f[b.code] = new t._Code(b.code))
    });
  }
  X.useFunc = m;
  var d;
  (function(h) {
    h[h.Num = 0] = "Num", h[h.Str = 1] = "Str";
  })(d || (X.Type = d = {}));
  function _(h, b, k) {
    if (h instanceof e.Name) {
      const O = b === d.Num;
      return k ? O ? (0, e._)`"[" + ${h} + "]"` : (0, e._)`"['" + ${h} + "']"` : O ? (0, e._)`"/" + ${h}` : (0, e._)`"/" + ${h}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return k ? (0, e.getProperty)(h).toString() : "/" + l(h);
  }
  X.getErrorPath = _;
  function S(h, b, k = h.opts.strictSchema) {
    if (k) {
      if (b = `strict mode: ${b}`, k === !0)
        throw new Error(b);
      h.self.logger.warn(b);
    }
  }
  return X.checkStrictMode = S, X;
}
var dr = {}, js;
function ht() {
  if (js) return dr;
  js = 1, Object.defineProperty(dr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = {
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
var qs;
function Sn() {
  return qs || (qs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), r = /* @__PURE__ */ oe(), n = /* @__PURE__ */ ht();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: m }) => m ? (0, t.str)`"${f}" keyword must be ${m} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function o(f, m = e.keywordError, d, _) {
      const { it: S } = f, { gen: h, compositeRule: b, allErrors: k } = S, O = y(f, m, d);
      _ ?? (b || k) ? c(h, O) : u(S, (0, t._)`[${O}]`);
    }
    e.reportError = o;
    function s(f, m = e.keywordError, d) {
      const { it: _ } = f, { gen: S, compositeRule: h, allErrors: b } = _, k = y(f, m, d);
      c(S, k), h || b || u(_, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(f, m) {
      f.assign(n.default.errors, m), f.if((0, t._)`${n.default.vErrors} !== null`, () => f.if(m, () => f.assign((0, t._)`${n.default.vErrors}.length`, m), () => f.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: f, keyword: m, schemaValue: d, data: _, errsCount: S, it: h }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const b = f.name("err");
      f.forRange("i", S, n.default.errors, (k) => {
        f.const(b, (0, t._)`${n.default.vErrors}[${k}]`), f.if((0, t._)`${b}.instancePath === undefined`, () => f.assign((0, t._)`${b}.instancePath`, (0, t.strConcat)(n.default.instancePath, h.errorPath))), f.assign((0, t._)`${b}.schemaPath`, (0, t.str)`${h.errSchemaPath}/${m}`), h.opts.verbose && (f.assign((0, t._)`${b}.schema`, d), f.assign((0, t._)`${b}.data`, _));
      });
    }
    e.extendErrors = i;
    function c(f, m) {
      const d = f.const("err", m);
      f.if((0, t._)`${n.default.vErrors} === null`, () => f.assign(n.default.vErrors, (0, t._)`[${d}]`), (0, t._)`${n.default.vErrors}.push(${d})`), f.code((0, t._)`${n.default.errors}++`);
    }
    function u(f, m) {
      const { gen: d, validateName: _, schemaEnv: S } = f;
      S.$async ? d.throw((0, t._)`new ${f.ValidationError}(${m})`) : (d.assign((0, t._)`${_}.errors`, m), d.return(!1));
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
      const { gen: _, it: S } = f, h = [
        p(S, d),
        v(f, d)
      ];
      return w(f, m, h), _.object(...h);
    }
    function p({ errorPath: f }, { instancePath: m }) {
      const d = m ? (0, t.str)`${f}${(0, r.getErrorPath)(m, r.Type.Str)}` : f;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, d)];
    }
    function v({ keyword: f, it: { errSchemaPath: m } }, { schemaPath: d, parentSchema: _ }) {
      let S = _ ? m : (0, t.str)`${m}/${f}`;
      return d && (S = (0, t.str)`${S}${(0, r.getErrorPath)(d, r.Type.Str)}`), [l.schemaPath, S];
    }
    function w(f, { params: m, message: d }, _) {
      const { keyword: S, data: h, schemaValue: b, it: k } = f, { opts: O, propertyName: A, topSchemaRef: V, schemaPath: q } = k;
      _.push([l.keyword, S], [l.params, typeof m == "function" ? m(f) : m || (0, t._)`{}`]), O.messages && _.push([l.message, typeof d == "function" ? d(f) : d]), O.verbose && _.push([l.schema, b], [l.parentSchema, (0, t._)`${V}${q}`], [n.default.data, h]), A && _.push([l.propertyName, A]);
    }
  }(qn)), qn;
}
var Ms;
function jm() {
  if (Ms) return mt;
  Ms = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.boolOrEmptySchema = mt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Sn(), t = /* @__PURE__ */ ee(), r = /* @__PURE__ */ ht(), n = {
    message: "boolean schema is false"
  };
  function o(i) {
    const { gen: c, schema: u, validateName: l } = i;
    u === !1 ? a(i, !1) : typeof u == "object" && u.$async === !0 ? c.return(r.default.data) : (c.assign((0, t._)`${l}.errors`, null), c.return(!0));
  }
  mt.topBoolOrEmptySchema = o;
  function s(i, c) {
    const { gen: u, schema: l } = i;
    l === !1 ? (u.var(c, !1), a(i)) : u.var(c, !0);
  }
  mt.boolOrEmptySchema = s;
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
  return mt;
}
var Ie = {}, _t = {}, As;
function pc() {
  if (As) return _t;
  As = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.getRules = _t.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(o) {
    return typeof o == "string" && t.has(o);
  }
  _t.isJSONType = r;
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
  return _t.getRules = n, _t;
}
var nt = {}, Us;
function mc() {
  if (Us) return nt;
  Us = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.shouldUseRule = nt.shouldUseGroup = nt.schemaHasRulesForType = void 0;
  function e({ schema: n, self: o }, s) {
    const a = o.RULES.types[s];
    return a && a !== !0 && t(n, a);
  }
  nt.schemaHasRulesForType = e;
  function t(n, o) {
    return o.rules.some((s) => r(n, s));
  }
  nt.shouldUseGroup = t;
  function r(n, o) {
    var s;
    return n[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((a) => n[a] !== void 0));
  }
  return nt.shouldUseRule = r, nt;
}
var Ds;
function sn() {
  if (Ds) return Ie;
  Ds = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.reportTypeError = Ie.checkDataTypes = Ie.checkDataType = Ie.coerceAndCheckDataType = Ie.getJSONTypes = Ie.getSchemaTypes = Ie.DataType = void 0;
  const e = /* @__PURE__ */ pc(), t = /* @__PURE__ */ mc(), r = /* @__PURE__ */ Sn(), n = /* @__PURE__ */ ee(), o = /* @__PURE__ */ oe();
  var s;
  (function(d) {
    d[d.Correct = 0] = "Correct", d[d.Wrong = 1] = "Wrong";
  })(s || (Ie.DataType = s = {}));
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
  Ie.getSchemaTypes = a;
  function i(d) {
    const _ = Array.isArray(d) ? d : d ? [d] : [];
    if (_.every(e.isJSONType))
      return _;
    throw new Error("type must be JSONType or JSONType[]: " + _.join(","));
  }
  Ie.getJSONTypes = i;
  function c(d, _) {
    const { gen: S, data: h, opts: b } = d, k = l(_, b.coerceTypes), O = _.length > 0 && !(k.length === 0 && _.length === 1 && (0, t.schemaHasRulesForType)(d, _[0]));
    if (O) {
      const A = v(_, h, b.strictNumbers, s.Wrong);
      S.if(A, () => {
        k.length ? y(d, _, k) : f(d);
      });
    }
    return O;
  }
  Ie.coerceAndCheckDataType = c;
  const u = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function l(d, _) {
    return _ ? d.filter((S) => u.has(S) || _ === "array" && S === "array") : [];
  }
  function y(d, _, S) {
    const { gen: h, data: b, opts: k } = d, O = h.let("dataType", (0, n._)`typeof ${b}`), A = h.let("coerced", (0, n._)`undefined`);
    k.coerceTypes === "array" && h.if((0, n._)`${O} == 'object' && Array.isArray(${b}) && ${b}.length == 1`, () => h.assign(b, (0, n._)`${b}[0]`).assign(O, (0, n._)`typeof ${b}`).if(v(_, b, k.strictNumbers), () => h.assign(A, b))), h.if((0, n._)`${A} !== undefined`);
    for (const q of S)
      (u.has(q) || q === "array" && k.coerceTypes === "array") && V(q);
    h.else(), f(d), h.endIf(), h.if((0, n._)`${A} !== undefined`, () => {
      h.assign(b, A), g(d, A);
    });
    function V(q) {
      switch (q) {
        case "string":
          h.elseIf((0, n._)`${O} == "number" || ${O} == "boolean"`).assign(A, (0, n._)`"" + ${b}`).elseIf((0, n._)`${b} === null`).assign(A, (0, n._)`""`);
          return;
        case "number":
          h.elseIf((0, n._)`${O} == "boolean" || ${b} === null
              || (${O} == "string" && ${b} && ${b} == +${b})`).assign(A, (0, n._)`+${b}`);
          return;
        case "integer":
          h.elseIf((0, n._)`${O} === "boolean" || ${b} === null
              || (${O} === "string" && ${b} && ${b} == +${b} && !(${b} % 1))`).assign(A, (0, n._)`+${b}`);
          return;
        case "boolean":
          h.elseIf((0, n._)`${b} === "false" || ${b} === 0 || ${b} === null`).assign(A, !1).elseIf((0, n._)`${b} === "true" || ${b} === 1`).assign(A, !0);
          return;
        case "null":
          h.elseIf((0, n._)`${b} === "" || ${b} === 0 || ${b} === false`), h.assign(A, null);
          return;
        case "array":
          h.elseIf((0, n._)`${O} === "string" || ${O} === "number"
              || ${O} === "boolean" || ${b} === null`).assign(A, (0, n._)`[${b}]`);
      }
    }
  }
  function g({ gen: d, parentData: _, parentDataProperty: S }, h) {
    d.if((0, n._)`${_} !== undefined`, () => d.assign((0, n._)`${_}[${S}]`, h));
  }
  function p(d, _, S, h = s.Correct) {
    const b = h === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let k;
    switch (d) {
      case "null":
        return (0, n._)`${_} ${b} null`;
      case "array":
        k = (0, n._)`Array.isArray(${_})`;
        break;
      case "object":
        k = (0, n._)`${_} && typeof ${_} == "object" && !Array.isArray(${_})`;
        break;
      case "integer":
        k = O((0, n._)`!(${_} % 1) && !isNaN(${_})`);
        break;
      case "number":
        k = O();
        break;
      default:
        return (0, n._)`typeof ${_} ${b} ${d}`;
    }
    return h === s.Correct ? k : (0, n.not)(k);
    function O(A = n.nil) {
      return (0, n.and)((0, n._)`typeof ${_} == "number"`, A, S ? (0, n._)`isFinite(${_})` : n.nil);
    }
  }
  Ie.checkDataType = p;
  function v(d, _, S, h) {
    if (d.length === 1)
      return p(d[0], _, S, h);
    let b;
    const k = (0, o.toHash)(d);
    if (k.array && k.object) {
      const O = (0, n._)`typeof ${_} != "object"`;
      b = k.null ? O : (0, n._)`!${_} || ${O}`, delete k.null, delete k.array, delete k.object;
    } else
      b = n.nil;
    k.number && delete k.integer;
    for (const O in k)
      b = (0, n.and)(b, p(O, _, S, h));
    return b;
  }
  Ie.checkDataTypes = v;
  const w = {
    message: ({ schema: d }) => `must be ${d}`,
    params: ({ schema: d, schemaValue: _ }) => typeof d == "string" ? (0, n._)`{type: ${d}}` : (0, n._)`{type: ${_}}`
  };
  function f(d) {
    const _ = m(d);
    (0, r.reportError)(_, w);
  }
  Ie.reportTypeError = f;
  function m(d) {
    const { gen: _, data: S, schema: h } = d, b = (0, o.schemaRefOrVal)(d, h, "type");
    return {
      gen: _,
      keyword: "type",
      data: S,
      schema: h.type,
      schemaCode: b,
      schemaValue: b,
      parentSchema: h,
      params: {},
      it: d
    };
  }
  return Ie;
}
var Lt = {}, Vs;
function qm() {
  if (Vs) return Lt;
  Vs = 1, Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe();
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
var Qe = {}, de = {}, Zs;
function et() {
  if (Zs) return de;
  Zs = 1, Object.defineProperty(de, "__esModule", { value: !0 }), de.validateUnion = de.validateArray = de.usePattern = de.callValidateCode = de.schemaProperties = de.allSchemaProperties = de.noPropertyInData = de.propertyInData = de.isOwnProperty = de.hasPropFunc = de.reportMissingProp = de.checkMissingProp = de.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = /* @__PURE__ */ ht(), n = /* @__PURE__ */ oe();
  function o(d, _) {
    const { gen: S, data: h, it: b } = d;
    S.if(l(S, h, _, b.opts.ownProperties), () => {
      d.setParams({ missingProperty: (0, e._)`${_}` }, !0), d.error();
    });
  }
  de.checkReportMissingProp = o;
  function s({ gen: d, data: _, it: { opts: S } }, h, b) {
    return (0, e.or)(...h.map((k) => (0, e.and)(l(d, _, k, S.ownProperties), (0, e._)`${b} = ${k}`)));
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
  function c(d, _, S) {
    return (0, e._)`${i(d)}.call(${_}, ${S})`;
  }
  de.isOwnProperty = c;
  function u(d, _, S, h) {
    const b = (0, e._)`${_}${(0, e.getProperty)(S)} !== undefined`;
    return h ? (0, e._)`${b} && ${c(d, _, S)}` : b;
  }
  de.propertyInData = u;
  function l(d, _, S, h) {
    const b = (0, e._)`${_}${(0, e.getProperty)(S)} === undefined`;
    return h ? (0, e.or)(b, (0, e.not)(c(d, _, S))) : b;
  }
  de.noPropertyInData = l;
  function y(d) {
    return d ? Object.keys(d).filter((_) => _ !== "__proto__") : [];
  }
  de.allSchemaProperties = y;
  function g(d, _) {
    return y(_).filter((S) => !(0, t.alwaysValidSchema)(d, _[S]));
  }
  de.schemaProperties = g;
  function p({ schemaCode: d, data: _, it: { gen: S, topSchemaRef: h, schemaPath: b, errorPath: k }, it: O }, A, V, q) {
    const Z = q ? (0, e._)`${d}, ${_}, ${h}${b}` : _, x = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, k)],
      [r.default.parentData, O.parentData],
      [r.default.parentDataProperty, O.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    O.opts.dynamicRef && x.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const H = (0, e._)`${Z}, ${S.object(...x)}`;
    return V !== e.nil ? (0, e._)`${A}.call(${V}, ${H})` : (0, e._)`${A}(${H})`;
  }
  de.callValidateCode = p;
  const v = (0, e._)`new RegExp`;
  function w({ gen: d, it: { opts: _ } }, S) {
    const h = _.unicodeRegExp ? "u" : "", { regExp: b } = _.code, k = b(S, h);
    return d.scopeValue("pattern", {
      key: k.toString(),
      ref: k,
      code: (0, e._)`${b.code === "new RegExp" ? v : (0, n.useFunc)(d, b)}(${S}, ${h})`
    });
  }
  de.usePattern = w;
  function f(d) {
    const { gen: _, data: S, keyword: h, it: b } = d, k = _.name("valid");
    if (b.allErrors) {
      const A = _.let("valid", !0);
      return O(() => _.assign(A, !1)), A;
    }
    return _.var(k, !0), O(() => _.break()), k;
    function O(A) {
      const V = _.const("len", (0, e._)`${S}.length`);
      _.forRange("i", 0, V, (q) => {
        d.subschema({
          keyword: h,
          dataProp: q,
          dataPropType: t.Type.Num
        }, k), _.if((0, e.not)(k), A);
      });
    }
  }
  de.validateArray = f;
  function m(d) {
    const { gen: _, schema: S, keyword: h, it: b } = d;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((V) => (0, t.alwaysValidSchema)(b, V)) && !b.opts.unevaluated)
      return;
    const O = _.let("valid", !1), A = _.name("_valid");
    _.block(() => S.forEach((V, q) => {
      const Z = d.subschema({
        keyword: h,
        schemaProp: q,
        compositeRule: !0
      }, A);
      _.assign(O, (0, e._)`${O} || ${A}`), d.mergeValidEvaluated(Z, A) || _.if((0, e.not)(O));
    })), d.result(O, () => d.reset(), () => d.error(!0));
  }
  return de.validateUnion = m, de;
}
var Ls;
function Mm() {
  if (Ls) return Qe;
  Ls = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.validateKeywordUsage = Qe.validSchemaType = Qe.funcKeywordCode = Qe.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ht(), r = /* @__PURE__ */ et(), n = /* @__PURE__ */ Sn();
  function o(g, p) {
    const { gen: v, keyword: w, schema: f, parentSchema: m, it: d } = g, _ = p.macro.call(d.self, f, m, d), S = u(v, w, _);
    d.opts.validateSchema !== !1 && d.self.validateSchema(_, !0);
    const h = v.name("valid");
    g.subschema({
      schema: _,
      schemaPath: e.nil,
      errSchemaPath: `${d.errSchemaPath}/${w}`,
      topSchemaRef: S,
      compositeRule: !0
    }, h), g.pass(h, () => g.error(!0));
  }
  Qe.macroKeywordCode = o;
  function s(g, p) {
    var v;
    const { gen: w, keyword: f, schema: m, parentSchema: d, $data: _, it: S } = g;
    c(S, p);
    const h = !_ && p.compile ? p.compile.call(S.self, m, d, S) : p.validate, b = u(w, f, h), k = w.let("valid");
    g.block$data(k, O), g.ok((v = p.valid) !== null && v !== void 0 ? v : k);
    function O() {
      if (p.errors === !1)
        q(), p.modifying && a(g), Z(() => g.error());
      else {
        const x = p.async ? A() : V();
        p.modifying && a(g), Z(() => i(g, x));
      }
    }
    function A() {
      const x = w.let("ruleErrs", null);
      return w.try(() => q((0, e._)`await `), (H) => w.assign(k, !1).if((0, e._)`${H} instanceof ${S.ValidationError}`, () => w.assign(x, (0, e._)`${H}.errors`), () => w.throw(H))), x;
    }
    function V() {
      const x = (0, e._)`${b}.errors`;
      return w.assign(x, null), q(e.nil), x;
    }
    function q(x = p.async ? (0, e._)`await ` : e.nil) {
      const H = S.opts.passContext ? t.default.this : t.default.self, se = !("compile" in p && !_ || p.schema === !1);
      w.assign(k, (0, e._)`${x}${(0, r.callValidateCode)(g, b, H, se)}`, p.modifying);
    }
    function Z(x) {
      var H;
      w.if((0, e.not)((H = p.valid) !== null && H !== void 0 ? H : k), x);
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
      const S = `keyword "${m}" value is invalid at path "${w}": ` + v.errorsText(f.validateSchema.errors);
      if (p.validateSchema === "log")
        v.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return Qe.validateKeywordUsage = y, Qe;
}
var ot = {}, Fs;
function Am() {
  if (Fs) return ot;
  Fs = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.extendSubschemaMode = ot.extendSubschemaData = ot.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe();
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
  ot.getSubschema = r;
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
  ot.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: u, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), u !== void 0 && (s.createErrors = u), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return ot.extendSubschemaMode = o, ot;
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
var Vn = { exports: {} }, Hs;
function Um() {
  if (Hs) return Vn.exports;
  Hs = 1;
  var e = Vn.exports = function(n, o, s) {
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
  return Vn.exports;
}
var Ks;
function kn() {
  if (Ks) return qe;
  Ks = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.getSchemaRefs = qe.resolveUrl = qe.normalizeId = qe._getFullPath = qe.getFullPath = qe.inlineRef = void 0;
  const e = /* @__PURE__ */ oe(), t = _c(), r = Um(), n = /* @__PURE__ */ new Set([
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
    const { schemaId: m, uriResolver: d } = this.opts, _ = y(w[m] || f), S = { "": _ }, h = c(d, _, !1), b = {}, k = /* @__PURE__ */ new Set();
    return r(w, { allKeys: !0 }, (V, q, Z, x) => {
      if (x === void 0)
        return;
      const H = h + q;
      let se = S[x];
      typeof V[m] == "string" && (se = Ee.call(this, V[m])), Te.call(this, V.$anchor), Te.call(this, V.$dynamicAnchor), S[q] = se;
      function Ee(ie) {
        const Ae = this.opts.uriResolver.resolve;
        if (ie = y(se ? Ae(se, ie) : ie), k.has(ie))
          throw A(ie);
        k.add(ie);
        let U = this.refs[ie];
        return typeof U == "string" && (U = this.refs[U]), typeof U == "object" ? O(V, U.schema, ie) : ie !== y(H) && (ie[0] === "#" ? (O(V, b[ie], ie), b[ie] = V) : this.refs[ie] = H), ie;
      }
      function Te(ie) {
        if (typeof ie == "string") {
          if (!p.test(ie))
            throw new Error(`invalid anchor "${ie}"`);
          Ee.call(this, `#${ie}`);
        }
      }
    }), b;
    function O(V, q, Z) {
      if (q !== void 0 && !t(V, q))
        throw A(Z);
    }
    function A(V) {
      return new Error(`reference "${V}" resolves to more than one schema`);
    }
  }
  return qe.getSchemaRefs = v, qe;
}
var Js;
function En() {
  if (Js) return rt;
  Js = 1, Object.defineProperty(rt, "__esModule", { value: !0 }), rt.getData = rt.KeywordCxt = rt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ jm(), t = /* @__PURE__ */ sn(), r = /* @__PURE__ */ mc(), n = /* @__PURE__ */ sn(), o = /* @__PURE__ */ qm(), s = /* @__PURE__ */ Mm(), a = /* @__PURE__ */ Am(), i = /* @__PURE__ */ ee(), c = /* @__PURE__ */ ht(), u = /* @__PURE__ */ kn(), l = /* @__PURE__ */ oe(), y = /* @__PURE__ */ Sn();
  function g(R) {
    if (h(R) && (k(R), S(R))) {
      f(R);
      return;
    }
    p(R, () => (0, e.topBoolOrEmptySchema)(R));
  }
  rt.validateFunctionCode = g;
  function p({ gen: R, validateName: C, schema: M, schemaEnv: D, opts: G }, te) {
    G.code.es5 ? R.func(C, (0, i._)`${c.default.data}, ${c.default.valCxt}`, D.$async, () => {
      R.code((0, i._)`"use strict"; ${d(M, G)}`), w(R, G), R.code(te);
    }) : R.func(C, (0, i._)`${c.default.data}, ${v(G)}`, D.$async, () => R.code(d(M, G)).code(te));
  }
  function v(R) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${R.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function w(R, C) {
    R.if(c.default.valCxt, () => {
      R.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), R.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), R.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), R.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), C.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      R.var(c.default.instancePath, (0, i._)`""`), R.var(c.default.parentData, (0, i._)`undefined`), R.var(c.default.parentDataProperty, (0, i._)`undefined`), R.var(c.default.rootData, c.default.data), C.dynamicRef && R.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function f(R) {
    const { schema: C, opts: M, gen: D } = R;
    p(R, () => {
      M.$comment && C.$comment && x(R), V(R), D.let(c.default.vErrors, null), D.let(c.default.errors, 0), M.unevaluated && m(R), O(R), H(R);
    });
  }
  function m(R) {
    const { gen: C, validateName: M } = R;
    R.evaluated = C.const("evaluated", (0, i._)`${M}.evaluated`), C.if((0, i._)`${R.evaluated}.dynamicProps`, () => C.assign((0, i._)`${R.evaluated}.props`, (0, i._)`undefined`)), C.if((0, i._)`${R.evaluated}.dynamicItems`, () => C.assign((0, i._)`${R.evaluated}.items`, (0, i._)`undefined`));
  }
  function d(R, C) {
    const M = typeof R == "object" && R[C.schemaId];
    return M && (C.code.source || C.code.process) ? (0, i._)`/*# sourceURL=${M} */` : i.nil;
  }
  function _(R, C) {
    if (h(R) && (k(R), S(R))) {
      b(R, C);
      return;
    }
    (0, e.boolOrEmptySchema)(R, C);
  }
  function S({ schema: R, self: C }) {
    if (typeof R == "boolean")
      return !R;
    for (const M in R)
      if (C.RULES.all[M])
        return !0;
    return !1;
  }
  function h(R) {
    return typeof R.schema != "boolean";
  }
  function b(R, C) {
    const { schema: M, gen: D, opts: G } = R;
    G.$comment && M.$comment && x(R), q(R), Z(R);
    const te = D.const("_errs", c.default.errors);
    O(R, te), D.var(C, (0, i._)`${te} === ${c.default.errors}`);
  }
  function k(R) {
    (0, l.checkUnknownRules)(R), A(R);
  }
  function O(R, C) {
    if (R.opts.jtd)
      return Ee(R, [], !1, C);
    const M = (0, t.getSchemaTypes)(R.schema), D = (0, t.coerceAndCheckDataType)(R, M);
    Ee(R, M, !D, C);
  }
  function A(R) {
    const { schema: C, errSchemaPath: M, opts: D, self: G } = R;
    C.$ref && D.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(C, G.RULES) && G.logger.warn(`$ref: keywords ignored in schema at path "${M}"`);
  }
  function V(R) {
    const { schema: C, opts: M } = R;
    C.default !== void 0 && M.useDefaults && M.strictSchema && (0, l.checkStrictMode)(R, "default is ignored in the schema root");
  }
  function q(R) {
    const C = R.schema[R.opts.schemaId];
    C && (R.baseId = (0, u.resolveUrl)(R.opts.uriResolver, R.baseId, C));
  }
  function Z(R) {
    if (R.schema.$async && !R.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function x({ gen: R, schemaEnv: C, schema: M, errSchemaPath: D, opts: G }) {
    const te = M.$comment;
    if (G.$comment === !0)
      R.code((0, i._)`${c.default.self}.logger.log(${te})`);
    else if (typeof G.$comment == "function") {
      const Pe = (0, i.str)`${D}/$comment`, Be = R.scopeValue("root", { ref: C.root });
      R.code((0, i._)`${c.default.self}.opts.$comment(${te}, ${Pe}, ${Be}.schema)`);
    }
  }
  function H(R) {
    const { gen: C, schemaEnv: M, validateName: D, ValidationError: G, opts: te } = R;
    M.$async ? C.if((0, i._)`${c.default.errors} === 0`, () => C.return(c.default.data), () => C.throw((0, i._)`new ${G}(${c.default.vErrors})`)) : (C.assign((0, i._)`${D}.errors`, c.default.vErrors), te.unevaluated && se(R), C.return((0, i._)`${c.default.errors} === 0`));
  }
  function se({ gen: R, evaluated: C, props: M, items: D }) {
    M instanceof i.Name && R.assign((0, i._)`${C}.props`, M), D instanceof i.Name && R.assign((0, i._)`${C}.items`, D);
  }
  function Ee(R, C, M, D) {
    const { gen: G, schema: te, data: Pe, allErrors: Be, opts: Ue, self: De } = R, { RULES: Re } = De;
    if (te.$ref && (Ue.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(te, Re))) {
      G.block(() => J(R, "$ref", Re.all.$ref.definition));
      return;
    }
    Ue.jtd || ie(R, C), G.block(() => {
      for (const Ke of Re.rules)
        bt(Ke);
      bt(Re.post);
    });
    function bt(Ke) {
      (0, r.shouldUseGroup)(te, Ke) && (Ke.type ? (G.if((0, n.checkDataType)(Ke.type, Pe, Ue.strictNumbers)), Te(R, Ke), C.length === 1 && C[0] === Ke.type && M && (G.else(), (0, n.reportTypeError)(R)), G.endIf()) : Te(R, Ke), Be || G.if((0, i._)`${c.default.errors} === ${D || 0}`));
    }
  }
  function Te(R, C) {
    const { gen: M, schema: D, opts: { useDefaults: G } } = R;
    G && (0, o.assignDefaults)(R, C.type), M.block(() => {
      for (const te of C.rules)
        (0, r.shouldUseRule)(D, te) && J(R, te.keyword, te.definition, C.type);
    });
  }
  function ie(R, C) {
    R.schemaEnv.meta || !R.opts.strictTypes || (Ae(R, C), R.opts.allowUnionTypes || U(R, C), P(R, R.dataTypes));
  }
  function Ae(R, C) {
    if (C.length) {
      if (!R.dataTypes.length) {
        R.dataTypes = C;
        return;
      }
      C.forEach((M) => {
        I(R.dataTypes, M) || E(R, `type "${M}" not allowed by context "${R.dataTypes.join(",")}"`);
      }), $(R, C);
    }
  }
  function U(R, C) {
    C.length > 1 && !(C.length === 2 && C.includes("null")) && E(R, "use allowUnionTypes to allow union type keyword");
  }
  function P(R, C) {
    const M = R.self.RULES.all;
    for (const D in M) {
      const G = M[D];
      if (typeof G == "object" && (0, r.shouldUseRule)(R.schema, G)) {
        const { type: te } = G.definition;
        te.length && !te.some((Pe) => z(C, Pe)) && E(R, `missing type "${te.join(",")}" for keyword "${D}"`);
      }
    }
  }
  function z(R, C) {
    return R.includes(C) || C === "number" && R.includes("integer");
  }
  function I(R, C) {
    return R.includes(C) || C === "integer" && R.includes("number");
  }
  function $(R, C) {
    const M = [];
    for (const D of R.dataTypes)
      I(C, D) ? M.push(D) : C.includes("integer") && D === "number" && M.push("integer");
    R.dataTypes = M;
  }
  function E(R, C) {
    const M = R.schemaEnv.baseId + R.errSchemaPath;
    C += ` at "${M}" (strictTypes)`, (0, l.checkStrictMode)(R, C, R.opts.strictTypes);
  }
  class j {
    constructor(C, M, D) {
      if ((0, s.validateKeywordUsage)(C, M, D), this.gen = C.gen, this.allErrors = C.allErrors, this.keyword = D, this.data = C.data, this.schema = C.schema[D], this.$data = M.$data && C.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(C, this.schema, D, this.$data), this.schemaType = M.schemaType, this.parentSchema = C.schema, this.params = {}, this.it = C, this.def = M, this.$data)
        this.schemaCode = C.gen.const("vSchema", ne(this.$data, C));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, M.schemaType, M.allowUndefined))
        throw new Error(`${D} value must be ${JSON.stringify(M.schemaType)}`);
      ("code" in M ? M.trackErrors : M.errors !== !1) && (this.errsCount = C.gen.const("_errs", c.default.errors));
    }
    result(C, M, D) {
      this.failResult((0, i.not)(C), M, D);
    }
    failResult(C, M, D) {
      this.gen.if(C), D ? D() : this.error(), M ? (this.gen.else(), M(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(C, M) {
      this.failResult((0, i.not)(C), void 0, M);
    }
    fail(C) {
      if (C === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(C), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(C) {
      if (!this.$data)
        return this.fail(C);
      const { schemaCode: M } = this;
      this.fail((0, i._)`${M} !== undefined && (${(0, i.or)(this.invalid$data(), C)})`);
    }
    error(C, M, D) {
      if (M) {
        this.setParams(M), this._error(C, D), this.setParams({});
        return;
      }
      this._error(C, D);
    }
    _error(C, M) {
      (C ? y.reportExtraError : y.reportError)(this, this.def.error, M);
    }
    $dataError() {
      (0, y.reportError)(this, this.def.$dataError || y.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, y.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(C) {
      this.allErrors || this.gen.if(C);
    }
    setParams(C, M) {
      M ? Object.assign(this.params, C) : this.params = C;
    }
    block$data(C, M, D = i.nil) {
      this.gen.block(() => {
        this.check$data(C, D), M();
      });
    }
    check$data(C = i.nil, M = i.nil) {
      if (!this.$data)
        return;
      const { gen: D, schemaCode: G, schemaType: te, def: Pe } = this;
      D.if((0, i.or)((0, i._)`${G} === undefined`, M)), C !== i.nil && D.assign(C, !0), (te.length || Pe.validateSchema) && (D.elseIf(this.invalid$data()), this.$dataError(), C !== i.nil && D.assign(C, !1)), D.else();
    }
    invalid$data() {
      const { gen: C, schemaCode: M, schemaType: D, def: G, it: te } = this;
      return (0, i.or)(Pe(), Be());
      function Pe() {
        if (D.length) {
          if (!(M instanceof i.Name))
            throw new Error("ajv implementation error");
          const Ue = Array.isArray(D) ? D : [D];
          return (0, i._)`${(0, n.checkDataTypes)(Ue, M, te.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function Be() {
        if (G.validateSchema) {
          const Ue = C.scopeValue("validate$data", { ref: G.validateSchema });
          return (0, i._)`!${Ue}(${M})`;
        }
        return i.nil;
      }
    }
    subschema(C, M) {
      const D = (0, a.getSubschema)(this.it, C);
      (0, a.extendSubschemaData)(D, this.it, C), (0, a.extendSubschemaMode)(D, C);
      const G = { ...this.it, ...D, items: void 0, props: void 0 };
      return _(G, M), G;
    }
    mergeEvaluated(C, M) {
      const { it: D, gen: G } = this;
      D.opts.unevaluated && (D.props !== !0 && C.props !== void 0 && (D.props = l.mergeEvaluated.props(G, C.props, D.props, M)), D.items !== !0 && C.items !== void 0 && (D.items = l.mergeEvaluated.items(G, C.items, D.items, M)));
    }
    mergeValidEvaluated(C, M) {
      const { it: D, gen: G } = this;
      if (D.opts.unevaluated && (D.props !== !0 || D.items !== !0))
        return G.if(M, () => this.mergeEvaluated(C, i.Name)), !0;
    }
  }
  rt.KeywordCxt = j;
  function J(R, C, M, D) {
    const G = new j(R, M, C);
    "code" in M ? M.code(G, D) : G.$data && M.validate ? (0, s.funcKeywordCode)(G, M) : "macro" in M ? (0, s.macroKeywordCode)(G, M) : (M.compile || M.validate) && (0, s.funcKeywordCode)(G, M);
  }
  const B = /^\/(?:[^~]|~0|~1)*$/, ae = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ne(R, { dataLevel: C, dataNames: M, dataPathArr: D }) {
    let G, te;
    if (R === "")
      return c.default.rootData;
    if (R[0] === "/") {
      if (!B.test(R))
        throw new Error(`Invalid JSON-pointer: ${R}`);
      G = R, te = c.default.rootData;
    } else {
      const De = ae.exec(R);
      if (!De)
        throw new Error(`Invalid JSON-pointer: ${R}`);
      const Re = +De[1];
      if (G = De[2], G === "#") {
        if (Re >= C)
          throw new Error(Ue("property/index", Re));
        return D[C - Re];
      }
      if (Re > C)
        throw new Error(Ue("data", Re));
      if (te = M[C - Re], !G)
        return te;
    }
    let Pe = te;
    const Be = G.split("/");
    for (const De of Be)
      De && (te = (0, i._)`${te}${(0, i.getProperty)((0, l.unescapeJsonPointer)(De))}`, Pe = (0, i._)`${Pe} && ${te}`);
    return Pe;
    function Ue(De, Re) {
      return `Cannot access ${De} ${Re} levels up, current level is ${C}`;
    }
  }
  return rt.getData = ne, rt;
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
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Qo(), r = /* @__PURE__ */ ht(), n = /* @__PURE__ */ kn(), o = /* @__PURE__ */ oe(), s = /* @__PURE__ */ En();
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
    const d = (0, n.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: _, lines: S } = this.opts.code, { ownProperties: h } = this.opts, b = new e.CodeGen(this.scope, { es5: _, lines: S, ownProperties: h });
    let k;
    f.$async && (k = b.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const O = b.scopeName("validate");
    f.validateName = O;
    const A = {
      gen: b,
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
      topSchemaRef: b.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: O,
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
    let V;
    try {
      this._compilations.add(f), (0, s.validateFunctionCode)(A), b.optimize(this.opts.code.optimize);
      const q = b.toString();
      V = `${b.scopeRefs(r.default.scope)}return ${q}`, this.opts.code.process && (V = this.opts.code.process(V, f));
      const x = new Function(`${r.default.self}`, `${r.default.scope}`, V)(this, this.scope.get());
      if (this.scope.value(O, { ref: x }), x.errors = null, x.schema = f.schema, x.schemaEnv = f, f.$async && (x.$async = !0), this.opts.code.source === !0 && (x.source = { validateName: O, validateCode: q, scopeValues: b._values }), this.opts.unevaluated) {
        const { props: H, items: se } = A;
        x.evaluated = {
          props: H instanceof e.Name ? void 0 : H,
          items: se instanceof e.Name ? void 0 : se,
          dynamicProps: H instanceof e.Name,
          dynamicItems: se instanceof e.Name
        }, x.source && (x.source.evaluated = (0, e.stringify)(x.evaluated));
      }
      return f.validate = x, f;
    } catch (q) {
      throw delete f.validate, delete f.validateName, V && this.logger.error("Error compiling schema, function code:", V), q;
    } finally {
      this._compilations.delete(f);
    }
  }
  Fe.compileSchema = i;
  function c(f, m, d) {
    var _;
    d = (0, n.resolveUrl)(this.opts.uriResolver, m, d);
    const S = f.refs[d];
    if (S)
      return S;
    let h = g.call(this, f, d);
    if (h === void 0) {
      const b = (_ = f.localRefs) === null || _ === void 0 ? void 0 : _[d], { schemaId: k } = this.opts;
      b && (h = new a({ schema: b, schemaId: k, root: f, baseId: m }));
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
    let S = (0, n.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && _ === S)
      return w.call(this, d, f);
    const h = (0, n.normalizeId)(_), b = this.refs[h] || this.schemas[h];
    if (typeof b == "string") {
      const k = p.call(this, f, b);
      return typeof (k == null ? void 0 : k.schema) != "object" ? void 0 : w.call(this, d, k);
    }
    if (typeof (b == null ? void 0 : b.schema) == "object") {
      if (b.validate || i.call(this, b), h === (0, n.normalizeId)(m)) {
        const { schema: k } = b, { schemaId: O } = this.opts, A = k[O];
        return A && (S = (0, n.resolveUrl)(this.opts.uriResolver, S, A)), new a({ schema: k, schemaId: O, root: f, baseId: S });
      }
      return w.call(this, d, b);
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
    var S;
    if (((S = f.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const k of f.fragment.slice(1).split("/")) {
      if (typeof d == "boolean")
        return;
      const O = d[(0, o.unescapeFragment)(k)];
      if (O === void 0)
        return;
      d = O;
      const A = typeof d == "object" && d[this.opts.schemaId];
      !v.has(k) && A && (m = (0, n.resolveUrl)(this.opts.uriResolver, m, A));
    }
    let h;
    if (typeof d != "boolean" && d.$ref && !(0, o.schemaHasRulesButRef)(d, this.RULES)) {
      const k = (0, n.resolveUrl)(this.opts.uriResolver, m, d.$ref);
      h = p.call(this, _, k);
    }
    const { schemaId: b } = this.opts;
    if (h = h || new a({ schema: d, schemaId: b, root: _, baseId: m }), h.schema !== h.root.schema)
      return h;
  }
  return Fe;
}
const Dm = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Vm = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Zm = "object", Lm = ["$data"], Fm = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, xm = !1, Hm = {
  $id: Dm,
  description: Vm,
  type: Zm,
  required: Lm,
  properties: Fm,
  additionalProperties: xm
};
var pr = {}, Ft = { exports: {} }, Zn, Qs;
function gc() {
  if (Qs) return Zn;
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
    for (let S = 0; S < g.length; S++) {
      const h = g[S];
      if (!(h === "[" || h === "]"))
        if (h === ":") {
          if (m === !0 && (d = !0), !_(f, w, v))
            break;
          if (++p > 7) {
            v.error = !0;
            break;
          }
          S > 0 && g[S - 1] === ":" && (m = !0), w.push(":");
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
  return Zn = {
    nonSimpleDomain: n,
    recomposeAuthority: y,
    normalizeComponentEncoding: l,
    removeDotSegments: u,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: i,
    stringArrayToHexStripped: r
  }, Zn;
}
var Ln, Ys;
function Km() {
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
    const b = String(h.scheme).toLowerCase() === "https";
    return (h.port === (b ? 443 : 80) || h.port === "") && (h.port = void 0), h.path || (h.path = "/"), h;
  }
  function i(h) {
    return h.secure = o(h), h.resourceName = (h.path || "/") + (h.query ? "?" + h.query : ""), h.path = void 0, h.query = void 0, h;
  }
  function c(h) {
    if ((h.port === (o(h) ? 443 : 80) || h.port === "") && (h.port = void 0), typeof h.secure == "boolean" && (h.scheme = h.secure ? "wss" : "ws", h.secure = void 0), h.resourceName) {
      const [b, k] = h.resourceName.split("?");
      h.path = b && b !== "/" ? b : void 0, h.query = k, h.resourceName = void 0;
    }
    return h.fragment = void 0, h;
  }
  function u(h, b) {
    if (!h.path)
      return h.error = "URN can not be parsed", h;
    const k = h.path.match(t);
    if (k) {
      const O = b.scheme || h.scheme || "urn";
      h.nid = k[1].toLowerCase(), h.nss = k[2];
      const A = `${O}:${b.nid || h.nid}`, V = S(A);
      h.path = void 0, V && (h = V.parse(h, b));
    } else
      h.error = h.error || "URN can not be parsed.";
    return h;
  }
  function l(h, b) {
    if (h.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const k = b.scheme || h.scheme || "urn", O = h.nid.toLowerCase(), A = `${k}:${b.nid || O}`, V = S(A);
    V && (h = V.serialize(h, b));
    const q = h, Z = h.nss;
    return q.path = `${O || b.nid}:${Z}`, b.skipEscape = !0, q;
  }
  function y(h, b) {
    const k = h;
    return k.uuid = k.nss, k.nss = void 0, !b.tolerant && (!k.uuid || !e(k.uuid)) && (k.error = k.error || "UUID is not valid."), k;
  }
  function g(h) {
    const b = h;
    return b.nss = (h.uuid || "").toLowerCase(), b;
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
  function S(h) {
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
    getSchemeHandler: S
  }, Ln;
}
var Xs;
function Jm() {
  if (Xs) return Ft.exports;
  Xs = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizeComponentEncoding: n, isIPv4: o, nonSimpleDomain: s } = gc(), { SCHEMES: a, getSchemeHandler: i } = Km();
  function c(f, m) {
    return typeof f == "string" ? f = /** @type {T} */
    g(v(f, m), m) : typeof f == "object" && (f = /** @type {T} */
    v(g(f, m), m)), f;
  }
  function u(f, m, d) {
    const _ = d ? Object.assign({ scheme: "null" }, d) : { scheme: "null" }, S = l(v(f, _), v(m, _), _, !0);
    return _.skipEscape = !0, g(S, _);
  }
  function l(f, m, d, _) {
    const S = {};
    return _ || (f = v(g(f, d), d), m = v(g(m, d), d)), d = d || {}, !d.tolerant && m.scheme ? (S.scheme = m.scheme, S.userinfo = m.userinfo, S.host = m.host, S.port = m.port, S.path = t(m.path || ""), S.query = m.query) : (m.userinfo !== void 0 || m.host !== void 0 || m.port !== void 0 ? (S.userinfo = m.userinfo, S.host = m.host, S.port = m.port, S.path = t(m.path || ""), S.query = m.query) : (m.path ? (m.path[0] === "/" ? S.path = t(m.path) : ((f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) && !f.path ? S.path = "/" + m.path : f.path ? S.path = f.path.slice(0, f.path.lastIndexOf("/") + 1) + m.path : S.path = m.path, S.path = t(S.path)), S.query = m.query) : (S.path = f.path, m.query !== void 0 ? S.query = m.query : S.query = f.query), S.userinfo = f.userinfo, S.host = f.host, S.port = f.port), S.scheme = f.scheme), S.fragment = m.fragment, S;
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
    }, _ = Object.assign({}, m), S = [], h = i(_.scheme || d.scheme);
    h && h.serialize && h.serialize(d, _), d.path !== void 0 && (_.skipEscape ? d.path = unescape(d.path) : (d.path = escape(d.path), d.scheme !== void 0 && (d.path = d.path.split("%3A").join(":")))), _.reference !== "suffix" && d.scheme && S.push(d.scheme, ":");
    const b = r(d);
    if (b !== void 0 && (_.reference !== "suffix" && S.push("//"), S.push(b), d.path && d.path[0] !== "/" && S.push("/")), d.path !== void 0) {
      let k = d.path;
      !_.absolutePath && (!h || !h.absolutePath) && (k = t(k)), b === void 0 && k[0] === "/" && k[1] === "/" && (k = "/%2F" + k.slice(2)), S.push(k);
    }
    return d.query !== void 0 && S.push("?", d.query), d.fragment !== void 0 && S.push("#", d.fragment), S.join("");
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
    let S = !1;
    d.reference === "suffix" && (d.scheme ? f = d.scheme + ":" + f : f = "//" + f);
    const h = f.match(p);
    if (h) {
      if (_.scheme = h[1], _.userinfo = h[3], _.host = h[4], _.port = parseInt(h[5], 10), _.path = h[6] || "", _.query = h[7], _.fragment = h[8], isNaN(_.port) && (_.port = h[5]), _.host)
        if (o(_.host) === !1) {
          const O = e(_.host);
          _.host = O.host.toLowerCase(), S = O.isIPV6;
        } else
          S = !0;
      _.scheme === void 0 && _.userinfo === void 0 && _.host === void 0 && _.port === void 0 && _.query === void 0 && !_.path ? _.reference = "same-document" : _.scheme === void 0 ? _.reference = "relative" : _.fragment === void 0 ? _.reference = "absolute" : _.reference = "uri", d.reference && d.reference !== "suffix" && d.reference !== _.reference && (_.error = _.error || "URI is not a " + d.reference + " reference.");
      const b = i(d.scheme || _.scheme);
      if (!d.unicodeSupport && (!b || !b.unicodeSupport) && _.host && (d.domainHost || b && b.domainHost) && S === !1 && s(_.host))
        try {
          _.host = URL.domainToASCII(_.host.toLowerCase());
        } catch (k) {
          _.error = _.error || "Host's domain name can not be converted to ASCII: " + k;
        }
      (!b || b && !b.skipNormalize) && (f.indexOf("%") !== -1 && (_.scheme !== void 0 && (_.scheme = unescape(_.scheme)), _.host !== void 0 && (_.host = unescape(_.host))), _.path && (_.path = escape(unescape(_.path))), _.fragment && (_.fragment = encodeURI(decodeURIComponent(_.fragment)))), b && b.parse && b.parse(_, d);
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
function Wm() {
  if (ea) return pr;
  ea = 1, Object.defineProperty(pr, "__esModule", { value: !0 });
  const e = Jm();
  return e.code = 'require("ajv/dist/runtime/uri").default', pr.default = e, pr;
}
var ta;
function Gm() {
  return ta || (ta = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ En();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = /* @__PURE__ */ ee();
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
    const n = /* @__PURE__ */ Qo(), o = /* @__PURE__ */ Tn(), s = /* @__PURE__ */ pc(), a = /* @__PURE__ */ Yo(), i = /* @__PURE__ */ ee(), c = /* @__PURE__ */ kn(), u = /* @__PURE__ */ sn(), l = /* @__PURE__ */ oe(), y = Hm, g = /* @__PURE__ */ Wm(), p = (U, P) => new RegExp(U, P);
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
      var P, z, I, $, E, j, J, B, ae, ne, R, C, M, D, G, te, Pe, Be, Ue, De, Re, bt, Ke, Pn, Rn;
      const Zt = U.strict, In = (P = U.code) === null || P === void 0 ? void 0 : P.optimize, ns = In === !0 || In === void 0 ? 1 : In || 0, os = (I = (z = U.code) === null || z === void 0 ? void 0 : z.regExp) !== null && I !== void 0 ? I : p, Oc = ($ = U.uriResolver) !== null && $ !== void 0 ? $ : g.default;
      return {
        strictSchema: (j = (E = U.strictSchema) !== null && E !== void 0 ? E : Zt) !== null && j !== void 0 ? j : !0,
        strictNumbers: (B = (J = U.strictNumbers) !== null && J !== void 0 ? J : Zt) !== null && B !== void 0 ? B : !0,
        strictTypes: (ne = (ae = U.strictTypes) !== null && ae !== void 0 ? ae : Zt) !== null && ne !== void 0 ? ne : "log",
        strictTuples: (C = (R = U.strictTuples) !== null && R !== void 0 ? R : Zt) !== null && C !== void 0 ? C : "log",
        strictRequired: (D = (M = U.strictRequired) !== null && M !== void 0 ? M : Zt) !== null && D !== void 0 ? D : !1,
        code: U.code ? { ...U.code, optimize: ns, regExp: os } : { optimize: ns, regExp: os },
        loopRequired: (G = U.loopRequired) !== null && G !== void 0 ? G : d,
        loopEnum: (te = U.loopEnum) !== null && te !== void 0 ? te : d,
        meta: (Pe = U.meta) !== null && Pe !== void 0 ? Pe : !0,
        messages: (Be = U.messages) !== null && Be !== void 0 ? Be : !0,
        inlineRefs: (Ue = U.inlineRefs) !== null && Ue !== void 0 ? Ue : !0,
        schemaId: (De = U.schemaId) !== null && De !== void 0 ? De : "$id",
        addUsedSchema: (Re = U.addUsedSchema) !== null && Re !== void 0 ? Re : !0,
        validateSchema: (bt = U.validateSchema) !== null && bt !== void 0 ? bt : !0,
        validateFormats: (Ke = U.validateFormats) !== null && Ke !== void 0 ? Ke : !0,
        unicodeRegExp: (Pn = U.unicodeRegExp) !== null && Pn !== void 0 ? Pn : !0,
        int32range: (Rn = U.int32range) !== null && Rn !== void 0 ? Rn : !0,
        uriResolver: Oc
      };
    }
    class S {
      constructor(P = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), P = this.opts = { ...P, ..._(P) };
        const { es5: z, lines: I } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: w, es5: z, lines: I }), this.logger = Z(P.logger);
        const $ = P.validateFormats;
        P.validateFormats = !1, this.RULES = (0, s.getRules)(), h.call(this, f, P, "NOT SUPPORTED"), h.call(this, m, P, "DEPRECATED", "warn"), this._metaOpts = V.call(this), P.formats && O.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), P.keywords && A.call(this, P.keywords), typeof P.meta == "object" && this.addMetaSchema(P.meta), k.call(this), P.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: P, meta: z, schemaId: I } = this.opts;
        let $ = y;
        I === "id" && ($ = { ...y }, $.id = $.$id, delete $.$id), z && P && this.addMetaSchema($, $[I], !1);
      }
      defaultMeta() {
        const { meta: P, schemaId: z } = this.opts;
        return this.opts.defaultMeta = typeof P == "object" ? P[z] || P : void 0;
      }
      validate(P, z) {
        let I;
        if (typeof P == "string") {
          if (I = this.getSchema(P), !I)
            throw new Error(`no schema with key or ref "${P}"`);
        } else
          I = this.compile(P);
        const $ = I(z);
        return "$async" in I || (this.errors = I.errors), $;
      }
      compile(P, z) {
        const I = this._addSchema(P, z);
        return I.validate || this._compileSchemaEnv(I);
      }
      compileAsync(P, z) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: I } = this.opts;
        return $.call(this, P, z);
        async function $(ne, R) {
          await E.call(this, ne.$schema);
          const C = this._addSchema(ne, R);
          return C.validate || j.call(this, C);
        }
        async function E(ne) {
          ne && !this.getSchema(ne) && await $.call(this, { $ref: ne }, !0);
        }
        async function j(ne) {
          try {
            return this._compileSchemaEnv(ne);
          } catch (R) {
            if (!(R instanceof o.default))
              throw R;
            return J.call(this, R), await B.call(this, R.missingSchema), j.call(this, ne);
          }
        }
        function J({ missingSchema: ne, missingRef: R }) {
          if (this.refs[ne])
            throw new Error(`AnySchema ${ne} is loaded but ${R} cannot be resolved`);
        }
        async function B(ne) {
          const R = await ae.call(this, ne);
          this.refs[ne] || await E.call(this, R.$schema), this.refs[ne] || this.addSchema(R, ne, z);
        }
        async function ae(ne) {
          const R = this._loading[ne];
          if (R)
            return R;
          try {
            return await (this._loading[ne] = I(ne));
          } finally {
            delete this._loading[ne];
          }
        }
      }
      // Adds schema to the instance
      addSchema(P, z, I, $ = this.opts.validateSchema) {
        if (Array.isArray(P)) {
          for (const j of P)
            this.addSchema(j, void 0, I, $);
          return this;
        }
        let E;
        if (typeof P == "object") {
          const { schemaId: j } = this.opts;
          if (E = P[j], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${j} must be string`);
        }
        return z = (0, c.normalizeId)(z || E), this._checkUnique(z), this.schemas[z] = this._addSchema(P, I, z, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(P, z, I = this.opts.validateSchema) {
        return this.addSchema(P, z, !0, I), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(P, z) {
        if (typeof P == "boolean")
          return !0;
        let I;
        if (I = P.$schema, I !== void 0 && typeof I != "string")
          throw new Error("$schema must be a string");
        if (I = I || this.opts.defaultMeta || this.defaultMeta(), !I)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(I, P);
        if (!$ && z) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return $;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(P) {
        let z;
        for (; typeof (z = b.call(this, P)) == "string"; )
          P = z;
        if (z === void 0) {
          const { schemaId: I } = this.opts, $ = new a.SchemaEnv({ schema: {}, schemaId: I });
          if (z = a.resolveSchema.call(this, $, P), !z)
            return;
          this.refs[P] = z;
        }
        return z.validate || this._compileSchemaEnv(z);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(P) {
        if (P instanceof RegExp)
          return this._removeAllSchemas(this.schemas, P), this._removeAllSchemas(this.refs, P), this;
        switch (typeof P) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const z = b.call(this, P);
            return typeof z == "object" && this._cache.delete(z.schema), delete this.schemas[P], delete this.refs[P], this;
          }
          case "object": {
            const z = P;
            this._cache.delete(z);
            let I = P[this.opts.schemaId];
            return I && (I = (0, c.normalizeId)(I), delete this.schemas[I], delete this.refs[I]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(P) {
        for (const z of P)
          this.addKeyword(z);
        return this;
      }
      addKeyword(P, z) {
        let I;
        if (typeof P == "string")
          I = P, typeof z == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), z.keyword = I);
        else if (typeof P == "object" && z === void 0) {
          if (z = P, I = z.keyword, Array.isArray(I) && !I.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (H.call(this, I, z), !z)
          return (0, l.eachItem)(I, (E) => se.call(this, E)), this;
        Te.call(this, z);
        const $ = {
          ...z,
          type: (0, u.getJSONTypes)(z.type),
          schemaType: (0, u.getJSONTypes)(z.schemaType)
        };
        return (0, l.eachItem)(I, $.type.length === 0 ? (E) => se.call(this, E, $) : (E) => $.type.forEach((j) => se.call(this, E, $, j))), this;
      }
      getKeyword(P) {
        const z = this.RULES.all[P];
        return typeof z == "object" ? z.definition : !!z;
      }
      // Remove keyword
      removeKeyword(P) {
        const { RULES: z } = this;
        delete z.keywords[P], delete z.all[P];
        for (const I of z.rules) {
          const $ = I.rules.findIndex((E) => E.keyword === P);
          $ >= 0 && I.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(P, z) {
        return typeof z == "string" && (z = new RegExp(z)), this.formats[P] = z, this;
      }
      errorsText(P = this.errors, { separator: z = ", ", dataVar: I = "data" } = {}) {
        return !P || P.length === 0 ? "No errors" : P.map(($) => `${I}${$.instancePath} ${$.message}`).reduce(($, E) => $ + z + E);
      }
      $dataMetaSchema(P, z) {
        const I = this.RULES.all;
        P = JSON.parse(JSON.stringify(P));
        for (const $ of z) {
          const E = $.split("/").slice(1);
          let j = P;
          for (const J of E)
            j = j[J];
          for (const J in I) {
            const B = I[J];
            if (typeof B != "object")
              continue;
            const { $data: ae } = B.definition, ne = j[J];
            ae && ne && (j[J] = Ae(ne));
          }
        }
        return P;
      }
      _removeAllSchemas(P, z) {
        for (const I in P) {
          const $ = P[I];
          (!z || z.test(I)) && (typeof $ == "string" ? delete P[I] : $ && !$.meta && (this._cache.delete($.schema), delete P[I]));
        }
      }
      _addSchema(P, z, I, $ = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let j;
        const { schemaId: J } = this.opts;
        if (typeof P == "object")
          j = P[J];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof P != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let B = this._cache.get(P);
        if (B !== void 0)
          return B;
        I = (0, c.normalizeId)(j || I);
        const ae = c.getSchemaRefs.call(this, P, I);
        return B = new a.SchemaEnv({ schema: P, schemaId: J, meta: z, baseId: I, localRefs: ae }), this._cache.set(B.schema, B), E && !I.startsWith("#") && (I && this._checkUnique(I), this.refs[I] = B), $ && this.validateSchema(P, !0), B;
      }
      _checkUnique(P) {
        if (this.schemas[P] || this.refs[P])
          throw new Error(`schema with key or id "${P}" already exists`);
      }
      _compileSchemaEnv(P) {
        if (P.meta ? this._compileMetaSchema(P) : a.compileSchema.call(this, P), !P.validate)
          throw new Error("ajv implementation error");
        return P.validate;
      }
      _compileMetaSchema(P) {
        const z = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, P);
        } finally {
          this.opts = z;
        }
      }
    }
    S.ValidationError = n.default, S.MissingRefError = o.default, e.default = S;
    function h(U, P, z, I = "error") {
      for (const $ in U) {
        const E = $;
        E in P && this.logger[I](`${z}: option ${$}. ${U[E]}`);
      }
    }
    function b(U) {
      return U = (0, c.normalizeId)(U), this.schemas[U] || this.refs[U];
    }
    function k() {
      const U = this.opts.schemas;
      if (U)
        if (Array.isArray(U))
          this.addSchema(U);
        else
          for (const P in U)
            this.addSchema(U[P], P);
    }
    function O() {
      for (const U in this.opts.formats) {
        const P = this.opts.formats[U];
        P && this.addFormat(U, P);
      }
    }
    function A(U) {
      if (Array.isArray(U)) {
        this.addVocabulary(U);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const P in U) {
        const z = U[P];
        z.keyword || (z.keyword = P), this.addKeyword(z);
      }
    }
    function V() {
      const U = { ...this.opts };
      for (const P of v)
        delete U[P];
      return U;
    }
    const q = { log() {
    }, warn() {
    }, error() {
    } };
    function Z(U) {
      if (U === !1)
        return q;
      if (U === void 0)
        return console;
      if (U.log && U.warn && U.error)
        return U;
      throw new Error("logger must implement log, warn and error methods");
    }
    const x = /^[a-z_$][a-z0-9_$:-]*$/i;
    function H(U, P) {
      const { RULES: z } = this;
      if ((0, l.eachItem)(U, (I) => {
        if (z.keywords[I])
          throw new Error(`Keyword ${I} is already defined`);
        if (!x.test(I))
          throw new Error(`Keyword ${I} has invalid name`);
      }), !!P && P.$data && !("code" in P || "validate" in P))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function se(U, P, z) {
      var I;
      const $ = P == null ? void 0 : P.post;
      if (z && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let j = $ ? E.post : E.rules.find(({ type: B }) => B === z);
      if (j || (j = { type: z, rules: [] }, E.rules.push(j)), E.keywords[U] = !0, !P)
        return;
      const J = {
        keyword: U,
        definition: {
          ...P,
          type: (0, u.getJSONTypes)(P.type),
          schemaType: (0, u.getJSONTypes)(P.schemaType)
        }
      };
      P.before ? Ee.call(this, j, J, P.before) : j.rules.push(J), E.all[U] = J, (I = P.implements) === null || I === void 0 || I.forEach((B) => this.addKeyword(B));
    }
    function Ee(U, P, z) {
      const I = U.rules.findIndex(($) => $.keyword === z);
      I >= 0 ? U.rules.splice(I, 0, P) : (U.rules.push(P), this.logger.warn(`rule ${z} is not defined`));
    }
    function Te(U) {
      let { metaSchema: P } = U;
      P !== void 0 && (U.$data && this.opts.$data && (P = Ae(P)), U.validateSchema = this.compile(P, !0));
    }
    const ie = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Ae(U) {
      return { anyOf: [U, ie] };
    }
  }(jn)), jn;
}
var mr = {}, _r = {}, gr = {}, ra;
function Bm() {
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
var at = {}, na;
function Qm() {
  if (na) return at;
  na = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.callRef = at.getValidate = void 0;
  const e = /* @__PURE__ */ Tn(), t = /* @__PURE__ */ et(), r = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ht(), o = /* @__PURE__ */ Yo(), s = /* @__PURE__ */ oe(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(u) {
      const { gen: l, schema: y, it: g } = u, { baseId: p, schemaEnv: v, validateName: w, opts: f, self: m } = g, { root: d } = v;
      if ((y === "#" || y === "#/") && p === d.baseId)
        return S();
      const _ = o.resolveRef.call(m, d, p, y);
      if (_ === void 0)
        throw new e.default(g.opts.uriResolver, p, y);
      if (_ instanceof o.SchemaEnv)
        return h(_);
      return b(_);
      function S() {
        if (v === d)
          return c(u, w, v, v.$async);
        const k = l.scopeValue("root", { ref: d });
        return c(u, (0, r._)`${k}.validate`, d, d.$async);
      }
      function h(k) {
        const O = i(u, k);
        c(u, O, k, k.$async);
      }
      function b(k) {
        const O = l.scopeValue("schema", f.code.source === !0 ? { ref: k, code: (0, r.stringify)(k) } : { ref: k }), A = l.name("valid"), V = u.subschema({
          schema: k,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: O,
          errSchemaPath: y
        }, A);
        u.mergeEvaluated(V), u.ok(A);
      }
    }
  };
  function i(u, l) {
    const { gen: y } = u;
    return l.validate ? y.scopeValue("validate", { ref: l.validate }) : (0, r._)`${y.scopeValue("wrapper", { ref: l })}.validate`;
  }
  at.getValidate = i;
  function c(u, l, y, g) {
    const { gen: p, it: v } = u, { allErrors: w, schemaEnv: f, opts: m } = v, d = m.passContext ? n.default.this : r.nil;
    g ? _() : S();
    function _() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const k = p.let("valid");
      p.try(() => {
        p.code((0, r._)`await ${(0, t.callValidateCode)(u, l, d)}`), b(l), w || p.assign(k, !0);
      }, (O) => {
        p.if((0, r._)`!(${O} instanceof ${v.ValidationError})`, () => p.throw(O)), h(O), w || p.assign(k, !1);
      }), u.ok(k);
    }
    function S() {
      u.result((0, t.callValidateCode)(u, l, d), () => b(l), () => h(l));
    }
    function h(k) {
      const O = (0, r._)`${k}.errors`;
      p.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${O} : ${n.default.vErrors}.concat(${O})`), p.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function b(k) {
      var O;
      if (!v.opts.unevaluated)
        return;
      const A = (O = y == null ? void 0 : y.validate) === null || O === void 0 ? void 0 : O.evaluated;
      if (v.props !== !0)
        if (A && !A.dynamicProps)
          A.props !== void 0 && (v.props = s.mergeEvaluated.props(p, A.props, v.props));
        else {
          const V = p.var("props", (0, r._)`${k}.evaluated.props`);
          v.props = s.mergeEvaluated.props(p, V, v.props, r.Name);
        }
      if (v.items !== !0)
        if (A && !A.dynamicItems)
          A.items !== void 0 && (v.items = s.mergeEvaluated.items(p, A.items, v.items));
        else {
          const V = p.var("items", (0, r._)`${k}.evaluated.items`);
          v.items = s.mergeEvaluated.items(p, V, v.items, r.Name);
        }
    }
  }
  return at.callRef = c, at.default = a, at;
}
var oa;
function Ym() {
  if (oa) return _r;
  oa = 1, Object.defineProperty(_r, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bm(), t = /* @__PURE__ */ Qm(), r = [
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
function Xm() {
  if (sa) return vr;
  sa = 1, Object.defineProperty(vr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = e.operators, r = {
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
function e_() {
  if (aa) return wr;
  aa = 1, Object.defineProperty(wr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), r = {
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
function t_() {
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
function r_() {
  if (ca) return $r;
  ca = 1, Object.defineProperty($r, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = /* @__PURE__ */ t_(), o = {
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
function n_() {
  if (ua) return Sr;
  ua = 1, Object.defineProperty(Sr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ oe(), r = /* @__PURE__ */ ee(), o = {
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
function o_() {
  if (la) return kr;
  la = 1, Object.defineProperty(kr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), r = {
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
function s_() {
  if (da) return Er;
  da = 1, Object.defineProperty(Er, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ ee(), r = /* @__PURE__ */ oe(), o = {
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
        for (const S of i)
          if ((d == null ? void 0 : d[S]) === void 0 && !_.has(S)) {
            const h = y.schemaEnv.baseId + y.errSchemaPath, b = `required property "${S}" is not defined at "${h}" (strictRequired)`;
            (0, r.checkStrictMode)(y, b, y.opts.strictRequired);
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
function a_() {
  if (fa) return Tr;
  fa = 1, Object.defineProperty(Tr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), r = {
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
function i_() {
  if (pa) return Pr;
  pa = 1, Object.defineProperty(Pr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ sn(), t = /* @__PURE__ */ ee(), r = /* @__PURE__ */ oe(), n = /* @__PURE__ */ Xo(), s = {
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
        const S = i.let("i", (0, t._)`${c}.length`), h = i.let("j");
        a.setParams({ i: S, j: h }), i.assign(v, !0), i.if((0, t._)`${S} > 1`, () => (m() ? d : _)(S, h));
      }
      function m() {
        return w.length > 0 && !w.some((S) => S === "object" || S === "array");
      }
      function d(S, h) {
        const b = i.name("item"), k = (0, e.checkDataTypes)(w, b, p.opts.strictNumbers, e.DataType.Wrong), O = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${S}--;`, () => {
          i.let(b, (0, t._)`${c}[${S}]`), i.if(k, (0, t._)`continue`), w.length > 1 && i.if((0, t._)`typeof ${b} == "string"`, (0, t._)`${b} += "_"`), i.if((0, t._)`typeof ${O}[${b}] == "number"`, () => {
            i.assign(h, (0, t._)`${O}[${b}]`), a.error(), i.assign(v, !1).break();
          }).code((0, t._)`${O}[${b}] = ${S}`);
        });
      }
      function _(S, h) {
        const b = (0, r.useFunc)(i, n.default), k = i.name("outer");
        i.label(k).for((0, t._)`;${S}--;`, () => i.for((0, t._)`${h} = ${S}; ${h}--;`, () => i.if((0, t._)`${b}(${c}[${S}], ${c}[${h}])`, () => {
          a.error(), i.assign(v, !1).break(k);
        })));
      }
    }
  };
  return Pr.default = s, Pr;
}
var Ir = {}, ma;
function c_() {
  if (ma) return Ir;
  ma = 1, Object.defineProperty(Ir, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Xo(), o = {
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
function u_() {
  if (_a) return Cr;
  _a = 1, Object.defineProperty(Cr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = /* @__PURE__ */ Xo(), o = {
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
        w = (0, e.or)(...u.map((_, S) => m(d, S)));
      }
      s.pass(w);
      function f() {
        a.assign(w, !1), a.forOf("v", l, (d) => a.if((0, e._)`${v()}(${i}, ${d})`, () => a.assign(w, !0).break()));
      }
      function m(d, _) {
        const S = u[_];
        return typeof S == "object" && S !== null ? (0, e._)`${v()}(${i}, ${d}[${_}])` : (0, e._)`${i} === ${S}`;
      }
    }
  };
  return Cr.default = o, Cr;
}
var ga;
function l_() {
  if (ga) return yr;
  ga = 1, Object.defineProperty(yr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Xm(), t = /* @__PURE__ */ e_(), r = /* @__PURE__ */ r_(), n = /* @__PURE__ */ n_(), o = /* @__PURE__ */ o_(), s = /* @__PURE__ */ s_(), a = /* @__PURE__ */ a_(), i = /* @__PURE__ */ i_(), c = /* @__PURE__ */ c_(), u = /* @__PURE__ */ u_(), l = [
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
var Or = {}, St = {}, ya;
function yc() {
  if (ya) return St;
  ya = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = {
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
  return St.validateAdditionalItems = o, St.default = n, St;
}
var Nr = {}, kt = {}, va;
function vc() {
  if (va) return kt;
  va = 1, Object.defineProperty(kt, "__esModule", { value: !0 }), kt.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = /* @__PURE__ */ et(), n = {
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
      const { opts: m, errSchemaPath: d } = g, _ = i.length, S = _ === f.minItems && (_ === f.maxItems || f[a] === !1);
      if (m.strictTuples && !S) {
        const h = `"${y}" is ${_}-tuple, but minItems or maxItems/${a} are not specified or different at path "${d}"`;
        (0, t.checkStrictMode)(g, h, m.strictTuples);
      }
    }
  }
  return kt.validateTuple = o, kt.default = n, kt;
}
var wa;
function d_() {
  if (wa) return Nr;
  wa = 1, Object.defineProperty(Nr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vc(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return Nr.default = t, Nr;
}
var zr = {}, $a;
function f_() {
  if ($a) return zr;
  $a = 1, Object.defineProperty(zr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), r = /* @__PURE__ */ et(), n = /* @__PURE__ */ yc(), s = {
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
  return zr.default = s, zr;
}
var jr = {}, ba;
function h_() {
  if (ba) return jr;
  ba = 1, Object.defineProperty(jr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = {
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
        const _ = s.name("_valid"), S = s.let("count", 0);
        m(_, () => s.if(_, () => d(S)));
      }
      function m(_, S) {
        s.forRange("i", 0, v, (h) => {
          o.subschema({
            keyword: "contains",
            dataProp: h,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, _), S();
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
function p_() {
  return Sa || (Sa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), r = /* @__PURE__ */ oe(), n = /* @__PURE__ */ et();
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
var qr = {}, ka;
function m_() {
  if (ka) return qr;
  ka = 1, Object.defineProperty(qr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = {
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
  return qr.default = n, qr;
}
var Mr = {}, Ea;
function wc() {
  if (Ea) return Mr;
  Ea = 1, Object.defineProperty(Mr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ ee(), r = /* @__PURE__ */ ht(), n = /* @__PURE__ */ oe(), s = {
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
        i.forIn("key", l, (b) => {
          !w.length && !f.length ? S(b) : i.if(d(b), () => S(b));
        });
      }
      function d(b) {
        let k;
        if (w.length > 8) {
          const O = (0, n.schemaRefOrVal)(g, u.properties, "properties");
          k = (0, e.isOwnProperty)(i, O, b);
        } else w.length ? k = (0, t.or)(...w.map((O) => (0, t._)`${b} === ${O}`)) : k = t.nil;
        return f.length && (k = (0, t.or)(k, ...f.map((O) => (0, t._)`${(0, e.usePattern)(a, O)}.test(${b})`))), (0, t.not)(k);
      }
      function _(b) {
        i.code((0, t._)`delete ${l}[${b}]`);
      }
      function S(b) {
        if (v.removeAdditional === "all" || v.removeAdditional && c === !1) {
          _(b);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: b }), a.error(), p || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)(g, c)) {
          const k = i.name("valid");
          v.removeAdditional === "failing" ? (h(b, k, !1), i.if((0, t.not)(k), () => {
            a.reset(), _(b);
          })) : (h(b, k), p || i.if((0, t.not)(k), () => i.break()));
        }
      }
      function h(b, k, O) {
        const A = {
          keyword: "additionalProperties",
          dataProp: b,
          dataPropType: n.Type.Str
        };
        O === !1 && Object.assign(A, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(A, k);
      }
    }
  };
  return Mr.default = s, Mr;
}
var Ar = {}, Ta;
function __() {
  if (Ta) return Ar;
  Ta = 1, Object.defineProperty(Ar, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ En(), t = /* @__PURE__ */ et(), r = /* @__PURE__ */ oe(), n = /* @__PURE__ */ wc(), o = {
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
function g_() {
  if (Pa) return Ur;
  Pa = 1, Object.defineProperty(Ur, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ et(), t = /* @__PURE__ */ ee(), r = /* @__PURE__ */ oe(), n = /* @__PURE__ */ oe(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: u, it: l } = s, { opts: y } = l, g = (0, e.allSchemaProperties)(i), p = g.filter((S) => (0, r.alwaysValidSchema)(l, i[S]));
      if (g.length === 0 || p.length === g.length && (!l.opts.unevaluated || l.props === !0))
        return;
      const v = y.strictSchema && !y.allowMatchingProperties && u.properties, w = a.name("valid");
      l.props !== !0 && !(l.props instanceof t.Name) && (l.props = (0, n.evaluatedPropsToName)(a, l.props));
      const { props: f } = l;
      m();
      function m() {
        for (const S of g)
          v && d(S), l.allErrors ? _(S) : (a.var(w, !0), _(S), a.if(w));
      }
      function d(S) {
        for (const h in v)
          new RegExp(S).test(h) && (0, r.checkStrictMode)(l, `property ${h} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function _(S) {
        a.forIn("key", c, (h) => {
          a.if((0, t._)`${(0, e.usePattern)(s, S)}.test(${h})`, () => {
            const b = p.includes(S);
            b || s.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: h,
              dataPropType: n.Type.Str
            }, w), l.opts.unevaluated && f !== !0 ? a.assign((0, t._)`${f}[${h}]`, !0) : !b && !l.allErrors && a.if((0, t.not)(w), () => a.break());
          });
        });
      }
    }
  };
  return Ur.default = o, Ur;
}
var Dr = {}, Ra;
function y_() {
  if (Ra) return Dr;
  Ra = 1, Object.defineProperty(Dr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
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
var Vr = {}, Ia;
function v_() {
  if (Ia) return Vr;
  Ia = 1, Object.defineProperty(Vr, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ et()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Vr.default = t, Vr;
}
var Zr = {}, Ca;
function w_() {
  if (Ca) return Zr;
  Ca = 1, Object.defineProperty(Zr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = {
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
  return Zr.default = n, Zr;
}
var Lr = {}, Oa;
function $_() {
  if (Oa) return Lr;
  Oa = 1, Object.defineProperty(Lr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
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
var Fr = {}, Na;
function b_() {
  if (Na) return Fr;
  Na = 1, Object.defineProperty(Fr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ oe(), n = {
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
var xr = {}, za;
function S_() {
  if (za) return xr;
  za = 1, Object.defineProperty(xr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ oe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: n, it: o }) {
      n.if === void 0 && (0, e.checkStrictMode)(o, `"${r}" without "if" is ignored`);
    }
  };
  return xr.default = t, xr;
}
var ja;
function k_() {
  if (ja) return Or;
  ja = 1, Object.defineProperty(Or, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yc(), t = /* @__PURE__ */ d_(), r = /* @__PURE__ */ vc(), n = /* @__PURE__ */ f_(), o = /* @__PURE__ */ h_(), s = /* @__PURE__ */ p_(), a = /* @__PURE__ */ m_(), i = /* @__PURE__ */ wc(), c = /* @__PURE__ */ __(), u = /* @__PURE__ */ g_(), l = /* @__PURE__ */ y_(), y = /* @__PURE__ */ v_(), g = /* @__PURE__ */ w_(), p = /* @__PURE__ */ $_(), v = /* @__PURE__ */ b_(), w = /* @__PURE__ */ S_();
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
var Hr = {}, Kr = {}, qa;
function E_() {
  if (qa) return Kr;
  qa = 1, Object.defineProperty(Kr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), r = {
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
        }), d = s.const("fDef", (0, e._)`${m}[${u}]`), _ = s.let("fType"), S = s.let("format");
        s.if((0, e._)`typeof ${d} == "object" && !(${d} instanceof RegExp)`, () => s.assign(_, (0, e._)`${d}.type || "string"`).assign(S, (0, e._)`${d}.validate`), () => s.assign(_, (0, e._)`"string"`).assign(S, d)), n.fail$data((0, e.or)(h(), b()));
        function h() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${u} && !${S}`;
        }
        function b() {
          const k = p.$async ? (0, e._)`(${d}.async ? await ${S}(${a}) : ${S}(${a}))` : (0, e._)`${S}(${a})`, O = (0, e._)`(typeof ${S} == "function" ? ${k} : ${S}.test(${a}))`;
          return (0, e._)`${S} && ${S} !== true && ${_} === ${o} && !${O}`;
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
        const [d, _, S] = b(m);
        d === o && n.pass(k());
        function h() {
          if (y.strictSchema === !1) {
            v.logger.warn(O());
            return;
          }
          throw new Error(O());
          function O() {
            return `unknown format "${c}" ignored in schema at path "${g}"`;
          }
        }
        function b(O) {
          const A = O instanceof RegExp ? (0, e.regexpCode)(O) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, V = s.scopeValue("formats", { key: c, ref: O, code: A });
          return typeof O == "object" && !(O instanceof RegExp) ? [O.type || "string", O.validate, (0, e._)`${V}.validate`] : ["string", O, V];
        }
        function k() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!p.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${a})`;
          }
          return typeof _ == "function" ? (0, e._)`${S}(${a})` : (0, e._)`${S}.test(${a})`;
        }
      }
    }
  };
  return Kr.default = r, Kr;
}
var Ma;
function T_() {
  if (Ma) return Hr;
  Ma = 1, Object.defineProperty(Hr, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ E_()).default];
  return Hr.default = t, Hr;
}
var gt = {}, Aa;
function P_() {
  return Aa || (Aa = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.contentVocabulary = gt.metadataVocabulary = void 0, gt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], gt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), gt;
}
var Ua;
function R_() {
  if (Ua) return mr;
  Ua = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ym(), t = /* @__PURE__ */ l_(), r = /* @__PURE__ */ k_(), n = /* @__PURE__ */ T_(), o = /* @__PURE__ */ P_(), s = [
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
function I_() {
  if (Da) return xt;
  Da = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (xt.DiscrError = e = {})), xt;
}
var Va;
function C_() {
  if (Va) return Jr;
  Va = 1, Object.defineProperty(Jr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ I_(), r = /* @__PURE__ */ Yo(), n = /* @__PURE__ */ Tn(), o = /* @__PURE__ */ oe(), a = {
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
        const S = _();
        c.if(!1);
        for (const h in S)
          c.elseIf((0, e._)`${f} === ${h}`), c.assign(w, d(S[h]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: v }), c.endIf();
      }
      function d(S) {
        const h = c.name("valid"), b = i.subschema({ keyword: "oneOf", schemaProp: S }, h);
        return i.mergeEvaluated(b, e.Name), h;
      }
      function _() {
        var S;
        const h = {}, b = O(y);
        let k = !0;
        for (let q = 0; q < p.length; q++) {
          let Z = p[q];
          if (Z != null && Z.$ref && !(0, o.schemaHasRulesButRef)(Z, g.self.RULES)) {
            const H = Z.$ref;
            if (Z = r.resolveRef.call(g.self, g.schemaEnv.root, g.baseId, H), Z instanceof r.SchemaEnv && (Z = Z.schema), Z === void 0)
              throw new n.default(g.opts.uriResolver, g.baseId, H);
          }
          const x = (S = Z == null ? void 0 : Z.properties) === null || S === void 0 ? void 0 : S[v];
          if (typeof x != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${v}"`);
          k = k && (b || O(Z)), A(x, q);
        }
        if (!k)
          throw new Error(`discriminator: "${v}" must be required`);
        return h;
        function O({ required: q }) {
          return Array.isArray(q) && q.includes(v);
        }
        function A(q, Z) {
          if (q.const)
            V(q.const, Z);
          else if (q.enum)
            for (const x of q.enum)
              V(x, Z);
          else
            throw new Error(`discriminator: "properties/${v}" must have "const" or "enum"`);
        }
        function V(q, Z) {
          if (typeof q != "string" || q in h)
            throw new Error(`discriminator: "${v}" values must be unique strings`);
          h[q] = Z;
        }
      }
    }
  };
  return Jr.default = a, Jr;
}
const O_ = "http://json-schema.org/draft-07/schema#", N_ = "http://json-schema.org/draft-07/schema#", z_ = "Core schema meta-schema", j_ = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, q_ = ["object", "boolean"], M_ = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, A_ = {
  $schema: O_,
  $id: N_,
  title: z_,
  definitions: j_,
  type: q_,
  properties: M_,
  default: !0
};
var Za;
function $c() {
  return Za || (Za = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = /* @__PURE__ */ Gm(), n = /* @__PURE__ */ R_(), o = /* @__PURE__ */ C_(), s = A_, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
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
    var l = /* @__PURE__ */ ee();
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
var U_ = /* @__PURE__ */ $c();
const D_ = /* @__PURE__ */ Ya(U_);
var Wr = { exports: {} }, xn = {}, La;
function V_() {
  return La || (La = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(q, Z) {
      return { validate: q, compare: Z };
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
      byte: _,
      // signed 32 bit integer
      int32: { type: "number", validate: b },
      // signed 64 bit integer
      int64: { type: "number", validate: k },
      // C-type float
      float: { type: "number", validate: O },
      // C-type double
      double: { type: "number", validate: O },
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
    function r(q) {
      return q % 4 === 0 && (q % 100 !== 0 || q % 400 === 0);
    }
    const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function s(q) {
      const Z = n.exec(q);
      if (!Z)
        return !1;
      const x = +Z[1], H = +Z[2], se = +Z[3];
      return H >= 1 && H <= 12 && se >= 1 && se <= (H === 2 && r(x) ? 29 : o[H]);
    }
    function a(q, Z) {
      if (q && Z)
        return q > Z ? 1 : q < Z ? -1 : 0;
    }
    const i = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(q) {
      return function(x) {
        const H = i.exec(x);
        if (!H)
          return !1;
        const se = +H[1], Ee = +H[2], Te = +H[3], ie = H[4], Ae = H[5] === "-" ? -1 : 1, U = +(H[6] || 0), P = +(H[7] || 0);
        if (U > 23 || P > 59 || q && !ie)
          return !1;
        if (se <= 23 && Ee <= 59 && Te < 60)
          return !0;
        const z = Ee - P * Ae, I = se - U * Ae - (z < 0 ? 1 : 0);
        return (I === 23 || I === -1) && (z === 59 || z === -1) && Te < 61;
      };
    }
    function u(q, Z) {
      if (!(q && Z))
        return;
      const x = (/* @__PURE__ */ new Date("2020-01-01T" + q)).valueOf(), H = (/* @__PURE__ */ new Date("2020-01-01T" + Z)).valueOf();
      if (x && H)
        return x - H;
    }
    function l(q, Z) {
      if (!(q && Z))
        return;
      const x = i.exec(q), H = i.exec(Z);
      if (x && H)
        return q = x[1] + x[2] + x[3], Z = H[1] + H[2] + H[3], q > Z ? 1 : q < Z ? -1 : 0;
    }
    const y = /t|\s/i;
    function g(q) {
      const Z = c(q);
      return function(H) {
        const se = H.split(y);
        return se.length === 2 && s(se[0]) && Z(se[1]);
      };
    }
    function p(q, Z) {
      if (!(q && Z))
        return;
      const x = new Date(q).valueOf(), H = new Date(Z).valueOf();
      if (x && H)
        return x - H;
    }
    function v(q, Z) {
      if (!(q && Z))
        return;
      const [x, H] = q.split(y), [se, Ee] = Z.split(y), Te = a(x, se);
      if (Te !== void 0)
        return Te || u(H, Ee);
    }
    const w = /\/|:/, f = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function m(q) {
      return w.test(q) && f.test(q);
    }
    const d = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function _(q) {
      return d.lastIndex = 0, d.test(q);
    }
    const S = -2147483648, h = 2 ** 31 - 1;
    function b(q) {
      return Number.isInteger(q) && q <= h && q >= S;
    }
    function k(q) {
      return Number.isInteger(q);
    }
    function O() {
      return !0;
    }
    const A = /[^\\]\\Z/;
    function V(q) {
      if (A.test(q))
        return !1;
      try {
        return new RegExp(q), !0;
      } catch {
        return !1;
      }
    }
  }(xn)), xn;
}
var Hn = {}, Fa;
function Z_() {
  return Fa || (Fa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ $c(), r = /* @__PURE__ */ ee(), n = r.operators, o = {
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
          }), S = c.const("fmt", (0, r._)`${_}[${w.schemaCode}]`);
          i.fail$data((0, r.or)((0, r._)`typeof ${S} != "object"`, (0, r._)`${S} instanceof RegExp`, (0, r._)`typeof ${S}.compare != "function"`, d(S)));
        }
        function m() {
          const _ = w.schema, S = v.formats[_];
          if (!S || S === !0)
            return;
          if (typeof S != "object" || S instanceof RegExp || typeof S.compare != "function")
            throw new Error(`"${y}": format "${_}" does not define "compare" function`);
          const h = c.scopeValue("formats", {
            key: _,
            ref: S,
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
function L_() {
  return xa || (xa = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = V_(), n = Z_(), o = /* @__PURE__ */ ee(), s = new o.Name("fullFormats"), a = new o.Name("fastFormats"), i = (u, l = { keywords: !0 }) => {
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
var F_ = L_();
const x_ = /* @__PURE__ */ Ya(F_);
function H_() {
  const e = new D_({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return x_(e), e;
}
class K_ {
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
    this._ajv = t ?? H_();
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
class J_ {
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
function W_(e, t, r) {
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
function G_(e, t, r) {
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
function B_(e) {
  if (!e)
    return { supportsFormMode: !1, supportsUrlMode: !1 };
  const t = e.form !== void 0, r = e.url !== void 0;
  return { supportsFormMode: t || !t && !r, supportsUrlMode: r };
}
class Q_ extends Nm {
  /**
   * Initializes this client with the given name and version information.
   */
  constructor(t, r) {
    super(r), this._clientInfo = t, this._cachedToolOutputValidators = /* @__PURE__ */ new Map(), this._cachedKnownTaskTools = /* @__PURE__ */ new Set(), this._cachedRequiredTaskTools = /* @__PURE__ */ new Set(), this._listChangedDebounceTimers = /* @__PURE__ */ new Map(), this._capabilities = (r == null ? void 0 : r.capabilities) ?? {}, this._jsonSchemaValidator = (r == null ? void 0 : r.jsonSchemaValidator) ?? new K_(), r != null && r.listChanged && (this._pendingListChangedConfig = r.listChanged);
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
      tasks: new J_(this)
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
    this._capabilities = zm(this._capabilities, t);
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
        var _, S;
        const y = it(dc, u);
        if (!y.success) {
          const h = y.error instanceof Error ? y.error.message : String(y.error);
          throw new Q(Y.InvalidParams, `Invalid elicitation request: ${h}`);
        }
        const { params: g } = y.data;
        g.mode = g.mode ?? "form";
        const { supportsFormMode: p, supportsUrlMode: v } = B_(this._capabilities.elicitation);
        if (g.mode === "form" && !p)
          throw new Q(Y.InvalidParams, "Client does not support form-mode elicitation requests");
        if (g.mode === "url" && !v)
          throw new Q(Y.InvalidParams, "Client does not support URL-mode elicitation requests");
        const w = await Promise.resolve(r(u, l));
        if (g.task) {
          const h = it(er, w);
          if (!h.success) {
            const b = h.error instanceof Error ? h.error.message : String(h.error);
            throw new Q(Y.InvalidParams, `Invalid task creation result: ${b}`);
          }
          return h.data;
        }
        const f = it(fc, w);
        if (!f.success) {
          const h = f.error instanceof Error ? f.error.message : String(f.error);
          throw new Q(Y.InvalidParams, `Invalid elicitation result: ${h}`);
        }
        const m = f.data, d = g.mode === "form" ? g.requestedSchema : void 0;
        if (g.mode === "form" && m.action === "accept" && m.content && d && (S = (_ = this._capabilities.elicitation) == null ? void 0 : _.form) != null && S.applyDefaults)
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
        const y = it(cc, u);
        if (!y.success) {
          const m = y.error instanceof Error ? y.error.message : String(y.error);
          throw new Q(Y.InvalidParams, `Invalid sampling request: ${m}`);
        }
        const { params: g } = y.data, p = await Promise.resolve(r(u, l));
        if (g.task) {
          const m = it(er, p);
          if (!m.success) {
            const d = m.error instanceof Error ? m.error.message : String(m.error);
            throw new Q(Y.InvalidParams, `Invalid task creation result: ${d}`);
          }
          return m.data;
        }
        const w = g.tools || g.toolChoice ? lc : uc, f = it(w, p);
        if (!f.success) {
          const m = f.error instanceof Error ? f.error.message : String(f.error);
          throw new Q(Y.InvalidParams, `Invalid sampling result: ${m}`);
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
        if (!Xh.includes(n.protocolVersion))
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
    W_((n = (r = this._serverCapabilities) == null ? void 0 : r.tasks) == null ? void 0 : n.requests, t, "Server");
  }
  assertTaskHandlerCapability(t) {
    var r;
    this._capabilities && G_((r = this._capabilities.tasks) == null ? void 0 : r.requests, t, "Client");
  }
  async ping(t) {
    return this.request({ method: "ping" }, Ot, t);
  }
  async complete(t, r) {
    return this.request({ method: "completion/complete", params: t }, hc, r);
  }
  async setLoggingLevel(t, r) {
    return this.request({ method: "logging/setLevel", params: { level: t } }, Ot, r);
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
    return this.request({ method: "resources/subscribe", params: t }, Ot, r);
  }
  async unsubscribeResource(t, r) {
    return this.request({ method: "resources/unsubscribe", params: t }, Ot, r);
  }
  /**
   * Calls a tool and waits for the result. Automatically validates structured output if the tool has an outputSchema.
   *
   * For task-based execution with streaming behavior, use client.experimental.tasks.callToolStream() instead.
   */
  async callTool(t, r = bn, n) {
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
    const n = await this.request({ method: "tools/list", params: t }, Bo, r);
    return this.cacheToolMetadata(n.tools), n;
  }
  /**
   * Set up a single list changed handler.
   * @internal
   */
  _setupListChangedHandler(t, r, n, o) {
    const s = Jp.safeParse(n);
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
async function Y_(e) {
  return (await es).getRandomValues(new Uint8Array(e));
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
  const t = await (await es).subtle.digest("SHA-256", new TextEncoder().encode(e));
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
const Ce = sh().superRefine((e, t) => {
  if (!URL.canParse(e))
    return t.addIssue({
      code: Qh.custom,
      message: "URL must be parseable",
      fatal: !0
    }), iu;
}).refine((e) => {
  const t = new URL(e);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), ng = Oe({
  resource: T().url(),
  authorization_servers: L(Ce).optional(),
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
}), bc = Oe({
  issuer: T(),
  authorization_endpoint: Ce,
  token_endpoint: Ce,
  registration_endpoint: Ce.optional(),
  scopes_supported: L(T()).optional(),
  response_types_supported: L(T()),
  response_modes_supported: L(T()).optional(),
  grant_types_supported: L(T()).optional(),
  token_endpoint_auth_methods_supported: L(T()).optional(),
  token_endpoint_auth_signing_alg_values_supported: L(T()).optional(),
  service_documentation: Ce.optional(),
  revocation_endpoint: Ce.optional(),
  revocation_endpoint_auth_methods_supported: L(T()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: L(T()).optional(),
  introspection_endpoint: T().optional(),
  introspection_endpoint_auth_methods_supported: L(T()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: L(T()).optional(),
  code_challenge_methods_supported: L(T()).optional(),
  client_id_metadata_document_supported: fe().optional()
}), og = Oe({
  issuer: T(),
  authorization_endpoint: Ce,
  token_endpoint: Ce,
  userinfo_endpoint: Ce.optional(),
  jwks_uri: Ce,
  registration_endpoint: Ce.optional(),
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
  op_policy_uri: Ce.optional(),
  op_tos_uri: Ce.optional(),
  client_id_metadata_document_supported: fe().optional()
}), sg = F({
  ...og.shape,
  ...bc.pick({
    code_challenge_methods_supported: !0
  }).shape
}), ag = F({
  access_token: T(),
  id_token: T().optional(),
  // Optional for OAuth 2.1, but necessary in OpenID Connect
  token_type: T(),
  expires_in: Yh().optional(),
  scope: T().optional(),
  refresh_token: T().optional()
}).strip(), ig = F({
  error: T(),
  error_description: T().optional(),
  error_uri: T().optional()
}), Ha = Ce.optional().or(W("").transform(() => {
})), cg = F({
  redirect_uris: L(Ce),
  token_endpoint_auth_method: T().optional(),
  grant_types: L(T()).optional(),
  response_types: L(T()).optional(),
  client_name: T().optional(),
  client_uri: Ce.optional(),
  logo_uri: Ha,
  scope: T().optional(),
  contacts: L(T()).optional(),
  tos_uri: Ha,
  policy_uri: T().optional(),
  jwks_uri: Ce.optional(),
  jwks: Eh().optional(),
  software_id: T().optional(),
  software_version: T().optional(),
  software_statement: T().optional()
}).strip(), ug = F({
  client_id: T(),
  client_secret: T().optional(),
  client_id_issued_at: le().optional(),
  client_secret_expires_at: le().optional()
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
class ke extends Error {
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
class no extends ke {
}
no.errorCode = "invalid_request";
class an extends ke {
}
an.errorCode = "invalid_client";
class cn extends ke {
}
cn.errorCode = "invalid_grant";
class un extends ke {
}
un.errorCode = "unauthorized_client";
class oo extends ke {
}
oo.errorCode = "unsupported_grant_type";
class so extends ke {
}
so.errorCode = "invalid_scope";
class ao extends ke {
}
ao.errorCode = "access_denied";
class Ut extends ke {
}
Ut.errorCode = "server_error";
class io extends ke {
}
io.errorCode = "temporarily_unavailable";
class co extends ke {
}
co.errorCode = "unsupported_response_type";
class uo extends ke {
}
uo.errorCode = "unsupported_token_type";
class lo extends ke {
}
lo.errorCode = "invalid_token";
class fo extends ke {
}
fo.errorCode = "method_not_allowed";
class ho extends ke {
}
ho.errorCode = "too_many_requests";
class ln extends ke {
}
ln.errorCode = "invalid_client_metadata";
class po extends ke {
}
po.errorCode = "insufficient_scope";
class mo extends ke {
}
mo.errorCode = "invalid_target";
const hg = {
  [no.errorCode]: no,
  [an.errorCode]: an,
  [cn.errorCode]: cn,
  [un.errorCode]: un,
  [oo.errorCode]: oo,
  [so.errorCode]: so,
  [ao.errorCode]: ao,
  [Ut.errorCode]: Ut,
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
async function Sc(e) {
  const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
  try {
    const n = ig.parse(JSON.parse(r)), { error: o, error_description: s, error_uri: a } = n, i = hg[o] || Ut;
    return new i(s || "", a);
  } catch (n) {
    const o = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${n}. Raw body: ${r}`;
    return new Ut(o);
  }
}
async function wt(e, t) {
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
  var d, _, S, h, b;
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
    const k = await Tg(t, { resourceMetadataUrl: l, fetchFn: s });
    c = k.authorizationServerUrl, u = k.authorizationServerMetadata, i = k.resourceMetadata, await ((S = e.saveDiscoveryState) == null ? void 0 : S.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: u
    }));
  }
  const y = await $g(t, e, i);
  let g = await Promise.resolve(e.clientInformation());
  if (!g) {
    if (r !== void 0)
      throw new Error("Existing OAuth client information is required when exchanging an authorization code");
    const k = (u == null ? void 0 : u.client_id_metadata_document_supported) === !0, O = e.clientMetadataUrl;
    if (O && !wg(O))
      throw new ln(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${O}`);
    if (k && O)
      g = {
        client_id: O
      }, await ((h = e.saveClientInformation) == null ? void 0 : h.call(e, g));
    else {
      if (!e.saveClientInformation)
        throw new Error("OAuth client information must be saveable for dynamic registration");
      const V = await Og(c, {
        metadata: u,
        clientMetadata: e.clientMetadata,
        fetchFn: s
      });
      await e.saveClientInformation(V), g = V;
    }
  }
  const p = !e.redirectUrl;
  if (r !== void 0 || p) {
    const k = await Cg(e, c, {
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
      const k = await Ig(c, {
        metadata: u,
        clientInformation: g,
        refreshToken: v.refresh_token,
        resource: y,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: s
      });
      return await e.saveTokens(k), "AUTHORIZED";
    } catch (k) {
      if (!(!(k instanceof ke) || k instanceof Ut)) throw k;
    }
  const w = e.state ? await e.state() : void 0, { authorizationUrl: f, codeVerifier: m } = await Pg(c, {
    metadata: u,
    clientInformation: g,
    state: w,
    redirectUrl: e.redirectUrl,
    scope: n || ((b = i == null ? void 0 : i.scopes_supported) == null ? void 0 : b.join(" ")) || e.clientMetadata.scope,
    resource: y
  });
  return await e.saveCodeVerifier(m), await e.redirectToAuthorization(f), "REDIRECT";
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
async function ts(e, t, r = fetch) {
  try {
    return await r(e, { headers: t });
  } catch (n) {
    if (n instanceof TypeError)
      return t ? ts(e, void 0, r) : void 0;
    throw n;
  }
}
function bg(e, t = "", r = {}) {
  return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Ka(e, t, r = fetch) {
  return await ts(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function Sg(e, t) {
  return !e || e.status >= 400 && e.status < 500 && t !== "/";
}
async function kg(e, t, r, n) {
  const o = new URL(e), s = (n == null ? void 0 : n.protocolVersion) ?? vn;
  let a;
  if (n != null && n.metadataUrl)
    a = new URL(n.metadataUrl);
  else {
    const c = bg(t, o.pathname);
    a = new URL(c, (n == null ? void 0 : n.metadataServerUrl) ?? o), a.search = o.search;
  }
  let i = await Ka(a, s, r);
  if (!(n != null && n.metadataUrl) && Sg(i, o.pathname)) {
    const c = new URL(`/.well-known/${t}`, o);
    i = await Ka(c, s, r);
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
async function Ec(e, { fetchFn: t = fetch, protocolVersion: r = vn } = {}) {
  var s;
  const n = {
    "MCP-Protocol-Version": r,
    Accept: "application/json"
  }, o = Eg(e);
  for (const { url: a, type: i } of o) {
    const c = await ts(a, n, t);
    if (c) {
      if (!c.ok) {
        if (await ((s = c.body) == null ? void 0 : s.cancel()), c.status >= 400 && c.status < 500)
          continue;
        throw new Error(`HTTP ${c.status} trying to load ${i === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${a}`);
      }
      return i === "oauth" ? bc.parse(await c.json()) : sg.parse(await c.json());
    }
  }
}
async function Tg(e, t) {
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
async function Tc(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: a }) {
  const i = t != null && t.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), c = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  });
  if (s && r.set("resource", s.href), o)
    await o(c, r, i, t);
  else if (n) {
    const l = (t == null ? void 0 : t.token_endpoint_auth_methods_supported) ?? [], y = mg(n, l);
    _g(y, n, c, r);
  }
  const u = await (a ?? fetch)(i, {
    method: "POST",
    headers: c,
    body: r
  });
  if (!u.ok)
    throw await Sc(u);
  return ag.parse(await u.json());
}
async function Ig(e, { metadata: t, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: a }) {
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
async function Cg(e, t, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
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
  return Tc(t, {
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
    throw await Sc(s);
  return lg.parse(await s.json());
}
const Pc = (...e) => (t) => e.reduce((r, n) => n(r), t), Ng = (e) => (t) => (r, n) => e(t, r, n);
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
    const f = a ? w.replace(/^\xEF\xBB\xBF/, "") : w, [m, d] = zg(`${s}${f}`);
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
function zg(e) {
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
function jg(e) {
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
}, rs = (e, t, r) => t.has(e) || Ic("Cannot " + r), re = (e, t, r) => (rs(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Se = (e, t, r) => t.has(e) ? Ic("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), _e = (e, t, r, n) => (rs(e, t, "write to private field"), t.set(e, r), r), st = (e, t, r) => (rs(e, t, "access private method"), r), Ze, vt, Tt, Qr, fn, Bt, Nt, Qt, ct, Pt, jt, Rt, Wt, Ye, go, yo, vo, Ba, wo, $o, Gt, bo, So;
class Yr extends EventTarget {
  constructor(t, r) {
    var n, o;
    super(), Se(this, Ye), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, Se(this, Ze), Se(this, vt), Se(this, Tt), Se(this, Qr), Se(this, fn), Se(this, Bt), Se(this, Nt), Se(this, Qt, null), Se(this, ct), Se(this, Pt), Se(this, jt, null), Se(this, Rt, null), Se(this, Wt, null), Se(this, yo, async (s) => {
      var a;
      re(this, Pt).reset();
      const { body: i, redirected: c, status: u, headers: l } = s;
      if (u === 204) {
        st(this, Ye, Gt).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (c ? _e(this, Tt, new URL(s.url)) : _e(this, Tt, void 0), u !== 200) {
        st(this, Ye, Gt).call(this, `Non-200 status code (${u})`, u);
        return;
      }
      if (!(l.get("content-type") || "").startsWith("text/event-stream")) {
        st(this, Ye, Gt).call(this, 'Invalid content type, expected "text/event-stream"', u);
        return;
      }
      if (re(this, Ze) === this.CLOSED)
        return;
      _e(this, Ze, this.OPEN);
      const y = new Event("open");
      if ((a = re(this, Wt)) == null || a.call(this, y), this.dispatchEvent(y), typeof i != "object" || !i || !("getReader" in i)) {
        st(this, Ye, Gt).call(this, "Invalid response body, expected a web ReadableStream", u), this.close();
        return;
      }
      const g = new TextDecoder(), p = i.getReader();
      let v = !0;
      do {
        const { done: w, value: f } = await p.read();
        f && re(this, Pt).feed(g.decode(f, { stream: !w })), w && (v = !1, re(this, Pt).reset(), st(this, Ye, bo).call(this));
      } while (v);
    }), Se(this, vo, (s) => {
      _e(this, ct, void 0), !(s.name === "AbortError" || s.type === "aborted") && st(this, Ye, bo).call(this, _o(s));
    }), Se(this, wo, (s) => {
      typeof s.id == "string" && _e(this, Qt, s.id);
      const a = new MessageEvent(s.event || "message", {
        data: s.data,
        origin: re(this, Tt) ? re(this, Tt).origin : re(this, vt).origin,
        lastEventId: s.id || ""
      });
      re(this, Rt) && (!s.event || s.event === "message") && re(this, Rt).call(this, a), this.dispatchEvent(a);
    }), Se(this, $o, (s) => {
      _e(this, Bt, s);
    }), Se(this, So, () => {
      _e(this, Nt, void 0), re(this, Ze) === this.CONNECTING && st(this, Ye, go).call(this);
    });
    try {
      if (t instanceof URL)
        _e(this, vt, t);
      else if (typeof t == "string")
        _e(this, vt, new URL(t, qg()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw jg("An invalid or illegal string was specified");
    }
    _e(this, Pt, Rc({
      onEvent: re(this, wo),
      onRetry: re(this, $o)
    })), _e(this, Ze, this.CONNECTING), _e(this, Bt, 3e3), _e(this, fn, (n = r == null ? void 0 : r.fetch) != null ? n : globalThis.fetch), _e(this, Qr, (o = r == null ? void 0 : r.withCredentials) != null ? o : !1), st(this, Ye, go).call(this);
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
    return re(this, Ze);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return re(this, vt).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return re(this, Qr);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return re(this, jt);
  }
  set onerror(t) {
    _e(this, jt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return re(this, Rt);
  }
  set onmessage(t) {
    _e(this, Rt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return re(this, Wt);
  }
  set onopen(t) {
    _e(this, Wt, t);
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
    re(this, Nt) && clearTimeout(re(this, Nt)), re(this, Ze) !== this.CLOSED && (re(this, ct) && re(this, ct).abort(), _e(this, Ze, this.CLOSED), _e(this, ct, void 0));
  }
}
Ze = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
go = function() {
  _e(this, Ze, this.CONNECTING), _e(this, ct, new AbortController()), re(this, fn)(re(this, vt), st(this, Ye, Ba).call(this)).then(re(this, yo)).catch(re(this, vo));
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
    headers: { Accept: "text/event-stream", ...re(this, Qt) ? { "Last-Event-ID": re(this, Qt) } : void 0 },
    cache: "no-store",
    signal: (e = re(this, ct)) == null ? void 0 : e.signal
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
  re(this, Ze) !== this.CLOSED && _e(this, Ze, this.CLOSED);
  const n = new Wa("error", { code: t, message: e });
  (r = re(this, jt)) == null || r.call(this, n), this.dispatchEvent(n);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
bo = function(e, t) {
  var r;
  if (re(this, Ze) === this.CLOSED)
    return;
  _e(this, Ze, this.CONNECTING);
  const n = new Wa("error", { code: t, message: e });
  (r = re(this, jt)) == null || r.call(this, n), this.dispatchEvent(n), _e(this, Nt, setTimeout(re(this, So), re(this, Bt)));
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
function qg() {
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
class Mg extends Error {
  constructor(t, r, n) {
    super(`SSE error: ${r}`), this.code = t, this.event = n;
  }
}
class Ag {
  constructor(t, r) {
    this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = r == null ? void 0 : r.eventSourceInit, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = Cc(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit);
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new Xe("No auth provider");
    let t;
    try {
      t = await wt(this._authProvider, {
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
        const a = new Mg(s.code, s.message, s);
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
    if (await wt(this._authProvider, {
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
          if (this._resourceMetadataUrl = u, this._scope = l, await wt(this._authProvider, {
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
class Ug extends TransformStream {
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
const Dg = {
  initialReconnectionDelay: 1e3,
  maxReconnectionDelay: 3e4,
  reconnectionDelayGrowFactor: 1.5,
  maxRetries: 2
};
class Et extends Error {
  constructor(t, r) {
    super(`Streamable HTTP error: ${r}`), this.code = t;
  }
}
class Vg {
  constructor(t, r) {
    this._hasCompletedAuthFlow = !1, this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = Cc(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit), this._sessionId = r == null ? void 0 : r.sessionId, this._reconnectionOptions = (r == null ? void 0 : r.reconnectionOptions) ?? Dg;
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new Xe("No auth provider");
    let t;
    try {
      t = await wt(this._authProvider, {
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
        throw new Et(i.status, `Failed to open SSE stream: ${i.statusText}`);
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
        const v = t.pipeThrough(new TextDecoderStream()).pipeThrough(new Ug({
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
    if (await wt(this._authProvider, {
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
            throw new Et(401, "Server returned 401 after successful authentication");
          const { resourceMetadataUrl: _, scope: S } = dn(p);
          if (this._resourceMetadataUrl = _, this._scope = S, await wt(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED")
            throw new Xe();
          return this._hasCompletedAuthFlow = !0, this.send(t);
        }
        if (p.status === 403 && this._authProvider) {
          const { resourceMetadataUrl: _, scope: S, error: h } = dn(p);
          if (h === "insufficient_scope") {
            const b = p.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === b)
              throw new Et(403, "Server returned 403 after trying upscoping");
            if (S && (this._scope = S), _ && (this._resourceMetadataUrl = _), this._lastUpscopingHeader = b ?? void 0, await wt(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            }) !== "AUTHORIZED")
              throw new Xe();
            return this.send(t);
          }
        }
        throw new Et(p.status, `Error POSTing to endpoint: ${d}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, p.status === 202) {
        await ((o = p.body) == null ? void 0 : o.cancel()), mp(t) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((d) => {
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
          const d = await p.json(), _ = Array.isArray(d) ? d.map((S) => Gr.parse(S)) : [Gr.parse(d)];
          for (const S of _)
            (s = this.onmessage) == null || s.call(this, S);
        } else
          throw await ((a = p.body) == null ? void 0 : a.cancel()), new Et(-1, `Unexpected content type: ${m}`);
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
          throw new Et(a.status, `Failed to terminate session: ${a.statusText}`);
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
async function Zg(e, t, r, n, o, s) {
  return r.debug(`Connecting to server at: ${e}`), await xg(e, t, r, n, o);
}
async function Lg(e, t) {
  t.debug("Disconnecting from MCP server..."), e.client.onerror = void 0, await e.transport.close(), t.debug("Disconnected from MCP server");
}
async function Qa(e, t, r) {
  const n = new Ag(t, { fetch: Pc(r)(fetch) });
  try {
    await e.connect(n);
  } catch (o) {
    throw await n.close().catch(() => {
    }), o;
  }
  return { client: e, transport: n, transportType: "sse" };
}
async function Fg(e, t, r) {
  const n = new Vg(t, {
    fetch: Pc(r)(fetch)
  });
  return await e.connect(n), { client: e, transport: n, transportType: "streamable-http" };
}
async function xg(e, t, r, n, o) {
  const s = "Please verify the server URL is correct.", a = "Please verify the server URL is correct and the attached authentication headers are supported by the server.", i = "Could not connect to server using HTTP+SSE transport.", c = "Could not connect to server with any available transport.", u = new Q_({
    name: "Mendix Agent Editor",
    version: t
  });
  u.onerror = (p) => {
    r.error("Client error:", p);
  };
  const l = Ng(async (p, v, w) => {
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
    const p = await Fg(u, y, l);
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
async function Hg(e, t) {
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
const Kg = async (e, t, r) => {
  var c;
  const n = ru(e), o = await nu(e, t.endpoint);
  if (!o) {
    n.error(
      `MCP endpoint constant ${(c = t.endpoint) == null ? void 0 : c.qualifiedName} does not have an accessible runtime value or default value.`
    );
    return;
  }
  const s = await e.network.httpProxy.getProxyUrl(o), a = await Zg(
    s,
    t.version ?? "",
    n,
    t.protocolVersion,
    r
  ), i = await Hg(a.client, n);
  return await Lg(a, n), i;
}, Jg = async (e, t) => {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (r.status === "ok")
    return {
      ...t,
      endpoint: {
        documentId: r.selected.id,
        qualifiedName: r.selected.module + "." + r.selected.name
      }
    };
  if (r.status === "none")
    return { ...t, endpoint: void 0 };
}, Ht = async (e, t, r) => {
  switch (e) {
    case "endpoint": {
      const n = await Gc(r, t.endpoint);
      if (n === tt.Required)
        return "Endpoint is required.";
      if (n === tt.NotFound)
        return "Selected constant not found. It might have been deleted or renamed. Please update the constant selection.";
      if (n === tt.Excluded)
        return "Selected constant is excluded from the project and cannot be used.";
      if (n === tt.InvalidType)
        return "Selected constant must be of type string.";
      if (n === tt.PrivateValue || n === tt.EmptyValue)
        return n;
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
          t.authenticationMicroflow.documentId
        );
        if (n === null)
          return "Selected microflow does not exist.";
        if (n.excluded)
          return "Selected microflow is currently excluded from the project and cannot be used.";
        const o = n.objectCollection.objects, s = o == null ? void 0 : o.filter(
          (a) => a.$Type === "Microflows$MicroflowParameterObject"
        );
        if (s && s.length > 0)
          return "Authentication microflow cannot have input parameters.";
        if (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== Lc.HttpHeader)
          return "Authentication microflow must return a list of System.HttpHeader objects.";
      }
      break;
    }
    default:
      return !0;
  }
  return !0;
}, Qn = (e, t, r) => ({ ...e, [t]: r }), Wg = async (e, t, r) => {
  var a;
  let n;
  const o = [
    {
      title: "Getting exposed tools",
      description: "Getting exposed tools",
      action: async () => {
        try {
          return n = await Kg(e, t, r), !0;
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
}, Gg = async (e, t) => {
  const r = await e.ui.elementSelectors.selectDocument({
    query: { elementType: "Microflows$Microflow" },
    allowNone: !0
  });
  return r.status === "ok" ? {
    ...t,
    authenticationMicroflow: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  } : r.status === "none" ? { ...t, authenticationMicroflow: void 0 } : null;
}, Bg = async (e, t, r) => {
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
}, Qg = {
  isValidEndpoint: !0,
  isValidProtocolVersion: !0,
  isValidConnectionTimeout: !0,
  isValidAuthenticationMicroflow: !0
}, Yg = {
  endpoint: "isValidEndpoint",
  protocolVersion: "isValidProtocolVersion",
  connectionTimeoutSeconds: "isValidConnectionTimeout",
  authenticationMicroflow: "isValidAuthenticationMicroflow"
}, Xg = Fc.map(
  (e) => ({
    key: e,
    caption: e
  })
), ey = Nc.div`
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    font-size: 10px;
`, ty = ({
  loadedConsumedMCPService: e,
  studioPro: t,
  updateStudioProDocument: r
}) => {
  var Ae, U;
  const [n, o] = Ve.useState(e), [s, a] = Ve.useState(Qg), [i, c] = Ve.useState([]), [u, l] = Ve.useState(!1), [y, g] = Ve.useState(null), [p, v] = Ve.useState(
    ((Ae = e.connectionTimeoutSeconds) == null ? void 0 : Ae.toString()) ?? ""
  ), [w, f] = Ve.useState([]), m = Ve.useRef(null);
  Ve.useEffect(() => () => {
    m.current && clearTimeout(m.current);
  }, []), Ve.useEffect(() => {
    d("endpoint", n), d("authenticationMicroflow", n);
  }, []);
  const d = async (P, z) => {
    const I = Yg[P];
    if (I) {
      const $ = await Ht(
        P,
        z,
        t
      );
      a((E) => ({ ...E, [I]: $ }));
    }
  };
  Ve.useEffect(() => {
    (async () => {
      const z = {
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
      a(z);
    })();
  }, []);
  const _ = 300, S = (P, z) => {
    m.current && clearTimeout(m.current), m.current = setTimeout(async () => {
      await r(P), await d(z, P);
    }, _);
  }, h = async () => {
    const P = await Jg(t, n);
    P && (o(P), r(P), d("endpoint", P), c([]), l(!1));
  }, b = async () => {
    n.endpoint && ou(t, n.endpoint);
  }, k = (P) => async (z) => {
    o((I) => {
      const $ = Qn(I, P, z);
      return r($), d(P, $), $;
    });
  }, O = (P) => (z) => {
    o((I) => {
      const $ = Qn(I, P, z);
      return S($, P), $;
    });
  }, A = (P) => {
    if (P !== "" && !/^\d+$/.test(P)) return;
    v(P);
    const z = P === "" ? void 0 : parseInt(P, 10);
    o((I) => {
      const $ = Qn(I, "connectionTimeoutSeconds", z);
      return S($, "connectionTimeoutSeconds"), $;
    });
  }, V = async () => {
    const P = await Gg(t, n);
    P && (o(P), r(P), d("authenticationMicroflow", P));
  }, q = async () => {
    n.authenticationMicroflow && Hc(t, n.authenticationMicroflow);
  }, Z = async () => {
    const P = u;
    l(!1);
    const z = await Wg(t, n, H(w));
    if (z === void 0) {
      P && l(!0);
      return;
    }
    c(z), l(!0), g(/* @__PURE__ */ new Date());
  }, x = async () => {
    const P = await Bg(t, Kc, w);
    P && f(P);
  }, H = (P) => P.filter(([z]) => z.trim() !== ""), se = (P) => H(P).map((z) => z[0]).join(", "), Ee = Object.values(s).some((P) => P !== !0), Te = s.isValidEndpoint === tt.PrivateValue || s.isValidEndpoint === tt.EmptyValue, ie = () => s.isValidEndpoint === !0 || s.isValidEndpoint === tt.PrivateValue || s.isValidEndpoint === tt.EmptyValue ? !0 : s.isValidEndpoint;
  return /* @__PURE__ */ ce.jsxs(zc, { children: [
    /* @__PURE__ */ ce.jsxs(ss, { children: [
      /* @__PURE__ */ ce.jsxs(Cn, { label: "General", children: [
        /* @__PURE__ */ ce.jsx(
          as,
          {
            label: "Version",
            ariaLabel: "Version",
            value: n.version === void 0 ? "" : n.version,
            onChange: O("version"),
            placeholder: "[1.0.0]"
          }
        ),
        /* @__PURE__ */ ce.jsx(
          eu,
          {
            label: "Documentation",
            "aria-label": "Documentation",
            value: n.documentation,
            onChange: O("documentation"),
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ ce.jsxs(Cn, { label: "Configuration", children: [
        /* @__PURE__ */ ce.jsx(
          On,
          {
            ariaLabel: "Endpoint",
            label: "Endpoint",
            value: ((U = n.endpoint) == null ? void 0 : U.qualifiedName) ?? "",
            icon: n.endpoint ? /* @__PURE__ */ ce.jsx(Bc, {}) : void 0,
            buttonCaption: "Select...",
            onClick: h,
            validate: () => ie(),
            buttonCaptionSecondary: n.endpoint ? "Show" : void 0,
            onClickSecondary: n.endpoint ? b : void 0
          }
        ),
        Te && /* @__PURE__ */ ce.jsxs(su, { children: [
          /* @__PURE__ */ ce.jsx(Qc, { children: "Invalid constant value" }),
          /* @__PURE__ */ ce.jsx("div", { children: "In order to test your Consumed MCP Service locally please set a valid value for the endpoint constant." })
        ] }),
        /* @__PURE__ */ ce.jsx(
          On,
          {
            ariaLabel: "Credentials microflow",
            label: "Credentials microflow",
            value: n.authenticationMicroflow ? n.authenticationMicroflow.qualifiedName : "",
            icon: n.authenticationMicroflow ? /* @__PURE__ */ ce.jsx(tu, {}) : void 0,
            description: "Optional: Select a microflow that generates credentials that will be used to authenticate to the MCP server. The microflow needs to return a list of System.HttpHeader objects. Input parameters are not allowed.",
            onClick: V,
            buttonCaption: "Select...",
            buttonCaptionSecondary: n.authenticationMicroflow ? "Show" : void 0,
            onClickSecondary: n.authenticationMicroflow ? q : void 0,
            validate: () => s.isValidAuthenticationMicroflow
          }
        ),
        /* @__PURE__ */ ce.jsx(
          Yc,
          {
            ariaLabel: "Protocol version",
            label: "Protocol version",
            selectedKey: n.protocolVersion,
            options: Xg,
            onSelectionChange: k("protocolVersion"),
            validate: () => s.isValidProtocolVersion
          }
        ),
        /* @__PURE__ */ ce.jsx(
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
    /* @__PURE__ */ ce.jsx(jc, { children: /* @__PURE__ */ ce.jsxs(Cn, { label: "MCP Tools Playground", children: [
      /* @__PURE__ */ ce.jsx(ss, { children: /* @__PURE__ */ ce.jsx(
        On,
        {
          ariaLabel: "MCP Authentication headers",
          label: "Authentication headers",
          value: se(w),
          buttonCaption: "Edit",
          onClick: x,
          validate: void 0,
          description: "Headers are not stored and only used to explore tools from Studio Pro."
        }
      ) }),
      /* @__PURE__ */ ce.jsx(
        Xc,
        {
          label: "Tools",
          buttonCaption: "List tools",
          onPress: Z,
          disabled: Ee
        }
      ),
      u && /* @__PURE__ */ ce.jsxs(ce.Fragment, { children: [
        y && /* @__PURE__ */ ce.jsxs(ey, { children: [
          "Last updated: ",
          y.toLocaleString()
        ] }),
        /* @__PURE__ */ ce.jsx(
          au,
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
            data: i.map((P) => [
              /* @__PURE__ */ ce.jsx(Uc, { icon: xc, text: P.name }, P.name),
              P.description
            ])
          }
        )
      ] })
    ] }) })
  ] });
}, ry = Jc(), ny = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [o, s] = Ve.useState(!1), [a, i] = Ve.useState(ry);
  return Ve.useEffect(() => {
    n.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const u = c.document.contents;
        s(!0), i(u);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch(async (c) => {
      await r.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c), s(!0);
    });
  }, []), /* @__PURE__ */ ce.jsx(qc, { studioPro: e, children: /* @__PURE__ */ ce.jsxs(Mc, { children: [
    !o && /* @__PURE__ */ ce.jsx(Vc, {}),
    o && /* @__PURE__ */ ce.jsx(Ac, { children: /* @__PURE__ */ ce.jsx(
      ty,
      {
        loadedConsumedMCPService: a,
        studioPro: e,
        updateStudioProDocument: Wc(e, t)
      }
    ) })
  ] }) });
}, my = Dc(ny);
export {
  my as component
};
//# sourceMappingURL=consumedMCPServiceEdit.js.map
