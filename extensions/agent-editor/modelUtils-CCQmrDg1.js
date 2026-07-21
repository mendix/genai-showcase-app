import { createStudioProLogger as s } from "./logger-gMbuSAUF.js";
import { a as d, b as l } from "./documentInitUtils-Bwe4f_Cu.js";
import { i as n } from "./mxCloudGenAIUtils-U7THU9De.js";
const i = {
  MxCloudGenAI: "MxCloudGenAI"
}, p = (e, r) => async (t) => {
  const o = s(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (a) {
    o.error("Failed to save model document:", a), await e.ui.notifications.show({
      title: "Failed to save model document.",
      message: a.message
    });
  }
}, M = async (e, r) => {
  let t = [];
  if (r.provider === i.MxCloudGenAI) {
    const o = await n(e, r);
    if (typeof o == "string")
      return o;
    t = o.models || [];
  }
  return t.sort((o, a) => o.name.localeCompare(a.name));
}, v = (e) => {
  const r = e.providerFields;
  return {
    ...l(),
    provider: e.provider,
    providerFields: {
      ...d(),
      key: r.key
    }
  };
};
export {
  v as c,
  M as g,
  p as u
};
