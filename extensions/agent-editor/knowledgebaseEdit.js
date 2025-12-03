import { W as b, r as o, j as t, X as w, Y as x, Z as f, _ as C, a0 as D, a1 as j } from "./componentLoader-CiJ_P7hp.js";
function E(n) {
  return {
    name: ""
  };
}
const v = (n, a, c, s, l) => async (r) => {
  console.log("knowledgebase change triggered for field ", a);
  const i = { ...c, [a]: r };
  s(i), await L(n, i, l);
}, L = async (n, a, c) => {
  console.log("Save logic triggered");
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(c, a);
  } catch (s) {
    n.ui.notifications.show({
      title: "Failed to save document",
      message: s.message
    });
  }
}, y = E(), K = ({ studioPro: n, documentId: a }) => {
  const c = n.ui.messageBoxes, s = n.app.model.customBlobDocuments, [l, r] = o.useState(0), [i, p] = o.useState(!1), [g, d] = o.useState(y);
  return o.useCallback(
    (e) => v(n, e, g, d, a),
    [n, g, d, a]
  ), o.useEffect(() => {
    const e = (u) => {
      const { documents: m } = u;
      m.some((h) => h.id === a) && r((h) => h + 1);
    };
    return s.addEventListener("documentsChanged", e), () => {
      s.removeEventListener("documentsChanged", e);
    };
  }, []), o.useEffect(() => {
    s.getDocumentById(a).then(async (e) => {
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
