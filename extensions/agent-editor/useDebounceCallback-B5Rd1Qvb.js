import { r as u } from "./PageContainers-BvK5usmz.js";
var a = Object.defineProperty, l = (r, t) => a(r, "name", { value: t, configurable: !0 });
function o(r, t = 500) {
  const e = u.useRef(null), c = u.useCallback((...n) => {
    e.current && clearTimeout(e.current), e.current = setTimeout(() => {
      r(...n);
    }, t);
  }, [r, t]);
  return u.useEffect(() => () => {
    e.current && (clearTimeout(e.current), e.current = null);
  }, []), c;
}
l(o, "useDebounceCallback");
export {
  o as m
};
