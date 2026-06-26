import { r as c, R as a, ap as L, af as K, ag as A, a1 as C, ao as O, ah as q } from "./formelements-xoDBPsLY.js";
import { c as F } from "./index-BFTG2KyR.js";
import { createStudioProLogger as G } from "./logger-gMbuSAUF.js";
import { g as H, h as W, a as _ } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { _ as $, I as z } from "./ComboBox-CdZpypF8.js";
import { u as J, D as Q } from "./DialogFooter-CPT3q8ld.js";
import { T as U, a as X } from "./toolHandlers-CWI74-BB.js";
import { T as I } from "./TextInputLabeled-BZ-d3CSA.js";
import { T as Y } from "./TextInputWithButton-CJr1wTWV.js";
import { N as V, k as Z, O as P } from "./index-CZgjY607.js";
import { g as ee } from "./mxCloudGenAIUtils-klha5VC-.js";
import { h } from "./knowledgebaseToolHandlers-o9yeUkRo.js";
const te = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0,
  isValidCollectionIdentifier: !0,
  isValidMaxResults: !0,
  isValidMinSimilarity: !0
}, ie = {
  name: "isValidName",
  description: "isValidDescription",
  document: "isValidDocument",
  collectionIdentifier: "isValidCollectionIdentifier",
  maxResults: "isValidMaxResults",
  minSimilarity: "isValidMinSimilarity"
}, ae = ({
  initialTool: o,
  studioPro: i,
  agent: n,
  onClose: p
}) => {
  const [t, g] = c.useState(o || V()), [r, f] = c.useState(te), [y, d] = c.useState([]), [v, N] = c.useState(
    (o || V()).maxResults?.toString() ?? ""
  ), [k, R] = c.useState(
    (o || V()).minSimilarity?.toString() ?? ""
  ), S = c.useCallback(
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
    t.document ? H(i, t.document).then((e) => {
      if (!e || e.excluded) {
        d([]);
        return;
      }
      const s = e.contents;
      return ee(i, s)();
    }).then((e) => {
      d(!e || typeof e == "string" ? [] : e);
    }).catch(() => d([])) : d([]);
  }, [t.document, i]), c.useEffect(() => {
    o && (N(o.maxResults !== void 0 ? o.maxResults.toString() : ""), R(o.minSimilarity !== void 0 ? o.minSimilarity.toString() : ""), S(o).then((e) => {
      f(e);
    }));
  }, [o, S]);
  const w = c.useCallback(
    async (e, s) => {
      const m = ie[e];
      if (m && r[m] !== !0) {
        const l = await h(e, s, n, i);
        f((u) => ({ ...u, [m]: l }));
      }
    },
    [r, n, i]
  ), M = (e, s) => {
    s && x(e, s?.toString() ?? "");
  }, x = (e, s) => {
    if (e === "maxResults") {
      const l = String(s);
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
      const l = String(s);
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
    const m = { ...t, [e]: s };
    g(m), w(e, m);
  }, E = async () => {
    const e = await X(i, t.document.documentId, P);
    if (e) {
      const s = { ...t, document: e };
      g(s), w("document", s);
    }
  }, T = () => {
    W(i, t.document);
  }, j = async () => {
    const e = await S(t);
    f(e), Object.values(e).some((m) => m !== !0) || p(t);
  }, D = () => {
    p(null);
  };
  J(D, j);
  const B = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#about-knowledge-bases",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ a.jsxs(L, { children: [
    /* @__PURE__ */ a.jsx(K, { children: /* @__PURE__ */ a.jsxs(A, { children: [
      /* @__PURE__ */ a.jsxs(C, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          Y,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: t.document.qualifiedName,
            icon: t.document.qualifiedName ? Z : void 0,
            buttonCaption: "Select...",
            onClick: E,
            validate: () => r.isValidDocument,
            buttonCaptionSecondary: t.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: t.document.qualifiedName ? T : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          $,
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
              M("collectionIdentifier", e);
            },
            children: y.map((e) => /* @__PURE__ */ a.jsx(z, { id: e.name, children: e.name }, e.name))
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
          U,
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
    /* @__PURE__ */ a.jsx(Q, { onOk: j, onCancel: D, onHelp: B })
  ] });
}, ne = ({ studioPro: o, initialTool: i, agent: n, onClose: p }) => /* @__PURE__ */ a.jsx(q, { studioPro: o, children: /* @__PURE__ */ a.jsx(ae, { initialTool: i, studioPro: o, agent: n, onClose: p }) }), xe = {
  async loaded(o, i) {
    const n = F(o), p = G(n);
    try {
      const t = document.getElementById("root");
      if (!t)
        throw new Error("Failed to find the root element");
      const g = O.createRoot(t), r = await _(n, i.agentDocumentId);
      let f;
      i.toolId && (f = (r.knowledgebaseTools || []).find((v) => v.id === i.toolId));
      const y = (d) => {
        n.ui.dialogs.closeWithResult(i.dialogId, d);
      };
      g.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(ne, { studioPro: n, initialTool: f, agent: r, onClose: y }) })
      );
    } catch (t) {
      throw p.error("Error editing agent knowledge base tool:", t), new Error("Error editing agent knowledge base tool:", t);
    }
  }
};
export {
  xe as component
};
