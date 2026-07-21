import { getComponentFramework as g } from "@mendix/component-framework";
function E(A) {
  const n = g(A);
  return {
    network: {
      httpListener: n.getApi("mendix.HttpListenerApi")
    },
    analytics: n.getApi("mendix.AnalyticsApi")
  };
}
const a = "agenteditor/settings.json", l = "onboardingView", m = "Get Started", Q = {
  AgentEditor: { id: "agent-editor", caption: "Agent Editor" },
  Onboarding: { id: "agent-editor.onboarding", caption: "Onboarding" },
  Compatibility: { id: "agent-editor.compatibility", caption: "Compatibility" }
}, B = {
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
async function C(A) {
  try {
    const t = (await A.app.model.modules.getModules()).find((e) => e.name === "AgentEditor");
    if (t?.appStoreVersion)
      return t.appStoreVersion;
  } catch {
  }
  return "2.1.0";
}
function i() {
  return {};
}
async function r(A) {
  let n = "";
  try {
    n = await A.app.files.getFile(a) || "";
  } catch {
  }
  const t = n.trim();
  if (t !== "")
    try {
      return JSON.parse(t);
    } catch {
    }
  const e = i();
  return await o(A, e), e;
}
async function o(A, n) {
  await A.app.files.putFile(a, JSON.stringify(n, null, 2));
}
function w(A, n) {
  return A.onboarding?.shown !== !0 || A.onboarding?.version !== n;
}
async function d(A, n) {
  const t = await r(A), e = {
    ...t,
    onboarding: {
      ...s(),
      ...t.onboarding,
      ...n
    }
  };
  await o(A, e);
}
async function p(A, n) {
  await d(A, { shown: !0, version: n });
}
const u = "data:image/png;base64,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", G = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADFElEQVRYCe1WzW7TQBCeTVLoj5Ec0d7NG7RPQPoGFuVAEVJboaKemvQJ2jxBXU6IgupeaA608hvEPEHzBvhOpEYiIYjGWb5xbNeGtWP1hshK9s7OfvPj2ZnxEs3GLAL/ewRE0QCYZkMvLf6oCylrkOFHNTpS0MnVp1NbtaniFXLAfLFnlIXfhgJDpUTB8+Zkeb3Veucp9lKsQg5sbO5+hZRBJDwhxzujn1rHcaxeShMWG5uvTaLyMZEEljx/eLvmOPZfuKRcKblQ0c9e7m6Db7Bxf7i49rn1wVUZZ9nLi4+O//DXGmOxNCqLDxrMzxtTHQCgHio4yDKcNODYdo+jxDwp5dPknoqe6oCUtMqClxfvHZUCFW80P+qE/JpqP8mrJBdMF8z2QGy53pdMaOK26lnVXsDEi6OAvImWuXPKgUm2D9ok+czzx3Ljew24YPSpwlFyJ6v0G44wKrM8U0dwV2qc7XLdHy5VLy9OBT9ptUgzElsxT4rDmFYTq0LSGVfTC5R0EhIr5mxnUJTteQm3vD84JCGPkGYIe6BCJymOum+XmknlEZ1XnnEEpmW70ZA6hx3n3p4Yh3ohmkLQQWAIDq3U+2fB0USWwzmvPGMHpmV7Xw5u8JVt6Kzxl6Pl7nQtzfpmaTaCwE70JNE2Y6LkDO0HU1Z5xg4kwdNpZACRHuHkuHwDp6Jl5qwqz8IOdE80WJXrQozPYQFnTseP94dbK/v4QQnfxnno8MpljCaWqiovOAp/8lNlyJumua1n9e+u9cgFxMU5ewj1IQxbMvhyxEPIJvaPsE9dfhUcyQi4LFPR5rmmc0doyAUIxyB0mLcj43mCk2oAQlAnwsUOoO6/MFP6/hlHIQJkzvjiaE8KeR7RWTN3WKIS/pSwMaaTCBc7gASx4JqHDaO8MHe9sfnGjECqeURxv6fwaFSwoLU/f7VXKy8Mrlk327hq3V1YRFJq0orHKLXgf57cStGqzsiAsO2msOmFwEWllLqoxBFgoIMbDP56T9ATdtBgOmnh+6/wlS6OuMn3iSK3pPtbmknOIvAvRuA3fQBEYKnukL0AAAAASUVORK5CYII=", S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACi0lEQVRYCe1XvW4aQRCe2QMLpQl+A1KlSYGb1PgNHFAkoDEoAqUDP4HxE4C7yBSGBiMlOLhLSZkqoYiU0n6DXJcIczf55swdPzYyiQ9ZSljpbmdmd2e+m2V3Poj+98aLCXidLyVdoTqxJEk4vjj+VzqLTcT9qGsddbvvrmZ9zAHI5Mr7RNKanRC+zIXe2Unb9xsA2Mu+TVjsXE4GjqNiNRbR+ov+tFffERoXhPlQ1xqmnfed5lDliL60WcY5JEGimI8+dE5qnjGkV/8m7bVM7g221FS8LSbaVfdmJsaeyhHXtGZsoYqORBsTh0nf8RSAENARhZV2P8BsP8mEmrxYKkwBqPYIbQNgk4FNBjYZePQMBMVo2SWYyZUuiWmAcfADPKQyH6Ns1yEn8AxR3You0akWM+fn9a6JRSooalr92uf3FLZVMpCA44IGQqnso08h+EcP1I2uBKbArlxgLGk9idYRvAaQtLVCYVsFAPyS3es0i45rDlQBiRiozq6LTKjBPB3Hxg0IVxOwJCK32I83d+G1MoCFdbfUfqtlg8YN/IEtsgLZt93VrwrgrrVztnS+VPC+nsnWgWt2TucmLFHCASASZyGPboF47iDWAE8qnStXl8QNzPeeAsEvnIW9r6LYL1tG0SLYsqdj34cGOoLbmHeh85TQgAMWjXFSag8iLRECUprJl34ghXGQ0WfrYkUzxNfunTW3FdN0CwTHDG1kuRXt19EMjfc9v0x933+wBbhMDnCev+I8V9P5so0z3A4rE1nQ8hG7FSapamD9g+IDCLZADelsqcCMG22NTYSK591myw9h+YL23799GT5/8bJt2N3GrZeAKYbn4Q1HE1/6GVl+hb3/9HCH/5KH30bx2On377S8AAAAAElFTkSuQmCC", h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABUhJREFUeAHtms9vG0UUx9+bDXEQAsIZEJsDCAmk1jdzwrlViBb3gtxe6v4FNKJE5WT7AqilSvoX1FwSA4c65Ye4ZX1BQTnYCLjAwVt+3I2QSJ3E8/pm7ai1u7M/7PWPdf25OPLMxvu+82bmzXsDMGfOnDlPMAgRkMq+myak00KiSYjPw1iheyjb9cThgWVVrCaEZGABlNFIkAEDLwHBMkwBRFACOCrulX+wgz4TWoBU9owJsHAbEdMwnTSllMWfvvxuM0hnA0KQunDuEgpRQcDXYXpZ4sE589Kbr8Hfv/5e9escWIDUxXN5BFKqLkEMUB764huv/vvPb3/sefaDADjGExUgfjSJjpJea4IAH1LZd3IxNV6xjLxeeXXw9AC14KF4qjYtq/ygJA7+e0G3RXp6AKtXiLvxioPEMzldm1YAZ7tD3uNnAERxStemFcAZ/RmBd68VXZt+CgjxHjwBuAqgwlyOK2M/94PgKgAfaE7DTIHaQ5Jw/5JMmCEIoKJrc/eAGdj6ejEsXYtvJBh3CKG0V67YuvYFmGnQBimKXj10AtgQdxCbxyDO72/rR1+hmQLShjjTMX51f6tS9+vqKsDS0mIF4kuVpEgGMV6hPQ2+deHsLn+kITagTUScD/ymFOYp7SIoAXZEHARgd+dRvPXj1t0CDIBWgKcTRql1KPPTGxJ3R3z7bgmGwCchcjaHCJ4ZlQlQZcMLe+VvLYgA35wgrwV3+CMDk4ZghzgpG5XhJ/gGQomEcbnVknw4msD5oDu/F/8Xm1alErrqE+gngnRKZTMmotwdowiRurkXgStDHRGOC/zIaNJk3dGWUnjG7opaobEMCVhOfrxiw5AMUBpTCyPmI/SGKrSPNxOHCUvn5spg8az4gPMUaX5hlat4ZGci3g2wTtDeSX64UoKQDFQcVd4A0E4PLER3tI+Ojiv7X3+vjdhqNxppNAyuSAWNR8iWJIthhBi6PO6kz/gFnWIp4inXuIEN5u9/5hesc66h4jW3T0abn7kCMFheghMgFrXal4NMkUjuB/TT8ZAOS/ehGWQFV6NtCIPd3BntCIIv9oaWXPUTYSQChKH2eSODbDiOJOxmEVAmk2sr2gEIlRChq1l2c8qAwIeFBsmujWTh9a9CnSCVq+Nzxh0c6XkDTSEFr1Owpu0BAaD19zOAxgb/aXp04+wLFfFGuQQ+1D5tmCJh7Pr8v8iQ7fZq8qMVy63NNydI6xfzbLwKh02friZ7xm1az+Z9+sE4jVeonUTX5ilAx/iQpXHEgpcIv9y8p9pMGCNqmtU2Gq4Lq1aA7nwvwEC/yCJc4+f7UK4vuQ0mgTRcD3R6DzBwuGMwweNesGikYVIguVa73AsjV53RM2G4X0z3e4GBMLFyO2ruL7p7gIioNih7VadOHD9VaKYARfOiiP0XE6YuvTbzpbETSAVsLoxbgJFkdQIhhOupc6wC8H4cqFgRPWQn11623Fo0AmA0L0q9bsdpLt+rq6NAEnyha9PsAhSNAAJ7DkhSSHXVdszTgGwQsqRrdRUAPytb/GHBUL9LVf4/9qNfOcdSolswRpwM0Zo+J+AVCWqPkIEQkHP7uuMFNJa1QHLlyC89pr8n+MlWnSOXwURAPhb3jf4Jygs4SXEeRnwHoWP8KwW/ft5XZa9vb3Iw43nD4jFYNDa+4NVFuaTE9ioOO83caUrifGAA4xXBEiLXsiZILHHvt/WdOL29gFcczwlB7eafOYEQxRHZWV/UFPNKgfUTKifYFSLTGyrzlrmAVljD+6lt/JUGySU4DHleII4tOMjR7fNz5syZM8eDB99r8a6sPZZtAAAAAElFTkSuQmCC", x = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABH9JREFUeAHtV89vG1UQnnn71nacFm0rIYpUCfdEuSVHTrE4cCTOrSfi3ugBBCckLi0nxKnmL6g5cUxy4oJEInFGEQKK+jO9UKQGxU2aZhN73zAz7+3GTpzYKZHaQ59s73r93ptvvplv5hng9XjJA08yOanfSC5/82Vy3JxKJe0sT5/rwGkDSD78tmEwW4iqAO9+9ZlfjAjOub7NEIiA0NEHv7x/dnmcfQ2MO2LbdCaCvafP4dndB2yIvHFiw/wGuXWk74zo+rjbjgUgadxMAKOPwFhAW4HNP+6oYTEqLruMCuP6LKOp+s8byakBgAwaYJhvZgBsiTZ+/b0wWBiXV48/Mof8PUkjXnNaAMjYWWL7hDw9sphlCNv31tjb4LGwkRFKWHIWKMOPx9l7JABPv2lwCAiMYTAxQTRBT/+8yzkQvO8PAYFnw9H01MLoMIwEkEXVWRLDkvLCAHIsrMXOb7clNAULAoKv5DL+wmFgRpJ4MhsZhjFCgHPBsISAJBQQlTjUBp49fDSYAzmYghmY/18Akiu3amjMrBj2IBAJLUkeAKth6859T7kY67HXDtAbB58bDuqjwnAsAGa4HowjeQZA1OCTsUQdzgM2qLlXAMlUCaCP+dZGveYLA2C+50m9Zuo1DzgRJQQKhNVA8QpbWpGYc0KS62lh8oCEkZ5KcvaFAAj9bKyex19VgB5EkCNgXG6zx0sca0CmHzwD6CWpqhRW6lO3HiYnBtDFeEa89t4a1EJv9B58OCLoOrPc69q2ss20+0R0IRTsvTyTXJicmD8xAIiiJrKRPPMD/Qi5HA0up4vX1lbnuPNltOIVwG6rNEHlSSpPJ/eNEwGoXPmhxtbqThKQvecP8smHIQR8Neb7fD7bXNQk1FpARYGCfXkeGQY7FFbJzLAlvmGPpGMb5iG+wB9Wn8kvUXyxVv10swlZCo9/Wse3Z87LSo07aPBlA17uQom2ZQnDd2MBQBM11QOxDE42gqh8AW35Yv+066SXGLo7ZUifPIfy+Qp64B6DFgndByVHGsMAHDqQVJoLNb48QPXUawpDiS9X32MQ7xxYwYm2uwWTb25BcvmN0AvCGgpTwjML3XOrVy8NnJbMEPdnpNxDXnjkarz2d3duQze9d2CBYYWWYPtxVzrifm9woSupEjQRoZfZQ2o4DMCYZl71aL8HCLMotSDdvb/I7n09uCbm36uQ/pvmEiyqotIfAGVD1GAG6f+xJgyEuh8k6IsQymGEJci9YWm9dfbGAAiuDWgnYPvvHW80nJa0UflqSPKcz4r12s1BNQwyEINILy80XvemqP9ajiuOJcfDg4AvijCYEuxusNG9nnTBACTIUaqjVkWgiRiaRwKgKJrP469HsFB2uf2R74RmqdOeK5JovXWmxbOu6lqWKJkq7G12g/4p74j9TYrjAbNHAwB45L0Pxy+jXZDyDhgZ14YD40nrTJunTxtj1zCugCnFfceyvCh5FZDHtdq//rAMP+E8GDLkD0enNXfkH47kc0qS5J+k8lYKx42/rl1ag9fjVRr/Afvj2qvJO6V+AAAAAElFTkSuQmCC";
export {
  Q as M,
  B as O,
  S as a,
  x as b,
  h as c,
  m as d,
  l as e,
  u as f,
  C as g,
  p as h,
  G as m,
  E as o,
  r,
  w as s
};
