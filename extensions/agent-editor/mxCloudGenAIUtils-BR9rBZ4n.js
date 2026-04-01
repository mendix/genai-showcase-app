import { c as i } from "./userPreferences-BV8i5uIO.js";
import { g as d, d as w } from "./modelUtils-B4UuvvXG.js";
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
}, f = async (t, r) => {
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
}, p = (t, r) => ({
  ...t,
  name: (r == null ? void 0 : r.model) || t.name,
  displayName: r && (r.modelName || r.model) || t.displayName
}), x = (t, r) => {
  const a = w(), e = p(a, r);
  return {
    ...t,
    providerFields: {
      ...t.providerFields,
      modelDisplayName: e.displayName,
      modelName: e.name
    }
  };
}, v = (t, r) => async () => {
  const a = await g(t, r);
  return typeof a == "string" ? a : p(r, a);
}, T = (t, r) => async () => {
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
    const l = await o.json(), u = [];
    return l.content.forEach((m) => u.push({ name: m.name })), u;
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
  g as i,
  p as u
};
//# sourceMappingURL=mxCloudGenAIUtils-BR9rBZ4n.js.map
