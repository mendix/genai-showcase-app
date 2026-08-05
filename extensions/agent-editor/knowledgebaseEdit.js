import { j as n } from "./jsx-runtime-CWOFuNcx.js";
import { r as f, Y as W, V as q, W as U, Z as _ } from "./PageContainers-1sk3OYaf.js";
import { u as $, c as z } from "./useDependentDocumentChanges-Dso85RXC.js";
import { createStudioProLogger as A } from "./logger-gMbuSAUF.js";
import { g as N, h as R, K as b, i as H, j as S } from "./documentInitUtils-COeMuvhV.js";
import { C as Y } from "./CenteredLoadingSpinner-BZzc9Oqr.js";
import { C as Z } from "./ComboBoxWithIcon-eOJ6Ms0Q.js";
import { G as k } from "./GroupBox-BxPlcX3c.js";
import { y as L } from "./Link-DIvQSyO2.js";
import { g as J, h as Q } from "./constantUtils-D0RXxXWn.js";
import { d as X, a as ee, u as te, g as ne } from "./mxCloudGenAIUtils-U7THU9De.js";
import { C as y, i as oe, B as se, v as re } from "./validationUtils-BWaKRNki.js";
import { u as ae } from "./useExtensionPermissionsChanged-CmzSIPTq.js";
import { W as ie } from "./Banner-BjuZQV3q.js";
import { D, a as I, d as B } from "./formelements-CKhf3RUn.js";
import { B as le, C as de } from "./text-Kj7UY3CS.js";
import { T as ce } from "./Table-CLlb8DoS.js";
import { T as w } from "./TextInputLabeled-CTvLZgVy.js";
import { a as ue } from "./TextWithIcon-Cn_oiqNe.js";
const G = (e, t) => async (r) => {
  const o = A(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, r);
  } catch (a) {
    o.error("Failed to save knowledge base document:", a), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: a.message
    });
  }
}, V = (e) => {
  const t = e.providerFields;
  return {
    ...R(),
    provider: e.provider,
    providerFields: {
      ...N(),
      key: t.key
    }
  };
}, me = (e, t, r, o) => async () => {
  if (!(e.provider === o && "key" in e.providerFields) && o === b.MxCloudGenAI) {
    const a = N(), d = { ...e, provider: o, providerFields: a };
    t(d), r(d);
  }
}, K = (e, t) => {
  if (e === t) return !0;
  if (e == null || t === null || t === void 0 || typeof e != "object" || typeof t != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
  if (Array.isArray(e) && Array.isArray(t))
    return e.length !== t.length ? !1 : e.every((s, h) => K(s, t[h]));
  const r = e, o = t, a = Object.keys(r), d = Object.keys(o);
  return a.length !== d.length ? !1 : a.every((s) => K(r[s], o[s]));
}, pe = async (e, t) => {
  const r = A(e), o = await ee(e, t);
  if (typeof o == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return te(
    t,
    o
  );
}, ye = async (e, t, r, o, a) => {
  const d = A(e);
  let s, h = !1, p = !1;
  try {
    const m = t.providerFields, g = await J(e, m.key);
    if (!g)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const u = X(e, g);
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
    const c = await pe(e, s);
    c && (h = !0, s = c);
  } catch (m) {
    d.error("Error during MxCloud GenAI key import:", m), o(y.InvalidContent);
  } finally {
    if (!p)
      s = V(t), r(s), a(s);
    else if (h)
      s && !K(t, s) && (r(s), a(s));
    else {
      const m = t.providerFields?.keyId, g = s?.providerFields?.keyId;
      m !== g && s && (r(s), a(s));
    }
  }
};
async function fe(e, t) {
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
async function he(e, t) {
  let r = [];
  const o = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const d = await ne(e, t)();
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
}, ge = ({
  studioPro: e,
  knowledgebase: t,
  setKnowledgebase: r,
  updateStudioProDocument: o
}) => {
  const [a, d] = f.useState(), [s, h] = f.useState(!1), [p, m] = f.useState([]), [g, u] = f.useState(null), l = t.providerFields, c = async () => {
    h(!1);
    const i = await he(e, t);
    if (i === void 0) {
      m([]), u(null);
      return;
    }
    m(i), h(!0), u(/* @__PURE__ */ new Date());
  }, C = async () => {
    l.key && Q(e, l.key);
  }, v = async (i) => {
    const P = i.providerFields, E = await re(e, P.key);
    if (d(E), !E)
      ye(
        e,
        i,
        r,
        d,
        o
      );
    else {
      const F = V(i);
      r(F), o(F);
    }
  }, x = async () => {
    const i = await fe(e, t);
    i && (m([]), u(null), r(i), o(i), await v(i));
  }, M = (i) => {
    (l.key && i.includes(l.key.documentId) || i.includes("projectSettings")) && v(t);
  };
  $({
    studioPro: e,
    dependentIds: [l.key?.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: M
  }), ae({
    studioPro: e,
    onPermissionsChanged: () => v(t)
  }), f.useEffect(() => {
    v(t);
  }, []);
  const O = (i) => i === y.Required ? "Knowledge base key is required" : i === y.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === y.InvalidType ? "Selected constant must be of type string." : i === y.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, T = a === y.EmptyValue || a === y.InvalidContent || a === y.PrivateValue;
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(k, { label: "Resource", children: [
      /* @__PURE__ */ n.jsx(
        ue,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: l.key?.qualifiedName ?? "",
          icon: l.key ? /* @__PURE__ */ n.jsx(oe, {}) : void 0,
          buttonCaption: "Select...",
          onClick: x,
          onClickSecondary: l.key ? C : void 0,
          validate: () => O(a),
          buttonCaptionSecondary: l.key ? "Show" : void 0
        }
      ),
      T && /* @__PURE__ */ n.jsxs(ie, { children: [
        /* @__PURE__ */ n.jsx(le, { children: a === y.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
        /* @__PURE__ */ n.jsx("div", { children: a === y.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to use your Knowledge base locally, please set a valid value for the key constant." })
      ] }),
      !l.key && /* @__PURE__ */ n.jsxs(D, { children: [
        /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(B, {}) }),
        /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(
          L,
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
        /* @__PURE__ */ n.jsxs(D, { children: [
          /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(B, {}) }),
          /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(L, { href: l.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    l.keyId && /* @__PURE__ */ n.jsxs(k, { label: "Configured Collections", children: [
      /* @__PURE__ */ n.jsx(se, { label: "Collections", buttonCaption: "List collections", onPress: c }),
      s && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        g && /* @__PURE__ */ n.jsxs(de, { children: [
          "Last updated: ",
          g.toLocaleString()
        ] }),
        /* @__PURE__ */ n.jsx(
          ce,
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
}, ve = R(), Ce = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, o = e.app.model.customBlobDocuments, [a, d] = f.useState(0), [s, h] = f.useState(!1), [p, m] = f.useState(ve), g = [
    {
      key: b.MxCloudGenAI,
      caption: S[b.MxCloudGenAI].caption,
      icon: S[b.MxCloudGenAI].icon
    }
  ];
  f.useEffect(() => {
    const c = (C) => {
      const { documents: v } = C;
      v.some((x) => x.documentId === t) && d((x) => x + 1);
    };
    return o.addEventListener("documentsChanged", c), () => {
      o.removeEventListener("documentsChanged", c);
    };
  }, []), f.useEffect(() => {
    o.getDocumentById(t).then(async (c) => {
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
    me(
      p,
      m,
      G(e, t),
      c
    )();
  }, l = () => p.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ n.jsx(W, { studioPro: e, children: /* @__PURE__ */ n.jsxs(q, { children: [
    !s && /* @__PURE__ */ n.jsx(Y, {}),
    s && /* @__PURE__ */ n.jsx(U, { children: /* @__PURE__ */ n.jsxs(_, { children: [
      /* @__PURE__ */ n.jsx(k, { label: "Common", children: /* @__PURE__ */ n.jsx(
        Z,
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
      p.provider === b.MxCloudGenAI && /* @__PURE__ */ n.jsx(
        ge,
        {
          studioPro: e,
          knowledgebase: p,
          setKnowledgebase: m,
          updateStudioProDocument: G(e, t)
        }
      )
    ] }) })
  ] }) });
}, Oe = z(Ce);
export {
  Ce as App,
  Oe as component
};
