import { T as q, r as v, R as t, a1 as j, a4 as K, a9 as I, ai as F, ah as P, ae as M, af as U, aj as z } from "./formelements-DgWWXRMR.js";
import { u as _, B as $, c as H, C as J } from "./TextWithIcon-D9gq9fS9.js";
import { createStudioProLogger as k } from "./logger-Bof2Evv1.js";
import { z as N, B as R, r as Q, E as X, t as Y, u as Z } from "./index-ClN9e0Gp.js";
import { C as y, i as ee, B as te, v as ne, a as se } from "./ButtonWithLabel-DqyUFLpr.js";
import { W as ae, y as B } from "./Banner-Tj4hO43W.js";
import { i as oe } from "./objectUtils-ChZ8y4UX.js";
import { d as re, a as ie, b as le, g as ce } from "./mxCloudGenAIUtils-BRWNqsBE.js";
import { T as de } from "./Table-CJG1u8pf.js";
import { T as w } from "./TextInputLabeled-DcUYd1Xh.js";
import { T as ue } from "./TextInputWithButton-H-kPhdc5.js";
const A = (e, n) => async (c) => {
  const o = k(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(n, c);
  } catch (i) {
    o.error("Failed to save knowledge base document:", i), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: i.message
    });
  }
}, G = (e) => {
  const n = e.providerFields;
  return {
    ...R(),
    provider: e.provider,
    providerFields: {
      ...N(),
      key: n.key
    }
  };
}, me = (e, n, c, o) => async () => {
  if (!(e.provider === o && "key" in e.providerFields) && o === "MxCloudGenAI") {
    const i = N(), d = { ...e, provider: o, providerFields: i };
    n(d), c(d);
  }
}, pe = async (e, n) => {
  const c = k(e), o = await ie(e, n);
  if (typeof o == "string") {
    c.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return le(
    n,
    o
  );
}, ye = async (e, n, c, o, i) => {
  var p, g;
  const d = k(e);
  let a, h = !1, m = !1;
  try {
    const u = n.providerFields, r = await Q(e, u.key);
    if (!r)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = re(e, r);
    if (s.type !== "KNOWLEDGE_BASE")
      throw new Error(`Unsupported key type: ${s.type}. Only Knowledge Base keys are currently supported.`);
    const x = {
      key: u.key,
      keyId: s.keyId || "",
      keyName: s.keyName || "",
      environment: s.environment || "",
      deepLinkURL: s.deepLinkUrl || "",
      modelDisplayName: s.embeddings.name || "",
      modelName: s.embeddings.model || ""
    };
    a = {
      ...n,
      name: s.name || "",
      providerFields: {
        ...x
      }
    }, m = !0;
    const f = await pe(e, a);
    f && (h = !0, a = f);
  } catch (u) {
    d.error("Error during MxCloud GenAI key import:", u), o(y.InvalidContent);
  } finally {
    if (!m)
      a = G(n), c(a), i(a);
    else if (h)
      a && !oe(n, a) && (c(a), i(a));
    else {
      const u = (p = n.providerFields) == null ? void 0 : p.keyId, r = (g = a == null ? void 0 : a.providerFields) == null ? void 0 : g.keyId;
      u !== r && a && (c(a), i(a));
    }
  }
};
async function ve(e, n) {
  var i;
  const c = n.providerFields, o = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: (i = c == null ? void 0 : c.key) == null ? void 0 : i.documentId
  });
  if (o.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
async function he(e, n) {
  var d;
  let c = [];
  const o = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const a = await ce(e, n)();
        return typeof a == "string" ? a : (c = a, !0);
      }
    }
  ], i = await e.ui.dialogs.showProgressDialog("Getting collections", o);
  switch (i.result) {
    case "Success":
      return c;
    case "UserCancelled":
      return;
    case "Failure": {
      const a = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", h = ((d = i.failedStep) == null ? void 0 : d.error) ?? "";
      await e.ui.messageBoxes.show("error", a, h);
      return;
    }
  }
}
const b = () => {
}, fe = q.div`
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    font-size: 10px;
`, ge = ({
  studioPro: e,
  knowledgebase: n,
  setKnowledgebase: c,
  updateStudioProDocument: o
}) => {
  var S, E;
  const [i, d] = v.useState(), [a, h] = v.useState(!1), [m, p] = v.useState([]), [g, u] = v.useState(null), r = n.providerFields, s = async () => {
    h(!1);
    const l = await he(e, n);
    if (l === void 0) {
      p([]), u(null);
      return;
    }
    p(l), h(!0), u(/* @__PURE__ */ new Date());
  }, x = async () => {
    r.key && Y(e, r.key);
  }, f = async (l) => {
    const W = l.providerFields, L = await ne(e, W.key);
    if (d(L), !L)
      ye(
        e,
        l,
        c,
        d,
        o
      );
    else {
      const D = G(l);
      c(D), o(D);
    }
  }, C = async () => {
    const l = await ve(e, n);
    l && (p([]), u(null), c(l), o(l), await f(l));
  }, T = (l) => {
    (r.key && l.includes(r.key.documentId) || l.includes("projectSettings")) && f(n);
  };
  _({
    studioPro: e,
    dependentIds: [(S = r.key) == null ? void 0 : S.documentId].filter((l) => !!l),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: T
  }), v.useEffect(() => {
    f(n);
  }, []);
  const V = (l) => l === y.Required ? "Knowledge base key is required" : l === y.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : l === y.InvalidType ? "Selected constant must be of type string." : l === y.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, O = i === y.EmptyValue || i === y.InvalidContent || i === y.PrivateValue;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(j, { label: "Resource", children: [
      /* @__PURE__ */ t.jsx(
        ue,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((E = r.key) == null ? void 0 : E.qualifiedName) ?? "",
          icon: r.key ? /* @__PURE__ */ t.jsx(ee, {}) : void 0,
          buttonCaption: "Select...",
          onClick: C,
          onClickSecondary: r.key ? x : void 0,
          validate: () => V(i),
          buttonCaptionSecondary: r.key ? "Show" : void 0
        }
      ),
      O && /* @__PURE__ */ t.jsxs(ae, { children: [
        /* @__PURE__ */ t.jsx($, { children: i === y.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
        /* @__PURE__ */ t.jsx("div", { children: i === y.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to use your Knowledge base locally, please set a valid value for the key constant." })
      ] }),
      !r.key && /* @__PURE__ */ t.jsxs(K, { children: [
        /* @__PURE__ */ t.jsx(I, { children: /* @__PURE__ */ t.jsx(F, {}) }),
        /* @__PURE__ */ t.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
          B,
          {
            href: "https://genai.home.mendix.com/p/resources",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Create a key in the portal"
          }
        ) })
      ] }),
      r.keyId && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: n.name,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: r.modelDisplayName,
            icon: r.modelDisplayName && r.modelDisplayName.toLocaleLowerCase().includes("cohere") ? X : void 0,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: r.modelName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: r.keyName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: r.environment,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsxs(K, { children: [
          /* @__PURE__ */ t.jsx(I, { children: /* @__PURE__ */ t.jsx(F, {}) }),
          /* @__PURE__ */ t.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(B, { href: r.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    r.keyId && /* @__PURE__ */ t.jsxs(j, { label: "Configured Collections", children: [
      /* @__PURE__ */ t.jsx(te, { label: "Collections", buttonCaption: "List collections", onPress: s }),
      a && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        g && /* @__PURE__ */ t.jsxs(fe, { children: [
          "Last updated: ",
          g.toLocaleString()
        ] }),
        /* @__PURE__ */ t.jsx(
          de,
          {
            ariaLabel: "Collections table",
            columns: [
              {
                id: "name",
                caption: "Name",
                allowsResizing: !0,
                isRowHeader: !0
              }
            ],
            data: m.map((l) => [
              {
                cellContent: l.name,
                tooltipText: l.name
              }
            ])
          }
        )
      ] })
    ] })
  ] });
}, xe = R(), Ce = ({ studioPro: e, documentId: n }) => {
  const c = e.ui.messageBoxes, o = e.app.model.customBlobDocuments, [i, d] = v.useState(0), [a, h] = v.useState(!1), [m, p] = v.useState(xe), g = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Z }
  ];
  v.useEffect(() => {
    const s = (x) => {
      const { documents: f } = x;
      f.some((C) => C.documentId === n) && d((C) => C + 1);
    };
    return o.addEventListener("documentsChanged", s), () => {
      o.removeEventListener("documentsChanged", s);
    };
  }, []), v.useEffect(() => {
    o.getDocumentById(n).then(async (s) => {
      if (s && !("error" in s)) {
        const x = s.document.contents;
        p({ ...x }), h(!0);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await c.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s);
    });
  }, [i]);
  const u = async (s) => {
    me(
      m,
      p,
      A(e, n),
      s
    )();
  }, r = () => m.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ t.jsx(P, { studioPro: e, children: /* @__PURE__ */ t.jsxs(M, { children: [
    !a && /* @__PURE__ */ t.jsx(J, {}),
    a && /* @__PURE__ */ t.jsx(U, { children: /* @__PURE__ */ t.jsxs(z, { children: [
      /* @__PURE__ */ t.jsx(j, { label: "Common", children: /* @__PURE__ */ t.jsx(
        se,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: m.provider,
          options: g,
          onSelectionChange: u,
          validate: r
        }
      ) }),
      m.provider === "MxCloudGenAI" && /* @__PURE__ */ t.jsx(
        ge,
        {
          studioPro: e,
          knowledgebase: m,
          setKnowledgebase: p,
          updateStudioProDocument: A(e, n)
        }
      )
    ] }) })
  ] }) });
}, Be = H(Ce);
export {
  Be as component
};
