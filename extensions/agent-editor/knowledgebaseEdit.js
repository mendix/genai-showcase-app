import { y as q, r as y, w as e, G as k, F as K, H as w, S as D, D as U, P, E as _, I as $ } from "./Icon-DlQJfq7F.js";
import { T as z, c as H, C as J } from "./TextWithIcon-sxhIisHZ.js";
import { c as Q, a as B, b as X, u as N } from "./knowledgebaseUtils-DFj6m72n.js";
import { g as Y, b as Z, h as ee, e as te } from "./modelUtils-whA8-BBg.js";
import { i as ne, B as se, a as oe, v as F, C as ae, b as re } from "./text-DiVMLl3U.js";
import { a as ie, b as le, c as ce, g as de, y as A } from "./mxCloudGenAIUtils-BWKTbhPW.js";
import { c as G } from "./DesignSystemTokens-BZrmEyPo.js";
import { W as ue, S as me } from "./Banner-BKPTdROG.js";
import { T as pe } from "./Table-CfPTytSG.js";
import { T as g } from "./TextInputLabeled-CEPunJWI.js";
import { T as ye } from "./TextInputWithButton-DdFsQTz_.js";
const he = (t, n, s, l) => async () => {
  if (!(t.provider === l && "key" in t.providerFields) && l === "MxCloudGenAI") {
    const d = Q(), u = { ...t, provider: l, providerFields: d };
    n(u), s(u);
  }
}, T = async (t, n, s, l) => {
  const d = G(t), u = await ie(t, n);
  if (typeof u == "string") {
    d.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  const o = le(
    n,
    u
  ), m = n.providerFields, a = o.providerFields;
  (m.modelDisplayName !== a.modelDisplayName || m.modelName !== a.modelName) && (s(o), l(o).catch(
    (p) => d.error("Failed to update model document after API response:", p)
  ));
}, ve = async (t, n, s, l, d) => {
  const u = G(t);
  try {
    const o = n.providerFields, m = await Y(t, o.key);
    if (!m)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const a = ce(t, m);
    if (a.type !== "KNOWLEDGE_BASE")
      throw new Error(
        `Unsupported key type: ${a.type}. Only Text Generation keys are currently supported.`
      );
    const p = {
      key: o.key,
      keyId: a.keyId || "",
      keyName: a.keyName || "",
      environment: a.environment || "",
      deepLinkURL: a.deepLinkUrl || "",
      modelDisplayName: a.embeddings.name || "",
      modelName: a.embeddings.model || ""
    }, v = {
      ...n,
      name: a.name || "",
      providerFields: {
        ...p
      }
    };
    s(v), d(v), await T(t, v, s, d);
  } catch (o) {
    u.error("Error during MxCloud GenAI key import:", o);
    const m = "Failed to import MxCloud GenAI Knowledge base key.", a = String(o), p = B(n);
    await t.ui.messageBoxes.show("error", m, a), s(p), d(p), l(h.NotImported);
  }
};
async function xe(t, n) {
  const s = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
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
    return { ...n, providerFields: { ...n.providerFields, key: "" } };
}
async function fe(t, n) {
  var u;
  let s = [];
  const l = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const o = await de(t, n)();
        return typeof o == "string" ? o : (s = o, !0);
      }
    }
  ], d = await t.ui.dialogs.showProgressDialog("Getting collections", l);
  switch (d.result) {
    case "Success":
      return s;
    case "UserCancelled":
      return;
    case "Failure": {
      const o = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", m = ((u = d.failedStep) == null ? void 0 : u.error) ?? "";
      await t.ui.messageBoxes.show("error", o, m);
      return;
    }
  }
}
const h = {
  ...ae,
  NotImported: "NotImported"
}, C = () => {
}, ge = q.div`
    color: ${({ theme: t }) => t.colorsTextSecondaryDefault};
    font-size: 10px;
`, Ce = ({
  studioPro: t,
  knowledgebase: n,
  setKnowledgebase: s,
  updateStudioProDocument: l
}) => {
  var S;
  const [d, u] = y.useState(!1), [o, m] = y.useState(), [a, p] = y.useState(!1), [v, I] = y.useState([]), [b, c] = y.useState(null), r = n.providerFields, j = async () => {
    const i = a;
    p(!1), T(t, n, s, l);
    const x = await fe(t, n);
    if (x === void 0) {
      i && p(!0);
      return;
    }
    I(x), p(!0), c(/* @__PURE__ */ new Date());
  }, f = () => {
    u(!1);
  }, R = async () => {
    r.key && ee(t, r.key);
  }, V = async (i) => {
    const x = i.providerFields, L = await F(t, x.key);
    if (m(L), u(!1), !L)
      ve(
        t,
        i,
        s,
        m,
        l
      );
    else {
      const E = B(i);
      s(E), l(E);
    }
  }, O = async () => {
    const i = await xe(t, n);
    i && (s(i), l(i), await V(i));
  };
  y.useEffect(() => {
    if (d) {
      const i = setTimeout(() => {
        u(!1);
      }, 5e3);
      return () => clearTimeout(i);
    }
  }, [d]), y.useEffect(() => {
    (async () => {
      const x = await F(t, r.key);
      m(x);
    })();
  }, []);
  const M = (i) => i === h.Required ? "Knowledge base key is required" : i === h.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === h.InvalidType ? "Selected constant must be of type string." : i === h.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, W = o === h.EmptyValue || o === h.PrivateValue || o === h.NotImported;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(k, { label: "Resource", children: [
      /* @__PURE__ */ e.jsx(
        ye,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((S = r.key) == null ? void 0 : S.qualifiedName) ?? "",
          icon: r.key ? /* @__PURE__ */ e.jsx(ne, {}) : void 0,
          buttonCaption: "Select...",
          onClick: O,
          onClickSecondary: r.key ? R : void 0,
          validate: () => M(o),
          buttonCaptionSecondary: r.key ? "Show" : void 0
        }
      ),
      W && /* @__PURE__ */ e.jsxs(ue, { children: [
        /* @__PURE__ */ e.jsx(se, { children: "Invalid constant value" }),
        /* @__PURE__ */ e.jsx("div", { children: "In order to use your Knowledge base locally please set a valid value for the key constant." })
      ] }),
      !r.key && /* @__PURE__ */ e.jsxs(K, { children: [
        /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(A, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
      ] }),
      r.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          g,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: n.name,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          g,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: r.modelDisplayName,
            icon: r.modelDisplayName && r.modelDisplayName.toLocaleLowerCase().includes("anthropic") ? Z : void 0,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          g,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: r.modelName,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          g,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: r.keyName,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          g,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: r.environment,
            onChange: C,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsxs(K, { children: [
          /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(D, {}) }),
          /* @__PURE__ */ e.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(A, { href: r.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    r.keyId && /* @__PURE__ */ e.jsxs(k, { label: "Configured Collections", children: [
      /* @__PURE__ */ e.jsx(oe, { label: "Collections", buttonCaption: "List collections", onPress: j }),
      a && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        b && /* @__PURE__ */ e.jsxs(ge, { children: [
          "Last updated: ",
          b.toLocaleString()
        ] }),
        /* @__PURE__ */ e.jsx(
          pe,
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
            data: v.map((i) => [
              /* @__PURE__ */ e.jsx(z, { icon: void 0, text: i.name }, i.name)
            ])
          }
        )
      ] }),
      d && /* @__PURE__ */ e.jsx(me, { onClose: f, children: "Connection successful." })
    ] })
  ] });
}, be = X(), we = ({ studioPro: t, documentId: n }) => {
  const s = t.ui.messageBoxes, l = t.app.model.customBlobDocuments, [d, u] = y.useState(0), [o, m] = y.useState(!1), [a, p] = y.useState(be), v = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: te }
  ];
  y.useEffect(() => {
    const c = (r) => {
      const { documents: j } = r;
      j.some((f) => f.documentId === n) && u((f) => f + 1);
    };
    return l.addEventListener("documentsChanged", c), () => {
      l.removeEventListener("documentsChanged", c);
    };
  }, []), y.useEffect(() => {
    l.getDocumentById(n).then(async (c) => {
      if (c && !("error" in c)) {
        const r = c.document.contents;
        p({ ...r }), m(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch(async (c) => {
      await s.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
    });
  }, [d]);
  const I = async (c) => {
    he(
      a,
      p,
      N(t, n),
      c
    )();
  }, b = () => a.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(U, { studioPro: t, children: /* @__PURE__ */ e.jsxs(P, { children: [
    !o && /* @__PURE__ */ e.jsx(J, {}),
    o && /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsxs($, { children: [
      /* @__PURE__ */ e.jsx(k, { label: "Common", children: /* @__PURE__ */ e.jsx(
        re,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: a.provider,
          options: v,
          onSelectionChange: I,
          validate: b
        }
      ) }),
      a.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        Ce,
        {
          studioPro: t,
          knowledgebase: a,
          setKnowledgebase: p,
          updateStudioProDocument: N(t, n)
        }
      )
    ] }) })
  ] }) });
}, Be = H(we);
export {
  Be as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
