import { y as V, r as y, w as e, G as w, D as E, H as j, Q as K, N as W, P as q, O as P, R as U } from "./Icon-DQcqUu4m.js";
import { B as M, c as _, C as $ } from "./TextWithIcon-HMOLBQDk.js";
import { c as z, a as F, b as H, u as A } from "./knowledgebaseUtils-Daq9GrrE.js";
import { g as Q, f as J, h as X, e as Y } from "./modelUtils-Cwt4V4f0.js";
import { C as v, i as Z, B as ee, v as ne, a as te } from "./ButtonWithLabel-BH5RDAq9.js";
import { u as se, y as B } from "./Link-CKghzZdc.js";
import { i as oe } from "./objectUtils-ChZ8y4UX.js";
import { c as N } from "./userPreferences-CMksV11G.js";
import { d as ae, a as re, b as le, g as ie } from "./mxCloudGenAIUtils-BNVHD-dO.js";
import { W as ce } from "./Banner-DqKAGJJD.js";
import { T as de } from "./Table-Bjm3LHGN.js";
import { T as b } from "./TextInputLabeled-Bjq8zKEk.js";
import { T as ue } from "./TextInputWithButton-D4GcKXWs.js";
const me = (n, t, l, i) => async () => {
  if (!(n.provider === i && "key" in n.providerFields) && i === "MxCloudGenAI") {
    const c = z(), d = { ...n, provider: i, providerFields: c };
    t(d), l(d);
  }
}, pe = async (n, t) => {
  const l = N(n), i = await re(n, t);
  if (typeof i == "string") {
    l.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    return;
  }
  return le(
    t,
    i
  );
}, ye = async (n, t, l, i, c) => {
  var p, g;
  const d = N(n);
  let o, h = !1, m = !1;
  try {
    const u = t.providerFields, a = await Q(n, u.key);
    if (!a)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = ae(n, a);
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
    const f = await pe(n, o);
    f && (h = !0, o = f);
  } catch (u) {
    d.error("Error during MxCloud GenAI key import:", u), i(v.InvalidContent);
  } finally {
    if (!m)
      o = F(t), l(o), c(o);
    else if (h)
      o && !oe(t, o) && (l(o), c(o));
    else {
      const u = (p = t.providerFields) == null ? void 0 : p.keyId, a = (g = o == null ? void 0 : o.providerFields) == null ? void 0 : g.keyId;
      u !== a && o && (l(o), c(o));
    }
  }
};
async function he(n, t) {
  const l = await n.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (l.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: l.selected.id,
          qualifiedName: l.selected.module + "." + l.selected.name
        }
      }
    };
  if (l.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function fe(n, t) {
  var d;
  let l = [];
  const i = [
    {
      title: "Getting collections",
      description: "Getting collections",
      action: async () => {
        const o = await ie(n, t)();
        return typeof o == "string" ? o : (l = o, !0);
      }
    }
  ], c = await n.ui.dialogs.showProgressDialog("Getting collections", i);
  switch (c.result) {
    case "Success":
      return l;
    case "UserCancelled":
      return;
    case "Failure": {
      const o = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", h = ((d = c.failedStep) == null ? void 0 : d.error) ?? "";
      await n.ui.messageBoxes.show("error", o, h);
      return;
    }
  }
}
const I = () => {
}, ve = V.div`
    color: ${({ theme: n }) => n.colorsTextSecondaryDefault};
    font-size: 10px;
`, ge = ({
  studioPro: n,
  knowledgebase: t,
  setKnowledgebase: l,
  updateStudioProDocument: i
}) => {
  var k, S;
  const [c, d] = y.useState(), [o, h] = y.useState(!1), [m, p] = y.useState([]), [g, u] = y.useState(null), a = t.providerFields, s = async () => {
    h(!1);
    const r = await fe(n, t);
    if (r === void 0) {
      p([]), u(null);
      return;
    }
    p(r), h(!0), u(/* @__PURE__ */ new Date());
  }, x = async () => {
    a.key && X(n, a.key);
  }, f = async (r) => {
    const O = r.providerFields, L = await ne(n, O.key);
    if (d(L), !L)
      ye(
        n,
        r,
        l,
        d,
        i
      );
    else {
      const D = F(r);
      l(D), i(D);
    }
  }, C = async () => {
    const r = await he(n, t);
    r && (p([]), u(null), l(r), i(r), await f(r));
  }, G = (r) => {
    (a.key && r.includes(a.key.documentId) || r.includes("projectSettings")) && f(t);
  };
  se({
    studioPro: n,
    dependentIds: [(k = a.key) == null ? void 0 : k.documentId].filter((r) => !!r),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: G
  }), y.useEffect(() => {
    f(t);
  }, []);
  const R = (r) => r === v.Required ? "Knowledge base key is required" : r === v.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : r === v.InvalidType ? "Selected constant must be of type string." : r === v.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, T = c === v.EmptyValue || c === v.InvalidContent || c === v.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(w, { label: "Resource", children: [
      /* @__PURE__ */ e.jsx(
        ue,
        {
          label: "Knowledge base key",
          ariaLabel: "Knowledge base key",
          value: ((S = a.key) == null ? void 0 : S.qualifiedName) ?? "",
          icon: a.key ? /* @__PURE__ */ e.jsx(Z, {}) : void 0,
          buttonCaption: "Select...",
          onClick: C,
          onClickSecondary: a.key ? x : void 0,
          validate: () => R(c),
          buttonCaptionSecondary: a.key ? "Show" : void 0
        }
      ),
      T && /* @__PURE__ */ e.jsxs(ce, { children: [
        /* @__PURE__ */ e.jsx(M, { children: "Invalid constant value" }),
        /* @__PURE__ */ e.jsx("div", { children: "In order to use your Knowledge base locally please set a valid value for the key constant." })
      ] }),
      !a.key && /* @__PURE__ */ e.jsxs(E, { children: [
        /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(K, {}) }),
        /* @__PURE__ */ e.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
          B,
          {
            href: "https://genai.home.mendix.com/p/resources",
            target: "_blank",
            rel: "noreferrer,noopener",
            children: "Create a key in the portal"
          }
        ) })
      ] }),
      a.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Resource",
            ariaLabel: "Resource name",
            value: t.name,
            onChange: I,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Embeddings model",
            ariaLabel: "Embeddings model name",
            value: a.modelDisplayName,
            icon: a.modelDisplayName && a.modelDisplayName.toLocaleLowerCase().includes("cohere") ? J : void 0,
            onChange: I,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Embeddings model ID",
            ariaLabel: "Embeddings model ID",
            value: a.modelName,
            onChange: I,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Key",
            ariaLabel: "Key name",
            value: a.keyName,
            onChange: I,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsx(
          b,
          {
            label: "Environment",
            ariaLabel: "Environment",
            value: a.environment,
            onChange: I,
            readOnly: !0
          }
        ),
        /* @__PURE__ */ e.jsxs(E, { children: [
          /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(K, {}) }),
          /* @__PURE__ */ e.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(B, { href: a.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
        ] })
      ] })
    ] }),
    a.keyId && /* @__PURE__ */ e.jsxs(w, { label: "Configured Collections", children: [
      /* @__PURE__ */ e.jsx(ee, { label: "Collections", buttonCaption: "List collections", onPress: s }),
      o && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        g && /* @__PURE__ */ e.jsxs(ve, { children: [
          "Last updated: ",
          g.toLocaleString()
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
            data: m.map((r) => [
              {
                cellContent: r.name,
                tooltipText: r.name
              }
            ])
          }
        )
      ] })
    ] })
  ] });
}, xe = H(), Ce = ({ studioPro: n, documentId: t }) => {
  const l = n.ui.messageBoxes, i = n.app.model.customBlobDocuments, [c, d] = y.useState(0), [o, h] = y.useState(!1), [m, p] = y.useState(xe), g = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Y }
  ];
  y.useEffect(() => {
    const s = (x) => {
      const { documents: f } = x;
      f.some((C) => C.documentId === t) && d((C) => C + 1);
    };
    return i.addEventListener("documentsChanged", s), () => {
      i.removeEventListener("documentsChanged", s);
    };
  }, []), y.useEffect(() => {
    i.getDocumentById(t).then(async (s) => {
      if (s && !("error" in s)) {
        const x = s.document.contents;
        p({ ...x }), h(!0);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await l.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s);
    });
  }, [c]);
  const u = async (s) => {
    me(
      m,
      p,
      A(n, t),
      s
    )();
  }, a = () => m.provider ? !0 : "Knowledge base provider is required.";
  return /* @__PURE__ */ e.jsx(W, { studioPro: n, children: /* @__PURE__ */ e.jsxs(q, { children: [
    !o && /* @__PURE__ */ e.jsx($, {}),
    o && /* @__PURE__ */ e.jsx(P, { children: /* @__PURE__ */ e.jsxs(U, { children: [
      /* @__PURE__ */ e.jsx(w, { label: "Common", children: /* @__PURE__ */ e.jsx(
        te,
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
      m.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        ge,
        {
          studioPro: n,
          knowledgebase: m,
          setKnowledgebase: p,
          updateStudioProDocument: A(n, t)
        }
      )
    ] }) })
  ] }) });
}, Ne = _(Ce);
export {
  Ne as component
};
