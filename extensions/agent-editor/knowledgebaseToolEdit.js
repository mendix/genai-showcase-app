import { j as a, d as L } from "./jsx-runtime-CWOFuNcx.js";
import { r as c, ae as K, a7 as A, a8 as q, ad as F, a9 as G } from "./PageContainers-BqHFWUr4.js";
import { createStudioProLogger as O } from "./logger-gMbuSAUF.js";
import { g as H, h as W, a as $ } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { _ as U, I as _ } from "./ComboBox-BD_2njDk.js";
import { u as z, D as J } from "./DialogFooter-6k2RbD2B.js";
import { G as C } from "./GroupBox-Czphilzs.js";
import { T as Q, a as X } from "./toolHandlers-DR5-tmnR.js";
import { T as I } from "./TextInputLabeled-D9mRNz7v.js";
import { T as Y } from "./TextInputWithButton-BkoxR7Pz.js";
import { o as Z } from "./genericUtils-GaF65l2f.js";
import { k as P } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { l as ee } from "./documentInitUtils-DoIciLyT.js";
import { g as te } from "./mxCloudGenAIUtils-U7THU9De.js";
import { b as V } from "./toolUtils-MLHoVQt4.js";
import { h as p } from "./knowledgebaseToolHandlers-o9yeUkRo.js";
const ie = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0,
  isValidCollectionIdentifier: !0,
  isValidMaxResults: !0,
  isValidMinSimilarity: !0
}, ae = {
  name: "isValidName",
  description: "isValidDescription",
  document: "isValidDocument",
  collectionIdentifier: "isValidCollectionIdentifier",
  maxResults: "isValidMaxResults",
  minSimilarity: "isValidMinSimilarity"
}, ne = ({
  initialTool: o,
  studioPro: i,
  agent: n,
  onClose: h
}) => {
  const [t, f] = c.useState(o || V()), [r, g] = c.useState(ie), [v, d] = c.useState([]), [w, j] = c.useState(
    (o || V()).maxResults?.toString() ?? ""
  ), [k, D] = c.useState(
    (o || V()).minSimilarity?.toString() ?? ""
  ), S = c.useCallback(
    async (e) => ({
      isValidName: await p("name", e, n, i),
      isValidDescription: await p(
        "description",
        e,
        n,
        i
      ),
      isValidDocument: await p("document", e, n, i),
      isValidType: !0,
      isValidCollectionIdentifier: await p(
        "collectionIdentifier",
        e,
        n,
        i
      ),
      isValidMaxResults: await p(
        "maxResults",
        e,
        n,
        i
      ),
      isValidMinSimilarity: await p(
        "minSimilarity",
        e,
        n,
        i
      )
    }),
    [i, n]
  );
  c.useEffect(() => {
    t.document ? H(i, t.document).then((e) => {
      if (!e || e.excluded) {
        d([]);
        return;
      }
      const s = e.contents;
      return te(i, s)();
    }).then((e) => {
      d(!e || typeof e == "string" ? [] : e);
    }).catch(() => d([])) : d([]);
  }, [t.document, i]), c.useEffect(() => {
    o && (j(o.maxResults !== void 0 ? o.maxResults.toString() : ""), D(o.minSimilarity !== void 0 ? o.minSimilarity.toString() : ""), S(o).then((e) => {
      g(e);
    }));
  }, [o, S]);
  const y = c.useCallback(
    async (e, s) => {
      const m = ae[e];
      if (m && r[m] !== !0) {
        const l = await p(e, s, n, i);
        g((u) => ({ ...u, [m]: l }));
      }
    },
    [r, n, i]
  ), E = (e, s) => {
    s && x(e, s?.toString() ?? "");
  }, x = (e, s) => {
    if (e === "maxResults") {
      const l = String(s);
      if (!/^\d*$/.test(l))
        return;
      j(l);
      const u = l === "" ? void 0 : Number.parseInt(l, 10), b = {
        ...t,
        maxResults: Number.isNaN(u) ? void 0 : u
      };
      f(b), y(e, b);
      return;
    }
    if (e === "minSimilarity") {
      const l = String(s);
      if (!/^\d*\.?\d*$/.test(l))
        return;
      D(l);
      const u = l === "" || l === "." ? void 0 : Number.parseFloat(l), b = {
        ...t,
        minSimilarity: Number.isNaN(u) ? void 0 : u
      };
      f(b), y(e, b);
      return;
    }
    const m = { ...t, [e]: s };
    f(m), y(e, m);
  }, M = async () => {
    const e = await X(i, t.document.documentId, ee);
    if (e) {
      const s = { ...t, document: e };
      f(s), y("document", s);
    }
  }, T = () => {
    W(i, t.document);
  }, N = async () => {
    const e = await S(t);
    g(e), Object.values(e).some((m) => m !== !0) || h(t);
  }, R = () => {
    h(null);
  };
  z(R, N);
  const B = () => {
    Z(
      "https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#about-knowledge-bases"
    );
  };
  return /* @__PURE__ */ a.jsxs(K, { children: [
    /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsxs(q, { children: [
      /* @__PURE__ */ a.jsxs(C, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          Y,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: t.document.qualifiedName,
            icon: t.document.qualifiedName ? P : void 0,
            buttonCaption: "Select...",
            onClick: M,
            validate: () => r.isValidDocument,
            buttonCaptionSecondary: t.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: t.document.qualifiedName ? T : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          U,
          {
            "aria-label": "Collection identifier",
            label: "Collection",
            inputValue: t.collectionIdentifier,
            value: t.collectionIdentifier || null,
            description: "Here you can select an existing collection or reference a new collection.",
            validate: () => r.isValidCollectionIdentifier,
            allowsCustomValue: !0,
            onInputChange: (e) => x("collectionIdentifier", e),
            allowsEmptyCollection: !0,
            onChange: (e) => {
              E("collectionIdentifier", e);
            },
            children: v.map((e) => /* @__PURE__ */ a.jsx(_, { id: e.name, children: e.name }, e.name))
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
          Q,
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
            value: w,
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
    /* @__PURE__ */ a.jsx(J, { onOk: N, onCancel: R, onHelp: B })
  ] });
}, oe = ({ studioPro: o, initialTool: i, agent: n, onClose: h }) => /* @__PURE__ */ a.jsx(G, { studioPro: o, children: /* @__PURE__ */ a.jsx(ne, { initialTool: i, studioPro: o, agent: n, onClose: h }) }), Se = {
  async loaded(o, i) {
    const n = L(o), h = O(n);
    try {
      const t = document.getElementById("root");
      if (!t)
        throw new Error("Failed to find the root element");
      const f = F.createRoot(t), r = await $(n, i.agentDocumentId);
      let g;
      i.toolId && (g = (r.knowledgebaseTools || []).find((w) => w.id === i.toolId));
      const v = (d) => {
        n.ui.dialogs.closeWithResult(i.dialogId, d);
      };
      f.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(oe, { studioPro: n, initialTool: g, agent: r, onClose: v }) })
      );
    } catch (t) {
      throw h.error("Error editing agent knowledge base tool:", t), new Error("Error editing agent knowledge base tool:", t);
    }
  }
};
export {
  Se as component
};
