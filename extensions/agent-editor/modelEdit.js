import { a as H, $ as B, c as T, b as $, F as G, H as S, I as O, r as h, j as K, s as V, q as R, t as U, u as W, w as n, x as _, y as E, J as I, K as k, S as w, L as q, T as J, G as M, D as z, P as X, E as Q, M as Y } from "./Icon-CvuNKlFz.js";
import { c as Z, C as ee } from "./CenteredLoadingSpinner-DNWfddeI.js";
import { c as re, a as te, b as ne, d as se, u as j } from "./modelUtils-BBnwiyO9.js";
import { B as ae, C as oe } from "./ButtonWithLabel-c4xM3xr-.js";
import { r as C, c as A } from "./logger-CC_FxqwC.js";
import { S as ie } from "./Banner-DqxPN7xb.js";
import { T as le } from "./TextAreaAutogrow-CiInhCbj.js";
import { T as v } from "./TextInputLabeled-DcVXDdJd.js";
function de(r, e) {
  let { elementType: s = "a", onPress: a, onPressStart: l, onPressEnd: i, onClick: t, isDisabled: o, ...d } = r, u = {};
  s !== "a" && (u = {
    role: "link",
    tabIndex: o ? void 0 : 0
  });
  let { focusableProps: m } = H(r, e), { pressProps: f, isPressed: y } = B({
    onPress: a,
    onPressStart: l,
    onPressEnd: i,
    onClick: t,
    isDisabled: o,
    ref: e
  }), c = T(d, {
    labelable: !0
  }), p = $(m, f), g = G(), x = S(r);
  return {
    isPressed: y,
    linkProps: $(c, x, {
      ...p,
      ...u,
      "aria-disabled": o || void 0,
      "aria-current": r["aria-current"],
      onClick: (P) => {
        var b;
        (b = f.onClick) === null || b === void 0 || b.call(f, P), O(P, g, r.href, r.routerOptions);
      }
    })
  };
}
const ce = /* @__PURE__ */ h.createContext(null), ue = /* @__PURE__ */ h.forwardRef(function(e, s) {
  [e, s] = K(e, s, ce);
  let a = e.href && !e.isDisabled ? "a" : "span", { linkProps: l, isPressed: i } = de({
    ...e,
    elementType: a
  }, s), { hoverProps: t, isHovered: o } = V(e), { focusProps: d, isFocused: u, isFocusVisible: m } = R(), f = U({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: i,
      isHovered: o,
      isFocused: u,
      isFocusVisible: m
    }
  }), y = T(e, {
    global: !0
  });
  return delete y.onClick, /* @__PURE__ */ W.createElement(a, {
    ref: s,
    slot: e.slot || void 0,
    ...$(y, f, l, t, d),
    "data-focused": u || void 0,
    "data-hovered": o || void 0,
    "data-pressed": i || void 0,
    "data-focus-visible": m || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, f.children);
}), pe = (r, e, s, a) => async () => {
  if (!(r.provider === a && "key" in r.providerFields) && a === "MxCloudGenAI") {
    const l = re(), i = { ...r, provider: a, providerFields: l };
    e(i), s(i);
  }
}, fe = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", me = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var ye = Object.defineProperty, he = (r, e) => ye(r, "name", { value: e, configurable: !0 });
const xe = he((r) => n.jsx(_, { light: me, dark: fe, ...r }), "ExternalLinkIcon");
var ke = Object.defineProperty, ge = (r, e) => ke(r, "name", { value: e, configurable: !0 });
const F = ge(({ children: r, href: e, ...s }) => n.jsxs(ve, { href: e, ...s, children: [r ?? e, e && n.jsx(xe, {})] }), "Link"), ve = E(ue)`
    font-size: ${C.fontSizeMd};
    line-height: ${C.lineHeightMd};
    color: ${({ theme: r }) => r.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${C.spacing4};
    }
`, D = (r) => {
  const e = atob(r);
  return JSON.parse(e);
}, L = (r, e) => async () => {
  const s = A(r);
  try {
    const a = e.providerFields;
    if (!a.key)
      throw new Error("Missing key.");
    const l = D(a.key), i = await r.network.httpProxy.getProxyUrl(`${l.resourceBaseUrl}`), t = await fetch(i, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": l.accessToken
      },
      credentials: "omit"
    });
    if (t.status !== 200)
      throw new Error(`HTTP ${t.status}: ${t.statusText}`);
    return await t.json();
  } catch (a) {
    return s.error("Error invoking MxCloud GenAI resource API:", a), a instanceof Error ? a.message : "";
  }
}, N = (r, e) => ({
  ...r,
  name: (e == null ? void 0 : e.model) || r.name,
  displayName: e && (e.modelName || e.model) || r.displayName
}), be = (r, e) => async () => {
  const s = await L(r, e)();
  return typeof s == "string" ? s : N(e, s);
}, Ce = (r, e, s, a) => async () => {
  const l = A(r);
  try {
    const i = e.providerFields;
    if (!i.keyImportHelper)
      throw new Error("No key import data found. Please paste a valid key from the MxCloud GenAI portal.");
    const t = D(i.keyImportHelper);
    if (t.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${t.type}. Only Text Generation keys are currently supported.`
      );
    const o = {
      key: i.keyImportHelper || "",
      keyImportHelper: "",
      keyId: t.keyId || "",
      keyName: t.keyName || "",
      resourceName: t.name || "",
      environment: t.environment || "",
      deepLinkURL: t.deepLinkUrl || ""
    }, d = {
      ...e,
      name: t.model || "",
      displayName: t.model || "",
      type: t.type === "TEXT_GENERATION" ? "Text generation" : t.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...o
      }
    };
    s(d), a(d), L(r, d)().then((u) => {
      if (typeof u != "string") {
        const m = N(d, u);
        s(m), a(m).catch(
          (f) => l.error("Failed to update model document after API response:", f)
        );
      } else
        l.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
    });
  } catch (i) {
    l.error("Error during MxCloud GenAI key import:", i);
    const t = "Failed to import MxCloud GenAI model key.", o = "Error during MxCloud GenAI key import: " + i;
    await r.ui.messageBoxes.show("error", t, o);
  }
}, $e = (r) => {
  const e = r.providerFields;
  if (!e.key && !e.keyImportHelper)
    return "Key is required.";
  if (!e.key)
    return "Key wasn't imported.";
};
function Ie(r, e, s) {
  const a = {
    ...r,
    providerFields: {
      ...r.providerFields,
      keyImportHelper: e
    }
  };
  return s(a), a;
}
async function we(r, e, s, a) {
  var t;
  const l = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => {
        const o = await be(r, e)();
        return typeof o == "string" ? o : ((o.displayName !== e.displayName || o.name !== e.name) && (s(o), a(e)), (o.displayName !== e.displayName || o.name !== e.name) && (s(o), a(o)), !0);
      }
    }
  ], i = await r.ui.dialogs.showProgressDialog("Testing connection", l);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const o = "No connection.", d = `Make sure you are connected to the internet and check if your key still exists in the Mendix GenAI portal and try again.
` + (((t = i.failedStep) == null ? void 0 : t.error) ?? "");
      return await r.ui.messageBoxes.show("error", o, d), !1;
    }
  }
}
const Pe = E(J)`
    height: 25px;
`, je = ({
  label: r,
  ariaLabel: e,
  value: s,
  onChange: a,
  buttonCaption: l,
  onClick: i,
  description: t,
  readOnly: o = !1,
  hasMarginTop: d = !1,
  rows: u = 1,
  validate: m,
  buttonDisabled: f
}) => {
  const y = d ? 8 : 0;
  return /* @__PURE__ */ n.jsxs(I, { marginTop: y, children: [
    r && /* @__PURE__ */ n.jsx(k, { children: /* @__PURE__ */ n.jsx(w, { children: r }) }),
    /* @__PURE__ */ n.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ n.jsxs(q, { children: [
      /* @__PURE__ */ n.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(
        le,
        {
          ariaLabel: e,
          value: s,
          onChange: a,
          description: t,
          readOnly: o,
          rows: u,
          validate: m
        }
      ) }),
      /* @__PURE__ */ n.jsx(Pe, { onPress: i, isDisabled: f, children: l })
    ] }) })
  ] });
}, Fe = ({ studioPro: r, model: e, setModel: s, updateStudioProDocument: a }) => {
  const [l, i] = h.useState(!1), t = e.providerFields, o = () => {
  }, d = h.useRef(null);
  h.useEffect(() => {
    if (l) {
      const p = setTimeout(() => {
        i(!1);
      }, 5e3);
      return () => clearTimeout(p);
    }
  }, [l]);
  const u = (p) => {
    const g = {
      ...e,
      providerFields: { ...e.providerFields, keyImportHelper: p }
    };
    s(g), d.current && clearTimeout(d.current), d.current = setTimeout(() => {
      const x = Ie(e, p, a);
      s(x);
    }, 300);
  }, m = async () => {
    Ce(r, e, s, a)(), i(!1);
  }, f = async () => {
    i(!1);
    const p = await we(r, e, s, a);
    i(p);
  }, y = () => $e(e), c = () => {
    i(!1);
  };
  return /* @__PURE__ */ n.jsxs(M, { label: "Resource", children: [
    /* @__PURE__ */ n.jsx(
      je,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: t.keyImportHelper || "",
        onChange: u,
        buttonCaption: "Import",
        onClick: m,
        validate: y,
        description: t.key ? void 0 : "Please enter your key from the portal.",
        buttonDisabled: t.keyImportHelper === ""
      }
    ),
    !t.key && /* @__PURE__ */ n.jsxs(I, { children: [
      /* @__PURE__ */ n.jsx(k, { children: /* @__PURE__ */ n.jsx(w, {}) }),
      /* @__PURE__ */ n.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(F, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    t.key && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: t.resourceName,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: t.keyName,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: e.displayName,
          icon: e.displayName && e.displayName.toLocaleLowerCase().includes("anthropic") ? te : void 0,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: e.name,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsx(
        v,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: t.environment,
          onChange: o,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ n.jsxs(I, { children: [
        /* @__PURE__ */ n.jsx(k, { children: /* @__PURE__ */ n.jsx(w, {}) }),
        /* @__PURE__ */ n.jsx(k, { fullWidth: !0, children: /* @__PURE__ */ n.jsx(F, { href: t.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ n.jsx(ae, { label: "Connection", buttonCaption: "Test", onPress: f }),
      l && /* @__PURE__ */ n.jsx(ie, { onClose: c, children: "Connection successful." })
    ] })
  ] });
}, Te = ne(), Ee = ({ studioPro: r, documentId: e }) => {
  const s = r.ui.messageBoxes, a = r.app.model.customBlobDocuments, [l, i] = h.useState(0), [t, o] = h.useState(!1), [d, u] = h.useState(Te), m = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: se }
  ];
  h.useEffect(() => {
    const c = (p) => {
      const { documents: g } = p;
      g.some((x) => x.documentId === e) && i((x) => x + 1);
    };
    return a.addEventListener("documentsChanged", c), () => {
      a.removeEventListener("documentsChanged", c);
    };
  }, []), h.useEffect(() => {
    a.getDocumentById(e).then(async (c) => {
      if (c && !("error" in c)) {
        const p = c.document.contents;
        !t && p.providerFields && "keyImportHelper" in p.providerFields && (p.providerFields.keyImportHelper = ""), u({ ...p }), o(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch(async (c) => {
      await s.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
    });
  }, [l]);
  const f = async (c) => {
    pe(d, u, j(r, e), c)();
  }, y = () => d.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ n.jsx(z, { studioPro: r, children: /* @__PURE__ */ n.jsxs(X, { children: [
    !t && /* @__PURE__ */ n.jsx(ee, {}),
    t && /* @__PURE__ */ n.jsx(Q, { children: /* @__PURE__ */ n.jsxs(Y, { children: [
      /* @__PURE__ */ n.jsx(M, { label: "Common", children: /* @__PURE__ */ n.jsx(
        oe,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: d.provider,
          options: m,
          onSelectionChange: f,
          validate: y
        }
      ) }),
      d.provider === "MxCloudGenAI" && /* @__PURE__ */ n.jsx(
        Fe,
        {
          studioPro: r,
          model: d,
          setModel: u,
          updateStudioProDocument: j(r, e)
        }
      )
    ] }) })
  ] }) });
}, Se = Z(Ee);
export {
  Se as component
};
//# sourceMappingURL=modelEdit.js.map
