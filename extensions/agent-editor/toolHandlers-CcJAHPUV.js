import { ad as T, r as h, ae as r, aC as C, aD as y, aE as A, aM as R, aG as D, ag as F } from "./TextInputWithIcon-B3kv_B9i.js";
import { T as I } from "./ComboBox-DOXi1OXZ.js";
const W = T(I).withConfig({
  shouldForwardProp: (t) => !["hasHighlighting"].includes(t)
})`
  width: 100%;
  resize: vertical;
  & textarea {
    ${({ hasHighlighting: t }) => t ? `
      line-height: 155%;
      min-height: calc(1.55em * 5 + 8px);
      background-color: transparent;
      color: transparent;
      caret-color: black;
      
      &::selection {
        background-color: rgba(0, 123, 255, 0.3) !important;
      }
    ` : ""}
    position: relative;
    z-index: 1;
  }
`, O = T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 3px;
  width: 100%;
  padding: 4px;
  pointer-events: none;
  font-family: inherit;
  font-size: inherit;
  line-height: 155%;
  margin: inherit;
  border: 1px solid transparent;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: visible;
  z-index: 0;
  transform: translateY(var(--scroll-offset, 0px));
`, q = T.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`, z = T.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: -1;
  border: 1px solid transparent;
`, N = ({
  label: t,
  ariaLabel: e,
  value: o,
  onChange: d,
  readOnly: i = !1,
  defaultHeightRows: u,
  highlightRules: m,
  validate: f
}) => {
  const p = h.useRef(null), a = h.useRef(null), [g, b] = h.useState(0), S = u || 5, v = m && m.length > 0, E = () => {
    if (!v) return null;
    const n = [];
    m.forEach((c, x) => {
      Array.from(o.matchAll(c.pattern)).forEach((w) => {
        w.index !== void 0 && n.push({
          start: w.index,
          end: w.index + w[0].length,
          text: w[0],
          style: c.style,
          ruleIndex: x
        });
      });
    }), n.sort((c, x) => c.start - x.start);
    const l = [];
    let s = 0;
    return n.forEach((c, x) => {
      c.start > s && l.push(
        /* @__PURE__ */ r.jsx("span", { children: o.slice(s, c.start) }, `text-${s}-${c.start}`)
      ), c.start >= s && (l.push(
        /* @__PURE__ */ r.jsx("span", { style: c.style, children: c.text }, `placeholder-${c.ruleIndex}-${x}`)
      ), s = c.end);
    }), s < o.length && l.push(
      /* @__PURE__ */ r.jsx("span", { children: o.slice(s) }, `text-${s}-end`)
    ), l;
  }, j = h.useCallback(() => {
    var l;
    const n = (l = p.current) == null ? void 0 : l.querySelector("textarea");
    if (n) {
      const s = n.offsetWidth - n.clientWidth;
      b(s);
    }
  }, []), $ = h.useCallback(() => {
    var l;
    const n = (l = p.current) == null ? void 0 : l.querySelector("textarea");
    if (n && a.current) {
      const s = n.scrollTop;
      a.current.style.setProperty("--scroll-offset", `-${s}px`);
    }
  }, []);
  return h.useEffect(() => {
    var l;
    const n = (l = p.current) == null ? void 0 : l.querySelector("textarea");
    if (n) {
      j();
      const s = new ResizeObserver(j);
      return s.observe(n), n.addEventListener("scroll", $), () => {
        s.disconnect(), n.removeEventListener("scroll", $);
      };
    }
  }, [$, j]), /* @__PURE__ */ r.jsxs(C, { children: [
    t && /* @__PURE__ */ r.jsx(y, { children: /* @__PURE__ */ r.jsx(A, { children: t }) }),
    /* @__PURE__ */ r.jsx(y, { fullWidth: !0, children: /* @__PURE__ */ r.jsxs(q, { ref: p, children: [
      v && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx(z, {}),
        /* @__PURE__ */ r.jsx(
          O,
          {
            ref: a,
            style: { paddingRight: `${2 + g}px` },
            children: E()
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx(
        W,
        {
          ariaLabel: e,
          value: o,
          readOnly: i,
          onChange: d,
          rows: S,
          hasHighlighting: v,
          validate: f
        }
      )
    ] }) })
  ] });
}, _ = ({
  label: t,
  ariaLabel: e,
  value: o,
  buttonCaption: d,
  onClick: i,
  buttonCaptionSecondary: u,
  onClickSecondary: m,
  placeholder: f,
  hasMarginTop: p = !1,
  icon: a,
  validate: g
}) => {
  const b = p ? 8 : 0;
  return /* @__PURE__ */ r.jsxs(C, { marginTop: b, children: [
    t && /* @__PURE__ */ r.jsx(y, { children: /* @__PURE__ */ r.jsx(A, { children: t }) }),
    /* @__PURE__ */ r.jsx(y, { fullWidth: !0, children: /* @__PURE__ */ r.jsxs(C, { children: [
      /* @__PURE__ */ r.jsx(y, { fullWidth: !0, children: /* @__PURE__ */ r.jsx(
        R,
        {
          ariaLabel: e,
          value: o,
          placeholder: f,
          readOnly: !0,
          icon: a,
          validate: g
        }
      ) }),
      /* @__PURE__ */ r.jsx(
        D,
        {
          onPress: i,
          children: d
        }
      ),
      u && /* @__PURE__ */ r.jsx(
        D,
        {
          onPress: m,
          children: u
        }
      )
    ] }) })
  ] });
}, B = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", L = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var P = Object.defineProperty, Z = (t, e) => P(t, "name", { value: e, configurable: !0 });
const Y = Z((t) => r.jsx(F, { light: L, dark: B, ...t }), "MicroflowIcon"), J = async (t, e) => {
  const o = await M(t, e);
  if (!o)
    return await t.ui.messageBoxes.show(
      "error",
      "Could not find microflow.",
      "This microflow might have been deleted or renamed. Please update the tool microflow selection."
    );
  await t.ui.editors.editDocument(o.$ID);
}, M = async (t, e) => {
  if (!e)
    return null;
  const [o, d] = e.split(".");
  if (!o || !d)
    return null;
  const i = await t.app.model.microflows.loadAll((u) => u.moduleName === o && u.name === d);
  return i.length === 0 ? null : i[0];
}, k = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool"
}, K = async (t, e, o, d) => {
  const i = await t.ui.elementSelectors.selectDocument({
    query: { elementType: d }
  });
  return i.status == "ok" ? { ...e, [o]: i.selected.module + "." + i.selected.name } : null;
}, Q = async (t, e, o, d) => {
  const i = d.tools;
  switch (t) {
    case "name":
      if (!e.name || e.name.trim() === "")
        return "Tool name cannot be empty.";
      if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(e.name))
        return "Tool name must start with a letter or underscore and contain only letters, numbers, and underscores.";
      if (e.name.length > 64)
        return "Tool name cannot exceed 64 characters.";
      if (i && i.some((a) => a.name === e.name && a.id !== e.id))
        return "Tool name must be unique.";
      break;
    case "description":
      if (!e.description || e.description.trim() === "")
        return "Tool description cannot be empty.";
      if (e.description.length > 4096)
        return "Tool description cannot exceed 4096 characters.";
      break;
    case "microflow":
      const u = [
        "DataTypes$StringType",
        "DataTypes$BooleanType",
        "DataTypes$IntegerType",
        "DataTypes$DecimalType",
        "DataTypes$FloatType",
        "DataTypes$DateTimeType",
        "DataTypes$VoidType",
        "DataTypes$EmptyType",
        "DataTypes$EnumerationType"
      ], m = [
        k.Request,
        k.Tool
      ];
      if (e.toolType === "Microflow" && (!e.microflow || e.microflow.trim() === ""))
        return "Microflow must be selected for Microflow tool.";
      const f = await M(o, e.microflow || "");
      if (f === null)
        return "Selected microflow does not exist.";
      if (f.microflowReturnType.$Type !== "DataTypes$StringType")
        return "Tool microflow must return a String.";
      const p = f.objectCollection.objects;
      if (p) {
        for (const a of p)
          if (a.$Type === "Microflows$MicroflowParameterObject") {
            if (u.includes(a.variableType.$Type))
              continue;
            if (a.variableType.$Type === "DataTypes$ObjectType" && m.includes(a.variableType.entity))
              continue;
            return `Tool microflow parameter "${a.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
          }
      }
      break;
    case "toolType":
      if (!e.toolType)
        return "Tool type cannot be empty.";
      break;
    default:
      return !0;
  }
  return !0;
};
export {
  N as T,
  _ as a,
  K as b,
  J as c,
  Q as h,
  Y as n
};
//# sourceMappingURL=toolHandlers-CcJAHPUV.js.map
