import { r as c, x as a, a2 as A, R as q, N as F, G as C, a1 as G, P as O } from "./Icon-Bb5knnP8.js";
import { r as H } from "./index-CfghFsoU.js";
import { createStudioProLogger as W } from "./logger-Bof2Evv1.js";
import { g as $, h as J, a as _ } from "./customBlobDocumentUtils-Dwvjb_jQ.js";
import { S as z, I as Q } from "./ComboBox-BS5KkYOa.js";
import { u as U, D as X } from "./DialogFooter-CsVkF8jQ.js";
import { T as Y, a as Z } from "./toolHandlers-5ai_iAr-.js";
import { T as I } from "./TextInputLabeled-BLG8tCoP.js";
import { T as P } from "./TextInputWithButton-CMS27jFj.js";
import { J as V, k as ee, K as te } from "./index-DNPEn852.js";
import { g as ie } from "./mxCloudGenAIUtils-CoL5Cjj-.js";
import { h } from "./knowledgebaseToolHandlers-CvlCV-OF.js";
const ae = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0,
  isValidCollectionIdentifier: !0,
  isValidMaxResults: !0,
  isValidMinSimilarity: !0
}, ne = {
  name: "isValidName",
  description: "isValidDescription",
  document: "isValidDocument",
  collectionIdentifier: "isValidCollectionIdentifier",
  maxResults: "isValidMaxResults",
  minSimilarity: "isValidMinSimilarity"
}, oe = ({
  initialTool: s,
  studioPro: i,
  agent: n,
  onClose: p
}) => {
  var M, E;
  const [t, g] = c.useState(s || V()), [r, f] = c.useState(ae), [S, d] = c.useState([]), [v, N] = c.useState(
    ((M = (s || V()).maxResults) == null ? void 0 : M.toString()) ?? ""
  ), [k, R] = c.useState(
    ((E = (s || V()).minSimilarity) == null ? void 0 : E.toString()) ?? ""
  ), y = c.useCallback(
    async (e) => ({
      isValidName: await h("name", e, n, i),
      isValidDescription: await h(
        "description",
        e,
        n,
        i
      ),
      isValidDocument: await h("document", e, n, i),
      isValidType: !0,
      isValidCollectionIdentifier: await h(
        "collectionIdentifier",
        e,
        n,
        i
      ),
      isValidMaxResults: await h(
        "maxResults",
        e,
        n,
        i
      ),
      isValidMinSimilarity: await h(
        "minSimilarity",
        e,
        n,
        i
      )
    }),
    [i, n]
  );
  c.useEffect(() => {
    t.document ? $(i, t.document).then((e) => {
      if (!e || e.excluded) {
        d([]);
        return;
      }
      const o = e.contents;
      return ie(i, o)();
    }).then((e) => {
      d(!e || typeof e == "string" ? [] : e);
    }).catch(() => d([])) : d([]);
  }, [t.document, i]), c.useEffect(() => {
    s && (N(s.maxResults !== void 0 ? s.maxResults.toString() : ""), R(s.minSimilarity !== void 0 ? s.minSimilarity.toString() : ""), y(s).then((e) => {
      f(e);
    }));
  }, [s, y]);
  const w = c.useCallback(
    async (e, o) => {
      const m = ne[e];
      if (m && r[m] !== !0) {
        const l = await h(e, o, n, i);
        f((u) => ({ ...u, [m]: l }));
      }
    },
    [r, n, i]
  ), T = (e, o) => {
    o && x(e, (o == null ? void 0 : o.toString()) ?? "");
  }, x = (e, o) => {
    if (e === "maxResults") {
      const l = String(o);
      if (!/^\d*$/.test(l))
        return;
      N(l);
      const u = l === "" ? void 0 : Number.parseInt(l, 10), b = {
        ...t,
        maxResults: Number.isNaN(u) ? void 0 : u
      };
      g(b), w(e, b);
      return;
    }
    if (e === "minSimilarity") {
      const l = String(o);
      if (!/^\d*\.?\d*$/.test(l))
        return;
      R(l);
      const u = l === "" || l === "." ? void 0 : Number.parseFloat(l), b = {
        ...t,
        minSimilarity: Number.isNaN(u) ? void 0 : u
      };
      g(b), w(e, b);
      return;
    }
    const m = { ...t, [e]: o };
    g(m), w(e, m);
  }, B = async () => {
    const e = await Z(i, te);
    if (e) {
      const o = { ...t, document: e };
      g(o), w("document", o);
    }
  }, K = () => {
    J(i, t.document);
  }, j = async () => {
    const e = await y(t);
    f(e), Object.values(e).some((m) => m !== !0) || p(t);
  }, D = () => {
    p(null);
  };
  U(D, j);
  const L = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#about-knowledge-bases",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ a.jsxs(A, { children: [
    /* @__PURE__ */ a.jsx(q, { children: /* @__PURE__ */ a.jsxs(F, { children: [
      /* @__PURE__ */ a.jsxs(C, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          P,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: t.document.qualifiedName,
            icon: t.document.qualifiedName ? ee : void 0,
            buttonCaption: "Select...",
            onClick: B,
            validate: () => r.isValidDocument,
            buttonCaptionSecondary: t.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: t.document.qualifiedName ? K : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          z,
          {
            "aria-label": "Collection identifier",
            label: "Collection",
            inputValue: t.collectionIdentifier,
            selectedKey: t.collectionIdentifier || null,
            description: "Here you can select an existing collection or reference a new collection.",
            validate: () => r.isValidCollectionIdentifier,
            allowsCustomValue: !0,
            onInputChange: (e) => x("collectionIdentifier", e),
            allowsEmptyCollection: !0,
            onSelectionChange: (e) => {
              T("collectionIdentifier", e);
            },
            children: S.map((e) => /* @__PURE__ */ a.jsx(Q, { id: e.name, children: e.name }, e.name))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(C, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          I,
          {
            label: "Name",
            ariaLabel: "Name",
            value: t.name,
            onChange: (e) => x("name", e),
            validate: () => r.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          Y,
          {
            label: "Description",
            ariaLabel: "Description",
            value: t.description,
            onChange: (e) => x("description", e),
            validate: () => r.isValidDescription
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(C, { label: "Retrieval settings", children: [
        /* @__PURE__ */ a.jsx(
          I,
          {
            label: "Max results",
            ariaLabel: "Max number of results",
            value: v,
            onChange: (e) => x("maxResults", e),
            validate: () => r.isValidMaxResults,
            description: "This is the highest number of data chunks that can be returned in a single retrieve. If left empty, many records could be retrieved, so it's recommended to set this number (to e.g. 5), or set the minimum similarity in the next field, or to set both."
          }
        ),
        /* @__PURE__ */ a.jsx(
          I,
          {
            label: "Min similarity",
            ariaLabel: "Min similarity",
            value: k,
            onChange: (e) => x("minSimilarity", e),
            validate: () => r.isValidMinSimilarity,
            description: "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(X, { onOk: j, onCancel: D, onHelp: L })
  ] });
}, se = ({ studioPro: s, initialTool: i, agent: n, onClose: p }) => /* @__PURE__ */ a.jsx(O, { studioPro: s, children: /* @__PURE__ */ a.jsx(oe, { initialTool: i, studioPro: s, agent: n, onClose: p }) }), we = {
  async loaded(s, i) {
    const n = H(s), p = W(n);
    try {
      const t = document.getElementById("root");
      if (!t)
        throw new Error("Failed to find the root element");
      const g = G.createRoot(t), r = await _(n, i.agentDocumentId);
      let f;
      i.toolId && (f = (r.knowledgebaseTools || []).find((v) => v.id === i.toolId));
      const S = (d) => {
        n.ui.dialogs.closeWithResult(i.dialogId, d);
      };
      g.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(se, { studioPro: n, initialTool: f, agent: r, onClose: S }) })
      );
    } catch (t) {
      throw p.error("Error editing agent knowledge base tool:", t), new Error("Error editing agent knowledge base tool:", t);
    }
  }
};
export {
  we as component
};
