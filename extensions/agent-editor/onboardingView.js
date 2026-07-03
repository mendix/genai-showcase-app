import { j as e, d as w } from "./jsx-runtime-CWOFuNcx.js";
import { R as m, T as l, S as s, a4 as C, aj as f, r as x, a7 as j, ad as b, a9 as y, a1 as k, a6 as A } from "./PageContainers-BvK5usmz.js";
import { d as M, y as P } from "./Link-Bxad9cv4.js";
import { b as I, o as V, O as r } from "./index-BezRtLNl.js";
import { u as $, g as H, a as B, S as E } from "./StatusBadge-SgCxzjaK.js";
import { o as n } from "./genericUtils-GaF65l2f.js";
import { C as F } from "./CenteredLoadingSpinner-DRQ0Sbi_.js";
import { D as v } from "./formelements-Daexkze0.js";
const L = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5%205V2C10.5%201.725%2010.275%201.5%2010%201.5H2C1.725%201.5%201.5%201.725%201.5%202V8C1.5%208.275%201.725%208.5%202%208.5H3.5V11L6%209.57'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%206.5H14C14.275%206.5%2014.5%206.725%2014.5%207V12C14.5%2012.275%2014.275%2012.5%2014%2012.5H12.5V14.5L9.5%2012.5H8C7.725%2012.5%207.5%2012.275%207.5%2012V7C7.5%206.725%207.725%206.5%208%206.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", G = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.5%205V2C10.5%201.725%2010.275%201.5%2010%201.5H2C1.725%201.5%201.5%201.725%201.5%202V8C1.5%208.275%201.725%208.5%202%208.5H3.5V11L6%209.57'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M8%206.5H14C14.275%206.5%2014.5%206.725%2014.5%207V12C14.5%2012.275%2014.275%2012.5%2014%2012.5H12.5V14.5L9.5%2012.5H8C7.725%2012.5%207.5%2012.275%207.5%2012V7C7.5%206.725%207.725%206.5%208%206.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var S = Object.defineProperty, O = (t, o) => S(t, "name", { value: o, configurable: !0 });
const R = O((t) => e.jsx(m, { light: G, dark: L, ...t }), "FeedbackIcon");
var D = Object.defineProperty, T = (t, o) => D(t, "name", { value: o, configurable: !0 });
const Z = T(({ title: t, type: o, icon: i, buttons: c, children: h }) => e.jsxs(N, { $type: o, children: [i && e.jsx("div", { children: i }), e.jsxs(z, { children: [e.jsx(W, { children: t }), e.jsx(K, { children: h }), c && e.jsx(U, { children: c.map((a, p) => e.jsxs(Y, { onPress: a.onPress, isDisabled: a.isDisabled, children: [a.caption, a.isExternal && e.jsx(M, {})] }, p)) })] })] }), "Card"), N = s.div`
    display: flex;
    padding: ${l.spacing16};
    border: ${l.borderWidthMd} solid ${({ theme: t }) => t.colorsBorderSecondary};
    border-radius: ${l.borderRadiusSm};
    gap: ${l.spacing16};
    background-color: ${({ theme: t, $type: o }) => o === "emphasised" ? t.colorsBackgroundCanvasBase : t.colorsBackgroundDefault};
`, z = s.div`
    display: flex;
    flex-direction: column;
    gap: ${l.spacing8};
`, W = s.span`
    font-weight: 600;
    font-size: 16px;
`, K = s.div`
    color: ${({ theme: t }) => t.colorsTextPrimaryDefault};
`, U = s.div`
    padding-top: ${l.spacing4};
    display: flex;
    gap: 10px;
`, Y = s(C)`
    gap: ${l.spacing4};
`, q = s.div`
    && > div {
        border-color: ${({ theme: t }) => t.colorsBorderPrimary};
    }
`, d = (t) => /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsx(Z, { ...t }) }), _ = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203.5H2C1.72386%203.5%201.5%203.72386%201.5%204V12C1.5%2012.2761%201.72386%2012.5%202%2012.5H14C14.2761%2012.5%2014.5%2012.2761%2014.5%2012V4C14.5%203.72386%2014.2761%203.5%2014%203.5Z'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%204L8%208.5L1.5%204'%20stroke='%23579BF9'%20stroke-miterlimit='10'/%3e%3c/svg%3e", J = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%203.5H2C1.72386%203.5%201.5%203.72386%201.5%204V12C1.5%2012.2761%201.72386%2012.5%202%2012.5H14C14.2761%2012.5%2014.5%2012.2761%2014.5%2012V4C14.5%203.72386%2014.2761%203.5%2014%203.5Z'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%204L8%208.5L1.5%204'%20stroke='%23146FF4'%20stroke-miterlimit='10'/%3e%3c/svg%3e";
var Q = Object.defineProperty, X = (t, o) => Q(t, "name", { value: o, configurable: !0 });
const ee = X((t) => e.jsx(m, { light: J, dark: _, ...t }), "MessageDefinitionIcon"), te = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.5%207.5V12C3.5%2012.275%203.725%2012.5%204%2012.5H12C12.275%2012.5%2012.5%2012.275%2012.5%2012V7.5'%20stroke='%23A4A4A4'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%206.5L8%209.5L1.5%206.5L8%203.5L14.5%206.5ZM14.5%206.5V10.5'%20stroke='%23A4A4A4'%20stroke-linejoin='round'/%3e%3c/svg%3e", oe = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.5%207.5V12C3.5%2012.275%203.725%2012.5%204%2012.5H12C12.275%2012.5%2012.5%2012.275%2012.5%2012V7.5'%20stroke='%23535965'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.5%206.5L8%209.5L1.5%206.5L8%203.5L14.5%206.5ZM14.5%206.5V10.5'%20stroke='%23535965'%20stroke-linejoin='round'/%3e%3c/svg%3e";
var se = Object.defineProperty, ie = (t, o) => se(t, "name", { value: o, configurable: !0 });
const re = ie((t) => e.jsx(m, { light: oe, dark: te, ...t }), "MxAcademyIcon"), ne = ({
  width: t = "1em",
  height: o = "1em",
  stroke: i = "currentColor",
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
          stroke: i,
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
`, ae = s(k)`
    ${g}
`, de = s(R)`
    ${g}
`, le = s(re)`
    ${g}
`, ce = s(ee)`
    ${g}
`, he = s.h1`
    font-weight: 600;
    margin: 0;
`, u = s.h2`
    font-weight: 600;
    margin: 0;
    font-size: 20px;
`, ge = s(A)`
    && {
        padding: 40px 80px;
    }
`, pe = s(v)`
    flex-basis: 100%;
`, me = s.div`
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
`, ue = s.div``, xe = ({ studioPro: t }) => {
  const { data: o, agentEditorVersion: i, isPending: c, isError: h, refresh: a } = $(t), p = H(h, o);
  return B(
    x.useCallback(() => {
      a();
    }, [a])
  ), o.length === 0 && c ? /* @__PURE__ */ e.jsx(F, {}) : /* @__PURE__ */ e.jsx(ge, { children: /* @__PURE__ */ e.jsxs(j, { children: [
    /* @__PURE__ */ e.jsxs(pe, { alignItems: "center", children: [
      /* @__PURE__ */ e.jsx(ae, { src: I, alt: "Agent Editor" }),
      /* @__PURE__ */ e.jsxs(he, { children: [
        "Agent Editor V ",
        i
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(me, { children: [
      /* @__PURE__ */ e.jsx(u, { children: "Get started" }),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: /* @__PURE__ */ e.jsxs(v, { alignItems: "center", children: [
            /* @__PURE__ */ e.jsx("div", { children: "1. Make sure you're ready to build" }),
            /* @__PURE__ */ e.jsx(E, { status: p })
          ] }),
          buttons: [
            {
              caption: "Open Compatibility Overview",
              onPress: () => V(t)
            }
          ],
          children: /* @__PURE__ */ e.jsxs("div", { children: [
            "Welcome to Agent Editor Version ",
            i,
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
              onPress: () => n(r.CreateFirstAgent)
            }
          ],
          children: [
            "This Mendix Docs guides you through leveraging Agent Editor in Studio Pro to build and manage agents within your app model. You'll learn how to define agents as documents, integrating them with models, knowledge bases, and MCP services. Not sure where to start? Check out the",
            " ",
            /* @__PURE__ */ e.jsx(P, { onPress: () => n(r.GenAIConcepts), children: "GenAI Concepts" }),
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
              onPress: () => n(r.CallingTheAgent)
            }
          ],
          children: "Integrate your agent into the app by adding a microflow call that invokes the agent editor agent."
        }
      ),
      /* @__PURE__ */ e.jsx(ue, { "aria-hidden": "true" }),
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
              onPress: () => n(r.MxCloudGenAIPortal)
            },
            {
              caption: "Mendix Cloud GenAI Resource Packs",
              isExternal: !0,
              onPress: () => n(r.MxCloudGenAIResourcePacks)
            }
          ],
          icon: /* @__PURE__ */ e.jsx(ne, { width: "32", height: "32" }),
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
              onPress: () => n(r.MxAcademy)
            }
          ],
          icon: /* @__PURE__ */ e.jsx(le, {}),
          children: "Don't know where to start? Check out Mendix Academy to learn how to build and deploy your agents."
        }
      ),
      /* @__PURE__ */ e.jsx(
        d,
        {
          title: "Feedback?",
          type: "emphasised",
          icon: /* @__PURE__ */ e.jsx(de, {}),
          buttons: [
            {
              caption: "Give feedback",
              isExternal: !0,
              onPress: () => n(r.Feedback)
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
          icon: /* @__PURE__ */ e.jsx(ce, {}),
          buttons: [
            {
              caption: "Sign up",
              isExternal: !0,
              onPress: () => n(r.Newsletter)
            }
          ],
          children: "Sign up to receive the monthly Mendix GenAI Updates."
        }
      )
    ] })
  ] }) });
}, Ae = {
  async loaded(t) {
    const o = w(t), i = document.getElementById("root");
    if (!i) throw new Error("Failed to find the root element");
    b.createRoot(i).render(
      /* @__PURE__ */ e.jsx(x.StrictMode, { children: /* @__PURE__ */ e.jsx(y, { studioPro: o, children: /* @__PURE__ */ e.jsx(xe, { studioPro: o }) }) })
    );
  }
};
export {
  xe as Onboarding,
  Ae as component
};
