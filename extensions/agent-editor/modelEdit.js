import { B, A as S, l as P, m as I, as as G, at as O, au as V, r as u, J as K, a6 as R, O as U, L as W, v as _, ab as D, j as t, p as z, ah as w, av as v, aw as x, ax as $, ay as q, az as E, ao as A, ap as J, aq as X, ar as Q, aA as Y } from "./TextInputWithIcon-BHM6tQnm.js";
import { c as Z } from "./componentLoader-CAsiyhiP.js";
import { a as ee, b as re, c as te, d as ne } from "./modelUtils-BKeUOTig.js";
import { c as F } from "./logger-BM6R1Quw.js";
import { S as ae, N as se, T as oe } from "./TextAreaAutogrow-D57DVpIT.js";
import { T as ie } from "./TextWithIcon-Bc9lM5Pv.js";
import { S as le } from "./Banner-XhhlBqtW.js";
import { T as b } from "./TextInputLabeled-C8A7862R.js";
function ce(r, e) {
  let { elementType: s = "a", onPress: a, onPressStart: o, onPressEnd: i, onClick: n, isDisabled: c, ...l } = r, p = {};
  s !== "a" && (p = {
    role: "link",
    tabIndex: c ? void 0 : 0
  });
  let { focusableProps: h } = B(r, e), { pressProps: f, isPressed: y } = S({
    onPress: a,
    onPressStart: o,
    onPressEnd: i,
    onClick: n,
    isDisabled: c,
    ref: e
  }), d = P(l, {
    labelable: !0
  }), m = I(h, f), g = G(), k = O(r);
  return {
    isPressed: y,
    linkProps: I(d, k, {
      ...m,
      ...p,
      "aria-disabled": c || void 0,
      "aria-current": r["aria-current"],
      onClick: (T) => {
        var j;
        (j = f.onClick) === null || j === void 0 || j.call(f, T), V(T, g, r.href, r.routerOptions);
      }
    })
  };
}
const de = /* @__PURE__ */ u.createContext(null), ue = /* @__PURE__ */ u.forwardRef(function(e, s) {
  [e, s] = K(e, s, de);
  let a = e.href && !e.isDisabled ? "a" : "span", { linkProps: o, isPressed: i } = ce({
    ...e,
    elementType: a
  }, s), { hoverProps: n, isHovered: c } = R(e), { focusProps: l, isFocused: p, isFocusVisible: h } = U(), f = W({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: i,
      isHovered: c,
      isFocused: p,
      isFocusVisible: h
    }
  }), y = P(e, {
    global: !0
  });
  return delete y.onClick, /* @__PURE__ */ _.createElement(a, {
    ref: s,
    slot: e.slot || void 0,
    ...I(y, f, o, n, l),
    "data-focused": p || void 0,
    "data-hovered": c || void 0,
    "data-pressed": i || void 0,
    "data-focus-visible": h || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, f.children);
}), C = async (r, e, s) => {
  const a = F(r);
  try {
    await r.app.model.customBlobDocuments.updateDocumentContent(s, e);
  } catch (o) {
    a.error("Failed to save model document:", o), r.ui.notifications.show({
      title: "Failed to save model document.",
      message: o.message
    });
  }
}, pe = (r, e, s, a, o) => async () => {
  if (!(e.provider === o && "key" in e.providerFields) && o === "MxCloudGenAI") {
    const i = ee(), n = { ...e, provider: o, providerFields: i };
    s(n), C(r, n, a);
  }
}, me = D.div`
    & [role="combobox"] {
        ${(r) => r.iconurl && `
            background-image: url(${r.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, fe = ({
  ariaLabel: r,
  isDisabled: e = !1,
  label: s,
  options: a,
  onSelectionChange: o,
  selectedKey: i,
  validate: n
}) => {
  const c = a.find((l) => l.key === i);
  return /* @__PURE__ */ t.jsx(me, { iconurl: c == null ? void 0 : c.icon, children: /* @__PURE__ */ t.jsx(
    ae,
    {
      "aria-label": r,
      isDisabled: e,
      label: s,
      selectedKey: i,
      onSelectionChange: o,
      validate: n,
      children: a.map((l) => /* @__PURE__ */ t.jsx(
        se,
        {
          id: l.key,
          textValue: l.caption,
          children: /* @__PURE__ */ t.jsx(
            ie,
            {
              text: l.caption,
              icon: l.icon
            }
          )
        },
        l.key
      ))
    }
  ) });
}, he = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", xe = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ye = Object.defineProperty, ke = (r, e) => ye(r, "name", { value: e, configurable: !0 });
const ge = ke((r) => t.jsx(z, { light: xe, dark: he, ...r }), "ExternalLinkIcon");
var be = Object.defineProperty, ve = (r, e) => be(r, "name", { value: e, configurable: !0 });
const M = ve(({ children: r, href: e, ...s }) => t.jsxs(Ce, { href: e, ...s, children: [r ?? e, e && t.jsx(ge, {})] }), "Link"), Ce = D(ue)`
    font-size: ${w.fontSizeMd};
    line-height: ${w.lineHeightMd};
    color: ${({ theme: r }) => r.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${w.spacing4};
    }
`, L = (r) => {
  const e = atob(r);
  return JSON.parse(e);
}, N = (r, e) => async () => {
  const s = F(r);
  try {
    const a = e.providerFields;
    if (!a.key)
      throw new Error("Missing key.");
    const o = L(a.key), i = await r.network.httpProxy.getProxyUrl(`${o.resourceBaseUrl}`), n = await fetch(i, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": o.accessToken
      },
      credentials: "omit"
    });
    if (n.status !== 200)
      throw new Error(`HTTP ${n.status}: ${n.statusText}`);
    return await n.json();
  } catch (a) {
    return s.error("Error invoking MxCloud GenAI resource API:", a), a instanceof Error ? a.message : "";
  }
}, H = (r, e) => ({
  ...r,
  name: (e == null ? void 0 : e.model) || r.name,
  displayName: e && (e.modelName || e.model) || r.displayName
}), $e = (r, e, s, a) => async () => {
  const o = await N(r, e)();
  if (typeof o == "string")
    return o;
  const i = H(e, o);
  return (i.displayName !== e.displayName || i.name !== e.name) && (s(i), C(r, i, a)), !0;
}, je = (r, e, s, a) => async () => {
  const o = F(r);
  try {
    const i = e.providerFields;
    if (!i.keyImportHelper)
      throw new Error("No key import data found. Please paste a valid key from the MxCloud GenAI portal.");
    const n = L(i.keyImportHelper);
    if (n.type !== "TEXT_GENERATION")
      throw new Error(`Unsupported key type: ${n.type}. Only Text Generation keys are currently supported.`);
    const c = {
      key: i.keyImportHelper || "",
      keyImportHelper: "",
      keyId: n.keyId || "",
      keyName: n.keyName || "",
      resourceName: n.name || "",
      environment: n.environment || "",
      deepLinkURL: n.deepLinkUrl || ""
    }, l = {
      ...e,
      name: n.model || "",
      displayName: n.model || "",
      type: n.type === "TEXT_GENERATION" ? "Text generation" : n.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...c
      }
    };
    s(l), C(r, l, a), N(r, l)().then((p) => {
      if (typeof p != "string") {
        const h = H(l, p);
        s(h), C(r, h, a).catch(
          (f) => o.error("Failed to update model document after API response:", f)
        );
      } else
        o.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    });
  } catch (i) {
    o.error("Error during MxCloud GenAI key import:", i);
    const n = "Failed to import MxCloud GenAI model key.", c = "Error during MxCloud GenAI key import: " + i;
    r.ui.messageBoxes.show(
      "error",
      n,
      c
    );
  }
}, we = (r) => {
  const e = r.providerFields;
  if (!e.key && !e.keyImportHelper)
    return "Key is required.";
  if (!e.key)
    return "Key wasn't imported.";
};
function Ie(r, e, s, a) {
  const o = {
    ...r,
    providerFields: {
      ...r.providerFields,
      keyImportHelper: e
    }
  };
  return C(s, o, a), o;
}
async function Fe(r, e, s, a) {
  var n;
  const o = [{
    title: "Testing connection",
    description: "Testing connection",
    action: async () => $e(r, e, s, a)()
  }], i = await r.ui.dialogs.showProgressDialog("Testing connection", o);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure":
      const c = "No connection.", l = `Make sure you are connected to the internet and check if your key still exists in the Mendix GenAI portal and try again.
` + (((n = i.failedStep) == null ? void 0 : n.error) ?? "");
      return r.ui.messageBoxes.show(
        "error",
        c,
        l
      ), !1;
  }
}
const Te = ({
  label: r,
  ariaLabel: e,
  value: s,
  onChange: a,
  buttonCaption: o,
  onClick: i,
  description: n,
  readOnly: c = !1,
  hasMarginTop: l = !1,
  rows: p = 1,
  validate: h
}) => {
  const f = l ? 8 : 0;
  return /* @__PURE__ */ t.jsxs(v, { marginTop: f, children: [
    r && /* @__PURE__ */ t.jsx(x, { children: /* @__PURE__ */ t.jsx($, { children: r }) }),
    /* @__PURE__ */ t.jsx(x, { fullWidth: !0, children: /* @__PURE__ */ t.jsxs(q, { children: [
      /* @__PURE__ */ t.jsx(x, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
        oe,
        {
          ariaLabel: e,
          value: s,
          onChange: a,
          description: n,
          readOnly: c,
          rows: p,
          validate: h
        }
      ) }),
      /* @__PURE__ */ t.jsx(
        E,
        {
          onPress: i,
          children: o
        }
      )
    ] }) })
  ] });
}, Me = ({
  onPress: r,
  buttonCaption: e
}) => {
  const [s, a] = u.useState(!1), o = async () => {
    if (!(!r || s)) {
      a(!0);
      try {
        await r();
      } finally {
        a(!1);
      }
    }
  };
  return /* @__PURE__ */ t.jsx(v, { children: /* @__PURE__ */ t.jsx(x, { children: /* @__PURE__ */ t.jsx(
    E,
    {
      onPress: o,
      isDisabled: s,
      children: e
    }
  ) }) });
}, Pe = ({
  studioPro: r,
  model: e,
  setModel: s,
  documentId: a
}) => {
  const [o, i] = u.useState(!1), n = e.providerFields, c = u.useCallback(() => {
  }, []), l = u.useRef(null);
  u.useEffect(() => {
    if (o) {
      const m = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(m);
    }
  }, [o]);
  const p = u.useCallback((m) => {
    const g = {
      ...e,
      providerFields: { ...e.providerFields, keyImportHelper: m }
    };
    s(g), l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      const k = Ie(e, m, r, a);
      s(k);
    }, 300);
  }, [r, e, a]), h = u.useCallback(async () => {
    je(r, e, s, a)(), i(!1);
  }, [r, e, a]), f = u.useCallback(async () => {
    i(!1);
    const m = await Fe(r, e, s, a);
    i(m);
  }, [r, e, a]), y = u.useCallback(() => we(e), [e]), d = u.useCallback(() => {
    i(!1);
  }, []);
  return /* @__PURE__ */ t.jsxs(A, { label: "Resource", children: [
    /* @__PURE__ */ t.jsx(
      Te,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: n.keyImportHelper || "",
        onChange: p,
        buttonCaption: "Import",
        onClick: h,
        validate: y,
        description: n.key ? void 0 : "Please enter your key from the portal."
      }
    ),
    !n.key && /* @__PURE__ */ t.jsxs(v, { children: [
      /* @__PURE__ */ t.jsx(x, { children: /* @__PURE__ */ t.jsx($, {}) }),
      /* @__PURE__ */ t.jsx(x, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(M, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    n.key && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        b,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: n.resourceName,
          onChange: c,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        b,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: n.keyName,
          onChange: c,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        b,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: e.displayName,
          icon: e.displayName && e.displayName.toLocaleLowerCase().includes("anthropic") ? re : void 0,
          onChange: c,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        b,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: e.name,
          onChange: c,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsx(
        b,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: n.environment,
          onChange: c,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ t.jsxs(v, { children: [
        /* @__PURE__ */ t.jsx(x, { children: /* @__PURE__ */ t.jsx($, {}) }),
        /* @__PURE__ */ t.jsx(x, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(M, { href: n.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ t.jsxs(v, { children: [
        /* @__PURE__ */ t.jsx(x, { children: /* @__PURE__ */ t.jsx($, { children: "Connection" }) }),
        /* @__PURE__ */ t.jsx(x, { children: /* @__PURE__ */ t.jsx(Me, { onPress: f, buttonCaption: "Test" }) })
      ] }),
      o && /* @__PURE__ */ t.jsx(le, { onClose: d, children: "Connection successful." })
    ] })
  ] });
}, De = te(), Ee = ({ studioPro: r, documentId: e }) => {
  const s = r.ui.messageBoxes, a = r.app.model.customBlobDocuments, [o, i] = u.useState(0), [n, c] = u.useState(!1), [l, p] = u.useState(De), h = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: ne }
  ];
  u.useEffect(() => {
    const d = (m) => {
      const { documents: g } = m;
      g.some((k) => k.documentId === e) && i((k) => k + 1);
    };
    return a.addEventListener("documentsChanged", d), () => {
      a.removeEventListener("documentsChanged", d);
    };
  }, []), u.useEffect(() => {
    a.getDocumentById(e).then(async (d) => {
      if (d && !("error" in d)) {
        const m = d.document.contents;
        !n && m.providerFields && "keyImportHelper" in m.providerFields && (m.providerFields.keyImportHelper = ""), p({ ...m }), c(!0);
      } else
        throw new Error((d == null ? void 0 : d.error) || "Document not found");
    }).catch((d) => {
      s.show("error", "Error loading document", "Details: " + (d == null ? void 0 : d.message) || d);
    });
  }, [o]);
  const f = u.useCallback(async (d) => {
    pe(r, l, p, e, d)();
  }, [r, l, p, e]), y = u.useCallback(() => {
    if (!l.provider)
      return "Model provider is required.";
  }, [l.provider]);
  return /* @__PURE__ */ t.jsx(J, { studioPro: r, children: /* @__PURE__ */ t.jsxs(X, { children: [
    !n && /* @__PURE__ */ t.jsx("span", { children: "Loading document content..." }),
    n && /* @__PURE__ */ t.jsx(Q, { children: /* @__PURE__ */ t.jsxs(Y, { children: [
      /* @__PURE__ */ t.jsx(A, { label: "Common", children: /* @__PURE__ */ t.jsx(
        fe,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: l.provider,
          options: h,
          onSelectionChange: f,
          validate: y
        }
      ) }),
      l.provider === "MxCloudGenAI" && /* @__PURE__ */ t.jsx(
        Pe,
        {
          studioPro: r,
          model: l,
          setModel: p,
          documentId: e
        }
      )
    ] }) })
  ] }) });
}, Ve = Z(Ee);
export {
  Ve as component
};
//# sourceMappingURL=modelEdit.js.map
