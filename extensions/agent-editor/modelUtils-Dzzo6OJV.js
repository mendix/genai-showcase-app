import { createStudioProLogger as a } from "./logger-Bof2Evv1.js";
import { p as d, s as l } from "./index-Cosn4mN0.js";
import { i as n } from "./mxCloudGenAIUtils-BhrK-gu0.js";
const i = {
  MxCloudGenAI: "MxCloudGenAI"
}, p = (e, r) => async (t) => {
  const o = a(e);
  try {
    await e.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (s) {
    o.error("Failed to save model document:", s), await e.ui.notifications.show({
      title: "Failed to save model document.",
      message: s.message
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
  return t.sort((o, s) => o.name.localeCompare(s.name));
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
