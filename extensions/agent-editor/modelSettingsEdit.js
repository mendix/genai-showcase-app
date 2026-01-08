import { d as u, ax as I, j as t, ak as q, aK as N, r as n, aL as D, p as H, aM as Z, b as C, aJ as A, A as J, aN as K, c as U, C as V, F as M } from "./TextInputWithIcon-elAaw22_.js";
import { m as W, c as Y } from "./logger-BM6R1Quw.js";
import { T as w } from "./TextInputLabeled-BSwHRbEr.js";
import { I as _ } from "./Banner-DNWL7edh.js";
var z = Object.defineProperty, L = (a, e) => z(a, "name", { value: e, configurable: !0 });
const G = L(({ children: a, ...e }) => t.jsx(q, { children: t.jsx(Q, { children: t.jsx(te, { ...e, children: a }) }) }), "ButtonFooter"), Q = L(({ children: a }) => {
  const e = N(), o = n.useCallback((r) => {
    r.key === "ArrowLeft" && (e == null || e.focusPrevious({ wrap: !0 })), r.key === "ArrowRight" && (e == null || e.focusNext({ wrap: !0 }));
  }, [e]);
  return t.jsx(ee, { role: "presentation", onKeyDownCapture: o, children: a });
}, "ButtonFocusWrapper"), X = u.div`
    flex-grow: 1;
`, ee = u.div`
    display: contents;
`, te = u(D)`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${I.spacing4};
    padding: ${I.spacing8};
`, re = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23579BF9'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e", ae = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23146FF4'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";
var oe = Object.defineProperty, ne = (a, e) => oe(a, "name", { value: e, configurable: !0 });
const se = ne((a) => t.jsx(H, { light: ae, dark: re, ...a }), "HelpIcon");
var ie = Object.defineProperty, le = (a, e) => ie(a, "name", { value: e, configurable: !0 });
const de = le(({ onPress: a }) => t.jsx(ce, { showLabel: !1, onPress: a, children: t.jsx(se, {}) }), "HelpButton"), ce = u(C)`
    ${Z};
`, pe = u(G)`
    margin-top: auto;
    background-color: transparent;
    padding: 0px;
`, ue = ({
  onOk: a,
  onCancel: e,
  onHelp: o,
  okLabel: r = "OK",
  cancelLabel: l = "Cancel",
  showHelp: s = !0
}) => /* @__PURE__ */ t.jsxs(pe, { children: [
  s && /* @__PURE__ */ t.jsx(de, { onPress: o }),
  /* @__PURE__ */ t.jsx(X, {}),
  /* @__PURE__ */ t.jsx(C, { variant: "primary", onPress: a, children: r }),
  /* @__PURE__ */ t.jsx(C, { onPress: e, children: l })
] }), me = ({ studioPro: a, agent: e, onClose: o }) => {
  var P, j, T;
  const [r, l] = n.useState(e), [s, d] = n.useState(((P = e.maxTokens) == null ? void 0 : P.toString()) ?? ""), [c, m] = n.useState(((j = e.temperature) == null ? void 0 : j.toString()) ?? ""), [p, h] = n.useState(((T = e.topP) == null ? void 0 : T.toString()) ?? ""), g = n.useCallback(() => {
    if (s !== "" && r.maxTokens === void 0)
      return "Please enter a valid number.";
    if (r.maxTokens !== void 0 && r.maxTokens < 1)
      return "Max tokens must be greater than 0 (or empty).";
  }, [r.maxTokens, s]), x = n.useCallback(() => {
    if (c !== "" && r.temperature === void 0)
      return "Please enter a valid number.";
    if (r.temperature !== void 0 && r.temperature < 0)
      return "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings.";
  }, [r.temperature, c]), b = n.useCallback(() => {
    if (p !== "" && r.topP === void 0)
      return "Please enter a valid number.";
    if (r.topP !== void 0 && r.topP < 0)
      return "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings.";
  }, [r.topP, p]), f = n.useCallback((y, R, v) => (i) => {
    const O = v ? /^-?\d+$/ : /^-?\d*\.?\d*$/, $ = v ? ["-"] : ["-", "."];
    if (i !== "" && !$.includes(i) && !O.test(i))
      return;
    if (R(i), i === "" || $.includes(i)) {
      l((k) => ({ ...k, [y]: void 0 }));
      return;
    }
    const F = v ? parseInt(i, 10) : parseFloat(i);
    l((k) => ({ ...k, [y]: isNaN(F) ? void 0 : F }));
  }, []), S = n.useCallback(() => {
    g() || x() || b() || o == null || o(r);
  }, [o, r, g, x, b]), B = n.useCallback(() => {
    o == null || o(null);
  }, [o]), E = n.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request", "_blank");
  }, []);
  return /* @__PURE__ */ t.jsx(J, { studioPro: a, children: /* @__PURE__ */ t.jsxs(K, { children: [
    /* @__PURE__ */ t.jsx(U, { children: /* @__PURE__ */ t.jsxs(V, { children: [
      /* @__PURE__ */ t.jsx(M, { label: "Tokens", children: /* @__PURE__ */ t.jsx(
        w,
        {
          label: "Max tokens",
          ariaLabel: "Max tokens",
          value: s,
          description: "The maximum number of tokens per request.",
          onChange: f("maxTokens", d, !0),
          validate: g
        }
      ) }),
      /* @__PURE__ */ t.jsxs(M, { label: "Randomness", children: [
        /* @__PURE__ */ t.jsx(_, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "Temperature",
            ariaLabel: "Temperature",
            value: c,
            description: "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity.",
            onChange: f("temperature", m, !1),
            validate: x
          }
        ),
        /* @__PURE__ */ t.jsx(
          w,
          {
            label: "TopP",
            ariaLabel: "TopP",
            value: p,
            description: "TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response.",
            onChange: f("topP", h, !1),
            validate: b
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(
      ue,
      {
        onOk: S,
        onCancel: B,
        showHelp: !0,
        onHelp: E
      }
    )
  ] }) });
}, fe = {
  async loaded(a) {
    const e = W(a), o = Y(e), r = new URLSearchParams(location.search), l = r.get("dialogId"), s = r.get("agent");
    if (!l || !s)
      throw new Error("Missing required URL parameters.");
    try {
      const d = JSON.parse(decodeURIComponent(s)), c = document.getElementById("root");
      if (!c) throw new Error("Failed to find the root element.");
      const m = A.createRoot(c), p = (h) => {
        e.ui.dialogs.closeWithResult(l, h);
      };
      m.render(
        /* @__PURE__ */ t.jsx(n.StrictMode, { children: /* @__PURE__ */ t.jsx(
          me,
          {
            studioPro: e,
            agent: d,
            onClose: p
          }
        ) })
      );
    } catch (d) {
      throw o.error("Error parsing agent data:", d), new Error("Error parsing agent data:", d);
    }
  }
};
export {
  fe as component
};
//# sourceMappingURL=modelSettingsEdit.js.map
