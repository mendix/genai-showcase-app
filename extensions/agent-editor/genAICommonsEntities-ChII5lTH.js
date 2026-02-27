import { w as t, J as g, K as n, S as f, L as p, aO as C, T as a, x as v } from "./TextInputWithIcon-Cj_bxptw.js";
const D = ({
  label: e,
  ariaLabel: s,
  value: o,
  buttonCaption: r,
  onClick: i,
  buttonCaptionSecondary: l,
  onClickSecondary: c,
  placeholder: m,
  description: d,
  hasMarginTop: h = !1,
  icon: w,
  validate: u
}) => {
  const x = h ? 8 : 0;
  return /* @__PURE__ */ t.jsxs(g, { marginTop: x, children: [
    e && /* @__PURE__ */ t.jsx(n, { children: /* @__PURE__ */ t.jsx(f, { children: e }) }),
    /* @__PURE__ */ t.jsx(n, { fullWidth: !0, children: /* @__PURE__ */ t.jsxs(p, { children: [
      /* @__PURE__ */ t.jsx(n, { fullWidth: !0, children: /* @__PURE__ */ t.jsx(
        C,
        {
          ariaLabel: s,
          value: o,
          placeholder: m,
          readOnly: !0,
          icon: w,
          validate: u,
          description: d
        }
      ) }),
      /* @__PURE__ */ t.jsx(a, { onPress: i, children: r }),
      l && /* @__PURE__ */ t.jsx(a, { onPress: c, children: l })
    ] }) })
  ] });
}, j = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", M = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.47512%205.04998L10.8801%207.78998C11.0351%207.88998%2011.0351%208.11498%2010.8801%208.21498L6.47512%2010.955C6.27012%2011.085%205.99512%2010.94%205.99512%2010.7V5.29998C5.99512%205.06498%206.26512%204.91998%206.47012%205.04998H6.47512Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%2014.5C11.5899%2014.5%2014.5%2011.5899%2014.5%208C14.5%204.41015%2011.5899%201.5%208%201.5C4.41015%201.5%201.5%204.41015%201.5%208C1.5%2011.5899%204.41015%2014.5%208%2014.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var k = Object.defineProperty, F = (e, s) => k(e, "name", { value: s, configurable: !0 });
const I = F((e) => t.jsx(v, { light: M, dark: j, ...e }), "MicroflowIcon"), y = async (e, s) => {
  const o = await T(e, s);
  if (!o)
    return await e.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await e.ui.editors.editDocument(o.$ID);
}, T = async (e, s) => {
  if (!s)
    return null;
  const [o, r] = s.split(".");
  if (!o || !r)
    return null;
  const i = await e.app.model.microflows.loadAll(
    (l) => l.moduleName === o && l.name === r
  );
  return i.length === 0 ? null : i[0];
}, H = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
};
export {
  H as C,
  D as T,
  T as g,
  y as h,
  I as n
};
//# sourceMappingURL=genAICommonsEntities-ChII5lTH.js.map
