import { r as c, w as s, N as w, P as b, O as x, K as f, G as C } from "./Icon-B4HLWuEl.js";
import { c as D } from "./userPreferences-BV8i5uIO.js";
import { T as E } from "./TextInputLabeled-C3EIPSRL.js";
import { c as j, C as L } from "./componentLoader-Cm3EOwGz.js";
function v(n) {
  return {
    name: ""
  };
}
const y = (n, a, r, t, o) => async (l) => {
  const i = { ...r, [a]: l };
  t(i), K(n, i, o);
}, K = async (n, a, r) => {
  const t = D(n);
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(r, a);
  } catch (o) {
    t.error("Failed to save knowledgebasedocument:", o), await n.ui.notifications.show({
      title: "Failed to save document",
      message: o.message
    });
  }
}, B = v(), k = ({ studioPro: n, documentId: a }) => {
  const r = n.ui.messageBoxes, t = n.app.model.customBlobDocuments, [o, l] = c.useState(0), [i, h] = c.useState(!1), [m, u] = c.useState(B);
  return c.useCallback(
    (e) => y(n, e, m, u, a),
    [n, m, u, a]
  ), c.useEffect(() => {
    const e = (g) => {
      const { documents: d } = g;
      d.some((p) => p.documentId === a) && l((p) => p + 1);
    };
    return t.addEventListener("documentsChanged", e), () => {
      t.removeEventListener("documentsChanged", e);
    };
  }, []), c.useEffect(() => {
    t.getDocumentById(a).then(async (e) => {
      if (e && !("error" in e)) {
        const g = e.document.contents, d = e.document.name;
        u({ ...g, name: d }), h(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch(async (e) => {
      await r.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [o]), /* @__PURE__ */ s.jsx(w, { studioPro: n, children: /* @__PURE__ */ s.jsxs(b, { children: [
    !i && /* @__PURE__ */ s.jsx(L, {}),
    i && /* @__PURE__ */ s.jsx(x, { children: /* @__PURE__ */ s.jsx(f, { children: /* @__PURE__ */ s.jsx(C, { label: "General", children: /* @__PURE__ */ s.jsx(
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
