import { aJ as d, j as o, r as m } from "./TextInputWithIcon-elAaw22_.js";
import { m as i } from "./logger-BM6R1Quw.js";
function p(r) {
  return {
    async loaded(n, c) {
      const s = i(n), { documentId: t } = c, e = document.getElementById("root");
      if (!e) throw new Error("Failed to find the root element");
      d.createRoot(e).render(
        /* @__PURE__ */ o.jsx(m.StrictMode, { children: t == null ? /* @__PURE__ */ o.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ o.jsx(r, { studioPro: s, documentId: t }) })
      );
    }
  };
}
export {
  p as c
};
//# sourceMappingURL=componentLoader-Cv8RpErS.js.map
