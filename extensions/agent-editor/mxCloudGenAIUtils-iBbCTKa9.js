import { a as F, $ as A, c as h, b as y, M as D, N as M, O as I, r as x, j as B, s as H, q as V, t as j, u as N, w as $, x as U, y as G } from "./Icon-DlQJfq7F.js";
import { r as k, c as f } from "./DesignSystemTokens-BZrmEyPo.js";
import { g as b, d as L } from "./modelUtils-B5ix1w9q.js";
function K(e, r) {
  let { elementType: s = "a", onPress: t, onPressStart: o, onPressEnd: n, onClick: i, isDisabled: a, ...c } = e, d = {};
  s !== "a" && (d = {
    role: "link",
    tabIndex: a ? void 0 : 0
  });
  let { focusableProps: l } = F(e, r), { pressProps: u, isPressed: m } = A({
    onPress: t,
    onPressStart: o,
    onPressEnd: n,
    onClick: i,
    isDisabled: a,
    ref: r
  }), P = h(c, {
    labelable: !0
  }), C = y(l, u), E = D(), T = M(e);
  return {
    isPressed: m,
    linkProps: y(P, T, {
      ...C,
      ...d,
      "aria-disabled": a || void 0,
      "aria-current": e["aria-current"],
      onClick: (g) => {
        var p;
        (p = u.onClick) === null || p === void 0 || p.call(u, g), I(g, E, e.href, e.routerOptions);
      }
    })
  };
}
const O = /* @__PURE__ */ x.createContext(null), S = /* @__PURE__ */ x.forwardRef(function(r, s) {
  [r, s] = B(r, s, O);
  let t = r.href && !r.isDisabled ? "a" : "span", { linkProps: o, isPressed: n } = K({
    ...r,
    elementType: t
  }, s), { hoverProps: i, isHovered: a } = H(r), { focusProps: c, isFocused: d, isFocusVisible: l } = V(), u = j({
    ...r,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!r["aria-current"],
      isDisabled: r.isDisabled || !1,
      isPressed: n,
      isHovered: a,
      isFocused: d,
      isFocusVisible: l
    }
  }), m = h(r, {
    global: !0
  });
  return delete m.onClick, /* @__PURE__ */ N.createElement(t, {
    ref: s,
    slot: r.slot || void 0,
    ...y(m, u, o, i, c),
    "data-focused": d || void 0,
    "data-hovered": a || void 0,
    "data-pressed": n || void 0,
    "data-focus-visible": l || void 0,
    "data-current": !!r["aria-current"] || void 0,
    "data-disabled": r.isDisabled || void 0
  }, u.children);
}), J = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", q = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var z = Object.defineProperty, _ = (e, r) => z(e, "name", { value: r, configurable: !0 });
const Q = _((e) => $.jsx(U, { light: q, dark: J, ...e }), "ExternalLinkIcon");
var R = Object.defineProperty, W = (e, r) => R(e, "name", { value: r, configurable: !0 });
const se = W(({ children: e, href: r, ...s }) => $.jsxs(X, { href: r, ...s, children: [e ?? r, r && $.jsx(Q, {})] }), "Link"), X = G(S)`
    font-size: ${k.fontSizeMd};
    line-height: ${k.lineHeightMd};
    color: ${({ theme: e }) => e.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${k.spacing4};
    }
`, Y = (e, r) => {
  const s = f(e);
  try {
    const t = atob(r);
    return JSON.parse(t);
  } catch (t) {
    throw s.error("Error decoding and parsing key", t), new Error("The key could not be parsed, make sure it is valid.");
  }
}, w = (e, r) => {
  const s = f(e);
  try {
    const t = atob(r);
    return JSON.parse(t);
  } catch (t) {
    throw s.error("Error decoding and parsing key", t), new Error("The key could not be parsed, make sure it is valid.");
  }
}, Z = async (e, r) => {
  const s = f(e);
  try {
    const t = r.providerFields;
    if (!t.key)
      throw new Error("Model key is not configured.");
    const o = await b(e, t.key);
    if (!o)
      throw new Error(
        `Constant ${t.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const n = Y(e, o), i = await e.network.httpProxy.getProxyUrl(`${n.resourceBaseUrl}`), a = await fetch(i, {
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
}, ae = async (e, r) => {
  const s = f(e);
  try {
    const t = r.providerFields, o = await b(e, t.key);
    if (!o)
      throw new Error(
        `Constant ${t.key} does not have an accessible runtime value or default value.`
      );
    const n = w(e, o), i = await e.network.httpProxy.getProxyUrl(`${n.embeddings.resourceBaseUrl}`), a = await fetch(i, {
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
}, v = (e, r) => ({
  ...e,
  name: (r == null ? void 0 : r.model) || e.name,
  displayName: r && (r.modelName || r.model) || e.displayName
}), oe = (e, r) => {
  const s = L(), t = v(s, r);
  return {
    ...e,
    providerFields: {
      ...e.providerFields,
      modelDisplayName: t.displayName,
      modelName: t.name
    }
  };
}, ne = (e, r) => async () => {
  const s = await Z(e, r);
  return typeof s == "string" ? s : v(r, s);
}, ie = (e, r) => async () => {
  const s = f(e);
  try {
    const t = r.providerFields, o = await b(e, t.key);
    if (!o)
      throw new Error(
        `Constant ${t.key} does not have an accessible runtime value or default value.`
      );
    const n = w(e, o), i = await e.network.httpProxy.getProxyUrl(
      `${n.resourceBaseUrl}/knowledge-bases`
    ), a = await fetch(i, {
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
    const c = await a.json(), d = [];
    return c.content.forEach((l) => d.push({ name: l.name })), d;
  } catch (t) {
    return s.error("Error invoking MxCloud GenAI resource API:", t), t instanceof Error ? t.message : "";
  }
};
export {
  ae as a,
  oe as b,
  w as c,
  Y as d,
  ne as e,
  ie as g,
  Z as i,
  v as u,
  se as y
};
//# sourceMappingURL=mxCloudGenAIUtils-iBbCTKa9.js.map
