import { createStudioProLogger as i } from "./logger-gMbuSAUF.js";
import { g as d } from "./constantUtils-D0RXxXWn.js";
const y = (r, t) => {
  const s = i(r);
  try {
    const e = atob(t);
    return JSON.parse(e);
  } catch (e) {
    throw s.error("Error decoding and parsing key", e), new Error("The key could not be parsed, make sure it is valid.");
  }
}, k = async (r, t) => {
  const s = i(r);
  try {
    const e = t.providerFields;
    if (!e.key)
      throw new Error("Model key is not configured.");
    const a = await d(r, e.key);
    if (!a)
      throw new Error(
        `Constant ${e.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const n = y(r, a), c = await r.network.httpProxy.getProxyUrl(`${n.resourceBaseUrl}`), o = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": n.accessToken
      },
      credentials: "omit"
    });
    if (o.status !== 200)
      throw new Error(`HTTP ${o.status}: ${o.statusText}`);
    return await o.json();
  } catch (e) {
    return s.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
}, g = async (r, t) => {
  const s = i(r);
  try {
    const e = t.providerFields, a = await d(r, e.key);
    if (!a)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const n = y(r, a), c = await r.network.httpProxy.getProxyUrl(`${n.embeddings.resourceBaseUrl}`), o = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": n.embeddings.accessToken
      },
      credentials: "omit"
    });
    if (o.status !== 200)
      throw new Error(`HTTP ${o.status}: ${o.statusText}`);
    return await o.json();
  } catch (e) {
    return s.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
}, h = (r, t) => {
  const s = r.providerFields;
  return {
    ...r,
    providerFields: {
      ...s,
      modelDisplayName: t?.modelName || t?.model || s.modelDisplayName,
      modelName: t?.model || s.modelName
    }
  };
}, x = (r, t) => async () => {
  const s = i(r);
  try {
    const e = t.providerFields, a = await d(r, e.key);
    if (!a)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const n = y(r, a), c = await r.network.httpProxy.getProxyUrl(
      `${n.resourceBaseUrl}/knowledge-bases`
    ), o = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": n.accessToken
      },
      credentials: "omit"
    });
    if (o.status !== 200)
      throw new Error(`HTTP ${o.status}: ${o.statusText}`);
    const l = await o.json(), u = [];
    return l.content.forEach((p) => u.push({ name: p.name })), u;
  } catch (e) {
    return s.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
};
export {
  g as a,
  y as d,
  x as g,
  k as i,
  h as u
};
