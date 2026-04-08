import { y as r, w as t, Z as d, _ as x, r as m, E as p } from "./Icon-DQcqUu4m.js";
import { a as f } from "./userPreferences-CMksV11G.js";
var h = Object.defineProperty, c = (e, n) => h(e, "name", { value: n, configurable: !0 });
c(() => t.jsx(l, { style: "small" }), "LoadingSpinnerInline");
const l = c(({ style: e = "large", centered: n = !1, ...s }) => {
  const i = e === "large" ? 64 : 16, o = t.jsx(d, { ...s, isIndeterminate: !0, "aria-label": "Loading...", children: () => t.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: i, height: i, viewBox: "0 0 16 16", fill: "none", children: [t.jsx(g, { cx: "8", cy: "8", r: "6.5" }), t.jsx(u, { d: "M8 1c3.866 0 7 3.13401 7 7 0 .27614-.2239.5-.5.5S14 8.27614 14 8c0-3.31371-2.6863-6-6-6-3.31371 0-6 2.68629-6 6 0 .27614-.22386.5-.5.5S1 8.27614 1 8c0-3.86599 3.13401-7 7-7Z" })] }) });
  return n ? t.jsx(j, { children: o }) : o;
}, "LoadingSpinner"), g = r.circle`
    stroke: ${({ theme: e }) => e.colorsAccentSubtlestGrey};
`, u = r.path`
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
`, j = r.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`, $ = () => {
  const e = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%"
  };
  return /* @__PURE__ */ t.jsx("div", { style: e, "data-testid": "loading-spinner", children: /* @__PURE__ */ t.jsx(l, {}) });
};
function B(e) {
  return {
    async loaded(n, s) {
      const i = f(n), { documentId: o } = s, a = document.getElementById("root");
      if (!a) throw new Error("Failed to find the root element");
      x.createRoot(a).render(
        /* @__PURE__ */ t.jsx(m.StrictMode, { children: o === null ? /* @__PURE__ */ t.jsx("span", { children: "Document not found" }) : /* @__PURE__ */ t.jsx(e, { studioPro: i, documentId: o }) })
      );
    }
  };
}
const C = r.div`
    font-weight: 600;
`, y = r.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`, w = ({ icon: e }) => /* @__PURE__ */ t.jsx(y, { children: typeof e == "string" ? /* @__PURE__ */ t.jsx(p, { src: e }) : e }), v = r.div`
    display: flex;
    align-items: center;
    gap: 4px;
`, I = r.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`, L = ({ icon: e, text: n }) => /* @__PURE__ */ t.jsxs(v, { children: [
  e && /* @__PURE__ */ t.jsx(w, { icon: e }),
  /* @__PURE__ */ t.jsx(I, { children: n })
] });
export {
  C as B,
  $ as C,
  w as I,
  L as T,
  B as c
};
