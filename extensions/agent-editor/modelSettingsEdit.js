import { r as o, w as r, W as R, E as q, C as D, G as E, U as N, D as B } from "./Icon-CvuNKlFz.js";
import { t as F, c as H } from "./logger-CC_FxqwC.js";
import { I as O } from "./Banner-DqxPN7xb.js";
import { D as A } from "./DialogFooter-nKSiefLD.js";
import { T as f } from "./TextInputLabeled-DcVXDdJd.js";
const G = ({ initialAgent: a, onClose: t }) => {
  var T, k, v;
  const [e, d] = o.useState(a), [n, u] = o.useState(((T = a.maxTokens) == null ? void 0 : T.toString()) ?? ""), [i, m] = o.useState(((k = a.temperature) == null ? void 0 : k.toString()) ?? ""), [l, S] = o.useState(((v = a.topP) == null ? void 0 : v.toString()) ?? ""), p = o.useCallback(() => n !== "" && e.maxTokens === void 0 ? "Please enter a valid number." : e.maxTokens !== void 0 && e.maxTokens < 1 ? "Max tokens must be greater than 0 (or empty)." : !0, [e.maxTokens, n]), c = o.useCallback(() => i !== "" && e.temperature === void 0 ? "Please enter a valid number." : e.temperature !== void 0 && e.temperature < 0 ? "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.temperature, i]), h = o.useCallback(() => l !== "" && e.topP === void 0 ? "Please enter a valid number." : e.topP !== void 0 && e.topP < 0 ? "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.topP, l]), g = o.useCallback(
    (P, M, x) => (s) => {
      const L = x ? /^-?\d+$/ : /^-?\d*\.?\d*$/, w = x ? ["-"] : ["-", "."];
      if (s !== "" && !w.includes(s) && !L.test(s))
        return;
      if (M(s), s === "" || w.includes(s)) {
        d((b) => ({ ...b, [P]: void 0 }));
        return;
      }
      const j = x ? parseInt(s, 10) : parseFloat(s);
      d((b) => ({ ...b, [P]: isNaN(j) ? void 0 : j }));
    },
    []
  ), I = o.useCallback(() => {
    if (p() === !0 && c() === !0 && h() === !0)
      t == null || t(e);
    else
      return;
  }, [t, e, p, c, h]), y = o.useCallback(() => {
    t == null || t(null);
  }, [t]), C = o.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request", "_blank");
  }, []);
  return /* @__PURE__ */ r.jsxs(R, { children: [
    /* @__PURE__ */ r.jsx(q, { children: /* @__PURE__ */ r.jsxs(D, { children: [
      /* @__PURE__ */ r.jsx(E, { label: "Tokens", children: /* @__PURE__ */ r.jsx(
        f,
        {
          label: "Max tokens",
          ariaLabel: "Max tokens",
          value: n,
          description: "The maximum number of tokens per request.",
          onChange: g("maxTokens", u, !0),
          validate: p
        }
      ) }),
      /* @__PURE__ */ r.jsxs(E, { label: "Randomness", children: [
        /* @__PURE__ */ r.jsx(O, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
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
            onChange: g("topP", S, !1),
            validate: h
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ r.jsx(A, { onOk: I, onCancel: y, showHelp: !0, onHelp: C })
  ] });
}, U = ({ studioPro: a, agent: t, onClose: e }) => /* @__PURE__ */ r.jsx(B, { studioPro: a, children: /* @__PURE__ */ r.jsx(G, { initialAgent: t, onClose: e }) }), _ = {
  async loaded(a, t) {
    const e = F(a), d = H(e);
    if (!t.agent)
      throw new Error("Agent needs to be provided to open the Model Settings dialog.");
    try {
      const n = JSON.parse(decodeURIComponent(t.agent)), u = document.getElementById("root");
      if (!u)
        throw new Error("Failed to find the root element.");
      const i = N.createRoot(u), m = (l) => {
        e.ui.dialogs.closeWithResult(t.dialogId, l);
      };
      i.render(
        /* @__PURE__ */ r.jsx(o.StrictMode, { children: /* @__PURE__ */ r.jsx(U, { studioPro: e, agent: n, onClose: m }) })
      );
    } catch (n) {
      throw d.error("Error editing model settings:", n), new Error("Error editing model settings:", n);
    }
  }
};
export {
  _ as component
};
//# sourceMappingURL=modelSettingsEdit.js.map
