import { I as t, O as C, r as h, ag as N, a6 as E, a2 as k, af as I, a4 as q } from "./Icon-DMu3278C.js";
import { r as O } from "./index-CfghFsoU.js";
import { createStudioProLogger as L } from "./logger-Bof2Evv1.js";
import { u as P, D as R } from "./DialogFooter-COjrWbXN.js";
import { T as B, h as f, a as K } from "./toolHandlers-3RRB71-Z.js";
import { e as d, f as A, I as F, v as J, J as _, K as H } from "./index-YObaGbux.js";
import { T as v } from "./TextInputWithButton-BDeCrCh9.js";
import { S as U, I as W } from "./ComboBox-BfwSOBFk.js";
import { n as G } from "./MicroflowIcon-DrYfg-0b.js";
import { T as $ } from "./TextInputLabeled-DBL3Xt2E.js";
const z = [
  { key: d.Microflow, caption: "Microflow tool" },
  { key: d.MCP, caption: "MCP tool" }
], j = ({ selectedKey: o, validationInfo: n, onToolTypeChange: i }) => /* @__PURE__ */ t.jsx(
  U,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    selectedKey: o,
    validate: () => n.isValidType,
    onSelectionChange: i,
    children: z.map((l) => /* @__PURE__ */ t.jsx(W, { id: l.key, children: l.caption }, l.key))
  }
), Q = ({
  tool: o,
  validationInfo: n,
  onSelectDocument: i,
  onShowDocument: l,
  onToolTypeChange: e
}) => /* @__PURE__ */ t.jsxs(C, { label: "Common", children: [
  /* @__PURE__ */ t.jsx(
    j,
    {
      selectedKey: o.toolType,
      validationInfo: n,
      onToolTypeChange: e
    }
  ),
  o.toolType === d.MCP && /* @__PURE__ */ t.jsx(
    v,
    {
      ariaLabel: "Consumed MCP service",
      label: "Consumed MCP service",
      value: o.document.qualifiedName,
      icon: o.document.qualifiedName ? A : void 0,
      buttonCaption: "Select...",
      onClick: i,
      validate: () => n.isValidDocument,
      buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
      onClickSecondary: o.document.qualifiedName ? l : void 0
    }
  )
] }), X = ({
  tool: o,
  validationInfo: n,
  onFieldChange: i,
  onSelectDocument: l,
  onShowDocument: e,
  onToolTypeChange: m
}) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsxs(C, { label: "Common", children: [
    /* @__PURE__ */ t.jsx(
      j,
      {
        selectedKey: o.toolType,
        validationInfo: n,
        onToolTypeChange: m
      }
    ),
    /* @__PURE__ */ t.jsx(
      v,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: o.document.qualifiedName,
        icon: o.document.qualifiedName ? /* @__PURE__ */ t.jsx(G, {}) : void 0,
        onClick: l,
        buttonCaption: "Select...",
        buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: o.document.qualifiedName ? e : void 0,
        validate: () => n.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ t.jsxs(C, { label: "Naming", children: [
    /* @__PURE__ */ t.jsx(
      $,
      {
        label: "Name",
        ariaLabel: "Name",
        value: o.name,
        onChange: (s) => i("name", s),
        validate: () => n.isValidName
      }
    ),
    /* @__PURE__ */ t.jsx(
      B,
      {
        label: "Description",
        ariaLabel: "Description",
        value: o.description,
        onChange: (s) => i("description", s),
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
}, ee = ({ initialTool: o, studioPro: n, agent: i, onClose: l }) => {
  const [e, m] = h.useState(o || F()), [s, p] = h.useState(Y), u = h.useCallback(
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
      l(r);
    }
  }, x = () => {
    l(null);
  };
  P(x, T);
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
    if (r && s[r] !== !0) {
      const M = await f(a, c, i, n);
      p((V) => ({ ...V, [r]: M }));
    }
  }, D = (a, c) => {
    const r = { ...e, [a]: c };
    m(r), y(a, r);
  }, w = async () => {
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
    (a = e.document) != null && a.documentId && (e.toolType === d.Microflow && e.document.documentId ? J(n, e.document) : e.toolType === d.MCP && e.document.documentId && _(n, e.document));
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
        validationInfo: s,
        onFieldChange: D,
        onSelectDocument: w,
        onShowDocument: g,
        onToolTypeChange: b
      }
    ) : /* @__PURE__ */ t.jsx(
      Q,
      {
        tool: e,
        validationInfo: s,
        onSelectDocument: w,
        onShowDocument: g,
        onToolTypeChange: b
      }
    ) }) }),
    /* @__PURE__ */ t.jsx(R, { onOk: T, onCancel: x, onHelp: S })
  ] });
}, oe = ({ studioPro: o, initialTool: n, agent: i, onClose: l }) => /* @__PURE__ */ t.jsx(q, { studioPro: o, children: /* @__PURE__ */ t.jsx(ee, { initialTool: n, studioPro: o, agent: i, onClose: l }) }), pe = {
  async loaded(o, n) {
    const i = O(o), l = L(i);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const m = I.createRoot(e);
      let s;
      n.tool && (s = JSON.parse(decodeURIComponent(n.tool)));
      const p = JSON.parse(decodeURIComponent(n.agent)), u = (T) => {
        i.ui.dialogs.closeWithResult(n.dialogId, T);
      };
      m.render(
        /* @__PURE__ */ t.jsx(h.StrictMode, { children: /* @__PURE__ */ t.jsx(oe, { studioPro: i, initialTool: s, agent: p, onClose: u }) })
      );
    } catch (e) {
      throw l.error("Error editing agent tool:", e), new Error("Error editing agent tool:", e);
    }
  }
};
export {
  pe as component
};
//# sourceMappingURL=toolEdit.js.map
