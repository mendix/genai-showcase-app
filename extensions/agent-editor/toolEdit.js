import { j as t, d as k } from "./jsx-runtime-CWOFuNcx.js";
import { r as T, a2 as F, W as B, X as L, a1 as q, Y as O } from "./PageContainers-1sk3OYaf.js";
import { createStudioProLogger as H } from "./logger-gMbuSAUF.js";
import { h as K, a as R } from "./customBlobDocumentUtils-DRHCWWx0.js";
import { u as W, D as G } from "./DialogFooter-CVDbnhi9.js";
import { T as S, h as f, a as X } from "./toolHandlers-Z3JXlOg2.js";
import { o as g } from "./genericUtils-GaF65l2f.js";
import { b as p, a as u, U as M, c as Y, h as _ } from "./toolUtils-B-Rm60rY.js";
import { k as $ } from "./documentInitUtils-COeMuvhV.js";
import { G as x } from "./GroupBox-BxPlcX3c.js";
import { a as V } from "./TextWithIcon-Cn_oiqNe.js";
import { _ as z, I as J } from "./ComboBox-CJjZjYuG.js";
import { m as Q } from "./toolIcons-B55yYne7.js";
import { C as Z } from "./ComboBoxWithIcon-eOJ6Ms0Q.js";
import { I as ee } from "./Banner-BjuZQV3q.js";
import { B as oe } from "./text-Kj7UY3CS.js";
import { T as A } from "./TextInputLabeled-CTvLZgVy.js";
import { n as te } from "./MicroflowIcon-BNnR1c5E.js";
const ie = [
  { key: p.Microflow, caption: "Microflow tool" },
  { key: p.MCP, caption: "MCP tool" }
], I = ({ selectedKey: e, validationInfo: i, onToolTypeChange: a }) => /* @__PURE__ */ t.jsx(
  z,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    value: e,
    validate: () => i.isValidType,
    onChange: a,
    children: ie.map((s) => /* @__PURE__ */ t.jsx(J, { id: s.key, children: s.caption }, s.key))
  }
), ae = Object.values(
  u
).map((e) => {
  const i = M[e].icon;
  return {
    key: e,
    caption: M[e].caption,
    icon: /* @__PURE__ */ t.jsx(i, {})
  };
}), N = ({ tool: e, onFieldChange: i, setTool: a }) => {
  const s = (o) => {
    const r = o || u.HiddenForUser, l = { ...e, userAccessApproval: r };
    r === u.HiddenForUser ? (l.displayTitle = "", l.displayDescription = "") : r === u.VisibleForUser && (l.displayDescription = ""), a(l);
  };
  return /* @__PURE__ */ t.jsxs(x, { label: "User (optional)", children: [
    /* @__PURE__ */ t.jsxs(ee, { children: [
      /* @__PURE__ */ t.jsx(oe, { children: "User confirmation not displayed in Studio Pro Playground" }),
      "Currently, user confirmation will only be displayed in runtime invocations and not in the playground in Studio Pro."
    ] }),
    /* @__PURE__ */ t.jsx(
      Z,
      {
        ariaLabel: "Permission",
        label: "Permission",
        selectedKey: e.userAccessApproval || u.HiddenForUser,
        onSelectionChange: s,
        options: ae
      }
    ),
    e.toolType === "Microflow" && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        A,
        {
          label: "Title to display",
          ariaLabel: "Title to display",
          value: e.displayTitle ?? "",
          onChange: (o) => i("displayTitle", o),
          description: "This title is displayed in the chat when the tool was used by the agent. If not provided, the tool name will be displayed.",
          readOnly: e.userAccessApproval === u.HiddenForUser
        }
      ),
      /* @__PURE__ */ t.jsx(
        S,
        {
          label: "Description to display",
          ariaLabel: "Description to display",
          value: e.displayDescription ?? "",
          onChange: (o) => i("displayDescription", o),
          description: "If provided, this description is displayed in the chat when the tool was used by the agent.",
          readOnly: e.userAccessApproval === u.HiddenForUser || e.userAccessApproval === u.VisibleForUser
        }
      )
    ] })
  ] });
}, ne = ({
  tool: e,
  validationInfo: i,
  onSelectDocument: a,
  onShowDocument: s,
  onToolTypeChange: o,
  onFieldChange: r,
  setTool: l
}) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsxs(x, { label: "Common", children: [
    /* @__PURE__ */ t.jsx(
      I,
      {
        selectedKey: e.toolType,
        validationInfo: i,
        onToolTypeChange: o
      }
    ),
    e.toolType === p.MCP && /* @__PURE__ */ t.jsx(
      V,
      {
        ariaLabel: "Consumed MCP service",
        label: "Consumed MCP service",
        value: e.document.qualifiedName,
        icon: e.document.qualifiedName ? Q : void 0,
        buttonCaption: "Select...",
        onClick: a,
        validate: () => i.isValidDocument,
        buttonCaptionSecondary: e.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: e.document.qualifiedName ? s : void 0
      }
    )
  ] }),
  e.toolType && /* @__PURE__ */ t.jsx(N, { tool: e, onFieldChange: r, setTool: l })
] }), se = ({
  tool: e,
  validationInfo: i,
  onFieldChange: a,
  onSelectDocument: s,
  onShowDocument: o,
  onToolTypeChange: r,
  setTool: l
}) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsxs(x, { label: "Common", children: [
    /* @__PURE__ */ t.jsx(
      I,
      {
        selectedKey: e.toolType,
        validationInfo: i,
        onToolTypeChange: r
      }
    ),
    /* @__PURE__ */ t.jsx(
      V,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: e.document.qualifiedName,
        icon: e.document.qualifiedName ? /* @__PURE__ */ t.jsx(te, {}) : void 0,
        onClick: s,
        buttonCaption: "Select...",
        buttonCaptionSecondary: e.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: e.document.qualifiedName ? o : void 0,
        validate: () => i.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ t.jsxs(x, { label: "Naming", children: [
    /* @__PURE__ */ t.jsx(
      A,
      {
        label: "Name",
        ariaLabel: "Name",
        value: e.name,
        onChange: (c) => a("name", c),
        validate: () => i.isValidName
      }
    ),
    /* @__PURE__ */ t.jsx(
      S,
      {
        label: "Description",
        ariaLabel: "Description",
        value: e.description,
        onChange: (c) => a("description", c),
        validate: () => i.isValidDescription
      }
    )
  ] }),
  e.toolType && /* @__PURE__ */ t.jsx(N, { tool: e, onFieldChange: a, setTool: l })
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
}, ce = ({ initialTool: e, studioPro: i, agent: a, onClose: s }) => {
  const [o, r] = T.useState(() => {
    const n = e || Y();
    return {
      ...n,
      userAccessApproval: n.userAccessApproval ?? u.HiddenForUser
    };
  }), [l, c] = T.useState(re), h = T.useCallback(
    async (n) => ({
      isValidName: await f("name", n, a, i),
      isValidDescription: await f("description", n, a, i),
      isValidDocument: await f("document", n, a, i),
      isValidType: await f("toolType", n, a, i)
    }),
    [i, a]
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
      const P = await f(n, d, a, i);
      c((U) => ({ ...U, [m]: P }));
    }
  }, b = (n, d) => {
    const m = { ...o, [n]: d };
    r(m), C(n, m);
  }, w = async () => {
    const n = await X(
      i,
      o.document.documentId,
      o.toolType === p.MCP ? $ : "Microflows$Microflow"
    );
    if (n) {
      const d = { ...o, document: n };
      r(d), C("document", d);
    }
  }, j = () => {
    o.document?.documentId && (o.toolType === p.Microflow && o.document.documentId ? _(i, o.document) : o.toolType === p.MCP && o.document.documentId && K(i, o.document));
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
  return /* @__PURE__ */ t.jsxs(F, { children: [
    /* @__PURE__ */ t.jsx(B, { children: /* @__PURE__ */ t.jsx(L, { children: o.toolType === p.Microflow ? /* @__PURE__ */ t.jsx(
      se,
      {
        tool: o,
        validationInfo: l,
        onFieldChange: b,
        onSelectDocument: w,
        onShowDocument: j,
        onToolTypeChange: D,
        setTool: r
      }
    ) : /* @__PURE__ */ t.jsx(
      ne,
      {
        tool: o,
        validationInfo: l,
        onFieldChange: b,
        onSelectDocument: w,
        onShowDocument: j,
        onToolTypeChange: D,
        setTool: r
      }
    ) }) }),
    /* @__PURE__ */ t.jsx(G, { onOk: y, onCancel: v, onHelp: E })
  ] });
}, de = ({ studioPro: e, initialTool: i, agent: a, onClose: s }) => /* @__PURE__ */ t.jsx(O, { studioPro: e, children: /* @__PURE__ */ t.jsx(ce, { initialTool: i, studioPro: e, agent: a, onClose: s }) }), Ae = {
  async loaded(e, i) {
    const a = k(e), s = H(a);
    try {
      const o = document.getElementById("root");
      if (!o)
        throw new Error("Failed to find the root element");
      const r = q.createRoot(o), l = await R(a, i.agentDocumentId);
      let c;
      i.toolId && (c = l.tools.find((y) => y.id === i.toolId));
      const h = (y) => {
        a.ui.dialogs.closeWithResult(i.dialogId, y);
      };
      r.render(
        /* @__PURE__ */ t.jsx(T.StrictMode, { children: /* @__PURE__ */ t.jsx(de, { studioPro: a, initialTool: c, agent: l, onClose: h }) })
      );
    } catch (o) {
      throw s.error("Error editing agent tool:", o), new Error("Error editing agent tool:", o);
    }
  }
};
export {
  Ae as component
};
