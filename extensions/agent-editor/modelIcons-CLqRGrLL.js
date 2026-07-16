import { getComponentFramework as s } from "@mendix/component-framework";
function m(A) {
  const n = s(A);
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
}, p = {
  CallingTheAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/#calling-the-agent",
  CreateFirstAgent: "https://docs.mendix.com/agents/how-to/create-agent-with-agent-editor/",
  Feedback: "https://forms.office.com/Pages/ResponsePage.aspx?id=zTuuOHmV1E-t2rQuFJXVWr6T473xSWFBjtAtbbq1JPpUNE5NTjRRUkZFWVNKMU1OTU9BTFdJS01NTi4u",
  GenAIConcepts: "https://docs.mendix.com/agents/get-started/",
  MxAcademy: "https://docs.mendix.com/agents/#getting-started",
  MxCloudGenAIPortal: "https://docs.mendix.com/agents/mx-cloud-genai/Navigate-MxGenAI/",
  MxCloudGenAIResourcePacks: "https://docs.mendix.com/agents/mx-cloud-genai/resource-packs/",
  Newsletter: "https://forms.office.com/pages/responsepage.aspx?id=jcfjtDuO2Ea8VlVA2iO6Tch-n5LSBBxDiaKK50UnnwhUQTQ1VEFMTlZBQ0VYVlhZR0ZZWUUzT1NCNC4u&route=shorturl"
};
function i() {
  return {
    shown: !1,
    version: ""
  };
}
async function w(A) {
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
function B(A, n) {
  return A.onboarding?.shown !== !0 || A.onboarding?.version !== n;
}
async function E(A, n) {
  const e = await r(A), t = {
    ...e,
    onboarding: {
      ...i(),
      ...e.onboarding,
      ...n
    }
  };
  await o(A, t);
}
async function u(A, n) {
  await E(A, { shown: !0, version: n });
}
const Q = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABLZJREFUeAHtmk1u20YUgN/jT4DGcqHAMtClfYLKJ4h8gkonSLTrpg5zgsonMNVFt1ZOEOUEUU9g3aBaFogFC4mLBOLP63uUFNDDn8gk44wafhvRM0Na8+b9UwA1NTU1NTU13ysIJWm9uKX439fDRulnPiQGlOAn5+OROtb8NTmmM6UE4PleWx17ZCXHdKaUAPjurjoUGNiBHaKwvTadmyOL7L9TphY+escL98kCdoDCGmCG5iBjqmnRo0vYEQoJoHX27++IxrPsFdRt/XbrwA5wbwFEG0MaxMcQcMYfU+XJFyIo0JytfQDbPKu2xaqNquNbWGieyIVPwZUsjU9ykjAK0DtnnzADDckVgMR0U8Iae3ZEYJXHprqGEHtzd28s14fO7XMiSLV/EQQE4RsjNGbv/mxMQRMyBaBmeCksCOHl3G2M4oMHzvsukiFCaObdrEvGWDAK4FTUXt28MHd/HMvc2i9oTyEBEFDzE3zKnJc5XvP/zQNYdyUJuhJ1V+cOzj4+Y2cpznAnUuJMAYiN+mgeE4Y9JHiVsqTJtv5aNrwZiOwfg1GKs1ywcxzKs+SZOlWMW38RqfyCMBhQFA3uIKlvFAZXJ69uHsc+Pu4vXNTSJO59Ei3nw4Bjn5rgTEk0gk1DefrLa7fhQgm+dr+h0MNaDmeDBBe5i5DOr939AZRglXzZN/Ex1rYnVRZahZzg6lRxnDXPIXBUdvOC5VsJR2qDfQQVUrga9HHZ54/UkzDROIcqQEwIgALoQIUUFoCoIRElooOc/j/uDzOoAgN+2Wqs1L8oQ0gTdQiD4A1UgDRc+KOTMtVZz1VCKQHYlp0oapa+XUmhk9NwAZPsyspsLdviOe22z3B1evLOLV9VatfDl9DHJ3wVzyk2hRXXF5/HWOoz7jOclA2J5XzAV0CaLomEKqRzTqP78SFZw4K6gJJoowFy8jZviE/2eXycI81w/sd+1F88OPvgIuKLu3dKqr3sF9UELTTg0Llpi9qrmxfVD4zGYPN3YPhyrdg9deXeopHhm2qAfGnx9mkdZtk8J1Snak4RFWUUvo37gw1F+o8PKoBIzZf2EZlBBwxTEppO+krpOBm9rIQqTwhrJhByPkLG1Lf8aZ55PJgAtugxRojNi9p/qXyOokVoDZI+IZ2s8GyBJojKi6efD/cn26xfn6rDneiplOc52pCLNmEwlCgf3H8T5NNM7i2KRhrAsd8wLtlUfvZXjuyLJmCtUmKnjB0/sBOkpgW3bQi4zEXqcj77NG3dOss7zfLm61T5NWQ1Xon+YrMYowkTD/Zmef7km4bBnD5jphCi0En220S2CKtSXHoR9ynHtcgEc8La1F8JITrBtDpBiGoFpF6R4kgLJygn5uHyJKXN1rZipa9cJzaP4SsPHxeuDLWrBg+d9yMiJTNEOhXtWL9zjE+Mr4d7PSiBNlFggweBY4P59E7pS3ipnpWoPZ98H0qi5W/6OLlp85ukq7w1/AL2uIreo3b9AEHsOeN1XESVjVctBSCYRk5PsKq2O2gsgPUJTxITnORU1nYHjQUQEUKyxU7Zb6SKoLUAfDNFA0yq9PdFemsAeDN1xAe/UgFoGQbj7PrP8Wtqampqamr05T85DgTD/OXLzgAAAABJRU5ErkJggg==", O = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADFElEQVRYCe1WzW7TQBCeTVLoj5Ec0d7NG7RPQPoGFuVAEVJboaKemvQJ2jxBXU6IgupeaA608hvEPEHzBvhOpEYiIYjGWb5xbNeGtWP1hshK9s7OfvPj2ZnxEs3GLAL/ewRE0QCYZkMvLf6oCylrkOFHNTpS0MnVp1NbtaniFXLAfLFnlIXfhgJDpUTB8+Zkeb3Veucp9lKsQg5sbO5+hZRBJDwhxzujn1rHcaxeShMWG5uvTaLyMZEEljx/eLvmOPZfuKRcKblQ0c9e7m6Db7Bxf7i49rn1wVUZZ9nLi4+O//DXGmOxNCqLDxrMzxtTHQCgHio4yDKcNODYdo+jxDwp5dPknoqe6oCUtMqClxfvHZUCFW80P+qE/JpqP8mrJBdMF8z2QGy53pdMaOK26lnVXsDEi6OAvImWuXPKgUm2D9ok+czzx3Ljew24YPSpwlFyJ6v0G44wKrM8U0dwV2qc7XLdHy5VLy9OBT9ptUgzElsxT4rDmFYTq0LSGVfTC5R0EhIr5mxnUJTteQm3vD84JCGPkGYIe6BCJymOum+XmknlEZ1XnnEEpmW70ZA6hx3n3p4Yh3ohmkLQQWAIDq3U+2fB0USWwzmvPGMHpmV7Xw5u8JVt6Kzxl6Pl7nQtzfpmaTaCwE70JNE2Y6LkDO0HU1Z5xg4kwdNpZACRHuHkuHwDp6Jl5qwqz8IOdE80WJXrQozPYQFnTseP94dbK/v4QQnfxnno8MpljCaWqiovOAp/8lNlyJumua1n9e+u9cgFxMU5ewj1IQxbMvhyxEPIJvaPsE9dfhUcyQi4LFPR5rmmc0doyAUIxyB0mLcj43mCk2oAQlAnwsUOoO6/MFP6/hlHIQJkzvjiaE8KeR7RWTN3WKIS/pSwMaaTCBc7gASx4JqHDaO8MHe9sfnGjECqeURxv6fwaFSwoLU/f7VXKy8Mrlk327hq3V1YRFJq0orHKLXgf57cStGqzsiAsO2msOmFwEWllLqoxBFgoIMbDP56T9ATdtBgOmnh+6/wlS6OuMn3iSK3pPtbmknOIvAvRuA3fQBEYKnukL0AAAAASUVORK5CYII=", D = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACi0lEQVRYCe1XvW4aQRCe2QMLpQl+A1KlSYGb1PgNHFAkoDEoAqUDP4HxE4C7yBSGBiMlOLhLSZkqoYiU0n6DXJcIczf55swdPzYyiQ9ZSljpbmdmd2e+m2V3Poj+98aLCXidLyVdoTqxJEk4vjj+VzqLTcT9qGsddbvvrmZ9zAHI5Mr7RNKanRC+zIXe2Unb9xsA2Mu+TVjsXE4GjqNiNRbR+ov+tFffERoXhPlQ1xqmnfed5lDliL60WcY5JEGimI8+dE5qnjGkV/8m7bVM7g221FS8LSbaVfdmJsaeyhHXtGZsoYqORBsTh0nf8RSAENARhZV2P8BsP8mEmrxYKkwBqPYIbQNgk4FNBjYZePQMBMVo2SWYyZUuiWmAcfADPKQyH6Ns1yEn8AxR3You0akWM+fn9a6JRSooalr92uf3FLZVMpCA44IGQqnso08h+EcP1I2uBKbArlxgLGk9idYRvAaQtLVCYVsFAPyS3es0i45rDlQBiRiozq6LTKjBPB3Hxg0IVxOwJCK32I83d+G1MoCFdbfUfqtlg8YN/IEtsgLZt93VrwrgrrVztnS+VPC+nsnWgWt2TucmLFHCASASZyGPboF47iDWAE8qnStXl8QNzPeeAsEvnIW9r6LYL1tG0SLYsqdj34cGOoLbmHeh85TQgAMWjXFSag8iLRECUprJl34ghXGQ0WfrYkUzxNfunTW3FdN0CwTHDG1kuRXt19EMjfc9v0x933+wBbhMDnCev+I8V9P5so0z3A4rE1nQ8hG7FSapamD9g+IDCLZADelsqcCMG22NTYSK591myw9h+YL23799GT5/8bJt2N3GrZeAKYbn4Q1HE1/6GVl+hb3/9HCH/5KH30bx2On377S8AAAAAElFTkSuQmCC", h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABUhJREFUeAHtms9vG0UUx9+bDXEQAsIZEJsDCAmk1jdzwrlViBb3gtxe6v4FNKJE5WT7AqilSvoX1FwSA4c65Ye4ZX1BQTnYCLjAwVt+3I2QSJ3E8/pm7ai1u7M/7PWPdf25OPLMxvu+82bmzXsDMGfOnDlPMAgRkMq+myak00KiSYjPw1iheyjb9cThgWVVrCaEZGABlNFIkAEDLwHBMkwBRFACOCrulX+wgz4TWoBU9owJsHAbEdMwnTSllMWfvvxuM0hnA0KQunDuEgpRQcDXYXpZ4sE589Kbr8Hfv/5e9escWIDUxXN5BFKqLkEMUB764huv/vvPb3/sefaDADjGExUgfjSJjpJea4IAH1LZd3IxNV6xjLxeeXXw9AC14KF4qjYtq/ygJA7+e0G3RXp6AKtXiLvxioPEMzldm1YAZ7tD3uNnAERxStemFcAZ/RmBd68VXZt+CgjxHjwBuAqgwlyOK2M/94PgKgAfaE7DTIHaQ5Jw/5JMmCEIoKJrc/eAGdj6ejEsXYtvJBh3CKG0V67YuvYFmGnQBimKXj10AtgQdxCbxyDO72/rR1+hmQLShjjTMX51f6tS9+vqKsDS0mIF4kuVpEgGMV6hPQ2+deHsLn+kITagTUScD/ymFOYp7SIoAXZEHARgd+dRvPXj1t0CDIBWgKcTRql1KPPTGxJ3R3z7bgmGwCchcjaHCJ4ZlQlQZcMLe+VvLYgA35wgrwV3+CMDk4ZghzgpG5XhJ/gGQomEcbnVknw4msD5oDu/F/8Xm1alErrqE+gngnRKZTMmotwdowiRurkXgStDHRGOC/zIaNJk3dGWUnjG7opaobEMCVhOfrxiw5AMUBpTCyPmI/SGKrSPNxOHCUvn5spg8az4gPMUaX5hlat4ZGci3g2wTtDeSX64UoKQDFQcVd4A0E4PLER3tI+Ojiv7X3+vjdhqNxppNAyuSAWNR8iWJIthhBi6PO6kz/gFnWIp4inXuIEN5u9/5hesc66h4jW3T0abn7kCMFheghMgFrXal4NMkUjuB/TT8ZAOS/ehGWQFV6NtCIPd3BntCIIv9oaWXPUTYSQChKH2eSODbDiOJOxmEVAmk2sr2gEIlRChq1l2c8qAwIeFBsmujWTh9a9CnSCVq+Nzxh0c6XkDTSEFr1Owpu0BAaD19zOAxgb/aXp04+wLFfFGuQQ+1D5tmCJh7Pr8v8iQ7fZq8qMVy63NNydI6xfzbLwKh02friZ7xm1az+Z9+sE4jVeonUTX5ilAx/iQpXHEgpcIv9y8p9pMGCNqmtU2Gq4Lq1aA7nwvwEC/yCJc4+f7UK4vuQ0mgTRcD3R6DzBwuGMwweNesGikYVIguVa73AsjV53RM2G4X0z3e4GBMLFyO2ruL7p7gIioNih7VadOHD9VaKYARfOiiP0XE6YuvTbzpbETSAVsLoxbgJFkdQIhhOupc6wC8H4cqFgRPWQn11623Fo0AmA0L0q9bsdpLt+rq6NAEnyha9PsAhSNAAJ7DkhSSHXVdszTgGwQsqRrdRUAPytb/GHBUL9LVf4/9qNfOcdSolswRpwM0Zo+J+AVCWqPkIEQkHP7uuMFNJa1QHLlyC89pr8n+MlWnSOXwURAPhb3jf4Jygs4SXEeRnwHoWP8KwW/ft5XZa9vb3Iw43nD4jFYNDa+4NVFuaTE9ioOO83caUrifGAA4xXBEiLXsiZILHHvt/WdOL29gFcczwlB7eafOYEQxRHZWV/UFPNKgfUTKifYFSLTGyrzlrmAVljD+6lt/JUGySU4DHleII4tOMjR7fNz5syZM8eDB99r8a6sPZZtAAAAAElFTkSuQmCC", N = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABH9JREFUeAHtV89vG1UQnnn71nacFm0rIYpUCfdEuSVHTrE4cCTOrSfi3ugBBCckLi0nxKnmL6g5cUxy4oJEInFGEQKK+jO9UKQGxU2aZhN73zAz7+3GTpzYKZHaQ59s73r93ptvvplv5hng9XjJA08yOanfSC5/82Vy3JxKJe0sT5/rwGkDSD78tmEwW4iqAO9+9ZlfjAjOub7NEIiA0NEHv7x/dnmcfQ2MO2LbdCaCvafP4dndB2yIvHFiw/wGuXWk74zo+rjbjgUgadxMAKOPwFhAW4HNP+6oYTEqLruMCuP6LKOp+s8byakBgAwaYJhvZgBsiTZ+/b0wWBiXV48/Mof8PUkjXnNaAMjYWWL7hDw9sphlCNv31tjb4LGwkRFKWHIWKMOPx9l7JABPv2lwCAiMYTAxQTRBT/+8yzkQvO8PAYFnw9H01MLoMIwEkEXVWRLDkvLCAHIsrMXOb7clNAULAoKv5DL+wmFgRpJ4MhsZhjFCgHPBsISAJBQQlTjUBp49fDSYAzmYghmY/18Akiu3amjMrBj2IBAJLUkeAKth6859T7kY67HXDtAbB58bDuqjwnAsAGa4HowjeQZA1OCTsUQdzgM2qLlXAMlUCaCP+dZGveYLA2C+50m9Zuo1DzgRJQQKhNVA8QpbWpGYc0KS62lh8oCEkZ5KcvaFAAj9bKyex19VgB5EkCNgXG6zx0sca0CmHzwD6CWpqhRW6lO3HiYnBtDFeEa89t4a1EJv9B58OCLoOrPc69q2ss20+0R0IRTsvTyTXJicmD8xAIiiJrKRPPMD/Qi5HA0up4vX1lbnuPNltOIVwG6rNEHlSSpPJ/eNEwGoXPmhxtbqThKQvecP8smHIQR8Neb7fD7bXNQk1FpARYGCfXkeGQY7FFbJzLAlvmGPpGMb5iG+wB9Wn8kvUXyxVv10swlZCo9/Wse3Z87LSo07aPBlA17uQom2ZQnDd2MBQBM11QOxDE42gqh8AW35Yv+066SXGLo7ZUifPIfy+Qp64B6DFgndByVHGsMAHDqQVJoLNb48QPXUawpDiS9X32MQ7xxYwYm2uwWTb25BcvmN0AvCGgpTwjML3XOrVy8NnJbMEPdnpNxDXnjkarz2d3duQze9d2CBYYWWYPtxVzrifm9woSupEjQRoZfZQ2o4DMCYZl71aL8HCLMotSDdvb/I7n09uCbm36uQ/pvmEiyqotIfAGVD1GAG6f+xJgyEuh8k6IsQymGEJci9YWm9dfbGAAiuDWgnYPvvHW80nJa0UflqSPKcz4r12s1BNQwyEINILy80XvemqP9ajiuOJcfDg4AvijCYEuxusNG9nnTBACTIUaqjVkWgiRiaRwKgKJrP469HsFB2uf2R74RmqdOeK5JovXWmxbOu6lqWKJkq7G12g/4p74j9TYrjAbNHAwB45L0Pxy+jXZDyDhgZ14YD40nrTJunTxtj1zCugCnFfceyvCh5FZDHtdq//rAMP+E8GDLkD0enNXfkH47kc0qS5J+k8lYKx42/rl1ag9fjVRr/Afvj2qvJO6V+AAAAAElFTkSuQmCC";
export {
  l as M,
  p as O,
  D as a,
  N as b,
  h as c,
  C as d,
  d as e,
  Q as f,
  w as g,
  u as h,
  O as m,
  m as o,
  r,
  B as s
};
