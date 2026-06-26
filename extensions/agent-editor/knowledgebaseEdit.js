import { r as h, R as n, a1 as I, a4 as D, a9 as k, ai as F, ah as P, ae as M, af as U, aj as _ } from "./formelements-DgWWXRMR.js";
import { u as z, B as $, a as H, c as J, C as Q } from "./TextWithIcon-BsB7aLN_.js";
import { createStudioProLogger as A } from "./logger-Bof2Evv1.js";
import { y as R, z as G, q as X, B as Y, r as Z, t as ee } from "./index-Cosn4mN0.js";
import { C as f, i as te, B as ne, v as se, a as ae } from "./ButtonWithLabel-CwHlV4OE.js";
import { W as oe, y as B } from "./Banner-Tj4hO43W.js";
import { d as re, a as ie, u as le, g as ce } from "./mxCloudGenAIUtils-BhrK-gu0.js";
import { T as de } from "./Table-CJG1u8pf.js";
import { T as j } from "./TextInputLabeled-DcUYd1Xh.js";
import { T as ue } from "./TextInputWithButton-H-kPhdc5.js";
const N = (e, t) => async (i) => {
  const a = A(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, i);
  } catch (r) {
    a.error("Failed to save knowledge base document:", r), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: r.message
    });
  }
}, V = (e) => {
  const t = e.providerFields;
  return {
    ...G(),
    provider: e.provider,
    providerFields: {
      ...R(),
      key: t.key
    }
  };
}, me = (e, t, i, a) => async () => {
  if (!(e.provider === a && "key" in e.providerFields) && a === "MxCloudGenAI") {
    const r = R(), d = { ...e, provider: a, providerFields: r };
    t(d), i(d);
  }
}, b = (e, t) => {
  if (e === t) return !0;
  if (e == null || t === null || t === void 0 || typeof e != "object" || typeof t != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
  if (Array.isArray(e) && Array.isArray(t))
    return e.length !== t.length ? !1 : e.every((s, m) => b(s, t[m]));
  const i = e, a = t, r = Object.keys(i), d = Object.keys(a);
  return r.length !== d.length ? !1 : r.every((s) => b(i[s], a[s]));
}, pe = async (e, t) => {
  const i = A(e), a = await ie(e, t);
  if (typeof a == "string") {
    i.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return le(
    t,
    a
  );
}, ye = async (e, t, i, a, r) => {
  var y, g;
  const d = A(e);
  let s, m = !1, p = !1;
  try {
    const u = t.providerFields, l = await X(e, u.key);
    if (!l)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const o = re(e, l);
    if (o.type !== "KNOWLEDGE_BASE")
      throw new Error(`Unsupported key type: ${o.type}. Only Knowledge Base keys are currently supported.`);
    const x = {
      key: u.key,
      keyId: o.keyId || "",
      keyName: o.keyName || "",
      environment: o.environment || "",
      deepLinkURL: o.deepLinkUrl || "",
      modelDisplayName: o.embeddings.name || "",
      modelName: o.embeddings.model || ""
    };
    s = {
      ...t,
      name: o.name || "",
      providerFields: {
        ...x
      }
    }, p = !0;
    const v = await pe(e, s);
    v && (m = !0, s = v);
  } catch (u) {
    d.error("Error during MxCloud GenAI key import:", u), a(f.InvalidContent);
  } finally {
    if (!p)
      s = V(t), i(s), r(s);
    else if (m)
      s && !b(t, s) && (i(s), r(s));
    else {
      const u = (y = t.providerFields) == null ? void 0 : y.keyId, l = (g = s == null ? void 0 : s.providerFields) == null ? void 0 : g.keyId;
      u !== l && s && (i(s), r(s));
    }
  }
};
async function fe(e, t) {
  var r;
  const i = t.providerFields, a = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: (r = i == null ? void 0 : i.key) == null ? void 0 : r.documentId
  });
  if (a.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: a.selected.id,
          qualifiedName: a.selected.module + "." + a.selected.name
        }
      }
    };
  if (a.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function he(e, t) {
  var d;
  let i = [];
  const a = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const s = await ce(e, t)();
        return typeof s == "string" ? s : (i = s, !0);
      }
    }
  ], r = await e.ui.dialogs.showProgressDialog("Getting collections", a);
  switch (r.result) {
    case "Success":
      return i;
    case "UserCancelled":
      return;
    case "Failure": {
      const s = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", m = ((d = r.failedStep) == null ? void 0 : d.error) ?? "";
      await e.ui.messageBoxes.show("error", s, m);
      return;
    }
  }
}
const w = () => {
}, ve = ({
  studioPro: e,
  knowledgebase: t,
  setKnowledgebase: i,
  updateStudioProDocument: a
}) => {
  var S, E;
  const [r, d] = h.useState(), [s, m] = h.useState(!1), [p, y] = h.useState([]), [g, u] = h.useState(null), l = t.providerFields, o = async () => {
    m(!1);
    const c = await he(e, t);
    if (c === void 0) {
      y([]), u(null);
      return;
    }
    y(c), m(!0), u(/* @__PURE__ */ new Date());
  }, x = async () => {
    l.key && Z(e, l.key);
  }, v = async (c) => {
    const W = c.providerFields, L = await se(e, W.key);
    if (d(L), !L)
      ye(
        e,
        c,
        i,
        d,
        a
      );
    else {
      const K = V(c);
      i(K), a(K);
    }
  }, C = async () => {
    const c = await fe(e, t);
    c && (y([]), u(null), i(c), a(c), await v(c));
  }, O = (c) => {
    (l.key && c.includes(l.key.documentId) || c.includes("projectSettings")) && v(t);
  };
  z({
    studioPro: e,
    dependentIds: [(S = l.key) == null ? void 0 : S.documentId].filter((c) => !!c),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: O
  }), h.useEffect(() => {
    v(t);
  }, []);
  const T = (c) => c === f.Required ? "Knowledge base key is required" : c === f.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : c === f.InvalidType ? "Selected constant must be of type string." : c === f.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, q = r === f.EmptyValue || r === f.InvalidContent || r === f.PrivateValue;
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(I, { label: "Resource", children: [
      /* @__PURE__ */ n.jsx(
        ue,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((E = l.key) == null ? void 0 : E.qualifiedName) ?? "",
          icon: l.key ? /* @__PURE__ */ n.jsx(te, {}) : void 0,
          buttonCaption: "Select...",
          onClick: C,
          onClickSecondary: l.key ? x : void 0,
          validate: () => T(r),
          buttonCaptionSecondary: l.key ? "Show" : void 0
        }
      ),
      q && /* @__PURE__ */ n.jsxs(oe, { children: [
        /* @__PURE__ */ n.jsx($, { children: r === f.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
        /* @__PURE__ */ n.jsx("div", { children: r === f.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to use your Knowledge base locally, please set a valid value for the key constant." })
      ] }),
      !l.key && /* @__PURE__ */ n.jsxs(D, { children: [
        /* @__PURE__ */ n.jsx(k, { children: /* @__PURE__ */ n.jsx(F, {}) }),
        /* @__PURE__ */ n.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(
          B,
          {
            href: "https://genai.home.mendix.com/p/resources",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Create a key in the portal"
          }
        ) })
      ] }),
      l.keyId && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(
          j,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: t.name,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          j,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: l.modelDisplayName,
            icon: l.modelDisplayName && l.modelDisplayName.toLocaleLowerCase().includes("cohere") ? Y : void 0,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          j,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: l.modelName,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          j,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: l.keyName,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          j,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: l.environment,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsxs(D, { children: [
          /* @__PURE__ */ n.jsx(k, { children: /* @__PURE__ */ n.jsx(F, {}) }),
          /* @__PURE__ */ n.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(B, { href: l.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    l.keyId && /* @__PURE__ */ n.jsxs(I, { label: "Configured Collections", children: [
      /* @__PURE__ */ n.jsx(ne, { label: "Collections", buttonCaption: "List collections", onPress: o }),
      s && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        g && /* @__PURE__ */ n.jsxs(H, { children: [
          "Last updated: ",
          g.toLocaleString()
        ] }),
        /* @__PURE__ */ n.jsx(
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
            data: p.map((c) => [
              {
                cellContent: c.name,
                tooltipText: c.name
              }
            ])
          }
        )
      ] })
    ] })
  ] });
}, ge = G(), xe = ({ studioPro: e, documentId: t }) => {
  const i = e.ui.messageBoxes, a = e.app.model.customBlobDocuments, [r, d] = h.useState(0), [s, m] = h.useState(!1), [p, y] = h.useState(ge), g = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: ee }
  ];
  h.useEffect(() => {
    const o = (x) => {
      const { documents: v } = x;
      v.some((C) => C.documentId === t) && d((C) => C + 1);
    };
    return a.addEventListener("documentsChanged", o), () => {
      a.removeEventListener("documentsChanged", o);
    };
  }, []), h.useEffect(() => {
    a.getDocumentById(t).then(async (o) => {
      if (o && !("error" in o)) {
        const x = o.document.contents;
        y({ ...x }), m(!0);
      } else
        throw new Error((o == null ? void 0 : o.error) || "Document not found");
    }).catch(async (o) => {
      await i.show("error", "Error loading document", "Details: " + (o == null ? void 0 : o.message) || o);
    });
  }, [r]);
  const u = async (o) => {
    me(
      p,
      y,
      N(e, t),
      o
    )();
  }, l = () => p.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ n.jsx(P, { studioPro: e, children: /* @__PURE__ */ n.jsxs(M, { children: [
    !s && /* @__PURE__ */ n.jsx(Q, {}),
    s && /* @__PURE__ */ n.jsx(U, { children: /* @__PURE__ */ n.jsxs(_, { children: [
      /* @__PURE__ */ n.jsx(I, { label: "Common", children: /* @__PURE__ */ n.jsx(
        ae,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: p.provider,
          options: g,
          onSelectionChange: u,
          validate: l
        }
      ) }),
      p.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        ve,
        {
          studioPro: e,
          knowledgebase: p,
          setKnowledgebase: y,
          updateStudioProDocument: N(e, t)
        }
      )
    ] }) })
  ] }) });
}, Ke = J(xe);
export {
  Ke as component
};
