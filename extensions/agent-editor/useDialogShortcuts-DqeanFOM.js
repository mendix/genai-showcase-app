import { r as s } from "./Icon-Cg7sFTxA.js";
function c(o, t) {
  s.useEffect(() => {
    const e = new AbortController();
    return document.addEventListener(
      "keydown",
      (r) => {
        r.key === "Escape" ? o() : r.key === "Enter" && (r.ctrlKey || r.metaKey) && t();
      },
      { signal: e.signal }
    ), () => e.abort();
  }, [o, t]);
}
export {
  c as u
};
//# sourceMappingURL=useDialogShortcuts-DqeanFOM.js.map
