import { w as e, x as w, z as v, r as x, a0 as k, O as A, K as f, G as j, a3 as u, E as C, _ as M, N as b } from "./Icon-B83cP35T.js";
import { s as H, c as P } from "./userPreferences-BV8i5uIO.js";
import { u as V, D as E } from "./DialogFooter-BAo_stis.js";
import { T as y, D as B } from "./Table-Dft-J4Yp.js";
import { I as D } from "./Banner-D-UDHPHw.js";
const S = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", T = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%208H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014V2'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var $ = Object.defineProperty, I = (t, r) => $(t, "name", { value: r, configurable: !0 });
const O = I((t) => e.jsx(w, { light: T, dark: S, ...t }), "AddIcon"), R = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3c/svg%3e", K = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M9.5%207V13'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M2%203.5H14'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M6%201.5H10'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.5%203.5V14C12.5%2014.275%2012.275%2014.5%2012%2014.5H4C3.725%2014.5%203.5%2014.275%203.5%2014V3.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var W = Object.defineProperty, z = (t, r) => W(t, "name", { value: r, configurable: !0 });
const L = z((t) => e.jsx(w, { light: K, dark: R, ...t }), "DeleteIcon"), F = v.span`
    font-weight: bold;
`, G = (t) => {
  const [r, a] = x.useState(t.headers), m = () => {
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
    /* @__PURE__ */ e.jsx(A, { children: /* @__PURE__ */ e.jsx(f, { children: /* @__PURE__ */ e.jsxs(j, { label: "Authentication Headers", children: [
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
            /* @__PURE__ */ e.jsx(C, { icon: /* @__PURE__ */ e.jsx(L, {}), onPress: () => p(o) })
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
}, N = ({ studioPro: t, headers: r, onClose: a }) => /* @__PURE__ */ e.jsx(b, { studioPro: t, children: /* @__PURE__ */ e.jsx(G, { headers: r, onClose: a }) }), X = {
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
        /* @__PURE__ */ e.jsx(x.StrictMode, { children: /* @__PURE__ */ e.jsx(N, { studioPro: a, headers: n, onClose: c }) })
      );
    } catch (n) {
      throw m.error("Error editing MCP authentication headers:", n), new Error("Error editing MCP authentication headers:", n);
    }
  }
};
export {
  X as component
};
//# sourceMappingURL=mcpAuthenticationHeadersEdit.js.map
