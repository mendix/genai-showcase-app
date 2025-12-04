import { m as r } from "./index-Uw9PZDBi.js";
import { a as d, m as o } from "./agentUtils-rNdv1QzD.js";
const A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==";
function s() {
  return {
    modelDocumentUUID: crypto.randomUUID(),
    type: "",
    name: "",
    displayName: "",
    provider: "MxCloudGenAI",
    // Preselct MxCloudGenAI as default provider
    providerFields: m()
  };
}
const m = () => ({
  environment: "",
  deepLinkURL: "",
  key: "",
  keyImportHelper: "",
  keyId: "",
  keyName: "",
  resourceName: ""
}), n = "agenteditor.agent", a = "agenteditor.model";
class g {
  async loaded(i) {
    const e = r(i);
    try {
      await e.app.model.customBlobDocuments.registerDocumentType({
        type: n,
        readableTypeName: "Agent",
        defaultContent: d()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: n,
        editorKind: "tab",
        editorEntryPoint: "agentEdit",
        iconLight: A,
        iconDark: A
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: a,
        readableTypeName: "Model",
        defaultContent: s()
      }), await e.ui.editors.registerEditorForCustomDocument({
        documentType: a,
        editorKind: "tab",
        editorEntryPoint: "modelEdit",
        iconLight: o,
        iconDark: o
      });
    } catch (t) {
      throw console.log("Error during extension initialization:", t, JSON.stringify(t)), e.ui.messageBoxes.show("error", `Error during extension initialization: ${t.message}`), t;
    }
  }
}
const p = new g();
export {
  s as a,
  p as b,
  m as c,
  a as m
};
//# sourceMappingURL=index-BdYV8_C5.js.map
