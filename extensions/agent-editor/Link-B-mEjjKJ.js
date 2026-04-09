import { a as F, $ as w, c as k, b as P, Y as H, Z as V, _ as y, r as h, j as M, s as D, q as E, t as L, u as j, x as m, y as T, z as b, A as B } from "./Icon-Bb5knnP8.js";
function O(s, e) {
  let { elementType: t = "a", onPress: d, onPressStart: c, onPressEnd: n, onClick: f, isDisabled: r, ...$ } = s, i = {};
  t !== "a" && (i = {
    role: "link",
    tabIndex: r ? void 0 : 0
  });
  let { focusableProps: o } = F(s, e), { pressProps: a, isPressed: l } = w({
    onPress: d,
    onPressStart: c,
    onPressEnd: n,
    onClick: f,
    isDisabled: r,
    ref: e
  }), v = k($, {
    labelable: !0
  }), p = P(o, a), g = H(), C = V(s);
  return {
    isPressed: l,
    linkProps: P(v, C, {
      ...p,
      ...i,
      "aria-disabled": r || void 0,
      "aria-current": s["aria-current"],
      onClick: (x) => {
        var u;
        (u = a.onClick) === null || u === void 0 || u.call(a, x), y(x, g, s.href, s.routerOptions);
      }
    })
  };
}
const S = /* @__PURE__ */ h.createContext(null), z = /* @__PURE__ */ h.forwardRef(function(e, t) {
  [e, t] = M(e, t, S);
  let d = e.href && !e.isDisabled ? "a" : "span", { linkProps: c, isPressed: n } = O({
    ...e,
    elementType: d
  }, t), { hoverProps: f, isHovered: r } = D(e), { focusProps: $, isFocused: i, isFocusVisible: o } = E(), a = L({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: n,
      isHovered: r,
      isFocused: i,
      isFocusVisible: o
    }
  }), l = k(e, {
    global: !0
  });
  return delete l.onClick, /* @__PURE__ */ j.createElement(d, {
    ref: t,
    slot: e.slot || void 0,
    ...P(l, a, c, f, $),
    "data-focused": i || void 0,
    "data-hovered": r || void 0,
    "data-pressed": n || void 0,
    "data-focus-visible": o || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, a.children);
}), _ = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", I = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var R = Object.defineProperty, q = (s, e) => R(s, "name", { value: e, configurable: !0 });
const A = q((s) => m.jsx(T, { light: I, dark: _, ...s }), "ExternalLinkIcon");
var N = Object.defineProperty, U = (s, e) => N(s, "name", { value: e, configurable: !0 });
const G = U(({ children: s, href: e, ...t }) => m.jsxs(Y, { href: e, ...t, children: [s ?? e, e && m.jsx(A, {})] }), "Link"), Y = B(z)`
    font-size: ${b.fontSizeMd};
    line-height: ${b.lineHeightMd};
    color: ${({ theme: s }) => s.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${b.spacing4};
    }
`;
export {
  G as y
};
