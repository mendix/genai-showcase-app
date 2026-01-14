import { aB as b, j as t, r as s, ap as x, aC as M, ar as V, an as j, ao as u } from "./TextInputWithIcon-BHM6tQnm.js";
import { m as k, c as D } from "./logger-BM6R1Quw.js";
import { T as v } from "./TextInputLabeled-C8A7862R.js";
import { S as C, N as S } from "./TextAreaAutogrow-D57DVpIT.js";
import { a as N, n as E, T as L } from "./TextInputWithButton-DK5kVQUu.js";
import { D as F } from "./DialogFooter-DRsR1K4D.js";
function I(a) {
  return {
    name: a || "",
    description: "",
    enabled: !0,
    toolType: "Microflow"
  };
}
const R = async (a, o, i, e) => {
  const n = await a.ui.elementSelectors.selectDocument({
    query: { elementType: e }
  });
  return n.status == "ok" ? { ...o, [i]: n.selected.module + "." + n.selected.name } : null;
}, m = async (a, o) => {
  switch (a) {
    case "name":
      if (!o.name || o.name.trim() === "")
        return "Tool name cannot be empty.";
      break;
    case "description":
      if (!o.description || o.description.trim() === "")
        return "Tool description cannot be empty.";
      break;
    case "microflow":
      if (o.toolType === "Microflow" && (!o.microflow || o.microflow.trim() === ""))
        return "Microflow must be selected for Microflow tool.";
      break;
    case "toolType":
      if (!o.toolType)
        return "Tool type cannot be empty.";
    default:
      return !0;
  }
  return !0;
}, A = async (a, o) => {
  if (!o)
    return;
  const [i, e] = o.split(".");
  if (!i || !e)
    return;
  console.log("Showing microflow: " + o);
  const l = (await a.app.model.microflows.loadAll((c) => c.moduleName === i && c.name === e))[0];
  if (!l)
    return await a.ui.messageBoxes.show(
      "error",
      "Could not find microflow.",
      "This microflow might have been deleted or renamed. Please update the tool microflow selection."
    );
  await a.ui.editors.editDocument(l.$ID);
}, B = {
  isValidName: !0,
  isValidDescription: !0,
  isValidMicroflow: !0,
  isValidType: !0
}, O = [
  { key: "Microflow", caption: "Microflow tool" }
], H = ({ studioPro: a, initialTool: o, onClose: i }) => {
  const [e, n] = s.useState(o || I()), [l, c] = s.useState(B), d = s.useCallback(() => {
    if (l.isValidName === !0 && l.isValidDescription === !0 && l.isValidMicroflow === !0 && l.isValidType === !0)
      i == null || i(e);
    else
      return;
  }, [i, e, l]), f = s.useCallback(() => {
    i == null || i(null);
  }, [i]), h = s.useCallback(() => {
    window.open("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools", "_blank");
  }, []), y = s.useCallback(async () => {
    const r = await R(a, e, "microflow", "Microflows$Microflow");
    r && n(r);
  }, [a, e]), T = s.useCallback(async () => {
    e.microflow && A(a, e.microflow);
  }, [a, e.microflow]), p = s.useCallback((r) => (w) => {
    n({ ...e, [r]: w });
  }, [e]), g = async (r) => ({
    isValidName: await m("name", r),
    isValidDescription: await m("description", r),
    isValidMicroflow: await m("microflow", r),
    isValidType: await m("toolType", r)
  });
  return s.useEffect(() => {
    (async () => {
      const w = await g(e);
      c(w);
    })();
  }, [a, e]), /* @__PURE__ */ t.jsx(x, { studioPro: a, children: /* @__PURE__ */ t.jsxs(M, { children: [
    /* @__PURE__ */ t.jsx(V, { children: /* @__PURE__ */ t.jsxs(j, { children: [
      /* @__PURE__ */ t.jsxs(u, { label: "Common", children: [
        /* @__PURE__ */ t.jsx(
          C,
          {
            "aria-label": "Tool type",
            label: "Tool type",
            selectedKey: e.toolType,
            isDisabled: !0,
            validate: () => l.isValidType,
            onSelectionChange: (r) => n({ ...e, toolType: r }),
            children: O.map((r) => /* @__PURE__ */ t.jsx(S, { id: r.key, children: r.caption }, r.key))
          }
        ),
        e.toolType === "Microflow" && /* @__PURE__ */ t.jsx(t.Fragment, { children: /* @__PURE__ */ t.jsx(
          N,
          {
            ariaLabel: "Microflow",
            label: "Microflow",
            value: e.microflow ? e.microflow : "",
            icon: e.microflow ? /* @__PURE__ */ t.jsx(E, {}) : void 0,
            onClick: y,
            buttonCaption: "Select...",
            buttonCaptionSecondary: e.microflow ? "Show" : void 0,
            onClickSecondary: e.microflow ? T : void 0,
            validate: () => l.isValidMicroflow
          }
        ) })
      ] }),
      e.toolType && e.toolType === "Microflow" && /* @__PURE__ */ t.jsxs(u, { label: "Naming", children: [
        /* @__PURE__ */ t.jsx(
          v,
          {
            label: "Name",
            ariaLabel: "Name",
            value: e.name,
            onChange: p("name"),
            validate: () => l.isValidName
          }
        ),
        /* @__PURE__ */ t.jsx(
          L,
          {
            label: "Description",
            ariaLabel: "Description",
            value: e.description,
            onChange: p("description"),
            validate: () => l.isValidDescription
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ t.jsx(
      F,
      {
        onOk: d,
        onCancel: f,
        onHelp: h
      }
    )
  ] }) });
}, _ = {
  async loaded(a, o) {
    const i = k(a), e = D(i);
    try {
      const n = document.getElementById("root");
      if (!n)
        throw new Error("Failed to find the root element");
      const l = b.createRoot(n);
      let c;
      o != null && o.tool && (c = JSON.parse(decodeURIComponent(o.tool)));
      const d = (f) => {
        i.ui.dialogs.closeWithResult(o.dialogId, f);
      };
      l.render(
        /* @__PURE__ */ t.jsx(s.StrictMode, { children: /* @__PURE__ */ t.jsx(
          H,
          {
            studioPro: i,
            initialTool: c,
            onClose: d
          }
        ) })
      );
    } catch (n) {
      throw e.error("Error editing agent tool:", n), new Error("Error editing agent tool:", n);
    }
  }
};
export {
  _ as component
};
//# sourceMappingURL=toolEdit.js.map
