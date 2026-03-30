import { r as c, w as a, V as O, E as A, C as q, G as C, Q as F, D as G } from "./Icon-DlQJfq7F.js";
import { s as H, c as J } from "./DesignSystemTokens-BZrmEyPo.js";
import { n as U } from "./MicroflowIcon-kvKEq0tY.js";
import { S as W, I as $ } from "./ComboBox-Dckpz5IF.js";
import { u as Q, D as _ } from "./DialogFooter-BHOCIJ8t.js";
import { T as z, a as X } from "./toolHandlers-k8YmGzVo.js";
import { T as w } from "./TextInputLabeled-CEPunJWI.js";
import { T as Y } from "./TextInputWithButton-DdFsQTz_.js";
import { x as V, v as Z, y as P } from "./index-8TehL4sX.js";
import { g as ee } from "./mxCloudGenAIUtils-dXfIggxC.js";
import { h as p } from "./knowledgebaseToolHandlers-BmSsf6rK.js";
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
}, ne = ({
  initialTool: o,
  studioPro: n,
  agent: s,
  onClose: h
}) => {
  var R, E;
  const [t, f] = c.useState(o || V()), [r, x] = c.useState(te), [v, m] = c.useState([]), [M, I] = c.useState(
    ((R = (o || V()).maxResults) == null ? void 0 : R.toString()) ?? ""
  ), [T, D] = c.useState(
    ((E = (o || V()).minSimilarity) == null ? void 0 : E.toString()) ?? ""
  ), y = c.useCallback(
    async (e) => ({
      isValidName: await p("name", e, s, n),
      isValidDescription: await p(
        "description",
        e,
        s,
        n
      ),
      isValidDocument: await p("document", e, s, n),
      isValidType: !0,
      isValidCollectionIdentifier: await p(
        "collectionIdentifier",
        e,
        s,
        n
      ),
      isValidMaxResults: await p(
        "maxResults",
        e,
        s,
        n
      ),
      isValidMinSimilarity: await p(
        "minSimilarity",
        e,
        s,
        n
      )
    }),
    [n, s]
  );
  c.useEffect(() => {
    const e = t.document.documentId;
    if (!e) {
      m([]);
      return;
    }
    n.app.model.customBlobDocuments.getDocumentById(e).then((i) => {
      if (!i || "error" in i) {
        m([]);
        return;
      }
      return ee(n, i.document.contents)();
    }).then((i) => {
      m(!i || typeof i == "string" ? [] : i);
    }).catch(() => m([]));
  }, [t.document.documentId, n]), c.useEffect(() => {
    o && (I(o.maxResults !== void 0 ? o.maxResults.toString() : ""), D(o.minSimilarity !== void 0 ? o.minSimilarity.toString() : ""), y(o).then((e) => {
      x(e);
    }));
  }, [o, y]);
  const S = c.useCallback(
    async (e, i) => {
      const d = ie[e];
      if (d && r[d] !== !0) {
        const l = await p(e, i, s, n);
        x((u) => ({ ...u, [d]: l }));
      }
    },
    [r, s, n]
  ), K = (e, i) => {
    i && g(e, (i == null ? void 0 : i.toString()) ?? "");
  }, g = (e, i) => {
    if (e === "maxResults") {
      const l = String(i);
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
      const l = String(i);
      if (!/^\d*\.?\d*$/.test(l))
        return;
      D(l);
      const u = l === "" || l === "." ? void 0 : Number.parseFloat(l), b = {
        ...t,
        minSimilarity: Number.isNaN(u) ? void 0 : u
      };
      f(b), S(e, b);
      return;
    }
    const d = { ...t, [e]: i };
    f(d), S(e, d);
  }, L = async () => {
    const e = await X(n, P);
    if (e) {
      const i = { ...t, document: e };
      f(i), S("document", i);
    }
  }, k = () => {
    Z(n, t.document);
  }, N = async () => {
    const e = await y(t);
    console.log(e), x(e), Object.values(e).some((d) => d !== !0) || h(t);
  }, j = () => {
    h(null);
  };
  Q(j, N);
  const B = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ a.jsxs(O, { children: [
    /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsxs(q, { children: [
      /* @__PURE__ */ a.jsxs(C, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          Y,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: t.document.qualifiedName,
            icon: t.document.qualifiedName ? /* @__PURE__ */ a.jsx(U, {}) : void 0,
            buttonCaption: "Select...",
            onClick: L,
            validate: () => r.isValidDocument,
            buttonCaptionSecondary: t.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: t.document.qualifiedName ? k : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          W,
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
              K("collectionIdentifier", e);
            },
            children: v.map((e) => /* @__PURE__ */ a.jsx($, { id: e.name, children: e.name }, e.name))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(C, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          w,
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
      /* @__PURE__ */ a.jsxs(C, { label: "Retrieval settings", children: [
        /* @__PURE__ */ a.jsx(
          w,
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
          w,
          {
            label: "Min similarity",
            ariaLabel: "Min similarity",
            value: T,
            onChange: (e) => g("minSimilarity", e),
            validate: () => r.isValidMinSimilarity,
            description: "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(_, { onOk: N, onCancel: j, onHelp: B })
  ] });
}, ae = ({ studioPro: o, initialTool: n, agent: s, onClose: h }) => /* @__PURE__ */ a.jsx(G, { studioPro: o, children: /* @__PURE__ */ a.jsx(ne, { initialTool: n, studioPro: o, agent: s, onClose: h }) }), ge = {
  async loaded(o, n) {
    const s = H(o), h = J(s);
    try {
      const t = document.getElementById("root");
      if (!t)
        throw new Error("Failed to find the root element");
      const f = F.createRoot(t);
      let r;
      n.tool && (r = JSON.parse(decodeURIComponent(n.tool)));
      const x = JSON.parse(decodeURIComponent(n.agent)), v = (m) => {
        s.ui.dialogs.closeWithResult(n.dialogId, m);
      };
      f.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(ae, { studioPro: s, initialTool: r, agent: x, onClose: v }) })
      );
    } catch (t) {
      throw h.error("Error editing agent knowledge base tool:", t), new Error("Error editing agent knowledge base tool:", t);
    }
  }
};
export {
  ge as component
};
//# sourceMappingURL=knowledgebaseToolEdit.js.map
