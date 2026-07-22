import { r as u, T as c, aj as f, S as k } from "./PageContainers-BvK5usmz.js";
import { M as r, b as g } from "./compatibility-B4OgVO3B.js";
import { m as v } from "./documentInitUtils-CLdpbIQ7.js";
import { j as M } from "./jsx-runtime-CWOFuNcx.js";
const y = [
  {
    name: "CommunityCommons",
    appStoreGuid: "9dc402fd-e38d-420d-abbe-9fe0ecad6f82",
    range: "[11.0.0, )",
    marketplaceComponentId: "170"
  },
  {
    name: "Encryption",
    appStoreGuid: "b40235fa-3168-4f0a-8d6c-c9c8ad652514",
    range: "[11.0.0, )",
    marketplaceComponentId: "1011"
  },
  {
    name: "GenAICommons",
    appStoreGuid: "7626b7d5-70dc-4981-bb9f-a4d7d9b53f07",
    range: "[7.0.0, 8.0.0)",
    marketplaceComponentId: "239448"
  },
  {
    name: "AgentCommons",
    appStoreGuid: "a30c0353-07aa-4f89-92a8-0b2a94172829",
    range: "[4.0.0, 5.0.0)",
    marketplaceComponentId: "240371"
  },
  {
    name: "ConversationalUI",
    appStoreGuid: "821a28ea-8ffb-4d19-854e-381b671fe473",
    range: "[7.0.0, 8.0.0)",
    marketplaceComponentId: "239450"
  },
  {
    name: "MxGenAIConnector",
    appStoreGuid: "d57cf974-01cf-4208-a5c1-01f2917add49",
    range: "[7.0.0, 8.0.0)",
    marketplaceComponentId: "239449"
  },
  {
    name: "MCPClient",
    appStoreGuid: "81cb63bb-26d3-4518-89b1-c94481fe7421",
    range: "[4.0.0, 5.0.0)",
    marketplaceComponentId: "244893"
  }
];
function b(t, n) {
  const e = t.split(".").map(Number), o = n.split(".").map(Number), a = Math.max(e.length, o.length);
  for (let s = 0; s < a; s++) {
    const i = e[s] ?? 0, l = o[s] ?? 0;
    if (i !== l) return i - l;
  }
  return 0;
}
function I(t) {
  const n = t.trim();
  if (n.length < 3)
    throw new Error(`Invalid Maven range: "${t}"`);
  const e = n[0], o = n[n.length - 1];
  if (e !== "[" && e !== "(" || o !== "]" && o !== ")")
    throw new Error(`Invalid Maven range: "${t}"`);
  const a = e === "[", s = o === "]", i = n.slice(1, -1), l = i.indexOf(",");
  if (l === -1) {
    const p = i.trim();
    if (!p)
      throw new Error(`Invalid Maven range: "${t}"`);
    return { lower: p, lowerInclusive: !0, upper: p, upperInclusive: !0 };
  }
  const d = i.slice(0, l).trim(), m = i.slice(l + 1).trim();
  return {
    lower: d || null,
    lowerInclusive: a,
    upper: m || null,
    upperInclusive: s
  };
}
function $(t, n) {
  if (n.lower !== null) {
    const e = b(t, n.lower);
    if (n.lowerInclusive ? e < 0 : e <= 0) return !1;
  }
  if (n.upper !== null) {
    const e = b(t, n.upper);
    if (n.upperInclusive ? e > 0 : e >= 0) return !1;
  }
  return !0;
}
function E(t) {
  const n = I(t);
  if (n.lower !== null && n.upper !== null && n.lower === n.upper)
    return `= ${n.lower}`;
  const e = [];
  return n.lower !== null && e.push(`${n.lowerInclusive ? ">=" : ">"} ${n.lower}`), n.upper !== null && e.push(`${n.upperInclusive ? "<=" : "<"} ${n.upper}`), e.join(" and ");
}
function G(t, n) {
  if (t.appStoreGuid) {
    const e = n.find((o) => o.appStoreGuid === t.appStoreGuid);
    if (e) return e;
  }
  return n.find((e) => e.name === t.name);
}
function x(t, n) {
  return t.map((e) => {
    const o = G(e, n), a = E(e.range);
    if (!o)
      return {
        module: e.name,
        installedVersion: "-",
        requiredRange: a,
        status: r.Missing,
        note: g.missing(e.name),
        marketplaceComponentId: e.marketplaceComponentId
      };
    if (!o.fromAppStore || !o.appStoreVersion)
      return {
        module: e.name,
        installedVersion: "No version",
        requiredRange: a,
        status: r.Unknown,
        note: g.unknown(e.name),
        marketplaceComponentId: e.marketplaceComponentId
      };
    const s = I(e.range);
    return $(o.appStoreVersion, s) ? {
      module: e.name,
      installedVersion: o.appStoreVersion,
      requiredRange: a,
      status: r.Compatible,
      note: g.compatible(e.name, o.appStoreVersion)
    } : {
      module: e.name,
      installedVersion: o.appStoreVersion,
      requiredRange: a,
      status: r.Incompatible,
      note: g.incompatible(e.name, o.appStoreVersion),
      marketplaceComponentId: e.marketplaceComponentId
    };
  });
}
const V = {
  // Currently not used since MxGenAIConnector is not a yet conditional dependency
  // Set MxGenAIConnector conditional to true when MxGenAIConnectod module is decoupled
  MxGenAIConnector: async (t) => {
    const n = await t.app.model.customBlobDocuments.getDocumentsOfType(v);
    for (const e of n) {
      const o = await t.app.model.customBlobDocuments.getDocumentById(e.id);
      if ("document" in o && o.document?.contents.provider === "MxCloudGenAI")
        return !0;
    }
    return !1;
  }
};
async function R(t, n) {
  const e = [];
  for (const o of t) {
    if (!o.conditional) {
      e.push(o);
      continue;
    }
    const a = V[o.name];
    if (!a) {
      e.push(o);
      continue;
    }
    await a(n) && e.push(o);
  }
  return e;
}
const O = (t, n) => {
  if (t)
    return r.Unknown;
  let e = !1, o = !1;
  for (const a of n)
    (a.status === r.Incompatible || a.status === r.Missing) && (e = !0), a.status === r.Unknown && (o = !0);
  return e ? r.Incompatible : o ? r.Unknown : r.Compatible;
}, N = (t) => {
  const [n, e] = u.useState([]), [o, a] = u.useState("2.0.0"), [s, i] = u.useState(!0), [l, d] = u.useState(!1), m = u.useCallback(async () => {
    i(!0), d(!1);
    try {
      const [p, w] = await Promise.all([
        t.app.model.modules.getModules(),
        R(y, t)
      ]), C = x(w, p);
      e(C);
      const h = p.find((S) => S.name === "AgentEditor");
      a(h?.appStoreVersion || "2.0.0");
    } catch {
      d(!0);
    } finally {
      i(!1);
    }
  }, [t]);
  return u.useEffect(() => {
    m();
  }, [m]), { data: n, agentEditorVersion: o, isPending: s, isError: l, refresh: m };
};
function Y(t) {
  u.useEffect(() => {
    const n = new AbortController();
    return window.addEventListener(
      "visibilitychange",
      () => {
        document.visibilityState === "visible" && t();
      },
      { signal: n.signal }
    ), () => n.abort();
  }, [t]);
}
const B = {
  [r.Compatible]: f`
        background: ${c.colorsLightBrandGreen1};
        color: ${c.colorsLightBrandGreen9};
    `,
  [r.Incompatible]: f`
        background: ${c.colorsLightBrandRed1};
        color: ${c.colorsLightBrandRed8};
    `,
  [r.Missing]: f`
        background: ${c.colorsLightBrandRed1};
        color: ${c.colorsLightBrandRed8};
    `,
  [r.Unknown]: f`
        background: ${c.colorsLightBrandYellow1};
        color: ${c.colorsLightBrandYellow9};
    `
}, L = {
  [r.Compatible]: "Compatible",
  [r.Incompatible]: "Incompatible",
  [r.Missing]: "Missing",
  [r.Unknown]: "Unknown"
}, A = k.span`
    display: inline-block;
    padding: 2px 4px;
    border-radius: 2px;
    font-size: 10px;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    ${({ $status: t }) => B[t]}
`, q = ({ status: t }) => /* @__PURE__ */ M.jsx(A, { $status: t, children: L[t] });
export {
  q as S,
  Y as a,
  O as g,
  N as u
};
