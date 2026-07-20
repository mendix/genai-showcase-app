import { getComponentFramework as s } from "@mendix/component-framework";
function m(A) {
  const t = s(A);
  return {
    network: {
      httpListener: t.getApi("mendix.HttpListenerApi")
    },
    analytics: t.getApi("mendix.AnalyticsApi")
  };
}
const a = "agenteditor/settings.json", E = "onboardingView", l = "Get Started", p = {
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
function i() {
  return {
    shown: !1,
    version: ""
  };
}
async function h(A) {
  try {
    const n = (await A.app.model.modules.getModules()).find((e) => e.name === "AgentEditor");
    if (n?.appStoreVersion)
      return n.appStoreVersion;
  } catch {
  }
  return "2.1.0";
}
function g() {
  return {};
}
async function r(A) {
  let t = "";
  try {
    t = await A.app.files.getFile(a) || "";
  } catch {
  }
  const n = t.trim();
  if (n !== "")
    try {
      return JSON.parse(n);
    } catch {
    }
  const e = g();
  return await o(A, e), e;
}
async function o(A, t) {
  await A.app.files.putFile(a, JSON.stringify(t, null, 2));
}
function C(A, t) {
  return A.onboarding?.shown !== !0 || A.onboarding?.version !== t;
}
async function c(A, t) {
  const n = await r(A), e = {
    ...n,
    onboarding: {
      ...i(),
      ...n.onboarding,
      ...t
    }
  };
  await o(A, e);
}
async function w(A, t) {
  await c(A, { shown: !0, version: t });
}
const S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADFElEQVRYCe1WzW7TQBCeTVLoj5Ec0d7NG7RPQPoGFuVAEVJboaKemvQJ2jxBXU6IgupeaA608hvEPEHzBvhOpEYiIYjGWb5xbNeGtWP1hshK9s7OfvPj2ZnxEs3GLAL/ewRE0QCYZkMvLf6oCylrkOFHNTpS0MnVp1NbtaniFXLAfLFnlIXfhgJDpUTB8+Zkeb3Veucp9lKsQg5sbO5+hZRBJDwhxzujn1rHcaxeShMWG5uvTaLyMZEEljx/eLvmOPZfuKRcKblQ0c9e7m6Db7Bxf7i49rn1wVUZZ9nLi4+O//DXGmOxNCqLDxrMzxtTHQCgHio4yDKcNODYdo+jxDwp5dPknoqe6oCUtMqClxfvHZUCFW80P+qE/JpqP8mrJBdMF8z2QGy53pdMaOK26lnVXsDEi6OAvImWuXPKgUm2D9ok+czzx3Ljew24YPSpwlFyJ6v0G44wKrM8U0dwV2qc7XLdHy5VLy9OBT9ptUgzElsxT4rDmFYTq0LSGVfTC5R0EhIr5mxnUJTteQm3vD84JCGPkGYIe6BCJymOum+XmknlEZ1XnnEEpmW70ZA6hx3n3p4Yh3ohmkLQQWAIDq3U+2fB0USWwzmvPGMHpmV7Xw5u8JVt6Kzxl6Pl7nQtzfpmaTaCwE70JNE2Y6LkDO0HU1Z5xg4kwdNpZACRHuHkuHwDp6Jl5qwqz8IOdE80WJXrQozPYQFnTseP94dbK/v4QQnfxnno8MpljCaWqiovOAp/8lNlyJumua1n9e+u9cgFxMU5ewj1IQxbMvhyxEPIJvaPsE9dfhUcyQi4LFPR5rmmc0doyAUIxyB0mLcj43mCk2oAQlAnwsUOoO6/MFP6/hlHIQJkzvjiaE8KeR7RWTN3WKIS/pSwMaaTCBc7gASx4JqHDaO8MHe9sfnGjECqeURxv6fwaFSwoLU/f7VXKy8Mrlk327hq3V1YRFJq0orHKLXgf57cStGqzsiAsO2msOmFwEWllLqoxBFgoIMbDP56T9ATdtBgOmnh+6/wlS6OuMn3iSK3pPtbmknOIvAvRuA3fQBEYKnukL0AAAAASUVORK5CYII=", x = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAACi0lEQVRYCe1XvW4aQRCe2QMLpQl+A1KlSYGb1PgNHFAkoDEoAqUDP4HxE4C7yBSGBiMlOLhLSZkqoYiU0n6DXJcIczf55swdPzYyiQ9ZSljpbmdmd2e+m2V3Poj+98aLCXidLyVdoTqxJEk4vjj+VzqLTcT9qGsddbvvrmZ9zAHI5Mr7RNKanRC+zIXe2Unb9xsA2Mu+TVjsXE4GjqNiNRbR+ov+tFffERoXhPlQ1xqmnfed5lDliL60WcY5JEGimI8+dE5qnjGkV/8m7bVM7g221FS8LSbaVfdmJsaeyhHXtGZsoYqORBsTh0nf8RSAENARhZV2P8BsP8mEmrxYKkwBqPYIbQNgk4FNBjYZePQMBMVo2SWYyZUuiWmAcfADPKQyH6Ns1yEn8AxR3You0akWM+fn9a6JRSooalr92uf3FLZVMpCA44IGQqnso08h+EcP1I2uBKbArlxgLGk9idYRvAaQtLVCYVsFAPyS3es0i45rDlQBiRiozq6LTKjBPB3Hxg0IVxOwJCK32I83d+G1MoCFdbfUfqtlg8YN/IEtsgLZt93VrwrgrrVztnS+VPC+nsnWgWt2TucmLFHCASASZyGPboF47iDWAE8qnStXl8QNzPeeAsEvnIW9r6LYL1tG0SLYsqdj34cGOoLbmHeh85TQgAMWjXFSag8iLRECUprJl34ghXGQ0WfrYkUzxNfunTW3FdN0CwTHDG1kuRXt19EMjfc9v0x933+wBbhMDnCev+I8V9P5so0z3A4rE1nQ8hG7FSapamD9g+IDCLZADelsqcCMG22NTYSK591myw9h+YL23799GT5/8bJt2N3GrZeAKYbn4Q1HE1/6GVl+hb3/9HCH/5KH30bx2On377S8AAAAAElFTkSuQmCC", I = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABUhJREFUeAHtms9vG0UUx9+bDXEQAsIZEJsDCAmk1jdzwrlViBb3gtxe6v4FNKJE5WT7AqilSvoX1FwSA4c65Ye4ZX1BQTnYCLjAwVt+3I2QSJ3E8/pm7ai1u7M/7PWPdf25OPLMxvu+82bmzXsDMGfOnDlPMAgRkMq+myak00KiSYjPw1iheyjb9cThgWVVrCaEZGABlNFIkAEDLwHBMkwBRFACOCrulX+wgz4TWoBU9owJsHAbEdMwnTSllMWfvvxuM0hnA0KQunDuEgpRQcDXYXpZ4sE589Kbr8Hfv/5e9escWIDUxXN5BFKqLkEMUB764huv/vvPb3/sefaDADjGExUgfjSJjpJea4IAH1LZd3IxNV6xjLxeeXXw9AC14KF4qjYtq/ygJA7+e0G3RXp6AKtXiLvxioPEMzldm1YAZ7tD3uNnAERxStemFcAZ/RmBd68VXZt+CgjxHjwBuAqgwlyOK2M/94PgKgAfaE7DTIHaQ5Jw/5JMmCEIoKJrc/eAGdj6ejEsXYtvJBh3CKG0V67YuvYFmGnQBimKXj10AtgQdxCbxyDO72/rR1+hmQLShjjTMX51f6tS9+vqKsDS0mIF4kuVpEgGMV6hPQ2+deHsLn+kITagTUScD/ymFOYp7SIoAXZEHARgd+dRvPXj1t0CDIBWgKcTRql1KPPTGxJ3R3z7bgmGwCchcjaHCJ4ZlQlQZcMLe+VvLYgA35wgrwV3+CMDk4ZghzgpG5XhJ/gGQomEcbnVknw4msD5oDu/F/8Xm1alErrqE+gngnRKZTMmotwdowiRurkXgStDHRGOC/zIaNJk3dGWUnjG7opaobEMCVhOfrxiw5AMUBpTCyPmI/SGKrSPNxOHCUvn5spg8az4gPMUaX5hlat4ZGci3g2wTtDeSX64UoKQDFQcVd4A0E4PLER3tI+Ojiv7X3+vjdhqNxppNAyuSAWNR8iWJIthhBi6PO6kz/gFnWIp4inXuIEN5u9/5hesc66h4jW3T0abn7kCMFheghMgFrXal4NMkUjuB/TT8ZAOS/ehGWQFV6NtCIPd3BntCIIv9oaWXPUTYSQChKH2eSODbDiOJOxmEVAmk2sr2gEIlRChq1l2c8qAwIeFBsmujWTh9a9CnSCVq+Nzxh0c6XkDTSEFr1Owpu0BAaD19zOAxgb/aXp04+wLFfFGuQQ+1D5tmCJh7Pr8v8iQ7fZq8qMVy63NNydI6xfzbLwKh02friZ7xm1az+Z9+sE4jVeonUTX5ilAx/iQpXHEgpcIv9y8p9pMGCNqmtU2Gq4Lq1aA7nwvwEC/yCJc4+f7UK4vuQ0mgTRcD3R6DzBwuGMwweNesGikYVIguVa73AsjV53RM2G4X0z3e4GBMLFyO2ruL7p7gIioNih7VadOHD9VaKYARfOiiP0XE6YuvTbzpbETSAVsLoxbgJFkdQIhhOupc6wC8H4cqFgRPWQn11623Fo0AmA0L0q9bsdpLt+rq6NAEnyha9PsAhSNAAJ7DkhSSHXVdszTgGwQsqRrdRUAPytb/GHBUL9LVf4/9qNfOcdSolswRpwM0Zo+J+AVCWqPkIEQkHP7uuMFNJa1QHLlyC89pr8n+MlWnSOXwURAPhb3jf4Jygs4SXEeRnwHoWP8KwW/ft5XZa9vb3Iw43nD4jFYNDa+4NVFuaTE9ioOO83caUrifGAA4xXBEiLXsiZILHHvt/WdOL29gFcczwlB7eafOYEQxRHZWV/UFPNKgfUTKifYFSLTGyrzlrmAVljD+6lt/JUGySU4DHleII4tOMjR7fNz5syZM8eDB99r8a6sPZZtAAAAAElFTkSuQmCC";
export {
  p as M,
  u as O,
  x as a,
  l as b,
  I as c,
  E as d,
  w as e,
  h as g,
  S as m,
  m as o,
  r,
  C as s
};
