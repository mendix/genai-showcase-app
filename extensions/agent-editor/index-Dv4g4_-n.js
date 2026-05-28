import { a as Ee, c as w } from "./index-CE9RqUwp.js";
import { g as p } from "./customBlobDocumentUtils-Dwvjb_jQ.js";
const dt = 300, O = {
  ConnectionChanged: "ae_connectionChanged",
  GetConnectionState: "ae_getConnectionState"
}, h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgB7ZpNTttAFMffG7uLVoCCyKLL9ASQG8AJmiOUPSLhBJgTYFD3tCdoegLaE+AbQHdVBcIiRZWI7dd5xFJje0jryTAOZX5SJDwWM/P+mY/3EQCHw+FwOBzPFYQGaA2uOz69OAGgDTmFlvwME7zbi8PVC7CMdQEmxvtnE8MLxAmOu7ZFEGAZL/NDhfFMa7Iq7GJdAER8O+P1BljGugCSeMa7FlimCQGiB98QfQbLWBfAR28b1Ksg9oU/AMs0cg2+HvzqJJSeT7dJYd58D19egGUaEYBp93/S9PPl0VIjc2niDFgonADwzJl737V3RpskoCekgyM3dQfsEMmxohTHB/O6ztoCSJ+eXdd9+af1q6tEmEyEiHX+WUuA3PhTaMB1fYBIirClI4LWGZB/84tiPLORz6k2tVdAHsufFzvBC8JsO4GlKA5RaynWYW1w0xPkHRJQp/ACaesyXP4CNai9ArzMCwpjSuPH+KrLA9swnrkKV4ZjvOvy2NPtlEEPalJbAESxXnhO0z1bhk/D+51XXaFxdqitROcMKOz9H+9XhtAQCSSFyBI1rmGlALzPpa9+2u6PrmGB+ZdTn2OOdv/2E9ukel8R4E/ODjYfSF09QagnD+4zlQgVAWbk7J46ypyjX25AjYNkmvbu7T5glnuH+EGGuXswB4b7q/guRoMhud8O5V0c5Ll+XkWD9u4oAE1M9weKnKPpaPBdpQWxD4vTXwWXDwCTEB1Vm+gj6GK6PwVGBbg8Xg5oMun4/oN0cHW8rB0um+5PhQ+GySdobJKm+yvjzgB45qi2AO83455guQ7wN2zVCVQrIIL/FUXtsSLAjNrdU0dZe6wIwPU5KUK3iUrtIxFLW76yTaraY+19Vt7LMhu7qpuSNsG8Ncb6twBl36YfffAbyw6v7dwUcoCocX7VFoAACykwIjzhOgFY5n5MTxwWW/HxBUABBQE4D+fJbEv523gs2HAux/GY5Rygh+IAaqJ1167tjkI0HJbOC8cMOnGClieYiiSAhfIXMErFUgAaaAnApz7X4kgRrtqG55Dgqy3d2sTc7ib/3ifN0oD4Z6+I62ADeRMRiCEKGtYthTkcDofD4XA4HA4H8xtipkL5M9GUUAAAAABJRU5ErkJggg==", lt = "data:image/png;base64,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", I = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADxElEQVRYCcVXb24SQRR/j0WDFhOa9AD0BvUEricotv1AqwnbRIyf7PYEhRMI34zVdPulNLFt1hO4N6A3KN/VSCKtJLL7fG9gENalzGKMk8DMvHl/fm/mN28A4D83/Jv4K3s9Evs8/lzuNJa7i/jKLGIkNivud1vb9iC7psdp+4UBIGBlHIzwYDxOOVgIwMqr6wMicABItl0+tshSxlbqxhwoulToQW8NhtnaI+t9dtBlMEcy57FHSMdfGg8CtW7wZQxAE27ok7qEuP+1kfdkvuL2XCCQHSjIXNqXZt7I90JHILmy93EwiqxvfBzDyCm/jVBqn8J8BHKIMhWREVlOBqhAGDWUDkLA0noe8pedBgo35rZUALQ3BlIbcYGDSOZYAKQ6n31N65j2CwEQ58yJT9zZMmYn3udmflfGaduCHOAwnLEOJszX47T9wgAGMLjUwdJcO22je9695La5/aICQi5iMjG57kRW/fT0TSdZe1q69eylDWG0zuR0lD1g7bz1NnGXbgFQvWK3xWnXcEkIzbuRFcTBlEpuIbvUcyjCdbaxY3bd89bhckymptkk4UhWlD6D8DAicnn0iBm/hlz1fmIImztVDzOWyoqiaA+gZ3PwgrJFLs8Ex0jkc8ESsg7lanH66zYASvPDyaGctSOTjXLVYUAVkgz5LaAwVHJZk7vA2xkQYDO8uR/4fqMr0s3tqnQzmzEJZYsvTg+9s9bh45CsVc6urr3KOPyxtCxrfNZ+LtefmbG20b0xAOvedZuzaW/sVJ0cW5+dvqtpJ3q89fS5yzqf+Ijaem1ebwRgq/zcVuUGQHEg0SlnzRx4zWu2nEW5/LKYqBcTGgHgDAPe2lV+dnf5pBvxGyA+fXVFoyYDfRLeLK0m6cRiq+lcEk4aCQcm5/Hxeeu9G5fNmxvtgDiR4mKyrUJWLmKleYH1uhGAEp8nXzkh15WQLAmI6Mgak/Ub14ujUskxuglGACDX77JTVXQYud3vyzzWRAdhjT/dDGCQy+WMABhxwPc8CehwlrUsDIq+r+ZTCESHb8uTQT9/eT4qQlMKMyazAQzLKZ9ntR2r/50ZvqQ2BLIWexdYgh2RJ7WZACiCfUT5vT9R/7dfcG2njxcnf94GCWrdu7FZn9+Fa3kXhvE4EYp+V804iJFWXPx7LvXfyuA6P0ilsRTl/wD68h6ITGrD6Okdnzs7DvhHY12ORL8LY/uJwVwAWldYnoHQHj9GemGiV0GBPg5+5L3bgk6YSNFM3wSMhaHLua/zT7MCRtTMQtYzrX7pI/5Di1/I2IUPUzivHAAAAABJRU5ErkJggg==", M = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADFElEQVRYCe1WzW7TQBCeTVLoj5Ec0d7NG7RPQPoGFuVAEVJboaKemvQJ2jxBXU6IgupeaA608hvEPEHzBvhOpEYiIYjGWb5xbNeGtWP1hshK9s7OfvPj2ZnxEs3GLAL/ewRE0QCYZkMvLf6oCylrkOFHNTpS0MnVp1NbtaniFXLAfLFnlIXfhgJDpUTB8+Zkeb3Veucp9lKsQg5sbO5+hZRBJDwhxzujn1rHcaxeShMWG5uvTaLyMZEEljx/eLvmOPZfuKRcKblQ0c9e7m6Db7Bxf7i49rn1wVUZZ9nLi4+O//DXGmOxNCqLDxrMzxtTHQCgHio4yDKcNODYdo+jxDwp5dPknoqe6oCUtMqClxfvHZUCFW80P+qE/JpqP8mrJBdMF8z2QGy53pdMaOK26lnVXsDEi6OAvImWuXPKgUm2D9ok+czzx3Ljew24YPSpwlFyJ6v0G44wKrM8U0dwV2qc7XLdHy5VLy9OBT9ptUgzElsxT4rDmFYTq0LSGVfTC5R0EhIr5mxnUJTteQm3vD84JCGPkGYIe6BCJymOum+XmknlEZ1XnnEEpmW70ZA6hx3n3p4Yh3ohmkLQQWAIDq3U+2fB0USWwzmvPGMHpmV7Xw5u8JVt6Kzxl6Pl7nQtzfpmaTaCwE70JNE2Y6LkDO0HU1Z5xg4kwdNpZACRHuHkuHwDp6Jl5qwqz8IOdE80WJXrQozPYQFnTseP94dbK/v4QQnfxnno8MpljCaWqiovOAp/8lNlyJumua1n9e+u9cgFxMU5ewj1IQxbMvhyxEPIJvaPsE9dfhUcyQi4LFPR5rmmc0doyAUIxyB0mLcj43mCk2oAQlAnwsUOoO6/MFP6/hlHIQJkzvjiaE8KeR7RWTN3WKIS/pSwMaaTCBc7gASx4JqHDaO8MHe9sfnGjECqeURxv6fwaFSwoLU/f7VXKy8Mrlk327hq3V1YRFJq0orHKLXgf57cStGqzsiAsO2msOmFwEWllLqoxBFgoIMbDP56T9ATdtBgOmnh+6/wlS6OuMn3iSK3pPtbmknOIvAvRuA3fQBEYKnukL0AAAAASUVORK5CYII=", ut = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACi0lEQVRYCe1XvW4aQRCe2QMLpQl+A1KlSYGb1PgNHFAkoDEoAqUDP4HxE4C7yBSGBiMlOLhLSZkqoYiU0n6DXJcIczf55swdPzYyiQ9ZSljpbmdmd2e+m2V3Poj+98aLCXidLyVdoTqxJEk4vjj+VzqLTcT9qGsddbvvrmZ9zAHI5Mr7RNKanRC+zIXe2Unb9xsA2Mu+TVjsXE4GjqNiNRbR+ov+tFffERoXhPlQ1xqmnfed5lDliL60WcY5JEGimI8+dE5qnjGkV/8m7bVM7g221FS8LSbaVfdmJsaeyhHXtGZsoYqORBsTh0nf8RSAENARhZV2P8BsP8mEmrxYKkwBqPYIbQNgk4FNBjYZePQMBMVo2SWYyZUuiWmAcfADPKQyH6Ns1yEn8AxR3You0akWM+fn9a6JRSooalr92uf3FLZVMpCA44IGQqnso08h+EcP1I2uBKbArlxgLGk9idYRvAaQtLVCYVsFAPyS3es0i45rDlQBiRiozq6LTKjBPB3Hxg0IVxOwJCK32I83d+G1MoCFdbfUfqtlg8YN/IEtsgLZt93VrwrgrrVztnS+VPC+nsnWgWt2TucmLFHCASASZyGPboF47iDWAE8qnStXl8QNzPeeAsEvnIW9r6LYL1tG0SLYsqdj34cGOoLbmHeh85TQgAMWjXFSag8iLRECUprJl34ghXGQ0WfrYkUzxNfunTW3FdN0CwTHDG1kuRXt19EMjfc9v0x933+wBbhMDnCev+I8V9P5so0z3A4rE1nQ8hG7FSapamD9g+IDCLZADelsqcCMG22NTYSK591myw9h+YL23799GT5/8bJt2N3GrZeAKYbn4Q1HE1/6GVl+hb3/9HCH/5KH30bx2On377S8AAAAAElFTkSuQmCC", mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABUhJREFUeAHtms9vG0UUx9+bDXEQAsIZEJsDCAmk1jdzwrlViBb3gtxe6v4FNKJE5WT7AqilSvoX1FwSA4c65Ye4ZX1BQTnYCLjAwVt+3I2QSJ3E8/pm7ai1u7M/7PWPdf25OPLMxvu+82bmzXsDMGfOnDlPMAgRkMq+myak00KiSYjPw1iheyjb9cThgWVVrCaEZGABlNFIkAEDLwHBMkwBRFACOCrulX+wgz4TWoBU9owJsHAbEdMwnTSllMWfvvxuM0hnA0KQunDuEgpRQcDXYXpZ4sE589Kbr8Hfv/5e9escWIDUxXN5BFKqLkEMUB764huv/vvPb3/sefaDADjGExUgfjSJjpJea4IAH1LZd3IxNV6xjLxeeXXw9AC14KF4qjYtq/ygJA7+e0G3RXp6AKtXiLvxioPEMzldm1YAZ7tD3uNnAERxStemFcAZ/RmBd68VXZt+CgjxHjwBuAqgwlyOK2M/94PgKgAfaE7DTIHaQ5Jw/5JMmCEIoKJrc/eAGdj6ejEsXYtvJBh3CKG0V67YuvYFmGnQBimKXj10AtgQdxCbxyDO72/rR1+hmQLShjjTMX51f6tS9+vqKsDS0mIF4kuVpEgGMV6hPQ2+deHsLn+kITagTUScD/ymFOYp7SIoAXZEHARgd+dRvPXj1t0CDIBWgKcTRql1KPPTGxJ3R3z7bgmGwCchcjaHCJ4ZlQlQZcMLe+VvLYgA35wgrwV3+CMDk4ZghzgpG5XhJ/gGQomEcbnVknw4msD5oDu/F/8Xm1alErrqE+gngnRKZTMmotwdowiRurkXgStDHRGOC/zIaNJk3dGWUnjG7opaobEMCVhOfrxiw5AMUBpTCyPmI/SGKrSPNxOHCUvn5spg8az4gPMUaX5hlat4ZGci3g2wTtDeSX64UoKQDFQcVd4A0E4PLER3tI+Ojiv7X3+vjdhqNxppNAyuSAWNR8iWJIthhBi6PO6kz/gFnWIp4inXuIEN5u9/5hesc66h4jW3T0abn7kCMFheghMgFrXal4NMkUjuB/TT8ZAOS/ehGWQFV6NtCIPd3BntCIIv9oaWXPUTYSQChKH2eSODbDiOJOxmEVAmk2sr2gEIlRChq1l2c8qAwIeFBsmujWTh9a9CnSCVq+Nzxh0c6XkDTSEFr1Owpu0BAaD19zOAxgb/aXp04+wLFfFGuQQ+1D5tmCJh7Pr8v8iQ7fZq8qMVy63NNydI6xfzbLwKh02friZ7xm1az+Z9+sE4jVeonUTX5ilAx/iQpXHEgpcIv9y8p9pMGCNqmtU2Gq4Lq1aA7nwvwEC/yCJc4+f7UK4vuQ0mgTRcD3R6DzBwuGMwweNesGikYVIguVa73AsjV53RM2G4X0z3e4GBMLFyO2ruL7p7gIioNih7VadOHD9VaKYARfOiiP0XE6YuvTbzpbETSAVsLoxbgJFkdQIhhOupc6wC8H4cqFgRPWQn11623Fo0AmA0L0q9bsdpLt+rq6NAEnyha9PsAhSNAAJ7DkhSSHXVdszTgGwQsqRrdRUAPytb/GHBUL9LVf4/9qNfOcdSolswRpwM0Zo+J+AVCWqPkIEQkHP7uuMFNJa1QHLlyC89pr8n+MlWnSOXwURAPhb3jf4Jygs4SXEeRnwHoWP8KwW/ft5XZa9vb3Iw43nD4jFYNDa+4NVFuaTE9ioOO83caUrifGAA4xXBEiLXsiZILHHvt/WdOL29gFcczwlB7eafOYEQxRHZWV/UFPNKgfUTKifYFSLTGyrzlrmAVljD+6lt/JUGySU4DHleII4tOMjR7fNz5syZM8eDB99r8a6sPZZtAAAAAElFTkSuQmCC", N = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADR0lEQVRYCeVW23HaQBS9Kx6TT9wBHYT8xdgfogO7AkMDoFRgXIGFXYBxBXYqMJlJ4DN0EHVgfg1ob87VSvYKJIHMjD+SnYF9ac85ui8t0f/e1KEG8Fxu0DI8MziVuT9V8zKY7xYgxLyiS2bt2YSK1KOqq2/+RAX2et74XQIMOT8xcwvACyJ9T+QsAHbBRE2sBU7d+QIR2Ctu1eLt7V2bXCk1VzXV8SeVhGg4aOsHJj7Ty8gyw22E9IqTnhbPssnVon/Mg8EJX8tp5YQjgxJZpxgQu3sLyCVv8yUp7SMWziK2dTUwrOozzjTlnJln/+8lwPvKTV4Zn7+ZHW8u5KSHgF44FJ5HFE7oRj1iAW74g9/z4CS8EzHxeqrbGYQRuaOfJLhyyAMh96f1uddetjRVnsDQAHBACpnAEP8WmIiXdHYUBuEG+QQBdy6Rbb25RLsEYWCTwypXo2ltmLxqv73C2LmEFe+w1knWpc+1gE2Ot7i/mVW7cmCbXAXeKbta6wdsw9/66gbkke9DcqlCEyM6fJZ9CD6y0zMzBsqQ90/4AuSR2V/JJWaW+rcOIeoFItAU8UR6Wq9bUR//bbkgj3zQDu+YdBfnYrOrQMiJ9dhgxW8u5HHMiOX8mXo0+8oQV5MsMaspAbnkyHGkWRdHMsmZw2+3s7qfd17cBvESxOKOwFCb/5QA+kQLXsKPls+99rqrTb3PJifugXxcRJ6kKoK4Z5PLOCUgDo4j+yFWDszM5Di6J9Fumx0lt3c7re5FjlSNssXGlnFmEKYeQh7L3P9Zm3htlNfY5yXIpU50pE6kcOPJbgFSTNC805VLdQqUonEpcqkTOeSCm3KBLGw2fHJ/YM1lrlyjaHRGvyqRH1M+Jz26mdU8OZtVJzYx7Tkwi5sUlOQ7gCcDXDjmSOpGfBdoJLkvKGXJ5cxOAfKQiNAvoY/afiHzuC2QfleSfjI3dYK6GL5mi6zvansJSECi8iqVTPOC6rUgKanvJRfcUgISIXZ/CLng7M4Cm21jLLcgpvJmt2EOEoDy6gqYKVLpEmuTFI0PEkBM3wVcayf3xlNELnsHx0D/eD2Os6NU9CfCDrMAUKKLCj5eGDbx7W8lwB/ey5Xsw0n/CcK/yjtfsJ29X28AAAAASUVORK5CYII=", fe = {
  Chat: "Chat",
  Task: "Task"
}, Et = {
  Agent: "agent",
  User: "user",
  Error: "error"
}, ft = {
  Build: "Build",
  Playground: "Playground"
}, A = {
  Microflow: "Microflow",
  MCP: "MCP"
}, pe = {
  Auto: "Auto",
  None: "None",
  Tool: "Tool",
  Any: "Any"
}, B = "AE001", b = "AE002", L = "AE003", v = "AE004", x = "AE005", S = "AE006", k = "AE007", G = "AE008", P = "AE009", U = "AE010", q = "AE011", Q = "AE012", V = "AE013", K = "AE014", Y = "AE015", z = "AE016", X = "AE017", F = "AE018", Ce = [
  B,
  b,
  L,
  v,
  x,
  S,
  k,
  G,
  P,
  U,
  q,
  Q,
  V,
  K,
  Y,
  z,
  X,
  F
], H = "AE101", J = "AE102", j = "AE103", W = "AE104", Te = [
  H,
  J,
  j,
  W
], _ = "AE201", Z = "AE202", $ = "AE203", ee = "AE204", te = "AE205", oe = "AE206", ne = "AE207", re = "AE208", De = [
  _,
  Z,
  $,
  ee,
  te,
  oe,
  ne,
  re
], se = "AE301", ie = "AE302", ae = "AE303", ce = "AE304", ye = [
  se,
  ie,
  ae,
  ce
], Ae = async (o, t) => {
  if (t.generalization.$Type === "DomainModels$NoGeneralization")
    return t.attributes.map((n) => n.name);
  const e = await de(o, t);
  if (!e)
    return t.attributes.map((n) => n.name);
  const r = await Ae(o, e);
  return t.attributes.map((n) => n.name).concat(r);
}, ge = async (o, t) => {
  if (o.generalization.$Type === "DomainModels$NoGeneralization")
    return o.generalization.persistable;
  const e = await de(t, o);
  if (e)
    return ge(e, t);
}, D = async (o, t) => {
  const [e, r] = t.split(".");
  if (!e || !r)
    return;
  const n = await o.app.model.domainModels.getDomainModel(e);
  return n == null ? void 0 : n.getEntity(r);
}, de = (o, t) => {
  const e = t.generalization;
  return D(o, e.generalization);
}, pt = async (o, t) => {
  var r;
  if (!t)
    return;
  const e = (r = await D(o, t)) == null ? void 0 : r.getContainer();
  if (!e) {
    const n = "Could not find entity: " + t;
    return await o.ui.messageBoxes.show("error", n, "This entity might have been deleted or renamed. Please update the context entity selection.");
  }
  await o.ui.editors.editDocument(e.$ID);
}, T = {
  Request: "GenAICommons.Request",
  Tool: "GenAICommons.Tool",
  HttpHeader: "System.HttpHeader"
}, Ct = "Action not found.", Tt = "https://docs.mendix.com/refguide/runtime-tab/#after-startup", Dt = "Settings$ProjectSettings", yt = "DomainModels$DomainModel", Re = "DomainModels$Entity", le = "Microflows$Microflow", y = "Constants$Constant", we = "Projects$Module", gt = async (o, t) => {
  const e = await C(o, t);
  if (!e)
    return await o.ui.messageBoxes.show("error", "Could not find microflow.", "This microflow might have been deleted or renamed. Please update the tool microflow selection.");
  await o.ui.editors.editDocument(e.$ID);
}, C = async (o, t) => {
  if (t.documentId)
    try {
      const e = await o.app.model.microflows.load(
        le,
        t.documentId
      );
      return e && e.name === t.qualifiedName.split(".")[1] ? e : void 0;
    } catch {
      return;
    }
};
function Oe(o) {
  return {
    id: crypto.randomUUID(),
    name: o || "",
    description: "",
    enabled: !0,
    toolType: "",
    document: {
      documentId: "",
      qualifiedName: ""
    }
  };
}
function Rt(o) {
  return {
    ...Oe(o),
    collectionIdentifier: ""
  };
}
const wt = async (o, t, e) => {
  if (o.toolType !== A.MCP)
    throw new Error("validateMCPTool can only be used to validate tools of type MCP.");
  const r = e.tools;
  if (!o.document || !o.document.documentId)
    return "Consumed MCP service must be selected for MCP tool.";
  const n = await p(t, o.document);
  return n ? n.excluded === !0 ? "Selected Consumed MCP service is currently excluded from the project and cannot be used." : r && r.some(
    (s) => {
      var i;
      return s.toolType === A.MCP && s.document.documentId === ((i = o.document) == null ? void 0 : i.documentId) && s.id !== o.id;
    }
  ) ? "Consumed MCP service must be unique among tools." : !0 : "Consumed MCP service document does not exist.";
}, Ot = async (o, t) => {
  if (o.toolType !== A.Microflow)
    throw new Error("validateMicroflowTool can only be used to validate tools of type Microflow.");
  if (!o.document || !o.document.documentId)
    return "Microflow must be selected for Microflow tool.";
  const e = await C(t, o.document);
  if (!e)
    return "Selected microflow does not exist.";
  if (e.excluded === !0)
    return "Selected microflow is currently excluded from the project and cannot be used.";
  if (e.microflowReturnType.$Type !== "DataTypes$StringType")
    return "Tool microflow must return a String.";
  const r = ue(e);
  return r || !0;
}, ue = (o) => {
  const t = [T.Request, T.Tool], e = [
    "DataTypes$StringType",
    "DataTypes$BooleanType",
    "DataTypes$IntegerType",
    "DataTypes$DecimalType",
    "DataTypes$FloatType",
    "DataTypes$DateTimeType",
    "DataTypes$VoidType",
    "DataTypes$EmptyType",
    "DataTypes$EnumerationType"
  ], r = o.objectCollection.objects;
  if (r) {
    for (const n of r)
      if (n.$Type === "Microflows$MicroflowParameterObject") {
        if (e.includes(n.variableType.$Type))
          continue;
        if (n.variableType.$Type === "DataTypes$ObjectType" && t.includes(n.variableType.entity))
          continue;
        return `Tool microflow parameter "${n.name}" has an unsupported type. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are allowed.`;
      }
  }
}, he = async (o, t, e) => {
  let r;
  return t === A.MCP ? r = await p(o, e) : t === A.Microflow && (r = await C(o, e)), r;
}, Ie = (o) => {
  switch (o) {
    case A.Microflow:
      return "Microflow";
    case A.MCP:
      return "Consumed MCP service";
    default:
      return "Tool";
  }
}, Me = (o) => "microflowActionInfo" in o, Ne = (o) => ({
  check: async (t) => {
    const e = await Be(o, t), r = be(t), n = await Le(o, t), s = ve(t), i = xe(t), a = Se(t), l = await ke(o, t), R = await Ge(o, t);
    return {
      errors: [
        ...e.errors,
        ...n.errors,
        ...s.errors,
        ...i.errors,
        ...a.errors,
        ...l.errors,
        ...R.errors,
        ...r.errors
      ],
      dependentElementIds: [
        ...e.dependentElementIds,
        ...n.dependentElementIds,
        ...s.dependentElementIds,
        ...a.dependentElementIds,
        ...l.dependentElementIds,
        ...R.dependentElementIds,
        ...r.dependentElementIds
      ]
    };
  },
  reservedErrorCodes: Ce
});
async function Be(o, t) {
  const e = [], r = [];
  if (!t.model)
    return e.push({
      elementText: "Model resource",
      errorCode: B,
      errorDescription: "Model resource is required for an agent.",
      severity: "error"
    }), { errors: e, dependentElementIds: r };
  r.push(t.model.documentId);
  const n = await p(o, t.model);
  return n ? n.excluded && e.push({
    elementText: "Model resource",
    errorCode: L,
    errorDescription: `Model ${t.model.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error"
  }) : e.push({
    elementText: "Model resource",
    errorCode: b,
    errorDescription: `Model ${t.model.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error"
  }), { errors: e, dependentElementIds: r };
}
const be = (o) => {
  const t = [];
  return o.model && !o.selectedModel && t.push({
    elementText: "Model version",
    errorCode: F,
    errorDescription: "Model version is required for an agent",
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
};
async function Le(o, t) {
  const e = [], r = [];
  if (!t.entity)
    return t.variables.length > 0 && e.push({
      elementText: "Context entity",
      errorCode: x,
      errorDescription: "Context entity is required for an agent when using variables.",
      severity: "error"
    }), { errors: e, dependentElementIds: [] };
  r.push(t.entity.documentId);
  const n = await D(o, t.entity.qualifiedName);
  if (!n)
    return e.push({
      elementText: "Context entity",
      errorCode: S,
      errorDescription: `Context entity ${t.entity.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
      severity: "error"
    }), { errors: e, dependentElementIds: r };
  const s = await Ae(o, n), i = t.variables.filter((a) => !s.includes(a.key)).map((a) => a.key);
  return i.length > 0 && e.push({
    elementText: "Context entity",
    errorCode: k,
    errorDescription: `Variable${i.length > 1 ? "s" : ""} ${i.join(", ")} could not be found in context entity ${t.entity.qualifiedName}.`,
    severity: "warning"
  }), { errors: e, dependentElementIds: r };
}
function ve(o) {
  const t = [];
  return o.usageType === fe.Task && !o.userPrompt && t.push({
    elementText: "User prompt",
    errorCode: v,
    errorDescription: "User prompt is required for an agent.",
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
function xe(o) {
  const t = [];
  return o.usageType || t.push({
    elementText: "Agent type",
    errorCode: X,
    errorDescription: "Agent type is required for an agent.",
    severity: "error"
  }), { errors: t, dependentElementIds: [] };
}
function Se(o) {
  const t = [];
  if (o.toolChoice !== pe.Tool)
    return { errors: t, dependentElementIds: [] };
  if (!o.toolChoiceToolName)
    t.push({
      elementText: "Tool choice",
      errorCode: K,
      errorDescription: "A specific tool must be selected when tool choice is set to 'Tool'.",
      severity: "error"
    });
  else {
    const e = o.tools.find((r) => r.name === o.toolChoiceToolName);
    e ? e.enabled || t.push({
      elementText: "Tool choice",
      errorCode: z,
      errorDescription: `Tool '${o.toolChoiceToolName}' is not active. Please activate it, or select a different tool.`,
      severity: "error"
    }) : t.push({
      elementText: "Tool choice",
      errorCode: Y,
      errorDescription: `Tool '${o.toolChoiceToolName}' is not in the agent's tools list. Please update your tool selection or change the tool choice.`,
      severity: "error"
    });
  }
  return { errors: t, dependentElementIds: [] };
}
async function ke(o, t) {
  const e = [], r = [];
  for (const n of t.tools) {
    if (!n.enabled)
      continue;
    r.push(n.document.documentId);
    const s = await he(o, n.toolType, n.document), i = Ie(n.toolType);
    if (!s)
      e.push({
        elementText: "Tools",
        errorCode: G,
        errorDescription: `${i} ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    else if (s.excluded)
      e.push({
        elementText: "Tools",
        errorCode: P,
        errorDescription: `${i} ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      });
    else if (Me(s)) {
      const { errors: a } = Pe(s, n);
      e.push(...a);
    }
  }
  return { errors: e, dependentElementIds: r };
}
async function Ge(o, t) {
  const e = [], r = [];
  if (t.knowledgebaseTools)
    for (const n of t.knowledgebaseTools) {
      if (!n.enabled)
        continue;
      r.push(n.document.documentId);
      const s = await p(o, n.document);
      s ? s.excluded && e.push({
        elementText: "Knowledge bases",
        errorCode: V,
        errorDescription: `Knowledge base ${n.document.qualifiedName} is excluded from the project and cannot be used.`,
        severity: "error"
      }) : e.push({
        elementText: "Knowledge bases",
        errorCode: Q,
        errorDescription: `Knowledge base ${n.document.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
        severity: "error"
      });
    }
  return { errors: e, dependentElementIds: r };
}
function Pe(o, t) {
  const e = [];
  return o.microflowReturnType.$Type !== "DataTypes$StringType" && e.push({
    elementText: "Tools",
    errorCode: U,
    errorDescription: `Microflow ${t.document.qualifiedName} must return a String.`,
    severity: "error"
  }), ue(o) && e.push({
    elementText: "Tools",
    errorCode: q,
    errorDescription: `Microflow ${t.document.qualifiedName} has invalid parameter types. Only primitive types and GenAICommons.Request or GenAICommons.Tool objects are supported.`,
    severity: "error"
  }), { errors: e, dependentElementIds: [] };
}
const ht = async (o, t) => {
  const e = await d(o, t);
  if (!e)
    return await o.ui.messageBoxes.show("error", "Could not find constant.", "This constant might have been deleted or renamed. Please update the tool constant selection.");
  await o.ui.editors.editDocument(e.$ID);
}, Ue = (o) => {
  if (o)
    return o.defaultValue;
}, qe = async (o, t) => (await o.runtime.configuration.getConstants()).find((n) => n.constantName === t), It = async (o, t) => {
  if (!t)
    return;
  const e = await qe(o, t.qualifiedName), r = await d(o, t), n = Ue(r);
  if (!e)
    return n;
  if (!e.isPrivate)
    return e.value || void 0;
}, g = (o) => {
  var t;
  return ((t = o == null ? void 0 : o.type) == null ? void 0 : t.$Type) === "DataTypes$StringType";
}, d = async (o, t) => {
  if (t)
    try {
      const e = await o.app.model.constants.loadAll((r) => r.$ID === t.documentId);
      return e[0] && e[0].name === t.qualifiedName.split(".")[1] ? e[0] : void 0;
    } catch {
      return;
    }
}, Qe = (o) => ({
  check: async (t) => {
    const e = await Ve(o, t), r = await Ke(o, t);
    return {
      errors: [...e.errors, ...r.errors],
      dependentElementIds: [...e.dependentElementIds, ...r.dependentElementIds]
    };
  },
  reservedErrorCodes: De
});
async function Ve(o, t) {
  const e = [], r = [];
  if (!t.endpoint)
    return e.push({
      errorCode: _,
      errorDescription: "Endpoint is required for a consumed MCP service.",
      severity: "error",
      elementText: "Endpoint"
    }), { errors: e, dependentElementIds: r };
  r.push(t.endpoint.documentId);
  const n = await d(o, t.endpoint);
  return n ? n.excluded ? e.push({
    errorCode: ee,
    errorDescription: `The constant ${t.endpoint.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Endpoint"
  }) : g(n) || e.push({
    errorCode: $,
    errorDescription: `The constant ${t.endpoint.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Endpoint"
  }) : e.push({
    errorCode: Z,
    errorDescription: `The constant ${t.endpoint.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Endpoint"
  }), { errors: e, dependentElementIds: r };
}
async function Ke(o, t) {
  var s;
  const e = [], r = [];
  if (!t.authenticationMicroflow)
    return { errors: e, dependentElementIds: r };
  r.push(t.authenticationMicroflow.documentId);
  const n = await C(
    o,
    t.authenticationMicroflow
  );
  return n ? n.excluded ? (e.push({
    errorCode: re,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r }) : (((s = n.objectCollection.objects) == null ? void 0 : s.filter((i) => i.$Type === "Microflows$MicroflowParameterObject").length) !== 0 && e.push({
    errorCode: ne,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} cannot have input parameters.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), (n.microflowReturnType.$Type !== "DataTypes$ListType" || n.microflowReturnType.entity !== T.HttpHeader) && e.push({
    errorCode: oe,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} must return a list of System.HttpHeader objects.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r }) : (e.push({
    errorCode: te,
    errorDescription: `Microflow ${t.authenticationMicroflow.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Authentication microflow"
  }), { errors: e, dependentElementIds: r });
}
const Ye = (o) => ({
  check: async (t) => {
    const e = await ze(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: ye
});
async function ze(o, t) {
  const e = [], r = [], n = t.providerFields;
  if (!n.key)
    return e.push({
      errorCode: se,
      errorDescription: "Key is required for a Mendix Cloud knowledge base.",
      severity: "error",
      elementText: "Knowledge base key"
    }), { errors: e, dependentElementIds: r };
  r.push(n.key.documentId);
  const s = await d(o, n.key);
  return s ? s.excluded ? e.push({
    errorCode: ce,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : g(s) || e.push({
    errorCode: ae,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Knowledge base key"
  }) : e.push({
    errorCode: ie,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Knowledge base key"
  }), { errors: e, dependentElementIds: r };
}
const Xe = (o) => ({
  check: async (t) => {
    const e = await Fe(o, t);
    return {
      errors: [...e.errors],
      dependentElementIds: [...e.dependentElementIds]
    };
  },
  reservedErrorCodes: Te
});
async function Fe(o, t) {
  const e = [], r = [], n = t.providerFields;
  if (!n.key)
    return e.push({
      errorCode: H,
      errorDescription: "Key is required for a Mendix Cloud model.",
      severity: "error",
      elementText: "Model key"
    }), { errors: e, dependentElementIds: r };
  r.push(n.key.documentId);
  const s = await d(o, n.key);
  return s ? s.excluded ? e.push({
    errorCode: W,
    errorDescription: `The constant ${n.key.qualifiedName} is excluded from the project and cannot be used.`,
    severity: "error",
    elementText: "Model key"
  }) : g(s) || e.push({
    errorCode: j,
    errorDescription: `The constant ${n.key.qualifiedName} must be of type string.`,
    severity: "error",
    elementText: "Model key"
  }) : e.push({
    errorCode: J,
    errorDescription: `The constant ${n.key.qualifiedName} could not be found. Please make sure it exists and is correctly referenced.`,
    severity: "error",
    elementText: "Model key"
  }), { errors: e, dependentElementIds: r };
}
const He = ["v2025_03_26", "v2024_11_05"], Je = He[0];
function Mt() {
  return {
    $ID: "",
    name: "",
    excluded: !1,
    documentType: u,
    contents: me()
  };
}
function me() {
  return {
    description: "",
    systemPrompt: "",
    userPrompt: "",
    usageType: "Task",
    variables: [],
    tools: [],
    knowledgebaseTools: []
  };
}
function je() {
  return {
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: We()
  };
}
const We = () => ({
  environment: "",
  deepLinkURL: "",
  keyId: "",
  keyName: "",
  resourceName: ""
});
function _e() {
  return {
    protocolVersion: Je
  };
}
function Ze() {
  return {
    name: "",
    provider: "MxCloudGenAI",
    // Preselect MxCloudGenAI as default provider
    providerFields: $e()
  };
}
const $e = () => ({
  environment: "",
  deepLinkURL: "",
  keyId: "",
  keyName: "",
  modelDisplayName: "",
  modelName: ""
});
async function et(o, t) {
  try {
    o.app.projectChanges.addEventListener("elementsRenamed", async ({ elements: e }) => {
      await nt(o, e), await rt(o, e), await it(o, e), await st(o, e);
    });
  } catch (e) {
    t.error("Failed to set up elementsRenamed event listener", { error: e });
  }
}
function tt(o, t, e, r, n) {
  o.qualifiedName = t, e.app.model.customBlobDocuments.updateDocumentContent(r, n);
}
function ot(o, t, e) {
  const r = t.find((s) => s.documentType === we);
  if (r) {
    const [s, i] = o.qualifiedName.split(".");
    if (r.oldName.qualifiedName === s)
      return `${r.newName.qualifiedName}.${i}`;
  }
  const n = t.find((s) => s.oldName.qualifiedName !== o.qualifiedName ? !1 : e ? e.includes(s.documentType) : !0);
  return n == null ? void 0 : n.newName.qualifiedName;
}
function c(o, t, e, r, n) {
  const s = ot(e, r, n);
  s && tt(e, s, o, t.$ID, t.contents);
}
async function nt(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(u);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document) {
      if (n.document.contents.model && c(o, n.document, n.document.contents.model, t, [
        m
      ]), n.document.contents.entity && c(o, n.document, n.document.contents.entity, t, [
        Re
      ]), n.document.contents.tools)
        for (const s of n.document.contents.tools)
          c(o, n.document, s.document, t, [
            le,
            E
          ]);
      if (n.document.contents.knowledgebaseTools)
        for (const s of n.document.contents.knowledgebaseTools)
          c(o, n.document, s.document, t, [
            f
          ]);
    }
  }
}
async function rt(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(m);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const s = n.document.contents.providerFields;
      if (!s.key)
        continue;
      c(o, n.document, s.key, t, [y]);
    }
  }
}
async function st(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(f);
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    if ("document" in n && n.document && n.document.contents.provider === "MxCloudGenAI") {
      const s = n.document.contents.providerFields;
      if (!s.key)
        continue;
      c(o, n.document, s.key, t, [y]);
    }
  }
}
async function it(o, t) {
  const e = await o.app.model.customBlobDocuments.getDocumentsOfType(
    E
  );
  for (const r of e) {
    const n = await o.app.model.customBlobDocuments.getDocumentById(r.id);
    "document" in n && n.document && n.document.contents.endpoint && c(o, n.document, n.document.contents.endpoint, t, [
      y
    ]);
  }
}
const Nt = "extension/agent-editor", u = "agenteditor.agent", m = "agenteditor.model", E = "agenteditor.consumedMCPService", f = "agenteditor.knowledgebase";
class at {
  async loaded(t) {
    const e = Ee(t);
    try {
      if (await e.app.model.customBlobDocuments.registerDocumentType({
        type: u,
        readableTypeName: "Agent",
        defaultContent: me(),
        consistencyCheckRegistration: Ne(e),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: m,
        readableTypeName: "Model",
        defaultContent: je(),
        consistencyCheckRegistration: Xe(e),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: E,
        readableTypeName: "Consumed MCP service",
        defaultContent: _e(),
        consistencyCheckRegistration: Qe(e),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), await e.app.model.customBlobDocuments.registerDocumentType({
        type: f,
        readableTypeName: "Knowledge base",
        defaultContent: Ze(),
        consistencyCheckRegistration: Ye(e),
        serializationCallback: async (r) => JSON.stringify(r, null, 2)
      }), t.runMode === "ui") {
        const r = w(t), { createStudioProLogger: n } = await import("./logger-Bof2Evv1.js"), s = n(r);
        et(r, s);
        let i = !1;
        r.runtime.controller.addEventListener("connectionChanged", (a) => {
          i = a.isConnected, r.ui.messagePassing.sendMessage({
            type: O.ConnectionChanged,
            isConnected: a.isConnected
          });
        }), r.ui.messagePassing.addMessageHandler(
          async ({ messageId: a, message: l }) => {
            l.type === O.GetConnectionState && await r.ui.messagePassing.sendResponse(a, {
              isConnected: i
            });
          }
        ), await r.ui.editors.registerEditorForCustomDocument({
          documentType: u,
          editorKind: "tab",
          editorEntryPoint: "agentEdit",
          iconLight: h,
          iconDark: h
        }), await r.ui.editors.registerEditorForCustomDocument({
          documentType: m,
          editorKind: "tab",
          editorEntryPoint: "modelEdit",
          iconLight: M,
          iconDark: M
        }), await r.ui.editors.registerEditorForCustomDocument({
          documentType: E,
          editorKind: "tab",
          editorEntryPoint: "consumedMCPServiceEdit",
          iconLight: N,
          iconDark: N
        }), await r.ui.editors.registerEditorForCustomDocument({
          documentType: f,
          editorKind: "tab",
          editorEntryPoint: "knowledgebaseEdit",
          iconLight: I,
          iconDark: I
        });
      }
    } catch (r) {
      if (t.runMode === "ui") {
        const n = w(t), { createStudioProLogger: s } = await import("./logger-Bof2Evv1.js");
        s(n).error("Error during extension initialization:", r), await n.ui.messageBoxes.show(
          "error",
          `Error during extension initialization: ${r.message}`
        );
      }
      throw r;
    }
  }
}
const Bt = new at();
export {
  Tt as A,
  g as B,
  T as C,
  dt as D,
  qe as E,
  Ue as F,
  yt as G,
  Dt as H,
  Oe as I,
  E as J,
  Rt as K,
  f as L,
  Et as M,
  Ot as N,
  wt as O,
  Ct as P,
  u as Q,
  O as R,
  Bt as S,
  pe as T,
  fe as U,
  ft as V,
  Ae as a,
  h as b,
  lt as c,
  A as d,
  N as e,
  M as f,
  D as g,
  Nt as h,
  ge as i,
  pt as j,
  I as k,
  Mt as l,
  m,
  We as n,
  je as o,
  It as p,
  ht as q,
  ut as r,
  C as s,
  He as t,
  gt as u,
  _e as v,
  $e as w,
  Ze as x,
  mt as y,
  d as z
};
