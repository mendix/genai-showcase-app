import { r as y, H as t, P as A, V as M, Y as w, a7 as D, a4 as O, a5 as V, a6 as K, a8 as q } from "./Icon-UiLWY9J1.js";
import { u as W, B as P, c as U, C as _ } from "./TextWithIcon-DQRgkfUK.js";
import { createStudioProLogger as F } from "./logger-Bof2Evv1.js";
import { n as L, o as B, p as X, q as $, r as H, s as Y } from "./index-CcjggGcx.js";
import { C as u, i as z, B as J, v as Q, a as Z } from "./ButtonWithLabel-DB7bx4T0.js";
import { y as T } from "./Link-DFGqRVqk.js";
import { i as ee } from "./objectUtils-ChZ8y4UX.js";
import { d as ne, i as te, u as se, e as ae } from "./mxCloudGenAIUtils-jbsl4kfx.js";
import { W as oe, S as re } from "./Banner-87Geup2v.js";
import { T as k } from "./TextInputLabeled-BOV58C6a.js";
import { T as ie } from "./TextInputWithButton-DEzJuJjn.js";
const N = (e, n) => async (i) => {
  const l = F(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(n, i);
  } catch (c) {
    l.error("Failed to save model document:", c), await e.ui.notifications.show({
      title: "Failed to save model document.",
      message: c.message
    });
  }
}, G = (e) => {
  const n = e.providerFields;
  return {
    ...B(),
    type: e.type,
    provider: e.provider,
    providerFields: {
      ...L(),
      key: n.key
    }
  };
}, le = (e, n, i, l) => async () => {
  if (!(e.provider === l && "key" in e.providerFields) && l === "MxCloudGenAI") {
    const c = L(), d = { ...e, provider: l, providerFields: c };
    n(d), i(d);
  }
}, ce = async (e, n, i, l, c) => {
  var m, x;
  const d = F(e);
  let a, v = !1, o = !1;
  try {
    const p = n.providerFields, h = await X(e, p.key);
    if (!h)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = ne(e, h);
    if (s.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${s.type}. Only Text Generation keys are currently supported.`
      );
    const f = {
      key: p.key,
      keyId: s.keyId || "",
      keyName: s.keyName || "",
      resourceName: s.name || "",
      environment: s.environment || "",
      deepLinkURL: s.deepLinkUrl || ""
    };
    a = {
      ...n,
      name: s.model || "",
      displayName: s.model || "",
      type: s.type === "TEXT_GENERATION" ? "Text generation" : s.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...f
      }
    }, o = !0;
    const C = await te(e, a);
    typeof C != "string" ? (v = !0, a = se(a, C)) : d.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (p) {
    d.error("Error during MxCloud GenAI key import:", p), i(u.InvalidContent);
  } finally {
    o ? a && ((v ? ee(n, a) : ((m = n.providerFields) == null ? void 0 : m.keyId) === ((x = a.providerFields) == null ? void 0 : x.keyId)) || (l(a), c(a))) : (a = G(n), l(a), c(a));
  }
};
async function de(e, n) {
  const i = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (i.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: i.selected.id,
          qualifiedName: i.selected.module + "." + i.selected.name
        }
      }
    };
  if (i.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
async function ue(e, n) {
  var c;
  const i = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => await ae(e, n)
    }
  ], l = await e.ui.dialogs.showProgressDialog("Testing connection", i);
  switch (l.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const d = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", a = ((c = l.failedStep) == null ? void 0 : c.error) ?? "";
      return await e.ui.messageBoxes.show("error", d, a), !1;
    }
  }
}
const I = () => {
}, pe = ({ studioPro: e, model: n, setModel: i, updateStudioProDocument: l }) => {
  var j, b;
  const [c, d] = y.useState(!1), [a, v] = y.useState(), o = n.providerFields, m = async () => {
    d(!1);
    const r = await ue(e, n);
    d(r);
  }, x = () => {
    d(!1);
  }, p = async () => {
    o.key && H(e, o.key);
  }, h = async (r) => {
    const R = r.providerFields, E = await Q(e, R.key);
    if (v(E), d(!1), !E)
      ce(e, r, v, i, l);
    else {
      const S = G(r);
      i(S), l(S);
    }
  }, s = async () => {
    const r = await de(e, n);
    r && (i(r), l(r), await h(r));
  }, f = (r) => {
    (o.key && r.includes(o.key.documentId) || r.includes("projectSettings")) && h(n);
  };
  W({
    studioPro: e,
    dependentIds: [(j = o.key) == null ? void 0 : j.documentId].filter((r) => !!r),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: f
  }), y.useEffect(() => {
    if (c) {
      const r = setTimeout(() => {
        d(!1);
      }, 5e3);
      return () => clearTimeout(r);
    }
  }, [c]), y.useEffect(() => {
    h(n);
  }, []);
  const C = (r) => r === u.Required ? "Model key is required" : r === u.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : r === u.InvalidType ? "Selected constant must be of type string." : r === u.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, g = a === u.EmptyValue || a === u.InvalidContent || a === u.PrivateValue;
  return /* @__PURE__ */ t.jsxs(A, { label: "Resource", children: [
    /* @__PURE__ */ t.jsx(
      ie,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((b = o.key) == null ? void 0 : b.qualifiedName) ?? "",
        icon: o.key ? /* @__PURE__ */ t.jsx(z, {}) : void 0,
        buttonCaption: "Select...",
        onClick: s,
        onClickSecondary: o.key ? p : void 0,
        validate: () => C(a),
        buttonCaptionSecondary: o.key ? "Show" : void 0
      }
    ),
    !o.key && /* @__PURE__ */ t.jsxs(M, { children: [
      /* @__PURE__ */ t.jsx(w, { children: /* @__PURE__ */ t.jsx(D, {}) }),
      /* @__PURE__ */ t.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
        T,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    g && /* @__PURE__ */ t.jsxs(oe, { children: [
      /* @__PURE__ */ t.jsx(P, { children: a === u.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ t.jsx("div", { children: a === u.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    o.keyId && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: o.resourceName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: o.keyName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: n.displayName,
          icon: n.displayName && n.displayName.toLocaleLowerCase().includes("anthropic") ? $ : void 0,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: n.name,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: o.environment,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsxs(M, { children: [
        /* @__PURE__ */ t.jsx(w, { children: /* @__PURE__ */ t.jsx(D, {}) }),
        /* @__PURE__ */ t.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(T, { href: o.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ t.jsx(J, { label: "Connection", buttonCaption: "Test", onPress: m }),
      c && /* @__PURE__ */ t.jsx(re, { onClose: x, children: "Connection successful." })
    ] })
  ] });
}, ye = B(), me = ({ studioPro: e, documentId: n }) => {
  const i = e.ui.messageBoxes, l = e.app.model.customBlobDocuments, [c, d] = y.useState(0), [a, v] = y.useState(!1), [o, m] = y.useState(ye), x = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Y }
  ];
  y.useEffect(() => {
    const s = (f) => {
      const { documents: C } = f;
      C.some((g) => g.documentId === n) && d((g) => g + 1);
    };
    return l.addEventListener("documentsChanged", s), () => {
      l.removeEventListener("documentsChanged", s);
    };
  }, []), y.useEffect(() => {
    l.getDocumentById(n).then(async (s) => {
      if (s && !("error" in s)) {
        const f = s.document.contents;
        m({ ...f }), v(!0);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await i.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s);
    });
  }, [c]);
  const p = async (s) => {
    le(o, m, N(e, n), s)();
  }, h = () => o.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ t.jsx(O, { studioPro: e, children: /* @__PURE__ */ t.jsxs(V, { children: [
    !a && /* @__PURE__ */ t.jsx(_, {}),
    a && /* @__PURE__ */ t.jsx(K, { children: /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx(A, { label: "Common", children: /* @__PURE__ */ t.jsx(
        Z,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: o.provider,
          options: x,
          onSelectionChange: p,
          validate: h
        }
      ) }),
      o.provider === "MxCloudGenAI" && /* @__PURE__ */ t.jsx(
        pe,
        {
          studioPro: e,
          model: o,
          setModel: m,
          updateStudioProDocument: N(e, n)
        }
      )
    ] }) })
  ] }) });
}, Ee = U(me);
export {
  Ee as component
};
