import { r as y, R as t, a1 as F, a4 as M, a9 as j, ai as D, ah as O, ae as V, af as K, aj as q } from "./formelements-DgWWXRMR.js";
import { u as W, B as U, c as P, C as _ } from "./TextWithIcon-D9gq9fS9.js";
import { createStudioProLogger as L } from "./logger-Bof2Evv1.js";
import { p as A, q as B, r as X, s as $, t as z, u as H } from "./index-ClN9e0Gp.js";
import { C as u, i as J, B as Q, v as Y, a as Z } from "./ButtonWithLabel-DqyUFLpr.js";
import { y as T, W as ee, S as ne } from "./Banner-Tj4hO43W.js";
import { i as te } from "./objectUtils-ChZ8y4UX.js";
import { d as se, i as ae, u as oe, e as re } from "./mxCloudGenAIUtils-BRWNqsBE.js";
import { T as k } from "./TextInputLabeled-DcUYd1Xh.js";
import { T as ie } from "./TextInputWithButton-H-kPhdc5.js";
const N = (e, n) => async (c) => {
  const a = L(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(n, c);
  } catch (l) {
    a.error("Failed to save model document:", l), await e.ui.notifications.show({
      title: "Failed to save model document.",
      message: l.message
    });
  }
}, G = (e) => {
  const n = e.providerFields;
  return {
    ...B(),
    type: e.type,
    provider: e.provider,
    providerFields: {
      ...A(),
      key: n.key
    }
  };
}, le = (e, n, c, a) => async () => {
  if (!(e.provider === a && "key" in e.providerFields) && a === "MxCloudGenAI") {
    const l = A(), d = { ...e, provider: a, providerFields: l };
    n(d), c(d);
  }
}, ce = async (e, n, c, a, l) => {
  var m, x;
  const d = L(e);
  let o, v = !1, r = !1;
  try {
    const p = n.providerFields, h = await X(e, p.key);
    if (!h)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const s = se(e, h);
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
    o = {
      ...n,
      name: s.model || "",
      displayName: s.model || "",
      type: s.type === "TEXT_GENERATION" ? "Text generation" : s.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...f
      }
    }, r = !0;
    const C = await ae(e, o);
    typeof C != "string" ? (v = !0, o = oe(o, C)) : d.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (p) {
    d.error("Error during MxCloud GenAI key import:", p), c(u.InvalidContent);
  } finally {
    r ? o && ((v ? te(n, o) : ((m = n.providerFields) == null ? void 0 : m.keyId) === ((x = o.providerFields) == null ? void 0 : x.keyId)) || (a(o), l(o))) : (o = G(n), a(o), l(o));
  }
};
async function de(e, n) {
  var l;
  const c = n.providerFields, a = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: (l = c == null ? void 0 : c.key) == null ? void 0 : l.documentId
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
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
async function ue(e, n) {
  var l;
  const c = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => await re(e, n)
    }
  ], a = await e.ui.dialogs.showProgressDialog("Testing connection", c);
  switch (a.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const d = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", o = ((l = a.failedStep) == null ? void 0 : l.error) ?? "";
      return await e.ui.messageBoxes.show("error", d, o), !1;
    }
  }
}
const I = () => {
}, pe = ({ studioPro: e, model: n, setModel: c, updateStudioProDocument: a }) => {
  var w, b;
  const [l, d] = y.useState(!1), [o, v] = y.useState(), r = n.providerFields, m = async () => {
    d(!1);
    const i = await ue(e, n);
    d(i);
  }, x = () => {
    d(!1);
  }, p = async () => {
    r.key && z(e, r.key);
  }, h = async (i) => {
    const R = i.providerFields, E = await Y(e, R.key);
    if (v(E), d(!1), !E)
      ce(e, i, v, c, a);
    else {
      const S = G(i);
      c(S), a(S);
    }
  }, s = async () => {
    const i = await de(e, n);
    i && (c(i), a(i), await h(i));
  }, f = (i) => {
    (r.key && i.includes(r.key.documentId) || i.includes("projectSettings")) && h(n);
  };
  W({
    studioPro: e,
    dependentIds: [(w = r.key) == null ? void 0 : w.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: f
  }), y.useEffect(() => {
    if (l) {
      const i = setTimeout(() => {
        d(!1);
      }, 5e3);
      return () => clearTimeout(i);
    }
  }, [l]), y.useEffect(() => {
    h(n);
  }, []);
  const C = (i) => i === u.Required ? "Model key is required" : i === u.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === u.InvalidType ? "Selected constant must be of type string." : i === u.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, g = o === u.EmptyValue || o === u.InvalidContent || o === u.PrivateValue;
  return /* @__PURE__ */ t.jsxs(F, { label: "Resource", children: [
    /* @__PURE__ */ t.jsx(
      ie,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((b = r.key) == null ? void 0 : b.qualifiedName) ?? "",
        icon: r.key ? /* @__PURE__ */ t.jsx(J, {}) : void 0,
        buttonCaption: "Select...",
        onClick: s,
        onClickSecondary: r.key ? p : void 0,
        validate: () => C(o),
        buttonCaptionSecondary: r.key ? "Show" : void 0
      }
    ),
    !r.key && /* @__PURE__ */ t.jsxs(M, { children: [
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
    g && /* @__PURE__ */ t.jsxs(ee, { children: [
      /* @__PURE__ */ t.jsx(U, { children: o === u.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ t.jsx("div", { children: o === u.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    r.keyId && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: r.resourceName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: r.keyName,
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
          value: r.environment,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsxs(M, { children: [
        /* @__PURE__ */ t.jsx(j, { children: /* @__PURE__ */ t.jsx(D, {}) }),
        /* @__PURE__ */ t.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(T, { href: r.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ t.jsx(Q, { label: "Connection", buttonCaption: "Test", onPress: m }),
      l && /* @__PURE__ */ t.jsx(ne, { onClose: x, children: "Connection successful." })
    ] })
  ] });
}, ye = B(), me = ({ studioPro: e, documentId: n }) => {
  const c = e.ui.messageBoxes, a = e.app.model.customBlobDocuments, [l, d] = y.useState(0), [o, v] = y.useState(!1), [r, m] = y.useState(ye), x = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: H }
  ];
  y.useEffect(() => {
    const s = (f) => {
      const { documents: C } = f;
      C.some((g) => g.documentId === n) && d((g) => g + 1);
    };
    return a.addEventListener("documentsChanged", s), () => {
      a.removeEventListener("documentsChanged", s);
    };
  }, []), y.useEffect(() => {
    a.getDocumentById(n).then(async (s) => {
      if (s && !("error" in s)) {
        const f = s.document.contents;
        m({ ...f }), v(!0);
      } else
        throw new Error((s == null ? void 0 : s.error) || "Document not found");
    }).catch(async (s) => {
      await c.show("error", "Error loading document", "Details: " + (s == null ? void 0 : s.message) || s);
    });
  }, [l]);
  const p = async (s) => {
    le(r, m, N(e, n), s)();
  }, h = () => r.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ t.jsx(O, { studioPro: e, children: /* @__PURE__ */ t.jsxs(V, { children: [
    !o && /* @__PURE__ */ t.jsx(_, {}),
    o && /* @__PURE__ */ t.jsx(K, { children: /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx(F, { label: "Common", children: /* @__PURE__ */ t.jsx(
        Z,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: r.provider,
          options: x,
          onSelectionChange: p,
          validate: h
        }
      ) }),
      r.provider === "MxCloudGenAI" && /* @__PURE__ */ t.jsx(
        pe,
        {
          studioPro: e,
          model: r,
          setModel: m,
          updateStudioProDocument: N(e, n)
        }
      )
    ] }) })
  ] }) });
}, be = P(me);
export {
  be as component
};
