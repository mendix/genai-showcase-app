import { w as t, G as C, r as h, a0 as N, O as E, K as k, _ as q, N as I } from "./Icon-fHsyUm8I.js";
import { s as O, c as B } from "./userPreferences-BV8i5uIO.js";
import { u as L, D as P } from "./DialogFooter-Cy7F0mpT.js";
import { T as R, h as f, a as K } from "./toolHandlers-BpyTxTMZ.js";
import { T as d, h as A, z as F, w as _, B as G, E as H } from "./index-DsStz3tj.js";
import { T as j } from "./TextInputWithButton-Ck7o_ZdS.js";
import { S as J, I as U } from "./ComboBox-BoIVB1SV.js";
import { n as W } from "./MicroflowIcon-CZXKWVwd.js";
import { T as z } from "./TextInputLabeled-ByXuMGQx.js";
const $ = [
  { key: d.Microflow, caption: "Microflow tool" },
  { key: d.MCP, caption: "MCP tool" }
], v = ({ selectedKey: o, validationInfo: n, onToolTypeChange: i }) => /* @__PURE__ */ t.jsx(
  J,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    selectedKey: o,
    validate: () => n.isValidType,
    onSelectionChange: i,
    children: $.map((s) => /* @__PURE__ */ t.jsx(U, { id: s.key, children: s.caption }, s.key))
  }
), Q = ({
  tool: o,
  validationInfo: n,
  onSelectDocument: i,
  onShowDocument: s,
  onToolTypeChange: e
}) => /* @__PURE__ */ t.jsxs(C, { label: "Common", children: [
  /* @__PURE__ */ t.jsx(
    v,
    {
      selectedKey: o.toolType,
      validationInfo: n,
      onToolTypeChange: e
    }
  ),
  o.toolType === d.MCP && /* @__PURE__ */ t.jsx(
    j,
    {
      ariaLabel: "Consumed MCP service",
      label: "Consumed MCP service",
      value: o.document.qualifiedName,
      icon: o.document.qualifiedName ? A : void 0,
      buttonCaption: "Select...",
      onClick: i,
      validate: () => n.isValidDocument,
      buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
      onClickSecondary: o.document.qualifiedName ? s : void 0
    }
  )
] }), X = ({
  tool: o,
  validationInfo: n,
  onFieldChange: i,
  onSelectDocument: s,
  onShowDocument: e,
  onToolTypeChange: m
}) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsxs(C, { label: "Common", children: [
    /* @__PURE__ */ t.jsx(
      v,
      {
        selectedKey: o.toolType,
        validationInfo: n,
        onToolTypeChange: m
      }
    ),
    /* @__PURE__ */ t.jsx(
      j,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: o.document.qualifiedName,
        icon: o.document.qualifiedName ? /* @__PURE__ */ t.jsx(W, {}) : void 0,
        onClick: s,
        buttonCaption: "Select...",
        buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: o.document.qualifiedName ? e : void 0,
        validate: () => n.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ t.jsxs(C, { label: "Naming", children: [
    /* @__PURE__ */ t.jsx(
      z,
      {
        label: "Name",
        ariaLabel: "Name",
        value: o.name,
        onChange: (l) => i("name", l),
        validate: () => n.isValidName
      }
    ),
    /* @__PURE__ */ t.jsx(
      R,
      {
        label: "Description",
        ariaLabel: "Description",
        value: o.description,
        onChange: (l) => i("description", l),
        validate: () => n.isValidDescription
      }
    )
  ] })
] }), Y = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0
}, Z = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument"
}, ee = ({ initialTool: o, studioPro: n, agent: i, onClose: s }) => {
  const [e, m] = h.useState(o || F()), [l, p] = h.useState(Y), u = h.useCallback(
    async (a) => ({
      isValidName: await f("name", a, i, n),
      isValidDescription: await f("description", a, i, n),
      isValidDocument: await f("document", a, i, n),
      isValidType: await f("toolType", a, i, n)
    }),
    [n, i]
  );
  h.useEffect(() => {
    o && o.name && u(o).then((a) => {
      p(a);
    });
  }, [o, u]);
  const T = async () => {
    const a = await u(e);
    if (p(a), !Object.values(a).some((r) => r !== !0)) {
      const r = e.toolType === d.MCP ? { ...e, name: "", description: "" } : e;
      s(r);
    }
  }, w = () => {
    s(null);
  };
  L(w, T);
  const S = () => {
    e.toolType === d.Microflow ? window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools",
      "_blank",
      "noopener,noreferrer"
    ) : e.toolType === d.MCP ? window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools-from-mcp-servers",
      "_blank",
      "noopener,noreferrer"
    ) : window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools",
      "_blank",
      "noopener,noreferrer"
    );
  }, y = async (a, c) => {
    const r = Z[a];
    if (r && l[r] !== !0) {
      const M = await f(a, c, i, n);
      p((V) => ({ ...V, [r]: M }));
    }
  }, D = (a, c) => {
    const r = { ...e, [a]: c };
    m(r), y(a, r);
  }, x = async () => {
    const a = await K(
      n,
      e.toolType === d.MCP ? H : "Microflows$Microflow"
    );
    if (a) {
      const c = { ...e, document: a };
      m(c), y("document", c);
    }
  }, g = () => {
    var a;
    (a = e.document) != null && a.documentId && (e.toolType === d.Microflow && e.document.documentId ? _(n, e.document) : e.toolType === d.MCP && e.document.documentId && G(n, e.document));
  }, b = (a) => {
    const c = {
      ...e,
      toolType: a,
      document: {
        documentId: "",
        qualifiedName: ""
      }
    };
    m(c), y("toolType", c);
  };
  return /* @__PURE__ */ t.jsxs(N, { children: [
    /* @__PURE__ */ t.jsx(E, { children: /* @__PURE__ */ t.jsx(k, { children: e.toolType === d.Microflow ? /* @__PURE__ */ t.jsx(
      X,
      {
        tool: e,
        validationInfo: l,
        onFieldChange: D,
        onSelectDocument: x,
        onShowDocument: g,
        onToolTypeChange: b
      }
    ) : /* @__PURE__ */ t.jsx(
      Q,
      {
        tool: e,
        validationInfo: l,
        onSelectDocument: x,
        onShowDocument: g,
        onToolTypeChange: b
      }
    ) }) }),
    /* @__PURE__ */ t.jsx(P, { onOk: T, onCancel: w, onHelp: S })
  ] });
}, oe = ({ studioPro: o, initialTool: n, agent: i, onClose: s }) => /* @__PURE__ */ t.jsx(I, { studioPro: o, children: /* @__PURE__ */ t.jsx(ee, { initialTool: n, studioPro: o, agent: i, onClose: s }) }), me = {
  async loaded(o, n) {
    const i = O(o), s = B(i);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const m = q.createRoot(e);
      let l;
      n.tool && (l = JSON.parse(decodeURIComponent(n.tool)));
      const p = JSON.parse(decodeURIComponent(n.agent)), u = (T) => {
        i.ui.dialogs.closeWithResult(n.dialogId, T);
      };
      m.render(
        /* @__PURE__ */ t.jsx(h.StrictMode, { children: /* @__PURE__ */ t.jsx(oe, { studioPro: i, initialTool: l, agent: p, onClose: u }) })
      );
    } catch (e) {
      throw s.error("Error editing agent tool:", e), new Error("Error editing agent tool:", e);
    }
  }
};
export {
  me as component
};
//# sourceMappingURL=toolEdit.js.map
