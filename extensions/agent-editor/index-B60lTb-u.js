import { m as C } from "./index-Uw9PZDBi.js";
import { c as f, m as l } from "./modelUtils-BKeUOTig.js";
const u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==";
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
function N(n, t) {
  const e = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], r = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], i = [...e, ...r];
  if (i.length === 0)
    return Promise.resolve([]);
  const a = i.map(
    (o) => o.replace(/\{\{|\}\}/g, "")
  ), c = [...new Set(a)], b = t.variables, p = c.map((o) => b.find((w) => w.key === o) || {
    key: o,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), E = h(p);
  return z(n, E, t);
}
const I = (n) => n.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function h(n) {
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
  const r = await F(n, e), i = await g(e, n);
  return t.map((a) => {
    const c = i.includes(a.key);
    return {
      ...a,
      isAttributeInEntity: r === !1 || c
    };
  });
}
const F = async (n, t) => t.entity ? await s(n, t.entity) != null : !0, s = async (n, t) => {
  const [e, r] = t.split(".");
  if (!e || !r)
    return;
  const i = await n.app.model.domainModels.getDomainModel(e);
  return i == null ? void 0 : i.getEntity(r);
}, m = async (n, t) => {
  const e = t.generalization, r = await s(n, e.generalization);
  if (!r) {
    console.error(`Generalization entity ${e.generalization} not found.`);
    return;
  }
  return r;
}, D = async (n, t) => {
  if (n.generalization.$Type === "DomainModels$NoGeneralization")
    return n.generalization.persistable;
  const e = await m(t, n);
  if (e)
    return await D(e, t);
}, T = async (n, t) => t.variables.length === 0 ? [] : !t.entity || !await s(n, t.entity) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), g = async (n, t) => {
  if (!n.entity)
    return [];
  const e = await s(t, n.entity);
  return e ? await y(t, e) : [];
}, x = async (n, t) => (await g(t, n)).filter((r) => !t.variables.find((i) => i.key === r)), y = async (n, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((i) => i.name);
  const e = await m(n, t);
  if (!e)
    return t.attributes.map((i) => i.name);
  const r = await y(n, e);
  return t.attributes.map((i) => i.name).concat(r);
}, A = "agenteditor.agent", d = "agenteditor.model";
class G {
  async loaded(t) {
    const e = C(t);
    try {
      await e.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Agent",
        defaultContent: B()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: A,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: u,
        iconDark: u
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: d,
        readableTypeName: "Model",
        defaultContent: f()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: d,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: l,
        iconDark: l
      });
    } catch (r) {
      throw console.log("Error during extension initialization:", r, JSON.stringify(r)), e.ui.messageBoxes.show("error", `Error during extension initialization: ${r.message}`), r;
    }
  }
}
const V = new G();
export {
  z as a,
  B as b,
  N as c,
  I as d,
  T as e,
  s as f,
  x as g,
  D as h,
  F as i,
  V as j,
  d as m
};
//# sourceMappingURL=index-B60lTb-u.js.map
