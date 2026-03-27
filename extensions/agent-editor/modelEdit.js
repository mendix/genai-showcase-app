import { r as y, w as n, G as L, F as N, H as I, S, D as F, P as G, E as B, I as R } from "./Icon-DlQJfq7F.js";
import { c as K, C as O } from "./TextWithIcon-sxhIisHZ.js";
import { c as V, g as W, a as D, b as q, h as U, d as _, e as P, u as M } from "./modelUtils-B5ix1w9q.js";
import { i as X, B as $, a as H, v as A, C as z, b as J } from "./text-DTX5J9MZ.js";
import { d as Q, i as Y, u as Z, e as ee, y as T } from "./mxCloudGenAIUtils-iBbCTKa9.js";
import { c as ne } from "./DesignSystemTokens-BZrmEyPo.js";
import { W as te, S as ae } from "./Banner-BKPTdROG.js";
import { T as g } from "./TextInputLabeled-CEPunJWI.js";
import { T as se } from "./TextInputWithButton-DdFsQTz_.js";
const oe = (t, a, s, c) => async () => {
  if (!(t.provider === c && "key" in t.providerFields) && c === "MxCloudGenAI") {
    const u = V(), l = { ...t, provider: c, providerFields: u };
    a(l), s(l);
  }
}, re = async (t, a, s, c, u) => {
  const l = ne(t);
  try {
    const d = a.providerFields, r = await W(t, d.key);
    if (!r)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const e = Q(t, r);
    if (e.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${e.type}. Only Text Generation keys are currently supported.`
      );
    const p = {
      key: d.key,
      keyId: e.keyId || "",
      keyName: e.keyName || "",
      resourceName: e.name || "",
      environment: e.environment || "",
      deepLinkURL: e.deepLinkUrl || ""
    }, h = {
      ...a,
      name: e.model || "",
      displayName: e.model || "",
      type: e.type === "TEXT_GENERATION" ? "Text generation" : e.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...p
      }
    };
    s(h), u(h);
    const f = await Y(t, h);
    if (typeof f != "string") {
      const v = Z(h, f);
      s(v), u(v).catch(
        (o) => l.error("Failed to update model document after API response:", o)
      );
    } else
      l.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (d) {
    l.error("Error during MxCloud GenAI key import:", d);
    const r = "Failed to import MxCloud GenAI model key.", e = String(d), p = D(a);
    await t.ui.messageBoxes.show("error", r, e), s(p), u(p), c(m.NotImported);
  }
};
async function ie(t, a) {
  const s = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (s.status === "ok")
    return {
      ...a,
      providerFields: {
        ...a.providerFields,
        key: {
          documentId: s.selected.id,
          qualifiedName: s.selected.module + "." + s.selected.name
        }
      }
    };
  if (s.status === "none")
    return { ...a, providerFields: { ...a.providerFields, key: void 0 } };
}
async function le(t, a, s, c) {
  var d;
  const u = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => {
        const r = await ee(t, a)();
        return typeof r == "string" ? r : ((r.displayName !== a.displayName || r.name !== a.name) && (s(r), c(r)), !0);
      }
    }
  ], l = await t.ui.dialogs.showProgressDialog("Testing connection", u);
  switch (l.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const r = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", e = ((d = l.failedStep) == null ? void 0 : d.error) ?? "";
      return await t.ui.messageBoxes.show("error", r, e), !1;
    }
  }
}
const m = {
  ...z,
  NotImported: "NotImported"
}, k = () => {
}, ce = ({ studioPro: t, model: a, setModel: s, updateStudioProDocument: c }) => {
  var x;
  const [u, l] = y.useState(!1), [d, r] = y.useState(), e = a.providerFields, p = async () => {
    l(!1);
    const i = await le(t, a, s, c);
    l(i);
  }, h = () => {
    l(!1);
  }, f = async () => {
    e.key && U(t, e.key);
  }, v = async (i) => {
    const b = i.providerFields, E = await A(t, b.key);
    if (r(E), l(!1), !E)
      re(t, i, s, r, c);
    else {
      const j = D(i);
      s(j), c(j);
    }
  }, o = async () => {
    const i = await ie(t, a);
    i && (s(i), c(i), await v(i));
  };
  y.useEffect(() => {
    if (u) {
      const i = setTimeout(() => {
        l(!1);
      }, 5e3);
      return () => clearTimeout(i);
    }
  }, [u]), y.useEffect(() => {
    (async () => {
      const b = await A(t, e.key);
      r(b);
    })();
  }, []);
  const C = (i) => i === m.Required ? "Model key is required" : i === m.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === m.InvalidType ? "Selected constant must be of type string." : i === m.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, w = d === m.EmptyValue || d === m.PrivateValue || d === m.NotImported;
  return /* @__PURE__ */ n.jsxs(L, { label: "Resource", children: [
    /* @__PURE__ */ n.jsx(
      se,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((x = e.key) == null ? void 0 : x.qualifiedName) ?? "",
        icon: e.key ? /* @__PURE__ */ n.jsx(X, {}) : void 0,
        buttonCaption: "Select...",
        onClick: o,
        onClickSecondary: e.key ? f : void 0,
        validate: () => C(d),
        buttonCaptionSecondary: e.key ? "Show" : void 0
      }
    ),
    !e.key && /* @__PURE__ */ n.jsxs(N, { children: [
      /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(S, {}) }),
      /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(T, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    w && /* @__PURE__ */ n.jsxs(te, { children: [
      /* @__PURE__ */ n.jsx($, { children: "Invalid constant value" }),
      /* @__PURE__ */ n.jsx("div", { children: "In order to test your Model locally please set a valid value for the key constant." })
    ] }),
    e.keyId && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        g,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: e.resourceName,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        g,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: e.keyName,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        g,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: a.displayName,
          icon: a.displayName && a.displayName.toLocaleLowerCase().includes("anthropic") ? q : void 0,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        g,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: a.name,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        g,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: e.environment,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsxs(N, { children: [
        /* @__PURE__ */ n.jsx(I, { children: /* @__PURE__ */ n.jsx(S, {}) }),
        /* @__PURE__ */ n.jsx(I, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(T, { href: e.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ n.jsx(H, { label: "Connection", buttonCaption: "Test", onPress: p }),
      u && /* @__PURE__ */ n.jsx(ae, { onClose: h, children: "Connection successful." })
    ] })
  ] });
}, de = _(), ue = ({ studioPro: t, documentId: a }) => {
  const s = t.ui.messageBoxes, c = t.app.model.customBlobDocuments, [u, l] = y.useState(0), [d, r] = y.useState(!1), [e, p] = y.useState(de), h = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: P }
  ];
  y.useEffect(() => {
    const o = (C) => {
      const { documents: w } = C;
      w.some((x) => x.documentId === a) && l((x) => x + 1);
    };
    return c.addEventListener("documentsChanged", o), () => {
      c.removeEventListener("documentsChanged", o);
    };
  }, []), y.useEffect(() => {
    c.getDocumentById(a).then(async (o) => {
      if (o && !("error" in o)) {
        const C = o.document.contents;
        p({ ...C }), r(!0);
      } else
        throw new Error((o == null ? void 0 : o.error) || "Document not found");
    }).catch(async (o) => {
      await s.show("error", "Error loading document", "Details: " + (o == null ? void 0 : o.message) || o);
    });
  }, [u]);
  const f = async (o) => {
    oe(e, p, M(t, a), o)();
  }, v = () => e.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ n.jsx(F, { studioPro: t, children: /* @__PURE__ */ n.jsxs(G, { children: [
    !d && /* @__PURE__ */ n.jsx(O, {}),
    d && /* @__PURE__ */ n.jsx(B, { children: /* @__PURE__ */ n.jsxs(R, { children: [
      /* @__PURE__ */ n.jsx(L, { label: "Common", children: /* @__PURE__ */ n.jsx(
        J,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: e.provider,
          options: h,
          onSelectionChange: f,
          validate: v
        }
      ) }),
      e.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        ce,
        {
          studioPro: t,
          model: e,
          setModel: p,
          updateStudioProDocument: M(t, a)
        }
      )
    ] }) })
  ] }) });
}, ke = K(ue);
export {
  ke as component
};
//# sourceMappingURL=modelEdit.js.map
