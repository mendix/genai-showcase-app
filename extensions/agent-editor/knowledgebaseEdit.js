import { r as c, w as a, D as b, P as w, E as x, C, G as f } from "./TextInputWithIcon-Bxcjz2pl.js";
import { c as D } from "./logger-CC_FxqwC.js";
import { T as E } from "./TextInputLabeled-Cr8pg4pf.js";
import { c as j, C as L } from "./CenteredLoadingSpinner-GhVhA5yR.js";
function v(n) {
  return {
    name: ""
  };
}
const y = (n, s, r, t, o) => async (l) => {
  const i = { ...r, [s]: l };
  t(i), B(n, i, o);
}, B = async (n, s, r) => {
  const t = D(n);
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(r, s);
  } catch (o) {
    t.error("Failed to save knowledgebasedocument:", o), n.ui.notifications.show({
      title: "Failed to save document",
      message: o.message
    });
  }
}, K = v(), k = ({ studioPro: n, documentId: s }) => {
  const r = n.ui.messageBoxes, t = n.app.model.customBlobDocuments, [o, l] = c.useState(0), [i, h] = c.useState(!1), [m, u] = c.useState(K);
  return c.useCallback(
    (e) => y(n, e, m, u, s),
    [n, m, u, s]
  ), c.useEffect(() => {
    const e = (g) => {
      const { documents: d } = g;
      d.some((p) => p.documentId === s) && l((p) => p + 1);
    };
    return t.addEventListener("documentsChanged", e), () => {
      t.removeEventListener("documentsChanged", e);
    };
  }, []), c.useEffect(() => {
    t.getDocumentById(s).then(async (e) => {
      if (e && !("error" in e)) {
        const g = e.document.contents, d = e.document.name;
        u({ ...g, name: d }), h(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      r.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [o]), /* @__PURE__ */ a.jsx(b, { studioPro: n, children: /* @__PURE__ */ a.jsxs(w, { children: [
    !i && /* @__PURE__ */ a.jsx(L, {}),
    i && /* @__PURE__ */ a.jsx(x, { children: /* @__PURE__ */ a.jsx(C, { children: /* @__PURE__ */ a.jsx(f, { label: "General", children: /* @__PURE__ */ a.jsx(
      E,
      {
        label: "Name",
        ariaLabel: "Name",
        value: m.name,
        onChange: () => {
        },
        readOnly: !0
      }
    ) }) }) })
  ] }) });
}, T = j(k);
export {
  T as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
