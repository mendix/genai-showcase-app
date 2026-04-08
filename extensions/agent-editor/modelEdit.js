import { r as p, x as t, G as N, F as M, J as j, U as D, P as O, Q as K, R as V, V as q } from "./Icon-Bb5knnP8.js";
import { B as U, c as W, C as _ } from "./TextWithIcon-Dkwixmp-.js";
import { createStudioProLogger as A } from "./logger-Bof2Evv1.js";
import { o as L, p as B, q as P, r as X, s as $, t as J } from "./index-DePCaYQI.js";
import { C as h, i as Q, B as z, v as H, a as Y } from "./ButtonWithLabel-DCsqyHNJ.js";
import { u as Z, y as T } from "./Link-BUNIWopf.js";
import { i as ee } from "./objectUtils-ChZ8y4UX.js";
import { d as ne, i as te, u as se, e as ae } from "./mxCloudGenAIUtils-D3p-BcS-.js";
import { W as oe, S as re } from "./Banner-DsVgoRin.js";
import { T as k } from "./TextInputLabeled-BLG8tCoP.js";
import { T as ie } from "./TextInputWithButton-CMS27jFj.js";
const F = (e, n) => async (i) => {
  const l = A(e);
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
  var y, x;
  const d = A(e);
  let o, f = !1, a = !1;
  try {
    const u = n.providerFields, m = await P(e, u.key);
    if (!m)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = ne(e, m);
    if (s.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${s.type}. Only Text Generation keys are currently supported.`
      );
    const v = {
      key: u.key,
      keyId: s.keyId || "",
      keyName: s.keyName || "",
      resourceName: s.name || "",
      environment: s.environment || "",
      deepLinkURL: s.deepLinkUrl || ""
    };
    o = {
      ...n,
      name: s.model || "",
      displayName: s.model || "",
      type: s.type === "TEXT_GENERATION" ? "Text generation" : s.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...v
      }
    }, a = !0;
    const C = await te(e, o);
    typeof C != "string" ? (f = !0, o = se(o, C)) : d.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (u) {
    d.error("Error during MxCloud GenAI key import:", u), i(h.InvalidContent);
  } finally {
    a ? o && ((f ? ee(n, o) : ((y = n.providerFields) == null ? void 0 : y.keyId) === ((x = o.providerFields) == null ? void 0 : x.keyId)) || (l(o), c(o))) : (o = G(n), l(o), c(o));
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
      const d = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", o = ((c = l.failedStep) == null ? void 0 : c.error) ?? "";
      return await e.ui.messageBoxes.show("error", d, o), !1;
    }
  }
}
const I = () => {
}, pe = ({ studioPro: e, model: n, setModel: i, updateStudioProDocument: l }) => {
  var w, b;
  const [c, d] = p.useState(!1), [o, f] = p.useState(), a = n.providerFields, y = async () => {
    d(!1);
    const r = await ue(e, n);
    d(r);
  }, x = () => {
    d(!1);
  }, u = async () => {
    a.key && $(e, a.key);
  }, m = async (r) => {
    const R = r.providerFields, E = await H(e, R.key);
    if (f(E), d(!1), !E)
      ce(e, r, f, i, l);
    else {
      const S = G(r);
      i(S), l(S);
    }
  }, s = async () => {
    const r = await de(e, n);
    r && (i(r), l(r), await m(r));
  }, v = (r) => {
    (a.key && r.includes(a.key.documentId) || r.includes("projectSettings")) && m(n);
  };
  Z({
    studioPro: e,
    dependentIds: [(w = a.key) == null ? void 0 : w.documentId].filter((r) => !!r),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: v
  }), p.useEffect(() => {
    if (c) {
      const r = setTimeout(() => {
        d(!1);
      }, 5e3);
      return () => clearTimeout(r);
    }
  }, [c]), p.useEffect(() => {
    m(n);
  }, []);
  const C = (r) => r === h.Required ? "Model key is required" : r === h.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : r === h.InvalidType ? "Selected constant must be of type string." : r === h.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, g = o === h.EmptyValue || o === h.InvalidContent || o === h.PrivateValue;
  return /* @__PURE__ */ t.jsxs(N, { label: "Resource", children: [
    /* @__PURE__ */ t.jsx(
      ie,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((b = a.key) == null ? void 0 : b.qualifiedName) ?? "",
        icon: a.key ? /* @__PURE__ */ t.jsx(Q, {}) : void 0,
        buttonCaption: "Select...",
        onClick: s,
        onClickSecondary: a.key ? u : void 0,
        validate: () => C(o),
        buttonCaptionSecondary: a.key ? "Show" : void 0
      }
    ),
    !a.key && /* @__PURE__ */ t.jsxs(M, { children: [
      /* @__PURE__ */ t.jsx(j, { children: /* @__PURE__ */ t.jsx(D, {}) }),
      /* @__PURE__ */ t.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
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
      /* @__PURE__ */ t.jsx(U, { children: "Invalid constant value" }),
      /* @__PURE__ */ t.jsx("div", { children: "In order to test your Model locally please set a valid value for the key constant." })
    ] }),
    a.keyId && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: a.resourceName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: a.keyName,
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
          icon: n.displayName && n.displayName.toLocaleLowerCase().includes("anthropic") ? X : void 0,
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
          value: a.environment,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsxs(M, { children: [
        /* @__PURE__ */ t.jsx(j, { children: /* @__PURE__ */ t.jsx(D, {}) }),
        /* @__PURE__ */ t.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(T, { href: a.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ t.jsx(z, { label: "Connection", buttonCaption: "Test", onPress: y }),
      c && /* @__PURE__ */ t.jsx(re, { onClose: x, children: "Connection successful." })
    ] })
  ] });
}, ye = B(), me = ({ studioPro: e, documentId: n }) => {
  const i = e.ui.messageBoxes, l = e.app.model.customBlobDocuments, [c, d] = p.useState(0), [o, f] = p.useState(!1), [a, y] = p.useState(ye), x = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: J }
  ];
  p.useEffect(() => {
    const s = (v) => {
      const { documents: C } = v;
      C.some((g) => g.documentId === n) && d((g) => g + 1);
    };
    return l.addEventListener("documentsChanged", s), () => {
      l.removeEventListener("documentsChanged", s);
    };
  }, []), p.useEffect(() => {
    l.getDocumentById(n).then(async (s) => {
      if (s && !("error" in s)) {
        const v = s.document.contents;
        y({ ...v }), f(!0);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await i.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s);
    });
  }, [c]);
  const u = async (s) => {
    le(a, y, F(e, n), s)();
  }, m = () => a.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ t.jsx(O, { studioPro: e, children: /* @__PURE__ */ t.jsxs(K, { children: [
    !o && /* @__PURE__ */ t.jsx(_, {}),
    o && /* @__PURE__ */ t.jsx(V, { children: /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx(N, { label: "Common", children: /* @__PURE__ */ t.jsx(
        Y,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: a.provider,
          options: x,
          onSelectionChange: u,
          validate: m
        }
      ) }),
      a.provider === "MxCloudGenAI" && /* @__PURE__ */ t.jsx(
        pe,
        {
          studioPro: e,
          model: a,
          setModel: y,
          updateStudioProDocument: F(e, n)
        }
      )
    ] }) })
  ] }) });
}, Ee = W(me);
export {
  Ee as component
};
