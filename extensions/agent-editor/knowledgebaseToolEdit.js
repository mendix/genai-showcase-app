import { j as a, d as F } from "./jsx-runtime-CWOFuNcx.js";
import { r as c, ae as K, a7 as A, a8 as O, ad as q, a9 as H } from "./PageContainers-BqHFWUr4.js";
import { createStudioProLogger as G } from "./logger-gMbuSAUF.js";
import { g as W, h as $, a as _ } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { _ as z, I as J } from "./ComboBox-BD_2njDk.js";
import { u as Q, D as X } from "./DialogFooter-6k2RbD2B.js";
import { G as w } from "./GroupBox-Czphilzs.js";
import { T as Y, a as Z } from "./toolHandlers-3HUMGCDK.js";
import { T as C } from "./TextInputLabeled-D9mRNz7v.js";
import { a as P } from "./TextWithIcon-DNOEi02G.js";
import { o as ee } from "./genericUtils-GaF65l2f.js";
import { k as ie } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { l as te } from "./documentInitUtils-DoIciLyT.js";
import { g as ae } from "./mxCloudGenAIUtils-U7THU9De.js";
import { a as y, U as ne, d as j } from "./toolUtils-6Ez2eFCF.js";
import { h as g } from "./knowledgebaseToolHandlers-o9yeUkRo.js";
import { C as oe } from "./ComboBoxWithIcon-B8EWofqP.js";
const se = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0,
  isValidCollectionIdentifier: !0,
  isValidMaxResults: !0,
  isValidMinSimilarity: !0
}, le = {
  name: "isValidName",
  description: "isValidDescription",
  document: "isValidDocument",
  collectionIdentifier: "isValidCollectionIdentifier",
  maxResults: "isValidMaxResults",
  minSimilarity: "isValidMinSimilarity"
}, re = [y.HiddenForUser, y.VisibleForUser].map((n) => {
  const t = ne[n];
  return {
    key: n,
    caption: t.caption,
    icon: t.icon ? /* @__PURE__ */ a.jsx(t.icon, {}) : void 0
  };
}), de = ({
  initialTool: n,
  studioPro: t,
  agent: s,
  onClose: f
}) => {
  const [i, u] = c.useState(n || j()), [l, b] = c.useState(se), [V, m] = c.useState([]), [S, D] = c.useState(
    (n || j()).maxResults?.toString() ?? ""
  ), [k, N] = c.useState(
    (n || j()).minSimilarity?.toString() ?? ""
  ), I = c.useCallback(
    async (e) => ({
      isValidName: await g("name", e, s, t),
      isValidDescription: await g(
        "description",
        e,
        s,
        t
      ),
      isValidDocument: await g("document", e, s, t),
      isValidType: !0,
      isValidCollectionIdentifier: await g(
        "collectionIdentifier",
        e,
        s,
        t
      ),
      isValidMaxResults: await g(
        "maxResults",
        e,
        s,
        t
      ),
      isValidMinSimilarity: await g(
        "minSimilarity",
        e,
        s,
        t
      )
    }),
    [t, s]
  );
  c.useEffect(() => {
    i.document ? W(t, i.document).then((e) => {
      if (!e || e.excluded) {
        m([]);
        return;
      }
      const o = e.contents;
      return ae(t, o)();
    }).then((e) => {
      m(!e || typeof e == "string" ? [] : e);
    }).catch(() => m([])) : m([]);
  }, [i.document, t]), c.useEffect(() => {
    n && (D(n.maxResults !== void 0 ? n.maxResults.toString() : ""), N(n.minSimilarity !== void 0 ? n.minSimilarity.toString() : ""), I(n).then((e) => {
      b(e);
    }));
  }, [n, I]);
  const v = c.useCallback(
    async (e, o) => {
      const d = le[e];
      if (d && l[d] !== !0) {
        const r = await g(e, o, s, t);
        b((h) => ({ ...h, [d]: r }));
      }
    },
    [l, s, t]
  ), M = (e, o) => {
    o && p(e, o?.toString() ?? "");
  }, p = (e, o) => {
    if (e === "maxResults") {
      const r = String(o);
      if (!/^\d*$/.test(r))
        return;
      D(r);
      const h = r === "" ? void 0 : Number.parseInt(r, 10), x = {
        ...i,
        maxResults: Number.isNaN(h) ? void 0 : h
      };
      u(x), v(e, x);
      return;
    }
    if (e === "minSimilarity") {
      const r = String(o);
      if (!/^\d*\.?\d*$/.test(r))
        return;
      N(r);
      const h = r === "" || r === "." ? void 0 : Number.parseFloat(r), x = {
        ...i,
        minSimilarity: Number.isNaN(h) ? void 0 : h
      };
      u(x), v(e, x);
      return;
    }
    const d = { ...i, [e]: o };
    u(d), v(e, d);
  }, E = async () => {
    const e = await Z(t, i.document.documentId, te);
    if (e) {
      const o = { ...i, document: e };
      u(o), v("document", o);
    }
  }, U = () => {
    $(t, i.document);
  }, R = async () => {
    const e = await I(i);
    b(e), Object.values(e).some((d) => d !== !0) || f(i);
  }, T = () => {
    f(null);
  };
  Q(T, R);
  const B = () => {
    ee(
      "https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#about-knowledge-bases"
    );
  }, L = (e) => {
    const o = e === y.VisibleForUser, d = { ...i, isVisible: o };
    o || (d.displayTitle = ""), u(d);
  };
  return /* @__PURE__ */ a.jsxs(K, { children: [
    /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsxs(O, { children: [
      /* @__PURE__ */ a.jsxs(w, { label: "General", children: [
        /* @__PURE__ */ a.jsx(
          P,
          {
            ariaLabel: "Knowledge base",
            label: "Knowledge base",
            value: i.document.qualifiedName,
            icon: i.document.qualifiedName ? ie : void 0,
            buttonCaption: "Select...",
            onClick: E,
            validate: () => l.isValidDocument,
            buttonCaptionSecondary: i.document.qualifiedName ? "Show" : void 0,
            onClickSecondary: i.document.qualifiedName ? U : void 0
          }
        ),
        /* @__PURE__ */ a.jsx(
          z,
          {
            "aria-label": "Collection identifier",
            label: "Collection",
            inputValue: i.collectionIdentifier,
            value: i.collectionIdentifier || null,
            description: "Here you can select an existing collection or reference a new collection.",
            validate: () => l.isValidCollectionIdentifier,
            allowsCustomValue: !0,
            onInputChange: (e) => p("collectionIdentifier", e),
            allowsEmptyCollection: !0,
            onChange: (e) => {
              M("collectionIdentifier", e);
            },
            children: V.map((e) => /* @__PURE__ */ a.jsx(J, { id: e.name, children: e.name }, e.name))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(w, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          C,
          {
            label: "Name",
            ariaLabel: "Name",
            value: i.name,
            onChange: (e) => p("name", e),
            validate: () => l.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          Y,
          {
            label: "Description",
            ariaLabel: "Description",
            value: i.description,
            onChange: (e) => p("description", e),
            validate: () => l.isValidDescription
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(w, { label: "Retrieval settings", children: [
        /* @__PURE__ */ a.jsx(
          C,
          {
            label: "Max results",
            ariaLabel: "Max number of results",
            value: S,
            onChange: (e) => p("maxResults", e),
            validate: () => l.isValidMaxResults,
            description: "This is the highest number of data chunks that can be returned in a single retrieve. If left empty, many records could be retrieved, so it's recommended to set this number (to e.g. 5), or set the minimum similarity in the next field, or to set both."
          }
        ),
        /* @__PURE__ */ a.jsx(
          C,
          {
            label: "Min similarity",
            ariaLabel: "Min similarity",
            value: k,
            onChange: (e) => p("minSimilarity", e),
            validate: () => l.isValidMinSimilarity,
            description: "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)."
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(w, { label: "User (optional)", children: [
        /* @__PURE__ */ a.jsx(
          oe,
          {
            ariaLabel: "Permission",
            label: "Permission",
            selectedKey: i.isVisible ? y.VisibleForUser : y.HiddenForUser,
            validate: () => l.isValidType,
            onSelectionChange: L,
            options: re
          }
        ),
        /* @__PURE__ */ a.jsx(
          C,
          {
            label: "Title to display",
            ariaLabel: "Title to display",
            value: i.displayTitle ? i.displayTitle : "",
            onChange: (e) => p("displayTitle", e),
            description: "This title is displayed in the chat when the knowledge base is queried by the agent. If provided this will overwrite the knowledge base name.",
            readOnly: !i.isVisible
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(X, { onOk: R, onCancel: T, onHelp: B })
  ] });
}, ce = ({ studioPro: n, initialTool: t, agent: s, onClose: f }) => /* @__PURE__ */ a.jsx(H, { studioPro: n, children: /* @__PURE__ */ a.jsx(de, { initialTool: t, studioPro: n, agent: s, onClose: f }) }), Ne = {
  async loaded(n, t) {
    const s = F(n), f = G(s);
    try {
      const i = document.getElementById("root");
      if (!i)
        throw new Error("Failed to find the root element");
      const u = q.createRoot(i), l = await _(s, t.agentDocumentId);
      let b;
      t.toolId && (b = (l.knowledgebaseTools || []).find((S) => S.id === t.toolId));
      const V = (m) => {
        s.ui.dialogs.closeWithResult(t.dialogId, m);
      };
      u.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(ce, { studioPro: s, initialTool: b, agent: l, onClose: V }) })
      );
    } catch (i) {
      throw f.error("Error editing agent knowledge base tool:", i), new Error("Error editing agent knowledge base tool:", i);
    }
  }
};
export {
  Ne as component
};
