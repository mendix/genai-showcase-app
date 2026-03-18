import { r as h, w as n, G as A, F as I, H as g, S as b, D as S, P as L, E as N, I as T } from "./Icon-DL4Zg1xv.js";
import { c as D, C as G } from "./TextWithIcon-CXVpI2JS.js";
import { c as F, a as M, b as B, d as R, e as O, u as j } from "./modelUtils-IL_KjN2R.js";
import { g as K, i as V, B as U, h as W, v as _, C as q } from "./ButtonWithLabel-AZ8aIohf.js";
import { d as P, i as X, u as $, e as H, y as E } from "./mxCloudGenAIUtils-DEyUNc7-.js";
import { c as z } from "./DesignSystemTokens-CB_9gr2a.js";
import { S as J } from "./Banner-Dsp9MSVG.js";
import { T as v } from "./TextInputLabeled-gjLdhU4s.js";
import { T as Q } from "./TextInputWithButton-E-wZEDvQ.js";
const Y = (t, s, o, l) => async () => {
  if (!(t.provider === l && "key" in t.providerFields) && l === "MxCloudGenAI") {
    const d = F(), i = { ...t, provider: l, providerFields: d };
    s(i), o(i);
  }
}, Z = async (t, s, o, l, d) => {
  const i = z(t);
  try {
    const u = s.providerFields, r = await K(t, u.key);
    if (!r)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const e = P(t, r);
    if (e.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${e.type}. Only Text Generation keys are currently supported.`
      );
    const p = {
      key: u.key || "",
      keyId: e.keyId || "",
      keyName: e.keyName || "",
      resourceName: e.name || "",
      environment: e.environment || "",
      deepLinkURL: e.deepLinkUrl || ""
    }, y = {
      ...s,
      name: e.model || "",
      displayName: e.model || "",
      type: e.type === "TEXT_GENERATION" ? "Text generation" : e.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...p
      }
    };
    o(y), d(y);
    const m = await X(t, y);
    if (typeof m != "string") {
      const x = $(y, m);
      o(x), d(x).catch(
        (a) => i.error("Failed to update model document after API response:", a)
      );
    } else
      i.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (u) {
    i.error("Error during MxCloud GenAI key import:", u);
    const r = "Failed to import MxCloud GenAI model key.", e = String(u), p = M(s);
    await t.ui.messageBoxes.show("error", r, e), o(p), d(p), l("Key was not imported");
  }
};
async function ee(t, s) {
  const o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (o.status === "ok")
    return {
      ...s,
      providerFields: {
        ...s.providerFields,
        key: o.selected.module + "." + o.selected.name
      }
    };
  if (o.status === "none")
    return { ...s, providerFields: { ...s.providerFields, key: "" } };
}
async function ne(t, s, o, l) {
  var u;
  const d = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => {
        const r = await H(t, s)();
        return typeof r == "string" ? r : ((r.displayName !== s.displayName || r.name !== s.name) && (o(r), l(r)), !0);
      }
    }
  ], i = await t.ui.dialogs.showProgressDialog("Testing connection", d);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const r = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", e = ((u = i.failedStep) == null ? void 0 : u.error) ?? "";
      return await t.ui.messageBoxes.show("error", r, e), !1;
    }
  }
}
const f = () => {
}, te = ({ studioPro: t, model: s, setModel: o, updateStudioProDocument: l }) => {
  const [d, i] = h.useState(!1), [u, r] = h.useState(void 0), e = s.providerFields, p = async () => {
    i(!1);
    const c = await ne(t, s, o, l);
    i(c);
  }, y = () => {
    i(!1);
  }, m = async () => {
    e.key && W(t, e.key);
  }, x = async (c) => {
    const k = c.providerFields, C = await _("Model key")(t, k.key);
    if (r(C), i(!1), !C)
      Z(t, c, o, r, l);
    else {
      const w = M(c);
      o(w), l(w);
    }
  }, a = async () => {
    const c = await ee(t, s);
    c && (o(c), l(c), await x(c));
  };
  return h.useEffect(() => {
    if (d) {
      const c = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(c);
    }
  }, [d]), /* @__PURE__ */ n.jsxs(A, { label: "Resource", children: [
    /* @__PURE__ */ n.jsx(
      Q,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: e.key ?? "",
        icon: e.key ? /* @__PURE__ */ n.jsx(V, {}) : void 0,
        buttonCaption: "Select...",
        onClick: a,
        onClickSecondary: e.key ? m : void 0,
        validate: () => u || !0,
        buttonCaptionSecondary: e.key ? "Show" : void 0
      }
    ),
    !e.key && /* @__PURE__ */ n.jsxs(I, { children: [
      /* @__PURE__ */ n.jsx(g, { children: /* @__PURE__ */ n.jsx(b, {}) }),
      /* @__PURE__ */ n.jsx(g, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(E, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    e.keyId && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: e.resourceName,
          onChange: f,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: e.keyName,
          onChange: f,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: s.displayName,
          icon: s.displayName && s.displayName.toLocaleLowerCase().includes("anthropic") ? B : void 0,
          onChange: f,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: s.name,
          onChange: f,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: e.environment,
          onChange: f,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsxs(I, { children: [
        /* @__PURE__ */ n.jsx(g, { children: /* @__PURE__ */ n.jsx(b, {}) }),
        /* @__PURE__ */ n.jsx(g, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(E, { href: e.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ n.jsx(U, { label: "Connection", buttonCaption: "Test", onPress: p }),
      d && /* @__PURE__ */ n.jsx(J, { onClose: y, children: "Connection successful." })
    ] })
  ] });
}, se = R(), ae = ({ studioPro: t, documentId: s }) => {
  const o = t.ui.messageBoxes, l = t.app.model.customBlobDocuments, [d, i] = h.useState(0), [u, r] = h.useState(!1), [e, p] = h.useState(se), y = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: O }
  ];
  h.useEffect(() => {
    const a = (c) => {
      const { documents: k } = c;
      k.some((C) => C.documentId === s) && i((C) => C + 1);
    };
    return l.addEventListener("documentsChanged", a), () => {
      l.removeEventListener("documentsChanged", a);
    };
  }, []), h.useEffect(() => {
    l.getDocumentById(s).then(async (a) => {
      if (a && !("error" in a)) {
        const c = a.document.contents;
        p({ ...c }), r(!0);
      } else
        throw new Error((a == null ? void 0 : a.error) || "Document not found");
    }).catch(async (a) => {
      await o.show("error", "Error loading document", "Details: " + (a == null ? void 0 : a.message) || a);
    });
  }, [d]);
  const m = async (a) => {
    Y(e, p, j(t, s), a)();
  }, x = () => e.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ n.jsx(S, { studioPro: t, children: /* @__PURE__ */ n.jsxs(L, { children: [
    !u && /* @__PURE__ */ n.jsx(G, {}),
    u && /* @__PURE__ */ n.jsx(N, { children: /* @__PURE__ */ n.jsxs(T, { children: [
      /* @__PURE__ */ n.jsx(A, { label: "Common", children: /* @__PURE__ */ n.jsx(
        q,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: e.provider,
          options: y,
          onSelectionChange: m,
          validate: x
        }
      ) }),
      e.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        te,
        {
          studioPro: t,
          model: e,
          setModel: p,
          updateStudioProDocument: j(t, s)
        }
      )
    ] }) })
  ] }) });
}, he = D(ae);
export {
  he as component
};
//# sourceMappingURL=modelEdit.js.map
