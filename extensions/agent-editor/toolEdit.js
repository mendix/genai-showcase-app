import { aI as v, ae as t, r as n, aw as j, aJ as C, ay as S, av as D, au as h } from "./TextInputWithIcon-B3kv_B9i.js";
import { m as N, c as E } from "./logger-BM6R1Quw.js";
import { T as I } from "./TextInputLabeled-_7ydO2Vf.js";
import { S as R, N as A } from "./ComboBox-DOXi1OXZ.js";
import { g as F, h as L, a as O, n as U, T as B } from "./MicroflowIcon-B4IwsC9b.js";
import { D as J } from "./DialogFooter-CyukU0xe.js";
function K(i) {
  return {
    id: crypto.randomUUID(),
    name: i || "",
    description: "",
    enabled: !0,
    toolType: "Microflow"
  };
}
const _ = async (i, a, l, r) => {
  const e = await i.ui.elementSelectors.selectDocument({
    query: { elementType: r }
  });
  return e.status == "ok" ? { ...a, [l]: e.selected.module + "." + e.selected.name } : null;
}, m = async (i, a, l, r) => {
  const e = r.tools;
  switch (i) {
    case "name":
      if (!a.name || a.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(a.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (a.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (e && e.some((s) => s.name === a.name && s.id !== a.id))
        return "Tool name must be unique.";
      break;
    case "description":
      if (!a.description || a.description.trim() === "")
        return "Tool description cannot be empty.";
      if (a.description.length > 4096)
        return "Tool description cannot exceed 4096 characters.";
      break;
    case "microflow":
      if (a.toolType === "Microflow" && (!a.microflow || a.microflow.trim() === ""))
        return "Microflow must be selected for Microflow tool.";
      if (await F(l, a.microflow || "") === null)
        return "Selected microflow does not exist.";
      break;
    case "toolType":
      if (!a.toolType)
        return "Tool type cannot be empty.";
      break;
    default:
      return !0;
  }
  return !0;
}, q = {
  isValidName: !0,
  isValidDescription: !0,
  isValidMicroflow: !0,
  isValidType: !0
}, z = [
  { key: "Microflow", caption: "Microflow tool" }
], H = {
  name: "isValidName",
  description: "isValidDescription",
  microflow: "isValidMicroflow",
  toolType: "isValidType"
}, W = ({ studioPro: i, initialTool: a, agent: l, onClose: r }) => {
  const [e, s] = n.useState(a || K()), [c, p] = n.useState(q), u = n.useCallback(async (o) => ({
    isValidName: await m("name", o, i, l),
    isValidDescription: await m("description", o, i, l),
    isValidMicroflow: await m("microflow", o, i, l),
    isValidType: await m("toolType", o, i, l)
  }), [i, l]), w = n.useCallback(async () => {
    const o = await u(e);
    if (p(o), o.isValidName === !0 && o.isValidDescription === !0 && o.isValidMicroflow === !0 && o.isValidType === !0)
      r == null || r(e);
    else
      return;
  }, [r, e, u]), b = n.useCallback(() => {
    r == null || r(null);
  }, [r]), x = n.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools", "_blank");
  }, []), f = n.useCallback(async (o, y) => {
    const d = H[o];
    if (d && c[d] !== !0) {
      const M = await m(o, y, i, l);
      p((k) => ({ ...k, [d]: M }));
    }
  }, [i, l, c]), g = n.useCallback(async () => {
    const o = await _(i, e, "microflow", "Microflows$Microflow");
    o && (s(o), f("microflow", o));
  }, [i, e, f]), V = n.useCallback(async () => {
    e.microflow && L(i, e.microflow);
  }, [i, e.microflow]), T = n.useCallback((o) => (y) => {
    const d = { ...e, [o]: y };
    s(d), f(o, d);
  }, [e, f]);
  return /* @__PURE__ */ t.jsx(j, { studioPro: i, children: /* @__PURE__ */ t.jsxs(C, { children: [
    /* @__PURE__ */ t.jsx(S, { children: /* @__PURE__ */ t.jsxs(D, { children: [
      /* @__PURE__ */ t.jsxs(h, { label: "Common", children: [
        /* @__PURE__ */ t.jsx(
          R,
          {
            "aria-label": "Tool type",
            label: "Tool type",
            selectedKey: e.toolType,
            isDisabled: !0,
            validate: () => c.isValidType,
            onSelectionChange: () => {
            },
            children: z.map((o) => /* @__PURE__ */ t.jsx(A, { id: o.key, children: o.caption }, o.key))
          }
        ),
        e.toolType === "Microflow" && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
          O,
          {
            ariaLabel: "Microflow",
            label: "Microflow",
            value: e.microflow ? e.microflow : "",
            icon: e.microflow ? /* @__PURE__ */ t.jsx(U, {}) : void 0,
            onClick: g,
            buttonCaption: "Select...",
            buttonCaptionSecondary: e.microflow ? "Show" : void 0,
            onClickSecondary: e.microflow ? V : void 0,
            validate: () => c.isValidMicroflow
          }
        ) })
      ] }),
      e.toolType === "Microflow" && /* @__PURE__ */ t.jsxs(h, { label: "Naming", children: [
        /* @__PURE__ */ t.jsx(
          I,
          {
            label: "Name",
            ariaLabel: "Name",
            value: e.name,
            onChange: T("name"),
            validate: () => c.isValidName
          }
        ),
        /* @__PURE__ */ t.jsx(
          B,
          {
            label: "Description",
            ariaLabel: "Description",
            value: e.description,
            onChange: T("description"),
            validate: () => c.isValidDescription
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(
      J,
      {
        onOk: w,
        onCancel: b,
        onHelp: x
      }
    )
  ] }) });
}, P = {
  async loaded(i, a) {
    const l = N(i), r = E(l);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const s = v.createRoot(e);
      let c;
      a.tool && (c = JSON.parse(decodeURIComponent(a.tool)));
      const p = JSON.parse(decodeURIComponent(a.agent)), u = (w) => {
        l.ui.dialogs.closeWithResult(a.dialogId, w);
      };
      s.render(
        /* @__PURE__ */ t.jsx(n.StrictMode, { children: /* @__PURE__ */ t.jsx(
          W,
          {
            studioPro: l,
            initialTool: c,
            agent: p,
            onClose: u
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
