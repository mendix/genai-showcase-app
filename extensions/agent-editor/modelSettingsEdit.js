import { r as o, ae as r, aJ as R, ay as q, av as D, au as I, aI as F, aw as N } from "./TextInputWithIcon-B3kv_B9i.js";
import { m as H, c as O } from "./logger-BM6R1Quw.js";
import { I as A } from "./Banner-BEBXNJk6.js";
import { D as B } from "./DialogFooter-CyukU0xe.js";
import { T as f } from "./TextInputLabeled-_7ydO2Vf.js";
const J = ({ initialAgent: a, onClose: t }) => {
  var T, v, k;
  const [e, d] = o.useState(a), [n, u] = o.useState(((T = a.maxTokens) == null ? void 0 : T.toString()) ?? ""), [i, m] = o.useState(((v = a.temperature) == null ? void 0 : v.toString()) ?? ""), [l, S] = o.useState(((k = a.topP) == null ? void 0 : k.toString()) ?? ""), p = o.useCallback(() => n !== "" && e.maxTokens === void 0 ? "Please enter a valid number." : e.maxTokens !== void 0 && e.maxTokens < 1 ? "Max tokens must be greater than 0 (or empty)." : !0, [e.maxTokens, n]), c = o.useCallback(() => i !== "" && e.temperature === void 0 ? "Please enter a valid number." : e.temperature !== void 0 && e.temperature < 0 ? "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.temperature, i]), h = o.useCallback(() => l !== "" && e.topP === void 0 ? "Please enter a valid number." : e.topP !== void 0 && e.topP < 0 ? "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.topP, l]), g = o.useCallback((P, M, x) => (s) => {
    const L = x ? /^-?\d+$/ : /^-?\d*\.?\d*$/, w = x ? ["-"] : ["-", "."];
    if (s !== "" && !w.includes(s) && !L.test(s))
      return;
    if (M(s), s === "" || w.includes(s)) {
      d((b) => ({ ...b, [P]: void 0 }));
      return;
    }
    const j = x ? parseInt(s, 10) : parseFloat(s);
    d((b) => ({ ...b, [P]: isNaN(j) ? void 0 : j }));
  }, []), y = o.useCallback(() => {
    if (p() === !0 && c() === !0 && h() === !0)
      t == null || t(e);
    else
      return;
  }, [t, e, p, c, h]), E = o.useCallback(() => {
    t == null || t(null);
  }, [t]), C = o.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request", "_blank");
  }, []);
  return /* @__PURE__ */ r.jsxs(R, { children: [
    /* @__PURE__ */ r.jsx(q, { children: /* @__PURE__ */ r.jsxs(D, { children: [
      /* @__PURE__ */ r.jsx(I, { label: "Tokens", children: /* @__PURE__ */ r.jsx(
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
      /* @__PURE__ */ r.jsxs(I, { label: "Randomness", children: [
        /* @__PURE__ */ r.jsx(A, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
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
    /* @__PURE__ */ r.jsx(
      B,
      {
        onOk: y,
        onCancel: E,
        showHelp: !0,
        onHelp: C
      }
    )
  ] });
}, Y = ({ studioPro: a, agent: t, onClose: e }) => /* @__PURE__ */ r.jsx(N, { studioPro: a, children: /* @__PURE__ */ r.jsx(
  J,
  {
    initialAgent: t,
    onClose: e
  }
) }), z = {
  async loaded(a, t) {
    const e = H(a), d = O(e);
    if (!t.agent)
      throw new Error("Agent needs to be provided to open the Model Settings dialog.");
    try {
      const n = JSON.parse(decodeURIComponent(t.agent)), u = document.getElementById("root");
      if (!u)
        throw new Error("Failed to find the root element.");
      const i = F.createRoot(u), m = (l) => {
        e.ui.dialogs.closeWithResult(t.dialogId, l);
      };
      i.render(
        /* @__PURE__ */ r.jsx(o.StrictMode, { children: /* @__PURE__ */ r.jsx(
          Y,
          {
            studioPro: e,
            agent: n,
            onClose: m
          }
        ) })
      );
    } catch (n) {
      throw d.error("Error editing model settings:", n), new Error("Error editing model settings:", n);
    }
  }
};
export {
  z as component
};
//# sourceMappingURL=modelSettingsEdit.js.map
