import { a as T, $ as F, c as h, b, M as A, N as D, O as M, r as g, j as H, s as I, q as V, t as B, u as j, w as m, x as L, y as N } from "./Icon-DL4Zg1xv.js";
import { r as p, c as $ } from "./DesignSystemTokens-CB_9gr2a.js";
import { g as x } from "./ButtonWithLabel-AZ8aIohf.js";
function O(t, e) {
  let { elementType: s = "a", onPress: r, onPressStart: o, onPressEnd: n, onClick: i, isDisabled: a, ...c } = t, l = {};
  s !== "a" && (l = {
    role: "link",
    tabIndex: a ? void 0 : 0
  });
  let { focusableProps: u } = T(t, e), { pressProps: d, isPressed: f } = F({
    onPress: r,
    onPressStart: o,
    onPressEnd: n,
    onClick: i,
    isDisabled: a,
    ref: e
  }), v = h(c, {
    labelable: !0
  }), w = b(u, d), C = A(), E = D(t);
  return {
    isPressed: f,
    linkProps: b(v, E, {
      ...w,
      ...l,
      "aria-disabled": a || void 0,
      "aria-current": t["aria-current"],
      onClick: (y) => {
        var k;
        (k = d.onClick) === null || k === void 0 || k.call(d, y), M(y, C, t.href, t.routerOptions);
      }
    })
  };
}
const S = /* @__PURE__ */ g.createContext(null), U = /* @__PURE__ */ g.forwardRef(function(e, s) {
  [e, s] = H(e, s, S);
  let r = e.href && !e.isDisabled ? "a" : "span", { linkProps: o, isPressed: n } = O({
    ...e,
    elementType: r
  }, s), { hoverProps: i, isHovered: a } = I(e), { focusProps: c, isFocused: l, isFocusVisible: u } = V(), d = B({
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
  }), f = h(e, {
    global: !0
  });
  return delete f.onClick, /* @__PURE__ */ j.createElement(r, {
    ref: s,
    slot: e.slot || void 0,
    ...b(f, d, o, i, c),
    "data-focused": l || void 0,
    "data-hovered": a || void 0,
    "data-pressed": n || void 0,
    "data-focus-visible": u || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, d.children);
}), G = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", K = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var J = Object.defineProperty, z = (t, e) => J(t, "name", { value: e, configurable: !0 });
const _ = z((t) => m.jsx(L, { light: K, dark: G, ...t }), "ExternalLinkIcon");
var q = Object.defineProperty, Q = (t, e) => q(t, "name", { value: e, configurable: !0 });
const re = Q(({ children: t, href: e, ...s }) => m.jsxs(R, { href: e, ...s, children: [t ?? e, e && m.jsx(_, {})] }), "Link"), R = N(U)`
    font-size: ${p.fontSizeMd};
    line-height: ${p.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${p.spacing4};
    }
`, P = (t, e) => {
  const s = $(t);
  try {
    const r = atob(e);
    return JSON.parse(r);
  } catch (r) {
    throw s.error("Error decoding and parsing key", r), new Error("The key could not be parsed, make sure it is valid.");
  }
}, se = (t, e) => {
  const s = $(t);
  try {
    const r = atob(e);
    return JSON.parse(r);
  } catch (r) {
    throw s.error("Error decoding and parsing key", r), new Error("The key could not be parsed, make sure it is valid.");
  }
}, W = async (t, e) => {
  const s = $(t);
  try {
    const r = e.providerFields, o = await x(t, r.key);
    if (!o)
      throw new Error(
        `Constant ${r.key} does not have an accessible runtime value or default value.`
      );
    const n = P(t, o), i = await t.network.httpProxy.getProxyUrl(`${n.resourceBaseUrl}`), a = await fetch(i, {
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
}, X = async (t, e) => {
  const s = $(t);
  try {
    const r = e.providerFields, o = await x(t, r.key);
    if (!o)
      throw new Error(
        `Constant ${r.key} does not have an accessible runtime value or default value.`
      );
    const n = P(t, o), i = await t.network.httpProxy.getProxyUrl(`${n.resourceBaseUrl}`), a = await fetch(i, {
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
}, Y = (t, e) => ({
  ...t,
  name: (e == null ? void 0 : e.model) || t.name,
  displayName: e && (e.modelName || e.model) || t.displayName
}), ae = (t, e) => async () => {
  const s = await W(t, e);
  return typeof s == "string" ? s : Y(e, s);
}, oe = (t, e) => async () => {
  const s = await X(t, e);
  return typeof s == "string" ? s : e;
};
export {
  se as a,
  oe as b,
  P as d,
  ae as e,
  W as i,
  Y as u,
  re as y
};
//# sourceMappingURL=mxCloudGenAIUtils-rsbOG_Rs.js.map
