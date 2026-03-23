import { w as a, G as C, r as h, V as E, E as k, C as q, Q as I, D as L } from "./Icon-DL4Zg1xv.js";
import { s as O, c as P } from "./DesignSystemTokens-CB_9gr2a.js";
import { D as R } from "./DialogFooter-D2shZ6-5.js";
import { T as B, c as A, h as f, a as F, b as K } from "./toolHandlers-Boy31O5Y.js";
import { n as _, h as G } from "./MicroflowIcon-BpJMnxRT.js";
import { T as d, b as H, p as b } from "./index-CQcFpK0H.js";
import { T as J } from "./TextInputLabeled-gjLdhU4s.js";
import { T as j } from "./TextInputWithButton-E-wZEDvQ.js";
import { S as U, I as W } from "./ComboBox-Bwx3kM_a.js";
const Q = [
  { key: d.Microflow, caption: "Microflow tool" },
  { key: d.MCP, caption: "MCP tool" }
], v = ({ selectedKey: o, validationInfo: n, onToolTypeChange: i }) => /* @__PURE__ */ a.jsx(
  U,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    selectedKey: o,
    validate: () => n.isValidType,
    onSelectionChange: i,
    children: Q.map((l) => /* @__PURE__ */ a.jsx(W, { id: l.key, children: l.caption }, l.key))
  }
), $ = ({
  tool: o,
  validationInfo: n,
  onFieldChange: i,
  onSelectDocument: l,
  onShowDocument: e,
  onToolTypeChange: m
}) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
  /* @__PURE__ */ a.jsxs(C, { label: "Common", children: [
    /* @__PURE__ */ a.jsx(
      v,
      {
        selectedKey: o.toolType,
        validationInfo: n,
        onToolTypeChange: m
      }
    ),
    /* @__PURE__ */ a.jsx(
      j,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: o.document.qualifiedName,
        icon: o.document.qualifiedName ? /* @__PURE__ */ a.jsx(_, {}) : void 0,
        onClick: l,
        buttonCaption: "Select...",
        buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: o.document.qualifiedName ? e : void 0,
        validate: () => n.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ a.jsxs(C, { label: "Naming", children: [
    /* @__PURE__ */ a.jsx(
      J,
      {
        label: "Name",
        ariaLabel: "Name",
        value: o.name,
        onChange: (r) => i("name", r),
        validate: () => n.isValidName
      }
    ),
    /* @__PURE__ */ a.jsx(
      B,
      {
        label: "Description",
        ariaLabel: "Description",
        value: o.description,
        onChange: (r) => i("description", r),
        validate: () => n.isValidDescription
      }
    )
  ] })
] }), z = ({
  tool: o,
  validationInfo: n,
  onSelectDocument: i,
  onShowDocument: l,
  onToolTypeChange: e
}) => /* @__PURE__ */ a.jsxs(C, { label: "Common", children: [
  /* @__PURE__ */ a.jsx(
    v,
    {
      selectedKey: o.toolType,
      validationInfo: n,
      onToolTypeChange: e
    }
  ),
  o.toolType === d.MCP && /* @__PURE__ */ a.jsx(
    j,
    {
      ariaLabel: "Consumed MCP service",
      label: "Consumed MCP service",
      value: o.document.qualifiedName,
      icon: o.document.qualifiedName ? H : void 0,
      buttonCaption: "Select...",
      onClick: i,
      validate: () => n.isValidDocument,
      buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
      onClickSecondary: o.document.qualifiedName ? l : void 0
    }
  )
] }), X = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0
}, Y = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument"
}, Z = ({ initialTool: o, studioPro: n, agent: i, onClose: l }) => {
  const [e, m] = h.useState(o || A()), [r, p] = h.useState(X), u = h.useCallback(
    async (t) => ({
      isValidName: await f("name", t, i, n),
      isValidDescription: await f("description", t, i, n),
      isValidDocument: await f("document", t, i, n),
      isValidType: await f("toolType", t, i, n)
    }),
    [n, i]
  );
  h.useEffect(() => {
    o && o.name && u(o).then((t) => {
      p(t);
    });
  }, [o, u]);
  const T = async () => {
    const t = await u(e);
    if (p(t), !Object.values(t).some((c) => c !== !0)) {
      const c = e.toolType === d.MCP ? { ...e, name: "", description: "" } : e;
      l(c);
    }
  }, D = () => {
    l(null);
  }, S = () => {
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
  }, y = async (t, s) => {
    const c = Y[t];
    if (c && r[c] !== !0) {
      const N = await f(t, s, i, n);
      p((V) => ({ ...V, [c]: N }));
    }
  }, M = (t, s) => {
    const c = { ...e, [t]: s };
    m(c), y(t, c);
  }, x = async () => {
    const t = await K(
      n,
      e.toolType === d.MCP ? b : "Microflows$Microflow"
    );
    if (t) {
      const s = { ...e, document: t };
      m(s), y("document", s);
    }
  }, w = () => {
    var t, s, c;
    e.toolType === d.Microflow && ((t = e.document) != null && t.qualifiedName) ? G(n, e.document.qualifiedName) : e.toolType === d.MCP && ((s = e.document) != null && s.qualifiedName) && ((c = e.document) != null && c.documentId) && F(n, e.document, b);
  }, g = (t) => {
    const s = {
      ...e,
      toolType: t,
      document: {
        documentId: "",
        qualifiedName: ""
      }
    };
    m(s), y("toolType", s);
  };
  return /* @__PURE__ */ a.jsxs(E, { children: [
    /* @__PURE__ */ a.jsx(k, { children: /* @__PURE__ */ a.jsx(q, { children: e.toolType === d.Microflow ? /* @__PURE__ */ a.jsx(
      $,
      {
        tool: e,
        validationInfo: r,
        onFieldChange: M,
        onSelectDocument: x,
        onShowDocument: w,
        onToolTypeChange: g
      }
    ) : /* @__PURE__ */ a.jsx(
      z,
      {
        tool: e,
        validationInfo: r,
        onSelectDocument: x,
        onShowDocument: w,
        onToolTypeChange: g
      }
    ) }) }),
    /* @__PURE__ */ a.jsx(R, { onOk: T, onCancel: D, onHelp: S })
  ] });
}, ee = ({ studioPro: o, initialTool: n, agent: i, onClose: l }) => /* @__PURE__ */ a.jsx(L, { studioPro: o, children: /* @__PURE__ */ a.jsx(Z, { initialTool: n, studioPro: o, agent: i, onClose: l }) }), de = {
  async loaded(o, n) {
    const i = O(o), l = P(i);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const m = I.createRoot(e);
      let r;
      n.tool && (r = JSON.parse(decodeURIComponent(n.tool)));
      const p = JSON.parse(decodeURIComponent(n.agent)), u = (T) => {
        i.ui.dialogs.closeWithResult(n.dialogId, T);
      };
      m.render(
        /* @__PURE__ */ a.jsx(h.StrictMode, { children: /* @__PURE__ */ a.jsx(ee, { studioPro: i, initialTool: r, agent: p, onClose: u }) })
      );
    } catch (e) {
      throw l.error("Error editing agent tool:", e), new Error("Error editing agent tool:", e);
    }
  }
};
export {
  de as component
};
//# sourceMappingURL=toolEdit.js.map
