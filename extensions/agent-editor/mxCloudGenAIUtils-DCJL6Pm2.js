import { a as E, $ as T, c as g, b as m, M as F, N as A, O as D, r as h, j as M, s as H, q as I, t as V, u as B, w as p, x as j, y as L } from "./Icon-DL4Zg1xv.js";
import { r as k, c as $ } from "./DesignSystemTokens-CB_9gr2a.js";
import { g as x } from "./ButtonWithLabel-AZ8aIohf.js";
function N(t, e) {
  let { elementType: s = "a", onPress: r, onPressStart: o, onPressEnd: n, onClick: i, isDisabled: a, ...c } = t, l = {};
  s !== "a" && (l = {
    role: "link",
    tabIndex: a ? void 0 : 0
  });
  let { focusableProps: u } = E(t, e), { pressProps: d, isPressed: f } = T({
    onPress: r,
    onPressStart: o,
    onPressEnd: n,
    onClick: i,
    isDisabled: a,
    ref: e
  }), P = g(c, {
    labelable: !0
  }), v = m(u, d), w = F(), C = A(t);
  return {
    isPressed: f,
    linkProps: m(P, C, {
      ...v,
      ...l,
      "aria-disabled": a || void 0,
      "aria-current": t["aria-current"],
      onClick: (y) => {
        var b;
        (b = d.onClick) === null || b === void 0 || b.call(d, y), D(y, w, t.href, t.routerOptions);
      }
    })
  };
}
const O = /* @__PURE__ */ h.createContext(null), S = /* @__PURE__ */ h.forwardRef(function(e, s) {
  [e, s] = M(e, s, O);
  let r = e.href && !e.isDisabled ? "a" : "span", { linkProps: o, isPressed: n } = N({
    ...e,
    elementType: r
  }, s), { hoverProps: i, isHovered: a } = H(e), { focusProps: c, isFocused: l, isFocusVisible: u } = I(), d = V({
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
  }), f = g(e, {
    global: !0
  });
  return delete f.onClick, /* @__PURE__ */ B.createElement(r, {
    ref: s,
    slot: e.slot || void 0,
    ...m(f, d, o, i, c),
    "data-focused": l || void 0,
    "data-hovered": a || void 0,
    "data-pressed": n || void 0,
    "data-focus-visible": u || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, d.children);
}), U = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", G = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var K = Object.defineProperty, J = (t, e) => K(t, "name", { value: e, configurable: !0 });
const z = J((t) => p.jsx(j, { light: G, dark: U, ...t }), "ExternalLinkIcon");
var _ = Object.defineProperty, q = (t, e) => _(t, "name", { value: e, configurable: !0 });
const se = q(({ children: t, href: e, ...s }) => p.jsxs(Q, { href: e, ...s, children: [t ?? e, e && p.jsx(z, {})] }), "Link"), Q = L(S)`
    font-size: ${k.fontSizeMd};
    line-height: ${k.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${k.spacing4};
    }
`, R = (t, e) => {
  const s = $(t);
  try {
    const r = atob(e);
    return JSON.parse(r);
  } catch (r) {
    throw s.error("Error decoding and parsing key", r), new Error("The key could not be parsed, make sure it is valid.");
  }
}, W = (t, e) => {
  const s = $(t);
  try {
    const r = atob(e);
    return JSON.parse(r);
  } catch (r) {
    throw s.error("Error decoding and parsing key", r), new Error("The key could not be parsed, make sure it is valid.");
  }
}, X = async (t, e) => {
  const s = $(t);
  try {
    const r = e.providerFields, o = await x(t, r.key);
    if (!o)
      throw new Error(
        `Constant ${r.key} does not have an accessible runtime value or default value.`
      );
    const n = R(t, o), i = await t.network.httpProxy.getProxyUrl(`${n.resourceBaseUrl}`), a = await fetch(i, {
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
  } catch (r) {
    return s.error("Error invoking MxCloud GenAI resource API:", r), r instanceof Error ? r.message : "";
  }
}, Y = async (t, e) => {
  const s = $(t);
  try {
    const r = e.providerFields, o = await x(t, r.key);
    if (!o)
      throw new Error(
        `Constant ${r.key} does not have an accessible runtime value or default value.`
      );
    const n = W(t, o), i = await t.network.httpProxy.getProxyUrl(`${n.embeddings.resourceBaseUrl}`), a = await fetch(i, {
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
  } catch (r) {
    return s.error("Error invoking MxCloud GenAI resource API:", r), r instanceof Error ? r.message : "";
  }
}, Z = (t, e) => ({
  ...t,
  name: (e == null ? void 0 : e.model) || t.name,
  displayName: e && (e.modelName || e.model) || t.displayName
}), ae = (t, e) => async () => {
  const s = await X(t, e);
  return typeof s == "string" ? s : Z(e, s);
}, oe = (t, e) => async () => {
  const s = await Y(t, e);
  return typeof s == "string" ? s : e;
};
export {
  W as a,
  Y as b,
  oe as c,
  R as d,
  ae as e,
  X as i,
  Z as u,
  se as y
};
//# sourceMappingURL=mxCloudGenAIUtils-DCJL6Pm2.js.map
