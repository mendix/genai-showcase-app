import { A as q, r as y, x as t, G as j, F as E, J as I, U as F, P as U, Q as M, R as P, V as z } from "./Icon-Bb5knnP8.js";
import { B as _, c as $, C as H } from "./TextWithIcon-Dkwixmp-.js";
import { createStudioProLogger as k } from "./logger-Bof2Evv1.js";
import { x as N, y as G, q as J, z as Q, s as X, t as Y } from "./index-DePCaYQI.js";
import { C as f, i as Z, B as ee, v as te, a as ne } from "./ButtonWithLabel-DCsqyHNJ.js";
import { u as se, y as A } from "./Link-BUNIWopf.js";
import { i as oe } from "./objectUtils-ChZ8y4UX.js";
import { d as ae, a as re, b as le, g as ie } from "./mxCloudGenAIUtils-D3p-BcS-.js";
import { W as de } from "./Banner-DsVgoRin.js";
import { T as ce } from "./Table-B2MEs44R.js";
import { T as b } from "./TextInputLabeled-BLG8tCoP.js";
import { T as ue } from "./TextInputWithButton-CMS27jFj.js";
const B = (e, n) => async (r) => {
  const i = k(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(n, r);
  } catch (d) {
    i.error("Failed to save knowledge base document:", d), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: d.message
    });
  }
}, R = (e) => {
  const n = e.providerFields;
  return {
    ...G(),
    provider: e.provider,
    providerFields: {
      ...N(),
      key: n.key
    }
  };
}, me = (e, n, r, i) => async () => {
  if (!(e.provider === i && "key" in e.providerFields) && i === "MxCloudGenAI") {
    const d = N(), c = { ...e, provider: i, providerFields: d };
    n(c), r(c);
  }
}, pe = async (e, n) => {
  const r = k(e), i = await re(e, n);
  if (typeof i == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return le(
    n,
    i
  );
}, ye = async (e, n, r, i, d) => {
  var p, g;
  const c = k(e);
  let o, h = !1, m = !1;
  try {
    const u = n.providerFields, a = await J(e, u.key);
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
      ...n,
      name: s.name || "",
      providerFields: {
        ...x
      }
    }, m = !0;
    const v = await pe(e, o);
    v && (h = !0, o = v);
  } catch (u) {
    c.error("Error during MxCloud GenAI key import:", u), i(f.InvalidContent);
  } finally {
    if (!m)
      o = R(n), r(o), d(o);
    else if (h)
      o && !oe(n, o) && (r(o), d(o));
    else {
      const u = (p = n.providerFields) == null ? void 0 : p.keyId, a = (g = o == null ? void 0 : o.providerFields) == null ? void 0 : g.keyId;
      u !== a && o && (r(o), d(o));
    }
  }
};
async function he(e, n) {
  const r = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (r.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: r.selected.id,
          qualifiedName: r.selected.module + "." + r.selected.name
        }
      }
    };
  if (r.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
async function ve(e, n) {
  var c;
  let r = [];
  const i = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const o = await ie(e, n)();
        return typeof o == "string" ? o : (r = o, !0);
      }
    }
  ], d = await e.ui.dialogs.showProgressDialog("Getting collections", i);
  switch (d.result) {
    case "Success":
      return r;
    case "UserCancelled":
      return;
    case "Failure": {
      const o = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", h = ((c = d.failedStep) == null ? void 0 : c.error) ?? "";
      await e.ui.messageBoxes.show("error", o, h);
      return;
    }
  }
}
const w = () => {
}, fe = q.div`
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    font-size: 10px;
`, ge = ({
  studioPro: e,
  knowledgebase: n,
  setKnowledgebase: r,
  updateStudioProDocument: i
}) => {
  var S, L;
  const [d, c] = y.useState(), [o, h] = y.useState(!1), [m, p] = y.useState([]), [g, u] = y.useState(null), a = n.providerFields, s = async () => {
    h(!1);
    const l = await ve(e, n);
    if (l === void 0) {
      p([]), u(null);
      return;
    }
    p(l), h(!0), u(/* @__PURE__ */ new Date());
  }, x = async () => {
    a.key && X(e, a.key);
  }, v = async (l) => {
    const W = l.providerFields, K = await te(e, W.key);
    if (c(K), !K)
      ye(
        e,
        l,
        r,
        c,
        i
      );
    else {
      const D = R(l);
      r(D), i(D);
    }
  }, C = async () => {
    const l = await he(e, n);
    l && (p([]), u(null), r(l), i(l), await v(l));
  }, T = (l) => {
    (a.key && l.includes(a.key.documentId) || l.includes("projectSettings")) && v(n);
  };
  se({
    studioPro: e,
    dependentIds: [(S = a.key) == null ? void 0 : S.documentId].filter((l) => !!l),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: T
  }), y.useEffect(() => {
    v(n);
  }, []);
  const V = (l) => l === f.Required ? "Knowledge base key is required" : l === f.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : l === f.InvalidType ? "Selected constant must be of type string." : l === f.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, O = d === f.EmptyValue || d === f.InvalidContent || d === f.PrivateValue;
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(j, { label: "Resource", children: [
      /* @__PURE__ */ t.jsx(
        ue,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((L = a.key) == null ? void 0 : L.qualifiedName) ?? "",
          icon: a.key ? /* @__PURE__ */ t.jsx(Z, {}) : void 0,
          buttonCaption: "Select...",
          onClick: C,
          onClickSecondary: a.key ? x : void 0,
          validate: () => V(d),
          buttonCaptionSecondary: a.key ? "Show" : void 0
        }
      ),
      O && /* @__PURE__ */ t.jsxs(de, { children: [
        /* @__PURE__ */ t.jsx(_, { children: "Invalid constant value" }),
        /* @__PURE__ */ t.jsx("div", { children: "In order to use your Knowledge base locally please set a valid value for the key constant." })
      ] }),
      !a.key && /* @__PURE__ */ t.jsxs(E, { children: [
        /* @__PURE__ */ t.jsx(I, { children: /* @__PURE__ */ t.jsx(F, {}) }),
        /* @__PURE__ */ t.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
          A,
          {
            href: "https://genai.home.mendix.com/p/resources",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Create a key in the portal"
          }
        ) })
      ] }),
      a.keyId && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        /* @__PURE__ */ t.jsx(
          b,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: n.name,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          b,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: a.modelDisplayName,
            icon: a.modelDisplayName && a.modelDisplayName.toLocaleLowerCase().includes("cohere") ? Q : void 0,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          b,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: a.modelName,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          b,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: a.keyName,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsx(
          b,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: a.environment,
            onChange: w,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ t.jsxs(E, { children: [
          /* @__PURE__ */ t.jsx(I, { children: /* @__PURE__ */ t.jsx(F, {}) }),
          /* @__PURE__ */ t.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(A, { href: a.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    a.keyId && /* @__PURE__ */ t.jsxs(j, { label: "Configured Collections", children: [
      /* @__PURE__ */ t.jsx(ee, { label: "Collections", buttonCaption: "List collections", onPress: s }),
      o && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
        g && /* @__PURE__ */ t.jsxs(fe, { children: [
          "Last updated: ",
          g.toLocaleString()
        ] }),
        /* @__PURE__ */ t.jsx(
          ce,
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
}, xe = G(), Ce = ({ studioPro: e, documentId: n }) => {
  const r = e.ui.messageBoxes, i = e.app.model.customBlobDocuments, [d, c] = y.useState(0), [o, h] = y.useState(!1), [m, p] = y.useState(xe), g = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Y }
  ];
  y.useEffect(() => {
    const s = (x) => {
      const { documents: v } = x;
      v.some((C) => C.documentId === n) && c((C) => C + 1);
    };
    return i.addEventListener("documentsChanged", s), () => {
      i.removeEventListener("documentsChanged", s);
    };
  }, []), y.useEffect(() => {
    i.getDocumentById(n).then(async (s) => {
      if (s && !("error" in s)) {
        const x = s.document.contents;
        p({ ...x }), h(!0);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await r.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s);
    });
  }, [d]);
  const u = async (s) => {
    me(
      m,
      p,
      B(e, n),
      s
    )();
  }, a = () => m.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ t.jsx(U, { studioPro: e, children: /* @__PURE__ */ t.jsxs(M, { children: [
    !o && /* @__PURE__ */ t.jsx(H, {}),
    o && /* @__PURE__ */ t.jsx(P, { children: /* @__PURE__ */ t.jsxs(z, { children: [
      /* @__PURE__ */ t.jsx(j, { label: "Common", children: /* @__PURE__ */ t.jsx(
        ne,
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
      m.provider === "MxCloudGenAI" && /* @__PURE__ */ t.jsx(
        ge,
        {
          studioPro: e,
          knowledgebase: m,
          setKnowledgebase: p,
          updateStudioProDocument: B(e, n)
        }
      )
    ] }) })
  ] }) });
}, Be = $(Ce);
export {
  Be as component
};
