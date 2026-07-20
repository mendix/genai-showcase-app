import { j as t, d as y } from "./jsx-runtime-CWOFuNcx.js";
import { r as o, ae as D, a7 as M, a8 as L, ad as q, a9 as R } from "./PageContainers-BqHFWUr4.js";
import { createStudioProLogger as B } from "./logger-gMbuSAUF.js";
import { a as A } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { u as F, D as H } from "./DialogFooter-6k2RbD2B.js";
import { o as N } from "./genericUtils-GaF65l2f.js";
import { I as G } from "./Banner-Bk-4OzcL.js";
import { G as j } from "./GroupBox-Czphilzs.js";
import { T as f } from "./TextInputLabeled-D9mRNz7v.js";
const O = ({ initialAgent: a, onClose: r }) => {
  const [e, u] = o.useState(a), [n, d] = o.useState(a.maxTokens?.toString() ?? ""), [l, m] = o.useState(a.temperature?.toString() ?? ""), [i, C] = o.useState(a.topP?.toString() ?? ""), p = o.useCallback(() => n !== "" && e.maxTokens === void 0 ? "Please enter a valid number." : e.maxTokens !== void 0 && e.maxTokens < 1 ? "Max tokens must be greater than 0 (or empty)." : !0, [e.maxTokens, n]), c = o.useCallback(() => l !== "" && e.temperature === void 0 ? "Please enter a valid number." : e.temperature !== void 0 && e.temperature < 0 ? "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.temperature, l]), h = o.useCallback(() => i !== "" && e.topP === void 0 ? "Please enter a valid number." : e.topP !== void 0 && e.topP < 0 ? "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.topP, i]), g = o.useCallback(
    (k, E, x) => (s) => {
      const S = x ? /^-?\d+$/ : /^-?\d*\.?\d*$/, P = x ? ["-"] : ["-", "."];
      if (s !== "" && !P.includes(s) && !S.test(s))
        return;
      if (E(s), s === "" || P.includes(s)) {
        u((b) => ({ ...b, [k]: void 0 }));
        return;
      }
      const w = x ? parseInt(s, 10) : parseFloat(s);
      u((b) => ({ ...b, [k]: isNaN(w) ? void 0 : w }));
    },
    []
  ), T = o.useCallback(() => {
    if (p() === !0 && c() === !0 && h() === !0)
      r?.(e);
    else
      return;
  }, [r, e, p, c, h]), v = o.useCallback(() => {
    r?.(null);
  }, [r]);
  F(v, T);
  const I = o.useCallback(() => {
    N("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request");
  }, []);
  return /* @__PURE__ */ t.jsxs(D, { children: [
    /* @__PURE__ */ t.jsx(M, { children: /* @__PURE__ */ t.jsxs(L, { children: [
      /* @__PURE__ */ t.jsx(j, { label: "Tokens", children: /* @__PURE__ */ t.jsx(
        f,
        {
          label: "Max tokens",
          ariaLabel: "Max tokens",
          value: n,
          description: "The maximum number of tokens per request.",
          onChange: g("maxTokens", d, !0),
          validate: p
        }
      ) }),
      /* @__PURE__ */ t.jsxs(j, { label: "Randomness", children: [
        /* @__PURE__ */ t.jsx(G, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
        /* @__PURE__ */ t.jsx(
          f,
          {
            label: "Temperature",
            ariaLabel: "Temperature",
            value: l,
            description: "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity.",
            onChange: g("temperature", m, !1),
            validate: c
          }
        ),
        /* @__PURE__ */ t.jsx(
          f,
          {
            label: "TopP",
            ariaLabel: "TopP",
            value: i,
            description: "TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response.",
            onChange: g("topP", C, !1),
            validate: h
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(H, { onOk: T, onCancel: v, showHelp: !0, onHelp: I })
  ] });
}, Y = ({ studioPro: a, agent: r, onClose: e }) => /* @__PURE__ */ t.jsx(R, { studioPro: a, children: /* @__PURE__ */ t.jsx(O, { initialAgent: r, onClose: e }) }), Z = {
  async loaded(a, r) {
    const e = y(a), u = B(e);
    if (!r.agentDocumentId)
      throw new Error("Agent document ID needs to be provided to open the Model Settings dialog.");
    try {
      const n = await A(e, r.agentDocumentId), d = document.getElementById("root");
      if (!d)
        throw new Error("Failed to find the root element.");
      const l = q.createRoot(d), m = (i) => {
        e.ui.dialogs.closeWithResult(r.dialogId, i);
      };
      l.render(
        /* @__PURE__ */ t.jsx(o.StrictMode, { children: /* @__PURE__ */ t.jsx(Y, { studioPro: e, agent: n, onClose: m }) })
      );
    } catch (n) {
      throw u.error("Error editing model settings:", n), new Error("Error editing model settings:", n);
    }
  }
};
export {
  Z as component
};
