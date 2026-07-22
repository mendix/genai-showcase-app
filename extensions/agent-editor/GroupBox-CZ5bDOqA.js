import { j as o } from "./jsx-runtime-CWOFuNcx.js";
import { T as n, S as r } from "./PageContainers-CRZszOq7.js";
const d = r.div`
    display: flex;
    flex-direction: column;
    gap: ${n.size4};
    min-height: 0;
`;
var l = Object.defineProperty, s = (e, i) => l(e, "name", { value: i, configurable: !0 });
const a = s(({ label: e, children: i, ...t }) => o.jsxs(c, { ...t, children: [o.jsx(p, { children: e }), o.jsx(d, { children: i })] }), "GroupBox"), c = r.fieldset`
    border: 1px solid ${({ theme: e }) => e.colorsBorderSecondary};
    display: flex;
    flex-direction: column;
    gap: ${n.size4};
    padding: 7px;
    flex: 1;
    min-height: 0;
    min-width: 0;
`, p = r.legend`
    padding: 0 6px 0 3px;
    width: fit-content;
`, h = r(a)`
    min-height: unset;
    flex-grow: 0;
    border-color: ${({ theme: e }) => e.colorsBorderPrimary};
`;
export {
  h as G
};
