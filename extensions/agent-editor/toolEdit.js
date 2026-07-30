import { j as i, d as k } from "./jsx-runtime-CWOFuNcx.js";
import { r as T, ae as F, a7 as B, a8 as L, ad as q, a9 as O } from "./PageContainers-BqHFWUr4.js";
import { createStudioProLogger as H } from "./logger-gMbuSAUF.js";
import { h as K, a as R } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { u as W, D as G } from "./DialogFooter-6k2RbD2B.js";
import { T as S, h as f, a as _ } from "./toolHandlers-3HUMGCDK.js";
import { o as g } from "./genericUtils-GaF65l2f.js";
import { b as p, a as u, U as M, c as $, h as z } from "./toolUtils-6Ez2eFCF.js";
import { k as J } from "./documentInitUtils-DoIciLyT.js";
import { G as x } from "./GroupBox-Czphilzs.js";
import { a as V } from "./TextWithIcon-DNOEi02G.js";
import { _ as Q, I as X } from "./ComboBox-BD_2njDk.js";
import { m as Y } from "./toolIcons-B55yYne7.js";
import { C as Z } from "./ComboBoxWithIcon-B8EWofqP.js";
import { T as A } from "./TextInputLabeled-D9mRNz7v.js";
import { I as ee } from "./Banner-Bk-4OzcL.js";
import { B as oe } from "./text-ByGAuYRB.js";
import { n as ie } from "./MicroflowIcon-CXcQxAQ6.js";
const te = [
  { key: p.Microflow, caption: "Microflow tool" },
  { key: p.MCP, caption: "MCP tool" }
], I = ({ selectedKey: e, validationInfo: t, onToolTypeChange: a }) => /* @__PURE__ */ i.jsx(
  Q,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    value: e,
    validate: () => t.isValidType,
    onChange: a,
    children: te.map((s) => /* @__PURE__ */ i.jsx(X, { id: s.key, children: s.caption }, s.key))
  }
), ae = Object.values(
  u
).map((e) => {
  const t = M[e].icon;
  return {
    key: e,
    caption: M[e].caption,
    icon: t ? /* @__PURE__ */ i.jsx(t, {}) : void 0
  };
}), N = ({ tool: e, onFieldChange: t, setTool: a }) => {
  const s = (o) => {
    const r = o || u.HiddenForUser, l = { ...e, userAccessApproval: r };
    r === u.HiddenForUser ? (l.displayTitle = "", l.displayDescription = "") : r === u.VisibleForUser && (l.displayDescription = ""), a(l);
  };
  return /* @__PURE__ */ i.jsxs(x, { label: "User (optional)", children: [
    /* @__PURE__ */ i.jsxs(ee, { children: [
      /* @__PURE__ */ i.jsx(oe, { children: "User confirmation not displayed" }),
      "Currently, user confirmation will only be displayed in runtime invocations and not in the playground in Studio Pro."
    ] }),
    /* @__PURE__ */ i.jsx(
      Z,
      {
        ariaLabel: "Permission",
        label: "Permission",
        selectedKey: e.userAccessApproval ? e.userAccessApproval : u.HiddenForUser,
        onSelectionChange: s,
        options: ae
      }
    ),
    e.toolType === "Microflow" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx(
        A,
        {
          label: "Title to display",
          ariaLabel: "Title to display",
          value: e.displayTitle ? e.displayTitle : "",
          onChange: (o) => t("displayTitle", o),
          description: "This title is displayed in the chat when the tool was used by the agent. If provided this will overwrite the tool name.",
          readOnly: e.userAccessApproval === u.HiddenForUser
        }
      ),
      /* @__PURE__ */ i.jsx(
        S,
        {
          label: "Description to display",
          ariaLabel: "Description to display",
          value: e.displayDescription ? e.displayDescription : "",
          onChange: (o) => t("displayDescription", o),
          description: "If provided, this description is displayed in the chat when the tool was used by the agent.",
          readOnly: e.userAccessApproval === u.HiddenForUser || e.userAccessApproval === u.VisibleForUser
        }
      )
    ] })
  ] });
}, ne = ({
  tool: e,
  validationInfo: t,
  onSelectDocument: a,
  onShowDocument: s,
  onToolTypeChange: o,
  onFieldChange: r,
  setTool: l
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs(x, { label: "Common", children: [
    /* @__PURE__ */ i.jsx(
      I,
      {
        selectedKey: e.toolType,
        validationInfo: t,
        onToolTypeChange: o
      }
    ),
    e.toolType === p.MCP && /* @__PURE__ */ i.jsx(
      V,
      {
        ariaLabel: "Consumed MCP service",
        label: "Consumed MCP service",
        value: e.document.qualifiedName,
        icon: e.document.qualifiedName ? Y : void 0,
        buttonCaption: "Select...",
        onClick: a,
        validate: () => t.isValidDocument,
        buttonCaptionSecondary: e.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: e.document.qualifiedName ? s : void 0
      }
    )
  ] }),
  e.toolType && /* @__PURE__ */ i.jsx(N, { tool: e, onFieldChange: r, setTool: l })
] }), se = ({
  tool: e,
  validationInfo: t,
  onFieldChange: a,
  onSelectDocument: s,
  onShowDocument: o,
  onToolTypeChange: r,
  setTool: l
}) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
  /* @__PURE__ */ i.jsxs(x, { label: "Common", children: [
    /* @__PURE__ */ i.jsx(
      I,
      {
        selectedKey: e.toolType,
        validationInfo: t,
        onToolTypeChange: r
      }
    ),
    /* @__PURE__ */ i.jsx(
      V,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: e.document.qualifiedName,
        icon: e.document.qualifiedName ? /* @__PURE__ */ i.jsx(ie, {}) : void 0,
        onClick: s,
        buttonCaption: "Select...",
        buttonCaptionSecondary: e.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: e.document.qualifiedName ? o : void 0,
        validate: () => t.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ i.jsxs(x, { label: "Naming", children: [
    /* @__PURE__ */ i.jsx(
      A,
      {
        label: "Name",
        ariaLabel: "Name",
        value: e.name,
        onChange: (c) => a("name", c),
        validate: () => t.isValidName
      }
    ),
    /* @__PURE__ */ i.jsx(
      S,
      {
        label: "Description",
        ariaLabel: "Description",
        value: e.description,
        onChange: (c) => a("description", c),
        validate: () => t.isValidDescription
      }
    )
  ] }),
  e.toolType && /* @__PURE__ */ i.jsx(N, { tool: e, onFieldChange: a, setTool: l })
] }), re = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0
}, le = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument"
}, ce = ({ initialTool: e, studioPro: t, agent: a, onClose: s }) => {
  const [o, r] = T.useState(e || $()), [l, c] = T.useState(re), h = T.useCallback(
    async (n) => ({
      isValidName: await f("name", n, a, t),
      isValidDescription: await f("description", n, a, t),
      isValidDocument: await f("document", n, a, t),
      isValidType: await f("toolType", n, a, t)
    }),
    [t, a]
  );
  T.useEffect(() => {
    e && e.name && h(e).then((n) => {
      c(n);
    });
  }, [e, h]);
  const y = async () => {
    const n = await h(o);
    if (c(n), !Object.values(n).some((m) => m !== !0)) {
      const m = o.toolType === p.MCP ? { ...o, name: "", description: "" } : o;
      s(m);
    }
  }, v = () => {
    s(null);
  };
  W(v, y);
  const E = () => {
    o.toolType === p.Microflow ? g(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools"
    ) : o.toolType === p.MCP ? g(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools-from-mcp-servers"
    ) : g("https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools");
  }, C = async (n, d) => {
    const m = le[n];
    if (m && l[m] !== !0) {
      const U = await f(n, d, a, t);
      c((P) => ({ ...P, [m]: U }));
    }
  }, w = (n, d) => {
    const m = { ...o, [n]: d };
    r(m), C(n, m);
  }, b = async () => {
    const n = await _(
      t,
      o.document.documentId,
      o.toolType === p.MCP ? J : "Microflows$Microflow"
    );
    if (n) {
      const d = { ...o, document: n };
      r(d), C("document", d);
    }
  }, j = () => {
    o.document?.documentId && (o.toolType === p.Microflow && o.document.documentId ? z(t, o.document) : o.toolType === p.MCP && o.document.documentId && K(t, o.document));
  }, D = (n) => {
    const d = {
      ...o,
      toolType: n,
      document: {
        documentId: "",
        qualifiedName: ""
      }
    };
    r(d), C("toolType", d);
  };
  return /* @__PURE__ */ i.jsxs(F, { children: [
    /* @__PURE__ */ i.jsx(B, { children: /* @__PURE__ */ i.jsx(L, { children: o.toolType === p.Microflow ? /* @__PURE__ */ i.jsx(
      se,
      {
        tool: o,
        validationInfo: l,
        onFieldChange: w,
        onSelectDocument: b,
        onShowDocument: j,
        onToolTypeChange: D,
        setTool: r
      }
    ) : /* @__PURE__ */ i.jsx(
      ne,
      {
        tool: o,
        validationInfo: l,
        onFieldChange: w,
        onSelectDocument: b,
        onShowDocument: j,
        onToolTypeChange: D,
        setTool: r
      }
    ) }) }),
    /* @__PURE__ */ i.jsx(G, { onOk: y, onCancel: v, onHelp: E })
  ] });
}, de = ({ studioPro: e, initialTool: t, agent: a, onClose: s }) => /* @__PURE__ */ i.jsx(O, { studioPro: e, children: /* @__PURE__ */ i.jsx(ce, { initialTool: t, studioPro: e, agent: a, onClose: s }) }), Ae = {
  async loaded(e, t) {
    const a = k(e), s = H(a);
    try {
      const o = document.getElementById("root");
      if (!o)
        throw new Error("Failed to find the root element");
      const r = q.createRoot(o), l = await R(a, t.agentDocumentId);
      let c;
      t.toolId && (c = l.tools.find((y) => y.id === t.toolId));
      const h = (y) => {
        a.ui.dialogs.closeWithResult(t.dialogId, y);
      };
      r.render(
        /* @__PURE__ */ i.jsx(T.StrictMode, { children: /* @__PURE__ */ i.jsx(de, { studioPro: a, initialTool: c, agent: l, onClose: h }) })
      );
    } catch (o) {
      throw s.error("Error editing agent tool:", o), new Error("Error editing agent tool:", o);
    }
  }
};
export {
  Ae as component
};
