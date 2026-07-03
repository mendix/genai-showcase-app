import { j as e } from "./jsx-runtime-CWOFuNcx.js";
import { r as h, a9 as Q, a6 as Y, a7 as ee, aa as te } from "./PageContainers-BvK5usmz.js";
import { u as H, B as V, C as P, c as ne } from "./TextWithIcon-DT9zjsRe.js";
import { g as W, c as O, u as F } from "./modelUtils-CVjEFoDU.js";
import { a as oe, b as se, d as re } from "./documentInitUtils-CLdpbIQ7.js";
import { a as K } from "./modelIcons-tHNcUPkT.js";
import { C as ae } from "./CenteredLoadingSpinner-DRQ0Sbi_.js";
import { i as N, C as c, B as $, v as G, a as ie } from "./ButtonWithLabel-DyybWRom.js";
import { G as le } from "./GroupBox-Bv1UqUKB.js";
import { y as R } from "./Link-Bxad9cv4.js";
import { W as T } from "./Banner-DAKvWnIG.js";
import { T as U } from "./Table-bHKZTZKr.js";
import { T as q } from "./TextInputWithButton-CkuCCNYk.js";
import { D as I, a as M, d as B } from "./formelements-Daexkze0.js";
import { h as z, g as de } from "./constantUtils-D0RXxXWn.js";
import { createStudioProLogger as ce } from "./logger-gMbuSAUF.js";
import { d as ue } from "./mxCloudGenAIUtils-U7THU9De.js";
import { T as A } from "./TextInputLabeled-C0PQPpUV.js";
const pe = (t, n, a, o) => async () => {
  if (!(t.provider === o && "key" in t.providerFields)) {
    if (o === "MxCloudGenAI") {
      const s = oe(), l = {
        ...t,
        provider: o,
        importMicroflow: "AgentEditorCommons.MxCloudDeployedModel_CreateUpdateFromModel",
        providerFields: s
      };
      n(l), a(l);
    }
    if (o === "Azure") {
      const s = se(), l = {
        ...t,
        provider: o,
        importMicroflow: "OpenAIConnector.AzureDeployedModel_CreateUpdateFromModel",
        providerFields: s
      };
      n(l), a(l);
    }
    if (!o) {
      const s = {
        ...t,
        provider: void 0,
        importMicroflow: "",
        providerFields: {}
      };
      n(s), a(s);
    }
  }
}, me = async (t, n) => {
  let a = [];
  const o = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const l = await W(t, n);
        return typeof l == "string" ? l : (a = l, !0);
      }
    }
  ], s = await t.ui.dialogs.showProgressDialog("Model versions", o);
  switch (s.result) {
    case "Success":
      return a;
    case "UserCancelled":
      return;
    case "Failure": {
      const l = `No connection. Make sure you are connected to the internet and check that a valid key and endpoint have been set as value for the selected constants. 
The project endpoint must be of format https://resource-name.services.ai.azure.com/api/projects/project-name`, u = s.failedStep?.error ?? "";
      await t.ui.messageBoxes.show("error", l, u);
      return;
    }
  }
};
async function ve(t, n) {
  const a = n.providerFields, o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: a?.key?.documentId
  });
  if (o.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
async function ye(t, n) {
  const a = n.providerFields, o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: a?.endpoint?.documentId
  });
  if (o.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        endpoint: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...n, providerFields: { ...n.providerFields, endpoint: void 0 } };
}
const Z = ({
  width: t = "1em",
  height: n = "1em",
  fill: a = "currentColor",
  className: o,
  style: s
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: s,
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M9.06641 3.18945L12.899 12.8024L15.0007 12.8024L11.1681 3.18945L9.06641 3.18945Z", fill: a }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M4.61938 8.99843L5.93076 5.62017L7.24216 8.99843H4.61938ZM4.83198 3.18945L1 12.8024H3.14261L3.92632 10.7837H7.93534L8.71891 12.8024H10.8615L7.02954 3.18945L4.83198 3.18945Z",
          fill: a
        }
      )
    ]
  }
), he = ({
  width: t = "1em",
  height: n = "1em",
  fill: a = "currentColor",
  className: o,
  style: s
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
    style: s,
    children: [
      /* @__PURE__ */ e.jsx("path", { d: "M9.06641 3.18945L12.899 12.8024L15.0007 12.8024L11.1681 3.18945L9.06641 3.18945Z", fill: a }),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M4.61938 8.99843L5.93076 5.62017L7.24216 8.99843H4.61938ZM4.83198 3.18945L1 12.8024H3.14261L3.92632 10.7837H7.93534L8.71891 12.8024H10.8615L7.02954 3.18945L4.83198 3.18945Z",
          fill: a
        }
      )
    ]
  }
), xe = ({ studioPro: t, model: n, setModel: a, updateStudioProDocument: o }) => {
  const [s, l] = h.useState(), [u, x] = h.useState(), [v, m] = h.useState(null), [p, g] = h.useState(null), d = n.providerFields, y = async () => {
    d.key && z(t, d.key);
  }, C = async () => {
    d.endpoint && z(t, d.endpoint);
  }, f = async (r) => {
    const j = r.providerFields, X = await G(t, j.key);
    l(X);
    const J = await G(t, j.endpoint);
    x(J), m(null), g(null);
  }, k = async () => {
    const r = await ye(t, n);
    r && (a(r), o(r), f(r));
  }, L = async () => {
    const r = await ve(t, n);
    r && (a(r), o(r), f(r));
  }, E = async () => {
    const r = await me(t, n);
    r ? (m(r), g(/* @__PURE__ */ new Date())) : (g(null), m(null));
  }, i = (r) => {
    (d.key && r.includes(d.key.documentId) || r.includes("projectSettings")) && f(n);
  };
  H({
    studioPro: t,
    dependentIds: [d.key?.documentId].filter((r) => !!r),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: i
  }), h.useEffect(() => {
    f(n);
  }, []);
  const w = (r) => r === c.Required ? "Model key is required" : r === c.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : r === c.InvalidType ? "Selected constant must be of type string." : r === c.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, b = (r) => {
    let j = null;
    return new RegExp(/openai/i).test(r.modelPublisher) && (j = /* @__PURE__ */ e.jsx(he, { width: "1.3em", height: "1.3em" })), new RegExp(/anthropic/i).test(r.modelPublisher) && (j = /* @__PURE__ */ e.jsx(Z, { width: "1.3em", height: "1.3em" })), j;
  }, S = s === c.EmptyValue || s === c.InvalidContent || s === c.PrivateValue, _ = u === c.EmptyValue || u === c.InvalidContent || u === c.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      q,
      {
        label: "Project endpoint",
        ariaLabel: "Project endpoint",
        value: d.endpoint?.qualifiedName ?? "",
        icon: d.endpoint ? /* @__PURE__ */ e.jsx(N, {}) : void 0,
        buttonCaption: "Select...",
        onClick: k,
        onClickSecondary: d.endpoint ? C : void 0,
        validate: () => w(u),
        buttonCaptionSecondary: d.endpoint ? "Show" : void 0
      }
    ),
    _ && /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(V, { children: u === c.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: u === c.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the endpoint constant. E.g. https://resource-name.services.ai.azure.com/api/projects/project-name" })
    ] }),
    /* @__PURE__ */ e.jsx(
      q,
      {
        label: "API key",
        ariaLabel: "API key",
        value: d.key?.qualifiedName ?? "",
        icon: d.key ? /* @__PURE__ */ e.jsx(N, {}) : void 0,
        buttonCaption: "Select...",
        onClick: L,
        onClickSecondary: d.key ? y : void 0,
        validate: () => w(s),
        buttonCaptionSecondary: d.key ? "Show" : void 0
      }
    ),
    S && /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(V, { children: s === c.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: s === c.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    (!d.endpoint || !d.key) && /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(B, {}) }),
      /* @__PURE__ */ e.jsx(M, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        R,
        {
          href: "https://docs.mendix.com/agents/reference-guide/external-connectors/openai/#azure-resource-name",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "How to get the project endpoint and API key"
        }
      ) })
    ] }),
    d.endpoint && d.key && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx($, { label: "Model versions", buttonCaption: "List models", onPress: E }),
      p && /* @__PURE__ */ e.jsxs(P, { children: [
        "Last updated: ",
        p.toLocaleString()
      ] }),
      v && /* @__PURE__ */ e.jsx(
        U,
        {
          ariaLabel: "Model versions table",
          columns: [
            {
              id: "name",
              caption: "Deployment",
              allowsResizing: !0,
              isRowHeader: !0
            },
            {
              id: "model",
              caption: "Model",
              allowsResizing: !0
            }
          ],
          data: v.map((r) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(I, { alignItems: "center", children: [
                b(r),
                /* @__PURE__ */ e.jsx("div", { children: r.name })
              ] }),
              tooltipText: r.name
            },
            {
              cellContent: `${r.modelName} (${r.modelPublisher})`,
              tooltipText: `${r.modelName} (${r.modelPublisher})`
            }
          ])
        }
      )
    ] })
  ] });
}, fe = async (t, n, a, o, s) => {
  const l = ce(t);
  let u;
  try {
    const x = n.providerFields, v = await de(t, x.key);
    if (!v)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const m = ue(t, v);
    if (m.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${m.type}. Only Text Generation keys are currently supported.`
      );
    const p = {
      key: x.key,
      keyId: m.keyId || "",
      keyName: m.keyName || "",
      resourceName: m.name || "",
      environment: m.environment || "",
      deepLinkURL: m.deepLinkUrl || ""
    };
    if (x?.keyId === p.keyId)
      return;
    u = {
      ...n,
      providerFields: {
        ...p
      }
    }, o(u), s(u);
  } catch (x) {
    l.error("Error during MxCloud GenAI key import:", x), a(c.InvalidContent), u = O(n), o(u), s(u);
  }
}, ge = async (t, n) => {
  let a = [];
  const o = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const l = await W(t, n);
        return typeof l == "string" ? l : (a = l, !0);
      }
    }
  ], s = await t.ui.dialogs.showProgressDialog("Model versions", o);
  switch (s.result) {
    case "Success":
      return a;
    case "UserCancelled":
      return;
    case "Failure": {
      const l = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", u = s.failedStep?.error ?? "";
      await t.ui.messageBoxes.show("error", l, u);
      return;
    }
  }
};
async function Ce(t, n) {
  const a = n.providerFields, o = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: a?.key?.documentId
  });
  if (o.status === "ok")
    return {
      ...n,
      providerFields: {
        ...n.providerFields,
        key: {
          documentId: o.selected.id,
          qualifiedName: o.selected.module + "." + o.selected.name
        }
      }
    };
  if (o.status === "none")
    return { ...n, providerFields: { ...n.providerFields, key: void 0 } };
}
const D = () => {
}, ke = ({ studioPro: t, model: n, setModel: a, updateStudioProDocument: o }) => {
  const [s, l] = h.useState(), [u, x] = h.useState(null), [v, m] = h.useState(null), p = n.providerFields, g = async () => {
    p.key && z(t, p.key);
  }, d = async (i) => {
    const w = i.providerFields, b = await G(t, w.key);
    if (l(b), x(null), m(null), !b)
      fe(t, i, l, a, o);
    else {
      const S = O(i);
      a(S), o(S);
    }
  }, y = async () => {
    const i = await Ce(t, n);
    i && (a(i), o(i), await d(i));
  }, C = async () => {
    const i = await ge(t, n);
    i ? (x(i), m(/* @__PURE__ */ new Date())) : (m(null), x(null));
  }, f = (i) => {
    (p.key && i.includes(p.key.documentId) || i.includes("projectSettings")) && d(n);
  };
  H({
    studioPro: t,
    dependentIds: [p.key?.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: f
  }), h.useEffect(() => {
    d(n);
  }, []);
  const k = (i) => i === c.Required ? "Model key is required" : i === c.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === c.InvalidType ? "Selected constant must be of type string." : i === c.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, L = (i) => {
    let w = null;
    return new RegExp(/anthropic/i).test(i.id) && (w = /* @__PURE__ */ e.jsx(Z, { width: "1.3em", height: "1.3em" })), w;
  }, E = s === c.EmptyValue || s === c.InvalidContent || s === c.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      q,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: p.key?.qualifiedName ?? "",
        icon: p.key ? /* @__PURE__ */ e.jsx(N, {}) : void 0,
        buttonCaption: "Select...",
        onClick: y,
        onClickSecondary: p.key ? g : void 0,
        validate: () => k(s),
        buttonCaptionSecondary: p.key ? "Show" : void 0
      }
    ),
    !p.key && /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(B, {}) }),
      /* @__PURE__ */ e.jsx(M, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        R,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    E && /* @__PURE__ */ e.jsxs(T, { children: [
      /* @__PURE__ */ e.jsx(V, { children: s === c.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: s === c.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    p.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        A,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: p.resourceName,
          onChange: D,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        A,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: p.keyName,
          onChange: D,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        A,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: p.environment,
          onChange: D,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(I, { children: [
        /* @__PURE__ */ e.jsx(M, { children: /* @__PURE__ */ e.jsx(B, {}) }),
        /* @__PURE__ */ e.jsx(M, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(R, { href: p.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx($, { label: "Model versions", buttonCaption: "List models", onPress: C }),
      v && /* @__PURE__ */ e.jsxs(P, { children: [
        "Last updated: ",
        v.toLocaleString()
      ] }),
      u && /* @__PURE__ */ e.jsx(
        U,
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
          data: u.map((i) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(I, { alignItems: "center", children: [
                L(i),
                /* @__PURE__ */ e.jsx("div", { children: i.name })
              ] }),
              tooltipText: i.name
            },
            {
              cellContent: i.id,
              tooltipText: i.id
            }
          ])
        }
      )
    ] })
  ] });
}, we = re(), je = ({ studioPro: t, documentId: n }) => {
  const a = t.ui.messageBoxes, o = t.app.model.customBlobDocuments, [s, l] = h.useState(0), [u, x] = h.useState(!1), [v, m] = h.useState(we), p = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: K },
    { key: "Azure", caption: "Azure AI", icon: K }
  ];
  h.useEffect(() => {
    const y = (C) => {
      const { documents: f } = C;
      f.some((k) => k.documentId === n) && l((k) => k + 1);
    };
    return o.addEventListener("documentsChanged", y), () => {
      o.removeEventListener("documentsChanged", y);
    };
  }, []), h.useEffect(() => {
    o.getDocumentById(n).then(async (y) => {
      if (y && !("error" in y)) {
        const C = y.document.contents;
        m({ ...C }), x(!0);
      } else
        throw new Error(y?.error || "Document not found");
    }).catch(async (y) => {
      await a.show("error", "Error loading document", "Details: " + y?.message || y);
    });
  }, [s]);
  const g = async (y) => {
    pe(v, m, F(t, n), y)();
  }, d = () => v.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(Q, { studioPro: t, children: /* @__PURE__ */ e.jsxs(Y, { children: [
    !u && /* @__PURE__ */ e.jsx(ae, {}),
    u && /* @__PURE__ */ e.jsx(ee, { children: /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(le, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        ie,
        {
          ariaLabel: "Provider",
          label: "Provider",
          selectedKey: v.provider ?? null,
          options: p,
          onSelectionChange: g,
          validate: d
        }
      ),
      v.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        ke,
        {
          studioPro: t,
          model: v,
          setModel: m,
          updateStudioProDocument: F(t, n)
        }
      ),
      v.provider === "Azure" && /* @__PURE__ */ e.jsx(
        xe,
        {
          studioPro: t,
          model: v,
          setModel: m,
          updateStudioProDocument: F(t, n)
        }
      )
    ] }) }) })
  ] }) });
}, He = ne(je);
export {
  He as component
};
