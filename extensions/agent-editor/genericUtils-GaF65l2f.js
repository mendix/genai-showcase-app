const n = async (o) => {
  await navigator.clipboard.writeText(o);
};
function r(o) {
  window.open(o, "_blank", "noopener,noreferrer");
}
export {
  n as c,
  r as o
};
