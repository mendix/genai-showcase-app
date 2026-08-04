import { j as e, d as U } from "./jsx-runtime-CWOFuNcx.js";
import { r as n, a2 as M, W as R, X as F, a1 as q, Y as A } from "./PageContainers-1sk3OYaf.js";
import { createStudioProLogger as H } from "./logger-gMbuSAUF.js";
import { a as N } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { u as G, D as W } from "./DialogFooter-CVDbnhi9.js";
import { y as Y } from "./Link-DIvQSyO2.js";
import { U as O } from "./agent-D1oN8aFA.js";
import { o as $ } from "./genericUtils-GaF65l2f.js";
import { I as y } from "./Banner-BjuZQV3q.js";
import { G as T } from "./GroupBox-BxPlcX3c.js";
import { I as V, m as X } from "./RadioButtonGroup-wveJ26wi.js";
import { D as _, a as D, d as z } from "./formelements-CKhf3RUn.js";
import { T as j } from "./TextInputLabeled-CTvLZgVy.js";
import { B as J } from "./text-Kj7UY3CS.js";
const E = ({
  label: r,
  ariaLabel: a,
  options: t,
  value: i,
  onChange: o,
  hasMarginTop: u = !1,
  description: l,
  disabled: p = !1
}) => {
  const d = u ? 8 : 0;
  return /* @__PURE__ */ e.jsxs(_, { marginTop: d, children: [
    r && /* @__PURE__ */ e.jsx(D, { children: /* @__PURE__ */ e.jsx(z, { children: r }) }),
    /* @__PURE__ */ e.jsx(D, { fullWidth: !0, children: /* @__PURE__ */ e.jsx(
      V,
      {
        value: i,
        onChange: o,
        "aria-label": a,
        description: l,
        isDisabled: p,
        children: t.map((m) => /* @__PURE__ */ e.jsx(X, { value: m.value, "aria-label": m.caption, children: m.caption }, m.value))
      }
    ) })
  ] });
}, K = ({ initialAgent: r, onClose: a }) => {
  const [t, i] = n.useState(() => ({
    ...r,
    enableBackendStreaming: r.enableBackendStreaming ?? !0,
    enableUIStreaming: r.enableUIStreaming ?? !1
  })), [o, u] = n.useState(r.maxTokens?.toString() ?? ""), [l, p] = n.useState(r.temperature?.toString() ?? ""), [d, m] = n.useState(r.topP?.toString() ?? ""), b = n.useCallback(() => o !== "" && t.maxTokens === void 0 ? "Please enter a valid number." : t.maxTokens !== void 0 && t.maxTokens < 1 ? "Max tokens must be greater than 0 (or empty)." : !0, [o, t.maxTokens]), f = n.useCallback(() => l !== "" && t.temperature === void 0 ? "Please enter a valid number." : t.temperature !== void 0 && t.temperature < 0 ? "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [l, t.temperature]), x = n.useCallback(() => d !== "" && t.topP === void 0 ? "Please enter a valid number." : t.topP !== void 0 && t.topP < 0 ? "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings." : !0, [d, t.topP]), k = (h) => (g) => {
    const c = { ...t, [h]: g === "true" };
    h === "enableBackendStreaming" && g === "false" && (c.enableUIStreaming = !1), i(c);
  }, v = (h, g, c) => (s) => {
    const L = c ? /^-?\d+$/ : /^-?\d*\.?\d*$/, C = c ? ["-"] : ["-", "."];
    if (s !== "" && !C.includes(s) && !L.test(s))
      return;
    if (g(s), s === "" || C.includes(s)) {
      i((S) => ({ ...S, [h]: void 0 }));
      return;
    }
    const w = c ? parseInt(s, 10) : parseFloat(s);
    i((S) => ({ ...S, [h]: isNaN(w) ? void 0 : w }));
  }, P = n.useCallback(() => {
    if (b() === !0 && f() === !0 && x() === !0)
      a?.(t);
    else
      return;
  }, [t, a, b, f, x]), I = n.useCallback(() => {
    a?.(null);
  }, [a]);
  G(I, P);
  const B = () => {
    $("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request");
  };
  return /* @__PURE__ */ e.jsxs(M, { children: [
    /* @__PURE__ */ e.jsx(R, { children: /* @__PURE__ */ e.jsxs(F, { children: [
      /* @__PURE__ */ e.jsx(T, { label: "Tokens", children: /* @__PURE__ */ e.jsx(
        j,
        {
          label: "Max tokens",
          ariaLabel: "Max tokens",
          value: o,
          description: "The maximum number of tokens per request.",
          onChange: v("maxTokens", u, !0),
          validate: b
        }
      ) }),
      /* @__PURE__ */ e.jsxs(T, { label: "Randomness", children: [
        /* @__PURE__ */ e.jsx(y, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
        /* @__PURE__ */ e.jsx(
          j,
          {
            label: "Temperature",
            ariaLabel: "Temperature",
            value: l,
            description: "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity.",
            onChange: v("temperature", p, !1),
            validate: f
          }
        ),
        /* @__PURE__ */ e.jsx(
          j,
          {
            label: "TopP",
            ariaLabel: "TopP",
            value: d,
            description: "TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response.",
            onChange: v("topP", m, !1),
            validate: x
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs(T, { label: "Streaming", children: [
        /* @__PURE__ */ e.jsxs(y, { children: [
          /* @__PURE__ */ e.jsx(J, { children: "Streaming not available in Studio Pro Playground" }),
          /* @__PURE__ */ e.jsx("div", { children: "Note that the playground UI currently does not display streaming behavior. However, in the running app, it is available for end users." })
        ] }),
        /* @__PURE__ */ e.jsx("div", {}),
        /* @__PURE__ */ e.jsx(
          E,
          {
            label: "Streaming (backend)",
            ariaLabel: "Streaming (backend)",
            value: t.enableBackendStreaming?.toString() || "true",
            options: [
              { caption: "Enabled", value: "true" },
              { caption: "Disabled", value: "false" }
            ],
            description: "Control if the streaming API of the model should be called. This does not change the behavior of the UI.",
            onChange: k("enableBackendStreaming")
          }
        ),
        t.usageType === O.Chat && /* @__PURE__ */ e.jsx(
          E,
          {
            label: "Streaming (frontend)",
            ariaLabel: "Streaming (frontend)",
            disabled: t.enableBackendStreaming === !1,
            value: t.enableUIStreaming?.toString() || "false",
            options: [
              { caption: "Enabled", value: "true" },
              { caption: "Disabled", value: "false" }
            ],
            description: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              /* @__PURE__ */ e.jsx("div", { children: "Control if the response should be built up in the UI chunk by chunk (as received from the Streaming API)." }),
              /* @__PURE__ */ e.jsx(
                Y,
                {
                  href: "https://docs.mendix.com/agents/agents-kit-2/reference-guide/conversational-ui/#streaming",
                  target: "_blank",
                  rel: "noreferrer,noopener",
                  children: "Learn more"
                }
              )
            ] }),
            onChange: k("enableUIStreaming")
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(W, { onOk: P, onCancel: I, showHelp: !0, onHelp: B })
  ] });
}, Q = ({ studioPro: r, agent: a, onClose: t }) => /* @__PURE__ */ e.jsx(A, { studioPro: r, children: /* @__PURE__ */ e.jsx(K, { initialAgent: a, onClose: t }) }), pe = {
  async loaded(r, a) {
    const t = U(r), i = H(t);
    if (!a.agentDocumentId)
      throw new Error("Agent document ID needs to be provided to open the Model Settings dialog.");
    try {
      const o = await N(t, a.agentDocumentId), u = document.getElementById("root");
      if (!u)
        throw new Error("Failed to find the root element.");
      const l = q.createRoot(u), p = (d) => {
        t.ui.dialogs.closeWithResult(a.dialogId, d);
      };
      l.render(
        /* @__PURE__ */ e.jsx(n.StrictMode, { children: /* @__PURE__ */ e.jsx(Q, { studioPro: t, agent: o, onClose: p }) })
      );
    } catch (o) {
      throw i.error("Error editing model settings:", o), new Error("Error editing model settings:", o);
    }
  }
};
export {
  pe as component
};
