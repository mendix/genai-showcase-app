const y = (r, e) => {
  if (r === e) return !0;
  if (r == null || e === null || e === void 0 || typeof r != "object" || typeof e != "object" || Array.isArray(r) !== Array.isArray(e)) return !1;
  if (Array.isArray(r) && Array.isArray(e))
    return r.length !== e.length ? !1 : r.every((t, l) => y(t, e[l]));
  const s = r, n = e, i = Object.keys(s), f = Object.keys(n);
  return i.length !== f.length ? !1 : i.every((t) => y(s[t], n[t]));
};
export {
  y as i
};
