import { m as p, l as w, K as b } from "./documentInitUtils-COeMuvhV.js";
import { M as m } from "./model-BUBkL5rT.js";
const D = "compatibilityView", y = "Compatibility Overview", s = {
  Compatible: "compatible",
  Incompatible: "incompatible",
  Missing: "missing",
  Unknown: "unknown"
}, c = {
  compatible: (t, n) => `Module "${t}" v${n} is compatible.`,
  incompatible: (t, n) => `Module "${t}" v${n} is outside the compatible range.`,
  missing: (t) => `Module "${t}" is missing.`,
  unknown: (t) => `Module "${t}" is installed but version cannot be determined.`
};
function d(t, n) {
  const e = t.split(".").map(Number), o = n.split(".").map(Number), r = Math.max(e.length, o.length);
  for (let i = 0; i < r; i++) {
    const a = e[i] ?? 0, u = o[i] ?? 0;
    if (a !== u) return a - u;
  }
  return 0;
}
function f(t) {
  const n = t.trim();
  if (n.length < 3)
    throw new Error(`Invalid Maven range: "${t}"`);
  const e = n[0], o = n[n.length - 1];
  if (e !== "[" && e !== "(" || o !== "]" && o !== ")")
    throw new Error(`Invalid Maven range: "${t}"`);
  const r = e === "[", i = o === "]", a = n.slice(1, -1), u = a.indexOf(",");
  if (u === -1) {
    const l = a.trim();
    if (!l)
      throw new Error(`Invalid Maven range: "${t}"`);
    return { lower: l, lowerInclusive: !0, upper: l, upperInclusive: !0 };
  }
  const I = a.slice(0, u).trim(), g = a.slice(u + 1).trim();
  return {
    lower: I || null,
    lowerInclusive: r,
    upper: g || null,
    upperInclusive: i
  };
}
function S(t, n) {
  if (n.lower !== null) {
    const e = d(t, n.lower);
    if (n.lowerInclusive ? e < 0 : e <= 0) return !1;
  }
  if (n.upper !== null) {
    const e = d(t, n.upper);
    if (n.upperInclusive ? e > 0 : e >= 0) return !1;
  }
  return !0;
}
function v(t) {
  const n = f(t);
  if (n.lower !== null && n.upper !== null && n.lower === n.upper)
    return `= ${n.lower}`;
  const e = [];
  return n.lower !== null && e.push(`${n.lowerInclusive ? ">=" : ">"} ${n.lower}`), n.upper !== null && e.push(`${n.upperInclusive ? "<=" : "<"} ${n.upper}`), e.join(" and ");
}
function M(t, n) {
  if (t.appStorePackageIdString) {
    const e = n.find((o) => o.appStorePackageIdString === t.appStorePackageIdString);
    if (e) return e;
  }
  return n.find((e) => e.name === t.name);
}
function C(t, n, e) {
  return t.some((o) => o.appStorePackageIdString === n || o.name === e);
}
function B(t, n) {
  return t.map((e) => {
    const o = M(e, n), r = v(e.range);
    if (!o)
      return {
        module: e.name,
        installedVersion: "-",
        requiredRange: r,
        status: s.Missing,
        note: c.missing(e.name),
        appStorePackageIdString: e.appStorePackageIdString
      };
    if (!o.fromAppStore || !o.appStoreVersion)
      return {
        module: e.name,
        installedVersion: "No version",
        requiredRange: r,
        status: s.Unknown,
        note: c.unknown(e.name),
        appStorePackageIdString: e.appStorePackageIdString
      };
    const i = f(e.range);
    return S(o.appStoreVersion, i) ? {
      module: e.name,
      installedVersion: o.appStoreVersion,
      requiredRange: r,
      status: s.Compatible,
      note: c.compatible(e.name, o.appStoreVersion)
    } : {
      module: e.name,
      installedVersion: o.appStoreVersion,
      requiredRange: r,
      status: s.Incompatible,
      note: c.incompatible(e.name, o.appStoreVersion),
      appStorePackageIdString: e.appStorePackageIdString
    };
  });
}
const h = {
  MxGenAIConnector: async (t) => {
    const n = await t.app.model.customBlobDocuments.getDocumentsOfType(p);
    for (const o of n) {
      const r = await t.app.model.customBlobDocuments.getDocumentById(o.id);
      if ("document" in r && !r.document.excluded && r.document?.contents.provider === m.MxCloudGenAI)
        return !0;
    }
    const e = await t.app.model.customBlobDocuments.getDocumentsOfType(w);
    for (const o of e) {
      const r = await t.app.model.customBlobDocuments.getDocumentById(o.id);
      if ("document" in r && !r.document.excluded && r.document?.contents.provider === b.MxCloudGenAI)
        return !0;
    }
    return !1;
  },
  OpenAIConnector: async (t) => {
    const n = await t.app.model.customBlobDocuments.getDocumentsOfType(p);
    for (const e of n) {
      const o = await t.app.model.customBlobDocuments.getDocumentById(e.id);
      if ("document" in o && !o.document.excluded && o.document?.contents.provider === m.Azure)
        return !0;
    }
    return !1;
  }
};
async function $(t, n) {
  const e = [];
  for (const o of t) {
    if (!o.conditional) {
      e.push(o);
      continue;
    }
    const r = h[o.name];
    if (!r) {
      e.push(o);
      continue;
    }
    await r(n) && e.push(o);
  }
  return e;
}
const V = (t, n) => {
  if (t)
    return s.Unknown;
  let e = !1, o = !1;
  for (const r of n)
    (r.status === s.Incompatible || r.status === s.Missing) && (e = !0), r.status === s.Unknown && (o = !0);
  return e ? s.Incompatible : o ? s.Unknown : s.Compatible;
};
export {
  y as C,
  s as M,
  D as a,
  B as e,
  $ as f,
  V as g,
  C as i
};
