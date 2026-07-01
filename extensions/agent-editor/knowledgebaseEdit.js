import { r as f, R as t, a1 as b, a4 as S, a9 as I, ai as E, ah as M, ae as q, af as W, aj as P } from "./formelements-xoDBPsLY.js";
import { u as U, B as _, a as z, c as $, C as H } from "./TextWithIcon-BnQ_W6GL.js";
import { createStudioProLogger as A } from "./logger-gMbuSAUF.js";
import { y as B, z as N, q as J, B as Q, r as X, t as Y } from "./index-CZgjY607.js";
import { C as y, i as Z, B as ee, v as ne, a as te } from "./ButtonWithLabel-DL3guaBz.js";
import { W as se, y as L } from "./Banner-DMJvEk30.js";
import { d as oe, a as re, u as ae, g as ie } from "./mxCloudGenAIUtils-klha5VC-.js";
import { T as le } from "./Table-B8T3E1v3.js";
import { T as w } from "./TextInputLabeled-BZ-d3CSA.js";
import { T as de } from "./TextInputWithButton-CJr1wTWV.js";
const D = (e, n) => async (r) => {
  const s = A(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(n, r);
  } catch (a) {
    s.error("Failed to save knowledge base document:", a), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: a.message
    });
  }
}, G = (e) => {
  const n = e.providerFields;
  return {
    ...N(),
    provider: e.provider,
    providerFields: {
      ...B(),
      key: n.key
    }
  };
}, ce = (e, n, r, s) => async () => {
  if (!(e.provider === s && "key" in e.providerFields) && s === "MxCloudGenAI") {
    const a = B(), d = { ...e, provider: s, providerFields: a };
    n(d), r(d);
  }
}, k = (e, n) => {
  if (e === n) return !0;
  if (e == null || n === null || n === void 0 || typeof e != "object" || typeof n != "object" || Array.isArray(e) !== Array.isArray(n)) return !1;
  if (Array.isArray(e) && Array.isArray(n))
    return e.length !== n.length ? !1 : e.every((o, h) => k(o, n[h]));
  const r = e, s = n, a = Object.keys(r), d = Object.keys(s);
  return a.length !== d.length ? !1 : a.every((o) => k(r[o], s[o]));
}, ue = async (e, n) => {
  const r = A(e), s = await re(e, n);
  if (typeof s == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return ae(
    n,
    s
  );
}, me = async (e, n, r, s, a) => {
  const d = A(e);
  let o, h = !1, p = !1;
  try {
    const m = n.providerFields, v = await J(e, m.key);
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
    o = {
      ...n,
      name: u.name || "",
      providerFields: {
        ...l
      }
    }, p = !0;
    const c = await ue(e, o);
    c && (h = !0, o = c);
  } catch (m) {
    d.error("Error during MxCloud GenAI key import:", m), s(y.InvalidContent);
  } finally {
    if (!p)
      o = G(n), r(o), a(o);
    else if (h)
      o && !k(n, o) && (r(o), a(o));
    else {
      const m = n.providerFields?.keyId, v = o?.providerFields?.keyId;
      m !== v && o && (r(o), a(o));
    }
  }
};
async function pe(e, n) {
  const r = n.providerFields, s = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: r?.key?.documentId
  });
  if (s.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: s.selected.id,
          qualifiedName: s.selected.module + "." + s.selected.name
        }
      }
    };
  if (s.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
async function ye(e, n) {
  let r = [];
  const s = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const d = await ie(e, n)();
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
const j = () => {
}, fe = ({
  studioPro: e,
  knowledgebase: n,
  setKnowledgebase: r,
  updateStudioProDocument: s
}) => {
  const [a, d] = f.useState(), [o, h] = f.useState(!1), [p, m] = f.useState([]), [v, u] = f.useState(null), l = n.providerFields, c = async () => {
    h(!1);
    const i = await ye(e, n);
    if (i === void 0) {
      m([]), u(null);
      return;
    }
    m(i), h(!0), u(/* @__PURE__ */ new Date());
  }, g = async () => {
    l.key && X(e, l.key);
  }, x = async (i) => {
    const T = i.providerFields, K = await ne(e, T.key);
    if (d(K), !K)
      me(
        e,
        i,
        r,
        d,
        s
      );
    else {
      const F = G(i);
      r(F), s(F);
    }
  }, C = async () => {
    const i = await pe(e, n);
    i && (m([]), u(null), r(i), s(i), await x(i));
  }, R = (i) => {
    (l.key && i.includes(l.key.documentId) || i.includes("projectSettings")) && x(n);
  };
  U({
    studioPro: e,
    dependentIds: [l.key?.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: R
  }), f.useEffect(() => {
    x(n);
  }, []);
  const V = (i) => i === y.Required ? "Knowledge base key is required" : i === y.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === y.InvalidType ? "Selected constant must be of type string." : i === y.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, O = a === y.EmptyValue || a === y.InvalidContent || a === y.PrivateValue;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(b, { label: "Resource", children: [
      /* @__PURE__ */ t.jsx(
        de,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: l.key?.qualifiedName ?? "",
          icon: l.key ? /* @__PURE__ */ t.jsx(Z, {}) : void 0,
          buttonCaption: "Select...",
          onClick: C,
          onClickSecondary: l.key ? g : void 0,
          validate: () => V(a),
          buttonCaptionSecondary: l.key ? "Show" : void 0
        }
      ),
      O && /* @__PURE__ */ t.jsxs(se, { children: [
        /* @__PURE__ */ t.jsx(_, { children: a === y.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
        /* @__PURE__ */ t.jsx("div", { children: a === y.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to use your Knowledge base locally, please set a valid value for the key constant." })
      ] }),
      !l.key && /* @__PURE__ */ t.jsxs(S, { children: [
        /* @__PURE__ */ t.jsx(I, { children: /* @__PURE__ */ t.jsx(E, {}) }),
        /* @__PURE__ */ t.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
          L,
          {
            href: "https://genai.home.mendix.com/p/resources",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Create a key in the portal"
          }
        ) })
      ] }),
      l.keyId && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: n.name,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: l.modelDisplayName,
            icon: l.modelDisplayName && l.modelDisplayName.toLocaleLowerCase().includes("cohere") ? Q : void 0,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: l.modelName,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: l.keyName,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: l.environment,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsxs(S, { children: [
          /* @__PURE__ */ t.jsx(I, { children: /* @__PURE__ */ t.jsx(E, {}) }),
          /* @__PURE__ */ t.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(L, { href: l.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    l.keyId && /* @__PURE__ */ t.jsxs(b, { label: "Configured Collections", children: [
      /* @__PURE__ */ t.jsx(ee, { label: "Collections", buttonCaption: "List collections", onPress: c }),
      o && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        v && /* @__PURE__ */ t.jsxs(z, { children: [
          "Last updated: ",
          v.toLocaleString()
        ] }),
        /* @__PURE__ */ t.jsx(
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
}, he = N(), ve = ({ studioPro: e, documentId: n }) => {
  const r = e.ui.messageBoxes, s = e.app.model.customBlobDocuments, [a, d] = f.useState(0), [o, h] = f.useState(!1), [p, m] = f.useState(he), v = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Y }
  ];
  f.useEffect(() => {
    const c = (g) => {
      const { documents: x } = g;
      x.some((C) => C.documentId === n) && d((C) => C + 1);
    };
    return s.addEventListener("documentsChanged", c), () => {
      s.removeEventListener("documentsChanged", c);
    };
  }, []), f.useEffect(() => {
    s.getDocumentById(n).then(async (c) => {
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
      D(e, n),
      c
    )();
  }, l = () => p.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ t.jsx(M, { studioPro: e, children: /* @__PURE__ */ t.jsxs(q, { children: [
    !o && /* @__PURE__ */ t.jsx(H, {}),
    o && /* @__PURE__ */ t.jsx(W, { children: /* @__PURE__ */ t.jsxs(P, { children: [
      /* @__PURE__ */ t.jsx(b, { label: "Common", children: /* @__PURE__ */ t.jsx(
        te,
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
      p.provider === "MxCloudGenAI" && /* @__PURE__ */ t.jsx(
        fe,
        {
          studioPro: e,
          knowledgebase: p,
          setKnowledgebase: m,
          updateStudioProDocument: D(e, n)
        }
      )
    ] }) })
  ] }) });
}, Fe = $(ve);
export {
  Fe as component
};
