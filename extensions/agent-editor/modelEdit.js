import { j as e } from "./jsx-runtime-CWOFuNcx.js";
import { r as y, a9 as Q, a6 as Y, a7 as ee, aa as te } from "./PageContainers-B4e_cfEm.js";
import { u as P, B as D, C as N, c as ne } from "./TextWithIcon-Cp5cdcPY.js";
import { g as W, c as Z, u as F } from "./modelUtils-CoZElJDn.js";
import { a as se, b as oe, d as re } from "./documentInitUtils-CvQbsMH5.js";
import { a as ae, b as ie } from "./modelIcons-Dn45IrnE.js";
import { C as le } from "./CenteredLoadingSpinner-BqLuFhP3.js";
import { i as T, C as c, B as $, v as G, a as de } from "./validationUtils-F9qtbBA1.js";
import { G as ce } from "./GroupBox-DjvYs9o_.js";
import { y as R } from "./Link-Baa_rm91.js";
import { u as H } from "./useExtensionPermissionsChanged-Crs-s4pn.js";
import { G as ue } from "./GenAIResourceIcon-CN9Xc-TC.js";
import { W as B } from "./Banner-CeIULR6d.js";
import { T as O } from "./Table-BYgJsym3.js";
import { T as q } from "./TextInputWithButton-G6t_g6R6.js";
import { D as I, a as L, d as z } from "./formelements-97vqGDJl.js";
import { h as K, g as pe } from "./constantUtils-D0RXxXWn.js";
import { createStudioProLogger as me } from "./logger-gMbuSAUF.js";
import { d as he } from "./mxCloudGenAIUtils-U7THU9De.js";
import { T as V } from "./TextInputLabeled-Cugqs2Ms.js";
const Ce = (n, t, a, s) => async () => {
  if (n.provider !== s) {
    if (s === "MxCloudGenAI") {
      const r = se(), d = {
        ...n,
        provider: s,
        providerFields: r
      };
      t(d), a(d);
    }
    if (s === "Azure") {
      const r = oe(), d = {
        ...n,
        provider: s,
        providerFields: r
      };
      t(d), a(d);
    }
    if (!s) {
      const r = {
        ...n,
        provider: void 0,
        providerFields: {}
      };
      t(r), a(r);
    }
  }
}, ye = async (n, t) => {
  let a = [];
  const s = [
    {
      title: "Getting available deployments",
      description: "Getting available deployments",
      action: async () => {
        const d = await W(n, t);
        return typeof d == "string" ? d : (a = d, !0);
      }
    }
  ], r = await n.ui.dialogs.showProgressDialog("Model deployments", s);
  switch (r.result) {
    case "Success":
      return a;
    case "UserCancelled":
      return;
    case "Failure": {
      const d = `No connection. Make sure you are connected to the internet and check that a valid key and endpoint have been set as value for the selected constants. 
The project endpoint must be of format https://resource-name.services.ai.azure.com/api/projects/project-name`, u = r.failedStep?.error ?? "";
      await n.ui.messageBoxes.show("error", d, u);
      return;
    }
  }
};
async function ve(n, t) {
  const a = t.providerFields, s = await n.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: a?.key?.documentId
  });
  if (s.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: s.selected.id,
          qualifiedName: s.selected.module + "." + s.selected.name
        }
      }
    };
  if (s.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
async function xe(n, t) {
  const a = t.providerFields, s = await n.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: a?.endpoint?.documentId
  });
  if (s.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        endpoint: {
          documentId: s.selected.id,
          qualifiedName: s.selected.module + "." + s.selected.name
        }
      }
    };
  if (s.status === "none")
    return { ...t, providerFields: { ...t.providerFields, endpoint: void 0 } };
}
const U = ({
  width: n = "1em",
  height: t = "1em",
  fill: a = "currentColor",
  className: s,
  style: r
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: n,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: s,
    style: r,
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
), fe = ({
  width: n = "1em",
  height: t = "1em",
  fill: a = "currentColor",
  className: s,
  style: r
}) => /* @__PURE__ */ e.jsx(
  "svg",
  {
    width: n,
    height: t,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: s,
    style: r,
    children: /* @__PURE__ */ e.jsx(
      "path",
      {
        d: "M14.0755 6.72948C14.2351 6.25714 14.2883 5.75855 14.2395 5.26434C14.1908 4.77013 14.0267 4.29342 13.7741 3.86481C13.3972 3.21752 12.8209 2.70582 12.1294 2.39967C11.4378 2.09352 10.6664 2.0148 9.9261 2.17224C9.59361 1.80049 9.18133 1.50309 8.72028 1.30191C8.25924 1.10072 7.76273 0.995758 7.25735 1.00013C6.49929 1.00013 5.76338 1.23193 5.14718 1.67366C4.53541 2.11101 4.07879 2.73206 3.84384 3.44057C3.35176 3.54116 2.88628 3.74235 2.47843 4.03538C2.07058 4.3284 1.72923 4.70016 1.48098 5.13314C1.09973 5.78042 0.940138 6.5283 1.01993 7.2718C1.09973 8.01531 1.41448 8.71508 1.92429 9.27052C1.7647 9.74286 1.7115 10.2414 1.76027 10.7357C1.81346 11.2299 1.97306 11.7066 2.22575 12.1352C2.60256 12.7825 3.17887 13.2942 3.87043 13.6003C4.562 13.9065 5.33337 13.9852 6.0737 13.8278C6.40619 14.1995 6.81847 14.4969 7.27951 14.6981C7.74056 14.8993 8.23707 15.0042 8.74245 14.9999C9.50051 14.9999 10.2408 14.7681 10.8526 14.3263C11.4644 13.889 11.921 13.2679 12.156 12.5551C12.648 12.4545 13.1135 12.2533 13.5214 11.9602C13.9292 11.6672 14.2661 11.2955 14.5188 10.8625C14.9001 10.2152 15.0597 9.46733 14.9799 8.72382C14.9001 7.98032 14.5853 7.28055 14.0755 6.72948ZM8.77348 14.0814C8.06862 14.0814 7.5189 13.8671 7.04456 13.4735C7.06672 13.4604 7.10219 13.4429 7.12879 13.4254L9.95269 11.8159C10.0236 11.7766 10.0813 11.7197 10.1212 11.6497C10.1611 11.5798 10.1832 11.501 10.1832 11.4223V7.49485L11.3757 8.17713C11.3757 8.17713 11.389 8.18588 11.3935 8.19025C11.3935 8.19462 11.3979 8.20337 11.4023 8.20774V11.4617C11.4023 12.9356 10.1566 14.0858 8.77348 14.0858V14.0814ZM3.03257 11.676C2.72225 11.1468 2.607 10.5214 2.71782 9.9178C2.73999 9.93092 2.77546 9.95279 2.80206 9.96591L5.62596 11.5754C5.69689 11.6147 5.77669 11.6366 5.85648 11.6366C5.93628 11.6366 6.01607 11.6147 6.087 11.5754L9.53598 9.61165V10.9718C9.53598 10.9718 9.53598 10.9849 9.53598 10.9937C9.53598 10.9981 9.52711 11.0068 9.52268 11.0112L6.66775 12.6381C6.05597 12.9837 5.33337 13.0799 4.65067 12.9006C3.96797 12.7212 3.38723 12.2795 3.03701 11.6803L3.03257 11.676ZM2.28781 5.59236C2.59813 5.05879 3.0902 4.65205 3.67095 4.44212L3.67095 7.75727C3.67095 7.83599 3.69311 7.91472 3.73301 7.98469C3.77291 8.05467 3.83054 8.11153 3.90147 8.15089L7.35045 10.1146L6.15793 10.7969C6.15793 10.7969 6.14464 10.8013 6.1402 10.8056C6.13134 10.8056 6.1269 10.8056 6.11804 10.8056L3.2631 9.17867C2.65133 8.82879 2.20802 8.25585 2.02626 7.5867C1.8445 6.91317 1.93759 6.20028 2.28781 5.59673V5.59236ZM12.0983 7.84474L8.64936 5.88101L9.84186 5.20311C9.84186 5.20311 9.85517 5.19874 9.8596 5.19437H9.88177L12.7367 6.82133C13.1756 7.07062 13.5302 7.438 13.7652 7.87973C14.0001 8.32146 14.0977 8.82004 14.0578 9.31425C14.0134 9.81284 13.8273 10.2852 13.5214 10.6788C13.2155 11.0768 12.8032 11.3786 12.3289 11.5491V8.23398C12.3289 8.15526 12.3067 8.07654 12.2668 8.00656C12.2269 7.93658 12.1693 7.87973 12.0983 7.84036V7.84474ZM13.2864 6.07782C13.2864 6.07782 13.2288 6.04284 13.2022 6.02972L10.3783 4.42025C10.3073 4.38089 10.2275 4.35902 10.1478 4.35902C10.068 4.35902 9.98373 4.38089 9.91723 4.42025L6.46825 6.38397V5.0238C6.46825 5.0238 6.46825 5.01068 6.46825 5.00193C6.46825 4.99756 6.47712 4.98881 6.48156 4.98444L9.33649 3.35748C9.77537 3.10818 10.2719 2.98572 10.7773 3.00759C11.2826 3.02946 11.7703 3.19128 12.1826 3.47556C12.5948 3.75984 12.9185 4.15784 13.1135 4.61706C13.3086 5.07628 13.3662 5.58361 13.282 6.07345L13.2864 6.07782ZM5.81659 8.50514L4.62407 7.82287C4.62407 7.82287 4.61077 7.81412 4.60634 7.80975C4.60634 7.80538 4.60191 7.79663 4.59747 7.79226L4.59747 4.53833C4.59747 4.03975 4.74376 3.55429 5.01418 3.13005C5.2846 2.71019 5.67029 2.37343 6.13133 2.1635C6.58795 1.95357 7.09776 1.87484 7.5987 1.93607C8.09964 2.00167 8.57399 2.20286 8.95968 2.52213C8.93751 2.53525 8.90204 2.55274 8.87544 2.57024L6.05154 4.1797C5.98061 4.21907 5.92298 4.27592 5.88308 4.3459C5.84318 4.41587 5.82102 4.4946 5.82102 4.57332V8.50077L5.81659 8.50514ZM6.46382 7.12748L7.99769 6.25277L9.53155 7.12748V8.8769L7.99769 9.75161L6.46382 8.8769V7.12748Z",
        fill: a
      }
    )
  }
), ge = ({ studioPro: n, model: t, setModel: a, updateStudioProDocument: s }) => {
  const [r, d] = y.useState(), [u, v] = y.useState(), [h, m] = y.useState(null), [p, f] = y.useState(null), l = t.providerFields, C = async () => {
    l.key && K(n, l.key);
  }, g = async () => {
    l.endpoint && K(n, l.endpoint);
  }, x = async (o) => {
    const w = o.providerFields, X = await G(n, w.key);
    d(X);
    const J = await G(n, w.endpoint);
    v(J), m(null), f(null);
  }, j = async () => {
    const o = await xe(n, t);
    o && (a(o), s(o), x(o));
  }, S = async () => {
    const o = await ve(n, t);
    o && (a(o), s(o), x(o));
  }, E = async () => {
    const o = await ye(n, t);
    o ? (m(o), f(/* @__PURE__ */ new Date())) : (f(null), m(null));
  }, i = (o) => {
    (l.key && o.includes(l.key.documentId) || l.endpoint && o.includes(l.endpoint.documentId) || o.includes("projectSettings")) && x(t);
  };
  P({
    studioPro: n,
    dependentIds: [l.key?.documentId, l.endpoint?.documentId].filter(
      (o) => !!o
    ),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: i
  }), H({
    studioPro: n,
    onPermissionsChanged: () => x(t)
  }), y.useEffect(() => {
    x(t);
  }, []);
  const k = (o) => o === c.Required ? "This field is required" : o === c.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : o === c.InvalidType ? "Selected constant must be of type string." : o === c.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, M = (o) => {
    let w = null;
    return new RegExp(/openai/i).test(o.modelPublisher) ? w = /* @__PURE__ */ e.jsx(fe, { width: "1.3em", height: "1.3em" }) : new RegExp(/anthropic/i).test(o.modelPublisher) ? w = /* @__PURE__ */ e.jsx(U, { width: "1.3em", height: "1.3em" }) : w = /* @__PURE__ */ e.jsx(ue, { width: "1.3em", height: "1.3em" }), w;
  }, b = r === c.EmptyValue || r === c.InvalidContent || r === c.PrivateValue, _ = u === c.EmptyValue || u === c.InvalidContent || u === c.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      q,
      {
        label: "Project endpoint",
        ariaLabel: "Project endpoint",
        value: l.endpoint?.qualifiedName ?? "",
        icon: l.endpoint ? /* @__PURE__ */ e.jsx(T, {}) : void 0,
        buttonCaption: "Select...",
        onClick: j,
        onClickSecondary: l.endpoint ? g : void 0,
        validate: () => k(u),
        buttonCaptionSecondary: l.endpoint ? "Show" : void 0
      }
    ),
    _ && /* @__PURE__ */ e.jsxs(B, { children: [
      /* @__PURE__ */ e.jsx(D, { children: u === c.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: u === c.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the endpoint constant. E.g. https://resource-name.services.ai.azure.com/api/projects/project-name" })
    ] }),
    /* @__PURE__ */ e.jsx(
      q,
      {
        label: "API key",
        ariaLabel: "API key",
        value: l.key?.qualifiedName ?? "",
        icon: l.key ? /* @__PURE__ */ e.jsx(T, {}) : void 0,
        buttonCaption: "Select...",
        onClick: S,
        onClickSecondary: l.key ? C : void 0,
        validate: () => k(r),
        buttonCaptionSecondary: l.key ? "Show" : void 0
      }
    ),
    b && /* @__PURE__ */ e.jsxs(B, { children: [
      /* @__PURE__ */ e.jsx(D, { children: r === c.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: r === c.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    (!l.endpoint || !l.key) && /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(z, {}) }),
      /* @__PURE__ */ e.jsx(L, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        R,
        {
          href: "https://docs.mendix.com/agents/reference-guide/external-connectors/openai/#azure-resource-name",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "How to get the project endpoint and API key"
        }
      ) })
    ] }),
    l.endpoint && l.key && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx($, { label: "Model versions", buttonCaption: "List models", onPress: E }),
      p && /* @__PURE__ */ e.jsxs(N, { children: [
        "Last updated: ",
        p.toLocaleString()
      ] }),
      h && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          O,
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
            data: h.map((o) => [
              {
                cellContent: o.name,
                tooltipText: o.name
              },
              {
                cellContent: /* @__PURE__ */ e.jsxs(I, { alignItems: "center", children: [
                  M(o),
                  /* @__PURE__ */ e.jsx("div", { children: `${o.modelName} (${o.modelPublisher})` })
                ] }),
                tooltipText: `${o.modelName} (version ${o.modelVersion} by ${o.modelPublisher})`
              }
            ])
          }
        ),
        /* @__PURE__ */ e.jsx(N, { children: "This list may contain models that are not text-to-text supported." })
      ] })
    ] })
  ] });
}, je = async (n, t, a, s, r) => {
  const d = me(n);
  let u;
  try {
    const v = t.providerFields, h = await pe(n, v.key);
    if (!h)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const m = he(n, h);
    if (m.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${m.type}. Only Text Generation keys are currently supported.`
      );
    const p = {
      key: v.key,
      keyId: m.keyId || "",
      keyName: m.keyName || "",
      resourceName: m.name || "",
      environment: m.environment || "",
      deepLinkURL: m.deepLinkUrl || ""
    };
    if (v?.keyId === p.keyId)
      return;
    u = {
      ...t,
      providerFields: {
        ...p
      }
    }, s(u), r(u);
  } catch (v) {
    d.error("Error during MxCloud GenAI key import:", v), a(c.InvalidContent), u = Z(t), s(u), r(u);
  }
}, ke = async (n, t) => {
  let a = [];
  const s = [
    {
      title: "Getting available model versions",
      description: "Getting available model versions",
      action: async () => {
        const d = await W(n, t);
        return typeof d == "string" ? d : (a = d, !0);
      }
    }
  ], r = await n.ui.dialogs.showProgressDialog("Model versions", s);
  switch (r.result) {
    case "Success":
      return a;
    case "UserCancelled":
      return;
    case "Failure": {
      const d = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", u = r.failedStep?.error ?? "";
      await n.ui.messageBoxes.show("error", d, u);
      return;
    }
  }
};
async function we(n, t) {
  const a = t.providerFields, s = await n.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" },
    selectedElementId: a?.key?.documentId
  });
  if (s.status === "ok")
    return {
      ...t,
      providerFields: {
        ...t.providerFields,
        key: {
          documentId: s.selected.id,
          qualifiedName: s.selected.module + "." + s.selected.name
        }
      }
    };
  if (s.status === "none")
    return { ...t, providerFields: { ...t.providerFields, key: void 0 } };
}
const A = () => {
}, Le = ({ studioPro: n, model: t, setModel: a, updateStudioProDocument: s }) => {
  const [r, d] = y.useState(), [u, v] = y.useState(null), [h, m] = y.useState(null), p = t.providerFields, f = async () => {
    p.key && K(n, p.key);
  }, l = async (i) => {
    const k = i.providerFields, M = await G(n, k.key);
    if (d(M), v(null), m(null), !M)
      je(n, i, d, a, s);
    else {
      const b = Z(i);
      a(b), s(b);
    }
  }, C = async () => {
    const i = await we(n, t);
    i && (a(i), s(i), await l(i));
  }, g = async () => {
    const i = await ke(n, t);
    i ? (v(i), m(/* @__PURE__ */ new Date())) : (m(null), v(null));
  }, x = (i) => {
    (p.key && i.includes(p.key.documentId) || i.includes("projectSettings")) && l(t);
  };
  P({
    studioPro: n,
    dependentIds: [p.key?.documentId].filter((i) => !!i),
    watchProjectSettings: !0,
    onDependentDocumentsChanged: x
  }), H({
    studioPro: n,
    onPermissionsChanged: () => l(t)
  }), y.useEffect(() => {
    l(t);
  }, []);
  const j = (i) => i === c.Required ? "Model key is required" : i === c.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : i === c.InvalidType ? "Selected constant must be of type string." : i === c.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, S = (i) => {
    let k = null;
    return new RegExp(/anthropic/i).test(i.id) && (k = /* @__PURE__ */ e.jsx(U, { width: "1.3em", height: "1.3em" })), k;
  }, E = r === c.EmptyValue || r === c.InvalidContent || r === c.PrivateValue;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      q,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: p.key?.qualifiedName ?? "",
        icon: p.key ? /* @__PURE__ */ e.jsx(T, {}) : void 0,
        buttonCaption: "Select...",
        onClick: C,
        onClickSecondary: p.key ? f : void 0,
        validate: () => j(r),
        buttonCaptionSecondary: p.key ? "Show" : void 0
      }
    ),
    !p.key && /* @__PURE__ */ e.jsxs(I, { children: [
      /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(z, {}) }),
      /* @__PURE__ */ e.jsx(L, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
        R,
        {
          href: "https://genai.home.mendix.com/p/resources",
          target: "_blank",
          rel: "noreferrer,noopener",
          children: "Create a key in the portal"
        }
      ) })
    ] }),
    E && /* @__PURE__ */ e.jsxs(B, { children: [
      /* @__PURE__ */ e.jsx(D, { children: r === c.PrivateValue ? "Missing permissions" : "Invalid constant value" }),
      /* @__PURE__ */ e.jsx("div", { children: r === c.PrivateValue ? "Private constants require additional permissions for local use. Grant access via View > Extensions and reopen the current tab." : "In order to test your Model locally, please set a valid value for the key constant." })
    ] }),
    p.keyId && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        V,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: p.resourceName,
          onChange: A,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        V,
        {
          label: "Key name",
          ariaLabel: "Key name",
          value: p.keyName,
          onChange: A,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsx(
        V,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: p.environment,
          onChange: A,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ e.jsxs(I, { children: [
        /* @__PURE__ */ e.jsx(L, { children: /* @__PURE__ */ e.jsx(z, {}) }),
        /* @__PURE__ */ e.jsx(L, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(R, { href: p.deepLinkURL, target: "_blank", rel: "noreferrer,noopener", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ e.jsx($, { label: "Model versions", buttonCaption: "List models", onPress: g }),
      h && /* @__PURE__ */ e.jsxs(N, { children: [
        "Last updated: ",
        h.toLocaleString()
      ] }),
      u && /* @__PURE__ */ e.jsx(
        O,
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
                S(i),
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
}, Ie = re(), Me = ({ studioPro: n, documentId: t }) => {
  const a = n.ui.messageBoxes, s = n.app.model.customBlobDocuments, [r, d] = y.useState(0), [u, v] = y.useState(!1), [h, m] = y.useState(Ie), p = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: ae },
    { key: "Azure", caption: "Azure AI", icon: ie }
  ];
  y.useEffect(() => {
    const C = (g) => {
      const { documents: x } = g;
      x.some((j) => j.documentId === t) && d((j) => j + 1);
    };
    return s.addEventListener("documentsChanged", C), () => {
      s.removeEventListener("documentsChanged", C);
    };
  }, []), y.useEffect(() => {
    s.getDocumentById(t).then(async (C) => {
      if (C && !("error" in C)) {
        const g = C.document.contents;
        m({ ...g }), v(!0);
      } else
        throw new Error(C?.error || "Document not found");
    }).catch(async (C) => {
      await a.show("error", "Error loading document", "Details: " + C?.message || C);
    });
  }, [r]);
  const f = async (C) => {
    Ce(h, m, F(n, t), C)();
  }, l = () => h.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ e.jsx(Q, { studioPro: n, children: /* @__PURE__ */ e.jsxs(Y, { children: [
    !u && /* @__PURE__ */ e.jsx(le, {}),
    u && /* @__PURE__ */ e.jsx(ee, { children: /* @__PURE__ */ e.jsx(te, { children: /* @__PURE__ */ e.jsxs(ce, { label: "Configuration", children: [
      /* @__PURE__ */ e.jsx(
        de,
        {
          ariaLabel: "Provider",
          label: "Provider",
          selectedKey: h.provider ?? null,
          options: p,
          onSelectionChange: f,
          validate: l
        }
      ),
      h.provider === "MxCloudGenAI" && /* @__PURE__ */ e.jsx(
        Le,
        {
          studioPro: n,
          model: h,
          setModel: m,
          updateStudioProDocument: F(n, t)
        }
      ),
      h.provider === "Azure" && /* @__PURE__ */ e.jsx(
        ge,
        {
          studioPro: n,
          model: h,
          setModel: m,
          updateStudioProDocument: F(n, t)
        }
      )
    ] }) }) })
  ] }) });
}, Oe = ne(Me);
export {
  Oe as component
};
