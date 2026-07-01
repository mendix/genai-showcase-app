const e = "compatibilityView", o = "Compatibility Overview", s = {
  Compatible: "compatible",
  Incompatible: "incompatible",
  Missing: "missing",
  Unknown: "unknown"
}, t = {
  compatible: (i, n) => `Module "${i}" v${n} is compatible.`,
  incompatible: (i, n) => `Module "${i}" v${n} is outside the compatible range.`,
  missing: (i) => `Module "${i}" is missing.`,
  unknown: (i) => `Module "${i}" is installed but version cannot be determined.`
};
export {
  o as C,
  s as M,
  e as a,
  t as b
};
