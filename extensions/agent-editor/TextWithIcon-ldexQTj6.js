import { r as c, A as s, x as t, a0 as j, a1 as y, H as v } from "./Icon-Bb5knnP8.js";
import { G as E, H as w } from "./index-DkFXQr22.js";
import { r as C } from "./index-CfghFsoU.js";
const $ = ({
  studioPro: e,
  dependentIds: n,
  onDependentDocumentsChanged: i,
  watchProjectSettings: o,
  watchDomainModelModules: r
}) => {
  const l = c.useRef(i);
  l.current = i;
  const u = c.useRef(n);
  u.current = n;
  const m = c.useRef(r);
  m.current = r;
  const p = c.useRef(o);
  p.current = o, c.useEffect(() => {
    const f = ({ documents: x }) => {
      const d = [];
      for (const a of x)
        m.current && a.documentType === E && a.moduleName && m.current.includes(a.moduleName) ? d.push("domainModel") : p.current && a.documentType === w ? d.push("projectSettings") : u.current.includes(a.documentId) && d.push(a.documentId);
      d.length > 0 && l.current(d);
    };
    return e.app.projectChanges.addEventListener("documentsChanged", f), () => {
      e.app.projectChanges.removeEventListener("documentsChanged", f);
    };
  }, [e.app.projectChanges]);
};
var I = Object.defineProperty, h = (e, n) => I(e, "name", { value: n, configurable: !0 });
h(() => t.jsx(g, { style: "small" }), "LoadingSpinnerInline");
const g = h(({ style: e = "large", centered: n = !1, ...i }) => {
  const o = e === "large" ? 64 : 16, r = t.jsx(j, { ...i, isIndeterminate: !0, "aria-label": "Loading...", children: () => t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: o, height: o, viewBox: "0 0 16 16", fill: "none", children: [t.jsx(T, { cx: "8", cy: "8", r: "6.5" }), t.jsx(S, { d: "M8 1c3.866 0 7 3.13401 7 7 0 .27614-.2239.5-.5.5S14 8.27614 14 8c0-3.31371-2.6863-6-6-6-3.31371 0-6 2.68629-6 6 0 .27614-.22386.5-.5.5S1 8.27614 1 8c0-3.86599 3.13401-7 7-7Z" })] }) });
  return n ? t.jsx(R, { children: r }) : r;
}, "LoadingSpinner"), T = s.circle`
    stroke: ${({ theme: e }) => e.colorsAccentSubtlestGrey};
`, S = s.path`
    @keyframes rotate {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }

    fill: ${({ theme: e }) => e.colorsAccentDefaultBlue};

    animation: rotate;
    animation-direction: normal;
    animation-duration: 1.125s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: center;
`, R = s.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`, B = () => {
  const e = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
  };
  return /* @__PURE__ */ t.jsx("div", { style: e, "data-testid": "loading-spinner", children: /* @__PURE__ */ t.jsx(g, {}) });
};
function k(e) {
  return {
    async loaded(n, i) {
      const o = C(n), { documentId: r } = i, l = document.getElementById("root");
      if (!l) throw new Error("Failed to find the root element");
      y.createRoot(l).render(
        /* @__PURE__ */ t.jsx(c.StrictMode, { children: r === null ? /* @__PURE__ */ t.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ t.jsx(e, { studioPro: o, documentId: r }) })
      );
    }
  };
}
const A = s.div`
    font-weight: 600;
`, b = s.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, D = ({ icon: e }) => /* @__PURE__ */ t.jsx(b, { children: typeof e == "string" ? /* @__PURE__ */ t.jsx(v, { src: e }) : e }), L = s.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, M = s.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, G = ({ icon: e, text: n }) => /* @__PURE__ */ t.jsxs(L, { children: [
  e && /* @__PURE__ */ t.jsx(D, { icon: e }),
  /* @__PURE__ */ t.jsx(M, { children: n })
] });
export {
  A as B,
  B as C,
  D as I,
  G as T,
  k as c,
  $ as u
};
