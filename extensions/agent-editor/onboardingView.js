import { j as e, d as w } from "./jsx-runtime-CWOFuNcx.js";
import { R as m, T as l, S as s, a4 as C, aj as f, ak as j, r as x, a7 as b, ad as y, a9 as k, a1 as A, a6 as M } from "./PageContainers-BqHFWUr4.js";
import { d as P, y as $ } from "./Link-llJmH--q.js";
import { O as i } from "./settings-7VMAPLzn.js";
import { u as I, a as V, S as H } from "./StatusBadge-w2RvyUis.js";
import { b as B, o as E } from "./index-DNoCduqT.js";
import { g as F } from "./compatibilityUtils-R3Pg1ddN.js";
import { o as n } from "./genericUtils-GaF65l2f.js";
import { C as L } from "./CenteredLoadingSpinner-NelG--07.js";
import { D as v } from "./formelements-DRgD5gZX.js";
const S = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5%205V2C10.5%201.725%2010.275%201.5%2010%201.5H2C1.725%201.5%201.5%201.725%201.5%202V8C1.5%208.275%201.725%208.5%202%208.5H3.5V11L6%209.57'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%206.5H14C14.275%206.5%2014.5%206.725%2014.5%207V12C14.5%2012.275%2014.275%2012.5%2014%2012.5H12.5V14.5L9.5%2012.5H8C7.725%2012.5%207.5%2012.275%207.5%2012V7C7.5%206.725%207.725%206.5%208%206.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", G = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5%205V2C10.5%201.725%2010.275%201.5%2010%201.5H2C1.725%201.5%201.5%201.725%201.5%202V8C1.5%208.275%201.725%208.5%202%208.5H3.5V11L6%209.57'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%206.5H14C14.275%206.5%2014.5%206.725%2014.5%207V12C14.5%2012.275%2014.275%2012.5%2014%2012.5H12.5V14.5L9.5%2012.5H8C7.725%2012.5%207.5%2012.275%207.5%2012V7C7.5%206.725%207.725%206.5%208%206.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var O = Object.defineProperty, R = (t, o) => O(t, "name", { value: o, configurable: !0 });
const D = R((t) => e.jsx(m, { light: G, dark: S, ...t }), "FeedbackIcon");
var T = Object.defineProperty, Z = (t, o) => T(t, "name", { value: o, configurable: !0 });
const N = Z(({ title: t, type: o, icon: r, buttons: c, children: h }) => e.jsxs(z, { $type: o, children: [r && e.jsx("div", { children: r }), e.jsxs(W, { children: [e.jsx(K, { children: t }), e.jsx(U, { children: h }), c && e.jsx(Y, { children: c.map((a, p) => e.jsxs(q, { onPress: a.onPress, isDisabled: a.isDisabled, children: [a.caption, a.isExternal && e.jsx(P, {})] }, p)) })] })] }), "Card"), z = s.div`
    display: flex;
    padding: ${l.spacing16};
    border: ${l.borderWidthMd} solid ${({ theme: t }) => t.colorsBorderSecondary};
    border-radius: ${l.borderRadiusSm};
    gap: ${l.spacing16};
    background-color: ${({ theme: t, $type: o }) => o === "emphasised" ? t.colorsBackgroundCanvasBase : t.colorsBackgroundDefault};
`, W = s.div`
    display: flex;
    flex-direction: column;
    gap: ${l.spacing8};
`, K = s.span`
    font-weight: 600;
    font-size: 16px;
`, U = s.div`
    color: ${({ theme: t }) => t.colorsTextPrimaryDefault};
`, Y = s.div`
    padding-top: ${l.spacing4};
    display: flex;
    gap: 10px;
`, q = s(C)`
    gap: ${l.spacing4};
`, _ = s.div`
    && > div {
        border-color: ${({ theme: t }) => t.colorsBorderPrimary};
    }
`, d = (t) => /* @__PURE__ */ e.jsx(_, { children: /* @__PURE__ */ e.jsx(N, { ...t }) }), J = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203.5H2C1.72386%203.5%201.5%203.72386%201.5%204V12C1.5%2012.2761%201.72386%2012.5%202%2012.5H14C14.2761%2012.5%2014.5%2012.2761%2014.5%2012V4C14.5%203.72386%2014.2761%203.5%2014%203.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%204L8%208.5L1.5%204'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", Q = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203.5H2C1.72386%203.5%201.5%203.72386%201.5%204V12C1.5%2012.2761%201.72386%2012.5%202%2012.5H14C14.2761%2012.5%2014.5%2012.2761%2014.5%2012V4C14.5%203.72386%2014.2761%203.5%2014%203.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%204L8%208.5L1.5%204'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var X = Object.defineProperty, ee = (t, o) => X(t, "name", { value: o, configurable: !0 });
const te = ee((t) => e.jsx(m, { light: Q, dark: J, ...t }), "MessageDefinitionIcon"), oe = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.5%207.5V12C3.5%2012.275%203.725%2012.5%204%2012.5H12C12.275%2012.5%2012.5%2012.275%2012.5%2012V7.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%206.5L8%209.5L1.5%206.5L8%203.5L14.5%206.5ZM14.5%206.5V10.5'%20stroke='%23A4A4A4'%20stroke-linejoin='round'/%3e%3c/svg%3e", se = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.5%207.5V12C3.5%2012.275%203.725%2012.5%204%2012.5H12C12.275%2012.5%2012.5%2012.275%2012.5%2012V7.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%206.5L8%209.5L1.5%206.5L8%203.5L14.5%206.5ZM14.5%206.5V10.5'%20stroke='%23535965'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var re = Object.defineProperty, ie = (t, o) => re(t, "name", { value: o, configurable: !0 });
const ne = ie((t) => e.jsx(m, { light: se, dark: oe, ...t }), "MxAcademyIcon"), ae = ({
  width: t = "1em",
  height: o = "1em",
  stroke: r = "currentColor",
  className: c,
  style: h
}) => /* @__PURE__ */ e.jsxs(
  "svg",
  {
    width: t,
    height: o,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: c,
    style: h,
    children: [
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M9.80769 18.5H6.15385C4.13588 18.5 2.5 16.8641 2.5 14.8462V13.4872C2.5 11.4692 4.13588 9.83333 6.15385 9.83333H6.88462V9.11111C6.88462 7.11778 8.52154 5.5 10.5385 5.5H13.4615C15.4785 5.5 17.1154 7.11778 17.1154 9.11111V10.5556H17.8462C19.8641 10.5556 21.5 12.1914 21.5 14.2094V14.8889C21.5 16.8833 19.8833 18.5 17.8889 18.5H14.1923",
          stroke: r,
          strokeMiterlimit: "10"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "path",
        {
          d: "M7.5 13.5C9.98528 13.5 12 11.4853 12 9C12 11.4853 14.0147 13.5 16.5 13.5C14.0147 13.5 12 15.5147 12 18C12 15.5147 9.98528 13.5 7.5 13.5Z",
          stroke: "#146FF4"
        }
      )
    ]
  }
), g = f`
    width: 32px;
    height: 32px;
`, de = s(A)`
    ${g}
`, le = s(D)`
    ${g}
`, ce = s(ne)`
    ${g}
`, he = s(te)`
    ${g}
`, ge = s.h1`
    font-weight: 600;
    margin: 0;
`, u = s.h2`
    font-weight: 600;
    margin: 0;
    font-size: 20px;
`, pe = s(M)`
    && {
        padding: 40px 80px 0;
    }
    ${j} {
        height: 40px;
    }
`, me = s(v)`
    flex-basis: 100%;
`, ue = s.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(360px, 720px));
    grid-template-rows: auto repeat(4, 1fr);
    grid-auto-flow: column;
    justify-content: start;
    gap: 16px 24px;

    /* Stretch each card to fill its equal-height row */
    & > div > div {
        height: 100%;
    }

    /* Push the button row to the bottom of each card. */
    & > div > div > div > div:last-child {
        margin-top: auto;
        flex-wrap: wrap;
    }
