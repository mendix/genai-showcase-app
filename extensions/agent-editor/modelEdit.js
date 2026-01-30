import { h as B, g as G, j as E, i as I, az as S, aA as O, aB as V, r as u, I as K, Q as R, P as U, R as W, B as _, ad as w, ae as n, ag as z, ah as j, aC as v, aD as y, aE as C, aF as q, aG as M, au as A, aw as J, ax as X, ay as Q, aH as Y } from "./TextInputWithIcon-B3kv_B9i.js";
import { c as Z } from "./componentLoader-_xi6kKSa.js";
import { a as ee, b as re, c as ne, d as te, u as T } from "./modelUtils-BauxefJK.js";
import { S as se, N as ae, T as oe } from "./ComboBox-DOXi1OXZ.js";
import { T as ie } from "./TextWithIcon-P8z9vjya.js";
import { c as D } from "./logger-BM6R1Quw.js";
import { S as le } from "./Banner-BEBXNJk6.js";
import { T as b } from "./TextInputLabeled-_7ydO2Vf.js";
function ce(r, e) {
  let { elementType: a = "a", onPress: t, onPressStart: c, onPressEnd: i, onClick: s, isDisabled: o, ...l } = r, p = {};
  a !== "a" && (p = {
    role: "link",
    tabIndex: o ? void 0 : 0
  });
  let { focusableProps: x } = B(r, e), { pressProps: h, isPressed: m } = G({
    onPress: t,
    onPressStart: c,
    onPressEnd: i,
    onClick: s,
    isDisabled: o,
    ref: e
  }), d = E(l, {
    labelable: !0
  }), f = I(x, h), g = S(), k = O(r);
  return {
    isPressed: m,
    linkProps: I(d, k, {
      ...f,
      ...p,
      "aria-disabled": o || void 0,
      "aria-current": r["aria-current"],
      onClick: (P) => {
        var $;
        ($ = h.onClick) === null || $ === void 0 || $.call(h, P), V(P, g, r.href, r.routerOptions);
      }
    })
  };
}
const de = /* @__PURE__ */ u.createContext(null), ue = /* @__PURE__ */ u.forwardRef(function(e, a) {
  [e, a] = K(e, a, de);
  let t = e.href && !e.isDisabled ? "a" : "span", { linkProps: c, isPressed: i } = ce({
    ...e,
    elementType: t
  }, a), { hoverProps: s, isHovered: o } = R(e), { focusProps: l, isFocused: p, isFocusVisible: x } = U(), h = W({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: i,
      isHovered: o,
      isFocused: p,
      isFocusVisible: x
    }
  }), m = E(e, {
    global: !0
  });
  return delete m.onClick, /* @__PURE__ */ _.createElement(t, {
    ref: a,
    slot: e.slot || void 0,
    ...I(m, h, c, s, l),
    "data-focused": p || void 0,
    "data-hovered": o || void 0,
    "data-pressed": i || void 0,
    "data-focus-visible": x || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, h.children);
}), pe = (r, e, a, t) => async () => {
  if (!(r.provider === t && "key" in r.providerFields) && t === "MxCloudGenAI") {
    const c = ee(), i = { ...r, provider: t, providerFields: c };
    e(i), a(i);
  }
}, fe = w.div`
    & [role="combobox"] {
        ${(r) => r.iconurl && `
            background-image: url(${r.iconurl});
            background-repeat: no-repeat;
            background-position: 4px center;
            background-size: 16px 16px;
            padding-left: 24px;
        `}
    }
`, he = ({
  ariaLabel: r,
  isDisabled: e = !1,
  label: a,
  options: t,
  onSelectionChange: c,
  selectedKey: i,
  validate: s
}) => {
  const o = t.find((l) => l.key === i);
  return /* @__PURE__ */ n.jsx(fe, { iconurl: o == null ? void 0 : o.icon, children: /* @__PURE__ */ n.jsx(
    se,
    {
      "aria-label": r,
      isDisabled: e,
      label: a,
      selectedKey: i,
      onSelectionChange: c,
      validate: s,
      children: t.map((l) => /* @__PURE__ */ n.jsx(
        ae,
        {
          id: l.key,
          textValue: l.caption,
          children: /* @__PURE__ */ n.jsx(
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
}, xe = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", ye = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var me = Object.defineProperty, ke = (r, e) => me(r, "name", { value: e, configurable: !0 });
const ge = ke((r) => n.jsx(z, { light: ye, dark: xe, ...r }), "ExternalLinkIcon");
var be = Object.defineProperty, ve = (r, e) => be(r, "name", { value: e, configurable: !0 });
const F = ve(({ children: r, href: e, ...a }) => n.jsxs(Ce, { href: e, ...a, children: [r ?? e, e && n.jsx(ge, {})] }), "Link"), Ce = w(ue)`
    font-size: ${j.fontSizeMd};
    line-height: ${j.lineHeightMd};
    color: ${({ theme: r }) => r.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${j.spacing4};
    }
`, L = (r) => {
  const e = atob(r);
  return JSON.parse(e);
}, N = (r, e) => async () => {
  const a = D(r);
  try {
    const t = e.providerFields;
    if (!t.key)
      throw new Error("Missing key.");
    const c = L(t.key), i = await r.network.httpProxy.getProxyUrl(`${c.resourceBaseUrl}`), s = await fetch(i, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": c.accessToken
      },
      credentials: "omit"
    });
    if (s.status !== 200)
      throw new Error(`HTTP ${s.status}: ${s.statusText}`);
    return await s.json();
  } catch (t) {
    return a.error("Error invoking MxCloud GenAI resource API:", t), t instanceof Error ? t.message : "";
  }
}, H = (r, e) => ({
  ...r,
  name: (e == null ? void 0 : e.model) || r.name,
  displayName: e && (e.modelName || e.model) || r.displayName
}), $e = (r, e) => async () => {
  const a = await N(r, e)();
  return typeof a == "string" ? a : H(e, a);
}, je = (r, e, a, t) => async () => {
  const c = D(r);
  try {
    const i = e.providerFields;
    if (!i.keyImportHelper)
      throw new Error("No key import data found. Please paste a valid key from the MxCloud GenAI portal.");
    const s = L(i.keyImportHelper);
    if (s.type !== "TEXT_GENERATION")
      throw new Error(`Unsupported key type: ${s.type}. Only Text Generation keys are currently supported.`);
    const o = {
      key: i.keyImportHelper || "",
      keyImportHelper: "",
      keyId: s.keyId || "",
      keyName: s.keyName || "",
      resourceName: s.name || "",
      environment: s.environment || "",
      deepLinkURL: s.deepLinkUrl || ""
    }, l = {
      ...e,
      name: s.model || "",
      displayName: s.model || "",
      type: s.type === "TEXT_GENERATION" ? "Text generation" : s.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...o
      }
    };
    a(l), t(l), N(r, l)().then((p) => {
      if (typeof p != "string") {
        const x = H(l, p);
        a(x), t(x).catch(
          (h) => c.error("Failed to update model document after API response:", h)
        );
      } else
        c.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    });
  } catch (i) {
    c.error("Error during MxCloud GenAI key import:", i);
    const s = "Failed to import MxCloud GenAI model key.", o = "Error during MxCloud GenAI key import: " + i;
    r.ui.messageBoxes.show(
      "error",
      s,
      o
    );
  }
}, Ie = (r) => {
  const e = r.providerFields;
  if (!e.key && !e.keyImportHelper)
    return "Key is required.";
  if (!e.key)
    return "Key wasn't imported.";
};
function we(r, e, a) {
  const t = {
    ...r,
    providerFields: {
      ...r.providerFields,
      keyImportHelper: e
    }
  };
  return a(t), t;
}
async function Pe(r, e, a, t) {
  var s;
  const c = [{
    title: "Testing connection",
    description: "Testing connection",
    action: async () => {
      const o = await $e(r, e)();
      return typeof o == "string" ? o : ((o.displayName !== e.displayName || o.name !== e.name) && (a(o), t(e)), !0);
    }
  }], i = await r.ui.dialogs.showProgressDialog("Testing connection", c);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure":
      const o = "No connection.", l = `Make sure you are connected to the internet and check if your key still exists in the Mendix GenAI portal and try again.
` + (((s = i.failedStep) == null ? void 0 : s.error) ?? "");
      return r.ui.messageBoxes.show(
        "error",
        o,
        l
      ), !1;
  }
}
const Te = w(M)`
    height: 25px;
`, Fe = ({
  label: r,
  ariaLabel: e,
  value: a,
  onChange: t,
  buttonCaption: c,
  onClick: i,
  description: s,
  readOnly: o = !1,
  hasMarginTop: l = !1,
  rows: p = 1,
  validate: x
}) => {
  const h = l ? 8 : 0;
  return /* @__PURE__ */ n.jsxs(v, { marginTop: h, children: [
    r && /* @__PURE__ */ n.jsx(y, { children: /* @__PURE__ */ n.jsx(C, { children: r }) }),
    /* @__PURE__ */ n.jsx(y, { fullWidth: !0, children: /* @__PURE__ */ n.jsxs(q, { children: [
      /* @__PURE__ */ n.jsx(y, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(
        oe,
        {
          ariaLabel: e,
          value: a,
          onChange: t,
          description: s,
          readOnly: o,
          rows: p,
          validate: x
        }
      ) }),
      /* @__PURE__ */ n.jsx(
        Te,
        {
          onPress: i,
          children: c
        }
      )
    ] }) })
  ] });
}, Ee = ({
  onPress: r,
  buttonCaption: e
}) => {
  const [a, t] = u.useState(!1), c = async () => {
    if (!(!r || a)) {
      t(!0);
      try {
        await r();
      } finally {
        t(!1);
      }
    }
  };
  return /* @__PURE__ */ n.jsx(v, { children: /* @__PURE__ */ n.jsx(y, { children: /* @__PURE__ */ n.jsx(
    M,
    {
      onPress: c,
      isDisabled: a,
      children: e
    }
  ) }) });
}, Me = ({
  studioPro: r,
  model: e,
  setModel: a,
  updateStudioProDocument: t
}) => {
  const [c, i] = u.useState(!1), s = e.providerFields, o = u.useCallback(() => {
  }, []), l = u.useRef(null);
  u.useEffect(() => {
    if (c) {
      const f = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(f);
    }
  }, [c]);
  const p = u.useCallback((f) => {
    const g = {
      ...e,
      providerFields: { ...e.providerFields, keyImportHelper: f }
    };
    a(g), l.current && clearTimeout(l.current), l.current = setTimeout(() => {
      const k = we(e, f, t);
      a(k);
    }, 300);
  }, [r, e, t]), x = u.useCallback(async () => {
    je(r, e, a, t)(), i(!1);
  }, [r, e, t]), h = u.useCallback(async () => {
    i(!1);
    const f = await Pe(r, e, a, t);
    i(f);
  }, [r, e, t]), m = u.useCallback(() => Ie(e), [e]), d = u.useCallback(() => {
    i(!1);
  }, []);
  return /* @__PURE__ */ n.jsxs(A, { label: "Resource", children: [
    /* @__PURE__ */ n.jsx(
      Fe,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: s.keyImportHelper || "",
        onChange: p,
        buttonCaption: "Import",
        onClick: x,
        validate: m,
        description: s.key ? void 0 : "Please enter your key from the portal."
      }
    ),
    !s.key && /* @__PURE__ */ n.jsxs(v, { children: [
      /* @__PURE__ */ n.jsx(y, { children: /* @__PURE__ */ n.jsx(C, {}) }),
      /* @__PURE__ */ n.jsx(y, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(F, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    s.key && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        b,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: s.resourceName,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        b,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: s.keyName,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        b,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: e.displayName,
          icon: e.displayName && e.displayName.toLocaleLowerCase().includes("anthropic") ? re : void 0,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        b,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: e.name,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        b,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: s.environment,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsxs(v, { children: [
        /* @__PURE__ */ n.jsx(y, { children: /* @__PURE__ */ n.jsx(C, {}) }),
        /* @__PURE__ */ n.jsx(y, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(F, { href: s.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ n.jsxs(v, { children: [
        /* @__PURE__ */ n.jsx(y, { children: /* @__PURE__ */ n.jsx(C, { children: "Connection" }) }),
        /* @__PURE__ */ n.jsx(y, { children: /* @__PURE__ */ n.jsx(Ee, { onPress: h, buttonCaption: "Test" }) })
      ] }),
      c && /* @__PURE__ */ n.jsx(le, { onClose: d, children: "Connection successful." })
    ] })
  ] });
}, Ae = ne(), De = ({ studioPro: r, documentId: e }) => {
  const a = r.ui.messageBoxes, t = r.app.model.customBlobDocuments, [c, i] = u.useState(0), [s, o] = u.useState(!1), [l, p] = u.useState(Ae), x = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: te }
  ];
  u.useEffect(() => {
    const d = (f) => {
      const { documents: g } = f;
      g.some((k) => k.documentId === e) && i((k) => k + 1);
    };
    return t.addEventListener("documentsChanged", d), () => {
      t.removeEventListener("documentsChanged", d);
    };
  }, []), u.useEffect(() => {
    t.getDocumentById(e).then(async (d) => {
      if (d && !("error" in d)) {
        const f = d.document.contents;
        !s && f.providerFields && "keyImportHelper" in f.providerFields && (f.providerFields.keyImportHelper = ""), p({ ...f }), o(!0);
      } else
        throw new Error((d == null ? void 0 : d.error) || "Document not found");
    }).catch((d) => {
      a.show("error", "Error loading document", "Details: " + (d == null ? void 0 : d.message) || d);
    });
  }, [c]);
  const h = u.useCallback(async (d) => {
    pe(l, p, T(r, e), d)();
  }, [r, l, p, e]), m = u.useCallback(() => {
    if (!l.provider)
      return "Model provider is required.";
  }, [l.provider]);
  return /* @__PURE__ */ n.jsx(J, { studioPro: r, children: /* @__PURE__ */ n.jsxs(X, { children: [
    !s && /* @__PURE__ */ n.jsx("span", { children: "Loading document content..." }),
    s && /* @__PURE__ */ n.jsx(Q, { children: /* @__PURE__ */ n.jsxs(Y, { children: [
      /* @__PURE__ */ n.jsx(A, { label: "Common", children: /* @__PURE__ */ n.jsx(
        he,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: l.provider,
          options: x,
          onSelectionChange: h,
          validate: m
        }
      ) }),
      l.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        Me,
        {
          studioPro: r,
          model: l,
          setModel: p,
          updateStudioProDocument: T(r, e)
        }
      )
    ] }) })
  ] }) });
}, Ke = Z(De);
export {
  Ke as component
};
//# sourceMappingURL=modelEdit.js.map
