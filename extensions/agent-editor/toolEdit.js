import { j as a, d as E } from "./jsx-runtime-CWOFuNcx.js";
import { r as y, ae as k, a7 as I, a8 as q, ad as B, a9 as L } from "./PageContainers-BqHFWUr4.js";
import { createStudioProLogger as P } from "./logger-gMbuSAUF.js";
import { h as O, a as R } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { u as A, D as F } from "./DialogFooter-6k2RbD2B.js";
import { T as K, h, a as G } from "./toolHandlers-DR5-tmnR.js";
import { o as x } from "./genericUtils-GaF65l2f.js";
import { a as d, c as H, h as W } from "./toolUtils-MLHoVQt4.js";
import { k as U } from "./documentInitUtils-DoIciLyT.js";
import { G as C } from "./GroupBox-Czphilzs.js";
import { T as D } from "./TextInputWithButton-BkoxR7Pz.js";
import { _, I as $ } from "./ComboBox-BD_2njDk.js";
import { m as z } from "./toolIcons-B55yYne7.js";
import { n as J } from "./MicroflowIcon-CXcQxAQ6.js";
import { T as Q } from "./TextInputLabeled-D9mRNz7v.js";
const X = [
  { key: d.Microflow, caption: "Microflow tool" },
  { key: d.MCP, caption: "MCP tool" }
], b = ({ selectedKey: o, validationInfo: t, onToolTypeChange: n }) => /* @__PURE__ */ a.jsx(
  _,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    value: o,
    validate: () => t.isValidType,
    onChange: n,
    children: X.map((l) => /* @__PURE__ */ a.jsx($, { id: l.key, children: l.caption }, l.key))
  }
), Y = ({
  tool: o,
  validationInfo: t,
  onSelectDocument: n,
  onShowDocument: l,
  onToolTypeChange: e
}) => /* @__PURE__ */ a.jsxs(C, { label: "Common", children: [
  /* @__PURE__ */ a.jsx(
    b,
    {
      selectedKey: o.toolType,
      validationInfo: t,
      onToolTypeChange: e
    }
  ),
  o.toolType === d.MCP && /* @__PURE__ */ a.jsx(
    D,
    {
      ariaLabel: "Consumed MCP service",
      label: "Consumed MCP service",
      value: o.document.qualifiedName,
      icon: o.document.qualifiedName ? z : void 0,
      buttonCaption: "Select...",
      onClick: n,
      validate: () => t.isValidDocument,
      buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
      onClickSecondary: o.document.qualifiedName ? l : void 0
    }
  )
] }), Z = ({
  tool: o,
  validationInfo: t,
  onFieldChange: n,
  onSelectDocument: l,
  onShowDocument: e,
  onToolTypeChange: m
}) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
  /* @__PURE__ */ a.jsxs(C, { label: "Common", children: [
    /* @__PURE__ */ a.jsx(
      b,
      {
        selectedKey: o.toolType,
        validationInfo: t,
        onToolTypeChange: m
      }
    ),
    /* @__PURE__ */ a.jsx(
      D,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: o.document.qualifiedName,
        icon: o.document.qualifiedName ? /* @__PURE__ */ a.jsx(J, {}) : void 0,
        onClick: l,
        buttonCaption: "Select...",
        buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: o.document.qualifiedName ? e : void 0,
        validate: () => t.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ a.jsxs(C, { label: "Naming", children: [
    /* @__PURE__ */ a.jsx(
      Q,
      {
        label: "Name",
        ariaLabel: "Name",
        value: o.name,
        onChange: (s) => n("name", s),
        validate: () => t.isValidName
      }
    ),
    /* @__PURE__ */ a.jsx(
      K,
      {
        label: "Description",
        ariaLabel: "Description",
        value: o.description,
        onChange: (s) => n("description", s),
        validate: () => t.isValidDescription
      }
    )
  ] })
] }), ee = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0
}, oe = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument"
}, te = ({ initialTool: o, studioPro: t, agent: n, onClose: l }) => {
  const [e, m] = y.useState(o || H()), [s, u] = y.useState(ee), f = y.useCallback(
    async (i) => ({
      isValidName: await h("name", i, n, t),
      isValidDescription: await h("description", i, n, t),
      isValidDocument: await h("document", i, n, t),
      isValidType: await h("toolType", i, n, t)
    }),
    [t, n]
  );
  y.useEffect(() => {
    o && o.name && f(o).then((i) => {
      u(i);
    });
  }, [o, f]);
  const p = async () => {
    const i = await f(e);
    if (u(i), !Object.values(i).some((r) => r !== !0)) {
      const r = e.toolType === d.MCP ? { ...e, name: "", description: "" } : e;
      l(r);
    }
  }, g = () => {
    l(null);
  };
  A(g, p);
  const M = () => {
    e.toolType === d.Microflow ? x(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools"
    ) : e.toolType === d.MCP ? x(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools-from-mcp-servers"
    ) : x("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools");
  }, T = async (i, c) => {
    const r = oe[i];
    if (r && s[r] !== !0) {
      const V = await h(i, c, n, t);
      u((N) => ({ ...N, [r]: V }));
    }
  }, S = (i, c) => {
    const r = { ...e, [i]: c };
    m(r), T(i, r);
  }, w = async () => {
    const i = await G(
      t,
      e.document.documentId,
      e.toolType === d.MCP ? U : "Microflows$Microflow"
    );
    if (i) {
      const c = { ...e, document: i };
      m(c), T("document", c);
    }
  }, j = () => {
    e.document?.documentId && (e.toolType === d.Microflow && e.document.documentId ? W(t, e.document) : e.toolType === d.MCP && e.document.documentId && O(t, e.document));
  }, v = (i) => {
    const c = {
      ...e,
      toolType: i,
      document: {
        documentId: "",
        qualifiedName: ""
      }
    };
    m(c), T("toolType", c);
  };
  return /* @__PURE__ */ a.jsxs(k, { children: [
    /* @__PURE__ */ a.jsx(I, { children: /* @__PURE__ */ a.jsx(q, { children: e.toolType === d.Microflow ? /* @__PURE__ */ a.jsx(
      Z,
      {
        tool: e,
        validationInfo: s,
        onFieldChange: S,
        onSelectDocument: w,
        onShowDocument: j,
        onToolTypeChange: v
      }
    ) : /* @__PURE__ */ a.jsx(
      Y,
      {
        tool: e,
        validationInfo: s,
        onSelectDocument: w,
        onShowDocument: j,
        onToolTypeChange: v
      }
    ) }) }),
    /* @__PURE__ */ a.jsx(F, { onOk: p, onCancel: g, onHelp: M })
  ] });
}, ae = ({ studioPro: o, initialTool: t, agent: n, onClose: l }) => /* @__PURE__ */ a.jsx(L, { studioPro: o, children: /* @__PURE__ */ a.jsx(te, { initialTool: t, studioPro: o, agent: n, onClose: l }) }), Ce = {
  async loaded(o, t) {
    const n = E(o), l = P(n);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const m = B.createRoot(e), s = await R(n, t.agentDocumentId);
      let u;
      t.toolId && (u = s.tools.find((p) => p.id === t.toolId));
      const f = (p) => {
        n.ui.dialogs.closeWithResult(t.dialogId, p);
      };
      m.render(
        /* @__PURE__ */ a.jsx(y.StrictMode, { children: /* @__PURE__ */ a.jsx(ae, { studioPro: n, initialTool: u, agent: s, onClose: f }) })
      );
    } catch (e) {
      throw l.error("Error editing agent tool:", e), new Error("Error editing agent tool:", e);
    }
  }
};
export {
  Ce as component
};
