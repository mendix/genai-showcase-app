import { r as o, j as t, A as b, P as w, c as f, C as x, F as C } from "./TextInputWithIcon-elAaw22_.js";
import { T as D } from "./TextInputLabeled-BSwHRbEr.js";
import { c as j } from "./componentLoader-QONLtPwE.js";
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
  const c = n.ui.messageBoxes, a = n.app.model.customBlobDocuments, [i, l] = o.useState(0), [r, h] = o.useState(!1), [g, m] = o.useState(y);
  return o.useCallback(
    (e) => v(n, e, g, m, s),
    [n, g, m, s]
  ), o.useEffect(() => {
    const e = (d) => {
      const { documents: u } = d;
      u.some((p) => p.id === s) && l((p) => p + 1);
    };
    return a.addEventListener("documentsChanged", e), () => {
      a.removeEventListener("documentsChanged", e);
    };
  }, []), o.useEffect(() => {
    a.getDocumentById(s).then(async (e) => {
      if (e && !("error" in e)) {
        const d = e.document.contents, u = e.document.name;
        m({ ...d, name: u }), h(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      c.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [i]), /* @__PURE__ */ t.jsx(b, { studioPro: n, children: /* @__PURE__ */ t.jsxs(w, { children: [
    !r && /* @__PURE__ */ t.jsx("span", { children: "Loading document content..." }),
    r && /* @__PURE__ */ t.jsx(f, { children: /* @__PURE__ */ t.jsx(x, { children: /* @__PURE__ */ t.jsx(C, { label: "General", children: /* @__PURE__ */ t.jsx(
      D,
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
}, N = j(K);
export {
  N as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
