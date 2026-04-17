import { A as q, r as v, x as n, G as j, F as E, J as I, U as F, P, Q as U, R as M, V as _ } from "./Icon-Bb5knnP8.js";
import { u as $, B as z, c as H, C as J } from "./TextWithIcon-KVcSlj1C.js";
import { createStudioProLogger as k } from "./logger-Bof2Evv1.js";
import { w as N, x as G, p as Q, y as X, r as Y, s as Z } from "./index-DNPEn852.js";
import { C as y, i as ee, B as ne, v as te, a as se } from "./ButtonWithLabel-DPhWHgQx.js";
import { y as A } from "./Link-B-mEjjKJ.js";
import { i as oe } from "./objectUtils-ChZ8y4UX.js";
import { d as ae, a as re, b as ie, g as le } from "./mxCloudGenAIUtils-CoL5Cjj-.js";
import { W as ce } from "./Banner-DsVgoRin.js";
import { T as de } from "./Table-B2MEs44R.js";
import { T as w } from "./TextInputLabeled-BLG8tCoP.js";
import { T as ue } from "./TextInputWithButton-CMS27jFj.js";
const B = (e, t) => async (r) => {
  const c = k(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, r);
  } catch (l) {
    c.error("Failed to save knowledge base document:", l), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: l.message
    });
  }
}, R = (e) => {
  const t = e.providerFields;
  return {
    ...G(),
    provider: e.provider,
    providerFields: {
      ...N(),
      key: t.key
    }
  };
}, me = (e, t, r, c) => async () => {
  if (!(e.provider === c && "key" in e.providerFields) && c === "MxCloudGenAI") {
    const l = N(), d = { ...e, provider: c, providerFields: l };
    t(d), r(d);
  }
}, pe = async (e, t) => {
  const r = k(e), c = await re(e, t);
  if (typeof c == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return ie(
    t,
    c
  );
}, ye = async (e, t, r, c, l) => {
  var p, g;
  const d = k(e);
  let o, h = !1, m = !1;
  try {
    const u = t.providerFields, a = await Q(e, u.key);
    if (!a)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = ae(e, a);
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
    o = {
      ...t,
      name: s.name || "",
      providerFields: {
        ...x
      }
    }, m = !0;
    const f = await pe(e, o);
    f && (h = !0, o = f);
  } catch (u) {
    d.error("Error during MxCloud GenAI key import:", u), c(y.InvalidContent);
  } finally {
    if (!m)
      o = R(t), r(o), l(o);
    else if (h)
      o && !oe(t, o) && (r(o), l(o));
    else {
      const u = (p = t.providerFields) == null ? void 0 : p.keyId, a = (g = o == null ? void 0 : o.providerFields) == null ? void 0 : g.keyId;
      u !== a && o && (r(o), l(o));
    }
  }
};
async function ve(e, t) {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (r.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: r.selected.id,
          qualifiedName: r.selected.module + "." + r.selected.name
        }
      }
    };
  if (r.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function he(e, t) {
  var d;
  let r = [];
  const c = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const o = await le(e, t)();
        return typeof o == "string" ? o : (r = o, !0);
      }
    }
  ], l = await e.ui.dialogs.showProgressDialog("Getting collections", c);
  switch (l.result) {
    case "Success":
      return r;
    case "UserCancelled":
      return;
    case "Failure": {
      const o = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", h = ((d = l.failedStep) == null ? void 0 : d.error) ?? "";
      await e.ui.messageBoxes.show("error", o, h);
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
  knowledgebase: t,
  setKnowledgebase: r,
  updateStudioProDocument: c
}) => {
  var S, L;
  const [l, d] = v.useState(), [o, h] = v.useState(!1), [m, p] = v.useState([]), [g, u] = v.useState(null), a = t.providerFields, s = async () => {
    h(!1);
    const i = await he(e, t);
    if (i === void 0) {
      p([]), u(null);
      return;
    }
    p(i), h(!0), u(/* @__PURE__ */ new Date());
  }, x = async () => {
    a.key && Y(e, a.key);
  }, f = async (i) => {
    const W = i.providerFields, K = await te(e, W.key);
    if (d(K), !K)
      ye(
        e,
        i,
        r,
        d,
        c
      );
    else {
      const D = R(i);
      r(D), c(D);
    }
  }, C = async () => {
    const i = await ve(e, t);
    i && (p([]), u(null), r(i), c(i), await f(i));
  }, V = (i) => {
    (a.key && i.includes(a.key.documentId) || i.includes("projectSettings")) && f(t);
  };
  $({
    studioPro: e,
    dependentIds: [(S = a.key) == null ? void 0 : S.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: V
  }), v.useEffect(() => {
    f(t);
  }, []);
  const T = (i) => i === y.Required ? "Knowledge base key is required" : i === y.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === y.InvalidType ? "Selected constant must be of type string." : i === y.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, O = l === y.EmptyValue || l === y.InvalidContent || l === y.PrivateValue;
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(j, { label: "Resource", children: [
      /* @__PURE__ */ n.jsx(
        ue,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((L = a.key) == null ? void 0 : L.qualifiedName) ?? "",
          icon: a.key ? /* @__PURE__ */ n.jsx(ee, {}) : void 0,
          buttonCaption: "Select...",
          onClick: C,
          onClickSecondary: a.key ? x : void 0,
          validate: () => T(l),
          buttonCaptionSecondary: a.key ? "Show" : void 0
        }
      ),
      O && /* @__PURE__ */ n.jsxs(ce, { children: [
        /* @__PURE__ */ n.jsx(z, { children: l === y.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
        /* @__PURE__ */ n.jsx("div", { children: l === y.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to use your Knowledge base locally, please set a valid value for the key constant." })
      ] }),
      !a.key && /* @__PURE__ */ n.jsxs(E, { children: [
        /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(F, {}) }),
        /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(
          A,
          {
            href: "https://genai.home.mendix.com/p/resources",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Create a key in the portal"
          }
        ) })
      ] }),
      a.keyId && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: t.name,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: a.modelDisplayName,
            icon: a.modelDisplayName && a.modelDisplayName.toLocaleLowerCase().includes("cohere") ? X : void 0,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: a.modelName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: a.keyName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          w,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: a.environment,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsxs(E, { children: [
          /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(F, {}) }),
          /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(A, { href: a.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    a.keyId && /* @__PURE__ */ n.jsxs(j, { label: "Configured Collections", children: [
      /* @__PURE__ */ n.jsx(ne, { label: "Collections", buttonCaption: "List collections", onPress: s }),
      o && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        g && /* @__PURE__ */ n.jsxs(fe, { children: [
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
                resizable: !0,
                isRowHeader: !0
              }
            ],
            data: m.map((i) => [
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
}, xe = G(), Ce = ({ studioPro: e, documentId: t }) => {
  const r = e.ui.messageBoxes, c = e.app.model.customBlobDocuments, [l, d] = v.useState(0), [o, h] = v.useState(!1), [m, p] = v.useState(xe), g = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Z }
  ];
  v.useEffect(() => {
    const s = (x) => {
      const { documents: f } = x;
      f.some((C) => C.documentId === t) && d((C) => C + 1);
    };
    return c.addEventListener("documentsChanged", s), () => {
      c.removeEventListener("documentsChanged", s);
    };
  }, []), v.useEffect(() => {
    c.getDocumentById(t).then(async (s) => {
      if (s && !("error" in s)) {
        const x = s.document.contents;
        p({ ...x }), h(!0);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await r.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s);
    });
  }, [l]);
  const u = async (s) => {
    me(
      m,
      p,
      B(e, t),
      s
    )();
  }, a = () => m.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ n.jsx(P, { studioPro: e, children: /* @__PURE__ */ n.jsxs(U, { children: [
    !o && /* @__PURE__ */ n.jsx(J, {}),
    o && /* @__PURE__ */ n.jsx(M, { children: /* @__PURE__ */ n.jsxs(_, { children: [
      /* @__PURE__ */ n.jsx(j, { label: "Common", children: /* @__PURE__ */ n.jsx(
        se,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: m.provider,
          options: g,
          onSelectionChange: u,
          validate: a
        }
      ) }),
      m.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        ge,
        {
          studioPro: e,
          knowledgebase: m,
          setKnowledgebase: p,
          updateStudioProDocument: B(e, t)
        }
      )
    ] }) })
  ] }) });
}, Be = H(Ce);
export {
  Be as component
};
