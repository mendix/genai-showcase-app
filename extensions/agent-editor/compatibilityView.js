import { j as e, d as x } from "./jsx-runtime-CWOFuNcx.js";
import { S as i, r as l, a7 as C, ad as h, a9 as g, a6 as j, a8 as f } from "./PageContainers-BvK5usmz.js";
import { T as b, D as y } from "./Table-bHKZTZKr.js";
import { M as E } from "./compatibility-B4OgVO3B.js";
import { u as M, g as V, S, a as H } from "./StatusBadge-SgCxzjaK.js";
import { E as T } from "./Banner-DAKvWnIG.js";
import { c as R } from "./genericUtils-GaF65l2f.js";
import { C as k } from "./CenteredLoadingSpinner-DRQ0Sbi_.js";
const v = ({
  width: t = "1em",
  height: o = "1em",
  fill: n = "currentColor",
  className: r,
  style: s
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: o,
    viewBox: "160.5 16.5 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: r,
    style: s,
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M169.25 17.75H161.75V25.25H160.5V17.75C160.5 17.0625 161.063 16.5 161.75 16.5H169.25V17.75Z",
          fill: n
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M164.25 31.5C163.562 31.5 163 30.9375 163 30.25V20.25C163 19.5625 163.562 19 164.25 19H174.25C174.938 19 175.5 19.5625 175.5 20.25V30.25C175.5 30.9375 174.938 31.5 174.25 31.5H164.25ZM164.25 30.25H174.25V20.25H164.25V30.25Z",
          fill: n
        }
      )
    ]
  }
), w = i(j)`
    && {
        padding: 40px 80px;
    }
`, B = i.h1`
    font-weight: 600;
    margin: 0;
`, I = i(f)`
    gap: 24px;
    max-width: 1200px;
`, L = i.h2`
    font-weight: 600;
    margin: 0;
    font-size: 20px;
`, P = i(y)`
    color: ${(t) => t.theme.colorsTextLink};
`, c = [
  { id: "module", caption: "Module", isRowHeader: !0, maxWidth: 150 },
  { id: "installedVersion", caption: "Installed Version", maxWidth: 120 },
  { id: "requiredRange", caption: "Required Version Range", maxWidth: 150 },
  { id: "status", caption: "Status", maxWidth: 100 },
  { id: "note", caption: "Note" },
  { id: "actions", caption: "", maxWidth: 140 }
], W = ({ studioPro: t }) => {
  const { data: o, agentEditorVersion: n, isPending: r, isError: s, refresh: d } = M(t), m = V(s, o);
  l.useEffect(() => {
    t.ui.panes.open({ id: "Marketplace" });
  }, [t]);
  const p = c.slice(0, m === E.Compatible ? 5 : c.length), u = o.map((a) => [
    { cellContent: a.module },
    { cellContent: a.installedVersion },
    { cellContent: a.requiredRange },
    { cellContent: /* @__PURE__ */ e.jsx(S, { status: a.status }) },
    { cellContent: a.note },
    {
      cellContent: a.marketplaceComponentId ? /* @__PURE__ */ e.jsx(
        P,
        {
          icon: /* @__PURE__ */ e.jsx(v, {}),
          label: "Copy marketplace ID",
          onPress: () => R(a.marketplaceComponentId)
        }
      ) : null
    }
  ]);
  return H(
    l.useCallback(() => {
      d();
    }, [d])
  ), o.length === 0 && r ? /* @__PURE__ */ e.jsx(k, {}) : /* @__PURE__ */ e.jsx(w, { children: /* @__PURE__ */ e.jsx(C, { children: /* @__PURE__ */ e.jsxs(I, { children: [
    /* @__PURE__ */ e.jsx(B, { children: `Agent Editor V ${n}` }),
    /* @__PURE__ */ e.jsx(L, { children: "Make sure you're ready to build" }),
    s && /* @__PURE__ */ e.jsx(T, { children: "Failed to load module information. Please try again." }),
    /* @__PURE__ */ e.jsx(
      b,
      {
        ariaLabel: "Module Compatibility Check",
        columns: p,
        data: u,
        selectionMode: "none"
      }
    )
  ] }) }) });
}, _ = {
  async loaded(t) {
    const o = x(t), n = document.getElementById("root");
    if (!n) throw new Error("Failed to find the root element");
    h.createRoot(n).render(
      /* @__PURE__ */ e.jsx(l.StrictMode, { children: /* @__PURE__ */ e.jsx(g, { studioPro: o, children: /* @__PURE__ */ e.jsx(W, { studioPro: o }) }) })
    );
  }
};
export {
  W as Compatibility,
  _ as component
};
