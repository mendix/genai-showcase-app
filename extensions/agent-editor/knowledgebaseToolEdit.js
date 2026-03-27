import { r as c, w as a, V as L, E as K, C as O, G as C, Q as A, D as B } from "./Icon-DlQJfq7F.js";
import { s as q, c as F } from "./DesignSystemTokens-BZrmEyPo.js";
import { n as G } from "./MicroflowIcon-kvKEq0tY.js";
import { u as H, D as J } from "./DialogFooter-BHOCIJ8t.js";
import { T as U, a as W } from "./toolHandlers-ls5yaN_E.js";
import { T as y } from "./TextInputLabeled-CEPunJWI.js";
import { T as $ } from "./TextInputWithButton-DdFsQTz_.js";
import { x as V, v as Q, y as _ } from "./index-5iDpKHlL.js";
import { h as u } from "./knowledgebaseToolHandlers-G91jkmqJ.js";
const z = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0,
  isValidCollectionIdentifier: !0,
  isValidMaxResults: !0,
  isValidMinSimilarity: !0
}, X = {
  name: "isValidName",
  description: "isValidDescription",
  document: "isValidDocument",
  collectionIdentifier: "isValidCollectionIdentifier",
  maxResults: "isValidMaxResults",
  minSimilarity: "isValidMinSimilarity"
}, Y = ({
  initialTool: n,
  studioPro: i,
  agent: o,
  onClose: p
}) => {
  var j, D;
  const [t, h] = c.useState(n || V()), [l, x] = c.useState(z), [S, b] = c.useState(
    ((j = (n || V()).maxResults) == null ? void 0 : j.toString()) ?? ""
  ), [M, I] = c.useState(
    ((D = (n || V()).minSimilarity) == null ? void 0 : D.toString()) ?? ""
  ), w = c.useCallback(
    async (e) => ({
      isValidName: await u("name", e, o, i),
      isValidDescription: await u(
        "description",
        e,
        o,
        i
      ),
      isValidDocument: await u("document", e, o, i),
      isValidType: !0,
      isValidCollectionIdentifier: await u(
        "collectionIdentifier",
        e,
        o,
        i
      ),
      isValidMaxResults: await u(
        "maxResults",
        e,
        o,
        i
      ),
      isValidMinSimilarity: await u(
        "minSimilarity",
        e,
        o,
        i
      )
    }),
    [i, o]
  );
  c.useEffect(() => {
    n && (b(n.maxResults !== void 0 ? n.maxResults.toString() : ""), I(n.minSimilarity !== void 0 ? n.minSimilarity.toString() : ""), w(n).then((e) => {
      x(e);
    }));
  }, [n, w]);
  const v = c.useCallback(
    async (e, r) => {
      const d = X[e];
      if (d && l[d] !== !0) {
        const s = await u(e, r, o, i);
        x((m) => ({ ...m, [d]: s }));
      }
    },
    [l, o, i]
  ), g = (e, r) => {
    if (e === "maxResults") {
      const s = String(r);
      if (!/^\d*$/.test(s))
        return;
      b(s);
      const m = s === "" ? void 0 : Number.parseInt(s, 10), f = {
        ...t,
        maxResults: Number.isNaN(m) ? void 0 : m
      };
      h(f), v(e, f);
      return;
    }
    if (e === "minSimilarity") {
      const s = String(r);
      if (!/^\d*\.?\d*$/.test(s))
        return;
      I(s);
      const m = s === "" || s === "." ? void 0 : Number.parseFloat(s), f = {
        ...t,
        minSimilarity: Number.isNaN(m) ? void 0 : m
      };
      h(f), v(e, f);
      return;
    }
    const d = { ...t, [e]: r };
    h(d), v(e, d);
  }, E = async () => {
    const e = await W(i, _);
    if (e) {
      const r = { ...t, document: e };
      h(r), v("document", r);
    }
  }, k = () => {
    Q(i, t.document);
  }, N = async () => {
    const e = await w(t);
    console.log(e), x(e), Object.values(e).some((d) => d !== !0) || p(t);
  }, R = () => {
    p(null);
  };
  H(R, N);
  const T = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ a.jsxs(L, { children: [
    /* @__PURE__ */ a.jsx(K, { children: /* @__PURE__ */ a.jsxs(O, { children: [
      /* @__PURE__ */ a.jsxs(C, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          $,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: t.document.qualifiedName,
            icon: t.document.qualifiedName ? /* @__PURE__ */ a.jsx(G, {}) : void 0,
            buttonCaption: "Select...",
            onClick: E,
            validate: () => l.isValidDocument,
            buttonCaptionSecondary: t.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: t.document.qualifiedName ? k : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Collection",
            ariaLabel: "Collection identifier",
            value: t.collectionIdentifier,
            onChange: (e) => g("collectionIdentifier", e),
            validate: () => l.isValidCollectionIdentifier
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(C, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Name",
            ariaLabel: "Name",
            value: t.name,
            onChange: (e) => g("name", e),
            validate: () => l.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          U,
          {
            label: "Description",
            ariaLabel: "Description",
            value: t.description,
            onChange: (e) => g("description", e),
            validate: () => l.isValidDescription
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(C, { label: "Retrieval settings", children: [
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Max results",
            ariaLabel: "Max number of results",
            value: S,
            onChange: (e) => g("maxResults", e),
            validate: () => l.isValidMaxResults,
            description: "This is the highest number of data chunks that can be returned in a single retrieve. If left empty, many records could be retrieved, so it's recommended to set this number (to e.g. 5), or set the minimum similarity in the next field, or to set both."
          }
        ),
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Min similarity",
            ariaLabel: "Min similarity",
            value: M,
            onChange: (e) => g("minSimilarity", e),
            validate: () => l.isValidMinSimilarity,
            description: "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(J, { onOk: N, onCancel: R, onHelp: T })
  ] });
}, Z = ({ studioPro: n, initialTool: i, agent: o, onClose: p }) => /* @__PURE__ */ a.jsx(B, { studioPro: n, children: /* @__PURE__ */ a.jsx(Y, { initialTool: i, studioPro: n, agent: o, onClose: p }) }), re = {
  async loaded(n, i) {
    const o = q(n), p = F(o);
    try {
      const t = document.getElementById("root");
      if (!t)
        throw new Error("Failed to find the root element");
      const h = A.createRoot(t);
      let l;
      i.tool && (l = JSON.parse(decodeURIComponent(i.tool)));
      const x = JSON.parse(decodeURIComponent(i.agent)), S = (b) => {
        o.ui.dialogs.closeWithResult(i.dialogId, b);
      };
      h.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(Z, { studioPro: o, initialTool: l, agent: x, onClose: S }) })
      );
    } catch (t) {
      throw p.error("Error editing agent knowledge base tool:", t), new Error("Error editing agent knowledge base tool:", t);
    }
  }
};
export {
  re as component
};
//# sourceMappingURL=knowledgebaseToolEdit.js.map
