import { Q as b, r as o, j as t, R as w, U as x, V as f, W as C, X as D, Y as j } from "./componentLoader-l-cCI7h-.js";
function E(n) {
  return {
    name: ""
  };
}
const v = (n, s, c, a, l) => async (r) => {
  console.log("knowledgebase change triggered for field ", s);
  const i = { ...c, [s]: r };
  a(i), await L(n, i, l);
}, L = async (n, s, c) => {
  console.log("Save logic triggered");
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(c, s);
  } catch (a) {
    n.ui.notifications.show({
      title: "Failed to save document",
      message: a.message
    });
  }
}, y = E(), K = ({ studioPro: n, documentId: s }) => {
  const c = n.ui.messageBoxes, a = n.app.model.customBlobDocuments, [l, r] = o.useState(0), [i, p] = o.useState(!1), [g, d] = o.useState(y);
  return o.useCallback(
    (e) => v(n, e, g, d, s),
    [n, g, d, s]
  ), o.useEffect(() => {
    const e = (u) => {
      const { documents: m } = u;
      m.some((h) => h.id === s) && r((h) => h + 1);
    };
    return a.addEventListener("documentsChanged", e), () => {
      a.removeEventListener("documentsChanged", e);
    };
  }, []), o.useEffect(() => {
    a.getDocumentById(s).then(async (e) => {
      if (e && !("error" in e)) {
        const u = e.document.contents, m = e.document.name;
        d({ ...u, name: m }), p(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      c.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [l]), /* @__PURE__ */ t.jsx(w, { studioPro: n, children: /* @__PURE__ */ t.jsxs(x, { children: [
    !i && /* @__PURE__ */ t.jsx("span", { children: "Loading document content..." }),
    i && /* @__PURE__ */ t.jsx(f, { children: /* @__PURE__ */ t.jsx(C, { children: /* @__PURE__ */ t.jsx(D, { label: "General", children: /* @__PURE__ */ t.jsx(
      j,
      {
        label: "Name",
        ariaLabel: "Name",
        value: g.name,
        onChange: () => {
        },
        readOnly: !0
      }
    ) }) }) })
  ] }) });
}, B = b(K);
export {
  B as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
