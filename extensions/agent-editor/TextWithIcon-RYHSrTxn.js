import { d as h, j as t } from "./jsx-runtime-CWOFuNcx.js";
import { o as x, g as E } from "./modelIcons-DAQ1b1a0.js";
import { createStudioProLogger as T } from "./logger-gMbuSAUF.js";
import { createAnalyticsService as j } from "./analytics-DSd6ibhT.js";
import { ad as C, r as s, S as l, a1 as v } from "./PageContainers-B4e_cfEm.js";
import { D as y, a as I } from "./studioPro-BAnarQ8w.js";
function P(e) {
  return {
    async loaded(o, u) {
      const n = h(o), p = x(o), f = T(n), m = await E(n), c = j(p, m, f), { documentId: a } = u, i = document.getElementById("root");
      if (!i) throw new Error("Failed to find the root element");
      C.createRoot(i).render(
        /* @__PURE__ */ t.jsx(s.StrictMode, { children: a === null ? /* @__PURE__ */ t.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ t.jsx(
          e,
          {
            studioPro: n,
            analyticsService: c,
            documentId: a
          }
        ) })
      );
    }
  };
}
const B = ({
  studioPro: e,
  dependentIds: o,
  onDependentDocumentsChanged: u,
  watchProjectSettings: n,
  watchDomainModelModules: p
}) => {
  const f = s.useRef(u);
  f.current = u;
  const m = s.useRef(o);
  m.current = o;
  const c = s.useRef(p);
  c.current = p;
  const a = s.useRef(n);
  a.current = n, s.useEffect(() => {
    const i = ({ documents: g }) => {
      const d = [];
      for (const r of g)
        c.current && r.documentType === y && r.moduleName && c.current.includes(r.moduleName) ? d.push("domainModel") : a.current && r.documentType === I ? d.push("projectSettings") : m.current.includes(r.documentId) && d.push(r.documentId);
      d.length > 0 && f.current(d);
    };
    return e.app.projectChanges.addEventListener("documentsChanged", i), () => {
      e.app.projectChanges.removeEventListener("documentsChanged", i);
    };
  }, [e.app.projectChanges]);
}, W = l.div`
    font-weight: 600;
`, k = l.div`
    font-size: 10px;
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
`, R = l.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, S = ({ icon: e }) => /* @__PURE__ */ t.jsx(R, { children: typeof e == "string" ? /* @__PURE__ */ t.jsx(v, { src: e }) : e }), D = l.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, w = l.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, U = ({ icon: e, text: o }) => /* @__PURE__ */ t.jsxs(D, { children: [
  e && /* @__PURE__ */ t.jsx(S, { icon: e }),
  /* @__PURE__ */ t.jsx(w, { children: o })
] });
export {
  W as B,
  k as C,
  S as I,
  U as T,
  P as c,
  B as u
};
