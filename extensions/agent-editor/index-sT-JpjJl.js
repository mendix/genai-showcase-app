import { d as f, t as h, c as P } from "./logger-CC_FxqwC.js";
import { c as M, m as u } from "./consumedMCPServiceUtils-BaykyGe_.js";
import { c as T, m as l } from "./modelUtils-BSSyMbwV.js";
const d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", E = async (n, e) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.attributes.map((o) => o.name);
  const t = await y(n, e);
  if (!t)
    return e.attributes.map((o) => o.name);
  const r = await E(n, t);
  return e.attributes.map((o) => o.name).concat(r);
}, k = async (n, e) => {
  if (n.generalization.$Type === "DomainModels$NoGeneralization")
    return n.generalization.persistable;
  const t = await y(e, n);
  if (t)
    return k(t, e);
}, i = async (n, e) => {
  const [t, r] = e.split(".");
  if (!t || !r)
    return;
  const o = await n.app.model.domainModels.getDomainModel(t);
  return o == null ? void 0 : o.getEntity(r);
}, y = (n, e) => {
  const t = e.generalization;
  return i(n, t.generalization);
}, X = async (n, e) => {
  var r;
  if (!e)
    return;
  const t = (r = await i(n, e)) == null ? void 0 : r.getContainer();
  if (!t) {
    const o = "Could not find entity: " + e;
    n.ui.messageBoxes.show("error", o, "This entity might have been deleted or renamed. Please update the context entity selection.");
    return;
  }
  n.ui.editors.editDocument(t.$ID);
}, G = [
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
], I = [
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
function z() {
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
const Q = (n, e) => async (t) => {
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(e, t);
  } catch (r) {
    n.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function U(n, e, t) {
  const r = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], o = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], a = e === f, s = [...r, ...o];
  if (s.length === 0)
    return Promise.resolve([]);
  const F = s.map((c) => c.replace(/\{\{|\}\}/g, "")), p = [...new Set(F)], b = t.variables, B = p.map((c) => b.find((D) => D.key === c) || {
    key: c,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), w = S(B, a);
  return x(n, w, t);
}
const H = (n) => n.map((e) => ({
  pattern: new RegExp("\\{\\{" + e.key + "\\}\\}", "g"),
  style: {
    color: e.borderColor,
    backgroundColor: e.backgroundColor,
    border: `1px solid ${e.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function S(n, e) {
  const t = e ? I : G;
  return n.map((r, o) => ({
    ...r,
    backgroundColor: t[o % t.length][0],
    borderColor: t[o % t.length][1]
  }));
}
async function x(n, e, t) {
  const r = await L(n, t), o = await C(t, n);
  return e.map((a) => {
    const s = o.includes(a.key);
    return {
      ...a,
      isAttributeInEntity: r === !1 || s
    };
  });
}
const L = async (n, e) => e.entity ? await i(n, e.entity) !== void 0 : !0, J = async (n, e) => e.variables.length === 0 ? [] : !e.entity || !await i(n, e.entity) ? [] : e.variables.filter((t) => !t.isAttributeInEntity).map((t) => t.key), C = async (n, e) => {
  if (!n.entity)
    return [];
  const t = await i(e, n.entity);
  return t ? (await E(e, t)).sort() : [];
}, K = async (n, e) => (await C(e, n)).filter((r) => !e.variables.find((o) => o.key === r)), W = "extension/agent-editor", m = "agenteditor.agent", A = "agenteditor.model", g = "agenteditor.consumedMCPService";
class N {
  async loaded(e) {
    const t = h(e), r = P(t);
    try {
      await t.app.model.customBlobDocuments.registerDocumentType({
        type: m,
        readableTypeName: "Agent",
        defaultContent: z()
      }), await t.ui.editors.registerEditorForCustomDocument({
        documentType: m,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: d,
        iconDark: d
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Model",
        defaultContent: T()
      }), await t.ui.editors.registerEditorForCustomDocument({
        documentType: A,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: l,
        iconDark: l
      }), await t.app.model.customBlobDocuments.registerDocumentType({
        type: g,
        readableTypeName: "Consumed MCP service",
        defaultContent: M()
      }), await t.ui.editors.registerEditorForCustomDocument({
        documentType: g,
        editorKind: "tab",
        editorEntryPoint: "consumedMCPServiceEdit",
        iconLight: u,
        iconDark: u
      });
    } catch (o) {
      throw r.error("Error during extension initialization:", o), t.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${o.message}`
      ), o;
    }
  }
}
const Y = new N();
export {
  x as a,
  H as b,
  U as c,
  k as d,
  K as e,
  J as f,
  i as g,
  W as h,
  L as i,
  X as j,
  z as k,
  Y as l,
  A as m,
  Q as u
};
//# sourceMappingURL=index-sT-JpjJl.js.map
