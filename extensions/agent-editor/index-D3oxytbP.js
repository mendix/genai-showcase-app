import { d as B, t as D } from "./DesignSystemTokens-XeI_xSox.js";
import { c as f, m as u } from "./modelUtils-CZFz3mws.js";
import { c as h } from "./logger-B_-fSid6.js";
const l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", m = async (n, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((a) => a.name);
  const e = await g(n, t);
  if (!e)
    return t.attributes.map((a) => a.name);
  const r = await m(n, e);
  return t.attributes.map((a) => a.name).concat(r);
}, G = async (n, t) => {
  if (n.generalization.$Type === "DomainModels$NoGeneralization")
    return n.generalization.persistable;
  const e = await g(t, n);
  if (e)
    return G(e, t);
}, i = async (n, t) => {
  const [e, r] = t.split(".");
  if (!e || !r)
    return;
  const a = await n.app.model.domainModels.getDomainModel(e);
  return a == null ? void 0 : a.getEntity(r);
}, g = (n, t) => {
  const e = t.generalization;
  return i(n, e.generalization);
}, N = async (n, t) => {
  var r;
  if (!t)
    return;
  const e = (r = await i(n, t)) == null ? void 0 : r.getContainer();
  if (!e) {
    const a = "Could not find entity: " + t;
    return await n.ui.messageBoxes.show("error", a, "This entity might have been deleted or renamed. Please update the context entity selection.");
  }
  await n.ui.editors.editDocument(e.$ID);
}, k = [
  ["#DCEEFE", "#0123C6"],
  // Blue
  ["#E2E0FC", "#4701D4"],
  // Purple
  ["#F7E0FF", "#780194"],
  // Violet
  ["#FFE5E9", "#9E051B"],
  // Red
  ["#FFEBDC", "#7D1401"],
  // Orange
  ["#FFF2CF", "#803600"],
  // Yellow
  ["#E1FAE1", "#076407"],
  // Green
  ["#0123C6", "#DCEEFE"],
  // Dark Blue
  ["#4701D4", "#E2E0FC"],
  // Dark Purple
  ["#780194", "#F7E0FF"],
  // Dark Violet
  ["#9E051B", "#FFE5E9"],
  // Dark Red
  ["#7D1401", "#FFEBDC"],
  // Dark Orange
  ["#803600", "#FFF2CF"],
  // Dark Yellow
  ["#076407", "#E1FAE1"]
  // Dark Green
], z = [
  ["#101374", "#8AC4FF"],
  // Dark Blue
  ["#2A0B66", "#9782FF"],
  // Dark Purple
  ["#4B1352", "#E599FF"],
  // Dark Violet
  ["#5C1028", "#FF9B99"],
  // Dark Red
  ["#5C2315", "#FFD5BB"],
  // Dark Orange
  ["#5C2E14", "#FFEEBA"],
  // Dark Yellow
  ["#124112", "#C0FAC0"],
  // Dark Green
  ["#8AC4FF", "#101374"],
  // Blue
  ["#9782FF", "#2A0B66"],
  // Purple
  ["#E599FF", "#4B1352"],
  // Violet
  ["#FF9B99", "#5C1028"],
  // Red
  ["#FFD5BB", "#5C2315"],
  // Orange
  ["#FFEEBA", "#5C2E14"],
  // Yellow
  ["#C0FAC0", "#124112"]
  // Green
];
function M() {
  return {
    description: "",
    entity: "",
    systemPrompt: "",
    userPrompt: "",
    usageType: "Task",
    variables: [],
    tools: []
  };
}
const S = (n, t) => async (e) => {
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (r) {
    await n.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function X(n, t, e) {
  const r = e.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], a = e.userPrompt ? e.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], o = t === B, s = [...r, ...a];
  if (s.length === 0)
    return Promise.resolve([]);
  const F = s.map((c) => c.replace(/\{\{|\}\}/g, "")), y = [...new Set(F)], p = e.variables, C = y.map((c) => p.find((w) => w.key === c) || {
    key: c,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), b = P(C, o);
  return I(n, b, e);
}
const v = (n) => n.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function P(n, t) {
  const e = t ? z : k;
  return n.map((r, a) => ({
    ...r,
    backgroundColor: e[a % e.length][0],
    borderColor: e[a % e.length][1]
  }));
}
async function I(n, t, e) {
  const r = await T(n, e), a = await E(e, n);
  return t.map((o) => {
    const s = a.includes(o.key);
    return {
      ...o,
      isAttributeInEntity: r === !1 || s
    };
  });
}
const T = async (n, t) => t.entity ? await i(n, t.entity) !== void 0 : !0, Q = async (n, t) => t.variables.length === 0 ? [] : !t.entity || !await i(n, t.entity) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), E = async (n, t) => {
  if (!n.entity)
    return [];
  const e = await i(t, n.entity);
  return e ? (await m(t, e)).sort() : [];
}, U = async (n, t) => (await E(t, n)).filter((r) => !t.variables.find((a) => a.key === r)), H = "extension/agent-editor", A = "agenteditor.agent", d = "agenteditor.model";
class x {
  async loaded(t) {
    const e = D(t), r = h(e);
    try {
      await e.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Agent",
        defaultContent: M()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: A,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: l,
        iconDark: l
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: d,
        readableTypeName: "Model",
        defaultContent: f()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: d,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: u,
        iconDark: u
      });
    } catch (a) {
      throw r.error("Error during extension initialization:", a), await e.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${a.message}`
      ), a;
    }
  }
}
const J = new x();
export {
  I as a,
  v as b,
  X as c,
  G as d,
  U as e,
  Q as f,
  i as g,
  H as h,
  T as i,
  N as j,
  M as k,
  J as l,
  d as m,
  S as u
};
//# sourceMappingURL=index-D3oxytbP.js.map
