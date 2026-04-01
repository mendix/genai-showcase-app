import { a as F, $ as w, c as k, b as m, W as H, X as V, Y as y, r as h, j as M, s as D, q as E, t as L, u as j, w as P, x as T, y as B } from "./Icon-fHsyUm8I.js";
import { r as b } from "./userPreferences-BV8i5uIO.js";
function O(s, e) {
  let { elementType: t = "a", onPress: d, onPressStart: c, onPressEnd: o, onClick: f, isDisabled: r, ...$ } = s, a = {};
  t !== "a" && (a = {
    role: "link",
    tabIndex: r ? void 0 : 0
  });
  let { focusableProps: n } = F(s, e), { pressProps: i, isPressed: l } = w({
    onPress: d,
    onPressStart: c,
    onPressEnd: o,
    onClick: f,
    isDisabled: r,
    ref: e
  }), p = k($, {
    labelable: !0
  }), v = m(n, i), g = H(), C = V(s);
  return {
    isPressed: l,
    linkProps: m(p, C, {
      ...v,
      ...a,
      "aria-disabled": r || void 0,
      "aria-current": s["aria-current"],
      onClick: (x) => {
        var u;
        (u = i.onClick) === null || u === void 0 || u.call(i, x), y(x, g, s.href, s.routerOptions);
      }
    })
  };
}
const S = /* @__PURE__ */ h.createContext(null), z = /* @__PURE__ */ h.forwardRef(function(e, t) {
  [e, t] = M(e, t, S);
  let d = e.href && !e.isDisabled ? "a" : "span", { linkProps: c, isPressed: o } = O({
    ...e,
    elementType: d
  }, t), { hoverProps: f, isHovered: r } = D(e), { focusProps: $, isFocused: a, isFocusVisible: n } = E(), i = L({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: o,
      isHovered: r,
      isFocused: a,
      isFocusVisible: n
    }
  }), l = k(e, {
    global: !0
  });
  return delete l.onClick, /* @__PURE__ */ j.createElement(d, {
    ref: t,
    slot: e.slot || void 0,
    ...m(l, i, c, f, $),
    "data-focused": a || void 0,
    "data-hovered": r || void 0,
    "data-pressed": o || void 0,
    "data-focus-visible": n || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, i.children);
}), I = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", R = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var _ = Object.defineProperty, q = (s, e) => _(s, "name", { value: e, configurable: !0 });
const N = q((s) => P.jsx(T, { light: R, dark: I, ...s }), "ExternalLinkIcon");
var U = Object.defineProperty, W = (s, e) => U(s, "name", { value: e, configurable: !0 });
const G = W(({ children: s, href: e, ...t }) => P.jsxs(X, { href: e, ...t, children: [s ?? e, e && P.jsx(N, {})] }), "Link"), X = B(z)`
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
//# sourceMappingURL=Link-6Dwxyd2F.js.map
