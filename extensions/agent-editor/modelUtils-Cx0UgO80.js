import { createStudioProLogger as s } from "./logger-gMbuSAUF.js";
import { P as d } from "./model-DI1yynF9.js";
import { a as i, b as l } from "./documentInitUtils-Bwe4f_Cu.js";
import { i as c } from "./mxCloudGenAIUtils-qkfXP9pi.js";
const v = (e, r) => async (t) => {
  const o = s(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (a) {
    o.error("Failed to save model document:", a), await e.ui.notifications.show({
      title: "Failed to save model document.",
      message: a.message
    });
  }
}, g = async (e, r) => {
  let t = [];
  if (r.provider === d.MxCloudGenAI) {
    const o = await c(e, r);
    if (typeof o == "string")
      return o;
    t = o.models || [];
  }
  return t.sort((o, a) => o.name.localeCompare(a.name));
}, M = (e) => {
  const r = e.providerFields;
  return {
    ...l(),
    provider: e.provider,
    providerFields: {
      ...i(),
      key: r.key
    }
  };
};
export {
  M as c,
  g,
  v as u
};
