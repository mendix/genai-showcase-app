import { w as e } from "./Icon-DL4Zg1xv.js";
import { S as r, I as p } from "./ComboBox-Bwx3kM_a.js";
import { T as l } from "./index-CQcFpK0H.js";
const s = [
  { key: l.Microflow, caption: "Microflow tool" },
  { key: l.MCP, caption: "MCP tool" }
], T = ({ selectedKey: t, validationInfo: i, onToolTypeChange: a }) => /* @__PURE__ */ e.jsx(
  r,
  {
    "aria-label": "Tool type",
    label: "Tool type",
    selectedKey: t,
    validate: () => i.isValidType,
    onSelectionChange: a,
    children: s.map((o) => /* @__PURE__ */ e.jsx(p, { id: o.key, children: o.caption }, o.key))
  }
);
export {
  T
};
//# sourceMappingURL=toolTypeComboBox-CPIhfASM.js.map
