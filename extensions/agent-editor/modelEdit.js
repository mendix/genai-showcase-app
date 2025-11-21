import { u as T, t as L, l as P, m as C, aH as M, aI as F, aJ as A, r as y, K as H, P as R, O, Q as B, B as S, ae as $, j as a, aq as G, ar as v, as as K, aK as U, ak as E, p as V, aj as b, aF as I, aG as h, aA as _, aB as W, aC as J, aD as z, aE as X } from "./componentLoader-kLajWKon.js";
import { m as q, c as Q } from "./index-DfLzWaLP.js";
import { K as Y, S as Z, N as ee } from "./ComboBox-BFvlfYuF.js";
function te(t, e) {
  let { elementType: r = "a", onPress: o, onPressStart: s, onPressEnd: n, onClick: l, isDisabled: c, ...u } = t, d = {};
  r !== "a" && (d = {
    role: "link",
    tabIndex: c ? void 0 : 0
  });
  let { focusableProps: f } = T(t, e), { pressProps: m, isPressed: i } = L({
    onPress: o,
    onPressStart: s,
    onPressEnd: n,
    onClick: l,
    isDisabled: c,
    ref: e
  }), p = P(u, {
    labelable: !0
  }), x = C(f, m), k = M(), j = F(t);
  return {
    isPressed: i,
    linkProps: C(p, j, {
      ...x,
      ...d,
      "aria-disabled": c || void 0,
      "aria-current": t["aria-current"],
      onClick: (D) => {
        var g;
        (g = m.onClick) === null || g === void 0 || g.call(m, D), A(D, k, t.href, t.routerOptions);
      }
    })
  };
}
const ne = /* @__PURE__ */ y.createContext(null), se = /* @__PURE__ */ y.forwardRef(function(e, r) {
  [e, r] = H(e, r, ne);
  let o = e.href && !e.isDisabled ? "a" : "span", { linkProps: s, isPressed: n } = te({
    ...e,
    elementType: o
  }, r), { hoverProps: l, isHovered: c } = R(e), { focusProps: u, isFocused: d, isFocusVisible: f } = O(), m = B({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: n,
      isHovered: c,
      isFocused: d,
      isFocusVisible: f
    }
  }), i = P(e, {
    global: !0
  });
  return delete i.onClick, /* @__PURE__ */ S.createElement(o, {
    ref: r,
    slot: e.slot || void 0,
    ...C(i, m, s, l, u),
    "data-focused": d || void 0,
    "data-hovered": c || void 0,
    "data-pressed": n || void 0,
    "data-focus-visible": f || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, m.children);
}), w = async (t, e, r) => {
  console.log("Save logic triggered");
  try {
    await t.app.model.customBlobDocuments.updateDocumentContent(r, e);
  } catch (o) {
    t.ui.notifications.show({
      title: "Failed to save document.",
      message: o.message
    });
  }
}, ae = (t, e, r, o, s) => async () => {
  if (!(e.provider === s && "key" in e.providerFields) && s === "MxCloudGenAI") {
    const l = { ...e, provider: s, providerFields: {
      environment: "",
      deepLinkURL: "",
      key: "",
      keyImportHelper: "",
      keyId: "",
      keyName: "",
      resourceName: ""
    } };
    r(l), await w(t, l, o);
  }
}, oe = $.div`
    position: relative;
    width: 100%;
`, re = $(Y)`
    width: 100%;
    resize: vertical;
    overflow: auto;
    min-height: 23px;
`, ie = ({
  label: t,
  ariaLabel: e,
  value: r,
  onChange: o,
  buttonCaption: s,
  onClick: n,
  placeholder: l,
  readOnly: c = !1,
  hasMarginTop: u = !1
}) => {
  const d = y.useRef(null), f = (p) => {
    p.style.height = "auto", p.style.height = p.scrollHeight + "px";
  }, m = (p) => {
    o && o(p.target.value);
  };
  y.useEffect(() => {
    d.current && f(d.current);
  }, [r]);
  const i = u ? 8 : 0;
  return /* @__PURE__ */ a.jsxs(G, { marginTop: i, children: [
    t && /* @__PURE__ */ a.jsx(v, { children: /* @__PURE__ */ a.jsx(K, { children: t }) }),
    /* @__PURE__ */ a.jsx(v, { fullWidth: !0, children: /* @__PURE__ */ a.jsxs(U, { children: [
      /* @__PURE__ */ a.jsx(v, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(oe, { children: /* @__PURE__ */ a.jsx(
        re,
        {
          ref: d,
          value: r,
          onChange: m,
          placeholder: l,
          readOnly: c,
          "aria-label": e,
          rows: 1
        }
      ) }) }),
      /* @__PURE__ */ a.jsx(
        E,
        {
          onPress: n,
          children: s
        }
      )
    ] }) })
  ] });
}, le = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ce = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var de = Object.defineProperty, ue = (t, e) => de(t, "name", { value: e, configurable: !0 });
const pe = ue((t) => a.jsx(V, { light: ce, dark: le, ...t }), "ExternalLinkIcon");
var me = Object.defineProperty, ye = (t, e) => me(t, "name", { value: e, configurable: !0 });
const fe = ye(({ children: t, href: e, ...r }) => a.jsxs(he, { href: e, ...r, children: [t ?? e, e && a.jsx(pe, {})] }), "Link"), he = $(se)`
    font-size: ${b.fontSizeMd};
    line-height: ${b.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${b.spacing4};
    }
`, xe = async (t, e, r) => {
  const o = await t.app.model.customBlobDocuments.getDocumentsOfType(q);
  for (const s of o) {
    if (s.id === r) continue;
    const n = await t.app.model.customBlobDocuments.getDocumentById(s.id);
    if (!("error" in n) && n.document.contents.provider === "MxCloudGenAI" && n.document.contents.providerFields.keyId === e)
      return console.error(`This key is already in use by model "${n.document.name}".`), t.ui.notifications.show({
        title: "Failed to import key",
        message: `This key is already in use by model "${n.document.name}".`
      }), !1;
  }
  return !0;
}, N = (t) => {
  const e = atob(t);
  return JSON.parse(e);
}, ke = (t, e, r, o, s) => async () => {
  try {
    if (!r.keyImportHelper)
      throw new Error("Missing key.");
    const n = N(r.keyImportHelper);
    if (console.log("Decoded key data:", n), !await xe(t, n.keyId, s))
      return;
    if (n.type !== "TEXT_GENERATION" && n.type !== "EMBEDDINGS_GENERATION")
      throw new Error("Invalid key type.");
    console.log("Old model:", e);
    const l = {
      key: r.keyImportHelper || "",
      keyImportHelper: "",
      keyId: n.keyId || "",
      keyName: n.keyName || "",
      resourceName: n.name || "",
      environment: n.environment || "",
      deepLinkURL: n.deepLinkUrl || ""
    }, c = {
      ...e,
      modelName: n.model || "",
      modelDisplayName: n.model || "",
      modelType: n.type === "TEXT_GENERATION" ? "Text generation" : n.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...l
      }
    };
    c.providerFields = {
      ...l
    }, console.log("Updated model:", c), o(c), await w(t, c, s);
  } catch (n) {
    console.error("Error during MxCloud GenAI key import:", n), t.ui.notifications.show({
      title: "Failed to import key",
      message: "Key import failed. Please provide a valid key from the Mendix Cloud GenAI portal and try again."
    });
  }
}, ge = (t, e, r) => async () => {
  try {
    if (!e.key)
      throw new Error("Missing key.");
    const o = N(e.key);
    console.log("Access token:", o.accessToken), console.log("Resource URL:", `${o.resourceBaseUrl}/converse`);
    const s = await t.network.httpProxy.getProxyUrl(`${o.resourceBaseUrl}/converse`);
    console.log("Proxy URL:", s);
    const n = await fetch(s, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": o.accessToken
      },
      body: JSON.stringify({
        inferenceConfig: { maxTokens: 10 },
        messages: [{ content: [{ text: "Hello World!" }], role: "user" }]
      })
    });
    if (console.log("Response status:", n.status), console.log("Response headers:", n.headers), n.status !== 200)
      throw console.log("Response: ", n), new Error(`HTTP ${n.status}: ${n.statusText}`);
    const l = await n.json();
    console.log("Connection successful:", l), t.ui.notifications.show({
      title: "Connection test successful",
      message: "Successfully connected to Mendix Cloud GenAI."
    });
  } catch (o) {
    console.error("Error while testing the connection to Mendix Cloud GenAI:", o), t.ui.notifications.show({
      title: "Connection test failed.",
      message: "Make sure you are connected to the internet, check if your key still exists in the Mendix GenAI portal and try again."
    });
  }
}, ve = ({
  studioPro: t,
  model: e,
  setModel: r,
  documentId: o
}) => {
  const s = e.providerFields, n = async (u) => {
    const d = {
      ...e,
      providerFields: {
        ...e.providerFields,
        keyImportHelper: u
      }
    };
    r(d), await w(t, d, o);
  }, l = async () => {
    ke(t, e, s, r, o)();
  }, c = async () => {
    ge(t, s, e.modelType)();
  };
  return /* @__PURE__ */ a.jsxs(I, { label: "Resource", children: [
    /* @__PURE__ */ a.jsx(
      ie,
      {
        label: "Model Key",
        ariaLabel: "Model Key",
        value: s.keyImportHelper || "",
        onChange: n,
        buttonCaption: "Apply",
        onClick: l
      }
    ),
    s.resourceName && /* @__PURE__ */ a.jsx(
      h,
      {
        label: "Resource Name",
        ariaLabel: "Resource Name",
        value: s.resourceName,
        onChange: () => {
        },
        readOnly: !0
      }
    ),
    e.modelName && /* @__PURE__ */ a.jsx(
      h,
      {
        label: "Model Name",
        ariaLabel: "Model Name",
        value: e.modelName,
        onChange: () => {
        },
        readOnly: !0
      }
    ),
    e.modelDisplayName && /* @__PURE__ */ a.jsx(
      h,
      {
        label: "Model Display Name",
        ariaLabel: "Model Display Name",
        value: e.modelDisplayName,
        onChange: () => {
        },
        readOnly: !0
      }
    ),
    s.keyName && /* @__PURE__ */ a.jsx(
      h,
      {
        label: "Key Name",
        ariaLabel: "Key Name",
        value: s.keyName,
        onChange: () => {
        },
        readOnly: !0
      }
    ),
    s.keyId && /* @__PURE__ */ a.jsx(
      h,
      {
        label: "Key ID",
        ariaLabel: "Key ID",
        value: s.keyId,
        onChange: () => {
        },
        readOnly: !0
      }
    ),
    s.environment && /* @__PURE__ */ a.jsx(
      h,
      {
        label: "Environment",
        ariaLabel: "Environment",
        value: s.environment,
        onChange: () => {
        },
        readOnly: !0
      }
    ),
    s.deepLinkURL && /* @__PURE__ */ a.jsx(
      fe,
      {
        href: s.deepLinkURL,
        children: "Open in Mendix GenAI Portal"
      }
    ),
    s.key && /* @__PURE__ */ a.jsx(
      E,
      {
        onPress: c,
        children: "Test Connection"
      }
    )
  ] });
}, be = Q(), Ce = ({ studioPro: t, documentId: e }) => {
  const r = t.ui.messageBoxes, o = t.app.model.customBlobDocuments, [s, n] = y.useState(0), [l, c] = y.useState(!1), [u, d] = y.useState(be), f = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI" }
  ], m = y.useCallback(async (i) => {
    await ae(t, u, d, e, i)();
  }, [t, u, d, e]);
  return y.useEffect(() => {
    const i = (p) => {
      const { documents: x } = p;
      x.some((k) => k.id === e) && n((k) => k + 1);
    };
    return o.addEventListener("documentsChanged", i), () => {
      o.removeEventListener("documentsChanged", i);
    };
  }, []), y.useEffect(() => {
    o.getDocumentById(e).then(async (i) => {
      if (i && !("error" in i)) {
        const p = i.document.contents, x = i.document.name;
        d({ ...p, name: x }), c(!0);
      } else
        throw new Error((i == null ? void 0 : i.error) || "Document not found");
    }).catch((i) => {
      r.show("error", "Error loading document", "Details: " + (i == null ? void 0 : i.message) || i);
    });
  }, [s]), /* @__PURE__ */ a.jsx(W, { studioPro: t, children: /* @__PURE__ */ a.jsxs(J, { children: [
    !l && /* @__PURE__ */ a.jsx("span", { children: "Loading document content..." }),
    l && /* @__PURE__ */ a.jsx(z, { children: /* @__PURE__ */ a.jsxs(X, { children: [
      /* @__PURE__ */ a.jsx(I, { label: "Common", children: /* @__PURE__ */ a.jsx(
        Z,
        {
          "aria-label": "Provider",
          label: "Provider",
          selectedKey: u.provider,
          onSelectionChange: m,
          children: f.map((i) => /* @__PURE__ */ a.jsx(ee, { id: i.key, children: i.caption }, i.key))
        }
      ) }),
      u.provider === "MxCloudGenAI" && /* @__PURE__ */ a.jsx(
        ve,
        {
          studioPro: t,
          model: u,
          setModel: d,
          documentId: e
        }
      )
    ] }) })
  ] }) });
}, Pe = _(Ce);
export {
  Pe as component
};
