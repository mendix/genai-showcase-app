import { w as e, x as w, y as v, r as x, V as k, E as A, C as f, G as j, a1 as u, a2 as C, Q as M, D as b } from "./Icon-DL4Zg1xv.js";
import { s as H, c as P } from "./DesignSystemTokens-CB_9gr2a.js";
import { T as V, D as E } from "./Table-BdZeaadb.js";
import { I as y } from "./Banner-Dsp9MSVG.js";
import { D as B } from "./DialogFooter-D2shZ6-5.js";
const D = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", T = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var $ = Object.defineProperty, I = (t, r) => $(t, "name", { value: r, configurable: !0 });
const S = I((t) => e.jsx(w, { light: T, dark: D, ...t }), "AddIcon"), O = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", R = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var W = Object.defineProperty, K = (t, r) => W(t, "name", { value: r, configurable: !0 });
const L = K((t) => e.jsx(w, { light: R, dark: O, ...t }), "DeleteIcon"), z = v.span`
    font-weight: bold;
`, F = (t) => {
  const [r, a] = x.useState(t.headers), c = () => {
    a((s) => [...s, ["", ""]]);
  }, n = (s, o) => {
    a((i) => i.map((l, g) => g === s ? [o, l[1]] : l));
  }, d = (s, o) => {
    a((i) => i.map((l, g) => g === s ? [l[0], o] : l));
  }, h = (s) => {
    a((o) => o.filter((i, l) => l !== s));
  }, m = () => {
    t.onClose(r);
  }, p = () => {
    t.onClose(null);
  };
  return /* @__PURE__ */ e.jsxs(k, { children: [
    /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsxs(j, { label: "Authentication Headers", children: [
      /* @__PURE__ */ e.jsxs(y, { children: [
        /* @__PURE__ */ e.jsx(z, { children: "The headers below are not stored." }),
        /* @__PURE__ */ e.jsx("div", { children: "The headers are only used to explore tools from Studio Pro. To authenticate with MCP servers at runtime, please provide a credentials microflow." })
      ] }),
      /* @__PURE__ */ e.jsx(
        V,
        {
          ariaLabel: "Authentication headers table",
          columns: [
            { id: "key", caption: "Key", isRowHeader: !0, resizable: !0 },
            { id: "value", caption: "Value", resizable: !0 },
            { id: "delete", caption: "", minWidth: 32, defaultWidth: 32, maxWidth: 32 }
          ],
          data: r.map((s, o) => [
            /* @__PURE__ */ e.jsx(
              u,
              {
                "aria-label": `Header key ${o + 1}`,
                value: s[0],
                onChange: (i) => n(o, i),
                placeholder: "Key"
              },
              `key-${o}`
            ),
            /* @__PURE__ */ e.jsx(
              u,
              {
                "aria-label": `Header value ${o + 1}`,
                value: s[1],
                onChange: (i) => d(o, i),
                placeholder: "Value"
              },
              `value-${o}`
            ),
            /* @__PURE__ */ e.jsx(C, { icon: /* @__PURE__ */ e.jsx(L, {}), onPress: () => h(o) })
          ]),
          toolbarLeft: /* @__PURE__ */ e.jsx(
            E,
            {
              icon: /* @__PURE__ */ e.jsx(S, {}),
              label: "Add header",
              "aria-label": "Add header",
              tooltip: "Add a new header",
              onPress: c
            }
          )
        }
      )
    ] }) }) }),
    /* @__PURE__ */ e.jsx(B, { onOk: m, showHelp: !1, onCancel: p })
  ] });
}, G = ({ studioPro: t, headers: r, onClose: a }) => /* @__PURE__ */ e.jsx(b, { studioPro: t, children: /* @__PURE__ */ e.jsx(F, { headers: r, onClose: a }) }), q = {
  async loaded(t, r) {
    const a = H(t), c = P(a);
    if (!r.headers)
      throw new Error(
        "Authentication headers need to be provided to open the MCP authentication headers dialog."
      );
    try {
      const n = JSON.parse(decodeURIComponent(r.headers)), d = document.getElementById("root");
      if (!d)
        throw new Error("Failed to find the root element.");
      const h = M.createRoot(d), m = (p) => {
        a.ui.dialogs.closeWithResult(r.dialogId, p);
      };
      h.render(
        /* @__PURE__ */ e.jsx(x.StrictMode, { children: /* @__PURE__ */ e.jsx(G, { studioPro: a, headers: n, onClose: m }) })
      );
    } catch (n) {
      throw c.error("Error editing MCP authentication headers:", n), new Error("Error editing MCP authentication headers:", n);
    }
  }
};
export {
  q as component
};
//# sourceMappingURL=mcpAuthenticationHeadersEdit.js.map
