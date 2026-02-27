import { w as t, G as T, r as f, aM as V, E, C as k, aK as q, D as I } from "./TextInputWithIcon-Bxcjz2pl.js";
import { t as L, c as O } from "./logger-CC_FxqwC.js";
import { D as P } from "./DialogFooter-BWIHywC0.js";
import { T as R, c as B, h as p, a as K, b as A } from "./toolHandlers-CQqEp1kf.js";
import { T as b, n as F, h as _ } from "./genAICommonsEntities-Dtcj_rDj.js";
import { l as g } from "./index-DMt7dhDX.js";
import { T as G } from "./TextInputLabeled-Cr8pg4pf.js";
import { S as H, N as J } from "./ComboBox-D4VTIJ8V.js";
import { m as U } from "./consumedMCPServiceUtils-BaykyGe_.js";
const W = [
  { key: "Microflow", caption: "Microflow tool" },
  { key: "MCP", caption: "MCP tool" }
], j = ({ selectedKey: o, validationInfo: a, onToolTypeChange: i }) => /* @__PURE__ */ t.jsx(
  H,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    selectedKey: o,
    validate: () => a.isValidType,
    onSelectionChange: i,
    children: W.map((l) => /* @__PURE__ */ t.jsx(J, { id: l.key, children: l.caption }, l.key))
  }
), $ = ({
  tool: o,
  validationInfo: a,
  onFieldChange: i,
  onSelectDocument: l,
  onShowDocument: e,
  onToolTypeChange: r
}) => /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
  /* @__PURE__ */ t.jsxs(T, { label: "Common", children: [
    /* @__PURE__ */ t.jsx(
      j,
      {
        selectedKey: o.toolType,
        validationInfo: a,
        onToolTypeChange: r
      }
    ),
    /* @__PURE__ */ t.jsx(
      b,
      {
        ariaLabel: "Microflow",
        label: "Microflow",
        value: o.document.qualifiedName,
        icon: o.document.qualifiedName ? /* @__PURE__ */ t.jsx(F, {}) : void 0,
        onClick: l,
        buttonCaption: "Select...",
        buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
        onClickSecondary: o.document.qualifiedName ? e : void 0,
        validate: () => a.isValidDocument
      }
    )
  ] }),
  /* @__PURE__ */ t.jsxs(T, { label: "Naming", children: [
    /* @__PURE__ */ t.jsx(
      G,
      {
        label: "Name",
        ariaLabel: "Name",
        value: o.name,
        onChange: (d) => i("name", d),
        validate: () => a.isValidName
      }
    ),
    /* @__PURE__ */ t.jsx(
      R,
      {
        label: "Description",
        ariaLabel: "Description",
        value: o.description,
        onChange: (d) => i("description", d),
        validate: () => a.isValidDescription
      }
    )
  ] })
] }), z = ({
  tool: o,
  validationInfo: a,
  onSelectDocument: i,
  onShowDocument: l,
  onToolTypeChange: e
}) => /* @__PURE__ */ t.jsxs(T, { label: "Common", children: [
  /* @__PURE__ */ t.jsx(
    j,
    {
      selectedKey: o.toolType,
      validationInfo: a,
      onToolTypeChange: e
    }
  ),
  o.toolType === "MCP" && /* @__PURE__ */ t.jsx(
    b,
    {
      ariaLabel: "Consumed MCP service",
      label: "Consumed MCP service",
      value: o.document.qualifiedName,
      icon: o.document.qualifiedName ? U : void 0,
      buttonCaption: "Select...",
      onClick: i,
      validate: () => a.isValidDocument,
      buttonCaptionSecondary: o.document.qualifiedName ? "Show" : void 0,
      onClickSecondary: o.document.qualifiedName ? l : void 0
    }
  )
] }), Q = {
  isValidName: !0,
  isValidDescription: !0,
  isValidDocument: !0,
  isValidType: !0
}, X = {
  name: "isValidName",
  description: "isValidDescription",
  toolType: "isValidType",
  document: "isValidDocument"
}, Y = ({ initialTool: o, studioPro: a, agent: i, onClose: l }) => {
  const [e, r] = f.useState(o || B()), [d, m] = f.useState(Q), u = f.useCallback(
    async (n) => ({
      isValidName: await p("name", n, i, a),
      isValidDescription: await p("description", n, i, a),
      isValidDocument: await p("document", n, i, a),
      isValidType: await p("toolType", n, i, a)
    }),
    [a, i]
  );
  f.useEffect(() => {
    o && o.name && u(o).then((n) => {
      m(n);
    });
  }, [o, u]);
  const h = async () => {
    const n = await u(e);
    if (m(n), !Object.values(n).some((c) => c !== !0)) {
      const c = e.toolType === "MCP" ? { ...e, name: "", description: "" } : e;
      l(c);
    }
  }, v = () => {
    l(null);
  }, D = () => {
    e.toolType === "Microflow" ? window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-microflows-as-tools",
      "_blank"
    ) : e.toolType === "MCP" ? window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools-from-mcp-servers",
      "_blank"
    ) : window.open(
      "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/agent-commons/#adding-tools",
      "_blank"
    );
  }, y = async (n, s) => {
    const c = X[n];
    if (c && d[c] !== !0) {
      const S = await p(n, s, i, a);
      m((N) => ({ ...N, [c]: S }));
    }
  }, M = (n, s) => {
    const c = { ...e, [n]: s };
    r(c), y(n, c);
  }, C = async () => {
    const n = await A(
      a,
      e.toolType === "MCP" ? g : "Microflows$Microflow"
    );
    if (n) {
      const s = { ...e, document: n };
      r(s), y("document", s);
    }
  }, x = () => {
    var n, s, c;
    e.toolType === "Microflow" && ((n = e.document) != null && n.qualifiedName) ? _(a, e.document.qualifiedName) : e.toolType === "MCP" && ((s = e.document) != null && s.qualifiedName) && ((c = e.document) != null && c.documentId) && K(a, e.document, g);
  }, w = (n) => {
    const s = {
      ...e,
      toolType: n,
      document: {
        documentId: "",
        qualifiedName: ""
      }
    };
    r(s), y("toolType", s);
  };
  return /* @__PURE__ */ t.jsxs(V, { children: [
    /* @__PURE__ */ t.jsx(E, { children: /* @__PURE__ */ t.jsx(k, { children: e.toolType === "Microflow" ? /* @__PURE__ */ t.jsx(
      $,
      {
        tool: e,
        validationInfo: d,
        onFieldChange: M,
        onSelectDocument: C,
        onShowDocument: x,
        onToolTypeChange: w
      }
    ) : /* @__PURE__ */ t.jsx(
      z,
      {
        tool: e,
        validationInfo: d,
        onSelectDocument: C,
        onShowDocument: x,
        onToolTypeChange: w
      }
    ) }) }),
    /* @__PURE__ */ t.jsx(P, { onOk: h, onCancel: v, onHelp: D })
  ] });
}, Z = ({ studioPro: o, initialTool: a, agent: i, onClose: l }) => /* @__PURE__ */ t.jsx(I, { studioPro: o, children: /* @__PURE__ */ t.jsx(Y, { initialTool: a, studioPro: o, agent: i, onClose: l }) }), de = {
  async loaded(o, a) {
    const i = L(o), l = O(i);
    try {
      const e = document.getElementById("root");
      if (!e)
        throw new Error("Failed to find the root element");
      const r = q.createRoot(e);
      let d;
      a.tool && (d = JSON.parse(decodeURIComponent(a.tool)));
      const m = JSON.parse(decodeURIComponent(a.agent)), u = (h) => {
        i.ui.dialogs.closeWithResult(a.dialogId, h);
      };
      r.render(
        /* @__PURE__ */ t.jsx(f.StrictMode, { children: /* @__PURE__ */ t.jsx(Z, { studioPro: i, initialTool: d, agent: m, onClose: u }) })
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
