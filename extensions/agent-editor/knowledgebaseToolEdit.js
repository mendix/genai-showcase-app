import { j as a, d as F } from "./jsx-runtime-CWOFuNcx.js";
import { r as c, a2 as K, W as A, X as O, a1 as q, Y as H } from "./PageContainers-1sk3OYaf.js";
import { createStudioProLogger as G } from "./logger-gMbuSAUF.js";
import { g as W, h as $, a as X } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { _ as Y, I as _ } from "./ComboBox-CJjZjYuG.js";
import { u as z, D as J } from "./DialogFooter-CVDbnhi9.js";
import { G as v } from "./GroupBox-BxPlcX3c.js";
import { T as Q, a as Z } from "./toolHandlers-Z3JXlOg2.js";
import { T as V } from "./TextInputLabeled-CTvLZgVy.js";
import { a as P } from "./TextWithIcon-Cn_oiqNe.js";
import { a as y, U as ee, d as j } from "./toolUtils-B-Rm60rY.js";
import { k as ie } from "./knowledgebaseIcons-B7aB_ZnQ.js";
import { C as te } from "./ComboBoxWithIcon-eOJ6Ms0Q.js";
import { h as b } from "./knowledgebaseToolHandlers-o9yeUkRo.js";
import { l as ae } from "./documentInitUtils-COeMuvhV.js";
import { o as ne } from "./genericUtils-GaF65l2f.js";
import { g as se } from "./mxCloudGenAIUtils-U7THU9De.js";
const oe = {
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
  const t = ee[n];
  return {
    key: n,
    caption: t.caption,
    icon: /* @__PURE__ */ a.jsx(t.icon, {})
  };
}), de = ({
  initialTool: n,
  studioPro: t,
  agent: o,
  onClose: g
}) => {
  const [i, u] = c.useState(() => {
    const e = n || j();
    return {
      ...e,
      isVisible: e.isVisible ?? !1
    };
  }), [l, f] = c.useState(oe), [C, m] = c.useState([]), [S, D] = c.useState(
    (n || j()).maxResults?.toString() ?? ""
  ), [k, N] = c.useState(
    (n || j()).minSimilarity?.toString() ?? ""
  ), I = c.useCallback(
    async (e) => ({
      isValidName: await b("name", e, o, t),
      isValidDescription: await b(
        "description",
        e,
        o,
        t
      ),
      isValidDocument: await b("document", e, o, t),
      isValidType: !0,
      isValidCollectionIdentifier: await b(
        "collectionIdentifier",
        e,
        o,
        t
      ),
      isValidMaxResults: await b(
        "maxResults",
        e,
        o,
        t
      ),
      isValidMinSimilarity: await b(
        "minSimilarity",
        e,
        o,
        t
      )
    }),
    [t, o]
  );
  c.useEffect(() => {
    i.document ? W(t, i.document).then((e) => {
      if (!e || e.excluded) {
        m([]);
        return;
      }
      const s = e.contents;
      return se(t, s)();
    }).then((e) => {
      m(!e || typeof e == "string" ? [] : e);
    }).catch(() => m([])) : m([]);
  }, [i.document, t]), c.useEffect(() => {
    n && (D(n.maxResults !== void 0 ? n.maxResults.toString() : ""), N(n.minSimilarity !== void 0 ? n.minSimilarity.toString() : ""), I(n).then((e) => {
      f(e);
    }));
  }, [n, I]);
  const w = c.useCallback(
    async (e, s) => {
      const d = le[e];
      if (d && l[d] !== !0) {
        const r = await b(e, s, o, t);
        f((h) => ({ ...h, [d]: r }));
      }
    },
    [l, o, t]
  ), M = (e, s) => {
    s && p(e, s?.toString() ?? "");
  }, p = (e, s) => {
    if (e === "maxResults") {
      const r = String(s);
      if (!/^\d*$/.test(r))
        return;
      D(r);
      const h = r === "" ? void 0 : Number.parseInt(r, 10), x = {
        ...i,
        maxResults: Number.isNaN(h) ? void 0 : h
      };
      u(x), w(e, x);
      return;
    }
    if (e === "minSimilarity") {
      const r = String(s);
      if (!/^\d*\.?\d*$/.test(r))
        return;
      N(r);
      const h = r === "" || r === "." ? void 0 : Number.parseFloat(r), x = {
        ...i,
        minSimilarity: Number.isNaN(h) ? void 0 : h
      };
      u(x), w(e, x);
      return;
    }
    const d = { ...i, [e]: s };
    u(d), w(e, d);
  }, E = async () => {
    const e = await Z(t, i.document.documentId, ae);
    if (e) {
      const s = { ...i, document: e };
      u(s), w("document", s);
    }
  }, U = () => {
    $(t, i.document);
  }, R = async () => {
    const e = await I(i);
    f(e), Object.values(e).some((d) => d !== !0) || g(i);
  }, T = () => {
    g(null);
  };
  z(T, R);
  const B = () => {
    ne(
      "https://docs.mendix.com/appstore/modules/genai/mx-cloud-genai/MxGenAI-connector/#about-knowledge-bases"
    );
  }, L = (e) => {
    const s = e === y.VisibleForUser, d = { ...i, isVisible: s };
    s || (d.displayTitle = ""), u(d);
  };
  return /* @__PURE__ */ a.jsxs(K, { children: [
    /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsxs(O, { children: [
      /* @__PURE__ */ a.jsxs(v, { label: "General", children: [
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
          Y,
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
            children: C.map((e) => /* @__PURE__ */ a.jsx(_, { id: e.name, children: e.name }, e.name))
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(v, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          V,
          {
            label: "Name",
            ariaLabel: "Name",
            value: i.name,
            onChange: (e) => p("name", e),
            validate: () => l.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          Q,
          {
            label: "Description",
            ariaLabel: "Description",
            value: i.description,
            onChange: (e) => p("description", e),
            validate: () => l.isValidDescription
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(v, { label: "Retrieval settings", children: [
        /* @__PURE__ */ a.jsx(
          V,
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
          V,
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
      /* @__PURE__ */ a.jsxs(v, { label: "User (optional)", children: [
        /* @__PURE__ */ a.jsx(
          te,
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
          V,
          {
            label: "Title to display",
            ariaLabel: "Title to display",
            value: i.displayTitle ?? "",
            onChange: (e) => p("displayTitle", e),
            description: "This title is displayed in the chat when the knowledge base is queried by the agent. If not provided, the knowledge base name will be displayed.",
            readOnly: !i.isVisible
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(J, { onOk: R, onCancel: T, onHelp: B })
  ] });
}, ce = ({ studioPro: n, initialTool: t, agent: o, onClose: g }) => /* @__PURE__ */ a.jsx(H, { studioPro: n, children: /* @__PURE__ */ a.jsx(de, { initialTool: t, studioPro: n, agent: o, onClose: g }) }), Ne = {
  async loaded(n, t) {
    const o = F(n), g = G(o);
    try {
      const i = document.getElementById("root");
      if (!i)
        throw new Error("Failed to find the root element");
      const u = q.createRoot(i), l = await X(o, t.agentDocumentId);
      let f;
      t.toolId && (f = (l.knowledgebaseTools || []).find((S) => S.id === t.toolId));
      const C = (m) => {
        o.ui.dialogs.closeWithResult(t.dialogId, m);
      };
      u.render(
        /* @__PURE__ */ a.jsx(c.StrictMode, { children: /* @__PURE__ */ a.jsx(ce, { studioPro: o, initialTool: f, agent: l, onClose: C }) })
      );
    } catch (i) {
      throw g.error("Error editing agent knowledge base tool:", i), new Error("Error editing agent knowledge base tool:", i);
    }
  }
};
export {
  Ne as component
};
