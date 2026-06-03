import { a7 as Iu, r as De, R as pe, ak as pd, ag as Ra, a1 as Jo, al as md, am as _d, ah as yd, ae as gd, af as vd } from "./formelements-DgWWXRMR.js";
import { u as $d, B as wd, a as bd, T as Sd, c as Ed, C as kd } from "./TextWithIcon-BsB7aLN_.js";
import { createStudioProLogger as Cu } from "./logger-Bof2Evv1.js";
import { q as Pd, u as Td, C as Rd, D as Od, v as Id, f as Cd, r as Nd, w as jd, l as qd, x as zd } from "./index-Cosn4mN0.js";
import { m as Md } from "./useDebounceCallback-CQtp7E8l.js";
import { v as Ad, C as rt, i as Dd, a as Ud, B as Vd } from "./ButtonWithLabel-CwHlV4OE.js";
import { T as Oa } from "./TextInputLabeled-DcUYd1Xh.js";
import { T as Go } from "./TextInputWithButton-H-kPhdc5.js";
import { n as Ld } from "./MicroflowIcon-D9CNADwL.js";
import { W as Fd } from "./Banner-Tj4hO43W.js";
import { T as Zd } from "./Table-CJG1u8pf.js";
const Hd = (e, t) => async (r) => {
  const n = Cu(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, r);
  } catch (o) {
    n.error("Failed to save consumed MCP service document:", o), await e.ui.notifications.show({
      title: "Failed to save consumed MCP service document.",
      message: o.message
    });
  }
}, Kd = Object.freeze({
  status: "aborted"
});
function L(e, t, r) {
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
    for (let g = 0; g < l.length; g++) {
      const $ = l[g];
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
class Nu extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const ju = {};
function Et(e) {
  return ju;
}
function qu(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function bs(e, t) {
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
function Js(e) {
  return e == null;
}
function Gs(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function xd(e, t) {
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
function me(e, t, r) {
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
function Jd(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const zu = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Er(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Gd = To(() => {
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
function Mu(e) {
  return or(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const Wd = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
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
function Bd(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Qd = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Yd(e, t) {
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
function Xd(e, t) {
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
function ef(e, t) {
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
function tf(e, t) {
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
function rf(e, t) {
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
function nf(e, t, r) {
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
function of(e, t, r) {
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
function Ws(e) {
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
const Au = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, bs, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Du = L("$ZodError", Au), Uu = L("$ZodError", Au, { Parent: Error });
function sf(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const o of e.issues)
    o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
  return { formErrors: n, fieldErrors: r };
}
function af(e, t = (r) => r.message) {
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
const Bs = (e) => (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new rr();
  if (a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => kt(c, s, Et())));
    throw zu(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, Qs = (e) => async (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new ((o == null ? void 0 : o.Err) ?? e)(a.issues.map((c) => kt(c, s, Et())));
    throw zu(i, o == null ? void 0 : o.callee), i;
  }
  return a.value;
}, Ro = (e) => (t, r, n) => {
  const o = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new rr();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? Du)(s.issues.map((a) => kt(a, o, Et())))
  } : { success: !0, data: s.value };
}, Vu = /* @__PURE__ */ Ro(Uu), Oo = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => kt(a, o, Et())))
  } : { success: !0, data: s.value };
}, cf = /* @__PURE__ */ Oo(Uu), uf = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Bs(e)(t, r, o);
}, lf = (e) => (t, r, n) => Bs(e)(t, r, n), df = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Qs(e)(t, r, o);
}, ff = (e) => async (t, r, n) => Qs(e)(t, r, n), hf = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ro(e)(t, r, o);
}, pf = (e) => (t, r, n) => Ro(e)(t, r, n), mf = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Oo(e)(t, r, o);
}, _f = (e) => async (t, r, n) => Oo(e)(t, r, n), yf = /^[cC][^\s-]{8,}$/, gf = /^[0-9a-z]+$/, vf = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, $f = /^[0-9a-vA-V]{20}$/, wf = /^[A-Za-z0-9]{27}$/, bf = /^[a-zA-Z0-9_-]{21}$/, Sf = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ef = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Na = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, kf = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Pf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Tf() {
  return new RegExp(Pf, "u");
}
const Rf = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Of = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, If = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Cf = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Nf = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Lu = /^[A-Za-z0-9_-]*$/, jf = /^\+[1-9]\d{6,14}$/, Fu = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", qf = /* @__PURE__ */ new RegExp(`^${Fu}$`);
function Zu(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function zf(e) {
  return new RegExp(`^${Zu(e)}$`);
}
function Mf(e) {
  const t = Zu({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${Fu}T(?:${n})$`);
}
const Af = (e) => {
  const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Df = /^-?\d+$/, Hu = /^-?\d+(?:\.\d+)?$/, Uf = /^(?:true|false)$/i, Vf = /^null$/i, Lf = /^[^A-Z]*$/, Ff = /^[^a-z]*$/, Be = /* @__PURE__ */ L("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), Ku = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, xu = /* @__PURE__ */ L("$ZodCheckLessThan", (e, t) => {
  Be.init(e, t);
  const r = Ku[typeof t.value];
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
}), Ju = /* @__PURE__ */ L("$ZodCheckGreaterThan", (e, t) => {
  Be.init(e, t);
  const r = Ku[typeof t.value];
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
}), Zf = /* @__PURE__ */ L("$ZodCheckMultipleOf", (e, t) => {
  Be.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : xd(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Hf = /* @__PURE__ */ L("$ZodCheckNumberFormat", (e, t) => {
  var a;
  Be.init(e, t), t.format = t.format || "float64";
  const r = (a = t.format) == null ? void 0 : a.includes("int"), n = r ? "int" : "number", [o, s] = Qd[t.format];
  e._zod.onattach.push((i) => {
    const c = i._zod.bag;
    c.format = t.format, c.minimum = o, c.maximum = s, r && (c.pattern = Df);
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
}), Kf = /* @__PURE__ */ L("$ZodCheckMaxLength", (e, t) => {
  var r;
  Be.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !Js(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length <= t.maximum)
      return;
    const a = Ws(o);
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
}), xf = /* @__PURE__ */ L("$ZodCheckMinLength", (e, t) => {
  var r;
  Be.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !Js(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length >= t.minimum)
      return;
    const a = Ws(o);
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
}), Jf = /* @__PURE__ */ L("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Be.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !Js(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (n) => {
    const o = n.value, s = o.length;
    if (s === t.length)
      return;
    const a = Ws(o), i = s > t.length;
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
}), Io = /* @__PURE__ */ L("$ZodCheckStringFormat", (e, t) => {
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
}), Gf = /* @__PURE__ */ L("$ZodCheckRegex", (e, t) => {
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
}), Wf = /* @__PURE__ */ L("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Lf), Io.init(e, t);
}), Bf = /* @__PURE__ */ L("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Ff), Io.init(e, t);
}), Qf = /* @__PURE__ */ L("$ZodCheckIncludes", (e, t) => {
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
}), Yf = /* @__PURE__ */ L("$ZodCheckStartsWith", (e, t) => {
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
}), Xf = /* @__PURE__ */ L("$ZodCheckEndsWith", (e, t) => {
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
}), eh = /* @__PURE__ */ L("$ZodCheckOverwrite", (e, t) => {
  Be.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class th {
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
const rh = {
  major: 4,
  minor: 3,
  patch: 6
}, ke = /* @__PURE__ */ L("$ZodType", (e, t) => {
  var o;
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = rh;
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
      let l = Yt(i), g;
      for (const $ of c) {
        if ($._zod.def.when) {
          if (!$._zod.def.when(i))
            continue;
        } else if (l)
          continue;
        const v = i.issues.length, w = $._zod.check(i);
        if (w instanceof Promise && (d == null ? void 0 : d.async) === !1)
          throw new rr();
        if (g || w instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await w, i.issues.length !== v && (l || (l = Yt(i, v)));
          });
        else {
          if (i.issues.length === v)
            continue;
          l || (l = Yt(i, v));
        }
      }
      return g ? g.then(() => i) : i;
    }, a = (i, c, d) => {
      if (Yt(i))
        return i.aborted = !0, i;
      const l = s(c, n, d);
      if (l instanceof Promise) {
        if (d.async === !1)
          throw new rr();
        return l.then((g) => e._zod.parse(g, d));
      }
      return e._zod.parse(l, d);
    };
    e._zod.run = (i, c) => {
      if (c.skipChecks)
        return e._zod.parse(i, c);
      if (c.direction === "backward") {
        const l = e._zod.parse({ value: i.value, issues: [] }, { ...c, skipChecks: !0 });
        return l instanceof Promise ? l.then((g) => a(g, i, c)) : a(l, i, c);
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
  me(e, "~standard", () => ({
    validate: (s) => {
      var a;
      try {
        const i = Vu(e, s);
        return i.success ? { value: i.data } : { issues: (a = i.error) == null ? void 0 : a.issues };
      } catch {
        return cf(e, s).then((c) => {
          var d;
          return c.success ? { value: c.data } : { issues: (d = c.error) == null ? void 0 : d.issues };
        });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Ys = /* @__PURE__ */ L("$ZodString", (e, t) => {
  var r;
  ke.init(e, t), e._zod.pattern = [...((r = e == null ? void 0 : e._zod.bag) == null ? void 0 : r.patterns) ?? []].pop() ?? Af(e._zod.bag), e._zod.parse = (n, o) => {
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
}), Re = /* @__PURE__ */ L("$ZodStringFormat", (e, t) => {
  Io.init(e, t), Ys.init(e, t);
}), nh = /* @__PURE__ */ L("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = Ef), Re.init(e, t);
}), oh = /* @__PURE__ */ L("$ZodUUID", (e, t) => {
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
}), sh = /* @__PURE__ */ L("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = kf), Re.init(e, t);
}), ah = /* @__PURE__ */ L("$ZodURL", (e, t) => {
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
}), ih = /* @__PURE__ */ L("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Tf()), Re.init(e, t);
}), ch = /* @__PURE__ */ L("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = bf), Re.init(e, t);
}), uh = /* @__PURE__ */ L("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = yf), Re.init(e, t);
}), lh = /* @__PURE__ */ L("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = gf), Re.init(e, t);
}), dh = /* @__PURE__ */ L("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = vf), Re.init(e, t);
}), fh = /* @__PURE__ */ L("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = $f), Re.init(e, t);
}), hh = /* @__PURE__ */ L("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = wf), Re.init(e, t);
}), ph = /* @__PURE__ */ L("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Mf(t)), Re.init(e, t);
}), mh = /* @__PURE__ */ L("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = qf), Re.init(e, t);
}), _h = /* @__PURE__ */ L("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = zf(t)), Re.init(e, t);
}), yh = /* @__PURE__ */ L("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Sf), Re.init(e, t);
}), gh = /* @__PURE__ */ L("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Rf), Re.init(e, t), e._zod.bag.format = "ipv4";
}), vh = /* @__PURE__ */ L("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Of), Re.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (r) => {
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
}), $h = /* @__PURE__ */ L("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = If), Re.init(e, t);
}), wh = /* @__PURE__ */ L("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = Cf), Re.init(e, t), e._zod.check = (r) => {
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
function Gu(e) {
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
const bh = /* @__PURE__ */ L("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = Nf), Re.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (r) => {
    Gu(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Sh(e) {
  if (!Lu.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Gu(r);
}
const Eh = /* @__PURE__ */ L("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = Lu), Re.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (r) => {
    Sh(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), kh = /* @__PURE__ */ L("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = jf), Re.init(e, t);
});
function Ph(e, t = null) {
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
const Th = /* @__PURE__ */ L("$ZodJWT", (e, t) => {
  Re.init(e, t), e._zod.check = (r) => {
    Ph(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Wu = /* @__PURE__ */ L("$ZodNumber", (e, t) => {
  ke.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Hu, e._zod.parse = (r, n) => {
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
}), Rh = /* @__PURE__ */ L("$ZodNumberFormat", (e, t) => {
  Hf.init(e, t), Wu.init(e, t);
}), Oh = /* @__PURE__ */ L("$ZodBoolean", (e, t) => {
  ke.init(e, t), e._zod.pattern = Uf, e._zod.parse = (r, n) => {
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
}), Ih = /* @__PURE__ */ L("$ZodNull", (e, t) => {
  ke.init(e, t), e._zod.pattern = Vf, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (r, n) => {
    const o = r.value;
    return o === null || r.issues.push({
      expected: "null",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), Ch = /* @__PURE__ */ L("$ZodAny", (e, t) => {
  ke.init(e, t), e._zod.parse = (r) => r;
}), Nh = /* @__PURE__ */ L("$ZodUnknown", (e, t) => {
  ke.init(e, t), e._zod.parse = (r) => r;
}), jh = /* @__PURE__ */ L("$ZodNever", (e, t) => {
  ke.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function ja(e, t, r) {
  e.issues.length && t.issues.push(...Xt(r, e.issues)), t.value[r] = e.value;
}
const qh = /* @__PURE__ */ L("$ZodArray", (e, t) => {
  ke.init(e, t), e._zod.parse = (r, n) => {
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
function Bu(e) {
  var n, o, s, a;
  const t = Object.keys(e.shape);
  for (const i of t)
    if (!((a = (s = (o = (n = e.shape) == null ? void 0 : n[i]) == null ? void 0 : o._zod) == null ? void 0 : s.traits) != null && a.has("$ZodType")))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const r = Bd(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function Qu(e, t, r, n, o, s) {
  const a = [], i = o.keySet, c = o.catchall._zod, d = c.def.type, l = c.optout === "optional";
  for (const g in t) {
    if (i.has(g))
      continue;
    if (d === "never") {
      a.push(g);
      continue;
    }
    const $ = c.run({ value: t[g], issues: [] }, n);
    $ instanceof Promise ? e.push($.then((v) => lo(v, r, g, t, l))) : lo($, r, g, t, l);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const zh = /* @__PURE__ */ L("$ZodObject", (e, t) => {
  ke.init(e, t);
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
  const n = To(() => Bu(t));
  me(e._zod, "propValues", () => {
    const i = t.shape, c = {};
    for (const d in i) {
      const l = i[d]._zod;
      if (l.values) {
        c[d] ?? (c[d] = /* @__PURE__ */ new Set());
        for (const g of l.values)
          c[d].add(g);
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
    const l = [], g = a.shape;
    for (const $ of a.keys) {
      const v = g[$], w = v._zod.optout === "optional", b = v._zod.run({ value: d[$], issues: [] }, c);
      b instanceof Promise ? l.push(b.then((h) => lo(h, i, $, d, w))) : lo(b, i, $, d, w);
    }
    return s ? Qu(l, d, i, c, n.value, e) : l.length ? Promise.all(l).then(() => i) : i;
  };
}), Mh = /* @__PURE__ */ L("$ZodObjectJIT", (e, t) => {
  zh.init(e, t);
  const r = e._zod.parse, n = To(() => Bu(t)), o = ($) => {
    var m;
    const v = new th(["shape", "payload", "ctx"]), w = n.value, b = (S) => {
      const p = Ca(S);
      return `shape[${p}]._zod.run({ value: input[${p}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const h = /* @__PURE__ */ Object.create(null);
    let _ = 0;
    for (const S of w.keys)
      h[S] = `key_${_++}`;
    v.write("const newResult = {};");
    for (const S of w.keys) {
      const p = h[S], y = Ca(S), k = $[S], I = ((m = k == null ? void 0 : k._zod) == null ? void 0 : m.optout) === "optional";
      v.write(`const ${p} = ${b(S)};`), I ? v.write(`
        if (${p}.issues.length) {
          if (${y} in input) {
            payload.issues = payload.issues.concat(${p}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${y}, ...iss.path] : [${y}]
            })));
          }
        }
        
        if (${p}.value === undefined) {
          if (${y} in input) {
            newResult[${y}] = undefined;
          }
        } else {
          newResult[${y}] = ${p}.value;
        }
        
      `) : v.write(`
        if (${p}.issues.length) {
          payload.issues = payload.issues.concat(${p}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${y}, ...iss.path] : [${y}]
          })));
        }
        
        if (${p}.value === undefined) {
          if (${y} in input) {
            newResult[${y}] = undefined;
          }
        } else {
          newResult[${y}] = ${p}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const u = v.compile();
    return (S, p) => u($, S, p);
  };
  let s;
  const a = Er, i = !ju.jitless, d = i && Gd.value, l = t.catchall;
  let g;
  e._zod.parse = ($, v) => {
    g ?? (g = n.value);
    const w = $.value;
    return a(w) ? i && d && (v == null ? void 0 : v.async) === !1 && v.jitless !== !0 ? (s || (s = o(t.shape)), $ = s($, v), l ? Qu([], w, $, v, g, e) : $) : r($, v) : ($.issues.push({
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
const Yu = /* @__PURE__ */ L("$ZodUnion", (e, t) => {
  ke.init(e, t), me(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), me(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), me(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), me(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Gs(s.source)).join("|")})$`);
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
}), Ah = /* @__PURE__ */ L("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, Yu.init(e, t);
  const r = e._zod.parse;
  me(e._zod, "propValues", () => {
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
}), Dh = /* @__PURE__ */ L("$ZodIntersection", (e, t) => {
  ke.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value, s = t.left._zod.run({ value: o, issues: [] }, n), a = t.right._zod.run({ value: o, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([c, d]) => za(r, c, d)) : za(r, s, a);
  };
});
function Ss(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (or(e) && or(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((s) => r.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of n) {
      const a = Ss(e[s], t[s]);
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
      const o = e[n], s = t[n], a = Ss(o, s);
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
  const a = Ss(t.value, r.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return e.value = a.data, e;
}
const Uh = /* @__PURE__ */ L("$ZodRecord", (e, t) => {
  ke.init(e, t), e._zod.parse = (r, n) => {
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
          l instanceof Promise ? s.push(l.then((g) => {
            g.issues.length && r.issues.push(...Xt(d, g.issues)), r.value[d] = g.value;
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
        if (typeof i == "string" && Hu.test(i) && c.issues.length) {
          const g = t.keyType._zod.run({ value: Number(i), issues: [] }, n);
          if (g instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          g.issues.length === 0 && (c = g);
        }
        if (c.issues.length) {
          t.mode === "loose" ? r.value[i] = o[i] : r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: c.issues.map((g) => kt(g, n, Et())),
            input: i,
            path: [i],
            inst: e
          });
          continue;
        }
        const l = t.valueType._zod.run({ value: o[i], issues: [] }, n);
        l instanceof Promise ? s.push(l.then((g) => {
          g.issues.length && r.issues.push(...Xt(i, g.issues)), r.value[c.value] = g.value;
        })) : (l.issues.length && r.issues.push(...Xt(i, l.issues)), r.value[c.value] = l.value);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
}), Vh = /* @__PURE__ */ L("$ZodEnum", (e, t) => {
  ke.init(e, t);
  const r = qu(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((o) => Wd.has(typeof o)).map((o) => typeof o == "string" ? sr(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return n.has(a) || o.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), o;
  };
}), Lh = /* @__PURE__ */ L("$ZodLiteral", (e, t) => {
  if (ke.init(e, t), t.values.length === 0)
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
}), Fh = /* @__PURE__ */ L("$ZodTransform", (e, t) => {
  ke.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Nu(e.constructor.name);
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
const Xu = /* @__PURE__ */ L("$ZodOptional", (e, t) => {
  ke.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", me(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), me(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gs(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => Ma(s, r.value)) : Ma(o, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), Zh = /* @__PURE__ */ L("$ZodExactOptional", (e, t) => {
  Xu.init(e, t), me(e._zod, "values", () => t.innerType._zod.values), me(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (r, n) => t.innerType._zod.run(r, n);
}), Hh = /* @__PURE__ */ L("$ZodNullable", (e, t) => {
  ke.init(e, t), me(e._zod, "optin", () => t.innerType._zod.optin), me(e._zod, "optout", () => t.innerType._zod.optout), me(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Gs(r.source)}|null)$`) : void 0;
  }), me(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), Kh = /* @__PURE__ */ L("$ZodDefault", (e, t) => {
  ke.init(e, t), e._zod.optin = "optional", me(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
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
const xh = /* @__PURE__ */ L("$ZodPrefault", (e, t) => {
  ke.init(e, t), e._zod.optin = "optional", me(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), Jh = /* @__PURE__ */ L("$ZodNonOptional", (e, t) => {
  ke.init(e, t), me(e._zod, "values", () => {
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
const Gh = /* @__PURE__ */ L("$ZodCatch", (e, t) => {
  ke.init(e, t), me(e._zod, "optin", () => t.innerType._zod.optin), me(e._zod, "optout", () => t.innerType._zod.optout), me(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
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
}), Wh = /* @__PURE__ */ L("$ZodPipe", (e, t) => {
  ke.init(e, t), me(e._zod, "values", () => t.in._zod.values), me(e._zod, "optin", () => t.in._zod.optin), me(e._zod, "optout", () => t.out._zod.optout), me(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
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
const Bh = /* @__PURE__ */ L("$ZodReadonly", (e, t) => {
  ke.init(e, t), me(e._zod, "propValues", () => t.innerType._zod.propValues), me(e._zod, "values", () => t.innerType._zod.values), me(e._zod, "optin", () => {
    var r, n;
    return (n = (r = t.innerType) == null ? void 0 : r._zod) == null ? void 0 : n.optin;
  }), me(e._zod, "optout", () => {
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
const Qh = /* @__PURE__ */ L("$ZodCustom", (e, t) => {
  Be.init(e, t), ke.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
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
class Yh {
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
function Xh() {
  return new Yh();
}
(La = globalThis).__zod_globalRegistry ?? (La.__zod_globalRegistry = Xh());
const gr = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function ep(e, t) {
  return new e({
    type: "string",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function tp(e, t) {
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
function rp(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function np(e, t) {
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
function op(e, t) {
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
function sp(e, t) {
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
function el(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ap(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ip(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function cp(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function up(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lp(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function dp(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function fp(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function hp(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function pp(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function mp(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _p(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yp(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function gp(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vp(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $p(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wp(e, t) {
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
function bp(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Sp(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ep(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function kp(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Pp(e, t) {
  return new e({
    type: "number",
    coerce: !0,
    checks: [],
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tp(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Rp(e, t) {
  return new e({
    type: "boolean",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Op(e, t) {
  return new e({
    type: "null",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ip(e) {
  return new e({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function Cp(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Np(e, t) {
  return new e({
    type: "never",
    ...Y(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Za(e, t) {
  return new xu({
    check: "less_than",
    ...Y(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Wo(e, t) {
  return new xu({
    check: "less_than",
    ...Y(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
  return new Ju({
    check: "greater_than",
    ...Y(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Bo(e, t) {
  return new Ju({
    check: "greater_than",
    ...Y(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
  return new Zf({
    check: "multiple_of",
    ...Y(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function tl(e, t) {
  return new Kf({
    check: "max_length",
    ...Y(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
  return new xf({
    check: "min_length",
    ...Y(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function rl(e, t) {
  return new Jf({
    check: "length_equals",
    ...Y(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function jp(e, t) {
  return new Gf({
    check: "string_format",
    format: "regex",
    ...Y(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function qp(e) {
  return new Wf({
    check: "string_format",
    format: "lowercase",
    ...Y(e)
  });
}
// @__NO_SIDE_EFFECTS__
function zp(e) {
  return new Bf({
    check: "string_format",
    format: "uppercase",
    ...Y(e)
  });
}
// @__NO_SIDE_EFFECTS__
function Mp(e, t) {
  return new Qf({
    check: "string_format",
    format: "includes",
    ...Y(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ap(e, t) {
  return new Yf({
    check: "string_format",
    format: "starts_with",
    ...Y(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Dp(e, t) {
  return new Xf({
    check: "string_format",
    format: "ends_with",
    ...Y(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
  return new eh({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Up(e) {
  return /* @__PURE__ */ cr((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Vp() {
  return /* @__PURE__ */ cr((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Lp() {
  return /* @__PURE__ */ cr((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Fp() {
  return /* @__PURE__ */ cr((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Zp() {
  return /* @__PURE__ */ cr((e) => Jd(e));
}
// @__NO_SIDE_EFFECTS__
function Hp(e, t, r) {
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
function Kp(e, t, r) {
  const n = Y(r);
  return n.abort ?? (n.abort = !0), new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...n
  });
}
// @__NO_SIDE_EFFECTS__
function xp(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Y(r)
  });
}
// @__NO_SIDE_EFFECTS__
function Jp(e) {
  const t = /* @__PURE__ */ Gp((r) => (r.addIssue = (n) => {
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
function Gp(e, t) {
  const r = new Be({
    check: "custom",
    ...Y(t)
  });
  return r._zod.check = e, r;
}
function nl(e) {
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
    const v = e._zod.parent;
    v && (a.ref || (a.ref = v), ze(v, t, $), t.seen.get(v).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(a.schema, c), t.io === "input" && Ge(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((n = a.schema).default ?? (n.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
}
function ol(e, t) {
  var a, i, c, d;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const l of e.seen.entries()) {
    const g = (a = e.metadataRegistry.get(l[0])) == null ? void 0 : a.id;
    if (g) {
      const $ = n.get(g);
      if ($ && $ !== l[0])
        throw new Error(`Duplicate schema id "${g}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(g, l[0]);
    }
  }
  const o = (l) => {
    var b;
    const g = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const h = (b = e.external.registry.get(l[0])) == null ? void 0 : b.id, _ = e.external.uri ?? ((m) => m);
      if (h)
        return { ref: _(h) };
      const u = l[1].defId ?? l[1].schema.id ?? `schema${e.counter++}`;
      return l[1].defId = u, { defId: u, ref: `${_("__shared")}#/${g}/${u}` };
    }
    if (l[1] === r)
      return { ref: "#" };
    const v = `#/${g}/`, w = l[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: w, ref: v + w };
  }, s = (l) => {
    if (l[1].schema.$ref)
      return;
    const g = l[1], { ref: $, defId: v } = o(l);
    g.def = { ...g.schema }, v && (g.defId = v);
    const w = g.schema;
    for (const b in w)
      delete w[b];
    w.$ref = $;
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
      const v = (c = e.external.registry.get(l[0])) == null ? void 0 : c.id;
      if (t !== l[0] && v) {
        s(l);
        continue;
      }
    }
    if ((d = e.metadataRegistry.get(l[0])) == null ? void 0 : d.id) {
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
function sl(e, t) {
  var a, i, c;
  const r = e.seen.get(t);
  if (!r)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (d) => {
    const l = e.seen.get(d);
    if (l.ref === null)
      return;
    const g = l.def ?? l.schema, $ = { ...g }, v = l.ref;
    if (l.ref = null, v) {
      n(v);
      const b = e.seen.get(v), h = b.schema;
      if (h.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(h)) : Object.assign(g, h), Object.assign(g, $), d._zod.parent === v)
        for (const u in g)
          u === "$ref" || u === "allOf" || u in $ || delete g[u];
      if (h.$ref && b.def)
        for (const u in g)
          u === "$ref" || u === "allOf" || u in b.def && JSON.stringify(g[u]) === JSON.stringify(b.def[u]) && delete g[u];
    }
    const w = d._zod.parent;
    if (w && w !== v) {
      n(w);
      const b = e.seen.get(w);
      if (b != null && b.schema.$ref && (g.$ref = b.schema.$ref, b.def))
        for (const h in g)
          h === "$ref" || h === "allOf" || h in b.def && JSON.stringify(g[h]) === JSON.stringify(b.def[h]) && delete g[h];
    }
    e.override({
      zodSchema: d,
      jsonSchema: g,
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
const Wp = (e, t = {}) => (r) => {
  const n = nl({ ...r, processors: t });
  return ze(e, n), ol(n, e), sl(n, e);
}, ho = (e, t, r = {}) => (n) => {
  const { libraryOptions: o, target: s } = n ?? {}, a = nl({ ...o ?? {}, target: s, io: t, processors: r });
  return ze(e, a), ol(a, e), sl(a, e);
}, Bp = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Qp = (e, t, r, n) => {
  const o = r;
  o.type = "string";
  const { minimum: s, maximum: a, format: i, patterns: c, contentEncoding: d } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof a == "number" && (o.maxLength = a), i && (o.format = Bp[i] ?? i, o.format === "" && delete o.format, i === "time" && delete o.format), d && (o.contentEncoding = d), c && c.size > 0) {
    const l = [...c];
    l.length === 1 ? o.pattern = l[0].source : l.length > 1 && (o.allOf = [
      ...l.map((g) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: g.source
      }))
    ]);
  }
}, Yp = (e, t, r, n) => {
  const o = r, { minimum: s, maximum: a, format: i, multipleOf: c, exclusiveMaximum: d, exclusiveMinimum: l } = e._zod.bag;
  typeof i == "string" && i.includes("int") ? o.type = "integer" : o.type = "number", typeof l == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.minimum = l, o.exclusiveMinimum = !0) : o.exclusiveMinimum = l), typeof s == "number" && (o.minimum = s, typeof l == "number" && t.target !== "draft-04" && (l >= s ? delete o.minimum : delete o.exclusiveMinimum)), typeof d == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (o.maximum = d, o.exclusiveMaximum = !0) : o.exclusiveMaximum = d), typeof a == "number" && (o.maximum = a, typeof d == "number" && t.target !== "draft-04" && (d <= a ? delete o.maximum : delete o.exclusiveMaximum)), typeof c == "number" && (o.multipleOf = c);
}, Xp = (e, t, r, n) => {
  r.type = "boolean";
}, em = (e, t, r, n) => {
  t.target === "openapi-3.0" ? (r.type = "string", r.nullable = !0, r.enum = [null]) : r.type = "null";
}, tm = (e, t, r, n) => {
  r.not = {};
}, rm = (e, t, r, n) => {
}, nm = (e, t, r, n) => {
}, om = (e, t, r, n) => {
  const o = e._zod.def, s = qu(o.entries);
  s.every((a) => typeof a == "number") && (r.type = "number"), s.every((a) => typeof a == "string") && (r.type = "string"), r.enum = s;
}, sm = (e, t, r, n) => {
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
}, am = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, im = (e, t, r, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, cm = (e, t, r, n) => {
  const o = r, s = e._zod.def, { minimum: a, maximum: i } = e._zod.bag;
  typeof a == "number" && (o.minItems = a), typeof i == "number" && (o.maxItems = i), o.type = "array", o.items = ze(s.element, t, { ...n, path: [...n.path, "items"] });
}, um = (e, t, r, n) => {
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
    const g = s.shape[l]._zod;
    return t.io === "input" ? g.optin === void 0 : g.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), ((d = s.catchall) == null ? void 0 : d._zod.def.type) === "never" ? o.additionalProperties = !1 : s.catchall ? s.catchall && (o.additionalProperties = ze(s.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, lm = (e, t, r, n) => {
  const o = e._zod.def, s = o.inclusive === !1, a = o.options.map((i, c) => ze(i, t, {
    ...n,
    path: [...n.path, s ? "oneOf" : "anyOf", c]
  }));
  s ? r.oneOf = a : r.anyOf = a;
}, dm = (e, t, r, n) => {
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
}, fm = (e, t, r, n) => {
  const o = r, s = e._zod.def;
  o.type = "object";
  const a = s.keyType, i = a._zod.bag, c = i == null ? void 0 : i.patterns;
  if (s.mode === "loose" && c && c.size > 0) {
    const l = ze(s.valueType, t, {
      ...n,
      path: [...n.path, "patternProperties", "*"]
    });
    o.patternProperties = {};
    for (const g of c)
      o.patternProperties[g.source] = l;
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
    const l = [...d].filter((g) => typeof g == "string" || typeof g == "number");
    l.length > 0 && (o.required = l);
  }
}, hm = (e, t, r, n) => {
  const o = e._zod.def, s = ze(o.innerType, t, n), a = t.seen.get(e);
  t.target === "openapi-3.0" ? (a.ref = o.innerType, r.nullable = !0) : r.anyOf = [s, { type: "null" }];
}, pm = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, mm = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.default = JSON.parse(JSON.stringify(o.defaultValue));
}, _m = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (r._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, ym = (e, t, r, n) => {
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
}, gm = (e, t, r, n) => {
  const o = e._zod.def, s = t.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
  ze(s, t, n);
  const a = t.seen.get(e);
  a.ref = s;
}, vm = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType, r.readOnly = !0;
}, al = (e, t, r, n) => {
  const o = e._zod.def;
  ze(o.innerType, t, n);
  const s = t.seen.get(e);
  s.ref = o.innerType;
};
function Co(e) {
  return !!e._zod;
}
function bt(e, t) {
  return Co(e) ? Vu(e, t) : e.safeParse(t);
}
function il(e) {
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
function $m(e) {
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
const wm = /* @__PURE__ */ L("ZodISODateTime", (e, t) => {
  ph.init(e, t), je.init(e, t);
});
function cl(e) {
  return /* @__PURE__ */ wp(wm, e);
}
const bm = /* @__PURE__ */ L("ZodISODate", (e, t) => {
  mh.init(e, t), je.init(e, t);
});
function Sm(e) {
  return /* @__PURE__ */ bp(bm, e);
}
const Em = /* @__PURE__ */ L("ZodISOTime", (e, t) => {
  _h.init(e, t), je.init(e, t);
});
function km(e) {
  return /* @__PURE__ */ Sp(Em, e);
}
const Pm = /* @__PURE__ */ L("ZodISODuration", (e, t) => {
  yh.init(e, t), je.init(e, t);
});
function Tm(e) {
  return /* @__PURE__ */ Ep(Pm, e);
}
const Rm = (e, t) => {
  Du.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => af(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => sf(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, bs, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, bs, 2);
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
}, nt = L("ZodError", Rm, {
  Parent: Error
}), Om = /* @__PURE__ */ Bs(nt), Im = /* @__PURE__ */ Qs(nt), Cm = /* @__PURE__ */ Ro(nt), Nm = /* @__PURE__ */ Oo(nt), jm = /* @__PURE__ */ uf(nt), qm = /* @__PURE__ */ lf(nt), zm = /* @__PURE__ */ df(nt), Mm = /* @__PURE__ */ ff(nt), Am = /* @__PURE__ */ hf(nt), Dm = /* @__PURE__ */ pf(nt), Um = /* @__PURE__ */ mf(nt), Vm = /* @__PURE__ */ _f(nt), Pe = /* @__PURE__ */ L("ZodType", (e, t) => (ke.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: ho(e, "input"),
    output: ho(e, "output")
  }
}), e.toJSONSchema = Wp(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(Pt(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (r, n) => Tt(e, r, n), e.brand = () => e, e.register = (r, n) => (r.add(e, n), e), e.parse = (r, n) => Om(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Cm(e, r, n), e.parseAsync = async (r, n) => Im(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Nm(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => jm(e, r, n), e.decode = (r, n) => qm(e, r, n), e.encodeAsync = async (r, n) => zm(e, r, n), e.decodeAsync = async (r, n) => Mm(e, r, n), e.safeEncode = (r, n) => Am(e, r, n), e.safeDecode = (r, n) => Dm(e, r, n), e.safeEncodeAsync = async (r, n) => Um(e, r, n), e.safeDecodeAsync = async (r, n) => Vm(e, r, n), e.refine = (r, n) => e.check(q_(r, n)), e.superRefine = (r) => e.check(z_(r)), e.overwrite = (r) => e.check(/* @__PURE__ */ cr(r)), e.optional = () => Ce(e), e.exactOptional = () => w_(e), e.nullable = () => Ga(e), e.nullish = () => Ce(Ga(e)), e.nonoptional = (r) => T_(e, r), e.array = () => G(e), e.or = (r) => Oe([e, r]), e.and = (r) => ea(e, r), e.transform = (r) => ks(e, pl(r)), e.default = (r) => E_(e, r), e.prefault = (r) => P_(e, r), e.catch = (r) => O_(e, r), e.pipe = (r) => ks(e, r), e.readonly = () => N_(e), e.describe = (r) => {
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
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (r) => r(e), e)), ul = /* @__PURE__ */ L("_ZodString", (e, t) => {
  Ys.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => Qp(e, n, o);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(/* @__PURE__ */ jp(...n)), e.includes = (...n) => e.check(/* @__PURE__ */ Mp(...n)), e.startsWith = (...n) => e.check(/* @__PURE__ */ Ap(...n)), e.endsWith = (...n) => e.check(/* @__PURE__ */ Dp(...n)), e.min = (...n) => e.check(/* @__PURE__ */ fo(...n)), e.max = (...n) => e.check(/* @__PURE__ */ tl(...n)), e.length = (...n) => e.check(/* @__PURE__ */ rl(...n)), e.nonempty = (...n) => e.check(/* @__PURE__ */ fo(1, ...n)), e.lowercase = (n) => e.check(/* @__PURE__ */ qp(n)), e.uppercase = (n) => e.check(/* @__PURE__ */ zp(n)), e.trim = () => e.check(/* @__PURE__ */ Vp()), e.normalize = (...n) => e.check(/* @__PURE__ */ Up(...n)), e.toLowerCase = () => e.check(/* @__PURE__ */ Lp()), e.toUpperCase = () => e.check(/* @__PURE__ */ Fp()), e.slugify = () => e.check(/* @__PURE__ */ Zp());
}), Lm = /* @__PURE__ */ L("ZodString", (e, t) => {
  Ys.init(e, t), ul.init(e, t), e.email = (r) => e.check(/* @__PURE__ */ tp(Fm, r)), e.url = (r) => e.check(/* @__PURE__ */ el(ll, r)), e.jwt = (r) => e.check(/* @__PURE__ */ $p(o_, r)), e.emoji = (r) => e.check(/* @__PURE__ */ ap(Hm, r)), e.guid = (r) => e.check(/* @__PURE__ */ Fa(xa, r)), e.uuid = (r) => e.check(/* @__PURE__ */ rp(zr, r)), e.uuidv4 = (r) => e.check(/* @__PURE__ */ np(zr, r)), e.uuidv6 = (r) => e.check(/* @__PURE__ */ op(zr, r)), e.uuidv7 = (r) => e.check(/* @__PURE__ */ sp(zr, r)), e.nanoid = (r) => e.check(/* @__PURE__ */ ip(Km, r)), e.guid = (r) => e.check(/* @__PURE__ */ Fa(xa, r)), e.cuid = (r) => e.check(/* @__PURE__ */ cp(xm, r)), e.cuid2 = (r) => e.check(/* @__PURE__ */ up(Jm, r)), e.ulid = (r) => e.check(/* @__PURE__ */ lp(Gm, r)), e.base64 = (r) => e.check(/* @__PURE__ */ yp(t_, r)), e.base64url = (r) => e.check(/* @__PURE__ */ gp(r_, r)), e.xid = (r) => e.check(/* @__PURE__ */ dp(Wm, r)), e.ksuid = (r) => e.check(/* @__PURE__ */ fp(Bm, r)), e.ipv4 = (r) => e.check(/* @__PURE__ */ hp(Qm, r)), e.ipv6 = (r) => e.check(/* @__PURE__ */ pp(Ym, r)), e.cidrv4 = (r) => e.check(/* @__PURE__ */ mp(Xm, r)), e.cidrv6 = (r) => e.check(/* @__PURE__ */ _p(e_, r)), e.e164 = (r) => e.check(/* @__PURE__ */ vp(n_, r)), e.datetime = (r) => e.check(cl(r)), e.date = (r) => e.check(Sm(r)), e.time = (r) => e.check(km(r)), e.duration = (r) => e.check(Tm(r));
});
function j(e) {
  return /* @__PURE__ */ ep(Lm, e);
}
const je = /* @__PURE__ */ L("ZodStringFormat", (e, t) => {
  Re.init(e, t), ul.init(e, t);
}), Fm = /* @__PURE__ */ L("ZodEmail", (e, t) => {
  sh.init(e, t), je.init(e, t);
}), xa = /* @__PURE__ */ L("ZodGUID", (e, t) => {
  nh.init(e, t), je.init(e, t);
}), zr = /* @__PURE__ */ L("ZodUUID", (e, t) => {
  oh.init(e, t), je.init(e, t);
}), ll = /* @__PURE__ */ L("ZodURL", (e, t) => {
  ah.init(e, t), je.init(e, t);
});
function Zm(e) {
  return /* @__PURE__ */ el(ll, e);
}
const Hm = /* @__PURE__ */ L("ZodEmoji", (e, t) => {
  ih.init(e, t), je.init(e, t);
}), Km = /* @__PURE__ */ L("ZodNanoID", (e, t) => {
  ch.init(e, t), je.init(e, t);
}), xm = /* @__PURE__ */ L("ZodCUID", (e, t) => {
  uh.init(e, t), je.init(e, t);
}), Jm = /* @__PURE__ */ L("ZodCUID2", (e, t) => {
  lh.init(e, t), je.init(e, t);
}), Gm = /* @__PURE__ */ L("ZodULID", (e, t) => {
  dh.init(e, t), je.init(e, t);
}), Wm = /* @__PURE__ */ L("ZodXID", (e, t) => {
  fh.init(e, t), je.init(e, t);
}), Bm = /* @__PURE__ */ L("ZodKSUID", (e, t) => {
  hh.init(e, t), je.init(e, t);
}), Qm = /* @__PURE__ */ L("ZodIPv4", (e, t) => {
  gh.init(e, t), je.init(e, t);
}), Ym = /* @__PURE__ */ L("ZodIPv6", (e, t) => {
  vh.init(e, t), je.init(e, t);
}), Xm = /* @__PURE__ */ L("ZodCIDRv4", (e, t) => {
  $h.init(e, t), je.init(e, t);
}), e_ = /* @__PURE__ */ L("ZodCIDRv6", (e, t) => {
  wh.init(e, t), je.init(e, t);
}), t_ = /* @__PURE__ */ L("ZodBase64", (e, t) => {
  bh.init(e, t), je.init(e, t);
}), r_ = /* @__PURE__ */ L("ZodBase64URL", (e, t) => {
  Eh.init(e, t), je.init(e, t);
}), n_ = /* @__PURE__ */ L("ZodE164", (e, t) => {
  kh.init(e, t), je.init(e, t);
}), o_ = /* @__PURE__ */ L("ZodJWT", (e, t) => {
  Th.init(e, t), je.init(e, t);
}), Xs = /* @__PURE__ */ L("ZodNumber", (e, t) => {
  Wu.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => Yp(e, n, o), e.gt = (n, o) => e.check(/* @__PURE__ */ Ha(n, o)), e.gte = (n, o) => e.check(/* @__PURE__ */ Bo(n, o)), e.min = (n, o) => e.check(/* @__PURE__ */ Bo(n, o)), e.lt = (n, o) => e.check(/* @__PURE__ */ Za(n, o)), e.lte = (n, o) => e.check(/* @__PURE__ */ Wo(n, o)), e.max = (n, o) => e.check(/* @__PURE__ */ Wo(n, o)), e.int = (n) => e.check(Ja(n)), e.safe = (n) => e.check(Ja(n)), e.positive = (n) => e.check(/* @__PURE__ */ Ha(0, n)), e.nonnegative = (n) => e.check(/* @__PURE__ */ Bo(0, n)), e.negative = (n) => e.check(/* @__PURE__ */ Za(0, n)), e.nonpositive = (n) => e.check(/* @__PURE__ */ Wo(0, n)), e.multipleOf = (n, o) => e.check(/* @__PURE__ */ Ka(n, o)), e.step = (n, o) => e.check(/* @__PURE__ */ Ka(n, o)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function he(e) {
  return /* @__PURE__ */ kp(Xs, e);
}
const s_ = /* @__PURE__ */ L("ZodNumberFormat", (e, t) => {
  Rh.init(e, t), Xs.init(e, t);
});
function Ja(e) {
  return /* @__PURE__ */ Tp(s_, e);
}
const a_ = /* @__PURE__ */ L("ZodBoolean", (e, t) => {
  Oh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => Xp(e, r, n);
});
function Se(e) {
  return /* @__PURE__ */ Rp(a_, e);
}
const i_ = /* @__PURE__ */ L("ZodNull", (e, t) => {
  Ih.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => em(e, r, n);
});
function c_(e) {
  return /* @__PURE__ */ Op(i_, e);
}
const u_ = /* @__PURE__ */ L("ZodAny", (e, t) => {
  Ch.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => rm();
});
function l_() {
  return /* @__PURE__ */ Ip(u_);
}
const d_ = /* @__PURE__ */ L("ZodUnknown", (e, t) => {
  Nh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => nm();
});
function Ne() {
  return /* @__PURE__ */ Cp(d_);
}
const f_ = /* @__PURE__ */ L("ZodNever", (e, t) => {
  jh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => tm(e, r, n);
});
function h_(e) {
  return /* @__PURE__ */ Np(f_, e);
}
const p_ = /* @__PURE__ */ L("ZodArray", (e, t) => {
  qh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => cm(e, r, n, o), e.element = t.element, e.min = (r, n) => e.check(/* @__PURE__ */ fo(r, n)), e.nonempty = (r) => e.check(/* @__PURE__ */ fo(1, r)), e.max = (r, n) => e.check(/* @__PURE__ */ tl(r, n)), e.length = (r, n) => e.check(/* @__PURE__ */ rl(r, n)), e.unwrap = () => e.element;
});
function G(e, t) {
  return /* @__PURE__ */ Hp(p_, e, t);
}
const dl = /* @__PURE__ */ L("ZodObject", (e, t) => {
  Mh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => um(e, r, n, o), me(e, "shape", () => t.shape), e.keyof = () => et(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Ne() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Ne() }), e.strict = () => e.clone({ ...e._zod.def, catchall: h_() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => ef(e, r), e.safeExtend = (r) => tf(e, r), e.merge = (r) => rf(e, r), e.pick = (r) => Yd(e, r), e.omit = (r) => Xd(e, r), e.partial = (...r) => nf(ml, e, r[0]), e.required = (...r) => of(_l, e, r[0]);
});
function W(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...Y(t)
  };
  return new dl(r);
}
function Ze(e, t) {
  return new dl({
    type: "object",
    shape: e,
    catchall: Ne(),
    ...Y(t)
  });
}
const fl = /* @__PURE__ */ L("ZodUnion", (e, t) => {
  Yu.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => lm(e, r, n, o), e.options = t.options;
});
function Oe(e, t) {
  return new fl({
    type: "union",
    options: e,
    ...Y(t)
  });
}
const m_ = /* @__PURE__ */ L("ZodDiscriminatedUnion", (e, t) => {
  fl.init(e, t), Ah.init(e, t);
});
function hl(e, t, r) {
  return new m_({
    type: "union",
    options: t,
    discriminator: e,
    ...Y(r)
  });
}
const __ = /* @__PURE__ */ L("ZodIntersection", (e, t) => {
  Dh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => dm(e, r, n, o);
});
function ea(e, t) {
  return new __({
    type: "intersection",
    left: e,
    right: t
  });
}
const y_ = /* @__PURE__ */ L("ZodRecord", (e, t) => {
  Uh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => fm(e, r, n, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Ee(e, t, r) {
  return new y_({
    type: "record",
    keyType: e,
    valueType: t,
    ...Y(r)
  });
}
const Es = /* @__PURE__ */ L("ZodEnum", (e, t) => {
  Vh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (n, o, s) => om(e, n, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, o) => {
    const s = {};
    for (const a of n)
      if (r.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Es({
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
    return new Es({
      ...t,
      checks: [],
      ...Y(o),
      entries: s
    });
  };
});
function et(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Es({
    type: "enum",
    entries: r,
    ...Y(t)
  });
}
const g_ = /* @__PURE__ */ L("ZodLiteral", (e, t) => {
  Lh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => sm(e, r, n), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function X(e, t) {
  return new g_({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...Y(t)
  });
}
const v_ = /* @__PURE__ */ L("ZodTransform", (e, t) => {
  Fh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => im(e, r), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new Nu(e.constructor.name);
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
  return new v_({
    type: "transform",
    transform: e
  });
}
const ml = /* @__PURE__ */ L("ZodOptional", (e, t) => {
  Xu.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => al(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Ce(e) {
  return new ml({
    type: "optional",
    innerType: e
  });
}
const $_ = /* @__PURE__ */ L("ZodExactOptional", (e, t) => {
  Zh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => al(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function w_(e) {
  return new $_({
    type: "optional",
    innerType: e
  });
}
const b_ = /* @__PURE__ */ L("ZodNullable", (e, t) => {
  Hh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => hm(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function Ga(e) {
  return new b_({
    type: "nullable",
    innerType: e
  });
}
const S_ = /* @__PURE__ */ L("ZodDefault", (e, t) => {
  Kh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => mm(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function E_(e, t) {
  return new S_({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Mu(t);
    }
  });
}
const k_ = /* @__PURE__ */ L("ZodPrefault", (e, t) => {
  xh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => _m(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function P_(e, t) {
  return new k_({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Mu(t);
    }
  });
}
const _l = /* @__PURE__ */ L("ZodNonOptional", (e, t) => {
  Jh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => pm(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function T_(e, t) {
  return new _l({
    type: "nonoptional",
    innerType: e,
    ...Y(t)
  });
}
const R_ = /* @__PURE__ */ L("ZodCatch", (e, t) => {
  Gh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => ym(e, r, n, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function O_(e, t) {
  return new R_({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const I_ = /* @__PURE__ */ L("ZodPipe", (e, t) => {
  Wh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => gm(e, r, n, o), e.in = t.in, e.out = t.out;
});
function ks(e, t) {
  return new I_({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const C_ = /* @__PURE__ */ L("ZodReadonly", (e, t) => {
  Bh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => vm(e, r, n, o), e.unwrap = () => e._zod.def.innerType;
});
function N_(e) {
  return new C_({
    type: "readonly",
    innerType: e
  });
}
const yl = /* @__PURE__ */ L("ZodCustom", (e, t) => {
  Qh.init(e, t), Pe.init(e, t), e._zod.processJSONSchema = (r, n, o) => am(e, r);
});
function j_(e, t) {
  return /* @__PURE__ */ Kp(yl, e ?? (() => !0), t);
}
function q_(e, t = {}) {
  return /* @__PURE__ */ xp(yl, e, t);
}
function z_(e) {
  return /* @__PURE__ */ Jp(e);
}
function gl(e, t) {
  return ks(pl(e), t);
}
const M_ = {
  custom: "custom"
};
function A_(e) {
  return /* @__PURE__ */ Pp(Xs, e);
}
const No = "2025-11-25", D_ = [No, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], Vt = "io.modelcontextprotocol/related-task", jo = "2.0", Ae = j_((e) => e !== null && (typeof e == "object" || typeof e == "function")), vl = Oe([j(), he().int()]), $l = j();
Ze({
  /**
   * Requested duration in milliseconds to retain task from creation.
   */
  ttl: he().optional(),
  /**
   * Time in milliseconds to wait between task status requests.
   */
  pollInterval: he().optional()
});
const U_ = W({
  ttl: he().optional()
}), V_ = W({
  taskId: j()
}), ta = Ze({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: vl.optional(),
  /**
   * If specified, this request is related to the provided task.
   */
  [Vt]: V_.optional()
}), tt = W({
  /**
   * See [General fields: `_meta`](/specification/draft/basic/index#meta) for notes on `_meta` usage.
   */
  _meta: ta.optional()
}), Tr = tt.extend({
  /**
   * If specified, the caller is requesting task-augmented execution for this request.
   * The request will return a CreateTaskResult immediately, and the actual result can be
   * retrieved later via tasks/result.
   *
   * Task augmentation is subject to capability negotiation - receivers MUST declare support
   * for task augmentation of specific request types in their capabilities.
   */
  task: U_.optional()
}), L_ = (e) => Tr.safeParse(e).success, He = W({
  method: j(),
  params: tt.loose().optional()
}), ot = W({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ta.optional()
}), st = W({
  method: j(),
  params: ot.loose().optional()
}), Ke = Ze({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: ta.optional()
}), qo = Oe([j(), he().int()]), wl = W({
  jsonrpc: X(jo),
  id: qo,
  ...He.shape
}).strict(), Ps = (e) => wl.safeParse(e).success, bl = W({
  jsonrpc: X(jo),
  ...st.shape
}).strict(), F_ = (e) => bl.safeParse(e).success, ra = W({
  jsonrpc: X(jo),
  id: qo,
  result: Ke
}).strict(), vr = (e) => ra.safeParse(e).success;
var ne;
(function(e) {
  e[e.ConnectionClosed = -32e3] = "ConnectionClosed", e[e.RequestTimeout = -32001] = "RequestTimeout", e[e.ParseError = -32700] = "ParseError", e[e.InvalidRequest = -32600] = "InvalidRequest", e[e.MethodNotFound = -32601] = "MethodNotFound", e[e.InvalidParams = -32602] = "InvalidParams", e[e.InternalError = -32603] = "InternalError", e[e.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(ne || (ne = {}));
const na = W({
  jsonrpc: X(jo),
  id: qo.optional(),
  error: W({
    /**
     * The error type that occurred.
     */
    code: he().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: j(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: Ne().optional()
  })
}).strict(), Z_ = (e) => na.safeParse(e).success, ao = Oe([
  wl,
  bl,
  ra,
  na
]);
Oe([ra, na]);
const er = Ke.strict(), H_ = ot.extend({
  /**
   * The ID of the request to cancel.
   *
   * This MUST correspond to the ID of a request previously issued in the same direction.
   */
  requestId: qo.optional(),
  /**
   * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
   */
  reason: j().optional()
}), oa = st.extend({
  method: X("notifications/cancelled"),
  params: H_
}), K_ = W({
  /**
   * URL or data URI for the icon.
   */
  src: j(),
  /**
   * Optional MIME type for the icon.
   */
  mimeType: j().optional(),
  /**
   * Optional array of strings that specify sizes at which the icon can be used.
   * Each string should be in WxH format (e.g., `"48x48"`, `"96x96"`) or `"any"` for scalable formats like SVG.
   *
   * If not provided, the client should assume that the icon can be used at any size.
   */
  sizes: G(j()).optional(),
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
  icons: G(K_).optional()
}), ar = W({
  /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
  name: j(),
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title: j().optional()
}), Sl = ar.extend({
  ...ar.shape,
  ...Rr.shape,
  version: j(),
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl: j().optional(),
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description: j().optional()
}), x_ = ea(W({
  applyDefaults: Se().optional()
}), Ee(j(), Ne())), J_ = gl((e) => e && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0 ? { form: {} } : e, ea(W({
  form: x_.optional(),
  url: Ae.optional()
}), Ee(j(), Ne()).optional())), G_ = Ze({
  /**
   * Present if the client supports listing tasks.
   */
  list: Ae.optional(),
  /**
   * Present if the client supports cancelling tasks.
   */
  cancel: Ae.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: Ze({
    /**
     * Task support for sampling requests.
     */
    sampling: Ze({
      createMessage: Ae.optional()
    }).optional(),
    /**
     * Task support for elicitation requests.
     */
    elicitation: Ze({
      create: Ae.optional()
    }).optional()
  }).optional()
}), W_ = Ze({
  /**
   * Present if the server supports listing tasks.
   */
  list: Ae.optional(),
  /**
   * Present if the server supports cancelling tasks.
   */
  cancel: Ae.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: Ze({
    /**
     * Task support for tool requests.
     */
    tools: Ze({
      call: Ae.optional()
    }).optional()
  }).optional()
}), B_ = W({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: Ee(j(), Ae).optional(),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: W({
    /**
     * Present if the client supports context inclusion via includeContext parameter.
     * If not declared, servers SHOULD only use `includeContext: "none"` (or omit it).
     */
    context: Ae.optional(),
    /**
     * Present if the client supports tool use via tools and toolChoice parameters.
     */
    tools: Ae.optional()
  }).optional(),
  /**
   * Present if the client supports eliciting user input.
   */
  elicitation: J_.optional(),
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
  tasks: G_.optional(),
  /**
   * Extensions that the client supports. Keys are extension identifiers (vendor-prefix/extension-name).
   */
  extensions: Ee(j(), Ae).optional()
}), Q_ = tt.extend({
  /**
   * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
   */
  protocolVersion: j(),
  capabilities: B_,
  clientInfo: Sl
}), Y_ = He.extend({
  method: X("initialize"),
  params: Q_
}), X_ = W({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: Ee(j(), Ae).optional(),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: Ae.optional(),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: Ae.optional(),
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
  tasks: W_.optional(),
  /**
   * Extensions that the server supports. Keys are extension identifiers (vendor-prefix/extension-name).
   */
  extensions: Ee(j(), Ae).optional()
}), El = Ke.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: j(),
  capabilities: X_,
  serverInfo: Sl,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: j().optional()
}), kl = st.extend({
  method: X("notifications/initialized"),
  params: ot.optional()
}), ey = (e) => kl.safeParse(e).success, sa = He.extend({
  method: X("ping"),
  params: tt.optional()
}), ty = W({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: he(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: Ce(he()),
  /**
   * An optional message describing the current progress.
   */
  message: Ce(j())
}), ry = W({
  ...ot.shape,
  ...ty.shape,
  /**
   * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
   */
  progressToken: vl
}), zo = st.extend({
  method: X("notifications/progress"),
  params: ry
}), ny = tt.extend({
  /**
   * An opaque token representing the current pagination position.
   * If provided, the server should return results starting after this cursor.
   */
  cursor: $l.optional()
}), Or = He.extend({
  params: ny.optional()
}), Ir = Ke.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: $l.optional()
}), oy = et(["working", "input_required", "completed", "failed", "cancelled"]), Cr = W({
  taskId: j(),
  status: oy,
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: Oe([he(), c_()]),
  /**
   * ISO 8601 timestamp when the task was created.
   */
  createdAt: j(),
  /**
   * ISO 8601 timestamp when the task was last updated.
   */
  lastUpdatedAt: j(),
  pollInterval: Ce(he()),
  /**
   * Optional diagnostic message for failed tasks or other status information.
   */
  statusMessage: Ce(j())
}), Pr = Ke.extend({
  task: Cr
}), sy = ot.merge(Cr), po = st.extend({
  method: X("notifications/tasks/status"),
  params: sy
}), aa = He.extend({
  method: X("tasks/get"),
  params: tt.extend({
    taskId: j()
  })
}), ia = Ke.merge(Cr), ca = He.extend({
  method: X("tasks/result"),
  params: tt.extend({
    taskId: j()
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
    taskId: j()
  })
}), ay = Ke.merge(Cr), Pl = W({
  /**
   * The URI of this resource.
   */
  uri: j(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: Ce(j()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), Tl = Pl.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: j()
}), fa = j().refine((e) => {
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
  priority: he().min(0).max(1).optional(),
  /**
   * ISO 8601 timestamp for the most recent modification.
   */
  lastModified: cl({ offset: !0 }).optional()
}), Ol = W({
  ...ar.shape,
  ...Rr.shape,
  /**
   * The URI of this resource.
   */
  uri: j(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: Ce(j()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: Ce(j()),
  /**
   * The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.
   *
   * This can be used by Hosts to display file sizes and estimate context window usage.
   */
  size: Ce(he()),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(Ze({}))
}), iy = W({
  ...ar.shape,
  ...Rr.shape,
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: j(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: Ce(j()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: Ce(j()),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(Ze({}))
}), cy = Or.extend({
  method: X("resources/list")
}), Il = Ir.extend({
  resources: G(Ol)
}), uy = Or.extend({
  method: X("resources/templates/list")
}), Cl = Ir.extend({
  resourceTemplates: G(iy)
}), ha = tt.extend({
  /**
   * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
   *
   * @format uri
   */
  uri: j()
}), ly = ha, dy = He.extend({
  method: X("resources/read"),
  params: ly
}), Nl = Ke.extend({
  contents: G(Oe([Tl, Rl]))
}), jl = st.extend({
  method: X("notifications/resources/list_changed"),
  params: ot.optional()
}), fy = ha, hy = He.extend({
  method: X("resources/subscribe"),
  params: fy
}), py = ha, my = He.extend({
  method: X("resources/unsubscribe"),
  params: py
}), _y = ot.extend({
  /**
   * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
   */
  uri: j()
}), yy = st.extend({
  method: X("notifications/resources/updated"),
  params: _y
}), gy = W({
  /**
   * The name of the argument.
   */
  name: j(),
  /**
   * A human-readable description of the argument.
   */
  description: Ce(j()),
  /**
   * Whether this argument must be provided.
   */
  required: Ce(Se())
}), vy = W({
  ...ar.shape,
  ...Rr.shape,
  /**
   * An optional description of what this prompt provides
   */
  description: Ce(j()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: Ce(G(gy)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ce(Ze({}))
}), $y = Or.extend({
  method: X("prompts/list")
}), ql = Ir.extend({
  prompts: G(vy)
}), wy = tt.extend({
  /**
   * The name of the prompt or prompt template.
   */
  name: j(),
  /**
   * Arguments to use for templating the prompt.
   */
  arguments: Ee(j(), j()).optional()
}), by = He.extend({
  method: X("prompts/get"),
  params: wy
}), pa = W({
  type: X("text"),
  /**
   * The text content of the message.
   */
  text: j(),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), ma = W({
  type: X("image"),
  /**
   * The base64-encoded image data.
   */
  data: fa,
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: j(),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), _a = W({
  type: X("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: fa,
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: j(),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), Sy = W({
  type: X("tool_use"),
  /**
   * The name of the tool to invoke.
   * Must match a tool name from the request's tools array.
   */
  name: j(),
  /**
   * Unique identifier for this tool call.
   * Used to correlate with ToolResultContent in subsequent messages.
   */
  id: j(),
  /**
   * Arguments to pass to the tool.
   * Must conform to the tool's inputSchema.
   */
  input: Ee(j(), Ne()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), Ey = W({
  type: X("resource"),
  resource: Oe([Tl, Rl]),
  /**
   * Optional annotations for the client.
   */
  annotations: ur.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), ky = Ol.extend({
  type: X("resource_link")
}), ya = Oe([
  pa,
  ma,
  _a,
  ky,
  Ey
]), Py = W({
  role: Nr,
  content: ya
}), zl = Ke.extend({
  /**
   * An optional description for the prompt.
   */
  description: j().optional(),
  messages: G(Py)
}), Ml = st.extend({
  method: X("notifications/prompts/list_changed"),
  params: ot.optional()
}), Ty = W({
  /**
   * A human-readable title for the tool.
   */
  title: j().optional(),
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
}), Ry = W({
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
  description: j().optional(),
  /**
   * A JSON Schema 2020-12 object defining the expected parameters for the tool.
   * Must have type: 'object' at the root level per MCP spec.
   */
  inputSchema: W({
    type: X("object"),
    properties: Ee(j(), Ae).optional(),
    required: G(j()).optional()
  }).catchall(Ne()),
  /**
   * An optional JSON Schema 2020-12 object defining the structure of the tool's output
   * returned in the structuredContent field of a CallToolResult.
   * Must have type: 'object' at the root level per MCP spec.
   */
  outputSchema: W({
    type: X("object"),
    properties: Ee(j(), Ae).optional(),
    required: G(j()).optional()
  }).catchall(Ne()).optional(),
  /**
   * Optional additional tool information.
   */
  annotations: Ty.optional(),
  /**
   * Execution-related properties for this tool.
   */
  execution: Ry.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), Oy = Or.extend({
  method: X("tools/list")
}), ga = Ir.extend({
  tools: G(Al)
}), Mo = Ke.extend({
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
  structuredContent: Ee(j(), Ne()).optional(),
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
Mo.or(Ke.extend({
  toolResult: Ne()
}));
const Iy = Tr.extend({
  /**
   * The name of the tool to call.
   */
  name: j(),
  /**
   * Arguments to pass to the tool.
   */
  arguments: Ee(j(), Ne()).optional()
}), Cy = He.extend({
  method: X("tools/call"),
  params: Iy
}), Dl = st.extend({
  method: X("notifications/tools/list_changed"),
  params: ot.optional()
}), Ny = W({
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
  debounceMs: he().int().nonnegative().default(300)
}), Ul = et(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), jy = tt.extend({
  /**
   * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
   */
  level: Ul
}), qy = He.extend({
  method: X("logging/setLevel"),
  params: jy
}), zy = ot.extend({
  /**
   * The severity of this log message.
   */
  level: Ul,
  /**
   * An optional name of the logger issuing this message.
   */
  logger: j().optional(),
  /**
   * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
   */
  data: Ne()
}), Vl = st.extend({
  method: X("notifications/message"),
  params: zy
}), My = W({
  /**
   * A hint for a model name.
   */
  name: j().optional()
}), Ay = W({
  /**
   * Optional hints to use for model selection.
   */
  hints: G(My).optional(),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: he().min(0).max(1).optional(),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: he().min(0).max(1).optional(),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: he().min(0).max(1).optional()
}), Dy = W({
  /**
   * Controls when tools are used:
   * - "auto": Model decides whether to use tools (default)
   * - "required": Model MUST use at least one tool before completing
   * - "none": Model MUST NOT use any tools
   */
  mode: et(["auto", "required", "none"]).optional()
}), Uy = W({
  type: X("tool_result"),
  toolUseId: j().describe("The unique identifier for the corresponding tool call."),
  content: G(ya).default([]),
  structuredContent: W({}).loose().optional(),
  isError: Se().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), Vy = hl("type", [pa, ma, _a]), mo = hl("type", [
  pa,
  ma,
  _a,
  Sy,
  Uy
]), Ly = W({
  role: Nr,
  content: Oe([mo, G(mo)]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), Fy = Tr.extend({
  messages: G(Ly),
  /**
   * The server's preferences for which model to select. The client MAY modify or omit this request.
   */
  modelPreferences: Ay.optional(),
  /**
   * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
   */
  systemPrompt: j().optional(),
  /**
   * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt.
   * The client MAY ignore this request.
   *
   * Default is "none". Values "thisServer" and "allServers" are soft-deprecated. Servers SHOULD only use these values if the client
   * declares ClientCapabilities.sampling.context. These values may be removed in future spec releases.
   */
  includeContext: et(["none", "thisServer", "allServers"]).optional(),
  temperature: he().optional(),
  /**
   * The requested maximum number of tokens to sample (to prevent runaway completions).
   *
   * The client MAY choose to sample fewer tokens than the requested maximum.
   */
  maxTokens: he().int(),
  stopSequences: G(j()).optional(),
  /**
   * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
   */
  metadata: Ae.optional(),
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
  toolChoice: Dy.optional()
}), Ll = He.extend({
  method: X("sampling/createMessage"),
  params: Fy
}), Fl = Ke.extend({
  /**
   * The name of the model that generated the message.
   */
  model: j(),
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
  stopReason: Ce(et(["endTurn", "stopSequence", "maxTokens"]).or(j())),
  role: Nr,
  /**
   * Response content. Single content block (text, image, or audio).
   */
  content: Vy
}), Zl = Ke.extend({
  /**
   * The name of the model that generated the message.
   */
  model: j(),
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
  stopReason: Ce(et(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(j())),
  role: Nr,
  /**
   * Response content. May be a single block or array. May include ToolUseContent if stopReason is "toolUse".
   */
  content: Oe([mo, G(mo)])
}), Zy = W({
  type: X("boolean"),
  title: j().optional(),
  description: j().optional(),
  default: Se().optional()
}), Hy = W({
  type: X("string"),
  title: j().optional(),
  description: j().optional(),
  minLength: he().optional(),
  maxLength: he().optional(),
  format: et(["email", "uri", "date", "date-time"]).optional(),
  default: j().optional()
}), Ky = W({
  type: et(["number", "integer"]),
  title: j().optional(),
  description: j().optional(),
  minimum: he().optional(),
  maximum: he().optional(),
  default: he().optional()
}), xy = W({
  type: X("string"),
  title: j().optional(),
  description: j().optional(),
  enum: G(j()),
  default: j().optional()
}), Jy = W({
  type: X("string"),
  title: j().optional(),
  description: j().optional(),
  oneOf: G(W({
    const: j(),
    title: j()
  })),
  default: j().optional()
}), Gy = W({
  type: X("string"),
  title: j().optional(),
  description: j().optional(),
  enum: G(j()),
  enumNames: G(j()).optional(),
  default: j().optional()
}), Wy = Oe([xy, Jy]), By = W({
  type: X("array"),
  title: j().optional(),
  description: j().optional(),
  minItems: he().optional(),
  maxItems: he().optional(),
  items: W({
    type: X("string"),
    enum: G(j())
  }),
  default: G(j()).optional()
}), Qy = W({
  type: X("array"),
  title: j().optional(),
  description: j().optional(),
  minItems: he().optional(),
  maxItems: he().optional(),
  items: W({
    anyOf: G(W({
      const: j(),
      title: j()
    }))
  }),
  default: G(j()).optional()
}), Yy = Oe([By, Qy]), Xy = Oe([Gy, Wy, Yy]), eg = Oe([Xy, Zy, Hy, Ky]), tg = Tr.extend({
  /**
   * The elicitation mode.
   *
   * Optional for backward compatibility. Clients MUST treat missing mode as "form".
   */
  mode: X("form").optional(),
  /**
   * The message to present to the user describing what information is being requested.
   */
  message: j(),
  /**
   * A restricted subset of JSON Schema.
   * Only top-level properties are allowed, without nesting.
   */
  requestedSchema: W({
    type: X("object"),
    properties: Ee(j(), eg),
    required: G(j()).optional()
  })
}), rg = Tr.extend({
  /**
   * The elicitation mode.
   */
  mode: X("url"),
  /**
   * The message to present to the user explaining why the interaction is needed.
   */
  message: j(),
  /**
   * The ID of the elicitation, which must be unique within the context of the server.
   * The client MUST treat this ID as an opaque value.
   */
  elicitationId: j(),
  /**
   * The URL that the user should navigate to.
   */
  url: j().url()
}), ng = Oe([tg, rg]), Hl = He.extend({
  method: X("elicitation/create"),
  params: ng
}), og = ot.extend({
  /**
   * The ID of the elicitation that completed.
   */
  elicitationId: j()
}), sg = st.extend({
  method: X("notifications/elicitation/complete"),
  params: og
}), Kl = Ke.extend({
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
  content: gl((e) => e === null ? void 0 : e, Ee(j(), Oe([j(), he(), Se(), G(j())])).optional())
}), ag = W({
  type: X("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: j()
}), ig = W({
  type: X("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: j()
}), cg = tt.extend({
  ref: Oe([ig, ag]),
  /**
   * The argument's information
   */
  argument: W({
    /**
     * The name of the argument
     */
    name: j(),
    /**
     * The value of the argument to use for completion matching.
     */
    value: j()
  }),
  context: W({
    /**
     * Previously-resolved variables in a URI template or prompt.
     */
    arguments: Ee(j(), j()).optional()
  }).optional()
}), ug = He.extend({
  method: X("completion/complete"),
  params: cg
}), xl = Ke.extend({
  completion: Ze({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: G(j()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: Ce(he().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: Ce(Se())
  })
}), lg = W({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: j().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: j().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: Ee(j(), Ne()).optional()
}), dg = He.extend({
  method: X("roots/list"),
  params: tt.optional()
}), fg = Ke.extend({
  roots: G(lg)
}), hg = st.extend({
  method: X("notifications/roots/list_changed"),
  params: ot.optional()
});
Oe([
  sa,
  Y_,
  ug,
  qy,
  by,
  $y,
  cy,
  uy,
  dy,
  hy,
  my,
  Cy,
  Oy,
  aa,
  ca,
  ua,
  da
]);
Oe([
  oa,
  zo,
  kl,
  hg,
  po
]);
Oe([
  er,
  Fl,
  Zl,
  Kl,
  fg,
  ia,
  la,
  Pr
]);
Oe([
  sa,
  Ll,
  Hl,
  dg,
  aa,
  ca,
  ua,
  da
]);
Oe([
  oa,
  zo,
  Vl,
  yy,
  jl,
  Dl,
  Ml,
  po,
  sg
]);
Oe([
  er,
  El,
  xl,
  zl,
  ql,
  Il,
  Cl,
  Nl,
  Mo,
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
        return new pg(o.elicitations, r);
    }
    return new re(t, r, n);
  }
}
class pg extends re {
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
  const t = il(e), r = t == null ? void 0 : t.method;
  if (!r)
    throw new Error("Schema is missing a method literal");
  const n = $m(r);
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
const mg = 6e4;
class _g {
  constructor(t) {
    this._options = t, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(oa, (r) => {
      this._oncancel(r);
    }), this.setNotificationHandler(zo, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(
      sa,
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
              const d = c.message, l = d.id, g = this._requestResolvers.get(l);
              if (g)
                if (this._requestResolvers.delete(l), c.type === "response")
                  g(d);
                else {
                  const $ = d, v = new re($.error.code, $.error.message, $.error.data);
                  g(v);
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
      o == null || o(c, d), vr(c) || Z_(c) ? this._onresponse(c) : Ps(c) ? this._onrequest(c, d) : F_(c) ? this._onnotification(c) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(c)}`));
    }, await this._transport.start();
  }
  _onclose() {
    var n;
    const t = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const o of this._timeoutInfo.values())
      clearTimeout(o.timeoutId);
    this._timeoutInfo.clear();
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
    var l, g, $, v;
    const n = this._requestHandlers.get(t.method) ?? this.fallbackRequestHandler, o = this._transport, s = ($ = (g = (l = t.params) == null ? void 0 : l._meta) == null ? void 0 : g[Vt]) == null ? void 0 : $.taskId;
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
    const i = L_(t.params) ? t.params.task : void 0, c = this._taskStore ? this.requestTaskStore(t, o == null ? void 0 : o.sessionId) : void 0, d = {
      signal: a.signal,
      sessionId: o == null ? void 0 : o.sessionId,
      _meta: (v = t.params) == null ? void 0 : v._meta,
      sendNotification: async (w) => {
        if (a.signal.aborted)
          return;
        const b = { relatedRequestId: t.id };
        s && (b.relatedTask = { taskId: s }), await this.notification(w, b);
      },
      sendRequest: async (w, b, h) => {
        var m;
        if (a.signal.aborted)
          throw new re(ne.ConnectionClosed, "Request was cancelled");
        const _ = { ...h, relatedRequestId: t.id };
        s && !_.relatedTask && (_.relatedTask = { taskId: s });
        const u = ((m = _.relatedTask) == null ? void 0 : m.taskId) ?? s;
        return u && c && await c.updateTaskStatus(u, "input_required"), await this.request(w, b, _);
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
      this._requestHandlerAbortControllers.get(t.id) === a && this._requestHandlerAbortControllers.delete(t.id);
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
        await new Promise((g) => setTimeout(g, l)), (i = n == null ? void 0 : n.signal) == null || i.throwIfAborted();
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
      var u, m, S, p, y;
      const g = (k) => {
        l(k);
      };
      if (!this._transport) {
        g(new Error("Not connected"));
        return;
      }
      if (((u = this._options) == null ? void 0 : u.enforceStrictCapabilities) === !0)
        try {
          this.assertCapabilityForMethod(t.method), i && this.assertTaskCapability(t.method);
        } catch (k) {
          g(k);
          return;
        }
      (m = n == null ? void 0 : n.signal) == null || m.throwIfAborted();
      const $ = this._requestMessageId++, v = {
        ...t,
        jsonrpc: "2.0",
        id: $
      };
      n != null && n.onprogress && (this._progressHandlers.set($, n.onprogress), v.params = {
        ...t.params,
        _meta: {
          ...((S = t.params) == null ? void 0 : S._meta) || {},
          progressToken: $
        }
      }), i && (v.params = {
        ...v.params,
        task: i
      }), c && (v.params = {
        ...v.params,
        _meta: {
          ...((p = v.params) == null ? void 0 : p._meta) || {},
          [Vt]: c
        }
      });
      const w = (k) => {
        var z;
        this._responseHandlers.delete($), this._progressHandlers.delete($), this._cleanupTimeout($), (z = this._transport) == null || z.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: $,
            reason: String(k)
          }
        }, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((U) => this._onerror(new Error(`Failed to send cancellation: ${U}`)));
        const I = k instanceof re ? k : new re(ne.RequestTimeout, String(k));
        l(I);
      };
      this._responseHandlers.set($, (k) => {
        var I;
        if (!((I = n == null ? void 0 : n.signal) != null && I.aborted)) {
          if (k instanceof Error)
            return l(k);
          try {
            const z = bt(r, k.result);
            z.success ? d(z.data) : l(z.error);
          } catch (z) {
            l(z);
          }
        }
      }), (y = n == null ? void 0 : n.signal) == null || y.addEventListener("abort", () => {
        var k;
        w((k = n == null ? void 0 : n.signal) == null ? void 0 : k.reason);
      });
      const b = (n == null ? void 0 : n.timeout) ?? mg, h = () => w(re.fromError(ne.RequestTimeout, "Request timed out", { timeout: b }));
      this._setupTimeout($, b, n == null ? void 0 : n.maxTotalTimeout, h, (n == null ? void 0 : n.resetTimeoutOnProgress) ?? !1);
      const _ = c == null ? void 0 : c.taskId;
      if (_) {
        const k = (I) => {
          const z = this._responseHandlers.get($);
          z ? z(I) : this._onerror(new Error(`Response handler missing for side-channeled request ${$}`));
        };
        this._requestResolvers.set($, k), this._enqueueTaskMessage(_, {
          type: "request",
          message: v,
          timestamp: Date.now()
        }).catch((I) => {
          this._cleanupTimeout($), l(I);
        });
      } else
        this._transport.send(v, { relatedRequestId: o, resumptionToken: s, onresumptiontoken: a }).catch((k) => {
          this._cleanupTimeout($), l(k);
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
    return this.request({ method: "tasks/cancel", params: t }, ay, r);
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
      const g = {
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
        message: g,
        timestamp: Date.now()
      });
      return;
    }
    if ((((d = this._options) == null ? void 0 : d.debouncedNotificationMethods) ?? []).includes(t.method) && !t.params && !(r != null && r.relatedRequestId) && !(r != null && r.relatedTask)) {
      if (this._pendingDebouncedNotifications.has(t.method))
        return;
      this._pendingDebouncedNotifications.add(t.method), Promise.resolve().then(() => {
        var $, v;
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
              ...(($ = g.params) == null ? void 0 : $._meta) || {},
              [Vt]: r.relatedTask
            }
          }
        }), (v = this._transport) == null || v.send(g, r).catch((w) => this._onerror(w));
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
        if (o.type === "request" && Ps(o.message)) {
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
function yg(e, t) {
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
var Mr = { exports: {} }, Qo = {}, ht = {}, qt = {}, Yo = {}, Xo = {}, es = {}, Ya;
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((m, S) => `${m}${S}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((m, S) => (S instanceof r && (m[S.str] = (m[S.str] || 0) + 1), m), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(_, ...u) {
      const m = [_[0]];
      let S = 0;
      for (; S < u.length; )
        i(m, u[S]), m.push(_[++S]);
      return new n(m);
    }
    e._ = o;
    const s = new n("+");
    function a(_, ...u) {
      const m = [v(_[0])];
      let S = 0;
      for (; S < u.length; )
        m.push(s), i(m, u[S]), m.push(s, v(_[++S]));
      return c(m), new n(m);
    }
    e.str = a;
    function i(_, u) {
      u instanceof n ? _.push(...u._items) : u instanceof r ? _.push(u) : _.push(g(u));
    }
    e.addCodeArg = i;
    function c(_) {
      let u = 1;
      for (; u < _.length - 1; ) {
        if (_[u] === s) {
          const m = d(_[u - 1], _[u + 1]);
          if (m !== void 0) {
            _.splice(u - 1, 3, m);
            continue;
          }
          _[u++] = "+";
        }
        u++;
      }
    }
    function d(_, u) {
      if (u === '""')
        return _;
      if (_ === '""')
        return u;
      if (typeof _ == "string")
        return u instanceof r || _[_.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${_.slice(0, -1)}${u}"` : u[0] === '"' ? _.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(_ instanceof r))
        return `"${_}${u.slice(1)}`;
    }
    function l(_, u) {
      return u.emptyStr() ? _ : _.emptyStr() ? u : a`${_}${u}`;
    }
    e.strConcat = l;
    function g(_) {
      return typeof _ == "number" || typeof _ == "boolean" || _ === null ? _ : v(Array.isArray(_) ? _.join(",") : _);
    }
    function $(_) {
      return new n(v(_));
    }
    e.stringify = $;
    function v(_) {
      return JSON.stringify(_).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function w(_) {
      return typeof _ == "string" && e.IDENTIFIER.test(_) ? new n(`.${_}`) : o`[${_}]`;
    }
    e.getProperty = w;
    function b(_) {
      if (typeof _ == "string" && e.IDENTIFIER.test(_))
        return new n(`${_}`);
      throw new Error(`CodeGen: invalid export name: ${_}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function h(_) {
      return new n(_.toString());
    }
    e.regexpCode = h;
  }(es)), es;
}
var ts = {}, Xa;
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
        var l, g;
        if (!((g = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || g === void 0) && g.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(d, l) {
        super(l), this.prefix = d;
      }
      setValue(d, { property: l, itemIndex: g }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(l)}[${g}]`;
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
        var g;
        if (l.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(d), { prefix: v } = $, w = (g = l.key) !== null && g !== void 0 ? g : l.ref;
        let b = this._values[v];
        if (b) {
          const u = b.get(w);
          if (u)
            return u;
        } else
          b = this._values[v] = /* @__PURE__ */ new Map();
        b.set(w, $);
        const h = this._scope[v] || (this._scope[v] = []), _ = h.length;
        return h[_] = l.ref, $.setValue(l, { property: v, itemIndex: _ }), $;
      }
      getValue(d, l) {
        const g = this._values[d];
        if (g)
          return g.get(l);
      }
      scopeRefs(d, l = this._values) {
        return this._reduceValues(l, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${d}${g.scopePath}`;
        });
      }
      scopeCode(d = this._values, l, g) {
        return this._reduceValues(d, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, l, g);
      }
      _reduceValues(d, l, g = {}, $) {
        let v = t.nil;
        for (const w in d) {
          const b = d[w];
          if (!b)
            continue;
          const h = g[w] = g[w] || /* @__PURE__ */ new Map();
          b.forEach((_) => {
            if (h.has(_))
              return;
            h.set(_, n.Started);
            let u = l(_);
            if (u) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${m} ${_} = ${u};${this.opts._n}`;
            } else if (u = $ == null ? void 0 : $(_))
              v = (0, t._)`${v}${u}${this.opts._n}`;
            else
              throw new r(_);
            h.set(_, n.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = i;
  }(ts)), ts;
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
      optimizeNames(f, E) {
        return this;
      }
    }
    class a extends s {
      constructor(f, E, C) {
        super(), this.varKind = f, this.name = E, this.rhs = C;
      }
      render({ es5: f, _n: E }) {
        const C = f ? r.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${C} ${this.name}${V};` + E;
      }
      optimizeNames(f, E) {
        if (f[this.name.str])
          return this.rhs && (this.rhs = x(this.rhs, f, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor(f, E, C) {
        super(), this.lhs = f, this.rhs = E, this.sideEffects = C;
      }
      render({ _n: f }) {
        return `${this.lhs} = ${this.rhs};` + f;
      }
      optimizeNames(f, E) {
        if (!(this.lhs instanceof t.Name && !f[this.lhs.str] && !this.sideEffects))
          return this.rhs = x(this.rhs, f, E), this;
      }
      get names() {
        const f = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return Z(f, this.rhs);
      }
    }
    class c extends i {
      constructor(f, E, C, V) {
        super(f, C, V), this.op = E;
      }
      render({ _n: f }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + f;
      }
    }
    class d extends s {
      constructor(f) {
        super(), this.label = f, this.names = {};
      }
      render({ _n: f }) {
        return `${this.label}:` + f;
      }
    }
    class l extends s {
      constructor(f) {
        super(), this.label = f, this.names = {};
      }
      render({ _n: f }) {
        return `break${this.label ? ` ${this.label}` : ""};` + f;
      }
    }
    class g extends s {
      constructor(f) {
        super(), this.error = f;
      }
      render({ _n: f }) {
        return `throw ${this.error};` + f;
      }
      get names() {
        return this.error.names;
      }
    }
    class $ extends s {
      constructor(f) {
        super(), this.code = f;
      }
      render({ _n: f }) {
        return `${this.code};` + f;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(f, E) {
        return this.code = x(this.code, f, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends s {
      constructor(f = []) {
        super(), this.nodes = f;
      }
      render(f) {
        return this.nodes.reduce((E, C) => E + C.render(f), "");
      }
      optimizeNodes() {
        const { nodes: f } = this;
        let E = f.length;
        for (; E--; ) {
          const C = f[E].optimizeNodes();
          Array.isArray(C) ? f.splice(E, 1, ...C) : C ? f[E] = C : f.splice(E, 1);
        }
        return f.length > 0 ? this : void 0;
      }
      optimizeNames(f, E) {
        const { nodes: C } = this;
        let V = C.length;
        for (; V--; ) {
          const H = C[V];
          H.optimizeNames(f, E) || (te(f, H.names), C.splice(V, 1));
        }
        return C.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((f, E) => F(f, E.names), {});
      }
    }
    class w extends v {
      render(f) {
        return "{" + f._n + super.render(f) + "}" + f._n;
      }
    }
    class b extends v {
    }
    class h extends w {
    }
    h.kind = "else";
    class _ extends w {
      constructor(f, E) {
        super(E), this.condition = f;
      }
      render(f) {
        let E = `if(${this.condition})` + super.render(f);
        return this.else && (E += "else " + this.else.render(f)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const f = this.condition;
        if (f === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const C = E.optimizeNodes();
          E = this.else = Array.isArray(C) ? new h(C) : C;
        }
        if (E)
          return f === !1 ? E instanceof _ ? E : E.nodes : this.nodes.length ? this : new _(_e(f), E instanceof _ ? [E] : E.nodes);
        if (!(f === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(f, E) {
        var C;
        if (this.else = (C = this.else) === null || C === void 0 ? void 0 : C.optimizeNames(f, E), !!(super.optimizeNames(f, E) || this.else))
          return this.condition = x(this.condition, f, E), this;
      }
      get names() {
        const f = super.names;
        return Z(f, this.condition), this.else && F(f, this.else.names), f;
      }
    }
    _.kind = "if";
    class u extends w {
    }
    u.kind = "for";
    class m extends u {
      constructor(f) {
        super(), this.iteration = f;
      }
      render(f) {
        return `for(${this.iteration})` + super.render(f);
      }
      optimizeNames(f, E) {
        if (super.optimizeNames(f, E))
          return this.iteration = x(this.iteration, f, E), this;
      }
      get names() {
        return F(super.names, this.iteration.names);
      }
    }
    class S extends u {
      constructor(f, E, C, V) {
        super(), this.varKind = f, this.name = E, this.from = C, this.to = V;
      }
      render(f) {
        const E = f.es5 ? r.varKinds.var : this.varKind, { name: C, from: V, to: H } = this;
        return `for(${E} ${C}=${V}; ${C}<${H}; ${C}++)` + super.render(f);
      }
      get names() {
        const f = Z(super.names, this.from);
        return Z(f, this.to);
      }
    }
    class p extends u {
      constructor(f, E, C, V) {
        super(), this.loop = f, this.varKind = E, this.name = C, this.iterable = V;
      }
      render(f) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(f);
      }
      optimizeNames(f, E) {
        if (super.optimizeNames(f, E))
          return this.iterable = x(this.iterable, f, E), this;
      }
      get names() {
        return F(super.names, this.iterable.names);
      }
    }
    class y extends w {
      constructor(f, E, C) {
        super(), this.name = f, this.args = E, this.async = C;
      }
      render(f) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(f);
      }
    }
    y.kind = "func";
    class k extends v {
      render(f) {
        return "return " + super.render(f);
      }
    }
    k.kind = "return";
    class I extends w {
      render(f) {
        let E = "try" + super.render(f);
        return this.catch && (E += this.catch.render(f)), this.finally && (E += this.finally.render(f)), E;
      }
      optimizeNodes() {
        var f, E;
        return super.optimizeNodes(), (f = this.catch) === null || f === void 0 || f.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(f, E) {
        var C, V;
        return super.optimizeNames(f, E), (C = this.catch) === null || C === void 0 || C.optimizeNames(f, E), (V = this.finally) === null || V === void 0 || V.optimizeNames(f, E), this;
      }
      get names() {
        const f = super.names;
        return this.catch && F(f, this.catch.names), this.finally && F(f, this.finally.names), f;
      }
    }
    class z extends w {
      constructor(f) {
        super(), this.error = f;
      }
      render(f) {
        return `catch(${this.error})` + super.render(f);
      }
    }
    z.kind = "catch";
    class U extends w {
      render(f) {
        return "finally" + super.render(f);
      }
    }
    U.kind = "finally";
    class M {
      constructor(f, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = f, this._scope = new r.Scope({ parent: f }), this._nodes = [new b()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(f) {
        return this._scope.name(f);
      }
      // reserves unique name in the external scope
      scopeName(f) {
        return this._extScope.name(f);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(f, E) {
        const C = this._extScope.value(f, E);
        return (this._values[C.prefix] || (this._values[C.prefix] = /* @__PURE__ */ new Set())).add(C), C;
      }
      getScopeValue(f, E) {
        return this._extScope.getValue(f, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(f) {
        return this._extScope.scopeRefs(f, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(f, E, C, V) {
        const H = this._scope.toName(E);
        return C !== void 0 && V && (this._constants[H.str] = C), this._leafNode(new a(f, H, C)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(f, E, C) {
        return this._def(r.varKinds.const, f, E, C);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(f, E, C) {
        return this._def(r.varKinds.let, f, E, C);
      }
      // `var` declaration with optional assignment
      var(f, E, C) {
        return this._def(r.varKinds.var, f, E, C);
      }
      // assignment code
      assign(f, E, C) {
        return this._leafNode(new i(f, E, C));
      }
      // `+=` code
      add(f, E) {
        return this._leafNode(new c(f, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(f) {
        return typeof f == "function" ? f() : f !== t.nil && this._leafNode(new $(f)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...f) {
        const E = ["{"];
        for (const [C, V] of f)
          E.length > 1 && E.push(","), E.push(C), (C !== V || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, V));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(f, E, C) {
        if (this._blockNode(new _(f)), E && C)
          this.code(E).else().code(C).endIf();
        else if (E)
          this.code(E).endIf();
        else if (C)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(f) {
        return this._elseNode(new _(f));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(_, h);
      }
      _for(f, E) {
        return this._blockNode(f), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(f, E) {
        return this._for(new m(f), E);
      }
      // `for` statement for a range of values
      forRange(f, E, C, V, H = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const Q = this._scope.toName(f);
        return this._for(new S(H, Q, E, C), () => V(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(f, E, C, V = r.varKinds.const) {
        const H = this._scope.toName(f);
        if (this.opts.es5) {
          const Q = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (B) => {
            this.var(H, (0, t._)`${Q}[${B}]`), C(H);
          });
        }
        return this._for(new p("of", V, H, E), () => C(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(f, E, C, V = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(f, (0, t._)`Object.keys(${E})`, C);
        const H = this._scope.toName(f);
        return this._for(new p("in", V, H, E), () => C(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(f) {
        return this._leafNode(new d(f));
      }
      // `break` statement
      break(f) {
        return this._leafNode(new l(f));
      }
      // `return` statement
      return(f) {
        const E = new k();
        if (this._blockNode(E), this.code(f), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(k);
      }
      // `try` statement
      try(f, E, C) {
        if (!E && !C)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new I();
        if (this._blockNode(V), this.code(f), E) {
          const H = this.name("e");
          this._currNode = V.catch = new z(H), E(H);
        }
        return C && (this._currNode = V.finally = new U(), this.code(C)), this._endBlockNode(z, U);
      }
      // `throw` statement
      throw(f) {
        return this._leafNode(new g(f));
      }
      // start self-balancing block
      block(f, E) {
        return this._blockStarts.push(this._nodes.length), f && this.code(f).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(f) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const C = this._nodes.length - E;
        if (C < 0 || f !== void 0 && C !== f)
          throw new Error(`CodeGen: wrong number of nodes: ${C} vs ${f} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(f, E = t.nil, C, V) {
        return this._blockNode(new y(f, E, C)), V && this.code(V).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(y);
      }
      optimize(f = 1) {
        for (; f-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(f) {
        return this._currNode.nodes.push(f), this;
      }
      _blockNode(f) {
        this._currNode.nodes.push(f), this._nodes.push(f);
      }
      _endBlockNode(f, E) {
        const C = this._currNode;
        if (C instanceof f || E && C instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${f.kind}/${E.kind}` : f.kind}"`);
      }
      _elseNode(f) {
        const E = this._currNode;
        if (!(E instanceof _))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = f, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const f = this._nodes;
        return f[f.length - 1];
      }
      set _currNode(f) {
        const E = this._nodes;
        E[E.length - 1] = f;
      }
    }
    e.CodeGen = M;
    function F(O, f) {
      for (const E in f)
        O[E] = (O[E] || 0) + (f[E] || 0);
      return O;
    }
    function Z(O, f) {
      return f instanceof t._CodeOrName ? F(O, f.names) : O;
    }
    function x(O, f, E) {
      if (O instanceof t.Name)
        return C(O);
      if (!V(O))
        return O;
      return new t._Code(O._items.reduce((H, Q) => (Q instanceof t.Name && (Q = C(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function C(H) {
        const Q = E[H.str];
        return Q === void 0 || f[H.str] !== 1 ? H : (delete f[H.str], Q);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && f[Q.str] === 1 && E[Q.str] !== void 0);
      }
    }
    function te(O, f) {
      for (const E in f)
        O[E] = (O[E] || 0) - (f[E] || 0);
    }
    function _e(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${q(O)}`;
    }
    e.not = _e;
    const we = T(e.operators.AND);
    function ee(...O) {
      return O.reduce(we);
    }
    e.and = ee;
    const qe = T(e.operators.OR);
    function A(...O) {
      return O.reduce(qe);
    }
    e.or = A;
    function T(O) {
      return (f, E) => f === t.nil ? E : E === t.nil ? f : (0, t._)`${q(f)} ${O} ${q(E)}`;
    }
    function q(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  }(Xo)), Xo;
}
var oe = {}, ri;
function de() {
  if (ri) return oe;
  ri = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.checkStrictMode = oe.getErrorPath = oe.Type = oe.useFunc = oe.setEvaluated = oe.evaluatedPropsToName = oe.mergeEvaluated = oe.eachItem = oe.unescapeJsonPointer = oe.escapeJsonPointer = oe.escapeFragment = oe.unescapeFragment = oe.schemaRefOrVal = oe.schemaHasRulesButRef = oe.schemaHasRules = oe.checkUnknownRules = oe.alwaysValidSchema = oe.toHash = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ _o();
  function r(p) {
    const y = {};
    for (const k of p)
      y[k] = !0;
    return y;
  }
  oe.toHash = r;
  function n(p, y) {
    return typeof y == "boolean" ? y : Object.keys(y).length === 0 ? !0 : (o(p, y), !s(y, p.self.RULES.all));
  }
  oe.alwaysValidSchema = n;
  function o(p, y = p.schema) {
    const { opts: k, self: I } = p;
    if (!k.strictSchema || typeof y == "boolean")
      return;
    const z = I.RULES.keywords;
    for (const U in y)
      z[U] || S(p, `unknown keyword: "${U}"`);
  }
  oe.checkUnknownRules = o;
  function s(p, y) {
    if (typeof p == "boolean")
      return !p;
    for (const k in p)
      if (y[k])
        return !0;
    return !1;
  }
  oe.schemaHasRules = s;
  function a(p, y) {
    if (typeof p == "boolean")
      return !p;
    for (const k in p)
      if (k !== "$ref" && y.all[k])
        return !0;
    return !1;
  }
  oe.schemaHasRulesButRef = a;
  function i({ topSchemaRef: p, schemaPath: y }, k, I, z) {
    if (!z) {
      if (typeof k == "number" || typeof k == "boolean")
        return k;
      if (typeof k == "string")
        return (0, e._)`${k}`;
    }
    return (0, e._)`${p}${y}${(0, e.getProperty)(I)}`;
  }
  oe.schemaRefOrVal = i;
  function c(p) {
    return g(decodeURIComponent(p));
  }
  oe.unescapeFragment = c;
  function d(p) {
    return encodeURIComponent(l(p));
  }
  oe.escapeFragment = d;
  function l(p) {
    return typeof p == "number" ? `${p}` : p.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  oe.escapeJsonPointer = l;
  function g(p) {
    return p.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  oe.unescapeJsonPointer = g;
  function $(p, y) {
    if (Array.isArray(p))
      for (const k of p)
        y(k);
    else
      y(p);
  }
  oe.eachItem = $;
  function v({ mergeNames: p, mergeToName: y, mergeValues: k, resultToName: I }) {
    return (z, U, M, F) => {
      const Z = M === void 0 ? U : M instanceof e.Name ? (U instanceof e.Name ? p(z, U, M) : y(z, U, M), M) : U instanceof e.Name ? (y(z, M, U), U) : k(U, M);
      return F === e.Name && !(Z instanceof e.Name) ? I(z, Z) : Z;
    };
  }
  oe.mergeEvaluated = {
    props: v({
      mergeNames: (p, y, k) => p.if((0, e._)`${k} !== true && ${y} !== undefined`, () => {
        p.if((0, e._)`${y} === true`, () => p.assign(k, !0), () => p.assign(k, (0, e._)`${k} || {}`).code((0, e._)`Object.assign(${k}, ${y})`));
      }),
      mergeToName: (p, y, k) => p.if((0, e._)`${k} !== true`, () => {
        y === !0 ? p.assign(k, !0) : (p.assign(k, (0, e._)`${k} || {}`), b(p, k, y));
      }),
      mergeValues: (p, y) => p === !0 ? !0 : { ...p, ...y },
      resultToName: w
    }),
    items: v({
      mergeNames: (p, y, k) => p.if((0, e._)`${k} !== true && ${y} !== undefined`, () => p.assign(k, (0, e._)`${y} === true ? true : ${k} > ${y} ? ${k} : ${y}`)),
      mergeToName: (p, y, k) => p.if((0, e._)`${k} !== true`, () => p.assign(k, y === !0 ? !0 : (0, e._)`${k} > ${y} ? ${k} : ${y}`)),
      mergeValues: (p, y) => p === !0 ? !0 : Math.max(p, y),
      resultToName: (p, y) => p.var("items", y)
    })
  };
  function w(p, y) {
    if (y === !0)
      return p.var("props", !0);
    const k = p.var("props", (0, e._)`{}`);
    return y !== void 0 && b(p, k, y), k;
  }
  oe.evaluatedPropsToName = w;
  function b(p, y, k) {
    Object.keys(k).forEach((I) => p.assign((0, e._)`${y}${(0, e.getProperty)(I)}`, !0));
  }
  oe.setEvaluated = b;
  const h = {};
  function _(p, y) {
    return p.scopeValue("func", {
      ref: y,
      code: h[y.code] || (h[y.code] = new t._Code(y.code))
    });
  }
  oe.useFunc = _;
  var u;
  (function(p) {
    p[p.Num = 0] = "Num", p[p.Str = 1] = "Str";
  })(u || (oe.Type = u = {}));
  function m(p, y, k) {
    if (p instanceof e.Name) {
      const I = y === u.Num;
      return k ? I ? (0, e._)`"[" + ${p} + "]"` : (0, e._)`"['" + ${p} + "']"` : I ? (0, e._)`"/" + ${p}` : (0, e._)`"/" + ${p}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return k ? (0, e.getProperty)(p).toString() : "/" + l(p);
  }
  oe.getErrorPath = m;
  function S(p, y, k = p.opts.strictSchema) {
    if (k) {
      if (y = `strict mode: ${y}`, k === !0)
        throw new Error(y);
      p.self.logger.warn(y);
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
function Ao() {
  return oi || (oi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ Rt();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: _ }) => _ ? (0, t.str)`"${h}" keyword must be ${_} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function o(h, _ = e.keywordError, u, m) {
      const { it: S } = h, { gen: p, compositeRule: y, allErrors: k } = S, I = g(h, _, u);
      m ?? (y || k) ? c(p, I) : d(S, (0, t._)`[${I}]`);
    }
    e.reportError = o;
    function s(h, _ = e.keywordError, u) {
      const { it: m } = h, { gen: S, compositeRule: p, allErrors: y } = m, k = g(h, _, u);
      c(S, k), p || y || d(m, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(h, _) {
      h.assign(n.default.errors, _), h.if((0, t._)`${n.default.vErrors} !== null`, () => h.if(_, () => h.assign((0, t._)`${n.default.vErrors}.length`, _), () => h.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: h, keyword: _, schemaValue: u, data: m, errsCount: S, it: p }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const y = h.name("err");
      h.forRange("i", S, n.default.errors, (k) => {
        h.const(y, (0, t._)`${n.default.vErrors}[${k}]`), h.if((0, t._)`${y}.instancePath === undefined`, () => h.assign((0, t._)`${y}.instancePath`, (0, t.strConcat)(n.default.instancePath, p.errorPath))), h.assign((0, t._)`${y}.schemaPath`, (0, t.str)`${p.errSchemaPath}/${_}`), p.opts.verbose && (h.assign((0, t._)`${y}.schema`, u), h.assign((0, t._)`${y}.data`, m));
      });
    }
    e.extendErrors = i;
    function c(h, _) {
      const u = h.const("err", _);
      h.if((0, t._)`${n.default.vErrors} === null`, () => h.assign(n.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${n.default.vErrors}.push(${u})`), h.code((0, t._)`${n.default.errors}++`);
    }
    function d(h, _) {
      const { gen: u, validateName: m, schemaEnv: S } = h;
      S.$async ? u.throw((0, t._)`new ${h.ValidationError}(${_})`) : (u.assign((0, t._)`${m}.errors`, _), u.return(!1));
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
    function g(h, _, u) {
      const { createErrors: m } = h.it;
      return m === !1 ? (0, t._)`{}` : $(h, _, u);
    }
    function $(h, _, u = {}) {
      const { gen: m, it: S } = h, p = [
        v(S, u),
        w(h, u)
      ];
      return b(h, _, p), m.object(...p);
    }
    function v({ errorPath: h }, { instancePath: _ }) {
      const u = _ ? (0, t.str)`${h}${(0, r.getErrorPath)(_, r.Type.Str)}` : h;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, u)];
    }
    function w({ keyword: h, it: { errSchemaPath: _ } }, { schemaPath: u, parentSchema: m }) {
      let S = m ? _ : (0, t.str)`${_}/${h}`;
      return u && (S = (0, t.str)`${S}${(0, r.getErrorPath)(u, r.Type.Str)}`), [l.schemaPath, S];
    }
    function b(h, { params: _, message: u }, m) {
      const { keyword: S, data: p, schemaValue: y, it: k } = h, { opts: I, propertyName: z, topSchemaRef: U, schemaPath: M } = k;
      m.push([l.keyword, S], [l.params, typeof _ == "function" ? _(h) : _ || (0, t._)`{}`]), I.messages && m.push([l.message, typeof u == "function" ? u(h) : u]), I.verbose && m.push([l.schema, y], [l.parentSchema, (0, t._)`${U}${M}`], [n.default.data, p]), z && m.push([l.propertyName, z]);
    }
  }(Yo)), Yo;
}
var si;
function gg() {
  if (si) return qt;
  si = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.boolOrEmptySchema = qt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Ao(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Rt(), n = {
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
    const { gen: d, data: l } = i, g = {
      gen: d,
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
  return qt;
}
var Ve = {}, zt = {}, ai;
function Jl() {
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
function Gl() {
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
  if (ci) return Ve;
  ci = 1, Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.reportTypeError = Ve.checkDataTypes = Ve.checkDataType = Ve.coerceAndCheckDataType = Ve.getJSONTypes = Ve.getSchemaTypes = Ve.DataType = void 0;
  const e = /* @__PURE__ */ Jl(), t = /* @__PURE__ */ Gl(), r = /* @__PURE__ */ Ao(), n = /* @__PURE__ */ ce(), o = /* @__PURE__ */ de();
  var s;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(s || (Ve.DataType = s = {}));
  function a(u) {
    const m = i(u.type);
    if (m.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && m.push("null");
    }
    return m;
  }
  Ve.getSchemaTypes = a;
  function i(u) {
    const m = Array.isArray(u) ? u : u ? [u] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  Ve.getJSONTypes = i;
  function c(u, m) {
    const { gen: S, data: p, opts: y } = u, k = l(m, y.coerceTypes), I = m.length > 0 && !(k.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(u, m[0]));
    if (I) {
      const z = w(m, p, y.strictNumbers, s.Wrong);
      S.if(z, () => {
        k.length ? g(u, m, k) : h(u);
      });
    }
    return I;
  }
  Ve.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function l(u, m) {
    return m ? u.filter((S) => d.has(S) || m === "array" && S === "array") : [];
  }
  function g(u, m, S) {
    const { gen: p, data: y, opts: k } = u, I = p.let("dataType", (0, n._)`typeof ${y}`), z = p.let("coerced", (0, n._)`undefined`);
    k.coerceTypes === "array" && p.if((0, n._)`${I} == 'object' && Array.isArray(${y}) && ${y}.length == 1`, () => p.assign(y, (0, n._)`${y}[0]`).assign(I, (0, n._)`typeof ${y}`).if(w(m, y, k.strictNumbers), () => p.assign(z, y))), p.if((0, n._)`${z} !== undefined`);
    for (const M of S)
      (d.has(M) || M === "array" && k.coerceTypes === "array") && U(M);
    p.else(), h(u), p.endIf(), p.if((0, n._)`${z} !== undefined`, () => {
      p.assign(y, z), $(u, z);
    });
    function U(M) {
      switch (M) {
        case "string":
          p.elseIf((0, n._)`${I} == "number" || ${I} == "boolean"`).assign(z, (0, n._)`"" + ${y}`).elseIf((0, n._)`${y} === null`).assign(z, (0, n._)`""`);
          return;
        case "number":
          p.elseIf((0, n._)`${I} == "boolean" || ${y} === null
              || (${I} == "string" && ${y} && ${y} == +${y})`).assign(z, (0, n._)`+${y}`);
          return;
        case "integer":
          p.elseIf((0, n._)`${I} === "boolean" || ${y} === null
              || (${I} === "string" && ${y} && ${y} == +${y} && !(${y} % 1))`).assign(z, (0, n._)`+${y}`);
          return;
        case "boolean":
          p.elseIf((0, n._)`${y} === "false" || ${y} === 0 || ${y} === null`).assign(z, !1).elseIf((0, n._)`${y} === "true" || ${y} === 1`).assign(z, !0);
          return;
        case "null":
          p.elseIf((0, n._)`${y} === "" || ${y} === 0 || ${y} === false`), p.assign(z, null);
          return;
        case "array":
          p.elseIf((0, n._)`${I} === "string" || ${I} === "number"
              || ${I} === "boolean" || ${y} === null`).assign(z, (0, n._)`[${y}]`);
      }
    }
  }
  function $({ gen: u, parentData: m, parentDataProperty: S }, p) {
    u.if((0, n._)`${m} !== undefined`, () => u.assign((0, n._)`${m}[${S}]`, p));
  }
  function v(u, m, S, p = s.Correct) {
    const y = p === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let k;
    switch (u) {
      case "null":
        return (0, n._)`${m} ${y} null`;
      case "array":
        k = (0, n._)`Array.isArray(${m})`;
        break;
      case "object":
        k = (0, n._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        k = I((0, n._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        k = I();
        break;
      default:
        return (0, n._)`typeof ${m} ${y} ${u}`;
    }
    return p === s.Correct ? k : (0, n.not)(k);
    function I(z = n.nil) {
      return (0, n.and)((0, n._)`typeof ${m} == "number"`, z, S ? (0, n._)`isFinite(${m})` : n.nil);
    }
  }
  Ve.checkDataType = v;
  function w(u, m, S, p) {
    if (u.length === 1)
      return v(u[0], m, S, p);
    let y;
    const k = (0, o.toHash)(u);
    if (k.array && k.object) {
      const I = (0, n._)`typeof ${m} != "object"`;
      y = k.null ? I : (0, n._)`!${m} || ${I}`, delete k.null, delete k.array, delete k.object;
    } else
      y = n.nil;
    k.number && delete k.integer;
    for (const I in k)
      y = (0, n.and)(y, v(I, m, S, p));
    return y;
  }
  Ve.checkDataTypes = w;
  const b = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: m }) => typeof u == "string" ? (0, n._)`{type: ${u}}` : (0, n._)`{type: ${m}}`
  };
  function h(u) {
    const m = _(u);
    (0, r.reportError)(m, b);
  }
  Ve.reportTypeError = h;
  function _(u) {
    const { gen: m, data: S, schema: p } = u, y = (0, o.schemaRefOrVal)(u, p, "type");
    return {
      gen: m,
      keyword: "type",
      data: S,
      schema: p.type,
      schemaCode: y,
      schemaValue: y,
      parentSchema: p,
      params: {},
      it: u
    };
  }
  return Ve;
}
var fr = {}, ui;
function vg() {
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
    const g = (0, e._)`${d}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let $ = (0, e._)`${g} === undefined`;
    l.useDefaults === "empty" && ($ = (0, e._)`${$} || ${g} === null || ${g} === ""`), i.if($, (0, e._)`${g} = ${(0, e.stringify)(a)}`);
  }
  return fr;
}
var it = {}, ve = {}, li;
function dt() {
  if (li) return ve;
  li = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.validateUnion = ve.validateArray = ve.usePattern = ve.callValidateCode = ve.schemaProperties = ve.allSchemaProperties = ve.noPropertyInData = ve.propertyInData = ve.isOwnProperty = ve.hasPropFunc = ve.reportMissingProp = ve.checkMissingProp = ve.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ Rt(), n = /* @__PURE__ */ de();
  function o(u, m) {
    const { gen: S, data: p, it: y } = u;
    S.if(l(S, p, m, y.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${m}` }, !0), u.error();
    });
  }
  ve.checkReportMissingProp = o;
  function s({ gen: u, data: m, it: { opts: S } }, p, y) {
    return (0, e.or)(...p.map((k) => (0, e.and)(l(u, m, k, S.ownProperties), (0, e._)`${y} = ${k}`)));
  }
  ve.checkMissingProp = s;
  function a(u, m) {
    u.setParams({ missingProperty: m }, !0), u.error();
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
  function c(u, m, S) {
    return (0, e._)`${i(u)}.call(${m}, ${S})`;
  }
  ve.isOwnProperty = c;
  function d(u, m, S, p) {
    const y = (0, e._)`${m}${(0, e.getProperty)(S)} !== undefined`;
    return p ? (0, e._)`${y} && ${c(u, m, S)}` : y;
  }
  ve.propertyInData = d;
  function l(u, m, S, p) {
    const y = (0, e._)`${m}${(0, e.getProperty)(S)} === undefined`;
    return p ? (0, e.or)(y, (0, e.not)(c(u, m, S))) : y;
  }
  ve.noPropertyInData = l;
  function g(u) {
    return u ? Object.keys(u).filter((m) => m !== "__proto__") : [];
  }
  ve.allSchemaProperties = g;
  function $(u, m) {
    return g(m).filter((S) => !(0, t.alwaysValidSchema)(u, m[S]));
  }
  ve.schemaProperties = $;
  function v({ schemaCode: u, data: m, it: { gen: S, topSchemaRef: p, schemaPath: y, errorPath: k }, it: I }, z, U, M) {
    const F = M ? (0, e._)`${u}, ${m}, ${p}${y}` : m, Z = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, k)],
      [r.default.parentData, I.parentData],
      [r.default.parentDataProperty, I.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    I.opts.dynamicRef && Z.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const x = (0, e._)`${F}, ${S.object(...Z)}`;
    return U !== e.nil ? (0, e._)`${z}.call(${U}, ${x})` : (0, e._)`${z}(${x})`;
  }
  ve.callValidateCode = v;
  const w = (0, e._)`new RegExp`;
  function b({ gen: u, it: { opts: m } }, S) {
    const p = m.unicodeRegExp ? "u" : "", { regExp: y } = m.code, k = y(S, p);
    return u.scopeValue("pattern", {
      key: k.toString(),
      ref: k,
      code: (0, e._)`${y.code === "new RegExp" ? w : (0, n.useFunc)(u, y)}(${S}, ${p})`
    });
  }
  ve.usePattern = b;
  function h(u) {
    const { gen: m, data: S, keyword: p, it: y } = u, k = m.name("valid");
    if (y.allErrors) {
      const z = m.let("valid", !0);
      return I(() => m.assign(z, !1)), z;
    }
    return m.var(k, !0), I(() => m.break()), k;
    function I(z) {
      const U = m.const("len", (0, e._)`${S}.length`);
      m.forRange("i", 0, U, (M) => {
        u.subschema({
          keyword: p,
          dataProp: M,
          dataPropType: t.Type.Num
        }, k), m.if((0, e.not)(k), z);
      });
    }
  }
  ve.validateArray = h;
  function _(u) {
    const { gen: m, schema: S, keyword: p, it: y } = u;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((U) => (0, t.alwaysValidSchema)(y, U)) && !y.opts.unevaluated)
      return;
    const I = m.let("valid", !1), z = m.name("_valid");
    m.block(() => S.forEach((U, M) => {
      const F = u.subschema({
        keyword: p,
        schemaProp: M,
        compositeRule: !0
      }, z);
      m.assign(I, (0, e._)`${I} || ${z}`), u.mergeValidEvaluated(F, z) || m.if((0, e.not)(I));
    })), u.result(I, () => u.reset(), () => u.error(!0));
  }
  return ve.validateUnion = _, ve;
}
var di;
function $g() {
  if (di) return it;
  di = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.validateKeywordUsage = it.validSchemaType = it.funcKeywordCode = it.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ Rt(), r = /* @__PURE__ */ dt(), n = /* @__PURE__ */ Ao();
  function o($, v) {
    const { gen: w, keyword: b, schema: h, parentSchema: _, it: u } = $, m = v.macro.call(u.self, h, _, u), S = d(w, b, m);
    u.opts.validateSchema !== !1 && u.self.validateSchema(m, !0);
    const p = w.name("valid");
    $.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${b}`,
      topSchemaRef: S,
      compositeRule: !0
    }, p), $.pass(p, () => $.error(!0));
  }
  it.macroKeywordCode = o;
  function s($, v) {
    var w;
    const { gen: b, keyword: h, schema: _, parentSchema: u, $data: m, it: S } = $;
    c(S, v);
    const p = !m && v.compile ? v.compile.call(S.self, _, u, S) : v.validate, y = d(b, h, p), k = b.let("valid");
    $.block$data(k, I), $.ok((w = v.valid) !== null && w !== void 0 ? w : k);
    function I() {
      if (v.errors === !1)
        M(), v.modifying && a($), F(() => $.error());
      else {
        const Z = v.async ? z() : U();
        v.modifying && a($), F(() => i($, Z));
      }
    }
    function z() {
      const Z = b.let("ruleErrs", null);
      return b.try(() => M((0, e._)`await `), (x) => b.assign(k, !1).if((0, e._)`${x} instanceof ${S.ValidationError}`, () => b.assign(Z, (0, e._)`${x}.errors`), () => b.throw(x))), Z;
    }
    function U() {
      const Z = (0, e._)`${y}.errors`;
      return b.assign(Z, null), M(e.nil), Z;
    }
    function M(Z = v.async ? (0, e._)`await ` : e.nil) {
      const x = S.opts.passContext ? t.default.this : t.default.self, te = !("compile" in v && !m || v.schema === !1);
      b.assign(k, (0, e._)`${Z}${(0, r.callValidateCode)($, y, x, te)}`, v.modifying);
    }
    function F(Z) {
      var x;
      b.if((0, e.not)((x = v.valid) !== null && x !== void 0 ? x : k), Z);
    }
  }
  it.funcKeywordCode = s;
  function a($) {
    const { gen: v, data: w, it: b } = $;
    v.if(b.parentData, () => v.assign(w, (0, e._)`${b.parentData}[${b.parentDataProperty}]`));
  }
  function i($, v) {
    const { gen: w } = $;
    w.if((0, e._)`Array.isArray(${v})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)($);
    }, () => $.error());
  }
  function c({ schemaEnv: $ }, v) {
    if (v.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function d($, v, w) {
    if (w === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return $.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function l($, v, w = !1) {
    return !v.length || v.some((b) => b === "array" ? Array.isArray($) : b === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == b || w && typeof $ > "u");
  }
  it.validSchemaType = l;
  function g({ schema: $, opts: v, self: w, errSchemaPath: b }, h, _) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(_) : h.keyword !== _)
      throw new Error("ajv implementation error");
    const u = h.dependencies;
    if (u != null && u.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${_}: ${u.join(",")}`);
    if (h.validateSchema && !h.validateSchema($[_])) {
      const S = `keyword "${_}" value is invalid at path "${b}": ` + w.errorsText(h.validateSchema.errors);
      if (v.validateSchema === "log")
        w.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return it.validateKeywordUsage = g, it;
}
var mt = {}, fi;
function wg() {
  if (fi) return mt;
  fi = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.extendSubschemaMode = mt.extendSubschemaData = mt.getSubschema = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de();
  function r(s, { keyword: a, schemaProp: i, schema: c, schemaPath: d, errSchemaPath: l, topSchemaRef: g }) {
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
      if (d === void 0 || l === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: g,
        errSchemaPath: l
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  mt.getSubschema = r;
  function n(s, a, { dataProp: i, dataPropType: c, data: d, dataTypes: l, propertyName: g }) {
    if (d !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = a;
    if (i !== void 0) {
      const { errorPath: w, dataPathArr: b, opts: h } = a, _ = $.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      v(_), s.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(i, c, h.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [...b, s.parentDataProperty];
    }
    if (d !== void 0) {
      const w = d instanceof e.Name ? d : $.let("data", d, !0);
      v(w), g !== void 0 && (s.propertyName = g);
    }
    l && (s.dataTypes = l);
    function v(w) {
      s.data = w, s.dataLevel = a.dataLevel + 1, s.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), s.parentData = a.data, s.dataNames = [...a.dataNames, w];
    }
  }
  mt.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: d, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), d !== void 0 && (s.createErrors = d), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return mt.extendSubschemaMode = o, mt;
}
var xe = {}, rs, hi;
function Do() {
  return hi || (hi = 1, rs = function e(t, r) {
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
  }), rs;
}
var ns = { exports: {} }, pi;
function bg() {
  if (pi) return ns.exports;
  pi = 1;
  var e = ns.exports = function(n, o, s) {
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
  function t(n, o, s, a, i, c, d, l, g, $) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      o(a, i, c, d, l, g, $);
      for (var v in a) {
        var w = a[v];
        if (Array.isArray(w)) {
          if (v in e.arrayKeywords)
            for (var b = 0; b < w.length; b++)
              t(n, o, s, w[b], i + "/" + v + "/" + b, c, i, v, a, b);
        } else if (v in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var h in w)
              t(n, o, s, w[h], i + "/" + v + "/" + r(h), c, i, v, a, h);
        } else (v in e.keywords || n.allKeys && !(v in e.skipKeywords)) && t(n, o, s, w, i + "/" + v, c, i, v, a);
      }
      s(a, i, c, d, l, g, $);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ns.exports;
}
var mi;
function Uo() {
  if (mi) return xe;
  mi = 1, Object.defineProperty(xe, "__esModule", { value: !0 }), xe.getSchemaRefs = xe.resolveUrl = xe.normalizeId = xe._getFullPath = xe.getFullPath = xe.inlineRef = void 0;
  const e = /* @__PURE__ */ de(), t = Do(), r = bg(), n = /* @__PURE__ */ new Set([
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
  function o(b, h = !0) {
    return typeof b == "boolean" ? !0 : h === !0 ? !a(b) : h ? i(b) <= h : !1;
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
    for (const h in b) {
      if (s.has(h))
        return !0;
      const _ = b[h];
      if (Array.isArray(_) && _.some(a) || typeof _ == "object" && a(_))
        return !0;
    }
    return !1;
  }
  function i(b) {
    let h = 0;
    for (const _ in b) {
      if (_ === "$ref")
        return 1 / 0;
      if (h++, !n.has(_) && (typeof b[_] == "object" && (0, e.eachItem)(b[_], (u) => h += i(u)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function c(b, h = "", _) {
    _ !== !1 && (h = g(h));
    const u = b.parse(h);
    return d(b, u);
  }
  xe.getFullPath = c;
  function d(b, h) {
    return b.serialize(h).split("#")[0] + "#";
  }
  xe._getFullPath = d;
  const l = /#\/?$/;
  function g(b) {
    return b ? b.replace(l, "") : "";
  }
  xe.normalizeId = g;
  function $(b, h, _) {
    return _ = g(_), b.resolve(h, _);
  }
  xe.resolveUrl = $;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function w(b, h) {
    if (typeof b == "boolean")
      return {};
    const { schemaId: _, uriResolver: u } = this.opts, m = g(b[_] || h), S = { "": m }, p = c(u, m, !1), y = {}, k = /* @__PURE__ */ new Set();
    return r(b, { allKeys: !0 }, (U, M, F, Z) => {
      if (Z === void 0)
        return;
      const x = p + M;
      let te = S[Z];
      typeof U[_] == "string" && (te = _e.call(this, U[_])), we.call(this, U.$anchor), we.call(this, U.$dynamicAnchor), S[M] = te;
      function _e(ee) {
        const qe = this.opts.uriResolver.resolve;
        if (ee = g(te ? qe(te, ee) : ee), k.has(ee))
          throw z(ee);
        k.add(ee);
        let A = this.refs[ee];
        return typeof A == "string" && (A = this.refs[A]), typeof A == "object" ? I(U, A.schema, ee) : ee !== g(x) && (ee[0] === "#" ? (I(U, y[ee], ee), y[ee] = U) : this.refs[ee] = x), ee;
      }
      function we(ee) {
        if (typeof ee == "string") {
          if (!v.test(ee))
            throw new Error(`invalid anchor "${ee}"`);
          _e.call(this, `#${ee}`);
        }
      }
    }), y;
    function I(U, M, F) {
      if (M !== void 0 && !t(U, M))
        throw z(F);
    }
    function z(U) {
      return new Error(`reference "${U}" resolves to more than one schema`);
    }
  }
  return xe.getSchemaRefs = w, xe;
}
var _i;
function Vo() {
  if (_i) return ht;
  _i = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.getData = ht.KeywordCxt = ht.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ gg(), t = /* @__PURE__ */ yo(), r = /* @__PURE__ */ Gl(), n = /* @__PURE__ */ yo(), o = /* @__PURE__ */ vg(), s = /* @__PURE__ */ $g(), a = /* @__PURE__ */ wg(), i = /* @__PURE__ */ ce(), c = /* @__PURE__ */ Rt(), d = /* @__PURE__ */ Uo(), l = /* @__PURE__ */ de(), g = /* @__PURE__ */ Ao();
  function $(P) {
    if (p(P) && (k(P), S(P))) {
      h(P);
      return;
    }
    v(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  ht.validateFunctionCode = $;
  function v({ gen: P, validateName: R, schema: N, schemaEnv: D, opts: K }, J) {
    K.code.es5 ? P.func(R, (0, i._)`${c.default.data}, ${c.default.valCxt}`, D.$async, () => {
      P.code((0, i._)`"use strict"; ${u(N, K)}`), b(P, K), P.code(J);
    }) : P.func(R, (0, i._)`${c.default.data}, ${w(K)}`, D.$async, () => P.code(u(N, K)).code(J));
  }
  function w(P) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function b(P, R) {
    P.if(c.default.valCxt, () => {
      P.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), P.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), P.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), P.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), R.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      P.var(c.default.instancePath, (0, i._)`""`), P.var(c.default.parentData, (0, i._)`undefined`), P.var(c.default.parentDataProperty, (0, i._)`undefined`), P.var(c.default.rootData, c.default.data), R.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function h(P) {
    const { schema: R, opts: N, gen: D } = P;
    v(P, () => {
      N.$comment && R.$comment && Z(P), U(P), D.let(c.default.vErrors, null), D.let(c.default.errors, 0), N.unevaluated && _(P), I(P), x(P);
    });
  }
  function _(P) {
    const { gen: R, validateName: N } = P;
    P.evaluated = R.const("evaluated", (0, i._)`${N}.evaluated`), R.if((0, i._)`${P.evaluated}.dynamicProps`, () => R.assign((0, i._)`${P.evaluated}.props`, (0, i._)`undefined`)), R.if((0, i._)`${P.evaluated}.dynamicItems`, () => R.assign((0, i._)`${P.evaluated}.items`, (0, i._)`undefined`));
  }
  function u(P, R) {
    const N = typeof P == "object" && P[R.schemaId];
    return N && (R.code.source || R.code.process) ? (0, i._)`/*# sourceURL=${N} */` : i.nil;
  }
  function m(P, R) {
    if (p(P) && (k(P), S(P))) {
      y(P, R);
      return;
    }
    (0, e.boolOrEmptySchema)(P, R);
  }
  function S({ schema: P, self: R }) {
    if (typeof P == "boolean")
      return !P;
    for (const N in P)
      if (R.RULES.all[N])
        return !0;
    return !1;
  }
  function p(P) {
    return typeof P.schema != "boolean";
  }
  function y(P, R) {
    const { schema: N, gen: D, opts: K } = P;
    K.$comment && N.$comment && Z(P), M(P), F(P);
    const J = D.const("_errs", c.default.errors);
    I(P, J), D.var(R, (0, i._)`${J} === ${c.default.errors}`);
  }
  function k(P) {
    (0, l.checkUnknownRules)(P), z(P);
  }
  function I(P, R) {
    if (P.opts.jtd)
      return _e(P, [], !1, R);
    const N = (0, t.getSchemaTypes)(P.schema), D = (0, t.coerceAndCheckDataType)(P, N);
    _e(P, N, !D, R);
  }
  function z(P) {
    const { schema: R, errSchemaPath: N, opts: D, self: K } = P;
    R.$ref && D.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(R, K.RULES) && K.logger.warn(`$ref: keywords ignored in schema at path "${N}"`);
  }
  function U(P) {
    const { schema: R, opts: N } = P;
    R.default !== void 0 && N.useDefaults && N.strictSchema && (0, l.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function M(P) {
    const R = P.schema[P.opts.schemaId];
    R && (P.baseId = (0, d.resolveUrl)(P.opts.uriResolver, P.baseId, R));
  }
  function F(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function Z({ gen: P, schemaEnv: R, schema: N, errSchemaPath: D, opts: K }) {
    const J = N.$comment;
    if (K.$comment === !0)
      P.code((0, i._)`${c.default.self}.logger.log(${J})`);
    else if (typeof K.$comment == "function") {
      const ue = (0, i.str)`${D}/$comment`, Ie = P.scopeValue("root", { ref: R.root });
      P.code((0, i._)`${c.default.self}.opts.$comment(${J}, ${ue}, ${Ie}.schema)`);
    }
  }
  function x(P) {
    const { gen: R, schemaEnv: N, validateName: D, ValidationError: K, opts: J } = P;
    N.$async ? R.if((0, i._)`${c.default.errors} === 0`, () => R.return(c.default.data), () => R.throw((0, i._)`new ${K}(${c.default.vErrors})`)) : (R.assign((0, i._)`${D}.errors`, c.default.vErrors), J.unevaluated && te(P), R.return((0, i._)`${c.default.errors} === 0`));
  }
  function te({ gen: P, evaluated: R, props: N, items: D }) {
    N instanceof i.Name && P.assign((0, i._)`${R}.props`, N), D instanceof i.Name && P.assign((0, i._)`${R}.items`, D);
  }
  function _e(P, R, N, D) {
    const { gen: K, schema: J, data: ue, allErrors: Ie, opts: ye, self: ge } = P, { RULES: le } = ge;
    if (J.$ref && (ye.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(J, le))) {
      K.block(() => V(P, "$ref", le.all.$ref.definition));
      return;
    }
    ye.jtd || ee(P, R), K.block(() => {
      for (const be of le.rules)
        Qe(be);
      Qe(le.post);
    });
    function Qe(be) {
      (0, r.shouldUseGroup)(J, be) && (be.type ? (K.if((0, n.checkDataType)(be.type, ue, ye.strictNumbers)), we(P, be), R.length === 1 && R[0] === be.type && N && (K.else(), (0, n.reportTypeError)(P)), K.endIf()) : we(P, be), Ie || K.if((0, i._)`${c.default.errors} === ${D || 0}`));
    }
  }
  function we(P, R) {
    const { gen: N, schema: D, opts: { useDefaults: K } } = P;
    K && (0, o.assignDefaults)(P, R.type), N.block(() => {
      for (const J of R.rules)
        (0, r.shouldUseRule)(D, J) && V(P, J.keyword, J.definition, R.type);
    });
  }
  function ee(P, R) {
    P.schemaEnv.meta || !P.opts.strictTypes || (qe(P, R), P.opts.allowUnionTypes || A(P, R), T(P, P.dataTypes));
  }
  function qe(P, R) {
    if (R.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = R;
        return;
      }
      R.forEach((N) => {
        O(P.dataTypes, N) || E(P, `type "${N}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), f(P, R);
    }
  }
  function A(P, R) {
    R.length > 1 && !(R.length === 2 && R.includes("null")) && E(P, "use allowUnionTypes to allow union type keyword");
  }
  function T(P, R) {
    const N = P.self.RULES.all;
    for (const D in N) {
      const K = N[D];
      if (typeof K == "object" && (0, r.shouldUseRule)(P.schema, K)) {
        const { type: J } = K.definition;
        J.length && !J.some((ue) => q(R, ue)) && E(P, `missing type "${J.join(",")}" for keyword "${D}"`);
      }
    }
  }
  function q(P, R) {
    return P.includes(R) || R === "number" && P.includes("integer");
  }
  function O(P, R) {
    return P.includes(R) || R === "integer" && P.includes("number");
  }
  function f(P, R) {
    const N = [];
    for (const D of P.dataTypes)
      O(R, D) ? N.push(D) : R.includes("integer") && D === "number" && N.push("integer");
    P.dataTypes = N;
  }
  function E(P, R) {
    const N = P.schemaEnv.baseId + P.errSchemaPath;
    R += ` at "${N}" (strictTypes)`, (0, l.checkStrictMode)(P, R, P.opts.strictTypes);
  }
  class C {
    constructor(R, N, D) {
      if ((0, s.validateKeywordUsage)(R, N, D), this.gen = R.gen, this.allErrors = R.allErrors, this.keyword = D, this.data = R.data, this.schema = R.schema[D], this.$data = N.$data && R.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(R, this.schema, D, this.$data), this.schemaType = N.schemaType, this.parentSchema = R.schema, this.params = {}, this.it = R, this.def = N, this.$data)
        this.schemaCode = R.gen.const("vSchema", B(this.$data, R));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, N.schemaType, N.allowUndefined))
        throw new Error(`${D} value must be ${JSON.stringify(N.schemaType)}`);
      ("code" in N ? N.trackErrors : N.errors !== !1) && (this.errsCount = R.gen.const("_errs", c.default.errors));
    }
    result(R, N, D) {
      this.failResult((0, i.not)(R), N, D);
    }
    failResult(R, N, D) {
      this.gen.if(R), D ? D() : this.error(), N ? (this.gen.else(), N(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(R, N) {
      this.failResult((0, i.not)(R), void 0, N);
    }
    fail(R) {
      if (R === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(R), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(R) {
      if (!this.$data)
        return this.fail(R);
      const { schemaCode: N } = this;
      this.fail((0, i._)`${N} !== undefined && (${(0, i.or)(this.invalid$data(), R)})`);
    }
    error(R, N, D) {
      if (N) {
        this.setParams(N), this._error(R, D), this.setParams({});
        return;
      }
      this._error(R, D);
    }
    _error(R, N) {
      (R ? g.reportExtraError : g.reportError)(this, this.def.error, N);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(R) {
      this.allErrors || this.gen.if(R);
    }
    setParams(R, N) {
      N ? Object.assign(this.params, R) : this.params = R;
    }
    block$data(R, N, D = i.nil) {
      this.gen.block(() => {
        this.check$data(R, D), N();
      });
    }
    check$data(R = i.nil, N = i.nil) {
      if (!this.$data)
        return;
      const { gen: D, schemaCode: K, schemaType: J, def: ue } = this;
      D.if((0, i.or)((0, i._)`${K} === undefined`, N)), R !== i.nil && D.assign(R, !0), (J.length || ue.validateSchema) && (D.elseIf(this.invalid$data()), this.$dataError(), R !== i.nil && D.assign(R, !1)), D.else();
    }
    invalid$data() {
      const { gen: R, schemaCode: N, schemaType: D, def: K, it: J } = this;
      return (0, i.or)(ue(), Ie());
      function ue() {
        if (D.length) {
          if (!(N instanceof i.Name))
            throw new Error("ajv implementation error");
          const ye = Array.isArray(D) ? D : [D];
          return (0, i._)`${(0, n.checkDataTypes)(ye, N, J.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function Ie() {
        if (K.validateSchema) {
          const ye = R.scopeValue("validate$data", { ref: K.validateSchema });
          return (0, i._)`!${ye}(${N})`;
        }
        return i.nil;
      }
    }
    subschema(R, N) {
      const D = (0, a.getSubschema)(this.it, R);
      (0, a.extendSubschemaData)(D, this.it, R), (0, a.extendSubschemaMode)(D, R);
      const K = { ...this.it, ...D, items: void 0, props: void 0 };
      return m(K, N), K;
    }
    mergeEvaluated(R, N) {
      const { it: D, gen: K } = this;
      D.opts.unevaluated && (D.props !== !0 && R.props !== void 0 && (D.props = l.mergeEvaluated.props(K, R.props, D.props, N)), D.items !== !0 && R.items !== void 0 && (D.items = l.mergeEvaluated.items(K, R.items, D.items, N)));
    }
    mergeValidEvaluated(R, N) {
      const { it: D, gen: K } = this;
      if (D.opts.unevaluated && (D.props !== !0 || D.items !== !0))
        return K.if(N, () => this.mergeEvaluated(R, i.Name)), !0;
    }
  }
  ht.KeywordCxt = C;
  function V(P, R, N, D) {
    const K = new C(P, N, R);
    "code" in N ? N.code(K, D) : K.$data && N.validate ? (0, s.funcKeywordCode)(K, N) : "macro" in N ? (0, s.macroKeywordCode)(K, N) : (N.compile || N.validate) && (0, s.funcKeywordCode)(K, N);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function B(P, { dataLevel: R, dataNames: N, dataPathArr: D }) {
    let K, J;
    if (P === "")
      return c.default.rootData;
    if (P[0] === "/") {
      if (!H.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      K = P, J = c.default.rootData;
    } else {
      const ge = Q.exec(P);
      if (!ge)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const le = +ge[1];
      if (K = ge[2], K === "#") {
        if (le >= R)
          throw new Error(ye("property/index", le));
        return D[R - le];
      }
      if (le > R)
        throw new Error(ye("data", le));
      if (J = N[R - le], !K)
        return J;
    }
    let ue = J;
    const Ie = K.split("/");
    for (const ge of Ie)
      ge && (J = (0, i._)`${J}${(0, i.getProperty)((0, l.unescapeJsonPointer)(ge))}`, ue = (0, i._)`${ue} && ${J}`);
    return ue;
    function ye(ge, le) {
      return `Cannot access ${ge} ${le} levels up, current level is ${R}`;
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
function Lo() {
  if (gi) return Ur;
  gi = 1, Object.defineProperty(Ur, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uo();
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
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ va(), r = /* @__PURE__ */ Rt(), n = /* @__PURE__ */ Uo(), o = /* @__PURE__ */ de(), s = /* @__PURE__ */ Vo();
  class a {
    constructor(_) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof _.schema == "object" && (m = _.schema), this.schema = _.schema, this.schemaId = _.schemaId, this.root = _.root || this, this.baseId = (u = _.baseId) !== null && u !== void 0 ? u : (0, n.normalizeId)(m == null ? void 0 : m[_.schemaId || "$id"]), this.schemaPath = _.schemaPath, this.localRefs = _.localRefs, this.meta = _.meta, this.$async = m == null ? void 0 : m.$async, this.refs = {};
    }
  }
  Ye.SchemaEnv = a;
  function i(h) {
    const _ = l.call(this, h);
    if (_)
      return _;
    const u = (0, n.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: m, lines: S } = this.opts.code, { ownProperties: p } = this.opts, y = new e.CodeGen(this.scope, { es5: m, lines: S, ownProperties: p });
    let k;
    h.$async && (k = y.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const I = y.scopeName("validate");
    h.validateName = I;
    const z = {
      gen: y,
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
      topSchemaRef: y.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: I,
      ValidationError: k,
      schema: h.schema,
      schemaEnv: h,
      rootId: u,
      baseId: h.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let U;
    try {
      this._compilations.add(h), (0, s.validateFunctionCode)(z), y.optimize(this.opts.code.optimize);
      const M = y.toString();
      U = `${y.scopeRefs(r.default.scope)}return ${M}`, this.opts.code.process && (U = this.opts.code.process(U, h));
      const Z = new Function(`${r.default.self}`, `${r.default.scope}`, U)(this, this.scope.get());
      if (this.scope.value(I, { ref: Z }), Z.errors = null, Z.schema = h.schema, Z.schemaEnv = h, h.$async && (Z.$async = !0), this.opts.code.source === !0 && (Z.source = { validateName: I, validateCode: M, scopeValues: y._values }), this.opts.unevaluated) {
        const { props: x, items: te } = z;
        Z.evaluated = {
          props: x instanceof e.Name ? void 0 : x,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: x instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, Z.source && (Z.source.evaluated = (0, e.stringify)(Z.evaluated));
      }
      return h.validate = Z, h;
    } catch (M) {
      throw delete h.validate, delete h.validateName, U && this.logger.error("Error compiling schema, function code:", U), M;
    } finally {
      this._compilations.delete(h);
    }
  }
  Ye.compileSchema = i;
  function c(h, _, u) {
    var m;
    u = (0, n.resolveUrl)(this.opts.uriResolver, _, u);
    const S = h.refs[u];
    if (S)
      return S;
    let p = $.call(this, h, u);
    if (p === void 0) {
      const y = (m = h.localRefs) === null || m === void 0 ? void 0 : m[u], { schemaId: k } = this.opts;
      y && (p = new a({ schema: y, schemaId: k, root: h, baseId: _ }));
    }
    if (p !== void 0)
      return h.refs[u] = d.call(this, p);
  }
  Ye.resolveRef = c;
  function d(h) {
    return (0, n.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : i.call(this, h);
  }
  function l(h) {
    for (const _ of this._compilations)
      if (g(_, h))
        return _;
  }
  Ye.getCompilingSchema = l;
  function g(h, _) {
    return h.schema === _.schema && h.root === _.root && h.baseId === _.baseId;
  }
  function $(h, _) {
    let u;
    for (; typeof (u = this.refs[_]) == "string"; )
      _ = u;
    return u || this.schemas[_] || v.call(this, h, _);
  }
  function v(h, _) {
    const u = this.opts.uriResolver.parse(_), m = (0, n._getFullPath)(this.opts.uriResolver, u);
    let S = (0, n.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && m === S)
      return b.call(this, u, h);
    const p = (0, n.normalizeId)(m), y = this.refs[p] || this.schemas[p];
    if (typeof y == "string") {
      const k = v.call(this, h, y);
      return typeof (k == null ? void 0 : k.schema) != "object" ? void 0 : b.call(this, u, k);
    }
    if (typeof (y == null ? void 0 : y.schema) == "object") {
      if (y.validate || i.call(this, y), p === (0, n.normalizeId)(_)) {
        const { schema: k } = y, { schemaId: I } = this.opts, z = k[I];
        return z && (S = (0, n.resolveUrl)(this.opts.uriResolver, S, z)), new a({ schema: k, schemaId: I, root: h, baseId: S });
      }
      return b.call(this, u, y);
    }
  }
  Ye.resolveSchema = v;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function b(h, { baseId: _, schema: u, root: m }) {
    var S;
    if (((S = h.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const k of h.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const I = u[(0, o.unescapeFragment)(k)];
      if (I === void 0)
        return;
      u = I;
      const z = typeof u == "object" && u[this.opts.schemaId];
      !w.has(k) && z && (_ = (0, n.resolveUrl)(this.opts.uriResolver, _, z));
    }
    let p;
    if (typeof u != "boolean" && u.$ref && !(0, o.schemaHasRulesButRef)(u, this.RULES)) {
      const k = (0, n.resolveUrl)(this.opts.uriResolver, _, u.$ref);
      p = v.call(this, m, k);
    }
    const { schemaId: y } = this.opts;
    if (p = p || new a({ schema: u, schemaId: y, root: m, baseId: _ }), p.schema !== p.root.schema)
      return p;
  }
  return Ye;
}
const Sg = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Eg = "Meta-schema for $data reference (JSON AnySchema extension proposal)", kg = "object", Pg = ["$data"], Tg = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Rg = !1, Og = {
  $id: Sg,
  description: Eg,
  type: kg,
  required: Pg,
  properties: Tg,
  additionalProperties: Rg
};
var Vr = {}, hr = { exports: {} }, os, $i;
function Wl() {
  if ($i) return os;
  $i = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function r($) {
    let v = "", w = 0, b = 0;
    for (b = 0; b < $.length; b++)
      if (w = $[b].charCodeAt(0), w !== 48) {
        if (!(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
          return "";
        v += $[b];
        break;
      }
    for (b += 1; b < $.length; b++) {
      if (w = $[b].charCodeAt(0), !(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
        return "";
      v += $[b];
    }
    return v;
  }
  const n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o($) {
    return $.length = 0, !0;
  }
  function s($, v, w) {
    if ($.length) {
      const b = r($);
      if (b !== "")
        v.push(b);
      else
        return w.error = !0, !1;
      $.length = 0;
    }
    return !0;
  }
  function a($) {
    let v = 0;
    const w = { error: !1, address: "", zone: "" }, b = [], h = [];
    let _ = !1, u = !1, m = s;
    for (let S = 0; S < $.length; S++) {
      const p = $[S];
      if (!(p === "[" || p === "]"))
        if (p === ":") {
          if (_ === !0 && (u = !0), !m(h, b, w))
            break;
          if (++v > 7) {
            w.error = !0;
            break;
          }
          S > 0 && $[S - 1] === ":" && (_ = !0), b.push(":");
          continue;
        } else if (p === "%") {
          if (!m(h, b, w))
            break;
          m = o;
        } else {
          h.push(p);
          continue;
        }
    }
    return h.length && (m === o ? w.zone = h.join("") : u ? b.push(h.join("")) : b.push(r(h))), w.address = b.join(""), w;
  }
  function i($) {
    if (c($, ":") < 2)
      return { host: $, isIPV6: !1 };
    const v = a($);
    if (v.error)
      return { host: $, isIPV6: !1 };
    {
      let w = v.address, b = v.address;
      return v.zone && (w += "%" + v.zone, b += "%25" + v.zone), { host: w, isIPV6: !0, escapedHost: b };
    }
  }
  function c($, v) {
    let w = 0;
    for (let b = 0; b < $.length; b++)
      $[b] === v && w++;
    return w;
  }
  function d($) {
    let v = $;
    const w = [];
    let b = -1, h = 0;
    for (; h = v.length; ) {
      if (h === 1) {
        if (v === ".")
          break;
        if (v === "/") {
          w.push("/");
          break;
        } else {
          w.push(v);
          break;
        }
      } else if (h === 2) {
        if (v[0] === ".") {
          if (v[1] === ".")
            break;
          if (v[1] === "/") {
            v = v.slice(2);
            continue;
          }
        } else if (v[0] === "/" && (v[1] === "." || v[1] === "/")) {
          w.push("/");
          break;
        }
      } else if (h === 3 && v === "/..") {
        w.length !== 0 && w.pop(), w.push("/");
        break;
      }
      if (v[0] === ".") {
        if (v[1] === ".") {
          if (v[2] === "/") {
            v = v.slice(3);
            continue;
          }
        } else if (v[1] === "/") {
          v = v.slice(2);
          continue;
        }
      } else if (v[0] === "/" && v[1] === ".") {
        if (v[2] === "/") {
          v = v.slice(2);
          continue;
        } else if (v[2] === "." && v[3] === "/") {
          v = v.slice(3), w.length !== 0 && w.pop();
          continue;
        }
      }
      if ((b = v.indexOf("/", 1)) === -1) {
        w.push(v);
        break;
      } else
        w.push(v.slice(0, b)), v = v.slice(b);
    }
    return w.join("");
  }
  function l($, v) {
    const w = v !== !0 ? escape : unescape;
    return $.scheme !== void 0 && ($.scheme = w($.scheme)), $.userinfo !== void 0 && ($.userinfo = w($.userinfo)), $.host !== void 0 && ($.host = w($.host)), $.path !== void 0 && ($.path = w($.path)), $.query !== void 0 && ($.query = w($.query)), $.fragment !== void 0 && ($.fragment = w($.fragment)), $;
  }
  function g($) {
    const v = [];
    if ($.userinfo !== void 0 && (v.push($.userinfo), v.push("@")), $.host !== void 0) {
      let w = unescape($.host);
      if (!t(w)) {
        const b = i(w);
        b.isIPV6 === !0 ? w = `[${b.escapedHost}]` : w = $.host;
      }
      v.push(w);
    }
    return (typeof $.port == "number" || typeof $.port == "string") && (v.push(":"), v.push(String($.port))), v.length ? v.join("") : void 0;
  }
  return os = {
    nonSimpleDomain: n,
    recomposeAuthority: g,
    normalizeComponentEncoding: l,
    removeDotSegments: d,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: i,
    stringArrayToHexStripped: r
  }, os;
}
var ss, wi;
function Ig() {
  if (wi) return ss;
  wi = 1;
  const { isUUID: e } = Wl(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
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
  function n(p) {
    return r.indexOf(
      /** @type {*} */
      p
    ) !== -1;
  }
  function o(p) {
    return p.secure === !0 ? !0 : p.secure === !1 ? !1 : p.scheme ? p.scheme.length === 3 && (p.scheme[0] === "w" || p.scheme[0] === "W") && (p.scheme[1] === "s" || p.scheme[1] === "S") && (p.scheme[2] === "s" || p.scheme[2] === "S") : !1;
  }
  function s(p) {
    return p.host || (p.error = p.error || "HTTP URIs must have a host."), p;
  }
  function a(p) {
    const y = String(p.scheme).toLowerCase() === "https";
    return (p.port === (y ? 443 : 80) || p.port === "") && (p.port = void 0), p.path || (p.path = "/"), p;
  }
  function i(p) {
    return p.secure = o(p), p.resourceName = (p.path || "/") + (p.query ? "?" + p.query : ""), p.path = void 0, p.query = void 0, p;
  }
  function c(p) {
    if ((p.port === (o(p) ? 443 : 80) || p.port === "") && (p.port = void 0), typeof p.secure == "boolean" && (p.scheme = p.secure ? "wss" : "ws", p.secure = void 0), p.resourceName) {
      const [y, k] = p.resourceName.split("?");
      p.path = y && y !== "/" ? y : void 0, p.query = k, p.resourceName = void 0;
    }
    return p.fragment = void 0, p;
  }
  function d(p, y) {
    if (!p.path)
      return p.error = "URN can not be parsed", p;
    const k = p.path.match(t);
    if (k) {
      const I = y.scheme || p.scheme || "urn";
      p.nid = k[1].toLowerCase(), p.nss = k[2];
      const z = `${I}:${y.nid || p.nid}`, U = S(z);
      p.path = void 0, U && (p = U.parse(p, y));
    } else
      p.error = p.error || "URN can not be parsed.";
    return p;
  }
  function l(p, y) {
    if (p.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const k = y.scheme || p.scheme || "urn", I = p.nid.toLowerCase(), z = `${k}:${y.nid || I}`, U = S(z);
    U && (p = U.serialize(p, y));
    const M = p, F = p.nss;
    return M.path = `${I || y.nid}:${F}`, y.skipEscape = !0, M;
  }
  function g(p, y) {
    const k = p;
    return k.uuid = k.nss, k.nss = void 0, !y.tolerant && (!k.uuid || !e(k.uuid)) && (k.error = k.error || "UUID is not valid."), k;
  }
  function $(p) {
    const y = p;
    return y.nss = (p.uuid || "").toLowerCase(), y;
  }
  const v = (
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
      domainHost: v.domainHost,
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
  ), h = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: b.domainHost,
      parse: b.parse,
      serialize: b.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: v,
      https: w,
      ws: b,
      wss: h,
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
          parse: g,
          serialize: $,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(m, null);
  function S(p) {
    return p && (m[
      /** @type {SchemeName} */
      p
    ] || m[
      /** @type {SchemeName} */
      p.toLowerCase()
    ]) || void 0;
  }
  return ss = {
    wsIsSecure: o,
    SCHEMES: m,
    isValidSchemeName: n,
    getSchemeHandler: S
  }, ss;
}
var bi;
function Bl() {
  if (bi) return hr.exports;
  bi = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizeComponentEncoding: n, isIPv4: o, nonSimpleDomain: s } = Wl(), { SCHEMES: a, getSchemeHandler: i } = Ig();
  function c(h, _) {
    return typeof h == "string" ? h = /** @type {T} */
    $(w(h, _), _) : typeof h == "object" && (h = /** @type {T} */
    w($(h, _), _)), h;
  }
  function d(h, _, u) {
    const m = u ? Object.assign({ scheme: "null" }, u) : { scheme: "null" }, S = l(w(h, m), w(_, m), m, !0);
    return m.skipEscape = !0, $(S, m);
  }
  function l(h, _, u, m) {
    const S = {};
    return m || (h = w($(h, u), u), _ = w($(_, u), u)), u = u || {}, !u.tolerant && _.scheme ? (S.scheme = _.scheme, S.userinfo = _.userinfo, S.host = _.host, S.port = _.port, S.path = t(_.path || ""), S.query = _.query) : (_.userinfo !== void 0 || _.host !== void 0 || _.port !== void 0 ? (S.userinfo = _.userinfo, S.host = _.host, S.port = _.port, S.path = t(_.path || ""), S.query = _.query) : (_.path ? (_.path[0] === "/" ? S.path = t(_.path) : ((h.userinfo !== void 0 || h.host !== void 0 || h.port !== void 0) && !h.path ? S.path = "/" + _.path : h.path ? S.path = h.path.slice(0, h.path.lastIndexOf("/") + 1) + _.path : S.path = _.path, S.path = t(S.path)), S.query = _.query) : (S.path = h.path, _.query !== void 0 ? S.query = _.query : S.query = h.query), S.userinfo = h.userinfo, S.host = h.host, S.port = h.port), S.scheme = h.scheme), S.fragment = _.fragment, S;
  }
  function g(h, _, u) {
    return typeof h == "string" ? (h = unescape(h), h = $(n(w(h, u), !0), { ...u, skipEscape: !0 })) : typeof h == "object" && (h = $(n(h, !0), { ...u, skipEscape: !0 })), typeof _ == "string" ? (_ = unescape(_), _ = $(n(w(_, u), !0), { ...u, skipEscape: !0 })) : typeof _ == "object" && (_ = $(n(_, !0), { ...u, skipEscape: !0 })), h.toLowerCase() === _.toLowerCase();
  }
  function $(h, _) {
    const u = {
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
    }, m = Object.assign({}, _), S = [], p = i(m.scheme || u.scheme);
    p && p.serialize && p.serialize(u, m), u.path !== void 0 && (m.skipEscape ? u.path = unescape(u.path) : (u.path = escape(u.path), u.scheme !== void 0 && (u.path = u.path.split("%3A").join(":")))), m.reference !== "suffix" && u.scheme && S.push(u.scheme, ":");
    const y = r(u);
    if (y !== void 0 && (m.reference !== "suffix" && S.push("//"), S.push(y), u.path && u.path[0] !== "/" && S.push("/")), u.path !== void 0) {
      let k = u.path;
      !m.absolutePath && (!p || !p.absolutePath) && (k = t(k)), y === void 0 && k[0] === "/" && k[1] === "/" && (k = "/%2F" + k.slice(2)), S.push(k);
    }
    return u.query !== void 0 && S.push("?", u.query), u.fragment !== void 0 && S.push("#", u.fragment), S.join("");
  }
  const v = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function w(h, _) {
    const u = Object.assign({}, _), m = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let S = !1;
    u.reference === "suffix" && (u.scheme ? h = u.scheme + ":" + h : h = "//" + h);
    const p = h.match(v);
    if (p) {
      if (m.scheme = p[1], m.userinfo = p[3], m.host = p[4], m.port = parseInt(p[5], 10), m.path = p[6] || "", m.query = p[7], m.fragment = p[8], isNaN(m.port) && (m.port = p[5]), m.host)
        if (o(m.host) === !1) {
          const I = e(m.host);
          m.host = I.host.toLowerCase(), S = I.isIPV6;
        } else
          S = !0;
      m.scheme === void 0 && m.userinfo === void 0 && m.host === void 0 && m.port === void 0 && m.query === void 0 && !m.path ? m.reference = "same-document" : m.scheme === void 0 ? m.reference = "relative" : m.fragment === void 0 ? m.reference = "absolute" : m.reference = "uri", u.reference && u.reference !== "suffix" && u.reference !== m.reference && (m.error = m.error || "URI is not a " + u.reference + " reference.");
      const y = i(u.scheme || m.scheme);
      if (!u.unicodeSupport && (!y || !y.unicodeSupport) && m.host && (u.domainHost || y && y.domainHost) && S === !1 && s(m.host))
        try {
          m.host = URL.domainToASCII(m.host.toLowerCase());
        } catch (k) {
          m.error = m.error || "Host's domain name can not be converted to ASCII: " + k;
        }
      (!y || y && !y.skipNormalize) && (h.indexOf("%") !== -1 && (m.scheme !== void 0 && (m.scheme = unescape(m.scheme)), m.host !== void 0 && (m.host = unescape(m.host))), m.path && (m.path = escape(unescape(m.path))), m.fragment && (m.fragment = encodeURI(decodeURIComponent(m.fragment)))), y && y.parse && y.parse(m, u);
    } else
      m.error = m.error || "URI can not be parsed.";
    return m;
  }
  const b = {
    SCHEMES: a,
    normalize: c,
    resolve: d,
    resolveComponent: l,
    equal: g,
    serialize: $,
    parse: w
  };
  return hr.exports = b, hr.exports.default = b, hr.exports.fastUri = b, hr.exports;
}
var Si;
function Cg() {
  if (Si) return Vr;
  Si = 1, Object.defineProperty(Vr, "__esModule", { value: !0 });
  const e = Bl();
  return e.code = 'require("ajv/dist/runtime/uri").default', Vr.default = e, Vr;
}
var Ei;
function Ng() {
  return Ei || (Ei = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Vo();
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
    const n = /* @__PURE__ */ va(), o = /* @__PURE__ */ Lo(), s = /* @__PURE__ */ Jl(), a = /* @__PURE__ */ $a(), i = /* @__PURE__ */ ce(), c = /* @__PURE__ */ Uo(), d = /* @__PURE__ */ yo(), l = /* @__PURE__ */ de(), g = Og, $ = /* @__PURE__ */ Cg(), v = (A, T) => new RegExp(A, T);
    v.code = "new RegExp";
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
    }, _ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function m(A) {
      var T, q, O, f, E, C, V, H, Q, B, P, R, N, D, K, J, ue, Ie, ye, ge, le, Qe, be, It, Ct;
      const at = A.strict, Nt = (T = A.code) === null || T === void 0 ? void 0 : T.optimize, lr = Nt === !0 || Nt === void 0 ? 1 : Nt || 0, dr = (O = (q = A.code) === null || q === void 0 ? void 0 : q.regExp) !== null && O !== void 0 ? O : v, xo = (f = A.uriResolver) !== null && f !== void 0 ? f : $.default;
      return {
        strictSchema: (C = (E = A.strictSchema) !== null && E !== void 0 ? E : at) !== null && C !== void 0 ? C : !0,
        strictNumbers: (H = (V = A.strictNumbers) !== null && V !== void 0 ? V : at) !== null && H !== void 0 ? H : !0,
        strictTypes: (B = (Q = A.strictTypes) !== null && Q !== void 0 ? Q : at) !== null && B !== void 0 ? B : "log",
        strictTuples: (R = (P = A.strictTuples) !== null && P !== void 0 ? P : at) !== null && R !== void 0 ? R : "log",
        strictRequired: (D = (N = A.strictRequired) !== null && N !== void 0 ? N : at) !== null && D !== void 0 ? D : !1,
        code: A.code ? { ...A.code, optimize: lr, regExp: dr } : { optimize: lr, regExp: dr },
        loopRequired: (K = A.loopRequired) !== null && K !== void 0 ? K : u,
        loopEnum: (J = A.loopEnum) !== null && J !== void 0 ? J : u,
        meta: (ue = A.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (Ie = A.messages) !== null && Ie !== void 0 ? Ie : !0,
        inlineRefs: (ye = A.inlineRefs) !== null && ye !== void 0 ? ye : !0,
        schemaId: (ge = A.schemaId) !== null && ge !== void 0 ? ge : "$id",
        addUsedSchema: (le = A.addUsedSchema) !== null && le !== void 0 ? le : !0,
        validateSchema: (Qe = A.validateSchema) !== null && Qe !== void 0 ? Qe : !0,
        validateFormats: (be = A.validateFormats) !== null && be !== void 0 ? be : !0,
        unicodeRegExp: (It = A.unicodeRegExp) !== null && It !== void 0 ? It : !0,
        int32range: (Ct = A.int32range) !== null && Ct !== void 0 ? Ct : !0,
        uriResolver: xo
      };
    }
    class S {
      constructor(T = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), T = this.opts = { ...T, ...m(T) };
        const { es5: q, lines: O } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: b, es5: q, lines: O }), this.logger = F(T.logger);
        const f = T.validateFormats;
        T.validateFormats = !1, this.RULES = (0, s.getRules)(), p.call(this, h, T, "NOT SUPPORTED"), p.call(this, _, T, "DEPRECATED", "warn"), this._metaOpts = U.call(this), T.formats && I.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), T.keywords && z.call(this, T.keywords), typeof T.meta == "object" && this.addMetaSchema(T.meta), k.call(this), T.validateFormats = f;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: T, meta: q, schemaId: O } = this.opts;
        let f = g;
        O === "id" && (f = { ...g }, f.id = f.$id, delete f.$id), q && T && this.addMetaSchema(f, f[O], !1);
      }
      defaultMeta() {
        const { meta: T, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof T == "object" ? T[q] || T : void 0;
      }
      validate(T, q) {
        let O;
        if (typeof T == "string") {
          if (O = this.getSchema(T), !O)
            throw new Error(`no schema with key or ref "${T}"`);
        } else
          O = this.compile(T);
        const f = O(q);
        return "$async" in O || (this.errors = O.errors), f;
      }
      compile(T, q) {
        const O = this._addSchema(T, q);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(T, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return f.call(this, T, q);
        async function f(B, P) {
          await E.call(this, B.$schema);
          const R = this._addSchema(B, P);
          return R.validate || C.call(this, R);
        }
        async function E(B) {
          B && !this.getSchema(B) && await f.call(this, { $ref: B }, !0);
        }
        async function C(B) {
          try {
            return this._compileSchemaEnv(B);
          } catch (P) {
            if (!(P instanceof o.default))
              throw P;
            return V.call(this, P), await H.call(this, P.missingSchema), C.call(this, B);
          }
        }
        function V({ missingSchema: B, missingRef: P }) {
          if (this.refs[B])
            throw new Error(`AnySchema ${B} is loaded but ${P} cannot be resolved`);
        }
        async function H(B) {
          const P = await Q.call(this, B);
          this.refs[B] || await E.call(this, P.$schema), this.refs[B] || this.addSchema(P, B, q);
        }
        async function Q(B) {
          const P = this._loading[B];
          if (P)
            return P;
          try {
            return await (this._loading[B] = O(B));
          } finally {
            delete this._loading[B];
          }
        }
      }
      // Adds schema to the instance
      addSchema(T, q, O, f = this.opts.validateSchema) {
        if (Array.isArray(T)) {
          for (const C of T)
            this.addSchema(C, void 0, O, f);
          return this;
        }
        let E;
        if (typeof T == "object") {
          const { schemaId: C } = this.opts;
          if (E = T[C], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${C} must be string`);
        }
        return q = (0, c.normalizeId)(q || E), this._checkUnique(q), this.schemas[q] = this._addSchema(T, O, q, f, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(T, q, O = this.opts.validateSchema) {
        return this.addSchema(T, q, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(T, q) {
        if (typeof T == "boolean")
          return !0;
        let O;
        if (O = T.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const f = this.validate(O, T);
        if (!f && q) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return f;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(T) {
        let q;
        for (; typeof (q = y.call(this, T)) == "string"; )
          T = q;
        if (q === void 0) {
          const { schemaId: O } = this.opts, f = new a.SchemaEnv({ schema: {}, schemaId: O });
          if (q = a.resolveSchema.call(this, f, T), !q)
            return;
          this.refs[T] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(T) {
        if (T instanceof RegExp)
          return this._removeAllSchemas(this.schemas, T), this._removeAllSchemas(this.refs, T), this;
        switch (typeof T) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const q = y.call(this, T);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[T], delete this.refs[T], this;
          }
          case "object": {
            const q = T;
            this._cache.delete(q);
            let O = T[this.opts.schemaId];
            return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(T) {
        for (const q of T)
          this.addKeyword(q);
        return this;
      }
      addKeyword(T, q) {
        let O;
        if (typeof T == "string")
          O = T, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = O);
        else if (typeof T == "object" && q === void 0) {
          if (q = T, O = q.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (x.call(this, O, q), !q)
          return (0, l.eachItem)(O, (E) => te.call(this, E)), this;
        we.call(this, q);
        const f = {
          ...q,
          type: (0, d.getJSONTypes)(q.type),
          schemaType: (0, d.getJSONTypes)(q.schemaType)
        };
        return (0, l.eachItem)(O, f.type.length === 0 ? (E) => te.call(this, E, f) : (E) => f.type.forEach((C) => te.call(this, E, f, C))), this;
      }
      getKeyword(T) {
        const q = this.RULES.all[T];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(T) {
        const { RULES: q } = this;
        delete q.keywords[T], delete q.all[T];
        for (const O of q.rules) {
          const f = O.rules.findIndex((E) => E.keyword === T);
          f >= 0 && O.rules.splice(f, 1);
        }
        return this;
      }
      // Add format
      addFormat(T, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[T] = q, this;
      }
      errorsText(T = this.errors, { separator: q = ", ", dataVar: O = "data" } = {}) {
        return !T || T.length === 0 ? "No errors" : T.map((f) => `${O}${f.instancePath} ${f.message}`).reduce((f, E) => f + q + E);
      }
      $dataMetaSchema(T, q) {
        const O = this.RULES.all;
        T = JSON.parse(JSON.stringify(T));
        for (const f of q) {
          const E = f.split("/").slice(1);
          let C = T;
          for (const V of E)
            C = C[V];
          for (const V in O) {
            const H = O[V];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, B = C[V];
            Q && B && (C[V] = qe(B));
          }
        }
        return T;
      }
      _removeAllSchemas(T, q) {
        for (const O in T) {
          const f = T[O];
          (!q || q.test(O)) && (typeof f == "string" ? delete T[O] : f && !f.meta && (this._cache.delete(f.schema), delete T[O]));
        }
      }
      _addSchema(T, q, O, f = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let C;
        const { schemaId: V } = this.opts;
        if (typeof T == "object")
          C = T[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof T != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(T);
        if (H !== void 0)
          return H;
        O = (0, c.normalizeId)(C || O);
        const Q = c.getSchemaRefs.call(this, T, O);
        return H = new a.SchemaEnv({ schema: T, schemaId: V, meta: q, baseId: O, localRefs: Q }), this._cache.set(H.schema, H), E && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = H), f && this.validateSchema(T, !0), H;
      }
      _checkUnique(T) {
        if (this.schemas[T] || this.refs[T])
          throw new Error(`schema with key or id "${T}" already exists`);
      }
      _compileSchemaEnv(T) {
        if (T.meta ? this._compileMetaSchema(T) : a.compileSchema.call(this, T), !T.validate)
          throw new Error("ajv implementation error");
        return T.validate;
      }
      _compileMetaSchema(T) {
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, T);
        } finally {
          this.opts = q;
        }
      }
    }
    S.ValidationError = n.default, S.MissingRefError = o.default, e.default = S;
    function p(A, T, q, O = "error") {
      for (const f in A) {
        const E = f;
        E in T && this.logger[O](`${q}: option ${f}. ${A[E]}`);
      }
    }
    function y(A) {
      return A = (0, c.normalizeId)(A), this.schemas[A] || this.refs[A];
    }
    function k() {
      const A = this.opts.schemas;
      if (A)
        if (Array.isArray(A))
          this.addSchema(A);
        else
          for (const T in A)
            this.addSchema(A[T], T);
    }
    function I() {
      for (const A in this.opts.formats) {
        const T = this.opts.formats[A];
        T && this.addFormat(A, T);
      }
    }
    function z(A) {
      if (Array.isArray(A)) {
        this.addVocabulary(A);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const T in A) {
        const q = A[T];
        q.keyword || (q.keyword = T), this.addKeyword(q);
      }
    }
    function U() {
      const A = { ...this.opts };
      for (const T of w)
        delete A[T];
      return A;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function F(A) {
      if (A === !1)
        return M;
      if (A === void 0)
        return console;
      if (A.log && A.warn && A.error)
        return A;
      throw new Error("logger must implement log, warn and error methods");
    }
    const Z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function x(A, T) {
      const { RULES: q } = this;
      if ((0, l.eachItem)(A, (O) => {
        if (q.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!Z.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!T && T.$data && !("code" in T || "validate" in T))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(A, T, q) {
      var O;
      const f = T == null ? void 0 : T.post;
      if (q && f)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let C = f ? E.post : E.rules.find(({ type: H }) => H === q);
      if (C || (C = { type: q, rules: [] }, E.rules.push(C)), E.keywords[A] = !0, !T)
        return;
      const V = {
        keyword: A,
        definition: {
          ...T,
          type: (0, d.getJSONTypes)(T.type),
          schemaType: (0, d.getJSONTypes)(T.schemaType)
        }
      };
      T.before ? _e.call(this, C, V, T.before) : C.rules.push(V), E.all[A] = V, (O = T.implements) === null || O === void 0 || O.forEach((H) => this.addKeyword(H));
    }
    function _e(A, T, q) {
      const O = A.rules.findIndex((f) => f.keyword === q);
      O >= 0 ? A.rules.splice(O, 0, T) : (A.rules.push(T), this.logger.warn(`rule ${q} is not defined`));
    }
    function we(A) {
      let { metaSchema: T } = A;
      T !== void 0 && (A.$data && this.opts.$data && (T = qe(T)), A.validateSchema = this.compile(T, !0));
    }
    const ee = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function qe(A) {
      return { anyOf: [A, ee] };
    }
  }(Qo)), Qo;
}
var Lr = {}, Fr = {}, Zr = {}, ki;
function jg() {
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
function qg() {
  if (Pi) return $t;
  Pi = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.callRef = $t.getValidate = void 0;
  const e = /* @__PURE__ */ Lo(), t = /* @__PURE__ */ dt(), r = /* @__PURE__ */ ce(), n = /* @__PURE__ */ Rt(), o = /* @__PURE__ */ $a(), s = /* @__PURE__ */ de(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: l, schema: g, it: $ } = d, { baseId: v, schemaEnv: w, validateName: b, opts: h, self: _ } = $, { root: u } = w;
      if ((g === "#" || g === "#/") && v === u.baseId)
        return S();
      const m = o.resolveRef.call(_, u, v, g);
      if (m === void 0)
        throw new e.default($.opts.uriResolver, v, g);
      if (m instanceof o.SchemaEnv)
        return p(m);
      return y(m);
      function S() {
        if (w === u)
          return c(d, b, w, w.$async);
        const k = l.scopeValue("root", { ref: u });
        return c(d, (0, r._)`${k}.validate`, u, u.$async);
      }
      function p(k) {
        const I = i(d, k);
        c(d, I, k, k.$async);
      }
      function y(k) {
        const I = l.scopeValue("schema", h.code.source === !0 ? { ref: k, code: (0, r.stringify)(k) } : { ref: k }), z = l.name("valid"), U = d.subschema({
          schema: k,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: I,
          errSchemaPath: g
        }, z);
        d.mergeEvaluated(U), d.ok(z);
      }
    }
  };
  function i(d, l) {
    const { gen: g } = d;
    return l.validate ? g.scopeValue("validate", { ref: l.validate }) : (0, r._)`${g.scopeValue("wrapper", { ref: l })}.validate`;
  }
  $t.getValidate = i;
  function c(d, l, g, $) {
    const { gen: v, it: w } = d, { allErrors: b, schemaEnv: h, opts: _ } = w, u = _.passContext ? n.default.this : r.nil;
    $ ? m() : S();
    function m() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const k = v.let("valid");
      v.try(() => {
        v.code((0, r._)`await ${(0, t.callValidateCode)(d, l, u)}`), y(l), b || v.assign(k, !0);
      }, (I) => {
        v.if((0, r._)`!(${I} instanceof ${w.ValidationError})`, () => v.throw(I)), p(I), b || v.assign(k, !1);
      }), d.ok(k);
    }
    function S() {
      d.result((0, t.callValidateCode)(d, l, u), () => y(l), () => p(l));
    }
    function p(k) {
      const I = (0, r._)`${k}.errors`;
      v.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${I} : ${n.default.vErrors}.concat(${I})`), v.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function y(k) {
      var I;
      if (!w.opts.unevaluated)
        return;
      const z = (I = g == null ? void 0 : g.validate) === null || I === void 0 ? void 0 : I.evaluated;
      if (w.props !== !0)
        if (z && !z.dynamicProps)
          z.props !== void 0 && (w.props = s.mergeEvaluated.props(v, z.props, w.props));
        else {
          const U = v.var("props", (0, r._)`${k}.evaluated.props`);
          w.props = s.mergeEvaluated.props(v, U, w.props, r.Name);
        }
      if (w.items !== !0)
        if (z && !z.dynamicItems)
          z.items !== void 0 && (w.items = s.mergeEvaluated.items(v, z.items, w.items));
        else {
          const U = v.var("items", (0, r._)`${k}.evaluated.items`);
          w.items = s.mergeEvaluated.items(v, U, w.items, r.Name);
        }
    }
  }
  return $t.callRef = c, $t.default = a, $t;
}
var Ti;
function zg() {
  if (Ti) return Fr;
  Ti = 1, Object.defineProperty(Fr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ jg(), t = /* @__PURE__ */ qg(), r = [
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
function Mg() {
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
function Ag() {
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
function Dg() {
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
function Ug() {
  if (Ci) return Jr;
  Ci = 1, Object.defineProperty(Jr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ Dg(), o = {
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
      const { keyword: a, data: i, schemaCode: c, it: d } = s, l = a === "maxLength" ? e.operators.GT : e.operators.LT, g = d.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, r.default)}(${i})`;
      s.fail$data((0, e._)`${g} ${l} ${c}`);
    }
  };
  return Jr.default = o, Jr;
}
var Wr = {}, Ni;
function Vg() {
  if (Ni) return Wr;
  Ni = 1, Object.defineProperty(Wr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ ce(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, r.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, r._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: g } = s, $ = g.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: v } = g.opts.code, w = v.code === "new RegExp" ? (0, r._)`new RegExp` : (0, t.useFunc)(a, v), b = a.let("valid");
        a.try(() => a.assign(b, (0, r._)`${w}(${l}, ${$}).test(${i})`), () => a.assign(b, !1)), s.fail$data((0, r._)`!${b}`);
      } else {
        const v = (0, e.usePattern)(s, d);
        s.fail$data((0, r._)`!${v}.test(${i})`);
      }
    }
  };
  return Wr.default = o, Wr;
}
var Br = {}, ji;
function Lg() {
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
function Fg() {
  if (qi) return Qr;
  qi = 1, Object.defineProperty(Qr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: a, schema: i, schemaCode: c, data: d, $data: l, it: g } = s, { opts: $ } = g;
      if (!l && i.length === 0)
        return;
      const v = i.length >= $.loopRequired;
      if (g.allErrors ? w() : b(), $.strictRequired) {
        const u = s.parentSchema.properties, { definedProperties: m } = s.it;
        for (const S of i)
          if ((u == null ? void 0 : u[S]) === void 0 && !m.has(S)) {
            const p = g.schemaEnv.baseId + g.errSchemaPath, y = `required property "${S}" is not defined at "${p}" (strictRequired)`;
            (0, r.checkStrictMode)(g, y, g.opts.strictRequired);
          }
      }
      function w() {
        if (v || l)
          s.block$data(t.nil, h);
        else
          for (const u of i)
            (0, e.checkReportMissingProp)(s, u);
      }
      function b() {
        const u = a.let("missing");
        if (v || l) {
          const m = a.let("valid", !0);
          s.block$data(m, () => _(u, m)), s.ok(m);
        } else
          a.if((0, e.checkMissingProp)(s, i, u)), (0, e.reportMissingProp)(s, u), a.else();
      }
      function h() {
        a.forOf("prop", c, (u) => {
          s.setParams({ missingProperty: u }), a.if((0, e.noPropertyInData)(a, d, u, $.ownProperties), () => s.error());
        });
      }
      function _(u, m) {
        s.setParams({ missingProperty: u }), a.forOf(u, c, () => {
          a.assign(m, (0, e.propertyInData)(a, d, u, $.ownProperties)), a.if((0, t.not)(m), () => {
            s.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return Qr.default = o, Qr;
}
var Yr = {}, zi;
function Zg() {
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
  const e = Do();
  return e.code = 'require("ajv/dist/runtime/equal").default', en.default = e, en;
}
var Ai;
function Hg() {
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
      const { gen: i, data: c, $data: d, schema: l, parentSchema: g, schemaCode: $, it: v } = a;
      if (!d && !l)
        return;
      const w = i.let("valid"), b = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      a.block$data(w, h, (0, t._)`${$} === false`), a.ok(w);
      function h() {
        const S = i.let("i", (0, t._)`${c}.length`), p = i.let("j");
        a.setParams({ i: S, j: p }), i.assign(w, !0), i.if((0, t._)`${S} > 1`, () => (_() ? u : m)(S, p));
      }
      function _() {
        return b.length > 0 && !b.some((S) => S === "object" || S === "array");
      }
      function u(S, p) {
        const y = i.name("item"), k = (0, e.checkDataTypes)(b, y, v.opts.strictNumbers, e.DataType.Wrong), I = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${S}--;`, () => {
          i.let(y, (0, t._)`${c}[${S}]`), i.if(k, (0, t._)`continue`), b.length > 1 && i.if((0, t._)`typeof ${y} == "string"`, (0, t._)`${y} += "_"`), i.if((0, t._)`typeof ${I}[${y}] == "number"`, () => {
            i.assign(p, (0, t._)`${I}[${y}]`), a.error(), i.assign(w, !1).break();
          }).code((0, t._)`${I}[${y}] = ${S}`);
        });
      }
      function m(S, p) {
        const y = (0, r.useFunc)(i, n.default), k = i.name("outer");
        i.label(k).for((0, t._)`;${S}--;`, () => i.for((0, t._)`${p} = ${S}; ${p}--;`, () => i.if((0, t._)`${y}(${c}[${S}], ${c}[${p}])`, () => {
          a.error(), i.assign(w, !1).break(k);
        })));
      }
    }
  };
  return Xr.default = s, Xr;
}
var tn = {}, Di;
function Kg() {
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
function xg() {
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
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: g } = s;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = d.length >= g.opts.loopEnum;
      let v;
      const w = () => v ?? (v = (0, t.useFunc)(a, r.default));
      let b;
      if ($ || c)
        b = a.let("valid"), s.block$data(b, h);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const u = a.const("vSchema", l);
        b = (0, e.or)(...d.map((m, S) => _(u, S)));
      }
      s.pass(b);
      function h() {
        a.assign(b, !1), a.forOf("v", l, (u) => a.if((0, e._)`${w()}(${i}, ${u})`, () => a.assign(b, !0).break()));
      }
      function _(u, m) {
        const S = d[m];
        return typeof S == "object" && S !== null ? (0, e._)`${w()}(${i}, ${u}[${m}])` : (0, e._)`${i} === ${S}`;
      }
    }
  };
  return rn.default = o, rn;
}
var Vi;
function Jg() {
  if (Vi) return Hr;
  Vi = 1, Object.defineProperty(Hr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mg(), t = /* @__PURE__ */ Ag(), r = /* @__PURE__ */ Ug(), n = /* @__PURE__ */ Vg(), o = /* @__PURE__ */ Lg(), s = /* @__PURE__ */ Fg(), a = /* @__PURE__ */ Zg(), i = /* @__PURE__ */ Hg(), c = /* @__PURE__ */ Kg(), d = /* @__PURE__ */ xg(), l = [
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
function Ql() {
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
    const { gen: i, schema: c, data: d, keyword: l, it: g } = s;
    g.items = !0;
    const $ = i.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      s.setParams({ len: a.length }), s.pass((0, e._)`${$} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const w = i.var("valid", (0, e._)`${$} <= ${a.length}`);
      i.if((0, e.not)(w), () => v(w)), s.ok(w);
    }
    function v(w) {
      i.forRange("i", a.length, $, (b) => {
        s.subschema({ keyword: l, dataProp: b, dataPropType: t.Type.Num }, w), g.allErrors || i.if((0, e.not)(w), () => i.break());
      });
    }
  }
  return Ht.validateAdditionalItems = o, Ht.default = n, Ht;
}
var on = {}, Kt = {}, Fi;
function Yl() {
  if (Fi) return Kt;
  Fi = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.validateTuple = void 0;
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ dt(), n = {
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
    const { gen: c, parentSchema: d, data: l, keyword: g, it: $ } = s;
    b(d), $.opts.unevaluated && i.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(c, i.length, $.items));
    const v = c.name("valid"), w = c.const("len", (0, e._)`${l}.length`);
    i.forEach((h, _) => {
      (0, t.alwaysValidSchema)($, h) || (c.if((0, e._)`${w} > ${_}`, () => s.subschema({
        keyword: g,
        schemaProp: _,
        dataProp: _
      }, v)), s.ok(v));
    });
    function b(h) {
      const { opts: _, errSchemaPath: u } = $, m = i.length, S = m === h.minItems && (m === h.maxItems || h[a] === !1);
      if (_.strictTuples && !S) {
        const p = `"${g}" is ${m}-tuple, but minItems or maxItems/${a} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, p, _.strictTuples);
      }
    }
  }
  return Kt.validateTuple = o, Kt.default = n, Kt;
}
var Zi;
function Gg() {
  if (Zi) return on;
  Zi = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Yl(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return on.default = t, on;
}
var sn = {}, Hi;
function Wg() {
  if (Hi) return sn;
  Hi = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ de(), r = /* @__PURE__ */ dt(), n = /* @__PURE__ */ Ql(), s = {
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
function Bg() {
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
      let l, g;
      const { minContains: $, maxContains: v } = i;
      d.opts.next ? (l = $ === void 0 ? 1 : $, g = v) : l = 1;
      const w = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: l, max: g }), g === void 0 && l === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && l > g) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, a)) {
        let m = (0, e._)`${w} >= ${l}`;
        g !== void 0 && (m = (0, e._)`${m} && ${w} <= ${g}`), o.pass(m);
        return;
      }
      d.items = !0;
      const b = s.name("valid");
      g === void 0 && l === 1 ? _(b, () => s.if(b, () => s.break())) : l === 0 ? (s.let(b, !0), g !== void 0 && s.if((0, e._)`${c}.length > 0`, h)) : (s.let(b, !1), h()), o.result(b, () => o.reset());
      function h() {
        const m = s.name("_valid"), S = s.let("count", 0);
        _(m, () => s.if(m, () => u(S)));
      }
      function _(m, S) {
        s.forRange("i", 0, w, (p) => {
          o.subschema({
            keyword: "contains",
            dataProp: p,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), S();
        });
      }
      function u(m) {
        s.code((0, e._)`${m}++`), g === void 0 ? s.if((0, e._)`${m} >= ${l}`, () => s.assign(b, !0).break()) : (s.if((0, e._)`${m} > ${g}`, () => s.assign(b, !1).break()), l === 1 ? s.assign(b, !0) : s.if((0, e._)`${m} >= ${l}`, () => s.assign(b, !0)));
      }
    }
  };
  return an.default = n, an;
}
var as = {}, xi;
function Qg() {
  return xi || (xi = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ dt();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: l } }) => {
        const g = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${l} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: l, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
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
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const $ = Array.isArray(c[g]) ? d : l;
        $[g] = c[g];
      }
      return [d, l];
    }
    function a(c, d = c.schema) {
      const { gen: l, data: g, it: $ } = c;
      if (Object.keys(d).length === 0)
        return;
      const v = l.let("missing");
      for (const w in d) {
        const b = d[w];
        if (b.length === 0)
          continue;
        const h = (0, n.propertyInData)(l, g, w, $.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: b.length,
          deps: b.join(", ")
        }), $.allErrors ? l.if(h, () => {
          for (const _ of b)
            (0, n.checkReportMissingProp)(c, _);
        }) : (l.if((0, t._)`${h} && (${(0, n.checkMissingProp)(c, b, v)})`), (0, n.reportMissingProp)(c, v), l.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, d = c.schema) {
      const { gen: l, data: g, keyword: $, it: v } = c, w = l.name("valid");
      for (const b in d)
        (0, r.alwaysValidSchema)(v, d[b]) || (l.if(
          (0, n.propertyInData)(l, g, b, v.opts.ownProperties),
          () => {
            const h = c.subschema({ keyword: $, schemaProp: b }, w);
            c.mergeValidEvaluated(h, w);
          },
          () => l.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = i, e.default = o;
  }(as)), as;
}
var cn = {}, Ji;
function Yg() {
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
function Xl() {
  if (Gi) return un;
  Gi = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ Rt(), n = /* @__PURE__ */ de(), s = {
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
      const { gen: i, schema: c, parentSchema: d, data: l, errsCount: g, it: $ } = a;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: w } = $;
      if ($.props = !0, w.removeAdditional !== "all" && (0, n.alwaysValidSchema)($, c))
        return;
      const b = (0, e.allSchemaProperties)(d.properties), h = (0, e.allSchemaProperties)(d.patternProperties);
      _(), a.ok((0, t._)`${g} === ${r.default.errors}`);
      function _() {
        i.forIn("key", l, (y) => {
          !b.length && !h.length ? S(y) : i.if(u(y), () => S(y));
        });
      }
      function u(y) {
        let k;
        if (b.length > 8) {
          const I = (0, n.schemaRefOrVal)($, d.properties, "properties");
          k = (0, e.isOwnProperty)(i, I, y);
        } else b.length ? k = (0, t.or)(...b.map((I) => (0, t._)`${y} === ${I}`)) : k = t.nil;
        return h.length && (k = (0, t.or)(k, ...h.map((I) => (0, t._)`${(0, e.usePattern)(a, I)}.test(${y})`))), (0, t.not)(k);
      }
      function m(y) {
        i.code((0, t._)`delete ${l}[${y}]`);
      }
      function S(y) {
        if (w.removeAdditional === "all" || w.removeAdditional && c === !1) {
          m(y);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: y }), a.error(), v || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)($, c)) {
          const k = i.name("valid");
          w.removeAdditional === "failing" ? (p(y, k, !1), i.if((0, t.not)(k), () => {
            a.reset(), m(y);
          })) : (p(y, k), v || i.if((0, t.not)(k), () => i.break()));
        }
      }
      function p(y, k, I) {
        const z = {
          keyword: "additionalProperties",
          dataProp: y,
          dataPropType: n.Type.Str
        };
        I === !1 && Object.assign(z, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(z, k);
      }
    }
  };
  return un.default = s, un;
}
var ln = {}, Wi;
function Xg() {
  if (Wi) return ln;
  Wi = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Vo(), t = /* @__PURE__ */ dt(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ Xl(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, parentSchema: c, data: d, it: l } = s;
      l.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(l, n.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(i);
      for (const h of g)
        l.definedProperties.add(h);
      l.opts.unevaluated && g.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(g), l.props));
      const $ = g.filter((h) => !(0, r.alwaysValidSchema)(l, i[h]));
      if ($.length === 0)
        return;
      const v = a.name("valid");
      for (const h of $)
        w(h) ? b(h) : (a.if((0, t.propertyInData)(a, d, h, l.opts.ownProperties)), b(h), l.allErrors || a.else().var(v, !0), a.endIf()), s.it.definedProperties.add(h), s.ok(v);
      function w(h) {
        return l.opts.useDefaults && !l.compositeRule && i[h].default !== void 0;
      }
      function b(h) {
        s.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, v);
      }
    }
  };
  return ln.default = o, ln;
}
var dn = {}, Bi;
function ev() {
  if (Bi) return dn;
  Bi = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ dt(), t = /* @__PURE__ */ ce(), r = /* @__PURE__ */ de(), n = /* @__PURE__ */ de(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: d, it: l } = s, { opts: g } = l, $ = (0, e.allSchemaProperties)(i), v = $.filter((S) => (0, r.alwaysValidSchema)(l, i[S]));
      if ($.length === 0 || v.length === $.length && (!l.opts.unevaluated || l.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && d.properties, b = a.name("valid");
      l.props !== !0 && !(l.props instanceof t.Name) && (l.props = (0, n.evaluatedPropsToName)(a, l.props));
      const { props: h } = l;
      _();
      function _() {
        for (const S of $)
          w && u(S), l.allErrors ? m(S) : (a.var(b, !0), m(S), a.if(b));
      }
      function u(S) {
        for (const p in w)
          new RegExp(S).test(p) && (0, r.checkStrictMode)(l, `property ${p} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function m(S) {
        a.forIn("key", c, (p) => {
          a.if((0, t._)`${(0, e.usePattern)(s, S)}.test(${p})`, () => {
            const y = v.includes(S);
            y || s.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: p,
              dataPropType: n.Type.Str
            }, b), l.opts.unevaluated && h !== !0 ? a.assign((0, t._)`${h}[${p}]`, !0) : !y && !l.allErrors && a.if((0, t.not)(b), () => a.break());
          });
        });
      }
    }
  };
  return dn.default = o, dn;
}
var fn = {}, Qi;
function tv() {
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
function rv() {
  if (Yi) return hn;
  Yi = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ dt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return hn.default = t, hn;
}
var pn = {}, Xi;
function nv() {
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
      const d = a, l = s.let("valid", !1), g = s.let("passing", null), $ = s.name("_valid");
      o.setParams({ passing: g }), s.block(v), o.result(l, () => o.reset(), () => o.error(!0));
      function v() {
        d.forEach((w, b) => {
          let h;
          (0, t.alwaysValidSchema)(c, w) ? s.var($, !0) : h = o.subschema({
            keyword: "oneOf",
            schemaProp: b,
            compositeRule: !0
          }, $), b > 0 && s.if((0, e._)`${$} && ${l}`).assign(l, !1).assign(g, (0, e._)`[${g}, ${b}]`).else(), s.if($, () => {
            s.assign(l, !0), s.assign(g, b), h && o.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return pn.default = n, pn;
}
var mn = {}, ec;
function ov() {
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
function sv() {
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
      const g = a.let("valid", !0), $ = a.name("_valid");
      if (v(), s.reset(), d && l) {
        const b = a.let("ifClause");
        s.setParams({ ifClause: b }), a.if($, w("then", b), w("else", b));
      } else d ? a.if($, w("then")) : a.if((0, e.not)($), w("else"));
      s.pass(g, () => s.error(!0));
      function v() {
        const b = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        s.mergeEvaluated(b);
      }
      function w(b, h) {
        return () => {
          const _ = s.subschema({ keyword: b }, $);
          a.assign(g, $), s.mergeValidEvaluated(_, g), h ? a.assign(h, (0, e._)`${b}`) : s.setParams({ ifClause: b });
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
function av() {
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
function iv() {
  if (nc) return nn;
  nc = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ql(), t = /* @__PURE__ */ Gg(), r = /* @__PURE__ */ Yl(), n = /* @__PURE__ */ Wg(), o = /* @__PURE__ */ Bg(), s = /* @__PURE__ */ Qg(), a = /* @__PURE__ */ Yg(), i = /* @__PURE__ */ Xl(), c = /* @__PURE__ */ Xg(), d = /* @__PURE__ */ ev(), l = /* @__PURE__ */ tv(), g = /* @__PURE__ */ rv(), $ = /* @__PURE__ */ nv(), v = /* @__PURE__ */ ov(), w = /* @__PURE__ */ sv(), b = /* @__PURE__ */ av();
  function h(_ = !1) {
    const u = [
      // any
      l.default,
      g.default,
      $.default,
      v.default,
      w.default,
      b.default,
      // object
      a.default,
      i.default,
      s.default,
      c.default,
      d.default
    ];
    return _ ? u.push(t.default, n.default) : u.push(e.default, r.default), u.push(o.default), u;
  }
  return nn.default = h, nn;
}
var gn = {}, vn = {}, oc;
function cv() {
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
      const { gen: s, data: a, $data: i, schema: c, schemaCode: d, it: l } = n, { opts: g, errSchemaPath: $, schemaEnv: v, self: w } = l;
      if (!g.validateFormats)
        return;
      i ? b() : h();
      function b() {
        const _ = s.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), u = s.const("fDef", (0, e._)`${_}[${d}]`), m = s.let("fType"), S = s.let("format");
        s.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => s.assign(m, (0, e._)`${u}.type || "string"`).assign(S, (0, e._)`${u}.validate`), () => s.assign(m, (0, e._)`"string"`).assign(S, u)), n.fail$data((0, e.or)(p(), y()));
        function p() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${S}`;
        }
        function y() {
          const k = v.$async ? (0, e._)`(${u}.async ? await ${S}(${a}) : ${S}(${a}))` : (0, e._)`${S}(${a})`, I = (0, e._)`(typeof ${S} == "function" ? ${k} : ${S}.test(${a}))`;
          return (0, e._)`${S} && ${S} !== true && ${m} === ${o} && !${I}`;
        }
      }
      function h() {
        const _ = w.formats[c];
        if (!_) {
          p();
          return;
        }
        if (_ === !0)
          return;
        const [u, m, S] = y(_);
        u === o && n.pass(k());
        function p() {
          if (g.strictSchema === !1) {
            w.logger.warn(I());
            return;
          }
          throw new Error(I());
          function I() {
            return `unknown format "${c}" ignored in schema at path "${$}"`;
          }
        }
        function y(I) {
          const z = I instanceof RegExp ? (0, e.regexpCode)(I) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, U = s.scopeValue("formats", { key: c, ref: I, code: z });
          return typeof I == "object" && !(I instanceof RegExp) ? [I.type || "string", I.validate, (0, e._)`${U}.validate`] : ["string", I, U];
        }
        function k() {
          if (typeof _ == "object" && !(_ instanceof RegExp) && _.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${a})`;
          }
          return typeof m == "function" ? (0, e._)`${S}(${a})` : (0, e._)`${S}.test(${a})`;
        }
      }
    }
  };
  return vn.default = r, vn;
}
var sc;
function uv() {
  if (sc) return gn;
  sc = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ cv()).default];
  return gn.default = t, gn;
}
var Mt = {}, ac;
function lv() {
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
function dv() {
  if (ic) return Lr;
  ic = 1, Object.defineProperty(Lr, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zg(), t = /* @__PURE__ */ Jg(), r = /* @__PURE__ */ iv(), n = /* @__PURE__ */ uv(), o = /* @__PURE__ */ lv(), s = [
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
function fv() {
  if (cc) return pr;
  cc = 1, Object.defineProperty(pr, "__esModule", { value: !0 }), pr.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (pr.DiscrError = e = {})), pr;
}
var uc;
function hv() {
  if (uc) return $n;
  uc = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ce(), t = /* @__PURE__ */ fv(), r = /* @__PURE__ */ $a(), n = /* @__PURE__ */ Lo(), o = /* @__PURE__ */ de(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: d } }) => (0, e._)`{error: ${i}, tag: ${d}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: d, schema: l, parentSchema: g, it: $ } = i, { oneOf: v } = g;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = l.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (l.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const b = c.let("valid", !1), h = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${h} == "string"`, () => _(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: w })), i.ok(b);
      function _() {
        const S = m();
        c.if(!1);
        for (const p in S)
          c.elseIf((0, e._)`${h} === ${p}`), c.assign(b, u(S[p]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: w }), c.endIf();
      }
      function u(S) {
        const p = c.name("valid"), y = i.subschema({ keyword: "oneOf", schemaProp: S }, p);
        return i.mergeEvaluated(y, e.Name), p;
      }
      function m() {
        var S;
        const p = {}, y = I(g);
        let k = !0;
        for (let M = 0; M < v.length; M++) {
          let F = v[M];
          if (F != null && F.$ref && !(0, o.schemaHasRulesButRef)(F, $.self.RULES)) {
            const x = F.$ref;
            if (F = r.resolveRef.call($.self, $.schemaEnv.root, $.baseId, x), F instanceof r.SchemaEnv && (F = F.schema), F === void 0)
              throw new n.default($.opts.uriResolver, $.baseId, x);
          }
          const Z = (S = F == null ? void 0 : F.properties) === null || S === void 0 ? void 0 : S[w];
          if (typeof Z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          k = k && (y || I(F)), z(Z, M);
        }
        if (!k)
          throw new Error(`discriminator: "${w}" must be required`);
        return p;
        function I({ required: M }) {
          return Array.isArray(M) && M.includes(w);
        }
        function z(M, F) {
          if (M.const)
            U(M.const, F);
          else if (M.enum)
            for (const Z of M.enum)
              U(Z, F);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function U(M, F) {
          if (typeof M != "string" || M in p)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          p[M] = F;
        }
      }
    }
  };
  return $n.default = a, $n;
}
const pv = "http://json-schema.org/draft-07/schema#", mv = "http://json-schema.org/draft-07/schema#", _v = "Core schema meta-schema", yv = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, gv = ["object", "boolean"], vv = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, $v = {
  $schema: pv,
  $id: mv,
  title: _v,
  definitions: yv,
  type: gv,
  properties: vv,
  default: !0
};
var lc;
function wv() {
  return lc || (lc = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = /* @__PURE__ */ Ng(), n = /* @__PURE__ */ dv(), o = /* @__PURE__ */ hv(), s = $v, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
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
    var d = /* @__PURE__ */ Vo();
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
    var g = /* @__PURE__ */ va();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var $ = /* @__PURE__ */ Lo();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  }(Mr, Mr.exports)), Mr.exports;
}
var bv = /* @__PURE__ */ wv();
const Sv = /* @__PURE__ */ Iu(bv);
var wn = { exports: {} }, is = {}, dc;
function Ev() {
  return dc || (dc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(M, F) {
      return { validate: M, compare: F };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(s, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), d),
      "date-time": t($(!0), v),
      "iso-time": t(c(), l),
      "iso-date-time": t($(), w),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: _,
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
      byte: m,
      // signed 32 bit integer
      int32: { type: "number", validate: y },
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
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, v),
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
    function r(M) {
      return M % 4 === 0 && (M % 100 !== 0 || M % 400 === 0);
    }
    const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function s(M) {
      const F = n.exec(M);
      if (!F)
        return !1;
      const Z = +F[1], x = +F[2], te = +F[3];
      return x >= 1 && x <= 12 && te >= 1 && te <= (x === 2 && r(Z) ? 29 : o[x]);
    }
    function a(M, F) {
      if (M && F)
        return M > F ? 1 : M < F ? -1 : 0;
    }
    const i = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(M) {
      return function(Z) {
        const x = i.exec(Z);
        if (!x)
          return !1;
        const te = +x[1], _e = +x[2], we = +x[3], ee = x[4], qe = x[5] === "-" ? -1 : 1, A = +(x[6] || 0), T = +(x[7] || 0);
        if (A > 23 || T > 59 || M && !ee)
          return !1;
        if (te <= 23 && _e <= 59 && we < 60)
          return !0;
        const q = _e - T * qe, O = te - A * qe - (q < 0 ? 1 : 0);
        return (O === 23 || O === -1) && (q === 59 || q === -1) && we < 61;
      };
    }
    function d(M, F) {
      if (!(M && F))
        return;
      const Z = (/* @__PURE__ */ new Date("2020-01-01T" + M)).valueOf(), x = (/* @__PURE__ */ new Date("2020-01-01T" + F)).valueOf();
      if (Z && x)
        return Z - x;
    }
    function l(M, F) {
      if (!(M && F))
        return;
      const Z = i.exec(M), x = i.exec(F);
      if (Z && x)
        return M = Z[1] + Z[2] + Z[3], F = x[1] + x[2] + x[3], M > F ? 1 : M < F ? -1 : 0;
    }
    const g = /t|\s/i;
    function $(M) {
      const F = c(M);
      return function(x) {
        const te = x.split(g);
        return te.length === 2 && s(te[0]) && F(te[1]);
      };
    }
    function v(M, F) {
      if (!(M && F))
        return;
      const Z = new Date(M).valueOf(), x = new Date(F).valueOf();
      if (Z && x)
        return Z - x;
    }
    function w(M, F) {
      if (!(M && F))
        return;
      const [Z, x] = M.split(g), [te, _e] = F.split(g), we = a(Z, te);
      if (we !== void 0)
        return we || d(x, _e);
    }
    const b = /\/|:/, h = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function _(M) {
      return b.test(M) && h.test(M);
    }
    const u = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function m(M) {
      return u.lastIndex = 0, u.test(M);
    }
    const S = -2147483648, p = 2 ** 31 - 1;
    function y(M) {
      return Number.isInteger(M) && M <= p && M >= S;
    }
    function k(M) {
      return Number.isInteger(M);
    }
    function I() {
      return !0;
    }
    const z = /[^\\]\\Z/;
    function U(M) {
      if (z.test(M))
        return !1;
      try {
        return new RegExp(M), !0;
      } catch {
        return !1;
      }
    }
  }(is)), is;
}
var cs = {}, bn = { exports: {} }, us = {}, _t = {}, At = {}, ls = {}, ds = {}, fs = {}, fc;
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
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((m, S) => `${m}${S}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((m, S) => (S instanceof r && (m[S.str] = (m[S.str] || 0) + 1), m), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(_, ...u) {
      const m = [_[0]];
      let S = 0;
      for (; S < u.length; )
        i(m, u[S]), m.push(_[++S]);
      return new n(m);
    }
    e._ = o;
    const s = new n("+");
    function a(_, ...u) {
      const m = [v(_[0])];
      let S = 0;
      for (; S < u.length; )
        m.push(s), i(m, u[S]), m.push(s, v(_[++S]));
      return c(m), new n(m);
    }
    e.str = a;
    function i(_, u) {
      u instanceof n ? _.push(...u._items) : u instanceof r ? _.push(u) : _.push(g(u));
    }
    e.addCodeArg = i;
    function c(_) {
      let u = 1;
      for (; u < _.length - 1; ) {
        if (_[u] === s) {
          const m = d(_[u - 1], _[u + 1]);
          if (m !== void 0) {
            _.splice(u - 1, 3, m);
            continue;
          }
          _[u++] = "+";
        }
        u++;
      }
    }
    function d(_, u) {
      if (u === '""')
        return _;
      if (_ === '""')
        return u;
      if (typeof _ == "string")
        return u instanceof r || _[_.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${_.slice(0, -1)}${u}"` : u[0] === '"' ? _.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(_ instanceof r))
        return `"${_}${u.slice(1)}`;
    }
    function l(_, u) {
      return u.emptyStr() ? _ : _.emptyStr() ? u : a`${_}${u}`;
    }
    e.strConcat = l;
    function g(_) {
      return typeof _ == "number" || typeof _ == "boolean" || _ === null ? _ : v(Array.isArray(_) ? _.join(",") : _);
    }
    function $(_) {
      return new n(v(_));
    }
    e.stringify = $;
    function v(_) {
      return JSON.stringify(_).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function w(_) {
      return typeof _ == "string" && e.IDENTIFIER.test(_) ? new n(`.${_}`) : o`[${_}]`;
    }
    e.getProperty = w;
    function b(_) {
      if (typeof _ == "string" && e.IDENTIFIER.test(_))
        return new n(`${_}`);
      throw new Error(`CodeGen: invalid export name: ${_}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function h(_) {
      return new n(_.toString());
    }
    e.regexpCode = h;
  }(fs)), fs;
}
var hs = {}, hc;
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
        var l, g;
        if (!((g = (l = this._parent) === null || l === void 0 ? void 0 : l._prefixes) === null || g === void 0) && g.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(d, l) {
        super(l), this.prefix = d;
      }
      setValue(d, { property: l, itemIndex: g }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(l)}[${g}]`;
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
        var g;
        if (l.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const $ = this.toName(d), { prefix: v } = $, w = (g = l.key) !== null && g !== void 0 ? g : l.ref;
        let b = this._values[v];
        if (b) {
          const u = b.get(w);
          if (u)
            return u;
        } else
          b = this._values[v] = /* @__PURE__ */ new Map();
        b.set(w, $);
        const h = this._scope[v] || (this._scope[v] = []), _ = h.length;
        return h[_] = l.ref, $.setValue(l, { property: v, itemIndex: _ }), $;
      }
      getValue(d, l) {
        const g = this._values[d];
        if (g)
          return g.get(l);
      }
      scopeRefs(d, l = this._values) {
        return this._reduceValues(l, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${d}${g.scopePath}`;
        });
      }
      scopeCode(d = this._values, l, g) {
        return this._reduceValues(d, ($) => {
          if ($.value === void 0)
            throw new Error(`CodeGen: name "${$}" has no value`);
          return $.value.code;
        }, l, g);
      }
      _reduceValues(d, l, g = {}, $) {
        let v = t.nil;
        for (const w in d) {
          const b = d[w];
          if (!b)
            continue;
          const h = g[w] = g[w] || /* @__PURE__ */ new Map();
          b.forEach((_) => {
            if (h.has(_))
              return;
            h.set(_, n.Started);
            let u = l(_);
            if (u) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${m} ${_} = ${u};${this.opts._n}`;
            } else if (u = $ == null ? void 0 : $(_))
              v = (0, t._)`${v}${u}${this.opts._n}`;
            else
              throw new r(_);
            h.set(_, n.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = i;
  }(hs)), hs;
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
      optimizeNames(f, E) {
        return this;
      }
    }
    class a extends s {
      constructor(f, E, C) {
        super(), this.varKind = f, this.name = E, this.rhs = C;
      }
      render({ es5: f, _n: E }) {
        const C = f ? r.varKinds.var : this.varKind, V = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${C} ${this.name}${V};` + E;
      }
      optimizeNames(f, E) {
        if (f[this.name.str])
          return this.rhs && (this.rhs = x(this.rhs, f, E)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor(f, E, C) {
        super(), this.lhs = f, this.rhs = E, this.sideEffects = C;
      }
      render({ _n: f }) {
        return `${this.lhs} = ${this.rhs};` + f;
      }
      optimizeNames(f, E) {
        if (!(this.lhs instanceof t.Name && !f[this.lhs.str] && !this.sideEffects))
          return this.rhs = x(this.rhs, f, E), this;
      }
      get names() {
        const f = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return Z(f, this.rhs);
      }
    }
    class c extends i {
      constructor(f, E, C, V) {
        super(f, C, V), this.op = E;
      }
      render({ _n: f }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + f;
      }
    }
    class d extends s {
      constructor(f) {
        super(), this.label = f, this.names = {};
      }
      render({ _n: f }) {
        return `${this.label}:` + f;
      }
    }
    class l extends s {
      constructor(f) {
        super(), this.label = f, this.names = {};
      }
      render({ _n: f }) {
        return `break${this.label ? ` ${this.label}` : ""};` + f;
      }
    }
    class g extends s {
      constructor(f) {
        super(), this.error = f;
      }
      render({ _n: f }) {
        return `throw ${this.error};` + f;
      }
      get names() {
        return this.error.names;
      }
    }
    class $ extends s {
      constructor(f) {
        super(), this.code = f;
      }
      render({ _n: f }) {
        return `${this.code};` + f;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(f, E) {
        return this.code = x(this.code, f, E), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends s {
      constructor(f = []) {
        super(), this.nodes = f;
      }
      render(f) {
        return this.nodes.reduce((E, C) => E + C.render(f), "");
      }
      optimizeNodes() {
        const { nodes: f } = this;
        let E = f.length;
        for (; E--; ) {
          const C = f[E].optimizeNodes();
          Array.isArray(C) ? f.splice(E, 1, ...C) : C ? f[E] = C : f.splice(E, 1);
        }
        return f.length > 0 ? this : void 0;
      }
      optimizeNames(f, E) {
        const { nodes: C } = this;
        let V = C.length;
        for (; V--; ) {
          const H = C[V];
          H.optimizeNames(f, E) || (te(f, H.names), C.splice(V, 1));
        }
        return C.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((f, E) => F(f, E.names), {});
      }
    }
    class w extends v {
      render(f) {
        return "{" + f._n + super.render(f) + "}" + f._n;
      }
    }
    class b extends v {
    }
    class h extends w {
    }
    h.kind = "else";
    class _ extends w {
      constructor(f, E) {
        super(E), this.condition = f;
      }
      render(f) {
        let E = `if(${this.condition})` + super.render(f);
        return this.else && (E += "else " + this.else.render(f)), E;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const f = this.condition;
        if (f === !0)
          return this.nodes;
        let E = this.else;
        if (E) {
          const C = E.optimizeNodes();
          E = this.else = Array.isArray(C) ? new h(C) : C;
        }
        if (E)
          return f === !1 ? E instanceof _ ? E : E.nodes : this.nodes.length ? this : new _(_e(f), E instanceof _ ? [E] : E.nodes);
        if (!(f === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(f, E) {
        var C;
        if (this.else = (C = this.else) === null || C === void 0 ? void 0 : C.optimizeNames(f, E), !!(super.optimizeNames(f, E) || this.else))
          return this.condition = x(this.condition, f, E), this;
      }
      get names() {
        const f = super.names;
        return Z(f, this.condition), this.else && F(f, this.else.names), f;
      }
    }
    _.kind = "if";
    class u extends w {
    }
    u.kind = "for";
    class m extends u {
      constructor(f) {
        super(), this.iteration = f;
      }
      render(f) {
        return `for(${this.iteration})` + super.render(f);
      }
      optimizeNames(f, E) {
        if (super.optimizeNames(f, E))
          return this.iteration = x(this.iteration, f, E), this;
      }
      get names() {
        return F(super.names, this.iteration.names);
      }
    }
    class S extends u {
      constructor(f, E, C, V) {
        super(), this.varKind = f, this.name = E, this.from = C, this.to = V;
      }
      render(f) {
        const E = f.es5 ? r.varKinds.var : this.varKind, { name: C, from: V, to: H } = this;
        return `for(${E} ${C}=${V}; ${C}<${H}; ${C}++)` + super.render(f);
      }
      get names() {
        const f = Z(super.names, this.from);
        return Z(f, this.to);
      }
    }
    class p extends u {
      constructor(f, E, C, V) {
        super(), this.loop = f, this.varKind = E, this.name = C, this.iterable = V;
      }
      render(f) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(f);
      }
      optimizeNames(f, E) {
        if (super.optimizeNames(f, E))
          return this.iterable = x(this.iterable, f, E), this;
      }
      get names() {
        return F(super.names, this.iterable.names);
      }
    }
    class y extends w {
      constructor(f, E, C) {
        super(), this.name = f, this.args = E, this.async = C;
      }
      render(f) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(f);
      }
    }
    y.kind = "func";
    class k extends v {
      render(f) {
        return "return " + super.render(f);
      }
    }
    k.kind = "return";
    class I extends w {
      render(f) {
        let E = "try" + super.render(f);
        return this.catch && (E += this.catch.render(f)), this.finally && (E += this.finally.render(f)), E;
      }
      optimizeNodes() {
        var f, E;
        return super.optimizeNodes(), (f = this.catch) === null || f === void 0 || f.optimizeNodes(), (E = this.finally) === null || E === void 0 || E.optimizeNodes(), this;
      }
      optimizeNames(f, E) {
        var C, V;
        return super.optimizeNames(f, E), (C = this.catch) === null || C === void 0 || C.optimizeNames(f, E), (V = this.finally) === null || V === void 0 || V.optimizeNames(f, E), this;
      }
      get names() {
        const f = super.names;
        return this.catch && F(f, this.catch.names), this.finally && F(f, this.finally.names), f;
      }
    }
    class z extends w {
      constructor(f) {
        super(), this.error = f;
      }
      render(f) {
        return `catch(${this.error})` + super.render(f);
      }
    }
    z.kind = "catch";
    class U extends w {
      render(f) {
        return "finally" + super.render(f);
      }
    }
    U.kind = "finally";
    class M {
      constructor(f, E = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...E, _n: E.lines ? `
` : "" }, this._extScope = f, this._scope = new r.Scope({ parent: f }), this._nodes = [new b()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(f) {
        return this._scope.name(f);
      }
      // reserves unique name in the external scope
      scopeName(f) {
        return this._extScope.name(f);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(f, E) {
        const C = this._extScope.value(f, E);
        return (this._values[C.prefix] || (this._values[C.prefix] = /* @__PURE__ */ new Set())).add(C), C;
      }
      getScopeValue(f, E) {
        return this._extScope.getValue(f, E);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(f) {
        return this._extScope.scopeRefs(f, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(f, E, C, V) {
        const H = this._scope.toName(E);
        return C !== void 0 && V && (this._constants[H.str] = C), this._leafNode(new a(f, H, C)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const(f, E, C) {
        return this._def(r.varKinds.const, f, E, C);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(f, E, C) {
        return this._def(r.varKinds.let, f, E, C);
      }
      // `var` declaration with optional assignment
      var(f, E, C) {
        return this._def(r.varKinds.var, f, E, C);
      }
      // assignment code
      assign(f, E, C) {
        return this._leafNode(new i(f, E, C));
      }
      // `+=` code
      add(f, E) {
        return this._leafNode(new c(f, e.operators.ADD, E));
      }
      // appends passed SafeExpr to code or executes Block
      code(f) {
        return typeof f == "function" ? f() : f !== t.nil && this._leafNode(new $(f)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...f) {
        const E = ["{"];
        for (const [C, V] of f)
          E.length > 1 && E.push(","), E.push(C), (C !== V || this.opts.es5) && (E.push(":"), (0, t.addCodeArg)(E, V));
        return E.push("}"), new t._Code(E);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(f, E, C) {
        if (this._blockNode(new _(f)), E && C)
          this.code(E).else().code(C).endIf();
        else if (E)
          this.code(E).endIf();
        else if (C)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(f) {
        return this._elseNode(new _(f));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(_, h);
      }
      _for(f, E) {
        return this._blockNode(f), E && this.code(E).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(f, E) {
        return this._for(new m(f), E);
      }
      // `for` statement for a range of values
      forRange(f, E, C, V, H = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const Q = this._scope.toName(f);
        return this._for(new S(H, Q, E, C), () => V(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(f, E, C, V = r.varKinds.const) {
        const H = this._scope.toName(f);
        if (this.opts.es5) {
          const Q = E instanceof t.Name ? E : this.var("_arr", E);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (B) => {
            this.var(H, (0, t._)`${Q}[${B}]`), C(H);
          });
        }
        return this._for(new p("of", V, H, E), () => C(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(f, E, C, V = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(f, (0, t._)`Object.keys(${E})`, C);
        const H = this._scope.toName(f);
        return this._for(new p("in", V, H, E), () => C(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label(f) {
        return this._leafNode(new d(f));
      }
      // `break` statement
      break(f) {
        return this._leafNode(new l(f));
      }
      // `return` statement
      return(f) {
        const E = new k();
        if (this._blockNode(E), this.code(f), E.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(k);
      }
      // `try` statement
      try(f, E, C) {
        if (!E && !C)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const V = new I();
        if (this._blockNode(V), this.code(f), E) {
          const H = this.name("e");
          this._currNode = V.catch = new z(H), E(H);
        }
        return C && (this._currNode = V.finally = new U(), this.code(C)), this._endBlockNode(z, U);
      }
      // `throw` statement
      throw(f) {
        return this._leafNode(new g(f));
      }
      // start self-balancing block
      block(f, E) {
        return this._blockStarts.push(this._nodes.length), f && this.code(f).endBlock(E), this;
      }
      // end the current self-balancing block
      endBlock(f) {
        const E = this._blockStarts.pop();
        if (E === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const C = this._nodes.length - E;
        if (C < 0 || f !== void 0 && C !== f)
          throw new Error(`CodeGen: wrong number of nodes: ${C} vs ${f} expected`);
        return this._nodes.length = E, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(f, E = t.nil, C, V) {
        return this._blockNode(new y(f, E, C)), V && this.code(V).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(y);
      }
      optimize(f = 1) {
        for (; f-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(f) {
        return this._currNode.nodes.push(f), this;
      }
      _blockNode(f) {
        this._currNode.nodes.push(f), this._nodes.push(f);
      }
      _endBlockNode(f, E) {
        const C = this._currNode;
        if (C instanceof f || E && C instanceof E)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${E ? `${f.kind}/${E.kind}` : f.kind}"`);
      }
      _elseNode(f) {
        const E = this._currNode;
        if (!(E instanceof _))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = E.else = f, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const f = this._nodes;
        return f[f.length - 1];
      }
      set _currNode(f) {
        const E = this._nodes;
        E[E.length - 1] = f;
      }
    }
    e.CodeGen = M;
    function F(O, f) {
      for (const E in f)
        O[E] = (O[E] || 0) + (f[E] || 0);
      return O;
    }
    function Z(O, f) {
      return f instanceof t._CodeOrName ? F(O, f.names) : O;
    }
    function x(O, f, E) {
      if (O instanceof t.Name)
        return C(O);
      if (!V(O))
        return O;
      return new t._Code(O._items.reduce((H, Q) => (Q instanceof t.Name && (Q = C(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function C(H) {
        const Q = E[H.str];
        return Q === void 0 || f[H.str] !== 1 ? H : (delete f[H.str], Q);
      }
      function V(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && f[Q.str] === 1 && E[Q.str] !== void 0);
      }
    }
    function te(O, f) {
      for (const E in f)
        O[E] = (O[E] || 0) - (f[E] || 0);
    }
    function _e(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${q(O)}`;
    }
    e.not = _e;
    const we = T(e.operators.AND);
    function ee(...O) {
      return O.reduce(we);
    }
    e.and = ee;
    const qe = T(e.operators.OR);
    function A(...O) {
      return O.reduce(qe);
    }
    e.or = A;
    function T(O) {
      return (f, E) => f === t.nil ? E : E === t.nil ? f : (0, t._)`${q(f)} ${O} ${q(E)}`;
    }
    function q(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  }(ds)), ds;
}
var se = {}, _c;
function fe() {
  if (_c) return se;
  _c = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.checkStrictMode = se.getErrorPath = se.Type = se.useFunc = se.setEvaluated = se.evaluatedPropsToName = se.mergeEvaluated = se.eachItem = se.unescapeJsonPointer = se.escapeJsonPointer = se.escapeFragment = se.unescapeFragment = se.schemaRefOrVal = se.schemaHasRulesButRef = se.schemaHasRules = se.checkUnknownRules = se.alwaysValidSchema = se.toHash = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ go();
  function r(p) {
    const y = {};
    for (const k of p)
      y[k] = !0;
    return y;
  }
  se.toHash = r;
  function n(p, y) {
    return typeof y == "boolean" ? y : Object.keys(y).length === 0 ? !0 : (o(p, y), !s(y, p.self.RULES.all));
  }
  se.alwaysValidSchema = n;
  function o(p, y = p.schema) {
    const { opts: k, self: I } = p;
    if (!k.strictSchema || typeof y == "boolean")
      return;
    const z = I.RULES.keywords;
    for (const U in y)
      z[U] || S(p, `unknown keyword: "${U}"`);
  }
  se.checkUnknownRules = o;
  function s(p, y) {
    if (typeof p == "boolean")
      return !p;
    for (const k in p)
      if (y[k])
        return !0;
    return !1;
  }
  se.schemaHasRules = s;
  function a(p, y) {
    if (typeof p == "boolean")
      return !p;
    for (const k in p)
      if (k !== "$ref" && y.all[k])
        return !0;
    return !1;
  }
  se.schemaHasRulesButRef = a;
  function i({ topSchemaRef: p, schemaPath: y }, k, I, z) {
    if (!z) {
      if (typeof k == "number" || typeof k == "boolean")
        return k;
      if (typeof k == "string")
        return (0, e._)`${k}`;
    }
    return (0, e._)`${p}${y}${(0, e.getProperty)(I)}`;
  }
  se.schemaRefOrVal = i;
  function c(p) {
    return g(decodeURIComponent(p));
  }
  se.unescapeFragment = c;
  function d(p) {
    return encodeURIComponent(l(p));
  }
  se.escapeFragment = d;
  function l(p) {
    return typeof p == "number" ? `${p}` : p.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  se.escapeJsonPointer = l;
  function g(p) {
    return p.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  se.unescapeJsonPointer = g;
  function $(p, y) {
    if (Array.isArray(p))
      for (const k of p)
        y(k);
    else
      y(p);
  }
  se.eachItem = $;
  function v({ mergeNames: p, mergeToName: y, mergeValues: k, resultToName: I }) {
    return (z, U, M, F) => {
      const Z = M === void 0 ? U : M instanceof e.Name ? (U instanceof e.Name ? p(z, U, M) : y(z, U, M), M) : U instanceof e.Name ? (y(z, M, U), U) : k(U, M);
      return F === e.Name && !(Z instanceof e.Name) ? I(z, Z) : Z;
    };
  }
  se.mergeEvaluated = {
    props: v({
      mergeNames: (p, y, k) => p.if((0, e._)`${k} !== true && ${y} !== undefined`, () => {
        p.if((0, e._)`${y} === true`, () => p.assign(k, !0), () => p.assign(k, (0, e._)`${k} || {}`).code((0, e._)`Object.assign(${k}, ${y})`));
      }),
      mergeToName: (p, y, k) => p.if((0, e._)`${k} !== true`, () => {
        y === !0 ? p.assign(k, !0) : (p.assign(k, (0, e._)`${k} || {}`), b(p, k, y));
      }),
      mergeValues: (p, y) => p === !0 ? !0 : { ...p, ...y },
      resultToName: w
    }),
    items: v({
      mergeNames: (p, y, k) => p.if((0, e._)`${k} !== true && ${y} !== undefined`, () => p.assign(k, (0, e._)`${y} === true ? true : ${k} > ${y} ? ${k} : ${y}`)),
      mergeToName: (p, y, k) => p.if((0, e._)`${k} !== true`, () => p.assign(k, y === !0 ? !0 : (0, e._)`${k} > ${y} ? ${k} : ${y}`)),
      mergeValues: (p, y) => p === !0 ? !0 : Math.max(p, y),
      resultToName: (p, y) => p.var("items", y)
    })
  };
  function w(p, y) {
    if (y === !0)
      return p.var("props", !0);
    const k = p.var("props", (0, e._)`{}`);
    return y !== void 0 && b(p, k, y), k;
  }
  se.evaluatedPropsToName = w;
  function b(p, y, k) {
    Object.keys(k).forEach((I) => p.assign((0, e._)`${y}${(0, e.getProperty)(I)}`, !0));
  }
  se.setEvaluated = b;
  const h = {};
  function _(p, y) {
    return p.scopeValue("func", {
      ref: y,
      code: h[y.code] || (h[y.code] = new t._Code(y.code))
    });
  }
  se.useFunc = _;
  var u;
  (function(p) {
    p[p.Num = 0] = "Num", p[p.Str = 1] = "Str";
  })(u || (se.Type = u = {}));
  function m(p, y, k) {
    if (p instanceof e.Name) {
      const I = y === u.Num;
      return k ? I ? (0, e._)`"[" + ${p} + "]"` : (0, e._)`"['" + ${p} + "']"` : I ? (0, e._)`"/" + ${p}` : (0, e._)`"/" + ${p}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return k ? (0, e.getProperty)(p).toString() : "/" + l(p);
  }
  se.getErrorPath = m;
  function S(p, y, k = p.opts.strictSchema) {
    if (k) {
      if (y = `strict mode: ${y}`, k === !0)
        throw new Error(y);
      p.self.logger.warn(y);
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
function Fo() {
  return gc || (gc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ Ot();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: _ }) => _ ? (0, t.str)`"${h}" keyword must be ${_} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function o(h, _ = e.keywordError, u, m) {
      const { it: S } = h, { gen: p, compositeRule: y, allErrors: k } = S, I = g(h, _, u);
      m ?? (y || k) ? c(p, I) : d(S, (0, t._)`[${I}]`);
    }
    e.reportError = o;
    function s(h, _ = e.keywordError, u) {
      const { it: m } = h, { gen: S, compositeRule: p, allErrors: y } = m, k = g(h, _, u);
      c(S, k), p || y || d(m, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(h, _) {
      h.assign(n.default.errors, _), h.if((0, t._)`${n.default.vErrors} !== null`, () => h.if(_, () => h.assign((0, t._)`${n.default.vErrors}.length`, _), () => h.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: h, keyword: _, schemaValue: u, data: m, errsCount: S, it: p }) {
      if (S === void 0)
        throw new Error("ajv implementation error");
      const y = h.name("err");
      h.forRange("i", S, n.default.errors, (k) => {
        h.const(y, (0, t._)`${n.default.vErrors}[${k}]`), h.if((0, t._)`${y}.instancePath === undefined`, () => h.assign((0, t._)`${y}.instancePath`, (0, t.strConcat)(n.default.instancePath, p.errorPath))), h.assign((0, t._)`${y}.schemaPath`, (0, t.str)`${p.errSchemaPath}/${_}`), p.opts.verbose && (h.assign((0, t._)`${y}.schema`, u), h.assign((0, t._)`${y}.data`, m));
      });
    }
    e.extendErrors = i;
    function c(h, _) {
      const u = h.const("err", _);
      h.if((0, t._)`${n.default.vErrors} === null`, () => h.assign(n.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${n.default.vErrors}.push(${u})`), h.code((0, t._)`${n.default.errors}++`);
    }
    function d(h, _) {
      const { gen: u, validateName: m, schemaEnv: S } = h;
      S.$async ? u.throw((0, t._)`new ${h.ValidationError}(${_})`) : (u.assign((0, t._)`${m}.errors`, _), u.return(!1));
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
    function g(h, _, u) {
      const { createErrors: m } = h.it;
      return m === !1 ? (0, t._)`{}` : $(h, _, u);
    }
    function $(h, _, u = {}) {
      const { gen: m, it: S } = h, p = [
        v(S, u),
        w(h, u)
      ];
      return b(h, _, p), m.object(...p);
    }
    function v({ errorPath: h }, { instancePath: _ }) {
      const u = _ ? (0, t.str)`${h}${(0, r.getErrorPath)(_, r.Type.Str)}` : h;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, u)];
    }
    function w({ keyword: h, it: { errSchemaPath: _ } }, { schemaPath: u, parentSchema: m }) {
      let S = m ? _ : (0, t.str)`${_}/${h}`;
      return u && (S = (0, t.str)`${S}${(0, r.getErrorPath)(u, r.Type.Str)}`), [l.schemaPath, S];
    }
    function b(h, { params: _, message: u }, m) {
      const { keyword: S, data: p, schemaValue: y, it: k } = h, { opts: I, propertyName: z, topSchemaRef: U, schemaPath: M } = k;
      m.push([l.keyword, S], [l.params, typeof _ == "function" ? _(h) : _ || (0, t._)`{}`]), I.messages && m.push([l.message, typeof u == "function" ? u(h) : u]), I.verbose && m.push([l.schema, y], [l.parentSchema, (0, t._)`${U}${M}`], [n.default.data, p]), z && m.push([l.propertyName, z]);
    }
  }(ls)), ls;
}
var vc;
function kv() {
  if (vc) return At;
  vc = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.boolOrEmptySchema = At.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ Fo(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Ot(), n = {
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
    const { gen: d, data: l } = i, g = {
      gen: d,
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
  return At;
}
var Le = {}, Dt = {}, $c;
function ed() {
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
function td() {
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
  if (bc) return Le;
  bc = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.reportTypeError = Le.checkDataTypes = Le.checkDataType = Le.coerceAndCheckDataType = Le.getJSONTypes = Le.getSchemaTypes = Le.DataType = void 0;
  const e = /* @__PURE__ */ ed(), t = /* @__PURE__ */ td(), r = /* @__PURE__ */ Fo(), n = /* @__PURE__ */ ae(), o = /* @__PURE__ */ fe();
  var s;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(s || (Le.DataType = s = {}));
  function a(u) {
    const m = i(u.type);
    if (m.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!m.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && m.push("null");
    }
    return m;
  }
  Le.getSchemaTypes = a;
  function i(u) {
    const m = Array.isArray(u) ? u : u ? [u] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  Le.getJSONTypes = i;
  function c(u, m) {
    const { gen: S, data: p, opts: y } = u, k = l(m, y.coerceTypes), I = m.length > 0 && !(k.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(u, m[0]));
    if (I) {
      const z = w(m, p, y.strictNumbers, s.Wrong);
      S.if(z, () => {
        k.length ? g(u, m, k) : h(u);
      });
    }
    return I;
  }
  Le.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function l(u, m) {
    return m ? u.filter((S) => d.has(S) || m === "array" && S === "array") : [];
  }
  function g(u, m, S) {
    const { gen: p, data: y, opts: k } = u, I = p.let("dataType", (0, n._)`typeof ${y}`), z = p.let("coerced", (0, n._)`undefined`);
    k.coerceTypes === "array" && p.if((0, n._)`${I} == 'object' && Array.isArray(${y}) && ${y}.length == 1`, () => p.assign(y, (0, n._)`${y}[0]`).assign(I, (0, n._)`typeof ${y}`).if(w(m, y, k.strictNumbers), () => p.assign(z, y))), p.if((0, n._)`${z} !== undefined`);
    for (const M of S)
      (d.has(M) || M === "array" && k.coerceTypes === "array") && U(M);
    p.else(), h(u), p.endIf(), p.if((0, n._)`${z} !== undefined`, () => {
      p.assign(y, z), $(u, z);
    });
    function U(M) {
      switch (M) {
        case "string":
          p.elseIf((0, n._)`${I} == "number" || ${I} == "boolean"`).assign(z, (0, n._)`"" + ${y}`).elseIf((0, n._)`${y} === null`).assign(z, (0, n._)`""`);
          return;
        case "number":
          p.elseIf((0, n._)`${I} == "boolean" || ${y} === null
              || (${I} == "string" && ${y} && ${y} == +${y})`).assign(z, (0, n._)`+${y}`);
          return;
        case "integer":
          p.elseIf((0, n._)`${I} === "boolean" || ${y} === null
              || (${I} === "string" && ${y} && ${y} == +${y} && !(${y} % 1))`).assign(z, (0, n._)`+${y}`);
          return;
        case "boolean":
          p.elseIf((0, n._)`${y} === "false" || ${y} === 0 || ${y} === null`).assign(z, !1).elseIf((0, n._)`${y} === "true" || ${y} === 1`).assign(z, !0);
          return;
        case "null":
          p.elseIf((0, n._)`${y} === "" || ${y} === 0 || ${y} === false`), p.assign(z, null);
          return;
        case "array":
          p.elseIf((0, n._)`${I} === "string" || ${I} === "number"
              || ${I} === "boolean" || ${y} === null`).assign(z, (0, n._)`[${y}]`);
      }
    }
  }
  function $({ gen: u, parentData: m, parentDataProperty: S }, p) {
    u.if((0, n._)`${m} !== undefined`, () => u.assign((0, n._)`${m}[${S}]`, p));
  }
  function v(u, m, S, p = s.Correct) {
    const y = p === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let k;
    switch (u) {
      case "null":
        return (0, n._)`${m} ${y} null`;
      case "array":
        k = (0, n._)`Array.isArray(${m})`;
        break;
      case "object":
        k = (0, n._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        k = I((0, n._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        k = I();
        break;
      default:
        return (0, n._)`typeof ${m} ${y} ${u}`;
    }
    return p === s.Correct ? k : (0, n.not)(k);
    function I(z = n.nil) {
      return (0, n.and)((0, n._)`typeof ${m} == "number"`, z, S ? (0, n._)`isFinite(${m})` : n.nil);
    }
  }
  Le.checkDataType = v;
  function w(u, m, S, p) {
    if (u.length === 1)
      return v(u[0], m, S, p);
    let y;
    const k = (0, o.toHash)(u);
    if (k.array && k.object) {
      const I = (0, n._)`typeof ${m} != "object"`;
      y = k.null ? I : (0, n._)`!${m} || ${I}`, delete k.null, delete k.array, delete k.object;
    } else
      y = n.nil;
    k.number && delete k.integer;
    for (const I in k)
      y = (0, n.and)(y, v(I, m, S, p));
    return y;
  }
  Le.checkDataTypes = w;
  const b = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: m }) => typeof u == "string" ? (0, n._)`{type: ${u}}` : (0, n._)`{type: ${m}}`
  };
  function h(u) {
    const m = _(u);
    (0, r.reportError)(m, b);
  }
  Le.reportTypeError = h;
  function _(u) {
    const { gen: m, data: S, schema: p } = u, y = (0, o.schemaRefOrVal)(u, p, "type");
    return {
      gen: m,
      keyword: "type",
      data: S,
      schema: p.type,
      schemaCode: y,
      schemaValue: y,
      parentSchema: p,
      params: {},
      it: u
    };
  }
  return Le;
}
var mr = {}, Sc;
function Pv() {
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
    const g = (0, e._)`${d}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${g}`);
      return;
    }
    let $ = (0, e._)`${g} === undefined`;
    l.useDefaults === "empty" && ($ = (0, e._)`${$} || ${g} === null || ${g} === ""`), i.if($, (0, e._)`${g} = ${(0, e.stringify)(a)}`);
  }
  return mr;
}
var ct = {}, $e = {}, Ec;
function ft() {
  if (Ec) return $e;
  Ec = 1, Object.defineProperty($e, "__esModule", { value: !0 }), $e.validateUnion = $e.validateArray = $e.usePattern = $e.callValidateCode = $e.schemaProperties = $e.allSchemaProperties = $e.noPropertyInData = $e.propertyInData = $e.isOwnProperty = $e.hasPropFunc = $e.reportMissingProp = $e.checkMissingProp = $e.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ fe();
  function o(u, m) {
    const { gen: S, data: p, it: y } = u;
    S.if(l(S, p, m, y.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${m}` }, !0), u.error();
    });
  }
  $e.checkReportMissingProp = o;
  function s({ gen: u, data: m, it: { opts: S } }, p, y) {
    return (0, e.or)(...p.map((k) => (0, e.and)(l(u, m, k, S.ownProperties), (0, e._)`${y} = ${k}`)));
  }
  $e.checkMissingProp = s;
  function a(u, m) {
    u.setParams({ missingProperty: m }, !0), u.error();
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
  function c(u, m, S) {
    return (0, e._)`${i(u)}.call(${m}, ${S})`;
  }
  $e.isOwnProperty = c;
  function d(u, m, S, p) {
    const y = (0, e._)`${m}${(0, e.getProperty)(S)} !== undefined`;
    return p ? (0, e._)`${y} && ${c(u, m, S)}` : y;
  }
  $e.propertyInData = d;
  function l(u, m, S, p) {
    const y = (0, e._)`${m}${(0, e.getProperty)(S)} === undefined`;
    return p ? (0, e.or)(y, (0, e.not)(c(u, m, S))) : y;
  }
  $e.noPropertyInData = l;
  function g(u) {
    return u ? Object.keys(u).filter((m) => m !== "__proto__") : [];
  }
  $e.allSchemaProperties = g;
  function $(u, m) {
    return g(m).filter((S) => !(0, t.alwaysValidSchema)(u, m[S]));
  }
  $e.schemaProperties = $;
  function v({ schemaCode: u, data: m, it: { gen: S, topSchemaRef: p, schemaPath: y, errorPath: k }, it: I }, z, U, M) {
    const F = M ? (0, e._)`${u}, ${m}, ${p}${y}` : m, Z = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, k)],
      [r.default.parentData, I.parentData],
      [r.default.parentDataProperty, I.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    I.opts.dynamicRef && Z.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const x = (0, e._)`${F}, ${S.object(...Z)}`;
    return U !== e.nil ? (0, e._)`${z}.call(${U}, ${x})` : (0, e._)`${z}(${x})`;
  }
  $e.callValidateCode = v;
  const w = (0, e._)`new RegExp`;
  function b({ gen: u, it: { opts: m } }, S) {
    const p = m.unicodeRegExp ? "u" : "", { regExp: y } = m.code, k = y(S, p);
    return u.scopeValue("pattern", {
      key: k.toString(),
      ref: k,
      code: (0, e._)`${y.code === "new RegExp" ? w : (0, n.useFunc)(u, y)}(${S}, ${p})`
    });
  }
  $e.usePattern = b;
  function h(u) {
    const { gen: m, data: S, keyword: p, it: y } = u, k = m.name("valid");
    if (y.allErrors) {
      const z = m.let("valid", !0);
      return I(() => m.assign(z, !1)), z;
    }
    return m.var(k, !0), I(() => m.break()), k;
    function I(z) {
      const U = m.const("len", (0, e._)`${S}.length`);
      m.forRange("i", 0, U, (M) => {
        u.subschema({
          keyword: p,
          dataProp: M,
          dataPropType: t.Type.Num
        }, k), m.if((0, e.not)(k), z);
      });
    }
  }
  $e.validateArray = h;
  function _(u) {
    const { gen: m, schema: S, keyword: p, it: y } = u;
    if (!Array.isArray(S))
      throw new Error("ajv implementation error");
    if (S.some((U) => (0, t.alwaysValidSchema)(y, U)) && !y.opts.unevaluated)
      return;
    const I = m.let("valid", !1), z = m.name("_valid");
    m.block(() => S.forEach((U, M) => {
      const F = u.subschema({
        keyword: p,
        schemaProp: M,
        compositeRule: !0
      }, z);
      m.assign(I, (0, e._)`${I} || ${z}`), u.mergeValidEvaluated(F, z) || m.if((0, e.not)(I));
    })), u.result(I, () => u.reset(), () => u.error(!0));
  }
  return $e.validateUnion = _, $e;
}
var kc;
function Tv() {
  if (kc) return ct;
  kc = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.validateKeywordUsage = ct.validSchemaType = ct.funcKeywordCode = ct.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ Ot(), r = /* @__PURE__ */ ft(), n = /* @__PURE__ */ Fo();
  function o($, v) {
    const { gen: w, keyword: b, schema: h, parentSchema: _, it: u } = $, m = v.macro.call(u.self, h, _, u), S = d(w, b, m);
    u.opts.validateSchema !== !1 && u.self.validateSchema(m, !0);
    const p = w.name("valid");
    $.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${b}`,
      topSchemaRef: S,
      compositeRule: !0
    }, p), $.pass(p, () => $.error(!0));
  }
  ct.macroKeywordCode = o;
  function s($, v) {
    var w;
    const { gen: b, keyword: h, schema: _, parentSchema: u, $data: m, it: S } = $;
    c(S, v);
    const p = !m && v.compile ? v.compile.call(S.self, _, u, S) : v.validate, y = d(b, h, p), k = b.let("valid");
    $.block$data(k, I), $.ok((w = v.valid) !== null && w !== void 0 ? w : k);
    function I() {
      if (v.errors === !1)
        M(), v.modifying && a($), F(() => $.error());
      else {
        const Z = v.async ? z() : U();
        v.modifying && a($), F(() => i($, Z));
      }
    }
    function z() {
      const Z = b.let("ruleErrs", null);
      return b.try(() => M((0, e._)`await `), (x) => b.assign(k, !1).if((0, e._)`${x} instanceof ${S.ValidationError}`, () => b.assign(Z, (0, e._)`${x}.errors`), () => b.throw(x))), Z;
    }
    function U() {
      const Z = (0, e._)`${y}.errors`;
      return b.assign(Z, null), M(e.nil), Z;
    }
    function M(Z = v.async ? (0, e._)`await ` : e.nil) {
      const x = S.opts.passContext ? t.default.this : t.default.self, te = !("compile" in v && !m || v.schema === !1);
      b.assign(k, (0, e._)`${Z}${(0, r.callValidateCode)($, y, x, te)}`, v.modifying);
    }
    function F(Z) {
      var x;
      b.if((0, e.not)((x = v.valid) !== null && x !== void 0 ? x : k), Z);
    }
  }
  ct.funcKeywordCode = s;
  function a($) {
    const { gen: v, data: w, it: b } = $;
    v.if(b.parentData, () => v.assign(w, (0, e._)`${b.parentData}[${b.parentDataProperty}]`));
  }
  function i($, v) {
    const { gen: w } = $;
    w.if((0, e._)`Array.isArray(${v})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)($);
    }, () => $.error());
  }
  function c({ schemaEnv: $ }, v) {
    if (v.async && !$.$async)
      throw new Error("async keyword in sync schema");
  }
  function d($, v, w) {
    if (w === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return $.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function l($, v, w = !1) {
    return !v.length || v.some((b) => b === "array" ? Array.isArray($) : b === "object" ? $ && typeof $ == "object" && !Array.isArray($) : typeof $ == b || w && typeof $ > "u");
  }
  ct.validSchemaType = l;
  function g({ schema: $, opts: v, self: w, errSchemaPath: b }, h, _) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(_) : h.keyword !== _)
      throw new Error("ajv implementation error");
    const u = h.dependencies;
    if (u != null && u.some((m) => !Object.prototype.hasOwnProperty.call($, m)))
      throw new Error(`parent schema must have dependencies of ${_}: ${u.join(",")}`);
    if (h.validateSchema && !h.validateSchema($[_])) {
      const S = `keyword "${_}" value is invalid at path "${b}": ` + w.errorsText(h.validateSchema.errors);
      if (v.validateSchema === "log")
        w.logger.error(S);
      else
        throw new Error(S);
    }
  }
  return ct.validateKeywordUsage = g, ct;
}
var gt = {}, Pc;
function Rv() {
  if (Pc) return gt;
  Pc = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.extendSubschemaMode = gt.extendSubschemaData = gt.getSubschema = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe();
  function r(s, { keyword: a, schemaProp: i, schema: c, schemaPath: d, errSchemaPath: l, topSchemaRef: g }) {
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
      if (d === void 0 || l === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: g,
        errSchemaPath: l
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  gt.getSubschema = r;
  function n(s, a, { dataProp: i, dataPropType: c, data: d, dataTypes: l, propertyName: g }) {
    if (d !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: $ } = a;
    if (i !== void 0) {
      const { errorPath: w, dataPathArr: b, opts: h } = a, _ = $.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      v(_), s.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(i, c, h.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [...b, s.parentDataProperty];
    }
    if (d !== void 0) {
      const w = d instanceof e.Name ? d : $.let("data", d, !0);
      v(w), g !== void 0 && (s.propertyName = g);
    }
    l && (s.dataTypes = l);
    function v(w) {
      s.data = w, s.dataLevel = a.dataLevel + 1, s.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), s.parentData = a.data, s.dataNames = [...a.dataNames, w];
    }
  }
  gt.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: d, allErrors: l }) {
    c !== void 0 && (s.compositeRule = c), d !== void 0 && (s.createErrors = d), l !== void 0 && (s.allErrors = l), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return gt.extendSubschemaMode = o, gt;
}
var Je = {}, ps = { exports: {} }, Tc;
function Ov() {
  if (Tc) return ps.exports;
  Tc = 1;
  var e = ps.exports = function(n, o, s) {
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
  function t(n, o, s, a, i, c, d, l, g, $) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      o(a, i, c, d, l, g, $);
      for (var v in a) {
        var w = a[v];
        if (Array.isArray(w)) {
          if (v in e.arrayKeywords)
            for (var b = 0; b < w.length; b++)
              t(n, o, s, w[b], i + "/" + v + "/" + b, c, i, v, a, b);
        } else if (v in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var h in w)
              t(n, o, s, w[h], i + "/" + v + "/" + r(h), c, i, v, a, h);
        } else (v in e.keywords || n.allKeys && !(v in e.skipKeywords)) && t(n, o, s, w, i + "/" + v, c, i, v, a);
      }
      s(a, i, c, d, l, g, $);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ps.exports;
}
var Rc;
function Zo() {
  if (Rc) return Je;
  Rc = 1, Object.defineProperty(Je, "__esModule", { value: !0 }), Je.getSchemaRefs = Je.resolveUrl = Je.normalizeId = Je._getFullPath = Je.getFullPath = Je.inlineRef = void 0;
  const e = /* @__PURE__ */ fe(), t = Do(), r = Ov(), n = /* @__PURE__ */ new Set([
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
  function o(b, h = !0) {
    return typeof b == "boolean" ? !0 : h === !0 ? !a(b) : h ? i(b) <= h : !1;
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
    for (const h in b) {
      if (s.has(h))
        return !0;
      const _ = b[h];
      if (Array.isArray(_) && _.some(a) || typeof _ == "object" && a(_))
        return !0;
    }
    return !1;
  }
  function i(b) {
    let h = 0;
    for (const _ in b) {
      if (_ === "$ref")
        return 1 / 0;
      if (h++, !n.has(_) && (typeof b[_] == "object" && (0, e.eachItem)(b[_], (u) => h += i(u)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function c(b, h = "", _) {
    _ !== !1 && (h = g(h));
    const u = b.parse(h);
    return d(b, u);
  }
  Je.getFullPath = c;
  function d(b, h) {
    return b.serialize(h).split("#")[0] + "#";
  }
  Je._getFullPath = d;
  const l = /#\/?$/;
  function g(b) {
    return b ? b.replace(l, "") : "";
  }
  Je.normalizeId = g;
  function $(b, h, _) {
    return _ = g(_), b.resolve(h, _);
  }
  Je.resolveUrl = $;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function w(b, h) {
    if (typeof b == "boolean")
      return {};
    const { schemaId: _, uriResolver: u } = this.opts, m = g(b[_] || h), S = { "": m }, p = c(u, m, !1), y = {}, k = /* @__PURE__ */ new Set();
    return r(b, { allKeys: !0 }, (U, M, F, Z) => {
      if (Z === void 0)
        return;
      const x = p + M;
      let te = S[Z];
      typeof U[_] == "string" && (te = _e.call(this, U[_])), we.call(this, U.$anchor), we.call(this, U.$dynamicAnchor), S[M] = te;
      function _e(ee) {
        const qe = this.opts.uriResolver.resolve;
        if (ee = g(te ? qe(te, ee) : ee), k.has(ee))
          throw z(ee);
        k.add(ee);
        let A = this.refs[ee];
        return typeof A == "string" && (A = this.refs[A]), typeof A == "object" ? I(U, A.schema, ee) : ee !== g(x) && (ee[0] === "#" ? (I(U, y[ee], ee), y[ee] = U) : this.refs[ee] = x), ee;
      }
      function we(ee) {
        if (typeof ee == "string") {
          if (!v.test(ee))
            throw new Error(`invalid anchor "${ee}"`);
          _e.call(this, `#${ee}`);
        }
      }
    }), y;
    function I(U, M, F) {
      if (M !== void 0 && !t(U, M))
        throw z(F);
    }
    function z(U) {
      return new Error(`reference "${U}" resolves to more than one schema`);
    }
  }
  return Je.getSchemaRefs = w, Je;
}
var Oc;
function Ho() {
  if (Oc) return _t;
  Oc = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.getData = _t.KeywordCxt = _t.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ kv(), t = /* @__PURE__ */ vo(), r = /* @__PURE__ */ td(), n = /* @__PURE__ */ vo(), o = /* @__PURE__ */ Pv(), s = /* @__PURE__ */ Tv(), a = /* @__PURE__ */ Rv(), i = /* @__PURE__ */ ae(), c = /* @__PURE__ */ Ot(), d = /* @__PURE__ */ Zo(), l = /* @__PURE__ */ fe(), g = /* @__PURE__ */ Fo();
  function $(P) {
    if (p(P) && (k(P), S(P))) {
      h(P);
      return;
    }
    v(P, () => (0, e.topBoolOrEmptySchema)(P));
  }
  _t.validateFunctionCode = $;
  function v({ gen: P, validateName: R, schema: N, schemaEnv: D, opts: K }, J) {
    K.code.es5 ? P.func(R, (0, i._)`${c.default.data}, ${c.default.valCxt}`, D.$async, () => {
      P.code((0, i._)`"use strict"; ${u(N, K)}`), b(P, K), P.code(J);
    }) : P.func(R, (0, i._)`${c.default.data}, ${w(K)}`, D.$async, () => P.code(u(N, K)).code(J));
  }
  function w(P) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${P.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function b(P, R) {
    P.if(c.default.valCxt, () => {
      P.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), P.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), P.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), P.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), R.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      P.var(c.default.instancePath, (0, i._)`""`), P.var(c.default.parentData, (0, i._)`undefined`), P.var(c.default.parentDataProperty, (0, i._)`undefined`), P.var(c.default.rootData, c.default.data), R.dynamicRef && P.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function h(P) {
    const { schema: R, opts: N, gen: D } = P;
    v(P, () => {
      N.$comment && R.$comment && Z(P), U(P), D.let(c.default.vErrors, null), D.let(c.default.errors, 0), N.unevaluated && _(P), I(P), x(P);
    });
  }
  function _(P) {
    const { gen: R, validateName: N } = P;
    P.evaluated = R.const("evaluated", (0, i._)`${N}.evaluated`), R.if((0, i._)`${P.evaluated}.dynamicProps`, () => R.assign((0, i._)`${P.evaluated}.props`, (0, i._)`undefined`)), R.if((0, i._)`${P.evaluated}.dynamicItems`, () => R.assign((0, i._)`${P.evaluated}.items`, (0, i._)`undefined`));
  }
  function u(P, R) {
    const N = typeof P == "object" && P[R.schemaId];
    return N && (R.code.source || R.code.process) ? (0, i._)`/*# sourceURL=${N} */` : i.nil;
  }
  function m(P, R) {
    if (p(P) && (k(P), S(P))) {
      y(P, R);
      return;
    }
    (0, e.boolOrEmptySchema)(P, R);
  }
  function S({ schema: P, self: R }) {
    if (typeof P == "boolean")
      return !P;
    for (const N in P)
      if (R.RULES.all[N])
        return !0;
    return !1;
  }
  function p(P) {
    return typeof P.schema != "boolean";
  }
  function y(P, R) {
    const { schema: N, gen: D, opts: K } = P;
    K.$comment && N.$comment && Z(P), M(P), F(P);
    const J = D.const("_errs", c.default.errors);
    I(P, J), D.var(R, (0, i._)`${J} === ${c.default.errors}`);
  }
  function k(P) {
    (0, l.checkUnknownRules)(P), z(P);
  }
  function I(P, R) {
    if (P.opts.jtd)
      return _e(P, [], !1, R);
    const N = (0, t.getSchemaTypes)(P.schema), D = (0, t.coerceAndCheckDataType)(P, N);
    _e(P, N, !D, R);
  }
  function z(P) {
    const { schema: R, errSchemaPath: N, opts: D, self: K } = P;
    R.$ref && D.ignoreKeywordsWithRef && (0, l.schemaHasRulesButRef)(R, K.RULES) && K.logger.warn(`$ref: keywords ignored in schema at path "${N}"`);
  }
  function U(P) {
    const { schema: R, opts: N } = P;
    R.default !== void 0 && N.useDefaults && N.strictSchema && (0, l.checkStrictMode)(P, "default is ignored in the schema root");
  }
  function M(P) {
    const R = P.schema[P.opts.schemaId];
    R && (P.baseId = (0, d.resolveUrl)(P.opts.uriResolver, P.baseId, R));
  }
  function F(P) {
    if (P.schema.$async && !P.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function Z({ gen: P, schemaEnv: R, schema: N, errSchemaPath: D, opts: K }) {
    const J = N.$comment;
    if (K.$comment === !0)
      P.code((0, i._)`${c.default.self}.logger.log(${J})`);
    else if (typeof K.$comment == "function") {
      const ue = (0, i.str)`${D}/$comment`, Ie = P.scopeValue("root", { ref: R.root });
      P.code((0, i._)`${c.default.self}.opts.$comment(${J}, ${ue}, ${Ie}.schema)`);
    }
  }
  function x(P) {
    const { gen: R, schemaEnv: N, validateName: D, ValidationError: K, opts: J } = P;
    N.$async ? R.if((0, i._)`${c.default.errors} === 0`, () => R.return(c.default.data), () => R.throw((0, i._)`new ${K}(${c.default.vErrors})`)) : (R.assign((0, i._)`${D}.errors`, c.default.vErrors), J.unevaluated && te(P), R.return((0, i._)`${c.default.errors} === 0`));
  }
  function te({ gen: P, evaluated: R, props: N, items: D }) {
    N instanceof i.Name && P.assign((0, i._)`${R}.props`, N), D instanceof i.Name && P.assign((0, i._)`${R}.items`, D);
  }
  function _e(P, R, N, D) {
    const { gen: K, schema: J, data: ue, allErrors: Ie, opts: ye, self: ge } = P, { RULES: le } = ge;
    if (J.$ref && (ye.ignoreKeywordsWithRef || !(0, l.schemaHasRulesButRef)(J, le))) {
      K.block(() => V(P, "$ref", le.all.$ref.definition));
      return;
    }
    ye.jtd || ee(P, R), K.block(() => {
      for (const be of le.rules)
        Qe(be);
      Qe(le.post);
    });
    function Qe(be) {
      (0, r.shouldUseGroup)(J, be) && (be.type ? (K.if((0, n.checkDataType)(be.type, ue, ye.strictNumbers)), we(P, be), R.length === 1 && R[0] === be.type && N && (K.else(), (0, n.reportTypeError)(P)), K.endIf()) : we(P, be), Ie || K.if((0, i._)`${c.default.errors} === ${D || 0}`));
    }
  }
  function we(P, R) {
    const { gen: N, schema: D, opts: { useDefaults: K } } = P;
    K && (0, o.assignDefaults)(P, R.type), N.block(() => {
      for (const J of R.rules)
        (0, r.shouldUseRule)(D, J) && V(P, J.keyword, J.definition, R.type);
    });
  }
  function ee(P, R) {
    P.schemaEnv.meta || !P.opts.strictTypes || (qe(P, R), P.opts.allowUnionTypes || A(P, R), T(P, P.dataTypes));
  }
  function qe(P, R) {
    if (R.length) {
      if (!P.dataTypes.length) {
        P.dataTypes = R;
        return;
      }
      R.forEach((N) => {
        O(P.dataTypes, N) || E(P, `type "${N}" not allowed by context "${P.dataTypes.join(",")}"`);
      }), f(P, R);
    }
  }
  function A(P, R) {
    R.length > 1 && !(R.length === 2 && R.includes("null")) && E(P, "use allowUnionTypes to allow union type keyword");
  }
  function T(P, R) {
    const N = P.self.RULES.all;
    for (const D in N) {
      const K = N[D];
      if (typeof K == "object" && (0, r.shouldUseRule)(P.schema, K)) {
        const { type: J } = K.definition;
        J.length && !J.some((ue) => q(R, ue)) && E(P, `missing type "${J.join(",")}" for keyword "${D}"`);
      }
    }
  }
  function q(P, R) {
    return P.includes(R) || R === "number" && P.includes("integer");
  }
  function O(P, R) {
    return P.includes(R) || R === "integer" && P.includes("number");
  }
  function f(P, R) {
    const N = [];
    for (const D of P.dataTypes)
      O(R, D) ? N.push(D) : R.includes("integer") && D === "number" && N.push("integer");
    P.dataTypes = N;
  }
  function E(P, R) {
    const N = P.schemaEnv.baseId + P.errSchemaPath;
    R += ` at "${N}" (strictTypes)`, (0, l.checkStrictMode)(P, R, P.opts.strictTypes);
  }
  class C {
    constructor(R, N, D) {
      if ((0, s.validateKeywordUsage)(R, N, D), this.gen = R.gen, this.allErrors = R.allErrors, this.keyword = D, this.data = R.data, this.schema = R.schema[D], this.$data = N.$data && R.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, l.schemaRefOrVal)(R, this.schema, D, this.$data), this.schemaType = N.schemaType, this.parentSchema = R.schema, this.params = {}, this.it = R, this.def = N, this.$data)
        this.schemaCode = R.gen.const("vSchema", B(this.$data, R));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, N.schemaType, N.allowUndefined))
        throw new Error(`${D} value must be ${JSON.stringify(N.schemaType)}`);
      ("code" in N ? N.trackErrors : N.errors !== !1) && (this.errsCount = R.gen.const("_errs", c.default.errors));
    }
    result(R, N, D) {
      this.failResult((0, i.not)(R), N, D);
    }
    failResult(R, N, D) {
      this.gen.if(R), D ? D() : this.error(), N ? (this.gen.else(), N(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(R, N) {
      this.failResult((0, i.not)(R), void 0, N);
    }
    fail(R) {
      if (R === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(R), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(R) {
      if (!this.$data)
        return this.fail(R);
      const { schemaCode: N } = this;
      this.fail((0, i._)`${N} !== undefined && (${(0, i.or)(this.invalid$data(), R)})`);
    }
    error(R, N, D) {
      if (N) {
        this.setParams(N), this._error(R, D), this.setParams({});
        return;
      }
      this._error(R, D);
    }
    _error(R, N) {
      (R ? g.reportExtraError : g.reportError)(this, this.def.error, N);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(R) {
      this.allErrors || this.gen.if(R);
    }
    setParams(R, N) {
      N ? Object.assign(this.params, R) : this.params = R;
    }
    block$data(R, N, D = i.nil) {
      this.gen.block(() => {
        this.check$data(R, D), N();
      });
    }
    check$data(R = i.nil, N = i.nil) {
      if (!this.$data)
        return;
      const { gen: D, schemaCode: K, schemaType: J, def: ue } = this;
      D.if((0, i.or)((0, i._)`${K} === undefined`, N)), R !== i.nil && D.assign(R, !0), (J.length || ue.validateSchema) && (D.elseIf(this.invalid$data()), this.$dataError(), R !== i.nil && D.assign(R, !1)), D.else();
    }
    invalid$data() {
      const { gen: R, schemaCode: N, schemaType: D, def: K, it: J } = this;
      return (0, i.or)(ue(), Ie());
      function ue() {
        if (D.length) {
          if (!(N instanceof i.Name))
            throw new Error("ajv implementation error");
          const ye = Array.isArray(D) ? D : [D];
          return (0, i._)`${(0, n.checkDataTypes)(ye, N, J.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function Ie() {
        if (K.validateSchema) {
          const ye = R.scopeValue("validate$data", { ref: K.validateSchema });
          return (0, i._)`!${ye}(${N})`;
        }
        return i.nil;
      }
    }
    subschema(R, N) {
      const D = (0, a.getSubschema)(this.it, R);
      (0, a.extendSubschemaData)(D, this.it, R), (0, a.extendSubschemaMode)(D, R);
      const K = { ...this.it, ...D, items: void 0, props: void 0 };
      return m(K, N), K;
    }
    mergeEvaluated(R, N) {
      const { it: D, gen: K } = this;
      D.opts.unevaluated && (D.props !== !0 && R.props !== void 0 && (D.props = l.mergeEvaluated.props(K, R.props, D.props, N)), D.items !== !0 && R.items !== void 0 && (D.items = l.mergeEvaluated.items(K, R.items, D.items, N)));
    }
    mergeValidEvaluated(R, N) {
      const { it: D, gen: K } = this;
      if (D.opts.unevaluated && (D.props !== !0 || D.items !== !0))
        return K.if(N, () => this.mergeEvaluated(R, i.Name)), !0;
    }
  }
  _t.KeywordCxt = C;
  function V(P, R, N, D) {
    const K = new C(P, N, R);
    "code" in N ? N.code(K, D) : K.$data && N.validate ? (0, s.funcKeywordCode)(K, N) : "macro" in N ? (0, s.macroKeywordCode)(K, N) : (N.compile || N.validate) && (0, s.funcKeywordCode)(K, N);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function B(P, { dataLevel: R, dataNames: N, dataPathArr: D }) {
    let K, J;
    if (P === "")
      return c.default.rootData;
    if (P[0] === "/") {
      if (!H.test(P))
        throw new Error(`Invalid JSON-pointer: ${P}`);
      K = P, J = c.default.rootData;
    } else {
      const ge = Q.exec(P);
      if (!ge)
        throw new Error(`Invalid JSON-pointer: ${P}`);
      const le = +ge[1];
      if (K = ge[2], K === "#") {
        if (le >= R)
          throw new Error(ye("property/index", le));
        return D[R - le];
      }
      if (le > R)
        throw new Error(ye("data", le));
      if (J = N[R - le], !K)
        return J;
    }
    let ue = J;
    const Ie = K.split("/");
    for (const ge of Ie)
      ge && (J = (0, i._)`${J}${(0, i.getProperty)((0, l.unescapeJsonPointer)(ge))}`, ue = (0, i._)`${ue} && ${J}`);
    return ue;
    function ye(ge, le) {
      return `Cannot access ${ge} ${le} levels up, current level is ${R}`;
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
function Ko() {
  if (Cc) return kn;
  Cc = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zo();
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
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ ba(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ Zo(), o = /* @__PURE__ */ fe(), s = /* @__PURE__ */ Ho();
  class a {
    constructor(_) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof _.schema == "object" && (m = _.schema), this.schema = _.schema, this.schemaId = _.schemaId, this.root = _.root || this, this.baseId = (u = _.baseId) !== null && u !== void 0 ? u : (0, n.normalizeId)(m == null ? void 0 : m[_.schemaId || "$id"]), this.schemaPath = _.schemaPath, this.localRefs = _.localRefs, this.meta = _.meta, this.$async = m == null ? void 0 : m.$async, this.refs = {};
    }
  }
  Xe.SchemaEnv = a;
  function i(h) {
    const _ = l.call(this, h);
    if (_)
      return _;
    const u = (0, n.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: m, lines: S } = this.opts.code, { ownProperties: p } = this.opts, y = new e.CodeGen(this.scope, { es5: m, lines: S, ownProperties: p });
    let k;
    h.$async && (k = y.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const I = y.scopeName("validate");
    h.validateName = I;
    const z = {
      gen: y,
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
      topSchemaRef: y.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: I,
      ValidationError: k,
      schema: h.schema,
      schemaEnv: h,
      rootId: u,
      baseId: h.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let U;
    try {
      this._compilations.add(h), (0, s.validateFunctionCode)(z), y.optimize(this.opts.code.optimize);
      const M = y.toString();
      U = `${y.scopeRefs(r.default.scope)}return ${M}`, this.opts.code.process && (U = this.opts.code.process(U, h));
      const Z = new Function(`${r.default.self}`, `${r.default.scope}`, U)(this, this.scope.get());
      if (this.scope.value(I, { ref: Z }), Z.errors = null, Z.schema = h.schema, Z.schemaEnv = h, h.$async && (Z.$async = !0), this.opts.code.source === !0 && (Z.source = { validateName: I, validateCode: M, scopeValues: y._values }), this.opts.unevaluated) {
        const { props: x, items: te } = z;
        Z.evaluated = {
          props: x instanceof e.Name ? void 0 : x,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: x instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, Z.source && (Z.source.evaluated = (0, e.stringify)(Z.evaluated));
      }
      return h.validate = Z, h;
    } catch (M) {
      throw delete h.validate, delete h.validateName, U && this.logger.error("Error compiling schema, function code:", U), M;
    } finally {
      this._compilations.delete(h);
    }
  }
  Xe.compileSchema = i;
  function c(h, _, u) {
    var m;
    u = (0, n.resolveUrl)(this.opts.uriResolver, _, u);
    const S = h.refs[u];
    if (S)
      return S;
    let p = $.call(this, h, u);
    if (p === void 0) {
      const y = (m = h.localRefs) === null || m === void 0 ? void 0 : m[u], { schemaId: k } = this.opts;
      y && (p = new a({ schema: y, schemaId: k, root: h, baseId: _ }));
    }
    if (p !== void 0)
      return h.refs[u] = d.call(this, p);
  }
  Xe.resolveRef = c;
  function d(h) {
    return (0, n.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : i.call(this, h);
  }
  function l(h) {
    for (const _ of this._compilations)
      if (g(_, h))
        return _;
  }
  Xe.getCompilingSchema = l;
  function g(h, _) {
    return h.schema === _.schema && h.root === _.root && h.baseId === _.baseId;
  }
  function $(h, _) {
    let u;
    for (; typeof (u = this.refs[_]) == "string"; )
      _ = u;
    return u || this.schemas[_] || v.call(this, h, _);
  }
  function v(h, _) {
    const u = this.opts.uriResolver.parse(_), m = (0, n._getFullPath)(this.opts.uriResolver, u);
    let S = (0, n.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && m === S)
      return b.call(this, u, h);
    const p = (0, n.normalizeId)(m), y = this.refs[p] || this.schemas[p];
    if (typeof y == "string") {
      const k = v.call(this, h, y);
      return typeof (k == null ? void 0 : k.schema) != "object" ? void 0 : b.call(this, u, k);
    }
    if (typeof (y == null ? void 0 : y.schema) == "object") {
      if (y.validate || i.call(this, y), p === (0, n.normalizeId)(_)) {
        const { schema: k } = y, { schemaId: I } = this.opts, z = k[I];
        return z && (S = (0, n.resolveUrl)(this.opts.uriResolver, S, z)), new a({ schema: k, schemaId: I, root: h, baseId: S });
      }
      return b.call(this, u, y);
    }
  }
  Xe.resolveSchema = v;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function b(h, { baseId: _, schema: u, root: m }) {
    var S;
    if (((S = h.fragment) === null || S === void 0 ? void 0 : S[0]) !== "/")
      return;
    for (const k of h.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const I = u[(0, o.unescapeFragment)(k)];
      if (I === void 0)
        return;
      u = I;
      const z = typeof u == "object" && u[this.opts.schemaId];
      !w.has(k) && z && (_ = (0, n.resolveUrl)(this.opts.uriResolver, _, z));
    }
    let p;
    if (typeof u != "boolean" && u.$ref && !(0, o.schemaHasRulesButRef)(u, this.RULES)) {
      const k = (0, n.resolveUrl)(this.opts.uriResolver, _, u.$ref);
      p = v.call(this, m, k);
    }
    const { schemaId: y } = this.opts;
    if (p = p || new a({ schema: u, schemaId: y, root: m, baseId: _ }), p.schema !== p.root.schema)
      return p;
  }
  return Xe;
}
const Iv = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Cv = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Nv = "object", jv = ["$data"], qv = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, zv = !1, Mv = {
  $id: Iv,
  description: Cv,
  type: Nv,
  required: jv,
  properties: qv,
  additionalProperties: zv
};
var Pn = {}, jc;
function Av() {
  if (jc) return Pn;
  jc = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = Bl();
  return e.code = 'require("ajv/dist/runtime/uri").default', Pn.default = e, Pn;
}
var qc;
function Dv() {
  return qc || (qc = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Ho();
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
    const n = /* @__PURE__ */ ba(), o = /* @__PURE__ */ Ko(), s = /* @__PURE__ */ ed(), a = /* @__PURE__ */ Sa(), i = /* @__PURE__ */ ae(), c = /* @__PURE__ */ Zo(), d = /* @__PURE__ */ vo(), l = /* @__PURE__ */ fe(), g = Mv, $ = /* @__PURE__ */ Av(), v = (A, T) => new RegExp(A, T);
    v.code = "new RegExp";
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
    }, _ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function m(A) {
      var T, q, O, f, E, C, V, H, Q, B, P, R, N, D, K, J, ue, Ie, ye, ge, le, Qe, be, It, Ct;
      const at = A.strict, Nt = (T = A.code) === null || T === void 0 ? void 0 : T.optimize, lr = Nt === !0 || Nt === void 0 ? 1 : Nt || 0, dr = (O = (q = A.code) === null || q === void 0 ? void 0 : q.regExp) !== null && O !== void 0 ? O : v, xo = (f = A.uriResolver) !== null && f !== void 0 ? f : $.default;
      return {
        strictSchema: (C = (E = A.strictSchema) !== null && E !== void 0 ? E : at) !== null && C !== void 0 ? C : !0,
        strictNumbers: (H = (V = A.strictNumbers) !== null && V !== void 0 ? V : at) !== null && H !== void 0 ? H : !0,
        strictTypes: (B = (Q = A.strictTypes) !== null && Q !== void 0 ? Q : at) !== null && B !== void 0 ? B : "log",
        strictTuples: (R = (P = A.strictTuples) !== null && P !== void 0 ? P : at) !== null && R !== void 0 ? R : "log",
        strictRequired: (D = (N = A.strictRequired) !== null && N !== void 0 ? N : at) !== null && D !== void 0 ? D : !1,
        code: A.code ? { ...A.code, optimize: lr, regExp: dr } : { optimize: lr, regExp: dr },
        loopRequired: (K = A.loopRequired) !== null && K !== void 0 ? K : u,
        loopEnum: (J = A.loopEnum) !== null && J !== void 0 ? J : u,
        meta: (ue = A.meta) !== null && ue !== void 0 ? ue : !0,
        messages: (Ie = A.messages) !== null && Ie !== void 0 ? Ie : !0,
        inlineRefs: (ye = A.inlineRefs) !== null && ye !== void 0 ? ye : !0,
        schemaId: (ge = A.schemaId) !== null && ge !== void 0 ? ge : "$id",
        addUsedSchema: (le = A.addUsedSchema) !== null && le !== void 0 ? le : !0,
        validateSchema: (Qe = A.validateSchema) !== null && Qe !== void 0 ? Qe : !0,
        validateFormats: (be = A.validateFormats) !== null && be !== void 0 ? be : !0,
        unicodeRegExp: (It = A.unicodeRegExp) !== null && It !== void 0 ? It : !0,
        int32range: (Ct = A.int32range) !== null && Ct !== void 0 ? Ct : !0,
        uriResolver: xo
      };
    }
    class S {
      constructor(T = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), T = this.opts = { ...T, ...m(T) };
        const { es5: q, lines: O } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: b, es5: q, lines: O }), this.logger = F(T.logger);
        const f = T.validateFormats;
        T.validateFormats = !1, this.RULES = (0, s.getRules)(), p.call(this, h, T, "NOT SUPPORTED"), p.call(this, _, T, "DEPRECATED", "warn"), this._metaOpts = U.call(this), T.formats && I.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), T.keywords && z.call(this, T.keywords), typeof T.meta == "object" && this.addMetaSchema(T.meta), k.call(this), T.validateFormats = f;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: T, meta: q, schemaId: O } = this.opts;
        let f = g;
        O === "id" && (f = { ...g }, f.id = f.$id, delete f.$id), q && T && this.addMetaSchema(f, f[O], !1);
      }
      defaultMeta() {
        const { meta: T, schemaId: q } = this.opts;
        return this.opts.defaultMeta = typeof T == "object" ? T[q] || T : void 0;
      }
      validate(T, q) {
        let O;
        if (typeof T == "string") {
          if (O = this.getSchema(T), !O)
            throw new Error(`no schema with key or ref "${T}"`);
        } else
          O = this.compile(T);
        const f = O(q);
        return "$async" in O || (this.errors = O.errors), f;
      }
      compile(T, q) {
        const O = this._addSchema(T, q);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(T, q) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return f.call(this, T, q);
        async function f(B, P) {
          await E.call(this, B.$schema);
          const R = this._addSchema(B, P);
          return R.validate || C.call(this, R);
        }
        async function E(B) {
          B && !this.getSchema(B) && await f.call(this, { $ref: B }, !0);
        }
        async function C(B) {
          try {
            return this._compileSchemaEnv(B);
          } catch (P) {
            if (!(P instanceof o.default))
              throw P;
            return V.call(this, P), await H.call(this, P.missingSchema), C.call(this, B);
          }
        }
        function V({ missingSchema: B, missingRef: P }) {
          if (this.refs[B])
            throw new Error(`AnySchema ${B} is loaded but ${P} cannot be resolved`);
        }
        async function H(B) {
          const P = await Q.call(this, B);
          this.refs[B] || await E.call(this, P.$schema), this.refs[B] || this.addSchema(P, B, q);
        }
        async function Q(B) {
          const P = this._loading[B];
          if (P)
            return P;
          try {
            return await (this._loading[B] = O(B));
          } finally {
            delete this._loading[B];
          }
        }
      }
      // Adds schema to the instance
      addSchema(T, q, O, f = this.opts.validateSchema) {
        if (Array.isArray(T)) {
          for (const C of T)
            this.addSchema(C, void 0, O, f);
          return this;
        }
        let E;
        if (typeof T == "object") {
          const { schemaId: C } = this.opts;
          if (E = T[C], E !== void 0 && typeof E != "string")
            throw new Error(`schema ${C} must be string`);
        }
        return q = (0, c.normalizeId)(q || E), this._checkUnique(q), this.schemas[q] = this._addSchema(T, O, q, f, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(T, q, O = this.opts.validateSchema) {
        return this.addSchema(T, q, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(T, q) {
        if (typeof T == "boolean")
          return !0;
        let O;
        if (O = T.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const f = this.validate(O, T);
        if (!f && q) {
          const E = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(E);
          else
            throw new Error(E);
        }
        return f;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(T) {
        let q;
        for (; typeof (q = y.call(this, T)) == "string"; )
          T = q;
        if (q === void 0) {
          const { schemaId: O } = this.opts, f = new a.SchemaEnv({ schema: {}, schemaId: O });
          if (q = a.resolveSchema.call(this, f, T), !q)
            return;
          this.refs[T] = q;
        }
        return q.validate || this._compileSchemaEnv(q);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(T) {
        if (T instanceof RegExp)
          return this._removeAllSchemas(this.schemas, T), this._removeAllSchemas(this.refs, T), this;
        switch (typeof T) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const q = y.call(this, T);
            return typeof q == "object" && this._cache.delete(q.schema), delete this.schemas[T], delete this.refs[T], this;
          }
          case "object": {
            const q = T;
            this._cache.delete(q);
            let O = T[this.opts.schemaId];
            return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(T) {
        for (const q of T)
          this.addKeyword(q);
        return this;
      }
      addKeyword(T, q) {
        let O;
        if (typeof T == "string")
          O = T, typeof q == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), q.keyword = O);
        else if (typeof T == "object" && q === void 0) {
          if (q = T, O = q.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (x.call(this, O, q), !q)
          return (0, l.eachItem)(O, (E) => te.call(this, E)), this;
        we.call(this, q);
        const f = {
          ...q,
          type: (0, d.getJSONTypes)(q.type),
          schemaType: (0, d.getJSONTypes)(q.schemaType)
        };
        return (0, l.eachItem)(O, f.type.length === 0 ? (E) => te.call(this, E, f) : (E) => f.type.forEach((C) => te.call(this, E, f, C))), this;
      }
      getKeyword(T) {
        const q = this.RULES.all[T];
        return typeof q == "object" ? q.definition : !!q;
      }
      // Remove keyword
      removeKeyword(T) {
        const { RULES: q } = this;
        delete q.keywords[T], delete q.all[T];
        for (const O of q.rules) {
          const f = O.rules.findIndex((E) => E.keyword === T);
          f >= 0 && O.rules.splice(f, 1);
        }
        return this;
      }
      // Add format
      addFormat(T, q) {
        return typeof q == "string" && (q = new RegExp(q)), this.formats[T] = q, this;
      }
      errorsText(T = this.errors, { separator: q = ", ", dataVar: O = "data" } = {}) {
        return !T || T.length === 0 ? "No errors" : T.map((f) => `${O}${f.instancePath} ${f.message}`).reduce((f, E) => f + q + E);
      }
      $dataMetaSchema(T, q) {
        const O = this.RULES.all;
        T = JSON.parse(JSON.stringify(T));
        for (const f of q) {
          const E = f.split("/").slice(1);
          let C = T;
          for (const V of E)
            C = C[V];
          for (const V in O) {
            const H = O[V];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, B = C[V];
            Q && B && (C[V] = qe(B));
          }
        }
        return T;
      }
      _removeAllSchemas(T, q) {
        for (const O in T) {
          const f = T[O];
          (!q || q.test(O)) && (typeof f == "string" ? delete T[O] : f && !f.meta && (this._cache.delete(f.schema), delete T[O]));
        }
      }
      _addSchema(T, q, O, f = this.opts.validateSchema, E = this.opts.addUsedSchema) {
        let C;
        const { schemaId: V } = this.opts;
        if (typeof T == "object")
          C = T[V];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof T != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(T);
        if (H !== void 0)
          return H;
        O = (0, c.normalizeId)(C || O);
        const Q = c.getSchemaRefs.call(this, T, O);
        return H = new a.SchemaEnv({ schema: T, schemaId: V, meta: q, baseId: O, localRefs: Q }), this._cache.set(H.schema, H), E && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = H), f && this.validateSchema(T, !0), H;
      }
      _checkUnique(T) {
        if (this.schemas[T] || this.refs[T])
          throw new Error(`schema with key or id "${T}" already exists`);
      }
      _compileSchemaEnv(T) {
        if (T.meta ? this._compileMetaSchema(T) : a.compileSchema.call(this, T), !T.validate)
          throw new Error("ajv implementation error");
        return T.validate;
      }
      _compileMetaSchema(T) {
        const q = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, T);
        } finally {
          this.opts = q;
        }
      }
    }
    S.ValidationError = n.default, S.MissingRefError = o.default, e.default = S;
    function p(A, T, q, O = "error") {
      for (const f in A) {
        const E = f;
        E in T && this.logger[O](`${q}: option ${f}. ${A[E]}`);
      }
    }
    function y(A) {
      return A = (0, c.normalizeId)(A), this.schemas[A] || this.refs[A];
    }
    function k() {
      const A = this.opts.schemas;
      if (A)
        if (Array.isArray(A))
          this.addSchema(A);
        else
          for (const T in A)
            this.addSchema(A[T], T);
    }
    function I() {
      for (const A in this.opts.formats) {
        const T = this.opts.formats[A];
        T && this.addFormat(A, T);
      }
    }
    function z(A) {
      if (Array.isArray(A)) {
        this.addVocabulary(A);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const T in A) {
        const q = A[T];
        q.keyword || (q.keyword = T), this.addKeyword(q);
      }
    }
    function U() {
      const A = { ...this.opts };
      for (const T of w)
        delete A[T];
      return A;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function F(A) {
      if (A === !1)
        return M;
      if (A === void 0)
        return console;
      if (A.log && A.warn && A.error)
        return A;
      throw new Error("logger must implement log, warn and error methods");
    }
    const Z = /^[a-z_$][a-z0-9_$:-]*$/i;
    function x(A, T) {
      const { RULES: q } = this;
      if ((0, l.eachItem)(A, (O) => {
        if (q.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!Z.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!T && T.$data && !("code" in T || "validate" in T))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(A, T, q) {
      var O;
      const f = T == null ? void 0 : T.post;
      if (q && f)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: E } = this;
      let C = f ? E.post : E.rules.find(({ type: H }) => H === q);
      if (C || (C = { type: q, rules: [] }, E.rules.push(C)), E.keywords[A] = !0, !T)
        return;
      const V = {
        keyword: A,
        definition: {
          ...T,
          type: (0, d.getJSONTypes)(T.type),
          schemaType: (0, d.getJSONTypes)(T.schemaType)
        }
      };
      T.before ? _e.call(this, C, V, T.before) : C.rules.push(V), E.all[A] = V, (O = T.implements) === null || O === void 0 || O.forEach((H) => this.addKeyword(H));
    }
    function _e(A, T, q) {
      const O = A.rules.findIndex((f) => f.keyword === q);
      O >= 0 ? A.rules.splice(O, 0, T) : (A.rules.push(T), this.logger.warn(`rule ${q} is not defined`));
    }
    function we(A) {
      let { metaSchema: T } = A;
      T !== void 0 && (A.$data && this.opts.$data && (T = qe(T)), A.validateSchema = this.compile(T, !0));
    }
    const ee = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function qe(A) {
      return { anyOf: [A, ee] };
    }
  }(us)), us;
}
var Tn = {}, Rn = {}, On = {}, zc;
function Uv() {
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
function Vv() {
  if (Mc) return wt;
  Mc = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.callRef = wt.getValidate = void 0;
  const e = /* @__PURE__ */ Ko(), t = /* @__PURE__ */ ft(), r = /* @__PURE__ */ ae(), n = /* @__PURE__ */ Ot(), o = /* @__PURE__ */ Sa(), s = /* @__PURE__ */ fe(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: l, schema: g, it: $ } = d, { baseId: v, schemaEnv: w, validateName: b, opts: h, self: _ } = $, { root: u } = w;
      if ((g === "#" || g === "#/") && v === u.baseId)
        return S();
      const m = o.resolveRef.call(_, u, v, g);
      if (m === void 0)
        throw new e.default($.opts.uriResolver, v, g);
      if (m instanceof o.SchemaEnv)
        return p(m);
      return y(m);
      function S() {
        if (w === u)
          return c(d, b, w, w.$async);
        const k = l.scopeValue("root", { ref: u });
        return c(d, (0, r._)`${k}.validate`, u, u.$async);
      }
      function p(k) {
        const I = i(d, k);
        c(d, I, k, k.$async);
      }
      function y(k) {
        const I = l.scopeValue("schema", h.code.source === !0 ? { ref: k, code: (0, r.stringify)(k) } : { ref: k }), z = l.name("valid"), U = d.subschema({
          schema: k,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: I,
          errSchemaPath: g
        }, z);
        d.mergeEvaluated(U), d.ok(z);
      }
    }
  };
  function i(d, l) {
    const { gen: g } = d;
    return l.validate ? g.scopeValue("validate", { ref: l.validate }) : (0, r._)`${g.scopeValue("wrapper", { ref: l })}.validate`;
  }
  wt.getValidate = i;
  function c(d, l, g, $) {
    const { gen: v, it: w } = d, { allErrors: b, schemaEnv: h, opts: _ } = w, u = _.passContext ? n.default.this : r.nil;
    $ ? m() : S();
    function m() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const k = v.let("valid");
      v.try(() => {
        v.code((0, r._)`await ${(0, t.callValidateCode)(d, l, u)}`), y(l), b || v.assign(k, !0);
      }, (I) => {
        v.if((0, r._)`!(${I} instanceof ${w.ValidationError})`, () => v.throw(I)), p(I), b || v.assign(k, !1);
      }), d.ok(k);
    }
    function S() {
      d.result((0, t.callValidateCode)(d, l, u), () => y(l), () => p(l));
    }
    function p(k) {
      const I = (0, r._)`${k}.errors`;
      v.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${I} : ${n.default.vErrors}.concat(${I})`), v.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function y(k) {
      var I;
      if (!w.opts.unevaluated)
        return;
      const z = (I = g == null ? void 0 : g.validate) === null || I === void 0 ? void 0 : I.evaluated;
      if (w.props !== !0)
        if (z && !z.dynamicProps)
          z.props !== void 0 && (w.props = s.mergeEvaluated.props(v, z.props, w.props));
        else {
          const U = v.var("props", (0, r._)`${k}.evaluated.props`);
          w.props = s.mergeEvaluated.props(v, U, w.props, r.Name);
        }
      if (w.items !== !0)
        if (z && !z.dynamicItems)
          z.items !== void 0 && (w.items = s.mergeEvaluated.items(v, z.items, w.items));
        else {
          const U = v.var("items", (0, r._)`${k}.evaluated.items`);
          w.items = s.mergeEvaluated.items(v, U, w.items, r.Name);
        }
    }
  }
  return wt.callRef = c, wt.default = a, wt;
}
var Ac;
function Lv() {
  if (Ac) return Rn;
  Ac = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Uv(), t = /* @__PURE__ */ Vv(), r = [
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
function Fv() {
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
function Zv() {
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
function Hv() {
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
function Kv() {
  if (Lc) return jn;
  Lc = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ Hv(), o = {
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
      const { keyword: a, data: i, schemaCode: c, it: d } = s, l = a === "maxLength" ? e.operators.GT : e.operators.LT, g = d.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, r.default)}(${i})`;
      s.fail$data((0, e._)`${g} ${l} ${c}`);
    }
  };
  return jn.default = o, jn;
}
var zn = {}, Fc;
function xv() {
  if (Fc) return zn;
  Fc = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ft(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ ae(), o = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, r.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, r._)`{pattern: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: g } = s, $ = g.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: v } = g.opts.code, w = v.code === "new RegExp" ? (0, r._)`new RegExp` : (0, t.useFunc)(a, v), b = a.let("valid");
        a.try(() => a.assign(b, (0, r._)`${w}(${l}, ${$}).test(${i})`), () => a.assign(b, !1)), s.fail$data((0, r._)`!${b}`);
      } else {
        const v = (0, e.usePattern)(s, d);
        s.fail$data((0, r._)`!${v}.test(${i})`);
      }
    }
  };
  return zn.default = o, zn;
}
var Mn = {}, Zc;
function Jv() {
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
function Gv() {
  if (Hc) return An;
  Hc = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ft(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: a, schema: i, schemaCode: c, data: d, $data: l, it: g } = s, { opts: $ } = g;
      if (!l && i.length === 0)
        return;
      const v = i.length >= $.loopRequired;
      if (g.allErrors ? w() : b(), $.strictRequired) {
        const u = s.parentSchema.properties, { definedProperties: m } = s.it;
        for (const S of i)
          if ((u == null ? void 0 : u[S]) === void 0 && !m.has(S)) {
            const p = g.schemaEnv.baseId + g.errSchemaPath, y = `required property "${S}" is not defined at "${p}" (strictRequired)`;
            (0, r.checkStrictMode)(g, y, g.opts.strictRequired);
          }
      }
      function w() {
        if (v || l)
          s.block$data(t.nil, h);
        else
          for (const u of i)
            (0, e.checkReportMissingProp)(s, u);
      }
      function b() {
        const u = a.let("missing");
        if (v || l) {
          const m = a.let("valid", !0);
          s.block$data(m, () => _(u, m)), s.ok(m);
        } else
          a.if((0, e.checkMissingProp)(s, i, u)), (0, e.reportMissingProp)(s, u), a.else();
      }
      function h() {
        a.forOf("prop", c, (u) => {
          s.setParams({ missingProperty: u }), a.if((0, e.noPropertyInData)(a, d, u, $.ownProperties), () => s.error());
        });
      }
      function _(u, m) {
        s.setParams({ missingProperty: u }), a.forOf(u, c, () => {
          a.assign(m, (0, e.propertyInData)(a, d, u, $.ownProperties)), a.if((0, t.not)(m), () => {
            s.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return An.default = o, An;
}
var Dn = {}, Kc;
function Wv() {
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
  const e = Do();
  return e.code = 'require("ajv/dist/runtime/equal").default', Vn.default = e, Vn;
}
var Jc;
function Bv() {
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
      const { gen: i, data: c, $data: d, schema: l, parentSchema: g, schemaCode: $, it: v } = a;
      if (!d && !l)
        return;
      const w = i.let("valid"), b = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      a.block$data(w, h, (0, t._)`${$} === false`), a.ok(w);
      function h() {
        const S = i.let("i", (0, t._)`${c}.length`), p = i.let("j");
        a.setParams({ i: S, j: p }), i.assign(w, !0), i.if((0, t._)`${S} > 1`, () => (_() ? u : m)(S, p));
      }
      function _() {
        return b.length > 0 && !b.some((S) => S === "object" || S === "array");
      }
      function u(S, p) {
        const y = i.name("item"), k = (0, e.checkDataTypes)(b, y, v.opts.strictNumbers, e.DataType.Wrong), I = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${S}--;`, () => {
          i.let(y, (0, t._)`${c}[${S}]`), i.if(k, (0, t._)`continue`), b.length > 1 && i.if((0, t._)`typeof ${y} == "string"`, (0, t._)`${y} += "_"`), i.if((0, t._)`typeof ${I}[${y}] == "number"`, () => {
            i.assign(p, (0, t._)`${I}[${y}]`), a.error(), i.assign(w, !1).break();
          }).code((0, t._)`${I}[${y}] = ${S}`);
        });
      }
      function m(S, p) {
        const y = (0, r.useFunc)(i, n.default), k = i.name("outer");
        i.label(k).for((0, t._)`;${S}--;`, () => i.for((0, t._)`${p} = ${S}; ${p}--;`, () => i.if((0, t._)`${y}(${c}[${S}], ${c}[${p}])`, () => {
          a.error(), i.assign(w, !1).break(k);
        })));
      }
    }
  };
  return Un.default = s, Un;
}
var Ln = {}, Gc;
function Qv() {
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
function Yv() {
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
      const { gen: a, data: i, $data: c, schema: d, schemaCode: l, it: g } = s;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const $ = d.length >= g.opts.loopEnum;
      let v;
      const w = () => v ?? (v = (0, t.useFunc)(a, r.default));
      let b;
      if ($ || c)
        b = a.let("valid"), s.block$data(b, h);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const u = a.const("vSchema", l);
        b = (0, e.or)(...d.map((m, S) => _(u, S)));
      }
      s.pass(b);
      function h() {
        a.assign(b, !1), a.forOf("v", l, (u) => a.if((0, e._)`${w()}(${i}, ${u})`, () => a.assign(b, !0).break()));
      }
      function _(u, m) {
        const S = d[m];
        return typeof S == "object" && S !== null ? (0, e._)`${w()}(${i}, ${u}[${m}])` : (0, e._)`${i} === ${S}`;
      }
    }
  };
  return Fn.default = o, Fn;
}
var Bc;
function Xv() {
  if (Bc) return In;
  Bc = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fv(), t = /* @__PURE__ */ Zv(), r = /* @__PURE__ */ Kv(), n = /* @__PURE__ */ xv(), o = /* @__PURE__ */ Jv(), s = /* @__PURE__ */ Gv(), a = /* @__PURE__ */ Wv(), i = /* @__PURE__ */ Bv(), c = /* @__PURE__ */ Qv(), d = /* @__PURE__ */ Yv(), l = [
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
function rd() {
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
    const { gen: i, schema: c, data: d, keyword: l, it: g } = s;
    g.items = !0;
    const $ = i.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      s.setParams({ len: a.length }), s.pass((0, e._)`${$} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(g, c)) {
      const w = i.var("valid", (0, e._)`${$} <= ${a.length}`);
      i.if((0, e.not)(w), () => v(w)), s.ok(w);
    }
    function v(w) {
      i.forRange("i", a.length, $, (b) => {
        s.subschema({ keyword: l, dataProp: b, dataPropType: t.Type.Num }, w), g.allErrors || i.if((0, e.not)(w), () => i.break());
      });
    }
  }
  return xt.validateAdditionalItems = o, xt.default = n, xt;
}
var Hn = {}, Jt = {}, Yc;
function nd() {
  if (Yc) return Jt;
  Yc = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.validateTuple = void 0;
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ ft(), n = {
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
    const { gen: c, parentSchema: d, data: l, keyword: g, it: $ } = s;
    b(d), $.opts.unevaluated && i.length && $.items !== !0 && ($.items = t.mergeEvaluated.items(c, i.length, $.items));
    const v = c.name("valid"), w = c.const("len", (0, e._)`${l}.length`);
    i.forEach((h, _) => {
      (0, t.alwaysValidSchema)($, h) || (c.if((0, e._)`${w} > ${_}`, () => s.subschema({
        keyword: g,
        schemaProp: _,
        dataProp: _
      }, v)), s.ok(v));
    });
    function b(h) {
      const { opts: _, errSchemaPath: u } = $, m = i.length, S = m === h.minItems && (m === h.maxItems || h[a] === !1);
      if (_.strictTuples && !S) {
        const p = `"${g}" is ${m}-tuple, but minItems or maxItems/${a} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)($, p, _.strictTuples);
      }
    }
  }
  return Jt.validateTuple = o, Jt.default = n, Jt;
}
var Xc;
function e$() {
  if (Xc) return Hn;
  Xc = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ nd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return Hn.default = t, Hn;
}
var Kn = {}, eu;
function t$() {
  if (eu) return Kn;
  eu = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ fe(), r = /* @__PURE__ */ ft(), n = /* @__PURE__ */ rd(), s = {
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
function r$() {
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
      let l, g;
      const { minContains: $, maxContains: v } = i;
      d.opts.next ? (l = $ === void 0 ? 1 : $, g = v) : l = 1;
      const w = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: l, max: g }), g === void 0 && l === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && l > g) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, a)) {
        let m = (0, e._)`${w} >= ${l}`;
        g !== void 0 && (m = (0, e._)`${m} && ${w} <= ${g}`), o.pass(m);
        return;
      }
      d.items = !0;
      const b = s.name("valid");
      g === void 0 && l === 1 ? _(b, () => s.if(b, () => s.break())) : l === 0 ? (s.let(b, !0), g !== void 0 && s.if((0, e._)`${c}.length > 0`, h)) : (s.let(b, !1), h()), o.result(b, () => o.reset());
      function h() {
        const m = s.name("_valid"), S = s.let("count", 0);
        _(m, () => s.if(m, () => u(S)));
      }
      function _(m, S) {
        s.forRange("i", 0, w, (p) => {
          o.subschema({
            keyword: "contains",
            dataProp: p,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), S();
        });
      }
      function u(m) {
        s.code((0, e._)`${m}++`), g === void 0 ? s.if((0, e._)`${m} >= ${l}`, () => s.assign(b, !0).break()) : (s.if((0, e._)`${m} > ${g}`, () => s.assign(b, !1).break()), l === 1 ? s.assign(b, !0) : s.if((0, e._)`${m} >= ${l}`, () => s.assign(b, !0)));
      }
    }
  };
  return xn.default = n, xn;
}
var ms = {}, ru;
function n$() {
  return ru || (ru = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ ft();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: l } }) => {
        const g = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${l} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: l, missingProperty: g } }) => (0, t._)`{property: ${c},
    missingProperty: ${g},
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
      for (const g in c) {
        if (g === "__proto__")
          continue;
        const $ = Array.isArray(c[g]) ? d : l;
        $[g] = c[g];
      }
      return [d, l];
    }
    function a(c, d = c.schema) {
      const { gen: l, data: g, it: $ } = c;
      if (Object.keys(d).length === 0)
        return;
      const v = l.let("missing");
      for (const w in d) {
        const b = d[w];
        if (b.length === 0)
          continue;
        const h = (0, n.propertyInData)(l, g, w, $.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: b.length,
          deps: b.join(", ")
        }), $.allErrors ? l.if(h, () => {
          for (const _ of b)
            (0, n.checkReportMissingProp)(c, _);
        }) : (l.if((0, t._)`${h} && (${(0, n.checkMissingProp)(c, b, v)})`), (0, n.reportMissingProp)(c, v), l.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, d = c.schema) {
      const { gen: l, data: g, keyword: $, it: v } = c, w = l.name("valid");
      for (const b in d)
        (0, r.alwaysValidSchema)(v, d[b]) || (l.if(
          (0, n.propertyInData)(l, g, b, v.opts.ownProperties),
          () => {
            const h = c.subschema({ keyword: $, schemaProp: b }, w);
            c.mergeValidEvaluated(h, w);
          },
          () => l.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = i, e.default = o;
  }(ms)), ms;
}
var Jn = {}, nu;
function o$() {
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
function od() {
  if (ou) return Gn;
  ou = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ft(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ Ot(), n = /* @__PURE__ */ fe(), s = {
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
      const { gen: i, schema: c, parentSchema: d, data: l, errsCount: g, it: $ } = a;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: w } = $;
      if ($.props = !0, w.removeAdditional !== "all" && (0, n.alwaysValidSchema)($, c))
        return;
      const b = (0, e.allSchemaProperties)(d.properties), h = (0, e.allSchemaProperties)(d.patternProperties);
      _(), a.ok((0, t._)`${g} === ${r.default.errors}`);
      function _() {
        i.forIn("key", l, (y) => {
          !b.length && !h.length ? S(y) : i.if(u(y), () => S(y));
        });
      }
      function u(y) {
        let k;
        if (b.length > 8) {
          const I = (0, n.schemaRefOrVal)($, d.properties, "properties");
          k = (0, e.isOwnProperty)(i, I, y);
        } else b.length ? k = (0, t.or)(...b.map((I) => (0, t._)`${y} === ${I}`)) : k = t.nil;
        return h.length && (k = (0, t.or)(k, ...h.map((I) => (0, t._)`${(0, e.usePattern)(a, I)}.test(${y})`))), (0, t.not)(k);
      }
      function m(y) {
        i.code((0, t._)`delete ${l}[${y}]`);
      }
      function S(y) {
        if (w.removeAdditional === "all" || w.removeAdditional && c === !1) {
          m(y);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: y }), a.error(), v || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)($, c)) {
          const k = i.name("valid");
          w.removeAdditional === "failing" ? (p(y, k, !1), i.if((0, t.not)(k), () => {
            a.reset(), m(y);
          })) : (p(y, k), v || i.if((0, t.not)(k), () => i.break()));
        }
      }
      function p(y, k, I) {
        const z = {
          keyword: "additionalProperties",
          dataProp: y,
          dataPropType: n.Type.Str
        };
        I === !1 && Object.assign(z, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(z, k);
      }
    }
  };
  return Gn.default = s, Gn;
}
var Wn = {}, su;
function s$() {
  if (su) return Wn;
  su = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ho(), t = /* @__PURE__ */ ft(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ od(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, parentSchema: c, data: d, it: l } = s;
      l.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(l, n.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(i);
      for (const h of g)
        l.definedProperties.add(h);
      l.opts.unevaluated && g.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(g), l.props));
      const $ = g.filter((h) => !(0, r.alwaysValidSchema)(l, i[h]));
      if ($.length === 0)
        return;
      const v = a.name("valid");
      for (const h of $)
        w(h) ? b(h) : (a.if((0, t.propertyInData)(a, d, h, l.opts.ownProperties)), b(h), l.allErrors || a.else().var(v, !0), a.endIf()), s.it.definedProperties.add(h), s.ok(v);
      function w(h) {
        return l.opts.useDefaults && !l.compositeRule && i[h].default !== void 0;
      }
      function b(h) {
        s.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, v);
      }
    }
  };
  return Wn.default = o, Wn;
}
var Bn = {}, au;
function a$() {
  if (au) return Bn;
  au = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ft(), t = /* @__PURE__ */ ae(), r = /* @__PURE__ */ fe(), n = /* @__PURE__ */ fe(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: d, it: l } = s, { opts: g } = l, $ = (0, e.allSchemaProperties)(i), v = $.filter((S) => (0, r.alwaysValidSchema)(l, i[S]));
      if ($.length === 0 || v.length === $.length && (!l.opts.unevaluated || l.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && d.properties, b = a.name("valid");
      l.props !== !0 && !(l.props instanceof t.Name) && (l.props = (0, n.evaluatedPropsToName)(a, l.props));
      const { props: h } = l;
      _();
      function _() {
        for (const S of $)
          w && u(S), l.allErrors ? m(S) : (a.var(b, !0), m(S), a.if(b));
      }
      function u(S) {
        for (const p in w)
          new RegExp(S).test(p) && (0, r.checkStrictMode)(l, `property ${p} matches pattern ${S} (use allowMatchingProperties)`);
      }
      function m(S) {
        a.forIn("key", c, (p) => {
          a.if((0, t._)`${(0, e.usePattern)(s, S)}.test(${p})`, () => {
            const y = v.includes(S);
            y || s.subschema({
              keyword: "patternProperties",
              schemaProp: S,
              dataProp: p,
              dataPropType: n.Type.Str
            }, b), l.opts.unevaluated && h !== !0 ? a.assign((0, t._)`${h}[${p}]`, !0) : !y && !l.allErrors && a.if((0, t.not)(b), () => a.break());
          });
        });
      }
    }
  };
  return Bn.default = o, Bn;
}
var Qn = {}, iu;
function i$() {
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
function c$() {
  if (cu) return Yn;
  cu = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ ft()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Yn.default = t, Yn;
}
var Xn = {}, uu;
function u$() {
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
      const d = a, l = s.let("valid", !1), g = s.let("passing", null), $ = s.name("_valid");
      o.setParams({ passing: g }), s.block(v), o.result(l, () => o.reset(), () => o.error(!0));
      function v() {
        d.forEach((w, b) => {
          let h;
          (0, t.alwaysValidSchema)(c, w) ? s.var($, !0) : h = o.subschema({
            keyword: "oneOf",
            schemaProp: b,
            compositeRule: !0
          }, $), b > 0 && s.if((0, e._)`${$} && ${l}`).assign(l, !1).assign(g, (0, e._)`[${g}, ${b}]`).else(), s.if($, () => {
            s.assign(l, !0), s.assign(g, b), h && o.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return Xn.default = n, Xn;
}
var eo = {}, lu;
function l$() {
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
function d$() {
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
      const g = a.let("valid", !0), $ = a.name("_valid");
      if (v(), s.reset(), d && l) {
        const b = a.let("ifClause");
        s.setParams({ ifClause: b }), a.if($, w("then", b), w("else", b));
      } else d ? a.if($, w("then")) : a.if((0, e.not)($), w("else"));
      s.pass(g, () => s.error(!0));
      function v() {
        const b = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, $);
        s.mergeEvaluated(b);
      }
      function w(b, h) {
        return () => {
          const _ = s.subschema({ keyword: b }, $);
          a.assign(g, $), s.mergeValidEvaluated(_, g), h ? a.assign(h, (0, e._)`${b}`) : s.setParams({ ifClause: b });
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
function f$() {
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
function h$() {
  if (hu) return Zn;
  hu = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ rd(), t = /* @__PURE__ */ e$(), r = /* @__PURE__ */ nd(), n = /* @__PURE__ */ t$(), o = /* @__PURE__ */ r$(), s = /* @__PURE__ */ n$(), a = /* @__PURE__ */ o$(), i = /* @__PURE__ */ od(), c = /* @__PURE__ */ s$(), d = /* @__PURE__ */ a$(), l = /* @__PURE__ */ i$(), g = /* @__PURE__ */ c$(), $ = /* @__PURE__ */ u$(), v = /* @__PURE__ */ l$(), w = /* @__PURE__ */ d$(), b = /* @__PURE__ */ f$();
  function h(_ = !1) {
    const u = [
      // any
      l.default,
      g.default,
      $.default,
      v.default,
      w.default,
      b.default,
      // object
      a.default,
      i.default,
      s.default,
      c.default,
      d.default
    ];
    return _ ? u.push(t.default, n.default) : u.push(e.default, r.default), u.push(o.default), u;
  }
  return Zn.default = h, Zn;
}
var no = {}, oo = {}, pu;
function p$() {
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
      const { gen: s, data: a, $data: i, schema: c, schemaCode: d, it: l } = n, { opts: g, errSchemaPath: $, schemaEnv: v, self: w } = l;
      if (!g.validateFormats)
        return;
      i ? b() : h();
      function b() {
        const _ = s.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), u = s.const("fDef", (0, e._)`${_}[${d}]`), m = s.let("fType"), S = s.let("format");
        s.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => s.assign(m, (0, e._)`${u}.type || "string"`).assign(S, (0, e._)`${u}.validate`), () => s.assign(m, (0, e._)`"string"`).assign(S, u)), n.fail$data((0, e.or)(p(), y()));
        function p() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${S}`;
        }
        function y() {
          const k = v.$async ? (0, e._)`(${u}.async ? await ${S}(${a}) : ${S}(${a}))` : (0, e._)`${S}(${a})`, I = (0, e._)`(typeof ${S} == "function" ? ${k} : ${S}.test(${a}))`;
          return (0, e._)`${S} && ${S} !== true && ${m} === ${o} && !${I}`;
        }
      }
      function h() {
        const _ = w.formats[c];
        if (!_) {
          p();
          return;
        }
        if (_ === !0)
          return;
        const [u, m, S] = y(_);
        u === o && n.pass(k());
        function p() {
          if (g.strictSchema === !1) {
            w.logger.warn(I());
            return;
          }
          throw new Error(I());
          function I() {
            return `unknown format "${c}" ignored in schema at path "${$}"`;
          }
        }
        function y(I) {
          const z = I instanceof RegExp ? (0, e.regexpCode)(I) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(c)}` : void 0, U = s.scopeValue("formats", { key: c, ref: I, code: z });
          return typeof I == "object" && !(I instanceof RegExp) ? [I.type || "string", I.validate, (0, e._)`${U}.validate`] : ["string", I, U];
        }
        function k() {
          if (typeof _ == "object" && !(_ instanceof RegExp) && _.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${S}(${a})`;
          }
          return typeof m == "function" ? (0, e._)`${S}(${a})` : (0, e._)`${S}.test(${a})`;
        }
      }
    }
  };
  return oo.default = r, oo;
}
var mu;
function m$() {
  if (mu) return no;
  mu = 1, Object.defineProperty(no, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ p$()).default];
  return no.default = t, no;
}
var Ut = {}, _u;
function _$() {
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
function y$() {
  if (yu) return Tn;
  yu = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Lv(), t = /* @__PURE__ */ Xv(), r = /* @__PURE__ */ h$(), n = /* @__PURE__ */ m$(), o = /* @__PURE__ */ _$(), s = [
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
function g$() {
  if (gu) return _r;
  gu = 1, Object.defineProperty(_r, "__esModule", { value: !0 }), _r.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (_r.DiscrError = e = {})), _r;
}
var vu;
function v$() {
  if (vu) return so;
  vu = 1, Object.defineProperty(so, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ae(), t = /* @__PURE__ */ g$(), r = /* @__PURE__ */ Sa(), n = /* @__PURE__ */ Ko(), o = /* @__PURE__ */ fe(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: d } }) => (0, e._)`{error: ${i}, tag: ${d}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: d, schema: l, parentSchema: g, it: $ } = i, { oneOf: v } = g;
      if (!$.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = l.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (l.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const b = c.let("valid", !1), h = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${h} == "string"`, () => _(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: w })), i.ok(b);
      function _() {
        const S = m();
        c.if(!1);
        for (const p in S)
          c.elseIf((0, e._)`${h} === ${p}`), c.assign(b, u(S[p]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: w }), c.endIf();
      }
      function u(S) {
        const p = c.name("valid"), y = i.subschema({ keyword: "oneOf", schemaProp: S }, p);
        return i.mergeEvaluated(y, e.Name), p;
      }
      function m() {
        var S;
        const p = {}, y = I(g);
        let k = !0;
        for (let M = 0; M < v.length; M++) {
          let F = v[M];
          if (F != null && F.$ref && !(0, o.schemaHasRulesButRef)(F, $.self.RULES)) {
            const x = F.$ref;
            if (F = r.resolveRef.call($.self, $.schemaEnv.root, $.baseId, x), F instanceof r.SchemaEnv && (F = F.schema), F === void 0)
              throw new n.default($.opts.uriResolver, $.baseId, x);
          }
          const Z = (S = F == null ? void 0 : F.properties) === null || S === void 0 ? void 0 : S[w];
          if (typeof Z != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          k = k && (y || I(F)), z(Z, M);
        }
        if (!k)
          throw new Error(`discriminator: "${w}" must be required`);
        return p;
        function I({ required: M }) {
          return Array.isArray(M) && M.includes(w);
        }
        function z(M, F) {
          if (M.const)
            U(M.const, F);
          else if (M.enum)
            for (const Z of M.enum)
              U(Z, F);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function U(M, F) {
          if (typeof M != "string" || M in p)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          p[M] = F;
        }
      }
    }
  };
  return so.default = a, so;
}
const $$ = "http://json-schema.org/draft-07/schema#", w$ = "http://json-schema.org/draft-07/schema#", b$ = "Core schema meta-schema", S$ = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, E$ = ["object", "boolean"], k$ = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, P$ = {
  $schema: $$,
  $id: w$,
  title: b$,
  definitions: S$,
  type: E$,
  properties: k$,
  default: !0
};
var $u;
function T$() {
  return $u || ($u = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = /* @__PURE__ */ Dv(), n = /* @__PURE__ */ y$(), o = /* @__PURE__ */ v$(), s = P$, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
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
    var d = /* @__PURE__ */ Ho();
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
    var g = /* @__PURE__ */ ba();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var $ = /* @__PURE__ */ Ko();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return $.default;
    } });
  }(bn, bn.exports)), bn.exports;
}
var wu;
function R$() {
  return wu || (wu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ T$(), r = /* @__PURE__ */ ae(), n = r.operators, o = {
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
        const { gen: c, data: d, schemaCode: l, keyword: g, it: $ } = i, { opts: v, self: w } = $;
        if (!v.validateFormats)
          return;
        const b = new t.KeywordCxt($, w.RULES.all.format.definition, "format");
        b.$data ? h() : _();
        function h() {
          const m = c.scopeValue("formats", {
            ref: w.formats,
            code: v.code.formats
          }), S = c.const("fmt", (0, r._)`${m}[${b.schemaCode}]`);
          i.fail$data((0, r.or)((0, r._)`typeof ${S} != "object"`, (0, r._)`${S} instanceof RegExp`, (0, r._)`typeof ${S}.compare != "function"`, u(S)));
        }
        function _() {
          const m = b.schema, S = w.formats[m];
          if (!S || S === !0)
            return;
          if (typeof S != "object" || S instanceof RegExp || typeof S.compare != "function")
            throw new Error(`"${g}": format "${m}" does not define "compare" function`);
          const p = c.scopeValue("formats", {
            key: m,
            ref: S,
            code: v.code.formats ? (0, r._)`${v.code.formats}${(0, r.getProperty)(m)}` : void 0
          });
          i.fail$data(u(p));
        }
        function u(m) {
          return (0, r._)`${m}.compare(${d}, ${l}) ${o[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (i) => (i.addKeyword(e.formatLimitDefinition), i);
    e.default = a;
  }(cs)), cs;
}
var bu;
function O$() {
  return bu || (bu = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = Ev(), n = R$(), o = /* @__PURE__ */ ae(), s = new o.Name("fullFormats"), a = new o.Name("fastFormats"), i = (d, l = { keywords: !0 }) => {
      if (Array.isArray(l))
        return c(d, l, r.fullFormats, s), d;
      const [g, $] = l.mode === "fast" ? [r.fastFormats, a] : [r.fullFormats, s], v = l.formats || r.formatNames;
      return c(d, v, g, $), l.keywords && (0, n.default)(d), d;
    };
    i.get = (d, l = "full") => {
      const $ = (l === "fast" ? r.fastFormats : r.fullFormats)[d];
      if (!$)
        throw new Error(`Unknown format "${d}"`);
      return $;
    };
    function c(d, l, g, $) {
      var v, w;
      (v = (w = d.opts.code).formats) !== null && v !== void 0 || (w.formats = (0, o._)`require("ajv-formats/dist/formats").${$}`);
      for (const b of l)
        d.addFormat(b, g[b]);
    }
    e.exports = t = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
  }(wn, wn.exports)), wn.exports;
}
var I$ = O$();
const C$ = /* @__PURE__ */ Iu(I$);
function N$() {
  const e = new Sv({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return C$(e), e;
}
class j$ {
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
    this._ajv = t ?? N$();
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
class q$ {
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
  async *callToolStream(t, r = Mo, n) {
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
function z$(e, t, r) {
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
function M$(e, t, r) {
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
function A$(e) {
  if (!e)
    return { supportsFormMode: !1, supportsUrlMode: !1 };
  const t = e.form !== void 0, r = e.url !== void 0;
  return { supportsFormMode: t || !t && !r, supportsUrlMode: r };
}
class D$ extends _g {
  /**
   * Initializes this client with the given name and version information.
   */
  constructor(t, r) {
    super(r), this._clientInfo = t, this._cachedToolOutputValidators = /* @__PURE__ */ new Map(), this._cachedKnownTaskTools = /* @__PURE__ */ new Set(), this._cachedRequiredTaskTools = /* @__PURE__ */ new Set(), this._listChangedDebounceTimers = /* @__PURE__ */ new Map(), this._capabilities = (r == null ? void 0 : r.capabilities) ?? {}, this._jsonSchemaValidator = (r == null ? void 0 : r.jsonSchemaValidator) ?? new j$(), r != null && r.listChanged && (this._pendingListChangedConfig = r.listChanged);
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
      tasks: new q$(this)
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
    this._capabilities = yg(this._capabilities, t);
  }
  /**
   * Override request handler registration to enforce client-side validation for elicitation.
   */
  setRequestHandler(t, r) {
    var i;
    const n = il(t), o = n == null ? void 0 : n.method;
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
        var m, S;
        const g = bt(Hl, d);
        if (!g.success) {
          const p = g.error instanceof Error ? g.error.message : String(g.error);
          throw new re(ne.InvalidParams, `Invalid elicitation request: ${p}`);
        }
        const { params: $ } = g.data;
        $.mode = $.mode ?? "form";
        const { supportsFormMode: v, supportsUrlMode: w } = A$(this._capabilities.elicitation);
        if ($.mode === "form" && !v)
          throw new re(ne.InvalidParams, "Client does not support form-mode elicitation requests");
        if ($.mode === "url" && !w)
          throw new re(ne.InvalidParams, "Client does not support URL-mode elicitation requests");
        const b = await Promise.resolve(r(d, l));
        if ($.task) {
          const p = bt(Pr, b);
          if (!p.success) {
            const y = p.error instanceof Error ? p.error.message : String(p.error);
            throw new re(ne.InvalidParams, `Invalid task creation result: ${y}`);
          }
          return p.data;
        }
        const h = bt(Kl, b);
        if (!h.success) {
          const p = h.error instanceof Error ? h.error.message : String(h.error);
          throw new re(ne.InvalidParams, `Invalid elicitation result: ${p}`);
        }
        const _ = h.data, u = $.mode === "form" ? $.requestedSchema : void 0;
        if ($.mode === "form" && _.action === "accept" && _.content && u && (S = (m = this._capabilities.elicitation) == null ? void 0 : m.form) != null && S.applyDefaults)
          try {
            io(u, _.content);
          } catch {
          }
        return _;
      };
      return super.setRequestHandler(t, c);
    }
    if (a === "sampling/createMessage") {
      const c = async (d, l) => {
        const g = bt(Ll, d);
        if (!g.success) {
          const _ = g.error instanceof Error ? g.error.message : String(g.error);
          throw new re(ne.InvalidParams, `Invalid sampling request: ${_}`);
        }
        const { params: $ } = g.data, v = await Promise.resolve(r(d, l));
        if ($.task) {
          const _ = bt(Pr, v);
          if (!_.success) {
            const u = _.error instanceof Error ? _.error.message : String(_.error);
            throw new re(ne.InvalidParams, `Invalid task creation result: ${u}`);
          }
          return _.data;
        }
        const b = $.tools || $.toolChoice ? Zl : Fl, h = bt(b, v);
        if (!h.success) {
          const _ = h.error instanceof Error ? h.error.message : String(h.error);
          throw new re(ne.InvalidParams, `Invalid sampling result: ${_}`);
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
            protocolVersion: No,
            capabilities: this._capabilities,
            clientInfo: this._clientInfo
          }
        }, El, r);
        if (n === void 0)
          throw new Error(`Server sent invalid initialize result: ${n}`);
        if (!D_.includes(n.protocolVersion))
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
    z$((n = (r = this._serverCapabilities) == null ? void 0 : r.tasks) == null ? void 0 : n.requests, t, "Server");
  }
  assertTaskHandlerCapability(t) {
    var r;
    this._capabilities && M$((r = this._capabilities.tasks) == null ? void 0 : r.requests, t, "Client");
  }
  async ping(t) {
    return this.request({ method: "ping" }, er, t);
  }
  async complete(t, r) {
    return this.request({ method: "completion/complete", params: t }, xl, r);
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
  async callTool(t, r = Mo, n) {
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
    const s = Ny.safeParse(n);
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
        const g = await o();
        c(null, g);
      } catch (g) {
        const $ = g instanceof Error ? g : new Error(String(g));
        c($, null);
      }
    }, l = () => {
      if (i) {
        const g = this._listChangedDebounceTimers.get(t);
        g && clearTimeout(g);
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
async function U$(e) {
  return (await ka).getRandomValues(new Uint8Array(e));
}
async function V$(e) {
  const t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~", r = Math.pow(2, 8) - Math.pow(2, 8) % t.length;
  let n = "";
  for (; n.length < e; ) {
    const o = await U$(e - n.length);
    for (const s of o)
      s < r && (n += t[s % t.length]);
  }
  return n;
}
async function L$(e) {
  return await V$(e);
}
async function F$(e) {
  const t = await (await ka).subtle.digest("SHA-256", new TextEncoder().encode(e));
  return btoa(String.fromCharCode(...new Uint8Array(t))).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
}
async function Z$(e) {
  if (e || (e = 43), e < 43 || e > 128)
    throw `Expected a length between 43 and 128. Received ${e}.`;
  const t = await L$(e), r = await F$(t);
  return {
    code_verifier: t,
    code_challenge: r
  };
}
const Fe = Zm().superRefine((e, t) => {
  if (!URL.canParse(e))
    return t.addIssue({
      code: M_.custom,
      message: "URL must be parseable",
      fatal: !0
    }), Kd;
}).refine((e) => {
  const t = new URL(e);
  return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), H$ = Ze({
  resource: j().url(),
  authorization_servers: G(Fe).optional(),
  jwks_uri: j().url().optional(),
  scopes_supported: G(j()).optional(),
  bearer_methods_supported: G(j()).optional(),
  resource_signing_alg_values_supported: G(j()).optional(),
  resource_name: j().optional(),
  resource_documentation: j().optional(),
  resource_policy_uri: j().url().optional(),
  resource_tos_uri: j().url().optional(),
  tls_client_certificate_bound_access_tokens: Se().optional(),
  authorization_details_types_supported: G(j()).optional(),
  dpop_signing_alg_values_supported: G(j()).optional(),
  dpop_bound_access_tokens_required: Se().optional()
}), sd = Ze({
  issuer: j(),
  authorization_endpoint: Fe,
  token_endpoint: Fe,
  registration_endpoint: Fe.optional(),
  scopes_supported: G(j()).optional(),
  response_types_supported: G(j()),
  response_modes_supported: G(j()).optional(),
  grant_types_supported: G(j()).optional(),
  token_endpoint_auth_methods_supported: G(j()).optional(),
  token_endpoint_auth_signing_alg_values_supported: G(j()).optional(),
  service_documentation: Fe.optional(),
  revocation_endpoint: Fe.optional(),
  revocation_endpoint_auth_methods_supported: G(j()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: G(j()).optional(),
  introspection_endpoint: j().optional(),
  introspection_endpoint_auth_methods_supported: G(j()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: G(j()).optional(),
  code_challenge_methods_supported: G(j()).optional(),
  client_id_metadata_document_supported: Se().optional()
}), K$ = Ze({
  issuer: j(),
  authorization_endpoint: Fe,
  token_endpoint: Fe,
  userinfo_endpoint: Fe.optional(),
  jwks_uri: Fe,
  registration_endpoint: Fe.optional(),
  scopes_supported: G(j()).optional(),
  response_types_supported: G(j()),
  response_modes_supported: G(j()).optional(),
  grant_types_supported: G(j()).optional(),
  acr_values_supported: G(j()).optional(),
  subject_types_supported: G(j()),
  id_token_signing_alg_values_supported: G(j()),
  id_token_encryption_alg_values_supported: G(j()).optional(),
  id_token_encryption_enc_values_supported: G(j()).optional(),
  userinfo_signing_alg_values_supported: G(j()).optional(),
  userinfo_encryption_alg_values_supported: G(j()).optional(),
  userinfo_encryption_enc_values_supported: G(j()).optional(),
  request_object_signing_alg_values_supported: G(j()).optional(),
  request_object_encryption_alg_values_supported: G(j()).optional(),
  request_object_encryption_enc_values_supported: G(j()).optional(),
  token_endpoint_auth_methods_supported: G(j()).optional(),
  token_endpoint_auth_signing_alg_values_supported: G(j()).optional(),
  display_values_supported: G(j()).optional(),
  claim_types_supported: G(j()).optional(),
  claims_supported: G(j()).optional(),
  service_documentation: j().optional(),
  claims_locales_supported: G(j()).optional(),
  ui_locales_supported: G(j()).optional(),
  claims_parameter_supported: Se().optional(),
  request_parameter_supported: Se().optional(),
  request_uri_parameter_supported: Se().optional(),
  require_request_uri_registration: Se().optional(),
  op_policy_uri: Fe.optional(),
  op_tos_uri: Fe.optional(),
  client_id_metadata_document_supported: Se().optional()
}), x$ = W({
  ...K$.shape,
  ...sd.pick({
    code_challenge_methods_supported: !0
  }).shape
}), J$ = W({
  access_token: j(),
  id_token: j().optional(),
  // Optional for OAuth 2.1, but necessary in OpenID Connect
  token_type: j(),
  expires_in: A_().optional(),
  scope: j().optional(),
  refresh_token: j().optional()
}).strip(), G$ = W({
  error: j(),
  error_description: j().optional(),
  error_uri: j().optional()
}), Su = Fe.optional().or(X("").transform(() => {
})), W$ = W({
  redirect_uris: G(Fe),
  token_endpoint_auth_method: j().optional(),
  grant_types: G(j()).optional(),
  response_types: G(j()).optional(),
  client_name: j().optional(),
  client_uri: Fe.optional(),
  logo_uri: Su,
  scope: j().optional(),
  contacts: G(j()).optional(),
  tos_uri: Su,
  policy_uri: j().optional(),
  jwks_uri: Fe.optional(),
  jwks: l_().optional(),
  software_id: j().optional(),
  software_version: j().optional(),
  software_statement: j().optional()
}).strip(), B$ = W({
  client_id: j(),
  client_secret: j().optional(),
  client_id_issued_at: he().optional(),
  client_secret_expires_at: he().optional()
}).strip(), Q$ = W$.merge(B$);
W({
  error: j(),
  error_description: j().optional()
}).strip();
W({
  token: j(),
  token_type_hint: j().optional()
}).strip();
function Y$(e) {
  const t = typeof e == "string" ? new URL(e) : new URL(e.href);
  return t.hash = "", t;
}
function X$({ requestedResource: e, configuredResource: t }) {
  const r = typeof e == "string" ? new URL(e) : new URL(e.href), n = typeof t == "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== n.origin || r.pathname.length < n.pathname.length)
    return !1;
  const o = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/", s = n.pathname.endsWith("/") ? n.pathname : n.pathname + "/";
  return o.startsWith(s);
}
class Ue extends Error {
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
class Ts extends Ue {
}
Ts.errorCode = "invalid_request";
class $o extends Ue {
}
$o.errorCode = "invalid_client";
class wo extends Ue {
}
wo.errorCode = "invalid_grant";
class bo extends Ue {
}
bo.errorCode = "unauthorized_client";
class Rs extends Ue {
}
Rs.errorCode = "unsupported_grant_type";
class Os extends Ue {
}
Os.errorCode = "invalid_scope";
class Is extends Ue {
}
Is.errorCode = "access_denied";
class ir extends Ue {
}
ir.errorCode = "server_error";
class Cs extends Ue {
}
Cs.errorCode = "temporarily_unavailable";
class Ns extends Ue {
}
Ns.errorCode = "unsupported_response_type";
class js extends Ue {
}
js.errorCode = "unsupported_token_type";
class qs extends Ue {
}
qs.errorCode = "invalid_token";
class zs extends Ue {
}
zs.errorCode = "method_not_allowed";
class Ms extends Ue {
}
Ms.errorCode = "too_many_requests";
class So extends Ue {
}
So.errorCode = "invalid_client_metadata";
class As extends Ue {
}
As.errorCode = "insufficient_scope";
class Ds extends Ue {
}
Ds.errorCode = "invalid_target";
const ew = {
  [Ts.errorCode]: Ts,
  [$o.errorCode]: $o,
  [wo.errorCode]: wo,
  [bo.errorCode]: bo,
  [Rs.errorCode]: Rs,
  [Os.errorCode]: Os,
  [Is.errorCode]: Is,
  [ir.errorCode]: ir,
  [Cs.errorCode]: Cs,
  [Ns.errorCode]: Ns,
  [js.errorCode]: js,
  [qs.errorCode]: qs,
  [zs.errorCode]: zs,
  [Ms.errorCode]: Ms,
  [So.errorCode]: So,
  [As.errorCode]: As,
  [Ds.errorCode]: Ds
};
class lt extends Error {
  constructor(t) {
    super(t ?? "Unauthorized");
  }
}
function tw(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
const _s = "code", ys = "S256";
function rw(e, t) {
  const r = e.client_secret !== void 0;
  return "token_endpoint_auth_method" in e && e.token_endpoint_auth_method && tw(e.token_endpoint_auth_method) && (t.length === 0 || t.includes(e.token_endpoint_auth_method)) ? e.token_endpoint_auth_method : t.length === 0 ? r ? "client_secret_basic" : "none" : r && t.includes("client_secret_basic") ? "client_secret_basic" : r && t.includes("client_secret_post") ? "client_secret_post" : t.includes("none") ? "none" : r ? "client_secret_post" : "none";
}
function nw(e, t, r, n) {
  const { client_id: o, client_secret: s } = t;
  switch (e) {
    case "client_secret_basic":
      ow(o, s, r);
      return;
    case "client_secret_post":
      sw(o, s, n);
      return;
    case "none":
      aw(o, n);
      return;
    default:
      throw new Error(`Unsupported client authentication method: ${e}`);
  }
}
function ow(e, t, r) {
  if (!t)
    throw new Error("client_secret_basic authentication requires a client_secret");
  const n = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${n}`);
}
function sw(e, t, r) {
  r.set("client_id", e), t && r.set("client_secret", t);
}
function aw(e, t) {
  t.set("client_id", e);
}
async function ad(e) {
  const t = e instanceof Response ? e.status : void 0, r = e instanceof Response ? await e.text() : e;
  try {
    const n = G$.parse(JSON.parse(r)), { error: o, error_description: s, error_uri: a } = n, i = ew[o] || ir;
    return new i(s || "", a);
  } catch (n) {
    const o = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${n}. Raw body: ${r}`;
    return new ir(o);
  }
}
async function Ft(e, t) {
  var r, n;
  try {
    return await gs(e, t);
  } catch (o) {
    if (o instanceof $o || o instanceof bo)
      return await ((r = e.invalidateCredentials) == null ? void 0 : r.call(e, "all")), await gs(e, t);
    if (o instanceof wo)
      return await ((n = e.invalidateCredentials) == null ? void 0 : n.call(e, "tokens")), await gs(e, t);
    throw o;
  }
}
async function gs(e, { serverUrl: t, authorizationCode: r, scope: n, resourceMetadataUrl: o, fetchFn: s }) {
  var m, S, p, y, k;
  const a = await ((m = e.discoveryState) == null ? void 0 : m.call(e));
  let i, c, d, l = o;
  if (!l && (a != null && a.resourceMetadataUrl) && (l = new URL(a.resourceMetadataUrl)), a != null && a.authorizationServerUrl) {
    if (c = a.authorizationServerUrl, i = a.resourceMetadata, d = a.authorizationServerMetadata ?? await cd(c, { fetchFn: s }), !i)
      try {
        i = await id(t, { resourceMetadataUrl: l }, s);
      } catch {
      }
    (d !== a.authorizationServerMetadata || i !== a.resourceMetadata) && await ((S = e.saveDiscoveryState) == null ? void 0 : S.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: d
    }));
  } else {
    const I = await hw(t, { resourceMetadataUrl: l, fetchFn: s });
    c = I.authorizationServerUrl, d = I.authorizationServerMetadata, i = I.resourceMetadata, await ((p = e.saveDiscoveryState) == null ? void 0 : p.call(e, {
      authorizationServerUrl: String(c),
      resourceMetadataUrl: l == null ? void 0 : l.toString(),
      resourceMetadata: i,
      authorizationServerMetadata: d
    }));
  }
  const g = await cw(t, e, i), $ = n || ((y = i == null ? void 0 : i.scopes_supported) == null ? void 0 : y.join(" ")) || e.clientMetadata.scope;
  let v = await Promise.resolve(e.clientInformation());
  if (!v) {
    if (r !== void 0)
      throw new Error("Existing OAuth client information is required when exchanging an authorization code");
    const I = (d == null ? void 0 : d.client_id_metadata_document_supported) === !0, z = e.clientMetadataUrl;
    if (z && !iw(z))
      throw new So(`clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${z}`);
    if (I && z)
      v = {
        client_id: z
      }, await ((k = e.saveClientInformation) == null ? void 0 : k.call(e, v));
    else {
      if (!e.saveClientInformation)
        throw new Error("OAuth client information must be saveable for dynamic registration");
      const M = await gw(c, {
        metadata: d,
        clientMetadata: e.clientMetadata,
        scope: $,
        fetchFn: s
      });
      await e.saveClientInformation(M), v = M;
    }
  }
  const w = !e.redirectUrl;
  if (r !== void 0 || w) {
    const I = await yw(e, c, {
      metadata: d,
      resource: g,
      authorizationCode: r,
      fetchFn: s
    });
    return await e.saveTokens(I), "AUTHORIZED";
  }
  const b = await e.tokens();
  if (b != null && b.refresh_token)
    try {
      const I = await _w(c, {
        metadata: d,
        clientInformation: v,
        refreshToken: b.refresh_token,
        resource: g,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: s
      });
      return await e.saveTokens(I), "AUTHORIZED";
    } catch (I) {
      if (!(!(I instanceof Ue) || I instanceof ir)) throw I;
    }
  const h = e.state ? await e.state() : void 0, { authorizationUrl: _, codeVerifier: u } = await pw(c, {
    metadata: d,
    clientInformation: v,
    state: h,
    redirectUrl: e.redirectUrl,
    scope: $,
    resource: g
  });
  return await e.saveCodeVerifier(u), await e.redirectToAuthorization(_), "REDIRECT";
}
function iw(e) {
  if (!e)
    return !1;
  try {
    const t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function cw(e, t, r) {
  const n = Y$(e);
  if (t.validateResourceURL)
    return await t.validateResourceURL(n, r == null ? void 0 : r.resource);
  if (r) {
    if (!X$({ requestedResource: n, configuredResource: r.resource }))
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
  const o = vs(e, "resource_metadata") || void 0;
  let s;
  if (o)
    try {
      s = new URL(o);
    } catch {
    }
  const a = vs(e, "scope") || void 0, i = vs(e, "error") || void 0;
  return {
    resourceMetadataUrl: s,
    scope: a,
    error: i
  };
}
function vs(e, t) {
  const r = e.headers.get("WWW-Authenticate");
  if (!r)
    return null;
  const n = new RegExp(`${t}=(?:"([^"]+)"|([^\\s,]+))`), o = r.match(n);
  return o ? o[1] || o[2] : null;
}
async function id(e, t, r = fetch) {
  var o, s;
  const n = await dw(e, "oauth-protected-resource", r, {
    protocolVersion: t == null ? void 0 : t.protocolVersion,
    metadataUrl: t == null ? void 0 : t.resourceMetadataUrl
  });
  if (!n || n.status === 404)
    throw await ((o = n == null ? void 0 : n.body) == null ? void 0 : o.cancel()), new Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.");
  if (!n.ok)
    throw await ((s = n.body) == null ? void 0 : s.cancel()), new Error(`HTTP ${n.status} trying to load well-known OAuth protected resource metadata.`);
  return H$.parse(await n.json());
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
function uw(e, t = "", r = {}) {
  return t.endsWith("/") && (t = t.slice(0, -1)), r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Eu(e, t, r = fetch) {
  return await Pa(e, {
    "MCP-Protocol-Version": t
  }, r);
}
function lw(e, t) {
  return !e || e.status >= 400 && e.status < 500 && t !== "/";
}
async function dw(e, t, r, n) {
  const o = new URL(e), s = (n == null ? void 0 : n.protocolVersion) ?? No;
  let a;
  if (n != null && n.metadataUrl)
    a = new URL(n.metadataUrl);
  else {
    const c = uw(t, o.pathname);
    a = new URL(c, (n == null ? void 0 : n.metadataServerUrl) ?? o), a.search = o.search;
  }
  let i = await Eu(a, s, r);
  if (!(n != null && n.metadataUrl) && lw(i, o.pathname)) {
    const c = new URL(`/.well-known/${t}`, o);
    i = await Eu(c, s, r);
  }
  return i;
}
function fw(e) {
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
async function cd(e, { fetchFn: t = fetch, protocolVersion: r = No } = {}) {
  var s;
  const n = {
    "MCP-Protocol-Version": r,
    Accept: "application/json"
  }, o = fw(e);
  for (const { url: a, type: i } of o) {
    const c = await Pa(a, n, t);
    if (c) {
      if (!c.ok) {
        if (await ((s = c.body) == null ? void 0 : s.cancel()), c.status >= 400 && c.status < 500)
          continue;
        throw new Error(`HTTP ${c.status} trying to load ${i === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${a}`);
      }
      return i === "oauth" ? sd.parse(await c.json()) : x$.parse(await c.json());
    }
  }
}
async function hw(e, t) {
  let r, n;
  try {
    r = await id(e, { resourceMetadataUrl: t == null ? void 0 : t.resourceMetadataUrl }, t == null ? void 0 : t.fetchFn), r.authorization_servers && r.authorization_servers.length > 0 && (n = r.authorization_servers[0]);
  } catch {
  }
  n || (n = String(new URL("/", e)));
  const o = await cd(n, { fetchFn: t == null ? void 0 : t.fetchFn });
  return {
    authorizationServerUrl: n,
    authorizationServerMetadata: o,
    resourceMetadata: r
  };
}
async function pw(e, { metadata: t, clientInformation: r, redirectUrl: n, scope: o, state: s, resource: a }) {
  let i;
  if (t) {
    if (i = new URL(t.authorization_endpoint), !t.response_types_supported.includes(_s))
      throw new Error(`Incompatible auth server: does not support response type ${_s}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(ys))
      throw new Error(`Incompatible auth server: does not support code challenge method ${ys}`);
  } else
    i = new URL("/authorize", e);
  const c = await Z$(), d = c.code_verifier, l = c.code_challenge;
  return i.searchParams.set("response_type", _s), i.searchParams.set("client_id", r.client_id), i.searchParams.set("code_challenge", l), i.searchParams.set("code_challenge_method", ys), i.searchParams.set("redirect_uri", String(n)), s && i.searchParams.set("state", s), o && i.searchParams.set("scope", o), o != null && o.includes("offline_access") && i.searchParams.append("prompt", "consent"), a && i.searchParams.set("resource", a.href), { authorizationUrl: i, codeVerifier: d };
}
function mw(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r)
  });
}
async function ud(e, { metadata: t, tokenRequestParams: r, clientInformation: n, addClientAuthentication: o, resource: s, fetchFn: a }) {
  const i = t != null && t.token_endpoint ? new URL(t.token_endpoint) : new URL("/token", e), c = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  });
  if (s && r.set("resource", s.href), o)
    await o(c, r, i, t);
  else if (n) {
    const l = (t == null ? void 0 : t.token_endpoint_auth_methods_supported) ?? [], g = rw(n, l);
    nw(g, n, c, r);
  }
  const d = await (a ?? fetch)(i, {
    method: "POST",
    headers: c,
    body: r
  });
  if (!d.ok)
    throw await ad(d);
  return J$.parse(await d.json());
}
async function _w(e, { metadata: t, clientInformation: r, refreshToken: n, resource: o, addClientAuthentication: s, fetchFn: a }) {
  const i = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: n
  }), c = await ud(e, {
    metadata: t,
    tokenRequestParams: i,
    clientInformation: r,
    addClientAuthentication: s,
    resource: o,
    fetchFn: a
  });
  return { refresh_token: n, ...c };
}
async function yw(e, t, { metadata: r, resource: n, authorizationCode: o, fetchFn: s } = {}) {
  const a = e.clientMetadata.scope;
  let i;
  if (e.prepareTokenRequest && (i = await e.prepareTokenRequest(a)), !i) {
    if (!o)
      throw new Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl)
      throw new Error("redirectUrl is required for authorization_code flow");
    const d = await e.codeVerifier();
    i = mw(o, d, e.redirectUrl);
  }
  const c = await e.clientInformation();
  return ud(t, {
    metadata: r,
    tokenRequestParams: i,
    clientInformation: c ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: n,
    fetchFn: s
  });
}
async function gw(e, { metadata: t, clientMetadata: r, scope: n, fetchFn: o }) {
  let s;
  if (t) {
    if (!t.registration_endpoint)
      throw new Error("Incompatible auth server: does not support dynamic client registration");
    s = new URL(t.registration_endpoint);
  } else
    s = new URL("/register", e);
  const a = await (o ?? fetch)(s, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...r,
      ...n !== void 0 ? { scope: n } : {}
    })
  });
  if (!a.ok)
    throw await ad(a);
  return Q$.parse(await a.json());
}
const ld = (...e) => (t) => e.reduce((r, n) => n(r), t), vw = (e) => (t) => (r, n) => e(t, r, n);
class ku extends Error {
  constructor(t, r) {
    super(t), this.name = "ParseError", this.type = r.type, this.field = r.field, this.value = r.value, this.line = r.line;
  }
}
function $s(e) {
}
function dd(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent: t = $s, onError: r = $s, onRetry: n = $s, onComment: o } = e;
  let s = "", a = !0, i, c = "", d = "";
  function l(b) {
    const h = a ? b.replace(/^\xEF\xBB\xBF/, "") : b, [_, u] = $w(`${s}${h}`);
    for (const m of _)
      g(m);
    s = u, a = !1;
  }
  function g(b) {
    if (b === "") {
      v();
      return;
    }
    if (b.startsWith(":")) {
      o && o(b.slice(b.startsWith(": ") ? 2 : 1));
      return;
    }
    const h = b.indexOf(":");
    if (h !== -1) {
      const _ = b.slice(0, h), u = b[h + 1] === " " ? 2 : 1, m = b.slice(h + u);
      $(_, m, b);
      return;
    }
    $(b, "", b);
  }
  function $(b, h, _) {
    switch (b) {
      case "event":
        d = h;
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
          new ku(`Invalid \`retry\` value: "${h}"`, {
            type: "invalid-retry",
            value: h,
            line: _
          })
        );
        break;
      default:
        r(
          new ku(
            `Unknown field "${b.length > 20 ? `${b.slice(0, 20)}…` : b}"`,
            { type: "unknown-field", field: b, value: h, line: _ }
          )
        );
        break;
    }
  }
  function v() {
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
    s && b.consume && g(s), a = !0, i = void 0, c = "", d = "", s = "";
  }
  return { feed: l, reset: w };
}
function $w(e) {
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
function ww(e) {
  const t = globalThis.DOMException;
  return typeof t == "function" ? new t(e, "SyntaxError") : new SyntaxError(e);
}
function Us(e) {
  return e instanceof Error ? "errors" in e && Array.isArray(e.errors) ? e.errors.map(Us).join(", ") : "cause" in e && e.cause instanceof Error ? `${e}: ${Us(e.cause)}` : e.message : `${e}`;
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
var fd = (e) => {
  throw TypeError(e);
}, Ta = (e, t, r) => t.has(e) || fd("Cannot " + r), ie = (e, t, r) => (Ta(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Me = (e, t, r) => t.has(e) ? fd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Te = (e, t, r, n) => (Ta(e, t, "write to private field"), t.set(e, r), r), vt = (e, t, r) => (Ta(e, t, "access private method"), r), We, Lt, Wt, co, ko, br, tr, Sr, St, Bt, nr, Qt, $r, ut, Vs, Ls, Fs, Ru, Zs, Hs, wr, Ks, xs;
class uo extends EventTarget {
  constructor(t, r) {
    var n, o;
    super(), Me(this, ut), this.CONNECTING = 0, this.OPEN = 1, this.CLOSED = 2, Me(this, We), Me(this, Lt), Me(this, Wt), Me(this, co), Me(this, ko), Me(this, br), Me(this, tr), Me(this, Sr, null), Me(this, St), Me(this, Bt), Me(this, nr, null), Me(this, Qt, null), Me(this, $r, null), Me(this, Ls, async (s) => {
      var a;
      ie(this, Bt).reset();
      const { body: i, redirected: c, status: d, headers: l } = s;
      if (d === 204) {
        vt(this, ut, wr).call(this, "Server sent HTTP 204, not reconnecting", 204), this.close();
        return;
      }
      if (c ? Te(this, Wt, new URL(s.url)) : Te(this, Wt, void 0), d !== 200) {
        vt(this, ut, wr).call(this, `Non-200 status code (${d})`, d);
        return;
      }
      if (!(l.get("content-type") || "").startsWith("text/event-stream")) {
        vt(this, ut, wr).call(this, 'Invalid content type, expected "text/event-stream"', d);
        return;
      }
      if (ie(this, We) === this.CLOSED)
        return;
      Te(this, We, this.OPEN);
      const g = new Event("open");
      if ((a = ie(this, $r)) == null || a.call(this, g), this.dispatchEvent(g), typeof i != "object" || !i || !("getReader" in i)) {
        vt(this, ut, wr).call(this, "Invalid response body, expected a web ReadableStream", d), this.close();
        return;
      }
      const $ = new TextDecoder(), v = i.getReader();
      let w = !0;
      do {
        const { done: b, value: h } = await v.read();
        h && ie(this, Bt).feed($.decode(h, { stream: !b })), b && (w = !1, ie(this, Bt).reset(), vt(this, ut, Ks).call(this));
      } while (w);
    }), Me(this, Fs, (s) => {
      Te(this, St, void 0), !(s.name === "AbortError" || s.type === "aborted") && vt(this, ut, Ks).call(this, Us(s));
    }), Me(this, Zs, (s) => {
      typeof s.id == "string" && Te(this, Sr, s.id);
      const a = new MessageEvent(s.event || "message", {
        data: s.data,
        origin: ie(this, Wt) ? ie(this, Wt).origin : ie(this, Lt).origin,
        lastEventId: s.id || ""
      });
      ie(this, Qt) && (!s.event || s.event === "message") && ie(this, Qt).call(this, a), this.dispatchEvent(a);
    }), Me(this, Hs, (s) => {
      Te(this, br, s);
    }), Me(this, xs, () => {
      Te(this, tr, void 0), ie(this, We) === this.CONNECTING && vt(this, ut, Vs).call(this);
    });
    try {
      if (t instanceof URL)
        Te(this, Lt, t);
      else if (typeof t == "string")
        Te(this, Lt, new URL(t, bw()));
      else
        throw new Error("Invalid URL");
    } catch {
      throw ww("An invalid or illegal string was specified");
    }
    Te(this, Bt, dd({
      onEvent: ie(this, Zs),
      onRetry: ie(this, Hs)
    })), Te(this, We, this.CONNECTING), Te(this, br, 3e3), Te(this, ko, (n = r == null ? void 0 : r.fetch) != null ? n : globalThis.fetch), Te(this, co, (o = r == null ? void 0 : r.withCredentials) != null ? o : !1), vt(this, ut, Vs).call(this);
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
We = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), ko = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ new WeakSet(), /**
* Connect to the given URL and start receiving events
*
* @internal
*/
Vs = function() {
  Te(this, We, this.CONNECTING), Te(this, St, new AbortController()), ie(this, ko)(ie(this, Lt), vt(this, ut, Ru).call(this)).then(ie(this, Ls)).catch(ie(this, Fs));
}, Ls = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), /**
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
}, Zs = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), /**
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
Ks = function(e, t) {
  var r;
  if (ie(this, We) === this.CLOSED)
    return;
  Te(this, We, this.CONNECTING);
  const n = new Pu("error", { code: t, message: e });
  (r = ie(this, nr)) == null || r.call(this, n), this.dispatchEvent(n), Te(this, tr, setTimeout(ie(this, xs), ie(this, br)));
}, xs = /* @__PURE__ */ new WeakMap(), /**
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
function bw() {
  const e = "document" in globalThis ? globalThis.document : void 0;
  return e && typeof e == "object" && "baseURI" in e && typeof e.baseURI == "string" ? e.baseURI : void 0;
}
function Po(e) {
  return e ? e instanceof Headers ? Object.fromEntries(e.entries()) : Array.isArray(e) ? Object.fromEntries(e) : { ...e } : {};
}
function hd(e = fetch, t) {
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
class Sw extends Error {
  constructor(t, r, n) {
    super(`SSE error: ${r}`), this.code = t, this.event = n;
  }
}
class Ew {
  constructor(t, r) {
    this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._eventSourceInit = r == null ? void 0 : r.eventSourceInit, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = hd(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit);
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new lt("No auth provider");
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
      throw new lt();
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
        const a = new Sw(s.code, s.message, s);
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
      throw new lt("No auth provider");
    if (await Ft(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: t,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    }) !== "AUTHORIZED")
      throw new lt("Failed to authorize");
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
            throw new lt();
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
class kw extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: n } = {}) {
    let o;
    super({
      start(s) {
        o = dd({
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
const Pw = {
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
class Tw {
  constructor(t, r) {
    this._hasCompletedAuthFlow = !1, this._url = t, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = r == null ? void 0 : r.requestInit, this._authProvider = r == null ? void 0 : r.authProvider, this._fetch = r == null ? void 0 : r.fetch, this._fetchWithInit = hd(r == null ? void 0 : r.fetch, r == null ? void 0 : r.requestInit), this._sessionId = r == null ? void 0 : r.sessionId, this._reconnectionOptions = (r == null ? void 0 : r.reconnectionOptions) ?? Pw;
  }
  async _authThenStart() {
    var r;
    if (!this._authProvider)
      throw new lt("No auth provider");
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
      throw new lt();
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
      var l, g, $, v;
      try {
        const w = t.pipeThrough(new TextDecoderStream()).pipeThrough(new kw({
          onRetry: (_) => {
            this._serverRetryMs = _;
          }
        })).getReader();
        for (; ; ) {
          const { value: _, done: u } = await w.read();
          if (u)
            break;
          if (_.id && (a = _.id, i = !0, o == null || o(_.id)), !!_.data && (!_.event || _.event === "message"))
            try {
              const m = ao.parse(JSON.parse(_.data));
              vr(m) && (c = !0, s !== void 0 && (m.id = s)), (l = this.onmessage) == null || l.call(this, m);
            } catch (m) {
              (g = this.onerror) == null || g.call(this, m);
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
          } catch (_) {
            (v = this.onerror) == null || v.call(this, new Error(`Failed to reconnect: ${_ instanceof Error ? _.message : String(_)}`));
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
      throw new lt("No auth provider");
    if (await Ft(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: t,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    }) !== "AUTHORIZED")
      throw new lt("Failed to authorize");
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
        this._startOrAuthSse({ resumptionToken: d, replayMessageId: Ps(t) ? t.id : void 0 }).catch((u) => {
          var m;
          return (m = this.onerror) == null ? void 0 : m.call(this, u);
        });
        return;
      }
      const g = await this._commonHeaders();
      g.set("content-type", "application/json"), g.set("accept", "application/json, text/event-stream");
      const $ = {
        ...this._requestInit,
        method: "POST",
        headers: g,
        body: JSON.stringify(t),
        signal: (n = this._abortController) == null ? void 0 : n.signal
      }, v = await (this._fetch ?? fetch)(this._url, $), w = v.headers.get("mcp-session-id");
      if (w && (this._sessionId = w), !v.ok) {
        const u = await v.text().catch(() => null);
        if (v.status === 401 && this._authProvider) {
          if (this._hasCompletedAuthFlow)
            throw new Gt(401, "Server returned 401 after successful authentication");
          const { resourceMetadataUrl: m, scope: S } = Eo(v);
          if (this._resourceMetadataUrl = m, this._scope = S, await Ft(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          }) !== "AUTHORIZED")
            throw new lt();
          return this._hasCompletedAuthFlow = !0, this.send(t);
        }
        if (v.status === 403 && this._authProvider) {
          const { resourceMetadataUrl: m, scope: S, error: p } = Eo(v);
          if (p === "insufficient_scope") {
            const y = v.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === y)
              throw new Gt(403, "Server returned 403 after trying upscoping");
            if (S && (this._scope = S), m && (this._resourceMetadataUrl = m), this._lastUpscopingHeader = y ?? void 0, await Ft(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            }) !== "AUTHORIZED")
              throw new lt();
            return this.send(t);
          }
        }
        throw new Gt(v.status, `Error POSTing to endpoint: ${u}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, v.status === 202) {
        await ((o = v.body) == null ? void 0 : o.cancel()), ey(t) && this._startOrAuthSse({ resumptionToken: void 0 }).catch((u) => {
          var m;
          return (m = this.onerror) == null ? void 0 : m.call(this, u);
        });
        return;
      }
      const h = (Array.isArray(t) ? t : [t]).filter((u) => "method" in u && "id" in u && u.id !== void 0).length > 0, _ = v.headers.get("content-type");
      if (h)
        if (_ != null && _.includes("text/event-stream"))
          this._handleSseStream(v.body, { onresumptiontoken: l }, !1);
        else if (_ != null && _.includes("application/json")) {
          const u = await v.json(), m = Array.isArray(u) ? u.map((S) => ao.parse(S)) : [ao.parse(u)];
          for (const S of m)
            (s = this.onmessage) == null || s.call(this, S);
        } else
          throw await ((a = v.body) == null ? void 0 : a.cancel()), new Gt(-1, `Unexpected content type: ${_}`);
      else
        await ((i = v.body) == null ? void 0 : i.cancel());
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
async function Rw({
  serverUrl: e,
  version: t,
  logger: r,
  protocolVersion: n,
  headers: o,
  handlers: s,
  signal: a
}) {
  r.debug(`Connecting to server at: ${e}`);
  const i = await Cw(e, t, r, n, o, a);
  return s != null && s.onMessage && i.client.setNotificationHandler(Vl, (c) => {
    s.onMessage(c.params.level, c.params.data);
  }), s != null && s.onProgress && i.client.setNotificationHandler(zo, (c) => {
    s.onProgress(
      String(c.params.progressToken),
      c.params.progress,
      c.params.total
    );
  }), i;
}
async function Ow(e, t) {
  t.debug("Disconnecting from MCP server..."), e.client.onerror = void 0, await e.transport.close(), t.debug("Disconnected from MCP server");
}
async function Ou(e, t, r, n) {
  const o = new Ew(t, { fetch: ld(r)(fetch) });
  try {
    await e.connect(o, { signal: n });
  } catch (s) {
    throw await o.close().catch(() => {
    }), s;
  }
  return { client: e, transport: o, transportType: "sse" };
}
async function Iw(e, t, r, n) {
  const o = new Tw(t, {
    fetch: ld(r)(fetch)
  });
  return await e.connect(o, { signal: n }), { client: e, transport: o, transportType: "streamable-http" };
}
async function Cw(e, t, r, n, o, s) {
  const a = "Please verify the server URL is correct.", i = "Please verify the server URL is correct and the attached authentication headers are supported by the server.", c = "Could not connect to server using HTTP+SSE transport.", d = "Could not connect to server with any available transport.", l = new D$({
    name: "Mendix Agent Editor",
    version: t
  });
  l.onerror = (w) => {
    r.error("Client error:", w);
  };
  const g = vw(async (w, b, h) => {
    const _ = new Headers(h == null ? void 0 : h.headers);
    return o.forEach(([u, m]) => {
      _.set(u, m);
    }), w(b, { ...h, headers: _ });
  }), $ = new URL(e), v = (w) => {
    let b = w === "SSE" ? c : d;
    return o.length > 0 ? b += ` ${i}` : b += ` ${a}`, b;
  };
  if (n === "v2024_11_05") {
    r.debug("Protocol version 2024-11-05 specified, connecting directly with HTTP+SSE transport...");
    try {
      const w = await Ou(l, $, g, s);
      return r.debug("Successfully connected using HTTP+SSE transport."), w;
    } catch (w) {
      throw r.error(`Failed to connect using HTTP+SSE transport: ${w}`), new Error(v("SSE"));
    }
  }
  r.debug("Trying Streamable HTTP transport...");
  try {
    const w = await Iw(l, $, g, s);
    return r.debug("Successfully connected using Streamable HTTP transport."), w;
  } catch (w) {
    r.debug(`StreamableHttp transport connection failed: ${w}`), r.debug("Falling back to HTTP+SSE transport...");
    try {
      const b = await Ou(l, $, g, s);
      return r.debug("Successfully connected using HTTP+SSE transport."), b;
    } catch (b) {
      throw r.error(
        `Failed to connect with either transport method:
1. Streamable HTTP error: ${w}
2. SSE error: ${b}`
      ), new Error(v("HTTP+SSE"));
    }
  }
}
async function Nw(e, t, r) {
  try {
    const n = {
      method: "tools/list",
      params: {}
    }, o = await e.request(n, ga, { signal: r });
    t.debug(`Found ${o.tools.length} tools`);
    for (const s of o.tools)
      t.debug(`  - ${s.name}: ${s.description}`);
    return o.tools;
  } catch (n) {
    return r != null && r.aborted ? t.debug("listTools request was aborted") : t.error(`Tools not supported by this server: ${n}`), [];
  }
}
const jw = async (e, t, r, n) => {
  var c;
  const o = Cu(e), s = await Pd(e, t.endpoint);
  if (!s) {
    o.error(
      `MCP endpoint constant ${(c = t.endpoint) == null ? void 0 : c.qualifiedName} does not have an accessible runtime value or default value.`
    );
    return;
  }
  const a = await e.network.httpProxy.getProxyUrl(s), i = await Rw({
    serverUrl: a,
    version: t.version ?? "",
    logger: o,
    protocolVersion: t.protocolVersion,
    headers: r,
    signal: n
  });
  try {
    return await Nw(i.client, o, n);
  } finally {
    await Ow(i, o);
  }
}, qw = async (e, t) => {
  var n;
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: (n = t.endpoint) == null ? void 0 : n.documentId
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
      const n = await Ad(r, t.endpoint);
      if (n === rt.Required)
        return "Endpoint is required.";
      if (n === rt.NotFound)
        return "Selected constant not found. It might have been deleted or renamed. Please update the constant selection.";
      if (n === rt.Excluded)
        return "Selected constant is excluded from the project and cannot be used.";
      if (n === rt.InvalidType)
        return "Selected constant must be of type string.";
      if (n === rt.PrivateValue || n === rt.EmptyValue)
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
        const n = await Td(
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
        if (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== Rd.HttpHeader)
          return "Authentication microflow must return a list of System.HttpHeader objects.";
      }
      break;
    }
    default:
      return !0;
  }
  return !0;
}, ws = (e, t, r) => ({ ...e, [t]: r }), zw = async (e, t, r) => {
  var i;
  let n;
  const o = new AbortController(), s = [
    {
      title: "Getting exposed tools",
      description: "Getting exposed tools",
      action: async () => {
        try {
          return n = await jw(e, t, r, o.signal), !0;
        } catch (c) {
          return o.signal.aborted ? !0 : c instanceof Error ? c.message : "Failed to load tools.";
        }
      }
    }
  ], a = await e.ui.dialogs.showProgressDialog("Getting exposed tools", s);
  switch (a.result) {
    case "Success":
      return n;
    case "UserCancelled":
      o.abort();
      return;
    case "Failure": {
      const c = "Failed to load tools.", d = `Check your connection and make sure your MCP server is available, then try again.
` + (((i = a.failedStep) == null ? void 0 : i.error) ?? "");
      await e.ui.messageBoxes.show("error", c, d);
      return;
    }
  }
}, Mw = async (e, t) => {
  var n;
  const r = await e.ui.elementSelectors.selectDocument({
    query: { elementType: "Microflows$Microflow" },
    allowNone: !0,
    selectedElementId: (n = t.authenticationMicroflow) == null ? void 0 : n.documentId
  });
  return r.status === "ok" ? {
    ...t,
    authenticationMicroflow: {
      documentId: r.selected.id,
      qualifiedName: r.selected.module + "." + r.selected.name
    }
  } : r.status === "none" ? { ...t, authenticationMicroflow: void 0 } : null;
}, Aw = async (e, t, r) => {
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
}, Dw = {
  isValidEndpoint: !0,
  isValidProtocolVersion: !0,
  isValidConnectionTimeout: !0,
  isValidAuthenticationMicroflow: !0
}, Uw = {
  endpoint: "isValidEndpoint",
  protocolVersion: "isValidProtocolVersion",
  connectionTimeoutSeconds: "isValidConnectionTimeout",
  authenticationMicroflow: "isValidAuthenticationMicroflow"
}, Vw = Id.map(
  (e) => ({
    key: e,
    caption: e
  })
), Lw = ({
  loadedConsumedMCPService: e,
  studioPro: t,
  updateStudioProDocument: r
}) => {
  var T, q, O;
  const [n, o] = De.useState(e), [s, a] = De.useState(Dw), [i, c] = De.useState([]), [d, l] = De.useState(!1), [g, $] = De.useState(null), [v, w] = De.useState(
    ((T = e.connectionTimeoutSeconds) == null ? void 0 : T.toString()) ?? ""
  ), [b, h] = De.useState([]), [_, u] = De.useState(!1);
  De.useEffect(() => {
    m("endpoint", n), m("authenticationMicroflow", n), u(!0);
  }, []), De.useEffect(() => {
    _ && o(e);
  }, [e]);
  const m = De.useCallback(
    async (f, E) => {
      const C = Uw[f];
      if (C) {
        const V = await yr(
          f,
          E,
          t
        );
        a((H) => ({ ...H, [C]: V }));
      }
    },
    [t]
  );
  De.useEffect(() => {
    (async () => {
      const E = {
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
      a(E);
    })();
  }, []);
  const S = (f) => {
    (n.endpoint && f.includes(n.endpoint.documentId) || f.includes("projectSettings")) && m("endpoint", n);
  };
  $d({
    studioPro: t,
    dependentIds: [(q = n.endpoint) == null ? void 0 : q.documentId].filter((f) => !!f),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: S
  });
  const p = De.useCallback(
    async (f, E) => {
      await r(f), await m(E, f);
    },
    [r, m]
  ), y = Md(p, Od), k = async () => {
    const f = await qw(t, n);
    f && (o(f), r(f), m("endpoint", f), c([]), l(!1));
  }, I = async () => {
    n.endpoint && Nd(t, n.endpoint);
  }, z = (f) => async (E) => {
    o((C) => {
      const V = ws(C, f, E);
      return r(V), m(f, V), V;
    });
  }, U = (f) => (E) => {
    o((C) => {
      const V = ws(C, f, E);
      return y(V, f), V;
    });
  }, M = (f) => {
    if (f !== "" && !/^\d+$/.test(f)) return;
    w(f);
    const E = f === "" ? void 0 : parseInt(f, 10);
    o((C) => {
      const V = ws(C, "connectionTimeoutSeconds", E);
      return y(V, "connectionTimeoutSeconds"), V;
    });
  }, F = async () => {
    const f = await Mw(t, n);
    f && (o(f), r(f), m("authenticationMicroflow", f));
  }, Z = async () => {
    n.authenticationMicroflow && jd(t, n.authenticationMicroflow);
  }, x = async () => {
    l(!1);
    const f = await zw(t, n, _e(b));
    if (f === void 0) {
      c([]), $(null);
      return;
    }
    c(f), l(!0), $(/* @__PURE__ */ new Date());
  }, te = async () => {
    const f = await Aw(t, qd, b);
    f && h(f);
  }, _e = (f) => f.filter(([E]) => E.trim() !== ""), we = (f) => _e(f).map((E) => E[0]).join(", "), ee = Object.values(s).some((f) => f !== !0), qe = s.isValidEndpoint === rt.PrivateValue || s.isValidEndpoint === rt.EmptyValue, A = () => s.isValidEndpoint === !0 || s.isValidEndpoint === rt.PrivateValue || s.isValidEndpoint === rt.EmptyValue ? !0 : s.isValidEndpoint;
  return /* @__PURE__ */ pe.jsxs(pd, { children: [
    /* @__PURE__ */ pe.jsxs(Ra, { children: [
      /* @__PURE__ */ pe.jsxs(Jo, { label: "General", children: [
        /* @__PURE__ */ pe.jsx(
          Oa,
          {
            label: "Version",
            ariaLabel: "Version",
            value: n.version === void 0 ? "" : n.version,
            onChange: U("version"),
            placeholder: "[1.0.0]"
          }
        ),
        /* @__PURE__ */ pe.jsx(
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
      /* @__PURE__ */ pe.jsxs(Jo, { label: "Configuration", children: [
        /* @__PURE__ */ pe.jsx(
          Go,
          {
            ariaLabel: "Endpoint",
            label: "Endpoint",
            value: ((O = n.endpoint) == null ? void 0 : O.qualifiedName) ?? "",
            icon: n.endpoint ? /* @__PURE__ */ pe.jsx(Dd, {}) : void 0,
            buttonCaption: "Select...",
            onClick: k,
            validate: () => A(),
            buttonCaptionSecondary: n.endpoint ? "Show" : void 0,
            onClickSecondary: n.endpoint ? I : void 0
          }
        ),
        qe && /* @__PURE__ */ pe.jsxs(Fd, { children: [
          /* @__PURE__ */ pe.jsx(wd, { children: s.isValidEndpoint === rt.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
          /* @__PURE__ */ pe.jsx("div", { children: s.isValidEndpoint === rt.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Consumed MCP Service locally, please set a valid value for the endpoint constant." })
        ] }),
        /* @__PURE__ */ pe.jsx(
          Go,
          {
            ariaLabel: "Credentials microflow",
            label: "Credentials microflow",
            value: n.authenticationMicroflow ? n.authenticationMicroflow.qualifiedName : "",
            icon: n.authenticationMicroflow ? /* @__PURE__ */ pe.jsx(Ld, {}) : void 0,
            description: "Optional: Select a microflow that generates credentials that will be used to authenticate to the MCP server. The microflow needs to return a list of System.HttpHeader objects. Input parameters are not allowed.",
            onClick: F,
            buttonCaption: "Select...",
            buttonCaptionSecondary: n.authenticationMicroflow ? "Show" : void 0,
            onClickSecondary: n.authenticationMicroflow ? Z : void 0,
            validate: () => s.isValidAuthenticationMicroflow
          }
        ),
        /* @__PURE__ */ pe.jsx(
          Ud,
          {
            ariaLabel: "Protocol version",
            label: "Protocol version",
            selectedKey: n.protocolVersion,
            options: Vw,
            onSelectionChange: z("protocolVersion"),
            validate: () => s.isValidProtocolVersion
          }
        ),
        /* @__PURE__ */ pe.jsx(
          Oa,
          {
            label: "Connection timeout (seconds)",
            ariaLabel: "Connection timeout",
            value: v,
            description: "Optional: Connection timeout controls the maximum time to wait for a response from the MCP server.",
            onChange: M,
            validate: () => s.isValidConnectionTimeout
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ pe.jsx(_d, { children: /* @__PURE__ */ pe.jsxs(Jo, { label: "MCP Tools Playground", children: [
      /* @__PURE__ */ pe.jsx(Ra, { children: /* @__PURE__ */ pe.jsx(
        Go,
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
      /* @__PURE__ */ pe.jsx(
        Vd,
        {
          label: "Tools",
          buttonCaption: "List tools",
          onPress: x,
          disabled: ee
        }
      ),
      d && /* @__PURE__ */ pe.jsxs(pe.Fragment, { children: [
        g && /* @__PURE__ */ pe.jsxs(bd, { children: [
          "Last updated: ",
          g.toLocaleString()
        ] }),
        /* @__PURE__ */ pe.jsx(
          Zd,
          {
            ariaLabel: "Tools table",
            columns: [
              {
                id: "name",
                caption: "Name",
                allowsResizing: !0,
                isRowHeader: !0,
                defaultWidth: 350
              },
              { id: "description", caption: "Description", allowsResizing: !0 }
            ],
            data: i.map((f) => [
              {
                cellContent: /* @__PURE__ */ pe.jsx(Sd, { icon: Cd, text: f.name }, f.name),
                tooltipText: f.name
              },
              { cellContent: f.description, tooltipText: f.description }
            ])
          }
        )
      ] })
    ] }) })
  ] });
}, Fw = zd(), Zw = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, n = e.app.model.customBlobDocuments, [o, s] = De.useState(0), [a, i] = De.useState(!1), [c, d] = De.useState(Fw);
  return De.useEffect(() => {
    const l = (g) => {
      const { documents: $ } = g;
      $.some((v) => v.documentId === t) && s((v) => v + 1);
    };
    return n.addEventListener("documentsChanged", l), () => {
      n.removeEventListener("documentsChanged", l);
    };
  }, []), De.useEffect(() => {
    n.getDocumentById(t).then(async (l) => {
      if (l && !("error" in l)) {
        const g = l.document.contents;
        i(!0), d(g);
      } else
        throw new Error((l == null ? void 0 : l.error) || "Document not found");
    }).catch(async (l) => {
      await r.show("error", "Error loading document", "Details: " + (l == null ? void 0 : l.message) || l), i(!0);
    });
  }, [o]), /* @__PURE__ */ pe.jsx(yd, { studioPro: e, children: /* @__PURE__ */ pe.jsxs(gd, { children: [
    !a && /* @__PURE__ */ pe.jsx(kd, {}),
    a && /* @__PURE__ */ pe.jsx(vd, { children: /* @__PURE__ */ pe.jsx(
      Lw,
      {
        loadedConsumedMCPService: c,
        studioPro: e,
        updateStudioProDocument: Hd(e, t)
      }
    ) })
  ] }) });
}, t0 = Ed(Zw);
export {
  t0 as component
};
