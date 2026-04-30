import { r as o, H as r, ag as L, a6 as q, a2 as R, P as y, af as B, a4 as H } from "./Icon-UiLWY9J1.js";
import { r as A } from "./index-CfghFsoU.js";
import { createStudioProLogger as F } from "./logger-Bof2Evv1.js";
import { a as N } from "./customBlobDocumentUtils-Dwvjb_jQ.js";
import { u as O, D as Y } from "./DialogFooter-CMEdDiSN.js";
import { I as $ } from "./Banner-87Geup2v.js";
import { T as f } from "./TextInputLabeled-BOV58C6a.js";
const G = ({ initialAgent: a, onClose: t }) => {
  var v, P, w;
  const [e, u] = o.useState(a), [n, d] = o.useState(((v = a.maxTokens) == null ? void 0 : v.toString()) ?? ""), [i, m] = o.useState(((P = a.temperature) == null ? void 0 : P.toString()) ?? ""), [l, E] = o.useState(((w = a.topP) == null ? void 0 : w.toString()) ?? ""), p = o.useCallback(() => n !== "" && e.maxTokens === void 0 ? "Please enter a valid number." : e.maxTokens !== void 0 && e.maxTokens < 1 ? "Max tokens must be greater than 0 (or empty)." : !0, [e.maxTokens, n]), c = o.useCallback(() => i !== "" && e.temperature === void 0 ? "Please enter a valid number." : e.temperature !== void 0 && e.temperature < 0 ? "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.temperature, i]), h = o.useCallback(() => l !== "" && e.topP === void 0 ? "Please enter a valid number." : e.topP !== void 0 && e.topP < 0 ? "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.topP, l]), g = o.useCallback(
    (j, D, x) => (s) => {
      const M = x ? /^-?\d+$/ : /^-?\d*\.?\d*$/, I = x ? ["-"] : ["-", "."];
      if (s !== "" && !I.includes(s) && !M.test(s))
        return;
      if (D(s), s === "" || I.includes(s)) {
        u((b) => ({ ...b, [j]: void 0 }));
        return;
      }
      const S = x ? parseInt(s, 10) : parseFloat(s);
      u((b) => ({ ...b, [j]: isNaN(S) ? void 0 : S }));
    },
    []
  ), T = o.useCallback(() => {
    if (p() === !0 && c() === !0 && h() === !0)
      t == null || t(e);
    else
      return;
  }, [t, e, p, c, h]), k = o.useCallback(() => {
    t == null || t(null);
  }, [t]);
  O(k, T);
  const C = o.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request", "_blank");
  }, []);
  return /* @__PURE__ */ r.jsxs(L, { children: [
    /* @__PURE__ */ r.jsx(q, { children: /* @__PURE__ */ r.jsxs(R, { children: [
      /* @__PURE__ */ r.jsx(y, { label: "Tokens", children: /* @__PURE__ */ r.jsx(
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
      /* @__PURE__ */ r.jsxs(y, { label: "Randomness", children: [
        /* @__PURE__ */ r.jsx($, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
        /* @__PURE__ */ r.jsx(
          f,
          {
            label: "Temperature",
            ariaLabel: "Temperature",
            value: i,
            description: "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity.",
            onChange: g("temperature", m, !1),
            validate: c
          }
        ),
        /* @__PURE__ */ r.jsx(
          f,
          {
            label: "TopP",
            ariaLabel: "TopP",
            value: l,
            description: "TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response.",
            onChange: g("topP", E, !1),
            validate: h
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx(Y, { onOk: T, onCancel: k, showHelp: !0, onHelp: C })
  ] });
}, V = ({ studioPro: a, agent: t, onClose: e }) => /* @__PURE__ */ r.jsx(H, { studioPro: a, children: /* @__PURE__ */ r.jsx(G, { initialAgent: t, onClose: e }) }), X = {
  async loaded(a, t) {
    const e = A(a), u = F(e);
    if (!t.agentDocumentId)
      throw new Error("Agent document ID needs to be provided to open the Model Settings dialog.");
    try {
      const n = await N(e, t.agentDocumentId), d = document.getElementById("root");
      if (!d)
        throw new Error("Failed to find the root element.");
      const i = B.createRoot(d), m = (l) => {
        e.ui.dialogs.closeWithResult(t.dialogId, l);
      };
      i.render(
        /* @__PURE__ */ r.jsx(o.StrictMode, { children: /* @__PURE__ */ r.jsx(V, { studioPro: e, agent: n, onClose: m }) })
      );
    } catch (n) {
      throw u.error("Error editing model settings:", n), new Error("Error editing model settings:", n);
    }
  }
};
export {
  X as component
};
