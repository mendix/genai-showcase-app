import { r as n, ae as i, aJ as M, ay as C, av as k, au as x, aI as D, aw as S } from "./TextInputWithIcon-B3kv_B9i.js";
import { m as N, c as E } from "./logger-BM6R1Quw.js";
import { D as I } from "./DialogFooter-CyukU0xe.js";
import { h as p, b as R, c as F, a as L, n as O, T as A } from "./toolHandlers-CcJAHPUV.js";
import { T as U } from "./TextInputLabeled-_7ydO2Vf.js";
import { S as J, N as K } from "./ComboBox-DOXi1OXZ.js";
function B(l) {
  return {
    id: crypto.randomUUID(),
    name: l || "",
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
}, W = [
  { key: "Microflow", caption: "Microflow tool" }
], _ = {
  name: "isValidName",
  description: "isValidDescription",
  microflow: "isValidMicroflow",
  toolType: "isValidType"
}, $ = ({ initialTool: l, studioPro: a, agent: t, onClose: r }) => {
  const [e, f] = n.useState(l || B()), [c, m] = n.useState(H), s = n.useCallback(async (o) => ({
    isValidName: await p("name", o, a, t),
    isValidDescription: await p("description", o, a, t),
    isValidMicroflow: await p("microflow", o, a, t),
    isValidType: await p("toolType", o, a, t)
  }), [a, t]);
  n.useEffect(() => {
    l && (l.name || l.description || l.microflow) && s(l).then((o) => {
      m(o);
    });
  }, [l, s]);
  const u = n.useCallback(async () => {
    const o = await s(e);
    if (m(o), o.isValidName === !0 && o.isValidDescription === !0 && o.isValidMicroflow === !0 && o.isValidType === !0)
      r == null || r(e);
    else
      return;
  }, [r, e, s]), b = n.useCallback(() => {
    r == null || r(null);
  }, [r]), T = n.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools", "_blank");
  }, []), w = n.useCallback(async (o, h) => {
    const d = _[o];
    if (d && c[d] !== !0) {
      const v = await p(o, h, a, t);
      m((j) => ({ ...j, [d]: v }));
    }
  }, [a, t, c]), V = n.useCallback(async () => {
    const o = await R(a, e, "microflow", "Microflows$Microflow");
    o && (f(o), w("microflow", o));
  }, [a, e, w]), g = n.useCallback(async () => {
    e.microflow && F(a, e.microflow);
  }, [a, e.microflow]), y = n.useCallback((o) => (h) => {
    const d = { ...e, [o]: h };
    f(d), w(o, d);
  }, [e, w]);
  return /* @__PURE__ */ i.jsxs(M, { children: [
    /* @__PURE__ */ i.jsx(C, { children: /* @__PURE__ */ i.jsxs(k, { children: [
      /* @__PURE__ */ i.jsxs(x, { label: "Common", children: [
        /* @__PURE__ */ i.jsx(
          J,
          {
            "aria-label": "Tool type",
            label: "Tool type",
            selectedKey: e.toolType,
            isDisabled: !0,
            validate: () => c.isValidType,
            onSelectionChange: () => {
            },
            children: W.map((o) => /* @__PURE__ */ i.jsx(K, { id: o.key, children: o.caption }, o.key))
          }
        ),
        e.toolType === "Microflow" && /* @__PURE__ */ i.jsx(i.Fragment, { children: /* @__PURE__ */ i.jsx(
          L,
          {
            ariaLabel: "Microflow",
            label: "Microflow",
            value: e.microflow ? e.microflow : "",
            icon: e.microflow ? /* @__PURE__ */ i.jsx(O, {}) : void 0,
            onClick: V,
            buttonCaption: "Select...",
            buttonCaptionSecondary: e.microflow ? "Show" : void 0,
            onClickSecondary: e.microflow ? g : void 0,
            validate: () => c.isValidMicroflow
          }
        ) })
      ] }),
      e.toolType === "Microflow" && /* @__PURE__ */ i.jsxs(x, { label: "Naming", children: [
        /* @__PURE__ */ i.jsx(
          U,
          {
            label: "Name",
            ariaLabel: "Name",
            value: e.name,
            onChange: y("name"),
            validate: () => c.isValidName
          }
        ),
        /* @__PURE__ */ i.jsx(
          A,
          {
            label: "Description",
            ariaLabel: "Description",
            value: e.description,
            onChange: y("description"),
            validate: () => c.isValidDescription
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ i.jsx(
      I,
      {
        onOk: u,
        onCancel: b,
        onHelp: T
      }
    )
  ] });
}, q = ({ studioPro: l, initialTool: a, agent: t, onClose: r }) => /* @__PURE__ */ i.jsx(S, { studioPro: l, children: /* @__PURE__ */ i.jsx(
  $,
  {
    initialTool: a,
    studioPro: l,
    agent: t,
    onClose: r
  }
) }), P = {
  async loaded(l, a) {
    const t = N(l), r = E(t);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const f = D.createRoot(e);
      let c;
      a.tool && (c = JSON.parse(decodeURIComponent(a.tool)));
      const m = JSON.parse(decodeURIComponent(a.agent)), s = (u) => {
        t.ui.dialogs.closeWithResult(a.dialogId, u);
      };
      f.render(
        /* @__PURE__ */ i.jsx(n.StrictMode, { children: /* @__PURE__ */ i.jsx(
          q,
          {
            studioPro: t,
            initialTool: c,
            agent: m,
            onClose: s
          }
        ) })
      );
    } catch (e) {
      throw r.error("Error editing agent tool:", e), new Error("Error editing agent tool:", e);
    }
  }
};
export {
  P as component
};
//# sourceMappingURL=toolEdit.js.map
