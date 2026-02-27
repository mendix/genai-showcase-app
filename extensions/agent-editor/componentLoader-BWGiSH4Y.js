import { aL as d, w as o, r as i } from "./TextInputWithIcon-DV8OPSOf.js";
import { t as m } from "./logger-DMIubLZm.js";
function p(r) {
  return {
    async loaded(n, c) {
      const s = m(n), { documentId: t } = c, e = document.getElementById("root");
      if (!e) throw new Error("Failed to find the root element");
      d.createRoot(e).render(
        /* @__PURE__ */ o.jsx(i.StrictMode, { children: t === null ? /* @__PURE__ */ o.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ o.jsx(r, { studioPro: s, documentId: t }) })
      );
    }
  };
}
export {
  p as c
};
//# sourceMappingURL=componentLoader-BWGiSH4Y.js.map
