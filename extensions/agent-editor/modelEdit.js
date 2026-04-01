import { r as p, w as a, G as L, D as T, C as w, Q as A, N as V, P as R, O as U, R as W } from "./Icon-B4HLWuEl.js";
import { c as q, C as $ } from "./componentLoader-Cm3EOwGz.js";
import { c as P, g as B, a as G, b as _, h as J, d as X, e as H, u as M } from "./modelUtils-DbaOd0FB.js";
import { i as Q, B as z, v as S, C as Y, a as Z } from "./ButtonWithLabel-nMb1wq7r.js";
import { y as D } from "./Link-DWBff6VF.js";
import { c as b } from "./userPreferences-BV8i5uIO.js";
import { W as ee, S as te } from "./Banner-BV6cAcTN.js";
import { T as C } from "./TextInputLabeled-C3EIPSRL.js";
import { T as ne } from "./TextInputWithButton-DOgzsqom.js";
import { B as ae } from "./TextWithIcon-BAbfKU6H.js";
const oe = (e, t, o, r) => async () => {
  if (!(e.provider === r && "key" in e.providerFields) && r === "MxCloudGenAI") {
    const u = P(), i = { ...e, provider: r, providerFields: u };
    t(i), o(i);
  }
}, F = (e, t) => {
  const o = b(e);
  try {
    const r = atob(t);
    return JSON.parse(r);
  } catch (r) {
    throw o.error("Error decoding and parsing key", r), new Error("The key could not be parsed, make sure it is valid.");
  }
}, O = async (e, t) => {
  const o = b(e);
  try {
    const r = t.providerFields;
    if (!r.key)
      throw new Error("Model key is not configured.");
    const u = await B(e, r.key);
    if (!u)
      throw new Error(
        `Constant ${r.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const i = F(e, u), c = await e.network.httpProxy.getProxyUrl(`${i.resourceBaseUrl}`), s = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": i.accessToken
      },
      credentials: "omit"
    });
    if (s.status !== 200)
      throw new Error(`HTTP ${s.status}: ${s.statusText}`);
    return await s.json();
  } catch (r) {
    return o.error("Error invoking MxCloud GenAI resource API:", r), r instanceof Error ? r.message : "";
  }
}, K = (e, t) => ({
  ...e,
  name: (t == null ? void 0 : t.model) || e.name,
  displayName: t && (t.modelName || t.model) || e.displayName
}), re = (e, t) => async () => {
  const o = await O(e, t);
  return typeof o == "string" ? o : K(t, o);
}, se = async (e, t, o, r, u) => {
  const i = b(e);
  try {
    const c = t.providerFields, s = await B(e, c.key);
    if (!s)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const n = F(e, s);
    if (n.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${n.type}. Only Text Generation keys are currently supported.`
      );
    const y = {
      key: c.key,
      keyId: n.keyId || "",
      keyName: n.keyName || "",
      resourceName: n.name || "",
      environment: n.environment || "",
      deepLinkURL: n.deepLinkUrl || ""
    }, m = {
      ...t,
      name: n.model || "",
      displayName: n.model || "",
      type: n.type === "TEXT_GENERATION" ? "Text generation" : n.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...y
      }
    };
    o(m), u(m);
    const f = await O(e, m);
    if (typeof f != "string") {
      const v = K(m, f);
      o(v), u(v).catch(
        (l) => i.error("Failed to update model document after API response:", l)
      );
    } else
      i.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (c) {
    i.error("Error during MxCloud GenAI key import:", c);
    const s = "Failed to import MxCloud GenAI model key.", n = String(c), y = G(t);
    await e.ui.messageBoxes.show("error", s, n), o(y), u(y), r(h.NotImported);
  }
};
async function ie(e, t) {
  const o = await e.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (o.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function le(e, t, o, r) {
  var c;
  const u = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => {
        const s = await re(e, t)();
        return typeof s == "string" ? s : ((s.displayName !== t.displayName || s.name !== t.name) && (o(s), r(s)), !0);
      }
    }
  ], i = await e.ui.dialogs.showProgressDialog("Testing connection", u);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const s = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", n = ((c = i.failedStep) == null ? void 0 : c.error) ?? "";
      return await e.ui.messageBoxes.show("error", s, n), !1;
    }
  }
}
const h = {
  ...Y,
  NotImported: "NotImported"
}, k = () => {
}, ce = ({ studioPro: e, model: t, setModel: o, updateStudioProDocument: r }) => {
  var x;
  const [u, i] = p.useState(!1), [c, s] = p.useState(), n = t.providerFields, y = async () => {
    i(!1);
    const d = await le(e, t, o, r);
    i(d);
  }, m = () => {
    i(!1);
  }, f = async () => {
    n.key && J(e, n.key);
  }, v = async (d) => {
    const E = d.providerFields, N = await S(e, E.key);
    if (s(N), i(!1), !N)
      se(e, d, o, s, r);
    else {
      const j = G(d);
      o(j), r(j);
    }
  }, l = async () => {
    const d = await ie(e, t);
    d && (o(d), r(d), await v(d));
  };
  p.useEffect(() => {
    if (u) {
      const d = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(d);
    }
  }, [u]), p.useEffect(() => {
    (async () => {
      const E = await S(e, n.key);
      s(E);
    })();
  }, []);
  const g = (d) => d === h.Required ? "Model key is required" : d === h.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : d === h.InvalidType ? "Selected constant must be of type string." : d === h.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, I = c === h.EmptyValue || c === h.PrivateValue || c === h.NotImported;
  return /* @__PURE__ */ a.jsxs(L, { label: "Resource", children: [
    /* @__PURE__ */ a.jsx(
      ne,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((x = n.key) == null ? void 0 : x.qualifiedName) ?? "",
        icon: n.key ? /* @__PURE__ */ a.jsx(Q, {}) : void 0,
        buttonCaption: "Select...",
        onClick: l,
        onClickSecondary: n.key ? f : void 0,
        validate: () => g(c),
        buttonCaptionSecondary: n.key ? "Show" : void 0
      }
    ),
    !n.key && /* @__PURE__ */ a.jsxs(T, { children: [
      /* @__PURE__ */ a.jsx(w, { children: /* @__PURE__ */ a.jsx(A, {}) }),
      /* @__PURE__ */ a.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(D, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    I && /* @__PURE__ */ a.jsxs(ee, { children: [
      /* @__PURE__ */ a.jsx(ae, { children: "Invalid constant value" }),
      /* @__PURE__ */ a.jsx("div", { children: "In order to test your Model locally please set a valid value for the key constant." })
    ] }),
    n.keyId && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        C,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: n.resourceName,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        C,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: n.keyName,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        C,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: t.displayName,
          icon: t.displayName && t.displayName.toLocaleLowerCase().includes("anthropic") ? _ : void 0,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        C,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: t.name,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        C,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: n.environment,
          onChange: k,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsxs(T, { children: [
        /* @__PURE__ */ a.jsx(w, { children: /* @__PURE__ */ a.jsx(A, {}) }),
        /* @__PURE__ */ a.jsx(w, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(D, { href: n.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ a.jsx(z, { label: "Connection", buttonCaption: "Test", onPress: y }),
      u && /* @__PURE__ */ a.jsx(te, { onClose: m, children: "Connection successful." })
    ] })
  ] });
}, de = X(), ue = ({ studioPro: e, documentId: t }) => {
  const o = e.ui.messageBoxes, r = e.app.model.customBlobDocuments, [u, i] = p.useState(0), [c, s] = p.useState(!1), [n, y] = p.useState(de), m = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: H }
  ];
  p.useEffect(() => {
    const l = (g) => {
      const { documents: I } = g;
      I.some((x) => x.documentId === t) && i((x) => x + 1);
    };
    return r.addEventListener("documentsChanged", l), () => {
      r.removeEventListener("documentsChanged", l);
    };
  }, []), p.useEffect(() => {
    r.getDocumentById(t).then(async (l) => {
      if (l && !("error" in l)) {
        const g = l.document.contents;
        y({ ...g }), s(!0);
      } else
        throw new Error((l == null ? void 0 : l.error) || "Document not found");
    }).catch(async (l) => {
      await o.show("error", "Error loading document", "Details: " + (l == null ? void 0 : l.message) || l);
    });
  }, [u]);
  const f = async (l) => {
    oe(n, y, M(e, t), l)();
  }, v = () => n.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ a.jsx(V, { studioPro: e, children: /* @__PURE__ */ a.jsxs(R, { children: [
    !c && /* @__PURE__ */ a.jsx($, {}),
    c && /* @__PURE__ */ a.jsx(U, { children: /* @__PURE__ */ a.jsxs(W, { children: [
      /* @__PURE__ */ a.jsx(L, { label: "Common", children: /* @__PURE__ */ a.jsx(
        Z,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: n.provider,
          options: m,
          onSelectionChange: f,
          validate: v
        }
      ) }),
      n.provider === "MxCloudGenAI" && /* @__PURE__ */ a.jsx(
        ce,
        {
          studioPro: e,
          model: n,
          setModel: y,
          updateStudioProDocument: M(e, t)
        }
      )
    ] }) })
  ] }) });
}, we = q(ue);
export {
  we as component
};
//# sourceMappingURL=modelEdit.js.map
