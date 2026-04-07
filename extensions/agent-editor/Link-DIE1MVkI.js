import { r as c, a as E, $ as F, c as x, b as p, W as T, X as w, Y as D, j as M, s as j, q as y, t as H, u as L, w as h, x as R, y as V } from "./Icon-DQcqUu4m.js";
import { D as O, i as _ } from "./modelUtils-DiabtMbH.js";
import { r as b } from "./userPreferences-CMksV11G.js";
const Q = ({
  studioPro: t,
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
      const s = [];
      for (const a of $)
        n.current && a.documentType === O && a.moduleName && n.current.includes(a.moduleName) ? s.push("domainModel") : u.current && a.documentType === _ ? s.push("projectSettings") : f.current.includes(a.documentId) && s.push(a.documentId);
      s.length > 0 && d.current(s);
    };
    return t.app.projectChanges.addEventListener("documentsChanged", i), () => {
      t.app.projectChanges.removeEventListener("documentsChanged", i);
    };
  }, [t.app.projectChanges]);
};
function N(t, e) {
  let { elementType: r = "a", onPress: o, onPressStart: l, onPressEnd: d, onClick: f, isDisabled: n, ...u } = t, i = {};
  r !== "a" && (i = {
    role: "link",
    tabIndex: n ? void 0 : 0
  });
  let { focusableProps: $ } = E(t, e), { pressProps: s, isPressed: a } = F({
    onPress: o,
    onPressStart: l,
    onPressEnd: d,
    onClick: f,
    isDisabled: n,
    ref: e
  }), g = x(u, {
    labelable: !0
  }), k = p($, s), v = T(), C = w(t);
  return {
    isPressed: a,
    linkProps: p(g, C, {
      ...k,
      ...i,
      "aria-disabled": n || void 0,
      "aria-current": t["aria-current"],
      onClick: (P) => {
        var m;
        (m = s.onClick) === null || m === void 0 || m.call(s, P), D(P, v, t.href, t.routerOptions);
      }
    })
  };
}
const S = /* @__PURE__ */ c.createContext(null), I = /* @__PURE__ */ c.forwardRef(function(e, r) {
  [e, r] = M(e, r, S);
  let o = e.href && !e.isDisabled ? "a" : "span", { linkProps: l, isPressed: d } = N({
    ...e,
    elementType: o
  }, r), { hoverProps: f, isHovered: n } = j(e), { focusProps: u, isFocused: i, isFocusVisible: $ } = y(), s = H({
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
    ...p(a, s, l, f, u),
    "data-focused": i || void 0,
    "data-hovered": n || void 0,
    "data-pressed": d || void 0,
    "data-focus-visible": $ || void 0,
    "data-current": !!e["aria-current"] || void 0,
    "data-disabled": e.isDisabled || void 0
  }, s.children);
}), B = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", U = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5%202.5L7.5%208.5'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9%202.5H13.5V7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%209V13C12.5%2013.275%2012.275%2013.5%2012%2013.5H3C2.725%2013.5%202.5%2013.275%202.5%2013V4C2.5%203.725%202.725%203.5%203%203.5H7'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Y = Object.defineProperty, z = (t, e) => Y(t, "name", { value: e, configurable: !0 });
const q = z((t) => h.jsx(R, { light: U, dark: B, ...t }), "ExternalLinkIcon");
var A = Object.defineProperty, G = (t, e) => A(t, "name", { value: e, configurable: !0 });
const Z = G(({ children: t, href: e, ...r }) => h.jsxs(J, { href: e, ...r, children: [t ?? e, e && h.jsx(q, {})] }), "Link"), J = V(I)`
    font-size: ${b.fontSizeMd};
    line-height: ${b.lineHeightMd};
    color: ${({ theme: t }) => t.devTokens.linkLabelTextColor};
    text-decoration: none;
    display: inline-flex;
    cursor: pointer;

    img {
        margin-left: ${b.spacing4};
    }
`;
export {
  Q as u,
  Z as y
};
//# sourceMappingURL=Link-DIE1MVkI.js.map
