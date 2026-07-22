import { createStudioProLogger as c } from "./logger-Bof2Evv1.js";
import { s as l, p as m, t as p } from "./index-CFeR2lk4.js";
import { i as f } from "./mxCloudGenAIUtils-CN5i3ijq.js";
const d = {
  MxCloudGenAI: "MxCloudGenAI",
  Azure: "Azure"
}, w = async (o, r) => {
  const t = c(o);
  try {
    const e = r.providerFields;
    if (!e.key)
      throw new Error("Model key is not configured.");
    if (!e.endpoint)
      throw new Error("Project endpoint is not configured.");
    const n = await l(o, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const i = await l(o, e.endpoint);
    if (!i)
      throw new Error(
        `Constant ${e.endpoint.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const u = await o.network.httpProxy.getProxyUrl(
      `${i}/deployments?api-version=2025-05-01`
    ), s = await fetch(u, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${n}`
      },
      credentials: "omit"
    });
    if (s.status !== 200)
      throw new Error(`HTTP ${s.status}: ${s.statusText}`);
    return ((await s.json()).value ?? []).map(
      (a) => ({
        id: a.name,
        name: a.name,
        modelName: a.modelName,
        modelVersion: a.modelVersion,
        modelPublisher: a.modelPublisher
      })
    );
  } catch (e) {
    return t.error("Error calling Azure AI project Endpoint:", e), e instanceof Error ? e.message : "";
  }
}, A = (o, r) => async (t) => {
  const e = c(o);
  try {
    await o.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (n) {
    e.error("Failed to save model document:", n), await o.ui.notifications.show({
      title: "Failed to save model document.",
      message: n.message
    });
  }
}, C = async (o, r) => {
  let t = [];
  if (r.provider === d.MxCloudGenAI) {
    const e = await f(o, r);
    if (typeof e == "string")
      return e;
    t = e.models || [];
  }
  if (r.provider === d.Azure) {
    const e = await w(o, r);
    if (typeof e == "string")
      return e;
    t = e;
  }
  return t.sort((e, n) => e.name.localeCompare(n.name));
}, k = (o) => {
  const r = o.providerFields;
  return {
    ...p(),
    provider: o.provider,
    providerFields: {
      ...m(),
      key: r.key
    }
  };
};
export {
  k as c,
  C as g,
  A as u
};
