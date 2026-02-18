import { t as D, c as h } from "./logger-DMIubLZm.js";
import { c as B, m as u } from "./consumedMCPServiceUtils-Dt12ytxZ.js";
import { c as P, m as l } from "./modelUtils-DXy7J0iH.js";
const d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", y = async (n, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((o) => o.name);
  const e = await p(n, t);
  if (!e)
    return t.attributes.map((o) => o.name);
  const r = await y(n, e);
  return t.attributes.map((o) => o.name).concat(r);
}, F = async (n, t) => {
  if (n.generalization.$Type === "DomainModels$NoGeneralization")
    return n.generalization.persistable;
  const e = await p(t, n);
  if (e)
    return F(e, t);
}, i = async (n, t) => {
  const [e, r] = t.split(".");
  if (!e || !r)
    return;
  const o = await n.app.model.domainModels.getDomainModel(e);
  return o == null ? void 0 : o.getEntity(r);
}, p = (n, t) => {
  const e = t.generalization;
  return i(n, e.generalization);
}, v = async (n, t) => {
  var r;
  if (!t)
    return;
  const e = (r = await i(n, t)) == null ? void 0 : r.getContainer();
  if (!e) {
    const o = "Could not find entity: " + t;
    n.ui.messageBoxes.show("error", o, "This entity might have been deleted or renamed. Please update the context entity selection.");
    return;
  }
  n.ui.editors.editDocument(e.$ID);
};
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
const V = (n, t) => async (e) => {
  try {
    await n.app.model.customBlobDocuments.updateDocumentContent(t, e);
  } catch (r) {
    n.ui.notifications.show({
      title: "Failed to save document",
      message: r.message
    });
  }
};
async function L(n, t) {
  const e = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], r = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], o = [...e, ...r];
  if (o.length === 0)
    return Promise.resolve([]);
  const a = o.map((s) => s.replace(/\{\{|\}\}/g, "")), c = [...new Set(a)], E = t.variables, C = c.map((s) => E.find((f) => f.key === s) || {
    key: s,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), w = k(C);
  return z(n, w, t);
}
const O = (n) => n.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function k(n) {
  const t = [
    ["#DCEEFE", "#0123C6"],
    // Blue
    ["#E2E0FC", "#4701D4"],
    // Purple
    ["#F7E0FF", "#780194"],
    // Violet
    ["#FFE5E9", "#9E051B"],
    // Red
    ["#FFF2CF", "#803600"],
    // Yellow
    ["#E1FAE1", "#076407"]
    // Green
  ];
  return n.map((e, r) => ({
    ...e,
    backgroundColor: t[r % t.length][0],
    borderColor: t[r % t.length][1]
  }));
}
async function z(n, t, e) {
  const r = await G(n, e), o = await b(e, n);
  return t.map((a) => {
    const c = o.includes(a.key);
    return {
      ...a,
      isAttributeInEntity: r === !1 || c
    };
  });
}
const G = async (n, t) => t.entity ? await i(n, t.entity) !== void 0 : !0, X = async (n, t) => t.variables.length === 0 ? [] : !t.entity || !await i(n, t.entity) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), b = async (n, t) => {
  if (!n.entity)
    return [];
  const e = await i(t, n.entity);
  return e ? (await y(t, e)).sort() : [];
}, R = async (n, t) => (await b(t, n)).filter((r) => !t.variables.find((o) => o.key === r)), Q = "extension/agent-editor", m = "agenteditor.agent", A = "agenteditor.model", g = "agenteditor.consumedMCPService";
class T {
  async loaded(t) {
    const e = D(t), r = h(e);
    try {
      await e.app.model.customBlobDocuments.registerDocumentType({
        type: m,
        readableTypeName: "Agent",
        defaultContent: M()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: m,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: d,
        iconDark: d
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Model",
        defaultContent: P()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: A,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: l,
        iconDark: l
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: g,
        readableTypeName: "Consumed MCP service",
        defaultContent: B()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: g,
        editorKind: "tab",
        editorEntryPoint: "consumedMCPServiceEdit",
        iconLight: u,
        iconDark: u
      });
    } catch (o) {
      throw r.error("Error during extension initialization:", o), e.ui.messageBoxes.show(
        "error",
        `Error during extension initialization: ${o.message}`
      ), o;
    }
  }
}
const U = new T();
export {
  z as a,
  O as b,
  L as c,
  F as d,
  R as e,
  X as f,
  i as g,
  Q as h,
  G as i,
  v as j,
  M as k,
  U as l,
  A as m,
  V as u
};
//# sourceMappingURL=index-vmCQrdsQ.js.map
