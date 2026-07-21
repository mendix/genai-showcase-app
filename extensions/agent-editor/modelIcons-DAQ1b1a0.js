import { getComponentFramework as i } from "@mendix/component-framework";
function E(A) {
  const n = i(A);
  return {
    network: {
      httpListener: n.getApi("mendix.HttpListenerApi")
    },
    analytics: n.getApi("mendix.AnalyticsApi")
  };
}
const a = "agenteditor/settings.json", d = "onboardingView", C = "Get Started", l = {
  AgentEditor: { id: "agent-editor", caption: "Agent Editor" },
  Onboarding: { id: "agent-editor.onboarding", caption: "Onboarding" },
  Compatibility: { id: "agent-editor.compatibility", caption: "Compatibility" }
}, u = {
  CallingTheAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/#calling-the-agent",
  CreateFirstAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/",
  Feedback: "https://forms.office.com/Pages/ResponsePage.aspx?id=zTuuOHmV1E-t2rQuFJXVWr6T473xSWFBjtAtbbq1JPpUNE5NTjRRUkZFWVNKMU1OTU9BTFdJS01NTi4u",
  GenAIConcepts: "https://docs.mendix.com/agents/get-started/",
  MxAcademy: "https://docs.mendix.com/agents/#getting-started",
  MxCloudGenAIPortal: "https://docs.mendix.com/agents/mx-cloud-genai/Navigate-MxGenAI/",
  MxCloudGenAIResourcePacks: "https://docs.mendix.com/agents/mx-cloud-genai/resource-packs/",
  Newsletter: "https://forms.office.com/pages/responsepage.aspx?id=jcfjtDuO2Ea8VlVA2iO6Tch-n5LSBBxDiaKK50UnnwhUQTQ1VEFMTlZBQ0VYVlhZR0ZZWUUzT1NCNC4u&route=shorturl"
};
function s() {
  return {
    shown: !1,
    version: ""
  };
}
async function B(A) {
  try {
    const e = (await A.app.model.modules.getModules()).find((t) => t.name === "AgentEditor");
    if (e?.appStoreVersion)
      return e.appStoreVersion;
  } catch {
  }
  return "2.1.0";
}
function g() {
  return {};
}
async function r(A) {
  let n = "";
  try {
    n = await A.app.files.getFile(a) || "";
  } catch {
  }
  const e = n.trim();
  if (e !== "")
    try {
      return JSON.parse(e);
    } catch {
    }
  const t = g();
  return await o(A, t), t;
}
async function o(A, n) {
  await A.app.files.putFile(a, JSON.stringify(n, null, 2));
}
function Q(A, n) {
  return A.onboarding?.shown !== !0 || A.onboarding?.version !== n;
}
async function c(A, n) {
  const e = await r(A), t = {
    ...e,
    onboarding: {
      ...s(),
      ...e.onboarding,
      ...n
    }
  };
  await o(A, t);
}
async function p(A, n) {
  await c(A, { shown: !0, version: n });
}
const w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA5RJREFUeAHtneFx2zAMhV87gUfgCN6g3KDdoNqg3cDeIO0EdidoMoG1gbOBskGygWrUUi5xLRKkRUkl33eHP6FIW4AIgCAVA4QQQgghhBBCCCGkFD4gPS3m++zF8xFpWUW2FUNqA6wdbQZkVgNYkOQGsI62zyBJMTgH4CF5BuNA0hnw1dMuyv8OkgRzkgbuGcBZkJA9/Mrv5Q5kVMSttIFCVzQS4vfbSPHFDOLB9+T/6IQzYWQkiIofdym26a5bwR+cd+AqWYUoc4NzJuNTvnnTzyj7bEBDvEMULqUFcRMH+JXYp5nXyhFrZX+R391nWhScsrYRMqT8HmlrIscujlAFXbqdIQzijFAcIcqRTCfEVazgz46yNUCKWlCMgop8qkOgC5qZmEApivUFYW0mVLwBBPHVFueU8B46Rd2ahso1dfeZa7By+g5zki38LuQZ/y7ENH1kbCpcgYG//CwK15YiQrMo0uErxt3BXzOaohiXdVypEBdU265valaOz89m1i15Q2bt+A4GGRGyst1hOqzje3xBRsh01qSZDaZ98raYfxa+I9WxlJeT/FRc9+skT5iOT4627A6KaWaBwXSs4F97ZJf+HjB8w/eYlgrLSQZeSX029MHRVmNavimuyc4NudI+i+mw0GdlFhmxlIVPA70BDsiMoRudiiUvDLPHYDgTaxxtlxVcEoGB2/VUcM8O6cuqbCSiuCPcyu05OK47gkYIxqf8axtErgXjEXRHagz8Gc+1AOsL1A1oBC+iRF/pY+vov/X0fQazo6tYuP14L3vFWHvFOA34iu3rC34axWuV37NXjimxoUIBQVpu0OC8YRJyMlvjdobYBozfdt9J+lhkdnymvUFu9dmamOKT/57YG68xTtZiEH+EvkgDpMpUKiQ6w5p6P2BqXjoZm/5QWXHETn15Wg1ux0CfadEFgUE4Cf3LgRbnVK9GmBI2CGcTMP7bE9ySKhsUsjaoTvIInZJ20LNTjlnjrPTiq6UWugxFYwSN8muwFHEVjc/eOPpvkDamFIEBy9GzYzD+hgx3xQLx7Yod3lzrmjFU/g34XocSt1OBbicpBu6jJw10borcAA9mLYAD9MpvQEbHQm8AC5IEzSw4YmJy2w9w8aC4RvNaFYlE88oUc/7EuNxQjRkoyQUJS3pl6i+lGeDJ0VZjBkozwKOjLcVmPrlgcf+so8SfkmoH/s6f1SKEEEIIIYQQQgghSfkD15oo7yWpvjEAAAAASUVORK5CYII=", h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADFElEQVRYCe1WzW7TQBCeTVLoj5Ec0d7NG7RPQPoGFuVAEVJboaKemvQJ2jxBXU6IgupeaA608hvEPEHzBvhOpEYiIYjGWb5xbNeGtWP1hshK9s7OfvPj2ZnxEs3GLAL/ewRE0QCYZkMvLf6oCylrkOFHNTpS0MnVp1NbtaniFXLAfLFnlIXfhgJDpUTB8+Zkeb3Veucp9lKsQg5sbO5+hZRBJDwhxzujn1rHcaxeShMWG5uvTaLyMZEEljx/eLvmOPZfuKRcKblQ0c9e7m6Db7Bxf7i49rn1wVUZZ9nLi4+O//DXGmOxNCqLDxrMzxtTHQCgHio4yDKcNODYdo+jxDwp5dPknoqe6oCUtMqClxfvHZUCFW80P+qE/JpqP8mrJBdMF8z2QGy53pdMaOK26lnVXsDEi6OAvImWuXPKgUm2D9ok+czzx3Ljew24YPSpwlFyJ6v0G44wKrM8U0dwV2qc7XLdHy5VLy9OBT9ptUgzElsxT4rDmFYTq0LSGVfTC5R0EhIr5mxnUJTteQm3vD84JCGPkGYIe6BCJymOum+XmknlEZ1XnnEEpmW70ZA6hx3n3p4Yh3ohmkLQQWAIDq3U+2fB0USWwzmvPGMHpmV7Xw5u8JVt6Kzxl6Pl7nQtzfpmaTaCwE70JNE2Y6LkDO0HU1Z5xg4kwdNpZACRHuHkuHwDp6Jl5qwqz8IOdE80WJXrQozPYQFnTseP94dbK/v4QQnfxnno8MpljCaWqiovOAp/8lNlyJumua1n9e+u9cgFxMU5ewj1IQxbMvhyxEPIJvaPsE9dfhUcyQi4LFPR5rmmc0doyAUIxyB0mLcj43mCk2oAQlAnwsUOoO6/MFP6/hlHIQJkzvjiaE8KeR7RWTN3WKIS/pSwMaaTCBc7gASx4JqHDaO8MHe9sfnGjECqeURxv6fwaFSwoLU/f7VXKy8Mrlk327hq3V1YRFJq0orHKLXgf57cStGqzsiAsO2msOmFwEWllLqoxBFgoIMbDP56T9ATdtBgOmnh+6/wlS6OuMn3iSK3pPtbmknOIvAvRuA3fQBEYKnukL0AAAAASUVORK5CYII=", I = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACi0lEQVRYCe1XvW4aQRCe2QMLpQl+A1KlSYGb1PgNHFAkoDEoAqUDP4HxE4C7yBSGBiMlOLhLSZkqoYiU0n6DXJcIczf55swdPzYyiQ9ZSljpbmdmd2e+m2V3Poj+98aLCXidLyVdoTqxJEk4vjj+VzqLTcT9qGsddbvvrmZ9zAHI5Mr7RNKanRC+zIXe2Unb9xsA2Mu+TVjsXE4GjqNiNRbR+ov+tFffERoXhPlQ1xqmnfed5lDliL60WcY5JEGimI8+dE5qnjGkV/8m7bVM7g221FS8LSbaVfdmJsaeyhHXtGZsoYqORBsTh0nf8RSAENARhZV2P8BsP8mEmrxYKkwBqPYIbQNgk4FNBjYZePQMBMVo2SWYyZUuiWmAcfADPKQyH6Ns1yEn8AxR3You0akWM+fn9a6JRSooalr92uf3FLZVMpCA44IGQqnso08h+EcP1I2uBKbArlxgLGk9idYRvAaQtLVCYVsFAPyS3es0i45rDlQBiRiozq6LTKjBPB3Hxg0IVxOwJCK32I83d+G1MoCFdbfUfqtlg8YN/IEtsgLZt93VrwrgrrVztnS+VPC+nsnWgWt2TucmLFHCASASZyGPboF47iDWAE8qnStXl8QNzPeeAsEvnIW9r6LYL1tG0SLYsqdj34cGOoLbmHeh85TQgAMWjXFSag8iLRECUprJl34ghXGQ0WfrYkUzxNfunTW3FdN0CwTHDG1kuRXt19EMjfc9v0x933+wBbhMDnCev+I8V9P5so0z3A4rE1nQ8hG7FSapamD9g+IDCLZADelsqcCMG22NTYSK591myw9h+YL23799GT5/8bJt2N3GrZeAKYbn4Q1HE1/6GVl+hb3/9HCH/5KH30bx2On377S8AAAAAElFTkSuQmCC", x = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABUhJREFUeAHtms9vG0UUx9+bDXEQAsIZEJsDCAmk1jdzwrlViBb3gtxe6v4FNKJE5WT7AqilSvoX1FwSA4c65Ye4ZX1BQTnYCLjAwVt+3I2QSJ3E8/pm7ai1u7M/7PWPdf25OPLMxvu+82bmzXsDMGfOnDlPMAgRkMq+myak00KiSYjPw1iheyjb9cThgWVVrCaEZGABlNFIkAEDLwHBMkwBRFACOCrulX+wgz4TWoBU9owJsHAbEdMwnTSllMWfvvxuM0hnA0KQunDuEgpRQcDXYXpZ4sE589Kbr8Hfv/5e9escWIDUxXN5BFKqLkEMUB764huv/vvPb3/sefaDADjGExUgfjSJjpJea4IAH1LZd3IxNV6xjLxeeXXw9AC14KF4qjYtq/ygJA7+e0G3RXp6AKtXiLvxioPEMzldm1YAZ7tD3uNnAERxStemFcAZ/RmBd68VXZt+CgjxHjwBuAqgwlyOK2M/94PgKgAfaE7DTIHaQ5Jw/5JMmCEIoKJrc/eAGdj6ejEsXYtvJBh3CKG0V67YuvYFmGnQBimKXj10AtgQdxCbxyDO72/rR1+hmQLShjjTMX51f6tS9+vqKsDS0mIF4kuVpEgGMV6hPQ2+deHsLn+kITagTUScD/ymFOYp7SIoAXZEHARgd+dRvPXj1t0CDIBWgKcTRql1KPPTGxJ3R3z7bgmGwCchcjaHCJ4ZlQlQZcMLe+VvLYgA35wgrwV3+CMDk4ZghzgpG5XhJ/gGQomEcbnVknw4msD5oDu/F/8Xm1alErrqE+gngnRKZTMmotwdowiRurkXgStDHRGOC/zIaNJk3dGWUnjG7opaobEMCVhOfrxiw5AMUBpTCyPmI/SGKrSPNxOHCUvn5spg8az4gPMUaX5hlat4ZGci3g2wTtDeSX64UoKQDFQcVd4A0E4PLER3tI+Ojiv7X3+vjdhqNxppNAyuSAWNR8iWJIthhBi6PO6kz/gFnWIp4inXuIEN5u9/5hesc66h4jW3T0abn7kCMFheghMgFrXal4NMkUjuB/TT8ZAOS/ehGWQFV6NtCIPd3BntCIIv9oaWXPUTYSQChKH2eSODbDiOJOxmEVAmk2sr2gEIlRChq1l2c8qAwIeFBsmujWTh9a9CnSCVq+Nzxh0c6XkDTSEFr1Owpu0BAaD19zOAxgb/aXp04+wLFfFGuQQ+1D5tmCJh7Pr8v8iQ7fZq8qMVy63NNydI6xfzbLwKh02friZ7xm1az+Z9+sE4jVeonUTX5ilAx/iQpXHEgpcIv9y8p9pMGCNqmtU2Gq4Lq1aA7nwvwEC/yCJc4+f7UK4vuQ0mgTRcD3R6DzBwuGMwweNesGikYVIguVa73AsjV53RM2G4X0z3e4GBMLFyO2ruL7p7gIioNih7VadOHD9VaKYARfOiiP0XE6YuvTbzpbETSAVsLoxbgJFkdQIhhOupc6wC8H4cqFgRPWQn11623Fo0AmA0L0q9bsdpLt+rq6NAEnyha9PsAhSNAAJ7DkhSSHXVdszTgGwQsqRrdRUAPytb/GHBUL9LVf4/9qNfOcdSolswRpwM0Zo+J+AVCWqPkIEQkHP7uuMFNJa1QHLlyC89pr8n+MlWnSOXwURAPhb3jf4Jygs4SXEeRnwHoWP8KwW/ft5XZa9vb3Iw43nD4jFYNDa+4NVFuaTE9ioOO83caUrifGAA4xXBEiLXsiZILHHvt/WdOL29gFcczwlB7eafOYEQxRHZWV/UFPNKgfUTKifYFSLTGyrzlrmAVljD+6lt/JUGySU4DHleII4tOMjR7fNz5syZM8eDB99r8a6sPZZtAAAAAElFTkSuQmCC", G = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABH9JREFUeAHtV89vG1UQnnn71nacFm0rIYpUCfdEuSVHTrE4cCTOrSfi3ugBBCckLi0nxKnmL6g5cUxy4oJEInFGEQKK+jO9UKQGxU2aZhN73zAz7+3GTpzYKZHaQ59s73r93ptvvplv5hng9XjJA08yOanfSC5/82Vy3JxKJe0sT5/rwGkDSD78tmEwW4iqAO9+9ZlfjAjOub7NEIiA0NEHv7x/dnmcfQ2MO2LbdCaCvafP4dndB2yIvHFiw/wGuXWk74zo+rjbjgUgadxMAKOPwFhAW4HNP+6oYTEqLruMCuP6LKOp+s8byakBgAwaYJhvZgBsiTZ+/b0wWBiXV48/Mof8PUkjXnNaAMjYWWL7hDw9sphlCNv31tjb4LGwkRFKWHIWKMOPx9l7JABPv2lwCAiMYTAxQTRBT/+8yzkQvO8PAYFnw9H01MLoMIwEkEXVWRLDkvLCAHIsrMXOb7clNAULAoKv5DL+wmFgRpJ4MhsZhjFCgHPBsISAJBQQlTjUBp49fDSYAzmYghmY/18Akiu3amjMrBj2IBAJLUkeAKth6859T7kY67HXDtAbB58bDuqjwnAsAGa4HowjeQZA1OCTsUQdzgM2qLlXAMlUCaCP+dZGveYLA2C+50m9Zuo1DzgRJQQKhNVA8QpbWpGYc0KS62lh8oCEkZ5KcvaFAAj9bKyex19VgB5EkCNgXG6zx0sca0CmHzwD6CWpqhRW6lO3HiYnBtDFeEa89t4a1EJv9B58OCLoOrPc69q2ss20+0R0IRTsvTyTXJicmD8xAIiiJrKRPPMD/Qi5HA0up4vX1lbnuPNltOIVwG6rNEHlSSpPJ/eNEwGoXPmhxtbqThKQvecP8smHIQR8Neb7fD7bXNQk1FpARYGCfXkeGQY7FFbJzLAlvmGPpGMb5iG+wB9Wn8kvUXyxVv10swlZCo9/Wse3Z87LSo07aPBlA17uQom2ZQnDd2MBQBM11QOxDE42gqh8AW35Yv+066SXGLo7ZUifPIfy+Qp64B6DFgndByVHGsMAHDqQVJoLNb48QPXUawpDiS9X32MQ7xxYwYm2uwWTb25BcvmN0AvCGgpTwjML3XOrVy8NnJbMEPdnpNxDXnjkarz2d3duQze9d2CBYYWWYPtxVzrifm9woSupEjQRoZfZQ2o4DMCYZl71aL8HCLMotSDdvb/I7n09uCbm36uQ/pvmEiyqotIfAGVD1GAG6f+xJgyEuh8k6IsQymGEJci9YWm9dfbGAAiuDWgnYPvvHW80nJa0UflqSPKcz4r12s1BNQwyEINILy80XvemqP9ajiuOJcfDg4AvijCYEuxusNG9nnTBACTIUaqjVkWgiRiaRwKgKJrP469HsFB2uf2R74RmqdOeK5JovXWmxbOu6lqWKJkq7G12g/4p74j9TYrjAbNHAwB45L0Pxy+jXZDyDhgZ14YD40nrTJunTxtj1zCugCnFfceyvCh5FZDHtdq//rAMP+E8GDLkD0enNXfkH47kc0qS5J+k8lYKx42/rl1ag9fjVRr/Afvj2qvJO6V+AAAAAElFTkSuQmCC";
export {
  l as M,
  u as O,
  I as a,
  G as b,
  x as c,
  C as d,
  d as e,
  w as f,
  B as g,
  p as h,
  h as m,
  E as o,
  r,
  Q as s
};
