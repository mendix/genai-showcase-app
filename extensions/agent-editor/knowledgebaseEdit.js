import { c as b, r as o, j as t, A as w, P as x, e as f, C, F as D } from "./TextInputWithIcon-BpSHc-Lp.js";
import { T as j } from "./TextInputLabeled-G5mbtodI.js";
function E(n) {
  return {
    name: ""
  };
}
const v = (n, s, c, a, i) => async (l) => {
  console.log("knowledgebase change triggered for field ", s);
  const r = { ...c, [s]: l };
  a(r), await L(n, r, i);
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
  const c = n.ui.messageBoxes, a = n.app.model.customBlobDocuments, [i, l] = o.useState(0), [r, h] = o.useState(!1), [g, d] = o.useState(y);
  return o.useCallback(
    (e) => v(n, e, g, d, s),
    [n, g, d, s]
  ), o.useEffect(() => {
    const e = (m) => {
      const { documents: u } = m;
      u.some((p) => p.id === s) && l((p) => p + 1);
    };
    return a.addEventListener("documentsChanged", e), () => {
      a.removeEventListener("documentsChanged", e);
    };
  }, []), o.useEffect(() => {
    a.getDocumentById(s).then(async (e) => {
      if (e && !("error" in e)) {
        const m = e.document.contents, u = e.document.name;
        d({ ...m, name: u }), h(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      c.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [i]), /* @__PURE__ */ t.jsx(w, { studioPro: n, children: /* @__PURE__ */ t.jsxs(x, { children: [
    !r && /* @__PURE__ */ t.jsx("span", { children: "Loading document content..." }),
    r && /* @__PURE__ */ t.jsx(f, { children: /* @__PURE__ */ t.jsx(C, { children: /* @__PURE__ */ t.jsx(D, { label: "General", children: /* @__PURE__ */ t.jsx(
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
