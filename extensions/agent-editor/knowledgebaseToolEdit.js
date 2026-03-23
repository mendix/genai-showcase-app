import { r as l, w as a, V as B, E as A, C as W, G as N, Q as G, D as H } from "./Icon-DL4Zg1xv.js";
import { s as J, c as U } from "./DesignSystemTokens-CB_9gr2a.js";
import { n as $ } from "./MicroflowIcon-BpJMnxRT.js";
import { D as Q } from "./DialogFooter-D2shZ6-5.js";
import { d as V, T as _, a as z, b as X } from "./toolHandlers-Boy31O5Y.js";
import { T as h } from "./TextInputLabeled-gjLdhU4s.js";
import { T as Y } from "./TextInputWithButton-E-wZEDvQ.js";
import { q as M } from "./index-CQcFpK0H.js";
import { h as m } from "./knowledgebaseToolHandlers-CAdoxUrB.js";
const Z = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0,
  isValidCollectionIdentifier: !0,
  isValidMaxResults: !0,
  isValidMinSimilarity: !0
}, P = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument",
  collectionIdentifier: "isValidCollectionIdentifier",
  maxResults: "isValidMaxResults",
  minSimilarity: "isValidMinSimilarity"
}, ee = ({
  initialTool: s,
  studioPro: t,
  agent: n,
  onClose: u
}) => {
  const [i, p] = l.useState(s || V()), [d, b] = l.useState(Z), [x, g] = l.useState(
    (s || V()).maxResults.toString()
  ), [w, E] = l.useState(
    (s || V()).minSimilarity.toString()
  ), C = l.useCallback(
    async (e) => ({
      isValidName: await m("name", e, n, t),
      isValidDescription: await m(
        "description",
        e,
        n,
        t
      ),
      isValidDocument: await m("document", e, n, t),
      isValidType: !0,
      isValidCollectionIdentifier: await m(
        "collectionIdentifier",
        e,
        n,
        t
      ),
      isValidMaxResults: await m(
        "maxResults",
        e,
        n,
        t
      ),
      isValidMinSimilarity: await m(
        "minSimilarity",
        e,
        n,
        t
      )
    }),
    [t, n]
  );
  l.useEffect(() => {
    s && C(s).then((e) => {
      b(e);
    });
  }, [s, C]);
  const f = l.useCallback(
    async (e, c) => {
      const o = P[e];
      if (o && d[o] !== !0) {
        const r = await m(e, c, n, t);
        b((S) => ({ ...S, [o]: r }));
      }
    },
    [d, n, t]
  ), y = (e, c) => {
    const o = { ...i, [e]: c };
    p(o), f(e, o);
  }, v = l.useCallback(
    (e, c, o) => (r) => {
      const S = o ? /^-?\d+$/ : /^-?\d*\.?\d*$/, R = o ? ["-"] : ["-", "."];
      if (r !== "" && !R.includes(r) && !S.test(r))
        return;
      if (c(r), r === "" || R.includes(r)) {
        const I = {
          ...i,
          [e]: Number.NaN
        };
        p(I), f(e, I);
        return;
      }
      const j = o ? Number.parseInt(r, 10) : Number.parseFloat(r), D = {
        ...i,
        [e]: Number.isNaN(j) ? Number.NaN : j
      };
      p(D), f(e, D);
    },
    [i, f]
  ), T = l.useCallback(() => x !== "" && !Number.isFinite(i.maxResults) ? "Please enter a valid number." : Number.isInteger(i.maxResults) ? i.maxResults < 1 || i.maxResults > 100 ? "Max results must be between 1 and 100." : !0 : "Max results must be a whole number.", [x, i.maxResults]), k = l.useCallback(() => w !== "" && !Number.isFinite(i.minSimilarity) ? "Please enter a valid number." : i.minSimilarity < 0 || i.minSimilarity > 1 ? "Min similarity must be between 0 and 1." : !0, [w, i.minSimilarity]), L = async () => {
    const e = await X(t, M);
    if (e) {
      const c = { ...i, document: e };
      p(c), f("document", c);
    }
  }, K = () => {
    z(t, i.document, M);
  }, F = async () => {
    const e = await C(i);
    console.log(e), b(e), Object.values(e).some((o) => o !== !0) || u(i);
  }, O = () => {
    u(null);
  }, q = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return /* @__PURE__ */ a.jsxs(B, { children: [
    /* @__PURE__ */ a.jsx(A, { children: /* @__PURE__ */ a.jsxs(W, { children: [
      /* @__PURE__ */ a.jsx(N, { label: "Common", children: /* @__PURE__ */ a.jsx(
        Y,
        {
          ariaLabel: "Knowledge base",
          label: "Knowledge base",
          value: i.document.qualifiedName,
          icon: i.document.qualifiedName ? /* @__PURE__ */ a.jsx($, {}) : void 0,
          buttonCaption: "Select...",
          onClick: L,
          validate: () => d.isValidDocument,
          buttonCaptionSecondary: i.document.qualifiedName ? "Show" : void 0,
          onClickSecondary: i.document.qualifiedName ? K : void 0
        }
      ) }),
      /* @__PURE__ */ a.jsxs(N, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          h,
          {
            label: "Name",
            ariaLabel: "Name",
            value: i.name,
            onChange: (e) => y("name", e),
            validate: () => d.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          _,
          {
            label: "Description",
            ariaLabel: "Description",
            value: i.description,
            onChange: (e) => y("description", e),
            validate: () => d.isValidDescription
          }
        )
      ] }),
      /* @__PURE__ */ a.jsxs(N, { label: "Knowledge base settings", children: [
        /* @__PURE__ */ a.jsx(
          h,
          {
            label: "Collection identifier",
            ariaLabel: "Collection identifier",
            value: i.collectionIdentifier,
            onChange: (e) => y("collectionIdentifier", e),
            validate: () => d.isValidCollectionIdentifier
          }
        ),
        /* @__PURE__ */ a.jsx(
          h,
          {
            label: "Max results",
            ariaLabel: "Max results",
            value: x,
            onChange: v("maxResults", g, !0),
            validate: T,
            description: "Whole number between 1 and 100"
          }
        ),
        /* @__PURE__ */ a.jsx(
          h,
          {
            label: "Min similarity",
            ariaLabel: "Min similarity",
            value: w,
            onChange: v("minSimilarity", E, !1),
            validate: k,
            description: "Decimal between 0 and 1"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(Q, { onOk: F, onCancel: O, onHelp: q })
  ] });
}, ie = ({ studioPro: s, initialTool: t, agent: n, onClose: u }) => /* @__PURE__ */ a.jsx(H, { studioPro: s, children: /* @__PURE__ */ a.jsx(ee, { initialTool: t, studioPro: s, agent: n, onClose: u }) }), me = {
  async loaded(s, t) {
    const n = J(s), u = U(n);
    try {
      const i = document.getElementById("root");
      if (!i)
        throw new Error("Failed to find the root element");
      const p = G.createRoot(i);
      let d;
      t.tool && (d = JSON.parse(decodeURIComponent(t.tool)));
      const b = JSON.parse(decodeURIComponent(t.agent)), x = (g) => {
        n.ui.dialogs.closeWithResult(t.dialogId, g);
      };
      p.render(
        /* @__PURE__ */ a.jsx(l.StrictMode, { children: /* @__PURE__ */ a.jsx(ie, { studioPro: n, initialTool: d, agent: b, onClose: x }) })
      );
    } catch (i) {
      throw u.error("Error editing agent knowledge base tool:", i), new Error("Error editing agent knowledge base tool:", i);
    }
  }
};
export {
  me as component
};
//# sourceMappingURL=knowledgebaseToolEdit.js.map
