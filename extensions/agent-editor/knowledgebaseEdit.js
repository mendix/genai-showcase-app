import { y as M, r as y, w as e, G as k, F as K, H as w, S as D, D as W, P as O, E as q, I as U } from "./Icon-DlQJfq7F.js";
import { T as _, c as $, C as z } from "./TextWithIcon-sxhIisHZ.js";
import { c as H, a as B, b as P, u as N } from "./knowledgebaseUtils-DFj6m72n.js";
import { g as J, f as Q, h as X, e as Y } from "./modelUtils-BmVykd1T.js";
import { i as Z, B as ee, a as te, v as F, C as ne, b as ae } from "./text-B69f6L3w.js";
import { a as se, b as oe, c as re, g as ie, y as A } from "./mxCloudGenAIUtils-CVMbpjpz.js";
import { c as G } from "./DesignSystemTokens-BZrmEyPo.js";
import { W as le } from "./Banner-BKPTdROG.js";
import { T as de } from "./Table-CfPTytSG.js";
import { T as C } from "./TextInputLabeled-CEPunJWI.js";
import { T as ce } from "./TextInputWithButton-DdFsQTz_.js";
const ue = (t, n, a, l) => async () => {
  if (!(t.provider === l && "key" in t.providerFields) && l === "MxCloudGenAI") {
    const c = H(), u = { ...t, provider: l, providerFields: c };
    n(u), a(u);
  }
}, R = async (t, n, a, l) => {
  const c = G(t), u = await se(t, n);
  if (typeof u == "string") {
    c.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  const o = oe(
    n,
    u
  ), m = n.providerFields, s = o.providerFields;
  (m.modelDisplayName !== s.modelDisplayName || m.modelName !== s.modelName) && (a(o), l(o));
}, me = async (t, n, a, l, c) => {
  const u = G(t);
  try {
    const o = n.providerFields, m = await J(t, o.key);
    if (!m)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = re(t, m);
    if (s.type !== "KNOWLEDGE_BASE")
      throw new Error(`Unsupported key type: ${s.type}. Only Knowledge Base keys are currently supported.`);
    const p = {
      key: o.key,
      keyId: s.keyId || "",
      keyName: s.keyName || "",
      environment: s.environment || "",
      deepLinkURL: s.deepLinkUrl || "",
      modelDisplayName: s.embeddings.name || "",
      modelName: s.embeddings.model || ""
    }, h = {
      ...n,
      name: s.name || "",
      providerFields: {
        ...p
      }
    };
    a(h), c(h), await R(t, h, a, c);
  } catch (o) {
    u.error("Error during MxCloud GenAI key import:", o);
    const m = "Failed to import MxCloud GenAI Knowledge base key.", s = String(o), p = B(n);
    await t.ui.messageBoxes.show("error", m, s), a(p), c(p), l(v.NotImported);
  }
};
async function pe(t, n) {
  const a = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (a.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: a.selected.id,
          qualifiedName: a.selected.module + "." + a.selected.name
        }
      }
    };
  if (a.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: "" } };
}
async function ye(t, n) {
  var u;
  let a = [];
  const l = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const o = await ie(t, n)();
        return typeof o == "string" ? o : (a = o, !0);
      }
    }
  ], c = await t.ui.dialogs.showProgressDialog("Getting collections", l);
  switch (c.result) {
    case "Success":
      return a;
    case "UserCancelled":
      return;
    case "Failure": {
      const o = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", m = ((u = c.failedStep) == null ? void 0 : u.error) ?? "";
      await t.ui.messageBoxes.show("error", o, m);
      return;
    }
  }
}
const v = {
  ...ne,
  NotImported: "NotImported"
}, b = () => {
}, he = M.div`
    color: ${({ theme: t }) => t.colorsTextSecondaryDefault};
    font-size: 10px;
`, ve = ({
  studioPro: t,
  knowledgebase: n,
  setKnowledgebase: a,
  updateStudioProDocument: l
}) => {
  var L;
  const [c, u] = y.useState(), [o, m] = y.useState(!1), [s, p] = y.useState([]), [h, I] = y.useState(null), r = n.providerFields, d = async () => {
    const i = o;
    m(!1), R(t, n, a, l);
    const g = await ye(t, n);
    if (g === void 0) {
      i && m(!0);
      return;
    }
    p(g), m(!0), I(/* @__PURE__ */ new Date());
  }, x = async () => {
    r.key && X(t, r.key);
  }, j = async (i) => {
    const g = i.providerFields, S = await F(t, g.key);
    if (u(S), !S)
      me(
        t,
        i,
        a,
        u,
        l
      );
    else {
      const E = B(i);
      a(E), l(E);
    }
  }, f = async () => {
    const i = await pe(t, n);
    i && (a(i), l(i), await j(i));
  };
  y.useEffect(() => {
    (async () => {
      const g = await F(t, r.key);
      u(g);
    })();
  }, []);
  const T = (i) => i === v.Required ? "Knowledge base key is required" : i === v.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === v.InvalidType ? "Selected constant must be of type string." : i === v.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, V = c === v.EmptyValue || c === v.PrivateValue || c === v.NotImported;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(k, { label: "Resource", children: [
      /* @__PURE__ */ e.jsx(
        ce,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((L = r.key) == null ? void 0 : L.qualifiedName) ?? "",
          icon: r.key ? /* @__PURE__ */ e.jsx(Z, {}) : void 0,
          buttonCaption: "Select...",
          onClick: f,
          onClickSecondary: r.key ? x : void 0,
          validate: () => T(c),
          buttonCaptionSecondary: r.key ? "Show" : void 0
        }
      ),
      V && /* @__PURE__ */ e.jsxs(le, { children: [
        /* @__PURE__ */ e.jsx(ee, { children: "Invalid constant value" }),
        /* @__PURE__ */ e.jsx("div", { children: "In order to use your Knowledge base locally please set a valid value for the key constant." })
      ] }),
      !r.key && /* @__PURE__ */ e.jsxs(K, { children: [
        /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(A, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
      ] }),
      r.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          C,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: n.name,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          C,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: r.modelDisplayName,
            icon: r.modelDisplayName && r.modelDisplayName.toLocaleLowerCase().includes("cohere") ? Q : void 0,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          C,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: r.modelName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          C,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: r.keyName,
            onChange: b,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          C,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: r.environment,
            onChange: b,
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
      /* @__PURE__ */ e.jsx(te, { label: "Collections", buttonCaption: "List collections", onPress: d }),
      o && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        h && /* @__PURE__ */ e.jsxs(he, { children: [
          "Last updated: ",
          h.toLocaleString()
        ] }),
        /* @__PURE__ */ e.jsx(
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
            data: s.map((i) => [
              /* @__PURE__ */ e.jsx(_, { icon: void 0, text: i.name }, i.name)
            ])
          }
        )
      ] })
    ] })
  ] });
}, ge = P(), xe = ({ studioPro: t, documentId: n }) => {
  const a = t.ui.messageBoxes, l = t.app.model.customBlobDocuments, [c, u] = y.useState(0), [o, m] = y.useState(!1), [s, p] = y.useState(ge), h = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Y }
  ];
  y.useEffect(() => {
    const d = (x) => {
      const { documents: j } = x;
      j.some((f) => f.documentId === n) && u((f) => f + 1);
    };
    return l.addEventListener("documentsChanged", d), () => {
      l.removeEventListener("documentsChanged", d);
    };
  }, []), y.useEffect(() => {
    l.getDocumentById(n).then(async (d) => {
      if (d && !("error" in d)) {
        const x = d.document.contents;
        p({ ...x }), m(!0);
      } else
        throw new Error((d == null ? void 0 : d.error) || "Document not found");
    }).catch(async (d) => {
      await a.show("error", "Error loading document", "Details: " + (d == null ? void 0 : d.message) || d);
    });
  }, [c]);
  const I = async (d) => {
    ue(
      s,
      p,
      N(t, n),
      d
    )();
  }, r = () => s.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(W, { studioPro: t, children: /* @__PURE__ */ e.jsxs(O, { children: [
    !o && /* @__PURE__ */ e.jsx(z, {}),
    o && /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx(k, { label: "Common", children: /* @__PURE__ */ e.jsx(
        ae,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: s.provider,
          options: h,
          onSelectionChange: I,
          validate: r
        }
      ) }),
      s.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        ve,
        {
          studioPro: t,
          knowledgebase: s,
          setKnowledgebase: p,
          updateStudioProDocument: N(t, n)
        }
      )
    ] }) })
  ] }) });
}, De = $(xe);
export {
  De as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
