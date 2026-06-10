const s = async (t, o) => {
  const e = await t.app.model.customBlobDocuments.getDocumentById(o);
  if (!("document" in e) || !e.document)
    throw new Error("Failed to retrieve agent document.");
  return e.document.contents;
}, n = async (t, o) => {
  try {
    const e = await t.app.model.customBlobDocuments.getDocumentById(o.documentId);
    return e !== void 0 && "document" in e && e.document.name === o.qualifiedName.split(".")[1] ? e.document : void 0;
  } catch {
    return;
  }
}, r = async (t, o) => {
  if (!await n(t, o))
    return await t.ui.messageBoxes.show("error", "Could not find document.", "This document might have been deleted or renamed. Please update the selection.");
  await t.ui.editors.editDocument(o.documentId);
};
export {
  s as a,
  n as g,
  r as h
};
