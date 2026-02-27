import { aI as d, ae as o, r as a } from "./TextInputWithIcon-D0NqO6mp.js";
import { t as i } from "./DesignSystemTokens-XeI_xSox.js";
function p(r) {
  return {
    async loaded(n, c) {
      const s = i(n), { documentId: t } = c, e = document.getElementById("root");
      if (!e) throw new Error("Failed to find the root element");
      d.createRoot(e).render(
        /* @__PURE__ */ o.jsx(a.StrictMode, { children: t === null ? /* @__PURE__ */ o.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ o.jsx(r, { studioPro: s, documentId: t }) })
      );
    }
  };
}
export {
  p as c
};
//# sourceMappingURL=componentLoader-CwEBvQVI.js.map
