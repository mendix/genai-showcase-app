import { j as x } from "./jsx-runtime-CWOFuNcx.js";
import { k as F, j as w, e as h, b as P, br as H, bq as V, bK as y, r as p, x as E, I as M, F as j, E as D, G as L, H as T, R as B, T as m, S } from "./PageContainers-B4e_cfEm.js";
function O(s, e) {
  let { elementType: t = "a", onPress: i, onPressStart: $, onPressEnd: d, onClick: b, isDisabled: a, ...o } = s, n = {};
  t !== "a" && (n = {
    role: "link",
    tabIndex: a ? void 0 : 0
  });
  let { focusableProps: l } = F(s, e), { pressProps: r, isPressed: c } = w({
    onPress: i,
    onPressStart: $,
    onPressEnd: d,
    onClick: b,
    isDisabled: a,
    ref: e
  }), f = h(o, {
    labelable: !0
  }), v = P(l, r), g = H(), C = V(s);
  return {
    isPressed: c,
    linkProps: P(f, C, {
      ...v,
      ...n,
      "aria-disabled": a || void 0,
      "aria-current": s["aria-current"],
      onClick: (k) => {
        var u;
        (u = r.onClick) === null || u === void 0 || u.call(r, k), y(k, g, s.href, s.routerOptions);
      }
    })
  };
}
const I = /* @__PURE__ */ p.createContext(null), R = /* @__PURE__ */ p.forwardRef(function(e, t) {
  [e, t] = E(e, t, I);
  let i = e.href && !e.isDisabled ? "a" : "span", { linkProps: $, isPressed: d } = O({
    ...e,
    elementType: i
  }, t), b = M[i], { hoverProps: a, isHovered: o } = j(e), { focusProps: n, isFocused: l, isFocusVisible: r } = D(), c = L({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: d,
      isHovered: o,
      isFocused: l,
      isFocusVisible: r
    }
  }), f = h(e, {
    global: !0
  });
  return delete f.onClick, /* @__PURE__ */ T.createElement(b, {
    ref: t,
    slot: e.slot || void 0,
    ...P(f, c, $, a, n),
    "data-focused": l || void 0,
    "data-hovered": o || void 0,
    "data-pressed": d || void 0,
    "data-focus-visible": r || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, c.children);
}), z = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", _ = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var q = Object.defineProperty, G = (s, e) => q(s, "name", { value: e, configurable: !0 });
const K = G((s) => x.jsx(B, { light: _, dark: z, ...s }), "ExternalLinkIcon");
var N = Object.defineProperty, U = (s, e) => N(s, "name", { value: e, configurable: !0 });
const W = U(({ children: s, href: e, ...t }) => x.jsxs(A, { href: e, ...t, children: [s ?? e, e && x.jsx(K, {})] }), "Link"), A = S(R)`
    font-size: ${m.fontSizeMd};
    line-height: ${m.lineHeightMd};
    color: ${({ theme: s }) => s.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${m.spacing4};
    }
`;
export {
  K as d,
  W as y
};
