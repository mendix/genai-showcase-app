import { d as x, j as t } from "./jsx-runtime-CWOFuNcx.js";
import { ad as E, r, S as d, a1 as g } from "./PageContainers-CRZszOq7.js";
import { D as T, a as j } from "./studioPro-D79eumit.js";
function S(e) {
  return {
    async loaded(n, i) {
      const u = x(n), { documentId: s } = i, c = document.getElementById("root");
      if (!c) throw new Error("Failed to find the root element");
      E.createRoot(c).render(
        /* @__PURE__ */ t.jsx(r.StrictMode, { children: s === null ? /* @__PURE__ */ t.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ t.jsx(e, { studioPro: u, documentId: s }) })
      );
    }
  };
}
const M = ({
  studioPro: e,
  dependentIds: n,
  onDependentDocumentsChanged: i,
  watchProjectSettings: u,
  watchDomainModelModules: s
}) => {
  const c = r.useRef(i);
  c.current = i;
  const l = r.useRef(n);
  l.current = n;
  const p = r.useRef(s);
  p.current = s;
  const f = r.useRef(u);
  f.current = u, r.useEffect(() => {
    const m = ({ documents: h }) => {
      const a = [];
      for (const o of h)
        p.current && o.documentType === T && o.moduleName && p.current.includes(o.moduleName) ? a.push("domainModel") : f.current && o.documentType === j ? a.push("projectSettings") : l.current.includes(o.documentId) && a.push(o.documentId);
      a.length > 0 && c.current(a);
    };
    return e.app.projectChanges.addEventListener("documentsChanged", m), () => {
      e.app.projectChanges.removeEventListener("documentsChanged", m);
    };
  }, [e.app.projectChanges]);
}, N = d.div`
    font-weight: 600;
`, _ = d.div`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, C = d.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, R = ({ icon: e }) => /* @__PURE__ */ t.jsx(C, { children: typeof e == "string" ? /* @__PURE__ */ t.jsx(g, { src: e }) : e }), I = d.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, v = d.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, O = ({ icon: e, text: n }) => /* @__PURE__ */ t.jsxs(I, { children: [
  e && /* @__PURE__ */ t.jsx(R, { icon: e }),
  /* @__PURE__ */ t.jsx(v, { children: n })
] });
export {
  N as B,
  _ as C,
  R as I,
  O as T,
  S as c,
  M as u
};
