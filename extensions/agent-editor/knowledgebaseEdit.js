import { r as c, j as s, A as b, P as w, c as f, C as x, F as C } from "./TextInputWithIcon-elAaw22_.js";
import { c as D } from "./logger-BM6R1Quw.js";
import { T as j } from "./TextInputLabeled-BSwHRbEr.js";
import { c as E } from "./componentLoader-Cv8RpErS.js";
function v(n) {
  return {
    name: ""
  };
}
const L = (n, t, r, a, o) => async (l) => {
  const i = { ...r, [t]: l };
  a(i), await y(n, i, o);
}, y = async (n, t, r) => {
  const a = D(n);
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (o) {
    a.error("Failed to save knowledgebasedocument:", o), n.ui.notifications.show({
      title: "Failed to save document",
      message: o.message
    });
  }
}, K = v(), k = ({ studioPro: n, documentId: t }) => {
  const r = n.ui.messageBoxes, a = n.app.model.customBlobDocuments, [o, l] = c.useState(0), [i, h] = c.useState(!1), [m, d] = c.useState(K);
  return c.useCallback(
    (e) => L(n, e, m, d, t),
    [n, m, d, t]
  ), c.useEffect(() => {
    const e = (u) => {
      const { documents: g } = u;
      g.some((p) => p.documentId === t) && l((p) => p + 1);
    };
    return a.addEventListener("documentsChanged", e), () => {
      a.removeEventListener("documentsChanged", e);
    };
  }, []), c.useEffect(() => {
    a.getDocumentById(t).then(async (e) => {
      if (e && !("error" in e)) {
        const u = e.document.contents, g = e.document.name;
        d({ ...u, name: g }), h(!0);
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
}, T = E(k);
export {
  T as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
