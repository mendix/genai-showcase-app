import { m as b } from "./index-Uw9PZDBi.js";
import { c as p, m as u } from "./modelUtils-BKeUOTig.js";
const c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==";
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
function F(e) {
  const t = e.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], o = e.userPrompt ? e.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], n = [...t, ...o];
  if (n.length === 0)
    return [];
  const i = n.map(
    (a) => a.replace(/\{\{|\}\}/g, "")
  ), r = [...new Set(i)], l = e.variables, m = r.map((a) => l.find((y) => y.key === a) || {
    key: a,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  });
  return C(m);
}
const P = (e) => e.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function C(e) {
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
  return e.map((o, n) => ({
    ...o,
    backgroundColor: t[n % t.length][0],
    borderColor: t[n % t.length][1]
  }));
}
const h = async (e, t) => (console.log(t.entity), t.entity ? await s(e, t.entity) != null : !0), s = async (e, t) => {
  const [o, n] = t.split(".");
  if (!o || !n)
    return null;
  const i = await e.app.model.domainModels.getDomainModel(o);
  return i ? i.getEntity(n) : null;
}, f = async (e, t) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.generalization.persistable;
  const o = e.generalization, n = await s(t, o.generalization);
  if (!n) {
    console.error(`Generalization entity ${o.generalization} not found.`);
    return;
  }
  return await f(n, t);
}, G = async (e, t) => t.variables.length === 0 ? [] : t.variables.filter((n) => n.isAttributeInEntity === !1).map((n) => n.key), M = async (e, t) => {
  if (!t.entity)
    return [];
  const o = await s(e, t.entity);
  return o ? (await g(e, o)).filter((r) => !t.variables.find((l) => l.key === r)) : [];
}, g = async (e, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((r) => r.name);
  const o = t.generalization, n = await s(e, o.generalization);
  if (!n)
    return console.error(`Generalization entity ${o.generalization} not found.`), t.attributes.map((r) => r.name);
  const i = await g(e, n);
  return t.attributes.map((r) => r.name).concat(i);
}, A = "agenteditor.agent", d = "agenteditor.model";
class w {
  async loaded(t) {
    const o = b(t);
    try {
      await o.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Agent",
        defaultContent: E()
      }), await o.ui.editors.registerEditorForCustomDocument({
        documentType: A,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: c,
        iconDark: c
      }), await o.app.model.customBlobDocuments.registerDocumentType({
        type: d,
        readableTypeName: "Model",
        defaultContent: p()
      }), await o.ui.editors.registerEditorForCustomDocument({
        documentType: d,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: u,
        iconDark: u
      });
    } catch (n) {
      throw console.log("Error during extension initialization:", n, JSON.stringify(n)), o.ui.messageBoxes.show("error", `Error during extension initialization: ${n.message}`), n;
    }
  }
}
const k = new w();
export {
  E as a,
  P as b,
  F as c,
  f as d,
  M as e,
  G as f,
  s as g,
  k as h,
  h as i,
  d as m
};
//# sourceMappingURL=index-4sghvY9w.js.map
