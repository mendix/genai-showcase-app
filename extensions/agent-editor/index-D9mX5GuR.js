import { s as g } from "./index-NGRI5FCS.js";
import { c as p, m as l } from "./modelUtils-D5S0h07z.js";
const A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==";
function y() {
  return {
    modelDocumentUUID: crypto.randomUUID(),
    description: "",
    entity: "",
    systemPrompt: "",
    userPrompt: "",
    usageType: "Task",
    variables: [],
    tools: []
  };
}
function D(o) {
  const e = o.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], r = o.userPrompt ? o.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], t = [...e, ...r];
  if (t.length === 0)
    return [];
  const a = t.map(
    (i) => i.replace(/\{\{|\}\}/g, "")
  ), n = [...new Set(a)], s = o.variables, u = n.map((i) => s.find((m) => m.key === i) || {
    key: i,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  });
  return E(u);
}
const P = (o) => o.map((e) => ({
  pattern: new RegExp("\\{\\{" + e.key + "\\}\\}", "g"),
  style: {
    color: e.borderColor,
    backgroundColor: e.backgroundColor,
    border: `1px solid ${e.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function E(o) {
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
  return o.map((r, t) => ({
    ...r,
    backgroundColor: e[t % e.length][0],
    borderColor: e[t % e.length][1]
  }));
}
const F = async (o, e) => {
  if (console.log(e.entity), !e.entity)
    return !0;
  const r = e.entity.split(".")[0], t = e.entity.split(".")[1], a = await o.app.model.domainModels.getDomainModel(r), n = a ? a.entities.find((s) => s.name === t) : null;
  return console.log(n, n != null), n != null;
}, d = "agenteditor.agent", c = "agenteditor.model";
class C {
  async loaded(e) {
    const r = g(e);
    try {
      await r.app.model.customBlobDocuments.registerDocumentType({
        type: d,
        readableTypeName: "Agent",
        defaultContent: y()
      }), await r.ui.editors.registerEditorForCustomDocument({
        documentType: d,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: A,
        iconDark: A
      }), await r.app.model.customBlobDocuments.registerDocumentType({
        type: c,
        readableTypeName: "Model",
        defaultContent: p()
      }), await r.ui.editors.registerEditorForCustomDocument({
        documentType: c,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: l,
        iconDark: l
      });
    } catch (t) {
      throw console.log("Error during extension initialization:", t, JSON.stringify(t)), r.ui.messageBoxes.show("error", `Error during extension initialization: ${t.message}`), t;
    }
  }
}
const f = new C();
export {
  y as a,
  P as b,
  D as c,
  f as d,
  F as i,
  c as m
};
//# sourceMappingURL=index-D9mX5GuR.js.map
