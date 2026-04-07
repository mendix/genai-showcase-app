import { r as p, w as e, G as A, D as M, H as j, Q as D, N as F, P as G, O as R, R as O } from "./Icon-DQcqUu4m.js";
import { B as K, c as V, C as W } from "./TextWithIcon-HMOLBQDk.js";
import { c as q, g as U, a as L, b as P, h as _, d as X, e as $, u as N } from "./modelUtils-Cwt4V4f0.js";
import { C as f, i as H, B as Q, v as z, a as J } from "./ButtonWithLabel-BH5RDAq9.js";
import { u as Y, y as T } from "./Link-CKghzZdc.js";
import { i as Z } from "./objectUtils-ChZ8y4UX.js";
import { c as ee } from "./userPreferences-CMksV11G.js";
import { d as ne, i as te, u as se, e as ae } from "./mxCloudGenAIUtils-BNVHD-dO.js";
import { W as oe, S as re } from "./Banner-DqKAGJJD.js";
import { T as k } from "./TextInputLabeled-Bjq8zKEk.js";
import { T as ie } from "./TextInputWithButton-D4GcKXWs.js";
const le = (s, t, i, l) => async () => {
  if (!(s.provider === l && "key" in s.providerFields) && l === "MxCloudGenAI") {
    const d = q(), c = { ...s, provider: l, providerFields: d };
    t(c), i(c);
  }
}, ce = async (s, t, i, l, d) => {
  var y, x;
  const c = ee(s);
  let o, m = !1, a = !1;
  try {
    const u = t.providerFields, h = await U(s, u.key);
    if (!h)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const n = ne(s, h);
    if (n.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${n.type}. Only Text Generation keys are currently supported.`
      );
    const v = {
      key: u.key,
      keyId: n.keyId || "",
      keyName: n.keyName || "",
      resourceName: n.name || "",
      environment: n.environment || "",
      deepLinkURL: n.deepLinkUrl || ""
    };
    o = {
      ...t,
      name: n.model || "",
      displayName: n.model || "",
      type: n.type === "TEXT_GENERATION" ? "Text generation" : n.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...v
      }
    }, a = !0;
    const C = await te(s, o);
    typeof C != "string" ? (m = !0, o = se(o, C)) : c.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (u) {
    c.error("Error during MxCloud GenAI key import:", u), i(f.InvalidContent);
  } finally {
    a ? o && ((m ? Z(t, o) : ((y = t.providerFields) == null ? void 0 : y.keyId) === ((x = o.providerFields) == null ? void 0 : x.keyId)) || (l(o), d(o))) : (o = L(t), l(o), d(o));
  }
};
async function de(s, t) {
  const i = await s.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (i.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: i.selected.id,
          qualifiedName: i.selected.module + "." + i.selected.name
        }
      }
    };
  if (i.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function ue(s, t) {
  var d;
  const i = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => await ae(s, t)
    }
  ], l = await s.ui.dialogs.showProgressDialog("Testing connection", i);
  switch (l.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const c = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", o = ((d = l.failedStep) == null ? void 0 : d.error) ?? "";
      return await s.ui.messageBoxes.show("error", c, o), !1;
    }
  }
}
const I = () => {
}, pe = ({ studioPro: s, model: t, setModel: i, updateStudioProDocument: l }) => {
  var b, w;
  const [d, c] = p.useState(!1), [o, m] = p.useState(), a = t.providerFields, y = async () => {
    c(!1);
    const r = await ue(s, t);
    c(r);
  }, x = () => {
    c(!1);
  }, u = async () => {
    a.key && _(s, a.key);
  }, h = async (r) => {
    const B = r.providerFields, E = await z(s, B.key);
    if (m(E), c(!1), !E)
      ce(s, r, m, i, l);
    else {
      const S = L(r);
      i(S), l(S);
    }
  }, n = async () => {
    const r = await de(s, t);
    r && (i(r), l(r), await h(r));
  }, v = (r) => {
    (a.key && r.includes(a.key.documentId) || r.includes("projectSettings")) && h(t);
  };
  Y({
    studioPro: s,
    dependentIds: [(b = a.key) == null ? void 0 : b.documentId].filter((r) => !!r),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: v
  }), p.useEffect(() => {
    if (d) {
      const r = setTimeout(() => {
        c(!1);
      }, 5e3);
      return () => clearTimeout(r);
    }
  }, [d]), p.useEffect(() => {
    h(t);
  }, []);
  const C = (r) => r === f.Required ? "Model key is required" : r === f.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : r === f.InvalidType ? "Selected constant must be of type string." : r === f.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, g = o === f.EmptyValue || o === f.InvalidContent || o === f.PrivateValue;
  return /* @__PURE__ */ e.jsxs(A, { label: "Resource", children: [
    /* @__PURE__ */ e.jsx(
      ie,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((w = a.key) == null ? void 0 : w.qualifiedName) ?? "",
        icon: a.key ? /* @__PURE__ */ e.jsx(H, {}) : void 0,
        buttonCaption: "Select...",
        onClick: n,
        onClickSecondary: a.key ? u : void 0,
        validate: () => C(o),
        buttonCaptionSecondary: a.key ? "Show" : void 0
      }
    ),
    !a.key && /* @__PURE__ */ e.jsxs(M, { children: [
      /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(D, {}) }),
      /* @__PURE__ */ e.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        T,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    g && /* @__PURE__ */ e.jsxs(oe, { children: [
      /* @__PURE__ */ e.jsx(K, { children: "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: "In order to test your Model locally please set a valid value for the key constant." })
    ] }),
    a.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        k,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: a.resourceName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        k,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: a.keyName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        k,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: t.displayName,
          icon: t.displayName && t.displayName.toLocaleLowerCase().includes("anthropic") ? P : void 0,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        k,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: t.name,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        k,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: a.environment,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(M, { children: [
        /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(T, { href: a.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx(Q, { label: "Connection", buttonCaption: "Test", onPress: y }),
      d && /* @__PURE__ */ e.jsx(re, { onClose: x, children: "Connection successful." })
    ] })
  ] });
}, ye = X(), he = ({ studioPro: s, documentId: t }) => {
  const i = s.ui.messageBoxes, l = s.app.model.customBlobDocuments, [d, c] = p.useState(0), [o, m] = p.useState(!1), [a, y] = p.useState(ye), x = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: $ }
  ];
  p.useEffect(() => {
    const n = (v) => {
      const { documents: C } = v;
      C.some((g) => g.documentId === t) && c((g) => g + 1);
    };
    return l.addEventListener("documentsChanged", n), () => {
      l.removeEventListener("documentsChanged", n);
    };
  }, []), p.useEffect(() => {
    l.getDocumentById(t).then(async (n) => {
      if (n && !("error" in n)) {
        const v = n.document.contents;
        y({ ...v }), m(!0);
      } else
        throw new Error((n == null ? void 0 : n.error) || "Document not found");
    }).catch(async (n) => {
      await i.show("error", "Error loading document", "Details: " + (n == null ? void 0 : n.message) || n);
    });
  }, [d]);
  const u = async (n) => {
    le(a, y, N(s, t), n)();
  }, h = () => a.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(F, { studioPro: s, children: /* @__PURE__ */ e.jsxs(G, { children: [
    !o && /* @__PURE__ */ e.jsx(W, {}),
    o && /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsxs(O, { children: [
      /* @__PURE__ */ e.jsx(A, { label: "Common", children: /* @__PURE__ */ e.jsx(
        J,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: a.provider,
          options: x,
          onSelectionChange: u,
          validate: h
        }
      ) }),
      a.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        pe,
        {
          studioPro: s,
          model: a,
          setModel: y,
          updateStudioProDocument: N(s, t)
        }
      )
    ] }) })
  ] }) });
}, Ee = V(he);
export {
  Ee as component
};
