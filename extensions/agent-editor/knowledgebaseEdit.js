import { y as O, r as y, w as n, G as j, F as D, H as w, S as A, D as V, P as W, E as U, I as _ } from "./Icon-DL4Zg1xv.js";
import { T as $, c as q, C as z } from "./TextWithIcon-CXVpI2JS.js";
import { c as L } from "./DesignSystemTokens-CB_9gr2a.js";
import { b as H, e as J } from "./modelUtils-IL_KjN2R.js";
import { g as P, i as Q, B as X, h as Y, v as Z, C as ee } from "./ButtonWithLabel-AZ8aIohf.js";
import { a as ne, b as te, c as oe, g as se, y as E } from "./mxCloudGenAIUtils-DEyUNc7-.js";
import { S as ae } from "./Banner-Dsp9MSVG.js";
import { T as re } from "./Table-BdZeaadb.js";
import { T as x } from "./TextInputLabeled-gjLdhU4s.js";
import { T as ie } from "./TextInputWithButton-E-wZEDvQ.js";
const K = (e, t) => async (o) => {
  const a = L(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, o);
  } catch (r) {
    a.error("Failed to save knowledge base document:", r), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: r.message
    });
  }
};
function N() {
  return {
    name: "",
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: I()
  };
}
const I = () => ({
  environment: "",
  deepLinkURL: "",
  key: "",
  keyId: "",
  keyName: "",
  modelDisplayName: "",
  modelName: ""
}), B = (e) => {
  const t = e.providerFields;
  return {
    ...N(),
    provider: e.provider,
    providerFields: {
      ...I(),
      key: t.key
    }
  };
}, le = (e, t, o, a) => async () => {
  if (!(e.provider === a && "key" in e.providerFields) && a === "MxCloudGenAI") {
    const r = I(), d = { ...e, provider: a, providerFields: r };
    t(d), o(d);
  }
}, G = async (e, t, o, a) => {
  const r = L(e), d = await ne(e, t);
  if (typeof d == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  const i = te(
    t,
    d
  ), m = t.providerFields, s = i.providerFields;
  (m.modelDisplayName !== s.modelDisplayName || m.modelName !== s.modelName) && (o(i), a(i).catch(
    (p) => r.error("Failed to update model document after API response:", p)
  ));
}, ce = async (e, t, o, a, r) => {
  const d = L(e);
  try {
    const i = t.providerFields, m = await P(e, i.key);
    if (!m)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = oe(e, m);
    if (s.type !== "KNOWLEDGE_BASE")
      throw new Error(
        `Unsupported key type: ${s.type}. Only Text Generation keys are currently supported.`
      );
    const p = {
      key: i.key || "",
      keyId: s.keyId || "",
      keyName: s.keyName || "",
      environment: s.environment || "",
      deepLinkURL: s.deepLinkUrl || "",
      modelDisplayName: s.embeddings.name || "",
      modelName: s.embeddings.model || ""
    }, h = {
      ...t,
      name: s.name || "",
      providerFields: {
        ...p
      }
    };
    o(h), r(h), await G(e, h, o, r);
  } catch (i) {
    d.error("Error during MxCloud GenAI key import:", i);
    const m = "Failed to import MxCloud GenAI model key.", s = String(i), p = B(t);
    await e.ui.messageBoxes.show("error", m, s), o(p), r(p), a("Key was not imported");
  }
};
async function de(e, t) {
  const o = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (o.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: o.selected.module + "." + o.selected.name
      }
    };
  if (o.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: "" } };
}
async function ue(e, t) {
  var d;
  let o = [];
  const a = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const i = await se(e, t)();
        return typeof i == "string" ? i : (o = i, !0);
      }
    }
  ], r = await e.ui.dialogs.showProgressDialog("Getting collections", a);
  switch (r.result) {
    case "Success":
      return o;
    case "UserCancelled":
      return;
    case "Failure": {
      const i = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", m = ((d = r.failedStep) == null ? void 0 : d.error) ?? "";
      await e.ui.messageBoxes.show("error", i, m);
      return;
    }
  }
}
const C = () => {
}, me = O.div`
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    font-size: 10px;
`, pe = ({
  studioPro: e,
  knowledgebase: t,
  setKnowledgebase: o,
  updateStudioProDocument: a
}) => {
  const [r, d] = y.useState(!1), [i, m] = y.useState(void 0), [s, p] = y.useState(!1), [h, k] = y.useState([]), [g, c] = y.useState(null), l = t.providerFields, b = async () => {
    const u = s;
    p(!1), G(e, t, o, a);
    const f = await ue(e, t);
    if (f === void 0) {
      u && p(!0);
      return;
    }
    k(f), p(!0), c(/* @__PURE__ */ new Date());
  }, v = () => {
    d(!1);
  }, R = async () => {
    l.key && Y(e, l.key);
  }, T = async (u) => {
    const f = u.providerFields, S = await Z("Resource key")(e, f.key);
    if (m(S), d(!1), !S)
      ce(
        e,
        u,
        o,
        m,
        a
      );
    else {
      const F = B(u);
      o(F), a(F);
    }
  }, M = async () => {
    const u = await de(e, t);
    u && (o(u), a(u), await T(u));
  };
  return y.useEffect(() => {
    if (r) {
      const u = setTimeout(() => {
        d(!1);
      }, 5e3);
      return () => clearTimeout(u);
    }
  }, [r]), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(j, { label: "Resource", children: [
      /* @__PURE__ */ n.jsx(
        ie,
        {
          label: "Resource key",
          ariaLabel: "Resource key",
          value: l.key ?? "",
          icon: l.key ? /* @__PURE__ */ n.jsx(Q, {}) : void 0,
          buttonCaption: "Select...",
          onClick: M,
          onClickSecondary: l.key ? R : void 0,
          validate: () => i || !0,
          buttonCaptionSecondary: l.key ? "Show" : void 0
        }
      ),
      !l.key && /* @__PURE__ */ n.jsxs(D, { children: [
        /* @__PURE__ */ n.jsx(w, { children: /* @__PURE__ */ n.jsx(A, {}) }),
        /* @__PURE__ */ n.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(E, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
      ] }),
      l.keyId && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        /* @__PURE__ */ n.jsx(
          x,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: t.name,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          x,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: l.modelDisplayName,
            icon: l.modelDisplayName && l.modelDisplayName.toLocaleLowerCase().includes("anthropic") ? H : void 0,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          x,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: l.modelName,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          x,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: l.keyName,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsx(
          x,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: l.environment,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ n.jsxs(D, { children: [
          /* @__PURE__ */ n.jsx(w, { children: /* @__PURE__ */ n.jsx(A, {}) }),
          /* @__PURE__ */ n.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(E, { href: l.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    l.keyId && /* @__PURE__ */ n.jsxs(j, { label: "Configured Collections", children: [
      /* @__PURE__ */ n.jsx(X, { label: "Collections", buttonCaption: "List collections", onPress: b }),
      s && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        g && /* @__PURE__ */ n.jsxs(me, { children: [
          "Last updated: ",
          g.toLocaleString()
        ] }),
        /* @__PURE__ */ n.jsx(
          re,
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
            data: h.map((u) => [
              /* @__PURE__ */ n.jsx($, { icon: void 0, text: u.name }, u.name)
            ])
          }
        )
      ] }),
      r && /* @__PURE__ */ n.jsx(ae, { onClose: v, children: "Connection successful." })
    ] })
  ] });
}, ye = N(), he = ({ studioPro: e, documentId: t }) => {
  const o = e.ui.messageBoxes, a = e.app.model.customBlobDocuments, [r, d] = y.useState(0), [i, m] = y.useState(!1), [s, p] = y.useState(ye), h = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: J }
  ];
  y.useEffect(() => {
    const c = (l) => {
      const { documents: b } = l;
      b.some((v) => v.documentId === t) && d((v) => v + 1);
    };
    return a.addEventListener("documentsChanged", c), () => {
      a.removeEventListener("documentsChanged", c);
    };
  }, []), y.useEffect(() => {
    a.getDocumentById(t).then(async (c) => {
      if (c && !("error" in c)) {
        const l = c.document.contents;
        p({ ...l }), m(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch(async (c) => {
      await o.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
    });
  }, [r]);
  const k = async (c) => {
    le(
      s,
      p,
      K(e, t),
      c
    )();
  }, g = () => s.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ n.jsx(V, { studioPro: e, children: /* @__PURE__ */ n.jsxs(W, { children: [
    !i && /* @__PURE__ */ n.jsx(z, {}),
    i && /* @__PURE__ */ n.jsx(U, { children: /* @__PURE__ */ n.jsxs(_, { children: [
      /* @__PURE__ */ n.jsx(j, { label: "Common", children: /* @__PURE__ */ n.jsx(
        ee,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: s.provider,
          options: h,
          onSelectionChange: k,
          validate: g
        }
      ) }),
      s.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        pe,
        {
          studioPro: e,
          knowledgebase: s,
          setKnowledgebase: p,
          updateStudioProDocument: K(e, t)
        }
      )
    ] }) })
  ] }) });
}, Ie = q(he);
export {
  Ie as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
