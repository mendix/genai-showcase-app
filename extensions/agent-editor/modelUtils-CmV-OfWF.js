import { createStudioProLogger as d } from "./logger-gMbuSAUF.js";
import { M as l } from "./model-BUBkL5rT.js";
import { g as c } from "./constantUtils-D0RXxXWn.js";
import { b as m, e as p } from "./documentInitUtils-COeMuvhV.js";
import { i as f } from "./mxCloudGenAIUtils-U7THU9De.js";
const w = async (r, t) => {
  const a = d(r);
  try {
    const e = t.providerFields;
    if (!e.key)
      throw new Error("Model key is not configured.");
    if (!e.endpoint)
      throw new Error("Project endpoint is not configured.");
    const o = await c(r, e.key);
    if (!o)
      throw new Error(
        `Constant ${e.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const n = await c(r, e.endpoint);
    if (!n)
      throw new Error(
        `Constant ${e.endpoint.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const u = await r.network.httpProxy.getProxyUrl(
      `${n}/deployments?api-version=2025-05-01`
    ), i = await fetch(u, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${o}`
      },
      credentials: "omit"
    });
    if (i.status !== 200)
      throw new Error(`HTTP ${i.status}: ${i.statusText}`);
    return ((await i.json()).value ?? []).map(
      //In the case of Azure AI, the deployment.name is both what user selects on the Agent as "model version",
      //(ModelVersion.name) and what the app will use to do the call for chat completions (ModelVersion.id).
      // That is why we store the value in two fields: the id and name of the AzureModelVersion.
      (s) => ({
        id: s.name,
        name: s.name,
        modelName: s.modelName,
        modelVersion: s.modelVersion,
        modelPublisher: s.modelPublisher,
        capabilities: s.capabilities || {}
      })
    );
  } catch (e) {
    return a.error("Error calling Azure AI project Endpoint:", e), e instanceof Error ? e.message : "";
  }
}, E = (r, t) => async (a) => {
  const e = d(r);
  try {
    await r.app.model.customBlobDocuments.updateDocumentContent(t, a);
  } catch (o) {
    e.error("Failed to save model document:", o), await r.ui.notifications.show({
      title: "Failed to save model document.",
      message: o.message
    });
  }
}, A = async (r, t, a) => {
  let e = [];
  if (t.provider === l.MxCloudGenAI) {
    const o = await f(r, t);
    if (typeof o == "string")
      return o;
    e = o.models || [];
  }
  if (t.provider === l.Azure) {
    const o = await w(r, t);
    if (typeof o == "string")
      return o;
    e = a ? o.filter((n) => n.capabilities[a] === "true") : o;
  }
  return e.sort((o, n) => o.name.localeCompare(n.name));
}, C = (r) => {
  const t = r.providerFields;
  return {
    ...p(),
    provider: r.provider,
    providerFields: {
      ...m(),
      key: t.key
    }
  };
};
export {
  C as c,
  A as g,
  E as u
};
