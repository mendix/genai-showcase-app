import { c as t } from "./logger-DMIubLZm.js";
const g = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADR0lEQVRYCeVW23HaQBS9Kx6TT9wBHYT8xdgfogO7AkMDoFRgXIGFXYBxBXYqMJlJ4DN0EHVgfg1ob87VSvYKJIHMjD+SnYF9ac85ui8t0f/e1KEG8Fxu0DI8MziVuT9V8zKY7xYgxLyiS2bt2YSK1KOqq2/+RAX2et74XQIMOT8xcwvACyJ9T+QsAHbBRE2sBU7d+QIR2Ctu1eLt7V2bXCk1VzXV8SeVhGg4aOsHJj7Ty8gyw22E9IqTnhbPssnVon/Mg8EJX8tp5YQjgxJZpxgQu3sLyCVv8yUp7SMWziK2dTUwrOozzjTlnJln/+8lwPvKTV4Zn7+ZHW8u5KSHgF44FJ5HFE7oRj1iAW74g9/z4CS8EzHxeqrbGYQRuaOfJLhyyAMh96f1uddetjRVnsDQAHBACpnAEP8WmIiXdHYUBuEG+QQBdy6Rbb25RLsEYWCTwypXo2ltmLxqv73C2LmEFe+w1knWpc+1gE2Ot7i/mVW7cmCbXAXeKbta6wdsw9/66gbkke9DcqlCEyM6fJZ9CD6y0zMzBsqQ90/4AuSR2V/JJWaW+rcOIeoFItAU8UR6Wq9bUR//bbkgj3zQDu+YdBfnYrOrQMiJ9dhgxW8u5HHMiOX8mXo0+8oQV5MsMaspAbnkyHGkWRdHMsmZw2+3s7qfd17cBvESxOKOwFCb/5QA+kQLXsKPls+99rqrTb3PJifugXxcRJ6kKoK4Z5PLOCUgDo4j+yFWDszM5Di6J9Fumx0lt3c7re5FjlSNssXGlnFmEKYeQh7L3P9Zm3htlNfY5yXIpU50pE6kcOPJbgFSTNC805VLdQqUonEpcqkTOeSCm3KBLGw2fHJ/YM1lrlyjaHRGvyqRH1M+Jz26mdU8OZtVJzYx7Tkwi5sUlOQ7gCcDXDjmSOpGfBdoJLkvKGXJ5cxOAfKQiNAvoY/afiHzuC2QfleSfjI3dYK6GL5mi6zvansJSECi8iqVTPOC6rUgKanvJRfcUgISIXZ/CLng7M4Cm21jLLcgpvJmt2EOEoDy6gqYKVLpEmuTFI0PEkBM3wVcayf3xlNELnsHx0D/eD2Os6NU9CfCDrMAUKKLCj5eGDbx7W8lwB/ey5Xsw0n/CcK/yjtfsJ29X28AAAAASUVORK5CYII=";
function a() {
  return {
    endpoint: "",
    protocolVersion: "v2025_03_26",
    version: "",
    documentation: ""
  };
}
const m = (A, o) => async (s) => {
  const n = t(A);
  try {
    await A.app.model.customBlobDocuments.updateDocumentContent(o, s);
  } catch (e) {
    n.error("Failed to save consumed MCP service document:", e), A.ui.notifications.show({
      title: "Failed to save consumed MCP service document.",
      message: e.message
    });
  }
};
export {
  a as c,
  g as m,
  m as u
};
//# sourceMappingURL=consumedMCPServiceUtils-Dt12ytxZ.js.map
