import { C as Iu, y as hd, r as Ae, w as he, U as pd, K as Ra, G as xo, M as md, V as _d, N as yd, P as gd, O as vd } from "./Icon-fHsyUm8I.js";
import { B as $d, T as wd, c as bd, C as Sd } from "./TextWithIcon-VpEcElJR.js";
import { v as Ed, C as kd, M as Pd, h as Td, w as Rd, q as Od, x as Id, y as Cd } from "./index-DsStz3tj.js";
import { v as Nd, C as ft, i as jd, a as qd, B as zd } from "./ButtonWithLabel-Bn6Si8ff.js";
import { T as Oa } from "./TextInputLabeled-ByXuMGQx.js";
import { T as Jo } from "./TextInputWithButton-Ck7o_ZdS.js";
import { c as Md } from "./userPreferences-BV8i5uIO.js";
import { g as Ad, h as Dd } from "./modelUtils-B4UuvvXG.js";
import { n as Ud } from "./MicroflowIcon-CZXKWVwd.js";
import { W as Vd } from "./Banner-CrOSEmJM.js";
import { T as Ld } from "./Table-Cr6LdGBI.js";
const Fd = Object.freeze({
  status: "aborted"
});
function V(e, t, r) {
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
    const d = a.prototype, l = Object.keys(d);
    for (let v = 0; v < l.length; v++) {
      const $ = l[v];
      $ in i || (i[$] = d[$].bind(i));
    }
  }
  const o = (r == null ? void 0 : r.Parent) ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function a(i) {
    var c;
    const d = r != null && r.Parent ? new s() : this;
    n(d, i), (c = d._zod).deferred ?? (c.deferred = []);
    for (const l of d._zod.deferred)
      l();
    return d;
  }
  return Object.defineProperty(a, "init", { value: n }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (i) => {
      var c, d;
      return r != null && r.Parent && i instanceof r.Parent ? !0 : (d = (c = i == null ? void 0 : i._zod) == null ? void 0 : c.traits) == null ? void 0 : d.has(e);
    }
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class rr extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Cu extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Nu = {};
function Et(e) {
  return Nu;
}
function ju(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function ws(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function To(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function xs(e) {
  return e == null;
}
function Js(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function Zd(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = t.toString();
  let o = (n.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(n)) {
    const c = n.match(/\d?e-(\d?)/);
    c != null && c[1] && (o = Number.parseInt(c[1]));
  }
  const s = r > o ? r : o, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
const Ia = Symbol("evaluating");
function pe(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== Ia)
        return n === void 0 && (n = Ia, n = r()), n;
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
function Zt(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Pt(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function Ca(e) {
  return JSON.stringify(e);
}
function Hd(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const qu = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Er(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Kd = To(() => {
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
function or(e) {
  if (Er(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const r = t.prototype;
  return !(Er(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function zu(e) {
  return or(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const xd = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function sr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Tt(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r != null && r.parent) && (n._zod.parent = e), n;
}
function Y(e) {
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
function Jd(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Gd = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Wd(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = Pt(e._zod.def, {
    get shape() {
      const a = {};
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && (a[i] = r.shape[i]);
      }
      return Zt(this, "shape", a), a;
    },
    checks: []
  });
  return Tt(e, s);
}
function Bd(e, t) {
  const r = e._zod.def, n = r.checks;
  if (n && n.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = Pt(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape };
      for (const i in t) {
        if (!(i in r.shape))
          throw new Error(`Unrecognized key: "${i}"`);
        t[i] && delete a[i];
      }
      return Zt(this, "shape", a), a;
    },
    checks: []
  });
  return Tt(e, s);
}
function Qd(e, t) {
  if (!or(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0) {
    const s = e._zod.def.shape;
    for (const a in t)
      if (Object.getOwnPropertyDescriptor(s, a) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = Pt(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return Zt(this, "shape", s), s;
    }
  });
  return Tt(e, o);
}
function Yd(e, t) {
  if (!or(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = Pt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return Zt(this, "shape", n), n;
    }
  });
  return Tt(e, r);
}
function Xd(e, t) {
  const r = Pt(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return Zt(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Tt(e, r);
}
function ef(e, t, r) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const a = Pt(t._zod.def, {
    get shape() {
      const i = t._zod.def.shape, c = { ...i };
      if (r)
        for (const d in r) {
          if (!(d in i))
            throw new Error(`Unrecognized key: "${d}"`);
          r[d] && (c[d] = e ? new e({
            type: "optional",
            innerType: i[d]
          }) : i[d]);
        }
      else
        for (const d in i)
          c[d] = e ? new e({
            type: "optional",
            innerType: i[d]
          }) : i[d];
      return Zt(this, "shape", c), c;
    },
    checks: []
  });
  return Tt(t, a);
}
function tf(e, t, r) {
  const n = Pt(t._zod.def, {
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
      return Zt(this, "shape", s), s;
    }
  });
  return Tt(t, n);
}
function Yt(e, t = 0) {
  var r;
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (((r = e.issues[n]) == null ? void 0 : r.continue) !== !0)
      return !0;
  return !1;
}
function Xt(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function jr(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function kt(e, t, r) {
  var o, s, a, i, c, d;
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const l = jr((a = (s = (o = e.inst) == null ? void 0 : o._zod.def) == null ? void 0 : s.error) == null ? void 0 : a.call(s, e)) ?? jr((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? jr((c = r.customError) == null ? void 0 : c.call(r, e)) ?? jr((d = r.localeError) == null ? void 0 : d.call(r, e)) ?? "Invalid input";
    n.message = l;
  }
  return delete n.inst, delete n.continue, t != null && t.reportInput || delete n.input, n;
}
function Gs(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function kr(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const Mu = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, ws, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Au = V("$ZodError", Mu), Du = V("$ZodError", Mu, { Parent: Error });
function rf(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const o of e.issues)
    o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
  return { formErrors: n, fieldErrors: r };
}
function nf(e, t = (r) => r.message) {
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
const Ws = (e) => (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new rr();
  if (a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => kt(c, s, Et())));
    throw qu(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, Bs = (e) => async (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => kt(c, s, Et())));
    throw qu(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, Ro = (e) => (t, r, n) => {
  const o = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new rr();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? Au)(s.issues.map((a) => kt(a, o, Et())))
  } : { success: !0, data: s.value };
}, Uu = /* @__PURE__ */ Ro(Du), Oo = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => kt(a, o, Et())))
  } : { success: !0, data: s.value };
}, of = /* @__PURE__ */ Oo(Du), sf = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ws(e)(t, r, o);
}, af = (e) => (t, r, n) => Ws(e)(t, r, n), cf = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Bs(e)(t, r, o);
}, uf = (e) => async (t, r, n) => Bs(e)(t, r, n), lf = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ro(e)(t, r, o);
}, df = (e) => (t, r, n) => Ro(e)(t, r, n), ff = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Oo(e)(t, r, o);
}, hf = (e) => async (t, r, n) => Oo(e)(t, r, n), pf = /^[cC][^\s-]{8,}$/, mf = /^[0-9a-z]+$/, _f = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, yf = /^[0-9a-vA-V]{20}$/, gf = /^[A-Za-z0-9]{27}$/, vf = /^[a-zA-Z0-9_-]{21}$/, $f = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, wf = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Na = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, bf = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Sf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ef() {
  return new RegExp(Sf, "u");
}
const kf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Pf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Tf = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Rf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Of = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Vu = /^[A-Za-z0-9_-]*$/, If = /^\+[1-9]\d{6,14}$/, Lu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Cf = /* @__PURE__ */ new RegExp(`^${Lu}$`);
function Fu(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Nf(e) {
  return new RegExp(`^${Fu(e)}$`);
}
function jf(e) {
  const t = Fu({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Lu}T(?:${n})$`);
}
const qf = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, zf = /^-?\d+$/, Zu = /^-?\d+(?:\.\d+)?$/, Mf = /^(?:true|false)$/i, Af = /^null$/i, Df = /^[^A-Z]*$/, Uf = /^[^a-z]*$/, Be = /* @__PURE__ */ V("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), Hu = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Ku = /* @__PURE__ */ V("$ZodCheckLessThan", (e, t) => {
  Be.init(e, t);
  const r = Hu[typeof t.value];
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
}), xu = /* @__PURE__ */ V("$ZodCheckGreaterThan", (e, t) => {
  Be.init(e, t);
  const r = Hu[typeof t.value];
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
}), Vf = /* @__PURE__ */ V("$ZodCheckMultipleOf", (e, t) => {
  Be.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : Zd(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Lf = /* @__PURE__ */ V("$ZodCheckNumberFormat", (e, t) => {
  var a;
  Be.init(e, t), t.format = t.format || "float64";
  const r = (a = t.format) == null ? void 0 : a.includes("int"), n = r ? "int" : "number", [o, s] = Gd[t.format];
  e._zod.onattach.push((i) => {
    const c = i._zod.bag;
    c.format = t.format, c.minimum = o, c.maximum = s, r && (c.pattern = zf);
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
}), Ff = /* @__PURE__ */ V("$ZodCheckMaxLength", (e, t) => {
  var r;
  Be.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !xs(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length <= t.maximum)
      return;
    const a = Gs(o);
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
}), Zf = /* @__PURE__ */ V("$ZodCheckMinLength", (e, t) => {
  var r;
  Be.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !xs(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length >= t.minimum)
      return;
    const a = Gs(o);
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
}), Hf = /* @__PURE__ */ V("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Be.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !xs(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (n) => {
    const o = n.value, s = o.length;
    if (s === t.length)
      return;
    const a = Gs(o), i = s > t.length;
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
}), Io = /* @__PURE__ */ V("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  Be.init(e, t), e._zod.onattach.push((o) => {
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
}), Kf = /* @__PURE__ */ V("$ZodCheckRegex", (e, t) => {
  Io.init(e, t), e._zod.check = (r) => {
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
}), xf = /* @__PURE__ */ V("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Df), Io.init(e, t);
}), Jf = /* @__PURE__ */ V("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Uf), Io.init(e, t);
}), Gf = /* @__PURE__ */ V("$ZodCheckIncludes", (e, t) => {
  Be.init(e, t);
  const r = sr(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
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
}), Wf = /* @__PURE__ */ V("$ZodCheckStartsWith", (e, t) => {
  Be.init(e, t);
  const r = new RegExp(`^${sr(t.prefix)}.*`);
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
}), Bf = /* @__PURE__ */ V("$ZodCheckEndsWith", (e, t) => {
  Be.init(e, t);
  const r = new RegExp(`.*${sr(t.suffix)}$`);
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
}), Qf = /* @__PURE__ */ V("$ZodCheckOverwrite", (e, t) => {
  Be.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class Yf {
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
const Xf = {
  major: 4,
  minor: 3,
  patch: 6
}, Ee = /* @__PURE__ */ V("$ZodType", (e, t) => {
  var o;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Xf;
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
    const s = (i, c, d) => {
      let l = Yt(i), v;
      for (const $ of c) {
        if ($._zod.def.when) {
          if (!$._zod.def.when(i))
            continue;
        } else if (l)
          continue;
        const y = i.issues.length, w = $._zod.check(i);
        if (w instanceof Promise && (d == null ? void 0 : d.async) === !1)
          throw new rr();
        if (v || w instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await w, i.issues.length !== y && (l || (l = Yt(i, y)));
          });
        else {
          if (i.issues.length === y)
            continue;
          l || (l = Yt(i, y));
        }
      }
      return v ? v.then(() => i) : i;
    }, a = (i, c, d) => {
      if (Yt(i))
        return i.aborted = !0, i;
      const l = s(c, n, d);
      if (l instanceof Promise) {
        if (d.async === !1)
          throw new rr();
        return l.then((v) => e._zod.parse(v, d));
      }
      return e._zod.parse(l, d);
    };
    e._zod.run = (i, c) => {
      if (c.skipChecks)
        return e._zod.parse(i, c);
      if (c.direction === "backward") {
        const l = e._zod.parse({ value: i.value, issues: [] }, { ...c, skipChecks: !0 });
        return l instanceof Promise ? l.then((v) => a(v, i, c)) : a(l, i, c);
      }
      const d = e._zod.parse(i, c);
      if (d instanceof Promise) {
        if (c.async === !1)
          throw new rr();
        return d.then((l) => s(l, n, c));
      }
      return s(d, n, c);
    };
  }
  pe(e, "~standard", () => ({
    validate: (s) => {
      var a;
      try {
        const i = Uu(e, s);
        return i.success ? { value: i.data } : { issues: (a = i.error) == null ? void 0 : a.issues };
      } catch {
        return of(e, s).then((c) => {
          var d;
          return c.success ? { value: c.data } : { issues: (d = c.error) == null ? void 0 : d.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Qs = /* @__PURE__ */ V("$ZodString", (e, t) => {
  var r;
  Ee.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? qf(e._zod.bag), e._zod.parse = (n, o) => {
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
}), Re = /* @__PURE__ */ V("$ZodStringFormat", (e, t) => {
  Io.init(e, t), Qs.init(e, t);
}), eh = /* @__PURE__ */ V("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = wf), Re.init(e, t);
}), th = /* @__PURE__ */ V("$ZodUUID", (e, t) => {
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
    t.pattern ?? (t.pattern = Na(n));
  } else
    t.pattern ?? (t.pattern = Na());
  Re.init(e, t);
}), rh = /* @__PURE__ */ V("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = bf), Re.init(e, t);
}), nh = /* @__PURE__ */ V("$ZodURL", (e, t) => {
  Re.init(e, t), e._zod.check = (r) => {
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
}), oh = /* @__PURE__ */ V("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Ef()), Re.init(e, t);
}), sh = /* @__PURE__ */ V("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = vf), Re.init(e, t);
}), ah = /* @__PURE__ */ V("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = pf), Re.init(e, t);
}), ih = /* @__PURE__ */ V("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = mf), Re.init(e, t);
}), ch = /* @__PURE__ */ V("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = _f), Re.init(e, t);
}), uh = /* @__PURE__ */ V("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = yf), Re.init(e, t);
}), lh = /* @__PURE__ */ V("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = gf), Re.init(e, t);
}), dh = /* @__PURE__ */ V("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = jf(t)), Re.init(e, t);
}), fh = /* @__PURE__ */ V("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Cf), Re.init(e, t);
}), hh = /* @__PURE__ */ V("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Nf(t)), Re.init(e, t);
}), ph = /* @__PURE__ */ V("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = $f), Re.init(e, t);
}), mh = /* @__PURE__ */ V("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = kf), Re.init(e, t), e._zod.bag.format = "ipv4";
}), _h = /* @__PURE__ */ V("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Pf), Re.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
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
}), yh = /* @__PURE__ */ V("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Tf), Re.init(e, t);
}), gh = /* @__PURE__ */ V("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Rf), Re.init(e, t), e._zod.check = (r) => {
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
function Ju(e) {
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
const vh = /* @__PURE__ */ V("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Of), Re.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    Ju(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function $h(e) {
  if (!Vu.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ju(r);
}
const wh = /* @__PURE__ */ V("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Vu), Re.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    $h(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), bh = /* @__PURE__ */ V("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = If), Re.init(e, t);
});
function Sh(e, t = null) {
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
const Eh = /* @__PURE__ */ V("$ZodJWT", (e, t) => {
  Re.init(e, t), e._zod.check = (r) => {
    Sh(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Gu = /* @__PURE__ */ V("$ZodNumber", (e, t) => {
  Ee.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Zu, e._zod.parse = (r, n) => {
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
}), kh = /* @__PURE__ */ V("$ZodNumberFormat", (e, t) => {
  Lf.init(e, t), Gu.init(e, t);
}), Ph = /* @__PURE__ */ V("$ZodBoolean", (e, t) => {
  Ee.init(e, t), e._zod.pattern = Mf, e._zod.parse = (r, n) => {
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
}), Th = /* @__PURE__ */ V("$ZodNull", (e, t) => {
  Ee.init(e, t), e._zod.pattern = Af, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, n) => {
    const o = r.value;
    return o === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), Rh = /* @__PURE__ */ V("$ZodAny", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r) => r;
}), Oh = /* @__PURE__ */ V("$ZodUnknown", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r) => r;
}), Ih = /* @__PURE__ */ V("$ZodNever", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function ja(e, t, r) {
  e.issues.length && t.issues.push(...Xt(r, e.issues)), t.value[r] = e.value;
}
const Ch = /* @__PURE__ */ V("$ZodArray", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
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
      c instanceof Promise ? s.push(c.then((d) => ja(d, r, a))) : ja(c, r, a);
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function lo(e, t, r, n, o) {
  if (e.issues.length) {
    if (o && !(r in n))
      return;
    t.issues.push(...Xt(r, e.issues));
  }
  e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function Wu(e) {
  var n, o, s, a;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((a = (s = (o = (n = e.shape) == null ? void 0 : n[i]) == null ? void 0 : o._zod) == null ? void 0 : s.traits) != null && a.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const r = Jd(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function Bu(e, t, r, n, o, s) {
  const a = [], i = o.keySet, c = o.catchall._zod, d = c.def.type, l = c.optout === "optional";
  for (const v in t) {
    if (i.has(v))
      continue;
    if (d === "never") {
      a.push(v);
      continue;
    }
    const $ = c.run({ value: t[v], issues: [] }, n);
    $ instanceof Promise ? e.push($.then((y) => lo(y, r, v, t, l))) : lo($, r, v, t, l);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const Nh = /* @__PURE__ */ V("$ZodObject", (e, t) => {
  Ee.init(e, t);
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
  const n = To(() => Wu(t));
  pe(e._zod, "propValues", () => {
    const i = t.shape, c = {};
    for (const d in i) {
      const l = i[d]._zod;
      if (l.values) {
        c[d] ?? (c[d] = /* @__PURE__ */ new Set());
        for (const v of l.values)
          c[d].add(v);
      }
    }
    return c;
  });
  const o = Er, s = t.catchall;
  let a;
  e._zod.parse = (i, c) => {
    a ?? (a = n.value);
    const d = i.value;
    if (!o(d))
      return i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: d,
        inst: e
      }), i;
    i.value = {};
    const l = [], v = a.shape;
    for (const $ of a.keys) {
      const y = v[$], w = y._zod.optout === "optional", b = y._zod.run({ value: d[$], issues: [] }, c);
      b instanceof Promise ? l.push(b.then((f) => lo(f, i, $, d, w))) : lo(b, i, $, d, w);
    }
    return s ? Bu(l, d, i, c, n.value, e) : l.length ? Promise.all(l).then(() => i) : i;
  };
}), jh = /* @__PURE__ */ V("$ZodObjectJIT", (e, t) => {
  Nh.init(e, t);
  const r = e._zod.parse, n = To(() => Wu(t)), o = ($) => {
    var _;
    const y = new Yf(["shape", "payload", "ctx"]), w = n.value, b = (S) => {
      const h = Ca(S);
      return `shape[${h}]._zod.run({ value: input[${h}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const f = /* @__PURE__ */ Object.create(null);
    let m = 0;
    for (const S of w.keys)
      f[S] = `key_${m++}`;
    y.write("const newResult = {};");
    for (const S of w.keys) {
      const h = f[S], g = Ca(S), E = $[S], I = ((_ = E == null ? void 0 : E._zod) == null ? void 0 : _.optout) === "optional";
      y.write(`const ${h} = ${b(S)};`), I ? y.write(`
        if (${h}.issues.length) {
          if (${g} in input) {
            payload.issues = payload.issues.concat(${h}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${g}, ...iss.path] : [${g}]
            })));
          }
        }
        
        if (${h}.value === undefined) {
          if (${g} in input) {
            newResult[${g}] = undefined;
          }
        } else {
          newResult[${g}] = ${h}.value;
        }
        
      `) : y.write(`
        if (${h}.issues.length) {
          payload.issues = payload.issues.concat(${h}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${g}, ...iss.path] : [${g}]
          })));
        }
        
        if (${h}.value === undefined) {
          if (${g} in input) {
            newResult[${g}] = undefined;
          }
        } else {
          newResult[${g}] = ${h}.value;
        }
        
      `);
    }
    y.write("payload.value = newResult;"), y.write("return payload;");
    const u = y.compile();
    return (S, h) => u($, S, h);
  };
  let s;
  const a = Er, i = !Nu.jitless, d = i && Kd.value, l = t.catchall;
  let v;
  e._zod.parse = ($, y) => {
    v ?? (v = n.value);
    const w = $.value;
    return a(w) ? i && d && (y == null ? void 0 : y.async) === !1 && y.jitless !== !0 ? (s || (s = o(t.shape)), $ = s($, y), l ? Bu([], w, $, y, v, e) : $) : r($, y) : ($.issues.push({
      expected: "object",
      code: "invalid_type",
      input: w,
      inst: e
    }), $);
  };
});
function qa(e, t, r, n) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const o = e.filter((s) => !Yt(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((s) => s.issues.map((a) => kt(a, n, Et())))
  }), t);
}
const Qu = /* @__PURE__ */ V("$ZodUnion", (e, t) => {
  Ee.init(e, t), pe(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), pe(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), pe(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), pe(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Js(s.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (o, s) => {
    if (r)
      return n(o, s);
    let a = !1;
    const i = [];
    for (const c of t.options) {
      const d = c._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (d instanceof Promise)
        i.push(d), a = !0;
      else {
        if (d.issues.length === 0)
          return d;
        i.push(d);
      }
    }
    return a ? Promise.all(i).then((c) => qa(c, o, e, s)) : qa(i, o, e, s);
  };
}), qh = /* @__PURE__ */ V("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, Qu.init(e, t);
  const r = e._zod.parse;
  pe(e._zod, "propValues", () => {
    const o = {};
    for (const s of t.options) {
      const a = s._zod.propValues;
      if (!a || Object.keys(a).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
      for (const [i, c] of Object.entries(a)) {
        o[i] || (o[i] = /* @__PURE__ */ new Set());
        for (const d of c)
          o[i].add(d);
      }
    }
    return o;
  });
  const n = To(() => {
    var a;
    const o = t.options, s = /* @__PURE__ */ new Map();
    for (const i of o) {
      const c = (a = i._zod.propValues) == null ? void 0 : a[t.discriminator];
      if (!c || c.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const d of c) {
        if (s.has(d))
          throw new Error(`Duplicate discriminator value "${String(d)}"`);
        s.set(d, i);
      }
    }
    return s;
  });
  e._zod.parse = (o, s) => {
    const a = o.value;
    if (!Er(a))
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
}), zh = /* @__PURE__ */ V("$ZodIntersection", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value, s = t.left._zod.run({ value: o, issues: [] }, n), a = t.right._zod.run({ value: o, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([c, d]) => za(r, c, d)) : za(r, s, a);
  };
});
function bs(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (or(e) && or(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((s) => r.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of n) {
      const a = bs(e[s], t[s]);
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
      const o = e[n], s = t[n], a = bs(o, s);
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
function za(e, t, r) {
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
  if (s.length && o && e.issues.push({ ...o, keys: s }), Yt(e))
    return e;
  const a = bs(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const Mh = /* @__PURE__ */ V("$ZodRecord", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value;
    if (!or(o))
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
      for (const d of a)
        if (typeof d == "string" || typeof d == "number" || typeof d == "symbol") {
          i.add(typeof d == "number" ? d.toString() : d);
          const l = t.valueType._zod.run({ value: o[d], issues: [] }, n);
          l instanceof Promise ? s.push(l.then((v) => {
            v.issues.length && r.issues.push(...Xt(d, v.issues)), r.value[d] = v.value;
          })) : (l.issues.length && r.issues.push(...Xt(d, l.issues)), r.value[d] = l.value);
        }
      let c;
      for (const d in o)
        i.has(d) || (c = c ?? [], c.push(d));
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
        if (typeof i == "string" && Zu.test(i) && c.issues.length) {
          const v = t.keyType._zod.run({ value: Number(i), issues: [] }, n);
          if (v instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          v.issues.length === 0 && (c = v);
        }
        if (c.issues.length) {
          t.mode === "loose" ? r.value[i] = o[i] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((v) => kt(v, n, Et())),
            input: i,
            path: [i],
            inst: e
          });
          continue;
        }
        const l = t.valueType._zod.run({ value: o[i], issues: [] }, n);
        l instanceof Promise ? s.push(l.then((v) => {
          v.issues.length && r.issues.push(...Xt(i, v.issues)), r.value[c.value] = v.value;
        })) : (l.issues.length && r.issues.push(...Xt(i, l.issues)), r.value[c.value] = l.value);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
}), Ah = /* @__PURE__ */ V("$ZodEnum", (e, t) => {
  Ee.init(e, t);
  const r = ju(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((o) => xd.has(typeof o)).map((o) => typeof o == "string" ? sr(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return n.has(a) || o.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), o;
  };
}), Dh = /* @__PURE__ */ V("$ZodLiteral", (e, t) => {
  if (Ee.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const r = new Set(t.values);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${t.values.map((n) => typeof n == "string" ? sr(n) : n ? sr(n.toString()) : String(n)).join("|")})$`), e._zod.parse = (n, o) => {
    const s = n.value;
    return r.has(s) || n.issues.push({
      code: "invalid_value",
      values: t.values,
      input: s,
      inst: e
    }), n;
  };
}), Uh = /* @__PURE__ */ V("$ZodTransform", (e, t) => {
  Ee.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Cu(e.constructor.name);
    const o = t.transform(r.value, r);
    if (n.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((a) => (r.value = a, r));
    if (o instanceof Promise)
      throw new rr();
    return r.value = o, r;
  };
});
function Ma(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Yu = /* @__PURE__ */ V("$ZodOptional", (e, t) => {
  Ee.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", pe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), pe(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Js(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => Ma(s, r.value)) : Ma(o, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), Vh = /* @__PURE__ */ V("$ZodExactOptional", (e, t) => {
  Yu.init(e, t), pe(e._zod, "values", () => t.innerType._zod.values), pe(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), Lh = /* @__PURE__ */ V("$ZodNullable", (e, t) => {
  Ee.init(e, t), pe(e._zod, "optin", () => t.innerType._zod.optin), pe(e._zod, "optout", () => t.innerType._zod.optout), pe(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Js(r.source)}|null)$`) : void 0;
  }), pe(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), Fh = /* @__PURE__ */ V("$ZodDefault", (e, t) => {
  Ee.init(e, t), e._zod.optin = "optional", pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => Aa(s, t)) : Aa(o, t);
  };
});
function Aa(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Zh = /* @__PURE__ */ V("$ZodPrefault", (e, t) => {
  Ee.init(e, t), e._zod.optin = "optional", pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), Hh = /* @__PURE__ */ V("$ZodNonOptional", (e, t) => {
  Ee.init(e, t), pe(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => Da(s, e)) : Da(o, e);
  };
});
function Da(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Kh = /* @__PURE__ */ V("$ZodCatch", (e, t) => {
  Ee.init(e, t), pe(e._zod, "optin", () => t.innerType._zod.optin), pe(e._zod, "optout", () => t.innerType._zod.optout), pe(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((a) => kt(a, n, Et()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((s) => kt(s, n, Et()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), xh = /* @__PURE__ */ V("$ZodPipe", (e, t) => {
  Ee.init(e, t), pe(e._zod, "values", () => t.in._zod.values), pe(e._zod, "optin", () => t.in._zod.optin), pe(e._zod, "optout", () => t.out._zod.optout), pe(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const s = t.out._zod.run(r, n);
      return s instanceof Promise ? s.then((a) => qr(a, t.in, n)) : qr(s, t.in, n);
    }
    const o = t.in._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => qr(s, t.out, n)) : qr(o, t.out, n);
  };
});
function qr(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Jh = /* @__PURE__ */ V("$ZodReadonly", (e, t) => {
  Ee.init(e, t), pe(e._zod, "propValues", () => t.innerType._zod.propValues), pe(e._zod, "values", () => t.innerType._zod.values), pe(e._zod, "optin", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optin;
  }), pe(e._zod, "optout", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optout;
  }), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then(Ua) : Ua(o);
  };
});
function Ua(e) {
  return e.value = Object.freeze(e.value), e;
}
const Gh = /* @__PURE__ */ V("$ZodCustom", (e, t) => {
  Be.init(e, t), Ee.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, o = t.fn(n);
    if (o instanceof Promise)
      return o.then((s) => Va(s, r, n, e));
    Va(o, r, n, e);
  };
});
function Va(e, t, r, n) {
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
    n._zod.def.params && (o.params = n._zod.def.params), t.issues.push(kr(o));
  }
}
var La;
class Wh {
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
function Bh() {
  return new Wh();
}
(La = globalThis).__zod_globalRegistry ?? (La.__zod_globalRegistry = Bh());
const gr = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Qh(e, t) {
  return new e({
    type: "string",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yh(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xh(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ep(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function rp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xu(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function np(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function op(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function sp(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ap(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ip(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cp(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function up(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lp(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function dp(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function fp(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function hp(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pp(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function mp(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _p(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yp(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gp(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vp(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $p(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wp(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function bp(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Sp(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ep(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function kp(e, t) {
  return new e({
    type: "boolean",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pp(e, t) {
  return new e({
    type: "null",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tp(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function Rp(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Op(e, t) {
  return new e({
    type: "never",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
  return new Ku({
    check: "less_than",
    ...Y(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Go(e, t) {
  return new Ku({
    check: "less_than",
    ...Y(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
  return new xu({
    check: "greater_than",
    ...Y(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Wo(e, t) {
  return new xu({
    check: "greater_than",
    ...Y(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
  return new Vf({
    check: "multiple_of",
    ...Y(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function el(e, t) {
  return new Ff({
    check: "max_length",
    ...Y(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
  return new Zf({
    check: "min_length",
    ...Y(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function tl(e, t) {
  return new Hf({
    check: "length_equals",
    ...Y(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ip(e, t) {
  return new Kf({
    check: "string_format",
    format: "regex",
    ...Y(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Cp(e) {
  return new xf({
    check: "string_format",
    format: "lowercase",
    ...Y(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Np(e) {
  return new Jf({
    check: "string_format",
    format: "uppercase",
    ...Y(e)
  });
}
// @__NO_SIDE_EFFECTS__
function jp(e, t) {
  return new Gf({
    check: "string_format",
    format: "includes",
    ...Y(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function qp(e, t) {
  return new Wf({
    check: "string_format",
    format: "starts_with",
    ...Y(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function zp(e, t) {
  return new Bf({
    check: "string_format",
    format: "ends_with",
    ...Y(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
  return new Qf({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Mp(e) {
  return /* @__PURE__ */ cr((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Ap() {
  return /* @__PURE__ */ cr((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Dp() {
  return /* @__PURE__ */ cr((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Up() {
  return /* @__PURE__ */ cr((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Vp() {
  return /* @__PURE__ */ cr((e) => Hd(e));
}
// @__NO_SIDE_EFFECTS__
function Lp(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...Y(r)
  });
}
// @__NO_SIDE_EFFECTS__
function Fp(e, t, r) {
  const n = Y(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
// @__NO_SIDE_EFFECTS__
function Zp(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Y(r)
  });
}
// @__NO_SIDE_EFFECTS__
function Hp(e) {
  const t = /* @__PURE__ */ Kp((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(kr(n, r.value, t._zod.def));
    else {
      const o = n;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), r.issues.push(kr(o));
    }
  }, e(r.value, r)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function Kp(e, t) {
  const r = new Be({
    check: "custom",
    ...Y(t)
  });
  return r._zod.check = e, r;
}
function rl(e) {
  let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: (e == null ? void 0 : e.metadata) ?? gr,
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
function ze(e, t, r = { path: [], schemaPath: [] }) {
  var l, v;
  var n;
  const o = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, r.schemaPath.includes(e) && (s.cycle = r.path), s.schema;
  const a = { schema: {}, count: 1, cycle: void 0, path: r.path };
  t.seen.set(e, a);
  const i = (v = (l = e._zod).toJSONSchema) == null ? void 0 : v.call(l);
  if (i)
    a.schema = i;
  else {
    const $ = {
      ...r,
      schemaPath: [...r.schemaPath, e],
      path: r.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, a.schema, $);
    else {
      const w = a.schema, b = t.processors[o.type];
      if (!b)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      b(e, t, w, $);
    }
    const y = e._zod.parent;
    y && (a.ref || (a.ref = y), ze(y, t, $), t.seen.get(y).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && Ge(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((n = a.schema).default ?? (n.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function nl(e, t) {
  var a, i, c, d;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const l of e.seen.entries()) {
    const v = (a = e.metadataRegistry.get(l[0])) == null ? void 0 : a.id;
    if (v) {
      const $ = n.get(v);
      if ($ && $ !== l[0])
        throw new Error(`Duplicate schema id "${v}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(v, l[0]);
    }
  }
  const o = (l) => {
    var b;
    const v = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const f = (b = e.external.registry.get(l[0])) == null ? void 0 : b.id, m = e.external.uri ?? ((_) => _);
      if (f)
        return { ref: m(f) };
      const u = l[1].defId ?? l[1].schema.id ?? `schema${e.counter++}`;
      return l[1].defId = u, { defId: u, ref: `${m("__shared")}#/${v}/${u}` };
    }
    if (l[1] === r)
      return { ref: "#" };
    const y = `#/${v}/`, w = l[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: w, ref: y + w };
  }, s = (l) => {
    if (l[1].schema.$ref)
      return;
    const v = l[1], { ref: $, defId: y } = o(l);
    v.def = { ...v.schema }, y && (v.defId = y);
    const w = v.schema;
    for (const b in w)
      delete w[b];
    w.$ref = $;
  };
  if (e.cycles === "throw")
    for (const l of e.seen.entries()) {
      const v = l[1];
      if (v.cycle)
        throw new Error(`Cycle detected: #/${(i = v.cycle) == null ? void 0 : i.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const l of e.seen.entries()) {
    const v = l[1];
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
    if ((d = e.metadataRegistry.get(l[0])) == null ? void 0 : d.id) {
      s(l);
      continue;
    }
    if (v.cycle) {
      s(l);
      continue;
    }
    if (v.count > 1 && e.reused === "ref") {
      s(l);
      continue;
    }
  }
}
function ol(e, t) {
  var a, i, c;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (d) => {
    const l = e.seen.get(d);
    if (l.ref === null)
      return;
    const v = l.def ?? l.schema, $ = { ...v }, y = l.ref;
    if (l.ref = null, y) {
      n(y);
      const b = e.seen.get(y), f = b.schema;
      if (f.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(f)) : Object.assign(v, f), Object.assign(v, $), d._zod.parent === y)
        for (const u in v)
          u === "$ref" || u === "allOf" || u in $ || delete v[u];
      if (f.$ref && b.def)
        for (const u in v)
          u === "$ref" || u === "allOf" || u in b.def && JSON.stringify(v[u]) === JSON.stringify(b.def[u]) && delete v[u];
    }
    const w = d._zod.parent;
    if (w && w !== y) {
      n(w);
      const b = e.seen.get(w);
      if (b != null && b.schema.$ref && (v.$ref = b.schema.$ref, b.def))
        for (const f in v)
          f === "$ref" || f === "allOf" || f in b.def && JSON.stringify(v[f]) === JSON.stringify(b.def[f]) && delete v[f];
    }
    e.override({
      zodSchema: d,
      jsonSchema: v,
      path: l.path ?? []
    });
  };
  for (const d of [...e.seen.entries()].reverse())
    n(d[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (a = e.external) != null && a.uri) {
    const d = (i = e.external.registry.get(t)) == null ? void 0 : i.id;
    if (!d)
      throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(d);
  }
  Object.assign(o, r.def ?? r.schema);
  const s = ((c = e.external) == null ? void 0 : c.defs) ?? {};
  for (const d of e.seen.entries()) {
    const l = d[1];
    l.def && l.defId && (s[l.defId] = l.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? o.$defs = s : o.definitions = s);
  try {
    const d = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(d, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: ho(t, "input", e.processors),
          output: ho(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), d;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Ge(e, t) {
  const r = t ?? { seen: /* @__PURE__ */ new Set() };
  if (r.seen.has(e))
    return !1;
  r.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return Ge(n.element, r);
  if (n.type === "set")
    return Ge(n.valueType, r);
  if (n.type === "lazy")
    return Ge(n.getter(), r);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return Ge(n.innerType, r);
  if (n.type === "intersection")
    return Ge(n.left, r) || Ge(n.right, r);
  if (n.type === "record" || n.type === "map")
    return Ge(n.keyType, r) || Ge(n.valueType, r);
  if (n.type === "pipe")
    return Ge(n.in, r) || Ge(n.out, r);
  if (n.type === "object") {
    for (const o in n.shape)
      if (Ge(n.shape[o], r))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const o of n.options)
      if (Ge(o, r))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const o of n.items)
      if (Ge(o, r))
        return !0;
    return !!(n.rest && Ge(n.rest, r));
  }
  return !1;
}
const xp = (e, t = {}) => (r) => {
  const n = rl({ ...r, processors: t });
  return ze(e, n), nl(n, e), ol(n, e);
}, ho = (e, t, r = {}) => (n) => {
  const { libraryOptions: o, target: s } = n ?? {}, a = rl({ ...o ?? {}, target: s, io: t, processors: r });
  return ze(e, a), nl(a, e), ol(a, e);
}, Jp = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Gp = (e, t, r, n) => {
  const o = r;
  o.type = "string";
  const { minimum: s, maximum: a, format: i, patterns: c, contentEncoding: d } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof a == "number" && (o.maxLength = a), i && (o.format = Jp[i] ?? i, o.format === "" && delete o.format, i === "time" && delete o.format), d && (o.contentEncoding = d), c && c.size > 0) {
    const l = [...c];
    l.length === 1 ? o.pattern = l[0].source : l.length > 1 && (o.allOf = [
      ...l.map((v) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: v.source
      }))
    ]);
  }
}, Wp = (e, t, r, n) => {
  const o = r, { minimum: s, maximum: a, format: i, multipleOf: c, exclusiveMaximum: d, exclusiveMinimum: l } = e._zod.bag;
  typeof i == "string" && i.includes("int") ? o.type = "integer" : o.type = "number", typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = l, o.exclusiveMinimum = !0) : o.exclusiveMinimum = l), typeof s == "number" && (o.minimum = s, typeof l == "number" && t.target !== "draft-04" && (l >= s ? delete o.minimum : delete o.exclusiveMinimum)), typeof d == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = d, o.exclusiveMaximum = !0) : o.exclusiveMaximum = d), typeof a == "number" && (o.maximum = a, typeof d == "number" && t.target !== "draft-04" && (d <= a ? delete o.maximum : delete o.exclusiveMaximum)), typeof c == "number" && (o.multipleOf = c);
}, Bp = (e, t, r, n) => {
  r.type = "boolean";
}, Qp = (e, t, r, n) => {
  t.target === "openapi-3.0" ? (r.type = "string", r.nullable = !0, r.enum = [null]) : r.type = "null";
}, Yp = (e, t, r, n) => {
  r.not = {};
}, Xp = (e, t, r, n) => {
}, em = (e, t, r, n) => {
}, tm = (e, t, r, n) => {
  const o = e._zod.def, s = ju(o.entries);
  s.every((a) => typeof a == "number") && (r.type = "number"), s.every((a) => typeof a == "string") && (r.type = "string"), r.enum = s;
}, rm = (e, t, r, n) => {
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
}, nm = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, om = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, sm = (e, t, r, n) => {
  const o = r, s = e._zod.def, { minimum: a, maximum: i } = e._zod.bag;
  typeof a == "number" && (o.minItems = a), typeof i == "number" && (o.maxItems = i), o.type = "array", o.items = ze(s.element, t, { ...n, path: [...n.path, "items"] });
}, am = (e, t, r, n) => {
  var d;
  const o = r, s = e._zod.def;
  o.type = "object", o.properties = {};
  const a = s.shape;
  for (const l in a)
    o.properties[l] = ze(a[l], t, {
      ...n,
      path: [...n.path, "properties", l]
    });
  const i = new Set(Object.keys(a)), c = new Set([...i].filter((l) => {
    const v = s.shape[l]._zod;
    return t.io === "input" ? v.optin === void 0 : v.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), ((d = s.catchall) == null ? void 0 : d._zod.def.type) === "never" ? o.additionalProperties = !1 : s.catchall ? s.catchall && (o.additionalProperties = ze(s.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, im = (e, t, r, n) => {
  const o = e._zod.def, s = o.inclusive === !1, a = o.options.map((i, c) => ze(i, t, {
    ...n,
    path: [...n.path, s ? "oneOf" : "anyOf", c]
  }));
  s ? r.oneOf = a : r.anyOf = a;
}, cm = (e, t, r, n) => {
  const o = e._zod.def, s = ze(o.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), a = ze(o.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), i = (d) => "allOf" in d && Object.keys(d).length === 1, c = [
    ...i(s) ? s.allOf : [s],
    ...i(a) ? a.allOf : [a]
  ];
  r.allOf = c;
}, um = (e, t, r, n) => {
  const o = r, s = e._zod.def;
  o.type = "object";
  const a = s.keyType, i = a._zod.bag, c = i == null ? void 0 : i.patterns;
  if (s.mode === "loose" && c && c.size > 0) {
    const l = ze(s.valueType, t, {
      ...n,
      path: [...n.path, "patternProperties", "*"]
    });
    o.patternProperties = {};
    for (const v of c)
      o.patternProperties[v.source] = l;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (o.propertyNames = ze(s.keyType, t, {
      ...n,
      path: [...n.path, "propertyNames"]
    })), o.additionalProperties = ze(s.valueType, t, {
      ...n,
      path: [...n.path, "additionalProperties"]
    });
  const d = a._zod.values;
  if (d) {
    const l = [...d].filter((v) => typeof v == "string" || typeof v == "number");
    l.length > 0 && (o.required = l);
  }
}, lm = (e, t, r, n) => {
  const o = e._zod.def, s = ze(o.innerType, t, n), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = o.innerType, r.nullable = !0) : r.anyOf = [s, { type: "null" }];
}, dm = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, fm = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.default = JSON.parse(JSON.stringify(o.defaultValue));
}, hm = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, pm = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
  let a;
  try {
    a = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  r.default = a;
}, mm = (e, t, r, n) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  ze(s, t, n);
  const a = t.seen.get(e);
  a.ref = s;
}, _m = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.readOnly = !0;
}, sl = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
};
function Co(e) {
  return !!e._zod;
}
function bt(e, t) {
  return Co(e) ? Uu(e, t) : e.safeParse(t);
}
function al(e) {
  var r, n;
  if (!e)
    return;
  let t;
  if (Co(e) ? t = (n = (r = e._zod) == null ? void 0 : r.def) == null ? void 0 : n.shape : t = e.shape, !!t) {
    if (typeof t == "function")
      try {
        return t();
      } catch {
        return;
      }
    return t;
  }
}
function ym(e) {
  var o;
  if (Co(e)) {
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
const gm = /* @__PURE__ */ V("ZodISODateTime", (e, t) => {
  dh.init(e, t), Ne.init(e, t);
});
function il(e) {
  return /* @__PURE__ */ gp(gm, e);
}
const vm = /* @__PURE__ */ V("ZodISODate", (e, t) => {
  fh.init(e, t), Ne.init(e, t);
});
function $m(e) {
  return /* @__PURE__ */ vp(vm, e);
}
const wm = /* @__PURE__ */ V("ZodISOTime", (e, t) => {
  hh.init(e, t), Ne.init(e, t);
});
function bm(e) {
  return /* @__PURE__ */ $p(wm, e);
}
const Sm = /* @__PURE__ */ V("ZodISODuration", (e, t) => {
  ph.init(e, t), Ne.init(e, t);
});
function Em(e) {
  return /* @__PURE__ */ wp(Sm, e);
}
const km = (e, t) => {
  Au.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => nf(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => rf(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, ws, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, ws, 2);
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
}, rt = V("ZodError", km, {
  Parent: Error
}), Pm = /* @__PURE__ */ Ws(rt), Tm = /* @__PURE__ */ Bs(rt), Rm = /* @__PURE__ */ Ro(rt), Om = /* @__PURE__ */ Oo(rt), Im = /* @__PURE__ */ sf(rt), Cm = /* @__PURE__ */ af(rt), Nm = /* @__PURE__ */ cf(rt), jm = /* @__PURE__ */ uf(rt), qm = /* @__PURE__ */ lf(rt), zm = /* @__PURE__ */ df(rt), Mm = /* @__PURE__ */ ff(rt), Am = /* @__PURE__ */ hf(rt), ke = /* @__PURE__ */ V("ZodType", (e, t) => (Ee.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: ho(e, "input"),
    output: ho(e, "output")
  }
}), e.toJSONSchema = xp(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(Pt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, n) => Tt(e, r, n), e.brand = () => e, e.register = (r, n) => (r.add(e, n), e), e.parse = (r, n) => Pm(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Rm(e, r, n), e.parseAsync = async (r, n) => Tm(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Om(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Im(e, r, n), e.decode = (r, n) => Cm(e, r, n), e.encodeAsync = async (r, n) => Nm(e, r, n), e.decodeAsync = async (r, n) => jm(e, r, n), e.safeEncode = (r, n) => qm(e, r, n), e.safeDecode = (r, n) => zm(e, r, n), e.safeEncodeAsync = async (r, n) => Mm(e, r, n), e.safeDecodeAsync = async (r, n) => Am(e, r, n), e.refine = (r, n) => e.check(I_(r, n)), e.superRefine = (r) => e.check(C_(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ cr(r)), e.optional = () => qe(e), e.exactOptional = () => y_(e), e.nullable = () => Ga(e), e.nullish = () => qe(Ga(e)), e.nonoptional = (r) => S_(e, r), e.array = () => G(e), e.or = (r) => Pe([e, r]), e.and = (r) => Xs(e, r), e.transform = (r) => Es(e, pl(r)), e.default = (r) => $_(e, r), e.prefault = (r) => b_(e, r), e.catch = (r) => k_(e, r), e.pipe = (r) => Es(e, r), e.readonly = () => R_(e), e.describe = (r) => {
  const n = e.clone();
  return gr.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    var r;
    return (r = gr.get(e)) == null ? void 0 : r.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return gr.get(e);
  const n = e.clone();
  return gr.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), cl = /* @__PURE__ */ V("_ZodString", (e, t) => {
  Qs.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (n, o, s) => Gp(e, n, o);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(/* @__PURE__ */ Ip(...n)), e.includes = (...n) => e.check(/* @__PURE__ */ jp(...n)), e.startsWith = (...n) => e.check(/* @__PURE__ */ qp(...n)), e.endsWith = (...n) => e.check(/* @__PURE__ */ zp(...n)), e.min = (...n) => e.check(/* @__PURE__ */ fo(...n)), e.max = (...n) => e.check(/* @__PURE__ */ el(...n)), e.length = (...n) => e.check(/* @__PURE__ */ tl(...n)), e.nonempty = (...n) => e.check(/* @__PURE__ */ fo(1, ...n)), e.lowercase = (n) => e.check(/* @__PURE__ */ Cp(n)), e.uppercase = (n) => e.check(/* @__PURE__ */ Np(n)), e.trim = () => e.check(/* @__PURE__ */ Ap()), e.normalize = (...n) => e.check(/* @__PURE__ */ Mp(...n)), e.toLowerCase = () => e.check(/* @__PURE__ */ Dp()), e.toUpperCase = () => e.check(/* @__PURE__ */ Up()), e.slugify = () => e.check(/* @__PURE__ */ Vp());
}), Dm = /* @__PURE__ */ V("ZodString", (e, t) => {
  Qs.init(e, t), cl.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ Yh(Um, r)), e.url = (r) => e.check(/* @__PURE__ */ Xu(ul, r)), e.jwt = (r) => e.check(/* @__PURE__ */ yp(t_, r)), e.emoji = (r) => e.check(/* @__PURE__ */ np(Lm, r)), e.guid = (r) => e.check(/* @__PURE__ */ Fa(xa, r)), e.uuid = (r) => e.check(/* @__PURE__ */ Xh(zr, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ ep(zr, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ tp(zr, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ rp(zr, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ op(Fm, r)), e.guid = (r) => e.check(/* @__PURE__ */ Fa(xa, r)), e.cuid = (r) => e.check(/* @__PURE__ */ sp(Zm, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ ap(Hm, r)), e.ulid = (r) => e.check(/* @__PURE__ */ ip(Km, r)), e.base64 = (r) => e.check(/* @__PURE__ */ pp(Ym, r)), e.base64url = (r) => e.check(/* @__PURE__ */ mp(Xm, r)), e.xid = (r) => e.check(/* @__PURE__ */ cp(xm, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ up(Jm, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ lp(Gm, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ dp(Wm, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ fp(Bm, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ hp(Qm, r)), e.e164 = (r) => e.check(/* @__PURE__ */ _p(e_, r)), e.datetime = (r) => e.check(il(r)), e.date = (r) => e.check($m(r)), e.time = (r) => e.check(bm(r)), e.duration = (r) => e.check(Em(r));
});
function q(e) {
  return /* @__PURE__ */ Qh(Dm, e);
}
const Ne = /* @__PURE__ */ V("ZodStringFormat", (e, t) => {
  Re.init(e, t), cl.init(e, t);
}), Um = /* @__PURE__ */ V("ZodEmail", (e, t) => {
  rh.init(e, t), Ne.init(e, t);
}), xa = /* @__PURE__ */ V("ZodGUID", (e, t) => {
  eh.init(e, t), Ne.init(e, t);
}), zr = /* @__PURE__ */ V("ZodUUID", (e, t) => {
  th.init(e, t), Ne.init(e, t);
}), ul = /* @__PURE__ */ V("ZodURL", (e, t) => {
  nh.init(e, t), Ne.init(e, t);
});
function Vm(e) {
  return /* @__PURE__ */ Xu(ul, e);
}
const Lm = /* @__PURE__ */ V("ZodEmoji", (e, t) => {
  oh.init(e, t), Ne.init(e, t);
}), Fm = /* @__PURE__ */ V("ZodNanoID", (e, t) => {
  sh.init(e, t), Ne.init(e, t);
}), Zm = /* @__PURE__ */ V("ZodCUID", (e, t) => {
  ah.init(e, t), Ne.init(e, t);
}), Hm = /* @__PURE__ */ V("ZodCUID2", (e, t) => {
  ih.init(e, t), Ne.init(e, t);
}), Km = /* @__PURE__ */ V("ZodULID", (e, t) => {
  ch.init(e, t), Ne.init(e, t);
}), xm = /* @__PURE__ */ V("ZodXID", (e, t) => {
  uh.init(e, t), Ne.init(e, t);
}), Jm = /* @__PURE__ */ V("ZodKSUID", (e, t) => {
  lh.init(e, t), Ne.init(e, t);
}), Gm = /* @__PURE__ */ V("ZodIPv4", (e, t) => {
  mh.init(e, t), Ne.init(e, t);
}), Wm = /* @__PURE__ */ V("ZodIPv6", (e, t) => {
  _h.init(e, t), Ne.init(e, t);
}), Bm = /* @__PURE__ */ V("ZodCIDRv4", (e, t) => {
  yh.init(e, t), Ne.init(e, t);
}), Qm = /* @__PURE__ */ V("ZodCIDRv6", (e, t) => {
  gh.init(e, t), Ne.init(e, t);
}), Ym = /* @__PURE__ */ V("ZodBase64", (e, t) => {
  vh.init(e, t), Ne.init(e, t);
}), Xm = /* @__PURE__ */ V("ZodBase64URL", (e, t) => {
  wh.init(e, t), Ne.init(e, t);
}), e_ = /* @__PURE__ */ V("ZodE164", (e, t) => {
  bh.init(e, t), Ne.init(e, t);
}), t_ = /* @__PURE__ */ V("ZodJWT", (e, t) => {
  Eh.init(e, t), Ne.init(e, t);
}), Ys = /* @__PURE__ */ V("ZodNumber", (e, t) => {
  Gu.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (n, o, s) => Wp(e, n, o), e.gt = (n, o) => e.check(/* @__PURE__ */ Ha(n, o)), e.gte = (n, o) => e.check(/* @__PURE__ */ Wo(n, o)), e.min = (n, o) => e.check(/* @__PURE__ */ Wo(n, o)), e.lt = (n, o) => e.check(/* @__PURE__ */ Za(n, o)), e.lte = (n, o) => e.check(/* @__PURE__ */ Go(n, o)), e.max = (n, o) => e.check(/* @__PURE__ */ Go(n, o)), e.int = (n) => e.check(Ja(n)), e.safe = (n) => e.check(Ja(n)), e.positive = (n) => e.check(/* @__PURE__ */ Ha(0, n)), e.nonnegative = (n) => e.check(/* @__PURE__ */ Wo(0, n)), e.negative = (n) => e.check(/* @__PURE__ */ Za(0, n)), e.nonpositive = (n) => e.check(/* @__PURE__ */ Go(0, n)), e.multipleOf = (n, o) => e.check(/* @__PURE__ */ Ka(n, o)), e.step = (n, o) => e.check(/* @__PURE__ */ Ka(n, o)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function me(e) {
  return /* @__PURE__ */ bp(Ys, e);
}
const r_ = /* @__PURE__ */ V("ZodNumberFormat", (e, t) => {
  kh.init(e, t), Ys.init(e, t);
});
function Ja(e) {
  return /* @__PURE__ */ Ep(r_, e);
}
const n_ = /* @__PURE__ */ V("ZodBoolean", (e, t) => {
  Ph.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => Bp(e, r, n);
});
function Se(e) {
  return /* @__PURE__ */ kp(n_, e);
}
const o_ = /* @__PURE__ */ V("ZodNull", (e, t) => {
  Th.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => Qp(e, r, n);
});
function ll(e) {
  return /* @__PURE__ */ Pp(o_, e);
}
const s_ = /* @__PURE__ */ V("ZodAny", (e, t) => {
  Rh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => Xp();
});
function a_() {
  return /* @__PURE__ */ Tp(s_);
}
const i_ = /* @__PURE__ */ V("ZodUnknown", (e, t) => {
  Oh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => em();
});
function Ie() {
  return /* @__PURE__ */ Rp(i_);
}
const c_ = /* @__PURE__ */ V("ZodNever", (e, t) => {
  Ih.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => Yp(e, r, n);
});
function u_(e) {
  return /* @__PURE__ */ Op(c_, e);
}
const l_ = /* @__PURE__ */ V("ZodArray", (e, t) => {
  Ch.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => sm(e, r, n, o), e.element = t.element, e.min = (r, n) => e.check(/* @__PURE__ */ fo(r, n)), e.nonempty = (r) => e.check(/* @__PURE__ */ fo(1, r)), e.max = (r, n) => e.check(/* @__PURE__ */ el(r, n)), e.length = (r, n) => e.check(/* @__PURE__ */ tl(r, n)), e.unwrap = () => e.element;
});
function G(e, t) {
  return /* @__PURE__ */ Lp(l_, e, t);
}
const dl = /* @__PURE__ */ V("ZodObject", (e, t) => {
  jh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => am(e, r, n, o), pe(e, "shape", () => t.shape), e.keyof = () => et(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Ie() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Ie() }), e.strict = () => e.clone({ ...e._zod.def, catchall: u_() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => Qd(e, r), e.safeExtend = (r) => Yd(e, r), e.merge = (r) => Xd(e, r), e.pick = (r) => Wd(e, r), e.omit = (r) => Bd(e, r), e.partial = (...r) => ef(ml, e, r[0]), e.required = (...r) => tf(_l, e, r[0]);
});
function W(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...Y(t)
  };
  return new dl(r);
}
function Fe(e, t) {
  return new dl({
    type: "object",
    shape: e,
    catchall: Ie(),
    ...Y(t)
  });
}
const fl = /* @__PURE__ */ V("ZodUnion", (e, t) => {
  Qu.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => im(e, r, n, o), e.options = t.options;
});
function Pe(e, t) {
  return new fl({
    type: "union",
    options: e,
    ...Y(t)
  });
}
const d_ = /* @__PURE__ */ V("ZodDiscriminatedUnion", (e, t) => {
  fl.init(e, t), qh.init(e, t);
});
function hl(e, t, r) {
  return new d_({
    type: "union",
    options: t,
    discriminator: e,
    ...Y(r)
  });
}
const f_ = /* @__PURE__ */ V("ZodIntersection", (e, t) => {
  zh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => cm(e, r, n, o);
});
function Xs(e, t) {
  return new f_({
    type: "intersection",
    left: e,
    right: t
  });
}
const h_ = /* @__PURE__ */ V("ZodRecord", (e, t) => {
  Mh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => um(e, r, n, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Ce(e, t, r) {
  return new h_({
    type: "record",
    keyType: e,
    valueType: t,
    ...Y(r)
  });
}
const Ss = /* @__PURE__ */ V("ZodEnum", (e, t) => {
  Ah.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (n, o, s) => tm(e, n, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, o) => {
    const s = {};
    for (const a of n)
      if (r.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Ss({
      ...t,
      checks: [],
      ...Y(o),
      entries: s
    });
  }, e.exclude = (n, o) => {
    const s = { ...t.entries };
    for (const a of n)
      if (r.has(a))
        delete s[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Ss({
      ...t,
      checks: [],
      ...Y(o),
      entries: s
    });
  };
});
function et(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Ss({
    type: "enum",
    entries: r,
    ...Y(t)
  });
}
const p_ = /* @__PURE__ */ V("ZodLiteral", (e, t) => {
  Dh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => rm(e, r, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function X(e, t) {
  return new p_({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...Y(t)
  });
}
const m_ = /* @__PURE__ */ V("ZodTransform", (e, t) => {
  Uh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => om(e, r), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Cu(e.constructor.name);
    r.addIssue = (s) => {
      if (typeof s == "string")
        r.issues.push(kr(s, r.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(kr(a));
      }
    };
    const o = t.transform(r.value, r);
    return o instanceof Promise ? o.then((s) => (r.value = s, r)) : (r.value = o, r);
  };
});
function pl(e) {
  return new m_({
    type: "transform",
    transform: e
  });
}
const ml = /* @__PURE__ */ V("ZodOptional", (e, t) => {
  Yu.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => sl(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function qe(e) {
  return new ml({
    type: "optional",
    innerType: e
  });
}
const __ = /* @__PURE__ */ V("ZodExactOptional", (e, t) => {
  Vh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => sl(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function y_(e) {
  return new __({
    type: "optional",
    innerType: e
  });
}
const g_ = /* @__PURE__ */ V("ZodNullable", (e, t) => {
  Lh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => lm(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Ga(e) {
  return new g_({
    type: "nullable",
    innerType: e
  });
}
const v_ = /* @__PURE__ */ V("ZodDefault", (e, t) => {
  Fh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => fm(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function $_(e, t) {
  return new v_({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : zu(t);
    }
  });
}
const w_ = /* @__PURE__ */ V("ZodPrefault", (e, t) => {
  Zh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => hm(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function b_(e, t) {
  return new w_({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : zu(t);
    }
  });
}
const _l = /* @__PURE__ */ V("ZodNonOptional", (e, t) => {
  Hh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => dm(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function S_(e, t) {
  return new _l({
    type: "nonoptional",
    innerType: e,
    ...Y(t)
  });
}
const E_ = /* @__PURE__ */ V("ZodCatch", (e, t) => {
  Kh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => pm(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function k_(e, t) {
  return new E_({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const P_ = /* @__PURE__ */ V("ZodPipe", (e, t) => {
  xh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => mm(e, r, n, o), e.in = t.in, e.out = t.out;
});
function Es(e, t) {
  return new P_({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const T_ = /* @__PURE__ */ V("ZodReadonly", (e, t) => {
  Jh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => _m(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function R_(e) {
  return new T_({
    type: "readonly",
    innerType: e
  });
}
const yl = /* @__PURE__ */ V("ZodCustom", (e, t) => {
  Gh.init(e, t), ke.init(e, t), e._zod.processJSONSchema = (r, n, o) => nm(e, r);
});
function O_(e, t) {
  return /* @__PURE__ */ Fp(yl, e ?? (() => !0), t);
}
function I_(e, t = {}) {
  return /* @__PURE__ */ Zp(yl, e, t);
}
function C_(e) {
  return /* @__PURE__ */ Hp(e);
}
function gl(e, t) {
  return Es(pl(e), t);
}
const N_ = {
  custom: "custom"
};
function j_(e) {
  return /* @__PURE__ */ Sp(Ys, e);
}
const No = "2025-11-25", q_ = [No, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], Vt = "io.modelcontextprotocol/related-task", jo = "2.0", Ze = O_((e) => e !== null && (typeof e == "object" || typeof e == "function")), vl = Pe([q(), me().int()]), $l = q();
Fe({
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: Pe([me(), ll()]).optional(),
  /**
   * Time in milliseconds to wait between task status requests.
   */
  pollInterval: me().optional()
});
const z_ = W({
  ttl: me().optional()
}), M_ = W({
  taskId: q()
}), ea = Fe({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: vl.optional(),
  /**
   * If specified, this request is related to the provided task.
   */
  [Vt]: M_.optional()
}), tt = W({
  /**
   * See [General fields: `_meta`](/specification/draft/basic/index#meta) for notes on `_meta` usage.
   */
  _meta: ea.optional()
}), Tr = tt.extend({
  /**
   * If specified, the caller is requesting task-augmented execution for this request.
   * The request will return a CreateTaskResult immediately, and the actual result can be
   * retrieved later via tasks/result.
   *
   * Task augmentation is subject to capability negotiation - receivers MUST declare support
   * for task augmentation of specific request types in their capabilities.
   */
  task: z_.optional()
}), A_ = (e) => Tr.safeParse(e).success, He = W({
  method: q(),
  params: tt.loose().optional()
}), nt = W({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ea.optional()
}), ot = W({
  method: q(),
  params: nt.loose().optional()
}), Ke = Fe({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ea.optional()
}), qo = Pe([q(), me().int()]), wl = W({
  jsonrpc: X(jo),
  id: qo,
  ...He.shape
}).strict(), ks = (e) => wl.safeParse(e).success, bl = W({
  jsonrpc: X(jo),
  ...ot.shape
}).strict(), D_ = (e) => bl.safeParse(e).success, ta = W({
  jsonrpc: X(jo),
  id: qo,
  result: Ke
}).strict(), vr = (e) => ta.safeParse(e).success;
var ne;
(function(e) {
  e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(ne || (ne = {}));
const ra = W({
  jsonrpc: X(jo),
  id: qo.optional(),
  error: W({
    /**
     * The error type that occurred.
     */
    code: me().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: q(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: Ie().optional()
  })
}).strict(), U_ = (e) => ra.safeParse(e).success, ao = Pe([
  wl,
  bl,
  ta,
  ra
]);
Pe([ta, ra]);
const er = Ke.strict(), V_ = nt.extend({
  /**
   * The ID of the request to cancel.
   *
   * This MUST correspond to the ID of a request previously issued in the same direction.
   */
  requestId: qo.optional(),
  /**
   * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
   */
  reason: q().optional()
}), na = ot.extend({
  method: X("notifications/cancelled"),
  params: V_
}), L_ = W({
  /**
   * URL or data URI for the icon.
   */
  src: q(),
  /**
   * Optional MIME type for the icon.
   */
  mimeType: q().optional(),
  /**
   * Optional array of strings that specify sizes at which the icon can be used.
   * Each string should be in WxH format (e.g., `"48x48"`, `"96x96"`) or `"any"` for scalable formats like SVG.
   *
   * If not provided, the client should assume that the icon can be used at any size.
   */
  sizes: G(q()).optional(),
  /**
   * Optional specifier for the theme this icon is designed for. `light` indicates
   * the icon is designed to be used with a light background, and `dark` indicates
   * the icon is designed to be used with a dark background.
   *
   * If not provided, the client should assume the icon can be used with any theme.
   */
  theme: et(["light", "dark"]).optional()
}), Rr = W({
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
  icons: G(L_).optional()
}), ar = W({
  /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
  name: q(),
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title: q().optional()
}), Sl = ar.extend({
  ...ar.shape,
  ...Rr.shape,
  version: q(),
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl: q().optional(),
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description: q().optional()
}), F_ = Xs(W({
  applyDefaults: Se().optional()
}), Ce(q(), Ie())), Z_ = gl((e) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0 ? { form: {} } : e, Xs(W({
  form: F_.optional(),
  url: Ze.optional()
}), Ce(q(), Ie()).optional())), H_ = Fe({
  /**
   * Present if the client supports listing tasks.
   */
  list: Ze.optional(),
  /**
   * Present if the client supports cancelling tasks.
   */
  cancel: Ze.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: Fe({
    /**
     * Task support for sampling requests.
     */
    sampling: Fe({
      createMessage: Ze.optional()
    }).optional(),
    /**
     * Task support for elicitation requests.
     */
    elicitation: Fe({
      create: Ze.optional()
    }).optional()
  }).optional()
}), K_ = Fe({
  /**
   * Present if the server supports listing tasks.
   */
  list: Ze.optional(),
  /**
   * Present if the server supports cancelling tasks.
   */
  cancel: Ze.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: Fe({
    /**
     * Task support for tool requests.
     */
    tools: Fe({
      call: Ze.optional()
    }).optional()
  }).optional()
}), x_ = W({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: Ce(q(), Ze).optional(),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: W({
    /**
     * Present if the client supports context inclusion via includeContext parameter.
     * If not declared, servers SHOULD only use `includeContext: "none"` (or omit it).
     */
    context: Ze.optional(),
    /**
     * Present if the client supports tool use via tools and toolChoice parameters.
     */
    tools: Ze.optional()
  }).optional(),
  /**
   * Present if the client supports eliciting user input.
   */
  elicitation: Z_.optional(),
  /**
   * Present if the client supports listing roots.
   */
  roots: W({
    /**
     * Whether the client supports issuing notifications for changes to the roots list.
     */
    listChanged: Se().optional()
  }).optional(),
  /**
   * Present if the client supports task creation.
   */
  tasks: H_.optional()
}), J_ = tt.extend({
  /**
   * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
   */
  protocolVersion: q(),
  capabilities: x_,
  clientInfo: Sl
}), G_ = He.extend({
  method: X("initialize"),
  params: J_
}), W_ = W({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: Ce(q(), Ze).optional(),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: Ze.optional(),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: Ze.optional(),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: W({
    /**
     * Whether this server supports issuing notifications for changes to the prompt list.
     */
    listChanged: Se().optional()
  }).optional(),
  /**
   * Present if the server offers any resources to read.
   */
  resources: W({
    /**
     * Whether this server supports clients subscribing to resource updates.
     */
    subscribe: Se().optional(),
    /**
     * Whether this server supports issuing notifications for changes to the resource list.
     */
    listChanged: Se().optional()
  }).optional(),
  /**
   * Present if the server offers any tools to call.
   */
  tools: W({
    /**
     * Whether this server supports issuing notifications for changes to the tool list.
     */
    listChanged: Se().optional()
  }).optional(),
  /**
   * Present if the server supports task creation.
   */
  tasks: K_.optional()
}), El = Ke.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: q(),
  capabilities: W_,
  serverInfo: Sl,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: q().optional()
}), kl = ot.extend({
  method: X("notifications/initialized"),
  params: nt.optional()
}), B_ = (e) => kl.safeParse(e).success, oa = He.extend({
  method: X("ping"),
  params: tt.optional()
}), Q_ = W({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: me(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: qe(me()),
  /**
   * An optional message describing the current progress.
   */
  message: qe(q())
}), Y_ = W({
  ...nt.shape,
  ...Q_.shape,
  /**
   * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
   */
  progressToken: vl
}), sa = ot.extend({
  method: X("notifications/progress"),
  params: Y_
}), X_ = tt.extend({
  /**
   * An opaque token representing the current pagination position.
   * If provided, the server should return results starting after this cursor.
   */
  cursor: $l.optional()
}), Or = He.extend({
  params: X_.optional()
}), Ir = Ke.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: $l.optional()
}), ey = et(["working", "input_required", "completed", "failed", "cancelled"]), Cr = W({
  taskId: q(),
  status: ey,
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: Pe([me(), ll()]),
  /**
   * ISO 8601 timestamp when the task was created.
   */
  createdAt: q(),
  /**
   * ISO 8601 timestamp when the task was last updated.
   */
  lastUpdatedAt: q(),
  pollInterval: qe(me()),
  /**
   * Optional diagnostic message for failed tasks or other status information.
   */
  statusMessage: qe(q())
}), Pr = Ke.extend({
  task: Cr
}), ty = nt.merge(Cr), po = ot.extend({
  method: X("notifications/tasks/status"),
  params: ty
}), aa = He.extend({
  method: X("tasks/get"),
  params: tt.extend({
    taskId: q()
  })
}), ia = Ke.merge(Cr), ca = He.extend({
  method: X("tasks/result"),
  params: tt.extend({
    taskId: q()
  })
});
Ke.loose();
const ua = Or.extend({
  method: X("tasks/list")
}), la = Ir.extend({
  tasks: G(Cr)
}), da = He.extend({
  method: X("tasks/cancel"),
  params: tt.extend({
    taskId: q()
  })
}), ry = Ke.merge(Cr), Pl = W({
  /**
   * The URI of this resource.
   */
  uri: q(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: qe(q()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), Tl = Pl.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: q()
}), fa = q().refine((e) => {
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), Rl = Pl.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: fa
}), Nr = et(["user", "assistant"]), ur = W({
  /**
   * Intended audience(s) for the resource.
   */
  audience: G(Nr).optional(),
  /**
   * Importance hint for the resource, from 0 (least) to 1 (most).
   */
  priority: me().min(0).max(1).optional(),
  /**
   * ISO 8601 timestamp for the most recent modification.
   */
  lastModified: il({ offset: !0 }).optional()
}), Ol = W({
  ...ar.shape,
  ...Rr.shape,
  /**
   * The URI of this resource.
   */
  uri: q(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: qe(q()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: qe(q()),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: qe(Fe({}))
}), ny = W({
  ...ar.shape,
  ...Rr.shape,
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: q(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: qe(q()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: qe(q()),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: qe(Fe({}))
}), oy = Or.extend({
  method: X("resources/list")
}), Il = Ir.extend({
  resources: G(Ol)
}), sy = Or.extend({
  method: X("resources/templates/list")
}), Cl = Ir.extend({
  resourceTemplates: G(ny)
}), ha = tt.extend({
  /**
   * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
   *
   * @format uri
   */
  uri: q()
}), ay = ha, iy = He.extend({
  method: X("resources/read"),
  params: ay
}), Nl = Ke.extend({
  contents: G(Pe([Tl, Rl]))
}), jl = ot.extend({
  method: X("notifications/resources/list_changed"),
  params: nt.optional()
}), cy = ha, uy = He.extend({
  method: X("resources/subscribe"),
  params: cy
}), ly = ha, dy = He.extend({
  method: X("resources/unsubscribe"),
  params: ly
}), fy = nt.extend({
  /**
   * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
   */
  uri: q()
}), hy = ot.extend({
  method: X("notifications/resources/updated"),
  params: fy
}), py = W({
  /**
   * The name of the argument.
   */
  name: q(),
  /**
   * A human-readable description of the argument.
   */
  description: qe(q()),
  /**
   * Whether this argument must be provided.
   */
  required: qe(Se())
}), my = W({
  ...ar.shape,
  ...Rr.shape,
  /**
   * An optional description of what this prompt provides
   */
  description: qe(q()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: qe(G(py)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: qe(Fe({}))
}), _y = Or.extend({
  method: X("prompts/list")
}), ql = Ir.extend({
  prompts: G(my)
}), yy = tt.extend({
  /**
   * The name of the prompt or prompt template.
   */
  name: q(),
  /**
   * Arguments to use for templating the prompt.
   */
  arguments: Ce(q(), q()).optional()
}), gy = He.extend({
  method: X("prompts/get"),
  params: yy
}), pa = W({
  type: X("text"),
  /**
   * The text content of the message.
   */
  text: q(),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), ma = W({
  type: X("image"),
  /**
   * The base64-encoded image data.
   */
  data: fa,
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: q(),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), _a = W({
  type: X("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: fa,
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: q(),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), vy = W({
  type: X("tool_use"),
  /**
   * The name of the tool to invoke.
   * Must match a tool name from the request's tools array.
   */
  name: q(),
  /**
   * Unique identifier for this tool call.
   * Used to correlate with ToolResultContent in subsequent messages.
   */
  id: q(),
  /**
   * Arguments to pass to the tool.
   * Must conform to the tool's inputSchema.
   */
  input: Ce(q(), Ie()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), $y = W({
  type: X("resource"),
  resource: Pe([Tl, Rl]),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), wy = Ol.extend({
  type: X("resource_link")
}), ya = Pe([
  pa,
  ma,
  _a,
  wy,
  $y
]), by = W({
  role: Nr,
  content: ya
}), zl = Ke.extend({
  /**
   * An optional description for the prompt.
   */
  description: q().optional(),
  messages: G(by)
}), Ml = ot.extend({
  method: X("notifications/prompts/list_changed"),
  params: nt.optional()
}), Sy = W({
  /**
   * A human-readable title for the tool.
   */
  title: q().optional(),
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint: Se().optional(),
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint: Se().optional(),
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint: Se().optional(),
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint: Se().optional()
}), Ey = W({
  /**
   * Indicates the tool's preference for task-augmented execution.
   * - "required": Clients MUST invoke the tool as a task
   * - "optional": Clients MAY invoke the tool as a task or normal request
   * - "forbidden": Clients MUST NOT attempt to invoke the tool as a task
   *
   * If not present, defaults to "forbidden".
   */
  taskSupport: et(["required", "optional", "forbidden"]).optional()
}), Al = W({
  ...ar.shape,
  ...Rr.shape,
  /**
   * A human-readable description of the tool.
   */
  description: q().optional(),
  /**
   * A JSON Schema 2020-12 object defining the expected parameters for the tool.
   * Must have type: 'object' at the root level per MCP spec.
   */
  inputSchema: W({
    type: X("object"),
    properties: Ce(q(), Ze).optional(),
    required: G(q()).optional()
  }).catchall(Ie()),
  /**
   * An optional JSON Schema 2020-12 object defining the structure of the tool's output
   * returned in the structuredContent field of a CallToolResult.
   * Must have type: 'object' at the root level per MCP spec.
   */
  outputSchema: W({
    type: X("object"),
    properties: Ce(q(), Ze).optional(),
    required: G(q()).optional()
  }).catchall(Ie()).optional(),
  /**
   * Optional additional tool information.
   */
  annotations: Sy.optional(),
  /**
   * Execution-related properties for this tool.
   */
  execution: Ey.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), ky = Or.extend({
  method: X("tools/list")
}), ga = Ir.extend({
  tools: G(Al)
}), zo = Ke.extend({
  /**
   * A list of content objects that represent the result of the tool call.
   *
   * If the Tool does not define an outputSchema, this field MUST be present in the result.
   * For backwards compatibility, this field is always present, but it may be empty.
   */
  content: G(ya).default([]),
  /**
   * An object containing structured tool output.
   *
   * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
   */
  structuredContent: Ce(q(), Ie()).optional(),
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
  isError: Se().optional()
});
zo.or(Ke.extend({
  toolResult: Ie()
}));
const Py = Tr.extend({
  /**
   * The name of the tool to call.
   */
  name: q(),
  /**
   * Arguments to pass to the tool.
   */
  arguments: Ce(q(), Ie()).optional()
}), Ty = He.extend({
  method: X("tools/call"),
  params: Py
}), Dl = ot.extend({
  method: X("notifications/tools/list_changed"),
  params: nt.optional()
}), Ry = W({
  /**
   * If true, the list will be refreshed automatically when a list changed notification is received.
   * The callback will be called with the updated list.
   *
   * If false, the callback will be called with null items, allowing manual refresh.
   *
   * @default true
   */
  autoRefresh: Se().default(!0),
  /**
   * Debounce time in milliseconds for list changed notification processing.
   *
   * Multiple notifications received within this timeframe will only trigger one refresh.
   * Set to 0 to disable debouncing.
   *
   * @default 300
   */
  debounceMs: me().int().nonnegative().default(300)
}), Ul = et(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), Oy = tt.extend({
  /**
   * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
   */
  level: Ul
}), Iy = He.extend({
  method: X("logging/setLevel"),
  params: Oy
}), Cy = nt.extend({
  /**
   * The severity of this log message.
   */
  level: Ul,
  /**
   * An optional name of the logger issuing this message.
   */
  logger: q().optional(),
  /**
   * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
   */
  data: Ie()
}), Ny = ot.extend({
  method: X("notifications/message"),
  params: Cy
}), jy = W({
  /**
   * A hint for a model name.
   */
  name: q().optional()
}), qy = W({
  /**
   * Optional hints to use for model selection.
   */
  hints: G(jy).optional(),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: me().min(0).max(1).optional(),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: me().min(0).max(1).optional(),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: me().min(0).max(1).optional()
}), zy = W({
  /**
   * Controls when tools are used:
   * - "auto": Model decides whether to use tools (default)
   * - "required": Model MUST use at least one tool before completing
   * - "none": Model MUST NOT use any tools
   */
  mode: et(["auto", "required", "none"]).optional()
}), My = W({
  type: X("tool_result"),
  toolUseId: q().describe("The unique identifier for the corresponding tool call."),
  content: G(ya).default([]),
  structuredContent: W({}).loose().optional(),
  isError: Se().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), Ay = hl("type", [pa, ma, _a]), mo = hl("type", [
  pa,
  ma,
  _a,
  vy,
  My
]), Dy = W({
  role: Nr,
  content: Pe([mo, G(mo)]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), Uy = Tr.extend({
  messages: G(Dy),
  /**
   * The server's preferences for which model to select. The client MAY modify or omit this request.
   */
  modelPreferences: qy.optional(),
  /**
   * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
   */
  systemPrompt: q().optional(),
  /**
   * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt.
   * The client MAY ignore this request.
   *
   * Default is "none". Values "thisServer" and "allServers" are soft-deprecated. Servers SHOULD only use these values if the client
   * declares ClientCapabilities.sampling.context. These values may be removed in future spec releases.
   */
  includeContext: et(["none", "thisServer", "allServers"]).optional(),
  temperature: me().optional(),
  /**
   * The requested maximum number of tokens to sample (to prevent runaway completions).
   *
   * The client MAY choose to sample fewer tokens than the requested maximum.
   */
  maxTokens: me().int(),
  stopSequences: G(q()).optional(),
  /**
   * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
   */
  metadata: Ze.optional(),
  /**
   * Tools that the model may use during generation.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   */
  tools: G(Al).optional(),
  /**
   * Controls how the model uses tools.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   * Default is `{ mode: "auto" }`.
   */
  toolChoice: zy.optional()
}), Vl = He.extend({
  method: X("sampling/createMessage"),
  params: Uy
}), Ll = Ke.extend({
  /**
   * The name of the model that generated the message.
   */
  model: q(),
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
  stopReason: qe(et(["endTurn", "stopSequence", "maxTokens"]).or(q())),
  role: Nr,
  /**
   * Response content. Single content block (text, image, or audio).
   */
  content: Ay
}), Fl = Ke.extend({
  /**
   * The name of the model that generated the message.
   */
  model: q(),
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
  stopReason: qe(et(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(q())),
  role: Nr,
  /**
   * Response content. May be a single block or array. May include ToolUseContent if stopReason is "toolUse".
   */
  content: Pe([mo, G(mo)])
}), Vy = W({
  type: X("boolean"),
  title: q().optional(),
  description: q().optional(),
  default: Se().optional()
}), Ly = W({
  type: X("string"),
  title: q().optional(),
  description: q().optional(),
  minLength: me().optional(),
  maxLength: me().optional(),
  format: et(["email", "uri", "date", "date-time"]).optional(),
  default: q().optional()
}), Fy = W({
  type: et(["number", "integer"]),
  title: q().optional(),
  description: q().optional(),
  minimum: me().optional(),
  maximum: me().optional(),
  default: me().optional()
}), Zy = W({
  type: X("string"),
  title: q().optional(),
  description: q().optional(),
  enum: G(q()),
  default: q().optional()
}), Hy = W({
  type: X("string"),
  title: q().optional(),
  description: q().optional(),
  oneOf: G(W({
    const: q(),
    title: q()
  })),
  default: q().optional()
}), Ky = W({
  type: X("string"),
  title: q().optional(),
  description: q().optional(),
  enum: G(q()),
  enumNames: G(q()).optional(),
  default: q().optional()
}), xy = Pe([Zy, Hy]), Jy = W({
  type: X("array"),
  title: q().optional(),
  description: q().optional(),
  minItems: me().optional(),
  maxItems: me().optional(),
  items: W({
    type: X("string"),
    enum: G(q())
  }),
  default: G(q()).optional()
}), Gy = W({
  type: X("array"),
  title: q().optional(),
  description: q().optional(),
  minItems: me().optional(),
  maxItems: me().optional(),
  items: W({
    anyOf: G(W({
      const: q(),
      title: q()
    }))
  }),
  default: G(q()).optional()
}), Wy = Pe([Jy, Gy]), By = Pe([Ky, xy, Wy]), Qy = Pe([By, Vy, Ly, Fy]), Yy = Tr.extend({
  /**
   * The elicitation mode.
   *
   * Optional for backward compatibility. Clients MUST treat missing mode as "form".
   */
  mode: X("form").optional(),
  /**
   * The message to present to the user describing what information is being requested.
   */
  message: q(),
  /**
   * A restricted subset of JSON Schema.
   * Only top-level properties are allowed, without nesting.
   */
  requestedSchema: W({
    type: X("object"),
    properties: Ce(q(), Qy),
    required: G(q()).optional()
  })
}), Xy = Tr.extend({
  /**
   * The elicitation mode.
   */
  mode: X("url"),
  /**
   * The message to present to the user explaining why the interaction is needed.
   */
  message: q(),
  /**
   * The ID of the elicitation, which must be unique within the context of the server.
   * The client MUST treat this ID as an opaque value.
   */
  elicitationId: q(),
  /**
   * The URL that the user should navigate to.
   */
  url: q().url()
}), eg = Pe([Yy, Xy]), Zl = He.extend({
  method: X("elicitation/create"),
  params: eg
}), tg = nt.extend({
  /**
   * The ID of the elicitation that completed.
   */
  elicitationId: q()
}), rg = ot.extend({
  method: X("notifications/elicitation/complete"),
  params: tg
}), Hl = Ke.extend({
  /**
   * The user action in response to the elicitation.
   * - "accept": User submitted the form/confirmed the action
   * - "decline": User explicitly decline the action
   * - "cancel": User dismissed without making an explicit choice
   */
  action: et(["accept", "decline", "cancel"]),
  /**
   * The submitted form data, only present when action is "accept".
   * Contains values matching the requested schema.
   * Per MCP spec, content is "typically omitted" for decline/cancel actions.
   * We normalize null to undefined for leniency while maintaining type compatibility.
   */
  content: gl((e) => e === null ? void 0 : e, Ce(q(), Pe([q(), me(), Se(), G(q())])).optional())
}), ng = W({
  type: X("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: q()
}), og = W({
  type: X("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: q()
}), sg = tt.extend({
  ref: Pe([og, ng]),
  /**
   * The argument's information
   */
  argument: W({
    /**
     * The name of the argument
     */
    name: q(),
    /**
     * The value of the argument to use for completion matching.
     */
    value: q()
  }),
  context: W({
    /**
     * Previously-resolved variables in a URI template or prompt.
     */
    arguments: Ce(q(), q()).optional()
  }).optional()
}), ag = He.extend({
  method: X("completion/complete"),
  params: sg
}), Kl = Ke.extend({
  completion: Fe({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: G(q()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: qe(me().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: qe(Se())
  })
}), ig = W({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: q().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: q().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(q(), Ie()).optional()
}), cg = He.extend({
  method: X("roots/list"),
  params: tt.optional()
}), ug = Ke.extend({
  roots: G(ig)
}), lg = ot.extend({
  method: X("notifications/roots/list_changed"),
  params: nt.optional()
});
Pe([
  oa,
  G_,
  ag,
  Iy,
  gy,
  _y,
  oy,
  sy,
  iy,
  uy,
  dy,
  Ty,
  ky,
  aa,
  ca,
  ua,
  da
]);
Pe([
  na,
  sa,
  kl,
  lg,
  po
]);
Pe([
  er,
  Ll,
  Fl,
  Hl,
  ug,
  ia,
  la,
  Pr
]);
Pe([
  oa,
  Vl,
  Zl,
  cg,
  aa,
  ca,
  ua,
  da
]);
Pe([
  na,
  sa,
  Ny,
  hy,
  jl,
  Dl,
  Ml,
  po,
  rg
]);
Pe([
  er,
  El,
  Kl,
  zl,
  ql,
  Il,
  Cl,
  Nl,
  zo,
  ga,
  ia,
  la,
  Pr
]);
class re extends Error {
  constructor(t, r, n) {
    super(`MCP error ${t}: ${r}`), this.code = t, this.data = n, this.name = "McpError";
  }
  /**
   * Factory method to create the appropriate error type based on the error code and data
   */
  static fromError(t, r, n) {
    if (t === ne.UrlElicitationRequired && n) {
      const o = n;
      if (o.elicitations)
        return new dg(o.elicitations, r);
    }
    return new re(t, r, n);
  }
}
class dg extends re {
  constructor(t, r = `URL elicitation${t.length > 1 ? "s" : ""} required`) {
    super(ne.UrlElicitationRequired, r, {
      elicitations: t
    });
  }
  get elicitations() {
    var t;
    return ((t = this.data) == null ? void 0 : t.elicitations) ?? [];
  }
}
function jt(e) {
  return e === "completed" || e === "failed" || e === "cancelled";
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Wa(e) {
  const t = al(e), r = t == null ? void 0 : t.method;
  if (!r)
    throw new Error("Schema is missing a method literal");
  const n = ym(r);
  if (typeof n != "string")
    throw new Error("Schema method literal must be a string");
  return n;
}
function Ba(e, t) {
  const r = bt(e, t);
  if (!r.success)
    throw r.error;
  return r.data;
}
const fg = 6e4;
class hg {
  constructor(t) {
    this._options = t, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(na, (r) => {
      this._oncancel(r);
    }), this.setNotificationHandler(sa, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(
      oa,
      // Automatic pong by default.
      (r) => ({})
    ), this._taskStore = t == null ? void 0 : t.taskStore, this._taskMessageQueue = t == null ? void 0 : t.taskMessageQueue, this._taskStore && (this.setRequestHandler(aa, async (r, n) => {
      const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
      if (!o)
        throw new re(ne.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...o
      };
    }), this.setRequestHandler(ca, async (r, n) => {
      const o = async () => {
        var i;
        const s = r.params.taskId;
        if (this._taskMessageQueue) {
          let c;
          for (; c = await this._taskMessageQueue.dequeue(s, n.sessionId); ) {
            if (c.type === "response" || c.type === "error") {
              const d = c.message, l = d.id, v = this._requestResolvers.get(l);
              if (v)
                if (this._requestResolvers.delete(l), c.type === "response")
                  v(d);
                else {
                  const $ = d, y = new re($.error.code, $.error.message, $.error.data);
                  v(y);
                }
              else {
                const $ = c.type === "response" ? "Response" : "Error";
                this._onerror(new Error(`${$} handler missing for request ${l}`));
              }
              continue;
            }
            await ((i = this._transport) == null ? void 0 : i.send(c.message, { relatedRequestId: n.requestId }));
          }
        }
        const a = await this._taskStore.getTask(s, n.sessionId);
        if (!a)
          throw new re(ne.InvalidParams, `Task not found: ${s}`);
        if (!jt(a.status))
          return await this._waitForTaskUpdate(s, n.signal), await o();
        if (jt(a.status)) {
          const c = await this._taskStore.getTaskResult(s, n.sessionId);
          return this._clearTaskQueue(s), {
            ...c,
            _meta: {
              ...c._meta,
              [Vt]: {
                taskId: s
              }
            }
          };
        }
        return await o();
      };
      return await o();
    }), this.setRequestHandler(ua, async (r, n) => {
      var o;
      try {
        const { tasks: s, nextCursor: a } = await this._taskStore.listTasks((o = r.params) == null ? void 0 : o.cursor, n.sessionId);
        return {
          tasks: s,
          nextCursor: a,
          _meta: {}
        };
      } catch (s) {
        throw new re(ne.InvalidParams, `Failed to list tasks: ${s instanceof Error ? s.message : String(s)}`);
      }
    }), this.setRequestHandler(da, async (r, n) => {
      try {
        const o = await this._taskStore.getTask(r.params.taskId, n.sessionId);
        if (!o)
          throw new re(ne.InvalidParams, `Task not found: ${r.params.taskId}`);
        if (jt(o.status))
          throw new re(ne.InvalidParams, `Cannot cancel task in terminal status: ${o.status}`);
        await this._taskStore.updateTaskStatus(r.params.taskId, "cancelled", "Client cancelled task execution.", n.sessionId), this._clearTaskQueue(r.params.taskId);
        const s = await this._taskStore.getTask(r.params.taskId, n.sessionId);
        if (!s)
          throw new re(ne.InvalidParams, `Task not found after cancellation: ${r.params.taskId}`);
        return {
          _meta: {},
          ...s
        };
      } catch (o) {
        throw o instanceof re ? o : new re(ne.InvalidRequest, `Failed to cancel task: ${o instanceof Error ? o.message : String(o)}`);
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
      throw this._timeoutInfo.delete(t), re.fromError(ne.RequestTimeout, "Maximum total timeout exceeded", {
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
    this._transport.onmessage = (c, d) => {
      o == null || o(c, d), vr(c) || U_(c) ? this._onresponse(c) : ks(c) ? this._onrequest(c, d) : D_(c) ? this._onnotification(c) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(c)}`));
    }, await this._transport.start();
  }
  _onclose() {
    var n;
    const t = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const o of this._requestHandlerAbortControllers.values())
      o.abort();
    this._requestHandlerAbortControllers.clear();
    const r = re.fromError(ne.ConnectionClosed, "Connection closed");
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
    var l, v, $, y;
    const n = this._requestHandlers.get(t.method) ?? this.fallbackRequestHandler, o = this._transport, s = ($ = (v = (l = t.params) == null ? void 0 : l._meta) == null ? void 0 : v[Vt]) == null ? void 0 : $.taskId;
    if (n === void 0) {
      const w = {
        jsonrpc: "2.0",
        id: t.id,
        error: {
          code: ne.MethodNotFound,
          message: "Method not found"
        }
      };
      s && this._taskMessageQueue ? this._enqueueTaskMessage(s, {
        type: "error",
        message: w,
        timestamp: Date.now()
      }, o == null ? void 0 : o.sessionId).catch((b) => this._onerror(new Error(`Failed to enqueue error response: ${b}`))) : o == null || o.send(w).catch((b) => this._onerror(new Error(`Failed to send an error response: ${b}`)));
      return;
    }
    const a = new AbortController();
    this._requestHandlerAbortControllers.set(t.id, a);
    const i = A_(t.params) ? t.params.task : void 0, c = this._taskStore ? this.requestTaskStore(t, o == null ? void 0 : o.sessionId) : void 0, d = {
      signal: a.signal,
      sessionId: o == null ? void 0 : o.sessionId,
      _meta: (y = t.params) == null ? void 0 : y._meta,
      sendNotification: async (w) => {
        if (a.signal.aborted)
          return;
        const b = { relatedRequestId: t.id };
        s && (b.relatedTask = { taskId: s }), await this.notification(w, b);
      },
      sendRequest: async (w, b, f) => {
        var _;
        if (a.signal.aborted)
          throw new re(ne.ConnectionClosed, "Request was cancelled");
        const m = { ...f, relatedRequestId: t.id };
        s && !m.relatedTask && (m.relatedTask = { taskId: s });
        const u = ((_ = m.relatedTask) == null ? void 0 : _.taskId) ?? s;
        return u && c && await c.updateTaskStatus(u, "input_required"), await this.request(w, b, m);
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
    }).then(() => n(t, d)).then(async (w) => {
      if (a.signal.aborted)
        return;
      const b = {
        result: w,
        jsonrpc: "2.0",
        id: t.id
      };
      s && this._taskMessageQueue ? await this._enqueueTaskMessage(s, {
        type: "response",
        message: b,
        timestamp: Date.now()
      }, o == null ? void 0 : o.sessionId) : await (o == null ? void 0 : o.send(b));
    }, async (w) => {
      if (a.signal.aborted)
        return;
      const b = {
        jsonrpc: "2.0",
        id: t.id,
        error: {
          code: Number.isSafeInteger(w.code) ? w.code : ne.InternalError,
          message: w.message ?? "Internal error",
          ...w.data !== void 0 && { data: w.data }
        }
      };
      s && this._taskMessageQueue ? await this._enqueueTaskMessage(s, {
        type: "error",
        message: b,
        timestamp: Date.now()
      }, o == null ? void 0 : o.sessionId) : await (o == null ? void 0 : o.send(b));
    }).catch((w) => this._onerror(new Error(`Failed to send response: ${w}`))).finally(() => {
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
      if (this._requestResolvers.delete(r), vr(t))
        n(t);
      else {
        const a = new re(t.error.code, t.error.message, t.error.data);
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
    if (vr(t) && t.result && typeof t.result == "object") {
      const a = t.result;
      if (a.task && typeof a.task == "object") {
        const i = a.task;
        typeof i.taskId == "string" && (s = !0, this._taskProgressTokens.set(i.taskId, r));
      }
    }
    if (s || this._progressHandlers.delete(r), vr(t))
      o(t);
    else {
      const a = re.fromError(t.error.code, t.error.message, t.error.data);
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
          error: c instanceof re ? c : new re(ne.InternalError, String(c))
        };
      }
      return;
    }
    let s;
    try {
      const c = await this.request(t, Pr, n);
      if (c.task)
        s = c.task.taskId, yield { type: "taskCreated", task: c.task };
      else
        throw new re(ne.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const d = await this.getTask({ taskId: s }, n);
        if (yield { type: "taskStatus", task: d }, jt(d.status)) {
          d.status === "completed" ? yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) } : d.status === "failed" ? yield {
            type: "error",
            error: new re(ne.InternalError, `Task ${s} failed`)
          } : d.status === "cancelled" && (yield {
            type: "error",
            error: new re(ne.InternalError, `Task ${s} was cancelled`)
          });
          return;
        }
        if (d.status === "input_required") {
          yield { type: "result", result: await this.getTaskResult({ taskId: s }, r, n) };
          return;
        }
        const l = d.pollInterval ?? ((a = this._options) == null ? void 0 : a.defaultTaskPollInterval) ?? 1e3;
        await new Promise((v) => setTimeout(v, l)), (i = n == null ? void 0 : n.signal) == null || i.throwIfAborted();
      }
    } catch (c) {
      yield {
        type: "error",
        error: c instanceof re ? c : new re(ne.InternalError, String(c))
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
    return new Promise((d, l) => {
      var u, _, S, h, g;
      const v = (E) => {
        l(E);
      };
      if (!this._transport) {
        v(new Error("Not connected"));
        return;
      }
      if (((u = this._options) == null ? void 0 : u.enforceStrictCapabilities) === !0)
        try {
          this.assertCapabilityForMethod(t.method), i && this.assertTaskCapability(t.method);
        } catch (E) {
          v(E);
          return;
        }
      (_ = n == null ? void 0 : n.signal) == null || _.throwIfAborted();
      const $ = this._requestMessageId++, y = {
        ...t,
        jsonrpc: "2.0",
        id: $
      };
      n != null && n.onprogress && (this._progressHandlers.set($, n.onprogress), y.params = {
        ...t.params,
        _meta: {
          ...((S = t.params) == null ? void 0 : S._meta) || {},
          progressToken: $
        }
      }), i && (y.params = {
        ...y.params,
        task: i
      }), c && (y.params = {
        ...y.params,
        _meta: {
          ...((h = y.params) == null ? void 0 : h._meta) || {},
          [Vt]: c
        }
      });
      const w = (E) => {
        var z;
        this._responseHandlers.delete($), this._progressHandlers.delete($), this._cleanupTimeout($), (z = this._transport) == null || z.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: $,
            reason: String(E)
          }
        }, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((U) => this._onerror(new Error(`Failed to send cancellation: ${U}`)));
        const I = E instanceof re ? E : new re(ne.RequestTimeout, String(E));
        l(I);
      };
      this._responseHandlers.set($, (E) => {
        var I;
        if (!((I = n == null ? void 0 : n.signal) != null && I.aborted)) {
          if (E instanceof Error)
            return l(E);
          try {
            const z = bt(r, E.result);
            z.success ? d(z.data) : l(z.error);
          } catch (z) {
            l(z);
          }
        }
      }), (g = n == null ? void 0 : n.signal) == null || g.addEventListener("abort", () => {
        var E;
        w((E = n == null ? void 0 : n.signal) == null ? void 0 : E.reason);
      });
      const b = (n == null ? void 0 : n.timeout) ?? fg, f = () => w(re.fromError(ne.RequestTimeout, "Request timed out", { timeout: b }));
      this._setupTimeout($, b, n == null ? void 0 : n.maxTotalTimeout, f, (n == null ? void 0 : n.resetTimeoutOnProgress) ?? !1);
      const m = c == null ? void 0 : c.taskId;
      if (m) {
        const E = (I) => {
          const z = this._responseHandlers.get($);
          z ? z(I) : this._onerror(new Error(`Response handler missing for side-channeled request ${$}`));
        };
        this._requestResolvers.set($, E), this._enqueueTaskMessage(m, {
          type: "request",
          message: y,
          timestamp: Date.now()
        }).catch((I) => {
          this._cleanupTimeout($), l(I);
        });
      } else
        this._transport.send(y, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((E) => {
          this._cleanupTimeout($), l(E);
        });
    });
  }
  /**
   * Gets the current status of a task.
   *
   * @experimental Use `client.experimental.tasks.getTask()` to access this method.
   */
  async getTask(t, r) {
    return this.request({ method: "tasks/get", params: t }, ia, r);
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
    return this.request({ method: "tasks/list", params: t }, la, r);
  }
  /**
   * Cancels a specific task.
   *
   * @experimental Use `client.experimental.tasks.cancelTask()` to access this method.
   */
  async cancelTask(t, r) {
    return this.request({ method: "tasks/cancel", params: t }, ry, r);
  }
  /**
   * Emits a notification, which is a one-way message that does not expect a response.
   */
  async notification(t, r) {
    var i, c, d, l;
    if (!this._transport)
      throw new Error("Not connected");
    this.assertNotificationCapability(t.method);
    const n = (i = r == null ? void 0 : r.relatedTask) == null ? void 0 : i.taskId;
    if (n) {
      const v = {
        ...t,
        jsonrpc: "2.0",
        params: {
          ...t.params,
          _meta: {
            ...((c = t.params) == null ? void 0 : c._meta) || {},
            [Vt]: r.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(n, {
        type: "notification",
        message: v,
        timestamp: Date.now()
      });
      return;
    }
    if ((((d = this._options) == null ? void 0 : d.debouncedNotificationMethods) ?? []).includes(t.method) && !t.params && !(r != null && r.relatedRequestId) && !(r != null && r.relatedTask)) {
      if (this._pendingDebouncedNotifications.has(t.method))
        return;
      this._pendingDebouncedNotifications.add(t.method), Promise.resolve().then(() => {
        var $, y;
        if (this._pendingDebouncedNotifications.delete(t.method), !this._transport)
          return;
        let v = {
          ...t,
          jsonrpc: "2.0"
        };
        r != null && r.relatedTask && (v = {
          ...v,
          params: {
            ...v.params,
            _meta: {
              ...(($ = v.params) == null ? void 0 : $._meta) || {},
              [Vt]: r.relatedTask
            }
          }
        }), (y = this._transport) == null || y.send(v, r).catch((w) => this._onerror(w));
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
          [Vt]: r.relatedTask
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
    const n = Wa(t);
    this.assertRequestHandlerCapability(n), this._requestHandlers.set(n, (o, s) => {
      const a = Ba(t, o);
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
    const n = Wa(t);
    this._notificationHandlers.set(n, (o) => {
      const s = Ba(t, o);
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
        if (o.type === "request" && ks(o.message)) {
          const s = o.message.id, a = this._requestResolvers.get(s);
          a ? (a(new re(ne.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(s)) : this._onerror(new Error(`Resolver missing for request ${s} during task ${t} cleanup`));
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
        i(new re(ne.InvalidRequest, "Request cancelled"));
        return;
      }
      const c = setTimeout(a, n);
      r.addEventListener("abort", () => {
        clearTimeout(c), i(new re(ne.InvalidRequest, "Request cancelled"));
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
          throw new re(ne.InvalidParams, "Failed to retrieve task: Task not found");
        return s;
      },
      storeTaskResult: async (o, s, a) => {
        await n.storeTaskResult(o, s, a, r);
        const i = await n.getTask(o, r);
        if (i) {
          const c = po.parse({
            method: "notifications/tasks/status",
            params: i
          });
          await this.notification(c), jt(i.status) && this._cleanupTaskProgressHandler(o);
        }
      },
      getTaskResult: (o) => n.getTaskResult(o, r),
      updateTaskStatus: async (o, s, a) => {
        const i = await n.getTask(o, r);
        if (!i)
          throw new re(ne.InvalidParams, `Task "${o}" not found - it may have been cleaned up`);
        if (jt(i.status))
          throw new re(ne.InvalidParams, `Cannot update task "${o}" from terminal status "${i.status}" to "${s}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await n.updateTaskStatus(o, s, a, r);
        const c = await n.getTask(o, r);
        if (c) {
          const d = po.parse({
            method: "notifications/tasks/status",
            params: c
          });
          await this.notification(d), jt(c.status) && this._cleanupTaskProgressHandler(o);
        }
      },
      listTasks: (o) => n.listTasks(o, r)
    };
  }
}
function Qa(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function pg(e, t) {
  const r = { ...e };
  for (const n in t) {
    const o = n, s = t[o];
    if (s === void 0)
      continue;
    const a = r[o];
    Qa(a) && Qa(s) ? r[o] = { ...a, ...s } : r[o] = s;
  }
  return r;
}
var Mr = { exports: {} }, Bo = {}, ht = {}, qt = {}, Qo = {}, Yo = {}, Xo = {}, Ya;
function _o() {
  return Ya || (Ya = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(u) {
        if (super(), !e.IDENTIFIER.test(u))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = u;
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
      constructor(u) {
        super(), this._items = typeof u == "string" ? [u] : u;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const u = this._items[0];
        return u === "" || u === '""';
      }
      get str() {
        var u;
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((_, S) => `${_}${S}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((_, S) => (S instanceof r && (_[S.str] = (_[S.str] || 0) + 1), _), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(m, ...u) {
      const _ = [m[0]];
      let S = 0;
      for (; S < u.length; )
        i(_, u[S]), _.push(m[++S]);
      return new n(_);
    }
    e._ = o;
    const s = new n("+");
    function a(m, ...u) {
      const _ = [y(m[0])];
      let S = 0;
      for (; S < u.length; )
        _.push(s), i(_, u[S]), _.push(s, y(m[++S]));
      return c(_), new n(_);
    }
    e.str = a;
    function i(m, u) {
      u instanceof n ? m.push(...u._items) : u instanceof r ? m.push(u) : m.push(v(u));
    }
    e.addCodeArg = i;
    function c(m) {
      let u = 1;
      for (; u < m.length - 1; ) {
        if (m[u] === s) {
          const _ = d(m[u - 1], m[u + 1]);
          if (_ !== void 0) {
            m.splice(u - 1, 3, _);
            continue;
          }
          m[u++] = "+";
        }
        u++;
      }
    }
    function d(m, u) {
      if (u === '""')
        return m;
      if (m === '""')
        return u;
      if (typeof m == "string")
        return u instanceof r || m[m.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${m.slice(0, -1)}${u}"` : u[0] === '"' ? m.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(m instanceof r))
        return `"${m}${u.slice(1)}`;
    }
    function l(m, u) {
      return u.emptyStr() ? m : m.emptyStr() ? u : a`${m}${u}`;
    }
    e.strConcat = l;
    function v(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : y(Array.isArray(m) ? m.join(",") : m);
    }
    function $(m) {
      return new n(y(m));
    }
    e.stringify = $;
    function y(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function w(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new n(`.${m}`) : o`[${m}]`;
    }
    e.getProperty = w;
    function b(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new n(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function f(m) {
      return new n(m.toString());
    }
    e.regexpCode = f;
  }(Xo)), Xo;
}
var es = {}, Xa;
function ei() {
  return Xa || (Xa = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ _o();
    class r extends Error {
      constructor(d) {
        super(`CodeGen: "code" for ${d} not defined`), this.value = d.value;
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
      constructor({ prefixes: d, parent: l } = {}) {
        this._names = {}, this._prefixes = d, this._parent = l;
      }
      toName(d) {
        return d instanceof t.Name ? d : this.name(d);
      }
      name(d) {
        return new t.Name(this._newName(d));
      }
      _newName(d) {
        const l = this._names[d] || this._nameGroup(d);
        return `${d}${l.index++}`;
      }
      _nameGroup(d) {
        var l, v;
        if (!((v = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || v === void 0) && v.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(d, l) {
        super(l), this.prefix = d;
      }
      setValue(d, { property: l, itemIndex: v }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(l)}[${v}]`;
      }
    }
    e.ValueScopeName = s;
    const a = (0, t._)`\n`;
    class i extends o {
      constructor(d) {
        super(d), this._values = {}, this._scope = d.scope, this.opts = { ...d, _n: d.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(d) {
        return new s(d, this._newName(d));
      }
      value(d, l) {
        var v;
        if (l.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(d), { prefix: y } = $, w = (v = l.key) !== null && v !== void 0 ? v : l.ref;
        let b = this._values[y];
        if (b) {
          const u = b.get(w);
          if (u)
            return u;
        } else
          b = this._values[y] = /* @__PURE__ */ new Map();
        b.set(w, $);
        const f = this._scope[y] || (this._scope[y] = []), m = f.length;
        return f[m] = l.ref, $.setValue(l, { property: y, itemIndex: m }), $;
      }
      getValue(d, l) {
        const v = this._values[d];
        if (v)
          return v.get(l);
      }
      scopeRefs(d, l = this._values) {
        return this._reduceValues(l, (v) => {
          if (v.scopePath === void 0)
            throw new Error(`CodeGen: name "${v}" has no value`);
          return (0, t._)`${d}${v.scopePath}`;
        });
      }
      scopeCode(d = this._values, l, v) {
        return this._reduceValues(d, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, l, v);
      }
      _reduceValues(d, l, v = {}, $) {
        let y = t.nil;
        for (const w in d) {
          const b = d[w];
          if (!b)
            continue;
          const f = v[w] = v[w] || /* @__PURE__ */ new Map();
          b.forEach((m) => {
            if (f.has(m))
              return;
            f.set(m, n.Started);
            let u = l(m);
            if (u) {
              const _ = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${_} ${m} = ${u};${this.opts._n}`;
            } else if (u = $ == null ? void 0 : $(m))
              y = (0, t._)`${y}${u}${this.opts._n}`;
            else
              throw new r(m);
            f.set(m, n.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = i;
  }(es)), es;
}
var ti;
function ce() {
  return ti || (ti = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ _o(), r = /* @__PURE__ */ ei();
    var n = /* @__PURE__ */ _o();
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
    var o = /* @__PURE__ */ ei();
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
      optimizeNames(p, k) {
        return this;
      }
    }
    class a extends s {
      constructor(p, k, C) {
        super(), this.varKind = p, this.name = k, this.rhs = C;
      }
      render({ es5: p, _n: k }) {
        const C = p ? r.varKinds.var : this.varKind, F = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${C} ${this.name}${F};` + k;
      }
      optimizeNames(p, k) {
        if (p[this.name.str])
          return this.rhs && (this.rhs = x(this.rhs, p, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor(p, k, C) {
        super(), this.lhs = p, this.rhs = k, this.sideEffects = C;
      }
      render({ _n: p }) {
        return `${this.lhs} = ${this.rhs};` + p;
      }
      optimizeNames(p, k) {
        if (!(this.lhs instanceof t.Name && !p[this.lhs.str] && !this.sideEffects))
          return this.rhs = x(this.rhs, p, k), this;
      }
      get names() {
        const p = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return Z(p, this.rhs);
      }
    }
    class c extends i {
      constructor(p, k, C, F) {
        super(p, C, F), this.op = k;
      }
      render({ _n: p }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + p;
      }
    }
    class d extends s {
      constructor(p) {
        super(), this.label = p, this.names = {};
      }
      render({ _n: p }) {
        return `${this.label}:` + p;
      }
    }
    class l extends s {
      constructor(p) {
        super(), this.label = p, this.names = {};
      }
      render({ _n: p }) {
        return `break${this.label ? ` ${this.label}` : ""};` + p;
      }
    }
    class v extends s {
      constructor(p) {
        super(), this.error = p;
      }
      render({ _n: p }) {
        return `throw ${this.error};` + p;
      }
      get names() {
        return this.error.names;
      }
    }
    class $ extends s {
      constructor(p) {
        super(), this.code = p;
      }
      render({ _n: p }) {
        return `${this.code};` + p;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(p, k) {
        return this.code = x(this.code, p, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class y extends s {
      constructor(p = []) {
        super(), this.nodes = p;
      }
      render(p) {
        return this.nodes.reduce((k, C) => k + C.render(p), "");
      }
      optimizeNodes() {
        const { nodes: p } = this;
        let k = p.length;
        for (; k--; ) {
          const C = p[k].optimizeNodes();
          Array.isArray(C) ? p.splice(k, 1, ...C) : C ? p[k] = C : p.splice(k, 1);
        }
        return p.length > 0 ? this : void 0;
      }
      optimizeNames(p, k) {
        const { nodes: C } = this;
        let F = C.length;
        for (; F--; ) {
          const K = C[F];
          K.optimizeNames(p, k) || (te(p, K.names), C.splice(F, 1));
        }
        return C.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((p, k) => L(p, k.names), {});
      }
    }
    class w extends y {
      render(p) {
        return "{" + p._n + super.render(p) + "}" + p._n;
      }
    }
    class b extends y {
    }
    class f extends w {
    }
    f.kind = "else";
    class m extends w {
      constructor(p, k) {
        super(k), this.condition = p;
      }
      render(p) {
        let k = `if(${this.condition})` + super.render(p);
        return this.else && (k += "else " + this.else.render(p)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const p = this.condition;
        if (p === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const C = k.optimizeNodes();
          k = this.else = Array.isArray(C) ? new f(C) : C;
        }
        if (k)
          return p === !1 ? k instanceof m ? k : k.nodes : this.nodes.length ? this : new m(_e(p), k instanceof m ? [k] : k.nodes);
        if (!(p === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(p, k) {
        var C;
        if (this.else = (C = this.else) === null || C === void 0 ? void 0 : C.optimizeNames(p, k), !!(super.optimizeNames(p, k) || this.else))
          return this.condition = x(this.condition, p, k), this;
      }
      get names() {
        const p = super.names;
        return Z(p, this.condition), this.else && L(p, this.else.names), p;
      }
    }
    m.kind = "if";
    class u extends w {
    }
    u.kind = "for";
    class _ extends u {
      constructor(p) {
        super(), this.iteration = p;
      }
      render(p) {
        return `for(${this.iteration})` + super.render(p);
      }
      optimizeNames(p, k) {
        if (super.optimizeNames(p, k))
          return this.iteration = x(this.iteration, p, k), this;
      }
      get names() {
        return L(super.names, this.iteration.names);
      }
    }
    class S extends u {
      constructor(p, k, C, F) {
        super(), this.varKind = p, this.name = k, this.from = C, this.to = F;
      }
      render(p) {
        const k = p.es5 ? r.varKinds.var : this.varKind, { name: C, from: F, to: K } = this;
        return `for(${k} ${C}=${F}; ${C}<${K}; ${C}++)` + super.render(p);
      }
      get names() {
        const p = Z(super.names, this.from);
        return Z(p, this.to);
      }
    }
    class h extends u {
      constructor(p, k, C, F) {
        super(), this.loop = p, this.varKind = k, this.name = C, this.iterable = F;
      }
      render(p) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(p);
      }
      optimizeNames(p, k) {
        if (super.optimizeNames(p, k))
          return this.iterable = x(this.iterable, p, k), this;
      }
      get names() {
        return L(super.names, this.iterable.names);
      }
    }
    class g extends w {
      constructor(p, k, C) {
        super(), this.name = p, this.args = k, this.async = C;
      }
      render(p) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(p);
      }
    }
    g.kind = "func";
    class E extends y {
      render(p) {
        return "return " + super.render(p);
      }
    }
    E.kind = "return";
    class I extends w {
      render(p) {
        let k = "try" + super.render(p);
        return this.catch && (k += this.catch.render(p)), this.finally && (k += this.finally.render(p)), k;
      }
      optimizeNodes() {
        var p, k;
        return super.optimizeNodes(), (p = this.catch) === null || p === void 0 || p.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(p, k) {
        var C, F;
        return super.optimizeNames(p, k), (C = this.catch) === null || C === void 0 || C.optimizeNames(p, k), (F = this.finally) === null || F === void 0 || F.optimizeNames(p, k), this;
      }
      get names() {
        const p = super.names;
        return this.catch && L(p, this.catch.names), this.finally && L(p, this.finally.names), p;
      }
    }
    class z extends w {
      constructor(p) {
        super(), this.error = p;
      }
      render(p) {
        return `catch(${this.error})` + super.render(p);
      }
    }
    z.kind = "catch";
    class U extends w {
      render(p) {
        return "finally" + super.render(p);
      }
    }
    U.kind = "finally";
    class A {
      constructor(p, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = p, this._scope = new r.Scope({ parent: p }), this._nodes = [new b()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(p) {
        return this._scope.name(p);
      }
      // reserves unique name in the external scope
      scopeName(p) {
        return this._extScope.name(p);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(p, k) {
        const C = this._extScope.value(p, k);
        return (this._values[C.prefix] || (this._values[C.prefix] = /* @__PURE__ */ new Set())).add(C), C;
      }
      getScopeValue(p, k) {
        return this._extScope.getValue(p, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(p) {
        return this._extScope.scopeRefs(p, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(p, k, C, F) {
        const K = this._scope.toName(k);
        return C !== void 0 && F && (this._constants[K.str] = C), this._leafNode(new a(p, K, C)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(p, k, C) {
        return this._def(r.varKinds.const, p, k, C);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(p, k, C) {
        return this._def(r.varKinds.let, p, k, C);
      }
      // `var` declaration with optional assignment
      var(p, k, C) {
        return this._def(r.varKinds.var, p, k, C);
      }
      // assignment code
      assign(p, k, C) {
        return this._leafNode(new i(p, k, C));
      }
      // `+=` code
      add(p, k) {
        return this._leafNode(new c(p, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(p) {
        return typeof p == "function" ? p() : p !== t.nil && this._leafNode(new $(p)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...p) {
        const k = ["{"];
        for (const [C, F] of p)
          k.length > 1 && k.push(","), k.push(C), (C !== F || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, F));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(p, k, C) {
        if (this._blockNode(new m(p)), k && C)
          this.code(k).else().code(C).endIf();
        else if (k)
          this.code(k).endIf();
        else if (C)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(p) {
        return this._elseNode(new m(p));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, f);
      }
      _for(p, k) {
        return this._blockNode(p), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(p, k) {
        return this._for(new _(p), k);
      }
      // `for` statement for a range of values
      forRange(p, k, C, F, K = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const Q = this._scope.toName(p);
        return this._for(new S(K, Q, k, C), () => F(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(p, k, C, F = r.varKinds.const) {
        const K = this._scope.toName(p);
        if (this.opts.es5) {
          const Q = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (B) => {
            this.var(K, (0, t._)`${Q}[${B}]`), C(K);
          });
        }
        return this._for(new h("of", F, K, k), () => C(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(p, k, C, F = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(p, (0, t._)`Object.keys(${k})`, C);
        const K = this._scope.toName(p);
        return this._for(new h("in", F, K, k), () => C(K));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(p) {
        return this._leafNode(new d(p));
      }
      // `break` statement
      break(p) {
        return this._leafNode(new l(p));
      }
      // `return` statement
      return(p) {
        const k = new E();
        if (this._blockNode(k), this.code(p), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(E);
      }
      // `try` statement
      try(p, k, C) {
        if (!k && !C)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const F = new I();
        if (this._blockNode(F), this.code(p), k) {
          const K = this.name("e");
          this._currNode = F.catch = new z(K), k(K);
        }
        return C && (this._currNode = F.finally = new U(), this.code(C)), this._endBlockNode(z, U);
      }
      // `throw` statement
      throw(p) {
        return this._leafNode(new v(p));
      }
      // start self-balancing block
      block(p, k) {
        return this._blockStarts.push(this._nodes.length), p && this.code(p).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock(p) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const C = this._nodes.length - k;
        if (C < 0 || p !== void 0 && C !== p)
          throw new Error(`CodeGen: wrong number of nodes: ${C} vs ${p} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(p, k = t.nil, C, F) {
        return this._blockNode(new g(p, k, C)), F && this.code(F).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(g);
      }
      optimize(p = 1) {
        for (; p-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(p) {
        return this._currNode.nodes.push(p), this;
      }
      _blockNode(p) {
        this._currNode.nodes.push(p), this._nodes.push(p);
      }
      _endBlockNode(p, k) {
        const C = this._currNode;
        if (C instanceof p || k && C instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${p.kind}/${k.kind}` : p.kind}"`);
      }
      _elseNode(p) {
        const k = this._currNode;
        if (!(k instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = p, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const p = this._nodes;
        return p[p.length - 1];
      }
      set _currNode(p) {
        const k = this._nodes;
        k[k.length - 1] = p;
      }
    }
    e.CodeGen = A;
    function L(T, p) {
      for (const k in p)
        T[k] = (T[k] || 0) + (p[k] || 0);
      return T;
    }
    function Z(T, p) {
      return p instanceof t._CodeOrName ? L(T, p.names) : T;
    }
    function x(T, p, k) {
      if (T instanceof t.Name)
        return C(T);
      if (!F(T))
        return T;
      return new t._Code(T._items.reduce((K, Q) => (Q instanceof t.Name && (Q = C(Q)), Q instanceof t._Code ? K.push(...Q._items) : K.push(Q), K), []));
      function C(K) {
        const Q = k[K.str];
        return Q === void 0 || p[K.str] !== 1 ? K : (delete p[K.str], Q);
      }
      function F(K) {
        return K instanceof t._Code && K._items.some((Q) => Q instanceof t.Name && p[Q.str] === 1 && k[Q.str] !== void 0);
      }
    }
    function te(T, p) {
      for (const k in p)
        T[k] = (T[k] || 0) - (p[k] || 0);
    }
    function _e(T) {
      return typeof T == "boolean" || typeof T == "number" || T === null ? !T : (0, t._)`!${j(T)}`;
    }
    e.not = _e;
    const we = R(e.operators.AND);
    function ee(...T) {
      return T.reduce(we);
    }
    e.and = ee;
    const je = R(e.operators.OR);
    function M(...T) {
      return T.reduce(je);
    }
    e.or = M;
    function R(T) {
      return (p, k) => p === t.nil ? k : k === t.nil ? p : (0, t._)`${j(p)} ${T} ${j(k)}`;
    }
    function j(T) {
      return T instanceof t.Name ? T : (0, t._)`(${T})`;
    }
  }(Yo)), Yo;
}
var oe = {}, ri;
function de() {
  if (ri) return oe;
  ri = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.checkStrictMode = oe.getErrorPath = oe.Type = oe.useFunc = oe.setEvaluated = oe.evaluatedPropsToName = oe.mergeEvaluated = oe.eachItem = oe.unescapeJsonPointer = oe.escapeJsonPointer = oe.escapeFragment = oe.unescapeFragment = oe.schemaRefOrVal = oe.schemaHasRulesButRef = oe.schemaHasRules = oe.checkUnknownRules = oe.alwaysValidSchema = oe.toHash = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ _o();
  function r(h) {
    const g = {};
    for (const E of h)
      g[E] = !0;
    return g;
  }
  oe.toHash = r;
  function n(h, g) {
    return typeof g == "boolean" ? g : Object.keys(g).length === 0 ? !0 : (o(h, g), !s(g, h.self.RULES.all));
  }
  oe.alwaysValidSchema = n;
  function o(h, g = h.schema) {
    const { opts: E, self: I } = h;
    if (!E.strictSchema || typeof g == "boolean")
      return;
    const z = I.RULES.keywords;
    for (const U in g)
      z[U] || S(h, `unknown keyword: "${U}"`);
  }
  oe.checkUnknownRules = o;
  function s(h, g) {
    if (typeof h == "boolean")
      return !h;
    for (const E in h)
      if (g[E])
        return !0;
    return !1;
  }
  oe.schemaHasRules = s;
  function a(h, g) {
    if (typeof h == "boolean")
      return !h;
    for (const E in h)
      if (E !== "$ref" && g.all[E])
        return !0;
    return !1;
  }
  oe.schemaHasRulesButRef = a;
  function i({ topSchemaRef: h, schemaPath: g }, E, I, z) {
    if (!z) {
      if (typeof E == "number" || typeof E == "boolean")
        return E;
      if (typeof E == "string")
        return (0, e._)`${E}`;
    }
    return (0, e._)`${h}${g}${(0, e.getProperty)(I)}`;
  }
  oe.schemaRefOrVal = i;
  function c(h) {
    return v(decodeURIComponent(h));
  }
  oe.unescapeFragment = c;
  function d(h) {
    return encodeURIComponent(l(h));
  }
  oe.escapeFragment = d;
  function l(h) {
    return typeof h == "number" ? `${h}` : h.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  oe.escapeJsonPointer = l;
  function v(h) {
    return h.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  oe.unescapeJsonPointer = v;
  function $(h, g) {
    if (Array.isArray(h))
      for (const E of h)
        g(E);
    else
      g(h);
  }
  oe.eachItem = $;
  function y({ mergeNames: h, mergeToName: g, mergeValues: E, resultToName: I }) {
    return (z, U, A, L) => {
      const Z = A === void 0 ? U : A instanceof e.Name ? (U instanceof e.Name ? h(z, U, A) : g(z, U, A), A) : U instanceof e.Name ? (g(z, A, U), U) : E(U, A);
      return L === e.Name && !(Z instanceof e.Name) ? I(z, Z) : Z;
    };
  }
  oe.mergeEvaluated = {
    props: y({
      mergeNames: (h, g, E) => h.if((0, e._)`${E} !== true && ${g} !== undefined`, () => {
        h.if((0, e._)`${g} === true`, () => h.assign(E, !0), () => h.assign(E, (0, e._)`${E} || {}`).code((0, e._)`Object.assign(${E}, ${g})`));
      }),
      mergeToName: (h, g, E) => h.if((0, e._)`${E} !== true`, () => {
        g === !0 ? h.assign(E, !0) : (h.assign(E, (0, e._)`${E} || {}`), b(h, E, g));
      }),
      mergeValues: (h, g) => h === !0 ? !0 : { ...h, ...g },
      resultToName: w
    }),
    items: y({
      mergeNames: (h, g, E) => h.if((0, e._)`${E} !== true && ${g} !== undefined`, () => h.assign(E, (0, e._)`${g} === true ? true : ${E} > ${g} ? ${E} : ${g}`)),
      mergeToName: (h, g, E) => h.if((0, e._)`${E} !== true`, () => h.assign(E, g === !0 ? !0 : (0, e._)`${E} > ${g} ? ${E} : ${g}`)),
      mergeValues: (h, g) => h === !0 ? !0 : Math.max(h, g),
      resultToName: (h, g) => h.var("items", g)
    })
  };
  function w(h, g) {
    if (g === !0)
      return h.var("props", !0);
    const E = h.var("props", (0, e._)`{}`);
    return g !== void 0 && b(h, E, g), E;
  }
  oe.evaluatedPropsToName = w;
  function b(h, g, E) {
    Object.keys(E).forEach((I) => h.assign((0, e._)`${g}${(0, e.getProperty)(I)}`, !0));
  }
  oe.setEvaluated = b;
  const f = {};
  function m(h, g) {
    return h.scopeValue("func", {
      ref: g,
      code: f[g.code] || (f[g.code] = new t._Code(g.code))
    });
  }
  oe.useFunc = m;
  var u;
  (function(h) {
    h[h.Num = 0] = "Num", h[h.Str = 1] = "Str";
  })(u || (oe.Type = u = {}));
  function _(h, g, E) {
    if (h instanceof e.Name) {
      const I = g === u.Num;
      return E ? I ? (0, e._)`"[" + ${h} + "]"` : (0, e._)`"['" + ${h} + "']"` : I ? (0, e._)`"/" + ${h}` : (0, e._)`"/" + ${h}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return E ? (0, e.getProperty)(h).toString() : "/" + l(h);
  }
  oe.getErrorPath = _;
  function S(h, g, E = h.opts.strictSchema) {
    if (E) {
      if (g = `strict mode: ${g}`, E === !0)
        throw new Error(g);
      h.self.logger.warn(g);
    }
  }
  return oe.checkStrictMode = S, oe;
}
var Ar = {}, ni;
function Rt() {
  if (ni) return Ar;
  ni = 1, Object.defineProperty(Ar, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = {
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
  return Ar.default = t, Ar;
}
var oi;
function Mo() {
  return oi || (oi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ Rt();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: m }) => m ? (0, t.str)`"${f}" keyword must be ${m} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function o(f, m = e.keywordError, u, _) {
      const { it: S } = f, { gen: h, compositeRule: g, allErrors: E } = S, I = v(f, m, u);
      _ ?? (g || E) ? c(h, I) : d(S, (0, t._)`[${I}]`);
    }
    e.reportError = o;
    function s(f, m = e.keywordError, u) {
      const { it: _ } = f, { gen: S, compositeRule: h, allErrors: g } = _, E = v(f, m, u);
      c(S, E), h || g || d(_, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(f, m) {
      f.assign(n.default.errors, m), f.if((0, t._)`${n.default.vErrors} !== null`, () => f.if(m, () => f.assign((0, t._)`${n.default.vErrors}.length`, m), () => f.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: f, keyword: m, schemaValue: u, data: _, errsCount: S, it: h }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const g = f.name("err");
      f.forRange("i", S, n.default.errors, (E) => {
        f.const(g, (0, t._)`${n.default.vErrors}[${E}]`), f.if((0, t._)`${g}.instancePath === undefined`, () => f.assign((0, t._)`${g}.instancePath`, (0, t.strConcat)(n.default.instancePath, h.errorPath))), f.assign((0, t._)`${g}.schemaPath`, (0, t.str)`${h.errSchemaPath}/${m}`), h.opts.verbose && (f.assign((0, t._)`${g}.schema`, u), f.assign((0, t._)`${g}.data`, _));
      });
    }
    e.extendErrors = i;
    function c(f, m) {
      const u = f.const("err", m);
      f.if((0, t._)`${n.default.vErrors} === null`, () => f.assign(n.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${n.default.vErrors}.push(${u})`), f.code((0, t._)`${n.default.errors}++`);
    }
    function d(f, m) {
      const { gen: u, validateName: _, schemaEnv: S } = f;
      S.$async ? u.throw((0, t._)`new ${f.ValidationError}(${m})`) : (u.assign((0, t._)`${_}.errors`, m), u.return(!1));
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
    function v(f, m, u) {
      const { createErrors: _ } = f.it;
      return _ === !1 ? (0, t._)`{}` : $(f, m, u);
    }
    function $(f, m, u = {}) {
      const { gen: _, it: S } = f, h = [
        y(S, u),
        w(f, u)
      ];
      return b(f, m, h), _.object(...h);
    }
    function y({ errorPath: f }, { instancePath: m }) {
      const u = m ? (0, t.str)`${f}${(0, r.getErrorPath)(m, r.Type.Str)}` : f;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, u)];
    }
    function w({ keyword: f, it: { errSchemaPath: m } }, { schemaPath: u, parentSchema: _ }) {
      let S = _ ? m : (0, t.str)`${m}/${f}`;
      return u && (S = (0, t.str)`${S}${(0, r.getErrorPath)(u, r.Type.Str)}`), [l.schemaPath, S];
    }
    function b(f, { params: m, message: u }, _) {
      const { keyword: S, data: h, schemaValue: g, it: E } = f, { opts: I, propertyName: z, topSchemaRef: U, schemaPath: A } = E;
      _.push([l.keyword, S], [l.params, typeof m == "function" ? m(f) : m || (0, t._)`{}`]), I.messages && _.push([l.message, typeof u == "function" ? u(f) : u]), I.verbose && _.push([l.schema, g], [l.parentSchema, (0, t._)`${U}${A}`], [n.default.data, h]), z && _.push([l.propertyName, z]);
    }
  }(Qo)), Qo;
}
var si;
function mg() {
  if (si) return qt;
  si = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.boolOrEmptySchema = qt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Mo(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Rt(), n = {
    message: "boolean schema is false"
  };
  function o(i) {
    const { gen: c, schema: d, validateName: l } = i;
    d === !1 ? a(i, !1) : typeof d == "object" && d.$async === !0 ? c.return(r.default.data) : (c.assign((0, t._)`${l}.errors`, null), c.return(!0));
  }
  qt.topBoolOrEmptySchema = o;
  function s(i, c) {
    const { gen: d, schema: l } = i;
    l === !1 ? (d.var(c, !1), a(i)) : d.var(c, !0);
  }
  qt.boolOrEmptySchema = s;
  function a(i, c) {
    const { gen: d, data: l } = i, v = {
      gen: d,
      keyword: "false schema",
      data: l,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(v, n, void 0, c);
  }
  return qt;
}
var Ue = {}, zt = {}, ai;
function xl() {
  if (ai) return zt;
  ai = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.getRules = zt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(o) {
    return typeof o == "string" && t.has(o);
  }
  zt.isJSONType = r;
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
  return zt.getRules = n, zt;
}
var pt = {}, ii;
function Jl() {
  if (ii) return pt;
  ii = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.shouldUseRule = pt.shouldUseGroup = pt.schemaHasRulesForType = void 0;
  function e({ schema: n, self: o }, s) {
    const a = o.RULES.types[s];
    return a && a !== !0 && t(n, a);
  }
  pt.schemaHasRulesForType = e;
  function t(n, o) {
    return o.rules.some((s) => r(n, s));
  }
  pt.shouldUseGroup = t;
  function r(n, o) {
    var s;
    return n[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((a) => n[a] !== void 0));
  }
  return pt.shouldUseRule = r, pt;
}
var ci;
function yo() {
  if (ci) return Ue;
  ci = 1, Object.defineProperty(Ue, "__esModule", { value: !0 }), Ue.reportTypeError = Ue.checkDataTypes = Ue.checkDataType = Ue.coerceAndCheckDataType = Ue.getJSONTypes = Ue.getSchemaTypes = Ue.DataType = void 0;
  const e = /* @__PURE__ */ xl(), t = /* @__PURE__ */ Jl(), r = /* @__PURE__ */ Mo(), n = /* @__PURE__ */ ce(), o = /* @__PURE__ */ de();
  var s;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(s || (Ue.DataType = s = {}));
  function a(u) {
    const _ = i(u.type);
    if (_.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!_.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && _.push("null");
    }
    return _;
  }
  Ue.getSchemaTypes = a;
  function i(u) {
    const _ = Array.isArray(u) ? u : u ? [u] : [];
    if (_.every(e.isJSONType))
      return _;
    throw new Error("type must be JSONType or JSONType[]: " + _.join(","));
  }
  Ue.getJSONTypes = i;
  function c(u, _) {
    const { gen: S, data: h, opts: g } = u, E = l(_, g.coerceTypes), I = _.length > 0 && !(E.length === 0 && _.length === 1 && (0, t.schemaHasRulesForType)(u, _[0]));
    if (I) {
      const z = w(_, h, g.strictNumbers, s.Wrong);
      S.if(z, () => {
        E.length ? v(u, _, E) : f(u);
      });
    }
    return I;
  }
  Ue.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function l(u, _) {
    return _ ? u.filter((S) => d.has(S) || _ === "array" && S === "array") : [];
  }
  function v(u, _, S) {
    const { gen: h, data: g, opts: E } = u, I = h.let("dataType", (0, n._)`typeof ${g}`), z = h.let("coerced", (0, n._)`undefined`);
    E.coerceTypes === "array" && h.if((0, n._)`${I} == 'object' && Array.isArray(${g}) && ${g}.length == 1`, () => h.assign(g, (0, n._)`${g}[0]`).assign(I, (0, n._)`typeof ${g}`).if(w(_, g, E.strictNumbers), () => h.assign(z, g))), h.if((0, n._)`${z} !== undefined`);
    for (const A of S)
      (d.has(A) || A === "array" && E.coerceTypes === "array") && U(A);
    h.else(), f(u), h.endIf(), h.if((0, n._)`${z} !== undefined`, () => {
      h.assign(g, z), $(u, z);
    });
    function U(A) {
      switch (A) {
        case "string":
          h.elseIf((0, n._)`${I} == "number" || ${I} == "boolean"`).assign(z, (0, n._)`"" + ${g}`).elseIf((0, n._)`${g} === null`).assign(z, (0, n._)`""`);
          return;
        case "number":
          h.elseIf((0, n._)`${I} == "boolean" || ${g} === null
              || (${I} == "string" && ${g} && ${g} == +${g})`).assign(z, (0, n._)`+${g}`);
          return;
        case "integer":
          h.elseIf((0, n._)`${I} === "boolean" || ${g} === null
              || (${I} === "string" && ${g} && ${g} == +${g} && !(${g} % 1))`).assign(z, (0, n._)`+${g}`);
          return;
        case "boolean":
          h.elseIf((0, n._)`${g} === "false" || ${g} === 0 || ${g} === null`).assign(z, !1).elseIf((0, n._)`${g} === "true" || ${g} === 1`).assign(z, !0);
          return;
        case "null":
          h.elseIf((0, n._)`${g} === "" || ${g} === 0 || ${g} === false`), h.assign(z, null);
          return;
        case "array":
          h.elseIf((0, n._)`${I} === "string" || ${I} === "number"
              || ${I} === "boolean" || ${g} === null`).assign(z, (0, n._)`[${g}]`);
      }
    }
  }
  function $({ gen: u, parentData: _, parentDataProperty: S }, h) {
    u.if((0, n._)`${_} !== undefined`, () => u.assign((0, n._)`${_}[${S}]`, h));
  }
  function y(u, _, S, h = s.Correct) {
    const g = h === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let E;
    switch (u) {
      case "null":
        return (0, n._)`${_} ${g} null`;
      case "array":
        E = (0, n._)`Array.isArray(${_})`;
        break;
      case "object":
        E = (0, n._)`${_} && typeof ${_} == "object" && !Array.isArray(${_})`;
        break;
      case "integer":
        E = I((0, n._)`!(${_} % 1) && !isNaN(${_})`);
        break;
      case "number":
        E = I();
        break;
      default:
        return (0, n._)`typeof ${_} ${g} ${u}`;
    }
    return h === s.Correct ? E : (0, n.not)(E);
    function I(z = n.nil) {
      return (0, n.and)((0, n._)`typeof ${_} == "number"`, z, S ? (0, n._)`isFinite(${_})` : n.nil);
    }
  }
  Ue.checkDataType = y;
  function w(u, _, S, h) {
    if (u.length === 1)
      return y(u[0], _, S, h);
    let g;
    const E = (0, o.toHash)(u);
    if (E.array && E.object) {
      const I = (0, n._)`typeof ${_} != "object"`;
      g = E.null ? I : (0, n._)`!${_} || ${I}`, delete E.null, delete E.array, delete E.object;
    } else
      g = n.nil;
    E.number && delete E.integer;
    for (const I in E)
      g = (0, n.and)(g, y(I, _, S, h));
    return g;
  }
  Ue.checkDataTypes = w;
  const b = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: _ }) => typeof u == "string" ? (0, n._)`{type: ${u}}` : (0, n._)`{type: ${_}}`
  };
  function f(u) {
    const _ = m(u);
    (0, r.reportError)(_, b);
  }
  Ue.reportTypeError = f;
  function m(u) {
    const { gen: _, data: S, schema: h } = u, g = (0, o.schemaRefOrVal)(u, h, "type");
    return {
      gen: _,
      keyword: "type",
      data: S,
      schema: h.type,
      schemaCode: g,
      schemaValue: g,
      parentSchema: h,
      params: {},
      it: u
    };
  }
  return Ue;
}
var fr = {}, ui;
function _g() {
  if (ui) return fr;
  ui = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.assignDefaults = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de();
  function r(o, s) {
    const { properties: a, items: i } = o.schema;
    if (s === "object" && a)
      for (const c in a)
        n(o, c, a[c].default);
    else s === "array" && Array.isArray(i) && i.forEach((c, d) => n(o, d, c.default));
  }
  fr.assignDefaults = r;
  function n(o, s, a) {
    const { gen: i, compositeRule: c, data: d, opts: l } = o;
    if (a === void 0)
      return;
    const v = (0, e._)`${d}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${v}`);
      return;
    }
    let $ = (0, e._)`${v} === undefined`;
    l.useDefaults === "empty" && ($ = (0, e._)`${$} || ${v} === null || ${v} === ""`), i.if($, (0, e._)`${v} = ${(0, e.stringify)(a)}`);
  }
  return fr;
}
var at = {}, ve = {}, li;
function lt() {
  if (li) return ve;
  li = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.validateUnion = ve.validateArray = ve.usePattern = ve.callValidateCode = ve.schemaProperties = ve.allSchemaProperties = ve.noPropertyInData = ve.propertyInData = ve.isOwnProperty = ve.hasPropFunc = ve.reportMissingProp = ve.checkMissingProp = ve.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ Rt(), n = /* @__PURE__ */ de();
  function o(u, _) {
    const { gen: S, data: h, it: g } = u;
    S.if(l(S, h, _, g.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${_}` }, !0), u.error();
    });
  }
  ve.checkReportMissingProp = o;
  function s({ gen: u, data: _, it: { opts: S } }, h, g) {
    return (0, e.or)(...h.map((E) => (0, e.and)(l(u, _, E, S.ownProperties), (0, e._)`${g} = ${E}`)));
  }
  ve.checkMissingProp = s;
  function a(u, _) {
    u.setParams({ missingProperty: _ }, !0), u.error();
  }
  ve.reportMissingProp = a;
  function i(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ve.hasPropFunc = i;
  function c(u, _, S) {
    return (0, e._)`${i(u)}.call(${_}, ${S})`;
  }
  ve.isOwnProperty = c;
  function d(u, _, S, h) {
    const g = (0, e._)`${_}${(0, e.getProperty)(S)} !== undefined`;
    return h ? (0, e._)`${g} && ${c(u, _, S)}` : g;
  }
  ve.propertyInData = d;
  function l(u, _, S, h) {
    const g = (0, e._)`${_}${(0, e.getProperty)(S)} === undefined`;
    return h ? (0, e.or)(g, (0, e.not)(c(u, _, S))) : g;
  }
  ve.noPropertyInData = l;
  function v(u) {
    return u ? Object.keys(u).filter((_) => _ !== "__proto__") : [];
  }
  ve.allSchemaProperties = v;
  function $(u, _) {
    return v(_).filter((S) => !(0, t.alwaysValidSchema)(u, _[S]));
  }
  ve.schemaProperties = $;
  function y({ schemaCode: u, data: _, it: { gen: S, topSchemaRef: h, schemaPath: g, errorPath: E }, it: I }, z, U, A) {
    const L = A ? (0, e._)`${u}, ${_}, ${h}${g}` : _, Z = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, E)],
      [r.default.parentData, I.parentData],
      [r.default.parentDataProperty, I.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    I.opts.dynamicRef && Z.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const x = (0, e._)`${L}, ${S.object(...Z)}`;
    return U !== e.nil ? (0, e._)`${z}.call(${U}, ${x})` : (0, e._)`${z}(${x})`;
  }
  ve.callValidateCode = y;
  const w = (0, e._)`new RegExp`;
  function b({ gen: u, it: { opts: _ } }, S) {
    const h = _.unicodeRegExp ? "u" : "", { regExp: g } = _.code, E = g(S, h);
    return u.scopeValue("pattern", {
      key: E.toString(),
      ref: E,
      code: (0, e._)`${g.code === "new RegExp" ? w : (0, n.useFunc)(u, g)}(${S}, ${h})`
    });
  }
  ve.usePattern = b;
  function f(u) {
    const { gen: _, data: S, keyword: h, it: g } = u, E = _.name("valid");
    if (g.allErrors) {
      const z = _.let("valid", !0);
      return I(() => _.assign(z, !1)), z;
    }
    return _.var(E, !0), I(() => _.break()), E;
    function I(z) {
      const U = _.const("len", (0, e._)`${S}.length`);
      _.forRange("i", 0, U, (A) => {
        u.subschema({
          keyword: h,
          dataProp: A,
          dataPropType: t.Type.Num
        }, E), _.if((0, e.not)(E), z);
      });
    }
  }
  ve.validateArray = f;
  function m(u) {
    const { gen: _, schema: S, keyword: h, it: g } = u;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((U) => (0, t.alwaysValidSchema)(g, U)) && !g.opts.unevaluated)
      return;
    const I = _.let("valid", !1), z = _.name("_valid");
    _.block(() => S.forEach((U, A) => {
      const L = u.subschema({
        keyword: h,
        schemaProp: A,
        compositeRule: !0
      }, z);
      _.assign(I, (0, e._)`${I} || ${z}`), u.mergeValidEvaluated(L, z) || _.if((0, e.not)(I));
    })), u.result(I, () => u.reset(), () => u.error(!0));
  }
  return ve.validateUnion = m, ve;
}
var di;
function yg() {
  if (di) return at;
  di = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.validateKeywordUsage = at.validSchemaType = at.funcKeywordCode = at.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Rt(), r = /* @__PURE__ */ lt(), n = /* @__PURE__ */ Mo();
  function o($, y) {
    const { gen: w, keyword: b, schema: f, parentSchema: m, it: u } = $, _ = y.macro.call(u.self, f, m, u), S = d(w, b, _);
    u.opts.validateSchema !== !1 && u.self.validateSchema(_, !0);
    const h = w.name("valid");
    $.subschema({
      schema: _,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${b}`,
      topSchemaRef: S,
      compositeRule: !0
    }, h), $.pass(h, () => $.error(!0));
  }
  at.macroKeywordCode = o;
  function s($, y) {
    var w;
    const { gen: b, keyword: f, schema: m, parentSchema: u, $data: _, it: S } = $;
    c(S, y);
    const h = !_ && y.compile ? y.compile.call(S.self, m, u, S) : y.validate, g = d(b, f, h), E = b.let("valid");
    $.block$data(E, I), $.ok((w = y.valid) !== null && w !== void 0 ? w : E);
    function I() {
      if (y.errors === !1)
        A(), y.modifying && a($), L(() => $.error());
      else {
        const Z = y.async ? z() : U();
        y.modifying && a($), L(() => i($, Z));
      }
    }
    function z() {
      const Z = b.let("ruleErrs", null);
      return b.try(() => A((0, e._)`await `), (x) => b.assign(E, !1).if((0, e._)`${x} instanceof ${S.ValidationError}`, () => b.assign(Z, (0, e._)`${x}.errors`), () => b.throw(x))), Z;
    }
    function U() {
      const Z = (0, e._)`${g}.errors`;
      return b.assign(Z, null), A(e.nil), Z;
    }
    function A(Z = y.async ? (0, e._)`await ` : e.nil) {
      const x = S.opts.passContext ? t.default.this : t.default.self, te = !("compile" in y && !_ || y.schema === !1);
      b.assign(E, (0, e._)`${Z}${(0, r.callValidateCode)($, g, x, te)}`, y.modifying);
    }
    function L(Z) {
      var x;
      b.if((0, e.not)((x = y.valid) !== null && x !== void 0 ? x : E), Z);
    }
  }
  at.funcKeywordCode = s;
  function a($) {
    const { gen: y, data: w, it: b } = $;
    y.if(b.parentData, () => y.assign(w, (0, e._)`${b.parentData}[${b.parentDataProperty}]`));
  }
  function i($, y) {
    const { gen: w } = $;
    w.if((0, e._)`Array.isArray(${y})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)($);
    }, () => $.error());
  }
  function c({ schemaEnv: $ }, y) {
    if (y.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function d($, y, w) {
    if (w === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return $.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function l($, y, w = !1) {
    return !y.length || y.some((b) => b === "array" ? Array.isArray($) : b === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == b || w && typeof $ > "u");
  }
  at.validSchemaType = l;
  function v({ schema: $, opts: y, self: w, errSchemaPath: b }, f, m) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(m) : f.keyword !== m)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u != null && u.some((_) => !Object.prototype.hasOwnProperty.call($, _)))
      throw new Error(`parent schema must have dependencies of ${m}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema($[m])) {
      const S = `keyword "${m}" value is invalid at path "${b}": ` + w.errorsText(f.validateSchema.errors);
      if (y.validateSchema === "log")
        w.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return at.validateKeywordUsage = v, at;
}
var mt = {}, fi;
function gg() {
  if (fi) return mt;
  fi = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.extendSubschemaMode = mt.extendSubschemaData = mt.getSubschema = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de();
  function r(s, { keyword: a, schemaProp: i, schema: c, schemaPath: d, errSchemaPath: l, topSchemaRef: v }) {
    if (a !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const $ = s.schema[a];
      return i === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}`
      } : {
        schema: $[i],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (c !== void 0) {
      if (d === void 0 || l === void 0 || v === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: v,
        errSchemaPath: l
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  mt.getSubschema = r;
  function n(s, a, { dataProp: i, dataPropType: c, data: d, dataTypes: l, propertyName: v }) {
    if (d !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = a;
    if (i !== void 0) {
      const { errorPath: w, dataPathArr: b, opts: f } = a, m = $.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      y(m), s.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(i, c, f.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [...b, s.parentDataProperty];
    }
    if (d !== void 0) {
      const w = d instanceof e.Name ? d : $.let("data", d, !0);
      y(w), v !== void 0 && (s.propertyName = v);
    }
    l && (s.dataTypes = l);
    function y(w) {
      s.data = w, s.dataLevel = a.dataLevel + 1, s.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), s.parentData = a.data, s.dataNames = [...a.dataNames, w];
    }
  }
  mt.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: d, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), d !== void 0 && (s.createErrors = d), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return mt.extendSubschemaMode = o, mt;
}
var xe = {}, ts, hi;
function Ao() {
  return hi || (hi = 1, ts = function e(t, r) {
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
  }), ts;
}
var rs = { exports: {} }, pi;
function vg() {
  if (pi) return rs.exports;
  pi = 1;
  var e = rs.exports = function(n, o, s) {
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
    not: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
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
  function t(n, o, s, a, i, c, d, l, v, $) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      o(a, i, c, d, l, v, $);
      for (var y in a) {
        var w = a[y];
        if (Array.isArray(w)) {
          if (y in e.arrayKeywords)
            for (var b = 0; b < w.length; b++)
              t(n, o, s, w[b], i + "/" + y + "/" + b, c, i, y, a, b);
        } else if (y in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var f in w)
              t(n, o, s, w[f], i + "/" + y + "/" + r(f), c, i, y, a, f);
        } else (y in e.keywords || n.allKeys && !(y in e.skipKeywords)) && t(n, o, s, w, i + "/" + y, c, i, y, a);
      }
      s(a, i, c, d, l, v, $);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return rs.exports;
}
var mi;
function Do() {
  if (mi) return xe;
  mi = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.getSchemaRefs = xe.resolveUrl = xe.normalizeId = xe._getFullPath = xe.getFullPath = xe.inlineRef = void 0;
  const e = /* @__PURE__ */ de(), t = Ao(), r = vg(), n = /* @__PURE__ */ new Set([
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
  function o(b, f = !0) {
    return typeof b == "boolean" ? !0 : f === !0 ? !a(b) : f ? i(b) <= f : !1;
  }
  xe.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(b) {
    for (const f in b) {
      if (s.has(f))
        return !0;
      const m = b[f];
      if (Array.isArray(m) && m.some(a) || typeof m == "object" && a(m))
        return !0;
    }
    return !1;
  }
  function i(b) {
    let f = 0;
    for (const m in b) {
      if (m === "$ref")
        return 1 / 0;
      if (f++, !n.has(m) && (typeof b[m] == "object" && (0, e.eachItem)(b[m], (u) => f += i(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function c(b, f = "", m) {
    m !== !1 && (f = v(f));
    const u = b.parse(f);
    return d(b, u);
  }
  xe.getFullPath = c;
  function d(b, f) {
    return b.serialize(f).split("#")[0] + "#";
  }
  xe._getFullPath = d;
  const l = /#\/?$/;
  function v(b) {
    return b ? b.replace(l, "") : "";
  }
  xe.normalizeId = v;
  function $(b, f, m) {
    return m = v(m), b.resolve(f, m);
  }
  xe.resolveUrl = $;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function w(b, f) {
    if (typeof b == "boolean")
      return {};
    const { schemaId: m, uriResolver: u } = this.opts, _ = v(b[m] || f), S = { "": _ }, h = c(u, _, !1), g = {}, E = /* @__PURE__ */ new Set();
    return r(b, { allKeys: !0 }, (U, A, L, Z) => {
      if (Z === void 0)
        return;
      const x = h + A;
      let te = S[Z];
      typeof U[m] == "string" && (te = _e.call(this, U[m])), we.call(this, U.$anchor), we.call(this, U.$dynamicAnchor), S[A] = te;
      function _e(ee) {
        const je = this.opts.uriResolver.resolve;
        if (ee = v(te ? je(te, ee) : ee), E.has(ee))
          throw z(ee);
        E.add(ee);
        let M = this.refs[ee];
        return typeof M == "string" && (M = this.refs[M]), typeof M == "object" ? I(U, M.schema, ee) : ee !== v(x) && (ee[0] === "#" ? (I(U, g[ee], ee), g[ee] = U) : this.refs[ee] = x), ee;
      }
      function we(ee) {
        if (typeof ee == "string") {
          if (!y.test(ee))
            throw new Error(`invalid anchor "${ee}"`);
          _e.call(this, `#${ee}`);
        }
      }
    }), g;
    function I(U, A, L) {
      if (A !== void 0 && !t(U, A))
        throw z(L);
    }
    function z(U) {
      return new Error(`reference "${U}" resolves to more than one schema`);
    }
  }
  return xe.getSchemaRefs = w, xe;
}
var _i;
function Uo() {
  if (_i) return ht;
  _i = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.getData = ht.KeywordCxt = ht.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ mg(), t = /* @__PURE__ */ yo(), r = /* @__PURE__ */ Jl(), n = /* @__PURE__ */ yo(), o = /* @__PURE__ */ _g(), s = /* @__PURE__ */ yg(), a = /* @__PURE__ */ gg(), i = /* @__PURE__ */ ce(), c = /* @__PURE__ */ Rt(), d = /* @__PURE__ */ Do(), l = /* @__PURE__ */ de(), v = /* @__PURE__ */ Mo();
  function $(P) {
    if (h(P) && (E(P), S(P))) {
      f(P);
      return;
    }
    y(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  ht.validateFunctionCode = $;
  function y({ gen: P, validateName: O, schema: N, schemaEnv: D, opts: H }, J) {
    H.code.es5 ? P.func(O, (0, i._)`${c.default.data}, ${c.default.valCxt}`, D.$async, () => {
      P.code((0, i._)`"use strict"; ${u(N, H)}`), b(P, H), P.code(J);
    }) : P.func(O, (0, i._)`${c.default.data}, ${w(H)}`, D.$async, () => P.code(u(N, H)).code(J));
  }
  function w(P) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function b(P, O) {
    P.if(c.default.valCxt, () => {
      P.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), P.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), P.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), P.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), O.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      P.var(c.default.instancePath, (0, i._)`""`), P.var(c.default.parentData, (0, i._)`undefined`), P.var(c.default.parentDataProperty, (0, i._)`undefined`), P.var(c.default.rootData, c.default.data), O.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function f(P) {
    const { schema: O, opts: N, gen: D } = P;
    y(P, () => {
      N.$comment && O.$comment && Z(P), U(P), D.let(c.default.vErrors, null), D.let(c.default.errors, 0), N.unevaluated && m(P), I(P), x(P);
    });
  }
  function m(P) {
    const { gen: O, validateName: N } = P;
    P.evaluated = O.const("evaluated", (0, i._)`${N}.evaluated`), O.if((0, i._)`${P.evaluated}.dynamicProps`, () => O.assign((0, i._)`${P.evaluated}.props`, (0, i._)`undefined`)), O.if((0, i._)`${P.evaluated}.dynamicItems`, () => O.assign((0, i._)`${P.evaluated}.items`, (0, i._)`undefined`));
  }
  function u(P, O) {
    const N = typeof P == "object" && P[O.schemaId];
    return N && (O.code.source || O.code.process) ? (0, i._)`/*# sourceURL=${N} */` : i.nil;
  }
  function _(P, O) {
    if (h(P) && (E(P), S(P))) {
      g(P, O);
      return;
    }
    (0, e.boolOrEmptySchema)(P, O);
  }
  function S({ schema: P, self: O }) {
    if (typeof P == "boolean")
      return !P;
    for (const N in P)
      if (O.RULES.all[N])
        return !0;
    return !1;
  }
  function h(P) {
    return typeof P.schema != "boolean";
  }
  function g(P, O) {
    const { schema: N, gen: D, opts: H } = P;
    H.$comment && N.$comment && Z(P), A(P), L(P);
    const J = D.const("_errs", c.default.errors);
    I(P, J), D.var(O, (0, i._)`${J} === ${c.default.errors}`);
  }
  function E(P) {
    (0, l.checkUnknownRules)(P), z(P);
  }
  function I(P, O) {
    if (P.opts.jtd)
      return _e(P, [], !1, O);
    const N = (0, t.getSchemaTypes)(P.schema), D = (0, t.coerceAndCheckDataType)(P, N);
    _e(P, N, !D, O);
  }
  function z(P) {
    const { schema: O, errSchemaPath: N, opts: D, self: H } = P;
    O.$ref && D.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(O, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${N}"`);
  }
  function U(P) {
    const { schema: O, opts: N } = P;
    O.default !== void 0 && N.useDefaults && N.strictSchema && (0, l.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function A(P) {
    const O = P.schema[P.opts.schemaId];
    O && (P.baseId = (0, d.resolveUrl)(P.opts.uriResolver, P.baseId, O));
  }
  function L(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function Z({ gen: P, schemaEnv: O, schema: N, errSchemaPath: D, opts: H }) {
    const J = N.$comment;
    if (H.$comment === !0)
      P.code((0, i._)`${c.default.self}.logger.log(${J})`);
    else if (typeof H.$comment == "function") {
      const ue = (0, i.str)`${D}/$comment`, Oe = P.scopeValue("root", { ref: O.root });
      P.code((0, i._)`${c.default.self}.opts.$comment(${J}, ${ue}, ${Oe}.schema)`);
    }
  }
  function x(P) {
    const { gen: O, schemaEnv: N, validateName: D, ValidationError: H, opts: J } = P;
    N.$async ? O.if((0, i._)`${c.default.errors} === 0`, () => O.return(c.default.data), () => O.throw((0, i._)`new ${H}(${c.default.vErrors})`)) : (O.assign((0, i._)`${D}.errors`, c.default.vErrors), J.unevaluated && te(P), O.return((0, i._)`${c.default.errors} === 0`));
  }
  function te({ gen: P, evaluated: O, props: N, items: D }) {
    N instanceof i.Name && P.assign((0, i._)`${O}.props`, N), D instanceof i.Name && P.assign((0, i._)`${O}.items`, D);
  }
  function _e(P, O, N, D) {
    const { gen: H, schema: J, data: ue, allErrors: Oe, opts: ye, self: ge } = P, { RULES: le } = ge;
    if (J.$ref && (ye.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(J, le))) {
      H.block(() => F(P, "$ref", le.all.$ref.definition));
      return;
    }
    ye.jtd || ee(P, O), H.block(() => {
      for (const be of le.rules)
        Qe(be);
      Qe(le.post);
    });
    function Qe(be) {
      (0, r.shouldUseGroup)(J, be) && (be.type ? (H.if((0, n.checkDataType)(be.type, ue, ye.strictNumbers)), we(P, be), O.length === 1 && O[0] === be.type && N && (H.else(), (0, n.reportTypeError)(P)), H.endIf()) : we(P, be), Oe || H.if((0, i._)`${c.default.errors} === ${D || 0}`));
    }
  }
  function we(P, O) {
    const { gen: N, schema: D, opts: { useDefaults: H } } = P;
    H && (0, o.assignDefaults)(P, O.type), N.block(() => {
      for (const J of O.rules)
        (0, r.shouldUseRule)(D, J) && F(P, J.keyword, J.definition, O.type);
    });
  }
  function ee(P, O) {
    P.schemaEnv.meta || !P.opts.strictTypes || (je(P, O), P.opts.allowUnionTypes || M(P, O), R(P, P.dataTypes));
  }
  function je(P, O) {
    if (O.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = O;
        return;
      }
      O.forEach((N) => {
        T(P.dataTypes, N) || k(P, `type "${N}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), p(P, O);
    }
  }
  function M(P, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && k(P, "use allowUnionTypes to allow union type keyword");
  }
  function R(P, O) {
    const N = P.self.RULES.all;
    for (const D in N) {
      const H = N[D];
      if (typeof H == "object" && (0, r.shouldUseRule)(P.schema, H)) {
        const { type: J } = H.definition;
        J.length && !J.some((ue) => j(O, ue)) && k(P, `missing type "${J.join(",")}" for keyword "${D}"`);
      }
    }
  }
  function j(P, O) {
    return P.includes(O) || O === "number" && P.includes("integer");
  }
  function T(P, O) {
    return P.includes(O) || O === "integer" && P.includes("number");
  }
  function p(P, O) {
    const N = [];
    for (const D of P.dataTypes)
      T(O, D) ? N.push(D) : O.includes("integer") && D === "number" && N.push("integer");
    P.dataTypes = N;
  }
  function k(P, O) {
    const N = P.schemaEnv.baseId + P.errSchemaPath;
    O += ` at "${N}" (strictTypes)`, (0, l.checkStrictMode)(P, O, P.opts.strictTypes);
  }
  class C {
    constructor(O, N, D) {
      if ((0, s.validateKeywordUsage)(O, N, D), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = D, this.data = O.data, this.schema = O.schema[D], this.$data = N.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(O, this.schema, D, this.$data), this.schemaType = N.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = N, this.$data)
        this.schemaCode = O.gen.const("vSchema", B(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, N.schemaType, N.allowUndefined))
        throw new Error(`${D} value must be ${JSON.stringify(N.schemaType)}`);
      ("code" in N ? N.trackErrors : N.errors !== !1) && (this.errsCount = O.gen.const("_errs", c.default.errors));
    }
    result(O, N, D) {
      this.failResult((0, i.not)(O), N, D);
    }
    failResult(O, N, D) {
      this.gen.if(O), D ? D() : this.error(), N ? (this.gen.else(), N(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, N) {
      this.failResult((0, i.not)(O), void 0, N);
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
      const { schemaCode: N } = this;
      this.fail((0, i._)`${N} !== undefined && (${(0, i.or)(this.invalid$data(), O)})`);
    }
    error(O, N, D) {
      if (N) {
        this.setParams(N), this._error(O, D), this.setParams({});
        return;
      }
      this._error(O, D);
    }
    _error(O, N) {
      (O ? v.reportExtraError : v.reportError)(this, this.def.error, N);
    }
    $dataError() {
      (0, v.reportError)(this, this.def.$dataError || v.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, v.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(O) {
      this.allErrors || this.gen.if(O);
    }
    setParams(O, N) {
      N ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, N, D = i.nil) {
      this.gen.block(() => {
        this.check$data(O, D), N();
      });
    }
    check$data(O = i.nil, N = i.nil) {
      if (!this.$data)
        return;
      const { gen: D, schemaCode: H, schemaType: J, def: ue } = this;
      D.if((0, i.or)((0, i._)`${H} === undefined`, N)), O !== i.nil && D.assign(O, !0), (J.length || ue.validateSchema) && (D.elseIf(this.invalid$data()), this.$dataError(), O !== i.nil && D.assign(O, !1)), D.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: N, schemaType: D, def: H, it: J } = this;
      return (0, i.or)(ue(), Oe());
      function ue() {
        if (D.length) {
          if (!(N instanceof i.Name))
            throw new Error("ajv implementation error");
          const ye = Array.isArray(D) ? D : [D];
          return (0, i._)`${(0, n.checkDataTypes)(ye, N, J.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function Oe() {
        if (H.validateSchema) {
          const ye = O.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, i._)`!${ye}(${N})`;
        }
        return i.nil;
      }
    }
    subschema(O, N) {
      const D = (0, a.getSubschema)(this.it, O);
      (0, a.extendSubschemaData)(D, this.it, O), (0, a.extendSubschemaMode)(D, O);
      const H = { ...this.it, ...D, items: void 0, props: void 0 };
      return _(H, N), H;
    }
    mergeEvaluated(O, N) {
      const { it: D, gen: H } = this;
      D.opts.unevaluated && (D.props !== !0 && O.props !== void 0 && (D.props = l.mergeEvaluated.props(H, O.props, D.props, N)), D.items !== !0 && O.items !== void 0 && (D.items = l.mergeEvaluated.items(H, O.items, D.items, N)));
    }
    mergeValidEvaluated(O, N) {
      const { it: D, gen: H } = this;
      if (D.opts.unevaluated && (D.props !== !0 || D.items !== !0))
        return H.if(N, () => this.mergeEvaluated(O, i.Name)), !0;
    }
  }
  ht.KeywordCxt = C;
  function F(P, O, N, D) {
    const H = new C(P, N, O);
    "code" in N ? N.code(H, D) : H.$data && N.validate ? (0, s.funcKeywordCode)(H, N) : "macro" in N ? (0, s.macroKeywordCode)(H, N) : (N.compile || N.validate) && (0, s.funcKeywordCode)(H, N);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function B(P, { dataLevel: O, dataNames: N, dataPathArr: D }) {
    let H, J;
    if (P === "")
      return c.default.rootData;
    if (P[0] === "/") {
      if (!K.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      H = P, J = c.default.rootData;
    } else {
      const ge = Q.exec(P);
      if (!ge)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const le = +ge[1];
      if (H = ge[2], H === "#") {
        if (le >= O)
          throw new Error(ye("property/index", le));
        return D[O - le];
      }
      if (le > O)
        throw new Error(ye("data", le));
      if (J = N[O - le], !H)
        return J;
    }
    let ue = J;
    const Oe = H.split("/");
    for (const ge of Oe)
      ge && (J = (0, i._)`${J}${(0, i.getProperty)((0, l.unescapeJsonPointer)(ge))}`, ue = (0, i._)`${ue} && ${J}`);
    return ue;
    function ye(ge, le) {
      return `Cannot access ${ge} ${le} levels up, current level is ${O}`;
    }
  }
  return ht.getData = B, ht;
}
var Dr = {}, yi;
function va() {
  if (yi) return Dr;
  yi = 1, Object.defineProperty(Dr, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return Dr.default = e, Dr;
}
var Ur = {}, gi;
function Vo() {
  if (gi) return Ur;
  gi = 1, Object.defineProperty(Ur, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Do();
  class t extends Error {
    constructor(n, o, s, a) {
      super(a || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(n, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return Ur.default = t, Ur;
}
var Ye = {}, vi;
function $a() {
  if (vi) return Ye;
  vi = 1, Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.resolveSchema = Ye.getCompilingSchema = Ye.resolveRef = Ye.compileSchema = Ye.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ va(), r = /* @__PURE__ */ Rt(), n = /* @__PURE__ */ Do(), o = /* @__PURE__ */ de(), s = /* @__PURE__ */ Uo();
  class a {
    constructor(m) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let _;
      typeof m.schema == "object" && (_ = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (u = m.baseId) !== null && u !== void 0 ? u : (0, n.normalizeId)(_ == null ? void 0 : _[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = _ == null ? void 0 : _.$async, this.refs = {};
    }
  }
  Ye.SchemaEnv = a;
  function i(f) {
    const m = l.call(this, f);
    if (m)
      return m;
    const u = (0, n.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: _, lines: S } = this.opts.code, { ownProperties: h } = this.opts, g = new e.CodeGen(this.scope, { es5: _, lines: S, ownProperties: h });
    let E;
    f.$async && (E = g.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const I = g.scopeName("validate");
    f.validateName = I;
    const z = {
      gen: g,
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
      topSchemaRef: g.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: I,
      ValidationError: E,
      schema: f.schema,
      schemaEnv: f,
      rootId: u,
      baseId: f.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let U;
    try {
      this._compilations.add(f), (0, s.validateFunctionCode)(z), g.optimize(this.opts.code.optimize);
      const A = g.toString();
      U = `${g.scopeRefs(r.default.scope)}return ${A}`, this.opts.code.process && (U = this.opts.code.process(U, f));
      const Z = new Function(`${r.default.self}`, `${r.default.scope}`, U)(this, this.scope.get());
      if (this.scope.value(I, { ref: Z }), Z.errors = null, Z.schema = f.schema, Z.schemaEnv = f, f.$async && (Z.$async = !0), this.opts.code.source === !0 && (Z.source = { validateName: I, validateCode: A, scopeValues: g._values }), this.opts.unevaluated) {
        const { props: x, items: te } = z;
        Z.evaluated = {
          props: x instanceof e.Name ? void 0 : x,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: x instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, Z.source && (Z.source.evaluated = (0, e.stringify)(Z.evaluated));
      }
      return f.validate = Z, f;
    } catch (A) {
      throw delete f.validate, delete f.validateName, U && this.logger.error("Error compiling schema, function code:", U), A;
    } finally {
      this._compilations.delete(f);
    }
  }
  Ye.compileSchema = i;
  function c(f, m, u) {
    var _;
    u = (0, n.resolveUrl)(this.opts.uriResolver, m, u);
    const S = f.refs[u];
    if (S)
      return S;
    let h = $.call(this, f, u);
    if (h === void 0) {
      const g = (_ = f.localRefs) === null || _ === void 0 ? void 0 : _[u], { schemaId: E } = this.opts;
      g && (h = new a({ schema: g, schemaId: E, root: f, baseId: m }));
    }
    if (h !== void 0)
      return f.refs[u] = d.call(this, h);
  }
  Ye.resolveRef = c;
  function d(f) {
    return (0, n.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : i.call(this, f);
  }
  function l(f) {
    for (const m of this._compilations)
      if (v(m, f))
        return m;
  }
  Ye.getCompilingSchema = l;
  function v(f, m) {
    return f.schema === m.schema && f.root === m.root && f.baseId === m.baseId;
  }
  function $(f, m) {
    let u;
    for (; typeof (u = this.refs[m]) == "string"; )
      m = u;
    return u || this.schemas[m] || y.call(this, f, m);
  }
  function y(f, m) {
    const u = this.opts.uriResolver.parse(m), _ = (0, n._getFullPath)(this.opts.uriResolver, u);
    let S = (0, n.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && _ === S)
      return b.call(this, u, f);
    const h = (0, n.normalizeId)(_), g = this.refs[h] || this.schemas[h];
    if (typeof g == "string") {
      const E = y.call(this, f, g);
      return typeof (E == null ? void 0 : E.schema) != "object" ? void 0 : b.call(this, u, E);
    }
    if (typeof (g == null ? void 0 : g.schema) == "object") {
      if (g.validate || i.call(this, g), h === (0, n.normalizeId)(m)) {
        const { schema: E } = g, { schemaId: I } = this.opts, z = E[I];
        return z && (S = (0, n.resolveUrl)(this.opts.uriResolver, S, z)), new a({ schema: E, schemaId: I, root: f, baseId: S });
      }
      return b.call(this, u, g);
    }
  }
  Ye.resolveSchema = y;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function b(f, { baseId: m, schema: u, root: _ }) {
    var S;
    if (((S = f.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const E of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const I = u[(0, o.unescapeFragment)(E)];
      if (I === void 0)
        return;
      u = I;
      const z = typeof u == "object" && u[this.opts.schemaId];
      !w.has(E) && z && (m = (0, n.resolveUrl)(this.opts.uriResolver, m, z));
    }
    let h;
    if (typeof u != "boolean" && u.$ref && !(0, o.schemaHasRulesButRef)(u, this.RULES)) {
      const E = (0, n.resolveUrl)(this.opts.uriResolver, m, u.$ref);
      h = y.call(this, _, E);
    }
    const { schemaId: g } = this.opts;
    if (h = h || new a({ schema: u, schemaId: g, root: _, baseId: m }), h.schema !== h.root.schema)
      return h;
  }
  return Ye;
}
const $g = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", wg = "Meta-schema for $data reference (JSON AnySchema extension proposal)", bg = "object", Sg = ["$data"], Eg = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, kg = !1, Pg = {
  $id: $g,
  description: wg,
  type: bg,
  required: Sg,
  properties: Eg,
  additionalProperties: kg
};
var Vr = {}, hr = { exports: {} }, ns, $i;
function Gl() {
  if ($i) return ns;
  $i = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function r($) {
    let y = "", w = 0, b = 0;
    for (b = 0; b < $.length; b++)
      if (w = $[b].charCodeAt(0), w !== 48) {
        if (!(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
          return "";
        y += $[b];
        break;
      }
    for (b += 1; b < $.length; b++) {
      if (w = $[b].charCodeAt(0), !(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
        return "";
      y += $[b];
    }
    return y;
  }
  const n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o($) {
    return $.length = 0, !0;
  }
  function s($, y, w) {
    if ($.length) {
      const b = r($);
      if (b !== "")
        y.push(b);
      else
        return w.error = !0, !1;
      $.length = 0;
    }
    return !0;
  }
  function a($) {
    let y = 0;
    const w = { error: !1, address: "", zone: "" }, b = [], f = [];
    let m = !1, u = !1, _ = s;
    for (let S = 0; S < $.length; S++) {
      const h = $[S];
      if (!(h === "[" || h === "]"))
        if (h === ":") {
          if (m === !0 && (u = !0), !_(f, b, w))
            break;
          if (++y > 7) {
            w.error = !0;
            break;
          }
          S > 0 && $[S - 1] === ":" && (m = !0), b.push(":");
          continue;
        } else if (h === "%") {
          if (!_(f, b, w))
            break;
          _ = o;
        } else {
          f.push(h);
          continue;
        }
    }
    return f.length && (_ === o ? w.zone = f.join("") : u ? b.push(f.join("")) : b.push(r(f))), w.address = b.join(""), w;
  }
  function i($) {
    if (c($, ":") < 2)
      return { host: $, isIPV6: !1 };
    const y = a($);
    if (y.error)
      return { host: $, isIPV6: !1 };
    {
      let w = y.address, b = y.address;
      return y.zone && (w += "%" + y.zone, b += "%25" + y.zone), { host: w, isIPV6: !0, escapedHost: b };
    }
  }
  function c($, y) {
    let w = 0;
    for (let b = 0; b < $.length; b++)
      $[b] === y && w++;
    return w;
  }
  function d($) {
    let y = $;
    const w = [];
    let b = -1, f = 0;
    for (; f = y.length; ) {
      if (f === 1) {
        if (y === ".")
          break;
        if (y === "/") {
          w.push("/");
          break;
        } else {
          w.push(y);
          break;
        }
      } else if (f === 2) {
        if (y[0] === ".") {
          if (y[1] === ".")
            break;
          if (y[1] === "/") {
            y = y.slice(2);
            continue;
          }
        } else if (y[0] === "/" && (y[1] === "." || y[1] === "/")) {
          w.push("/");
          break;
        }
      } else if (f === 3 && y === "/..") {
        w.length !== 0 && w.pop(), w.push("/");
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
          y = y.slice(3), w.length !== 0 && w.pop();
          continue;
        }
      }
      if ((b = y.indexOf("/", 1)) === -1) {
        w.push(y);
        break;
      } else
        w.push(y.slice(0, b)), y = y.slice(b);
    }
    return w.join("");
  }
  function l($, y) {
    const w = y !== !0 ? escape : unescape;
    return $.scheme !== void 0 && ($.scheme = w($.scheme)), $.userinfo !== void 0 && ($.userinfo = w($.userinfo)), $.host !== void 0 && ($.host = w($.host)), $.path !== void 0 && ($.path = w($.path)), $.query !== void 0 && ($.query = w($.query)), $.fragment !== void 0 && ($.fragment = w($.fragment)), $;
  }
  function v($) {
    const y = [];
    if ($.userinfo !== void 0 && (y.push($.userinfo), y.push("@")), $.host !== void 0) {
      let w = unescape($.host);
      if (!t(w)) {
        const b = i(w);
        b.isIPV6 === !0 ? w = `[${b.escapedHost}]` : w = $.host;
      }
      y.push(w);
    }
    return (typeof $.port == "number" || typeof $.port == "string") && (y.push(":"), y.push(String($.port))), y.length ? y.join("") : void 0;
  }
  return ns = {
    nonSimpleDomain: n,
    recomposeAuthority: v,
    normalizeComponentEncoding: l,
    removeDotSegments: d,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: i,
    stringArrayToHexStripped: r
  }, ns;
}
var os, wi;
function Tg() {
  if (wi) return os;
  wi = 1;
  const { isUUID: e } = Gl(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
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
    const g = String(h.scheme).toLowerCase() === "https";
    return (h.port === (g ? 443 : 80) || h.port === "") && (h.port = void 0), h.path || (h.path = "/"), h;
  }
  function i(h) {
    return h.secure = o(h), h.resourceName = (h.path || "/") + (h.query ? "?" + h.query : ""), h.path = void 0, h.query = void 0, h;
  }
  function c(h) {
    if ((h.port === (o(h) ? 443 : 80) || h.port === "") && (h.port = void 0), typeof h.secure == "boolean" && (h.scheme = h.secure ? "wss" : "ws", h.secure = void 0), h.resourceName) {
      const [g, E] = h.resourceName.split("?");
      h.path = g && g !== "/" ? g : void 0, h.query = E, h.resourceName = void 0;
    }
    return h.fragment = void 0, h;
  }
  function d(h, g) {
    if (!h.path)
      return h.error = "URN can not be parsed", h;
    const E = h.path.match(t);
    if (E) {
      const I = g.scheme || h.scheme || "urn";
      h.nid = E[1].toLowerCase(), h.nss = E[2];
      const z = `${I}:${g.nid || h.nid}`, U = S(z);
      h.path = void 0, U && (h = U.parse(h, g));
    } else
      h.error = h.error || "URN can not be parsed.";
    return h;
  }
  function l(h, g) {
    if (h.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const E = g.scheme || h.scheme || "urn", I = h.nid.toLowerCase(), z = `${E}:${g.nid || I}`, U = S(z);
    U && (h = U.serialize(h, g));
    const A = h, L = h.nss;
    return A.path = `${I || g.nid}:${L}`, g.skipEscape = !0, A;
  }
  function v(h, g) {
    const E = h;
    return E.uuid = E.nss, E.nss = void 0, !g.tolerant && (!E.uuid || !e(E.uuid)) && (E.error = E.error || "UUID is not valid."), E;
  }
  function $(h) {
    const g = h;
    return g.nss = (h.uuid || "").toLowerCase(), g;
  }
  const y = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: s,
      serialize: a
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: y.domainHost,
      parse: s,
      serialize: a
    }
  ), b = (
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
      domainHost: b.domainHost,
      parse: b.parse,
      serialize: b.serialize
    }
  ), _ = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: y,
      https: w,
      ws: b,
      wss: f,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: d,
          serialize: l,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: v,
          serialize: $,
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
  return os = {
    wsIsSecure: o,
    SCHEMES: _,
    isValidSchemeName: n,
    getSchemeHandler: S
  }, os;
}
var bi;
function Wl() {
  if (bi) return hr.exports;
  bi = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizeComponentEncoding: n, isIPv4: o, nonSimpleDomain: s } = Gl(), { SCHEMES: a, getSchemeHandler: i } = Tg();
  function c(f, m) {
    return typeof f == "string" ? f = /** @type {T} */
    $(w(f, m), m) : typeof f == "object" && (f = /** @type {T} */
    w($(f, m), m)), f;
  }
  function d(f, m, u) {
    const _ = u ? Object.assign({ scheme: "null" }, u) : { scheme: "null" }, S = l(w(f, _), w(m, _), _, !0);
    return _.skipEscape = !0, $(S, _);
  }
  function l(f, m, u, _) {
    const S = {};
    return _ || (f = w($(f, u), u), m = w($(m, u), u)), u = u || {}, !u.tolerant && m.scheme ? (S.scheme = m.scheme, S.userinfo = m.userinfo, S.host = m.host, S.port = m.port, S.path = t(m.path || ""), S.query = m.query) : (m.userinfo !== void 0 || m.host !== void 0 || m.port !== void 0 ? (S.userinfo = m.userinfo, S.host = m.host, S.port = m.port, S.path = t(m.path || ""), S.query = m.query) : (m.path ? (m.path[0] === "/" ? S.path = t(m.path) : ((f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0) && !f.path ? S.path = "/" + m.path : f.path ? S.path = f.path.slice(0, f.path.lastIndexOf("/") + 1) + m.path : S.path = m.path, S.path = t(S.path)), S.query = m.query) : (S.path = f.path, m.query !== void 0 ? S.query = m.query : S.query = f.query), S.userinfo = f.userinfo, S.host = f.host, S.port = f.port), S.scheme = f.scheme), S.fragment = m.fragment, S;
  }
  function v(f, m, u) {
    return typeof f == "string" ? (f = unescape(f), f = $(n(w(f, u), !0), { ...u, skipEscape: !0 })) : typeof f == "object" && (f = $(n(f, !0), { ...u, skipEscape: !0 })), typeof m == "string" ? (m = unescape(m), m = $(n(w(m, u), !0), { ...u, skipEscape: !0 })) : typeof m == "object" && (m = $(n(m, !0), { ...u, skipEscape: !0 })), f.toLowerCase() === m.toLowerCase();
  }
  function $(f, m) {
    const u = {
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
    }, _ = Object.assign({}, m), S = [], h = i(_.scheme || u.scheme);
    h && h.serialize && h.serialize(u, _), u.path !== void 0 && (_.skipEscape ? u.path = unescape(u.path) : (u.path = escape(u.path), u.scheme !== void 0 && (u.path = u.path.split("%3A").join(":")))), _.reference !== "suffix" && u.scheme && S.push(u.scheme, ":");
    const g = r(u);
    if (g !== void 0 && (_.reference !== "suffix" && S.push("//"), S.push(g), u.path && u.path[0] !== "/" && S.push("/")), u.path !== void 0) {
      let E = u.path;
      !_.absolutePath && (!h || !h.absolutePath) && (E = t(E)), g === void 0 && E[0] === "/" && E[1] === "/" && (E = "/%2F" + E.slice(2)), S.push(E);
    }
    return u.query !== void 0 && S.push("?", u.query), u.fragment !== void 0 && S.push("#", u.fragment), S.join("");
  }
  const y = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function w(f, m) {
    const u = Object.assign({}, m), _ = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let S = !1;
    u.reference === "suffix" && (u.scheme ? f = u.scheme + ":" + f : f = "//" + f);
    const h = f.match(y);
    if (h) {
      if (_.scheme = h[1], _.userinfo = h[3], _.host = h[4], _.port = parseInt(h[5], 10), _.path = h[6] || "", _.query = h[7], _.fragment = h[8], isNaN(_.port) && (_.port = h[5]), _.host)
        if (o(_.host) === !1) {
          const I = e(_.host);
          _.host = I.host.toLowerCase(), S = I.isIPV6;
        } else
          S = !0;
      _.scheme === void 0 && _.userinfo === void 0 && _.host === void 0 && _.port === void 0 && _.query === void 0 && !_.path ? _.reference = "same-document" : _.scheme === void 0 ? _.reference = "relative" : _.fragment === void 0 ? _.reference = "absolute" : _.reference = "uri", u.reference && u.reference !== "suffix" && u.reference !== _.reference && (_.error = _.error || "URI is not a " + u.reference + " reference.");
      const g = i(u.scheme || _.scheme);
      if (!u.unicodeSupport && (!g || !g.unicodeSupport) && _.host && (u.domainHost || g && g.domainHost) && S === !1 && s(_.host))
        try {
          _.host = URL.domainToASCII(_.host.toLowerCase());
        } catch (E) {
          _.error = _.error || "Host's domain name can not be converted to ASCII: " + E;
        }
      (!g || g && !g.skipNormalize) && (f.indexOf("%") !== -1 && (_.scheme !== void 0 && (_.scheme = unescape(_.scheme)), _.host !== void 0 && (_.host = unescape(_.host))), _.path && (_.path = escape(unescape(_.path))), _.fragment && (_.fragment = encodeURI(decodeURIComponent(_.fragment)))), g && g.parse && g.parse(_, u);
    } else
      _.error = _.error || "URI can not be parsed.";
    return _;
  }
  const b = {
    SCHEMES: a,
    normalize: c,
    resolve: d,
    resolveComponent: l,
    equal: v,
    serialize: $,
    parse: w
  };
  return hr.exports = b, hr.exports.default = b, hr.exports.fastUri = b, hr.exports;
}
var Si;
function Rg() {
  if (Si) return Vr;
  Si = 1, Object.defineProperty(Vr, "__esModule", { value: !0 });
  const e = Wl();
  return e.code = 'require("ajv/dist/runtime/uri").default', Vr.default = e, Vr;
}
var Ei;
function Og() {
  return Ei || (Ei = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Uo();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = /* @__PURE__ */ ce();
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
    const n = /* @__PURE__ */ va(), o = /* @__PURE__ */ Vo(), s = /* @__PURE__ */ xl(), a = /* @__PURE__ */ $a(), i = /* @__PURE__ */ ce(), c = /* @__PURE__ */ Do(), d = /* @__PURE__ */ yo(), l = /* @__PURE__ */ de(), v = Pg, $ = /* @__PURE__ */ Rg(), y = (M, R) => new RegExp(M, R);
    y.code = "new RegExp";
    const w = ["removeAdditional", "useDefaults", "coerceTypes"], b = /* @__PURE__ */ new Set([
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
    }, u = 200;
    function _(M) {
      var R, j, T, p, k, C, F, K, Q, B, P, O, N, D, H, J, ue, Oe, ye, ge, le, Qe, be, It, Ct;
      const st = M.strict, Nt = (R = M.code) === null || R === void 0 ? void 0 : R.optimize, lr = Nt === !0 || Nt === void 0 ? 1 : Nt || 0, dr = (T = (j = M.code) === null || j === void 0 ? void 0 : j.regExp) !== null && T !== void 0 ? T : y, Ko = (p = M.uriResolver) !== null && p !== void 0 ? p : $.default;
      return {
        strictSchema: (C = (k = M.strictSchema) !== null && k !== void 0 ? k : st) !== null && C !== void 0 ? C : !0,
        strictNumbers: (K = (F = M.strictNumbers) !== null && F !== void 0 ? F : st) !== null && K !== void 0 ? K : !0,
        strictTypes: (B = (Q = M.strictTypes) !== null && Q !== void 0 ? Q : st) !== null && B !== void 0 ? B : "log",
        strictTuples: (O = (P = M.strictTuples) !== null && P !== void 0 ? P : st) !== null && O !== void 0 ? O : "log",
        strictRequired: (D = (N = M.strictRequired) !== null && N !== void 0 ? N : st) !== null && D !== void 0 ? D : !1,
        code: M.code ? { ...M.code, optimize: lr, regExp: dr } : { optimize: lr, regExp: dr },
        loopRequired: (H = M.loopRequired) !== null && H !== void 0 ? H : u,
        loopEnum: (J = M.loopEnum) !== null && J !== void 0 ? J : u,
        meta: (ue = M.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (Oe = M.messages) !== null && Oe !== void 0 ? Oe : !0,
        inlineRefs: (ye = M.inlineRefs) !== null && ye !== void 0 ? ye : !0,
        schemaId: (ge = M.schemaId) !== null && ge !== void 0 ? ge : "$id",
        addUsedSchema: (le = M.addUsedSchema) !== null && le !== void 0 ? le : !0,
        validateSchema: (Qe = M.validateSchema) !== null && Qe !== void 0 ? Qe : !0,
        validateFormats: (be = M.validateFormats) !== null && be !== void 0 ? be : !0,
        unicodeRegExp: (It = M.unicodeRegExp) !== null && It !== void 0 ? It : !0,
        int32range: (Ct = M.int32range) !== null && Ct !== void 0 ? Ct : !0,
        uriResolver: Ko
      };
    }
    class S {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ..._(R) };
        const { es5: j, lines: T } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: b, es5: j, lines: T }), this.logger = L(R.logger);
        const p = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, s.getRules)(), h.call(this, f, R, "NOT SUPPORTED"), h.call(this, m, R, "DEPRECATED", "warn"), this._metaOpts = U.call(this), R.formats && I.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && z.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), E.call(this), R.validateFormats = p;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: j, schemaId: T } = this.opts;
        let p = v;
        T === "id" && (p = { ...v }, p.id = p.$id, delete p.$id), j && R && this.addMetaSchema(p, p[T], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: j } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[j] || R : void 0;
      }
      validate(R, j) {
        let T;
        if (typeof R == "string") {
          if (T = this.getSchema(R), !T)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          T = this.compile(R);
        const p = T(j);
        return "$async" in T || (this.errors = T.errors), p;
      }
      compile(R, j) {
        const T = this._addSchema(R, j);
        return T.validate || this._compileSchemaEnv(T);
      }
      compileAsync(R, j) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: T } = this.opts;
        return p.call(this, R, j);
        async function p(B, P) {
          await k.call(this, B.$schema);
          const O = this._addSchema(B, P);
          return O.validate || C.call(this, O);
        }
        async function k(B) {
          B && !this.getSchema(B) && await p.call(this, { $ref: B }, !0);
        }
        async function C(B) {
          try {
            return this._compileSchemaEnv(B);
          } catch (P) {
            if (!(P instanceof o.default))
              throw P;
            return F.call(this, P), await K.call(this, P.missingSchema), C.call(this, B);
          }
        }
        function F({ missingSchema: B, missingRef: P }) {
          if (this.refs[B])
            throw new Error(`AnySchema ${B} is loaded but ${P} cannot be resolved`);
        }
        async function K(B) {
          const P = await Q.call(this, B);
          this.refs[B] || await k.call(this, P.$schema), this.refs[B] || this.addSchema(P, B, j);
        }
        async function Q(B) {
          const P = this._loading[B];
          if (P)
            return P;
          try {
            return await (this._loading[B] = T(B));
          } finally {
            delete this._loading[B];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, j, T, p = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const C of R)
            this.addSchema(C, void 0, T, p);
          return this;
        }
        let k;
        if (typeof R == "object") {
          const { schemaId: C } = this.opts;
          if (k = R[C], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${C} must be string`);
        }
        return j = (0, c.normalizeId)(j || k), this._checkUnique(j), this.schemas[j] = this._addSchema(R, T, j, p, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, j, T = this.opts.validateSchema) {
        return this.addSchema(R, j, !0, T), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, j) {
        if (typeof R == "boolean")
          return !0;
        let T;
        if (T = R.$schema, T !== void 0 && typeof T != "string")
          throw new Error("$schema must be a string");
        if (T = T || this.opts.defaultMeta || this.defaultMeta(), !T)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const p = this.validate(T, R);
        if (!p && j) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
        }
        return p;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let j;
        for (; typeof (j = g.call(this, R)) == "string"; )
          R = j;
        if (j === void 0) {
          const { schemaId: T } = this.opts, p = new a.SchemaEnv({ schema: {}, schemaId: T });
          if (j = a.resolveSchema.call(this, p, R), !j)
            return;
          this.refs[R] = j;
        }
        return j.validate || this._compileSchemaEnv(j);
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
            const j = g.call(this, R);
            return typeof j == "object" && this._cache.delete(j.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const j = R;
            this._cache.delete(j);
            let T = R[this.opts.schemaId];
            return T && (T = (0, c.normalizeId)(T), delete this.schemas[T], delete this.refs[T]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const j of R)
          this.addKeyword(j);
        return this;
      }
      addKeyword(R, j) {
        let T;
        if (typeof R == "string")
          T = R, typeof j == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), j.keyword = T);
        else if (typeof R == "object" && j === void 0) {
          if (j = R, T = j.keyword, Array.isArray(T) && !T.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (x.call(this, T, j), !j)
          return (0, l.eachItem)(T, (k) => te.call(this, k)), this;
        we.call(this, j);
        const p = {
          ...j,
          type: (0, d.getJSONTypes)(j.type),
          schemaType: (0, d.getJSONTypes)(j.schemaType)
        };
        return (0, l.eachItem)(T, p.type.length === 0 ? (k) => te.call(this, k, p) : (k) => p.type.forEach((C) => te.call(this, k, p, C))), this;
      }
      getKeyword(R) {
        const j = this.RULES.all[R];
        return typeof j == "object" ? j.definition : !!j;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: j } = this;
        delete j.keywords[R], delete j.all[R];
        for (const T of j.rules) {
          const p = T.rules.findIndex((k) => k.keyword === R);
          p >= 0 && T.rules.splice(p, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, j) {
        return typeof j == "string" && (j = new RegExp(j)), this.formats[R] = j, this;
      }
      errorsText(R = this.errors, { separator: j = ", ", dataVar: T = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((p) => `${T}${p.instancePath} ${p.message}`).reduce((p, k) => p + j + k);
      }
      $dataMetaSchema(R, j) {
        const T = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const p of j) {
          const k = p.split("/").slice(1);
          let C = R;
          for (const F of k)
            C = C[F];
          for (const F in T) {
            const K = T[F];
            if (typeof K != "object")
              continue;
            const { $data: Q } = K.definition, B = C[F];
            Q && B && (C[F] = je(B));
          }
        }
        return R;
      }
      _removeAllSchemas(R, j) {
        for (const T in R) {
          const p = R[T];
          (!j || j.test(T)) && (typeof p == "string" ? delete R[T] : p && !p.meta && (this._cache.delete(p.schema), delete R[T]));
        }
      }
      _addSchema(R, j, T, p = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let C;
        const { schemaId: F } = this.opts;
        if (typeof R == "object")
          C = R[F];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let K = this._cache.get(R);
        if (K !== void 0)
          return K;
        T = (0, c.normalizeId)(C || T);
        const Q = c.getSchemaRefs.call(this, R, T);
        return K = new a.SchemaEnv({ schema: R, schemaId: F, meta: j, baseId: T, localRefs: Q }), this._cache.set(K.schema, K), k && !T.startsWith("#") && (T && this._checkUnique(T), this.refs[T] = K), p && this.validateSchema(R, !0), K;
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
        const j = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, R);
        } finally {
          this.opts = j;
        }
      }
    }
    S.ValidationError = n.default, S.MissingRefError = o.default, e.default = S;
    function h(M, R, j, T = "error") {
      for (const p in M) {
        const k = p;
        k in R && this.logger[T](`${j}: option ${p}. ${M[k]}`);
      }
    }
    function g(M) {
      return M = (0, c.normalizeId)(M), this.schemas[M] || this.refs[M];
    }
    function E() {
      const M = this.opts.schemas;
      if (M)
        if (Array.isArray(M))
          this.addSchema(M);
        else
          for (const R in M)
            this.addSchema(M[R], R);
    }
    function I() {
      for (const M in this.opts.formats) {
        const R = this.opts.formats[M];
        R && this.addFormat(M, R);
      }
    }
    function z(M) {
      if (Array.isArray(M)) {
        this.addVocabulary(M);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in M) {
        const j = M[R];
        j.keyword || (j.keyword = R), this.addKeyword(j);
      }
    }
    function U() {
      const M = { ...this.opts };
      for (const R of w)
        delete M[R];
      return M;
    }
    const A = { log() {
    }, warn() {
    }, error() {
    } };
    function L(M) {
      if (M === !1)
        return A;
      if (M === void 0)
        return console;
      if (M.log && M.warn && M.error)
        return M;
      throw new Error("logger must implement log, warn and error methods");
    }
    const Z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function x(M, R) {
      const { RULES: j } = this;
      if ((0, l.eachItem)(M, (T) => {
        if (j.keywords[T])
          throw new Error(`Keyword ${T} is already defined`);
        if (!Z.test(T))
          throw new Error(`Keyword ${T} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(M, R, j) {
      var T;
      const p = R == null ? void 0 : R.post;
      if (j && p)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let C = p ? k.post : k.rules.find(({ type: K }) => K === j);
      if (C || (C = { type: j, rules: [] }, k.rules.push(C)), k.keywords[M] = !0, !R)
        return;
      const F = {
        keyword: M,
        definition: {
          ...R,
          type: (0, d.getJSONTypes)(R.type),
          schemaType: (0, d.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? _e.call(this, C, F, R.before) : C.rules.push(F), k.all[M] = F, (T = R.implements) === null || T === void 0 || T.forEach((K) => this.addKeyword(K));
    }
    function _e(M, R, j) {
      const T = M.rules.findIndex((p) => p.keyword === j);
      T >= 0 ? M.rules.splice(T, 0, R) : (M.rules.push(R), this.logger.warn(`rule ${j} is not defined`));
    }
    function we(M) {
      let { metaSchema: R } = M;
      R !== void 0 && (M.$data && this.opts.$data && (R = je(R)), M.validateSchema = this.compile(R, !0));
    }
    const ee = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function je(M) {
      return { anyOf: [M, ee] };
    }
  }(Bo)), Bo;
}
var Lr = {}, Fr = {}, Zr = {}, ki;
function Ig() {
  if (ki) return Zr;
  ki = 1, Object.defineProperty(Zr, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Zr.default = e, Zr;
}
var $t = {}, Pi;
function Cg() {
  if (Pi) return $t;
  Pi = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.callRef = $t.getValidate = void 0;
  const e = /* @__PURE__ */ Vo(), t = /* @__PURE__ */ lt(), r = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Rt(), o = /* @__PURE__ */ $a(), s = /* @__PURE__ */ de(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: l, schema: v, it: $ } = d, { baseId: y, schemaEnv: w, validateName: b, opts: f, self: m } = $, { root: u } = w;
      if ((v === "#" || v === "#/") && y === u.baseId)
        return S();
      const _ = o.resolveRef.call(m, u, y, v);
      if (_ === void 0)
        throw new e.default($.opts.uriResolver, y, v);
      if (_ instanceof o.SchemaEnv)
        return h(_);
      return g(_);
      function S() {
        if (w === u)
          return c(d, b, w, w.$async);
        const E = l.scopeValue("root", { ref: u });
        return c(d, (0, r._)`${E}.validate`, u, u.$async);
      }
      function h(E) {
        const I = i(d, E);
        c(d, I, E, E.$async);
      }
      function g(E) {
        const I = l.scopeValue("schema", f.code.source === !0 ? { ref: E, code: (0, r.stringify)(E) } : { ref: E }), z = l.name("valid"), U = d.subschema({
          schema: E,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: I,
          errSchemaPath: v
        }, z);
        d.mergeEvaluated(U), d.ok(z);
      }
    }
  };
  function i(d, l) {
    const { gen: v } = d;
    return l.validate ? v.scopeValue("validate", { ref: l.validate }) : (0, r._)`${v.scopeValue("wrapper", { ref: l })}.validate`;
  }
  $t.getValidate = i;
  function c(d, l, v, $) {
    const { gen: y, it: w } = d, { allErrors: b, schemaEnv: f, opts: m } = w, u = m.passContext ? n.default.this : r.nil;
    $ ? _() : S();
    function _() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const E = y.let("valid");
      y.try(() => {
        y.code((0, r._)`await ${(0, t.callValidateCode)(d, l, u)}`), g(l), b || y.assign(E, !0);
      }, (I) => {
        y.if((0, r._)`!(${I} instanceof ${w.ValidationError})`, () => y.throw(I)), h(I), b || y.assign(E, !1);
      }), d.ok(E);
    }
    function S() {
      d.result((0, t.callValidateCode)(d, l, u), () => g(l), () => h(l));
    }
    function h(E) {
      const I = (0, r._)`${E}.errors`;
      y.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${I} : ${n.default.vErrors}.concat(${I})`), y.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function g(E) {
      var I;
      if (!w.opts.unevaluated)
        return;
      const z = (I = v == null ? void 0 : v.validate) === null || I === void 0 ? void 0 : I.evaluated;
      if (w.props !== !0)
        if (z && !z.dynamicProps)
          z.props !== void 0 && (w.props = s.mergeEvaluated.props(y, z.props, w.props));
        else {
          const U = y.var("props", (0, r._)`${E}.evaluated.props`);
          w.props = s.mergeEvaluated.props(y, U, w.props, r.Name);
        }
      if (w.items !== !0)
        if (z && !z.dynamicItems)
          z.items !== void 0 && (w.items = s.mergeEvaluated.items(y, z.items, w.items));
        else {
          const U = y.var("items", (0, r._)`${E}.evaluated.items`);
          w.items = s.mergeEvaluated.items(y, U, w.items, r.Name);
        }
    }
  }
  return $t.callRef = c, $t.default = a, $t;
}
var Ti;
function Ng() {
  if (Ti) return Fr;
  Ti = 1, Object.defineProperty(Fr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ig(), t = /* @__PURE__ */ Cg(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Fr.default = r, Fr;
}
var Hr = {}, Kr = {}, Ri;
function jg() {
  if (Ri) return Kr;
  Ri = 1, Object.defineProperty(Kr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = e.operators, r = {
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
  return Kr.default = o, Kr;
}
var xr = {}, Oi;
function qg() {
  if (Oi) return xr;
  Oi = 1, Object.defineProperty(xr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), r = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must be multiple of ${n}`,
      params: ({ schemaCode: n }) => (0, e._)`{multipleOf: ${n}}`
    },
    code(n) {
      const { gen: o, data: s, schemaCode: a, it: i } = n, c = i.opts.multipleOfPrecision, d = o.let("res"), l = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      n.fail$data((0, e._)`(${a} === 0 || (${d} = ${s}/${a}, ${l}))`);
    }
  };
  return xr.default = r, xr;
}
var Jr = {}, Gr = {}, Ii;
function zg() {
  if (Ii) return Gr;
  Ii = 1, Object.defineProperty(Gr, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let n = 0, o = 0, s;
    for (; o < r; )
      n++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < r && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return n;
  }
  return Gr.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Gr;
}
var Ci;
function Mg() {
  if (Ci) return Jr;
  Ci = 1, Object.defineProperty(Jr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ zg(), o = {
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
      const { keyword: a, data: i, schemaCode: c, it: d } = s, l = a === "maxLength" ? e.operators.GT : e.operators.LT, v = d.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, r.default)}(${i})`;
      s.fail$data((0, e._)`${v} ${l} ${c}`);
    }
  };
  return Jr.default = o, Jr;
}
var Wr = {}, Ni;
function Ag() {
  if (Ni) return Wr;
  Ni = 1, Object.defineProperty(Wr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ ce(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, r.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, r._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: v } = s, $ = v.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: y } = v.opts.code, w = y.code === "new RegExp" ? (0, r._)`new RegExp` : (0, t.useFunc)(a, y), b = a.let("valid");
        a.try(() => a.assign(b, (0, r._)`${w}(${l}, ${$}).test(${i})`), () => a.assign(b, !1)), s.fail$data((0, r._)`!${b}`);
      } else {
        const y = (0, e.usePattern)(s, d);
        s.fail$data((0, r._)`!${y}.test(${i})`);
      }
    }
  };
  return Wr.default = o, Wr;
}
var Br = {}, ji;
function Dg() {
  if (ji) return Br;
  ji = 1, Object.defineProperty(Br, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), r = {
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
  return Br.default = r, Br;
}
var Qr = {}, qi;
function Ug() {
  if (qi) return Qr;
  qi = 1, Object.defineProperty(Qr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: a, schema: i, schemaCode: c, data: d, $data: l, it: v } = s, { opts: $ } = v;
      if (!l && i.length === 0)
        return;
      const y = i.length >= $.loopRequired;
      if (v.allErrors ? w() : b(), $.strictRequired) {
        const u = s.parentSchema.properties, { definedProperties: _ } = s.it;
        for (const S of i)
          if ((u == null ? void 0 : u[S]) === void 0 && !_.has(S)) {
            const h = v.schemaEnv.baseId + v.errSchemaPath, g = `required property "${S}" is not defined at "${h}" (strictRequired)`;
            (0, r.checkStrictMode)(v, g, v.opts.strictRequired);
          }
      }
      function w() {
        if (y || l)
          s.block$data(t.nil, f);
        else
          for (const u of i)
            (0, e.checkReportMissingProp)(s, u);
      }
      function b() {
        const u = a.let("missing");
        if (y || l) {
          const _ = a.let("valid", !0);
          s.block$data(_, () => m(u, _)), s.ok(_);
        } else
          a.if((0, e.checkMissingProp)(s, i, u)), (0, e.reportMissingProp)(s, u), a.else();
      }
      function f() {
        a.forOf("prop", c, (u) => {
          s.setParams({ missingProperty: u }), a.if((0, e.noPropertyInData)(a, d, u, $.ownProperties), () => s.error());
        });
      }
      function m(u, _) {
        s.setParams({ missingProperty: u }), a.forOf(u, c, () => {
          a.assign(_, (0, e.propertyInData)(a, d, u, $.ownProperties)), a.if((0, t.not)(_), () => {
            s.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return Qr.default = o, Qr;
}
var Yr = {}, zi;
function Vg() {
  if (zi) return Yr;
  zi = 1, Object.defineProperty(Yr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), r = {
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
  return Yr.default = r, Yr;
}
var Xr = {}, en = {}, Mi;
function wa() {
  if (Mi) return en;
  Mi = 1, Object.defineProperty(en, "__esModule", { value: !0 });
  const e = Ao();
  return e.code = 'require("ajv/dist/runtime/equal").default', en.default = e, en;
}
var Ai;
function Lg() {
  if (Ai) return Xr;
  Ai = 1, Object.defineProperty(Xr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yo(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ wa(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${a} are identical)`,
      params: ({ params: { i: a, j: i } }) => (0, t._)`{i: ${a}, j: ${i}}`
    },
    code(a) {
      const { gen: i, data: c, $data: d, schema: l, parentSchema: v, schemaCode: $, it: y } = a;
      if (!d && !l)
        return;
      const w = i.let("valid"), b = v.items ? (0, e.getSchemaTypes)(v.items) : [];
      a.block$data(w, f, (0, t._)`${$} === false`), a.ok(w);
      function f() {
        const S = i.let("i", (0, t._)`${c}.length`), h = i.let("j");
        a.setParams({ i: S, j: h }), i.assign(w, !0), i.if((0, t._)`${S} > 1`, () => (m() ? u : _)(S, h));
      }
      function m() {
        return b.length > 0 && !b.some((S) => S === "object" || S === "array");
      }
      function u(S, h) {
        const g = i.name("item"), E = (0, e.checkDataTypes)(b, g, y.opts.strictNumbers, e.DataType.Wrong), I = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${S}--;`, () => {
          i.let(g, (0, t._)`${c}[${S}]`), i.if(E, (0, t._)`continue`), b.length > 1 && i.if((0, t._)`typeof ${g} == "string"`, (0, t._)`${g} += "_"`), i.if((0, t._)`typeof ${I}[${g}] == "number"`, () => {
            i.assign(h, (0, t._)`${I}[${g}]`), a.error(), i.assign(w, !1).break();
          }).code((0, t._)`${I}[${g}] = ${S}`);
        });
      }
      function _(S, h) {
        const g = (0, r.useFunc)(i, n.default), E = i.name("outer");
        i.label(E).for((0, t._)`;${S}--;`, () => i.for((0, t._)`${h} = ${S}; ${h}--;`, () => i.if((0, t._)`${g}(${c}[${S}], ${c}[${h}])`, () => {
          a.error(), i.assign(w, !1).break(E);
        })));
      }
    }
  };
  return Xr.default = s, Xr;
}
var tn = {}, Di;
function Fg() {
  if (Di) return tn;
  Di = 1, Object.defineProperty(tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ wa(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schemaCode: d, schema: l } = s;
      c || l && typeof l == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(a, r.default)}(${i}, ${d})`) : s.fail((0, e._)`${l} !== ${i}`);
    }
  };
  return tn.default = o, tn;
}
var rn = {}, Ui;
function Zg() {
  if (Ui) return rn;
  Ui = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ wa(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: v } = s;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = d.length >= v.opts.loopEnum;
      let y;
      const w = () => y ?? (y = (0, t.useFunc)(a, r.default));
      let b;
      if ($ || c)
        b = a.let("valid"), s.block$data(b, f);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const u = a.const("vSchema", l);
        b = (0, e.or)(...d.map((_, S) => m(u, S)));
      }
      s.pass(b);
      function f() {
        a.assign(b, !1), a.forOf("v", l, (u) => a.if((0, e._)`${w()}(${i}, ${u})`, () => a.assign(b, !0).break()));
      }
      function m(u, _) {
        const S = d[_];
        return typeof S == "object" && S !== null ? (0, e._)`${w()}(${i}, ${u}[${_}])` : (0, e._)`${i} === ${S}`;
      }
    }
  };
  return rn.default = o, rn;
}
var Vi;
function Hg() {
  if (Vi) return Hr;
  Vi = 1, Object.defineProperty(Hr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jg(), t = /* @__PURE__ */ qg(), r = /* @__PURE__ */ Mg(), n = /* @__PURE__ */ Ag(), o = /* @__PURE__ */ Dg(), s = /* @__PURE__ */ Ug(), a = /* @__PURE__ */ Vg(), i = /* @__PURE__ */ Lg(), c = /* @__PURE__ */ Fg(), d = /* @__PURE__ */ Zg(), l = [
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
    d.default
  ];
  return Hr.default = l, Hr;
}
var nn = {}, Ht = {}, Li;
function Bl() {
  if (Li) return Ht;
  Li = 1, Object.defineProperty(Ht, "__esModule", { value: !0 }), Ht.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = {
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
    const { gen: i, schema: c, data: d, keyword: l, it: v } = s;
    v.items = !0;
    const $ = i.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      s.setParams({ len: a.length }), s.pass((0, e._)`${$} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(v, c)) {
      const w = i.var("valid", (0, e._)`${$} <= ${a.length}`);
      i.if((0, e.not)(w), () => y(w)), s.ok(w);
    }
    function y(w) {
      i.forRange("i", a.length, $, (b) => {
        s.subschema({ keyword: l, dataProp: b, dataPropType: t.Type.Num }, w), v.allErrors || i.if((0, e.not)(w), () => i.break());
      });
    }
  }
  return Ht.validateAdditionalItems = o, Ht.default = n, Ht;
}
var on = {}, Kt = {}, Fi;
function Ql() {
  if (Fi) return Kt;
  Fi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.validateTuple = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ lt(), n = {
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
    const { gen: c, parentSchema: d, data: l, keyword: v, it: $ } = s;
    b(d), $.opts.unevaluated && i.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(c, i.length, $.items));
    const y = c.name("valid"), w = c.const("len", (0, e._)`${l}.length`);
    i.forEach((f, m) => {
      (0, t.alwaysValidSchema)($, f) || (c.if((0, e._)`${w} > ${m}`, () => s.subschema({
        keyword: v,
        schemaProp: m,
        dataProp: m
      }, y)), s.ok(y));
    });
    function b(f) {
      const { opts: m, errSchemaPath: u } = $, _ = i.length, S = _ === f.minItems && (_ === f.maxItems || f[a] === !1);
      if (m.strictTuples && !S) {
        const h = `"${v}" is ${_}-tuple, but minItems or maxItems/${a} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, h, m.strictTuples);
      }
    }
  }
  return Kt.validateTuple = o, Kt.default = n, Kt;
}
var Zi;
function Kg() {
  if (Zi) return on;
  Zi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ql(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return on.default = t, on;
}
var sn = {}, Hi;
function xg() {
  if (Hi) return sn;
  Hi = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ lt(), n = /* @__PURE__ */ Bl(), s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: i, parentSchema: c, it: d } = a, { prefixItems: l } = c;
      d.items = !0, !(0, t.alwaysValidSchema)(d, i) && (l ? (0, n.validateAdditionalItems)(a, l) : a.ok((0, r.validateArray)(a)));
    }
  };
  return sn.default = s, sn;
}
var an = {}, Ki;
function Jg() {
  if (Ki) return an;
  Ki = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = {
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
      const { gen: s, schema: a, parentSchema: i, data: c, it: d } = o;
      let l, v;
      const { minContains: $, maxContains: y } = i;
      d.opts.next ? (l = $ === void 0 ? 1 : $, v = y) : l = 1;
      const w = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: l, max: v }), v === void 0 && l === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (v !== void 0 && l > v) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, a)) {
        let _ = (0, e._)`${w} >= ${l}`;
        v !== void 0 && (_ = (0, e._)`${_} && ${w} <= ${v}`), o.pass(_);
        return;
      }
      d.items = !0;
      const b = s.name("valid");
      v === void 0 && l === 1 ? m(b, () => s.if(b, () => s.break())) : l === 0 ? (s.let(b, !0), v !== void 0 && s.if((0, e._)`${c}.length > 0`, f)) : (s.let(b, !1), f()), o.result(b, () => o.reset());
      function f() {
        const _ = s.name("_valid"), S = s.let("count", 0);
        m(_, () => s.if(_, () => u(S)));
      }
      function m(_, S) {
        s.forRange("i", 0, w, (h) => {
          o.subschema({
            keyword: "contains",
            dataProp: h,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, _), S();
        });
      }
      function u(_) {
        s.code((0, e._)`${_}++`), v === void 0 ? s.if((0, e._)`${_} >= ${l}`, () => s.assign(b, !0).break()) : (s.if((0, e._)`${_} > ${v}`, () => s.assign(b, !1).break()), l === 1 ? s.assign(b, !0) : s.if((0, e._)`${_} >= ${l}`, () => s.assign(b, !0)));
      }
    }
  };
  return an.default = n, an;
}
var ss = {}, xi;
function Gg() {
  return xi || (xi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ lt();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: l } }) => {
        const v = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${v} ${l} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: l, missingProperty: v } }) => (0, t._)`{property: ${c},
    missingProperty: ${v},
    depsCount: ${d},
    deps: ${l}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [d, l] = s(c);
        a(c, d), i(c, l);
      }
    };
    function s({ schema: c }) {
      const d = {}, l = {};
      for (const v in c) {
        if (v === "__proto__")
          continue;
        const $ = Array.isArray(c[v]) ? d : l;
        $[v] = c[v];
      }
      return [d, l];
    }
    function a(c, d = c.schema) {
      const { gen: l, data: v, it: $ } = c;
      if (Object.keys(d).length === 0)
        return;
      const y = l.let("missing");
      for (const w in d) {
        const b = d[w];
        if (b.length === 0)
          continue;
        const f = (0, n.propertyInData)(l, v, w, $.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: b.length,
          deps: b.join(", ")
        }), $.allErrors ? l.if(f, () => {
          for (const m of b)
            (0, n.checkReportMissingProp)(c, m);
        }) : (l.if((0, t._)`${f} && (${(0, n.checkMissingProp)(c, b, y)})`), (0, n.reportMissingProp)(c, y), l.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, d = c.schema) {
      const { gen: l, data: v, keyword: $, it: y } = c, w = l.name("valid");
      for (const b in d)
        (0, r.alwaysValidSchema)(y, d[b]) || (l.if(
          (0, n.propertyInData)(l, v, b, y.opts.ownProperties),
          () => {
            const f = c.subschema({ keyword: $, schemaProp: b }, w);
            c.mergeValidEvaluated(f, w);
          },
          () => l.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = i, e.default = o;
  }(ss)), ss;
}
var cn = {}, Ji;
function Wg() {
  if (Ji) return cn;
  Ji = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = {
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
      const d = s.name("valid");
      s.forIn("key", i, (l) => {
        o.setParams({ propertyName: l }), o.subschema({
          keyword: "propertyNames",
          data: l,
          dataTypes: ["string"],
          propertyName: l,
          compositeRule: !0
        }, d), s.if((0, e.not)(d), () => {
          o.error(!0), c.allErrors || s.break();
        });
      }), o.ok(d);
    }
  };
  return cn.default = n, cn;
}
var un = {}, Gi;
function Yl() {
  if (Gi) return un;
  Gi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Rt(), n = /* @__PURE__ */ de(), s = {
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
      const { gen: i, schema: c, parentSchema: d, data: l, errsCount: v, it: $ } = a;
      if (!v)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: w } = $;
      if ($.props = !0, w.removeAdditional !== "all" && (0, n.alwaysValidSchema)($, c))
        return;
      const b = (0, e.allSchemaProperties)(d.properties), f = (0, e.allSchemaProperties)(d.patternProperties);
      m(), a.ok((0, t._)`${v} === ${r.default.errors}`);
      function m() {
        i.forIn("key", l, (g) => {
          !b.length && !f.length ? S(g) : i.if(u(g), () => S(g));
        });
      }
      function u(g) {
        let E;
        if (b.length > 8) {
          const I = (0, n.schemaRefOrVal)($, d.properties, "properties");
          E = (0, e.isOwnProperty)(i, I, g);
        } else b.length ? E = (0, t.or)(...b.map((I) => (0, t._)`${g} === ${I}`)) : E = t.nil;
        return f.length && (E = (0, t.or)(E, ...f.map((I) => (0, t._)`${(0, e.usePattern)(a, I)}.test(${g})`))), (0, t.not)(E);
      }
      function _(g) {
        i.code((0, t._)`delete ${l}[${g}]`);
      }
      function S(g) {
        if (w.removeAdditional === "all" || w.removeAdditional && c === !1) {
          _(g);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: g }), a.error(), y || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)($, c)) {
          const E = i.name("valid");
          w.removeAdditional === "failing" ? (h(g, E, !1), i.if((0, t.not)(E), () => {
            a.reset(), _(g);
          })) : (h(g, E), y || i.if((0, t.not)(E), () => i.break()));
        }
      }
      function h(g, E, I) {
        const z = {
          keyword: "additionalProperties",
          dataProp: g,
          dataPropType: n.Type.Str
        };
        I === !1 && Object.assign(z, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(z, E);
      }
    }
  };
  return un.default = s, un;
}
var ln = {}, Wi;
function Bg() {
  if (Wi) return ln;
  Wi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uo(), t = /* @__PURE__ */ lt(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ Yl(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, parentSchema: c, data: d, it: l } = s;
      l.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(l, n.default, "additionalProperties"));
      const v = (0, t.allSchemaProperties)(i);
      for (const f of v)
        l.definedProperties.add(f);
      l.opts.unevaluated && v.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(v), l.props));
      const $ = v.filter((f) => !(0, r.alwaysValidSchema)(l, i[f]));
      if ($.length === 0)
        return;
      const y = a.name("valid");
      for (const f of $)
        w(f) ? b(f) : (a.if((0, t.propertyInData)(a, d, f, l.opts.ownProperties)), b(f), l.allErrors || a.else().var(y, !0), a.endIf()), s.it.definedProperties.add(f), s.ok(y);
      function w(f) {
        return l.opts.useDefaults && !l.compositeRule && i[f].default !== void 0;
      }
      function b(f) {
        s.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, y);
      }
    }
  };
  return ln.default = o, ln;
}
var dn = {}, Bi;
function Qg() {
  if (Bi) return dn;
  Bi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lt(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ de(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: d, it: l } = s, { opts: v } = l, $ = (0, e.allSchemaProperties)(i), y = $.filter((S) => (0, r.alwaysValidSchema)(l, i[S]));
      if ($.length === 0 || y.length === $.length && (!l.opts.unevaluated || l.props === !0))
        return;
      const w = v.strictSchema && !v.allowMatchingProperties && d.properties, b = a.name("valid");
      l.props !== !0 && !(l.props instanceof t.Name) && (l.props = (0, n.evaluatedPropsToName)(a, l.props));
      const { props: f } = l;
      m();
      function m() {
        for (const S of $)
          w && u(S), l.allErrors ? _(S) : (a.var(b, !0), _(S), a.if(b));
      }
      function u(S) {
        for (const h in w)
          new RegExp(S).test(h) && (0, r.checkStrictMode)(l, `property ${h} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function _(S) {
        a.forIn("key", c, (h) => {
          a.if((0, t._)`${(0, e.usePattern)(s, S)}.test(${h})`, () => {
            const g = y.includes(S);
            g || s.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: h,
              dataPropType: n.Type.Str
            }, b), l.opts.unevaluated && f !== !0 ? a.assign((0, t._)`${f}[${h}]`, !0) : !g && !l.allErrors && a.if((0, t.not)(b), () => a.break());
          });
        });
      }
    }
  };
  return dn.default = o, dn;
}
var fn = {}, Qi;
function Yg() {
  if (Qi) return fn;
  Qi = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
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
  return fn.default = t, fn;
}
var hn = {}, Yi;
function Xg() {
  if (Yi) return hn;
  Yi = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ lt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return hn.default = t, hn;
}
var pn = {}, Xi;
function ev() {
  if (Xi) return pn;
  Xi = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = {
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
      const d = a, l = s.let("valid", !1), v = s.let("passing", null), $ = s.name("_valid");
      o.setParams({ passing: v }), s.block(y), o.result(l, () => o.reset(), () => o.error(!0));
      function y() {
        d.forEach((w, b) => {
          let f;
          (0, t.alwaysValidSchema)(c, w) ? s.var($, !0) : f = o.subschema({
            keyword: "oneOf",
            schemaProp: b,
            compositeRule: !0
          }, $), b > 0 && s.if((0, e._)`${$} && ${l}`).assign(l, !1).assign(v, (0, e._)`[${v}, ${b}]`).else(), s.if($, () => {
            s.assign(l, !0), s.assign(v, b), f && o.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return pn.default = n, pn;
}
var mn = {}, ec;
function tv() {
  if (ec) return mn;
  ec = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
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
        const d = r.subschema({ keyword: "allOf", schemaProp: c }, a);
        r.ok(a), r.mergeEvaluated(d);
      });
    }
  };
  return mn.default = t, mn;
}
var _n = {}, tc;
function rv() {
  if (tc) return _n;
  tc = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), n = {
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
      const d = o(c, "then"), l = o(c, "else");
      if (!d && !l)
        return;
      const v = a.let("valid", !0), $ = a.name("_valid");
      if (y(), s.reset(), d && l) {
        const b = a.let("ifClause");
        s.setParams({ ifClause: b }), a.if($, w("then", b), w("else", b));
      } else d ? a.if($, w("then")) : a.if((0, e.not)($), w("else"));
      s.pass(v, () => s.error(!0));
      function y() {
        const b = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        s.mergeEvaluated(b);
      }
      function w(b, f) {
        return () => {
          const m = s.subschema({ keyword: b }, $);
          a.assign(v, $), s.mergeValidEvaluated(m, v), f ? a.assign(f, (0, e._)`${b}`) : s.setParams({ ifClause: b });
        };
      }
    }
  };
  function o(s, a) {
    const i = s.schema[a];
    return i !== void 0 && !(0, t.alwaysValidSchema)(s, i);
  }
  return _n.default = n, _n;
}
var yn = {}, rc;
function nv() {
  if (rc) return yn;
  rc = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ de(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: n, it: o }) {
      n.if === void 0 && (0, e.checkStrictMode)(o, `"${r}" without "if" is ignored`);
    }
  };
  return yn.default = t, yn;
}
var nc;
function ov() {
  if (nc) return nn;
  nc = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bl(), t = /* @__PURE__ */ Kg(), r = /* @__PURE__ */ Ql(), n = /* @__PURE__ */ xg(), o = /* @__PURE__ */ Jg(), s = /* @__PURE__ */ Gg(), a = /* @__PURE__ */ Wg(), i = /* @__PURE__ */ Yl(), c = /* @__PURE__ */ Bg(), d = /* @__PURE__ */ Qg(), l = /* @__PURE__ */ Yg(), v = /* @__PURE__ */ Xg(), $ = /* @__PURE__ */ ev(), y = /* @__PURE__ */ tv(), w = /* @__PURE__ */ rv(), b = /* @__PURE__ */ nv();
  function f(m = !1) {
    const u = [
      // any
      l.default,
      v.default,
      $.default,
      y.default,
      w.default,
      b.default,
      // object
      a.default,
      i.default,
      s.default,
      c.default,
      d.default
    ];
    return m ? u.push(t.default, n.default) : u.push(e.default, r.default), u.push(o.default), u;
  }
  return nn.default = f, nn;
}
var gn = {}, vn = {}, oc;
function sv() {
  if (oc) return vn;
  oc = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, o) {
      const { gen: s, data: a, $data: i, schema: c, schemaCode: d, it: l } = n, { opts: v, errSchemaPath: $, schemaEnv: y, self: w } = l;
      if (!v.validateFormats)
        return;
      i ? b() : f();
      function b() {
        const m = s.scopeValue("formats", {
          ref: w.formats,
          code: v.code.formats
        }), u = s.const("fDef", (0, e._)`${m}[${d}]`), _ = s.let("fType"), S = s.let("format");
        s.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => s.assign(_, (0, e._)`${u}.type || "string"`).assign(S, (0, e._)`${u}.validate`), () => s.assign(_, (0, e._)`"string"`).assign(S, u)), n.fail$data((0, e.or)(h(), g()));
        function h() {
          return v.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${S}`;
        }
        function g() {
          const E = y.$async ? (0, e._)`(${u}.async ? await ${S}(${a}) : ${S}(${a}))` : (0, e._)`${S}(${a})`, I = (0, e._)`(typeof ${S} == "function" ? ${E} : ${S}.test(${a}))`;
          return (0, e._)`${S} && ${S} !== true && ${_} === ${o} && !${I}`;
        }
      }
      function f() {
        const m = w.formats[c];
        if (!m) {
          h();
          return;
        }
        if (m === !0)
          return;
        const [u, _, S] = g(m);
        u === o && n.pass(E());
        function h() {
          if (v.strictSchema === !1) {
            w.logger.warn(I());
            return;
          }
          throw new Error(I());
          function I() {
            return `unknown format "${c}" ignored in schema at path "${$}"`;
          }
        }
        function g(I) {
          const z = I instanceof RegExp ? (0, e.regexpCode)(I) : v.code.formats ? (0, e._)`${v.code.formats}${(0, e.getProperty)(c)}` : void 0, U = s.scopeValue("formats", { key: c, ref: I, code: z });
          return typeof I == "object" && !(I instanceof RegExp) ? [I.type || "string", I.validate, (0, e._)`${U}.validate`] : ["string", I, U];
        }
        function E() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${a})`;
          }
          return typeof _ == "function" ? (0, e._)`${S}(${a})` : (0, e._)`${S}.test(${a})`;
        }
      }
    }
  };
  return vn.default = r, vn;
}
var sc;
function av() {
  if (sc) return gn;
  sc = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ sv()).default];
  return gn.default = t, gn;
}
var Mt = {}, ac;
function iv() {
  return ac || (ac = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.contentVocabulary = Mt.metadataVocabulary = void 0, Mt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Mt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Mt;
}
var ic;
function cv() {
  if (ic) return Lr;
  ic = 1, Object.defineProperty(Lr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ng(), t = /* @__PURE__ */ Hg(), r = /* @__PURE__ */ ov(), n = /* @__PURE__ */ av(), o = /* @__PURE__ */ iv(), s = [
    e.default,
    t.default,
    (0, r.default)(),
    n.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return Lr.default = s, Lr;
}
var $n = {}, pr = {}, cc;
function uv() {
  if (cc) return pr;
  cc = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (pr.DiscrError = e = {})), pr;
}
var uc;
function lv() {
  if (uc) return $n;
  uc = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ uv(), r = /* @__PURE__ */ $a(), n = /* @__PURE__ */ Vo(), o = /* @__PURE__ */ de(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: d } }) => (0, e._)`{error: ${i}, tag: ${d}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: d, schema: l, parentSchema: v, it: $ } = i, { oneOf: y } = v;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = l.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (l.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const b = c.let("valid", !1), f = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${f} == "string"`, () => m(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: w })), i.ok(b);
      function m() {
        const S = _();
        c.if(!1);
        for (const h in S)
          c.elseIf((0, e._)`${f} === ${h}`), c.assign(b, u(S[h]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: w }), c.endIf();
      }
      function u(S) {
        const h = c.name("valid"), g = i.subschema({ keyword: "oneOf", schemaProp: S }, h);
        return i.mergeEvaluated(g, e.Name), h;
      }
      function _() {
        var S;
        const h = {}, g = I(v);
        let E = !0;
        for (let A = 0; A < y.length; A++) {
          let L = y[A];
          if (L != null && L.$ref && !(0, o.schemaHasRulesButRef)(L, $.self.RULES)) {
            const x = L.$ref;
            if (L = r.resolveRef.call($.self, $.schemaEnv.root, $.baseId, x), L instanceof r.SchemaEnv && (L = L.schema), L === void 0)
              throw new n.default($.opts.uriResolver, $.baseId, x);
          }
          const Z = (S = L == null ? void 0 : L.properties) === null || S === void 0 ? void 0 : S[w];
          if (typeof Z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          E = E && (g || I(L)), z(Z, A);
        }
        if (!E)
          throw new Error(`discriminator: "${w}" must be required`);
        return h;
        function I({ required: A }) {
          return Array.isArray(A) && A.includes(w);
        }
        function z(A, L) {
          if (A.const)
            U(A.const, L);
          else if (A.enum)
            for (const Z of A.enum)
              U(Z, L);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function U(A, L) {
          if (typeof A != "string" || A in h)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          h[A] = L;
        }
      }
    }
  };
  return $n.default = a, $n;
}
const dv = "http://json-schema.org/draft-07/schema#", fv = "http://json-schema.org/draft-07/schema#", hv = "Core schema meta-schema", pv = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, mv = ["object", "boolean"], _v = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, yv = {
  $schema: dv,
  $id: fv,
  title: hv,
  definitions: pv,
  type: mv,
  properties: _v,
  default: !0
};
var lc;
function gv() {
  return lc || (lc = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = /* @__PURE__ */ Og(), n = /* @__PURE__ */ cv(), o = /* @__PURE__ */ lv(), s = yv, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
    class c extends r.default {
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const w = this.opts.$data ? this.$dataMetaSchema(s, a) : s;
        this.addMetaSchema(w, i, !1), this.refs["http://json-schema.org/schema"] = i;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var d = /* @__PURE__ */ Uo();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var l = /* @__PURE__ */ ce();
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
    var v = /* @__PURE__ */ va();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return v.default;
    } });
    var $ = /* @__PURE__ */ Vo();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  }(Mr, Mr.exports)), Mr.exports;
}
var vv = /* @__PURE__ */ gv();
const $v = /* @__PURE__ */ Iu(vv);
var wn = { exports: {} }, as = {}, dc;
function wv() {
  return dc || (dc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(A, L) {
      return { validate: A, compare: L };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(s, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), d),
      "date-time": t($(!0), y),
      "iso-time": t(c(), l),
      "iso-date-time": t($(), w),
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
      regex: U,
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
      int32: { type: "number", validate: g },
      // signed 64 bit integer
      int64: { type: "number", validate: E },
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
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, y),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, l),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, w),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function r(A) {
      return A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0);
    }
    const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function s(A) {
      const L = n.exec(A);
      if (!L)
        return !1;
      const Z = +L[1], x = +L[2], te = +L[3];
      return x >= 1 && x <= 12 && te >= 1 && te <= (x === 2 && r(Z) ? 29 : o[x]);
    }
    function a(A, L) {
      if (A && L)
        return A > L ? 1 : A < L ? -1 : 0;
    }
    const i = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(A) {
      return function(Z) {
        const x = i.exec(Z);
        if (!x)
          return !1;
        const te = +x[1], _e = +x[2], we = +x[3], ee = x[4], je = x[5] === "-" ? -1 : 1, M = +(x[6] || 0), R = +(x[7] || 0);
        if (M > 23 || R > 59 || A && !ee)
          return !1;
        if (te <= 23 && _e <= 59 && we < 60)
          return !0;
        const j = _e - R * je, T = te - M * je - (j < 0 ? 1 : 0);
        return (T === 23 || T === -1) && (j === 59 || j === -1) && we < 61;
      };
    }
    function d(A, L) {
      if (!(A && L))
        return;
      const Z = (/* @__PURE__ */ new Date("2020-01-01T" + A)).valueOf(), x = (/* @__PURE__ */ new Date("2020-01-01T" + L)).valueOf();
      if (Z && x)
        return Z - x;
    }
    function l(A, L) {
      if (!(A && L))
        return;
      const Z = i.exec(A), x = i.exec(L);
      if (Z && x)
        return A = Z[1] + Z[2] + Z[3], L = x[1] + x[2] + x[3], A > L ? 1 : A < L ? -1 : 0;
    }
    const v = /t|\s/i;
    function $(A) {
      const L = c(A);
      return function(x) {
        const te = x.split(v);
        return te.length === 2 && s(te[0]) && L(te[1]);
      };
    }
    function y(A, L) {
      if (!(A && L))
        return;
      const Z = new Date(A).valueOf(), x = new Date(L).valueOf();
      if (Z && x)
        return Z - x;
    }
    function w(A, L) {
      if (!(A && L))
        return;
      const [Z, x] = A.split(v), [te, _e] = L.split(v), we = a(Z, te);
      if (we !== void 0)
        return we || d(x, _e);
    }
    const b = /\/|:/, f = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function m(A) {
      return b.test(A) && f.test(A);
    }
    const u = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function _(A) {
      return u.lastIndex = 0, u.test(A);
    }
    const S = -2147483648, h = 2 ** 31 - 1;
    function g(A) {
      return Number.isInteger(A) && A <= h && A >= S;
    }
    function E(A) {
      return Number.isInteger(A);
    }
    function I() {
      return !0;
    }
    const z = /[^\\]\\Z/;
    function U(A) {
      if (z.test(A))
        return !1;
      try {
        return new RegExp(A), !0;
      } catch {
        return !1;
      }
    }
  }(as)), as;
}
var is = {}, bn = { exports: {} }, cs = {}, _t = {}, At = {}, us = {}, ls = {}, ds = {}, fc;
function go() {
  return fc || (fc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(u) {
        if (super(), !e.IDENTIFIER.test(u))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = u;
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
      constructor(u) {
        super(), this._items = typeof u == "string" ? [u] : u;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const u = this._items[0];
        return u === "" || u === '""';
      }
      get str() {
        var u;
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((_, S) => `${_}${S}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((_, S) => (S instanceof r && (_[S.str] = (_[S.str] || 0) + 1), _), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(m, ...u) {
      const _ = [m[0]];
      let S = 0;
      for (; S < u.length; )
        i(_, u[S]), _.push(m[++S]);
      return new n(_);
    }
    e._ = o;
    const s = new n("+");
    function a(m, ...u) {
      const _ = [y(m[0])];
      let S = 0;
      for (; S < u.length; )
        _.push(s), i(_, u[S]), _.push(s, y(m[++S]));
      return c(_), new n(_);
    }
    e.str = a;
    function i(m, u) {
      u instanceof n ? m.push(...u._items) : u instanceof r ? m.push(u) : m.push(v(u));
    }
    e.addCodeArg = i;
    function c(m) {
      let u = 1;
      for (; u < m.length - 1; ) {
        if (m[u] === s) {
          const _ = d(m[u - 1], m[u + 1]);
          if (_ !== void 0) {
            m.splice(u - 1, 3, _);
            continue;
          }
          m[u++] = "+";
        }
        u++;
      }
    }
    function d(m, u) {
      if (u === '""')
        return m;
      if (m === '""')
        return u;
      if (typeof m == "string")
        return u instanceof r || m[m.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${m.slice(0, -1)}${u}"` : u[0] === '"' ? m.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(m instanceof r))
        return `"${m}${u.slice(1)}`;
    }
    function l(m, u) {
      return u.emptyStr() ? m : m.emptyStr() ? u : a`${m}${u}`;
    }
    e.strConcat = l;
    function v(m) {
      return typeof m == "number" || typeof m == "boolean" || m === null ? m : y(Array.isArray(m) ? m.join(",") : m);
    }
    function $(m) {
      return new n(y(m));
    }
    e.stringify = $;
    function y(m) {
      return JSON.stringify(m).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = y;
    function w(m) {
      return typeof m == "string" && e.IDENTIFIER.test(m) ? new n(`.${m}`) : o`[${m}]`;
    }
    e.getProperty = w;
    function b(m) {
      if (typeof m == "string" && e.IDENTIFIER.test(m))
        return new n(`${m}`);
      throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function f(m) {
      return new n(m.toString());
    }
    e.regexpCode = f;
  }(ds)), ds;
}
var fs = {}, hc;
function pc() {
  return hc || (hc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ go();
    class r extends Error {
      constructor(d) {
        super(`CodeGen: "code" for ${d} not defined`), this.value = d.value;
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
      constructor({ prefixes: d, parent: l } = {}) {
        this._names = {}, this._prefixes = d, this._parent = l;
      }
      toName(d) {
        return d instanceof t.Name ? d : this.name(d);
      }
      name(d) {
        return new t.Name(this._newName(d));
      }
      _newName(d) {
        const l = this._names[d] || this._nameGroup(d);
        return `${d}${l.index++}`;
      }
      _nameGroup(d) {
        var l, v;
        if (!((v = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || v === void 0) && v.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(d, l) {
        super(l), this.prefix = d;
      }
      setValue(d, { property: l, itemIndex: v }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(l)}[${v}]`;
      }
    }
    e.ValueScopeName = s;
    const a = (0, t._)`\n`;
    class i extends o {
      constructor(d) {
        super(d), this._values = {}, this._scope = d.scope, this.opts = { ...d, _n: d.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(d) {
        return new s(d, this._newName(d));
      }
      value(d, l) {
        var v;
        if (l.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(d), { prefix: y } = $, w = (v = l.key) !== null && v !== void 0 ? v : l.ref;
        let b = this._values[y];
        if (b) {
          const u = b.get(w);
          if (u)
            return u;
        } else
          b = this._values[y] = /* @__PURE__ */ new Map();
        b.set(w, $);
        const f = this._scope[y] || (this._scope[y] = []), m = f.length;
        return f[m] = l.ref, $.setValue(l, { property: y, itemIndex: m }), $;
      }
      getValue(d, l) {
        const v = this._values[d];
        if (v)
          return v.get(l);
      }
      scopeRefs(d, l = this._values) {
        return this._reduceValues(l, (v) => {
          if (v.scopePath === void 0)
            throw new Error(`CodeGen: name "${v}" has no value`);
          return (0, t._)`${d}${v.scopePath}`;
        });
      }
      scopeCode(d = this._values, l, v) {
        return this._reduceValues(d, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, l, v);
      }
      _reduceValues(d, l, v = {}, $) {
        let y = t.nil;
        for (const w in d) {
          const b = d[w];
          if (!b)
            continue;
          const f = v[w] = v[w] || /* @__PURE__ */ new Map();
          b.forEach((m) => {
            if (f.has(m))
              return;
            f.set(m, n.Started);
            let u = l(m);
            if (u) {
              const _ = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              y = (0, t._)`${y}${_} ${m} = ${u};${this.opts._n}`;
            } else if (u = $ == null ? void 0 : $(m))
              y = (0, t._)`${y}${u}${this.opts._n}`;
            else
              throw new r(m);
            f.set(m, n.Completed);
          });
        }
        return y;
      }
    }
    e.ValueScope = i;
  }(fs)), fs;
}
var mc;
function ae() {
  return mc || (mc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ go(), r = /* @__PURE__ */ pc();
    var n = /* @__PURE__ */ go();
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
    var o = /* @__PURE__ */ pc();
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
      optimizeNames(p, k) {
        return this;
      }
    }
    class a extends s {
      constructor(p, k, C) {
        super(), this.varKind = p, this.name = k, this.rhs = C;
      }
      render({ es5: p, _n: k }) {
        const C = p ? r.varKinds.var : this.varKind, F = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${C} ${this.name}${F};` + k;
      }
      optimizeNames(p, k) {
        if (p[this.name.str])
          return this.rhs && (this.rhs = x(this.rhs, p, k)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor(p, k, C) {
        super(), this.lhs = p, this.rhs = k, this.sideEffects = C;
      }
      render({ _n: p }) {
        return `${this.lhs} = ${this.rhs};` + p;
      }
      optimizeNames(p, k) {
        if (!(this.lhs instanceof t.Name && !p[this.lhs.str] && !this.sideEffects))
          return this.rhs = x(this.rhs, p, k), this;
      }
      get names() {
        const p = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return Z(p, this.rhs);
      }
    }
    class c extends i {
      constructor(p, k, C, F) {
        super(p, C, F), this.op = k;
      }
      render({ _n: p }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + p;
      }
    }
    class d extends s {
      constructor(p) {
        super(), this.label = p, this.names = {};
      }
      render({ _n: p }) {
        return `${this.label}:` + p;
      }
    }
    class l extends s {
      constructor(p) {
        super(), this.label = p, this.names = {};
      }
      render({ _n: p }) {
        return `break${this.label ? ` ${this.label}` : ""};` + p;
      }
    }
    class v extends s {
      constructor(p) {
        super(), this.error = p;
      }
      render({ _n: p }) {
        return `throw ${this.error};` + p;
      }
      get names() {
        return this.error.names;
      }
    }
    class $ extends s {
      constructor(p) {
        super(), this.code = p;
      }
      render({ _n: p }) {
        return `${this.code};` + p;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(p, k) {
        return this.code = x(this.code, p, k), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class y extends s {
      constructor(p = []) {
        super(), this.nodes = p;
      }
      render(p) {
        return this.nodes.reduce((k, C) => k + C.render(p), "");
      }
      optimizeNodes() {
        const { nodes: p } = this;
        let k = p.length;
        for (; k--; ) {
          const C = p[k].optimizeNodes();
          Array.isArray(C) ? p.splice(k, 1, ...C) : C ? p[k] = C : p.splice(k, 1);
        }
        return p.length > 0 ? this : void 0;
      }
      optimizeNames(p, k) {
        const { nodes: C } = this;
        let F = C.length;
        for (; F--; ) {
          const K = C[F];
          K.optimizeNames(p, k) || (te(p, K.names), C.splice(F, 1));
        }
        return C.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((p, k) => L(p, k.names), {});
      }
    }
    class w extends y {
      render(p) {
        return "{" + p._n + super.render(p) + "}" + p._n;
      }
    }
    class b extends y {
    }
    class f extends w {
    }
    f.kind = "else";
    class m extends w {
      constructor(p, k) {
        super(k), this.condition = p;
      }
      render(p) {
        let k = `if(${this.condition})` + super.render(p);
        return this.else && (k += "else " + this.else.render(p)), k;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const p = this.condition;
        if (p === !0)
          return this.nodes;
        let k = this.else;
        if (k) {
          const C = k.optimizeNodes();
          k = this.else = Array.isArray(C) ? new f(C) : C;
        }
        if (k)
          return p === !1 ? k instanceof m ? k : k.nodes : this.nodes.length ? this : new m(_e(p), k instanceof m ? [k] : k.nodes);
        if (!(p === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(p, k) {
        var C;
        if (this.else = (C = this.else) === null || C === void 0 ? void 0 : C.optimizeNames(p, k), !!(super.optimizeNames(p, k) || this.else))
          return this.condition = x(this.condition, p, k), this;
      }
      get names() {
        const p = super.names;
        return Z(p, this.condition), this.else && L(p, this.else.names), p;
      }
    }
    m.kind = "if";
    class u extends w {
    }
    u.kind = "for";
    class _ extends u {
      constructor(p) {
        super(), this.iteration = p;
      }
      render(p) {
        return `for(${this.iteration})` + super.render(p);
      }
      optimizeNames(p, k) {
        if (super.optimizeNames(p, k))
          return this.iteration = x(this.iteration, p, k), this;
      }
      get names() {
        return L(super.names, this.iteration.names);
      }
    }
    class S extends u {
      constructor(p, k, C, F) {
        super(), this.varKind = p, this.name = k, this.from = C, this.to = F;
      }
      render(p) {
        const k = p.es5 ? r.varKinds.var : this.varKind, { name: C, from: F, to: K } = this;
        return `for(${k} ${C}=${F}; ${C}<${K}; ${C}++)` + super.render(p);
      }
      get names() {
        const p = Z(super.names, this.from);
        return Z(p, this.to);
      }
    }
    class h extends u {
      constructor(p, k, C, F) {
        super(), this.loop = p, this.varKind = k, this.name = C, this.iterable = F;
      }
      render(p) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(p);
      }
      optimizeNames(p, k) {
        if (super.optimizeNames(p, k))
          return this.iterable = x(this.iterable, p, k), this;
      }
      get names() {
        return L(super.names, this.iterable.names);
      }
    }
    class g extends w {
      constructor(p, k, C) {
        super(), this.name = p, this.args = k, this.async = C;
      }
      render(p) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(p);
      }
    }
    g.kind = "func";
    class E extends y {
      render(p) {
        return "return " + super.render(p);
      }
    }
    E.kind = "return";
    class I extends w {
      render(p) {
        let k = "try" + super.render(p);
        return this.catch && (k += this.catch.render(p)), this.finally && (k += this.finally.render(p)), k;
      }
      optimizeNodes() {
        var p, k;
        return super.optimizeNodes(), (p = this.catch) === null || p === void 0 || p.optimizeNodes(), (k = this.finally) === null || k === void 0 || k.optimizeNodes(), this;
      }
      optimizeNames(p, k) {
        var C, F;
        return super.optimizeNames(p, k), (C = this.catch) === null || C === void 0 || C.optimizeNames(p, k), (F = this.finally) === null || F === void 0 || F.optimizeNames(p, k), this;
      }
      get names() {
        const p = super.names;
        return this.catch && L(p, this.catch.names), this.finally && L(p, this.finally.names), p;
      }
    }
    class z extends w {
      constructor(p) {
        super(), this.error = p;
      }
      render(p) {
        return `catch(${this.error})` + super.render(p);
      }
    }
    z.kind = "catch";
    class U extends w {
      render(p) {
        return "finally" + super.render(p);
      }
    }
    U.kind = "finally";
    class A {
      constructor(p, k = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...k, _n: k.lines ? `
` : "" }, this._extScope = p, this._scope = new r.Scope({ parent: p }), this._nodes = [new b()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(p) {
        return this._scope.name(p);
      }
      // reserves unique name in the external scope
      scopeName(p) {
        return this._extScope.name(p);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(p, k) {
        const C = this._extScope.value(p, k);
        return (this._values[C.prefix] || (this._values[C.prefix] = /* @__PURE__ */ new Set())).add(C), C;
      }
      getScopeValue(p, k) {
        return this._extScope.getValue(p, k);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(p) {
        return this._extScope.scopeRefs(p, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(p, k, C, F) {
        const K = this._scope.toName(k);
        return C !== void 0 && F && (this._constants[K.str] = C), this._leafNode(new a(p, K, C)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(p, k, C) {
        return this._def(r.varKinds.const, p, k, C);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(p, k, C) {
        return this._def(r.varKinds.let, p, k, C);
      }
      // `var` declaration with optional assignment
      var(p, k, C) {
        return this._def(r.varKinds.var, p, k, C);
      }
      // assignment code
      assign(p, k, C) {
        return this._leafNode(new i(p, k, C));
      }
      // `+=` code
      add(p, k) {
        return this._leafNode(new c(p, e.operators.ADD, k));
      }
      // appends passed SafeExpr to code or executes Block
      code(p) {
        return typeof p == "function" ? p() : p !== t.nil && this._leafNode(new $(p)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...p) {
        const k = ["{"];
        for (const [C, F] of p)
          k.length > 1 && k.push(","), k.push(C), (C !== F || this.opts.es5) && (k.push(":"), (0, t.addCodeArg)(k, F));
        return k.push("}"), new t._Code(k);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(p, k, C) {
        if (this._blockNode(new m(p)), k && C)
          this.code(k).else().code(C).endIf();
        else if (k)
          this.code(k).endIf();
        else if (C)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(p) {
        return this._elseNode(new m(p));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new f());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(m, f);
      }
      _for(p, k) {
        return this._blockNode(p), k && this.code(k).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(p, k) {
        return this._for(new _(p), k);
      }
      // `for` statement for a range of values
      forRange(p, k, C, F, K = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const Q = this._scope.toName(p);
        return this._for(new S(K, Q, k, C), () => F(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(p, k, C, F = r.varKinds.const) {
        const K = this._scope.toName(p);
        if (this.opts.es5) {
          const Q = k instanceof t.Name ? k : this.var("_arr", k);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (B) => {
            this.var(K, (0, t._)`${Q}[${B}]`), C(K);
          });
        }
        return this._for(new h("of", F, K, k), () => C(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(p, k, C, F = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(p, (0, t._)`Object.keys(${k})`, C);
        const K = this._scope.toName(p);
        return this._for(new h("in", F, K, k), () => C(K));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(p) {
        return this._leafNode(new d(p));
      }
      // `break` statement
      break(p) {
        return this._leafNode(new l(p));
      }
      // `return` statement
      return(p) {
        const k = new E();
        if (this._blockNode(k), this.code(p), k.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(E);
      }
      // `try` statement
      try(p, k, C) {
        if (!k && !C)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const F = new I();
        if (this._blockNode(F), this.code(p), k) {
          const K = this.name("e");
          this._currNode = F.catch = new z(K), k(K);
        }
        return C && (this._currNode = F.finally = new U(), this.code(C)), this._endBlockNode(z, U);
      }
      // `throw` statement
      throw(p) {
        return this._leafNode(new v(p));
      }
      // start self-balancing block
      block(p, k) {
        return this._blockStarts.push(this._nodes.length), p && this.code(p).endBlock(k), this;
      }
      // end the current self-balancing block
      endBlock(p) {
        const k = this._blockStarts.pop();
        if (k === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const C = this._nodes.length - k;
        if (C < 0 || p !== void 0 && C !== p)
          throw new Error(`CodeGen: wrong number of nodes: ${C} vs ${p} expected`);
        return this._nodes.length = k, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(p, k = t.nil, C, F) {
        return this._blockNode(new g(p, k, C)), F && this.code(F).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(g);
      }
      optimize(p = 1) {
        for (; p-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(p) {
        return this._currNode.nodes.push(p), this;
      }
      _blockNode(p) {
        this._currNode.nodes.push(p), this._nodes.push(p);
      }
      _endBlockNode(p, k) {
        const C = this._currNode;
        if (C instanceof p || k && C instanceof k)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${k ? `${p.kind}/${k.kind}` : p.kind}"`);
      }
      _elseNode(p) {
        const k = this._currNode;
        if (!(k instanceof m))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = k.else = p, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const p = this._nodes;
        return p[p.length - 1];
      }
      set _currNode(p) {
        const k = this._nodes;
        k[k.length - 1] = p;
      }
    }
    e.CodeGen = A;
    function L(T, p) {
      for (const k in p)
        T[k] = (T[k] || 0) + (p[k] || 0);
      return T;
    }
    function Z(T, p) {
      return p instanceof t._CodeOrName ? L(T, p.names) : T;
    }
    function x(T, p, k) {
      if (T instanceof t.Name)
        return C(T);
      if (!F(T))
        return T;
      return new t._Code(T._items.reduce((K, Q) => (Q instanceof t.Name && (Q = C(Q)), Q instanceof t._Code ? K.push(...Q._items) : K.push(Q), K), []));
      function C(K) {
        const Q = k[K.str];
        return Q === void 0 || p[K.str] !== 1 ? K : (delete p[K.str], Q);
      }
      function F(K) {
        return K instanceof t._Code && K._items.some((Q) => Q instanceof t.Name && p[Q.str] === 1 && k[Q.str] !== void 0);
      }
    }
    function te(T, p) {
      for (const k in p)
        T[k] = (T[k] || 0) - (p[k] || 0);
    }
    function _e(T) {
      return typeof T == "boolean" || typeof T == "number" || T === null ? !T : (0, t._)`!${j(T)}`;
    }
    e.not = _e;
    const we = R(e.operators.AND);
    function ee(...T) {
      return T.reduce(we);
    }
    e.and = ee;
    const je = R(e.operators.OR);
    function M(...T) {
      return T.reduce(je);
    }
    e.or = M;
    function R(T) {
      return (p, k) => p === t.nil ? k : k === t.nil ? p : (0, t._)`${j(p)} ${T} ${j(k)}`;
    }
    function j(T) {
      return T instanceof t.Name ? T : (0, t._)`(${T})`;
    }
  }(ls)), ls;
}
var se = {}, _c;
function fe() {
  if (_c) return se;
  _c = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ go();
  function r(h) {
    const g = {};
    for (const E of h)
      g[E] = !0;
    return g;
  }
  se.toHash = r;
  function n(h, g) {
    return typeof g == "boolean" ? g : Object.keys(g).length === 0 ? !0 : (o(h, g), !s(g, h.self.RULES.all));
  }
  se.alwaysValidSchema = n;
  function o(h, g = h.schema) {
    const { opts: E, self: I } = h;
    if (!E.strictSchema || typeof g == "boolean")
      return;
    const z = I.RULES.keywords;
    for (const U in g)
      z[U] || S(h, `unknown keyword: "${U}"`);
  }
  se.checkUnknownRules = o;
  function s(h, g) {
    if (typeof h == "boolean")
      return !h;
    for (const E in h)
      if (g[E])
        return !0;
    return !1;
  }
  se.schemaHasRules = s;
  function a(h, g) {
    if (typeof h == "boolean")
      return !h;
    for (const E in h)
      if (E !== "$ref" && g.all[E])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = a;
  function i({ topSchemaRef: h, schemaPath: g }, E, I, z) {
    if (!z) {
      if (typeof E == "number" || typeof E == "boolean")
        return E;
      if (typeof E == "string")
        return (0, e._)`${E}`;
    }
    return (0, e._)`${h}${g}${(0, e.getProperty)(I)}`;
  }
  se.schemaRefOrVal = i;
  function c(h) {
    return v(decodeURIComponent(h));
  }
  se.unescapeFragment = c;
  function d(h) {
    return encodeURIComponent(l(h));
  }
  se.escapeFragment = d;
  function l(h) {
    return typeof h == "number" ? `${h}` : h.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  se.escapeJsonPointer = l;
  function v(h) {
    return h.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = v;
  function $(h, g) {
    if (Array.isArray(h))
      for (const E of h)
        g(E);
    else
      g(h);
  }
  se.eachItem = $;
  function y({ mergeNames: h, mergeToName: g, mergeValues: E, resultToName: I }) {
    return (z, U, A, L) => {
      const Z = A === void 0 ? U : A instanceof e.Name ? (U instanceof e.Name ? h(z, U, A) : g(z, U, A), A) : U instanceof e.Name ? (g(z, A, U), U) : E(U, A);
      return L === e.Name && !(Z instanceof e.Name) ? I(z, Z) : Z;
    };
  }
  se.mergeEvaluated = {
    props: y({
      mergeNames: (h, g, E) => h.if((0, e._)`${E} !== true && ${g} !== undefined`, () => {
        h.if((0, e._)`${g} === true`, () => h.assign(E, !0), () => h.assign(E, (0, e._)`${E} || {}`).code((0, e._)`Object.assign(${E}, ${g})`));
      }),
      mergeToName: (h, g, E) => h.if((0, e._)`${E} !== true`, () => {
        g === !0 ? h.assign(E, !0) : (h.assign(E, (0, e._)`${E} || {}`), b(h, E, g));
      }),
      mergeValues: (h, g) => h === !0 ? !0 : { ...h, ...g },
      resultToName: w
    }),
    items: y({
      mergeNames: (h, g, E) => h.if((0, e._)`${E} !== true && ${g} !== undefined`, () => h.assign(E, (0, e._)`${g} === true ? true : ${E} > ${g} ? ${E} : ${g}`)),
      mergeToName: (h, g, E) => h.if((0, e._)`${E} !== true`, () => h.assign(E, g === !0 ? !0 : (0, e._)`${E} > ${g} ? ${E} : ${g}`)),
      mergeValues: (h, g) => h === !0 ? !0 : Math.max(h, g),
      resultToName: (h, g) => h.var("items", g)
    })
  };
  function w(h, g) {
    if (g === !0)
      return h.var("props", !0);
    const E = h.var("props", (0, e._)`{}`);
    return g !== void 0 && b(h, E, g), E;
  }
  se.evaluatedPropsToName = w;
  function b(h, g, E) {
    Object.keys(E).forEach((I) => h.assign((0, e._)`${g}${(0, e.getProperty)(I)}`, !0));
  }
  se.setEvaluated = b;
  const f = {};
  function m(h, g) {
    return h.scopeValue("func", {
      ref: g,
      code: f[g.code] || (f[g.code] = new t._Code(g.code))
    });
  }
  se.useFunc = m;
  var u;
  (function(h) {
    h[h.Num = 0] = "Num", h[h.Str = 1] = "Str";
  })(u || (se.Type = u = {}));
  function _(h, g, E) {
    if (h instanceof e.Name) {
      const I = g === u.Num;
      return E ? I ? (0, e._)`"[" + ${h} + "]"` : (0, e._)`"['" + ${h} + "']"` : I ? (0, e._)`"/" + ${h}` : (0, e._)`"/" + ${h}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return E ? (0, e.getProperty)(h).toString() : "/" + l(h);
  }
  se.getErrorPath = _;
  function S(h, g, E = h.opts.strictSchema) {
    if (E) {
      if (g = `strict mode: ${g}`, E === !0)
        throw new Error(g);
      h.self.logger.warn(g);
    }
  }
  return se.checkStrictMode = S, se;
}
var Sn = {}, yc;
function Ot() {
  if (yc) return Sn;
  yc = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = {
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
  return Sn.default = t, Sn;
}
var gc;
function Lo() {
  return gc || (gc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ Ot();
    e.keywordError = {
      message: ({ keyword: f }) => (0, t.str)`must pass "${f}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: f, schemaType: m }) => m ? (0, t.str)`"${f}" keyword must be ${m} ($data)` : (0, t.str)`"${f}" keyword is invalid ($data)`
    };
    function o(f, m = e.keywordError, u, _) {
      const { it: S } = f, { gen: h, compositeRule: g, allErrors: E } = S, I = v(f, m, u);
      _ ?? (g || E) ? c(h, I) : d(S, (0, t._)`[${I}]`);
    }
    e.reportError = o;
    function s(f, m = e.keywordError, u) {
      const { it: _ } = f, { gen: S, compositeRule: h, allErrors: g } = _, E = v(f, m, u);
      c(S, E), h || g || d(_, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(f, m) {
      f.assign(n.default.errors, m), f.if((0, t._)`${n.default.vErrors} !== null`, () => f.if(m, () => f.assign((0, t._)`${n.default.vErrors}.length`, m), () => f.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: f, keyword: m, schemaValue: u, data: _, errsCount: S, it: h }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const g = f.name("err");
      f.forRange("i", S, n.default.errors, (E) => {
        f.const(g, (0, t._)`${n.default.vErrors}[${E}]`), f.if((0, t._)`${g}.instancePath === undefined`, () => f.assign((0, t._)`${g}.instancePath`, (0, t.strConcat)(n.default.instancePath, h.errorPath))), f.assign((0, t._)`${g}.schemaPath`, (0, t.str)`${h.errSchemaPath}/${m}`), h.opts.verbose && (f.assign((0, t._)`${g}.schema`, u), f.assign((0, t._)`${g}.data`, _));
      });
    }
    e.extendErrors = i;
    function c(f, m) {
      const u = f.const("err", m);
      f.if((0, t._)`${n.default.vErrors} === null`, () => f.assign(n.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${n.default.vErrors}.push(${u})`), f.code((0, t._)`${n.default.errors}++`);
    }
    function d(f, m) {
      const { gen: u, validateName: _, schemaEnv: S } = f;
      S.$async ? u.throw((0, t._)`new ${f.ValidationError}(${m})`) : (u.assign((0, t._)`${_}.errors`, m), u.return(!1));
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
    function v(f, m, u) {
      const { createErrors: _ } = f.it;
      return _ === !1 ? (0, t._)`{}` : $(f, m, u);
    }
    function $(f, m, u = {}) {
      const { gen: _, it: S } = f, h = [
        y(S, u),
        w(f, u)
      ];
      return b(f, m, h), _.object(...h);
    }
    function y({ errorPath: f }, { instancePath: m }) {
      const u = m ? (0, t.str)`${f}${(0, r.getErrorPath)(m, r.Type.Str)}` : f;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, u)];
    }
    function w({ keyword: f, it: { errSchemaPath: m } }, { schemaPath: u, parentSchema: _ }) {
      let S = _ ? m : (0, t.str)`${m}/${f}`;
      return u && (S = (0, t.str)`${S}${(0, r.getErrorPath)(u, r.Type.Str)}`), [l.schemaPath, S];
    }
    function b(f, { params: m, message: u }, _) {
      const { keyword: S, data: h, schemaValue: g, it: E } = f, { opts: I, propertyName: z, topSchemaRef: U, schemaPath: A } = E;
      _.push([l.keyword, S], [l.params, typeof m == "function" ? m(f) : m || (0, t._)`{}`]), I.messages && _.push([l.message, typeof u == "function" ? u(f) : u]), I.verbose && _.push([l.schema, g], [l.parentSchema, (0, t._)`${U}${A}`], [n.default.data, h]), z && _.push([l.propertyName, z]);
    }
  }(us)), us;
}
var vc;
function bv() {
  if (vc) return At;
  vc = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.boolOrEmptySchema = At.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Lo(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Ot(), n = {
    message: "boolean schema is false"
  };
  function o(i) {
    const { gen: c, schema: d, validateName: l } = i;
    d === !1 ? a(i, !1) : typeof d == "object" && d.$async === !0 ? c.return(r.default.data) : (c.assign((0, t._)`${l}.errors`, null), c.return(!0));
  }
  At.topBoolOrEmptySchema = o;
  function s(i, c) {
    const { gen: d, schema: l } = i;
    l === !1 ? (d.var(c, !1), a(i)) : d.var(c, !0);
  }
  At.boolOrEmptySchema = s;
  function a(i, c) {
    const { gen: d, data: l } = i, v = {
      gen: d,
      keyword: "false schema",
      data: l,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(v, n, void 0, c);
  }
  return At;
}
var Ve = {}, Dt = {}, $c;
function Xl() {
  if ($c) return Dt;
  $c = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.getRules = Dt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(o) {
    return typeof o == "string" && t.has(o);
  }
  Dt.isJSONType = r;
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
  return Dt.getRules = n, Dt;
}
var yt = {}, wc;
function ed() {
  if (wc) return yt;
  wc = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.shouldUseRule = yt.shouldUseGroup = yt.schemaHasRulesForType = void 0;
  function e({ schema: n, self: o }, s) {
    const a = o.RULES.types[s];
    return a && a !== !0 && t(n, a);
  }
  yt.schemaHasRulesForType = e;
  function t(n, o) {
    return o.rules.some((s) => r(n, s));
  }
  yt.shouldUseGroup = t;
  function r(n, o) {
    var s;
    return n[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((a) => n[a] !== void 0));
  }
  return yt.shouldUseRule = r, yt;
}
var bc;
function vo() {
  if (bc) return Ve;
  bc = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.reportTypeError = Ve.checkDataTypes = Ve.checkDataType = Ve.coerceAndCheckDataType = Ve.getJSONTypes = Ve.getSchemaTypes = Ve.DataType = void 0;
  const e = /* @__PURE__ */ Xl(), t = /* @__PURE__ */ ed(), r = /* @__PURE__ */ Lo(), n = /* @__PURE__ */ ae(), o = /* @__PURE__ */ fe();
  var s;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(s || (Ve.DataType = s = {}));
  function a(u) {
    const _ = i(u.type);
    if (_.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!_.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && _.push("null");
    }
    return _;
  }
  Ve.getSchemaTypes = a;
  function i(u) {
    const _ = Array.isArray(u) ? u : u ? [u] : [];
    if (_.every(e.isJSONType))
      return _;
    throw new Error("type must be JSONType or JSONType[]: " + _.join(","));
  }
  Ve.getJSONTypes = i;
  function c(u, _) {
    const { gen: S, data: h, opts: g } = u, E = l(_, g.coerceTypes), I = _.length > 0 && !(E.length === 0 && _.length === 1 && (0, t.schemaHasRulesForType)(u, _[0]));
    if (I) {
      const z = w(_, h, g.strictNumbers, s.Wrong);
      S.if(z, () => {
        E.length ? v(u, _, E) : f(u);
      });
    }
    return I;
  }
  Ve.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function l(u, _) {
    return _ ? u.filter((S) => d.has(S) || _ === "array" && S === "array") : [];
  }
  function v(u, _, S) {
    const { gen: h, data: g, opts: E } = u, I = h.let("dataType", (0, n._)`typeof ${g}`), z = h.let("coerced", (0, n._)`undefined`);
    E.coerceTypes === "array" && h.if((0, n._)`${I} == 'object' && Array.isArray(${g}) && ${g}.length == 1`, () => h.assign(g, (0, n._)`${g}[0]`).assign(I, (0, n._)`typeof ${g}`).if(w(_, g, E.strictNumbers), () => h.assign(z, g))), h.if((0, n._)`${z} !== undefined`);
    for (const A of S)
      (d.has(A) || A === "array" && E.coerceTypes === "array") && U(A);
    h.else(), f(u), h.endIf(), h.if((0, n._)`${z} !== undefined`, () => {
      h.assign(g, z), $(u, z);
    });
    function U(A) {
      switch (A) {
        case "string":
          h.elseIf((0, n._)`${I} == "number" || ${I} == "boolean"`).assign(z, (0, n._)`"" + ${g}`).elseIf((0, n._)`${g} === null`).assign(z, (0, n._)`""`);
          return;
        case "number":
          h.elseIf((0, n._)`${I} == "boolean" || ${g} === null
              || (${I} == "string" && ${g} && ${g} == +${g})`).assign(z, (0, n._)`+${g}`);
          return;
        case "integer":
          h.elseIf((0, n._)`${I} === "boolean" || ${g} === null
              || (${I} === "string" && ${g} && ${g} == +${g} && !(${g} % 1))`).assign(z, (0, n._)`+${g}`);
          return;
        case "boolean":
          h.elseIf((0, n._)`${g} === "false" || ${g} === 0 || ${g} === null`).assign(z, !1).elseIf((0, n._)`${g} === "true" || ${g} === 1`).assign(z, !0);
          return;
        case "null":
          h.elseIf((0, n._)`${g} === "" || ${g} === 0 || ${g} === false`), h.assign(z, null);
          return;
        case "array":
          h.elseIf((0, n._)`${I} === "string" || ${I} === "number"
              || ${I} === "boolean" || ${g} === null`).assign(z, (0, n._)`[${g}]`);
      }
    }
  }
  function $({ gen: u, parentData: _, parentDataProperty: S }, h) {
    u.if((0, n._)`${_} !== undefined`, () => u.assign((0, n._)`${_}[${S}]`, h));
  }
  function y(u, _, S, h = s.Correct) {
    const g = h === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let E;
    switch (u) {
      case "null":
        return (0, n._)`${_} ${g} null`;
      case "array":
        E = (0, n._)`Array.isArray(${_})`;
        break;
      case "object":
        E = (0, n._)`${_} && typeof ${_} == "object" && !Array.isArray(${_})`;
        break;
      case "integer":
        E = I((0, n._)`!(${_} % 1) && !isNaN(${_})`);
        break;
      case "number":
        E = I();
        break;
      default:
        return (0, n._)`typeof ${_} ${g} ${u}`;
    }
    return h === s.Correct ? E : (0, n.not)(E);
    function I(z = n.nil) {
      return (0, n.and)((0, n._)`typeof ${_} == "number"`, z, S ? (0, n._)`isFinite(${_})` : n.nil);
    }
  }
  Ve.checkDataType = y;
  function w(u, _, S, h) {
    if (u.length === 1)
      return y(u[0], _, S, h);
    let g;
    const E = (0, o.toHash)(u);
    if (E.array && E.object) {
      const I = (0, n._)`typeof ${_} != "object"`;
      g = E.null ? I : (0, n._)`!${_} || ${I}`, delete E.null, delete E.array, delete E.object;
    } else
      g = n.nil;
    E.number && delete E.integer;
    for (const I in E)
      g = (0, n.and)(g, y(I, _, S, h));
    return g;
  }
  Ve.checkDataTypes = w;
  const b = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: _ }) => typeof u == "string" ? (0, n._)`{type: ${u}}` : (0, n._)`{type: ${_}}`
  };
  function f(u) {
    const _ = m(u);
    (0, r.reportError)(_, b);
  }
  Ve.reportTypeError = f;
  function m(u) {
    const { gen: _, data: S, schema: h } = u, g = (0, o.schemaRefOrVal)(u, h, "type");
    return {
      gen: _,
      keyword: "type",
      data: S,
      schema: h.type,
      schemaCode: g,
      schemaValue: g,
      parentSchema: h,
      params: {},
      it: u
    };
  }
  return Ve;
}
var mr = {}, Sc;
function Sv() {
  if (Sc) return mr;
  Sc = 1, Object.defineProperty(mr, "__esModule", { value: !0 }), mr.assignDefaults = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe();
  function r(o, s) {
    const { properties: a, items: i } = o.schema;
    if (s === "object" && a)
      for (const c in a)
        n(o, c, a[c].default);
    else s === "array" && Array.isArray(i) && i.forEach((c, d) => n(o, d, c.default));
  }
  mr.assignDefaults = r;
  function n(o, s, a) {
    const { gen: i, compositeRule: c, data: d, opts: l } = o;
    if (a === void 0)
      return;
    const v = (0, e._)`${d}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${v}`);
      return;
    }
    let $ = (0, e._)`${v} === undefined`;
    l.useDefaults === "empty" && ($ = (0, e._)`${$} || ${v} === null || ${v} === ""`), i.if($, (0, e._)`${v} = ${(0, e.stringify)(a)}`);
  }
  return mr;
}
var it = {}, $e = {}, Ec;
function dt() {
  if (Ec) return $e;
  Ec = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.validateUnion = $e.validateArray = $e.usePattern = $e.callValidateCode = $e.schemaProperties = $e.allSchemaProperties = $e.noPropertyInData = $e.propertyInData = $e.isOwnProperty = $e.hasPropFunc = $e.reportMissingProp = $e.checkMissingProp = $e.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ fe();
  function o(u, _) {
    const { gen: S, data: h, it: g } = u;
    S.if(l(S, h, _, g.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${_}` }, !0), u.error();
    });
  }
  $e.checkReportMissingProp = o;
  function s({ gen: u, data: _, it: { opts: S } }, h, g) {
    return (0, e.or)(...h.map((E) => (0, e.and)(l(u, _, E, S.ownProperties), (0, e._)`${g} = ${E}`)));
  }
  $e.checkMissingProp = s;
  function a(u, _) {
    u.setParams({ missingProperty: _ }, !0), u.error();
  }
  $e.reportMissingProp = a;
  function i(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  $e.hasPropFunc = i;
  function c(u, _, S) {
    return (0, e._)`${i(u)}.call(${_}, ${S})`;
  }
  $e.isOwnProperty = c;
  function d(u, _, S, h) {
    const g = (0, e._)`${_}${(0, e.getProperty)(S)} !== undefined`;
    return h ? (0, e._)`${g} && ${c(u, _, S)}` : g;
  }
  $e.propertyInData = d;
  function l(u, _, S, h) {
    const g = (0, e._)`${_}${(0, e.getProperty)(S)} === undefined`;
    return h ? (0, e.or)(g, (0, e.not)(c(u, _, S))) : g;
  }
  $e.noPropertyInData = l;
  function v(u) {
    return u ? Object.keys(u).filter((_) => _ !== "__proto__") : [];
  }
  $e.allSchemaProperties = v;
  function $(u, _) {
    return v(_).filter((S) => !(0, t.alwaysValidSchema)(u, _[S]));
  }
  $e.schemaProperties = $;
  function y({ schemaCode: u, data: _, it: { gen: S, topSchemaRef: h, schemaPath: g, errorPath: E }, it: I }, z, U, A) {
    const L = A ? (0, e._)`${u}, ${_}, ${h}${g}` : _, Z = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, E)],
      [r.default.parentData, I.parentData],
      [r.default.parentDataProperty, I.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    I.opts.dynamicRef && Z.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const x = (0, e._)`${L}, ${S.object(...Z)}`;
    return U !== e.nil ? (0, e._)`${z}.call(${U}, ${x})` : (0, e._)`${z}(${x})`;
  }
  $e.callValidateCode = y;
  const w = (0, e._)`new RegExp`;
  function b({ gen: u, it: { opts: _ } }, S) {
    const h = _.unicodeRegExp ? "u" : "", { regExp: g } = _.code, E = g(S, h);
    return u.scopeValue("pattern", {
      key: E.toString(),
      ref: E,
      code: (0, e._)`${g.code === "new RegExp" ? w : (0, n.useFunc)(u, g)}(${S}, ${h})`
    });
  }
  $e.usePattern = b;
  function f(u) {
    const { gen: _, data: S, keyword: h, it: g } = u, E = _.name("valid");
    if (g.allErrors) {
      const z = _.let("valid", !0);
      return I(() => _.assign(z, !1)), z;
    }
    return _.var(E, !0), I(() => _.break()), E;
    function I(z) {
      const U = _.const("len", (0, e._)`${S}.length`);
      _.forRange("i", 0, U, (A) => {
        u.subschema({
          keyword: h,
          dataProp: A,
          dataPropType: t.Type.Num
        }, E), _.if((0, e.not)(E), z);
      });
    }
  }
  $e.validateArray = f;
  function m(u) {
    const { gen: _, schema: S, keyword: h, it: g } = u;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((U) => (0, t.alwaysValidSchema)(g, U)) && !g.opts.unevaluated)
      return;
    const I = _.let("valid", !1), z = _.name("_valid");
    _.block(() => S.forEach((U, A) => {
      const L = u.subschema({
        keyword: h,
        schemaProp: A,
        compositeRule: !0
      }, z);
      _.assign(I, (0, e._)`${I} || ${z}`), u.mergeValidEvaluated(L, z) || _.if((0, e.not)(I));
    })), u.result(I, () => u.reset(), () => u.error(!0));
  }
  return $e.validateUnion = m, $e;
}
var kc;
function Ev() {
  if (kc) return it;
  kc = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.validateKeywordUsage = it.validSchemaType = it.funcKeywordCode = it.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ dt(), n = /* @__PURE__ */ Lo();
  function o($, y) {
    const { gen: w, keyword: b, schema: f, parentSchema: m, it: u } = $, _ = y.macro.call(u.self, f, m, u), S = d(w, b, _);
    u.opts.validateSchema !== !1 && u.self.validateSchema(_, !0);
    const h = w.name("valid");
    $.subschema({
      schema: _,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${b}`,
      topSchemaRef: S,
      compositeRule: !0
    }, h), $.pass(h, () => $.error(!0));
  }
  it.macroKeywordCode = o;
  function s($, y) {
    var w;
    const { gen: b, keyword: f, schema: m, parentSchema: u, $data: _, it: S } = $;
    c(S, y);
    const h = !_ && y.compile ? y.compile.call(S.self, m, u, S) : y.validate, g = d(b, f, h), E = b.let("valid");
    $.block$data(E, I), $.ok((w = y.valid) !== null && w !== void 0 ? w : E);
    function I() {
      if (y.errors === !1)
        A(), y.modifying && a($), L(() => $.error());
      else {
        const Z = y.async ? z() : U();
        y.modifying && a($), L(() => i($, Z));
      }
    }
    function z() {
      const Z = b.let("ruleErrs", null);
      return b.try(() => A((0, e._)`await `), (x) => b.assign(E, !1).if((0, e._)`${x} instanceof ${S.ValidationError}`, () => b.assign(Z, (0, e._)`${x}.errors`), () => b.throw(x))), Z;
    }
    function U() {
      const Z = (0, e._)`${g}.errors`;
      return b.assign(Z, null), A(e.nil), Z;
    }
    function A(Z = y.async ? (0, e._)`await ` : e.nil) {
      const x = S.opts.passContext ? t.default.this : t.default.self, te = !("compile" in y && !_ || y.schema === !1);
      b.assign(E, (0, e._)`${Z}${(0, r.callValidateCode)($, g, x, te)}`, y.modifying);
    }
    function L(Z) {
      var x;
      b.if((0, e.not)((x = y.valid) !== null && x !== void 0 ? x : E), Z);
    }
  }
  it.funcKeywordCode = s;
  function a($) {
    const { gen: y, data: w, it: b } = $;
    y.if(b.parentData, () => y.assign(w, (0, e._)`${b.parentData}[${b.parentDataProperty}]`));
  }
  function i($, y) {
    const { gen: w } = $;
    w.if((0, e._)`Array.isArray(${y})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${y} : ${t.default.vErrors}.concat(${y})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)($);
    }, () => $.error());
  }
  function c({ schemaEnv: $ }, y) {
    if (y.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function d($, y, w) {
    if (w === void 0)
      throw new Error(`keyword "${y}" failed to compile`);
    return $.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function l($, y, w = !1) {
    return !y.length || y.some((b) => b === "array" ? Array.isArray($) : b === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == b || w && typeof $ > "u");
  }
  it.validSchemaType = l;
  function v({ schema: $, opts: y, self: w, errSchemaPath: b }, f, m) {
    if (Array.isArray(f.keyword) ? !f.keyword.includes(m) : f.keyword !== m)
      throw new Error("ajv implementation error");
    const u = f.dependencies;
    if (u != null && u.some((_) => !Object.prototype.hasOwnProperty.call($, _)))
      throw new Error(`parent schema must have dependencies of ${m}: ${u.join(",")}`);
    if (f.validateSchema && !f.validateSchema($[m])) {
      const S = `keyword "${m}" value is invalid at path "${b}": ` + w.errorsText(f.validateSchema.errors);
      if (y.validateSchema === "log")
        w.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return it.validateKeywordUsage = v, it;
}
var gt = {}, Pc;
function kv() {
  if (Pc) return gt;
  Pc = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.extendSubschemaMode = gt.extendSubschemaData = gt.getSubschema = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe();
  function r(s, { keyword: a, schemaProp: i, schema: c, schemaPath: d, errSchemaPath: l, topSchemaRef: v }) {
    if (a !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const $ = s.schema[a];
      return i === void 0 ? {
        schema: $,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}`
      } : {
        schema: $[i],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (c !== void 0) {
      if (d === void 0 || l === void 0 || v === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: v,
        errSchemaPath: l
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  gt.getSubschema = r;
  function n(s, a, { dataProp: i, dataPropType: c, data: d, dataTypes: l, propertyName: v }) {
    if (d !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = a;
    if (i !== void 0) {
      const { errorPath: w, dataPathArr: b, opts: f } = a, m = $.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      y(m), s.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(i, c, f.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [...b, s.parentDataProperty];
    }
    if (d !== void 0) {
      const w = d instanceof e.Name ? d : $.let("data", d, !0);
      y(w), v !== void 0 && (s.propertyName = v);
    }
    l && (s.dataTypes = l);
    function y(w) {
      s.data = w, s.dataLevel = a.dataLevel + 1, s.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), s.parentData = a.data, s.dataNames = [...a.dataNames, w];
    }
  }
  gt.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: d, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), d !== void 0 && (s.createErrors = d), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return gt.extendSubschemaMode = o, gt;
}
var Je = {}, hs = { exports: {} }, Tc;
function Pv() {
  if (Tc) return hs.exports;
  Tc = 1;
  var e = hs.exports = function(n, o, s) {
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
  function t(n, o, s, a, i, c, d, l, v, $) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      o(a, i, c, d, l, v, $);
      for (var y in a) {
        var w = a[y];
        if (Array.isArray(w)) {
          if (y in e.arrayKeywords)
            for (var b = 0; b < w.length; b++)
              t(n, o, s, w[b], i + "/" + y + "/" + b, c, i, y, a, b);
        } else if (y in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var f in w)
              t(n, o, s, w[f], i + "/" + y + "/" + r(f), c, i, y, a, f);
        } else (y in e.keywords || n.allKeys && !(y in e.skipKeywords)) && t(n, o, s, w, i + "/" + y, c, i, y, a);
      }
      s(a, i, c, d, l, v, $);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return hs.exports;
}
var Rc;
function Fo() {
  if (Rc) return Je;
  Rc = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.getSchemaRefs = Je.resolveUrl = Je.normalizeId = Je._getFullPath = Je.getFullPath = Je.inlineRef = void 0;
  const e = /* @__PURE__ */ fe(), t = Ao(), r = Pv(), n = /* @__PURE__ */ new Set([
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
  function o(b, f = !0) {
    return typeof b == "boolean" ? !0 : f === !0 ? !a(b) : f ? i(b) <= f : !1;
  }
  Je.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(b) {
    for (const f in b) {
      if (s.has(f))
        return !0;
      const m = b[f];
      if (Array.isArray(m) && m.some(a) || typeof m == "object" && a(m))
        return !0;
    }
    return !1;
  }
  function i(b) {
    let f = 0;
    for (const m in b) {
      if (m === "$ref")
        return 1 / 0;
      if (f++, !n.has(m) && (typeof b[m] == "object" && (0, e.eachItem)(b[m], (u) => f += i(u)), f === 1 / 0))
        return 1 / 0;
    }
    return f;
  }
  function c(b, f = "", m) {
    m !== !1 && (f = v(f));
    const u = b.parse(f);
    return d(b, u);
  }
  Je.getFullPath = c;
  function d(b, f) {
    return b.serialize(f).split("#")[0] + "#";
  }
  Je._getFullPath = d;
  const l = /#\/?$/;
  function v(b) {
    return b ? b.replace(l, "") : "";
  }
  Je.normalizeId = v;
  function $(b, f, m) {
    return m = v(m), b.resolve(f, m);
  }
  Je.resolveUrl = $;
  const y = /^[a-z_][-a-z0-9._]*$/i;
  function w(b, f) {
    if (typeof b == "boolean")
      return {};
    const { schemaId: m, uriResolver: u } = this.opts, _ = v(b[m] || f), S = { "": _ }, h = c(u, _, !1), g = {}, E = /* @__PURE__ */ new Set();
    return r(b, { allKeys: !0 }, (U, A, L, Z) => {
      if (Z === void 0)
        return;
      const x = h + A;
      let te = S[Z];
      typeof U[m] == "string" && (te = _e.call(this, U[m])), we.call(this, U.$anchor), we.call(this, U.$dynamicAnchor), S[A] = te;
      function _e(ee) {
        const je = this.opts.uriResolver.resolve;
        if (ee = v(te ? je(te, ee) : ee), E.has(ee))
          throw z(ee);
        E.add(ee);
        let M = this.refs[ee];
        return typeof M == "string" && (M = this.refs[M]), typeof M == "object" ? I(U, M.schema, ee) : ee !== v(x) && (ee[0] === "#" ? (I(U, g[ee], ee), g[ee] = U) : this.refs[ee] = x), ee;
      }
      function we(ee) {
        if (typeof ee == "string") {
          if (!y.test(ee))
            throw new Error(`invalid anchor "${ee}"`);
          _e.call(this, `#${ee}`);
        }
      }
    }), g;
    function I(U, A, L) {
      if (A !== void 0 && !t(U, A))
        throw z(L);
    }
    function z(U) {
      return new Error(`reference "${U}" resolves to more than one schema`);
    }
  }
  return Je.getSchemaRefs = w, Je;
}
var Oc;
function Zo() {
  if (Oc) return _t;
  Oc = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.getData = _t.KeywordCxt = _t.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ bv(), t = /* @__PURE__ */ vo(), r = /* @__PURE__ */ ed(), n = /* @__PURE__ */ vo(), o = /* @__PURE__ */ Sv(), s = /* @__PURE__ */ Ev(), a = /* @__PURE__ */ kv(), i = /* @__PURE__ */ ae(), c = /* @__PURE__ */ Ot(), d = /* @__PURE__ */ Fo(), l = /* @__PURE__ */ fe(), v = /* @__PURE__ */ Lo();
  function $(P) {
    if (h(P) && (E(P), S(P))) {
      f(P);
      return;
    }
    y(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  _t.validateFunctionCode = $;
  function y({ gen: P, validateName: O, schema: N, schemaEnv: D, opts: H }, J) {
    H.code.es5 ? P.func(O, (0, i._)`${c.default.data}, ${c.default.valCxt}`, D.$async, () => {
      P.code((0, i._)`"use strict"; ${u(N, H)}`), b(P, H), P.code(J);
    }) : P.func(O, (0, i._)`${c.default.data}, ${w(H)}`, D.$async, () => P.code(u(N, H)).code(J));
  }
  function w(P) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function b(P, O) {
    P.if(c.default.valCxt, () => {
      P.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), P.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), P.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), P.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), O.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      P.var(c.default.instancePath, (0, i._)`""`), P.var(c.default.parentData, (0, i._)`undefined`), P.var(c.default.parentDataProperty, (0, i._)`undefined`), P.var(c.default.rootData, c.default.data), O.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function f(P) {
    const { schema: O, opts: N, gen: D } = P;
    y(P, () => {
      N.$comment && O.$comment && Z(P), U(P), D.let(c.default.vErrors, null), D.let(c.default.errors, 0), N.unevaluated && m(P), I(P), x(P);
    });
  }
  function m(P) {
    const { gen: O, validateName: N } = P;
    P.evaluated = O.const("evaluated", (0, i._)`${N}.evaluated`), O.if((0, i._)`${P.evaluated}.dynamicProps`, () => O.assign((0, i._)`${P.evaluated}.props`, (0, i._)`undefined`)), O.if((0, i._)`${P.evaluated}.dynamicItems`, () => O.assign((0, i._)`${P.evaluated}.items`, (0, i._)`undefined`));
  }
  function u(P, O) {
    const N = typeof P == "object" && P[O.schemaId];
    return N && (O.code.source || O.code.process) ? (0, i._)`/*# sourceURL=${N} */` : i.nil;
  }
  function _(P, O) {
    if (h(P) && (E(P), S(P))) {
      g(P, O);
      return;
    }
    (0, e.boolOrEmptySchema)(P, O);
  }
  function S({ schema: P, self: O }) {
    if (typeof P == "boolean")
      return !P;
    for (const N in P)
      if (O.RULES.all[N])
        return !0;
    return !1;
  }
  function h(P) {
    return typeof P.schema != "boolean";
  }
  function g(P, O) {
    const { schema: N, gen: D, opts: H } = P;
    H.$comment && N.$comment && Z(P), A(P), L(P);
    const J = D.const("_errs", c.default.errors);
    I(P, J), D.var(O, (0, i._)`${J} === ${c.default.errors}`);
  }
  function E(P) {
    (0, l.checkUnknownRules)(P), z(P);
  }
  function I(P, O) {
    if (P.opts.jtd)
      return _e(P, [], !1, O);
    const N = (0, t.getSchemaTypes)(P.schema), D = (0, t.coerceAndCheckDataType)(P, N);
    _e(P, N, !D, O);
  }
  function z(P) {
    const { schema: O, errSchemaPath: N, opts: D, self: H } = P;
    O.$ref && D.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(O, H.RULES) && H.logger.warn(`$ref: keywords ignored in schema at path "${N}"`);
  }
  function U(P) {
    const { schema: O, opts: N } = P;
    O.default !== void 0 && N.useDefaults && N.strictSchema && (0, l.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function A(P) {
    const O = P.schema[P.opts.schemaId];
    O && (P.baseId = (0, d.resolveUrl)(P.opts.uriResolver, P.baseId, O));
  }
  function L(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function Z({ gen: P, schemaEnv: O, schema: N, errSchemaPath: D, opts: H }) {
    const J = N.$comment;
    if (H.$comment === !0)
      P.code((0, i._)`${c.default.self}.logger.log(${J})`);
    else if (typeof H.$comment == "function") {
      const ue = (0, i.str)`${D}/$comment`, Oe = P.scopeValue("root", { ref: O.root });
      P.code((0, i._)`${c.default.self}.opts.$comment(${J}, ${ue}, ${Oe}.schema)`);
    }
  }
  function x(P) {
    const { gen: O, schemaEnv: N, validateName: D, ValidationError: H, opts: J } = P;
    N.$async ? O.if((0, i._)`${c.default.errors} === 0`, () => O.return(c.default.data), () => O.throw((0, i._)`new ${H}(${c.default.vErrors})`)) : (O.assign((0, i._)`${D}.errors`, c.default.vErrors), J.unevaluated && te(P), O.return((0, i._)`${c.default.errors} === 0`));
  }
  function te({ gen: P, evaluated: O, props: N, items: D }) {
    N instanceof i.Name && P.assign((0, i._)`${O}.props`, N), D instanceof i.Name && P.assign((0, i._)`${O}.items`, D);
  }
  function _e(P, O, N, D) {
    const { gen: H, schema: J, data: ue, allErrors: Oe, opts: ye, self: ge } = P, { RULES: le } = ge;
    if (J.$ref && (ye.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(J, le))) {
      H.block(() => F(P, "$ref", le.all.$ref.definition));
      return;
    }
    ye.jtd || ee(P, O), H.block(() => {
      for (const be of le.rules)
        Qe(be);
      Qe(le.post);
    });
    function Qe(be) {
      (0, r.shouldUseGroup)(J, be) && (be.type ? (H.if((0, n.checkDataType)(be.type, ue, ye.strictNumbers)), we(P, be), O.length === 1 && O[0] === be.type && N && (H.else(), (0, n.reportTypeError)(P)), H.endIf()) : we(P, be), Oe || H.if((0, i._)`${c.default.errors} === ${D || 0}`));
    }
  }
  function we(P, O) {
    const { gen: N, schema: D, opts: { useDefaults: H } } = P;
    H && (0, o.assignDefaults)(P, O.type), N.block(() => {
      for (const J of O.rules)
        (0, r.shouldUseRule)(D, J) && F(P, J.keyword, J.definition, O.type);
    });
  }
  function ee(P, O) {
    P.schemaEnv.meta || !P.opts.strictTypes || (je(P, O), P.opts.allowUnionTypes || M(P, O), R(P, P.dataTypes));
  }
  function je(P, O) {
    if (O.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = O;
        return;
      }
      O.forEach((N) => {
        T(P.dataTypes, N) || k(P, `type "${N}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), p(P, O);
    }
  }
  function M(P, O) {
    O.length > 1 && !(O.length === 2 && O.includes("null")) && k(P, "use allowUnionTypes to allow union type keyword");
  }
  function R(P, O) {
    const N = P.self.RULES.all;
    for (const D in N) {
      const H = N[D];
      if (typeof H == "object" && (0, r.shouldUseRule)(P.schema, H)) {
        const { type: J } = H.definition;
        J.length && !J.some((ue) => j(O, ue)) && k(P, `missing type "${J.join(",")}" for keyword "${D}"`);
      }
    }
  }
  function j(P, O) {
    return P.includes(O) || O === "number" && P.includes("integer");
  }
  function T(P, O) {
    return P.includes(O) || O === "integer" && P.includes("number");
  }
  function p(P, O) {
    const N = [];
    for (const D of P.dataTypes)
      T(O, D) ? N.push(D) : O.includes("integer") && D === "number" && N.push("integer");
    P.dataTypes = N;
  }
  function k(P, O) {
    const N = P.schemaEnv.baseId + P.errSchemaPath;
    O += ` at "${N}" (strictTypes)`, (0, l.checkStrictMode)(P, O, P.opts.strictTypes);
  }
  class C {
    constructor(O, N, D) {
      if ((0, s.validateKeywordUsage)(O, N, D), this.gen = O.gen, this.allErrors = O.allErrors, this.keyword = D, this.data = O.data, this.schema = O.schema[D], this.$data = N.$data && O.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(O, this.schema, D, this.$data), this.schemaType = N.schemaType, this.parentSchema = O.schema, this.params = {}, this.it = O, this.def = N, this.$data)
        this.schemaCode = O.gen.const("vSchema", B(this.$data, O));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, N.schemaType, N.allowUndefined))
        throw new Error(`${D} value must be ${JSON.stringify(N.schemaType)}`);
      ("code" in N ? N.trackErrors : N.errors !== !1) && (this.errsCount = O.gen.const("_errs", c.default.errors));
    }
    result(O, N, D) {
      this.failResult((0, i.not)(O), N, D);
    }
    failResult(O, N, D) {
      this.gen.if(O), D ? D() : this.error(), N ? (this.gen.else(), N(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(O, N) {
      this.failResult((0, i.not)(O), void 0, N);
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
      const { schemaCode: N } = this;
      this.fail((0, i._)`${N} !== undefined && (${(0, i.or)(this.invalid$data(), O)})`);
    }
    error(O, N, D) {
      if (N) {
        this.setParams(N), this._error(O, D), this.setParams({});
        return;
      }
      this._error(O, D);
    }
    _error(O, N) {
      (O ? v.reportExtraError : v.reportError)(this, this.def.error, N);
    }
    $dataError() {
      (0, v.reportError)(this, this.def.$dataError || v.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, v.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(O) {
      this.allErrors || this.gen.if(O);
    }
    setParams(O, N) {
      N ? Object.assign(this.params, O) : this.params = O;
    }
    block$data(O, N, D = i.nil) {
      this.gen.block(() => {
        this.check$data(O, D), N();
      });
    }
    check$data(O = i.nil, N = i.nil) {
      if (!this.$data)
        return;
      const { gen: D, schemaCode: H, schemaType: J, def: ue } = this;
      D.if((0, i.or)((0, i._)`${H} === undefined`, N)), O !== i.nil && D.assign(O, !0), (J.length || ue.validateSchema) && (D.elseIf(this.invalid$data()), this.$dataError(), O !== i.nil && D.assign(O, !1)), D.else();
    }
    invalid$data() {
      const { gen: O, schemaCode: N, schemaType: D, def: H, it: J } = this;
      return (0, i.or)(ue(), Oe());
      function ue() {
        if (D.length) {
          if (!(N instanceof i.Name))
            throw new Error("ajv implementation error");
          const ye = Array.isArray(D) ? D : [D];
          return (0, i._)`${(0, n.checkDataTypes)(ye, N, J.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function Oe() {
        if (H.validateSchema) {
          const ye = O.scopeValue("validate$data", { ref: H.validateSchema });
          return (0, i._)`!${ye}(${N})`;
        }
        return i.nil;
      }
    }
    subschema(O, N) {
      const D = (0, a.getSubschema)(this.it, O);
      (0, a.extendSubschemaData)(D, this.it, O), (0, a.extendSubschemaMode)(D, O);
      const H = { ...this.it, ...D, items: void 0, props: void 0 };
      return _(H, N), H;
    }
    mergeEvaluated(O, N) {
      const { it: D, gen: H } = this;
      D.opts.unevaluated && (D.props !== !0 && O.props !== void 0 && (D.props = l.mergeEvaluated.props(H, O.props, D.props, N)), D.items !== !0 && O.items !== void 0 && (D.items = l.mergeEvaluated.items(H, O.items, D.items, N)));
    }
    mergeValidEvaluated(O, N) {
      const { it: D, gen: H } = this;
      if (D.opts.unevaluated && (D.props !== !0 || D.items !== !0))
        return H.if(N, () => this.mergeEvaluated(O, i.Name)), !0;
    }
  }
  _t.KeywordCxt = C;
  function F(P, O, N, D) {
    const H = new C(P, N, O);
    "code" in N ? N.code(H, D) : H.$data && N.validate ? (0, s.funcKeywordCode)(H, N) : "macro" in N ? (0, s.macroKeywordCode)(H, N) : (N.compile || N.validate) && (0, s.funcKeywordCode)(H, N);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function B(P, { dataLevel: O, dataNames: N, dataPathArr: D }) {
    let H, J;
    if (P === "")
      return c.default.rootData;
    if (P[0] === "/") {
      if (!K.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      H = P, J = c.default.rootData;
    } else {
      const ge = Q.exec(P);
      if (!ge)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const le = +ge[1];
      if (H = ge[2], H === "#") {
        if (le >= O)
          throw new Error(ye("property/index", le));
        return D[O - le];
      }
      if (le > O)
        throw new Error(ye("data", le));
      if (J = N[O - le], !H)
        return J;
    }
    let ue = J;
    const Oe = H.split("/");
    for (const ge of Oe)
      ge && (J = (0, i._)`${J}${(0, i.getProperty)((0, l.unescapeJsonPointer)(ge))}`, ue = (0, i._)`${ue} && ${J}`);
    return ue;
    function ye(ge, le) {
      return `Cannot access ${ge} ${le} levels up, current level is ${O}`;
    }
  }
  return _t.getData = B, _t;
}
var En = {}, Ic;
function ba() {
  if (Ic) return En;
  Ic = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return En.default = e, En;
}
var kn = {}, Cc;
function Ho() {
  if (Cc) return kn;
  Cc = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fo();
  class t extends Error {
    constructor(n, o, s, a) {
      super(a || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(n, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return kn.default = t, kn;
}
var Xe = {}, Nc;
function Sa() {
  if (Nc) return Xe;
  Nc = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.resolveSchema = Xe.getCompilingSchema = Xe.resolveRef = Xe.compileSchema = Xe.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ ba(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ Fo(), o = /* @__PURE__ */ fe(), s = /* @__PURE__ */ Zo();
  class a {
    constructor(m) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let _;
      typeof m.schema == "object" && (_ = m.schema), this.schema = m.schema, this.schemaId = m.schemaId, this.root = m.root || this, this.baseId = (u = m.baseId) !== null && u !== void 0 ? u : (0, n.normalizeId)(_ == null ? void 0 : _[m.schemaId || "$id"]), this.schemaPath = m.schemaPath, this.localRefs = m.localRefs, this.meta = m.meta, this.$async = _ == null ? void 0 : _.$async, this.refs = {};
    }
  }
  Xe.SchemaEnv = a;
  function i(f) {
    const m = l.call(this, f);
    if (m)
      return m;
    const u = (0, n.getFullPath)(this.opts.uriResolver, f.root.baseId), { es5: _, lines: S } = this.opts.code, { ownProperties: h } = this.opts, g = new e.CodeGen(this.scope, { es5: _, lines: S, ownProperties: h });
    let E;
    f.$async && (E = g.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const I = g.scopeName("validate");
    f.validateName = I;
    const z = {
      gen: g,
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
      topSchemaRef: g.scopeValue("schema", this.opts.code.source === !0 ? { ref: f.schema, code: (0, e.stringify)(f.schema) } : { ref: f.schema }),
      validateName: I,
      ValidationError: E,
      schema: f.schema,
      schemaEnv: f,
      rootId: u,
      baseId: f.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: f.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let U;
    try {
      this._compilations.add(f), (0, s.validateFunctionCode)(z), g.optimize(this.opts.code.optimize);
      const A = g.toString();
      U = `${g.scopeRefs(r.default.scope)}return ${A}`, this.opts.code.process && (U = this.opts.code.process(U, f));
      const Z = new Function(`${r.default.self}`, `${r.default.scope}`, U)(this, this.scope.get());
      if (this.scope.value(I, { ref: Z }), Z.errors = null, Z.schema = f.schema, Z.schemaEnv = f, f.$async && (Z.$async = !0), this.opts.code.source === !0 && (Z.source = { validateName: I, validateCode: A, scopeValues: g._values }), this.opts.unevaluated) {
        const { props: x, items: te } = z;
        Z.evaluated = {
          props: x instanceof e.Name ? void 0 : x,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: x instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, Z.source && (Z.source.evaluated = (0, e.stringify)(Z.evaluated));
      }
      return f.validate = Z, f;
    } catch (A) {
      throw delete f.validate, delete f.validateName, U && this.logger.error("Error compiling schema, function code:", U), A;
    } finally {
      this._compilations.delete(f);
    }
  }
  Xe.compileSchema = i;
  function c(f, m, u) {
    var _;
    u = (0, n.resolveUrl)(this.opts.uriResolver, m, u);
    const S = f.refs[u];
    if (S)
      return S;
    let h = $.call(this, f, u);
    if (h === void 0) {
      const g = (_ = f.localRefs) === null || _ === void 0 ? void 0 : _[u], { schemaId: E } = this.opts;
      g && (h = new a({ schema: g, schemaId: E, root: f, baseId: m }));
    }
    if (h !== void 0)
      return f.refs[u] = d.call(this, h);
  }
  Xe.resolveRef = c;
  function d(f) {
    return (0, n.inlineRef)(f.schema, this.opts.inlineRefs) ? f.schema : f.validate ? f : i.call(this, f);
  }
  function l(f) {
    for (const m of this._compilations)
      if (v(m, f))
        return m;
  }
  Xe.getCompilingSchema = l;
  function v(f, m) {
    return f.schema === m.schema && f.root === m.root && f.baseId === m.baseId;
  }
  function $(f, m) {
    let u;
    for (; typeof (u = this.refs[m]) == "string"; )
      m = u;
    return u || this.schemas[m] || y.call(this, f, m);
  }
  function y(f, m) {
    const u = this.opts.uriResolver.parse(m), _ = (0, n._getFullPath)(this.opts.uriResolver, u);
    let S = (0, n.getFullPath)(this.opts.uriResolver, f.baseId, void 0);
    if (Object.keys(f.schema).length > 0 && _ === S)
      return b.call(this, u, f);
    const h = (0, n.normalizeId)(_), g = this.refs[h] || this.schemas[h];
    if (typeof g == "string") {
      const E = y.call(this, f, g);
      return typeof (E == null ? void 0 : E.schema) != "object" ? void 0 : b.call(this, u, E);
    }
    if (typeof (g == null ? void 0 : g.schema) == "object") {
      if (g.validate || i.call(this, g), h === (0, n.normalizeId)(m)) {
        const { schema: E } = g, { schemaId: I } = this.opts, z = E[I];
        return z && (S = (0, n.resolveUrl)(this.opts.uriResolver, S, z)), new a({ schema: E, schemaId: I, root: f, baseId: S });
      }
      return b.call(this, u, g);
    }
  }
  Xe.resolveSchema = y;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function b(f, { baseId: m, schema: u, root: _ }) {
    var S;
    if (((S = f.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const E of f.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const I = u[(0, o.unescapeFragment)(E)];
      if (I === void 0)
        return;
      u = I;
      const z = typeof u == "object" && u[this.opts.schemaId];
      !w.has(E) && z && (m = (0, n.resolveUrl)(this.opts.uriResolver, m, z));
    }
    let h;
    if (typeof u != "boolean" && u.$ref && !(0, o.schemaHasRulesButRef)(u, this.RULES)) {
      const E = (0, n.resolveUrl)(this.opts.uriResolver, m, u.$ref);
      h = y.call(this, _, E);
    }
    const { schemaId: g } = this.opts;
    if (h = h || new a({ schema: u, schemaId: g, root: _, baseId: m }), h.schema !== h.root.schema)
      return h;
  }
  return Xe;
}
const Tv = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Rv = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ov = "object", Iv = ["$data"], Cv = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Nv = !1, jv = {
  $id: Tv,
  description: Rv,
  type: Ov,
  required: Iv,
  properties: Cv,
  additionalProperties: Nv
};
var Pn = {}, jc;
function qv() {
  if (jc) return Pn;
  jc = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = Wl();
  return e.code = 'require("ajv/dist/runtime/uri").default', Pn.default = e, Pn;
}
var qc;
function zv() {
  return qc || (qc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Zo();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = /* @__PURE__ */ ae();
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
    const n = /* @__PURE__ */ ba(), o = /* @__PURE__ */ Ho(), s = /* @__PURE__ */ Xl(), a = /* @__PURE__ */ Sa(), i = /* @__PURE__ */ ae(), c = /* @__PURE__ */ Fo(), d = /* @__PURE__ */ vo(), l = /* @__PURE__ */ fe(), v = jv, $ = /* @__PURE__ */ qv(), y = (M, R) => new RegExp(M, R);
    y.code = "new RegExp";
    const w = ["removeAdditional", "useDefaults", "coerceTypes"], b = /* @__PURE__ */ new Set([
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
    }, u = 200;
    function _(M) {
      var R, j, T, p, k, C, F, K, Q, B, P, O, N, D, H, J, ue, Oe, ye, ge, le, Qe, be, It, Ct;
      const st = M.strict, Nt = (R = M.code) === null || R === void 0 ? void 0 : R.optimize, lr = Nt === !0 || Nt === void 0 ? 1 : Nt || 0, dr = (T = (j = M.code) === null || j === void 0 ? void 0 : j.regExp) !== null && T !== void 0 ? T : y, Ko = (p = M.uriResolver) !== null && p !== void 0 ? p : $.default;
      return {
        strictSchema: (C = (k = M.strictSchema) !== null && k !== void 0 ? k : st) !== null && C !== void 0 ? C : !0,
        strictNumbers: (K = (F = M.strictNumbers) !== null && F !== void 0 ? F : st) !== null && K !== void 0 ? K : !0,
        strictTypes: (B = (Q = M.strictTypes) !== null && Q !== void 0 ? Q : st) !== null && B !== void 0 ? B : "log",
        strictTuples: (O = (P = M.strictTuples) !== null && P !== void 0 ? P : st) !== null && O !== void 0 ? O : "log",
        strictRequired: (D = (N = M.strictRequired) !== null && N !== void 0 ? N : st) !== null && D !== void 0 ? D : !1,
        code: M.code ? { ...M.code, optimize: lr, regExp: dr } : { optimize: lr, regExp: dr },
        loopRequired: (H = M.loopRequired) !== null && H !== void 0 ? H : u,
        loopEnum: (J = M.loopEnum) !== null && J !== void 0 ? J : u,
        meta: (ue = M.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (Oe = M.messages) !== null && Oe !== void 0 ? Oe : !0,
        inlineRefs: (ye = M.inlineRefs) !== null && ye !== void 0 ? ye : !0,
        schemaId: (ge = M.schemaId) !== null && ge !== void 0 ? ge : "$id",
        addUsedSchema: (le = M.addUsedSchema) !== null && le !== void 0 ? le : !0,
        validateSchema: (Qe = M.validateSchema) !== null && Qe !== void 0 ? Qe : !0,
        validateFormats: (be = M.validateFormats) !== null && be !== void 0 ? be : !0,
        unicodeRegExp: (It = M.unicodeRegExp) !== null && It !== void 0 ? It : !0,
        int32range: (Ct = M.int32range) !== null && Ct !== void 0 ? Ct : !0,
        uriResolver: Ko
      };
    }
    class S {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ..._(R) };
        const { es5: j, lines: T } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: b, es5: j, lines: T }), this.logger = L(R.logger);
        const p = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, s.getRules)(), h.call(this, f, R, "NOT SUPPORTED"), h.call(this, m, R, "DEPRECATED", "warn"), this._metaOpts = U.call(this), R.formats && I.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && z.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), E.call(this), R.validateFormats = p;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: j, schemaId: T } = this.opts;
        let p = v;
        T === "id" && (p = { ...v }, p.id = p.$id, delete p.$id), j && R && this.addMetaSchema(p, p[T], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: j } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[j] || R : void 0;
      }
      validate(R, j) {
        let T;
        if (typeof R == "string") {
          if (T = this.getSchema(R), !T)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          T = this.compile(R);
        const p = T(j);
        return "$async" in T || (this.errors = T.errors), p;
      }
      compile(R, j) {
        const T = this._addSchema(R, j);
        return T.validate || this._compileSchemaEnv(T);
      }
      compileAsync(R, j) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: T } = this.opts;
        return p.call(this, R, j);
        async function p(B, P) {
          await k.call(this, B.$schema);
          const O = this._addSchema(B, P);
          return O.validate || C.call(this, O);
        }
        async function k(B) {
          B && !this.getSchema(B) && await p.call(this, { $ref: B }, !0);
        }
        async function C(B) {
          try {
            return this._compileSchemaEnv(B);
          } catch (P) {
            if (!(P instanceof o.default))
              throw P;
            return F.call(this, P), await K.call(this, P.missingSchema), C.call(this, B);
          }
        }
        function F({ missingSchema: B, missingRef: P }) {
          if (this.refs[B])
            throw new Error(`AnySchema ${B} is loaded but ${P} cannot be resolved`);
        }
        async function K(B) {
          const P = await Q.call(this, B);
          this.refs[B] || await k.call(this, P.$schema), this.refs[B] || this.addSchema(P, B, j);
        }
        async function Q(B) {
          const P = this._loading[B];
          if (P)
            return P;
          try {
            return await (this._loading[B] = T(B));
          } finally {
            delete this._loading[B];
          }
        }
      }
      // Adds schema to the instance
      addSchema(R, j, T, p = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const C of R)
            this.addSchema(C, void 0, T, p);
          return this;
        }
        let k;
        if (typeof R == "object") {
          const { schemaId: C } = this.opts;
          if (k = R[C], k !== void 0 && typeof k != "string")
            throw new Error(`schema ${C} must be string`);
        }
        return j = (0, c.normalizeId)(j || k), this._checkUnique(j), this.schemas[j] = this._addSchema(R, T, j, p, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, j, T = this.opts.validateSchema) {
        return this.addSchema(R, j, !0, T), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, j) {
        if (typeof R == "boolean")
          return !0;
        let T;
        if (T = R.$schema, T !== void 0 && typeof T != "string")
          throw new Error("$schema must be a string");
        if (T = T || this.opts.defaultMeta || this.defaultMeta(), !T)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const p = this.validate(T, R);
        if (!p && j) {
          const k = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(k);
          else
            throw new Error(k);
        }
        return p;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(R) {
        let j;
        for (; typeof (j = g.call(this, R)) == "string"; )
          R = j;
        if (j === void 0) {
          const { schemaId: T } = this.opts, p = new a.SchemaEnv({ schema: {}, schemaId: T });
          if (j = a.resolveSchema.call(this, p, R), !j)
            return;
          this.refs[R] = j;
        }
        return j.validate || this._compileSchemaEnv(j);
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
            const j = g.call(this, R);
            return typeof j == "object" && this._cache.delete(j.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const j = R;
            this._cache.delete(j);
            let T = R[this.opts.schemaId];
            return T && (T = (0, c.normalizeId)(T), delete this.schemas[T], delete this.refs[T]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const j of R)
          this.addKeyword(j);
        return this;
      }
      addKeyword(R, j) {
        let T;
        if (typeof R == "string")
          T = R, typeof j == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), j.keyword = T);
        else if (typeof R == "object" && j === void 0) {
          if (j = R, T = j.keyword, Array.isArray(T) && !T.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (x.call(this, T, j), !j)
          return (0, l.eachItem)(T, (k) => te.call(this, k)), this;
        we.call(this, j);
        const p = {
          ...j,
          type: (0, d.getJSONTypes)(j.type),
          schemaType: (0, d.getJSONTypes)(j.schemaType)
        };
        return (0, l.eachItem)(T, p.type.length === 0 ? (k) => te.call(this, k, p) : (k) => p.type.forEach((C) => te.call(this, k, p, C))), this;
      }
      getKeyword(R) {
        const j = this.RULES.all[R];
        return typeof j == "object" ? j.definition : !!j;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: j } = this;
        delete j.keywords[R], delete j.all[R];
        for (const T of j.rules) {
          const p = T.rules.findIndex((k) => k.keyword === R);
          p >= 0 && T.rules.splice(p, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, j) {
        return typeof j == "string" && (j = new RegExp(j)), this.formats[R] = j, this;
      }
      errorsText(R = this.errors, { separator: j = ", ", dataVar: T = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map((p) => `${T}${p.instancePath} ${p.message}`).reduce((p, k) => p + j + k);
      }
      $dataMetaSchema(R, j) {
        const T = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const p of j) {
          const k = p.split("/").slice(1);
          let C = R;
          for (const F of k)
            C = C[F];
          for (const F in T) {
            const K = T[F];
            if (typeof K != "object")
              continue;
            const { $data: Q } = K.definition, B = C[F];
            Q && B && (C[F] = je(B));
          }
        }
        return R;
      }
      _removeAllSchemas(R, j) {
        for (const T in R) {
          const p = R[T];
          (!j || j.test(T)) && (typeof p == "string" ? delete R[T] : p && !p.meta && (this._cache.delete(p.schema), delete R[T]));
        }
      }
      _addSchema(R, j, T, p = this.opts.validateSchema, k = this.opts.addUsedSchema) {
        let C;
        const { schemaId: F } = this.opts;
        if (typeof R == "object")
          C = R[F];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let K = this._cache.get(R);
        if (K !== void 0)
          return K;
        T = (0, c.normalizeId)(C || T);
        const Q = c.getSchemaRefs.call(this, R, T);
        return K = new a.SchemaEnv({ schema: R, schemaId: F, meta: j, baseId: T, localRefs: Q }), this._cache.set(K.schema, K), k && !T.startsWith("#") && (T && this._checkUnique(T), this.refs[T] = K), p && this.validateSchema(R, !0), K;
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
        const j = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, R);
        } finally {
          this.opts = j;
        }
      }
    }
    S.ValidationError = n.default, S.MissingRefError = o.default, e.default = S;
    function h(M, R, j, T = "error") {
      for (const p in M) {
        const k = p;
        k in R && this.logger[T](`${j}: option ${p}. ${M[k]}`);
      }
    }
    function g(M) {
      return M = (0, c.normalizeId)(M), this.schemas[M] || this.refs[M];
    }
    function E() {
      const M = this.opts.schemas;
      if (M)
        if (Array.isArray(M))
          this.addSchema(M);
        else
          for (const R in M)
            this.addSchema(M[R], R);
    }
    function I() {
      for (const M in this.opts.formats) {
        const R = this.opts.formats[M];
        R && this.addFormat(M, R);
      }
    }
    function z(M) {
      if (Array.isArray(M)) {
        this.addVocabulary(M);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in M) {
        const j = M[R];
        j.keyword || (j.keyword = R), this.addKeyword(j);
      }
    }
    function U() {
      const M = { ...this.opts };
      for (const R of w)
        delete M[R];
      return M;
    }
    const A = { log() {
    }, warn() {
    }, error() {
    } };
    function L(M) {
      if (M === !1)
        return A;
      if (M === void 0)
        return console;
      if (M.log && M.warn && M.error)
        return M;
      throw new Error("logger must implement log, warn and error methods");
    }
    const Z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function x(M, R) {
      const { RULES: j } = this;
      if ((0, l.eachItem)(M, (T) => {
        if (j.keywords[T])
          throw new Error(`Keyword ${T} is already defined`);
        if (!Z.test(T))
          throw new Error(`Keyword ${T} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(M, R, j) {
      var T;
      const p = R == null ? void 0 : R.post;
      if (j && p)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: k } = this;
      let C = p ? k.post : k.rules.find(({ type: K }) => K === j);
      if (C || (C = { type: j, rules: [] }, k.rules.push(C)), k.keywords[M] = !0, !R)
        return;
      const F = {
        keyword: M,
        definition: {
          ...R,
          type: (0, d.getJSONTypes)(R.type),
          schemaType: (0, d.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? _e.call(this, C, F, R.before) : C.rules.push(F), k.all[M] = F, (T = R.implements) === null || T === void 0 || T.forEach((K) => this.addKeyword(K));
    }
    function _e(M, R, j) {
      const T = M.rules.findIndex((p) => p.keyword === j);
      T >= 0 ? M.rules.splice(T, 0, R) : (M.rules.push(R), this.logger.warn(`rule ${j} is not defined`));
    }
    function we(M) {
      let { metaSchema: R } = M;
      R !== void 0 && (M.$data && this.opts.$data && (R = je(R)), M.validateSchema = this.compile(R, !0));
    }
    const ee = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function je(M) {
      return { anyOf: [M, ee] };
    }
  }(cs)), cs;
}
var Tn = {}, Rn = {}, On = {}, zc;
function Mv() {
  if (zc) return On;
  zc = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return On.default = e, On;
}
var wt = {}, Mc;
function Av() {
  if (Mc) return wt;
  Mc = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.callRef = wt.getValidate = void 0;
  const e = /* @__PURE__ */ Ho(), t = /* @__PURE__ */ dt(), r = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Ot(), o = /* @__PURE__ */ Sa(), s = /* @__PURE__ */ fe(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: l, schema: v, it: $ } = d, { baseId: y, schemaEnv: w, validateName: b, opts: f, self: m } = $, { root: u } = w;
      if ((v === "#" || v === "#/") && y === u.baseId)
        return S();
      const _ = o.resolveRef.call(m, u, y, v);
      if (_ === void 0)
        throw new e.default($.opts.uriResolver, y, v);
      if (_ instanceof o.SchemaEnv)
        return h(_);
      return g(_);
      function S() {
        if (w === u)
          return c(d, b, w, w.$async);
        const E = l.scopeValue("root", { ref: u });
        return c(d, (0, r._)`${E}.validate`, u, u.$async);
      }
      function h(E) {
        const I = i(d, E);
        c(d, I, E, E.$async);
      }
      function g(E) {
        const I = l.scopeValue("schema", f.code.source === !0 ? { ref: E, code: (0, r.stringify)(E) } : { ref: E }), z = l.name("valid"), U = d.subschema({
          schema: E,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: I,
          errSchemaPath: v
        }, z);
        d.mergeEvaluated(U), d.ok(z);
      }
    }
  };
  function i(d, l) {
    const { gen: v } = d;
    return l.validate ? v.scopeValue("validate", { ref: l.validate }) : (0, r._)`${v.scopeValue("wrapper", { ref: l })}.validate`;
  }
  wt.getValidate = i;
  function c(d, l, v, $) {
    const { gen: y, it: w } = d, { allErrors: b, schemaEnv: f, opts: m } = w, u = m.passContext ? n.default.this : r.nil;
    $ ? _() : S();
    function _() {
      if (!f.$async)
        throw new Error("async schema referenced by sync schema");
      const E = y.let("valid");
      y.try(() => {
        y.code((0, r._)`await ${(0, t.callValidateCode)(d, l, u)}`), g(l), b || y.assign(E, !0);
      }, (I) => {
        y.if((0, r._)`!(${I} instanceof ${w.ValidationError})`, () => y.throw(I)), h(I), b || y.assign(E, !1);
      }), d.ok(E);
    }
    function S() {
      d.result((0, t.callValidateCode)(d, l, u), () => g(l), () => h(l));
    }
    function h(E) {
      const I = (0, r._)`${E}.errors`;
      y.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${I} : ${n.default.vErrors}.concat(${I})`), y.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function g(E) {
      var I;
      if (!w.opts.unevaluated)
        return;
      const z = (I = v == null ? void 0 : v.validate) === null || I === void 0 ? void 0 : I.evaluated;
      if (w.props !== !0)
        if (z && !z.dynamicProps)
          z.props !== void 0 && (w.props = s.mergeEvaluated.props(y, z.props, w.props));
        else {
          const U = y.var("props", (0, r._)`${E}.evaluated.props`);
          w.props = s.mergeEvaluated.props(y, U, w.props, r.Name);
        }
      if (w.items !== !0)
        if (z && !z.dynamicItems)
          z.items !== void 0 && (w.items = s.mergeEvaluated.items(y, z.items, w.items));
        else {
          const U = y.var("items", (0, r._)`${E}.evaluated.items`);
          w.items = s.mergeEvaluated.items(y, U, w.items, r.Name);
        }
    }
  }
  return wt.callRef = c, wt.default = a, wt;
}
var Ac;
function Dv() {
  if (Ac) return Rn;
  Ac = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mv(), t = /* @__PURE__ */ Av(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Rn.default = r, Rn;
}
var In = {}, Cn = {}, Dc;
function Uv() {
  if (Dc) return Cn;
  Dc = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = e.operators, r = {
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
  return Cn.default = o, Cn;
}
var Nn = {}, Uc;
function Vv() {
  if (Uc) return Nn;
  Uc = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), r = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must be multiple of ${n}`,
      params: ({ schemaCode: n }) => (0, e._)`{multipleOf: ${n}}`
    },
    code(n) {
      const { gen: o, data: s, schemaCode: a, it: i } = n, c = i.opts.multipleOfPrecision, d = o.let("res"), l = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      n.fail$data((0, e._)`(${a} === 0 || (${d} = ${s}/${a}, ${l}))`);
    }
  };
  return Nn.default = r, Nn;
}
var jn = {}, qn = {}, Vc;
function Lv() {
  if (Vc) return qn;
  Vc = 1, Object.defineProperty(qn, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let n = 0, o = 0, s;
    for (; o < r; )
      n++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < r && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return n;
  }
  return qn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', qn;
}
var Lc;
function Fv() {
  if (Lc) return jn;
  Lc = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ Lv(), o = {
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
      const { keyword: a, data: i, schemaCode: c, it: d } = s, l = a === "maxLength" ? e.operators.GT : e.operators.LT, v = d.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, r.default)}(${i})`;
      s.fail$data((0, e._)`${v} ${l} ${c}`);
    }
  };
  return jn.default = o, jn;
}
var zn = {}, Fc;
function Zv() {
  if (Fc) return zn;
  Fc = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ ae(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, r.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, r._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: v } = s, $ = v.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: y } = v.opts.code, w = y.code === "new RegExp" ? (0, r._)`new RegExp` : (0, t.useFunc)(a, y), b = a.let("valid");
        a.try(() => a.assign(b, (0, r._)`${w}(${l}, ${$}).test(${i})`), () => a.assign(b, !1)), s.fail$data((0, r._)`!${b}`);
      } else {
        const y = (0, e.usePattern)(s, d);
        s.fail$data((0, r._)`!${y}.test(${i})`);
      }
    }
  };
  return zn.default = o, zn;
}
var Mn = {}, Zc;
function Hv() {
  if (Zc) return Mn;
  Zc = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), r = {
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
  return Mn.default = r, Mn;
}
var An = {}, Hc;
function Kv() {
  if (Hc) return An;
  Hc = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: a, schema: i, schemaCode: c, data: d, $data: l, it: v } = s, { opts: $ } = v;
      if (!l && i.length === 0)
        return;
      const y = i.length >= $.loopRequired;
      if (v.allErrors ? w() : b(), $.strictRequired) {
        const u = s.parentSchema.properties, { definedProperties: _ } = s.it;
        for (const S of i)
          if ((u == null ? void 0 : u[S]) === void 0 && !_.has(S)) {
            const h = v.schemaEnv.baseId + v.errSchemaPath, g = `required property "${S}" is not defined at "${h}" (strictRequired)`;
            (0, r.checkStrictMode)(v, g, v.opts.strictRequired);
          }
      }
      function w() {
        if (y || l)
          s.block$data(t.nil, f);
        else
          for (const u of i)
            (0, e.checkReportMissingProp)(s, u);
      }
      function b() {
        const u = a.let("missing");
        if (y || l) {
          const _ = a.let("valid", !0);
          s.block$data(_, () => m(u, _)), s.ok(_);
        } else
          a.if((0, e.checkMissingProp)(s, i, u)), (0, e.reportMissingProp)(s, u), a.else();
      }
      function f() {
        a.forOf("prop", c, (u) => {
          s.setParams({ missingProperty: u }), a.if((0, e.noPropertyInData)(a, d, u, $.ownProperties), () => s.error());
        });
      }
      function m(u, _) {
        s.setParams({ missingProperty: u }), a.forOf(u, c, () => {
          a.assign(_, (0, e.propertyInData)(a, d, u, $.ownProperties)), a.if((0, t.not)(_), () => {
            s.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return An.default = o, An;
}
var Dn = {}, Kc;
function xv() {
  if (Kc) return Dn;
  Kc = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), r = {
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
  return Dn.default = r, Dn;
}
var Un = {}, Vn = {}, xc;
function Ea() {
  if (xc) return Vn;
  xc = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = Ao();
  return e.code = 'require("ajv/dist/runtime/equal").default', Vn.default = e, Vn;
}
var Jc;
function Jv() {
  if (Jc) return Un;
  Jc = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ vo(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ Ea(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${a} are identical)`,
      params: ({ params: { i: a, j: i } }) => (0, t._)`{i: ${a}, j: ${i}}`
    },
    code(a) {
      const { gen: i, data: c, $data: d, schema: l, parentSchema: v, schemaCode: $, it: y } = a;
      if (!d && !l)
        return;
      const w = i.let("valid"), b = v.items ? (0, e.getSchemaTypes)(v.items) : [];
      a.block$data(w, f, (0, t._)`${$} === false`), a.ok(w);
      function f() {
        const S = i.let("i", (0, t._)`${c}.length`), h = i.let("j");
        a.setParams({ i: S, j: h }), i.assign(w, !0), i.if((0, t._)`${S} > 1`, () => (m() ? u : _)(S, h));
      }
      function m() {
        return b.length > 0 && !b.some((S) => S === "object" || S === "array");
      }
      function u(S, h) {
        const g = i.name("item"), E = (0, e.checkDataTypes)(b, g, y.opts.strictNumbers, e.DataType.Wrong), I = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${S}--;`, () => {
          i.let(g, (0, t._)`${c}[${S}]`), i.if(E, (0, t._)`continue`), b.length > 1 && i.if((0, t._)`typeof ${g} == "string"`, (0, t._)`${g} += "_"`), i.if((0, t._)`typeof ${I}[${g}] == "number"`, () => {
            i.assign(h, (0, t._)`${I}[${g}]`), a.error(), i.assign(w, !1).break();
          }).code((0, t._)`${I}[${g}] = ${S}`);
        });
      }
      function _(S, h) {
        const g = (0, r.useFunc)(i, n.default), E = i.name("outer");
        i.label(E).for((0, t._)`;${S}--;`, () => i.for((0, t._)`${h} = ${S}; ${h}--;`, () => i.if((0, t._)`${g}(${c}[${S}], ${c}[${h}])`, () => {
          a.error(), i.assign(w, !1).break(E);
        })));
      }
    }
  };
  return Un.default = s, Un;
}
var Ln = {}, Gc;
function Gv() {
  if (Gc) return Ln;
  Gc = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ Ea(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schemaCode: d, schema: l } = s;
      c || l && typeof l == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(a, r.default)}(${i}, ${d})`) : s.fail((0, e._)`${l} !== ${i}`);
    }
  };
  return Ln.default = o, Ln;
}
var Fn = {}, Wc;
function Wv() {
  if (Wc) return Fn;
  Wc = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ Ea(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: v } = s;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = d.length >= v.opts.loopEnum;
      let y;
      const w = () => y ?? (y = (0, t.useFunc)(a, r.default));
      let b;
      if ($ || c)
        b = a.let("valid"), s.block$data(b, f);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const u = a.const("vSchema", l);
        b = (0, e.or)(...d.map((_, S) => m(u, S)));
      }
      s.pass(b);
      function f() {
        a.assign(b, !1), a.forOf("v", l, (u) => a.if((0, e._)`${w()}(${i}, ${u})`, () => a.assign(b, !0).break()));
      }
      function m(u, _) {
        const S = d[_];
        return typeof S == "object" && S !== null ? (0, e._)`${w()}(${i}, ${u}[${_}])` : (0, e._)`${i} === ${S}`;
      }
    }
  };
  return Fn.default = o, Fn;
}
var Bc;
function Bv() {
  if (Bc) return In;
  Bc = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uv(), t = /* @__PURE__ */ Vv(), r = /* @__PURE__ */ Fv(), n = /* @__PURE__ */ Zv(), o = /* @__PURE__ */ Hv(), s = /* @__PURE__ */ Kv(), a = /* @__PURE__ */ xv(), i = /* @__PURE__ */ Jv(), c = /* @__PURE__ */ Gv(), d = /* @__PURE__ */ Wv(), l = [
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
    d.default
  ];
  return In.default = l, In;
}
var Zn = {}, xt = {}, Qc;
function td() {
  if (Qc) return xt;
  Qc = 1, Object.defineProperty(xt, "__esModule", { value: !0 }), xt.validateAdditionalItems = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), n = {
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
    const { gen: i, schema: c, data: d, keyword: l, it: v } = s;
    v.items = !0;
    const $ = i.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      s.setParams({ len: a.length }), s.pass((0, e._)`${$} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(v, c)) {
      const w = i.var("valid", (0, e._)`${$} <= ${a.length}`);
      i.if((0, e.not)(w), () => y(w)), s.ok(w);
    }
    function y(w) {
      i.forRange("i", a.length, $, (b) => {
        s.subschema({ keyword: l, dataProp: b, dataPropType: t.Type.Num }, w), v.allErrors || i.if((0, e.not)(w), () => i.break());
      });
    }
  }
  return xt.validateAdditionalItems = o, xt.default = n, xt;
}
var Hn = {}, Jt = {}, Yc;
function rd() {
  if (Yc) return Jt;
  Yc = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.validateTuple = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ dt(), n = {
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
    const { gen: c, parentSchema: d, data: l, keyword: v, it: $ } = s;
    b(d), $.opts.unevaluated && i.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(c, i.length, $.items));
    const y = c.name("valid"), w = c.const("len", (0, e._)`${l}.length`);
    i.forEach((f, m) => {
      (0, t.alwaysValidSchema)($, f) || (c.if((0, e._)`${w} > ${m}`, () => s.subschema({
        keyword: v,
        schemaProp: m,
        dataProp: m
      }, y)), s.ok(y));
    });
    function b(f) {
      const { opts: m, errSchemaPath: u } = $, _ = i.length, S = _ === f.minItems && (_ === f.maxItems || f[a] === !1);
      if (m.strictTuples && !S) {
        const h = `"${v}" is ${_}-tuple, but minItems or maxItems/${a} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, h, m.strictTuples);
      }
    }
  }
  return Jt.validateTuple = o, Jt.default = n, Jt;
}
var Xc;
function Qv() {
  if (Xc) return Hn;
  Xc = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return Hn.default = t, Hn;
}
var Kn = {}, eu;
function Yv() {
  if (eu) return Kn;
  eu = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ dt(), n = /* @__PURE__ */ td(), s = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: i, parentSchema: c, it: d } = a, { prefixItems: l } = c;
      d.items = !0, !(0, t.alwaysValidSchema)(d, i) && (l ? (0, n.validateAdditionalItems)(a, l) : a.ok((0, r.validateArray)(a)));
    }
  };
  return Kn.default = s, Kn;
}
var xn = {}, tu;
function Xv() {
  if (tu) return xn;
  tu = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), n = {
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
      const { gen: s, schema: a, parentSchema: i, data: c, it: d } = o;
      let l, v;
      const { minContains: $, maxContains: y } = i;
      d.opts.next ? (l = $ === void 0 ? 1 : $, v = y) : l = 1;
      const w = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: l, max: v }), v === void 0 && l === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (v !== void 0 && l > v) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, a)) {
        let _ = (0, e._)`${w} >= ${l}`;
        v !== void 0 && (_ = (0, e._)`${_} && ${w} <= ${v}`), o.pass(_);
        return;
      }
      d.items = !0;
      const b = s.name("valid");
      v === void 0 && l === 1 ? m(b, () => s.if(b, () => s.break())) : l === 0 ? (s.let(b, !0), v !== void 0 && s.if((0, e._)`${c}.length > 0`, f)) : (s.let(b, !1), f()), o.result(b, () => o.reset());
      function f() {
        const _ = s.name("_valid"), S = s.let("count", 0);
        m(_, () => s.if(_, () => u(S)));
      }
      function m(_, S) {
        s.forRange("i", 0, w, (h) => {
          o.subschema({
            keyword: "contains",
            dataProp: h,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, _), S();
        });
      }
      function u(_) {
        s.code((0, e._)`${_}++`), v === void 0 ? s.if((0, e._)`${_} >= ${l}`, () => s.assign(b, !0).break()) : (s.if((0, e._)`${_} > ${v}`, () => s.assign(b, !1).break()), l === 1 ? s.assign(b, !0) : s.if((0, e._)`${_} >= ${l}`, () => s.assign(b, !0)));
      }
    }
  };
  return xn.default = n, xn;
}
var ps = {}, ru;
function e$() {
  return ru || (ru = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ dt();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: l } }) => {
        const v = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${v} ${l} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: l, missingProperty: v } }) => (0, t._)`{property: ${c},
    missingProperty: ${v},
    depsCount: ${d},
    deps: ${l}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [d, l] = s(c);
        a(c, d), i(c, l);
      }
    };
    function s({ schema: c }) {
      const d = {}, l = {};
      for (const v in c) {
        if (v === "__proto__")
          continue;
        const $ = Array.isArray(c[v]) ? d : l;
        $[v] = c[v];
      }
      return [d, l];
    }
    function a(c, d = c.schema) {
      const { gen: l, data: v, it: $ } = c;
      if (Object.keys(d).length === 0)
        return;
      const y = l.let("missing");
      for (const w in d) {
        const b = d[w];
        if (b.length === 0)
          continue;
        const f = (0, n.propertyInData)(l, v, w, $.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: b.length,
          deps: b.join(", ")
        }), $.allErrors ? l.if(f, () => {
          for (const m of b)
            (0, n.checkReportMissingProp)(c, m);
        }) : (l.if((0, t._)`${f} && (${(0, n.checkMissingProp)(c, b, y)})`), (0, n.reportMissingProp)(c, y), l.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, d = c.schema) {
      const { gen: l, data: v, keyword: $, it: y } = c, w = l.name("valid");
      for (const b in d)
        (0, r.alwaysValidSchema)(y, d[b]) || (l.if(
          (0, n.propertyInData)(l, v, b, y.opts.ownProperties),
          () => {
            const f = c.subschema({ keyword: $, schemaProp: b }, w);
            c.mergeValidEvaluated(f, w);
          },
          () => l.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = i, e.default = o;
  }(ps)), ps;
}
var Jn = {}, nu;
function t$() {
  if (nu) return Jn;
  nu = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), n = {
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
      const d = s.name("valid");
      s.forIn("key", i, (l) => {
        o.setParams({ propertyName: l }), o.subschema({
          keyword: "propertyNames",
          data: l,
          dataTypes: ["string"],
          propertyName: l,
          compositeRule: !0
        }, d), s.if((0, e.not)(d), () => {
          o.error(!0), c.allErrors || s.break();
        });
      }), o.ok(d);
    }
  };
  return Jn.default = n, Jn;
}
var Gn = {}, ou;
function nd() {
  if (ou) return Gn;
  ou = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ fe(), s = {
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
      const { gen: i, schema: c, parentSchema: d, data: l, errsCount: v, it: $ } = a;
      if (!v)
        throw new Error("ajv implementation error");
      const { allErrors: y, opts: w } = $;
      if ($.props = !0, w.removeAdditional !== "all" && (0, n.alwaysValidSchema)($, c))
        return;
      const b = (0, e.allSchemaProperties)(d.properties), f = (0, e.allSchemaProperties)(d.patternProperties);
      m(), a.ok((0, t._)`${v} === ${r.default.errors}`);
      function m() {
        i.forIn("key", l, (g) => {
          !b.length && !f.length ? S(g) : i.if(u(g), () => S(g));
        });
      }
      function u(g) {
        let E;
        if (b.length > 8) {
          const I = (0, n.schemaRefOrVal)($, d.properties, "properties");
          E = (0, e.isOwnProperty)(i, I, g);
        } else b.length ? E = (0, t.or)(...b.map((I) => (0, t._)`${g} === ${I}`)) : E = t.nil;
        return f.length && (E = (0, t.or)(E, ...f.map((I) => (0, t._)`${(0, e.usePattern)(a, I)}.test(${g})`))), (0, t.not)(E);
      }
      function _(g) {
        i.code((0, t._)`delete ${l}[${g}]`);
      }
      function S(g) {
        if (w.removeAdditional === "all" || w.removeAdditional && c === !1) {
          _(g);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: g }), a.error(), y || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)($, c)) {
          const E = i.name("valid");
          w.removeAdditional === "failing" ? (h(g, E, !1), i.if((0, t.not)(E), () => {
            a.reset(), _(g);
          })) : (h(g, E), y || i.if((0, t.not)(E), () => i.break()));
        }
      }
      function h(g, E, I) {
        const z = {
          keyword: "additionalProperties",
          dataProp: g,
          dataPropType: n.Type.Str
        };
        I === !1 && Object.assign(z, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(z, E);
      }
    }
  };
  return Gn.default = s, Gn;
}
var Wn = {}, su;
function r$() {
  if (su) return Wn;
  su = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zo(), t = /* @__PURE__ */ dt(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ nd(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, parentSchema: c, data: d, it: l } = s;
      l.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(l, n.default, "additionalProperties"));
      const v = (0, t.allSchemaProperties)(i);
      for (const f of v)
        l.definedProperties.add(f);
      l.opts.unevaluated && v.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(v), l.props));
      const $ = v.filter((f) => !(0, r.alwaysValidSchema)(l, i[f]));
      if ($.length === 0)
        return;
      const y = a.name("valid");
      for (const f of $)
        w(f) ? b(f) : (a.if((0, t.propertyInData)(a, d, f, l.opts.ownProperties)), b(f), l.allErrors || a.else().var(y, !0), a.endIf()), s.it.definedProperties.add(f), s.ok(y);
      function w(f) {
        return l.opts.useDefaults && !l.compositeRule && i[f].default !== void 0;
      }
      function b(f) {
        s.subschema({
          keyword: "properties",
          schemaProp: f,
          dataProp: f
        }, y);
      }
    }
  };
  return Wn.default = o, Wn;
}
var Bn = {}, au;
function n$() {
  if (au) return Bn;
  au = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ fe(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: d, it: l } = s, { opts: v } = l, $ = (0, e.allSchemaProperties)(i), y = $.filter((S) => (0, r.alwaysValidSchema)(l, i[S]));
      if ($.length === 0 || y.length === $.length && (!l.opts.unevaluated || l.props === !0))
        return;
      const w = v.strictSchema && !v.allowMatchingProperties && d.properties, b = a.name("valid");
      l.props !== !0 && !(l.props instanceof t.Name) && (l.props = (0, n.evaluatedPropsToName)(a, l.props));
      const { props: f } = l;
      m();
      function m() {
        for (const S of $)
          w && u(S), l.allErrors ? _(S) : (a.var(b, !0), _(S), a.if(b));
      }
      function u(S) {
        for (const h in w)
          new RegExp(S).test(h) && (0, r.checkStrictMode)(l, `property ${h} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function _(S) {
        a.forIn("key", c, (h) => {
          a.if((0, t._)`${(0, e.usePattern)(s, S)}.test(${h})`, () => {
            const g = y.includes(S);
            g || s.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: h,
              dataPropType: n.Type.Str
            }, b), l.opts.unevaluated && f !== !0 ? a.assign((0, t._)`${f}[${h}]`, !0) : !g && !l.allErrors && a.if((0, t.not)(b), () => a.break());
          });
        });
      }
    }
  };
  return Bn.default = o, Bn;
}
var Qn = {}, iu;
function o$() {
  if (iu) return Qn;
  iu = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fe(), t = {
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
  return Qn.default = t, Qn;
}
var Yn = {}, cu;
function s$() {
  if (cu) return Yn;
  cu = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ dt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Yn.default = t, Yn;
}
var Xn = {}, uu;
function a$() {
  if (uu) return Xn;
  uu = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), n = {
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
      const d = a, l = s.let("valid", !1), v = s.let("passing", null), $ = s.name("_valid");
      o.setParams({ passing: v }), s.block(y), o.result(l, () => o.reset(), () => o.error(!0));
      function y() {
        d.forEach((w, b) => {
          let f;
          (0, t.alwaysValidSchema)(c, w) ? s.var($, !0) : f = o.subschema({
            keyword: "oneOf",
            schemaProp: b,
            compositeRule: !0
          }, $), b > 0 && s.if((0, e._)`${$} && ${l}`).assign(l, !1).assign(v, (0, e._)`[${v}, ${b}]`).else(), s.if($, () => {
            s.assign(l, !0), s.assign(v, b), f && o.mergeEvaluated(f, e.Name);
          });
        });
      }
    }
  };
  return Xn.default = n, Xn;
}
var eo = {}, lu;
function i$() {
  if (lu) return eo;
  lu = 1, Object.defineProperty(eo, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fe(), t = {
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
        const d = r.subschema({ keyword: "allOf", schemaProp: c }, a);
        r.ok(a), r.mergeEvaluated(d);
      });
    }
  };
  return eo.default = t, eo;
}
var to = {}, du;
function c$() {
  if (du) return to;
  du = 1, Object.defineProperty(to, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), n = {
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
      const d = o(c, "then"), l = o(c, "else");
      if (!d && !l)
        return;
      const v = a.let("valid", !0), $ = a.name("_valid");
      if (y(), s.reset(), d && l) {
        const b = a.let("ifClause");
        s.setParams({ ifClause: b }), a.if($, w("then", b), w("else", b));
      } else d ? a.if($, w("then")) : a.if((0, e.not)($), w("else"));
      s.pass(v, () => s.error(!0));
      function y() {
        const b = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        s.mergeEvaluated(b);
      }
      function w(b, f) {
        return () => {
          const m = s.subschema({ keyword: b }, $);
          a.assign(v, $), s.mergeValidEvaluated(m, v), f ? a.assign(f, (0, e._)`${b}`) : s.setParams({ ifClause: b });
        };
      }
    }
  };
  function o(s, a) {
    const i = s.schema[a];
    return i !== void 0 && !(0, t.alwaysValidSchema)(s, i);
  }
  return to.default = n, to;
}
var ro = {}, fu;
function u$() {
  if (fu) return ro;
  fu = 1, Object.defineProperty(ro, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: n, it: o }) {
      n.if === void 0 && (0, e.checkStrictMode)(o, `"${r}" without "if" is ignored`);
    }
  };
  return ro.default = t, ro;
}
var hu;
function l$() {
  if (hu) return Zn;
  hu = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ td(), t = /* @__PURE__ */ Qv(), r = /* @__PURE__ */ rd(), n = /* @__PURE__ */ Yv(), o = /* @__PURE__ */ Xv(), s = /* @__PURE__ */ e$(), a = /* @__PURE__ */ t$(), i = /* @__PURE__ */ nd(), c = /* @__PURE__ */ r$(), d = /* @__PURE__ */ n$(), l = /* @__PURE__ */ o$(), v = /* @__PURE__ */ s$(), $ = /* @__PURE__ */ a$(), y = /* @__PURE__ */ i$(), w = /* @__PURE__ */ c$(), b = /* @__PURE__ */ u$();
  function f(m = !1) {
    const u = [
      // any
      l.default,
      v.default,
      $.default,
      y.default,
      w.default,
      b.default,
      // object
      a.default,
      i.default,
      s.default,
      c.default,
      d.default
    ];
    return m ? u.push(t.default, n.default) : u.push(e.default, r.default), u.push(o.default), u;
  }
  return Zn.default = f, Zn;
}
var no = {}, oo = {}, pu;
function d$() {
  if (pu) return oo;
  pu = 1, Object.defineProperty(oo, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, o) {
      const { gen: s, data: a, $data: i, schema: c, schemaCode: d, it: l } = n, { opts: v, errSchemaPath: $, schemaEnv: y, self: w } = l;
      if (!v.validateFormats)
        return;
      i ? b() : f();
      function b() {
        const m = s.scopeValue("formats", {
          ref: w.formats,
          code: v.code.formats
        }), u = s.const("fDef", (0, e._)`${m}[${d}]`), _ = s.let("fType"), S = s.let("format");
        s.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => s.assign(_, (0, e._)`${u}.type || "string"`).assign(S, (0, e._)`${u}.validate`), () => s.assign(_, (0, e._)`"string"`).assign(S, u)), n.fail$data((0, e.or)(h(), g()));
        function h() {
          return v.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${S}`;
        }
        function g() {
          const E = y.$async ? (0, e._)`(${u}.async ? await ${S}(${a}) : ${S}(${a}))` : (0, e._)`${S}(${a})`, I = (0, e._)`(typeof ${S} == "function" ? ${E} : ${S}.test(${a}))`;
          return (0, e._)`${S} && ${S} !== true && ${_} === ${o} && !${I}`;
        }
      }
      function f() {
        const m = w.formats[c];
        if (!m) {
          h();
          return;
        }
        if (m === !0)
          return;
        const [u, _, S] = g(m);
        u === o && n.pass(E());
        function h() {
          if (v.strictSchema === !1) {
            w.logger.warn(I());
            return;
          }
          throw new Error(I());
          function I() {
            return `unknown format "${c}" ignored in schema at path "${$}"`;
          }
        }
        function g(I) {
          const z = I instanceof RegExp ? (0, e.regexpCode)(I) : v.code.formats ? (0, e._)`${v.code.formats}${(0, e.getProperty)(c)}` : void 0, U = s.scopeValue("formats", { key: c, ref: I, code: z });
          return typeof I == "object" && !(I instanceof RegExp) ? [I.type || "string", I.validate, (0, e._)`${U}.validate`] : ["string", I, U];
        }
        function E() {
          if (typeof m == "object" && !(m instanceof RegExp) && m.async) {
            if (!y.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${a})`;
          }
          return typeof _ == "function" ? (0, e._)`${S}(${a})` : (0, e._)`${S}.test(${a})`;
        }
      }
    }
  };
  return oo.default = r, oo;
}
var mu;
function f$() {
  if (mu) return no;
  mu = 1, Object.defineProperty(no, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ d$()).default];
  return no.default = t, no;
}
var Ut = {}, _u;
function h$() {
  return _u || (_u = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.contentVocabulary = Ut.metadataVocabulary = void 0, Ut.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ut.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ut;
}
var yu;
function p$() {
  if (yu) return Tn;
  yu = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Dv(), t = /* @__PURE__ */ Bv(), r = /* @__PURE__ */ l$(), n = /* @__PURE__ */ f$(), o = /* @__PURE__ */ h$(), s = [
    e.default,
    t.default,
    (0, r.default)(),
    n.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return Tn.default = s, Tn;
}
var so = {}, _r = {}, gu;
function m$() {
  if (gu) return _r;
  gu = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (_r.DiscrError = e = {})), _r;
}
var vu;
function _$() {
  if (vu) return so;
  vu = 1, Object.defineProperty(so, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ m$(), r = /* @__PURE__ */ Sa(), n = /* @__PURE__ */ Ho(), o = /* @__PURE__ */ fe(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: d } }) => (0, e._)`{error: ${i}, tag: ${d}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: d, schema: l, parentSchema: v, it: $ } = i, { oneOf: y } = v;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = l.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (l.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!y)
        throw new Error("discriminator: requires oneOf keyword");
      const b = c.let("valid", !1), f = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${f} == "string"`, () => m(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: f, tagName: w })), i.ok(b);
      function m() {
        const S = _();
        c.if(!1);
        for (const h in S)
          c.elseIf((0, e._)`${f} === ${h}`), c.assign(b, u(S[h]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: f, tagName: w }), c.endIf();
      }
      function u(S) {
        const h = c.name("valid"), g = i.subschema({ keyword: "oneOf", schemaProp: S }, h);
        return i.mergeEvaluated(g, e.Name), h;
      }
      function _() {
        var S;
        const h = {}, g = I(v);
        let E = !0;
        for (let A = 0; A < y.length; A++) {
          let L = y[A];
          if (L != null && L.$ref && !(0, o.schemaHasRulesButRef)(L, $.self.RULES)) {
            const x = L.$ref;
            if (L = r.resolveRef.call($.self, $.schemaEnv.root, $.baseId, x), L instanceof r.SchemaEnv && (L = L.schema), L === void 0)
              throw new n.default($.opts.uriResolver, $.baseId, x);
          }
          const Z = (S = L == null ? void 0 : L.properties) === null || S === void 0 ? void 0 : S[w];
          if (typeof Z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          E = E && (g || I(L)), z(Z, A);
        }
        if (!E)
          throw new Error(`discriminator: "${w}" must be required`);
        return h;
        function I({ required: A }) {
          return Array.isArray(A) && A.includes(w);
        }
        function z(A, L) {
          if (A.const)
            U(A.const, L);
          else if (A.enum)
            for (const Z of A.enum)
              U(Z, L);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function U(A, L) {
          if (typeof A != "string" || A in h)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          h[A] = L;
        }
      }
    }
  };
  return so.default = a, so;
}
const y$ = "http://json-schema.org/draft-07/schema#", g$ = "http://json-schema.org/draft-07/schema#", v$ = "Core schema meta-schema", $$ = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, w$ = ["object", "boolean"], b$ = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, S$ = {
  $schema: y$,
  $id: g$,
  title: v$,
  definitions: $$,
  type: w$,
  properties: b$,
  default: !0
};
var $u;
function E$() {
  return $u || ($u = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = /* @__PURE__ */ zv(), n = /* @__PURE__ */ p$(), o = /* @__PURE__ */ _$(), s = S$, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
    class c extends r.default {
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const w = this.opts.$data ? this.$dataMetaSchema(s, a) : s;
        this.addMetaSchema(w, i, !1), this.refs["http://json-schema.org/schema"] = i;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var d = /* @__PURE__ */ Zo();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
    } });
    var l = /* @__PURE__ */ ae();
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
    var v = /* @__PURE__ */ ba();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return v.default;
    } });
    var $ = /* @__PURE__ */ Ho();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  }(bn, bn.exports)), bn.exports;
}
var wu;
function k$() {
  return wu || (wu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ E$(), r = /* @__PURE__ */ ae(), n = r.operators, o = {
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
        const { gen: c, data: d, schemaCode: l, keyword: v, it: $ } = i, { opts: y, self: w } = $;
        if (!y.validateFormats)
          return;
        const b = new t.KeywordCxt($, w.RULES.all.format.definition, "format");
        b.$data ? f() : m();
        function f() {
          const _ = c.scopeValue("formats", {
            ref: w.formats,
            code: y.code.formats
          }), S = c.const("fmt", (0, r._)`${_}[${b.schemaCode}]`);
          i.fail$data((0, r.or)((0, r._)`typeof ${S} != "object"`, (0, r._)`${S} instanceof RegExp`, (0, r._)`typeof ${S}.compare != "function"`, u(S)));
        }
        function m() {
          const _ = b.schema, S = w.formats[_];
          if (!S || S === !0)
            return;
          if (typeof S != "object" || S instanceof RegExp || typeof S.compare != "function")
            throw new Error(`"${v}": format "${_}" does not define "compare" function`);
          const h = c.scopeValue("formats", {
            key: _,
            ref: S,
            code: y.code.formats ? (0, r._)`${y.code.formats}${(0, r.getProperty)(_)}` : void 0
          });
          i.fail$data(u(h));
        }
        function u(_) {
          return (0, r._)`${_}.compare(${d}, ${l}) ${o[v].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (i) => (i.addKeyword(e.formatLimitDefinition), i);
    e.default = a;
  }(is)), is;
}
var bu;
function P$() {
  return bu || (bu = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = wv(), n = k$(), o = /* @__PURE__ */ ae(), s = new o.Name("fullFormats"), a = new o.Name("fastFormats"), i = (d, l = { keywords: !0 }) => {
      if (Array.isArray(l))
        return c(d, l, r.fullFormats, s), d;
      const [v, $] = l.mode === "fast" ? [r.fastFormats, a] : [r.fullFormats, s], y = l.formats || r.formatNames;
      return c(d, y, v, $), l.keywords && (0, n.default)(d), d;
    };
    i.get = (d, l = "full") => {
      const $ = (l === "fast" ? r.fastFormats : r.fullFormats)[d];
      if (!$)
        throw new Error(`Unknown format "${d}"`);
      return $;
    };
    function c(d, l, v, $) {
      var y, w;
      (y = (w = d.opts.code).formats) !== null && y !== void 0 || (w.formats = (0, o._)`require("ajv-formats/dist/formats").${$}`);
      for (const b of l)
        d.addFormat(b, v[b]);
    }
    e.exports = t = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
  }(wn, wn.exports)), wn.exports;
}
var T$ = P$();
const R$ = /* @__PURE__ */ Iu(T$);
function O$() {
  const e = new $v({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return R$(e), e;
}
class I$ {
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
    this._ajv = t ?? O$();
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
class C$ {
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
  async *callToolStream(t, r = zo, n) {
    const o = this._client, s = {
      ...n,
      // We check if the tool is known to be a task during auto-configuration, but assume
      // the caller knows what they're doing if they pass this explicitly
      task: (n == null ? void 0 : n.task) ?? (o.isToolTask(t.name) ? {} : void 0)
    }, a = o.requestStream({ method: "tools/call", params: t }, r, s), i = o.getToolOutputValidator(t.name);
    for await (const c of a) {
      if (c.type === "result" && i) {
        const d = c.result;
        if (!d.structuredContent && !d.isError) {
          yield {
            type: "error",
            error: new re(ne.InvalidRequest, `Tool ${t.name} has an output schema but did not return structured content`)
          };
          return;
        }
        if (d.structuredContent)
          try {
            const l = i(d.structuredContent);
            if (!l.valid) {
              yield {
                type: "error",
                error: new re(ne.InvalidParams, `Structured content does not match the tool's output schema: ${l.errorMessage}`)
              };
              return;
            }
          } catch (l) {
            if (l instanceof re) {
              yield { type: "error", error: l };
              return;
            }
            yield {
              type: "error",
              error: new re(ne.InvalidParams, `Failed to validate structured content: ${l instanceof Error ? l.message : String(l)}`)
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
function N$(e, t, r) {
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
function j$(e, t, r) {
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
function io(e, t) {
  if (!(!e || t === null || typeof t != "object")) {
    if (e.type === "object" && e.properties && typeof e.properties == "object") {
      const r = t, n = e.properties;
      for (const o of Object.keys(n)) {
        const s = n[o];
        r[o] === void 0 && Object.prototype.hasOwnProperty.call(s, "default") && (r[o] = s.default), r[o] !== void 0 && io(s, r[o]);
      }
    }
    if (Array.isArray(e.anyOf))
      for (const r of e.anyOf)
        typeof r != "boolean" && io(r, t);
    if (Array.isArray(e.oneOf))
      for (const r of e.oneOf)
        typeof r != "boolean" && io(r, t);
  }
}
function q$(e) {
  if (!e)
    return { supportsFormMode: !1, supportsUrlMode: !1 };
  const t = e.form !== void 0, r = e.url !== void 0;
  return { supportsFormMode: t || !t && !r, supportsUrlMode: r };
}
class z$ extends hg {
  /**
   * Initializes this client with the given name and version information.
   */
  constructor(t, r) {
    super(r), this._clientInfo = t, this._cachedToolOutputValidators = /* @__PURE__ */ new Map(), this._cachedKnownTaskTools = /* @__PURE__ */ new Set(), this._cachedRequiredTaskTools = /* @__PURE__ */ new Set(), this._listChangedDebounceTimers = /* @__PURE__ */ new Map(), this._capabilities = (r == null ? void 0 : r.capabilities) ?? {}, this._jsonSchemaValidator = (r == null ? void 0 : r.jsonSchemaValidator) ?? new I$(), r != null && r.listChanged && (this._pendingListChangedConfig = r.listChanged);
  }
  /**
   * Set up handlers for list changed notifications based on config and server capabilities.
   * This should only be called after initialization when server capabilities are known.
   * Handlers are silently skipped if the server doesn't advertise the corresponding listChanged capability.
   * @internal
   */
  _setupListChangedHandlers(t) {
    var r, n, o, s, a, i;
    t.tools && ((n = (r = this._serverCapabilities) == null ? void 0 : r.tools) != null && n.listChanged) && this._setupListChangedHandler("tools", Dl, t.tools, async () => (await this.listTools()).tools), t.prompts && ((s = (o = this._serverCapabilities) == null ? void 0 : o.prompts) != null && s.listChanged) && this._setupListChangedHandler("prompts", Ml, t.prompts, async () => (await this.listPrompts()).prompts), t.resources && ((i = (a = this._serverCapabilities) == null ? void 0 : a.resources) != null && i.listChanged) && this._setupListChangedHandler("resources", jl, t.resources, async () => (await this.listResources()).resources);
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
      tasks: new C$(this)
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
    this._capabilities = pg(this._capabilities, t);
  }
  /**
   * Override request handler registration to enforce client-side validation for elicitation.
   */
  setRequestHandler(t, r) {
    var i;
    const n = al(t), o = n == null ? void 0 : n.method;
    if (!o)
      throw new Error("Schema is missing a method literal");
    let s;
    if (Co(o)) {
      const c = o, d = (i = c._zod) == null ? void 0 : i.def;
      s = (d == null ? void 0 : d.value) ?? c.value;
    } else {
      const c = o, d = c._def;
      s = (d == null ? void 0 : d.value) ?? c.value;
    }
    if (typeof s != "string")
      throw new Error("Schema method literal must be a string");
    const a = s;
    if (a === "elicitation/create") {
      const c = async (d, l) => {
        var _, S;
        const v = bt(Zl, d);
        if (!v.success) {
          const h = v.error instanceof Error ? v.error.message : String(v.error);
          throw new re(ne.InvalidParams, `Invalid elicitation request: ${h}`);
        }
        const { params: $ } = v.data;
        $.mode = $.mode ?? "form";
        const { supportsFormMode: y, supportsUrlMode: w } = q$(this._capabilities.elicitation);
        if ($.mode === "form" && !y)
          throw new re(ne.InvalidParams, "Client does not support form-mode elicitation requests");
        if ($.mode === "url" && !w)
          throw new re(ne.InvalidParams, "Client does not support URL-mode elicitation requests");
        const b = await Promise.resolve(r(d, l));
        if ($.task) {
          const h = bt(Pr, b);
          if (!h.success) {
            const g = h.error instanceof Error ? h.error.message : String(h.error);
            throw new re(ne.InvalidParams, `Invalid task creation result: ${g}`);
          }
          return h.data;
        }
        const f = bt(Hl, b);
        if (!f.success) {
          const h = f.error instanceof Error ? f.error.message : String(f.error);
          throw new re(ne.InvalidParams, `Invalid elicitation result: ${h}`);
        }
        const m = f.data, u = $.mode === "form" ? $.requestedSchema : void 0;
        if ($.mode === "form" && m.action === "accept" && m.content && u && (S = (_ = this._capabilities.elicitation) == null ? void 0 : _.form) != null && S.applyDefaults)
          try {
            io(u, m.content);
          } catch {
          }
        return m;
      };
      return super.setRequestHandler(t, c);
    }
    if (a === "sampling/createMessage") {
      const c = async (d, l) => {
        const v = bt(Vl, d);
        if (!v.success) {
          const m = v.error instanceof Error ? v.error.message : String(v.error);
          throw new re(ne.InvalidParams, `Invalid sampling request: ${m}`);
        }
        const { params: $ } = v.data, y = await Promise.resolve(r(d, l));
        if ($.task) {
          const m = bt(Pr, y);
          if (!m.success) {
            const u = m.error instanceof Error ? m.error.message : String(m.error);
            throw new re(ne.InvalidParams, `Invalid task creation result: ${u}`);
          }
          return m.data;
        }
        const b = $.tools || $.toolChoice ? Fl : Ll, f = bt(b, y);
        if (!f.success) {
          const m = f.error instanceof Error ? f.error.message : String(f.error);
          throw new re(ne.InvalidParams, `Invalid sampling result: ${m}`);
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
            protocolVersion: No,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo
          }
        }, El, r);
        if (n === void 0)
          throw new Error(`Server sent invalid initialize result: ${n}`);
        if (!q_.includes(n.protocolVersion))
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
    N$((n = (r = this._serverCapabilities) == null ? void 0 : r.tasks) == null ? void 0 : n.requests, t, "Server");
  }
  assertTaskHandlerCapability(t) {
    var r;
    this._capabilities && j$((r = this._capabilities.tasks) == null ? void 0 : r.requests, t, "Client");
  }
  async ping(t) {
    return this.request({ method: "ping" }, er, t);
  }
  async complete(t, r) {
    return this.request({ method: "completion/complete", params: t }, Kl, r);
  }
  async setLoggingLevel(t, r) {
    return this.request({ method: "logging/setLevel", params: { level: t } }, er, r);
  }
  async getPrompt(t, r) {
    return this.request({ method: "prompts/get", params: t }, zl, r);
  }
  async listPrompts(t, r) {
    return this.request({ method: "prompts/list", params: t }, ql, r);
  }
  async listResources(t, r) {
    return this.request({ method: "resources/list", params: t }, Il, r);
  }
  async listResourceTemplates(t, r) {
    return this.request({ method: "resources/templates/list", params: t }, Cl, r);
  }
  async readResource(t, r) {
    return this.request({ method: "resources/read", params: t }, Nl, r);
  }
  async subscribeResource(t, r) {
    return this.request({ method: "resources/subscribe", params: t }, er, r);
  }
  async unsubscribeResource(t, r) {
    return this.request({ method: "resources/unsubscribe", params: t }, er, r);
  }
  /**
   * Calls a tool and waits for the result. Automatically validates structured output if the tool has an outputSchema.
   *
   * For task-based execution with streaming behavior, use client.experimental.tasks.callToolStream() instead.
   */
  async callTool(t, r = zo, n) {
    if (this.isToolTaskRequired(t.name))
      throw new re(ne.InvalidRequest, `Tool "${t.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`);
    const o = await this.request({ method: "tools/call", params: t }, r, n), s = this.getToolOutputValidator(t.name);
    if (s) {
      if (!o.structuredContent && !o.isError)
        throw new re(ne.InvalidRequest, `Tool ${t.name} has an output schema but did not return structured content`);
      if (o.structuredContent)
        try {
          const a = s(o.structuredContent);
          if (!a.valid)
            throw new re(ne.InvalidParams, `Structured content does not match the tool's output schema: ${a.errorMessage}`);
        } catch (a) {
          throw a instanceof re ? a : new re(ne.InvalidParams, `Failed to validate structured content: ${a instanceof Error ? a.message : String(a)}`);
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
    const n = await this.request({ method: "tools/list", params: t }, ga, r);
    return this.cacheToolMetadata(n.tools), n;
  }
  /**
   * Set up a single list changed handler.
   * @internal
   */
  _setupListChangedHandler(t, r, n, o) {
    const s = Ry.safeParse(n);
    if (!s.success)
      throw new Error(`Invalid ${t} listChanged options: ${s.error.message}`);
    if (typeof n.onChanged != "function")
      throw new Error(`Invalid ${t} listChanged options: onChanged must be a function`);
    const { autoRefresh: a, debounceMs: i } = s.data, { onChanged: c } = n, d = async () => {
      if (!a) {
        c(null, null);
        return;
      }
      try {
        const v = await o();
        c(null, v);
      } catch (v) {
        const $ = v instanceof Error ? v : new Error(String(v));
        c($, null);
      }
    }, l = () => {
      if (i) {
        const v = this._listChangedDebounceTimers.get(t);
        v && clearTimeout(v);
        const $ = setTimeout(d, i);
        this._listChangedDebounceTimers.set(t, $);
      } else
        d();
    };
    this.setNotificationHandler(r, l);
  }
  async sendRootsListChanged() {
    return this.notification({ method: "notifications/roots/list_changed" });
  }
}
let ka;
ka = globalThis.crypto;
async function M$(e) {
  return (await ka).getRandomValues(new Uint8Array(e));
}
async function A$(e) {
  const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~", r = Math.pow(2, 8) - Math.pow(2, 8) % t.length;
  let n = "";
  for (; n.length < e; ) {
    const o = await M$(e - n.length);
    for (const s of o)
      s < r && (n += t[s % t.length]);
  }
  return n;
}
async function D$(e) {
  return await A$(e);
}
async function U$(e) {
  const t = await (await ka).subtle.digest("SHA-256", new TextEncoder().encode(e));
  return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function V$(e) {
  if (e || (e = 43), e < 43 || e > 128)
    throw `Expected a length between 43 and 128. Received ${e}.`;
  const t = await D$(e), r = await U$(t);
  return {
    code_verifier: t,
    code_challenge: r
  };
}
const Le = Vm().superRefine((e, t) => {
  if (!URL.canParse(e))
    return t.addIssue({
      code: N_.custom,
      message: "URL must be parseable",
      fatal: !0
    }), Fd;
}).refine((e) => {
  const t = new URL(e);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), L$ = Fe({
  resource: q().url(),
  authorization_servers: G(Le).optional(),
  jwks_uri: q().url().optional(),
  scopes_supported: G(q()).optional(),
  bearer_methods_supported: G(q()).optional(),
  resource_signing_alg_values_supported: G(q()).optional(),
  resource_name: q().optional(),
  resource_documentation: q().optional(),
  resource_policy_uri: q().url().optional(),
  resource_tos_uri: q().url().optional(),
  tls_client_certificate_bound_access_tokens: Se().optional(),
  authorization_details_types_supported: G(q()).optional(),
  dpop_signing_alg_values_supported: G(q()).optional(),
  dpop_bound_access_tokens_required: Se().optional()
}), od = Fe({
  issuer: q(),
  authorization_endpoint: Le,
  token_endpoint: Le,
  registration_endpoint: Le.optional(),
  scopes_supported: G(q()).optional(),
  response_types_supported: G(q()),
  response_modes_supported: G(q()).optional(),
  grant_types_supported: G(q()).optional(),
  token_endpoint_auth_methods_supported: G(q()).optional(),
  token_endpoint_auth_signing_alg_values_supported: G(q()).optional(),
  service_documentation: Le.optional(),
  revocation_endpoint: Le.optional(),
  revocation_endpoint_auth_methods_supported: G(q()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: G(q()).optional(),
  introspection_endpoint: q().optional(),
  introspection_endpoint_auth_methods_supported: G(q()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: G(q()).optional(),
  code_challenge_methods_supported: G(q()).optional(),
  client_id_metadata_document_supported: Se().optional()
}), F$ = Fe({
  issuer: q(),
  authorization_endpoint: Le,
  token_endpoint: Le,
  userinfo_endpoint: Le.optional(),
  jwks_uri: Le,
  registration_endpoint: Le.optional(),
  scopes_supported: G(q()).optional(),
  response_types_supported: G(q()),
  response_modes_supported: G(q()).optional(),
  grant_types_supported: G(q()).optional(),
  acr_values_supported: G(q()).optional(),
  subject_types_supported: G(q()),
  id_token_signing_alg_values_supported: G(q()),
  id_token_encryption_alg_values_supported: G(q()).optional(),
  id_token_encryption_enc_values_supported: G(q()).optional(),
  userinfo_signing_alg_values_supported: G(q()).optional(),
  userinfo_encryption_alg_values_supported: G(q()).optional(),
  userinfo_encryption_enc_values_supported: G(q()).optional(),
  request_object_signing_alg_values_supported: G(q()).optional(),
  request_object_encryption_alg_values_supported: G(q()).optional(),
  request_object_encryption_enc_values_supported: G(q()).optional(),
  token_endpoint_auth_methods_supported: G(q()).optional(),
  token_endpoint_auth_signing_alg_values_supported: G(q()).optional(),
  display_values_supported: G(q()).optional(),
  claim_types_supported: G(q()).optional(),
  claims_supported: G(q()).optional(),
  service_documentation: q().optional(),
  claims_locales_supported: G(q()).optional(),
  ui_locales_supported: G(q()).optional(),
  claims_parameter_supported: Se().optional(),
  request_parameter_supported: Se().optional(),
  request_uri_parameter_supported: Se().optional(),
  require_request_uri_registration: Se().optional(),
  op_policy_uri: Le.optional(),
  op_tos_uri: Le.optional(),
  client_id_metadata_document_supported: Se().optional()
}), Z$ = W({
  ...F$.shape,
  ...od.pick({
    code_challenge_methods_supported: !0
  }).shape
}), H$ = W({
  access_token: q(),
  id_token: q().optional(),
  // Optional for OAuth 2.1, but necessary in OpenID Connect
  token_type: q(),
  expires_in: j_().optional(),
  scope: q().optional(),
  refresh_token: q().optional()
}).strip(), K$ = W({
  error: q(),
  error_description: q().optional(),
  error_uri: q().optional()
}), Su = Le.optional().or(X("").transform(() => {
})), x$ = W({
  redirect_uris: G(Le),
  token_endpoint_auth_method: q().optional(),
  grant_types: G(q()).optional(),
  response_types: G(q()).optional(),
  client_name: q().optional(),
  client_uri: Le.optional(),
  logo_uri: Su,
  scope: q().optional(),
  contacts: G(q()).optional(),
  tos_uri: Su,
  policy_uri: q().optional(),
  jwks_uri: Le.optional(),
  jwks: a_().optional(),
  software_id: q().optional(),
  software_version: q().optional(),
  software_statement: q().optional()
}).strip(), J$ = W({
  client_id: q(),
  client_secret: q().optional(),
  client_id_issued_at: me().optional(),
  client_secret_expires_at: me().optional()
}).strip(), G$ = x$.merge(J$);
W({
  error: q(),
  error_description: q().optional()
}).strip();
W({
  token: q(),
  token_type_hint: q().optional()
}).strip();
function W$(e) {
  const t = typeof e == "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function B$({ requestedResource: e, configuredResource: t }) {
  const r = typeof e == "string" ? new URL(e) : new URL(e.href), n = typeof t == "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== n.origin || r.pathname.length < n.pathname.length)
    return !1;
  const o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", s = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
  return o.startsWith(s);
}
class De extends Error {
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
class Ps extends De {
}
Ps.errorCode = "invalid_request";
class $o extends De {
}
$o.errorCode = "invalid_client";
class wo extends De {
}
wo.errorCode = "invalid_grant";
class bo extends De {
}
bo.errorCode = "unauthorized_client";
class Ts extends De {
}
Ts.errorCode = "unsupported_grant_type";
class Rs extends De {
}
Rs.errorCode = "invalid_scope";
class Os extends De {
}
Os.errorCode = "access_denied";
class ir extends De {
}
ir.errorCode = "server_error";
class Is extends De {
}
Is.errorCode = "temporarily_unavailable";
class Cs extends De {
}
Cs.errorCode = "unsupported_response_type";
class Ns extends De {
}
Ns.errorCode = "unsupported_token_type";
class js extends De {
}
js.errorCode = "invalid_token";
class qs extends De {
}
qs.errorCode = "method_not_allowed";
class zs extends De {
}
zs.errorCode = "too_many_requests";
class So extends De {
}
So.errorCode = "invalid_client_metadata";
class Ms extends De {
}
Ms.errorCode = "insufficient_scope";
class As extends De {
}
As.errorCode = "invalid_target";
const Q$ = {
  [Ps.errorCode]: Ps,
  [$o.errorCode]: $o,
  [wo.errorCode]: wo,
  [bo.errorCode]: bo,
  [Ts.errorCode]: Ts,
  [Rs.errorCode]: Rs,
  [Os.errorCode]: Os,
  [ir.errorCode]: ir,
  [Is.errorCode]: Is,
  [Cs.errorCode]: Cs,
  [Ns.errorCode]: Ns,
  [js.errorCode]: js,
  [qs.errorCode]: qs,
  [zs.errorCode]: zs,
  [So.errorCode]: So,
  [Ms.errorCode]: Ms,
  [As.errorCode]: As
};
class ut extends Error {
  constructor(t) {
    super(t ?? "Unauthorized");
  }
}
function Y$(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
const ms = "code", _s = "S256";
function X$(e, t) {
  const r = e.client_secret !== void 0;
  return t.length === 0 ? r ? "client_secret_post" : "none" : "token_endpoint_auth_method" in e && e.token_endpoint_auth_method && Y$(e.token_endpoint_auth_method) && t.includes(e.token_endpoint_auth_method) ? e.token_endpoint_auth_method : r && t.includes("client_secret_basic") ? "client_secret_basic" : r && t.includes("client_secret_post") ? "client_secret_post" : t.includes("none") ? "none" : r ? "client_secret_post" : "none";
}
function ew(e, t, r, n) {
  const { client_id: o, client_secret: s } = t;
  switch (e) {
    case "client_secret_basic":
      tw(o, s, r);
      return;
    case "client_secret_post":
      rw(o, s, n);
      return;
    case "none":
      nw(o, n);
      return;
    default:
      throw new Error(`Unsupported client authentication method: ${e}`);
  }
}
function tw(e, t, r) {
  if (!t)
    throw new Error("client_secret_basic authentication requires a client_secret");
  const n = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${n}`);
}
function rw(e, t, r) {
  r.set("client_id", e), t && r.set("client_secret", t);
}
function nw(e, t) {
  t.set("client_id", e);
}
async function sd(e) {
  const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
  try {
    const n = K$.parse(JSON.parse(r)), { error: o, error_description: s, error_uri: a } = n, i = Q$[o] || ir;
    return new i(s || "", a);
  } catch (n) {
    const o = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${n}. Raw body: ${r}`;
    return new ir(o);
  }
}
async function Ft(e, t) {
  var r, n;
  try {
    return await ys(e, t);
  } catch (o) {
    if (o instanceof $o || o instanceof bo)
      return await ((r = e.invalidateCredentials) == null ? void 0 : r.call(e, "all")), await ys(e, t);
    if (o instanceof wo)
      return await ((n = e.invalidateCredentials) == null ? void 0 : n.call(e, "tokens")), await ys(e, t);
    throw o;
  }
}
async function ys(e, { serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: o, fetchFn: s }) {
  var u, _, S, h, g;
  const a = await ((u = e.discoveryState) == null ? void 0 : u.call(e));
  let i, c, d, l = o;
  if (!l && (a != null && a.resourceMetadataUrl) && (l = new URL(a.resourceMetadataUrl)), a != null && a.authorizationServerUrl) {
    if (c = a.authorizationServerUrl, i = a.resourceMetadata, d = a.authorizationServerMetadata ?? await id(c, { fetchFn: s }), !i)
      try {
        i = await ad(t, { resourceMetadataUrl: l }, s);
      } catch {
      }
    (d !== a.authorizationServerMetadata || i !== a.resourceMetadata) && await ((_ = e.saveDiscoveryState) == null ? void 0 : _.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: d
    }));
  } else {
    const E = await lw(t, { resourceMetadataUrl: l, fetchFn: s });
    c = E.authorizationServerUrl, d = E.authorizationServerMetadata, i = E.resourceMetadata, await ((S = e.saveDiscoveryState) == null ? void 0 : S.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: d
    }));
  }
  const v = await sw(t, e, i);
  let $ = await Promise.resolve(e.clientInformation());
  if (!$) {
    if (r !== void 0)
      throw new Error("Existing OAuth client information is required when exchanging an authorization code");
    const E = (d == null ? void 0 : d.client_id_metadata_document_supported) === !0, I = e.clientMetadataUrl;
    if (I && !ow(I))
      throw new So(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${I}`);
    if (E && I)
      $ = {
        client_id: I
      }, await ((h = e.saveClientInformation) == null ? void 0 : h.call(e, $));
    else {
      if (!e.saveClientInformation)
        throw new Error("OAuth client information must be saveable for dynamic registration");
      const U = await mw(c, {
        metadata: d,
        clientMetadata: e.clientMetadata,
        fetchFn: s
      });
      await e.saveClientInformation(U), $ = U;
    }
  }
  const y = !e.redirectUrl;
  if (r !== void 0 || y) {
    const E = await pw(e, c, {
      metadata: d,
      resource: v,
      authorizationCode: r,
      fetchFn: s
    });
    return await e.saveTokens(E), "AUTHORIZED";
  }
  const w = await e.tokens();
  if (w != null && w.refresh_token)
    try {
      const E = await hw(c, {
        metadata: d,
        clientInformation: $,
        refreshToken: w.refresh_token,
        resource: v,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: s
      });
      return await e.saveTokens(E), "AUTHORIZED";
    } catch (E) {
      if (!(!(E instanceof De) || E instanceof ir)) throw E;
    }
  const b = e.state ? await e.state() : void 0, { authorizationUrl: f, codeVerifier: m } = await dw(c, {
    metadata: d,
    clientInformation: $,
    state: b,
    redirectUrl: e.redirectUrl,
    scope: n || ((g = i == null ? void 0 : i.scopes_supported) == null ? void 0 : g.join(" ")) || e.clientMetadata.scope,
    resource: v
  });
  return await e.saveCodeVerifier(m), await e.redirectToAuthorization(f), "REDIRECT";
}
function ow(e) {
  if (!e)
    return !1;
  try {
    const t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function sw(e, t, r) {
  const n = W$(e);
  if (t.validateResourceURL)
    return await t.validateResourceURL(n, r == null ? void 0 : r.resource);
  if (r) {
    if (!B$({ requestedResource: n, configuredResource: r.resource }))
      throw new Error(`Protected resource ${r.resource} does not match expected ${n} (or origin)`);
    return new URL(r.resource);
  }
}
function Eo(e) {
  const t = e.headers.get("WWW-Authenticate");
  if (!t)
    return {};
  const [r, n] = t.split(" ");
  if (r.toLowerCase() !== "bearer" || !n)
    return {};
  const o = gs(e, "resource_metadata") || void 0;
  let s;
  if (o)
    try {
      s = new URL(o);
    } catch {
    }
  const a = gs(e, "scope") || void 0, i = gs(e, "error") || void 0;
  return {
    resourceMetadataUrl: s,
    scope: a,
    error: i
  };
}
function gs(e, t) {
  const r = e.headers.get("WWW-Authenticate");
  if (!r)
    return null;
  const n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`), o = r.match(n);
  return o ? o[1] || o[2] : null;
}
async function ad(e, t, r = fetch) {
  var o, s;
  const n = await cw(e, "oauth-protected-resource", r, {
    protocolVersion: t == null ? void 0 : t.protocolVersion,
    metadataUrl: t == null ? void 0 : t.resourceMetadataUrl
  });
  if (!n || n.status === 404)
    throw await ((o = n == null ? void 0 : n.body) == null ? void 0 : o.cancel()), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!n.ok)
    throw await ((s = n.body) == null ? void 0 : s.cancel()), new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
  return L$.parse(await n.json());
}
async function Pa(e, t, r = fetch) {
  try {
    return await r(e, { headers: t });
  } catch (n) {
    if (n instanceof TypeError)
      return t ? Pa(e, void 0, r) : void 0;
    throw n;
  }
}
function aw(e, t = "", r = {}) {
  return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Eu(e, t, r = fetch) {
  return await Pa(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function iw(e, t) {
  return !e || e.status >= 400 && e.status < 500 && t !== "/";
}
async function cw(e, t, r, n) {
  const o = new URL(e), s = (n == null ? void 0 : n.protocolVersion) ?? No;
  let a;
  if (n != null && n.metadataUrl)
    a = new URL(n.metadataUrl);
  else {
    const c = aw(t, o.pathname);
    a = new URL(c, (n == null ? void 0 : n.metadataServerUrl) ?? o), a.search = o.search;
  }
  let i = await Eu(a, s, r);
  if (!(n != null && n.metadataUrl) && iw(i, o.pathname)) {
    const c = new URL(`/.well-known/${t}`, o);
    i = await Eu(c, s, r);
  }
  return i;
}
function uw(e) {
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
async function id(e, { fetchFn: t = fetch, protocolVersion: r = No } = {}) {
  var s;
  const n = {
    "MCP-Protocol-Version": r,
    Accept: "application/json"
  }, o = uw(e);
  for (const { url: a, type: i } of o) {
    const c = await Pa(a, n, t);
    if (c) {
      if (!c.ok) {
        if (await ((s = c.body) == null ? void 0 : s.cancel()), c.status >= 400 && c.status < 500)
          continue;
        throw new Error(`HTTP ${c.status} trying to load ${i === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${a}`);
      }
      return i === "oauth" ? od.parse(await c.json()) : Z$.parse(await c.json());
    }
  }
}
async function lw(e, t) {
  let r, n;
  try {
    r = await ad(e, { resourceMetadataUrl: t == null ? void 0 : t.resourceMetadataUrl }, t == null ? void 0 : t.fetchFn), r.authorization_servers && r.authorization_servers.length > 0 && (n = r.authorization_servers[0]);
  } catch {
  }
  n || (n = String(new URL("/", e)));
  const o = await id(n, { fetchFn: t == null ? void 0 : t.fetchFn });
  return {
    authorizationServerUrl: n,
    authorizationServerMetadata: o,
    resourceMetadata: r
  };
}
async function dw(e, { metadata: t, clientInformation: r, redirectUrl: n, scope: o, state: s, resource: a }) {
  let i;
  if (t) {
    if (i = new URL(t.authorization_endpoint), !t.response_types_supported.includes(ms))
      throw new Error(`Incompatible auth server: does not support response type ${ms}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(_s))
      throw new Error(`Incompatible auth server: does not support code challenge method ${_s}`);
  } else
    i = new URL("/authorize", e);
  const c = await V$(), d = c.code_verifier, l = c.code_challenge;
  return i.searchParams.set("response_type", ms), i.searchParams.set("client_id", r.client_id), i.searchParams.set("code_challenge", l), i.searchParams.set("code_challenge_method", _s), i.searchParams.set("redirect_uri", String(n)), s && i.searchParams.set("state", s), o && i.searchParams.set("scope", o), o != null && o.includes("offline_access") && i.searchParams.append("prompt", "consent"), a && i.searchParams.set("resource", a.href), { authorizationUrl: i, codeVerifier: d };
}
function fw(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r)
  });
}
async function cd(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: a }) {
  const i = t != null && t.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), c = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  });
  if (s && r.set("resource", s.href), o)
    await o(c, r, i, t);
  else if (n) {
    const l = (t == null ? void 0 : t.token_endpoint_auth_methods_supported) ?? [], v = X$(n, l);
    ew(v, n, c, r);
  }
  const d = await (a ?? fetch)(i, {
    method: "POST",
    headers: c,
    body: r
  });
  if (!d.ok)
    throw await sd(d);
  return H$.parse(await d.json());
}
async function hw(e, { metadata: t, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: a }) {
  const i = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: n
  }), c = await cd(e, {
    metadata: t,
    tokenRequestParams: i,
    clientInformation: r,
    addClientAuthentication: s,
    resource: o,
    fetchFn: a
  });
  return { refresh_token: n, ...c };
}
async function pw(e, t, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
  const a = e.clientMetadata.scope;
  let i;
  if (e.prepareTokenRequest && (i = await e.prepareTokenRequest(a)), !i) {
    if (!o)
      throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl)
      throw new Error("redirectUrl is required for authorization_code flow");
    const d = await e.codeVerifier();
    i = fw(o, d, e.redirectUrl);
  }
  const c = await e.clientInformation();
  return cd(t, {
    metadata: r,
    tokenRequestParams: i,
    clientInformation: c ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: n,
    fetchFn: s
  });
}
async function mw(e, { metadata: t, clientMetadata: r, fetchFn: n }) {
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
    throw await sd(s);
  return G$.parse(await s.json());
}
const ud = (...e) => (t) => e.reduce((r, n) => n(r), t), _w = (e) => (t) => (r, n) => e(t, r, n);
class ku extends Error {
  constructor(t, r) {
    super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function vs(e) {
}
function ld(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = vs, onError: r = vs, onRetry: n = vs, onComment: o } = e;
  let s = "", a = !0, i, c = "", d = "";
  function l(b) {
    const f = a ? b.replace(/^\xEF\xBB\xBF/, "") : b, [m, u] = yw(`${s}${f}`);
    for (const _ of m)
      v(_);
    s = u, a = !1;
  }
  function v(b) {
    if (b === "") {
      y();
      return;
    }
    if (b.startsWith(":")) {
      o && o(b.slice(b.startsWith(": ") ? 2 : 1));
      return;
    }
    const f = b.indexOf(":");
    if (f !== -1) {
      const m = b.slice(0, f), u = b[f + 1] === " " ? 2 : 1, _ = b.slice(f + u);
      $(m, _, b);
      return;
    }
    $(b, "", b);
  }
  function $(b, f, m) {
    switch (b) {
      case "event":
        d = f;
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
          new ku(`Invalid \`retry\` value: "${f}"`, {
            type: "invalid-retry",
            value: f,
            line: m
          })
        );
        break;
      default:
        r(
          new ku(
            `Unknown field "${b.length > 20 ? `${b.slice(0, 20)}…` : b}"`,
            { type: "unknown-field", field: b, value: f, line: m }
          )
        );
        break;
    }
  }
  function y() {
    c.length > 0 && t({
      id: i,
      event: d || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: c.endsWith(`
`) ? c.slice(0, -1) : c
    }), i = void 0, c = "", d = "";
  }
  function w(b = {}) {
    s && b.consume && v(s), a = !0, i = void 0, c = "", d = "", s = "";
  }
  return { feed: l, reset: w };
}
function yw(e) {
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
class Pu extends Event {
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
    return n(Tu(this), r);
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
    return t(Tu(this), r);
  }
}
function gw(e) {
  const t = globalThis.DOMException;
  return typeof t == "function" ? new t(e, "SyntaxError") : new SyntaxError(e);
}
function Ds(e) {
  return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(Ds).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${Ds(e.cause)}` : e.message : `${e}`;
}
function Tu(e) {
  return {
    type: e.type,
    message: e.message,
    code: e.code,
    defaultPrevented: e.defaultPrevented,
    cancelable: e.cancelable,
    timeStamp: e.timeStamp
  };
}
var dd = (e) => {
  throw TypeError(e);
}, Ta = (e, t, r) => t.has(e) || dd("Cannot " + r), ie = (e, t, r) => (Ta(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Me = (e, t, r) => t.has(e) ? dd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Te = (e, t, r, n) => (Ta(e, t, "write to private field"), t.set(e, r), r), vt = (e, t, r) => (Ta(e, t, "access private method"), r), We, Lt, Wt, co, ko, br, tr, Sr, St, Bt, nr, Qt, $r, ct, Us, Vs, Ls, Ru, Fs, Zs, wr, Hs, Ks;
class uo extends EventTarget {
  constructor(t, r) {
    var n, o;
    super(), Me(this, ct), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, Me(this, We), Me(this, Lt), Me(this, Wt), Me(this, co), Me(this, ko), Me(this, br), Me(this, tr), Me(this, Sr, null), Me(this, St), Me(this, Bt), Me(this, nr, null), Me(this, Qt, null), Me(this, $r, null), Me(this, Vs, async (s) => {
      var a;
      ie(this, Bt).reset();
      const { body: i, redirected: c, status: d, headers: l } = s;
      if (d === 204) {
        vt(this, ct, wr).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (c ? Te(this, Wt, new URL(s.url)) : Te(this, Wt, void 0), d !== 200) {
        vt(this, ct, wr).call(this, `Non-200 status code (${d})`, d);
        return;
      }
      if (!(l.get("content-type") || "").startsWith("text/event-stream")) {
        vt(this, ct, wr).call(this, 'Invalid content type, expected "text/event-stream"', d);
        return;
      }
      if (ie(this, We) === this.CLOSED)
        return;
      Te(this, We, this.OPEN);
      const v = new Event("open");
      if ((a = ie(this, $r)) == null || a.call(this, v), this.dispatchEvent(v), typeof i != "object" || !i || !("getReader" in i)) {
        vt(this, ct, wr).call(this, "Invalid response body, expected a web ReadableStream", d), this.close();
        return;
      }
      const $ = new TextDecoder(), y = i.getReader();
      let w = !0;
      do {
        const { done: b, value: f } = await y.read();
        f && ie(this, Bt).feed($.decode(f, { stream: !b })), b && (w = !1, ie(this, Bt).reset(), vt(this, ct, Hs).call(this));
      } while (w);
    }), Me(this, Ls, (s) => {
      Te(this, St, void 0), !(s.name === "AbortError" || s.type === "aborted") && vt(this, ct, Hs).call(this, Ds(s));
    }), Me(this, Fs, (s) => {
      typeof s.id == "string" && Te(this, Sr, s.id);
      const a = new MessageEvent(s.event || "message", {
        data: s.data,
        origin: ie(this, Wt) ? ie(this, Wt).origin : ie(this, Lt).origin,
        lastEventId: s.id || ""
      });
      ie(this, Qt) && (!s.event || s.event === "message") && ie(this, Qt).call(this, a), this.dispatchEvent(a);
    }), Me(this, Zs, (s) => {
      Te(this, br, s);
    }), Me(this, Ks, () => {
      Te(this, tr, void 0), ie(this, We) === this.CONNECTING && vt(this, ct, Us).call(this);
    });
    try {
      if (t instanceof URL)
        Te(this, Lt, t);
      else if (typeof t == "string")
        Te(this, Lt, new URL(t, vw()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw gw("An invalid or illegal string was specified");
    }
    Te(this, Bt, ld({
      onEvent: ie(this, Fs),
      onRetry: ie(this, Zs)
    })), Te(this, We, this.CONNECTING), Te(this, br, 3e3), Te(this, ko, (n = r == null ? void 0 : r.fetch) != null ? n : globalThis.fetch), Te(this, co, (o = r == null ? void 0 : r.withCredentials) != null ? o : !1), vt(this, ct, Us).call(this);
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
    return ie(this, We);
  }
  /**
   * Returns the URL providing the event stream.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/url)
   *
   * @public
   */
  get url() {
    return ie(this, Lt).href;
  }
  /**
   * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
   *
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/withCredentials)
   */
  get withCredentials() {
    return ie(this, co);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/error_event) */
  get onerror() {
    return ie(this, nr);
  }
  set onerror(t) {
    Te(this, nr, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/message_event) */
  get onmessage() {
    return ie(this, Qt);
  }
  set onmessage(t) {
    Te(this, Qt, t);
  }
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/EventSource/open_event) */
  get onopen() {
    return ie(this, $r);
  }
  set onopen(t) {
    Te(this, $r, t);
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
    ie(this, tr) && clearTimeout(ie(this, tr)), ie(this, We) !== this.CLOSED && (ie(this, St) && ie(this, St).abort(), Te(this, We, this.CLOSED), Te(this, St, void 0));
  }
}
We = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
Us = function() {
  Te(this, We, this.CONNECTING), Te(this, St, new AbortController()), ie(this, ko)(ie(this, Lt), vt(this, ct, Ru).call(this)).then(ie(this, Vs)).catch(ie(this, Ls));
}, Vs = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), /**
* Get request options for the `fetch()` request
*
* @returns The request options
* @internal
*/
Ru = function() {
  var e;
  const t = {
    // [spec] Let `corsAttributeState` be `Anonymous`…
    // [spec] …will have their mode set to "cors"…
    mode: "cors",
    redirect: "follow",
    headers: { Accept: "text/event-stream", ...ie(this, Sr) ? { "Last-Event-ID": ie(this, Sr) } : void 0 },
    cache: "no-store",
    signal: (e = ie(this, St)) == null ? void 0 : e.signal
  };
  return "window" in globalThis && (t.credentials = this.withCredentials ? "include" : "same-origin"), t;
}, Fs = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), /**
* Handles the process referred to in the EventSource specification as "failing a connection".
*
* @param error - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
wr = function(e, t) {
  var r;
  ie(this, We) !== this.CLOSED && Te(this, We, this.CLOSED);
  const n = new Pu("error", { code: t, message: e });
  (r = ie(this, nr)) == null || r.call(this, n), this.dispatchEvent(n);
}, /**
* Schedules a reconnection attempt against the EventSource endpoint.
*
* @param message - The error causing the connection to fail
* @param code - The HTTP status code, if available
* @internal
*/
Hs = function(e, t) {
  var r;
  if (ie(this, We) === this.CLOSED)
    return;
  Te(this, We, this.CONNECTING);
  const n = new Pu("error", { code: t, message: e });
  (r = ie(this, nr)) == null || r.call(this, n), this.dispatchEvent(n), Te(this, tr, setTimeout(ie(this, Ks), ie(this, br)));
}, Ks = /* @__PURE__ */ new WeakMap(), /**
* ReadyState representing an EventSource currently trying to connect
*
* @public
*/
uo.CONNECTING = 0, /**
* ReadyState representing an EventSource connection that is open (eg connected)
*
* @public
*/
uo.OPEN = 1, /**
* ReadyState representing an EventSource connection that is closed (eg disconnected)
*
* @public
*/
uo.CLOSED = 2;
function vw() {
  const e = "document" in globalThis ? globalThis.document : void 0;
  return e && typeof e == "object" && "baseURI" in e && typeof e.baseURI == "string" ? e.baseURI : void 0;
}
function Po(e) {
  return e ? e instanceof Headers ? Object.fromEntries(e.entries()) : Array.isArray(e) ? Object.fromEntries(e) : { ...e } : {};
}
function fd(e = fetch, t) {
  return t ? async (r, n) => {
    const o = {
      ...t,
      ...n,
      // Headers need special handling - merge instead of replace
      headers: n != null && n.headers ? { ...Po(t.headers), ...Po(n.headers) } : t.headers
    };
    return e(r, o);
  } : e;
}
class $w extends Error {
  constructor(t, r, n) {
    super(`SSE error: ${r}`), this.code = t, this.event = n;
  }
}
class ww {
  constructor(t, r) {
    this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = r == null ? void 0 : r.eventSourceInit, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = fd(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit);
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new ut("No auth provider");
    let t;
    try {
      t = await Ft(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (n) {
      throw (r = this.onerror) == null || r.call(this, n), n;
    }
    if (t !== "AUTHORIZED")
      throw new ut();
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
    const r = Po((n = this._requestInit) == null ? void 0 : n.headers);
    return new Headers({
      ...t,
      ...r
    });
  }
  _startOrAuth() {
    var r;
    const t = ((r = this == null ? void 0 : this._eventSourceInit) == null ? void 0 : r.fetch) ?? this._fetch ?? fetch;
    return new Promise((n, o) => {
      this._eventSource = new uo(this._url.href, {
        ...this._eventSourceInit,
        fetch: async (s, a) => {
          const i = await this._commonHeaders();
          i.set("Accept", "text/event-stream");
          const c = await t(s, {
            ...a,
            headers: i
          });
          if (c.status === 401 && c.headers.has("www-authenticate")) {
            const { resourceMetadataUrl: d, scope: l } = Eo(c);
            this._resourceMetadataUrl = d, this._scope = l;
          }
          return c;
        }
      }), this._abortController = new AbortController(), this._eventSource.onerror = (s) => {
        var i;
        if (s.code === 401 && this._authProvider) {
          this._authThenStart().then(n, o);
          return;
        }
        const a = new $w(s.code, s.message, s);
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
        var c, d;
        const a = s;
        let i;
        try {
          i = ao.parse(JSON.parse(a.data));
        } catch (l) {
          (c = this.onerror) == null || c.call(this, l);
          return;
        }
        (d = this.onmessage) == null || d.call(this, i);
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
      throw new ut("No auth provider");
    if (await Ft(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: t,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    }) !== "AUTHORIZED")
      throw new ut("Failed to authorize");
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
          const { resourceMetadataUrl: d, scope: l } = Eo(i);
          if (this._resourceMetadataUrl = d, this._scope = l, await Ft(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED")
            throw new ut();
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
class bw extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let o;
    super({
      start(s) {
        o = ld({
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
const Sw = {
  initialReconnectionDelay: 1e3,
  maxReconnectionDelay: 3e4,
  reconnectionDelayGrowFactor: 1.5,
  maxRetries: 2
};
class Gt extends Error {
  constructor(t, r) {
    super(`Streamable HTTP error: ${r}`), this.code = t;
  }
}
class Ew {
  constructor(t, r) {
    this._hasCompletedAuthFlow = !1, this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = fd(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit), this._sessionId = r == null ? void 0 : r.sessionId, this._reconnectionOptions = (r == null ? void 0 : r.reconnectionOptions) ?? Sw;
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new ut("No auth provider");
    let t;
    try {
      t = await Ft(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (n) {
      throw (r = this.onerror) == null || r.call(this, n), n;
    }
    if (t !== "AUTHORIZED")
      throw new ut();
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
    const r = Po((n = this._requestInit) == null ? void 0 : n.headers);
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
        throw new Gt(i.status, `Failed to open SSE stream: ${i.statusText}`);
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
      var l, v, $, y;
      try {
        const w = t.pipeThrough(new TextDecoderStream()).pipeThrough(new bw({
          onRetry: (m) => {
            this._serverRetryMs = m;
          }
        })).getReader();
        for (; ; ) {
          const { value: m, done: u } = await w.read();
          if (u)
            break;
          if (m.id && (a = m.id, i = !0, o == null || o(m.id)), !!m.data && (!m.event || m.event === "message"))
            try {
              const _ = ao.parse(JSON.parse(m.data));
              vr(_) && (c = !0, s !== void 0 && (_.id = s)), (l = this.onmessage) == null || l.call(this, _);
            } catch (_) {
              (v = this.onerror) == null || v.call(this, _);
            }
        }
        (n || i) && !c && this._abortController && !this._abortController.signal.aborted && this._scheduleReconnection({
          resumptionToken: a,
          onresumptiontoken: o,
          replayMessageId: s
        }, 0);
      } catch (w) {
        if (($ = this.onerror) == null || $.call(this, new Error(`SSE stream disconnected: ${w}`)), (n || i) && !c && this._abortController && !this._abortController.signal.aborted)
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
      throw new ut("No auth provider");
    if (await Ft(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: t,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    }) !== "AUTHORIZED")
      throw new ut("Failed to authorize");
  }
  async close() {
    var t, r;
    this._reconnectionTimeout && (clearTimeout(this._reconnectionTimeout), this._reconnectionTimeout = void 0), (t = this._abortController) == null || t.abort(), (r = this.onclose) == null || r.call(this);
  }
  async send(t, r) {
    var n, o, s, a, i, c;
    try {
      const { resumptionToken: d, onresumptiontoken: l } = r || {};
      if (d) {
        this._startOrAuthSse({ resumptionToken: d, replayMessageId: ks(t) ? t.id : void 0 }).catch((u) => {
          var _;
          return (_ = this.onerror) == null ? void 0 : _.call(this, u);
        });
        return;
      }
      const v = await this._commonHeaders();
      v.set("content-type", "application/json"), v.set("accept", "application/json, text/event-stream");
      const $ = {
        ...this._requestInit,
        method: "POST",
        headers: v,
        body: JSON.stringify(t),
        signal: (n = this._abortController) == null ? void 0 : n.signal
      }, y = await (this._fetch ?? fetch)(this._url, $), w = y.headers.get("mcp-session-id");
      if (w && (this._sessionId = w), !y.ok) {
        const u = await y.text().catch(() => null);
        if (y.status === 401 && this._authProvider) {
          if (this._hasCompletedAuthFlow)
            throw new Gt(401, "Server returned 401 after successful authentication");
          const { resourceMetadataUrl: _, scope: S } = Eo(y);
          if (this._resourceMetadataUrl = _, this._scope = S, await Ft(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED")
            throw new ut();
          return this._hasCompletedAuthFlow = !0, this.send(t);
        }
        if (y.status === 403 && this._authProvider) {
          const { resourceMetadataUrl: _, scope: S, error: h } = Eo(y);
          if (h === "insufficient_scope") {
            const g = y.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === g)
              throw new Gt(403, "Server returned 403 after trying upscoping");
            if (S && (this._scope = S), _ && (this._resourceMetadataUrl = _), this._lastUpscopingHeader = g ?? void 0, await Ft(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            }) !== "AUTHORIZED")
              throw new ut();
            return this.send(t);
          }
        }
        throw new Gt(y.status, `Error POSTing to endpoint: ${u}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, y.status === 202) {
        await ((o = y.body) == null ? void 0 : o.cancel()), B_(t) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((u) => {
          var _;
          return (_ = this.onerror) == null ? void 0 : _.call(this, u);
        });
        return;
      }
      const f = (Array.isArray(t) ? t : [t]).filter((u) => "method" in u && "id" in u && u.id !== void 0).length > 0, m = y.headers.get("content-type");
      if (f)
        if (m != null && m.includes("text/event-stream"))
          this._handleSseStream(y.body, { onresumptiontoken: l }, !1);
        else if (m != null && m.includes("application/json")) {
          const u = await y.json(), _ = Array.isArray(u) ? u.map((S) => ao.parse(S)) : [ao.parse(u)];
          for (const S of _)
            (s = this.onmessage) == null || s.call(this, S);
        } else
          throw await ((a = y.body) == null ? void 0 : a.cancel()), new Gt(-1, `Unexpected content type: ${m}`);
      else
        await ((i = y.body) == null ? void 0 : i.cancel());
    } catch (d) {
      throw (c = this.onerror) == null || c.call(this, d), d;
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
          throw new Gt(a.status, `Failed to terminate session: ${a.statusText}`);
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
async function kw(e, t, r, n, o, s) {
  return r.debug(`Connecting to server at: ${e}`), await Rw(e, t, r, n, o);
}
async function Pw(e, t) {
  t.debug("Disconnecting from MCP server..."), e.client.onerror = void 0, await e.transport.close(), t.debug("Disconnected from MCP server");
}
async function Ou(e, t, r) {
  const n = new ww(t, { fetch: ud(r)(fetch) });
  try {
    await e.connect(n);
  } catch (o) {
    throw await n.close().catch(() => {
    }), o;
  }
  return { client: e, transport: n, transportType: "sse" };
}
async function Tw(e, t, r) {
  const n = new Ew(t, {
    fetch: ud(r)(fetch)
  });
  return await e.connect(n), { client: e, transport: n, transportType: "streamable-http" };
}
async function Rw(e, t, r, n, o) {
  const s = "Please verify the server URL is correct.", a = "Please verify the server URL is correct and the attached authentication headers are supported by the server.", i = "Could not connect to server using HTTP+SSE transport.", c = "Could not connect to server with any available transport.", d = new z$({
    name: "Mendix Agent Editor",
    version: t
  });
  d.onerror = (y) => {
    r.error("Client error:", y);
  };
  const l = _w(async (y, w, b) => {
    const f = new Headers(b == null ? void 0 : b.headers);
    return o.forEach(([m, u]) => {
      f.set(m, u);
    }), y(w, { ...b, headers: f });
  }), v = new URL(e), $ = (y) => {
    let w = y === "SSE" ? i : c;
    return o.length > 0 ? w += ` ${a}` : w += ` ${s}`, w;
  };
  if (n === "v2024_11_05") {
    r.debug("Protocol version 2024-11-05 specified, connecting directly with HTTP+SSE transport...");
    try {
      const y = await Ou(d, v, l);
      return r.debug("Successfully connected using HTTP+SSE transport."), y;
    } catch (y) {
      throw r.error(`Failed to connect using HTTP+SSE transport: ${y}`), new Error($("SSE"));
    }
  }
  r.debug("Trying Streamable HTTP transport...");
  try {
    const y = await Tw(d, v, l);
    return r.debug("Successfully connected using Streamable HTTP transport."), y;
  } catch (y) {
    r.debug(`StreamableHttp transport connection failed: ${y}`), r.debug("Falling back to HTTP+SSE transport...");
    try {
      const w = await Ou(d, v, l);
      return r.debug("Successfully connected using HTTP+SSE transport."), w;
    } catch (w) {
      throw r.error(
        `Failed to connect with either transport method:
1. Streamable HTTP error: ${y}
2. SSE error: ${w}`
      ), new Error($("HTTP+SSE"));
    }
  }
}
async function Ow(e, t) {
  try {
    const r = {
      method: "tools/list",
      params: {}
    }, n = await e.request(r, ga);
    t.debug(`Found ${n.tools.length} tools`);
    for (const o of n.tools)
      t.debug(`  - ${o.name}: ${o.description}`);
    return n.tools;
  } catch (r) {
    return t.error(`Tools not supported by this server: ${r}`), [];
  }
}
const Iw = async (e, t, r) => {
  var c;
  const n = Md(e), o = await Ad(e, t.endpoint);
  if (!o) {
    n.error(
      `MCP endpoint constant ${(c = t.endpoint) == null ? void 0 : c.qualifiedName} does not have an accessible runtime value or default value.`
    );
    return;
  }
  const s = await e.network.httpProxy.getProxyUrl(o), a = await kw(
    s,
    t.version ?? "",
    n,
    t.protocolVersion,
    r
  ), i = await Ow(a.client, n);
  return await Pw(a, n), i;
}, Cw = async (e, t) => {
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
}, yr = async (e, t, r) => {
  switch (e) {
    case "endpoint": {
      const n = await Nd(r, t.endpoint);
      if (n === ft.Required)
        return "Endpoint is required.";
      if (n === ft.NotFound)
        return "Selected constant not found. It might have been deleted or renamed. Please update the constant selection.";
      if (n === ft.Excluded)
        return "Selected constant is excluded from the project and cannot be used.";
      if (n === ft.InvalidType)
        return "Selected constant must be of type string.";
      if (n === ft.PrivateValue || n === ft.EmptyValue)
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
        const n = await Ed(
          r,
          t.authenticationMicroflow
        );
        if (!n)
          return "Selected microflow does not exist.";
        if (n.excluded)
          return "Selected microflow is currently excluded from the project and cannot be used.";
        const o = n.objectCollection.objects, s = o == null ? void 0 : o.filter(
          (a) => a.$Type === "Microflows$MicroflowParameterObject"
        );
        if (s && s.length > 0)
          return "Authentication microflow cannot have input parameters.";
        if (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== kd.HttpHeader)
          return "Authentication microflow must return a list of System.HttpHeader objects.";
      }
      break;
    }
    default:
      return !0;
  }
  return !0;
}, $s = (e, t, r) => ({ ...e, [t]: r }), Nw = async (e, t, r) => {
  var a;
  let n;
  const o = [
    {
      title: "Getting exposed tools",
      description: "Getting exposed tools",
      action: async () => {
        try {
          return n = await Iw(e, t, r), !0;
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
}, jw = async (e, t) => {
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
}, qw = async (e, t, r) => {
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
}, zw = {
  isValidEndpoint: !0,
  isValidProtocolVersion: !0,
  isValidConnectionTimeout: !0,
  isValidAuthenticationMicroflow: !0
}, Mw = {
  endpoint: "isValidEndpoint",
  protocolVersion: "isValidProtocolVersion",
  connectionTimeoutSeconds: "isValidConnectionTimeout",
  authenticationMicroflow: "isValidAuthenticationMicroflow"
}, Aw = Pd.map(
  (e) => ({
    key: e,
    caption: e
  })
), Dw = hd.div`
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    font-size: 10px;
`, Uw = ({
  loadedConsumedMCPService: e,
  studioPro: t,
  updateStudioProDocument: r
}) => {
  var R, j;
  const [n, o] = Ae.useState(e), [s, a] = Ae.useState(zw), [i, c] = Ae.useState([]), [d, l] = Ae.useState(!1), [v, $] = Ae.useState(null), [y, w] = Ae.useState(
    ((R = e.connectionTimeoutSeconds) == null ? void 0 : R.toString()) ?? ""
  ), [b, f] = Ae.useState([]), [m, u] = Ae.useState(!1), _ = Ae.useRef(null);
  Ae.useEffect(() => () => {
    _.current && clearTimeout(_.current);
  }, []), Ae.useEffect(() => {
    S("endpoint", n), S("authenticationMicroflow", n), u(!0);
  }, []), Ae.useEffect(() => {
    m && o(e);
  }, [e]);
  const S = async (T, p) => {
    const k = Mw[T];
    if (k) {
      const C = await yr(
        T,
        p,
        t
      );
      a((F) => ({ ...F, [k]: C }));
    }
  };
  Ae.useEffect(() => {
    (async () => {
      const p = {
        isValidEndpoint: await yr("endpoint", n, t),
        isValidProtocolVersion: await yr(
          "protocolVersion",
          n,
          t
        ),
        isValidConnectionTimeout: await yr(
          "connectionTimeoutSeconds",
          n,
          t
        ),
        isValidAuthenticationMicroflow: await yr(
          "authenticationMicroflow",
          n,
          t
        )
      };
      a(p);
    })();
  }, []);
  const h = 300, g = (T, p) => {
    _.current && clearTimeout(_.current), _.current = setTimeout(async () => {
      await r(T), await S(p, T);
    }, h);
  }, E = async () => {
    const T = await Cw(t, n);
    T && (o(T), r(T), S("endpoint", T), c([]), l(!1));
  }, I = async () => {
    n.endpoint && Dd(t, n.endpoint);
  }, z = (T) => async (p) => {
    o((k) => {
      const C = $s(k, T, p);
      return r(C), S(T, C), C;
    });
  }, U = (T) => (p) => {
    o((k) => {
      const C = $s(k, T, p);
      return g(C, T), C;
    });
  }, A = (T) => {
    if (T !== "" && !/^\d+$/.test(T)) return;
    w(T);
    const p = T === "" ? void 0 : parseInt(T, 10);
    o((k) => {
      const C = $s(k, "connectionTimeoutSeconds", p);
      return g(C, "connectionTimeoutSeconds"), C;
    });
  }, L = async () => {
    const T = await jw(t, n);
    T && (o(T), r(T), S("authenticationMicroflow", T));
  }, Z = async () => {
    n.authenticationMicroflow && Rd(t, n.authenticationMicroflow);
  }, x = async () => {
    const T = d;
    l(!1);
    const p = await Nw(t, n, _e(b));
    if (p === void 0) {
      T && l(!0);
      return;
    }
    c(p), l(!0), $(/* @__PURE__ */ new Date());
  }, te = async () => {
    const T = await qw(t, Od, b);
    T && f(T);
  }, _e = (T) => T.filter(([p]) => p.trim() !== ""), we = (T) => _e(T).map((p) => p[0]).join(", "), ee = Object.values(s).some((T) => T !== !0), je = s.isValidEndpoint === ft.PrivateValue || s.isValidEndpoint === ft.EmptyValue, M = () => s.isValidEndpoint === !0 || s.isValidEndpoint === ft.PrivateValue || s.isValidEndpoint === ft.EmptyValue ? !0 : s.isValidEndpoint;
  return /* @__PURE__ */ he.jsxs(pd, { children: [
    /* @__PURE__ */ he.jsxs(Ra, { children: [
      /* @__PURE__ */ he.jsxs(xo, { label: "General", children: [
        /* @__PURE__ */ he.jsx(
          Oa,
          {
            label: "Version",
            ariaLabel: "Version",
            value: n.version === void 0 ? "" : n.version,
            onChange: U("version"),
            placeholder: "[1.0.0]"
          }
        ),
        /* @__PURE__ */ he.jsx(
          md,
          {
            label: "Documentation",
            "aria-label": "Documentation",
            value: n.documentation,
            onChange: U("documentation"),
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ he.jsxs(xo, { label: "Configuration", children: [
        /* @__PURE__ */ he.jsx(
          Jo,
          {
            ariaLabel: "Endpoint",
            label: "Endpoint",
            value: ((j = n.endpoint) == null ? void 0 : j.qualifiedName) ?? "",
            icon: n.endpoint ? /* @__PURE__ */ he.jsx(jd, {}) : void 0,
            buttonCaption: "Select...",
            onClick: E,
            validate: () => M(),
            buttonCaptionSecondary: n.endpoint ? "Show" : void 0,
            onClickSecondary: n.endpoint ? I : void 0
          }
        ),
        je && /* @__PURE__ */ he.jsxs(Vd, { children: [
          /* @__PURE__ */ he.jsx($d, { children: "Invalid constant value" }),
          /* @__PURE__ */ he.jsx("div", { children: "In order to test your Consumed MCP Service locally please set a valid value for the endpoint constant." })
        ] }),
        /* @__PURE__ */ he.jsx(
          Jo,
          {
            ariaLabel: "Credentials microflow",
            label: "Credentials microflow",
            value: n.authenticationMicroflow ? n.authenticationMicroflow.qualifiedName : "",
            icon: n.authenticationMicroflow ? /* @__PURE__ */ he.jsx(Ud, {}) : void 0,
            description: "Optional: Select a microflow that generates credentials that will be used to authenticate to the MCP server. The microflow needs to return a list of System.HttpHeader objects. Input parameters are not allowed.",
            onClick: L,
            buttonCaption: "Select...",
            buttonCaptionSecondary: n.authenticationMicroflow ? "Show" : void 0,
            onClickSecondary: n.authenticationMicroflow ? Z : void 0,
            validate: () => s.isValidAuthenticationMicroflow
          }
        ),
        /* @__PURE__ */ he.jsx(
          qd,
          {
            ariaLabel: "Protocol version",
            label: "Protocol version",
            selectedKey: n.protocolVersion,
            options: Aw,
            onSelectionChange: z("protocolVersion"),
            validate: () => s.isValidProtocolVersion
          }
        ),
        /* @__PURE__ */ he.jsx(
          Oa,
          {
            label: "Connection timeout (seconds)",
            ariaLabel: "Connection timeout",
            value: y,
            description: "Optional: Connection timeout controls the maximum time to wait for a response from the MCP server.",
            onChange: A,
            validate: () => s.isValidConnectionTimeout
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ he.jsx(_d, { children: /* @__PURE__ */ he.jsxs(xo, { label: "MCP Tools Playground", children: [
      /* @__PURE__ */ he.jsx(Ra, { children: /* @__PURE__ */ he.jsx(
        Jo,
        {
          ariaLabel: "MCP Authentication headers",
          label: "Authentication headers",
          value: we(b),
          buttonCaption: "Edit",
          onClick: te,
          validate: void 0,
          description: "Headers are not stored and only used to explore tools from Studio Pro."
        }
      ) }),
      /* @__PURE__ */ he.jsx(
        zd,
        {
          label: "Tools",
          buttonCaption: "List tools",
          onPress: x,
          disabled: ee
        }
      ),
      d && /* @__PURE__ */ he.jsxs(he.Fragment, { children: [
        v && /* @__PURE__ */ he.jsxs(Dw, { children: [
          "Last updated: ",
          v.toLocaleString()
        ] }),
        /* @__PURE__ */ he.jsx(
          Ld,
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
            data: i.map((T) => [
              {
                cellContent: /* @__PURE__ */ he.jsx(wd, { icon: Td, text: T.name }, T.name),
                tooltipText: T.name
              },
              { cellContent: T.description, tooltipText: T.description }
            ])
          }
        )
      ] })
    ] }) })
  ] });
}, Vw = Id(), Lw = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [o, s] = Ae.useState(0), [a, i] = Ae.useState(!1), [c, d] = Ae.useState(Vw);
  return Ae.useEffect(() => {
    const l = (v) => {
      const { documents: $ } = v;
      $.some((y) => y.documentId === t) && s((y) => y + 1);
    };
    return n.addEventListener("documentsChanged", l), () => {
      n.removeEventListener("documentsChanged", l);
    };
  }, []), Ae.useEffect(() => {
    n.getDocumentById(t).then(async (l) => {
      if (l && !("error" in l)) {
        const v = l.document.contents;
        i(!0), d(v);
      } else
        throw new Error((l == null ? void 0 : l.error) || "Document not found");
    }).catch(async (l) => {
      await r.show("error", "Error loading document", "Details: " + (l == null ? void 0 : l.message) || l), i(!0);
    });
  }, [o]), /* @__PURE__ */ he.jsx(yd, { studioPro: e, children: /* @__PURE__ */ he.jsxs(gd, { children: [
    !a && /* @__PURE__ */ he.jsx(Sd, {}),
    a && /* @__PURE__ */ he.jsx(vd, { children: /* @__PURE__ */ he.jsx(
      Uw,
      {
        loadedConsumedMCPService: c,
        studioPro: e,
        updateStudioProDocument: Cd(e, t)
      }
    ) })
  ] }) });
}, Xw = bd(Lw);
export {
  Xw as component
};
//# sourceMappingURL=consumedMCPServiceEdit.js.map
