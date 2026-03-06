import { w as t, J as g, K as n, S as f, L as p, T as a, x as C } from "./Icon-CvuNKlFz.js";
import { T as v } from "./TextInputWithIcon-Bss9tznd.js";
const I = ({
  label: e,
  ariaLabel: o,
  value: s,
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
        v,
        {
          ariaLabel: o,
          value: s,
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
var k = Object.defineProperty, F = (e, o) => k(e, "name", { value: o, configurable: !0 });
const y = F((e) => t.jsx(C, { light: M, dark: j, ...e }), "MicroflowIcon"), H = async (e, o) => {
  const s = await T(e, o);
  if (!s)
    return await e.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await e.ui.editors.editDocument(s.$ID);
}, T = async (e, o) => {
  if (!o)
    return null;
  const [s, r] = o.split(".");
  if (!s || !r)
    return null;
  const i = await e.app.model.microflows.loadAll(
    (l) => l.moduleName === s && l.name === r
  );
  return i.length === 0 ? null : i[0];
}, L = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
};
export {
  L as C,
  I as T,
  T as g,
  H as h,
  y as n
};
//# sourceMappingURL=genAICommonsEntities-BRtbnIm-.js.map
