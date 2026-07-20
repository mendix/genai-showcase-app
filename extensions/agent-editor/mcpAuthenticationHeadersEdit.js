import { j as e, d as x } from "./jsx-runtime-CWOFuNcx.js";
import { R as w, S as k, r as v, ae as A, a7 as f, a8 as j, a0 as C, ad as M, a9 as H } from "./PageContainers-BqHFWUr4.js";
import { createStudioProLogger as b } from "./logger-gMbuSAUF.js";
import { u as P, D as V } from "./DialogFooter-6k2RbD2B.js";
import { T as E, D as y } from "./Table-DNrOUaYU.js";
import { I as B } from "./Banner-Bk-4OzcL.js";
import { f as u } from "./formelements-DRgD5gZX.js";
import { G as D } from "./GroupBox-Czphilzs.js";
const R = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", S = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var $ = Object.defineProperty, T = (t, r) => $(t, "name", { value: r, configurable: !0 });
const I = T((t) => e.jsx(w, { light: S, dark: R, ...t }), "AddIcon"), O = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", W = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var K = Object.defineProperty, L = (t, r) => K(t, "name", { value: r, configurable: !0 });
const z = L((t) => e.jsx(w, { light: W, dark: O, ...t }), "DeleteIcon"), F = k.span`
    font-weight: bold;
`, G = (t) => {
  const [r, a] = v.useState(t.headers), m = () => {
    a((s) => [...s, ["", ""]]);
  }, n = (s, o) => {
    a((i) => i.map((l, p) => p === s ? [o, l[1]] : l));
  }, d = (s, o) => {
    a((i) => i.map((l, p) => p === s ? [l[0], o] : l));
  }, g = (s) => {
    a((o) => o.filter((i, l) => l !== s));
  }, c = () => {
    t.onClose(r);
  }, h = () => {
    t.onClose(null);
  };
  return P(h, c), /* @__PURE__ */ e.jsxs(A, { children: [
    /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsx(j, { children: /* @__PURE__ */ e.jsxs(D, { label: "Authentication Headers", children: [
      /* @__PURE__ */ e.jsxs(B, { children: [
        /* @__PURE__ */ e.jsx(F, { children: "The headers below are not stored." }),
        /* @__PURE__ */ e.jsx("div", { children: "The headers are only used to explore tools from Studio Pro. To authenticate with MCP servers at runtime, please provide a credentials microflow." })
      ] }),
      /* @__PURE__ */ e.jsx(
        E,
        {
          ariaLabel: "Authentication headers table",
          columns: [
            { id: "key", caption: "Key", isRowHeader: !0, allowsResizing: !0 },
            { id: "value", caption: "Value", allowsResizing: !0 },
            { id: "delete", caption: "", minWidth: 32, defaultWidth: 32, maxWidth: 32 }
          ],
          data: r.map((s, o) => [
            {
              cellContent: /* @__PURE__ */ e.jsx(
                u,
                {
                  "aria-label": `Header key ${o + 1}`,
                  value: s[0],
                  onChange: (i) => n(o, i),
                  placeholder: "Key"
                },
                `key-${o}`
              )
            },
            {
              cellContent: /* @__PURE__ */ e.jsx(
                u,
                {
                  "aria-label": `Header value ${o + 1}`,
                  value: s[1],
                  onChange: (i) => d(o, i),
                  placeholder: "Value"
                },
                `value-${o}`
              )
            },
            {
              cellContent: /* @__PURE__ */ e.jsx(C, { icon: /* @__PURE__ */ e.jsx(z, {}), onPress: () => g(o) })
            }
          ]),
          toolbarLeft: /* @__PURE__ */ e.jsx(
            y,
            {
              icon: /* @__PURE__ */ e.jsx(I, {}),
              label: "Add header",
              "aria-label": "Add header",
              tooltip: "Add a new header",
              onPress: m
            }
          )
        }
      )
    ] }) }) }),
    /* @__PURE__ */ e.jsx(V, { onOk: c, showHelp: !1, onCancel: h })
  ] });
}, J = ({ studioPro: t, headers: r, onClose: a }) => /* @__PURE__ */ e.jsx(H, { studioPro: t, children: /* @__PURE__ */ e.jsx(G, { headers: r, onClose: a }) }), ee = {
  async loaded(t, r) {
    const a = x(t), m = b(a);
    if (!r.headers)
      throw new Error(
        "Authentication headers need to be provided to open the MCP authentication headers dialog."
      );
    try {
      const n = JSON.parse(decodeURIComponent(r.headers)), d = document.getElementById("root");
      if (!d)
        throw new Error("Failed to find the root element.");
      const g = M.createRoot(d), c = (h) => {
        a.ui.dialogs.closeWithResult(r.dialogId, h);
      };
      g.render(
        /* @__PURE__ */ e.jsx(v.StrictMode, { children: /* @__PURE__ */ e.jsx(J, { studioPro: a, headers: n, onClose: c }) })
      );
    } catch (n) {
      throw m.error("Error editing MCP authentication headers:", n), new Error("Error editing MCP authentication headers:", n);
    }
  }
};
export {
  ee as component
};
