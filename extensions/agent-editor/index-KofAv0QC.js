import { m as f } from "./index-Uw9PZDBi.js";
import { c as C, m as c } from "./modelUtils-BKeUOTig.js";
const A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==";
function B() {
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
function N(e, t) {
  const n = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], i = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], r = [...n, ...i];
  if (r.length === 0)
    return [];
  const o = r.map(
    (s) => s.replace(/\{\{|\}\}/g, "")
  ), a = [...new Set(o)], u = t.variables, p = a.map((s) => u.find((w) => w.key === s) || {
    key: s,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), E = h(p);
  return z(e, E, t);
}
const I = (e) => e.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function h(e) {
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
  return e.map((n, i) => ({
    ...n,
    backgroundColor: t[i % t.length][0],
    borderColor: t[i % t.length][1]
  }));
}
async function z(e, t, n) {
  const i = await F(e, n), r = await y(n, e);
  return t.map((o) => {
    const a = r.filter((u) => o.key === u).length > 0;
    return console.log("Attribute", o.key, a), {
      ...o,
      isAttributeInEntity: i === !1 || a
    };
  });
}
const F = async (e, t) => (console.log(t.entity), t.entity ? await l(e, t.entity) != null : !0), l = async (e, t) => {
  const [n, i] = t.split(".");
  if (!n || !i)
    return null;
  const r = await e.app.model.domainModels.getDomainModel(n);
  return r ? r.getEntity(i) : null;
}, g = async (e, t) => {
  const n = t.generalization, i = await l(e, n.generalization);
  if (!i) {
    console.error(`Generalization entity ${n.generalization} not found.`);
    return;
  }
  return i;
}, D = async (e, t) => {
  if (e.generalization.$Type === "DomainModels$NoGeneralization")
    return e.generalization.persistable;
  const n = await g(t, e);
  if (n)
    return await D(n, t);
}, T = async (e, t) => t.variables.length === 0 ? [] : !t.entity || !await l(e, t.entity) ? [] : t.variables.filter((i) => i.isAttributeInEntity === !1).map((i) => i.key), y = async (e, t) => {
  if (!e.entity)
    return [];
  const n = await l(t, e.entity);
  return n ? await b(t, n) : [];
}, x = async (e, t) => (await y(t, e)).filter((r) => !t.variables.find((o) => o.key === r)), b = async (e, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((r) => r.name);
  const n = await g(e, t);
  if (!n)
    return t.attributes.map((r) => r.name);
  const i = await b(e, n);
  return t.attributes.map((r) => r.name).concat(i);
}, d = "agenteditor.agent", m = "agenteditor.model";
class G {
  async loaded(t) {
    const n = f(t);
    try {
      await n.app.model.customBlobDocuments.registerDocumentType({
        type: d,
        readableTypeName: "Agent",
        defaultContent: B()
      }), await n.ui.editors.registerEditorForCustomDocument({
        documentType: d,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: A,
        iconDark: A
      }), await n.app.model.customBlobDocuments.registerDocumentType({
        type: m,
        readableTypeName: "Model",
        defaultContent: C()
      }), await n.ui.editors.registerEditorForCustomDocument({
        documentType: m,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: c,
        iconDark: c
      });
    } catch (i) {
      throw console.log("Error during extension initialization:", i, JSON.stringify(i)), n.ui.messageBoxes.show("error", `Error during extension initialization: ${i.message}`), i;
    }
  }
}
const V = new G();
export {
  B as a,
  I as b,
  N as c,
  D as d,
  x as e,
  T as f,
  l as g,
  V as h,
  F as i,
  m
};
//# sourceMappingURL=index-KofAv0QC.js.map
