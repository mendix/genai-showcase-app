import { j as t } from "./jsx-runtime-CWOFuNcx.js";
import { S as i, bJ as c } from "./PageContainers-BK4-uZdZ.js";
var d = Object.defineProperty, o = (e, n) => d(e, "name", { value: n, configurable: !0 });
o(() => t.jsx(s, { style: "small" }), "LoadingSpinnerInline");
const s = o(({ style: e = "large", centered: n = !1, ...l }) => {
  const r = e === "large" ? 64 : 16, a = t.jsx(c, { ...l, isIndeterminate: !0, "aria-label": "Loading...", children: () => t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: r, height: r, viewBox: "0 0 16 16", fill: "none", children: [t.jsx(m, { cx: "8", cy: "8", r: "6.5" }), t.jsx(g, { d: "M8 1c3.866 0 7 3.13401 7 7 0 .27614-.2239.5-.5.5S14 8.27614 14 8c0-3.31371-2.6863-6-6-6-3.31371 0-6 2.68629-6 6 0 .27614-.22386.5-.5.5S1 8.27614 1 8c0-3.86599 3.13401-7 7-7Z" })] }) });
  return n ? t.jsx(f, { children: a }) : a;
}, "LoadingSpinner"), m = i.circle`
    stroke: ${({ theme: e }) => e.colorsAccentSubtlestGrey};
`, g = i.path`
    @keyframes rotate {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }

    fill: ${({ theme: e }) => e.colorsAccentDefaultBlue};

    animation: rotate;
    animation-direction: normal;
    animation-duration: 1.125s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: center;
`, f = i.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`, p = () => {
  const e = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
  };
  return /* @__PURE__ */ t.jsx("div", { style: e, "data-testid": "loading-spinner", children: /* @__PURE__ */ t.jsx(s, {}) });
};
export {
  p as C
};
