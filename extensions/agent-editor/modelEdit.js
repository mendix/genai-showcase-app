import { a as H, $ as R, c as L, b as I, Q as U, R as W, U as q, r as h, j as _, s as z, q as J, t as X, u as Q, w as s, x as Y, z as Z, G as A, D as N, C as $, V as T, N as ee, P as te, O as ne, W as ae } from "./Icon-B83cP35T.js";
import { c as se, C as re } from "./componentLoader-C5js17K5.js";
import { c as oe, g as B, a as V, b as ie, h as le, d as ce, e as de, u as F } from "./modelUtils-DbaOd0FB.js";
import { i as ue, B as fe, v as S, C as pe, a as ye } from "./ButtonWithLabel-BnsQ3SLe.js";
import { r as E, c as j } from "./userPreferences-BV8i5uIO.js";
import { W as me, S as he } from "./Banner-D-UDHPHw.js";
import { T as C } from "./TextInputLabeled-C5AghoA0.js";
import { T as xe } from "./TextInputWithButton-DgVpQKXA.js";
import { B as ve } from "./TextWithIcon-CCknD1LS.js";
function ke(t, e) {
  let { elementType: a = "a", onPress: r, onPressStart: d, onPressEnd: i, onClick: l, isDisabled: o, ...n } = t, f = {};
  a !== "a" && (f = {
    role: "link",
    tabIndex: o ? void 0 : 0
  });
  let { focusableProps: p } = H(t, e), { pressProps: y, isPressed: m } = R({
    onPress: r,
    onPressStart: d,
    onPressEnd: i,
    onClick: l,
    isDisabled: o,
    ref: e
  }), c = L(n, {
    labelable: !0
  }), k = I(p, y), b = U(), x = W(t);
  return {
    isPressed: m,
    linkProps: I(c, x, {
      ...k,
      ...f,
      "aria-disabled": o || void 0,
      "aria-current": t["aria-current"],
      onClick: (u) => {
        var g;
        (g = y.onClick) === null || g === void 0 || g.call(y, u), q(u, b, t.href, t.routerOptions);
      }
    })
  };
}
const ge = /* @__PURE__ */ h.createContext(null), be = /* @__PURE__ */ h.forwardRef(function(e, a) {
  [e, a] = _(e, a, ge);
  let r = e.href && !e.isDisabled ? "a" : "span", { linkProps: d, isPressed: i } = ke({
    ...e,
    elementType: r
  }, a), { hoverProps: l, isHovered: o } = z(e), { focusProps: n, isFocused: f, isFocusVisible: p } = J(), y = X({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: i,
      isHovered: o,
      isFocused: f,
      isFocusVisible: p
    }
  }), m = L(e, {
    global: !0
  });
  return delete m.onClick, /* @__PURE__ */ Q.createElement(r, {
    ref: a,
    slot: e.slot || void 0,
    ...I(m, y, d, l, n),
    "data-focused": f || void 0,
    "data-hovered": o || void 0,
    "data-pressed": i || void 0,
    "data-focus-visible": p || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, y.children);
}), Ce = (t, e, a, r) => async () => {
  if (!(t.provider === r && "key" in t.providerFields) && r === "MxCloudGenAI") {
    const d = oe(), i = { ...t, provider: r, providerFields: d };
    e(i), a(i);
  }
}, we = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", $e = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ee = Object.defineProperty, Ie = (t, e) => Ee(t, "name", { value: e, configurable: !0 });
const je = Ie((t) => s.jsx(Y, { light: $e, dark: we, ...t }), "ExternalLinkIcon");
var Pe = Object.defineProperty, Me = (t, e) => Pe(t, "name", { value: e, configurable: !0 });
const D = Me(({ children: t, href: e, ...a }) => s.jsxs(Ne, { href: e, ...a, children: [t ?? e, e && s.jsx(je, {})] }), "Link"), Ne = Z(be)`
    font-size: ${E.fontSizeMd};
    line-height: ${E.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${E.spacing4};
    }
`, G = (t, e) => {
  const a = j(t);
  try {
    const r = atob(e);
    return JSON.parse(r);
  } catch (r) {
    throw a.error("Error decoding and parsing key", r), new Error("The key could not be parsed, make sure it is valid.");
  }
}, O = async (t, e) => {
  const a = j(t);
  try {
    const r = e.providerFields;
    if (!r.key)
      throw new Error("Model key is not configured.");
    const d = await B(t, r.key);
    if (!d)
      throw new Error(
        `Constant ${r.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const i = G(t, d), l = await t.network.httpProxy.getProxyUrl(`${i.resourceBaseUrl}`), o = await fetch(l, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": i.accessToken
      },
      credentials: "omit"
    });
    if (o.status !== 200)
      throw new Error(`HTTP ${o.status}: ${o.statusText}`);
    return await o.json();
  } catch (r) {
    return a.error("Error invoking MxCloud GenAI resource API:", r), r instanceof Error ? r.message : "";
  }
}, K = (t, e) => ({
  ...t,
  name: (e == null ? void 0 : e.model) || t.name,
  displayName: e && (e.modelName || e.model) || t.displayName
}), Te = (t, e) => async () => {
  const a = await O(t, e);
  return typeof a == "string" ? a : K(e, a);
}, Fe = async (t, e, a, r, d) => {
  const i = j(t);
  try {
    const l = e.providerFields, o = await B(t, l.key);
    if (!o)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const n = G(t, o);
    if (n.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${n.type}. Only Text Generation keys are currently supported.`
      );
    const f = {
      key: l.key,
      keyId: n.keyId || "",
      keyName: n.keyName || "",
      resourceName: n.name || "",
      environment: n.environment || "",
      deepLinkURL: n.deepLinkUrl || ""
    }, p = {
      ...e,
      name: n.model || "",
      displayName: n.model || "",
      type: n.type === "TEXT_GENERATION" ? "Text generation" : n.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...f
      }
    };
    a(p), d(p);
    const y = await O(t, p);
    if (typeof y != "string") {
      const m = K(p, y);
      a(m), d(m).catch(
        (c) => i.error("Failed to update model document after API response:", c)
      );
    } else
      i.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (l) {
    i.error("Error during MxCloud GenAI key import:", l);
    const o = "Failed to import MxCloud GenAI model key.", n = String(l), f = V(e);
    await t.ui.messageBoxes.show("error", o, n), a(f), d(f), r(v.NotImported);
  }
};
async function Se(t, e) {
  const a = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (a.status === "ok")
    return {
      ...e,
      providerFields: {
        ...e.providerFields,
        key: {
          documentId: a.selected.id,
          qualifiedName: a.selected.module + "." + a.selected.name
        }
      }
    };
  if (a.status === "none")
    return { ...e, providerFields: { ...e.providerFields, key: void 0 } };
}
async function De(t, e, a, r) {
  var l;
  const d = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => {
        const o = await Te(t, e)();
        return typeof o == "string" ? o : ((o.displayName !== e.displayName || o.name !== e.name) && (a(o), r(o)), !0);
      }
    }
  ], i = await t.ui.dialogs.showProgressDialog("Testing connection", d);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const o = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", n = ((l = i.failedStep) == null ? void 0 : l.error) ?? "";
      return await t.ui.messageBoxes.show("error", o, n), !1;
    }
  }
}
const v = {
  ...pe,
  NotImported: "NotImported"
}, w = () => {
}, Le = ({ studioPro: t, model: e, setModel: a, updateStudioProDocument: r }) => {
  var x;
  const [d, i] = h.useState(!1), [l, o] = h.useState(), n = e.providerFields, f = async () => {
    i(!1);
    const u = await De(t, e, a, r);
    i(u);
  }, p = () => {
    i(!1);
  }, y = async () => {
    n.key && le(t, n.key);
  }, m = async (u) => {
    const g = u.providerFields, P = await S(t, g.key);
    if (o(P), i(!1), !P)
      Fe(t, u, a, o, r);
    else {
      const M = V(u);
      a(M), r(M);
    }
  }, c = async () => {
    const u = await Se(t, e);
    u && (a(u), r(u), await m(u));
  };
  h.useEffect(() => {
    if (d) {
      const u = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(u);
    }
  }, [d]), h.useEffect(() => {
    (async () => {
      const g = await S(t, n.key);
      o(g);
    })();
  }, []);
  const k = (u) => u === v.Required ? "Model key is required" : u === v.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : u === v.InvalidType ? "Selected constant must be of type string." : u === v.Excluded ? "Selected constant is excluded from the project and cannot be used." : !0, b = l === v.EmptyValue || l === v.PrivateValue || l === v.NotImported;
  return /* @__PURE__ */ s.jsxs(A, { label: "Resource", children: [
    /* @__PURE__ */ s.jsx(
      xe,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((x = n.key) == null ? void 0 : x.qualifiedName) ?? "",
        icon: n.key ? /* @__PURE__ */ s.jsx(ue, {}) : void 0,
        buttonCaption: "Select...",
        onClick: c,
        onClickSecondary: n.key ? y : void 0,
        validate: () => k(l),
        buttonCaptionSecondary: n.key ? "Show" : void 0
      }
    ),
    !n.key && /* @__PURE__ */ s.jsxs(N, { children: [
      /* @__PURE__ */ s.jsx($, { children: /* @__PURE__ */ s.jsx(T, {}) }),
      /* @__PURE__ */ s.jsx($, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(D, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    b && /* @__PURE__ */ s.jsxs(me, { children: [
      /* @__PURE__ */ s.jsx(ve, { children: "Invalid constant value" }),
      /* @__PURE__ */ s.jsx("div", { children: "In order to test your Model locally please set a valid value for the key constant." })
    ] }),
    n.keyId && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        C,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: n.resourceName,
          onChange: w,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ s.jsx(
        C,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: n.keyName,
          onChange: w,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ s.jsx(
        C,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: e.displayName,
          icon: e.displayName && e.displayName.toLocaleLowerCase().includes("anthropic") ? ie : void 0,
          onChange: w,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ s.jsx(
        C,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: e.name,
          onChange: w,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ s.jsx(
        C,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: n.environment,
          onChange: w,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ s.jsxs(N, { children: [
        /* @__PURE__ */ s.jsx($, { children: /* @__PURE__ */ s.jsx(T, {}) }),
        /* @__PURE__ */ s.jsx($, { fullWidth: !0, children: /* @__PURE__ */ s.jsx(D, { href: n.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ s.jsx(fe, { label: "Connection", buttonCaption: "Test", onPress: f }),
      d && /* @__PURE__ */ s.jsx(he, { onClose: p, children: "Connection successful." })
    ] })
  ] });
}, Ae = ce(), Be = ({ studioPro: t, documentId: e }) => {
  const a = t.ui.messageBoxes, r = t.app.model.customBlobDocuments, [d, i] = h.useState(0), [l, o] = h.useState(!1), [n, f] = h.useState(Ae), p = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: de }
  ];
  h.useEffect(() => {
    const c = (k) => {
      const { documents: b } = k;
      b.some((x) => x.documentId === e) && i((x) => x + 1);
    };
    return r.addEventListener("documentsChanged", c), () => {
      r.removeEventListener("documentsChanged", c);
    };
  }, []), h.useEffect(() => {
    r.getDocumentById(e).then(async (c) => {
      if (c && !("error" in c)) {
        const k = c.document.contents;
        f({ ...k }), o(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch(async (c) => {
      await a.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
    });
  }, [d]);
  const y = async (c) => {
    Ce(n, f, F(t, e), c)();
  }, m = () => n.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ s.jsx(ee, { studioPro: t, children: /* @__PURE__ */ s.jsxs(te, { children: [
    !l && /* @__PURE__ */ s.jsx(re, {}),
    l && /* @__PURE__ */ s.jsx(ne, { children: /* @__PURE__ */ s.jsxs(ae, { children: [
      /* @__PURE__ */ s.jsx(A, { label: "Common", children: /* @__PURE__ */ s.jsx(
        ye,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: n.provider,
          options: p,
          onSelectionChange: y,
          validate: m
        }
      ) }),
      n.provider === "MxCloudGenAI" && /* @__PURE__ */ s.jsx(
        Le,
        {
          studioPro: t,
          model: n,
          setModel: f,
          updateStudioProDocument: F(t, e)
        }
      )
    ] }) })
  ] }) });
}, _e = se(Be);
export {
  _e as component
};
//# sourceMappingURL=modelEdit.js.map
