import { r as c, w as a, V as L, E as K, C as O, G as C, Q as A, D as B } from "./Icon-DlQJfq7F.js";
import { s as q, c as F } from "./DesignSystemTokens-BZrmEyPo.js";
import { n as G } from "./MicroflowIcon-kvKEq0tY.js";
import { D as H } from "./DialogFooter-DACb7c2t.js";
import { T as J, a as U } from "./toolHandlers-D5r8oDlK.js";
import { T as y } from "./TextInputLabeled-CEPunJWI.js";
import { T as W } from "./TextInputWithButton-DdFsQTz_.js";
import { x as V, v as $, y as Q } from "./index-DO-n49Lf.js";
import { h as u } from "./knowledgebaseToolHandlers-BGK4DWaD.js";
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
  const [i, h] = c.useState(n || V()), [l, x] = c.useState(_), [S, b] = c.useState(
    ((N = (n || V()).maxResults) == null ? void 0 : N.toString()) ?? ""
  ), [j, I] = c.useState(
    ((R = (n || V()).minSimilarity) == null ? void 0 : R.toString()) ?? ""
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
    n && (b(n.maxResults !== void 0 ? n.maxResults.toString() : ""), I(n.minSimilarity !== void 0 ? n.minSimilarity.toString() : ""), w(n).then((e) => {
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
      b(s);
      const m = s === "" ? void 0 : Number.parseInt(s, 10), f = {
        ...i,
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
        ...i,
        minSimilarity: Number.isNaN(m) ? void 0 : m
      };
      h(f), v(e, f);
      return;
    }
    const d = { ...i, [e]: r };
    h(d), v(e, d);
  }, D = async () => {
    const e = await U(t, Q);
    if (e) {
      const r = { ...i, document: e };
      h(r), v("document", r);
    }
  }, M = () => {
    $(t, i.document);
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
      /* @__PURE__ */ a.jsxs(C, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          W,
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
      /* @__PURE__ */ a.jsxs(C, { label: "Naming", children: [
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
      const x = JSON.parse(decodeURIComponent(t.agent)), S = (b) => {
        o.ui.dialogs.closeWithResult(t.dialogId, b);
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
