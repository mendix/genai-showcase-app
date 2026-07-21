import { createStudioProLogger as i } from "./logger-Bof2Evv1.js";
import { r as d, q as m } from "./index-ClN9e0Gp.js";
const y = (r, t) => {
  const a = i(r);
  try {
    const e = atob(t);
    return JSON.parse(e);
  } catch (e) {
    throw a.error("Error decoding and parsing key", e), new Error("The key could not be parsed, make sure it is valid.");
  }
}, w = async (r, t) => {
  const a = i(r);
  try {
    const e = t.providerFields;
    if (!e.key)
      throw new Error("Model key is not configured.");
    const n = await d(r, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const s = y(r, n), c = await r.network.httpProxy.getProxyUrl(`${s.resourceBaseUrl}`), o = await fetch(c, {
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
}, f = async (r, t) => {
  const a = i(r);
  try {
    const e = t.providerFields, n = await d(r, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const s = y(r, n), c = await r.network.httpProxy.getProxyUrl(`${s.embeddings.resourceBaseUrl}`), o = await fetch(c, {
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
}, g = (r, t) => ({
  ...r,
  name: (t == null ? void 0 : t.model) || r.name,
  displayName: t && (t.modelName || t.model) || r.displayName
}), x = (r, t) => {
  const a = m(), e = g(a, t);
  return {
    ...r,
    providerFields: {
      ...r.providerFields,
      modelDisplayName: e.displayName,
      modelName: e.name
    }
  };
}, v = async (r, t) => {
  const a = await w(r, t);
  return typeof a == "string" ? a : !0;
}, T = (r, t) => async () => {
  const a = i(r);
  try {
    const e = t.providerFields, n = await d(r, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const s = y(r, n), c = await r.network.httpProxy.getProxyUrl(
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
    const l = await o.json(), u = [];
    return l.content.forEach((p) => u.push({ name: p.name })), u;
  } catch (e) {
    return a.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
};
export {
  f as a,
  x as b,
  y as d,
  v as e,
  T as g,
  w as i,
  g as u
};
