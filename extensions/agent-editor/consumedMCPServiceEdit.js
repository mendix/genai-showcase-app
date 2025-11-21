import { aA as h, r as o, j as a, aB as v, aC as x, aD as S, aE as f, aF as D, aG as E } from "./componentLoader-kLajWKon.js";
import { c as j } from "./consumedMCPServiceUtils-CyYrmqWg.js";
const P = (n, s, c, t, r) => async (m) => {
  console.log("ConsumedMCPService change triggered for field ", s);
  const i = { ...c, [s]: m };
  t(i), await b(n, i, r);
}, b = async (n, s, c) => {
  console.log("Save logic triggered");
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(c, s);
  } catch (t) {
    n.ui.notifications.show({
      title: "Failed to save document",
      message: t.message
    });
  }
}, w = j(), L = ({ studioPro: n, documentId: s }) => {
  const c = n.ui.messageBoxes, t = n.app.model.customBlobDocuments, [r, m] = o.useState(0), [i, p] = o.useState(!1), [u, C] = o.useState(w);
  return o.useCallback(
    (e) => P(n, e, u, C, s),
    [n, u, C, s]
  ), o.useEffect(() => {
    const e = (d) => {
      const { documents: l } = d;
      l.some((g) => g.id === s) && m((g) => g + 1);
    };
    return t.addEventListener("documentsChanged", e), () => {
      t.removeEventListener("documentsChanged", e);
    };
  }, []), o.useEffect(() => {
    t.getDocumentById(s).then(async (e) => {
      if (e && !("error" in e)) {
        const d = e.document.contents, l = e.document.name;
        C({ ...d, name: l }), p(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      c.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [r]), /* @__PURE__ */ a.jsx(v, { studioPro: n, children: /* @__PURE__ */ a.jsxs(x, { children: [
    !i && /* @__PURE__ */ a.jsx("span", { children: "Loading document content..." }),
    i && /* @__PURE__ */ a.jsx(S, { children: /* @__PURE__ */ a.jsx(f, { children: /* @__PURE__ */ a.jsx(D, { label: "General", children: /* @__PURE__ */ a.jsx(
      E,
      {
        label: "Name",
        ariaLabel: "Name",
        value: u.name,
        onChange: () => {
        },
        readOnly: !0
      }
    ) }) }) })
  ] }) });
}, A = h(L);
export {
  A as component
};
