import { r as c, a as E, $ as F, c as x, b as p, Y as T, Z as D, _ as M, j as w, s as j, q as y, t as H, u as L, x as h, y as R, z as m, A as V } from "./Icon-Bb5knnP8.js";
import { D as O, B as _ } from "./index-DePCaYQI.js";
const Q = ({
  studioPro: s,
  dependentIds: e,
  onDependentDocumentsChanged: r,
  watchProjectSettings: o,
  watchDomainModelModules: l
}) => {
  const d = c.useRef(r);
  d.current = r;
  const f = c.useRef(e);
  f.current = e;
  const n = c.useRef(l);
  n.current = l;
  const u = c.useRef(o);
  u.current = o, c.useEffect(() => {
    const i = ({ documents: $ }) => {
      const t = [];
      for (const a of $)
        n.current && a.documentType === O && a.moduleName && n.current.includes(a.moduleName) ? t.push("domainModel") : u.current && a.documentType === _ ? t.push("projectSettings") : f.current.includes(a.documentId) && t.push(a.documentId);
      t.length > 0 && d.current(t);
    };
    return s.app.projectChanges.addEventListener("documentsChanged", i), () => {
      s.app.projectChanges.removeEventListener("documentsChanged", i);
    };
  }, [s.app.projectChanges]);
};
function N(s, e) {
  let { elementType: r = "a", onPress: o, onPressStart: l, onPressEnd: d, onClick: f, isDisabled: n, ...u } = s, i = {};
  r !== "a" && (i = {
    role: "link",
    tabIndex: n ? void 0 : 0
  });
  let { focusableProps: $ } = E(s, e), { pressProps: t, isPressed: a } = F({
    onPress: o,
    onPressStart: l,
    onPressEnd: d,
    onClick: f,
    isDisabled: n,
    ref: e
  }), g = x(u, {
    labelable: !0
  }), k = p($, t), v = T(), C = D(s);
  return {
    isPressed: a,
    linkProps: p(g, C, {
      ...k,
      ...i,
      "aria-disabled": n || void 0,
      "aria-current": s["aria-current"],
      onClick: (P) => {
        var b;
        (b = t.onClick) === null || b === void 0 || b.call(t, P), M(P, v, s.href, s.routerOptions);
      }
    })
  };
}
const S = /* @__PURE__ */ c.createContext(null), B = /* @__PURE__ */ c.forwardRef(function(e, r) {
  [e, r] = w(e, r, S);
  let o = e.href && !e.isDisabled ? "a" : "span", { linkProps: l, isPressed: d } = N({
    ...e,
    elementType: o
  }, r), { hoverProps: f, isHovered: n } = j(e), { focusProps: u, isFocused: i, isFocusVisible: $ } = y(), t = H({
    ...e,
    defaultClassName: "react-aria-Link",
    values: {
      isCurrent: !!e["aria-current"],
      isDisabled: e.isDisabled || !1,
      isPressed: d,
      isHovered: n,
      isFocused: i,
      isFocusVisible: $
    }
  }), a = x(e, {
    global: !0
  });
  return delete a.onClick, /* @__PURE__ */ L.createElement(o, {
    ref: r,
    slot: e.slot || void 0,
    ...p(a, t, l, f, u),
    "data-focused": i || void 0,
    "data-hovered": n || void 0,
    "data-pressed": d || void 0,
    "data-focus-visible": $ || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, t.children);
}), I = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", z = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var U = Object.defineProperty, Y = (s, e) => U(s, "name", { value: e, configurable: !0 });
const A = Y((s) => h.jsx(R, { light: z, dark: I, ...s }), "ExternalLinkIcon");
var q = Object.defineProperty, G = (s, e) => q(s, "name", { value: e, configurable: !0 });
const W = G(({ children: s, href: e, ...r }) => h.jsxs(J, { href: e, ...r, children: [s ?? e, e && h.jsx(A, {})] }), "Link"), J = V(B)`
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
  Q as u,
  W as y
};
