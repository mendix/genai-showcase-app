import { a as E, $ as T, c as y, b as $, M as D, N as M, O as A, r as h, j as B, s as I, q as H, t as V, u as N, w as k, x as j, y as K } from "./Icon-DL4Zg1xv.js";
import { r as b, c as m } from "./DesignSystemTokens-CB_9gr2a.js";
import { g as x } from "./ButtonWithLabel-AZ8aIohf.js";
import { d as L } from "./modelUtils-IL_KjN2R.js";
function G(r, e) {
  let { elementType: s = "a", onPress: t, onPressStart: o, onPressEnd: n, onClick: i, isDisabled: a, ...c } = r, l = {};
  s !== "a" && (l = {
    role: "link",
    tabIndex: a ? void 0 : 0
  });
  let { focusableProps: u } = E(r, e), { pressProps: d, isPressed: f } = T({
    onPress: t,
    onPressStart: o,
    onPressEnd: n,
    onClick: i,
    isDisabled: a,
    ref: e
  }), v = y(c, {
    labelable: !0
  }), w = $(u, d), C = D(), F = M(r);
  return {
    isPressed: f,
    linkProps: $(v, F, {
      ...w,
      ...l,
      "aria-disabled": a || void 0,
      "aria-current": r["aria-current"],
      onClick: (g) => {
        var p;
        (p = d.onClick) === null || p === void 0 || p.call(d, g), A(g, C, r.href, r.routerOptions);
      }
    })
  };
}
const O = /* @__PURE__ */ h.createContext(null), S = /* @__PURE__ */ h.forwardRef(function(e, s) {
  [e, s] = B(e, s, O);
  let t = e.href && !e.isDisabled ? "a" : "span", { linkProps: o, isPressed: n } = G({
    ...e,
    elementType: t
  }, s), { hoverProps: i, isHovered: a } = I(e), { focusProps: c, isFocused: l, isFocusVisible: u } = H(), d = V({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: n,
      isHovered: a,
      isFocused: l,
      isFocusVisible: u
    }
  }), f = y(e, {
    global: !0
  });
  return delete f.onClick, /* @__PURE__ */ N.createElement(t, {
    ref: s,
    slot: e.slot || void 0,
    ...$(f, d, o, i, c),
    "data-focused": l || void 0,
    "data-hovered": a || void 0,
    "data-pressed": n || void 0,
    "data-focus-visible": u || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, d.children);
}), U = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", J = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var z = Object.defineProperty, _ = (r, e) => z(r, "name", { value: e, configurable: !0 });
const q = _((r) => k.jsx(j, { light: J, dark: U, ...r }), "ExternalLinkIcon");
var Q = Object.defineProperty, R = (r, e) => Q(r, "name", { value: e, configurable: !0 });
const ae = R(({ children: r, href: e, ...s }) => k.jsxs(W, { href: e, ...s, children: [r ?? e, e && k.jsx(q, {})] }), "Link"), W = K(S)`
    font-size: ${b.fontSizeMd};
    line-height: ${b.lineHeightMd};
    color: ${({ theme: r }) => r.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${b.spacing4};
    }
`, X = (r, e) => {
  const s = m(r);
  try {
    const t = atob(e);
    return JSON.parse(t);
  } catch (t) {
    throw s.error("Error decoding and parsing key", t), new Error("The key could not be parsed, make sure it is valid.");
  }
}, Y = (r, e) => {
  const s = m(r);
  try {
    const t = atob(e);
    return JSON.parse(t);
  } catch (t) {
    throw s.error("Error decoding and parsing key", t), new Error("The key could not be parsed, make sure it is valid.");
  }
}, Z = async (r, e) => {
  const s = m(r);
  try {
    const t = e.providerFields, o = await x(r, t.key);
    if (!o)
      throw new Error(
        `Constant ${t.key} does not have an accessible runtime value or default value.`
      );
    const n = X(r, o), i = await r.network.httpProxy.getProxyUrl(`${n.resourceBaseUrl}`), a = await fetch(i, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": n.accessToken
      },
      credentials: "omit"
    });
    if (a.status !== 200)
      throw new Error(`HTTP ${a.status}: ${a.statusText}`);
    return await a.json();
  } catch (t) {
    return s.error("Error invoking MxCloud GenAI resource API:", t), t instanceof Error ? t.message : "";
  }
}, oe = async (r, e) => {
  const s = m(r);
  try {
    const t = e.providerFields, o = await x(r, t.key);
    if (!o)
      throw new Error(
        `Constant ${t.key} does not have an accessible runtime value or default value.`
      );
    const n = Y(r, o), i = await r.network.httpProxy.getProxyUrl(`${n.embeddings.resourceBaseUrl}`), a = await fetch(i, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": n.embeddings.accessToken
      },
      credentials: "omit"
    });
    if (a.status !== 200)
      throw new Error(`HTTP ${a.status}: ${a.statusText}`);
    return await a.json();
  } catch (t) {
    return s.error("Error invoking MxCloud GenAI resource API:", t), t instanceof Error ? t.message : "";
  }
}, P = (r, e) => ({
  ...r,
  name: (e == null ? void 0 : e.model) || r.name,
  displayName: e && (e.modelName || e.model) || r.displayName
}), ne = (r, e) => {
  const s = L(), t = P(s, e), o = {
    ...r.providerFields,
    modelDisplayName: t.displayName,
    modelName: t.name
  };
  return {
    ...r,
    providerFields: o
  };
}, ie = (r, e) => async () => {
  const s = await Z(r, e);
  return typeof s == "string" ? s : P(e, s);
};
export {
  Y as a,
  oe as b,
  ne as c,
  X as d,
  ie as e,
  Z as i,
  P as u,
  ae as y
};
//# sourceMappingURL=mxCloudGenAIUtils-CuBWLEHg.js.map
