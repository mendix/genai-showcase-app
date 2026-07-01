import { j as e } from "./jsx-runtime-CWOFuNcx.js";
import { r as h, a9 as T, a6 as B, a7 as N, aa as R } from "./PageContainers-BvK5usmz.js";
import { u as V, B as K, C as W, c as q } from "./TextWithIcon-DT9zjsRe.js";
import { c as F, g as O, u as S } from "./modelUtils-CCQmrDg1.js";
import { a as H, b as U } from "./documentInitUtils-Bwe4f_Cu.js";
import { a as P } from "./modelIcons-tHNcUPkT.js";
import { C as Z } from "./CenteredLoadingSpinner-DRQ0Sbi_.js";
import { C as y, i as _, B as z, v as $, a as X } from "./ButtonWithLabel-DyybWRom.js";
import { G as J } from "./GroupBox-Bv1UqUKB.js";
import { y as E } from "./Link-Bxad9cv4.js";
import { createStudioProLogger as Q } from "./logger-gMbuSAUF.js";
import { g as Y, h as ee } from "./constantUtils-D0RXxXWn.js";
import { d as te } from "./mxCloudGenAIUtils-U7THU9De.js";
import { W as ne } from "./Banner-DAKvWnIG.js";
import { T as oe } from "./Table-bHKZTZKr.js";
import { T as w } from "./TextInputLabeled-C0PQPpUV.js";
import { T as se } from "./TextInputWithButton-CkuCCNYk.js";
import { D as M, a as C, d as D } from "./formelements-Daexkze0.js";
const re = (t, o, i, s) => async () => {
  if (!(t.provider === s && "key" in t.providerFields) && s === "MxCloudGenAI") {
    const a = H(), l = { ...t, provider: s, providerFields: a };
    o(l), i(l);
  }
}, ae = async (t, o, i, s, a) => {
  const l = Q(t);
  let c;
  try {
    const p = o.providerFields, m = await Y(t, p.key);
    if (!m)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const d = te(t, m);
    if (d.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${d.type}. Only Text Generation keys are currently supported.`
      );
    const r = {
      key: p.key,
      keyId: d.keyId || "",
      keyName: d.keyName || "",
      resourceName: d.name || "",
      environment: d.environment || "",
      deepLinkURL: d.deepLinkUrl || ""
    };
    if (p?.keyId === r.keyId)
      return;
    c = {
      ...o,
      providerFields: {
        ...r
      }
    }, s(c), a(c);
  } catch (p) {
    l.error("Error during MxCloud GenAI key import:", p), i(y.InvalidContent), c = F(o), s(c), a(c);
  }
}, ie = async (t, o) => {
  let i = [];
  const s = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const l = await O(t, o);
        return typeof l == "string" ? l : (i = l, !0);
      }
    }
  ], a = await t.ui.dialogs.showProgressDialog("Model versions", s);
  switch (a.result) {
    case "Success":
      return i;
    case "UserCancelled":
      return;
    case "Failure": {
      const l = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", c = a.failedStep?.error ?? "";
      await t.ui.messageBoxes.show("error", l, c);
      return;
    }
  }
};
async function le(t, o) {
  const i = o.providerFields, s = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: i?.key?.documentId
  });
  if (s.status === "ok")
    return {
      ...o,
      providerFields: {
        ...o.providerFields,
        key: {
          documentId: s.selected.id,
          qualifiedName: s.selected.module + "." + s.selected.name
        }
      }
    };
  if (s.status === "none")
    return { ...o, providerFields: { ...o.providerFields, key: void 0 } };
}
const de = ({
  width: t = "1em",
  height: o = "1em",
  fill: i = "currentColor",
  className: s,
  style: a
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: o,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: s,
    style: a,
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
), I = () => {
}, ce = ({ studioPro: t, model: o, setModel: i, updateStudioProDocument: s }) => {
  const [a, l] = h.useState(), [c, p] = h.useState(null), [m, d] = h.useState(null), r = o.providerFields, k = async () => {
    r.key && ee(t, r.key);
  }, v = async (n) => {
    const g = n.providerFields, L = await $(t, g.key);
    if (l(L), p(null), d(null), !L)
      ae(t, n, l, i, s);
    else {
      const b = F(n);
      i(b), s(b);
    }
  }, u = async () => {
    const n = await le(t, o);
    n && (i(n), s(n), await v(n));
  }, x = async () => {
    const n = await ie(t, o);
    n ? (p(n), d(/* @__PURE__ */ new Date())) : (d(null), p(null));
  }, j = (n) => {
    (r.key && n.includes(r.key.documentId) || n.includes("projectSettings")) && v(o);
  };
  V({
    studioPro: t,
    dependentIds: [r.key?.documentId].filter((n) => !!n),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: j
  }), h.useEffect(() => {
    v(o);
  }, []);
  const f = (n) => n === y.Required ? "Model key is required" : n === y.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : n === y.InvalidType ? "Selected constant must be of type string." : n === y.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, A = (n) => {
    let g = null;
    return new RegExp(/anthropic/i).test(n.id) && (g = /* @__PURE__ */ e.jsx(de, {})), g;
  }, G = a === y.EmptyValue || a === y.InvalidContent || a === y.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      se,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: r.key?.qualifiedName ?? "",
        icon: r.key ? /* @__PURE__ */ e.jsx(_, {}) : void 0,
        buttonCaption: "Select...",
        onClick: u,
        onClickSecondary: r.key ? k : void 0,
        validate: () => f(a),
        buttonCaptionSecondary: r.key ? "Show" : void 0
      }
    ),
    !r.key && /* @__PURE__ */ e.jsxs(M, { children: [
      /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsx(D, {}) }),
      /* @__PURE__ */ e.jsx(C, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        E,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    G && /* @__PURE__ */ e.jsxs(ne, { children: [
      /* @__PURE__ */ e.jsx(K, { children: a === y.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: a === y.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    r.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        w,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: r.resourceName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: r.keyName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        w,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: r.environment,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(M, { children: [
        /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsx(D, {}) }),
        /* @__PURE__ */ e.jsx(C, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(E, { href: r.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx(z, { label: "Model versions", buttonCaption: "List models", onPress: x }),
      m && /* @__PURE__ */ e.jsxs(W, { children: [
        "Last updated: ",
        m.toLocaleString()
      ] }),
      c && /* @__PURE__ */ e.jsx(
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
          data: c.map((n) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(M, { alignItems: "center", children: [
                A(n),
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
}, ue = U(), pe = ({ studioPro: t, documentId: o }) => {
  const i = t.ui.messageBoxes, s = t.app.model.customBlobDocuments, [a, l] = h.useState(0), [c, p] = h.useState(!1), [m, d] = h.useState(ue), r = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: P }
  ];
  h.useEffect(() => {
    const u = (x) => {
      const { documents: j } = x;
      j.some((f) => f.documentId === o) && l((f) => f + 1);
    };
    return s.addEventListener("documentsChanged", u), () => {
      s.removeEventListener("documentsChanged", u);
    };
  }, []), h.useEffect(() => {
    s.getDocumentById(o).then(async (u) => {
      if (u && !("error" in u)) {
        const x = u.document.contents;
        d({ ...x }), p(!0);
      } else
        throw new Error(u?.error || "Document not found");
    }).catch(async (u) => {
      await i.show("error", "Error loading document", "Details: " + u?.message || u);
    });
  }, [a]);
  const k = async (u) => {
    re(m, d, S(t, o), u)();
  }, v = () => m.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(T, { studioPro: t, children: /* @__PURE__ */ e.jsxs(B, { children: [
    !c && /* @__PURE__ */ e.jsx(Z, {}),
    c && /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsxs(J, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        X,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: m.provider,
          options: r,
          onSelectionChange: k,
          validate: v
        }
      ),
      m.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        ce,
        {
          studioPro: t,
          model: m,
          setModel: d,
          updateStudioProDocument: S(t, o)
        }
      )
    ] }) }) })
  ] }) });
}, Fe = q(pe);
export {
  Fe as component
};
