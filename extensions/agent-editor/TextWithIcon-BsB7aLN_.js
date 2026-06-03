import { T as o, R as t, an as j, ao as y, r as c, a5 as v } from "./formelements-DgWWXRMR.js";
import { c as E } from "./index-CE9RqUwp.js";
import { I as T, J as w } from "./index-Cosn4mN0.js";
var C = Object.defineProperty, h = (e, n) => C(e, "name", { value: n, configurable: !0 });
h(() => t.jsx(x, { style: "small" }), "LoadingSpinnerInline");
const x = h(({ style: e = "large", centered: n = !1, ...a }) => {
  const s = e === "large" ? 64 : 16, r = t.jsx(j, { ...a, isIndeterminate: !0, "aria-label": "Loading...", children: () => t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: s, height: s, viewBox: "0 0 16 16", fill: "none", children: [t.jsx(I, { cx: "8", cy: "8", r: "6.5" }), t.jsx(S, { d: "M8 1c3.866 0 7 3.13401 7 7 0 .27614-.2239.5-.5.5S14 8.27614 14 8c0-3.31371-2.6863-6-6-6-3.31371 0-6 2.68629-6 6 0 .27614-.22386.5-.5.5S1 8.27614 1 8c0-3.86599 3.13401-7 7-7Z" })] }) });
  return n ? t.jsx(R, { children: r }) : r;
}, "LoadingSpinner"), I = o.circle`
    stroke: ${({ theme: e }) => e.colorsAccentSubtlestGrey};
`, S = o.path`
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
`, R = o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`, $ = () => {
  const e = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
  };
  return /* @__PURE__ */ t.jsx("div", { style: e, "data-testid": "loading-spinner", children: /* @__PURE__ */ t.jsx(x, {}) });
};
function B(e) {
  return {
    async loaded(n, a) {
      const s = E(n), { documentId: r } = a, l = document.getElementById("root");
      if (!l) throw new Error("Failed to find the root element");
      y.createRoot(l).render(
        /* @__PURE__ */ t.jsx(c.StrictMode, { children: r === null ? /* @__PURE__ */ t.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ t.jsx(e, { studioPro: s, documentId: r }) })
      );
    }
  };
}
const k = ({
  studioPro: e,
  dependentIds: n,
  onDependentDocumentsChanged: a,
  watchProjectSettings: s,
  watchDomainModelModules: r
}) => {
  const l = c.useRef(a);
  l.current = a;
  const u = c.useRef(n);
  u.current = n;
  const p = c.useRef(r);
  p.current = r;
  const f = c.useRef(s);
  f.current = s, c.useEffect(() => {
    const m = ({ documents: g }) => {
      const d = [];
      for (const i of g)
        p.current && i.documentType === T && i.moduleName && p.current.includes(i.moduleName) ? d.push("domainModel") : f.current && i.documentType === w ? d.push("projectSettings") : u.current.includes(i.documentId) && d.push(i.documentId);
      d.length > 0 && l.current(d);
    };
    return e.app.projectChanges.addEventListener("documentsChanged", m), () => {
      e.app.projectChanges.removeEventListener("documentsChanged", m);
    };
  }, [e.app.projectChanges]);
}, A = o.div`
    font-weight: 600;
`, P = o.div`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, D = o.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, b = ({ icon: e }) => /* @__PURE__ */ t.jsx(D, { children: typeof e == "string" ? /* @__PURE__ */ t.jsx(v, { src: e }) : e }), L = o.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, M = o.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, W = ({ icon: e, text: n }) => /* @__PURE__ */ t.jsxs(L, { children: [
  e && /* @__PURE__ */ t.jsx(b, { icon: e }),
  /* @__PURE__ */ t.jsx(M, { children: n })
] });
export {
  A as B,
  $ as C,
  b as I,
  W as T,
  P as a,
  B as c,
  k as u
};
