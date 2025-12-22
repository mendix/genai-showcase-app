import { r as o, j as a, A as h, P as v, c as f, C as x, F as S } from "./TextInputWithIcon-elAaw22_.js";
import { T as D } from "./TextInputLabeled-BSwHRbEr.js";
import { c as j } from "./componentLoader-QONLtPwE.js";
function E(n) {
  return {
    name: ""
  };
}
const P = (n, s, c, t, i) => async (m) => {
  console.log("ConsumedMCPService change triggered for field ", s);
  const r = { ...c, [s]: m };
  t(r), await b(n, r, i);
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
}, w = E(), L = ({ studioPro: n, documentId: s }) => {
  const c = n.ui.messageBoxes, t = n.app.model.customBlobDocuments, [i, m] = o.useState(0), [r, p] = o.useState(!1), [u, C] = o.useState(w);
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
  }, [i]), /* @__PURE__ */ a.jsx(h, { studioPro: n, children: /* @__PURE__ */ a.jsxs(v, { children: [
    !r && /* @__PURE__ */ a.jsx("span", { children: "Loading document content..." }),
    r && /* @__PURE__ */ a.jsx(f, { children: /* @__PURE__ */ a.jsx(x, { children: /* @__PURE__ */ a.jsx(S, { label: "General", children: /* @__PURE__ */ a.jsx(
      D,
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
}, N = j(L);
export {
  N as component
};
//# sourceMappingURL=consumedMCPServiceEdit.js.map
