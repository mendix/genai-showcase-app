import { R as e, r as h, a4 as j, a9 as k, ai as D, ah as K, ae as q, af as W, aj as O, a1 as H } from "./formelements-DgWWXRMR.js";
import { u as U, B as Z, a as _, c as z, C as P } from "./TextWithIcon-QGENPuMT.js";
import { createStudioProLogger as B } from "./logger-Bof2Evv1.js";
import { n as R, o as A, p as $, q as X, r as J } from "./index-Dv4g4_-n.js";
import { C as v, i as Q, B as Y, v as ee, a as te } from "./ButtonWithLabel-DmOV4DcZ.js";
import { y as F, W as ne } from "./Banner-B2HXR2np.js";
import { d as se, i as ae } from "./mxCloudGenAIUtils-WCRmTA6x.js";
import { T as oe } from "./Table-CJG1u8pf.js";
import { T as L } from "./TextInputLabeled-DcUYd1Xh.js";
import { T as re } from "./TextInputWithButton-H-kPhdc5.js";
const T = (t, n) => async (r) => {
  const a = B(t);
  try {
    await t.app.model.customBlobDocuments.updateDocumentContent(n, r);
  } catch (o) {
    a.error("Failed to save model document:", o), await t.ui.notifications.show({
      title: "Failed to save model document.",
      message: o.message
    });
  }
}, N = (t) => {
  const n = t.providerFields;
  return {
    ...A(),
    provider: t.provider,
    providerFields: {
      ...R(),
      key: n.key
    }
  };
}, ie = (t, n, r, a) => async () => {
  if (!(t.provider === a && "key" in t.providerFields) && a === "MxCloudGenAI") {
    const o = R(), p = { ...t, provider: a, providerFields: o };
    n(p), r(p);
  }
}, le = async (t, n, r, a, o) => {
  const p = B(t);
  let l;
  try {
    const c = n.providerFields, y = await $(t, c.key);
    if (!y)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const u = se(t, y);
    if (u.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${u.type}. Only Text Generation keys are currently supported.`
      );
    const i = {
      key: c.key,
      keyId: u.keyId || "",
      keyName: u.keyName || "",
      resourceName: u.name || "",
      environment: u.environment || "",
      deepLinkURL: u.deepLinkUrl || ""
    };
    if ((c == null ? void 0 : c.keyId) === i.keyId)
      return;
    l = {
      ...n,
      providerFields: {
        ...i
      }
    }, a(l), o(l);
  } catch (c) {
    p.error("Error during MxCloud GenAI key import:", c), r(v.InvalidContent), l = N(n), a(l), o(l);
  }
}, de = async (t, n) => {
  var p;
  let r = [];
  const a = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const l = await ae(t, n);
        return typeof l == "string" ? l : (r = l.models || [], !0);
      }
    }
  ], o = await t.ui.dialogs.showProgressDialog("Model versions", a);
  switch (o.result) {
    case "Success":
      return r;
    case "UserCancelled":
      return;
    case "Failure": {
      const l = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", c = ((p = o.failedStep) == null ? void 0 : p.error) ?? "";
      await t.ui.messageBoxes.show("error", l, c);
      return;
    }
  }
};
async function ce(t, n) {
  var o;
  const r = n.providerFields, a = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: (o = r == null ? void 0 : r.key) == null ? void 0 : o.documentId
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
const ue = ({
  width: t = "1em",
  height: n = "1em",
  fill: r = "currentColor",
  className: a,
  style: o
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: a,
    style: o,
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M9.06641 3.18945L12.899 12.8024L15.0007 12.8024L11.1681 3.18945L9.06641 3.18945Z", fill: r }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M4.61938 8.99843L5.93076 5.62017L7.24216 8.99843H4.61938ZM4.83198 3.18945L1 12.8024H3.14261L3.92632 10.7837H7.93534L8.71891 12.8024H10.8615L7.02954 3.18945L4.83198 3.18945Z",
          fill: r
        }
      )
    ]
  }
), b = () => {
}, pe = ({ studioPro: t, model: n, setModel: r, updateStudioProDocument: a }) => {
  var I, M;
  const [o, p] = h.useState(), [l, c] = h.useState(null), [y, u] = h.useState(null), i = n.providerFields, C = async () => {
    i.key && X(t, i.key);
  }, m = async (s) => {
    const f = s.providerFields, S = await ee(t, f.key);
    if (p(S), c(null), u(null), !S)
      le(t, s, p, r, a);
    else {
      const E = N(s);
      r(E), a(E);
    }
  }, d = async () => {
    const s = await ce(t, n);
    s && (r(s), a(s), await m(s));
  }, x = async () => {
    const s = await de(t, n);
    s ? (c(s), u(/* @__PURE__ */ new Date())) : (u(null), c(null));
  }, w = (s) => {
    (i.key && s.includes(i.key.documentId) || s.includes("projectSettings")) && m(n);
  };
  U({
    studioPro: t,
    dependentIds: [(I = i.key) == null ? void 0 : I.documentId].filter((s) => !!s),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: w
  }), h.useEffect(() => {
    m(n);
  }, []);
  const g = (s) => s === v.Required ? "Model key is required" : s === v.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : s === v.InvalidType ? "Selected constant must be of type string." : s === v.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, V = (s) => {
    let f = null;
    return new RegExp(/anthropic/i).test(s.id) && (f = /* @__PURE__ */ e.jsx(ue, {})), f;
  }, G = o === v.EmptyValue || o === v.InvalidContent || o === v.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      re,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((M = i.key) == null ? void 0 : M.qualifiedName) ?? "",
        icon: i.key ? /* @__PURE__ */ e.jsx(Q, {}) : void 0,
        buttonCaption: "Select...",
        onClick: d,
        onClickSecondary: i.key ? C : void 0,
        validate: () => g(o),
        buttonCaptionSecondary: i.key ? "Show" : void 0
      }
    ),
    !i.key && /* @__PURE__ */ e.jsxs(j, { children: [
      /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
      /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        F,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    G && /* @__PURE__ */ e.jsxs(ne, { children: [
      /* @__PURE__ */ e.jsx(Z, { children: o === v.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: o === v.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    i.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        L,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: i.resourceName,
          onChange: b,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        L,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: i.keyName,
          onChange: b,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        L,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: i.environment,
          onChange: b,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(j, { children: [
        /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(F, { href: i.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx(Y, { label: "Model versions", buttonCaption: "List models", onPress: x }),
      y && /* @__PURE__ */ e.jsxs(_, { children: [
        "Last updated: ",
        y.toLocaleString()
      ] }),
      l && /* @__PURE__ */ e.jsx(
        oe,
        {
          ariaLabel: "Model versions table",
          columns: [
            {
              id: "name",
              caption: "Model",
              allowsResizing: !0,
              isRowHeader: !0
            },
            {
              id: "id",
              caption: "Model ID",
              allowsResizing: !0
            }
          ],
          data: l.map((s) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(j, { alignItems: "center", children: [
                V(s),
                /* @__PURE__ */ e.jsx("div", { children: s.name })
              ] }),
              tooltipText: s.name
            },
            {
              cellContent: s.id,
              tooltipText: s.id
            }
          ])
        }
      )
    ] })
  ] });
}, ye = A(), ve = ({ studioPro: t, documentId: n }) => {
  const r = t.ui.messageBoxes, a = t.app.model.customBlobDocuments, [o, p] = h.useState(0), [l, c] = h.useState(!1), [y, u] = h.useState(ye), i = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: J }
  ];
  h.useEffect(() => {
    const d = (x) => {
      const { documents: w } = x;
      w.some((g) => g.documentId === n) && p((g) => g + 1);
    };
    return a.addEventListener("documentsChanged", d), () => {
      a.removeEventListener("documentsChanged", d);
    };
  }, []), h.useEffect(() => {
    a.getDocumentById(n).then(async (d) => {
      if (d && !("error" in d)) {
        const x = d.document.contents;
        u({ ...x }), c(!0);
      } else
        throw new Error((d == null ? void 0 : d.error) || "Document not found");
    }).catch(async (d) => {
      await r.show("error", "Error loading document", "Details: " + (d == null ? void 0 : d.message) || d);
    });
  }, [o]);
  const C = async (d) => {
    ie(y, u, T(t, n), d)();
  }, m = () => y.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(K, { studioPro: t, children: /* @__PURE__ */ e.jsxs(q, { children: [
    !l && /* @__PURE__ */ e.jsx(P, {}),
    l && /* @__PURE__ */ e.jsx(W, { children: /* @__PURE__ */ e.jsx(O, { children: /* @__PURE__ */ e.jsxs(H, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        te,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: y.provider,
          options: i,
          onSelectionChange: C,
          validate: m
        }
      ),
      y.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        pe,
        {
          studioPro: t,
          model: y,
          setModel: u,
          updateStudioProDocument: T(t, n)
        }
      )
    ] }) }) })
  ] }) });
}, be = z(ve);
export {
  be as component
};
