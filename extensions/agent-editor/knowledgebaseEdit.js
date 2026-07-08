import { j as n } from "./jsx-runtime-CWOFuNcx.js";
import { r as f, a9 as M, a6 as W, a7 as q, aa as P } from "./PageContainers-B4e_cfEm.js";
import { u as U, B as _, C as $, c as z } from "./TextWithIcon-Cp5cdcPY.js";
import { createStudioProLogger as A } from "./logger-gMbuSAUF.js";
import { f as B, g as G } from "./documentInitUtils-CLdpbIQ7.js";
import { c as H, a as J } from "./modelIcons-Dn45IrnE.js";
import { C as Q } from "./CenteredLoadingSpinner-BqLuFhP3.js";
import { C as y, i as X, B as Y, v as Z, a as ee } from "./validationUtils-F9qtbBA1.js";
import { G as b } from "./GroupBox-DjvYs9o_.js";
import { y as S } from "./Link-Baa_rm91.js";
import { g as te, h as ne } from "./constantUtils-D0RXxXWn.js";
import { d as oe, a as se, u as re, g as ae } from "./mxCloudGenAIUtils-U7THU9De.js";
import { W as ie } from "./Banner-CeIULR6d.js";
import { D as E, a as I, d as L } from "./formelements-97vqGDJl.js";
import { T as le } from "./Table-BYgJsym3.js";
import { T as w } from "./TextInputLabeled-Cugqs2Ms.js";
import { T as de } from "./TextInputWithButton-G6t_g6R6.js";
const D = (e, t) => async (r) => {
  const o = A(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, r);
  } catch (a) {
    o.error("Failed to save knowledge base document:", a), await e.ui.notifications.show({
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
}, ce = (e, t, r, o) => async () => {
  if (!(e.provider === o && "key" in e.providerFields) && o === "MxCloudGenAI") {
    const a = B(), d = { ...e, provider: o, providerFields: a };
    t(d), r(d);
  }
}, k = (e, t) => {
  if (e === t) return !0;
  if (e == null || t === null || t === void 0 || typeof e != "object" || typeof t != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
  if (Array.isArray(e) && Array.isArray(t))
    return e.length !== t.length ? !1 : e.every((s, h) => k(s, t[h]));
  const r = e, o = t, a = Object.keys(r), d = Object.keys(o);
  return a.length !== d.length ? !1 : a.every((s) => k(r[s], o[s]));
}, ue = async (e, t) => {
  const r = A(e), o = await se(e, t);
  if (typeof o == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return re(
    t,
    o
  );
}, me = async (e, t, r, o, a) => {
  const d = A(e);
  let s, h = !1, p = !1;
  try {
    const m = t.providerFields, v = await te(e, m.key);
    if (!v)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const u = oe(e, v);
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
    s = {
      ...t,
      name: u.name || "",
      providerFields: {
        ...l
      }
    }, p = !0;
    const c = await ue(e, s);
    c && (h = !0, s = c);
  } catch (m) {
    d.error("Error during MxCloud GenAI key import:", m), o(y.InvalidContent);
  } finally {
    if (!p)
      s = N(t), r(s), a(s);
    else if (h)
      s && !k(t, s) && (r(s), a(s));
    else {
      const m = t.providerFields?.keyId, v = s?.providerFields?.keyId;
      m !== v && s && (r(s), a(s));
    }
  }
};
async function pe(e, t) {
  const r = t.providerFields, o = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: r?.key?.documentId
  });
  if (o.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function ye(e, t) {
  let r = [];
  const o = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const d = await ae(e, t)();
        return typeof d == "string" ? d : (r = d, !0);
      }
    }
  ], a = await e.ui.dialogs.showProgressDialog("Getting collections", o);
  switch (a.result) {
    case "Success":
      return r;
    case "UserCancelled":
      return;
    case "Failure": {
      const d = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", s = a.failedStep?.error ?? "";
      await e.ui.messageBoxes.show("error", d, s);
      return;
    }
  }
}
const j = () => {
}, fe = ({
  studioPro: e,
  knowledgebase: t,
  setKnowledgebase: r,
  updateStudioProDocument: o
}) => {
  const [a, d] = f.useState(), [s, h] = f.useState(!1), [p, m] = f.useState([]), [v, u] = f.useState(null), l = t.providerFields, c = async () => {
    h(!1);
    const i = await ye(e, t);
    if (i === void 0) {
      m([]), u(null);
      return;
    }
    m(i), h(!0), u(/* @__PURE__ */ new Date());
  }, g = async () => {
    l.key && ne(e, l.key);
  }, x = async (i) => {
    const T = i.providerFields, K = await Z(e, T.key);
    if (d(K), !K)
      me(
        e,
        i,
        r,
        d,
        o
      );
    else {
      const F = N(i);
      r(F), o(F);
    }
  }, C = async () => {
    const i = await pe(e, t);
    i && (m([]), u(null), r(i), o(i), await x(i));
  }, R = (i) => {
    (l.key && i.includes(l.key.documentId) || i.includes("projectSettings")) && x(t);
  };
  U({
    studioPro: e,
    dependentIds: [l.key?.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: R
  }), f.useEffect(() => {
    x(t);
  }, []);
  const V = (i) => i === y.Required ? "Knowledge base key is required" : i === y.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === y.InvalidType ? "Selected constant must be of type string." : i === y.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, O = a === y.EmptyValue || a === y.InvalidContent || a === y.PrivateValue;
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(b, { label: "Resource", children: [
      /* @__PURE__ */ n.jsx(
        de,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: l.key?.qualifiedName ?? "",
          icon: l.key ? /* @__PURE__ */ n.jsx(X, {}) : void 0,
          buttonCaption: "Select...",
          onClick: C,
          onClickSecondary: l.key ? g : void 0,
          validate: () => V(a),
          buttonCaptionSecondary: l.key ? "Show" : void 0
        }
      ),
      O && /* @__PURE__ */ n.jsxs(ie, { children: [
        /* @__PURE__ */ n.jsx(_, { children: a === y.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
        /* @__PURE__ */ n.jsx("div", { children: a === y.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to use your Knowledge base locally, please set a valid value for the key constant." })
      ] }),
      !l.key && /* @__PURE__ */ n.jsxs(E, { children: [
        /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(L, {}) }),
        /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(
          S,
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
          w,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: t.name,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: l.modelDisplayName,
            icon: l.modelDisplayName && l.modelDisplayName.toLocaleLowerCase().includes("cohere") ? H : void 0,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: l.modelName,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: l.keyName,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: l.environment,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsxs(E, { children: [
          /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(L, {}) }),
          /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(S, { href: l.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    l.keyId && /* @__PURE__ */ n.jsxs(b, { label: "Configured Collections", children: [
      /* @__PURE__ */ n.jsx(Y, { label: "Collections", buttonCaption: "List collections", onPress: c }),
      s && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        v && /* @__PURE__ */ n.jsxs($, { children: [
          "Last updated: ",
          v.toLocaleString()
        ] }),
        /* @__PURE__ */ n.jsx(
          le,
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
}, he = G(), ve = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, o = e.app.model.customBlobDocuments, [a, d] = f.useState(0), [s, h] = f.useState(!1), [p, m] = f.useState(he), v = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: J }
  ];
  f.useEffect(() => {
    const c = (g) => {
      const { documents: x } = g;
      x.some((C) => C.documentId === t) && d((C) => C + 1);
    };
    return o.addEventListener("documentsChanged", c), () => {
      o.removeEventListener("documentsChanged", c);
    };
  }, []), f.useEffect(() => {
    o.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const g = c.document.contents;
        m({ ...g }), h(!0);
      } else
        throw new Error(c?.error || "Document not found");
    }).catch(async (c) => {
      await r.show("error", "Error loading document", "Details: " + c?.message || c);
    });
  }, [a]);
  const u = async (c) => {
    ce(
      p,
      m,
      D(e, t),
      c
    )();
  }, l = () => p.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ n.jsx(M, { studioPro: e, children: /* @__PURE__ */ n.jsxs(W, { children: [
    !s && /* @__PURE__ */ n.jsx(Q, {}),
    s && /* @__PURE__ */ n.jsx(q, { children: /* @__PURE__ */ n.jsxs(P, { children: [
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
        fe,
        {
          studioPro: e,
          knowledgebase: p,
          setKnowledgebase: m,
          updateStudioProDocument: D(e, t)
        }
      )
    ] }) })
  ] }) });
}, Ne = z(ve);
export {
  Ne as component
};
