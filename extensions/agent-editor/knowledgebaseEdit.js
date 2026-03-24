import { y as V, r as y, w as n, G as j, F as A, H as w, S as E, D as W, P as U, E as q, I as _ } from "./Icon-CjmU6z_u.js";
import { T as $, c as z, C as H } from "./TextWithIcon-D6dQcKBr.js";
import { c as I } from "./DesignSystemTokens-CB_9gr2a.js";
import { b as J, e as P } from "./modelUtils-Rqk_kWfx.js";
import { g as Q, i as X, B as Y, h as Z, v as ee, a as ne } from "./ButtonWithLabel-B5GMgwom.js";
import { a as te, b as oe, c as se, g as ae, y as N } from "./mxCloudGenAIUtils-IFtrUv7s.js";
import { S as re } from "./Banner-WZkJyUUP.js";
import { T as ie } from "./Table-DUwCpH49.js";
import { T as x } from "./TextInputLabeled-DzKYuJqW.js";
import { T as le } from "./TextInputWithButton-7i5j2n40.js";
const K = (e, t) => async (o) => {
  const a = I(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(t, o);
  } catch (r) {
    a.error("Failed to save knowledge base document:", r), await e.ui.notifications.show({
      title: "Failed to save knowledge base document.",
      message: r.message
    });
  }
};
function B() {
  return {
    name: "",
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: L()
  };
}
const L = () => ({
  environment: "",
  deepLinkURL: "",
  keyId: "",
  keyName: "",
  modelDisplayName: "",
  modelName: ""
}), G = (e) => {
  const t = e.providerFields;
  return {
    ...B(),
    provider: e.provider,
    providerFields: {
      ...L(),
      key: t.key
    }
  };
}, ce = (e, t, o, a) => async () => {
  if (!(e.provider === a && "key" in e.providerFields) && a === "MxCloudGenAI") {
    const r = L(), d = { ...e, provider: a, providerFields: r };
    t(d), o(d);
  }
}, R = async (e, t, o, a) => {
  const r = I(e), d = await te(e, t);
  if (typeof d == "string") {
    r.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  const i = oe(
    t,
    d
  ), m = t.providerFields, s = i.providerFields;
  (m.modelDisplayName !== s.modelDisplayName || m.modelName !== s.modelName) && (o(i), a(i).catch(
    (p) => r.error("Failed to update model document after API response:", p)
  ));
}, de = async (e, t, o, a, r) => {
  const d = I(e);
  try {
    const i = t.providerFields, m = await Q(e, i.key);
    if (!m)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = se(e, m);
    if (s.type !== "KNOWLEDGE_BASE")
      throw new Error(
        `Unsupported key type: ${s.type}. Only Text Generation keys are currently supported.`
      );
    const p = {
      key: i.key,
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
    o(h), r(h), await R(e, h, o, r);
  } catch (i) {
    d.error("Error during MxCloud GenAI key import:", i);
    const m = "Failed to import MxCloud GenAI model key.", s = String(i), p = G(t);
    await e.ui.messageBoxes.show("error", m, s), o(p), r(p), a("Key was not imported");
  }
};
async function ue(e, t) {
  const o = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
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
    return { ...t, providerFields: { ...t.providerFields, key: "" } };
}
async function me(e, t) {
  var d;
  let o = [];
  const a = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const i = await ae(e, t)();
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
}, pe = V.div`
    color: ${({ theme: e }) => e.colorsTextSecondaryDefault};
    font-size: 10px;
`, ye = ({
  studioPro: e,
  knowledgebase: t,
  setKnowledgebase: o,
  updateStudioProDocument: a
}) => {
  var S;
  const [r, d] = y.useState(!1), [i, m] = y.useState(void 0), [s, p] = y.useState(!1), [h, k] = y.useState([]), [g, c] = y.useState(null), l = t.providerFields, b = async () => {
    const u = s;
    p(!1), R(e, t, o, a);
    const f = await me(e, t);
    if (f === void 0) {
      u && p(!0);
      return;
    }
    k(f), p(!0), c(/* @__PURE__ */ new Date());
  }, v = () => {
    d(!1);
  }, T = async () => {
    l.key && Z(e, l.key);
  }, M = async (u) => {
    const f = u.providerFields, F = await ee(e, f.key);
    if (m(F), d(!1), !F)
      de(
        e,
        u,
        o,
        m,
        a
      );
    else {
      const D = G(u);
      o(D), a(D);
    }
  }, O = async () => {
    const u = await ue(e, t);
    u && (o(u), a(u), await M(u));
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
        le,
        {
          label: "Resource key",
          ariaLabel: "Resource key",
          value: ((S = l.key) == null ? void 0 : S.qualifiedName) ?? "",
          icon: l.key ? /* @__PURE__ */ n.jsx(X, {}) : void 0,
          buttonCaption: "Select...",
          onClick: O,
          onClickSecondary: l.key ? T : void 0,
          validate: () => i || !0,
          buttonCaptionSecondary: l.key ? "Show" : void 0
        }
      ),
      !l.key && /* @__PURE__ */ n.jsxs(A, { children: [
        /* @__PURE__ */ n.jsx(w, { children: /* @__PURE__ */ n.jsx(E, {}) }),
        /* @__PURE__ */ n.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(N, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
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
            icon: l.modelDisplayName && l.modelDisplayName.toLocaleLowerCase().includes("anthropic") ? J : void 0,
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
        /* @__PURE__ */ n.jsxs(A, { children: [
          /* @__PURE__ */ n.jsx(w, { children: /* @__PURE__ */ n.jsx(E, {}) }),
          /* @__PURE__ */ n.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(N, { href: l.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    l.keyId && /* @__PURE__ */ n.jsxs(j, { label: "Configured Collections", children: [
      /* @__PURE__ */ n.jsx(Y, { label: "Collections", buttonCaption: "List collections", onPress: b }),
      s && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
        g && /* @__PURE__ */ n.jsxs(pe, { children: [
          "Last updated: ",
          g.toLocaleString()
        ] }),
        /* @__PURE__ */ n.jsx(
          ie,
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
      r && /* @__PURE__ */ n.jsx(re, { onClose: v, children: "Connection successful." })
    ] })
  ] });
}, he = B(), ve = ({ studioPro: e, documentId: t }) => {
  const o = e.ui.messageBoxes, a = e.app.model.customBlobDocuments, [r, d] = y.useState(0), [i, m] = y.useState(!1), [s, p] = y.useState(he), h = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: P }
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
    ce(
      s,
      p,
      K(e, t),
      c
    )();
  }, g = () => s.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ n.jsx(W, { studioPro: e, children: /* @__PURE__ */ n.jsxs(U, { children: [
    !i && /* @__PURE__ */ n.jsx(H, {}),
    i && /* @__PURE__ */ n.jsx(q, { children: /* @__PURE__ */ n.jsxs(_, { children: [
      /* @__PURE__ */ n.jsx(j, { label: "Common", children: /* @__PURE__ */ n.jsx(
        ne,
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
        ye,
        {
          studioPro: e,
          knowledgebase: s,
          setKnowledgebase: p,
          updateStudioProDocument: K(e, t)
        }
      )
    ] }) })
  ] }) });
}, Se = z(ve);
export {
  Se as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
