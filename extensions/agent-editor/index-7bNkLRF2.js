import { c as g, m as f } from "./logger-b1NN0-C1.js";
import { c as B, m as l } from "./modelUtils-BKeUOTig.js";
const u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==";
function h() {
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
function I(n, t) {
  const e = t.systemPrompt.match(/\{\{([^}]+)\}\}/g) || [], o = t.userPrompt ? t.userPrompt.match(/\{\{([^}]+)\}\}/g) || [] : [], r = [...e, ...o];
  if (r.length === 0)
    return Promise.resolve([]);
  const a = r.map(
    (i) => i.replace(/\{\{|\}\}/g, "")
  ), c = [...new Set(a)], p = t.variables, E = c.map((i) => p.find((C) => C.key === i) || {
    key: i,
    isAttributeInEntity: !1,
    backgroundColor: "",
    borderColor: "",
    testValue: ""
  }), w = z(E);
  return F(n, w, t);
}
const T = (n) => n.map((t) => ({
  pattern: new RegExp("\\{\\{" + t.key + "\\}\\}", "g"),
  style: {
    color: t.borderColor,
    backgroundColor: t.backgroundColor,
    border: `1px solid ${t.borderColor}`,
    borderRadius: "2px",
    margin: "0 -1px"
  }
}));
function z(n) {
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
  return n.map((e, o) => ({
    ...e,
    backgroundColor: t[o % t.length][0],
    borderColor: t[o % t.length][1]
  }));
}
async function F(n, t, e) {
  const o = await D(n, e), r = await y(e, n);
  return t.map((a) => {
    const c = r.includes(a.key);
    return {
      ...a,
      isAttributeInEntity: o === !1 || c
    };
  });
}
const D = async (n, t) => t.entity ? s(n, t.entity) != null : !0, s = async (n, t) => {
  const [e, o] = t.split(".");
  if (!e || !o)
    return;
  const r = await n.app.model.domainModels.getDomainModel(e);
  return r == null ? void 0 : r.getEntity(o);
}, m = async (n, t) => {
  const e = g(n), o = t.generalization, r = await s(n, o.generalization);
  if (!r) {
    e.error(`Generalization entity ${o.generalization} not found.`);
    return;
  }
  return r;
}, G = async (n, t) => {
  if (n.generalization.$Type === "DomainModels$NoGeneralization")
    return n.generalization.persistable;
  const e = await m(t, n);
  if (e)
    return G(e, t);
}, x = async (n, t) => t.variables.length === 0 ? [] : !t.entity || !await s(n, t.entity) ? [] : t.variables.filter((e) => !e.isAttributeInEntity).map((e) => e.key), y = async (n, t) => {
  if (!n.entity)
    return [];
  const e = await s(t, n.entity);
  return e ? b(t, e) : [];
}, V = async (n, t) => (await y(t, n)).filter((o) => !t.variables.find((r) => r.key === o)), b = async (n, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((r) => r.name);
  const e = await m(n, t);
  if (!e)
    return t.attributes.map((r) => r.name);
  const o = await b(n, e);
  return t.attributes.map((r) => r.name).concat(o);
}, O = "extension/agent-editor", A = "agenteditor.agent", d = "agenteditor.model";
class P {
  async loaded(t) {
    const e = f(t), o = g(e);
    try {
      await e.app.model.customBlobDocuments.registerDocumentType({
        type: A,
        readableTypeName: "Agent",
        defaultContent: h()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: A,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: u,
        iconDark: u
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: d,
        readableTypeName: "Model",
        defaultContent: B()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: d,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: l,
        iconDark: l
      });
    } catch (r) {
      throw o.error("Error during extension initialization:", r), e.ui.messageBoxes.show("error", `Error during extension initialization: ${r.message}`), r;
    }
  }
}
const X = new P();
export {
  F as a,
  h as b,
  I as c,
  T as d,
  G as e,
  V as f,
  s as g,
  x as h,
  D as i,
  O as j,
  X as k,
  d as m
};
//# sourceMappingURL=index-7bNkLRF2.js.map
