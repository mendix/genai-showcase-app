import { c as i } from "./DesignSystemTokens-BZrmEyPo.js";
import { g as l, d as w } from "./modelUtils-BmVykd1T.js";
const g = (r, t) => {
  const o = i(r);
  try {
    const e = atob(t);
    return JSON.parse(e);
  } catch (e) {
    throw o.error("Error decoding and parsing key", e), new Error("The key could not be parsed, make sure it is valid.");
  }
}, u = (r, t) => {
  const o = i(r);
  try {
    const e = atob(t);
    return JSON.parse(e);
  } catch (e) {
    throw o.error("Error decoding and parsing key", e), new Error("The key could not be parsed, make sure it is valid.");
  }
}, k = async (r, t) => {
  const o = i(r);
  try {
    const e = t.providerFields;
    if (!e.key)
      throw new Error("Model key is not configured.");
    const n = await l(r, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key.qualifiedName} does not have an accessible runtime value or default value.`
      );
    const s = g(r, n), c = await r.network.httpProxy.getProxyUrl(`${s.resourceBaseUrl}`), a = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": s.accessToken
      },
      credentials: "omit"
    });
    if (a.status !== 200)
      throw new Error(`HTTP ${a.status}: ${a.statusText}`);
    return await a.json();
  } catch (e) {
    return o.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
}, x = async (r, t) => {
  const o = i(r);
  try {
    const e = t.providerFields, n = await l(r, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const s = u(r, n), c = await r.network.httpProxy.getProxyUrl(`${s.embeddings.resourceBaseUrl}`), a = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": s.embeddings.accessToken
      },
      credentials: "omit"
    });
    if (a.status !== 200)
      throw new Error(`HTTP ${a.status}: ${a.statusText}`);
    return await a.json();
  } catch (e) {
    return o.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
}, p = (r, t) => ({
  ...r,
  name: (t == null ? void 0 : t.model) || r.name,
  displayName: t && (t.modelName || t.model) || r.displayName
}), v = (r, t) => {
  const o = w(), e = p(o, t);
  return {
    ...r,
    providerFields: {
      ...r.providerFields,
      modelDisplayName: e.displayName,
      modelName: e.name
    }
  };
}, E = (r, t) => async () => {
  const o = await k(r, t);
  return typeof o == "string" ? o : p(t, o);
}, T = (r, t) => async () => {
  const o = i(r);
  try {
    const e = t.providerFields, n = await l(r, e.key);
    if (!n)
      throw new Error(
        `Constant ${e.key} does not have an accessible runtime value or default value.`
      );
    const s = u(r, n), c = await r.network.httpProxy.getProxyUrl(
      `${s.resourceBaseUrl}/knowledge-bases`
    ), a = await fetch(c, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "x-api-key": s.accessToken
      },
      credentials: "omit"
    });
    if (a.status !== 200)
      throw new Error(`HTTP ${a.status}: ${a.statusText}`);
    const d = await a.json(), y = [];
    return d.content.forEach((m) => y.push({ name: m.name })), y;
  } catch (e) {
    return o.error("Error invoking MxCloud GenAI resource API:", e), e instanceof Error ? e.message : "";
  }
};
export {
  x as a,
  v as b,
  u as c,
  g as d,
  E as e,
  T as g,
  k as i,
  p as u
};
//# sourceMappingURL=mxCloudGenAIUtils-dXfIggxC.js.map
