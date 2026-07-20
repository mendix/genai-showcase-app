import { j as n } from "./jsx-runtime-CWOFuNcx.js";
import { r as f, a9 as M, a6 as W, a7 as q, aa as P } from "./PageContainers-BvK5usmz.js";
import { u as U, B as _, C as $, c as z } from "./TextWithIcon-C7mb5Wl2.js";
import { createStudioProLogger as A } from "./logger-gMbuSAUF.js";
import { e as B, f as G } from "./documentInitUtils-Bwe4f_Cu.js";
import { c as H, a as J } from "./modelIcons-YezrRLMt.js";
import { C as Q } from "./CenteredLoadingSpinner-DRQ0Sbi_.js";
import { C as y, i as X, B as Y, v as Z, a as ee } from "./ButtonWithLabel-D7GGNMCy.js";
import { G as b } from "./GroupBox-Bv1UqUKB.js";
import { y as F } from "./Link-Bxad9cv4.js";
import { g as te, h as ne } from "./constantUtils-D0RXxXWn.js";
import { d as se, a as oe, u as re, g as ae } from "./mxCloudGenAIUtils-BSv0PxuL.js";
import { u as ie } from "./useExtensionPermissionsChanged-fZbEmljF.js";
import { W as le } from "./Banner-DAKvWnIG.js";
import { D as S, a as I, d as L } from "./formelements-Daexkze0.js";
import { T as de } from "./Table-bHKZTZKr.js";
import { T as j } from "./TextInputLabeled-C0PQPpUV.js";
import { T as ce } from "./TextInputWithButton-CkuCCNYk.js";
const D = (e, t) => async (r) => {
  const s = A(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, r);
  } catch (a) {
    s.error("Failed to save knowledge base document:", a), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: a.message
    });
  }
}, N = (e) => {
  const t = e.providerFields;
  return {
    ...G(),
    provider: e.provider,
    providerFields: {
      ...B(),
      key: t.key
    }
  };
}, ue = (e, t, r, s) => async () => {
  if (!(e.provider === s && "key" in e.providerFields) && s === "MxCloudGenAI") {
    const a = B(), d = { ...e, provider: s, providerFields: a };
    t(d), r(d);
  }
}, k = (e, t) => {
  if (e === t) return !0;
  if (e == null || t === null || t === void 0 || typeof e != "object" || typeof t != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
  if (Array.isArray(e) && Array.isArray(t))
    return e.length !== t.length ? !1 : e.every((o, h) => k(o, t[h]));
  const r = e, s = t, a = Object.keys(r), d = Object.keys(s);
  return a.length !== d.length ? !1 : a.every((o) => k(r[o], s[o]));
}, me = async (e, t) => {
  const r = A(e), s = await oe(e, t);
  if (typeof s == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return re(
    t,
    s
  );
}, pe = async (e, t, r, s, a) => {
  const d = A(e);
  let o, h = !1, p = !1;
  try {
    const m = t.providerFields, v = await te(e, m.key);
    if (!v)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const u = se(e, v);
    if (u.type !== "KNOWLEDGE_BASE")
      throw new Error(`Unsupported key type: ${u.type}. Only Knowledge Base keys are currently supported.`);
    const l = {
      key: m.key,
      keyId: u.keyId || "",
      keyName: u.keyName || "",
      environment: u.environment || "",
      deepLinkURL: u.deepLinkUrl || "",
      modelDisplayName: u.embeddings.name || "",
      modelName: u.embeddings.model || ""
    };
    o = {
      ...t,
      name: u.name || "",
      providerFields: {
        ...l
      }
    }, p = !0;
    const c = await me(e, o);
    c && (h = !0, o = c);
  } catch (m) {
    d.error("Error during MxCloud GenAI key import:", m), s(y.InvalidContent);
  } finally {
    if (!p)
      o = N(t), r(o), a(o);
    else if (h)
      o && !k(t, o) && (r(o), a(o));
    else {
      const m = t.providerFields?.keyId, v = o?.providerFields?.keyId;
      m !== v && o && (r(o), a(o));
    }
  }
};
async function ye(e, t) {
  const r = t.providerFields, s = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: r?.key?.documentId
  });
  if (s.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: s.selected.id,
          qualifiedName: s.selected.module + "." + s.selected.name
        }
      }
    };
  if (s.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function fe(e, t) {
  let r = [];
  const s = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const d = await ae(e, t)();
        return typeof d == "string" ? d : (r = d, !0);
      }
    }
  ], a = await e.ui.dialogs.showProgressDialog("Getting collections", s);
  switch (a.result) {
    case "Success":
      return r;
    case "UserCancelled":
      return;
    case "Failure": {
      const d = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", o = a.failedStep?.error ?? "";
      await e.ui.messageBoxes.show("error", d, o);
      return;
    }
  }
}
const w = () => {
}, he = ({
  studioPro: e,
  knowledgebase: t,
  setKnowledgebase: r,
  updateStudioProDocument: s
}) => {
  const [a, d] = f.useState(), [o, h] = f.useState(!1), [p, m] = f.useState([]), [v, u] = f.useState(null), l = t.providerFields, c = async () => {
    h(!1);
    const i = await fe(e, t);
    if (i === void 0) {
      m([]), u(null);
      return;
    }
    m(i), h(!0), u(/* @__PURE__ */ new Date());
  }, C = async () => {
    l.key && ne(e, l.key);
  }, g = async (i) => {
    const T = i.providerFields, K = await Z(e, T.key);
    if (d(K), !K)
      pe(
        e,
        i,
        r,
        d,
        s
      );
    else {
      const E = N(i);
      r(E), s(E);
    }
  }, x = async () => {
    const i = await ye(e, t);
    i && (m([]), u(null), r(i), s(i), await g(i));
  }, R = (i) => {
    (l.key && i.includes(l.key.documentId) || i.includes("projectSettings")) && g(t);
  };
  U({
    studioPro: e,
    dependentIds: [l.key?.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: R
  }), ie({
    studioPro: e,
    onPermissionsChanged: () => g(t)
  }), f.useEffect(() => {
    g(t);
  }, []);
  const V = (i) => i === y.Required ? "Knowledge base key is required" : i === y.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === y.InvalidType ? "Selected constant must be of type string." : i === y.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, O = a === y.EmptyValue || a === y.InvalidContent || a === y.PrivateValue;
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(b, { label: "Resource", children: [
      /* @__PURE__ */ n.jsx(
        ce,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: l.key?.qualifiedName ?? "",
          icon: l.key ? /* @__PURE__ */ n.jsx(X, {}) : void 0,
          buttonCaption: "Select...",
          onClick: x,
          onClickSecondary: l.key ? C : void 0,
          validate: () => V(a),
          buttonCaptionSecondary: l.key ? "Show" : void 0
        }
      ),
      O && /* @__PURE__ */ n.jsxs(le, { children: [
        /* @__PURE__ */ n.jsx(_, { children: a === y.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
        /* @__PURE__ */ n.jsx("div", { children: a === y.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to use your Knowledge base locally, please set a valid value for the key constant." })
      ] }),
      !l.key && /* @__PURE__ */ n.jsxs(S, { children: [
        /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(L, {}) }),
        /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(
          F,
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
            icon: l.modelDisplayName && l.modelDisplayName.toLocaleLowerCase().includes("cohere") ? H : void 0,
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
        /* @__PURE__ */ n.jsxs(S, { children: [
          /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(L, {}) }),
          /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(F, { href: l.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    l.keyId && /* @__PURE__ */ n.jsxs(b, { label: "Configured Collections", children: [
      /* @__PURE__ */ n.jsx(Y, { label: "Collections", buttonCaption: "List collections", onPress: c }),
      o && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        v && /* @__PURE__ */ n.jsxs($, { children: [
          "Last updated: ",
          v.toLocaleString()
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
            data: p.map((i) => [
              {
                cellContent: i.name,
                tooltipText: i.name
              }
            ])
          }
        )
      ] })
    ] })
  ] });
}, ve = G(), ge = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, s = e.app.model.customBlobDocuments, [a, d] = f.useState(0), [o, h] = f.useState(!1), [p, m] = f.useState(ve), v = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: J }
  ];
  f.useEffect(() => {
    const c = (C) => {
      const { documents: g } = C;
      g.some((x) => x.documentId === t) && d((x) => x + 1);
    };
    return s.addEventListener("documentsChanged", c), () => {
      s.removeEventListener("documentsChanged", c);
    };
  }, []), f.useEffect(() => {
    s.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const C = c.document.contents;
        m({ ...C }), h(!0);
      } else
        throw new Error(c?.error || "Document not found");
    }).catch(async (c) => {
      await r.show("error", "Error loading document", "Details: " + c?.message || c);
    });
  }, [a]);
  const u = async (c) => {
    ue(
      p,
      m,
      D(e, t),
      c
    )();
  }, l = () => p.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ n.jsx(M, { studioPro: e, children: /* @__PURE__ */ n.jsxs(W, { children: [
    !o && /* @__PURE__ */ n.jsx(Q, {}),
    o && /* @__PURE__ */ n.jsx(q, { children: /* @__PURE__ */ n.jsxs(P, { children: [
      /* @__PURE__ */ n.jsx(b, { label: "Common", children: /* @__PURE__ */ n.jsx(
        ee,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: p.provider,
          options: v,
          onSelectionChange: u,
          validate: l
        }
      ) }),
      p.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        he,
        {
          studioPro: e,
          knowledgebase: p,
          setKnowledgebase: m,
          updateStudioProDocument: D(e, t)
        }
      )
    ] }) })
  ] }) });
}, Ve = z(ge);
export {
  Ve as component
};
