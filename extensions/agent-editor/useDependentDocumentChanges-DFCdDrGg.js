import { d as E, j as f } from "./jsx-runtime-CWOFuNcx.js";
import { o as g, g as h } from "./settings-Bgs47ll9.js";
import { createStudioProLogger as R } from "./logger-gMbuSAUF.js";
import { createAnalyticsService as j } from "./analytics-Bu9vEdQD.js";
import { ad as C, r as o } from "./PageContainers-BqHFWUr4.js";
import { D as T, a as D } from "./studioPro-BAnarQ8w.js";
function _(n) {
  return {
    async loaded(r, d) {
      const e = E(r), i = g(r), m = R(e), p = await h(e), c = j(i, p, m), { documentId: s } = d, a = document.getElementById("root");
      if (!a) throw new Error("Failed to find the root element");
      C.createRoot(a).render(
        /* @__PURE__ */ f.jsx(o.StrictMode, { children: s === null ? /* @__PURE__ */ f.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ f.jsx(
          n,
          {
            studioPro: e,
            analyticsService: c,
            documentId: s
          }
        ) })
      );
    }
  };
}
const v = ({
  studioPro: n,
  dependentIds: r,
  onDependentDocumentsChanged: d,
  watchProjectSettings: e,
  watchDomainModelModules: i
}) => {
  const m = o.useRef(d);
  m.current = d;
  const p = o.useRef(r);
  p.current = r;
  const c = o.useRef(i);
  c.current = i;
  const s = o.useRef(e);
  s.current = e, o.useEffect(() => {
    const a = ({ documents: l }) => {
      const u = [];
      for (const t of l)
        c.current && t.documentType === T && t.moduleName && c.current.includes(t.moduleName) ? u.push("domainModel") : s.current && t.documentType === D ? u.push("projectSettings") : p.current.includes(t.documentId) && u.push(t.documentId);
      u.length > 0 && m.current(u);
    };
    return n.app.projectChanges.addEventListener("documentsChanged", a), () => {
      n.app.projectChanges.removeEventListener("documentsChanged", a);
    };
  }, [n.app.projectChanges]);
};
export {
  _ as c,
  v as u
};
