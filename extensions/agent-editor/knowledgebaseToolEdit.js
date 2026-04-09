import { r as c, x as a, a2 as O, R as A, N as q, G as w, a1 as F, P as G } from "./Icon-Bb5knnP8.js";
import { r as H } from "./index-CfghFsoU.js";
import { createStudioProLogger as J } from "./logger-Bof2Evv1.js";
import { S as U, I as W } from "./ComboBox-BS5KkYOa.js";
import { u as $, D as _ } from "./DialogFooter-CsVkF8jQ.js";
import { T as z, a as Q } from "./toolHandlers-CR21pGNz.js";
import { T as y } from "./TextInputLabeled-BLG8tCoP.js";
import { T as X } from "./TextInputWithButton-CMS27jFj.js";
import { L as V, c as Y, k as Z, J as P, N as ee } from "./index-BsnBB1AC.js";
import { g as te } from "./mxCloudGenAIUtils-CU-rNwA1.js";
import { h as p } from "./knowledgebaseToolHandlers-Brs8qBc8.js";
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
  agent: s,
  onClose: h
}) => {
  var D, E;
  const [t, f] = c.useState(o || V()), [r, x] = c.useState(ie), [v, m] = c.useState([]), [M, I] = c.useState(
    ((D = (o || V()).maxResults) == null ? void 0 : D.toString()) ?? ""
  ), [k, N] = c.useState(
    ((E = (o || V()).minSimilarity) == null ? void 0 : E.toString()) ?? ""
  ), C = c.useCallback(
    async (e) => ({
      isValidName: await p("name", e, s, i),
      isValidDescription: await p(
        "description",
        e,
        s,
        i
      ),
      isValidDocument: await p("document", e, s, i),
      isValidType: !0,
      isValidCollectionIdentifier: await p(
        "collectionIdentifier",
        e,
        s,
        i
      ),
      isValidMaxResults: await p(
        "maxResults",
        e,
        s,
        i
      ),
      isValidMinSimilarity: await p(
        "minSimilarity",
        e,
        s,
        i
      )
    }),
    [i, s]
  );
  c.useEffect(() => {
    t.document ? Y(i, t.document).then((e) => {
      if (!e || e.excluded) {
        m([]);
        return;
      }
      const n = e.contents;
      return te(i, n)();
    }).then((e) => {
      m(!e || typeof e == "string" ? [] : e);
    }).catch(() => m([])) : m([]);
  }, [t.document, i]), c.useEffect(() => {
    o && (I(o.maxResults !== void 0 ? o.maxResults.toString() : ""), N(o.minSimilarity !== void 0 ? o.minSimilarity.toString() : ""), C(o).then((e) => {
      x(e);
    }));
  }, [o, C]);
  const S = c.useCallback(
    async (e, n) => {
      const d = ae[e];
      if (d && r[d] !== !0) {
        const l = await p(e, n, s, i);
        x((u) => ({ ...u, [d]: l }));
      }
    },
    [r, s, i]
  ), T = (e, n) => {
    n && g(e, (n == null ? void 0 : n.toString()) ?? "");
  }, g = (e, n) => {
    if (e === "maxResults") {
      const l = String(n);
      if (!/^\d*$/.test(l))
        return;
      I(l);
      const u = l === "" ? void 0 : Number.parseInt(l, 10), b = {
        ...t,
        maxResults: Number.isNaN(u) ? void 0 : u
      };
      f(b), S(e, b);
      return;
    }
    if (e === "minSimilarity") {
      const l = String(n);
      if (!/^\d*\.?\d*$/.test(l))
        return;
      N(l);
      const u = l === "" || l === "." ? void 0 : Number.parseFloat(l), b = {
        ...t,
        minSimilarity: Number.isNaN(u) ? void 0 : u
      };
      f(b), S(e, b);
      return;
    }
    const d = { ...t, [e]: n };
    f(d), S(e, d);
  }, L = async () => {
    const e = await Q(i, ee);
    if (e) {
      const n = { ...t, document: e };
      f(n), S("document", n);
    }
  }, B = () => {
    P(i, t.document);
  }, R = async () => {
    const e = await C(t);
    x(e), Object.values(e).some((d) => d !== !0) || h(t);
  }, j = () => {
    h(null);
  };
  $(j, R);
  const K = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ a.jsxs(O, { children: [
    /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsxs(q, { children: [
      /* @__PURE__ */ a.jsxs(w, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          X,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: t.document.qualifiedName,
            icon: t.document.qualifiedName ? Z : void 0,
            buttonCaption: "Select...",
            onClick: L,
            validate: () => r.isValidDocument,
            buttonCaptionSecondary: t.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: t.document.qualifiedName ? B : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          U,
          {
            "aria-label": "Collection identifier",
            label: "Collection",
            inputValue: t.collectionIdentifier,
            selectedKey: t.collectionIdentifier || null,
            description: "Here you can select an existing collection or reference a new collection.",
            validate: () => r.isValidCollectionIdentifier,
            allowsCustomValue: !0,
            onInputChange: (e) => g("collectionIdentifier", e),
            allowsEmptyCollection: !0,
            onSelectionChange: (e) => {
              T("collectionIdentifier", e);
            },
            children: v.map((e) => /* @__PURE__ */ a.jsx(W, { id: e.name, children: e.name }, e.name))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(w, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Name",
            ariaLabel: "Name",
            value: t.name,
            onChange: (e) => g("name", e),
            validate: () => r.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          z,
          {
            label: "Description",
            ariaLabel: "Description",
            value: t.description,
            onChange: (e) => g("description", e),
            validate: () => r.isValidDescription
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(w, { label: "Retrieval settings", children: [
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Max results",
            ariaLabel: "Max number of results",
            value: M,
            onChange: (e) => g("maxResults", e),
            validate: () => r.isValidMaxResults,
            description: "This is the highest number of data chunks that can be returned in a single retrieve. If left empty, many records could be retrieved, so it's recommended to set this number (to e.g. 5), or set the minimum similarity in the next field, or to set both."
          }
        ),
        /* @__PURE__ */ a.jsx(
          y,
          {
            label: "Min similarity",
            ariaLabel: "Min similarity",
            value: k,
            onChange: (e) => g("minSimilarity", e),
            validate: () => r.isValidMinSimilarity,
            description: "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(_, { onOk: R, onCancel: j, onHelp: K })
  ] });
}, oe = ({ studioPro: o, initialTool: i, agent: s, onClose: h }) => /* @__PURE__ */ a.jsx(G, { studioPro: o, children: /* @__PURE__ */ a.jsx(ne, { initialTool: i, studioPro: o, agent: s, onClose: h }) }), xe = {
  async loaded(o, i) {
    const s = H(o), h = J(s);
    try {
      const t = document.getElementById("root");
      if (!t)
        throw new Error("Failed to find the root element");
      const f = F.createRoot(t);
      let r;
      i.tool && (r = JSON.parse(decodeURIComponent(i.tool)));
      const x = JSON.parse(decodeURIComponent(i.agent)), v = (m) => {
        s.ui.dialogs.closeWithResult(i.dialogId, m);
      };
      f.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(oe, { studioPro: s, initialTool: r, agent: x, onClose: v }) })
      );
    } catch (t) {
      throw h.error("Error editing agent knowledge base tool:", t), new Error("Error editing agent knowledge base tool:", t);
    }
  }
};
export {
  xe as component
};
