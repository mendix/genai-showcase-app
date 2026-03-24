import { r as c, w as a, V as L, E as K, C as O, G as V, Q as A, D as B } from "./Icon-CjmU6z_u.js";
import { s as q, c as F } from "./DesignSystemTokens-CB_9gr2a.js";
import { n as G } from "./MicroflowIcon-RtiK_mVp.js";
import { D as H } from "./DialogFooter-BjE_ANaE.js";
import { d as C, T as J, a as U, b as W } from "./toolHandlers-Dh0W5--3.js";
import { T as y } from "./TextInputLabeled-DzKYuJqW.js";
import { T as $ } from "./TextInputWithButton-7i5j2n40.js";
import { r as Q } from "./index-98pkSbGS.js";
import { h as u } from "./knowledgebaseToolHandlers-BJy5VnO6.js";
const _ = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0,
  isValidCollectionIdentifier: !0,
  isValidMaxResults: !0,
  isValidMinSimilarity: !0
}, z = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument",
  collectionIdentifier: "isValidCollectionIdentifier",
  maxResults: "isValidMaxResults",
  minSimilarity: "isValidMinSimilarity"
}, X = ({
  initialTool: n,
  studioPro: t,
  agent: o,
  onClose: p
}) => {
  var N, R;
  const [i, h] = c.useState(n || C()), [l, x] = c.useState(_), [S, f] = c.useState(
    ((N = (n || C()).maxResults) == null ? void 0 : N.toString()) ?? ""
  ), [j, I] = c.useState(
    ((R = (n || C()).minSimilarity) == null ? void 0 : R.toString()) ?? ""
  ), w = c.useCallback(
    async (e) => ({
      isValidName: await u("name", e, o, t),
      isValidDescription: await u(
        "description",
        e,
        o,
        t
      ),
      isValidDocument: await u("document", e, o, t),
      isValidType: !0,
      isValidCollectionIdentifier: await u(
        "collectionIdentifier",
        e,
        o,
        t
      ),
      isValidMaxResults: await u(
        "maxResults",
        e,
        o,
        t
      ),
      isValidMinSimilarity: await u(
        "minSimilarity",
        e,
        o,
        t
      )
    }),
    [t, o]
  );
  c.useEffect(() => {
    n && (f(n.maxResults !== void 0 ? n.maxResults.toString() : ""), I(n.minSimilarity !== void 0 ? n.minSimilarity.toString() : ""), w(n).then((e) => {
      x(e);
    }));
  }, [n, w]);
  const v = c.useCallback(
    async (e, r) => {
      const d = z[e];
      if (d && l[d] !== !0) {
        const s = await u(e, r, o, t);
        x((m) => ({ ...m, [d]: s }));
      }
    },
    [l, o, t]
  ), g = (e, r) => {
    if (e === "maxResults") {
      const s = String(r);
      if (!/^\d*$/.test(s))
        return;
      f(s);
      const m = s === "" ? void 0 : Number.parseInt(s, 10), b = {
        ...i,
        maxResults: Number.isNaN(m) ? void 0 : m
      };
      h(b), v(e, b);
      return;
    }
    if (e === "minSimilarity") {
      const s = String(r);
      if (!/^\d*\.?\d*$/.test(s))
        return;
      I(s);
      const m = s === "" || s === "." ? void 0 : Number.parseFloat(s), b = {
        ...i,
        minSimilarity: Number.isNaN(m) ? void 0 : m
      };
      h(b), v(e, b);
      return;
    }
    const d = { ...i, [e]: r };
    h(d), v(e, d);
  }, D = async () => {
    const e = await W(t, Q);
    if (e) {
      const r = { ...i, document: e };
      h(r), v("document", r);
    }
  }, M = () => {
    U(t, i.document);
  }, E = async () => {
    const e = await w(i);
    console.log(e), x(e), Object.values(e).some((d) => d !== !0) || p(i);
  }, k = () => {
    p(null);
  }, T = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ a.jsxs(L, { children: [
    /* @__PURE__ */ a.jsx(K, { children: /* @__PURE__ */ a.jsxs(O, { children: [
      /* @__PURE__ */ a.jsxs(V, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          $,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: i.document.qualifiedName,
            icon: i.document.qualifiedName ? /* @__PURE__ */ a.jsx(G, {}) : void 0,
            buttonCaption: "Select...",
            onClick: D,
            validate: () => l.isValidDocument,
            buttonCaptionSecondary: i.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: i.document.qualifiedName ? M : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Collection",
            ariaLabel: "Collection identifier",
            value: i.collectionIdentifier,
            onChange: (e) => g("collectionIdentifier", e),
            validate: () => l.isValidCollectionIdentifier
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(V, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Name",
            ariaLabel: "Name",
            value: i.name,
            onChange: (e) => g("name", e),
            validate: () => l.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          J,
          {
            label: "Description",
            ariaLabel: "Description",
            value: i.description,
            onChange: (e) => g("description", e),
            validate: () => l.isValidDescription
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(V, { label: "Retrieval settings", children: [
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
            value: j,
            onChange: (e) => g("minSimilarity", e),
            validate: () => l.isValidMinSimilarity,
            description: "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(H, { onOk: E, onCancel: k, onHelp: T })
  ] });
}, Y = ({ studioPro: n, initialTool: t, agent: o, onClose: p }) => /* @__PURE__ */ a.jsx(B, { studioPro: n, children: /* @__PURE__ */ a.jsx(X, { initialTool: t, studioPro: n, agent: o, onClose: p }) }), le = {
  async loaded(n, t) {
    const o = q(n), p = F(o);
    try {
      const i = document.getElementById("root");
      if (!i)
        throw new Error("Failed to find the root element");
      const h = A.createRoot(i);
      let l;
      t.tool && (l = JSON.parse(decodeURIComponent(t.tool)));
      const x = JSON.parse(decodeURIComponent(t.agent)), S = (f) => {
        o.ui.dialogs.closeWithResult(t.dialogId, f);
      };
      h.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(Y, { studioPro: o, initialTool: l, agent: x, onClose: S }) })
      );
    } catch (i) {
      throw p.error("Error editing agent knowledge base tool:", i), new Error("Error editing agent knowledge base tool:", i);
    }
  }
};
export {
  le as component
};
//# sourceMappingURL=knowledgebaseToolEdit.js.map
