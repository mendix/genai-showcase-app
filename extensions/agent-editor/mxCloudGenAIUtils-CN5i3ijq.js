import { createStudioProLogger as i } from "./logger-Bof2Evv1.js";
import { s as d } from "./index-CFeR2lk4.js";
const y = (t, r) => {
  const a = i(t);
  try {
    const e = atob(r);
    return JSON.parse(e);
  } catch (e) {
    throw a.error("Error decoding and parsing key", e), new Error("The key could not be parsed, make sure it is valid.");
  }
}, g = async (t, r) => {
  const a = i(t);
  try {
    const e = r.providerFields;
    if (!e.key)
      throw new Error("Model key is not configured.");
    const n = await d(t, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const s = y(t, n), c = await t.network.httpProxy.getProxyUrl(`${s.resourceBaseUrl}`), o = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": s.accessToken
      },
      credentials: "omit"
    });
    if (o.status !== 200)
      throw new Error(`HTTP ${o.status}: ${o.statusText}`);
    return await o.json();
  } catch (e) {
    return a.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
}, p = async (t, r) => {
  const a = i(t);
  try {
    const e = r.providerFields, n = await d(t, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const s = y(t, n), c = await t.network.httpProxy.getProxyUrl(`${s.embeddings.resourceBaseUrl}`), o = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": s.embeddings.accessToken
      },
      credentials: "omit"
    });
    if (o.status !== 200)
      throw new Error(`HTTP ${o.status}: ${o.statusText}`);
    return await o.json();
  } catch (e) {
    return a.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
}, h = (t, r) => {
  const a = t.providerFields;
  return {
    ...t,
    providerFields: {
      ...a,
      modelDisplayName: (r == null ? void 0 : r.modelName) || (r == null ? void 0 : r.model) || a.modelDisplayName,
      modelName: (r == null ? void 0 : r.model) || a.modelName
    }
  };
}, x = (t, r) => async () => {
  const a = i(t);
  try {
    const e = r.providerFields, n = await d(t, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const s = y(t, n), c = await t.network.httpProxy.getProxyUrl(
      `${s.resourceBaseUrl}/knowledge-bases`
    ), o = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": s.accessToken
      },
      credentials: "omit"
    });
    if (o.status !== 200)
      throw new Error(`HTTP ${o.status}: ${o.statusText}`);
    const l = await o.json(), m = [];
    return l.content.forEach((w) => m.push({ name: w.name })), m;
  } catch (e) {
    return a.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
};
export {
  p as a,
  y as d,
  x as g,
  g as i,
  h as u
};
