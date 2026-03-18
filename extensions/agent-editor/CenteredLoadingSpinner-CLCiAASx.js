import { R as d, w as t, r as m, y as a, U as u } from "./Icon-DV--smCv.js";
import { s as f } from "./logger-CSuncX6k.js";
function v(e) {
  return {
    async loaded(n, i) {
      const r = f(n), { documentId: o } = i, s = document.getElementById("root");
      if (!s) throw new Error("Failed to find the root element");
      d.createRoot(s).render(
        /* @__PURE__ */ t.jsx(m.StrictMode, { children: o === null ? /* @__PURE__ */ t.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ t.jsx(e, { studioPro: r, documentId: o }) })
      );
    }
  };
}
var h = Object.defineProperty, c = (e, n) => h(e, "name", { value: n, configurable: !0 });
c(() => t.jsx(l, { style: "small" }), "LoadingSpinnerInline");
const l = c(({ style: e = "large", centered: n = !1, ...i }) => {
  const r = e === "large" ? 64 : 16, o = t.jsx(u, { ...i, isIndeterminate: !0, "aria-label": "Loading...", children: () => t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: r, height: r, viewBox: "0 0 16 16", fill: "none", children: [t.jsx(x, { cx: "8", cy: "8", r: "6.5" }), t.jsx(g, { d: "M8 1c3.866 0 7 3.13401 7 7 0 .27614-.2239.5-.5.5S14 8.27614 14 8c0-3.31371-2.6863-6-6-6-3.31371 0-6 2.68629-6 6 0 .27614-.22386.5-.5.5S1 8.27614 1 8c0-3.86599 3.13401-7 7-7Z" })] }) });
  return n ? t.jsx(p, { children: o }) : o;
}, "LoadingSpinner"), x = a.circle`
    stroke: ${({ theme: e }) => e.colorsAccentSubtlestGrey};
`, g = a.path`
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
`, p = a.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`, S = () => {
  const e = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
  };
  return /* @__PURE__ */ t.jsx("div", { style: e, children: /* @__PURE__ */ t.jsx(l, {}) });
};
export {
  S as C,
  v as c
};
//# sourceMappingURL=CenteredLoadingSpinner-CLCiAASx.js.map
