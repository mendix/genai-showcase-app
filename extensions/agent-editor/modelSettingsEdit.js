import { d as p, ax as F, j as t, ak as q, aK as N, r as n, aL as D, p as H, aM as Z, b as w, aJ as A, A as J, aN as K, c as U, C as V, F as I } from "./TextInputWithIcon-elAaw22_.js";
import { m as W } from "./index-Uw9PZDBi.js";
import { T as k } from "./TextInputLabeled-BSwHRbEr.js";
import { I as Y } from "./Banner-DNWL7edh.js";
var _ = Object.defineProperty, M = (a, e) => _(a, "name", { value: e, configurable: !0 });
const z = M(({ children: a, ...e }) => t.jsx(q, { children: t.jsx(G, { children: t.jsx(ee, { ...e, children: a }) }) }), "ButtonFooter"), G = M(({ children: a }) => {
  const e = N(), o = n.useCallback((r) => {
    r.key === "ArrowLeft" && (e == null || e.focusPrevious({ wrap: !0 })), r.key === "ArrowRight" && (e == null || e.focusNext({ wrap: !0 }));
  }, [e]);
  return t.jsx(X, { role: "presentation", onKeyDownCapture: o, children: a });
}, "ButtonFocusWrapper"), Q = p.div`
    flex-grow: 1;
`, X = p.div`
    display: contents;
`, ee = p(D)`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${F.spacing4};
    padding: ${F.spacing8};
`, te = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23579BF9'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e", re = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%2012.5C8.41421%2012.5%208.75%2012.1642%208.75%2011.75C8.75%2011.3358%208.41421%2011%208%2011C7.58579%2011%207.25%2011.3358%207.25%2011.75C7.25%2012.1642%207.58579%2012.5%208%2012.5Z'%20fill='%23146FF4'/%3e%3cpath%20d='M6%206.5C6%206.5%206%204.5%208%204.5C10.5%204.5%209.75%207.25%209.75%207.25L8%208.5V10'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e";
var ae = Object.defineProperty, oe = (a, e) => ae(a, "name", { value: e, configurable: !0 });
const ne = oe((a) => t.jsx(H, { light: re, dark: te, ...a }), "HelpIcon");
var se = Object.defineProperty, ie = (a, e) => se(a, "name", { value: e, configurable: !0 });
const le = ie(({ onPress: a }) => t.jsx(de, { showLabel: !1, onPress: a, children: t.jsx(ne, {}) }), "HelpButton"), de = p(w)`
    ${Z};
`, ce = p(z)`
    margin-top: auto;
    background-color: transparent;
    padding: 0px;
`, pe = ({
  onOk: a,
  onCancel: e,
  onHelp: o,
  okLabel: r = "OK",
  cancelLabel: l = "Cancel",
  showHelp: s = !0
}) => /* @__PURE__ */ t.jsxs(ce, { children: [
  s && /* @__PURE__ */ t.jsx(le, { onPress: o }),
  /* @__PURE__ */ t.jsx(Q, {}),
  /* @__PURE__ */ t.jsx(w, { variant: "primary", onPress: a, children: r }),
  /* @__PURE__ */ t.jsx(w, { onPress: e, children: l })
] }), ue = ({ studioPro: a, agent: e, onClose: o }) => {
  var C, P, j;
  const [r, l] = n.useState(e), [s, u] = n.useState(((C = e.maxTokens) == null ? void 0 : C.toString()) ?? ""), [d, m] = n.useState(((P = e.temperature) == null ? void 0 : P.toString()) ?? ""), [c, L] = n.useState(((j = e.topP) == null ? void 0 : j.toString()) ?? ""), h = n.useCallback(() => {
    if (s !== "" && r.maxTokens === void 0)
      return "Please enter a valid number.";
    if (r.maxTokens !== void 0 && r.maxTokens < 1)
      return "Max tokens must be greater than 0 (or empty).";
  }, [r.maxTokens, s]), g = n.useCallback(() => {
    if (d !== "" && r.temperature === void 0)
      return "Please enter a valid number.";
    if (r.temperature !== void 0 && r.temperature < 0)
      return "Temperature must be greater or equal to 0. You can also leave it empty to use the model's default settings.";
  }, [r.temperature, d]), x = n.useCallback(() => {
    if (c !== "" && r.topP === void 0)
      return "Please enter a valid number.";
    if (r.topP !== void 0 && r.topP < 0)
      return "TopP must be greater or equal to 0. You can also leave it empty to use the model's default settings.";
  }, [r.topP, c]), b = n.useCallback((T, R, f) => (i) => {
    const O = f ? /^-?\d+$/ : /^-?\d*\.?\d*$/, y = f ? ["-"] : ["-", "."];
    if (i !== "" && !y.includes(i) && !O.test(i))
      return;
    if (R(i), i === "" || y.includes(i)) {
      l((v) => ({ ...v, [T]: void 0 }));
      return;
    }
    const $ = f ? parseInt(i, 10) : parseFloat(i);
    l((v) => ({ ...v, [T]: isNaN($) ? void 0 : $ }));
  }, []), S = n.useCallback(() => {
    h() || g() || x() || o == null || o(r);
  }, [o, r, h, g, x]), B = n.useCallback(() => {
    o == null || o(null);
  }, [o]), E = n.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#request", "_blank");
  }, []);
  return /* @__PURE__ */ t.jsx(J, { studioPro: a, children: /* @__PURE__ */ t.jsxs(K, { children: [
    /* @__PURE__ */ t.jsx(U, { children: /* @__PURE__ */ t.jsxs(V, { children: [
      /* @__PURE__ */ t.jsx(I, { label: "Tokens", children: /* @__PURE__ */ t.jsx(
        k,
        {
          label: "Max tokens",
          ariaLabel: "Max tokens",
          value: s,
          description: "The maximum number of tokens per request.",
          onChange: b("maxTokens", u, !0),
          validate: h
        }
      ) }),
      /* @__PURE__ */ t.jsxs(I, { label: "Randomness", children: [
        /* @__PURE__ */ t.jsx(Y, { children: "It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed ranges." }),
        /* @__PURE__ */ t.jsx(
          k,
          {
            label: "Temperature",
            ariaLabel: "Temperature",
            value: d,
            description: "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity.",
            onChange: b("temperature", m, !1),
            validate: g
          }
        ),
        /* @__PURE__ */ t.jsx(
          k,
          {
            label: "TopP",
            ariaLabel: "TopP",
            value: c,
            description: "TopP is an alternative to temperature for controlling the randomness of the model response. TopP defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response.",
            onChange: b("topP", L, !1),
            validate: x
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(
      pe,
      {
        onOk: S,
        onCancel: B,
        showHelp: !0,
        onHelp: E
      }
    )
  ] }) });
}, be = {
  async loaded(a) {
    const e = W(a), o = new URLSearchParams(location.search), r = o.get("dialogId"), l = o.get("agent");
    if (!r || !l)
      throw new Error("Missing required URL parameters.");
    try {
      const s = JSON.parse(decodeURIComponent(l)), u = document.getElementById("root");
      if (!u) throw new Error("Failed to find the root element.");
      const d = A.createRoot(u), m = (c) => {
        e.ui.dialogs.closeWithResult(r, c);
      };
      d.render(
        /* @__PURE__ */ t.jsx(n.StrictMode, { children: /* @__PURE__ */ t.jsx(
          ue,
          {
            studioPro: e,
            agent: s,
            onClose: m
          }
        ) })
      );
    } catch (s) {
      throw console.error("Error parsing agent data:", s), new Error("Error parsing agent data:", s);
    }
  }
};
export {
  be as component
};
//# sourceMappingURL=modelSettingsEdit.js.map
