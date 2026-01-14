import { aB as q, j as t, r as o, ap as D, aC as F, ar as N, an as B, ao as S } from "./TextInputWithIcon-BHM6tQnm.js";
import { m as H, c as O } from "./logger-BM6R1Quw.js";
import { D as Y } from "./DialogFooter-DRsR1K4D.js";
import { T } from "./TextInputLabeled-C8A7862R.js";
import { I as $ } from "./Banner-XhhlBqtW.js";
const A = ({ studioPro: d, agent: a, onClose: r }) => {
  var v, k, P;
  const [e, s] = o.useState(a), [l, u] = o.useState(((v = a.maxTokens) == null ? void 0 : v.toString()) ?? ""), [i, m] = o.useState(((k = a.temperature) == null ? void 0 : k.toString()) ?? ""), [p, y] = o.useState(((P = a.topP) == null ? void 0 : P.toString()) ?? ""), c = o.useCallback(() => l !== "" && e.maxTokens === void 0 ? "Please enter a valid number." : e.maxTokens !== void 0 && e.maxTokens < 1 ? "Max tokens must be greater than 0 (or empty)." : !0, [e.maxTokens, l]), h = o.useCallback(() => i !== "" && e.temperature === void 0 ? "Please enter a valid number." : e.temperature !== void 0 && e.temperature < 0 ? "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.temperature, i]), g = o.useCallback(() => p !== "" && e.topP === void 0 ? "Please enter a valid number." : e.topP !== void 0 && e.topP < 0 ? "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [e.topP, p]), b = o.useCallback((w, L, x) => (n) => {
    const R = x ? /^-?\d+$/ : /^-?\d*\.?\d*$/, j = x ? ["-"] : ["-", "."];
    if (n !== "" && !j.includes(n) && !R.test(n))
      return;
    if (L(n), n === "" || j.includes(n)) {
      s((f) => ({ ...f, [w]: void 0 }));
      return;
    }
    const I = x ? parseInt(n, 10) : parseFloat(n);
    s((f) => ({ ...f, [w]: isNaN(I) ? void 0 : I }));
  }, []), C = o.useCallback(() => {
    if (c() === !0 && h() === !0 && g() === !0)
      r == null || r(e);
    else
      return;
  }, [r, e, c, h, g]), E = o.useCallback(() => {
    r == null || r(null);
  }, [r]), M = o.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request", "_blank");
  }, []);
  return /* @__PURE__ */ t.jsx(D, { studioPro: d, children: /* @__PURE__ */ t.jsxs(F, { children: [
    /* @__PURE__ */ t.jsx(N, { children: /* @__PURE__ */ t.jsxs(B, { children: [
      /* @__PURE__ */ t.jsx(S, { label: "Tokens", children: /* @__PURE__ */ t.jsx(
        T,
        {
          label: "Max tokens",
          ariaLabel: "Max tokens",
          value: l,
          description: "The maximum number of tokens per request.",
          onChange: b("maxTokens", u, !0),
          validate: c
        }
      ) }),
      /* @__PURE__ */ t.jsxs(S, { label: "Randomness", children: [
        /* @__PURE__ */ t.jsx($, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
        /* @__PURE__ */ t.jsx(
          T,
          {
            label: "Temperature",
            ariaLabel: "Temperature",
            value: i,
            description: "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity.",
            onChange: b("temperature", m, !1),
            validate: h
          }
        ),
        /* @__PURE__ */ t.jsx(
          T,
          {
            label: "TopP",
            ariaLabel: "TopP",
            value: p,
            description: "TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response.",
            onChange: b("topP", y, !1),
            validate: g
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(
      Y,
      {
        onOk: C,
        onCancel: E,
        showHelp: !0,
        onHelp: M
      }
    )
  ] }) });
}, z = {
  async loaded(d, a) {
    const r = H(d), e = O(r);
    if (!a.agent)
      throw new Error("Agent needs to be provided to open the Model Settings dialog.");
    try {
      const s = JSON.parse(decodeURIComponent(a.agent)), l = document.getElementById("root");
      if (!l)
        throw new Error("Failed to find the root element.");
      const u = q.createRoot(l), i = (m) => {
        r.ui.dialogs.closeWithResult(a.dialogId, m);
      };
      u.render(
        /* @__PURE__ */ t.jsx(o.StrictMode, { children: /* @__PURE__ */ t.jsx(
          A,
          {
            studioPro: r,
            agent: s,
            onClose: i
          }
        ) })
      );
    } catch (s) {
      throw e.error("Error editing model settings:", s), new Error("Error editing model settings:", s);
    }
  }
};
export {
  z as component
};
//# sourceMappingURL=modelSettingsEdit.js.map