`, xe = s.div``, ve = ({ studioPro: t }) => {
  const { data: o, agentEditorVersion: r, isPending: c, isError: h, refresh: a } = I(t), p = F(h, o);
  return V(
    x.useCallback(() => {
      a();
    }, [a])
  ), o.length === 0 && c ? /* @__PURE__ */ e.jsx(L, {}) : /* @__PURE__ */ e.jsx(pe, { children: /* @__PURE__ */ e.jsxs(b, { children: [
    /* @__PURE__ */ e.jsxs(me, { alignItems: "center", children: [
      /* @__PURE__ */ e.jsx(de, { src: B, alt: "Agent Editor" }),
      /* @__PURE__ */ e.jsxs(ge, { children: [
        "Agent Editor V ",
        r
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(ue, { children: [
      /* @__PURE__ */ e.jsx(u, { children: "Get started" }),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: /* @__PURE__ */ e.jsxs(v, { alignItems: "center", children: [
            /* @__PURE__ */ e.jsx("div", { children: "1. Make sure you're ready to build" }),
            /* @__PURE__ */ e.jsx(H, { status: p })
          ] }),
          buttons: [
            {
              caption: "Open Compatibility Overview",
              onPress: () => E(t)
            }
          ],
          children: /* @__PURE__ */ e.jsxs("div", { children: [
            "Welcome to Agent Editor Version ",
            r,
            "! First, ensure that you have the correct module versions installed. You can check this by navigating to the Module Compatibility Overview, which is also accessible under Extensions in the top menu."
          ] })
        }
      ),
      /* @__PURE__ */ e.jsxs(
        d,
        {
          title: "2. Create your first agent",
          buttons: [
            {
              caption: "How to create your first agent",
              isExternal: !0,
              onPress: () => n(i.CreateFirstAgent)
            }
          ],
          children: [
            "This Mendix Docs guides you through leveraging Agent Editor in Studio Pro to build and manage agents within your app model. You'll learn how to define agents as documents, integrating them with models, knowledge bases, and MCP services. Not sure where to start? Check out the",
            " ",
            /* @__PURE__ */ e.jsx($, { onPress: () => n(i.GenAIConcepts), children: "GenAI Concepts" }),
            " to enhance your understanding."
          ]
        }
      ),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: "3. Integrate your agent into the app",
          buttons: [
            {
              caption: "Calling the agent",
              isExternal: !0,
              onPress: () => n(i.CallingTheAgent)
            }
          ],
          children: "Integrate your agent into the app by adding a microflow call that invokes the agent editor agent."
        }
      ),
      /* @__PURE__ */ e.jsx(xe, { "aria-hidden": "true" }),
      /* @__PURE__ */ e.jsx(u, { children: "Resources" }),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: "GenAI Cloud GenAI",
          type: "emphasised",
          buttons: [
            {
              caption: "Mendix Cloud GenAI portal",
              isExternal: !0,
              onPress: () => n(i.MxCloudGenAIPortal)
            },
            {
              caption: "Mendix Cloud GenAI Resource Packs",
              isExternal: !0,
              onPress: () => n(i.MxCloudGenAIResourcePacks)
            }
          ],
          icon: /* @__PURE__ */ e.jsx(ae, { width: "32", height: "32" }),
          children: "Mendix Cloud provides GenAI Resource Packs to help developers integrate GenAI capabilities into custom applications. There are packs that offer access to large language models for text generation and embeddings, as well as Knowledge Base Resources."
        }
      ),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: "Academy Course",
          type: "emphasised",
          buttons: [
            {
              caption: "Learn more",
              isExternal: !0,
              onPress: () => n(i.MxAcademy)
            }
          ],
          icon: /* @__PURE__ */ e.jsx(ce, {}),
          children: "Don't know where to start? Check out Mendix Academy to learn how to build and deploy your agents."
        }
      ),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: "Feedback?",
          type: "emphasised",
          icon: /* @__PURE__ */ e.jsx(le, {}),
          buttons: [
            {
              caption: "Give feedback",
              isExternal: !0,
              onPress: () => n(i.Feedback)
            }
          ],
          children: "We would love to hear your thoughts on this module! Please share any feedback you have."
        }
      ),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: "Stay up-to-date!",
          type: "emphasised",
          icon: /* @__PURE__ */ e.jsx(he, {}),
          buttons: [
            {
              caption: "Sign up",
              isExternal: !0,
              onPress: () => n(i.Newsletter)
            }
          ],
          children: "Sign up to receive the monthly Mendix GenAI Updates."
        }
      )
    ] })
  ] }) });
}, $e = {
  async loaded(t) {
    const o = w(t), r = document.getElementById("root");
    if (!r) throw new Error("Failed to find the root element");
    y.createRoot(r).render(
      /* @__PURE__ */ e.jsx(x.StrictMode, { children: /* @__PURE__ */ e.jsx(k, { studioPro: o, children: /* @__PURE__ */ e.jsx(ve, { studioPro: o }) }) })
    );
  }
};
export {
  ve as Onboarding,
  $e as component
};
