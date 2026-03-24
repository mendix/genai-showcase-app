import { a as R, $ as U, c as A, b as N, F as W, H as _, I as J, r as h, j as z, s as X, q as Q, t as Y, u as Z, w as a, x as ee, y as B, G, J as T, K as E, S as F, D as te, P as ne, E as ae, L as se } from "./Icon-DjcrVRZV.js";
import { c as re, C as oe } from "./CenteredLoadingSpinner-C-2fDE-r.js";
import { c as ie, g as V, a as O, b as le, h as ce, d as de, e as ue, u as L } from "./modelUtils-Bx_f070p.js";
import { i as fe, B as pe, v as S, C as ye, a as me } from "./ButtonWithLabel-DExfpPWr.js";
import { r as I, c as j } from "./DesignSystemTokens-CB_9gr2a.js";
import { W as he, S as ve } from "./Banner-vrS186Bj.js";
import { T as w } from "./TextInputLabeled-D01D1g1m.js";
import { T as xe } from "./TextInputWithButton-DS64HwKN.js";
function ke(t, e) {
  let { elementType: n = "a", onPress: s, onPressStart: d, onPressEnd: i, onClick: f, isDisabled: r, ...o } = t, l = {};
  n !== "a" && (l = {
    role: "link",
    tabIndex: r ? void 0 : 0
  });
  let { focusableProps: y } = R(t, e), { pressProps: p, isPressed: m } = U({
    onPress: s,
    onPressStart: d,
    onPressEnd: i,
    onClick: f,
    isDisabled: r,
    ref: e
  }), c = A(o, {
    labelable: !0
  }), v = N(y, p), b = W(), x = _(t);
  return {
    isPressed: m,
    linkProps: N(c, x, {
      ...v,
      ...l,
      "aria-disabled": r || void 0,
      "aria-current": t["aria-current"],
      onClick: (u) => {
        var k;
        (k = p.onClick) === null || k === void 0 || k.call(p, u), J(u, b, t.href, t.routerOptions);
      }
    })
  };
}
const ge = /* @__PURE__ */ h.createContext(null), be = /* @__PURE__ */ h.forwardRef(function(e, n) {
  [e, n] = z(e, n, ge);
  let s = e.href && !e.isDisabled ? "a" : "span", { linkProps: d, isPressed: i } = ke({
    ...e,
    elementType: s
  }, n), { hoverProps: f, isHovered: r } = X(e), { focusProps: o, isFocused: l, isFocusVisible: y } = Q(), p = Y({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: i,
      isHovered: r,
      isFocused: l,
      isFocusVisible: y
    }
  }), m = A(e, {
    global: !0
  });
  return delete m.onClick, /* @__PURE__ */ Z.createElement(s, {
    ref: n,
    slot: e.slot || void 0,
    ...N(m, p, d, f, o),
    "data-focused": l || void 0,
    "data-hovered": r || void 0,
    "data-pressed": i || void 0,
    "data-focus-visible": y || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, p.children);
}), Ce = (t, e, n, s) => async () => {
  if (!(t.provider === s && "key" in t.providerFields) && s === "MxCloudGenAI") {
    const d = ie(), i = { ...t, provider: s, providerFields: d };
    e(i), n(i);
  }
}, we = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", $e = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Ee = Object.defineProperty, Ie = (t, e) => Ee(t, "name", { value: e, configurable: !0 });
const Ne = Ie((t) => a.jsx(ee, { light: $e, dark: we, ...t }), "ExternalLinkIcon");
var je = Object.defineProperty, Pe = (t, e) => je(t, "name", { value: e, configurable: !0 });
const D = Pe(({ children: t, href: e, ...n }) => a.jsxs(Me, { href: e, ...n, children: [t ?? e, e && a.jsx(Ne, {})] }), "Link"), Me = B(be)`
    font-size: ${I.fontSizeMd};
    line-height: ${I.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${I.spacing4};
    }
`, K = (t, e) => {
  const n = j(t);
  try {
    const s = atob(e);
    return JSON.parse(s);
  } catch (s) {
    throw n.error("Error decoding and parsing key", s), new Error("The key could not be parsed, make sure it is valid.");
  }
}, q = async (t, e) => {
  const n = j(t);
  try {
    const s = e.providerFields;
    if (!s.key)
      throw new Error("Model key is not configured.");
    const d = await V(t, s.key.qualifiedName);
    if (!d)
      throw new Error(
        `Constant ${s.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const i = K(t, d), f = await t.network.httpProxy.getProxyUrl(`${i.resourceBaseUrl}`), r = await fetch(f, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": i.accessToken
      },
      credentials: "omit"
    });
    if (r.status !== 200)
      throw new Error(`HTTP ${r.status}: ${r.statusText}`);
    return await r.json();
  } catch (s) {
    return n.error("Error invoking MxCloud GenAI resource API:", s), s instanceof Error ? s.message : "";
  }
}, H = (t, e) => ({
  ...t,
  name: (e == null ? void 0 : e.model) || t.name,
  displayName: e && (e.modelName || e.model) || t.displayName
}), Te = (t, e) => async () => {
  const n = await q(t, e);
  return typeof n == "string" ? n : H(e, n);
}, Fe = async (t, e, n, s, d) => {
  var f;
  const i = j(t);
  try {
    const r = e.providerFields, o = await V(t, ((f = r.key) == null ? void 0 : f.qualifiedName) || "");
    if (!o)
      throw new Error("No key value found. Please make sure the key constant is correctly configured.");
    const l = K(t, o);
    if (l.type !== "TEXT_GENERATION")
      throw new Error(
        `Unsupported key type: ${l.type}. Only Text Generation keys are currently supported.`
      );
    const y = {
      key: r.key,
      keyId: l.keyId || "",
      keyName: l.keyName || "",
      resourceName: l.name || "",
      environment: l.environment || "",
      deepLinkURL: l.deepLinkUrl || ""
    }, p = {
      ...e,
      name: l.model || "",
      displayName: l.model || "",
      type: l.type === "TEXT_GENERATION" ? "Text generation" : l.type === "EMBEDDINGS_GENERATION" ? "Embeddings" : "",
      providerFields: {
        ...y
      }
    };
    n(p), d(p);
    const m = await q(t, p);
    if (typeof m != "string") {
      const c = H(p, m);
      n(c), d(c).catch(
        (v) => i.error("Failed to update model document after API response:", v)
      );
    } else
      i.warn("MxCloudGenAI resource API unavailable. Could not update model details.");
  } catch (r) {
    i.error("Error during MxCloud GenAI key import:", r);
    const o = "Failed to import MxCloud GenAI model key.", l = String(r), y = O(e);
    await t.ui.messageBoxes.show("error", o, l), n(y), d(y), s(g.NotImported);
  }
};
async function Le(t, e) {
  const n = await t.ui.elementSelectors.selectDocument({
    allowNone: !0,
    query: { elementType: "Constants$Constant" }
  });
  if (n.status === "ok")
    return {
      ...e,
      providerFields: {
        ...e.providerFields,
        key: {
          documentId: n.selected.id,
          qualifiedName: n.selected.module + "." + n.selected.name
        }
      }
    };
  if (n.status === "none")
    return { ...e, providerFields: { ...e.providerFields, key: void 0 } };
}
async function Se(t, e, n, s) {
  var f;
  const d = [
    {
      title: "Testing connection",
      description: "Testing connection",
      action: async () => {
        const r = await Te(t, e)();
        return typeof r == "string" ? r : ((r.displayName !== e.displayName || r.name !== e.name) && (n(r), s(r)), !0);
      }
    }
  ], i = await t.ui.dialogs.showProgressDialog("Testing connection", d);
  switch (i.result) {
    case "Success":
      return !0;
    case "UserCancelled":
      return !1;
    case "Failure": {
      const r = "No connection. Make sure you are connected to the internet and check that a valid key is set as value for the selected constant.", o = ((f = i.failedStep) == null ? void 0 : f.error) ?? "";
      return await t.ui.messageBoxes.show("error", r, o), !1;
    }
  }
}
const De = B.div`
    font-weight: 600;
`, g = {
  ...ye,
  NotImported: "NotImported"
}, $ = () => {
}, Ae = ({ studioPro: t, model: e, setModel: n, updateStudioProDocument: s }) => {
  var x;
  const [d, i] = h.useState(!1), [f, r] = h.useState(), o = e.providerFields, l = async () => {
    i(!1);
    const u = await Se(t, e, n, s);
    i(u);
  }, y = () => {
    i(!1);
  }, p = async () => {
    o.key && ce(t, o.key.qualifiedName);
  }, m = async (u) => {
    var P;
    const k = u.providerFields, C = await S(t, (P = k.key) == null ? void 0 : P.qualifiedName);
    if (r(C), i(!1), !C)
      Fe(t, u, n, r, s);
    else {
      const M = O(u);
      n(M), s(M);
    }
  }, c = async () => {
    const u = await Le(t, e);
    u && (n(u), s(u), await m(u));
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
      var C;
      const k = await S(t, (C = o.key) == null ? void 0 : C.qualifiedName);
      r(k);
    })();
  }, []);
  const v = (u) => u === g.Required ? "Model key is required" : u === g.NotFound ? "Selected constant not found. It might have been deleted or renamed. Please update the constant selection." : u === g.InvalidType ? "Selected constant must be of type string." : !0, b = f === g.EmptyValue || f === g.PrivateValue || f === g.NotImported;
  return /* @__PURE__ */ a.jsxs(G, { label: "Resource", children: [
    /* @__PURE__ */ a.jsx(
      xe,
      {
        label: "Model key",
        ariaLabel: "Model key",
        value: ((x = o.key) == null ? void 0 : x.qualifiedName) ?? "",
        icon: o.key ? /* @__PURE__ */ a.jsx(fe, {}) : void 0,
        buttonCaption: "Select...",
        onClick: c,
        onClickSecondary: o.key ? p : void 0,
        validate: () => v(f),
        buttonCaptionSecondary: o.key ? "Show" : void 0
      }
    ),
    !o.key && /* @__PURE__ */ a.jsxs(T, { children: [
      /* @__PURE__ */ a.jsx(E, { children: /* @__PURE__ */ a.jsx(F, {}) }),
      /* @__PURE__ */ a.jsx(E, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(D, { href: "https://genai.home.mendix.com/p/resources", target: "_blank", children: "Create a key in the portal" }) })
    ] }),
    b && /* @__PURE__ */ a.jsxs(he, { children: [
      /* @__PURE__ */ a.jsx(De, { children: "Invalid constant value" }),
      /* @__PURE__ */ a.jsx("div", { children: "In order to test your Model locally please set a valid value for the key constant." })
    ] }),
    o.keyId && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        w,
        {
          label: "Resource",
          ariaLabel: "Resource name",
          value: o.resourceName,
          onChange: $,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        w,
        {
          label: "Key",
          ariaLabel: "Key name",
          value: o.keyName,
          onChange: $,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        w,
        {
          label: "Model",
          ariaLabel: "Model name",
          value: e.displayName,
          icon: e.displayName && e.displayName.toLocaleLowerCase().includes("anthropic") ? le : void 0,
          onChange: $,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        w,
        {
          label: "Model ID",
          ariaLabel: "Model ID",
          value: e.name,
          onChange: $,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsx(
        w,
        {
          label: "Environment",
          ariaLabel: "Environment",
          value: o.environment,
          onChange: $,
          readOnly: !0
        }
      ),
      /* @__PURE__ */ a.jsxs(T, { children: [
        /* @__PURE__ */ a.jsx(E, { children: /* @__PURE__ */ a.jsx(F, {}) }),
        /* @__PURE__ */ a.jsx(E, { fullWidth: !0, children: /* @__PURE__ */ a.jsx(D, { href: o.deepLinkURL, target: "_blank", children: "View resource in the portal" }) })
      ] }),
      /* @__PURE__ */ a.jsx(pe, { label: "Connection", buttonCaption: "Test", onPress: l }),
      d && /* @__PURE__ */ a.jsx(ve, { onClose: y, children: "Connection successful." })
    ] })
  ] });
}, Be = de(), Ge = ({ studioPro: t, documentId: e }) => {
  const n = t.ui.messageBoxes, s = t.app.model.customBlobDocuments, [d, i] = h.useState(0), [f, r] = h.useState(!1), [o, l] = h.useState(Be), y = [
    { key: "MxCloudGenAI", caption: "Mendix Cloud GenAI", icon: ue }
  ];
  h.useEffect(() => {
    const c = (v) => {
      const { documents: b } = v;
      b.some((x) => x.documentId === e) && i((x) => x + 1);
    };
    return s.addEventListener("documentsChanged", c), () => {
      s.removeEventListener("documentsChanged", c);
    };
  }, []), h.useEffect(() => {
    s.getDocumentById(e).then(async (c) => {
      if (c && !("error" in c)) {
        const v = c.document.contents;
        l({ ...v }), r(!0);
      } else
        throw new Error((c == null ? void 0 : c.error) || "Document not found");
    }).catch(async (c) => {
      await n.show("error", "Error loading document", "Details: " + (c == null ? void 0 : c.message) || c);
    });
  }, [d]);
  const p = async (c) => {
    Ce(o, l, L(t, e), c)();
  }, m = () => o.provider ? !0 : "Model provider is required.";
  return /* @__PURE__ */ a.jsx(te, { studioPro: t, children: /* @__PURE__ */ a.jsxs(ne, { children: [
    !f && /* @__PURE__ */ a.jsx(oe, {}),
    f && /* @__PURE__ */ a.jsx(ae, { children: /* @__PURE__ */ a.jsxs(se, { children: [
      /* @__PURE__ */ a.jsx(G, { label: "Common", children: /* @__PURE__ */ a.jsx(
        me,
        {
          ariaLabel: "Provider",
          isDisabled: !0,
          label: "Provider",
          selectedKey: o.provider,
          options: y,
          onSelectionChange: p,
          validate: m
        }
      ) }),
      o.provider === "MxCloudGenAI" && /* @__PURE__ */ a.jsx(
        Ae,
        {
          studioPro: t,
          model: o,
          setModel: l,
          updateStudioProDocument: L(t, e)
        }
      )
    ] }) })
  ] }) });
}, _e = re(Ge);
export {
  _e as component
};
//# sourceMappingURL=modelEdit.js.map
