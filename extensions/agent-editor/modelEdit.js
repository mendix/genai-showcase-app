import { R as e, r as h, a4 as w, a9 as C, ai as S, ah as T, ae as B, af as N, aj as R, a1 as V } from "./formelements-xoDBPsLY.js";
import { u as K, B as q, a as W, c as O, C as H } from "./TextWithIcon-BnQ_W6GL.js";
import { c as F, g as U, u as E } from "./modelUtils-DF7lDErM.js";
import { p as P, q as Z, r as _, s as z, t as $ } from "./index-CZgjY607.js";
import { C as m, i as X, B as J, v as Q, a as Y } from "./ButtonWithLabel-DL3guaBz.js";
import { y as D, W as ee } from "./Banner-DMJvEk30.js";
import { createStudioProLogger as ne } from "./logger-gMbuSAUF.js";
import { d as te } from "./mxCloudGenAIUtils-klha5VC-.js";
import { T as se } from "./Table-B8T3E1v3.js";
import { T as M } from "./TextInputLabeled-BZ-d3CSA.js";
import { T as oe } from "./TextInputWithButton-CJr1wTWV.js";
const re = (n, s, i, o) => async () => {
  if (!(n.provider === o && "key" in n.providerFields) && o === "MxCloudGenAI") {
    const a = P(), l = { ...n, provider: o, providerFields: a };
    s(l), i(l);
  }
}, ae = async (n, s, i, o, a) => {
  const l = ne(n);
  let c;
  try {
    const p = s.providerFields, y = await Z(n, p.key);
    if (!y)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const d = te(n, y);
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
      ...s,
      providerFields: {
        ...r
      }
    }, o(c), a(c);
  } catch (p) {
    l.error("Error during MxCloud GenAI key import:", p), i(m.InvalidContent), c = F(s), o(c), a(c);
  }
}, ie = async (n, s) => {
  let i = [];
  const o = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const l = await U(n, s);
        return typeof l == "string" ? l : (i = l, !0);
      }
    }
  ], a = await n.ui.dialogs.showProgressDialog("Model versions", o);
  switch (a.result) {
    case "Success":
      return i;
    case "UserCancelled":
      return;
    case "Failure": {
      const l = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", c = a.failedStep?.error ?? "";
      await n.ui.messageBoxes.show("error", l, c);
      return;
    }
  }
};
async function le(n, s) {
  const i = s.providerFields, o = await n.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: i?.key?.documentId
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
const de = ({
  width: n = "1em",
  height: s = "1em",
  fill: i = "currentColor",
  className: o,
  style: a
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: n,
    height: s,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: o,
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
}, ce = ({ studioPro: n, model: s, setModel: i, updateStudioProDocument: o }) => {
  const [a, l] = h.useState(), [c, p] = h.useState(null), [y, d] = h.useState(null), r = s.providerFields, k = async () => {
    r.key && _(n, r.key);
  }, v = async (t) => {
    const f = t.providerFields, L = await Q(n, f.key);
    if (l(L), p(null), d(null), !L)
      ae(n, t, l, i, o);
    else {
      const b = F(t);
      i(b), o(b);
    }
  }, u = async () => {
    const t = await le(n, s);
    t && (i(t), o(t), await v(t));
  }, x = async () => {
    const t = await ie(n, s);
    t ? (p(t), d(/* @__PURE__ */ new Date())) : (d(null), p(null));
  }, j = (t) => {
    (r.key && t.includes(r.key.documentId) || t.includes("projectSettings")) && v(s);
  };
  K({
    studioPro: n,
    dependentIds: [r.key?.documentId].filter((t) => !!t),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: j
  }), h.useEffect(() => {
    v(s);
  }, []);
  const g = (t) => t === m.Required ? "Model key is required" : t === m.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : t === m.InvalidType ? "Selected constant must be of type string." : t === m.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, A = (t) => {
    let f = null;
    return new RegExp(/anthropic/i).test(t.id) && (f = /* @__PURE__ */ e.jsx(de, {})), f;
  }, G = a === m.EmptyValue || a === m.InvalidContent || a === m.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      oe,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: r.key?.qualifiedName ?? "",
        icon: r.key ? /* @__PURE__ */ e.jsx(X, {}) : void 0,
        buttonCaption: "Select...",
        onClick: u,
        onClickSecondary: r.key ? k : void 0,
        validate: () => g(a),
        buttonCaptionSecondary: r.key ? "Show" : void 0
      }
    ),
    !r.key && /* @__PURE__ */ e.jsxs(w, { children: [
      /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsx(S, {}) }),
      /* @__PURE__ */ e.jsx(C, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        D,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    G && /* @__PURE__ */ e.jsxs(ee, { children: [
      /* @__PURE__ */ e.jsx(q, { children: a === m.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: a === m.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    r.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        M,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: r.resourceName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        M,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: r.keyName,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        M,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: r.environment,
          onChange: I,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(w, { children: [
        /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsx(S, {}) }),
        /* @__PURE__ */ e.jsx(C, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(D, { href: r.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx(J, { label: "Model versions", buttonCaption: "List models", onPress: x }),
      y && /* @__PURE__ */ e.jsxs(W, { children: [
        "Last updated: ",
        y.toLocaleString()
      ] }),
      c && /* @__PURE__ */ e.jsx(
        se,
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
          data: c.map((t) => [
            {
              cellContent: /* @__PURE__ */ e.jsxs(w, { alignItems: "center", children: [
                A(t),
                /* @__PURE__ */ e.jsx("div", { children: t.name })
              ] }),
              tooltipText: t.name
            },
            {
              cellContent: t.id,
              tooltipText: t.id
            }
          ])
        }
      )
    ] })
  ] });
}, ue = z(), pe = ({ studioPro: n, documentId: s }) => {
  const i = n.ui.messageBoxes, o = n.app.model.customBlobDocuments, [a, l] = h.useState(0), [c, p] = h.useState(!1), [y, d] = h.useState(ue), r = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: $ }
  ];
  h.useEffect(() => {
    const u = (x) => {
      const { documents: j } = x;
      j.some((g) => g.documentId === s) && l((g) => g + 1);
    };
    return o.addEventListener("documentsChanged", u), () => {
      o.removeEventListener("documentsChanged", u);
    };
  }, []), h.useEffect(() => {
    o.getDocumentById(s).then(async (u) => {
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
    re(y, d, E(n, s), u)();
  }, v = () => y.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(T, { studioPro: n, children: /* @__PURE__ */ e.jsxs(B, { children: [
    !c && /* @__PURE__ */ e.jsx(H, {}),
    c && /* @__PURE__ */ e.jsx(N, { children: /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsxs(V, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        Y,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: y.provider,
          options: r,
          onSelectionChange: k,
          validate: v
        }
      ),
      y.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        ce,
        {
          studioPro: n,
          model: y,
          setModel: d,
          updateStudioProDocument: E(n, s)
        }
      )
    ] }) }) })
  ] }) });
}, Me = O(pe);
export {
  Me as component
};
