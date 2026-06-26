import { r as o, R as t, ap as E, af as D, ag as M, a1 as C, ao as L, ah as R } from "./formelements-xoDBPsLY.js";
import { c as q } from "./index-BFTG2KyR.js";
import { createStudioProLogger as B } from "./logger-gMbuSAUF.js";
import { a as A } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { u as F, D as H } from "./DialogFooter-CPT3q8ld.js";
import { I as N } from "./Banner-DMJvEk30.js";
import { T as f } from "./TextInputLabeled-BZ-d3CSA.js";
const O = ({ initialAgent: a, onClose: r }) => {
  const [e, u] = o.useState(a), [n, d] = o.useState(a.maxTokens?.toString() ?? ""), [l, m] = o.useState(a.temperature?.toString() ?? ""), [i, j] = o.useState(a.topP?.toString() ?? ""), p = o.useCallback(() => n !== "" && e.maxTokens === void 0 ? "Please enter a valid number." : e.maxTokens !== void 0 && e.maxTokens < 1 ? "Max tokens must be greater than 0 (or empty)." : !0, [e.maxTokens, n]), c = o.useCallback(() => l !== "" && e.temperature === void 0 ? "Please enter a valid number." : e.temperature !== void 0 && e.temperature < 0 ? "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.temperature, l]), h = o.useCallback(() => i !== "" && e.topP === void 0 ? "Please enter a valid number." : e.topP !== void 0 && e.topP < 0 ? "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.topP, i]), g = o.useCallback(
    (v, S, x) => (s) => {
      const y = x ? /^-?\d+$/ : /^-?\d*\.?\d*$/, P = x ? ["-"] : ["-", "."];
      if (s !== "" && !P.includes(s) && !y.test(s))
        return;
      if (S(s), s === "" || P.includes(s)) {
        u((b) => ({ ...b, [v]: void 0 }));
        return;
      }
      const w = x ? parseInt(s, 10) : parseFloat(s);
      u((b) => ({ ...b, [v]: isNaN(w) ? void 0 : w }));
    },
    []
  ), T = o.useCallback(() => {
    if (p() === !0 && c() === !0 && h() === !0)
      r?.(e);
    else
      return;
  }, [r, e, p, c, h]), k = o.useCallback(() => {
    r?.(null);
  }, [r]);
  F(k, T);
  const I = o.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request", "_blank");
  }, []);
  return /* @__PURE__ */ t.jsxs(E, { children: [
    /* @__PURE__ */ t.jsx(D, { children: /* @__PURE__ */ t.jsxs(M, { children: [
      /* @__PURE__ */ t.jsx(C, { label: "Tokens", children: /* @__PURE__ */ t.jsx(
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
      /* @__PURE__ */ t.jsxs(C, { label: "Randomness", children: [
        /* @__PURE__ */ t.jsx(N, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
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
            onChange: g("topP", j, !1),
            validate: h
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(H, { onOk: T, onCancel: k, showHelp: !0, onHelp: I })
  ] });
}, Y = ({ studioPro: a, agent: r, onClose: e }) => /* @__PURE__ */ t.jsx(R, { studioPro: a, children: /* @__PURE__ */ t.jsx(O, { initialAgent: r, onClose: e }) }), K = {
  async loaded(a, r) {
    const e = q(a), u = B(e);
    if (!r.agentDocumentId)
      throw new Error("Agent document ID needs to be provided to open the Model Settings dialog.");
    try {
      const n = await A(e, r.agentDocumentId), d = document.getElementById("root");
      if (!d)
        throw new Error("Failed to find the root element.");
      const l = L.createRoot(d), m = (i) => {
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
  K as component
};
