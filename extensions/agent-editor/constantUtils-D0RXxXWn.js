const c = async (t, n) => {
  const a = await r(t, n);
  if (!a)
    return await t.ui.messageBoxes.show("error", "Could not find constant.", "This constant might have been deleted or renamed. Please update the tool constant selection.");
  await t.ui.editors.editDocument({ id: a.$ID });
}, i = (t) => {
  if (t)
    return t.defaultValue;
}, o = async (t, n) => (await t.runtime.configuration.getConstants()).find((s) => s.constantName === n), u = async (t, n) => {
  if (!n)
    return;
  const a = await o(t, n.qualifiedName), e = await r(t, n), s = i(e);
  if (!a)
    return s;
  if (!a.isPrivate)
    return a.value || void 0;
}, l = (t) => t?.type?.$Type === "DataTypes$StringType", r = async (t, n) => {
  if (n)
    try {
      const a = await t.app.model.constants.loadAll((e) => e.$ID === n.documentId);
      return a[0] && a[0].name === n.qualifiedName.split(".")[1] ? a[0] : void 0;
    } catch {
      return;
    }
};
export {
  r as a,
  o as b,
  i as c,
  u as g,
  c as h,
  l as i
};
