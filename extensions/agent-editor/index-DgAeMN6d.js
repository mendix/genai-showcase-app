import { m as p } from "./index-Uw9PZDBi.js";
import { c as y, m as s } from "./modelUtils-BKeUOTig.js";
const l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==";
function E() {
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
function D(t) {
  const e = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], n = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], o = [...e, ...n];
  if (o.length === 0)
    return [];
  const r = o.map(
    (i) => i.replace(/\{\{|\}\}/g, "")
  ), a = [...new Set(r)], u = t.variables, g = a.map((i) => u.find((m) => m.key === i) || {
    key: i,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  });
  return b(g);
}
const f = (t) => t.map((e) => ({
  pattern: new RegExp("\\{\\{" + e.key + "\\}\\}", "g"),
  style: {
    color: e.borderColor,
    backgroundColor: e.backgroundColor,
    border: `1px solid ${e.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function b(t) {
  const e = [
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
  return t.map((n, o) => ({
    ...n,
    backgroundColor: e[o % e.length][0],
    borderColor: e[o % e.length][1]
  }));
}
const G = async (t, e) => (console.log(e.entity), e.entity ? await d(t, e.entity) != null : !0), d = async (t, e) => {
  const [n, o] = e.split("."), r = await t.app.model.domainModels.getDomainModel(n), a = r ? r.getEntity(o) : null;
  return console.log(a, a != null), a;
}, C = async (t, e) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.generalization.persistable;
  const n = t.generalization, o = await d(e, n.generalization);
  if (!o) {
    console.error(`Generalization entity ${n.generalization} not found.`);
    return;
  }
  return await C(o, e);
}, c = "agenteditor.agent", A = "agenteditor.model";
class w {
  async loaded(e) {
    const n = p(e);
    try {
      await n.app.model.customBlobDocuments.registerDocumentType({
        type: c,
        readableTypeName: "Agent",
        defaultContent: E()
      }), await n.ui.editors.registerEditorForCustomDocument({
        documentType: c,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: l,
        iconDark: l
      }), await n.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Model",
        defaultContent: y()
      }), await n.ui.editors.registerEditorForCustomDocument({
        documentType: A,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: s,
        iconDark: s
      });
    } catch (o) {
      throw console.log("Error during extension initialization:", o, JSON.stringify(o)), n.ui.messageBoxes.show("error", `Error during extension initialization: ${o.message}`), o;
    }
  }
}
const h = new w();
export {
  E as a,
  f as b,
  D as c,
  C as d,
  h as e,
  d as g,
  G as i,
  A as m
};
//# sourceMappingURL=index-DgAeMN6d.js.map
