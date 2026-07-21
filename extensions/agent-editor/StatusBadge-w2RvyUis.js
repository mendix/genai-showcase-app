import { r as a, T as n, aj as r, S as I } from "./PageContainers-BqHFWUr4.js";
import { f as C, e as h, M as t } from "./compatibilityUtils-R3Pg1ddN.js";
import { j as E } from "./jsx-runtime-CWOFuNcx.js";
const M = [
  {
    name: "CommunityCommons",
    range: "[11.0.0, )",
    appStorePackageIdString: "170"
  },
  {
    name: "Encryption",
    range: "[11.0.0, )",
    appStorePackageIdString: "1011"
  },
  {
    name: "GenAICommons",
    range: "[7.1.0, 8.0.0)",
    appStorePackageIdString: "239448"
  },
  {
    name: "AgentCommons",
    range: "[4.1.0, 5.0.0)",
    appStorePackageIdString: "240371"
  },
  {
    name: "ConversationalUI",
    range: "[7.1.0, 8.0.0)",
    appStorePackageIdString: "239450"
  },
  {
    name: "MCPClient",
    range: "[4.1.0, 5.0.0)",
    appStorePackageIdString: "244893"
  },
  {
    name: "MxGenAIConnector",
    range: "[7.1.0, 8.0.0)",
    appStorePackageIdString: "239449",
    conditional: !0
  },
  {
    name: "OpenAIConnector",
    range: "[9.1.0, 10.0.0)",
    appStorePackageIdString: "220472",
    conditional: !0
  }
], $ = (e) => {
  const [o, d] = a.useState([]), [g, p] = a.useState("2.1.0"), [m, i] = a.useState(!0), [u, l] = a.useState(!1), s = a.useCallback(async () => {
    i(!0), l(!1);
    try {
      const [c, S] = await Promise.all([
        e.app.model.modules.getModules(),
        C(M, e)
      ]), b = h(S, c);
      d(b);
      const f = c.find((k) => k.name === "AgentEditor");
      p(f?.appStoreVersion || "2.1.0");
    } catch {
      l(!0);
    } finally {
      i(!1);
    }
  }, [e]);
  return a.useEffect(() => {
    s();
  }, [s]), { data: o, agentEditorVersion: g, isPending: m, isError: u, refresh: s };
};
function A(e) {
  a.useEffect(() => {
    const o = new AbortController();
    return window.addEventListener(
      "visibilitychange",
      () => {
        document.visibilityState === "visible" && e();
      },
      { signal: o.signal }
    ), () => o.abort();
  }, [e]);
}
const x = {
  [t.Compatible]: r`
        background: ${n.colorsLightBrandGreen1};
        color: ${n.colorsLightBrandGreen9};
    `,
  [t.Incompatible]: r`
        background: ${n.colorsLightBrandRed1};
        color: ${n.colorsLightBrandRed8};
    `,
  [t.Missing]: r`
        background: ${n.colorsLightBrandRed1};
        color: ${n.colorsLightBrandRed8};
    `,
  [t.Unknown]: r`
        background: ${n.colorsLightBrandYellow1};
        color: ${n.colorsLightBrandYellow9};
    `
}, y = {
  [t.Compatible]: "Compatible",
  [t.Incompatible]: "Incompatible",
  [t.Missing]: "Missing",
  [t.Unknown]: "Unknown"
}, L = I.span`
    display: inline-block;
    padding: 2px 4px;
    border-radius: 2px;
    font-size: 10px;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    ${({ $status: e }) => x[e]}
`, v = ({ status: e }) => /* @__PURE__ */ E.jsx(L, { $status: e, children: y[e] });
export {
  v as S,
  A as a,
  $ as u
};
