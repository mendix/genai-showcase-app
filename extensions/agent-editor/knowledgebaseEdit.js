import { y as O, r as y, w as e, G as L, D as K, H as k, Q as D, N as W, P as q, O as U, R as M } from "./Icon-fHsyUm8I.js";
import { B as P, c as _, C as $ } from "./TextWithIcon-VpEcElJR.js";
import { c as z, a as B, i as F, b as H, u as N } from "./knowledgebaseUtils-D7XcxLdS.js";
import { g as Q, f as J, h as X, e as Y } from "./modelUtils-B4UuvvXG.js";
import { i as Z, B as ee, C as te, v as ne, a as se } from "./ButtonWithLabel-Bn6Si8ff.js";
import { y as A } from "./Link-6Dwxyd2F.js";
import { c as G } from "./userPreferences-BV8i5uIO.js";
import { a as ae, b as oe, d as re, g as ie } from "./mxCloudGenAIUtils-BR9rBZ4n.js";
import { W as le } from "./Banner-CrOSEmJM.js";
import { T as ce } from "./Table-Cr6LdGBI.js";
import { T as j } from "./TextInputLabeled-ByXuMGQx.js";
import { T as de } from "./TextInputWithButton-Ck7o_ZdS.js";
const ue = (t, n, o, i) => async () => {
  if (!(t.provider === i && "key" in t.providerFields) && i === "MxCloudGenAI") {
    const c = z(), d = { ...t, provider: i, providerFields: c };
    n(d), o(d);
  }
}, R = async (t, n) => {
  const o = G(t), i = await ae(t, n);
  if (typeof i == "string") {
    o.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return oe(
    n,
    i
  );
}, me = async (t, n, o, i, c) => {
  var h, v;
  const d = G(t);
  let s, m = !1, p = !1;
  try {
    const u = n.providerFields, r = await Q(t, u.key);
    if (!r)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const a = re(t, r);
    if (a.type !== "KNOWLEDGE_BASE")
      throw new Error(`Unsupported key type: ${a.type}. Only Knowledge Base keys are currently supported.`);
    const x = {
      key: u.key,
      keyId: a.keyId || "",
      keyName: a.keyName || "",
      environment: a.environment || "",
      deepLinkURL: a.deepLinkUrl || "",
      modelDisplayName: a.embeddings.name || "",
      modelName: a.embeddings.model || ""
    };
    s = {
      ...n,
      name: a.name || "",
      providerFields: {
        ...x
      }
    }, p = !0;
    const g = await R(t, s);
    g && (m = !0, s = g);
  } catch (u) {
    d.error("Error during MxCloud GenAI key import:", u), i(f.NotImported);
  } finally {
    if (!p)
      s = B(n), o(s), c(s);
    else if (m)
      s && !F(n, s) && (o(s), c(s));
    else {
      const u = (h = n.providerFields) == null ? void 0 : h.keyId, r = (v = s == null ? void 0 : s.providerFields) == null ? void 0 : v.keyId;
      u !== r && s && (o(s), c(s));
    }
  }
};
async function pe(t, n) {
  const o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
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
async function ye(t, n) {
  var d;
  let o = [];
  const i = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const s = await ie(t, n)();
        return typeof s == "string" ? s : (o = s, !0);
      }
    }
  ], c = await t.ui.dialogs.showProgressDialog("Getting collections", i);
  switch (c.result) {
    case "Success":
      return o;
    case "UserCancelled":
      return;
    case "Failure": {
      const s = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", m = ((d = c.failedStep) == null ? void 0 : d.error) ?? "";
      await t.ui.messageBoxes.show("error", s, m);
      return;
    }
  }
}
const f = {
  ...te,
  NotImported: "NotImported"
}, b = () => {
}, he = O.div`
    color: ${({ theme: t }) => t.colorsTextSecondaryDefault};
    font-size: 10px;
`, fe = ({
  studioPro: t,
  knowledgebase: n,
  setKnowledgebase: o,
  updateStudioProDocument: i
}) => {
  var S;
  const [c, d] = y.useState(), [s, m] = y.useState(!1), [p, h] = y.useState([]), [v, u] = y.useState(null), r = n.providerFields, a = async () => {
    const l = s;
    m(!1), R(t, n).then((C) => {
      C && !F(n, C) && (o(C), i(C));
    });
    const w = await ye(t, n);
    if (w === void 0) {
      l && m(!0);
      return;
    }
    h(w), m(!0), u(/* @__PURE__ */ new Date());
  }, x = async () => {
    r.key && X(t, r.key);
  }, g = async (l) => {
    const w = l.providerFields, C = await ne(t, w.key);
    if (d(C), !C)
      me(
        t,
        l,
        o,
        d,
        i
      );
    else {
      const E = B(l);
      o(E), i(E);
    }
  }, I = async () => {
    const l = await pe(t, n);
    l && (h([]), u(null), o(l), i(l), await g(l));
  };
  y.useEffect(() => {
    (async () => {
      await g(n);
    })();
  }, []);
  const T = (l) => l === f.Required ? "Knowledge base key is required" : l === f.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : l === f.InvalidType ? "Selected constant must be of type string." : l === f.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, V = c === f.EmptyValue || c === f.PrivateValue || c === f.NotImported;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(L, { label: "Resource", children: [
      /* @__PURE__ */ e.jsx(
        de,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((S = r.key) == null ? void 0 : S.qualifiedName) ?? "",
          icon: r.key ? /* @__PURE__ */ e.jsx(Z, {}) : void 0,
          buttonCaption: "Select...",
          onClick: I,
          onClickSecondary: r.key ? x : void 0,
          validate: () => T(c),
          buttonCaptionSecondary: r.key ? "Show" : void 0
        }
      ),
      V && /* @__PURE__ */ e.jsxs(le, { children: [
        /* @__PURE__ */ e.jsx(P, { children: "Invalid constant value" }),
        /* @__PURE__ */ e.jsx("div", { children: "In order to use your Knowledge base locally please set a valid value for the key constant." })
      ] }),
      !r.key && /* @__PURE__ */ e.jsxs(K, { children: [
        /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
          A,
          {
            href: "https://genai.home.mendix.com/p/resources",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Create a key in the portal"
          }
        ) })
      ] }),
      r.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          j,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: n.name,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          j,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: r.modelDisplayName,
            icon: r.modelDisplayName && r.modelDisplayName.toLocaleLowerCase().includes("cohere") ? J : void 0,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          j,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: r.modelName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          j,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: r.keyName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          j,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: r.environment,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsxs(K, { children: [
          /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
          /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(A, { href: r.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    r.keyId && /* @__PURE__ */ e.jsxs(L, { label: "Configured Collections", children: [
      /* @__PURE__ */ e.jsx(ee, { label: "Collections", buttonCaption: "List collections", onPress: a }),
      s && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        v && /* @__PURE__ */ e.jsxs(he, { children: [
          "Last updated: ",
          v.toLocaleString()
        ] }),
        /* @__PURE__ */ e.jsx(
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
            data: p.map((l) => [
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
}, ve = H(), xe = ({ studioPro: t, documentId: n }) => {
  const o = t.ui.messageBoxes, i = t.app.model.customBlobDocuments, [c, d] = y.useState(0), [s, m] = y.useState(!1), [p, h] = y.useState(ve), v = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Y }
  ];
  y.useEffect(() => {
    const a = (x) => {
      const { documents: g } = x;
      g.some((I) => I.documentId === n) && d((I) => I + 1);
    };
    return i.addEventListener("documentsChanged", a), () => {
      i.removeEventListener("documentsChanged", a);
    };
  }, []), y.useEffect(() => {
    i.getDocumentById(n).then(async (a) => {
      if (a && !("error" in a)) {
        const x = a.document.contents;
        h({ ...x }), m(!0);
      } else
        throw new Error((a == null ? void 0 : a.error) || "Document not found");
    }).catch(async (a) => {
      await o.show("error", "Error loading document", "Details: " + (a == null ? void 0 : a.message) || a);
    });
  }, [c]);
  const u = async (a) => {
    ue(
      p,
      h,
      N(t, n),
      a
    )();
  }, r = () => p.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ e.jsx(W, { studioPro: t, children: /* @__PURE__ */ e.jsxs(q, { children: [
    !s && /* @__PURE__ */ e.jsx($, {}),
    s && /* @__PURE__ */ e.jsx(U, { children: /* @__PURE__ */ e.jsxs(M, { children: [
      /* @__PURE__ */ e.jsx(L, { label: "Common", children: /* @__PURE__ */ e.jsx(
        se,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: p.provider,
          options: v,
          onSelectionChange: u,
          validate: r
        }
      ) }),
      p.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        fe,
        {
          studioPro: t,
          knowledgebase: p,
          setKnowledgebase: h,
          updateStudioProDocument: N(t, n)
        }
      )
    ] }) })
  ] }) });
}, Ne = _(xe);
export {
  Ne as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
