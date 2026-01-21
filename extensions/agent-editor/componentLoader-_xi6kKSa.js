import { aI as d, ae as o, r as m } from "./TextInputWithIcon-B3kv_B9i.js";
import { m as a } from "./logger-BM6R1Quw.js";
function p(r) {
  return {
    async loaded(n, c) {
      const s = a(n), { documentId: t } = c, e = document.getElementById("root");
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
//# sourceMappingURL=componentLoader-_xi6kKSa.js.map
