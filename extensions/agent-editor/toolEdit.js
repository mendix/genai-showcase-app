import { r as p, w as a, aM as v, E as D, C as S, G as x, aK as C, D as E } from "./TextInputWithIcon-Bxcjz2pl.js";
import { t as N, c as k } from "./logger-CC_FxqwC.js";
import { D as I } from "./DialogFooter-BWIHywC0.js";
import { h as m, T as R, a as L } from "./toolHandlers-DlGrjZZ3.js";
import { T as F } from "./TextInputLabeled-Cr8pg4pf.js";
import { T as O, n as A, h as K } from "./genAICommonsEntities-Dtcj_rDj.js";
import { S as U, N as B } from "./ComboBox-D4VTIJ8V.js";
function G(i) {
  return {
    id: crypto.randomUUID(),
    name: i || "",
    description: "",
    enabled: !0,
    toolType: "Microflow"
  };
}
const H = {
  isValidName: !0,
  isValidDescription: !0,
  isValidMicroflow: !0,
  isValidType: !0
}, J = [{ key: "Microflow", caption: "Microflow tool" }], W = {
  name: "isValidName",
  description: "isValidDescription",
  microflow: "isValidMicroflow",
  toolType: "isValidType"
}, _ = ({ initialTool: i, studioPro: t, agent: l, onClose: r }) => {
  const [e, f] = p.useState(i || G()), [n, c] = p.useState(H), d = p.useCallback(
    async (o) => ({
      isValidName: await m("name", o, t, l),
      isValidDescription: await m("description", o, t, l),
      isValidMicroflow: await m("microflow", o, t, l),
      isValidType: await m("toolType", o, t, l)
    }),
    [t, l]
  );
  p.useEffect(() => {
    i && (i.name || i.description || i.microflow) && d(i).then((o) => {
      c(o);
    });
  }, [i, d]);
  const w = async () => {
    const o = await d(e);
    if (c(o), o.isValidName === !0 && o.isValidDescription === !0 && o.isValidMicroflow === !0 && o.isValidType === !0)
      r == null || r(e);
    else
      return;
  }, T = () => {
    r == null || r(null);
  }, V = () => {
    window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools",
      "_blank"
    );
  }, u = async (o, h) => {
    const s = W[o];
    if (s && n[s] !== !0) {
      const b = await m(o, h, t, l);
      c((j) => ({ ...j, [s]: b }));
    }
  }, g = async () => {
    const o = await L(t, e, "microflow", "Microflows$Microflow");
    o && (f(o), u("microflow", o));
  }, M = async () => {
    e.microflow && K(t, e.microflow);
  }, y = (o) => (h) => {
    const s = { ...e, [o]: h };
    f(s), u(o, s);
  };
  return /* @__PURE__ */ a.jsxs(v, { children: [
    /* @__PURE__ */ a.jsx(D, { children: /* @__PURE__ */ a.jsxs(S, { children: [
      /* @__PURE__ */ a.jsxs(x, { label: "Common", children: [
        /* @__PURE__ */ a.jsx(
          U,
          {
            "aria-label": "Tool type",
            label: "Tool type",
            selectedKey: e.toolType,
            isDisabled: !0,
            validate: () => n.isValidType,
            onSelectionChange: () => {
            },
            children: J.map((o) => /* @__PURE__ */ a.jsx(B, { id: o.key, children: o.caption }, o.key))
          }
        ),
        e.toolType === "Microflow" && /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx(
          O,
          {
            ariaLabel: "Microflow",
            label: "Microflow",
            value: e.microflow ? e.microflow : "",
            icon: e.microflow ? /* @__PURE__ */ a.jsx(A, {}) : void 0,
            onClick: g,
            buttonCaption: "Select...",
            buttonCaptionSecondary: e.microflow ? "Show" : void 0,
            onClickSecondary: e.microflow ? M : void 0,
            validate: () => n.isValidMicroflow
          }
        ) })
      ] }),
      e.toolType === "Microflow" && /* @__PURE__ */ a.jsxs(x, { label: "Naming", children: [
        /* @__PURE__ */ a.jsx(
          F,
          {
            label: "Name",
            ariaLabel: "Name",
            value: e.name,
            onChange: y("name"),
            validate: () => n.isValidName
          }
        ),
        /* @__PURE__ */ a.jsx(
          R,
          {
            label: "Description",
            ariaLabel: "Description",
            value: e.description,
            onChange: y("description"),
            validate: () => n.isValidDescription
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx(I, { onOk: w, onCancel: T, onHelp: V })
  ] });
}, $ = ({ studioPro: i, initialTool: t, agent: l, onClose: r }) => /* @__PURE__ */ a.jsx(E, { studioPro: i, children: /* @__PURE__ */ a.jsx(_, { initialTool: t, studioPro: i, agent: l, onClose: r }) }), oo = {
  async loaded(i, t) {
    const l = N(i), r = k(l);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const f = C.createRoot(e);
      let n;
      t.tool && (n = JSON.parse(decodeURIComponent(t.tool)));
      const c = JSON.parse(decodeURIComponent(t.agent)), d = (w) => {
        l.ui.dialogs.closeWithResult(t.dialogId, w);
      };
      f.render(
        /* @__PURE__ */ a.jsx(p.StrictMode, { children: /* @__PURE__ */ a.jsx($, { studioPro: l, initialTool: n, agent: c, onClose: d }) })
      );
    } catch (e) {
      throw r.error("Error editing agent tool:", e), new Error("Error editing agent tool:", e);
    }
  }
};
export {
  oo as component
};
//# sourceMappingURL=toolEdit.js.map
