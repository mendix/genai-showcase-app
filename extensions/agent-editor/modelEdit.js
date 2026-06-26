import { R as e, r as v, a4 as w, a9 as k, ai as D, ah as V, ae as F, af as G, aj as K, a1 as q } from "./formelements-DgWWXRMR.js";
import { u as W, B as O, a as H, c as U, C as P } from "./TextWithIcon-BsB7aLN_.js";
import { c as N, g as Z, u as T } from "./modelUtils-Dzzo6OJV.js";
import { p as _, q as z, r as $, s as X, t as J } from "./index-Cosn4mN0.js";
import { C as h, i as Q, B as Y, v as ee, a as te } from "./ButtonWithLabel-CwHlV4OE.js";
import { y as B, W as ne } from "./Banner-Tj4hO43W.js";
import { createStudioProLogger as se } from "./logger-Bof2Evv1.js";
import { d as ae } from "./mxCloudGenAIUtils-BhrK-gu0.js";
import { T as re } from "./Table-CJG1u8pf.js";
import { T as L } from "./TextInputLabeled-DcUYd1Xh.js";
import { T as oe } from "./TextInputWithButton-H-kPhdc5.js";
const ie = (t, s, i, a) => async () => {
  if (!(t.provider === a && "key" in t.providerFields) && a === "MxCloudGenAI") {
    const r = _(), p = { ...t, provider: a, providerFields: r };
    s(p), i(p);
  }
}, le = async (t, s, i, a, r) => {
  const p = se(t);
  let l;
  try {
    const c = s.providerFields, y = await z(t, c.key);
    if (!y)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const u = ae(t, y);
    if (u.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${u.type}. Only Text Generation keys are currently supported.`
      );
    const o = {
      key: c.key,
      keyId: u.keyId || "",
      keyName: u.keyName || "",
      resourceName: u.name || "",
      environment: u.environment || "",
      deepLinkURL: u.deepLinkUrl || ""
    };
    if ((c == null ? void 0 : c.keyId) === o.keyId)
      return;
    l = {
      ...s,
      providerFields: {
        ...o
      }
    }, a(l), r(l);
  } catch (c) {
    p.error("Error during MxCloud GenAI key import:", c), i(h.InvalidContent), l = N(s), a(l), r(l);
  }
}, de = async (t, s) => {
  var p;
  let i = [];
  const a = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const l = await Z(t, s);
        return typeof l == "string" ? l : (i = l, !0);
      }
    }
  ], r = await t.ui.dialogs.showProgressDialog("Model versions", a);
  switch (r.result) {
    case "Success":
      return i;
    case "UserCancelled":
      return;
    case "Failure": {
      const l = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", c = ((p = r.failedStep) == null ? void 0 : p.error) ?? "";
      await t.ui.messageBoxes.show("error", l, c);
      return;
    }
  }
};
async function ce(t, s) {
  var r;
  const i = s.providerFields, a = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: (r = i == null ? void 0 : i.key) == null ? void 0 : r.documentId
  });
  if (a.status === "ok")
    return {
      ...s,
      providerFields: {
        ...s.providerFields,
        key: {
          documentId: a.selected.id,
          qualifiedName: a.selected.module + "." + a.selected.name
        }
      }
    };
  if (a.status === "none")
    return { ...s, providerFields: { ...s.providerFields, key: void 0 } };
}
const ue = ({
  width: t = "1em",
  height: s = "1em",
  fill: i = "currentColor",
  className: a,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: a,
    style: r,
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M9.06641 3.18945L12.899 12.8024L15.0007 12.8024L11.1681 3.18945L9.06641 3.18945Z", fill: i }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M4.61938 8.99843L5.93076 5.62017L7.24216 8.99843H4.61938ZM4.83198 3.18945L1 12.8024H3.14261L3.92632 10.7837H7.93534L8.71891 12.8024H10.8615L7.02954 3.18945L4.83198 3.18945Z",
          fill: i
        }
      )
    ]
  }
), b = () => {
}, pe = ({ studioPro: t, model: s, setModel: i, updateStudioProDocument: a }) => {
  var I, M;
  const [r, p] = v.useState(), [l, c] = v.useState(null), [y, u] = v.useState(null), o = s.providerFields, C = async () => {
    o.key && $(t, o.key);
  }, m = async (n) => {
    const f = n.providerFields, S = await ee(t, f.key);
    if (p(S), c(null), u(null), !S)
      le(t, n, p, i, a);
    else {
      const E = N(n);
      i(E), a(E);
    }
  }, d = async () => {
    const n = await ce(t, s);
    n && (i(n), a(n), await m(n));
  }, x = async () => {
    const n = await de(t, s);
    n ? (c(n), u(/* @__PURE__ */ new Date())) : (u(null), c(null));
  }, j = (n) => {
    (o.key && n.includes(o.key.documentId) || n.includes("projectSettings")) && m(s);
  };
  W({
    studioPro: t,
    dependentIds: [(I = o.key) == null ? void 0 : I.documentId].filter((n) => !!n),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: j
  }), v.useEffect(() => {
    m(s);
  }, []);
  const g = (n) => n === h.Required ? "Model key is required" : n === h.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : n === h.InvalidType ? "Selected constant must be of type string." : n === h.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, R = (n) => {
    let f = null;
    return new RegExp(/anthropic/i).test(n.id) && (f = /* @__PURE__ */ e.jsx(ue, {})), f;
  }, A = r === h.EmptyValue || r === h.InvalidContent || r === h.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      oe,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((M = o.key) == null ? void 0 : M.qualifiedName) ?? "",
        icon: o.key ? /* @__PURE__ */ e.jsx(Q, {}) : void 0,
        buttonCaption: "Select...",
        onClick: d,
        onClickSecondary: o.key ? C : void 0,
        validate: () => g(r),
        buttonCaptionSecondary: o.key ? "Show" : void 0
      }
    ),
    !o.key && /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
      /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        B,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    A && /* @__PURE__ */ e.jsxs(ne, { children: [
      /* @__PURE__ */ e.jsx(O, { children: r === h.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: r === h.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    o.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        L,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: o.resourceName,
          onChange: b,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        L,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: o.keyName,
          onChange: b,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        L,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: o.environment,
          onChange: b,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsx(k, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(B, { href: o.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx(Y, { label: "Model versions", buttonCaption: "List models", onPress: x }),
      y && /* @__PURE__ */ e.jsxs(H, { children: [
        "Last updated: ",
        y.toLocaleString()
      ] }),
      l && /* @__PURE__ */ e.jsx(
        re,
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
          data: l.map((n) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(w, { alignItems: "center", children: [
                R(n),
                /* @__PURE__ */ e.jsx("div", { children: n.name })
              ] }),
              tooltipText: n.name
            },
            {
              cellContent: n.id,
              tooltipText: n.id
            }
          ])
        }
      )
    ] })
  ] });
}, ye = X(), he = ({ studioPro: t, documentId: s }) => {
  const i = t.ui.messageBoxes, a = t.app.model.customBlobDocuments, [r, p] = v.useState(0), [l, c] = v.useState(!1), [y, u] = v.useState(ye), o = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: J }
  ];
  v.useEffect(() => {
    const d = (x) => {
      const { documents: j } = x;
      j.some((g) => g.documentId === s) && p((g) => g + 1);
    };
    return a.addEventListener("documentsChanged", d), () => {
      a.removeEventListener("documentsChanged", d);
    };
  }, []), v.useEffect(() => {
    a.getDocumentById(s).then(async (d) => {
      if (d && !("error" in d)) {
        const x = d.document.contents;
        u({ ...x }), c(!0);
      } else
        throw new Error((d == null ? void 0 : d.error) || "Document not found");
    }).catch(async (d) => {
      await i.show("error", "Error loading document", "Details: " + (d == null ? void 0 : d.message) || d);
    });
  }, [r]);
  const C = async (d) => {
    ie(y, u, T(t, s), d)();
  }, m = () => y.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(V, { studioPro: t, children: /* @__PURE__ */ e.jsxs(F, { children: [
    !l && /* @__PURE__ */ e.jsx(P, {}),
    l && /* @__PURE__ */ e.jsx(G, { children: /* @__PURE__ */ e.jsx(K, { children: /* @__PURE__ */ e.jsxs(q, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        te,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: y.provider,
          options: o,
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
          updateStudioProDocument: T(t, s)
        }
      )
    ] }) }) })
  ] }) });
}, Ie = U(he);
export {
  Ie as component
};
