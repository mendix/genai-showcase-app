import { I as e, J as w, L as x, r as v, af as k, a5 as A, a1 as f, O as C, ai as u, T as j, ae as M, a3 as b } from "./Icon-Y0B9OBpL.js";
import { r as H } from "./index-CfghFsoU.js";
import { createStudioProLogger as P } from "./logger-Bof2Evv1.js";
import { u as V, D as E } from "./DialogFooter-l4IYrGaY.js";
import { T as y, D as B } from "./Table-HvwQoqjo.js";
import { I as D } from "./Banner-R-XjJFkn.js";
const T = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", I = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var S = Object.defineProperty, $ = (t, r) => S(t, "name", { value: r, configurable: !0 });
const O = $((t) => e.jsx(w, { light: I, dark: T, ...t }), "AddIcon"), R = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", L = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var W = Object.defineProperty, K = (t, r) => W(t, "name", { value: r, configurable: !0 });
const z = K((t) => e.jsx(w, { light: L, dark: R, ...t }), "DeleteIcon"), F = x.span`
    font-weight: bold;
`, J = (t) => {
  const [r, a] = v.useState(t.headers), m = () => {
    a((s) => [...s, ["", ""]]);
  }, n = (s, o) => {
    a((i) => i.map((l, g) => g === s ? [o, l[1]] : l));
  }, d = (s, o) => {
    a((i) => i.map((l, g) => g === s ? [l[0], o] : l));
  }, p = (s) => {
    a((o) => o.filter((i, l) => l !== s));
  }, c = () => {
    t.onClose(r);
  }, h = () => {
    t.onClose(null);
  };
  return V(h, c), /* @__PURE__ */ e.jsxs(k, { children: [
    /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsxs(C, { label: "Authentication Headers", children: [
      /* @__PURE__ */ e.jsxs(D, { children: [
        /* @__PURE__ */ e.jsx(F, { children: "The headers below are not stored." }),
        /* @__PURE__ */ e.jsx("div", { children: "The headers are only used to explore tools from Studio Pro. To authenticate with MCP servers at runtime, please provide a credentials microflow." })
      ] }),
      /* @__PURE__ */ e.jsx(
        y,
        {
          ariaLabel: "Authentication headers table",
          columns: [
            { id: "key", caption: "Key", isRowHeader: !0, resizable: !0 },
            { id: "value", caption: "Value", resizable: !0 },
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
              cellContent: /* @__PURE__ */ e.jsx(j, { icon: /* @__PURE__ */ e.jsx(z, {}), onPress: () => p(o) })
            }
          ]),
          toolbarLeft: /* @__PURE__ */ e.jsx(
            B,
            {
              icon: /* @__PURE__ */ e.jsx(O, {}),
              label: "Add header",
              "aria-label": "Add header",
              tooltip: "Add a new header",
              onPress: m
            }
          )
        }
      )
    ] }) }) }),
    /* @__PURE__ */ e.jsx(E, { onOk: c, showHelp: !1, onCancel: h })
  ] });
}, G = ({ studioPro: t, headers: r, onClose: a }) => /* @__PURE__ */ e.jsx(b, { studioPro: t, children: /* @__PURE__ */ e.jsx(J, { headers: r, onClose: a }) }), Y = {
  async loaded(t, r) {
    const a = H(t), m = P(a);
    if (!r.headers)
      throw new Error(
        "Authentication headers need to be provided to open the MCP authentication headers dialog."
      );
    try {
      const n = JSON.parse(decodeURIComponent(r.headers)), d = document.getElementById("root");
      if (!d)
        throw new Error("Failed to find the root element.");
      const p = M.createRoot(d), c = (h) => {
        a.ui.dialogs.closeWithResult(r.dialogId, h);
      };
      p.render(
        /* @__PURE__ */ e.jsx(v.StrictMode, { children: /* @__PURE__ */ e.jsx(G, { studioPro: a, headers: n, onClose: c }) })
      );
    } catch (n) {
      throw m.error("Error editing MCP authentication headers:", n), new Error("Error editing MCP authentication headers:", n);
    }
  }
};
export {
  Y as component
};
