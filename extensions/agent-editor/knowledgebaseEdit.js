import { r as c, j as s, au as b, av as w, aw as f, at as x, as as C } from "./TextInputWithIcon-mWdTJJox.js";
import { c as D } from "./logger-BM6R1Quw.js";
import { T as j } from "./TextInputLabeled-Cs7s9ibw.js";
import { c as v } from "./componentLoader-BrAYZVSc.js";
function E(n) {
  return {
    name: ""
  };
}
const L = (n, a, r, t, o) => async (l) => {
  const i = { ...r, [a]: l };
  t(i), y(n, i, o);
}, y = async (n, a, r) => {
  const t = D(n);
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(r, a);
  } catch (o) {
    t.error("Failed to save knowledgebasedocument:", o), n.ui.notifications.show({
      title: "Failed to save document",
      message: o.message
    });
  }
}, K = E(), k = ({ studioPro: n, documentId: a }) => {
  const r = n.ui.messageBoxes, t = n.app.model.customBlobDocuments, [o, l] = c.useState(0), [i, h] = c.useState(!1), [m, u] = c.useState(K);
  return c.useCallback(
    (e) => L(n, e, m, u, a),
    [n, m, u, a]
  ), c.useEffect(() => {
    const e = (d) => {
      const { documents: g } = d;
      g.some((p) => p.documentId === a) && l((p) => p + 1);
    };
    return t.addEventListener("documentsChanged", e), () => {
      t.removeEventListener("documentsChanged", e);
    };
  }, []), c.useEffect(() => {
    t.getDocumentById(a).then(async (e) => {
      if (e && !("error" in e)) {
        const d = e.document.contents, g = e.document.name;
        u({ ...d, name: g }), h(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      r.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [o]), /* @__PURE__ */ s.jsx(b, { studioPro: n, children: /* @__PURE__ */ s.jsxs(w, { children: [
    !i && /* @__PURE__ */ s.jsx("span", { children: "Loading document content..." }),
    i && /* @__PURE__ */ s.jsx(f, { children: /* @__PURE__ */ s.jsx(x, { children: /* @__PURE__ */ s.jsx(C, { label: "General", children: /* @__PURE__ */ s.jsx(
      j,
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
}, T = v(k);
export {
  T as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
