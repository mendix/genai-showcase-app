import { r as c, j as a, au as g, av as v, aw as f, at as x, as as S } from "./TextInputWithIcon-mWdTJJox.js";
import { c as D } from "./logger-BM6R1Quw.js";
import { T as j } from "./TextInputLabeled-Cs7s9ibw.js";
import { c as E } from "./componentLoader-BrAYZVSc.js";
function L(n) {
  return {
    name: ""
  };
}
const b = (n, t, r, s, o) => async (m) => {
  const i = { ...r, [t]: m };
  s(i), w(n, i, o);
}, w = async (n, t, r) => {
  const s = D(n);
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (o) {
    s.error("Failed to save document:", o), n.ui.notifications.show({
      title: "Failed to save document",
      message: o.message
    });
  }
}, P = L(), y = ({ studioPro: n, documentId: t }) => {
  const r = n.ui.messageBoxes, s = n.app.model.customBlobDocuments, [o, m] = c.useState(0), [i, h] = c.useState(!1), [u, d] = c.useState(P);
  return c.useCallback(
    (e) => b(n, e, u, d, t),
    [n, u, d, t]
  ), c.useEffect(() => {
    const e = (C) => {
      const { documents: l } = C;
      l.some((p) => p.documentId === t) && m((p) => p + 1);
    };
    return s.addEventListener("documentsChanged", e), () => {
      s.removeEventListener("documentsChanged", e);
    };
  }, []), c.useEffect(() => {
    s.getDocumentById(t).then(async (e) => {
      if (e && !("error" in e)) {
        const C = e.document.contents, l = e.document.name;
        d({ ...C, name: l }), h(!0);
      } else
        throw new Error((e == null ? void 0 : e.error) || "Document not found");
    }).catch((e) => {
      r.show("error", "Error loading document", "Details: " + (e == null ? void 0 : e.message) || e);
    });
  }, [o]), /* @__PURE__ */ a.jsx(g, { studioPro: n, children: /* @__PURE__ */ a.jsxs(v, { children: [
    !i && /* @__PURE__ */ a.jsx("span", { children: "Loading document content..." }),
    i && /* @__PURE__ */ a.jsx(f, { children: /* @__PURE__ */ a.jsx(x, { children: /* @__PURE__ */ a.jsx(S, { label: "General", children: /* @__PURE__ */ a.jsx(
      j,
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
}, V = E(y);
export {
  V as component
};
//# sourceMappingURL=consumedMCPServiceEdit.js.map
