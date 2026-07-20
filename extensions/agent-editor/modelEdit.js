import { j as e } from "./jsx-runtime-CWOFuNcx.js";
import { r as h, a9 as N, a6 as R, a7 as V, aa as K } from "./PageContainers-BvK5usmz.js";
import { u as W, B as q, C as O, c as P } from "./TextWithIcon-C7mb5Wl2.js";
import { a as U, b as H } from "./documentInitUtils-Bwe4f_Cu.js";
import { a as Z } from "./modelIcons-YezrRLMt.js";
import { c as A, g as _, u as S } from "./modelUtils-DEWjOIv3.js";
import { C as z } from "./CenteredLoadingSpinner-DRQ0Sbi_.js";
import { C as m, i as $, B as X, v as J, a as Q } from "./ButtonWithLabel-D7GGNMCy.js";
import { G as Y } from "./GroupBox-Bv1UqUKB.js";
import { y as D } from "./Link-Bxad9cv4.js";
import { createStudioProLogger as ee } from "./logger-gMbuSAUF.js";
import { g as te, h as ne } from "./constantUtils-D0RXxXWn.js";
import { d as re } from "./mxCloudGenAIUtils-BSv0PxuL.js";
import { u as oe } from "./useExtensionPermissionsChanged-fZbEmljF.js";
import { W as se } from "./Banner-DAKvWnIG.js";
import { T as ae } from "./Table-bHKZTZKr.js";
import { T as M } from "./TextInputLabeled-C0PQPpUV.js";
import { T as ie } from "./TextInputWithButton-CkuCCNYk.js";
import { D as L, a as j, d as F } from "./formelements-Daexkze0.js";
const le = (t, s, r, o) => async () => {
  if (!(t.provider === o && "key" in t.providerFields) && o === "MxCloudGenAI") {
    const u = U(), c = { ...t, provider: o, providerFields: u };
    s(c), r(c);
  }
}, de = async (t, s, r, o, u) => {
  const c = ee(t);
  let i;
  try {
    const p = s.providerFields, v = await te(t, p.key);
    if (!v)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const a = re(t, v);
    if (a.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${a.type}. Only Text Generation keys are currently supported.`
      );
    const y = {
      key: p.key,
      keyId: a.keyId || "",
      keyName: a.keyName || "",
      resourceName: a.name || "",
      environment: a.environment || "",
      deepLinkURL: a.deepLinkUrl || ""
    };
    if (p?.keyId === y.keyId)
      return;
    i = {
      ...s,
      providerFields: {
        ...y
      }
    }, o(i), u(i);
  } catch (p) {
    c.error("Error during MxCloud GenAI key import:", p), r(m.InvalidContent), i = A(s), o(i), u(i);
  }
}, ce = async (t, s) => {
  let r = [];
  const o = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const c = await _(t, s);
        return typeof c == "string" ? c : (r = c, !0);
      }
    }
  ], u = await t.ui.dialogs.showProgressDialog("Model versions", o);
  switch (u.result) {
    case "Success":
      return r;
    case "UserCancelled":
      return;
    case "Failure": {
      const c = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", i = u.failedStep?.error ?? "";
      await t.ui.messageBoxes.show("error", c, i);
      return;
    }
  }
};
async function ue(t, s) {
  const r = s.providerFields, o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: r?.key?.documentId
  });
  if (o.status === "ok")
    return {
      ...s,
      providerFields: {
        ...s.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...s, providerFields: { ...s.providerFields, key: void 0 } };
}
const pe = ({
  width: t = "1em",
  height: s = "1em",
  fill: r = "currentColor",
  className: o,
  style: u
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: u,
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
), I = () => {
}, me = ({
  studioPro: t,
  documentId: s,
  model: r,
  setModel: o,
  analyticsService: u,
  updateStudioProDocument: c
}) => {
  const [i, p] = h.useState(), [v, a] = h.useState(null), [y, g] = h.useState(null), l = r.providerFields, w = async () => {
    l.key && ne(t, l.key);
  }, d = async (n) => {
    const k = n.providerFields, b = await J(t, k.key);
    if (p(b), a(null), g(null), !b)
      de(t, n, p, o, c);
    else {
      const E = A(n);
      o(E), c(E);
    }
  }, x = async () => {
    const n = await ue(t, r);
    n && (o(n), c(n), await d(n));
  }, f = async () => {
    u.trackModelListTriggered(s, r.provider);
    const n = await ce(t, r);
    n ? (a(n), g(/* @__PURE__ */ new Date())) : (g(null), a(null));
  }, C = (n) => {
    (l.key && n.includes(l.key.documentId) || n.includes("projectSettings")) && d(r);
  };
  W({
    studioPro: t,
    dependentIds: [l.key?.documentId].filter((n) => !!n),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: C
  }), oe({
    studioPro: t,
    onPermissionsChanged: () => d(r)
  }), h.useEffect(() => {
    d(r);
  }, []);
  const G = (n) => n === m.Required ? "Model key is required" : n === m.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : n === m.InvalidType ? "Selected constant must be of type string." : n === m.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, T = (n) => {
    let k = null;
    return new RegExp(/anthropic/i).test(n.id) && (k = /* @__PURE__ */ e.jsx(pe, {})), k;
  }, B = i === m.EmptyValue || i === m.InvalidContent || i === m.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      ie,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: l.key?.qualifiedName ?? "",
        icon: l.key ? /* @__PURE__ */ e.jsx($, {}) : void 0,
        buttonCaption: "Select...",
        onClick: x,
        onClickSecondary: l.key ? w : void 0,
        validate: () => G(i),
        buttonCaptionSecondary: l.key ? "Show" : void 0
      }
    ),
    !l.key && /* @__PURE__ */ e.jsxs(L, { children: [
      /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(F, {}) }),
      /* @__PURE__ */ e.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        D,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    B && /* @__PURE__ */ e.jsxs(se, { children: [
      /* @__PURE__ */ e.jsx(q, { children: i === m.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: i === m.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    l.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        M,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: l.resourceName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        M,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: l.keyName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        M,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: l.environment,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(L, { children: [
        /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsx(F, {}) }),
        /* @__PURE__ */ e.jsx(j, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(D, { href: l.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx(X, { label: "Model versions", buttonCaption: "List models", onPress: f }),
      y && /* @__PURE__ */ e.jsxs(O, { children: [
        "Last updated: ",
        y.toLocaleString()
      ] }),
      v && /* @__PURE__ */ e.jsx(
        ae,
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
          data: v.map((n) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(L, { alignItems: "center", children: [
                T(n),
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
}, ye = H(), he = ({ studioPro: t, analyticsService: s, documentId: r }) => {
  const o = t.ui.messageBoxes, u = t.app.model.customBlobDocuments, [c, i] = h.useState(0), [p, v] = h.useState(!1), [a, y] = h.useState(ye), g = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: Z }
  ];
  h.useEffect(() => {
    const d = (x) => {
      const { documents: f } = x;
      f.some((C) => C.documentId === r) && i((C) => C + 1);
    };
    return u.addEventListener("documentsChanged", d), () => {
      u.removeEventListener("documentsChanged", d);
    };
  }, []), h.useEffect(() => {
    u.getDocumentById(r).then(async (d) => {
      if (d && !("error" in d)) {
        const x = d.document.contents;
        y({ ...x }), v(!0);
      } else
        throw new Error(d?.error || "Document not found");
    }).catch(async (d) => {
      await o.show("error", "Error loading document", "Details: " + d?.message || d);
    });
  }, [c]);
  const l = async (d) => {
    const x = a.provider, f = d;
    s.trackModelProviderUpdated(r, x, f), le(a, y, S(t, r), f)();
  }, w = () => a.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(N, { studioPro: t, children: /* @__PURE__ */ e.jsxs(R, { children: [
    !p && /* @__PURE__ */ e.jsx(z, {}),
    p && /* @__PURE__ */ e.jsx(V, { children: /* @__PURE__ */ e.jsx(K, { children: /* @__PURE__ */ e.jsxs(Y, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        Q,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: a.provider,
          options: g,
          onSelectionChange: l,
          validate: w
        }
      ),
      a.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        me,
        {
          studioPro: t,
          documentId: r,
          model: a,
          setModel: y,
          analyticsService: s,
          updateStudioProDocument: S(t, r)
        }
      )
    ] }) }) })
  ] }) });
}, Be = P(he);
export {
  Be as component
};
