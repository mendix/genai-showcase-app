import { y as V, r as y, w as e, G as L, F as K, H as k, S as D, D as O, P as W, E as q, I as M } from "./Icon-DlQJfq7F.js";
import { c as U, C as P } from "./TextWithIcon-sxhIisHZ.js";
import { c as _, a as F, i as $, b as z, u as A } from "./knowledgebaseUtils-BNCnVoN-.js";
import { g as H, f as J, h as Q, e as X } from "./modelUtils-BmVykd1T.js";
import { i as Y, B as Z, a as ee, C as te, v as ne, b as se } from "./text-B69f6L3w.js";
import { y as N } from "./Link-DxInpxg1.js";
import { c as B } from "./DesignSystemTokens-BZrmEyPo.js";
import { a as ae, b as oe, c as re, g as ie } from "./mxCloudGenAIUtils-dXfIggxC.js";
import { W as le } from "./Banner-BKPTdROG.js";
import { T as ce } from "./Table-8NxjvFfk.js";
import { T as b } from "./TextInputLabeled-CEPunJWI.js";
import { T as de } from "./TextInputWithButton-DdFsQTz_.js";
const ue = (t, n, o, i) => async () => {
  if (!(t.provider === i && "key" in t.providerFields) && i === "MxCloudGenAI") {
    const c = _(), d = { ...t, provider: i, providerFields: c };
    n(d), o(d);
  }
}, G = async (t, n) => {
  const o = B(t), i = await ae(t, n);
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
  const d = B(t);
  let s, u = !1, m = !1;
  try {
    const p = n.providerFields, r = await H(t, p.key);
    if (!r)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const a = re(t, r);
    if (a.type !== "KNOWLEDGE_BASE")
      throw new Error(`Unsupported key type: ${a.type}. Only Knowledge Base keys are currently supported.`);
    const x = {
      key: p.key,
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
    }, m = !0;
    const g = await G(t, s);
    g && (u = !0, s = g);
  } catch (p) {
    d.error("Error during MxCloud GenAI key import:", p), i(f.NotImported);
  } finally {
    if (!m)
      s = F(n), o(s), c(s);
    else if (u)
      s && !$(n, s) && (o(s), c(s));
    else {
      const p = (h = n.providerFields) == null ? void 0 : h.keyId, r = (v = s == null ? void 0 : s.providerFields) == null ? void 0 : v.keyId;
      p !== r && s && (o(s), c(s));
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
    return { ...n, providerFields: { ...n.providerFields, key: "" } };
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
      const s = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", u = ((d = c.failedStep) == null ? void 0 : d.error) ?? "";
      await t.ui.messageBoxes.show("error", s, u);
      return;
    }
  }
}
const f = {
  ...te,
  NotImported: "NotImported"
}, j = () => {
}, he = V.div`
    color: ${({ theme: t }) => t.colorsTextSecondaryDefault};
    font-size: 10px;
`, fe = ({
  studioPro: t,
  knowledgebase: n,
  setKnowledgebase: o,
  updateStudioProDocument: i
}) => {
  var S;
  const [c, d] = y.useState(), [s, u] = y.useState(!1), [m, h] = y.useState([]), [v, p] = y.useState(null), r = n.providerFields, a = async () => {
    const l = s;
    u(!1), G(t, n).then((C) => {
      C && (o(C), i(C));
    });
    const w = await ye(t, n);
    if (w === void 0) {
      l && u(!0);
      return;
    }
    h(w), u(!0), p(/* @__PURE__ */ new Date());
  }, x = async () => {
    r.key && Q(t, r.key);
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
      const E = F(l);
      o(E), i(E);
    }
  }, I = async () => {
    const l = await pe(t, n);
    l && (o(l), i(l), await g(l));
  };
  y.useEffect(() => {
    (async () => {
      await g(n);
    })();
  }, []);
  const R = (l) => l === f.Required ? "Knowledge base key is required" : l === f.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : l === f.InvalidType ? "Selected constant must be of type string." : l === f.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, T = c === f.EmptyValue || c === f.PrivateValue || c === f.NotImported;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(L, { label: "Resource", children: [
      /* @__PURE__ */ e.jsx(
        de,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((S = r.key) == null ? void 0 : S.qualifiedName) ?? "",
          icon: r.key ? /* @__PURE__ */ e.jsx(Y, {}) : void 0,
          buttonCaption: "Select...",
          onClick: I,
          onClickSecondary: r.key ? x : void 0,
          validate: () => R(c),
          buttonCaptionSecondary: r.key ? "Show" : void 0
        }
      ),
      T && /* @__PURE__ */ e.jsxs(le, { children: [
        /* @__PURE__ */ e.jsx(Z, { children: "Invalid constant value" }),
        /* @__PURE__ */ e.jsx("div", { children: "In order to use your Knowledge base locally please set a valid value for the key constant." })
      ] }),
      !r.key && /* @__PURE__ */ e.jsxs(K, { children: [
        /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(N, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
      ] }),
      r.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: n.name,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: r.modelDisplayName,
            icon: r.modelDisplayName && r.modelDisplayName.toLocaleLowerCase().includes("cohere") ? J : void 0,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: r.modelName,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: r.keyName,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: r.environment,
            onChange: j,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsxs(K, { children: [
          /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
          /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(N, { href: r.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
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
}, ve = z(), xe = ({ studioPro: t, documentId: n }) => {
  const o = t.ui.messageBoxes, i = t.app.model.customBlobDocuments, [c, d] = y.useState(0), [s, u] = y.useState(!1), [m, h] = y.useState(ve), v = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: X }
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
        h({ ...x }), u(!0);
      } else
        throw new Error((a == null ? void 0 : a.error) || "Document not found");
    }).catch(async (a) => {
      await o.show("error", "Error loading document", "Details: " + (a == null ? void 0 : a.message) || a);
    });
  }, [c]);
  const p = async (a) => {
    ue(
      m,
      h,
      A(t, n),
      a
    )();
  }, r = () => m.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(O, { studioPro: t, children: /* @__PURE__ */ e.jsxs(W, { children: [
    !s && /* @__PURE__ */ e.jsx(P, {}),
    s && /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsxs(M, { children: [
      /* @__PURE__ */ e.jsx(L, { label: "Common", children: /* @__PURE__ */ e.jsx(
        se,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: m.provider,
          options: v,
          onSelectionChange: p,
          validate: r
        }
      ) }),
      m.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        fe,
        {
          studioPro: t,
          knowledgebase: m,
          setKnowledgebase: h,
          updateStudioProDocument: A(t, n)
        }
      )
    ] }) })
  ] }) });
}, Ae = U(xe);
export {
  Ae as component
};
//# sourceMappingURL=knowledgebaseEdit.js.map
