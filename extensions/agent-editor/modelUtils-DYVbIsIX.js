import { createStudioProLogger as c } from "./logger-gMbuSAUF.js";
import { M as l } from "./model-BfOPpq4a.js";
import { g as d } from "./constantUtils-D0RXxXWn.js";
import { b as u, e as p } from "./documentInitUtils-DoIciLyT.js";
import { i as f } from "./mxCloudGenAIUtils-U7THU9De.js";
const w = async (o, r) => {
  const t = c(o);
  try {
    const e = r.providerFields;
    if (!e.key)
      throw new Error("Model key is not configured.");
    if (!e.endpoint)
      throw new Error("Project endpoint is not configured.");
    const a = await d(o, e.key);
    if (!a)
      throw new Error(
        `Constant ${e.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const i = await d(o, e.endpoint);
    if (!i)
      throw new Error(
        `Constant ${e.endpoint.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const m = await o.network.httpProxy.getProxyUrl(
      `${i}/deployments?api-version=2025-05-01`
    ), s = await fetch(m, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${a}`
      },
      credentials: "omit"
    });
    if (s.status !== 200)
      throw new Error(`HTTP ${s.status}: ${s.statusText}`);
    return ((await s.json()).value ?? []).map(
      //In the case of Azure AI, the deployment.name is both what user selects on the Agent as "model version",
      //(ModelVersion.name) and what the app will use to do the call for chat completions (ModelVersion.id).
      // That is why we store the value in two fields: the id and name of the AzureModelVersion.
      (n) => ({
        id: n.name,
        name: n.name,
        modelName: n.modelName,
        modelVersion: n.modelVersion,
        modelPublisher: n.modelPublisher
      })
    );
  } catch (e) {
    return t.error("Error calling Azure AI project Endpoint:", e), e instanceof Error ? e.message : "";
  }
}, A = (o, r) => async (t) => {
  const e = c(o);
  try {
    await o.app.model.customBlobDocuments.updateDocumentContent(r, t);
  } catch (a) {
    e.error("Failed to save model document:", a), await o.ui.notifications.show({
      title: "Failed to save model document.",
      message: a.message
    });
  }
}, C = async (o, r) => {
  let t = [];
  if (r.provider === l.MxCloudGenAI) {
    const e = await f(o, r);
    if (typeof e == "string")
      return e;
    t = e.models || [];
  }
  if (r.provider === l.Azure) {
    const e = await w(o, r);
    if (typeof e == "string")
      return e;
    t = e;
  }
  return t.sort((e, a) => e.name.localeCompare(a.name));
}, F = (o) => {
  const r = o.providerFields;
  return {
    ...p(),
    provider: o.provider,
    providerFields: {
      ...u(),
      key: r.key
    }
  };
};
export {
  F as c,
  C as g,
  A as u
};
