import { f as p, r as c, j as a, A as v, P as x, g as S, C as f, F as D, h as j } from "./TextInputLabeled-DX-tOSPn.js";
function E(n) {
  return {
    name: ""
  };
}
const P = (n, s, o, t, r) => async (u) => {
  console.log("ConsumedMCPService change triggered for field ", s);
  const i = { ...o, [s]: u };
  t(i), await b(n, i, r);
}, b = async (n, s, o) => {
  console.log("Save logic triggered");
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(o, s);
  } catch (t) {
    n.ui.notifications.show({
      title: "Failed to save document",
      message: t.message
    });
  }
}, w = E(), L = ({ studioPro: n, documentId: s }) => {
  const o = n.ui.messageBoxes, t = n.app.model.customBlobDocuments, [r, u] = c.useState(0), [i, h] = c.useState(!1), [m, C] = c.useState(w);
  return c.useCallback(
    (e) => P(n, e, m, C, s),
    [n, m, C, s]
  ), c.useEffect(() => {
    const e = (d) => {
      const { documents: l } = d;
      l.some((g) => g.id === s) && u((g) => g + 1);
    };
    return t.addEventListener("documentsChanged", e), () => {
      t.removeEventListener("documentsChanged", e);
    };
  }, []), c.useEffect(() => {
    t.getDocumentById(s).then(async (e) => {
      if (e && !("error" in e)) {
        const d = e.document.contents, l = e.document.name;
        C({ ...d, name: l }), h(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      o.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [r]), /* @__PURE__ */ a.jsx(v, { studioPro: n, children: /* @__PURE__ */ a.jsxs(x, { children: [
    !i && /* @__PURE__ */ a.jsx("span", { children: "Loading document content..." }),
    i && /* @__PURE__ */ a.jsx(S, { children: /* @__PURE__ */ a.jsx(f, { children: /* @__PURE__ */ a.jsx(D, { label: "General", children: /* @__PURE__ */ a.jsx(
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
}, A = p(L);
export {
  A as component
};
//# sourceMappingURL=consumedMCPServiceEdit.js.map
