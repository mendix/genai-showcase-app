import { R as n, a1 as x, r as y, ap as N, af as E, ag as k, ao as I, ah as q } from "./formelements-DgWWXRMR.js";
import { c as L } from "./index-CE9RqUwp.js";
import { createStudioProLogger as B } from "./logger-Bof2Evv1.js";
import { h as P, a as R } from "./customBlobDocumentUtils-Dwvjb_jQ.js";
import { u as O, D as A } from "./DialogFooter-CX5uFK7U.js";
import { T as F, h, a as K } from "./toolHandlers-VhPap08R.js";
import { e as d, f as _, L as H, x as W, N as G } from "./index-ClN9e0Gp.js";
import { T as v } from "./TextInputWithButton-H-kPhdc5.js";
import { _ as $, I as z } from "./ComboBox-tmgYuUfm.js";
import { n as J } from "./MicroflowIcon-D9CNADwL.js";
import { T as Q } from "./TextInputLabeled-DcUYd1Xh.js";
const U = [
  { key: d.Microflow, caption: "Microflow tool" },
  { key: d.MCP, caption: "MCP tool" }
], D = ({ selectedKey: o, validationInfo: t, onToolTypeChange: i }) => /* @__PURE__ */ n.jsx(
  $,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    value: o,
    validate: () => t.isValidType,
    onChange: i,
    children: U.map((l) => /* @__PURE__ */ n.jsx(z, { id: l.key, children: l.caption }, l.key))
  }
), X = ({
  tool: o,
  validationInfo: t,
  onSelectDocument: i,
  onShowDocument: l,
  onToolTypeChange: e
}) => /* @__PURE__ */ n.jsxs(x, { label: "Common", children: [
  /* @__PURE__ */ n.jsx(
    D,
    {
      selectedKey: o.toolType,
      validationInfo: t,
      onToolTypeChange: e
    }
  ),
  o.toolType === d.MCP && /* @__PURE__ */ n.jsx(
    v,
    {
      ariaLabel: "Consumed MCP service",
      label: "Consumed MCP service",
      value: o.document.qualifiedName,
      icon: o.document.qualifiedName ? _ : void 0,
      buttonCaption: "Select...",
      onClick: i,
      validate: () => t.isValidDocument,
      buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
      onClickSecondary: o.document.qualifiedName ? l : void 0
    }
  )
] }), Y = ({
  tool: o,
  validationInfo: t,
  onFieldChange: i,
  onSelectDocument: l,
  onShowDocument: e,
  onToolTypeChange: m
}) => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsxs(x, { label: "Common", children: [
    /* @__PURE__ */ n.jsx(
      D,
      {
        selectedKey: o.toolType,
        validationInfo: t,
        onToolTypeChange: m
      }
    ),
    /* @__PURE__ */ n.jsx(
      v,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: o.document.qualifiedName,
        icon: o.document.qualifiedName ? /* @__PURE__ */ n.jsx(J, {}) : void 0,
        onClick: l,
        buttonCaption: "Select...",
        buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: o.document.qualifiedName ? e : void 0,
        validate: () => t.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ n.jsxs(x, { label: "Naming", children: [
    /* @__PURE__ */ n.jsx(
      Q,
      {
        label: "Name",
        ariaLabel: "Name",
        value: o.name,
        onChange: (s) => i("name", s),
        validate: () => t.isValidName
      }
    ),
    /* @__PURE__ */ n.jsx(
      F,
      {
        label: "Description",
        ariaLabel: "Description",
        value: o.description,
        onChange: (s) => i("description", s),
        validate: () => t.isValidDescription
      }
    )
  ] })
] }), Z = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0
}, ee = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument"
}, oe = ({ initialTool: o, studioPro: t, agent: i, onClose: l }) => {
  const [e, m] = y.useState(o || H()), [s, u] = y.useState(Z), f = y.useCallback(
    async (a) => ({
      isValidName: await h("name", a, i, t),
      isValidDescription: await h("description", a, i, t),
      isValidDocument: await h("document", a, i, t),
      isValidType: await h("toolType", a, i, t)
    }),
    [t, i]
  );
  y.useEffect(() => {
    o && o.name && f(o).then((a) => {
      u(a);
    });
  }, [o, f]);
  const p = async () => {
    const a = await f(e);
    if (u(a), !Object.values(a).some((r) => r !== !0)) {
      const r = e.toolType === d.MCP ? { ...e, name: "", description: "" } : e;
      l(r);
    }
  }, C = () => {
    l(null);
  };
  O(C, p);
  const j = () => {
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
  }, T = async (a, c) => {
    const r = ee[a];
    if (r && s[r] !== !0) {
      const S = await h(a, c, i, t);
      u((V) => ({ ...V, [r]: S }));
    }
  }, M = (a, c) => {
    const r = { ...e, [a]: c };
    m(r), T(a, r);
  }, w = async () => {
    const a = await K(
      t,
      e.document.documentId,
      e.toolType === d.MCP ? G : "Microflows$Microflow"
    );
    if (a) {
      const c = { ...e, document: a };
      m(c), T("document", c);
    }
  }, g = () => {
    var a;
    (a = e.document) != null && a.documentId && (e.toolType === d.Microflow && e.document.documentId ? W(t, e.document) : e.toolType === d.MCP && e.document.documentId && P(t, e.document));
  }, b = (a) => {
    const c = {
      ...e,
      toolType: a,
      document: {
        documentId: "",
        qualifiedName: ""
      }
    };
    m(c), T("toolType", c);
  };
  return /* @__PURE__ */ n.jsxs(N, { children: [
    /* @__PURE__ */ n.jsx(E, { children: /* @__PURE__ */ n.jsx(k, { children: e.toolType === d.Microflow ? /* @__PURE__ */ n.jsx(
      Y,
      {
        tool: e,
        validationInfo: s,
        onFieldChange: M,
        onSelectDocument: w,
        onShowDocument: g,
        onToolTypeChange: b
      }
    ) : /* @__PURE__ */ n.jsx(
      X,
      {
        tool: e,
        validationInfo: s,
        onSelectDocument: w,
        onShowDocument: g,
        onToolTypeChange: b
      }
    ) }) }),
    /* @__PURE__ */ n.jsx(A, { onOk: p, onCancel: C, onHelp: j })
  ] });
}, te = ({ studioPro: o, initialTool: t, agent: i, onClose: l }) => /* @__PURE__ */ n.jsx(q, { studioPro: o, children: /* @__PURE__ */ n.jsx(oe, { initialTool: t, studioPro: o, agent: i, onClose: l }) }), fe = {
  async loaded(o, t) {
    const i = L(o), l = B(i);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const m = I.createRoot(e), s = await R(i, t.agentDocumentId);
      let u;
      t.toolId && (u = s.tools.find((p) => p.id === t.toolId));
      const f = (p) => {
        i.ui.dialogs.closeWithResult(t.dialogId, p);
      };
      m.render(
        /* @__PURE__ */ n.jsx(y.StrictMode, { children: /* @__PURE__ */ n.jsx(te, { studioPro: i, initialTool: u, agent: s, onClose: f }) })
      );
    } catch (e) {
      throw l.error("Error editing agent tool:", e), new Error("Error editing agent tool:", e);
    }
  }
};
export {
  fe as component
};
